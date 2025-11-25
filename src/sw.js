self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('cliplinkbox-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/src/main.js',
                '/src/assets/main.css'
            ])
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request)
        })
    )
})
