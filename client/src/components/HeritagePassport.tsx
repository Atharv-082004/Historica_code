import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { usePassport, REGIONS, MONUMENT_NAMES } from "../lib/stores/usePassport";
import { useAudio } from "../lib/stores/useAudio";

const STAMP_ICONS: Record<string, string> = {
  "taj-mahal": "🕌",
  "qutub-minar": "🗼",
  "red-fort": "🏰",
  "hawa-mahal": "🏯",
  "golden-temple": "✨",
  "fatehpur-sikri": "🕌",
  "amber-fort": "🏯",
  "hampi": "🏛️",
  "gol-gumbaz": "🕌",
  "charminar": "🕌",
  "ajanta-ellora": "🏛️",
  "mysore-palace": "👑",
  "meenakshi-temple": "🛕",
  "mahabalipuram": "🌊",
  "khajuraho-temples": "⛩️",
  "sanchi-stupa": "☸️",
  "konark-sun-temple": "☀️",
  "victoria-memorial": "🏛️",
  "gateway-of-india": "🌊",
  "lotus-temple": "🌸",
  "rani-ki-vav": "💧",
  "humayuns-tomb": "🕌",
  "agra-fort": "🏰",
  "brihadeeswara-temple": "🛕",
  "mahabodhi-temple": "☸️",
  "elephanta-caves": "🐘",
  "jantar-mantar": "🔭",
  "nalanda-ruins": "📚",
  "chittor-fort": "⚔️",
  "kailasa-temple": "⛰️",
  "mehrangarh-fort": "🦁",
  "jaisalmer-fort": "🏜️",
  "kumbhalgarh-fort": "🧱",
  "junagarh-fort": "🏯",
  "udaipur-city-palace": "🪷",
  "ranakpur-temple": "🔮",
  "dilwara-temples": "🤍",
  "ajmer-dargah": "🌹",
  "purana-qila": "🪆",
  "safdarjung-tomb": "🌿",
  "jama-masjid": "🕋",
  "itmad-ud-daulah": "💎",
  "akbars-tomb": "👑",
  "leh-palace": "🏔️",
  "hemis-monastery": "🧘",
  "golconda-fort": "💍",
  "ramappa-temple": "🌊",
  "warangal-fort": "🗿",
  "chowmahalla-palace": "🪩",
  "bidar-fort": "🏺",
  "hoysaleswara-temple": "🌀",
  "pattadakal": "🗽",
  "badami-caves": "🪨",
  "gomateshwara": "🧘",
  "lepakshi-temple": "🦅",
  "tirupati-temple": "⭐",
  "rameswaram-temple": "🌉",
  "gangaikonda-cholapuram": "🌞",
  "basilica-bom-jesus": "✝️",
  "daulatabad-fort": "🌋",
  "aga-khan-palace": "🕊️",
  "shaniwar-wada": "🔥",
  "raigad-fort": "⚡",
  "gwalior-fort": "🎵",
  "orchha-fort": "🌺",
  "bhimbetka-caves": "🎨",
  "mandu-jahaz-mahal": "⛵",
  "lingaraja-temple": "🔱",
  "jagannath-temple": "🎡",
  "udayagiri-khandagiri": "🦚",
  "sarnath": "🦌",
  "vaishali": "🏛️",
  "kushinagar": "🌙",
  "vikramshila": "📖",
  "kamakhya-temple": "🌺",
  "tawang-monastery": "🏔️",
  "howrah-bridge": "🌉",
  "modhera-sun-temple": "☀️",
  "dholavira": "🏺",
  "somnath-temple": "🌊",
};

const ALL_MONUMENT_IDS = Object.keys(MONUMENT_NAMES);

const REGION_LABEL_KEYS: Record<string, string> = {
  north: "passport.northIndia",
  "south-deccan": "passport.southDeccan",
  central: "passport.centralIndia",
  east: "passport.eastIndia",
  west: "passport.westIndia",
};

