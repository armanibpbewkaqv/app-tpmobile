(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CommentDetail~CommentList~Detail"],{"063c":function(t,e,i){"use strict";i.d(e,"c",(function(){return r})),i.d(e,"g",(function(){return c})),i.d(e,"a",(function(){return m})),i.d(e,"f",(function(){return l})),i.d(e,"d",(function(){return h})),i.d(e,"b",(function(){return u})),i.d(e,"i",(function(){return d})),i.d(e,"h",(function(){return v})),i.d(e,"e",(function(){return f}));var n=i("b775"),o=i("bc3a"),s=i.n(o),a=i("fa7d"),r=function(t){return Object(n["a"])({url:"/getcommentsbyprd",data:t})},c=function(t){var e={headers:{"Content-Type":"multipart/form-data"}};return s.a.post(a["a"]+"/uploadcommentimg",t,e)},m=function(t){return Object(n["a"])({url:"/delcommentimg",data:t})},l=function(t){return Object(n["a"])({url:"/submitcomment",data:t})},h=function(t){return Object(n["a"])({url:"/listordercartbycmtstatus",data:t})},u=function(t){return Object(n["a"])({url:"/getcommentdetail",data:t})},d=function(t){return Object(n["a"])({url:"/userprise",data:t})},v=function(t){return Object(n["a"])({url:"/userleavemsg",data:t})},f=function(t){return Object(n["a"])({url:"/leavemsgofcmt",data:t})}},"257f":function(t,e,i){t.exports=i.p+"img/user-male.png"},"28a2":function(t,e,i){"use strict";var n=i("c31d"),o=i("a026"),s=i("d282"),a=Object(s["a"])("image-preview"),r=a[0],c=a[1],m=i("6605"),l=i("3875"),h=i("5fbe"),u=i("ad06"),d=i("5596"),v=i("482d"),f=i("1325"),g=i("44bf"),p=i("543e"),b=i("2bb1");function w(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var C,y={mixins:[l["a"]],props:{src:String,show:Boolean,active:Number,minZoom:[Number,String],maxZoom:[Number,String],rootWidth:Number,rootHeight:Number},data:function(){return{scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}},computed:{vertical:function(){var t=this.rootWidth,e=this.rootHeight,i=e/t;return this.imageRatio>i},imageStyle:function(){var t=this.scale,e={transitionDuration:this.zooming||this.moving?"0s":".3s"};if(1!==t){var i=this.moveX/t,n=this.moveY/t;e.transform="scale("+t+", "+t+") translate("+i+"px, "+n+"px)"}return e},maxMoveX:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight/this.imageRatio:this.rootWidth;return Math.max(0,(this.scale*t-this.rootWidth)/2)}return 0},maxMoveY:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight:this.rootWidth*this.imageRatio;return Math.max(0,(this.scale*t-this.rootHeight)/2)}return 0}},watch:{active:"resetScale",show:function(t){t||this.resetScale()}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{resetScale:function(){this.setScale(1),this.moveX=0,this.moveY=0},setScale:function(t){t=Object(v["c"])(t,+this.minZoom,+this.maxZoom),t!==this.scale&&(this.scale=t,this.$emit("scale",{scale:this.scale,index:this.active}))},toggleScale:function(){var t=this.scale>1?1:2;this.setScale(t),this.moveX=0,this.moveY=0},onTouchStart:function(t){var e=t.touches,i=this.offsetX,n=void 0===i?0:i;this.touchStart(t),this.touchStartTime=new Date,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.moving=1===e.length&&1!==this.scale,this.zooming=2===e.length&&!n,this.zooming&&(this.startScale=this.scale,this.startDistance=w(t.touches))},onTouchMove:function(t){var e=t.touches;if(this.touchMove(t),(this.moving||this.zooming)&&Object(f["c"])(t,!0),this.moving){var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=Object(v["c"])(i,-this.maxMoveX,this.maxMoveX),this.moveY=Object(v["c"])(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var o=w(e),s=this.startScale*o/this.startDistance;this.setScale(s)}},onTouchEnd:function(t){var e=!1;(this.moving||this.zooming)&&(e=!0,this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.zooming&&(this.moveX=Object(v["c"])(this.moveX,-this.maxMoveX,this.maxMoveX),this.moveY=Object(v["c"])(this.moveY,-this.maxMoveY,this.maxMoveY),this.zooming=!1),this.moving=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale())),Object(f["c"])(t,e),this.checkTap(),this.resetTouchStatus()},checkTap:function(){var t=this,e=this.offsetX,i=void 0===e?0:e,n=this.offsetY,o=void 0===n?0:n,s=new Date-this.touchStartTime,a=250,r=10;i<r&&o<r&&s<a&&(this.doubleTapTimer?(clearTimeout(this.doubleTapTimer),this.doubleTapTimer=null,this.toggleScale()):this.doubleTapTimer=setTimeout((function(){t.$emit("close"),t.doubleTapTimer=null}),a))},onLoad:function(t){var e=t.target,i=e.naturalWidth,n=e.naturalHeight;this.imageRatio=n/i}},render:function(){var t=arguments[0],e={loading:function(){return t(p["a"],{attrs:{type:"spinner"}})}};return t(b["a"],{class:c("swipe-item")},[t(g["a"],{attrs:{src:this.src,fit:"contain"},class:c("image",{vertical:this.vertical}),style:this.imageStyle,scopedSlots:e,on:{load:this.onLoad}})])}},x=r({mixins:[l["a"],Object(m["a"])({skipToggleEvent:!0}),Object(h["a"])((function(t){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0)}))],props:{className:null,closeable:Boolean,asyncClose:Boolean,overlayStyle:Object,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},minZoom:{type:[Number,String],default:1/3},maxZoom:{type:[Number,String],default:3},transition:{type:String,default:"van-fade"},showIndex:{type:Boolean,default:!0},swipeDuration:{type:[Number,String],default:300},startPosition:{type:[Number,String],default:0},overlayClass:{type:String,default:c("overlay")},closeIcon:{type:String,default:"clear"},closeOnPopstate:{type:Boolean,default:!0},closeIconPosition:{type:String,default:"top-right"}},data:function(){return{active:0,rootWidth:0,rootHeight:0,doubleClickTimer:null}},mounted:function(){this.resize()},watch:{startPosition:"setActive",value:function(t){var e=this;t?(this.setActive(+this.startPosition),this.$nextTick((function(){e.resize(),e.$refs.swipe.swipeTo(+e.startPosition,{immediate:!0})}))):this.$emit("close",{index:this.active,url:this.images[this.active]})}},methods:{resize:function(){if(this.$el&&this.$el.getBoundingClientRect){var t=this.$el.getBoundingClientRect();this.rootWidth=t.width,this.rootHeight=t.height}},emitClose:function(){this.asyncClose||this.$emit("input",!1)},emitScale:function(t){this.$emit("scale",t)},setActive:function(t){t!==this.active&&(this.active=t,this.$emit("change",t))},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:c("index")},[this.slots("index",{index:this.active})||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,e=this.slots("cover");if(e)return t("div",{class:c("cover")},[e])},genImages:function(){var t=this,e=this.$createElement;return e(d["a"],{ref:"swipe",attrs:{lazyRender:!0,loop:this.loop,duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators,indicatorColor:"white"},class:c("swipe"),on:{change:this.setActive}},[this.images.map((function(i){return e(y,{attrs:{src:i,show:t.value,active:t.active,maxZoom:t.maxZoom,minZoom:t.minZoom,rootWidth:t.rootWidth,rootHeight:t.rootHeight},on:{scale:t.emitScale,close:t.emitClose}})}))])},genClose:function(){var t=this.$createElement;if(this.closeable)return t(u["a"],{attrs:{role:"button",name:this.closeIcon},class:c("close-icon",this.closeIconPosition),on:{click:this.emitClose}})},onClosed:function(){this.$emit("closed")},swipeTo:function(t,e){this.$refs.swipe&&this.$refs.swipe.swipeTo(t,e)}},render:function(){var t=arguments[0];return t("transition",{attrs:{name:this.transition},on:{afterLeave:this.onClosed}},[this.shouldRender?t("div",{directives:[{name:"show",value:this.value}],class:[c(),this.className]},[this.genClose(),this.genImages(),this.genIndex(),this.genCover()]):null])}}),S=i("a142"),D={loop:!0,value:!0,images:[],maxZoom:3,minZoom:1/3,onClose:null,onChange:null,className:"",showIndex:!0,closeable:!1,closeIcon:"clear",asyncClose:!1,transition:"van-fade",getContainer:"body",overlayStyle:null,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"},$=function(){C=new(o["a"].extend(x))({el:document.createElement("div")}),document.body.appendChild(C.$el),C.$on("change",(function(t){C.onChange&&C.onChange(t)})),C.$on("scale",(function(t){C.onScale&&C.onScale(t)}))},z=function(t,e){if(void 0===e&&(e=0),!S["g"]){C||$();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(n["a"])(C,D,i),C.$once("input",(function(t){C.value=t})),C.$once("closed",(function(){C.images=[]})),i.onClose&&(C.$off("close"),C.$once("close",i.onClose)),C}};z.Component=x,z.install=function(){o["a"].use(x)};e["a"]=z},4662:function(t,e,i){"use strict";i("68ef"),i("a71a"),i("9d70"),i("3743"),i("09fe"),i("4d75"),i("e3b3"),i("8270"),i("786d"),i("504b")},"4ec97":function(t,e,i){"use strict";i("5542")},"504b":function(t,e,i){},5542:function(t,e,i){},"58b3":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comment-item-wrap",on:{click:t.toCommentDetail}},[i("div",{staticClass:"commen-user-info"},[i("van-image",{staticClass:"user-image",attrs:{round:"",fit:"cover",src:t.femaleHeader}}),i("div",{staticClass:"comment-rate-wrap"},[i("div",{staticClass:"user-wrap"},[i("span",{staticClass:"user-name"},[t._v(t._s(t.commentDetail.submiter))]),i("div",{staticClass:"comment-date"},[t._v(" "+t._s(t.commentDetail.crtime)+" ")])]),i("van-rate",{attrs:{color:"#ffd21e",size:13,readonly:"","allow-half":""},model:{value:t.commentDetail.tEval,callback:function(e){t.$set(t.commentDetail,"tEval",e)},expression:"commentDetail.tEval"}})],1)],1),i("div",{staticClass:"comment-content"},[t._v(" "+t._s(t.commentDetail.content)+" ")]),t.commentDetail.shareimgs&&t.commentDetail.shareimgs.length>0?i("van-grid",{staticClass:"comment-images",attrs:{border:!1,"column-num":3,gutter:"5px"}},t._l(t.commentDetail.shareimgs,(function(e,n){return i("van-grid-item",{key:n,on:{click:function(e){return t.imagePre(e,t.commentDetail.shareimgs,n,2)}}},[i("van-image",{attrs:{src:e,fit:"cover"}})],1)})),1):t._e(),t.commentDetail.videourl?i("div",[i("iframe",{attrs:{src:t.commentDetail.videourl,frameborder:"0",allowfullscreen:"true",width:"100%",height:"100%"}})]):t._e(),t.commentDetail.zps&&t.commentDetail.zps.length>0?i("div",{staticClass:"zp-wrap"},t._l(t.commentDetail.zps,(function(e){return i("div",{key:e.zjcmId},[i("div",{staticClass:"time"},[t._v(t._s(e.crtime))]),i("div",{staticClass:"content"},[t._v(t._s(e.content))])])})),0):t._e(),i("div",{staticClass:"comment-icon-wrap"},[i("div",{staticClass:"comment-icon-item"},[i("span",[t._v(t._s(t.commentDetail.leaveMsgsCount?t.commentDetail.leaveMsgsCount:0))]),i("i",{staticClass:"iconfont icon-liuyan"})]),i("div",{staticClass:"comment-icon-item",on:{click:function(e){return t.zanComment(e)}}},[i("span",[t._v(t._s(t.commentDetail.priseCount?t.commentDetail.priseCount:0))]),i("i",{staticClass:"iconfont",class:t.isZan?"icon-dianzan2 red":"icon-dianzan1"})])])],1)},o=[],s=i("1da1"),a=i("ade3"),r=(i("4662"),i("28a2")),c=(i("96cf"),i("b0c0"),i("159b"),i("fa7d")),m=i("063c"),l={components:Object(a["a"])({},r["a"].Component.name,r["a"].Component),name:"ReviewItem",props:{comment:{type:Object,required:!0}},data:function(){return{femaleHeader:i("7869"),maleHeader:i("257f")}},computed:{commentDetail:function(){var t=this.comment;t.crtime=Object(c["m"])(t.crtime);for(var e=0;e<t.shareimgs.length;e++)t.shareimgs[e]=c["b"]+t.shareimgs[e];if(t.zps)for(var i=0;i<t.zps.length;i++)t.zps[i].crtime=Object(c["m"])(t.zps[i].crtime);return t},isZan:function(){return 1===this.commentDetail.myprise}},methods:{imagePre:function(t,e,i,n){t.stopPropagation();var o=[];1===n?e.forEach((function(t){o.push(t.big_img)})):e.forEach((function(t){o.push(t)})),Object(r["a"])({images:o,startPosition:i,closeable:!0})},zanComment:function(t){t.stopPropagation(),this.$store.state.user?this.requestPrise():this.$store.commit("showLoginPanel")},requestPrise:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["i"])({cmId:t.commentDetail.cmId,userId:t.$store.state.user.userId,type:t.isZan?0:1}).then((function(e){t.$emit("transferRefresh")}));case 2:case"end":return e.stop()}}),e)})))()},toCommentDetail:function(){this.$router.push({path:"/comment/detail",query:{cmId:this.comment.cmId}})}}},h=l,u=(i("4ec97"),i("2877")),d=Object(u["a"])(h,n,o,!1,null,"705d366d",null);e["a"]=d.exports},7869:function(t,e,i){t.exports=i.p+"img/user-female.png"}}]);