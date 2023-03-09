'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e44e05ec93704ede0d0bb08c234373e9",
".git/config": "9bead089c4c4df829e6f62330fc656b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "11f06ed795397e157957ea07f3b34fb4",
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
".git/index": "eb130b464015c82e4bd1b5633fbc61bc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5a9fbb76167d69c3b8aaf36dd128444a",
".git/logs/refs/heads/main": "5a9fbb76167d69c3b8aaf36dd128444a",
".git/logs/refs/remotes/origin/main": "3d4066017f937daa6f2e02e356000732",
".git/objects/00/6da1f15b491d2cb235847a1dda07e78537ec40": "5a90a1cf45fea532e3c193cce073931c",
".git/objects/01/2cd684b956da720208689149a2352045346333": "d1526f9073b03abb69ff7082c52dfcb6",
".git/objects/04/1adc2512d8d502136692501ac624cab29437cb": "92378bdf46307a990d4cf11b6cf7d105",
".git/objects/04/615c28507d40eb9c62a072076932545cbd70fe": "d27dfe87c18f5123ad651d2a99fe3436",
".git/objects/04/a93ea3c5290060bd4fabca48c05ba0fb0f9f85": "1ad08fe8e5fd0b3d7684a0d6894bc330",
".git/objects/05/0748996637b409bedf161e8732101bdc9f37f9": "b5dcecfd837e453ac15affd2d56c9e92",
".git/objects/05/9ab91aeefa8e25767a0682466ec7e598e193bd": "4327f4e9a018aeac584b40920bbf6ebd",
".git/objects/06/4af7c4f8bd992987ccb9c4fa9abdf040dad03b": "fe819cf615e6f979b6b2a9da84490d61",
".git/objects/06/e07f8ff0c8d369392133531d2e30e8db20c867": "0d5c54747126db98402d1a1ecebafe1a",
".git/objects/07/a1439ac2991f475a9a0896c339ed877b2a7d47": "cc03ff01a5c868888c84376af85a0271",
".git/objects/07/bae5b7bc97beddb406df0a13957c2046a3c86d": "602a3da2582c58f6e3363ff7a274cc47",
".git/objects/08/63941073f85e270d165f54d1e6da4d118a4dde": "1a418d19a4ecce54c892e21d19c96bae",
".git/objects/08/c1c395c66005d09bc3ced3569d7a288af716e9": "32c72bdefbf0117f5eb38bb00b317093",
".git/objects/09/c758e6a45bd0695f641c99e700797c5f6e86e2": "9cd21eed83096768c32020efb3918888",
".git/objects/0a/806a0a2c50b73de6be05feb67b65a51c809ec1": "eb1f51bace44d879c845538256cc14d7",
".git/objects/0b/199e62ecd38ce6acbeb411119c672396a61cab": "42a3de9343e75c1c31554aa1066c92ff",
".git/objects/0c/3bcddd106e87efeb1c841403ccfbf964f5b45f": "1d0faafd06f7a26e59f7262f8f7bb293",
".git/objects/0c/6b8154c5a7dfb2da95cc0dbe5ae5af2d5b7bbf": "82bb373ee23eca4c6496d66f572ad2c8",
".git/objects/0c/ffada54180e758b5cacda5242b941db6a46a5f": "7929be94fd07edadbfc678291aad0322",
".git/objects/0d/12752ddbf52facce96cc1a4a3bdb29b152339d": "4fe171ad7e2d2da966deb544d3448041",
".git/objects/0d/74614ca97dc8cad20743f6f479232e8fd5e05b": "112a0c17767557ecc19d08a5a61e36c4",
".git/objects/0d/bfb8d37ca4effd405c43cbd43e298096fad742": "44bfec13c9ff9dbae3d51587679cb0e7",
".git/objects/0f/36a95c0f7d187464430837d9547ba19214ebc9": "ef88ee798a375cb670ad519c0ccd45cc",
".git/objects/11/521ed2ced6ac7d160585e6b96225d0d97cb7de": "032c3fbc79c2e8cf8376a59fdd595cc4",
".git/objects/11/60cc807b6b2eff0ee3a6ed31f7b1074c6a3b2b": "6318d85946f71171aab05afc682ad17d",
".git/objects/13/1315824c006df5292b55588784d8761858b670": "75bfe9a5033350c615a27c4f2cf124f5",
".git/objects/14/81f0acb2fd4e4a31d98399f9fc56db75a0a5dc": "96d7e3a01d51e615c0338462badd8008",
".git/objects/1b/317852441ff8d365349385b65d952a7dffa1b6": "68b751e4e565927c78c2f50062e618cc",
".git/objects/1b/b5a71ed70b92f569662db0bef365158b470262": "3fa06b85113aed271b7169f2b938da41",
".git/objects/1b/c581c6084c7a7745475cc3fec2e6c81109cf24": "85ce0d44c87dd6342e8885e5342bdae8",
".git/objects/1c/d3b5f550eec2378ca784860529f6338eb5bdd5": "2827e30a1cff900fb91dbd0d9067d0e1",
".git/objects/1d/115f76d27f63e106472d4c061554bc5f608f32": "b4b07f0eb4a15bc3ff8d655922d55e36",
".git/objects/1d/687a946f312a36d08973417bb7a2d5dd1c2deb": "9ee068c3b611a0246161d97ba51c47ad",
".git/objects/1f/5c6b2dff186668b8cb5c07b40a765422d0226c": "e070f06e6bf5287d79c528db331ed673",
".git/objects/1f/9d5d3d8d17a28a028c8d110aef1aedad07015b": "6da4f00c20ead01cfbb29dda3b62829a",
".git/objects/1f/ccf6d2727869ddf346070112317513cfa8bd7a": "62efbe4c2f860e7372486841bae71aaf",
".git/objects/20/f50a86c70da4c2d88e349ba6980417001ee417": "4ae53fead59e95d2d95e50f02ba34cd3",
".git/objects/21/406e7ff4f035ab267535c9f8f93eb4abd919fd": "36155da453a232731d9e2e6d13db3e8a",
".git/objects/22/3562f481055c20180894f858a41bfc204dafd4": "3f0cab6594f2bd97de6d0a5a7d3620da",
".git/objects/23/2440c7af52e2cf2994a6366b66f34f6ecfa05c": "20663aabbd712305666dc83e1178566d",
".git/objects/23/4a08a9bcaccf95ba25001af2f783f8b134d084": "455882b73edc2310d3d120e6dca32fa1",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/c664d277149906a92b05378917c499686c30ea": "4cb975df6b9ab3de3f7cece60eaa048f",
".git/objects/24/b8f06d35bcb659caaf4e281e18447c64325593": "c7712c01f8c0bfd9bf80d032aa2a202c",
".git/objects/25/0e969e0895e62da6d6434424a308ae14d97858": "c6c4d43492d9ee023a710fa7acff072f",
".git/objects/25/d5d1201d2ce3d955647a83c54cf725b6501794": "2fbeb97572515888c37ffa1abe35962e",
".git/objects/26/c11cc5949abbaa6684fcb91cc090150ee09cef": "e2de7e6464fbb2590ec6db83287a1097",
".git/objects/27/e559821333705b304bab6475501f0cb2978604": "1dfd01adc2b4fd182102e48e4c107b47",
".git/objects/28/2f1ad14f5861a6f00dc9cd571cb28d00826d89": "48f087a0a0620206a5bc2419ce0c5faa",
".git/objects/28/4136434b78943feb4577d9d2283a772979d567": "99d804ab01e346149126a17d648a5a44",
".git/objects/29/c16f43a05b39ca455b84d9d96508cc207af60f": "d46ee5a8ef6fed4b564398deb659de2c",
".git/objects/2a/32f5a0b59efec63fe4e281ab35fcb1e8e6565c": "2841f5e33b46e4c0a05785b5cec05ce7",
".git/objects/2b/294b097878220edfb4f42111efc4ecd7619a94": "7ac4cf15f0288fcf75cd654d55d843df",
".git/objects/2c/1668feb4901f97c07b3b79e3baadc5bf1c22af": "13fde81124307bc08b98a443cad6a78f",
".git/objects/2e/11656aa6f927b9480be285a6e0a5789a9e1ad0": "7da5a1bbc9b68d8127836adcd9ba3bd3",
".git/objects/2e/ea525d885d5148108f6f3a9a8613863f783d36": "0c2627dd9d4a0f84b0d2868628ca39a7",
".git/objects/30/8dce8cc994c37f7ad9c69b84b086eff787e3ff": "7594b28e8a2e2d22b216e1f5930f82e7",
".git/objects/32/d3b3a86702c0bd5782539a82e3e2c89e5f9388": "971da2bfd890862552a5a851be481830",
".git/objects/33/bb73742e1f1d7b81e94143f21eafb810907ecb": "852b5f0ce30670e052c0c8c0052ebc19",
".git/objects/33/c6f5e634494f29a5f6aa2b27b215e7cc029746": "373a538cd33a64395aba37b6ef2bffa1",
".git/objects/34/65983eaf4c269e973e547565d049b9eee46f6d": "f72759ed526965b4998772e958d2a126",
".git/objects/34/732bc4a0fcdf2c48c482aa9f2da713e0d9425d": "7de188780399ac618b74e55b66b4b5f4",
".git/objects/34/77dbdb447c981fd91e1ce7c4140e11aaa200d9": "8da512dd09b5f47ab9d6b1edc052e6a1",
".git/objects/35/1ce3491463c9683f64ad41bd2dd586c7a0481d": "1a6e61678c1133586e02e376d814a059",
".git/objects/35/794163e2ab0b37035666360f7f0e9025f0226a": "3a93ed8d3bba95f715b03a32702f9249",
".git/objects/36/9b469dee531c889982eefbbf1e63c1696b0967": "ed32a96d5ad99b55162fd36d948294a8",
".git/objects/37/9966a2ecc65eca4691de03b8fbdd2d80ba4705": "16ce016d2753dca8f388173dc733b444",
".git/objects/3a/0c4c204f9e184cff1f8bffd1281d9c68d361fe": "f1bf97e662abc30fed75047b083efb31",
".git/objects/3b/6b580fc71c2676666a5a0369f32c3a9056ab42": "3be017794a140601fc6ee3b4186e1519",
".git/objects/3b/79b19873decfb8363667679b2632a17960bc04": "8ff860086a65f1fee8b6e2f1b55a663b",
".git/objects/3b/f1c0efd50a29ed7cf7e192eb5ae0356ff68b84": "f01df50c1d8339a40e65ebbff6f8e5b5",
".git/objects/3c/11521d731e8c8e232b79af51295ae7a759a3e3": "3dc0bf2137cb5332955b21f2a457d73b",
".git/objects/3c/fddb135e84579a8c1055a3904b4f6173bd1c24": "2a1b90fea5ee4ed84c3721067823ea67",
".git/objects/3d/ff18e600d2587945da115dc40b9097a503c259": "2e5e3da93b0e1a5df8a3909dc90f2cf9",
".git/objects/3e/6ead0e9d0a2cddcf096fed975af4d375ace929": "99e9be89df04a20a64528a8a24b8e34f",
".git/objects/3f/b1375dd625573b4e3fc1c1c3aa4274e9362496": "d7b178b9b2c2d94bb3d23c84e6469ca9",
".git/objects/3f/c0ed2f675ac7e1b4f3eab2054a1409e699462b": "1d31442f2391c9c14a4d763801b28fef",
".git/objects/40/234bafbed8e30e5e509e5dc5d9433851e1b0ec": "5230062aa32586aac9fd80c3c8084335",
".git/objects/40/3ad89bfe72b127368ef4d491cbb4181b2919d4": "56e187ee449c8977c52ae6c31d47c031",
".git/objects/41/3a37f2fac0e23db1cf05f6033aebac40b711ff": "4e0f1273a30c18605530f8b7234e7634",
".git/objects/42/205f438b9d1c21b6f3c11128185b2f58691549": "b0cfe3acb8652bf79b7f97d3809a061c",
".git/objects/42/b835c5e9eda4b2211e899071f0c0d7db8faf23": "ab33b8383615b6e1061206d39ee1a078",
".git/objects/43/b9694e3752112fd9c6f2df96af7dd2340d4cdc": "7dd25ca4491d806e6174083def7e4445",
".git/objects/43/e8137353c47918821601ec862469cd34b8acd5": "b65e98ddefb0728f0be5c30b1c9cb201",
".git/objects/44/3b52b8e793ebebbd77521df58c295fb42a0c8e": "b6e01ac820f9f008f2a1ad3a869e80b2",
".git/objects/45/1c33ecf33e5451aeb146f197b6f49cbf78c906": "89b53593eb2238881bcdbe2f98790c0e",
".git/objects/45/d0f2c40febc095b901805a8e54d45d2a97b36f": "95357a5db3162af83ee728117fb5027b",
".git/objects/48/625759439abdc1e9b616c0997e8bc0c96e6c4b": "86706040baca731d1bcf248aef87bfe3",
".git/objects/49/212ccaa84fb30b9fc5397005fd13472e222f2c": "6389bba6111df1f891b34a876155d399",
".git/objects/4a/3a2b6fe7fec0236d207fad6ac4d589ceaba120": "25c5f423f91b78a9167c0d12c1d1d5d4",
".git/objects/4c/4c72c6a84ddc820eb0db25d8eebcae54ba28ef": "035c8f7a1c2b4ebb87452179534a6ecf",
".git/objects/4c/be4e23a8aaa1979a6899fb2e54d653d2cdeef2": "756aece6dfe86407f940c85929e846e6",
".git/objects/4e/b280c0ba181f32e0e9e65ee847d8d0cd98aa72": "62371e90512272c9af08d0722661dc11",
".git/objects/4f/3e25e9caa1457f8d1b7ed991242dff69062931": "5a39796e041924f4a78c58481c62ab1a",
".git/objects/4f/44d9639b82e330ddf66def32225c79d75ae5da": "973e2c53da47882b3339da42a08271c4",
".git/objects/4f/646d6253c54679acb1cb41e33c600255b726bc": "f41c391d45e8eb644875a773a1064a00",
".git/objects/50/b771b3df31235d23ee2e833d76966b562d3be8": "cb9f24ef4b62cc79e0d7cf2c5d02ca7f",
".git/objects/50/f5f2c39cde807d84b14602e12bfe39ef07b4df": "2144dc02f84385567bef40b78802b965",
".git/objects/51/2c2afaf5e35116e07af5065e231da4af54d3dd": "ae928314708401b660904234a1ac2591",
".git/objects/51/a55b2fa9a04d074123f746d53528c55d98946c": "71940653c4e23bd018cdb0f733479456",
".git/objects/52/a4b06e681a70db9f30da3503cd35edca91e24f": "eb49ce474526ee4dab763b0358c70793",
".git/objects/54/14556ca3fc990dd64bb5876ceb769a5e9e6691": "55527f4c893a946f1b72bb5b8bda563a",
".git/objects/54/16c01c14a1b6c42d1fd37884a1cbcb5da5919b": "4c55577be4973ae490f77f7307c101e8",
".git/objects/55/82b5e255478322dc9279dda7f7b6af359861ba": "c9792558ebfb2c575a577fca63697c63",
".git/objects/55/a326c0f89db7255799e83afda59f8cbcc0f9ac": "f4d75f227bd597f2148bc28f2b51a969",
".git/objects/55/b5c3ecba0864248bfd7dda8e29b07d132d88fa": "62ee03b0297cf075337dda120fa18184",
".git/objects/56/f229ad45f44974cf421100297654f26bebbda8": "a5d9c3cf39de2aa89aca436f0db40d8b",
".git/objects/57/433bf21dd7969952549805ada0edb185b087d4": "7fc167730227c1ab4d4b7b1acdd31ee1",
".git/objects/57/eea8df5f96de39626d71339ba582e3ca3c6e75": "fb018b7813cddd4be5ae9d017cea01b3",
".git/objects/59/164a49b52a67e33be5c722f554e333232bbbcf": "5dcf34362c0950c2f3177d7363b54365",
".git/objects/5a/515dc81b47c4430b3577f22a614f180be3a16c": "f1f6de2dcaa0668ad324eaa908ff1c15",
".git/objects/5a/5f742875f8b4929c877eb3885424d0d50ffd3c": "caf231e4baf210aaae34d905fe5f01a0",
".git/objects/5a/6045f2e0478d94adf2091343d763bfc24bf7f6": "f80ad3635ab2e066dbe505e30f826535",
".git/objects/5f/a2c2f990fde1bad3ba781b39c1683a7af55f29": "ee15829a7373c2c670c7e1e8997d72b5",
".git/objects/63/63055944f5440d6b1a99df0972e27c40dcca9e": "75a19d11ef0185c6dade60dafd54d273",
".git/objects/63/af34569095e45f32163353b3b157ede3f0ff41": "dff5c023bcaa01c60be15994c1570635",
".git/objects/64/1051a9d58e19c9b04383f1bca8360b2269e565": "923d2edd228af47a2077dc0cab84b577",
".git/objects/65/b59568842791595ca345e6fa4f991f7960d948": "99ae8679234a7e8bd788992cfd6b4b4c",
".git/objects/66/866f9eaba69785ea8964cca81b598650db67d8": "3d959097b9b665095eaa4864d4d62ca7",
".git/objects/67/0c9a84efd399e5fdbb61b3850f3424f8aef7ce": "5d2a094ac7832058683dbfc811a01bf6",
".git/objects/67/bafd0f3174b0fe24d4cf482f0af9c9b13b3ee5": "65bb69908891d94798be973d48dcddc4",
".git/objects/67/fba64e21aa1dd8e27350c1fc52a60f99fdba35": "79688c4558a0cd91ca3f4c0dd89dd9f3",
".git/objects/68/0dd5e7f6e00bd21f47975e7d08902039a48eba": "0c2f2ae2022b0210a67f7695ed319fd4",
".git/objects/68/9b13808176d52a5bdab3c7c626cd43120152c0": "827f081ed81c4e777121de585e2aba3c",
".git/objects/69/ab3622dd17de92e31f32f8cba76beb7da0a6aa": "8666706cd6fec2b484bc25a5036db459",
".git/objects/6a/4908cf62f87b8432df3c251a9cca482261c0d2": "979f0710bec9177faae43c3e93d267fd",
".git/objects/6b/a6e6765f6497d86e2024aa09e0b329b529910f": "51a6384a3cde0e7f6f37cb68e3316bd2",
".git/objects/6b/e0a13f460f46da60b28fa0d6c54c6a8f5cf559": "f24fe68fd6e2601c97970991c254b192",
".git/objects/6c/4081dd7e9c374e0fad3f96b9ef51169c62d3b3": "6a3e6a1f45231b80628555866da57768",
".git/objects/6e/0e0e4d264d5517e8dca383b98726cbf0b878f2": "a043836dea417c7d5b7377d56fcc48d8",
".git/objects/6e/38b36d8849d589df3277c0006f7bcb406561dc": "c75cb866091e3f8f7bbe5144314a060e",
".git/objects/6e/f895deb95e9fcb8e11c3fb1392a3289d6848b8": "14a856948d5830045436e74b6bcdae9c",
".git/objects/6f/942b0b00bc0fd8c25d2b18d88fbe76393268d8": "4fc101d663bf9d68fabc0726dcf1081f",
".git/objects/70/14e4524ca1fd1df09d7ba61c79e4fcce47c196": "09997d098d06fb947656ccb602a9cc65",
".git/objects/71/68d853789b5a342b2cb0f7d6c7a30cedb2b42c": "31bd0a64f02cacd48ce6f843fa1b2b84",
".git/objects/71/91dace254eeb4a734d14996ef8a372248ec536": "a224426f9b4b6a6a4f4d86dd388d6bd5",
".git/objects/73/49ad7666b5a536c1cd6fc929c070f4e946400b": "9b7c1500d51b2c456cb8082c7ef0bc6a",
".git/objects/73/daa9399e78379e59bff9a2f136a26ea766313c": "209986e5e80a6cae1e158225630b3e10",
".git/objects/73/f79baaec303c7cfb3e3c86d895a03ed3526059": "e3e9b7257197d54b722e7037e5dd8c84",
".git/objects/75/310e1cbf6d7c1939dc941607b7b6b2e7a1a4d6": "d6183d9ff342d0b0228e2d1888f36c1a",
".git/objects/75/3eadcbdfd3104196dd890e8af14159687a7936": "a79d4b681ba28faa37faa7dfe4d2ecec",
".git/objects/75/5a2eb5642ed24e0bc87ededb4159fdf4563290": "93536f318395ca79e00340909d995780",
".git/objects/76/1be4655245a36b19e81b602f8622617d7bcecb": "53b5ac1b80796ac8be32864a8a734b9b",
".git/objects/78/c4eb8b8a08414d86694e14d63c76775577aef4": "835dfcee6ab313d3486d09503a405cf9",
".git/objects/7a/c39279a62addc61c90920a030c6ce1fc4a6db9": "07ef447491dca6b51499cd418bb25004",
".git/objects/7b/758e55473c490c61647ada498149f8b506a06c": "863c2f8cbadd249edb1850be242acbe2",
".git/objects/7b/ddb9e8e0df28d61099f1023a6041c1afd0e3f1": "a3a91cb232b5111f810c5e874d823a86",
".git/objects/7c/253e2d0f036d908bafb8d6835d97a36265a151": "e95d10b29c480bd8315c9214b9c052c9",
".git/objects/7c/cedebc4e64ba6c440b744bfd1360e732eb6f57": "f219de2261cd338b9bb4d5c67998596d",
".git/objects/7d/7cf41ce864d3079dfe765345266d462e135e9b": "5e0c8ed5d9be8ef97aaf01c0ec1c9ae4",
".git/objects/7d/9c9d543dbf4913dfeb05123ea12663b211695a": "342120f58a379a1bad5ada9a3e716f42",
".git/objects/7f/d996ad1fd1cc0a0696c52f87e35f88cf1a326d": "a5c22a02c23be050eacf249ff2d3ff65",
".git/objects/80/18fd1ae1f2ffd5b6368a3c9094a34c9505959f": "7877d8aed35694733d1fc3ece57fc878",
".git/objects/80/57f1bebb104480cc01ec24fb976c265e09b681": "71033ee27ba565ed145230b586f1b0bf",
".git/objects/80/869f16a2f7745640691f3adc99a4be78462fb3": "fc1a8ccad3b55d601561a3bc085039bc",
".git/objects/81/2f46da2d4bcf8b99c04e21b4cb55f8b97d30b8": "021556b2b4cbfb36f270ef84f44419b7",
".git/objects/81/dc3dea0815f9831eb36cbf9d843fd801e91063": "b9521bc67c56a93c001becc63a93c0dd",
".git/objects/81/f513f864bf0e9908135931523e86864de34792": "6a10dee6baae1523d36deea30b827128",
".git/objects/82/092903bff688fe26ffc1e8f94d38517fae3c88": "160a4b7f19d1ee0ebfe1cb340a7a1d79",
".git/objects/82/28f7a194c10144ac674def1d738307168d24e7": "d75b7cc5a2b5ed8ead86eef361b611da",
".git/objects/83/2b48a7d7ff214c65f5a6779db5079577a8cf1a": "bec48bfa7c6b56115eb75150fbcd1e58",
".git/objects/83/38ba63fb02e9f6b75df85015412a7e69e09a2a": "49b8bb79257c45ed7c004f37d1df469c",
".git/objects/83/f097f04ef14f9e0b65e2077c2aa1813a4ad837": "1d9dc323dbdb80865f5c96cf7a9b6d18",
".git/objects/84/27b5e317437e961b9eab58cf1cd562fcf151f7": "149dc796a746b0a5676bdf24a99e8386",
".git/objects/85/905051903210051a71d29192c0e83aa506386d": "2f518bd143b81e54c6eda6b4ccfe9467",
".git/objects/85/d65e4859717fff315c475edd5e7843b4cb3854": "513630f6ecaf2d82e74b0a2602d75a6a",
".git/objects/86/457e35de514ede9478a40ea7f651e5f84234b6": "5b1f96e761265bc35353f3f0a9fcf10d",
".git/objects/86/926f3cb0d793b2ae532f0992c516aa4bfb06e4": "12c066b58841cbf55cef3e4ce5cf8272",
".git/objects/87/c91bda6bdfd7d38000c8f0f7c9de576b9126c6": "ed2e4b6bd0f21e1fb4750c04a15f8123",
".git/objects/87/daafe940795790d36397be26eb1f196350e3d5": "acc6b846cb61f87938ccc32d458da637",
".git/objects/88/168df6f4b863d233d9598603c231ac8c32bb1a": "3f70d48a4f1beccbef92f062d7fe4f29",
".git/objects/89/edc7ff28fb1e5110072939f4c4023425402b9a": "05b51eb455d2f5d4ff4fc9baa16a8436",
".git/objects/8a/46a79027c0effc9d3e32a574108f11162bf598": "3034eb51189091c1fb1ec83d5a23233d",
".git/objects/8b/af13846ab4ad60bab9b421bb0e4b1e845ac5e6": "a9ea0c4566c50f6d516a3a95fcc92019",
".git/objects/8b/b7f88aba6666fd277e010160f7eb26c2cd903a": "672a9ee6d6f0ba704d1a65a3b0a9af38",
".git/objects/8b/fdf1fd18c1224316309a83b73a7cd359f543e3": "bcee44f48c21d31a801a0c1e12cac33f",
".git/objects/8c/57d4693f32e79441a5c50a6644f41b170b9f1e": "0a95c69ca5a2289fa53a4b1f5acffd86",
".git/objects/8c/e1e97c5fa3556b0dc4827d02f5e9965dd32cbc": "4358f77378a0b692a73ea496b4539105",
".git/objects/8d/9568c12e3fea08de4ee7a0a3285604a967ca8a": "23539c81f1649ff1e2c52f8261fa6372",
".git/objects/90/3be132a9a966f1d51209fdd463ca77fe8f4b2e": "82fa651e9e59fd96dea84836101f5cff",
".git/objects/90/a77fd4771c671569549c0b2154eb1dacc6f700": "bf233c107a673409429169a4bd404bd8",
".git/objects/91/81519065a3341e98def9d6115ad15453091769": "2aaef84ba030ef6bac06b0d1aa893dcf",
".git/objects/92/bf8793153848aaa1ca7f0ad90966386cfc0447": "ff6e765544d4401a803f6d6ba2942e84",
".git/objects/93/41f428668917c9e1f18dd246abeed9a737bedb": "04bf46697591e98db6022c1cc31fc768",
".git/objects/95/3e328df749a3f31b7f857e12a7c330ff3db115": "31aa141103a6541852ffc3aa1bef39e2",
".git/objects/95/d5201a4dd39e5afe2218ab2e6abb9c82be795f": "549723bf37a204a0814c206700c1cdf0",
".git/objects/97/277f7874e85f4e73bb0d9dad17c8f3a5547a3d": "7d48624bba2591025633954753239dd1",
".git/objects/98/915919859a0e1e3b81c77779b584c04eb84778": "0e2bf42f124d20dc226fc1b96972e9a6",
".git/objects/9a/48cde8064a89e13acc23fc0a17746f31599eb7": "185caa4449bcca9e1ee3359775409e3a",
".git/objects/9b/f2ec4e3b6d30544afac47e8c037cab321e515d": "33ececae44bcd752f524eeb38c330573",
".git/objects/9c/952f38ada4a30c3e376c2e99f12a8cd165bad6": "24a6ce6ae1dab3022dfabba8af1e68fa",
".git/objects/9d/cf596c21c4f940f344285d5c2a92b7e20a2b94": "033ee1d3aa20fae0137f8da6dccb9a98",
".git/objects/9d/da7851f5730718f8f095061e24071d86af3ce3": "b910386123559efe4bf66c48e6b8bc46",
".git/objects/9e/5d194e0585eb9cdfe3b6ba03e935dc46e0365d": "846997a4f13b11b6c2f2b9e80fc5cf0d",
".git/objects/9f/c8e680f410443798defa694292a7c07501f9f2": "baf62b1c6df9b9a61b917d50eab5d62d",
".git/objects/a0/45894d54ef3e431a56f9ebcf3dfebb152ec57f": "8db614f33a176cb5dc7d60626c08cb4d",
".git/objects/a1/cd5d6fc8c75908467d3f401b9e7f6c3e035d5f": "43ab00b8cdad756ada2738798c36e2cb",
".git/objects/a3/3e0937bde523f97d1f01fa0bfadb0cc7dc43ab": "2d1cf58b3642b6f1d8767283ea3deebc",
".git/objects/a5/3aaf3284b74011fc63dcfac7933a3884c53975": "4c3327f8605738d47931df3fac49cc19",
".git/objects/a5/ce18d537f2f3db30f15d7331228f351121db15": "ef396fbdaff2addeb0158996945f77cd",
".git/objects/a5/feee4816ee00b0a1f2d40e951f8c2e0369dd9c": "3a9ea6b860a8a0ad9324572d04e182c5",
".git/objects/a6/5dcb9035f80e5e9605048f74ae532d83caa13e": "a05f281fb3f79055dad2010cf3ab5412",
".git/objects/a6/89c703c9f1ecc581d80eae5016ae195653bbef": "1d344300207d1d4fd9dd684e94c6f356",
".git/objects/a6/bd1ed568334ecad60ada816a4fb1458e83f6fc": "abf0ea5654915eef39a3424c916348b9",
".git/objects/a9/af87d7059e00b8a8fdb49a8758dd274dec7020": "ee336b216cb213d1dfea3b7ca9ac3af2",
".git/objects/ab/02a3fe8f44cb87b355fc50a3c16a1452cce6e3": "1857dedfa32e6e8850afc2461be75e3e",
".git/objects/ab/2fe1255a3e6464a98d0d6cc98749aa154cb552": "e84085913ec172d9a5d024f0441657ce",
".git/objects/ac/10e99793932d7e33d9e83586bda3fa18336134": "717a42c524d683d909b3a05d0844c21f",
".git/objects/ae/a272ee47ab89cfcce33e9364cc52197bee2456": "ff6b710c5894c91611c15209766a318c",
".git/objects/af/4068e94192b6b864175028ef9d387415ebfa8f": "98edf397ba3dad31084321b4deebb849",
".git/objects/b0/eb826054fd80e9d4c7072d14e93c2de05963fe": "57bb972b2fc4e19186dce1d0acdb9e1a",
".git/objects/b1/cea18c0889a20f30b4d85fd6d92f3d285ae9ac": "2f92ef3b28fc7d9865425aa698d226da",
".git/objects/b2/f8d83cc33885ae4bd24eacd2f7468d0d933151": "8a355eb0d349b66f802d5c1d73ec9281",
".git/objects/b3/dfc3cd1c2dc86bd0cb1e05df2d5630bc2e1a71": "452ab404ca3c7c909d8cd69e11fb1e86",
".git/objects/b4/6b682b81fefaa4ad16fc733854942c89c93f2a": "0f02540d5ec14c750a5b6f3caf168097",
".git/objects/b4/8909d0717dec2cd1b2c3783a999c8f76d81865": "c3e0ed00dc777569903876febef34618",
".git/objects/b4/f6c23ccda05a29cbe6575e13b9786690396eac": "cf9f56d43b9bb3195d39e15f49a17696",
".git/objects/b5/1a39dcfbe699b4246d2951a4fcacd3427012d5": "280abd58f171cffdaf9d0dea03d00d3c",
".git/objects/b6/48a6198a5f770df7e6cca5a425041a9606c303": "4d783bf38dcf6c5704c512ffe5af18e6",
".git/objects/b9/442c16d502645b0bdb8ec5fbaff7481550b170": "9410d30bce9e7b51491c4560a3a6bea0",
".git/objects/b9/78370ec2a7a817799f4be56ea26d46171458d8": "4bfab58c1870b60282798837c9ddbb1c",
".git/objects/ba/72c08762f11ed64dd1e5bac27be9fdf7c41b79": "e5c2d3c5bbcfb11809e5517811314e13",
".git/objects/bb/ab40e7a3084ec3552a906934190e84d44725b9": "fcec32f7b439992d159fbe7f9d9936af",
".git/objects/bd/5b5d909c98793badb954adfcf8e7d241a5d8b3": "a6067b2239572429ab71be75c08f7428",
".git/objects/bd/6ab30d3e14a9eb13c846e7475ab1558e28c44f": "bb655a95eddb45ce4e163a3ae0123d93",
".git/objects/bd/a39bb1b8532b88d4e79cf9f3d33001abf952a2": "d5eff3b79e82bed9684a4ed548fa2356",
".git/objects/bd/c02b5d55d2e48ee558401070466fa7b04716e7": "96d75edb43699d14f7f92f7f7959f2ab",
".git/objects/bf/4c4635470ed100e286919a99f45ba8ca590cd3": "d4ea85f72bf9bb41ed325ecc65b48405",
".git/objects/c1/a99a82a547645e8fd0c97446145b23209aad7a": "70433a017679ee43b2adbee2d7f192b6",
".git/objects/c1/b36ca49ceb6243807343f3f38c007bb601e7a4": "6eab63441e1ff1e5afe9690f7d8e2aba",
".git/objects/c2/11901af50471aaa4b833c2af6a7385a7c9f9e6": "903f85e65a865faa6823dbbf2c063e55",
".git/objects/c3/50bb8e25ae307ce7cf77cdc3c30de1b422b211": "41a065a0e9e368c991b34a0ef9287858",
".git/objects/c3/a57f3c3e5d7b99f758da2d36c4380858699330": "142b6c9dc950114404dfe4abd5c38a22",
".git/objects/c4/f0e6545aa47176820c4171ddff17dc23e3181a": "6e53d34907d0d97033dd19201f0d7012",
".git/objects/c5/799a27320f0f5bb79bcc5054114ab79ee988aa": "a1119421dd127ea85441dfe3a5c6d32c",
".git/objects/c6/2806927f073ecee2acaea6e23f466154dc0cd1": "70ebb6cf9f30b0b63fc18b3152aaff96",
".git/objects/c8/842d0998abcfbd307da2cac2f7e7f1af04712b": "10fb91baad6426c3baf2e1b46b5f4a6c",
".git/objects/cb/04fbee3a9a1a0ac492fde3599ece209d73d5f5": "f88814d320c6caa689152e142ca3595c",
".git/objects/cc/6b43a5feba9c48cdc0d6e84e96a805ccca5fe6": "517d22b927671c5101889f1cc3cd4181",
".git/objects/cd/2c40081743d20e3d54eaccbfc0783b5e5bacba": "8d00b6723b800d88bded15133cd5a69c",
".git/objects/cf/4f165df3536fbb8adde7f63b35f7ea3156ac7a": "d6e0b6a6127240e2dbbb971979db9b99",
".git/objects/cf/763d7a36c84b3e9f321ab4362c9c5071360f84": "3fe175e2fe42953b21b75e2f580d0f82",
".git/objects/d1/069ebda44b7fc2e3411dd9c69c485a6568bed5": "d08325ca0d1efca785cf9208aa5546c3",
".git/objects/d2/89b27d65835d188772965c941ed130657aa816": "fea1925f634f74e4331c76aa03d0f27b",
".git/objects/d3/e4940d3d5e46de874af095563a572635bc15c8": "424ed3b40f0ec17c2f5cfe729e058add",
".git/objects/d7/7137f00e0b335f53cc4ed129fea6256c4ec304": "2a80a53f615665f3485674d32a34c6e4",
".git/objects/d7/cd7e0b43a98dc651d79d9f15aba3d0fb2d2000": "ca328886f9edcd164b4c0eaa464f1650",
".git/objects/d8/e09d970d7cf2dfb87a82076a78fa94f33a024e": "00be25e031da25a3c435108127b2a3d4",
".git/objects/d9/854637b558cd97e9fc2481d134b5a3e9c795fa": "6d117711ea9debb3b4998a8ecf63b84e",
".git/objects/da/c847377c55b0c6dbf59319ff4e3bfce9446406": "db02dbbac604bf1ec6e1aa40c51cf0a8",
".git/objects/da/cc023eb2d04fde0258114a2412f6a4cdb5aa6a": "e90ca573acd2a9fc9db56e8caa9d9ec0",
".git/objects/db/1f256f70d6c7c2f9f1f3d73da23779ce8568cc": "0481bd89c9a9457f6a10d6ddcbac366d",
".git/objects/dc/0b5361c77cba2d55c806a7360ff57eab7e3ebd": "00f5b29a7283faa72e649ed26c89f988",
".git/objects/dc/43daf63e248dab0d24d280abe9a6909171cf20": "d280bcfdaaf96d3cecd7f7b3f8f08aea",
".git/objects/dc/6ef0bb2d55d8a55ad13480b0b901e252d39e9f": "7336ebf0a650723f44369b2c2566d708",
".git/objects/dc/85dae2bd70f388fbf940ee185896518ca8d112": "0b7eda5bea3adbd92c0271520f15445e",
".git/objects/dc/b92989b9360efe64cbba265877d307f8d7e73b": "f52930010a03cfa656ffdab4997ec86c",
".git/objects/dd/940f13f4c84647d556c5403f97db8d503e33bf": "cadddc92f80756c42996cccd360ce93b",
".git/objects/dd/989329ea3210ed6c1656b1981b118c0d6345fa": "b563e22a2e5db3b6d10d1f6de50e462c",
".git/objects/e1/e0c00792ff261324e4a69f2100f6f33ec84991": "8efc03073afcd45a56292d81cd68df89",
".git/objects/e3/48d985073397f5217e00c4bdde2938fdc665bc": "6cebb57e6d907e7aa052d8ac0b193131",
".git/objects/e3/e1fd9e0fcd8b023ec833efe0ddb4a77513464f": "0b5f8cc837baa657c80dea162eae6696",
".git/objects/e4/8b482577188aba6a381b1ac71380be18073f71": "0a00fc779820ce00d0bc78f5126751b9",
".git/objects/e5/a9d9934168beefc4b464719685ca9b7a7e8ac5": "e1d015cebd7756b20610833d638a5c9c",
".git/objects/e5/ea86ab3f2157f318bd8a613fbc9c8fa197adbf": "cb94f7844a12cd0a15ac5d2bb7475650",
".git/objects/e6/9965ffc2197b24ed96acabdd1062406a1b5326": "22df5c0b8069f0e77c4e4186a69b44b8",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/b0d05c721bd1140f774eeb1a576b561aa0f1be": "21b800dfd4e44ab65af7ae8399b1275f",
".git/objects/e8/4e708a2690fce280d4d750c87682407ed015c7": "9b688c80b935691430ac85be455f5415",
".git/objects/e9/bcc3f90a3f672ca1cebae43cddbfc1dc422f71": "f7248ea431769f03da7cd4b4da645d47",
".git/objects/e9/e3d498a7b0d05c288dd2f3acbe4d0d5bf8530e": "cbc534681220db3afb507d9251526ce6",
".git/objects/ee/bffdadc81163faa334edb18e22c928367a7100": "b69cae18264203232e5ae8a0b750974d",
".git/objects/f0/09322a8d56759284a81d681416aef9006db483": "e9e6a977d3721abae7c035d469367979",
".git/objects/f0/71fe0a55cbe9089f582d237aa561cb3739391e": "69db373c7cfe40b351baf8d2cb06768d",
".git/objects/f1/d75bf91a6788d47058bd1fb11f28727c368672": "486c57da9b955ad8b06ea3fdcdbaabb0",
".git/objects/f2/1fce5af30638a05fbe056e8f627722e60eb9b6": "9fc0773fad526f4edc7019e64d1d435e",
".git/objects/f2/a82710a343a7dd9d462e31e4715a9224392857": "693bef4c2ebf86628ff63d8537295866",
".git/objects/f5/0757e42f380cc51e28ce851451aad8e743b530": "92db0467b62e06c61c9ff36d4acc660d",
".git/objects/f5/5e729cecaf83dca5ebad14212bccbdee198f42": "a8e3065630bbcafcfd923ed1a616b71d",
".git/objects/f7/75e255bf1f6ed3211b75ae885108ceee57953a": "f5b261bb43cb0d97174156afe998cec1",
".git/objects/f8/65f55e41bfaf210efc6ccc9813db39183195af": "9eb6bec0910e2a6fae6dfa0a8e74b369",
".git/objects/f9/2a05bfbc18a205716cdecd1e715408676c4cc9": "e65cf1f7b6c84b9203aa7b4db73e4856",
".git/objects/f9/7c2deefa2745be45cc2f26e3d07294df9b9627": "317689ce197c09de96195357ebecba34",
".git/objects/f9/95b7f2a56cfbefe7bd11c1d6125abc36673cf6": "7d32cc9bfcc2616f78ceec1a6e3a6511",
".git/objects/f9/bbc69e0df7bb0e77f264c5bb8d23a6aa1322a0": "e4037972af5f5e4abf9df07a877f403f",
".git/objects/fa/87abdd9b2acc83fee594bc8fb02f9c811b6fa6": "1a2592372e4b1d862fd118de0d1848c6",
".git/objects/fd/54bf2c8aed66493b35920f5a605a9f41cbd47f": "029706be4e9b1c5725674f6825ca5883",
".git/objects/fd/a74d7d835ecea5ce3b6a828324755d02887425": "0e97f9b0aac6684a86abd2be74da101a",
".git/objects/fe/9dfd696661f114e260afd14f90b1537afdfbef": "a88fdd40c5ab2085d3c5bba5f8d46847",
".git/objects/fe/dbe007ff0cad176ad49e7df2e3ca8da752bfd4": "bbdf640beffa1f383860056a288cad24",
".git/objects/ff/1c0a34d0d84022541168a2c539367fa957063c": "1242dd167310066e92cfabf1c478ced8",
".git/objects/ff/d54a0ec73e83a0d035e99c7f1bea37e42daff4": "8aa775617ad21d5573e0c28e6717a87f",
".git/objects/pack/pack-2d98c59485902af5c6c7532dbb1d7c455cf03671.idx": "34c852081961fe6e06cff17a811be020",
".git/objects/pack/pack-2d98c59485902af5c6c7532dbb1d7c455cf03671.pack": "dea07fd080b9ccf52ee80423edeff8c7",
".git/ORIG_HEAD": "eb04e790402bd13a476d4394340074eb",
".git/refs/heads/main": "43d7b3ca52144bbfd0df6706fa7f0c77",
".git/refs/remotes/origin/main": "43d7b3ca52144bbfd0df6706fa7f0c77",
"assets/AssetManifest.json": "7dd07e671b84e021bd46f64652ed717c",
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
"assets/NOTICES": "5849cb1baac1a75b1e6d06597d9fba77",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"CNAME": "9363b55dc260032ef66e7718c8351603",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
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
"index.html": "ad425f1f1fc2793cef9a909d57913602",
"/": "ad425f1f1fc2793cef9a909d57913602",
"main.dart.js": "16e0183d711c6b5587d1dd4781d79300",
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
