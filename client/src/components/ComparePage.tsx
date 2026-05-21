import { Suspense, useState } from "react";
import { useLocation } from "wouter";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import { monuments } from "../data/monuments";
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
  value, onChange, exclude, label,
}: {
  value: string; onChange: (id: string) => void; exclude?: string; label: string;
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-amber-800">{label}</label>
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="bg-white border border-amber-200 rounded-md px-3 py-2 text-sm text-orange-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
    >
      {monuments.filter(m => m.id !== exclude).map(m => (
        <option key={m.id} value={m.id}>{m.name} — {m.city}</option>
      ))}
    </select>
  </div>
);

const ERA_COLOR: Record<string, string> = {
  ancient: "bg-amber-100 text-amber-800 border-amber-300",
  medieval: "bg-orange-100 text-orange-800 border-orange-300",
  modern: "bg-blue-100 text-blue-800 border-blue-300",
};

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-2 py-2 border-b border-amber-50 last:border-0">
    <span className="text-amber-500 mt-0.5 shrink-0">{icon}</span>
    <div className="min-w-0">
      <div className="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">{label}</div>
      <div className="text-xs text-orange-900 leading-snug">{value}</div>
    </div>
  </div>
);

const Side = ({ id }: { id: string }) => {
  const m = monuments.find(x => x.id === id);
  const [showAllFacts, setShowAllFacts] = useState(false);
  if (!m) return null;

  const visibleFacts = showAllFacts ? m.facts : m.facts.slice(0, 3);

  return (
    <Card className="border-amber-200 shadow-lg bg-white/95 backdrop-blur-md overflow-hidden flex flex-col h-full">
      {/* 3D Model */}
      <div className="h-52 bg-gradient-to-br from-amber-100/60 to-orange-100/60 shrink-0">
        <ScenePreview url={m.primaryModel} />
      </div>

      <CardContent className="p-0 overflow-y-auto flex-1 flex flex-col">
        {/* Header */}
        <div className="px-4 pt-3 pb-2 border-b border-amber-100">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-amber-900 leading-tight">{m.name}</h3>
              <p className="text-xs text-orange-600 flex items-center gap-1 mt-0.5">
                <MapPin className="h-3 w-3" /> {m.city}, {m.state}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              {m.UNESCO && (
                <Badge className="bg-amber-500 text-white text-[10px] px-2 py-0">UNESCO</Badge>
              )}
              {m.era && (
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border capitalize ${ERA_COLOR[m.era] ?? ""}`}>
                  {m.era}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Key Details Grid */}
        <div className="grid grid-cols-2 gap-px bg-amber-100 border-b border-amber-100">
          {[
            { icon: <Calendar className="h-3.5 w-3.5" />, label: "Built", value: m.yearBuilt },
            { icon: <Crown className="h-3.5 w-3.5" />, label: "Dynasty", value: m.dynasty },
            { icon: <Clock className="h-3.5 w-3.5" />, label: "Visiting Hours", value: m.visitingHours },
            { icon: <Ticket className="h-3.5 w-3.5" />, label: "Entry Fee", value: m.entryFee ?? "Free" },
          ].map(({ icon, label, value }) => (
            <div key={label} className="bg-white px-3 py-2">
              <div className="flex items-center gap-1 text-amber-500 mb-0.5">{icon}<span className="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">{label}</span></div>
              <div className="text-xs text-orange-900 leading-snug">{value}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="px-4 py-3 border-b border-amber-100">
          <div className="flex items-center gap-1 text-amber-600 mb-1">
            <Globe className="h-3.5 w-3.5" />
            <span className="text-[10px] font-semibold uppercase tracking-wide">About</span>
          </div>
          <p className="text-xs text-orange-900 leading-relaxed">{m.description}</p>
        </div>

        {/* Key Facts */}
        <div className="px-4 py-3 border-b border-amber-100">
          <div className="flex items-center gap-1 text-amber-600 mb-2">
            <Star className="h-3.5 w-3.5" />
            <span className="text-[10px] font-semibold uppercase tracking-wide">Key Facts</span>
          </div>
          <ul className="space-y-1.5">
            {visibleFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-orange-900">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                {fact}
              </li>
            ))}
          </ul>
          {m.facts.length > 3 && (
            <button
              onClick={() => setShowAllFacts(v => !v)}
              className="mt-2 flex items-center gap-1 text-[11px] text-amber-600 hover:text-amber-800 font-medium"
            >
              {showAllFacts ? <><ChevronUp className="h-3 w-3" /> Show less</> : <><ChevronDown className="h-3 w-3" /> {m.facts.length - 3} more facts</>}
            </button>
          )}
        </div>

        {/* Hotspots */}
        {m.hotspots && m.hotspots.length > 0 && (
          <div className="px-4 py-3">
            <div className="flex items-center gap-1 text-amber-600 mb-2">
              <Landmark className="h-3.5 w-3.5" />
              <span className="text-[10px] font-semibold uppercase tracking-wide">Notable Features</span>
            </div>
            <div className="space-y-2">
              {m.hotspots.map((h, i) => (
                <div key={i} className="bg-amber-50 border border-amber-100 rounded-md px-2.5 py-1.5">
                  <div className="text-xs font-semibold text-amber-800">{h.name}</div>
                  <div className="text-[11px] text-orange-700 leading-snug mt-0.5">{h.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ComparePage = () => {
  const [, setLocation] = useLocation();
  const [a, setA] = useState(monuments[0].id);
  const [b, setB] = useState(monuments[1].id);
  const mA = monuments.find(x => x.id === a);
  const mB = monuments.find(x => x.id === b);

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">
            Compare Monuments
          </h1>
          <p className="text-sm text-orange-700">Pick any two monuments to compare side-by-side.</p>
        </div>
        <div className="flex gap-3 items-end flex-wrap">
          <MonumentPicker label="Left" value={a} onChange={setA} exclude={b} />
          <MonumentPicker label="Right" value={b} onChange={setB} exclude={a} />
          <Button variant="outline" onClick={() => setLocation("/")}>Back to Map</Button>
        </div>
      </div>

      {/* Quick comparison bar */}
      {mA && mB && (
        <div className="bg-white/80 border border-amber-200 rounded-lg px-4 py-2 mb-3 grid grid-cols-3 text-center text-xs gap-2">
          <div className="font-semibold text-amber-800 truncate">{mA.name}</div>
          <div className="text-amber-500 font-bold">VS</div>
          <div className="font-semibold text-amber-800 truncate">{mB.name}</div>

          <div className="text-orange-700">{mA.yearBuilt}</div>
          <div className="text-amber-400 text-[10px] uppercase tracking-wide">Year Built</div>
          <div className="text-orange-700">{mB.yearBuilt}</div>

          <div className="text-orange-700">{mA.state}</div>
          <div className="text-amber-400 text-[10px] uppercase tracking-wide">State</div>
          <div className="text-orange-700">{mB.state}</div>

          <div className="text-orange-700">{mA.UNESCO ? "✅ Yes" : "❌ No"}</div>
          <div className="text-amber-400 text-[10px] uppercase tracking-wide">UNESCO</div>
          <div className="text-orange-700">{mB.UNESCO ? "✅ Yes" : "❌ No"}</div>

          <div className="text-orange-700 capitalize">{mA.era ?? "—"}</div>
          <div className="text-amber-400 text-[10px] uppercase tracking-wide">Era</div>
          <div className="text-orange-700 capitalize">{mB.era ?? "—"}</div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
        <Side id={a} />
        <Side id={b} />
      </div>
    </div>
  );
};

export default ComparePage;
