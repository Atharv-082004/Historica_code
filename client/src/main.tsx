import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { StrictMode } from "react";
import "./i18n/i18n";

// Register service worker for PWA / offline support — production only
// In development (Replit preview) the SW causes stale-cache issues, skip it
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then((reg) => console.log("[PWA] Service worker registered:", reg.scope))
      .catch((err) => console.warn("[PWA] Service worker failed:", err));
  });
} else if ("serviceWorker" in navigator) {
  // In dev: unregister any previously installed SW so old caches don't block
  navigator.serviceWorker.getRegistrations().then((regs) => {
    regs.forEach((reg) => reg.unregister());
  });
}

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
