(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["FlashSale"],{"1aa0":function(t,e,a){},"31eb":function(t,e,a){t.exports=a.p+"img/custom-empty-image.png"},"3ecc":function(t,e,a){"use strict";a("c9e6")},4654:function(t,e,a){"use strict";a("98d1")},46627:function(t,e,a){"use strict";a("1aa0")},7204:function(t,e,a){},"74d9":function(t,e,a){},"98d1":function(t,e,a){},"99af4":function(t,e,a){"use strict";var r=a("23e7"),s=a("d039"),n=a("e8b5"),i=a("861d"),c=a("7b0b"),o=a("50c4"),u=a("8418"),d=a("65f0"),l=a("1dde"),p=a("b622"),h=a("2d00"),f=p("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",v=h>=51||!s((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=l("concat"),_=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:n(t)},P=!v||!b;r({target:"Array",proto:!0,forced:P},{concat:function(t){var e,a,r,s,n,i=c(this),l=d(i,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(n=-1===e?i:arguments[e],_(n)){if(s=o(n.length),p+s>g)throw TypeError(m);for(a=0;a<s;a++,p++)a in n&&u(l,p,n[a])}else{if(p>=g)throw TypeError(m);u(l,p++,n)}return l.length=p,l}})},ae3a:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"count-down-container"},[a("van-count-down",{ref:"countDown",attrs:{time:t.countDownTime},on:{finish:t.finishEvent},scopedSlots:t._u([{key:"default",fn:function(e){return[e.days>0?a("span",{staticClass:"block"},[t._v(t._s(1==String(e.days).length?"0"+e.days:e.days))]):t._e(),e.days>0?a("span",{staticClass:"colon"},[t._v(":")]):t._e(),a("span",{staticClass:"block"},[t._v(t._s(1==String(e.hours).length?"0"+e.hours:e.hours))]),a("span",{staticClass:"colon"},[t._v(":")]),a("span",{staticClass:"block"},[t._v(t._s(1==String(e.minutes).length?"0"+e.minutes:e.minutes))]),a("span",{staticClass:"colon"},[t._v(":")]),a("span",{staticClass:"block"},[t._v(t._s(1==String(e.seconds).length?"0"+e.seconds:e.seconds))])]}}])})],1)},s=[],n=(a("a9e3"),{name:"CountDownView",props:{time:{type:Number}},data:function(){return{countDownTime:this.time}},created:function(){},mounted:function(){},watch:{time:function(){this.countDownTime=this.time,this.$refs.countDown.reset()}},methods:{finishEvent:function(){this.$emit("transferFinish")}}}),i=n,c=(a("4654"),a("2877")),o=Object(c["a"])(i,r,s,!1,null,"7f155a90",null);e["a"]=o.exports},c330:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-nav-bar",{staticClass:"app-nav-bar"},[a("div",{staticClass:"left-wrap",attrs:{slot:"left"},slot:"left"},[t.showBack?a("i",{staticClass:"iconfont icon-fanhui",on:{click:function(e){return t.$router.go(-1)}}}):t._e(),a("i",{staticClass:"iconfont icon-caidan",on:{click:t.clickCategory}})]),a("div",{staticClass:"mid-wrap",attrs:{slot:"title"},slot:"title"},[a("a",{attrs:{href:"#"},on:{click:t.gotoHome}},[a("img",{attrs:{src:t.logoUrl,alt:""}})])]),a("div",{staticClass:"right-wrap",attrs:{slot:"right"},slot:"right"},[a("i",{staticClass:"iconfont icon-sousuo",on:{click:t.clickSearch}}),a("i",{staticClass:"iconfont icon-ico_shoucangjia",on:{click:t.clickCollect}}),a("van-badge",{attrs:{content:t.number}},[a("i",{staticClass:"iconfont icon-gouwudai",on:{click:t.clickBag}})])],1)])},s=[],n=a("fa7d"),i={name:"HeaderNav",props:{showBack:{type:Boolean,default:!1}},data:function(){return{logoPath:""}},computed:{logoUrl:function(){return n["f"]+this.logoPath},number:function(){return this.$store.state.cartProductNumber}},created:function(){var t=this.$store.state.systemInfo;t&&(this.logoPath=t.logo_path)},methods:{clickCategory:function(){this.$store.commit("showMenuPanel")},clickSearch:function(){this.$router.push({path:"/search"})},clickCollect:function(){this.$router.push({path:"/wishlist"})},clickBag:function(){this.$router.push({path:"/bag"})},gotoHome:function(){this.$router.push({path:"/"})}}},c=i,o=(a("c7c4"),a("2877")),u=Object(o["a"])(c,r,s,!1,null,"731ec85e",null);e["a"]=u.exports},c4c8:function(t,e,a){"use strict";a.d(e,"m",(function(){return s})),a.d(e,"k",(function(){return n})),a.d(e,"l",(function(){return i})),a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return o})),a.d(e,"o",(function(){return u})),a.d(e,"j",(function(){return d})),a.d(e,"i",(function(){return l})),a.d(e,"d",(function(){return p})),a.d(e,"c",(function(){return h})),a.d(e,"g",(function(){return f})),a.d(e,"e",(function(){return g})),a.d(e,"f",(function(){return m})),a.d(e,"h",(function(){return v})),a.d(e,"n",(function(){return b}));var r=a("b775"),s=function(t){return Object(r["a"])({url:"/productsbymenuandtag",data:t})},n=function(t){return Object(r["a"])({url:"/menucustomcontent",data:t})},i=function(t){return Object(r["a"])({url:"/product_detail",data:t})},c=function(t){return Object(r["a"])({url:"/getallviewofprd",data:t})},o=function(t){return Object(r["a"])({url:"/attention",data:t})},u=function(t){return Object(r["a"])({url:"/search_products",data:t})},d=function(t){return Object(r["a"])({url:"/products_rel",data:t})},l=function(t){return Object(r["a"])({url:"/getmenuadscnt",data:t})},p=function(t){return Object(r["a"])({url:"/countproduct",data:t})},h=function(t){return Object(r["a"])({url:"/filterattrbysearchkey",data:t})},f=function(t){return Object(r["a"])({url:"/flashsalesummry",data:t})},g=function(t){return Object(r["a"])({url:"/flashsalefilter",data:t})},m=function(t){return Object(r["a"])({url:"/flashsaleproducts",data:t})},v=function(t){return Object(r["a"])({url:"/curflashsaleproducts",data:t})},b=function(t){return Object(r["a"])({url:"/listimgwall",data:t})}},c7c4:function(t,e,a){"use strict";a("74d9")},c9e6:function(t,e,a){},cf78:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.currentProduct?a("div",{staticClass:"product-detail-container"},[a("div",{staticClass:"product-infor-wrap"},[a("div",{staticClass:"product-image-wrap"},t._l(t.productImageList,(function(e,r){return a("div",{key:r},[a("van-image",{staticClass:"product-image",attrs:{src:e.big_img,alt:t.currentProduct.pcName},scopedSlots:t._u([{key:"loading",fn:function(){return[a("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)})],1)})),0),a("div",{staticClass:"product-info-wrap"},[a("div",{staticClass:"product-name-wrap"},[a("div",{staticClass:"product-name"},[t._v(t._s(t.currentProduct.pcName))])]),a("div",{staticClass:"product-price-wrap"},[a("div",{staticClass:"price-wrap"},[a("span",[t._v(t._s(t.productSalePrice))]),a("del",[t._v(t._s(t.productOldPrice))])]),a("div",{staticClass:"detail-wrap",on:{click:t.toProductDetail}},[a("span",[t._v(t._s(t.$t("detail.detailLabel")))]),a("i",{staticClass:"iconfont icon-xiangyou1"})])])]),t.showColorWrap?a("div",{staticClass:"product-color-wrap"},[a("div",{staticClass:"title-wrap"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("detail.colorTitle")))])]),t._l(t.productInfo.color_data,(function(e,r){return a("div",{key:e.color_id,staticClass:"color-image-wrap",on:{click:function(e){return t.colorItemClick(r)}}},[a("van-image",{class:{selected:t.currentProduct.color_id==e.color_id},attrs:{src:e.color_img,alt:"colorItem.pcName"},scopedSlots:t._u([{key:"loading",fn:function(){return[a("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)})],1)}))],2):t._e(),t._l(t.currentProduct.dyn_attrs,(function(e,r){return a("div",{key:e.attrID,staticClass:"product-size-wrap"},[a("div",{staticClass:"title-wrap"},[a("div",{staticClass:"title"},[t._v(t._s(e.attr_name))])]),a("div",{staticClass:"size-wrap"},t._l(e.domain_list,(function(s,n){return a("div",{key:s.optId,staticClass:"size-item",class:{selected:e.selectedAttr&&e.selectedAttr.attrOptId==s.optId},on:{click:function(a){return t.chooseAttrItem(e,r,n)}}},[t._v(t._s(s.optName))])})),0)])}))],2),a("div",{staticClass:"add-btn",on:{click:t.addProductToBag}},[t._v(t._s(t.$t("detail.addToBagBtn")))])]):t._e()},s=[],n=(a("e7e5"),a("d399")),i=a("1da1"),c=(a("96cf"),a("159b"),a("fa7d")),o=a("c4c8"),u=a("2166"),d=a("5d2d"),l={name:"ProductDetailPanel",props:{productId:{type:String},productColorId:{type:String},close:{type:Function}},data:function(){return{productInfo:{},currentProduct:null,productNumber:1}},watch:{productId:function(){this.getProductDetail()}},computed:{productImageList:function(){return this.currentProduct&&this.currentProduct.img_groups?(this.currentProduct.img_groups.forEach((function(t){t.big_img=c["f"]+t.big_img})),this.currentProduct.img_groups):[]},productSalePrice:function(){return this.currentProduct.original_price?Object(c["n"])(this.currentProduct.current_price,this.$store.state.currentCurrency):""},productOldPrice:function(){return this.currentProduct.current_price?Object(c["n"])(this.currentProduct.original_price,this.$store.state.currentCurrency):""},showColorWrap:function(){var t=this.$store.state.systemInfo;return!(!t||"1"!==t.img_block&&"2"!==t.img_block)}},created:function(){this.getProductDetail()},methods:{getProductDetail:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["l"])({currencyId:t.$store.state.currentCurrency.currencyCode,productId:t.productId,userId:t.$store.state.user?t.$store.state.user.userId:null});case 2:a=e.sent,t.productInfo=a,t.productInfo.color_data.forEach((function(e){e.color_img=c["f"]+e.color_img,e.img_display=c["f"]+e.img_display,e.color_id===t.productColorId&&(t.currentProduct=e)}));case 5:case"end":return e.stop()}}),e)})))()},chooseAttrItem:function(t,e,a){this.$set(this.currentProduct.dyn_attrs[e],"selectedAttr",{attrOptId:t.domain_list[a].optId,attrType:t.attrID,attrString:t.attr_name+":"+t.domain_list[a].optName})},toProductDetail:function(){this.close(),this.$router.push("/detail/"+Object(c["l"])(this.productId)+"/"+Object(c["l"])(this.currentProduct.color_id))},addProductToBag:function(){for(var t=[],e=0;e<this.currentProduct.dyn_attrs.length;e++){var a=this.currentProduct.dyn_attrs[e];if(!a.selectedAttr)return void Object(n["a"])(this.$t("detail.noSelectedAttr",[a.attr_name]));t.push(a.selectedAttr)}this.$store.state.user?this.addProductForUser(t):this.addProductForLocal(t)},addProductForUser:function(t){var e=[{userId:this.$store.state.user.userId,productName:this.currentProduct.pcName,productImage:this.currentProduct.img_display,productId:this.productId,productColorId:this.currentProduct.color_id,productNum:this.productNumber,attrOpts:t}];this.requestAddProductToBag(e)},addProductForLocal:function(t){var e={productName:this.currentProduct.pcName,productImage:this.currentProduct.img_display,productId:this.productId,productColorId:this.currentProduct.color_id,productNum:this.productNumber,attrOpts:t},a=Object(d["u"])(d["o"]);if(a){for(var r=-1,s=0;s<a.length;s++){var i=a[s];if(this.isSameProduct(e,i)){r=s;break}}-1===r?a.push(e):a[r].productNum=a[r].productNum+this.productNumber,Object(d["x"])(d["o"],JSON.stringify(a))}else Object(d["x"])(d["o"],[e]);this.$store.commit("setCartProductNumber",this.$store.state.cartProductNumber+this.productNumber),n["a"].success(this.$t("common.addSuccess")),this.close()},isSameProduct:function(t,e){if(t.productId!==e.productId||t.productColorId!==e.productColorId)return!1;if(t.attrOpts.length!==e.attrOpts.length)return!1;for(var a=0;a<t.attrOpts.length;a++){var r=t.attrOpts[a],s=e.attrOpts[a];if(r.attrType!==s.attrType||r.attrOptId!==s.attrOptId)return!1}return!0},requestAddProductToBag:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(u["a"])({inputParams:JSON.stringify(t),userid:e.$store.state.user?e.$store.state.user.userId:null}).then((function(){n["a"].success(e.$t("common.addSuccess")),e.close(),e.$store.commit("setCartProductNumber",e.$store.state.cartProductNumber+e.productNumber)})).catch((function(){n["a"].success(e.$t("common.addFail"))}));case 2:case"end":return a.stop()}}),a)})))()},colorItemClick:function(t){this.currentProduct=this.productInfo.color_data[t]}}},p=l,h=(a("3ecc"),a("2877")),f=Object(h["a"])(p,r,s,!1,null,"38f32f28",null);e["a"]=f.exports},db68:function(t,e,a){"use strict";a("7204")},fe46:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flash-sale-container"},[a("van-sticky",[a("HeaderNav",{attrs:{showBack:!0}})],1),t.showSkeleton?a("div",{staticClass:"skeleton-wrap"},[a("div",{staticClass:"loading-item"},[a("van-loading",{attrs:{type:"spinner"}}),a("van-skeleton",{attrs:{row:3}})],1),a("div",{staticClass:"loading-item"},[a("van-loading",{attrs:{type:"spinner"}}),a("van-skeleton",{attrs:{row:3}})],1),a("div",{staticClass:"loading-item"},[a("van-loading",{attrs:{type:"spinner"}}),a("van-skeleton",{attrs:{row:3}})],1),a("div",{staticClass:"loading-item"},[a("van-loading",{attrs:{type:"spinner"}}),a("van-skeleton",{attrs:{row:3}})],1)]):t._e(),t.showSkeleton?t._e():a("div",[a("van-tabs",{attrs:{background:"#facf19",ellipsis:!1,color:"#111","line-width":t.tabWidth},on:{change:t.tabChanged},model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},t._l(t.tabData,(function(e,r){return a("van-tab",{key:r,attrs:{name:r},scopedSlots:t._u([{key:"title",fn:function(){return[a("div",{staticClass:"tab-col-time"},[a("div",{staticClass:"time"},[t._v(t._s(e.time))]),a("div",{staticClass:"date"},[t._v(t._s(e.date))])]),1==e.status?a("div",{staticClass:"status-text"},[t._v(t._s(t.$t("flashSale.onSaleDesc")))]):t._e(),0==e.status?a("div",{staticClass:"status-text"},[t._v(t._s(t.$t("flashSale.comingDesc")))]):t._e()]},proxy:!0}],null,!0)},[a("div",{staticClass:"flashsale-count-down-wrap"},[1==e.status?a("span",[t._v(t._s(t.$t("flashSale.endTitle")))]):t._e(),0==e.status?a("span",[t._v(t._s(t.$t("flashSale.startTitle")))]):t._e(),a("CountDownView",{attrs:{time:e.gap},on:{transferFinish:t.countDownFinish}})],1),a("van-sticky",[e.filterData&&e.filterData.tags&&e.filterData.tags.length>0?a("div",{staticClass:"tags-wrap"},t._l(e.filterData.tags,(function(e,r){return a("div",{key:r,staticClass:"tags-item",class:{selected:e.selected},on:{click:function(e){return t.clickTag(r)}}},[t._v(" "+t._s(e.tagDes)+" ")])})),0):t._e()]),e.data&&e.data.length>0?a("van-list",{staticClass:"product-list-wrap",attrs:{finished:t.finished,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(e.data,(function(e,r){return a("FlashSaleProductItem",{key:r,attrs:{data:e},on:{showDetailPop:t.showDetailByIndex}})})),1):t._e(),e.data&&0!=e.data.length?t._e():a("div",{staticClass:"empty-wrap"},[a("van-empty",{attrs:{description:t.$t("common.emptyData"),image:t.emptyImage}})],1)],1)})),1)],1),a("van-popup",{style:{height:"80%",width:"100%"},attrs:{closeable:"",position:"bottom"},model:{value:t.showDetailsPop,callback:function(e){t.showDetailsPop=e},expression:"showDetailsPop"}},[a("ProductDetailPanel",{attrs:{productId:t.currentProductId,productColorId:t.currentProductColorId,close:t.hideDetailPop}})],1)],1)},s=[],n=a("1da1"),i=(a("96cf"),a("2ca0"),a("159b"),a("99af4"),a("c330")),c=a("ae3a"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-list-item-wrap",on:{click:t.toProductDetail}},[a("div",{staticClass:"product-image-wrap"},[a("van-image",{staticClass:"product-image",attrs:{src:t.productImage,"lazy-load":""},scopedSlots:t._u([{key:"loading",fn:function(){return[a("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}])}),1==t.data.status?a("div",{staticClass:"add-cart-icon"},[a("i",{staticClass:"iconfont icon-jiarugouwuche",on:{click:function(e){return t.showDetailPop(e)}}})]):t._e()],1),a("div",{staticClass:"label-wrap"},[a("div",{staticClass:"off-wrap"},[a("i",{staticClass:"iconfont icon-shandian"}),a("div",[t._v(t._s(t.productPriceOff))])])]),a("div",{staticClass:"price-wrap"},[a("span",{staticClass:"sale-price"},[t._v(t._s(t.productSalePrice))]),a("div",{staticClass:"old-price"},[t._v(t._s(t.productOldPrice))])]),a("div",{staticClass:"product-name van-ellipsis"},[t._v(t._s(t.data.product_name))]),1==t.data.status?a("div",{staticClass:"sold-number"},[t._v(t._s(t.$t("flashSale.soldHint",[t.data.sold])))]):t._e(),1==t.data.status?a("van-progress",{staticClass:"sold-progress",attrs:{color:"#facf19",percentage:t.soldPercent,"show-pivot":!1}}):t._e(),0==t.data.status?a("div",{staticClass:"sold-number"},[t._v(t._s(t.$t("flashSale.willSoldHint",[t.data.limit])))]):t._e()],1)},u=[],d=(a("e7e5"),a("d399")),l=(a("a9e3"),a("b680"),a("fa7d")),p=a("c4c8"),h={name:"FlashSaleProductItem",props:{data:{type:Object,required:!0}},data:function(){return{selectedIndex:0}},computed:{productImage:function(){return this.data.display_data?l["f"]+this.data.display_data[this.selectedIndex].img_display:""},productSalePrice:function(){return this.data.display_data?Object(l["n"])(this.data.display_data[this.selectedIndex].current_price,this.$store.state.currentCurrency):""},productOldPrice:function(){return this.data.display_data?Object(l["n"])(this.data.display_data[this.selectedIndex].original_price,this.$store.state.currentCurrency):""},productPriceOff:function(){try{var t=Number(this.data.display_data[this.selectedIndex].original_price),e=Number(this.data.display_data[this.selectedIndex].current_price);return"-"+(100-100*e/(100*t)*100).toFixed(0)+"%"}catch(a){return""}},soldPercent:function(){return this.data.soldPercent?Number(this.data.soldPercent.substring(0,this.data.soldPercent.length-1)):0}},methods:{toProductDetail:function(){this.$router.push("/detail/"+Object(l["l"])(this.data.product_id)+"/"+Object(l["l"])(this.data.display_data[this.selectedIndex].color_id))},showDetailPop:function(t){t.stopPropagation(),this.$emit("showDetailPop",this.data)},addToWishList:function(t){t.stopPropagation(),this.$store.state.user?this.productAttention():this.$store.commit("showLoginPanel")},productAttention:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={currencyId:t.$store.state.currentCurrency.currencyCode,productId:t.data.productId,userId:t.$store.state.user?t.$store.state.user.userId:null,colorId:t.data.display_data[0].color_id,type:0===t.currentProduct.isattention?1:2},e.next=3,Object(p["a"])(a).then((function(){0===t.currentProduct.isattention?(t.currentProduct.isattention=1,d["a"].success(t.$t("detail.collectionSuccess"))):(t.currentProduct.isattention=0,d["a"].success(t.$t("detail.cancelSuccess")))})).catch((function(){0===t.currentProduct.isattention?(t.currentProduct.isattention=1,d["a"].success(t.$t("detail.collectionFailed"))):(t.currentProduct.isattention=0,d["a"].success(t.$t("detail.cancelFailed")))}));case 3:case"end":return e.stop()}}),e)})))()}}},f=h,g=(a("db68"),a("2877")),m=Object(g["a"])(f,o,u,!1,null,"5c453cf6",null),v=m.exports,b=a("cf78"),_={components:{HeaderNav:i["a"],CountDownView:c["a"],FlashSaleProductItem:v,ProductDetailPanel:b["a"]},data:function(){return{loading:!1,finished:!1,currentPage:1,showSkeleton:!1,emptyImage:a("31eb"),tabActive:0,tabData:[],flashContainer:null,filterAttr:[],tags:[],sortValue:1,showDetailsPop:!1,currentProductId:null,currentProductColorId:null,tabWidth:null}},created:function(){this.showSkeleton=!0,this.getFalshSaleTabData()},mounted:function(){this.flashContainer=this.$refs.flashContainer},watch:{$route:function(t,e){t.path.startsWith("/flashsale")&&1===this.currentPage&&(document.body.scrollTop=document.documentElement.scrollTop=0)}},methods:{getFalshSaleTabData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["g"])({});case 2:a=e.sent,a&&a.length>0?(a.forEach((function(t){t.time=Object(l["v"])(t.start),t.date=Object(l["r"])(t.start)})),t.tabData=a,t.loadFirstPage(),t.tabWidth=100/a.length+"%"):t.tabWidth="100%";case 4:case"end":return e.stop()}}),e)})))()},getFlashSaleFilterData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["e"])({flashId:t.tabData[t.tabActive].flashId});case 2:a=e.sent,a&&a.tags&&a.tags.length>0&&a.tags.forEach((function(t){t.selected=!1})),t.$set(t.tabData[t.tabActive],"filterData",a);case 5:case"end":return e.stop()}}),e)})))()},loadFirstPage:function(){this.currentPage=1,this.finished=!1,this.loading=!1,this.getFlashSaleFilterData(),this.requestFlashSaleList()},requestFlashSaleList:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.getFilterParams(),e.next=3,Object(p["f"])({currencyId:t.$store.state.currentCurrency.currencyCode,currentPage:t.currentPage,flashId:t.tabData[t.tabActive].flashId,orderby:t.sortValue,filterObj:JSON.stringify(a)});case 3:r=e.sent,r.page?(1===t.currentPage&&(t.pageInfo=JSON.parse(JSON.stringify(r.page)),t.$set(t.tabData[t.tabActive],"data",[]),t.showSkeleton=!1),r.products&&r.products.length>0&&(r.products.forEach((function(e){e.status=t.tabData[t.tabActive].status})),t.$set(t.tabData[t.tabActive],"data",t.tabData[t.tabActive].data.concat(r.products)))):(t.pageInfo.amount=0,t.$set(t.tabData[t.tabActive],"data",[]),t.showSkeleton=!1),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},getFilterParams:function(){var t={fiterAttr:[],tags:[]};if(this.tabData[this.tabActive].filterData&&(this.tabData[this.tabActive].filterData.filterAttr&&this.tabData[this.tabActive].filterData.filterAttr.length>0&&this.tabData[this.tabActive].filterData.filterAttr.forEach((function(e){var a=[];e.dmList.forEach((function(t){t.selected&&a.push({optId:t.optId,optDes:t.optDes})})),a.length>0&&t.fiterAttr.push({type:e.type,des:e.des,dmList:JSON.parse(JSON.stringify(a))})})),this.tabData[this.tabActive].filterData.tags&&this.tabData[this.tabActive].filterData.tags.length>0)){var e=[];this.tabData[this.tabActive].filterData.tags.forEach((function(t){t.selected&&e.push(t)})),t.tags=JSON.parse(JSON.stringify(e))}return t},onLoad:function(){this.tabData[this.tabActive].data.length>=this.pageInfo.amount?this.finished=!0:(this.currentPage=this.currentPage+1,this.requestFlashSaleList())},tabChanged:function(){this.loadFirstPage()},showDetailByIndex:function(t){this.showDetailsPop=!0,this.currentProductId=t.product_id,this.currentProductColorId=t.display_data[0].color_id},hideDetailPop:function(){this.showDetailsPop=!1},countDownFinish:function(){this.getFalshSaleTabData()},clickTag:function(t){this.tabData[this.tabActive].filterData.tags[t].selected=!this.tabData[this.tabActive].filterData.tags[t].selected,this.currentPage=1,this.requestFlashSaleList()}}},P=_,w=(a("46627"),Object(g["a"])(P,r,s,!1,null,"b3f0a2d8",null));e["default"]=w.exports}}]);