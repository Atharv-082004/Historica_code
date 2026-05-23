import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle2, XCircle, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { QUESTIONS_EN, QUESTIONS_HI, TYPE_LABELS_HI, QuizQuestion } from "../data/quizQuestions";

interface Question {
  type: "city" | "year" | "dynasty" | "fact" | "entry" | "material" | "identify" | "unesco" | "height" | "feature";
  monumentId: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  icon: string;
}

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const buildQuestions = (sourceQuestions: QuizQuestion[], count = 15): Question[] => {
  const resolved: Question[] = sourceQuestions.map(q => {
    const shuffledOptions = shuffle(q.options);
    const correct = q.options[0];
    return { ...q, options: shuffledOptions, correctIndex: shuffledOptions.indexOf(correct) };
  });
  const byMonument: Record<string, Question[]> = {};
  for (const q of resolved) {
    if (!byMonument[q.monumentId]) byMonument[q.monumentId] = [];
    byMonument[q.monumentId].push(q);
  }
  const picked: Question[] = [];
  for (const id of Object.keys(byMonument)) picked.push(...shuffle(byMonument[id]).slice(0, 2));
  return shuffle(picked).slice(0, count);
}


const typeLabel: Record<Question["type"], string> = {
  city: "Location", year: "Year", dynasty: "Dynasty / Builder", fact: "Fun Fact",
  entry: "Entry & Access", material: "Materials", identify: "Identify the Monument",
  unesco: "UNESCO Status", height: "Dimensions", feature: "Unique Feature",
};
const typeColor: Record<Question["type"], string> = {
  city: "bg-blue-100 text-blue-700", year: "bg-purple-100 text-purple-700",
  dynasty: "bg-amber-100 text-amber-700", fact: "bg-green-100 text-green-700",
  entry: "bg-teal-100 text-teal-700", material: "bg-stone-100 text-stone-700",
  identify: "bg-rose-100 text-rose-700", unesco: "bg-indigo-100 text-indigo-700",
  height: "bg-orange-100 text-orange-700", feature: "bg-yellow-100 text-yellow-700",
};

const BLITZ_SECONDS = 60;
const POINTS_PER_Q = 10;
const STREAK_THRESHOLDS = [1, 3, 5, 8];
const MULTIPLIERS = [1, 2, 3, 5];
const LS_KEY = "historica-blitz-scores";

function getMultiplier(streak: number) {
  let m = 1;
  for (let i = 0; i < STREAK_THRESHOLDS.length; i++) {
    if (streak >= STREAK_THRESHOLDS[i]) m = MULTIPLIERS[i];
  }
  return m;
}

function loadScores(): number[] {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "[]"); }
  catch { return []; }
}
function saveScore(s: number) {
  const scores = [...loadScores(), s].sort((a, b) => b - a).slice(0, 5);
  localStorage.setItem(LS_KEY, JSON.stringify(scores));
}

type Mode = "menu" | "classic" | "blitz";

