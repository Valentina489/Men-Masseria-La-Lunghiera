self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('menu-cache-v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/translations.js',
                '/images/logo.png',
                '/images/antipasti/',
                '/images/panzerotti/',
                '/images/secondi-forno/',
                '/images/secondi-brace/',
                '/images/frutta/',
                '/images/dolci/',
                '/images/bevande/'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});