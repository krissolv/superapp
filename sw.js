var CACHE_NAME = 'superapp-cache-v2';

var urlsToCache = [
  '/superapp/',
  '/superapp/index.html',
  '/superapp/index.html?launcher=true'
];

self.addEventListener('install', function(event) {

  event.waitUntil(
      caches.open(CACHE_NAME)
          .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
  );
});