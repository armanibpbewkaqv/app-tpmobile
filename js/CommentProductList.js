(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CommentProductList"],{"6fb4":function(t,e,r){},"7be0":function(t,e,r){"use strict";r("6fb4")},e2ff:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"comment-container"},[r("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:t.title,fixed:""}},[r("div",{attrs:{slot:"left"},slot:"left"},[r("i",{staticClass:"iconfont icon-fanhui",on:{click:function(e){return t.$router.go(-1)}}})])]),r("div",{staticClass:"comment-wrap"},[r("div",{staticClass:"product-list-wrap"},t._l(t.productList,(function(e,i){return r("div",{key:e.productColorId+i,staticClass:"product-item-wrap"},[r("van-image",{staticClass:"product-image",attrs:{src:e.mainImgpath,alt:"item.productName"},scopedSlots:t._u([{key:"loading",fn:function(){return[r("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)}),r("div",{staticClass:"product-info-wrap"},[r("div",{staticClass:"product-name"},[t._v(" "+t._s(e.productName)+" ")]),e.attrDes?r("div",{staticClass:"product-desc"},[t._v(t._s(e.attrDes))]):t._e(),r("div",{staticClass:"product-price-wrap"},[r("div",{staticClass:"product-price"},[t._v(" "+t._s(e.productPrice)+" ")]),1===t.type?r("van-button",{staticClass:"comment-btn",attrs:{plain:"",round:"",size:"mini"},on:{click:function(e){return t.toCommentProduct(i)}}},[t._v(t._s(t.$t("order.toCommnet")))]):t._e(),2===t.type?r("van-button",{staticClass:"comment-btn",attrs:{plain:"",round:"",size:"mini"},on:{click:function(e){return t.toCommentProduct(i)}}},[t._v(t._s(t.$t("order.additionalCommnet")))]):t._e()],1)])],1)})),0)])],1)},n=[],o=r("1da1"),a=(r("96cf"),r("159b"),r("f8b7")),c=r("fa7d"),s={data:function(){return{type:this.$route.query.type,orderId:this.$route.query.id,title:this.$t("order.toCommnet"),orderDetail:{},productList:[]}},created:function(){"2"===this.type&&(this.title=this.$t("order.additionalCommnet")),this.getOrderDetail()},methods:{getOrderDetail:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.productList=[],e.next=3,Object(a["e"])({orderId:t.orderId});case 3:r=e.sent,t.type=r.cmtTpe,1===t.type?(t.title=t.$t("order.toCommnet"),r.spCart&&r.spCart.length>0&&r.spCart.forEach((function(e){e.mainImgpath=c["f"]+e.mainImgpath,e.productPrice=Object(c["n"])(e.productPrice,Object(c["q"])(r.correncyCode)),e.cmId&&"0"!==e.cmId||t.productList.push(e)}))):2===t.type&&(t.title=t.$t("order.additionalCommnet"),r.spCart&&r.spCart.length>0&&r.spCart.forEach((function(e){e.mainImgpath=c["f"]+e.mainImgpath,e.productPrice=Object(c["n"])(e.productPrice,Object(c["q"])(r.correncyCode)),e.zjcmId&&"0"!==e.zjcmId||t.productList.push(e)}))),t.orderDetail=r,0===t.productList.length&&t.$router.push({path:"/order"});case 8:case"end":return e.stop()}}),e)})))()},toCommentProduct:function(t){this.$router.push({path:"/comment/submit",query:{product:this.productList[t]}})}}},d=s,u=(r("7be0"),r("2877")),p=Object(u["a"])(d,i,n,!1,null,"3e0dac58",null);e["default"]=p.exports}}]);