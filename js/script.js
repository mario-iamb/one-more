!function s(a,i,c){function u(t,e){if(!i[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=i[t]={exports:{}};a[t][0].call(o.exports,function(e){return u(a[t][1][e]||e)},o,o.exports,s,a,i,c)}return i[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var o=new XMLHttpRequest;o.open("GET","http://ip-api.com/json/",!0),o.onload=function(){var e=JSON.parse(this.response);if(200<=o.status&&o.status<400){var t=e.city,n=e.zip,r=e.country;document.querySelector(".geoloaction__msg-city").innerHTML=t,document.querySelector(".geoloaction__msg-postcode").innerHTML=n,document.querySelector(".geoloaction__msg-country").innerHTML=r}else console.log("Ups ... something wrong with the Geo API")},o.send()}},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){document.querySelectorAll(".product__images-item").forEach(function(c){var e=window.getComputedStyle(c,!1),t=e.backgroundImage.slice(4,-1).replace(/['"]/g,""),n=new Image;n.onload=function(){var a=n.naturalWidth,e=n.naturalHeight,i=e/a,t=100*i+"%";c.style.paddingBottom=t,c.onmousemove=function(e){var t=c.clientWidth,n=e.pageX-this.offsetLeft,r=e.pageY-this.offsetTop,o=n/(t/100)+"%",s=r/(t*i/100)+"%";Object.assign(c.style,{backgroundPosition:o+" "+s,backgroundSize:a+"px"})},c.onmouseleave=function(e){Object.assign(c.style,{backgroundPosition:"center",backgroundSize:"cover"})}},n.src=t})}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){document.querySelectorAll(".product__quantity-holder i").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(".product__quantity-holder input").value,n=parseInt(t);e.target.classList.contains("less")?n-=1:e.target.classList.contains("more")&&(n+=1),n<1&&(n=1),document.querySelector(".product__quantity-holder input").value=n})})}},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=document.getElementById("stars"),r=Array.prototype.slice.call(e.children),o=r.length;if(sessionStorage.RatingsCounter){var t=JSON.parse(sessionStorage.getItem("RatingsCounter")),n=JSON.parse(sessionStorage.getItem("accumulatedScore")),s=(n/t).toFixed(2);document.querySelector(".product__rating-counter").innerHTML=t+" votes",document.querySelector(".product__rating-average").innerHTML=s+" / 5.0"}else document.querySelector(".product__rating-counter").innerHTML="Be the first to vote!";e.addEventListener("click",function(e){e.preventDefault();var t=r.indexOf(e.target),n=n=o-t;r.forEach(function(e){return e.classList.remove("is-selected")}),e.target.classList.add("is-selected"),function(e){if(sessionStorage.RatingsCounter){var t=JSON.parse(sessionStorage.getItem("RatingsCounter")),n=JSON.parse(sessionStorage.getItem("accumulatedScore")),r=((n+=e)/(t+=1)).toFixed(2);sessionStorage.setItem("RatingsCounter",JSON.stringify(t)),sessionStorage.setItem("accumulatedScore",JSON.stringify(n)),document.querySelector(".product__rating-counter").innerHTML=t+" votes",document.querySelector(".product__rating-average").innerHTML=r+" / 5.0"}else sessionStorage.setItem("RatingsCounter",JSON.stringify(1)),sessionStorage.setItem("accumulatedScore",JSON.stringify(e)),document.querySelector(".product__rating-counter").innerHTML="You're the first to vote!",document.querySelector(".product__rating-average").innerHTML=e+" / 5.0"}(n)})}},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=document.querySelector(".header__minicart"),t=document.querySelector(".button--add-to-cart"),n=document.querySelector(".mini-cart__close"),r=document.querySelector(".mini-cart"),s=function(e){if(sessionStorage.miniCartValue){var t=JSON.parse(sessionStorage.getItem("miniCartValue"));"add"==e?(t+=1,sessionStorage.setItem("miniCartValue",JSON.stringify(t))):"remove"==e&&(t-=1,sessionStorage.setItem("miniCartValue",JSON.stringify(t))),document.querySelector(".header__minicart-counter").innerHTML=t}else sessionStorage.setItem("miniCartValue",JSON.stringify(0)),document.querySelector(".header__minicart-counter").innerHTML="0"},a=function(){var e=document.querySelector(".mini-cart__message"),r=document.querySelector(".mini-cart__items-holder"),t=document.querySelector(".mini-cart__total"),n=document.querySelector(".mini-cart__total-value");if(sessionStorage.basket){var o=JSON.parse(sessionStorage.getItem("basket")),s=JSON.parse(sessionStorage.getItem("CartTotal"));r.innerHTML="",e.classList.remove("active"),o.forEach(function(e,t){var n="<tr class='prod__item'><td class='prod__name' width='50%'>"+e.name+"</td><td width='50%'><table width='100%' border='0'><tbody><tr><td class='prod__price'><span>&#36;</span>"+e.price+"</td></tr><tr><td class='prod__quantity'><span>Qty: </span>"+e.quantity+"</td></tr><tr><td class='prod__subtotal'><span>Subtotal: &#36;</span>"+e.subtotal+"</td></tr><tr><td class='prod__remove'><a href='#' class='pdelete' data-product='"+t+"'>Remove</a></td></tr></tbody></table></td></tr>";r.insertAdjacentHTML("afterbegin",n)}),t.classList.remove("inactive"),n.innerHTML=s.toFixed(2),"0"==Object.keys(o).length?(e.classList.add("active"),t.classList.add("inactive")):e.classList.remove("active")}else e.classList.add("active")},o=function(){var e,t={};if(t.name=document.querySelector(".product__title").innerHTML,t.price=(e=document.querySelector(".product__price--current").innerHTML,Number(e.replace(/[^0-9.-]+/g,""))),t.quantity=document.querySelector(".product__quantity-holder input").value,t.subtotal=t.price*t.quantity,sessionStorage.basket)n=JSON.parse(sessionStorage.getItem("basket"));else var n=[];n.push(t),sessionStorage.setItem("basket",JSON.stringify(n));var r=n.map(function(e){return e.subtotal}).reduce(function(e,t){return e+t});sessionStorage.setItem("CartTotal",JSON.stringify(r)),s("add")};t.addEventListener("click",function(e){e.preventDefault(),o(),a()}),e.addEventListener("click",function(e){e.preventDefault(),r.style.transform="translateX(0)"}),n.addEventListener("click",function(e){e.preventDefault(),r.style.transform="translateX(100%)"}),a(),s(),document.addEventListener("click",function(e){if(e.target&&"pdelete"==e.target.classList){e.preventDefault();var t=e.target.dataset.product,n=JSON.parse(sessionStorage.getItem("basket")),r=JSON.parse(sessionStorage.getItem("CartTotal")),o=n[t].subtotal;n.splice(t,1),r-=o,sessionStorage.setItem("CartTotal",JSON.stringify(r)),sessionStorage.setItem("basket",JSON.stringify(n)),s("remove"),a()}})}},{}],6:[function(e,t,n){"use strict";var r=c(e("./components/yourBasket")),o=c(e("./components/quantityCounter")),s=c(e("./components/geolocation")),a=c(e("./components/imageZoom")),i=c(e("./components/starRating"));function c(e){return e&&e.__esModule?e:{default:e}}var u=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.yourBasket=new r.default,this.quantityCounter=new o.default,this.geolocation=new s.default,this.imageZoom=new a.default,this.starRating=new i.default};document.addEventListener("DOMContentLoaded",function(){return new u})},{"./components/geolocation":1,"./components/imageZoom":2,"./components/quantityCounter":3,"./components/starRating":4,"./components/yourBasket":5}]},{},[6]);