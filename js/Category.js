(window.webpackJsonp=window.webpackJsonp||[]).push([["Category"],{"2b33":function(t,n,e){"use strict";e.r(n),e("159b");var c=e("c330"),a=e("fa7d"),i={components:{HeaderNav:c.a},data:function(){return{tabActive:0,subMenuActive:0,categoryList:[],productList:[]}},methods:{selectedSubMenu:function(t){this.subMenuActive=t},toProductList:function(t,n){this.$router.push("/list/"+Object(a.l)(t))}},created:function(){var t=this.$store.state.systemInfo;t&&(this.categoryList=JSON.parse(JSON.stringify(t.menu.menu_ref)),this.categoryList.forEach((function(t){t.next_menu?t.next_menu.forEach((function(t){t.next_menu||(t.next_menu=[{menu_name:t.menu_name,menu_type:t.menu_type,next_menu:[]}])})):t.next_menu=[{menu_name:t.menu_name,menu_type:t.menu_type,next_menu:[{menu_name:t.menu_name,menu_type:t.menu_type,next_menu:[]}]}]})),this.categoryList.forEach((function(t){t.menu_icon&&(t.menu_icon=a.f+t.menu_icon),t.next_menu&&t.next_menu.forEach((function(t){t.menu_icon&&(t.menu_icon=a.f+t.menu_icon),t.next_menu&&t.next_menu.forEach((function(t){t.menu_icon&&(t.menu_icon=a.f+t.menu_icon)}))}))})))}},o=(e("4aa6"),e("2877")),s=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"category-container"},[e("HeaderNav"),e("van-tabs",{attrs:{"title-active-color":"#222","title-inactive-color":"#767676",color:"#222"},model:{value:t.tabActive,callback:function(n){t.tabActive=n},expression:"tabActive"}},t._l(t.categoryList,(function(n){return e("van-tab",{key:n.menu_type,attrs:{title:n.menu_name}},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"left-wrap"},t._l(n.next_menu,(function(n,c){return e("van-cell",{key:n.menu_type,class:{selected:t.subMenuActive==c},attrs:{value:n.menu_name},on:{click:function(n){return t.selectedSubMenu(c)}}})})),1),e("div",{staticClass:"right-wrap"},[e("van-grid",{staticClass:"product-wrap",attrs:{"column-num":3,border:!1}},t._l(t.categoryList[t.tabActive].next_menu[t.subMenuActive].next_menu,(function(n){return e("van-grid-item",{key:n.menu_type,on:{click:function(e){return t.toProductList(n.menu_type,n.menu_name)}}},[n.menu_icon?e("van-image",{attrs:{src:n.menu_icon},scopedSlots:t._u([{key:"loading",fn:function(){return[e("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)}):t._e(),e("span",{staticClass:"name"},[t._v(t._s(n.menu_name))])],1)})),1)],1)])])})),1)],1)}),[],!1,null,"038455b3",null);n.default=s.exports},"4aa6":function(t,n,e){"use strict";e("f5c1")},"74d9":function(t,n,e){},c330:function(t,n,e){"use strict";var c=e("fa7d"),a={name:"HeaderNav",props:{showBack:{type:Boolean,default:!1}},data:function(){return{logoPath:""}},computed:{logoUrl:function(){return c.f+this.logoPath},number:function(){return this.$store.state.cartProductNumber}},created:function(){var t=this.$store.state.systemInfo;t&&(this.logoPath=t.logo_path)},methods:{clickCategory:function(){this.$store.commit("showMenuPanel")},clickSearch:function(){this.$router.push({path:"/search"})},clickCollect:function(){this.$router.push({path:"/wishlist"})},clickBag:function(){this.$router.push({path:"/bag"})},gotoHome:function(){this.$router.push({path:"/"})}}},i=(e("c7c4"),e("2877")),o=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("van-nav-bar",{staticClass:"app-nav-bar"},[e("div",{staticClass:"left-wrap",attrs:{slot:"left"},slot:"left"},[t.showBack?e("i",{staticClass:"iconfont icon-fanhui",on:{click:function(n){return t.$router.go(-1)}}}):t._e(),e("i",{staticClass:"iconfont icon-caidan",on:{click:t.clickCategory}})]),e("div",{staticClass:"mid-wrap",attrs:{slot:"title"},slot:"title"},[e("a",{attrs:{href:"#"},on:{click:t.gotoHome}},[e("img",{attrs:{src:t.logoUrl,alt:""}})])]),e("div",{staticClass:"right-wrap",attrs:{slot:"right"},slot:"right"},[e("i",{staticClass:"iconfont icon-sousuo",on:{click:t.clickSearch}}),e("i",{staticClass:"iconfont icon-ico_shoucangjia",on:{click:t.clickCollect}}),e("van-badge",{attrs:{content:t.number}},[e("i",{staticClass:"iconfont icon-gouwudai",on:{click:t.clickBag}})])],1)])}),[],!1,null,"731ec85e",null);n.a=o.exports},c7c4:function(t,n,e){"use strict";e("74d9")},f5c1:function(t,n,e){}}]);