import { useMemo, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import { Icon } from 'leaflet';
import type { Marker as LeafletMarker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { monuments, Monument } from '../data/monuments';
import { useLocation } from 'wouter';
import { useAudio } from '../lib/stores/useAudio';
import OnThisDay from './OnThisDay';

const TILE_LAYERS = {
  street: {
    label: "Street",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",
  },
  satellite: {
    label: "Satellite",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  },
  terrain: {
    label: "Terrain",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community",
  },
} as const;

type TileKey = keyof typeof TILE_LAYERS;

const TileLayerSwitcher = ({ active }: { active: TileKey }) => {
  const layer = TILE_LAYERS[active];
  return <TileLayer attribution={layer.attribution} url={layer.url} />;
};

const ALL = "All";

const LeafletMap = () => {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const audio = useAudio();
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState<string>(ALL);
  const [eraFilter, setEraFilter] = useState<string>(ALL);
  const [unescoOnly, setUnescoOnly] = useState(false);
  const [tileLayer, setTileLayer] = useState<TileKey>("street");

  const states = useMemo(
    () => [ALL, ...Array.from(new Set(monuments.map(m => m.state))).sort()],
    []
  );
  const eras = useMemo(
    () => [ALL, ...Array.from(new Set(monuments.map(m => m.era).filter(Boolean) as string[])).sort()],
    []
  );

  const filtered: Monument[] = useMemo(() => {
    const q = search.trim().toLowerCase();
    return monuments.filter(m => {
      if (unescoOnly && !m.UNESCO) return false;
      if (stateFilter !== ALL && m.state !== stateFilter) return false;
      if (eraFilter !== ALL && m.era !== eraFilter) return false;
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        m.city.toLowerCase().includes(q) ||
        m.state.toLowerCase().includes(q) ||
        m.dynasty.toLowerCase().includes(q)
      );
    });
  }, [search, stateFilter, eraFilter, unescoOnly]);

  const createCustomIcon = (isUNESCO: boolean = false, hovered: boolean = false) => {
    const size: [number, number] = hovered ? [33, 54] : [25, 41];
    const anchor: [number, number] = hovered ? [16, 54] : [12, 41];
    return new Icon({
      iconUrl: isUNESCO
        ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png'
        : 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: size,
      iconAnchor: anchor,
      popupAnchor: [1, -34],
      shadowSize: [size[1], size[1]],
      className: hovered ? 'historica-marker-hover' : '',
    });
  };

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const markerRefs = useRef<Record<string, LeafletMarker | null>>({});

  const handleMarkerClick = (monumentId: string) => {
    audio.playHit();
    setLocation(`/monument/${monumentId}`);
  };

  const handleMarkerHover = (monumentId: string) => {
    const m = monuments.find(x => x.id === monumentId);
    if (m) {
      // Start downloading the GLB in the background so it's cached when user navigates
      import("@react-three/drei").then(({ useGLTF }) => {
        useGLTF.preload(m.primaryModel);
      });
    }
  };

  return (
    <div className="h-full w-full relative z-10">
      <OnThisDay />
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
        attributionControl={true}
      >
        <TileLayerSwitcher active={tileLayer} />

        {filtered.map(monument => (
          <Marker
            key={monument.id}
            position={[monument.coordinates[1], monument.coordinates[0]]}
            icon={createCustomIcon(monument.UNESCO || false, hoveredId === monument.id)}
            ref={(ref) => { markerRefs.current[monument.id] = ref; }}
            eventHandlers={{
              click: () => handleMarkerClick(monument.id),
              mouseover: (e) => {
                setHoveredId(monument.id);
                handleMarkerHover(monument.id);
                e.target.openPopup();
              },
              mouseout: (e) => {
                setHoveredId(prev => (prev === monument.id ? null : prev));
                e.target.closePopup();
              },
            }}
          >
            <Popup closeButton={false} autoPan={false}>
              <div className="text-center">
                <h3 className="font-bold text-orange-800">{monument.name}</h3>
                <p className="text-sm text-gray-600">{monument.city}, {monument.state}</p>
                <p className="text-xs mt-1 text-gray-500">{t("map.builtLabel")} {monument.yearBuilt}</p>
                {monument.UNESCO && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">
                    {t("monument.unesco")}
                  </span>
                )}
                <p className="text-[10px] mt-1 text-orange-600 italic">{t("map.clickToExplore")}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Search & Filter overlay */}
      <div className="absolute top-4 left-4 z-[1000] bg-white/95 backdrop-blur-md p-3 rounded-lg shadow-lg border border-orange-200 w-[18rem] max-w-[calc(100vw-2rem)]">
        <h3 className="font-semibold text-orange-800 text-sm mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          {t("map.searchFilter")}
        </h3>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={t("map.searchByName")}
          className="w-full px-2 py-1.5 text-sm border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <select
            value={stateFilter}
            onChange={e => setStateFilter(e.target.value)}
            className="text-xs px-2 py-1.5 border border-amber-200 rounded bg-white"
          >
            {states.map(s => <option key={s} value={s}>{s === ALL ? t("map.allStates") : s}</option>)}
          </select>
          <select
            value={eraFilter}
            onChange={e => setEraFilter(e.target.value)}
            className="text-xs px-2 py-1.5 border border-amber-200 rounded bg-white capitalize"
          >
            {eras.map(e => <option key={e} value={e}>{e === ALL ? t("map.allEras") : e}</option>)}
          </select>
        </div>
        <label className="flex items-center mt-2 text-xs text-orange-800 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={unescoOnly}
            onChange={e => setUnescoOnly(e.target.checked)}
            className="mr-1.5 accent-amber-500"
          />
          {t("map.unescoOnly")}
        </label>
        <p className="text-xs text-amber-700 mt-2">
          {filtered.length} {t("map.of")} {monuments.length} {t("map.monumentsCount")}
        </p>
        <div className="flex gap-2 mt-3 pt-2 border-t border-amber-100">
          <button
            onClick={() => setLocation("/timeline")}
            className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-amber-700 text-white rounded text-xs font-semibold hover:bg-amber-800 transition-colors"
          >
            <span>📜</span> {t("nav.timeline")}
          </button>
          <button
            onClick={() => setLocation("/festivals")}
            className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-pink-600 text-white rounded text-xs font-semibold hover:bg-pink-700 transition-colors"
          >
            <span>🎊</span> {t("nav.festivals")}
          </button>
        </div>
      </div>

      {/* Map layer switcher */}
      <div className="absolute bottom-8 right-4 z-[1000] flex flex-col gap-1">
        {(Object.keys(TILE_LAYERS) as TileKey[]).map(key => (
          <button
            key={key}
            onClick={() => setTileLayer(key)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md shadow border transition-all ${
              tileLayer === key
                ? "bg-amber-500 text-white border-amber-600"
                : "bg-white/95 text-orange-800 border-orange-200 hover:bg-amber-50"
            }`}
          >
            {key === "street" ? "🗺 Street" : key === "satellite" ? "🛰 Satellite" : "🏔 Terrain"}
          </button>
        ))}
      </div>

      {/* Information overlay — moved to left to avoid overlap with layer switcher */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow border border-orange-200">
        <p className="text-[10px] text-orange-700/80">
          {t("map.gold")} · {t("map.clickToExplore")}
        </p>
      </div>

    </div>
  );
};

export default LeafletMap;
