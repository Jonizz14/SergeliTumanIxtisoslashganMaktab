// public/service-worker.js

const CACHE_NAME = "dynamic-images-v2";
const MAX_IMAGES = 500; // nechta img saqlansin

self.addEventListener("install", event => {
    self.skipWaiting(); // darhol faollashsin
});

self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
});

// Img caching — API yoki CDN dan kelgan img’lar uchun
self.addEventListener("fetch", event => {
    const req = event.request;
    const url = req.url;

    // Faqat rasm so‘rovlarini tuta olamiz
    if (req.method === "GET" && req.destination === "image") {
        event.respondWith(cacheImage(req));
    }
});

async function cacheImage(req) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);

    if (cached) {
        return cached; // keshda bor — shu bilan qaytaramiz
    }

    try {
        const response = await fetch(req);
        if (response && response.status === 200) {
            cache.put(req, response.clone());
            trimCache(cache); // eski fayllarni kesadi
        }
        return response;
    } catch (error) {
        console.warn("Offline — rasm topilmadi:", req.url);
        return new Response("Offline image missing", { status: 503 });
    }
}

// Eski rasmni avtomatik o‘chirish
async function trimCache(cache) {
    const keys = await cache.keys();
    if (keys.length > MAX_IMAGES) {
        // Eng eski rasmni o‘chiramiz
        await cache.delete(keys[0]);
    }
}
