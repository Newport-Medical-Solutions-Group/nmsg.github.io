// sw.js
self.addEventListener('install', event => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker: Activated');
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Basic passthrough (network-first)
  event.respondWith(fetch(event.request).catch(() => {
    // fallback offline response if needed
    return new Response("Offline", {
      headers: { 'Content-Type': 'text/plain' }
    });
  }));
});
