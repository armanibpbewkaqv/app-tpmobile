(window.webpackJsonp=window.webpackJsonp||[]).push([["CustomList"],{"00ac":function(t,n,r){"use strict";r("753c")},"74d9":function(t,n,r){},"753c":function(t,n,r){},"90d3":function(t,n,r){"use strict";var e=r("5530"),c=r("1da1"),a=(r("96cf"),r("8593")),o={name:"TopDiscount",props:{},data:function(){return{infoArray:null}},created:function(){this.initInfoArray()},watch:{"$store.state.currentCurrency":function(){this.getTopAdsTxt()}},methods:{initInfoArray:function(){this.infoArray=[];var t=this.$store.state.systemInfo;t&&(t.next_advert_txt[0]&&this.infoArray.push(t.next_advert_txt[0]),this.infoArray.push(t.top_advert_img))},getTopAdsTxt:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(a.c)({currencyId:t.$store.state.currentCurrency.currencyCode});case 2:r=n.sent,(c=Object(e.a)(Object(e.a)({},t.$store.state.systemInfo),r)).top_advert_img=r.shippingCostAdsTxt,t.$store.commit("setSystemInfo",c),t.initInfoArray();case 7:case"end":return n.stop()}}),n)})))()}}},i=(r("00ac"),r("2877")),u=Object(i.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"top-discount-container"},t._l(t.infoArray,(function(n,e){return r("div",{key:e},[t._v(t._s(n))])})),0)}),[],!1,null,"b3d14476",null);n.a=u.exports},aced:function(t,n,r){"use strict";r("f4df")},c330:function(t,n,r){"use strict";var e=r("fa7d"),c={name:"HeaderNav",props:{showBack:{type:Boolean,default:!1}},data:function(){return{logoPath:""}},computed:{logoUrl:function(){return e.f+this.logoPath},number:function(){return this.$store.state.cartProductNumber}},created:function(){var t=this.$store.state.systemInfo;t&&(this.logoPath=t.logo_path)},methods:{clickCategory:function(){this.$store.commit("showMenuPanel")},clickSearch:function(){this.$router.push({path:"/search"})},clickCollect:function(){this.$router.push({path:"/wishlist"})},clickBag:function(){this.$router.push({path:"/bag"})},gotoHome:function(){this.$router.push({path:"/"})}}},a=(r("c7c4"),r("2877")),o=Object(a.a)(c,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("van-nav-bar",{staticClass:"app-nav-bar"},[r("div",{staticClass:"left-wrap",attrs:{slot:"left"},slot:"left"},[t.showBack?r("i",{staticClass:"iconfont icon-fanhui",on:{click:function(n){return t.$router.go(-1)}}}):t._e(),r("i",{staticClass:"iconfont icon-caidan",on:{click:t.clickCategory}})]),r("div",{staticClass:"mid-wrap",attrs:{slot:"title"},slot:"title"},[r("a",{attrs:{href:"#"},on:{click:t.gotoHome}},[r("img",{attrs:{src:t.logoUrl,alt:""}})])]),r("div",{staticClass:"right-wrap",attrs:{slot:"right"},slot:"right"},[r("i",{staticClass:"iconfont icon-sousuo",on:{click:t.clickSearch}}),r("i",{staticClass:"iconfont icon-ico_shoucangjia",on:{click:t.clickCollect}}),r("van-badge",{attrs:{content:t.number}},[r("i",{staticClass:"iconfont icon-gouwudai",on:{click:t.clickBag}})])],1)])}),[],!1,null,"731ec85e",null);n.a=o.exports},c4c8:function(t,n,r){"use strict";r.d(n,"m",(function(){return c})),r.d(n,"k",(function(){return a})),r.d(n,"l",(function(){return o})),r.d(n,"b",(function(){return i})),r.d(n,"a",(function(){return u})),r.d(n,"o",(function(){return s})),r.d(n,"j",(function(){return l})),r.d(n,"i",(function(){return f})),r.d(n,"d",(function(){return d})),r.d(n,"c",(function(){return h})),r.d(n,"g",(function(){return p})),r.d(n,"e",(function(){return m})),r.d(n,"f",(function(){return g})),r.d(n,"h",(function(){return b})),r.d(n,"n",(function(){return v}));var e=r("b775"),c=function(t){return Object(e.a)({url:"/productsbymenuandtag",data:t})},a=function(t){return Object(e.a)({url:"/menucustomcontent",data:t})},o=function(t){return Object(e.a)({url:"/product_detail",data:t})},i=function(t){return Object(e.a)({url:"/getallviewofprd",data:t})},u=function(t){return Object(e.a)({url:"/attention",data:t})},s=function(t){return Object(e.a)({url:"/search_products",data:t})},l=function(t){return Object(e.a)({url:"/products_rel",data:t})},f=function(t){return Object(e.a)({url:"/getmenuadscnt",data:t})},d=function(t){return Object(e.a)({url:"/countproduct",data:t})},h=function(t){return Object(e.a)({url:"/filterattrbysearchkey",data:t})},p=function(t){return Object(e.a)({url:"/flashsalesummry",data:t})},m=function(t){return Object(e.a)({url:"/flashsalefilter",data:t})},g=function(t){return Object(e.a)({url:"/flashsaleproducts",data:t})},b=function(t){return Object(e.a)({url:"/curflashsaleproducts",data:t})},v=function(t){return Object(e.a)({url:"/listimgwall",data:t})}},c7c4:function(t,n,r){"use strict";r("74d9")},cae5:function(t,n,r){"use strict";r.r(n);var e=r("1da1"),c=(r("96cf"),r("fa7d")),a=r("c330"),o=r("90d3"),i=r("c4c8"),u=r("8bbf"),s=r.n(u),l={components:{TopDiscount:o.a,HeaderNav:a.a,"custom-content":{props:{html:String},render:function(t){return t(s.a.extend({template:"<div>".concat(this.html,"</div>")}),{})}}},data:function(){return{categoryId:null,categoryContent:null}},created:function(){this.categoryId=Object(c.k)(this.$route.params.id),this.getProductCustomList()},methods:{getProductCustomList:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.k)({productType:t.categoryId,ismb:1});case 2:r=n.sent,t.categoryContent=r;case 4:case"end":return n.stop()}}),n)})))()}}},f=(r("aced"),r("2877")),d=Object(f.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"custom-list-container"},[n("TopDiscount"),n("van-sticky",[n("HeaderNav",{attrs:{showBack:!0}})],1),n("div",{staticClass:"custom-list-wrap"},[n("custom-content",{directives:[{name:"show",rawName:"v-show",value:this.categoryContent,expression:"categoryContent"}],attrs:{html:this.categoryContent}})],1)],1)}),[],!1,null,null,null);n.default=d.exports},f4df:function(t,n,r){t.exports={name:'"less"',btnColor:"var(--btnColor, #111)"}}}]);