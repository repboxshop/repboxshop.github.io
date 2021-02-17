System.register(["single-spa","@angular/core"],(function(e){var t,r;return{setters:[function(e){t=e},function(e){r=e}],execute:function(){e(function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,r){e.exports=t},function(e,t,r){function n(e,t){const r=document.createElement("a");r.href=e;const n="/"===r.pathname[0]?r.pathname:"/"+r.pathname;let o=0,i=n.length;for(;o!==t&&i>=0;){"/"===n[--i]&&o++}if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);const u=n.slice(0,i+1);return r.protocol+"//"+r.host+u}t.setPublicPath=function(e,t){if(t||(t=1),"string"!=typeof e||0===e.trim().length)throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'");if("number"!=typeof t||t<=0||isNaN(t)||!o(t))throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'");let i;try{if(i=window.System.resolve(e),!i)throw Error()}catch(t){throw Error("systemjs-webpack-interop: There is no such module '"+e+"' in the SystemJS registry. Did you misspell the name of your module?")}r.p=n(i,t)},t.resolveDirectory=n;const o=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},function(e,t){e.exports=r},function(e,t,r){r(4),e.exports=r(5)},function(e,t,r){"use strict";r.r(t),function(e){var t=r(1);const n=e.replace(/\?/g,"").split("&").reduce((function(e,t){const r=t.split("=");return e[r[0]]=r[1],e}),{});Object(t.setPublicPath)(decodeURIComponent(n.systemjsModuleName),Number(n.rootDirectoryLevel))}.call(this,"?systemjsModuleName=%40mbc%2Froot-config&rootDirectoryLevel=1")},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(2);function i(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object(o.enableProdMode)();!function(e){var t,r=i(e);try{var o=function(){var e=t.value;n.registerApplication({name:e.name,app:function(){return t=e.name,Promise.resolve().then((function(){return document.getElementById("single-spa-loader-app").style.display="block",System.import(t)})).then((function(e){return document.getElementById("single-spa-loader-app").style.display="none",e}));var t},activeWhen:e.activeWhen})};for(r.s();!(t=r.n()).done;)o()}catch(e){r.e(e)}finally{r.f()}}([{name:"@mbc/general-mf",activeWhen:["#/"]},{name:"@mbc/tasks-mf",activeWhen:["#/tasks-mf"]},{name:"@mbc/authentication-mf",activeWhen:["#/authentication-mf"]}]),n.start({urlRerouteOnly:!0})}]))}}}));
//# sourceMappingURL=mbc-root-config.js.map