(window.webpackJsonp=window.webpackJsonp||[]).push([["Home"],{"0bd4":function(t,e,n){"use strict";n("2269")},2269:function(t,e,n){},"2b43":function(t,e,n){"use strict";n("3d4f")},"3d4f":function(t,e,n){t.exports={name:'"less"',btnColor:"var(--btnColor, #111)"}},"40c2":function(t,e,n){"use strict";n.r(e);var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"li_share"},[e("img",{attrs:{src:n("7869"),alt:""}}),e("p",[this._v("Line")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"li_share"},[e("img",{attrs:{src:n("7869"),alt:""}}),e("p",[this._v("Instagram")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"li_share"},[e("img",{attrs:{src:n("7869"),alt:""}}),e("p",[this._v("Messenger")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"li_share"},[e("img",{attrs:{src:n("7869"),alt:""}}),e("p",[this._v("SMS")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"li_share"},[e("img",{attrs:{src:n("7869"),alt:""}}),e("p",[this._v("Copy Link")])])}],s={data:function(){return{share_id:"",share_url:"www.horamite.com",share_title:"horamite",share_img:""}},components:{},props:{},watch:{},methods:{closeAlert:function(){this.$emit("closeAlert",!1)},shareFacebook:function(){this.share_url,this.share_title,window.FB.ui({method:"share",href:"https://www.amemus.fun/share.html"},(function(t){t&&t.error_message}))},shareTwitter:function(){var t,e;window.twttr.ready((function(t){t.events.bind("click",(function(t){}))})),t=this.share_url,e=this.share_title,window.open("https://twitter.com/intent/tweet?url="+encodeURIComponent(t)+"&text="+encodeURIComponent(e),"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350")}},created:function(){this.share_id="1",this.share_url="www.horamite.com",this.share_title="horamite"}},a=(n("2b43"),n("2877")),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shareItem",on:{click:function(e){return e.stopPropagation(),t.closeAlert.apply(null,arguments)}}},[i("div",{staticClass:"share_box",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"ul_share"},[t._m(0),i("div",{staticClass:"li_share",on:{click:t.shareTwitter}},[i("img",{attrs:{src:n("7869"),alt:""}}),i("p",[t._v("Twitter")])]),t._m(1),t._m(2),i("div",{staticClass:"li_share",on:{click:t.shareFacebook}},[i("img",{attrs:{src:n("7869"),alt:""}}),i("p",[t._v("Facebook")])]),t._m(3),t._m(4),i("div",{staticClass:"twitter-share-button",attrs:{id:"container"}})])])])}),i,!1,null,null,null);e.default=r.exports},4654:function(t,e,n){"use strict";n("98d1")},"5c28":function(t,e,n){"use strict";n.r(e);var i=n("1da1"),s=(n("96cf"),n("159b"),n("9911"),n("a9e3"),n("b680"),n("9588")),a=n("c330"),r=n("83ec"),o=n("90d3"),c=n("ae3a"),l=n("b775"),u=n("fa7d"),h=n("5d2d"),f=n("c4c8"),d=n("c24f"),m=n("8bbf"),p=n.n(m),v={name:"Home",components:{ProductItem:s.a,HeaderNav:a.a,InfoPanel:r.a,TopDiscount:o.a,CountDownView:c.a,"custom-home":{props:{html:String},render:function(t){return t(p.a.extend({template:'<div class="custom-content">'.concat(this.html,"</div>")}),{})}}},data:function(){return{carouselList:[],tabActive:0,categoryList:[{id:0,name:this.$t("home.newTab"),data:[]},{id:1,name:this.$t("home.bestTab"),data:[]}],topAdvImage:null,bottomAdvImage:null,homeCustomHtml:null,time:108e6,flashProductInfo:null,showGiftIcon:!1,homeHtml:null}},computed:{currentCurrency:function(){return this.$store.state.currentCurrency}},watch:{currentCurrency:function(){this.getHomeProduct()}},created:function(){var t=this.$store.state.systemInfo;t&&(t.custHomePageHtml?this.homeHtml=t.custHomePageHtml:(this.carouselList=JSON.parse(JSON.stringify(t.big_advert)),this.carouselList&&this.carouselList.length>0&&this.carouselList.forEach((function(t){t.img=u.f+t.img,t.href&&(t.link=Object(u.y)(t.href))})),this.initAdvImage(t),this.getHomeProduct(),this.getFlashSaleProduct())),this.getHomeCustomHtml(),this.getLotteryData()},methods:{getHomeProduct:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i={currencyId:t.$store.state.currentCurrency.currencyCode,uvid:t.$store.state.uvid},Object(l.a)({url:"/home_page_product",data:i});case 2:n=e.sent,t.categoryList[0].data=n.new_arrivals,t.categoryList[1].data=n.best_sellers;case 5:case"end":return e.stop()}var i}),e)})))()},initAdvImage:function(t){this.topAdvImage=[],this.bottomAdvImage=[];for(var e=JSON.parse(JSON.stringify(t.smalladsimg)),n=0;n<e.length;n++){var i=e[n];i.aiName=u.f+"hd0"+(n+1)+".jpg",i.href&&(i.link=Object(u.y)(i.href)),n<2?this.topAdvImage.push(i):this.bottomAdvImage.push(i)}},getHomeCustomHtml:function(){var t=Object(h.u)(h.k);if(t){this.homeCustomHtml=t;var e=Object(h.u)(h.j);(new Date).getTime()-e>864e5&&this.requesrtCustTempl()}else this.requesrtCustTempl()},requesrtCustTempl:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i={place:1},Object(l.a)({url:"/getcusttempl",data:i});case 2:n=e.sent,t.homeCustomHtml=n,Object(h.x)(h.k,n),Object(h.x)(h.j,(new Date).getTime());case 6:case"end":return e.stop()}var i}),e)})))()},toFlashSale:function(){this.$router.push({path:"/flashsale"})},toLottery:function(){this.$router.push({path:"/lottery"})},getFlashSaleProduct:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.h)({currency:t.$store.state.currentCurrency.currencyCode});case 2:(n=e.sent)&&(n.products&&n.products.length>0&&n.products.forEach((function(e){e.display_data.forEach((function(e){e.img_display=u.f+e.img_display;var n=Number(e.original_price),i=Number(e.current_price);e.off="-"+(100-100*i/(100*n)*100).toFixed(0)+"%",e.original_price=Object(u.n)(e.original_price,t.$store.state.currentCurrency),e.current_price=Object(u.n)(e.current_price,t.$store.state.currentCurrency)}))})),t.flashProductInfo=n);case 4:case"end":return e.stop()}}),e)})))()},toProductDetail:function(t){this.$router.push("/detail/"+Object(u.l)(t.product_id)+"/"+Object(u.l)(t.display_data[0].color_id))},countDownFinish:function(){this.getFlashSaleProduct()},getLotteryData:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.i)();case 2:(n=e.sent)&&n.length>0?t.showGiftIcon=!0:t.showGiftIcon=!1;case 4:case"end":return e.stop()}}),e)})))()}}},g=(n("ae45"),n("2877")),_=Object(g.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-container"},[n("TopDiscount"),n("van-sticky",[n("HeaderNav")],1),t.homeHtml?t._e():n("div",[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,loop:""}},t._l(t.carouselList,(function(e,i){return n("van-swipe-item",{key:i,attrs:{"lazy-render":!0}},[n("router-link",{attrs:{to:e.link}},[n("van-image",{attrs:{src:e.img},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)})],1)],1)})),1),n("div",{staticClass:"conten-wrap"},[t.topAdvImage&&t.topAdvImage.length>0?n("div",{staticClass:"top-adv-image-wrap"},t._l(t.topAdvImage,(function(e,i){return n("div",{key:i,staticClass:"adv-image-item"},[e.link?n("router-link",{attrs:{to:e.link}},[n("van-image",{attrs:{src:e.aiName},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)})],1):t._e(),e.link?t._e():n("van-image",{attrs:{src:e.aiName},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)})],1)})),0):t._e(),n("van-tabs",{staticClass:"home-tab",attrs:{"title-active-color":"#222","title-inactive-color":"#767676",color:"#222",sticky:"","offset-top":"2.75rem"},model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},t._l(t.categoryList,(function(e){return n("van-tab",{key:e.id,attrs:{title:e.name}},[n("div",{staticClass:"tab-content"},[n("div",{staticClass:"product-wrap"},t._l(e.data,(function(t,e){return n("ProductItem",{key:e,attrs:{data:t}})})),1)])])})),1),t.flashProductInfo?n("div",{staticClass:"flash-sale-wrap"},[n("div",{staticClass:"title-wrap"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("flashSale.title")))]),n("div",{staticClass:"time-wrap",on:{click:t.toFlashSale}},[1==t.flashProductInfo.flashobj.status?n("span",[t._v(t._s(t.$t("flashSale.endTitle")))]):t._e(),0==t.flashProductInfo.flashobj.status?n("span",[t._v(t._s(t.$t("flashSale.startTitle")))]):t._e(),n("CountDownView",{attrs:{time:t.flashProductInfo.flashobj.gap},on:{transferFinish:t.countDownFinish}}),n("i",{staticClass:"iconfont icon-xiangyou1"})],1)]),n("div",{staticClass:"flash-product-wrap"},t._l(t.flashProductInfo.products,(function(e,i){return n("div",{key:i,staticClass:"flash-product-item",on:{click:function(n){return t.toProductDetail(e)}}},[n("van-image",{attrs:{src:e.display_data[0].img_display},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)}),n("div",{staticClass:"off-wrap"},[n("i",{staticClass:"iconfont icon-shandian"}),n("div",[t._v(t._s(e.display_data[0].off))])]),n("div",{staticClass:"current-price"},[t._v(t._s(e.display_data[0].current_price))]),n("div",{staticClass:"original-price"},[t._v(t._s(e.display_data[0].original_price))])],1)})),0)]):t._e(),t.homeCustomHtml&&t.homeCustomHtml.length>0?n("div",{staticClass:"custom-html-wrap"},t._l(t.homeCustomHtml,(function(e){return n("div",{key:e.id},[n("div",{domProps:{innerHTML:t._s(e.content)}})])})),0):t._e(),t.bottomAdvImage&&t.bottomAdvImage.length>0?n("div",{staticClass:"bottom-adv-image-wrap"},t._l(t.bottomAdvImage,(function(e,i){return n("div",{key:i,staticClass:"adv-image-item"},[e.link?n("router-link",{attrs:{to:e.link}},[n("van-image",{attrs:{src:e.aiName},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)})],1):t._e(),e.link?t._e():n("van-image",{staticClass:"adv-image-item",attrs:{src:e.aiName},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)})],1)})),0):t._e()],1)],1),t.homeHtml?n("div",{staticClass:"home-custom-container"},[n("custom-home",{attrs:{html:t.homeHtml}})],1):t._e(),n("InfoPanel"),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showGiftIcon,expression:"showGiftIcon"}],staticClass:"gift-icon",on:{click:t.toLottery}},[n("i",{staticClass:"iconfont icon-liwuhuodong"})])],1)}),[],!1,null,null,null);e.default=_.exports},7869:function(t,e,n){t.exports=n.p+"img/user-female.png"},"83ec":function(t,e,n){"use strict";var i=n("5d2d"),s={name:"InfoPanel",props:{},data:function(){return{currentLanguage:null}},created:function(){this.currentLanguage=Object(i.u)(i.h)},methods:{toAboutUs:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/aboutus"})},toConfitions:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/confitions"})},toFAQ:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/faq"})},toPrivacyNotice:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/privacynotice"})},toRefundPolicy:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/refundpolicy"})},toShippingPolicy:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/shippingpolicy"})},toTeamService:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/teamservice"})},toContactUs:function(){this.$router.push({path:"/message/advisory"})},toCooliePolicy:function(){this.$router.push({path:"/info/"+this.currentLanguage+"/cookiepolicy"})}}},a=(n("0bd4"),n("2877")),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-container"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("info.title")))]),n("van-cell",{attrs:{title:t.$t("info.aboutUsTitle"),"is-link":""},on:{click:t.toAboutUs}}),n("van-cell",{attrs:{title:t.$t("info.confitionsTitle"),"is-link":""},on:{click:t.toConfitions}}),n("van-cell",{attrs:{title:t.$t("info.faqTitle"),"is-link":""},on:{click:t.toFAQ}}),n("van-cell",{attrs:{title:t.$t("info.privacyNoticeTitle"),"is-link":""},on:{click:t.toPrivacyNotice}}),n("van-cell",{attrs:{title:t.$t("info.RefundPolicyTitle"),"is-link":""},on:{click:t.toRefundPolicy}}),n("van-cell",{attrs:{title:t.$t("info.ShippingPolicyTitle"),"is-link":""},on:{click:t.toShippingPolicy}}),n("van-cell",{attrs:{title:t.$t("info.cookiePolicyTitle"),"is-link":""},on:{click:t.toCooliePolicy}}),n("van-cell",{attrs:{title:t.$t("info.TeamServiceTitle"),"is-link":""},on:{click:t.toTeamService}}),n("van-cell",{attrs:{title:t.$t("info.contactUsTitle"),"is-link":""},on:{click:t.toContactUs}})],1)}),[],!1,null,"46114916",null);e.a=r.exports},"857a":function(t,e,n){var i=n("1d80"),s=n("577e"),a=/"/g;t.exports=function(t,e,n,r){var o=s(i(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+s(r).replace(a,"&quot;")+'"'),c+">"+o+"</"+e+">"}},9478:function(t,e,n){t.exports={name:'"less"',btnColor:"var(--btnColor, #111)"}},"98d1":function(t,e,n){},9911:function(t,e,n){"use strict";var i=n("23e7"),s=n("857a");i({target:"String",proto:!0,forced:n("af03")("link")},{link:function(t){return s(this,"a","href",t)}})},ae3a:function(t,e,n){"use strict";n("a9e3");var i={name:"CountDownView",props:{time:{type:Number}},data:function(){return{countDownTime:this.time}},created:function(){},mounted:function(){},watch:{time:function(){this.countDownTime=this.time,this.$refs.countDown.reset()}},methods:{finishEvent:function(){this.$emit("transferFinish")}}},s=(n("4654"),n("2877")),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"count-down-container"},[n("van-count-down",{ref:"countDown",attrs:{time:t.countDownTime},on:{finish:t.finishEvent},scopedSlots:t._u([{key:"default",fn:function(e){return[e.days>0?n("span",{staticClass:"block"},[t._v(t._s(1==String(e.days).length?"0"+e.days:e.days))]):t._e(),e.days>0?n("span",{staticClass:"colon"},[t._v(":")]):t._e(),n("span",{staticClass:"block"},[t._v(t._s(1==String(e.hours).length?"0"+e.hours:e.hours))]),n("span",{staticClass:"colon"},[t._v(":")]),n("span",{staticClass:"block"},[t._v(t._s(1==String(e.minutes).length?"0"+e.minutes:e.minutes))]),n("span",{staticClass:"colon"},[t._v(":")]),n("span",{staticClass:"block"},[t._v(t._s(1==String(e.seconds).length?"0"+e.seconds:e.seconds))])]}}])})],1)}),[],!1,null,"7f155a90",null);e.a=a.exports},ae45:function(t,e,n){"use strict";n("9478")},af03:function(t,e,n){var i=n("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}}}]);