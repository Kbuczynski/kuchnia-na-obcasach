(this["webpackJsonpkuchnia-na-obcasach"]=this["webpackJsonpkuchnia-na-obcasach"]||[]).push([[12],{590:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),c=a(12),s=a(7),o=a(0),u=a.n(o),i=a(1),l=a(11),g=a(18),p=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,123))}));t.default=function(e){var t=e.match.params.slug,a=e.type,n=void 0===a?"tag":a,m=Object(o.useState)({category:[],isLoading:!0}),y=Object(s.a)(m,2),h=y[0],b=y[1];return Object(o.useEffect)((function(){var e="".concat(l.a);e+="category"===n?"categories":"tags",e+="?slug=".concat(t),function(){var t=Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if((a=t.sent).ok){t.next=6;break}return t.abrupt("return");case 6:return t.t0=b,t.next=9,a.json();case 9:t.t1=t.sent,t.t2={category:t.t1,isLoading:!1},(0,t.t0)(t.t2),t.next=17;break;case 14:return t.prev=14,t.t3=t.catch(0),t.abrupt("return");case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}()()}),[t,n]),h.isLoading||0!==h.category.length?u.a.createElement("div",{className:"categoryPosts"},u.a.createElement("div",{className:"categoryPosts__title"},u.a.createElement("h3",null,"Wyszuka\u0142e\u015b posty z ","category"===n?"kategorii":"tagiem"," ",u.a.createElement("span",null,!h.isLoading&&h.category[0].name))),h.isLoading?u.a.createElement(g.a,null):u.a.createElement(o.Suspense,{fallback:u.a.createElement(g.a,null)},u.a.createElement(p,{className:"categoryPosts__container",type:n,categoryId:h.category[0].id}))):u.a.createElement(i.a,{to:{pathname:"/404"}})}}}]);
//# sourceMappingURL=12.995acf16.chunk.js.map