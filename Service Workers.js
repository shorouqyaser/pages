const cacheName ="Arabic-Food-v1";

const assets=[
    '/',
    '/index.html',
    '/css/style.css',
    '/js/app.js',
    'image/image1.jpg',
    '/image/image2.jpg',
    '/image/image3.jpg',
    '/image/image4.jpg',
    '/image/image5.jpg',
    '/image/image6.jpg',
    '/image/image7.jpg',
    '/image/image8.jpg',
    '/image/image9.jpg',
    '/manifest.json',
    'https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap'
]
self.addEventListener('install',(installEvent)=>{
    installEvent.waitUntil(
        caches.open(cacheName).then((cache)=>{
           cache.addAll(assets).then().catch() 
        })
        .catch((err)=>{})
    )
})

self.addEventListener("activate",(activateEvent)=>{
    activateEvent.waitUntil(
        caches.keys().then((keys)=>{
            keys.filter((key)=>key != cacheName)
            .map((key)=> caches.delete(key))
        })
    )
})

self.addEventListener('fetch',(fetchEvent)=>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res)=>{
            return res || fetch(fetchEvent.request);
        })
    )
})