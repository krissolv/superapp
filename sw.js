var CACHE_NAME = 'superapp-cache-v1';

var urlsToCache = [
  '/superapp/'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
      caches.open(CACHE_NAME)
          .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
  );
});