// Service worker do Organiza ai, editais!: funciona sem internet.
const CACHE = "oa-v30";
const ARQUIVOS = ["./", "index.html", "config.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "maskable-512.png", "apple-touch-icon.png", "privacidade.html"];
// bibliotecas guardadas já na instalação, para gerar PDF, planilha e fotos .zip sem internet
const EXTRAS = [
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(async c => {
    await c.addAll(ARQUIVOS);
    await Promise.all(EXTRAS.map(u => fetch(u, {mode: "cors"}).then(r => r.ok ? c.put(u, r) : null).catch(() => null)));
  }).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// Ao tocar num lembrete, abre (ou traz para frente) o aplicativo
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type: "window", includeUncontrolled: true}).then(l => l.length ? l[0].focus() : self.clients.openWindow("./")));
});
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (u.hostname.endsWith("googleapis.com") && !u.hostname.startsWith("fonts")) return; // o Firebase cuida do próprio modo sem internet
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
