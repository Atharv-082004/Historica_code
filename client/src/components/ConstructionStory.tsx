import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getConstructionStory, generateGenericStory } from "../data/constructionStories";
import type { Monument } from "../data/monuments";

interface ConstructionStoryProps {
  monument: Monument;
  onClose: () => void;
}

const ConstructionStory = ({ monument, onClose }: ConstructionStoryProps) => {
  const { i18n } = useTranslation();
  const isHindi = i18n.language === "hi";
  const [activePhase, setActivePhase] = useState(0);

  const story = getConstructionStory(monument.id) ??
    generateGenericStory(monument.id, monument.name, monument.yearBuilt, monument.dynasty);

  const phase = story.phases[activePhase];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-slate-900 border border-amber-800/50 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] flex flex-col"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-950 to-orange-950 border-b border-amber-800/50 p-5 flex-shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">🏗️</span>
                <h2 className="text-xl font-bold text-white">
                  {isHindi ? "निर्माण कहानी" : "Construction Story"}
                </h2>
              </div>
              <p className="text-amber-300 font-semibold text-base">
                {isHindi && monument.nameHi ? monument.nameHi : monument.name}
              </p>
              {story.architectName && (
                <p className="text-slate-400 text-sm mt-1 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  {isHindi ? "वास्तुकार:" : "Architect:"} {isHindi && story.architectNameHi ? story.architectNameHi : story.architectName}
                </p>
              )}
              <p className="text-slate-400 text-sm flex items-center gap-1 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {isHindi ? "कुल अवधि:" : "Total duration:"} {isHindi ? story.totalDurationHi : story.totalDuration}
              </p>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-1 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        {/* Phase steps bar */}
        <div className="flex-shrink-0 bg-slate-950/50 px-5 py-3 border-b border-slate-800 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {story.phases.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  activePhase === idx
                    ? "bg-amber-600 text-white shadow-lg shadow-amber-900/30"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <span>{p.icon}</span>
                <span className="hidden sm:inline">{isHindi ? p.titleHi : p.title}</span>
                <span className="text-[10px] opacity-60">
                  {isHindi ? `चरण ${idx + 1}` : `Phase ${idx + 1}`}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Phase content */}
        <div className="flex-1 overflow-y-auto p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Phase header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-900/40 border border-amber-700/50 flex items-center justify-center text-3xl flex-shrink-0">
                  {phase.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                      {isHindi ? `चरण ${phase.phase}` : `Phase ${phase.phase}`}
                    </span>
                    <span className="text-xs text-slate-500">·</span>
                    <span className="text-xs text-slate-400">{phase.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {isHindi ? phase.titleHi : phase.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="bg-slate-800/50 rounded-xl p-4 mb-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {isHindi ? phase.descriptionHi : phase.description}
                </p>
              </div>

              {/* Material & Workers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {phase.material && (
                  <div className="bg-amber-950/30 border border-amber-900/40 rounded-xl p-3">
                    <p className="text-xs font-semibold text-amber-400 mb-1 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      {isHindi ? "निर्माण सामग्री" : "Building Materials"}
                    </p>
                    <p className="text-slate-300 text-xs">
                      {isHindi && phase.materialHi ? phase.materialHi : phase.material}
                    </p>
                  </div>
                )}
                {phase.workers && (
                  <div className="bg-sky-950/30 border border-sky-900/40 rounded-xl p-3">
                    <p className="text-xs font-semibold text-sky-400 mb-1 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      {isHindi ? "कारीगर" : "Workforce"}
                    </p>
                    <p className="text-slate-300 text-xs">{phase.workers}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer — fun fact + navigation */}
        <div className="flex-shrink-0 border-t border-slate-800">
          {/* Fun fact */}
          <div className="px-5 py-3 bg-amber-950/20 border-b border-slate-800">
            <p className="text-xs font-semibold text-amber-400 mb-1">💡 {isHindi ? "रोचक तथ्य" : "Fun Fact"}</p>
            <p className="text-slate-300 text-xs leading-relaxed">
              {isHindi ? story.funFactHi : story.funFact}
            </p>
          </div>

          {/* Prev / Next */}
          <div className="px-5 py-3 flex items-center justify-between">
            <button
              onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
              disabled={activePhase === 0}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              {isHindi ? "पिछला" : "Previous"}
            </button>

            <div className="flex gap-1.5">
              {story.phases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activePhase ? "bg-amber-500 w-5" : "bg-slate-600 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActivePhase(Math.min(story.phases.length - 1, activePhase + 1))}
              disabled={activePhase === story.phases.length - 1}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-amber-700 text-white hover:bg-amber-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              {isHindi ? "अगला" : "Next"}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConstructionStory;
