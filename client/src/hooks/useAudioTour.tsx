import { useState, useEffect, useCallback, useRef } from "react";

interface UseAudioTourOptions {
  text: string;
  lang?: string;
}

export function useAudioTour({ text, lang = "en-IN" }: UseAudioTourOptions) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setIsSupported("speechSynthesis" in window);
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  const play = useCallback(() => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.88;
    utterance.pitch = 1.0;
    utterance.volume = 0.9;

    // Prefer a voice that matches the requested language
    const voices = window.speechSynthesis.getVoices();
    const isHindi = lang.startsWith("hi");
    const preferred = isHindi
      ? voices.find(v => v.lang === "hi-IN") ||
        voices.find(v => v.lang.startsWith("hi-IN")) ||
        voices.find(v => v.lang.startsWith("hi")) ||
        voices.find(v => v.lang.startsWith("en-IN")) ||
        voices.find(v => v.lang.startsWith("en"))
      : voices.find(v => v.lang === "en-IN") ||
        voices.find(v => v.lang.startsWith("en-IN")) ||
        voices.find(v => v.lang.startsWith("en-GB")) ||
        voices.find(v => v.lang.startsWith("en"));
    if (preferred) utterance.voice = preferred;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [text, lang]);

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) stop();
    else play();
  }, [isPlaying, play, stop]);

  return { isPlaying, isSupported, play, stop, toggle };
}
