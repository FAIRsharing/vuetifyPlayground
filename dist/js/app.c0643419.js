(function(t){function e(e){for(var s,o,n=e[0],l=e[1],c=e[2],d=0,u=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);m&&m(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function o(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7c4c14e2"}[t]+".js"}function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=o(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",c.name="ChunkLoadError",c.type=s,c.request=i,a[1](c)}r[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4360:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[t.$vuetify.breakpoint.smAndDown?a("v-navigation-drawer",{attrs:{app:"",bottom:""},model:{value:t.showDrawerLeft,callback:function(e){t.showDrawerLeft=e},expression:"showDrawerLeft"}}):t._e(),a("transition",{attrs:{name:"fade"}},[t.showHeader?a("Header",{on:{setParentDrawerStatus:t.setDrawerStatus}}):t._e()],1),a("Record")],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app-bar",{attrs:{height:"100"}},[t.$vuetify.breakpoint.smAndDown?s("v-app-bar-nav-icon",{on:{click:t.toggleDrawerLeft}}):t._e(),s("v-img",{staticClass:"d-flex flex-grow-0",attrs:{src:a("bee1"),height:"70",contain:""}}),s("v-spacer"),s("nav",[t.$vuetify.breakpoint.sm||t.$vuetify.breakpoint.xs?t._e():s("ul",{attrs:{id:"nav-md-lg-screens"}},[s("li",t._l(t.links,(function(e,a){return s("v-btn",{key:"navBarTopMenuItem_"+a,staticClass:"mr-1 mt-sm-1",class:e.color,attrs:{small:t.$vuetify.breakpoint.mdAndDown,"x-large":t.$vuetify.breakpoint.xlOnly,to:e.link}},[s("span",{staticClass:"white--text"},[t._v(t._s(e.label))])])})),1)])])],1)},n=[],l={name:"Header",data:function(){return{drawerLeft:!1,links:[{label:"Search",link:"/search",color:"blue"},{label:"Standards",link:"/standards",color:"blue"},{label:"Databases",link:"/databases",color:"blue"},{label:"Policies",link:"/policies",color:"blue"},{label:"Collections",link:"/collections",color:"blue"},{label:"Add/Claim content",link:"/new",color:"grey"},{label:"Stats",link:"/summary-statistics",color:"teal darken-2"}]}},methods:{toggleDrawerLeft:function(){this.drawerLeft=!0,this.$emit("setParentDrawerStatus",this.drawerLeft)}}},c=l,d=(a("ccf2"),a("2877")),m=a("6544"),u=a.n(m),f=a("40dc"),p=a("5bc1"),v=a("8336"),b=a("adda"),h=a("2fa4"),g=Object(d["a"])(c,o,n,!1,null,"5be10443",null),y=g.exports;u()(g,{VAppBar:f["a"],VAppBarNavIcon:p["a"],VBtn:v["a"],VImg:b["a"],VSpacer:h["a"]});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("h1",{staticClass:"d-none"},[t._v(" Content ")]),a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",lg:"12",md:"12",xl:"12"}},[a("v-card",{staticClass:"pa-4",attrs:{outlined:"",tile:"",elevation:"1"}},[t.fairsharingRecord.isRecommended?a("Ribbon",{attrs:{title:"RECOMMENDED"}}):t._e(),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"d-flex flex-row align-center",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"8",xl:"8"}},[a("circle-holder",{staticClass:"mr-8",attrs:{status:"ready"}}),a("h3",[t._v("BRENDA tissue / enzyme source")])],1),a("v-col",{staticClass:"d-flex flex-row align-center",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"4",xl:"4"}},[a("h3",{staticClass:"mr-1"},[t._v("doi: ")]),a("router-link",{style:t.showLinkStyle?"text-decoration: underline":"text-decoration: none",attrs:{text:"",small:"",to:t.fairsharingRecord.doi},nativeOn:{mouseenter:function(e){t.showLinkStyle=!0},mouseleave:function(e){t.showLinkStyle=!1}}},[t._v(" "+t._s(t.fairsharingRecord.doi)+" ")])],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[a("v-card",{staticClass:"pa-4 mt-5 d-flex flex-column",attrs:{outlined:"",tile:"",elevation:"1"}},[a("h4",{staticClass:"title-style"},[a("span",{staticClass:"triangle-bottomLeft"}),t._v("GENERAL INFO"),a("span",{staticClass:"triangle-bottomRight"})]),a("section",[a("div",{staticClass:"d-flex mt-2"},[a("b",{staticClass:"mr-2"},[t._v("Abbreviation:")]),a("p",[t._v(t._s(t.fairsharingRecord.abbreviation))])]),a("div",{staticClass:"d-flex"},[a("b",{staticClass:"mr-2"},[t._v("Registry:")]),a("p",[t._v(t._s(t.fairsharingRecord.registry))])]),a("div",{staticClass:"d-flex"},[a("b",{staticClass:"mr-2"},[t._v("Description:")]),a("p",[t._v(t._s(t.fairsharingRecord.description))])]),a("div",{staticClass:"d-flex flex-wrap"},[a("b",{staticClass:"mr-2"},[t._v("Countries developed this resource:")]),t._l(20,(function(e){return a("v-tooltip",{key:e,attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var r=s.on;return[a("button",t._g({staticClass:"mb-2 mr-2"},r),[a("country-flag",{attrs:{country:e%2===0?"de":"it",size:"big"}})],1)]}}],null,!0)},[a("span",{staticClass:"white--text"},[t._v(t._s(e%2===0?"Germany":"Italy"))])])}))],2)])])],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pr-md-2 pr-sm-0",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[a("v-card",{staticClass:"pa-4 mt-5 d-flex flex-column",attrs:{outlined:"",tile:"",elevation:"1"}},[a("h4",{staticClass:"title-style"},[a("span",{staticClass:"triangle-bottomLeft"}),t._v("SUPPORT"),a("span",{staticClass:"triangle-bottomRight"})]),a("p",[t._v("its some description")]),a("i",[t._v("some more info")])])],1),a("v-col",{staticClass:"pl-md-2 pl-sm-0",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[a("v-card",{staticClass:"pa-4 mt-5 d-flex flex-column",attrs:{outlined:"",tile:"",elevation:"1"}},[a("h4",{staticClass:"title-style"},[a("span",{staticClass:"triangle-bottomLeft"}),t._v("META INFO"),a("span",{staticClass:"triangle-bottomRight"})]),a("section",[a("div",{staticClass:"d-flex mt-2 flex-wrap"},[a("b",{staticClass:"mr-2"},[t._v("Taxonomies:")]),t._l(t.fairsharingRecord.taxonomies,(function(e){return a("v-chip",{key:e.label,staticClass:"mr-2 mb-2 ",attrs:{color:"primary",label:"",outlined:"","text-color":"primary"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-label")]),t._v(" "+t._s(e.label)+" ")],1)}))],2),a("div",{staticClass:"d-flex mt-2 flex-wrap"},[a("b",{staticClass:"mr-8"},[t._v("Domains:")]),t._l(t.fairsharingRecord.domains,(function(e){return a("v-chip",{key:e.label,staticClass:"mr-2 mb-2",attrs:{color:"secondary",label:"",outlined:"","text-color":"secondary"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-label")]),t._v(" "+t._s(e.label)+" ")],1)}))],2),a("div",{staticClass:"d-flex mt-2 flex-wrap"},[a("b",{staticClass:"mr-8"},[t._v("Subjects:")]),t._l(t.fairsharingRecord.subjects,(function(e){return a("v-chip",{key:e.label,staticClass:"mr-2 mb-2",attrs:{color:"accent",label:"",outlined:"","text-color":"accent"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-label")]),t._v(" "+t._s(e.label)+" ")],1)}))],2)])])],1),a("v-col",{staticClass:"pr-md-2 pr-sm-0",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[a("v-card",{staticClass:"pa-4 mt-5 d-flex flex-column",attrs:{outlined:"",tile:"",elevation:"1"}},[a("h4",{staticClass:"title-style"},[a("span",{staticClass:"triangle-bottomLeft"}),t._v("GRANTS"),a("span",{staticClass:"triangle-bottomRight"})]),a("p",[t._v("its some description")]),a("i",[t._v("some more info")])])],1),a("v-col",{staticClass:"pl-md-2 pl-sm-0",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[a("v-card",{staticClass:"pa-4 mt-5 d-flex flex-column",attrs:{outlined:"",tile:"",elevation:"1"}},[a("h4",{staticClass:"title-style"},[a("span",{staticClass:"triangle-bottomLeft"}),t._v("ORGANISATION"),a("span",{staticClass:"triangle-bottomRight"})]),a("p",[t._v("its some description")]),a("i",[t._v("some more info")])])],1),a("v-col",{staticClass:"pr-md-2 pr-sm-0",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[a("v-card",{staticClass:"pa-5 mt-5 d-flex flex-column",attrs:{outlined:"",tile:"",elevation:"1"}},[a("h4",{staticClass:"title-style"},[a("span",{staticClass:"triangle-bottomLeft"}),t._v("LICENCES"),a("span",{staticClass:"triangle-bottomRight"})]),a("p",[t._v("its some description")]),a("i",[t._v("some more info")])])],1),a("v-col",{staticClass:"pl-md-2 pl-sm-0",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[a("v-card",{staticClass:"pa-4 mt-5 d-flex flex-column",attrs:{outlined:"",tile:"",elevation:"1"}},[a("h4",{staticClass:"title-style"},[a("span",{staticClass:"triangle-bottomLeft"}),t._v("MAINTAINERS"),a("span",{staticClass:"triangle-bottomRight"})]),a("p",[t._v("its some description")]),a("i",[t._v("some more info")])])],1),a("v-col",{staticClass:"pr-md-2 pr-sm-0",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[a("v-card",{staticClass:"pa-4 mt-5 d-flex flex-column",attrs:{outlined:"",tile:"",elevation:"1"}},[a("h4",{staticClass:"title-style"},[a("span",{staticClass:"triangle-bottomLeft"}),t._v("ASSOCIATED RECORDS"),a("span",{staticClass:"triangle-bottomRight"})]),a("p",[t._v("its some description")]),a("i",[t._v("some more info")])])],1),a("v-col",{staticClass:"pl-md-2 pl-sm-0",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[a("v-card",{staticClass:"pa-4 mt-5 d-flex flex-column",attrs:{outlined:"",tile:"",elevation:"1"}},[a("h4",{staticClass:"title-style"},[a("span",{staticClass:"triangle-bottomLeft"}),t._v("PUBLICATIONS"),a("span",{staticClass:"triangle-bottomRight"})]),a("p",[t._v("its some description")]),a("i",[t._v("some more info")])])],1)],1)],1)],1)],1),a("Footer")],1)],1)},C=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ribbon"},[a("span",[t._v(t._s(t.title))])])},x=[],R={name:"Ribbon",props:{title:{type:String,default:null}}},k=R,A=(a("bc14"),Object(d["a"])(k,w,x,!1,null,"8ad3f3f4",null)),L=A.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"circle"},[a("v-icon",{staticClass:"iconClass",attrs:{size:"50"}},[t._v(t._s(t.getRecordStatus.icon))]),a("span",{style:t.getRecordStatus.backColor,attrs:{id:"innerCircle"}},[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("b",t._g({attrs:{id:"status-style"}},s),[t._v(t._s(t.getRecordStatus.title))])]}}])},[a("span",[t._v(t._s(t.getRecordStatus.toolTip))])])],1)],1)},E=[],T={name:"CircleHolder",props:{status:null},data:function(){return{statusStyles:{ready:{title:"R",toolTip:"Ready",icon:"mdi-database",backColor:"background: linear-gradient(green, lightgreen)"},deprecated:{title:"D",toolTip:"Deprecated",icon:"mdi-database",backColor:"background: linear-gradient(#8F4309, #a57202)"},uncertain:{title:"U",toolTip:"Uncertain",icon:"mdi-database",backColor:"background: linear-gradient(yellow, yellow)"},inDevelopment:{title:"I",toolTip:"In Development",icon:"mdi-database",backColor:"background: linear-gradient(pink, pink)"}}}},computed:{getRecordStatus:function(){return this.statusStyles[this.status]}}},D=T,I=(a("923e"),a("132d")),O=a("3a2f"),N=Object(d["a"])(D,S,E,!1,null,"700f27b6",null),j=N.exports;u()(N,{VIcon:I["a"],VTooltip:O["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("ul",[a("h4",[t._v("Developed by")]),a("li",[a("a",{attrs:{href:"/communities#team",target:"_blank"}},[t._v("The FAIRsharing team")])]),a("li",[a("a",{attrs:{href:"http://www.oerc.ox.ac.uk",target:"_blank"}},[t._v("Oxford e-Research Centre")])]),a("li",[a("a",{attrs:{href:"http://www.ox.ac.uk",target:"_blank"}},[t._v("University of Oxford")])])])]),a("v-col",{attrs:{cols:"3"}},[a("ul",[a("h4",{attrs:{id:"contact-info"}},[t._v("Contact Us")]),a("li",[a("a",{attrs:{href:"mailto:contact@fairsharing.org?subject=FAIRsharing Issue"}},[a("i",{staticClass:"fa fa-envelope-o"}),t._v(" Email us for all enquiries")])]),a("li",[a("a",{attrs:{href:"https://www.facebook.com/fairsharing",target:"_blank"}},[a("i",{staticClass:"fa fa-facebook-official"}),t._v(" Facebook")])]),a("li",[a("a",{attrs:{href:"https://www.twitter.com/fairsharing_org",target:"_blank"}},[a("i",{staticClass:"fa fa-twitter"}),t._v(" Twitter")])])])]),a("v-col",{attrs:{cols:"3"}},[a("ul",[a("h4",{attrs:{id:"contact-info2"}},[t._v("Support Us")]),a("li",[a("a",{attrs:{href:"https://www.facebook.com/fairsharing",target:"_blank"}},[a("i",{staticClass:"fa fa-facebook-official"}),t._v(" Facebook")])]),a("li",[a("a",{attrs:{href:"https://www.twitter.com/fairsharing_org",target:"_blank"}},[a("i",{staticClass:"fa fa-twitter"}),t._v(" Twitter")])])])]),a("v-col",{attrs:{cols:"3"}},[a("ul",[a("h4",{attrs:{id:"about-info"}},[t._v("About FAIRsharing")]),a("li",[a("a",{attrs:{id:"tour-link",href:"#"}},[t._v("Take a Tour")])]),a("li",[a("a",{attrs:{href:"/communities"}},[t._v("Community")])]),a("li",[a("a",{attrs:{href:"/stakeholders"}},[t._v("Stakeholders")])]),a("li",[a("a",{attrs:{href:"/timeline"}},[t._v("Timeline")])]),a("li",[a("a",{attrs:{href:"/licence"}},[t._v("API and data licence")])]),a("li",[a("a",{attrs:{href:"/terms"}},[t._v("Terms of use")])]),a("li",[a("a",{attrs:{href:"/educational/#faq10-1"}},[t._v("How to cite us")])]),a("li",[a("a",{attrs:{href:"/privacy"}},[t._v("Privacy policy")])])])]),a("div",{staticClass:"d-flex flex-row justify-center align-center",staticStyle:{width:"100%"}},[t._v(" © FAIRsharing 2009-Present | Licensed under "),a("a",{attrs:{href:"http://creativecommons.org/licenses/by-sa/4.0/",alt:"View License",target:"_blank"}},[t._v("Creative Commons by Share Alike 4.0 International")]),t._v(" | Designed by "),a("a",{attrs:{href:"http://www.antarctic-design.co.uk",target:"_blank"}},[t._v("Antarctic Design")]),a("br"),a("a",{attrs:{href:"/licence"}},[a("img",{attrs:{src:"https://fairsharing.org/static/img/home/FAIRsharingCC-BY-SA.png"}})])])],1)},F=[],V={name:"Footer"},P=V,M=a("62ad"),H=a("0fd9"),$=Object(d["a"])(P,B,F,!1,null,"a5937f28",null),G=$.exports;u()($,{VCol:M["a"],VRow:H["a"]});var z=a("eea2"),U={name:"Record",components:{Footer:G,CircleHolder:j,Ribbon:L,CountryFlag:z["a"]},data:function(){return{showLinkStyle:!1,showScrollToTopButton:!1,fairsharingRecord:{registry:"standard",type:"terminology_artefact",doi:"10.25504/FAIRsharing.1414v8",status:"ready",name:"BRENDA tissue / enzyme source",abbreviation:"BTO",description:"A structured controlled vocabulary for the source of an enzyme. It comprises terms for tissues, cell lines, cell types and cell cultures from uni- and multicellular organisms.",homepage:"http://www.brenda-enzymes.info",countries:[{name:"Germany"}],metadata:{doi:"10.25504/FAIRsharing.1414v8",name:"BRENDA tissue / enzyme source",status:"ready",contacts:[{contact_name:"BrendaTissue Administrators",contact_email:"a.chang@tu-bs.de"}],homepage:"http://www.brenda-enzymes.info",identifier:2,description:"A structured controlled vocabulary for the source of an enzyme. It comprises terms for tissues, cell lines, cell types and cell cultures from uni- and multicellular organisms.",abbreviation:"BTO",year_creation:1991},taxonomies:[{label:"All"}],domains:[{label:"Reaction data"},{label:"Cell"},{label:"Enzyme"},{label:"Organ"}],subjects:[{label:"Life Science"},{label:"Ontology and Terminology"},{label:"Enzymology"}],grants:[{name:"R01 GM071872"}],isRecommended:!0,legacyIds:["bsg-000063","bsg-s000063"],licences:[{name:"License agreement for users of BRENDA"}],maintainers:[],organisations:[{name:"The Federal Ministry of Education and Research (BMBF)"},{name:"European Union, Free European Life-Science Information and Computational Services (FELICS)"},{name:"European Union, Serving Life-science Information for the Next Generation (SLING)"},{name:"BRENDA Administrators"},{name:"Ministry of Science and Culture of Lower Saxony, Hannover, Germany"},{name:"National Institutes of Health (NIH), Bethesda, MD, USA"}],publications:[{title:"The BRENDA Tissue Ontology (BTO): the first all-integrating ontology of all organisms for enzyme sources."},{title:"BRENDA in 2019: a European ELIXIR core data resource."},{title:"BRENDA, the enzyme database: updates and major new developments."},{title:"BRENDA in 2015: exciting developments in its 25th year of existence."},{title:"BRENDA in 2013: integrated reactions, kinetic data, enzyme function data, improved disease classification: new options and contents in BRENDA."}],recordAssociations:[{linkedRecord:{name:"FAANG metadata experiment specification standard",id:222,registry:"standard"},recordAssocLabel:"related_to"},{linkedRecord:{name:"Fission Yeast Phenotype Ontology",id:340,registry:"standard"},recordAssocLabel:"related_to"},{linkedRecord:{name:"Investigation Study Assay Tabular",id:1140,registry:"standard"},recordAssocLabel:"related_to"},{linkedRecord:{name:"Ontology for Parasite LifeCycle",id:186,registry:"standard"},recordAssocLabel:"related_to"},{linkedRecord:{name:"FAANG metadata sample specification standard",id:648,registry:"standard"},recordAssocLabel:"related_to"},{linkedRecord:{name:"PRIDE XML Format",id:480,registry:"standard"},recordAssocLabel:"related_to"}],reverseRecordAssociations:[{fairsharingRecord:{name:"ChEMBL",id:1420,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"neXtProt",id:1540,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"Stem Cell Discovery Engine",id:1547,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"MetaboLights",id:1570,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"BRENDA",id:1648,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"SABIO-RK Biochemical Reaction Kinetics Database",id:1750,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"The Global Proteome Machine Database",id:1809,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"Biological General Repository for Interaction Datasets",id:1888,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"ReMap",id:2080,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"SIGnaling Network Open Resource",id:2084,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"Immune Epitope Database",id:2206,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"Target Central Resource Database",id:2224,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"OBO Foundry",id:2460,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"Bovine Genome Database",id:2493,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"BovineMine",id:2576,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"Chickspress",id:2726,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"miRwayDB",id:2729,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"TISSUES",id:2730,registry:"database"},recordAssocLabel:"implements"},{fairsharingRecord:{name:"LEAFDATA",id:2731,registry:"database"},recordAssocLabel:"implements"}],reviews:[]}}},methods:{}},q=U,W=(a("ca4f"),a("b0af")),Y=a("cc20"),X=a("a523"),J=a("a75b"),K=Object(d["a"])(q,_,C,!1,null,"6155c2df",null),Q=K.exports;u()(K,{VCard:W["a"],VChip:Y["a"],VCol:M["a"],VContainer:X["a"],VContent:J["a"],VIcon:I["a"],VRow:H["a"],VTooltip:O["a"]});var Z={components:{Record:Q,Header:y},props:{source:String},data:function(){return{showHeader:!0,showDrawerLeft:!1,hideOverflow:"overflow-hidden"}},created:function(){},methods:{setDrawerStatus:function(t){this.showDrawerLeft=t},toggleHeaderHidden:function(t){this.showHeader=t},changeOverflowStatus:function(t){var e=document.getElementsByTagName("html")[0];t?e.setAttribute("class",this.hideOverflow):e.removeAttribute("class")}}},tt=Z,et=(a("6435"),a("7496")),at=a("f774"),st=Object(d["a"])(tt,r,i,!1,null,null,null),rt=st.exports;u()(st,{VApp:et["a"],VNavigationDrawer:at["a"]});a("d3b7");var it=a("8c4f"),ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},nt=[],lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{staticClass:"text-center"},[s("v-col",{attrs:{cols:"12"}},[s("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),s("v-col",{staticClass:"mb-4"},[s("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),s("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),s("br"),t._v("please join our online "),s("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),s("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),s("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),s("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),s("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),s("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),s("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},ct=[],dt={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},mt=dt,ut=Object(d["a"])(mt,lt,ct,!1,null,null,null),ft=ut.exports;u()(ut,{VCol:M["a"],VContainer:X["a"],VImg:b["a"],VRow:H["a"]});var pt={name:"Home",components:{HelloWorld:ft}},vt=pt,bt=Object(d["a"])(vt,ot,nt,!1,null,null,null),ht=bt.exports;s["a"].use(it["a"]);var gt=[{path:"/",name:"Home",component:ht},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],yt=new it["a"]({mode:"history",base:"",routes:gt}),_t=yt,Ct=a("4360"),wt=a.n(Ct),xt=a("f309"),Rt=a("fcf4"),kt={primary:{base:"#27aae1"},secondary:"#004d40",accent:"#800D10",tertiary:Rt["a"].orange.base,customColor:Rt["a"].pink.base},At={values:{product:"mdi-dropbox",support:"mdi-lifebuoy",steam:"mdi-steam-box",pc:"mdi-desktop-classic",xbox:"mdi-microsoft-xbox",playstation:"mdi-sony-playstation",switch:"mdi-nintendo-switch"}},Lt=At,St={thresholds:{}},Et=St;s["a"].use(xt["a"]);var Tt=new xt["a"]({theme:{themes:{light:kt},options:{customProperties:!0}},iconfont:"mdi",icons:Lt,breakpoint:Et}),Dt=(a("5363"),a("d1e78"),{data:function(){return{applicationStrings:{connectionErrors:{NOT_FOUND:"The record you are looking for does not exist.",CONNECTION_ERROR:"There is a connection issue",NO_INTERNET:"Your internet connection has been lost"},mainTopNav:{TITLE_1:"Standard",TITLE_2:"Policy",TITLE_3:"Collection",TITLE_4:"Search"}},get globalReadOnlyProperty(){return"Can't touch this!"}}}});a("fb98");s["a"].config.productionTip=!1,s["a"].mixin(Dt),new s["a"]({router:_t,store:wt.a,vuetify:Tt,render:function(t){return t(rt)}}).$mount("#app")},6435:function(t,e,a){"use strict";var s=a("a186"),r=a.n(s);r.a},"8ad1":function(t,e,a){},"923e":function(t,e,a){"use strict";var s=a("e062"),r=a.n(s);r.a},"9b19":function(t,e,a){t.exports=a.p+"img/logo.07d1e22e.svg"},a186:function(t,e,a){},b5d7:function(t,e,a){},bc14:function(t,e,a){"use strict";var s=a("8ad1"),r=a.n(s);r.a},bee1:function(t,e,a){t.exports=a.p+"img/fairsharing-logo.c8194b18.svg"},ca4f:function(t,e,a){"use strict";var s=a("b5d7"),r=a.n(s);r.a},ccf2:function(t,e,a){"use strict";var s=a("dd2a"),r=a.n(s);r.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},dd2a:function(t,e,a){},e062:function(t,e,a){},fb98:function(t,e,a){}});
//# sourceMappingURL=app.c0643419.js.map