(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Lottery"],{"0730":function(t,e){t.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkIxQ0YzRjUxRThDMTFFQjk0MUJBRjg1MkE4ODM4NjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkIxQ0YzRjYxRThDMTFFQjk0MUJBRjg1MkE4ODM4NjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQjFDRjNGMzFFOEMxMUVCOTQxQkFGODUyQTg4Mzg2MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQjFDRjNGNDFFOEMxMUVCOTQxQkFGODUyQTg4Mzg2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIAKgAAwMBEQACEQEDEQH/xABdAAEBAQAAAAAAAAAAAAAAAAAABAcBAQEBAQAAAAAAAAAAAAAAAAADBgcQAQAABwAAAAAAAAAAAAAAAADRApIDBFQVEQEAAgIDAAAAAAAAAAAAAAAAAZECUgMTFP/aAAwDAQACEQMRAD8A0PoZ+zdrmi5h6OTbK5b/AKcNYpOioAAAAAAAAAAAAAAAAAAA/9k="},2450:function(t,e,i){t.exports=i.p+"img/wheelbox_btn.png"},"6c5e":function(t,e,i){},"6fbb":function(t,e,i){t.exports=i.p+"img/wheelbox_bg.png"},"70ab":function(t,e,i){"use strict";i("d824")},ba29:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lottery-container"},[i("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:t.$t("lottery.title"),fixed:""}},[i("div",{attrs:{slot:"left"},slot:"left"},[i("i",{staticClass:"iconfont icon-fanhui",on:{click:function(e){return t.$router.go(-1)}}})])]),i("div",{staticClass:"lottery-wrap"},[t.prizeData?i("div",{staticClass:"wheel-box-wrap"},[i("WheelBox",{ref:"wheelBox",attrs:{prizeData:t.prizeData},on:{result:t.showPrizeDialog}})],1):t._e(),i("div",{staticClass:"btn-wrap"},[i("van-button",{attrs:{type:"primary",size:"normal",block:"",color:"#f13333"},on:{click:t.startLottery}},[t._v(t._s(t.$t("lottery.lotteryBtn")))])],1),i("div",{staticClass:"rule-wrap"},[i("div",{staticClass:"rule-inner-wrap"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("lottery.rulesTitle")))]),t._m(0)])])]),i("van-popup",{attrs:{closeable:"","close-icon-position":"top-right"},model:{value:t.showPrizePop,callback:function(e){t.showPrizePop=e},expression:"showPrizePop"}},[t.prize?i("div",{staticClass:"prize-pop-wrap"},[1===t.prize.type?i("div",{staticClass:"prize-point-wrap"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("lottery.getPointTitle")))]),i("div",{staticClass:"point-value-wrap"},[i("span",{staticClass:"point-value"},[t._v("+"+t._s(t.$t("lottery.pointNumber",[t.prize.value])))])]),i("div",{staticClass:"btn-wrap"},[i("van-button",{attrs:{round:"",block:"",size:"small",color:"#fa6338",to:"/point"}},[t._v(t._s(t.$t("lottery.pointBtn")))])],1)]):t._e(),2===t.prize.type?i("div",{staticClass:"prize-coupon-wrap"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("lottery.getCouponTitle")))]),i("div",{staticClass:"coupon-value-wrap"},[i("div",{staticClass:"code-info"},[i("div",{staticClass:"title"},[t._v(t._s(t.prize.coupon.title))]),i("div",[t._v(t._s(t.$t("coupon.orderAmountHint",[t.prize.coupon.orderamount])))]),i("div",[t._v(t._s(t.$t("coupon.code"))+": "+t._s(t.prize.coupon.code))])]),i("div",{staticClass:"dash-line"}),i("ul",[t.prize.coupon.validtime&&t.prize.coupon.validtime.length>0?i("li",{staticClass:"hint"},[t._v(t._s(t.prize.coupon.validtime[0])+" ~ "+t._s(t.prize.coupon.validtime[1]))]):t._e(),i("li",{staticClass:"hint"},[t._v(t._s(t.$t("coupon.allProduct")))])])]),i("div",{staticClass:"btn-wrap"},[i("van-button",{attrs:{round:"",block:"",size:"small",color:"#fa6338",to:"/coupons"}},[t._v(t._s(t.$t("lottery.couponBtn")))])],1)]):t._e()]):t._e()])],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"rule"},[i("li",[t._v("1. 抽奖将花费40积分")]),i("li",[t._v("2. 活动时间****************")]),i("li",[t._v("3. 活动时间****************")]),i("li",[t._v("4. 活动时间****************")]),i("li",[t._v("5. 活动时间****************")])])}],r=i("1da1"),o=(i("96cf"),i("159b"),i("c24f")),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{backgroundImage:"url("+(t.data.style?t.data.style["backgroundImage"]:"")+")"},attrs:{id:"wheelBox"}},[i("ul",{attrs:{id:"wheelList"}},t._l(t.prizeData,(function(e,a){return i("li",{key:a,style:{webkitTransform:"rotate("+-e.angle+"deg)"}},[0==e.type?i("i",{staticClass:"iconfont icon-kuliankulian prizeimg"}):t._e(),1==e.type?i("i",{staticClass:"iconfont icon-jifen prizeimg"}):t._e(),2==e.type?i("i",{staticClass:"iconfont icon-youhuiquan prizeimg"}):t._e(),i("div",{staticClass:"text"},[t._v(t._s(e.prizeName))]),i("div",{staticClass:"line",style:{webkitTransform:"rotateZ("+t.lineRotateZ+"deg)"}},[i("img",{attrs:{src:t.data.style?t.data.style["lineImage"]:""}})])])})),0),i("img",{staticClass:"turnBtn",attrs:{src:t.data.style?t.data.style["buttonImage"]:""},on:{click:t.startPlay}})])},c=[],l=(i("e7e5"),i("d399")),u={name:"WheelBox",props:{data:{type:Object,default:function(){return{style:{backgroundImage:i("6fbb"),lineImage:i("0730"),buttonImage:i("2450")}}}},prizeData:{type:Array,default:function(){return[]}}},data:function(){return{lineRotateZ:0,pIndex:0,rotNum:0,time:5e3,timer:null,oTurntable:"",type:0,prize:null}},created:function(){this.prizeData=this.autoRotate(this.prizeData)},mounted:function(){this.oTurntable=document.querySelector("#wheelList"),this.oTurntable.style.webkitTransition="transform "+this.time/1e3+"s ease"},watch:{prizeData:function(){this.prizeData=this.autoRotate(this.prizeData)}},methods:{autoRotate:function(t){if(t.length){var e=t.length,i=360/e,a=i/2;this.lineRotateZ=a,t.forEach((function(t,e){t.angle=360-(a+e*i)}))}return t},startPlay:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getPrize();case 1:case"end":return e.stop()}}),e)})))()},startBtn:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a=e,a.prizeData.forEach((function(e,i){e.index===t.index&&(a.pIndex=i)})),a.startrotate(a.prizeData[a.pIndex].angle,(function(){a.fulfillHandle(t)}));case 3:case"end":return i.stop()}}),i)})))()},startrotate:function(t,e){var i=this,a=2160*(this.rotNum+1)+t;this.oTurntable.style.webkitTransform="rotate("+a+"deg)",clearTimeout(this.timer),this.timer=setTimeout((function(){e(),i.rotNum++}),this.time)},fulfillHandle:function(t){0===t.type?Object(l["a"])("很遗憾，与大奖擦肩而过"):this.$emit("result",t)},getPrize:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["d"])({userId:t.$store.state.user.userId,currency:t.$store.state.currentCurrency.currencyCode}).then((function(e){t.prize=e,t.startBtn(t.prize)})).catch((function(e){"EC1025"===e.data.code?t.$store.commit("showLoginPanel"):"EC1026"===e.data.code&&l["a"].fail(e.data.msg)}));case 2:case"end":return e.stop()}}),e)})))()}}},A=u,p=(i("70ab"),i("2877")),d=Object(p["a"])(A,s,c,!1,null,"cf022218",null),f=d.exports,v={components:{WheelBox:f},data:function(){return{prizeData:[],showPrizePop:!1,prize:null}},created:function(){},mounted:function(){this.getLotteryData()},methods:{startLottery:function(){this.$refs.wheelBox.startPlay()},getLotteryData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["i"])();case 2:i=e.sent,i.forEach((function(e){0===e.type?e.prizeName=t.$t("lottery.NotWinning"):1===e.type?e.prizeName=t.$t("lottery.pointNumber",[e.value]):2===e.type&&(e.prizeName=t.$t("lottery.CouponTitle"))})),t.prizeData=i;case 5:case"end":return e.stop()}}),e)})))()},showPrizeDialog:function(t){this.prize=t,this.showPrizePop=!0}}},m=v,h=(i("e359"),Object(p["a"])(m,a,n,!1,null,"c54f8dce",null));e["default"]=h.exports},d824:function(t,e,i){},e359:function(t,e,i){"use strict";i("6c5e")}}]);