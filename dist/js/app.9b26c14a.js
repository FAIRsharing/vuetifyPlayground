(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,s=1;s<o.length;s++){var l=o[s];0!==a[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},r=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c666870c"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o=a[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(u);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,o[1](c)}a[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},1535:function(t,e,o){"use strict";var n=o("c7c3"),a=o.n(n);a.a},"34c2":function(t,e,o){"use strict";var n=o("5291"),a=o.n(n);a.a},"418d":function(t,e,o){},4681:function(t,e,o){"use strict";var n=o("418d"),a=o.n(n);a.a},5291:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"app"}},[t.$vuetify.breakpoint.smAndDown?o("v-navigation-drawer",{attrs:{app:"",bottom:""},model:{value:t.showDrawerLeft,callback:function(e){t.showDrawerLeft=e},expression:"showDrawerLeft"}}):t._e(),o("transition",{attrs:{name:"fade"}},[t.showHeader?o("Header",{on:{setParentDrawerStatus:t.setDrawerStatus}}):t._e()],1),o("v-content",[o("transition",{attrs:{name:"fade"}},[t.showScrollToTopButton?o("jump-top",{attrs:{"target-object":"scroll-target"}}):t._e()],1),o("v-container",{staticClass:"overflow-y-auto overflow-x-hidden content-custom",attrs:{fluid:"",id:"scroll-target"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"d-none d-md-flex ",attrs:{cols:"12",lg:"4",md:"4"}},[o("LeftPanel",{class:t.stickToLeft?"left-panel-fixed":"left-panel-default"})],1),o("v-col",[o("ListController",{staticClass:"mt-2"}),o("RightContent",{directives:[{name:"scroll",rawName:"v-scroll:#scroll-target",value:t.onScroll,expression:"onScroll",arg:"#scroll-target"}],staticClass:"pb-5",attrs:{align:"center",justify:"center"}}),o("ListController",{staticClass:"mb-2"})],1)],1)],1)],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",[o("v-sheet",{attrs:{color:"orange lighten-2 "}},[o("h3",{staticClass:"indigo--text text--lighten-2 "},[t._v(" FILTER LIST ")]),t._l(200,(function(e){return o("div",{key:e,staticStyle:{"background-color":"gray"}},[t._v("filterItem "+t._s(e))])})),o("div",[t._v("Last")])],2)],1)},i=[],l={name:"LeftPanel"},c=l,u=(o("34c2"),o("2877")),f=o("6544"),d=o.n(f),p=o("8dd9"),m=Object(u["a"])(c,s,i,!1,null,"5649ca5c",null),h=m.exports;d()(m,{VSheet:p["a"]});var v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"d-flex  justify-center"},[o("v-btn-toggle",{attrs:{mandatory:""}},[o("v-btn",[o("v-icon",[t._v("mdi-format-align-left")])],1)],1),o("v-pagination",{attrs:{length:5},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}),o("v-btn-toggle",{attrs:{mandatory:""}},[o("v-btn",[o("v-icon",[t._v("mdi-format-align-left")])],1),o("v-btn",[o("v-icon",[t._v("mdi-format-align-center")])],1),o("v-btn",[o("v-icon",[t._v("mdi-format-align-right")])],1)],1)],1)},b=[],g={name:"ListController",data:function(){return{page:1}}},y=g,w=(o("c0b1"),o("8336")),_=o("a609"),x=o("132d"),C=o("891e"),k=Object(u["a"])(y,v,b,!1,null,"1a726824",null),T=k.exports;d()(k,{VBtn:w["a"],VBtnToggle:_["a"],VIcon:x["a"],VPagination:C["a"]});var j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",[t.$vuetify.breakpoint.smAndDown?n("v-app-bar-nav-icon",{on:{click:t.toggleDrawerLeft}}):t._e(),n("v-img",{staticClass:"d-flex flex-grow-0",attrs:{src:o("bee1"),height:"60",contain:""}}),n("v-spacer"),t.$vuetify.breakpoint.sm?t._e():n("ul",[n("li",t._l(t.links,(function(e,o){return n("v-btn",{key:"navBarTopMenuItem_"+o,staticClass:"mr-1 mt-sm-1",class:e.color,attrs:{small:t.$vuetify.breakpoint.mdAndDown,"x-large":t.$vuetify.breakpoint.xlOnly,to:e.link}},[n("span",{staticClass:"white--text"},[t._v(t._s(e.label))])])})),1)])],1)},O=[],L={name:"Header",data:function(){return{drawerLeft:!1,links:[{label:"Search",link:"/search",color:"blue"},{label:"Standards",link:"/standards",color:"blue"},{label:"Databases",link:"/databases",color:"blue"},{label:"Policies",link:"/policies",color:"blue"},{label:"Collections",link:"/collections",color:"blue"},{label:"Add/Claim content",link:"/new",color:"grey"},{label:"Stats",link:"/summary-statistics",color:"teal darken-2"}]}},methods:{toggleDrawerLeft:function(){this.drawerLeft=!0,this.$emit("setParentDrawerStatus",this.drawerLeft)}}},S=L,V=(o("1535"),o("40dc")),E=o("5bc1"),D=o("adda"),P=o("2fa4"),A=Object(u["a"])(S,j,O,!1,null,"4a84cb70",null),N=A.exports;d()(A,{VAppBar:V["a"],VAppBarNavIcon:E["a"],VBtn:w["a"],VImg:D["a"],VSpacer:P["a"]});var I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade"}},[o("v-btn",{staticClass:"mr-2 mb-10",attrs:{fab:"",color:"primary",bottom:"",right:"",fixed:""},on:{click:t.scrollToTop}},[o("v-icon",[t._v("mdi-arrow-up")])],1)],1)},$=[],B={name:"JumpTop",props:{targetObject:null},methods:{scrollToTop:function(){var t=document.getElementById(this.targetObject);t.scrollTo(top)}}},H=B,R=(o("4681"),Object(u["a"])(H,I,$,!1,null,"1283d0a4",null)),F=R.exports;d()(R,{VBtn:w["a"],VIcon:x["a"]});var M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(30,(function(e){return o("div",{key:e,staticClass:"pt-2"},[o("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",color:"secondary",height:"100px"}},[o("b",{staticClass:"white--text"},[t._v(" "+t._s(e)+" ")])])],1)})),0)},W=[],q={name:"RightContent"},J=q,Y=o("b0af"),Q=Object(u["a"])(J,M,W,!1,null,"46d01cf6",null),U=Q.exports;d()(Q,{VCard:Y["a"]});var z={components:{RightContent:U,JumpTop:F,Header:N,ListController:T,LeftPanel:h},props:{source:String},data:function(){return{offsetTop:0,stickToLeft:!1,bodyOverflowActive:!0,hideOverflow:"overflow-hidden",showScrollToTopButton:!1,showHeader:!0,showDrawerLeft:!1}},created:function(){this.ChangeOverflowStatus(!0)},methods:{onScroll:function(t){var e=this;this.offsetTop=t.target.scrollTop,this.offsetTop>105?(e.stickToLeft=!0,e.showHeader=!1):(e.stickToLeft=!1,e.showHeader=!0),this.offsetTop>500?e.showScrollToTopButton=!0:e.showScrollToTopButton=!1},ChangeOverflowStatus:function(t){var e=document.getElementsByTagName("html")[0];t?e.setAttribute("class",this.hideOverflow):e.removeAttribute("class")},setDrawerStatus:function(t){this.showDrawerLeft=t}}},G=z,K=(o("6435"),o("7496")),X=o("62ad"),Z=o("a523"),tt=o("a75b"),et=o("f774"),ot=o("0fd9"),nt=o("269a"),at=o.n(nt),rt=o("f977"),st=Object(u["a"])(G,a,r,!1,null,null,null),it=st.exports;d()(st,{VApp:K["a"],VCol:X["a"],VContainer:Z["a"],VContent:tt["a"],VNavigationDrawer:et["a"],VRow:ot["a"]}),at()(st,{Scroll:rt["b"]});var lt=o("9483");Object(lt["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("d3b7");var ct=o("8c4f"),ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},ft=[],dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:o("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},pt=[],mt={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},ht=mt,vt=Object(u["a"])(ht,dt,pt,!1,null,null,null),bt=vt.exports;d()(vt,{VCol:X["a"],VContainer:Z["a"],VImg:D["a"],VRow:ot["a"]});var gt={name:"Home",components:{HelloWorld:bt}},yt=gt,wt=Object(u["a"])(yt,ut,ft,!1,null,null,null),_t=wt.exports;n["a"].use(ct["a"]);var xt=[{path:"/",name:"Home",component:_t},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],Ct=new ct["a"]({mode:"history",base:"",routes:xt}),kt=Ct,Tt=o("2f62");n["a"].use(Tt["a"]);var jt=new Tt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Ot=o("f309"),Lt=o("fcf4"),St={primary:{base:"#27aae1"},secondary:"#004d40",accent:Lt["a"].yellow.lighten2,tertiary:Lt["a"].orange.base,customColor:Lt["a"].pink.base},Vt={values:{product:"mdi-dropbox",support:"mdi-lifebuoy",steam:"mdi-steam-box",pc:"mdi-desktop-classic",xbox:"mdi-microsoft-xbox",playstation:"mdi-sony-playstation",switch:"mdi-nintendo-switch"}},Et=Vt,Dt={thresholds:{}},Pt=Dt;n["a"].use(Ot["a"]);var At=new Ot["a"]({theme:{themes:{light:St},options:{customProperties:!0}},iconfont:"mdi",icons:Et,breakpoint:Pt}),Nt=(o("5363"),o("d1e78"),{data:function(){return{applicationStrings:{connectionErrors:{NOT_FOUND:"The record you are looking for does not exist.",CONNECTION_ERROR:"There is a connection issue",NO_INTERNET:"Your internet connection has been lost"},mainTopNav:{TITLE_1:"Standard",TITLE_2:"Policy",TITLE_3:"Collection",TITLE_4:"Search"}},get globalReadOnlyProperty(){return"Can't touch this!"}}}});n["a"].config.productionTip=!1,n["a"].mixin(Nt),new n["a"]({router:kt,store:jt,vuetify:At,render:function(t){return t(it)}}).$mount("#app")},6435:function(t,e,o){"use strict";var n=o("a186"),a=o.n(n);a.a},"9b19":function(t,e,o){t.exports=o.p+"img/logo.07d1e22e.svg"},a186:function(t,e,o){},b9e5:function(t,e,o){},bee1:function(t,e,o){t.exports=o.p+"img/fairsharing-logo.c8194b18.svg"},c0b1:function(t,e,o){"use strict";var n=o("b9e5"),a=o.n(n);a.a},c7c3:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.9b26c14a.js.map