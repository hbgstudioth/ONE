/* ONE Surgery Dashboard – app shell for "Add to Home Screen".
   Network first (always fresh); the last copy is kept so the app still opens without internet.
   Google Sheets / Meta data are on other sites and are never cached here. */
const CACHE = "one-dashboard-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if(req.method !== "GET" || url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
      .catch(() => caches.match(req).then(r => r || caches.match("./")))
  );
});
