import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function DeityModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const cloned = scene.clone(true);

  const box = new THREE.Box3().setFromObject(cloned);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  const scale = maxDim > 0 ? 2.8 / maxDim : 1;

  return (
    <primitive
      object={cloned}
      scale={scale}
      position={[
        -center.x * scale,
        -center.y * scale,
        -center.z * scale,
      ]}
    />
  );
}

export default function DeityModelViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <div className="w-full h-44 rounded-xl overflow-hidden bg-gradient-to-b from-amber-100 to-orange-50 border border-amber-200">
      <Canvas
        camera={{ position: [0, 0.5, 4], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 6, 4]} intensity={1.4} castShadow />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} />
        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[0.1, 0.1, 0.1]} />
              <meshStandardMaterial transparent opacity={0} />
            </mesh>
          }
        >
          <DeityModel url={modelUrl} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.8}
          minDistance={2}
          maxDistance={8}
          enableDamping
        />
      </Canvas>
    </div>
  );
}
