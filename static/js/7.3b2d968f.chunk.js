(this["webpackJsonpkuchnia-na-obcasach"]=this["webpackJsonpkuchnia-na-obcasach"]||[]).push([[7],{123:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a.n(n),c=a(10),o=a(176),i=a(7),r=a(0),l=a.n(r),u=a(11),m=a(18),d=a(77),p=a(78);t.default=function(e){var t=e.className,a=e.type,n=void 0===a?"home":a,g=e.categoryId,f=void 0===g?0:g,h=Object(r.useRef)(),b=Object(r.useState)({posts:[],isLoading:!0,countPosts:0}),_=Object(i.a)(b,2),v=_[0],z=_[1],j=Object(r.useState)(0),w=Object(i.a)(j,2),E=w[0],O=w[1],y=Object(r.useState)(!0),k=Object(i.a)(y,2),N=k[0],S=k[1],x=Object(r.useState)(0),L=Object(i.a)(x,2),I=L[0],P=L[1],C=Object(r.useState)(!1),J=Object(i.a)(C,2),T=J[0],Z=J[1],B=function(){return O(E+u.b)},K=new IntersectionObserver((function(e){if(e[0].intersectionRatio>0){var t=setTimeout(B,1e3);P(t)}}));Object(r.useEffect)((function(){"home"!==n&&(z({posts:[],isLoading:!0,countPosts:0}),O(0))}),[f,n]),Object(r.useEffect)((function(){if("home"===n&&sessionStorage.getItem("".concat(n))&&N){var e=JSON.parse(sessionStorage.getItem("".concat(n)));z({posts:Object(o.a)(e.posts),isLoading:!1,countPosts:JSON.parse(sessionStorage.getItem("countPosts"))}),O(e.posts.length)}}),[N,n]),Object(r.useEffect)((function(){var e=new AbortController,t=e.signal,a=function(){var e=Object(c.a)(s.a.mark((function e(){var a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(u.a,"posts?per_page=").concat(u.b,"&offset=").concat(E),"category"===n?a+="&categories=".concat(f):"tag"===n&&(a+="&tags=".concat(f)),e.prev=2,e.next=5,fetch(a,{signal:t});case 5:if((c=e.sent).ok){e.next=8;break}return e.abrupt("return");case 8:return T&&Z(!1),e.t0=z,e.t1=[],e.t2=Object(o.a)(v.posts),e.t3=o.a,e.next=15,c.json();case 15:e.t4=e.sent,e.t5=(0,e.t3)(e.t4),e.t6=e.t1.concat.call(e.t1,e.t2,e.t5),e.t7=parseInt(c.headers.get("X-WP-Total"),10),e.t8={posts:e.t6,isLoading:!1,countPosts:e.t7},(0,e.t0)(e.t8),e.next=26;break;case 23:e.prev=23,e.t9=e.catch(2),Z(!0);case 26:case"end":return e.stop()}}),e,null,[[2,23]])})));return function(){return e.apply(this,arguments)}}();if(!T){if(!v.isLoading&&v.countPosts===v.posts.length)return;v.posts.length<=v.countPosts&&(K.observe(h.current),"home"===n?sessionStorage.getItem("".concat(n))&&N||a():(a(),S(!1))),sessionStorage.getItem("".concat(n))&&N&&S(!1)}return function(){e.abort(),K.disconnect(),clearTimeout(I)}}),[E]);var R=function(){"home"===n&&sessionStorage.setItem("".concat(n),JSON.stringify(v)),clearTimeout(I)};return l.a.createElement("div",{className:t},v.isLoading?l.a.createElement(m.a,null):0===v.posts.length?l.a.createElement("p",null,"Brak post\xf3w"):v.posts.map((function(e,t){return l.a.createElement(p.LazyLoadComponent,{key:t},l.a.createElement(d.a,{post:e,handleCache:R}))})),l.a.createElement("div",{ref:h}))}},274:function(e,t,a){e.exports=a.p+"static/media/slider-1.005deb6f.jpg"},275:function(e,t,a){e.exports=a.p+"static/media/slider-2.732cc673.jpg"},276:function(e,t,a){e.exports=a.p+"static/media/slider-3.f59a09a8.jpg"},598:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(270),o=a.n(c),i=a(271),r=a.n(i),l=a(272),u=a(274),m=a.n(u),d=a(275),p=a.n(d),g=a(276),f=a.n(g),h=r()(o.a),b=function(){return s.a.createElement(h,{play:!0,cancelOnInteraction:!1,interval:5e3,cssModule:l.a,className:"slider"},s.a.createElement("div",{"data-src":m.a,className:"slider__item",alt:"Ciasto z porzeczkami"},"Smacznie"),s.a.createElement("div",{"data-src":f.a,className:"slider__item",alt:"deser malinowy"},"Zdrowo"),s.a.createElement("div",{"data-src":p.a,className:"slider__item",alt:"Babka z porzeczkami"},"Sezonowo"))},_=a(123),v=a(22);a.n(v).a.polyfill();var z=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"home__about__title"},s.a.createElement("h1",null,"Kuchnia na obcasach")),s.a.createElement("p",{className:"home__about__text"},"Kuchnia na Obcasach to blog kulinarny z przepisami na smaczne, zdrowie i sezonowe potrawy. Znajdziecie tu zbi\xf3r na klasyczne dania, przepisy z nutk\u0105 nowoczesno\u015bci, a tak\u017ce potrawy dietetyczne, dla os\xf3b zdrowo od\u017cywiaj\u0105cych si\u0119 i b\u0119d\u0105cych fit, a osoby, kt\xf3re dopiero zaczynaj\u0105 swoj\u0105 przygod\u0119 z gotowaniem na pewno znajd\u0105 tutaj wiele ciekawych inspiracji i porad kulinarnych. Serdecznie zapraszam do korzystania i pr\xf3bowania przepis\xf3w."),s.a.createElement("button",{className:"home__about__button",onClick:function(){return window.scroll({top:window.scrollY+600,left:0,behavior:"smooth"})}},"Znajd\u017a co\u015b dla siebie!"))};t.default=function(){return s.a.createElement("div",{className:"home"},s.a.createElement("header",{className:"home__header"},s.a.createElement(b,null)),s.a.createElement("section",{className:"home__about"},s.a.createElement(z,null)),s.a.createElement("section",{className:"home__posts"},s.a.createElement("div",{className:"home__posts__title"},s.a.createElement("h2",null,"Najnowsze posty")),s.a.createElement(_.default,{className:"home__posts__container"})))}},64:function(e,t,a){"use strict";t.a=function(e){return-1!==(e=e.toLowerCase()).indexOf("&#8220;")&&(e=e.replace(/&#8220;/g,'"')),-1!==e.indexOf("&#8221;")&&(e=e.replace(/&#8221;/g,'"')),-1!==e.indexOf("&#8211;")&&(e=e.replace(/&#8211;/g,"-")),"".concat(e[0].toUpperCase()).concat(e.slice(1))}},70:function(e,t,a){"use strict";t.a=function(e){var t=e.split("T");return"".concat(t[0].split("-")[2],"-").concat(t[0].split("-")[1],"-").concat(t[0].split("-")[0])}},77:function(e,t,a){"use strict";var n=a(8),s=a.n(n),c=a(10),o=a(7),i=a(0),r=a.n(i),l=a(64),u=a(70),m=a(5),d=a(11),p=a(18),g=a(78);a(124);t.a=function(e){var t=e.post,a=e.handleCache,n=Object(i.useState)({images:[],isLoading:!0}),f=Object(o.a)(n,2),h=f[0],b=f[1];return Object(i.useEffect)((function(){sessionStorage.getItem("image-".concat(t.id))?b({images:JSON.parse(sessionStorage.getItem("image-".concat(t.id))),isLoading:!1}):function(){var e=Object(c.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d.a,"media?parent=").concat(t.id));case 3:if((a=e.sent).ok){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,a.json();case 8:n=e.sent,sessionStorage.setItem("image-".concat(t.id),JSON.stringify(n)),b({images:n,isLoading:!1}),e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),r.a.createElement(m.b,{to:"/wpisy/".concat(t.slug),className:"postPrev",onClick:a},r.a.createElement("div",{className:"postPrev__content"},h.isLoading?r.a.createElement(p.a,null):void 0!==h.images[0]&&void 0===h.images[0].media_details.sizes.large?r.a.createElement(g.LazyLoadImage,{alt:h.images[0].slug,height:h.images[0].media_details.sizes.full.height,src:h.images[0].media_details.sizes.full.source_url,width:h.images[0].media_details.sizes.full.width,effect:"blur"}):void 0!==h.images[0]&&r.a.createElement(g.LazyLoadImage,{alt:h.images[0].slug,height:h.images[0].media_details.sizes.large.height,src:h.images[0].media_details.sizes.large.source_url,width:h.images[0].media_details.sizes.large.width,effect:"blur"})),r.a.createElement("h3",{className:"postPrev__title"},Object(l.a)(t.title.rendered)),r.a.createElement("p",{className:"postPrev__date"},Object(u.a)(t.date),"\xa0",r.a.createElement("i",{className:"icon-calendar"})))}}}]);
//# sourceMappingURL=7.3b2d968f.chunk.js.map