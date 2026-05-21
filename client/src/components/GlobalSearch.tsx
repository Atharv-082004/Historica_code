import { useState, useEffect, useRef, useMemo } from "react";
import { useLocation } from "wouter";
import { monuments } from "../data/monuments";
import { useAudio } from "../lib/stores/useAudio";

type ResultKind = "monument" | "fact" | "hotspot" | "quiz" | "era";

interface SearchResult {
  kind: ResultKind;
  title: string;
  subtitle: string;
  path: string;
  monumentId?: string;
  icon: string;
}

const ERA_LABELS: Record<string, string> = {
  ancient: "Ancient era (before 1200 CE)",
  medieval: "Medieval era (1200–1800 CE)",
  modern: "Modern era (after 1800 CE)",
};

const QUIZ_SAMPLES = [
  { prompt: "In which city does the Taj Mahal stand?", monumentId: "taj-mahal" },
  { prompt: "What is the height of the Qutub Minar?", monumentId: "qutub-minar" },
  { prompt: "Which dynasty built the Red Fort?", monumentId: "red-fort" },
  { prompt: "How many windows does Hawa Mahal have?", monumentId: "hawa-mahal" },
  { prompt: "When was the Konark Sun Temple built?", monumentId: "konark-sun-temple" },
  { prompt: "What is the largest monolithic rock excavation in the world?", monumentId: "ajanta-ellora" },
  { prompt: "What does 'Gol Gumbaz' mean?", monumentId: "gol-gumbaz" },
  { prompt: "Which currency note features the Hampi stone chariot?", monumentId: "hampi" },
  { prompt: "How many minarets does Charminar have?", monumentId: "charminar" },
  { prompt: "How many marble petals make up the Lotus Temple?", monumentId: "lotus-temple" },
  { prompt: "What style is the Gateway of India built in?", monumentId: "gateway-of-india" },
  { prompt: "How much gold leaf covers the Golden Temple?", monumentId: "golden-temple" },
];

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Monuments
  monuments.forEach((m) => {
    results.push({
      kind: "monument",
      title: m.name,
      subtitle: `${m.city}, ${m.state} · ${m.dynasty}`,
      path: `/monument/${m.id}`,
      monumentId: m.id,
      icon: "🏛️",
    });

    // Facts
    m.facts.forEach((fact) => {
      results.push({
        kind: "fact",
        title: fact,
        subtitle: m.name,
        path: `/monument/${m.id}`,
        monumentId: m.id,
        icon: "📖",
      });
    });

    // Hotspots
    m.hotspots?.forEach((h) => {
      results.push({
        kind: "hotspot",
        title: h.name,
        subtitle: `${m.name} — ${h.description.slice(0, 60)}…`,
        path: `/monument/${m.id}`,
        monumentId: m.id,
        icon: "📍",
      });
    });

    // Era
    if (m.era) {
      results.push({
        kind: "era",
        title: ERA_LABELS[m.era],
        subtitle: m.name,
        path: `/monument/${m.id}`,
        monumentId: m.id,
        icon: m.era === "ancient" ? "🗿" : m.era === "medieval" ? "⚔️" : "🏗️",
      });
    }
  });

  // Quiz samples
  QUIZ_SAMPLES.forEach((q) => {
    results.push({
      kind: "quiz",
      title: q.prompt,
      subtitle: "Heritage Quiz",
      path: "/quiz",
      icon: "🧠",
    });
  });

  return results;
}

function highlight(text: string, query: string): (string | JSX.Element)[] {
  if (!query) return [text];
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return [text];
  return [
    text.slice(0, idx),
    <mark key="h" className="bg-amber-300/40 text-amber-900 rounded px-0.5">{text.slice(idx, idx + query.length)}</mark>,
    text.slice(idx + query.length),
  ];
}

