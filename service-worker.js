if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,i)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return r;default:return e(s)}})).then(e=>{const s=i(...e);return c.default||(c.default=s),c})}))}}define("./service-worker.js",["./workbox-8a532145"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"ca0fe768cfe73ed8ba0305d9147bd6a2"},{url:"./static/css/14.86d198b5.chunk.css",revision:"b8989a530125db28b4fdaac059bad664"},{url:"./static/css/main.e5c8cebb.chunk.css",revision:"286e3e90c70a20b3049ce204f0537a63"},{url:"./static/css/vendors-code-preview.01734955.chunk.css",revision:"e83e8fa50dcede04bf12b61442a601e0"},{url:"./static/css/vendors-markdown-preview.30002485.chunk.css",revision:"141ada0a17369b78ea4df3c6311b8e1a"},{url:"./static/css/vendors-uiwjs.613b6e64.chunk.css",revision:"587002ec1d11aab5d7b3c9adf4fb3a4a"},{url:"./static/css/vendors~main.306f0546.chunk.css",revision:"c0504b75a7517d870857e0522d448b77"},{url:"./static/js/14.750842f8.chunk.js",revision:"ffdd1a995660161e38fc40edda012cee"},{url:"./static/js/14.750842f8.chunk.js.LICENSE.txt",revision:"ca2d1517faad72dbae8e5307ae98bdc4"},{url:"./static/js/15.e5e527fe.chunk.js",revision:"6e966813385ece95a2c964a905147c22"},{url:"./static/js/20.79d1196c.chunk.js",revision:"a50775b6e9c62b0a21157b4292abaa7e"},{url:"./static/js/21.e981475e.chunk.js",revision:"f5d5298dddf911fd2e26194b9d93dc88"},{url:"./static/js/22.a043b83b.chunk.js",revision:"d479a40c84dafaa0f721c8bea8339385"},{url:"./static/js/23.6dcc00f7.chunk.js",revision:"6579f9f73f8a4322d46a614ce32115ad"},{url:"./static/js/24.f78b91d6.chunk.js",revision:"beb9b4a567b95a310cbb7ef6eca98743"},{url:"./static/js/25.8b95ea8e.chunk.js",revision:"80f38afc2264268d976ee3a4d025d9cf"},{url:"./static/js/26.3cc99a80.chunk.js",revision:"012f911fc3b9c6438b7557d8cf09061a"},{url:"./static/js/27.784decf2.chunk.js",revision:"c6e03d35211d32d00072e94fd1d82869"},{url:"./static/js/28.28df30ce.chunk.js",revision:"2cd0ae4149a12c1329f3298e0b8833a3"},{url:"./static/js/29.81df8df0.chunk.js",revision:"6a3d62442b702ca6016344a5f642c09a"},{url:"./static/js/30.463200c9.chunk.js",revision:"41654e1113745041377e754068e5beaa"},{url:"./static/js/31.4a1735a7.chunk.js",revision:"d854e6a564fc02fe3317b38e5dc3dad0"},{url:"./static/js/32.0aeae768.chunk.js",revision:"d3d00f457607dd90bcbfdef479c6375a"},{url:"./static/js/33.fc996608.chunk.js",revision:"d5dd553d90845b007277b10f6be10e4c"},{url:"./static/js/34.4b56edb6.chunk.js",revision:"815bb96005eeb85b4fc7d4a5c623bf64"},{url:"./static/js/35.d7d342e5.chunk.js",revision:"b1cbc7bdd5255879c25760193a37dc30"},{url:"./static/js/36.b513c443.chunk.js",revision:"fb2e7227426025093eb9c8ef6f5cc1b2"},{url:"./static/js/37.039cbcfe.chunk.js",revision:"797071e848c358c8e247f2f153e06a8b"},{url:"./static/js/38.671c252d.chunk.js",revision:"e29900486dcdf35426873b1ab87d3e2d"},{url:"./static/js/39.37590708.chunk.js",revision:"e1dfa9d2f9a5afa890aeeaf98708dbb9"},{url:"./static/js/40.b0413312.chunk.js",revision:"07b5509106066f7000ce2564c93599c3"},{url:"./static/js/41.3785bd34.chunk.js",revision:"a1bc50598f24a748be51db0357e4a5ab"},{url:"./static/js/main.16780074.chunk.js",revision:"9a34e0d84aa442534519d80852cb50bd"},{url:"./static/js/runtime-main.fe85561a.js",revision:"5de908d3e592e319533cd6b70f46edf7"},{url:"./static/js/vendors-code-preview.17877a53.chunk.js",revision:"f7a81239ca33be73eb71f50b61ea6646"},{url:"./static/js/vendors-helper.c7032574.chunk.js",revision:"af45c4bdd836506594f590ab7910e2ca"},{url:"./static/js/vendors-lodash.aabae127.chunk.js",revision:"d24c18bd2013c65454c8e922020e1c40"},{url:"./static/js/vendors-markdown-preview.a208020c.chunk.js",revision:"dea022ab32422511d926476a4d6a783a"},{url:"./static/js/vendors-prismjs.d5c5c993.chunk.js",revision:"5aa3ad058e2c0cb3866067495d0fe2cf"},{url:"./static/js/vendors-prismjs.d5c5c993.chunk.js.LICENSE.txt",revision:"0e68a261e4846a1e390826c53c553105"},{url:"./static/js/vendors-react.cc85e922.chunk.js",revision:"36ac8f485d7a15bc7a46f067e030eaee"},{url:"./static/js/vendors-react.cc85e922.chunk.js.LICENSE.txt",revision:"b8bfa227b2637d417a788255e8f5194d"},{url:"./static/js/vendors-remark.14130d9a.chunk.js",revision:"d05674957c028bc8d628365030d025aa"},{url:"./static/js/vendors-runtime-core.cfe835af.chunk.js",revision:"d33ef7e43b434b9e353b4e7fc18c0dd1"},{url:"./static/js/vendors-runtime-generator.97adc565.chunk.js",revision:"7ff77b0bdfb2b4b8d5afb678c44fbb0b"},{url:"./static/js/vendors-runtime-helpers.a9a02286.chunk.js",revision:"1f4c67d2576db59c178ef0bd27fdc7c6"},{url:"./static/js/vendors-runtime-template.2c5fe31d.chunk.js",revision:"163558cd565a84434a4aab155491f72a"},{url:"./static/js/vendors-runtime-traverse.a3ae0a12.chunk.js",revision:"5fa81db1e9aa325e3532dc5f12653720"},{url:"./static/js/vendors-runtime-types.205be06d.chunk.js",revision:"c13560ddde2050dc53ee34e653bf11e0"},{url:"./static/js/vendors-standalone.15764074.chunk.js",revision:"75b425abdbfc42bed2c4b61b4a15c9b1"},{url:"./static/js/vendors-uiwjs.4d27362c.chunk.js",revision:"bf7a4a5e12146db0ce47b86834e6f3dd"},{url:"./static/js/vendors-uiwjs.4d27362c.chunk.js.LICENSE.txt",revision:"c16a7e8412480a23a3caacd8ea7b8b69"},{url:"./static/js/vendors~main.4cf34673.chunk.js",revision:"66499e2a3a61a5b6c475aea93bad9e5f"},{url:"./static/js/vendors~main.4cf34673.chunk.js.LICENSE.txt",revision:"31c9f757710e17ffc2a464c1fbf28c5d"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("//index.html"),{denylist:[/^\/_/,/\/[^\/?]+\.[^\/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
