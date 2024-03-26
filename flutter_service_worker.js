'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "718f66ec986efcac2586d2f5d28dc370",
".git/config": "fd4aceb873cdf6e9aa326a939d867024",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9dbe2f4c48c96be0514ed10dfc494f17",
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
".git/index": "104683a5f4da8cf6df24d087f96e8bf4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9b1196e97c021382953259f7a6cf0afe",
".git/logs/refs/heads/main": "9b1196e97c021382953259f7a6cf0afe",
".git/logs/refs/remotes/origin/HEAD": "f2bdd698145b95e0980c4ce4bbf05ddb",
".git/logs/refs/remotes/origin/main": "14d28d97c256148f71bfd3e99a7f6396",
".git/objects/06/7a915cfa8cfcafc6da1753c53a65f6de101ff1": "bc67f7dc8f8a89c013766f7b18d2add3",
".git/objects/08/0891a45bbe33eebfdef3dfb62ee2c9145082b1": "84abd22862e4fc4b7cd81d84b455ff79",
".git/objects/5c/1b7551d54177528c617ac0f84a12f10ec826b4": "4dec8288b50516d2287733c8cfe8423f",
".git/objects/62/2ea78c80e1d9166a108486c57e133ba312a38f": "b1f6976afc34a62fae1eabb864cb7f31",
".git/objects/af/94b240a522a10883277ab34bb598734fbdae0b": "d712b9f3a5382214501d625266a3c141",
".git/objects/e4/0f8f5922da8becb55f428ba02455ff46f5e7b8": "03dfaaf454884f5164f8000d12ed88e8",
".git/objects/e7/e2d142d67d98e6a152e984b818a14a249d5946": "bea7d6641c25c6af5d1c424d3279c2ae",
".git/objects/pack/pack-403a4138b533cd6a7abbd9627ac0edc4a324cf5f.idx": "aff392ad3b1e0feaa1da37bfdfc16b10",
".git/objects/pack/pack-403a4138b533cd6a7abbd9627ac0edc4a324cf5f.pack": "78e943faa9aa4cef0ffc7953c259ffd4",
".git/ORIG_HEAD": "d5a00c25de353bbdb3962cff6c12fdcd",
".git/refs/heads/main": "d5a00c25de353bbdb3962cff6c12fdcd",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d5a00c25de353bbdb3962cff6c12fdcd",
"assets/AssetManifest.bin": "6da3b5c910f86a4bb53d280c24bef565",
"assets/AssetManifest.bin.json": "4bb6d76e4c4c3156fd1376fb57480c34",
"assets/AssetManifest.json": "24058feacdf3aba55b66f9bf44c1f5ee",
"assets/assets/amazon.png": "7e2cd8a4fb2efc205402f408345ac4fe",
"assets/assets/bitcoin.png": "8227f2b9f0fcef8b588cecd9b1bcae7a",
"assets/assets/blakloopslogo.png": "5cffad2a01b723193acfabc234e16075",
"assets/assets/cashapp.png": "42dec4b15db727eedbb9a12c3f5169e2",
"assets/assets/ethereum.png": "e37e8eae3fc42945b7fd904d18ac54f2",
"assets/assets/github.png": "10e23ee28ee608d04400db5f2c6c0945",
"assets/assets/google_play.png": "ab52627976a306b03f02bfecada2b182",
"assets/assets/instagram.png": "8c91c23a562f41c56fad770aa56812ad",
"assets/assets/isrc_generator_logo.png": "dcfd5c25ffabf9e7c9475ef94687e2e9",
"assets/assets/litecoin.png": "1752b6f6b63f71a75bd472dabad939d6",
"assets/assets/logo_medallion.png": "0ccdfc66f9452c5629c5dc78e83d7113",
"assets/assets/logo_medallion_orb.png": "6a6050590b39c4c649133dbf6c2bf813",
"assets/assets/logo_medallion_simple.png": "73b7f834e75535247dfc3294142d9b87",
"assets/assets/logo_medallion_with_eq.png": "d6e487471608aba5de84346cd4ecbae9",
"assets/assets/mc_logo_white_500.png": "835778cf4df1da37af6f676551f35a35",
"assets/assets/sg_blame_3d.png": "ca377ae4cf94c3114e951f5aee8d947a",
"assets/assets/sg_death_mask.png": "5e045fa4ce69c99afee759914b9f92f2",
"assets/assets/sg_head_logo.png": "5a5c1003bff438cb98fbf6f30b197d94",
"assets/assets/sg_origins.png": "f722b4993b07d1acf3c9e8e4132d9d88",
"assets/assets/sg_text_logo_black_w_stroke.png": "434e496d4f0fd14f7df3742e1bf6bf99",
"assets/assets/sg_text_logo_white.png": "1f37fa8232219bf0bf11f1918934f4aa",
"assets/assets/sg_usa_tag.png": "52696d06065c4663a5eb53b943ca4da7",
"assets/assets/twitter.png": "69d4bd7aea0945ba7ff5e77d1752a5d1",
"assets/assets/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "bb9126d8df8fcaf67f3f3fd653bd48a6",
"assets/NOTICES": "9db7b58505979d9ffb52abbea1529943",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-144x144.png": "dff2ffaf19f3e06ed533e49e02aab91b",
"icons/android-icon-192x192.png": "292a04a60a14510a73f200ce090ce0d5",
"icons/android-icon-36x36.png": "48926c0b96d2a956219f9c71d6240044",
"icons/android-icon-48x48.png": "feb59359b137984f40b65e96cfd91cf9",
"icons/android-icon-72x72.png": "812b433690332709420bdf071f2823f6",
"icons/android-icon-96x96.png": "4cc6fd4b770bbb3530751fbf1fd8965b",
"icons/apple-icon-114x114.png": "00ee0100edbcc2ff84bd4ba4520c8036",
"icons/apple-icon-120x120.png": "3d0fd33e881ca31203bf6f86052274cb",
"icons/apple-icon-144x144.png": "dff2ffaf19f3e06ed533e49e02aab91b",
"icons/apple-icon-152x152.png": "9130b5323ceceb3372e97f88c6361116",
"icons/apple-icon-180x180.png": "571a87d134909062d3c9b08a2acfa565",
"icons/apple-icon-57x57.png": "374e37daa6813747e9d739d1fe9db59c",
"icons/apple-icon-60x60.png": "e2f7a188e4d2bbf054ce9c989faa5634",
"icons/apple-icon-72x72.png": "812b433690332709420bdf071f2823f6",
"icons/apple-icon-76x76.png": "506e4958ebb97821cbddc90cda399d9c",
"icons/apple-icon-precomposed.png": "d49bc32ee064992d85ffd2872a77d2cc",
"icons/apple-icon.png": "d49bc32ee064992d85ffd2872a77d2cc",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "d9674c2956c5003e21fdaf5f98275e86",
"icons/favicon-32x32.png": "dd2385e04c059868d8807852a87185a3",
"icons/favicon-96x96.png": "4cc6fd4b770bbb3530751fbf1fd8965b",
"icons/favicon.ico": "a4df298a406ee36cbf6895d4881ae6d3",
"icons/manifest.json": "179d3b87ee3733bab1aab10ff9e0600f",
"icons/ms-icon-144x144.png": "dff2ffaf19f3e06ed533e49e02aab91b",
"icons/ms-icon-150x150.png": "9e6b420548e618bd4f76977188b69673",
"icons/ms-icon-310x310.png": "17e0bf76bb3b823a1e659adc09c6e573",
"icons/ms-icon-70x70.png": "e336d14135b18893604baa5c900b880f",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"images/death_mask.png": "c0705a1aaeb0e83f09bc3c00fec60e38",
"images/sg_origins.png": "f722b4993b07d1acf3c9e8e4132d9d88",
"images/sg_usa_tag.png": "52696d06065c4663a5eb53b943ca4da7",
"index.html": "b4f94f59730c41b0d25fbbacfc59486c",
"/": "b4f94f59730c41b0d25fbbacfc59486c",
"main.dart.js": "68ba15b7f4187514e7fc3a44fac761b5",
"manifest.json": "f000aa3788c1a9cb26e3c7838a8eee25",
"robots.txt": "b8bfd6acacefecdcbc4e63c63f2ff814",
"splash/img/branding-1x.png": "b1a6546a211e382c20c4bf133dffa336",
"splash/img/branding-2x.png": "26f943c1616b77d4faaca5df3096a7a9",
"splash/img/branding-3x.png": "3db985972eeab6bba7a2d28b0b2f093c",
"splash/img/branding-4x.png": "301c5b2459cdc2580cb6b649877456fb",
"splash/img/branding-dark-1x.png": "b1a6546a211e382c20c4bf133dffa336",
"splash/img/branding-dark-2x.png": "26f943c1616b77d4faaca5df3096a7a9",
"splash/img/branding-dark-3x.png": "3db985972eeab6bba7a2d28b0b2f093c",
"splash/img/branding-dark-4x.png": "301c5b2459cdc2580cb6b649877456fb",
"splash/img/dark-1x.png": "3ffdb7c73eda7f48659364c3c3c4cbae",
"splash/img/dark-2x.png": "b8863b911ff45090355d98bcc012da1a",
"splash/img/dark-3x.png": "b14e38291e77ec56c993d53de7cf17b0",
"splash/img/dark-4x.png": "91ff030c8be9914763dfac276e9e6501",
"splash/img/light-1x.png": "3ffdb7c73eda7f48659364c3c3c4cbae",
"splash/img/light-2x.png": "b8863b911ff45090355d98bcc012da1a",
"splash/img/light-3x.png": "b14e38291e77ec56c993d53de7cf17b0",
"splash/img/light-4x.png": "91ff030c8be9914763dfac276e9e6501",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "962873915b7f18af608bfa3f86550405",
"styles.css": "9891ef353edf12299644d6ccf2b8d1dc",
"sw.js": "9b0068c1b95889eac908e61182c24b02",
"version.json": "dfad216ae9214819cf1a5c9115bed869"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
