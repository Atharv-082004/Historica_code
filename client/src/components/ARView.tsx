import { useEffect, useMemo, useState } from "react";
import { useRoute, useLocation } from "wouter";
import { monuments } from "../data/monuments";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import { Button } from "./ui/button";
import { useAudio } from "../lib/stores/useAudio";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { useModelLoader } from "../hooks/useModelLoader";
import { toast } from "sonner";
import { Environment, OrbitControls } from "@react-three/drei";

type ARLayout = {
  target: [number, number, number];
  cameraPosition: [number, number, number];
  floorY: number;
  minDistance: number;
  maxDistance: number;
};

const AR_MODEL_OVERRIDES: Record<string, { targetSize?: number; lift?: number; depth?: number }> = {
  "ajanta-ellora": { targetSize: 3, lift: 0.02, depth: 3.1 },
};

const ARCameraRig = ({ layout }: { layout: ARLayout }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(...layout.cameraPosition);
    camera.lookAt(...layout.target);
    camera.updateProjectionMatrix();
  }, [camera, layout]);

  return null;
};

const ARScene = ({
  modelPath,
  monumentId,
  onLayoutChange,
}: {
  modelPath: string;
  monumentId: string;
  onLayoutChange: (layout: ARLayout) => void;
}) => {
  const model = useModelLoader(modelPath);
  const [rotation, setRotation] = useState(0);

  const sceneLayout = useMemo(() => {
    if (!model?.scene) return null;

    const override = AR_MODEL_OVERRIDES[monumentId] ?? {};
    const cloned = model.scene.clone(true);
    const box = new THREE.Box3().setFromObject(cloned);

    if (box.isEmpty()) {
      return {
        scene: cloned,
        layout: {
          target: [0, 0.3, 0] as [number, number, number],
          cameraPosition: [0.7, 0.9, 3.4] as [number, number, number],
          floorY: -0.04,
          minDistance: 1.8,
          maxDistance: 6,
        },
      };
    }

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const targetMaxDimension = override.targetSize ?? 2;
    const unclampedScale = targetMaxDimension / maxDimension;
    const scaleFactor = Math.min(10, Math.max(0.05, unclampedScale));
    const lift = override.lift ?? 0.01;
    const depth = override.depth ?? 2.8;

    cloned.scale.setScalar(scaleFactor);
    cloned.position.set(
      -center.x * scaleFactor,
      -box.min.y * scaleFactor + lift,
      -center.z * scaleFactor,
    );

    const positionedBox = new THREE.Box3().setFromObject(cloned);
    const positionedSize = new THREE.Vector3();
    positionedBox.getSize(positionedSize);

    const floorY = positionedBox.min.y - 0.03;
    const horizontalSpan = Math.max(positionedSize.x, positionedSize.z, 1);
    const focusY = THREE.MathUtils.clamp(
      positionedBox.min.y + positionedSize.y * 0.24,
      floorY + 0.22,
      floorY + 1.15,
    );
    const cameraZ = depth + horizontalSpan * 1.05;
    const minDistance = THREE.MathUtils.clamp(horizontalSpan * 0.9, 1.6, 3.5);
    const maxDistance = THREE.MathUtils.clamp(horizontalSpan * 2.7, 5, 9);

    return {
      scene: cloned,
      layout: {
        target: [0, focusY, 0] as [number, number, number],
        cameraPosition: [cameraZ * 0.22, floorY + positionedSize.y * 0.42, cameraZ] as [number, number, number],
        floorY,
        minDistance,
        maxDistance,
      },
    };
  }, [model, monumentId]);

  useEffect(() => {
    if (sceneLayout) {
      onLayoutChange(sceneLayout.layout);
    }
  }, [sceneLayout, onLayoutChange]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.005);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  if (!model || !sceneLayout) return null;

  return (
    <>
      <ambientLight intensity={0.7} />
      <hemisphereLight intensity={0.55} groundColor="#d4d4d8" color="#ffffff" />
      <directionalLight position={[5, 6, 4]} intensity={1.2} castShadow />

      <primitive object={sceneLayout.scene} rotation={[0, rotation, 0]} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, sceneLayout.layout.floorY, 0]} receiveShadow>
        <circleGeometry args={[4.8, 64]} />
        <meshStandardMaterial color="#ececec" roughness={0.96} metalness={0.01} />
      </mesh>

      <Environment preset="park" />
    </>
  );
};

const ARView = () => {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute<{ id: string }>("/monument/:id/ar");
  const { setSelectedMonument, selectedMonument } = useAppContext();
  const audio = useAudio();
  const [layout, setLayout] = useState<ARLayout>({
    target: [0, 0.3, 0],
    cameraPosition: [0.7, 0.9, 3.4],
    floorY: -0.04,
    minDistance: 1.8,
    maxDistance: 6,
  });

  useEffect(() => {
    if (!match) return;

    const monument = monuments.find((m) => m.id === params.id);
    if (monument) {
      setSelectedMonument(monument);
    } else {
      setLocation("/");
    }
  }, [match, params?.id, setLocation, setSelectedMonument]);

  const handleBack = () => {
    audio.playHit();
    if (selectedMonument) {
      setLocation(`/monument/${selectedMonument.id}`);
    } else {
      setLocation("/");
    }
  };

  if (!selectedMonument) return null;

  return (
    <div className="w-full h-full relative overflow-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-full">
        <Canvas
          shadows
          camera={{ position: layout.cameraPosition, fov: 42 }}
          gl={{
            alpha: true,
            antialias: true,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
        >
          <ARCameraRig layout={layout} />
          <ARScene modelPath={selectedMonument.primaryModel} monumentId={selectedMonument.id} onLayoutChange={setLayout} />
          <OrbitControls
            target={layout.target}
            enablePan={false}
            enableZoom
            minDistance={layout.minDistance}
            maxDistance={layout.maxDistance}
            minPolarAngle={Math.PI / 3.9}
            maxPolarAngle={Math.PI / 2.15}
            rotateSpeed={0.65}
            zoomSpeed={0.75}
          />
        </Canvas>

        <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-blue-50/25 to-slate-100/35"></div>

        <div className="absolute top-4 left-4 z-10">
          <Button variant="secondary" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
            </svg>
            Back
          </Button>
        </div>

        <div className="absolute top-4 right-4 z-10">
          <Button className="px-4 py-2 bg-primary text-primary-foreground rounded-md shadow-md" onClick={() => toast.info("AR mode is simulated in this demo")}>
            Start AR
          </Button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 p-2 rounded-md z-10 text-center">
          <h3 className="font-semibold">{selectedMonument.name}</h3>
          <p className="text-sm">Simulated AR preview with model placement adjusted for each monument.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ARView;
