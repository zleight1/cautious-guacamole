(function(e){function s(s){for(var t,r,l=s[0],d=s[1],i=s[2],f=0,j=[];f<l.length;f++)r=l[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&j.push(n[r][0]),n[r]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);o&&o(s);while(j.length)j.shift()();return c.push.apply(c,i||[]),a()}function a(){for(var e,s=0;s<c.length;s++){for(var a=c[s],t=!0,l=1;l<a.length;l++){var d=a[l];0!==n[d]&&(t=!1)}t&&(c.splice(s--,1),e=r(r.s=a[0]))}return e}var t={},n={app:0},c=[];function r(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,s,a){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)r.d(a,t,function(s){return e[s]}.bind(null,t));return a},r.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="/cautious-guacamole/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=s,l=l.slice();for(var i=0;i<l.length;i++)s(l[i]);var o=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,s,a){e.exports=a("56d7")},"17f2":function(e,s,a){"use strict";a("9a00")},4678:function(e,s,a){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var s=c(e);return a(s)}function c(e){if(!a.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=c,e.exports=n,n.id="4678"},"56d7":function(e,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");for(var t=a("2b0e"),n=a("e508"),c=(a("a899"),function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{attrs:{id:"app"}},[e._m(0),a("div",{staticClass:"wrapper"},[a("Main",{attrs:{items:e.items}})],1)])}),r=[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"row",staticStyle:{background:"#AAA"}},[a("div",{staticClass:"row__cell"}),a("div",{staticClass:"row__cell"},[a("b",[e._v("Payee")])]),a("div",{staticClass:"row__cell"},[a("b",[e._v("Payment ID")])]),a("div",{staticClass:"row__cell"},[a("b",[e._v("Amount")])])])}],l=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("DynamicScroller",{staticClass:"scroller",attrs:{items:e.items,"min-item-size":50,"page-mode":""},scopedSlots:e._u([{key:"default",fn:function(s){var t=s.item,n=s.index,c=s.active;return[a("DynamicScrollerItem",{staticClass:"scroller__item",attrs:{item:t,active:c,"size-dependencies":[t.children,t.expanded],"data-index":n}},[a("div",{staticClass:"row",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.expanded=!t.expanded}}},[a("div",{staticClass:"row__cell"},[e._v(" "+e._s(t.expanded?"-":"+")+" ")]),a("div",{staticClass:"row__cell"},[e._v(" "+e._s(t.name)+" ")]),a("div",{staticClass:"row__cell"},[e._v(" "+e._s(t.account)+" ")]),a("div",{staticClass:"row__cell"},[a("small",[e._v("USD")]),e._v(" "+e._s(e.money(t.amount))+" ")])]),t.expanded?a("div",{staticClass:"children"},e._l(t.children,(function(s){return a("div",{key:s.id,staticClass:"row"},[a("div",{staticClass:"row__cell"},[e._v(" > ")]),a("div",{staticClass:"row__cell"},[e._v(" "+e._s(s.name)+" ")]),a("div",{staticClass:"row__cell"},[e._v(" "+e._s(s.account)+" ")]),a("div",{staticClass:"row__cell"},[a("small",[e._v("USD")]),e._v(" "+e._s(e.money(s.amount))+" ")])])})),0):e._e()])]}}])})},d=[],i={name:"Main",props:{items:Array},methods:{money:function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}}},o=i,f=(a("17f2"),a("2877")),j=Object(f["a"])(o,l,d,!1,null,null,null),b=j.exports,u=a("6bfe"),m=a.n(u),p=[],v=500,_=10,h=1;h<v;h++){for(var y={id:h,name:m.a.company_name,account:m.a.card_number(),amount:m.a.integer(50,1e5),expanded:!1,children:[]},g=m.a.integer(2,_),k=1;k<g;k++){var w={id:k,name:m.a.company_name,account:m.a.card_number(),amount:m.a.double(0,1e5)};y.children.push(w)}p.push(y)}var z={name:"App",components:{Main:b},data:function(){return{items:p}}},x=z,C=(a("5c0b"),Object(f["a"])(x,c,r,!1,null,null,null)),O=C.exports;t["a"].use(n["a"]),t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,s,a){"use strict";a("9c0c")},"9a00":function(e,s,a){},"9c0c":function(e,s,a){}});
//# sourceMappingURL=app.351cddbc.js.map