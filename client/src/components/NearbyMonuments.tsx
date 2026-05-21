import { useLocation } from "wouter";
import { monuments, type Monument } from "../data/monuments";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

function haversineKm(
  lon1: number, lat1: number,
  lon2: number, lat2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

interface Props {
  current: Monument;
}

const NearbyMonuments = ({ current }: Props) => {
  const [, setLocation] = useLocation();
  const { t } = useTranslation();
  const isHindi = i18n.language === "hi";

  const nearby = monuments
    .filter(m => m.id !== current.id)
    .map(m => ({
      ...m,
      distanceKm: haversineKm(
        current.coordinates[0], current.coordinates[1],
        m.coordinates[0], m.coordinates[1]
      ),
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, 3);

  const handleCluster = () => {
    const ids = [current.id, ...nearby.map(m => m.id)].join(",");
    setLocation(`/?cluster=${ids}`);
  };

  return (
    <div className="mt-4 bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-amber-900">{t("nearby.title")}</h3>
        </div>
        <button
          onClick={handleCluster}
          className="text-xs bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-lg transition-colors font-medium flex items-center gap-1.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 11 22 2 13 21 11 13 3 11"/>
          </svg>
          {t("nearby.planTrip")}
        </button>
      </div>

      <div className="space-y-3">
        {nearby.map((m, i) => (
          <button
            key={m.id}
            onClick={() => setLocation(`/monument/${m.id}`)}
            className="w-full text-left bg-white/70 hover:bg-white border border-amber-100 hover:border-amber-300 rounded-xl p-3 flex items-center gap-3 transition-all duration-200 group shadow-sm"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow">
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-amber-900 group-hover:text-amber-700 truncate">
                {isHindi && m.nameHi ? m.nameHi : m.name}
              </p>
              <p className="text-xs text-orange-600">{m.city}, {m.state}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-semibold text-amber-700">
                {Math.round(m.distanceKm).toLocaleString()} km
              </p>
              <p className="text-xs text-orange-500">{t("nearby.away")}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 group-hover:text-amber-600 flex-shrink-0 transition-colors">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NearbyMonuments;
