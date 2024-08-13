'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f34ccdd769ebfe1f2cc2217853a01cc5",
"assets/AssetManifest.bin.json": "c8152a9536535d99bb235a7a35539373",
"assets/AssetManifest.json": "ef2dd81d6e4705c1ab7d0bdae228705c",
"assets/assets/qpay_logo.png": "366075c12f84b1662d251f0f8d864f13",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "8fa90675237afd7af8ab8338e346a749",
"assets/NOTICES": "17aef8765a8cab56dba9077fd8d77f60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dd08c5babaa927fe3b16af5bc983c09c",
"/": "dd08c5babaa927fe3b16af5bc983c09c",
"main.dart.js": "ab2823b9cd7f6ba6d2272d864d09c806",
"manifest.json": "a862515b0fba56ee0b4298b6acede509",
"tribe/.git/COMMIT_EDITMSG": "16ec07ff1a7451275f7286035ba8c84d",
"tribe/.git/config": "5775f2490b006dc5d3ee20dc396f84a1",
"tribe/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"tribe/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"tribe/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"tribe/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"tribe/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"tribe/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"tribe/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"tribe/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"tribe/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"tribe/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"tribe/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"tribe/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"tribe/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"tribe/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"tribe/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"tribe/.git/index": "6ae5f4dc1a235aa77edc7d0198511e07",
"tribe/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"tribe/.git/logs/HEAD": "3a3e656035de881389dcca81bd4c59f1",
"tribe/.git/logs/refs/heads/main": "3a3e656035de881389dcca81bd4c59f1",
"tribe/.git/logs/refs/remotes/origin/main": "ed1c8556bf6b5de92e2e8936637c54bf",
"tribe/.git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "cc729cbc1de09e26c8ac1c31cb284e98",
"tribe/.git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "3408db6561ac84daa2a07ff0a27ca057",
"tribe/.git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "d4cdc1b92918eaa2e09b3ddc32091973",
"tribe/.git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "08120f58862aa087df5ec7c495aca052",
"tribe/.git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "524194f0fb5c54751c7ae5482cc5134b",
"tribe/.git/objects/17/1ca0968ee157d4c3797072e8d2bbd3918d69f9": "b7f787c09d7a71f39f1bc83bb6ce87dc",
"tribe/.git/objects/1e/14d7d8a355c82359c1599d3707d7a8a391fb6f": "0c323b3f0d8863ac2e3668c20523c69c",
"tribe/.git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "d0fd8dae38f25b016ad3c97adc6687bb",
"tribe/.git/objects/1f/94fe876fd4dce3441d1f9a3f8e78d5a59890c8": "1f574c18797e49ef18b7adea761c483e",
"tribe/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "9fa371a1c5b7c62935038b95ef3ddb53",
"tribe/.git/objects/26/06aeaf76d4b87b843f267694191a6d87b796da": "f7374bd9530700402aaa55523ab099f7",
"tribe/.git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "f610cbe34ab930f142b6d073ab27deb5",
"tribe/.git/objects/35/7b70f758c7642b6353414c45003fca579d2afc": "097705b31d00d0590e378b1bd9329e02",
"tribe/.git/objects/36/04e6e8b76bead851be6ff78ac06acde45582a0": "f27cb2a4492979f6bd5298eb26fd0672",
"tribe/.git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "3cb0a633839c848c68e133ca7e318f48",
"tribe/.git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "707307abdda4f1fc08504b12b08018e6",
"tribe/.git/objects/3b/ff3b105a4ac78b481c4e6aeedfa3ecb97106a2": "19b5127e2d7bf19feb0cb2cae02621f7",
"tribe/.git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "cd09e4369341889fd3fc34d8dbc2a61e",
"tribe/.git/objects/4c/1285f7a7e83e44002a70f760728fa5a733a5c8": "22eac32894add1d7aa5b68d6c793843b",
"tribe/.git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "e3c516bd9ded0d5972f4e45be0b6f2be",
"tribe/.git/objects/5a/f0bbc161aa80765a5ffd0785809f6816f90782": "7109b926918453b7d835baae45736365",
"tribe/.git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "1f07953230fb06b91b96a029dfdcedf9",
"tribe/.git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "75fabb0279e894d6e8284fcb83093ec6",
"tribe/.git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "4216b7a7932a8475db6f7eea08b3cc22",
"tribe/.git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "2d2bdf59a2e4b0485d9cb0a96c246b66",
"tribe/.git/objects/87/aaeb0552a16c1629e9f5f29a7f6be41b257df1": "32500b5b6cd9ed1fc86100d259344105",
"tribe/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
"tribe/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
"tribe/.git/objects/8c/ef0b9168e4ada65f8d1c221b2fac2c0988de52": "3c4bd572daaa036dc26c7ab02de07d3b",
"tribe/.git/objects/90/31a42f81a3945cdf817d1fb3fb7c8601062ed3": "a4f341a7b99cd699a9c241fd8f41ec7d",
"tribe/.git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "6448e47fe7916870b05cec66163f80e8",
"tribe/.git/objects/95/192f492ea81fc71cba6769d96256a97d3a5b03": "6bfbd55bfadc947cf2b5971f4c7a1828",
"tribe/.git/objects/a1/a89c12f1d7b11c2cd31378a1ab8251ac95b0d7": "afe2deea3bfb779dc833d4d9a2143d24",
"tribe/.git/objects/a1/ac3be14563c86ef9e7ef7a9b1704cdaab950df": "0c28127b9fb3405cb8a529be49954150",
"tribe/.git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "9b40e743beff9e546cc99dec7511e63e",
"tribe/.git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "562b4691dbb70c6ac4c6280aa875e0ba",
"tribe/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
"tribe/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
"tribe/.git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "e1b2348eb33c03f0835c928d4c9b65f8",
"tribe/.git/objects/bb/04926f72a9c16cb5b34adb7bd38b659667a2df": "3364b46bba116003a159f45cc72ea2ed",
"tribe/.git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "6b778e1b2cbd2f0151ad9611b262c77d",
"tribe/.git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6060cb588c8774586304298a5710f1f7",
"tribe/.git/objects/cb/1cb5089fd6894e4bb3e3531d4a767755d0cbd4": "3faf2d16c27b78b76b861500d5247955",
"tribe/.git/objects/cb/afbed1408ec40e2a4da7a3874f42296954911a": "09dcf8272efe11e1d2b35f93b5f2327e",
"tribe/.git/objects/d3/4d143c912846708a40a365370a28b3a0c51fcf": "de88743fca7be824d506abebfc234b67",
"tribe/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
"tribe/.git/objects/d5/aebb3f5b322e81e82c3af3f6240605b2249c00": "6e233b8c1e4fb266b245f273626f33fc",
"tribe/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
"tribe/.git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "d81b43ada46dcfee422ae160ecdb6fb1",
"tribe/.git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "6cbd3a71d222403ccc51c3193c1c53f8",
"tribe/.git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "8819d39d02ab48574c6a82770a54e602",
"tribe/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
"tribe/.git/objects/eb/c3ed8c39824600d87dea00f72ba9bc9a81d6dd": "ca0f06716c976ff8958b9721666ced6f",
"tribe/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
"tribe/.git/objects/f7/6b05f504f378f8e8ceab09a88c0e028d61ce2f": "42c909eb213c93b5b3ddaa03f2aabcbd",
"tribe/.git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "076603657aed4a00b7c5336e20414d06",
"tribe/.git/refs/heads/main": "bf208923392e2065c9d1e45f2fac945d",
"tribe/.git/refs/remotes/origin/main": "bf208923392e2065c9d1e45f2fac945d",
"tribe/assets/AssetManifest.bin": "f34ccdd769ebfe1f2cc2217853a01cc5",
"tribe/assets/AssetManifest.bin.json": "c8152a9536535d99bb235a7a35539373",
"tribe/assets/AssetManifest.json": "ef2dd81d6e4705c1ab7d0bdae228705c",
"tribe/assets/assets/qpay_logo.png": "366075c12f84b1662d251f0f8d864f13",
"tribe/assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"tribe/assets/fonts/MaterialIcons-Regular.otf": "8fa90675237afd7af8ab8338e346a749",
"tribe/assets/NOTICES": "17aef8765a8cab56dba9077fd8d77f60",
"tribe/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"tribe/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"tribe/assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"tribe/assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"tribe/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"tribe/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"tribe/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"tribe/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"tribe/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"tribe/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"tribe/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"tribe/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"tribe/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"tribe/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"tribe/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"tribe/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"tribe/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"tribe/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"tribe/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"tribe/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"tribe/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"tribe/index.html": "ea379ecdf0bb4065d56b70da4f860450",
"tribe/main.dart.js": "c344657fae96d1990117a3404c4f4e02",
"tribe/manifest.json": "a862515b0fba56ee0b4298b6acede509",
"tribe/version.json": "c52343edf4b1932c54c00f0d64837a0a",
"version.json": "c52343edf4b1932c54c00f0d64837a0a"};
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
