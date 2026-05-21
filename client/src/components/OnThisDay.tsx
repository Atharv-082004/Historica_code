import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { getTodaysEvents } from "../data/onThisDay";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

const OnThisDay = () => {
  const { t } = useTranslation();
  const [dismissed, setDismissed] = useState(false);
  const [, setLocation] = useLocation();
  const events = useMemo(() => getTodaysEvents(), []);
  const event = events[0];

  if (!event || dismissed) return null;

  const today = new Date();
  const locale = i18n.language === "hi" ? "hi-IN" : "en-IN";
  const dateStr = today.toLocaleDateString(locale, { day: "numeric", month: "long" });
  const eventText = i18n.language === "hi" && event.eventHi ? event.eventHi : event.event;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.96 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
        className="absolute bottom-6 left-4 z-[500] w-[min(92vw,360px)] pointer-events-auto"
      >
        <div className="bg-slate-900/95 backdrop-blur-md border border-amber-600/40 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header strip */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">{event.emoji}</span>
              <div>
                <div className="text-white font-semibold text-sm leading-tight">{t("onThisDay.title")}</div>
                <div className="text-amber-100 text-xs">{dateStr}</div>
              </div>
            </div>
            <button
              onClick={() => setDismissed(true)}
              className="text-amber-100 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label={t("onThisDay.dismiss")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-4 py-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 rounded px-2 py-0.5">
                {event.year}
              </span>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed">
              {eventText}
            </p>
          </div>

          {/* Footer */}
          <div className="px-4 pb-3 flex justify-end">
            <button
              onClick={() => {
                setDismissed(true);
                setLocation(`/monument/${event.monumentId}`);
              }}
              className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 transition-colors"
            >
              {t("onThisDay.learnMore")}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OnThisDay;
