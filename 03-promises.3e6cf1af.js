function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const l=document.querySelector(".form"),u=document.querySelector("[name=delay]"),a=document.querySelector("[name=step]"),d=document.querySelector("[name=amount]");let s=0;function c(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}l.addEventListener("submit",(function(t){t.preventDefault();setTimeout((()=>{for(let t=0;t<d.value;t+=1){const o=+u.value+ +a.value*t;s=t,c(s,o).then((({position:t,delay:o})=>{e(i).Notify.success(`Fulfilled promise ${t+1} in ${o} ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`Rejected promise ${t+1} in ${o} ms`)}))}}),u.value)}));
//# sourceMappingURL=03-promises.3e6cf1af.js.map