import { useEffect, useRef, useState, useMemo, Suspense } from "react";
import { useRoute, useLocation } from "wouter";
import { monuments } from "../data/monuments";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import AutoFitCamera from "./AutoFitCamera";
import type { Hotspot } from "../data/monuments";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useAudio } from "../lib/stores/useAudio";
import { useMonumentStore } from "../lib/stores/useMonumentStore";
import MonumentSatelliteView from "./MonumentSatelliteView";
import { WeatherEffects, getMonumentWeather } from "./WeatherEffects";
import { useAudioTour } from "../hooks/useAudioTour";
import { usePassport } from "../lib/stores/usePassport";
import { useTranslation } from "react-i18next";
import NearbyMonuments from "./NearbyMonuments";
import ConstructionStory from "./ConstructionStory";
import { TEMPLE_DEITIES } from "../data/deityData";
import type { Deity } from "../data/deityData";

type TimeOfDay = "day" | "sunset" | "night";

const TOD_PRESETS: Record<TimeOfDay, { env: any; ambient: number; dirIntensity: number; dirColor: string; bg: string | null; sunPos: [number,number,number] }> = {
  day:    { env: "park",   ambient: 0.8,  dirIntensity: 1.6,  dirColor: "#ffffff", bg: "#bce3ff", sunPos: [2,  15,  5] },
  sunset: { env: "sunset", ambient: 0.55, dirIntensity: 1.4,  dirColor: "#ffb070", bg: "#f3a266", sunPos: [8,   3,  0] },
  night:  { env: "night",  ambient: 0.18, dirIntensity: 0.25, dirColor: "#9bb6ff", bg: "#0c1226", sunPos: [0,  -5,  5] },
};

const HotspotMarker = ({
  hotspot,
  onSelect,
}: {
  hotspot: Hotspot;
  onSelect: (h: Hotspot) => void;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <group position={hotspot.position}>
      <mesh
        onClick={(e) => { e.stopPropagation(); onSelect(hotspot); }}
        onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = "pointer"; }}
        onPointerOut={() => { setHover(false); document.body.style.cursor = "default"; }}
      >
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color={hover ? "#ffd24a" : "#ff8a00"} emissive={hover ? "#ff8a00" : "#ff5a00"} emissiveIntensity={0.7} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshBasicMaterial color="#ffb84a" transparent opacity={0.25} />
      </mesh>
      {hover && (
        <Html center distanceFactor={6} style={{ pointerEvents: "none" }}>
          <div className="px-2 py-1 rounded bg-black/80 text-white text-xs whitespace-nowrap shadow-lg">
            {hotspot.name}
          </div>
        </Html>
      )}
    </group>
  );
};

const MonumentDisplay = ({
  modelPath,
  timeOfDay,
  hotspots,
  onHotspotSelect,
  weatherType,
}: {
  modelPath: string;
  timeOfDay: TimeOfDay;
  hotspots?: Hotspot[];
  onHotspotSelect: (h: Hotspot) => void;
  weatherType?: import("./WeatherEffects").WeatherType;
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { scene } = useGLTF(modelPath);
  const tod = TOD_PRESETS[timeOfDay];

  useEffect(() => {
    try {
      if (scene) setLoading(false);
      else throw new Error("Failed to load model");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error loading model");
      setLoading(false);
    }
  }, [modelPath, scene]);

  const lighting = (
    <>
      {tod.bg && <color attach="background" args={[tod.bg]} />}
      <ambientLight intensity={tod.ambient} />
      <directionalLight
        position={tod.sunPos}
        intensity={tod.dirIntensity}
        color={tod.dirColor}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      {timeOfDay === "night" && (
        <pointLight position={[0, 4, 4]} intensity={1.2} color="#ffd27a" distance={20} />
      )}
      <Environment preset={tod.env} />
    </>
  );

  if (loading || error || !scene) {
    return (
      <>
        {lighting}
        <Html center>
          <div className="flex flex-col items-center gap-3 select-none">
            {error ? (
              <div className="text-red-400 text-sm font-medium bg-black/50 px-4 py-2 rounded-lg">Failed to load model</div>
            ) : (
              <>
                <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
                <div className="text-amber-200 text-sm font-medium bg-black/50 px-4 py-2 rounded-lg whitespace-nowrap">Loading monument…</div>
              </>
            )}
          </div>
        </Html>
        <OrbitControls />
      </>
    );
  }

  return (
    <>
      {lighting}
      <WeatherEffects type={weatherType || "none"} />
      <primitive object={scene} position={[0, 0, 0]} scale={1.5} receiveShadow castShadow />
      {hotspots?.map((h, i) => (
        <HotspotMarker key={i} hotspot={h} onSelect={onHotspotSelect} />
      ))}
      <OrbitControls
        makeDefault
        ref={(controls) => {
          if (controls) controls.addEventListener("start", () => { (controls as any).autoRotate = false; });
        }}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2}
        zoomSpeed={0.4}
        enablePan
        panSpeed={1.0}
        screenSpacePanning
        minDistance={2}
        maxDistance={20}
        target={[0, 0, 0]}
      />
      <AutoFitCamera margin={2.0} />
    </>
  );
};

