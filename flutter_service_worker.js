'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "app-ads.txt": "a853619b6b2937b7c24ced94230f9f34",
"assets/AssetManifest.json": "dbfeaa8889681559bce924d89ea282d4",
"assets/assets/bitcoin.png": "8227f2b9f0fcef8b588cecd9b1bcae7a",
"assets/assets/blakloopslogo.png": "5cffad2a01b723193acfabc234e16075",
"assets/assets/cashapp.png": "42dec4b15db727eedbb9a12c3f5169e2",
"assets/assets/ethereum.png": "e37e8eae3fc42945b7fd904d18ac54f2",
"assets/assets/github.png": "10e23ee28ee608d04400db5f2c6c0945",
"assets/assets/instagram.png": "8c91c23a562f41c56fad770aa56812ad",
"assets/assets/isrc_generator_logo.png": "dcfd5c25ffabf9e7c9475ef94687e2e9",
"assets/assets/litecoin.png": "1752b6f6b63f71a75bd472dabad939d6",
"assets/assets/mc_logo_white_500.png": "835778cf4df1da37af6f676551f35a35",
"assets/assets/sg_death_mask.png": "5e045fa4ce69c99afee759914b9f92f2",
"assets/assets/sg_head_logo.png": "5a5c1003bff438cb98fbf6f30b197d94",
"assets/assets/sg_origins.png": "f722b4993b07d1acf3c9e8e4132d9d88",
"assets/assets/sg_text_logo_black_w_stroke.png": "434e496d4f0fd14f7df3742e1bf6bf99",
"assets/assets/sg_text_logo_white.png": "1f37fa8232219bf0bf11f1918934f4aa",
"assets/assets/twitter.png": "401933ef36430ac6d3fdf0e100d5dd71",
"assets/assets/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/FontManifest.json": "e25c505507e2d3ccf9188f95147c58df",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "8d5c39a2bd692a2532f9d38df3a11875",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/android-icon-144x144.png": "469dc1b29e779973acdad7eefa9a0e9a",
"icons/android-icon-192x192.png": "eab4e6d08910ddfb1dcd468a81c6cc6b",
"icons/android-icon-36x36.png": "1bb81868c514c96ffa3376fce45a9d1f",
"icons/android-icon-48x48.png": "bde4699f82d33333099db2bf665e0c6a",
"icons/android-icon-72x72.png": "ab66a0c4c1d4b830ff7c4decd98f370c",
"icons/android-icon-96x96.png": "959b6079d0e824252001f713caf26f71",
"icons/apple-icon-114x114.png": "5c34eec5427d1011a3b9b5229e78711b",
"icons/apple-icon-120x120.png": "c375a880b6e0b9bd2c82e78f469fd7c7",
"icons/apple-icon-144x144.png": "6db4d13c347c90789a83ab71eb8e50f7",
"icons/apple-icon-152x152.png": "a547197c2562d41ca2fe38121a39436b",
"icons/apple-icon-180x180.png": "16897d99aac6a34e273e020e0b4c0b63",
"icons/apple-icon-57x57.png": "752778474595047962248d77081011f7",
"icons/apple-icon-60x60.png": "15e5c662ab0c29b1281c449fb7f76bb2",
"icons/apple-icon-72x72.png": "1e520f1facbb7c8c6d3b8f18a3f2ac13",
"icons/apple-icon-76x76.png": "e68b4e3e260651d24291108135ebaa0a",
"icons/apple-icon-precomposed.png": "148bc7342935fdbc41c8748e9f6a9546",
"icons/apple-icon.png": "148bc7342935fdbc41c8748e9f6a9546",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "acf66587fc23422be9df88d067f6c17d",
"icons/favicon-32x32.png": "a3ad188ba3b82787436497ad5174cbf4",
"icons/favicon-96x96.png": "14f408c048bdbbb19b71fbe91f64f6e3",
"icons/favicon.ico": "225f75d3540b55e95d5173b7c40b4023",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "6db4d13c347c90789a83ab71eb8e50f7",
"icons/ms-icon-150x150.png": "d9149df1200928b5c20badf78bf0a8d7",
"icons/ms-icon-310x310.png": "5e045fa4ce69c99afee759914b9f92f2",
"icons/ms-icon-70x70.png": "9e773a3f285c065f2aac84fbc09b3f37",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"images/death_mask.png": "c0705a1aaeb0e83f09bc3c00fec60e38",
"images/sg_origins.png": "f722b4993b07d1acf3c9e8e4132d9d88",
"index.html": "63faf2eac9afbdb47e7af5b0f447364b",
"/": "63faf2eac9afbdb47e7af5b0f447364b",
"main.dart.js": "149887c17a33bb7da627a15511210a9e",
"manifest.json": "3e8c68f8abcfcb6313782a9d92405bf3",
"robots.txt": "b8bfd6acacefecdcbc4e63c63f2ff814",
"styles.css": "9891ef353edf12299644d6ccf2b8d1dc",
"version.json": "1069e4332662612cbbf29f52b303f721"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
