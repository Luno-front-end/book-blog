(self.webpackChunkbook_blog=self.webpackChunkbook_blog||[]).push([[179],{613:function(e,t){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,l){function i(e){try{a(o.next(e))}catch(e){l(e)}}function c(e){try{a(o.throw(e))}catch(e){l(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((o=o.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,o,r,l,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function c(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&l[0]?o.return:l[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,l[1])).done)return r;switch(o=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,o=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(6===l[0]&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],o=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};function l(e){var t=0,n=0,o=e;do{t+=o.offsetTop||0,n+=o.offsetLeft||0,o=o.offsetParent}while(o);return{top:t,left:n}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.element=e}return e.prototype.getHorizontalScroll=function(){return this.element.scrollLeft},e.prototype.getVerticalScroll=function(){return this.element.scrollTop},e.prototype.getMaxHorizontalScroll=function(){return this.element.scrollWidth-this.element.clientWidth},e.prototype.getMaxVerticalScroll=function(){return this.element.scrollHeight-this.element.clientHeight},e.prototype.getHorizontalElementScrollOffset=function(e,t){return l(e).left-l(t).left},e.prototype.getVerticalElementScrollOffset=function(e,t){return l(e).top-l(t).top},e.prototype.scrollTo=function(e,t){this.element.scrollLeft=e,this.element.scrollTop=t},e}(),c=function(){function e(){}return e.prototype.getHorizontalScroll=function(){return window.scrollX||document.documentElement.scrollLeft},e.prototype.getVerticalScroll=function(){return window.scrollY||document.documentElement.scrollTop},e.prototype.getMaxHorizontalScroll=function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth},e.prototype.getMaxVerticalScroll=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight},e.prototype.getHorizontalElementScrollOffset=function(e){return(window.scrollX||document.documentElement.scrollLeft)+e.getBoundingClientRect().left},e.prototype.getVerticalElementScrollOffset=function(e){return(window.scrollY||document.documentElement.scrollTop)+e.getBoundingClientRect().top},e.prototype.scrollTo=function(e,t){window.scrollTo(e,t)},e}(),a={elements:[],cancelMethods:[],add:function(e,t){a.elements.push(e),a.cancelMethods.push(t)},remove:function(e,t){void 0===t&&(t=!0);var n=a.elements.indexOf(e);n>-1&&(t&&a.cancelMethods[n](),a.elements.splice(n,1),a.cancelMethods.splice(n,1))}},u="undefined"!=typeof window,s={cancelOnUserAction:!0,easing:function(e){return--e*e*e+1},elementToScroll:u?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0};function f(e,t){return void 0===t&&(t={}),o(this,void 0,void 0,(function(){var o,l,f,d,m,p,h,v,y,g,w,b,S,E,T,M;return r(this,(function(r){if(!u)return[2,new Promise((function(e){e(!1)}))];if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";if(d=n(n({},s),t),m=d.elementToScroll===window,p=!!d.elementToScroll.nodeName,!m&&!p)throw"Element to scroll needs to be either window or DOM element.";if(h=m?new c:new i(d.elementToScroll),e instanceof Element){if(f=e,p&&(!d.elementToScroll.contains(f)||d.elementToScroll.isSameNode(f)))throw"options.elementToScroll has to be a parent of scrollToElement";o=h.getHorizontalElementScrollOffset(f,d.elementToScroll),l=h.getVerticalElementScrollOffset(f,d.elementToScroll)}else if("number"==typeof e)o=h.getHorizontalScroll(),l=e;else{if(!Array.isArray(e)||2!==e.length)throw"Wrong function signature. Check documentation.\nAvailable method signatures are:\n  animateScrollTo(y:number, options)\n  animateScrollTo([x:number | null, y:number | null], options)\n  animateScrollTo(scrollToElement:Element, options)";o=null===e[0]?h.getHorizontalScroll():e[0],l=null===e[1]?h.getVerticalScroll():e[1]}return o+=d.horizontalOffset,l+=d.verticalOffset,v=h.getMaxHorizontalScroll(),y=h.getHorizontalScroll(),o>v&&(o=v),g=o-y,w=h.getMaxVerticalScroll(),b=h.getVerticalScroll(),l>w&&(l=w),S=l-b,E=Math.abs(Math.round(g/1e3*d.speed)),T=Math.abs(Math.round(S/1e3*d.speed)),(M=E>T?E:T)<d.minDuration?M=d.minDuration:M>d.maxDuration&&(M=d.maxDuration),[2,new Promise((function(e,t){var n;0===g&&0===S&&e(!0),a.remove(d.elementToScroll,!0);var r=function(){s(),cancelAnimationFrame(n),e(!1)};a.add(d.elementToScroll,r);var i=d.cancelOnUserAction?r:function(e){return e.preventDefault()},c=d.cancelOnUserAction?{passive:!0}:{passive:!1},u=["wheel","touchstart","keydown","mousedown"],s=function(){u.forEach((function(e){d.elementToScroll.removeEventListener(e,i,c)}))};u.forEach((function(e){d.elementToScroll.addEventListener(e,i,c)}));var f=Date.now(),m=function(){var t=Date.now()-f,r=t/M,i=Math.round(y+g*d.easing(r)),c=Math.round(b+S*d.easing(r));t<M&&(i!==o||c!==l)?(h.scrollTo(i,c),n=requestAnimationFrame(m)):(h.scrollTo(o,l),cancelAnimationFrame(n),s(),a.remove(d.elementToScroll,!1),e(!0))};n=requestAnimationFrame(m)}))]}))}))}t.default=f,u&&(window.animateScrollTo=f)},100:(e,t,n)=>{"use strict";var o=n(379),r=n.n(o),l=n(452),i={insert:"head",singleton:!1};r()(l.Z,i);l.Z.locals;var c=n(613),a=n.n(c),u=document.getElementById("btnScroll"),s=document.getElementById("section-book");u.addEventListener("click",(function(e){a()(s)}));var f=document.getElementById("author-scroll"),d=document.getElementById("contacts-scroll"),m=document.getElementById("author"),p=document.getElementById("contacts");f.addEventListener("click",(function(e){e.preventDefault(),a()(m)})),d.addEventListener("click",(function(e){e.preventDefault(),a()(p)}));var h=document.getElementById("goTop"),v=document.getElementById("head");window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&h.classList.add("btn-up-show");e<t&&h.classList.remove("btn-up-show")})),h.addEventListener("click",(function(){window.pageYOffset>0&&a()(v)}));n(699)},699:()=>{var e=document.querySelector(".pop-up-container"),t=document.getElementById("pop-up"),n=document.getElementById("close");function o(){e.classList.toggle("is-hidden")}t.addEventListener("click",o),n.addEventListener("click",o)},452:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(15),r=n.n(o),l=n(645),i=n.n(l)()(r());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const c=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var l=0;l<this.length;l++){var i=this[l][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},15:e=>{"use strict";function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,l=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}e.exports=function(e){var n=t(e,4),o=n[1],r=n[3];if("function"==typeof btoa){var l=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),c="/*# ".concat(i," */"),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[o].concat(a).concat([c]).join("\n")}return[o].join("\n")}},379:(e,t,n)=>{"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},l=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},o=[],r=0;r<e.length;r++){var l=e[r],a=t.base?l[0]+t.base:l[0],u=n[a]||0,s="".concat(a," ").concat(u);n[a]=u+1;var f=c(s),d={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:v(d,t),references:1}),o.push(s)}return o}function u(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=l(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var l=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(l,i[t]):e.appendChild(l)}}function m(e,t,n){var o=n.css,r=n.media,l=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),l&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,h=0;function v(e,t){var n,o,r;if(t.singleton){var l=h++;n=p||(p=u(t)),o=d.bind(null,n,l,!1),r=d.bind(null,n,l,!0)}else n=u(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var l=a(e,t),u=0;u<n.length;u++){var s=c(n[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=l}}}}},0,[[100,666]]]);
//# sourceMappingURL=main.64ba3fff5d8e6c5aacba.js.map