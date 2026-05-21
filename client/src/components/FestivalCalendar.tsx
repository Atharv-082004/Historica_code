import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FESTIVAL_EVENTS, MONTH_NAMES, MONTH_NAMES_HI, getFestivalsForMonth, type FestivalEvent } from "../data/festivals";
import { monuments } from "../data/monuments";

const TYPE_LABELS: Record<string, { en: string; hi: string; color: string }> = {
  religious: { en: "Religious", hi: "धार्मिक", color: "text-amber-400 bg-amber-400/10 border-amber-400/30" },
  cultural:  { en: "Cultural",  hi: "सांस्कृतिक", color: "text-pink-400 bg-pink-400/10 border-pink-400/30" },
  historical:{ en: "Historical",hi: "ऐतिहासिक", color: "text-sky-400 bg-sky-400/10 border-sky-400/30" },
  seasonal:  { en: "Seasonal",  hi: "मौसमी", color: "text-green-400 bg-green-400/10 border-green-400/30" },
};

const FestivalCalendar = () => {
  const { i18n } = useTranslation();
  const [, setLocation] = useLocation();
  const isHindi = i18n.language === "hi";

  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedFestival, setSelectedFestival] = useState<FestivalEvent | null>(null);
  const [filterType, setFilterType] = useState<string>("all");

  const monthFestivals = getFestivalsForMonth(selectedMonth).filter(
    f => filterType === "all" || f.type === filterType
  );

  const allFestivalsFiltered = FESTIVAL_EVENTS.filter(
    f => filterType === "all" || f.type === filterType
  );

  const getLinkedMonuments = (event: FestivalEvent) =>
    monuments.filter(m => event.monumentIds.includes(m.id));

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
            {isHindi ? "वापस" : "Back"}
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl">🎊</span>
              {isHindi ? "उत्सव कैलेंडर" : "Festival Calendar"}
            </h1>
            <p className="text-slate-400 text-xs mt-0.5">
              {isHindi ? `भारत के ${FESTIVAL_EVENTS.length} प्रमुख उत्सव और उनके स्मारक` : `${FESTIVAL_EVENTS.length} major Indian festivals & their monuments`}
            </p>
          </div>
        </div>

        {/* Filter by type */}
        <div className="max-w-7xl mx-auto px-4 pb-3 flex gap-2 overflow-x-auto">
          {["all", "religious", "cultural", "historical"].map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                filterType === type
                  ? "bg-amber-500 border-amber-400 text-white"
                  : "border-slate-700 text-slate-400 hover:border-slate-500"
              }`}
            >
              {type === "all"
                ? (isHindi ? "सभी" : "All")
                : (isHindi ? TYPE_LABELS[type]?.hi : TYPE_LABELS[type]?.en)}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Month selector (left column) */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            {isHindi ? "महीना चुनें" : "Select Month"}
          </p>
          {MONTH_NAMES.map((month, idx) => {
            const monthNum = idx + 1;
            const count = getFestivalsForMonth(monthNum).filter(
              f => filterType === "all" || f.type === filterType
            ).length;
            const isActive = selectedMonth === monthNum;
            return (
              <button
                key={monthNum}
                onClick={() => setSelectedMonth(monthNum)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all text-sm ${
                  isActive
                    ? "bg-amber-600 text-white font-semibold shadow-lg"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span>{isHindi ? MONTH_NAMES_HI[idx] : month}</span>
                {count > 0 && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-amber-700 text-amber-100" : "bg-slate-700 text-slate-300"}`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Festivals for selected month */}
        <div>
          <h2 className="text-lg font-bold text-white mb-1">
            {isHindi ? MONTH_NAMES_HI[selectedMonth - 1] : MONTH_NAMES[selectedMonth - 1]}
          </h2>
          <p className="text-slate-500 text-sm mb-5">
            {monthFestivals.length === 0
              ? (isHindi ? "इस महीने कोई उत्सव नहीं" : "No festivals this month")
              : `${monthFestivals.length} ${isHindi ? "उत्सव" : "festival(s)"}`}
          </p>

          {monthFestivals.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center text-slate-500">
              <span className="text-5xl mb-4">🗓️</span>
              <p>{isHindi ? "इस महीने कोई उत्सव नहीं मिला" : "No festivals found for this month"}</p>
              <p className="text-sm mt-1">{isHindi ? "दूसरा महीना चुनें या फ़िल्टर बदलें" : "Try another month or change the filter"}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {monthFestivals.map((festival, idx) => {
                const linkedMons = getLinkedMonuments(festival);
                const typeStyle = TYPE_LABELS[festival.type]?.color || "text-slate-400 bg-slate-400/10 border-slate-400/30";
                return (
                  <motion.div
                    key={festival.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all cursor-pointer"
                    onClick={() => setSelectedFestival(festival)}
                  >
                    {/* Festival accent bar */}
                    <div className="h-1 w-full" style={{ backgroundColor: festival.color }} />

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                            style={{ backgroundColor: `${festival.color}20` }}
                          >
                            {festival.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-base leading-tight">
                              {isHindi ? festival.nameHi : festival.name}
                            </h3>
                            <p className="text-slate-500 text-xs mt-0.5">
                              {festival.day
                                ? `${isHindi ? MONTH_NAMES_HI[festival.month - 1] : MONTH_NAMES[festival.month - 1]} ${festival.day}${festival.endDay ? `–${festival.endDay}` : ""}`
                                : (isHindi ? MONTH_NAMES_HI[festival.month - 1] : MONTH_NAMES[festival.month - 1])}
                            </p>
                          </div>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-1 rounded-full border flex-shrink-0 ${typeStyle}`}>
                          {isHindi ? TYPE_LABELS[festival.type]?.hi : TYPE_LABELS[festival.type]?.en}
                        </span>
                      </div>

                      <p className="text-slate-400 text-sm mt-3 leading-relaxed line-clamp-2">
                        {isHindi ? festival.descriptionHi : festival.description}
                      </p>

                      {/* Linked monuments */}
                      {linkedMons.length > 0 && (
                        <div className="mt-4">
                          <p className="text-xs text-slate-500 mb-2">
                            {isHindi ? "संबंधित स्मारक:" : "At these monuments:"}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {linkedMons.slice(0, 5).map(m => (
                              <button
                                key={m.id}
                                onClick={e => { e.stopPropagation(); setLocation(`/monument/${m.id}`); }}
                                className="text-xs px-2.5 py-1 rounded-full border border-slate-700 text-slate-300 hover:border-amber-500 hover:text-amber-300 transition-colors bg-slate-800/60"
                              >
                                {isHindi && m.nameHi ? m.nameHi : m.name}
                              </button>
                            ))}
                            {linkedMons.length > 5 && (
                              <span className="text-xs px-2 py-1 text-slate-500">
                                +{linkedMons.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Festival detail modal */}
      <AnimatePresence>
        {selectedFestival && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFestival(null)}
          >
            <motion.div
              className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden max-h-[85vh] flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="h-1.5 w-full flex-shrink-0" style={{ backgroundColor: selectedFestival.color }} />
              <div className="p-5 border-b border-slate-800 flex-shrink-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{selectedFestival.icon}</div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {isHindi ? selectedFestival.nameHi : selectedFestival.name}
                      </h2>
                      <p className="text-slate-400 text-sm">
                        {selectedFestival.day
                          ? `${isHindi ? MONTH_NAMES_HI[selectedFestival.month - 1] : MONTH_NAMES[selectedFestival.month - 1]} ${selectedFestival.day}${selectedFestival.endDay ? `–${selectedFestival.endDay}` : ""}`
                          : (isHindi ? MONTH_NAMES_HI[selectedFestival.month - 1] : MONTH_NAMES[selectedFestival.month - 1])}
                      </p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedFestival(null)} className="text-slate-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  </button>
                </div>
              </div>

              <div className="p-5 overflow-y-auto flex-1">
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {isHindi ? selectedFestival.descriptionHi : selectedFestival.description}
                </p>

                <div>
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">
                    {isHindi ? "इन स्मारकों पर मनाया जाता है" : "Celebrated at these monuments"}
                  </p>
                  <div className="space-y-2">
                    {getLinkedMonuments(selectedFestival).map(m => (
                      <button
                        key={m.id}
                        onClick={() => { setSelectedFestival(null); setLocation(`/monument/${m.id}`); }}
                        className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-amber-500 transition-all group text-left"
                      >
                        <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium leading-tight truncate">
                            {isHindi && m.nameHi ? m.nameHi : m.name}
                          </p>
                          <p className="text-slate-500 text-xs">{m.city}, {m.state}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 group-hover:text-amber-400 transition-colors flex-shrink-0"><path d="m9 18 6-6-6-6"/></svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FestivalCalendar;
