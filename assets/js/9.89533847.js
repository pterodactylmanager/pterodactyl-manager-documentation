(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12,28],{312:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"j",(function(){return a})),n.d(e,"i",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"l",(function(){return p})),n.d(e,"m",(function(){return v})),n.d(e,"c",(function(){return g})),n.d(e,"k",(function(){return y}));n(26),n(51),n(179),n(73),n(107),n(49),n(104),n(50),n(314),n(70),n(315),n(52);var r=n(108),i=/#.*$/,o=/\.(md|html)$/,s=/\/$/,a=/^(https?:|mailto:|tel:)/;function c(t){return decodeURI(t).replace(i,"").replace(o,"")}function l(t){return a.test(t)}function u(t){return/^mailto:/.test(t)}function d(t){return/^tel:/.test(t)}function f(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",r=c(t);return s.test(r)?t:r+".html"+n}function h(t,e){var n=t.hash,r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&c(t.path)===c(e)}function p(t,e,n){n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=c(e),i=0;i<t.length;i++)if(c(t[i].path)===r)return Object.assign({},t[i],{type:"page",path:f(e)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function v(t,e,n,i){var o=n.pages,s=n.themeConfig,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var c=a.sidebar||s.sidebar;if(c){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t.path,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(n))return{base:n,config:e[n]};var r;return{}}(e,c),u=l.base,d=l.config;return d?d.map((function(t){return function t(e,n,i,o){if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});o&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var s=e.children||[],a=e.versions||[];return Object(r.a)({type:"group"},e,{children:s.map((function(e){return t(e,n,i,!0)})),collapsable:!1!==e.collapsable,versions:a.map((function(o){return Object(r.a)({},o,{status:o.name===e.currentVersion?"current":o.status,children:o.children.map((function(r){return t(e.path+o.name+r,n,i,!0)}))})}))})}(t,o,u)})):[]}return[]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function y(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},314:function(t,e,n){"use strict";var r=n(176),i=n(7),o=n(10),s=n(25),a=n(177),c=n(178);r("match",1,(function(t,e,n){return[function(e){var n=s(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var s=i(t),l=String(this);if(!s.global)return c(s,l);var u=s.unicode;s.lastIndex=0;for(var d,f=[],h=0;null!==(d=c(s,l));){var p=String(d[0]);f[h]=p,""===p&&(s.lastIndex=a(l,o(s.lastIndex),u)),h++}return 0===h?null:f}]}))},315:function(t,e,n){"use strict";var r=n(176),i=n(106),o=n(7),s=n(25),a=n(105),c=n(177),l=n(10),u=n(178),d=n(71),f=n(2),h=[].push,p=Math.min,v=!f((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(s(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);for(var a,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,f+"g");(a=d.call(v,r))&&!((c=v.lastIndex)>p&&(u.push(r.slice(p,a.index)),a.length>1&&a.index<r.length&&h.apply(u,a.slice(1)),l=a[0].length,p=c,u.length>=o));)v.lastIndex===a.index&&v.lastIndex++;return p===r.length?!l&&v.test("")||u.push(""):u.push(r.slice(p)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var s=n(r,t,this,i,r!==e);if(s.done)return s.value;var d=o(t),f=String(this),h=a(d,RegExp),g=d.unicode,y=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),m=new h(v?d:"^(?:"+d.source+")",y),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===f.length)return null===u(m,f)?[f]:[];for(var k=0,_=0,x=[];_<f.length;){m.lastIndex=v?_:0;var C,w=u(m,v?f:f.slice(_));if(null===w||(C=p(l(m.lastIndex+(v?0:_)),f.length))===k)_=c(f,_,g);else{if(x.push(f.slice(k,_)),x.length===b)return x;for(var S=1;S<=w.length-1;S++)if(x.push(w[S]),x.length===b)return x;_=k=C}}return x.push(f.slice(k)),x}]}),!v)},317:function(t,e,n){"use strict";n.r(e);n(180),n(72),n(320);var r=n(312),i={props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h}},o=n(48),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n    "+t._s(t.item.text)+"\n    "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text)+"\n")])}),[],!1,null,null,null);e.default=s.exports},318:function(t,e,n){var r=n(25),i=/"/g;t.exports=function(t,e,n,o){var s=String(r(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),a+">"+s+"</"+e+">"}},319:function(t,e,n){var r=n(2);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},320:function(t,e,n){"use strict";var r=n(0),i=n(318);r({target:"String",proto:!0,forced:n(319)("link")},{link:function(t){return i(this,"a","href",t)}})},334:function(t,e,n){"use strict";n.r(e);var r=n(332),i=n.n(r);if("undefined"!=typeof window)n(338);var o={props:{options:{type:Object,default:function(){return{}}}},mounted:function(){this.create()},destroyed:function(){i()(this.$el).slick("unslick")},methods:{create:function(){var t=i()(this.$el);t.on("afterChange",this.onAfterChange),t.on("beforeChange",this.onBeforeChange),t.on("breakpoint",this.onBreakpoint),t.on("destroy",this.onDestroy),t.on("edge",this.onEdge),t.on("init",this.onInit),t.on("reInit",this.onReInit),t.on("setPosition",this.onSetPosition),t.on("swipe",this.onSwipe),t.on("lazyLoaded",this.onLazyLoaded),t.on("lazyLoadError",this.onLazyLoadError),t.slick(this.options)},destroy:function(){var t=i()(this.$el);t.off("afterChange",this.onAfterChange),t.off("beforeChange",this.onBeforeChange),t.off("breakpoint",this.onBreakpoint),t.off("destroy",this.onDestroy),t.off("edge",this.onEdge),t.off("init",this.onInit),t.off("reInit",this.onReInit),t.off("setPosition",this.onSetPosition),t.off("swipe",this.onSwipe),t.off("lazyLoaded",this.onLazyLoaded),t.off("lazyLoadError",this.onLazyLoadError),i()(this.$el).slick("unslick")},reSlick:function(){this.destroy(),this.create()},next:function(){i()(this.$el).slick("slickNext")},prev:function(){i()(this.$el).slick("slickPrev")},pause:function(){i()(this.$el).slick("slickPause")},play:function(){i()(this.$el).slick("slickPlay")},goTo:function(t,e){i()(this.$el).slick("slickGoTo",t,e)},currentSlide:function(){return i()(this.$el).slick("slickCurrentSlide")},add:function(t,e,n){i()(this.$el).slick("slickAdd",t,e,n)},remove:function(t,e){i()(this.$el).slick("slickRemove",t,e)},filter:function(t){i()(this.$el).slick("slickFilter",t)},unfilter:function(){i()(this.$el).slick("slickUnfilter")},getOption:function(t){i()(this.$el).slick("slickGetOption",t)},setOption:function(t,e,n){i()(this.$el).slick("slickSetOption",t,e,n)},setPosition:function(){i()(this.$el).slick("setPosition")},onAfterChange:function(t,e,n){this.$emit("afterChange",t,e,n)},onBeforeChange:function(t,e,n,r){this.$emit("beforeChange",t,e,n,r)},onBreakpoint:function(t,e,n){this.$emit("breakpoint",t,e,n)},onDestroy:function(t,e){this.$emit("destroy",t,e)},onEdge:function(t,e,n){this.$emit("edge",t,e,n)},onInit:function(t,e){this.$emit("init",t,e)},onReInit:function(t,e){this.$emit("reInit",t,e)},onSetPosition:function(t,e){this.$emit("setPosition",t,e)},onSwipe:function(t,e,n){this.$emit("swipe",t,e,n)},onLazyLoaded:function(t,e,n,r){this.$emit("lazyLoaded",t,e,n,r)},onLazyLoadError:function(t,e,n,r){this.$emit("lazyLoadError",t,e,n,r)}}},s=n(48),a=Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)}),[],!1,null,null,null);e.default=a.exports},339:function(t,e,n){var r=n(340),i={autoSetContainer:!1,appendToBody:!0},o={install:function(t){var e="3."===t.version.slice(0,2)?t.config.globalProperties:t.prototype;e.$clipboardConfig=i,e.$copyText=function(t,e){return new Promise((function(n,o){var s=document.createElement("button"),a=new r(s,{text:function(){return t},action:function(){return"copy"},container:"object"==typeof e?e:document.body});a.on("success",(function(t){a.destroy(),n(t)})),a.on("error",(function(t){a.destroy(),o(t)})),i.appendToBody&&document.body.appendChild(s),s.click(),i.appendToBody&&document.body.removeChild(s)}))},t.directive("clipboard",{bind:function(t,e,n){if("success"===e.arg)t._vClipboard_success=e.value;else if("error"===e.arg)t._vClipboard_error=e.value;else{var o=new r(t,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"},container:i.autoSetContainer?t:void 0});o.on("success",(function(e){var n=t._vClipboard_success;n&&n(e)})),o.on("error",(function(e){var n=t._vClipboard_error;n&&n(e)})),t._vClipboard=o}},update:function(t,e){"success"===e.arg?t._vClipboard_success=e.value:"error"===e.arg?t._vClipboard_error=e.value:(t._vClipboard.text=function(){return e.value},t._vClipboard.action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(t,e){t._vClipboard&&("success"===e.arg?delete t._vClipboard_success:"error"===e.arg?delete t._vClipboard_error:(t._vClipboard.destroy(),delete t._vClipboard))}})},config:i};t.exports=o},340:function(t,e,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
t.exports=function(){return n={},t.m=e=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),i=document.createRange();i.selectNodeContents(t),r.removeAllRanges(),r.addRange(i),e=r.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function i(){r.off(t,i),e.apply(n,arguments)}return i._=e,this.on(t,i,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,i=n.length;r<i;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],i=[];if(r&&e)for(var o=0,s=r.length;o<s;o++)r[o].fn!==e&&r[o].fn._!==e&&i.push(r[o]);return i.length?n[t]=i:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var r=n(3),i=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return f=e,h=n,(d=t).addEventListener(f,h),{destroy:function(){d.removeEventListener(f,h)}};if(r.nodeList(t))return c=t,l=e,u=n,Array.prototype.forEach.call(c,(function(t){t.addEventListener(l,u)})),{destroy:function(){Array.prototype.forEach.call(c,(function(t){t.removeEventListener(l,u)}))}};if(r.string(t))return o=t,s=e,a=n,i(document.body,o,s,a);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,s,a,c,l,u,d,f,h}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var r=n(5);function i(t,e,n,i,o){var s=function(t,e,n,i){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&i.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,s,o),{destroy:function(){t.removeEventListener(n,s,o)}}}t.exports=function(t,e,n,r,o){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return i(t,e,n,r,o)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),this.resolveOptions(t),this.initSelection()}var c=(function(t,e,n){e&&s(t.prototype,e)}(a,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=i()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=i()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),a),l=n(1),u=n.n(l),d=n(2),f=n.n(d),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(g,u.a),function(t,e,n){e&&p(t.prototype,e),n&&p(t,n)}(g,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=f()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return y("action",t)}},{key:"defaultTarget",value:function(t){var e=y("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return y("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,r=!!document.queryCommandSupported;return n.forEach((function(t){r=r&&!!document.queryCommandSupported(t)})),r}}]),g);function g(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,g);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(g.__proto__||Object.getPrototypeOf(g)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function y(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=v}],t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(t){return e[t]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.p="",t(t.s=6).default;function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e,n}()},345:function(t,e,n){"use strict";n.r(e);var r=n(317),i=n(334),o=n(1),s=n(339),a=n.n(s);o.a.use(a.a);var c={components:{NavLink:r.default,Slick:i.default},data:function(){return{slickOptions:{slidesToShow:1,centerMode:!0,centerPadding:"0",speed:1e3,autoplay:!0,variableWidth:!0,arrows:!1,dots:!0,pauseOnHover:!1,pauseOnDotsHover:!0},installSh:"bash <(wget -O - 'https://raw.githubusercontent.com/MelionCloud/installer-linux/master/ptero_installer.sh')"}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=n(48),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"header section bg-blue text-grey-lightest less-padding emphasize"},[n("div",{staticClass:"container z-10"},[n("div",{staticClass:"text-center"},[t._m(0),t._v(" "),n("div",{staticClass:"copy-box mt-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.installSh,expression:"installSh"}],attrs:{value:"bash <(wget -O - 'https://raw.githubusercontent.com/MelionCloud/installer-linux/master/ptero_installer.sh')",disabled:""},domProps:{value:t.installSh},on:{input:function(e){e.target.composing||(t.installSh=e.target.value)}}}),n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.installSh,expression:"installSh",arg:"copy"}]},[t._v("Copy")])])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"section bg-white"},[n("div",{staticClass:"text-center"},[n("h1",[t._v("Screenshots (to be changed)")]),t._v(" "),n("div",{staticClass:"screenshots"},[n("slick",{ref:"slick",attrs:{options:t.slickOptions}},[n("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png"}},[n("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png"}})]),t._v(" "),n("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png"}},[n("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png"}})]),t._v(" "),n("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png"}},[n("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png"}})]),t._v(" "),n("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png"}},[n("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png"}})]),t._v(" "),n("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png"}},[n("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png"}})]),t._v(" "),n("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png"}},[n("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png"}})]),t._v(" "),n("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png"}},[n("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png"}})]),t._v(" "),n("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png"}},[n("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png"}})]),t._v(" "),n("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png"}},[n("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png"}})]),t._v(" "),n("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png"}},[n("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png"}})]),t._v(" "),n("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png"}},[n("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png"}})])])],1)])]),t._v(" "),n("div",{staticClass:"section bg-blue text-grey-lightest"},[n("div",{staticClass:"container text-center"},[n("h1",[t._v("Get Started")]),t._v(" "),n("p",{staticClass:"m-4"},[t._v("Ready to fly on the Pterodactyl?")]),t._v(" "),n("div",{staticClass:"mt-4"},[n("router-link",{staticClass:"btn inline-block",attrs:{to:"/project/introduction.html"}},[t._v("About the project")]),t._v(" "),n("a",{staticClass:"btn inline-block",attrs:{href:"https://discord.gg/devsky"}},[t._v("Discord")])],1)])]),t._v(" "),n("div",{staticClass:"section bg-black text-grey-lighter text-sm less-padding"},[n("div",{staticClass:"container text-center"},[n("div",[n("img",{staticClass:"h-20",attrs:{src:t.$withBase("logos/banner_logo.png"),alt:"pterodactyl banner logo"}})]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"footer"},[t._v("PterodactylManager® Copyright © 2022 DevSky.one")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"max-w-xl w-full inline-block",attrs:{src:"https://cdn.pterodactyl.io/logos/new/pterodactyl_logo_transparent.png",alt:"Pterodactyl"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section bg-white"},[e("div",{staticClass:"container text-center"},[e("h1",{staticClass:"text-blue mb-4"},[this._v("Pterodactyl Manager")]),this._v(" "),e("h3",{staticClass:"border-0 font-normal leading-normal mx-auto",staticStyle:{"max-width":"50rem"}},[this._v("\n                PterodactylManager® is a free, open-source extension for Pterodactyl® that allows you to manage your addons and themes from your panel.\n            ")]),this._v(" "),e("h3",{staticClass:"border-0 leading-normal mx-auto mt-4",staticStyle:{"max-width":"50rem"}},[this._v("\n                Stop wasting your time on outdated or complicated addon installations. Just drag, drop or click!\n            ")]),this._v(" "),e("img",{staticClass:"max-w-lg w-full m-4 inline-block",attrs:{src:"https://coasterfreak.de/assets/media/pteroaddons/mockup-macbook-grey-1.1.png"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section bg-blue text-grey-lightest"},[n("div",{staticClass:"container text-center"},[n("h1",{staticClass:"mb-4"},[t._v("Why PterodactylManager®")]),t._v(" "),n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"feature"},[n("span",[n("i",{staticClass:"icon icon-lock"})]),t._v(" "),n("h3",[t._v("Compability Checker")]),t._v(" "),n("p",[t._v("No more unsupported addons that break your entire panel. With our integrated compability checker you only install the addons that are working for you.")])]),t._v(" "),n("div",{staticClass:"feature"},[n("span",[n("i",{staticClass:"icon icon-beaker"})]),t._v(" "),n("h3",[t._v("Update Checker")]),t._v(" "),n("p",[t._v("We integrated an easy way to automaticly update all of your addons and themes to the latest version.")])]),t._v(" "),n("div",{staticClass:"feature"},[n("span",[n("i",{staticClass:"icon icon-anchor"})]),t._v(" "),n("h3",[t._v("Clean addon structure")]),t._v(" "),n("p",[t._v("To provide the best compability and support for you addons, every addon should be build after our "),n("a",{attrs:{href:"/developer/guidelines"}},[t._v("Developer Guidelines")]),t._v(".")])]),t._v(" "),n("div",{staticClass:"feature"},[n("span",[n("i",{staticClass:"icon icon-wallet"})]),t._v(" "),n("h3",[t._v("Free to use")]),t._v(" "),n("p",[t._v("PterodactylManager is 100% free. To support the project you can buy our addons from the market.")])]),t._v(" "),n("div",{staticClass:"feature"},[n("span",[n("i",{staticClass:"icon icon-browser"})]),t._v(" "),n("h3",[t._v("User Friendly")]),t._v(" "),n("p",[t._v("Drag and drop as well as one click installations are the future. Don't do the hard work manually.")])]),t._v(" "),n("div",{staticClass:"feature"},[n("span",[n("i",{staticClass:"icon icon-expand"})]),t._v(" "),n("h3",[t._v("Extendable")]),t._v(" "),n("p",[t._v("We provide you with the best panel extensions right out of the box. Just enable them in the addon manager.")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-left md:flex"},[n("div",{staticClass:"flex-none w-full md:w-1/2 md:pr-12"},[n("p",{staticClass:"my-4"},[t._v("\n                        Since 2022 PterodactylManager® helps you to manage your Pterodactyl server.\n                    ")]),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n                        We are a team of developers who love to create software.\n                    ")])]),t._v(" "),n("div",{staticClass:"hidden md:block md:flex-1 md:pr-12"},[n("p",[n("a",{staticClass:"text-grey-lightest",attrs:{href:"https://github.com/MelionCloud"}},[t._v("GitHub")])]),t._v(" "),n("p",[n("a",{staticClass:"text-grey-lightest",attrs:{href:"/panel/troubleshooting.html"}},[t._v("Troubleshooting")])])]),t._v(" "),n("div",{staticClass:"text-center mt-8 md:flex-1 md:mt-0"},[n("a",{attrs:{href:"https://discord.gg/devsky",target:"_blank",rel:"nofollow noopener"}},[n("img",{staticClass:"w-3/4",attrs:{src:"https://cdn.pterodactyl.io/site-assets/discord.png"}})])])])}],!1,null,null,null);e.default=u.exports}}]);