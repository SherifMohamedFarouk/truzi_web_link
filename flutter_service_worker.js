'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"app_icon.png": "1ecb79a48acbf121aa8c274a2d18fc0d",
"assets/AssetManifest.json": "10dfd8832a70789bceb963b55562f3bb",
"assets/AssetManifest.smcbin": "b1055c03bc307d60023ad32dcda9eb70",
"assets/assets/fonts/Yantramanav-Black.ttf": "db9bf429e9ff134af63444e222b2eb9c",
"assets/assets/fonts/Yantramanav-Bold.ttf": "ef2d31ead84495c3afecba6847adfdce",
"assets/assets/fonts/Yantramanav-Light.ttf": "e7f65fcb5ebb73ea77160cc3a4b12034",
"assets/assets/fonts/Yantramanav-Medium.ttf": "c30b000de81d69a5ddc613a375b9476c",
"assets/assets/fonts/Yantramanav-Regular.ttf": "fe211ddc0f1b060d7632fb83756be113",
"assets/assets/fonts/Yantramanav-Thin.ttf": "18474f8b74da5aad380b239c6ebcd342",
"assets/assets/images/apple.png": "563110ff61d39c9e85afbf89a9f197b5",
"assets/assets/images/apple_svg.svg": "ccedf9d02225b5edc6328cac81fddd15",
"assets/assets/images/Artist.svg": "e0836e05b19279c219e42ec9bccca967",
"assets/assets/images/check-circle.svg": "b357c564e94ff5f482f0e2098d4e28da",
"assets/assets/images/Chosen=True.svg": "99db1db432dab6e33fbc044aef051129",
"assets/assets/images/Comment%2520Bar%2520Button.svg": "aad1b858edf23061a68b4a2524cd3c77",
"assets/assets/images/comment.svg": "db9df24969fd3d79509e97b0c0ab5fe7",
"assets/assets/images/Component.png": "447d64dfc186a6a259076df8a0f83129",
"assets/assets/images/Copy%2520Link%2520(1).svg": "b0c21de06c2d193e4c1bc8da60b21f5e",
"assets/assets/images/Copy%2520Link.svg": "a75d103de90de9ac66d187f75dc8687d",
"assets/assets/images/edit-3.svg": "01963ed69895a1377f9229517b73a58a",
"assets/assets/images/Ellipse%252036.png": "ed7e8cc0eb62218abd23c6d037d75933",
"assets/assets/images/events.png": "b51b2d96d61e3f8423e4990de8fe281d",
"assets/assets/images/events.svg": "be299f763c318e2f8b2f3b684da4fef1",
"assets/assets/images/f.png": "a502f7b1162aa733b25a4ee02b8392b7",
"assets/assets/images/facebook.webp": "386207bf496dfa905c900ce297cbc26d",
"assets/assets/images/Facebook_f_logo_(2019).svg": "ce0c8188520a88e43c81e611847721ac",
"assets/assets/images/Filter%2520List.svg": "f8414cbda8579f876f721c22f5ed54e3",
"assets/assets/images/Frame%2520(1).svg": "c8c82270f649bef03d5e472aa1f3884d",
"assets/assets/images/Group%2520257.svg": "c2db718c8ddc7fb978b773744ee169ce",
"assets/assets/images/Group%252058.png": "7dda05664c2630b622a3473404103065",
"assets/assets/images/Group%252065.png": "530a07cb703d788899bd124b63ff62e0",
"assets/assets/images/heart%2520(1).svg": "937a5cc6ab3c822c996375390064819b",
"assets/assets/images/heart.svg": "52896dcc0cb721bfa859b5b3dae28736",
"assets/assets/images/heart2.svg": "a39616eb2cb918faff482a7670df7dcb",
"assets/assets/images/home-check-circle.svg": "0b1e5791af01dc8beae96da0ec017ba2",
"assets/assets/images/home.png": "542ffda562d9f904fb1130376098d0f6",
"assets/assets/images/home.svg": "a73c6d3770a46db5831bb420893b806a",
"assets/assets/images/Horizontal-logo.svg": "7d6b91f422d1e6954b05e0b39c1b232c",
"assets/assets/images/Icon.svg": "a781b09661bc6e576ac97b3b84080396",
"assets/assets/images/image%252023.png": "9e8d5cb4d76ec0be0fb8e01569a2f267",
"assets/assets/images/IMessage_logo.svg": "f67f609d0e00a7d2118b4cac853b8c15",
"assets/assets/images/layers.svg": "0904993e84a1cb98890d998656cee4ac",
"assets/assets/images/logo.png": "4efba1d38e009b41b08a07826bc37e5d",
"assets/assets/images/message.png": "31f07a35a32256b6244ad31c723a5f8c",
"assets/assets/images/messenger.svg": "57c36aa8ae57488aa8e87fca9d35c1ce",
"assets/assets/images/More%2520Share.svg": "53334f44aa9a958959c6a2a7981478c4",
"assets/assets/images/more.svg": "fd3fa937c3d621c7cce8d20b2b431593",
"assets/assets/images/Multiple%2520Choice.svg": "4f432ad9b9cbd020f616b71540ec585a",
"assets/assets/images/newSplash.png": "2eb7021e8583bf49fff67a7f06c54fd5",
"assets/assets/images/profile.png": "49b68d1c8de0a9a36d4ac2a081ca05e7",
"assets/assets/images/profile.svg": "1505feed30330a0f01c69ec93e7fd3a5",
"assets/assets/images/radioBox.svg": "067fd6e88cda9d6f3243c57491100775",
"assets/assets/images/Rectangle%2520first.svg": "3d045b79417c0d6a36957ba231e5ad24",
"assets/assets/images/Rectangle%2520second.svg": "3c79218796d6d0bf6fca7c19f9ce34a0",
"assets/assets/images/Rectangle%2520third.svg": "9140f74ede0c295b43c5b09ab0746e87",
"assets/assets/images/Rectangle.png": "eee63fa6dcfe0c1ddf0bcb93364dacb8",
"assets/assets/images/red.png": "f828d385a3eb4537d32c213dc5d14d73",
"assets/assets/images/Reorder.png": "a51208f56ead50690fa76fb66fa2de2f",
"assets/assets/images/Reorder.svg": "1c43d04293032e09417cdf2111957117",
"assets/assets/images/Search.png": "46dd66b0dec1cc32987a06c7794f628f",
"assets/assets/images/search.svg": "16ef270de70223ccc47927978b7f6dac",
"assets/assets/images/searchIcon.svg": "2aa0457bb605fe2e4fa99de9fbe9657a",
"assets/assets/images/Select.svg": "89a65346b465b22a21dd0b4cdabe2c60",
"assets/assets/images/Share%2520External%2520Button.svg": "a827a6b7127db49db48f031ddec5f847",
"assets/assets/images/Share.png": "fe29739cb50411860e6ce9a9360602fa",
"assets/assets/images/Share.svg": "3190203109f60a96dc6b91398d09411f",
"assets/assets/images/small%2520logo.svg": "f071842ccc453d6dfa0ea6c4563bf287",
"assets/assets/images/Snippet%2520Selector.png": "f46f8e7305588786e8b08a2cf7cf588c",
"assets/assets/images/splash.png": "264c03cfaf96ac516f2d6ec3d8c4beb3",
"assets/assets/images/spotify.png": "756d6669fac73eaeccadd21387042bc4",
"assets/assets/images/spotify_svg.svg": "7d55b276a5fb584b5f8d7a1ea032bc13",
"assets/assets/images/Subtract.png": "d7e1db93f4ae55ab3d461fa9f074bd37",
"assets/assets/images/test.jpg": "4eb320cf58f320d2a5a2cf69cc709b8d",
"assets/assets/images/user-check.svg": "f3ca260f4043540221800c6e1292e12c",
"assets/assets/images/user.png": "23e89ae5d8d771b4b9850f91079f47b8",
"assets/assets/images/Vector.svg": "0247d642f8d6299aea98dbe318672b85",
"assets/assets/images/Vector2.svg": "fa2a6bf0047566a1f352d7d18ce95dee",
"assets/assets/images/Verified%2520Indicator%2520XS.svg": "0f7077a91e55d691f6e136364939ad6c",
"assets/assets/images/Vertical%2520Stack.svg": "6d132f2925e4f2d36402adc2363bc0a3",
"assets/assets/images/Vibe%2520Check%2520Indicator%2520XS.svg": "e8efa6aa3eb92038858802e367fcfac4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "ebf7a72a0b4180c7b7a8ef086910348c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3dfe76403951a91fd14c94e29069dc9a",
"/": "3dfe76403951a91fd14c94e29069dc9a",
"main.dart.js": "39d46783653d862855df63b3a54f94d5",
"manifest.json": "ecf33eb79a2b6a053b22e16b83923690",
"version.json": "d8d7165ef93a1c6faca97bfbd816cac5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
