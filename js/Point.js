(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Point"],{"0cc6":function(t,i,n){"use strict";n("fd54")},"31eb":function(t,i,n){t.exports=n.p+"img/custom-empty-image.png"},"99af4":function(t,i,n){"use strict";var e=n("23e7"),s=n("d039"),o=n("e8b5"),a=n("861d"),r=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),p=n("1dde"),d=n("b622"),f=n("2d00"),h=d("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",m=f>=51||!s((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=p("concat"),w=function(t){if(!a(t))return!1;var i=t[h];return void 0!==i?!!i:o(t)},C=!m||!b;e({target:"Array",proto:!0,forced:C},{concat:function(t){var i,n,e,s,o,a=r(this),p=l(a,0),d=0;for(i=-1,e=arguments.length;i<e;i++)if(o=-1===i?a:arguments[i],w(o)){if(s=c(o.length),d+s>g)throw TypeError(v);for(n=0;n<s;n++,d++)n in o&&u(p,d,o[n])}else{if(d>=g)throw TypeError(v);u(p,d++,o)}return p.length=d,p}})},fbd6:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"point-container"},[n("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:t.$t("point.title"),fixed:""}},[n("div",{attrs:{slot:"left"},slot:"left"},[n("i",{staticClass:"iconfont icon-fanhui",on:{click:function(i){return t.$router.go(-1)}}})]),n("div",{attrs:{slot:"right"},on:{click:t.toRules},slot:"right"},[n("i",{staticClass:"iconfont icon-wenhao"})])]),n("div",{staticClass:"point-wrap"},[n("div",{staticClass:"point-top-wrap"},[n("strong",[t._v(t._s(t.totalPoints))]),n("div",{staticClass:"check-in-btn",on:{click:t.toCheckin}},[t._v(t._s(t.$t("point.clockin")))])]),n("div",{staticClass:"point-list-wrap"},[t.pointList.length>0?n("van-list",{attrs:{finished:t.finished,"immediate-check":!1,offset:"10"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.pointList,(function(i,e){return n("div",{key:e},[n("div",{staticClass:"point-item-wrap"},[n("div",{staticClass:"point-item-info"},[n("div",{staticClass:"title"},[t._v(t._s(i.des))]),n("div",{staticClass:"date"},[t._v(t._s(i.time))])]),n("div",{staticClass:"point-number"},[t._v(t._s(i.dispValue))])])])})),0):t._e(),0==t.pointList.length?n("div",{staticClass:"empty-wrap"},[n("van-empty",{attrs:{description:t.$t("common.emptyData"),image:t.emptyImage}})],1):t._e()],1)])],1)},s=[],o=n("1da1"),a=(n("96cf"),n("159b"),n("99af4"),n("c24f")),r=n("fa7d"),c={data:function(){return{loading:!1,finished:!1,currentPage:1,pageInfo:"",pointList:[],totalPoints:0,emptyImage:n("31eb")}},created:function(){this.requestPointList()},methods:{onLoad:function(){this.pointList.length>=this.pageInfo.amount?this.finished=!0:(this.currentPage=this.currentPage+1,this.requestPointList())},requestPointList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!t.$store.state.user){i.next=7;break}return i.next=3,Object(a["m"])({userId:t.$store.state.user.userId,curPage:t.currentPage});case 3:n=i.sent,n.totalPoints&&(t.totalPoints=n.totalPoints),n.page?(1===t.currentPage&&(t.pageInfo=JSON.parse(JSON.stringify(n.page)),t.pointList=[]),n.logs.forEach((function(t){t.time=Object(r["m"])(t.time)})),t.pointList=t.pointList.concat(n.logs)):(t.pageInfo.amount=0,t.pointList=[]),t.loading=!1;case 7:case"end":return i.stop()}}),i)})))()},toRules:function(){this.$router.push({path:"/point/rules"})},toCheckin:function(){this.$router.push({path:"/point/clockin"})}}},u=c,l=(n("0cc6"),n("2877")),p=Object(l["a"])(u,e,s,!1,null,"5a272c09",null);i["default"]=p.exports},fd54:function(t,i,n){}}]);