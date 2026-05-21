import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useRoute, useLocation } from "wouter";
import { monuments, Monument } from "../data/monuments";
import { useAppContext } from "../context/AppContext";
import { Button } from "./ui/button";
import { useAudio } from "../lib/stores/useAudio";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useModelLoader } from "../hooks/useModelLoader";
import { Environment, OrbitControls, Html, Text } from "@react-three/drei";
import { VRButton } from "three/addons/webxr/VRButton.js";

const VR_MODEL_OVERRIDES: Record<string, { targetSize?: number; lift?: number }> = {
  "taj-mahal": { targetSize: 4.8, lift: 0.02 },
  "ajanta-ellora": { targetSize: 5.2, lift: 0.04 },
};

type VRLayout = {
  target: [number, number, number];
  cameraPosition: [number, number, number];
  minDistance: number;
  maxDistance: number;
  floorY: number;
};

const VRCameraRig = ({ layout }: { layout: VRLayout }) => {
  const { camera, gl } = useThree();
  useEffect(() => {
    if (!gl.xr.isPresenting) {
      camera.position.set(...layout.cameraPosition);
      camera.lookAt(...layout.target);
      camera.updateProjectionMatrix();
    }
  }, [camera, layout, gl]);
  return null;
};

const VRControllers = () => {
  const { gl, scene } = useThree();
  useEffect(() => {
    const controllers: THREE.XRTargetRaySpace[] = [];
    const lines: THREE.Line[] = [];

    for (let i = 0; i < 2; i++) {
      const controller = gl.xr.getController(i);
      scene.add(controller);
      controllers.push(controller);

      // Amber ray line
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -3),
      ]);
      const material = new THREE.LineBasicMaterial({ color: "#f59e0b" });
      const line = new THREE.Line(geometry, material);
      controller.add(line);
      lines.push(line);
    }

    return () => {
      controllers.forEach((c, i) => {
        c.remove(lines[i]);
        scene.remove(c);
      });
    };
  }, [gl, scene]);
  return null;
};

const VRFloorGrid = ({ floorY }: { floorY: number }) => (
  <group position={[0, floorY, 0]}>
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <circleGeometry args={[6, 64]} />
      <meshStandardMaterial color="#cfd5db" roughness={0.95} metalness={0.02} />
    </mesh>
    <gridHelper args={[10, 10, "#9ca3af", "#d1d5db"]} position={[0, 0.001, 0]} />
  </group>
);

