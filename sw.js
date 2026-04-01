const CACHE = "daytracker-clean-v1";
const ASSETS = ["./", "./index.html", "./manifest.json", "./1.png", "./2.png", "./3.png"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).catch(() => {
        if (req.mode === "navigate") return caches.match("./index.html");
        return Response.error();
      });
    })
  );
});
