(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"439d":function(t,a,e){"use strict";e("bb22")},bb22:function(t,a,e){},e009:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{on:{submit:function(a){return a.preventDefault(),t.submitForm(a)}}},[e("div",{staticClass:"row q-mb-md"},[e("q-banner",{staticClass:"bg-grey-3 col",scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},[t._v("\n\t\t  "+t._s(t._f("titleCase")(t.tab))+" \n\t\t")])],1),e("div",{staticClass:"row q-mb-md"},[e("q-input",{ref:"email",staticClass:"col",attrs:{rules:[function(a){return t.isValidEmailAddress(a)||"Please enter a valid email address."}],"lazy-rules":"",outlined:"",label:"Email","stack-label":""},model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}})],1),e("div",{staticClass:"row q-mb-md"},[e("q-input",{ref:"password",staticClass:"col",attrs:{rules:[function(t){return t.length>=6||"Please enter at least 6 characters."}],"lazy-rules":"",type:"password",outlined:"",label:"Password","stack-label":""},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}})],1),e("div",{staticClass:"row"},[e("q-space"),e("q-btn",{attrs:{color:"primary",label:t.tab,type:"submit"}})],1)])},r=[],l=(e("fb6a"),e("ded3")),i=e.n(l),n=e("2f62"),o={props:["tab"],data(){return{formData:{email:"",password:""}}},methods:i()(i()({},Object(n["b"])("auth",["registerUser","loginUser"])),{},{isValidEmailAddress(t){var a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(String(t).toLowerCase())},submitForm(){this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.email.hasError||this.$refs.password.hasError||("login"==this.tab?this.loginUser(this.formData):this.registerUser(this.formData))}}),filters:{titleCase(t){return t.charAt(0).toUpperCase()+t.slice(1)}}},c=o,u=e("2877"),b=Object(u["a"])(c,s,r,!1,null,null,null);a["default"]=b.exports},f724:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("q-card",{staticClass:"auth-tabs"},[e("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"login",label:"Login"}}),e("q-tab",{attrs:{name:"register",label:"Register"}})],1),e("q-separator"),e("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"login"}},[e("login-register",{attrs:{tab:t.tab}})],1),e("q-tab-panel",{attrs:{name:"register"}},[e("login-register",{attrs:{tab:t.tab}})],1)],1)],1)],1)},r=[],l={data(){return{tab:"login"}},components:{"login-register":e("e009").default}},i=l,n=(e("439d"),e("2877")),o=Object(n["a"])(i,s,r,!1,null,null,null);a["default"]=o.exports}}]);