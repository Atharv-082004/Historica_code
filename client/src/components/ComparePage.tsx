import { Suspense, useState } from "react";
import { useLocation } from "wouter";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import { useTranslation } from "react-i18next";
import { monuments } from "../data/monuments";
import { HOTSPOT_HI } from "../data/hotspotTranslationsHi";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Calendar, Crown, Clock, Ticket, Globe, Landmark, Star, ChevronDown, ChevronUp } from "lucide-react";
import AutoFitCamera from "./AutoFitCamera";

const Model = ({ url }: { url: string }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} position={[0, 0, 0]} scale={1.5} />;
};

const ScenePreview = ({ url }: { url: string }) => (
  <Canvas shadows camera={{ position: [0, 1.5, 6], fov: 40 }}>
    <ambientLight intensity={0.6} />
    <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
    <Environment preset="sunset" />
    <Suspense fallback={
      <Html center>
        <div className="flex flex-col items-center gap-2 select-none">
          <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
          <div className="text-amber-200 text-xs font-medium bg-black/50 px-3 py-1.5 rounded-lg whitespace-nowrap">
            Loading…
          </div>
        </div>
      </Html>
    }>
      <Model url={url} />
    </Suspense>
    <OrbitControls
      makeDefault
      enablePan
      enableZoom
      enableRotate
      zoomSpeed={0.4}
      minPolarAngle={Math.PI / 8}
      maxPolarAngle={Math.PI / 2}
      minDistance={2}
      maxDistance={20}
      target={[0, 0, 0]}
    />
    <AutoFitCamera margin={1.8} />
  </Canvas>
);

