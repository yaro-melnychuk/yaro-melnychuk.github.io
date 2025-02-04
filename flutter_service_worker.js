'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "27b444d5ac2266fe8248566d346e2c09",
"version.json": "70fa746c7d6f36b44cc4d18e998df6fe",
"index.html": "cce7f885808e386e3dc768ecd4285bb1",
"/": "cce7f885808e386e3dc768ecd4285bb1",
"main.dart.js": "947384dd77f30c82c21643f78577b2ba",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bcaaf8874108bd79c32f93e9cb137b2a",
"assets/AssetManifest.json": "cb3f7331e20ace7259a3e0c1989afc6a",
"assets/NOTICES": "73316747004321b943d9a7858ead0331",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "eca8da484f58d5eecae9aab4ca231c45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/alarm/assets/not_blank.mp3": "71ac239a121767241ccfcc1b625d44e7",
"assets/packages/alarm/assets/long_blank.mp3": "d632dd58e2137a2e67849c108d5eb4b6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "16de15166c9b33c608dae762b882601d",
"assets/fonts/MaterialIcons-Regular.otf": "8b4239d9de0bd725c354dbeca003eaa3",
"assets/assets/images/2.0x/image_placeholder.png": "653d7a942868daa316deae7b7ac8db19",
"assets/assets/images/2.0x/alarm.png": "1e41ebf4a4c5d04874a17c070efe7032",
"assets/assets/images/2.0x/notification_request_img.png": "5dfd8add71583964efccdcc98f335a11",
"assets/assets/images/image_placeholder.png": "69468ecc23e67d05e585ae3caf2d56d8",
"assets/assets/images/3.0x/image_placeholder.png": "97e08d6f00631788f37ef4c06892c64f",
"assets/assets/images/3.0x/alarm.png": "a8e356034b8c6c5b86a6fd6d9352cc2b",
"assets/assets/images/3.0x/notification_request_img.png": "a7966dfd0d8b41e7135d396d5fa42bff",
"assets/assets/images/alarm.png": "505875c71b595626c79cdae34c48b405",
"assets/assets/images/notification_request_img.png": "0233c88013e23ffea95355991af1f4fa",
"assets/assets/icons/alert_octagon.svg": "8122502ad680c5a52b5e24db1caca9e6",
"assets/assets/icons/clock_outline.svg": "31f7adedc2567e39a12dfe94d9d96bd1",
"assets/assets/icons/alert.svg": "943b73a3aadf37cb2209e5b9aff8b2a0",
"assets/assets/icons/arrow_back.svg": "0325ebb14a34c93876bc67821a82a640",
"assets/assets/icons/x.svg": "07856ba8a9270222aeb3dbd76ffd334e",
"assets/assets/icons/search_catalog.svg": "9a34f8df397644fcc653c91b4c0fd34e",
"assets/assets/icons/close_round_dark.svg": "fb8357886f1e6a9890058bc5e0927b2b",
"assets/assets/icons/chevron_right.svg": "386441229d4c0cbfd044e33f36280746",
"assets/assets/icons/plus.svg": "079dcc3d0413a3a6fa193ca1949f7c24",
"assets/assets/icons/info.svg": "16bc0faac9bde40b0e2dff8c11352323",
"assets/assets/icons/swipe_pin.svg": "04cec7d476a504e7e7dc3fa9dcdb5e5c",
"assets/assets/icons/edit_pen.svg": "8d6951c0dbeaf39478d8f09bb8abe046",
"assets/assets/icons/close.svg": "24f5ce493df9975ab70382c0b7152351",
"assets/assets/icons/edit.svg": "1075343baaac753b552a60b5783cab02",
"assets/assets/icons/next.svg": "9ff0bd0c47b3d66932bce7128ce0cf75",
"assets/assets/icons/checkbox.svg": "2be70be3427d07add289bd9707ebfee0",
"assets/assets/icons/monitoring/tracking.svg": "15214718762e8e1665a2e3865695a07b",
"assets/assets/icons/monitoring/clock_outline.svg": "3c93465c98bb8fbad26ba26a7695f402",
"assets/assets/icons/monitoring/courses.svg": "d9c68334a84f1331cce779a384e31c52",
"assets/assets/icons/monitoring/time.svg": "a5c31363d37e29f90aff8187500871be",
"assets/assets/icons/monitoring/bell.svg": "fb8ebb842c5430b1e96981c37a9b5a3e",
"assets/assets/icons/monitoring/status_unknown.svg": "954f41561efbb88d1c9e20779dc83c11",
"assets/assets/icons/monitoring/tablets.svg": "f9de5bb1a226c53d7d6a10c7f54eb4eb",
"assets/assets/icons/monitoring/injection.svg": "88364c780e0b1162f97d07f3aa6e1412",
"assets/assets/icons/monitoring/status_accepted.svg": "3fba73b5a6853d9202a6eb16674eda2e",
"assets/assets/icons/monitoring/blue_bell.svg": "4187ce1020287a2db952913122a8e36b",
"assets/assets/icons/monitoring/drops.svg": "47f0da058a95bc3147bb1e5e6c523be0",
"assets/assets/icons/monitoring/bell_off.svg": "a59e6401d9febb4798fe94f6296652c6",
"assets/assets/icons/monitoring/pill.svg": "6c2c8c8918ed9241c29826838c21734c",
"assets/assets/icons/monitoring/cancel_circle_outline.svg": "c5f81c3bf507dc91c019dfe11730909c",
"assets/assets/icons/monitoring/status_rejected.svg": "0144681fda2d076abc6cab3e4e9f2739",
"assets/assets/icons/monitoring/calendar.svg": "643964716fec549f7533c27859f5d92c",
"assets/assets/icons/monitoring/procedure.svg": "162e028e85d9962c7b07e70112cefa16",
"assets/assets/icons/monitoring/food.svg": "5a58970f00c73389730a6dcecb2d5469",
"assets/assets/icons/monitoring/alarm.svg": "70ad3d45e4bcc5688237b4735e75f96c",
"assets/assets/icons/monitoring/capsules.svg": "cde3856c5c0930de7dacb60c26642ea5",
"assets/assets/icons/close_round.svg": "ecea9f10d64ebe33977bc7f7e06e2a5f",
"assets/assets/icons/chevron_right_circle.svg": "fe66acc40cbcbe3bc9f656b2842da26e",
"assets/assets/icons/plus_in_square.svg": "d4db5eceed357d1861238adb5b110946",
"assets/assets/icons/minus.svg": "f4407264b698c798f635ba2ac7e9dcfd",
"assets/assets/icons/magnifying_glass.svg": "b96cea63730b9adc2cab4db5e8ea0d42",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