const HotspotMarker = ({
  position,
  label,
}: {
  position: [number, number, number];
  label: string;
}) => {
  const [active, setActive] = useState(false);
  return (
    <group position={position} onClick={() => setActive(v => !v)}>
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#92400e"
          emissiveIntensity={0.6}
        />
      </mesh>
      {active && (
        <Html distanceFactor={5} position={[0, 0.25, 0]} center>
          <div className="bg-black/80 text-amber-200 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap border border-amber-400/40 pointer-events-none">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
};

const VRScene = ({
  monument,
  isExploring,
  onLayoutChange,
}: {
  monument: Monument;
  isExploring: boolean;
  onLayoutChange: (layout: VRLayout) => void;
}) => {
  const model = useModelLoader(monument.primaryModel);
  const modelGroupRef = useRef<THREE.Group>(null);
  const { gl } = useThree();

  const sceneLayout = useMemo(() => {
    if (!model?.scene) return null;
    const override = VR_MODEL_OVERRIDES[monument.id] ?? {};
    const cloned = model.scene.clone(true);
    const box = new THREE.Box3().setFromObject(cloned);

    if (box.isEmpty()) {
      return {
        scene: cloned,
        layout: {
          target: [0, 0.6, 0] as [number, number, number],
          cameraPosition: [1.8, 1.7, 5.2] as [number, number, number],
          minDistance: 1.35,
          maxDistance: 8.8,
          floorY: -1.05,
        },
      };
    }

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const targetMaxDimension = override.targetSize ?? 3.2;
    const scaleFactor = Math.min(8, Math.max(0.05, targetMaxDimension / maxDimension));
    const lift = override.lift ?? 0.03;

    cloned.scale.setScalar(scaleFactor);
    cloned.position.set(
      -center.x * scaleFactor,
      -box.min.y * scaleFactor + lift,
      -center.z * scaleFactor,
    );

    const positionedBox = new THREE.Box3().setFromObject(cloned);
    const positionedSize = new THREE.Vector3();
    positionedBox.getSize(positionedSize);
    const floorY = positionedBox.min.y - 0.04;

    const focusY = THREE.MathUtils.clamp(
      positionedBox.min.y + positionedSize.y * 0.38,
      floorY + 0.75,
      floorY + 2.4,
    );
    const horizontalSpan = Math.max(positionedSize.x, positionedSize.z, 1);
    const cameraDistance = THREE.MathUtils.clamp(horizontalSpan * 1.9, 4.2, 8.5);

    return {
      scene: cloned,
      layout: {
        target: [0, focusY, 0] as [number, number, number],
        cameraPosition: [cameraDistance * 0.42, focusY + 1.05, cameraDistance] as [number, number, number],
        minDistance: THREE.MathUtils.clamp(horizontalSpan * 0.7, 1.35, 2.8),
        maxDistance: THREE.MathUtils.clamp(horizontalSpan * 3.2, 6.5, 12),
        floorY,
      },
    };
  }, [model, monument.id]);

  useEffect(() => {
    if (sceneLayout) onLayoutChange(sceneLayout.layout);
  }, [sceneLayout, onLayoutChange]);

  useFrame((_state, delta) => {
    if (isExploring && !gl.xr.isPresenting && modelGroupRef.current) {
      modelGroupRef.current.rotation.y += delta * 0.22;
    }
  });

  if (!model || !sceneLayout) {
    return (
      <Html center>
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
          <div className="text-amber-200 text-sm bg-black/60 px-4 py-2 rounded-lg whitespace-nowrap">
            Loading monument…
          </div>
        </div>
      </Html>
    );
  }

  return (
    <>
      <color attach="background" args={["#dce4eb"]} />
      <ambientLight intensity={0.6} />
      <hemisphereLight intensity={0.5} groundColor="#9aa4af" color="#ffffff" />
      <directionalLight position={[6, 10, 7]} intensity={1.2} castShadow />

      <group ref={modelGroupRef}>
        <primitive object={sceneLayout.scene} />
        {monument.hotspots?.map((h, i) => (
          <HotspotMarker
            key={i}
            position={h.position as [number, number, number]}
            label={h.name}
          />
        ))}
      </group>

      <VRFloorGrid floorY={sceneLayout.layout.floorY} />
      <Environment preset="city" />
    </>
  );
};

const VRButtonInjector = () => {
  const { gl } = useThree();
  useEffect(() => {
    gl.xr.enabled = true;
    return () => { gl.xr.enabled = false; };
  }, [gl]);
  return null;
};

const VRView = () => {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute<{ id: string }>("/monument/:id/vr");
  const { setSelectedMonument, selectedMonument } = useAppContext();
  const audio = useAudio();
  const [isExploring, setIsExploring] = useState(false);
  const vrButtonContainerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<VRLayout>({
    target: [0, 0.85, 0],
    cameraPosition: [1.8, 1.9, 4.9],
    minDistance: 1.35,
    maxDistance: 8.8,
    floorY: -1.05,
  });

  useEffect(() => {
    if (!match) return;
    const monument = monuments.find((m) => m.id === params.id);
    if (monument) setSelectedMonument(monument);
    else setLocation("/");
  }, [match, params?.id, setLocation, setSelectedMonument]);

  // Inject Three.js VRButton into our container div
  useEffect(() => {
    const container = vrButtonContainerRef.current;
    if (!container) return;
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const btn = VRButton.createButton(canvas as unknown as THREE.WebGLRenderer);
    btn.style.cssText = "";
    btn.className = "px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg text-sm transition-colors cursor-pointer border-0";
    container.appendChild(btn);
    return () => { btn.remove(); };
  }, [selectedMonument]);

  const handleBack = () => {
    audio.playHit();
    setLocation(selectedMonument ? `/monument/${selectedMonument.id}` : "/");
  };

  const handleLayoutChange = useCallback((l: VRLayout) => setLayout(l), []);

  if (!selectedMonument) return null;

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#dce4eb]">
      {/* Back button */}
      <div className="absolute top-4 left-4 z-20">
        <Button variant="secondary" onClick={handleBack}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
          </svg>
          Back
        </Button>
      </div>

      {/* Status badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-black/70 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          {selectedMonument.name} — WebXR VR Ready
        </div>
      </div>

      {/* Desktop controls */}
      <div className="absolute top-4 right-4 z-20">
        <Button
          className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-md text-sm"
          onClick={() => setIsExploring(v => !v)}
        >
          {isExploring ? "Lock Camera" : "Free Explore"}
        </Button>
      </div>

      <Canvas
        shadows
        camera={{ position: [1.8, 1.9, 4.9], fov: 38 }}
        gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}
      >
        <VRButtonInjector />
        <VRControllers />
        <VRCameraRig layout={layout} />
        <VRScene
          monument={selectedMonument}
          isExploring={isExploring}
          onLayoutChange={handleLayoutChange}
        />
        <OrbitControls
          makeDefault
          target={layout.target}
          minDistance={layout.minDistance}
          maxDistance={layout.maxDistance}
          enablePan={isExploring}
          enableDamping
          dampingFactor={0.09}
          zoomSpeed={0.7}
          rotateSpeed={0.75}
          minPolarAngle={Math.PI / 8}
          maxPolarAngle={Math.PI / 2.05}
        />
      </Canvas>

      {/* Bottom panel: legend stacked above VR button — no overlap */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <div className="flex gap-4 text-white/70 text-xs select-none bg-black/40 px-4 py-1.5 rounded-full">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" />Tap hotspots</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-400" />WebXR ready</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400" />Controller ray</span>
        </div>
        <div ref={vrButtonContainerRef} />
      </div>
    </div>
  );
};

export default VRView;