function DeityModelInner({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  const cloned = useMemo(() => scene.clone(true), [scene]);
  return (
    <>
      <primitive object={cloned} />
      <AutoFitCamera margin={2.5} />
    </>
  );
}

function DeityModelViewer({ deity }: { deity: Deity }) {
  return (
    <div className="relative w-full h-56 rounded-xl overflow-hidden border border-amber-200 shadow-lg bg-gradient-to-br from-amber-900/20 to-orange-900/20">
      <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 10, 5]} intensity={1.6} />
        <directionalLight position={[-3, 5, -3]} intensity={0.5} color="#ffd6a0" />
        <Suspense fallback={
          <Html center>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-3 border-amber-400 border-t-transparent rounded-full animate-spin" />
              <div className="text-amber-200 text-xs bg-black/50 px-3 py-1 rounded-lg">Loading…</div>
            </div>
          </Html>
        }>
          <DeityModelInner path={deity.modelPath} />
        </Suspense>
        <OrbitControls enablePan={false} autoRotate autoRotateSpeed={1.5} minDistance={2} maxDistance={8} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

const MonumentDetail = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === "hi";
  const [, setLocation] = useLocation();
  const [match, params] = useRoute<{ id: string }>("/monument/:id");
  const safeParams = params || { id: "" };
  const [selectedMonument, setSelectedMonument] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("sunset");
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [showConstructionStory, setShowConstructionStory] = useState(false);
  const [selectedDeityIndex, setSelectedDeityIndex] = useState(0);
  const audio = useAudio();
  const { incrementVisitCount, getVisitCount } = useMonumentStore();
  const { markVisited } = usePassport();

  const deityInfo = selectedMonument ? TEMPLE_DEITIES[selectedMonument.id] : undefined;
  if (selectedMonument) console.log("[Deities] monument:", selectedMonument.id, "| found:", !!deityInfo);

  useEffect(() => {
    if (!match) return;
    const monument = monuments.find(m => m.id === safeParams.id);
    if (monument) {
      setSelectedMonument(monument);
      incrementVisitCount(monument.id);
      markVisited(monument.id);
    } else {
      setLocation("/");
    }
  }, [match, safeParams.id]);

  const audioTourText = selectedMonument
    ? isHindi && selectedMonument.nameHi
      ? `${selectedMonument.nameHi}. ${selectedMonument.city}, ${selectedMonument.state}. ${selectedMonument.descriptionHi || selectedMonument.description} ${selectedMonument.factsHi?.join("। ") || selectedMonument.facts?.join(". ") || ""}`
      : `${selectedMonument.name}. ${selectedMonument.city}, ${selectedMonument.state}. ${selectedMonument.description} ${selectedMonument.facts?.join(". ") || ""}`
    : "";
  const { isPlaying: audioPlaying, isSupported: audioSupported, toggle: toggleAudio } = useAudioTour({
    text: audioTourText,
    lang: isHindi ? "hi-IN" : "en-IN",
  });

  const handleARView = () => {
    audio.playHit();
    setLocation(`/monument/${safeParams.id}/ar`);
  };

  const handleVRView = () => {
    audio.playHit();
    setLocation(`/monument/${safeParams.id}/vr`);
  };

  const handleTimeTravel = () => {
    audio.playSuccess();
    setLocation(`/monument/${safeParams.id}/timetravel`);
  };

  const handleBackToMap = () => {
    audio.playHit();
    setLocation("/");
  };

  const handleShare = async () => {
    if (!selectedMonument) return;
    const url = `${window.location.origin}/monument/${selectedMonument.id}`;
    const shareData = {
      title: `Historica · ${selectedMonument.name}`,
      text: `Explore ${selectedMonument.name} in ${selectedMonument.city} on Historica`,
      url,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard");
      } else {
        window.prompt("Copy this link:", url);
      }
    } catch {
      // User cancelled share – ignore
    }
  };

  if (!selectedMonument) return null;

  const visitCount = getVisitCount(selectedMonument.id);
  const weatherType = getMonumentWeather(selectedMonument.state || "");

  const displayDescription = (isHindi && selectedMonument.descriptionHi) ? selectedMonument.descriptionHi : selectedMonument.description;
  const displayFacts = (isHindi && selectedMonument.factsHi) ? selectedMonument.factsHi : selectedMonument.facts;
  const displayVisitingHours = (isHindi && selectedMonument.visitingHoursHi) ? selectedMonument.visitingHoursHi : selectedMonument.visitingHours;
  const displayEntryFee = (isHindi && selectedMonument.entryFeeHi) ? selectedMonument.entryFeeHi : (selectedMonument.entryFee || t("common.free"));
  const displayDynasty = (isHindi && selectedMonument.dynastyHi) ? selectedMonument.dynastyHi : selectedMonument.dynasty;
  const weatherLabel = weatherType !== "none" ? t(`weather.${weatherType}` as any, weatherType) : "";

  return (
    <div className="flex flex-col md:flex-row h-full w-full min-h-0 bg-gradient-to-tr from-amber-50 via-orange-50 to-amber-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-orange-400 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-red-400 blur-3xl"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="w-full md:w-1/2 h-[42vh] md:h-full min-h-0 relative overflow-hidden"
      >
        {/* Canvas backdrop with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800/30 to-red-900/30 backdrop-blur-sm z-0 rounded-lg md:rounded-r-none rounded-b-none md:rounded-b-lg m-2 md:ml-2 md:my-2 md:mr-0"></div>
        
        {/* Time Travel Controls at the top — pushed below nav bar on mobile */}
        <div className="absolute top-14 md:top-4 left-0 right-0 flex justify-center z-20 px-4">
          <div className="inline-flex bg-white/90 backdrop-blur-md rounded-lg border border-amber-200 shadow-md overflow-hidden max-w-full">
            <button 
              onClick={handleTimeTravel}
              className="px-3 py-2 text-xs sm:text-sm font-medium flex items-center bg-white text-amber-800 hover:bg-amber-50 whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-amber-600 flex-shrink-0">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              {t("monument.timeTravelAncient")}
            </button>
            <div className="w-px bg-amber-200 flex-shrink-0"></div>
            <button 
              onClick={handleTimeTravel}
              className="px-3 py-2 text-xs sm:text-sm font-medium flex items-center bg-white text-amber-800 hover:bg-amber-50 whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-amber-600 flex-shrink-0">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              {t("monument.timeTravelPast")}
            </button>
            <div className="w-px bg-amber-200 flex-shrink-0"></div>
            <button 
              onClick={handleTimeTravel}
              className="px-3 py-2 text-xs sm:text-sm font-medium flex items-center bg-gradient-to-br from-amber-500 to-orange-600 text-white whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 flex-shrink-0">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              {t("monument.timeTravelPresent")}
            </button>
          </div>
        </div>

        <Canvas shadows camera={{ position: [0, 1.5, 6], fov: 40 }} className="z-10 rounded-lg md:rounded-r-none rounded-b-none md:rounded-b-lg overflow-hidden">
          <MonumentDisplay
            modelPath={selectedMonument.primaryModel}
            timeOfDay={timeOfDay}
            hotspots={selectedMonument.hotspots}
            onHotspotSelect={(h) => { audio.playHit(); setActiveHotspot(h); }}
            weatherType={weatherType}
          />
        </Canvas>

        {/* Time-of-day controls — right side, below nav on mobile */}
        <div className="absolute top-[7.5rem] md:top-[4rem] right-3 z-20 flex flex-col gap-1 bg-white/85 backdrop-blur-md border border-amber-200 rounded-lg p-1 shadow-md">
          {(["day", "sunset", "night"] as TimeOfDay[]).map(tod => (
            <button
              key={tod}
              onClick={() => setTimeOfDay(tod)}
              className={`text-xs px-2 py-1 rounded capitalize transition-colors ${
                timeOfDay === tod
                  ? "bg-gradient-to-br from-amber-500 to-orange-600 text-white"
                  : "text-amber-800 hover:bg-amber-100"
              }`}
              title={`${t("monument.switchLighting")} ${t(`common.${tod}`)}`}
            >
              {t(`common.${tod}`)}
            </button>
          ))}
        </div>

        {/* Hotspot info panel */}
        {activeHotspot && (
          <div className="absolute bottom-20 left-6 right-6 md:right-auto md:max-w-sm z-20 bg-white/95 backdrop-blur-md border border-amber-300 rounded-lg p-4 shadow-xl">
            <div className="flex items-start justify-between gap-3 mb-1">
              <h4 className="font-bold text-amber-900">{activeHotspot.name}</h4>
              <button
                onClick={() => setActiveHotspot(null)}
                className="text-orange-700 hover:text-orange-900 text-lg leading-none"
                aria-label="Close"
              >×</button>
            </div>
            <p className="text-sm text-orange-800">{activeHotspot.description}</p>
          </div>
        )}

        {/* Hotspot hint — left side, below time-travel bar on mobile */}
        {selectedMonument.hotspots && selectedMonument.hotspots.length > 0 && !activeHotspot && (
          <div className="absolute top-[7.5rem] md:top-[4rem] left-3 z-20 bg-white/85 backdrop-blur-md border border-amber-200 rounded-md px-3 py-1.5 shadow-md text-xs text-amber-800 max-w-[calc(100%-5rem)]">
            {t("monument.hotspotHint")}
          </div>
        )}
        
        {/* Bottom bar — badges left, audio right, all on one line */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-2 z-20">
          <div className="flex flex-wrap gap-2 min-w-0">
            {/* Visits button with tooltip */}
            <div className="relative group">
              <button
                onClick={() => setActiveTab("visit")}
                className="inline-flex items-center bg-white/80 backdrop-blur-sm text-orange-800 hover:bg-orange-50 border border-orange-200 shadow-md px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M3 11l18-5v12L3 14v-3z"></path>
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                </svg>
                {t("monument.visits")}: {visitCount}
              </button>
              <div className="absolute bottom-full left-0 mb-2 hidden group-hover:flex flex-col w-52 bg-white/95 backdrop-blur-md border border-orange-200 rounded-xl shadow-xl p-3 z-50 pointer-events-none">
                <p className="text-[11px] font-semibold text-orange-800 mb-1">Heritage Passport Visits</p>
                <p className="text-[10px] text-gray-600 leading-relaxed">
                  You have visited <span className="font-bold text-orange-700">{selectedMonument.name}</span> {visitCount} {visitCount === 1 ? "time" : "times"}. Each visit stamps your Heritage Passport.
                </p>
                <p className="text-[10px] text-orange-600 mt-1.5 font-medium">Click to see visit info & best times →</p>
                <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-white border-r border-b border-orange-200 rotate-45" />
              </div>
            </div>

            {/* UNESCO Heritage button with tooltip */}
            {selectedMonument.UNESCO && (
              <div className="relative group">
                <button
                  onClick={() => setActiveTab("overview")}
                  className="inline-flex items-center bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 hover:from-amber-200 hover:to-amber-300 border border-amber-300 shadow-md px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                  </svg>
                  {t("monument.unesco")}
                </button>
                <div className="absolute bottom-full left-0 mb-2 hidden group-hover:flex flex-col w-56 bg-gradient-to-br from-amber-50 to-white border border-amber-300 rounded-xl shadow-xl p-3 z-50 pointer-events-none">
                  <div className="flex items-center gap-1.5 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                    </svg>
                    <p className="text-[11px] font-semibold text-amber-900">UNESCO World Heritage Site</p>
                  </div>
                  <p className="text-[10px] text-gray-600 leading-relaxed">
                    Recognised by UNESCO for its <span className="font-medium text-amber-800">outstanding universal value</span> to humanity — a protected treasure of culture and history.
                  </p>
                  <p className="text-[10px] text-amber-700 mt-1.5 font-medium">Click to view monument overview →</p>
                  <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-amber-50 border-r border-b border-amber-300 rotate-45" />
                </div>
              </div>
            )}
          </div>
          {audioSupported && (
            <button
              onClick={toggleAudio}
              title={audioPlaying ? t("monument.audioStop") : t("monument.audioTour")}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md backdrop-blur-sm border transition-colors ${
                audioPlaying
                  ? "bg-amber-600 text-white border-amber-700"
                  : "bg-white/85 text-amber-800 border-amber-200 hover:bg-amber-50"
              }`}
            >
              {audioPlaying ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                  {t("monument.audioStop")}
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                  {t("monument.audioTour")}
                </>
              )}
            </button>
          )}
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
        className="w-full md:w-1/2 h-[58vh] md:h-full min-h-0 overflow-y-auto p-4 relative z-10"
      >
        <Card className="h-full border-amber-200 shadow-xl overflow-y-auto bg-white/90 backdrop-blur-md">
          {/* Decorative header accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"></div>
          
          <CardHeader className="pb-2 sticky top-0 z-20 bg-white/95 backdrop-blur-md rounded-t-lg border-b border-amber-100">
            <div>
              <CardTitle className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700 pr-2">
                {selectedMonument.name}
              </CardTitle>
              <div className="flex items-center justify-between mt-1 gap-2">
                <CardDescription className="text-orange-700/80 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 flex-shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {selectedMonument.city}, {selectedMonument.state}
                </CardDescription>
                <div className="flex gap-2 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleShare}
                    className="rounded-full h-8 w-8 bg-white hover:bg-orange-50 border-orange-200 text-orange-700"
                    title="Share this monument"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleBackToMap}
                    className="rounded-full h-8 w-8 bg-white hover:bg-orange-50 border-orange-200 text-orange-700"
                    title="Back to map"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className={`grid ${deityInfo ? "grid-cols-4" : "grid-cols-3"} mb-4 p-1 bg-gradient-to-r from-amber-100/50 via-orange-100/50 to-red-100/50 rounded-lg`}>
                <TabsTrigger 
                  value="overview"
                  className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                  </svg>
                  {t("monument.overview")}
                </TabsTrigger>
                <TabsTrigger 
                  value="history"
                  className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"/>
                    <path d="M12 8v4l2 2"/>
                  </svg>
                  {t("monument.history")}
                </TabsTrigger>
                <TabsTrigger 
                  value="visit"
                  className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                    <path d="M3 9h18"/>
                    <path d="M9 21V9"/>
                  </svg>
                  {t("monument.visitInfo")}
                </TabsTrigger>
                {deityInfo && (
                  <TabsTrigger
                    value="deities"
                    className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M12 2L9.5 8.5H3l5.5 4-2 6.5L12 15l5.5 4-2-6.5L21 8.5h-6.5L12 2z"/>
                    </svg>
                    {t("monument.deities")}
                  </TabsTrigger>
                )}
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="bg-white/70 backdrop-blur-sm border border-amber-100 rounded-xl p-4 shadow-sm">
                  <p className="text-orange-900 leading-relaxed">{displayDescription}</p>
                </div>
                
                {deityInfo && (
                  <button
                    onClick={() => setActiveTab("deities")}
                    className="w-full flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white rounded-xl shadow-lg transition-all group border border-amber-400/30"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">✨</div>
                    <div className="text-left flex-1">
                      <p className="font-bold text-base">{isHindi ? "पवित्र देवता" : "Sacred Deities"}</p>
                      <p className="text-amber-100 text-xs mt-0.5">
                        {isHindi
                          ? `${deityInfo.deities.map(d => d.nameHi).join(" • ")} — 3D दर्शन करें`
                          : `${deityInfo.deities.map(d => d.name).join(" • ")} — explore in 3D`}
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-200 flex-shrink-0 group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                )}

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3 shadow-inner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                        <path d="m3 8 4-4 4 4"/>
                        <path d="M7 4v16"/>
                        <path d="M17 8V4h4v4"/>
                        <path d="M21 8H17"/>
                        <path d="M14 12h4v4h-4z"/>
                        <path d="M17 20v-4"/>
                        <path d="M14 20h4"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg text-amber-900">{t("monument.quickFacts")}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {displayFacts.map((fact: string, index: number) => (
                      <div key={index} className="flex items-start bg-white/60 p-3 rounded-lg border border-amber-100">
                        <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-orange-800">{fact}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center p-3 bg-gradient-to-r from-amber-100/50 via-orange-100/50 to-red-100/50 rounded-lg border border-amber-200 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600 mr-2">
                    <path d="M12 22v-9.4a.6.6 0 0 0-.6-.6H6"></path>
                    <path d="M11 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"></path>
                    <path d="M11 15H6a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h5"></path>
                    <path d="M18 15h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2"></path>
                    <path d="M18 22V4"></path>
                  </svg>
                  <p className="text-orange-800 font-medium text-sm">{t("monument.exploreHistory")}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="history" className="space-y-4">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-amber-900">{t("monument.builtDuring")}</h3>
                    </div>
                    <p className="text-orange-800 font-medium pl-10">{selectedMonument.yearBuilt}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                          <path d="M2 20h.01"></path>
                          <path d="M7 20v-4"></path>
                          <path d="M12 20v-8"></path>
                          <path d="M17 20V8"></path>
                          <path d="M22 4v16"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-amber-900">{t("monument.dynasty")}</h3>
                    </div>
                    <p className="text-orange-800 font-medium pl-10">{displayDynasty}</p>
                  </div>
                </div>
                
                {/* Construction Story button */}
                <button
                  onClick={() => setShowConstructionStory(true)}
                  className="w-full flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-stone-800 to-amber-900 hover:from-stone-700 hover:to-amber-800 text-white rounded-xl shadow-lg transition-all group border border-amber-700/40"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-700/40 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">🏗️</div>
                  <div className="text-left flex-1">
                    <p className="font-bold text-base">{isHindi ? "निर्माण कहानी" : "Construction Story"}</p>
                    <p className="text-amber-300 text-xs mt-0.5">{isHindi ? "चरण-दर-चरण कैसे बनाया गया" : "How it was built, step by step"}</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 flex-shrink-0 group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
                </button>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-amber-200 shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                        <path d="M3 12h4l3 8l4-16l3 8h4"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg text-amber-900">{t("monument.history")}</h3>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-amber-100">
                    <p className="text-orange-800 leading-relaxed">
                      {displayDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-4 justify-center">
                      <div className="bg-amber-100/70 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full text-xs font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="m12 6 4 6-4 6-4-6 4-6"/>
                        </svg>
                        {t("monument.timeTravelAncient")}
                      </div>
                      <div className="bg-amber-100/70 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full text-xs font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M12 13V7"/>
                          <path d="m15 10-3-3-3 3"/>
                          <rect width="18" height="18" x="3" y="3" rx="2"/>
                          <path d="M3 9h18"/>
                          <path d="M3 15h18"/>
                        </svg>
                        {t("monument.unesco")}
                      </div>
                      <div className="bg-amber-100/70 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full text-xs font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M12 22v-6"/>
                          <path d="M9 8V2h6v6"/>
                          <path d="M5 12v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/>
                          <circle cx="12" cy="17" r="5"/>
                        </svg>
                        {t("monument.dynasty")}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button 
                    variant="outline" 
                    onClick={handleTimeTravel}
                    className="group relative bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200 hover:border-amber-300 hover:from-amber-100 hover:to-orange-200 text-amber-800 px-8 py-3 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <div className="absolute inset-0 flex justify-center overflow-hidden opacity-20">
                      <div className="w-24 h-24 rounded-full bg-amber-500 blur-xl absolute group-hover:scale-150 transition-transform duration-700"></div>
                    </div>
                    <div className="relative z-10 flex items-center">
                      <div className="relative mr-3">
                        <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shadow-inner">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                        </div>
                        <div className="absolute inset-0 border-2 border-amber-400 rounded-full animate-ping opacity-40"></div>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-lg font-bold">{t("monument.timeTravel")}</span>
                      </div>
                    </div>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="visit" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-amber-900">{t("monument.visitingHours")}</h3>
                    </div>
                    <p className="text-orange-800 font-medium pl-10">{displayVisitingHours}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="M7 15h0M12 15h0" />
                          <path d="M7 8h10" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-amber-900">{t("monument.entryFee")}</h3>
                    </div>
                    <p className="text-orange-800 font-medium pl-10">{displayEntryFee}</p>
                  </div>
                </div>
                
                {/* Add Satellite View */}
                <div className="mt-4 mb-6 border border-amber-200 rounded-xl overflow-hidden shadow-lg">
                  <div className="h-[300px]">
                    <MonumentSatelliteView monument={selectedMonument} />
                  </div>
                </div>
                
                <div className="mt-4 bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-amber-200 shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <circle cx="16" cy="14" r="2"></circle>
                        <path d="M16 14v-4"></path>
                        <path d="M8 14h3"></path>
                        <path d="M8 10h3"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg text-orange-800">{t("bestTime.title")}</h3>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-amber-100">
                    <p className="text-orange-800">
                      {isHindi && selectedMonument.bestTimeDescHi
                        ? selectedMonument.bestTimeDescHi
                        : selectedMonument.bestTimeDesc
                        ?? t("bestTime.desc", { name: isHindi && selectedMonument.nameHi ? selectedMonument.nameHi : selectedMonument.name, months: t("bestTime.octToMar") })}
                    </p>
                    
                    <div className="mt-3 grid grid-cols-4 gap-1.5">
                      {(t("common.months", { returnObjects: true }) as string[]).map((month, index) => {
                        const isRecommended = selectedMonument.bestMonths
                          ? selectedMonument.bestMonths.includes(index)
                          : index < 3 || index > 8;
                        return (
                          <div
                            key={month}
                            className={`relative text-center py-2.5 px-1 rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all ${
                              isRecommended
                                ? 'bg-emerald-500 text-white border border-emerald-600 shadow-sm'
                                : 'bg-gray-100 text-gray-400 border border-gray-200'
                            }`}
                          >
                            <span className="text-[10px] leading-none font-semibold tracking-wide">
                              {(month as string).slice(0, 3)}
                            </span>
                            {isRecommended ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6 9 17l-5-5"/>
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18M6 6l12 12"/>
                              </svg>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <NearbyMonuments current={selectedMonument} />
              </TabsContent>

              {deityInfo && (
                <TabsContent value="deities" className="space-y-5">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2L9.5 8.5H3l5.5 4-2 6.5L12 15l5.5 4-2-6.5L21 8.5h-6.5L12 2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-900 text-lg leading-tight">{t("monument.deitiesTabTitle")}</h3>
                        <p className="text-amber-700 text-xs">{t("monument.deitiesTabSubtitle")}</p>
                      </div>
                    </div>
                    {deityInfo.templeNote && (
                      <p className="text-orange-800 text-sm mt-3 bg-white/60 rounded-lg p-3 border border-amber-100">
                        {isHindi && deityInfo.templeNoteHi ? deityInfo.templeNoteHi : deityInfo.templeNote}
                      </p>
                    )}
                  </div>

                  {deityInfo.deities.length > 1 && (
                    <div className="flex gap-2 flex-wrap">
                      {deityInfo.deities.map((deity, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedDeityIndex(idx)}
                          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                            selectedDeityIndex === idx
                              ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-transparent shadow-md"
                              : "bg-white/70 text-amber-800 border-amber-200 hover:border-amber-400"
                          }`}
                        >
                          {isHindi ? deity.nameHi : deity.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {(() => {
                    const deity = deityInfo.deities[selectedDeityIndex] ?? deityInfo.deities[0];
                    return (
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-amber-900 leading-tight">
                              {isHindi ? deity.nameHi : deity.name}
                            </h2>
                            <div className="flex items-center gap-2 mt-1">
                              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${deity.color}`} />
                              <span className="text-amber-700 text-sm font-medium">
                                {isHindi ? deity.aspectHi : deity.aspect}
                              </span>
                            </div>
                          </div>
                        </div>

                        <DeityModelViewer deity={deity} />

                        <div className="bg-white/70 backdrop-blur-sm border border-amber-100 rounded-xl p-4 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${deity.color}`} />
                            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">{t("monument.deitiesAspect")}</span>
                          </div>
                          <p className="text-orange-900 leading-relaxed text-sm">
                            {isHindi ? deity.descriptionHi : deity.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 bg-gradient-to-r from-amber-100/60 to-orange-100/60 border border-amber-200 rounded-lg px-4 py-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 flex-shrink-0">
                            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
                          </svg>
                          <p className="text-amber-800 text-xs">{isHindi ? "3D मॉडल को घुमाने के लिए माउस या टच का उपयोग करें" : "Drag to rotate · Scroll to zoom the 3D deity model"}</p>
                        </div>
                      </div>
                    );
                  })()}
                </TabsContent>
              )}
            </Tabs>
          </CardContent>
          
          <CardFooter className="flex flex-col md:flex-row gap-4 border-t border-amber-100 pt-6 pb-4">
            <div className="w-full max-w-5xl mx-auto flex flex-col gap-4">
              <h3 className="font-semibold text-amber-900 flex items-center justify-center text-sm mb-0 md:mb-2 text-center w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-amber-600">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M12 18v-6"></path>
                  <path d="M8 18v-1"></path>
                  <path d="M16 18v-3"></path>
                </svg>
                {t("monument.experienceOptions")}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <Button 
                  variant="default" 
                  onClick={handleARView}
                  className="relative overflow-hidden group bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 border-none px-5 py-4 h-auto rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {/* Animated ray background */}
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="w-48 h-48 bg-gradient-to-r from-amber-400 to-orange-200 blur-xl rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="relative mr-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner transform group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                      <path d="M21 4c0 9.941-8.059 18-18 18M14 4.5v1M14 10.5v1M14 16.5v1M9.5 18h1M3.5 18h1M3 13.054C4.285 13.29 5.5 14.353 5.5 16M21 22h-6M21 7V3h-4M3 7V3h4"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-xs opacity-80">{t("monument.experienceIn")}</span>
                    <span className="text-lg font-bold">{t("monument.augmentedReality")}</span>
                  </div>
                </Button>
                
                <Button 
                  variant="secondary" 
                  onClick={handleVRView}
                  className="group relative overflow-hidden bg-white border border-amber-200 text-orange-700 hover:bg-orange-50 px-5 py-4 h-auto rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {/* Animated circle background */}
                  <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-gradient-to-r from-amber-200 to-orange-100 rounded-full group-hover:scale-150 transition-transform duration-500 opacity-30"></div>
                  
                  <div className="relative mr-3 w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-inner transform group-hover:rotate-12 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                      <path d="M6 5.341A8 8 0 1 0 18 5.334M9 9h.01M15 9h.01"/>
                      <rect width="20" height="12" x="2" y="6" rx="2"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-xs opacity-80">{t("monument.exploreIn")}</span>
                    <span className="text-lg font-bold">{t("monument.interactive3D")}</span>
                  </div>
                </Button>
              </div>
              
              <Button
                onClick={handleTimeTravel}
                className="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200 hover:border-amber-300 hover:from-amber-100 hover:to-orange-200 text-amber-800 px-5 py-4 h-auto w-full rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Time ripple effect */}
                <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
                  <div className="w-16 h-16 rounded-full border-4 border-amber-400/30 absolute group-hover:scale-[4] transition-transform duration-1000 opacity-0 group-hover:opacity-40"></div>
                  <div className="w-12 h-12 rounded-full border-4 border-amber-400/30 absolute group-hover:scale-[3] transition-transform duration-700 delay-100 opacity-0 group-hover:opacity-40"></div>
                  <div className="w-8 h-8 rounded-full border-4 border-amber-400/30 absolute group-hover:scale-[2] transition-transform duration-500 delay-200 opacity-0 group-hover:opacity-40"></div>
                </div>
                
                {/* Icon with animated ring */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="relative mr-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div className="absolute inset-0 border-2 border-amber-400/60 rounded-full animate-ping"></div>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs opacity-80">{t("monument.exploreThrough")}</span>
                    <span className="text-lg font-bold">{t("monument.timeTravelBtn")}</span>
                  </div>
                </div>
              </Button>
              
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Construction Story Modal */}
      {showConstructionStory && selectedMonument && (
        <ConstructionStory
          monument={selectedMonument}
          onClose={() => setShowConstructionStory(false)}
        />
      )}
    </div>
  );
};

export default MonumentDetail;
