(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-460bbd5c"],{"88c6":function(t,e,n){},dc3f:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-page"},[n("span",{staticClass:"iconfont icon-jiantou",on:{click:t.back}}),n("h3",[t._v("登录")])]),n("div",{staticClass:"login-body"},[n("el-form",[n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入帐号"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("el-form-item",[n("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:t.login}},[t._v("登录")]),n("el-button",[t._v("注册")])],1)],1)],1)])},o=[],a={name:"login",data:function(){return{username:"王小明",password:"123456"}},methods:{login:function(){this.$store.commit("login",this.username),this.$router.go(-1)},back:function(){this.$router.go(-1)}}},i=a,c=(n("f828"),n("2877")),l=Object(c["a"])(i,s,o,!1,null,"7b14a39c",null);e["default"]=l.exports},f828:function(t,e,n){"use strict";var s=n("88c6"),o=n.n(s);o.a}}]);
//# sourceMappingURL=chunk-460bbd5c.4cb2b13e.js.map