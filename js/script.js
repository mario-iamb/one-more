!function o(i,c,a){function s(e,t){if(!c[e]){if(!i[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(l)return l(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var u=c[e]={exports:{}};i[e][0].call(u.exports,function(t){return s(i[e][1][t]||t)},u,u.exports,o,i,c,a)}return c[e].exports}for(var l="function"==typeof require&&require,t=0;t<a.length;t++)s(a[t]);return s}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){document.querySelectorAll(".product__quantity-holder i").forEach(function(t){t.addEventListener("click",function(t){t.preventDefault();var e=document.querySelector(".product__quantity-holder input").value,n=parseInt(e);t.target.classList.contains("less")?n-=1:t.target.classList.contains("more")&&(n+=1),n<1&&(n=1),document.querySelector(".product__quantity-holder input").value=n})})}},{}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){document.querySelector(".header__minicart");var t=document.querySelector(".button--add-to-cart"),n=function(t){return Number(t.replace(/[^0-9.-]+/g,""))},r=[],u={};t.addEventListener("click",function(t){t.preventDefault(),u.name=document.querySelector(".product__title").innerHTML,u.price=n(document.querySelector(".product__price--current").innerHTML),u.quantity=document.querySelector(".product__quantity-holder input").value,u.subtotal=u.price*u.quantity,r.push(u),sessionStorage.setItem("CartItems",JSON.stringify(r));var e=r.map(function(t){return t.subtotal}).reduce(function(t,e){return t+e});sessionStorage.setItem("CartTotal",JSON.stringify(e))})}},{}],3:[function(t,e,n){"use strict";var r=o(t("./components/testModule")),u=o(t("./components/quantityCounter"));function o(t){return t&&t.__esModule?t:{default:t}}var i=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.testModule=new r.default,this.quantityCounter=new u.default};document.addEventListener("DOMContentLoaded",function(){return new i})},{"./components/quantityCounter":1,"./components/testModule":2}]},{},[3]);