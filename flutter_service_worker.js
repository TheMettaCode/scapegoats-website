'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "9bead089c4c4df829e6f62330fc656b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8c7818708ad1f33ab0c4343b45b42596",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5d92ba1cab6e5f251268ead43875951f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "652e938c28f9cb0ff3548d7e427dbc25",
".git/logs/refs/heads/main": "652e938c28f9cb0ff3548d7e427dbc25",
".git/logs/refs/remotes/origin/main": "a358db0d21a44b3c50de34a3f4be1423",
".git/objects/pack/pack-2d98c59485902af5c6c7532dbb1d7c455cf03671.idx": "34c852081961fe6e06cff17a811be020",
".git/objects/pack/pack-2d98c59485902af5c6c7532dbb1d7c455cf03671.pack": "dea07fd080b9ccf52ee80423edeff8c7",
".git/ORIG_HEAD": "cffee497fd1fa716c5785c4146272489",
".git/refs/heads/main": "cffee497fd1fa716c5785c4146272489",
".git/refs/remotes/origin/main": "cffee497fd1fa716c5785c4146272489",
"assets/AssetManifest.json": "eda733824a4f4d1402bcdfa363be449c",
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
"assets/assets/sg_usa_tag.png": "52696d06065c4663a5eb53b943ca4da7",
"assets/assets/twitter.png": "401933ef36430ac6d3fdf0e100d5dd71",
"assets/assets/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "25632989d3241d377f80fb00bd2ec3c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"canvaskit/canvaskit.js": "bc4a0f2406aeadaf560b641c5617c18a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"CNAME": "9363b55dc260032ef66e7718c8351603",
"flutter.js": "79fd1b5f4b9ed5c1eb55814813698372",
"icons/android-icon-144x144.png": "83c03842788a05786ee193b86271ef7f",
"icons/android-icon-192x192.png": "fb653763f95df2015fb56961ca6e87e6",
"icons/android-icon-36x36.png": "0e713ba517da7d3da11206c6e2425aa7",
"icons/android-icon-48x48.png": "3d9c8fb10d0e84e50e2b93331aef8850",
"icons/android-icon-72x72.png": "ee5ffcceef83c2701e9544acc104b6ac",
"icons/android-icon-96x96.png": "581b9358cec5acc9a94a7877ab286349",
"icons/apple-icon-114x114.png": "c446808a0571c0b14592c047c6993c38",
"icons/apple-icon-120x120.png": "a4ab70cc1f98be4e3db4acc638a431ee",
"icons/apple-icon-144x144.png": "83c03842788a05786ee193b86271ef7f",
"icons/apple-icon-152x152.png": "729bb8b5cf4be6ece8a0dfeb0952d882",
"icons/apple-icon-180x180.png": "97010f6ed6de53935f11bd04fba4e88d",
"icons/apple-icon-57x57.png": "7f65a548bb196bb0a91b89ece6d2a064",
"icons/apple-icon-60x60.png": "cac2806ced245e492388a39a21d55724",
"icons/apple-icon-72x72.png": "ee5ffcceef83c2701e9544acc104b6ac",
"icons/apple-icon-76x76.png": "6feb0c4a125f907aa1cce8e6a78ebea7",
"icons/apple-icon-precomposed.png": "0d65984bb9d37b671a4e1970534e4dae",
"icons/apple-icon.png": "0d65984bb9d37b671a4e1970534e4dae",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "e9373981f91b48e305d06ec671cb877d",
"icons/favicon-32x32.png": "ac95620244ef841d69063f12e212d9b6",
"icons/favicon-96x96.png": "581b9358cec5acc9a94a7877ab286349",
"icons/favicon.ico": "8c15763b083741b1e750c55813ba8e1d",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "83c03842788a05786ee193b86271ef7f",
"icons/ms-icon-150x150.png": "fd9f3c4b227596e17e62bea9e6cd83b2",
"icons/ms-icon-310x310.png": "961570d017a13026d1747af455034ec4",
"icons/ms-icon-70x70.png": "e1a315c814bd8e6c85a9a4288dc6f5d0",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"images/death_mask.png": "c0705a1aaeb0e83f09bc3c00fec60e38",
"images/sg_origins.png": "f722b4993b07d1acf3c9e8e4132d9d88",
"images/sg_usa_tag.png": "52696d06065c4663a5eb53b943ca4da7",
"index.html": "beaed029b44dc2cdf2bd3dd83c6e5b24",
"/": "beaed029b44dc2cdf2bd3dd83c6e5b24",
"main.dart.js": "abe607c2e79130d5f9535d2dd9474172",
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
