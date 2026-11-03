// Service worker do Organiza Aí, Editais: funcionamento offline.
const CACHE = "oa-v9";
const ARQUIVOS = ["./", "index.html", "config.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "maskable-512.png", "apple-touch-icon.png", "privacidade.html"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// Ao tocar num lembrete, abre (ou traz para frente) o aplicativo
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type: "window", includeUncontrolled: true}).then(l => l.length ? l[0].focus() : self.clients.openWindow("./")));
});
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (u.hostname.endsWith("googleapis.com") && !u.hostname.startsWith("fonts")) return; // Firebase cuida do próprio cache
  if (req.mode === "navigate" || (u.origin === location.origin && u.pathname.endsWith("config.js"))) {
    e.respondWith(fetch(req, {cache: "no-cache"}).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req.mode === "navigate" ? "index.html" : req, c)); return r; })
      .catch(() => caches.match(req.mode === "navigate" ? "index.html" : req)));
    return;
  }
  e.respondWith(caches.match(req, {ignoreSearch: true}).then(r => r || fetch(req).then(resp => {
    const ok = ["www.gstatic.com", "cdnjs.cloudflare.com", "cdn.jsdelivr.net", "fonts.googleapis.com", "fonts.gstatic.com"].includes(u.hostname) || u.origin === location.origin;
    if (resp.ok && ok) { const c = resp.clone(); caches.open(CACHE).then(x => x.put(req, c)); }
    return resp;
  })));
});