const MonumentPicker = ({
  value, onChange, exclude, label, isHindi,
}: {
  value: string; onChange: (id: string) => void; exclude?: string; label: string; isHindi: boolean;
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-amber-800">{label}</label>
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-52 bg-white border border-amber-200 rounded-md px-3 py-2 text-sm text-orange-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
    >
      {monuments.filter(m => m.id !== exclude).map(m => (
        <option key={m.id} value={m.id}>
          {(isHindi && m.nameHi) ? m.nameHi : m.name} — {m.city}
        </option>
      ))}
    </select>
  </div>
);

const ERA_COLOR: Record<string, string> = {
  ancient: "bg-amber-100 text-amber-800 border-amber-300",
  medieval: "bg-orange-100 text-orange-800 border-orange-300",
  modern: "bg-blue-100 text-blue-800 border-blue-300",
};

const ERA_LABELS_HI: Record<string, string> = {
  ancient: "प्राचीन",
  medieval: "मध्यकालीन",
  modern: "आधुनिक",
};

const STATE_HI: Record<string, string> = {
  "Uttar Pradesh": "उत्तर प्रदेश",
  "Delhi": "दिल्ली",
  "Rajasthan": "राजस्थान",
  "Odisha": "ओडिशा",
  "Maharashtra": "महाराष्ट्र",
  "Karnataka": "कर्नाटक",
  "Telangana": "तेलंगाना",
  "Punjab": "पंजाब",
  "Tamil Nadu": "तमिलनाडु",
  "Madhya Pradesh": "मध्य प्रदेश",
  "West Bengal": "पश्चिम बंगाल",
  "Bihar": "बिहार",
  "Gujarat": "गुजरात",
  "Ladakh": "लद्दाख",
  "Andhra Pradesh": "आंध्र प्रदेश",
  "Goa": "गोवा",
  "Assam": "असम",
  "Arunachal Pradesh": "अरुणाचल प्रदेश",
};

const YEAR_BUILT_HI: Record<string, string> = {
  "1250 CE": "1250 ई.",
  "2nd century BCE to 7th century CE": "दूसरी शताब्दी ईसा पूर्व से 7वीं शताब्दी ई.",
  "14th-16th century CE": "14वीं–16वीं शताब्दी ई.",
  "7th century CE (major rebuild 1623–1655)": "7वीं शताब्दी ई. (बड़ा पुनर्निर्माण 1623–1655)",
  "950–1050 CE": "950–1050 ई.",
  "3rd century BCE (expanded 2nd–1st century BCE)": "तीसरी शताब्दी ईसा पूर्व (विस्तार दूसरी–पहली शताब्दी ईसा पूर्व)",
  "1592 (major expansion by Raja Man Singh I)": "1592 (राजा मान सिंह प्रथम द्वारा बड़ा विस्तार)",
  "700–728 CE": "700–728 ई.",
  "1565–1573 (Akbar); expanded by Jahangir and Shah Jahan": "1565–1573 (अकबर); जहाँगीर और शाहजहाँ द्वारा विस्तारित",
  "1003–1010 CE": "1003–1010 ई.",
  "5th–6th century CE (original shrine ~250 BCE by Ashoka)": "5वीं–6वीं शताब्दी ई. (मूल मंदिर ~250 ईसा पूर्व अशोक द्वारा)",
  "5th–8th century CE": "5वीं–8वीं शताब्दी ई.",
  "1063 CE (Solanki dynasty)": "1063 ई. (सोलंकी वंश)",
  "5th century CE (founded); destroyed ~1193 CE": "5वीं शताब्दी ई. (स्थापित); ~1193 ई. में नष्ट",
  "7th century CE (founded); 15th–16th century (peak)": "7वीं शताब्दी ई. (स्थापित); 15वीं–16वीं शताब्दी (चरमोत्कर्ष)",
  "756–773 CE": "756–773 ई.",
  "1459 CE": "1459 ई.",
  "1156 CE": "1156 ई.",
  "1443–1458 CE": "1443–1458 ई.",
  "1593 CE": "1593 ई.",
  "1559 CE onwards (Maharana Udai Singh II)": "1559 ई. से (महाराणा उदय सिंह द्वितीय)",
  "1437 CE (built over 65 years)": "1437 ई. (65 वर्षों में निर्मित)",
  "1031–1300 CE (five temples)": "1031–1300 ई. (पाँच मंदिर)",
  "13th century CE (original shrine); expanded by Mughals": "13वीं शताब्दी ई. (मूल मंदिर); मुगलों द्वारा विस्तारित",
  "1533–1545 CE": "1533–1545 ई.",
  "1754 CE": "1754 ई.",
  "1644–1656 CE": "1644–1656 ई.",
  "1622–1628 CE": "1622–1628 ई.",
  "1605–1613 CE": "1605–1613 ई.",
  "17th century CE (c. 1600s)": "17वीं शताब्दी ई. (लगभग 1600 दशक)",
  "17th century CE (refounded 1630s by the King of Ladakh)": "17वीं शताब्दी ई. (1630 के दशक में लद्दाख के राजा द्वारा पुनर्स्थापित)",
  "~1143 CE (original); expanded 16th century by Qutb Shahi": "~1143 ई. (मूल); कुतुब शाही द्वारा 16वीं शताब्दी में विस्तारित",
  "1213 CE": "1213 ई.",
  "12th–13th century CE": "12वीं–13वीं शताब्दी ई.",
  "1750s–1880s CE (built in phases)": "1750–1880 दशक ई. (चरणबद्ध निर्माण)",
  "14th–15th century CE": "14वीं–15वीं शताब्दी ई.",
  "1121 CE (construction continued for 90+ years)": "1121 ई. (निर्माण 90+ वर्षों तक जारी रहा)",
  "7th–8th century CE": "7वीं–8वीं शताब्दी ई.",
  "6th century CE (578–590 CE)": "6वीं शताब्दी ई. (578–590 ई.)",
  "983 CE": "983 ई.",
  "1530 CE (Vijayanagara period)": "1530 ई. (विजयनगर काल)",
  "Early centuries CE (current structure 9th–10th century onwards)": "आरंभिक शताब्दियाँ ई. (वर्तमान संरचना 9वीं–10वीं शताब्दी से)",
  "12th century CE (current structure); ancient origin": "12वीं शताब्दी ई. (वर्तमान संरचना); प्राचीन उत्पत्ति",
  "1035 CE": "1035 ई.",
  "1594–1605 CE": "1594–1605 ई.",
  "12th century CE (Yadava dynasty); strengthened by Bahmanis and Mughals": "12वीं शताब्दी ई. (यादव वंश); बहमनियों और मुगलों द्वारा सुदृढ़",
  "1892 CE": "1892 ई.",
  "1732 CE": "1732 ई.",
  "~1030 CE (Chandrarao More); extensively rebuilt by Shivaji 1674 CE": "~1030 ई. (चंद्रराव मोरे); शिवाजी द्वारा 1674 ई. में व्यापक पुनर्निर्माण",
  "~6th century CE (original); Man Singh Palace 1486–1516 CE": "~6वीं शताब्दी ई. (मूल); मान सिंह महल 1486–1516 ई.",
  "1501 CE (Orchha established); Jahangir Mahal 1605 CE": "1501 ई. (ओरछा स्थापित); जहाँगीर महल 1605 ई.",
  "~30,000 BCE (earliest paintings); inhabited continuously until medieval era": "~30,000 ईसा पूर्व (प्राचीनतम चित्र); मध्यकाल तक निरंतर निवास",
  "1469–1500 CE": "1469–1500 ई.",
  "~11th century CE (Somavamsi dynasty)": "~11वीं शताब्दी ई. (सोमवंशी राजवंश)",
  "12th century CE (Ganga dynasty)": "12वीं शताब्दी ई. (गंग राजवंश)",
  "1st century BCE (Mahameghavahana King Kharavela)": "पहली शताब्दी ईसा पूर्व (महामेघवाहन राजा खारवेल)",
  "3rd century BCE (Ashoka's structures); Dhamek Stupa 500 CE (Gupta era)": "तीसरी शताब्दी ईसा पूर्व (अशोक की संरचनाएँ); धमेक स्तूप 500 ई. (गुप्त काल)",
  "6th century BCE (Republican city); Ashokan structures ~250 BCE": "6वीं शताब्दी ईसा पूर्व (गणतंत्र नगर); अशोकन संरचनाएँ ~250 ईसा पूर्व",
  "~5th century CE (current Parinirvana Temple); original shrines 3rd century BCE": "~5वीं शताब्दी ई. (वर्तमान परिनिर्वाण मंदिर); मूल मंदिर तीसरी शताब्दी ईसा पूर्व",
  "~800 CE (Pala dynasty); destroyed ~1203 CE": "~800 ई. (पाल राजवंश); ~1203 ई. में नष्ट",
  "Pre-historic origin; current structure 17th century CE": "प्रागैतिहासिक उत्पत्ति; वर्तमान संरचना 17वीं शताब्दी ई.",
  "1680–1681 CE": "1680–1681 ई.",
  "1937–1943 CE": "1937–1943 ई.",
  "1026 CE": "1026 ई.",
  "~2650–1450 BCE": "~2650–1450 ईसा पूर्व",
  "Ancient origin; current structure completed 1951 CE": "प्राचीन उत्पत्ति; वर्तमान संरचना 1951 ई. में पूर्ण",
};

const Side = ({ id, isHindi }: { id: string; isHindi: boolean }) => {
  const { t } = useTranslation();
  const m = monuments.find(x => x.id === id);
  const [showAllFacts, setShowAllFacts] = useState(false);
  if (!m) return null;

  const name = (isHindi && m.nameHi) ? m.nameHi : m.name;
  const description = (isHindi && m.descriptionHi) ? m.descriptionHi : m.description;
  const dynasty = (isHindi && m.dynastyHi) ? m.dynastyHi : m.dynasty;
  const facts = (isHindi && m.factsHi && m.factsHi.length > 0) ? m.factsHi : m.facts;
  const visitingHours = (isHindi && m.visitingHoursHi) ? m.visitingHoursHi : m.visitingHours;
  const entryFee = (isHindi && m.entryFeeHi) ? m.entryFeeHi : (m.entryFee ?? t("compare.free"));
  const eraLabel = m.era
    ? (isHindi ? (ERA_LABELS_HI[m.era] ?? m.era) : m.era)
    : null;

  const visibleFacts = showAllFacts ? facts : facts.slice(0, 3);

  return (
    <Card className="border-amber-200 shadow-lg bg-white/95 backdrop-blur-md overflow-hidden flex flex-col h-full">
      <div className="h-52 bg-gradient-to-br from-amber-100/60 to-orange-100/60 shrink-0">
        <ScenePreview url={m.primaryModel} />
      </div>

      <CardContent className="p-0 overflow-y-auto flex-1 flex flex-col">
        <div className="px-4 pt-3 pb-2 border-b border-amber-100">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-amber-900 leading-tight">{name}</h3>
              <p className="text-xs text-orange-600 flex items-center gap-1 mt-0.5">
                <MapPin className="h-3 w-3" /> {m.city}, {m.state}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              {m.UNESCO && (
                <Badge className="bg-amber-500 text-white text-[10px] px-2 py-0">UNESCO</Badge>
              )}
              {eraLabel && (
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border capitalize ${ERA_COLOR[m.era!] ?? ""}`}>
                  {eraLabel}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-amber-100 border-b border-amber-100">
          {[
            { icon: <Calendar className="h-3.5 w-3.5" />, label: t("compare.built"), value: m.yearBuilt },
            { icon: <Crown className="h-3.5 w-3.5" />, label: t("monument.dynasty"), value: dynasty },
            { icon: <Clock className="h-3.5 w-3.5" />, label: t("monument.visitingHours"), value: visitingHours },
            { icon: <Ticket className="h-3.5 w-3.5" />, label: t("monument.entryFee"), value: entryFee },
          ].map(({ icon, label, value }) => (
            <div key={label} className="bg-white px-3 py-2">
              <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                {icon}
                <span className="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">{label}</span>
              </div>
              <div className="text-xs text-orange-900 leading-snug">{value}</div>
            </div>
          ))}
        </div>

        <div className="px-4 py-3 border-b border-amber-100">
          <div className="flex items-center gap-1 text-amber-600 mb-1">
            <Globe className="h-3.5 w-3.5" />
            <span className="text-[10px] font-semibold uppercase tracking-wide">{t("compare.about")}</span>
          </div>
          <p className="text-xs text-orange-900 leading-relaxed">{description}</p>
        </div>

        <div className="px-4 py-3 border-b border-amber-100">
          <div className="flex items-center gap-1 text-amber-600 mb-2">
            <Star className="h-3.5 w-3.5" />
            <span className="text-[10px] font-semibold uppercase tracking-wide">{t("compare.keyFacts")}</span>
          </div>
          <ul className="space-y-1.5">
            {visibleFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-orange-900">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                {fact}
              </li>
            ))}
          </ul>
          {facts.length > 3 && (
            <button
              onClick={() => setShowAllFacts(v => !v)}
              className="mt-2 flex items-center gap-1 text-[11px] text-amber-600 hover:text-amber-800 font-medium"
            >
              {showAllFacts
                ? <><ChevronUp className="h-3 w-3" /> {t("compare.showLess")}</>
                : <><ChevronDown className="h-3 w-3" /> {facts.length - 3} {t("compare.moreFacts")}</>}
            </button>
          )}
        </div>

        {m.hotspots && m.hotspots.length > 0 && (
          <div className="px-4 py-3">
            <div className="flex items-center gap-1 text-amber-600 mb-2">
              <Landmark className="h-3.5 w-3.5" />
              <span className="text-[10px] font-semibold uppercase tracking-wide">{t("compare.notableFeatures")}</span>
            </div>
            <div className="space-y-2">
              {m.hotspots.map((h, i) => {
                const hiData = isHindi ? HOTSPOT_HI[h.name] : undefined;
                return (
                  <div key={i} className="bg-amber-50 border border-amber-100 rounded-md px-2.5 py-1.5">
                    <div className="text-xs font-semibold text-amber-800">{hiData ? hiData.name : h.name}</div>
                    <div className="text-[11px] text-orange-700 leading-snug mt-0.5">{hiData ? hiData.description : h.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ComparePage = () => {
  const { t, i18n } = useTranslation();
  const [, setLocation] = useLocation();
  const [a, setA] = useState(monuments[0].id);
  const [b, setB] = useState(monuments[1].id);
  const mA = monuments.find(x => x.id === a);
  const mB = monuments.find(x => x.id === b);
  const isHindi = i18n.language === "hi";

  const mAName = (isHindi && mA?.nameHi) ? mA.nameHi : mA?.name;
  const mBName = (isHindi && mB?.nameHi) ? mB.nameHi : mB?.name;

  const eraA = mA?.era ? (isHindi ? (ERA_LABELS_HI[mA.era] ?? mA.era) : mA.era) : "—";
  const eraB = mB?.era ? (isHindi ? (ERA_LABELS_HI[mB.era] ?? mB.era) : mB.era) : "—";

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-4 pr-52">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">
            {t("nav.compare")}
          </h1>
          <p className="text-sm text-orange-700">{t("compare.subtitle")}</p>
        </div>
        <div className="flex gap-3 items-end flex-wrap">
          <MonumentPicker label={t("compare.left")} value={a} onChange={setA} exclude={b} isHindi={isHindi} />
          <MonumentPicker label={t("compare.right")} value={b} onChange={setB} exclude={a} isHindi={isHindi} />
          <Button variant="outline" onClick={() => setLocation("/")}>{t("monument.backToMap")}</Button>
        </div>
      </div>

      {mA && mB && (
        <div className="bg-white/80 border border-amber-200 rounded-lg px-4 py-2 mb-3 grid grid-cols-3 text-center text-xs gap-2">
          <div className="font-semibold text-amber-800 truncate">{mAName}</div>
          <div className="text-amber-500 font-bold">VS</div>
          <div className="font-semibold text-amber-800 truncate">{mBName}</div>

          <div className="text-orange-700">{isHindi ? (YEAR_BUILT_HI[mA.yearBuilt] ?? mA.yearBuilt) : mA.yearBuilt}</div>
          <div className="text-amber-400 text-[10px] uppercase tracking-wide">{t("monument.yearBuilt")}</div>
          <div className="text-orange-700">{isHindi ? (YEAR_BUILT_HI[mB.yearBuilt] ?? mB.yearBuilt) : mB.yearBuilt}</div>

          <div className="text-orange-700">{isHindi ? (STATE_HI[mA.state] ?? mA.state) : mA.state}</div>
          <div className="text-amber-400 text-[10px] uppercase tracking-wide">{t("compare.state")}</div>
          <div className="text-orange-700">{isHindi ? (STATE_HI[mB.state] ?? mB.state) : mB.state}</div>

          <div className="text-orange-700">{mA.UNESCO ? `✅ ${t("compare.yes")}` : `❌ ${t("compare.no")}`}</div>
          <div className="text-amber-400 text-[10px] uppercase tracking-wide">UNESCO</div>
          <div className="text-orange-700">{mB.UNESCO ? `✅ ${t("compare.yes")}` : `❌ ${t("compare.no")}`}</div>

          <div className="text-orange-700 capitalize">{eraA}</div>
          <div className="text-amber-400 text-[10px] uppercase tracking-wide">{t("compare.era")}</div>
          <div className="text-orange-700 capitalize">{eraB}</div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
        <Side id={a} isHindi={isHindi} />
        <Side id={b} isHindi={isHindi} />
      </div>
    </div>
  );
};

export default ComparePage;
