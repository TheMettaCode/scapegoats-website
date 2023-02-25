'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2b59ebf070f3f1e3de3d98f6dab5df3e",
".git/config": "9bead089c4c4df829e6f62330fc656b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "182a0d20b1db33039461d88be2d77b4e",
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
".git/index": "1728b5dc703f41dec246e4220e98aad7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "26f5e26ae3a186d471a015f4f8263343",
".git/logs/refs/heads/main": "26f5e26ae3a186d471a015f4f8263343",
".git/logs/refs/remotes/origin/main": "dcd49d9a56a5b6514932659a6a9df2bd",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/07/356d02274e153629013dbf5b38d4f63c7f34b5": "f64d606ed941f35d968c4332fbec70dc",
".git/objects/07/4c16de5d99411b826718311ccb05e01f8207d5": "9135058d5726202824626dbba13dc600",
".git/objects/08/57af46817ff77eab1681c750e3502c14cb98ff": "e6ece19914a5ca3ed7e2acddb1d8acd8",
".git/objects/0a/c02230b9b9042d171d6633aa55414b3846d674": "ca42ef5b7e3533c82673b5fe6bcd28c4",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/0076eee41ddfefaaf7587d7287659e501af1c7": "6093634a9c15f597f24415885fad78fb",
".git/objects/19/0397d22c5746ad9676ab4ea330d73d94f75fb7": "b4dd3e42de1711fb35743e1090a65d24",
".git/objects/19/876f2a56b38ff7ba4722264f3e4cd2fd0f6bea": "3cd7d07c52f5d9cd35072f4843bdc3a0",
".git/objects/1f/3fcbf28ba3f89afbcbdcaafa616ea68f8daa39": "c9cdf5f17288c0a4456ae7a82d533e64",
".git/objects/20/a30de155c548c211d0b8c2ca0ceb37dcbebf27": "e6f00d81a4ab94d174d296928486c4f6",
".git/objects/20/ffef28e5acf0a697135ef6c623716d247d9af8": "057f0024ae6f7f5693b241f34eba23e8",
".git/objects/22/2c9d64249d22b647c5174fe801e483a3b593f2": "f42d5139e532cfbd5f2409b448b484c6",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/29/322d046cb5a73c092f3538b6a2c41122dda6bc": "09c60121303e46c0325266942d144de2",
".git/objects/29/d07679d577833f1bbe8366672024fcf78af7fc": "a8b852c154255dc4730e0cb714f413a8",
".git/objects/2a/742f4d2752ffb0f38499512d05259862c9d82c": "52219362d89db9039fbf870024adc154",
".git/objects/2b/9b134397af094a8c8e5f885610fbf369b27983": "613eef5e6cc779b4f0a5a1bb3a1be4ea",
".git/objects/2e/1abc7682f99246637d09200bed39ebb032de34": "577c42490374bca3fd436eb6ebe2e94c",
".git/objects/32/89f068a311b3d6c1a3c0ceef4ee5fee14a0900": "2d76f1dca097917a942342ad240aab15",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/a1da2e2d8b0f5de4973ad9e9f31dce3d381b12": "b3bef1a986ae90606853caa786bc448a",
".git/objects/3b/1f9cb6e74f35748e5dea6e76c7cd1d039faaf3": "9927c6ace59b835765d149e293681cbf",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3d/dcc01ff50f647d6df8fee4e8fe86b6a2a4f6de": "bf0411d035bb75cfd9de7634aecfb3e2",
".git/objects/3e/e8888a249ed2dfe15fd3898cdd64d75994a183": "a9edf644befe01212c3572177148bef6",
".git/objects/41/03f09544bcaa8a2b0dd053d2abfb55ccafea3b": "816aace708e007f194b404e1efabacd5",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/de816c08595f6ab22fef76385c78d74d2621a2": "ef3869a30db706dedc382017ea2cf707",
".git/objects/42/e6bbc2b5a7c4df67d3d41790f39d849f6f2157": "90cba139e1a80a2a4d81027e829c349d",
".git/objects/44/0a20285315676ca56a8a239b27589756cc3538": "dea2cc98b36804f86ee6d87ef6938577",
".git/objects/44/43c35a594c84f1d917854a0985926d2e6ab295": "c575d7671ea50891821c09d0f4d1c643",
".git/objects/44/7b1b235771e2e2e78dddda5c4c6b29d1eea55f": "5ac0adbaa315ba8600ba15133387e1cd",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/46/0d69b767c73df5dc442e7544cde0a52ce0b810": "f7cba7ee0d2ae47149d81e1476ff201d",
".git/objects/47/64d6d391e9c74fe61bbdf95540b9b6c194b00a": "99e0a485add538876f798753f14d5a62",
".git/objects/49/7e426fef91e1708bd8696ee3c549d260465128": "44f23fadbd28e5960f3ea846b424d815",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/d7fb4cc22f6a8227d102d47cf65f3898223528": "bf835330efc19cbc697a52f0a36bb641",
".git/objects/4e/2f4c8bfb1eebaf939a1bfea9a669a5125ba795": "ac4f24cfb1af72ee19857c4a8071b447",
".git/objects/4e/98f42915c54ca52d53080045a26737f331fdd8": "9216b4903293179c52a8acdea28ba922",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/54/03730b5345c26c7c75a54752b8656a59afee36": "4843e246b841ee40ad8986689cad416e",
".git/objects/54/d24e515d8c1d92a26c50ec7192db91d0ef2930": "00f8b17489ce3f11e7e5b5e996dae65c",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/f5e9da023c7c43fd53ae3343855c2dea73460d": "520b842feb3150522487e9efc3be818c",
".git/objects/56/afc394d20d99653c1f1ac716e6251b8fbc9586": "012a1d61e13a2d4f71e06e9e2b1470bd",
".git/objects/57/bf920ac6218af1fabc3201748e06539ca4ce68": "81499ef3feb0d2409fac268a5c592591",
".git/objects/59/bdde9584a20d1efd2db8594bfacca9965f8efb": "6e2e88ac0ff57ca707c00eb6cd991ace",
".git/objects/59/f78a63727973700ad4ddb89be734ee34f64d58": "a6bb4443b31a1ff875d7299e3d63aa25",
".git/objects/5d/d83057af4089aa6fdefb9ae2db6fd2dffd3eed": "73971b1a7f8e01240cffdad3df0ce300",
".git/objects/5f/b06239435e334d15ddbe56874fd9e466ae0db1": "d2dc691312acd22001f679d4bfca03e8",
".git/objects/60/e32b1cb6282e4cafb894665368419592c7c7da": "d11f32dc331112bf03b9daa9d3994940",
".git/objects/61/e19aad9a922e7cf6e429bc0d65bd040be204ec": "d1be02c095a3563c17e90ccf7eacf4ad",
".git/objects/62/420070826eedaf66334d1cf369766d319143f8": "fdd7d86a3c85892ee52426115be56837",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6e/9bd42b4706bb7cafc5e66c9817d3e90f7698f0": "04e6cc82e800683d1e169347e4d201a6",
".git/objects/70/f225a5403396580d225c77be47828117cb210e": "e6386b605be11052a0dcc4627a9eccc1",
".git/objects/71/917b6ef3125734052cb36610fbab2bf429e774": "50b1de035a309b35e37f24ed283dda9d",
".git/objects/72/6b136410713ae503bd050f064f87e8c851a533": "c0470f011887fe2fbb3741256d403cae",
".git/objects/72/731e856bbbadc127039c870d01a34aac1b62ae": "97884de637f072a16c49bc3f9c9d470f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/50a1d5c85f7419b6ffdd9e1a782cb0f174abf0": "9cb91babcb5282eac10fd5654ae75e96",
".git/objects/74/8d2315002dfcb4266e45c52672b64f0a0d844b": "86dc4081dd11d985663ce45b45ee7a1f",
".git/objects/76/21116e38ae3b9256bcd89953d234f1dead9819": "0e92c07a698481d971b94b61c93dde14",
".git/objects/78/df43e58124862ab856106a70dfad8dfc1dfdee": "ccb0265bce68522f37481d05e354acdf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/d652eff9e23523e7bad88a6c2f9f3cc8adc899": "a33285bc333ec8812780f178865b2ce9",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/8a/849a24626b6ac6f4a92d13a00e1f1ec3d0f454": "0cb5bf1c3d7713b035c6816eedb483cd",
".git/objects/8a/eb0a00bfa27606ceba0521a1f5dcee6d5d54df": "3bca55dd2de9cc7457c5c21069677b4a",
".git/objects/8b/79a8b308f98dc347129359597004df6df97f6b": "0f281425f67ffc52c1159676e338dc98",
".git/objects/8c/7e116487a3e00aed24a041f59307e9f197ca55": "0e71248a691c88a2dca38c8e4c7545f7",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/8ee6442fca3970d220fc386583b3dce06fb759": "2a4b832b0f385e2a01038eaa7fabceb3",
".git/objects/8f/c02ae296484165f298078c7ef06d6de4cfbd25": "a44b679e2184805ac30dfa469fc87f64",
".git/objects/92/c3a16fed2bf030ef6c521a22917d34748967f8": "6fd01b5bab771a7789289ab883ba246f",
".git/objects/95/e90d02bec231863a57fc3e1a12cef5a24ffb2a": "b4ef18f121d2dd4d1ebcedbb4759d979",
".git/objects/96/cab4ee00cb70737580b5e37e7d1358ccec700b": "13c68f35e2b0091c1ec8c8c85eceea77",
".git/objects/9e/b027eb032c14311d7242c605af51c36e56be0c": "1015405afaf85ee47d278e55c158f8bf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/df3e118afb9c7e3e1d500d170323883d99f25e": "86e0e9076d941d5175484af17a1f39f3",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/aa/c459989b728b517bff008abf53772da7beb748": "582934672487a16eba24f043e1f6c4fe",
".git/objects/af/bf6818682f3d2b9b79b76d5114ccfb67b18371": "bd2628912710123390b7ecc85e51b686",
".git/objects/b0/1a43ce82f2a05e1fab46eac081fada2b1e46ef": "a790925a624488e3998ef64dcf8075f7",
".git/objects/b0/49c2460e175f75bf01aceb2ffe3c4f59ca002c": "2a919c07d11d0a5a5dbf60fbd2bcbfbd",
".git/objects/b5/3b32ecfa693cb5297b125378098e117f513b05": "29624ce4030350ee923102f487d35a64",
".git/objects/b7/4b6aa0d848f9260ab5d75506b849bba0cbcce9": "e097049c7cde767fdb0b02b76772df77",
".git/objects/b9/133b54ca0a7cc4801c8a692df421f1a91503fd": "044f181c26336e1d262ba357f10808aa",
".git/objects/bb/92b9c39150112ce7081bbae43faaa9d4d7571e": "efb83f027f00150e5f4e7d51ea673dec",
".git/objects/bf/7529fe15b9427db706d570d1489148975ef365": "2652ad8399908f9e3eba7633f10f59fb",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c1/c165bbe1f33500547950152d3f1d7310cea3c3": "123521c3aa194fb11b582a0b4fdb9e46",
".git/objects/c2/f54ef0cc215d1cde3178718d6fc17c1fe99e77": "d8647e9854798af72c8f8a7a5d67acbd",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/cf/14e0b0644c97783da1a237b432c4736f071d87": "28656a60782acc038946e1b1b72e8971",
".git/objects/d0/8a4378eb1f02e3b3a472b4d28680414b9544f4": "e66d196b242cf77bf5787693ffe6308b",
".git/objects/d1/594280049274b8a5d27888d22b9bdbd9da4059": "f4806466e3710521102a65bc86981240",
".git/objects/d6/4db8e16d2322f31406b505c465224256a3847a": "3bbfd5031ea6cbcda301d31a5745fe8e",
".git/objects/d8/3cee14ba6b66a5818954fc82af00fe552c3ca4": "ef7b61326df51cada0a59423a859c585",
".git/objects/da/ad25a8c1c8e09fed2eb2f8690a3b2f0b2ee2f9": "2d115c8551ebfd40d9cb8b4ba18ff4c2",
".git/objects/df/0c169c137fc4e835ac2ad371c86796f27e2c36": "ea4a530561b11b783563d0af40c8e411",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/bc5b90a179649b1af4172317b3e99d2dc0bde7": "b6081198cba098a1a26ccaaefc7e8996",
".git/objects/ec/c66fe7c2735b2da7e2c6adf929d07fa17021ab": "e3c1e4ca79253d5e89eb62fb60271fc3",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f2/98f3ff8ef86e5491838f3c47eab1581f5cd456": "3a9f8f2f3270ca40320e1bb7deb5afb7",
".git/objects/f5/066f409647799d480416b1aba4a80242771839": "cf7a7733ed2025489909231ec73496c7",
".git/objects/fe/f2815a7a5aad890ba939608a323a5d02e7c9d3": "737f8e5ec36fd9b585f6cb457bf37315",
".git/objects/ff/173d095f94c695a02cc887be25590a45dfab06": "d750e871aa0041f752990ea795cbd8be",
".git/objects/pack/pack-fb689c32b24eb26ec4ec75e675063a2235ce95c3.idx": "9795663d846f29711afda1937bce2028",
".git/objects/pack/pack-fb689c32b24eb26ec4ec75e675063a2235ce95c3.pack": "803acf76fe285e9636652107d4028413",
".git/ORIG_HEAD": "be9e75220be6dace52a63f0192f641ee",
".git/refs/heads/main": "10355e640e2523ce8129a4e3f0b94cf3",
".git/refs/remotes/origin/main": "10355e640e2523ce8129a4e3f0b94cf3",
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
"index.html": "3da515e7f2d11219a1423ab7c60dfaf8",
"/": "3da515e7f2d11219a1423ab7c60dfaf8",
"main.dart.js": "6def58a31af9237ceb91c58eab112a0c",
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
