(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Payment"],{"16c5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"payment-container"},[r("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:t.$t("payment.title"),fixed:""}},[r("div",{attrs:{slot:"left"},slot:"left"},[r("i",{staticClass:"iconfont icon-fanhui",on:{click:t.toOrderList}})])]),r("div",{staticClass:"main-content"},[r("van-form",{staticClass:"form-wrap",on:{submit:t.onSubmit}},[r("div",{staticClass:"form-content-wrap"},[r("img",{staticClass:"card-image",attrs:{src:a("aec3"),alt:""}}),r("div",{staticClass:"title-label"},[r("span",{staticClass:"red"},[t._v("*")]),t._v(" "+t._s(t.$t("payment.cardNumber")))]),r("van-field",{attrs:{maxlength:"16",type:"number",name:t.$t("payment.cardNumber"),placeholder:t.$t("payment.cardNumber"),rules:[{required:!0,message:t.$t("payment.cardNumberHint")}]},model:{value:t.cardNumber,callback:function(e){t.cardNumber=e},expression:"cardNumber"}}),r("div",{staticClass:"title-label"},[r("span",{staticClass:"red"},[t._v("*")]),t._v(" "+t._s(t.$t("payment.expirationDate")))]),r("div",{staticClass:"date-wrap"},[r("van-field",{staticClass:"month-field",attrs:{readonly:"",clickable:"",name:"picker",value:t.monthValue,placeholder:t.$t("payment.month"),rules:[{required:!0,message:t.$t("payment.monthHint")}]},on:{click:function(e){t.showMonthPicker=!0}}}),r("van-field",{staticClass:"year-field",attrs:{readonly:"",clickable:"",name:"picker",value:t.yearValue,placeholder:t.$t("payment.year"),rules:[{required:!0,message:t.$t("payment.yearHint")}]},on:{click:function(e){t.showYearPicker=!0}}})],1),r("div",{staticClass:"title-label"},[r("span",{staticClass:"red"},[t._v("*")]),t._v(" "+t._s(t.$t("payment.cvvTitle")))]),r("div",{staticClass:"cvv-wrap"},[r("van-field",{attrs:{maxlength:"3",type:"number",name:t.$t("payment.cvv"),placeholder:t.$t("payment.cvv"),rules:[{required:!0,message:t.$t("payment.cvvHint")}]},model:{value:t.cardCVV,callback:function(e){t.cardCVV=e},expression:"cardCVV"}}),r("i",{staticClass:"iconfont icon-wenhao",on:{click:t.showCvvHelpDialog}})],1),r("div",{staticClass:"bill-addr-wrap"},[r("div",{staticClass:"title-wrap"},[r("div",{staticClass:"title"},[t._v(t._s(t.$t("address.billingAddress")))]),r("i",{staticClass:"iconfont icon-ziyuan",on:{click:t.editBillingAddress}})]),t.orderDetail.billAddr?r("div",{staticClass:"address-info-wrap"},[r("div",{staticClass:"name-phone"},[t._v(" "+t._s(t.orderDetail.billAddr.recFirstname)+" "+t._s(t.orderDetail.billAddr.recLastname)+" "+t._s(t.orderDetail.billAddr.telephone)+" ")]),r("div",{staticClass:"street-wrap"},[t._v(t._s(t.orderDetail.billAddr.streetAddr)+" "+t._s(t.orderDetail.billAddr.extendAddr))]),r("div",{staticClass:"country-wrap"},[t._v(t._s(t.orderDetail.billAddr.city)+" "+t._s(t.orderDetail.billAddr.province)+" "+t._s(t.orderDetail.billAddr.fullCountry)+" "+t._s(t.orderDetail.billAddr.postCode))])]):t._e()]),t.orderDetail.orderDisInfos&&t.orderDetail.orderDisInfos.length>0?r("div",{staticClass:"price-info-wrap"},t._l(t.orderDetail.orderDisInfos,(function(e,a){return r("div",{key:a,staticClass:"price-item"},[r("div",{staticClass:"label"},[t._v(t._s(e.disTitle))]),r("div",{class:e.isDiscount?"value green":"value"},[t._v(t._s(e.disCost))])])})),0):t._e()],1),r("div",{staticClass:"payment-btn-wrap"},[r("van-button",{staticClass:"payment-btn",attrs:{size:"large","native-type":"submit"}},[t._v(" "+t._s(t.$t("payment.paymentBtn"))+" "),this.orderDetail.orderDisInfos&&this.orderDetail.orderDisInfos.length>0?r("span",[t._v(" ("+t._s(this.orderDetail.orderDisInfos[this.orderDetail.orderDisInfos.length-1].disCost)+") ")]):t._e()])],1)])],1),r("van-popup",{attrs:{position:"bottom"},model:{value:t.showMonthPicker,callback:function(e){t.showMonthPicker=e},expression:"showMonthPicker"}},[r("van-picker",{attrs:{title:t.$t("payment.month"),"show-toolbar":"",columns:t.monthData},on:{confirm:t.onConfirmMonth,cancel:function(e){t.showMonthPicker=!1}}})],1),r("van-popup",{attrs:{position:"bottom"},model:{value:t.showYearPicker,callback:function(e){t.showYearPicker=e},expression:"showYearPicker"}},[r("van-picker",{attrs:{title:t.$t("payment.year"),"show-toolbar":"",columns:t.yearData},on:{confirm:t.onConfirmYear,cancel:function(e){t.showYearPicker=!1}}})],1),r("van-dialog",{attrs:{title:t.$t("payment.cvv")},model:{value:t.cvvHelpDialogShow,callback:function(e){t.cvvHelpDialogShow=e},expression:"cvvHelpDialogShow"}},[r("p",[t._v(t._s(t.$t("payment.paymentCvvMsg1")))]),r("p",[t._v(t._s(t.$t("payment.paymentCvvMsg2")))]),r("p",[t._v(t._s(t.$t("payment.paymentCvvMsg3")))]),r("img",{attrs:{src:t.visaImage}}),r("p",[t._v(t._s(t.$t("payment.paymentCvvMsg4")))]),r("p",[t._v(t._s(t.$t("payment.paymentCvvMsg5")))]),r("p",[t._v(t._s(t.$t("payment.paymentCvvMsg6")))]),r("img",{attrs:{src:t.amexImage}})])],1)},i=[],s=(a("e7e5"),a("d399")),n=a("1da1"),o=(a("96cf"),a("159b"),a("2ca0"),a("a434"),a("ac1f"),a("5319"),a("f8b7")),c=a("fa7d"),l=a("5d2d"),d={data:function(){return{orderId:null,orderDetail:{},showMonthPicker:!1,showYearPicker:!1,cardNumber:"",monthData:[],yearData:[],monthValue:"",yearValue:"",cardCVV:"",paymentChannel:"",cvvHelpDialogShow:!1,amexImage:a("c652"),visaImage:a("4e9c")}},created:function(){this.orderId=this.$route.query.orderId,this.handleDate(),this.initPaymentMethod()},mounted:function(){this.getOrderDetail()},methods:{getOrderDetail:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["e"])({orderId:t.orderId});case 2:a=e.sent,a.orderDisInfos&&a.orderDisInfos.length>0&&(r=Object(c["q"])(a.correncyCode),a.orderDisInfos.unshift({disCost:a.totalCost,policyId:"-1",disTitle:t.$t("common.cartTotal")}),a.orderDisInfos.push({disCost:a.realCost,policyId:"0",disTitle:t.$t("common.grandTotal")}),a.orderDisInfos.forEach((function(t){t.disCost=String(t.disCost),t.disCost.startsWith("-")?(t.disCost="-"+Object(c["n"])(t.disCost.substring(1),r),t.isDiscount=!0):(t.disCost=Object(c["n"])(t.disCost,r),t.isDiscount=!1)}))),t.orderDetail=a;case 5:case"end":return e.stop()}}),e)})))()},handleDate:function(){this.monthData.splice(0,this.monthData.length);for(var t=1;t<=12;t++)t<10?this.monthData.push("0"+t):this.monthData.push(String(t));this.yearData.splice(0,this.yearData.length);for(var e=(new Date).getFullYear(),a=e;a<=e+20;a++)this.yearData.push(String(a))},onConfirmMonth:function(t,e){this.monthValue=t,this.showMonthPicker=!1},onConfirmYear:function(t,e){this.yearValue=t,this.showYearPicker=!1},onSubmit:function(){var t={cardNo:this.cardNumber,expireY:this.yearValue,expireM:this.monthValue,secCode:this.cardCVV},e={os:Object(c["s"])(),browerlang:Object(c["p"])(),brower:Object(c["o"])(),timezone:Object(c["w"])(),screen:Object(c["u"])(),ismobile:"1"},a={userId:this.$store.state.user.userId,currencyId:this.$store.state.currentCurrency.currencyCode,orderId:this.orderId,billAddrId:this.orderDetail.billAddrId,channelId:this.paymentChannel.channelId,card:t,adsType:"",adsAccount:Object(l["v"])(l["b"]),clientInfo:e,newUrl:"1",isApp:"1"};this.requesrPayment(a)},initPaymentMethod:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["g"])({type:1,orderId:t.orderId});case 2:a=e.sent,t.paymentChannel=a.channels[0];case 4:case"end":return e.stop()}}),e)})))()},requesrPayment:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(o["i"])({inputParams:JSON.stringify(t)}).then((function(){e.$router.push({path:"/payment/result",query:{code:0,odi:e.orderId}})})).catch((function(t){"EC1004"===t.data.code||"EC1005"===t.data.code||"EC1006"===t.data.code?e.$router.push({path:"/payment/result",query:{code:1,failCode:t.data.code,failMsg:t.data.msg,odi:e.orderId}}):"EC1007"===t.data.code?window.location.href=t.data.data:s["a"].fail(t.data.msg)}));case 2:case"end":return a.stop()}}),a)})))()},editBillingAddress:function(){this.$router.push({path:"/address/edit",query:{data:this.orderDetail.billAddr,type:1,title:this.$t("address.billingAddress"),orderId:this.orderId}})},toOrderList:function(){this.$router.replace({path:"/order"})},showCvvHelpDialog:function(){this.cvvHelpDialogShow=!0},cvvFormatter:function(t){return t.replace(/\d/g,"")}}},u=d,p=(a("ddcc"),a("2877")),m=Object(p["a"])(u,r,i,!1,null,"f7c2a346",null);e["default"]=m.exports},"4e9c":function(t,e,a){t.exports=a.p+"img/cvv2visa.gif"},a434:function(t,e,a){"use strict";var r=a("23e7"),i=a("23cb"),s=a("a691"),n=a("50c4"),o=a("7b0b"),c=a("65f0"),l=a("8418"),d=a("1dde"),u=d("splice"),p=Math.max,m=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var a,r,d,u,f,y,b=o(this),C=n(b.length),g=i(t,C),D=arguments.length;if(0===D?a=r=0:1===D?(a=0,r=C-g):(a=D-2,r=m(p(s(e),0),C-g)),C+a-r>h)throw TypeError(v);for(d=c(b,r),u=0;u<r;u++)f=g+u,f in b&&l(d,u,b[f]);if(d.length=r,a<r){for(u=g;u<C-r;u++)f=u+r,y=u+a,f in b?b[y]=b[f]:delete b[y];for(u=C;u>C-r+a;u--)delete b[u-1]}else if(a>r)for(u=C-r;u>g;u--)f=u+r-1,y=u+a-1,f in b?b[y]=b[f]:delete b[y];for(u=0;u<a;u++)b[u+g]=arguments[u+2];return b.length=C-r+a,d}})},aec3:function(t,e,a){t.exports=a.p+"img/vmj.jpg"},c652:function(t,e,a){t.exports=a.p+"img/cvv2amex.gif"},caa7:function(t,e,a){},ddcc:function(t,e,a){"use strict";a("caa7")}}]);