/*! For license information please see f1711759.5d1443ed.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2449],{2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,u=o(e),l=1;l<arguments.length;l++){for(var f in a=Object(arguments[l]))r.call(a,f)&&(u[f]=a[f]);if(t){c=t(a);for(var p=0;p<c.length;p++)n.call(a,c[p])&&(u[c[p]]=a[c[p]])}}return u}},1535:function(e,t,r){var n=r(2525),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}function k(){}function j(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=O.prototype;var w=j.prototype=new k;w.constructor=j,n(w,O.prototype),w.isPureReactComponent=!0;var S={current:null},x=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var N=/\/+/g,_=[];function T(e,t,r,n){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function z(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case a:c=!0}}if(c)return r(n,e,""===t?"."+A(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+A(o=e[u],u);c+=z(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=b&&e[b]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(o=e.next()).done;)c+=z(o=o.value,l=t+A(o,u++),r,n);else if("object"===o)throw r=""+e,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function B(e,t,r){return null==e?0:z(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(N,"$&/")+"/"),B(e,D,t=T(t,i,n,o)),$(t)}var M={current:null};function R(){var e=M.current;if(null===e)throw Error(g(321));return e}},7378:function(e,t,r){r(1535)},4137:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=l(r),d=o,y=s["".concat(u,".").concat(d)]||s[d]||p[d]||i;return r?n.createElement(y,a(a({ref:t},f),{},{components:r})):n.createElement(y,a({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},670:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return f},default:function(){return s}});var n=r(7462),o=r(3366),i=(r(7378),r(4137)),a=["components"],c={id:"config-org",title:"Organization Configuration",sidebar_label:"Org"},u=void 0,l={unversionedId:"config-org",id:"config-org",title:"Organization Configuration",description:"Your organization is only configurable in the Enterprise version of BuildBuddy.",source:"@site/../docs/config-org.md",sourceDirName:".",slug:"/config-org",permalink:"/docs/config-org",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-org.md",tags:[],version:"current",lastUpdatedBy:"Siggi",lastUpdatedAt:1615320644,formattedLastUpdatedAt:"3/9/2021",frontMatter:{id:"config-org",title:"Organization Configuration",sidebar_label:"Org"},sidebar:"someSidebar",previous:{title:"Integrations",permalink:"/docs/config-integrations"},next:{title:"RBE",permalink:"/docs/config-rbe"}},f=[{value:"Section",id:"section",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Example section",id:"example-section",children:[],level:2}],p={toc:f};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Your organization is only configurable in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise"},"Enterprise version")," of BuildBuddy."),(0,i.kt)("h2",{id:"section"},"Section"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"org:")," The org section allows you to configure your BuildBuddy organization. ",(0,i.kt)("strong",{parentName:"p"},"Optional")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name:")," The name of your organization, which is displayed on your organization's build history.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"domain:")," Your organization's email domain. If this is set, only users with email addresses in this domain will be able to register for a BuildBuddy account."))),(0,i.kt)("h2",{id:"example-section"},"Example section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org:\n  name: Acme Corp\n  domain: acme.com\n")))}s.isMDXComponent=!0}}]);