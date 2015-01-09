function debug(aStr) {
  console.log('ServiceWorker - ' + aStr);
}

this.addEventListener('install', function(event) {
  debug('install event');
});

// You could also do

// this.addEventListener('install', function(event) {
//   var starWarsAssets = new Cache();

//   event.waitUntil(
//     starWarsAssets.add(
//       '/sw-test/index.html',
//       '/sw-test/style.css',
//       '/sw-test/app.js',
//       '/sw-test/image-list.js',
//       '/sw-test/star-wars-logo.jpg',
//       '/sw-test/gallery/',
//       '/sw-test/gallery/bountyHunters.jpg',
//       '/sw-test/gallery/myLittleVader.jpg',
//       '/sw-test/gallery/snowTroopers.jpg'
//     )
//   )

//   caches.set('v1', starWarsResources);

// )};

this.addEventListener('fetch', function(event) {
  debug('fetch event: ' + event.request.url);
});

