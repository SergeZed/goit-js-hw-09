const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");const d=()=>document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`;let n="";e.disabled=!0,t.addEventListener("click",(function(o){n=setInterval(d,2e3,2e3),e.disabled=!1,t.disabled=!0})),e.addEventListener("click",(function(d){clearInterval(n),e.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.290af073.js.map