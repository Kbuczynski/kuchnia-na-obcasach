(this["webpackJsonpkuchnia-na-obcasach"]=this["webpackJsonpkuchnia-na-obcasach"]||[]).push([[9],{124:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a.n(n),o=a(11),c=a(180),i=a(7),r=a(0),l=a.n(r),u=a(9),m=a(18),g=a(78),d=a(79),p=a(71);t.default=function(e){var t=e.className,a=e.type,n=void 0===a?"home":a,f=e.categoryId,h=void 0===f?0:f,b=Object(r.useRef)(),v=Object(r.useState)({posts:[],isLoading:!0,countPosts:0}),O=Object(i.a)(v,2),j=O[0],y=O[1],E=Object(r.useState)(0),k=Object(i.a)(E,2),w=k[0],L=k[1],S=Object(r.useState)(!0),I=Object(i.a)(S,2),N=I[0],_=I[1],P=Object(r.useState)(0),z=Object(i.a)(P,2),x=z[0],C=z[1],J=Object(r.useState)(!1),T=Object(i.a)(J,2),A=T[0],R=T[1],W=function(){return L(w+u.d)},B=new IntersectionObserver((function(e){if(e[0].intersectionRatio>0){var t=setTimeout(W,1e3);C(t)}}));Object(r.useEffect)((function(){"home"!==n&&(y({posts:[],isLoading:!0,countPosts:0}),L(0))}),[h,n]),Object(r.useEffect)((function(){if("home"===n&&sessionStorage.getItem("".concat(n))&&N){var e=JSON.parse(sessionStorage.getItem("".concat(n)));y({posts:Object(c.a)(e.posts),isLoading:!1,countPosts:JSON.parse(sessionStorage.getItem("countPosts"))}),L(e.posts.length)}}),[N,n]),Object(r.useEffect)((function(){var e=new AbortController,t=e.signal,a=function(){var e=Object(o.a)(s.a.mark((function e(){var a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(u.a,"posts?per_page=").concat(u.d,"&offset=").concat(w),"category"===n?a+="&categories=".concat(h):"tag"===n&&(a+="&tags=".concat(h)),e.prev=2,e.next=5,fetch(a,{signal:t});case 5:if((o=e.sent).ok){e.next=8;break}return e.abrupt("return");case 8:return A&&R(!1),e.t0=y,e.t1=[],e.t2=Object(c.a)(j.posts),e.t3=c.a,e.next=15,o.json();case 15:e.t4=e.sent,e.t5=(0,e.t3)(e.t4),e.t6=e.t1.concat.call(e.t1,e.t2,e.t5),e.t7=parseInt(o.headers.get("X-WP-Total"),10),e.t8={posts:e.t6,isLoading:!1,countPosts:e.t7},(0,e.t0)(e.t8),e.next=26;break;case 23:e.prev=23,e.t9=e.catch(2),R(!0);case 26:case"end":return e.stop()}}),e,null,[[2,23]])})));return function(){return e.apply(this,arguments)}}();if(!A){if(!j.isLoading&&j.countPosts===j.posts.length)return;j.posts.length<=j.countPosts&&(B.observe(b.current),"home"===n?sessionStorage.getItem("".concat(n))&&N||a():(a(),_(!1))),sessionStorage.getItem("".concat(n))&&N&&_(!1)}return function(){e.abort(),B.disconnect(),clearTimeout(x)}}),[w]);var D=function(){"home"===n&&sessionStorage.setItem("".concat(n),JSON.stringify(j)),clearTimeout(x)};return l.a.createElement("div",{className:t},j.isLoading?l.a.createElement(m.a,null):0===j.posts.length?l.a.createElement("p",null,"Brak post\xf3w"):j.posts.map((function(e,t){return t%4===0&&0!==t?l.a.createElement(l.a.Fragment,{key:e.id},l.a.createElement(d.LazyLoadComponent,{key:t},l.a.createElement(p.a,{slot:7242566208,className:"postPrev",format:"fluid"})),l.a.createElement(d.LazyLoadComponent,{key:e.id},l.a.createElement(g.a,{post:e,handleCache:D}))):l.a.createElement(d.LazyLoadComponent,{key:e.id},l.a.createElement(g.a,{post:e,handleCache:D}))})),l.a.createElement("div",{ref:b}))}},70:function(e,t,a){"use strict";t.a=function(e){var t=e.split("T");return"".concat(t[0].split("-")[2],"-").concat(t[0].split("-")[1],"-").concat(t[0].split("-")[0])}},71:function(e,t,a){"use strict";var n=a(126),s=a(127),o=a(181),c=a(179),i=a(0),r=a.n(i),l=a(9),u=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).googleInit=null,e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.timeout;this.googleInit=setTimeout((function(){"undefined"!==typeof window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}),e)}},{key:"componentWillUnmount",value:function(){this.googleInit&&clearTimeout(this.googleInit)}},{key:"render",value:function(){var e=this.props,t=e.classNames,a=e.slot,n=e.format;return r.a.createElement("div",{className:t},r.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":l.b,"data-ad-slot":a,"data-ad-format":n,"data-full-width-responsive":"true"}))}}]),a}(i.Component);t.a=u},78:function(e,t,a){"use strict";var n=a(8),s=a.n(n),o=a(11),c=a(7),i=a(0),r=a.n(i),l=a(62),u=a(70),m=a(3),g=a(9),d=a(18),p=a(79);a(125);t.a=function(e){var t=e.post,a=e.handleCache,n=Object(i.useState)({images:[],isLoading:!0}),f=Object(c.a)(n,2),h=f[0],b=f[1];return Object(i.useEffect)((function(){sessionStorage.getItem("image-".concat(t.id))?b({images:JSON.parse(sessionStorage.getItem("image-".concat(t.id))),isLoading:!1}):function(){var e=Object(o.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(g.a,"media?parent=").concat(t.id));case 3:if((a=e.sent).ok){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,a.json();case 8:n=e.sent,sessionStorage.setItem("image-".concat(t.id),JSON.stringify(n)),b({images:n,isLoading:!1}),e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),r.a.createElement(m.b,{to:"/wpisy/".concat(t.slug),className:"postPrev",onClick:a},r.a.createElement("div",{className:"postPrev__content"},h.isLoading?r.a.createElement(d.a,null):void 0!==h.images[0]&&void 0===h.images[0].media_details.sizes.large?r.a.createElement(p.LazyLoadImage,{alt:h.images[0].slug,height:h.images[0].media_details.sizes.full.height,src:h.images[0].media_details.sizes.full.source_url,width:h.images[0].media_details.sizes.full.width,effect:"blur"}):void 0!==h.images[0]&&r.a.createElement(p.LazyLoadImage,{alt:h.images[0].slug,height:h.images[0].media_details.sizes.large.height,src:h.images[0].media_details.sizes.large.source_url,width:h.images[0].media_details.sizes.large.width,effect:"blur"})),r.a.createElement("h3",{className:"postPrev__title"},Object(l.a)(t.title.rendered)),r.a.createElement("p",{className:"postPrev__date"},Object(u.a)(t.date),"\xa0",r.a.createElement("i",{className:"icon-calendar"})))}}}]);
//# sourceMappingURL=9.5dde9f69.chunk.js.map