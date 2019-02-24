(function(e){function t(t){for(var n,a,c=t[0],i=t[1],u=t[2],d=0,l=[];d<c.length;d++)a=c[d],o[a]&&l.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({leaderboard:"leaderboard",scorecards:"scorecards"}[e]||e)+"."+{leaderboard:"a010b07e",scorecards:"9e27fa51"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={leaderboard:1,scorecards:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({leaderboard:"leaderboard",scorecards:"scorecards"}[e]||e)+"."+{leaderboard:"cd022b59",scorecards:"cd9a2908"}[e]+".css",o=i.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===n||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.request=n,delete a[e],f.parentNode.removeChild(f),r(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e),u=function(t){d.onerror=d.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/oscars-party/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("28a5");var n=r("a4bb"),a=r.n(n),o=(r("ac6a"),r("96cf"),r("3b8d")),s=(r("6762"),r("2fdb"),r("cadf"),r("551c"),r("f751"),r("097d"),r("2b0e")),c=r("8c4f"),i=r("bc3a"),u=r.n(i),d=[{path:"/leaderboard",name:"leaderboard",component:function(){return r.e("leaderboard").then(r.bind(null,"7631"))},alias:"/"},{path:"/scorecards",name:"scorecards",component:function(){return r.e("scorecards").then(r.bind(null,"95dc"))}}],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header",{staticClass:"Header"},[e._m(0),r("nav",{staticClass:"Nav"},[r("button",{staticClass:"Nav_item",class:{active:"leaderboard"===e.$route.name},on:{click:function(t){return e.$router.push("/leaderboard")}}},[e._v("\n        Leaderboard\n      ")]),r("button",{staticClass:"Nav_item",class:{active:"scorecards"===e.$route.name},on:{click:function(t){return e.$router.push("/scorecards")}}},[e._v("\n        Scorecards\n      ")])])]),r("transition",{attrs:{name:"fade",appear:"",mode:"out-in"}},[r("router-view")],1)],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{staticClass:"Logo",attrs:{src:r("a56c"),alt:"The Oscars Party Logo"}})])}],p={name:"App"},m=p,h=(r("8abd"),r("5c64"),r("2877")),b=Object(h["a"])(m,l,f,!1,null,null,null),g=b.exports;s["a"].config.productionTip=!1,s["a"].use(c["a"]);var v=new c["a"]({routes:d});new s["a"]({router:v,render:function(e){return e(g)},data:function(){return{nomineesCodepenID:"XOGEdR",userPicksGoogleSpreadsheetID:"1OHZ0mOGjNdTvZgdq_TdyxolU6GDl-iAgYTe-TOtikN0",gsxPrefix:"gsx$",gsxTextPrefix:"$t",nominees:[],userPicks:[],broadcastInfo:{startTime:"Feb 24, 2019 18:00:00",duration:108e5}}},computed:{broadcastStatus:function(){var e=(new Date).getTime(),t=new Date(this.broadcastInfo.startTime).getTime()-e,r=t<=0&&t>=-this.broadcastInfo.duration;return t>0?"countdown":r?"live":"ended"},allScored:function(){return!this.nominees.map(function(e){return e.winner}).includes(null)}},created:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,r,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://codepen.io/camstephensdomo/pen/".concat(this.nomineesCodepenID,".js"));case 2:return t=e.sent,this.nominees=t.data,e.next=6,u.a.get("https://spreadsheets.google.com/feeds/list/".concat(this.userPicksGoogleSpreadsheetID,"/1/public/values?alt=json"));case 6:r=e.sent,r.data.feed.entry&&r.data.feed.entry.forEach(function(e){return n.userPicks.push({name:e[n.findObjectKeyBySubstring(e,"name")][n.gsxTextPrefix],picks:n.nominees.map(function(t){return e["".concat(n.gsxPrefix).concat(n.lowercaseAndSpaceless(t.category))][n.gsxTextPrefix]})})});case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{findObjectKeyBySubstring:function(e,t){return a()(e).filter(function(e){return-1!==e.indexOf(t)})},lowercaseAndSpaceless:function(e){return e.toLowerCase().split(" ").join("")}}}).$mount("#app")},"5c64":function(e,t,r){"use strict";var n=r("c2ae"),a=r.n(n);a.a},"8abd":function(e,t,r){"use strict";var n=r("9959"),a=r.n(n);a.a},9959:function(e,t,r){},a56c:function(e,t,r){e.exports=r.p+"img/the-oscars-party-logo-gold.5a7e3e29.png"},c2ae:function(e,t,r){}});
//# sourceMappingURL=app.be54fa09.js.map