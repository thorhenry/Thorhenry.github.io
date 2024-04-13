'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d5757c48c1b87f5d7f4f85210d67f5cf",
"index.html": "e250381e064f466bff4db1de6cf95f5c",
"/": "e250381e064f466bff4db1de6cf95f5c",
"main.dart.js": "57973bfa234ec4131c4a8cd86230189f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "687ebd653f8e59fb259aaf1149c5db33",
"assets/AssetManifest.json": "bdfcf59edd083f736ad10516369671f9",
"assets/NOTICES": "a97226875a42eb8d817c1d3107bc390d",
"assets/FontManifest.json": "4f271a1478aaf73157d28a50c93fb67a",
"assets/AssetManifest.bin.json": "915897a3f0514743fa139bf2588e3518",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1a8b147bbf4128c562f6002b5b15c0f9",
"assets/fonts/MaterialIcons-Regular.otf": "66b493e6f6c0353e115964b98d08a90b",
"assets/assets/images/fc5.jpeg": "0b9cf5904cdc68441bcd8d86f72aba5e",
"assets/assets/images/p7.jpeg": "a6aad0b3fadb8ada4f866620dcf7dd5d",
"assets/assets/images/payfast.png": "0820d397863f660b43b0892d7e2e7aa2",
"assets/assets/images/iyzico.png": "d7cc3729091e2d76610ed11c295151a2",
"assets/assets/images/b3.jpeg": "998069a5d840f191f534bd2a1d7fd6e5",
"assets/assets/images/fc9.jpeg": "49efebdcc8a98b54f420891fe9640935",
"assets/assets/images/payhere.png": "5b1d1c35242cf6490a2b0cd03bb15574",
"assets/assets/images/peach.png": "6416b862d62123ec4d0cb0d85f017022",
"assets/assets/images/shoe_white.png": "4d817b381ba82d63141b44e8655c4631",
"assets/assets/images/rave_payment.png": "8125ba7d026b8785295a818e2194f838",
"assets/assets/images/wallet.png": "2fdf2d8ebb9ce7320200e8ca6c67a452",
"assets/assets/images/profile_image_joya_ahsan.jpg": "59385bb2686c9ff6b76a837459c89f8c",
"assets/assets/images/instamojo.png": "7390800ab4ffe80b29aad0905057d2cc",
"assets/assets/images/fc8.jpeg": "bf40f81e8099034fa797bee582cf7b86",
"assets/assets/images/profile_image.png": "6680ff70c1b77524a6727ef109fc073f",
"assets/assets/images/greyy_hoodie.png": "32c5af6a179498e7048a293fd9fd6750",
"assets/assets/images/b2.jpeg": "9878bb4a7b9dfc970baeac28c5d1fce2",
"assets/assets/images/long_sleeve_black.png": "1893beb635eab6138a89a23c95106d28",
"assets/assets/images/p6.jpeg": "445de94c27f3acfa81595892895356e4",
"assets/assets/images/purple_hoodie.png": "e1112132a8ba784e93b903691aa9dd88",
"assets/assets/images/banner.jpg": "9d64fa9bd8367cbf1d2f4ba44b72bff6",
"assets/assets/images/fc4.jpeg": "55f2936ca8452dccdb337baa48133ae0",
"assets/assets/images/yellow_hoodie.png": "f5612f0d095d2a59dbca5ecc7ff5cf9e",
"assets/assets/images/ss1.jpg": "128cf1671aee84eddc2f85d59b638258",
"assets/assets/images/s6.jpg": "4e7d7b950087a2c0a41dc4d933bd777d",
"assets/assets/images/brown_hoodie.png": "4820fcb9465cfee6df4cea2ece21a8f8",
"assets/assets/images/slider_1.png": "f83edf5411e1438c2b3e8b08fe78d664",
"assets/assets/images/b9.jpeg": "30bb0fc8eff3a957898f8cecc364d6cd",
"assets/assets/images/pant_black.png": "7b47296fb33b94a1a68e2f741f75a48b",
"assets/assets/images/s7.jpg": "0bbf062022b865ea6963a7cecf45207a",
"assets/assets/images/s12.jpg": "956a8c2417341ce31b79f7b1fddc987a",
"assets/assets/images/fc3.jpeg": "0f1755f32625e27bf333a24c5d261ae4",
"assets/assets/images/banner1.jpg": "a0cb493bcd4a1afc94263c8c0dcd1d2a",
"assets/assets/images/ss2.jpg": "262c87893c0dfa72a00280a40411d2a3",
"assets/assets/images/s10.jpg": "161cb77dc5ff53676435c447dc253749",
"assets/assets/images/blue_hoodie.png": "193ca3aae75ce6d6578fe8929bb75ae5",
"assets/assets/images/s5.jpg": "58ca061c8211e5b2e1211737370debfb",
"assets/assets/images/p1.jpeg": "5e7b841ee9c0620b46d8846438746015",
"assets/assets/images/amber.jpg": "d23c77b8fbcc5ceb05181d990ca5c13f",
"assets/assets/images/blue.png": "5c4c8424e37994cefddabe6946a6a4da",
"assets/assets/images/slider_2.png": "27ded375b9e638d1179bc93d876c9e25",
"assets/assets/images/slider_3.png": "2022bc9a7eb3edf8fd0d140c40c7c821",
"assets/assets/images/b5.jpeg": "736f9e14e2c0ffa10d6439ac7140a217",
"assets/assets/images/s4.jpg": "3a4c2dee89db7dcea19a6f1f79b134f1",
"assets/assets/images/s11.jpg": "3dcfa39aee749e877d686e13a7014646",
"assets/assets/images/ss3.jpg": "4e368ccdb742e461aef56d619c86f2ec",
"assets/assets/images/banner-3.jpg": "ad331f747e02d7496ff835f82d592714",
"assets/assets/images/fd1.jpg": "9c17f577f8ec454f3ded288448efa8be",
"assets/assets/images/b10.jpeg": "27f706fbe426c4306fbe25bc2162655c",
"assets/assets/images/cod.png": "3be9f519c35131870e88d48b98f01d12",
"assets/assets/images/b4.jpeg": "a7eda1f31fa00893c7b71bc4d50408af",
"assets/assets/images/umbrella.jpg": "b780340b86cc6dc3a99f62155ef44fb9",
"assets/assets/images/s1.jpg": "ae5452171ae1cdd42d52df2209b22fa1",
"assets/assets/images/fc2.jpeg": "f631554b54ce01f9b1f6a4ea4ea648c6",
"assets/assets/images/banner-2.jpg": "d64e470d38539ceecf9c90c26293ddb5",
"assets/assets/images/fd2.jpg": "620d32f3b0a289e329acc1dd8791478b",
"assets/assets/images/hhh.jpg": "ab96e62c3a18ae4ec039643316710072",
"assets/assets/images/ss4.jpg": "03661f6eb1c6af45d3b0e90d38c6eea1",
"assets/assets/images/s3.jpg": "791552ef6230ffaf99ad161be627ea08",
"assets/assets/images/b8.jpeg": "a0fab189a8e05bd7fc2fbe68f7394160",
"assets/assets/images/slider_4.png": "4c9bebfd09a45586911837f6337e032f",
"assets/assets/images/rozarpay.png": "e5a527dc341d45de0a0f257fa3dc89c9",
"assets/assets/images/s2.jpg": "349937ac2f943f9c3434904c2510baac",
"assets/assets/images/fd3.jpg": "2573072cf9873e2531157b97a54a5697",
"assets/assets/images/banner-1.jpg": "8aaf4df4217b6426ee1a7a58f7162393",
"assets/assets/images/yty4.jpg": "51275a548d573c099799b580ece3d93f",
"assets/assets/images/shopping-bag-icon.png": "fb0c4a6fe30c55fe7df0dc58f3e7139d",
"assets/assets/images/ytypeach.png": "66bac207e18c4faed8cb0863376f6309",
"assets/assets/images/flutterwave.png": "45389f15bea82ca1deacc8b111767de0",
"assets/assets/images/b7.jpeg": "d7698ebc4bb105b9477b6fba31472065",
"assets/assets/images/ngenius.png": "ab7a1addc41692e396d7622cfccb9561",
"assets/assets/images/green.png": "684b11e9c0790901ae57909d7dc39380",
"assets/assets/images/shoe_black.png": "aaca5bf3d28b1d82247339175f21f677",
"assets/assets/images/p3.jpeg": "479ad49813354d66b91289cdc239ec56",
"assets/assets/images/fc1.jpeg": "f2acc722e23b48edec63342844db3fec",
"assets/assets/images/grey_hoodie.png": "4526a22f8ec290348948c1c42e612e86",
"assets/assets/images/yty2.jpg": "6f805c9f53af81238195557f39a333e8",
"assets/assets/images/s9.jpg": "c19425625ca318cf1aa18f7294d7dc7b",
"assets/assets/images/p2.jpeg": "1a7b05fcebe1760606af9e8ddb8db78d",
"assets/assets/images/IMG_5713.jpg": "30cbc4ab0969d4ad0c3078008a0e04b9",
"assets/assets/images/b6.jpeg": "5519048c28288b59c31b817d0fa31382",
"assets/assets/images/s8.jpg": "beb70b449800dcd5b9c19973435725b1",
"assets/assets/images/yty3.jpg": "14484eb94a6fe64f735321dd59577b8e",
"assets/assets/images/cap.png": "255cfc55022f1071d216d64b0d993bc4",
"assets/assets/images/ytyyellow.png": "219725042d019b686934490a8e5153a4",
"assets/assets/images/yty1.jpg": "42afb796ba1c2c2a75dd16d9a6e1b2c4",
"assets/assets/images/paystack.png": "adcf537bb57baf0bd174a1ef6fc4a718",
"assets/assets/images/paytm.jpg": "1253980777fce12b34afb5191847b122",
"assets/assets/images/vogue.png": "c2d67eca49390c1b327362ec6e2f403b",
"assets/assets/images/sslcommerz.png": "b352c756ff64fd88919d7d862dd505b4",
"assets/assets/images/b1.jpeg": "2a0b25e55d4d0cb49674b4b7e9ebdbc3",
"assets/assets/images/pi6.jpg": "c7004b48ec07a2ac458347f87a7e43b7",
"assets/assets/images/blackytyLS.png": "a62cef7f181dd8bee6777e8aa4c58a1a",
"assets/assets/images/p5.jpeg": "0ff9a98aa9ea502a0865481d78b302a4",
"assets/assets/images/green_hoodie.png": "f55c857820571eadcac2adda122fc3f6",
"assets/assets/images/sweater_shirt_grey.png": "855457b1fbd007a75bf92ee5660497a1",
"assets/assets/images/whitt.png": "b3a0fde110a05dd050610cc1b9035ea5",
"assets/assets/images/fc7.jpeg": "a6cd0503536f738c55d7c07c8ccb18b9",
"assets/assets/images/fc10.jpg": "4c294f548682b37a26e34d70cda874cc",
"assets/assets/images/umbrella1.png": "805763387538bafb87f0ec30bd0af99a",
"assets/assets/images/pi4.jpg": "1f48087dbd66408427c2871ffcd6d57a",
"assets/assets/images/pi5.jpg": "2987530ec40b529ef49de618e0b094fd",
"assets/assets/images/stripe.png": "1584ebfeb49e14480e8eaee14758be31",
"assets/assets/images/paypal.png": "0f00c201bc4f9e6e21ac2ea0607a9b46",
"assets/assets/images/pi1.jpg": "56fddab37aa4adb432c581ce98f0b769",
"assets/assets/images/mpesa.png": "276dd37a2417282bbe709473b726f009",
"assets/assets/images/save.png": "0873c46f35578b13f0cc26b2fb014c68",
"assets/assets/images/fc6.jpeg": "77bfb850b4d34990987548076ffe4e30",
"assets/assets/images/p4.jpeg": "5cfdeb53e3a4bbaa23fc23ce75d3b6d6",
"assets/assets/images/pi2.jpg": "c84f3b75045e4c998c47bbf3c1d53587",
"assets/assets/images/bag.png": "2d20edae0427cbdf04ba220ef55826f6",
"assets/assets/images/red.png": "6a4fd0e2998c0ed69162c09507725743",
"assets/assets/images/pi3.jpg": "249f08b016bd086067799d471a326d43",
"assets/assets/images/purple.png": "94dc6909eaca74a99161c5858c55d270",
"assets/assets/images/collar_white.png": "3545eb6c259e02d5635be54752b7f4cf",
"assets/assets/images/twocheckout.png": "6231758df8daa10d3ecfe8005cbca237",
"assets/assets/images/blackytytshirt.png": "bd5a5e6a118dafcaafcb16d6b0beae8a",
"assets/assets/icons/favoriteseller.png": "d8b6fac18d053ec00873c66d150d8d96",
"assets/assets/icons/add.png": "ac37821b1be524a375b9d04f511c16f1",
"assets/assets/icons/plus.png": "042954477fb46729980bb2eca0ac2e9e",
"assets/assets/icons/ytybag.png": "7fb3ada9c73b7c63eff33074e32c6819",
"assets/assets/icons/clubpoint.png": "c320ea241a01682c5e0a4ee2f4afe4c6",
"assets/assets/icons/brands.png": "d85019b02f84ae1577687fae4e1d843a",
"assets/assets/icons/todays_deal.png": "c798d81c6d67529ee284b9331c6a85e2",
"assets/assets/icons/refund.png": "1d98ce7706455927116746d6009c4c20",
"assets/assets/icons/campaigns.png": "8e63abb3cc43572e841bb23d14743362",
"assets/assets/icons/bell.png": "1a1be341ea030918e6cbf996f5cf51a9",
"assets/assets/icons/wallet.png": "f5ea00f3e66258407fd3de7e088c7fc9",
"assets/assets/icons/login.png": "6c7893480109324093f545ff19097efe",
"assets/assets/icons/o-hamburger.png": "75540fbab9b867af5542e3173c23389a",
"assets/assets/icons/download.png": "50dbf0c281bcbb8d65714c84764073fa",
"assets/assets/icons/cart.png": "90b3e501aa1111ba852f6fd43ad64a55",
"assets/assets/icons/ytyshop11.png": "50ba0e290af41c3696a59ee5755bb32e",
"assets/assets/icons/apple_logo.png": "ea25af9fd9fdcadfa92a4e2a3155d491",
"assets/assets/icons/facebook_logo.png": "33122dd8eb260b9331c75dd5096852fe",
"assets/assets/icons/order.png": "4268c502251ef35d24afc32892de5ef9",
"assets/assets/icons/logout.png": "8c7b7b1ae8a3d6d6b43315e45840c5e6",
"assets/assets/icons/wholesale.png": "d0bb0f2ceea25aef2704516d6893a237",
"assets/assets/icons/home.png": "82b15439ecb4d4a776836d6d16f87d8b",
"assets/assets/icons/shop.png": "170ac8257dcd4b2622ce8a8f37ea2921",
"assets/assets/icons/arrow.png": "9e26b92eab0f00359ba8ac023dcfecd2",
"assets/assets/icons/twitter_logo.png": "4523220a9a83756e427015f83663f009",
"assets/assets/icons/splash_login_registration_background_image.png": "7fd62d66f6ca61185880ff80b00f0eb5",
"assets/assets/icons/search.png": "c7cbc84f63ead800deb77cae175a1b8c",
"assets/assets/icons/placeholder.png": "4ee9d2e7f0e4ddc539dfb8c1b8ce5baf",
"assets/assets/icons/heart.png": "2ff2d5c3ea1b82f37a4d9d3f8c2794b0",
"assets/assets/icons/minus.png": "870a335bb675505e1f888f1147bb1d02",
"assets/assets/icons/white_tick.png": "4fdeadb857ec534766eac21d7d3de881",
"assets/assets/icons/top_categories.png": "f390e29b08742ec060e6e190ed200595",
"assets/assets/icons/blog.png": "74827b65be30da2731a5ade9f7241d6a",
"assets/assets/icons/points.png": "82988f05d354341ebce130b6cae90ec2",
"assets/assets/icons/google_logo.png": "172e9ccfd77faf97892546b5192c398a",
"assets/assets/icons/twitter.png": "1ff6f3490d794d55a729437315ea22a1",
"assets/assets/icons/yesu_tela_yoo.png": "0b381fcdd4154a20d50c8797b5d45c46",
"assets/assets/icons/profile.png": "531bb1c7a7dc201d1e77e8448358812b",
"assets/assets/icons/yty_shop_logo.png": "51bdad8b8b2a4f4f9b354cd9d866f358",
"assets/assets/icons/square_logo.png": "94138d75ae14373f4b5a6b7875b45f06",
"assets/assets/icons/headphone.png": "43015d0091d19bc188cd1da31021a5a9",
"assets/assets/icons/app_logo.png": "8ec367980396b897863dd84b9e0edbf6",
"assets/assets/icons/top_sellers.png": "d1ba492409bd709c2a7784360a5a10f5",
"assets/assets/icons/edit.png": "145c3c063e8f174a4635ea3a59095e85",
"assets/assets/icons/trash.png": "22c33a5ddb5a72c989f04dfaf74d8191",
"assets/assets/icons/categories.png": "3ee9b41a7bddf1e8bc86548f97f73358",
"assets/assets/icons/more.png": "28cb68b300f86edd0e914a019d2adda6",
"assets/assets/icons/google.png": "e005fa3092058d2e8e44ec7c7c9cbcda",
"assets/assets/icons/facebook.png": "af6c9c7d7e45a5cdaa2b97b669cea50c",
"assets/assets/icons/changed_password.png": "25d6dfc9bf591a069c939baab1f48e8b",
"assets/assets/icons/chat.png": "e81525480b3e390aea3314342d209574",
"assets/assets/icons/coupon.png": "3eee47933233d898ead37345a5234104",
"assets/assets/icons/messages.png": "afa97de9ae5709842a30358c59ef2fba",
"assets/assets/icons/placeholder_rectangle.png": "a364b79d7d4ec9f2193789116a80819b",
"assets/assets/icons/flash_deal.png": "bc0457f5e61c228f4fc43ba5bd3e11e2",
"assets/assets/icons/bg.png": "13037d551d4b5dead90b84879e33cfcf",
"assets/assets/icons/orders.png": "3639b858d6c5730b8e6705b62324772c",
"assets/assets/fonts/sans_semibold.ttf": "ae9703e4b4c70169e32fee2647ddf51e",
"assets/assets/fonts/sans_regular.ttf": "d2d3b740e46522981f945573253b0a1a",
"assets/assets/fonts/sans_bold.ttf": "e2ebf780f846271f822b52d26d24af1d",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
