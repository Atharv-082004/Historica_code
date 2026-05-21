import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { monuments } from "../data/monuments";
import { useTranslation } from "react-i18next";

interface EraGroup {
  id: string;
  label: string;
  labelHi: string;
  range: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  dotColor: string;
  minYear: number;
  maxYear: number;
  icon: string;
}

const ERA_GROUPS: EraGroup[] = [
  { id: "indus", label: "Indus Valley", labelHi: "सिंधु घाटी", range: "3000–1500 BCE", color: "#c084fc", bgColor: "bg-purple-950/80", borderColor: "border-purple-500", textColor: "text-purple-200", dotColor: "bg-purple-400", minYear: -3000, maxYear: -1500, icon: "🏺" },
  { id: "maurya-gupta", label: "Maurya & Gupta", labelHi: "मौर्य और गुप्त", range: "300 BCE–600 CE", color: "#fb923c", bgColor: "bg-orange-950/80", borderColor: "border-orange-500", textColor: "text-orange-200", dotColor: "bg-orange-400", minYear: -300, maxYear: 600, icon: "☸️" },
  { id: "early-medieval", label: "Early Medieval", labelHi: "प्रारंभिक मध्यकाल", range: "600–1200 CE", color: "#4ade80", bgColor: "bg-green-950/80", borderColor: "border-green-500", textColor: "text-green-200", dotColor: "bg-green-400", minYear: 600, maxYear: 1200, icon: "🛕" },
  { id: "sultanate", label: "Delhi Sultanate", labelHi: "दिल्ली सल्तनत", range: "1200–1526 CE", color: "#38bdf8", bgColor: "bg-sky-950/80", borderColor: "border-sky-500", textColor: "text-sky-200", dotColor: "bg-sky-400", minYear: 1200, maxYear: 1526, icon: "🏰" },
  { id: "mughal", label: "Mughal Empire", labelHi: "मुग़ल साम्राज्य", range: "1526–1720 CE", color: "#fbbf24", bgColor: "bg-amber-950/80", borderColor: "border-amber-500", textColor: "text-amber-200", dotColor: "bg-amber-400", minYear: 1526, maxYear: 1720, icon: "👑" },
  { id: "regional", label: "Regional Kingdoms", labelHi: "क्षेत्रीय साम्राज्य", range: "1600–1800 CE", color: "#f472b6", bgColor: "bg-pink-950/80", borderColor: "border-pink-500", textColor: "text-pink-200", dotColor: "bg-pink-400", minYear: 1600, maxYear: 1850, icon: "🗡️" },
  { id: "colonial", label: "Colonial Era", labelHi: "औपनिवेशिक काल", range: "1757–1947 CE", color: "#a78bfa", bgColor: "bg-violet-950/80", borderColor: "border-violet-500", textColor: "text-violet-200", dotColor: "bg-violet-400", minYear: 1757, maxYear: 1947, icon: "🏛️" },
  { id: "modern", label: "Post-Independence", labelHi: "स्वतंत्रता पश्चात", range: "1947–Present", color: "#34d399", bgColor: "bg-emerald-950/80", borderColor: "border-emerald-500", textColor: "text-emerald-200", dotColor: "bg-emerald-400", minYear: 1947, maxYear: 2024, icon: "🌟" },
];

function parseYear(yearStr: string): number {
  if (!yearStr) return 1500;
  const s = yearStr.trim();
  const bce = s.match(/(\d+)\s*(?:BCE|BC)/i);
  if (bce) return -parseInt(bce[1]);
  const ce = s.match(/^(\d{3,4})/);
  if (ce) return parseInt(ce[1]);
  return 1500;
}

function assignEra(year: number): EraGroup {
  for (const era of ERA_GROUPS) {
    if (year >= era.minYear && year <= era.maxYear) return era;
  }
  return ERA_GROUPS[4];
}

