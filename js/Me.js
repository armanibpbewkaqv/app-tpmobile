(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Me"],{"0bd4":function(t,e,i){"use strict";i("2269")},"181f":function(t,e,i){"use strict";i("60d2")},2269:function(t,e,i){},"257f":function(t,e,i){t.exports=i.p+"img/user-male.png"},"60d2":function(t,e,i){},7869:function(t,e,i){t.exports=i.p+"img/user-female.png"},"83ec":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"info-container"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("info.title")))]),i("van-cell",{attrs:{title:t.$t("info.aboutUsTitle"),"is-link":""},on:{click:t.toAboutUs}}),i("van-cell",{attrs:{title:t.$t("info.confitionsTitle"),"is-link":""},on:{click:t.toConfitions}}),i("van-cell",{attrs:{title:t.$t("info.faqTitle"),"is-link":""},on:{click:t.toFAQ}}),i("van-cell",{attrs:{title:t.$t("info.privacyNoticeTitle"),"is-link":""},on:{click:t.toPrivacyNotice}}),i("van-cell",{attrs:{title:t.$t("info.RefundPolicyTitle"),"is-link":""},on:{click:t.toRefundPolicy}}),i("van-cell",{attrs:{title:t.$t("info.ShippingPolicyTitle"),"is-link":""},on:{click:t.toShippingPolicy}}),i("van-cell",{attrs:{title:t.$t("info.cookiePolicyTitle"),"is-link":""},on:{click:t.toCooliePolicy}}),i("van-cell",{attrs:{title:t.$t("info.TeamServiceTitle"),"is-link":""},on:{click:t.toTeamService}}),i("van-cell",{attrs:{title:t.$t("info.contactUsTitle"),"is-link":""},on:{click:t.toContactUs}})],1)},n=[],o=i("5d2d"),r={name:"InfoPanel",props:{},data:function(){return{currentLanguage:null}},created:function(){this.currentLanguage=Object(o["u"])(o["h"])},methods:{toAboutUs:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/aboutus"})},toConfitions:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/confitions"})},toFAQ:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/faq"})},toPrivacyNotice:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/privacynotice"})},toRefundPolicy:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/refundpolicy"})},toShippingPolicy:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/shippingpolicy"})},toTeamService:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/teamservice"})},toContactUs:function(){this.$router.push({path:"/message/advisory"})},toCooliePolicy:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/cookiepolicy"})}}},a=r,c=(i("0bd4"),i("2877")),u=Object(c["a"])(a,s,n,!1,null,"46114916",null);e["a"]=u.exports},ff23:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"me-container"},[this.$store.state.user&&0!==this.$store.state.user.ev?t._e():i("van-notice-bar",{attrs:{"left-icon":"volume-o",mode:"link",text:t.$t("me.emailVerifyHint",[this.$store.state.pointConf.verifyEmail.points])},on:{click:t.toEmailVerify}}),i("div",{staticClass:"user-top-wrap"},[i("div",{staticClass:"user-info-wrap",on:{click:t.userNameClick}},[i("van-image",{staticClass:"user-image",attrs:{round:"",fit:"cover",src:t.userImage}}),i("div",{staticClass:"login-label"},[t._v(t._s(null!=t.userName?t.userName:t.$t("login.loginRegister")))]),i("i",{staticClass:"iconfont icon-shezhi",on:{click:t.clickSetting}})],1),i("van-grid",{staticClass:"user-fun-item",attrs:{border:!1,"column-num":3}},[i("van-grid-item",{attrs:{to:"/coupons"}},[t.isLogin?i("span",{staticClass:"number"},[t._v(t._s(t.userNumbers.coupons?t.userNumbers.coupons:"0"))]):t._e(),t.isLogin?t._e():i("i",{staticClass:"iconfont icon-youhuiquan"}),i("div",{staticClass:"label"},[t._v(t._s(t.$t("me.coupons")))])]),i("van-grid-item",{attrs:{to:"/point"}},[t.isLogin?i("span",{staticClass:"number"},[t._v(t._s(t.userNumbers.points?t.userNumbers.points:"0"))]):t._e(),t.isLogin?t._e():i("i",{staticClass:"iconfont icon-jifen"}),i("div",{staticClass:"label"},[t._v(t._s(t.$t("point.title")))])]),i("van-grid-item",{attrs:{to:"/mymessages"}},[t.isLogin?i("span",{staticClass:"number"},[t._v("0")]):t._e(),t.isLogin?t._e():i("i",{staticClass:"iconfont icon-liuyan"}),i("div",{staticClass:"label"},[t._v(t._s(t.$t("message.title")))])]),i("van-grid-item",{attrs:{to:"/wishlist"}},[i("i",{staticClass:"iconfont icon-ico_shoucangjia"}),i("div",{staticClass:"label"},[t._v(t._s(t.$t("me.wishlist")))])]),i("van-grid-item",{attrs:{to:"/browser"}},[i("i",{staticClass:"iconfont icon-zuji"}),i("div",{staticClass:"label"},[t._v(t._s(t.$t("me.footprint")))])]),i("van-grid-item",{attrs:{to:"/comment/mycomment"}},[i("i",{staticClass:"iconfont icon-pingjia"}),i("div",{staticClass:"label"},[t._v(t._s(t.$t("comment.title")))])])],1)],1),i("div",{staticClass:"order-wrap"},[i("div",{staticClass:"title-wrap"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("order.title")))]),i("div",{staticClass:"all-wrap"},[i("span",{on:{click:function(e){return t.toMyOrder(0)}}},[t._v(t._s(t.$t("common.viewAll")))]),i("i",{staticClass:"iconfont icon-xiangyou1"})])]),i("van-grid",{staticClass:"order-type-wrap",attrs:{border:!1,"column-num":4}},[i("van-grid-item",[i("i",{staticClass:"iconfont icon-weizhifu",on:{click:function(e){return t.toMyOrder(1)}}}),i("div",{staticClass:"label"},[t._v(t._s(t.$t("order.statusPendding")))])]),i("van-grid-item",[i("i",{staticClass:"iconfont icon-yizhifu",on:{click:function(e){return t.toMyOrder(2)}}}),i("div",{staticClass:"label"},[t._v(t._s(t.$t("order.successTab")))])]),i("van-grid-item",[i("i",{staticClass:"iconfont icon-yifahuo",on:{click:function(e){return t.toMyOrder(3)}}}),i("div",{staticClass:"label"},[t._v(t._s(t.$t("order.statusDelivered")))])]),i("van-grid-item",[i("i",{staticClass:"iconfont icon-yiquxiao",on:{click:function(e){return t.toMyOrder(4)}}}),i("div",{staticClass:"label"},[t._v(t._s(t.$t("order.statusCancelled")))])])],1)],1),i("div",{staticClass:"service-wrap"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("me.serviceTitle")))]),i("van-cell",{attrs:{title:t.$t("point.clockin"),"is-link":"",to:"/point/clockin"}}),i("van-cell",{attrs:{title:t.$t("me.emailVerifyTitle"),"is-link":"",value:t.emailVerifyStatus},on:{click:t.toEmailVerify}})],1),i("div",{staticClass:"info-wrap"},[i("InfoPanel")],1),i("div",{staticClass:"btn-wrap"},[t.$store.state.user?i("van-button",{staticClass:"logout-btn",attrs:{size:"large"},on:{click:t.logout}},[t._v(t._s(t.$t("me.signout")))]):t._e()],1)],1)},n=[],o=(i("e7e5"),i("d399")),r=(i("e17f"),i("2241")),a=i("1da1"),c=(i("96cf"),i("d3b7"),i("25f0"),i("c24f")),u=i("fa7d"),l=i("83ec"),f={components:{InfoPanel:l["a"]},data:function(){return{femaleHeader:i("7869"),maleHeader:i("257f"),userNumbers:{}}},computed:{isLogin:function(){return!!this.$store.state.user},userName:{get:function(){return this.$store.state.user?this.$store.state.user.email:null},set:function(){}},userImage:function(){return this.$store.state.user&&this.$store.state.user.usrico?u["g"]+this.$store.state.user.usrico:this.$store.state.user&&"0"===this.$store.state.user.sex.toString()?this.femaleHeader:this.$store.state.user&&"1"===this.$store.state.user.sex.toString()?this.maleHeader:this.femaleHeader},emailVerifyStatus:function(){return this.$store.state.user?!this.$store.state.user||this.$store.state.user.ev&&0!==this.$store.state.user.ev?this.$t("me.emailVerified"):this.$t("me.emailUnverified"):""}},watch:{isLogin:function(){this.isLogin&&this.getUserNumbers()}},mounted:function(){this.getLoginStatus()},methods:{clickSetting:function(t){t.stopPropagation(),this.$router.push({path:"/setting"})},userNameClick:function(){this.$store.state.user?this.$router.push({path:"/userinfo"}):this.showPopup()},showPopup:function(){this.$store.commit("showLoginPanel")},requestLogout:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["p"])({}).then((function(){t.$store.commit("setUser",null),t.$store.commit("setCartProductNumber",0)}));case 2:case"end":return e.stop()}}),e)})))()},toMyOrder:function(t){this.$router.push({path:"/order",query:{index:t}})},logout:function(){var t=this;this.$store.state.user?r["a"].confirm({title:this.$t("me.signout"),message:this.$t("me.signoutContent")}).then((function(){t.requestLogout()})).catch((function(){})):this.showPopup()},toEmailVerify:function(){this.$store.state.user?0===this.$store.state.user.ev?this.$router.push({path:"/me/email/verification"}):Object(o["a"])(this.$t("me.emailVerified")):this.$store.commit("showLoginPanel")},getLoginStatus:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["k"])({userId:Object(u["x"])()?JSON.parse(Object(u["x"])()).userId:null}).then((function(e){e.loginStatus?(t.$store.commit("setUser",e.userInfo),t.userName=e.userInfo.email,t.getUserNumbers()):t.$store.commit("setUser",null)}));case 2:case"end":return e.stop()}}),e)})))()},getUserNumbers:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["l"])({userId:t.$store.state.user?t.$store.state.user.userId:"",type:0}).then((function(e){if(e&&e.points){t.userNumbers=e;var i=t.$store.state.user;i.points=t.userNumbers.points,t.$store.commit("setUser",i)}}));case 2:case"end":return e.stop()}}),e)})))()}}},m=f,h=(i("181f"),i("2877")),p=Object(h["a"])(m,s,n,!1,null,"2ed68124",null);e["default"]=p.exports}}]);