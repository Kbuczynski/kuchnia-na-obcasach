(this["webpackJsonpkuchnia-na-obcasach"]=this["webpackJsonpkuchnia-na-obcasach"]||[]).push([[7],{124:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a.n(n),o=a(11),c=a(180),i=a(7),r=a(0),l=a.n(r),u=a(9),m=a(18),d=a(78),p=a(79),g=a(71);t.default=function(e){var t=e.className,a=e.type,n=void 0===a?"home":a,f=e.categoryId,h=void 0===f?0:f,b=Object(r.useRef)(),v=Object(r.useState)({posts:[],isLoading:!0,countPosts:0}),_=Object(i.a)(v,2),y=_[0],w=_[1],z=Object(r.useState)(0),E=Object(i.a)(z,2),k=E[0],j=E[1],O=Object(r.useState)(!0),N=Object(i.a)(O,2),S=N[0],L=N[1],I=Object(r.useState)(0),x=Object(i.a)(I,2),P=x[0],C=x[1],J=Object(r.useState)(!1),T=Object(i.a)(J,2),Z=T[0],K=T[1],A=function(){return j(k+u.d)},B=new IntersectionObserver((function(e){if(e[0].intersectionRatio>0){var t=setTimeout(A,1e3);C(t)}}));Object(r.useEffect)((function(){"home"!==n&&(w({posts:[],isLoading:!0,countPosts:0}),j(0))}),[h,n]),Object(r.useEffect)((function(){if("home"===n&&sessionStorage.getItem("".concat(n))&&S){var e=JSON.parse(sessionStorage.getItem("".concat(n)));w({posts:Object(c.a)(e.posts),isLoading:!1,countPosts:JSON.parse(sessionStorage.getItem("countPosts"))}),j(e.posts.length)}}),[S,n]),Object(r.useEffect)((function(){var e=new AbortController,t=e.signal,a=function(){var e=Object(o.a)(s.a.mark((function e(){var a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(u.a,"posts?per_page=").concat(u.d,"&offset=").concat(k),"category"===n?a+="&categories=".concat(h):"tag"===n&&(a+="&tags=".concat(h)),e.prev=2,e.next=5,fetch(a,{signal:t});case 5:if((o=e.sent).ok){e.next=8;break}return e.abrupt("return");case 8:return Z&&K(!1),e.t0=w,e.t1=[],e.t2=Object(c.a)(y.posts),e.t3=c.a,e.next=15,o.json();case 15:e.t4=e.sent,e.t5=(0,e.t3)(e.t4),e.t6=e.t1.concat.call(e.t1,e.t2,e.t5),e.t7=parseInt(o.headers.get("X-WP-Total"),10),e.t8={posts:e.t6,isLoading:!1,countPosts:e.t7},(0,e.t0)(e.t8),e.next=26;break;case 23:e.prev=23,e.t9=e.catch(2),K(!0);case 26:case"end":return e.stop()}}),e,null,[[2,23]])})));return function(){return e.apply(this,arguments)}}();if(!Z){if(!y.isLoading&&y.countPosts===y.posts.length)return;y.posts.length<=y.countPosts&&(B.observe(b.current),"home"===n?sessionStorage.getItem("".concat(n))&&S||a():(a(),L(!1))),sessionStorage.getItem("".concat(n))&&S&&L(!1)}return function(){e.abort(),B.disconnect(),clearTimeout(P)}}),[k]);var F=function(){"home"===n&&sessionStorage.setItem("".concat(n),JSON.stringify(y)),clearTimeout(P)};return l.a.createElement("div",{className:t},y.isLoading?l.a.createElement(m.a,null):0===y.posts.length?l.a.createElement("p",null,"Brak post\xf3w"):y.posts.map((function(e,t){return t%4===0&&0!==t?l.a.createElement(l.a.Fragment,{key:e.id},l.a.createElement(p.LazyLoadComponent,{key:t},l.a.createElement(g.a,{slot:7242566208,className:"postPrev",format:"fluid"})),l.a.createElement(p.LazyLoadComponent,{key:e.id},l.a.createElement(d.a,{post:e,handleCache:F}))):l.a.createElement(p.LazyLoadComponent,{key:e.id},l.a.createElement(d.a,{post:e,handleCache:F}))})),l.a.createElement("div",{ref:b}))}},279:function(e,t,a){e.exports=a.p+"static/media/slider-1.005deb6f.jpg"},280:function(e,t,a){e.exports=a.p+"static/media/slider-2.732cc673.jpg"},281:function(e,t,a){e.exports=a.p+"static/media/slider-3.f59a09a8.jpg"},603:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(275),c=a.n(o),i=a(276),r=a.n(i),l=a(277),u=a(279),m=a.n(u),d=a(280),p=a.n(d),g=a(281),f=a.n(g),h=r()(c.a),b=function(){return s.a.createElement(h,{play:!0,cancelOnInteraction:!1,interval:5e3,cssModule:l.a,className:"slider"},s.a.createElement("div",{"data-src":m.a,className:"slider__item",alt:"Ciasto z porzeczkami"},"Smacznie"),s.a.createElement("div",{"data-src":f.a,className:"slider__item",alt:"deser malinowy"},"Zdrowo"),s.a.createElement("div",{"data-src":p.a,className:"slider__item",alt:"Babka z porzeczkami"},"Sezonowo"))},v=a(124),_=a(22);a.n(_).a.polyfill();var y=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"home__about__title"},s.a.createElement("h1",null,"Kuchnia na obcasach")),s.a.createElement("p",{className:"home__about__text"},"Kuchnia na Obcasach to blog kulinarny z przepisami na smaczne, zdrowe i sezonowe potrawy. Znajdziecie tu przepisy na dania klasyczne, z nutk\u0105 nowoczesno\u015bci, a tak\u017ce potrawy dietetyczne dla os\xf3b zdrowo od\u017cywiaj\u0105cych si\u0119 i b\u0119d\u0105cych fit wraz z podan\u0105 kaloryczno\u015bci\u0105 i rozk\u0142adem makrosk\u0142adnik\xf3w. Znajdziecie tu tak\u017ce spor\u0105 dawk\u0119 inspiracji na s\u0142odkie wypieki, desery i fit s\u0142odko\u015bci. Osoby, kt\xf3re dopiero zaczynaj\u0105 swoj\u0105 przygod\u0119 z gotowaniem na pewno znajd\u0105 tutaj wiele cennych wskaz\xf3wek i porad kulinarnych. Serdecznie zapraszam do korzystania i pr\xf3bowania przepis\xf3w."),s.a.createElement("button",{className:"home__about__button",onClick:function(){return window.scroll({top:window.scrollY+600,left:0,behavior:"smooth"})}},"Znajd\u017a co\u015b dla siebie!"))},w=a(71);t.default=function(){return Object(n.useEffect)((function(){document.title="Kuchnia na obcasach"}),[]),s.a.createElement("div",{className:"home"},s.a.createElement("header",{className:"home__header"},s.a.createElement(b,null)),s.a.createElement("section",{className:"home__banner"},s.a.createElement(w.a,{slot:7064696134,className:"home__banner__ad",format:"auto"})),s.a.createElement("section",{className:"home__about"},s.a.createElement(y,null)),s.a.createElement("section",{className:"home__posts"},s.a.createElement("div",{className:"home__posts__title"},s.a.createElement("h2",null,"Najnowsze posty")),s.a.createElement(v.default,{className:"home__posts__container"})))}},62:function(e,t,a){"use strict";t.a=function(e){return-1!==e.indexOf("&#8220;")&&(e=e.replace(/&#8220;/g,'"')),-1!==e.indexOf("&#8221;")&&(e=e.replace(/&#8221;/g,'"')),-1!==e.indexOf("&#8211;")&&(e=e.replace(/&#8211;/g,"-")),e}},70:function(e,t,a){"use strict";t.a=function(e){var t=e.split("T");return"".concat(t[0].split("-")[2],"-").concat(t[0].split("-")[1],"-").concat(t[0].split("-")[0])}},71:function(e,t,a){"use strict";var n=a(126),s=a(127),o=a(181),c=a(179),i=a(0),r=a.n(i),l=a(9),u=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).googleInit=null,e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.timeout;this.googleInit=setTimeout((function(){"undefined"!==typeof window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}),e)}},{key:"componentWillUnmount",value:function(){this.googleInit&&clearTimeout(this.googleInit)}},{key:"render",value:function(){var e=this.props,t=e.classNames,a=e.slot,n=e.format;return r.a.createElement("div",{className:t},r.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":l.b,"data-ad-slot":a,"data-ad-format":n,"data-full-width-responsive":"true"}))}}]),a}(i.Component);t.a=u},78:function(e,t,a){"use strict";var n=a(8),s=a.n(n),o=a(11),c=a(7),i=a(0),r=a.n(i),l=a(62),u=a(70),m=a(3),d=a(9),p=a(18),g=a(79);a(125);t.a=function(e){var t=e.post,a=e.handleCache,n=Object(i.useState)({images:[],isLoading:!0}),f=Object(c.a)(n,2),h=f[0],b=f[1];return Object(i.useEffect)((function(){sessionStorage.getItem("image-".concat(t.id))?b({images:JSON.parse(sessionStorage.getItem("image-".concat(t.id))),isLoading:!1}):function(){var e=Object(o.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d.a,"media?parent=").concat(t.id));case 3:if((a=e.sent).ok){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,a.json();case 8:n=e.sent,sessionStorage.setItem("image-".concat(t.id),JSON.stringify(n)),b({images:n,isLoading:!1}),e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),r.a.createElement(m.b,{to:"/wpisy/".concat(t.slug),className:"postPrev",onClick:a},r.a.createElement("div",{className:"postPrev__content"},h.isLoading?r.a.createElement(p.a,null):void 0!==h.images[0]&&void 0===h.images[0].media_details.sizes.large?r.a.createElement(g.LazyLoadImage,{alt:h.images[0].slug,height:h.images[0].media_details.sizes.full.height,src:h.images[0].media_details.sizes.full.source_url,width:h.images[0].media_details.sizes.full.width,effect:"blur"}):void 0!==h.images[0]&&r.a.createElement(g.LazyLoadImage,{alt:h.images[0].slug,height:h.images[0].media_details.sizes.large.height,src:h.images[0].media_details.sizes.large.source_url,width:h.images[0].media_details.sizes.large.width,effect:"blur"})),r.a.createElement("h3",{className:"postPrev__title"},Object(l.a)(t.title.rendered)),r.a.createElement("p",{className:"postPrev__date"},Object(u.a)(t.date),"\xa0",r.a.createElement("i",{className:"icon-calendar"})))}}}]);
//# sourceMappingURL=7.262230e6.chunk.js.map