import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useAudio } from "../lib/stores/useAudio";
import { useAccessibility } from "../lib/stores/useAccessibility";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";
import GlobalSearch from "./GlobalSearch";
import HeritagePassport from "./HeritagePassport";

const Navigation = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useLocation();
  const audio = useAudio();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [passportOpen, setPassportOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const toggleMute = () => audio.toggleMute();
  const { highContrast, largeText, textOnly3D, toggleHighContrast, toggleLargeText, toggleTextOnly3D } = useAccessibility();
  const [accessOpen, setAccessOpen] = useState(false);

  const navigateTo = (path: string) => {
    if (path !== location) { audio.playHit(); setLocation(path); }
    setIsOpen(false);
  };

  // ⌘K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setSearchOpen(true); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const currentLang = i18n.language;
  const switchLang = (lang: string) => { i18n.changeLanguage(lang); setLangOpen(false); };

  const navItems = [
    { label: t("nav.map"), path: "/", icon: "🗺️" },
    { label: t("nav.timeline"), path: "/timeline", icon: "📜" },
    { label: t("nav.festivals"), path: "/festivals", icon: "🎊" },
    { label: t("nav.compare"), path: "/compare", icon: "⚖️" },
    { label: t("nav.quiz"), path: "/quiz", icon: "🧠" },
  ];

  return (
    <>
      {searchOpen && <GlobalSearch onClose={() => setSearchOpen(false)} />}
      {passportOpen && <HeritagePassport onClose={() => setPassportOpen(false)} />}

      <motion.div
        className="fixed top-4 right-4 z-50 flex items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Search */}
        <Button variant="outline" onClick={() => setSearchOpen(true)}
          className="bg-slate-900/90 backdrop-blur-md border-slate-700 text-white hover:bg-slate-800 flex items-center gap-2 px-3 h-9 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="hidden sm:inline">{t("nav.search")}</span>
          <kbd className="hidden md:inline text-xs bg-slate-700 border border-slate-600 rounded px-1 ml-1">⌘K</kbd>
        </Button>

        {/* Accessibility toggle */}
        <div className="relative">
          <Button variant="outline" size="icon" onClick={() => setAccessOpen(v => !v)}
            className="bg-slate-900/90 backdrop-blur-md border-slate-700 text-white hover:bg-slate-800"
            title={t("accessibility.title")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
            </svg>
          </Button>
          {accessOpen && (
            <div className="absolute right-0 top-11 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 p-3 min-w-[200px]" onClick={e => e.stopPropagation()}>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2 px-1">{t("accessibility.title")}</p>
              {[
                { label: t("accessibility.highContrast"), active: highContrast, toggle: toggleHighContrast },
                { label: t("accessibility.largeText"), active: largeText, toggle: toggleLargeText },
                { label: t("accessibility.textOnly"), active: textOnly3D, toggle: toggleTextOnly3D },
              ].map(({ label, active, toggle }) => (
                <button key={label} onClick={toggle}
                  className="w-full flex items-center justify-between px-2 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm">
                  <span className="text-slate-200">{label}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${active ? "bg-amber-500 text-white" : "bg-slate-700 text-slate-400"}`}>
                    {active ? t("accessibility.on") : t("accessibility.off")}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Language switcher */}
        <div className="relative">
          <Button variant="outline" size="icon" onClick={() => setLangOpen(v => !v)}
            className="bg-slate-900/90 backdrop-blur-md border-slate-700 text-white hover:bg-slate-800 text-xs font-bold">
            {currentLang === "hi" ? "हि" : "EN"}
          </Button>
          {langOpen && (
            <div className="absolute right-0 top-11 bg-slate-900 border border-slate-700 rounded-lg shadow-lg overflow-hidden z-50 min-w-[100px]">
              {[{ code: "en", label: "English" }, { code: "hi", label: "हिंदी" }].map(l => (
                <button key={l.code} onClick={() => switchLang(l.code)}
                  className={cn("w-full text-left px-3 py-2 text-sm text-slate-100 hover:bg-slate-700 transition-colors", currentLang === l.code && "font-semibold bg-slate-700")}>
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Menu */}
        <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)} className="bg-slate-900/90 backdrop-blur-md border-slate-700 text-white hover:bg-slate-800">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </Button>
      </motion.div>

      {isOpen && (
        <motion.div className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setIsOpen(false)}>
          <motion.div className="bg-slate-900/95 text-slate-100 border border-slate-700 rounded-2xl p-6 w-[90%] max-w-md shadow-2xl"
            initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-1"><span className="text-2xl">🏛️</span><h2 className="text-2xl font-bold">Historica</h2></div>
            <p className="mb-5 text-slate-400 text-sm">{t("nav.menuDesc")}</p>

            {/* Search shortcut */}
            <button onClick={() => { setIsOpen(false); setSearchOpen(true); }}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm mb-4 transition-colors border border-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              {t("nav.search")} — {t("nav.searchHint")}
              <kbd className="ml-auto text-xs bg-slate-900 border border-slate-600 rounded px-1.5 py-0.5">⌘K</kbd>
            </button>

            <div className="space-y-2">
              {navItems.map(item => (
                <Button key={item.path} variant={location === item.path ? "default" : "ghost"}
                  className={cn("w-full justify-start", location === item.path ? "bg-amber-600 hover:bg-amber-500 text-white" : "text-slate-100 hover:bg-slate-800")}
                  onClick={() => navigateTo(item.path)}>
                  <span className="mr-3 text-base">{item.icon}</span>{item.label}
                </Button>
              ))}
              <Button variant="ghost" className="w-full justify-start text-slate-100 hover:bg-slate-800" onClick={() => { setIsOpen(false); setPassportOpen(true); }}>
                <span className="mr-3 text-base">🗺️</span>{t("nav.passport")}
              </Button>
            </div>

            {/* Language switcher in menu */}
            <div className="mt-4 pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-500 mb-2">{t("nav.language")}</p>
              <div className="flex gap-2">
                {[{ code: "en", label: "English" }, { code: "hi", label: "हिंदी" }].map(l => (
                  <button key={l.code} onClick={() => switchLang(l.code)}
                    className={cn("flex-1 py-1.5 rounded-lg text-sm border transition-colors", currentLang === l.code ? "bg-amber-600 border-amber-500 text-white font-semibold" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700")}>
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-700 flex justify-between">
              <Button variant="outline" className="border-slate-600 text-slate-100 hover:bg-slate-800" onClick={() => setIsOpen(false)}>{t("nav.close")}</Button>
              <Button variant="outline" className="border-slate-600 text-slate-100 hover:bg-slate-800" onClick={toggleMute}>{audio.isMuted ? t("nav.unmute") : t("nav.mute")}</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
