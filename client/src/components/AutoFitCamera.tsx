import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Drop this inside a Canvas (after OrbitControls has makeDefault).
 * On mount it computes the scene bounding box and repositions the camera
 * + adjusts OrbitControls min/max distance so every model fills the view.
 */
const AutoFitCamera = ({ margin = 1.8 }: { margin?: number }) => {
  const { camera, scene, controls } = useThree();

  useEffect(() => {
    // Wait two frames so the model mesh is in the scene graph
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        const box = new THREE.Box3();
        scene.traverse((obj) => {
          const mesh = obj as THREE.Mesh;
          if (mesh.isMesh) {
            const mb = new THREE.Box3().setFromObject(mesh);
            box.union(mb);
          }
        });

        if (box.isEmpty()) return;

        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = ((camera as THREE.PerspectiveCamera).fov * Math.PI) / 180;
        const fitDist = ((maxDim / 2) / Math.tan(fov / 2)) * margin;

        // Place camera in a good angle above-front
        const dir = new THREE.Vector3(0.25, 0.35, 1).normalize();
        camera.position.copy(center).addScaledVector(dir, fitDist);
        camera.lookAt(center);
        camera.near = fitDist * 0.01;
        camera.far = fitDist * 20;
        camera.updateProjectionMatrix();

        if (controls) {
          const ctrl = controls as any;
          ctrl.target.copy(center);
          ctrl.minDistance = fitDist * 0.4;
          ctrl.maxDistance = fitDist * 3.5;
          ctrl.update();
        }
      })
    );
    return () => cancelAnimationFrame(id);
  }, []);

  return null;
};

export default AutoFitCamera;
