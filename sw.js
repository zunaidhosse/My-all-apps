const CACHE_NAME = 'my-apps-cache-v2'; // Cache version updated
const GITHUB_REPO_NAME = '/My-all-apps'; // Your repository name

const urlsToCache = [
  `${GITHUB_REPO_NAME}/`,
  `${GITHUB_REPO_NAME}/index.html`,
  `${GITHUB_REPO_NAME}/style.css`,
  `${GITHUB_REPO_NAME}/apps.js`,
  `${GITHUB_REPO_NAME}/manifest.json`,
  `${GITHUB_REPO_NAME}/icon-192x192.png`,
  `${GITHUB_REPO_NAME}/icon-512x512.png`
];

// Install a service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching files');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Failed to cache urls:', error);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

