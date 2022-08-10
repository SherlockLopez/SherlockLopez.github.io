!function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function c(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((r=r.apply(t,e||[])).next())}))}let n=(t,e,n)=>{let r=document.createElement(e);return n&&n.forEach(((t,e,n)=>{r.classList.add(t)})),t.appendChild(r),r};var r,o=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function c(t){return"string"==typeof t&&a.test(t)}for(var s=[],l=0;l<256;++l)s.push((l+256).toString(16).substr(1));function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n}function u(t,e,n){function r(t,r,o,i){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],n=0;n<t.length;++n)e.push(t.charCodeAt(n));return e}(t)),"string"==typeof r&&(r=function(t){if(!c(t))throw TypeError("Invalid UUID");var e,n=new Uint8Array(16);return n[0]=(e=parseInt(t.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=255&e,n[4]=(e=parseInt(t.slice(9,13),16))>>>8,n[5]=255&e,n[6]=(e=parseInt(t.slice(14,18),16))>>>8,n[7]=255&e,n[8]=(e=parseInt(t.slice(19,23),16))>>>8,n[9]=255&e,n[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=255&e,n}(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var a=new Uint8Array(16+t.length);if(a.set(r),a.set(t,r.length),(a=n(a))[6]=15&a[6]|e,a[8]=63&a[8]|128,o){i=i||0;for(var s=0;s<16;++s)o[i+s]=a[s];return o}return d(a)}try{r.name=t}catch(t){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function f(t){return 14+(t+64>>>9<<4)+1}function h(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function p(t,e,n,r,o,i){return h((a=h(h(e,t),h(r,i)))<<(c=o)|a>>>32-c,n);var a,c}function m(t,e,n,r,o,i,a){return p(e&n|~e&r,t,e,o,i,a)}function v(t,e,n,r,o,i,a){return p(e&r|n&~r,t,e,o,i,a)}function g(t,e,n,r,o,i,a){return p(e^n^r,t,e,o,i,a)}function y(t,e,n,r,o,i,a){return p(n^(e|~r),t,e,o,i,a)}function w(t,e,n){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return d(r)}function b(t,e,n,r){switch(t){case 0:return e&n^~e&r;case 1:case 3:return e^n^r;case 2:return e&n^e&r^n&r}}function I(t,e){return t<<e|t>>>32-e}u("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var n=0;n<e.length;++n)t[n]=e.charCodeAt(n)}return function(t){for(var e=[],n=32*t.length,r="0123456789abcdef",o=0;o<n;o+=8){var i=t[o>>5]>>>o%32&255,a=parseInt(r.charAt(i>>>4&15)+r.charAt(15&i),16);e.push(a)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[f(e)-1]=e;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,a=0;a<t.length;a+=16){var c=n,s=r,l=o,d=i;n=m(n,r,o,i,t[a],7,-680876936),i=m(i,n,r,o,t[a+1],12,-389564586),o=m(o,i,n,r,t[a+2],17,606105819),r=m(r,o,i,n,t[a+3],22,-1044525330),n=m(n,r,o,i,t[a+4],7,-176418897),i=m(i,n,r,o,t[a+5],12,1200080426),o=m(o,i,n,r,t[a+6],17,-1473231341),r=m(r,o,i,n,t[a+7],22,-45705983),n=m(n,r,o,i,t[a+8],7,1770035416),i=m(i,n,r,o,t[a+9],12,-1958414417),o=m(o,i,n,r,t[a+10],17,-42063),r=m(r,o,i,n,t[a+11],22,-1990404162),n=m(n,r,o,i,t[a+12],7,1804603682),i=m(i,n,r,o,t[a+13],12,-40341101),o=m(o,i,n,r,t[a+14],17,-1502002290),n=v(n,r=m(r,o,i,n,t[a+15],22,1236535329),o,i,t[a+1],5,-165796510),i=v(i,n,r,o,t[a+6],9,-1069501632),o=v(o,i,n,r,t[a+11],14,643717713),r=v(r,o,i,n,t[a],20,-373897302),n=v(n,r,o,i,t[a+5],5,-701558691),i=v(i,n,r,o,t[a+10],9,38016083),o=v(o,i,n,r,t[a+15],14,-660478335),r=v(r,o,i,n,t[a+4],20,-405537848),n=v(n,r,o,i,t[a+9],5,568446438),i=v(i,n,r,o,t[a+14],9,-1019803690),o=v(o,i,n,r,t[a+3],14,-187363961),r=v(r,o,i,n,t[a+8],20,1163531501),n=v(n,r,o,i,t[a+13],5,-1444681467),i=v(i,n,r,o,t[a+2],9,-51403784),o=v(o,i,n,r,t[a+7],14,1735328473),n=g(n,r=v(r,o,i,n,t[a+12],20,-1926607734),o,i,t[a+5],4,-378558),i=g(i,n,r,o,t[a+8],11,-2022574463),o=g(o,i,n,r,t[a+11],16,1839030562),r=g(r,o,i,n,t[a+14],23,-35309556),n=g(n,r,o,i,t[a+1],4,-1530992060),i=g(i,n,r,o,t[a+4],11,1272893353),o=g(o,i,n,r,t[a+7],16,-155497632),r=g(r,o,i,n,t[a+10],23,-1094730640),n=g(n,r,o,i,t[a+13],4,681279174),i=g(i,n,r,o,t[a],11,-358537222),o=g(o,i,n,r,t[a+3],16,-722521979),r=g(r,o,i,n,t[a+6],23,76029189),n=g(n,r,o,i,t[a+9],4,-640364487),i=g(i,n,r,o,t[a+12],11,-421815835),o=g(o,i,n,r,t[a+15],16,530742520),n=y(n,r=g(r,o,i,n,t[a+2],23,-995338651),o,i,t[a],6,-198630844),i=y(i,n,r,o,t[a+7],10,1126891415),o=y(o,i,n,r,t[a+14],15,-1416354905),r=y(r,o,i,n,t[a+5],21,-57434055),n=y(n,r,o,i,t[a+12],6,1700485571),i=y(i,n,r,o,t[a+3],10,-1894986606),o=y(o,i,n,r,t[a+10],15,-1051523),r=y(r,o,i,n,t[a+1],21,-2054922799),n=y(n,r,o,i,t[a+8],6,1873313359),i=y(i,n,r,o,t[a+15],10,-30611744),o=y(o,i,n,r,t[a+6],15,-1560198380),r=y(r,o,i,n,t[a+13],21,1309151649),n=y(n,r,o,i,t[a+4],6,-145523070),i=y(i,n,r,o,t[a+11],10,-1120210379),o=y(o,i,n,r,t[a+2],15,718787259),r=y(r,o,i,n,t[a+9],21,-343485551),n=h(n,c),r=h(r,s),o=h(o,l),i=h(i,d)}return[n,r,o,i]}(function(t){if(0===t.length)return[];for(var e=8*t.length,n=new Uint32Array(f(e)),r=0;r<e;r+=8)n[r>>5]|=(255&t[r/8])<<r%32;return n}(t),8*t.length))})),u("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var r=unescape(encodeURIComponent(t));t=[];for(var o=0;o<r.length;++o)t.push(r.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var i=t.length/4+2,a=Math.ceil(i/16),c=new Array(a),s=0;s<a;++s){for(var l=new Uint32Array(16),d=0;d<16;++d)l[d]=t[64*s+4*d]<<24|t[64*s+4*d+1]<<16|t[64*s+4*d+2]<<8|t[64*s+4*d+3];c[s]=l}c[a-1][14]=8*(t.length-1)/Math.pow(2,32),c[a-1][14]=Math.floor(c[a-1][14]),c[a-1][15]=8*(t.length-1)&4294967295;for(var u=0;u<a;++u){for(var f=new Uint32Array(80),h=0;h<16;++h)f[h]=c[u][h];for(var p=16;p<80;++p)f[p]=I(f[p-3]^f[p-8]^f[p-14]^f[p-16],1);for(var m=n[0],v=n[1],g=n[2],y=n[3],w=n[4],A=0;A<80;++A){var U=Math.floor(A/20),E=I(m,5)+b(U,v,g,y)+w+e[U]+f[A]>>>0;w=y,y=g,g=I(v,30)>>>0,v=m,m=E}n[0]=n[0]+m>>>0,n[1]=n[1]+v>>>0,n[2]=n[2]+g>>>0,n[3]=n[3]+y>>>0,n[4]=n[4]+w>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]}));var A={root:{static:{modules:{"buttons.html":w()},css:{"normalize.css":w(),"skeleton.css":w()},pages:{"H5.html":w(),"Home.html":w(),"Limited.html":w(),"Index.html":w()}}}};let U=()=>e(void 0,void 0,void 0,(function*(){let e=yield t.getItem("hash");if(null==e){return yield t.setItem("hash",A)}return e})),E=t=>e(void 0,void 0,void 0,(function*(){const n=yield e(void 0,void 0,void 0,(function*(){let t=yield U(),e={};return e[t.root.static.modules["buttons.html"]]=()=>{document.getElementById("afee2de5-9278-4c74-ba86-3e190ca39e8b").onclick=()=>window.location.hash="pages-Home.html",document.getElementById("8263f369-77ee-4a95-b786-89fd47ef12c7").onclick=()=>window.location.hash="pages-Limited.html",document.getElementById("eb27e947-d14c-4723-86db-70f8ed7791e8").onclick=()=>window.location.hash="pages-Index.html"},e[t.root.static.pages["Home.html"]]=()=>{document.getElementById("4cd179c9-2cb8-4818-87f7-245940c575ec").setAttribute("data-content","13"),document.getElementById("637d1622-2f7b-4d20-897a-f1d3ef0018b0").setAttribute("data-content","103")},e}));t in n&&n[t]()}));let C=()=>e(void 0,void 0,void 0,(function*(){let e=yield t.getItem("version"),n=yield(yield fetch("./static/version.txt")).text();e!==n&&(console.log("clear"),t.clear((e=>{e?C():t.setItem("version",n)})))}));const L=["pages-Home.html","pages-Limited.html","pages-Index.html"];let H=(n,r,o)=>e(void 0,void 0,void 0,(function*(){const i=yield U();let a,c="./static",s=i.root.static,l=[],d=[],u=(t,n)=>e(void 0,void 0,void 0,(function*(){return o&&(o(t),E(s)),t}));if(n.forEach(((t,e,n)=>{"string"!=typeof s&&t in s?(c=`${c}/${t}`,s=s[t],d.push(t)):l.push(t)})),a=d.join("-"),console.log(l,a),"pages"!=r||L.includes(window.location.hash.slice(1))){let e=yield t.getItem(s);if(null==e){let e=yield fetch(c),n=yield e.text();return 200==e.status?(t.setItem(s,n),u(n)):u(n)}return u(e)}return window.location.hash="pages-Home.html",yield H(window.location.hash.slice(1).split("-"),"pages",o)})),R=document.getElementById("root"),x=n(R,"div",["container"]),B=n(R,"div",["container"]);x.id="titleBar",B.id="mainContent",x.setAttribute("data","你好");e(void 0,void 0,void 0,(function*(){yield C(),H(["modules","buttons.html"],"module",(t=>{x.innerHTML=t})),H(window.location.hash.slice(1).split("-"),"pages",(t=>{B.innerHTML=t})),window.addEventListener("hashchange",(t=>{H(window.location.hash.slice(1).split("-"),"pages",(t=>{B.innerHTML=t}))}))}))}(localforage);
//# sourceMappingURL=bundle.js.map
