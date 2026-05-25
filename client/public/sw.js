const CACHE_VERSION = "historica-v3";
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const MODEL_CACHE = `${CACHE_VERSION}-models`;
const ASSET_CACHE = `${CACHE_VERSION}-assets`;

const SHELL_ASSETS = [
  "/",
  "/index.html",
];

const STATIC_EXTENSIONS = [".js", ".css", ".woff2", ".woff", ".ttf", ".mp3", ".png", ".jpg", ".svg"];
const MODEL_EXTENSIONS = [".glb", ".gltf"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith("historica-") && k !== SHELL_CACHE && k !== MODEL_CACHE && k !== ASSET_CACHE)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

function matchesExt(url, exts) {
  const path = new URL(url).pathname;
  return exts.some((ext) => path.endsWith(ext));
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = request.url;

  // Skip non-GET and cross-origin requests (except fonts)
  if (request.method !== "GET") return;
  if (!url.startsWith(self.location.origin) && !url.includes("fonts.gstatic.com") && !url.includes("fonts.googleapis.com")) return;

  // API calls — network first, no cache
  if (new URL(url).pathname.startsWith("/api/")) {
    event.respondWith(fetch(request).catch(() => new Response("Offline", { status: 503 })));
    return;
  }

  // GLB / GLTF models — cache first (large files, rarely change)
  if (matchesExt(url, MODEL_EXTENSIONS)) {
    event.respondWith(
      caches.open(MODEL_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response.ok) cache.put(request, response.clone());
        return response;
      })
    );
    return;
  }

  // Static assets — cache first, fallback network
  if (matchesExt(url, STATIC_EXTENSIONS) || url.includes("fonts.")) {
    event.respondWith(
      caches.open(ASSET_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response.ok) cache.put(request, response.clone());
        return response;
      })
    );
    return;
  }

  // HTML navigation — network first, shell fallback
  if (request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(SHELL_CACHE).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match("/") || caches.match("/index.html"))
    );
    return;
  }

  // Default — stale-while-revalidate
  event.respondWith(
    caches.open(ASSET_CACHE).then(async (cache) => {
      const cached = await cache.match(request);
      const fetchPromise = fetch(request).then((response) => {
        if (response.ok) cache.put(request, response.clone());
        return response;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