const QuizPage = () => {
  const { t, i18n } = useTranslation();
  const [, setLocation] = useLocation();
  const [mode, setMode] = useState<Mode>("menu");

  const isHindi = i18n.language === "hi";
  const qSource = () => isHindi ? QUESTIONS_HI : QUESTIONS_EN;
  const getLabel = (type: Question["type"]) => isHindi ? TYPE_LABELS_HI[type] : typeLabel[type];

  // Classic state
  const [questions, setQuestions] = useState<Question[]>(() => buildQuestions(qSource()));
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  // Blitz state
  const [blitzQuestions, setBlitzQuestions] = useState<Question[]>([]);
  const [blitzIndex, setBlitzIndex] = useState(0);
  const [blitzPicked, setBlitzPicked] = useState<number | null>(null);
  const [blitzScore, setBlitzScore] = useState(0);
  const [blitzStreak, setBlitzStreak] = useState(0);
  const [blitzTimeLeft, setBlitzTimeLeft] = useState(BLITZ_SECONDS);
  const [blitzDone, setBlitzDone] = useState(false);
  const [blitzIsNewRecord, setBlitzIsNewRecord] = useState(false);
  const [blitzScores, setBlitzScores] = useState<number[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Rebuild questions whenever language changes
  useEffect(() => {
    setQuestions(buildQuestions(qSource()));
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }, [i18n.language]);

  const startBlitz = () => {
    const qs = buildQuestions(qSource(), 50);
    setBlitzQuestions(qs);
    setBlitzIndex(0);
    setBlitzPicked(null);
    setBlitzScore(0);
    setBlitzStreak(0);
    setBlitzTimeLeft(BLITZ_SECONDS);
    setBlitzDone(false);
    setBlitzIsNewRecord(false);
    setBlitzScores(loadScores());
    setMode("blitz");
    timerRef.current = setInterval(() => {
      setBlitzTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setBlitzDone(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const endBlitz = (finalScore: number) => {
    clearInterval(timerRef.current!);
    setBlitzDone(true);
    const prev = loadScores();
    saveScore(finalScore);
    setBlitzScores(loadScores());
    if (prev.length === 0 || finalScore > prev[0]) setBlitzIsNewRecord(true);
  };

  const onBlitzPick = (i: number) => {
    if (blitzPicked !== null || blitzDone) return;
    setBlitzPicked(i);
    const bq = blitzQuestions[blitzIndex];
    const correct = i === bq.correctIndex;
    const newStreak = correct ? blitzStreak + 1 : 0;
    setBlitzStreak(newStreak);
    const mult = getMultiplier(correct ? blitzStreak + 1 : blitzStreak);
    const newScore = blitzScore + (correct ? POINTS_PER_Q * mult : 0);
    setBlitzScore(newScore);
    setTimeout(() => {
      const nextIdx = blitzIndex + 1;
      if (nextIdx >= blitzQuestions.length) {
        endBlitz(newScore);
      } else {
        setBlitzIndex(nextIdx);
        setBlitzPicked(null);
      }
    }, 500);
  };

  // Classic helpers
  const q = questions[index];
  const onPick = (i: number) => { if (picked !== null) return; setPicked(i); if (i === q.correctIndex) setScore(s => s + 1); };
  const next = () => { if (index + 1 >= questions.length) setDone(true); else { setIndex(i => i + 1); setPicked(null); } };
  const restart = () => { setQuestions(buildQuestions(qSource())); setIndex(0); setPicked(null); setScore(0); setDone(false); };

  const bq = blitzQuestions[blitzIndex];
  const blitzMult = getMultiplier(blitzStreak);

  // ── MENU ──────────────────────────────────────────────────────────────────
  if (mode === "menu") {
    const topScores = loadScores();
    return (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">🏛️</div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700 mb-1">
              {t("quiz.title")}
            </h1>
            <p className="text-orange-600 text-sm">{t("quiz.subtitle")}</p>
          </div>

          <div className="grid gap-4">
            {/* Classic */}
            <button
              onClick={() => { setMode("classic"); setQuestions(buildQuestions(qSource())); setIndex(0); setPicked(null); setScore(0); setDone(false); }}
              className="group p-5 bg-white/90 border-2 border-amber-200 rounded-2xl hover:border-amber-400 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform">📚</div>
                <div className="flex-1">
                  <h3 className="font-bold text-amber-900 text-lg">{t("quiz.startClassic")}</h3>
                  <p className="text-amber-600 text-sm">{t("quiz.classicDesc")}</p>
                </div>
                <svg className="text-amber-400 group-hover:text-amber-600 transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </button>

            {/* Blitz */}
            <button
              onClick={startBlitz}
              className="group p-5 bg-gradient-to-br from-rose-900/90 to-orange-900/90 border-2 border-rose-600/40 rounded-2xl hover:border-rose-400 hover:shadow-lg hover:shadow-rose-900/30 transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-orange-600 flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform">⚡</div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg">{t("quiz.startBlitz")}</h3>
                  <p className="text-rose-300 text-sm">{t("quiz.blitzDesc")}</p>
                </div>
                <svg className="text-rose-400 group-hover:text-rose-200 transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </button>
          </div>

          {/* Leaderboard */}
          {topScores.length > 0 && (
            <div className="mt-6 bg-white/80 border border-amber-200 rounded-xl p-4">
              <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">🏆 {t("quiz.leaderboard")} <span className="text-xs font-normal text-amber-600">(Blitz)</span></h3>
              {topScores.map((s, i) => (
                <div key={i} className="flex items-center justify-between py-1.5 border-b border-amber-100 last:border-0">
                  <span className="text-sm font-medium text-amber-700">{["🥇","🥈","🥉","4th","5th"][i]}</span>
                  <span className="text-amber-900 font-bold">{s} pts</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 flex justify-center">
            <Button variant="outline" onClick={() => setLocation("/")}>{t("monument.backToMap")}</Button>
          </div>
        </div>
      </div>
    );
  }

  // ── CLASSIC ───────────────────────────────────────────────────────────────
  if (mode === "classic") {
    return (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">{t("quiz.title")}</h1>
              <p className="text-sm text-orange-600 mt-0.5">{t("quiz.classicDesc")}</p>
            </div>
            <Button variant="outline" onClick={() => setMode("menu")}>{t("quiz.backToMenu")}</Button>
          </div>

          {!done ? (
            <Card className="border-amber-200 shadow-xl bg-white/90 backdrop-blur-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between text-sm text-amber-700 mb-3">
                  <span>{t("quiz.question")} {index + 1} {t("quiz.of")} {questions.length}</span>
                  <span className="font-semibold">{t("quiz.score")}: {score}</span>
                </div>
                <div className="h-1.5 w-full bg-amber-100 rounded-full mb-5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
                </div>
                <div className="mb-1">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${typeColor[q.type]}`}>{q.icon} {getLabel(q.type)}</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p key={index} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} className="text-lg font-medium text-orange-900 my-4">{q.prompt}</motion.p>
                </AnimatePresence>
                <div className="grid gap-3">
                  {q.options.map((opt, i) => {
                    const isCorrect = picked !== null && i === q.correctIndex;
                    const isWrong = picked === i && i !== q.correctIndex;
                    const isNeutral = picked !== null && i !== q.correctIndex && picked !== i;
                    return (
                      <button key={i} onClick={() => onPick(i)} disabled={picked !== null}
                        className={`text-left px-4 py-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                          isCorrect ? "bg-emerald-50 border-emerald-400 text-emerald-900"
                          : isWrong ? "bg-rose-50 border-rose-400 text-rose-900"
                          : isNeutral ? "bg-white/50 border-gray-100 text-gray-400"
                          : "bg-white border-amber-200 hover:bg-amber-50 hover:border-amber-400 text-orange-900"}`}>
                        {picked !== null && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />}
                        {picked !== null && isWrong && <XCircle className="h-5 w-5 text-rose-500 shrink-0" />}
                        {(picked === null || isNeutral) && <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0">{String.fromCharCode(65 + i)}</span>}
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {picked !== null && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
                    <div className={`rounded-lg p-3 flex gap-2 mb-4 ${picked === q.correctIndex ? "bg-emerald-50 border border-emerald-200" : "bg-rose-50 border border-rose-200"}`}>
                      <Info className={`h-5 w-5 mt-0.5 shrink-0 ${picked === q.correctIndex ? "text-emerald-600" : "text-rose-600"}`} />
                      <div>
                        <p className={`text-xs font-semibold mb-0.5 ${picked === q.correctIndex ? "text-emerald-700" : "text-rose-700"}`}>{picked === q.correctIndex ? t("quiz.correct") : `${t("quiz.incorrect")}: ${q.options[q.correctIndex]}`}</p>
                        <p className="text-sm text-gray-700">{q.explanation}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={next} className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                        {index + 1 >= questions.length ? t("quiz.finish") : t("quiz.next") + " →"}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="border-amber-200 shadow-xl bg-white/90 backdrop-blur-md">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{score === questions.length ? "🏆" : score >= questions.length * 0.7 ? "🎉" : "📚"}</div>
                <h2 className="text-2xl font-bold text-amber-800 mb-2">Quiz Complete!</h2>
                <p className="text-6xl font-bold text-orange-700 mb-4">{score} <span className="text-3xl text-orange-400">/ {questions.length}</span></p>
                <div className="flex gap-3 justify-center">
                  <Button onClick={restart} className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">{t("quiz.playAgain")}</Button>
                  <Button variant="outline" onClick={() => setMode("menu")}>{t("quiz.backToMenu")}</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }

  // ── BLITZ ─────────────────────────────────────────────────────────────────
  if (mode === "blitz") {
    const timerPct = (blitzTimeLeft / BLITZ_SECONDS) * 100;
    const timerColor = blitzTimeLeft > 20 ? "from-emerald-400 to-green-500" : blitzTimeLeft > 10 ? "from-amber-400 to-orange-500" : "from-rose-500 to-red-600";

    if (blitzDone || !bq) {
      const topScores = blitzScores;
      return (
        <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-rose-950 via-slate-900 to-orange-950 p-6 flex items-center justify-center">
          <div className="w-full max-w-md text-center">
            {blitzIsNewRecord && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-sm px-4 py-1.5 rounded-full mb-4">
                🎉 {t("quiz.newRecord")}
              </motion.div>
            )}
            <div className="text-5xl mb-3">⚡</div>
            <h2 className="text-2xl font-bold text-white mb-1">{t("quiz.blitzOver")}</h2>
            <p className="text-slate-400 text-sm mb-4">{blitzIndex} questions answered</p>
            <div className="text-6xl font-bold text-white mb-1">{blitzScore}</div>
            <p className="text-rose-400 text-sm mb-6">points scored</p>

            {topScores.length > 0 && (
              <div className="bg-white/10 border border-white/10 rounded-xl p-4 mb-6 text-left">
                <h3 className="text-amber-400 font-semibold text-sm mb-3 flex items-center gap-2">🏆 {t("quiz.leaderboard")}</h3>
                {topScores.map((s, i) => (
                  <div key={i} className={`flex items-center justify-between py-2 border-b border-white/10 last:border-0 ${i === 0 ? "text-amber-300 font-bold" : "text-slate-300"}`}>
                    <span className="text-sm">{["🥇","🥈","🥉","4th","5th"][i]}</span>
                    <span>{s} pts</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-3 justify-center">
              <Button onClick={startBlitz} className="bg-gradient-to-r from-rose-500 to-orange-600 text-white">{t("quiz.playAgain")}</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => setMode("menu")}>{t("quiz.backToMenu")}</Button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-rose-950 via-slate-900 to-orange-950 p-4">
        <div className="max-w-2xl mx-auto">
          {/* HUD */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>⏱ {t("quiz.timeLeft")}</span>
                <span className={blitzTimeLeft <= 10 ? "text-rose-400 font-bold animate-pulse" : "text-slate-300"}>{blitzTimeLeft}s</span>
              </div>
              <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${timerColor} rounded-full`}
                  style={{ width: `${timerPct}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
            <div className="text-center min-w-[70px]">
              <div className="text-2xl font-bold text-white">{blitzScore}</div>
              <div className="text-xs text-slate-400">pts</div>
            </div>
            <div className="text-center min-w-[60px]">
              {blitzStreak >= 3 ? (
                <motion.div key={blitzStreak} initial={{ scale: 1.4 }} animate={{ scale: 1 }}>
                  <div className={`text-lg font-bold ${blitzMult >= 5 ? "text-yellow-400" : blitzMult >= 3 ? "text-orange-400" : "text-amber-300"}`}>×{blitzMult}</div>
                  <div className="text-xs text-slate-400">🔥{blitzStreak}</div>
                </motion.div>
              ) : (
                <div>
                  <div className="text-lg font-bold text-slate-500">×1</div>
                  <div className="text-xs text-slate-500">{t("quiz.streak")}: {blitzStreak}</div>
                </div>
              )}
            </div>
          </div>

          {/* Question */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
            <CardContent className="p-5">
              <div className="mb-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColor[bq.type]}`}>{bq.icon} {getLabel(bq.type)}</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.p key={blitzIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-base font-medium text-white my-3">{bq.prompt}</motion.p>
              </AnimatePresence>
              <div className="grid gap-2">
                {bq.options.map((opt, i) => {
                  const isCorrect = blitzPicked !== null && i === bq.correctIndex;
                  const isWrong = blitzPicked === i && i !== bq.correctIndex;
                  return (
                    <button key={i} onClick={() => onBlitzPick(i)} disabled={blitzPicked !== null}
                      className={`text-left px-4 py-2.5 rounded-lg border transition-all text-sm font-medium ${
                        isCorrect ? "bg-emerald-500/20 border-emerald-400 text-emerald-200"
                        : isWrong ? "bg-rose-500/20 border-rose-400 text-rose-200"
                        : blitzPicked !== null ? "bg-white/5 border-white/10 text-slate-500"
                        : "bg-white/10 border-white/20 hover:bg-white/20 text-slate-100"}`}>
                      <span className="mr-2 opacity-60">{String.fromCharCode(65 + i)}.</span>{opt}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="mt-3 flex justify-between items-center">
            <span className="text-slate-500 text-xs">{blitzIndex + 1} answered</span>
            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-300" onClick={() => { clearInterval(timerRef.current!); endBlitz(blitzScore); }}>End early</Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default QuizPage;
