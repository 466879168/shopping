(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-181dd946"],{a2c7:function(t,s,a){"use strict";var e=a("fbd5"),r=a.n(e);r.a},c2fb:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"order"},[a("div",{staticClass:"header"},[a("span",{staticClass:"iconfont icon-jiantou",on:{click:t.toCart}}),a("h3",[t._v("填写订单页面")])]),a("div",{staticClass:"main"},[a("div",{staticClass:"goods"},t._l(t.cartGoods,(function(s){return a("div",{key:s.id,staticClass:"goods-item"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:s.imgUrl,alt:""}})]),a("div",{staticClass:"right"},[a("p",[t._v(t._s(s.count))])])])})),0),a("div",{staticClass:"all"},[a("div",{staticClass:"fl left"},[t._v("\n        合计：\n      ")]),a("div",{staticClass:"right fr"},[t._v("\n        ￥"+t._s(t.pay)+"\n      ")])]),a("div",{staticClass:"address"},[a("span",[t._v("地址：")]),a("el-select",{attrs:{placeholder:t.addressPlaceHolder},model:{value:t.selectAddress,callback:function(s){t.selectAddress=s},expression:"selectAddress"}},t._l(t.address,(function(t,s){return a("el-option",{key:s,attrs:{label:t.name+t.phone+t.city+t.detailAdd,value:s}})})),1)],1)]),a("div",{staticClass:"footer"},[a("div",{staticClass:"price fl"},[a("span",[t._v("付款：")]),a("span",{staticClass:"price-number"},[t._v("￥"+t._s(t.pay))])]),a("div",{staticClass:"right fr"},[a("el-button",{attrs:{type:"danger",plain:""},on:{click:t.topay}},[t._v("去支付")])],1)])])},r=[],i={name:"Order",data:function(){return{selectAddress:0,addressPlaceHolder:"请选择地址"}},mounted:function(){},computed:{cartGoods:function(){return this.$route.query.cartGoods},pay:function(){return this.$route.query.pay},address:function(){return this.$store.state.address}},methods:{toCart:function(){this.$router.go(-1)},topay:function(){this.$store.state.cartGoods=[],this.$store.state.cartNum=0,this.$router.push("/cart"),alert("支付成功")}}},n=i,c=(a("a2c7"),a("2877")),o=Object(c["a"])(n,e,r,!1,null,"456507f8",null);s["default"]=o.exports},fbd5:function(t,s,a){}}]);
//# sourceMappingURL=chunk-181dd946.e6320834.js.map