const KIND_ORDER: ResultKind[] = ["monument", "fact", "hotspot", "quiz", "era"];
const KIND_LABEL: Record<ResultKind, string> = {
  monument: "Monuments",
  fact: "Facts",
  hotspot: "Hotspots",
  quiz: "Quiz Questions",
  era: "Eras",
};

interface Props {
  onClose: () => void;
}

const GlobalSearch = ({ onClose }: Props) => {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [, setLocation] = useLocation();
  const audio = useAudio();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return index.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.subtitle.toLowerCase().includes(q)
    ).slice(0, 30);
  }, [query, index]);

  // Group results
  const grouped = useMemo(() => {
    const map = new Map<ResultKind, SearchResult[]>();
    results.forEach((r) => {
      if (!map.has(r.kind)) map.set(r.kind, []);
      map.get(r.kind)!.push(r);
    });
    return KIND_ORDER.filter((k) => map.has(k)).map((k) => ({
      kind: k,
      label: KIND_LABEL[k],
      items: map.get(k)!,
    }));
  }, [results]);

  // Flat list for keyboard navigation
  const flat = useMemo(() => results, [results]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setCursor(0);
  }, [query]);

  const navigate = (result: SearchResult) => {
    audio.playHit();
    setLocation(result.path);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter" && flat[cursor]) {
      navigate(flat[cursor]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${cursor}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  let flatIdx = 0;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-start justify-center pt-[10vh] px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: "75vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-700">
          <svg className="text-amber-400 shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search monuments, facts, eras, quiz…"
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 text-base outline-none"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-slate-500 hover:text-slate-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          )}
          <kbd className="hidden sm:inline text-xs text-slate-500 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5">Esc</kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="overflow-y-auto flex-1">
          {query.length < 2 ? (
            <div className="px-5 py-10 text-center text-slate-500 text-sm">
              <div className="text-3xl mb-3">🔍</div>
              Start typing to search across all monuments, facts, quiz questions and eras
            </div>
          ) : results.length === 0 ? (
            <div className="px-5 py-10 text-center text-slate-500 text-sm">
              <div className="text-3xl mb-3">🫙</div>
              No results for "<span className="text-slate-300">{query}</span>"
            </div>
          ) : (
            grouped.map((group) => (
              <div key={group.kind}>
                <div className="px-5 pt-4 pb-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {group.label}
                  <span className="ml-2 text-slate-600 normal-case font-normal tracking-normal">
                    {group.items.length} result{group.items.length !== 1 ? "s" : ""}
                  </span>
                </div>
                {group.items.map((result) => {
                  const idx = flatIdx++;
                  const isActive = cursor === idx;
                  return (
                    <button
                      key={`${result.kind}-${result.title}-${result.monumentId}`}
                      data-idx={idx}
                      className={`w-full text-left flex items-start gap-3 px-5 py-3 transition-colors ${
                        isActive ? "bg-amber-500/20 text-slate-100" : "text-slate-300 hover:bg-slate-800"
                      }`}
                      onMouseEnter={() => setCursor(idx)}
                      onClick={() => navigate(result)}
                    >
                      <span className="text-lg shrink-0 mt-0.5">{result.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate leading-snug">
                          {highlight(result.title, query)}
                        </div>
                        <div className="text-xs text-slate-500 truncate mt-0.5">
                          {highlight(result.subtitle, query)}
                        </div>
                      </div>
                      {isActive && (
                        <svg className="shrink-0 text-amber-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer hints */}
        {results.length > 0 && (
          <div className="border-t border-slate-800 px-5 py-2.5 flex items-center gap-4 text-xs text-slate-600">
            <span><kbd className="bg-slate-800 border border-slate-700 rounded px-1">↑↓</kbd> navigate</span>
            <span><kbd className="bg-slate-800 border border-slate-700 rounded px-1">↵</kbd> open</span>
            <span><kbd className="bg-slate-800 border border-slate-700 rounded px-1">Esc</kbd> close</span>
            <span className="ml-auto">{results.length} result{results.length !== 1 ? "s" : ""}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalSearch;
