(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".burger-header"),t=document.querySelector("body"),n=document.querySelector("header"),s=document.querySelector(".header__backdrop");function i(){e.classList.remove("active"),t.classList.remove("hide"),n.classList.remove("on")}e.addEventListener("click",(function(s){s.target.classList.contains("menu-burger__list")||(e.classList.toggle("active"),t.classList.toggle("hide"),n.classList.toggle("on"),s.target.parentNode.classList.contains("menu-burger__item")&&i())})),s.addEventListener("click",(()=>{i()}))}),!1),document.addEventListener("DOMContentLoaded",(function(){let e=Array.from(document.querySelectorAll(".a")),t=e.length;window.addEventListener("load",(()=>{function n(e){e.classList.contains("part")?function(e){(function(e){let t=e.getBoundingClientRect(),n=t.top,s=t.bottom,i=t.height;return n+i>=0&&i+window.innerHeight>=s})(e)&&(e.classList.add("v"),e.classList.remove("part"),e.classList.remove("a"),t--,e.classList.contains("skills__items")&&animeElements())}(e):e.classList.contains("full")&&function(e){(function(e){let t=e.getBoundingClientRect(),n=t.top,s=t.bottom;return n>=0&&s<=window.innerHeight})(e)&&(e.classList.add("v"),e.classList.remove("full"),e.classList.remove("a"),t--)}(e)}e.map((e=>n(e))),window.addEventListener("scroll",(()=>{t>0&&e.forEach((e=>{n(e)}))}))}))}),!1),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".signUp-from__login"),t=document.querySelector(".signUp-from__password"),n=document.querySelector(".signUp-from__passwordAgain"),s=document.querySelector(".signUp-from__submit"),i=document.querySelector(".left-signUp__form");s.disabled=!0;let a={thisMinLength:"8",thisMaxLength:"200",pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/};function o(e){if(e.value.trim().length>"2"&&e.value.trim().length<"28")return!0}function l(e){if(e.value.trim().length>a.thisMinLength&&e.value.trim().length<a.thisMaxLength&&a.pattern.test(e.value.trim()))return!0}function r(){return t.value===n.value}function c(){e.value.length>0&&!o(e)?e.classList.add("unvalid"):e.classList.contains("unvalid")&&e.classList.remove("unvalid")}function d(){t.value.length>0&&!l(t)?t.classList.add("unvalid"):t.classList.contains("unvalid")&&t.classList.remove("unvalid")}function u(){r()?n.classList.contains("unvalid")&&n.classList.remove("unvalid"):n.classList.add("unvalid")}c(),d(),e.addEventListener("blur",(()=>{c()})),e.addEventListener("input",(()=>{c(),i.onchange()})),t.addEventListener("blur",(()=>{d(),u()})),t.addEventListener("input",(()=>{d(),i.onchange()})),n.addEventListener("blur",(()=>{u()})),n.addEventListener("input",(()=>{u(),i.onchange()})),i.onchange=()=>{r()&&l(t)&&o(e)?s.disabled=!1:s.disabled=!0},i.onchange()}),!1)})();