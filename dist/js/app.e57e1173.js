(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,s=1;s<i.length;s++){var c=i[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},o=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e5d05581"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],i=a[t];if(0!==i)if(i)e.push(i[2]);else{var n=new Promise((function(e,n){i=a[t]=[e,n]}));e.push(i[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=s(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var i=a[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,i[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"031f":function(t,e,i){"use strict";var n=i("dc69"),a=i.n(n);a.a},"0ed8":function(t,e,i){},"0ff8":function(t,e,i){},"102e":function(t,e,i){"use strict";var n=i("719e"),a=i.n(n);a.a},"418d":function(t,e,i){},4360:function(t,e){},4681:function(t,e,i){"use strict";var n=i("418d"),a=i.n(n);a.a},"4a60":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"app"}},[t.$vuetify.breakpoint.smAndDown?i("v-navigation-drawer",{attrs:{app:"",bottom:""},model:{value:t.showDrawerLeft,callback:function(e){t.showDrawerLeft=e},expression:"showDrawerLeft"}}):t._e(),i("transition",{attrs:{name:"fade"}},[t.showHeader?i("Header",{on:{setParentDrawerStatus:t.setDrawerStatus}}):t._e()],1),i("Records",{on:{toggleHeader:t.toggleHeaderHidden,changeOverFlow:t.changeOverflowStatus}})],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{height:"100"}},[t.$vuetify.breakpoint.smAndDown?n("v-app-bar-nav-icon",{on:{click:t.toggleDrawerLeft}}):t._e(),n("v-img",{staticClass:"d-flex flex-grow-0",attrs:{src:i("bee1"),height:"70",contain:""}}),n("v-spacer"),n("nav",[t.$vuetify.breakpoint.sm||t.$vuetify.breakpoint.xs?t._e():n("ul",{attrs:{id:"nav-md-lg-screens"}},[n("li",t._l(t.links,(function(e,i){return n("v-btn",{key:"navBarTopMenuItem_"+i,staticClass:"mr-1 mt-sm-1",class:e.color,attrs:{small:t.$vuetify.breakpoint.mdAndDown,"x-large":t.$vuetify.breakpoint.xlOnly,to:e.link}},[n("span",{staticClass:"white--text"},[t._v(t._s(e.label))])])})),1)])])],1)},r=[],c={name:"Header",data:function(){return{drawerLeft:!1,links:[{label:"Search",link:"/search",color:"blue"},{label:"Standards",link:"/standards",color:"blue"},{label:"Databases",link:"/databases",color:"blue"},{label:"Policies",link:"/policies",color:"blue"},{label:"Collections",link:"/collections",color:"blue"},{label:"Add/Claim content",link:"/new",color:"grey"},{label:"Stats",link:"/summary-statistics",color:"teal darken-2"}]}},methods:{toggleDrawerLeft:function(){this.drawerLeft=!0,this.$emit("setParentDrawerStatus",this.drawerLeft)}}},l=c,u=(i("ccf2"),i("2877")),d=i("6544"),p=i.n(d),f=i("40dc"),v=i("5bc1"),h=i("8336"),m=i("adda"),g=i("2fa4"),C=Object(u["a"])(l,s,r,!1,null,"5be10443",null),b=C.exports;p()(C,{VAppBar:f["a"],VAppBarNavIcon:v["a"],VBtn:h["a"],VImg:m["a"],VSpacer:g["a"]});var y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",[i("h1",{staticClass:"d-none"},[t._v(" Content ")]),i("transition",{attrs:{name:"fade"}},[t.showScrollToTopButton?i("jump-top",{attrs:{"target-object":"scroll-target"}}):t._e()],1),i("v-container",{staticClass:"overflow-y-auto overflow-x-hidden content-custom ",attrs:{fluid:"",id:"scroll-target"}},[i("section",{staticClass:"secondary",attrs:{id:"banner"}},[i("h1",{staticClass:"text-center white--text"},[t._v(" "+t._s(t.getTitle)+" ")]),i("p",{staticClass:"text-center white--text"},[t._v(" "+t._s(t.recordsSubTitles[t.getTitle])+" ")])]),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"d-none d-md-flex mt-2 ml-2",attrs:{cols:"12",lg:"4",md:"4"}},[i("LeftPanel",{class:t.stickToLeft?"left-panel-fixed":"left-panel-default"})],1),i("v-col",{staticClass:"mt-2"},[i("RightContentStackList",{directives:[{name:"scroll",rawName:"v-scroll:#scroll-target",value:t.onScroll,expression:"onScroll",arg:"#scroll-target"}],staticClass:"pb-5 mr-0 mr-md-2"})],1)],1)],1)],1)},x=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",[i("v-card",{staticClass:"pa-2",attrs:{id:"filters-holder",outlined:"",tile:"",elevation:"3"}},[i("h2",{staticClass:"d-none"},[t._v(" Filter List ")]),i("FilterButtons",{attrs:{"md-screens":t.$vuetify.breakpoint.mdAndDown}}),i("v-expansion-panels",{attrs:{multiple:"",flat:"",hover:"",accordion:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.items,(function(e,n){return i("v-expansion-panel",{key:n},[i("v-expansion-panel-header",[t._v("Header "+t._s(e))]),i("v-expansion-panel-content",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1)})),1)],1)],1)},_=[],k=(i("d81d"),i("d3b7"),i("ddb0"),i("2909")),S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(3,(function(e){return i("div",{key:e,staticClass:"d-flex flex-row justify-start mb-1 mb-lg-2"},t._l(t.buttonsGroup[e-1],(function(n,a){return i("v-btn",{key:a,staticClass:"mr-1 mr-lg-2",class:[0===a?"first-child":"flex-1",{"button-style-md-screens":t.mdScreens}],attrs:{color:"primary",outlined:!n.active},on:{click:function(i){return t.selectFilter(a,t.buttonsGroup[e-1])}}},[t._v(t._s(n.title)+" ")])})),1)})),i("div",{staticClass:"d-flex flex-row justify-start mb-1 mb-lg-2"},t._l(t.buttonsRecordsState,(function(e,n){return i("v-tooltip",{key:n,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on;return[i("v-btn",t._g({staticClass:"mr-1 mr-lg-2 ",class:[0===n?"first-child":"flex-1",{"buttons-md-style":t.mdScreens&&0!==n}],attrs:{color:"primary",outlined:!e.active},on:{click:function(e){return t.selectFilter(n,t.buttonsRecordsState)}}},o),[t._v(" "+t._s(e.title)+" ")])]}}],null,!0)},[i("span",[t._v(t._s(e.toolTip))])])})),1)],2)},T=[],A={name:"FilterButtons",props:{mdScreens:null},data:function(){return{buttonsGroup:[[{title:"ALL",active:!0},{title:"RECOMMENDED",active:!1},{title:"NOT RECOMMENDED",active:!1}],[{title:"ALL",active:!0},{title:"PUBLISHED",active:!1},{title:"NOT PUBLISHED",active:!1}],[{title:"ALL",active:!0},{title:"MAINTAINED",active:!1},{title:"NOT MAINTAINED",active:!1}]],buttonsRecordsState:[{title:"ALL",active:!0,toolTip:"Show All Records"},{title:"U",active:!1,toolTip:"Show Uncertain Records"},{title:"D",active:!1,toolTip:"Show Deprecated Records"},{title:"I",active:!1,toolTip:"Show In Development Records"},{title:"R",active:!1,toolTip:"Show Ready Records"}]}},methods:{selectFilter:function(t,e){e.map((function(t){return t.active=!1})),e[t].active=!0}},computed:{getRecordStatus:function(){return this.statusStyles["ready"]}}},L=A,O=(i("9197"),i("3a2f")),j=Object(u["a"])(L,S,T,!1,null,"7b87d824",null),R=j.exports;p()(j,{VBtn:h["a"],VTooltip:O["a"]});var E={name:"LeftPanel",components:{FilterButtons:R},data:function(){return{panel:[],items:5}},created:function(){this.panel["0"]=0},methods:{all:function(){this.panel=Object(k["a"])(Array(this.items).keys()).map((function(t,e){return e}))},none:function(){this.panel=[]}}},D=E,V=(i("c2ac"),i("b0af")),I=i("cd55"),N=i("49e2"),B=i("c865"),H=i("0393"),P=Object(u["a"])(D,w,_,!1,null,"50f5056f",null),$=P.exports;p()(P,{VCard:V["a"],VExpansionPanel:I["a"],VExpansionPanelContent:N["a"],VExpansionPanelHeader:B["a"],VExpansionPanels:H["a"]});var M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("v-btn",{staticClass:"mr-2 mb-10",attrs:{fab:"",color:"primary",bottom:"",right:"",fixed:""},on:{click:t.scrollToTop}},[i("v-icon",[t._v("mdi-arrow-up")])],1)],1)},F=[],U={name:"JumpTop",props:{targetObject:null},methods:{scrollToTop:function(){var t=document.getElementById(this.targetObject);t.scrollTo(top)}}},q=U,J=(i("4681"),i("132d")),W=Object(u["a"])(q,M,F,!1,null,"1283d0a4",null),G=W.exports;p()(W,{VBtn:h["a"],VIcon:J["a"]});var X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("h1",{staticClass:"d-none"},[t._v("Records")]),i("div",{staticStyle:{background:"lightblue",width:"100%",height:"50px",display:"flex","justify-content":"center","align-items":"center"}},[t._v(" place of filter Chip ")]),i("ListController",{staticClass:"mt-2",on:{ChangeListType:t.changeListType}}),t.isColumnList?t._e():i("article",[i("h2",{staticClass:"d-none"},[t._v(" Result ")]),t._l(30,(function(t){return i("section",{key:t,staticClass:"pt-3 pt-lg-4"},[i("RecordsCardStack",{key:t,attrs:{"record-status":t%2===0?"ready":"deprecated"}})],1)}))],2),t.isColumnList?i("v-row",{},t._l(30,(function(t){return i("RecordsCardColumn",{key:t,attrs:{"record-status":t%2===0?"ready":"deprecated"}})})),1):t._e()],1)},z=[],Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isColumnList?t._e():i("v-card",{staticClass:"pa-2 d-flex  align-center flex-column",attrs:{outlined:"",tile:"",hover:t.allowClicking}},[i("v-row",{staticClass:"full-width",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",lg:"12",md:"12",xl:"3"},on:{mouseenter:function(e){t.allowClicking=!0},mouseleave:function(e){t.allowClicking=!1}}},[i("div",{staticClass:"mt-1 ml-2 pr-6 d-flex flex-row align-center justify-start"},[i("circle-holder",{staticClass:"mr-8",attrs:{status:t.RecordStatus}}),i("h3",{staticClass:"max-height ",staticStyle:{width:"60%"}},[i("u",[t._v("Record title example")])])],1)]),i("v-col",{staticClass:"mt-2",attrs:{cols:"12",sm:"4",md:"3",lg:"3",xs:"12",xl:"2"}},[i("section",{staticClass:"ml-2 mb-0 mr-4 d-flex flex-column"},[i("h4",{staticClass:"d-none"},[t._v("select Tag type")]),t._l(t.buttons,(function(e,n){return i("v-btn",{key:n,staticClass:"button-text-color",attrs:{outlined:e.active,text:"",color:e.active?"primary":null},on:{click:function(e){return t.changeActiveItem(n)}}},[t._v(t._s(e.title)+" ")])}))],2)]),i("v-col",{attrs:{sm:"8",md:"9",lg:"9",xs:"12",xl:"7"}},[i("section",{staticClass:"chips-container "},[i("h5",{staticClass:"d-none"},[t._v("Choose Subject , Domain , Taxonomy ")]),i("v-chip-group",{attrs:{column:""}},t._l(t.Chips[t.currentActiveChips],(function(e){return i("v-chip",{key:e.title,attrs:{small:"","text-color":"secondary",color:"secondary",close:e.active,outlined:""},on:{click:function(i){return t.toggleChipActiveness(e)}}},[t._v(t._s(e.title)+" ")])})),1)],1)])],1),i("div",{staticClass:"d-flex flex-row",staticStyle:{width:"70%"}},[i("v-divider",{staticClass:"mt-2"})],1),i("p",{staticClass:"mt-2 description"},[t._v(" "+t._s(t.description)+" ")])],1)},Q=[],K=(i("7db0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"circle"},[i("v-icon",{staticClass:"iconClass",attrs:{size:"50"}},[t._v(t._s(t.getRecordStatus.icon))]),i("span",{style:t.getRecordStatus.backColor,attrs:{id:"innerCircle"}},[i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("b",t._g({attrs:{id:"status-style"}},n),[t._v(t._s(t.getRecordStatus.title))])]}}])},[i("span",[t._v(t._s(t.getRecordStatus.toolTip))])])],1)],1)}),Z=[],tt={name:"CircleHolder",props:{status:null},data:function(){return{statusStyles:{ready:{title:"R",toolTip:"Ready",icon:"mdi-database",backColor:"background: linear-gradient(green, lightgreen)"},deprecated:{title:"D",toolTip:"Deprecated",icon:"mdi-database",backColor:"background: linear-gradient(#8F4309, #a57202)"},uncertain:{title:"U",toolTip:"Uncertain",icon:"mdi-database",backColor:"background: linear-gradient(yellow, yellow)"},inDevelopment:{title:"I",toolTip:"In Development",icon:"mdi-database",backColor:"background: linear-gradient(pink, pink)"}}}},computed:{getRecordStatus:function(){return this.statusStyles[this.status]}}},et=tt,it=(i("923e"),Object(u["a"])(et,K,Z,!1,null,"700f27b6",null)),nt=it.exports;p()(it,{VIcon:J["a"],VTooltip:O["a"]});var at={name:"RecordsCardStack",components:{CircleHolder:nt},props:{isColumnList:{default:!1,type:Boolean},RecordStatus:null},data:function(){return{allowClicking:!1,buttons:[{title:"SUBJECTS",active:!1},{title:"DOMAINS",active:!0},{title:"TAXONOMIES",active:!1}],description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ... ",Chips:{SUBJECTS:[{title:"subject-Chip1",active:!1},{title:"subject-Chip2",active:!1}],DOMAINS:[{title:"domain-Chip1",active:!1},{title:"domain-Chip2",active:!1},{title:"domain-Chip3",active:!1},{title:"domain-Chip4",active:!1}],TAXONOMIES:[{title:"taxonomies-Chip1",active:!1},{title:"taxonomies-Chip2",active:!1},{title:"taxonomies-Chip3",active:!1},{title:"taxonomies-Chip4",active:!1},{title:"taxonomies-Chip5",active:!1},{title:"taxonomies-Chip6",active:!1},{title:"taxonomies-Chip7",active:!1},{title:"taxonomies-Chip8",active:!1},{title:"taxonomies-Chip9",active:!1},{title:"taxonomies-Chip10",active:!1},{title:"taxonomies-Chip11",active:!1},{title:"taxonomies-Chip12",active:!1}]},currentActiveChips:"DOMAINS",vChipActive:"v-chip--active"}},methods:{changeActiveItem:function(t){this.buttons.map((function(t){return t.active=!1})),this.buttons[t].active=!0,this.currentActiveChips=this.buttons[t].title},toggleChipActiveness:function(t){var e=this.Chips[this.currentActiveChips].find((function(e){return e===t}));this.Chips[this.currentActiveChips].map((function(t){t===e&&(t.active=!t.active)}))}}},ot=at,st=(i("102e"),i("cc20")),rt=i("ef9a"),ct=i("62ad"),lt=i("ce7e"),ut=i("0fd9"),dt=Object(u["a"])(ot,Y,Q,!1,null,"c577187e",null),pt=dt.exports;p()(dt,{VBtn:h["a"],VCard:V["a"],VChip:st["a"],VChipGroup:rt["a"],VCol:ct["a"],VDivider:lt["a"],VRow:ut["a"]});var ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex  justify-center"},[i("v-btn-toggle",{attrs:{mandatory:""}},[i("v-btn",[i("v-icon",[t._v("mdi-format-align-left")])],1)],1),i("v-pagination",{attrs:{length:5},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}),i("v-icon",{class:{active:t.isColumnList},attrs:{"x-large":""},on:{click:function(e){return t.changeListType("stackList")}}},[t._v("view_headline")]),i("v-icon",{class:{active:!t.isColumnList},staticStyle:{"font-size":"2.8rem"},attrs:{"x-large":""},on:{click:function(e){return t.changeListType("columnList")}}},[t._v("view_column")])],1)},vt=[],ht={name:"ListController",data:function(){return{page:1,isColumnList:!1}},methods:{changeListType:function(t){this.isColumnList="stackList"!==t,this.$emit("ChangeListType",this.isColumnList)}}},mt=ht,gt=(i("938e"),i("a609")),Ct=i("891e"),bt=Object(u["a"])(mt,ft,vt,!1,null,"5d204c14",null),yt=bt.exports;p()(bt,{VBtn:h["a"],VBtnToggle:gt["a"],VIcon:J["a"],VPagination:Ct["a"]});var xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-col",{staticClass:"mt-1",attrs:{cols:"12",sm:"12",md:"6",lg:"4",xl:"3"}},[i("v-card",{staticClass:"pa-2 d-flex  align-center flex-column",attrs:{outlined:"",tile:"",hover:t.allowClicking}},[i("v-row",{staticClass:"full-width",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"},on:{mouseenter:function(e){t.allowClicking=!0},mouseleave:function(e){t.allowClicking=!1}}},[i("div",{staticClass:" d-flex flex-column align-center justify-center"},[i("circle-holder",{attrs:{status:t.RecordStatus}}),i("h3",{staticClass:"max-height "},[i("u",[t._v("Record title example")])])],1)])],1),i("v-row",[i("v-col",[i("section",{staticClass:"ml-2 mb-0 mr-4 d-flex flex-column"},[i("h4",{staticClass:"d-none"},[t._v("select Tag type")]),t._l(t.buttons,(function(e,n){return i("v-btn",{key:n,staticClass:"button-text-color",attrs:{outlined:e.active,text:"",color:e.active?"primary":null},on:{click:function(e){return t.changeActiveItem(n)}}},[t._v(t._s(e.title)+" ")])}))],2)])],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",[i("section",{staticClass:"chips-container "},[i("h5",{staticClass:"d-none"},[t._v("Choose Subject , Domain , Taxonomy ")]),i("v-chip-group",{attrs:{column:""}},t._l(t.Chips[t.currentActiveChips],(function(e){return i("v-chip",{key:e.title,attrs:{small:"","text-color":"secondary",color:"secondary",close:e.active,outlined:""},on:{click:function(i){return t.toggleChipActiveness(e)}}},[t._v(t._s(e.title)+" ")])})),1)],1)])],1),i("div",{staticClass:"d-flex flex-row",staticStyle:{width:"70%"}},[i("v-divider",{staticClass:"mt-2"})],1),i("p",{staticClass:"ma-2 description text-justify"},[t._v(" "+t._s(t.description)+" ")])],1)],1)},wt=[],_t={name:"RecordsCardColumn",components:{CircleHolder:nt},props:{isColumnList:{default:!1,type:Boolean},RecordStatus:null},data:function(){return{allowClicking:!1,buttons:[{title:"SUBJECTS",active:!1},{title:"DOMAINS",active:!0},{title:"TAXONOMIES",active:!1}],description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ... ",Chips:{SUBJECTS:[{title:"subject-Chip1",active:!1},{title:"subject-Chip2",active:!1}],DOMAINS:[{title:"domain-Chip1",active:!1},{title:"domain-Chip2",active:!1},{title:"domain-Chip3",active:!1},{title:"domain-Chip4",active:!1}],TAXONOMIES:[{title:"taxonomies-Chip1",active:!1},{title:"taxonomies-Chip2",active:!1},{title:"taxonomies-Chip3",active:!1},{title:"taxonomies-Chip4",active:!1},{title:"taxonomies-Chip5",active:!1},{title:"taxonomies-Chip6",active:!1},{title:"taxonomies-Chip7",active:!1},{title:"taxonomies-Chip8",active:!1},{title:"taxonomies-Chip9",active:!1},{title:"taxonomies-Chip10",active:!1},{title:"taxonomies-Chip11",active:!1},{title:"taxonomies-Chip12",active:!1}]},currentActiveChips:"DOMAINS",vChipActive:"v-chip--active"}},methods:{changeActiveItem:function(t){this.buttons.map((function(t){return t.active=!1})),this.buttons[t].active=!0,this.currentActiveChips=this.buttons[t].title},toggleChipActiveness:function(t){var e=this.Chips[this.currentActiveChips].find((function(e){return e===t}));this.Chips[this.currentActiveChips].map((function(t){t===e&&(t.active=!t.active)}))}}},kt=_t,St=(i("031f"),Object(u["a"])(kt,xt,wt,!1,null,"486a84b2",null)),Tt=St.exports;p()(St,{VBtn:h["a"],VCard:V["a"],VChip:st["a"],VChipGroup:rt["a"],VCol:ct["a"],VDivider:lt["a"],VRow:ut["a"]});var At={name:"RightContentList",components:{RecordsCardColumn:Tt,ListController:yt,RecordsCardStack:pt},data:function(){return{isColumnList:!1}},methods:{changeListType:function(t){this.isColumnList=t}}},Lt=At,Ot=(i("f520"),Object(u["a"])(Lt,X,z,!1,null,"4361c824",null)),jt=Ot.exports;p()(Ot,{VRow:ut["a"]});var Rt={name:"Records",components:{RightContentStackList:jt,JumpTop:G,LeftPanel:$},data:function(){return{offsetTop:0,stickToLeft:!1,bodyOverflowActive:!0,hideOverflow:"overflow-hidden",showScrollToTopButton:!1,showHeader:!0,showDrawerLeft:!1,recordsSubTitles:{Standards:"The standards in FAIRsharing are manually curated from a variety of sources, including BioPortal, MIBBI and the Equator Network.",Collections:"Collections group together one or more types of resource (standard, database or policy) by domain, project or organisation. A Recommendation is a core-set of resources that are selected or endorsed by data policies from journals, funders or other organizations.",Databases:"A catalogue of databases, described according to the BioDBcore guidelines, along with the standards used within them; partly compiled with the support of Oxford University Press (NAR Database Issue and DATABASE Journal).",Policies:"FAIRsharing policies: A catalogue of data preservation, management and sharing policies from international funding agencies, regulators and journals.",Search:"Search the FAIRsharing records using advanced filtering"}}},created:function(){this.$emit("changeOverFlow",!0)},methods:{onScroll:function(t){var e=this;this.offsetTop=t.target.scrollTop,this.offsetTop>105?(e.stickToLeft=!0,e.showHeader=!1):(e.stickToLeft=!1,e.showHeader=!0),this.offsetTop>500?e.showScrollToTopButton=!0:e.showScrollToTopButton=!1,this.$emit("toggleHeader",e.showHeader)}},computed:{getTitle:function(){return"Standards"}}},Et=Rt,Dt=(i("d188"),i("a523")),Vt=i("a75b"),It=i("269a"),Nt=i.n(It),Bt=i("f977"),Ht=Object(u["a"])(Et,y,x,!1,null,"44fc7f9e",null),Pt=Ht.exports;p()(Ht,{VCol:ct["a"],VContainer:Dt["a"],VContent:Vt["a"],VRow:ut["a"]}),Nt()(Ht,{Scroll:Bt["b"]});var $t={components:{Records:Pt,Header:b},props:{source:String},data:function(){return{showHeader:!0,showDrawerLeft:!1,hideOverflow:"overflow-hidden"}},created:function(){},methods:{setDrawerStatus:function(t){this.showDrawerLeft=t},toggleHeaderHidden:function(t){this.showHeader=t},changeOverflowStatus:function(t){var e=document.getElementsByTagName("html")[0];t?e.setAttribute("class",this.hideOverflow):e.removeAttribute("class")}}},Mt=$t,Ft=(i("6435"),i("7496")),Ut=i("f774"),qt=Object(u["a"])(Mt,a,o,!1,null,null,null),Jt=qt.exports;p()(qt,{VApp:Ft["a"],VNavigationDrawer:Ut["a"]});var Wt=i("9483");Object(Wt["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Gt=i("8c4f"),Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:i("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},zt=[],Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:i("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,i){return n("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,i){return n("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,i){return n("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},Qt=[],Kt={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},Zt=Kt,te=Object(u["a"])(Zt,Yt,Qt,!1,null,null,null),ee=te.exports;p()(te,{VCol:ct["a"],VContainer:Dt["a"],VImg:m["a"],VRow:ut["a"]});var ie={name:"Home",components:{HelloWorld:ee}},ne=ie,ae=Object(u["a"])(ne,Xt,zt,!1,null,null,null),oe=ae.exports;n["a"].use(Gt["a"]);var se=[{path:"/",name:"Home",component:oe},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],re=new Gt["a"]({mode:"history",base:"",routes:se}),ce=re,le=i("4360"),ue=i.n(le),de=i("f309"),pe=i("fcf4"),fe={primary:{base:"#27aae1"},secondary:"#004d40",accent:pe["a"].yellow.lighten2,tertiary:pe["a"].orange.base,customColor:pe["a"].pink.base},ve={values:{product:"mdi-dropbox",support:"mdi-lifebuoy",steam:"mdi-steam-box",pc:"mdi-desktop-classic",xbox:"mdi-microsoft-xbox",playstation:"mdi-sony-playstation",switch:"mdi-nintendo-switch"}},he=ve,me={thresholds:{}},ge=me;n["a"].use(de["a"]);var Ce=new de["a"]({theme:{themes:{light:fe},options:{customProperties:!0}},iconfont:"mdi",icons:he,breakpoint:ge}),be=(i("5363"),i("d1e78"),{data:function(){return{applicationStrings:{connectionErrors:{NOT_FOUND:"The record you are looking for does not exist.",CONNECTION_ERROR:"There is a connection issue",NO_INTERNET:"Your internet connection has been lost"},mainTopNav:{TITLE_1:"Standard",TITLE_2:"Policy",TITLE_3:"Collection",TITLE_4:"Search"}},get globalReadOnlyProperty(){return"Can't touch this!"}}}});i("85a1");n["a"].config.productionTip=!1,n["a"].mixin(be),new n["a"]({router:ce,store:ue.a,vuetify:Ce,render:function(t){return t(Jt)}}).$mount("#app")},6435:function(t,e,i){"use strict";var n=i("a186"),a=i.n(n);a.a},6854:function(t,e,i){},"719e":function(t,e,i){},"85a1":function(t,e,i){},9197:function(t,e,i){"use strict";var n=i("0ed8"),a=i.n(n);a.a},"923e":function(t,e,i){"use strict";var n=i("e062"),a=i.n(n);a.a},"938e":function(t,e,i){"use strict";var n=i("6854"),a=i.n(n);a.a},9396:function(t,e,i){},"9b19":function(t,e,i){t.exports=i.p+"img/logo.07d1e22e.svg"},a186:function(t,e,i){},bee1:function(t,e,i){t.exports=i.p+"img/fairsharing-logo.c8194b18.svg"},c2ac:function(t,e,i){"use strict";var n=i("0ff8"),a=i.n(n);a.a},ccf2:function(t,e,i){"use strict";var n=i("dd2a"),a=i.n(n);a.a},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},d188:function(t,e,i){"use strict";var n=i("9396"),a=i.n(n);a.a},dc69:function(t,e,i){},dd2a:function(t,e,i){},e062:function(t,e,i){},f520:function(t,e,i){"use strict";var n=i("4a60"),a=i.n(n);a.a}});
//# sourceMappingURL=app.e57e1173.js.map