const HeritagePassport = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const { isVisited, getRegionProgress, totalVisited, earnedBadges } = usePassport();
  const audio = useAudio();
  const badges = earnedBadges();
  const visited = totalVisited();
  const total = ALL_MONUMENT_IDS.length;

  const navigateTo = (id: string) => {
    audio.playHit();
    onClose();
    setLocation(`/monument/${id}`);
  };

  return (
    <div
      className="fixed inset-0 z-[990] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden rounded-2xl shadow-2xl"
        style={{ background: "linear-gradient(135deg, #1a0a00 0%, #2d1500 40%, #1a0a1a 100%)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Passport cover header */}
        <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-orange-800 px-6 py-5 border-b border-amber-600/40">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl">🇮🇳</span>
                <div>
                  <h2 className="text-white font-bold text-lg leading-tight">{t("passport.title")}</h2>
                  <p className="text-amber-200 text-xs">{t("passport.subtitle")}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">{visited}<span className="text-amber-300 text-lg">/{total}</span></div>
              <div className="text-amber-200 text-xs">{t("passport.visited")}</div>
            </div>
          </div>

          {/* Global progress bar */}
          <div className="mt-3 bg-amber-900/50 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(visited / total) * 100}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 p-5 space-y-6">
          {/* Badges */}
          {badges.length > 0 && (
            <div>
              <h3 className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <span>🏅</span> {t("passport.badges")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {REGIONS.filter(r => badges.includes(r.id)).map(region => (
                  <motion.div
                    key={region.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`bg-gradient-to-br ${region.badgeColor} text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg`}
                  >
                    <span className="text-xl">{region.emoji}</span>
                    <div>
                      <div className="font-bold text-sm">{region.label}</div>
                      <div className="text-xs opacity-80">{t("passport.complete")}</div>
                    </div>
                    <span className="text-xl ml-1">⭐</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Regions */}
          {REGIONS.map(region => {
            const progress = getRegionProgress(region);
            const pct = (progress.visited / progress.total) * 100;
            return (
              <div key={region.id}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-amber-300 font-semibold text-sm flex items-center gap-2">
                    <span>{region.emoji}</span> {t(REGION_LABEL_KEYS[region.id] || region.id)}
                    {progress.complete && <span className="text-yellow-400 text-base">⭐</span>}
                  </h3>
                  <span className="text-amber-500 text-xs">{progress.visited}/{progress.total}</span>
                </div>
                <div className="bg-amber-900/30 rounded-full h-1.5 mb-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${region.badgeColor} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {region.monumentIds.map(id => {
                    const visited = isVisited(id);
                    return (
                      <button
                        key={id}
                        onClick={() => navigateTo(id)}
                        className={`flex flex-col items-center gap-1 p-2 rounded-xl border transition-all ${
                          visited
                            ? "border-amber-500/50 bg-amber-900/40 hover:bg-amber-800/50"
                            : "border-slate-700/50 bg-slate-900/40 opacity-50 hover:opacity-70"
                        }`}
                      >
                        <div className={`text-2xl ${visited ? "" : "grayscale"}`}>
                          {STAMP_ICONS[id]}
                        </div>
                        <div className={`text-[10px] text-center leading-tight font-medium ${visited ? "text-amber-300" : "text-slate-500"}`}>
                          {MONUMENT_NAMES[id]}
                        </div>
                        {visited ? (
                          <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5"/>
                            </svg>
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-slate-600" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-amber-800/40 px-6 py-4 flex items-center justify-between">
          <p className="text-amber-600 text-xs">
            {t("passport.collectHint")}
          </p>
          <button
            onClick={onClose}
            className="text-sm text-amber-300 hover:text-amber-100 border border-amber-700 hover:border-amber-500 px-4 py-1.5 rounded-lg transition-colors"
          >
            {t("common.close")}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeritagePassport;
