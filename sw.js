const SHELL = "be-trainer-shell-v3";
const AUDIO = "be-trainer-audio-v1";

const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/styles.css",
  "./js/content.js",
  "./js/storage.js",
  "./js/audio-manifest.js",
  "./js/audio.js",
  "./js/app.js",
  "./fonts/carlito-regular.woff",
  "./fonts/carlito-bold.woff",
  "./fonts/carlito-italic.woff",
  "./fonts/carlito-bolditalic.woff",
  "./icons/favicon-32.png",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((k) => k !== SHELL && k !== AUDIO)
        .map((k) => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

function isAudio(url) {
  try {
    const u = new URL(url);
    return /\/audio\/.+\.mp3$/i.test(u.pathname);
  } catch (err) {
    return false;
  }
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = req.url;

  if (isAudio(url)) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const res = await fetch(req);
        if (res && res.ok) {
          const cache = await caches.open(AUDIO);
          cache.put(req, res.clone());
        }
        return res;
      } catch (err) {
        const again = await caches.match(req);
        if (again) return again;
        throw err;
      }
    })());
    return;
  }

  event.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res && res.ok && new URL(req.url).origin === self.location.origin) {
        const cache = await caches.open(SHELL);
        cache.put(req, res.clone());
      }
      return res;
    } catch (err) {
      const cached = await caches.match(req);
      if (cached) return cached;
      if (req.mode === "navigate") {
        const shell = await caches.match("./index.html");
        if (shell) return shell;
      }
      throw err;
    }
  })());
});
