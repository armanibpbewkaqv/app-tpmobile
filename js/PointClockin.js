(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PointClockin"],{4469:function(t,s,i){},"6f73":function(t,s,i){"use strict";i("4469")},c6a5:function(t,s,i){t.exports=i.p+"img/clockin_bg.png"},f06a9:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"clockin-container"},[i("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:t.$t("point.clockin"),fixed:""}},[i("div",{attrs:{slot:"left"},slot:"left"},[i("i",{staticClass:"iconfont icon-fanhui",on:{click:function(s){return t.$router.go(-1)}}})]),i("div",{attrs:{slot:"right"},on:{click:t.toRulePage},slot:"right"},[i("i",{staticClass:"iconfont icon-wenhao"})])]),i("div",{staticClass:"clockin-wrap"},[i("div",{staticClass:"points-total-wrap"},[i("img",{staticClass:"bg-image",attrs:{src:t.bgImage,alt:""}}),i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"number-wrap"},[t._v(t._s(t.totalPoints))]),i("div",{staticClass:"help-text"},[t._v(t._s(t.$t("point.clockinHint")))]),i("div",{staticClass:"btn-wrap"},[i("van-button",{attrs:{block:"",round:"",size:"small"},on:{click:t.clockin}},[t._v(" "+t._s(t.hasClockin?t.$t("point.clockined"):t.$t("point.clockin"))+" ")])],1)])]),t.signContent?i("div",{staticClass:"clockin-detail-wrap"},[i("div",{staticClass:"clockin-detail-info"},[i("div",{staticClass:"day-item-wrap"},t._l(t.signContent,(function(s,a){return i("div",{key:a,staticClass:"day-item"},[i("div",{staticClass:"day",class:{orange:1==s.signed}},[1==s.type?i("div",[t._v("+"+t._s(s.value))]):t._e(),2==s.type?i("div",[i("i",{staticClass:"iconfont icon-youhuiquan"})]):t._e()]),i("div",{staticClass:"date"},[t._v(t._s(0==s.isToday?s.time:"Today"))])])})),0)])]):t._e(),i("div",{staticClass:"task-list-wrap"},[t._m(0),i("div",{staticClass:"task-list"},[i("div",{staticClass:"task-item"},[t._m(1),i("div",{staticClass:"btn-wrap"},[i("van-button",{attrs:{round:"",size:"mini"}},[t._v("去下单")])],1)]),i("div",{staticClass:"task-item"},[t._m(2),i("div",{staticClass:"btn-wrap"},[i("van-button",{attrs:{round:"",size:"mini"}},[t._v("去评价")])],1)]),i("div",{staticClass:"task-item"},[t._m(3),i("div",{staticClass:"btn-wrap"},[i("van-button",{attrs:{round:"",size:"mini"}},[t._v("去分享")])],1)]),i("div",{staticClass:"task-item"},[t._m(4),i("div",{staticClass:"btn-wrap"},[i("van-button",{attrs:{round:"",size:"mini"}},[t._v("去点赞")])],1)]),i("div",{staticClass:"task-item"},[t._m(5),i("div",{staticClass:"btn-wrap"},[i("van-button",{attrs:{round:"",size:"mini"}},[t._v("去参加")])],1)])])]),i("van-dialog",{staticClass:"clockin-success-dialog",model:{value:t.showSuccessDialog,callback:function(s){t.showSuccessDialog=s},expression:"showSuccessDialog"}},[i("div",{staticClass:"point-value"},[t._v("+"+t._s(t.todayPoint))]),i("div",{staticClass:"hint"},[t._v(t._s(t.$t("point.clockinSuceess")))])])],1)],1)},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"title-wrap"},[i("div",{staticClass:"title"},[t._v("做任务赚积分")]),i("div",{staticClass:"more"},[i("span",[t._v("更多")]),i("i",{staticClass:"iconfont icon-xiangyou1"})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"task-info"},[i("div",{staticClass:"title"},[t._v("购买商品并成功支付")]),i("div",{staticClass:"desc"},[t._v("每消费1美元获得1积分")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"task-info"},[i("div",{staticClass:"title"},[t._v("评论购买的商品")]),i("div",{staticClass:"desc"},[t._v("+(5-10)积分")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"task-info"},[i("div",{staticClass:"title"},[t._v("分享评论")]),i("div",{staticClass:"desc"},[t._v("+15积分")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"task-info"},[i("div",{staticClass:"title"},[t._v("点赞并留言评论")]),i("div",{staticClass:"desc"},[t._v("+2积分")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"task-info"},[i("div",{staticClass:"title"},[t._v("游戏挣积分")]),i("div",{staticClass:"desc"},[t._v("+2积分")])])}],e=i("1da1"),c=(i("159b"),i("96cf"),i("c24f")),o={data:function(){return{totalPoints:null,hasClockin:!1,signContent:null,showSuccessDialog:!1,todayPoint:0,bgImage:i("c6a5")}},mounted:function(){this.requestSignList()},methods:{clockin:function(){this.hasClockin||this.requestSign()},requestSign:function(){var t=this;return Object(e["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(c["u"])({userId:t.$store.state.user?t.$store.state.user.userId:""}).then((function(s){t.requestSignList(),t.showSuccessDialog=!0}));case 2:case"end":return s.stop()}}),s)})))()},requestSignList:function(){var t=this;return Object(e["a"])(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(c["j"])({userId:t.$store.state.user?t.$store.state.user.userId:""});case 2:i=s.sent,t.signContent=i.signLogs,t.totalPoints=i.totalPoints,t.signContent.forEach((function(s){1===s.isToday&&(t.hasClockin=1===s.signed,t.todayPoint=s.value)}));case 6:case"end":return s.stop()}}),s)})))()},toRulePage:function(){this.$router.push({path:"/point/clockin/rules"})}}},l=o,r=(i("6f73"),i("2877")),u=Object(r["a"])(l,a,n,!1,null,"194f352c",null);s["default"]=u.exports}}]);