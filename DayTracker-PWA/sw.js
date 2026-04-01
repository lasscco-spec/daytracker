const CACHE = 'daytracker-v2';
const ASSETS = ['/', '/index.html', '/manifest.json', '/1.png', '/2.png', '/3.png', '/icon-192.png', '/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  e.respondWith(
    caches.match(req).then(r => {
      if (r) return r;
      return fetch(req).catch(() => {
        if (req.mode === 'navigate') return caches.match('/index.html');
        return Response.error();
      });
    })
  );
});
