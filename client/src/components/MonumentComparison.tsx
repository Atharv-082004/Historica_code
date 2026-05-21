import { useState, useEffect, useMemo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stats, Environment } from "@react-three/drei";
import { useParams, useLocation, Link } from "wouter";
import { monuments } from "../data/monuments";
import { Monument } from "../data/monuments";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronLeft, Info, Clock, Home, Eye } from "lucide-react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

const AVAILABLE_MODEL_PATHS = new Set([
  "/models/ajanta_ellora.glb",
  "/models/ajanta_ellora_past.glb",
  "/models/gol_gumbaz.glb",
  "/models/gol_gumbaz_ancient.glb",
  "/models/gol_gumbaz_past.glb",
  "/models/hawa_mahal.glb",
  "/models/hawa_mahal_ancient.glb",
  "/models/hawa_mahal_past.glb",
  "/models/konark_sun_temple.glb",
  "/models/qutub_minar.glb",
  "/models/qutub_minar_new.glb",
  "/models/red_fort.glb",
  "/models/red_fort_improved.glb",
  "/models/red_fort_past.glb",
  "/models/taj_mahal.glb",
  "/models/hampi.glb",
  "/models/charminar.glb",
  "/models/lotus_temple.glb",
  "/models/gateway_of_india.glb",
  "/models/golden_temple.glb",
  "/models/golden_temple_ancient.glb",
  "/models/hampi_ancient.glb",
  "/models/ajanta_ellora_ancient.glb",
  "/models/mysore_palace.glb",
  "/models/meenakshi_temple.glb",
  "/models/khajuraho_temples.glb",
  "/models/sanchi_stupa.glb",
  "/models/fatehpur_sikri.glb",
  "/models/victoria_memorial.glb",
  "/models/amber_fort.glb",
  "/models/mahabalipuram.glb",
  "/models/amber_fort_ancient.glb",
  "/models/mysore_palace_ancient.glb",
  "/models/meenakshi_ancient.glb",
  "/models/mahabalipuram_ancient.glb",
  "/models/konark_ancient.glb",
  "/models/khajuraho_ancient.glb",
  "/models/humayuns_tomb.glb",
  "/models/agra_fort.glb",
  "/models/brihadeeswara_temple.glb",
  "/models/mahabodhi_temple.glb",
  "/models/elephanta_caves.glb",
  "/models/rani_ki_vav.glb",
  "/models/jantar_mantar.glb",
  "/models/nalanda_ruins.glb",
  "/models/chittor_fort.glb",
  "/models/kailasa_temple.glb",
  "/models/mehrangarh_fort.glb",
  "/models/jaisalmer_fort.glb",
  "/models/kumbhalgarh_fort.glb",
  "/models/junagarh_fort.glb",
  "/models/udaipur_city_palace.glb",
  "/models/ranakpur_temple.glb",
  "/models/dilwara_temples.glb",
  "/models/ajmer_dargah.glb",
  "/models/purana_qila.glb",
  "/models/safdarjung_tomb.glb",
  "/models/jama_masjid.glb",
  "/models/itmad_ud_daulah.glb",
  "/models/akbars_tomb.glb",
  "/models/leh_palace.glb",
  "/models/hemis_monastery.glb",
  "/models/golconda_fort.glb",
  "/models/ramappa_temple.glb",
  "/models/warangal_fort.glb",
  "/models/chowmahalla_palace.glb",
  "/models/bidar_fort.glb",
  "/models/hoysaleswara_temple.glb",
  "/models/pattadakal.glb",
  "/models/badami_caves.glb",
  "/models/gomateshwara.glb",
  "/models/lepakshi_temple.glb",
  "/models/tirupati_temple.glb",
  "/models/rameswaram_temple.glb",
  "/models/gangaikonda_cholapuram.glb",
  "/models/basilica_bom_jesus.glb",
  "/models/daulatabad_fort.glb",
  "/models/aga_khan_palace.glb",
  "/models/shaniwar_wada.glb",
  "/models/raigad_fort.glb",
  "/models/gwalior_fort.glb",
  "/models/orchha_fort.glb",
  "/models/bhimbetka_caves.glb",
  "/models/mandu_jahaz_mahal.glb",
  "/models/lingaraja_temple.glb",
  "/models/jagannath_temple.glb",
  "/models/udayagiri_khandagiri.glb",
  "/models/sarnath.glb",
  "/models/vaishali.glb",
  "/models/kushinagar.glb",
  "/models/vikramshila.glb",
  "/models/kamakhya_temple.glb",
  "/models/tawang_monastery.glb",
  "/models/howrah_bridge.glb",
  "/models/modhera_sun_temple.glb",
  "/models/dholavira.glb",
  "/models/somnath_temple.glb",
]);

