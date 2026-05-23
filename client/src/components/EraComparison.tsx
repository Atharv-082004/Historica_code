import { Suspense, useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useTranslation } from "react-i18next";
import * as THREE from "three";
import { monuments } from "../data/monuments";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ChevronDown } from "lucide-react";

type EraKey = "ancient" | "past" | "present";

const ERA_CONFIG: Record<EraKey, { label: string; labelHi: string; color: string; tint: THREE.Color }> = {
  ancient: {
    label: "Ancient / As Built",
    labelHi: "प्राचीन / निर्माण काल",
    color: "bg-amber-700",
    tint: new THREE.Color(1.0, 0.92, 0.75),
  },
  past: {
    label: "Colonial Era (~1900)",
    labelHi: "औपनिवेशिक काल (~1900)",
    color: "bg-stone-600",
    tint: new THREE.Color(0.88, 0.84, 0.72),
  },
  present: {
    label: "Present Day",
    labelHi: "वर्तमान काल",
    color: "bg-emerald-700",
    tint: new THREE.Color(1.0, 1.0, 1.0),
  },
};

const ERA_DESCRIPTIONS: Record<string, Record<EraKey, { en: string; hi: string; year: string }>> = {
  "taj-mahal": {
    ancient: { en: "Freshly completed in 1653, the marble was luminous white, gold finials gleamed on every minaret, and the Charbagh garden was in full bloom.", hi: "1653 में पूर्ण होने पर संगमरमर दूधिया सफेद था, हर मीनार पर सोने की कलश चमकती थी और चारबाग़ पूरे खिलाव में था।", year: "1653 AD" },
    past: { en: "By 1900 a century of weathering had yellowed the marble, the gardens were less manicured, and the British Raj used the complex as a barracks.", hi: "1900 तक एक सदी की धूप-बारिश से संगमरमर पीला पड़ गया था, बाग उजड़ने लगे थे और अंग्रेज़ शासन इसे बैरक के रूप में इस्तेमाल करते थे।", year: "c. 1900 AD" },
    present: { en: "Today the Taj Mahal is a UNESCO World Heritage Site receiving 7–8 million visitors a year, with ongoing conservation to combat pollution-related yellowing.", hi: "आज ताज महल यूनेस्को विश्व धरोहर स्थल है जहाँ सालाना 70-80 लाख पर्यटक आते हैं और प्रदूषण से होने वाले पीलेपन को रोकने के लिए संरक्षण कार्य जारी है।", year: "Present" },
  },
  "red-fort": {
    ancient: { en: "Built by Shah Jahan in 1648 as the seat of Mughal power, the Red Fort's white marble inlays, the Khas Mahal and Diwan-i-Khas were at their resplendent peak.", hi: "1648 में शाहजहाँ द्वारा मुगल सत्ता के केंद्र के रूप में बनाया गया, लाल किले की सफेद संगमरमर जड़ाई, खास महल और दीवान-ए-खास अपने वैभव की चरम सीमा पर थे।", year: "1648 AD" },
    past: { en: "After the 1857 uprising the British demolished large sections of the Fort, converting palaces into barracks and stripping away much of the marble inlay.", hi: "1857 के विद्रोह के बाद अंग्रेज़ों ने किले के बड़े हिस्से ध्वस्त कर दिए, महलों को बैरकों में बदल दिया और संगमरमर की जड़ाई हटा दी।", year: "c. 1858 AD" },
    present: { en: "Restored as India's premier national monument, the Red Fort hosts the Prime Minister's Independence Day address every 15 August and is a UNESCO World Heritage Site.", hi: "भारत के प्रमुख राष्ट्रीय स्मारक के रूप में पुनर्स्थापित, लाल किला हर 15 अगस्त को प्रधानमंत्री के स्वतंत्रता दिवस संबोधन का स्थान है और यूनेस्को विश्व धरोहर स्थल है।", year: "Present" },
  },
  "hawa-mahal": {
    ancient: { en: "Built in 1799 by Maharaja Sawai Pratap Singh, the freshly-carved pink sandstone lattice facade was a wonder of Jaipur's old city, used by royal ladies to observe street life.", hi: "1799 में महाराजा सवाई प्रताप सिंह द्वारा निर्मित, ताज़ी नक्काशीदार गुलाबी बलुआ पत्थर की जाली जयपुर के पुराने शहर का चमत्कार थी।", year: "1799 AD" },
    past: { en: "By the early 1900s Hawa Mahal had become a defining symbol of Jaipur, though some lattice windows needed maintenance and the surrounding bazaar had grown dense.", hi: "1900 के दशक तक हवा महल जयपुर का प्रतीक बन चुका था, हालाँकि कुछ जाली खिड़कियों की मरम्मत की ज़रूरत थी।", year: "c. 1900 AD" },
    present: { en: "Now Jaipur's most photographed icon, Hawa Mahal was restored with its distinctive pink facade and receives over a million visitors annually.", hi: "अब जयपुर का सबसे अधिक फ़ोटो खींचा जाने वाला प्रतीक, हवा महल को इसके गुलाबी मुखौटे के साथ पुनर्स्थापित किया गया है।", year: "Present" },
  },
  "qutub-minar": {
    ancient: { en: "Begun by Qutb ud-Din Aibak around 1193 and completed by Iltutmish, the minar was a fresh testament to Delhi Sultanate power, its red sandstone intricate carvings crisp.", hi: "1193 के आसपास कुतुबुद्दीन ऐबक द्वारा शुरू और इल्तुतमिश द्वारा पूर्ण, मीनार दिल्ली सल्तनत की शक्ति का प्रतीक था।", year: "c. 1220 AD" },
    past: { en: "By the 19th century the Qutub complex was largely buried under centuries of debris. British surveys by Major General Cunningham began restoring the site.", hi: "19वीं शताब्दी तक क़ुतुब परिसर सदियों के मलबे से ढका था। मेजर जनरल कनिंघम के सर्वेक्षण ने पुनर्स्थापना शुरू की।", year: "c. 1870 AD" },
    present: { en: "The Qutub Minar is today India's tallest brick minaret and a UNESCO World Heritage Site, drawing millions of visitors with its layered Islamic and Hindu architectural heritage.", hi: "क़ुतुब मीनार आज भारत की सबसे ऊँची ईंट की मीनार और यूनेस्को विश्व धरोहर स्थल है।", year: "Present" },
  },
  "sanchi-stupa": {
    ancient: { en: "Commissioned by Emperor Ashoka in the 3rd century BC, the Great Stupa was freshly whitewashed with vibrant painted toranas, a living hub of Buddhist monks and pilgrims.", hi: "सम्राट अशोक द्वारा तीसरी शताब्दी ईसा पूर्व में निर्मित, महान स्तूप ताज़ा सफेदी लगा था और जीवंत रंगीन तोरण थे।", year: "c. 250 BC" },
    past: { en: "By the early 1800s Sanchi had been abandoned for centuries. British officer Captain Taylor rediscovered it in 1818, finding two toranas collapsed and the site overgrown.", hi: "1800 के दशक की शुरुआत तक साँची सदियों से वीरान था। 1818 में ब्रिटिश अधिकारी कैप्टन टेलर ने इसे पुनः खोजा, दो तोरण गिरे हुए और स्थल जंगल में घिरा था।", year: "c. 1818 AD" },
    present: { en: "Now a UNESCO World Heritage Site, Sanchi's Great Stupa stands fully restored with all four toranas upright, welcoming Buddhist pilgrims and tourists from across the world.", hi: "अब यूनेस्को विश्व धरोहर स्थल, साँची का महान स्तूप पूरी तरह पुनर्स्थापित है, सभी चार तोरण खड़े हैं।", year: "Present" },
  },
  "fatehpur-sikri": {
    ancient: { en: "At its 1580 Mughal peak, Fatehpur Sikri was a fully occupied imperial capital — the Buland Darwaza freshly carved, the Panch Mahal vibrant, thousands in the royal court.", hi: "1580 में अपनी मुगल चरम पर, फ़तेहपुर सीकरी एक पूर्ण शाही राजधानी थी — बुलंद दरवाज़ा ताज़ा नक्काशीदार, पंच महल जीवंत।", year: "c. 1580 AD" },
    past: { en: "Abandoned just 14 years after completion due to water scarcity, by the colonial era Fatehpur Sikri was a ghost city slowly decaying in the Rajasthan heat.", hi: "पानी की कमी के कारण पूर्ण होने के मात्र 14 वर्ष बाद छोड़ दिया गया, औपनिवेशिक काल तक फ़तेहपुर सीकरी राजस्थान की गर्मी में धीरे-धीरे क्षय होता एक भूतिया शहर था।", year: "c. 1900 AD" },
    present: { en: "Today a UNESCO World Heritage Site, Fatehpur Sikri is remarkably well-preserved — a frozen Mughal city that visitors explore as one of the finest examples of Mughal architecture.", hi: "आज यूनेस्को विश्व धरोहर स्थल, फ़तेहपुर सीकरी उल्लेखनीय रूप से सुरक्षित है — एक जमे हुए मुगल शहर के रूप में।", year: "Present" },
  },
  "humayuns-tomb": {
    ancient: { en: "Completed in 1572, Humayun's Tomb was the first great Mughal garden tomb — its double marble dome revolutionary, the Charbagh immaculate with flowing water channels.", hi: "1572 में पूर्ण, हुमायूँ का मकबरा पहला महान मुगल बाग-मकबरा था — इसका दोहरा संगमरमर का गुंबद क्रांतिकारी था।", year: "1572 AD" },
    past: { en: "In 1857 the last Mughal emperor Bahadur Shah Zafar took refuge here before surrendering to the British. The complex was then neglected for decades.", hi: "1857 में अंतिम मुगल सम्राट बहादुर शाह ज़फ़र ने अंग्रेज़ों के सामने आत्मसमर्पण से पहले यहाँ शरण ली। फिर परिसर को दशकों तक उपेक्षित छोड़ा गया।", year: "1857 AD" },
    present: { en: "Restored by the Aga Khan Trust and now a UNESCO World Heritage Site, Humayun's Tomb's Charbagh is one of the finest surviving Mughal gardens in India.", hi: "आगा ख़ान ट्रस्ट द्वारा पुनर्स्थापित और अब यूनेस्को विश्व धरोहर स्थल, हुमायूँ के मकबरे का चारबाग़ भारत के सबसे उत्कृष्ट मुगल बाग़ों में से एक है।", year: "Present" },
  },
};

