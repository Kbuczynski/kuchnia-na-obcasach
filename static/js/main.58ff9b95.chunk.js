(this["webpackJsonpkuchnia-na-obcasach"]=this["webpackJsonpkuchnia-na-obcasach"]||[]).push([[1],{11:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n="http://kuchnianaobcasach.atthost24.pl/wp-json/wp/v2/",r=12},18:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("div",{className:"preloader"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}},22:function(e,t,a){e.exports=a.p+"static/media/logo.b4450004.png"},27:function(e,t,a){e.exports=a(38)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),i=a(7),l=a(6),s=a(1),m=a(18),u=a(9),_=a.n(u),g=a(12),b=a(22),f=a.n(b),h=a(11),p=Object(s.g)((function(e){var t=e.history,a=e.handleTopBar,c=Object(n.useState)({tags:[],isLoading:!0}),o=Object(i.a)(c,2),l=o[0],s=o[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),b=u[0],f=u[1],p=Object(n.useState)(""),v=Object(i.a)(p,2),d=v[0],E=v[1];Object(n.useEffect)((function(){var e=function(){var e=Object(g.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h.a,"tags?search=").concat(b));case 3:if((t=e.sent).ok){e.next=7;break}return e.next=7,s({tags:[],isLoading:!1});case 7:return e.t0=s,e.next=10,t.json();case 10:e.t1=e.sent,e.t2={tags:e.t1,isLoading:!1},(0,e.t0)(e.t2),e.next=19;break;case 15:return e.prev=15,e.t3=e.catch(0),e.next=19,s({tags:[],isLoading:!1});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();b.length>0&&e()}),[b]);var k=function(e){E(l.tags[0].slug)};return r.a.createElement("form",{className:"search",onSubmit:function(e){e.preventDefault(),a(),d.length>0&&t.push("/tagi/".concat(d)),f(""),e.target.reset()}},r.a.createElement("label",{htmlFor:"search",className:"search__label"},"Wyszukaj"),r.a.createElement("input",{id:"search",type:"text",placeholder:"Wyszukaj po tagu",className:"search__input",value:b,onChange:function(e){f(e.target.value),l.tags.length>0&&k()}}),r.a.createElement("button",{type:"submit",className:"search__button","aria-label":"Szukaj"},r.a.createElement("i",{className:"icon-search"})))})),v=function(e){var t=e.className;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://www.facebook.com/Kuchnia-na-Obcasach-493976237282868/",rel:"noopener noreferrer",target:"_blank",className:t,"aria-label":"Facebook"},r.a.createElement("i",{className:"icon-facebook"})),r.a.createElement("a",{href:"https://twitter.com/Knaobcasach",className:t,"aria-label":"Twitter",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"icon-twitter"})),r.a.createElement("a",{href:"https://www.instagram.com/kuchnia_na_obcasach/",rel:"noopener noreferrer",target:"_blank",className:t,"aria-label":"Instagram"},r.a.createElement("i",{className:"icon-instagram"})),r.a.createElement("a",{href:"https://pl.pinterest.com/KuchniaObcasach/",rel:"noopener noreferrer",target:"_blank",className:t,"aria-label":"Pinterest"},r.a.createElement("i",{className:"icon-pinterest"})),r.a.createElement("a",{href:"mailto:monika.kuchnianaobcasach@gmail.com",className:t,"aria-label":"E-mail"},r.a.createElement("i",{className:"icon-mail"})))},d=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useRef)(),o=Object(n.useRef)(),s=Object(n.useState)({categories:[],isLoading:!0,countCategories:0}),m=Object(i.a)(s,2),u=m[0],b=m[1],d=function(){var e=Object(g.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(h.a,"categories"),e.prev=1,e.next=4,fetch(t);case 4:if((a=e.sent).ok){e.next=7;break}return e.abrupt("return");case 7:return e.t0=b,e.next=10,a.json();case 10:e.t1=e.sent,e.t2=a.headers.get("X-WP-Total"),e.t3={categories:e.t1,isLoading:!1,countCategories:e.t2},(0,e.t0)(e.t3),e.next=19;break;case 16:return e.prev=16,e.t4=e.catch(1),e.abrupt("return");case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}(),E=function(){e.current.classList.toggle("reset-translate"),t.current.classList.toggle("rotate-180")},k=function(){a.current.classList.toggle("reset-translate"),c.current.classList.toggle("hamburger-transform")},w=function(){o.current.classList.toggle("show-categories")},N=function(){window.innerWidth<=650&&(o.current.classList.contains("show-categories")&&w(),k())};return Object(n.useEffect)((function(){d()}),[]),r.a.createElement("nav",{className:"navigation"},r.a.createElement("div",{className:"navigation__top",ref:e},r.a.createElement("div",{className:"navigation__top__media"},r.a.createElement(v,{className:"navigation__top__media__link"})),r.a.createElement("div",{className:"navigation__top__search"},r.a.createElement(p,{handleTopBar:E})),r.a.createElement("button",{"aria-label":"Otw\xf3rz",className:"navigation__top__open",onClick:E,ref:t},r.a.createElement("i",{className:"icon-menu-arrow"}))),r.a.createElement("div",{className:"navigation__center"},r.a.createElement(l.b,{to:"/",className:"navigation__center__link"},r.a.createElement("img",{src:f.a,alt:"Kuchnia na obcasach",title:"Kuchnia na obcasach"}))),r.a.createElement("div",{className:"navigation__bottom"},r.a.createElement("button",{"aria-label":"Otw\xf3rz menu",className:"navigation__bottom__hamburger",onClick:k,ref:c}),r.a.createElement("ul",{className:"navigation__bottom__menu",ref:a},r.a.createElement("li",{className:"navigation__bottom__menu__item",onClick:N},r.a.createElement(l.c,{exact:!0,to:"/",className:"navigation__bottom__menu__item__link",activeClassName:"active"},"Strona g\u0142\xf3wna")),r.a.createElement("li",{className:"navigation__bottom__menu__item"},r.a.createElement(l.b,{to:"#",className:"navigation__bottom__menu__item__link",onClick:w},"Kategorie"),r.a.createElement("ul",{className:"navigation__bottom__menu__item__categories",ref:o,onClick:N},u.categories.length>0&&u.categories.map((function(e){var t=e.id,a=e.name,n=e.slug;return"bez-kategorii"===n?null:r.a.createElement("li",{className:"navigation__bottom__menu__item__categories__item",key:t},r.a.createElement(l.c,{exact:!0,activeClassName:"active",to:"/kategorie/".concat(n),className:"navigation__bottom__menu__item__categories__item__link"},a))})))),r.a.createElement("li",{className:"navigation__bottom__menu__item"},r.a.createElement(l.c,{exact:!0,activeClassName:"active",to:"/o-mnie",className:"navigation__bottom__menu__item__link",onClick:N},"O mnie")),r.a.createElement("li",{className:"navigation__bottom__menu__item"},r.a.createElement(l.c,{exact:!0,activeClassName:"active",to:"/kontakt-i-wspolpraca",className:"navigation__bottom__menu__item__link",onClick:N},"Kontakt i wsp\xf3\u0142praca")))))},E=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},r.a.createElement("span",null,"\xa9 2020 Kuchnia na obcasach."),r.a.createElement("span",{className:"footer__media"},r.a.createElement(v,{className:"footer__media__link"})),r.a.createElement("span",null,"Projekt i realizacja\xa0",r.a.createElement("a",{href:"https://www.linkedin.com/in/kbuczynski/",rel:"noopener noreferrer",target:"_blank"},"Kbuczynski"))))},k=a(24);a.n(k).a.polyfill();var w=function(){return r.a.createElement("div",{className:"scroll",onClick:function(){return window.scroll({top:0,left:0,behavior:"smooth"})}},r.a.createElement("span",{className:"scroll__arrow"}))},N=Object(n.lazy)((function(){return a.e(13).then(a.bind(null,588))})),j=Object(n.lazy)((function(){return a.e(11).then(a.bind(null,589))})),O=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(8),a.e(7)]).then(a.bind(null,596))})),y=Object(n.lazy)((function(){return a.e(12).then(a.bind(null,590))})),x=Object(n.lazy)((function(){return a.e(10).then(a.bind(null,591))})),C=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,592))})),z=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return window.addEventListener("scroll",(function(){var e=window.scrollY,t=window.innerHeight;c(e>t)})),r.a.createElement(l.a,null,r.a.createElement(d,null),a&&r.a.createElement(w,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement(m.a,null)},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:O}),r.a.createElement(s.b,{exact:!0,path:"/o-mnie",component:x}),r.a.createElement(s.b,{exact:!0,path:"/kontakt-i-wspolpraca",component:C}),r.a.createElement(s.b,{exact:!0,path:"/wpisy/:slug",render:function(e){return r.a.createElement(N,e)}}),r.a.createElement(s.b,{exact:!0,path:"/kategorie/:slug",render:function(e){return r.a.createElement(y,Object.assign({},e,{type:"category"}))}}),r.a.createElement(s.b,{exact:!0,path:"/tagi/:slug",render:function(e){return r.a.createElement(y,Object.assign({},e,{type:"tag"}))}}),r.a.createElement(s.b,{exact:!0,path:"*",component:j}))),r.a.createElement(E,null))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(36),a(37);var W=document.getElementById("root");W.hasChildNodes()?o.a.hydrate(r.a.createElement(z,null),W):o.a.render(r.a.createElement(z,null),W),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[27,2,4]]]);
//# sourceMappingURL=main.58ff9b95.chunk.js.map