const resolveModelUrl = (url: string) => {
  if (AVAILABLE_MODEL_PATHS.has(url)) return url;
  return "/models/taj_mahal.glb";
};

// Model component with safe fallback path resolution.
const Model = ({ url, period, position, scale = 1, rotation = [0, 0, 0] }: {
  url: string; 
  period: "ancient" | "past" | "present";
  position: [number, number, number]; 
  scale?: number;
  rotation?: [number, number, number];
}) => {
  const safeUrl = resolveModelUrl(url);
  const { scene } = useGLTF(safeUrl) as GLTF & { scene: THREE.Group };
  const styledScene = useMemo(() => {
    const cloned = scene.clone(true);

    const styleByPeriod = {
      ancient: {
        tint: new THREE.Color(0.86, 0.72, 0.58),
        roughness: 0.98,
        metalness: 0,
        opacity: 1,
        exposureBoost: 0.92,
      },
      past: {
        tint: new THREE.Color(0.95, 0.82, 0.68),
        roughness: 0.93,
        metalness: 0,
        opacity: 1,
        exposureBoost: 0.98,
      },
      present: {
        tint: new THREE.Color(1, 0.96, 0.92),
        roughness: 0.86,
        metalness: 0,
        opacity: 1,
        exposureBoost: 1,
      },
    } as const;

    const currentStyle = styleByPeriod[period];

    cloned.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh || !mesh.material) return;

      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      const styledMaterials = materials.map((material) => {
        const clonedMaterial = material.clone() as THREE.MeshStandardMaterial;

        if ("color" in clonedMaterial && clonedMaterial.color) {
          clonedMaterial.color.multiply(currentStyle.tint);
          clonedMaterial.color.multiplyScalar(currentStyle.exposureBoost);
        }
        if ("roughness" in clonedMaterial) {
          clonedMaterial.roughness = currentStyle.roughness;
        }
        if ("metalness" in clonedMaterial) {
          clonedMaterial.metalness = currentStyle.metalness;
        }
        clonedMaterial.transparent = false;
        clonedMaterial.opacity = currentStyle.opacity;
        clonedMaterial.depthWrite = true;
        clonedMaterial.side = THREE.FrontSide;

        return clonedMaterial;
      });

      mesh.material = Array.isArray(mesh.material) ? styledMaterials : styledMaterials[0];
    });

    return cloned;
  }, [scene, period]);

  return (
    <primitive 
      object={styledScene}
      position={position} 
      scale={[scale, scale, scale]} 
      rotation={rotation} 
      castShadow 
      receiveShadow 
    />
  );
};

// Preload the models
const usePreloadModels = (monument: Monument | undefined) => {
  useEffect(() => {
    if (monument) {
      // Preload all time period models
      useGLTF.preload(resolveModelUrl(monument.primaryModel));
      useGLTF.preload(resolveModelUrl(monument.historicalModels.past));
      useGLTF.preload(resolveModelUrl(monument.historicalModels.ancient));
    }
  }, [monument]);
};

