(this["webpackJsonpkuchnia-na-obcasach"]=this["webpackJsonpkuchnia-na-obcasach"]||[]).push([[1],{10:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var n="https://kuchnianaobcasach.atthost24.pl/wp-json/wp/v2/",c=12},18:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(){return c.a.createElement("div",{className:"preloader"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))}},22:function(e,t,a){e.exports=a.p+"static/media/logo.b4450004.png"},27:function(e,t,a){e.exports=a(38)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),o=a.n(r),i=a(8),s=a.n(i),l=a(11),u=a(7),m=a(5),_=a(1),g=a(18),f=a(22),b=a.n(f),h=a(10),p=Object(_.h)((function(e){var t=e.history,a=e.handleTopBar,r=Object(n.useState)({tags:[],isLoading:!0}),o=Object(u.a)(r,2),i=o[0],m=o[1],_=Object(n.useState)(""),g=Object(u.a)(_,2),f=g[0],b=g[1],p=Object(n.useState)(""),v=Object(u.a)(p,2),d=v[0],k=v[1];Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h.a,"tags?search=").concat(f));case 3:if((t=e.sent).ok){e.next=7;break}return e.next=7,m({tags:[],isLoading:!1});case 7:return e.t0=m,e.next=10,t.json();case 10:e.t1=e.sent,e.t2={tags:e.t1,isLoading:!1},(0,e.t0)(e.t2),e.next=19;break;case 15:return e.prev=15,e.t3=e.catch(0),e.next=19,m({tags:[],isLoading:!1});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();f.length>0&&e()}),[f]);var E=function(e){k(i.tags[0].slug)};return c.a.createElement("form",{className:"search",onSubmit:function(e){e.preventDefault(),a(),d.length>0&&t.push("/tagi/".concat(d)),b(""),e.target.reset()}},c.a.createElement("label",{htmlFor:"search",className:"search__label"},"Wyszukaj"),c.a.createElement("input",{id:"search",type:"text",placeholder:"Wyszukaj po tagu",className:"search__input",value:f,onChange:function(e){b(e.target.value),i.tags.length>0&&E()},autoComplete:"off"}),c.a.createElement("button",{type:"submit",className:"search__button","aria-label":"Szukaj"},c.a.createElement("i",{className:"icon-search"})))})),v=function(e){var t=e.className;return c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{href:"https://www.facebook.com/Kuchnia-na-Obcasach-493976237282868/",rel:"noopener noreferrer",target:"_blank",className:t,"aria-label":"Facebook"},c.a.createElement("i",{className:"icon-facebook"})),c.a.createElement("a",{href:"https://twitter.com/Knaobcasach",className:t,"aria-label":"Twitter",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("i",{className:"icon-twitter"})),c.a.createElement("a",{href:"https://www.instagram.com/kuchnia_na_obcasach/",rel:"noopener noreferrer",target:"_blank",className:t,"aria-label":"Instagram"},c.a.createElement("i",{className:"icon-instagram"})),c.a.createElement("a",{href:"https://pl.pinterest.com/KuchniaObcasach/",rel:"noopener noreferrer",target:"_blank",className:t,"aria-label":"Pinterest"},c.a.createElement("i",{className:"icon-pinterest"})),c.a.createElement("a",{href:"mailto:monika.kuchnianaobcasach@gmail.com",className:t,"aria-label":"E-mail"},c.a.createElement("i",{className:"icon-mail"})))},d=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),r=Object(n.useRef)(),o=Object(n.useRef)(),i=Object(_.g)(),g=Object(n.useState)({categories:[],isLoading:!0,countCategories:1}),f=Object(u.a)(g,2),d=f[0],k=f[1];Object(n.useEffect)((function(){E()}),[d.countCategories]);var E=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(h.a,"categories?per_page=").concat(d.countCategories),e.prev=1,e.next=4,fetch(t);case 4:if((a=e.sent).ok){e.next=7;break}return e.abrupt("return");case 7:return e.t0=k,e.next=10,a.json();case 10:e.t1=e.sent,e.t2=a.headers.get("X-WP-Total"),e.t3={categories:e.t1,isLoading:!1,countCategories:e.t2},(0,e.t0)(e.t3),e.next=19;break;case 16:return e.prev=16,e.t4=e.catch(1),e.abrupt("return");case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}(),w=function(){e.current.classList.toggle("reset-translate"),t.current.classList.toggle("rotate-180")},N=function(){a.current.classList.toggle("reset-translate"),r.current.classList.toggle("hamburger-transform")},j=function(){o.current.classList.toggle("show-categories")},y=function(){window.innerWidth<=650&&(o.current.classList.contains("show-categories")&&j(),N())},O=function(e){var t=e.target.children;1===t.length&&i.push("".concat(t[0].getAttribute("href"))),window.innerWidth<=650&&2===t.length&&j()};return c.a.createElement("nav",{className:"navigation"},c.a.createElement("div",{className:"navigation__top",ref:e},c.a.createElement("div",{className:"navigation__top__media"},c.a.createElement(v,{className:"navigation__top__media__link"})),c.a.createElement("div",{className:"navigation__top__search"},c.a.createElement(p,{handleTopBar:w})),c.a.createElement("button",{"aria-label":"Otw\xf3rz",className:"navigation__top__open",onClick:w,ref:t},c.a.createElement("i",{className:"icon-menu-arrow"}))),c.a.createElement("div",{className:"navigation__center"},c.a.createElement(m.b,{to:"/",className:"navigation__center__link"},c.a.createElement("img",{src:b.a,alt:"Kuchnia na obcasach",title:"Kuchnia na obcasach"}))),c.a.createElement("div",{className:"navigation__bottom"},c.a.createElement("button",{"aria-label":"Otw\xf3rz menu",className:"navigation__bottom__hamburger",onClick:N,ref:r}),c.a.createElement("ul",{className:"navigation__bottom__menu",ref:a},c.a.createElement("li",{className:"navigation__bottom__menu__item",onClick:function(e){y(),O(e)}},c.a.createElement(m.c,{exact:!0,to:"/",className:"navigation__bottom__menu__item__link",activeClassName:"active"},"Strona g\u0142\xf3wna")),c.a.createElement("li",{className:"navigation__bottom__menu__item",onClick:function(e){O(e)}},c.a.createElement(m.b,{to:"#",className:"navigation__bottom__menu__item__link",onClick:j},"Kategorie"),c.a.createElement("ul",{className:"navigation__bottom__menu__item__categories",ref:o,onClick:y},d.categories.length>0&&d.categories.map((function(e){var t=e.id,a=e.name,n=e.slug;return"bez-kategorii"===n?null:c.a.createElement("li",{className:"navigation__bottom__menu__item__categories__item",key:t,onClick:function(e){O(e)}},c.a.createElement(m.c,{exact:!0,activeClassName:"active",to:"/kategorie/".concat(n),className:"navigation__bottom__menu__item__categories__item__link"},a))})))),c.a.createElement("li",{className:"navigation__bottom__menu__item",onClick:function(e){y(),O(e)}},c.a.createElement(m.c,{exact:!0,activeClassName:"active",to:"/o-mnie",className:"navigation__bottom__menu__item__link",onClick:y},"O mnie")),c.a.createElement("li",{className:"navigation__bottom__menu__item",onClick:function(e){y(),O(e)}},c.a.createElement(m.c,{exact:!0,activeClassName:"active",to:"/kontakt-i-wspolpraca",className:"navigation__bottom__menu__item__link",onClick:y},"Kontakt i wsp\xf3\u0142praca")))))},k=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footer__copyright"},c.a.createElement("span",null,"\xa9 2020 kuchnia na obcasach"),c.a.createElement("span",{className:"footer__media"},c.a.createElement(v,{className:"footer__media__link"})),c.a.createElement("span",null,"Projekt i realizacja\xa0",c.a.createElement("a",{href:"https://www.linkedin.com/in/kbuczynski/",rel:"noopener noreferrer",target:"_blank"},"Kbuczynski"))))},E=a(24);a.n(E).a.polyfill();var w=function(){return c.a.createElement("div",{className:"scroll",onClick:function(){return window.scroll({top:0,left:0,behavior:"smooth"})}},c.a.createElement("span",{className:"scroll__arrow"}))},N=function(e){var t=e.handleCookies;return c.a.createElement("div",{className:"cookiesAlert"},c.a.createElement("p",{className:"cookiesAlert__text"},"Serwis wykorzystuje pliki cookies, aby zapewni\u0107 us\u0142ugi na najwy\u017cszym poziomie. Korzystaj\u0105c ze strony wyra\u017casz zgod\u0119 na ich u\u017cycie"),c.a.createElement("div",null,c.a.createElement("button",{className:"cookiesAlert__ok",onClick:t},"Ok, zgadzam si\u0119"),c.a.createElement(m.b,{to:"/polityka-plikow-cookies",className:"cookiesAlert__more"},"Dowiedz si\u0119 wi\u0119cej")))},j=Object(n.lazy)((function(){return a.e(14).then(a.bind(null,588))})),y=Object(n.lazy)((function(){return a.e(11).then(a.bind(null,589))})),O=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(8),a.e(7)]).then(a.bind(null,597))})),x=Object(n.lazy)((function(){return a.e(13).then(a.bind(null,590))})),C=Object(n.lazy)((function(){return a.e(10).then(a.bind(null,591))})),z=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,592))})),S=Object(n.lazy)((function(){return a.e(12).then(a.bind(null,593))})),L=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),i=Object(u.a)(o,2),f=i[0],b=i[1],p=Object(n.useState)(!1),v=Object(u.a)(p,2),E=v[0],L=v[1];window.addEventListener("scroll",(function(){var e=window.scrollY,t=window.innerHeight;r(e>t)}));var W=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(h.a,"posts"),e.prev=1,e.next=4,fetch(t);case 4:if((a=e.sent).ok){e.next=7;break}return e.abrupt("return");case 7:return e.t0=b,e.next=10,parseInt(a.headers.get("X-WP-Total"),10);case 10:e.t1=e.sent,(0,e.t0)(e.t1),e.next=17;break;case 14:return e.prev=14,e.t2=e.catch(1),e.abrupt("return");case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){!sessionStorage.getItem("countPosts")&&W(),sessionStorage.getItem("countPosts")||0===f||sessionStorage.setItem("countPosts",JSON.stringify(f))}));return c.a.createElement(m.a,null,c.a.createElement(d,null),!localStorage.getItem("cookies")&&!E&&c.a.createElement(N,{handleCookies:function(){localStorage.setItem("cookies","true"),L(!0)}}),a&&c.a.createElement(w,null),c.a.createElement(n.Suspense,{fallback:c.a.createElement(g.a,null)},c.a.createElement(_.d,null,c.a.createElement(_.b,{exact:!0,path:"/",component:O}),c.a.createElement(_.b,{exact:!0,path:"/o-mnie",component:C}),c.a.createElement(_.b,{exact:!0,path:"/kontakt-i-wspolpraca",component:z}),c.a.createElement(_.b,{exact:!0,path:"/polityka-plikow-cookies",component:S}),c.a.createElement(_.b,{exact:!0,path:"/wpisy/:slug",render:function(e){return c.a.createElement(j,e)}}),c.a.createElement(_.b,{exact:!0,path:"/kategorie/:slug",render:function(e){return c.a.createElement(x,Object.assign({},e,{type:"category"}))}}),c.a.createElement(_.b,{exact:!0,path:"/tagi/:slug",render:function(e){return c.a.createElement(x,Object.assign({},e,{type:"tag"}))}}),c.a.createElement(_.b,{exact:!0,path:"*",component:y}))),c.a.createElement(k,null))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(36),a(37);var P=document.getElementById("root");P.hasChildNodes()?o.a.hydrate(c.a.createElement(L,null),P):o.a.render(c.a.createElement(L,null),P),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}()}},[[27,2,4]]]);
//# sourceMappingURL=main.34d6e508.chunk.js.map