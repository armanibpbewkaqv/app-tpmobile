(window.webpackJsonp=window.webpackJsonp||[]).push([["Order"],{"2fd4":function(t,e,r){"use strict";r.r(e),r("e7e5");var a=r("d399"),n=(r("e17f"),r("2241")),i=r("1da1"),o=(r("96cf"),r("a9e3"),r("159b"),r("ac1f"),r("5319"),r("2166")),s=r("f8b7"),c=r("fa7d"),u={data:function(){return{tabsData:[{title:this.$t("common.all"),type:0,data:[]},{title:this.$t("order.statusPendding"),type:2,data:[]},{title:this.$t("order.successTab"),type:1,data:[]},{title:this.$t("order.statusDelivered"),type:3,data:[]},{title:this.$t("order.statusCancelled"),type:4,data:[]}],activeTab:0,emptyImage:r("31eb")}},mounted:function(){var t=this.$route.query.index?Number(this.$route.query.index):0;this.activeTab=this.tabsData[t].type,this.getOrderList(this.activeTab)},methods:{onTabClick:function(t,e){this.getOrderList(t)},getOrderList:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(s.f)({userId:e.$store.state.user.userId,type:t});case 2:(a=r.sent)&&a.length>0?(a.forEach((function(t){var r=Object(c.q)(t.correncyCode);switch(t.paymentStatus){case 0:t.paymentStatusString=e.$t("order.statusPendding");break;case 1:t.paymentStatusString=e.$t("order.statusSuccess");break;case 2:t.paymentStatusString=e.$t("order.statusFail");break;case 3:t.paymentStatusString=e.$t("order.statusDelay");break;case 4:t.paymentStatusString=e.$t("order.statusDelivered");break;case 5:t.paymentStatusString=e.$t("order.statusCancelled")}var a=0;t.spCart.forEach((function(t){a+=t.productNum,t.mainImgpath=c.f+t.mainImgpath,t.productPrice=Object(c.n)(t.productPrice,r)})),t.productNum=a,t.totalCost=Object(c.n)(t.totalCost,r),t.realCost=Object(c.n)(t.realCost,r)})),e.tabsData.forEach((function(e){e.type===t&&(e.data=a)}))):e.tabsData.forEach((function(e){e.type===t&&(e.data=a)}));case 4:case"end":return r.stop()}}),r)})))()},toMe:function(){this.$router.push({path:"/me"})},toOrderDetail:function(t){this.$router.push({path:"/order/detail",query:{orderId:t}})},toPaymentAgain:function(t,e){t.stopPropagation(),this.$router.replace({path:"/payment",query:{orderId:e}})},handleCancelOrder:function(t,e){var r=this;t.stopPropagation(),n.a.confirm({title:this.$t("order.cancelOrder"),message:this.$t("order.cancelOrderHint")}).then((function(){r.requestCancelOrder(e)})).catch((function(){}))},requestCancelOrder:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(s.a)({orderId:t,userId:e.$store.state.user?e.$store.state.user.userId:"",type:0}).then((function(t){e.getOrderList(e.activeTab)}));case 2:case"end":return r.stop()}}),r)})))()},handleDeleteOrder:function(t,e){var r=this;t.stopPropagation(),n.a.confirm({title:this.$t("order.deleteOrder"),message:this.$t("order.deleteOrderHint")}).then((function(){r.requestDeleteOrder(e)})).catch((function(){}))},requestDeleteOrder:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(s.a)({orderId:t,userId:e.$store.state.user?e.$store.state.user.userId:"",type:1}).then((function(t){e.getOrderList(e.activeTab)}));case 2:case"end":return r.stop()}}),r)})))()},toComment:function(t,e){var r=this;t.stopPropagation(),1===e.paymentStatus?n.a.confirm({title:this.$t("order.commentConfirmReceiveTitle"),message:this.$t("order.commentConfirmReceiveDesc")}).then((function(){r.requestConfirmReceive(e.orderId,(function(){r.$router.replace({path:"/comment",query:{type:"1",id:e.orderId}})}))})).catch((function(){})):4===e.paymentStatus&&this.$router.replace({path:"/comment",query:{type:"1",id:e.orderId}})},toAdditionalCommnet:function(t,e){t.stopPropagation(),this.$router.replace({path:"/comment",query:{type:"2",id:e}})},toViewLogistics:function(t,e){t.stopPropagation(),window.location.href=e},buyAgain:function(t,e){var r=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.stopPropagation(),(i=e.spCart).forEach((function(t){t.productImage=t.mainImgpath})),n.next=5,Object(o.a)({inputParams:JSON.stringify(i)}).then((function(t){a.a.success(r.$t("common.addSuccess")),r.$router.push({path:"/bag"})})).catch((function(t){a.a.fail(r.$t("common.addFail"))}));case 5:case"end":return n.stop()}}),n)})))()},confirmReceive:function(t,e){var r=this;t.stopPropagation(),n.a.confirm({title:this.$t("order.confirmReceive"),message:this.$t("order.confirmReceiveDesc")}).then((function(){r.requestConfirmReceive(e)})).catch((function(){}))},requestConfirmReceive:function(t,e){var r=this;return Object(i.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(s.c)({orderId:t,userId:r.$store.state.user?r.$store.state.user.userId:""}).then((function(){r.getOrderList(r.activeTab),e&&e()}));case 2:case"end":return a.stop()}}),a)})))()}}},d=(r("af04"),r("2877")),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-container"},[r("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:t.$t("order.title"),fixed:""}},[r("div",{attrs:{slot:"left"},slot:"left"},[r("i",{staticClass:"iconfont icon-fanhui",on:{click:t.toMe}})])]),r("div",{staticClass:"main-content"},[r("van-tabs",{attrs:{sticky:"","offset-top":"2.75rem",ellipsis:!1},on:{click:t.onTabClick},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tabsData,(function(e){return r("van-tab",{key:e.type,attrs:{title:e.title,name:e.type}},[e.data&&e.data.length>0?r("div",{staticClass:"order-list-wrap"},t._l(e.data,(function(e,a){return r("div",{key:a,staticClass:"order-item-wrap",on:{click:function(r){return t.toOrderDetail(e.orderId)}}},[r("div",{staticClass:"order-header"},[r("div",{staticClass:"order-number"},[r("span",[t._v(t._s(e.orderId))]),r("i",{staticClass:"iconfont icon-xiangyou1"})]),r("div",{staticClass:"order-status van-ellipsis"},[t._v(t._s(e.paymentStatusString))])]),e.spCart&&1==e.spCart.length?r("div",[t._l(e.spCart,(function(a,n){return r("div",{key:a.productColorId+n,staticClass:"product-single-item-wrap"},[r("van-image",{staticClass:"product-image",attrs:{src:a.mainImgpath,alt:"product.productName"},scopedSlots:t._u([{key:"loading",fn:function(){return[r("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)}),r("div",{staticClass:"product-info-wrap"},[r("div",[r("div",{staticClass:"product-name"},[t._v(" "+t._s(a.productName)+" ")]),a.colorDes?r("div",{staticClass:"product-desc"},[t._v(t._s(t.$t("detail.colorTitle"))+": "+t._s(a.colorDes))]):t._e(),a.attrDes?r("div",{staticClass:"product-desc"},[t._v(t._s(a.attrDes))]):t._e()]),r("div",{staticClass:"product-price-wrap"},[r("div",{staticClass:"product-price"},[t._v(" "+t._s(a.productPrice)+" ")])])]),r("div",{staticClass:"price-number-wrap"},[r("div",{staticClass:"total-wrap"},[t._v(" "+t._s(e.realCost)+" ")]),r("div",{staticClass:"product-number"},[t._v(" "+t._s(t.$t("detail.selectedAttrString",[e.productNum]))+" ")])])],1)})),r("div",{staticClass:"btn-wrap"},[0==e.paymentStatus||2==e.paymentStatus?r("van-button",{on:{click:function(r){return t.toPaymentAgain(r,e.orderId)}}},[t._v(t._s(t.$t("order.continuPayment")))]):t._e(),0==e.paymentStatus||2==e.paymentStatus?r("van-button",{on:{click:function(r){return t.handleCancelOrder(r,e.orderId)}}},[t._v(t._s(t.$t("order.cancelOrder")))]):t._e(),1==e.paymentStatus?r("van-button",{on:{click:function(r){return t.toViewLogistics(r,e.trackUrl)}}},[t._v(t._s(t.$t("order.viewLogistics")))]):t._e(),1==e.paymentStatus?r("van-button",{on:{click:function(r){return t.confirmReceive(r,e.orderId)}}},[t._v(t._s(t.$t("order.confirmReceive")))]):t._e(),1!=e.paymentStatus&&4!=e.paymentStatus||"1"!=e.cmtTpe?t._e():r("van-button",{on:{click:function(r){return t.toComment(r,e)}}},[t._v(t._s(t.$t("order.toCommnet")))]),1!=e.paymentStatus&&4!=e.paymentStatus||"2"!=e.cmtTpe?t._e():r("van-button",{on:{click:function(r){return t.toAdditionalCommnet(r,e)}}},[t._v(t._s(t.$t("order.additionalCommnet")))]),"1"==e.goOnShopping?r("van-button",{on:{click:function(r){return t.buyAgain(r,e)}}},[t._v(t._s(t.$t("order.buyAgain")))]):t._e(),5==e.paymentStatus?r("van-button",{on:{click:function(r){return t.handleDeleteOrder(r,e.orderId)}}},[t._v(t._s(t.$t("order.deleteOrder")))]):t._e()],1)],2):t._e(),e.spCart&&e.spCart.length>1?r("div",[r("div",{staticClass:"product-item-wrap"},[r("div",{staticClass:"product-images-wrap"},t._l(e.spCart,(function(e,a){return r("van-image",{key:e.productColorId+a,staticClass:"product-image",attrs:{src:e.mainImgpath,alt:"product.productName"},scopedSlots:t._u([{key:"loading",fn:function(){return[r("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)})})),1),r("div",{staticClass:"price-number-wrap"},[r("div",{staticClass:"total-wrap"},[t._v(" "+t._s(e.realCost)+" ")]),r("div",{staticClass:"product-number"},[t._v(" "+t._s(t.$t("detail.selectedAttrString",[e.productNum]))+" ")])])]),r("div",{staticClass:"btn-wrap"},[0==e.paymentStatus||2==e.paymentStatus?r("van-button",{on:{click:function(r){return t.toPaymentAgain(r,e.orderId)}}},[t._v(t._s(t.$t("order.continuPayment")))]):t._e(),0==e.paymentStatus||2==e.paymentStatus?r("van-button",{on:{click:function(r){return t.handleCancelOrder(r,e.orderId)}}},[t._v(t._s(t.$t("order.cancelOrder")))]):t._e(),1==e.paymentStatus?r("van-button",{on:{click:function(r){return t.toViewLogistics(r,e.trackUrl)}}},[t._v(t._s(t.$t("order.viewLogistics")))]):t._e(),1==e.paymentStatus?r("van-button",{on:{click:function(r){return t.confirmReceive(r,e.orderId)}}},[t._v(t._s(t.$t("order.confirmReceive")))]):t._e(),1!=e.paymentStatus&&4!=e.paymentStatus||"1"!=e.cmtTpe?t._e():r("van-button",{on:{click:function(r){return t.toComment(r,e)}}},[t._v(t._s(t.$t("order.toCommnet")))]),1!=e.paymentStatus&&4!=e.paymentStatus||"2"!=e.cmtTpe?t._e():r("van-button",{on:{click:function(r){return t.toAdditionalCommnet(r,e)}}},[t._v(t._s(t.$t("order.additionalCommnet")))]),"1"==e.goOnShopping?r("van-button",{on:{click:function(r){return t.buyAgain(r,e)}}},[t._v(t._s(t.$t("order.buyAgain")))]):t._e(),5==e.paymentStatus?r("van-button",{on:{click:function(r){return t.handleDeleteOrder(r,e.orderId)}}},[t._v(t._s(t.$t("order.deleteOrder")))]):t._e()],1)]):t._e()])})),0):t._e(),e.data&&0!=e.data.length?t._e():r("div",{staticClass:"empty-view-wrap"},[r("van-empty",{attrs:{description:t.$t("common.emptyData"),image:t.emptyImage}})],1)])})),1)],1)],1)}),[],!1,null,"edef1e90",null);e.default=p.exports},"2fea":function(t,e,r){},"31eb":function(t,e,r){t.exports=r.p+"img/custom-empty-image.png"},af04:function(t,e,r){"use strict";r("2fea")}}]);