const MonumentComparison = () => {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const monument = monuments.find(m => m.id === params.id);
  const [showStats, setShowStats] = useState(false);
  
  usePreloadModels(monument);

  // Handle case when monument is not found
  if (!monument) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-bold mb-4">Monument not found</h2>
        <Button onClick={() => setLocation("/")}>
          <Home className="mr-2 h-4 w-4" /> Return to Map
        </Button>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col">
      {/* Header with navigation */}
      <div className="bg-white/90 backdrop-blur-md shadow-sm border-b p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" onClick={() => setLocation(`/monument/${monument.id}`)}>
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </Button>
          <div>
            <h1 className="text-xl font-bold">{monument.name}</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{monument.city}, {monument.state}</span>
              {monument.UNESCO && (
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 text-xs">
                  UNESCO Heritage
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowStats(!showStats)}
            className={showStats ? "bg-slate-100" : ""}
          >
            <Info className="h-4 w-4 mr-1" /> {showStats ? "Hide Stats" : "Show Stats"}
          </Button>
        </div>
      </div>
      
      {/* Comparison title */}
      <div className="bg-amber-50 py-2 px-4 border-b border-amber-200">
        <div className="flex items-center justify-center">
          <Clock className="h-4 w-4 mr-2 text-amber-700" />
          <h2 className="text-amber-800 font-medium">Timeline Comparison View</h2>
        </div>
      </div>
      
      {/* Main content with comparison */}
      <div className="flex-1 grid grid-cols-3 h-full">
        {/* Ancient model - left */}
        <div className="relative h-full border-r border-gray-200 overflow-auto">
          <div className="absolute top-0 left-0 right-0 bg-indigo-100 text-indigo-800 py-1 px-3 text-center z-10 font-medium">
            Original Construction ({monument.yearBuilt})
          </div>
          <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
            {showStats && <Stats />}
            <ambientLight intensity={0.45} color="#d6b38f" />
            <directionalLight
              castShadow
              position={[2.5, 8, 5]}
              intensity={1.25}
              color="#ffd1a3"
              shadow-mapSize={[1024, 1024]}
            >
              <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
            </directionalLight>
            <Suspense fallback={null}>
              <Model url={monument.historicalModels.ancient} period="ancient" position={[0, -0.5, 0]} scale={2.5} rotation={[0, -Math.PI / 4, 0]} />
              <Environment preset="sunset" />
            </Suspense>
            <OrbitControls 
              enablePan={true} 
              enableZoom={true} 
              enableRotate={true} 
              minDistance={2}
              maxDistance={10}
            />
          </Canvas>
        </div>
        
        {/* Past model - middle */}
        <div className="relative h-full border-r border-gray-200 overflow-auto">
          <div className="absolute top-0 left-0 right-0 bg-orange-100 text-orange-800 py-1 px-3 text-center z-10 font-medium">
            ~100 Years Ago
          </div>
          <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
            {showStats && <Stats />}
            <ambientLight intensity={0.5} color="#e3c7ad" />
            <directionalLight
              castShadow
              position={[2.5, 8, 5]}
              intensity={1.5}
              color="#ffd9b0"
              shadow-mapSize={[1024, 1024]}
            >
              <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
            </directionalLight>
            <Suspense fallback={null}>
              <Model url={monument.historicalModels.past} period="past" position={[0, -0.5, 0]} scale={2.5} rotation={[0, -Math.PI / 4, 0]} />
              <Environment preset="dawn" />
            </Suspense>
            <OrbitControls 
              enablePan={true} 
              enableZoom={true} 
              enableRotate={true}
              minDistance={2}
              maxDistance={10}
            />
          </Canvas>
        </div>
        
        {/* Present model - right */}
        <div className="relative h-full overflow-auto">
          <div className="absolute top-0 left-0 right-0 bg-emerald-100 text-emerald-800 py-1 px-3 text-center z-10 font-medium">
            Present Day
          </div>
          <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
            {showStats && <Stats />}
            <ambientLight intensity={0.6} color="#ffffff" />
            <directionalLight
              castShadow
              position={[2.5, 8, 5]}
              intensity={1.7}
              color="#ffffff"
              shadow-mapSize={[1024, 1024]}
            >
              <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
            </directionalLight>
            <Suspense fallback={null}>
              <Model url={monument.primaryModel} period="present" position={[0, -0.5, 0]} scale={2.5} rotation={[0, -Math.PI / 4, 0]} />
              <Environment preset="park" />
            </Suspense>
            <OrbitControls 
              enablePan={true} 
              enableZoom={true} 
              enableRotate={true}
              minDistance={2}
              maxDistance={10}
            />
          </Canvas>
        </div>
      </div>
      
      {/* Information footer */}
      <div className="bg-gray-50 p-3 border-t border-gray-200 text-xs text-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Eye className="h-4 w-4 text-gray-500" />
            <span>Rotate, zoom, and pan each model to compare architectural changes over time.</span>
          </div>
          <div className="flex space-x-2">
            <Link href={`/monument/${monument.id}/vr`}>
              <Button size="sm" variant="outline" className="h-7 text-xs">
                View in VR
              </Button>
            </Link>
            <Link href={`/monument/${monument.id}/ar`}>
              <Button size="sm" variant="outline" className="h-7 text-xs">
                View in AR
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonumentComparison;