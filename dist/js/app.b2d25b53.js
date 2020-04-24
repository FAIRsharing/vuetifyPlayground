(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},i=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e5d05581"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=a[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}a[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},2422:function(t,e,o){"use strict";var n=o("9a94"),a=o.n(n);a.a},"418d":function(t,e,o){},4360:function(t,e){},"461e":function(t,e,o){"use strict";var n=o("8fa1"),a=o.n(n);a.a},4681:function(t,e,o){"use strict";var n=o("418d"),a=o.n(n);a.a},5062:function(t,e,o){"use strict";var n=o("e2ed"),a=o.n(n);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"app"}},[t.$vuetify.breakpoint.smAndDown?o("v-navigation-drawer",{attrs:{app:"",bottom:""},model:{value:t.showDrawerLeft,callback:function(e){t.showDrawerLeft=e},expression:"showDrawerLeft"}}):t._e(),o("transition",{attrs:{name:"fade"}},[t.showHeader?o("Header",{on:{setParentDrawerStatus:t.setDrawerStatus}}):t._e()],1),o("Records",{on:{toggleHeader:t.toggleHeaderHidden,changeOverFlow:t.changeOverflowStatus}})],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",[t.$vuetify.breakpoint.smAndDown?n("v-app-bar-nav-icon",{on:{click:t.toggleDrawerLeft}}):t._e(),n("v-img",{staticClass:"d-flex flex-grow-0",attrs:{src:o("bee1"),height:"60",contain:""}}),n("v-spacer"),n("nav",[t.$vuetify.breakpoint.sm||t.$vuetify.breakpoint.xs?t._e():n("ul",{attrs:{id:"nav-md-lg-screens"}},[n("li",t._l(t.links,(function(e,o){return n("v-btn",{key:"navBarTopMenuItem_"+o,staticClass:"mr-1 mt-sm-1",class:e.color,attrs:{small:t.$vuetify.breakpoint.mdAndDown,"x-large":t.$vuetify.breakpoint.xlOnly,to:e.link}},[n("span",{staticClass:"white--text"},[t._v(t._s(e.label))])])})),1)])])],1)},s=[],c={name:"Header",data:function(){return{drawerLeft:!1,links:[{label:"Search",link:"/search",color:"blue"},{label:"Standards",link:"/standards",color:"blue"},{label:"Databases",link:"/databases",color:"blue"},{label:"Policies",link:"/policies",color:"blue"},{label:"Collections",link:"/collections",color:"blue"},{label:"Add/Claim content",link:"/new",color:"grey"},{label:"Stats",link:"/summary-statistics",color:"teal darken-2"}]}},methods:{toggleDrawerLeft:function(){this.drawerLeft=!0,this.$emit("setParentDrawerStatus",this.drawerLeft)}}},l=c,u=(o("e9f9"),o("2877")),d=o("6544"),f=o.n(d),m=o("40dc"),p=o("5bc1"),h=o("8336"),v=o("adda"),g=o("2fa4"),b=Object(u["a"])(l,r,s,!1,null,"2ac84667",null),C=b.exports;f()(b,{VAppBar:m["a"],VAppBarNavIcon:p["a"],VBtn:h["a"],VImg:v["a"],VSpacer:g["a"]});var y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-content",[o("h1",{staticClass:"d-none"},[t._v(" Content ")]),o("transition",{attrs:{name:"fade"}},[t.showScrollToTopButton?o("jump-top",{attrs:{"target-object":"scroll-target"}}):t._e()],1),o("v-container",{staticClass:"overflow-y-auto overflow-x-hidden content-custom ",attrs:{fluid:"",id:"scroll-target"}},[o("section",{staticClass:"secondary mb-2",attrs:{id:"banner"}},[o("h1",{staticClass:"text-center white--text"},[t._v(" "+t._s(t.getTitle)+" ")]),o("p",{staticClass:"text-center white--text"},[t._v(" "+t._s(t.recordsSubTitles[t.getTitle])+" ")])]),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"d-none d-md-flex ",attrs:{cols:"12",lg:"4",md:"4"}},[o("LeftPanel",{class:t.stickToLeft?"left-panel-fixed":"left-panel-default"})],1),o("v-col",[o("RightContentStackList",{directives:[{name:"scroll",rawName:"v-scroll:#scroll-target",value:t.onScroll,expression:"onScroll",arg:"#scroll-target"}],staticClass:"pb-5 mr-1 ml-1 "})],1)],1)],1)],1)},x=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",[o("v-card",{staticClass:"pa-2",attrs:{id:"filters-holder",outlined:"",tile:"",elevation:"3"}},[o("h2",{staticClass:"d-none"},[t._v(" Filter List ")]),o("v-list",{attrs:{dense:""}},[o("v-list-item-group",{attrs:{color:"primary"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.items,(function(e,n){return o("v-list-item",{key:n},[o("v-list-item-icon",[o("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)],1)},_=[],k={name:"LeftPanel",data:function(){return{item:3,items:[{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"},{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"},{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"},{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"},{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"},{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"}]}}},T=k,S=(o("9650"),o("b0af")),j=o("132d"),A=o("8860"),O=o("da13"),L=o("5d23"),V=o("1baa"),R=o("34c3"),I=Object(u["a"])(T,w,_,!1,null,"660c4fa6",null),E=I.exports;f()(I,{VCard:S["a"],VIcon:j["a"],VList:A["a"],VListItem:O["a"],VListItemContent:L["a"],VListItemGroup:V["a"],VListItemIcon:R["a"],VListItemTitle:L["b"]});var D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade"}},[o("v-btn",{staticClass:"mr-2 mb-10",attrs:{fab:"",color:"primary",bottom:"",right:"",fixed:""},on:{click:t.scrollToTop}},[o("v-icon",[t._v("mdi-arrow-up")])],1)],1)},N=[],P={name:"JumpTop",props:{targetObject:null},methods:{scrollToTop:function(){var t=document.getElementById(this.targetObject);t.scrollTo(top)}}},B=P,H=(o("4681"),Object(u["a"])(B,D,N,!1,null,"1283d0a4",null)),$=H.exports;f()(H,{VBtn:h["a"],VIcon:j["a"]});var F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("h1",{staticClass:"d-none"},[t._v("Records")]),o("div",{staticStyle:{background:"lightblue",width:"100%",height:"50px",display:"flex","justify-content":"center","align-items":"center"}},[t._v(" place of filter Chip ")]),o("ListController",{staticClass:"mt-2"}),o("article",[o("h2",{staticClass:"d-none"},[t._v(" Result ")]),t._l(30,(function(t){return o("section",{key:t,staticClass:"pt-2 pt-lg-3"},[o("RecordsCard",{key:t,attrs:{"record-status":t%2===0?"ready":"deprecated"}})],1)}))],2),o("ListController",{staticClass:"mt-2"})],1)},M=[],J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"pa-2 d-flex  align-center",attrs:{outlined:"",tile:"",height:"130px",elevation:"3"}},[o("div",{staticClass:"ml-2 pr-6"},[o("circle-holder",{attrs:{status:t.RecordStatus}})],1),o("h3",{staticClass:"pl-2   max-height max-width"},[t._v("Record title as as asas test long ")]),o("section",{staticClass:"ml-2 mr-4 d-flex flex-column"},[o("h4",{staticClass:"d-none"},[t._v("select Tag type")]),t._l(t.buttons,(function(e,n){return o("v-btn",{key:n,staticClass:"button-text-color",attrs:{outlined:e.active,text:"",color:e.active?"primary":null},on:{click:function(e){return t.changeActiveItem(n)}}},[t._v(t._s(e.title)+" ")])}))],2),o("section",{staticClass:"chips-container"},[o("h5",{staticClass:"d-none"},[t._v("Choose Subject , Domain , Taxonomy ")]),o("v-chip-group",{attrs:{column:""}},t._l(t.Chips[t.currentActiveChips],(function(e){return o("v-chip",{key:e.title,attrs:{small:"","text-color":"secondary",color:"secondary",close:e.active,outlined:""},on:{click:function(o){return t.toggleChipActiveness(e)}}},[t._v(t._s(e.title)+" ")])})),1)],1)])},q=[],U=(o("7db0"),o("d81d"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"circle"},[o("v-icon",{staticClass:"iconClass",attrs:{size:"50"}},[t._v(t._s(t.getRecordStatus.icon))]),o("span",{style:t.getRecordStatus.backColor,attrs:{id:"innerCircle"}},[o("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("b",t._g({attrs:{id:"status-style"}},n),[t._v(t._s(t.getRecordStatus.title))])]}}])},[o("span",[t._v(t._s(t.getRecordStatus.toolTip))])])],1)],1)}),W=[],z={name:"CircleHolder",props:{status:null},data:function(){return{statusStyles:{ready:{title:"R",toolTip:"Ready",icon:"mdi-database",backColor:"background: linear-gradient(green, lightgreen)"},deprecated:{title:"D",toolTip:"Deprecated",icon:"mdi-database",backColor:"background: linear-gradient(#8F4309, #a57202)"},uncertain:{title:"U",toolTip:"Uncertain",icon:"mdi-database",backColor:"background: linear-gradient(yellow, yellow)"},inDevelopment:{title:"I",toolTip:"In Development",icon:"mdi-database",backColor:"background: linear-gradient(pink, pink)"}}}},computed:{getRecordStatus:function(){return this.statusStyles[this.status]}}},G=z,X=(o("5d62"),o("3a2f")),Y=Object(u["a"])(G,U,W,!1,null,"48255fb6",null),Q=Y.exports;f()(Y,{VIcon:j["a"],VTooltip:X["a"]});var K={name:"RecordsCard",components:{CircleHolder:Q},props:{RecordStatus:null},data:function(){return{buttons:[{title:"SUBJECTS",active:!1},{title:"DOMAINS",active:!0},{title:"TAXONOMIES",active:!1}],Chips:{SUBJECTS:[{title:"subject-Chip1",active:!1},{title:"subject-Chip2",active:!1}],DOMAINS:[{title:"domain-Chip1",active:!1},{title:"domain-Chip2",active:!1},{title:"domain-Chip3",active:!1},{title:"domain-Chip4",active:!1}],TAXONOMIES:[{title:"taxonomies-Chip1",active:!1},{title:"taxonomies-Chip2",active:!1},{title:"taxonomies-Chip3",active:!1},{title:"taxonomies-Chip4",active:!1},{title:"taxonomies-Chip5",active:!1},{title:"taxonomies-Chip6",active:!1},{title:"taxonomies-Chip7",active:!1},{title:"taxonomies-Chip8",active:!1},{title:"taxonomies-Chip9",active:!1},{title:"taxonomies-Chip10",active:!1},{title:"taxonomies-Chip11",active:!1},{title:"taxonomies-Chip12",active:!1}]},currentActiveChips:"DOMAINS",vChipActive:"v-chip--active"}},methods:{changeActiveItem:function(t){this.buttons.map((function(t){return t.active=!1})),this.buttons[t].active=!0,this.currentActiveChips=this.buttons[t].title},toggleChipActiveness:function(t){var e=this.Chips[this.currentActiveChips].find((function(e){return e===t}));this.Chips[this.currentActiveChips].map((function(t){t===e&&(t.active=!t.active)}))}}},Z=K,tt=(o("461e"),o("cc20")),et=o("ef9a"),ot=Object(u["a"])(Z,J,q,!1,null,"18360cc2",null),nt=ot.exports;f()(ot,{VBtn:h["a"],VCard:S["a"],VChip:tt["a"],VChipGroup:et["a"]});var at=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex  justify-center mr-1 ml-1"},[o("v-btn-toggle",{attrs:{mandatory:""}},[o("v-btn",[o("v-icon",[t._v("mdi-format-align-left")])],1)],1),o("v-pagination",{attrs:{length:5},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}),o("v-btn-toggle",{attrs:{mandatory:""}},[o("v-btn",[o("v-icon",[t._v("mdi-format-align-left")])],1),o("v-btn",[o("v-icon",[t._v("mdi-format-align-center")])],1),o("v-btn",[o("v-icon",[t._v("mdi-format-align-right")])],1)],1)],1)},it=[],rt={name:"ListController",data:function(){return{page:1}}},st=rt,ct=(o("742f"),o("a609")),lt=o("891e"),ut=Object(u["a"])(st,at,it,!1,null,"51781a0a",null),dt=ut.exports;f()(ut,{VBtn:h["a"],VBtnToggle:ct["a"],VIcon:j["a"],VPagination:lt["a"]});var ft={name:"RightContentStackList",components:{ListController:dt,RecordsCard:nt}},mt=ft,pt=(o("2422"),Object(u["a"])(mt,F,M,!1,null,"0a1a7216",null)),ht=pt.exports,vt={name:"Records",components:{RightContentStackList:ht,JumpTop:$,LeftPanel:E},data:function(){return{offsetTop:0,stickToLeft:!1,bodyOverflowActive:!0,hideOverflow:"overflow-hidden",showScrollToTopButton:!1,showHeader:!0,showDrawerLeft:!1,recordsSubTitles:{Standards:"The standards in FAIRsharing are manually curated from a variety of sources, including BioPortal, MIBBI and the Equator Network.",Collections:"Collections group together one or more types of resource (standard, database or policy) by domain, project or organisation. A Recommendation is a core-set of resources that are selected or endorsed by data policies from journals, funders or other organizations.",Databases:"A catalogue of databases, described according to the BioDBcore guidelines, along with the standards used within them; partly compiled with the support of Oxford University Press (NAR Database Issue and DATABASE Journal).",Policies:"FAIRsharing policies: A catalogue of data preservation, management and sharing policies from international funding agencies, regulators and journals.",Search:"Search the FAIRsharing records using advanced filtering"}}},created:function(){this.$emit("changeOverFlow",!0)},methods:{onScroll:function(t){var e=this;this.offsetTop=t.target.scrollTop,this.offsetTop>105?(e.stickToLeft=!0,e.showHeader=!1):(e.stickToLeft=!1,e.showHeader=!0),this.offsetTop>500?e.showScrollToTopButton=!0:e.showScrollToTopButton=!1,this.$emit("toggleHeader",e.showHeader)}},computed:{getTitle:function(){return"Standards"}}},gt=vt,bt=(o("5062"),o("62ad")),Ct=o("a523"),yt=o("a75b"),xt=o("0fd9"),wt=o("269a"),_t=o.n(wt),kt=o("f977"),Tt=Object(u["a"])(gt,y,x,!1,null,"283cb7c1",null),St=Tt.exports;f()(Tt,{VCol:bt["a"],VContainer:Ct["a"],VContent:yt["a"],VRow:xt["a"]}),_t()(Tt,{Scroll:kt["b"]});var jt={components:{Records:St,Header:C},props:{source:String},data:function(){return{showHeader:!0,showDrawerLeft:!1,hideOverflow:"overflow-hidden"}},created:function(){},methods:{setDrawerStatus:function(t){this.showDrawerLeft=t},toggleHeaderHidden:function(t){this.showHeader=t},changeOverflowStatus:function(t){var e=document.getElementsByTagName("html")[0];t?e.setAttribute("class",this.hideOverflow):e.removeAttribute("class")}}},At=jt,Ot=(o("6435"),o("7496")),Lt=o("f774"),Vt=Object(u["a"])(At,a,i,!1,null,null,null),Rt=Vt.exports;f()(Vt,{VApp:Ot["a"],VNavigationDrawer:Lt["a"]});var It=o("9483");Object(It["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("d3b7");var Et=o("8c4f"),Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},Nt=[],Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:o("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},Bt=[],Ht={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},$t=Ht,Ft=Object(u["a"])($t,Pt,Bt,!1,null,null,null),Mt=Ft.exports;f()(Ft,{VCol:bt["a"],VContainer:Ct["a"],VImg:v["a"],VRow:xt["a"]});var Jt={name:"Home",components:{HelloWorld:Mt}},qt=Jt,Ut=Object(u["a"])(qt,Dt,Nt,!1,null,null,null),Wt=Ut.exports;n["a"].use(Et["a"]);var zt=[{path:"/",name:"Home",component:Wt},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],Gt=new Et["a"]({mode:"history",base:"",routes:zt}),Xt=Gt,Yt=o("4360"),Qt=o.n(Yt),Kt=o("f309"),Zt=o("fcf4"),te={primary:{base:"#27aae1"},secondary:"#004d40",accent:Zt["a"].yellow.lighten2,tertiary:Zt["a"].orange.base,customColor:Zt["a"].pink.base},ee={values:{product:"mdi-dropbox",support:"mdi-lifebuoy",steam:"mdi-steam-box",pc:"mdi-desktop-classic",xbox:"mdi-microsoft-xbox",playstation:"mdi-sony-playstation",switch:"mdi-nintendo-switch"}},oe=ee,ne={thresholds:{}},ae=ne;n["a"].use(Kt["a"]);var ie=new Kt["a"]({theme:{themes:{light:te},options:{customProperties:!0}},iconfont:"mdi",icons:oe,breakpoint:ae}),re=(o("5363"),o("d1e78"),{data:function(){return{applicationStrings:{connectionErrors:{NOT_FOUND:"The record you are looking for does not exist.",CONNECTION_ERROR:"There is a connection issue",NO_INTERNET:"Your internet connection has been lost"},mainTopNav:{TITLE_1:"Standard",TITLE_2:"Policy",TITLE_3:"Collection",TITLE_4:"Search"}},get globalReadOnlyProperty(){return"Can't touch this!"}}}});o("85a1");n["a"].config.productionTip=!1,n["a"].mixin(re),new n["a"]({router:Xt,store:Qt.a,vuetify:ie,render:function(t){return t(Rt)}}).$mount("#app")},"5d62":function(t,e,o){"use strict";var n=o("656b"),a=o.n(n);a.a},6435:function(t,e,o){"use strict";var n=o("a186"),a=o.n(n);a.a},"656b":function(t,e,o){},"742f":function(t,e,o){"use strict";var n=o("f6de"),a=o.n(n);a.a},"85a1":function(t,e,o){},"8e0b":function(t,e,o){},"8fa1":function(t,e,o){},9650:function(t,e,o){"use strict";var n=o("8e0b"),a=o.n(n);a.a},"9a94":function(t,e,o){},"9b19":function(t,e,o){t.exports=o.p+"img/logo.07d1e22e.svg"},a186:function(t,e,o){},bee1:function(t,e,o){t.exports=o.p+"img/fairsharing-logo.c8194b18.svg"},c8b4:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},e2ed:function(t,e,o){},e9f9:function(t,e,o){"use strict";var n=o("c8b4"),a=o.n(n);a.a},f6de:function(t,e,o){}});
//# sourceMappingURL=app.b2d25b53.js.map