(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["scorecards"],{"0601":function(t,e,n){"use strict";var r=n("52ba"),o=n.n(r);o.a},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),a=n("6821"),i=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=a(t),e=i(e,!0),s)try{return u(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},"3e42":function(t,e,n){},"52ba":function(t,e,n){},"5dbc":function(t,e,n){var r=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var a,i=e.constructor;return i!==n&&"function"==typeof i&&(a=i.prototype)!==n.prototype&&r(a)&&o&&o(t,a),t}},"7f7f":function(t,e,n){var r=n("86cc").f,o=Function.prototype,a=/^\s*function ([^ (]*)/,i="name";i in o||n("9e1e")&&r(o,i,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},"8b97":function(t,e,n){var r=n("d3f4"),o=n("cb7c"),a=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"95dc":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"ScorecardsContainer ContentContainer"},[n("h2",{staticClass:"SectionTitle"},[t._v("Scorecards")]),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.nominations.length?n("div",{staticClass:"Cards"},[n("transition-group",{attrs:{name:"fade",tag:"div"}},t._l(t.nominations,function(e,r){return n("AwardCategory",{key:"nomination"+r,attrs:{name:e.category,points:e.points}},t._l(e.nominees,function(t,o){return n("Nominee",{key:"nominee"+r+o,attrs:{index:o,nominee:t,scored:e.scored}})}),1)}),1)],1):n("div",[t._v("Loading...")])])],1)},o=[],a=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AwardCategory"},[n("header",{staticClass:"_header"},[n("h4",{staticClass:"uppercase",domProps:{textContent:t._s(t.name)}}),n("h4",{staticClass:"muted",staticStyle:{"font-size":"14px"}},[n("span",{domProps:{textContent:t._s(t.points)}}),n("span",[t._v(" points")])])]),t._t("default")],2)}),i=[],c=(n("c5f6"),{name:"AwardCategory",props:{name:{type:String,default:"Award Category"},points:{type:Number,default:20}}}),s=c,u=(n("dd42"),n("2877")),f=Object(u["a"])(s,a,i,!1,null,"7d99250f",null),p=f.exports,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["Nominee",{winner:t.nominee.winner},{scored:t.scored}]},[n("p",{staticClass:"_name",domProps:{textContent:t._s(t.nominee.name)}}),n("div",{staticClass:"Chips"},t._l(t.nominee.picks,function(e,r){return n("span",{key:"userNomineePick"+t.index+r,staticClass:"_userChip",domProps:{textContent:t._s(e)}})}),0)])},d=[],m={name:"Nominee",props:{index:{type:Number,default:0},nominee:{type:Object,default:null},scored:{type:Boolean,default:!1}}},_=m,y=(n("ce9c"),Object(u["a"])(_,l,d,!1,null,"44d1744a",null)),v=y.exports,h={name:"ScorecardsContainer",components:{AwardCategory:p,Nominee:v},computed:{nominations:function(){var t=this;return this.$root.nominees.map(function(e,n){return{category:e.category,points:e.points,scored:null!==e.winner,nominees:e.nominees.map(function(r,o){return{name:r,winner:o===e.winner,picks:t.$root.userPicks.filter(function(e){return t.$root.lowercaseAndSpaceless(e.picks[n])===t.$root.lowercaseAndSpaceless(r)}).map(function(t){return t.name})}})}})}}},g=h,b=(n("0601"),Object(u["a"])(g,r,o,!1,null,"6e4515bb",null));e["default"]=b.exports},aa77:function(t,e,n){var r=n("5ca1"),o=n("be13"),a=n("79e5"),i=n("fdef"),c="["+i+"]",s="​",u=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),p=function(t,e,n){var o={},c=a(function(){return!!i[t]()||s[t]()!=s}),u=o[t]=c?e(l):i[t];n&&(o[n]=u),r(r.P+r.F*c,"String",o)},l=p.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=p},c5f6:function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),a=n("2d95"),i=n("5dbc"),c=n("6a99"),s=n("79e5"),u=n("9093").f,f=n("11e9").f,p=n("86cc").f,l=n("aa77").trim,d="Number",m=r[d],_=m,y=m.prototype,v=a(n("2aeb")(y))==d,h="trim"in String.prototype,g=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():l(e,3);var n,r,o,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var i,s=e.slice(2),u=0,f=s.length;u<f;u++)if(i=s.charCodeAt(u),i<48||i>o)return NaN;return parseInt(s,r)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(v?s(function(){y.valueOf.call(n)}):a(n)!=d)?i(new _(g(e)),n,m):g(e)};for(var b,C=n("9e1e")?u(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;C.length>N;N++)o(_,b=C[N])&&!o(m,b)&&p(m,b,f(_,b));m.prototype=y,y.constructor=m,n("2aba")(r,d,m)}},ce9c:function(t,e,n){"use strict";var r=n("3e42"),o=n.n(r);o.a},dd42:function(t,e,n){"use strict";var r=n("e5f4"),o=n.n(r);o.a},e5f4:function(t,e,n){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=scorecards.9e27fa51.js.map