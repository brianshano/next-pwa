if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const a={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return a;default:return e(r)}})).then(e=>{const r=n(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-dad3bd2e"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"Ha3TJ8lXnPTDL3KWw-Sbw"},{url:"/_next/static/Ha3TJ8lXnPTDL3KWw-Sbw/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/Ha3TJ8lXnPTDL3KWw-Sbw/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/Ha3TJ8lXnPTDL3KWw-Sbw/pages/_app.js",revision:"ff1443ee5f14a46a29575e9eaee9d5dd"},{url:"/_next/static/Ha3TJ8lXnPTDL3KWw-Sbw/pages/_error.js",revision:"dad27fc55d619a843984d50c44a7de3f"},{url:"/_next/static/Ha3TJ8lXnPTDL3KWw-Sbw/pages/index.js",revision:"c709cdb70b6848312441bf42812059e4"},{url:"/_next/static/chunks/53fbfbfed9756619a3039dc5945a06770741724b.c2e7b864cd5f7c77da15.js",revision:"31894fb1057ec4f2d21d020bf39bb1a3"},{url:"/_next/static/chunks/framework.c6faae2799416a6da8e8.js",revision:"a07dacbb502f5257565ceb7d460e71e6"},{url:"/_next/static/runtime/main-81a187e1ac52122a7453.js",revision:"cdbc2281e61457453c83623f6557bbac"},{url:"/_next/static/runtime/polyfills-db3eeaf8fbc6db3a50d4.js",revision:"cf3e362240114c40790b57c8ebecab35"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/favicon-16x16.png",revision:"25e5d7d6e78f452f57a312fb925c9ad7"},{url:"/favicon-32x32.png",revision:"271c54a73af64e91f5634c13f9086684"},{url:"/favicon.ico",revision:"85340bac69a1b0f7268e19bdd8ecba8d"},{url:"/icon-192.png",revision:"88caee97f63e27ab1942a6218dc857e4"},{url:"/icon-512.png",revision:"f1dca9e5dc71cdcf8dbbbb6265356b1f"},{url:"/manifest.json",revision:"10fb930f90252bbcea9bb1c76cdc456b"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"https-calls",networkTimeoutSeconds:15,plugins:[new e.ExpirationPlugin({maxEntries:150,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
