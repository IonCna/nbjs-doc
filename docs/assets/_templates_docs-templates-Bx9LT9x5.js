var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=o((()=>{(function(e){var t={objectMaxDepth:5,urlErrorParamsEnabled:!0};function n(e){if(R(e))L(e.objectMaxDepth)&&(t.objectMaxDepth=r(e.objectMaxDepth)?e.objectMaxDepth:NaN),L(e.urlErrorParamsEnabled)&&le(e.urlErrorParamsEnabled)&&(t.urlErrorParamsEnabled=e.urlErrorParamsEnabled);else return t}function r(e){return V(e)&&e>0}function i(e,n){n||=Error;var r=`https://errors.angularjs.org/1.8.3/`,i=r.replace(`.`,`\\.`)+`[\\s\\S]*`,a=new RegExp(i,`g`);return function(){var i=arguments[0],o=arguments[1],s=`[`+(e?e+`:`:``)+i+`] `,c=Te(arguments,2).map(function(e){return mt(e,t.objectMaxDepth)}),l,u;if(s+=o.replace(/\{\d+\}/g,function(e){var t=+e.slice(1,-1);return t<c.length?c[t].replace(a,``):e}),s+=`
`+r+(e?e+`/`:``)+i,t.urlErrorParamsEnabled)for(u=0,l=`?`;u<c.length;u++,l=`&`)s+=l+`p`+u+`=`+encodeURIComponent(c[u]);return new n(s)}}var a=/^\/(.+)\/([a-z]*)$/,o=`validity`,s=Object.prototype.hasOwnProperty,c=function(e){return B(e)?e.toLowerCase():e},l=function(e){return B(e)?e.toUpperCase():e},u,d,f,p=[].slice,m=[].splice,h=[].push,g=Object.prototype.toString,_=Object.getPrototypeOf,v=i(`ng`),y=e.angular||={},b,x=0;u=e.document.documentMode;function S(e){if(e==null||ie(e))return!1;if(U(e)||B(e)||d&&e instanceof d)return!0;var t=`length`in Object(e)&&e.length;return V(t)&&(t>=0&&t-1 in e||typeof e.item==`function`)}function C(e,t,n){var r,i;if(e){if(W(e))for(r in e)r!==`prototype`&&r!==`length`&&r!==`name`&&e.hasOwnProperty(r)&&t.call(n,e[r],r,e);else if(U(e)||S(e)){var a=typeof e!=`object`;for(r=0,i=e.length;r<i;r++)(a||r in e)&&t.call(n,e[r],r,e)}else if(e.forEach&&e.forEach!==C)e.forEach(t,n,e);else if(z(e))for(r in e)t.call(n,e[r],r,e);else if(typeof e.hasOwnProperty==`function`)for(r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,e);else for(r in e)s.call(e,r)&&t.call(n,e[r],r,e)}return e}function w(e,t,n){for(var r=Object.keys(e).sort(),i=0;i<r.length;i++)t.call(n,e[r[i]],r[i]);return r}function T(e){return function(t,n){e(n,t)}}function E(){return++x}function D(e,t){t?e.$$hashKey=t:delete e.$$hashKey}function O(e,t,n){for(var r=e.$$hashKey,i=0,a=t.length;i<a;++i){var o=t[i];if(!(!R(o)&&!W(o)))for(var s=Object.keys(o),c=0,l=s.length;c<l;c++){var u=s[c],d=o[u];n&&R(d)?H(d)?e[u]=new Date(d.valueOf()):re(d)?e[u]=new RegExp(d):d.nodeName?e[u]=d.cloneNode(!0):me(d)?e[u]=d.clone():u!==`__proto__`&&(R(e[u])||(e[u]=U(d)?[]:{}),O(e[u],[d],!0)):e[u]=d}}return D(e,r),e}function k(e){return O(e,p.call(arguments,1),!1)}function A(e){return O(e,p.call(arguments,1),!0)}function j(e){return parseInt(e,10)}var M=Number.isNaN||function(e){return e!==e};function N(e,t){return k(Object.create(e),t)}function P(){}P.$inject=[];function ee(e){return e}ee.$inject=[];function F(e){return function(){return e}}function te(e){return W(e.toString)&&e.toString!==g}function I(e){return e===void 0}function L(e){return e!==void 0}function R(e){return typeof e==`object`&&!!e}function z(e){return typeof e==`object`&&!!e&&!_(e)}function B(e){return typeof e==`string`}function V(e){return typeof e==`number`}function H(e){return g.call(e)===`[object Date]`}function U(e){return Array.isArray(e)||e instanceof Array}function ne(e){switch(g.call(e)){case`[object Error]`:return!0;case`[object Exception]`:return!0;case`[object DOMException]`:return!0;default:return e instanceof Error}}function W(e){return typeof e==`function`}function re(e){return g.call(e)===`[object RegExp]`}function ie(e){return e&&e.window===e}function ae(e){return e&&e.$evalAsync&&e.$watch}function oe(e){return g.call(e)===`[object File]`}function se(e){return g.call(e)===`[object FormData]`}function ce(e){return g.call(e)===`[object Blob]`}function le(e){return typeof e==`boolean`}function ue(e){return e&&W(e.then)}var de=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/;function fe(e){return e&&V(e.length)&&de.test(g.call(e))}function G(e){return g.call(e)===`[object ArrayBuffer]`}var K=function(e){return B(e)?e.trim():e},pe=function(e){return e.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,`\\$1`).replace(/\x08/g,`\\x08`)};function me(e){return!!(e&&(e.nodeName||e.prop&&e.attr&&e.find))}function he(e){var t={},n=e.split(`,`),r;for(r=0;r<n.length;r++)t[n[r]]=!0;return t}function ge(e){return c(e.nodeName||e[0]&&e[0].nodeName)}function _e(e,t){return Array.prototype.indexOf.call(e,t)!==-1}function ve(e,t){var n=e.indexOf(t);return n>=0&&e.splice(n,1),n}function ye(e,t,n){var i=[],a=[];if(n=r(n)?n:NaN,t){if(fe(t)||G(t))throw v(`cpta`,`Can't copy! TypedArray destination cannot be mutated.`);if(e===t)throw v(`cpi`,`Can't copy! Source and destination are identical.`);return U(t)?t.length=0:C(t,function(e,n){n!==`$$hashKey`&&delete t[n]}),i.push(e),a.push(t),o(e,t,n)}return c(e,n);function o(e,t,n){if(n--,n<0)return`...`;var r=t.$$hashKey,i;if(U(e))for(var a=0,o=e.length;a<o;a++)t.push(c(e[a],n));else if(z(e))for(i in e)t[i]=c(e[i],n);else if(e&&typeof e.hasOwnProperty==`function`)for(i in e)e.hasOwnProperty(i)&&(t[i]=c(e[i],n));else for(i in e)s.call(e,i)&&(t[i]=c(e[i],n));return D(t,r),t}function c(e,t){if(!R(e))return e;var n=i.indexOf(e);if(n!==-1)return a[n];if(ie(e)||ae(e))throw v(`cpws`,`Can't copy! Making copies of Window or Scope instances is not supported.`);var r=!1,s=l(e);return s===void 0&&(s=U(e)?[]:Object.create(_(e)),r=!0),i.push(e),a.push(s),r?o(e,s,t):s}function l(e){switch(g.call(e)){case`[object Int8Array]`:case`[object Int16Array]`:case`[object Int32Array]`:case`[object Float32Array]`:case`[object Float64Array]`:case`[object Uint8Array]`:case`[object Uint8ClampedArray]`:case`[object Uint16Array]`:case`[object Uint32Array]`:return new e.constructor(c(e.buffer),e.byteOffset,e.length);case`[object ArrayBuffer]`:if(!e.slice){var t=new ArrayBuffer(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),t}return e.slice(0);case`[object Boolean]`:case`[object Number]`:case`[object String]`:case`[object Date]`:return new e.constructor(e.valueOf());case`[object RegExp]`:var n=new RegExp(e.source,e.toString().match(/[^/]*$/)[0]);return n.lastIndex=e.lastIndex,n;case`[object Blob]`:return new e.constructor([e],{type:e.type})}if(W(e.cloneNode))return e.cloneNode(!0)}}function be(e,t){return e===t||e!==e&&t!==t}function xe(e,t){if(e===t)return!0;if(e===null||t===null)return!1;if(e!==e&&t!==t)return!0;var n=typeof e,r=typeof t,i,a,o;if(n===r&&n===`object`){if(U(e)){if(!U(t))return!1;if((i=e.length)===t.length){for(a=0;a<i;a++)if(!xe(e[a],t[a]))return!1;return!0}}else if(H(e))return H(t)?be(e.getTime(),t.getTime()):!1;else if(re(e))return re(t)?e.toString()===t.toString():!1;else{if(ae(e)||ae(t)||ie(e)||ie(t)||U(t)||H(t)||re(t))return!1;for(a in o=q(),e)if(!(a.charAt(0)===`$`||W(e[a]))){if(!xe(e[a],t[a]))return!1;o[a]=!0}for(a in t)if(!(a in o)&&a.charAt(0)!==`$`&&L(t[a])&&!W(t[a]))return!1;return!0}}return!1}var Se=function(){if(!L(Se.rules)){var t=e.document.querySelector(`[ng-csp]`)||e.document.querySelector(`[data-ng-csp]`);if(t){var n=t.getAttribute(`ng-csp`)||t.getAttribute(`data-ng-csp`);Se.rules={noUnsafeEval:!n||n.indexOf(`no-unsafe-eval`)!==-1,noInlineStyle:!n||n.indexOf(`no-inline-style`)!==-1}}else Se.rules={noUnsafeEval:r(),noInlineStyle:!1}}return Se.rules;function r(){try{return Function(``),!1}catch{return!0}}},Ce=function(){if(L(Ce.name_))return Ce.name_;var t,n,r=Be.length,i,a;for(n=0;n<r;++n)if(i=Be[n],t=e.document.querySelector(`[`+i.replace(`:`,`\\:`)+`jq]`),t){a=t.getAttribute(i+`jq`);break}return Ce.name_=a};function we(e,t,n){return e.concat(p.call(t,n))}function Te(e,t){return p.call(e,t||0)}function Ee(e,t){var n=arguments.length>2?Te(arguments,2):[];return W(t)&&!(t instanceof RegExp)?n.length?function(){return arguments.length?t.apply(e,we(n,arguments,0)):t.apply(e,n)}:function(){return arguments.length?t.apply(e,arguments):t.call(e)}:t}function De(t,n){var r=n;return typeof t==`string`&&t.charAt(0)===`$`&&t.charAt(1)===`$`?r=void 0:ie(n)?r=`$WINDOW`:n&&e.document===n?r=`$DOCUMENT`:ae(n)&&(r=`$SCOPE`),r}function Oe(e,t){if(!I(e))return V(t)||(t=t?2:null),JSON.stringify(e,De,t)}function ke(e){return B(e)?JSON.parse(e):e}var Ae=/:/g;function je(e,t){e=e.replace(Ae,``);var n=Date.parse(`Jan 01, 1970 00:00:00 `+e)/6e4;return M(n)?t:n}function Me(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function Ne(e,t,n){n=n?-1:1;var r=e.getTimezoneOffset(),i=je(t,r);return Me(e,n*(i-r))}function Pe(e){e=d(e).clone().empty();var t=d(`<div></div>`).append(e).html();try{return e[0].nodeType===st?c(t):t.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(e,t){return`<`+c(t)})}catch{return c(t)}}function Fe(e){try{return decodeURIComponent(e)}catch{}}function Ie(e){var t={};return C((e||``).split(`&`),function(e){var n,r,i;e&&(r=e=e.replace(/\+/g,`%20`),n=e.indexOf(`=`),n!==-1&&(r=e.substring(0,n),i=e.substring(n+1)),r=Fe(r),L(r)&&(i=!L(i)||Fe(i),s.call(t,r)?U(t[r])?t[r].push(i):t[r]=[t[r],i]:t[r]=i))}),t}function Le(e){var t=[];return C(e,function(e,n){U(e)?C(e,function(e){t.push(ze(n,!0)+(e===!0?``:`=`+ze(e,!0)))}):t.push(ze(n,!0)+(e===!0?``:`=`+ze(e,!0)))}),t.length?t.join(`&`):``}function Re(e){return ze(e,!0).replace(/%26/gi,`&`).replace(/%3D/gi,`=`).replace(/%2B/gi,`+`)}function ze(e,t){return encodeURIComponent(e).replace(/%40/gi,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%3B/gi,`;`).replace(/%20/g,t?`%20`:`+`)}var Be=[`ng-`,`data-ng-`,`ng:`,`x-ng-`];function Ve(e,t){var n,r,i=Be.length;for(r=0;r<i;++r)if(n=Be[r]+t,B(n=e.getAttribute(n)))return n;return null}function He(t){var n=t.currentScript;if(!n)return!0;if(!(n instanceof e.HTMLScriptElement||n instanceof e.SVGScriptElement))return!1;var r=n.attributes;return[r.getNamedItem(`src`),r.getNamedItem(`href`),r.getNamedItem(`xlink:href`)].every(function(e){if(!e)return!0;if(!e.value)return!1;var n=t.createElement(`a`);if(n.href=e.value,t.location.origin===n.origin)return!0;switch(n.protocol){case`http:`:case`https:`:case`ftp:`:case`blob:`:case`file:`:case`data:`:return!0;default:return!1}})}var Ue=He(e.document);function We(t,n){var r,i,a={};if(C(Be,function(e){var n=e+`app`;!r&&t.hasAttribute&&t.hasAttribute(n)&&(r=t,i=t.getAttribute(n))}),C(Be,function(e){var n=e+`app`,a;!r&&(a=t.querySelector(`[`+n.replace(`:`,`\\:`)+`]`))&&(r=a,i=a.getAttribute(n))}),r){if(!Ue){e.console.error(`AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.`);return}a.strictDi=Ve(r,`strict-di`)!==null,n(r,i?[i]:[],a)}}function Ge(t,n,r){R(r)||(r={}),r=k({strictDi:!1},r);var i=function(){if(t=d(t),t.injector())throw v(`btstrpd`,`App already bootstrapped with this element '{0}'`,(t[0]===e.document?`document`:Pe(t)).replace(/</,`&lt;`).replace(/>/,`&gt;`));n||=[],n.unshift([`$provide`,function(e){e.value(`$rootElement`,t)}]),r.debugInfoEnabled&&n.push([`$compileProvider`,function(e){e.debugInfoEnabled(!0)}]),n.unshift(`ng`);var i=Nn(n,r.strictDi);return i.invoke([`$rootScope`,`$rootElement`,`$compile`,`$injector`,function(e,t,n,r){e.$apply(function(){t.data(`$injector`,r),n(t)(e)})}]),i},a=/^NG_ENABLE_DEBUG_INFO!/,o=/^NG_DEFER_BOOTSTRAP!/;if(e&&a.test(e.name)&&(r.debugInfoEnabled=!0,e.name=e.name.replace(a,``)),e&&!o.test(e.name))return i();e.name=e.name.replace(o,``),y.resumeBootstrap=function(e){return C(e,function(e){n.push(e)}),i()},W(y.resumeDeferredBootstrap)&&y.resumeDeferredBootstrap()}function Ke(){e.name=`NG_ENABLE_DEBUG_INFO!`+e.name,e.location.reload()}function qe(e){var t=y.element(e).injector();if(!t)throw v(`test`,`no injector found for element argument to getTestability`);return t.get(`$$testability`)}var Je=/[A-Z]/g;function Ye(e,t){return t||=`_`,e.replace(Je,function(e,n){return(n?t:``)+e.toLowerCase()})}var Xe=!1;function Ze(){var t;if(!Xe){var n=Ce();f=I(n)?e.jQuery:n?e[n]:void 0,f&&f.fn.on?(d=f,k(f.fn,{scope:cn.scope,isolateScope:cn.isolateScope,controller:cn.controller,injector:cn.injector,inheritedData:cn.inheritedData})):d=J,t=d.cleanData,d.cleanData=function(e){for(var n,r=0,i;(i=e[r])!=null;r++)n=(d._data(i)||{}).events,n&&n.$destroy&&d(i).triggerHandler(`$destroy`);t(e)},y.element=d,Xe=!0}}function Qe(){J.legacyXHTMLReplacement=!0}function $e(e,t,n){if(!e)throw v(`areq`,`Argument '{0}' is {1}`,t||`?`,n||`required`);return e}function et(e,t,n){return n&&U(e)&&(e=e[e.length-1]),$e(W(e),t,`not a function, got `+(e&&typeof e==`object`?e.constructor.name||`Object`:typeof e)),e}function tt(e,t){if(e===`hasOwnProperty`)throw v(`badname`,`hasOwnProperty is not a valid {0} name`,t)}function nt(e,t,n){if(!t)return e;for(var r=t.split(`.`),i,a=e,o=r.length,s=0;s<o;s++)i=r[s],e&&=(a=e)[i];return!n&&W(e)?Ee(a,e):e}function rt(e){for(var t=e[0],n=e[e.length-1],r,i=1;t!==n&&(t=t.nextSibling);i++)(r||e[i]!==t)&&(r||=d(p.call(e,0,i)),r.push(t));return r||e}function q(){return Object.create(null)}function it(e){if(e==null)return``;switch(typeof e){case`string`:break;case`number`:e=``+e;break;default:e=te(e)&&!U(e)&&!H(e)?e.toString():Oe(e)}return e}var at=1,ot=2,st=3,ct=8,lt=9,ut=11;function dt(e){var t=i(`$injector`),n=i(`ng`);function r(e,t,n){return e[t]||(e[t]=n())}var a=r(e,`angular`,Object);return a.$$minErr=a.$$minErr||i,r(a,`module`,function(){var e={};return function(i,a,o){var s={};return function(e,t){if(e===`hasOwnProperty`)throw n(`badname`,`hasOwnProperty is not a valid {0} name`,t)}(i,`module`),a&&e.hasOwnProperty(i)&&(e[i]=null),r(e,i,function(){if(!a)throw t(`nomod`,`Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.`,i);var e=[],r=[],c=[],l=d(`$injector`,`invoke`,`push`,r),u={_invokeQueue:e,_configBlocks:r,_runBlocks:c,info:function(e){if(L(e)){if(!R(e))throw n(`aobj`,`Argument '{0}' must be an object`,`value`);return s=e,this}return s},requires:a,name:i,provider:f(`$provide`,`provider`),factory:f(`$provide`,`factory`),service:f(`$provide`,`service`),value:d(`$provide`,`value`),constant:d(`$provide`,`constant`,`unshift`),decorator:f(`$provide`,`decorator`,r),animation:f(`$animateProvider`,`register`),filter:f(`$filterProvider`,`register`),controller:f(`$controllerProvider`,`register`),directive:f(`$compileProvider`,`directive`),component:f(`$compileProvider`,`component`),config:l,run:function(e){return c.push(e),this}};return o&&l(o),u;function d(t,n,r,i){return i||=e,function(){return i[r||`push`]([t,n,arguments]),u}}function f(t,n,r){return r||=e,function(e,a){return a&&W(a)&&(a.$$moduleName=i),r.push([t,n,arguments]),u}}})}})}function ft(e,t){if(U(e)){t||=[];for(var n=0,r=e.length;n<r;n++)t[n]=e[n]}else if(R(e))for(var i in t||={},e)(i.charAt(0)!==`$`||i.charAt(1)!==`$`)&&(t[i]=e[i]);return t||e}function pt(e,t){var n=[];return r(t)&&(e=y.copy(e,null,t)),JSON.stringify(e,function(e,t){if(t=De(e,t),R(t)){if(n.indexOf(t)>=0)return`...`;n.push(t)}return t})}function mt(e,t){return typeof e==`function`?e.toString().replace(/ \{[\s\S]*$/,``):I(e)?`undefined`:typeof e==`string`?e:pt(e,t)}var ht={full:`1.8.3`,major:1,minor:8,dot:3,codeName:`ultimate-farewell`};function gt(t){k(t,{errorHandlingConfig:n,bootstrap:Ge,copy:ye,extend:k,merge:A,equals:xe,element:d,forEach:C,injector:Nn,noop:P,bind:Ee,toJson:Oe,fromJson:ke,identity:ee,isUndefined:I,isDefined:L,isString:B,isFunction:W,isObject:R,isNumber:V,isElement:me,isArray:U,version:ht,isDate:H,callbacks:{$$counter:0},getTestability:qe,reloadWithDebugInfo:Ke,UNSAFE_restoreLegacyJqLiteXHTMLReplacement:Qe,$$minErr:i,$$csp:Se,$$encodeUriSegment:Re,$$encodeUriQuery:ze,$$lowercase:c,$$stringify:it,$$uppercase:l}),b=dt(e),b(`ng`,[`ngLocale`],[`$provide`,function(e){e.provider({$$sanitizeUri:Bi}),e.provider(`$compile`,nr).directive({a:Ja,input:zo,textarea:zo,form:no,script:Hs,select:Ks,option:qs,ngBind:Uo,ngBindHtml:Go,ngBindTemplate:Wo,ngClass:Jo,ngClassEven:Xo,ngClassOdd:Yo,ngCloak:Zo,ngController:Qo,ngForm:ro,ngHide:Fs,ngIf:ns,ngInclude:rs,ngInit:as,ngNonBindable:ws,ngPluralize:Os,ngRef:As,ngRepeat:js,ngShow:Ps,ngStyle:Is,ngSwitch:Ls,ngSwitchWhen:Rs,ngSwitchDefault:zs,ngOptions:Ds,ngTransclude:Vs,ngModel:vs,ngList:os,ngChange:Ko,pattern:Ys,ngPattern:Ys,required:Js,ngRequired:Js,minlength:Zs,ngMinlength:Zs,maxlength:Xs,ngMaxlength:Xs,ngValue:Ho,ngModelOptions:Ss}).directive({ngInclude:is,input:Bo}).directive(Ya).directive($o),e.provider({$anchorScroll:Pn,$animate:Wn,$animateCss:qn,$$animateJs:Hn,$$animateQueue:Un,$$AnimateRunner:Kn,$$animateAsyncRun:Gn,$browser:Zn,$cacheFactory:Qn,$controller:fr,$document:pr,$$isDocumentHidden:mr,$exceptionHandler:hr,$filter:ma,$$forceReflow:gr,$interpolate:Lr,$interval:zr,$$intervalFactory:Br,$http:Mr,$httpParamSerializer:wr,$httpParamSerializerJQLike:Tr,$httpBackend:Pr,$xhrFactory:Nr,$jsonpCallbacks:Vr,$location:ci,$log:li,$parse:ji,$rootScope:zi,$q:Mi,$$q:Ni,$sce:qi,$sceDelegate:Ki,$sniffer:Ji,$$taskTrackerFactory:Yi,$templateCache:$n,$templateRequest:Qi,$$testability:$i,$timeout:ta,$window:da,$$rAF:Ri,$$jqLite:_n,$$Map:Sn,$$cookieReader:pa})}]).info({angularVersion:`1.8.3`})}J.expando=`ng339`;var _t=J.cache={},vt=1;J._data=function(e){return this.cache[e[this.expando]]||{}};function yt(){return++vt}var bt=/-([a-z])/g,xt=/^-ms-/,St={mouseleave:`mouseout`,mouseenter:`mouseover`},Ct=i(`jqLite`);function wt(e){return Et(e.replace(xt,`ms-`))}function Tt(e,t){return t.toUpperCase()}function Et(e){return e.replace(bt,Tt)}var Dt=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Ot=/<|&#?\w+;/,kt=/<([\w:-]+)/,At=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,jt={thead:[`table`],col:[`colgroup`,`table`],tr:[`tbody`,`table`],td:[`tr`,`tbody`,`table`]};jt.tbody=jt.tfoot=jt.colgroup=jt.caption=jt.thead,jt.th=jt.td;var Mt={option:[1,`<select multiple="multiple">`,`</select>`],_default:[0,``,``]};for(var Nt in jt){var Pt=jt[Nt],Ft=Pt.slice().reverse();Mt[Nt]=[Ft.length,`<`+Ft.join(`><`)+`>`,`</`+Pt.join(`></`)+`>`]}Mt.optgroup=Mt.option;function It(e){return!Ot.test(e)}function Lt(e){var t=e.nodeType;return t===at||!t||t===lt}function Rt(e){for(var t in _t[e.ng339])return!0;return!1}function zt(t,n){var r,i,a,o,s=n.createDocumentFragment(),c=[],l;if(It(t))c.push(n.createTextNode(t));else{if(r=s.appendChild(n.createElement(`div`)),i=(kt.exec(t)||[``,``])[1].toLowerCase(),o=J.legacyXHTMLReplacement?t.replace(At,`<$1></$2>`):t,u<10)for(a=Mt[i]||Mt._default,r.innerHTML=a[1]+o+a[2],l=a[0];l--;)r=r.firstChild;else{for(a=jt[i]||[],l=a.length;--l>-1;)r.appendChild(e.document.createElement(a[l])),r=r.firstChild;r.innerHTML=o}c=we(c,r.childNodes),r=s.firstChild,r.textContent=``}return s.textContent=``,s.innerHTML=``,C(c,function(e){s.appendChild(e)}),s}function Bt(t,n){n||=e.document;var r;return(r=Dt.exec(t))?[n.createElement(r[1])]:(r=zt(t,n))?r.childNodes:[]}function Vt(e,t){var n=e.parentNode;n&&n.replaceChild(t,e),t.appendChild(e)}var Ht=e.Node.prototype.contains||function(e){return!!(this.compareDocumentPosition(e)&16)};function J(e){if(e instanceof J)return e;var t;if(B(e)&&(e=K(e),t=!0),!(this instanceof J)){if(t&&e.charAt(0)!==`<`)throw Ct(`nosel`,`Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element`);return new J(e)}t?en(this,Bt(e)):W(e)?sn(e):en(this,e)}function Ut(e){return e.cloneNode(!0)}function Wt(e,t){!t&&Lt(e)&&d.cleanData([e]),e.querySelectorAll&&d.cleanData(e.querySelectorAll(`*`))}function Gt(e){for(var t in e)return!1;return!0}function Kt(e){var t=e.ng339,n=t&&_t[t],r=n&&n.events,i=n&&n.data;(!i||Gt(i))&&(!r||Gt(r))&&(delete _t[t],e.ng339=void 0)}function qt(e,t,n,r){if(L(r))throw Ct(`offargs`,"jqLite#off() does not support the `selector` argument");var i=Yt(e),a=i&&i.events,o=i&&i.handle;if(o){if(t){var s=function(t){var r=a[t];L(n)&&ve(r||[],n),L(n)&&r&&r.length>0||(e.removeEventListener(t,o),delete a[t])};C(t.split(` `),function(e){s(e),St[e]&&s(St[e])})}else for(t in a)t!==`$destroy`&&e.removeEventListener(t,o),delete a[t];Kt(e)}}function Jt(e,t){var n=e.ng339,r=n&&_t[n];r&&(t?delete r.data[t]:r.data={},Kt(e))}function Yt(e,t){var n=e.ng339,r=n&&_t[n];return t&&!r&&(e.ng339=n=yt(),r=_t[n]={events:{},data:{},handle:void 0}),r}function Xt(e,t,n){if(Lt(e)){var r,i=L(n),a=!i&&t&&!R(t),o=!t,s=Yt(e,!a),c=s&&s.data;if(i)c[Et(t)]=n;else if(o)return c;else if(a)return c&&c[Et(t)];else for(r in t)c[Et(r)]=t[r]}}function Zt(e,t){return e.getAttribute?(` `+(e.getAttribute(`class`)||``)+` `).replace(/[\n\t]/g,` `).indexOf(` `+t+` `)>-1:!1}function Qt(e,t){if(t&&e.setAttribute){var n=(` `+(e.getAttribute(`class`)||``)+` `).replace(/[\n\t]/g,` `),r=n;C(t.split(` `),function(e){e=K(e),r=r.replace(` `+e+` `,` `)}),r!==n&&e.setAttribute(`class`,K(r))}}function $t(e,t){if(t&&e.setAttribute){var n=(` `+(e.getAttribute(`class`)||``)+` `).replace(/[\n\t]/g,` `),r=n;C(t.split(` `),function(e){e=K(e),r.indexOf(` `+e+` `)===-1&&(r+=e+` `)}),r!==n&&e.setAttribute(`class`,K(r))}}function en(e,t){if(t){if(t.nodeType)e[e.length++]=t;else{var n=t.length;if(typeof n==`number`&&t.window!==t){if(n)for(var r=0;r<n;r++)e[e.length++]=t[r]}else e[e.length++]=t}}}function tn(e,t){return nn(e,`$`+(t||`ngController`)+`Controller`)}function nn(e,t,n){e.nodeType===lt&&(e=e.documentElement);for(var r=U(t)?t:[t];e;){for(var i=0,a=r.length;i<a;i++)if(L(n=d.data(e,r[i])))return n;e=e.parentNode||e.nodeType===ut&&e.host}}function rn(e){for(Wt(e,!0);e.firstChild;)e.removeChild(e.firstChild)}function an(e,t){t||Wt(e);var n=e.parentNode;n&&n.removeChild(e)}function on(t,n){n||=e,n.document.readyState===`complete`?n.setTimeout(t):d(n).on(`load`,t)}function sn(t){function n(){e.document.removeEventListener(`DOMContentLoaded`,n),e.removeEventListener(`load`,n),t()}e.document.readyState===`complete`?e.setTimeout(t):(e.document.addEventListener(`DOMContentLoaded`,n),e.addEventListener(`load`,n))}var cn=J.prototype={ready:sn,toString:function(){var e=[];return C(this,function(t){e.push(``+t)}),`[`+e.join(`, `)+`]`},eq:function(e){return d(e>=0?this[e]:this[this.length+e])},length:0,push:h,sort:[].sort,splice:[].splice},ln={};C(`multiple,selected,checked,disabled,readOnly,required,open`.split(`,`),function(e){ln[c(e)]=e});var un={};C(`input,select,option,textarea,button,form,details`.split(`,`),function(e){un[e]=!0});var dn={ngMinlength:`minlength`,ngMaxlength:`maxlength`,ngMin:`min`,ngMax:`max`,ngPattern:`pattern`,ngStep:`step`};function fn(e,t){var n=ln[t.toLowerCase()];return n&&un[ge(e)]&&n}function pn(e){return dn[e]}C({data:Xt,removeData:Jt,hasData:Rt,cleanData:function(e){for(var t=0,n=e.length;t<n;t++)Jt(e[t]),qt(e[t])}},function(e,t){J[t]=e}),C({data:Xt,inheritedData:nn,scope:function(e){return d.data(e,`$scope`)||nn(e.parentNode||e,[`$isolateScope`,`$scope`])},isolateScope:function(e){return d.data(e,`$isolateScope`)||d.data(e,`$isolateScopeNoTemplate`)},controller:tn,injector:function(e){return nn(e,`$injector`)},removeAttr:function(e,t){e.removeAttribute(t)},hasClass:Zt,css:function(e,t,n){if(t=wt(t),L(n))e.style[t]=n;else return e.style[t]},attr:function(e,t,n){var r,i=e.nodeType;if(!(i===st||i===ot||i===ct||!e.getAttribute)){var a=c(t),o=ln[a];if(L(n))n===null||n===!1&&o?e.removeAttribute(t):e.setAttribute(t,o?a:n);else return r=e.getAttribute(t),o&&r!==null&&(r=a),r===null?void 0:r}},prop:function(e,t,n){if(L(n))e[t]=n;else return e[t]},text:(function(){return e.$dv=``,e;function e(e,t){if(I(t)){var n=e.nodeType;return n===at||n===st?e.textContent:``}e.textContent=t}})(),val:function(e,t){if(I(t)){if(e.multiple&&ge(e)===`select`){var n=[];return C(e.options,function(e){e.selected&&n.push(e.value||e.text)}),n}return e.value}e.value=t},html:function(e,t){if(I(t))return e.innerHTML;Wt(e,!0),e.innerHTML=t},empty:rn},function(e,t){J.prototype[t]=function(t,n){var r,i,a=this.length;if(e!==rn&&I(e.length===2&&e!==Zt&&e!==tn?t:n)){if(R(t)){for(r=0;r<a;r++)if(e===Xt)e(this[r],t);else for(i in t)e(this[r],i,t[i]);return this}for(var o=e.$dv,s=I(o)?Math.min(a,1):a,c=0;c<s;c++){var l=e(this[c],t,n);o=o?o+l:l}return o}for(r=0;r<a;r++)e(this[r],t,n);return this}});function mn(e,t){var n=function(n,r){n.isDefaultPrevented=function(){return n.defaultPrevented};var i=t[r||n.type],a=i?i.length:0;if(a){if(I(n.immediatePropagationStopped)){var o=n.stopImmediatePropagation;n.stopImmediatePropagation=function(){n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),o&&o.call(n)}}n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===!0};var s=i.specialHandlerWrapper||hn;a>1&&(i=ft(i));for(var c=0;c<a;c++)n.isImmediatePropagationStopped()||s(e,n,i[c])}};return n.elem=e,n}function hn(e,t,n){n.call(e,t)}function gn(e,t,n){var r=t.relatedTarget;(!r||r!==e&&!Ht.call(e,r))&&n.call(e,t)}C({removeData:Jt,on:function(e,t,n,r){if(L(r))throw Ct(`onargs`,"jqLite#on() does not support the `selector` or `eventData` parameters");if(Lt(e)){var i=Yt(e,!0),a=i.events,o=i.handle;o||=i.handle=mn(e,a);for(var s=t.indexOf(` `)>=0?t.split(` `):[t],c=s.length,l=function(t,r,i){var s=a[t];s||(s=a[t]=[],s.specialHandlerWrapper=r,t!==`$destroy`&&!i&&e.addEventListener(t,o)),s.push(n)};c--;)t=s[c],St[t]?(l(St[t],gn),l(t,void 0,!0)):l(t)}},off:qt,one:function(e,t,n){e=d(e),e.on(t,function r(){e.off(t,n),e.off(t,r)}),e.on(t,n)},replaceWith:function(e,t){var n,r=e.parentNode;Wt(e),C(new J(t),function(t){n?r.insertBefore(t,n.nextSibling):r.replaceChild(t,e),n=t})},children:function(e){var t=[];return C(e.childNodes,function(e){e.nodeType===at&&t.push(e)}),t},contents:function(e){return e.contentDocument||e.childNodes||[]},append:function(e,t){var n=e.nodeType;if(n===at||n===ut){t=new J(t);for(var r=0,i=t.length;r<i;r++){var a=t[r];e.appendChild(a)}}},prepend:function(e,t){if(e.nodeType===at){var n=e.firstChild;C(new J(t),function(t){e.insertBefore(t,n)})}},wrap:function(e,t){Vt(e,d(t).eq(0).clone()[0])},remove:an,detach:function(e){an(e,!0)},after:function(e,t){var n=e,r=e.parentNode;if(r){t=new J(t);for(var i=0,a=t.length;i<a;i++){var o=t[i];r.insertBefore(o,n.nextSibling),n=o}}},addClass:$t,removeClass:Qt,toggleClass:function(e,t,n){t&&C(t.split(` `),function(t){var r=n;I(r)&&(r=!Zt(e,t)),(r?$t:Qt)(e,t)})},parent:function(e){var t=e.parentNode;return t&&t.nodeType!==ut?t:null},next:function(e){return e.nextElementSibling},find:function(e,t){return e.getElementsByTagName?e.getElementsByTagName(t):[]},clone:Ut,triggerHandler:function(e,t,n){var r,i,a,o=t.type||t,s=Yt(e),c=s&&s.events,l=c&&c[o];l&&(r={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:P,type:o,target:e},t.type&&(r=k(r,t)),i=ft(l),a=n?[r].concat(n):[r],C(i,function(t){r.isImmediatePropagationStopped()||t.apply(e,a)}))}},function(e,t){J.prototype[t]=function(t,n,r){for(var i,a=0,o=this.length;a<o;a++)I(i)?(i=e(this[a],t,n,r),L(i)&&(i=d(i))):en(i,e(this[a],t,n,r));return L(i)?i:this}}),J.prototype.bind=J.prototype.on,J.prototype.unbind=J.prototype.off;function _n(){this.$get=function(){return k(J,{hasClass:function(e,t){return e.attr&&(e=e[0]),Zt(e,t)},addClass:function(e,t){return e.attr&&(e=e[0]),$t(e,t)},removeClass:function(e,t){return e.attr&&(e=e[0]),Qt(e,t)}})}}function vn(e,t){var n=e&&e.$$hashKey;if(n)return typeof n==`function`&&(n=e.$$hashKey()),n;var r=typeof e;return n=r===`function`||r===`object`&&e!==null?e.$$hashKey=r+`:`+(t||E)():r+`:`+e,n}var yn=Object.create(null);function bn(){this._keys=[],this._values=[],this._lastKey=NaN,this._lastIndex=-1}bn.prototype={_idx:function(e){return e!==this._lastKey&&(this._lastKey=e,this._lastIndex=this._keys.indexOf(e)),this._lastIndex},_transformKey:function(e){return M(e)?yn:e},get:function(e){e=this._transformKey(e);var t=this._idx(e);if(t!==-1)return this._values[t]},has:function(e){return e=this._transformKey(e),this._idx(e)!==-1},set:function(e,t){e=this._transformKey(e);var n=this._idx(e);n===-1&&(n=this._lastIndex=this._keys.length),this._keys[n]=e,this._values[n]=t},delete:function(e){e=this._transformKey(e);var t=this._idx(e);return t!==-1&&(this._keys.splice(t,1),this._values.splice(t,1),this._lastKey=NaN,this._lastIndex=-1,!0)}};var xn=bn,Sn=[function(){this.$get=[function(){return xn}]}],Cn=/^([^(]+?)=>/,wn=/^[^(]*\(\s*([^)]*)\)/m,Tn=/,/,En=/^\s*(_?)(\S+?)\1\s*$/,Dn=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,On=i(`$injector`);function kn(e){return Function.prototype.toString.call(e)}function An(e){var t=kn(e).replace(Dn,``);return t.match(Cn)||t.match(wn)}function jn(e){var t=An(e);return t?`function(`+(t[1]||``).replace(/[\s\r\n]+/,` `)+`)`:`fn`}function Mn(e,t,n){var r,i,a;if(typeof e==`function`){if(!(r=e.$inject)){if(r=[],e.length){if(t)throw(!B(n)||!n)&&(n=e.name||jn(e)),On(`strictdi`,`{0} is not using explicit annotation and cannot be invoked in strict mode`,n);i=An(e),C(i[1].split(Tn),function(e){e.replace(En,function(e,t,n){r.push(n)})})}e.$inject=r}}else U(e)?(a=e.length-1,et(e[a],`fn`),r=e.slice(0,a)):et(e,`fn`,!0);return r}function Nn(e,t){t=t===!0;var n={},r=`Provider`,i=[],a=new xn,o={$provide:{provider:p(m),factory:p(g),service:p(_),value:p(v),constant:p(x),decorator:S}},s=o.$injector=E(o,function(e,t){throw y.isString(t)&&i.push(t),On(`unpr`,`Unknown provider: {0}`,i.join(` <- `))}),c={},l=E(c,function(e,t){var n=s.get(e+r,t);return d.invoke(n.$get,n,void 0,e)}),d=l;o[`$injector`+r]={$get:F(l)},d.modules=s.modules=q();var f=w(e);return d=l.get(`$injector`),d.strictDi=t,C(f,function(e){e&&d.invoke(e)}),d.loadNewModules=function(e){C(w(e),function(e){e&&d.invoke(e)})},d;function p(e){return function(t,n){if(R(t))C(t,T(e));else return e(t,n)}}function m(e,t){if(tt(e,`service`),(W(t)||U(t))&&(t=s.instantiate(t)),!t.$get)throw On(`pget`,`Provider '{0}' must define $get factory method.`,e);return o[e+r]=t}function h(e,t){return function(){var n=d.invoke(t,this);if(I(n))throw On(`undef`,`Provider '{0}' must return a value from $get factory method.`,e);return n}}function g(e,t,n){return m(e,{$get:n===!1?t:h(e,t)})}function _(e,t){return g(e,[`$injector`,function(e){return e.instantiate(t)}])}function v(e,t){return g(e,F(t),!1)}function x(e,t){tt(e,`constant`),o[e]=t,c[e]=t}function S(e,t){var n=s.get(e+r),i=n.$get;n.$get=function(){var e=d.invoke(i,n);return d.invoke(t,null,{$delegate:e})}}function w(e){$e(I(e)||U(e),`modulesToLoad`,`not an array`);var t=[],n;return C(e,function(e){if(a.get(e))return;a.set(e,!0);function r(e){var t,n;for(t=0,n=e.length;t<n;t++){var r=e[t],i=s.get(r[0]);i[r[1]].apply(i,r[2])}}try{B(e)?(n=b(e),d.modules[e]=n,t=t.concat(w(n.requires)).concat(n._runBlocks),r(n._invokeQueue),r(n._configBlocks)):W(e)||U(e)?t.push(s.invoke(e)):et(e,`module`)}catch(t){throw U(e)&&(e=e[e.length-1]),t.message&&t.stack&&t.stack.indexOf(t.message)===-1&&(t=t.message+`
`+t.stack),On(`modulerr`,`Failed to instantiate module {0} due to:
{1}`,e,t.stack||t.message||t)}}),t}function E(e,a){function s(t,r){if(e.hasOwnProperty(t)){if(e[t]===n)throw On(`cdep`,`Circular dependency found: {0}`,t+` <- `+i.join(` <- `));return e[t]}try{return i.unshift(t),e[t]=n,e[t]=a(t,r),e[t]}catch(r){throw e[t]===n&&delete e[t],r}finally{i.shift()}}function c(e,n,r){for(var i=[],a=Nn.$$annotate(e,t,r),o=0,c=a.length;o<c;o++){var l=a[o];if(typeof l!=`string`)throw On(`itkn`,`Incorrect injection token! Expected service name as string, got {0}`,l);i.push(n&&n.hasOwnProperty(l)?n[l]:s(l,r))}return i}function l(e){if(u||typeof e!=`function`)return!1;var t=e.$$ngIsClass;return le(t)||(t=e.$$ngIsClass=/^class\b/.test(kn(e))),t}function d(e,t,n,r){typeof n==`string`&&(r=n,n=null);var i=c(e,n,r);return U(e)&&(e=e[e.length-1]),l(e)?(i.unshift(null),new(Function.prototype.bind.apply(e,i))):e.apply(t,i)}function f(e,t,n){var r=U(e)?e[e.length-1]:e,i=c(e,t,n);return i.unshift(null),new(Function.prototype.bind.apply(r,i))}return{invoke:d,instantiate:f,get:s,annotate:Nn.$$annotate,has:function(t){return o.hasOwnProperty(t+r)||e.hasOwnProperty(t)}}}}Nn.$$annotate=Mn;function Pn(){var e=!0;this.disableAutoScrolling=function(){e=!1},this.$get=[`$window`,`$location`,`$rootScope`,function(t,n,r){var i=t.document;function a(e){var t=null;return Array.prototype.some.call(e,function(e){if(ge(e)===`a`)return t=e,!0}),t}function o(){var e=c.yOffset;if(W(e))e=e();else if(me(e)){var n=e[0];e=t.getComputedStyle(n).position===`fixed`?n.getBoundingClientRect().bottom:0}else V(e)||(e=0);return e}function s(e){if(e){e.scrollIntoView();var n=o();if(n){var r=e.getBoundingClientRect().top;t.scrollBy(0,r-n)}}else t.scrollTo(0,0)}function c(e){e=B(e)?e:V(e)?e.toString():n.hash();var t;e?(t=i.getElementById(e))||(t=a(i.getElementsByName(e)))?s(t):e===`top`&&s(null):s(null)}return e&&r.$watch(function(){return n.hash()},function(e,t){(e!==t||e!==``)&&on(function(){r.$evalAsync(c)})}),c}]}var Fn=i(`$animate`),In=1,Ln=`ng-animate`;function Rn(e,t){return!e&&!t?``:e?t?(U(e)&&(e=e.join(` `)),U(t)&&(t=t.join(` `)),e+` `+t):e:t}function zn(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.nodeType===In)return n}}function Bn(e){B(e)&&(e=e.split(` `));var t=q();return C(e,function(e){e.length&&(t[e]=!0)}),t}function Vn(e){return R(e)?e:{}}var Hn=function(){this.$get=P},Un=function(){var e=new xn,t=[];this.$get=[`$$AnimateRunner`,`$rootScope`,function(n,r){return{enabled:P,on:P,off:P,pin:P,push:function(e,t,r,i){i&&i(),r||={},r.from&&e.css(r.from),r.to&&e.css(r.to),(r.addClass||r.removeClass)&&o(e,r.addClass,r.removeClass);var a=new n;return a.complete(),a}};function i(e,t,n){var r=!1;return t&&(t=B(t)?t.split(` `):U(t)?t:[],C(t,function(t){t&&(r=!0,e[t]=n)})),r}function a(){C(t,function(t){var n=e.get(t);if(n){var r=Bn(t.attr(`class`)),i=``,a=``;C(n,function(e,t){e!==!!r[t]&&(e?i+=(i.length?` `:``)+t:a+=(a.length?` `:``)+t)}),C(t,function(e){i&&$t(e,i),a&&Qt(e,a)}),e.delete(t)}}),t.length=0}function o(n,o,s){var c=e.get(n)||{},l=i(c,o,!0),u=i(c,s,!1);(l||u)&&(e.set(n,c),t.push(n),t.length===1&&r.$$postDigest(a))}}]},Wn=[`$provide`,function(e){var t=this,n=null,r=null;this.$$registeredAnimations=Object.create(null),this.register=function(n,r){if(n&&n.charAt(0)!==`.`)throw Fn(`notcsel`,`Expecting class selector starting with '.' got '{0}'.`,n);var i=n+`-animation`;t.$$registeredAnimations[n.substr(1)]=i,e.factory(i,r)},this.customFilter=function(e){return arguments.length===1&&(r=W(e)?e:null),r},this.classNameFilter=function(e){if(arguments.length===1&&(n=e instanceof RegExp?e:null,n&&RegExp(`[(\\s|\\/)]`+Ln+`[(\\s|\\/)]`).test(n.toString())))throw n=null,Fn(`nongcls`,`$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.`,Ln);return n},this.$get=[`$$animateQueue`,function(e){function t(e,t,n){if(n){var r=zn(n);r&&!r.parentNode&&!r.previousElementSibling&&(n=null)}n?n.after(e):t.prepend(e)}return{on:e.on,off:e.off,pin:e.pin,enabled:e.enabled,cancel:function(e){e.cancel&&e.cancel()},enter:function(n,r,i,a){return r&&=d(r),i&&=d(i),r||=i.parent(),t(n,r,i),e.push(n,`enter`,Vn(a))},move:function(n,r,i,a){return r&&=d(r),i&&=d(i),r||=i.parent(),t(n,r,i),e.push(n,`move`,Vn(a))},leave:function(t,n){return e.push(t,`leave`,Vn(n),function(){t.remove()})},addClass:function(t,n,r){return r=Vn(r),r.addClass=Rn(r.addclass,n),e.push(t,`addClass`,r)},removeClass:function(t,n,r){return r=Vn(r),r.removeClass=Rn(r.removeClass,n),e.push(t,`removeClass`,r)},setClass:function(t,n,r,i){return i=Vn(i),i.addClass=Rn(i.addClass,n),i.removeClass=Rn(i.removeClass,r),e.push(t,`setClass`,i)},animate:function(t,n,r,i,a){return a=Vn(a),a.from=a.from?k(a.from,n):n,a.to=a.to?k(a.to,r):r,i||=`ng-inline-animate`,a.tempClasses=Rn(a.tempClasses,i),e.push(t,`animate`,a)}}}]}],Gn=function(){this.$get=[`$$rAF`,function(e){var t=[];function n(n){t.push(n),!(t.length>1)&&e(function(){for(var e=0;e<t.length;e++)t[e]();t=[]})}return function(){var e=!1;return n(function(){e=!0}),function(t){e?t():n(t)}}}]},Kn=function(){this.$get=[`$q`,`$sniffer`,`$$animateAsyncRun`,`$$isDocumentHidden`,`$timeout`,function(e,t,n,r,i){a.chain=function(e,t){var n=0;r();function r(){if(n===e.length){t(!0);return}e[n](function(e){if(e===!1){t(!1);return}n++,r()})}},a.all=function(e,t){var n=0,r=!0;C(e,function(e){e.done(i)});function i(i){r&&=i,++n===e.length&&t(r)}};function a(e){this.setHost(e);var t=n(),a=function(e){i(e,0,!1)};this._doneCallbacks=[],this._tick=function(e){r()?a(e):t(e)},this._state=0}return a.prototype={setHost:function(e){this.host=e||{}},done:function(e){this._state===2?e():this._doneCallbacks.push(e)},progress:P,getPromise:function(){if(!this.promise){var t=this;this.promise=e(function(e,n){t.done(function(t){t===!1?n():e()})})}return this.promise},then:function(e,t){return this.getPromise().then(e,t)},catch:function(e){return this.getPromise().catch(e)},finally:function(e){return this.getPromise().finally(e)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(e){var t=this;t._state===0&&(t._state=1,t._tick(function(){t._resolve(e)}))},_resolve:function(e){this._state!==2&&(C(this._doneCallbacks,function(t){t(e)}),this._doneCallbacks.length=0,this._state=2)}},a}]},qn=function(){this.$get=[`$$rAF`,`$q`,`$$AnimateRunner`,function(e,t,n){return function(t,r){var i=r||{};i.$$prepared||(i=ye(i)),i.cleanupStyles&&(i.from=i.to=null),i.from&&(t.css(i.from),i.from=null);var a,o=new n;return{start:s,end:s};function s(){return e(function(){c(),a||o.complete(),a=!0}),o}function c(){i.addClass&&(t.addClass(i.addClass),i.addClass=null),i.removeClass&&(t.removeClass(i.removeClass),i.removeClass=null),i.to&&(t.css(i.to),i.to=null)}}}]};function Jn(e){var t=e.indexOf(`#`);return t===-1?``:e.substr(t)}function Yn(e){return e.replace(/#$/,``)}function Xn(e,t,n,r,i){var a=this,o=e.location,s=e.history,c=e.setTimeout,l=e.clearTimeout,u={},f=i(n);a.isMock=!1,a.$$completeOutstandingRequest=f.completeTask,a.$$incOutstandingRequestCount=f.incTaskCount,a.notifyWhenNoOutstandingRequests=f.notifyWhenNoPendingTasks;var p,m,h=o.href,g=t.find(`base`),_=null,v=r.history?function(){try{return s.state}catch{}}:P;w(),a.url=function(t,n,i){if(I(i)&&(i=null),o!==e.location&&(o=e.location),s!==e.history&&(s=e.history),t){var c=m===i;if(t=aa(t).href,h===t&&(!r.history||c))return a;var l=h&&$r(h)===$r(t);return h=t,m=i,r.history&&(!l||!c)?(s[n?`replaceState`:`pushState`](i,``,t),w()):(l||(_=t),n?o.replace(t):l?o.hash=Jn(t):o.href=t,o.href!==t&&(_=t)),_&&=t,a}return Yn(_||o.href)},a.state=function(){return p};var y=[],b=!1;function x(){_=null,T()}var S=null;function w(){p=v(),p=I(p)?null:p,xe(p,S)&&(p=S),S=p,m=p}function T(){var e=m;w(),(h!==a.url()||e!==p)&&(h=a.url(),m=p,C(y,function(e){e(a.url(),p)}))}a.onUrlChange=function(t){return b||=(r.history&&d(e).on(`popstate`,x),d(e).on(`hashchange`,x),!0),y.push(t),t},a.$$applicationDestroyed=function(){d(e).off(`hashchange popstate`,x)},a.$$checkUrlChange=T,a.baseHref=function(){var e=g.attr(`href`);return e?e.replace(/^(https?:)?\/\/[^/]*/,``):``},a.defer=function(e,t,n){var r;return t||=0,n||=f.DEFAULT_TASK_TYPE,f.incTaskCount(n),r=c(function(){delete u[r],f.completeTask(e,n)},t),u[r]=n,r},a.defer.cancel=function(e){if(u.hasOwnProperty(e)){var t=u[e];return delete u[e],l(e),f.completeTask(P,t),!0}return!1}}function Zn(){this.$get=[`$window`,`$log`,`$sniffer`,`$document`,`$$taskTrackerFactory`,function(e,t,n,r,i){return new Xn(e,r,t,n,i)}]}function Qn(){this.$get=function(){var e={};function t(t,n){if(t in e)throw i(`$cacheFactory`)(`iid`,`CacheId '{0}' is already taken!`,t);var r=0,a=k({},n,{id:t}),o=q(),s=n&&n.capacity||Number.MAX_VALUE,c=q(),l=null,u=null;return e[t]={put:function(e,t){if(!I(t))return s<Number.MAX_VALUE&&d(c[e]||(c[e]={key:e})),e in o||r++,o[e]=t,r>s&&this.remove(u.key),t},get:function(e){if(s<Number.MAX_VALUE){var t=c[e];if(!t)return;d(t)}return o[e]},remove:function(e){if(s<Number.MAX_VALUE){var t=c[e];if(!t)return;t===l&&(l=t.p),t===u&&(u=t.n),f(t.n,t.p),delete c[e]}e in o&&(delete o[e],r--)},removeAll:function(){o=q(),r=0,c=q(),l=u=null},destroy:function(){o=null,a=null,c=null,delete e[t]},info:function(){return k({},a,{size:r})}};function d(e){e!==l&&(u?u===e&&(u=e.n):u=e,f(e.n,e.p),f(e,l),l=e,l.n=null)}function f(e,t){e!==t&&(e&&(e.p=t),t&&(t.n=e))}}return t.info=function(){var t={};return C(e,function(e,n){t[n]=e.info()}),t},t.get=function(t){return e[t]},t}}function $n(){this.$get=[`$cacheFactory`,function(e){return e(`templates`)}]}var Y=i(`$compile`);function er(){}var tr=new er;nr.$inject=[`$provide`,`$$sanitizeUriProvider`];function nr(t,n){var r={},i=`Directive`,a=/^\s*directive:\s*([\w-]+)\s+(.*)$/,o=/(([\w-]+)(?::([^;]+))?;?)/,l=he(`ngSrc,ngSrcset,src,srcset`),f=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,p=/^(on[a-z]+|formaction)$/,m=q();function h(e,t,n){var r=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,i=q();return C(e,function(e,a){if(e=e.trim(),e in m){i[a]=m[e];return}var o=e.match(r);if(!o)throw Y(`iscp`,`Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}`,t,a,e,n?`controller bindings definition`:`isolate scope definition`);i[a]={mode:o[1][0],collection:o[2]===`*`,optional:o[3]===`?`,attrName:o[4]||a},o[4]&&(m[e]=i[a])}),i}function _(e,t){var n={isolateScope:null,bindToController:null};if(R(e.scope)&&(e.bindToController===!0?(n.bindToController=h(e.scope,t,!0),n.isolateScope={}):n.isolateScope=h(e.scope,t,!1)),R(e.bindToController)&&(n.bindToController=h(e.bindToController,t,!0)),n.bindToController&&!e.controller)throw Y(`noctrl`,`Cannot bind to controller without directive '{0}'s controller.`,t);return n}function v(e){var t=e.charAt(0);if(!t||t!==c(t))throw Y(`baddir`,`Directive/Component name '{0}' is invalid. The first character must be a lowercase letter`,e);if(e!==e.trim())throw Y(`baddir`,`Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces`,e)}function y(e){var t=e.require||e.controller&&e.name;return!U(t)&&R(t)&&C(t,function(e,n){var r=e.match(f);e.substring(r[0].length)||(t[n]=r[0]+n)}),t}function b(e,t){if(e&&!(B(e)&&/[EACM]/.test(e)))throw Y(`badrestrict`,`Restrict property '{0}' of directive '{1}' is invalid`,e,t);return e||`EA`}this.directive=function e(n,a){return $e(n,`name`),tt(n,`directive`),B(n)?(v(n),$e(a,`directiveFactory`),r.hasOwnProperty(n)||(r[n]=[],t.factory(n+i,[`$injector`,`$exceptionHandler`,function(e,t){var i=[];return C(r[n],function(r,a){try{var o=e.invoke(r);W(o)?o={compile:F(o)}:!o.compile&&o.link&&(o.compile=F(o.link)),o.priority=o.priority||0,o.index=a,o.name=o.name||n,o.require=y(o),o.restrict=b(o.restrict,n),o.$$moduleName=r.$$moduleName,i.push(o)}catch(e){t(e)}}),i}])),r[n].push(a)):C(n,T(e)),this},this.component=function e(t,n){if(!B(t))return C(t,T(Ee(this,e))),this;var r=n.controller||function(){};function i(e){function t(t){return W(t)||U(t)?function(n,r){return e.invoke(t,this,{$element:n,$attrs:r})}:t}var i=!n.template&&!n.templateUrl?``:n.template,a={controller:r,controllerAs:dr(n.controller)||n.controllerAs||`$ctrl`,template:t(i),templateUrl:t(n.templateUrl),transclude:n.transclude,scope:{},bindToController:n.bindings||{},restrict:`E`,require:n.require};return C(n,function(e,t){t.charAt(0)===`$`&&(a[t]=e)}),a}return C(n,function(e,t){t.charAt(0)===`$`&&(i[t]=e,W(r)&&(r[t]=e))}),i.$inject=[`$injector`],this.directive(t,i)},this.aHrefSanitizationTrustedUrlList=function(e){return L(e)?(n.aHrefSanitizationTrustedUrlList(e),this):n.aHrefSanitizationTrustedUrlList()},Object.defineProperty(this,"aHrefSanitizationWhitelist",{get:function(){return this.aHrefSanitizationTrustedUrlList},set:function(e){this.aHrefSanitizationTrustedUrlList=e}}),this.imgSrcSanitizationTrustedUrlList=function(e){return L(e)?(n.imgSrcSanitizationTrustedUrlList(e),this):n.imgSrcSanitizationTrustedUrlList()},Object.defineProperty(this,"imgSrcSanitizationWhitelist",{get:function(){return this.imgSrcSanitizationTrustedUrlList},set:function(e){this.imgSrcSanitizationTrustedUrlList=e}});var x=!0;this.debugInfoEnabled=function(e){return L(e)?(x=e,this):x};var S=!1;this.strictComponentBindingsEnabled=function(e){return L(e)?(S=e,this):S};var w=10;this.onChangesTtl=function(e){return arguments.length?(w=e,this):w};var E=!0;this.commentDirectivesEnabled=function(e){return arguments.length?(E=e,this):E};var D=!0;this.cssClassDirectivesEnabled=function(e){return arguments.length?(D=e,this):D};var O=q();this.addPropertySecurityContext=function(e,t,n){var r=e.toLowerCase()+`|`+t.toLowerCase();if(r in O&&O[r]!==n)throw Y(`ctxoverride`,`Property context '{0}.{1}' already set to '{2}', cannot override to '{3}'.`,e,t,O[r],n);return O[r]=n,this},(function(){function e(e,t){C(t,function(t){O[t.toLowerCase()]=e})}e(Q.HTML,[`iframe|srcdoc`,`*|innerHTML`,`*|outerHTML`]),e(Q.CSS,[`*|style`]),e(Q.URL,[`area|href`,`area|ping`,`a|href`,`a|ping`,`blockquote|cite`,`body|background`,`del|cite`,`input|src`,`ins|cite`,`q|cite`]),e(Q.MEDIA_URL,[`audio|src`,`img|src`,`img|srcset`,`source|src`,`source|srcset`,`track|src`,`video|src`,`video|poster`]),e(Q.RESOURCE_URL,[`*|formAction`,`applet|code`,`applet|codebase`,`base|href`,`embed|src`,`frame|src`,`form|action`,`head|profile`,`html|manifest`,`iframe|src`,`link|href`,`media|src`,`object|codebase`,`object|data`,`script|src`])})(),this.$get=[`$injector`,`$interpolate`,`$exceptionHandler`,`$templateRequest`,`$parse`,`$controller`,`$rootScope`,`$sce`,`$animate`,function(t,n,m,h,v,y,b,T,A){var j=/^\w/,M=e.document.createElement(`div`),F=E,te=D,L=w,z;function V(){try{if(!--L)throw z=void 0,Y(`infchng`,`{0} $onChanges() iterations reached. Aborting!
`,w);b.$apply(function(){for(var e=0,t=z.length;e<t;++e)try{z[e]()}catch(e){m(e)}z=void 0})}finally{L++}}function H(e,t){if(!e)return e;if(!B(e))throw Y(`srcset`,'Can\'t pass trusted values to `{0}`: "{1}"',t,e.toString());for(var n=``,r=K(e),i=/\s/.test(r)?/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/:/(,)/,a=r.split(i),o=Math.floor(a.length/2),s=0;s<o;s++){var c=s*2;n+=T.getTrustedMediaUrl(K(a[c])),n+=` `+K(a[c+1])}var l=K(a[s*2]).split(/\s/);return n+=T.getTrustedMediaUrl(K(l[0])),l.length===2&&(n+=` `+K(l[1])),n}function re(e,t){if(t){var n=Object.keys(t),r,i,a;for(r=0,i=n.length;r<i;r++)a=n[r],this[a]=t[a]}else this.$attr={};this.$$element=e}re.prototype={$normalize:or,$addClass:function(e){e&&e.length>0&&A.addClass(this.$$element,e)},$removeClass:function(e){e&&e.length>0&&A.removeClass(this.$$element,e)},$updateClass:function(e,t){var n=sr(e,t);n&&n.length&&A.addClass(this.$$element,n);var r=sr(t,e);r&&r.length&&A.removeClass(this.$$element,r)},$set:function(e,t,n,r){var i=this.$$element[0],a=fn(i,e),o=pn(e),s=e,c;a?(this.$$element.prop(e,t),r=a):o&&(this[o]=t,s=o),this[e]=t,r?this.$attr[e]=r:(r=this.$attr[e],r||(this.$attr[e]=r=Ye(e,`-`))),c=ge(this.$$element),c===`img`&&e===`srcset`&&(this[e]=t=H(t,`$set('srcset', value)`)),n!==!1&&(t===null||I(t)?this.$$element.removeAttr(r):j.test(r)?a&&t===!1?this.$$element.removeAttr(r):this.$$element.attr(r,t):ie(this.$$element[0],r,t));var l=this.$$observers;l&&C(l[s],function(e){try{e(t)}catch(e){m(e)}})},$observe:function(e,t){var n=this,r=n.$$observers||=q(),i=r[e]||(r[e]=[]);return i.push(t),b.$evalAsync(function(){!i.$$inter&&n.hasOwnProperty(e)&&!I(n[e])&&t(n[e])}),function(){ve(i,t)}}};function ie(e,t,n){M.innerHTML=`<span `+t+`>`;var r=M.firstChild.attributes,i=r[0];r.removeNamedItem(i.name),i.value=n,e.attributes.setNamedItem(i)}function oe(e,t){try{e.addClass(t)}catch{}}var se=n.startSymbol(),ce=n.endSymbol(),ue=se===`{{`&&ce===`}}`?ee:function(e){return e.replace(/\{\{/g,se).replace(/}}/g,ce)},de=/^ng(Attr|Prop|On)([A-Z].*)$/,fe=/^(.+)Start$/;return G.$$addBindingInfo=x?function(e,t){var n=e.data(`$binding`)||[];U(t)?n=n.concat(t):n.push(t),e.data(`$binding`,n)}:P,G.$$addBindingClass=x?function(e){oe(e,`ng-binding`)}:P,G.$$addScopeInfo=x?function(e,t,n,r){var i=n?r?`$isolateScopeNoTemplate`:`$isolateScope`:`$scope`;e.data(i,t)}:P,G.$$addScopeClass=x?function(e,t){oe(e,t?`ng-isolate-scope`:`ng-scope`)}:P,G.$$createComment=function(t,n){var r=``;return x&&(r=` `+(t||``)+`: `,n&&(r+=n+` `)),e.document.createComment(r)},G;function G(e,t,n,r,i){e instanceof d||(e=d(e));var a=me(e,t,e,n,r,i);G.$$addScopeClass(e);var o=null;return function(t,n,r){if(!e)throw Y(`multilink`,`This element has already been linked.`);$e(t,`scope`),i&&i.needsNewScope&&(t=t.$parent.$new()),r||={};var s=r.parentBoundTranscludeFn,c=r.transcludeControllers,l=r.futureParentElement;s&&s.$$boundTransclude&&(s=s.$$boundTransclude),o||=pe(l);var u=o===`html`?n?cn.clone.call(e):e:d(Be(o,d(`<div></div>`).append(e).html()));if(c)for(var f in c)u.data(`$`+f+`Controller`,c[f].instance);return G.$$addScopeInfo(u,t),n&&n(u,t),a&&a(t,u,u,s),n||(e=a=null),u}}function pe(e){var t=e&&e[0];return t&&ge(t)!==`foreignobject`&&g.call(t).match(/SVG/)?`svg`:`html`}function me(e,t,n,r,i,a){for(var o=[],s=U(e)||e instanceof d,c,l,f,p,m,h,g,_=0;_<e.length;_++)c=new re,u===11&&he(e,_,s),l=ye(e[_],[],c,_===0?r:void 0,i),f=l.length?Oe(l,e[_],c,t,n,null,[],[],a):null,f&&f.scope&&G.$$addScopeClass(c.$$element),m=f&&f.terminal||!(p=e[_].childNodes)||!p.length?null:me(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:t),(f||m)&&(o.push(_,f,m),h=!0,g||=f),a=null;return h?v:null;function v(e,n,r,i){var a,s,c,l,u,f,p,m,h;if(g){var _=n.length;for(h=Array(_),u=0;u<o.length;u+=3)p=o[u],h[p]=n[p]}else h=n;for(u=0,f=o.length;u<f;)c=h[o[u++]],a=o[u++],s=o[u++],a?(a.scope?(l=e.$new(),G.$$addScopeInfo(d(c),l)):l=e,m=a.transcludeOnThisElement?_e(e,a.transclude,i):!a.templateOnThisElement&&i?i:!i&&t?_e(e,t):null,a(s,l,c,r,m)):s&&s(e,c.childNodes,void 0,i)}}function he(e,t,n){var r=e[t],i=r.parentNode,a;if(r.nodeType===st)for(;a=i?r.nextSibling:e[t+1],!(!a||a.nodeType!==st);)r.nodeValue+=a.nodeValue,a.parentNode&&a.parentNode.removeChild(a),n&&a===e[t+1]&&e.splice(t+1,1)}function _e(e,t,n){function r(r,i,a,o,s){return r||(r=e.$new(!1,s),r.$$transcluded=!0),t(r,i,{parentBoundTranscludeFn:n,transcludeControllers:a,futureParentElement:o})}var i=r.$$slots=q();for(var a in t.$$slots)i[a]=t.$$slots[a]?_e(e,t.$$slots[a],n):null;return r}function ye(e,t,n,r,i){var a=e.nodeType,s=n.$attr,c,l,u;switch(a){case at:l=ge(e),Me(t,or(l),`E`,r,i);for(var d,f,p,m,h,g=e.attributes,_=0,v=g&&g.length;_<v;_++){var y=!1,b=!1,x=!1,S=!1,C=!1,w;d=g[_],f=d.name,m=d.value,p=or(f.toLowerCase()),(h=p.match(de))?(x=h[1]===`Attr`,S=h[1]===`Prop`,C=h[1]===`On`,f=f.replace(ir,``).toLowerCase().substr(4+h[1].length).replace(/_(.)/g,function(e,t){return t.toUpperCase()})):(w=p.match(fe))&&Ne(w[1])&&(y=f,b=f.substr(0,f.length-5)+`end`,f=f.substr(0,f.length-6)),S||C?(n[p]=m,s[p]=d.name,S?We(e,t,p,f):Ge(t,p,f)):(p=or(f.toLowerCase()),s[p]=f,(x||!n.hasOwnProperty(p))&&(n[p]=m,fn(e,p)&&(n[p]=!0)),Ke(e,t,m,p,x),Me(t,p,`A`,r,i,y,b))}if(l===`input`&&e.getAttribute(`type`)===`hidden`&&e.setAttribute(`autocomplete`,`off`),!te)break;if(u=e.className,R(u)&&(u=u.animVal),B(u)&&u!==``)for(;c=o.exec(u);)p=or(c[2]),Me(t,p,`C`,r,i)&&(n[p]=K(c[3])),u=u.substr(c.index+c[0].length);break;case st:ze(t,e.nodeValue);break;case ct:if(!F)break;Se(e,t,n,r,i)}return t.sort(Le),t}function Se(e,t,n,r,i){try{var o=a.exec(e.nodeValue);if(o){var s=or(o[1]);Me(t,s,`M`,r,i)&&(n[s]=K(o[2]))}}catch{}}function Ce(e,t,n){var r=[],i=0;if(t&&e.hasAttribute&&e.hasAttribute(t))do{if(!e)throw Y(`uterdir`,`Unterminated attribute, found '{0}' but no matching '{1}' found.`,t,n);e.nodeType===at&&(e.hasAttribute(t)&&i++,e.hasAttribute(n)&&i--),r.push(e),e=e.nextSibling}while(i>0);else r.push(e);return d(r)}function we(e,t,n){return function(r,i,a,o,s){return i=Ce(i[0],t,n),e(r,i,a,o,s)}}function De(e,t,n,r,i,a){var o;return e?G(t,n,r,i,a):function(){return o||(o=G(t,n,r,i,a),t=n=a=null),o.apply(this,arguments)}}function Oe(t,n,r,i,a,o,s,c,l){l||={};for(var u=-Number.MAX_VALUE,f=l.newScopeDirective,p=l.controllerDirectives,h=l.newIsolateScopeDirective,g=l.templateDirective,_=l.nonTlbTranscludeDirective,v=!1,y=!1,b=l.hasElementTranscludeDirective,x=r.$$element=d(n),S,w,T,E=o,D=i,O,A=!1,j=!1,M,N=0,P=t.length;N<P;N++){S=t[N];var ee=S.$$start,F=S.$$end;if(ee&&(x=Ce(n,ee,F)),T=void 0,u>S.priority)break;if(M=S.scope,M&&(S.templateUrl||(R(M)?(Re(`new/isolated scope`,h||f,S,x),h=S):Re(`new/isolated scope`,h,S,x)),f||=S),w=S.name,!A&&(S.replace&&(S.templateUrl||S.template)||S.transclude&&!S.$$tlb)){for(var te,L=N+1;te=t[L++];)if(te.transclude&&!te.$$tlb||te.replace&&(te.templateUrl||te.template)){j=!0;break}A=!0}if(!S.templateUrl&&S.controller&&(p||=q(),Re(`'`+w+`' controller`,p[w],S,x),p[w]=S),M=S.transclude,M){if(v=!0,S.$$tlb||(Re(`transclusion`,_,S,x),_=S),M===`element`)b=!0,u=S.priority,T=x,x=r.$$element=d(G.$$createComment(w,r[w])),n=x[0],qe(a,Te(T),n),D=De(j,T,i,u,E&&E.name,{nonTlbTranscludeDirective:_});else{var z=q();if(!R(M))T=d(Ut(n)).contents();else{T=e.document.createDocumentFragment();var B=q(),V=q();for(var H in C(M,function(e,t){var n=e.charAt(0)===`?`;e=n?e.substring(1):e,B[e]=t,z[t]=null,V[t]=n}),C(x.contents(),function(t){var n=B[or(ge(t))];n?(V[n]=!0,z[n]=z[n]||e.document.createDocumentFragment(),z[n].appendChild(t)):T.appendChild(t)}),C(V,function(e,t){if(!e)throw Y(`reqslot`,"Required transclusion slot `{0}` was not filled.",t)}),z)if(z[H]){var ne=d(z[H].childNodes);z[H]=De(j,ne,i)}T=d(T.childNodes)}x.empty(),D=De(j,T,i,void 0,void 0,{needsNewScope:S.$$isolateScope||S.$$newScope}),D.$$slots=z}}if(S.template){if(y=!0,Re(`template`,g,S,x),g=S,M=W(S.template)?S.template(x,r):S.template,M=ue(M),S.replace){if(E=S,T=It(M)?[]:cr(Be(S.templateNamespace,K(M))),n=T[0],T.length!==1||n.nodeType!==at)throw Y(`tplrt`,`Template for directive '{0}' must have exactly one root element. {1}`,w,``);qe(a,x,n);var ie={$attr:{}},oe=ye(n,[],ie),se=t.splice(N+1,t.length-(N+1));(h||f)&&je(oe,h,f),t=t.concat(oe).concat(se),Fe(r,ie),P=t.length}else x.html(M)}if(S.templateUrl)y=!0,Re(`template`,g,S,x),g=S,S.replace&&(E=S),de=Ie(t.splice(N,t.length-N),x,r,a,v&&D,s,c,{controllerDirectives:p,newScopeDirective:f!==S&&f,newIsolateScopeDirective:h,templateDirective:g,nonTlbTranscludeDirective:_}),P=t.length;else if(S.compile)try{O=S.compile(x,r,D);var ce=S.$$originalDirective||S;W(O)?le(null,Ee(ce,O),ee,F):O&&le(Ee(ce,O.pre),Ee(ce,O.post),ee,F)}catch(e){m(e,Pe(x))}S.terminal&&(de.terminal=!0,u=Math.max(u,S.priority))}return de.scope=f&&f.scope===!0,de.transcludeOnThisElement=v,de.templateOnThisElement=y,de.transclude=D,l.hasElementTranscludeDirective=b,de;function le(e,t,n,r){e&&(n&&(e=we(e,n,r)),e.require=S.require,e.directiveName=w,(h===S||S.$$isolateScope)&&(e=Je(e,{isolateScope:!0})),s.push(e)),t&&(n&&(t=we(t,n,r)),t.require=S.require,t.directiveName=w,(h===S||S.$$isolateScope)&&(t=Je(t,{isolateScope:!0})),c.push(t))}function de(e,t,i,a,o){var l,u,_,v,y,x,S,w,T,E;for(var D in n===i?(T=r,w=r.$$element):(w=d(i),T=new re(w,r)),y=t,h?v=t.$new(!0):f&&(y=t.$parent),o&&(S=N,S.$$boundTransclude=o,S.isSlotFilled=function(e){return!!o.$$slots[e]}),p&&(x=Ae(w,T,S,p,v,t,h)),h&&(G.$$addScopeInfo(w,v,!0,!(g&&(g===h||g===h.$$originalDirective))),G.$$addScopeClass(w,!0),v.$$isolateBindings=h.$$isolateBindings,E=Qe(t,T,v,v.$$isolateBindings,h),E.removeWatches&&v.$on(`$destroy`,E.removeWatches)),x){var O=p[D],A=x[D],j=O.$$bindings.bindToController;A.instance=A(),w.data(`$`+O.name+`Controller`,A.instance),A.bindingInfo=Qe(y,T,A.instance,j,O)}for(C(p,function(e,t){var n=e.require;e.bindToController&&!U(n)&&R(n)&&k(x[t].instance,ke(t,n,w,x))}),C(x,function(e){var t=e.instance;if(W(t.$onChanges))try{t.$onChanges(e.bindingInfo.initialChanges)}catch(e){m(e)}if(W(t.$onInit))try{t.$onInit()}catch(e){m(e)}W(t.$doCheck)&&(y.$watch(function(){t.$doCheck()}),t.$doCheck()),W(t.$onDestroy)&&y.$on(`$destroy`,function(){t.$onDestroy()})}),l=0,u=s.length;l<u;l++)_=s[l],Xe(_,_.isolateScope?v:t,w,T,_.require&&ke(_.directiveName,_.require,w,x),S);var M=t;for(h&&(h.template||h.templateUrl===null)&&(M=v),e&&e(M,i.childNodes,void 0,o),l=c.length-1;l>=0;l--)_=c[l],Xe(_,_.isolateScope?v:t,w,T,_.require&&ke(_.directiveName,_.require,w,x),S);C(x,function(e){var t=e.instance;W(t.$postLink)&&t.$postLink()});function N(e,t,n,r){var i;if(ae(e)||(r=n,n=t,t=e,e=void 0),b&&(i=x),n||=b?w.parent():w,r){var a=o.$$slots[r];if(a)return a(e,t,i,n,M);if(I(a))throw Y(`noslot`,`No parent directive that requires a transclusion with slot name "{0}". Element: {1}`,r,Pe(w))}else return o(e,t,i,n,M)}}}function ke(e,t,n,r){var i;if(B(t)){var a=t.match(f),o=t.substring(a[0].length),s=a[1]||a[3],c=a[2]===`?`;if(s===`^^`?n=n.parent():(i=r&&r[o],i&&=i.instance),!i){var l=`$`+o+`Controller`;i=s===`^^`&&n[0]&&n[0].nodeType===lt?null:s?n.inheritedData(l):n.data(l)}if(!i&&!c)throw Y(`ctreq`,`Controller '{0}', required by directive '{1}', can't be found!`,o,e)}else if(U(t)){i=[];for(var u=0,d=t.length;u<d;u++)i[u]=ke(e,t[u],n,r)}else R(t)&&(i={},C(t,function(t,a){i[a]=ke(e,t,n,r)}));return i||null}function Ae(e,t,n,r,i,a,o){var s=q();for(var c in r){var l=r[c],u={$scope:l===o||l.$$isolateScope?i:a,$element:e,$attrs:t,$transclude:n},d=l.controller;d===`@`&&(d=t[l.name]);var f=y(d,u,!0,l.controllerAs);s[l.name]=f,e.data(`$`+l.name+`Controller`,f.instance)}return s}function je(e,t,n){for(var r=0,i=e.length;r<i;r++)e[r]=N(e[r],{$$isolateScope:t,$$newScope:n})}function Me(e,n,a,o,s,c,l){if(n===s)return null;var u=null;if(r.hasOwnProperty(n)){for(var d,f=t.get(n+i),p=0,m=f.length;p<m;p++)if(d=f[p],(I(o)||o>d.priority)&&d.restrict.indexOf(a)!==-1){if(c&&(d=N(d,{$$start:c,$$end:l})),!d.$$bindings){var h=d.$$bindings=_(d,d.name);R(h.isolateScope)&&(d.$$isolateBindings=h.isolateScope)}e.push(d),u=d}}return u}function Ne(e){if(r.hasOwnProperty(e)){for(var n,a=t.get(e+i),o=0,s=a.length;o<s;o++)if(n=a[o],n.multiElement)return!0}return!1}function Fe(e,t){var n=t.$attr,r=e.$attr;C(e,function(r,i){i.charAt(0)!==`$`&&(t[i]&&t[i]!==r&&(r.length?r+=(i===`style`?`;`:` `)+t[i]:r=t[i]),e.$set(i,r,!0,n[i]))}),C(t,function(t,i){!e.hasOwnProperty(i)&&i.charAt(0)!==`$`&&(e[i]=t,i!==`class`&&i!==`style`&&(r[i]=n[i]))})}function Ie(e,t,n,r,i,a,o,s){var c=[],l,u,f=t[0],p=e.shift(),g=N(p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),_=W(p.templateUrl)?p.templateUrl(t,n):p.templateUrl,v=p.templateNamespace;return t.empty(),h(_).then(function(m){var h,y,b,x;if(m=ue(m),p.replace){if(b=It(m)?[]:cr(Be(v,K(m))),h=b[0],b.length!==1||h.nodeType!==at)throw Y(`tplrt`,`Template for directive '{0}' must have exactly one root element. {1}`,p.name,_);y={$attr:{}},qe(r,t,h);var S=ye(h,[],y);R(p.scope)&&je(S,!0),e=S.concat(e),Fe(n,y)}else h=f,t.html(m);for(e.unshift(g),l=Oe(e,h,n,i,t,p,a,o,s),C(r,function(e,n){e===h&&(r[n]=t[0])}),u=me(t[0].childNodes,i);c.length;){var w=c.shift(),T=c.shift(),E=c.shift(),D=c.shift(),O=t[0];if(!w.$$destroyed){if(T!==f){var k=T.className;s.hasElementTranscludeDirective&&p.replace||(O=Ut(h)),qe(E,d(T),O),oe(d(O),k)}x=l.transcludeOnThisElement?_e(w,l.transclude,D):D,l(u,w,O,r,x)}}c=null}).catch(function(e){ne(e)&&m(e)}),function(e,t,n,r,i){var a=i;t.$$destroyed||(c?c.push(t,n,r,a):(l.transcludeOnThisElement&&(a=_e(t,l.transclude,i)),l(u,t,n,r,a)))}}function Le(e,t){var n=t.priority-e.priority;return n===0?e.name===t.name?e.index-t.index:e.name<t.name?-1:1:n}function Re(e,t,n,r){function i(e){return e?` (module: `+e+`)`:``}if(t)throw Y(`multidir`,`Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}`,t.name,i(t.$$moduleName),n.name,i(n.$$moduleName),e,Pe(r))}function ze(e,t){var r=n(t,!0);r&&e.push({priority:0,compile:function(e){var t=e.parent(),n=!!t.length;return n&&G.$$addBindingClass(t),function(e,t){var i=t.parent();n||G.$$addBindingClass(i),G.$$addBindingInfo(i,r.expressions),e.$watch(r,function(e){t[0].nodeValue=e})}}})}function Be(t,n){switch(t=c(t||`html`),t){case`svg`:case`math`:var r=e.document.createElement(`div`);return r.innerHTML=`<`+t+`>`+n+`</`+t+`>`,r.childNodes[0].childNodes;default:return n}}function Ve(e,t){if(t===`srcdoc`)return T.HTML;if(t===`src`||t===`ngSrc`)return[`img`,`video`,`audio`,`source`,`track`].indexOf(e)===-1?T.RESOURCE_URL:T.MEDIA_URL;if(t===`xlinkHref`)return e===`image`?T.MEDIA_URL:e===`a`?T.URL:T.RESOURCE_URL;if(e===`form`&&t===`action`||e===`base`&&t===`href`||e===`link`&&t===`href`)return T.RESOURCE_URL;if(e===`a`&&(t===`href`||t===`ngHref`))return T.URL}function He(e,t){var n=t.toLowerCase();return O[e+`|`+n]||O[`*|`+n]}function Ue(e){return H(T.valueOf(e),`ng-prop-srcset`)}function We(e,t,n,r){if(p.test(r))throw Y(`nodomevents`,`Property bindings for HTML DOM event properties are disallowed`);var i=ge(e),a=He(i,r),o=ee;r===`srcset`&&(i===`img`||i===`source`)?o=Ue:a&&(o=T.getTrusted.bind(T,a)),t.push({priority:100,compile:function(e,t){var i=v(t[n]),a=v(t[n],function(e){return T.valueOf(e)});return{pre:function(e,t){function n(){var n=i(e);t[0][r]=o(n)}n(),e.$watch(a,n)}}}})}function Ge(e,t,n){e.push(ts(v,b,m,t,n,!1))}function Ke(e,t,r,i,a){var o=ge(e),s=Ve(o,i),c=!a,u=l[i]||a,d=n(r,c,s,u);if(d){if(i===`multiple`&&o===`select`)throw Y(`selmulti`,`Binding to the 'multiple' attribute is not supported. Element: {0}`,Pe(e));if(p.test(i))throw Y(`nodomevents`,`Interpolations for HTML DOM event attributes are disallowed`);t.push({priority:100,compile:function(){return{pre:function(e,t,a){var o=a.$$observers||=q(),c=a[i];c!==r&&(d=c&&n(c,!0,s,u),r=c),d&&(a[i]=d(e),(o[i]||(o[i]=[])).$$inter=!0,(a.$$observers&&a.$$observers[i].$$scope||e).$watch(d,function(e,t){i===`class`&&e!==t?a.$updateClass(e,t):a.$set(i,e)}))}}}})}}function qe(t,n,r){var i=n[0],a=n.length,o=i.parentNode,s,c;if(t){for(s=0,c=t.length;s<c;s++)if(t[s]===i){t[s++]=r;for(var l=s,u=l+a-1,f=t.length;l<f;l++,u++)u<f?t[l]=t[u]:delete t[l];t.length-=a-1,t.context===i&&(t.context=r);break}}o&&o.replaceChild(r,i);var p=e.document.createDocumentFragment();for(s=0;s<a;s++)p.appendChild(n[s]);for(d.hasData(i)&&(d.data(r,d.data(i)),d(i).off(`$destroy`)),d.cleanData(p.querySelectorAll(`*`)),s=1;s<a;s++)delete n[s];n[0]=r,n.length=1}function Je(e,t){return k(function(){return e.apply(null,arguments)},e,t)}function Xe(e,t,n,r,i,a){try{e(t,n,r,i,a)}catch(e){m(e,Pe(n))}}function Ze(e,t){if(S)throw Y(`missingattr`,`Attribute '{0}' of '{1}' is non-optional and must be set!`,e,t)}function Qe(e,t,r,i,a){var o=[],c={},l;C(i,function(i,l){var d=i.attrName,f=i.optional,p=i.mode,m,h,g,_,y;switch(p){case`@`:!f&&!s.call(t,d)&&(Ze(d,a.name),r[l]=t[d]=void 0),y=t.$observe(d,function(e){if(B(e)||le(e)){var t=r[l];u(l,e,t),r[l]=e}}),t.$$observers[d].$$scope=e,m=t[d],B(m)?r[l]=n(m)(e):le(m)&&(r[l]=m),c[l]=new rr(tr,r[l]),o.push(y);break;case`=`:if(!s.call(t,d)){if(f)break;Ze(d,a.name),t[d]=void 0}if(f&&!t[d])break;h=v(t[d]),_=h.literal?xe:be,g=h.assign||function(){throw m=r[l]=h(e),Y(`nonassign`,`Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!`,t[d],d,a.name)},m=r[l]=h(e);var b=function(t){return _(t,r[l])||(_(t,m)?g(e,t=r[l]):r[l]=t),m=t,m};b.$stateful=!0,y=i.collection?e.$watchCollection(t[d],b):e.$watch(v(t[d],b),null,h.literal),o.push(y);break;case`<`:if(!s.call(t,d)){if(f)break;Ze(d,a.name),t[d]=void 0}if(f&&!t[d])break;h=v(t[d]);var x=h.literal,S=r[l]=h(e);c[l]=new rr(tr,r[l]),y=e[i.collection?`$watchCollection`:`$watch`](h,function(e,t){if(t===e){if(t===S||x&&xe(t,S))return;t=S}u(l,e,t),r[l]=e}),o.push(y);break;case`&`:if(!f&&!s.call(t,d)&&Ze(d,a.name),h=t.hasOwnProperty(d)?v(t[d]):P,h===P&&f)break;r[l]=function(t){return h(e,t)}}});function u(t,n,i){W(r.$onChanges)&&!be(n,i)&&(z||=(e.$$postDigest(V),[]),l||(l={},z.push(d)),l[t]&&(i=l[t].previousValue),l[t]=new rr(i,n))}function d(){r.$onChanges(l),l=void 0}return{initialChanges:c,removeWatches:o.length&&function(){for(var e=0,t=o.length;e<t;++e)o[e]()}}}}]}function rr(e,t){this.previousValue=e,this.currentValue=t}rr.prototype.isFirstChange=function(){return this.previousValue===tr};var ir=/^((?:x|data)[:\-_])/i,ar=/[:\-_]+(.)/g;function or(e){return e.replace(ir,``).replace(ar,function(e,t,n){return n?t.toUpperCase():t})}function sr(e,t){var n=``,r=e.split(/\s+/),i=t.split(/\s+/);outer:for(var a=0;a<r.length;a++){for(var o=r[a],s=0;s<i.length;s++)if(o===i[s])continue outer;n+=(n.length>0?` `:``)+o}return n}function cr(e){e=d(e);var t=e.length;if(t<=1)return e;for(;t--;){var n=e[t];(n.nodeType===ct||n.nodeType===st&&n.nodeValue.trim()===``)&&m.call(e,t,1)}return e}var lr=i(`$controller`),ur=/^(\S+)(\s+as\s+([\w$]+))?$/;function dr(e,t){if(t&&B(t))return t;if(B(e)){var n=ur.exec(e);if(n)return n[3]}}function fr(){var e={};this.has=function(t){return e.hasOwnProperty(t)},this.register=function(t,n){tt(t,`controller`),R(t)?k(e,t):e[t]=n},this.$get=[`$injector`,function(t){return function(r,i,a,o){var s,c,l,u;if(a=a===!0,o&&B(o)&&(u=o),B(r)){if(c=r.match(ur),!c)throw lr(`ctrlfmt`,"Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",r);if(l=c[1],u||=c[3],r=e.hasOwnProperty(l)?e[l]:nt(i.$scope,l,!0),!r)throw lr(`ctrlreg`,`The controller with the name '{0}' is not registered.`,l);et(r,l,!0)}if(a){var d=(U(r)?r[r.length-1]:r).prototype;return s=Object.create(d||null),u&&n(i,u,s,l||r.name),k(function(){var e=t.invoke(r,s,i,l);return e!==s&&(R(e)||W(e))&&(s=e,u&&n(i,u,s,l||r.name)),s},{instance:s,identifier:u})}return s=t.instantiate(r,i,l),u&&n(i,u,s,l||r.name),s};function n(e,t,n,r){if(!(e&&R(e.$scope)))throw i(`$controller`)(`noscp`,"Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",r,t);e.$scope[t]=n}}]}function pr(){this.$get=[`$window`,function(e){return d(e.document)}]}function mr(){this.$get=[`$document`,`$rootScope`,function(e,t){var n=e[0],r=n&&n.hidden;e.on(`visibilitychange`,i),t.$on(`$destroy`,function(){e.off(`visibilitychange`,i)});function i(){r=n.hidden}return function(){return r}}]}function hr(){this.$get=[`$log`,function(e){return function(t,n){e.error.apply(e,arguments)}}]}var gr=function(){this.$get=[`$document`,function(e){return function(t){return t?!t.nodeType&&t instanceof d&&(t=t[0]):t=e[0].body,t.offsetWidth+1}}]},_r=`application/json`,vr={"Content-Type":_r+`;charset=utf-8`},yr=/^\[|^\{(?!\{)/,br={"[":/]$/,"{":/}$/},xr=/^\)]\}',?\n/,Sr=i(`$http`);function Cr(e){return R(e)?H(e)?e.toISOString():Oe(e):e}function wr(){this.$get=function(){return function(e){if(!e)return``;var t=[];return w(e,function(e,n){e===null||I(e)||W(e)||(U(e)?C(e,function(e){t.push(ze(n)+`=`+ze(Cr(e)))}):t.push(ze(n)+`=`+ze(Cr(e))))}),t.join(`&`)}}}function Tr(){this.$get=function(){return function(e){if(!e)return``;var t=[];return n(e,``,!0),t.join(`&`);function n(e,r,i){U(e)?C(e,function(e,t){n(e,r+`[`+(R(e)?t:``)+`]`)}):R(e)&&!H(e)?w(e,function(e,t){n(e,r+(i?``:`[`)+t+(i?``:`]`))}):(W(e)&&(e=e()),t.push(ze(r)+`=`+(e==null?``:ze(Cr(e)))))}}}}function Er(e,t){if(B(e)){var n=e.replace(xr,``).trim();if(n){var r=t(`Content-Type`),i=r&&r.indexOf(_r)===0;if(i||Dr(n))try{e=ke(n)}catch(t){if(!i)return e;throw Sr(`baddata`,`Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"`,e,t)}}}return e}function Dr(e){var t=e.match(yr);return t&&br[t[0]].test(e)}function Or(e){var t=q(),n;function r(e,n){e&&(t[e]=t[e]?t[e]+`, `+n:n)}return B(e)?C(e.split(`
`),function(e){n=e.indexOf(`:`),r(c(K(e.substr(0,n))),K(e.substr(n+1)))}):R(e)&&C(e,function(e,t){r(c(t),K(e))}),t}function kr(e){var t;return function(n){if(t||=Or(e),n){var r=t[c(n)];return r===void 0&&(r=null),r}return t}}function Ar(e,t,n,r){return W(r)?r(e,t,n):(C(r,function(r){e=r(e,t,n)}),e)}function jr(e){return 200<=e&&e<300}function Mr(){var e=this.defaults={transformResponse:[Er],transformRequest:[function(e){return R(e)&&!oe(e)&&!ce(e)&&!se(e)?Oe(e):e}],headers:{common:{Accept:`application/json, text/plain, */*`},post:ft(vr),put:ft(vr),patch:ft(vr)},xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,paramSerializer:`$httpParamSerializer`,jsonpCallbackParam:`callback`},t=!1;this.useApplyAsync=function(e){return L(e)?(t=!!e,this):t};var n=this.interceptors=[],r=this.xsrfTrustedOrigins=[];Object.defineProperty(this,"xsrfWhitelistedOrigins",{get:function(){return this.xsrfTrustedOrigins},set:function(e){this.xsrfTrustedOrigins=e}}),this.$get=[`$browser`,`$httpBackend`,`$$cookieReader`,`$cacheFactory`,`$rootScope`,`$q`,`$injector`,`$sce`,function(a,o,s,u,d,f,p,m){var h=u(`$http`);e.paramSerializer=B(e.paramSerializer)?p.get(e.paramSerializer):e.paramSerializer;var g=[];C(n,function(e){g.unshift(B(e)?p.get(e):p.invoke(e))});var _=ca(r);function v(t){if(!R(t))throw i(`$http`)(`badreq`,`Http request configuration must be an object.  Received: {0}`,t);if(!B(m.valueOf(t.url)))throw i(`$http`)(`badreq`,`Http request configuration url must be a string or a $sce trusted object.  Received: {0}`,t.url);var n=k({method:`get`,transformRequest:e.transformRequest,transformResponse:e.transformResponse,paramSerializer:e.paramSerializer,jsonpCallbackParam:e.jsonpCallbackParam},t);n.headers=_(t),n.method=l(n.method),n.paramSerializer=B(n.paramSerializer)?p.get(n.paramSerializer):n.paramSerializer,a.$$incOutstandingRequestCount(`$http`);var r=[],o=[],s=f.resolve(n);return C(g,function(e){(e.request||e.requestError)&&r.unshift(e.request,e.requestError),(e.response||e.responseError)&&o.push(e.response,e.responseError)}),s=u(s,r),s=s.then(v),s=u(s,o),s=s.finally(d),s;function u(e,t){for(var n=0,r=t.length;n<r;){var i=t[n++],a=t[n++];e=e.then(i,a)}return t.length=0,e}function d(){a.$$completeOutstandingRequest(P,`$http`)}function h(e,t){var n,r={};return C(e,function(e,i){W(e)?(n=e(t),n!=null&&(r[i]=n)):r[i]=e}),r}function _(t){var n=e.headers,r=k({},t.headers),i,a,o;n=k({},n.common,n[c(t.method)]);defaultHeadersIteration:for(i in n){for(o in a=c(i),r)if(c(o)===a)continue defaultHeadersIteration;r[i]=n[i]}return h(r,ft(t))}function v(t){var n=t.headers,r=Ar(t.data,kr(n),void 0,t.transformRequest);return I(r)&&C(n,function(e,t){c(t)===`content-type`&&delete n[t]}),I(t.withCredentials)&&!I(e.withCredentials)&&(t.withCredentials=e.withCredentials),x(t,r).then(y,y)}function y(e){var t=k({},e);return t.data=Ar(e.data,e.headers,e.status,n.transformResponse),jr(e.status)?t:f.reject(t)}}return v.pendingRequests=[],y(`get`,`delete`,`head`,`jsonp`),b(`post`,`put`,`patch`),v.defaults=e,v;function y(e){C(arguments,function(e){v[e]=function(t,n){return v(k({},n||{},{method:e,url:t}))}})}function b(e){C(arguments,function(e){v[e]=function(t,n,r){return v(k({},r||{},{method:e,url:t,data:n}))}})}function x(n,r){var i=f.defer(),a=i.promise,l,u,p=n.headers,g=c(n.method)===`jsonp`,y=n.url;if(g?y=m.getTrustedResourceUrl(y):B(y)||(y=m.valueOf(y)),y=S(y,n.paramSerializer(n.params)),g&&(y=w(y,n.jsonpCallbackParam)),v.pendingRequests.push(n),a.then(O,O),(n.cache||e.cache)&&n.cache!==!1&&(n.method===`GET`||n.method===`JSONP`)&&(l=R(n.cache)?n.cache:R(e.cache)?e.cache:h),l&&(u=l.get(y),L(u)?ue(u)?u.then(D,D):U(u)?E(u[1],u[0],ft(u[2]),u[3],u[4]):E(u,200,{},`OK`,`complete`):l.put(y,a)),I(u)){var b=_(n.url)?s()[n.xsrfCookieName||e.xsrfCookieName]:void 0;b&&(p[n.xsrfHeaderName||e.xsrfHeaderName]=b),o(n.method,y,r,T,p,n.timeout,n.withCredentials,n.responseType,x(n.eventHandlers),x(n.uploadEventHandlers))}return a;function x(e){if(e){var n={};return C(e,function(e,r){n[r]=function(n){t?d.$applyAsync(r):d.$$phase?r():d.$apply(r);function r(){e(n)}}}),n}}function T(e,n,r,i,a){l&&(jr(e)?l.put(y,[e,n,Or(r),i,a]):l.remove(y));function o(){E(n,e,r,i,a)}t?d.$applyAsync(o):(o(),d.$$phase||d.$apply())}function E(e,t,r,a,o){t=t>=-1?t:0,(jr(t)?i.resolve:i.reject)({data:e,status:t,headers:kr(r),config:n,statusText:a,xhrStatus:o})}function D(e){E(e.data,e.status,ft(e.headers()),e.statusText,e.xhrStatus)}function O(){var e=v.pendingRequests.indexOf(n);e!==-1&&v.pendingRequests.splice(e,1)}}function S(e,t){return t.length>0&&(e+=(e.indexOf(`?`)===-1?`?`:`&`)+t),e}function w(e,t){var n=e.split(`?`);if(n.length>2)throw Sr(`badjsonp`,`Illegal use more than one "?", in url, "{1}"`,e);return C(Ie(n[1]),function(n,r){if(n===`JSON_CALLBACK`)throw Sr(`badjsonp`,`Illegal use of JSON_CALLBACK in url, "{0}"`,e);if(r===t)throw Sr(`badjsonp`,`Illegal use of callback param, "{0}", in url, "{1}"`,t,e)}),e+=(e.indexOf(`?`)===-1?`?`:`&`)+t+`=JSON_CALLBACK`,e}}]}function Nr(){this.$get=function(){return function(){return new e.XMLHttpRequest}}}function Pr(){this.$get=[`$browser`,`$jsonpCallbacks`,`$document`,`$xhrFactory`,function(e,t,n,r){return Fr(e,r,e.defer,t,n[0])}]}function Fr(e,t,n,r,i){return function(i,o,s,l,u,d,f,p,m,h){if(o||=e.url(),c(i)===`jsonp`)var g=r.createCallback(o),_=a(o,g,function(e,t){S(l,e,e===200&&r.getResponse(g),``,t,`complete`),r.removeCallback(g)});else{var v=t(i,o),y=!1;if(v.open(i,o,!0),C(u,function(e,t){L(e)&&v.setRequestHeader(t,e)}),v.onload=function(){var e=v.statusText||``,t=`response`in v?v.response:v.responseText,n=v.status===1223?204:v.status;n===0&&(n=t?200:aa(o).protocol===`file`?404:0),S(l,n,t,v.getAllResponseHeaders(),e,`complete`)},v.onerror=function(){S(l,-1,null,null,``,`error`)},v.ontimeout=function(){S(l,-1,null,null,``,`timeout`)},v.onabort=function(){S(l,-1,null,null,``,y?`timeout`:`abort`)},C(m,function(e,t){v.addEventListener(t,e)}),C(h,function(e,t){v.upload.addEventListener(t,e)}),f&&(v.withCredentials=!0),p)try{v.responseType=p}catch(e){if(p!==`json`)throw e}v.send(I(s)?null:s)}if(d>0)var b=n(function(){x(`timeout`)},d);else ue(d)&&d.then(function(){x(L(d.$$timeoutId)?`timeout`:`abort`)});function x(e){y=e===`timeout`,_&&_(),v&&v.abort()}function S(e,t,r,i,a,o){L(b)&&n.cancel(b),_=v=null,e(t,r,i,a,o)}};function a(e,t,n){e=e.replace(`JSON_CALLBACK`,t);var a=i.createElement(`script`),o=null;return a.type=`text/javascript`,a.src=e,a.async=!0,o=function(e){a.removeEventListener(`load`,o),a.removeEventListener(`error`,o),i.body.removeChild(a),a=null;var s=-1,c=`unknown`;e&&(e.type===`load`&&!r.wasCalled(t)&&(e={type:`error`}),c=e.type,s=e.type===`error`?404:200),n&&n(s,c)},a.addEventListener(`load`,o),a.addEventListener(`error`,o),i.body.appendChild(a),o}}var Ir=y.$interpolateMinErr=i(`$interpolate`);Ir.throwNoconcat=function(e){throw Ir(`noconcat`,`Error while interpolating: {0}
Strict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce`,e)},Ir.interr=function(e,t){return Ir(`interr`,`Can't interpolate: {0}
{1}`,e,t.toString())};function Lr(){var e=`{{`,t=`}}`;this.startSymbol=function(t){return t?(e=t,this):e},this.endSymbol=function(e){return e?(t=e,this):t},this.$get=[`$parse`,`$exceptionHandler`,`$sce`,function(n,r,i){var a=e.length,o=t.length,s=new RegExp(e.replace(/./g,l),`g`),c=new RegExp(t.replace(/./g,l),`g`);function l(e){return`\\\\\\`+e}function u(n){return n.replace(s,e).replace(c,t)}function d(e,t,n,r){var i=e.$watch(function(e){return i(),r(e)},t,n);return i}function f(s,c,l,f){var p=l===i.URL||l===i.MEDIA_URL;if(!s.length||s.indexOf(e)===-1){if(c)return;var m=u(s);p&&(m=i.getTrusted(l,m));var h=F(m);return h.exp=s,h.expressions=[],h.$$watchDelegate=d,h}f=!!f;for(var g,_,v=0,y=[],b,x=s.length,S,C=[],w=[],T;v<x;)if((g=s.indexOf(e,v))!==-1&&(_=s.indexOf(t,g+a))!==-1)v!==g&&C.push(u(s.substring(v,g))),S=s.substring(g+a,_),y.push(S),v=_+o,w.push(C.length),C.push(``);else{v!==x&&C.push(u(s.substring(v)));break}T=C.length===1&&w.length===1;var E=p&&T?void 0:O;if(b=y.map(function(e){return n(e,E)}),!c||y.length){var D=function(e){for(var t=0,n=y.length;t<n;t++){if(f&&I(e[t]))return;C[w[t]]=e[t]}return p?i.getTrusted(l,T?C[0]:C.join(``)):(l&&C.length>1&&Ir.throwNoconcat(s),C.join(``))};return k(function(e){var t=0,n=y.length,i=Array(n);try{for(;t<n;t++)i[t]=b[t](e);return D(i)}catch(e){r(Ir.interr(s,e))}},{exp:s,expressions:y,$$watchDelegate:function(e,t){var n;return e.$watchGroup(b,function(r,i){var a=D(r);t.call(this,a,r===i?a:n,e),n=a})}})}function O(e){try{return e=l&&!p?i.getTrusted(l,e):i.valueOf(e),f&&!L(e)?e:it(e)}catch(e){r(Ir.interr(s,e))}}}return f.startSymbol=function(){return e},f.endSymbol=function(){return t},f}]}var Rr=i(`$interval`);function zr(){this.$get=[`$$intervalFactory`,`$window`,function(e,t){var n={},r=function(e,r,i){var a=t.setInterval(e,r);return n[a]=i,a},i=function(e){t.clearInterval(e),delete n[e]},a=e(r,i);return a.cancel=function(e){if(!e)return!1;if(!e.hasOwnProperty(`$$intervalId`))throw Rr(`badprom`,"`$interval.cancel()` called with a promise that was not generated by `$interval()`.");if(!n.hasOwnProperty(e.$$intervalId))return!1;var t=e.$$intervalId,r=n[t];return Li(r.promise),r.reject(`canceled`),i(t),!0},a}]}function Br(){this.$get=[`$browser`,`$q`,`$$q`,`$rootScope`,function(e,t,n,r){return function(i,a){return function(o,s,c,l){var u=arguments.length>4,d=u?Te(arguments,4):[],f=0,p=L(l)&&!l,m=(p?n:t).defer(),h=m.promise;c=L(c)?c:0;function g(){u?o.apply(null,d):o(f)}function _(){p?e.defer(g):r.$evalAsync(g),m.notify(f++),c>0&&f>=c&&(m.resolve(f),a(h.$$intervalId)),p||r.$apply()}return h.$$intervalId=i(_,s,m,p),h}}}]}var Vr=function(){this.$get=function(){var e=y.callbacks,t={};function n(e){var t=function(e){t.data=e,t.called=!0};return t.id=e,t}return{createCallback:function(r){var i=`_`+(e.$$counter++).toString(36),a=`angular.callbacks.`+i;return t[a]=e[i]=n(i),a},wasCalled:function(e){return t[e].called},getResponse:function(e){return t[e].data},removeCallback:function(n){var r=t[n];delete e[r.id],delete t[n]}}}},Hr=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Ur={http:80,https:443,ftp:21},Wr=i(`$location`);function Gr(e){for(var t=e.split(`/`),n=t.length;n--;)t[n]=Re(t[n].replace(/%2F/g,`/`));return t.join(`/`)}function Kr(e,t){for(var n=e.split(`/`),r=n.length;r--;)n[r]=decodeURIComponent(n[r]),t&&(n[r]=n[r].replace(/\//g,`%2F`));return n.join(`/`)}function qr(e,t,n){var r=Le(t),i=n?`#`+Re(n):``;return Gr(e)+(r?`?`+r:``)+i}function Jr(e,t){var n=aa(e);t.$$protocol=n.protocol,t.$$host=n.hostname,t.$$port=j(n.port)||Ur[n.protocol]||null}var Yr=/^\s*[\\/]{2,}/;function Xr(e,t,n){if(Yr.test(e))throw Wr(`badpath`,`Invalid url "{0}".`,e);var r=e.charAt(0)!==`/`;r&&(e=`/`+e);var i=aa(e);t.$$path=Kr(r&&i.pathname.charAt(0)===`/`?i.pathname.substring(1):i.pathname,n),t.$$search=Ie(i.search),t.$$hash=decodeURIComponent(i.hash),t.$$path&&t.$$path.charAt(0)!==`/`&&(t.$$path=`/`+t.$$path)}function Zr(e,t){return e.slice(0,t.length)===t}function Qr(e,t){if(Zr(t,e))return t.substr(e.length)}function $r(e){var t=e.indexOf(`#`);return t===-1?e:e.substr(0,t)}function ei(e){return e.substr(0,$r(e).lastIndexOf(`/`)+1)}function ti(e){return e.substring(0,e.indexOf(`/`,e.indexOf(`//`)+2))}function ni(e,t,n){this.$$html5=!0,n||=``,Jr(e,this),this.$$parse=function(e){var n=Qr(t,e);if(!B(n))throw Wr(`ipthprfx`,`Invalid url "{0}", missing path prefix "{1}".`,e,t);Xr(n,this,!0),this.$$path||=`/`,this.$$compose()},this.$$normalizeUrl=function(e){return t+e.substr(1)},this.$$parseLinkUrl=function(r,i){if(i&&i[0]===`#`)return this.hash(i.slice(1)),!0;var a,o,s;return L(a=Qr(e,r))?(o=a,s=n&&L(a=Qr(n,a))?t+(Qr(`/`,a)||a):e+o):L(a=Qr(t,r))?s=t+a:t===r+`/`&&(s=t),s&&this.$$parse(s),!!s}}function ri(e,t,n){Jr(e,this),this.$$parse=function(r){var i=Qr(e,r)||Qr(t,r),a;!I(i)&&i.charAt(0)===`#`?(a=Qr(n,i),I(a)&&(a=i)):this.$$html5?a=i:(a=``,I(i)&&(e=r,this.replace())),Xr(a,this,!1),this.$$path=o(this.$$path,a,e),this.$$compose();function o(e,t,n){var r=/^\/[A-Z]:(\/.*)/,i;return Zr(t,n)&&(t=t.replace(n,``)),r.exec(t)?e:(i=r.exec(e),i?i[1]:e)}},this.$$normalizeUrl=function(t){return e+(t?n+t:``)},this.$$parseLinkUrl=function(t,n){return $r(e)===$r(t)&&(this.$$parse(t),!0)}}function ii(e,t,n){this.$$html5=!0,ri.apply(this,arguments),this.$$parseLinkUrl=function(r,i){if(i&&i[0]===`#`)return this.hash(i.slice(1)),!0;var a,o;return e===$r(r)?a=r:(o=Qr(t,r))?a=e+n+o:t===r+`/`&&(a=t),a&&this.$$parse(a),!!a},this.$$normalizeUrl=function(t){return e+n+t}}var ai={$$absUrl:``,$$html5:!1,$$replace:!1,$$compose:function(){this.$$url=qr(this.$$path,this.$$search,this.$$hash),this.$$absUrl=this.$$normalizeUrl(this.$$url),this.$$urlUpdatedByLocation=!0},absUrl:oi(`$$absUrl`),url:function(e){if(I(e))return this.$$url;var t=Hr.exec(e);return(t[1]||e===``)&&this.path(decodeURIComponent(t[1])),(t[2]||t[1]||e===``)&&this.search(t[3]||``),this.hash(t[5]||``),this},protocol:oi(`$$protocol`),host:oi(`$$host`),port:oi(`$$port`),path:si(`$$path`,function(e){return e=e===null?``:e.toString(),e.charAt(0)===`/`?e:`/`+e}),search:function(e,t){switch(arguments.length){case 0:return this.$$search;case 1:if(B(e)||V(e))e=e.toString(),this.$$search=Ie(e);else if(R(e))e=ye(e,{}),C(e,function(t,n){t??delete e[n]}),this.$$search=e;else throw Wr(`isrcharg`,"The first argument of the `$location#search()` call must be a string or an object.");break;default:I(t)||t===null?delete this.$$search[e]:this.$$search[e]=t}return this.$$compose(),this},hash:si(`$$hash`,function(e){return e===null?``:e.toString()}),replace:function(){return this.$$replace=!0,this}};C([ii,ri,ni],function(e){e.prototype=Object.create(ai),e.prototype.state=function(t){if(!arguments.length)return this.$$state;if(e!==ni||!this.$$html5)throw Wr(`nostate`,`History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API`);return this.$$state=I(t)?null:t,this.$$urlUpdatedByLocation=!0,this}});function oi(e){return function(){return this[e]}}function si(e,t){return function(n){return I(n)?this[e]:(this[e]=t(n),this.$$compose(),this)}}function ci(){var e=`!`,t={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(t){return L(t)?(e=t,this):e},this.html5Mode=function(e){return le(e)?(t.enabled=e,this):R(e)?(le(e.enabled)&&(t.enabled=e.enabled),le(e.requireBase)&&(t.requireBase=e.requireBase),(le(e.rewriteLinks)||B(e.rewriteLinks))&&(t.rewriteLinks=e.rewriteLinks),this):t},this.$get=[`$rootScope`,`$browser`,`$sniffer`,`$rootElement`,`$window`,function(n,r,i,a,o){var s,c,l=r.baseHref(),u=r.url(),f;if(t.enabled){if(!l&&t.requireBase)throw Wr(`nobase`,`$location in HTML5 mode requires a <base> tag to be present!`);f=ti(u)+(l||`/`),c=i.history?ni:ii}else f=$r(u),c=ri;var p=ei(f);s=new c(f,p,`#`+e),s.$$parseLinkUrl(u,u),s.$$state=r.state();var m=/^\s*(javascript|mailto):/i;function h(e,t){return e===t||aa(e).href===aa(t).href}function g(e,t,n){var i=s.url(),a=s.$$state;try{r.url(e,t,n),s.$$state=r.state()}catch(e){throw s.url(i),s.$$state=a,e}}a.on(`click`,function(e){var i=t.rewriteLinks;if(!(!i||e.ctrlKey||e.metaKey||e.shiftKey||e.which===2||e.button===2)){for(var o=d(e.target);ge(o[0])!==`a`;)if(o[0]===a[0]||!(o=o.parent())[0])return;if(!(B(i)&&I(o.attr(i)))){var c=o.prop(`href`),l=o.attr(`href`)||o.attr(`xlink:href`);R(c)&&c.toString()===`[object SVGAnimatedString]`&&(c=aa(c.animVal).href),!m.test(c)&&c&&!o.attr(`target`)&&!e.isDefaultPrevented()&&s.$$parseLinkUrl(c,l)&&(e.preventDefault(),s.absUrl()!==r.url()&&n.$apply())}}}),s.absUrl()!==u&&r.url(s.absUrl(),!0);var _=!0;return r.onUrlChange(function(e,t){if(!Zr(e,p)){o.location.href=e;return}n.$evalAsync(function(){var r=s.absUrl(),i=s.$$state,a;s.$$parse(e),s.$$state=t,a=n.$broadcast(`$locationChangeStart`,e,r,t,i).defaultPrevented,s.absUrl()===e&&(a?(s.$$parse(r),s.$$state=i,g(r,!1,i)):(_=!1,v(r,i)))}),n.$$phase||n.$digest()}),n.$watch(function(){if(_||s.$$urlUpdatedByLocation){s.$$urlUpdatedByLocation=!1;var e=r.url(),t=s.absUrl(),a=r.state(),o=s.$$replace,c=!h(e,t)||s.$$html5&&i.history&&a!==s.$$state;(_||c)&&(_=!1,n.$evalAsync(function(){var t=s.absUrl(),r=n.$broadcast(`$locationChangeStart`,t,e,s.$$state,a).defaultPrevented;s.absUrl()===t&&(r?(s.$$parse(e),s.$$state=a):(c&&g(t,o,a===s.$$state?null:s.$$state),v(e,a)))}))}s.$$replace=!1}),s;function v(e,t){n.$broadcast(`$locationChangeSuccess`,s.absUrl(),e,s.$$state,t)}}]}function li(){var e=!0,t=this;this.debugEnabled=function(t){return L(t)?(e=t,this):e},this.$get=[`$window`,function(n){var r=u||/\bEdge\//.test(n.navigator&&n.navigator.userAgent);return{log:a(`log`),info:a(`info`),warn:a(`warn`),error:a(`error`),debug:(function(){var n=a(`debug`);return function(){e&&n.apply(t,arguments)}})()};function i(e){return ne(e)&&(e.stack&&r?e=e.message&&e.stack.indexOf(e.message)===-1?`Error: `+e.message+`
`+e.stack:e.stack:e.sourceURL&&(e=e.message+`
`+e.sourceURL+`:`+e.line)),e}function a(e){var t=n.console||{},r=t[e]||t.log||P;return function(){var e=[];return C(arguments,function(t){e.push(i(t))}),Function.prototype.apply.call(r,t,e)}}}]}var ui=i(`$parse`),di={}.constructor.prototype.valueOf;function fi(e){return e+``}var pi=q();C(`+ - * / % === !== == != < > <= >= && || ! = |`.split(` `),function(e){pi[e]=!0});var mi={n:`
`,f:`\f`,r:`\r`,t:`	`,v:`\v`,"'":`'`,'"':`"`},hi=function(e){this.options=e};hi.prototype={constructor:hi,lex:function(e){for(this.text=e,this.index=0,this.tokens=[];this.index<this.text.length;){var t=this.text.charAt(this.index);if(t===`"`||t===`'`)this.readString(t);else if(this.isNumber(t)||t===`.`&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(t,`(){}[].,;:?`))this.tokens.push({index:this.index,text:t}),this.index++;else if(this.isWhitespace(t))this.index++;else{var n=t+this.peek(),r=n+this.peek(2),i=pi[t],a=pi[n],o=pi[r];if(i||a||o){var s=o?r:a?n:t;this.tokens.push({index:this.index,text:s,operator:!0}),this.index+=s.length}else this.throwError(`Unexpected next character `,this.index,this.index+1)}}return this.tokens},is:function(e,t){return t.indexOf(e)!==-1},peek:function(e){var t=e||1;return this.index+t<this.text.length&&this.text.charAt(this.index+t)},isNumber:function(e){return`0`<=e&&e<=`9`&&typeof e==`string`},isWhitespace:function(e){return e===` `||e===`\r`||e===`	`||e===`
`||e===`\v`||e===`\xA0`},isIdentifierStart:function(e){return this.options.isIdentifierStart?this.options.isIdentifierStart(e,this.codePointAt(e)):this.isValidIdentifierStart(e)},isValidIdentifierStart:function(e){return`a`<=e&&e<=`z`||`A`<=e&&e<=`Z`||e===`_`||e===`$`},isIdentifierContinue:function(e){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(e,this.codePointAt(e)):this.isValidIdentifierContinue(e)},isValidIdentifierContinue:function(e,t){return this.isValidIdentifierStart(e,t)||this.isNumber(e)},codePointAt:function(e){return e.length===1?e.charCodeAt(0):(e.charCodeAt(0)<<10)+e.charCodeAt(1)-56613888},peekMultichar:function(){var e=this.text.charAt(this.index),t=this.peek();if(!t)return e;var n=e.charCodeAt(0),r=t.charCodeAt(0);return n>=55296&&n<=56319&&r>=56320&&r<=57343?e+t:e},isExpOperator:function(e){return e===`-`||e===`+`||this.isNumber(e)},throwError:function(e,t,n){throw n||=this.index,ui(`lexerr`,`Lexer Error: {0} at column{1} in expression [{2}].`,e,L(t)?`s `+t+`-`+this.index+` [`+this.text.substring(t,n)+`]`:` `+n,this.text)},readNumber:function(){for(var e=``,t=this.index;this.index<this.text.length;){var n=c(this.text.charAt(this.index));if(n===`.`||this.isNumber(n))e+=n;else{var r=this.peek();if(n===`e`&&this.isExpOperator(r))e+=n;else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&e.charAt(e.length-1)===`e`)e+=n;else if(this.isExpOperator(n)&&(!r||!this.isNumber(r))&&e.charAt(e.length-1)===`e`)this.throwError(`Invalid exponent`);else break}this.index++}this.tokens.push({index:t,text:e,constant:!0,value:Number(e)})},readIdent:function(){var e=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var t=this.peekMultichar();if(!this.isIdentifierContinue(t))break;this.index+=t.length}this.tokens.push({index:e,text:this.text.slice(e,this.index),identifier:!0})},readString:function(e){var t=this.index;this.index++;for(var n=``,r=e,i=!1;this.index<this.text.length;){var a=this.text.charAt(this.index);if(r+=a,i){if(a===`u`){var o=this.text.substring(this.index+1,this.index+5);o.match(/[\da-f]{4}/i)||this.throwError(`Invalid unicode escape [\\u`+o+`]`),this.index+=4,n+=String.fromCharCode(parseInt(o,16))}else{var s=mi[a];n+=s||a}i=!1}else if(a===`\\`)i=!0;else if(a===e){this.index++,this.tokens.push({index:t,text:r,constant:!0,value:n});return}else n+=a;this.index++}this.throwError(`Unterminated quote`,t)}};var X=function(e,t){this.lexer=e,this.options=t};X.Program=`Program`,X.ExpressionStatement=`ExpressionStatement`,X.AssignmentExpression=`AssignmentExpression`,X.ConditionalExpression=`ConditionalExpression`,X.LogicalExpression=`LogicalExpression`,X.BinaryExpression=`BinaryExpression`,X.UnaryExpression=`UnaryExpression`,X.CallExpression=`CallExpression`,X.MemberExpression=`MemberExpression`,X.Identifier=`Identifier`,X.Literal=`Literal`,X.ArrayExpression=`ArrayExpression`,X.Property=`Property`,X.ObjectExpression=`ObjectExpression`,X.ThisExpression=`ThisExpression`,X.LocalsExpression=`LocalsExpression`,X.NGValueParameter=`NGValueParameter`,X.prototype={ast:function(e){this.text=e,this.tokens=this.lexer.lex(e);var t=this.program();return this.tokens.length!==0&&this.throwError(`is an unexpected token`,this.tokens[0]),t},program:function(){for(var e=[];;)if(this.tokens.length>0&&!this.peek(`}`,`)`,`;`,`]`)&&e.push(this.expressionStatement()),!this.expect(`;`))return{type:X.Program,body:e}},expressionStatement:function(){return{type:X.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var e=this.expression();this.expect(`|`);)e=this.filter(e);return e},expression:function(){return this.assignment()},assignment:function(){var e=this.ternary();if(this.expect(`=`)){if(!Ci(e))throw ui(`lval`,`Trying to assign a value to a non l-value`);e={type:X.AssignmentExpression,left:e,right:this.assignment(),operator:`=`}}return e},ternary:function(){var e=this.logicalOR(),t,n;return this.expect(`?`)&&(t=this.expression(),this.consume(`:`))?(n=this.expression(),{type:X.ConditionalExpression,test:e,alternate:t,consequent:n}):e},logicalOR:function(){for(var e=this.logicalAND();this.expect(`||`);)e={type:X.LogicalExpression,operator:`||`,left:e,right:this.logicalAND()};return e},logicalAND:function(){for(var e=this.equality();this.expect(`&&`);)e={type:X.LogicalExpression,operator:`&&`,left:e,right:this.equality()};return e},equality:function(){for(var e=this.relational(),t;t=this.expect(`==`,`!=`,`===`,`!==`);)e={type:X.BinaryExpression,operator:t.text,left:e,right:this.relational()};return e},relational:function(){for(var e=this.additive(),t;t=this.expect(`<`,`>`,`<=`,`>=`);)e={type:X.BinaryExpression,operator:t.text,left:e,right:this.additive()};return e},additive:function(){for(var e=this.multiplicative(),t;t=this.expect(`+`,`-`);)e={type:X.BinaryExpression,operator:t.text,left:e,right:this.multiplicative()};return e},multiplicative:function(){for(var e=this.unary(),t;t=this.expect(`*`,`/`,`%`);)e={type:X.BinaryExpression,operator:t.text,left:e,right:this.unary()};return e},unary:function(){var e;return(e=this.expect(`+`,`-`,`!`))?{type:X.UnaryExpression,operator:e.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var e;this.expect(`(`)?(e=this.filterChain(),this.consume(`)`)):this.expect(`[`)?e=this.arrayDeclaration():this.expect(`{`)?e=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?e=ye(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?e={type:X.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?e=this.identifier():this.peek().constant?e=this.constant():this.throwError(`not a primary expression`,this.peek());for(var t;t=this.expect(`(`,`[`,`.`);)t.text===`(`?(e={type:X.CallExpression,callee:e,arguments:this.parseArguments()},this.consume(`)`)):t.text===`[`?(e={type:X.MemberExpression,object:e,property:this.expression(),computed:!0},this.consume(`]`)):t.text===`.`?e={type:X.MemberExpression,object:e,property:this.identifier(),computed:!1}:this.throwError(`IMPOSSIBLE`);return e},filter:function(e){for(var t=[e],n={type:X.CallExpression,callee:this.identifier(),arguments:t,filter:!0};this.expect(`:`);)t.push(this.expression());return n},parseArguments:function(){var e=[];if(this.peekToken().text!==`)`)do e.push(this.filterChain());while(this.expect(`,`));return e},identifier:function(){var e=this.consume();return e.identifier||this.throwError(`is not a valid identifier`,e),{type:X.Identifier,name:e.text}},constant:function(){return{type:X.Literal,value:this.consume().value}},arrayDeclaration:function(){var e=[];if(this.peekToken().text!==`]`)do{if(this.peek(`]`))break;e.push(this.expression())}while(this.expect(`,`));return this.consume(`]`),{type:X.ArrayExpression,elements:e}},object:function(){var e=[],t;if(this.peekToken().text!==`}`)do{if(this.peek(`}`))break;t={type:X.Property,kind:`init`},this.peek().constant?(t.key=this.constant(),t.computed=!1,this.consume(`:`),t.value=this.expression()):this.peek().identifier?(t.key=this.identifier(),t.computed=!1,this.peek(`:`)?(this.consume(`:`),t.value=this.expression()):t.value=t.key):this.peek(`[`)?(this.consume(`[`),t.key=this.expression(),this.consume(`]`),t.computed=!0,this.consume(`:`),t.value=this.expression()):this.throwError(`invalid key`,this.peek()),e.push(t)}while(this.expect(`,`));return this.consume(`}`),{type:X.ObjectExpression,properties:e}},throwError:function(e,t){throw ui(`syntax`,`Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].`,t.text,e,t.index+1,this.text,this.text.substring(t.index))},consume:function(e){if(this.tokens.length===0)throw ui(`ueoe`,`Unexpected end of expression: {0}`,this.text);var t=this.expect(e);return t||this.throwError(`is unexpected, expecting [`+e+`]`,this.peek()),t},peekToken:function(){if(this.tokens.length===0)throw ui(`ueoe`,`Unexpected end of expression: {0}`,this.text);return this.tokens[0]},peek:function(e,t,n,r){return this.peekAhead(0,e,t,n,r)},peekAhead:function(e,t,n,r,i){if(this.tokens.length>e){var a=this.tokens[e],o=a.text;if(o===t||o===n||o===r||o===i||!t&&!n&&!r&&!i)return a}return!1},expect:function(e,t,n,r){var i=this.peek(e,t,n,r);return i?(this.tokens.shift(),i):!1},selfReferential:{this:{type:X.ThisExpression},$locals:{type:X.LocalsExpression}}};function gi(e,t){return e===void 0?t:e}function _i(e,t){return e===void 0?t:t===void 0?e:e+t}function vi(e,t){return!e(t).$stateful}var yi=1,bi=2;function xi(e,t){switch(e.type){case X.MemberExpression:if(e.computed)return!1;break;case X.UnaryExpression:return yi;case X.BinaryExpression:return e.operator!==`+`&&yi;case X.CallExpression:return!1}return t===void 0?bi:t}function Z(e,t,n){var r,i,a,o=e.isPure=xi(e,n);switch(e.type){case X.Program:r=!0,C(e.body,function(e){Z(e.expression,t,o),r&&=e.expression.constant}),e.constant=r;break;case X.Literal:e.constant=!0,e.toWatch=[];break;case X.UnaryExpression:Z(e.argument,t,o),e.constant=e.argument.constant,e.toWatch=e.argument.toWatch;break;case X.BinaryExpression:Z(e.left,t,o),Z(e.right,t,o),e.constant=e.left.constant&&e.right.constant,e.toWatch=e.left.toWatch.concat(e.right.toWatch);break;case X.LogicalExpression:Z(e.left,t,o),Z(e.right,t,o),e.constant=e.left.constant&&e.right.constant,e.toWatch=e.constant?[]:[e];break;case X.ConditionalExpression:Z(e.test,t,o),Z(e.alternate,t,o),Z(e.consequent,t,o),e.constant=e.test.constant&&e.alternate.constant&&e.consequent.constant,e.toWatch=e.constant?[]:[e];break;case X.Identifier:e.constant=!1,e.toWatch=[e];break;case X.MemberExpression:Z(e.object,t,o),e.computed&&Z(e.property,t,o),e.constant=e.object.constant&&(!e.computed||e.property.constant),e.toWatch=e.constant?[]:[e];break;case X.CallExpression:a=e.filter?vi(t,e.callee.name):!1,r=a,i=[],C(e.arguments,function(e){Z(e,t,o),r&&=e.constant,i.push.apply(i,e.toWatch)}),e.constant=r,e.toWatch=a?i:[e];break;case X.AssignmentExpression:Z(e.left,t,o),Z(e.right,t,o),e.constant=e.left.constant&&e.right.constant,e.toWatch=[e];break;case X.ArrayExpression:r=!0,i=[],C(e.elements,function(e){Z(e,t,o),r&&=e.constant,i.push.apply(i,e.toWatch)}),e.constant=r,e.toWatch=i;break;case X.ObjectExpression:r=!0,i=[],C(e.properties,function(e){Z(e.value,t,o),r&&=e.value.constant,i.push.apply(i,e.value.toWatch),e.computed&&(Z(e.key,t,!1),r&&=e.key.constant,i.push.apply(i,e.key.toWatch))}),e.constant=r,e.toWatch=i;break;case X.ThisExpression:e.constant=!1,e.toWatch=[];break;case X.LocalsExpression:e.constant=!1,e.toWatch=[]}}function Si(e){if(e.length===1){var t=e[0].expression,n=t.toWatch;return n.length===1&&n[0]===t?void 0:n}}function Ci(e){return e.type===X.Identifier||e.type===X.MemberExpression}function wi(e){if(e.body.length===1&&Ci(e.body[0].expression))return{type:X.AssignmentExpression,left:e.body[0].expression,right:{type:X.NGValueParameter},operator:`=`}}function Ti(e){return e.body.length===0||e.body.length===1&&(e.body[0].expression.type===X.Literal||e.body[0].expression.type===X.ArrayExpression||e.body[0].expression.type===X.ObjectExpression)}function Ei(e){return e.constant}function Di(e){this.$filter=e}Di.prototype={compile:function(e){var t=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]},Z(e,t.$filter);var n=``,r;if(this.stage=`assign`,r=wi(e)){this.state.computing=`assign`;var i=this.nextId();this.recurse(r,i),this.return_(i),n=`fn.assign=`+this.generateFunction(`assign`,`s,v,l`)}var a=Si(e.body);t.stage=`inputs`,C(a,function(e,n){var r=`fn`+n;t.state[r]={vars:[],body:[],own:{}},t.state.computing=r;var i=t.nextId();t.recurse(e,i),t.return_(i),t.state.inputs.push({name:r,isPure:e.isPure}),e.watchId=n}),this.state.computing=`fn`,this.stage=`main`,this.recurse(e);var o=`"`+this.USE+` `+this.STRICT+`";
`+this.filterPrefix()+`var fn=`+this.generateFunction(`fn`,`s,l,a,i`)+n+this.watchFns()+`return fn;`,s=Function(`$filter`,`getStringValue`,`ifDefined`,`plus`,o)(this.$filter,fi,gi,_i);return this.state=this.stage=void 0,s},USE:`use`,STRICT:`strict`,watchFns:function(){var e=[],t=this.state.inputs,n=this;return C(t,function(t){e.push(`var `+t.name+`=`+n.generateFunction(t.name,`s`)),t.isPure&&e.push(t.name,`.isPure=`+JSON.stringify(t.isPure)+`;`)}),t.length&&e.push(`fn.inputs=[`+t.map(function(e){return e.name}).join(`,`)+`];`),e.join(``)},generateFunction:function(e,t){return`function(`+t+`){`+this.varsPrefix(e)+this.body(e)+`};`},filterPrefix:function(){var e=[],t=this;return C(this.state.filters,function(n,r){e.push(n+`=$filter(`+t.escape(r)+`)`)}),e.length?`var `+e.join(`,`)+`;`:``},varsPrefix:function(e){return this.state[e].vars.length?`var `+this.state[e].vars.join(`,`)+`;`:``},body:function(e){return this.state[e].body.join(``)},recurse:function(e,t,n,r,i,a){var o,s,c=this,l,u,d;if(r||=P,!a&&L(e.watchId)){t||=this.nextId(),this.if_(`i`,this.lazyAssign(t,this.computedMember(`i`,e.watchId)),this.lazyRecurse(e,t,n,r,i,!0));return}switch(e.type){case X.Program:C(e.body,function(t,n){c.recurse(t.expression,void 0,void 0,function(e){s=e}),n===e.body.length-1?c.return_(s):c.current().body.push(s,`;`)});break;case X.Literal:u=this.escape(e.value),this.assign(t,u),r(t||u);break;case X.UnaryExpression:this.recurse(e.argument,void 0,void 0,function(e){s=e}),u=e.operator+`(`+this.ifDefined(s,0)+`)`,this.assign(t,u),r(u);break;case X.BinaryExpression:this.recurse(e.left,void 0,void 0,function(e){o=e}),this.recurse(e.right,void 0,void 0,function(e){s=e}),u=e.operator===`+`?this.plus(o,s):e.operator===`-`?this.ifDefined(o,0)+e.operator+this.ifDefined(s,0):`(`+o+`)`+e.operator+`(`+s+`)`,this.assign(t,u),r(u);break;case X.LogicalExpression:t||=this.nextId(),c.recurse(e.left,t),c.if_(e.operator===`&&`?t:c.not(t),c.lazyRecurse(e.right,t)),r(t);break;case X.ConditionalExpression:t||=this.nextId(),c.recurse(e.test,t),c.if_(t,c.lazyRecurse(e.alternate,t),c.lazyRecurse(e.consequent,t)),r(t);break;case X.Identifier:t||=this.nextId(),n&&(n.context=c.stage===`inputs`?`s`:this.assign(this.nextId(),this.getHasOwnProperty(`l`,e.name)+`?l:s`),n.computed=!1,n.name=e.name),c.if_(c.stage===`inputs`||c.not(c.getHasOwnProperty(`l`,e.name)),function(){c.if_(c.stage===`inputs`||`s`,function(){i&&i!==1&&c.if_(c.isNull(c.nonComputedMember(`s`,e.name)),c.lazyAssign(c.nonComputedMember(`s`,e.name),`{}`)),c.assign(t,c.nonComputedMember(`s`,e.name))})},t&&c.lazyAssign(t,c.nonComputedMember(`l`,e.name))),r(t);break;case X.MemberExpression:o=n&&(n.context=this.nextId())||this.nextId(),t||=this.nextId(),c.recurse(e.object,o,void 0,function(){c.if_(c.notNull(o),function(){e.computed?(s=c.nextId(),c.recurse(e.property,s),c.getStringValue(s),i&&i!==1&&c.if_(c.not(c.computedMember(o,s)),c.lazyAssign(c.computedMember(o,s),`{}`)),u=c.computedMember(o,s),c.assign(t,u),n&&(n.computed=!0,n.name=s)):(i&&i!==1&&c.if_(c.isNull(c.nonComputedMember(o,e.property.name)),c.lazyAssign(c.nonComputedMember(o,e.property.name),`{}`)),u=c.nonComputedMember(o,e.property.name),c.assign(t,u),n&&(n.computed=!1,n.name=e.property.name))},function(){c.assign(t,`undefined`)}),r(t)},!!i);break;case X.CallExpression:t||=this.nextId(),e.filter?(s=c.filter(e.callee.name),l=[],C(e.arguments,function(e){var t=c.nextId();c.recurse(e,t),l.push(t)}),u=s+`(`+l.join(`,`)+`)`,c.assign(t,u),r(t)):(s=c.nextId(),o={},l=[],c.recurse(e.callee,s,o,function(){c.if_(c.notNull(s),function(){C(e.arguments,function(t){c.recurse(t,e.constant?void 0:c.nextId(),void 0,function(e){l.push(e)})}),u=o.name?c.member(o.context,o.name,o.computed)+`(`+l.join(`,`)+`)`:s+`(`+l.join(`,`)+`)`,c.assign(t,u)},function(){c.assign(t,`undefined`)}),r(t)}));break;case X.AssignmentExpression:s=this.nextId(),o={},this.recurse(e.left,void 0,o,function(){c.if_(c.notNull(o.context),function(){c.recurse(e.right,s),u=c.member(o.context,o.name,o.computed)+e.operator+s,c.assign(t,u),r(t||u)})},1);break;case X.ArrayExpression:l=[],C(e.elements,function(t){c.recurse(t,e.constant?void 0:c.nextId(),void 0,function(e){l.push(e)})}),u=`[`+l.join(`,`)+`]`,this.assign(t,u),r(t||u);break;case X.ObjectExpression:l=[],d=!1,C(e.properties,function(e){e.computed&&(d=!0)}),d?(t||=this.nextId(),this.assign(t,`{}`),C(e.properties,function(e){e.computed?(o=c.nextId(),c.recurse(e.key,o)):o=e.key.type===X.Identifier?e.key.name:``+e.key.value,s=c.nextId(),c.recurse(e.value,s),c.assign(c.member(t,o,e.computed),s)})):(C(e.properties,function(t){c.recurse(t.value,e.constant?void 0:c.nextId(),void 0,function(e){l.push(c.escape(t.key.type===X.Identifier?t.key.name:``+t.key.value)+`:`+e)})}),u=`{`+l.join(`,`)+`}`,this.assign(t,u)),r(t||u);break;case X.ThisExpression:this.assign(t,`s`),r(t||`s`);break;case X.LocalsExpression:this.assign(t,`l`),r(t||`l`);break;case X.NGValueParameter:this.assign(t,`v`),r(t||`v`)}},getHasOwnProperty:function(e,t){var n=e+`.`+t,r=this.current().own;return r.hasOwnProperty(n)||(r[n]=this.nextId(!1,e+`&&(`+this.escape(t)+` in `+e+`)`)),r[n]},assign:function(e,t){if(e)return this.current().body.push(e,`=`,t,`;`),e},filter:function(e){return this.state.filters.hasOwnProperty(e)||(this.state.filters[e]=this.nextId(!0)),this.state.filters[e]},ifDefined:function(e,t){return`ifDefined(`+e+`,`+this.escape(t)+`)`},plus:function(e,t){return`plus(`+e+`,`+t+`)`},return_:function(e){this.current().body.push(`return `,e,`;`)},if_:function(e,t,n){if(e===!0)t();else{var r=this.current().body;r.push(`if(`,e,`){`),t(),r.push(`}`),n&&(r.push(`else{`),n(),r.push(`}`))}},not:function(e){return`!(`+e+`)`},isNull:function(e){return e+`==null`},notNull:function(e){return e+`!=null`},nonComputedMember:function(e,t){return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(t)?e+`.`+t:e+`["`+t.replace(/[^$_a-zA-Z0-9]/g,this.stringEscapeFn)+`"]`},computedMember:function(e,t){return e+`[`+t+`]`},member:function(e,t,n){return n?this.computedMember(e,t):this.nonComputedMember(e,t)},getStringValue:function(e){this.assign(e,`getStringValue(`+e+`)`)},lazyRecurse:function(e,t,n,r,i,a){var o=this;return function(){o.recurse(e,t,n,r,i,a)}},lazyAssign:function(e,t){var n=this;return function(){n.assign(e,t)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(e){return`\\u`+(`0000`+e.charCodeAt(0).toString(16)).slice(-4)},escape:function(e){if(B(e))return`'`+e.replace(this.stringEscapeRegex,this.stringEscapeFn)+`'`;if(V(e))return e.toString();if(e===!0)return`true`;if(e===!1)return`false`;if(e===null)return`null`;if(e===void 0)return`undefined`;throw ui(`esc`,`IMPOSSIBLE`)},nextId:function(e,t){var n=`v`+this.state.nextId++;return e||this.current().vars.push(n+(t?`=`+t:``)),n},current:function(){return this.state[this.state.computing]}};function Oi(e){this.$filter=e}Oi.prototype={compile:function(e){var t=this;Z(e,t.$filter);var n,r;(n=wi(e))&&(r=this.recurse(n));var i=Si(e.body),a;i&&(a=[],C(i,function(e,n){var r=t.recurse(e);r.isPure=e.isPure,e.input=r,a.push(r),e.watchId=n}));var o=[];C(e.body,function(e){o.push(t.recurse(e.expression))});var s=e.body.length===0?P:e.body.length===1?o[0]:function(e,t){var n;return C(o,function(r){n=r(e,t)}),n};return r&&(s.assign=function(e,t,n){return r(e,n,t)}),a&&(s.inputs=a),s},recurse:function(e,t,n){var r,i,a=this,o;if(e.input)return this.inputs(e.input,e.watchId);switch(e.type){case X.Literal:return this.value(e.value,t);case X.UnaryExpression:return i=this.recurse(e.argument),this[`unary`+e.operator](i,t);case X.BinaryExpression:return r=this.recurse(e.left),i=this.recurse(e.right),this[`binary`+e.operator](r,i,t);case X.LogicalExpression:return r=this.recurse(e.left),i=this.recurse(e.right),this[`binary`+e.operator](r,i,t);case X.ConditionalExpression:return this[`ternary?:`](this.recurse(e.test),this.recurse(e.alternate),this.recurse(e.consequent),t);case X.Identifier:return a.identifier(e.name,t,n);case X.MemberExpression:return r=this.recurse(e.object,!1,!!n),e.computed||(i=e.property.name),e.computed&&(i=this.recurse(e.property)),e.computed?this.computedMember(r,i,t,n):this.nonComputedMember(r,i,t,n);case X.CallExpression:return o=[],C(e.arguments,function(e){o.push(a.recurse(e))}),e.filter&&(i=this.$filter(e.callee.name)),e.filter||(i=this.recurse(e.callee,!0)),e.filter?function(e,n,r,a){for(var s=[],c=0;c<o.length;++c)s.push(o[c](e,n,r,a));var l=i.apply(void 0,s,a);return t?{context:void 0,name:void 0,value:l}:l}:function(e,n,r,a){var s=i(e,n,r,a),c;if(s.value!=null){for(var l=[],u=0;u<o.length;++u)l.push(o[u](e,n,r,a));c=s.value.apply(s.context,l)}return t?{value:c}:c};case X.AssignmentExpression:return r=this.recurse(e.left,!0,1),i=this.recurse(e.right),function(e,n,a,o){var s=r(e,n,a,o),c=i(e,n,a,o);return s.context[s.name]=c,t?{value:c}:c};case X.ArrayExpression:return o=[],C(e.elements,function(e){o.push(a.recurse(e))}),function(e,n,r,i){for(var a=[],s=0;s<o.length;++s)a.push(o[s](e,n,r,i));return t?{value:a}:a};case X.ObjectExpression:return o=[],C(e.properties,function(e){e.computed?o.push({key:a.recurse(e.key),computed:!0,value:a.recurse(e.value)}):o.push({key:e.key.type===X.Identifier?e.key.name:``+e.key.value,computed:!1,value:a.recurse(e.value)})}),function(e,n,r,i){for(var a={},s=0;s<o.length;++s)o[s].computed?a[o[s].key(e,n,r,i)]=o[s].value(e,n,r,i):a[o[s].key]=o[s].value(e,n,r,i);return t?{value:a}:a};case X.ThisExpression:return function(e){return t?{value:e}:e};case X.LocalsExpression:return function(e,n){return t?{value:n}:n};case X.NGValueParameter:return function(e,n,r){return t?{value:r}:r}}},"unary+":function(e,t){return function(n,r,i,a){var o=e(n,r,i,a);return o=L(o)?+o:0,t?{value:o}:o}},"unary-":function(e,t){return function(n,r,i,a){var o=e(n,r,i,a);return o=L(o)?-o:-0,t?{value:o}:o}},"unary!":function(e,t){return function(n,r,i,a){var o=!e(n,r,i,a);return t?{value:o}:o}},"binary+":function(e,t,n){return function(r,i,a,o){var s=_i(e(r,i,a,o),t(r,i,a,o));return n?{value:s}:s}},"binary-":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o),c=t(r,i,a,o),l=(L(s)?s:0)-(L(c)?c:0);return n?{value:l}:l}},"binary*":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)*t(r,i,a,o);return n?{value:s}:s}},"binary/":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)/t(r,i,a,o);return n?{value:s}:s}},"binary%":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)%t(r,i,a,o);return n?{value:s}:s}},"binary===":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)===t(r,i,a,o);return n?{value:s}:s}},"binary!==":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)!==t(r,i,a,o);return n?{value:s}:s}},"binary==":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)==t(r,i,a,o);return n?{value:s}:s}},"binary!=":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)!=t(r,i,a,o);return n?{value:s}:s}},"binary<":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)<t(r,i,a,o);return n?{value:s}:s}},"binary>":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)>t(r,i,a,o);return n?{value:s}:s}},"binary<=":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)<=t(r,i,a,o);return n?{value:s}:s}},"binary>=":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)>=t(r,i,a,o);return n?{value:s}:s}},"binary&&":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)&&t(r,i,a,o);return n?{value:s}:s}},"binary||":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)||t(r,i,a,o);return n?{value:s}:s}},"ternary?:":function(e,t,n,r){return function(i,a,o,s){var c=e(i,a,o,s)?t(i,a,o,s):n(i,a,o,s);return r?{value:c}:c}},value:function(e,t){return function(){return t?{context:void 0,name:void 0,value:e}:e}},identifier:function(e,t,n){return function(r,i,a,o){var s=i&&e in i?i:r;n&&n!==1&&s&&s[e]==null&&(s[e]={});var c=s?s[e]:void 0;return t?{context:s,name:e,value:c}:c}},computedMember:function(e,t,n,r){return function(i,a,o,s){var c=e(i,a,o,s),l,u;return c!=null&&(l=t(i,a,o,s),l=fi(l),r&&r!==1&&c&&!c[l]&&(c[l]={}),u=c[l]),n?{context:c,name:l,value:u}:u}},nonComputedMember:function(e,t,n,r){return function(i,a,o,s){var c=e(i,a,o,s);r&&r!==1&&c&&c[t]==null&&(c[t]={});var l=c?.[t];return n?{context:c,name:t,value:l}:l}},inputs:function(e,t){return function(n,r,i,a){return a?a[t]:e(n,r,i)}}};function ki(e,t,n){this.ast=new X(e,n),this.astCompiler=n.csp?new Oi(t):new Di(t)}ki.prototype={constructor:ki,parse:function(e){var t=this.getAst(e),n=this.astCompiler.compile(t.ast);return n.literal=Ti(t.ast),n.constant=Ei(t.ast),n.oneTime=t.oneTime,n},getAst:function(e){var t=!1;return e=e.trim(),e.charAt(0)===`:`&&e.charAt(1)===`:`&&(t=!0,e=e.substring(2)),{ast:this.ast.ast(e),oneTime:t}}};function Ai(e){return W(e.valueOf)?e.valueOf():di.call(e)}function ji(){var e=q(),t={true:!0,false:!1,null:null,undefined:void 0},n,r;this.addLiteral=function(e,n){t[e]=n},this.setIdentifierFns=function(e,t){return n=e,r=t,this},this.$get=[`$filter`,function(i){var a={csp:Se().noUnsafeEval,literals:ye(t),isIdentifierStart:W(n)&&n,isIdentifierContinue:W(r)&&r};return o.$$getAst=s,o;function o(t,n){var r,o;switch(typeof t){case`string`:return t=t.trim(),o=t,r=e[o],r||(r=new ki(new hi(a),i,a).parse(t),e[o]=p(r)),h(r,n);case`function`:return h(t,n);default:return h(P,n)}}function s(e){return new ki(new hi(a),i,a).getAst(e).ast}function c(e,t,n){return e==null||t==null?e===t:typeof e==`object`&&(e=Ai(e),typeof e==`object`&&!n)?!1:e===t||e!==e&&t!==t}function l(e,t,n,r,i){var a=r.inputs,o;if(a.length===1){var s=c;return a=a[0],e.$watch(function(e){var t=a(e);return c(t,s,a.isPure)||(o=r(e,void 0,void 0,[t]),s=t&&Ai(t)),o},t,n,i)}for(var l=[],u=[],d=0,f=a.length;d<f;d++)l[d]=c,u[d]=null;return e.$watch(function(e){for(var t=!1,n=0,i=a.length;n<i;n++){var s=a[n](e);(t||=!c(s,l[n],a[n].isPure))&&(u[n]=s,l[n]=s&&Ai(s))}return t&&(o=r(e,void 0,void 0,u)),o},t,n,i)}function u(e,t,n,r,i){var a=r.literal?d:L,o,s,c=r.$$intercepted||r,l=r.$$interceptor||ee,u=r.inputs&&!c.inputs;return m.literal=r.literal,m.constant=r.constant,m.inputs=r.inputs,p(m),o=e.$watch(m,t,n,i),o;function f(){a(s)&&o()}function m(e,t,n,r){return s=u&&r?r[0]:c(e,t,n,r),a(s)&&e.$$postDigest(f),l(s)}}function d(e){var t=!0;return C(e,function(e){L(e)||(t=!1)}),t}function f(e,t,n,r){var i=e.$watch(function(e){return i(),r(e)},t,n);return i}function p(e){return e.constant?e.$$watchDelegate=f:e.oneTime?e.$$watchDelegate=u:e.inputs&&(e.$$watchDelegate=l),e}function m(e,t){function n(n){return t(e(n))}return n.$stateful=e.$stateful||t.$stateful,n.$$pure=e.$$pure&&t.$$pure,n}function h(e,t){if(!t)return e;e.$$interceptor&&(t=m(e.$$interceptor,t),e=e.$$intercepted);var n=!1,r=function(r,i,a,o){var s=n&&o?o[0]:e(r,i,a,o);return t(s)};return r.$$intercepted=e,r.$$interceptor=t,r.literal=e.literal,r.oneTime=e.oneTime,r.constant=e.constant,t.$stateful||(n=!e.inputs,r.inputs=e.inputs?e.inputs:[e],t.$$pure||(r.inputs=r.inputs.map(function(e){return e.isPure===bi?function(t){return e(t)}:e}))),p(r)}}]}function Mi(){var e=!0;this.$get=[`$rootScope`,`$exceptionHandler`,function(t,n){return Pi(function(e){t.$evalAsync(e)},n,e)}],this.errorOnUnhandledRejections=function(t){return L(t)?(e=t,this):e}}function Ni(){var e=!0;this.$get=[`$browser`,`$exceptionHandler`,function(t,n){return Pi(function(e){t.defer(e)},n,e)}],this.errorOnUnhandledRejections=function(t){return L(t)?(e=t,this):e}}function Pi(e,t,n){var r=i(`$q`,TypeError),a=0,o=[];function s(){return new c}function c(){var e=this.promise=new l;this.resolve=function(t){p(e,t)},this.reject=function(t){h(e,t)},this.notify=function(t){_(e,t)}}function l(){this.$$state={status:0}}k(l.prototype,{then:function(e,t,n){if(I(e)&&I(t)&&I(n))return this;var r=new l;return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([r,e,t,n]),this.$$state.status>0&&f(this.$$state),r},catch:function(e){return this.then(null,e)},finally:function(e,t){return this.then(function(t){return y(t,x,e)},function(t){return y(t,v,e)},t)}});function u(r){var i,o,s=r.pending;r.processScheduled=!1,r.pending=void 0;try{for(var c=0,l=s.length;c<l;++c){Ii(r),o=s[c][0],i=s[c][r.status];try{W(i)?p(o,i(r.value)):r.status===1?p(o,r.value):h(o,r.value)}catch(e){h(o,e),e&&e.$$passToExceptionHandler===!0&&t(e)}}}finally{--a,n&&a===0&&e(d)}}function d(){for(;!a&&o.length;){var e=o.shift();if(!Fi(e)){Ii(e);var n=`Possibly unhandled rejection: `+mt(e.value);ne(e.value)?t(e.value,n):t(n)}}}function f(t){n&&!t.pending&&t.status===2&&!Fi(t)&&(a===0&&o.length===0&&e(d),o.push(t)),!(t.processScheduled||!t.pending)&&(t.processScheduled=!0,++a,e(function(){u(t)}))}function p(e,t){e.$$state.status||(t===e?g(e,r(`qcycle`,`Expected promise to be resolved with value other than itself '{0}'`,t)):m(e,t))}function m(e,t){var n,r=!1;try{(R(t)||W(t))&&(n=t.then),W(n)?(e.$$state.status=-1,n.call(t,i,a,o)):(e.$$state.value=t,e.$$state.status=1,f(e.$$state))}catch(e){a(e)}function i(t){r||(r=!0,m(e,t))}function a(t){r||(r=!0,g(e,t))}function o(t){_(e,t)}}function h(e,t){e.$$state.status||g(e,t)}function g(e,t){e.$$state.value=t,e.$$state.status=2,f(e.$$state)}function _(n,r){var i=n.$$state.pending;n.$$state.status<=0&&i&&i.length&&e(function(){for(var e,n,a=0,o=i.length;a<o;a++){n=i[a][0],e=i[a][3];try{_(n,W(e)?e(r):r)}catch(e){t(e)}}})}function v(e){var t=new l;return h(t,e),t}function y(e,t,n){var r=null;try{W(n)&&(r=n())}catch(e){return v(e)}return ue(r)?r.then(function(){return t(e)},v):t(e)}function b(e,t,n,r){var i=new l;return p(i,e),i.then(t,n,r)}var x=b;function S(e){var t=new l,n=0,r=U(e)?[]:{};return C(e,function(e,i){n++,b(e).then(function(e){r[i]=e,--n||p(t,r)},function(e){h(t,e)})}),n===0&&p(t,r),t}function w(e){var t=s();return C(e,function(e){b(e).then(t.resolve,t.reject)}),t.promise}function T(e){if(!W(e))throw r(`norslvr`,`Expected resolverFn, got '{0}'`,e);var t=new l;function n(e){p(t,e)}function i(e){h(t,e)}return e(n,i),t}return T.prototype=l.prototype,T.defer=s,T.reject=v,T.when=b,T.resolve=x,T.all=S,T.race=w,T}function Fi(e){return!!e.pur}function Ii(e){e.pur=!0}function Li(e){e.$$state&&Ii(e.$$state)}function Ri(){this.$get=[`$window`,`$timeout`,function(e,t){var n=e.requestAnimationFrame||e.webkitRequestAnimationFrame,r=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame,i=!!n,a=i?function(e){var t=n(e);return function(){r(t)}}:function(e){var n=t(e,16.66,!1);return function(){t.cancel(n)}};return a.supported=i,a}]}function zi(){var e=10,t=i(`$rootScope`),n=null,r=null;this.digestTtl=function(t){return arguments.length&&(e=t),e};function a(e){function t(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=E(),this.$$ChildScope=null,this.$$suspended=!1}return t.prototype=e,t}this.$get=[`$exceptionHandler`,`$parse`,`$browser`,function(i,o,c){function l(e){e.currentScope.$$destroyed=!0}function d(e){u===9&&(e.$$childHead&&d(e.$$childHead),e.$$nextSibling&&d(e.$$nextSibling)),e.$parent=e.$$nextSibling=e.$$prevSibling=e.$$childHead=e.$$childTail=e.$root=e.$$watchers=null}function f(){this.$id=E(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$suspended=!1,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$$isolateBindings=null}f.prototype={constructor:f,$new:function(e,t){var n;return t||=this,e?(n=new f,n.$root=this.$root):(this.$$ChildScope||=a(this),n=new this.$$ChildScope),n.$parent=t,n.$$prevSibling=t.$$childTail,t.$$childHead?(t.$$childTail.$$nextSibling=n,t.$$childTail=n):t.$$childHead=t.$$childTail=n,(e||t!==this)&&n.$on(`$destroy`,l),n},$watch:function(e,t,r,i){var a=o(e),s=W(t)?t:P;if(a.$$watchDelegate)return a.$$watchDelegate(this,s,r,a,e);var c=this,l=c.$$watchers,u={fn:s,last:w,get:a,exp:i||e,eq:!!r};return n=null,l||(l=c.$$watchers=[],l.$$digestWatchIndex=-1),l.unshift(u),l.$$digestWatchIndex++,b(this,1),function(){var e=ve(l,u);e>=0&&(b(c,-1),e<l.$$digestWatchIndex&&l.$$digestWatchIndex--),n=null}},$watchGroup:function(e,t){var n=Array(e.length),r=Array(e.length),i=[],a=this,o=!1,s=!0;if(!e.length){var c=!0;return a.$evalAsync(function(){c&&t(r,r,a)}),function(){c=!1}}if(e.length===1)return this.$watch(e[0],function(e,i,a){r[0]=e,n[0]=i,t(r,e===i?r:n,a)});C(e,function(e,t){var n=a.$watch(e,function(e){r[t]=e,o||(o=!0,a.$evalAsync(l))});i.push(n)});function l(){o=!1;try{s?(s=!1,t(r,r,a)):t(r,n,a)}finally{for(var i=0;i<e.length;i++)n[i]=r[i]}}return function(){for(;i.length;)i.shift()()}},$watchCollection:function(e,t){h.$$pure=o(e).literal,h.$stateful=!h.$$pure;var n=this,r,i,a,c=t.length>1,l=0,u=o(e,h),d=[],f={},p=!0,m=0;function h(e){r=e;var t,n,a,o,c;if(!I(r)){if(!R(r))i!==r&&(i=r,l++);else if(S(r)){i!==d&&(i=d,m=i.length=0,l++),t=r.length,m!==t&&(l++,i.length=m=t);for(var u=0;u<t;u++)c=i[u],o=r[u],a=c!==c&&o!==o,!a&&c!==o&&(l++,i[u]=o)}else{for(n in i!==f&&(i=f={},m=0,l++),t=0,r)s.call(r,n)&&(t++,o=r[n],c=i[n],n in i?(a=c!==c&&o!==o,!a&&c!==o&&(l++,i[n]=o)):(m++,i[n]=o,l++));if(m>t)for(n in l++,i)s.call(r,n)||(m--,delete i[n])}return l}}function g(){if(p?(p=!1,t(r,r,n)):t(r,a,n),c){if(!R(r))a=r;else if(S(r)){a=Array(r.length);for(var e=0;e<r.length;e++)a[e]=r[e]}else for(var i in a={},r)s.call(r,i)&&(a[i]=r[i])}}return this.$watch(u,g)},$digest:function(){var a,o,s,l,u,d,f,g=e,b,x,S=m.length?p:this,C=[],E,D;v(`$digest`),c.$$checkUrlChange(),this===p&&r!==null&&(c.defer.cancel(r),T()),n=null;do{f=!1,x=S;for(var O=0;O<m.length;O++){try{D=m[O],l=D.fn,l(D.scope,D.locals)}catch(e){i(e)}n=null}m.length=0;traverseScopesLoop:do{if(d=!x.$$suspended&&x.$$watchers)for(d.$$digestWatchIndex=d.length;d.$$digestWatchIndex--;)try{if(a=d[d.$$digestWatchIndex],a){if(u=a.get,(o=u(x))!==(s=a.last)&&!(a.eq?xe(o,s):M(o)&&M(s)))f=!0,n=a,a.last=a.eq?ye(o,null):o,l=a.fn,l(o,s===w?o:s,x),g<5&&(E=4-g,C[E]||(C[E]=[]),C[E].push({msg:W(a.exp)?`fn: `+(a.exp.name||a.exp.toString()):a.exp,newVal:o,oldVal:s}));else if(a===n){f=!1;break traverseScopesLoop}}}catch(e){i(e)}if(!(b=!x.$$suspended&&x.$$watchersCount&&x.$$childHead||x!==S&&x.$$nextSibling))for(;x!==S&&!(b=x.$$nextSibling);)x=x.$parent}while(x=b);if((f||m.length)&&!g--)throw y(),t(`infdig`,`{0} $digest() iterations reached. Aborting!
Watchers fired in the last 5 iterations: {1}`,e,C)}while(f||m.length);for(y();_<h.length;)try{h[_++]()}catch(e){i(e)}h.length=_=0,c.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var e=this.$parent;for(var t in this.$broadcast(`$destroy`),this.$$destroyed=!0,this===p&&c.$$applicationDestroyed(),b(this,-this.$$watchersCount),this.$$listenerCount)x(this,this.$$listenerCount[t],t);e&&e.$$childHead===this&&(e.$$childHead=this.$$nextSibling),e&&e.$$childTail===this&&(e.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=P,this.$on=this.$watch=this.$watchGroup=function(){return P},this.$$listeners={},this.$$nextSibling=null,d(this)}},$eval:function(e,t){return o(e)(this,t)},$evalAsync:function(e,t){!p.$$phase&&!m.length&&c.defer(function(){m.length&&p.$digest()},null,`$evalAsync`),m.push({scope:this,fn:o(e),locals:t})},$$postDigest:function(e){h.push(e)},$apply:function(e){try{v(`$apply`);try{return this.$eval(e)}finally{y()}}catch(e){i(e)}finally{try{p.$digest()}catch(e){throw i(e),e}}},$applyAsync:function(e){var t=this;e&&g.push(n),e=o(e),D();function n(){t.$eval(e)}},$on:function(e,t){var n=this.$$listeners[e];n||(this.$$listeners[e]=n=[]),n.push(t);var r=this;do r.$$listenerCount[e]||(r.$$listenerCount[e]=0),r.$$listenerCount[e]++;while(r=r.$parent);var i=this;return function(){var r=n.indexOf(t);r!==-1&&(delete n[r],x(i,1,e))}},$emit:function(e,t){var n=[],r,a=this,o=!1,s={name:e,targetScope:a,stopPropagation:function(){o=!0},preventDefault:function(){s.defaultPrevented=!0},defaultPrevented:!1},c=we([s],arguments,1),l,u;do{for(r=a.$$listeners[e]||n,s.currentScope=a,l=0,u=r.length;l<u;l++){if(!r[l]){r.splice(l,1),l--,u--;continue}try{r[l].apply(null,c)}catch(e){i(e)}}if(o)break;a=a.$parent}while(a);return s.currentScope=null,s},$broadcast:function(e,t){var n=this,r=n,a=n,o={name:e,targetScope:n,preventDefault:function(){o.defaultPrevented=!0},defaultPrevented:!1};if(!n.$$listenerCount[e])return o;for(var s=we([o],arguments,1),c,l,u;r=a;){for(o.currentScope=r,c=r.$$listeners[e]||[],l=0,u=c.length;l<u;l++){if(!c[l]){c.splice(l,1),l--,u--;continue}try{c[l].apply(null,s)}catch(e){i(e)}}if(!(a=r.$$listenerCount[e]&&r.$$childHead||r!==n&&r.$$nextSibling))for(;r!==n&&!(a=r.$$nextSibling);)r=r.$parent}return o.currentScope=null,o}};var p=new f,m=p.$$asyncQueue=[],h=p.$$postDigestQueue=[],g=p.$$applyAsyncQueue=[],_=0;return p;function v(e){if(p.$$phase)throw t(`inprog`,`{0} already in progress`,p.$$phase);p.$$phase=e}function y(){p.$$phase=null}function b(e,t){do e.$$watchersCount+=t;while(e=e.$parent)}function x(e,t,n){do e.$$listenerCount[n]-=t,e.$$listenerCount[n]===0&&delete e.$$listenerCount[n];while(e=e.$parent)}function w(){}function T(){for(;g.length;)try{g.shift()()}catch(e){i(e)}r=null}function D(){r===null&&(r=c.defer(function(){p.$apply(T)},null,`$applyAsync`))}}]}function Bi(){var e=/^\s*(https?|s?ftp|mailto|tel|file):/,t=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationTrustedUrlList=function(t){return L(t)?(e=t,this):e},this.imgSrcSanitizationTrustedUrlList=function(e){return L(e)?(t=e,this):t},this.$get=function(){return function(n,r){var i=r?t:e,a=aa(n&&n.trim()).href;return a!==``&&!a.match(i)?`unsafe:`+a:n}}}var Vi=i(`$sce`),Q={HTML:`html`,CSS:`css`,MEDIA_URL:`mediaUrl`,URL:`url`,RESOURCE_URL:`resourceUrl`,JS:`js`},Hi=/_([a-z])/g;function Ui(e){return e.replace(Hi,Tt)}function Wi(e){if(e===`self`)return e;if(B(e)){if(e.indexOf(`***`)>-1)throw Vi(`iwcard`,`Illegal sequence *** in string matcher.  String: {0}`,e);return e=pe(e).replace(/\\\*\\\*/g,`.*`).replace(/\\\*/g,`[^:/.?&;]*`),RegExp(`^`+e+`$`)}if(re(e))return RegExp(`^`+e.source+`$`);throw Vi(`imatcher`,`Matchers may only be "self", string patterns or RegExp objects`)}function Gi(e){var t=[];return L(e)&&C(e,function(e){t.push(Wi(e))}),t}function Ki(){this.SCE_CONTEXTS=Q;var e=[`self`],t=[];this.trustedResourceUrlList=function(t){return arguments.length&&(e=Gi(t)),e},Object.defineProperty(this,"resourceUrlWhitelist",{get:function(){return this.trustedResourceUrlList},set:function(e){this.trustedResourceUrlList=e}}),this.bannedResourceUrlList=function(e){return arguments.length&&(t=Gi(e)),t},Object.defineProperty(this,"resourceUrlBlacklist",{get:function(){return this.bannedResourceUrlList},set:function(e){this.bannedResourceUrlList=e}}),this.$get=[`$injector`,`$$sanitizeUri`,function(n,r){var i=function(e){throw Vi(`unsafe`,`Attempting to use an unsafe value in a safe context.`)};n.has(`$sanitize`)&&(i=n.get(`$sanitize`));function a(e,t){return e===`self`?oa(t)||sa(t):!!e.exec(t.href)}function o(n){var r=aa(n.toString()),i,o,s=!1;for(i=0,o=e.length;i<o;i++)if(a(e[i],r)){s=!0;break}if(s){for(i=0,o=t.length;i<o;i++)if(a(t[i],r)){s=!1;break}}return s}function s(e){var t=function(e){this.$$unwrapTrustedValue=function(){return e}};return e&&(t.prototype=new e),t.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},t.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},t}var c=s(),l={};l[Q.HTML]=s(c),l[Q.CSS]=s(c),l[Q.MEDIA_URL]=s(c),l[Q.URL]=s(l[Q.MEDIA_URL]),l[Q.JS]=s(c),l[Q.RESOURCE_URL]=s(l[Q.URL]);function u(e,t){var n=l.hasOwnProperty(e)?l[e]:null;if(!n)throw Vi(`icontext`,`Attempted to trust a value in invalid context. Context: {0}; Value: {1}`,e,t);if(t===null||I(t)||t===``)return t;if(typeof t!=`string`)throw Vi(`itype`,`Attempted to trust a non-string value in a content requiring a string: Context: {0}`,e);return new n(t)}function d(e){return e instanceof c?e.$$unwrapTrustedValue():e}function f(e,t){if(t===null||I(t)||t===``)return t;var n=l.hasOwnProperty(e)?l[e]:null;if(n&&t instanceof n)return t.$$unwrapTrustedValue();if(W(t.$$unwrapTrustedValue)&&(t=t.$$unwrapTrustedValue()),e===Q.MEDIA_URL||e===Q.URL)return r(t.toString(),e===Q.MEDIA_URL);if(e===Q.RESOURCE_URL){if(o(t))return t;throw Vi(`insecurl`,`Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}`,t.toString())}if(e===Q.HTML)return i(t);throw Vi(`unsafe`,`Attempting to use an unsafe value in a safe context.`)}return{trustAs:u,getTrusted:f,valueOf:d}}]}function qi(){var e=!0;this.enabled=function(t){return arguments.length&&(e=!!t),e},this.$get=[`$parse`,`$sceDelegate`,function(t,n){if(e&&u<8)throw Vi(`iequirks`,`Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.`);var r=ft(Q);r.isEnabled=function(){return e},r.trustAs=n.trustAs,r.getTrusted=n.getTrusted,r.valueOf=n.valueOf,e||(r.trustAs=r.getTrusted=function(e,t){return t},r.valueOf=ee),r.parseAs=function(e,n){var i=t(n);return i.literal&&i.constant?i:t(n,function(t){return r.getTrusted(e,t)})};var i=r.parseAs,a=r.getTrusted,o=r.trustAs;return C(Q,function(e,t){var n=c(t);r[Ui(`parse_as_`+n)]=function(t){return i(e,t)},r[Ui(`get_trusted_`+n)]=function(t){return a(e,t)},r[Ui(`trust_as_`+n)]=function(t){return o(e,t)}}),r}]}function Ji(){this.$get=[`$window`,`$document`,function(e,t){var n={},r=!(!(e.nw&&e.nw.process)&&e.chrome&&(e.chrome.app&&e.chrome.app.runtime||!e.chrome.app&&e.chrome.runtime&&e.chrome.runtime.id))&&e.history&&e.history.pushState,i=j((/android (\d+)/.exec(c((e.navigator||{}).userAgent))||[])[1]),a=/Boxee/i.test((e.navigator||{}).userAgent),o=t[0]||{},s=o.body&&o.body.style,l=!1,d=!1;return s&&(l=`transition`in s||`webkitTransition`in s,d=`animation`in s||`webkitAnimation`in s),{history:!!(r&&!(i<4)&&!a),hasEvent:function(e){if(e===`input`&&u)return!1;if(I(n[e])){var t=o.createElement(`div`);n[e]=`on`+e in t}return n[e]},csp:Se(),transitions:l,animations:d,android:i}}]}function Yi(){this.$get=F(function(e){return new Xi(e)})}function Xi(e){var t=this,n={},r=[],i=t.ALL_TASKS_TYPE=`$$all$$`,a=t.DEFAULT_TASK_TYPE=`$$default$$`;t.completeTask=o,t.incTaskCount=u,t.notifyWhenNoPendingTasks=d;function o(t,r){r||=a;try{t()}finally{s(r);var o=n[r],u=n[i];if(!u||!o)for(var d=u?l:c,f;f=d(r);)try{f()}catch(t){e.error(t)}}}function s(e){e||=a,n[e]&&(n[e]--,n[i]--)}function c(){var e=r.pop();return e&&e.cb}function l(e){for(var t=r.length-1;t>=0;--t){var n=r[t];if(n.type===e)return r.splice(t,1),n.cb}}function u(e){e||=a,n[e]=(n[e]||0)+1,n[i]=(n[i]||0)+1}function d(e,t){t||=i,n[t]?r.push({type:t,cb:e}):e()}}var Zi=i(`$templateRequest`);function Qi(){var e;this.httpOptions=function(t){return t?(e=t,this):e},this.$get=[`$exceptionHandler`,`$templateCache`,`$http`,`$q`,`$sce`,function(t,n,r,i,a){function o(s,c){o.totalPendingRequests++,(!B(s)||I(n.get(s)))&&(s=a.getTrustedResourceUrl(s));var l=r.defaults&&r.defaults.transformResponse;return U(l)?l=l.filter(function(e){return e!==Er}):l===Er&&(l=null),r.get(s,k({cache:n,transformResponse:l},e)).finally(function(){o.totalPendingRequests--}).then(function(e){return n.put(s,e.data)},u);function u(e){return c||(e=Zi(`tpload`,`Failed to load template: {0} (HTTP status: {1} {2})`,s,e.status,e.statusText),t(e)),i.reject(e)}}return o.totalPendingRequests=0,o}]}function $i(){this.$get=[`$rootScope`,`$browser`,`$location`,function(e,t,n){var r={};return r.findBindings=function(e,t,n){var r=e.getElementsByClassName(`ng-binding`),i=[];return C(r,function(e){var r=y.element(e).data(`$binding`);r&&C(r,function(r){n?RegExp(`(^|\\s)`+pe(t)+`(\\s|\\||$)`).test(r)&&i.push(e):r.indexOf(t)!==-1&&i.push(e)})}),i},r.findModels=function(e,t,n){for(var r=[`ng-`,`data-ng-`,`ng\\:`],i=0;i<r.length;++i){var a=n?`=`:`*=`,o=`[`+r[i]+`model`+a+`"`+t+`"]`,s=e.querySelectorAll(o);if(s.length)return s}},r.getLocation=function(){return n.url()},r.setLocation=function(t){t!==n.url()&&(n.url(t),e.$digest())},r.whenStable=function(e){t.notifyWhenNoOutstandingRequests(e)},r}]}var ea=i(`$timeout`);function ta(){this.$get=[`$rootScope`,`$browser`,`$q`,`$$q`,`$exceptionHandler`,function(e,t,n,r,i){var a={};function o(o,s,c){W(o)||(c=s,s=o,o=P);var l=Te(arguments,3),u=L(c)&&!c,d=(u?r:n).defer(),f=d.promise,p=t.defer(function(){try{d.resolve(o.apply(null,l))}catch(e){d.reject(e),i(e)}finally{delete a[f.$$timeoutId]}u||e.$apply()},s,`$timeout`);return f.$$timeoutId=p,a[p]=d,f}return o.cancel=function(e){if(!e)return!1;if(!e.hasOwnProperty(`$$timeoutId`))throw ea(`badprom`,"`$timeout.cancel()` called with a promise that was not generated by `$timeout()`.");if(!a.hasOwnProperty(e.$$timeoutId))return!1;var n=e.$$timeoutId,r=a[n];return Li(r.promise),r.reject(`canceled`),delete a[n],t.defer.cancel(n)},o}]}var $=e.document.createElement(`a`),na=aa(e.location.href),ra;$.href=`http://[::1]`;var ia=$.hostname===`[::1]`;function aa(e){if(!B(e))return e;var t=e;u&&($.setAttribute(`href`,t),t=$.href),$.setAttribute(`href`,t);var n=$.hostname;return!ia&&n.indexOf(`:`)>-1&&(n=`[`+n+`]`),{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,``):``,host:$.host,search:$.search?$.search.replace(/^\?/,``):``,hash:$.hash?$.hash.replace(/^#/,``):``,hostname:n,port:$.port,pathname:$.pathname.charAt(0)===`/`?$.pathname:`/`+$.pathname}}function oa(e){return la(e,na)}function sa(e){return la(e,ua())}function ca(e){var t=[na].concat(e.map(aa));return function(e){var n=aa(e);return t.some(la.bind(null,n))}}function la(e,t){return e=aa(e),t=aa(t),e.protocol===t.protocol&&e.host===t.host}function ua(){return e.document.baseURI?e.document.baseURI:(ra||=(ra=e.document.createElement(`a`),ra.href=`.`,ra.cloneNode(!1)),ra.href)}function da(){this.$get=F(e)}function fa(e){var t=e[0]||{},n={},r=``;function i(e){try{return e.cookie||``}catch{return``}}function a(e){try{return decodeURIComponent(e)}catch{return e}}return function(){var e,o,s,c,l,u=i(t);if(u!==r)for(r=u,e=r.split(`; `),n={},s=0;s<e.length;s++)o=e[s],c=o.indexOf(`=`),c>0&&(l=a(o.substring(0,c)),I(n[l])&&(n[l]=a(o.substring(c+1))));return n}}fa.$inject=[`$document`];function pa(){this.$get=fa}ma.$inject=[`$provide`];function ma(e){var t=`Filter`;function n(r,i){if(R(r)){var a={};return C(r,function(e,t){a[t]=n(t,e)}),a}return e.factory(r+t,i)}this.register=n,this.$get=[`$injector`,function(e){return function(n){return e.get(n+t)}}],n(`currency`,Sa),n(`date`,Ba),n(`filter`,ha),n(`json`,Va),n(`limitTo`,Wa),n(`lowercase`,Ha),n(`number`,Ca),n(`orderBy`,Ka),n(`uppercase`,Ua)}function ha(){return function(e,t,n,r){if(!S(e)){if(e==null)return e;throw i(`filter`)(`notarray`,`Expected array but received: {0}`,e)}r||=`$`;var a=va(t),o,s;switch(a){case`function`:o=t;break;case`boolean`:case`null`:case`number`:case`string`:s=!0;case`object`:o=ga(t,n,r,s);break;default:return e}return Array.prototype.filter.call(e,o)}}function ga(e,t,n,r){var i=R(e)&&n in e,a;return t===!0?t=xe:W(t)||(t=function(e,t){return I(e)?!1:e===null||t===null?e===t:R(t)||R(e)&&!te(e)?!1:(e=c(``+e),t=c(``+t),e.indexOf(t)!==-1)}),a=function(a){return i&&!R(a)?_a(a,e[n],t,n,!1):_a(a,e,t,n,r)},a}function _a(e,t,n,r,i,a){var o=va(e),s=va(t);if(s===`string`&&t.charAt(0)===`!`)return!_a(e,t.substring(1),n,r,i);if(U(e))return e.some(function(e){return _a(e,t,n,r,i)});switch(o){case`object`:var c;if(i){for(c in e)if(c.charAt&&c.charAt(0)!==`$`&&_a(e[c],t,n,r,!0))return!0;return!a&&_a(e,t,n,r,!1)}if(s===`object`){for(c in t){var l=t[c];if(!(W(l)||I(l))){var u=c===r;if(!_a(u?e:e[c],l,n,r,u,u))return!1}}return!0}return n(e,t);case`function`:return!1;default:return n(e,t)}}function va(e){return e===null?`null`:typeof e}var ya=22,ba=`.`,xa=`0`;Sa.$inject=[`$locale`];function Sa(e){var t=e.NUMBER_FORMATS;return function(e,n,r){I(n)&&(n=t.CURRENCY_SYM),I(r)&&(r=t.PATTERNS[1].maxFrac);var i=n?/\u00A4/g:/\s*\u00A4\s*/g;return e==null?e:Ea(e,t.PATTERNS[1],t.GROUP_SEP,t.DECIMAL_SEP,r).replace(i,n)}}Ca.$inject=[`$locale`];function Ca(e){var t=e.NUMBER_FORMATS;return function(e,n){return e==null?e:Ea(e,t.PATTERNS[0],t.GROUP_SEP,t.DECIMAL_SEP,n)}}function wa(e){var t=0,n,r,i,a,o;for((r=e.indexOf(ba))>-1&&(e=e.replace(ba,``)),(i=e.search(/e/i))>0?(r<0&&(r=i),r+=+e.slice(i+1),e=e.substring(0,i)):r<0&&(r=e.length),i=0;e.charAt(i)===xa;i++);if(i===(o=e.length))n=[0],r=1;else{for(o--;e.charAt(o)===xa;)o--;for(r-=i,n=[],a=0;i<=o;i++,a++)n[a]=+e.charAt(i)}return r>ya&&(n=n.splice(0,ya-1),t=r-1,r=1),{d:n,e:t,i:r}}function Ta(e,t,n,r){var i=e.d,a=i.length-e.i;t=I(t)?Math.min(Math.max(n,a),r):+t;var o=t+e.i,s=i[o];if(o>0){i.splice(Math.max(e.i,o));for(var c=o;c<i.length;c++)i[c]=0}else{a=Math.max(0,a),e.i=1,i.length=Math.max(1,o=t+1),i[0]=0;for(var l=1;l<o;l++)i[l]=0}if(s>=5){if(o-1<0){for(var u=0;u>o;u--)i.unshift(0),e.i++;i.unshift(1),e.i++}else i[o-1]++}for(;a<Math.max(0,t);a++)i.push(0);var d=i.reduceRight(function(e,t,n,r){return t+=e,r[n]=t%10,Math.floor(t/10)},0);d&&(i.unshift(d),e.i++)}function Ea(e,t,n,r,i){if(!(B(e)||V(e))||isNaN(e))return``;var a=!isFinite(e),o=!1,s=Math.abs(e)+``,c=``,l;if(a)c=`∞`;else{l=wa(s),Ta(l,i,t.minFrac,t.maxFrac);var u=l.d,d=l.i,f=l.e,p=[];for(o=u.reduce(function(e,t){return e&&!t},!0);d<0;)u.unshift(0),d++;d>0?p=u.splice(d,u.length):(p=u,u=[0]);var m=[];for(u.length>=t.lgSize&&m.unshift(u.splice(-t.lgSize,u.length).join(``));u.length>t.gSize;)m.unshift(u.splice(-t.gSize,u.length).join(``));u.length&&m.unshift(u.join(``)),c=m.join(n),p.length&&(c+=r+p.join(``)),f&&(c+=`e+`+f)}return e<0&&!o?t.negPre+c+t.negSuf:t.posPre+c+t.posSuf}function Da(e,t,n,r){var i=``;for((e<0||r&&e<=0)&&(r?e=-e+1:(e=-e,i=`-`)),e=``+e;e.length<t;)e=xa+e;return n&&(e=e.substr(e.length-t)),i+e}function Oa(e,t,n,r,i){return n||=0,function(a){var o=a[`get`+e]();return(n>0||o>-n)&&(o+=n),o===0&&n===-12&&(o=12),Da(o,t,r,i)}}function ka(e,t,n){return function(r,i){var a=r[`get`+e]();return i[l((n?`STANDALONE`:``)+(t?`SHORT`:``)+e)][a]}}function Aa(e,t,n){var r=-1*n,i=r>=0?`+`:``;return i+=Da(Math[r>0?`floor`:`ceil`](r/60),2)+Da(Math.abs(r%60),2),i}function ja(e){var t=new Date(e,0,1).getDay();return new Date(e,0,(t<=4?5:12)-t)}function Ma(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+(4-e.getDay()))}function Na(e){return function(t){var n=ja(t.getFullYear()),r=Ma(t)-+n;return Da(1+Math.round(r/6048e5),e)}}function Pa(e,t){return e.getHours()<12?t.AMPMS[0]:t.AMPMS[1]}function Fa(e,t){return e.getFullYear()<=0?t.ERAS[0]:t.ERAS[1]}function Ia(e,t){return e.getFullYear()<=0?t.ERANAMES[0]:t.ERANAMES[1]}var La={yyyy:Oa(`FullYear`,4,0,!1,!0),yy:Oa(`FullYear`,2,0,!0,!0),y:Oa(`FullYear`,1,0,!1,!0),MMMM:ka(`Month`),MMM:ka(`Month`,!0),MM:Oa(`Month`,2,1),M:Oa(`Month`,1,1),LLLL:ka(`Month`,!1,!0),dd:Oa(`Date`,2),d:Oa(`Date`,1),HH:Oa(`Hours`,2),H:Oa(`Hours`,1),hh:Oa(`Hours`,2,-12),h:Oa(`Hours`,1,-12),mm:Oa(`Minutes`,2),m:Oa(`Minutes`,1),ss:Oa(`Seconds`,2),s:Oa(`Seconds`,1),sss:Oa(`Milliseconds`,3),EEEE:ka(`Day`),EEE:ka(`Day`,!0),a:Pa,Z:Aa,ww:Na(2),w:Na(1),G:Fa,GG:Fa,GGG:Fa,GGGG:Ia},Ra=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,za=/^-?\d+$/;Ba.$inject=[`$locale`];function Ba(e){var t=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;function n(e){var n;if(n=e.match(t)){var r=new Date(0),i=0,a=0,o=n[8]?r.setUTCFullYear:r.setFullYear,s=n[8]?r.setUTCHours:r.setHours;n[9]&&(i=j(n[9]+n[10]),a=j(n[9]+n[11])),o.call(r,j(n[1]),j(n[2])-1,j(n[3]));var c=j(n[4]||0)-i,l=j(n[5]||0)-a,u=j(n[6]||0),d=Math.round(parseFloat(`0.`+(n[7]||0))*1e3);return s.call(r,c,l,u,d),r}return e}return function(t,r,i){var a=``,o=[],s,c;if(r||=`mediumDate`,r=e.DATETIME_FORMATS[r]||r,B(t)&&(t=za.test(t)?j(t):n(t)),V(t)&&(t=new Date(t)),!H(t)||!isFinite(t.getTime()))return t;for(;r;)c=Ra.exec(r),c?(o=we(o,c,1),r=o.pop()):(o.push(r),r=null);var l=t.getTimezoneOffset();return i&&(l=je(i,l),t=Ne(t,i,!0)),C(o,function(n){s=La[n],a+=s?s(t,e.DATETIME_FORMATS,l):n===`''`?`'`:n.replace(/(^'|'$)/g,``).replace(/''/g,`'`)}),a}}function Va(){return function(e,t){return I(t)&&(t=2),Oe(e,t)}}var Ha=F(c),Ua=F(l);function Wa(){return function(e,t,n){return t=Math.abs(Number(t))===1/0?Number(t):j(t),M(t)||(V(e)&&(e=e.toString()),!S(e))?e:(n=!n||isNaN(n)?0:j(n),n=n<0?Math.max(0,e.length+n):n,t>=0?Ga(e,n,n+t):n===0?Ga(e,t,e.length):Ga(e,Math.max(0,n+t),n))}}function Ga(e,t,n){return B(e)?e.slice(t,n):p.call(e,t,n)}Ka.$inject=[`$parse`];function Ka(e){return function(e,n,r,s){if(e==null)return e;if(!S(e))throw i(`orderBy`)(`notarray`,`Expected array but received: {0}`,e);U(n)||(n=[n]),n.length===0&&(n=[`+`]);var c=t(n),l=r?-1:1,u=W(s)?s:o,d=Array.prototype.map.call(e,f);return d.sort(p),e=d.map(function(e){return e.value}),e;function f(e,t){return{value:e,tieBreaker:{value:t,type:`number`,index:t},predicateValues:c.map(function(n){return a(n.get(e),t)})}}function p(e,t){for(var n=0,r=c.length;n<r;n++){var i=u(e.predicateValues[n],t.predicateValues[n]);if(i)return i*c[n].descending*l}return(u(e.tieBreaker,t.tieBreaker)||o(e.tieBreaker,t.tieBreaker))*l}};function t(t){return t.map(function(t){var n=1,r=ee;if(W(t))r=t;else if(B(t)&&((t.charAt(0)===`+`||t.charAt(0)===`-`)&&(n=t.charAt(0)===`-`?-1:1,t=t.substring(1)),t!==``&&(r=e(t),r.constant))){var i=r();r=function(e){return e[i]}}return{get:r,descending:n}})}function n(e){switch(typeof e){case`number`:case`boolean`:case`string`:return!0;default:return!1}}function r(e){return W(e.valueOf)&&(e=e.valueOf(),n(e))||te(e)&&(e=e.toString()),e}function a(e,t){var n=typeof e;return e===null?n=`null`:n===`object`&&(e=r(e)),{value:e,type:n,index:t}}function o(e,t){var n=0,r=e.type,i=t.type;if(r===i){var a=e.value,o=t.value;r===`string`?(a=a.toLowerCase(),o=o.toLowerCase()):r===`object`&&(R(a)&&(a=e.index),R(o)&&(o=t.index)),a!==o&&(n=a<o?-1:1)}else n=r===`undefined`?1:i===`undefined`?-1:r===`null`?1:i===`null`||r<i?-1:1;return n}}function qa(e){return W(e)&&(e={link:e}),e.restrict=e.restrict||`AC`,F(e)}var Ja=F({restrict:`E`,compile:function(e,t){if(!t.href&&!t.xlinkHref)return function(e,t){if(t[0].nodeName.toLowerCase()===`a`){var n=g.call(t.prop(`href`))===`[object SVGAnimatedString]`?`xlink:href`:`href`;t.on(`click`,function(e){t.attr(n)||e.preventDefault()})}}}}),Ya={};C(ln,function(e,t){if(e===`multiple`)return;function n(e,n,i){e.$watch(i[r],function(e){i.$set(t,!!e)})}var r=or(`ng-`+t),i=n;e===`checked`&&(i=function(e,t,i){i.ngModel!==i[r]&&n(e,t,i)}),Ya[r]=function(){return{restrict:`A`,priority:100,link:i}}}),C(dn,function(e,t){Ya[t]=function(){return{priority:100,link:function(e,n,r){if(t===`ngPattern`&&r.ngPattern.charAt(0)===`/`){var i=r.ngPattern.match(a);if(i){r.$set(`ngPattern`,new RegExp(i[1],i[2]));return}}e.$watch(r[t],function(e){r.$set(t,e)})}}}}),C([`src`,`srcset`,`href`],function(e){var t=or(`ng-`+e);Ya[t]=[`$sce`,function(n){return{priority:99,link:function(r,i,a){var o=e,s=e;e===`href`&&g.call(i.prop(`href`))===`[object SVGAnimatedString]`&&(s=`xlinkHref`,a.$attr[s]=`xlink:href`,o=null),a.$set(t,n.getTrustedMediaUrl(a[t])),a.$observe(t,function(t){if(!t){e===`href`&&a.$set(s,null);return}a.$set(s,t),u&&o&&i.prop(o,a[s])})}}}]});var Xa={$addControl:P,$getControls:F([]),$$renameControl:$a,$removeControl:P,$setValidity:P,$setDirty:P,$setPristine:P,$setSubmitted:P,$$setSubmitted:P},Za=`ng-pending`,Qa=`ng-submitted`;function $a(e,t){e.$name=t}eo.$inject=[`$element`,`$attrs`,`$scope`,`$animate`,`$interpolate`];function eo(e,t,n,r,i){this.$$controls=[],this.$error={},this.$$success={},this.$pending=void 0,this.$name=i(t.name||t.ngForm||``)(n),this.$dirty=!1,this.$pristine=!0,this.$valid=!0,this.$invalid=!1,this.$submitted=!1,this.$$parentForm=Xa,this.$$element=e,this.$$animate=r,io(this)}eo.prototype={$rollbackViewValue:function(){C(this.$$controls,function(e){e.$rollbackViewValue()})},$commitViewValue:function(){C(this.$$controls,function(e){e.$commitViewValue()})},$addControl:function(e){tt(e.$name,`input`),this.$$controls.push(e),e.$name&&(this[e.$name]=e),e.$$parentForm=this},$getControls:function(){return ft(this.$$controls)},$$renameControl:function(e,t){var n=e.$name;this[n]===e&&delete this[n],this[t]=e,e.$name=t},$removeControl:function(e){e.$name&&this[e.$name]===e&&delete this[e.$name],C(this.$pending,function(t,n){this.$setValidity(n,null,e)},this),C(this.$error,function(t,n){this.$setValidity(n,null,e)},this),C(this.$$success,function(t,n){this.$setValidity(n,null,e)},this),ve(this.$$controls,e),e.$$parentForm=Xa},$setDirty:function(){this.$$animate.removeClass(this.$$element,ls),this.$$animate.addClass(this.$$element,us),this.$dirty=!0,this.$pristine=!1,this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,ls,us+` `+Qa),this.$dirty=!1,this.$pristine=!0,this.$submitted=!1,C(this.$$controls,function(e){e.$setPristine()})},$setUntouched:function(){C(this.$$controls,function(e){e.$setUntouched()})},$setSubmitted:function(){for(var e=this;e.$$parentForm&&e.$$parentForm!==Xa;)e=e.$$parentForm;e.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,Qa),this.$submitted=!0,C(this.$$controls,function(e){e.$$setSubmitted&&e.$$setSubmitted()})}},ao({clazz:eo,set:function(e,t,n){var r=e[t];r?r.indexOf(n)===-1&&r.push(n):e[t]=[n]},unset:function(e,t,n){var r=e[t];r&&(ve(r,n),r.length===0&&delete e[t])}});var to=function(e){return[`$timeout`,`$parse`,function(t,n){return{name:`form`,restrict:e?`EAC`:`E`,require:[`form`,`^^?form`],controller:eo,compile:function(n,i){n.addClass(ls).addClass(ss);var a=i.name?`name`:e&&i.ngForm?`ngForm`:!1;return{pre:function(e,n,i,o){var s=o[0];if(!(`action`in i)){var c=function(t){e.$apply(function(){s.$commitViewValue(),s.$setSubmitted()}),t.preventDefault()};n[0].addEventListener(`submit`,c),n.on(`$destroy`,function(){t(function(){n[0].removeEventListener(`submit`,c)},0,!1)})}(o[1]||s.$$parentForm).$addControl(s);var l=a?r(s.$name):P;a&&(l(e,s),i.$observe(a,function(t){s.$name!==t&&(l(e,void 0),s.$$parentForm.$$renameControl(s,t),l=r(s.$name),l(e,s))})),n.on(`$destroy`,function(){s.$$parentForm.$removeControl(s),l(e,void 0),k(s,Xa)})}}}};function r(e){return e===``?n(`this[""]`).assign:n(e).assign||P}}]},no=to(),ro=to(!0);function io(e){e.$$classCache={},e.$$classCache[cs]=!(e.$$classCache[ss]=e.$$element.hasClass(ss))}function ao(e){var t=e.clazz,n=e.set,r=e.unset;t.prototype.$setValidity=function(e,t,c){I(t)?i(this,`$pending`,e,c):a(this,`$pending`,e,c),le(t)?t?(r(this.$error,e,c),n(this.$$success,e,c)):(n(this.$error,e,c),r(this.$$success,e,c)):(r(this.$error,e,c),r(this.$$success,e,c)),this.$pending?(o(this,Za,!0),this.$valid=this.$invalid=void 0,s(this,``,null)):(o(this,Za,!1),this.$valid=oo(this.$error),this.$invalid=!this.$valid,s(this,``,this.$valid));var l=this.$pending&&this.$pending[e]?void 0:this.$error[e]?!1:this.$$success[e]?!0:null;s(this,e,l),this.$$parentForm.$setValidity(e,l,this)};function i(e,t,r,i){e[t]||(e[t]={}),n(e[t],r,i)}function a(e,t,n,i){e[t]&&r(e[t],n,i),oo(e[t])&&(e[t]=void 0)}function o(e,t,n){n&&!e.$$classCache[t]?(e.$$animate.addClass(e.$$element,t),e.$$classCache[t]=!0):!n&&e.$$classCache[t]&&(e.$$animate.removeClass(e.$$element,t),e.$$classCache[t]=!1)}function s(e,t,n){t=t?`-`+Ye(t,`-`):``,o(e,ss+t,n===!0),o(e,cs+t,n===!1)}}function oo(e){if(e){for(var t in e)if(e.hasOwnProperty(t))return!1}return!0}var so=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,co=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,lo=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,uo=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,fo=/^(\d{4,})-(\d{2})-(\d{2})$/,po=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mo=/^(\d{4,})-W(\d\d)$/,ho=/^(\d{4,})-(\d\d)$/,go=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,_o=`keydown wheel mousedown`,vo=q();C(`date,datetime-local,month,time,week`.split(`,`),function(e){vo[e]=!0});var yo={text:xo,date:To(`date`,fo,wo(fo,[`yyyy`,`MM`,`dd`]),`yyyy-MM-dd`),"datetime-local":To(`datetimelocal`,po,wo(po,[`yyyy`,`MM`,`dd`,`HH`,`mm`,`ss`,`sss`]),`yyyy-MM-ddTHH:mm:ss.sss`),time:To(`time`,go,wo(go,[`HH`,`mm`,`ss`,`sss`]),`HH:mm:ss.sss`),week:To(`week`,mo,Co,`yyyy-Www`),month:To(`month`,ho,wo(ho,[`yyyy`,`MM`]),`yyyy-MM`),number:Mo,url:Po,email:Fo,radio:Io,range:No,checkbox:Ro,hidden:P,button:P,submit:P,reset:P,file:P};function bo(e){e.$formatters.push(function(t){return e.$isEmpty(t)?t:t.toString()})}function xo(e,t,n,r,i,a){So(e,t,n,r,i,a),bo(r)}function So(e,t,n,r,i,a){var s=c(t[0].type);if(!i.android){var l=!1;t.on(`compositionstart`,function(){l=!0}),t.on(`compositionupdate`,function(e){(I(e.data)||e.data===``)&&(l=!1)}),t.on(`compositionend`,function(){l=!1,d()})}var u,d=function(e){if(u&&=(a.defer.cancel(u),null),!l){var i=t.val(),o=e&&e.type;s!==`password`&&(!n.ngTrim||n.ngTrim!==`false`)&&(i=K(i)),(r.$viewValue!==i||i===``&&r.$$hasNativeValidators)&&r.$setViewValue(i,o)}};if(i.hasEvent(`input`))t.on(`input`,d);else{var f=function(e,t,n){u||=a.defer(function(){u=null,(!t||t.value!==n)&&d(e)})};t.on(`keydown`,function(e){var t=e.keyCode;t===91||15<t&&t<19||37<=t&&t<=40||f(e,this,this.value)}),i.hasEvent(`paste`)&&t.on(`paste cut drop`,f)}t.on(`change`,d),vo[s]&&r.$$hasNativeValidators&&s===n.type&&t.on(_o,function(e){if(!u){var t=this[o],n=t.badInput,r=t.typeMismatch;u=a.defer(function(){u=null,(t.badInput!==n||t.typeMismatch!==r)&&d(e)})}}),r.$render=function(){var e=r.$isEmpty(r.$viewValue)?``:r.$viewValue;t.val()!==e&&t.val(e)}}function Co(e,t){if(H(e))return e;if(B(e)){mo.lastIndex=0;var n=mo.exec(e);if(n){var r=+n[1],i=+n[2],a=0,o=0,s=0,c=0,l=ja(r),u=(i-1)*7;return t&&(a=t.getHours(),o=t.getMinutes(),s=t.getSeconds(),c=t.getMilliseconds()),new Date(r,0,l.getDate()+u,a,o,s,c)}}return NaN}function wo(e,t){return function(n,r){var i,a;if(H(n))return n;if(B(n)){if(n.charAt(0)===`"`&&n.charAt(n.length-1)===`"`&&(n=n.substring(1,n.length-1)),so.test(n))return new Date(n);if(e.lastIndex=0,i=e.exec(n),i){i.shift(),a=r?{yyyy:r.getFullYear(),MM:r.getMonth()+1,dd:r.getDate(),HH:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),sss:r.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},C(i,function(e,n){n<t.length&&(a[t[n]]=+e)});var o=new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,a.sss*1e3||0);return a.yyyy<100&&o.setFullYear(a.yyyy),o}}return NaN}}function To(e,t,n,r){return function(i,a,o,s,c,l,u,d){Eo(i,a,o,s,e),So(i,a,o,s,c,l);var f=e===`time`||e===`datetimelocal`,p,m;if(s.$parsers.push(function(n){if(s.$isEmpty(n))return null;if(t.test(n))return x(n,p);s.$$parserName=e}),s.$formatters.push(function(e){if(e&&!H(e))throw hs(`datefmt`,"Expected `{0}` to be a date",e);if(y(e)){p=e;var t=s.$options.getOption(`timezone`);return t&&(m=t,p=Ne(p,t,!0)),S(e,t)}return p=null,m=null,``}),L(o.min)||o.ngMin){var h=o.min||d(o.ngMin)(i),g=b(h);s.$validators.min=function(e){return!y(e)||I(g)||n(e)>=g},o.$observe(`min`,function(e){e!==h&&(g=b(e),h=e,s.$validate())})}if(L(o.max)||o.ngMax){var _=o.max||d(o.ngMax)(i),v=b(_);s.$validators.max=function(e){return!y(e)||I(v)||n(e)<=v},o.$observe(`max`,function(e){e!==_&&(v=b(e),_=e,s.$validate())})}function y(e){return e&&!(e.getTime&&e.getTime()!==e.getTime())}function b(e){return L(e)&&!H(e)?x(e)||void 0:e}function x(e,t){var r=s.$options.getOption(`timezone`);m&&m!==r&&(t=Me(t,je(m)));var i=n(e,t);return!isNaN(i)&&r&&(i=Ne(i,r)),i}function S(e,t){var n=r;f&&B(s.$options.getOption(`timeSecondsFormat`))&&(n=r.replace(`ss.sss`,s.$options.getOption(`timeSecondsFormat`)).replace(/:$/,``));var i=u(`date`)(e,n,t);return f&&s.$options.getOption(`timeStripZeroSeconds`)&&(i=i.replace(/(?::00)?(?:\.000)?$/,``)),i}}}function Eo(e,t,n,r,i){var a=t[0];(r.$$hasNativeValidators=R(a.validity))&&r.$parsers.push(function(e){var n=t.prop(o)||{};if(n.badInput||n.typeMismatch){r.$$parserName=i;return}return e})}function Do(e){e.$parsers.push(function(t){if(e.$isEmpty(t))return null;if(uo.test(t))return parseFloat(t);e.$$parserName=`number`}),e.$formatters.push(function(t){if(!e.$isEmpty(t)){if(!V(t))throw hs(`numfmt`,"Expected `{0}` to be a number",t);t=t.toString()}return t})}function Oo(e){return L(e)&&!V(e)&&(e=parseFloat(e)),M(e)?void 0:e}function ko(e){return(e|0)===e}function Ao(e){var t=e.toString(),n=t.indexOf(`.`);if(n===-1){if(-1<e&&e<1){var r=/e-(\d+)$/.exec(t);if(r)return Number(r[1])}return 0}return t.length-n-1}function jo(e,t,n){var r=Number(e),i=!ko(r),a=!ko(t),o=!ko(n);if(i||a||o){var s=i?Ao(r):0,c=a?Ao(t):0,l=o?Ao(n):0,u=10**Math.max(s,c,l);r*=u,t*=u,n*=u,i&&(r=Math.round(r)),a&&(t=Math.round(t)),o&&(n=Math.round(n))}return(r-t)%n===0}function Mo(e,t,n,r,i,a,o,s){Eo(e,t,n,r,`number`),Do(r),So(e,t,n,r,i,a);var c;if(L(n.min)||n.ngMin){var l=n.min||s(n.ngMin)(e);c=Oo(l),r.$validators.min=function(e,t){return r.$isEmpty(t)||I(c)||t>=c},n.$observe(`min`,function(e){e!==l&&(c=Oo(e),l=e,r.$validate())})}if(L(n.max)||n.ngMax){var u=n.max||s(n.ngMax)(e),d=Oo(u);r.$validators.max=function(e,t){return r.$isEmpty(t)||I(d)||t<=d},n.$observe(`max`,function(e){e!==u&&(d=Oo(e),u=e,r.$validate())})}if(L(n.step)||n.ngStep){var f=n.step||s(n.ngStep)(e),p=Oo(f);r.$validators.step=function(e,t){return r.$isEmpty(t)||I(p)||jo(t,c||0,p)},n.$observe(`step`,function(e){e!==f&&(p=Oo(e),f=e,r.$validate())})}}function No(e,t,n,r,i,a){Eo(e,t,n,r,`range`),Do(r),So(e,t,n,r,i,a);var o=r.$$hasNativeValidators&&t[0].type===`range`,s=o?0:void 0,c=o?100:void 0,l=o?1:void 0,u=t[0].validity,d=L(n.min),f=L(n.max),p=L(n.step),m=r.$render;r.$render=o&&L(u.rangeUnderflow)&&L(u.rangeOverflow)?function(){m(),r.$setViewValue(t.val())}:m,d&&(s=Oo(n.min),r.$validators.min=o?function(){return!0}:function(e,t){return r.$isEmpty(t)||I(s)||t>=s},h(`min`,g)),f&&(c=Oo(n.max),r.$validators.max=o?function(){return!0}:function(e,t){return r.$isEmpty(t)||I(c)||t<=c},h(`max`,_)),p&&(l=Oo(n.step),r.$validators.step=o?function(){return!u.stepMismatch}:function(e,t){return r.$isEmpty(t)||I(l)||jo(t,s||0,l)},h(`step`,v));function h(e,r){t.attr(e,n[e]);var i=n[e];n.$observe(e,function(e){e!==i&&(i=e,r(e))})}function g(e){if(s=Oo(e),!M(r.$modelValue)){if(o){var n=t.val();s>n&&(n=s,t.val(n)),r.$setViewValue(n)}else r.$validate()}}function _(e){if(c=Oo(e),!M(r.$modelValue)){if(o){var n=t.val();c<n&&(t.val(c),n=c<s?s:c),r.$setViewValue(n)}else r.$validate()}}function v(e){l=Oo(e),!M(r.$modelValue)&&(o?r.$viewValue!==t.val()&&r.$setViewValue(t.val()):r.$validate())}}function Po(e,t,n,r,i,a){So(e,t,n,r,i,a),bo(r),r.$validators.url=function(e,t){var n=e||t;return r.$isEmpty(n)||co.test(n)}}function Fo(e,t,n,r,i,a){So(e,t,n,r,i,a),bo(r),r.$validators.email=function(e,t){var n=e||t;return r.$isEmpty(n)||lo.test(n)}}function Io(e,t,n,r){var i=!n.ngTrim||K(n.ngTrim)!==`false`;I(n.name)&&t.attr(`name`,E()),t.on(`change`,function(e){var a;t[0].checked&&(a=n.value,i&&(a=K(a)),r.$setViewValue(a,e&&e.type))}),r.$render=function(){var e=n.value;i&&(e=K(e)),t[0].checked=e===r.$viewValue},n.$observe(`value`,r.$render)}function Lo(e,t,n,r,i){var a;if(L(r)){if(a=e(r),!a.constant)throw hs(`constexpr`,"Expected constant expression for `{0}`, but saw `{1}`.",n,r);return a(t)}return i}function Ro(e,t,n,r,i,a,o,s){var c=Lo(s,e,`ngTrueValue`,n.ngTrueValue,!0),l=Lo(s,e,`ngFalseValue`,n.ngFalseValue,!1);t.on(`change`,function(e){r.$setViewValue(t[0].checked,e&&e.type)}),r.$render=function(){t[0].checked=r.$viewValue},r.$isEmpty=function(e){return e===!1},r.$formatters.push(function(e){return xe(e,c)}),r.$parsers.push(function(e){return e?c:l})}var zo=[`$browser`,`$sniffer`,`$filter`,`$parse`,function(e,t,n,r){return{restrict:`E`,require:[`?ngModel`],link:{pre:function(i,a,o,s){s[0]&&(yo[c(o.type)]||yo.text)(i,a,o,s[0],t,e,n,r)}}}}],Bo=function(){var e={configurable:!0,enumerable:!1,get:function(){return this.getAttribute(`value`)||``},set:function(e){this.setAttribute(`value`,e)}};return{restrict:`E`,priority:200,compile:function(t,n){if(c(n.type)===`hidden`)return{pre:function(t,n,r,i){var a=n[0];a.parentNode&&a.parentNode.insertBefore(a,a.nextSibling),Object.defineProperty&&Object.defineProperty(a,"value",e)}}}}},Vo=/^(true|false|\d+)$/,Ho=function(){function e(e,t,n){var r=L(n)?n:u===9?``:null;e.prop(`value`,r),t.$set(`value`,n)}return{restrict:`A`,priority:100,compile:function(t,n){return Vo.test(n.ngValue)?function(t,n,r){e(n,r,t.$eval(r.ngValue))}:function(t,n,r){t.$watch(r.ngValue,function(t){e(n,r,t)})}}}},Uo=[`$compile`,function(e){return{restrict:`AC`,compile:function(t){return e.$$addBindingClass(t),function(t,n,r){e.$$addBindingInfo(n,r.ngBind),n=n[0],t.$watch(r.ngBind,function(e){n.textContent=it(e)})}}}}],Wo=[`$interpolate`,`$compile`,function(e,t){return{compile:function(n){return t.$$addBindingClass(n),function(n,r,i){var a=e(r.attr(i.$attr.ngBindTemplate));t.$$addBindingInfo(r,a.expressions),r=r[0],i.$observe(`ngBindTemplate`,function(e){r.textContent=I(e)?``:e})}}}}],Go=[`$sce`,`$parse`,`$compile`,function(e,t,n){return{restrict:`A`,compile:function(r,i){var a=t(i.ngBindHtml),o=t(i.ngBindHtml,function(t){return e.valueOf(t)});return n.$$addBindingClass(r),function(t,r,i){n.$$addBindingInfo(r,i.ngBindHtml),t.$watch(o,function(){var n=a(t);r.html(e.getTrustedHtml(n)||``)})}}}}],Ko=F({restrict:`A`,require:`ngModel`,link:function(e,t,n,r){r.$viewChangeListeners.push(function(){e.$eval(n.ngChange)})}});function qo(e,t){e=`ngClass`+e;var n;return[`$parse`,function(o){return{restrict:`AC`,link:function(s,c,l){var u=c.data(`$classCounts`),d=!0,f;u||(u=q(),c.data(`$classCounts`,u)),e!==`ngClass`&&(n||=o(`$index`,function(e){return e&1}),s.$watch(n,_)),s.$watch(o(l[e],a),v);function p(e){e=g(i(e),1),l.$addClass(e)}function m(e){e=g(i(e),-1),l.$removeClass(e)}function h(e,t){var n=i(e),a=i(t),o=r(n,a),s=r(a,n),c=g(o,-1),u=g(s,1);l.$addClass(u),l.$removeClass(c)}function g(e,t){var n=[];return C(e,function(e){(t>0||u[e])&&(u[e]=(u[e]||0)+t,u[e]===+(t>0)&&n.push(e))}),n.join(` `)}function _(e){e===t?p(f):m(f),d=e}function v(e){d===t&&h(f,e),f=e}}}}];function r(e,t){if(!e||!e.length)return[];if(!t||!t.length)return e;var n=[];outer:for(var r=0;r<e.length;r++){for(var i=e[r],a=0;a<t.length;a++)if(i===t[a])continue outer;n.push(i)}return n}function i(e){return e&&e.split(` `)}function a(e){if(!e)return e;var t=e;return U(e)?t=e.map(a).join(` `):R(e)?t=Object.keys(e).filter(function(t){return e[t]}).join(` `):B(e)||(t=e+``),t}}var Jo=qo(``,!0),Yo=qo(`Odd`,0),Xo=qo(`Even`,1),Zo=qa({compile:function(e,t){t.$set(`ngCloak`,void 0),e.removeClass(`ng-cloak`)}}),Qo=[function(){return{restrict:`A`,scope:!0,controller:`@`,priority:500}}],$o={},es={blur:!0,focus:!0};C(`click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste`.split(` `),function(e){var t=or(`ng-`+e);$o[t]=[`$parse`,`$rootScope`,`$exceptionHandler`,function(n,r,i){return ts(n,r,i,t,e,es[e])}]});function ts(e,t,n,r,i,a){return{restrict:`A`,compile:function(o,s){var c=e(s[r]);return function(e,r){r.on(i,function(r){var i=function(){c(e,{$event:r})};if(!t.$$phase)e.$apply(i);else if(a)e.$evalAsync(i);else try{i()}catch(e){n(e)}})}}}}var ns=[`$animate`,`$compile`,function(e,t){return{multiElement:!0,transclude:`element`,priority:600,terminal:!0,restrict:`A`,$$tlb:!0,link:function(n,r,i,a,o){var s,c,l;n.$watch(i.ngIf,function(n){n?c||o(function(n,a){c=a,n[n.length++]=t.$$createComment(`end ngIf`,i.ngIf),s={clone:n},e.enter(n,r.parent(),r)}):(l&&=(l.remove(),null),c&&=(c.$destroy(),null),s&&=(l=rt(s.clone),e.leave(l).done(function(e){e!==!1&&(l=null)}),null))})}}}],rs=[`$templateRequest`,`$anchorScroll`,`$animate`,function(e,t,n){return{restrict:`ECA`,priority:400,terminal:!0,transclude:`element`,controller:y.noop,compile:function(r,i){var a=i.ngInclude||i.src,o=i.onload||``,s=i.autoscroll;return function(r,i,c,l,u){var d=0,f,p,m,h=function(){p&&=(p.remove(),null),f&&=(f.$destroy(),null),m&&=(n.leave(m).done(function(e){e!==!1&&(p=null)}),p=m,null)};r.$watch(a,function(a){var c=function(e){e!==!1&&L(s)&&(!s||r.$eval(s))&&t()},p=++d;a?(e(a,!0).then(function(e){if(!r.$$destroyed&&p===d){var t=r.$new();l.template=e;var s=u(t,function(e){h(),n.enter(e,null,i).done(c)});f=t,m=s,f.$emit(`$includeContentLoaded`,a),r.$eval(o)}},function(){r.$$destroyed||p===d&&(h(),r.$emit(`$includeContentError`,a))}),r.$emit(`$includeContentRequested`,a)):(h(),l.template=null)})}}}}],is=[`$compile`,function(t){return{restrict:`ECA`,priority:-400,require:`ngInclude`,link:function(n,r,i,a){if(g.call(r[0]).match(/SVG/)){r.empty(),t(zt(a.template,e.document).childNodes)(n,function(e){r.append(e)},{futureParentElement:r});return}r.html(a.template),t(r.contents())(n)}}}],as=qa({priority:450,compile:function(){return{pre:function(e,t,n){e.$eval(n.ngInit)}}}}),os=function(){return{restrict:`A`,priority:100,require:`ngModel`,link:function(e,t,n,r){var i=n.ngList||`, `,a=n.ngTrim!==`false`,o=a?K(i):i;r.$parsers.push(function(e){if(!I(e)){var t=[];return e&&C(e.split(o),function(e){e&&t.push(a?K(e):e)}),t}}),r.$formatters.push(function(e){if(U(e))return e.join(i)}),r.$isEmpty=function(e){return!e||!e.length}}}},ss=`ng-valid`,cs=`ng-invalid`,ls=`ng-pristine`,us=`ng-dirty`,ds=`ng-untouched`,fs=`ng-touched`,ps=`ng-empty`,ms=`ng-not-empty`,hs=i(`ngModel`);gs.$inject=[`$scope`,`$exceptionHandler`,`$attrs`,`$element`,`$parse`,`$animate`,`$timeout`,`$q`,`$interpolate`];function gs(e,t,n,r,i,a,o,s,c){this.$viewValue=NaN,this.$modelValue=NaN,this.$$rawModelValue=void 0,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=void 0,this.$name=c(n.name||``,!1)(e),this.$$parentForm=Xa,this.$options=ys,this.$$updateEvents=``,this.$$updateEventHandler=this.$$updateEventHandler.bind(this),this.$$parsedNgModel=i(n.ngModel),this.$$parsedNgModelAssign=this.$$parsedNgModel.assign,this.$$ngModelGet=this.$$parsedNgModel,this.$$ngModelSet=this.$$parsedNgModelAssign,this.$$pendingDebounce=null,this.$$parserValid=void 0,this.$$parserName=`parse`,this.$$currentValidationRunId=0,this.$$scope=e,this.$$rootScope=e.$root,this.$$attr=n,this.$$element=r,this.$$animate=a,this.$$timeout=o,this.$$parse=i,this.$$q=s,this.$$exceptionHandler=t,io(this),_s(this)}gs.prototype={$$initGetterSetters:function(){if(this.$options.getOption(`getterSetter`)){var e=this.$$parse(this.$$attr.ngModel+`()`),t=this.$$parse(this.$$attr.ngModel+`($$$p)`);this.$$ngModelGet=function(t){var n=this.$$parsedNgModel(t);return W(n)&&(n=e(t)),n},this.$$ngModelSet=function(e,n){W(this.$$parsedNgModel(e))?t(e,{$$$p:n}):this.$$parsedNgModelAssign(e,n)}}else if(!this.$$parsedNgModel.assign)throw hs(`nonassign`,`Expression '{0}' is non-assignable. Element: {1}`,this.$$attr.ngModel,Pe(this.$$element))},$render:P,$isEmpty:function(e){return I(e)||e===``||e===null||e!==e},$$updateEmptyClasses:function(e){this.$isEmpty(e)?(this.$$animate.removeClass(this.$$element,ms),this.$$animate.addClass(this.$$element,ps)):(this.$$animate.removeClass(this.$$element,ps),this.$$animate.addClass(this.$$element,ms))},$setPristine:function(){this.$dirty=!1,this.$pristine=!0,this.$$animate.removeClass(this.$$element,us),this.$$animate.addClass(this.$$element,ls)},$setDirty:function(){this.$dirty=!0,this.$pristine=!1,this.$$animate.removeClass(this.$$element,ls),this.$$animate.addClass(this.$$element,us),this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1,this.$untouched=!0,this.$$animate.setClass(this.$$element,ds,fs)},$setTouched:function(){this.$touched=!0,this.$untouched=!1,this.$$animate.setClass(this.$$element,fs,ds)},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce),this.$viewValue=this.$$lastCommittedViewValue,this.$render()},$validate:function(){if(!M(this.$modelValue)){var e=this.$$lastCommittedViewValue,t=this.$$rawModelValue,n=this.$valid,r=this.$modelValue,i=this.$options.getOption(`allowInvalid`),a=this;this.$$runValidators(t,e,function(e){!i&&n!==e&&(a.$modelValue=e?t:void 0,a.$modelValue!==r&&a.$$writeModelToScope())})}},$$runValidators:function(e,t,n){this.$$currentValidationRunId++;var r=this.$$currentValidationRunId,i=this;if(!a()){l(!1);return}if(!o()){l(!1);return}s();function a(){var e=i.$$parserName;if(I(i.$$parserValid))c(e,null);else return i.$$parserValid||(C(i.$validators,function(e,t){c(t,null)}),C(i.$asyncValidators,function(e,t){c(t,null)})),c(e,i.$$parserValid),i.$$parserValid;return!0}function o(){var n=!0;return C(i.$validators,function(r,i){var a=!!r(e,t);n&&=a,c(i,a)}),n?!0:(C(i.$asyncValidators,function(e,t){c(t,null)}),!1)}function s(){var n=[],r=!0;C(i.$asyncValidators,function(i,a){var o=i(e,t);if(!ue(o))throw hs(`nopromise`,`Expected asynchronous validator to return a promise but got '{0}' instead.`,o);c(a,void 0),n.push(o.then(function(){c(a,!0)},function(){r=!1,c(a,!1)}))}),n.length?i.$$q.all(n).then(function(){l(r)},P):l(!0)}function c(e,t){r===i.$$currentValidationRunId&&i.$setValidity(e,t)}function l(e){r===i.$$currentValidationRunId&&n(e)}},$commitViewValue:function(){var e=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce),!(this.$$lastCommittedViewValue===e&&(e!==``||!this.$$hasNativeValidators))&&(this.$$updateEmptyClasses(e),this.$$lastCommittedViewValue=e,this.$pristine&&this.$setDirty(),this.$$parseAndValidate())},$$parseAndValidate:function(){var e=this.$$lastCommittedViewValue,t=this;if(this.$$parserValid=!I(e)||void 0,this.$setValidity(this.$$parserName,null),this.$$parserName=`parse`,this.$$parserValid){for(var n=0;n<this.$parsers.length;n++)if(e=this.$parsers[n](e),I(e)){this.$$parserValid=!1;break}}M(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var r=this.$modelValue,i=this.$options.getOption(`allowInvalid`);this.$$rawModelValue=e,i&&(this.$modelValue=e,a()),this.$$runValidators(e,this.$$lastCommittedViewValue,function(n){i||(t.$modelValue=n?e:void 0,a())});function a(){t.$modelValue!==r&&t.$$writeModelToScope()}},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue),C(this.$viewChangeListeners,function(e){try{e()}catch(e){this.$$exceptionHandler(e)}},this)},$setViewValue:function(e,t){this.$viewValue=e,this.$options.getOption(`updateOnDefault`)&&this.$$debounceViewValueCommit(t)},$$debounceViewValueCommit:function(e){var t=this.$options.getOption(`debounce`);V(t[e])?t=t[e]:V(t.default)&&this.$options.getOption(`updateOn`).indexOf(e)===-1?t=t.default:V(t[`*`])&&(t=t[`*`]),this.$$timeout.cancel(this.$$pendingDebounce);var n=this;t>0?this.$$pendingDebounce=this.$$timeout(function(){n.$commitViewValue()},t):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){n.$commitViewValue()})},$overrideModelOptions:function(e){this.$options=this.$options.createChild(e),this.$$setUpdateOnEvents()},$processModelValue:function(){var e=this.$$format();this.$viewValue!==e&&(this.$$updateEmptyClasses(e),this.$viewValue=this.$$lastCommittedViewValue=e,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,P))},$$format:function(){for(var e=this.$formatters,t=e.length,n=this.$modelValue;t--;)n=e[t](n);return n},$$setModelValue:function(e){this.$modelValue=this.$$rawModelValue=e,this.$$parserValid=void 0,this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler),this.$$updateEvents=this.$options.getOption(`updateOn`),this.$$updateEvents&&this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(e){this.$$debounceViewValueCommit(e&&e.type)}};function _s(e){e.$$scope.$watch(function(t){var n=e.$$ngModelGet(t);return n!==e.$modelValue&&(e.$modelValue===e.$modelValue||n===n)&&e.$$setModelValue(n),n})}ao({clazz:gs,set:function(e,t){e[t]=!0},unset:function(e,t){delete e[t]}});var vs=[`$rootScope`,function(e){return{restrict:`A`,require:[`ngModel`,`^?form`,`^?ngModelOptions`],controller:gs,priority:1,compile:function(t){return t.addClass(ls).addClass(ds).addClass(ss),{pre:function(e,t,n,r){var i=r[0],a=r[1]||i.$$parentForm,o=r[2];o&&(i.$options=o.$options),i.$$initGetterSetters(),a.$addControl(i),n.$observe(`name`,function(e){i.$name!==e&&i.$$parentForm.$$renameControl(i,e)}),e.$on(`$destroy`,function(){i.$$parentForm.$removeControl(i)})},post:function(t,n,r,i){var a=i[0];a.$$setUpdateOnEvents();function o(){a.$setTouched()}n.on(`blur`,function(){a.$touched||(e.$$phase?t.$evalAsync(o):t.$apply(o))})}}}}}],ys,bs=/(\s+|^)default(\s+|$)/;function xs(e){this.$$options=e}xs.prototype={getOption:function(e){return this.$$options[e]},createChild:function(e){var t=!1;return e=k({},e),C(e,function(n,r){n===`$inherit`?r===`*`?t=!0:(e[r]=this.$$options[r],r===`updateOn`&&(e.updateOnDefault=this.$$options.updateOnDefault)):r===`updateOn`&&(e.updateOnDefault=!1,e[r]=K(n.replace(bs,function(){return e.updateOnDefault=!0,` `})))},this),t&&(delete e[`*`],Cs(e,this.$$options)),Cs(e,ys.$$options),new xs(e)}},ys=new xs({updateOn:``,updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var Ss=function(){e.$inject=[`$attrs`,`$scope`];function e(e,t){this.$$attrs=e,this.$$scope=t}return e.prototype={$onInit:function(){var e=this.parentCtrl?this.parentCtrl.$options:ys,t=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=e.createChild(t)}},{restrict:`A`,priority:10,require:{parentCtrl:`?^^ngModelOptions`},bindToController:!0,controller:e}};function Cs(e,t){C(t,function(t,n){L(e[n])||(e[n]=t)})}var ws=qa({terminal:!0,priority:1e3}),Ts=i(`ngOptions`),Es=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ds=[`$compile`,`$document`,`$parse`,function(t,n,r){function i(e,t,n){var i=e.match(Es);if(!i)throw Ts(`iexp`,`Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}`,e,Pe(t));var a=i[5]||i[7],o=i[6],s=/ as /.test(i[0])&&i[1],c=i[9],l=r(i[2]?i[1]:a),u=s&&r(s)||l,d=c&&r(c),f=c?function(e,t){return d(n,t)}:function(e){return vn(e)},p=function(e,t){return f(e,y(e,t))},m=r(i[2]||i[1]),h=r(i[3]||``),g=r(i[4]||``),_=r(i[8]),v={},y=o?function(e,t){return v[o]=t,v[a]=e,v}:function(e){return v[a]=e,v};function b(e,t,n,r,i){this.selectValue=e,this.viewValue=t,this.label=n,this.group=r,this.disabled=i}function x(e){var t;if(!o&&S(e))t=e;else for(var n in t=[],e)e.hasOwnProperty(n)&&n.charAt(0)!==`$`&&t.push(n);return t}return{trackBy:c,getTrackByValue:p,getWatchables:r(_,function(e){var t=[];e||=[];for(var r=x(e),a=r.length,o=0;o<a;o++){var s=e===r?o:r[o],c=e[s],l=y(c,s),u=f(c,l);if(t.push(u),i[2]||i[1]){var d=m(n,l);t.push(d)}if(i[4]){var p=g(n,l);t.push(p)}}return t}),getOptions:function(){for(var e=[],t={},r=_(n)||[],i=x(r),a=i.length,o=0;o<a;o++){var s=r===i?o:i[o],l=r[s],d=y(l,s),v=u(n,d),S=f(v,d),C=new b(S,v,m(n,d),h(n,d),g(n,d));e.push(C),t[S]=C}return{items:e,selectValueMap:t,getOptionFromViewValue:function(e){return t[p(e)]},getViewValueFromOption:function(e){return c?ye(e.viewValue):e.viewValue}}}}}var a=e.document.createElement(`option`),o=e.document.createElement(`optgroup`);function s(e,r,s,c){for(var l=c[0],u=c[1],f=s.multiple,p=0,m=r.children(),h=m.length;p<h;p++)if(m[p].value===``){l.hasEmptyOption=!0,l.emptyOption=m.eq(p);break}r.empty();var g=!!l.emptyOption;d(a.cloneNode(!1)).val(`?`);var _,v=i(s.ngOptions,r,e),y=n[0].createDocumentFragment();l.generateUnknownOptionValue=function(e){return`?`},f?(l.writeValue=function(e){if(_){var t=e&&e.map(x)||[];_.items.forEach(function(e){e.element.selected&&!_e(t,e)&&(e.element.selected=!1)})}},l.readValue=function(){var e=r.val()||[],t=[];return C(e,function(e){var n=_.selectValueMap[e];n&&!n.disabled&&t.push(_.getViewValueFromOption(n))}),t},v.trackBy&&e.$watchCollection(function(){if(U(u.$viewValue))return u.$viewValue.map(function(e){return v.getTrackByValue(e)})},function(){u.$render()})):(l.writeValue=function(e){if(_){var t=r[0].options[r[0].selectedIndex],n=_.getOptionFromViewValue(e);t&&t.removeAttribute(`selected`),n?(r[0].value!==n.selectValue&&(l.removeUnknownOption(),r[0].value=n.selectValue,n.element.selected=!0),n.element.setAttribute(`selected`,`selected`)):l.selectUnknownOrEmptyOption(e)}},l.readValue=function(){var e=_.selectValueMap[r.val()];return e&&!e.disabled?(l.unselectEmptyOption(),l.removeUnknownOption(),_.getViewValueFromOption(e)):null},v.trackBy&&e.$watch(function(){return v.getTrackByValue(u.$viewValue)},function(){u.$render()})),g&&(t(l.emptyOption)(e),r.prepend(l.emptyOption),l.emptyOption[0].nodeType===ct?(l.hasEmptyOption=!1,l.registerOption=function(e,t){t.val()===``&&(l.hasEmptyOption=!0,l.emptyOption=t,l.emptyOption.removeClass(`ng-scope`),u.$render(),t.on(`$destroy`,function(){var e=l.$isEmptyOptionSelected();l.hasEmptyOption=!1,l.emptyOption=void 0,e&&u.$render()}))}):l.emptyOption.removeClass(`ng-scope`)),e.$watchCollection(v.getWatchables,w);function b(e,t){var n=a.cloneNode(!1);t.appendChild(n),S(e,n)}function x(e){var t=_.getOptionFromViewValue(e),n=t&&t.element;return n&&!n.selected&&(n.selected=!0),t}function S(e,t){e.element=t,t.disabled=e.disabled,e.label!==t.label&&(t.label=e.label,t.textContent=e.label),t.value=e.selectValue}function w(){var e=_&&l.readValue();if(_)for(var t=_.items.length-1;t>=0;t--){var n=_.items[t];L(n.group)?an(n.element.parentNode):an(n.element)}_=v.getOptions();var i={};if(_.items.forEach(function(e){var t;L(e.group)?(t=i[e.group],t||(t=o.cloneNode(!1),y.appendChild(t),t.label=e.group===null?`null`:e.group,i[e.group]=t),b(e,t)):b(e,y)}),r[0].appendChild(y),u.$render(),!u.$isEmpty(e)){var a=l.readValue();(v.trackBy||f?!xe(e,a):e!==a)&&(u.$setViewValue(a),u.$render())}}}return{restrict:`A`,terminal:!0,require:[`select`,`ngModel`],link:{pre:function(e,t,n,r){r[0].registerOption=P},post:s}}}],Os=[`$locale`,`$interpolate`,`$log`,function(e,t,n){var r=/{}/g,i=/^when(Minus)?(.+)$/;return{link:function(a,o,s){var l=s.count,u=s.$attr.when&&o.attr(s.$attr.when),d=s.offset||0,f=a.$eval(u)||{},p={},m=t.startSymbol(),h=t.endSymbol(),g=m+l+`-`+d+h,_=y.noop,v;C(s,function(e,t){var n=i.exec(t);if(n){var r=(n[1]?`-`:``)+c(n[2]);f[r]=o.attr(s.$attr[t])}}),C(f,function(e,n){p[n]=t(e.replace(r,g))}),a.$watch(l,function(t){var r=parseFloat(t),i=M(r);if(!i&&!(r in f)&&(r=e.pluralCat(r-d)),r!==v&&!(i&&M(v))){_();var o=p[r];I(o)?(t!=null&&n.debug(`ngPluralize: no rule defined for '`+r+`' in `+u),_=P,b()):_=a.$watch(o,b),v=r}});function b(e){o.text(e||``)}}}}],ks=i(`ngRef`),As=[`$parse`,function(e){return{priority:-1,restrict:`A`,compile:function(t,n){var r=or(ge(t)),i=e(n.ngRef),a=i.assign||function(){throw ks(`nonassign`,`Expression in ngRef="{0}" is non-assignable!`,n.ngRef)};return function(e,t,o){var s;if(o.hasOwnProperty(`ngRefRead`)){if(o.ngRefRead===`$element`)s=t;else if(s=t.data(`$`+o.ngRefRead+`Controller`),!s)throw ks(`noctrl`,`The controller for ngRefRead="{0}" could not be found on ngRef="{1}"`,o.ngRefRead,n.ngRef)}else s=t.data(`$`+r+`Controller`);s||=t,a(e,s),t.on(`$destroy`,function(){i(e)===s&&a(e,null)})}}}}],js=[`$parse`,`$animate`,`$compile`,function(e,t,n){var r=`$$NG_REMOVED`,a=i(`ngRepeat`),o=function(e,t,n,r,i,a,o){e[n]=r,i&&(e[i]=a),e.$index=t,e.$first=t===0,e.$last=t===o-1,e.$middle=!(e.$first||e.$last),e.$odd=!(e.$even=!(t&1))},c=function(e){return e.clone[0]},l=function(e){return e.clone[e.clone.length-1]},u=function(e,t,n){return vn(n)},d=function(e,t){return t};return{restrict:`A`,multiElement:!0,transclude:`element`,priority:1e3,terminal:!0,$$tlb:!0,compile:function(i,f){var p=f.ngRepeat,m=n.$$createComment(`end ngRepeat`,p),h=p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!h)throw a(`iexp`,`Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.`,p);var g=h[1],_=h[2],v=h[3],y=h[4];if(h=g.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/),!h)throw a(`iidexp`,`'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.`,g);var b=h[3]||h[1],x=h[2];if(v&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(v)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(v)))throw a(`badident`,`alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.`,v);var w;if(y){var T={$id:vn},E=e(y);w=function(e,t,n,r){return x&&(T[x]=t),T[b]=n,T.$index=r,E(e,T)}}return function(e,n,i,f,h){var g=q();e.$watchCollection(_,function(i){var f,_,y=n[0],E,D=q(),O,k,A,j,M,N,P,ee,F;if(v&&(e[v]=i),S(i))N=i,M=w||u;else for(var te in M=w||d,N=[],i)s.call(i,te)&&te.charAt(0)!==`$`&&N.push(te);for(O=N.length,ee=Array(O),f=0;f<O;f++)if(k=i===N?f:N[f],A=i[k],j=M(e,k,A,f),g[j])P=g[j],delete g[j],D[j]=P,ee[f]=P;else if(D[j])throw C(ee,function(e){e&&e.scope&&(g[e.id]=e)}),a(`dupes`,`Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}`,p,j,A);else ee[f]={id:j,scope:void 0,clone:void 0},D[j]=!0;for(var I in T&&(T[b]=void 0),g){if(P=g[I],F=rt(P.clone),t.leave(F),F[0].parentNode)for(f=0,_=F.length;f<_;f++)F[f][r]=!0;P.scope.$destroy()}for(f=0;f<O;f++)if(k=i===N?f:N[f],A=i[k],P=ee[f],P.scope){E=y;do E=E.nextSibling;while(E&&E[r]);c(P)!==E&&t.move(rt(P.clone),null,y),y=l(P),o(P.scope,f,b,A,x,k,O)}else h(function(e,n){P.scope=n;var r=m.cloneNode(!1);e[e.length++]=r,t.enter(e,null,y),y=r,P.clone=e,D[P.id]=P,o(P.scope,f,b,A,x,k,O)});g=D})}}}}],Ms=`ng-hide`,Ns=`ng-hide-animate`,Ps=[`$animate`,function(e){return{restrict:`A`,multiElement:!0,link:function(t,n,r){t.$watch(r.ngShow,function(t){e[t?`removeClass`:`addClass`](n,Ms,{tempClasses:Ns})})}}}],Fs=[`$animate`,function(e){return{restrict:`A`,multiElement:!0,link:function(t,n,r){t.$watch(r.ngHide,function(t){e[t?`addClass`:`removeClass`](n,Ms,{tempClasses:Ns})})}}}],Is=qa(function(e,t,n){e.$watchCollection(n.ngStyle,function(e,n){n&&e!==n&&C(n,function(e,n){t.css(n,``)}),e&&t.css(e)})}),Ls=[`$animate`,`$compile`,function(e,t){return{require:`ngSwitch`,controller:[`$scope`,function(){this.cases={}}],link:function(n,r,i,a){var o=i.ngSwitch||i.on,s=[],c=[],l=[],u=[],d=function(e,t){return function(n){n!==!1&&e.splice(t,1)}};n.$watch(o,function(n){for(var r,i;l.length;)e.cancel(l.pop());for(r=0,i=u.length;r<i;++r){var o=rt(c[r].clone);u[r].$destroy(),(l[r]=e.leave(o)).done(d(l,r))}c.length=0,u.length=0,(s=a.cases[`!`+n]||a.cases[`?`])&&C(s,function(n){n.transclude(function(r,i){u.push(i);var a=n.element;r[r.length++]=t.$$createComment(`end ngSwitchWhen`);var o={clone:r};c.push(o),e.enter(r,a.parent(),a)})})})}}}],Rs=qa({transclude:`element`,priority:1200,require:`^ngSwitch`,multiElement:!0,link:function(e,t,n,r,i){C(n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function(e,t,n){return n[t-1]!==e}),function(e){r.cases[`!`+e]=r.cases[`!`+e]||[],r.cases[`!`+e].push({transclude:i,element:t})})}}),zs=qa({transclude:`element`,priority:1200,require:`^ngSwitch`,multiElement:!0,link:function(e,t,n,r,i){r.cases[`?`]=r.cases[`?`]||[],r.cases[`?`].push({transclude:i,element:t})}}),Bs=i(`ngTransclude`),Vs=[`$compile`,function(e){return{restrict:`EAC`,compile:function(t){var n=e(t.contents());return t.empty(),function(e,t,r,i,a){if(!a)throw Bs(`orphan`,`Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}`,Pe(t));r.ngTransclude===r.$attr.ngTransclude&&(r.ngTransclude=``);var o=r.ngTransclude||r.ngTranscludeSlot;a(s,null,o),o&&!a.isSlotFilled(o)&&c();function s(e,n){e.length&&l(e)?t.append(e):(c(),n.$destroy())}function c(){n(e,function(e){t.append(e)})}function l(e){for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r.nodeType!==st||r.nodeValue.trim())return!0}}}}}}],Hs=[`$templateCache`,function(e){return{restrict:`E`,terminal:!0,compile:function(t,n){if(n.type===`text/ng-template`){var r=n.id,i=t[0].text;e.put(r,i)}}}}],Us={$setViewValue:P,$render:P};function Ws(e,t){e.prop(`selected`,t),e.attr(`selected`,t)}var Gs=[`$element`,`$scope`,function(t,n){var r=this,i=new xn;r.selectValueMap={},r.ngModelCtrl=Us,r.multiple=!1,r.unknownOption=d(e.document.createElement(`option`)),r.hasEmptyOption=!1,r.emptyOption=void 0,r.renderUnknownOption=function(e){var n=r.generateUnknownOptionValue(e);r.unknownOption.val(n),t.prepend(r.unknownOption),Ws(r.unknownOption,!0),t.val(n)},r.updateUnknownOption=function(e){var n=r.generateUnknownOptionValue(e);r.unknownOption.val(n),Ws(r.unknownOption,!0),t.val(n)},r.generateUnknownOptionValue=function(e){return`? `+vn(e)+` ?`},r.removeUnknownOption=function(){r.unknownOption.parent()&&r.unknownOption.remove()},r.selectEmptyOption=function(){r.emptyOption&&(t.val(``),Ws(r.emptyOption,!0))},r.unselectEmptyOption=function(){r.hasEmptyOption&&Ws(r.emptyOption,!1)},n.$on(`$destroy`,function(){r.renderUnknownOption=P}),r.readValue=function(){var e=t.val(),n=e in r.selectValueMap?r.selectValueMap[e]:e;return r.hasOption(n)?n:null},r.writeValue=function(e){var n=t[0].options[t[0].selectedIndex];if(n&&Ws(d(n),!1),r.hasOption(e)){r.removeUnknownOption();var i=vn(e);t.val(i in r.selectValueMap?i:e);var a=t[0].options[t[0].selectedIndex];Ws(d(a),!0)}else r.selectUnknownOrEmptyOption(e)},r.addOption=function(e,t){if(t[0].nodeType!==ct){tt(e,`"option value"`),e===``&&(r.hasEmptyOption=!0,r.emptyOption=t);var n=i.get(e)||0;i.set(e,n+1),o()}},r.removeOption=function(e){var t=i.get(e);t&&(t===1?(i.delete(e),e===``&&(r.hasEmptyOption=!1,r.emptyOption=void 0)):i.set(e,t-1))},r.hasOption=function(e){return!!i.get(e)},r.$hasEmptyOption=function(){return r.hasEmptyOption},r.$isUnknownOptionSelected=function(){return t[0].options[0]===r.unknownOption[0]},r.$isEmptyOptionSelected=function(){return r.hasEmptyOption&&t[0].options[t[0].selectedIndex]===r.emptyOption[0]},r.selectUnknownOrEmptyOption=function(e){e==null&&r.emptyOption?(r.removeUnknownOption(),r.selectEmptyOption()):r.unknownOption.parent().length?r.updateUnknownOption(e):r.renderUnknownOption(e)};var a=!1;function o(){a||(a=!0,n.$$postDigest(function(){a=!1,r.ngModelCtrl.$render()}))}var s=!1;function c(e){s||(s=!0,n.$$postDigest(function(){n.$$destroyed||(s=!1,r.ngModelCtrl.$setViewValue(r.readValue()),e&&r.ngModelCtrl.$render())}))}r.registerOption=function(e,t,n,i,a){if(n.$attr.ngValue){var s,l;n.$observe(`value`,function(e){var n,i=t.prop(`selected`);L(l)&&(r.removeOption(s),delete r.selectValueMap[l],n=!0),l=vn(e),s=e,r.selectValueMap[l]=e,r.addOption(e,t),t.attr(`value`,l),n&&i&&c()})}else i?n.$observe(`value`,function(e){r.readValue();var n,i=t.prop(`selected`);L(s)&&(r.removeOption(s),n=!0),s=e,r.addOption(e,t),n&&i&&c()}):a?e.$watch(a,function(e,i){n.$set(`value`,e);var a=t.prop(`selected`);i!==e&&r.removeOption(i),r.addOption(e,t),i&&a&&c()}):r.addOption(n.value,t);n.$observe(`disabled`,function(e){(e===`true`||e&&t.prop(`selected`))&&(r.multiple?c(!0):(r.ngModelCtrl.$setViewValue(null),r.ngModelCtrl.$render()))}),t.on(`$destroy`,function(){var e=r.readValue(),t=n.value;r.removeOption(t),o(),(r.multiple&&e&&e.indexOf(t)!==-1||e===t)&&c(!0)})}}],Ks=function(){return{restrict:`E`,require:[`select`,`?ngModel`],controller:Gs,priority:1,link:{pre:e,post:t}};function e(e,t,n,r){var i=r[0],a=r[1];if(!a){i.registerOption=P;return}if(i.ngModelCtrl=a,t.on(`change`,function(){i.removeUnknownOption(),e.$apply(function(){a.$setViewValue(i.readValue())})}),n.multiple){i.multiple=!0,i.readValue=function(){var e=[];return C(t.find(`option`),function(t){if(t.selected&&!t.disabled){var n=t.value;e.push(n in i.selectValueMap?i.selectValueMap[n]:n)}}),e},i.writeValue=function(e){C(t.find(`option`),function(t){var n=!!e&&(_e(e,t.value)||_e(e,i.selectValueMap[t.value]));n!==t.selected&&Ws(d(t),n)})};var o,s=NaN;e.$watch(function(){s===a.$viewValue&&!xe(o,a.$viewValue)&&(o=ft(a.$viewValue),a.$render()),s=a.$viewValue}),a.$isEmpty=function(e){return!e||e.length===0}}}function t(e,t,n,r){var i=r[1];if(i){var a=r[0];i.$render=function(){a.writeValue(i.$viewValue)}}}},qs=[`$interpolate`,function(e){return{restrict:`E`,priority:100,compile:function(t,n){var r,i;return L(n.ngValue)||(L(n.value)?r=e(n.value,!0):(i=e(t.text(),!0),i||n.$set(`value`,t.text()))),function(e,t,n){var a=`$selectController`,o=t.parent(),s=o.data(a)||o.parent().data(a);s&&s.registerOption(e,t,n,r,i)}}}}],Js=[`$parse`,function(e){return{restrict:`A`,require:`?ngModel`,link:function(t,n,r,i){if(i){var a=r.hasOwnProperty(`required`)||e(r.ngRequired)(t);r.ngRequired||(r.required=!0),i.$validators.required=function(e,t){return!a||!i.$isEmpty(t)},r.$observe(`required`,function(e){a!==e&&(a=e,i.$validate())})}}}}],Ys=[`$parse`,function(e){return{restrict:`A`,require:`?ngModel`,compile:function(t,n){var r,i;return n.ngPattern&&(r=n.ngPattern,i=n.ngPattern.charAt(0)===`/`&&a.test(n.ngPattern)?function(){return n.ngPattern}:e(n.ngPattern)),function(e,t,n,a){if(a){var o=n.pattern;n.ngPattern?o=i(e):r=n.pattern;var s=Qs(o,r,t);n.$observe(`pattern`,function(e){var n=s;s=Qs(e,r,t),(n&&n.toString())!==(s&&s.toString())&&a.$validate()}),a.$validators.pattern=function(e,t){return a.$isEmpty(t)||I(s)||s.test(t)}}}}}}],Xs=[`$parse`,function(e){return{restrict:`A`,require:`?ngModel`,link:function(t,n,r,i){if(i){var a=r.maxlength||e(r.ngMaxlength)(t),o=$s(a);r.$observe(`maxlength`,function(e){a!==e&&(o=$s(e),a=e,i.$validate())}),i.$validators.maxlength=function(e,t){return o<0||i.$isEmpty(t)||t.length<=o}}}}}],Zs=[`$parse`,function(e){return{restrict:`A`,require:`?ngModel`,link:function(t,n,r,i){if(i){var a=r.minlength||e(r.ngMinlength)(t),o=$s(a)||-1;r.$observe(`minlength`,function(e){a!==e&&(o=$s(e)||-1,a=e,i.$validate())}),i.$validators.minlength=function(e,t){return i.$isEmpty(t)||t.length>=o}}}}}];function Qs(e,t,n){if(e){if(B(e)&&(e=RegExp(`^`+e+`$`)),!e.test)throw i(`ngPattern`)(`noregexp`,`Expected {0} to be a RegExp but was {1}. Element: {2}`,t,e,Pe(n));return e}}function $s(e){var t=j(e);return M(t)?-1:t}if(e.angular.bootstrap){e.console&&console.log(`WARNING: Tried to load AngularJS more than once.`);return}Ze(),gt(y),y.module(`ngLocale`,[],[`$provide`,function(e){var t={ZERO:`zero`,ONE:`one`,TWO:`two`,FEW:`few`,MANY:`many`,OTHER:`other`};function n(e){e+=``;var t=e.indexOf(`.`);return t==-1?0:e.length-t-1}function r(e,t){var r=t;r===void 0&&(r=Math.min(n(e),3));var i=10**r,a=(e*i|0)%i;return{v:r,f:a}}e.value(`$locale`,{DATETIME_FORMATS:{AMPMS:[`AM`,`PM`],DAY:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],ERANAMES:[`Before Christ`,`Anno Domini`],ERAS:[`BC`,`AD`],FIRSTDAYOFWEEK:6,MONTH:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],SHORTDAY:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],SHORTMONTH:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],STANDALONEMONTH:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],WEEKENDRANGE:[5,6],fullDate:`EEEE, MMMM d, y`,longDate:`MMMM d, y`,medium:`MMM d, y h:mm:ss a`,mediumDate:`MMM d, y`,mediumTime:`h:mm:ss a`,short:`M/d/yy h:mm a`,shortDate:`M/d/yy`,shortTime:`h:mm a`},NUMBER_FORMATS:{CURRENCY_SYM:`$`,DECIMAL_SEP:`.`,GROUP_SEP:`,`,PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:`-`,negSuf:``,posPre:``,posSuf:``},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:`-¤`,negSuf:``,posPre:`¤`,posSuf:``}]},id:`en-us`,localeID:`en_US`,pluralCat:function(e,n){var i=e|0,a=r(e,n);return i==1&&a.v==0?t.ONE:t.OTHER}})}]),d(function(){We(e.document,Ge)})})(window),!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend(window.angular.element(`<style>`).text(`@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}`))})),u=o(((e,t)=>{l(),t.exports=angular}));c(u()).default.module(`docs.templates`,[]).run([`$templateCache`,function(e){e.put(`src/app/shared/components/page-outline/page-outline.component.html`,`<aside class="position-sticky top-0 px-4 py-4">
    <nav ngb-scroll-spy-menu aria-label="On this page">
        <h2 class="small fw-semibold text-body-secondary mb-2">On this page</h2>

        <div class="nav nav-underline flex-column align-items-start">
            <button
                class="nav-link rounded-0 px-0 py-1 text-start small"
                type="button"
                ng-repeat="section in $.sections track by section.id"
                ngb-scroll-spy-item="{{ section.id }}">
                {{ section.name }}
            </button>
        </div>
    </nav>

    <div ng-if="$.bootstrapHref || $.ngBootstrapHref">
        <hr class="my-3">

        <h2 class="small fw-semibold text-body-secondary mb-2">Official references</h2>

        <nav class="nav flex-column" aria-label="Related documentation">
            <a
                class="nav-link d-flex align-items-center gap-2 px-0 py-1 small"
                ng-if="$.bootstrapHref"
                ng-href="{{ $.bootstrapHref }}"
                target="_blank"
                rel="noopener noreferrer">
                <span>Bootstrap documentation</span>
                <i class="bi bi-box-arrow-up-right small" aria-hidden="true"></i>
            </a>

            <a
                class="nav-link d-flex align-items-center gap-2 px-0 py-1 small"
                ng-if="$.ngBootstrapHref"
                ng-href="{{ $.ngBootstrapHref }}"
                target="_blank"
                rel="noopener noreferrer">
                <span>ng-bootstrap documentation</span>
                <i class="bi bi-box-arrow-up-right small" aria-hidden="true"></i>
            </a>
        </nav>
    </div>
</aside>
`),e.put(`src/app/shared/components/example-section/example-section.component.html`,`<section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="{{ example.fragment }}">
    <header class="d-flex align-items-start justify-content-between gap-3 mb-4">
        <div>
            <h2 class="h3 mb-2">{{ example.title }}</h2>
            <p class="text-body-secondary mb-0">{{ example.description }}</p>
        </div>

        <button
            type="button"
            class="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2 flex-shrink-0"
            ng-click="example.toggleCode()"
            ng-attr-aria-expanded="{{ !example.codeCollapsed }}"
            ng-attr-aria-controls="{{ example.fragment }}-code">
            <i class="bi bi-code-slash" aria-hidden="true"></i>
            <span>{{ example.codeCollapsed ? 'View code' : 'Hide code' }}</span>
        </button>
    </header>

    <ng-content></ng-content>

    <div
        class="mt-4"
        ngb-collapse="example.codeCollapsed"
        ng-attr-id="{{ example.fragment }}-code">
        <div class="border rounded-3 overflow-hidden">
            <div ng-if="!example.hasAdditionalCode">
                <div class="d-flex align-items-center justify-content-between bg-body-tertiary border-bottom ps-3 pe-2 py-1">
                    <span class="small fw-semibold">HTML</span>
                    <docs-copy-button
                        value="example.htmlCode"
                        button-class="text-body-secondary"
                        aria-label="Copy HTML code">
                    </docs-copy-button>
                </div>
                <pre class="bg-body-tertiary m-0 p-3 overflow-auto"><code ng-bind="example.htmlCode"></code></pre>
            </div>

            <div ng-if="example.hasAdditionalCode">
                <div class="d-flex align-items-end justify-content-between bg-body-tertiary border-bottom pe-2">
                    <ul
                        class="nav nav-tabs border-bottom-0 px-3 pt-2"
                        ngb-nav
                        active-id="example.activeTab"
                        animation="false"
                        ng-ref="example.codeNav"
                        ng-ref-read="ngbNav">
                        <li ngb-nav-item="html">
                            <button type="button" ngb-nav-link>HTML</button>
                            <ng-template ngb-nav-content>
                                <pre class="bg-body-tertiary m-0 p-3 overflow-auto"><code ng-bind="example.htmlCode"></code></pre>
                            </ng-template>
                        </li>
                        <li ng-if="example.tsCode" ngb-nav-item="typescript">
                            <button type="button" ngb-nav-link>TypeScript</button>
                            <ng-template ngb-nav-content>
                                <pre class="bg-body-tertiary m-0 p-3 overflow-auto"><code ng-bind="example.tsCode"></code></pre>
                            </ng-template>
                        </li>
                        <li ng-if="example.cssCode" ngb-nav-item="css">
                            <button type="button" ngb-nav-link>CSS</button>
                            <ng-template ngb-nav-content>
                                <pre class="bg-body-tertiary m-0 p-3 overflow-auto"><code ng-bind="example.cssCode"></code></pre>
                            </ng-template>
                        </li>
                    </ul>

                    <docs-copy-button
                        value="example.activeCode"
                        button-class="text-body-secondary"
                        aria-label="Copy active code">
                    </docs-copy-button>
                </div>
                <div ngb-nav-outlet="example.codeNav"></div>
            </div>
        </div>
    </div>
</section>
`),e.put(`src/app/features/lib/pages/typeahead-api-page/typeahead-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-typeahead">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbTypeahead</code></h2><p class="text-body-secondary mb-0">Connects an input to an observable result source and manages the suggestion popup.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;input ng-model="value" ngb-typeahead="search"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0"><code>ng-model</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>ngb-typeahead</code></td><td><code>&lt;?</code></td><td>Required</td><td>Function that maps the text stream to an observable result collection.</td></tr>
            <tr><td><code>autocomplete</code></td><td><code>&lt;?</code></td><td>—</td><td>Sets the native autocomplete behavior.</td></tr>
            <tr><td><code>container</code></td><td><code>&lt;?</code></td><td><code>$config.container</code></td><td>Container used for the popup.</td></tr>
            <tr><td><code>editable</code></td><td><code>&lt;?</code></td><td><code>true</code></td><td>Allows values not present in the results.</td></tr>
            <tr><td><code>focus-first</code></td><td><code>&lt;?</code></td><td><code>true</code></td><td>Activates the first result when the popup opens.</td></tr>
            <tr><td><code>input-formatter</code></td><td><code>&lt;?</code></td><td>String conversion</td><td>Formats the selected model in the input.</td></tr>
            <tr><td><code>result-formatter</code></td><td><code>&lt;?</code></td><td>String conversion</td><td>Formats values in the result list.</td></tr>
            <tr><td><code>result-template</code></td><td><code>&lt;?</code></td><td>Default result</td><td>Provides custom result markup.</td></tr>
            <tr><td><code>placement</code></td><td><code>&lt;?</code></td><td><code>$config.placement</code></td><td>Preferred Popper placements.</td></tr>
            <tr><td><code>popper-options</code></td><td><code>&lt;?</code></td><td><code>$config.popperOptions</code></td><td>Transforms Popper options.</td></tr>
            <tr><td><code>popup-class</code></td><td><code>&lt;?</code></td><td>—</td><td>Adds a class to the results popup.</td></tr>
            <tr><td><code>select-on-exact</code></td><td><code>&lt;?</code></td><td><code>false</code></td><td>Selects automatically when only one exact result exists.</td></tr>
            <tr><td><code>show-hint</code></td><td><code>&lt;?</code></td><td><code>false</code></td><td>Shows the completion hint.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>select-item</code></td><td><code>&amp;?</code></td><td><code>$event: NgbTypeaheadSelectItemEvent</code></td><td>A result is selected.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-highlight">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbHighlight</code></h2><p class="text-body-secondary mb-0">Highlights matching portions of a result label.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-highlight result="label" term="query"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>result</code></td><td><code>&lt;</code></td><td><code>string</code></td><td>Required</td></tr>
        <tr><td><code>term</code></td><td><code>&lt;</code></td><td><code>string</code></td><td>Required</td></tr>
        <tr><td><code>highlight-class</code></td><td><code>&lt;?</code></td><td><code>string</code></td><td><code>"ngb-highlight"</code></td></tr>
        <tr><td><code>accent-sensitive</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-typeahead-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbTypeaheadConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide typeahead defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>container</code></td><td><code>undefined</code></td></tr>
        <tr><td><code>editable</code>, <code>focusFirst</code></td><td><code>true</code></td></tr>
        <tr><td><code>selectOnExact</code>, <code>showHint</code></td><td><code>false</code></td></tr>
        <tr><td><code>placement</code></td><td><code>["bottom-start", "bottom-end", "top-start", "top-end"]</code></td></tr>
        <tr><td><code>popperOptions</code></td><td>Identity transform</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/tooltip-api-page/tooltip-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-tooltip">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbTooltip</code></h2><p class="text-body-secondary mb-0">Attaches a positioned Bootstrap tooltip to any host element.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;button ngb-tooltip="'Help text'"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>ngb-tooltip</code></td><td><code>&lt;?</code></td><td><code>string | TemplateRef</code></td><td>—</td><td>Tooltip content.</td></tr>
            <tr><td><code>tooltip-context</code></td><td><code>&lt;?</code></td><td><code>object</code></td><td>—</td><td>Context supplied to template content.</td></tr>
            <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables open and close transitions.</td></tr>
            <tr><td><code>auto-close</code></td><td><code>&lt;?</code></td><td><code>boolean | "inside" | "outside"</code></td><td><code>true</code></td><td>Controls automatic closing.</td></tr>
            <tr><td><code>placement</code></td><td><code>&lt;?</code></td><td><code>PlacementArray</code></td><td><code>"auto"</code></td><td>Preferred Popper placement.</td></tr>
            <tr><td><code>triggers</code></td><td><code>&lt;?</code></td><td><code>string</code></td><td><code>"hover focus"</code></td><td>Space-separated open and close triggers.</td></tr>
            <tr><td><code>container</code></td><td><code>&lt;?</code></td><td><code>string</code></td><td><code>$config.container</code></td><td>Container selector for the tooltip window.</td></tr>
            <tr><td><code>position-target</code></td><td><code>@?</code></td><td><code>string</code></td><td>Host element</td><td>Overrides the positioning target.</td></tr>
            <tr><td><code>tooltip-class</code></td><td><code>@?</code></td><td><code>string</code></td><td>—</td><td>Adds a class to the tooltip window.</td></tr>
            <tr><td><code>disable-tooltip</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents the tooltip from opening.</td></tr>
            <tr><td><code>open-delay</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>0</code></td><td>Delay before opening in milliseconds.</td></tr>
            <tr><td><code>close-delay</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>0</code></td><td>Delay before closing in milliseconds.</td></tr>
            <tr><td><code>popper-options</code></td><td><code>&lt;?</code></td><td><code>function</code></td><td><code>$config.popperOptions</code></td><td>Transforms Popper options.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>shown</code></td><td><code>&amp;?</code></td><td>None</td><td>The tooltip opens.</td></tr>
        <tr><td><code>hidden</code></td><td><code>&amp;?</code></td><td>None</td><td>The tooltip closes.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-tooltip-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbTooltipConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide tooltip defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>animation</code></td><td><code>$config.animation</code></td></tr>
        <tr><td><code>autoClose</code></td><td><code>true</code></td></tr>
        <tr><td><code>placement</code></td><td><code>"auto"</code></td></tr>
        <tr><td><code>triggers</code></td><td><code>"hover focus"</code></td></tr>
        <tr><td><code>disableTooltip</code></td><td><code>false</code></td></tr>
        <tr><td><code>openDelay</code>, <code>closeDelay</code></td><td><code>0</code></td></tr>
        <tr><td><code>container</code>, <code>tooltipClass</code></td><td><code>undefined</code></td></tr>
        <tr><td><code>popperOptions</code></td><td>Identity transform</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/toast-api-page/toast-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-toast">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbToast</code></h2><p class="text-body-secondary mb-0">Displays an accessible notification with optional automatic dismissal.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-toast&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables show and hide transitions.</td></tr>
            <tr><td><code>autohide</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Automatically hides the toast.</td></tr>
            <tr><td><code>delay</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>5000</code></td><td>Autohide delay in milliseconds.</td></tr>
            <tr><td><code>header</code></td><td><code>@?</code></td><td><code>string</code></td><td>—</td><td>Sets the default header text.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0">
        <thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead>
        <tbody>
            <tr><td><code>shown</code></td><td><code>&amp;?</code></td><td>None</td><td>The show transition finishes.</td></tr>
            <tr><td><code>hidden</code></td><td><code>&amp;?</code></td><td>None</td><td>The hide transition finishes.</td></tr>
        </tbody>
    </table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-toast-header">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbToastHeader</code></h2><p class="text-body-secondary mb-0">Marks a custom template as the toast header.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ng-template ngb-toast-header&gt;</code></dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-toast-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbToastConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide toast defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Type</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>animation</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td></tr>
        <tr><td><code>ariaLive</code></td><td><code>"polite" | "assertive"</code></td><td><code>"polite"</code></td></tr>
        <tr><td><code>autohide</code></td><td><code>boolean</code></td><td><code>true</code></td></tr>
        <tr><td><code>delay</code></td><td><code>number</code></td><td><code>5000</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/timepicker-examples-page/timepicker-examples-page.component.html`,`<docs-example-section fragment="basic-timepicker" title="Basic timepicker" description="Bind an NgbTimeStruct model to the default timepicker." html-code="$.examples.basic.html" ts-code="$.examples.basic.typescript">
    <docs-basic-timepicker></docs-basic-timepicker>
</docs-example-section>

<docs-example-section fragment="meridian-timepicker" title="Meridian" description="Switch between 24-hour and 12-hour input with a localized period selector." html-code="$.examples.meridian.html" ts-code="$.examples.meridian.typescript">
    <docs-meridian-timepicker></docs-meridian-timepicker>
</docs-example-section>

<docs-example-section fragment="seconds-timepicker" title="Seconds" description="Show or hide the seconds field while preserving the same time model." html-code="$.examples.seconds.html" ts-code="$.examples.seconds.typescript">
    <docs-seconds-timepicker></docs-seconds-timepicker>
</docs-example-section>

<docs-example-section fragment="spinners-timepicker" title="Spinners" description="Toggle the increment and decrement controls without disabling keyboard input." html-code="$.examples.spinners.html" ts-code="$.examples.spinners.typescript">
    <docs-spinners-timepicker></docs-spinners-timepicker>
</docs-example-section>

<docs-example-section fragment="timepicker-custom-steps" title="Custom steps" description="Configure independent increments for hours, minutes and seconds." html-code="$.examples.steps.html" ts-code="$.examples.steps.typescript">
    <docs-timepicker-custom-steps></docs-timepicker-custom-steps>
</docs-example-section>

<docs-example-section fragment="timepicker-validation" title="Custom validation" description="Add an AngularJS ngModel validator that only accepts times between 12:00 and 13:59." html-code="$.examples.validation.html" ts-code="$.examples.validation.typescript">
    <docs-timepicker-validation></docs-timepicker-validation>
</docs-example-section>

<docs-example-section fragment="timepicker-custom-adapter" title="Custom time adapter" description="Implement NgbTimeAdapter to convert between NgbTimeStruct and an application-level HH:mm:ss string. Adapter providers are application-wide in AngularJS." html-code="$.examples.adapter.html" ts-code="$.examples.adapter.typescript">
    <docs-timepicker-custom-adapter></docs-timepicker-custom-adapter>
</docs-example-section>

<docs-example-section fragment="timepicker-i18n" title="Internationalization" description="Replace NgbTimepickerI18n application-wide to supply custom Greek morning and afternoon labels." html-code="$.examples.i18n.html" ts-code="$.examples.i18n.typescript">
    <docs-timepicker-i18n></docs-timepicker-i18n>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/scrollspy-examples-page/scrollspy-examples-page.component.html`,`<docs-example-section fragment="basic-scrollspy" title="Basic" description="Observe fragments inside an independent scroll container and read the currently active id." html-code="$.examples.basic.html">
    <docs-basic-scrollspy></docs-basic-scrollspy>
</docs-example-section>

<docs-example-section fragment="scrollspy-menu-items" title="Menu items" description="Connect Bootstrap list-group items to a scrollspy instance outside the observed container." html-code="$.examples.menuItems.html">
    <docs-scrollspy-menu-items></docs-scrollspy-menu-items>
</docs-example-section>

<docs-example-section fragment="nested-scrollspy" title="Nested items" description="Group child fragments under parent menu items and keep both levels synchronized." html-code="$.examples.nested.html">
    <docs-nested-scrollspy></docs-nested-scrollspy>
</docs-example-section>

<docs-example-section fragment="navbar-scrollspy" title="Navbar" description="Use a Bootstrap navbar as an external menu for a separate scroll container." html-code="$.examples.navbar.html">
    <docs-navbar-scrollspy></docs-navbar-scrollspy>
</docs-example-section>

<docs-example-section fragment="scrollspy-service" title="Using the service" description="Start, stop and control observation programmatically with NgbScrollSpyService and ordinary DOM fragments." html-code="$.examples.service.html" ts-code="$.examples.service.typescript">
    <docs-scrollspy-service-demo></docs-scrollspy-service-demo>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/rating-api-page/rating-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-rating">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbRating</code></h2><p class="text-body-secondary mb-0">Provides an accessible keyboard-driven rating control with customizable stars.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-rating rate="rating"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Integration</dt><dd class="col-sm-9 mb-0">Optionally reads <code>ng-disabled</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>rate</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>0</code></td><td>Current rating value.</td></tr>
            <tr><td><code>max</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>10</code></td><td>Maximum number of rating items.</td></tr>
            <tr><td><code>readonly</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents user changes.</td></tr>
            <tr><td><code>resettable</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Allows selecting the current value again to reset to zero.</td></tr>
            <tr><td><code>star-template</code></td><td><code>&lt;?</code></td><td><code>TemplateRef</code></td><td>Default star</td><td>Provides custom item markup.</td></tr>
            <tr><td><code>tabindex</code></td><td><code>&lt;?</code></td><td><code>number | string</code></td><td><code>0</code></td><td>Sets keyboard tab order.</td></tr>
            <tr><td><code>aria-value-text</code></td><td><code>&lt;?</code></td><td><code>function</code></td><td>Built-in formatter</td><td>Formats the accessible value text.</td></tr>
            <tr><td><code>ng-disabled</code></td><td><code>ngDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables interaction and focus.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0">
        <thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead>
        <tbody>
            <tr><td><code>rate-change</code></td><td><code>&amp;?</code></td><td><code>$event: number</code></td><td>The interactive rating changes.</td></tr>
            <tr><td><code>hover</code></td><td><code>&amp;?</code></td><td><code>$event: number</code></td><td>A rating item is hovered.</td></tr>
            <tr><td><code>leave</code></td><td><code>&amp;?</code></td><td><code>$event: number</code></td><td>The pointer leaves the rating.</td></tr>
        </tbody>
    </table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-rating-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbRatingConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide rating defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Type</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>max</code></td><td><code>number</code></td><td><code>10</code></td></tr>
        <tr><td><code>readonly</code>, <code>resettable</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
        <tr><td><code>tabindex</code></td><td><code>number | string</code></td><td><code>0</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/timepicker-api-page/timepicker-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-timepicker">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbTimepicker</code></h2><p class="text-body-secondary mb-0">Edits a time value through AngularJS forms with optional spinners, seconds and meridian mode.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-timepicker ng-model="time"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0"><code>ng-model</code>; optionally reads <code>ng-disabled</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>meridian</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Uses a 12-hour clock with period selector.</td></tr>
            <tr><td><code>spinners</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Shows increment and decrement controls.</td></tr>
            <tr><td><code>seconds</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows the seconds field.</td></tr>
            <tr><td><code>hour-step</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>1</code></td><td>Hours changed per step.</td></tr>
            <tr><td><code>minute-step</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>1</code></td><td>Minutes changed per step.</td></tr>
            <tr><td><code>second-step</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>1</code></td><td>Seconds changed per step.</td></tr>
            <tr><td><code>readonly-inputs</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Makes text fields readonly while keeping spinner controls active.</td></tr>
            <tr><td><code>size</code></td><td><code>&lt;?</code></td><td><code>"small" | "medium" | "large"</code></td><td><code>"medium"</code></td><td>Sets the control size.</td></tr>
            <tr><td><code>ng-disabled</code></td><td><code>ngDisabled</code></td><td><code>boolean</code></td><td><code>$config.disabled</code></td><td>Disables the timepicker.</td></tr>
        </tbody>
    </table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-timepicker-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbTimepickerConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide timepicker defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>meridian</code>, <code>seconds</code>, <code>disabled</code>, <code>readonlyInputs</code></td><td><code>false</code></td></tr>
        <tr><td><code>spinners</code></td><td><code>true</code></td></tr>
        <tr><td><code>hourStep</code>, <code>minuteStep</code>, <code>secondStep</code></td><td><code>1</code></td></tr>
        <tr><td><code>size</code></td><td><code>"medium"</code></td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-time-adapter">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbTimeAdapter&lt;T&gt;</code></h2><p class="text-body-secondary mb-0">Converts between the application model and <code>NgbTimeStruct</code>.</p></header>
    <h3 class="h5 mt-4 mb-3">Methods</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Method</th><th>Returns</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>fromModel(value)</code></td><td><code>NgbTimeStruct | null</code></td><td>Converts an application value for the timepicker.</td></tr>
        <tr><td><code>toModel(time)</code></td><td><code>T | null</code></td><td>Converts the timepicker value back to the application model.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-timepicker-i18n">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbTimepickerI18n</code></h2><p class="text-body-secondary mb-0">Supplies localized morning and afternoon period labels.</p></header>
    <h3 class="h5 mt-4 mb-3">Methods</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Method</th><th>Returns</th></tr></thead><tbody>
        <tr><td><code>getMorningPeriod()</code></td><td><code>string</code></td></tr>
        <tr><td><code>getAfternoonPeriod()</code></td><td><code>string</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/shared/components/copy-button/copy-button.component.html`,`<ng-template ng-ref="copyTooltip">
    <span>{{ copyButton.copied ? "Copied" : "Copy to clipboard" }}</span>
</ng-template>

<button
    type="button"
    class="btn btn-link d-inline-flex align-items-center justify-content-center p-2 lh-1 {{ copyButton.buttonClass }}"
    ng-click="copyButton.copy()"
    ngb-tooltip="copyTooltip"
    placement="'top'"
    ng-attr-aria-label="{{ copyButton.copied ? 'Copied' : (copyButton.ariaLabel || 'Copy to clipboard') }}">
    <i
        class="bi fs-5"
        ng-class="copyButton.copied ? 'bi-check-lg text-success' : 'bi-clipboard'"
        aria-hidden="true">
    </i>
</button>
`),e.put(`src/app/features/lib/pages/scrollspy-api-page/scrollspy-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-scrollspy">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbScrollSpy</code></h2><p class="text-body-secondary mb-0">Turns a scrollable element into an observed container and tracks its active fragment.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;main ngb-scroll-spy&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
            <tr><td><code>active</code></td><td><code>@?</code></td><td><code>string</code></td><td><code>""</code></td><td>Initial or requested active fragment id.</td></tr>
            <tr><td><code>process-changes</code></td><td><code>&lt;?</code></td><td><code>NgbScrollSpyProcessChanges</code></td><td><code>$config.processChanges</code></td><td>Determines the active fragment from observer changes.</td></tr>
            <tr><td><code>root-margin</code></td><td><code>@?</code></td><td><code>string</code></td><td>Browser default</td><td>IntersectionObserver root margin.</td></tr>
            <tr><td><code>scroll-behavior</code></td><td><code>@?</code></td><td><code>"auto" | "smooth"</code></td><td><code>"smooth"</code></td><td>Default behavior for programmatic scrolling.</td></tr>
            <tr><td><code>threshold</code></td><td><code>&lt;?</code></td><td><code>number | number[]</code></td><td>Browser default</td><td>IntersectionObserver thresholds.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>active-change</code></td><td><code>&amp;?</code></td><td><code>$event: string</code></td><td>The active fragment changes.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-scrollspy-fragment">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbScrollSpyFragment</code></h2><p class="text-body-secondary mb-0">Registers a section with its ancestor scrollspy and assigns its DOM id.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;section ngb-scroll-spy-fragment="overview"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">An ancestor <code>ngb-scroll-spy</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>ngb-scroll-spy-fragment</code></td><td><code>@</code></td><td><code>string</code></td><td>Required</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-scrollspy-menu">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbScrollSpyMenu</code></h2><p class="text-body-secondary mb-0">Coordinates nested menu items and applies their active state.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;nav ngb-scroll-spy-menu&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Input</th><th>Binding</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>ngb-scroll-spy-menu</code></td><td><code>&lt;?</code></td><td>Optional explicit <code>NgbScrollSpy</code>; otherwise uses an ancestor or injected service.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-scrollspy-item">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbScrollSpyItem</code></h2><p class="text-body-secondary mb-0">Links a menu entry to a fragment, applies <code>active</code> and scrolls on click.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;a ngb-scroll-spy-item="overview"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Input</th><th>Binding</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>ngb-scroll-spy-item</code></td><td><code>@?</code></td><td>Fragment id or shorthand item data.</td></tr>
        <tr><td><code>fragment</code></td><td><code>@?</code></td><td>Explicit fragment id.</td></tr>
        <tr><td><code>parent</code></td><td><code>@?</code></td><td>Parent fragment id for nested menus.</td></tr>
        <tr><td><code>scroll-spy</code></td><td><code>&lt;?</code></td><td>Explicit <code>NgbScrollSpy</code> controller.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-scrollspy-service">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbScrollSpyService</code></h2><p class="text-body-secondary mb-0">Provides programmatic scrollspy control without a directive host.</p></header>
    <h3 class="h5 mt-4 mb-3">Members</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Member</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>active</code></td><td>Current fragment id.</td></tr>
        <tr><td><code>active$</code></td><td>Observable of distinct active fragment changes.</td></tr>
        <tr><td><code>start(options?)</code></td><td>Starts observation with optional root, fragments and IntersectionObserver settings.</td></tr>
        <tr><td><code>stop()</code></td><td>Stops observation and clears the active fragment.</td></tr>
        <tr><td><code>observe(fragment)</code></td><td>Adds a fragment to observation.</td></tr>
        <tr><td><code>unobserve(fragment)</code></td><td>Removes a fragment from observation.</td></tr>
        <tr><td><code>scrollTo(fragment, options?)</code></td><td>Scrolls to a registered id or element.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-scrollspy-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbScrollSpyConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide scrollspy defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>scrollBehavior</code></td><td><code>"smooth"</code></td></tr>
        <tr><td><code>processChanges</code></td><td>Built-in intersection processing function</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/progressbar-api-page/progressbar-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-progressbar">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbProgressbar</code></h2><p class="text-body-secondary mb-0">Renders an accessible Bootstrap progress indicator for a numeric value.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-progressbar value="progress"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>value</code></td><td><code>&lt;</code></td><td><code>number</code></td><td>Required</td><td>Current progress value.</td></tr>
            <tr><td><code>max</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>100</code></td><td>Maximum value.</td></tr>
            <tr><td><code>animated</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Animates striped progress.</td></tr>
            <tr><td><code>striped</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Uses a striped background.</td></tr>
            <tr><td><code>show-value</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Displays the calculated percentage.</td></tr>
            <tr><td><code>type</code></td><td><code>@?</code></td><td><code>string</code></td><td><code>$config.type</code></td><td>Sets the bar contextual type.</td></tr>
            <tr><td><code>text-type</code></td><td><code>@?</code></td><td><code>string</code></td><td><code>$config.textType</code></td><td>Sets the label text color.</td></tr>
            <tr><td><code>height</code></td><td><code>@?</code></td><td><code>string</code></td><td><code>$config.height</code></td><td>Sets the progress container height.</td></tr>
            <tr><td><code>aria-label</code></td><td><code>@?</code></td><td><code>string</code></td><td><code>"progress bar"</code></td><td>Accessible label for the bar.</td></tr>
        </tbody>
    </table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-progressbar-stacked">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbProgressbarStacked</code></h2><p class="text-body-secondary mb-0">Groups multiple progress bars into a Bootstrap stacked progress container.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-progressbar-stacked&gt;</code></dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-progressbar-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbProgressbarConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide progress bar defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Type</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>ariaLabel</code></td><td><code>string</code></td><td><code>"progress bar"</code></td></tr>
        <tr><td><code>animated</code>, <code>showValue</code>, <code>striped</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
        <tr><td><code>max</code></td><td><code>number</code></td><td><code>100</code></td></tr>
        <tr><td><code>height</code>, <code>textType</code>, <code>type</code></td><td><code>string | undefined</code></td><td><code>undefined</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/progressbar-examples-page/progressbar-examples-page.component.html`,`<docs-example-section fragment="simple-progressbar" title="Simple progress bars" description="Display simple values using Bootstrap contextual types." html-code="$.examples.simple.html" ts-code="$.examples.simple.typescript">
    <docs-simple-progressbar></docs-simple-progressbar>
</docs-example-section>

<docs-example-section fragment="contextual-text-progressbar" title="Contextual text progress bars" description="Show the calculated percentage and choose a contextual foreground color." html-code="$.examples.contextual.html" ts-code="$.examples.contextual.typescript">
    <docs-contextual-text-progressbar></docs-contextual-text-progressbar>
</docs-example-section>

<docs-example-section fragment="striped-progress-bar" title="Striped progress bars" description="Apply striped styling to contextual variants and optionally animate the stripes." html-code="$.examples.striped.html" ts-code="$.examples.striped.typescript">
    <docs-striped-progress-bar></docs-striped-progress-bar>
</docs-example-section>

<docs-example-section fragment="custom-labels-progressbar" title="Custom labels" description="Project arbitrary HTML labels inside each progress bar." html-code="$.examples.labels.html" ts-code="$.examples.labels.typescript">
    <docs-custom-labels-progressbar></docs-custom-labels-progressbar>
</docs-example-section>

<docs-example-section fragment="progress-height" title="Progress height" description="Set the progress container height through the height input." html-code="$.examples.height.html" ts-code="$.examples.height.typescript">
    <docs-progress-height></docs-progress-height>
</docs-example-section>

<docs-example-section fragment="progress-bars-stacked" title="Stacked progress bars" description="Combine multiple contextual segments inside NgbProgressbarStacked." html-code="$.examples.stacked.html" ts-code="$.examples.stacked.typescript">
    <docs-progress-bars-stacked></docs-progress-bars-stacked>
</docs-example-section>

<docs-example-section fragment="progressbar-global" title="Global configuration" description="Change NgbProgressbarConfig once to provide shared visual and value defaults." html-code="$.examples.global.html" ts-code="$.examples.global.typescript">
    <docs-progressbar-global></docs-progressbar-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/rating-examples-page/rating-examples-page.component.html`,`<docs-example-section fragment="basic-rating" title="Basic demo" description="Select a rating and synchronize its value through rate-change." html-code="$.examples.basic.html" ts-code="$.examples.basic.typescript">
    <docs-basic-rating></docs-basic-rating>
</docs-example-section>

<docs-example-section fragment="rating-events" title="Events and readonly ratings" description="Observe hover and leave events and switch the same rating between editable and read-only states." html-code="$.examples.events.html" ts-code="$.examples.events.typescript">
    <docs-rating-events></docs-rating-events>
</docs-example-section>

<docs-example-section fragment="rating-custom-template" title="Custom star template" description="Replace the default characters with a child ng-template using Bootstrap Icons." html-code="$.examples.customTemplate.html" ts-code="$.examples.customTemplate.typescript" css-code="$.examples.customTemplate.css">
    <docs-rating-custom-template></docs-rating-custom-template>
</docs-example-section>

<docs-example-section fragment="rating-decimal" title="Custom decimal rating" description="Render fractional heart fills through star-template and provide accessible value text." html-code="$.examples.decimal.html" ts-code="$.examples.decimal.typescript" css-code="$.examples.decimal.css">
    <docs-rating-decimal></docs-rating-decimal>
</docs-example-section>

<docs-example-section fragment="rating-form" title="Form integration" description="Synchronize rate and rate-change with an AngularJS form model while direct ng-model support remains pending." html-code="$.examples.form.html" ts-code="$.examples.form.typescript">
    <docs-rating-form></docs-rating-form>
</docs-example-section>

<docs-example-section fragment="rating-global" title="Customized default values" description="Change NgbRatingConfig once to provide shared maximum, read-only and tabindex defaults." html-code="$.examples.global.html" ts-code="$.examples.global.typescript">
    <docs-rating-global></docs-rating-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/popover-examples-page/popover-examples-page.component.html`,`<docs-example-section fragment="popover-placements" title="Quick and easy popovers" description="Place a popover above, to the right, below or to the left of its trigger." html-code="$.examples.placements.html" ts-code="$.examples.placements.typescript">
    <docs-popover-placements></docs-popover-placements>
</docs-example-section>

<docs-example-section fragment="popover-template" title="HTML and bindings in popovers" description="Use ng-template for rich title and body content with live AngularJS bindings." html-code="$.examples.template.html" ts-code="$.examples.template.typescript">
    <docs-popover-template></docs-popover-template>
</docs-example-section>

<docs-example-section fragment="popover-triggers" title="Custom and manual triggers" description="Pair custom DOM events or take manual control with two buttons." html-code="$.examples.triggers.html" ts-code="$.examples.triggers.typescript">
    <docs-popover-triggers></docs-popover-triggers>
</docs-example-section>

<docs-example-section fragment="popover-manual-control" title="External manual controls" description="Open, close and toggle a target popover from independent controls." html-code="$.examples.manual.html" ts-code="$.examples.manual.typescript">
    <docs-popover-manual-control></docs-popover-manual-control>
</docs-example-section>

<docs-example-section fragment="popover-autoclose" title="Automatic closing with keyboard and mouse" description="Close on inside clicks, outside clicks, every click or the Escape key." html-code="$.examples.autoclose.html" ts-code="$.examples.autoclose.typescript">
    <docs-popover-autoclose></docs-popover-autoclose>
</docs-example-section>

<docs-example-section fragment="popover-context" title="Context and manual triggers" description="Supply template context while opening manually or through popover-context." html-code="$.examples.context.html" ts-code="$.examples.context.typescript">
    <docs-popover-context></docs-popover-context>
</docs-example-section>

<docs-example-section fragment="popover-custom-target" title="Custom target" description="Trigger a popover from one element while positioning it against another." html-code="$.examples.customTarget.html" ts-code="$.examples.customTarget.typescript">
    <docs-popover-custom-target></docs-popover-custom-target>
</docs-example-section>

<docs-example-section fragment="popover-delays" title="Open and close delays" description="Delay hover opening and keep content available while the pointer moves into it." html-code="$.examples.delays.html" ts-code="$.examples.delays.typescript">
    <docs-popover-delays></docs-popover-delays>
</docs-example-section>

<docs-example-section fragment="popover-events" title="Popover visibility events" description="Observe shown and hidden callbacks and record when each transition completes." html-code="$.examples.events.html" ts-code="$.examples.events.typescript">
    <docs-popover-events></docs-popover-events>
</docs-example-section>

<docs-example-section fragment="popover-body" title="Append popover in the body" description="Escape clipping containers by appending the popover window to document.body." html-code="$.examples.body.html" ts-code="$.examples.body.typescript">
    <docs-popover-body></docs-popover-body>
</docs-example-section>

<docs-example-section fragment="popover-custom-class" title="Popover with custom class" description="Layer a focused visual treatment over Bootstrap popover variables." html-code="$.examples.customClass.html" ts-code="$.examples.customClass.typescript" css-code="$.examples.customClass.css">
    <docs-popover-custom-class></docs-popover-custom-class>
</docs-example-section>

<docs-example-section fragment="popover-global" title="Global configuration of popovers" description="Change NgbPopoverConfig once to provide shared trigger, placement, delay and container defaults." html-code="$.examples.global.html" ts-code="$.examples.global.typescript">
    <docs-popover-global></docs-popover-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/pagination-examples-page/pagination-examples-page.component.html`,`<docs-example-section fragment="basic-pagination" title="Basic pagination" description="Navigate a collection with the default pagination options." html-code="$.examples.basic.html" ts-code="$.examples.basic.typescript">
    <docs-basic-pagination></docs-basic-pagination>
</docs-example-section>

<docs-example-section fragment="advanced-pagination" title="Advanced pagination" description="Limit visible pages, rotate the range and control boundary links and ellipses." html-code="$.examples.advanced.html" ts-code="$.examples.advanced.typescript">
    <docs-advanced-pagination></docs-advanced-pagination>
</docs-example-section>

<docs-example-section fragment="custom-pagination" title="Custom links and pages" description="Replace the previous, next and page-number content with ng-template." html-code="$.examples.custom.html" ts-code="$.examples.custom.typescript">
    <docs-custom-pagination></docs-custom-pagination>
</docs-example-section>

<docs-example-section fragment="pagination-size" title="Pagination size" description="Use Bootstrap small, default and large pagination sizes." html-code="$.examples.size.html" ts-code="$.examples.size.typescript">
    <docs-pagination-size></docs-pagination-size>
</docs-example-section>

<docs-example-section fragment="pagination-alignment" title="Pagination alignment" description="Align pagination at the start, center or end using Bootstrap flex utilities." html-code="$.examples.alignment.html" ts-code="$.examples.alignment.typescript">
    <docs-pagination-alignment></docs-pagination-alignment>
</docs-example-section>

<docs-example-section fragment="disabled-pagination" title="Disabled pagination" description="Disable every pagination action through the ng-disabled directive." html-code="$.examples.disabled.html" ts-code="$.examples.disabled.typescript">
    <docs-disabled-pagination></docs-disabled-pagination>
</docs-example-section>

<docs-example-section fragment="pagination-global" title="Global configuration" description="Change NgbPaginationConfig once to provide shared pagination defaults." html-code="$.examples.global.html" ts-code="$.examples.global.typescript">
    <docs-pagination-global></docs-pagination-global>
</docs-example-section>
`),e.put(`src/app/shared/components/title-heading/title-heading.component.html`,`<header class="mb-4 mb-lg-5" ng-if="$.visible">
    <div class="pt-2 pb-4">
        <h1 class="display-5 fw-bold lh-sm text-body-emphasis mb-0">
            {{ $.title }}
        </h1>
    </div>

    <nav class="overflow-x-auto border-bottom" ng-attr-aria-label="{{ $.title }} sections">
        <ul
            class="nav-underline flex-nowrap gap-4 mb-0"
            ngb-nav
            active-id="$.titleService.currentTab">
            <li
                ng-repeat="tab in $.tabs track by tab.to"
                ngb-nav-item="{{ tab.to }}">
                <a
                    type="button"
                    class="text-nowrap px-1 py-3 fw-semibold"
                    ngb-nav-link
                    ui-sref="{{ tab.to }}">
                    {{ tab.name }}
                </a>
            </li>
        </ul>
    </nav>
</header>
`),e.put(`src/app/features/lib/pages/offcanvas-examples-page/offcanvas-examples-page.component.html`,`<docs-example-section
    fragment="offcanvas-default"
    title="Offcanvas with default options"
    description="Open a TemplateRef panel without passing local options."
    html-code="$.examples.defaults.html"
    ts-code="$.examples.defaults.typescript">
    <docs-offcanvas-default></docs-offcanvas-default>
</docs-example-section>

<docs-example-section
    fragment="offcanvas-component-content"
    title="Components as content"
    description="Open a registered component and close or dismiss it through NgbActiveOffcanvas."
    html-code="$.examples.componentContent.html"
    ts-code="$.examples.componentContent.typescript">
    <docs-offcanvas-component-content></docs-offcanvas-component-content>
</docs-example-section>

<docs-example-section
    fragment="offcanvas-focus"
    title="Focus management"
    description="Focus the first interactive element automatically or choose another element with ngbAutofocus."
    html-code="$.examples.focus.html"
    ts-code="$.examples.focus.typescript">
    <docs-offcanvas-focus></docs-offcanvas-focus>
</docs-example-section>

<docs-example-section
    fragment="offcanvas-options"
    title="Offcanvas with options"
    description="Try custom classes, a static backdrop, every panel position and body scrolling."
    html-code="$.examples.options.html"
    ts-code="$.examples.options.typescript"
    css-code="$.examples.options.css">
    <docs-offcanvas-options></docs-offcanvas-options>
</docs-example-section>

<docs-example-section
    fragment="offcanvas-global"
    title="Global configuration"
    description="Change NgbOffcanvasConfig once to provide shared defaults when opening a panel."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-offcanvas-global></docs-offcanvas-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/offcanvas-api-page/offcanvas-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-offcanvas">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbOffcanvas</code></h2><p class="text-body-secondary mb-0">Creates and coordinates offcanvas panels from templates or components.</p></header>
    <h3 class="h5 mt-4 mb-3">Members</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Member</th><th>Returns</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>open(content, options?)</code></td><td><code>NgbOffcanvasRef</code></td><td>Opens content with options merged over <code>NgbOffcanvasConfig</code>.</td></tr>
        <tr><td><code>activeInstance</code></td><td>Active instance</td><td>Exposes the currently open offcanvas instance.</td></tr>
        <tr><td><code>dismiss(reason?)</code></td><td><code>void</code></td><td>Dismisses the active panel.</td></tr>
        <tr><td><code>hasOpenOffcanvas()</code></td><td><code>boolean</code></td><td>Reports whether a panel is open.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-offcanvas-ref">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Class</p><h2 class="h3 mb-2"><code class="text-body">NgbOffcanvasRef</code></h2><p class="text-body-secondary mb-0">Controls one panel and exposes its result and lifecycle streams.</p></header>
    <h3 class="h5 mt-4 mb-3">Members</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Member</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>close(result?)</code></td><td>Resolves <code>result</code> and closes the panel.</td></tr>
        <tr><td><code>dismiss(reason?)</code></td><td>Rejects <code>result</code> and dismisses the panel.</td></tr>
        <tr><td><code>result</code></td><td>AngularJS promise settled by close or dismiss.</td></tr>
        <tr><td><code>closed</code>, <code>dismissed</code>, <code>shown</code>, <code>hidden</code></td><td>Observable lifecycle streams.</td></tr>
        <tr><td><code>componentInstance</code></td><td>Component controller instance when component content is used.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-active-offcanvas">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbActiveOffcanvas</code></h2><p class="text-body-secondary mb-0">Allows offcanvas content to control the panel that contains it.</p></header>
    <h3 class="h5 mt-4 mb-3">Methods</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>close(result?)</code></td><td>Closes with an optional result.</td></tr>
        <tr><td><code>dismiss(reason?)</code></td><td>Dismisses with an optional reason.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-offcanvas-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbOffcanvasConfig</code></h2><p class="text-body-secondary mb-0">Provides defaults merged into every <code>open()</code> call.</p></header>
    <h3 class="h5 mt-4 mb-3">Options</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Option</th><th>Default</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>animation</code></td><td><code>$config.animation</code></td><td>Enables panel and backdrop transitions.</td></tr>
        <tr><td><code>backdrop</code></td><td><code>true</code></td><td>Accepts <code>true</code>, <code>false</code> or <code>"static"</code>.</td></tr>
        <tr><td><code>keyboard</code></td><td><code>true</code></td><td>Allows Escape-key dismissal.</td></tr>
        <tr><td><code>position</code></td><td><code>"start"</code></td><td>Accepts <code>"start"</code>, <code>"end"</code>, <code>"top"</code> or <code>"bottom"</code>.</td></tr>
        <tr><td><code>scroll</code></td><td><code>false</code></td><td>Allows body scrolling while open.</td></tr>
        <tr><td><code>ariaLabelledBy</code>, <code>ariaDescribedBy</code></td><td><code>undefined</code></td><td>Connect accessible label and description elements.</td></tr>
        <tr><td><code>container</code>, <code>bindings</code></td><td><code>undefined</code></td><td>Control content creation and placement.</td></tr>
        <tr><td><code>panelClass</code>, <code>backdropClass</code></td><td><code>undefined</code></td><td>Add custom classes.</td></tr>
        <tr><td><code>beforeDismiss</code></td><td><code>undefined</code></td><td>Can cancel dismissal synchronously or asynchronously.</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/popover-api-page/popover-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-popover">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbPopover</code></h2><p class="text-body-secondary mb-0">Attaches a positioned Bootstrap popover to any host element.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;button ngb-popover="'Content'"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>ngb-popover</code></td><td><code>&lt;?</code></td><td><code>string | TemplateRef</code></td><td>—</td><td>Popover body content.</td></tr>
            <tr><td><code>popover-title</code></td><td><code>&lt;?</code></td><td><code>string | TemplateRef</code></td><td>—</td><td>Optional title content.</td></tr>
            <tr><td><code>popover-context</code></td><td><code>&lt;?</code></td><td><code>object</code></td><td>—</td><td>Context supplied to template content.</td></tr>
            <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables open and close transitions.</td></tr>
            <tr><td><code>auto-close</code></td><td><code>&lt;?</code></td><td><code>boolean | "inside" | "outside"</code></td><td><code>true</code></td><td>Controls automatic closing.</td></tr>
            <tr><td><code>placement</code></td><td><code>&lt;?</code></td><td><code>PlacementArray</code></td><td><code>"auto"</code></td><td>Preferred Popper placement.</td></tr>
            <tr><td><code>triggers</code></td><td><code>&lt;?</code></td><td><code>string</code></td><td><code>"click"</code></td><td>Space-separated open and close triggers.</td></tr>
            <tr><td><code>container</code></td><td><code>&lt;?</code></td><td><code>string</code></td><td><code>$config.container</code></td><td>Container selector for the popover window.</td></tr>
            <tr><td><code>position-target</code></td><td><code>&lt;?</code></td><td><code>HTMLElement | string</code></td><td>Host element</td><td>Overrides the positioning target.</td></tr>
            <tr><td><code>popover-class</code></td><td><code>@?</code></td><td><code>string</code></td><td>—</td><td>Adds a class to the popover window.</td></tr>
            <tr><td><code>disable-popover</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents the popover from opening.</td></tr>
            <tr><td><code>open-delay</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>0</code></td><td>Delay before opening in milliseconds.</td></tr>
            <tr><td><code>close-delay</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>0</code></td><td>Delay before closing in milliseconds.</td></tr>
            <tr><td><code>popper-options</code></td><td><code>&lt;?</code></td><td><code>function</code></td><td><code>$config.popperOptions</code></td><td>Transforms Popper options.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>shown</code></td><td><code>&amp;?</code></td><td>None</td><td>The popover opens.</td></tr>
        <tr><td><code>hidden</code></td><td><code>&amp;?</code></td><td>None</td><td>The popover closes.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-popover-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbPopoverConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide popover defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>animation</code></td><td><code>$config.animation</code></td></tr>
        <tr><td><code>autoClose</code></td><td><code>true</code></td></tr>
        <tr><td><code>placement</code></td><td><code>"auto"</code></td></tr>
        <tr><td><code>triggers</code></td><td><code>"click"</code></td></tr>
        <tr><td><code>disablePopover</code></td><td><code>false</code></td></tr>
        <tr><td><code>openDelay</code>, <code>closeDelay</code></td><td><code>0</code></td></tr>
        <tr><td><code>container</code>, <code>popoverClass</code></td><td><code>undefined</code></td></tr>
        <tr><td><code>popperOptions</code></td><td>Identity transform</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/modal-examples-page/modal-examples-page.component.html`,`<docs-example-section
    fragment="modal-default"
    title="Modal with default options"
    description="Open a TemplateRef modal without passing local options."
    html-code="$.examples.defaults.html"
    ts-code="$.examples.defaults.typescript">
    <docs-modal-default></docs-modal-default>
</docs-example-section>

<docs-example-section
    fragment="modal-component-content"
    title="Components as content"
    description="Open a registered component, pass bindings to it and close or dismiss through NgbActiveModal."
    html-code="$.examples.componentContent.html"
    ts-code="$.examples.componentContent.typescript">
    <docs-modal-component-content></docs-modal-component-content>
</docs-example-section>

<docs-example-section
    fragment="modal-focus"
    title="Focus management"
    description="Focus the first interactive element automatically or choose another element with ngbAutofocus."
    html-code="$.examples.focus.html"
    ts-code="$.examples.focus.typescript">
    <docs-modal-focus></docs-modal-focus>
</docs-example-section>

<docs-example-section
    fragment="modal-options"
    title="Modal with options"
    description="Open modal variants for custom classes, backdrops, sizes, fullscreen, centering and scrollable content."
    html-code="$.examples.options.html"
    ts-code="$.examples.options.typescript"
    css-code="$.examples.options.css">
    <docs-modal-options></docs-modal-options>
</docs-example-section>

<docs-example-section
    fragment="modal-updatable"
    title="Updatable options"
    description="Change ARIA references, layout, size and custom classes after the modal has opened."
    html-code="$.examples.updatable.html"
    ts-code="$.examples.updatable.typescript"
    css-code="$.examples.updatable.css">
    <docs-modal-updatable></docs-modal-updatable>
</docs-example-section>

<docs-example-section
    fragment="modal-stacked"
    title="Stacked modals"
    description="Open multiple modal layers and dismiss the complete stack from the modal service."
    html-code="$.examples.stacked.html"
    ts-code="$.examples.stacked.typescript">
    <docs-modal-stacked></docs-modal-stacked>
</docs-example-section>

<docs-example-section
    fragment="modal-global"
    title="Global configuration"
    description="Change NgbModalConfig once to provide defaults for every modal opened in this example."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-modal-global></docs-modal-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/nav-api-page/nav-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-nav">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbNav</code></h2><p class="text-body-secondary mb-0">Coordinates nav items, selection, keyboard behavior and panel transitions.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ul ngb-nav active-id="activeId"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>active-id</code></td><td><code>=?</code></td><td><code>string</code></td><td>First enabled item</td><td>Two-way active item id.</td></tr>
            <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables panel transitions.</td></tr>
            <tr><td><code>destroy-on-hide</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Removes inactive panel views.</td></tr>
            <tr><td><code>keyboard</code></td><td><code>&lt;?</code></td><td><code>boolean | "changeWithArrows"</code></td><td><code>true</code></td><td>Controls arrow-key navigation.</td></tr>
            <tr><td><code>orientation</code></td><td><code>&lt;?</code></td><td><code>"horizontal" | "vertical"</code></td><td><code>"horizontal"</code></td><td>Sets keyboard orientation.</td></tr>
            <tr><td><code>roles</code></td><td><code>&lt;?</code></td><td><code>"tablist" | false</code></td><td><code>"tablist"</code></td><td>Enables or disables tab ARIA roles.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>active-id-change</code></td><td><code>$event: string</code></td><td>The active id changes.</td></tr>
        <tr><td><code>nav-change</code></td><td><code>$event: NgbNavChangeEvent</code></td><td>Before selection changes; the event can prevent it.</td></tr>
        <tr><td><code>shown</code></td><td><code>$event: string</code></td><td>The next panel finishes appearing.</td></tr>
        <tr><td><code>hidden</code></td><td><code>$event: string</code></td><td>The previous panel finishes hiding.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-nav-item">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbNavItem</code></h2><p class="text-body-secondary mb-0">Defines one selectable item and its associated content.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;li ngb-nav-item="overview"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">An ancestor <code>ngb-nav</code>; optionally reads <code>ng-disabled</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Bindings</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Name</th><th>Binding</th><th>Default</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>ngb-nav-item</code></td><td><code>@?</code></td><td>Generated id</td><td>Identifies the item.</td></tr>
        <tr><td><code>dom-id</code></td><td><code>@?</code></td><td>Generated id</td><td>Overrides the DOM id.</td></tr>
        <tr><td><code>destroy-on-hide</code></td><td><code>&lt;?</code></td><td>Inherited</td><td>Overrides panel lifecycle for this item.</td></tr>
        <tr><td><code>shown</code>, <code>hidden</code></td><td><code>&amp;?</code></td><td>—</td><td>Item-level panel lifecycle callbacks.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-nav-link">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbNavLink</code></h2><p class="text-body-secondary mb-0">Turns an anchor or button into the interactive trigger for its nav item.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;button ngb-nav-link&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">Ancestor <code>ngb-nav-item</code> and <code>ngb-nav</code> controllers.</dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-nav-content">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbNavContent</code></h2><p class="text-body-secondary mb-0">Marks the template rendered for a nav item.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ng-template ngb-nav-content&gt;</code></dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-nav-outlet">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbNavOutlet</code></h2><p class="text-body-secondary mb-0">Renders the active panel for a nav controller.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;div ngb-nav-outlet="navController"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Input</th><th>Binding</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>ngb-nav-outlet</code></td><td><code>&lt;</code></td><td>The <code>NgbNav</code> controller to render.</td></tr>
        <tr><td><code>pane-role</code></td><td><code>&lt;?</code></td><td>Overrides the generated panel role.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-nav-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbNavConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide nav defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>animation</code></td><td><code>$config.animation</code></td></tr>
        <tr><td><code>destroyOnHide</code></td><td><code>true</code></td></tr>
        <tr><td><code>orientation</code></td><td><code>"horizontal"</code></td></tr>
        <tr><td><code>roles</code></td><td><code>"tablist"</code></td></tr>
        <tr><td><code>keyboard</code></td><td><code>true</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/pagination-api-page/pagination-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-pagination">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbPagination</code></h2><p class="text-body-secondary mb-0">Builds accessible page navigation for a collection.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-pagination collection-size="total" page="page"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Integration</dt><dd class="col-sm-9 mb-0">Optionally reads <code>ng-disabled</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>collection-size</code></td><td><code>&lt;</code></td><td><code>number</code></td><td>Required</td><td>Total number of collection items.</td></tr>
            <tr><td><code>page</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>1</code></td><td>Current page.</td></tr>
            <tr><td><code>page-size</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>10</code></td><td>Items represented by each page.</td></tr>
            <tr><td><code>max-size</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>0</code></td><td>Maximum number of visible page links; zero is unlimited.</td></tr>
            <tr><td><code>boundary-links</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows first and last links.</td></tr>
            <tr><td><code>direction-links</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Shows previous and next links.</td></tr>
            <tr><td><code>ellipses</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Shows ellipses for omitted ranges.</td></tr>
            <tr><td><code>rotate</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Centers the current page within the visible range.</td></tr>
            <tr><td><code>size</code></td><td><code>&lt;?</code></td><td><code>string | null</code></td><td><code>$config.size</code></td><td>Sets the Bootstrap pagination size.</td></tr>
            <tr><td><code>ng-disabled</code></td><td><code>ngDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables page navigation.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>page-change</code></td><td><code>&amp;?</code></td><td><code>$event: number</code></td><td>The user selects a page.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-pagination-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbPaginationConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide pagination defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>disabled</code>, <code>boundaryLinks</code>, <code>rotate</code></td><td><code>false</code></td></tr>
        <tr><td><code>directionLinks</code>, <code>ellipses</code></td><td><code>true</code></td></tr>
        <tr><td><code>maxSize</code></td><td><code>0</code></td></tr>
        <tr><td><code>pageSize</code></td><td><code>10</code></td></tr>
        <tr><td><code>size</code></td><td><code>undefined</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/modal-api-page/modal-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-modal">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbModal</code></h2><p class="text-body-secondary mb-0">Creates and coordinates modal instances from templates or components.</p></header>
    <h3 class="h5 mt-4 mb-3">Members</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Member</th><th>Returns</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>open(content, options?)</code></td><td><code>NgbModalRef</code></td><td>Opens content with options merged over <code>NgbModalConfig</code>.</td></tr>
        <tr><td><code>activeInstances</code></td><td>Active modal collection</td><td>Exposes the currently open modal instances.</td></tr>
        <tr><td><code>dismissAll(reason?)</code></td><td><code>void</code></td><td>Dismisses every open modal.</td></tr>
        <tr><td><code>hasOpenModals()</code></td><td><code>boolean</code></td><td>Reports whether a modal is open.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-modal-ref">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Class</p><h2 class="h3 mb-2"><code class="text-body">NgbModalRef</code></h2><p class="text-body-secondary mb-0">Controls one modal and exposes its result and lifecycle streams.</p></header>
    <h3 class="h5 mt-4 mb-3">Members</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Member</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>close(result?)</code></td><td>Resolves <code>result</code> and closes the modal.</td></tr>
        <tr><td><code>dismiss(reason?)</code></td><td>Rejects <code>result</code> and dismisses the modal.</td></tr>
        <tr><td><code>update(options)</code></td><td>Updates supported window and backdrop options.</td></tr>
        <tr><td><code>result</code></td><td>AngularJS promise settled by close or dismiss.</td></tr>
        <tr><td><code>closed</code>, <code>dismissed</code>, <code>shown</code>, <code>hidden</code></td><td>Observable lifecycle streams.</td></tr>
        <tr><td><code>componentInstance</code></td><td>Component controller instance when component content is used.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-active-modal">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbActiveModal</code></h2><p class="text-body-secondary mb-0">Allows modal content to control the modal that contains it.</p></header>
    <h3 class="h5 mt-4 mb-3">Methods</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>close(result?)</code></td><td>Closes with an optional result.</td></tr>
        <tr><td><code>dismiss(reason?)</code></td><td>Dismisses with an optional reason.</td></tr>
        <tr><td><code>update(options)</code></td><td>Updates supported modal options.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-modal-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbModalConfig</code></h2><p class="text-body-secondary mb-0">Provides defaults merged into every <code>open()</code> call.</p></header>
    <h3 class="h5 mt-4 mb-3">Options</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Option</th><th>Default</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>animation</code></td><td><code>$config.animation</code></td><td>Enables modal and backdrop transitions.</td></tr>
        <tr><td><code>backdrop</code></td><td><code>true</code></td><td>Accepts <code>true</code>, <code>false</code> or <code>"static"</code>.</td></tr>
        <tr><td><code>keyboard</code></td><td><code>true</code></td><td>Allows Escape-key dismissal.</td></tr>
        <tr><td><code>centered</code>, <code>scrollable</code></td><td><code>undefined</code></td><td>Controls dialog layout.</td></tr>
        <tr><td><code>fullscreen</code></td><td><code>false</code></td><td>Enables full-screen mode at an optional breakpoint.</td></tr>
        <tr><td><code>role</code></td><td><code>"dialog"</code></td><td>Sets the dialog ARIA role.</td></tr>
        <tr><td><code>size</code></td><td><code>undefined</code></td><td>Accepts <code>"sm"</code>, <code>"lg"</code> or <code>"xl"</code>.</td></tr>
        <tr><td><code>ariaLabelledBy</code>, <code>ariaDescribedBy</code></td><td><code>undefined</code></td><td>Connect accessible label and description elements.</td></tr>
        <tr><td><code>container</code>, <code>injector</code>, <code>bindings</code></td><td><code>undefined</code></td><td>Control content creation and placement.</td></tr>
        <tr><td><code>windowClass</code>, <code>modalDialogClass</code>, <code>backdropClass</code></td><td><code>undefined</code></td><td>Add custom classes.</td></tr>
        <tr><td><code>beforeDismiss</code></td><td><code>undefined</code></td><td>Can cancel dismissal synchronously or asynchronously.</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/tooltip-examples-page/tooltip-examples-page.component.html`,`<docs-example-section fragment="tooltip-placements" title="Quick and easy tooltips" description="Use the four primary Bootstrap placements with the default hover and focus triggers." html-code="$.examples.placements.html" ts-code="$.examples.placements.typescript">
    <docs-tooltip-placements></docs-tooltip-placements>
</docs-example-section>

<docs-example-section fragment="tooltip-template" title="HTML and bindings in tooltips" description="Render an ng-template as tooltip content and keep its bindings synchronized." html-code="$.examples.template.html" ts-code="$.examples.template.typescript">
    <docs-tooltip-template></docs-tooltip-template>
</docs-example-section>

<docs-example-section fragment="tooltip-triggers" title="Custom and manual triggers" description="Pair custom DOM events or control a tooltip directly through its public controller." html-code="$.examples.triggers.html" ts-code="$.examples.triggers.typescript">
    <docs-tooltip-triggers></docs-tooltip-triggers>
</docs-example-section>

<docs-example-section fragment="tooltip-autoclose" title="Automatic closing with keyboard and mouse" description="Compare inside, outside and all-click closing while preserving Escape keyboard support." html-code="$.examples.autoclose.html" ts-code="$.examples.autoclose.typescript">
    <docs-tooltip-autoclose></docs-tooltip-autoclose>
</docs-example-section>

<docs-example-section fragment="tooltip-context" title="Context and manual triggers" description="Pass template context at open time or provide a default tooltip-context." html-code="$.examples.context.html" ts-code="$.examples.context.typescript">
    <docs-tooltip-context></docs-tooltip-context>
</docs-example-section>

<docs-example-section fragment="tooltip-custom-target" title="Custom target" description="Trigger the tooltip from one element while positioning it against another." html-code="$.examples.customTarget.html" ts-code="$.examples.customTarget.typescript">
    <docs-tooltip-custom-target></docs-tooltip-custom-target>
</docs-example-section>

<docs-example-section fragment="tooltip-delays" title="Open and close delays" description="Delay opening and closing while allowing the pointer to move safely into the tooltip." html-code="$.examples.delays.html" ts-code="$.examples.delays.typescript">
    <docs-tooltip-delays></docs-tooltip-delays>
</docs-example-section>

<docs-example-section fragment="tooltip-body" title="Append tooltip in the body" description="Escape a clipping container by appending the tooltip window directly to document.body." html-code="$.examples.body.html" ts-code="$.examples.body.typescript">
    <docs-tooltip-body></docs-tooltip-body>
</docs-example-section>

<docs-example-section fragment="tooltip-custom-class" title="Tooltip with custom class" description="Apply a small custom theme through Bootstrap tooltip variables." html-code="$.examples.customClass.html" ts-code="$.examples.customClass.typescript" css-code="$.examples.customClass.css">
    <docs-tooltip-custom-class></docs-tooltip-custom-class>
</docs-example-section>

<docs-example-section fragment="tooltip-global" title="Global configuration of tooltips" description="Set shared container, placement, trigger and delay defaults through NgbTooltipConfig." html-code="$.examples.global.html" ts-code="$.examples.global.typescript">
    <docs-tooltip-global></docs-tooltip-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/dropdown-examples-page/dropdown-examples-page.component.html`,`<docs-example-section
    fragment="simple-dropdown"
    title="Simple dropdown"
    description="Two basic menus that prefer bottom and top placement respectively."
    html-code="$.examples.simple.html">
    <docs-simple-dropdown></docs-simple-dropdown>
</docs-example-section>

<docs-example-section
    fragment="manual-dropdown"
    title="Manual triggers"
    description="Use the dropdown controller to open, close or toggle a menu without a toggle trigger."
    html-code="$.examples.manual.html"
    ts-code="$.examples.manual.typescript">
    <docs-manual-dropdown></docs-manual-dropdown>
</docs-example-section>

<docs-example-section
    fragment="dropdown-button-groups"
    title="Button groups and split buttons"
    description="Place dropdown toggles inside Bootstrap button groups, including a split action."
    html-code="$.examples.buttonGroups.html">
    <docs-dropdown-button-groups></docs-dropdown-button-groups>
</docs-example-section>

<docs-example-section
    fragment="dropdown-disabled-items"
    title="Disabled items"
    description="Use ng-disabled to update disabled dropdown items dynamically."
    html-code="$.examples.disabledItems.html"
    ts-code="$.examples.disabledItems.typescript">
    <docs-dropdown-disabled-items></docs-dropdown-disabled-items>
</docs-example-section>

<docs-example-section
    fragment="dropdown-form"
    title="Dropdown form"
    description="Place an AngularJS form inside the menu and keep it open while interacting with its fields."
    html-code="$.examples.form.html"
    ts-code="$.examples.form.typescript">
    <docs-dropdown-form></docs-dropdown-form>
</docs-example-section>

<docs-example-section
    fragment="dropdown-body"
    title="Body container"
    description="Append the menu to the document body when an ancestor clips overflowing content."
    html-code="$.examples.body.html">
    <docs-dropdown-body></docs-dropdown-body>
</docs-example-section>

<docs-example-section
    fragment="dropdown-navbar"
    title="Dynamic positioning in a navbar"
    description="Override the navbar's static default with dynamic Popper positioning."
    html-code="$.examples.navbar.html">
    <docs-dropdown-navbar></docs-dropdown-navbar>
</docs-example-section>

<docs-example-section
    fragment="dropdown-global"
    title="Global configuration"
    description="Change NgbDropdownConfig once to provide shared defaults without local inputs."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-dropdown-global></docs-dropdown-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/nav-examples-page/nav-examples-page.component.html`,`<docs-example-section
    fragment="simple-nav"
    title="Simple nav"
    description="A basic tabbed nav with three items and an associated content outlet."
    html-code="$.examples.simple.html"
    ts-code="$.examples.simple.typescript">
    <docs-simple-nav></docs-simple-nav>
</docs-example-section>

<docs-example-section
    fragment="alternative-nav"
    title="Alternative markup"
    description="Use div elements instead of lists and interchange buttons and anchors as nav links."
    html-code="$.examples.alternative.html"
    ts-code="$.examples.alternative.typescript">
    <docs-alternative-nav></docs-alternative-nav>
</docs-example-section>

<docs-example-section
    fragment="vertical-nav"
    title="Vertical pills"
    description="Combine vertical orientation with Bootstrap nav pills and a side-by-side outlet."
    html-code="$.examples.vertical.html"
    ts-code="$.examples.vertical.typescript">
    <docs-vertical-nav></docs-vertical-nav>
</docs-example-section>

<docs-example-section
    fragment="selecting-nav"
    title="Selecting navs"
    description="Select any nav item programmatically through the NgbNav controller."
    html-code="$.examples.selecting.html"
    ts-code="$.examples.selecting.typescript">
    <docs-selecting-nav></docs-selecting-nav>
</docs-example-section>

<docs-example-section
    fragment="keep-content-nav"
    title="Keep content"
    description="Disable content destruction so form state remains in the DOM while another tab is active."
    html-code="$.examples.keepContent.html"
    ts-code="$.examples.keepContent.typescript">
    <docs-keep-content-nav></docs-keep-content-nav>
</docs-example-section>

<docs-example-section
    fragment="dynamic-nav"
    title="Dynamic navs"
    description="Add new tabs at runtime and safely remove the currently active item."
    html-code="$.examples.dynamic.html"
    ts-code="$.examples.dynamic.typescript">
    <docs-dynamic-nav></docs-dynamic-nav>
</docs-example-section>

<docs-example-section
    fragment="custom-nav"
    title="Custom style"
    description="Build a distinct nav appearance with a small custom class layered over NgbJS behavior."
    html-code="$.examples.custom.html"
    ts-code="$.examples.custom.typescript"
    css-code="$.examples.custom.css">
    <docs-custom-nav></docs-custom-nav>
</docs-example-section>

<docs-example-section
    fragment="nav-global"
    title="Global configuration"
    description="Change NgbNavConfig once to provide orientation, keyboard and content defaults."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-nav-global></docs-nav-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/collapse-examples-page/collapse-examples-page.component.html`,`<docs-example-section
    fragment="simple-collapse"
    title="Simple collapse"
    description="Control the same panel by calling toggle() on its controller or by changing the bound collapsed value."
    html-code="$.examples.simple.html"
    ts-code="$.examples.simple.typescript">
    <docs-simple-collapse></docs-simple-collapse>
</docs-example-section>

<docs-example-section
    fragment="horizontal-collapse"
    title="Horizontal collapse"
    description="Set horizontal to true to animate the element's width instead of its height."
    html-code="$.examples.horizontal.html"
    ts-code="$.examples.horizontal.typescript">
    <docs-horizontal-collapse></docs-horizontal-collapse>
</docs-example-section>

<docs-example-section
    fragment="navbar-collapse"
    title="Responsive navbar"
    description="Combine NgbCollapse with Bootstrap's navbar classes to provide compact navigation on smaller viewports."
    html-code="$.examples.navbar.html"
    ts-code="$.examples.navbar.typescript">
    <docs-navbar-collapse></docs-navbar-collapse>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/datepicker-api-page/datepicker-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-datepicker">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbDatepicker</code></h2><p class="text-body-secondary mb-0">Renders an inline calendar and integrates its selected date with AngularJS forms.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-datepicker ng-model="date"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Integration</dt><dd class="col-sm-9 mb-0">Optionally reads <code>ng-model</code> and <code>ng-disabled</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Default</th><th>Description</th></tr></thead><tbody>
            <tr><td><code>calendar</code></td><td><code>&lt;?</code></td><td><code>NgbCalendarGregorian</code></td><td>Calendar system used for date arithmetic.</td></tr>
            <tr><td><code>date-adapter</code></td><td><code>&lt;?</code></td><td><code>NgbDateStructAdapter</code></td><td>Converts between the model and <code>NgbDateStruct</code>.</td></tr>
            <tr><td><code>i18n</code></td><td><code>&lt;?</code></td><td><code>NgbDatepickerI18nDefault</code></td><td>Supplies localized labels.</td></tr>
            <tr><td><code>display-months</code></td><td><code>&lt;?</code></td><td><code>1</code></td><td>Number of visible months.</td></tr>
            <tr><td><code>first-day-of-week</code></td><td><code>&lt;?</code></td><td><code>1</code></td><td>First weekday, from 1 (Monday) to 7 (Sunday).</td></tr>
            <tr><td><code>min-date</code>, <code>max-date</code></td><td><code>&lt;?</code></td><td><code>undefined</code></td><td>Selectable date boundaries.</td></tr>
            <tr><td><code>start-date</code></td><td><code>&lt;?</code></td><td><code>undefined</code></td><td>Initial month displayed when no model is selected.</td></tr>
            <tr><td><code>navigation</code></td><td><code>@?</code></td><td><code>"select"</code></td><td>Accepts <code>"select"</code>, <code>"arrows"</code> or <code>"none"</code>.</td></tr>
            <tr><td><code>outside-days</code></td><td><code>@?</code></td><td><code>"visible"</code></td><td>Controls days outside the current month.</td></tr>
            <tr><td><code>weekdays</code></td><td><code>&lt;?</code></td><td><code>"narrow"</code></td><td>Controls weekday labels and width.</td></tr>
            <tr><td><code>show-week-numbers</code></td><td><code>&lt;?</code></td><td><code>false</code></td><td>Displays week numbers.</td></tr>
            <tr><td><code>mark-disabled</code></td><td><code>&lt;?</code></td><td><code>undefined</code></td><td>Function that disables individual dates.</td></tr>
            <tr><td><code>day-template</code>, <code>footer-template</code>, <code>content-template</code></td><td><code>&lt;?</code></td><td>Built-in templates</td><td>Customize calendar rendering.</td></tr>
            <tr><td><code>day-template-data</code></td><td><code>&lt;?</code></td><td><code>undefined</code></td><td>Supplies custom data to day templates.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>date-select</code></td><td><code>$event: NgbDate</code></td><td>A date is selected.</td></tr>
        <tr><td><code>navigate</code></td><td><code>$event: NgbDatepickerNavigateEvent</code></td><td>The visible month changes.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-input-datepicker">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbInputDatepicker</code></h2><p class="text-body-secondary mb-0">Adds a popup calendar to an input while preserving AngularJS model parsing and validation.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;input ng-model="date" ngb-datepicker&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0"><code>ng-model</code>; optionally reads <code>ng-disabled</code>.</dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">Accepts the calendar inputs above plus the popup-specific inputs below.</p>
    <h3 class="h5 mt-4 mb-3">Popup inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Default</th><th>Description</th></tr></thead><tbody>
            <tr><td><code>auto-close</code></td><td><code>&lt;?</code></td><td><code>true</code></td><td>Controls which selections or outside clicks close the popup.</td></tr>
            <tr><td><code>container</code></td><td><code>@?</code></td><td><code>null</code></td><td>Accepts <code>"body"</code> to move the popup.</td></tr>
            <tr><td><code>placement</code></td><td><code>&lt;?</code></td><td><code>$config.placement</code></td><td>Preferred Popper placements.</td></tr>
            <tr><td><code>popper-options</code></td><td><code>&lt;?</code></td><td><code>$config.popperOptions</code></td><td>Transforms Popper options.</td></tr>
            <tr><td><code>position-target</code></td><td><code>&lt;?</code></td><td>Input element</td><td>Overrides the positioning target.</td></tr>
            <tr><td><code>restore-focus</code></td><td><code>&lt;?</code></td><td><code>true</code></td><td>Restores focus after closing.</td></tr>
            <tr><td><code>datepicker-class</code></td><td><code>@?</code></td><td>—</td><td>Adds a class to the popup calendar.</td></tr>
            <tr><td><code>parser-formatter</code></td><td><code>&lt;?</code></td><td><code>NgbDateISOParserFormatter</code></td><td>Parses and formats the input text.</td></tr>
            <tr><td><code>disabled</code></td><td><code>&lt;?</code></td><td><code>false</code></td><td>Disables input behavior.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Additional output</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>closed</code></td><td>None</td><td>The popup calendar closes.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-datepicker-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbDatepickerConfig</code></h2><p class="text-body-secondary mb-0">Provides defaults for inline and popup calendars.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>displayMonths</code>, <code>firstDayOfWeek</code></td><td><code>1</code></td></tr>
        <tr><td><code>navigation</code></td><td><code>"select"</code></td></tr>
        <tr><td><code>outsideDays</code></td><td><code>"visible"</code></td></tr>
        <tr><td><code>weekdays</code></td><td><code>"narrow"</code></td></tr>
        <tr><td><code>showWeekNumbers</code></td><td><code>false</code></td></tr>
        <tr><td><code>minDate</code>, <code>maxDate</code>, <code>startDate</code>, templates and callbacks</td><td><code>undefined</code></td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-input-datepicker-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbInputDatepickerConfig</code></h2><p class="text-body-secondary mb-0">Extends <code>NgbDatepickerConfig</code> with popup defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Additional properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>autoClose</code></td><td><code>true</code></td></tr>
        <tr><td><code>container</code></td><td><code>null</code></td></tr>
        <tr><td><code>placement</code></td><td><code>["bottom-start", "bottom-end", "top-start", "top-end"]</code></td></tr>
        <tr><td><code>popperOptions</code></td><td>Identity transform</td></tr>
        <tr><td><code>restoreFocus</code></td><td><code>true</code></td></tr>
        <tr><td><code>positionTarget</code></td><td><code>undefined</code></td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-datepicker-extension-contracts">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Interfaces</p><h2 class="h3 mb-2">Calendar and formatting contracts</h2><p class="text-body-secondary mb-0">Pass custom implementations through the corresponding datepicker inputs.</p></header>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Contract</th><th>Purpose</th><th>Core methods</th></tr></thead><tbody>
        <tr><td><code>NgbCalendar</code></td><td>Date arithmetic and calendar rules.</td><td><code>getNext()</code>, <code>getPrev()</code>, <code>getToday()</code>, <code>isValid()</code></td></tr>
        <tr><td><code>NgbDateAdapter&lt;D&gt;</code></td><td>Application model conversion.</td><td><code>fromModel()</code>, <code>toModel()</code></td></tr>
        <tr><td><code>NgbDateParserFormatter</code></td><td>Popup input text conversion.</td><td><code>parse()</code>, <code>format()</code></td></tr>
        <tr><td><code>NgbDatepickerI18n</code></td><td>Localized month, weekday, day and ARIA labels.</td><td><code>getWeekdayLabel()</code>, <code>getMonthFullName()</code>, <code>getDayAriaLabel()</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/collapse-api-page/collapse-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-collapse">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbCollapse</code></h2>
        <p class="text-body-secondary mb-0">
            Controls the visible state of an element and runs vertical or horizontal Bootstrap collapse transitions.
        </p>
    </header>

    <dl class="row gy-2 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;div ngb-collapse="isCollapsed"&gt;</code></dd>
    </dl>

    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle">
            <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>ngb-collapse</code></td><td><code>&lt;</code></td><td><code>boolean</code></td><td>Required</td><td>Sets whether the host is collapsed.</td></tr>
                <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables transition animation.</td></tr>
                <tr><td><code>horizontal</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Uses width instead of height for the transition.</td></tr>
            </tbody>
        </table>
    </div>

    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead>
            <tbody>
                <tr><td><code>ngb-collapse-change</code></td><td><code>&amp;?</code></td><td><code>$event: boolean</code></td><td><code>toggle()</code> changes the collapsed state.</td></tr>
                <tr><td><code>shown</code></td><td><code>&amp;?</code></td><td>None</td><td>The expand transition finishes.</td></tr>
                <tr><td><code>ngb-hidden</code></td><td><code>&amp;?</code></td><td>None</td><td>The collapse transition finishes.</td></tr>
            </tbody>
        </table>
    </div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-collapse-config">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Service</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbCollapseConfig</code></h2>
        <p class="text-body-secondary mb-0">Provides application-wide defaults for collapse directives.</p>
    </header>

    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>animation</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Default transition animation state.</td></tr>
                <tr><td><code>horizontal</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Default transition orientation.</td></tr>
            </tbody>
        </table>
    </div>
</section>
`),e.put(`src/app/features/lib/pages/carousel-examples-page/carousel-examples-page.component.html`,`<docs-example-section
    fragment="carousel-simple"
    title="Simple carousel"
    description="A carousel using the default options, including navigation arrows and indicators."
    html-code="$.examples.simple.html">
    <docs-carousel-simple></docs-carousel-simple>
</docs-example-section>

<docs-example-section
    fragment="carousel-keyboard"
    title="Keyboard navigation"
    description="A carousel without visible controls or indicators that moves only with the left and right arrow keys."
    html-code="$.examples.keyboard.html">
    <docs-carousel-keyboard></docs-carousel-keyboard>
</docs-example-section>

<docs-example-section
    fragment="carousel-controls"
    title="Pause controls"
    description="Try the native hover and focus options, then compose navigation behavior from slide events."
    html-code="$.examples.controls.html"
    ts-code="$.examples.controls.typescript">
    <docs-carousel-controls></docs-carousel-controls>
</docs-example-section>

<docs-example-section
    fragment="carousel-global"
    title="Global configuration"
    description="Change NgbCarouselConfig once to define carousel defaults without adding local inputs."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-carousel-global></docs-carousel-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/datepicker-calendars-page/datepicker-calendars-page.component.html`,`<div class="alert alert-light border mb-5" role="note">
    <div class="d-flex gap-3 align-items-start">
        <i class="bi bi-calendar3 text-primary mt-1" aria-hidden="true"></i>
        <div>
            <h2 class="h5 mb-2">Calendar implementations</h2>
            <p class="text-body-secondary mb-0"><code>NgbDatepicker</code> delegates date calculations to the abstract <code>NgbCalendar</code>. Gregorian is the default, but each instance can receive a calendar and its matching internationalization strategy.</p>
        </div>
    </div>
</div>

<section id="calendar-hebrew" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-hebrew">
    <h2 class="h3 mb-2">Hebrew</h2><p class="text-body-secondary mb-4"><code>NgbCalendarHebrew</code> with <code>NgbDatepickerI18nHebrew</code>, including Hebrew month names and numerals.</p>
    <div dir="rtl" class="d-inline-block"><ngb-datepicker ng-model="$.calendars.hebrew.date" calendar="$.calendars.hebrew.calendar" i18n="$.calendars.hebrew.i18n"></ngb-datepicker></div>
</section>

<section id="calendar-jalali" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-jalali">
    <h2 class="h3 mb-2">Jalali</h2><p class="text-body-secondary mb-4"><code>NgbCalendarPersian</code> performs Persian calendar calculations; the labels are supplied independently through <code>NgbDatepickerI18n</code>.</p>
    <div dir="rtl" class="d-inline-block"><ngb-datepicker ng-model="$.calendars.jalali.date" calendar="$.calendars.jalali.calendar" i18n="$.calendars.jalali.i18n"></ngb-datepicker></div>
</section>

<section id="calendar-islamic-civil" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-islamic-civil">
    <h2 class="h3 mb-2">Islamic Civil</h2><p class="text-body-secondary mb-4"><code>NgbCalendarIslamicCivil</code> uses the tabular civil Hijri calculation.</p>
    <div dir="rtl" class="d-inline-block"><ngb-datepicker ng-model="$.calendars.islamicCivil.date" calendar="$.calendars.islamicCivil.calendar" i18n="$.calendars.islamicCivil.i18n"></ngb-datepicker></div>
</section>

<section id="calendar-islamic-umalqura" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-islamic-umalqura">
    <h2 class="h3 mb-2">Islamic Umm al-Qura</h2><p class="text-body-secondary mb-4"><code>NgbCalendarIslamicUmalqura</code> uses the Umm al-Qura calendar data while sharing the Hijri presentation layer.</p>
    <div dir="rtl" class="d-inline-block"><ngb-datepicker ng-model="$.calendars.islamicUmalqura.date" calendar="$.calendars.islamicUmalqura.calendar" i18n="$.calendars.islamicUmalqura.i18n"></ngb-datepicker></div>
</section>

<section id="calendar-buddhist" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-buddhist">
    <h2 class="h3 mb-2">Buddhist</h2><p class="text-body-secondary mb-4"><code>NgbCalendarBuddhist</code> keeps Gregorian month rules and presents years in the Buddhist era.</p>
    <ngb-datepicker ng-model="$.calendars.buddhist.date" calendar="$.calendars.buddhist.calendar" i18n="$.calendars.buddhist.i18n"></ngb-datepicker>
</section>

<section id="calendar-ethiopian" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-ethiopian">
    <h2 class="h3 mb-2">Ethiopian</h2><p class="text-body-secondary mb-4"><code>NgbCalendarEthiopian</code> and <code>NgbDatepickerI18nAmharic</code> include the thirteenth Ethiopian month.</p>
    <ngb-datepicker ng-model="$.calendars.ethiopian.date" calendar="$.calendars.ethiopian.calendar" i18n="$.calendars.ethiopian.i18n"></ngb-datepicker>
</section>

<section id="calendar-intergalactic" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-intergalactic">
    <h2 class="h3 mb-2">Intergalactic Standard <span class="small fw-normal text-body-secondary">(just for fun)</span></h2>
    <p class="text-body-secondary mb-4">A custom <code>NgbDatepickerI18n</code> translates Gregorian labels into the Standard Galactic Alphabet. The calendar math stays Gregorian—space-time remains someone else's problem.</p>
    <ngb-datepicker ng-model="$.calendars.intergalactic.date" calendar="$.calendars.intergalactic.calendar" i18n="$.calendars.intergalactic.i18n"></ngb-datepicker>
</section>
`),e.put(`src/app/features/lib/pages/alert-examples-page/alert-examples-page.component.html`,`<docs-example-section
    fragment="simple-alert"
    title="Simple alert"
    description="A basic alert with a fixed type and no dismiss button."
    html-code="$.examples.simple.html">
    <docs-simple-alert></docs-simple-alert>
</docs-example-section>

<docs-example-section
    fragment="alert-closeable"
    title="Closeable alerts"
    description="Four dismissible alerts: two close with animation and two close immediately."
    html-code="$.examples.closeable.html"
    ts-code="$.examples.closeable.typescript">
    <docs-alert-closeable></docs-alert-closeable>
</docs-example-section>

<docs-example-section
    fragment="self-closing-alert"
    title="Self-closing alert"
    description="A timeout updates the countdown and closes the alert when it reaches zero."
    html-code="$.examples.selfClosing.html"
    ts-code="$.examples.selfClosing.typescript">
    <docs-self-closing-alert></docs-self-closing-alert>
</docs-example-section>

<docs-example-section
    fragment="alert-custom"
    title="Custom alert"
    description="A custom alert type styled through the alert-custom class and Bootstrap variables."
    html-code="$.examples.custom.html"
    css-code="$.examples.custom.css">
    <docs-alert-custom></docs-alert-custom>
</docs-example-section>

<docs-example-section
    fragment="alert-global"
    title="Global configuration"
    description="Change NgbAlertConfig once to define defaults for alerts without local inputs."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-alert-global></docs-alert-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/accordion-examples-page/accordion-examples-page.component.html`,`<docs-example-section
    fragment="accordion-simple"
    title="Basic accordion"
    description="Three items with a regular header, a header rendered from a template and a disabled item."
    html-code="$.examples.simple.html">
    <docs-accordion-simple></docs-accordion-simple>
</docs-example-section>

<docs-example-section
    fragment="one-panel-accordion"
    title="One panel at a time"
    description="Opening an item automatically closes the previously expanded panel."
    html-code="$.examples.onePanel.html">
    <docs-one-panel-accordion></docs-one-panel-accordion>
</docs-example-section>

<docs-example-section
    fragment="accordion-toggle-panels"
    title="Programmatic controls"
    description="Use the accordion controller to expand, collapse or toggle panels by id."
    html-code="$.examples.togglePanels.html"
    ts-code="$.examples.togglePanels.typescript">
    <docs-accordion-toggle-panels></docs-accordion-toggle-panels>
</docs-example-section>

<docs-example-section
    fragment="accordion-custom-header"
    title="Custom headers"
    description="Build richer triggers with Bootstrap utilities while keeping the accordion behavior and accessibility state."
    html-code="$.examples.customHeader.html">
    <docs-accordion-custom-header></docs-accordion-custom-header>
</docs-example-section>

<docs-example-section
    fragment="accordion-content"
    title="Preserve panel content"
    description="Keep collapsed content mounted when its local state must survive closing and reopening the panel."
    html-code="$.examples.content.html"
    ts-code="$.examples.content.typescript">
    <docs-accordion-content></docs-accordion-content>
</docs-example-section>

<docs-example-section
    fragment="accordion-global"
    title="Global configuration"
    description="Change NgbAccordionConfig once to define defaults for accordions that do not provide local values."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-accordion-global></docs-accordion-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/dropdown-api-page/dropdown-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-dropdown">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbDropdown</code></h2>
        <p class="text-body-secondary mb-0">Root controller for open state, positioning, focus and auto-close behavior.</p>
    </header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;div ngb-dropdown&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>auto-close</code></td><td><code>&lt;?</code></td><td><code>boolean | "inside" | "outside"</code></td><td><code>true</code></td><td>Controls which interactions close the menu.</td></tr>
            <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>undefined</code></td><td>Exposed by the directive factory; it currently has no runtime effect.</td></tr>
            <tr><td><code>container</code></td><td><code>@?</code></td><td><code>null | "body"</code></td><td><code>null</code></td><td>Moves the menu to the document body.</td></tr>
            <tr><td><code>display</code></td><td><code>&lt;?</code></td><td><code>"dynamic" | "static"</code></td><td>Contextual</td><td>Enables or bypasses Popper positioning.</td></tr>
            <tr><td><code>dropdown-class</code></td><td><code>&lt;?</code></td><td><code>string</code></td><td>—</td><td>Adds a class to the dropdown container.</td></tr>
            <tr><td><code>open</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Sets the open state.</td></tr>
            <tr><td><code>placement</code></td><td><code>&lt;?</code></td><td><code>Placement[]</code></td><td><code>$config.placement</code></td><td>Preferred Popper placements.</td></tr>
            <tr><td><code>popper-options</code></td><td><code>&lt;?</code></td><td><code>function</code></td><td><code>$config.popperOptions</code></td><td>Transforms Popper options.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0">
        <thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead>
        <tbody><tr><td><code>open-change</code></td><td><code>&amp;?</code></td><td><code>$event: boolean</code></td><td>The dropdown opens or closes.</td></tr></tbody>
    </table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-dropdown-anchor">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbDropdownAnchor</code></h2><p class="text-body-secondary mb-0">Marks the element used for positioning without adding click behavior.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;button ngb-dropdown-anchor&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">An ancestor <code>ngb-dropdown</code>.</dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-dropdown-toggle">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbDropdownToggle</code></h2><p class="text-body-secondary mb-0">Extends the anchor with click and keyboard toggle behavior.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;button ngb-dropdown-toggle&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">An ancestor <code>ngb-dropdown</code>.</dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-dropdown-menu">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbDropdownMenu</code></h2><p class="text-body-secondary mb-0">Hosts menu items and coordinates keyboard navigation with the root dropdown.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;div ngb-dropdown-menu&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">An ancestor <code>ngb-dropdown</code>.</dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-dropdown-item">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbDropdownItem</code></h2><p class="text-body-secondary mb-0">Marks an interactive menu entry and integrates with <code>ng-disabled</code>.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;button ngb-dropdown-item&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>tabindex</code></td><td><code>&lt;?</code></td><td><code>string | number</code></td><td><code>0</code></td><td>Sets the enabled tab order.</td></tr>
        <tr><td><code>ng-disabled</code></td><td><code>ngDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables focus and activation.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-dropdown-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbDropdownConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide dropdown defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Type</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>autoClose</code></td><td><code>boolean | "inside" | "outside"</code></td><td><code>true</code></td></tr>
        <tr><td><code>container</code></td><td><code>null | "body"</code></td><td><code>null</code></td></tr>
        <tr><td><code>placement</code></td><td><code>Placement[]</code></td><td><code>["bottom-start", "bottom-end", "top-start", "top-end"]</code></td></tr>
        <tr><td><code>popperOptions</code></td><td><code>function</code></td><td>Identity transform</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/components/vertical-nav/vertical-nav.component.html`,`<div class="d-flex align-items-start gap-3">
    <div
        ngb-nav
        ng-ref="example.nav"
        ng-ref-read="ngbNav"
        active-id="example.activeId"
        orientation="'vertical'"
        class="nav-pills flex-shrink-0">
        <div ngb-nav-item="vertical-profile">
            <button type="button" ngb-nav-link>Profile</button>
            <ng-template ngb-nav-content>
                <h3 class="h5">Profile</h3>
                <p class="mb-0">Manage your public information and preferences.</p>
            </ng-template>
        </div>
        <div ngb-nav-item="vertical-security">
            <button type="button" ngb-nav-link>Security</button>
            <ng-template ngb-nav-content>
                <h3 class="h5">Security</h3>
                <p class="mb-0">Review sessions, passwords and account access.</p>
            </ng-template>
        </div>
        <div ngb-nav-item="vertical-notifications">
            <button type="button" ngb-nav-link>Notifications</button>
            <ng-template ngb-nav-content>
                <h3 class="h5">Notifications</h3>
                <p class="mb-0">Choose when and how the application contacts you.</p>
            </ng-template>
        </div>
    </div>

    <div class="border rounded p-3 flex-grow-1" ngb-nav-outlet="example.nav"></div>
</div>
`),e.put(`src/app/features/lib/pages/typeahead-examples-page/typeahead-examples-page.component.html`,`<docs-example-section fragment="simple-typeahead" title="Simple Typeahead" description="Debounce a local string search, require two characters and limit the result set." html-code="$.examples.simple.html" ts-code="$.examples.simple.typescript">
    <docs-simple-typeahead></docs-simple-typeahead>
</docs-example-section>

<docs-example-section fragment="focus-typeahead" title="Open on focus" description="Merge an explicit focus stream with user input so an empty field can display suggestions immediately." html-code="$.examples.focus.html" ts-code="$.examples.focus.typescript">
    <docs-focus-typeahead></docs-focus-typeahead>
</docs-example-section>

<docs-example-section fragment="formatted-typeahead" title="Formatted results" description="Transform result labels without changing the selected model value." html-code="$.examples.formatted.html" ts-code="$.examples.formatted.typescript">
    <docs-formatted-typeahead></docs-formatted-typeahead>
</docs-example-section>

<docs-example-section fragment="exact-typeahead" title="Select on exact" description="Select an object automatically when its formatted label is the only exact match." html-code="$.examples.exact.html" ts-code="$.examples.exact.typescript">
    <docs-exact-typeahead></docs-exact-typeahead>
</docs-example-section>

<docs-example-section fragment="wikipedia-typeahead" title="Wikipedia search" description="Retrieve remote suggestions through AngularJS $http with debounce, stale-response switching and error feedback." html-code="$.examples.wikipedia.html" ts-code="$.examples.wikipedia.typescript">
    <docs-wikipedia-typeahead></docs-wikipedia-typeahead>
</docs-example-section>

<docs-example-section fragment="template-results-typeahead" title="Template for results" description="Render object results with a custom template, contextual term highlighting and additional metadata." html-code="$.examples.templateResults.html" ts-code="$.examples.templateResults.typescript">
    <docs-template-results-typeahead></docs-template-results-typeahead>
</docs-example-section>

<docs-example-section fragment="non-editable-typeahead" title="Prevent manual entry" description="Keep the model null until the user chooses a valid object from the suggestion list." html-code="$.examples.nonEditable.html" ts-code="$.examples.nonEditable.typescript">
    <docs-non-editable-typeahead></docs-non-editable-typeahead>
</docs-example-section>

<docs-example-section fragment="typeahead-global" title="Global configuration of typeaheads" description="Configure hint completion, exact selection and body container defaults through NgbTypeaheadConfig." html-code="$.examples.global.html" ts-code="$.examples.global.typescript">
    <docs-typeahead-global></docs-typeahead-global>
</docs-example-section>
`),e.put(`src/app/features/lib/components/typeahead-global/typeahead-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">Hint completion, exact-match selection and a popup appended to body.</p>
    </div>
</div>

<label class="form-label" for="global-typeahead">Search for a state</label>
<input id="global-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" placeholder="Try Cal">
`),e.put(`src/app/features/lib/pages/toast-examples-page/toast-examples-page.component.html`,`<docs-example-section fragment="inline-toast" title="Declarative inline usage" description="Render static body-only and text-header toasts directly in the page." html-code="$.examples.inline.html" ts-code="$.examples.inline.typescript">
    <docs-inline-toast></docs-inline-toast>
</docs-example-section>

<docs-example-section fragment="template-header-toast" title="Using a Template as header" description="Project an ng-template to build a richer header with custom markup." html-code="$.examples.templateHeader.html" ts-code="$.examples.templateHeader.typescript">
    <docs-template-header-toast></docs-template-header-toast>
</docs-example-section>

<docs-example-section fragment="closeable-toast" title="Closeable toast" description="Handle hidden to remove the toast and recreate it after a short delay." html-code="$.examples.closeable.html" ts-code="$.examples.closeable.typescript">
    <docs-closeable-toast></docs-closeable-toast>
</docs-example-section>

<docs-example-section fragment="prevent-autohide-toast" title="Prevent autohide on mouseover" description="Pause the autohide timer while the pointer remains over the toast and restart it on mouseleave." html-code="$.examples.preventAutohide.html" ts-code="$.examples.preventAutohide.typescript">
    <docs-prevent-autohide-toast></docs-prevent-autohide-toast>
</docs-example-section>

<docs-example-section fragment="toast-management" title="Toast management service" description="Create, remove and clear multiple notifications through a reusable AngularJS service." html-code="$.examples.management.html" ts-code="$.examples.management.typescript">
    <docs-toast-management></docs-toast-management>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/datepicker-examples-page/datepicker-examples-page.component.html`,`<docs-example-section fragment="basic-datepicker" title="Basic datepicker" description="Bind an NgbDateStruct model to an inline calendar." html-code="$.examples.basic.html" ts-code="$.examples.basic.typescript"><docs-basic-datepicker></docs-basic-datepicker></docs-example-section>
<docs-example-section fragment="popup-datepicker" title="Datepicker in a popup" description="Attach the datepicker to an input and control its popup from a compact calendar button." html-code="$.examples.popup.html" ts-code="$.examples.popup.typescript"><docs-popup-datepicker></docs-popup-datepicker></docs-example-section>
<docs-example-section fragment="multiple-months-datepicker" title="Multiple months" description="Display two consecutive months while keeping a single date model." html-code="$.examples.multiple.html" ts-code="$.examples.multiple.typescript"><docs-multiple-months-datepicker></docs-multiple-months-datepicker></docs-example-section>
<docs-example-section fragment="range-datepicker" title="Range selection" description="Compose a date range from dateSelect and a custom day template with hover feedback." html-code="$.examples.range.html" ts-code="$.examples.range.typescript" css-code="$.examples.range.css"><docs-range-datepicker></docs-range-datepicker></docs-example-section>
<docs-example-section fragment="range-popup-datepicker" title="Range selection in a popup" description="Use the same range state and custom day view inside an input datepicker." html-code="$.examples.rangePopup.html" ts-code="$.examples.rangePopup.typescript" css-code="$.examples.rangePopup.css"><docs-range-popup-datepicker></docs-range-popup-datepicker></docs-example-section>
<docs-example-section fragment="disabled-datepicker" title="Disabled datepicker" description="Drive the disabled state through AngularJS ng-disabled." html-code="$.examples.disabled.html" ts-code="$.examples.disabled.typescript"><docs-disabled-datepicker></docs-disabled-datepicker></docs-example-section>
<docs-example-section fragment="datepicker-custom-adapter" title="Custom date adapter and formatter" description="Keep a string application model while presenting and parsing a different input format." html-code="$.examples.adapter.html" ts-code="$.examples.adapter.typescript"><docs-datepicker-custom-adapter></docs-datepicker-custom-adapter></docs-example-section>
<docs-example-section fragment="datepicker-i18n" title="Internationalization of datepickers" description="Supply labels and accessible date descriptions per datepicker instance through NgbDatepickerI18n." html-code="$.examples.i18n.html" ts-code="$.examples.i18n.typescript"><docs-datepicker-i18n></docs-datepicker-i18n></docs-example-section>
<docs-example-section fragment="datepicker-custom-day" title="Custom day view" description="Render weekends, today, selection and focus states with a custom day template." html-code="$.examples.customDay.html" ts-code="$.examples.customDay.typescript" css-code="$.examples.customDay.css"><docs-datepicker-custom-day></docs-datepicker-custom-day></docs-example-section>
<docs-example-section fragment="datepicker-custom-month" title="Custom month layout" description="Replace the datepicker content while reusing its public month view and navigation API." html-code="$.examples.customMonth.html" ts-code="$.examples.customMonth.typescript" css-code="$.examples.customMonth.css"><docs-datepicker-custom-month></docs-datepicker-custom-month></docs-example-section>
<docs-example-section fragment="datepicker-footer" title="Footer template" description="Add Today and Clear actions below the calendar with a footer template." html-code="$.examples.footer.html" ts-code="$.examples.footer.typescript"><docs-datepicker-footer></docs-datepicker-footer></docs-example-section>
<docs-example-section fragment="datepicker-position-target" title="Position target" description="Trigger the popup from an input while positioning it against a separate element." html-code="$.examples.position.html" ts-code="$.examples.position.typescript"><docs-datepicker-position-target></docs-datepicker-position-target></docs-example-section>
<docs-example-section fragment="datepicker-keyboard" title="Custom keyboard navigation" description="Add application-specific month navigation keys without removing the built-in keyboard behavior." html-code="$.examples.keyboard.html" ts-code="$.examples.keyboard.typescript"><docs-datepicker-keyboard></docs-datepicker-keyboard></docs-example-section>
<docs-example-section fragment="datepicker-global" title="Global configuration of datepickers" description="Change defaults for inline and input datepickers through their configuration services." html-code="$.examples.global.html" ts-code="$.examples.global.typescript"><docs-datepicker-global></docs-datepicker-global></docs-example-section>
`),e.put(`src/app/features/lib/pages/carousel-api-page/carousel-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-carousel">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Component</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbCarousel</code></h2>
        <p class="text-body-secondary mb-0">Coordinates slides, navigation, cycling, pause behavior and transitions.</p>
    </header>

    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-carousel&gt;</code></dd></dl>

    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle">
            <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>active-id</code></td><td><code>@?</code></td><td><code>string</code></td><td>First slide</td><td>Identifies the active slide.</td></tr>
                <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables slide transitions.</td></tr>
                <tr><td><code>interval</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>5000</code></td><td>Delay between automatic slides in milliseconds; <code>0</code> disables cycling.</td></tr>
                <tr><td><code>keyboard</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Enables keyboard navigation.</td></tr>
                <tr><td><code>pause-on-focus</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Pauses cycling while focused.</td></tr>
                <tr><td><code>pause-on-hover</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Pauses cycling while hovered.</td></tr>
                <tr><td><code>show-navigation-arrows</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Displays previous and next controls.</td></tr>
                <tr><td><code>show-navigation-indicators</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Displays slide indicators.</td></tr>
                <tr><td><code>wrap</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Wraps navigation at the first and last slide.</td></tr>
            </tbody>
        </table>
    </div>

    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead>
            <tbody>
                <tr><td><code>slide</code></td><td><code>&amp;?</code></td><td><code>$event: NgbSlideEvent</code></td><td>A slide transition starts.</td></tr>
                <tr><td><code>slid</code></td><td><code>&amp;?</code></td><td><code>$event: NgbSlideEvent</code></td><td>A slide transition finishes.</td></tr>
            </tbody>
        </table>
    </div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-slide">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbSlide</code></h2>
        <p class="text-body-secondary mb-0">Marks projected content as a carousel slide.</p>
    </header>
    <dl class="row gy-2 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ng-template ngb-slide&gt;</code></dd>
        <dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">An ancestor <code>ngb-carousel</code>.</dd>
    </dl>
    <h3 class="h5 mt-4 mb-3">Bindings</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Name</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>id</code></td><td><code>@?</code></td><td><code>string</code></td><td>Generated id</td><td>Identifies the slide.</td></tr>
                <tr><td><code>slid</code></td><td><code>&amp;?</code></td><td><code>$event: NgbSingleSlideEvent</code></td><td>—</td><td>Runs when this slide completes a transition.</td></tr>
            </tbody>
        </table>
    </div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-carousel-config">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Service</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbCarouselConfig</code></h2>
        <p class="text-body-secondary mb-0">Provides application-wide carousel defaults.</p>
    </header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Property</th><th>Type</th><th>Default</th></tr></thead>
            <tbody>
                <tr><td><code>animation</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td></tr>
                <tr><td><code>interval</code></td><td><code>number</code></td><td><code>5000</code></td></tr>
                <tr><td><code>wrap</code>, <code>keyboard</code>, <code>pauseOnFocus</code>, <code>pauseOnHover</code></td><td><code>boolean</code></td><td><code>true</code></td></tr>
                <tr><td><code>showNavigationArrows</code>, <code>showNavigationIndicators</code></td><td><code>boolean</code></td><td><code>true</code></td></tr>
            </tbody>
        </table>
    </div>
</section>
`),e.put(`src/app/features/lib/components/wikipedia-typeahead/wikipedia-typeahead.component.html`,`<label class="form-label" for="wikipedia-typeahead">Search for a Wikipedia page</label>
<input id="wikipedia-typeahead" type="text" class="form-control" ng-class="{ 'is-invalid': example.searchFailed }" ng-model="example.model" ngb-typeahead="example.search" placeholder="Wikipedia search">
<div class="form-text" ng-if="example.searching">Searching…</div>
<div class="invalid-feedback" ng-if="example.searchFailed">Suggestions could not be loaded.</div>
<p class="small text-body-secondary mt-2 mb-0">Model: <strong>{{ example.model || 'empty' }}</strong></p>
`),e.put(`src/app/features/lib/pages/accordion-api-page/accordion-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordion</code></h2>
        <p class="text-body-secondary mb-0">
            Root directive that coordinates all accordion items. It applies the Bootstrap accordion structure,
            controls whether multiple items may remain open and exposes methods for toggling items by id.
        </p>
    </header>

    <dl class="row gy-3 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;div ngb-accordion&gt;</code></dd>

    </dl>

    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle">
            <thead>
                <tr>
                    <th scope="col">Input</th>
                    <th scope="col">Binding</th>
                    <th scope="col">Type</th>
                    <th scope="col">Default</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>animation</code></td>
                    <td><code>&lt;?</code></td>
                    <td><code>boolean</code></td>
                    <td><code>$config.animation</code></td>
                    <td>Enables the collapse transition.</td>
                </tr>
                <tr>
                    <td><code>close-others</code></td>
                    <td><code>&lt;?</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>Closes the currently expanded item before another one opens.</td>
                </tr>
                <tr>
                    <td><code>destroy-on-hide</code></td>
                    <td><code>&lt;?</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Removes a collapsed item's body view from the DOM.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead>
                <tr>
                    <th scope="col">Output</th>
                    <th scope="col">Binding</th>
                    <th scope="col">Payload</th>
                    <th scope="col">Emitted when</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>show</code></td>
                    <td><code>&amp;?</code></td>
                    <td><code>$event: string</code></td>
                    <td>An item starts expanding; <code>$event</code> is its id.</td>
                </tr>
                <tr>
                    <td><code>shown</code></td>
                    <td><code>&amp;?</code></td>
                    <td><code>$event: string</code></td>
                    <td>An item finishes expanding.</td>
                </tr>
                <tr>
                    <td><code>hide</code></td>
                    <td><code>&amp;?</code></td>
                    <td><code>$event: string</code></td>
                    <td>An item starts collapsing.</td>
                </tr>
                <tr>
                    <td><code>hidden</code></td>
                    <td><code>&amp;?</code></td>
                    <td><code>$event: string</code></td>
                    <td>An item finishes collapsing.</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion-item">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordionItem</code></h2>
        <p class="text-body-secondary mb-0">
            Represents one collapsible item. It owns the item id and collapsed state, applies per-item
            <code>destroyOnHide</code> behavior and emits the item lifecycle events.
        </p>
    </header>

    <dl class="row gy-3 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;div ngb-accordion-item="'details'"&gt;</code></dd>

        <dt class="col-sm-3 fw-semibold">Requires</dt>
        <dd class="col-sm-9 mb-0">
            An ancestor <code>ngb-accordion</code>; optionally reads <code>ng-disabled</code>.
        </dd>

    </dl>

    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle">
            <thead>
                <tr>
                    <th scope="col">Input</th>
                    <th scope="col">Binding</th>
                    <th scope="col">Type</th>
                    <th scope="col">Default</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>ngb-accordion-item</code></td>
                    <td><code>&lt;?</code></td>
                    <td><code>string</code></td>
                    <td>Generated id</td>
                    <td>Expression that identifies the item in the parent accordion.</td>
                </tr>
                <tr>
                    <td><code>collapsed</code></td>
                    <td><code>&lt;?</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Controls the initial and current collapsed state.</td>
                </tr>
                <tr>
                    <td><code>destroy-on-hide</code></td>
                    <td><code>&lt;?</code></td>
                    <td><code>boolean</code></td>
                    <td>Inherited</td>
                    <td>Overrides the parent accordion setting for this item.</td>
                </tr>
                <tr>
                    <td><code>ng-disabled</code></td>
                    <td><code>ngDisabled</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>Prevents the item's trigger from changing its state.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead>
                <tr>
                    <th scope="col">Output</th>
                    <th scope="col">Binding</th>
                    <th scope="col">Payload</th>
                    <th scope="col">Emitted when</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>show</code></td>
                    <td><code>&amp;?</code></td>
                    <td>None</td>
                    <td>This item starts expanding.</td>
                </tr>
                <tr>
                    <td><code>shown</code></td>
                    <td><code>&amp;?</code></td>
                    <td>None</td>
                    <td>This item finishes expanding.</td>
                </tr>
                <tr>
                    <td><code>hide</code></td>
                    <td><code>&amp;?</code></td>
                    <td>None</td>
                    <td>This item starts collapsing.</td>
                </tr>
                <tr>
                    <td><code>hidden</code></td>
                    <td><code>&amp;?</code></td>
                    <td>None</td>
                    <td>This item finishes collapsing.</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion-header">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordionHeader</code></h2>
        <p class="text-body-secondary mb-0">
            Marks an item's heading container. It adds the Bootstrap header class and heading semantics, and
            mirrors the collapsed state without handling the toggle action itself.
        </p>
    </header>

    <dl class="row gy-3 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;h2 ngb-accordion-header&gt;</code></dd>

        <dt class="col-sm-3 fw-semibold">Requires</dt>
        <dd class="col-sm-9 mb-0">An ancestor <code>ngb-accordion-item</code>.</dd>
    </dl>

    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion-button">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordionButton</code></h2>
        <p class="text-body-secondary mb-0">
            Provides the standard Bootstrap accordion trigger. It configures the button type, classes and ARIA
            state, respects <code>ng-disabled</code> and toggles its containing item when clicked.
        </p>
    </header>

    <dl class="row gy-3 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;button ngb-accordion-button&gt;</code></dd>

        <dt class="col-sm-3 fw-semibold">Requires</dt>
        <dd class="col-sm-9 mb-0">
            Ancestor controllers for <code>ngb-accordion-item</code> and <code>ngb-accordion</code>.
        </dd>
    </dl>

    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion-toggle">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordionToggle</code></h2>
        <p class="text-body-secondary mb-0">
            Adds toggle behavior and accessible state to custom header markup. Use it when the trigger should not
            receive the standard <code>accordion-button</code> presentation supplied by
            <code>NgbAccordionButton</code>.
        </p>
    </header>

    <dl class="row gy-3 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;span ngb-accordion-toggle&gt;</code></dd>

        <dt class="col-sm-3 fw-semibold">Requires</dt>
        <dd class="col-sm-9 mb-0">
            Ancestor controllers for <code>ngb-accordion-item</code> and <code>ngb-accordion</code>.
        </dd>
    </dl>

    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion-body">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordionBody</code></h2>
        <p class="text-body-secondary mb-0">
            Hosts the item's body template. Content is supplied through a child <code>ng-template</code> and its
            embedded view is created or destroyed according to the item state and <code>destroyOnHide</code>.
        </p>
    </header>

    <dl class="row gy-3 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;div ngb-accordion-body&gt;</code></dd>

        <dt class="col-sm-3 fw-semibold">Requires</dt>
        <dd class="col-sm-9 mb-0">An ancestor <code>ngb-accordion-item</code>.</dd>
    </dl>

    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion-config">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Service</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordionConfig</code></h2>
        <p class="text-body-secondary mb-0">
            Provides application-wide default values for accordions. Configure it once during application setup;
            values supplied directly to an <code>ngb-accordion</code> instance take precedence.
        </p>
    </header>

    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead>
                <tr>
                    <th scope="col">Property</th>
                    <th scope="col">Type</th>
                    <th scope="col">Default</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>animation</code></td>
                    <td><code>boolean</code></td>
                    <td><code>$config.animation</code></td>
                    <td>Sets the default animation behavior for every accordion.</td>
                </tr>
                <tr>
                    <td><code>closeOthers</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>Sets whether opening an item closes the previously expanded item.</td>
                </tr>
                <tr>
                    <td><code>destroyOnHide</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Sets whether hidden body views are removed from the DOM.</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
`),e.put(`src/app/features/lib/components/tooltip-template/tooltip-template.component.html`,`<ng-template ng-ref="example.contentTemplate">
    <span>Hello, <strong>{{ example.name }}</strong>!</span>
</ng-template>

<div class="d-flex flex-wrap align-items-center gap-2">
    <button type="button" class="btn btn-outline-primary" ngb-tooltip="example.contentTemplate">HTML and bindings</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" ng-click="example.name = example.name === 'NgbJS' ? 'AngularJS' : 'NgbJS'">Change binding</button>
</div>
`),e.put(`src/app/features/lib/components/tooltip-global/tooltip-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">Hover trigger, end placement, body container and a 300 ms opening delay.</p>
    </div>
</div>

<button type="button" class="btn btn-outline-primary" ngb-tooltip="'This instance reads every option from NgbTooltipConfig.'">Hover over me</button>
`),e.put(`src/app/features/lib/components/tooltip-placements/tooltip-placements.component.html`,`<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" placement="'top'" ngb-tooltip="'Tooltip on top'">Top</button>
    <button type="button" class="btn btn-outline-secondary" placement="'end'" ngb-tooltip="'Tooltip on right'">Right</button>
    <button type="button" class="btn btn-outline-secondary" placement="'bottom'" ngb-tooltip="'Tooltip on bottom'">Bottom</button>
    <button type="button" class="btn btn-outline-secondary" placement="'start'" ngb-tooltip="'Tooltip on left'">Left</button>
</div>
`),e.put(`src/app/features/lib/pages/alert-api-page/alert-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-alert">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Component</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAlert</code></h2>
        <p class="text-body-secondary mb-0">
            Displays contextual feedback and optionally provides a dismiss action with an animated close transition.
        </p>
    </header>

    <dl class="row gy-2 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;ngb-alert&gt;</code></dd>
    </dl>

    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle">
            <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables the close transition.</td></tr>
                <tr><td><code>dismissible</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Shows the dismiss button.</td></tr>
                <tr><td><code>type</code></td><td><code>@?</code></td><td><code>string</code></td><td><code>"warning"</code></td><td>Sets the Bootstrap contextual type.</td></tr>
            </tbody>
        </table>
    </div>

    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead>
            <tbody>
                <tr><td><code>closed</code></td><td><code>&amp;?</code></td><td>None</td><td>The close transition finishes.</td></tr>
            </tbody>
        </table>
    </div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-alert-config">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Service</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAlertConfig</code></h2>
        <p class="text-body-secondary mb-0">Provides application-wide defaults for alert instances.</p>
    </header>

    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>animation</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Default close animation state.</td></tr>
                <tr><td><code>dismissible</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Default dismissible state.</td></tr>
                <tr><td><code>type</code></td><td><code>string</code></td><td><code>"warning"</code></td><td>Default contextual type.</td></tr>
            </tbody>
        </table>
    </div>
</section>
`),e.put(`src/app/features/lib/components/tooltip-triggers/tooltip-triggers.component.html`,`<p class="mb-3">Custom events can be paired as <code>mouseenter:mouseleave</code>.</p>
<button type="button" class="btn btn-outline-secondary mb-4" ngb-tooltip="'Shown while the pointer is over the trigger'" triggers="'mouseenter:mouseleave'">Hover over me</button>

<p class="mb-3">Manual triggers delegate opening and closing to application code.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-primary" ngb-tooltip="'Manually controlled tooltip'" triggers="'manual'" auto-close="false" ng-ref="example.manual" ng-ref-read="ngbTooltip" ng-click="example.manual.open()">Open tooltip</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.manual.close()">Close tooltip</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.manual.toggle()">Toggle tooltip</button>
</div>
`),e.put(`src/app/features/lib/components/tooltip-delays/tooltip-delays.component.html`,`<p>Move the pointer into the tooltip before its close delay expires to keep it open.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="'Opens after 300 ms and closes after 500 ms.'" triggers="'mouseenter:mouseleave'" open-delay="300" close-delay="500">300 / 500 ms</button>
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="'Opens after one second and closes after two.'" triggers="'mouseenter:mouseleave'" open-delay="1000" close-delay="2000">1 / 2 seconds</button>
</div>
`),e.put(`src/app/features/lib/components/tooltip-custom-class/tooltip-custom-class.component.html`,`<button type="button" class="btn btn-outline-primary" ngb-tooltip="'A custom skin layered on top of Bootstrap tooltip variables.'" tooltip-class="docs-tooltip-custom">
    Tooltip with custom class
</button>
`),e.put(`src/app/features/lib/components/tooltip-custom-target/tooltip-custom-target.component.html`,`<div class="d-flex flex-wrap align-items-baseline gap-2">
    <span>You can hover</span>
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="'The button triggered me, but the text positioned me.'" position-target="#tooltip-position-target">this button</button>
    <span>while the tooltip appears over <strong id="tooltip-position-target" class="text-primary">this target</strong>.</span>
</div>
`),e.put(`src/app/features/lib/components/toast-management/toast-management.component.html`,`<div class="d-flex flex-wrap gap-2 mb-3">
    <button type="button" class="btn btn-primary" ng-click="example.showStandard()">Standard</button>
    <button type="button" class="btn btn-success" ng-click="example.showSuccess()">Success</button>
    <button type="button" class="btn btn-danger" ng-click="example.showDanger()">Danger</button>
    <button type="button" class="btn btn-outline-secondary" ng-click="example.toastService.clear()" ng-disabled="!example.toastService.toasts.length">Clear all</button>
</div>

<div class="toast-container position-static d-flex flex-column gap-2" aria-live="polite" aria-atomic="true">
    <ngb-toast
        ng-repeat="toast in example.toastService.toasts track by toast.id"
        class="{{ toast.className }}"
        autohide="true"
        delay="toast.delay || 5000"
        hidden="example.toastService.remove(toast)">
        {{ toast.body }}
    </ngb-toast>

    <p ng-if="!example.toastService.toasts.length" class="small text-body-secondary mb-0">No active toasts.</p>
</div>
`),e.put(`src/app/features/lib/components/tooltip-context/tooltip-context.component.html`,`<ng-template ng-ref="example.contentTemplate" let-greeting="greeting">{{ greeting }}, <strong>{{ example.name }}</strong>!</ng-template>

<p>Pass a different context each time a tooltip is opened manually.</p>
<div class="d-flex flex-wrap gap-2 mb-4">
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="example.contentTemplate" triggers="'manual'" ng-ref="example.french" ng-ref-read="ngbTooltip" ng-click="example.toggleWithGreeting(example.french, 'Bonjour')">French</button>
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="example.contentTemplate" triggers="'manual'" ng-ref="example.german" ng-ref-read="ngbTooltip" ng-click="example.toggleWithGreeting(example.german, 'Guten Tag')">German</button>
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="example.contentTemplate" triggers="'manual'" ng-ref="example.english" ng-ref-read="ngbTooltip" ng-click="example.toggleWithGreeting(example.english, 'Hello')">English</button>
</div>

<p>Alternatively, provide a default context through <code>tooltip-context</code>.</p>
<button type="button" class="btn btn-outline-secondary" ngb-tooltip="example.contentTemplate" tooltip-context="{ greeting: 'Hola' }">Spanish</button>
`),e.put(`src/app/features/lib/components/tooltip-autoclose/tooltip-autoclose.component.html`,`<ng-template ng-ref="example.contentTemplate">
    <button type="button" class="btn btn-sm btn-light">Click inside</button>
</ng-template>

<p>Every tooltip can also be closed with <kbd>Esc</kbd>.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" triggers="'click'" auto-close="'inside'" ngb-tooltip="example.contentTemplate">Inside clicks</button>
    <button type="button" class="btn btn-outline-secondary" triggers="'click'" auto-close="'outside'" ngb-tooltip="example.contentTemplate">Outside clicks</button>
    <button type="button" class="btn btn-outline-secondary" triggers="'click'" auto-close="true" ngb-tooltip="example.contentTemplate">All clicks</button>
</div>
`),e.put(`src/app/features/lib/components/timepicker-custom-steps/timepicker-custom-steps.component.html`,`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" seconds="true" hour-step="example.hourStep" minute-step="example.minuteStep" second-step="example.secondStep"></ngb-timepicker>

    <div class="row g-3 align-self-stretch">
        <div class="col-sm-4">
            <label class="form-label small" for="timepicker-hour-step">Hour step</label>
            <input id="timepicker-hour-step" class="form-control form-control-sm" type="number" min="1" ng-model="example.hourStep">
        </div>
        <div class="col-sm-4">
            <label class="form-label small" for="timepicker-minute-step">Minute step</label>
            <input id="timepicker-minute-step" class="form-control form-control-sm" type="number" min="1" ng-model="example.minuteStep">
        </div>
        <div class="col-sm-4">
            <label class="form-label small" for="timepicker-second-step">Second step</label>
            <input id="timepicker-second-step" class="form-control form-control-sm" type="number" min="1" ng-model="example.secondStep">
        </div>
    </div>

    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
</div>
`),e.put(`src/app/features/lib/components/timepicker-i18n/timepicker-i18n.component.html`,`<div class="alert alert-light border" role="note">
    Greek period labels supplied by a custom <code>NgbTimepickerI18n</code>:
    <strong>{{ example.i18n.getMorningPeriod() }}</strong> / <strong>{{ example.i18n.getAfternoonPeriod() }}</strong>
</div>

<div class="d-flex align-items-start">
    <ngb-timepicker ng-model="example.time" meridian="true"></ngb-timepicker>
</div>
`),e.put(`src/app/features/lib/components/timepicker-custom-adapter/timepicker-custom-adapter.component.html`,`<p>This adapter represents the application model as an <code>HH:mm:ss</code> string.</p>
<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" seconds="true"></ngb-timepicker>
    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">String model: {{ example.model }}</pre>
</div>
`),e.put(`src/app/features/lib/components/timepicker-validation/timepicker-validation.component.html`,`<p>Select a time between 12:00 and 13:59.</p>

<form name="example.form" novalidate>
    <div class="d-flex flex-column align-items-start gap-2">
        <ngb-timepicker name="lunchtime" ng-model="example.time" docs-timepicker-lunch-validator required></ngb-timepicker>

        <div class="small text-success" ng-if="example.form.lunchtime.$valid">Great choice.</div>
        <div class="small text-danger" ng-if="example.form.lunchtime.$error.required">Select a lunchtime.</div>
        <div class="small text-danger" ng-if="example.form.lunchtime.$error.lunchtime">The selected time is too early or too late.</div>
    </div>
</form>

<hr>
<pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
`),e.put(`src/app/features/lib/components/tooltip-body/tooltip-body.component.html`,`<div class="overflow-hidden border rounded p-4" style="max-width: 24rem">
    <p class="small text-body-secondary">This container clips overflowing descendants.</p>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-secondary" placement="'top'" ngb-tooltip="'Inserted next to the trigger.'">Default</button>
        <button type="button" class="btn btn-outline-primary" placement="'top'" ngb-tooltip="'Appended directly to document.body.'" container="'body'">Append to body</button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/template-results-typeahead/template-results-typeahead.component.html`,`<ng-template ng-ref="example.resultTemplate" let-result="result" let-term="term">
    <span class="d-flex align-items-center gap-2">
        <span class="fs-5" aria-hidden="true">{{ result.flag }}</span>
        <span class="flex-grow-1"><ngb-highlight result="result.name" term="term"></ngb-highlight></span>
        <small class="text-body-secondary">{{ result.region }}</small>
    </span>
</ng-template>

<label class="form-label" for="template-results-typeahead">Search for a country</label>
<input id="template-results-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" result-template="example.resultTemplate" input-formatter="example.formatter" placeholder="Try Mexico">
<pre class="mt-3 mb-0">Model: {{ example.model | json }}</pre>
`),e.put(`src/app/features/lib/components/striped-progress-bar/striped-progress-bar.component.html`,`<div class="vstack gap-3">
    <ngb-progressbar type="success" value="25" striped="true"></ngb-progressbar>
    <ngb-progressbar type="info" value="50" striped="true"></ngb-progressbar>
    <ngb-progressbar type="warning" value="75" striped="true"></ngb-progressbar>
    <ngb-progressbar type="danger" value="100" striped="true"></ngb-progressbar>
    <ngb-progressbar type="primary" value="65" striped="true" animated="true">Animated</ngb-progressbar>
</div>
`),e.put(`src/app/features/lib/components/template-header-toast/template-header-toast.component.html`,`<div class="toast-container position-static">
    <ngb-toast ng-if="example.visible" autohide="false" hidden="example.visible = false">
        <ng-template ngb-toast-header>
            <div class="d-flex align-items-center gap-2 me-auto">
                <i class="bi bi-stars text-primary" aria-hidden="true"></i>
                <strong>Custom header</strong>
                <small class="text-body-secondary">just now</small>
            </div>
        </ng-template>
        The complete header is rendered from an <code>ng-template</code>.
    </ngb-toast>

    <button ng-if="!example.visible" type="button" class="btn btn-sm btn-outline-primary" ng-click="example.visible = true">
        Show toast again
    </button>
</div>
`),e.put(`src/app/features/lib/components/spinners-timepicker/spinners-timepicker.component.html`,`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" spinners="example.spinners"></ngb-timepicker>
    <button type="button" class="btn btn-sm" ng-class="example.spinners ? 'btn-outline-success' : 'btn-outline-secondary'" ng-click="example.spinners = !example.spinners">
        Spinners {{ example.spinners ? 'on' : 'off' }}
    </button>
</div>
`),e.put(`src/app/features/lib/components/simple-progressbar/simple-progressbar.component.html`,`<div class="vstack gap-3">
    <ngb-progressbar type="success" value="25"></ngb-progressbar>
    <ngb-progressbar type="info" value="50"></ngb-progressbar>
    <ngb-progressbar type="warning" value="75"></ngb-progressbar>
    <ngb-progressbar type="danger" value="100"></ngb-progressbar>
    <ngb-progressbar type="primary" value="75"></ngb-progressbar>
    <ngb-progressbar type="secondary" value="50"></ngb-progressbar>
    <ngb-progressbar type="dark" value="25"></ngb-progressbar>
</div>
`),e.put(`src/app/features/lib/components/simple-typeahead/simple-typeahead.component.html`,`<label class="form-label" for="simple-typeahead">Search for a state</label>
<input id="simple-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" placeholder="Type at least two characters">
<p class="small text-body-secondary mt-2 mb-0">Model: <strong>{{ example.model || 'empty' }}</strong></p>
`),e.put(`src/app/features/lib/components/simple-nav/simple-nav.component.html`,`<ul
    ngb-nav
    ng-ref="example.nav"
    ng-ref-read="ngbNav"
    active-id="example.activeId"
    class="nav-tabs">
    <li ngb-nav-item="simple-overview">
        <button type="button" ngb-nav-link>Overview</button>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">A concise overview of the current project.</p>
        </ng-template>
    </li>
    <li ngb-nav-item="simple-features">
        <button type="button" ngb-nav-link>Features</button>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">Explore the features exposed by this library.</p>
        </ng-template>
    </li>
    <li ngb-nav-item="simple-settings">
        <button type="button" ngb-nav-link>Settings</button>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">Adjust the settings for this example.</p>
        </ng-template>
    </li>
</ul>

<div ngb-nav-outlet="example.nav"></div>
`),e.put(`src/app/features/lib/components/simple-dropdown/simple-dropdown.component.html`,`<div class="d-flex flex-wrap align-items-center gap-3 py-5">
    <div ngb-dropdown placement="'bottom-start'">
        <button type="button" class="btn btn-primary" ngb-dropdown-toggle>Bottom dropdown</button>
        <div ngb-dropdown-menu>
            <button type="button" ngb-dropdown-item>Profile</button>
            <button type="button" ngb-dropdown-item>Settings</button>
            <div class="dropdown-divider"></div>
            <button type="button" ngb-dropdown-item>Sign out</button>
        </div>
    </div>

    <div ngb-dropdown placement="'top-start'">
        <button type="button" class="btn btn-outline-primary" ngb-dropdown-toggle>Top dropdown</button>
        <div ngb-dropdown-menu>
            <button type="button" ngb-dropdown-item>Newest first</button>
            <button type="button" ngb-dropdown-item>Oldest first</button>
            <button type="button" ngb-dropdown-item>Recently updated</button>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/self-closing-alert/self-closing-alert.component.html`,`<div class="d-flex align-items-center justify-content-between gap-3 mb-3">
    <p class="small text-body-secondary mb-0">
        {{ example.visible ? 'The timer is running.' : 'The alert is closed.' }}
    </p>
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.restart()">
        <i class="bi bi-arrow-clockwise me-1" aria-hidden="true"></i>
        {{ example.visible ? 'Restart timer' : 'Show again' }}
    </button>
</div>

<ngb-alert
    ng-if="example.visible"
    ng-ref="alert"
    ng-ref-read="ngbAlert"
    type="info"
    dismissible="true"
    animation="true"
    closed="example.onClosed()">
    This alert will close automatically in
    <strong>{{ example.remaining }} {{ example.remaining === 1 ? 'second' : 'seconds' }}</strong>.
</ngb-alert>
`),e.put(`src/app/features/lib/components/simple-collapse/simple-collapse.component.html`,`<div class="d-flex flex-wrap gap-2 mb-3">
    <button
        type="button"
        class="btn btn-primary"
        ng-click="example.toggleWithController()"
        ng-attr-aria-expanded="{{ !example.collapsed }}"
        aria-controls="simple-collapse-panel">
        Toggle with controller
    </button>

    <button
        type="button"
        class="btn btn-outline-primary"
        ng-click="example.toggleWithBinding()"
        ng-attr-aria-expanded="{{ !example.collapsed }}"
        aria-controls="simple-collapse-panel">
        Toggle with two-way binding
    </button>
</div>

<div
    id="simple-collapse-panel"
    ngb-collapse="example.collapsed"
    ngb-collapse-change="example.collapsed = $event"
    ng-ref="collapse"
    ng-ref-read="ngbCollapse">
    <div class="card">
        <div class="card-body">
            Both buttons control this panel. One calls the controller and the other changes the bound value.
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/simple-alert/simple-alert.component.html`,`<ngb-alert type="primary" dismissible="false" animation="false">
    <strong>Heads up!</strong> This is a simple alert rendered with NgbJS.
</ngb-alert>
`),e.put(`src/app/features/lib/components/selecting-nav/selecting-nav.component.html`,`<div class="d-flex flex-wrap gap-2 mb-3">
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.select('selecting-first')">
        Select first
    </button>
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.select('selecting-second')">
        Select second
    </button>
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.select('selecting-third')">
        Select third
    </button>
</div>

<ul ngb-nav ng-ref="nav" active-id="example.activeId" class="nav-tabs">
    <li ngb-nav-item="selecting-first">
        <button type="button" ngb-nav-link>First</button>
        <ng-template ngb-nav-content><p class="pt-3 mb-0">First tab selected.</p></ng-template>
    </li>
    <li ngb-nav-item="selecting-second">
        <button type="button" ngb-nav-link>Second</button>
        <ng-template ngb-nav-content><p class="pt-3 mb-0">Second tab selected.</p></ng-template>
    </li>
    <li ngb-nav-item="selecting-third">
        <button type="button" ngb-nav-link>Third</button>
        <ng-template ngb-nav-content><p class="pt-3 mb-0">Third tab selected.</p></ng-template>
    </li>
</ul>

<div ngb-nav-outlet="example.nav"></div>
<p class="small text-body-secondary mt-2 mb-0">Active id: {{ example.activeId }}</p>
`),e.put(`src/app/features/lib/components/seconds-timepicker/seconds-timepicker.component.html`,`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" seconds="example.seconds"></ngb-timepicker>
    <button type="button" class="btn btn-sm" ng-class="example.seconds ? 'btn-outline-success' : 'btn-outline-secondary'" ng-click="example.seconds = !example.seconds">
        Seconds {{ example.seconds ? 'on' : 'off' }}
    </button>
    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
</div>
`),e.put(`src/app/features/lib/components/rating-form/rating-form.component.html`,`<form name="example.form" novalidate>
    <ngb-rating rate="example.rating" rate-change="example.setRating($event)" ng-disabled="example.disabled"></ngb-rating>
    <input class="visually-hidden" type="number" name="rating" ng-model="example.rating" min="1" required ng-disabled="example.disabled" tabindex="-1" aria-hidden="true">

    <p class="small mt-2 mb-3" ng-class="example.form.rating.$valid ? 'text-success' : 'text-danger'">
        {{ example.form.rating.$valid ? 'Thanks!' : 'Please rate us' }}
    </p>

    <p>Model: <strong>{{ example.rating === null ? 'null' : example.rating }}</strong></p>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-sm" ng-class="example.disabled ? 'btn-outline-danger' : 'btn-outline-success'" ng-click="example.disabled = !example.disabled">
            {{ example.disabled ? 'Control disabled' : 'Control enabled' }}
        </button>
        <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.clear()">Clear</button>
    </div>
</form>
`),e.put(`src/app/features/lib/components/rating-decimal/rating-decimal.component.html`,`<ng-template ng-ref="example.heartTemplate" let-fill="fill">
    <span class="rating-demo-heart">
        <i class="bi bi-heart-fill" aria-hidden="true"></i>
        <span class="rating-demo-heart-fill" ng-style="{ width: fill + '%' }"><i class="bi bi-heart-fill" aria-hidden="true"></i></span>
    </span>
</ng-template>

<ngb-rating rate="example.rating" max="5" readonly="true" star-template="example.heartTemplate" aria-value-text="example.ariaValueText"></ngb-rating>
<hr>
<p>Rate: <strong>{{ example.rating }}</strong></p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.rating = 1.35">1.35</button>
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.rating = 4.72">4.72</button>
</div>
`),e.put(`src/app/features/lib/components/rating-global/rating-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div><p class="fw-semibold mb-1">Customized defaults</p><p class="small text-body-secondary mb-0">Five stars, read-only behavior and no keyboard tab stop.</p></div>
</div>

<ngb-rating rate="3"></ngb-rating>
`),e.put(`src/app/features/lib/components/scrollspy-menu-items/scrollspy-menu-items.component.html`,`<div class="row g-3">
    <div class="col-md-8 order-2">
        <div
            class="bg-body-tertiary border rounded p-3"
            style="height: 16rem"
            ngb-scroll-spy
            root-margin="0px 0px -45%"
            ng-ref="example.spy"
            ng-ref-read="ngbScrollSpy">
            <section class="pb-5" ngb-scroll-spy-fragment="menu-items-first">
                <h3 class="h5">First section</h3>
                <p>Clicking an item asks the referenced scrollspy to move to its matching fragment.</p>
            </section>
            <section class="pb-5" ngb-scroll-spy-fragment="menu-items-second">
                <h3 class="h5">Second section</h3>
                <p>The active item receives Bootstrap's <code>active</code> class automatically.</p>
            </section>
            <section class="pb-5 mb-5" ngb-scroll-spy-fragment="menu-items-third">
                <h3 class="h5">Third section</h3>
                <p class="mb-5">Items can be buttons or links; their fragment identifier is the important part.</p>
            </section>
        </div>
    </div>

    <div class="col-md-4 order-1">
        <div class="list-group" ngb-scroll-spy-menu="example.spy">
            <button type="button" class="list-group-item list-group-item-action" ngb-scroll-spy-item="menu-items-first">First</button>
            <button type="button" class="list-group-item list-group-item-action" ngb-scroll-spy-item="menu-items-second">Second</button>
            <a role="button" class="list-group-item list-group-item-action" ngb-scroll-spy-item="menu-items-third">Third</a>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/rating-events/rating-events.component.html`,`<ngb-rating rate="example.selected" rate-change="example.setSelected($event)" hover="example.setHovered($event)" leave="example.setHovered(0)" readonly="example.readonly"></ngb-rating>
<hr>
<dl class="row mb-3">
    <dt class="col-auto">Selected</dt><dd class="col mb-0">{{ example.selected }}</dd>
    <dt class="col-auto">Hovered</dt><dd class="col mb-0">{{ example.hovered }}</dd>
</dl>
<button type="button" class="btn btn-sm" ng-class="example.readonly ? 'btn-outline-danger' : 'btn-outline-success'" ng-click="example.readonly = !example.readonly">
    {{ example.readonly ? 'Read-only' : 'Editable' }}
</button>
`),e.put(`src/app/features/lib/components/range-popup-datepicker/range-popup-datepicker.component.html`,`<ng-template ng-ref="example.day" let-date let-focused="focused">
    <span class="docs-popup-range-day" ng-class="{ focused: focused, range: example.isRange(date), faded: example.isHovered(date) || example.isInside(date) }" ng-mouseenter="example.hoveredDate = date" ng-mouseleave="example.hoveredDate = null">{{ date.day }}</span>
</ng-template>
<div class="input-group" style="max-width: 24rem">
    <input class="form-control" ng-model="example.model" ngb-datepicker display-months="2" outside-days="hidden" auto-close="'outside'" day-template="example.day" date-select="example.select($event)" aria-label="Date range">
    <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()" aria-label="Toggle calendar"><i class="bi bi-calendar-range" aria-hidden="true"></i></button>
</div>
<p class="small text-body-secondary mt-3 mb-0">From <code>{{ example.fromDate | json }}</code> to <code>{{ example.toDate | json }}</code></p>
`),e.put(`src/app/features/lib/components/rating-custom-template/rating-custom-template.component.html`,`<p>Bootstrap Icons are rendered through a child <code>ng-template</code>.</p>
<ngb-rating rate="example.rating" rate-change="example.setRating($event)">
    <ng-template let-fill="fill" let-index="index">
        <i class="bi rating-demo-star" ng-class="[fill === 100 ? 'bi-star-fill filled' : 'bi-star', { low: index < 3 }]" aria-hidden="true"></i>
    </ng-template>
</ngb-rating>
<hr>
<p class="mb-0">Rate: <strong>{{ example.rating }}</strong></p>
`),e.put(`src/app/features/lib/components/range-datepicker/range-datepicker.component.html`,`<ng-template ng-ref="example.day" let-date let-focused="focused">
    <span class="docs-range-day" ng-class="{ focused: focused, range: example.isRange(date), faded: example.isHovered(date) || example.isInside(date) }" ng-mouseenter="example.hoveredDate = date" ng-mouseleave="example.hoveredDate = null">{{ date.day }}</span>
</ng-template>
<div class="overflow-auto pb-2">
    <ngb-datepicker display-months="2" outside-days="hidden" day-template="example.day" date-select="example.select($event)"></ngb-datepicker>
</div>
<p class="small text-body-secondary mt-3 mb-0">From <code>{{ example.fromDate | json }}</code> to <code>{{ example.toDate | json }}</code></p>
`),e.put(`src/app/features/lib/components/progress-height/progress-height.component.html`,`<div class="vstack gap-3">
    <ngb-progressbar type="success" value="25">Default</ngb-progressbar>
    <ngb-progressbar type="info" value="50" height="10px">10px</ngb-progressbar>
    <ngb-progressbar type="warning" value="75" height="1.5rem">1.5rem</ngb-progressbar>
    <ngb-progressbar type="danger" value="100" height="2rem">2rem</ngb-progressbar>
</div>
`),e.put(`src/app/features/lib/components/scrollspy-service-demo/scrollspy-service-demo.component.html`,`<div class="d-flex flex-wrap align-items-center gap-2 mb-3">
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.start()" ng-disabled="example.running">Start</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" ng-click="example.stop()" ng-disabled="!example.running">Stop</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" ng-click="example.toggleFinish()" ng-disabled="!example.running">
        {{ example.observingFinish ? 'Unobserve' : 'Observe' }} finish
    </button>
    <span class="small text-body-secondary ms-sm-auto">
        Active: <code>{{ example.scrollSpy.active || 'none' }}</code>
    </span>
</div>

<div class="row g-3">
    <div class="col-md-4">
        <div class="nav nav-pills flex-column">
            <button type="button" class="nav-link text-start" ng-click="example.scrollSpy.scrollTo('service-introduction')">Introduction</button>
            <button type="button" class="nav-link text-start" ng-click="example.scrollSpy.scrollTo('service-options')">Options</button>
            <button type="button" class="nav-link text-start" ng-click="example.scrollSpy.scrollTo('service-finish')">Finish</button>
        </div>
    </div>

    <div class="col-md-8">
        <div class="bg-body-tertiary border rounded p-3 overflow-y-auto" style="height: 17rem" data-service-scrollspy>
            <section id="service-introduction" class="pb-5">
                <h3 class="h5">Introduction</h3>
                <p>The service can observe ordinary DOM elements without scrollspy directives.</p>
            </section>
            <section id="service-options" class="pb-5">
                <h3 class="h5">Options</h3>
                <p>Call <code>start()</code> with a root element and the fragment ids to observe.</p>
            </section>
            <section id="service-finish" class="pb-5 mb-5">
                <h3 class="h5">Finish</h3>
                <p class="mb-5"><code>observe()</code>, <code>unobserve()</code>, <code>scrollTo()</code> and <code>stop()</code> remain available programmatically.</p>
            </section>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/progressbar-global/progressbar-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div><p class="fw-semibold mb-1">Global defaults used by this example</p><p class="small text-body-secondary mb-0">Primary, striped and animated; maximum 200, visible percentage and 1.5rem height.</p></div>
</div>

<ngb-progressbar value="135"></ngb-progressbar>
`),e.put(`src/app/features/lib/components/prevent-autohide-toast/prevent-autohide-toast.component.html`,`<p>Show the toast and keep the pointer over it to pause autohide.</p>

<button type="button" class="btn btn-primary mb-3" ng-click="example.show()">Show toast</button>

<div class="toast-container position-static">
    <ngb-toast
        ng-if="example.visible"
        header="Autohide can be paused"
        delay="5000"
        autohide="example.autohide"
        hidden="example.hide()"
        ng-mouseenter="example.autohide = false"
        ng-mouseleave="example.autohide = true"
        ng-class="{ 'border-warning': !example.autohide }">
        {{ example.autohide ? 'Hover over me before five seconds pass.' : 'Paused. I will remain visible until you leave.' }}
    </ngb-toast>
</div>
`),e.put(`src/app/features/lib/components/popup-datepicker/popup-datepicker.component.html`,`<label class="form-label" for="popup-datepicker-input">Choose a date</label>
<div class="input-group" style="max-width: 22rem">
    <input id="popup-datepicker-input" class="form-control" ng-model="example.date" ngb-datepicker ng-focus="$datepicker.open()">
    <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()" aria-label="Toggle calendar">
        <i class="bi bi-calendar3" aria-hidden="true"></i>
    </button>
</div>
<p class="small text-body-secondary mt-3 mb-0">Selected date: <code>{{ example.date | json }}</code></p>
`),e.put(`src/app/features/lib/components/popover-placements/popover-placements.component.html`,`<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" placement="'top'" ngb-popover="'Popover content'" popover-title="'Popover on top'">Top</button>
    <button type="button" class="btn btn-outline-secondary" placement="'end'" ngb-popover="'Popover content'" popover-title="'Popover on right'">Right</button>
    <button type="button" class="btn btn-outline-secondary" placement="'bottom'" ngb-popover="'Popover content'" popover-title="'Popover on bottom'">Bottom</button>
    <button type="button" class="btn btn-outline-secondary" placement="'start'" ngb-popover="'Popover content'" popover-title="'Popover on left'">Left</button>
</div>
`),e.put(`src/app/features/lib/components/popover-template/popover-template.component.html`,`<ng-template ng-ref="example.titleTemplate">
    <span class="d-flex align-items-center gap-2"><i class="bi bi-code-slash" aria-hidden="true"></i><strong>Template content</strong></span>
</ng-template>
<ng-template ng-ref="example.contentTemplate">
    <p class="mb-2">Hello, <strong>{{ example.name }}</strong>!</p>
    <button class="btn btn-sm btn-primary" type="button" ng-click="example.name = 'AngularJS'">Update binding</button>
</ng-template>

<button type="button" class="btn btn-outline-primary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate">
    HTML and bindings
</button>
`),e.put(`src/app/features/lib/components/popover-manual-control/popover-manual-control.component.html`,`<button type="button" class="btn btn-primary mb-3" ngb-popover="'This target is controlled by the buttons below'" popover-title="'External controls'" triggers="'manual'" auto-close="false" ng-ref="example.popover" ng-ref-read="ngbPopover">
    Popover target
</button>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.popover.open()">Open</button>
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.popover.close()">Close</button>
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.popover.toggle()">Toggle</button>
</div>
`),e.put(`src/app/features/lib/components/popover-triggers/popover-triggers.component.html`,`<p class="mb-3">Custom events can be paired as <code>mouseenter:mouseleave</code>.</p>
<button type="button" class="btn btn-outline-secondary mb-4" ngb-popover="'Shown while the pointer is over the trigger'" popover-title="'Hover trigger'" triggers="'mouseenter:mouseleave'">
    Hover over me
</button>

<p class="mb-3">A manual trigger delegates opening and closing to application code.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-primary" ngb-popover="'Manually controlled content'" popover-title="'Manual popover'" triggers="'manual'" auto-close="false" ng-ref="example.manual" ng-ref-read="ngbPopover" ng-click="example.manual.open()">
        Open popover
    </button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.manual.close()">Close popover</button>
</div>
`),e.put(`src/app/features/lib/components/popover-custom-target/popover-custom-target.component.html`,`<div class="d-flex flex-wrap align-items-baseline gap-2">
    <span>You can click</span>
    <button class="btn btn-outline-secondary" type="button" ngb-popover="'The button triggered me, but this text positioned me.'" popover-title="'Custom target'" position-target="'#popover-position-target'">this button</button>
    <span>but the popover appears over <strong id="popover-position-target" class="text-primary">this target</strong>.</span>
</div>
`),e.put(`src/app/features/lib/components/popover-events/popover-events.component.html`,`<button type="button" class="btn btn-outline-primary" placement="'top'" ngb-popover="'Watch the event log below.'" popover-title="'Visibility events'" shown="example.record('shown')" hidden="example.record('hidden')" ng-ref="example.popover" ng-ref-read="ngbPopover">
    Toggle popover
</button>

<div class="mt-4">
    <p class="mb-2">Current state: <code>{{ example.popover.isOpen() ? 'open' : 'closed' }}</code></p>
    <ul class="list-group list-group-flush" ng-if="example.events.length">
        <li class="list-group-item px-0 py-2" ng-repeat="event in example.events track by $index"><code>{{ event.name }}</code> at {{ event.time | date:'mediumTime' }}</li>
    </ul>
    <p class="text-body-secondary mb-0" ng-if="!example.events.length">No events recorded yet.</p>
</div>
`),e.put(`src/app/features/lib/components/popover-context/popover-context.component.html`,`<ng-template ng-ref="example.contentTemplate" let-greeting="greeting">{{ greeting }}, <strong>{{ example.name }}</strong>!</ng-template>
<ng-template ng-ref="example.titleTemplate" let-language="language">Greeting in {{ language }}</ng-template>

<p>You can pass context when manually opening a popover.</p>
<div class="d-flex flex-wrap gap-2 mb-4">
    <button type="button" class="btn btn-outline-secondary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate" triggers="'manual'" ng-ref="example.french" ng-ref-read="ngbPopover" ng-click="example.toggleWithGreeting(example.french, 'Bonjour', 'French')">French</button>
    <button type="button" class="btn btn-outline-secondary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate" triggers="'manual'" ng-ref="example.german" ng-ref-read="ngbPopover" ng-click="example.toggleWithGreeting(example.german, 'Guten Tag', 'German')">German</button>
    <button type="button" class="btn btn-outline-secondary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate" triggers="'manual'" ng-ref="example.english" ng-ref-read="ngbPopover" ng-click="example.toggleWithGreeting(example.english, 'Hello', 'English')">English</button>
</div>

<p>Alternatively, provide a default context through <code>popover-context</code>.</p>
<button type="button" class="btn btn-outline-secondary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate" popover-context="{ language: '中文', greeting: '你好' }">Chinese</button>
`),e.put(`src/app/features/lib/components/progress-bars-stacked/progress-bars-stacked.component.html`,`<ngb-progressbar-stacked>
    <ngb-progressbar type="danger" value="20">20%</ngb-progressbar>
    <ngb-progressbar type="warning" value="35">35%</ngb-progressbar>
    <ngb-progressbar type="success" value="45">45%</ngb-progressbar>
</ngb-progressbar-stacked>

<p class="small text-body-secondary mt-3 mb-0">The three segments share one Bootstrap stacked progress container.</p>
`),e.put(`src/app/features/lib/components/popover-delays/popover-delays.component.html`,`<p>Move the pointer into the popover before its close delay expires to keep it open.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" ngb-popover="'Opens after 300 ms and closes after 500 ms.'" triggers="'mouseenter:mouseleave'" open-delay="300" close-delay="500">300 / 500 ms</button>
    <button type="button" class="btn btn-outline-secondary" ngb-popover="'Opens after one second and closes after two.'" triggers="'mouseenter:mouseleave'" open-delay="1000" close-delay="2000">1 / 2 seconds</button>
</div>
`),e.put(`src/app/features/lib/components/popover-global/popover-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div><p class="fw-semibold mb-1">Global defaults used by this example</p><p class="small text-body-secondary mb-0">Hover trigger, end placement, body container and a 300 ms opening delay.</p></div>
</div>
<button type="button" class="btn btn-outline-primary" ngb-popover="'This instance reads every option from NgbPopoverConfig.'" popover-title="'Configured globally'">Hover over me</button>
`),e.put(`src/app/features/lib/components/popover-custom-class/popover-custom-class.component.html`,`<button type="button" class="btn btn-outline-primary" ngb-popover="'A small custom skin layered on top of Bootstrap variables.'" popover-title="'NgbJS popover'" popover-class="docs-popover-custom">
    Popover with custom class
</button>
`),e.put(`src/app/features/lib/components/pagination-size/pagination-size.component.html`,`<div class="vstack gap-4">
    <div>
        <p class="small text-body-secondary mb-2">Small</p>
        <ngb-pagination collection-size="50" page="example.smallPage" page-change="example.selectSmallPage($event)" size="'sm'"></ngb-pagination>
    </div>
    <div>
        <p class="small text-body-secondary mb-2">Default</p>
        <ngb-pagination collection-size="50" page="example.defaultPage" page-change="example.selectDefaultPage($event)"></ngb-pagination>
    </div>
    <div>
        <p class="small text-body-secondary mb-2">Large</p>
        <ngb-pagination collection-size="50" page="example.largePage" page-change="example.selectLargePage($event)" size="'lg'"></ngb-pagination>
    </div>
</div>
`),e.put(`src/app/features/lib/components/popover-body/popover-body.component.html`,`<div class="overflow-hidden border rounded p-4" style="max-width: 24rem">
    <p class="small text-body-secondary">This container clips overflowing descendants.</p>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-secondary" placement="'top'" ngb-popover="'Inserted next to the trigger.'">Default</button>
        <button type="button" class="btn btn-outline-primary" placement="'top'" ngb-popover="'Appended directly to document.body.'" container="'body'">Append to body</button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/pagination-global/pagination-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            Pagination is small, rotating, limited to five pages and uses boundary links without direction links.
        </p>
    </div>
</div>

<ngb-pagination
    collection-size="200"
    page="example.page"
    page-change="example.selectPage($event)">
</ngb-pagination>
`),e.put(`src/app/features/lib/components/one-panel-accordion/one-panel-accordion.component.html`,`<div ngb-accordion animation="true" close-others="true" destroy-on-hide="true">
    <div ngb-accordion-item="'one-panel-first'" collapsed="false">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>First panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">Opening another panel automatically collapses this one.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'one-panel-second'">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Second panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0"><code>close-others</code> keeps only one item expanded.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'one-panel-third'">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Third panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">The behavior is coordinated by the parent accordion.</p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/popover-autoclose/popover-autoclose.component.html`,`<p>Every popover also closes with <kbd>Esc</kbd>.</p>
<div class="vstack gap-3 align-items-start">
    <button type="button" class="btn btn-outline-secondary" auto-close="'inside'" ngb-popover="'Click this content or press Escape'" popover-title="'Inside clicks'">Close on inside click</button>
    <button type="button" class="btn btn-outline-secondary" auto-close="'outside'" ngb-popover="'Click elsewhere or press Escape'" popover-title="'Outside clicks'">Close on outside click</button>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-secondary" auto-close="true" ngb-popover="'Click anywhere or press Escape'" popover-title="'All clicks'" ng-ref="example.popover" ng-ref-read="ngbPopover">Close on every click</button>
        <button type="button" class="btn btn-outline-secondary" ng-click="example.popover.toggle()">External toggle</button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/pagination-alignment/pagination-alignment.component.html`,`<div class="vstack gap-4">
    <div>
        <p class="small text-body-secondary mb-2">Start</p>
        <ngb-pagination class="d-flex justify-content-start" collection-size="50" page="example.startPage" page-change="example.selectStartPage($event)"></ngb-pagination>
    </div>
    <div>
        <p class="small text-body-secondary text-center mb-2">Center</p>
        <ngb-pagination class="d-flex justify-content-center" collection-size="50" page="example.centerPage" page-change="example.selectCenterPage($event)"></ngb-pagination>
    </div>
    <div>
        <p class="small text-body-secondary text-end mb-2">End</p>
        <ngb-pagination class="d-flex justify-content-end" collection-size="50" page="example.endPage" page-change="example.selectEndPage($event)"></ngb-pagination>
    </div>
</div>
`),e.put(`src/app/features/lib/components/offcanvas-default/offcanvas-default.component.html`,`<button type="button" class="btn btn-primary" ng-click="example.open()">Open default offcanvas</button>

<ng-template ng-ref="content" let-close="close" let-dismiss="dismiss">
    <div class="offcanvas-header">
        <h2 class="offcanvas-title fs-5">Default offcanvas</h2>
        <button type="button" class="btn-close" aria-label="Close" ng-click="dismiss('header close')"></button>
    </div>
    <div class="offcanvas-body">
        <p>This offcanvas uses the global defaults without passing local options.</p>
        <div class="d-flex flex-wrap gap-2">
            <button type="button" class="btn btn-outline-secondary" ng-click="dismiss('cancel')">Cancel</button>
            <button type="button" class="btn btn-primary" ng-click="close('accepted')">Continue</button>
        </div>
    </div>
</ng-template>
`),e.put(`src/app/features/lib/components/offcanvas-demo-content/offcanvas-demo-content.component.html`,`<div class="offcanvas-header">
    <h2 class="offcanvas-title fs-5">Component offcanvas</h2>
    <button
        type="button"
        class="btn-close"
        aria-label="Close"
        ng-click="$.ngbActiveOffcanvas.dismiss('header close')">
    </button>
</div>

<div class="offcanvas-body">
    <p>This panel receives a registered component as its content.</p>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-secondary" ng-click="$.ngbActiveOffcanvas.dismiss('cancel')">
            Cancel
        </button>
        <button type="button" class="btn btn-primary" ng-click="$.ngbActiveOffcanvas.close('accepted')">
            Continue
        </button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/offcanvas-options/offcanvas-options.component.html`,`<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCustomPanel()">Custom panel class</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openStaticBackdrop()">Static backdrop</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openStart()">Start</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openEnd()">End</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openTop()">Top</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openBottom()">Bottom</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openScrollableBody()">Body scrolling</button>
</div>
`),e.put(`src/app/features/lib/components/offcanvas-focus-content/offcanvas-focus-content.component.html`,`<div class="offcanvas-header">
    <h2 class="offcanvas-title fs-5" id="offcanvas-focus-title">Focus management</h2>
</div>

<div class="offcanvas-body">
    <div class="mb-3">
        <label class="form-label" for="offcanvas-first-focusable">First focusable element</label>
        <input id="offcanvas-first-focusable" type="text" class="form-control" placeholder="Focused by default">
    </div>

    <div class="mb-3" ng-if="$.autofocus">
        <label class="form-label" for="offcanvas-custom-autofocus">Custom autofocus target</label>
        <input
            id="offcanvas-custom-autofocus"
            type="text"
            class="form-control"
            placeholder="Focused through ngbAutofocus"
            ngbAutofocus>
    </div>

    <button type="button" class="btn btn-primary" ng-click="$.ngbActiveOffcanvas.close()">Done</button>
</div>
`),e.put(`src/app/features/lib/components/offcanvas-global/offcanvas-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            The panel opens from the end, allows body scrolling, uses a static backdrop and ignores Escape.
            This documentation example restores the shared defaults immediately after opening.
        </p>
    </div>
</div>

<button type="button" class="btn btn-primary" ng-click="example.open()">Open globally configured offcanvas</button>
`),e.put(`src/app/features/lib/components/offcanvas-component-content/offcanvas-component-content.component.html`,`<button type="button" class="btn btn-primary" ng-click="example.open()">Open component offcanvas</button>
<p class="small text-body-secondary mt-2 mb-0">{{ example.lastResult }}</p>
`),e.put(`src/app/features/lib/components/offcanvas-focus/offcanvas-focus.component.html`,`<p class="text-body-secondary">
    The first focusable element receives focus by default. Add <code>ngbAutofocus</code> to choose another target.
</p>

<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-primary" ng-click="example.openDefaultFocus()">Focus first element</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCustomFocus()">Use ngbAutofocus</button>
</div>
`),e.put(`src/app/features/lib/components/navbar-scrollspy/navbar-scrollspy.component.html`,`<div class="d-flex flex-column">
    <div
        class="bg-body-tertiary border rounded p-3 order-2"
        style="height: 15rem"
        ngb-scroll-spy
        root-margin="0px 0px -45%"
        ng-ref="example.spy"
        ng-ref-read="ngbScrollSpy">
        <section class="pb-5" ngb-scroll-spy-fragment="navbar-overview">
            <h3 class="h5">Overview</h3>
            <p>The menu can live outside the observed container when it receives an explicit scrollspy reference.</p>
        </section>
        <section class="pb-5" ngb-scroll-spy-fragment="navbar-features">
            <h3 class="h5">Features</h3>
            <p>Bootstrap navbar and nav utilities provide the layout while ngb-js manages navigation state.</p>
        </section>
        <section class="pb-5 mb-5" ngb-scroll-spy-fragment="navbar-summary">
            <h3 class="h5">Summary</h3>
            <p class="mb-5">Selecting a navbar item scrolls this container without moving the surrounding page.</p>
        </section>
    </div>

    <nav class="navbar bg-body-tertiary border rounded px-3 mb-3 order-1">
        <span class="navbar-brand mb-0 h1">Docs</span>
        <div class="nav nav-pills" ngb-scroll-spy-menu="example.spy">
            <button type="button" class="nav-link" ngb-scroll-spy-item="navbar-overview">Overview</button>
            <button type="button" class="nav-link" ngb-scroll-spy-item="navbar-features">Features</button>
            <button type="button" class="nav-link" ngb-scroll-spy-item="navbar-summary">Summary</button>
        </div>
    </nav>
</div>
`),e.put(`src/app/features/lib/components/non-editable-typeahead/non-editable-typeahead.component.html`,`<p>Manual text is not accepted; the model changes only after selecting a suggestion.</p>
<label class="form-label" for="non-editable-typeahead">Search for a state</label>
<input id="non-editable-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" input-formatter="example.formatter" result-formatter="example.formatter" editable="false" placeholder="Type at least two characters">
<pre class="mt-3 mb-0">Model: {{ example.model | json }}</pre>
`),e.put(`src/app/features/lib/components/nested-scrollspy/nested-scrollspy.component.html`,`<div class="row g-3">
    <div class="col-md-8 order-2">
        <div
            class="bg-body-tertiary border rounded p-3"
            style="height: 18rem"
            ngb-scroll-spy
            root-margin="0px 0px -45%"
            ng-ref="example.spy"
            ng-ref-read="ngbScrollSpy">
            <section class="pb-4" ngb-scroll-spy-fragment="nested-guide">
                <h3 class="h4">Guide</h3>
                <p>A parent item can represent a complete group of related sections.</p>
            </section>
            <section class="pb-5" ngb-scroll-spy-fragment="nested-install">
                <h4 class="h5">Install</h4>
                <p>Child items use <code>parent</code> to activate both their own entry and the group entry.</p>
            </section>
            <section class="pb-5" ngb-scroll-spy-fragment="nested-configure">
                <h4 class="h5">Configure</h4>
                <p>The menu directive coordinates the active state across every descendant item.</p>
            </section>
            <section class="pb-5 mb-5" ngb-scroll-spy-fragment="nested-reference">
                <h3 class="h4">Reference</h3>
                <p class="mb-5">Top-level entries continue to work alongside nested groups.</p>
            </section>
        </div>
    </div>

    <div class="col-md-4 order-1">
        <nav class="nav nav-pills flex-column" ngb-scroll-spy-menu="example.spy" aria-label="Nested example navigation">
            <button type="button" class="nav-link text-start" ngb-scroll-spy-item="nested-guide">Guide</button>
            <nav class="nav nav-pills flex-column ms-3">
                <button type="button" class="nav-link text-start my-1" ngb-scroll-spy-item="nested-install" parent="nested-guide">Install</button>
                <button type="button" class="nav-link text-start my-1" ngb-scroll-spy-item="nested-configure" parent="nested-guide">Configure</button>
            </nav>
            <button type="button" class="nav-link text-start" ngb-scroll-spy-item="nested-reference">Reference</button>
        </nav>
    </div>
</div>
`),e.put(`src/app/features/lib/components/nav-global/nav-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            The nav is vertical, keeps hidden content and selects tabs while navigating with the arrow keys.
        </p>
    </div>
</div>

<div class="d-flex align-items-start gap-3">
    <div
        ngb-nav
        ng-ref="example.nav"
        ng-ref-read="ngbNav"
        active-id="example.activeId"
        class="nav-pills flex-column flex-shrink-0">
        <div ngb-nav-item="global-account">
            <button type="button" ngb-nav-link>Account</button>
            <ng-template ngb-nav-content><p class="mb-0">Global account settings.</p></ng-template>
        </div>
        <div ngb-nav-item="global-team">
            <button type="button" ngb-nav-link>Team</button>
            <ng-template ngb-nav-content><p class="mb-0">Global team settings.</p></ng-template>
        </div>
        <div ngb-nav-item="global-billing">
            <button type="button" ngb-nav-link>Billing</button>
            <ng-template ngb-nav-content><p class="mb-0">Global billing settings.</p></ng-template>
        </div>
    </div>

    <div class="border rounded p-3 flex-grow-1" ngb-nav-outlet="example.nav"></div>
</div>
`),e.put(`src/app/features/lib/components/navbar-collapse/navbar-collapse.component.html`,`<p class="text-body-secondary mb-3">
    Resize the viewport to see the navigation switch between its expanded and collapsed layouts.
</p>

<nav class="navbar navbar-expand-lg bg-body-tertiary border rounded">
    <div class="container-fluid">
        <span class="navbar-brand mb-0">NgbJS</span>

        <button
            type="button"
            class="navbar-toggler"
            ng-click="example.toggleMenu()"
            ng-attr-aria-expanded="{{ !example.menuCollapsed }}"
            aria-controls="collapse-navbar-menu"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div
            id="collapse-navbar-menu"
            class="navbar-collapse"
            ngb-collapse="example.menuCollapsed">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <button type="button" class="nav-link active" ng-click="example.closeMenu()">Features</button>
                </li>
                <li class="nav-item">
                    <button type="button" class="nav-link" ng-click="example.closeMenu()">Examples</button>
                </li>
                <li class="nav-item">
                    <button type="button" class="nav-link" ng-click="example.closeMenu()">About</button>
                </li>
            </ul>
        </div>
    </div>
</nav>
`),e.put(`src/app/features/lib/components/modal-stacked-content/modal-stacked-content.component.html`,`<div class="modal-header">
    <h2 class="modal-title fs-5">Stacked modal {{ $.level }}</h2>
    <button type="button" class="btn-close" aria-label="Close" ng-click="$.ngbActiveModal.dismiss('close')"></button>
</div>

<div class="modal-body">
    <p class="mb-0">This is modal layer {{ $.level }} of 3. Close it to return to the previous layer.</p>
</div>

<div class="modal-footer">
    <button type="button" class="btn btn-outline-danger" ng-click="$.dismissAll()">Dismiss all</button>
    <button type="button" class="btn btn-primary" ng-click="$.ngbActiveModal.close()">Close this modal</button>
</div>
`),e.put(`src/app/features/lib/components/modal-updatable-content/modal-updatable-content.component.html`,`<div class="modal-header">
    <h2 class="modal-title fs-5" id="updatable-modal-title">Updatable options</h2>
    <button type="button" class="btn-close" aria-label="Close" ng-click="$.ngbActiveModal.dismiss('close')"></button>
</div>

<div class="modal-body">
    <p id="updatable-modal-description">
        Change the window, dialog, backdrop and accessibility options while this modal remains open.
    </p>

    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.toggleAriaReferences()">
            ARIA references: {{ $.ariaReferences ? 'on' : 'off' }}
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.toggleCentered()">
            Centered: {{ $.centered ? 'on' : 'off' }}
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.toggleFullscreen()">
            Fullscreen: {{ $.fullscreen ? 'on' : 'off' }}
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.toggleBackdropClass()">
            Backdrop class: {{ $.customBackdrop ? 'on' : 'off' }}
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.cycleSize()">
            Size: {{ $.size }}
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.toggleWindowClass()">
            Window class: {{ $.customWindow ? 'on' : 'off' }}
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.toggleDialogClass()">
            Dialog class: {{ $.customDialog ? 'on' : 'off' }}
        </button>
    </div>
</div>

<div class="modal-footer">
    <button type="button" class="btn btn-primary" ng-click="$.ngbActiveModal.close()">Done</button>
</div>
`),e.put(`src/app/features/lib/components/modal-stacked/modal-stacked.component.html`,`<button type="button" class="btn btn-primary" ng-click="example.openStack()">Open three modals</button>
`),e.put(`src/app/features/lib/components/multiple-months-datepicker/multiple-months-datepicker.component.html`,`<div class="overflow-auto pb-2">
    <ngb-datepicker ng-model="example.date" display-months="2" outside-days="hidden"></ngb-datepicker>
</div>
`),e.put(`src/app/features/lib/components/modal-options/modal-options.component.html`,`<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCustomWindow()">Custom class</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openStaticBackdrop()">Static backdrop</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openSmall()">Small</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openLarge()">Large</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openExtraLarge()">Extra large</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openFullscreen()">Fullscreen</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCentered()">Vertically centered</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openScrollable()">Scrollable content</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCustomDialog()">Dialog custom class</button>
</div>
`),e.put(`src/app/features/lib/components/modal-global/modal-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            Modals are large, vertically centered, use a static backdrop and ignore the Escape key.
            This documentation example restores the shared defaults immediately after opening.
        </p>
    </div>
</div>

<button type="button" class="btn btn-primary" ng-click="example.open()">Open globally configured modal</button>
`),e.put(`src/app/features/lib/components/modal-focus-content/modal-focus-content.component.html`,`<div class="modal-header">
    <h2 class="modal-title fs-5" id="modal-focus-title">Focus management</h2>
</div>

<div class="modal-body">
    <div class="mb-3">
        <label class="form-label" for="modal-first-focusable">First focusable element</label>
        <input id="modal-first-focusable" type="text" class="form-control" placeholder="Focused by default">
    </div>

    <div ng-if="$.autofocus">
        <label class="form-label" for="modal-custom-autofocus">Custom autofocus target</label>
        <input
            id="modal-custom-autofocus"
            type="text"
            class="form-control"
            placeholder="Focused through ngbAutofocus"
            ngbAutofocus>
    </div>
</div>

<div class="modal-footer">
    <button type="button" class="btn btn-primary" ng-click="$.ngbActiveModal.close()">Done</button>
</div>
`),e.put(`src/app/features/lib/components/modal-default/modal-default.component.html`,`<button type="button" class="btn btn-primary" ng-click="example.open()">Open default modal</button>

<ng-template ng-ref="content" let-close="close" let-dismiss="dismiss">
    <div class="modal-header">
        <h2 class="modal-title fs-5">Default modal</h2>
        <button type="button" class="btn-close" aria-label="Close" ng-click="dismiss('header close')"></button>
    </div>
    <div class="modal-body">
        <p class="mb-0">This modal uses the global defaults without passing local options.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" ng-click="dismiss('cancel')">Cancel</button>
        <button type="button" class="btn btn-primary" ng-click="close('accepted')">Continue</button>
    </div>
</ng-template>
`),e.put(`src/app/features/lib/components/modal-updatable/modal-updatable.component.html`,`<button type="button" class="btn btn-primary" ng-click="example.open()">Open updatable modal</button>
`),e.put(`src/app/features/lib/components/modal-focus/modal-focus.component.html`,`<p class="text-body-secondary">
    The first focusable element receives focus by default. Add <code>ngbAutofocus</code> to choose another target.
</p>

<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-primary" ng-click="example.openDefaultFocus()">
        Focus first element
    </button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCustomFocus()">
        Use ngbAutofocus
    </button>
</div>
`),e.put(`src/app/features/lib/components/modal-demo-content/modal-demo-content.component.html`,`<div class="modal-header">
    <h2 class="modal-title fs-5">{{ $.title }}</h2>
    <button
        type="button"
        class="btn-close"
        aria-label="Close"
        ng-click="$.ngbActiveModal.dismiss('header close')">
    </button>
</div>

<div class="modal-body">
    <p ng-class="{ 'mb-0': !$.longContent }">{{ $.description }}</p>

    <div class="list-group" ng-if="$.longContent">
        <div class="list-group-item" ng-repeat="item in $.items track by $index">{{ item }}</div>
    </div>
</div>

<div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" ng-click="$.ngbActiveModal.dismiss('cancel')">
        Cancel
    </button>
    <button type="button" class="btn btn-primary" ng-click="$.ngbActiveModal.close('accepted')">
        Continue
    </button>
</div>
`),e.put(`src/app/features/lib/components/meridian-timepicker/meridian-timepicker.component.html`,`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" meridian="example.meridian"></ngb-timepicker>
    <button type="button" class="btn btn-sm" ng-class="example.meridian ? 'btn-outline-success' : 'btn-outline-secondary'" ng-click="example.meridian = !example.meridian">
        Meridian {{ example.meridian ? 'on' : 'off' }}
    </button>
    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
</div>
`),e.put(`src/app/features/lib/components/formatted-typeahead/formatted-typeahead.component.html`,`<label class="form-label" for="formatted-typeahead">Search for a state</label>
<input id="formatted-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" result-formatter="example.formatter" placeholder="Results are formatted in uppercase">
<p class="small text-body-secondary mt-2 mb-0">Model: <strong>{{ example.model || 'empty' }}</strong></p>
`),e.put(`src/app/features/lib/components/focus-typeahead/focus-typeahead.component.html`,`<label class="form-label" for="focus-typeahead">Search for a state</label>
<input id="focus-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" ng-focus="example.focus$.next($event.target.value)" placeholder="Focus to see suggestions">
<p class="small text-body-secondary mt-2 mb-0">Model: <strong>{{ example.model || 'empty' }}</strong></p>
`),e.put(`src/app/features/lib/components/exact-typeahead/exact-typeahead.component.html`,`<label class="form-label" for="exact-typeahead">Search for a state</label>
<input id="exact-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" input-formatter="example.formatter" result-formatter="example.formatter" select-on-exact="true" placeholder="Try California">
<pre class="mt-3 mb-0">Model: {{ example.model | json }}</pre>
`),e.put(`src/app/features/lib/components/dynamic-nav/dynamic-nav.component.html`,`<div class="d-flex flex-wrap gap-2 mb-3">
    <button type="button" class="btn btn-primary btn-sm" ng-click="example.add()">Add tab</button>
    <button
        type="button"
        class="btn btn-outline-danger btn-sm"
        ng-click="example.removeActive()"
        ng-disabled="example.items.length === 1">
        Remove active tab
    </button>
</div>

<ul
    ngb-nav
    ng-ref="example.nav"
    ng-ref-read="ngbNav"
    active-id="example.activeId"
    class="nav-tabs">
    <li ng-repeat="item in example.items track by item.id" ngb-nav-item="{{ item.id }}">
        <button type="button" ngb-nav-link>{{ item.title }}</button>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">Dynamic content for {{ item.title }}.</p>
        </ng-template>
    </li>
</ul>

<div ngb-nav-outlet="example.nav"></div>
`),e.put(`src/app/features/lib/components/modal-component-content/modal-component-content.component.html`,`<button type="button" class="btn btn-primary" ng-click="example.open()">Open component modal</button>
<p class="small text-body-secondary mt-2 mb-0">{{ example.lastResult }}</p>
`),e.put(`src/app/features/lib/components/horizontal-collapse/horizontal-collapse.component.html`,`<button
    type="button"
    class="btn btn-primary mb-3"
    ng-click="example.toggle()"
    ng-attr-aria-expanded="{{ !example.collapsed }}"
    aria-controls="horizontal-collapse-panel">
    Toggle width
</button>

<div class="d-flex">
    <div
        id="horizontal-collapse-panel"
        ngb-collapse="example.collapsed"
        horizontal="true">
        <div class="card card-body text-nowrap">
            This content collapses horizontally.
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/dropdown-global/dropdown-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            The menu prefers the top placement, uses the body container and closes only after an outside click.
        </p>
    </div>
</div>

<div ngb-dropdown>
    <button type="button" class="btn btn-primary" ngb-dropdown-toggle>Globally configured</button>
    <div ngb-dropdown-menu>
        <button type="button" ngb-dropdown-item>This click keeps the menu open</button>
        <button type="button" ngb-dropdown-item>So does this one</button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/manual-dropdown/manual-dropdown.component.html`,`<div class="d-flex flex-wrap gap-2 mb-3">
    <button type="button" class="btn btn-primary btn-sm" ng-click="example.open()">Open</button>
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.close()">Close</button>
    <button type="button" class="btn btn-outline-secondary btn-sm" ng-click="example.toggle()">Toggle</button>
</div>

<div
    ngb-dropdown
    ng-ref="dropdown"
    open="example.opened"
    open-change="example.opened = $event">
    <button type="button" class="btn btn-outline-dark" ngb-dropdown-anchor>
        Manually controlled menu
    </button>
    <div ngb-dropdown-menu>
        <button type="button" ngb-dropdown-item>First action</button>
        <button type="button" ngb-dropdown-item>Second action</button>
    </div>
</div>

<p class="small text-body-secondary mt-2 mb-0">
    Current state: {{ example.opened ? 'open' : 'closed' }}
</p>
`),e.put(`src/app/features/lib/components/dropdown-form/dropdown-form.component.html`,`<div ngb-dropdown auto-close="'outside'">
    <button type="button" class="btn btn-primary" ngb-dropdown-toggle>Sign in</button>
    <div ngb-dropdown-menu class="p-3">
        <form ng-submit="example.submit()">
            <div class="mb-3">
                <label class="form-label" for="dropdown-form-email">Email address</label>
                <input
                    id="dropdown-form-email"
                    type="email"
                    class="form-control"
                    placeholder="name@example.com"
                    ng-model="example.email"
                    required>
            </div>
            <div class="form-check mb-3">
                <input
                    id="dropdown-form-remember"
                    type="checkbox"
                    class="form-check-input"
                    ng-model="example.remember">
                <label class="form-check-label" for="dropdown-form-remember">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary w-100">Continue</button>
            <p class="small text-success mt-2 mb-0" ng-if="example.submitted">Form submitted.</p>
        </form>
    </div>
</div>
`),e.put(`src/app/features/lib/components/dropdown-navbar/dropdown-navbar.component.html`,`<nav class="navbar bg-body-tertiary border rounded px-3">
    <span class="navbar-brand mb-0">Workspace</span>

    <div class="ms-auto" ngb-dropdown display="'dynamic'" placement="'bottom-end'">
        <button type="button" class="btn btn-outline-primary" ngb-dropdown-toggle>Account</button>
        <div ngb-dropdown-menu>
            <button type="button" ngb-dropdown-item>Profile</button>
            <button type="button" ngb-dropdown-item>Preferences</button>
            <div class="dropdown-divider"></div>
            <button type="button" ngb-dropdown-item>Sign out</button>
        </div>
    </div>
</nav>
`),e.put(`src/app/features/lib/components/dropdown-button-groups/dropdown-button-groups.component.html`,`<div class="d-flex flex-wrap gap-3">
    <div class="btn-group" ngb-dropdown>
        <button type="button" class="btn btn-primary" ngb-dropdown-toggle>Button group</button>
        <div ngb-dropdown-menu>
            <button type="button" ngb-dropdown-item>Edit</button>
            <button type="button" ngb-dropdown-item>Duplicate</button>
            <button type="button" ngb-dropdown-item>Archive</button>
        </div>
    </div>

    <div class="btn-group" ngb-dropdown>
        <button type="button" class="btn btn-success">Save</button>
        <button
            type="button"
            class="btn btn-success dropdown-toggle-split"
            ngb-dropdown-toggle
            aria-label="More save options">
            <span class="visually-hidden">Toggle dropdown</span>
        </button>
        <div ngb-dropdown-menu>
            <button type="button" ngb-dropdown-item>Save as draft</button>
            <button type="button" ngb-dropdown-item>Save and publish</button>
            <button type="button" ngb-dropdown-item>Save a copy</button>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/dropdown-body/dropdown-body.component.html`,`<div class="border rounded p-3 overflow-hidden">
    <p class="small text-body-secondary mb-3">
        The wrapper clips overflowing content, but the menu is appended to the document body.
    </p>

    <div ngb-dropdown container="body">
        <button type="button" class="btn btn-primary" ngb-dropdown-toggle>Open body container</button>
        <div ngb-dropdown-menu>
            <button type="button" ngb-dropdown-item>Account</button>
            <button type="button" ngb-dropdown-item>Notifications</button>
            <button type="button" ngb-dropdown-item>Privacy</button>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/dropdown-disabled-items/dropdown-disabled-items.component.html`,`<div class="form-check form-switch mb-3">
    <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="dropdown-restricted-items"
        ng-model="example.restricted">
    <label class="form-check-label" for="dropdown-restricted-items">Disable restricted actions</label>
</div>

<div ngb-dropdown>
    <button type="button" class="btn btn-primary" ngb-dropdown-toggle>Project actions</button>
    <div ngb-dropdown-menu>
        <button type="button" ngb-dropdown-item>Open project</button>
        <button type="button" ngb-dropdown-item ng-disabled="example.restricted">Archive project</button>
        <button type="button" ngb-dropdown-item ng-disabled="example.restricted">Delete project</button>
        <div class="dropdown-divider"></div>
        <button type="button" ngb-dropdown-item ng-disabled="true">Unavailable action</button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/keep-content-nav/keep-content-nav.component.html`,`<ul
    ngb-nav
    ng-ref="example.nav"
    ng-ref-read="ngbNav"
    active-id="example.activeId"
    destroy-on-hide="false"
    class="nav-tabs">
    <li ngb-nav-item="keep-editor">
        <button type="button" ngb-nav-link>Editor</button>
        <ng-template ngb-nav-content>
            <div class="pt-3">
                <label class="form-label" for="keep-content-draft">Draft</label>
                <input id="keep-content-draft" type="text" class="form-control" ng-model="example.draft">
            </div>
        </ng-template>
    </li>
    <li ngb-nav-item="keep-preview">
        <button type="button" ngb-nav-link>Preview</button>
        <ng-template ngb-nav-content>
            <div class="pt-3">
                <p class="small text-body-secondary mb-1">Current draft</p>
                <p class="mb-0">{{ example.draft }}</p>
            </div>
        </ng-template>
    </li>
</ul>

<div ngb-nav-outlet="example.nav"></div>
`),e.put(`src/app/features/lib/components/inline-toast/inline-toast.component.html`,`<div class="toast-container position-static d-flex flex-column gap-3">
    <div>
        <h3 class="h6">Body only</h3>
        <ngb-toast autohide="false">I am a simple static toast.</ngb-toast>
    </div>

    <div>
        <h3 class="h6">With a text header</h3>
        <ngb-toast ng-if="example.showHeaderToast" header="Hello" autohide="false" hidden="example.showHeaderToast = false">
            I am a simple static toast with a header.
        </ngb-toast>
        <button ng-if="!example.showHeaderToast" type="button" class="btn btn-sm btn-outline-primary" ng-click="example.showHeaderToast = true">
            Show toast again
        </button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/datepicker-keyboard/datepicker-keyboard.component.html`,`<p class="small text-body-secondary">Focus the calendar and press <kbd>[</kbd> or <kbd>]</kbd> to navigate by month. The built-in arrow, Home, End and Page keys continue to work.</p>
<div ng-keydown="example.onKeydown($event)">
    <ngb-datepicker ng-model="example.date" ng-ref="example.datepicker" ng-ref-read="ngbDatepicker"></ngb-datepicker>
</div>
`),e.put(`src/app/features/lib/components/disabled-pagination/disabled-pagination.component.html`,`<div class="form-check form-switch mb-3">
    <input class="form-check-input" type="checkbox" role="switch" id="pagination-disabled" ng-model="example.disabled">
    <label class="form-check-label" for="pagination-disabled">Disabled</label>
</div>

<ngb-pagination
    collection-size="70"
    page="example.page"
    page-change="example.selectPage($event)"
    ng-disabled="example.disabled">
</ngb-pagination>
`),e.put(`src/app/features/lib/components/datepicker-global/datepicker-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div><p class="fw-semibold mb-1">Global defaults used by this example</p><p class="small text-body-secondary mb-0">Two months, arrow navigation, hidden outside days, week numbers and short weekday labels.</p></div>
</div>
<div class="overflow-auto pb-3"><ngb-datepicker ng-model="example.inlineDate"></ngb-datepicker></div>
<div class="input-group" style="max-width: 22rem">
    <input class="form-control" ng-model="example.popupDate" ngb-datepicker aria-label="Globally configured popup datepicker">
    <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()" aria-label="Toggle calendar"><i class="bi bi-calendar3"></i></button>
</div>
`),e.put(`src/app/features/lib/components/disabled-datepicker/disabled-datepicker.component.html`,`<div class="form-check form-switch mb-3">
    <input id="disabled-datepicker-switch" class="form-check-input" type="checkbox" ng-model="example.disabled">
    <label class="form-check-label" for="disabled-datepicker-switch">Disable datepicker</label>
</div>
<ngb-datepicker ng-model="example.date" ng-disabled="example.disabled"></ngb-datepicker>
`),e.put(`src/app/features/lib/components/datepicker-custom-day/datepicker-custom-day.component.html`,`<ng-template ng-ref="example.customDay" let-date let-data="data" let-selected="selected" let-today="today" let-focused="focused">
    <span class="docs-custom-day" ng-class="{ selected: selected, today: today, weekend: data.weekend, focused: focused }">
        {{ date.day }}
        <i ng-if="today" class="bi bi-dot" aria-hidden="true"></i>
    </span>
</ng-template>
<ngb-datepicker ng-model="example.date" day-template="example.customDay" day-template-data="example.dayData"></ngb-datepicker>
`),e.put(`src/app/features/lib/components/datepicker-position-target/datepicker-position-target.component.html`,`<div class="row g-3 align-items-end">
    <div class="col-sm-7">
        <label class="form-label" for="positioned-datepicker-input">The input controls the popup</label>
        <div class="input-group">
            <input id="positioned-datepicker-input" class="form-control" ng-model="example.date" ngb-datepicker position-target="example.target">
            <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()">Open</button>
        </div>
    </div>
    <div class="col-sm-5 text-sm-end">
        <span id="datepicker-custom-position-target" class="d-inline-flex align-items-center gap-2 px-3 py-2 rounded border bg-body-tertiary">
            <i class="bi bi-crosshair" aria-hidden="true"></i> Popup target
        </span>
    </div>
</div>
`),e.put(`src/app/features/lib/components/datepicker-custom-month/datepicker-custom-month.component.html`,`<ng-template ng-ref="example.content" let-datepicker>
    <div class="d-flex align-items-center justify-content-between gap-2 p-2 border-bottom bg-body-tertiary">
        <button type="button" class="btn btn-sm btn-outline-secondary" ng-click="example.previous(datepicker)" aria-label="Previous month"><i class="bi bi-chevron-left"></i></button>
        <button type="button" class="btn btn-sm btn-link text-decoration-none" ng-click="example.today(datepicker)">Today</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" ng-click="example.next(datepicker)" aria-label="Next month"><i class="bi bi-chevron-right"></i></button>
    </div>
    <div class="docs-month-layout p-2">
        <div ng-repeat="month in datepicker.model.months track by $index">
            <p class="small fw-semibold text-center mb-1">{{ datepicker.i18n.getMonthLabel(month.firstDate) }}</p>
            <ngb-datepicker-month month="month.firstDate" datepicker="datepicker"></ngb-datepicker-month>
        </div>
    </div>
</ng-template>
<div class="overflow-auto pb-2">
    <ngb-datepicker display-months="2" navigation="none" outside-days="hidden" content-template="example.content"></ngb-datepicker>
</div>
`),e.put(`src/app/features/lib/components/datepicker-i18n/datepicker-i18n.component.html`,`<ngb-datepicker ng-model="example.date" i18n="example.i18n" weekdays="'short'"></ngb-datepicker>
`),e.put(`src/app/features/lib/components/datepicker-footer/datepicker-footer.component.html`,`<ng-template ng-ref="example.footer">
    <div class="d-flex gap-2 p-2 border-top bg-body-tertiary">
        <button type="button" class="btn btn-primary btn-sm" ng-click="example.today()">Today</button>
        <button type="button" class="btn btn-outline-secondary btn-sm ms-auto" ng-click="example.clear()">Clear</button>
    </div>
</ng-template>
<ngb-datepicker ng-model="example.date" footer-template="example.footer" ng-ref="example.datepicker" ng-ref-read="ngbDatepicker"></ngb-datepicker>
<p class="small text-body-secondary mt-3 mb-0">Selected date: <code>{{ example.date | json }}</code></p>
`),e.put(`src/app/features/lib/components/custom-pagination/custom-pagination.component.html`,`<ngb-pagination
    collection-size="50"
    page="example.page"
    page-change="example.selectPage($event)">
    <ng-template ngb-pagination-previous>
        <span aria-hidden="true">←</span> Previous
    </ng-template>
    <ng-template ngb-pagination-next>
        Next <span aria-hidden="true">→</span>
    </ng-template>
    <ng-template ngb-pagination-number let-page>
        <span class="fw-semibold">{{ page }}</span>
    </ng-template>
</ngb-pagination>
`),e.put(`src/app/features/lib/components/datepicker-custom-adapter/datepicker-custom-adapter.component.html`,`<label class="form-label" for="custom-adapter-input">Date using <code>dd.mm.yyyy</code></label>
<div class="input-group" style="max-width: 22rem">
    <input id="custom-adapter-input" class="form-control" ng-model="example.date" ngb-datepicker date-adapter="example.adapter" parser-formatter="example.formatter">
    <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()" aria-label="Toggle calendar"><i class="bi bi-calendar3" aria-hidden="true"></i></button>
</div>
<p class="small text-body-secondary mt-3 mb-0">Application model: <code>{{ example.date }}</code></p>
`),e.put(`src/app/features/lib/components/custom-labels-progressbar/custom-labels-progressbar.component.html`,`<div class="vstack gap-3">
    <ngb-progressbar type="success" value="25"><strong>25%</strong></ngb-progressbar>
    <ngb-progressbar type="info" value="50">Copying file <strong class="ms-1">2 of 4</strong></ngb-progressbar>
    <ngb-progressbar type="warning" value="75" striped="true" animated="true"><em>Almost there…</em></ngb-progressbar>
    <ngb-progressbar type="danger" value="100">Completed!</ngb-progressbar>
</div>
`),e.put(`src/app/features/lib/components/custom-nav/custom-nav.component.html`,`<div
    ngb-nav
    ng-ref="example.nav"
    ng-ref-read="ngbNav"
    active-id="example.activeId"
    roles="false"
    class="nav-custom">
    <div ngb-nav-item="custom-daily">
        <button type="button" ngb-nav-link>Daily</button>
        <ng-template ngb-nav-content><p class="pt-3 mb-0">Daily activity summary.</p></ng-template>
    </div>
    <div ngb-nav-item="custom-weekly">
        <button type="button" ngb-nav-link>Weekly</button>
        <ng-template ngb-nav-content><p class="pt-3 mb-0">Weekly activity summary.</p></ng-template>
    </div>
    <div ngb-nav-item="custom-monthly">
        <button type="button" ngb-nav-link>Monthly</button>
        <ng-template ngb-nav-content><p class="pt-3 mb-0">Monthly activity summary.</p></ng-template>
    </div>
</div>

<div ngb-nav-outlet="example.nav"></div>
`),e.put(`src/app/features/lib/components/contextual-text-progressbar/contextual-text-progressbar.component.html`,`<div class="vstack gap-3">
    <ngb-progressbar type="success" text-type="white" value="25" show-value="true"></ngb-progressbar>
    <ngb-progressbar type="dark" text-type="white" value="50" show-value="true"></ngb-progressbar>
    <ngb-progressbar type="light" text-type="success" value="75" show-value="true"></ngb-progressbar>
    <ngb-progressbar type="warning" text-type="dark" value="100" show-value="true"></ngb-progressbar>
</div>
`),e.put(`src/app/features/lib/components/carousel-keyboard/carousel-keyboard.component.html`,`<p class="small text-body-secondary mb-3">
    Click the carousel to focus it, then use the
    <kbd class="mx-1">←</kbd>
    and
    <kbd class="mx-1">→</kbd>
    keys.
</p>

<ngb-carousel
    aria-label="Keyboard-controlled carousel"
    interval="0"
    keyboard="true"
    show-navigation-arrows="false"
    show-navigation-indicators="false">
    <ng-template ngb-slide id="keyboard-dog">
        <img
            src="https://picsum.photos/id/1025/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="Dog wrapped in a blanket">
    </ng-template>

    <ng-template ngb-slide id="keyboard-river">
        <img
            src="https://picsum.photos/id/1035/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="River running through a forest">
    </ng-template>

    <ng-template ngb-slide id="keyboard-coast">
        <img
            src="https://picsum.photos/id/1043/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="Rocky coastline">
    </ng-template>
</ngb-carousel>
`),e.put(`src/app/features/lib/components/carousel-simple/carousel-simple.component.html`,`<ngb-carousel aria-label="Featured landscapes">
    <ng-template ngb-slide id="simple-mountain">
        <img
            src="https://picsum.photos/id/944/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="First carousel slide">
        <div class="carousel-caption d-none d-md-block">
            <h3 class="h5">Explore new perspectives</h3>
            <p>Default navigation arrows and indicators are enabled.</p>
        </div>
    </ng-template>

    <ng-template ngb-slide id="simple-lake">
        <img
            src="https://picsum.photos/id/1011/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="Second carousel slide">
        <div class="carousel-caption d-none d-md-block">
            <h3 class="h5">Move at your own pace</h3>
            <p>Use either the controls or the navigation indicators.</p>
        </div>
    </ng-template>

    <ng-template ngb-slide id="simple-valley">
        <img
            src="https://picsum.photos/id/984/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="Third carousel slide">
        <div class="carousel-caption d-none d-md-block">
            <h3 class="h5">Ready by default</h3>
            <p>No local configuration is required.</p>
        </div>
    </ng-template>
</ngb-carousel>
`),e.put(`src/app/features/lib/components/carousel-controls/carousel-controls.component.html`,`<div class="d-flex flex-column gap-3">
    <div class="row g-3">
        <div class="col-sm-6">
            <div class="form-check form-switch">
                <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="carousel-pause-hover"
                    ng-model="example.pauseOnHover">
                <label class="form-check-label" for="carousel-pause-hover">Pause on hover</label>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-check form-switch">
                <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="carousel-pause-focus"
                    ng-model="example.pauseOnFocus">
                <label class="form-check-label" for="carousel-pause-focus">Pause on focus</label>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-check form-switch">
                <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="carousel-unpause-arrows"
                    ng-model="example.unpauseOnArrow">
                <label class="form-check-label" for="carousel-unpause-arrows">Unpause when clicking an arrow</label>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-check form-switch">
                <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="carousel-pause-indicator"
                    ng-model="example.pauseOnIndicator">
                <label class="form-check-label" for="carousel-pause-indicator">Pause when clicking an indicator</label>
            </div>
        </div>
    </div>

    <div>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.toggleCycle()">
            <i class="bi me-1" ng-class="example.paused ? 'bi-play-fill' : 'bi-pause-fill'" aria-hidden="true"></i>
            {{ example.paused ? 'Cycle' : 'Pause' }}
        </button>
    </div>

    <ngb-carousel
        aria-label="Configurable carousel"
        interval="3000"
        pause-on-hover="example.pauseOnHover"
        pause-on-focus="example.pauseOnFocus"
        show-navigation-arrows="true"
        show-navigation-indicators="true"
        slide="example.onSlide($event)">
        <ng-template ngb-slide id="controls-building">
            <img
                src="https://picsum.photos/id/1050/900/500"
                class="d-block w-100 h-auto"
                width="900"
                height="500"
                alt="Building beside the water">
        </ng-template>

        <ng-template ngb-slide id="controls-landscape">
            <img
                src="https://picsum.photos/id/1067/900/500"
                class="d-block w-100 h-auto"
                width="900"
                height="500"
                alt="Open landscape at sunset">
        </ng-template>

        <ng-template ngb-slide id="controls-field">
            <img
                src="https://picsum.photos/id/1074/900/500"
                class="d-block w-100 h-auto"
                width="900"
                height="500"
                alt="Field beneath a cloudy sky">
        </ng-template>

        <ng-template ngb-slide id="controls-hills">
            <img
                src="https://picsum.photos/id/1084/900/500"
                class="d-block w-100 h-auto"
                width="900"
                height="500"
                alt="Hills in warm light">
        </ng-template>
    </ngb-carousel>
</div>
`),e.put(`src/app/features/lib/components/basic-rating/basic-rating.component.html`,`<ngb-rating rate="example.rating" rate-change="example.setRating($event)"></ngb-rating>
<hr>
<p class="mb-0">Rate: <strong>{{ example.rating }}</strong></p>
`),e.put(`src/app/features/lib/components/closeable-toast/closeable-toast.component.html`,`<div class="toast-container position-static">
    <ngb-toast ng-if="example.visible" header="Close me" autohide="false" hidden="example.close()">
        Use the close button in the header. This toast will return after three seconds.
    </ngb-toast>

    <div ng-if="!example.visible" class="alert alert-light border mb-0" role="status">
        The toast will be back shortly.
    </div>
</div>
`),e.put(`src/app/features/lib/components/basic-timepicker/basic-timepicker.component.html`,`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time"></ngb-timepicker>
    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
</div>
`),e.put(`src/app/features/lib/components/basic-scrollspy/basic-scrollspy.component.html`,`<div
    class="bg-body-tertiary border rounded p-3 mb-3"
    style="height: 14rem"
    ngb-scroll-spy
    root-margin="0px 0px -45%"
    ng-ref="example.spy"
    ng-ref-read="ngbScrollSpy">
    <section class="pb-5" ngb-scroll-spy-fragment="basic-scrollspy-first">
        <h3 class="h5">First heading</h3>
        <p>Scrollspy observes each registered fragment and keeps track of the section currently crossing the viewport.</p>
    </section>
    <section class="pb-5" ngb-scroll-spy-fragment="basic-scrollspy-second">
        <h3 class="h5">Second heading</h3>
        <p>The scroll container is the element carrying the <code>ngb-scroll-spy</code> directive.</p>
    </section>
    <section class="pb-5 mb-5" ngb-scroll-spy-fragment="basic-scrollspy-third">
        <h3 class="h5">Third heading</h3>
        <p class="mb-5">Every fragment gets its DOM id from <code>ngb-scroll-spy-fragment</code>.</p>
    </section>
</div>

<p class="small text-body-secondary mb-0">
    Active fragment: <code>{{ example.spy.active || 'none' }}</code>
</p>
`),e.put(`src/app/features/lib/components/basic-datepicker/basic-datepicker.component.html`,`<ngb-datepicker ng-model="example.date"></ngb-datepicker>
<p class="small text-body-secondary mt-3 mb-0">Selected date: <code>{{ example.date | json }}</code></p>
`),e.put(`src/app/features/lib/components/alert-custom/alert-custom.component.html`,`<ngb-alert type="custom" dismissible="false" animation="false">
    <div class="d-flex align-items-start gap-3">
        <i class="bi bi-lightning-charge-fill fs-4 text-primary" aria-hidden="true"></i>
        <div>
            <h3 class="h6 mb-1">Custom alert</h3>
            <p class="mb-0">The <code>.alert-custom</code> class defines this theme without changing NgbJS.</p>
        </div>
    </div>
</ngb-alert>
`),e.put(`src/app/features/lib/components/alternative-nav/alternative-nav.component.html`,`<nav
    ngb-nav
    ng-ref="example.nav"
    ng-ref-read="ngbNav"
    active-id="example.activeId"
    class="nav-tabs">
    <div ngb-nav-item="alternative-home">
        <button type="button" ngb-nav-link>Button link</button>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">This item uses a button without list markup.</p>
        </ng-template>
    </div>
    <div ngb-nav-item="alternative-profile">
        <a ngb-nav-link>Anchor link</a>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">This item uses an anchor inside a plain div.</p>
        </ng-template>
    </div>
    <div ngb-nav-item="alternative-contact">
        <button type="button" ngb-nav-link>Another button</button>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">Buttons and anchors can be interchanged.</p>
        </ng-template>
    </div>
</nav>

<div ngb-nav-outlet="example.nav"></div>
`),e.put(`src/app/features/lib/components/alert-global/alert-global.component.html`,`<div class="alert alert-light border d-flex align-items-start gap-3" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            The default type is success, animations are disabled and alerts are not dismissible.
        </p>
    </div>
</div>

<ngb-alert>
    This alert has no local inputs. Its appearance and behavior come from <code>NgbAlertConfig</code>.
</ngb-alert>
`),e.put(`src/app/features/lib/components/accordion-toggle-panels/accordion-toggle-panels.component.html`,`<div class="d-flex flex-wrap gap-2 mb-3">
    <button type="button" class="btn btn-primary btn-sm" ng-click="example.expandAll()">Expand all</button>
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.collapseAll()">Collapse all</button>
    <button type="button" class="btn btn-outline-secondary btn-sm" ng-click="example.toggle('toggle-first')">Toggle first</button>
    <button type="button" class="btn btn-outline-secondary btn-sm" ng-click="example.toggle('toggle-second')">Toggle second</button>
</div>

<div
    ngb-accordion
    animation="true"
    close-others="false"
    destroy-on-hide="true"
    ng-ref="accordion"
    ng-ref-read="ngbAccordion">
    <div ngb-accordion-item="'toggle-first'">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>First panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">This panel can be controlled from its header or the buttons above.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'toggle-second'">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Second panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">Use the accordion controller to expand, collapse or toggle known ids.</p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/basic-pagination/basic-pagination.component.html`,`<ngb-pagination
    collection-size="70"
    page="example.page"
    page-change="example.selectPage($event)">
</ngb-pagination>

<p class="small text-body-secondary mb-0">Current page: <strong>{{ example.page }}</strong></p>
`),e.put(`src/app/features/lib/components/advanced-pagination/advanced-pagination.component.html`,`<div class="vstack gap-4">
    <div>
        <p class="small fw-semibold mb-2">Restricted page range</p>
        <ngb-pagination
            collection-size="120"
            page="example.paginatedPage"
            page-change="example.selectPaginatedPage($event)"
            max-size="5"
            boundary-links="true">
        </ngb-pagination>
    </div>

    <div>
        <p class="small fw-semibold mb-2">Rotating page range</p>
        <ngb-pagination
            collection-size="240"
            page="example.rotatedPage"
            page-change="example.selectRotatedPage($event)"
            max-size="5"
            rotate="true"
            boundary-links="true">
        </ngb-pagination>
    </div>

    <div>
        <p class="small fw-semibold mb-2">Without ellipses</p>
        <ngb-pagination
            collection-size="240"
            page="example.compactPage"
            page-change="example.selectCompactPage($event)"
            max-size="5"
            rotate="true"
            ellipses="false">
        </ngb-pagination>
    </div>
</div>
`),e.put(`src/app/features/lib/components/accordion-global/accordion-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            Animation is disabled, only one panel stays open and collapsed content remains in the DOM.
        </p>
    </div>
</div>

<div ngb-accordion>
    <div ngb-accordion-item="'global-first'" collapsed="false">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>First panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">This accordion receives its behavior from <code>NgbAccordionConfig</code>.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'global-second'">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Second panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">Opening this item collapses the first without local accordion inputs.</p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`),e.put(`src/app/features/home/pages/home-page/home-page.component.html`,`<docs-header show-menu="false"></docs-header>

<docs-home-hero></docs-home-hero>

<section class="container px-4 text-center">
    <div class="row justify-content-center mb-5">
        <div class="col-md-10 col-lg-9 col-xl-8">
            <p class="small text-body-secondary mb-2">
                Install with npm
            </p>

            <div class="d-flex align-items-center gap-3 rounded-3 border border-secondary bg-black px-3 py-3 text-start shadow-sm">
                <code class="flex-grow-1 fs-5 text-light">{{ $.installCommand }}</code>

                <docs-copy-button
                    value="$.installCommand"
                    button-class="text-light"
                    aria-label="Copy install command">
                </docs-copy-button>
            </div>
        </div>
    </div>
</section>
`),e.put(`src/app/features/lib/components/accordion-simple/accordion-simple.component.html`,`<ng-template ng-ref="templateHeader">
    <span class="d-inline-flex align-items-center gap-2">
        <i class="bi bi-stars text-primary" aria-hidden="true"></i>
        Header rendered from an ng-template
    </span>
</ng-template>

<div ngb-accordion animation="true" close-others="false" destroy-on-hide="true">
    <div ngb-accordion-item="'simple-first'" collapsed="false">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Regular header</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">This panel uses the standard accordion header and button.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'simple-template'">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>
                <ng-container ng-template-outlet="templateHeader"></ng-container>
            </button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">The header content comes from a reusable AngularJS template.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'simple-disabled'" ng-disabled="true">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Disabled panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">Disabled items ignore pointer and keyboard toggle actions.</p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/accordion-custom-header/accordion-custom-header.component.html`,`<div ngb-accordion animation="true" close-others="false" destroy-on-hide="true">
    <div ngb-accordion-item="'custom-profile'" collapsed="false">
        <h2 ngb-accordion-header>
            <button type="button" class="accordion-button d-flex align-items-center gap-3" ngb-accordion-toggle>
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary p-2">
                    <i class="bi bi-person" aria-hidden="true"></i>
                </span>
                <span>
                    <span class="d-block fw-semibold">Profile</span>
                    <span class="d-block small fw-normal text-body-secondary">Personal information and public details</span>
                </span>
            </button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">Custom headers can combine Bootstrap utilities, icons and supporting text.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'custom-preferences'">
        <h2 ngb-accordion-header>
            <button type="button" class="accordion-button d-flex align-items-center gap-3" ngb-accordion-toggle>
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-warning-emphasis p-2">
                    <i class="bi bi-sliders" aria-hidden="true"></i>
                </span>
                <span>
                    <span class="d-block fw-semibold">Preferences</span>
                    <span class="d-block small fw-normal text-body-secondary">Language, appearance and notifications</span>
                </span>
            </button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">The toggle directive supplies behavior while Bootstrap classes define the presentation.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'custom-security'">
        <h2 ngb-accordion-header>
            <button type="button" class="accordion-button d-flex align-items-center gap-3" ngb-accordion-toggle>
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success p-2">
                    <i class="bi bi-shield-lock" aria-hidden="true"></i>
                </span>
                <span>
                    <span class="d-block fw-semibold">Security</span>
                    <span class="d-block small fw-normal text-body-secondary">Password and active sessions</span>
                </span>
            </button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">Use semantic buttons so custom headers remain keyboard accessible.</p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/carousel-global/carousel-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            Slides change every 2.5 seconds without animation, do not pause on hover or focus,
            hide the arrows and stop after the final slide.
        </p>
    </div>
</div>

<ngb-carousel aria-label="Carousel using global configuration">
    <ng-template ngb-slide id="global-coast">
        <img
            src="https://picsum.photos/id/11/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="First globally configured carousel slide">
    </ng-template>

    <ng-template ngb-slide id="global-mountains">
        <img
            src="https://picsum.photos/id/29/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="Second globally configured carousel slide">
    </ng-template>

    <ng-template ngb-slide id="global-city">
        <img
            src="https://picsum.photos/id/42/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="Third globally configured carousel slide">
    </ng-template>
</ngb-carousel>
`),e.put(`src/app/features/lib/components/alert-closeable/alert-closeable.component.html`,`<div class="d-flex justify-content-end mb-3">
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.reset()">
        <i class="bi bi-arrow-clockwise me-1" aria-hidden="true"></i>
        Reset alerts
    </button>
</div>

<ngb-alert
    ng-repeat="alert in example.alerts track by alert.id"
    type="{{ alert.type }}"
    dismissible="true"
    animation="alert.animation"
    closed="example.close(alert.id)">
    {{ alert.message }}
    <span class="small opacity-75">{{ alert.animation ? 'Animated' : 'No animation' }}</span>
</ngb-alert>

<p class="text-body-secondary mb-0" ng-if="!example.alerts.length">
    All alerts have been closed.
</p>
`),e.put(`src/app/features/home/components/home-hero/home-hero.component.html`,`<section class="container px-4 py-5 text-center">
    <div class="row justify-content-center pt-5 mt-lg-5">
        <div class="col-lg-11 col-xl-10">
            <p class="h4 fw-bold text-primary mb-4">
                NgbJS
                <small class="fs-6 fw-normal text-body-secondary ms-2">Beta 1.0</small>
            </p>

            <h1 class="display-2 fw-bold lh-1 mb-4 text-body-emphasis">
                <span class="text-primary">Parity</span> is Priority.
            </h1>

            <p class="lead fs-4 text-body-secondary mb-0">
                ng-bootstrap components and APIs, thoughtfully ported to AngularJS with
                Bootstrap-native styling and behavior.
            </p>
        </div>
    </div>

    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center mt-5 mb-5">
        <a ui-sref="docs.dashboard.introduction" class="btn btn-primary btn-lg px-4">
            Get started
        </a>

        <a ui-sref="docs.dashboard.accordion" class="btn btn-outline-secondary btn-lg px-4">
            Documentation
        </a>
    </div>
</section>
`),e.put(`src/app/features/lib/components/accordion-content/accordion-content.component.html`,`<div ngb-accordion animation="true" close-others="false" destroy-on-hide="false">
    <div ngb-accordion-item="'persistent-content'" collapsed="false">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Persistent form content</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <label class="form-label" for="accordion-persistent-value">Draft value</label>
                    <input
                        id="accordion-persistent-value"
                        class="form-control"
                        type="text"
                        ng-model="example.draft">
                    <p class="small text-body-secondary mt-2 mb-0">
                        Edit the value, collapse the panel and open it again. The same view remains in the DOM.
                    </p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`),e.put(`src/app/features/guide/pages/why-ngbjs-page/why-ngbjs-page.component.html`,`<article>
    <header class="pb-4 mb-5 border-bottom">
        <p class="small fw-semibold text-uppercase text-primary mb-2">Guide</p>
        <h1 class="display-5 fw-bold lh-sm text-body-emphasis mb-3">Why NgbJS?</h1>
        <p class="lead text-body-secondary mb-0">
            Because a legacy application can still be critical, actively developed, and expected to
            deliver a modern experience.
        </p>
    </header>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="the-legacy-reality">
        <h2 class="h3 mb-3">The legacy reality</h2>
        <p class="lead text-body-secondary">
            A full migration is not always the next available step.
        </p>
        <p>
            Large AngularJS applications often contain years of business rules, integrations, and
            operational knowledge. Replacing them can demand more time, budget, and coordination than a
            team currently has, even while users continue to expect new features and current interfaces.
        </p>
        <p class="mb-0">
            Without a modern component library, teams must either stop improving the interface or rebuild
            common interactions themselves. Neither option makes the legacy application easier to maintain
            or eventually migrate.
        </p>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="before-and-after">
        <h2 class="h3 mb-4">From repeated adaptation to a shared model</h2>

        <div class="row g-4">
            <div class="col-lg-6">
                <div class="h-100 rounded-3 border p-4">
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <i class="bi bi-copy text-body-secondary" aria-hidden="true"></i>
                        <h3 class="h5 mb-0">Without NgbJS</h3>
                    </div>
                    <ul class="text-body-secondary mb-0 ps-3">
                        <li class="mb-2">Copy the modern component markup.</li>
                        <li class="mb-2">Translate it to AngularJS syntax.</li>
                        <li class="mb-2">Rebuild interactions and state by hand.</li>
                        <li class="mb-2">Accept incomplete or inconsistent behavior.</li>
                        <li>Maintain two unrelated implementations over time.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="h-100 rounded-3 border border-primary bg-primary-subtle p-4">
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <i class="bi bi-link-45deg text-primary" aria-hidden="true"></i>
                        <h3 class="h5 mb-0">With NgbJS</h3>
                    </div>
                    <ul class="mb-0 ps-3">
                        <li class="mb-2">Start from a familiar ng-bootstrap API.</li>
                        <li class="mb-2">Reuse the same component model and terminology.</li>
                        <li class="mb-2">Rely on packaged, documented behavior.</li>
                        <li class="mb-2">Reduce differences between both applications.</li>
                        <li>Make later migration work more predictable.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="what-it-unlocks">
        <h2 class="h3 mb-3">What NgbJS unlocks</h2>
        <p class="text-body-secondary mb-4">
            The value is not only in the components themselves, but in the consistency they create.
        </p>

        <div class="row g-3">
            <div class="col-md-6 col-xl-4">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-window fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Modern interfaces</h3>
                    <p class="small text-body-secondary mb-0">
                        Give active AngularJS products current Bootstrap components and interactions.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-xl-4">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-person-check fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">A familiar API</h3>
                    <p class="small text-body-secondary mb-0">
                        Let ng-bootstrap experience remain useful when developers work in AngularJS.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-xl-4">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-arrows-angle-contract fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Less divergence</h3>
                    <p class="small text-body-secondary mb-0">
                        Keep parallel applications closer in terminology, behavior, and implementation.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-xl-4">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-tools fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Less custom maintenance</h3>
                    <p class="small text-body-secondary mb-0">
                        Replace one-off, partially implemented components with reusable library behavior.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-xl-4">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-journal-code fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Transferable knowledge</h3>
                    <p class="small text-body-secondary mb-0">
                        Share concepts, documentation patterns, and conventions across framework versions.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-xl-4">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-signpost-2 fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">A clearer migration path</h3>
                    <p class="small text-body-secondary mb-0">
                        Reduce the conceptual changes required when a component eventually moves to Angular.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="when-to-use-ngbjs">
        <h2 class="h3 mb-4">When should you use NgbJS?</h2>

        <div class="row g-4">
            <div class="col-lg-6">
                <div class="h-100 rounded-3 border border-success-subtle bg-success-subtle p-4">
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <i class="bi bi-check-circle-fill text-success" aria-hidden="true"></i>
                        <h3 class="h5 mb-0">A strong fit</h3>
                    </div>
                    <ul class="mb-0 ps-3">
                        <li class="mb-2">Your AngularJS application will remain active.</li>
                        <li class="mb-2">A complete migration is not currently realistic.</li>
                        <li class="mb-2">Modern and legacy applications must stay consistent.</li>
                        <li class="mb-2">Your team already knows ng-bootstrap.</li>
                        <li>You want to make a gradual migration less disruptive.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="h-100 rounded-3 border p-4">
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <i class="bi bi-x-circle-fill text-body-secondary" aria-hidden="true"></i>
                        <h3 class="h5 mb-0">Probably not the right fit</h3>
                    </div>
                    <ul class="text-body-secondary mb-0 ps-3">
                        <li class="mb-2">You are starting a new application.</li>
                        <li class="mb-2">You can use modern Angular and ng-bootstrap directly.</li>
                        <li class="mb-2">Your product does not use Bootstrap.</li>
                        <li>Your legacy application is already close to retirement.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-4" ngb-scroll-spy-fragment="a-bridge-not-a-destination">
        <div class="rounded-4 bg-body-tertiary border p-4 p-md-5 text-center">
            <i class="bi bi-signpost-split fs-2 text-primary" aria-hidden="true"></i>
            <h2 class="h3 mt-3">A bridge, not a destination</h2>
            <p class="text-body-secondary mx-auto mb-4" style="max-width: 42rem;">
                NgbJS does not make AngularJS the right choice for new products, and it does not replace a
                migration strategy. It helps valuable existing applications move forward while that
                strategy becomes possible.
            </p>
            <a class="btn btn-primary" ui-sref="docs.dashboard.accordion">
                Explore the components
                <i class="bi bi-arrow-right ms-2" aria-hidden="true"></i>
            </a>
        </div>
    </section>
</article>
`),e.put(`src/app/features/guide/pages/philosophy-page/philosophy-page.component.html`,`<article>
    <header class="pb-4 mb-5 border-bottom">
        <p class="small fw-semibold text-uppercase text-primary mb-2">Guide</p>
        <h1 class="display-5 fw-bold lh-sm text-body-emphasis mb-3">Philosophy</h1>
        <p class="lead text-body-secondary mb-0">
            NgbJS favors a familiar, predictable path between AngularJS and modern Angular.
        </p>
    </header>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="parity-is-priority">
        <div class="rounded-4 bg-primary text-white p-4 p-md-5">
            <p class="small fw-semibold text-uppercase opacity-75 mb-3">The guiding principle</p>
            <h2 class="display-6 fw-bold mb-3">Parity is Priority.</h2>
            <p class="lead mb-0 opacity-75">
                The closer NgbJS stays to ng-bootstrap, the less developers need to relearn, rewrite,
                or reinterpret when moving between AngularJS and Angular.
            </p>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="what-parity-means">
        <h2 class="h3 mb-3">What parity means</h2>
        <p class="text-body-secondary mb-4">
            Parity is not limited to matching how a component looks. It is pursued across the entire
            developer experience.
        </p>

        <div class="row g-3">
            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-braces fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">API parity</h3>
                    <p class="text-body-secondary mb-0">
                        Components, services, configuration options, and public names should remain
                        recognizable to developers coming from ng-bootstrap.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-code-square fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Syntax parity</h3>
                    <p class="text-body-secondary mb-0">
                        Templates should express the same intent with as little framework-specific
                        translation as possible.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-toggles fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Behavioral parity</h3>
                    <p class="text-body-secondary mb-0">
                        Interaction, state, defaults, and edge cases should behave consistently across
                        both libraries.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-lightbulb fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Conceptual parity</h3>
                    <p class="text-body-secondary mb-0">
                        The same mental model should apply, so knowledge gained in one codebase remains
                        useful in the other.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="familiar-by-design">
        <div class="row g-4">
            <div class="col-lg-7">
                <h2 class="h3 mb-3">Familiar by design</h2>
                <p>
                    NgbJS does not introduce a different API simply because it runs on AngularJS. When
                    ng-bootstrap already provides a well-understood solution, reproducing that solution
                    is more valuable than inventing a new abstraction.
                </p>
                <p class="mb-0">
                    Familiarity reduces context switching for teams maintaining both generations of an
                    application. Documentation, examples, and previous experience become transferable
                    instead of being tied to only one framework.
                </p>
            </div>

            <div class="col-lg-5">
                <aside class="h-100 rounded-3 bg-body-tertiary border p-4">
                    <p class="h5 mb-3">A simple decision rule</p>
                    <blockquote class="mb-0">
                        <p class="mb-2">
                            If ng-bootstrap users already know how a component should work, NgbJS should
                            make that knowledge useful.
                        </p>
                    </blockquote>
                </aside>
            </div>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="a-migration-bridge">
        <h2 class="h3 mb-3">A bridge between codebases</h2>
        <p class="text-body-secondary mb-4">
            Parity makes day-to-day development easier now and makes a future migration more predictable.
        </p>

        <div class="row g-3 align-items-stretch text-center">
            <div class="col-md">
                <div class="h-100 rounded-3 border p-4">
                    <span class="badge text-bg-secondary mb-3">Legacy</span>
                    <h3 class="h5">AngularJS</h3>
                    <p class="small text-body-secondary mb-0">Existing application and business logic</p>
                </div>
            </div>

            <div class="col-md-auto d-flex align-items-center justify-content-center">
                <i class="bi bi-arrow-right fs-4 text-body-secondary d-none d-md-block" aria-hidden="true"></i>
                <i class="bi bi-arrow-down fs-4 text-body-secondary d-md-none" aria-hidden="true"></i>
            </div>

            <div class="col-md">
                <div class="h-100 rounded-3 border border-primary bg-primary-subtle p-4">
                    <span class="badge text-bg-primary mb-3">Bridge</span>
                    <h3 class="h5">NgbJS</h3>
                    <p class="small text-body-secondary mb-0">Familiar components, APIs, and behavior</p>
                </div>
            </div>

            <div class="col-md-auto d-flex align-items-center justify-content-center">
                <i class="bi bi-arrow-right fs-4 text-body-secondary d-none d-md-block" aria-hidden="true"></i>
                <i class="bi bi-arrow-down fs-4 text-body-secondary d-md-none" aria-hidden="true"></i>
            </div>

            <div class="col-md">
                <div class="h-100 rounded-3 border p-4">
                    <span class="badge text-bg-secondary mb-3">Modern</span>
                    <h3 class="h5">Angular</h3>
                    <p class="small text-body-secondary mb-0">ng-bootstrap and the target architecture</p>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-4" ngb-scroll-spy-fragment="when-parity-is-hard">
        <h2 class="h3 mb-3">When exact parity is difficult</h2>
        <p>
            AngularJS and Angular have different component models, template syntax, and runtime
            capabilities. Small differences are sometimes unavoidable, but they should be deliberate,
            limited, and easy to understand.
        </p>
        <p>
            A feature is not rejected only because AngularJS cannot reproduce it directly. NgbJS first
            looks for a compatible implementation that preserves the original behavior. Some of those
            efforts required supporting libraries such as <code>ngjs-core</code> to provide capabilities
            that AngularJS did not have on its own.
        </p>

        <div class="alert alert-primary d-flex gap-3 mb-0" role="note">
            <i class="bi bi-bullseye flex-shrink-0" aria-hidden="true"></i>
            <div>
                Some parts of ng-bootstrap could be reused directly, while others had to be adapted or
                reimplemented for AngularJS. In every case, the goal is to preserve the closest practical
                parity in API, intent, and behavior.
            </div>
        </div>
    </section>
</article>
`),e.put(`src/app/features/guide/pages/introduction-page/introduction-page.component.html`,`<article>
    <header class="pb-4 mb-5 border-bottom">
        <p class="small fw-semibold text-uppercase text-primary mb-2">Guide</p>
        <h1 class="display-5 fw-bold lh-sm text-body-emphasis mb-3">Introduction</h1>
        <p class="lead text-body-secondary mb-0">
            Modern Bootstrap components for AngularJS, shaped by the API and behavior of ng-bootstrap.
        </p>
    </header>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="origin">
        <div class="row g-4 align-items-stretch">
            <div class="col-lg-8">
                <h2 class="h3 mb-3">Born from a real legacy application</h2>

                <p>
                    NgbJS began inside a large AngularJS application that was still essential to the
                    business, but too complex to migrate all at once. The application needed to keep
                    evolving and deliver a modern interface while staying aligned with another product
                    built with modern Angular and ng-bootstrap.
                </p>

                <p>
                    A feature created for the modern application, such as a payment flow, also needed an
                    AngularJS counterpart. In the modern codebase, ng-bootstrap provided the components
                    and their behavior. In the legacy application, the same work meant copying markup,
                    adapting it to the older stack, and rebuilding interactions by hand—often only
                    partially.
                </p>

                <p class="mb-0">
                    NgbJS grew out of that repeated translation work: bring the ng-bootstrap experience
                    to AngularJS and reduce the distance between both applications.
                </p>
            </div>

            <div class="col-lg-4 d-flex">
                <aside class="h-100 w-100 d-flex flex-column justify-content-center rounded-3 bg-body-tertiary border p-4">
                    <i class="bi bi-arrow-left-right fs-3 text-primary" aria-hidden="true"></i>
                    <p class="h5 mt-3 mb-2">One component model</p>
                    <p class="small text-body-secondary mb-0">
                        Build familiar experiences across AngularJS and Angular without reinventing every
                        component for the legacy application.
                    </p>

                    <div class="d-grid gap-3 mt-4 pt-4 border-top text-center">
                        <div class="rounded-3 border bg-body px-3 py-3">
                            <span class="badge rounded-pill bg-primary-subtle text-primary-emphasis">Modern</span>
                            <p class="small fw-semibold mt-2 mb-0">Angular + ng-bootstrap</p>
                        </div>

                        <div class="text-body-secondary lh-1" aria-hidden="true">
                            <i class="bi bi-arrow-down-up"></i>
                        </div>

                        <div class="rounded-3 border bg-body px-3 py-3">
                            <span class="badge rounded-pill bg-primary-subtle text-primary-emphasis">Legacy</span>
                            <p class="small fw-semibold mt-2 mb-0">AngularJS + NgbJS</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="what-is-ngbjs">
        <h2 class="h3 mb-3">What is NgbJS?</h2>

        <p class="lead text-body-secondary">
            NgbJS is a port of ng-bootstrap for AngularJS, designed to preserve its API and behavior as
            closely as the differences between the two frameworks allow.
        </p>

        <p>
            It is more than a collection of visually similar components. NgbJS aims to preserve the same
            mental model: developers who know ng-bootstrap should recognize its components, services,
            options, and interaction patterns, then move between AngularJS and Angular with fewer changes.
        </p>

        <p class="mb-0">
            Features that initially appeared difficult to reproduce were not simply discarded. Supporting
            them also led to complementary infrastructure such as <code>ngjs-core</code>, which brings
            capabilities required by NgbJS into the AngularJS environment.
        </p>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="who-is-it-for">
        <h2 class="h3 mb-3">Who is it for?</h2>
        <p class="text-body-secondary mb-4">
            NgbJS is intended for teams whose AngularJS applications still need to grow, even when a full
            migration is not immediately possible.
        </p>

        <div class="row g-3">
            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-buildings fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Long-lived applications</h3>
                    <p class="text-body-secondary mb-0">
                        Critical AngularJS systems that will remain in production and continue receiving
                        features for years.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-layers fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Mixed technology stacks</h3>
                    <p class="text-body-secondary mb-0">
                        Products where AngularJS and modern Angular applications must provide consistent
                        interfaces and behavior.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-signpost-split fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Gradual migrations</h3>
                    <p class="text-body-secondary mb-0">
                        Teams preparing for a future migration while working within current time, budget,
                        or architectural constraints.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-bootstrap fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">ng-bootstrap developers</h3>
                    <p class="text-body-secondary mb-0">
                        Developers who want familiar Bootstrap components and APIs when moving between
                        modern Angular and AngularJS codebases.
                    </p>
                </div>
            </div>
        </div>

        <div class="alert alert-secondary d-flex gap-3 mt-4 mb-0" role="note">
            <i class="bi bi-info-circle-fill flex-shrink-0" aria-hidden="true"></i>
            <div>
                NgbJS is not a reason to choose AngularJS for a new application. It exists to help
                established AngularJS systems modernize and move forward.
            </div>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="project-status">
        <div class="rounded-3 border border-warning-subtle bg-warning-subtle p-4">
            <div class="d-flex align-items-center gap-2 mb-2">
                <span class="badge text-bg-warning">Beta</span>
                <h2 class="h4 mb-0">Project status</h2>
            </div>

            <p class="mb-0">
                NgbJS is in beta because some components are still under review and may contain known bugs
                or edge cases that are not yet fully covered. Its syntax and intended behavior follow
                ng-bootstrap and are not expected to change as part of this review; ongoing work focuses on
                validation, fixes, and bringing each implementation to full parity.
            </p>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="installation">
        <h2 class="h3 mb-3">Installation</h2>
        <p class="text-body-secondary mb-4">
            Add NgbJS to your project with your preferred package manager.
        </p>

        <div class="rounded-3 border overflow-hidden">
            <div class="bg-body-tertiary border-bottom px-3 pt-2">
                <ul
                    class="nav nav-tabs border-bottom-0"
                    ngb-nav
                    active-id="$.activePackageManager"
                    animation="false"
                    ng-ref="$.packageManagerNav"
                    ng-ref-read="ngbNav">
                    <li
                        ng-repeat="manager in $.packageManagers track by manager.id"
                        ngb-nav-item="{{ manager.id }}">
                        <button type="button" ngb-nav-link>{{ manager.name }}</button>

                        <ng-template ngb-nav-content>
                            <div class="d-flex align-items-center gap-3 bg-black px-3 py-3">
                                <code class="flex-grow-1 text-light">{{ manager.command }}</code>
                                <docs-copy-button
                                    value="manager.command"
                                    button-class="text-light"
                                    aria-label="Copy {{ manager.name }} install command">
                                </docs-copy-button>
                            </div>
                        </ng-template>
                    </li>
                </ul>
            </div>

            <div ngb-nav-outlet="$.packageManagerNav"></div>
        </div>
    </section>

    <section class="pb-4" ngb-scroll-spy-fragment="acknowledgements">
        <div class="row g-4 align-items-start">
            <div class="col-md-auto">
                <div class="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary" style="width: 3rem; height: 3rem;">
                    <i class="bi bi-heart-fill" aria-hidden="true"></i>
                </div>
            </div>

            <div class="col">
                <h2 class="h3 mb-3">Built on the work of ng-bootstrap</h2>
                <p>
                    NgbJS exists thanks to the outstanding work of the
                    <a href="https://github.com/ng-bootstrap/ng-bootstrap" target="_blank" rel="noopener noreferrer">ng-bootstrap team and community</a>.
                    Its API, architecture, components, and documentation have been the primary reference
                    for this port.
                </p>
                <p>
                    Portions of this documentation are adapted from the
                    <a href="https://ng-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">official ng-bootstrap documentation</a>,
                    licensed under
                    <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>.
                    Changes were made to reflect AngularJS, the NgbJS API, and this project's examples.
                </p>
                <p>
                    Parts of NgbJS are derived from and adapted from the ng-bootstrap source code, used under
                    the terms of its
                    <a href="https://github.com/ng-bootstrap/ng-bootstrap/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a>.
                </p>
                <p class="text-body-secondary mb-0">
                    NgbJS is an independent project and is not part of the official ng-bootstrap project.
                    It is built with deep respect and gratitude for the people who created and continue to
                    maintain the original library.
                </p>
            </div>
        </div>
    </section>
</article>
`),e.put(`src/app/core/layouts/components/footer/footer.component.html`,`<footer class="border-top bg-body-tertiary">
    <div class="container-xl px-3 px-md-4 px-xl-5 py-4">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-xxl-8 text-center">
                <a class="d-inline-flex align-items-center justify-content-center gap-2 fw-semibold text-body text-decoration-none mb-2" ui-sref="docs.home">
                    <span class="d-inline-flex align-items-center justify-content-center rounded-2 bg-primary text-white p-2">
                        <i class="bi bi-braces" aria-hidden="true"></i>
                    </span>
                    <span>ngb-js</span>
                </a>
                <p class="small text-body-secondary mb-0">
                    An independent AngularJS port. Not affiliated with or endorsed by the ng-bootstrap team.
                </p>

                <hr class="mx-auto my-3" style="max-width: 4rem;">

                <div class="small text-body-secondary">
                    <p class="mb-2">
                        Portions of the code are derived from
                        <a href="https://github.com/ng-bootstrap/ng-bootstrap" target="_blank" rel="noopener noreferrer">ng-bootstrap</a>
                        under the
                        <a href="https://github.com/ng-bootstrap/ng-bootstrap/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a>.
                    </p>
                    <p class="mb-0">
                        Portions of this documentation are adapted from the
                        <a href="https://ng-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">ng-bootstrap documentation</a>
                        under
                        <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>.
                        Changes were made for AngularJS and NgbJS.
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
`),e.put(`src/app/core/layouts/pages/menu-abstract-page/menu-abstract-page.component.html`,`<div class="vh-100 d-flex flex-column overflow-hidden">
    <docs-header></docs-header>

    <main class="container-fluid flex-grow-1 overflow-hidden px-0">
        <section class="row g-0 h-100">
            <div class="col-lg-3 col-xl-2 d-none d-lg-block h-100 overflow-y-auto bg-body-tertiary border-end">
                <docs-menu mode="desktop"></docs-menu>
            </div>

            <div
                id="docs-content-scroll"
                class="col-12 col-lg-9 col-xl-10 h-100 overflow-y-auto"
                ngb-scroll-spy
                root-margin="0px 0px -60%">
                <div class="row g-0 min-vh-100">
                    <div class="col-12 col-xl-9 d-flex flex-column min-vh-100">
                        <div class="container-xl flex-grow-1 px-3 px-md-4 px-xl-5 py-4 py-lg-5">
                            <docs-title-heading></docs-title-heading>
                            <ui-view></ui-view>
                        </div>

                        <docs-footer></docs-footer>
                    </div>

                    <docs-page-outline class="col-xl-3 d-none d-xl-block border-start"></docs-page-outline>
                </div>
            </div>
        </section>
    </main>
</div>
`),e.put(`src/app/core/layouts/components/header/header.component.html`,`<ng-template ng-ref="searchModal" ng-ref-read="ngTemplate">
    <div class="modal-header border-bottom-0 pb-0">
        <div>
            <h2 class="modal-title fs-5">Search documentation</h2>
            <p class="small text-body-secondary mb-0">Find components, guides and examples.</p>
        </div>
    </div>

    <div class="modal-body pt-3">
        <label class="visually-hidden" for="docs-search">Search documentation</label>
        <div class="input-group input-group-lg">
            <span class="input-group-text bg-body border-end-0">
                <i class="bi bi-search text-body-secondary" aria-hidden="true"></i>
            </span>
            <input id="docs-search" class="form-control border-start-0 ps-0" type="search" placeholder="Search the docs..." autocomplete="off" autofocus>
        </div>

        <div class="d-flex align-items-center justify-content-between mt-3">
            <small class="text-body-secondary">Start typing to see results</small>
            <kbd>ESC</kbd>
        </div>
    </div>
</ng-template>

<ng-template ng-ref="themeChanger">
    <button class="btn btn-link text-body btn-lg d-inline-flex align-items-center justify-content-center" ng-click="$.themeService.toggle()" type="button" aria-label="Toggle color theme">
        <i ng-if="$.themeService.activeTheme == $.themes.dark" class="bi bi-moon-fill" aria-hidden="true"></i>
        <i ng-if="$.themeService.activeTheme == $.themes.light" class="bi bi-brightness-high-fill" aria-hidden="true"></i>
    </button>

    <div class="vr mx-1 d-none d-sm-block"></div>

    <a
        class="btn btn-link text-body btn-lg d-none d-sm-inline-flex align-items-center justify-content-center"
        href="https://github.com/IonCna/ngb-js"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="NgbJS GitHub repository">
        <i class="bi bi-github" aria-hidden="true"></i>
    </a>
</ng-template>

<header class="navbar sticky-top container-fluid px-2 px-sm-3 py-2 bg-body-tertiary border-bottom shadow-sm">
    <section class="row w-100 g-2 align-items-center d-none d-lg-flex">
        <div class="col-3">
            <a class="navbar-brand d-inline-flex align-items-center gap-2 mb-0" ui-sref="docs.home">
                <span class="fw-bold">ngb-js</span>
                <span class="badge text-bg-primary rounded-pill">Docs</span>
            </a>
        </div>

        <div class="col-6 d-flex justify-content-center">
            <button ng-click="$.openModal()" class="btn btn-outline-secondary w-75 d-inline-flex justify-content-between align-items-center text-body-secondary" type="button">
                <span>
                    <i class="bi bi-search me-2" aria-hidden="true"></i>
                    <span>Search documentation</span>
                </span>

                <span class="d-flex align-items-center gap-1">
                    <kbd>CTRL</kbd>
                    <kbd>K</kbd>
                </span>
            </button>
        </div>

        <div class="col-3 d-flex align-items-center justify-content-end">
            <ng-container ng-template-outlet="themeChanger">
            </ng-container>
        </div>
    </section>

    <section class="d-flex w-100 align-items-center d-lg-none">
        <button ng-click="$.menuService.toggleMenu()" class="btn btn-link text-body btn-lg d-inline-flex align-items-center justify-content-center" type="button" aria-label="Open navigation menu">
                <i class="bi bi-list" aria-hidden="true"></i>
        </button>

        <a class="navbar-brand fw-bold ms-1 me-auto mb-0" ui-sref="docs.home">ngb-js</a>

        <div class="d-flex align-items-center">
            <button ng-click="$.openModal()" class="btn btn-link text-body btn-lg d-inline-flex align-items-center justify-content-center" type="button" aria-label="Open search">
                <i class="bi bi-search" aria-hidden="true"></i>
            </button>

            <ng-container ng-template-outlet="themeChanger">
            </ng-container>
        </div>
    </section>
</header>
`),e.put(`src/app/core/layouts/components/menu/menu.component.html`,`<ng-template ng-ref="menuContent">
    <nav class="px-3 py-2" aria-label="Documentation navigation">
        <section class="mb-4" aria-labelledby="guide-navigation-title">
            <h2 id="guide-navigation-title" class="small fw-semibold text-uppercase text-body-secondary px-2 mb-2">
                Guide
            </h2>

            <ul class="nav nav-pills flex-column gap-1">
                <li class="nav-item">
                    <a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.introduction" ui-sref-active="active">Introduction</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.philosophy" ui-sref-active="active">Philosophy</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.whyNgbJs" ui-sref-active="active">Why ngb-js</a>
                </li>
            </ul>
        </section>

        <section aria-labelledby="components-navigation-title">
            <h2 id="components-navigation-title" class="small fw-semibold text-uppercase text-body-secondary px-2 mb-2">
                Components
            </h2>

            <ul class="nav nav-pills flex-column gap-1">
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.accordion" ui-sref-active="active">Accordion</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.alert" ui-sref-active="active">Alert</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.carousel" ui-sref-active="active">Carousel</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.collapse" ui-sref-active="active">Collapse</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.datepicker" ui-sref-active="active">Datepicker</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.dropdown" ui-sref-active="active">Dropdown</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.modal" ui-sref-active="active">Modal</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.nav" ui-sref-active="active">Nav</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.offcanvas" ui-sref-active="active">Offcanvas</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.pagination" ui-sref-active="active">Pagination</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.popover" ui-sref-active="active">Popover</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.progressbar" ui-sref-active="active">Progress bar</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.rating" ui-sref-active="active">Rating</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.scrollspy" ui-sref-active="active">Scrollspy</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.timepicker" ui-sref-active="active">Timepicker</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.toast" ui-sref-active="active">Toast</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.tooltip" ui-sref-active="active">Tooltip</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.typeahead" ui-sref-active="active">Typeahead</a></li>
            </ul>
        </section>
    </nav>
</ng-template>

<div class="h-100 d-flex flex-column bg-body" ng-if="$.mode === 'mobile'">
    <div class="offcanvas-header border-bottom px-4 py-3">
        <div>
            <h2 id="docs-mobile-menu-title" class="offcanvas-title h5 mb-0">Documentation</h2>
            <p class="small text-body-secondary mb-0">ngb-js</p>
        </div>

        <button
            type="button"
            class="btn-close"
            aria-label="Close menu"
            ng-click="$.ngbActiveOffcanvas.dismiss('Cross click')">
        </button>
    </div>

    <div class="offcanvas-body overflow-y-auto p-2">
        <ng-container ng-template-outlet="menuContent"></ng-container>
    </div>
</div>

<aside class="d-none d-lg-block w-100 h-100 py-3" ng-if="$.mode === 'desktop'">
    <ng-container ng-template-outlet="menuContent"></ng-container>
</aside>
`)}]);export{c as n,u as t};