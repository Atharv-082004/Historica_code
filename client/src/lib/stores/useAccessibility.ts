import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AccessibilityState {
  highContrast: boolean;
  largeText: boolean;
  textOnly3D: boolean;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleTextOnly3D: () => void;
}

export const useAccessibility = create<AccessibilityState>()(
  persist(
    (set) => ({
      highContrast: false,
      largeText: false,
      textOnly3D: false,
      toggleHighContrast: () => set(s => ({ highContrast: !s.highContrast })),
      toggleLargeText: () => set(s => ({ largeText: !s.largeText })),
      toggleTextOnly3D: () => set(s => ({ textOnly3D: !s.textOnly3D })),
    }),
    { name: "historica-accessibility" }
  )
);
