!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(function(e){return(()=>{"use strict";var t={297:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var c=r[e]={exports:{}};return t[e](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{DynamicComponent:()=>u,default:()=>l,loadModule:()=>e,useInjectScript:()=>a});const e=function(e,t){return function(){return window[e].get("./".concat(t)).then((function(e){return e()})).catch((function(e){console.error(e)}))}};var t=n(297),r=n.n(t);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const a=function(e){var n=c(r().useState(!1),2),o=n[0],i=n[1],a=c(r().useState(!1),2),u=a[0],l=a[1];return(0,t.useEffect)((function(){if(e.url){var t=document.createElement("script");return t.src=e.url,t.type="text/javascript",t.async=!0,i(!1),l(!1),t.onload=function(){console.log("Dynamic Script Injected: ".concat(e.url)),i(!0)},t.onerror=function(){console.error("Dynamic Script Failed: ".concat(e.url)),i(!1),l(!0)},document.head.appendChild(t),function(){console.log("Dynamic Script Removed: ".concat(e.url)),document.head.removeChild(t)}}}),[e.url]),{scriptReady:o,scriptFailed:u}},u=function(n){var o=a({url:n.config&&n.config.url}),c=o.scriptReady,i=o.scriptFailed;if(!n.config)return r().createElement("h2",null,"No Config specified");if(!c)return r().createElement("h2",null,"Loading dynamic script: ",n.config.url);if(i)return r().createElement("h2",null,"Failed to load dynamic script: ",n.config.url);var u=(0,t.lazy)(e(n.config.scope,n.config.module));return r().createElement(t.Suspense,{fallback:n.lazyFallback},r().createElement(u,null))},l={loadModule:e,useInjectScript:a,DynamicComponent:u}})(),o})()}));