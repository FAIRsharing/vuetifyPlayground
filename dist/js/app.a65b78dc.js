(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,s=1;s<i.length;s++){var c=i[s];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},o=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"58e8c20b"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],i=n[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,a){i=n[t]=[e,a]}));e.push(i[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=s(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var i=n[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,i[1](l)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"048b":function(t,e,i){},"0861":function(t,e,i){"use strict";var a=i("5f26"),n=i.n(a);n.a},"0dee":function(t,e,i){"use strict";var a=i("ea99"),n=i.n(a);n.a},"3bd3":function(t,e,i){},"418d":function(t,e,i){},4360:function(t,e){},4681:function(t,e,i){"use strict";var a=i("418d"),n=i.n(a);n.a},"4a1c":function(t,e,i){"use strict";var a=i("a107"),n=i.n(a);n.a},"4f8c":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"app"}},[t.$vuetify.breakpoint.smAndDown?i("v-navigation-drawer",{attrs:{app:"",bottom:""},model:{value:t.showDrawerLeft,callback:function(e){t.showDrawerLeft=e},expression:"showDrawerLeft"}}):t._e(),i("transition",{attrs:{name:"fade"}},[t.showHeader?i("Header",{on:{setParentDrawerStatus:t.setDrawerStatus}}):t._e()],1),i("Records",{on:{toggleHeader:t.toggleHeaderHidden,changeOverFlow:t.changeOverflowStatus}})],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{height:"100"}},[t.$vuetify.breakpoint.smAndDown?a("v-app-bar-nav-icon",{on:{click:t.toggleDrawerLeft}}):t._e(),a("v-img",{staticClass:"d-flex flex-grow-0",attrs:{src:i("bee1"),height:"70",contain:""}}),a("v-spacer"),a("nav",[t.$vuetify.breakpoint.sm||t.$vuetify.breakpoint.xs?t._e():a("ul",{attrs:{id:"nav-md-lg-screens"}},[a("li",t._l(t.links,(function(e,i){return a("v-btn",{key:"navBarTopMenuItem_"+i,staticClass:"mr-1 mt-sm-1",class:e.color,attrs:{small:t.$vuetify.breakpoint.mdAndDown,"x-large":t.$vuetify.breakpoint.xlOnly,to:e.link}},[a("span",{staticClass:"white--text"},[t._v(t._s(e.label))])])})),1)])])],1)},r=[],c={name:"Header",data:function(){return{drawerLeft:!1,links:[{label:"Search",link:"/search",color:"blue"},{label:"Standards",link:"/standards",color:"blue"},{label:"Databases",link:"/databases",color:"blue"},{label:"Policies",link:"/policies",color:"blue"},{label:"Collections",link:"/collections",color:"blue"},{label:"Add/Claim content",link:"/new",color:"grey"},{label:"Stats",link:"/summary-statistics",color:"teal darken-2"}]}},methods:{toggleDrawerLeft:function(){this.drawerLeft=!0,this.$emit("setParentDrawerStatus",this.drawerLeft)}}},l=c,u=(i("ccf2"),i("2877")),d=i("6544"),f=i.n(d),v=i("40dc"),m=i("5bc1"),p=i("8336"),h=i("adda"),b=i("2fa4"),g=Object(u["a"])(l,s,r,!1,null,"5be10443",null),C=g.exports;f()(g,{VAppBar:v["a"],VAppBarNavIcon:m["a"],VBtn:p["a"],VImg:h["a"],VSpacer:b["a"]});var y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",[i("h1",{staticClass:"d-none"},[t._v(" Content ")]),i("transition",{attrs:{name:"fade"}},[t.showScrollToTopButton?i("jump-top",{attrs:{"target-object":"scroll-target"}}):t._e()],1),i("v-container",{staticClass:"overflow-y-auto overflow-x-hidden content-custom ",attrs:{fluid:"",id:"scroll-target"}},[i("div",[i("section",{staticClass:"secondary",attrs:{id:"banner"}},[i("h1",{staticClass:"text-center white--text"},[t._v(" "+t._s(t.getTitle)+" ")]),i("p",{staticClass:"text-center white--text"},[t._v(" "+t._s(t.recordsSubTitles[t.getTitle])+" ")])])]),i("div",{staticClass:"d-flex flex-row align-center mt-1  mr-2 ml-2"},[i("v-text-field",{attrs:{solo:"","single-line":"",clearable:"",placeholder:"Can't find what you'r looking for?! search through all data"},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),i("v-btn",{staticClass:"mt-1 ml-2",attrs:{color:"primary",outlined:"",height:"52px"}},[i("v-icon",[t._v("search")]),i("span",[t._v("Search")])],1)],1),i("div",{staticClass:"text-right"},[i("v-btn",{staticClass:"button-text-color",attrs:{text:"",small:"",to:"/advanced-search"}},[t._v("Advanced")])],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"d-none d-md-flex mt-2 ml-2",attrs:{cols:"12",lg:"4",md:"4"}},[i("LeftPanel",{class:t.stickToLeft?"left-panel-fixed":"left-panel-default"})],1),i("v-col",{staticClass:"mt-2"},[i("RightContentStackList",{directives:[{name:"scroll",rawName:"v-scroll:#scroll-target",value:t.onScroll,expression:"onScroll",arg:"#scroll-target"}],staticClass:"pb-5 mr-0 mr-md-2"})],1)],1)],1)],1)},x=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",[i("v-card",{staticClass:"pa-2",attrs:{id:"filters-holder",outlined:"",tile:"",elevation:"3"}},[i("h2",{staticClass:"d-none"},[t._v(" Filter List ")]),i("FilterButtons",{attrs:{"md-screens":t.$vuetify.breakpoint.mdAndDown}})],1)],1)},_=[],S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(3,(function(e){return i("div",{key:e,staticClass:"d-flex flex-row justify-start mb-1 mb-lg-2"},t._l(t.buttonsGroup[e-1],(function(a,n){return i("v-btn",{key:n,staticClass:"mr-1 mr-lg-2",class:[0===n?"first-child":"flex-1",{"button-style-md-screens":t.mdScreens}],attrs:{color:"primary",outlined:!a.active},on:{click:function(i){return t.selectFilter(n,t.buttonsGroup[e-1])}}},[t._v(t._s(a.title)+" ")])})),1)})),i("div",{staticClass:"d-flex flex-row justify-start mb-1 mb-lg-2"},t._l(t.buttonsRecordsState,(function(e,a){return i("v-tooltip",{key:a,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[i("v-btn",t._g({staticClass:"mr-1 mr-lg-2 ",class:[0===a?"first-child":"flex-1",{"buttons-md-style":t.mdScreens&&0!==a}],attrs:{color:"primary",outlined:!e.active},on:{click:function(e){return t.selectFilter(a,t.buttonsRecordsState)}}},o),[t._v(" "+t._s(e.title)+" ")])]}}],null,!0)},[i("span",[t._v(t._s(e.toolTip))])])})),1),i("v-expansion-panels",{attrs:{multiple:"",flat:"",hover:"",accordion:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.filters,(function(e){return i("ExpansionPanel",{key:e.filter+"_"+e.updateKey,attrs:{object:e},on:{AddParam:t.addParam}})})),1)],2)},k=[],T=(i("4de4"),i("7db0"),i("c740"),i("4160"),i("d81d"),i("d3b7"),i("159b"),i("ddb0"),i("96cf"),i("1da1")),j=i("2909"),A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-expansion-panel",[i("v-expansion-panel-header",[t._v(t._s(t.object.filter))]),i("v-expansion-panel-content",{staticClass:"pl-5 pr-5"},[i("v-list",{class:{"fixed-scrollable-height":t.object.subFilters.length>5},attrs:{flat:""}},[i("v-list-item-group",{attrs:{color:"primary",multiple:""}},t._l(t.searchSubFilters.subFilters,(function(e,a){return i("v-list-item",{key:e.subFilter+"_"+a,on:{click:function(i){return t.$emit("AddParam",e.subFilter,e,t.object.filter)}}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-primary",domProps:{textContent:t._s(e.subFilter)}})],1),i("v-list-item-icon",[i("div",{class:e.active?"badge-active":"badge"},[i("span",{staticClass:"text-primary ",attrs:{id:"inventory"}},[t._v(t._s(e.inventory))]),e.active?i("span",{staticClass:"triangle-left"}):t._e()])])],1)})),1)],1),t.object.subFilters.length>5?i("v-autocomplete",{staticClass:"mt-2",attrs:{items:t.returnSubFilters(t.object.subFilters),solo:"",dense:"",clearable:"",placeholder:"Search through "+t.object.filter},model:{value:t.object.filterSelected,callback:function(e){t.$set(t.object,"filterSelected",e)},expression:"object.filterSelected"}}):t._e()],1)],1)},L=[],O=(i("caad"),i("2532"),{name:"ExpansionPanel",props:{object:null},data:function(){return{searchTerm:""}},computed:{searchSubFilters:function(){var t=this;if(null===t.searchTerm||""===t.searchTerm)return t.object;var e={subFilters:[]};return t.object.subFilters.forEach((function(i){i.subFilter.includes(t.searchTerm)&&e.subFilters.push(i)})),e}},methods:{returnSubFilters:function(t){var e=[];return t.forEach((function(t){return e.push(t.subFilter)})),e}}}),E=O,R=(i("faf9"),i("c6a6")),F=i("cd55"),I=i("49e2"),V=i("c865"),D=i("8860"),N=i("da13"),P=i("5d23"),H=i("1baa"),B=i("34c3"),$=Object(u["a"])(E,A,L,!1,null,"10c30302",null),M=$.exports;f()($,{VAutocomplete:R["a"],VExpansionPanel:F["a"],VExpansionPanelContent:I["a"],VExpansionPanelHeader:V["a"],VList:D["a"],VListItem:N["a"],VListItemContent:P["a"],VListItemGroup:H["a"],VListItemIcon:B["a"],VListItemTitle:P["b"]});var U={name:"FilterButtons",components:{ExpansionPanel:M},props:{mdScreens:null},data:function(){return{searchTerm:"",selectedSubFilter:null,items:[{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"},{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"}],panel:[],filterSelected:{},filters:[{filter:"GRANTS",filterSelected:{},searchTerm:null,updateKey:0,subFilters:[{subFilter:"subfilter-1",icon:"mdi-clock",active:!1,inventory:15},{subFilter:"subfilter-2",icon:"mdi-flag",active:!1,inventory:10}]},{filter:"LICENSES",filterSelected:{},searchTerm:null,updateKey:0,subFilters:[{subFilter:"subfilter-1",icon:"mdi-account",active:!1,inventory:100},{subFilter:"subfilter-2",icon:"mdi-flag",active:!1,inventory:10},{subFilter:"subfilter-3",icon:"mdi-flag",active:!1,inventory:95},{subFilter:"biology",icon:"mdi-account",active:!1,inventory:11},{subFilter:"refactor-4",icon:"mdi-account",active:!1,inventory:76},{subFilter:"research-3",icon:"mdi-flag",active:!1,inventory:54},{subFilter:"arad-4",icon:"mdi-account",active:!1,inventory:13},{subFilter:"test",icon:"mdi-account",active:!1,inventory:2}]},{filter:"ORGANISATION(s)",filterSelected:{},updateKey:0,subFilters:[{subFilter:"organ",icon:"mdi-clock",active:!1,inventory:14},{subFilter:"organ airplane",icon:"mdi-flag",active:!1,inventory:10},{subFilter:"organ car",icon:"mdi-flag",active:!1,inventory:7},{subFilter:"organ flat",icon:"mdi-flag",active:!1,inventory:45},{subFilter:"organ aparat",icon:"mdi-flag",active:!1,inventory:89}]}],buttonsGroup:[[{title:"ALL",active:!0},{title:"RECOMMENDED",active:!1},{title:"NOT RECOMMENDED",active:!1}],[{title:"ALL",active:!0},{title:"PUBLISHED",active:!1},{title:"NOT PUBLISHED",active:!1}],[{title:"ALL",active:!0},{title:"MAINTAINED",active:!1},{title:"NOT MAINTAINED",active:!1}]],buttonsRecordsState:[{title:"ALL",active:!0,toolTip:"Show All Records"},{title:"U",active:!1,toolTip:"Show Uncertain Records"},{title:"D",active:!1,toolTip:"Show Deprecated Records"},{title:"I",active:!1,toolTip:"Show In Development Records"},{title:"R",active:!1,toolTip:"Show Ready Records"}]}},methods:{selectFilter:function(t,e){e.map((function(t){return t.active=!1})),e[t].active=!0},all:function(){this.panel=Object(j["a"])(Array(this.filters.length).keys()).map((function(t,e){return e}))},none:function(){this.panel=[]},addParam:function(){var t=Object(T["a"])(regeneratorRuntime.mark((function t(e,i,a){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=this.filters.find((function(t){return t.filter===a})),o=n.subFilters.findIndex((function(t){return t.subFilter===e})),n.subFilters[o].active=!n.subFilters[o].active;case 3:case"end":return t.stop()}}),t,this)})));function e(e,i,a){return t.apply(this,arguments)}return e}(),createIndexForFilters:function(){var t=this;this.filters.forEach((function(e){t.filterSelected[e.filter]=[]}))}},created:function(){this.all(),this.createIndexForFilters()}},J=U,G=(i("d190"),i("0393")),W=i("3a2f"),q=Object(u["a"])(J,S,k,!1,null,"1ae32147",null),K=q.exports;f()(q,{VBtn:p["a"],VExpansionPanels:G["a"],VTooltip:W["a"]});var X={name:"LeftPanel",components:{FilterButtons:K}},z=X,Y=(i("c114"),i("b0af")),Q=Object(u["a"])(z,w,_,!1,null,"84eef91c",null),Z=Q.exports;f()(Q,{VCard:Y["a"]});var tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("v-btn",{staticClass:"mr-2 mb-10",attrs:{fab:"",color:"primary",bottom:"",right:"",fixed:""},on:{click:t.scrollToTop}},[i("v-icon",[t._v("mdi-arrow-up")])],1)],1)},et=[],it={name:"JumpTop",props:{targetObject:null},methods:{scrollToTop:function(){var t=document.getElementById(this.targetObject);t.scrollTo(top)}}},at=it,nt=(i("4681"),i("132d")),ot=Object(u["a"])(at,tt,et,!1,null,"1283d0a4",null),st=ot.exports;f()(ot,{VBtn:p["a"],VIcon:nt["a"]});var rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("h1",{staticClass:"d-none"},[t._v("Records")]),i("div",{staticStyle:{background:"lightblue",width:"100%",height:"50px",display:"flex","justify-content":"center","align-items":"center"}},[t._v(" place of filter Chip ")]),i("ListController",{staticClass:"mt-2",on:{ChangeListType:t.changeListType}}),i("div",{class:["opacity-0-transition",{"opacity-1-transition":!t.isColumnList}]},[t.isColumnList?t._e():i("article",[i("h2",{staticClass:"d-none"},[t._v(" Result ")]),t._l(30,(function(t){return i("section",{key:t,staticClass:"pt-3 pt-lg-4"},[i("RecordsCardStack",{key:t,attrs:{"record-status":t%2===0?"ready":"deprecated",recommended:t%3===0}})],1)}))],2)]),i("div",{class:["opacity-0-transition",{"opacity-1-transition":t.isColumnList}]},[i("v-row",{directives:[{name:"show",rawName:"v-show",value:t.isColumnList,expression:"isColumnList"}]},t._l(30,(function(t){return i("RecordsCardColumn",{key:t,attrs:{"record-status":t%2===0?"ready":"deprecated",recommended:t%3===0}})})),1)],1)],1)},ct=[],lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"pa-2 d-flex  align-center flex-column",attrs:{outlined:"",tile:"",hover:t.allowClicking}},[i("v-row",{staticClass:"full-width",attrs:{"no-gutters":""}},[t.recommended?i("Ribbon",{attrs:{title:"RECOMMENDED"}}):t._e(),i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",lg:"12",md:"12",xl:"3"},on:{mouseenter:function(e){t.allowClicking=!0},mouseleave:function(e){t.allowClicking=!1}}},[i("div",{staticClass:"mt-1 ml-2 pr-6 d-flex flex-row align-center justify-start"},[i("circle-holder",{staticClass:"mr-8",attrs:{status:t.RecordStatus}}),i("h3",{staticClass:"max-height ",staticStyle:{width:"60%"}},[i("u",[t._v("Record title example")])])],1)]),i("v-col",{staticClass:"mt-2",attrs:{cols:"12",sm:"4",md:"3",lg:"3",xs:"12",xl:"2"}},[i("section",{staticClass:"ml-2 mb-0 mr-4 d-flex flex-column"},[i("h4",{staticClass:"d-none"},[t._v("select Tag type")]),t._l(t.buttons,(function(e,a){return i("v-btn",{key:a,staticClass:"button-text-color",attrs:{outlined:e.active,text:"",color:e.active?"primary":null},on:{click:function(e){return t.changeActiveItem(a)}}},[t._v(t._s(e.title)+" ")])}))],2)]),i("v-col",{attrs:{sm:"8",md:"9",lg:"9",xs:"12",xl:"7"}},[i("section",{staticClass:"chips-container "},[i("h5",{staticClass:"d-none"},[t._v("Choose Subject , Domain , Taxonomy ")]),i("v-chip-group",{attrs:{column:""}},t._l(t.Chips[t.currentActiveChips],(function(e){return i("v-chip",{key:e.title,attrs:{small:"","text-color":"secondary",color:"secondary",close:e.active,outlined:""},on:{click:function(i){return t.toggleChipActiveness(e)}}},[t._v(t._s(e.title)+" ")])})),1)],1)])],1),i("div",{staticClass:"d-flex flex-row",staticStyle:{width:"70%"}},[i("v-divider",{staticClass:"mt-2"})],1),i("p",{staticClass:"mt-2 description"},[t._v(" "+t._s(t.description)+" ")])],1)},ut=[],dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"circle"},[i("v-icon",{staticClass:"iconClass",attrs:{size:"50"}},[t._v(t._s(t.getRecordStatus.icon))]),i("span",{style:t.getRecordStatus.backColor,attrs:{id:"innerCircle"}},[i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("b",t._g({attrs:{id:"status-style"}},a),[t._v(t._s(t.getRecordStatus.title))])]}}])},[i("span",[t._v(t._s(t.getRecordStatus.toolTip))])])],1)],1)},ft=[],vt={name:"CircleHolder",props:{status:null},data:function(){return{statusStyles:{ready:{title:"R",toolTip:"Ready",icon:"mdi-database",backColor:"background: linear-gradient(green, lightgreen)"},deprecated:{title:"D",toolTip:"Deprecated",icon:"mdi-database",backColor:"background: linear-gradient(#8F4309, #a57202)"},uncertain:{title:"U",toolTip:"Uncertain",icon:"mdi-database",backColor:"background: linear-gradient(yellow, yellow)"},inDevelopment:{title:"I",toolTip:"In Development",icon:"mdi-database",backColor:"background: linear-gradient(pink, pink)"}}}},computed:{getRecordStatus:function(){return this.statusStyles[this.status]}}},mt=vt,pt=(i("923e"),Object(u["a"])(mt,dt,ft,!1,null,"700f27b6",null)),ht=pt.exports;f()(pt,{VIcon:nt["a"],VTooltip:W["a"]});var bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ribbon"},[i("span",[t._v(t._s(t.title))])])},gt=[],Ct={name:"Ribbon",props:{title:{type:String,default:null}}},yt=Ct,xt=(i("bc14"),Object(u["a"])(yt,bt,gt,!1,null,"8ad3f3f4",null)),wt=xt.exports,_t={name:"RecordsCardStack",components:{Ribbon:wt,CircleHolder:ht},props:{RecordStatus:null,recommended:null},data:function(){return{allowClicking:!1,buttons:[{title:"SUBJECTS",active:!1},{title:"DOMAINS",active:!0},{title:"TAXONOMIES",active:!1}],description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ... ",Chips:{SUBJECTS:[{title:"subject-Chip1",active:!1},{title:"subject-Chip2",active:!1}],DOMAINS:[{title:"domain-Chip1",active:!1},{title:"domain-Chip2",active:!1},{title:"domain-Chip3",active:!1},{title:"domain-Chip4",active:!1}],TAXONOMIES:[{title:"taxonomies-Chip1",active:!1},{title:"taxonomies-Chip2",active:!1},{title:"taxonomies-Chip3",active:!1},{title:"taxonomies-Chip4",active:!1},{title:"taxonomies-Chip5",active:!1},{title:"taxonomies-Chip6",active:!1},{title:"taxonomies-Chip7",active:!1},{title:"taxonomies-Chip8",active:!1},{title:"taxonomies-Chip9",active:!1},{title:"taxonomies-Chip10",active:!1},{title:"taxonomies-Chip11",active:!1},{title:"taxonomies-Chip12",active:!1}]},currentActiveChips:"DOMAINS",vChipActive:"v-chip--active"}},methods:{changeActiveItem:function(t){this.buttons.map((function(t){return t.active=!1})),this.buttons[t].active=!0,this.currentActiveChips=this.buttons[t].title},toggleChipActiveness:function(t){var e=this.Chips[this.currentActiveChips].find((function(e){return e===t}));this.Chips[this.currentActiveChips].map((function(t){t===e&&(t.active=!t.active)}))}}},St=_t,kt=(i("0861"),i("cc20")),Tt=i("ef9a"),jt=i("62ad"),At=i("ce7e"),Lt=i("0fd9"),Ot=Object(u["a"])(St,lt,ut,!1,null,"99a7b8ce",null),Et=Ot.exports;f()(Ot,{VBtn:p["a"],VCard:Y["a"],VChip:kt["a"],VChipGroup:Tt["a"],VCol:jt["a"],VDivider:At["a"],VRow:Lt["a"]});var Rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex  justify-center"},[i("v-icon",{staticClass:"mouse-cursor",class:{active:!t.isSortHovered},attrs:{"x-large":""},on:{mouseenter:function(e){t.isSortHovered=!0},mouseleave:function(e){t.isSortHovered=!1}}},[t._v("sort ")]),i("v-pagination",{attrs:{length:5},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}),i("v-icon",{class:{active:t.isColumnList},attrs:{"x-large":""},on:{click:function(e){return t.changeListType("stackList")}}},[t._v("view_headline")]),i("v-icon",{class:{active:!t.isColumnList},staticStyle:{"font-size":"2.8rem"},attrs:{"x-large":""},on:{click:function(e){return t.changeListType("columnList")}}},[t._v("view_column ")])],1)},Ft=[],It={name:"ListController",data:function(){return{page:1,isSortHovered:!1,isColumnList:!1}},methods:{changeListType:function(t){this.isColumnList="stackList"!==t,this.$emit("ChangeListType",this.isColumnList)}}},Vt=It,Dt=(i("885b"),i("891e")),Nt=Object(u["a"])(Vt,Rt,Ft,!1,null,"37a48344",null),Pt=Nt.exports;f()(Nt,{VIcon:nt["a"],VPagination:Dt["a"]});var Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-col",{staticClass:"mt-1",attrs:{cols:"12",sm:"12",md:"6",lg:"4",xl:"3"}},[i("v-card",{staticClass:"pa-2 d-flex  align-center flex-column",attrs:{outlined:"",tile:"",hover:t.allowClicking}},[i("v-row",{staticClass:"full-width",attrs:{"no-gutters":""}},[t.recommended?i("Ribbon",{attrs:{title:"RECOMMENDED"}}):t._e(),i("v-col",{attrs:{cols:"12"},on:{mouseenter:function(e){t.allowClicking=!0},mouseleave:function(e){t.allowClicking=!1}}},[i("div",{staticClass:" d-flex flex-column align-center justify-center"},[i("circle-holder",{attrs:{status:t.RecordStatus}}),i("h3",{staticClass:"max-height "},[i("u",[t._v("Record title example")])])],1)])],1),i("v-row",[i("v-col",[i("section",{staticClass:"ml-2 mb-0 mr-4 d-flex flex-column"},[i("h4",{staticClass:"d-none"},[t._v("select Tag type")]),t._l(t.buttons,(function(e,a){return i("v-btn",{key:a,staticClass:"button-text-color",attrs:{outlined:e.active,text:"",color:e.active?"primary":null},on:{click:function(e){return t.changeActiveItem(a)}}},[t._v(t._s(e.title)+" ")])}))],2)])],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",[i("section",{staticClass:"chips-container"},[i("h5",{staticClass:"d-none"},[t._v("Choose Subject , Domain , Taxonomy ")]),i("v-chip-group",{attrs:{column:""}},t._l(t.Chips[t.currentActiveChips],(function(e){return i("v-chip",{key:e.title,attrs:{small:"","text-color":"secondary",color:"secondary",close:e.active,outlined:""},on:{click:function(i){return t.toggleChipActiveness(e)}}},[t._v(t._s(e.title)+" ")])})),1)],1)])],1),i("div",{staticClass:"d-flex flex-row",staticStyle:{width:"70%"}},[i("v-divider",{staticClass:"mt-2"})],1),i("p",{staticClass:"ma-2 description text-justify"},[t._v(" "+t._s(t.description)+" ")])],1)],1)},Bt=[],$t={name:"RecordsCardColumn",components:{Ribbon:wt,CircleHolder:ht},props:{RecordStatus:null,recommended:null},data:function(){return{allowClicking:!1,buttons:[{title:"SUBJECTS",active:!1},{title:"DOMAINS",active:!0},{title:"TAXONOMIES",active:!1}],description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ... ",Chips:{SUBJECTS:[{title:"subject-Chip1",active:!1},{title:"subject-Chip2",active:!1}],DOMAINS:[{title:"domain-Chip1",active:!1},{title:"domain-Chip2",active:!1},{title:"domain-Chip3",active:!1},{title:"domain-Chip4",active:!1}],TAXONOMIES:[{title:"taxonomies-Chip1",active:!1},{title:"taxonomies-Chip2",active:!1},{title:"taxonomies-Chip3",active:!1},{title:"taxonomies-Chip4",active:!1},{title:"taxonomies-Chip5",active:!1},{title:"taxonomies-Chip6",active:!1},{title:"taxonomies-Chip7",active:!1},{title:"taxonomies-Chip8",active:!1},{title:"taxonomies-Chip9",active:!1},{title:"taxonomies-Chip10",active:!1},{title:"taxonomies-Chip11",active:!1},{title:"taxonomies-Chip12",active:!1}]},currentActiveChips:"DOMAINS",vChipActive:"v-chip--active"}},methods:{changeActiveItem:function(t){this.buttons.map((function(t){return t.active=!1})),this.buttons[t].active=!0,this.currentActiveChips=this.buttons[t].title},toggleChipActiveness:function(t){var e=this.Chips[this.currentActiveChips].find((function(e){return e===t}));this.Chips[this.currentActiveChips].map((function(t){t===e&&(t.active=!t.active)}))}}},Mt=$t,Ut=(i("4a1c"),Object(u["a"])(Mt,Ht,Bt,!1,null,"1ee69a3e",null)),Jt=Ut.exports;f()(Ut,{VBtn:p["a"],VCard:Y["a"],VChip:kt["a"],VChipGroup:Tt["a"],VCol:jt["a"],VDivider:At["a"],VRow:Lt["a"]});var Gt={name:"RightContentList",components:{RecordsCardColumn:Jt,ListController:Pt,RecordsCardStack:Et},data:function(){return{isColumnList:!1}},methods:{changeListType:function(t){this.isColumnList=t}}},Wt=Gt,qt=Object(u["a"])(Wt,rt,ct,!1,null,null,null),Kt=qt.exports;f()(qt,{VRow:Lt["a"]});var Xt={name:"Records",components:{RightContentStackList:Kt,JumpTop:st,LeftPanel:Z},data:function(){return{searchTerm:"",offsetTop:0,stickToLeft:!1,bodyOverflowActive:!0,hideOverflow:"overflow-hidden",showScrollToTopButton:!1,showHeader:!0,showDrawerLeft:!1,recordsSubTitles:{Standards:"The standards in FAIRsharing are manually curated from a variety of sources, including BioPortal, MIBBI and the Equator Network.",Collections:"Collections group together one or more types of resource (standard, database or policy) by domain, project or organisation. A Recommendation is a core-set of resources that are selected or endorsed by data policies from journals, funders or other organizations.",Databases:"A catalogue of databases, described according to the BioDBcore guidelines, along with the standards used within them; partly compiled with the support of Oxford University Press (NAR Database Issue and DATABASE Journal).",Policies:"FAIRsharing policies: A catalogue of data preservation, management and sharing policies from international funding agencies, regulators and journals.",Search:"Search the FAIRsharing records using advanced filtering"}}},created:function(){this.$emit("changeOverFlow",!0)},methods:{onScroll:function(t){var e=this;this.offsetTop=t.target.scrollTop,this.offsetTop>125?(e.stickToLeft=!0,e.showHeader=!1):(e.stickToLeft=!1,e.showHeader=!0),this.offsetTop>500?e.showScrollToTopButton=!0:e.showScrollToTopButton=!1,this.$emit("toggleHeader",e.showHeader)}},computed:{getTitle:function(){return"Standards"}}},zt=Xt,Yt=(i("0dee"),i("a523")),Qt=i("a75b"),Zt=i("8654"),te=i("269a"),ee=i.n(te),ie=i("f977"),ae=Object(u["a"])(zt,y,x,!1,null,"34bb4bd2",null),ne=ae.exports;f()(ae,{VBtn:p["a"],VCol:jt["a"],VContainer:Yt["a"],VContent:Qt["a"],VIcon:nt["a"],VRow:Lt["a"],VTextField:Zt["a"]}),ee()(ae,{Scroll:ie["b"]});var oe={components:{Records:ne,Header:C},props:{source:String},data:function(){return{showHeader:!0,showDrawerLeft:!1,hideOverflow:"overflow-hidden"}},created:function(){},methods:{setDrawerStatus:function(t){this.showDrawerLeft=t},toggleHeaderHidden:function(t){this.showHeader=t},changeOverflowStatus:function(t){var e=document.getElementsByTagName("html")[0];t?e.setAttribute("class",this.hideOverflow):e.removeAttribute("class")}}},se=oe,re=(i("6435"),i("7496")),ce=i("f774"),le=Object(u["a"])(se,n,o,!1,null,null,null),ue=le.exports;f()(le,{VApp:re["a"],VNavigationDrawer:ce["a"]});var de=i("8c4f"),fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:i("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},ve=[],me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:i("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,i){return a("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,i){return a("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,i){return a("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},pe=[],he={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},be=he,ge=Object(u["a"])(be,me,pe,!1,null,null,null),Ce=ge.exports;f()(ge,{VCol:jt["a"],VContainer:Yt["a"],VImg:h["a"],VRow:Lt["a"]});var ye={name:"Home",components:{HelloWorld:Ce}},xe=ye,we=Object(u["a"])(xe,fe,ve,!1,null,null,null),_e=we.exports;a["a"].use(de["a"]);var Se=[{path:"/",name:"Home",component:_e},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],ke=new de["a"]({mode:"history",base:"",routes:Se}),Te=ke,je=i("4360"),Ae=i.n(je),Le=i("f309"),Oe=i("fcf4"),Ee={primary:{base:"#27aae1"},secondary:"#004d40",accent:Oe["a"].yellow.lighten2,tertiary:Oe["a"].orange.base,customColor:Oe["a"].pink.base},Re={values:{product:"mdi-dropbox",support:"mdi-lifebuoy",steam:"mdi-steam-box",pc:"mdi-desktop-classic",xbox:"mdi-microsoft-xbox",playstation:"mdi-sony-playstation",switch:"mdi-nintendo-switch"}},Fe=Re,Ie={thresholds:{}},Ve=Ie;a["a"].use(Le["a"]);var De=new Le["a"]({theme:{themes:{light:Ee},options:{customProperties:!0}},iconfont:"mdi",icons:Fe,breakpoint:Ve}),Ne=(i("5363"),i("d1e78"),{data:function(){return{applicationStrings:{connectionErrors:{NOT_FOUND:"The record you are looking for does not exist.",CONNECTION_ERROR:"There is a connection issue",NO_INTERNET:"Your internet connection has been lost"},mainTopNav:{TITLE_1:"Standard",TITLE_2:"Policy",TITLE_3:"Collection",TITLE_4:"Search"}},get globalReadOnlyProperty(){return"Can't touch this!"}}}});i("fb98");a["a"].config.productionTip=!1,a["a"].mixin(Ne),new a["a"]({router:Te,store:Ae.a,vuetify:De,render:function(t){return t(ue)}}).$mount("#app")},"5f26":function(t,e,i){},6435:function(t,e,i){"use strict";var a=i("a186"),n=i.n(a);n.a},"6ff0":function(t,e,i){},"885b":function(t,e,i){"use strict";var a=i("4f8c"),n=i.n(a);n.a},"8ad1":function(t,e,i){},"923e":function(t,e,i){"use strict";var a=i("e062"),n=i.n(a);n.a},"9b19":function(t,e,i){t.exports=i.p+"img/logo.07d1e22e.svg"},a107:function(t,e,i){},a186:function(t,e,i){},bc14:function(t,e,i){"use strict";var a=i("8ad1"),n=i.n(a);n.a},bee1:function(t,e,i){t.exports=i.p+"img/fairsharing-logo.c8194b18.svg"},c114:function(t,e,i){"use strict";var a=i("048b"),n=i.n(a);n.a},ccf2:function(t,e,i){"use strict";var a=i("dd2a"),n=i.n(a);n.a},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},d190:function(t,e,i){"use strict";var a=i("3bd3"),n=i.n(a);n.a},dd2a:function(t,e,i){},e062:function(t,e,i){},ea99:function(t,e,i){},faf9:function(t,e,i){"use strict";var a=i("6ff0"),n=i.n(a);n.a},fb98:function(t,e,i){}});
//# sourceMappingURL=app.a65b78dc.js.map