const TimelinePage = () => {
  const { t, i18n } = useTranslation();
  const [, setLocation] = useLocation();
  const isHindi = i18n.language === "hi";
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [selectedMonument, setSelectedMonument] = useState<typeof monuments[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sortedMonuments = [...monuments].sort((a, b) => parseYear(a.yearBuilt) - parseYear(b.yearBuilt));

  const grouped: Record<string, typeof monuments> = {};
  for (const m of sortedMonuments) {
    const yr = parseYear(m.yearBuilt);
    const era = assignEra(yr);
    if (!grouped[era.id]) grouped[era.id] = [];
    grouped[era.id].push(m);
  }

  const filteredEras = selectedEra
    ? ERA_GROUPS.filter(e => e.id === selectedEra)
    : ERA_GROUPS.filter(e => grouped[e.id]?.length > 0);

  return (
    <div className="min-h-full bg-slate-950 text-white">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4 pr-48">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            {t("common.back")}
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl">📜</span>
              {isHindi ? "राजवंश और युग की समयरेखा" : "Dynasty & Era Timeline"}
            </h1>
            <p className="text-slate-400 text-xs mt-0.5">
              {isHindi ? `${monuments.length} स्मारक · इतिहास में 5,000 वर्ष` : `${monuments.length} monuments · 5,000 years of history`}
            </p>
          </div>
        </div>

        {/* Era filter chips */}
        <div className="max-w-7xl mx-auto px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setSelectedEra(null)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              selectedEra === null
                ? "bg-amber-500 border-amber-400 text-white"
                : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
            }`}
          >
            {isHindi ? "सभी युग" : "All Eras"}
          </button>
          {ERA_GROUPS.filter(e => grouped[e.id]?.length > 0).map(era => (
            <button
              key={era.id}
              onClick={() => setSelectedEra(era.id === selectedEra ? null : era.id)}
              style={{ borderColor: selectedEra === era.id ? era.color : undefined, color: selectedEra === era.id ? era.color : undefined }}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                selectedEra === era.id
                  ? "bg-slate-800"
                  : "border-slate-700 text-slate-400 hover:border-slate-500"
              }`}
            >
              <span>{era.icon}</span>
              {isHindi ? era.labelHi : era.label}
              <span className="bg-slate-700 text-slate-300 rounded-full px-1.5 py-0.5 text-[10px]">
                {grouped[era.id]?.length || 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 py-8" ref={scrollRef}>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-amber-500 to-emerald-500 opacity-40" />

          <div className="space-y-12">
            {filteredEras.map((era, eraIdx) => {
              const eraMonuments = grouped[era.id] || [];
              if (eraMonuments.length === 0) return null;

              return (
                <motion.div
                  key={era.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: eraIdx * 0.07 }}
                >
                  {/* Era header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg border-2 flex-shrink-0"
                      style={{ backgroundColor: `${era.color}22`, borderColor: era.color }}
                    >
                      {era.icon}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold" style={{ color: era.color }}>
                        {isHindi ? era.labelHi : era.label}
                      </h2>
                      <p className="text-slate-500 text-xs">{era.range} · {eraMonuments.length} {isHindi ? "स्मारक" : "monuments"}</p>
                    </div>
                  </div>

                  {/* Monument cards for this era */}
                  <div className="ml-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {eraMonuments.map((monument, mIdx) => (
                      <motion.button
                        key={monument.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: eraIdx * 0.07 + mIdx * 0.03 }}
                        onClick={() => setSelectedMonument(monument)}
                        className={`text-left p-4 rounded-xl border transition-all hover:scale-[1.02] active:scale-[0.99] ${era.bgColor} ${era.borderColor} border-opacity-40 hover:border-opacity-100`}
                      >
                        <div className="flex flex-col gap-1.5 mb-2">
                          <div className="flex items-start justify-between gap-2">
                            <p className="font-semibold text-white text-sm leading-snug flex-1">
                              {isHindi && monument.nameHi ? monument.nameHi : monument.name}
                            </p>
                            {monument.UNESCO && (
                              <span className="text-[10px] text-amber-400 flex-shrink-0">🏆</span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: `${era.color}30`, color: era.color }}
                            >
                              {monument.yearBuilt.length > 18
                                ? monument.yearBuilt.replace(/\s*\([^)]*\)/g, '').substring(0, 18).trim()
                                : monument.yearBuilt}
                            </span>
                            <p className="text-slate-400 text-xs">{monument.city}, {monument.state}</p>
                          </div>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                          {isHindi && monument.descriptionHi ? monument.descriptionHi : monument.description}
                        </p>
                        <div className="mt-2 text-xs" style={{ color: era.color }}>
                          {isHindi && monument.dynastyHi ? monument.dynastyHi : monument.dynasty}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Monument detail modal */}
      <AnimatePresence>
        {selectedMonument && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMonument(null)}
          >
            <motion.div
              className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-amber-900/60 to-orange-900/60 p-5 border-b border-slate-700">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {isHindi && selectedMonument.nameHi ? selectedMonument.nameHi : selectedMonument.name}
                    </h2>
                    <p className="text-amber-300 text-sm">{selectedMonument.city}, {selectedMonument.state}</p>
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <span className="text-xs bg-amber-800/60 text-amber-200 px-2 py-0.5 rounded-full border border-amber-700">
                        📅 {selectedMonument.yearBuilt}
                      </span>
                      <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">
                        {isHindi && selectedMonument.dynastyHi ? selectedMonument.dynastyHi : selectedMonument.dynasty}
                      </span>
                      {selectedMonument.UNESCO && (
                        <span className="text-xs bg-amber-600/30 text-amber-300 px-2 py-0.5 rounded-full border border-amber-600">
                          🏆 UNESCO
                        </span>
                      )}
                    </div>
                  </div>
                  <button onClick={() => setSelectedMonument(null)} className="text-slate-400 hover:text-white p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {isHindi && selectedMonument.descriptionHi ? selectedMonument.descriptionHi : selectedMonument.description}
                </p>

                {selectedMonument.facts && selectedMonument.facts.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                      {isHindi ? "त्वरित तथ्य" : "Quick Facts"}
                    </p>
                    <ul className="space-y-1">
                      {selectedMonument.facts.slice(0, 2).map((fact, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                          <span className="text-amber-500 mt-0.5">•</span>
                          {isHindi && selectedMonument.factsHi?.[i] ? selectedMonument.factsHi[i] : fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => { setSelectedMonument(null); setLocation(`/monument/${selectedMonument.id}`); }}
                  className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-semibold text-sm transition-colors"
                >
                  {isHindi ? "स्मारक खोजें →" : "Explore Monument →"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimelinePage;
