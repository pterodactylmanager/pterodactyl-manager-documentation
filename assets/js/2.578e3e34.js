(window.webpackJsonp=window.webpackJsonp||[]).push([[2,20,29],{312:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"j",(function(){return o})),n.d(e,"i",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return p})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return v})),n.d(e,"c",(function(){return m})),n.d(e,"k",(function(){return b}));n(26),n(51),n(179),n(73),n(107),n(49),n(104),n(50),n(314),n(70),n(315),n(52);var r=n(108),i=/#.*$/,s=/\.(md|html)$/,a=/\/$/,o=/^(https?:|mailto:|tel:)/;function l(t){return decodeURI(t).replace(i,"").replace(s,"")}function u(t){return o.test(t)}function c(t){return/^mailto:/.test(t)}function p(t){return/^tel:/.test(t)}function h(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=l(t);return a.test(r)?t:r+".html"+n}function f(t,e){var n=t.hash,r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&l(t.path)===l(e)}function d(t,e,n){n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=l(e),i=0;i<t.length;i++)if(l(t[i].path)===r)return Object.assign({},t[i],{type:"page",path:h(e)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function v(t,e,n,i){var s=n.pages,a=n.themeConfig,o=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||o.sidebar||a.sidebar))return function(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var l=o.sidebar||a.sidebar;if(l){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t.path,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(n))return{base:n,config:e[n]};var r;return{}}(e,l),c=u.base,p=u.config;return p?p.map((function(t){return function t(e,n,i,s){if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});s&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var a=e.children||[],o=e.versions||[];return Object(r.a)({type:"group"},e,{children:a.map((function(e){return t(e,n,i,!0)})),collapsable:!1!==e.collapsable,versions:o.map((function(s){return Object(r.a)({},s,{status:s.name===e.currentVersion?"current":s.status,children:s.children.map((function(r){return t(e.path+s.name+r,n,i,!0)}))})}))})}(t,s,c)})):[]}return[]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},313:function(t,e,n){},317:function(t,e,n){"use strict";n.r(e);n(180),n(72),n(320);var r=n(312),i={props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h}},s=n(48),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n    "+t._s(t.item.text)+"\n    "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text)+"\n")])}),[],!1,null,null,null);e.default=a.exports},322:function(t,e,n){"use strict";var r=n(313);n.n(r).a},323:function(t,e,n){"use strict";n.r(e);var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(322),n(48)),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},326:function(t,e,n){"use strict";n.r(e);var r=n(317),i=n(323),s={components:{NavLink:r.default,DropdownTransition:i.default},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},a=n(48),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=o.exports},327:function(t,e,n){"use strict";n.r(e);var r={name:"VersionSelectItem",props:{version:{type:Object,required:!0}},computed:{classes:function(){return{deprecated:["text-orange"],current:["text-green-dark"],stable:["text-green-dark"],beta:["text-blue"]}[this.version.status]||["text-grey"]}}},i=n(48),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inline-block"},[t._v("\n  "+t._s(t.version.title||t.version.name)+"\n  "),n("span",{staticClass:"rounded-full ml-2",class:t.classes},[t._v(t._s(t.version.status))])])}),[],!1,null,null,null);e.default=s.exports},330:function(t,e,n){"use strict";n.r(e);n(111),n(49),n(180),n(72),n(182),n(50),n(76),n(314),n(70);var r=n(33),i=n(326),s=n(312),a={components:{NavLink:n(317).default,DropdownLink:i.default},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(r){var a,o=e[r],l=s[r]&&s[r].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,r),i.some((function(t){return t.path===a}))||(a=r)),{text:l,link:a}}))};return[].concat(Object(r.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(s.k)(t),{items:(t.items||[]).map(s.k)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}},o=n(48),l=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links flex-no-shrink"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("div",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.repoLabel)+"\n            "),n("OutboundLink")],1)]):t._e()],2):t._e()}),[],!1,null,null,null);e.default=l.exports},331:function(t,e,n){"use strict";n.r(e);n(49),n(180);var r=n(312);function i(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function s(t,e,n,a,o){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var u=Object(r.e)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[i(t,n+"#"+e.slug,e.title,u),s(t,e.children,n,a,o,l+1)])})))}var a={functional:!0,props:["item"],render:function(t,e){var n=e.parent,a=n.$page,o=n.$site,l=n.$route,u=e.props.item,c=Object(r.e)(l,u.path),p="auto"===u.type?c||u.children.some((function(t){return Object(r.e)(l,u.basePath+"#"+t.slug)})):c,h=i(t,u.path,u.title||u.path,p),f=null!=a.frontmatter.sidebarDepth?a.frontmatter.sidebarDepth:o.themeConfig.sidebarDepth,d=null==f?1:f,v=!!o.themeConfig.displayAllHeaders;return"auto"===u.type?[h,s(t,u.children,u.basePath,l,d)]:(p||v)&&u.headers&&!r.d.test(u.path)?[h,s(t,Object(r.c)(u.headers),u.path,l,d)]:h}},o=n(48),l=Object(o.a)(a,void 0,void 0,!1,null,null,null);e.default=l.exports},336:function(t,e,n){"use strict";n.r(e);n(324),n(104),n(325);var r={name:"VersionSelect",components:{VersionSelectItem:n(327).default},props:{versions:{type:Array,required:!0},tabindex:{type:Number,required:!1,default:0},value:{type:String,required:!1}},data:function(){var t=this;return{selected:this.versions.find((function(e){return e.name===t.value}))||(this.versions.length>0?this.versions[0]:null),open:!1}},watch:{value:function(t,e){var n=this;if(t!==e){var r=this.versions.find((function(t){return t.name===n.value}));r&&(this.selected=r)}}},mounted:function(){this.$emit("input",this.selected.name)}},i=n(48),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"version-select custom-select",attrs:{tabindex:t.tabindex},on:{blur:function(e){t.open=!1}}},[n("div",{staticClass:"selected",class:{open:t.open},on:{click:function(e){t.open=!t.open}}},[n("VersionSelectItem",{attrs:{version:t.selected}}),t._v(" "),n("span",{staticClass:"arrow"})],1),t._v(" "),n("div",{staticClass:"items",class:{hidden:!t.open}},t._l(t.versions,(function(e){return n("div",{key:e.name,staticClass:"item",on:{click:function(n){t.selected=e,t.open=!1,t.$emit("input",e.name)}}},[n("VersionSelectItem",{attrs:{version:e}})],1)})),0)])}),[],!1,null,null,null);e.default=s.exports},348:function(t,e,n){"use strict";n.r(e);n(324),n(179),n(49),n(104),n(50),n(333),n(315),n(112);var r=n(331),i=n(323),s=n(336),a={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:r.default,DropdownTransition:i.default,VersionSelect:s.default},data:function(){var t=this.item.versions.length>0,e="";if(t&&(e=this.item.currentVersion||this.item.versions[0].name,this.$router.currentRoute.path.startsWith(this.item.path))){var n=this.$router.currentRoute.path.split("/")[2];e=~this.item.versions.map((function(t){return t.name})).indexOf(n)?n:this.item.currentVersion}return{isVersioned:t,versionSelect:e}},watch:{versionSelect:function(t,e){if(e!==t&&this.$router.currentRoute.path.startsWith(this.item.path)&&this.selectedVersion.children.length>0){var n=this.$router.currentRoute.path;n=n.substr(n.indexOf(e)+e.length),this.$router.push(this.selectedVersion.children.find((function(t){return t.path.endsWith(n)}))||this.selectedVersion.children[0])}},$route:function(t,e){if(this.isVersioned&&t.path.startsWith(this.item.path)){var n=t.path.split("/")[2];~this.item.versions.map((function(t){return t.name})).indexOf(n)&&(this.versionSelect=n)}}},computed:{selectedVersion:function(){var t=this;return this.item.versions.find((function(e){return e.name===t.versionSelect}))},children:function(){return this.isVersioned?this.selectedVersion.children:this.item.children}}},o=n(48),l=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e(),t._v(" "),t.isVersioned?n("VersionSelect",{staticClass:"float-right",attrs:{versions:t.item.versions},model:{value:t.versionSelect,callback:function(e){t.versionSelect=e},expression:"versionSelect"}}):t._e()],1),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.children,(function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})),0):t._e()])],1)}),[],!1,null,null,null);e.default=l.exports},367:function(t,e,n){"use strict";n.r(e);n(180);var r=n(348),i=n(331),s=n(330),a=n(312);var o={components:{SidebarGroup:r.default,SidebarLink:i.default,NavLinks:s.default},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if("group"===r.type&&r.children.some((function(e){return Object(a.e)(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(a.e)(this.$route,t.path)}}},l=n(48),u=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks",{staticClass:"block md:hidden"}),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:e.path},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===r,open:r===t.openGroupIndex,collapsable:e.collapsable},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{item:e}})],1)})),0):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=u.exports}}]);