const MONUMENTS_WITH_ERAS = monuments.filter(m =>
  m.historicalModels &&
  (m.historicalModels.ancient !== m.primaryModel || m.historicalModels.past !== m.primaryModel)
);

function EraModelScene({ modelPath, era }: { modelPath: string; era: EraKey }) {
  const { scene } = useGLTF(modelPath);
  const tint = ERA_CONFIG[era].tint;

  useEffect(() => {
    if (!scene) return;
    scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach((mat: any) => {
          const m = mat.clone();
          m.color.multiply(tint);
          child.material = m;
        });
      }
    });
  }, [scene, modelPath]);

  return <primitive object={scene} scale={2.5} position={[0, -1, 0]} />;
}

function EraCanvas({ modelPath, era }: { modelPath: string; era: EraKey }) {
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 45 }} shadows>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
      <Suspense fallback={
        <mesh>
          <boxGeometry args={[1, 2, 1]} />
          <meshStandardMaterial color="#d4a96a" />
        </mesh>
      }>
        <EraModelScene modelPath={modelPath} era={era} />
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls enablePan={false} minDistance={3} maxDistance={12} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}

const EraComparison = () => {
  const { t, i18n } = useTranslation();
  const [, setLocation] = useLocation();
  const isHindi = i18n.language === "hi";

  const [selectedId, setSelectedId] = useState(MONUMENTS_WITH_ERAS[0]?.id ?? "");
  const [eraA, setEraA] = useState<EraKey>("ancient");
  const [eraB, setEraB] = useState<EraKey>("present");

  const monument = monuments.find(m => m.id === selectedId);
  if (!monument) return null;

  const getModelUrl = (era: EraKey) => {
    if (era === "present") return monument.primaryModel;
    if (era === "past") return monument.historicalModels?.past ?? monument.primaryModel;
    return monument.historicalModels?.ancient ?? monument.primaryModel;
  };

  const descKey = selectedId as keyof typeof ERA_DESCRIPTIONS;
  const getDesc = (era: EraKey) => {
    const d = ERA_DESCRIPTIONS[descKey]?.[era];
    if (!d) return { text: "", year: "" };
    return { text: isHindi ? d.hi : d.en, year: d.year };
  };

  const availableEras: EraKey[] = ["ancient", "past", "present"].filter(e => {
    if (e === "present") return true;
    const url = e === "past" ? monument.historicalModels?.past : monument.historicalModels?.ancient;
    return url && url !== monument.primaryModel;
  }) as EraKey[];

  const monName = (isHindi && monument.nameHi) ? monument.nameHi : monument.name;

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-amber-800/40 shrink-0 pr-52">
        <div>
          <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-300">
            {isHindi ? "युग तुलना" : "Era Comparison"}
          </h1>
          <p className="text-xs text-amber-400/80">
            {isHindi ? "एक ही स्मारक को विभिन्न ऐतिहासिक कालों में देखें" : "See the same monument across different historical periods"}
          </p>
        </div>

        {/* Monument picker */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <label className="text-[10px] text-amber-400 uppercase tracking-wide block mb-1">
              {isHindi ? "स्मारक" : "Monument"}
            </label>
            <div className="relative">
              <select
                value={selectedId}
                onChange={e => { setSelectedId(e.target.value); }}
                className="bg-stone-800 border border-amber-700/50 text-amber-100 text-sm rounded-lg px-3 py-1.5 pr-8 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                {MONUMENTS_WITH_ERAS.map(m => (
                  <option key={m.id} value={m.id}>
                    {(isHindi && m.nameHi) ? m.nameHi : m.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-2 h-4 w-4 text-amber-400 pointer-events-none" />
            </div>
          </div>

          <Button variant="outline" size="sm" className="border-amber-700/50 text-amber-300 hover:bg-amber-900/30 bg-transparent"
            onClick={() => setLocation("/")}>
            ← {isHindi ? "मानचित्र पर वापस" : "Back to Map"}
          </Button>
        </div>
      </div>

      {/* Monument name */}
      <div className="text-center py-2 shrink-0">
        <span className="text-lg font-semibold text-amber-200">{monName}</span>
        <span className="text-amber-500 text-sm ml-2">· {monument.yearBuilt}</span>
        {monument.UNESCO && (
          <Badge className="ml-2 bg-amber-600/60 text-amber-100 text-[10px]">UNESCO</Badge>
        )}
      </div>

      {/* Era pickers row */}
      <div className="flex items-center justify-center gap-6 py-2 shrink-0">
        {(["A", "B"] as const).map((side, idx) => {
          const era = idx === 0 ? eraA : eraB;
          const setEra = idx === 0 ? setEraA : setEraB;
          return (
            <div key={side} className="flex items-center gap-2">
              <span className="text-xs text-amber-400">{isHindi ? (idx === 0 ? "बायाँ" : "दायाँ") : (idx === 0 ? "Left" : "Right")}:</span>
              <div className="relative">
                <select
                  value={era}
                  onChange={e => setEra(e.target.value as EraKey)}
                  className="bg-stone-800 border border-amber-700/50 text-amber-100 text-xs rounded-lg px-2 py-1 pr-6 appearance-none cursor-pointer focus:outline-none"
                >
                  {availableEras.map(e => (
                    <option key={e} value={e}>
                      {isHindi ? ERA_CONFIG[e].labelHi : ERA_CONFIG[e].label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-1 top-1.5 h-3 w-3 text-amber-400 pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Side-by-side comparison */}
      <div className="flex-1 grid grid-cols-2 gap-3 px-4 pb-4 min-h-0">
        {([eraA, eraB] as EraKey[]).map((era, idx) => {
          const cfg = ERA_CONFIG[era];
          const desc = getDesc(era);
          const modelUrl = getModelUrl(era);
          return (
            <div key={idx} className="flex flex-col rounded-xl border border-amber-800/40 bg-stone-900/60 overflow-hidden">
              {/* Era label banner */}
              <div className={`${cfg.color} px-3 py-1.5 flex items-center justify-between shrink-0`}>
                <span className="text-sm font-bold text-white">
                  {isHindi ? cfg.labelHi : cfg.label}
                </span>
                <span className="text-xs text-white/80 font-mono">{desc.year}</span>
              </div>

              {/* 3D model */}
              <div className="flex-1 min-h-0 bg-gradient-to-b from-stone-800 to-stone-900">
                <EraCanvas modelPath={modelUrl} era={era} />
              </div>

              {/* Description */}
              {desc.text && (
                <div className="px-3 py-2.5 border-t border-amber-800/30 text-xs text-amber-200/80 leading-relaxed bg-stone-900/80 shrink-0">
                  {desc.text}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EraComparison;
