!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n){let t,o,r=document.getElementById("running-value"),a=document.getElementById("upcoming-value"),l=document.getElementById("in24hr-value"),s=document.querySelectorAll(".value"),c=document.getElementById("dark-btn");function i(e){var n=e.getHours(),t=(e.getDay(),e.getMinutes()),o=n>=12?"PM":"AM",r=(n=(n%=12)||12)+":"+(t=t<10?"0"+t:t)+" "+o;return e.toString().match(/\w{3} \w{3} \d{1,2} \d{4}/)[0]+" "+r}function d(e){const n=e.start_time,t=e.end_time,o=new Date(n),r=new Date(t);return`<section class="section">\n  <div class="col s12 m12 l12">\n    <span class="platform flow-text left" id="name"\n      ><a href="${e.url}">${e.name}</a></span\n    >\n  </div>\n  <div class="col s12 m6 l6">\n    <span class="platform flow-text left" id="platform"\n      >${e.site}</span\n    >\n  </div>\n  <div class="col s12 m6 l6" id="duration">\n    <span class="platform flow-text left" id="duration"\n      >${function(e){let n,t,o;return n=Math.floor(e/3600),e%=3600,t=Math.floor(e/60),o=e%=60,`${n} Hrs ${t} Mins ${o} Seconds`}(e.duration)}</span\n    >\n  </div>\n  <div class="col s12 m6 l6">\n    <span><b>From - ${i(o)}</b></span>\n  </div>\n  <div class="col s12 m6 l6">\n    <span><b>To - ${i(r)}</b></span>\n  </div>\n</section> <div class="col s12 m12 l12"><hr /></div>`}c.addEventListener("click",()=>{"on"==c.value?(c.value="off",document.body.className=document.body.className.replace("darken-4","lighten-3"),document.body.className=document.body.className.replace("text-lighten-2","text-darken-4"),s.forEach(e=>{e.classList.remove("darken-3"),e.classList.add("lighten-2")})):(c.value="on",document.body.className=document.body.className.replace("lighten-3","darken-4"),document.body.className=document.body.className.replace("text-darken-4","text-lighten-2"),s.forEach(e=>{e.classList.remove("lighten-2"),e.classList.add("darken-3")}))});let u=0,m=0,f=0;fetch("https://kontests.net/api/v1/all").then(e=>e.json()).then(e=>{t=e,r.innerHTML="",l.innerHTML="",a.innerHTML="",fetch("http://worldclockapi.com/api/json/utc/now").then(e=>e.json()).then(e=>{o=e.currentDateTime}).then(()=>{t.forEach(e=>{if(e.start_time<=o&&e.end_time>o){let n=d(e);u<10&&(r.insertAdjacentHTML("beforeend",n),u+=1)}else{let n=d(e);m<15&&(a.insertAdjacentHTML("beforeend",n),m+=1)}if("Yes"===e.in_24_hours){let n=d(e);f<10&&(l.insertAdjacentHTML("beforeend",n),f+=1)}})})}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".scrollspy");M.ScrollSpy.init(e);console.log("samar")}))}]);