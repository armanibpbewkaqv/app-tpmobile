(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Address"],{"0195":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"address-container"},[e("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:t.$t("address.billingAddress"),fixed:""}},[e("div",{attrs:{slot:"left"},slot:"left"},[e("i",{staticClass:"iconfont icon-fanhui",on:{click:function(s){return t.$router.go(-1)}}})])]),e("div",{staticClass:"main-content"},[0==t.addressList.length?e("div",{staticClass:"empty-wrap"},[e("van-empty",{attrs:{description:t.$t("common.emptyData"),image:t.emptyImage}})],1):t._e(),t.addressList.length>0?e("div",t._l(t.addressList,(function(s,a){return e("div",{key:s.addrId,staticClass:"address-item-wrap"},[e("div",{staticClass:"address-top-wrap"},[e("div",{staticClass:"address-info-wrap",on:{click:function(s){return t.toEditAddress(a)}}},[e("div",{staticClass:"name-phone"},[e("span",{staticClass:"name"},[t._v(t._s(s.recFirstname))]),e("span",{staticClass:"name"},[t._v(t._s(s.recLastname))]),e("span",{staticClass:"phone"},[t._v(t._s(s.telephone))])]),e("div",{staticClass:"street-wrap"},[t._v(t._s(s.streetAddr)+" "+t._s(s.extendAddr))]),e("div",{staticClass:"country-wrap"},[t._v(t._s(s.city)+" "+t._s(s.province)+" "+t._s(s.fullCountry)+" "+t._s(s.postCode))])]),e("i",{staticClass:"iconfont icon-xiangyou1"})])])})),0):t._e()])],1)},r=[],n=e("1da1"),i=(e("96cf"),e("c24f")),d={name:"Address",data:function(){return{addressList:[],emptyImage:e("31eb")}},created:function(){this.getAddressList()},methods:{getAddressList:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(i["f"])({userId:t.$store.state.user.userId,addrType:"1"});case 2:e=s.sent,t.addressList=e;case 4:case"end":return s.stop()}}),s)})))()},toEditAddress:function(t){this.$router.push({path:"/address/edit",query:{data:this.addressList[t],type:1,title:this.$t("address.billingAddress")}})},requestEditAddress:function(t){var s=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["e"])({inputParams:JSON.stringify(t)}).then((function(){s.getAddressList()}));case 2:case"end":return e.stop()}}),e)})))()}}},c=d,o=(e("6ebb"),e("2877")),u=Object(o["a"])(c,a,r,!1,null,"2d10fc08",null);s["default"]=u.exports},"31eb":function(t,s,e){t.exports=e.p+"img/custom-empty-image.png"},"33d0":function(t,s,e){},"6ebb":function(t,s,e){"use strict";e("33d0")},7416:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"address-container"},[e("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:t.$t("address.title"),fixed:""}},[e("div",{attrs:{slot:"left"},slot:"left"},[e("i",{staticClass:"iconfont icon-fanhui",on:{click:function(s){return t.$router.go(-1)}}})])]),e("div",{staticClass:"main-content"},[0==t.addressList.length?e("div",{staticClass:"empty-wrap"},[e("van-empty",{attrs:{description:t.$t("common.emptyData"),image:t.emptyImage}})],1):t._e(),0==t.type&&t.addressList.length>0?e("div",t._l(t.addressList,(function(s,a){return e("div",{key:s.addrId,staticClass:"address-item-wrap"},[e("div",{staticClass:"address-top-wrap"},[e("div",{staticClass:"address-info-wrap",on:{click:function(s){return t.toEditAddress(a)}}},[e("div",{staticClass:"name-phone"},[e("span",{staticClass:"name"},[t._v(t._s(s.recFirstname))]),e("span",{staticClass:"name"},[t._v(t._s(s.recLastname))]),e("span",{staticClass:"phone"},[t._v(t._s(s.telephone))])]),e("div",{staticClass:"street-wrap"},[t._v(t._s(s.streetAddr)+" "+t._s(s.extendAddr))]),e("div",{staticClass:"country-wrap"},[t._v(t._s(s.city)+" "+t._s(s.province)+" "+t._s(s.fullCountry)+" "+t._s(s.postCode))])]),e("i",{staticClass:"iconfont icon-xiangyou1"})]),e("div",{staticClass:"address-bottom-wrap"},[e("van-radio-group",{model:{value:s.isDefault,callback:function(e){t.$set(s,"isDefault",e)},expression:"item.isDefault"}},[e("van-radio",{attrs:{name:"1","checked-color":"#111","icon-size":"15px"},on:{click:function(s){return t.setDefaultAddress(a)}}},[t._v(t._s(t.$t("address.default")))])],1),e("i",{staticClass:"iconfont icon-shanchu",on:{click:function(s){return t.confirmDeleteAddress(a)}}})],1)])})),0):t._e(),1==t.type&&t.addressList.length>0?e("div",t._l(t.addressList,(function(s,a){return e("div",{key:s.addrId,staticClass:"address-item-wrap"},[e("div",{staticClass:"address-top-wrap"},[e("div",{staticClass:"address-info-wrap",on:{click:function(s){return t.selectedAddress(a)}}},[e("div",{staticClass:"name-phone"},[e("span",{staticClass:"name"},[t._v(t._s(s.recFirstname))]),e("span",{staticClass:"name"},[t._v(t._s(s.recLastname))]),e("span",{staticClass:"phone"},[t._v(t._s(s.telephone))])]),e("div",{staticClass:"street-wrap"},[t._v(t._s(s.streetAddr)+" "+t._s(s.extendAddr))]),e("div",{staticClass:"country-wrap"},[t._v(t._s(s.city)+" "+t._s(s.province)+" "+t._s(s.fullCountry)+" "+t._s(s.postCode))])]),e("i",{class:s.addrId==t.addrId?"iconfont icon-radio1":"iconfont icon-radio"})]),e("div",{staticClass:"address-bottom-wrap",staticStyle:{"justify-content":"flex-end"}},[e("i",{staticClass:"iconfont icon-ziyuan",on:{click:function(s){return t.toEditAddress(a)}}})])])})),0):t._e()]),e("div",{staticClass:"bottom-wrap"},[e("van-button",{staticClass:"place-order-btn",attrs:{"native-type":"submit",size:"large"},on:{click:t.toAddAddress}},[t._v(t._s(t.$t("address.addAddressBtn")))])],1)],1)},r=[],n=(e("e17f"),e("2241")),i=e("1da1"),d=(e("96cf"),e("159b"),e("d3b7"),e("25f0"),e("c24f")),c={name:"Address",data:function(){return{type:0,addrId:null,addressList:[],emptyImage:e("31eb")}},created:function(){this.addrId=this.$route.query.addrId?this.$route.query.addrId:null,this.addrId&&(this.type=1)},mounted:function(){this.getAddressList()},methods:{getAddressList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(d["f"])({userId:t.$store.state.user.userId,addrType:"0"});case 2:e=s.sent,t.addressList=e,t.addressList.forEach((function(t){t.isDefault=t.isDefault.toString()}));case 5:case"end":return s.stop()}}),s)})))()},selectedAddress:function(t){this.$store.commit("setSelectedAddress",this.addressList[t]),this.$router.go(-1)},toEditAddress:function(t){this.$router.push({path:"/address/edit",query:{data:this.addressList[t],type:1}})},toAddAddress:function(){this.$router.push({path:"/address/edit",query:{type:0}})},confirmDeleteAddress:function(t){var s=this;n["a"].confirm({title:this.$t("address.deleteAddressTitle"),message:this.$t("address.deleteAddressContent")}).then((function(){s.deleteAddress(t)})).catch((function(){}))},deleteAddress:function(t){var s=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["c"])({addrId:s.addressList[t].addrId,userId:s.$store.state.user.userId}).then((function(){s.getAddressList()}));case 2:case"end":return e.stop()}}),e)})))()},setDefaultAddress:function(t){var s=this.addressList[t];s.isDefault="1",this.requestEditAddress(s)},requestEditAddress:function(t){var s=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["e"])({inputParams:JSON.stringify(t)}).then((function(){s.getAddressList()}));case 2:case"end":return e.stop()}}),e)})))()}}},o=c,u=(e("a3de"),e("2877")),l=Object(u["a"])(o,a,r,!1,null,"2a930722",null);s["default"]=l.exports},a3de:function(t,s,e){"use strict";e("c1dc")},c1dc:function(t,s,e){}}]);