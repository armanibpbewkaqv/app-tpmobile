(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OrderDetail"],{"212f":function(t,e,r){},6917:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-detail-container"},[r("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:t.$t("order.detailTitle"),fixed:""}},[r("div",{attrs:{slot:"left"},slot:"left"},[r("i",{staticClass:"iconfont icon-fanhui",on:{click:t.toOrderList}})])]),r("div",{staticClass:"main-content",staticStyle:{bottom:"50px"}},[r("div",{staticClass:"order-status-wrap"},[r("div",{staticClass:"status"},[t._v(t._s(t.orderDetail.paymentStatusString))]),0==t.orderDetail.paymentStatus||2==t.orderDetail.paymentStatus?r("van-button",{staticClass:"status-payment-2-btn",on:{click:t.toPaymentAgain}},[t._v(t._s(t.$t("order.continuPayment")))]):t._e(),1!=t.orderDetail.paymentStatus&&4!=t.orderDetail.paymentStatus||"1"!=t.orderDetail.cmtTpe?t._e():r("van-button",{staticClass:"status-payment-2-btn",on:{click:t.toComment}},[t._v(t._s(t.$t("order.toCommnet")))]),1!=t.orderDetail.paymentStatus&&4!=t.orderDetail.paymentStatus||"2"!=t.orderDetail.cmtTpe?t._e():r("van-button",{staticClass:"status-payment-2-btn",on:{click:t.toAdditionalCommnet}},[t._v(t._s(t.$t("order.additionalCommnet")))])],1),r("div",{staticClass:"addr-wrap"},[r("div",{staticClass:"title-wrap"},[r("div",{staticClass:"title"},[t._v(t._s(t.$t("address.title")))]),0==t.orderDetail.paymentStatus||2==t.orderDetail.paymentStatus?r("i",{staticClass:"iconfont icon-ziyuan",on:{click:t.editShippingAddress}}):t._e()]),t.orderDetail.shippingAddr?r("div",{staticClass:"address-info-wrap"},[r("div",{staticClass:"name-phone"},[t._v(" "+t._s(t.orderDetail.shippingAddr.recFirstname)+" "+t._s(t.orderDetail.shippingAddr.recLastname)+" "+t._s(t.orderDetail.shippingAddr.telephone)+" ")]),r("div",{staticClass:"country-wrap"},[t._v(t._s(t.orderDetail.shippingAddr.streetAddr)+" "+t._s(t.orderDetail.shippingAddr.extendAddr)+" "+t._s(t.orderDetail.shippingAddr.city)+" "+t._s(t.orderDetail.shippingAddr.province)+" "+t._s(t.orderDetail.shippingAddr.fullCountry)+" "+t._s(t.orderDetail.shippingAddr.postCode))])]):t._e()]),r("div",{staticClass:"addr-wrap"},[r("div",{staticClass:"title-wrap"},[r("div",{staticClass:"title"},[t._v(t._s(t.$t("address.billingAddress")))]),0==t.orderDetail.paymentStatus||2==t.orderDetail.paymentStatus?r("i",{staticClass:"iconfont icon-ziyuan",on:{click:t.editBillingAddress}}):t._e()]),t.orderDetail.billAddr?r("div",{staticClass:"address-info-wrap"},[r("div",{staticClass:"name-phone"},[t._v(" "+t._s(t.orderDetail.billAddr.recFirstname)+" "+t._s(t.orderDetail.billAddr.recLastname)+" "+t._s(t.orderDetail.billAddr.telephone)+" ")]),r("div",{staticClass:"street-country-wrap"},[t._v(t._s(t.orderDetail.billAddr.streetAddr)+" "+t._s(t.orderDetail.billAddr.extendAddr)+" "+t._s(t.orderDetail.billAddr.city)+" "+t._s(t.orderDetail.billAddr.province)+" "+t._s(t.orderDetail.billAddr.fullCountry)+" "+t._s(t.orderDetail.billAddr.postCode))])]):t._e()]),r("div",{staticClass:"product-list-wrap"},[r("div",{staticClass:"title-wrap"},[r("div",{staticClass:"title"},[t._v(t._s(t.$t("bag.title")))]),r("div",{staticClass:"number"},[t._v(t._s(t.$t("detail.selectedAttrString",[t.productTotalNumber])))])]),t._l(t.orderDetail.spCart,(function(e,s){return r("div",{key:e.productColorId+s,staticClass:"product-item-wrap",on:{click:function(r){return t.toProductDetail(e)}}},[r("van-image",{staticClass:"product-image",attrs:{src:e.mainImgpath,alt:"item.productName"},scopedSlots:t._u([{key:"loading",fn:function(){return[r("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)}),r("div",{staticClass:"product-info-wrap"},[r("div",[r("div",{staticClass:"product-name"},[t._v(" "+t._s(e.productName)+" ")]),e.colorDes?r("div",{staticClass:"product-desc"},[t._v(t._s(t.$t("detail.colorTitle"))+": "+t._s(e.colorDes))]):t._e(),e.attrDes?r("div",{staticClass:"product-desc"},[t._v(t._s(e.attrDes))]):t._e()]),r("div",{staticClass:"product-price-wrap"},[r("div",{staticClass:"product-price"},[t._v(" "+t._s(e.productPrice)+" ")]),r("div",{staticClass:"product-number"},[t._v(" x "+t._s(e.productNum)+" ")])])])],1)}))],2),r("div",{staticClass:"order-info-wrap"},[r("div",{staticClass:"order-info"},[r("div",{staticClass:"order-info-item"},[t._v(t._s(t.$t("order.orderNumber"))+" : "),r("span",[t._v(t._s(t.orderDetail.orderId))])]),r("div",{staticClass:"order-info-item"},[t._v(t._s(t.$t("order.orderDate"))+" : "),r("span",[t._v(t._s(t.orderDetail.crTime))])])]),t.orderDetail.orderDisInfos&&t.orderDetail.orderDisInfos.length>0?r("div",{staticClass:"price-info-wrap"},t._l(t.orderDetail.orderDisInfos,(function(e,s){return r("div",{key:s,staticClass:"price-item"},[r("div",{staticClass:"label"},[t._v(t._s(e.disTitle))]),r("div",{class:e.isDiscount?"value green":"value"},[t._v(t._s(e.disCost))])])})),0):t._e()])]),r("div",{staticClass:"bottom-wrap",staticStyle:{height:"50px"}},[0==t.orderDetail.paymentStatus||2==t.orderDetail.paymentStatus?r("van-button",{staticClass:"payment-2-btn",on:{click:t.toPaymentAgain}},[t._v(t._s(t.$t("order.continuPayment")))]):t._e(),0==t.orderDetail.paymentStatus||2==t.orderDetail.paymentStatus?r("van-button",{staticClass:"payment-2-btn",on:{click:t.handleCancelOrder}},[t._v(t._s(t.$t("order.cancelOrder")))]):t._e(),1==t.orderDetail.paymentStatus?r("van-button",{staticClass:"payment-2-btn",on:{click:t.toViewLogistics}},[t._v(t._s(t.$t("order.viewLogistics")))]):t._e(),1==t.orderDetail.paymentStatus?r("van-button",{staticClass:"payment-2-btn",on:{click:t.confirmReceive}},[t._v(t._s(t.$t("order.confirmReceive")))]):t._e(),1!=t.orderDetail.paymentStatus&&4!=t.orderDetail.paymentStatus||"1"!=t.orderDetail.cmtTpe?t._e():r("van-button",{staticClass:"payment-2-btn",on:{click:t.toComment}},[t._v(t._s(t.$t("order.toCommnet")))]),1!=t.orderDetail.paymentStatus&&4!=t.orderDetail.paymentStatus||"2"!=t.orderDetail.cmtTpe?t._e():r("van-button",{staticClass:"payment-2-btn",on:{click:t.toAdditionalCommnet}},[t._v(t._s(t.$t("order.additionalCommnet")))]),"1"==t.orderDetail.goOnShopping?r("van-button",{staticClass:"payment-2-btn",on:{click:t.buyAgain}},[t._v(t._s(t.$t("order.buyAgain")))]):t._e(),5==t.orderDetail.paymentStatus?r("van-button",{staticClass:"payment-2-btn",on:{click:t.handleDeleteOrder}},[t._v(t._s(t.$t("order.deleteOrder")))]):t._e(),"0"==t.orderDetail.cfaddrStatus?r("van-button",{staticClass:"payment-2-btn",on:{click:t.showConfirmAddressPop}},[t._v(t._s(t.$t("order.confirmAddress")))]):t._e()],1),r("van-popup",{attrs:{position:"bottom"},model:{value:t.showConfirmInfo,callback:function(e){t.showConfirmInfo=e},expression:"showConfirmInfo"}},[t.orderDetail.shippingAddr?r("div",{staticClass:"confirm-address-wrap"},[r("div",{staticClass:"title"},[t._v(t._s(t.$t("order.confirmAddress")))]),r("div",{staticClass:"content-item"},[r("span",[t._v(t._s(t.$t("payment.name")))]),t._v(": "+t._s(t.orderDetail.shippingAddr.recFirstname)+" "+t._s(t.orderDetail.shippingAddr.recLastname)+" ")]),r("div",{staticClass:"content-item"},[r("span",[t._v(t._s(t.$t("order.phoneNumber")))]),t._v(": "+t._s(t.orderDetail.shippingAddr.telephone)+" ")]),r("div",{staticClass:"content-item"},[r("span",[t._v(t._s(t.$t("address.title")))]),t._v(": "+t._s(t.orderDetail.shippingAddr.streetAddr)+" "),t.orderDetail.shippingAddr.extendAddr?r("span",[t._v(t._s(t.orderDetail.shippingAddr.extendAddr))]):t._e(),t._v(" "+t._s(t.orderDetail.shippingAddr.city)+" "+t._s(t.orderDetail.shippingAddr.province)+" "+t._s(t.orderDetail.shippingAddr.fullCountry)+" ")]),r("div",{staticClass:"hint"},[r("span",[t._v("* "+t._s(t.$t("payment.confirmAddrMessage1")))]),r("span",[t._v("* "+t._s(t.$t("payment.confirmAddrMessage2")))]),r("span",[t._v("* "+t._s(t.$t("payment.confirmAddrMessage3")))])]),r("div",{staticClass:"btn-wrap"},[r("van-button",{staticClass:"confirm-address-btn",attrs:{size:"large"},on:{click:t.toConfirmAddress}},[t._v(t._s(t.$t("order.confirmAddress")))])],1)]):t._e()])],1)},i=[],a=(r("e7e5"),r("d399")),n=(r("e17f"),r("2241")),o=r("1da1"),d=(r("96cf"),r("159b"),r("2ca0"),r("ac1f"),r("5319"),r("2166")),c=r("f8b7"),l=r("fa7d"),u={data:function(){return{orderId:this.$route.query.orderId,orderDetail:{},showConfirmInfo:!1}},created:function(){this.getOrderDetail()},mounted:function(){},computed:{productTotalNumber:function(){var t=0;return this.orderDetail.spCart&&this.orderDetail.spCart.length>0&&this.orderDetail.spCart.forEach((function(e){t+=e.productNum})),t}},methods:{getOrderDetail:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["e"])({orderId:t.orderId});case 2:r=e.sent,e.t0=r.paymentStatus,e.next=0===e.t0?6:1===e.t0?8:2===e.t0?10:3===e.t0?12:4===e.t0?14:5===e.t0?16:18;break;case 6:return r.paymentStatusString=t.$t("order.statusPendding"),e.abrupt("break",18);case 8:return r.paymentStatusString=t.$t("order.statusSuccess"),e.abrupt("break",18);case 10:return r.paymentStatusString=t.$t("order.statusFail"),e.abrupt("break",18);case 12:return r.paymentStatusString=t.$t("order.statusDelay"),e.abrupt("break",18);case 14:return r.paymentStatusString=t.$t("order.statusDelivered"),e.abrupt("break",18);case 16:return r.paymentStatusString=t.$t("order.statusCancelled"),e.abrupt("break",18);case 18:r.crTime=Object(l["m"])(r.crTime),r.payTime=Object(l["m"])(r.payTime),r.spCart&&r.spCart.length>0&&r.spCart.forEach((function(t){t.mainImgpath=l["f"]+t.mainImgpath,t.productPrice=Object(l["n"])(t.productPrice,Object(l["q"])(r.correncyCode))})),r.orderDisInfos&&r.orderDisInfos.length>0&&(r.orderDisInfos.unshift({disCost:r.totalCost,policyId:"-1",disTitle:t.$t("common.cartTotal")}),r.orderDisInfos.push({disCost:r.realCost,policyId:"0",disTitle:t.$t("common.grandTotal")}),r.orderDisInfos.forEach((function(e){e.disCost=String(e.disCost),e.disCost.startsWith("-")?(e.disCost="-"+Object(l["n"])(e.disCost.substring(1),t.$store.state.currentCurrency),e.isDiscount=!0):(e.disCost=Object(l["n"])(e.disCost,t.$store.state.currentCurrency),e.isDiscount=!1)}))),t.orderDetail=r;case 23:case"end":return e.stop()}}),e)})))()},toPaymentAgain:function(){this.$router.replace({path:"/payment",query:{orderId:this.orderId}})},toOrderList:function(){this.$router.replace({path:"/order"})},toComment:function(){var t=this;1===this.orderDetail.paymentStatus?n["a"].confirm({title:this.$t("order.commentConfirmReceiveTitle"),message:this.$t("order.commentConfirmReceiveDesc")}).then((function(){t.requestConfirmReceive((function(){t.$router.replace({path:"/comment",query:{type:"1",id:t.orderId}})}))})).catch((function(){})):4===this.orderDetail.paymentStatus&&this.$router.replace({path:"/comment",query:{type:"1",id:this.orderId}})},toProductDetail:function(t){this.$router.push("/detail/"+Object(l["l"])(t.productId)+"/"+Object(l["l"])(t.productColorId))},toViewLogistics:function(){window.location.href=this.orderDetail.trackUrl},toAdditionalCommnet:function(){this.$router.replace({path:"/comment",query:{type:"2",id:this.orderId}})},buyAgain:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.orderDetail.spCart,r.forEach((function(t){t.productImage=t.mainImgpath})),e.next=4,Object(d["a"])({inputParams:JSON.stringify(r)}).then((function(e){a["a"].success(t.$t("common.addSuccess")),t.$router.push({path:"/bag"})})).catch((function(e){a["a"].fail(t.$t("common.addFail"))}));case 4:case"end":return e.stop()}}),e)})))()},handleCancelOrder:function(){var t=this;n["a"].confirm({title:this.$t("order.cancelOrder"),message:this.$t("order.cancelOrderHint")}).then((function(){t.requestCancelOrder(t.orderId)})).catch((function(){}))},requestCancelOrder:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["a"])({orderId:t,userId:e.$store.state.user?e.$store.state.user.userId:"",type:0}).then((function(t){e.getOrderDetail()}));case 2:case"end":return r.stop()}}),r)})))()},handleDeleteOrder:function(){var t=this;n["a"].confirm({title:this.$t("order.deleteOrder"),message:this.$t("order.deleteOrderHint")}).then((function(){t.requestDeleteOrder(t.orderId)})).catch((function(){}))},requestDeleteOrder:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["a"])({orderId:t,userId:e.$store.state.user?e.$store.state.user.userId:"",type:1}).then((function(t){e.toOrderList()}));case 2:case"end":return r.stop()}}),r)})))()},showConfirmAddressPop:function(){this.showConfirmInfo=!0},toConfirmAddress:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["b"])({orderId:t.orderId,status:"1"}).then((function(){a["a"].success(t.$t("payment.confirmSuccess")),t.showConfirmInfo=!1,t.getOrderDetail()}));case 2:case"end":return e.stop()}}),e)})))()},confirmReceive:function(){var t=this;n["a"].confirm({title:this.$t("order.confirmReceive"),message:this.$t("order.confirmReceiveDesc")}).then((function(){t.requestConfirmReceive()})).catch((function(){}))},requestConfirmReceive:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["c"])({orderId:e.orderId,userId:e.$store.state.user?e.$store.state.user.userId:""}).then((function(){e.getOrderDetail(),t&&t()}));case 2:case"end":return r.stop()}}),r)})))()},editShippingAddress:function(){this.$router.push({path:"/address/edit",query:{data:this.orderDetail.shippingAddr,type:1,orderId:this.orderId}})},editBillingAddress:function(){this.$router.push({path:"/address/edit",query:{data:this.orderDetail.billAddr,type:1,title:this.$t("address.billingAddress"),orderId:this.orderId}})}}},p=u,m=(r("b125"),r("2877")),v=Object(m["a"])(p,s,i,!1,null,"49748446",null);e["default"]=v.exports},b125:function(t,e,r){"use strict";r("212f")}}]);