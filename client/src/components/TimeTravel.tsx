import { useEffect, useState } from "react";
import { useRoute, useLocation } from "wouter";
import { monuments } from "../data/monuments";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useAppContext } from "../context/AppContext";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { useAudio } from "../lib/stores/useAudio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

const MonumentModel = ({ 
  modelPath, 
  period 
}: { 
  modelPath: string;
  period: "present" | "past" | "ancient" 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Load the model based on the provided path
  const { scene } = useGLTF(modelPath);
  
  // Period-specific modifications
  let scale = 1.5;
  let position = [0, -1, 0];
  let color = new THREE.Color(1, 1, 1);
  
  useEffect(() => {
    if (scene) {
      setIsLoading(false);
      console.log(`Model loaded for ${period} period: ${modelPath}`);
      
      // Create a clone of the scene to avoid modifying the original
      const clonedScene = scene.clone();
      
      if (period === "past") {
        // Slightly yellowed for "past" (100 years ago)
        color = new THREE.Color(1, 0.95, 0.8);
      } else if (period === "ancient") {
        // More aged/original look
        color = new THREE.Color(0.9, 0.85, 0.7);
      }
      
      // Apply the color tint to all materials in the cloned scene
      clonedScene.traverse((child: any) => {
        if (child.isMesh && child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((mat: any) => {
              // Create a new material to avoid modifying shared materials
              const newMat = mat.clone();
              newMat.color.multiply(color);
              child.material = newMat;
            });
          } else {
            // Create a new material to avoid modifying shared materials
            const newMat = child.material.clone();
            newMat.color.multiply(color);
            child.material = newMat;
          }
        }
      });
    }
  }, [scene, modelPath, period]);
  
  if (isLoading) {
    return (
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }
  
  if (error || !scene) {
    return (
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
  
  return (
    <primitive 
      object={scene} 
      position={position} 
      scale={scale} 
    />
  );
};


const TimeTravel = () => {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute<{ id: string }>("/monument/:id/timetravel");
  const { setSelectedMonument, selectedMonument, timePeriod, setTimePeriod } = useAppContext();
  const [sliderValue, setSliderValue] = useState(100); // 0 = ancient, 50 = past, 100 = present
  const [isTransitioning, setIsTransitioning] = useState(false);
  const audio = useAudio();
  const { t } = useTranslation();

  const periodInfo = {
    present: { title: t("timetravel.presentDayTitle"), description: t("timetravel.presentDesc") },
    past:    { title: t("timetravel.pastTitle"),       description: t("timetravel.pastDesc") },
    ancient: { title: t("timetravel.ancientTitle"),    description: t("timetravel.ancientDesc") },
  };

  useEffect(() => {
    if (!match) return;
    
    const monument = monuments.find(m => m.id === params.id);
    if (monument) {
      setSelectedMonument(monument);
    } else {
      setLocation("/");
    }
  }, [match, params?.id]);

  const handleBack = () => {
    audio.playHit();
    if (selectedMonument) {
      setLocation(`/monument/${selectedMonument.id}`);
    } else {
      setLocation("/");
    }
  };

  const handleSliderChange = (value: number[]) => {
    const newValue = value[0];
    setSliderValue(newValue);
    
    setIsTransitioning(true);
    
    // Determine time period based on slider value
    setTimeout(() => {
      if (newValue < 33) {
        setTimePeriod("ancient");
      } else if (newValue < 66) {
        setTimePeriod("past");
      } else {
        setTimePeriod("present");
      }
      setIsTransitioning(false);
      audio.playSuccess();
    }, 500);
  };

  const handleTabChange = (value: string) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setTimePeriod(value as "present" | "past" | "ancient");
      
      // Update slider to match selected tab
      if (value === "present") setSliderValue(100);
      else if (value === "past") setSliderValue(50);
      else setSliderValue(0);
      
      setIsTransitioning(false);
      audio.playSuccess();
    }, 500);
  };

  if (!selectedMonument) return null;

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-tr from-amber-50 via-orange-50 to-amber-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-orange-400 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-red-400 blur-3xl"></div>
      </div>
      
      <div className="bg-gradient-to-r from-amber-800/90 to-orange-700/90 p-4 flex justify-between items-center shadow-md relative z-10">
        <Button 
          variant="outline" 
          onClick={handleBack}
          className="bg-white/90 hover:bg-white text-amber-800 border-amber-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
          </svg>
          {t("timetravel.backToMonument")}
        </Button>
        <h1 className="text-xl md:text-2xl font-bold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-amber-200">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="12 6 12 12 16 10"></polygon>
          </svg>
          {t("timetravel.pageTitle")}: {selectedMonument.name}
        </h1>
        <div className="w-[150px]"></div> {/* Spacer for alignment */}
      </div>
      
      <div className="flex-1 relative overflow-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
            {timePeriod === "present" && (
              <MonumentModel 
                modelPath={selectedMonument.primaryModel} 
                period={timePeriod} 
              />
            )}
            {timePeriod === "past" && (
              <MonumentModel 
                modelPath={selectedMonument.historicalModels.past} 
                period={timePeriod} 
              />
            )}
            {timePeriod === "ancient" && (
              <MonumentModel 
                modelPath={selectedMonument.historicalModels.ancient} 
                period={timePeriod} 
              />
            )}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
            <Environment preset={timePeriod === "ancient" ? "dawn" : timePeriod === "past" ? "sunset" : "city"} />
            <OrbitControls 
              autoRotate 
              autoRotateSpeed={0.5} 
              minPolarAngle={Math.PI / 6} 
              maxPolarAngle={Math.PI / 2} 
            />
          </Canvas>
        </motion.div>
      </div>
      
      <div className="p-4 bg-card overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <Tabs value={timePeriod} onValueChange={handleTabChange} className="mb-6">
            <TabsList className="grid grid-cols-3 mb-4 p-1 bg-gradient-to-r from-amber-100/50 via-orange-100/50 to-red-100/50 rounded-lg">
              <TabsTrigger 
                value="ancient"
                className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M5 8h9"></path>
                  <path d="M9 8v14"></path>
                  <path d="M15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M11 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M3 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M13 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M7 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                </svg>
                {t("timetravel.ancient")}
              </TabsTrigger>
              <TabsTrigger 
                value="past"
                className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"></path>
                  <path d="M10.5 2h4"></path>
                  <path d="M2 15.5h8"></path>
                  <path d="M2 13h20"></path>
                  <path d="M14 12v3"></path>
                  <path d="M14 5v8"></path>
                </svg>
                {t("timetravel.pastCentury")}
              </TabsTrigger>
              <TabsTrigger 
                value="present"
                className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
                {t("timetravel.present")}
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="mb-8 bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200 shadow-md">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-amber-900">{periodInfo[timePeriod].title}</h2>
                <p className="text-sm text-amber-700">{timePeriod === "ancient" ? selectedMonument.yearBuilt : timePeriod === "past" ? t("timetravel.earlyTwentieth") : t("timetravel.modernDay")}</p>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm border border-amber-100 rounded-xl p-4 shadow-sm mb-6">
              <p className="text-orange-900">{periodInfo[timePeriod].description}</p>
            </div>
            
            <div className="relative mt-8 mb-2">
              <div className="absolute -top-6 left-0 right-0 flex justify-between text-sm">
                <span className={`text-amber-800 font-medium transition-all duration-300 ${timePeriod === 'ancient' ? 'text-amber-600 font-bold scale-110' : ''}`}>{t("timetravel.ancient")}</span>
                <span className={`text-amber-800 font-medium transition-all duration-300 ${timePeriod === 'past' ? 'text-amber-600 font-bold scale-110' : ''}`}>{t("timetravel.pastCentury")}</span>
                <span className={`text-amber-800 font-medium transition-all duration-300 ${timePeriod === 'present' ? 'text-amber-600 font-bold scale-110' : ''}`}>{t("timetravel.presentDayTitle")}</span>
              </div>
              <Slider
                value={[sliderValue]}
                onValueChange={handleSliderChange}
                max={100}
                step={1}
                className="py-4"
              />
            </div>
            
            <div className="bg-amber-100/50 h-1 w-full rounded-full mt-8 mb-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 rounded-full"
                   style={{ width: `${sliderValue}%`, transition: 'width 0.5s ease-in-out' }}
              ></div>
            </div>
            
            <div className="flex justify-center mt-4">
              <div className="inline-flex bg-white shadow-sm rounded-lg border border-amber-200 overflow-hidden">
                <button 
                  onClick={() => handleSliderChange([0])} 
                  className={`px-4 py-2 text-sm font-medium ${timePeriod === 'ancient' ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white' : 'bg-white text-amber-800 hover:bg-amber-50'}`}
                >
                  {t("timetravel.ancient")}
                </button>
                <div className="w-px bg-amber-200"></div>
                <button 
                  onClick={() => handleSliderChange([50])} 
                  className={`px-4 py-2 text-sm font-medium ${timePeriod === 'past' ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white' : 'bg-white text-amber-800 hover:bg-amber-50'}`}
                >
                  {t("timetravel.pastCentury")}
                </button>
                <div className="w-px bg-amber-200"></div>
                <button 
                  onClick={() => handleSliderChange([100])} 
                  className={`px-4 py-2 text-sm font-medium ${timePeriod === 'present' ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white' : 'bg-white text-amber-800 hover:bg-amber-50'}`}
                >
                  {t("timetravel.present")}
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200 shadow-md space-y-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"/>
                  <path d="M12 8v4l2 2"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-amber-900">{t("timetravel.historicalContext")}</h3>
            </div>

            <div className="bg-white/70 backdrop-blur-sm border border-amber-100 rounded-xl p-4 shadow-sm">
              <p className="text-orange-900 leading-relaxed">
                {timePeriod === "present"
                  ? t("timetravel.presentDesc")
                  : timePeriod === "past"
                  ? t("timetravel.pastDesc")
                  : t("timetravel.ancientDesc")}
              </p>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-amber-900 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 mr-2">
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
                {t("timetravel.keyTimeline")}
              </h4>
              
              <div className="relative border-l-2 border-amber-300 pl-6 pb-2 space-y-6">
                {(selectedMonument.timeline && selectedMonument.timeline.length > 0
                  ? selectedMonument.timeline
                  : [
                      { year: t("timetravel.ancientTimes"), event: t("timetravel.foundationLaid"), eventHi: undefined },
                      { year: t("timetravel.middlePeriod"), event: t("timetravel.majorExpansions"), eventHi: undefined },
                      { year: t("timetravel.colonialPeriod"), event: t("timetravel.preservationEfforts"), eventHi: undefined },
                      { year: t("timetravel.modernEra"), event: t("timetravel.culturalLandmark"), eventHi: undefined },
                      { year: t("timetravel.presentDay"), event: t("timetravel.ongoingConservation"), eventHi: undefined },
                    ]
                ).map((entry, i) => {
                  const dots = ["bg-amber-500", "bg-amber-400", "bg-amber-300", "bg-amber-200", "bg-amber-100"];
                  return (
                    <div key={i} className="relative">
                      <div className={`absolute -left-[25px] top-0 w-4 h-4 rounded-full ${dots[Math.min(i, dots.length - 1)]}`}></div>
                      <div className="bg-white/60 p-3 rounded-lg border border-amber-100">
                        <span className="text-sm font-semibold text-amber-700 inline-block mb-1">{entry.year}</span>
                        <p className="text-orange-800">
                          {i18n.language === "hi" && entry.eventHi ? entry.eventHi : entry.event}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTravel;
