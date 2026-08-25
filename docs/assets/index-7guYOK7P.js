import{n as e,t}from"./angular-noCWnJ_q.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e(t()),r=angular,i=n&&n.module?n:r,a=function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};function o(e){return function t(){if(arguments.length>=e.length)return e.apply(this,arguments);var n=Array.prototype.slice.call(arguments);return t.bind.apply(t,a([this],n,!1))}}function s(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}}function c(){return s.apply(null,[].slice.call(arguments).reverse())}var l=function(e){return function(t){return t&&t[e]}},u=o(function(e,t,n){return n&&n[e]===t}),d=function(e){return c.apply(null,e.split(`.`).map(l))},f=function(e){return function(){var t=[...arguments];return!e.apply(null,t)}};function p(e,t){return function(){var n=[...arguments];return e.apply(null,n)&&t.apply(null,n)}}function m(e,t){return function(){var n=[...arguments];return e.apply(null,n)||t.apply(null,n)}}var h=function(e){return function(t){return t.reduce(function(t,n){return t&&!!e(n)},!0)}},g=function(e){return function(t){return t.reduce(function(t,n){return t||!!e(n)},!1)}},_=function(e){return function(t){return t!=null&&t.constructor===e||t instanceof e}},v=function(e){return function(){return e}};function y(e){return function(t){for(var n=0;n<e.length;n++)if(e[n][0](t))return e[n][1](t)}}var b=Object.prototype.toString,x=function(e){return function(t){return typeof t===e}},S=x(`undefined`),C=f(S),ee=function(e){return e===null},te=m(ee,S),w=x(`function`),ne=x(`number`),T=x(`string`),E=function(e){return typeof e==`object`&&!!e},D=Array.isArray,re=(function(e){return b.call(e)===`[object Date]`}),ie=(function(e){return b.call(e)===`[object RegExp]`});function ae(e){if(D(e)&&e.length){var t=e.slice(0,-1),n=e.slice(-1);return!(t.filter(f(T)).length||n.filter(f(w)).length)}return w(e)}var oe=p(E,c(l(`then`),w)),se=function(e){return function(){throw Error(`No implementation for ${e}. The framework specific code did not implement this method.`)}},ce=function(e,t){return t.reduce(function(t,n){return t[n]=se(`${e}.${String(n)}()`),t},{})},O={$q:void 0,$injector:void 0},le=function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},ue=typeof self==`object`&&self.self===self&&self||typeof global==`object`&&global.global===global&&global||void 0,de=ue.angular||{},fe=de.fromJson||JSON.parse.bind(JSON),pe=de.toJson||JSON.stringify.bind(JSON),me=de.forEach||Ye,k=Object.assign||Xe,he=de.equals||Ze;function ge(e){return e}function _e(){}function ve(e,t,n,r,i){i===void 0&&(i=!1);var a=function(t){return e()[t].bind(n())},o=function(e){return function(){return t[e]=a(e),t[e].apply(null,arguments)}};return r||=Object.keys(e()),r.reduce(function(e,t){return e[t]=i?o(t):a(t),e},t)}var ye=function(e,t){return k(Object.create(e),t)},be=o(xe);function xe(e,t){return e.indexOf(t)!==-1}var Se=o(Ce);function Ce(e,t){var n=e.indexOf(t);return n>=0&&e.splice(n,1),e}var we=o(Te);function Te(e,t){return e.push(t),t}var Ee=function(e){return e.slice().forEach(function(t){typeof t==`function`&&t(),Se(e,t)})};function De(e){var t=[...arguments].slice(1),n=k.apply(void 0,le([{}],t.reverse(),!1));return k(n,Ae(e||{},Object.keys(n)))}var Oe=function(e,t){return k(e,t)};function ke(e,t){var n=[];for(var r in e.path){if(e.path[r]!==t.path[r])break;n.push(e.path[r])}return n}function Ae(e,t){var n={};for(var r in e)t.indexOf(r)!==-1&&(n[r]=e[r]);return n}function je(e,t){return Object.keys(e).filter(f(be(t))).reduce(function(t,n){return t[n]=e[n],t},{})}function Me(e,t){var n=D(e),r=n?[]:{},i=n?function(e){return r.push(e)}:function(e,t){return r[t]=e};return me(e,function(e,n){t(e,n)&&i(e,n)}),r}function Ne(e,t){var n;return me(e,function(e,r){n||t(e,r)&&(n=e)}),n}var Pe=Fe;function Fe(e,t,n){return n||=D(e)?[]:{},me(e,function(e,r){return n[r]=t(e,r)}),n}var Ie=function(e){return Object.keys(e).map(function(t){return e[t]})},Le=function(e,t){return e&&t},Re=function(e,t){return e||t},A=function(e,t){return e.concat(t)},ze=function(e,t){return D(t)?e.concat(t.reduce(ze,[])):Be(e,t)};function Be(e,t){return e.push(t),e}var Ve=function(e,t){return be(e,t)?e:Be(e,t)},He=function(e){return e.reduce(A,[])},Ue=We;function We(e,t){return t===void 0&&(t=`assert failure`),function(n){var r=e(n);if(!r)throw Error(w(t)?t(n):t);return r}}function Ge(){var e=[...arguments];if(e.length===0)return[];for(var t=e.reduce(function(e,t){return Math.min(t.length,e)},9007199254740991),n=[],r=function(t){switch(e.length){case 1:n.push([e[0][t]]);break;case 2:n.push([e[0][t],e[1][t]]);break;case 3:n.push([e[0][t],e[1][t],e[2][t]]);break;case 4:n.push([e[0][t],e[1][t],e[2][t],e[3][t]]);break;default:n.push(e.map(function(e){return e[t]}))}},i=0;i<t;i++)r(i);return n}function Ke(e,t){var n,r;if(D(t)&&(n=t[0],r=t[1]),!T(n))throw Error(`invalid parameters to applyPairs`);return e[n]=r,e}function qe(e){return e.length&&e[e.length-1]||void 0}function Je(e,t){return t&&Object.keys(t).forEach(function(e){return delete t[e]}),t||={},k(t,e)}function Ye(e,t,n){if(D(e))return e.forEach(t,n);Object.keys(e).forEach(function(n){return t(e[n],n)})}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var r=Object.keys(n),i=0;i<r.length;i++)e[r[i]]=n[r[i]]}return e}function Ze(e,t){if(e===t)return!0;if(e===null||t===null)return!1;if(e!==e&&t!==t)return!0;var n=typeof e;if(n!==typeof t||n!==`object`)return!1;var r=[e,t];if(h(D)(r))return Qe(e,t);if(h(re)(r))return e.getTime()===t.getTime();if(h(ie)(r))return e.toString()===t.toString();if(h(w)(r))return!0;if([w,D,re,ie].map(g).reduce(function(e,t){return e||!!t(r)},!1))return!1;var i={};for(var a in e){if(!Ze(e[a],t[a]))return!1;i[a]=!0}for(var a in t)if(!i[a])return!1;return!0}function Qe(e,t){return e.length===t.length&&Ge(e,t).reduce(function(e,t){return e&&Ze(t[0],t[1])},!0)}var $e=function(e){return e.catch(function(e){return 0})&&e},et=function(e){return $e(O.$q.reject(e))},tt=function(){function e(e){this.text=e,this.glob=e.split(`.`);var t=this.text.split(`.`).map(function(e){return e===`**`?`(?:|(?:\\.[^.]*)*)`:e===`*`?`\\.[^.]*`:`\\.`+e}).join(``);this.regexp=RegExp(`^`+t+`$`)}return e.is=function(e){return!!/[!,*]+/.exec(e)},e.fromString=function(t){return e.is(t)?new e(t):null},e.prototype.matches=function(e){return this.regexp.test(`.`+e)},e}(),nt=function(){function e(e,t){e===void 0&&(e=[]),t===void 0&&(t=null),this._items=e,this._limit=t,this._evictListeners=[],this.onEvict=we(this._evictListeners)}return e.prototype.enqueue=function(e){var t=this._items;return t.push(e),this._limit&&t.length>this._limit&&this.evict(),e},e.prototype.evict=function(){var e=this._items.shift();return this._evictListeners.forEach(function(t){return t(e)}),e},e.prototype.dequeue=function(){if(this.size())return this._items.splice(0,1)[0]},e.prototype.clear=function(){var e=this._items;return this._items=[],e},e.prototype.size=function(){return this._items.length},e.prototype.remove=function(e){var t=this._items.indexOf(e);return t>-1&&this._items.splice(t,1)[0]},e.prototype.peekTail=function(){return this._items[this._items.length-1]},e.prototype.peekHead=function(){if(this.size())return this._items[0]},e}(),rt;(function(e){e[e.SUPERSEDED=2]=`SUPERSEDED`,e[e.ABORTED=3]=`ABORTED`,e[e.INVALID=4]=`INVALID`,e[e.IGNORED=5]=`IGNORED`,e[e.ERROR=6]=`ERROR`})(rt||={});var it=0,j=function(){function e(e,t,n){this.$id=it++,this.type=e,this.message=t,this.detail=n}return e.isRejectionPromise=function(t){return t&&typeof t.then==`function`&&_(e)(t._transitionRejection)},e.superseded=function(t,n){var r=new e(rt.SUPERSEDED,`The transition has been superseded by a different transition`,t);return n&&n.redirected&&(r.redirected=!0),r},e.redirected=function(t){return e.superseded(t,{redirected:!0})},e.invalid=function(t){return new e(rt.INVALID,`This transition is invalid`,t)},e.ignored=function(t){return new e(rt.IGNORED,`The transition was ignored`,t)},e.aborted=function(t){return new e(rt.ABORTED,`The transition has been aborted`,t)},e.errored=function(t){return new e(rt.ERROR,`The transition errored`,t)},e.normalize=function(t){return _(e)(t)?t:e.errored(t)},e.prototype.toString=function(){var e=function(e){return e&&e.toString!==Object.prototype.toString?e.toString():ut(e)}(this.detail),t=this;return`Transition Rejection(\$id: ${t.$id} type: ${t.type}, message: ${t.message}, detail: ${e})`},e.prototype.toPromise=function(){return k(et(this),{_transitionRejection:this})},e}();function at(e,t){return t.length<=e?t:t.substr(0,e-3)+`...`}function ot(e,t){for(;t.length<e;)t+=` `;return t}function st(e){return e.replace(/^([A-Z])/,function(e){return e.toLowerCase()}).replace(/([A-Z])/g,function(e){return`-`+e.toLowerCase()})}function ct(e){var t=lt(e),n=t.match(/^(function [^ ]+\([^)]*\))/),r=n?n[1]:t,i=e.name||``;return i&&r.match(/function \(/)?`function `+i+r.substr(9):r}function lt(e){var t=D(e)?e.slice(-1)[0]:e;return t&&t.toString()||`undefined`}function ut(e){var t=[],n=j.isRejectionPromise,r=y([[S,v(`undefined`)],[ee,v(`null`)],[oe,v(`[Promise]`)],[n,function(e){return e._transitionRejection.toString()}],[function(e){return E(e)&&!D(e)&&e.constructor!==Object&&w(e.toString)},function(e){return e.toString()}],[ae,ct],[v(!0),ge]]);function i(e){if(E(e)){if(t.indexOf(e)!==-1)return`[circular ref]`;t.push(e)}return r(e)}return S(e)?i(e):JSON.stringify(e,function(e,t){return i(t)}).replace(/\\"/g,`"`)}var dt=function(e){return function(t){if(!t)return[``,``];var n=t.indexOf(e);return n===-1?[t,``]:[t.substr(0,n),t.substr(n+1)]}},ft=function(e){return e.replace(/\/[^/]*$/,``)},pt=dt(`#`),mt=dt(`?`),ht=dt(`=`),gt=function(e){return e?e.replace(/^#/,``):``};function _t(e){var t=RegExp(`(`+e+`)`,`g`);return function(e){return e.split(t).filter(ge)}}function vt(e,t){return T(qe(e))&&T(t)?e.slice(0,-1).concat(qe(e)+t):Be(e,t)}var yt={log:_e,error:_e,table:_e};function bt(e){var t=function(t){return Function.prototype.bind.call(t,e)};return{log:t(e.log),error:t(e.log),table:t(e.log)}}function xt(e){var t=e.log.bind(e);return{log:t,error:e.error?e.error.bind(e):t,table:e.table?e.table.bind(e):t}}function St(){return typeof document<`u`&&document.documentMode&&document.documentMode===9?window&&window.console?bt(window.console):yt:!console.table||!console.error?xt(console):console}var Ct=St();function wt(e){if(!e)return`ui-view (defunct)`;var t=e.creationContext?e.creationContext.name||`(root)`:`(none)`;return`[ui-view#${e.id} ${e.$type}:${e.fqn} (${e.name}@${t})]`}var Tt=function(e){var t=e.viewDecl,n=t.$context.name||`(root)`;return`[View#${e.$id} from '${n}' state]: target ui-view: '${t.$uiViewName}@${t.$uiViewContextAnchor}'`};function Et(e){return ne(e)?M[e]:M[M[e]]}var M;(function(e){e[e.RESOLVE=0]=`RESOLVE`,e[e.TRANSITION=1]=`TRANSITION`,e[e.HOOK=2]=`HOOK`,e[e.UIVIEW=3]=`UIVIEW`,e[e.VIEWCONFIG=4]=`VIEWCONFIG`})(M||={});var Dt=d(`$id`),Ot=d(`router.$id`),kt=function(e){return`Transition #${Dt(e)}-${Ot(e)}`},N=new(function(){function e(){this._enabled={},this.approximateDigests=0}return e.prototype._set=function(e,t){var n=this;t.length||(t=Object.keys(M).map(function(e){return parseInt(e,10)}).filter(function(e){return!isNaN(e)}).map(function(e){return M[e]})),t.map(Et).forEach(function(t){return n._enabled[t]=e})},e.prototype.enable=function(){var e=[...arguments];this._set(!0,e)},e.prototype.disable=function(){var e=[...arguments];this._set(!1,e)},e.prototype.enabled=function(e){return!!this._enabled[Et(e)]},e.prototype.traceTransitionStart=function(e){this.enabled(M.TRANSITION)&&Ct.log(`${kt(e)}: Started  -> ${ut(e)}`)},e.prototype.traceTransitionIgnored=function(e){this.enabled(M.TRANSITION)&&Ct.log(`${kt(e)}: Ignored  <> ${ut(e)}`)},e.prototype.traceHookInvocation=function(e,t,n){if(this.enabled(M.HOOK)){var r=d(`traceData.hookType`)(n)||`internal`,i=d(`traceData.context.state.name`)(n)||d(`traceData.context`)(n)||`unknown`,a=ct(e.registeredHook.callback);Ct.log(`${kt(t)}:   Hook -> ${r} context: ${i}, ${at(200,a)}`)}},e.prototype.traceHookResult=function(e,t,n){this.enabled(M.HOOK)&&Ct.log(`${kt(t)}:   <- Hook returned: ${at(200,ut(e))}`)},e.prototype.traceResolvePath=function(e,t,n){this.enabled(M.RESOLVE)&&Ct.log(`${kt(n)}:         Resolving ${e} (${t})`)},e.prototype.traceResolvableResolved=function(e,t){this.enabled(M.RESOLVE)&&Ct.log(`${kt(t)}:               <- Resolved  ${e} to: ${at(200,ut(e.data))}`)},e.prototype.traceError=function(e,t){this.enabled(M.TRANSITION)&&Ct.log(`${kt(t)}: <- Rejected ${ut(t)}, reason: ${e}`)},e.prototype.traceSuccess=function(e,t){this.enabled(M.TRANSITION)&&Ct.log(`${kt(t)}: <- Success  ${ut(t)}, final state: ${e.name}`)},e.prototype.traceUIViewEvent=function(e,t,n){n===void 0&&(n=``),this.enabled(M.UIVIEW)&&Ct.log(`ui-view: ${ot(30,e)} ${wt(t)}${n}`)},e.prototype.traceUIViewConfigUpdated=function(e,t){this.enabled(M.UIVIEW)&&this.traceUIViewEvent(`Updating`,e,` with ViewConfig from context='${t}'`)},e.prototype.traceUIViewFill=function(e,t){this.enabled(M.UIVIEW)&&this.traceUIViewEvent(`Fill`,e,` with: ${at(200,t)}`)},e.prototype.traceViewSync=function(e){if(this.enabled(M.VIEWCONFIG)){var t=`uiview component fqn`,n=`view config state (view name)`,r=e.map(function(e){var r,i=e.uiView,a=e.viewConfig,o=i&&i.fqn,s=a&&`${a.viewDecl.$context.name}: (${a.viewDecl.$name})`;return r={},r[t]=o,r[n]=s,r}).sort(function(e,n){return(e[t]||``).localeCompare(n[t]||``)});Ct.table(r)}},e.prototype.traceViewServiceEvent=function(e,t){this.enabled(M.VIEWCONFIG)&&Ct.log(`VIEWCONFIG: ${e} ${Tt(t)}`)},e.prototype.traceViewServiceUIViewEvent=function(e,t){this.enabled(M.VIEWCONFIG)&&Ct.log(`VIEWCONFIG: ${e} ${wt(t)}`)},e}()),At=function(){function e(e){this.pattern=/.*/,this.inherit=!0,k(this,e)}return e.prototype.is=function(e,t){return!0},e.prototype.encode=function(e,t){return e},e.prototype.decode=function(e,t){return e},e.prototype.equals=function(e,t){return e==t},e.prototype.$subPattern=function(){var e=this.pattern.toString();return e.substr(1,e.length-2)},e.prototype.toString=function(){return`{ParamType:${this.name}}`},e.prototype.$normalize=function(e){return this.is(e)?e:this.decode(e)},e.prototype.$asArray=function(e,t){if(!e)return this;if(e===`auto`&&!t)throw Error(`'auto' array mode is for query parameters only`);return new jt(this,e)},e}();function jt(e,t){var n=this;function r(e){return D(e)?e:C(e)?[e]:[]}function i(e){switch(e.length){case 0:return;case 1:return t===`auto`?e[0]:e;default:return e}}function a(e,t){return function(n){if(D(n)&&n.length===0)return n;var a=Fe(r(n),e);return t===!0?Me(a,function(e){return!e}).length===0:i(a)}}function o(e){return function(t,n){var i=r(t),a=r(n);if(i.length!==a.length)return!1;for(var o=0;o<i.length;o++)if(!e(i[o],a[o]))return!1;return!0}}[`encode`,`decode`,`equals`,`$normalize`].forEach(function(t){var r=e[t].bind(e);n[t]=(t===`equals`?o:a)(r)}),k(this,{dynamic:e.dynamic,name:e.name,pattern:e.pattern,inherit:e.inherit,raw:e.raw,is:a(e.is.bind(e),!0),$arrayMode:t})}var Mt=Object.prototype.hasOwnProperty,Nt=function(e){return[`value`,`type`,`squash`,`array`,`dynamic`].filter(Mt.bind(e||{})).length===0},Pt;(function(e){e[e.PATH=0]=`PATH`,e[e.SEARCH=1]=`SEARCH`,e[e.CONFIG=2]=`CONFIG`})(Pt||={});function Ft(e,t,n){var r=n.reloadOnSearch===!1&&t===Pt.SEARCH||void 0,i=Ne([n.dynamic,r],C);return k(C(i)?{dynamic:i}:{},It(n&&n.params&&n.params[e]))}function It(e){e=Nt(e)?{value:e}:e,t.__cacheable=!0;function t(){return e.value}var n=ae(e.value)?e.value:t;return k(e,{$$fn:n})}function Lt(e,t,n,r,i){if(e.type&&t&&t.name!==`string`)throw Error(`Param '${r}' has two type configurations.`);if(e.type&&t&&t.name===`string`&&i.type(e.type))return i.type(e.type);if(t)return t;if(!e.type){var a=n===Pt.CONFIG?`any`:n===Pt.PATH?`path`:n===Pt.SEARCH?`query`:`string`;return i.type(a)}return e.type instanceof At?e.type:i.type(e.type)}function Rt(e,t,n){var r=e.squash;if(!t||r===!1)return!1;if(!C(r)||r==null)return n;if(r===!0||T(r))return r;throw Error(`Invalid squash policy: '${r}'. Valid policies: false, true, or arbitrary string`)}function zt(e,t,n,r){var i=[{from:``,to:n||t?void 0:``},{from:null,to:n||t?void 0:``}],a=D(e.replace)?e.replace:[];T(r)&&a.push({from:r,to:void 0});var o=Fe(a,l(`from`));return Me(i,function(e){return o.indexOf(e.from)===-1}).concat(a)}var Bt=function(){function e(e,t,n,r,i){var a=Ft(e,n,i);t=Lt(a,t,n,e,r.paramTypes);var o=p();t=o?t.$asArray(o,n===Pt.SEARCH):t;var s=a.value!==void 0||n===Pt.SEARCH,c=C(a.dynamic)?!!a.dynamic:!!t.dynamic,l=C(a.raw)?!!a.raw:!!t.raw,u=Rt(a,s,r.defaultSquashPolicy()),d=zt(a,o,s,u),f=C(a.inherit)?!!a.inherit:!!t.inherit;function p(){return k({array:n===Pt.SEARCH&&`auto`},e.match(/\[\]$/)?{array:!0}:{},a).array}k(this,{id:e,type:t,location:n,isOptional:s,dynamic:c,raw:l,squash:u,replace:d,inherit:f,array:o,config:a})}return e.values=function(e,t){t===void 0&&(t={});for(var n={},r=0,i=e;r<i.length;r++){var a=i[r];n[a.id]=a.value(t[a.id])}return n},e.changed=function(e,t,n){return t===void 0&&(t={}),n===void 0&&(n={}),e.filter(function(e){return!e.type.equals(t[e.id],n[e.id])})},e.equals=function(t,n,r){return n===void 0&&(n={}),r===void 0&&(r={}),e.changed(t,n,r).length===0},e.validates=function(e,t){return t===void 0&&(t={}),e.map(function(e){return e.validates(t[e.id])}).reduce(Le,!0)},e.prototype.isDefaultValue=function(e){return this.isOptional&&this.type.equals(this.value(),e)},e.prototype.value=function(e){var t=this;return e=function(e){for(var n=0,r=t.replace;n<r.length;n++){var i=r[n];if(i.from===e)return i.to}return e}(e),S(e)?function(){if(t._defaultValueCache)return t._defaultValueCache.defaultValue;if(!O.$injector)throw Error(`Injectable functions cannot be called at configuration time`);var e=O.$injector.invoke(t.config.$$fn);if(e!=null&&!t.type.is(e))throw Error(`Default value (${e}) for parameter '${t.id}' is not an instance of ParamType (${t.type.name})`);return t.config.$$fn.__cacheable&&(t._defaultValueCache={defaultValue:e}),e}():this.type.$normalize(e)},e.prototype.isSearch=function(){return this.location===Pt.SEARCH},e.prototype.validates=function(e){if((S(e)||e===null)&&this.isOptional)return!0;var t=this.type.$normalize(e);if(!this.type.is(t))return!1;var n=this.type.encode(t);return!(T(n)&&!this.type.pattern.exec(n))},e.prototype.toString=function(){return`{Param:${this.id} ${this.type} squash: '${this.squash}' optional: ${this.isOptional}}`},e}(),Vt=function(){function e(){this.enqueue=!0,this.typeQueue=[],this.defaultTypes=Ae(e.prototype,[`hash`,`string`,`query`,`path`,`int`,`bool`,`date`,`json`,`any`]);var t=function(e,t){return new At(k({name:t},e))};this.types=ye(Fe(this.defaultTypes,t),{})}return e.prototype.dispose=function(){this.types={}},e.prototype.type=function(e,t,n){if(!C(t))return this.types[e];if(this.types.hasOwnProperty(e))throw Error(`A type named '${e}' has already been defined.`);return this.types[e]=new At(k({name:e},t)),n&&(this.typeQueue.push({name:e,def:n}),this.enqueue||this._flushTypeQueue()),this},e.prototype._flushTypeQueue=function(){for(;this.typeQueue.length;){var e=this.typeQueue.shift();if(e.pattern)throw Error(`You cannot override a type's .pattern at runtime.`);k(this.types[e.name],O.$injector.invoke(e.def))}},e}();function Ht(){var e=function(e){var t=function(e){return e==null?e:e.toString()};return k({},{encode:t,decode:t,is:_(String),pattern:/.*/,equals:function(e,t){return e==t}},e)};k(Vt.prototype,{string:e({}),path:e({pattern:/[^/]*/}),query:e({}),hash:e({inherit:!1}),int:e({decode:function(e){return parseInt(e,10)},is:function(e){return!te(e)&&this.decode(e.toString())===e},pattern:/-?\d+/}),bool:e({encode:function(e){return e&&1||0},decode:function(e){return parseInt(e,10)!==0},is:_(Boolean),pattern:/0|1/}),date:e({encode:function(e){return this.is(e)?[e.getFullYear(),(`0`+(e.getMonth()+1)).slice(-2),(`0`+e.getDate()).slice(-2)].join(`-`):void 0},decode:function(e){if(this.is(e))return e;var t=this.capture.exec(e);return t?new Date(t[1],t[2]-1,t[3]):void 0},is:function(e){return e instanceof Date&&!isNaN(e.valueOf())},equals:function(e,t){return[`getFullYear`,`getMonth`,`getDate`].reduce(function(n,r){return n&&e[r]()===t[r]()},!0)},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/}),json:e({encode:pe,decode:fe,is:_(Object),equals:he,pattern:/[^/]*/}),any:e({encode:ge,decode:ge,is:function(){return!0},equals:he})})}Ht();var Ut=function(){function e(e){e===void 0&&(e={}),k(this,e)}return e.prototype.$inherit=function(e,t,n){var r=ke(t,n),i={},a=[];for(var o in r)if(!(!r[o]||!r[o].params)){var s=r[o].params,c=Object.keys(s);if(c.length)for(var l in c)!c.hasOwnProperty(l)||s[c[l]].inherit==0||a.indexOf(c[l])>=0||(a.push(c[l]),i[c[l]]=this[c[l]])}return k({},i,e)},e}(),Wt=function(){function e(t){if(t instanceof e){var n=t;this.state=n.state,this.paramSchema=n.paramSchema.slice(),this.paramValues=k({},n.paramValues),this.resolvables=n.resolvables.slice(),this.views=n.views&&n.views.slice()}else{var r=t;this.state=r,this.paramSchema=r.parameters({inherit:!1}),this.paramValues={},this.resolvables=r.resolvables.map(function(e){return e.clone()})}}return e.prototype.clone=function(){return new e(this)},e.prototype.applyRawParams=function(e){var t=function(t){return[t.id,t.value(e[t.id])]};return this.paramValues=this.paramSchema.reduce(function(e,n){return Ke(e,t(n))},{}),this},e.prototype.parameter=function(e){return Ne(this.paramSchema,u(`id`,e))},e.prototype.equals=function(e,t){var n=this.diff(e,t);return n&&n.length===0},e.prototype.diff=function(e,t){if(this.state!==e.state)return!1;var n=t?t(this):this.paramSchema;return Bt.changed(n,this.paramValues,e.paramValues)},e.clone=function(e){return e.clone()},e}(),Gt=function(){function e(e,t,n,r){this._stateRegistry=e,this._identifier=t,this._identifier=t,this._params=k({},n||{}),this._options=k({},r||{}),this._definition=e.matcher.find(t,this._options.relative)}return e.prototype.name=function(){return this._definition&&this._definition.name||this._identifier},e.prototype.identifier=function(){return this._identifier},e.prototype.params=function(){return this._params},e.prototype.$state=function(){return this._definition},e.prototype.state=function(){return this._definition&&this._definition.self},e.prototype.options=function(){return this._options},e.prototype.exists=function(){return!!(this._definition&&this._definition.self)},e.prototype.valid=function(){return!this.error()},e.prototype.error=function(){var e=this.options().relative;if(!this._definition&&e){var t=e.name?e.name:e;return`Could not resolve '${this.name()}' from state '${t}'`}if(!this._definition)return`No such state '${this.name()}'`;if(!this._definition.self)return`State '${this.name()}' has an invalid definition`},e.prototype.toString=function(){return`'${this.name()}'${ut(this.params())}`},e.prototype.withState=function(t){return new e(this._stateRegistry,t,this._params,this._options)},e.prototype.withParams=function(t,n){n===void 0&&(n=!1);var r=n?t:k({},this._params,t);return new e(this._stateRegistry,this._identifier,r,this._options)},e.prototype.withOptions=function(t,n){n===void 0&&(n=!1);var r=n?t:k({},this._options,t);return new e(this._stateRegistry,this._identifier,this._params,r)},e.isDef=function(e){return e&&e.state&&(T(e.state)||E(e.state)&&T(e.state.name))},e}(),Kt=function(){function e(){}return e.makeTargetState=function(e,t){var n=qe(t).state;return new Gt(e,n,t.map(l(`paramValues`)).reduce(Oe,{}),{})},e.buildPath=function(e){var t=e.params();return e.$state().path.map(function(e){return new Wt(e).applyRawParams(t)})},e.buildToPath=function(t,n){var r=e.buildPath(n);return n.options().inherit?e.inheritParams(t,r,Object.keys(n.params())):r},e.applyViewConfigs=function(t,n,r){n.filter(function(e){return be(r,e.state)}).forEach(function(r){var i=Ie(r.state.views||{}),a=e.subPath(n,function(e){return e===r});r.views=i.map(function(e){return t.createViewConfig(a,e)}).reduce(A,[])})},e.inheritParams=function(e,t,n){n===void 0&&(n=[]);function r(e,t){var n=Ne(e,u(`state`,t));return k({},n&&n.paramValues)}var i=e.map(function(e){return e.paramSchema}).reduce(A,[]).filter(function(e){return!e.inherit}).map(l(`id`));function a(t){var a=k({},t&&t.paramValues),o=Ae(a,n);a=je(a,n);var s=je(r(e,t.state)||{},i),c=k(a,s,o);return new Wt(t.state).applyRawParams(c)}return t.map(a)},e.treeChanges=function(t,n,r){for(var i=Math.min(t.length,n.length),a=0,o=function(t,n){return t.equals(n,e.nonDynamicParams)};a<i&&t[a].state!==r&&o(t[a],n[a]);)a++;function s(e,t){var r=e.clone();return r.paramValues=n[t].paramValues,r}var c=t,l=c.slice(0,a),u=c.slice(a),d,f,p=l.map(s);return d=n.slice(a),f=p.concat(d),{from:c,to:f,retained:l,retainedWithToParams:p,exiting:u,entering:d}},e.matching=function(e,t,n){var r=!1;return Ge(e,t).reduce(function(e,t){var i=t[0],a=t[1];return r||=!i.equals(a,n),r?e:e.concat(i)},[])},e.equals=function(t,n,r){return t.length===n.length&&e.matching(t,n,r).length===t.length},e.subPath=function(e,t){var n=Ne(e,t),r=e.indexOf(n);return r===-1?void 0:e.slice(0,r+1)},e.nonDynamicParams=function(e){return e.state.parameters({inherit:!1}).filter(function(e){return!e.dynamic})},e.paramValues=function(e){return e.reduce(function(e,t){return k(e,t.paramValues)},{})},e}(),qt={when:{LAZY:`LAZY`,EAGER:`EAGER`},async:{WAIT:`WAIT`,NOWAIT:`NOWAIT`}},Jt={when:`LAZY`,async:`WAIT`},P=function(){function e(t,n,r,i,a){if(this.resolved=!1,this.promise=void 0,t instanceof e)k(this,t);else if(w(n)){if(te(t))throw Error(`new Resolvable(): token argument is required`);if(!w(n))throw Error(`new Resolvable(): resolveFn argument must be a function`);this.token=t,this.policy=i,this.resolveFn=n,this.deps=r||[],this.data=a,this.resolved=a!==void 0,this.promise=this.resolved?O.$q.when(this.data):void 0}else if(E(t)&&t.token&&(t.hasOwnProperty(`resolveFn`)||t.hasOwnProperty(`data`))){var o=t;return new e(o.token,o.resolveFn,o.deps,o.policy,o.data)}}return e.prototype.getPolicy=function(e){var t=this.policy||{},n=e&&e.resolvePolicy||{};return{when:t.when||n.when||Jt.when,async:t.async||n.async||Jt.async}},e.prototype.resolve=function(e,t){var n=this,r=O.$q,i=function(){return r.all(e.getDependencies(n).map(function(n){return n.get(e,t)}))},a=function(e){return n.resolveFn.apply(null,e)},o=e.findNode(this),s=o&&o.state,c=this.getPolicy(s).async,l=w(c)?c:ge,u=function(e){return n.data=e,n.resolved=!0,n.resolveFn=null,N.traceResolvableResolved(n,t),n.data};return this.promise=r.when().then(i).then(a).then(l).then(u)},e.prototype.get=function(e,t){return this.promise||this.resolve(e,t)},e.prototype.toString=function(){return`Resolvable(token: ${ut(this.token)}, requires: [${this.deps.map(ut)}])`},e.prototype.clone=function(){return new e(this)},e.fromData=function(t,n){return new e(t,function(){return n},null,null,n)},e}(),Yt=qt.when,Xt=[Yt.EAGER,Yt.LAZY],Zt=[Yt.EAGER],Qt=function(){function e(e){this._path=e}return e.prototype.getTokens=function(){return this._path.reduce(function(e,t){return e.concat(t.resolvables.map(function(e){return e.token}))},[]).reduce(Ve,[])},e.prototype.getResolvable=function(e){return qe(this._path.map(function(e){return e.resolvables}).reduce(A,[]).filter(function(t){return t.token===e}))},e.prototype.getPolicy=function(e){var t=this.findNode(e);return e.getPolicy(t.state)},e.prototype.subContext=function(t){return new e(Kt.subPath(this._path,function(e){return e.state===t}))},e.prototype.addResolvables=function(e,t){var n=Ne(this._path,u(`state`,t)),r=e.map(function(e){return e.token});n.resolvables=n.resolvables.filter(function(e){return r.indexOf(e.token)===-1}).concat(e)},e.prototype.resolvePath=function(e,t){var n=this;e===void 0&&(e=`LAZY`);var r=(be(Xt,e)?e:`LAZY`)===qt.when.EAGER?Zt:Xt;N.traceResolvePath(this._path,e,t);var i=function(e,t){return function(r){return be(e,n.getPolicy(r)[t])}},a=this._path.reduce(function(e,a){var o=a.resolvables.filter(i(r,`when`)),s=o.filter(i([`NOWAIT`],`async`)),c=o.filter(f(i([`NOWAIT`],`async`))),l=n.subContext(a.state),u=function(e){return e.get(l,t).then(function(t){return{token:e.token,value:t}})};return s.forEach(u),e.concat(c.map(u))},[]);return O.$q.all(a)},e.prototype.injector=function(){return this._injector||=new $t(this)},e.prototype.findNode=function(e){return Ne(this._path,function(t){return be(t.resolvables,e)})},e.prototype.getDependencies=function(e){var t=this,n=this.findNode(e),r=(Kt.subPath(this._path,function(e){return e===n})||this._path).reduce(function(e,t){return e.concat(t.resolvables)},[]).filter(function(t){return t!==e});return e.deps.map(function(e){var n=r.filter(function(t){return t.token===e});if(n.length)return qe(n);var i=t.injector().getNative(e);if(S(i))throw Error(`Could not find Dependency Injection token: `+ut(e));return new P(e,function(){return i},[],i)})},e}(),$t=function(){function e(e){this.context=e,this.native=this.get(`Native Injector`)||O.$injector}return e.prototype.get=function(e){var t=this.context.getResolvable(e);if(t){if(this.context.getPolicy(t).async===`NOWAIT`)return t.get(this.context);if(!t.resolved)throw Error(`Resolvable async .get() not complete:`+ut(t.token));return t.data}return this.getNative(e)},e.prototype.getAsync=function(e){var t=this.context.getResolvable(e);return t?t.get(this.context):O.$q.when(this.native.get(e))},e.prototype.getNative=function(e){return this.native&&this.native.get(e)},e}(),en=function(e){if(!T(e))return!1;var t=e.charAt(0)===`^`;return{val:t?e.substring(1):e,root:t}};function tn(e){return e.name}function nn(e){return e.self.$$state=function(){return e},e.self}function rn(e){return e.parent&&e.parent.data&&(e.data=e.self.data=ye(e.parent.data,e.data)),e.data}var an=function(e,t){return function(n){var r=n.self;if(r&&r.url&&r.name&&r.name.match(/\.\*\*$/)){var i={};Je(r,i),i.url+=`{remainder:any}`,r=i}var a=n.parent,o=en(r.url),s=o?e.compile(o.val,{state:r}):r.url;if(!s)return null;if(!e.isMatcher(s))throw Error(`Invalid url '${s}' in state '${n}'`);return o&&o.root?s:(a&&a.navigable||t()).url.append(s)}},on=function(e){return function(t){return!e(t)&&t.url?t:t.parent?t.parent.navigable:null}},sn=function(e){return function(t){var n=function(n,r){return e.fromConfig(r,null,t.self)},r=t.url&&t.url.parameters({inherit:!1})||[],i=Ie(Pe(je(t.params||{},r.map(l(`id`))),n));return r.concat(i).map(function(e){return[e.id,e]}).reduce(Ke,{})}};function cn(e){return e.parent?e.parent.path.concat(e):[e]}function ln(e){var t=e.parent?k({},e.parent.includes):{};return t[e.name]=!0,t}function un(e){var t=function(e,t){return Object.keys(e||{}).map(function(n){return{token:n,val:e[n],deps:void 0,policy:t[n]}})},n=function(e){var t=O.$injector;return e.$inject||t&&t.annotate(e,t.strictDi)||`deferred`},r=function(e){return!!(e.token&&e.resolveFn)},i=function(e){return!!((e.provide||e.token)&&(e.useValue||e.useFactory||e.useExisting||e.useClass))},a=function(e){return!!(e&&e.val&&(T(e.val)||D(e.val)||w(e.val)))},o=function(e){return e.provide||e.token},s=y([[l(`resolveFn`),function(e){return new P(o(e),e.resolveFn,e.deps,e.policy)}],[l(`useFactory`),function(e){return new P(o(e),e.useFactory,e.deps||e.dependencies,e.policy)}],[l(`useClass`),function(e){return new P(o(e),function(){return new e.useClass},[],e.policy)}],[l(`useValue`),function(e){return new P(o(e),function(){return e.useValue},[],e.policy,e.useValue)}],[l(`useExisting`),function(e){return new P(o(e),ge,[e.useExisting],e.policy)}]]),u=y([[c(l(`val`),T),function(e){return new P(e.token,ge,[e.val],e.policy)}],[c(l(`val`),D),function(e){return new P(e.token,qe(e.val),e.val.slice(0,-1),e.policy)}],[c(l(`val`),w),function(e){return new P(e.token,e.val,n(e.val),e.policy)}]]),d=y([[_(P),function(e){return e}],[r,s],[i,s],[a,u],[v(!0),function(e){throw Error(`Invalid resolve value: `+ut(e))}]]),f=e.resolve;return(D(f)?f:t(f,e.resolvePolicy||{})).map(d)}var dn=function(){function e(e,t){this.matcher=e;var n=this,r=function(){return e.find(``)},i=function(e){return e.name===``};function a(t){return i(t)?null:e.find(n.parentName(t))||r()}this.builders={name:[tn],self:[nn],parent:[a],data:[rn],url:[an(t,r)],navigable:[on(i)],params:[sn(t.paramFactory)],views:[],path:[cn],includes:[ln],resolvables:[un]}}return e.prototype.builder=function(e,t){var n=this.builders,r=n[e]||[];if(T(e)&&!C(t))return r.length>1?r:r[0];if(!(!T(e)||!w(t)))return n[e]=r,n[e].push(t),function(){return n[e].splice(n[e].indexOf(t,1))&&null}},e.prototype.build=function(e){var t=this,n=t.matcher,r=t.builders,i=this.parentName(e);if(i&&!n.find(i,void 0,!1))return null;for(var a in r)r.hasOwnProperty(a)&&(e[a]=r[a].reduce(function(e,t){return function(n){return t(n,e)}},_e)(e));return e},e.prototype.parentName=function(e){var t=e.name||``,n=t.split(`.`);if(n.pop()===`**`&&n.pop(),n.length){if(e.parent)throw Error(`States that specify the 'parent:' property should not have a '.' in their name (${t})`);return n.join(`.`)}return e.parent?T(e.parent)?e.parent:e.parent.name:``},e.prototype.name=function(e){var t=e.name;if(t.indexOf(`.`)!==-1||!e.parent)return t;var n=T(e.parent)?e.parent:e.parent.name;return n?n+`.`+t:t},e}(),fn=function(){function e(t){return e.create(t||{})}return e.create=function(t){t=e.isStateClass(t)?new t:t;var n=ye(ye(t,e.prototype));return t.$$state=function(){return n},n.self=t,n.__stateObjectCache={nameGlob:tt.fromString(n.name)},n},e.prototype.is=function(e){return this===e||this.self===e||this.fqn()===e},e.prototype.fqn=function(){if(!this.parent||!(this.parent instanceof this.constructor))return this.name;var e=this.parent.fqn();return e?e+`.`+this.name:this.name},e.prototype.root=function(){return this.parent&&this.parent.root()||this},e.prototype.parameters=function(e){return e=De(e,{inherit:!0,matchingKeys:null}),(e.inherit&&this.parent&&this.parent.parameters()||[]).concat(Ie(this.params)).filter(function(t){return!e.matchingKeys||e.matchingKeys.hasOwnProperty(t.id)})},e.prototype.parameter=function(e,t){return t===void 0&&(t={}),this.url&&this.url.parameter(e,t)||Ne(Ie(this.params),u(`id`,e))||t.inherit&&this.parent&&this.parent.parameter(e)},e.prototype.toString=function(){return this.fqn()},e.isStateClass=function(e){return w(e)&&e.__uiRouterState===!0},e.isStateDeclaration=function(e){return w(e.$$state)},e.isState=function(e){return E(e.__stateObjectCache)},e}(),pn=function(){function e(e){this._states=e}return e.prototype.isRelative=function(e){return e||=``,e.indexOf(`.`)===0||e.indexOf(`^`)===0},e.prototype.find=function(e,t,n){if(n===void 0&&(n=!0),!(!e&&e!==``)){var r=T(e),i=r?e:e.name;this.isRelative(i)&&(i=this.resolvePath(i,t));var a=this._states[i];if(a&&(r||!r&&(a===e||a.self===e)))return a;if(r&&n){var o=Ie(this._states).filter(function(e){return e.__stateObjectCache.nameGlob&&e.__stateObjectCache.nameGlob.matches(i)});return o.length>1&&Ct.error(`stateMatcher.find: Found multiple matches for ${i} using glob: `,o.map(function(e){return e.name})),o[0]}}},e.prototype.resolvePath=function(e,t){if(!t)throw Error(`No reference point given for path '${e}'`);for(var n=this.find(t),r=e.split(`.`),i=r.length,a=0,o=n;a<i;a++){if(r[a]===``&&a===0){o=n;continue}if(r[a]===`^`){if(!o.parent)throw Error(`Path '${e}' not valid for state '${n.name}'`);o=o.parent;continue}break}var s=r.slice(a).join(`.`);return o.name+(o.name&&s?`.`:``)+s},e}(),mn=function(){function e(e,t,n,r){this.router=e,this.states=t,this.builder=n,this.listeners=r,this.queue=[]}return e.prototype.dispose=function(){this.queue=[]},e.prototype.register=function(e){var t=this.queue,n=fn.create(e),r=n.name;if(!T(r))throw Error(`State must have a valid name`);if(this.states.hasOwnProperty(r)||be(t.map(l(`name`)),r))throw Error(`State '${r}' is already defined`);return t.push(n),this.flush(),n},e.prototype.flush=function(){for(var e=this,t=this,n=t.queue,r=t.states,i=t.builder,a=[],o=[],s={},c=function(t){return e.states.hasOwnProperty(t)&&e.states[t]},l=function(){a.length&&e.listeners.forEach(function(e){return e(`registered`,a.map(function(e){return e.self}))})};n.length>0;){var u=n.shift(),d=u.name,f=i.build(u),p=o.indexOf(u);if(f){var m=c(d);if(m&&m.name===d)throw Error(`State '${d}' is already defined`);var h=c(d+`.**`);h&&this.router.stateRegistry.deregister(h),r[d]=u,this.attachRoute(u),p>=0&&o.splice(p,1),a.push(u);continue}var g=s[d];if(s[d]=n.length,p>=0&&g===n.length)return n.push(u),l(),r;p<0&&o.push(u),n.push(u)}return l(),r},e.prototype.attachRoute=function(e){if(!(e.abstract||!e.url)){var t=this.router.urlService.rules;t.rule(t.urlRuleFactory.create(e))}},e}(),hn=function(){function e(e){this.router=e,this.states={},this.listeners=[],this.matcher=new pn(this.states),this.builder=new dn(this.matcher,e.urlMatcherFactory),this.stateQueue=new mn(e,this.states,this.builder,this.listeners),this._registerRoot()}return e.prototype._registerRoot=function(){var e={name:``,url:`^`,views:null,params:{"#":{value:null,type:`hash`,dynamic:!0}},abstract:!0},t=this._root=this.stateQueue.register(e);t.navigable=null},e.prototype.dispose=function(){var e=this;this.stateQueue.dispose(),this.listeners=[],this.get().forEach(function(t){return e.get(t)&&e.deregister(t)})},e.prototype.onStatesChanged=function(e){return this.listeners.push(e),function(){Se(this.listeners)(e)}.bind(this)},e.prototype.root=function(){return this._root},e.prototype.register=function(e){return this.stateQueue.register(e)},e.prototype._deregisterTree=function(e){var t=this,n=this.get().map(function(e){return e.$$state()}),r=function(e){var t=n.filter(function(t){return e.indexOf(t.parent)!==-1});return t.length===0?t:t.concat(r(t))},i=r([e]),a=[e].concat(i).reverse();return a.forEach(function(e){var n=t.router.urlService.rules;n.rules().filter(u(`state`,e)).forEach(function(e){return n.removeRule(e)}),delete t.states[e.name]}),a},e.prototype.deregister=function(e){var t=this.get(e);if(!t)throw Error(`Can't deregister state; not found: `+e);var n=this._deregisterTree(t.$$state());return this.listeners.forEach(function(e){return e(`deregistered`,n.map(function(e){return e.self}))}),n},e.prototype.get=function(e,t){var n=this;if(arguments.length===0)return Object.keys(this.states).map(function(e){return n.states[e].self});var r=this.matcher.find(e,t);return r&&r.self||null},e.prototype.decorator=function(e,t){return this.builder.builder(e,t)},e}(),gn;(function(e){e[e.CREATE=0]=`CREATE`,e[e.BEFORE=1]=`BEFORE`,e[e.RUN=2]=`RUN`,e[e.SUCCESS=3]=`SUCCESS`,e[e.ERROR=4]=`ERROR`})(gn||={});var _n;(function(e){e[e.TRANSITION=0]=`TRANSITION`,e[e.STATE=1]=`STATE`})(_n||={});var vn={current:_e,transition:null,traceData:{},bind:null},yn=function(){function e(e,t,n,r){var i=this;this.transition=e,this.stateContext=t,this.registeredHook=n,this.options=r,this.isSuperseded=function(){return i.type.hookPhase===gn.RUN&&!i.options.transition.isActive()},this.options=De(r,vn),this.type=n.eventType}return e.chain=function(e,t){return e.reduce(function(e,t){return e.then(function(){return t.invokeHook()})},t||O.$q.when())},e.invokeHooks=function(t,n){for(var r=0;r<t.length;r++){var i=t[r].invokeHook();if(oe(i)){var a=t.slice(r+1);return e.chain(a,i).then(n)}}return n()},e.runAllHooks=function(e){e.forEach(function(e){return e.invokeHook()})},e.prototype.logError=function(e){this.transition.router.stateService.defaultErrorHandler()(e)},e.prototype.invokeHook=function(){var e=this,t=this.registeredHook;if(!t._deregistered){var n=this.getNotCurrentRejection();if(n)return n;var r=this.options;N.traceHookInvocation(this,this.transition,r);var i=function(){return t.callback.call(r.bind,e.transition,e.stateContext)},a=function(e){return j.normalize(e).toPromise()},o=function(n){return t.eventType.getErrorHandler(e)(n)},s=function(n){return t.eventType.getResultHandler(e)(n)};try{var c=i();return!this.type.synchronous&&oe(c)?c.catch(a).then(s,o):s(c)}catch(e){return o(j.normalize(e))}finally{t.invokeLimit&&++t.invokeCount>=t.invokeLimit&&t.deregister()}}},e.prototype.handleHookResult=function(e){var t=this,n=this.getNotCurrentRejection();if(n)return n;if(oe(e))return e.then(function(e){return t.handleHookResult(e)});if(N.traceHookResult(e,this.transition,this.options),e===!1)return j.aborted(`Hook aborted transition`).toPromise();if(_(Gt)(e))return j.redirected(e).toPromise()},e.prototype.getNotCurrentRejection=function(){var e=this.transition.router;if(e._disposed)return j.aborted(`UIRouter instance #${e.$id} has been stopped (disposed)`).toPromise();if(this.transition._aborted)return j.aborted().toPromise();if(this.isSuperseded())return j.superseded(this.options.current()).toPromise()},e.prototype.toString=function(){var e=this,t=e.options,n=e.registeredHook;return`${d(`traceData.hookType`)(t)||`internal`} context: ${d(`traceData.context.state.name`)(t)||d(`traceData.context`)(t)||`unknown`}, ${at(200,lt(n.callback))}`},e.HANDLE_RESULT=function(e){return function(t){return e.handleHookResult(t)}},e.LOG_REJECTED_RESULT=function(e){return function(t){oe(t)&&t.catch(function(t){return e.logError(j.normalize(t))})}},e.LOG_ERROR=function(e){return function(t){return e.logError(t)}},e.REJECT_ERROR=function(e){return function(e){return et(e)}},e.THROW_ERROR=function(e){return function(e){throw e}},e}();function bn(e,t,n){var r=T(t)?[t]:t;function i(e){for(var t=r,n=0;n<t.length;n++){var i=new tt(t[n]);if(i&&i.matches(e.name)||!i&&t[n]===e.name)return!0}return!1}return!!(w(r)?r:i)(e,n)}var xn=function(){function e(e,t,n,r,i,a){a===void 0&&(a={}),this.tranSvc=e,this.eventType=t,this.callback=n,this.matchCriteria=r,this.removeHookFromRegistry=i,this.invokeCount=0,this._deregistered=!1,this.priority=a.priority||0,this.bind=a.bind||null,this.invokeLimit=a.invokeLimit}return e.prototype._matchingNodes=function(e,t,n){if(t===!0)return e;var r=e.filter(function(e){return bn(e.state,t,n)});return r.length?r:null},e.prototype._getDefaultMatchCriteria=function(){return Pe(this.tranSvc._pluginapi._getPathTypes(),function(){return!0})},e.prototype._getMatchingNodes=function(e,t){var n=this,r=k(this._getDefaultMatchCriteria(),this.matchCriteria);return Ie(this.tranSvc._pluginapi._getPathTypes()).reduce(function(i,a){var o=a.scope===_n.STATE,s=e[a.name]||[],c=o?s:[qe(s)];return i[a.name]=n._matchingNodes(c,r[a.name],t),i},{})},e.prototype.matches=function(e,t){var n=this._getMatchingNodes(e,t);return Ie(n).every(ge)?n:null},e.prototype.deregister=function(){this.removeHookFromRegistry(this),this._deregistered=!0},e}();function Sn(e,t,n){var r=e._registeredHooks=e._registeredHooks||{},i=r[n.name]=[],a=Se(i);e[n.name]=o;function o(e,r,o){o===void 0&&(o={});var s=new xn(t,n,r,e,a,o);return i.push(s),s.deregister.bind(s)}return o}var Cn=function(){function e(e){this.transition=e}return e.prototype.buildHooksForPhase=function(e){var t=this;return this.transition.router.transitionService._pluginapi._getEvents(e).map(function(e){return t.buildHooks(e)}).reduce(A,[]).filter(ge)},e.prototype.buildHooks=function(e){var t=this.transition,n=t.treeChanges(),r=this.getMatchingHooks(e,n,t);if(!r)return[];var i={transition:t,current:t.options().current};return r.map(function(r){return r.matches(n,t)[e.criteriaMatchPath.name].map(function(n){var a=k({bind:r.bind,traceData:{hookType:e.name,context:n}},i);return{hook:r,node:n,transitionHook:new yn(t,e.criteriaMatchPath.scope===_n.STATE?n.state.self:null,r,a)}})}).reduce(A,[]).sort(wn(e.reverseSort)).map(function(e){return e.transitionHook})},e.prototype.getMatchingHooks=function(e,t,n){var r=e.hookPhase===gn.CREATE,i=this.transition.router.transitionService;return(r?[i]:[this.transition,i]).map(function(t){return t.getHooks(e.name)}).filter(Ue(D,`broken event named: ${e.name}`)).reduce(A,[]).filter(function(e){return e.matches(t,n)})},e}();function wn(e){return e===void 0&&(e=!1),function(t,n){var r=e?-1:1,i=(t.node.state.path.length-n.node.state.path.length)*r;return i===0?n.hook.priority-t.hook.priority:i}}var Tn=l(`self`),En=function(){function e(e,t,n){var r=this;if(this._deferred=O.$q.defer(),this.promise=this._deferred.promise,this._registeredHooks={},this._hookBuilder=new Cn(this),this.isActive=function(){return r.router.globals.transition===r},this.router=n,this._targetState=t,!t.valid())throw Error(t.error());this._options=k({current:v(this)},t.options()),this.$id=n.transitionService._transitionCount++;var i=Kt.buildToPath(e,t);this._treeChanges=Kt.treeChanges(e,i,this._options.reloadState),this.createTransitionHookRegFns();var a=this._hookBuilder.buildHooksForPhase(gn.CREATE);yn.invokeHooks(a,function(){return null}),this.applyViewConfigs(n)}return e.prototype.onBefore=function(e,t,n){},e.prototype.onStart=function(e,t,n){},e.prototype.onExit=function(e,t,n){},e.prototype.onRetain=function(e,t,n){},e.prototype.onEnter=function(e,t,n){},e.prototype.onFinish=function(e,t,n){},e.prototype.onSuccess=function(e,t,n){},e.prototype.onError=function(e,t,n){},e.prototype.createTransitionHookRegFns=function(){var e=this;this.router.transitionService._pluginapi._getEvents().filter(function(e){return e.hookPhase!==gn.CREATE}).forEach(function(t){return Sn(e,e.router.transitionService,t)})},e.prototype.getHooks=function(e){return this._registeredHooks[e]},e.prototype.applyViewConfigs=function(e){var t=this._treeChanges.entering.map(function(e){return e.state});Kt.applyViewConfigs(e.transitionService.$view,this._treeChanges.to,t)},e.prototype.$from=function(){return qe(this._treeChanges.from).state},e.prototype.$to=function(){return qe(this._treeChanges.to).state},e.prototype.from=function(){return this.$from().self},e.prototype.to=function(){return this.$to().self},e.prototype.targetState=function(){return this._targetState},e.prototype.is=function(t){return t instanceof e?this.is({to:t.$to().name,from:t.$from().name}):!(t.to&&!bn(this.$to(),t.to,this)||t.from&&!bn(this.$from(),t.from,this))},e.prototype.params=function(e){return e===void 0&&(e=`to`),Object.freeze(this._treeChanges[e].map(l(`paramValues`)).reduce(Oe,{}))},e.prototype.paramsChanged=function(){var e=this.params(`from`),t=this.params(`to`),n=[].concat(this._treeChanges.to,this._treeChanges.from).map(function(e){return e.paramSchema}).reduce(ze,[]).reduce(Ve,[]);return Bt.changed(n,e,t).reduce(function(e,n){return e[n.id]=t[n.id],e},{})},e.prototype.injector=function(e,t){t===void 0&&(t=`to`);var n=this._treeChanges[t];return e&&(n=Kt.subPath(n,function(t){return t.state===e||t.state.name===e})),new Qt(n).injector()},e.prototype.getResolveTokens=function(e){return e===void 0&&(e=`to`),new Qt(this._treeChanges[e]).getTokens()},e.prototype.addResolvable=function(e,t){t===void 0&&(t=``),e=_(P)(e)?e:new P(e);var n=typeof t==`string`?t:t.name,r=this._treeChanges.to,i=Ne(r,function(e){return e.state.name===n});new Qt(r).addResolvables([e],i.state)},e.prototype.redirectedFrom=function(){return this._options.redirectedFrom||null},e.prototype.originalTransition=function(){var e=this.redirectedFrom();return e&&e.originalTransition()||this},e.prototype.options=function(){return this._options},e.prototype.entering=function(){return Fe(this._treeChanges.entering,l(`state`)).map(Tn)},e.prototype.exiting=function(){return Fe(this._treeChanges.exiting,l(`state`)).map(Tn).reverse()},e.prototype.retained=function(){return Fe(this._treeChanges.retained,l(`state`)).map(Tn)},e.prototype.views=function(e,t){e===void 0&&(e=`entering`);var n=this._treeChanges[e];return n=t?n.filter(u(`state`,t)):n,n.map(l(`views`)).filter(ge).reduce(A,[])},e.prototype.treeChanges=function(e){return e?this._treeChanges[e]:this._treeChanges},e.prototype.redirect=function(e){for(var t=1,n=this;(n=n.redirectedFrom())!=null;)if(++t>20)throw Error(`Too many consecutive Transition redirects (20+)`);var r={redirectedFrom:this,source:`redirect`};this.options().source===`url`&&e.options().location!==!1&&(r.location=`replace`);var i=k({},this.options(),e.options(),r);e=e.withOptions(i,!0);var a=this.router.transitionService.create(this._treeChanges.from,e),o=this._treeChanges.entering,s=a._treeChanges.entering;return Kt.matching(s,o,Kt.nonDynamicParams).filter(f(function(e){return function(t){return e&&t.state.includes[e.name]}}(e.options().reloadState))).forEach(function(e,t){e.resolvables=o[t].resolvables}),a},e.prototype._changedParams=function(){var e=this._treeChanges;if(!this._options.reload&&!(e.exiting.length||e.entering.length)&&e.to.length===e.from.length&&!Ge(e.to,e.from).map(function(e){return e[0].state!==e[1].state}).reduce(Re,!1)){var t=e.to.map(function(e){return e.paramSchema}),n=[e.to,e.from].map(function(e){return e.map(function(e){return e.paramValues})}),r=n[0],i=n[1];return Ge(t,r,i).map(function(e){var t=e[0],n=e[1],r=e[2];return Bt.changed(t,n,r)}).reduce(A,[])}},e.prototype.dynamic=function(){var e=this._changedParams();return e?e.map(function(e){return e.dynamic}).reduce(Re,!1):!1},e.prototype.ignored=function(){return!!this._ignoredReason()},e.prototype._ignoredReason=function(){var e=this.router.globals.transition,t=this._options.reloadState,n=function(e,n){if(e.length!==n.length)return!1;var r=Kt.matching(e,n);return e.length===r.filter(function(e){return!t||!e.state.includes[t.name]}).length},r=this.treeChanges(),i=e&&e.treeChanges();if(i&&n(i.to,r.to)&&n(i.exiting,r.exiting))return`SameAsPending`;if(r.exiting.length===0&&r.entering.length===0&&n(r.from,r.to))return`SameAsCurrent`},e.prototype.run=function(){var e=this,t=yn.runAllHooks,n=function(t){return e._hookBuilder.buildHooksForPhase(t)},r=function(){N.traceSuccess(e.$to(),e),e.success=!0,e._deferred.resolve(e.to()),t(n(gn.SUCCESS))},i=function(r){N.traceError(r,e),e.success=!1,e._deferred.reject(r),e._error=r,t(n(gn.ERROR))},a=function(){var e=n(gn.RUN);return yn.invokeHooks(e,function(){return O.$q.when(void 0)})},o=function(){var t=e.router.globals;return t.lastStartedTransitionId=e.$id,t.transition=e,t.transitionHistory.enqueue(e),N.traceTransitionStart(e),O.$q.when(void 0)},s=n(gn.BEFORE);return yn.invokeHooks(s,o).then(a).then(r,i),this.promise},e.prototype.valid=function(){return!this.error()||this.success!==void 0},e.prototype.abort=function(){S(this.success)&&(this._aborted=!0)},e.prototype.error=function(){var e=this.$to();if(e.self.abstract)return j.invalid(`Cannot transition to abstract state '${e.name}'`);var t=e.parameters(),n=this.params(),r=t.filter(function(e){return!e.validates(n[e.id])});if(r.length){var i=r.map(function(e){return`[${e.id}:${ut(n[e.id])}]`}).join(`, `),a=`The following parameter values are not valid for state '${e.name}': ${i}`;return j.invalid(a)}if(this.success===!1)return this._error},e.prototype.toString=function(){var e=this.from(),t=this.to(),n=function(e){return e[`#`]!==null&&e[`#`]!==void 0?e:je(e,[`#`])};return`Transition#${this.$id}( '${E(e)?e.name:e}'${ut(n(this._treeChanges.from.map(l(`paramValues`)).reduce(Oe,{})))} -> ${this.valid()?``:`(X) `}'${E(t)?t.name:t}'${ut(n(this.params()))} )`},e.diToken=e,e}();function Dn(e,t){var n=[``,``],r=e.replace(/[\\\[\]\^$*+?.()|{}]/g,`\\$&`);if(!t)return r;switch(t.squash){case!1:n=[`(`,`)`+(t.isOptional?`?`:``)];break;case!0:r=r.replace(/\/$/,``),n=[`(?:/(`,`)|/)?`];break;default:n=[`(${t.squash}|`,`)?`]}return r+n[0]+t.type.pattern.source+n[1]}var On=function(e,t,n){return e[t]=e[t]||n()},kn=_t(`/`),An={state:{params:{}},strict:!0,caseInsensitive:!0,decodeParams:!0},jn=function(){function e(t,n,r,i){var a=this;this._cache={path:[this]},this._children=[],this._params=[],this._segments=[],this._compiled=[],this.config=i=De(i,An),this.pattern=t;for(var o=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:(?=(\s*))\4((?:[^{}\\]|\\.|\{(?:[^{}\\]|\\.)*\})+))?\}/g,s=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:(?=(\s*))\4((?:[^{}\\]|\\.|\{(?:[^{}\\]|\\.)*\})+))?\}/g,c=[],l=0,d,f=function(n){if(!e.nameValidator.test(n))throw Error(`Invalid parameter name '${n}' in pattern '${t}'`);if(Ne(a._params,u(`id`,n)))throw Error(`Duplicate parameter name '${n}' in pattern '${t}'`)},p=function(e,r){var i=e[2]||e[3],o=r?e[5]:e[5]||(e[1]===`*`?`[\\s\\S]*`:null);return{id:i,regexp:o,segment:t.substring(l,e.index),type:o?n.type(o)||function(e){return ye(n.type(r?`query`:`path`),{pattern:new RegExp(e,a.config.caseInsensitive?`i`:void 0)})}(o):null}},m,h;(d=o.exec(t))&&(m=p(d,!1),!(m.segment.indexOf(`?`)>=0));)f(m.id),this._params.push(r.fromPath(m.id,m.type,i.state)),this._segments.push(m.segment),c.push([m.segment,qe(this._params)]),l=o.lastIndex;h=t.substring(l);var g=h.indexOf(`?`);if(g>=0){var _=h.substring(g);if(h=h.substring(0,g),_.length>0)for(l=0;d=s.exec(_);)m=p(d,!0),f(m.id),this._params.push(r.fromSearch(m.id,m.type,i.state)),l=o.lastIndex}this._segments.push(h),this._compiled=c.map(function(e){return Dn.apply(null,e)}).concat(Dn(h))}return e.encodeDashes=function(e){return encodeURIComponent(e).replace(/-/g,function(e){return`%5C%${e.charCodeAt(0).toString(16).toUpperCase()}`})},e.pathSegmentsAndParams=function(e){var t=e._segments;return Ge(t,e._params.filter(function(e){return e.location===Pt.PATH}).concat(void 0)).reduce(A,[]).filter(function(e){return e!==``&&C(e)})},e.queryParams=function(e){return e._params.filter(function(e){return e.location===Pt.SEARCH})},e.compare=function(t,n){var r=function(t){return t._cache.segments=t._cache.segments||t._cache.path.map(e.pathSegmentsAndParams).reduce(A,[]).reduce(vt,[]).map(function(e){return T(e)?kn(e):e}).reduce(A,[])},i=function(e){return e._cache.weights=e._cache.weights||r(e).map(function(e){if(e===`/`)return 1;if(T(e))return 2;if(e instanceof Bt)return 3})},a=function(e,t,n){for(var r=Math.max(e.length,t.length);e.length<r;)e.push(n);for(;t.length<r;)t.push(n)},o=i(t),s=i(n);a(o,s,0);var c=Ge(o,s),l,u;for(u=0;u<c.length;u++)if(l=c[u][0]-c[u][1],l!==0)return l;return 0},e.prototype.append=function(e){return this._children.push(e),e._cache={path:this._cache.path.concat(e),parent:this,pattern:null},e},e.prototype.isRoot=function(){return this._cache.path[0]===this},e.prototype.toString=function(){return this.pattern},e.prototype._getDecodedParamValue=function(e,t){return C(e)&&(this.config.decodeParams&&!t.type.raw&&(e=D(e)?e.map(function(e){return decodeURIComponent(e)}):decodeURIComponent(e)),e=t.type.decode(e)),t.value(e)},e.prototype.exec=function(e,t,n,r){var i=this;t===void 0&&(t={}),r===void 0&&(r={});var a=On(this._cache,`pattern`,function(){return new RegExp([`^`,He(i._cache.path.map(l(`_compiled`))).join(``),i.config.strict===!1?`/?`:``,`$`].join(``),i.config.caseInsensitive?`i`:void 0)}).exec(e);if(!a)return null;var o=this.parameters(),s=o.filter(function(e){return!e.isSearch()}),c=o.filter(function(e){return e.isSearch()}),u=this._cache.path.map(function(e){return e._segments.length-1}).reduce(function(e,t){return e+t}),d={};if(u!==a.length-1)throw Error(`Unbalanced capture group in route '${this.pattern}'`);function f(e){var t=function(e){return e.split(``).reverse().join(``)};return Fe(Fe(t(e).split(/-(?!\\)/),t),function(e){return e.replace(/\\-/g,`-`)}).reverse()}for(var p=0;p<u;p++){for(var m=s[p],h=a[p+1],g=0;g<m.replace.length;g++)m.replace[g].from===h&&(h=m.replace[g].to);h&&m.array===!0&&(h=f(h)),d[m.id]=this._getDecodedParamValue(h,m)}return c.forEach(function(e){for(var n=t[e.id],r=0;r<e.replace.length;r++)e.replace[r].from===n&&(n=e.replace[r].to);d[e.id]=i._getDecodedParamValue(n,e)}),n&&(d[`#`]=n),d},e.prototype.parameters=function(e){return e===void 0&&(e={}),e.inherit===!1?this._params:He(this._cache.path.map(function(e){return e._params}))},e.prototype.parameter=function(e,t){var n=this;t===void 0&&(t={});var r=function(){for(var t=0,r=n._params;t<r.length;t++){var i=r[t];if(i.id===e)return i}},i=this._cache.parent;return r()||t.inherit!==!1&&i&&i.parameter(e,t)||null},e.prototype.validates=function(e){var t=function(e,t){return!e||e.validates(t)};return e||={},this.parameters().filter(function(t){return e.hasOwnProperty(t.id)}).map(function(n){return t(n,e[n.id])}).reduce(Le,!0)},e.prototype.format=function(t){t===void 0&&(t={});var n=this._cache.path,r=n.map(e.pathSegmentsAndParams).reduce(A,[]).map(function(e){return T(e)?e:a(e)}),i=n.map(e.queryParams).reduce(A,[]).map(a);if(r.concat(i).filter(function(e){return e.isValid===!1}).length)return null;function a(e){var n=e.value(t[e.id]),r=e.validates(n),i=e.isDefaultValue(n);return{param:e,value:n,isValid:r,isDefaultValue:i,squash:i?e.squash:!1,encoded:e.type.encode(n)}}var o=r.reduce(function(t,n){if(T(n))return t+n;var r=n.squash,i=n.encoded,a=n.param;return r===!0?t.match(/\/$/)?t.slice(0,-1):t:T(r)?t+r:r!==!1||i==null?t:D(i)?t+Fe(i,e.encodeDashes).join(`-`):a.raw?t+i:t+encodeURIComponent(i)},``),s=i.map(function(e){var t=e.param,n=e.squash,r=e.encoded,i=e.isDefaultValue;if(!(r==null||i&&n!==!1)&&(D(r)||(r=[r]),r.length!==0))return t.raw||(r=Fe(r,encodeURIComponent)),r.map(function(e){return`${t.id}=${e}`})}).filter(ge).reduce(A,[]).join(`&`);return o+(s?`?${s}`:``)+(t[`#`]?`#`+t[`#`]:``)},e.nameValidator=/^\w+([-.]+\w+)*(?:\[\])?$/,e}(),Mn=function(){return Mn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Mn.apply(this,arguments)},Nn=function(){function e(e){this.router=e}return e.prototype.fromConfig=function(e,t,n){return new Bt(e,t,Pt.CONFIG,this.router.urlService.config,n)},e.prototype.fromPath=function(e,t,n){return new Bt(e,t,Pt.PATH,this.router.urlService.config,n)},e.prototype.fromSearch=function(e,t,n){return new Bt(e,t,Pt.SEARCH,this.router.urlService.config,n)},e}(),Pn=function(){function e(e){var t=this;this.router=e,this.paramFactory=new Nn(this.router),this.UrlMatcher=jn,this.Param=Bt,this.caseInsensitive=function(e){return t.router.urlService.config.caseInsensitive(e)},this.defaultSquashPolicy=function(e){return t.router.urlService.config.defaultSquashPolicy(e)},this.strictMode=function(e){return t.router.urlService.config.strictMode(e)},this.type=function(e,n,r){return t.router.urlService.config.type(e,n,r)||t}}return e.prototype.compile=function(e,t){var n=this.router.urlService.config,r=t&&!t.state&&t.params;t=r?Mn({state:{params:r}},t):t;var i={strict:n._isStrictMode,caseInsensitive:n._isCaseInsensitive,decodeParams:n._decodeParams};return new jn(e,n.paramTypes,this.paramFactory,k(i,t))},e.prototype.isMatcher=function(e){if(!E(e))return!1;var t=!0;return me(jn.prototype,function(n,r){w(n)&&(t=t&&C(e[r])&&w(e[r]))}),t},e.prototype.$get=function(){var e=this.router.urlService.config;return e.paramTypes.enqueue=!1,e.paramTypes._flushTypeQueue(),this},e}(),Fn=function(){function e(e){this.router=e}return e.prototype.compile=function(e){return this.router.urlMatcherFactory.compile(e)},e.prototype.create=function(e,t){var n=this,r=fn.isState,i=fn.isStateDeclaration,a=y([[T,function(e){return a(n.compile(e))}],[_(jn),function(e){return n.fromUrlMatcher(e,t)}],[m(r,i),function(e){return n.fromState(e,n.router)}],[_(RegExp),function(e){return n.fromRegExp(e,t)}],[w,function(e){return new In(e,t)}]]),o=a(e);if(!o)throw Error(`invalid 'what' in when()`);return o},e.prototype.fromUrlMatcher=function(e,t){var n=t;T(t)&&(t=this.router.urlMatcherFactory.compile(t)),_(jn)(t)&&(n=function(e){return t.format(e)});function r(t){var n=e.exec(t.path,t.search,t.hash);return e.validates(n)&&n}function i(t){var n=e.parameters().filter(function(e){return e.isOptional});return n.length?n.filter(function(e){return t[e.id]}).length/n.length:1e-6}var a={urlMatcher:e,matchPriority:i,type:`URLMATCHER`};return k(new In(r,n),a)},e.prototype.fromState=function(e,t){var n=fn.isStateDeclaration(e)?e.$$state():e,r=function(e){var r=t.stateService,i=t.globals;r.href(n,e)!==r.href(i.current,i.params)&&r.transitionTo(n,e,{inherit:!0,source:`url`})},i={state:n,type:`STATE`};return k(this.fromUrlMatcher(n.url,r),i)},e.prototype.fromRegExp=function(e,t){if(e.global||e.sticky)throw Error(`Rule RegExp must not be global or sticky`);var n=T(t)?function(e){return t.replace(/\$(\$|\d{1,2})/,function(t,n){return e[n===`$`?0:Number(n)]})}:t,r=function(t){return e.exec(t.path)},i={regexp:e,type:`REGEXP`};return k(new In(r,n),i)},e.isUrlRule=function(e){return e&&[`type`,`match`,`handler`].every(function(t){return C(e[t])})},e}(),In=function(){function e(e,t){var n=this;this.match=e,this.type=`RAW`,this.matchPriority=function(e){return 0-n.$id},this.handler=t||ge}return e}();function Ln(e,t,n,r){return r===`/`?e:t?ft(r)+e:n?r.slice(1)+e:e}var Rn=function(){function e(e){var t=this;this.router=e,this.sync=function(e){return t.router.urlService.sync(e)},this.listen=function(e){return t.router.urlService.listen(e)},this.deferIntercept=function(e){return t.router.urlService.deferIntercept(e)},this.match=function(e){return t.router.urlService.match(e)},this.initial=function(e){return t.router.urlService.rules.initial(e)},this.otherwise=function(e){return t.router.urlService.rules.otherwise(e)},this.removeRule=function(e){return t.router.urlService.rules.removeRule(e)},this.rule=function(e){return t.router.urlService.rules.rule(e)},this.rules=function(){return t.router.urlService.rules.rules()},this.sort=function(e){return t.router.urlService.rules.sort(e)},this.when=function(e,n,r){return t.router.urlService.rules.when(e,n,r)},this.urlRuleFactory=new Fn(e)}return e.prototype.update=function(e){var t=this.router.locationService;if(e){this.location=t.url();return}t.url()!==this.location&&t.url(this.location,!0)},e.prototype.push=function(e,t,n){var r=n&&!!n.replace;this.router.urlService.url(e.format(t||{}),r)},e.prototype.href=function(e,t,n){var r=e.format(t);if(r==null)return null;n||={absolute:!1};var i=this.router.urlService.config,a=i.html5Mode();if(!a&&r!==null&&(r=`#`+i.hashPrefix()+r),r=Ln(r,a,n.absolute,i.baseHref()),!n.absolute||!r)return r;var o=!a&&r?`/`:``,s=i.port(),c=s===80||s===443?``:`:`+s;return[i.protocol(),`://`,i.host(),c,o,r].join(``)},Object.defineProperty(e.prototype,"interceptDeferred",{get:function(){return this.router.urlService.interceptDeferred},enumerable:!1,configurable:!0}),e}(),zn=function(){function e(e){var t=this;this.router=e,this._uiViews=[],this._viewConfigs=[],this._viewConfigFactories={},this._listeners=[],this._pluginapi={_rootViewContext:this._rootViewContext.bind(this),_viewConfigFactory:this._viewConfigFactory.bind(this),_registeredUIView:function(e){return Ne(t._uiViews,function(n){return`${t.router.$id}.${n.id}`===e})},_registeredUIViews:function(){return t._uiViews},_activeViewConfigs:function(){return t._viewConfigs},_onSync:function(e){return t._listeners.push(e),function(){return Se(t._listeners,e)}}}}return e.normalizeUIViewTarget=function(e,t){t===void 0&&(t=``);var n=t.split(`@`),r=n[0]||`$default`,i=T(n[1])?n[1]:`^`,a=/^(\^(?:\.\^)*)\.(.*$)/.exec(r);return a&&(i=a[1],r=a[2]),r.charAt(0)===`!`&&(r=r.substr(1),i=``),/^(\^(?:\.\^)*)$/.exec(i)?i=i.split(`.`).reduce(function(e,t){return e.parent},e).name:i===`.`&&(i=e.name),{uiViewName:r,uiViewContextAnchor:i}},e.prototype._rootViewContext=function(e){return this._rootContext=e||this._rootContext},e.prototype._viewConfigFactory=function(e,t){this._viewConfigFactories[e]=t},e.prototype.createViewConfig=function(e,t){var n=this._viewConfigFactories[t.$type];if(!n)throw Error(`ViewService: No view config factory registered for type `+t.$type);var r=n(e,t);return D(r)?r:[r]},e.prototype.deactivateViewConfig=function(e){N.traceViewServiceEvent(`<- Removing`,e),Se(this._viewConfigs,e)},e.prototype.activateViewConfig=function(e){N.traceViewServiceEvent(`-> Registering`,e),this._viewConfigs.push(e)},e.prototype.sync=function(){var t=this,n=this._uiViews.map(function(e){return[e.fqn,e]}).reduce(Ke,{});function r(e){var t=function(e){return e&&e.parent?t(e.parent)+1:1};return e.fqn.split(`.`).length*1e4+t(e.creationContext)}function i(e){for(var t=e.viewDecl.$context,n=0;++n&&t.parent;)t=t.parent;return n}var a=o(function(e,t,n,r){return t*(e(n)-e(r))}),s=function(r){var o=t._viewConfigs.filter(e.matches(n,r));return o.length>1&&o.sort(a(i,-1)),{uiView:r,viewConfig:o[0]}},c=function(e){t._uiViews.indexOf(e.uiView)!==-1&&e.uiView.configUpdated(e.viewConfig)},l=this._uiViews.sort(a(r,1)).map(s),u=l.map(function(e){return e.viewConfig}),d=this._viewConfigs.filter(function(e){return!be(u,e)}).map(function(e){return{uiView:void 0,viewConfig:e}});l.forEach(c);var f=l.concat(d);this._listeners.forEach(function(e){return e(f)}),N.traceViewSync(f)},e.prototype.registerUIView=function(e){N.traceViewServiceUIViewEvent(`-> Registering`,e);var t=this._uiViews;return t.filter(function(t){return t.fqn===e.fqn&&t.$type===e.$type}).length&&N.traceViewServiceUIViewEvent(`!!!! duplicate uiView named:`,e),t.push(e),this.sync(),function(){if(t.indexOf(e)===-1){N.traceViewServiceUIViewEvent(`Tried removing non-registered uiView`,e);return}N.traceViewServiceUIViewEvent(`<- Deregistering`,e),Se(t)(e)}},e.prototype.available=function(){return this._uiViews.map(l(`fqn`))},e.prototype.active=function(){return this._uiViews.filter(l(`$config`)).map(l(`name`))},e.matches=function(e,t){return function(n){if(t.$type!==n.viewDecl.$type)return!1;var r=n.viewDecl,i=r.$uiViewName.split(`.`),a=t.fqn.split(`.`);if(!he(i,a.slice(0-i.length)))return!1;var o=1-i.length||void 0,s=e[a.slice(0,o).join(`.`)].creationContext;return r.$uiViewContextAnchor===(s&&s.name)}},e}(),Bn=function(){function e(){this.params=new Ut,this.lastStartedTransitionId=-1,this.transitionHistory=new nt([],1),this.successfulTransitions=new nt([],1)}return e.prototype.dispose=function(){this.transitionHistory.clear(),this.successfulTransitions.clear(),this.transition=null},e}(),Vn=function(e,t){return(t.priority||0)-(e.priority||0)},Hn=function(e,t){var n={STATE:4,URLMATCHER:4,REGEXP:3,RAW:2,OTHER:1};return(n[e.type]||0)-(n[t.type]||0)},Un=function(e,t){return!e.urlMatcher||!t.urlMatcher?0:jn.compare(e.urlMatcher,t.urlMatcher)},Wn=function(e,t){var n={STATE:!0,URLMATCHER:!0};return n[e.type]&&n[t.type]?0:(e.$id||0)-(t.$id||0)},Gn=function(e,t){var n=Vn(e,t);return n!==0||(n=Hn(e,t),n!==0)||(n=Un(e,t),n!==0)?n:Wn(e,t)};function Kn(e){if(!w(e)&&!T(e)&&!_(Gt)(e)&&!Gt.isDef(e))throw Error(`'handler' must be a string, function, TargetState, or have a state: 'newtarget' property`);return w(e)?e:v(e)}var qn=function(){function e(e){this.router=e,this._sortFn=Gn,this._rules=[],this._id=0,this.urlRuleFactory=new Fn(e)}return e.prototype.dispose=function(e){this._rules=[],delete this._otherwiseFn},e.prototype.initial=function(e){var t=Kn(e);this.rule(this.urlRuleFactory.create(function(e,t){return t.globals.transitionHistory.size()===0&&!!/^\/?$/.exec(e.path)},t))},e.prototype.otherwise=function(e){var t=Kn(e);this._otherwiseFn=this.urlRuleFactory.create(v(!0),t),this._sorted=!1},e.prototype.removeRule=function(e){Se(this._rules,e)},e.prototype.rule=function(e){var t=this;if(!Fn.isUrlRule(e))throw Error(`invalid rule`);return e.$id=this._id++,e.priority=e.priority||0,this._rules.push(e),this._sorted=!1,function(){return t.removeRule(e)}},e.prototype.rules=function(){return this.ensureSorted(),this._rules.concat(this._otherwiseFn?[this._otherwiseFn]:[])},e.prototype.sort=function(e){for(var t=this.stableSort(this._rules,this._sortFn=e||this._sortFn),n=0,r=0;r<t.length;r++)t[r]._group=n,r<t.length-1&&this._sortFn(t[r],t[r+1])!==0&&n++;this._rules=t,this._sorted=!0},e.prototype.ensureSorted=function(){this._sorted||this.sort()},e.prototype.stableSort=function(e,t){var n=e.map(function(e,t){return{elem:e,idx:t}});return n.sort(function(e,n){var r=t(e.elem,n.elem);return r===0?e.idx-n.idx:r}),n.map(function(e){return e.elem})},e.prototype.when=function(e,t,n){var r=this.urlRuleFactory.create(e,t);return C(n&&n.priority)&&(r.priority=n.priority),this.rule(r),r},e}(),Jn=function(){function e(e){var t=this;this.router=e,this.paramTypes=new Vt,this._decodeParams=!0,this._isCaseInsensitive=!1,this._isStrictMode=!0,this._defaultSquashPolicy=!1,this.dispose=function(){return t.paramTypes.dispose()},this.baseHref=function(){return t.router.locationConfig.baseHref()},this.hashPrefix=function(e){return t.router.locationConfig.hashPrefix(e)},this.host=function(){return t.router.locationConfig.host()},this.html5Mode=function(){return t.router.locationConfig.html5Mode()},this.port=function(){return t.router.locationConfig.port()},this.protocol=function(){return t.router.locationConfig.protocol()}}return e.prototype.caseInsensitive=function(e){return this._isCaseInsensitive=C(e)?e:this._isCaseInsensitive},e.prototype.defaultSquashPolicy=function(e){if(C(e)&&e!==!0&&e!==!1&&!T(e))throw Error(`Invalid squash policy: ${e}. Valid policies: false, true, arbitrary-string`);return this._defaultSquashPolicy=C(e)?e:this._defaultSquashPolicy},e.prototype.strictMode=function(e){return this._isStrictMode=C(e)?e:this._isStrictMode},e.prototype.type=function(e,t,n){var r=this.paramTypes.type(e,t,n);return C(t)?this:r},e}(),Yn=function(){function e(e){var t=this;this.router=e,this.interceptDeferred=!1,this.rules=new qn(this.router),this.config=new Jn(this.router),this.url=function(e,n,r){return t.router.locationService.url(e,n,r)},this.path=function(){return t.router.locationService.path()},this.search=function(){return t.router.locationService.search()},this.hash=function(){return t.router.locationService.hash()},this.onChange=function(e){return t.router.locationService.onChange(e)}}return e.prototype.dispose=function(){this.listen(!1),this.rules.dispose()},e.prototype.parts=function(){return{path:this.path(),search:this.search(),hash:this.hash()}},e.prototype.sync=function(e){if(!(e&&e.defaultPrevented)){var t=this.router,n=t.urlService,r=t.stateService,i={path:n.path(),search:n.search(),hash:n.hash()},a=this.match(i);y([[T,function(e){return n.url(e,!0)}],[Gt.isDef,function(e){return r.go(e.state,e.params,e.options)}],[_(Gt),function(e){return r.go(e.state(),e.params(),e.options())}]])(a&&a.rule.handler(a.match,i,this.router))}},e.prototype.listen=function(e){var t=this;if(e===!1)this._stopListeningFn&&this._stopListeningFn(),delete this._stopListeningFn;else return this._stopListeningFn=this._stopListeningFn||this.router.urlService.onChange(function(e){return t.sync(e)})},e.prototype.deferIntercept=function(e){e===void 0&&(e=!0),this.interceptDeferred=e},e.prototype.match=function(e){var t=this;e=k({path:``,search:{},hash:``},e);for(var n=this.rules.rules(),r=function(n){var r=n.match(e,t.router);return r&&{match:r,rule:n,weight:n.matchPriority(r)}},i,a=0;a<n.length&&!(i&&i.rule._group!==n[a]._group);a++){var o=r(n[a]);i=!i||o&&o.weight>i.weight?o:i}return i},e}(),Xn=0,Zn=[`url`,`path`,`search`,`hash`,`onChange`],Qn=[`port`,`protocol`,`host`,`baseHref`,`html5Mode`,`hashPrefix`],$n=ce(`LocationServices`,Zn),er=ce(`LocationConfig`,Qn),tr=function(){function e(e,t){e===void 0&&(e=$n),t===void 0&&(t=er),this.locationService=e,this.locationConfig=t,this.$id=Xn++,this._disposed=!1,this._disposables=[],this.trace=N,this.viewService=new zn(this),this.globals=new Bn,this.transitionService=new zr(this),this.urlMatcherFactory=new Pn(this),this.urlRouter=new Rn(this),this.urlService=new Yn(this),this.stateRegistry=new hn(this),this.stateService=new Br(this),this._plugins={},this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()),this.globals.$current=this.stateRegistry.root(),this.globals.current=this.globals.$current.self,this.disposable(this.globals),this.disposable(this.stateService),this.disposable(this.stateRegistry),this.disposable(this.transitionService),this.disposable(this.urlService),this.disposable(e),this.disposable(t)}return e.prototype.disposable=function(e){this._disposables.push(e)},e.prototype.dispose=function(e){var t=this;if(e&&w(e.dispose)){e.dispose(this);return}this._disposed=!0,this._disposables.slice().forEach(function(e){try{typeof e.dispose==`function`&&e.dispose(t),Se(t._disposables,e)}catch{}})},e.prototype.plugin=function(e,t){t===void 0&&(t={});var n=new e(this,t);if(!n.name)throw Error("Required property `name` missing on plugin: "+n);return this._disposables.push(n),this._plugins[n.name]=n},e.prototype.getPlugin=function(e){return e?this._plugins[e]:Ie(this._plugins)},e}();function nr(e){e.addResolvable(P.fromData(tr,e.router),``),e.addResolvable(P.fromData(En,e),``),e.addResolvable(P.fromData(`$transition$`,e),``),e.addResolvable(P.fromData(`$stateParams`,e.params()),``),e.entering().forEach(function(t){e.addResolvable(P.fromData(`$state$`,t),t)})}var rr=function(e){return e.onCreate({},nr)},ir=be([`$transition$`,En]),ar=function(e){var t=Ie(e.treeChanges()).reduce(A,[]).reduce(Ve,[]),n=function(e){return ir(e.token)?P.fromData(e.token,null):e};t.forEach(function(e){e.resolvables=e.resolvables.map(n)})},or=function(e){var t=e.to().redirectTo;if(!t)return;var n=e.router.stateService;function r(t){if(t){if(t instanceof Gt)return t;if(T(t))return n.target(t,e.params(),e.options());if(t.state||t.params)return n.target(t.state||e.to(),t.params||e.params(),e.options())}}return w(t)?O.$q.when(t(e)).then(r):r(t)},sr=function(e){return e.onStart({to:function(e){return!!e.redirectTo}},or)};function cr(e){return function(t,n){var r=n.$$state()[e];return r(t,n)}}var lr=cr(`onExit`),ur=function(e){return e.onExit({exiting:function(e){return!!e.onExit}},lr)},dr=cr(`onRetain`),fr=function(e){return e.onRetain({retained:function(e){return!!e.onRetain}},dr)},pr=cr(`onEnter`),mr=function(e){return e.onEnter({entering:function(e){return!!e.onEnter}},pr)},hr=1e3,gr=function(e){return new Qt(e.treeChanges().to).resolvePath(`EAGER`,e).then(_e)},_r=function(e){return e.onStart({},gr,{priority:hr})},vr=function(e,t){return new Qt(e.treeChanges().to).subContext(t.$$state()).resolvePath(`LAZY`,e).then(_e)},yr=function(e){return e.onEnter({entering:v(!0)},vr,{priority:hr})},br=function(e){return new Qt(e.treeChanges().to).resolvePath(`LAZY`,e).then(_e)},xr=function(e){return e.onFinish({},br,{priority:hr})},Sr=function(e){var t=O.$q,n=e.views(`entering`);if(n.length)return t.all(n.map(function(e){return t.when(e.load())})).then(_e)},Cr=function(e){return e.onFinish({},Sr)},wr=function(e){var t=e.views(`entering`),n=e.views(`exiting`);if(!(!t.length&&!n.length)){var r=e.router.viewService;n.forEach(function(e){return r.deactivateViewConfig(e)}),t.forEach(function(e){return r.activateViewConfig(e)}),r.sync()}},Tr=function(e){return e.onSuccess({},wr)},Er=function(e){var t=e.router.globals,n=function(){t.successfulTransitions.enqueue(e),t.$current=e.$to(),t.current=t.$current.self,Je(e.params(),t.params)},r=function(){t.transition===e&&(t.transition=null)};e.onSuccess({},n,{priority:1e4}),e.promise.then(r,r)},Dr=function(e){return e.onCreate({},Er)},Or=function(e){var t=e.options(),n=e.router.stateService,r=e.router.urlRouter;if(t.source!==`url`&&t.location&&n.$current.navigable){var i={replace:t.location===`replace`};r.push(n.$current.navigable.url,n.params,i)}r.update(!0)},kr=function(e){return e.onSuccess({},Or,{priority:9999})},Ar=function(e){var t=e.router;function n(){if(e.originalTransition().options().source!==`url`){var n=e.targetState();return t.stateService.target(n.identifier(),n.params(),n.options())}var r=t.urlService,i=r.match(r.parts()),a=i&&i.rule;if(a&&a.type===`STATE`){var o=a.state,s=i.match;return t.stateService.target(o,s,e.options())}t.urlService.sync()}var r=e.entering().filter(function(e){return!!e.$$state().lazyLoad}).map(function(t){return Mr(e,t)});return O.$q.all(r).then(n)},jr=function(e){return e.onBefore({entering:function(e){return!!e.lazyLoad}},Ar)};function Mr(e,t){var n=t.$$state().lazyLoad,r=n._promise;r||=n._promise=O.$q.when(n(e,t)).then(i).then(function(e){return delete t.lazyLoad,delete t.$$state().lazyLoad,delete n._promise,e},function(e){return delete n._promise,O.$q.reject(e)});function i(t){return t&&Array.isArray(t.states)&&t.states.forEach(function(t){return e.router.stateRegistry.register(t)}),t}return r}var Nr=function(){function e(e,t,n,r,i,a,o,s){i===void 0&&(i=!1),a===void 0&&(a=yn.HANDLE_RESULT),o===void 0&&(o=yn.REJECT_ERROR),s===void 0&&(s=!1),this.name=e,this.hookPhase=t,this.hookOrder=n,this.criteriaMatchPath=r,this.reverseSort=i,this.getResultHandler=a,this.getErrorHandler=o,this.synchronous=s}return e}();function Pr(e){var t=e._ignoredReason();if(t){N.traceTransitionIgnored(e);var n=e.router.globals.transition;return t===`SameAsCurrent`&&n&&n.abort(),j.ignored().toPromise()}}var Fr=function(e){return e.onBefore({},Pr,{priority:-9999})};function Ir(e){if(!e.valid())throw Error(e.error().toString())}var Lr=function(e){return e.onBefore({},Ir,{priority:-1e4})},Rr={location:!0,relative:null,inherit:!1,notify:!0,reload:!1,supercede:!0,custom:{},current:function(){return null},source:`unknown`},zr=function(){function e(e){this._transitionCount=0,this._eventTypes=[],this._registeredHooks={},this._criteriaPaths={},this._router=e,this.$view=e.viewService,this._deregisterHookFns={},this._pluginapi=ve(v(this),{},v(this),[`_definePathType`,`_defineEvent`,`_getPathTypes`,`_getEvents`,`getHooks`]),this._defineCorePaths(),this._defineCoreEvents(),this._registerCoreTransitionHooks(),e.globals.successfulTransitions.onEvict(ar)}return e.prototype.onCreate=function(e,t,n){},e.prototype.onBefore=function(e,t,n){},e.prototype.onStart=function(e,t,n){},e.prototype.onExit=function(e,t,n){},e.prototype.onRetain=function(e,t,n){},e.prototype.onEnter=function(e,t,n){},e.prototype.onFinish=function(e,t,n){},e.prototype.onSuccess=function(e,t,n){},e.prototype.onError=function(e,t,n){},e.prototype.dispose=function(e){Ie(this._registeredHooks).forEach(function(e){return e.forEach(function(t){t._deregistered=!0,Se(e,t)})})},e.prototype.create=function(e,t){return new En(e,t,this._router)},e.prototype._defineCoreEvents=function(){var e=gn,t=yn,n=this._criteriaPaths,r=!1,i=!0,a=!0;this._defineEvent(`onCreate`,e.CREATE,0,n.to,r,t.LOG_REJECTED_RESULT,t.THROW_ERROR,a),this._defineEvent(`onBefore`,e.BEFORE,0,n.to),this._defineEvent(`onStart`,e.RUN,0,n.to),this._defineEvent(`onExit`,e.RUN,100,n.exiting,i),this._defineEvent(`onRetain`,e.RUN,200,n.retained),this._defineEvent(`onEnter`,e.RUN,300,n.entering),this._defineEvent(`onFinish`,e.RUN,400,n.to),this._defineEvent(`onSuccess`,e.SUCCESS,0,n.to,r,t.LOG_REJECTED_RESULT,t.LOG_ERROR,a),this._defineEvent(`onError`,e.ERROR,0,n.to,r,t.LOG_REJECTED_RESULT,t.LOG_ERROR,a)},e.prototype._defineCorePaths=function(){var e=_n.STATE,t=_n.TRANSITION;this._definePathType(`to`,t),this._definePathType(`from`,t),this._definePathType(`exiting`,e),this._definePathType(`retained`,e),this._definePathType(`entering`,e)},e.prototype._defineEvent=function(e,t,n,r,i,a,o,s){i===void 0&&(i=!1),a===void 0&&(a=yn.HANDLE_RESULT),o===void 0&&(o=yn.REJECT_ERROR),s===void 0&&(s=!1);var c=new Nr(e,t,n,r,i,a,o,s);this._eventTypes.push(c),Sn(this,this,c)},e.prototype._getEvents=function(e){return(C(e)?this._eventTypes.filter(function(t){return t.hookPhase===e}):this._eventTypes.slice()).sort(function(e,t){var n=e.hookPhase-t.hookPhase;return n===0?e.hookOrder-t.hookOrder:n})},e.prototype._definePathType=function(e,t){this._criteriaPaths[e]={name:e,scope:t}},e.prototype._getPathTypes=function(){return this._criteriaPaths},e.prototype.getHooks=function(e){return this._registeredHooks[e]},e.prototype._registerCoreTransitionHooks=function(){var e=this._deregisterHookFns;e.addCoreResolves=rr(this),e.ignored=Fr(this),e.invalid=Lr(this),e.redirectTo=sr(this),e.onExit=ur(this),e.onRetain=fr(this),e.onEnter=mr(this),e.eagerResolve=_r(this),e.lazyResolve=yr(this),e.resolveAll=xr(this),e.loadViews=Cr(this),e.activateViews=Tr(this),e.updateGlobals=Dr(this),e.updateUrl=kr(this),e.lazyLoad=jr(this)},e}(),Br=function(){function e(t){this.router=t,this.invalidCallbacks=[],this._defaultErrorHandler=function(e){e instanceof Error&&e.stack?(console.error(e),console.error(e.stack)):e instanceof j?(console.error(e.toString()),e.detail&&e.detail.stack&&console.error(e.detail.stack)):console.error(e)};var n=Object.keys(e.prototype).filter(f(be([`current`,`$current`,`params`,`transition`])));ve(v(e.prototype),this,v(this),n)}return Object.defineProperty(e.prototype,"transition",{get:function(){return this.router.globals.transition},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"params",{get:function(){return this.router.globals.params},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"current",{get:function(){return this.router.globals.current},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"$current",{get:function(){return this.router.globals.$current},enumerable:!1,configurable:!0}),e.prototype.dispose=function(){this.defaultErrorHandler(_e),this.invalidCallbacks=[]},e.prototype._handleInvalidTargetState=function(e,t){var n=this,r=Kt.makeTargetState(this.router.stateRegistry,e),i=this.router.globals,a=function(){return i.transitionHistory.peekTail()},o=a(),s=new nt(this.invalidCallbacks.slice()),c=new Qt(e).injector(),l=function(e){if(e instanceof Gt){var t=e;return t=n.target(t.identifier(),t.params(),t.options()),t.valid()?a()===o?n.transitionTo(t.identifier(),t.params(),t.options()):j.superseded().toPromise():j.invalid(t.error()).toPromise()}};function u(){var e=s.dequeue();return e===void 0?j.invalid(t.error()).toPromise():O.$q.when(e(t,r,c)).then(l).then(function(e){return e||u()})}return u()},e.prototype.onInvalid=function(e){return this.invalidCallbacks.push(e),function(){Se(this.invalidCallbacks)(e)}.bind(this)},e.prototype.reload=function(e){return this.transitionTo(this.current,this.params,{reload:!C(e)||e,inherit:!1,notify:!1})},e.prototype.go=function(e,t,n){var r=De(n,{relative:this.$current,inherit:!0},Rr);return this.transitionTo(e,t,r)},e.prototype.target=function(e,t,n){if(n===void 0&&(n={}),E(n.reload)&&!n.reload.name)throw Error(`Invalid reload state object`);var r=this.router.stateRegistry;if(n.reloadState=n.reload===!0?r.root():r.matcher.find(n.reload,n.relative),n.reload&&!n.reloadState)throw Error(`No such reload state '${T(n.reload)?n.reload:n.reload.name}'`);return new Gt(this.router.stateRegistry,e,t,n)},e.prototype.getCurrentPath=function(){var e=this,t=this.router.globals.successfulTransitions.peekTail();return t?t.treeChanges().to:function(){return[new Wt(e.router.stateRegistry.root())]}()},e.prototype.transitionTo=function(e,t,n){var r=this;t===void 0&&(t={}),n===void 0&&(n={});var i=this.router,a=i.globals;n=De(n,Rr);var o=function(){return a.transition};n=k(n,{current:o});var s=this.target(e,t,n),c=this.getCurrentPath();if(!s.exists())return this._handleInvalidTargetState(c,s);if(!s.valid())return et(s.error());if(n.supercede===!1&&o())return j.ignored(`Another transition is in progress and supercede has been set to false in TransitionOptions for the transition. So the transition was ignored in favour of the existing one in progress.`).toPromise();var l=function(e){return function(t){if(t instanceof j){var n=i.globals.lastStartedTransitionId<=e.$id;if(t.type===rt.IGNORED)return n&&i.urlRouter.update(),O.$q.when(a.current);var o=t.detail;if(t.type===rt.SUPERSEDED&&t.redirected&&o instanceof Gt){var s=e.redirect(o);return s.run().catch(l(s))}if(t.type===rt.ABORTED)return n&&i.urlRouter.update(),O.$q.reject(t)}return r.defaultErrorHandler()(t),O.$q.reject(t)}},u=this.router.transitionService.create(c,s),d=u.run().catch(l(u));return $e(d),k(d,{transition:u})},e.prototype.is=function(e,t,n){n=De(n,{relative:this.$current});var r=this.router.stateRegistry.matcher.find(e,n.relative);if(C(r)){if(this.$current!==r)return!1;if(!t)return!0;var i=r.parameters({inherit:!0,matchingKeys:t});return Bt.equals(i,Bt.values(i,t),this.params)}},e.prototype.includes=function(e,t,n){n=De(n,{relative:this.$current});var r=T(e)&&tt.fromString(e);if(r){if(!r.matches(this.$current.name))return!1;e=this.$current.name}var i=this.router.stateRegistry.matcher.find(e,n.relative),a=this.$current.includes;if(C(i)){if(!C(a[i.name]))return!1;if(!t)return!0;var o=i.parameters({inherit:!0,matchingKeys:t});return Bt.equals(o,Bt.values(o,t),this.params)}},e.prototype.href=function(e,t,n){var r={lossy:!0,inherit:!0,absolute:!1,relative:this.$current};n=De(n,r),t||={};var i=this.router.stateRegistry.matcher.find(e,n.relative);if(!C(i))return null;n.inherit&&(t=this.params.$inherit(t,this.$current,i));var a=i&&n.lossy?i.navigable:i;return!a||a.url===void 0||a.url===null?null:this.router.urlRouter.href(a.url,t,{absolute:n.absolute})},e.prototype.defaultErrorHandler=function(e){return this._defaultErrorHandler=e||this._defaultErrorHandler},e.prototype.get=function(e,t){var n=this.router.stateRegistry;return arguments.length===0?n.get():n.get(e,t||this.$current)},e.prototype.lazyLoad=function(e,t){var n=this.get(e);if(!n||!n.lazyLoad)throw Error(`Can not lazy load `+e);var r=this.getCurrentPath(),i=Kt.makeTargetState(this.router.stateRegistry,r);return t||=this.router.transitionService.create(r,i),Mr(t,n)},e}(),Vr=function(e,t){var n=t[0],r=t[1];return e.hasOwnProperty(n)?D(e[n])?e[n].push(r):e[n]=[e[n],r]:e[n]=r,e},Hr=function(e){return e.split(`&`).filter(ge).map(ht).reduce(Vr,{})};function Ur(e){var t=function(e){return e||``},n=pt(e).map(t),r=n[0],i=n[1],a=mt(r).map(t);return{path:a[0],search:a[1],hash:i,url:e}}var Wr=function(e){var t=e.path(),n=e.search(),r=e.hash(),i=Object.keys(n).map(function(e){var t=n[e];return(D(t)?t:[t]).map(function(t){return e+`=`+t})}).reduce(A,[]).join(`&`);return t+(i?`?`+i:``)+(r?`#`+r:``)},Gr=function(){function e(e,t){var n=this;this.fireAfterUpdate=t,this._listeners=[],this._listener=function(e){return n._listeners.forEach(function(t){return t(e)})},this.hash=function(){return Ur(n._get()).hash},this.path=function(){return Ur(n._get()).path},this.search=function(){return Hr(Ur(n._get()).search)},this._location=ue.location,this._history=ue.history}return e.prototype.url=function(e,t){return t===void 0&&(t=!0),C(e)&&e!==this._get()&&(this._set(null,null,e,t),this.fireAfterUpdate&&this._listeners.forEach(function(t){return t({url:e})})),Wr(this)},e.prototype.onChange=function(e){var t=this;return this._listeners.push(e),function(){return Se(t._listeners,e)}},e.prototype.dispose=function(e){Ee(this._listeners)},e}(),Kr=(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();(function(e){Kr(t,e);function t(t){var n=e.call(this,t,!1)||this;return ue.addEventListener(`hashchange`,n._listener,!1),n}return t.prototype._get=function(){return gt(this._location.hash)},t.prototype._set=function(e,t,n,r){this._location.hash=n},t.prototype.dispose=function(t){e.prototype.dispose.call(this,t),ue.removeEventListener(`hashchange`,this._listener)},t})(Gr);var qr=(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();(function(e){qr(t,e);function t(t){return e.call(this,t,!0)||this}return t.prototype._get=function(){return this._url},t.prototype._set=function(e,t,n,r){this._url=n},t})(Gr);var Jr=(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();(function(e){Jr(t,e);function t(t){var n=e.call(this,t,!0)||this;return n._config=t.urlService.config,ue.addEventListener(`popstate`,n._listener,!1),n}return t.prototype._getBasePrefix=function(){return ft(this._config.baseHref())},t.prototype._get=function(){var e=this._location,t=e.pathname,n=e.hash,r=e.search;r=mt(r)[1],n=pt(n)[1];var i=this._getBasePrefix(),a=t===this._config.baseHref(),o=t.substr(0,i.length)===i;return t=a?`/`:o?t.substring(i.length):t,t+(r?`?`+r:``)+(n?`#`+n:``)},t.prototype._set=function(e,t,n,r){var i=this._getBasePrefix(),a=n&&n[0]!==`/`?`/`:``,o=n===``||n===`/`?this._config.baseHref():i+a+n;r?this._history.replaceState(e,t,o):this._history.pushState(e,t,o)},t.prototype.dispose=function(t){e.prototype.dispose.call(this,t),ue.removeEventListener(`popstate`,this._listener)},t})(Gr),function(){function e(e,t){t===void 0&&(t=!1),this._isHtml5=t,this._baseHref=void 0,this._hashPrefix=``}return e.prototype.port=function(){return location.port?Number(location.port):this.protocol()===`https`?443:80},e.prototype.protocol=function(){return location.protocol.replace(/:/g,``)},e.prototype.host=function(){return location.hostname},e.prototype.html5Mode=function(){return this._isHtml5},e.prototype.hashPrefix=function(e){return C(e)?this._hashPrefix=e:this._hashPrefix},e.prototype.baseHref=function(e){return C(e)&&(this._baseHref=e),S(this._baseHref)&&(this._baseHref=this.getBaseHref()),this._baseHref},e.prototype.getBaseHref=function(){var e=document.getElementsByTagName(`base`)[0];return e&&e.href?e.href.replace(/^([^/:]*:)?\/\/[^/]*/,``):this._isHtml5?`/`:location.pathname||`/`},e.prototype.dispose=function(){},e}(),function(){function e(){}return e.prototype.dispose=function(e){},e}();function Yr(){var e=null;return function(t,n){return e||=O.$injector.get(`$templateFactory`),[new $r(t,n,e)]}}var Xr=function(e,t){return e.reduce(function(e,n){return e||C(t[n])},!1)};function Zr(e){if(!e.parent)return{};var t=[`templateProvider`,`templateUrl`,`template`,`notify`,`async`],n=[`controller`,`controllerProvider`,`controllerAs`,`resolveAs`],r=[`component`,`bindings`,`componentProvider`],i=t.concat(n),a=r.concat(i);if(C(e.views)&&Xr(a,e))throw Error(`State '`+e.name+`' has a 'views' object. It cannot also have "view properties" at the state level.  Move the following properties into a view (in the 'views' object): `+(` `+a.filter(function(t){return C(e[t])}).join(`, `)));var o={};return me(e.views||{$default:Ae(e,a)},function(t,n){if(n||=`$default`,T(t)&&(t={component:t}),t=k({},t),Xr(r,t)&&Xr(i,t))throw Error(`Cannot combine: `+r.join(`|`)+` with: `+i.join(`|`)+` in stateview: '`+n+`@`+e.name+`'`);t.resolveAs=t.resolveAs||`$resolve`,t.$type=`ng1`,t.$context=e,t.$name=n;var a=zn.normalizeUIViewTarget(t.$context,t.$name);t.$uiViewName=a.uiViewName,t.$uiViewContextAnchor=a.uiViewContextAnchor,o[n]=t}),o}var Qr=0,$r=function(){function e(e,t,n){var r=this;this.path=e,this.viewDecl=t,this.factory=n,this.$id=Qr++,this.loaded=!1,this.getTemplate=function(e,t){return r.component?r.factory.makeComponentTemplate(e,t,r.component,r.viewDecl.bindings):r.template}}return e.prototype.load=function(){var e=this,t=O.$q,n=new Qt(this.path),r=this.path.reduce(function(e,t){return k(e,t.paramValues)},{}),i={template:t.when(this.factory.fromConfig(this.viewDecl,r,n)),controller:t.when(this.getController(n))};return t.all(i).then(function(t){return N.traceViewServiceEvent(`Loaded`,e),e.controller=t.controller,k(e,t.template),e})},e.prototype.getController=function(e){var t=this.viewDecl.controllerProvider;if(!ae(t))return this.viewDecl.controller;var n=O.$injector.annotate(t);return new P(``,D(t)?qe(t):t,n).get(e)},e}(),ei=function(){function e(){var e=this;this._useHttp=i.version.minor<3,this.$get=[`$http`,`$templateCache`,`$injector`,function(t,n,r){return e.$templateRequest=r.has&&r.has(`$templateRequest`)&&r.get(`$templateRequest`),e.$http=t,e.$templateCache=n,e}]}return e.prototype.useHttpService=function(e){this._useHttp=e},e.prototype.fromConfig=function(e,t,n){var r=`<ui-view></ui-view>`,i=function(e){return O.$q.when(e).then(function(e){return{template:e}})},a=function(e){return O.$q.when(e).then(function(e){return{component:e}})};return C(e.template)?i(this.fromString(e.template,t)):C(e.templateUrl)?i(this.fromUrl(e.templateUrl,t)):C(e.templateProvider)?i(this.fromProvider(e.templateProvider,t,n)):C(e.component)?a(e.component):C(e.componentProvider)?a(this.fromComponentProvider(e.componentProvider,t,n)):i(r)},e.prototype.fromString=function(e,t){return w(e)?e(t):e},e.prototype.fromUrl=function(e,t){return w(e)&&(e=e(t)),e==null?null:this._useHttp?this.$http.get(e,{cache:this.$templateCache,headers:{Accept:`text/html`}}).then(function(e){return e.data}):this.$templateRequest(e)},e.prototype.fromProvider=function(e,t,n){var r=O.$injector.annotate(e);return new P(``,D(e)?qe(e):e,r).get(n)},e.prototype.fromComponentProvider=function(e,t,n){var r=O.$injector.annotate(e);return new P(``,D(e)?qe(e):e,r).get(n)},e.prototype.makeComponentTemplate=function(e,t,n,r){r||={};var a=i.version.minor>=3?`::`:``,o=function(e){var t=st(e);return/^(x|data)-/.exec(t)?`x-`+t:t},s=ti(n).map(function(n){var i=n.name,s=n.type,c=o(i);if(e.attr(c)&&!r[i])return c+`='`+e.attr(c)+`'`;var l=r[i]||i;if(s===`@`)return c+`='{{`+a+`$resolve.`+l+`}}'`;if(s===`&`){var u=t.getResolvable(l),d=u&&u.data,f=d&&O.$injector.annotate(d)||[],p=D(d)?`[`+(d.length-1)+`]`:``;return c+`='$resolve.`+l+p+`(`+f.join(`,`)+`)'`}return c+`='`+a+`$resolve.`+l+`'`}).join(` `),c=o(n);return`<`+c+` `+s+`></`+c+`>`},e}();function ti(e){var t=O.$injector.get(e+`Directive`);if(!t||!t.length)throw Error(`Unable to find component named '`+e+`'`);return t.map(ni).reduce(A,[])}var ni=function(e){return E(e.bindToController)?ri(e.bindToController):ri(e.scope)},ri=function(e){return Object.keys(e||{}).map(function(t){return[t,/^([=<@&])[?]?(.*)/.exec(e[t])]}).filter(function(e){return C(e)&&D(e[1])}).map(function(e){return{name:e[1][2]||e[0],type:e[1][1]}})},ii=function(){function e(t,n){this.stateRegistry=t,this.stateService=n,ve(v(e.prototype),this,v(this))}return e.prototype.decorator=function(e,t){return this.stateRegistry.decorator(e,t)||this},e.prototype.state=function(e,t){return E(e)?t=e:t.name=e,this.stateRegistry.register(t),this},e.prototype.onInvalid=function(e){return this.stateService.onInvalid(e)},e}(),ai=function(e){return function(t){var n=t[e],r=e===`onExit`?`from`:`to`;function i(e,t){var i=k(yi(new Qt(e.treeChanges(r)).subContext(t.$$state())),{$state$:t,$transition$:e});return O.$injector.invoke(n,this,i)}return n?i:void 0}},oi=function(){function e(e){this._urlListeners=[],this.$locationProvider=e;var t=v(e);ve(t,this,t,[`hashPrefix`])}return e.monkeyPatchPathParameterType=function(e){var t=e.urlMatcherFactory.type(`path`);t.encode=function(e){return e==null?e:e.toString().replace(/(~|\/)/g,function(e){return{"~":`~~`,"/":`~2F`}[e]})},t.decode=function(e){return e==null?e:e.toString().replace(/(~~|~2F)/g,function(e){return{"~~":`~`,"~2F":`/`}[e]})}},e.prototype.dispose=function(){},e.prototype.onChange=function(e){var t=this;return this._urlListeners.push(e),function(){return Se(t._urlListeners)(e)}},e.prototype.html5Mode=function(){var e=this.$locationProvider.html5Mode();return e=E(e)?e.enabled:e,e&&this.$sniffer.history},e.prototype.baseHref=function(){return this._baseHref||=this.$browser.baseHref()||this.$window.location.pathname},e.prototype.url=function(e,t,n){return t===void 0&&(t=!1),C(e)&&this.$location.url(e),t&&this.$location.replace(),n&&this.$location.state(n),this.$location.url()},e.prototype._runtimeServices=function(e,t,n,r,i){var a=this;this.$location=t,this.$sniffer=n,this.$browser=r,this.$window=i,e.$on(`$locationChangeSuccess`,function(e){return a._urlListeners.forEach(function(t){return t(e)})});var o=v(t);ve(o,this,o,[`replace`,`path`,`search`,`hash`]),ve(o,this,o,[`port`,`protocol`,`host`])},e}(),si=function(){function e(e){this.router=e}return e.injectableHandler=function(e,t){return function(n){return O.$injector.invoke(t,null,{$match:n,$stateParams:e.globals.params})}},e.prototype.$get=function(){var e=this.router.urlService;return this.router.urlRouter.update(!0),e.interceptDeferred||e.listen(),this.router.urlRouter},e.prototype.rule=function(e){var t=this;if(!w(e))throw Error(`'rule' must be a function`);var n=new In(function(){return e(O.$injector,t.router.locationService)},ge);return this.router.urlService.rules.rule(n),this},e.prototype.otherwise=function(e){var t=this,n=this.router.urlService.rules;if(T(e))n.otherwise(e);else if(w(e))n.otherwise(function(){return e(O.$injector,t.router.locationService)});else throw Error(`'rule' must be a string or function`);return this},e.prototype.when=function(t,n){return(D(n)||w(n))&&(n=e.injectableHandler(this.router,n)),this.router.urlService.rules.when(t,n),this},e.prototype.deferIntercept=function(e){this.router.urlService.deferIntercept(e)},e}();i.module(`ui.router.angular1`,[]);var ci=i.module(`ui.router.init`,[`ng`]),li=i.module(`ui.router.util`,[`ui.router.init`]),ui=i.module(`ui.router.router`,[`ui.router.util`]),di=i.module(`ui.router.state`,[`ui.router.router`,`ui.router.util`,`ui.router.angular1`]),fi=i.module(`ui.router`,[`ui.router.init`,`ui.router.state`,`ui.router.angular1`]);i.module(`ui.router.compat`,[`ui.router`]);var F=null;pi.$inject=[`$locationProvider`];function pi(e){F=this.router=new tr,F.stateProvider=new ii(F.stateRegistry,F.stateService),F.stateRegistry.decorator(`views`,Zr),F.stateRegistry.decorator(`onExit`,ai(`onExit`)),F.stateRegistry.decorator(`onRetain`,ai(`onRetain`)),F.stateRegistry.decorator(`onEnter`,ai(`onEnter`)),F.viewService._pluginapi._viewConfigFactory(`ng1`,Yr()),F.urlService.config._decodeParams=!1;var t=F.locationService=F.locationConfig=new oi(e);oi.monkeyPatchPathParameterType(F),F.router=F,F.$get=n,n.$inject=[`$location`,`$browser`,`$window`,`$sniffer`,`$rootScope`,`$http`,`$templateCache`];function n(e,n,r,i,a,o,s){return t._runtimeServices(a,e,i,n,r),delete F.router,delete F.$get,F}return F}var mi=function(e){return[`$uiRouterProvider`,function(t){var n=t.router[e];return n.$get=function(){return n},n}]};hi.$inject=[`$injector`,`$q`,`$uiRouter`];function hi(e,t,n){if(O.$injector=e,O.$q=t,!Object.prototype.hasOwnProperty.call(e,`strictDi`))try{e.invoke(function(e){})}catch(t){e.strictDi=!!/strict mode/.exec(t&&t.toString())}n.stateRegistry.get().map(function(e){return e.$$state().resolvables}).reduce(A,[]).filter(function(e){return e.deps===`deferred`}).forEach(function(t){return t.deps=e.annotate(t.resolveFn,e.strictDi)})}var gi=function(e){return e.urlRouterProvider=new si(e)},_i=function(){return k(F.stateProvider,{$get:function(){return F.stateService}})};vi.$inject=[`$rootScope`];function vi(e){e.$watch(function(){N.approximateDigests++})}ci.provider(`$uiRouter`,pi),ui.provider(`$urlRouter`,[`$uiRouterProvider`,gi]),li.provider(`$urlService`,mi(`urlService`)),li.provider(`$urlMatcherFactory`,[`$uiRouterProvider`,function(){return F.urlMatcherFactory}]),li.provider(`$templateFactory`,function(){return new ei}),di.provider(`$stateRegistry`,mi(`stateRegistry`)),di.provider(`$uiRouterGlobals`,mi(`globals`)),di.provider(`$transitions`,mi(`transitionService`)),di.provider(`$state`,[`$uiRouterProvider`,_i]),di.factory(`$stateParams`,[`$uiRouter`,function(e){return e.globals.params}]),fi.factory(`$view`,function(){return F.viewService}),fi.service(`$trace`,function(){return N}),fi.run(vi),li.run([`$urlMatcherFactory`,function(e){}]),di.run([`$state`,function(e){}]),ui.run([`$urlRouter`,function(e){}]),ci.run(hi);var yi=function(e){return e.getTokens().filter(T).map(function(t){var n=e.getResolvable(t);return[t,e.getPolicy(n).async===`NOWAIT`?n.promise:n.data]}).reduce(Ke,{})};function bi(e){var t=e.match(/^\s*({[^}]*})\s*$/);t&&(e=`(`+t[1]+`)`);var n=e.replace(/\n/g,` `).match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/);if(!n||n.length!==4)throw Error(`Invalid state ref '`+e+`'`);return{state:n[1]||null,paramExpr:n[3]||null}}function xi(e){var t=e.parent().inheritedData(`$uiView`),n=d(`$cfg.path`)(t);return n?qe(n).state.name:void 0}function Si(e,t,n){var r=n.uiState||e.current.name,i=k(Ti(t,e),n.uiStateOpts||{}),a=e.href(r,n.uiStateParams,i);return{uiState:r,uiStateParams:n.uiStateParams,uiStateOpts:i,href:a}}function Ci(e){var t=Object.prototype.toString.call(e.prop(`href`))===`[object SVGAnimatedString]`,n=e[0].nodeName===`FORM`;return{attr:n?`action`:t?`xlink:href`:`href`,isAnchor:e.prop(`tagName`).toUpperCase()===`A`,clickable:!n}}function wi(e,t,n,r,i){return function(a){var o=a.which||a.button,s=i();if(!(o>1||a.ctrlKey||a.metaKey||a.shiftKey||a.altKey||e.attr(`target`))){var c=n(function(){e.attr(`disabled`)||t.go(s.uiState,s.uiStateParams,s.uiStateOpts)});a.preventDefault();var l=r.isAnchor&&!s.href?1:0;a.preventDefault=function(){l--<=0&&n.cancel(c)}}}}function Ti(e,t){return{relative:xi(e)||t.$current,inherit:!0,source:`sref`}}function Ei(e,t,n,r){var i;r&&(i=r.events),D(i)||(i=[`click`]);for(var a=e.on?`on`:`bind`,o=0,s=i;o<s.length;o++){var c=s[o];e[a](c,n)}t.$on(`$destroy`,function(){for(var t=e.off?`off`:`unbind`,r=0,a=i;r<a.length;r++){var o=a[r];e[t](o,n)}})}var Di=[`$uiRouter`,`$timeout`,function(e,t){var n=e.stateService;return{restrict:`A`,require:[`?^uiSrefActive`,`?^uiSrefActiveEq`],link:function(r,i,a,o){var s=Ci(i),c=o[1]||o[0],l=null,u={},d=function(){return Si(n,i,u)},f=bi(a.uiSref);u.uiState=f.state,u.uiStateOpts=a.uiSrefOpts?r.$eval(a.uiSrefOpts):{};function p(){var e=d();l&&l(),c&&(l=c.$$addStateInfo(e.uiState,e.uiStateParams)),e.href!=null&&a.$set(s.attr,e.href)}f.paramExpr&&(r.$watch(f.paramExpr,function(e){u.uiStateParams=k({},e),p()},!0),u.uiStateParams=k({},r.$eval(f.paramExpr))),p(),r.$on(`$destroy`,e.stateRegistry.onStatesChanged(p)),r.$on(`$destroy`,e.transitionService.onSuccess({},p)),s.clickable&&Ei(i,r,wi(i,n,t,s,d),u.uiStateOpts)}}}],Oi=[`$uiRouter`,`$timeout`,function(e,t){var n=e.stateService;return{restrict:`A`,require:[`?^uiSrefActive`,`?^uiSrefActiveEq`],link:function(r,i,a,o){var s=Ci(i),c=o[1]||o[0],l=null,u,d={},f=function(){return Si(n,i,d)},p=[`uiState`,`uiStateParams`,`uiStateOpts`],m=p.reduce(function(e,t){return e[t]=_e,e},{});function h(){var e=f();l&&l(),c&&(l=c.$$addStateInfo(e.uiState,e.uiStateParams)),e.href!=null&&a.$set(s.attr,e.href)}p.forEach(function(e){d[e]=a[e]?r.$eval(a[e]):null,a.$observe(e,function(t){m[e](),m[e]=r.$watch(t,function(t){d[e]=t,h()},!0)})}),h(),r.$on(`$destroy`,e.stateRegistry.onStatesChanged(h)),r.$on(`$destroy`,e.transitionService.onSuccess({},h)),s.clickable&&(u=wi(i,n,t,s,f),Ei(i,r,u,d.uiStateOpts))}}}],ki=[`$state`,`$stateParams`,`$interpolate`,`$uiRouter`,function(e,t,n,r){return{restrict:`A`,controller:[`$scope`,`$element`,`$attrs`,function(t,i,a){var o=[],s=n(a.uiSrefActiveEq||``,!1)(t),c;try{c=t.$eval(a.uiSrefActive)}catch{}c||=n(a.uiSrefActive||``,!1)(t),f(c),this.$$addStateInfo=function(e,t){if(!(E(c)&&o.length>0)){var n=p(e,t,c);return m(),n}};function l(e){e.promise.then(m,_e)}t.$on(`$destroy`,u()),r.globals.transition&&l(r.globals.transition);function u(){var e=r.stateRegistry.onStatesChanged(d),n=r.transitionService.onStart({},l),i=t.$on(`$stateChangeSuccess`,m);return function(){e(),n(),i()}}function d(){f(c)}function f(e){E(e)&&(o=[],me(e,function(e,n){var r=function(e,n){var r=bi(e);p(r.state,t.$eval(r.paramExpr),n)};T(e)?r(e,n):D(e)&&me(e,function(e){r(e,n)})}))}function p(t,n,r){var a={state:e.get(t,xi(i))||{name:t},params:n,activeClass:r};return o.push(a),function(){Se(o)(a)}}function m(){var n=function(e){return e.split(/\s/).filter(ge)},r=function(e){return e.map(function(e){return e.activeClass}).map(n).reduce(A,[])},a=r(o).concat(n(s)).reduce(Ve,[]),c=r(o.filter(function(t){return e.includes(t.state.name,t.params)})),l=o.filter(function(t){return e.is(t.state.name,t.params)}).length?n(s):[],u=c.concat(l).reduce(Ve,[]),d=a.filter(function(e){return!be(u,e)});t.$evalAsync(function(){u.forEach(function(e){return i.addClass(e)}),d.forEach(function(e){return i.removeClass(e)})})}m()}]}}];i.module(`ui.router.state`).directive(`uiSref`,Di).directive(`uiSrefActive`,ki).directive(`uiSrefActiveEq`,ki).directive(`uiState`,Oi),Ai.$inject=[`$state`];function Ai(e){var t=function(t,n,r){return e.is(t,n,r)};return t.$stateful=!0,t}ji.$inject=[`$state`];function ji(e){var t=function(t,n,r){return e.includes(t,n,r)};return t.$stateful=!0,t}i.module(`ui.router.state`).filter(`isState`,Ai).filter(`includedByState`,ji);var Mi=[`$view`,`$animate`,`$uiViewScroll`,`$interpolate`,`$q`,function(e,t,n,r,a){function o(){return{enter:function(e,n,r){i.version.minor>2?t.enter(e,null,n).then(r):t.enter(e,null,n,r)},leave:function(e,n){i.version.minor>2?t.leave(e).then(n):t.leave(e,n)}}}function s(e,t){return e===t}var c={$cfg:{viewDecl:{$context:e._pluginapi._rootViewContext()}},$uiView:{}},l={count:0,restrict:`ECA`,terminal:!0,priority:400,transclude:`element`,compile:function(t,i,u){return function(t,i,f){var p=f.onload||``,m=f.autoscroll,h=o(),g=i.inheritedData(`$uiView`)||c,_=r(f.uiView||f.name||``)(t)||`$default`,v,y,b,x,S={$type:`ng1`,id:l.count++,name:_,fqn:g.$uiView.fqn?g.$uiView.fqn+`.`+_:_,config:null,configUpdated:ee,get creationContext(){var e=d(`$cfg.viewDecl.$context`)(g),t=d(`$uiView.creationContext`)(g);return e||t}};N.traceUIViewEvent(`Linking`,S);function ee(e){e&&!(e instanceof $r)||s(x,e)||(N.traceUIViewConfigUpdated(S,e&&e.viewDecl&&e.viewDecl.$context),x=e,ne(e))}i.data(`$uiView`,{$uiView:S}),ne();var te=e.registerUIView(S);t.$on(`$destroy`,function(){N.traceUIViewEvent(`Destroying/Unregistering`,S),te()});function w(){if(v&&=(N.traceUIViewEvent(`Removing (previous) el`,v.data(`$uiView`)),v.remove(),null),b&&=(N.traceUIViewEvent(`Destroying scope`,S),b.$destroy(),null),y){var e=y.data(`$uiViewAnim`);N.traceUIViewEvent(`Animate out`,e),h.leave(y,function(){e.$$animLeave.resolve(),v=null}),v=y,y=null}}function ne(e){var r=t.$new(),o=a.defer(),s=a.defer(),c={$cfg:e,$uiView:S},l={$animEnter:o.promise,$animLeave:s.promise,$$animLeave:s};r.$emit(`$viewContentLoading`,_),y=u(r,function(e){e.data(`$uiViewAnim`,l),e.data(`$uiView`,c),h.enter(e,i,function(){o.resolve(),b&&b.$emit(`$viewContentAnimationEnded`),(C(m)&&!m||t.$eval(m))&&n(e)}),w()}),b=r,b.$emit(`$viewContentLoaded`,e||x),b.$eval(p)}}}};return l}];Ni.$inject=[`$compile`,`$controller`,`$transitions`,`$view`,`$q`];function Ni(e,t,n,r,a){var o=d(`viewDecl.controllerAs`),s=d(`viewDecl.resolveAs`);return{restrict:`ECA`,priority:-400,compile:function(r){var c=r.html();return r.empty(),function(r,l){var u=l.data(`$uiView`);if(!u){l.html(c),e(l.contents())(r);return}var d=u.$cfg||{viewDecl:{},getTemplate:_e},f=d.path&&new Qt(d.path);l.html(d.getTemplate(l,f)||c),N.traceUIViewFill(u.$uiView,l.html());var p=e(l.contents()),m=d.controller,h=o(d),g=s(d),_=f&&yi(f);if(r[g]=_,m){var v=t(m,k({},_,{$scope:r,$element:l}));h&&(r[h]=v,r[h][g]=_),l.data(`$ngControllerController`,v),l.children().data(`$ngControllerController`,v),Ii(a,n,v,r,d)}if(T(d.component))var y=st(d.component),b=RegExp(`^(x-|data-)?`+y+`$`,`i`),x=r.$watch(function(){var e=[].slice.call(l[0].children).filter(function(e){return e&&e.tagName&&b.exec(e.tagName)});return e&&i.element(e).data(`$`+d.component+`Controller`)},function(e){e&&(Ii(a,n,e,r,d),x())});p(r)}}}}var Pi=typeof i.module(`ui.router`).component==`function`,Fi=0;function Ii(e,t,n,r,i){w(n.$onInit)&&!((i.viewDecl.component||i.viewDecl.componentProvider)&&Pi)&&n.$onInit();var a=qe(i.path).state.self,o={bind:n};if(w(n.uiOnParamsChanged)){var s=new Qt(i.path).getResolvable(`$transition$`).data;r.$on(`$destroy`,t.onSuccess({},function(e){if(e!==s&&e.exiting().indexOf(a)===-1){var t=e.params(`to`),r=e.params(`from`),i=function(e){return e.paramSchema},o=e.treeChanges(`to`).map(i).reduce(A,[]),c=e.treeChanges(`from`).map(i).reduce(A,[]),l=o.filter(function(e){var n=c.indexOf(e);return n===-1||!c[n].type.equals(t[e.id],r[e.id])});if(l.length){var u=l.map(function(e){return e.id}),d=Me(t,function(e,t){return u.indexOf(t)!==-1});n.uiOnParamsChanged(d,e)}}},o))}if(w(n.uiCanExit)){var c=Fi++,l=`_uiCanExitIds`,u=function(e){return!!e&&(e[l]&&e[l][c]===!0||u(e.redirectedFrom()))},d=function(t){var r,i=t[l]=t[l]||{};return u(t)||(r=e.when(n.uiCanExit(t)),r.then(function(e){return i[c]=e!==!1})),r},f={exiting:a.name};r.$on(`$destroy`,t.onBefore(f,d,o))}}i.module(`ui.router.state`).directive(`uiView`,Mi),i.module(`ui.router.state`).directive(`uiView`,Ni);function Li(){var e=!1;this.useAnchorScroll=function(){e=!0},this.$get=[`$anchorScroll`,`$timeout`,function(t,n){return e?t:function(e){return n(function(){e[0].scrollIntoView()},0,!1)}}]}i.module(`ui.router.state`).provider(`$uiViewScroll`,Li);var Ri=`ui.router`,zi=function(e,t){return zi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},zi(e,t)};function Bi(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Class extends value `+String(t)+` is not a constructor or null`);zi(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Vi(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}function Hi(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function Ui(e){var t=typeof Symbol==`function`&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length==`number`)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?`Object is not iterable.`:`Symbol.iterator is not defined.`)}function Wi(e,t){var n=typeof Symbol==`function`&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],o;try{for(;(t===void 0||t-->0)&&!(i=r.next()).done;)a.push(i.value)}catch(e){o={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a}function Gi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function Ki(e){return this instanceof Ki?(this.v=e,this):new Ki(e)}function qi(e,t,n){if(!Symbol.asyncIterator)throw TypeError(`Symbol.asyncIterator is not defined.`);var r=n.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator==`function`?AsyncIterator:Object).prototype),s(`next`),s(`throw`),s(`return`,o),i[Symbol.asyncIterator]=function(){return this},i;function o(e){return function(t){return Promise.resolve(t).then(e,d)}}function s(e,t){r[e]&&(i[e]=function(t){return new Promise(function(n,r){a.push([e,t,n,r])>1||c(e,t)})},t&&(i[e]=t(i[e])))}function c(e,t){try{l(r[e](t))}catch(e){f(a[0][3],e)}}function l(e){e.value instanceof Ki?Promise.resolve(e.value.v).then(u,d):f(a[0][2],e)}function u(e){c(`next`,e)}function d(e){c(`throw`,e)}function f(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function Ji(e){if(!Symbol.asyncIterator)throw TypeError(`Symbol.asyncIterator is not defined.`);var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof Ui==`function`?Ui(e):e[Symbol.iterator](),n={},r(`next`),r(`throw`),r(`return`),n[Symbol.asyncIterator]=function(){return this},n);function r(t){n[t]=e[t]&&function(n){return new Promise(function(r,a){n=e[t](n),i(r,a,n.done,n.value)})}}function i(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}}function I(e){return typeof e==`function`}function Yi(e){var t=e(function(e){Error.call(e),e.stack=Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Xi=Yi(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(e,t){return t+1+`) `+e.toString()}).join(`
  `):``,this.name=`UnsubscriptionError`,this.errors=t}});function Zi(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Qi=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var e,t,n,r,i;if(!this.closed){this.closed=!0;var a=this._parentage;if(a){if(this._parentage=null,Array.isArray(a))try{for(var o=Ui(a),s=o.next();!s.done;s=o.next())s.value.remove(this)}catch(t){e={error:t}}finally{try{s&&!s.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}else a.remove(this)}var c=this.initialTeardown;if(I(c))try{c()}catch(e){i=e instanceof Xi?e.errors:[e]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var u=Ui(l),d=u.next();!d.done;d=u.next()){var f=d.value;try{ta(f)}catch(e){i??=[],e instanceof Xi?i=Gi(Gi([],Wi(i)),Wi(e.errors)):i.push(e)}}}catch(e){n={error:e}}finally{try{d&&!d.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}}if(i)throw new Xi(i)}},e.prototype.add=function(t){if(t&&t!==this){if(this.closed)ta(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=this._finalizers??[]).push(t)}}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Zi(t,e)},e.prototype.remove=function(t){var n=this._finalizers;n&&Zi(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e}(),$i=Qi.EMPTY;function ea(e){return e instanceof Qi||e&&`closed`in e&&I(e.remove)&&I(e.add)&&I(e.unsubscribe)}function ta(e){I(e)?e():e.unsubscribe()}var na={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},ra={setTimeout:function(e,t){var n=[...arguments].slice(2),r=ra.delegate;return r?.setTimeout?r.setTimeout.apply(r,Gi([e,t],Wi(n))):setTimeout.apply(void 0,Gi([e,t],Wi(n)))},clearTimeout:function(e){return(ra.delegate?.clearTimeout||clearTimeout)(e)},delegate:void 0};function ia(e){ra.setTimeout(function(){var t=na.onUnhandledError;if(t)t(e);else throw e})}function aa(){}var oa=(function(){return la(`C`,void 0,void 0)})();function sa(e){return la(`E`,void 0,e)}function ca(e){return la(`N`,e,void 0)}function la(e,t,n){return{kind:e,value:t,error:n}}var ua=null;function da(e){if(na.useDeprecatedSynchronousErrorHandling){var t=!ua;if(t&&(ua={errorThrown:!1,error:null}),e(),t){var n=ua,r=n.errorThrown,i=n.error;if(ua=null,r)throw i}}else e()}function fa(e){na.useDeprecatedSynchronousErrorHandling&&ua&&(ua.errorThrown=!0,ua.error=e)}var pa=function(e){Bi(t,e);function t(t){var n=e.call(this)||this;return n.isStopped=!1,t?(n.destination=t,ea(t)&&t.add(n)):n.destination=xa,n}return t.create=function(e,t,n){return new _a(e,t,n)},t.prototype.next=function(e){this.isStopped?ba(ca(e),this):this._next(e)},t.prototype.error=function(e){this.isStopped?ba(sa(e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?ba(oa,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(Qi),ma=Function.prototype.bind;function ha(e,t){return ma.call(e,t)}var ga=function(){function e(e){this.partialObserver=e}return e.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(e){va(e)}},e.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(e){va(e)}else va(e)},e.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(e){va(e)}},e}(),_a=function(e){Bi(t,e);function t(t,n,r){var i=e.call(this)||this,a;if(I(t)||!t)a={next:t??void 0,error:n??void 0,complete:r??void 0};else{var o;i&&na.useDeprecatedNextContext?(o=Object.create(t),o.unsubscribe=function(){return i.unsubscribe()},a={next:t.next&&ha(t.next,o),error:t.error&&ha(t.error,o),complete:t.complete&&ha(t.complete,o)}):a=t}return i.destination=new ga(a),i}return t}(pa);function va(e){na.useDeprecatedSynchronousErrorHandling?fa(e):ia(e)}function ya(e){throw e}function ba(e,t){var n=na.onStoppedNotification;n&&ra.setTimeout(function(){return n(e,t)})}var xa={closed:!0,next:aa,error:ya,complete:aa},Sa=(function(){return typeof Symbol==`function`&&Symbol.observable||`@@observable`})();function Ca(e){return e}function wa(e){return e.length===0?Ca:e.length===1?e[0]:function(t){return e.reduce(function(e,t){return t(e)},t)}}var L=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var r=this,i=Da(e)?e:new _a(e,t,n);return da(function(){var e=r,t=e.operator,n=e.source;i.add(t?t.call(i,n):n?r._subscribe(i):r._trySubscribe(i))}),i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return t=Ta(t),new t(function(t,r){var i=new _a({next:function(t){try{e(t)}catch(e){r(e),i.unsubscribe()}},error:r,complete:t});n.subscribe(i)})},e.prototype._subscribe=function(e){return this.source?.subscribe(e)},e.prototype[Sa]=function(){return this},e.prototype.pipe=function(){return wa([...arguments])(this)},e.prototype.toPromise=function(e){var t=this;return e=Ta(e),new e(function(e,n){var r;t.subscribe(function(e){return r=e},function(e){return n(e)},function(){return e(r)})})},e.create=function(t){return new e(t)},e}();function Ta(e){return e??na.Promise??Promise}function Ea(e){return e&&I(e.next)&&I(e.error)&&I(e.complete)}function Da(e){return e&&e instanceof pa||Ea(e)&&ea(e)}function Oa(e){return I(e?.lift)}function ka(e){return function(t){if(Oa(t))return t.lift(function(t){try{return e(t,this)}catch(e){this.error(e)}});throw TypeError(`Unable to lift unknown Observable type`)}}function R(e,t,n,r,i){return new Aa(e,t,n,r,i)}var Aa=function(e){Bi(t,e);function t(t,n,r,i,a,o){var s=e.call(this,t)||this;return s.onFinalize=a,s.shouldUnsubscribe=o,s._next=n?function(e){try{n(e)}catch(e){t.error(e)}}:e.prototype._next,s._error=i?function(e){try{i(e)}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._error,s._complete=r?function(){try{r()}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._complete,s}return t.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;e.prototype.unsubscribe.call(this),!n&&((t=this.onFinalize)==null||t.call(this))}},t}(pa),ja=Yi(function(e){return function(){e(this),this.name=`ObjectUnsubscribedError`,this.message=`object unsubscribed`}}),z=function(e){Bi(t,e);function t(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return t.prototype.lift=function(e){var t=new Ma(this,this);return t.operator=e,t},t.prototype._throwIfClosed=function(){if(this.closed)throw new ja},t.prototype.next=function(e){var t=this;da(function(){var n,r;if(t._throwIfClosed(),!t.isStopped){t.currentObservers||=Array.from(t.observers);try{for(var i=Ui(t.currentObservers),a=i.next();!a.done;a=i.next())a.value.next(e)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}})},t.prototype.error=function(e){var t=this;da(function(){if(t._throwIfClosed(),!t.isStopped){t.hasError=t.isStopped=!0,t.thrownError=e;for(var n=t.observers;n.length;)n.shift().error(e)}})},t.prototype.complete=function(){var e=this;da(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var t=e.observers;t.length;)t.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){return this.observers?.length>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var t=this,n=this,r=n.hasError,i=n.isStopped,a=n.observers;return r||i?$i:(this.currentObservers=null,a.push(e),new Qi(function(){t.currentObservers=null,Zi(a,e)}))},t.prototype._checkFinalizedStatuses=function(e){var t=this,n=t.hasError,r=t.thrownError,i=t.isStopped;n?e.error(r):i&&e.complete()},t.prototype.asObservable=function(){var e=new L;return e.source=this,e},t.create=function(e,t){return new Ma(e,t)},t}(L),Ma=function(e){Bi(t,e);function t(t,n){var r=e.call(this)||this;return r.destination=t,r.source=n,r}return t.prototype.next=function(e){var t,n;(n=(t=this.destination)?.next)==null||n.call(t,e)},t.prototype.error=function(e){var t,n;(n=(t=this.destination)?.error)==null||n.call(t,e)},t.prototype.complete=function(){var e,t;(t=(e=this.destination)?.complete)==null||t.call(e)},t.prototype._subscribe=function(e){return this.source?.subscribe(e)??$i},t}(z),Na=function(e){Bi(t,e);function t(t){var n=e.call(this)||this;return n._value=t,n}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(t){var n=e.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},t.prototype.getValue=function(){var e=this,t=e.hasError,n=e.thrownError,r=e._value;if(t)throw n;return this._throwIfClosed(),r},t.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},t}(z),Pa={now:function(){return(Pa.delegate||Date).now()},delegate:void 0},Fa=function(e){Bi(t,e);function t(t,n,r){t===void 0&&(t=1/0),n===void 0&&(n=1/0),r===void 0&&(r=Pa);var i=e.call(this)||this;return i._bufferSize=t,i._windowTime=n,i._timestampProvider=r,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=n===1/0,i._bufferSize=Math.max(1,t),i._windowTime=Math.max(1,n),i}return t.prototype.next=function(t){var n=this,r=n.isStopped,i=n._buffer,a=n._infiniteTimeWindow,o=n._timestampProvider,s=n._windowTime;r||(i.push(t),!a&&i.push(o.now()+s)),this._trimBuffer(),e.prototype.next.call(this,t)},t.prototype._subscribe=function(e){this._throwIfClosed(),this._trimBuffer();for(var t=this._innerSubscribe(e),n=this,r=n._infiniteTimeWindow,i=n._buffer.slice(),a=0;a<i.length&&!e.closed;a+=r?1:2)e.next(i[a]);return this._checkFinalizedStatuses(e),t},t.prototype._trimBuffer=function(){var e=this,t=e._bufferSize,n=e._timestampProvider,r=e._buffer,i=e._infiniteTimeWindow,a=(i?1:2)*t;if(t<1/0&&a<r.length&&r.splice(0,r.length-a),!i){for(var o=n.now(),s=0,c=1;c<r.length&&r[c]<=o;c+=2)s=c;s&&r.splice(0,s+1)}},t}(z),Ia=function(e){Bi(t,e);function t(t,n){return e.call(this)||this}return t.prototype.schedule=function(e,t){return t===void 0&&(t=0),this},t}(Qi),La={setInterval:function(e,t){var n=[...arguments].slice(2),r=La.delegate;return r?.setInterval?r.setInterval.apply(r,Gi([e,t],Wi(n))):setInterval.apply(void 0,Gi([e,t],Wi(n)))},clearInterval:function(e){return(La.delegate?.clearInterval||clearInterval)(e)},delegate:void 0},Ra=function(e){Bi(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r.pending=!1,r}return t.prototype.schedule=function(e,t){if(t===void 0&&(t=0),this.closed)return this;this.state=e;var n=this.id,r=this.scheduler;return n!=null&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id??this.requestAsyncId(r,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return n===void 0&&(n=0),La.setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(n===void 0&&(n=0),n!=null&&this.delay===n&&this.pending===!1)return t;t!=null&&La.clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return Error(`executing a cancelled action`);this.pending=!1;var n=this._execute(e,t);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n=!1,r;try{this.work(e)}catch(e){n=!0,r=e||Error(`Scheduled action threw falsy error`)}if(n)return this.unsubscribe(),r},t.prototype.unsubscribe=function(){if(!this.closed){var t=this,n=t.id,r=t.scheduler,i=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Zi(i,this),n!=null&&(this.id=this.recycleAsyncId(r,n,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t}(Ia),za=function(){function e(t,n){n===void 0&&(n=e.now),this.schedulerActionCtor=t,this.now=n}return e.prototype.schedule=function(e,t,n){return t===void 0&&(t=0),new this.schedulerActionCtor(this,e).schedule(n,t)},e.now=Pa.now,e}(),Ba=new(function(e){Bi(t,e);function t(t,n){n===void 0&&(n=za.now);var r=e.call(this,t,n)||this;return r.actions=[],r._active=!1,r}return t.prototype.flush=function(e){var t=this.actions;if(this._active){t.push(e);return}var n;this._active=!0;do if(n=e.execute(e.state,e.delay))break;while(e=t.shift());if(this._active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}},t}(za))(Ra),Va=Ba,Ha=new L(function(e){return e.complete()});function Ua(e){return e&&I(e.schedule)}function Wa(e){return e[e.length-1]}function Ga(e){return I(Wa(e))?e.pop():void 0}function Ka(e){return Ua(Wa(e))?e.pop():void 0}function qa(e,t){return typeof Wa(e)==`number`?e.pop():t}var Ja=(function(e){return e&&typeof e.length==`number`&&typeof e!=`function`});function Ya(e){return I(e?.then)}function Xa(e){return I(e[Sa])}function Za(e){return Symbol.asyncIterator&&I(e?.[Symbol.asyncIterator])}function Qa(e){return TypeError(`You provided `+(typeof e==`object`&&e?`an invalid object`:`'`+e+`'`)+` where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function $a(){return typeof Symbol!=`function`||!Symbol.iterator?`@@iterator`:Symbol.iterator}var eo=$a();function to(e){return I(e?.[eo])}function no(e){return qi(this,arguments,function(){var t,n,r,i;return Hi(this,function(a){switch(a.label){case 0:t=e.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,Ki(t.read())];case 3:return n=a.sent(),r=n.value,i=n.done,i?[4,Ki(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,Ki(r)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function ro(e){return I(e?.getReader)}function io(e){if(e instanceof L)return e;if(e!=null){if(Xa(e))return ao(e);if(Ja(e))return oo(e);if(Ya(e))return so(e);if(Za(e))return lo(e);if(to(e))return co(e);if(ro(e))return uo(e)}throw Qa(e)}function ao(e){return new L(function(t){var n=e[Sa]();if(I(n.subscribe))return n.subscribe(t);throw TypeError(`Provided object does not correctly implement Symbol.observable`)})}function oo(e){return new L(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function so(e){return new L(function(t){e.then(function(e){t.closed||(t.next(e),t.complete())},function(e){return t.error(e)}).then(null,ia)})}function co(e){return new L(function(t){var n,r;try{for(var i=Ui(e),a=i.next();!a.done;a=i.next()){var o=a.value;if(t.next(o),t.closed)return}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()})}function lo(e){return new L(function(t){fo(e,t).catch(function(e){return t.error(e)})})}function uo(e){return lo(no(e))}function fo(e,t){var n,r,i,a;return Vi(this,void 0,void 0,function(){var o,s;return Hi(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=Ji(e),c.label=1;case 1:return[4,n.next()];case 2:if(r=c.sent(),r.done)return[3,4];if(o=r.value,t.next(o),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=c.sent(),i={error:s},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(a=n.return)?[4,a.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function po(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var a=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(a),!i)return a}function mo(e,t){return t===void 0&&(t=0),ka(function(n,r){n.subscribe(R(r,function(n){return po(r,e,function(){return r.next(n)},t)},function(){return po(r,e,function(){return r.complete()},t)},function(n){return po(r,e,function(){return r.error(n)},t)}))})}function ho(e,t){return t===void 0&&(t=0),ka(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function go(e,t){return io(e).pipe(ho(t),mo(t))}function _o(e,t){return io(e).pipe(ho(t),mo(t))}function vo(e,t){return new L(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function yo(e,t){return new L(function(n){var r;return po(n,t,function(){r=e[eo](),po(n,t,function(){var e,t,i;try{e=r.next(),t=e.value,i=e.done}catch(e){n.error(e);return}i?n.complete():n.next(t)},0,!0)}),function(){return I(r?.return)&&r.return()}})}function bo(e,t){if(!e)throw Error(`Iterable cannot be null`);return new L(function(n){po(n,t,function(){var r=e[Symbol.asyncIterator]();po(n,t,function(){r.next().then(function(e){e.done?n.complete():n.next(e.value)})},0,!0)})})}function xo(e,t){return bo(no(e),t)}function So(e,t){if(e!=null){if(Xa(e))return go(e,t);if(Ja(e))return vo(e,t);if(Ya(e))return _o(e,t);if(Za(e))return bo(e,t);if(to(e))return yo(e,t);if(ro(e))return xo(e,t)}throw Qa(e)}function Co(e,t){return t?So(e,t):io(e)}function wo(){var e=[...arguments];return Co(e,Ka(e))}function To(e){return e instanceof Date&&!isNaN(e)}function B(e,t){return ka(function(n,r){var i=0;n.subscribe(R(r,function(n){r.next(e.call(t,n,i++))}))})}var Eo=Array.isArray;function Do(e,t){return Eo(t)?e.apply(void 0,Gi([],Wi(t))):e(t)}function Oo(e){return B(function(t){return Do(e,t)})}var ko=Array.isArray,Ao=Object.getPrototypeOf,jo=Object.prototype,Mo=Object.keys;function No(e){if(e.length===1){var t=e[0];if(ko(t))return{args:t,keys:null};if(Po(t)){var n=Mo(t);return{args:n.map(function(e){return t[e]}),keys:n}}}return{args:e,keys:null}}function Po(e){return e&&typeof e==`object`&&Ao(e)===jo}function Fo(e,t){return e.reduce(function(e,n,r){return e[n]=t[r],e},{})}function Io(){var e=[...arguments],t=Ka(e),n=Ga(e),r=No(e),i=r.args,a=r.keys;if(i.length===0)return Co([],t);var o=new L(Lo(i,t,a?function(e){return Fo(a,e)}:Ca));return n?o.pipe(Oo(n)):o}function Lo(e,t,n){return n===void 0&&(n=Ca),function(r){Ro(t,function(){for(var i=e.length,a=Array(i),o=i,s=i,c=function(i){Ro(t,function(){var c=Co(e[i],t),l=!1;c.subscribe(R(r,function(e){a[i]=e,l||(l=!0,s--),s||r.next(n(a.slice()))},function(){--o||r.complete()}))},r)},l=0;l<i;l++)c(l)},r)}}function Ro(e,t,n){e?po(n,e,t):t()}function zo(e,t,n,r,i,a,o,s){var c=[],l=0,u=0,d=!1,f=function(){d&&!c.length&&!l&&t.complete()},p=function(e){return l<r?m(e):c.push(e)},m=function(e){a&&t.next(e),l++;var s=!1;io(n(e,u++)).subscribe(R(t,function(e){i?.(e),a?p(e):t.next(e)},function(){s=!0},void 0,function(){if(s)try{l--;for(var e=function(){var e=c.shift();o?po(t,o,function(){return m(e)}):m(e)};c.length&&l<r;)e();f()}catch(e){t.error(e)}}))};return e.subscribe(R(t,p,function(){d=!0,f()})),function(){s?.()}}function Bo(e,t,n){return n===void 0&&(n=1/0),I(t)?Bo(function(n,r){return B(function(e,i){return t(n,e,r,i)})(io(e(n,r)))},n):(typeof t==`number`&&(n=t),ka(function(t,r){return zo(t,r,e,n)}))}function Vo(e){return e===void 0&&(e=1/0),Bo(Ca,e)}function Ho(){return Vo(1)}function Uo(){var e=[...arguments];return Ho()(Co(e,Ka(e)))}var Wo=[`addListener`,`removeListener`],Go=[`addEventListener`,`removeEventListener`],Ko=[`on`,`off`];function qo(e,t,n,r){if(I(n)&&(r=n,n=void 0),r)return qo(e,t,n).pipe(Oo(r));var i=Wi(Zo(e)?Go.map(function(r){return function(i){return e[r](t,i,n)}}):Yo(e)?Wo.map(Jo(e,t)):Xo(e)?Ko.map(Jo(e,t)):[],2),a=i[0],o=i[1];if(!a&&Ja(e))return Bo(function(e){return qo(e,t,n)})(io(e));if(!a)throw TypeError(`Invalid event target`);return new L(function(e){var t=function(){var t=[...arguments];return e.next(1<t.length?t:t[0])};return a(t),function(){return o(t)}})}function Jo(e,t){return function(n){return function(r){return e[n](t,r)}}}function Yo(e){return I(e.addListener)&&I(e.removeListener)}function Xo(e){return I(e.on)&&I(e.off)}function Zo(e){return I(e.addEventListener)&&I(e.removeEventListener)}function Qo(e,t,n){e===void 0&&(e=0),n===void 0&&(n=Va);var r=-1;return t!=null&&(Ua(t)?n=t:r=t),new L(function(t){var i=To(e)?+e-n.now():e;i<0&&(i=0);var a=0;return n.schedule(function(){t.closed||(t.next(a++),0<=r?this.schedule(void 0,r):t.complete())},i)})}function $o(){var e=[...arguments],t=Ka(e),n=qa(e,1/0),r=e;return r.length?r.length===1?io(r[0]):Vo(n)(Co(r,t)):Ha}var es=new L(aa),ts=Array.isArray;function ns(e){return e.length===1&&ts(e[0])?e[0]:e}function rs(e,t){return ka(function(n,r){var i=0;n.subscribe(R(r,function(n){return e.call(t,n,i++)&&r.next(n)}))})}function is(){var e=[...arguments];return e=ns(e),e.length===1?io(e[0]):new L(as(e))}function as(e){return function(t){for(var n=[],r=function(r){n.push(io(e[r]).subscribe(R(t,function(e){if(n){for(var i=0;i<n.length;i++)i!==r&&n[i].unsubscribe();n=null}t.next(e)})))},i=0;n&&!t.closed&&i<e.length;i++)r(i)}}function os(){var e=[...arguments],t=Ga(e),n=ns(e);return n.length?new L(function(e){var r=n.map(function(){return[]}),i=n.map(function(){return!1});e.add(function(){r=i=null});for(var a=function(a){io(n[a]).subscribe(R(e,function(n){if(r[a].push(n),r.every(function(e){return e.length})){var o=r.map(function(e){return e.shift()});e.next(t?t.apply(void 0,Gi([],Wi(o))):o),r.some(function(e,t){return!e.length&&i[t]})&&e.complete()}},function(){i[a]=!0,!r[a].length&&e.complete()}))},o=0;!e.closed&&o<n.length;o++)a(o);return function(){r=i=null}}):Ha}function ss(e){return ka(function(t,n){var r=null,i=!1,a;r=t.subscribe(R(n,void 0,void 0,function(o){a=io(e(o,ss(e)(t))),r?(r.unsubscribe(),r=null,a.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,a.subscribe(n))})}function cs(e,t){return t===void 0&&(t=Ba),ka(function(n,r){var i=null,a=null,o=null,s=function(){if(i){i.unsubscribe(),i=null;var e=a;a=null,r.next(e)}};function c(){var n=o+e,a=t.now();if(a<n){i=this.schedule(void 0,n-a),r.add(i);return}s()}n.subscribe(R(r,function(n){a=n,o=t.now(),i||(i=t.schedule(c,e),r.add(i))},function(){s(),r.complete()},void 0,function(){a=i=null}))})}function ls(e){return ka(function(t,n){var r=!1;t.subscribe(R(n,function(e){r=!0,n.next(e)},function(){r||n.next(e),n.complete()}))})}function us(e){return e<=0?function(){return Ha}:ka(function(t,n){var r=0;t.subscribe(R(n,function(t){++r<=e&&(n.next(t),e<=r&&n.complete())}))})}function ds(){return ka(function(e,t){e.subscribe(R(t,aa))})}function fs(e){return B(function(){return e})}function ps(e,t){return t?function(n){return Uo(t.pipe(us(1),ds()),n.pipe(ps(e)))}:Bo(function(t,n){return io(e(t,n)).pipe(us(1),fs(t))})}function ms(e,t){t===void 0&&(t=Ba);var n=Qo(e,t);return ps(function(){return n})}function hs(e,t){return t===void 0&&(t=Ca),e??=gs,ka(function(n,r){var i,a=!0;n.subscribe(R(r,function(n){var o=t(n);(a||!e(i,o))&&(a=!1,i=o,r.next(n))}))})}function gs(e,t){return e===t}function _s(){var e=[...arguments];return function(t){return Uo(t,wo.apply(void 0,Gi([],Wi(e))))}}function vs(e){return ka(function(t,n){try{t.subscribe(n)}finally{n.add(e)}})}function ys(e){return rs(function(t,n){return e<=n})}function bs(e,t){return ka(function(n,r){var i=null,a=0,o=!1,s=function(){return o&&!i&&r.complete()};n.subscribe(R(r,function(n){i?.unsubscribe();var o=0,c=a++;io(e(n,c)).subscribe(i=R(r,function(e){return r.next(t?t(n,e,c,o++):e)},function(){i=null,s()}))},function(){o=!0,s()}))})}function V(e){return ka(function(t,n){io(e).subscribe(R(n,function(){return n.complete()},aa)),!n.closed&&t.subscribe(n)})}function xs(e,t,n){var r=I(e)||t||n?{next:e,error:t,complete:n}:e;return r?ka(function(e,t){var n;(n=r.subscribe)==null||n.call(r);var i=!0;e.subscribe(R(t,function(e){var n;(n=r.next)==null||n.call(r,e),t.next(e)},function(){var e;i=!1,(e=r.complete)==null||e.call(r),t.complete()},function(e){var n;i=!1,(n=r.error)==null||n.call(r,e),t.error(e)},function(){var e,t;i&&((e=r.unsubscribe)==null||e.call(r)),(t=r.finalize)==null||t.call(r)}))}):Ca}function Ss(){var e=[...arguments],t=Ga(e);return ka(function(n,r){for(var i=e.length,a=Array(i),o=e.map(function(){return!1}),s=!1,c=function(t){io(e[t]).subscribe(R(r,function(e){a[t]=e,!s&&!o[t]&&(o[t]=!0,(s=o.every(Ca))&&(o=null))},aa))},l=0;l<i;l++)c(l);n.subscribe(R(r,function(e){if(s){var n=Gi([e],Wi(a));r.next(t?t.apply(void 0,Gi([],Wi(n))):n)}}))})}var Cs=class{},ws=class extends Cs{},Ts=class extends ws{},Es=class{},Ds=class{},Os=class{},H=class extends Ds{constructor(e){super(),this.scope=e,e.$on(`$destroy`,()=>{this.destroyed=!0,this.attached=!1})}scope;attached=!0;destroyed=!1;markForCheck(){!this.attached||this.destroyed||this.scope.$$phase||this.scope.$applyAsync()}detach(){this.destroyed||(this.attached=!1)}detectChanges(){this.destroyed||this.scope.$$phase||this.scope.$digest()}reattach(){this.destroyed||this.attached||(this.attached=!0)}static get $name(){return`ng.change-detector-ref`}static get $inject(){return[`$rootScope`]}},ks=[],As=[],js=new WeakMap,Ms=new WeakMap,Ns=new WeakMap;function Ps(e){As.push(e)}function Fs(e){let t=As.lastIndexOf(e);t!==-1&&As.splice(t,1)}function Is(e,t){return Ms.set(e,t),()=>Ms.delete(e)}function Ls(e,t){let n=Ns.get(e);return n?n.push(t):Ns.set(e,[t]),()=>{let n=Ns.get(e);if(!n)return;let r=n.indexOf(t);r!==-1&&n.splice(r,1),n.length===0&&Ns.delete(e)}}function Rs(e){return Ns.get(e)??[]}function zs(e,t){ks.push(e);try{return t()}finally{ks.pop()}}function Bs(e,t){js.set(e,t),e.$on(`$destroy`,()=>{js.get(e)===t&&js.delete(e)})}function Vs(e){let t=ks.at(-1);if(t)return t;let n=e;for(;n;){let e=js.get(n);if(e)return e;n=n.$parent}return[]}var Hs=class{constructor(e,t,n,r,i,a){this.locator=e,this.required=t,this.descendants=n,this.staticQuery=r,this.read=i,this.debugName=a}locator;required;descendants;staticQuery;read;debugName;frozen=!1;resolvedValue;get value(){if(this.required&&this.resolvedValue===void 0){let e=this.debugName??String(this.locator);throw Error(`La consulta contentChild requerida "${e}" no tiene valor`)}return this.resolvedValue}resolve(e){this.frozen||(this.resolvedValue=e)}reset(){this.frozen||(this.resolvedValue=void 0)}freeze(){this.staticQuery&&(this.frozen=!0)}},Us=new WeakMap;function Ws(e,t,n,r=!1){let i=t&&`read`in t?t.read:void 0;return new Hs(e,n,t?.descendants??!0,r,i,t?.debugName)}function Gs(e,t,n){return Ws(e,t,n)}Object.defineProperty((e,t)=>Gs(e,t,!1),"required",{value:(e,t)=>Gs(e,t,!0)});function Ks(e,t){return(n,r)=>{if(typeof r==`object`)return n=>Ws(e,t,!1,t?.static??!1);let i=n,a=Us.get(i),o={locator:e,options:t};a?a.set(r,o):Us.set(i,new Map([[r,o]]))}}function qs(e){let t=[],n=new Set,r=Object.getPrototypeOf(e);for(;r;){let e=Us.get(r);if(e)for(let[r,i]of e)n.has(r)||(n.add(r),t.push({propertyKey:r,query:Ws(i.locator,i.options,!1,i.options?.static??!1)}));r=Object.getPrototypeOf(r)}return t}function Js(e){return e.flat(1/0)}var Ys=class{constructor(e=!0){this.emitDistinctChangesOnly=e}emitDistinctChangesOnly;changesSubject=new z;changesDetected=!1;dirtyCallback;lastNotifiedResults=[];results=[];dirty=!0;changes=this.changesSubject.asObservable();get length(){return this.results.length}get first(){return this.results[0]}get last(){return this.results[this.length-1]}get(e){return this.results[e]}map(e){return this.results.map(e)}filter(e){return this.results.filter(e)}find(e){return this.results.find(e)}reduce(e,t){return this.results.reduce(e,t)}forEach(e){this.results.forEach(e)}some(e){return this.results.some(e)}toArray(){return[...this.results]}toString(){return this.results.toString()}reset(e,t){let n=Js(e),r=t??(e=>e);this.changesDetected=n.length!==this.lastNotifiedResults.length||n.some((e,t)=>r(e)!==r(this.lastNotifiedResults[t])),this.results=n,this.dirty=!1}notifyOnChanges(){(!this.emitDistinctChangesOnly||this.changesDetected)&&this.changesSubject.next(this),this.lastNotifiedResults=[...this.results],this.changesDetected=!1}setDirty(){this.dirty=!0,this.dirtyCallback?.()}onDirty(e){this.dirtyCallback=e}destroy(){this.changesSubject.complete()}[Symbol.iterator](){return this.results[Symbol.iterator]()}},Xs=class{constructor(e,t,n,r,i,a=!1){this.locator=e,this.descendants=t,this.staticQuery=n,this.read=r,this.debugName=i,a&&(this.queryList=new Ys)}locator;descendants;staticQuery;read;debugName;frozen=!1;queryList;resolvedValues=[];get value(){return this.queryList??this.resolvedValues}resolve(e){if(!this.frozen){if(this.queryList){this.queryList.reset(e);return}this.resolvedValues=[...e]}}notifyOnChanges(){this.queryList?.notifyOnChanges()}destroy(){this.queryList?.destroy()}freeze(){this.staticQuery&&(this.frozen=!0)}},Zs=new WeakMap;function Qs(e,t,n=!1,r=!1){let i=t&&`read`in t?t.read:void 0;return new Xs(e,t?.descendants??!0,n,i,t?.debugName,r)}function $s(e,t){return(n,r)=>{if(typeof r==`object`)return n=>Qs(e,t,t?.static??!1,!0);let i=n,a=Zs.get(i),o={locator:e,options:t};a?a.set(r,o):Zs.set(i,new Map([[r,o]]))}}function ec(e){let t=[],n=new Set,r=Object.getPrototypeOf(e);for(;r;){let e=Zs.get(r);if(e)for(let[r,i]of e)n.has(r)||(n.add(r),t.push({propertyKey:r,query:Qs(i.locator,i.options,i.options?.static??!1,!0)}));r=Object.getPrototypeOf(r)}return t}function tc(e,t,n){return(typeof e.locator==`string`?e.locator===t:n.has(e.locator))||e.read!==void 0&&n.has(e.read)}function nc(e,t){return typeof e.locator==`string`?t.locator===e.locator:t.candidates.has(e.locator)}function rc(e,t,n){return n===void 0||e.descendants===!0||t.node!==void 0&&n.has(t.node)}function ic(e){return e.read??(typeof e.locator==`string`?void 0:e.locator)}function ac(e,t,n){let r=t.ordered(),i=r.find(t=>nc(e,t)&&rc(e,t,n));return i?t.read(i,ic(e),r):void 0}function oc(e,t,n){let r=t.ordered(),i=ic(e),a=new Set;return r.flatMap(o=>{if(!nc(e,o)||!rc(e,o,n))return[];if(o.node!==void 0){if(a.has(o.node))return[];a.add(o.node)}let s=t.read(o,i,r);return s===void 0?[]:[s]})}var sc=class{constructor(e,t,n,r,i){this.locator=e,this.required=t,this.staticQuery=n,this.read=r,this.debugName=i}locator;required;staticQuery;read;debugName;frozen=!1;resolvedValue;get value(){if(this.required&&this.resolvedValue===void 0){let e=this.debugName??String(this.locator);throw Error(`La consulta viewChild requerida "${e}" no tiene valor`)}return this.resolvedValue}resolve(e){this.frozen||(this.resolvedValue=e)}reset(){this.frozen||(this.resolvedValue=void 0)}freeze(){this.staticQuery&&(this.frozen=!0)}clear(e){this.resolvedValue===e&&(this.resolvedValue=void 0)}},cc=new WeakMap;function lc(e,t,n,r=!1){return new sc(e,n,r,t&&`read`in t?t.read:void 0,t?.debugName)}function uc(e,t,n){return lc(e,t,n)}Object.defineProperty((e,t)=>uc(e,t,!1),"required",{value:(e,t)=>uc(e,t,!0)});function dc(e,t){return(n,r)=>{if(typeof r==`object`)return n=>lc(e,t,!1,t?.static??!1);let i=n,a=cc.get(i),o={locator:e,options:t};a?a.set(r,o):cc.set(i,new Map([[r,o]]))}}function fc(e){let t=[],n=new Set,r=Object.getPrototypeOf(e);for(;r;){let e=cc.get(r);if(e)for(let[r,i]of e)n.has(r)||(n.add(r),t.push({propertyKey:r,query:lc(i.locator,i.options,!1,i.options?.static??!1)}));r=Object.getPrototypeOf(r)}return t}var pc=class{constructor(e,t,n,r=!1){this.locator=e,this.read=t,this.debugName=n,r&&(this.queryList=new Ys)}locator;read;debugName;queryList;resolvedValues=[];get value(){return this.queryList??this.resolvedValues}resolve(e){this.queryList?this.queryList.reset(e):this.resolvedValues=[...e]}notifyOnChanges(){this.queryList?.notifyOnChanges()}destroy(){this.queryList?.destroy()}},mc=new WeakMap;function hc(e,t,n=!1){return new pc(e,t&&`read`in t?t.read:void 0,t?.debugName,n)}function gc(e,t){return(n,r)=>{if(typeof r==`object`)return n=>hc(e,t,!0);let i=n,a=mc.get(i),o={locator:e,options:t};a?a.set(r,o):mc.set(i,new Map([[r,o]]))}}function _c(e){let t=[],n=new Set,r=Object.getPrototypeOf(e);for(;r;){let e=mc.get(r);if(e)for(let[r,i]of e)n.has(r)||(n.add(r),t.push({propertyKey:r,query:hc(i.locator,i.options,!0)}));r=Object.getPrototypeOf(r)}return t}var vc=class{contentChildrenQueries=[];contentQueries=[];viewChildrenQueries=[];viewQueries=[];get hasContentQueries(){return this.contentQueries.length>0||this.contentChildrenQueries.length>0}get hasCollectionQueries(){return this.viewChildrenQueries.length>0||this.contentChildrenQueries.length>0}attach(e,t){this.captureViewChildQueries(e),this.captureViewChildrenQueries(e),this.captureContentChildQueries(e),this.captureContentChildrenQueries(e),this.wrapPostLink(e,t)}acceptsViewReference(e,t){return[...this.viewQueries,...this.viewChildrenQueries].some(n=>tc(n,e,t))}acceptsContentReference(e,t){return[...this.contentQueries,...this.contentChildrenQueries].some(n=>tc(n,e,t))}refreshViewQueries(e){for(let t of this.viewQueries){let n=ac(t,e);n===void 0?t.reset():t.resolve(n)}for(let t of this.viewChildrenQueries)t.resolve(oc(t,e))}refreshContentQueries(e,t){for(let n of this.contentQueries){let r=ac(n,e,t);r===void 0?n.reset():n.resolve(r)}for(let n of this.contentChildrenQueries)n.resolve(oc(n,e,t))}freezeStaticViewQueries(){for(let e of this.viewQueries)e.freeze()}freezeStaticContentQueries(){for(let e of this.contentQueries)e.freeze();for(let e of this.contentChildrenQueries)e.freeze()}notifyChanges(){for(let e of this.viewChildrenQueries)e.notifyOnChanges();for(let e of this.contentChildrenQueries)e.notifyOnChanges()}destroy(){for(let e of this.viewChildrenQueries)e.destroy();for(let e of this.contentChildrenQueries)e.destroy()}captureViewChildQueries(e){for(let t of Reflect.ownKeys(e)){let n=Object.getOwnPropertyDescriptor(e,t);!n||!(n.value instanceof sc)||this.installQuery(e,t,n.value,this.viewQueries,n.enumerable??!0)}for(let{propertyKey:t,query:n}of fc(e))this.installQuery(e,t,n,this.viewQueries,!0)}captureViewChildrenQueries(e){for(let t of Reflect.ownKeys(e)){let n=Object.getOwnPropertyDescriptor(e,t);!n||!(n.value instanceof pc)||this.installQuery(e,t,n.value,this.viewChildrenQueries,n.enumerable??!0)}for(let{propertyKey:t,query:n}of _c(e))this.installQuery(e,t,n,this.viewChildrenQueries,!0)}captureContentChildQueries(e){for(let t of Reflect.ownKeys(e)){let n=Object.getOwnPropertyDescriptor(e,t);!n||!(n.value instanceof Hs)||this.installQuery(e,t,n.value,this.contentQueries,n.enumerable??!0)}for(let{propertyKey:t,query:n}of qs(e))this.installQuery(e,t,n,this.contentQueries,!0)}captureContentChildrenQueries(e){for(let t of Reflect.ownKeys(e)){let n=Object.getOwnPropertyDescriptor(e,t);!n||!(n.value instanceof Xs)||this.installQuery(e,t,n.value,this.contentChildrenQueries,n.enumerable??!0)}for(let{propertyKey:t,query:n}of ec(e))this.installQuery(e,t,n,this.contentChildrenQueries,!0)}installQuery(e,t,n,r,i){r.push(n),Object.defineProperty(e,t,{configurable:!0,enumerable:i,get:()=>n.value})}wrapPostLink(e,t){if(!(this.viewQueries.some(e=>e.staticQuery)||this.contentQueries.some(e=>e.staticQuery)||this.contentChildrenQueries.some(e=>e.staticQuery)||this.hasCollectionQueries))return;let n=e,r=n.$postLink;n.$postLink=(...n)=>(t.finalizeViewQueries(),t.finalizeContentQueries(),t.notifyChanges(),r?.apply(e,n))}};function yc(e){let t=[],n=new Set,r=Object.getPrototypeOf(e);for(;r&&r!==Object.prototype;){let e=r.constructor;e&&!n.has(e)&&(n.add(e),t.push(e)),r=Object.getPrototypeOf(r)}return t}function bc(e){return e.map((e,t)=>({index:t,reference:e})).sort((e,t)=>{let n=e.reference.node,r=t.reference.node;if(!n||!r||n===r)return e.index-t.index;let i=n.compareDocumentPosition(r);return i&1?e.index-t.index:i&4?-1:i&2?1:e.index-t.index}).map(({reference:e})=>e)}var xc=class{orderedReferences;references=[];connect(e){return this.references.push(e),this.orderedReferences=void 0,()=>{let t=this.references.indexOf(e);t!==-1&&(this.references.splice(t,1),this.orderedReferences=void 0)}}ordered(){return this.orderedReferences??=bc(this.references),this.orderedReferences}read(e,t,n){if(t===void 0)return e.defaultValue;let r=e.candidates.get(t);if(r!==void 0||e.node===void 0)return r;for(let r of n){if(r.node!==e.node)continue;let n=r.candidates.get(t);if(n!==void 0)return n}}},Sc=class{constructor(e,t,n){this.scope=e,this.element=t,this.identifier=n}scope;element;identifier;controller;contentReferences=new xc;contentRoots=new Set;disconnectFromOwners=[];queryListChangesScheduled=!1;queryState=new vc;viewReferences=new xc;get metadata(){if(this.controller)return{controller:this.controller,element:this.element,identifier:this.identifier,scope:this.scope}}get hasContentQueries(){return this.queryState.hasContentQueries}attachController(e){this.controller=e;let t=Is(e,this);if(this.queryState.attach(e,{finalizeContentQueries:()=>this.finalizeStaticContentQueries(),finalizeViewQueries:()=>this.finalizeStaticViewQueries(),notifyChanges:()=>this.notifyQueryListChanges()}),!this.scope)return;let n=this.scope,r=Ls(n,this);this.publishControllerToOwners(e,n),n.$on(`$destroy`,()=>{for(let e of this.disconnectFromOwners)e();this.disconnectFromOwners.length=0,this.queryState.destroy(),t(),r()})}acceptsReference(e,t){return this.queryState.acceptsViewReference(e,t)}acceptsContentReference(e,t){return this.queryState.acceptsContentReference(e,t)}connectReference(e,t,n,r){return this.connectToStore(this.viewReferences,{candidates:n,defaultValue:t,locator:e,node:r},()=>this.refreshViewQueries())}connectContentReference(e,t,n,r){return this.connectToStore(this.contentReferences,{candidates:n,defaultValue:t,locator:e,node:r},()=>this.refreshContentQueries())}setContentRoots(e){for(let t of e)this.contentRoots.add(t);this.refreshContentQueries()}finalizeStaticContentQueries(){this.refreshContentQueries(),this.queryState.freezeStaticContentQueries()}finalizeStaticViewQueries(){this.refreshViewQueries(),this.queryState.freezeStaticViewQueries()}connectToStore(e,t,n){let r=e.connect(t);return n(),()=>{r(),n()}}publishControllerToOwners(e,t){let n=yc(e);if(n.length===0)return;let r=new Map(n.map(t=>[t,e])),[i]=this.element?Array.from(this.element):[],a=t;for(;a;){for(let t of Rs(a))t!==this&&t.acceptsReference(``,r)&&this.disconnectFromOwners.push(t.connectReference(``,e,r,i));a=a.$parent}for(let n of Vs(t))n!==this&&n.acceptsContentReference(``,r)&&this.disconnectFromOwners.push(n.connectContentReference(``,e,r,i))}refreshViewQueries(){this.queryState.refreshViewQueries(this.viewReferences),this.scheduleQueryListChanges()}refreshContentQueries(){this.queryState.refreshContentQueries(this.contentReferences,this.contentRoots),this.scheduleQueryListChanges()}scheduleQueryListChanges(){this.queryListChangesScheduled||!this.queryState.hasCollectionQueries||(this.queryListChangesScheduled=!0,this.scope?this.scope.$evalAsync(()=>this.notifyQueryListChanges()):queueMicrotask(()=>this.notifyQueryListChanges()))}notifyQueryListChanges(){this.queryListChangesScheduled=!1,this.queryState.notifyChanges()}};function Cc(e){return typeof e==`object`&&!!e||typeof e==`function`}function wc(e){return!e?.$scope||Object.hasOwn(e,H.$name)?e:{...e,[H.$name]:new H(e.$scope)}}var Tc=e=>{let t=e;return(e,n,r,i)=>{let a=wc(n);if(r){let n=t(e,a,!0,i),r=new Sc(a?.$scope,a?.$element,n.identifier??i),o=(()=>{Ps(r);try{let e=n();return Cc(e)&&r.attachController(e),e}finally{Fs(r)}});return Object.defineProperty(o,"instance",{get:()=>n.instance,set:e=>{n.instance=e}}),Object.defineProperty(o,"identifier",{get:()=>n.identifier}),o}let o=new Sc(a?.$scope,a?.$element,i);Ps(o);try{let n=t(e,a,!1,i);return Cc(n)&&o.attachController(n),n}finally{Fs(o)}}};Tc.$inject=[`$delegate`];var Ec=class extends Ts{constructor(e,t,r){super(),this.context=e,this.$scope=t;let i=r(this.$scope,n.default.noop);this.compiled=i.contents(),this.rootNodes=Array.from(this.compiled);for(let e of this.rootNodes)e.parentNode?.removeChild(e);i.remove()}context;$scope;rootNodes=[];compiled;_destroyed=!1;onDestroyCallbacks=new Set;get destroyed(){return this._destroyed}onDestroy(e){this.onDestroyCallbacks.add(e)}detectChanges(){this._destroyed||this.$scope.$applyAsync()}destroy(){if(!this.destroyed){this._destroyed=!0,this.compiled.remove(),this.$scope.$destroy();for(let e of this.onDestroyCallbacks)e();this.onDestroyCallbacks.clear()}}markForCheck(){this._destroyed||this.$scope.$evalAsync()}},Dc=class e extends Es{constructor(e){super(),this.element=e}element;static owners=new WeakMap;views=[];trackedViews=new WeakSet;get length(){return this.views.length}clear(){for(;this.length;)this.remove(this.length-1)}createEmbeddedView(e,t,n){let r=e.createEmbeddedView(t??{}),i=typeof n==`number`?n:n?.index;try{this.insert(r,i)}catch(e){throw r.destroy(),e}return r}get(e){return this.views[e]??null}indexOf(e){return this.views.indexOf(e)}insert(t,n){if(t.destroyed)throw Error(`No se puede insertar una vista destruida`);let r=e.owners.get(t);if(r){let e=r.indexOf(t);e!==-1&&r.detach(e)}let i=this.normalizeInsertIndex(n),a=this.element.nativeElement.parentNode;if(!a)throw Error(`El ViewContainerRef no tiene un ancla conectada al DOM`);let o=this.getInsertionReference(i),s=this.getRootNodes(t);for(let e of s)a.insertBefore(e,o);return this.views.splice(i,0,t),e.owners.set(t,this),this.trackDestroyedView(t),t}move(e,t){if(this.indexOf(e)===-1)throw Error(`La vista no pertenece a este ViewContainerRef`);return this.insert(e,t)}remove(e){this.detach(e)?.destroy()}detach(t){let n=t??this.length-1;if(n<0||n>=this.length)return null;let[r]=this.views.splice(n,1);for(let e of this.getRootNodes(r))e.parentNode?.removeChild(e);return e.owners.get(r)===this&&e.owners.delete(r),r}normalizeInsertIndex(e){let t=e??this.length;if(!Number.isInteger(t)||t<0||t>this.length)throw RangeError(`\xCDndice de inserci\xF3n fuera de rango: ${t}`);return t}getRootNodes(e){let t=e.rootNodes;if(!t)throw Error(`La vista no expone rootNodes y no puede insertarse`);return t}getInsertionReference(e){for(let t=e;t<this.length;t++){let[e]=this.getRootNodes(this.views[t]);if(e)return e}for(let t=e-1;t>=0;t--){let e=this.getRootNodes(this.views[t]),n=e[e.length-1];if(n)return n.nextSibling}return this.element.nativeElement.nextSibling}trackDestroyedView(t){this.trackedViews.has(t)||(this.trackedViews.add(t),t.onDestroy(()=>{let n=this.views.indexOf(t);n!==-1&&this.views.splice(n,1),e.owners.get(t)===this&&e.owners.delete(t)}))}},Oc=class e{constructor(e,t){this.$transclude=e,this.$scope=t}$transclude;$scope;declarations;static DECLARATION_PREFIX=`let`;registerDeclarationMap(e){this.declarations=e}createEmbeddedView(e,t){let r=(t??this.$scope).$new(),i=Object.create(null);n.default.extend(i,e);for(let[e,t]of this.declarations)n.default.extend(r,{[e]:i[t]});return new Ec(e,r,this.$transclude)}static get $name(){return`ngTemplate`}static get $inject(){return[`$transclude`,`$scope`]}static compileFn=(t,n)=>{let r=new Map;for(let[t,i]of Object.entries(n)){if(!t.startsWith(e.DECLARATION_PREFIX))continue;let n=e.DECLARATION_PREFIX.length,a=t.slice(n);if(!a)continue;let[o]=a,[,...s]=a,c=o.toLowerCase()+s.join(``);c.length&&r.set(c,i||`$implicit`)}return{pre:(e,t,n,i)=>{i.registerDeclarationMap(r)}}};static $factory(){return{controller:e,bindToController:!0,restrict:`E`,compile:e.compileFn,transclude:`element`}}};function kc(e,t,n){let r=e;for(;r;){let e=Rs(r).find(e=>e.acceptsReference(t,n));if(e)return e;r=r.$parent}}var Ac=class e{static $compileFn(e){return(t,n)=>{let[r]=Array.from(t),i=n.ngRefRead,a=e(n.ngRef),o=a.assign;if(o)return t.removeAttr(`ng-ref`),t.removeAttr(`ng-ref-read`),{pre:(e,t,s,c)=>{let[l=r]=Array.from(t),u=new Rc(l),d=c?.ngTemplate,f=c?.ngContainer?.viewContainerRef,p={ngTemplate:d,viewContainerRef:f,$element:u},m=i?t.data(`$${i}Controller`):void 0,h=d??u,g=i?p[i]??m:h,_=new Map([[Rc,u],[`$element`,u]]);m!==void 0&&_.set(i,m),d&&(_.set(Oc,d),_.set(`ngTemplate`,d)),f&&(_.set(Dc,f),_.set(`viewContainerRef`,f));let v=kc(e,n.ngRef,_)?.connectReference(n.ngRef,h,_,l),y=Vs(e).filter(e=>e.acceptsContentReference(n.ngRef,_)).map(e=>e.connectContentReference(n.ngRef,h,_,l));e.$on(`$destroy`,()=>{v?.();for(let e of y)e();a(e)===g&&o(e,null)}),o(e,g)}}}}static $factory(t,n){return{...t,restrict:`A`,bindToController:!0,require:{ngTemplate:`?ngTemplate`,ngContainer:`?ngContainer`},compile:e.$compileFn(n),priority:1}}},jc=(e,t)=>{let[n]=e,r=Ac.$factory(n,t);return e.unshift(r),e};jc.$inject=[`$delegate`,`$parse`];var Mc=Symbol(`NgZone.rootScope`),Nc,U=class e{constructor(e){this.options=e,this.rootScope=e[Mc]}options;errorSubject=new z;microtaskEmptySubject=new z;rootScope;stableSubject=new z;unstableSubject=new z;pendingCoalescedDigest=!1;pendingCompletionMicrotask=!1;stable=!0;onUnstable=this.unstableSubject.asObservable();onMicrotaskEmpty=this.microtaskEmptySubject.asObservable();onStable=this.stableSubject.asObservable();onError=this.errorSubject.asObservable();get hasPendingMacrotasks(){return this.pendingCoalescedDigest}get hasPendingMicrotasks(){return this.pendingCompletionMicrotask}get isStable(){return this.stable&&!this.hasPendingMacrotasks&&!this.hasPendingMicrotasks}run(e,t,n){return this.executeInside(e,t,n)}runTask(e,t,n,r){return this.executeInside(e,t,n)}runGuarded(e,t,n){try{return this.executeInside(e,t,n)}catch(e){this.errorSubject.next(e);return}}runOutsideAngular(e){let t=Nc;Nc=void 0;try{return e()}finally{Nc=t}}static isInAngularZone(){return Nc!==void 0}static assertInAngularZone(){if(!e.isInAngularZone())throw Error(`Expected to be in Angular Zone, but it is not`)}static assertNotInAngularZone(){if(e.isInAngularZone())throw Error(`Expected to not be in Angular Zone, but it is`)}static get $name(){return`ng.zone`}executeInside(e,t,n){let r=Nc,i=r!==this&&this.stable;Nc=this,i&&(this.stable=!1,this.unstableSubject.next());try{return e.apply(t,n??[])}finally{Nc=r,i&&this.requestChangeDetection()}}requestChangeDetection(){let e=this.rootScope;if(!e||e.$$phase){this.completeTurn();return}if(this.options.shouldCoalesceRunChangeDetection){if(this.pendingCoalescedDigest)return;this.pendingCoalescedDigest=!0,e.$applyAsync(()=>{this.pendingCoalescedDigest=!1,this.pendingCompletionMicrotask=!0,queueMicrotask(()=>{this.pendingCompletionMicrotask=!1,this.completeTurn()})});return}try{e.$digest()}finally{this.completeTurn()}}completeTurn(){this.microtaskEmptySubject.next(),this.stable=!0,this.stableSubject.next()}};function Pc(e,t={}){return new U({...t,[Mc]:e})}var Fc=class e extends Os{constructor(e){super(),this.attrs=e}attrs;currentDisabled=!1;listeners=new Set;$onInit(){this.attrs.$observe(`disabled`,e=>{this._update(e===!0||String(e)===`disabled`)})}get disabled(){return this.currentDisabled}onChange(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}_update(e){if(e!==this.currentDisabled){this.currentDisabled=e;for(let t of this.listeners)t(e)}}static get $inject(){return[`$attrs`]}static get $name(){return`ngDisabled`}static $factory(){return{controller:e,restrict:`A`,bindToController:!0,scope:!1}}};function Ic(e){for(let t of e)t.controller=Fc;return e}var Lc=n.default.module(`ng.core`,[]);Lc.decorator(`$controller`,Tc),Lc.decorator(`ngRefDirective`,jc),Lc.decorator(`ngDisabledDirective`,Ic),Lc.service(H.$name,H),Lc.factory(U.$name,[`$rootScope`,Pc]);var Rc=class{nativeElement;constructor(e){this.nativeElement=e}},zc=class e{constructor(e,t,n){this.$transclude=t,this.$scope=n;let[r]=Array.from(e),i=new Rc(r);this._viewContainerRef=new Dc(i)}$transclude;$scope;_viewContainerRef;get viewContainerRef(){return this._viewContainerRef}$postLink(){this.$transclude(this.$scope,e=>{e&&e.remove()})}$onDestroy(){this._viewContainerRef.clear()}static $factory(){return{controller:e,restrict:`E`,bindToController:!0,transclude:`element`}}static get $inject(){return[`$element`,`$transclude`,`$scope`]}static get $name(){return`ngContainer`}},Bc=class e{constructor(e,t,n){this.$element=e,this.$transclude=t,this.$scope=n}$element;$transclude;$scope;$postLink(){let e=Rs(this.$scope).filter(e=>e.hasContentQueries),t=Vs(this.$scope),n=Array.from(new Set([...e,...t]));zs(n,()=>{this.$transclude?.((t,r)=>{if(r&&Bs(r,n),!t)return;let i=Array.from(t);for(let t of e)t.setContentRoots(i);this.$element.after(t)})}),this.$element.remove()}static get $inject(){return[`$element`,`$transclude`,`$scope`]}static get $name(){return`ngContent`}static $factory(){return{controller:e,restrict:`E`}}},Vc=class e{constructor(e){this.$element=e}$element;ngTemplateOutletContext=null;ngTemplateOutlet=null;_embedViewRef;$onChanges(){if(this._embedViewRef?.destroy(),this._embedViewRef=void 0,!this.ngTemplateOutlet)return;let e=n.default.extend({},this.ngTemplateOutletContext);this._embedViewRef=this.ngTemplateOutlet.createEmbeddedView(e),this.$element.after(this._embedViewRef.rootNodes)}$onDestroy(){this._embedViewRef?.destroy()}static get $inject(){return[`$element`]}static get $name(){return`ngTemplateOutlet`}static $factory(){return{bindToController:{ngTemplateOutlet:`<`,ngTemplateOutletContext:`<?`},scope:!0,controller:e,restrict:`A`}}},W=n.default.module(`ng.common`,[Lc.name]);W.directive(Oc.$name,Oc.$factory),W.directive(Vc.$name,Vc.$factory),W.directive(Bc.$name,Bc.$factory),W.directive(zc.$name,zc.$factory);var Hc=`bottom`,Uc=`right`,Wc=`left`,Gc=`auto`,Kc=[`top`,Hc,Uc,Wc],qc=`start`,Jc=`clippingParents`,Yc=`viewport`,Xc=`popper`,Zc=`reference`,Qc=Kc.reduce(function(e,t){return e.concat([t+`-`+qc,t+`-end`])},[]),$c=[].concat(Kc,[Gc]).reduce(function(e,t){return e.concat([t,t+`-`+qc,t+`-end`])},[]),el=[`beforeRead`,`read`,`afterRead`,`beforeMain`,`main`,`afterMain`,`beforeWrite`,`write`,`afterWrite`];function tl(e){return e?(e.nodeName||``).toLowerCase():null}function nl(e){if(e==null)return window;if(e.toString()!==`[object Window]`){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function rl(e){return e instanceof nl(e).Element||e instanceof Element}function il(e){return e instanceof nl(e).HTMLElement||e instanceof HTMLElement}function al(e){return typeof ShadowRoot>`u`?!1:e instanceof nl(e).ShadowRoot||e instanceof ShadowRoot}function ol(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];!il(i)||!tl(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];t===!1?i.removeAttribute(e):i.setAttribute(e,t===!0?``:t)}))})}function sl(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]=``,e},{});!il(r)||!tl(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}}var cl={name:`applyStyles`,enabled:!0,phase:`write`,fn:ol,effect:sl,requires:[`computeStyles`]};function ll(e){return e.split(`-`)[0]}var ul=Math.max,dl=Math.min,fl=Math.round;function pl(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+`/`+e.version}).join(` `):navigator.userAgent}function ml(){return!/^((?!chrome|android).)*safari/i.test(pl())}function hl(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&il(e)&&(i=e.offsetWidth>0&&fl(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&fl(r.height)/e.offsetHeight||1);var o=(rl(e)?nl(e):window).visualViewport,s=!ml()&&n,c=(r.left+(s&&o?o.offsetLeft:0))/i,l=(r.top+(s&&o?o.offsetTop:0))/a,u=r.width/i,d=r.height/a;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function gl(e){var t=hl(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function _l(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&al(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function vl(e){return nl(e).getComputedStyle(e)}function yl(e){return[`table`,`td`,`th`].indexOf(tl(e))>=0}function bl(e){return((rl(e)?e.ownerDocument:e.document)||window.document).documentElement}function xl(e){return tl(e)===`html`?e:e.assignedSlot||e.parentNode||(al(e)?e.host:null)||bl(e)}function Sl(e){return!il(e)||vl(e).position===`fixed`?null:e.offsetParent}function Cl(e){var t=/firefox/i.test(pl());if(/Trident/i.test(pl())&&il(e)&&vl(e).position===`fixed`)return null;var n=xl(e);for(al(n)&&(n=n.host);il(n)&&[`html`,`body`].indexOf(tl(n))<0;){var r=vl(n);if(r.transform!==`none`||r.perspective!==`none`||r.contain===`paint`||[`transform`,`perspective`].indexOf(r.willChange)!==-1||t&&r.willChange===`filter`||t&&r.filter&&r.filter!==`none`)return n;n=n.parentNode}return null}function wl(e){for(var t=nl(e),n=Sl(e);n&&yl(n)&&vl(n).position===`static`;)n=Sl(n);return n&&(tl(n)===`html`||tl(n)===`body`&&vl(n).position===`static`)?t:n||Cl(e)||t}function Tl(e){return[`top`,`bottom`].indexOf(e)>=0?`x`:`y`}function El(e,t,n){return ul(e,dl(t,n))}function Dl(e,t,n){var r=El(e,t,n);return r>n?n:r}function Ol(){return{top:0,right:0,bottom:0,left:0}}function kl(e){return Object.assign({},Ol(),e)}function Al(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var jl=function(e,t){return e=typeof e==`function`?e(Object.assign({},t.rects,{placement:t.placement})):e,kl(typeof e==`number`?Al(e,Kc):e)};function Ml(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,s=ll(n.placement),c=Tl(s),l=[`left`,`right`].indexOf(s)>=0?`height`:`width`;if(!(!a||!o)){var u=jl(i.padding,n),d=gl(a),f=c===`y`?`top`:Wc,p=c===`y`?Hc:Uc,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],h=o[c]-n.rects.reference[c],g=wl(a),_=g?c===`y`?g.clientHeight||0:g.clientWidth||0:0,v=m/2-h/2,y=u[f],b=_-d[l]-u[p],x=_/2-d[l]/2+v,S=El(y,x,b),C=c;n.modifiersData[r]=(t={},t[C]=S,t.centerOffset=S-x,t)}}function Nl(e){var t=e.state,n=e.options.element,r=n===void 0?`[data-popper-arrow]`:n;r!=null&&(typeof r==`string`&&(r=t.elements.popper.querySelector(r),!r)||_l(t.elements.popper,r)&&(t.elements.arrow=r))}var Pl={name:`arrow`,enabled:!0,phase:`main`,fn:Ml,effect:Nl,requires:[`popperOffsets`],requiresIfExists:[`preventOverflow`]};function Fl(e){return e.split(`-`)[1]}var Il={top:`auto`,right:`auto`,bottom:`auto`,left:`auto`};function Ll(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:fl(n*i)/i||0,y:fl(r*i)/i||0}}function Rl(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,h=m===void 0?0:m,g=typeof u==`function`?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var _=o.hasOwnProperty(`x`),v=o.hasOwnProperty(`y`),y=Wc,b=`top`,x=window;if(l){var S=wl(n),C=`clientHeight`,ee=`clientWidth`;if(S===nl(n)&&(S=bl(n),vl(S).position!==`static`&&s===`absolute`&&(C=`scrollHeight`,ee=`scrollWidth`)),S=S,i===`top`||(i===`left`||i===`right`)&&a===`end`){b=Hc;var te=d&&S===x&&x.visualViewport?x.visualViewport.height:S[C];h-=te-r.height,h*=c?1:-1}if(i===`left`||(i===`top`||i===`bottom`)&&a===`end`){y=Uc;var w=d&&S===x&&x.visualViewport?x.visualViewport.width:S[ee];p-=w-r.width,p*=c?1:-1}}var ne=Object.assign({position:s},l&&Il),T=u===!0?Ll({x:p,y:h},nl(n)):{x:p,y:h};if(p=T.x,h=T.y,c){var E;return Object.assign({},ne,(E={},E[b]=v?`0`:``,E[y]=_?`0`:``,E.transform=(x.devicePixelRatio||1)<=1?`translate(`+p+`px, `+h+`px)`:`translate3d(`+p+`px, `+h+`px, 0)`,E))}return Object.assign({},ne,(t={},t[b]=v?h+`px`:``,t[y]=_?p+`px`:``,t.transform=``,t))}function zl(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0||r,a=n.adaptive,o=a===void 0||a,s=n.roundOffsets,c=s===void 0||s,l={placement:ll(t.placement),variation:Fl(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy===`fixed`};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Rl(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Rl(Object.assign({},l,{offsets:t.modifiersData.arrow,position:`absolute`,adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Bl={name:`computeStyles`,enabled:!0,phase:`beforeWrite`,fn:zl,data:{}},Vl={passive:!0};function Hl(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0||i,o=r.resize,s=o===void 0||o,c=nl(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(e){e.addEventListener(`scroll`,n.update,Vl)}),s&&c.addEventListener(`resize`,n.update,Vl),function(){a&&l.forEach(function(e){e.removeEventListener(`scroll`,n.update,Vl)}),s&&c.removeEventListener(`resize`,n.update,Vl)}}var Ul={name:`eventListeners`,enabled:!0,phase:`write`,fn:function(){},effect:Hl,data:{}},Wl={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Gl(e){return e.replace(/left|right|bottom|top/g,function(e){return Wl[e]})}var Kl={start:`end`,end:`start`};function ql(e){return e.replace(/start|end/g,function(e){return Kl[e]})}function Jl(e){var t=nl(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Yl(e){return hl(bl(e)).left+Jl(e).scrollLeft}function Xl(e,t){var n=nl(e),r=bl(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=ml();(l||!l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s+Yl(e),y:c}}function Zl(e){var t=bl(e),n=Jl(e),r=e.ownerDocument?.body,i=ul(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=ul(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-n.scrollLeft+Yl(e),s=-n.scrollTop;return vl(r||t).direction===`rtl`&&(o+=ul(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:o,y:s}}function Ql(e){var t=vl(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function $l(e){return[`html`,`body`,`#document`].indexOf(tl(e))>=0?e.ownerDocument.body:il(e)&&Ql(e)?e:$l(xl(e))}function eu(e,t){t===void 0&&(t=[]);var n=$l(e),r=n===e.ownerDocument?.body,i=nl(n),a=r?[i].concat(i.visualViewport||[],Ql(n)?n:[]):n,o=t.concat(a);return r?o:o.concat(eu(xl(a)))}function tu(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function nu(e,t){var n=hl(e,!1,t===`fixed`);return n.top+=e.clientTop,n.left+=e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function ru(e,t,n){return t===`viewport`?tu(Xl(e,n)):rl(t)?nu(t,n):tu(Zl(bl(e)))}function iu(e){var t=eu(xl(e)),n=[`absolute`,`fixed`].indexOf(vl(e).position)>=0&&il(e)?wl(e):e;return rl(n)?t.filter(function(e){return rl(e)&&_l(e,n)&&tl(e)!==`body`}):[]}function au(e,t,n,r){var i=t===`clippingParents`?iu(e):[].concat(t),a=[].concat(i,[n]),o=a[0],s=a.reduce(function(t,n){var i=ru(e,n,r);return t.top=ul(i.top,t.top),t.right=dl(i.right,t.right),t.bottom=dl(i.bottom,t.bottom),t.left=ul(i.left,t.left),t},ru(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ou(e){var t=e.reference,n=e.element,r=e.placement,i=r?ll(r):null,a=r?Fl(r):null,o=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(i){case`top`:c={x:o,y:t.y-n.height};break;case Hc:c={x:o,y:t.y+t.height};break;case Uc:c={x:t.x+t.width,y:s};break;case Wc:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var l=i?Tl(i):null;if(l!=null){var u=l===`y`?`height`:`width`;switch(a){case qc:c[l]=c[l]-(t[u]/2-n[u]/2);break;case`end`:c[l]=c[l]+(t[u]/2-n[u]/2)}}return c}function su(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,o=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?Jc:s,l=n.rootBoundary,u=l===void 0?Yc:l,d=n.elementContext,f=d===void 0?Xc:d,p=n.altBoundary,m=p!==void 0&&p,h=n.padding,g=h===void 0?0:h,_=kl(typeof g==`number`?Al(g,Kc):g),v=f===`popper`?Zc:Xc,y=e.rects.popper,b=e.elements[m?v:f],x=au(rl(b)?b:b.contextElement||bl(e.elements.popper),c,u,o),S=hl(e.elements.reference),C=ou({reference:S,element:y,strategy:`absolute`,placement:i}),ee=tu(Object.assign({},y,C)),te=f===`popper`?ee:S,w={top:x.top-te.top+_.top,bottom:te.bottom-x.bottom+_.bottom,left:x.left-te.left+_.left,right:te.right-x.right+_.right},ne=e.modifiersData.offset;if(f===`popper`&&ne){var T=ne[i];Object.keys(w).forEach(function(e){var t=[`right`,`bottom`].indexOf(e)>=0?1:-1,n=[`top`,`bottom`].indexOf(e)>=0?`y`:`x`;w[e]+=T[n]*t})}return w}function cu(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?$c:c,u=Fl(r),d=u?s?Qc:Qc.filter(function(e){return Fl(e)===u}):Kc,f=d.filter(function(e){return l.indexOf(e)>=0});f.length===0&&(f=d);var p=f.reduce(function(t,n){return t[n]=su(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[ll(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}function lu(e){if(ll(e)===`auto`)return[];var t=Gl(e);return[ql(e),t,ql(t)]}function uu(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o===void 0||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0||p,h=n.allowedAutoPlacements,g=t.options.placement,_=ll(g)===g,v=c||(_||!m?[Gl(g)]:lu(g)),y=[g].concat(v).reduce(function(e,n){return e.concat(ll(n)===`auto`?cu(t,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)},[]),b=t.rects.reference,x=t.rects.popper,S=new Map,C=!0,ee=y[0],te=0;te<y.length;te++){var w=y[te],ne=ll(w),T=Fl(w)===qc,E=[`top`,Hc].indexOf(ne)>=0,D=E?`width`:`height`,re=su(t,{placement:w,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),ie=E?T?Uc:Wc:T?Hc:`top`;b[D]>x[D]&&(ie=Gl(ie));var ae=Gl(ie),oe=[];if(a&&oe.push(re[ne]<=0),s&&oe.push(re[ie]<=0,re[ae]<=0),oe.every(function(e){return e})){ee=w,C=!1;break}S.set(w,oe)}if(C)for(var se=m?3:1,ce=function(e){var t=y.find(function(t){var n=S.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return ee=t,`break`},O=se;O>0&&ce(O)!==`break`;O--);t.placement!==ee&&(t.modifiersData[r]._skip=!0,t.placement=ee,t.reset=!0)}}var du={name:`flip`,enabled:!0,phase:`main`,fn:uu,requiresIfExists:[`offset`],data:{_skip:!1}};function fu(e,t,n){var r=ll(e),i=[`left`,`top`].indexOf(r)>=0?-1:1,a=typeof n==`function`?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o||=0,s=(s||0)*i,[`left`,`right`].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}function pu(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,o=$c.reduce(function(e,n){return e[n]=fu(n,t.rects,a),e},{}),s=o[t.placement],c=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}var mu={name:`offset`,enabled:!0,phase:`main`,requires:[`popperOffsets`],fn:pu};function hu(e){var t=e.state,n=e.name;t.modifiersData[n]=ou({reference:t.rects.reference,element:t.rects.popper,strategy:`absolute`,placement:t.placement})}var gu={name:`popperOffsets`,enabled:!0,phase:`read`,fn:hu,data:{}};function _u(e){return e===`x`?`y`:`x`}function vu(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o!==void 0&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0||f,m=n.tetherOffset,h=m===void 0?0:m,g=su(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),_=ll(t.placement),v=Fl(t.placement),y=!v,b=Tl(_),x=_u(b),S=t.modifiersData.popperOffsets,C=t.rects.reference,ee=t.rects.popper,te=typeof h==`function`?h(Object.assign({},t.rects,{placement:t.placement})):h,w=typeof te==`number`?{mainAxis:te,altAxis:te}:Object.assign({mainAxis:0,altAxis:0},te),ne=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,T={x:0,y:0};if(S){if(a){var E=b===`y`?`top`:Wc,D=b===`y`?Hc:Uc,re=b===`y`?`height`:`width`,ie=S[b],ae=ie+g[E],oe=ie-g[D],se=p?-ee[re]/2:0,ce=v===`start`?C[re]:ee[re],O=v===`start`?-ee[re]:-C[re],le=t.elements.arrow,ue=p&&le?gl(le):{width:0,height:0},de=t.modifiersData[`arrow#persistent`]?t.modifiersData[`arrow#persistent`].padding:Ol(),fe=de[E],pe=de[D],me=El(0,C[re],ue[re]),k=y?C[re]/2-se-me-fe-w.mainAxis:ce-me-fe-w.mainAxis,he=y?-C[re]/2+se+me+pe+w.mainAxis:O+me+pe+w.mainAxis,ge=t.elements.arrow&&wl(t.elements.arrow),_e=ge?b===`y`?ge.clientTop||0:ge.clientLeft||0:0,ve=ne?.[b]??0,ye=ie+k-ve-_e,be=ie+he-ve,xe=El(p?dl(ae,ye):ae,ie,p?ul(oe,be):oe);S[b]=xe,T[b]=xe-ie}if(s){var Se=b===`x`?`top`:Wc,Ce=b===`x`?Hc:Uc,we=S[x],Te=x===`y`?`height`:`width`,Ee=we+g[Se],De=we-g[Ce],Oe=[`top`,Wc].indexOf(_)!==-1,ke=ne?.[x]??0,Ae=Oe?Ee:we-C[Te]-ee[Te]-ke+w.altAxis,je=Oe?we+C[Te]+ee[Te]-ke-w.altAxis:De,Me=p&&Oe?Dl(Ae,we,je):El(p?Ae:Ee,we,p?je:De);S[x]=Me,T[x]=Me-we}t.modifiersData[r]=T}}var yu={name:`preventOverflow`,enabled:!0,phase:`main`,fn:vu,requiresIfExists:[`offset`]};function bu(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function xu(e){return e===nl(e)||!il(e)?Jl(e):bu(e)}function Su(e){var t=e.getBoundingClientRect(),n=fl(t.width)/e.offsetWidth||1,r=fl(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Cu(e,t,n){n===void 0&&(n=!1);var r=il(t),i=il(t)&&Su(t),a=bl(t),o=hl(e,i,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((tl(t)!==`body`||Ql(a))&&(s=xu(t)),il(t)?(c=hl(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):a&&(c.x=Yl(a))),{x:o.left+s.scrollLeft-c.x,y:o.top+s.scrollTop-c.y,width:o.width,height:o.height}}function wu(e){var t=new Map,n=new Set,r=[];e.forEach(function(e){t.set(e.name,e)});function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){n.has(e.name)||i(e)}),r}function Tu(e){var t=wu(e);return el.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}function Eu(e){var t;return function(){return t||=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})}),t}}function Du(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}var Ou={placement:`bottom`,modifiers:[],strategy:`absolute`};function ku(){return![...arguments].some(function(e){return!(e&&typeof e.getBoundingClientRect==`function`)})}function Au(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?Ou:i;return function(e,t,n){n===void 0&&(n=a);var i={placement:`bottom`,orderedModifiers:[],options:Object.assign({},Ou,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],s=!1,c={state:i,setOptions:function(n){var o=typeof n==`function`?n(i.options):n;u(),i.options=Object.assign({},a,i.options,o),i.scrollParents={reference:rl(e)?eu(e):e.contextElement?eu(e.contextElement):[],popper:eu(t)};var s=Tu(Du([].concat(r,i.options.modifiers)));return i.orderedModifiers=s.filter(function(e){return e.enabled}),l(),c.update()},forceUpdate:function(){if(!s){var e=i.elements,t=e.reference,n=e.popper;if(ku(t,n)){i.rects={reference:Cu(t,wl(n),i.options.strategy===`fixed`),popper:gl(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(e){return i.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<i.orderedModifiers.length;r++){if(i.reset===!0){i.reset=!1,r=-1;continue}var a=i.orderedModifiers[r],o=a.fn,l=a.options,u=l===void 0?{}:l,d=a.name;typeof o==`function`&&(i=o({state:i,options:u,name:d,instance:c})||i)}}}},update:Eu(function(){return new Promise(function(e){c.forceUpdate(),e(i)})}),destroy:function(){u(),s=!0}};if(!ku(e,t))return c;c.setOptions(n).then(function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)});function l(){i.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=n===void 0?{}:n,a=e.effect;if(typeof a==`function`){var s=a({state:i,name:t,instance:c,options:r});o.push(s||function(){})}})}function u(){o.forEach(function(e){return e()}),o=[]}return c}}var ju=Au({defaultModifiers:[Ul,gu,Bl,cl]}),Mu=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,G=(e,t,n,r)=>{for(var i=r>1?void 0:r?Nu(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Mu(t,n,i),i},Pu=class{constructor(){this.animation=!0}static get $name(){return`ngb.config.service`}},Fu=class{constructor(e){this.ngbConfig=e,this.closeOthers=!1,this.destroyOnHide=!0}get animation(){return this._animation??this.ngbConfig.animation}set animation(e){this._animation=e}static get $inject(){return[Pu.$name]}static get $name(){return`ngb.accordion.config.service`}},Iu=class e{constructor(e){this.$element=e,this._viewRef=null}$postLink(){this.$element.addClass(`accordion-body`)}$doCheck(){this.detectChanges()}detectChanges(){if(this._bodyTpl){if(this.item._shouldBeInDOM){this._createViewIfNotExists();return}this._destroyViewIfExists()}}$onDestroy(){this._destroyViewIfExists()}_destroyViewIfExists(){this._viewRef?.destroy(),this._viewRef=null}_createViewIfNotExists(){this._viewRef||(this._viewRef=this._vcr.createEmbeddedView(this._bodyTpl),this._viewRef.detectChanges())}static get $name(){return`ngbAccordionBody`}static get $inject(){return[`$element`]}static get $factory(){return()=>({controller:e,bindToController:!0,controllerAs:`$`,require:{item:`^^ngbAccordionItem`},scope:!0,restrict:`A`,transclude:!0,template:`
        <ng-container ng-ref="container" ng-ref-read="viewContainerRef"></ng-container>
        <ng-content></ng-content>
      `})}};G([dc(`container`,{read:Dc,static:!0})],Iu.prototype,`_vcr`,2),G([Ks(Oc,{static:!0})],Iu.prototype,`_bodyTpl`,2);var Lu=Iu,Ru=`<section
    role="region"
    class="accordion-collapse"
    ng-attr-id="{{ $.item.collapseId }}"
    ng-attr-aria-labelledby="{{ $.item.toggleId }}"
    ngb-collapse="$.item.collapsed">
    <ng-content></ng-content>
</section>
`,zu=class{constructor(e){this.ngbConfig=e,this.horizontal=!1}get animation(){return this._animation??this.ngbConfig.animation}set animation(e){this._animation=e}static get $inject(){return[Pu.$name]}static get $name(){return`ngb.collapse.config.service`}},Bu=[`a[href]`,`button:not([disabled])`,`input:not([disabled]):not([type="hidden"])`,`select:not([disabled])`,`textarea:not([disabled])`,`[contenteditable]`,`[tabindex]:not([tabindex="-1"])`].join(`, `);function Vu(e){let t=Array.from(e.querySelectorAll(Bu)).filter(e=>e.tabIndex!==-1);return[t[0],t[t.length-1]]}var Hu=(e,t,n,r=!1)=>{e.runOutsideAngular(()=>{let e=qo(t,`focusin`).pipe(V(n),B(e=>e.target));qo(t,`keydown`).pipe(V(n),rs(e=>e.key===`Tab`),Ss(e)).subscribe(([e,n])=>{let[r,i]=Vu(t);(n===r||n===t)&&e.shiftKey&&(i.focus(),e.preventDefault()),n===i&&!e.shiftKey&&(r.focus(),e.preventDefault())}),r&&qo(t,`click`).pipe(V(n),Ss(e),B(e=>e[1])).subscribe(e=>e.focus())})};function Uu(e,t){if(typeof navigator>`u`)return`0px`;let n=e.hasClass(`show`);n||e.addClass(`show`),e.css({[t]:``});let r=`${q(e).getBoundingClientRect()[t]}px`;return n||e.removeClass(`show`),r}function Wu(e,t,r){let i=()=>{if(e.addClass(`collapse`),r.direction===`show`){e.addClass(`show`);return}e.removeClass(`show`)};if(!t){i();return}if(!r.maxSize){let t=Uu(e,r.dimension);n.default.extend(r,{maxSize:t}),e.css({[r.dimension]:r.direction===`show`?`0px`:t}),e.removeClass(`collapse collapsing show`),Xu(e),e.addClass(`collapsing`)}if(!r.maxSize)throw Error(`[ngb-transition]: context.maxSize was undefined`);return e.css({[r.dimension]:r.direction===`show`?r.maxSize:`0px`}),()=>{i(),e.removeClass(`collapsing`),e.css({[r.dimension]:``})}}function Gu(e){let{transitionDelay:t,transitionDuration:n}=window.getComputedStyle(e);return(parseFloat(t)+parseFloat(n))*1e3}var Ku=n.default.noop,qu={getTransitionTimerDelayMs:()=>5},Ju=new Map;function K(e,t,r,i){let a=i.context??{},o=q(t),s=Ju.get(o);if(s){if(i.runningTransition===`continue`)return Ha;e.run(()=>s.transition$.complete()),a=n.default.extend(s.context,a),Ju.delete(o)}let c=r(t,i.animation,a)||Ku;if(!i.animation||window.getComputedStyle(o).transitionProperty===`none`)return e.run(()=>c()),wo(void 0).pipe(Zu(e));let l=new z,u=new z,d=l.pipe(_s(!0));Ju.set(o,{transition$:l,complete:()=>{u.next(),u.complete()},context:a});let f=Gu(o);return e.runOutsideAngular(()=>{let t=qo(o,`transitionend`).pipe(V(d),rs(({target:e})=>e===o));is(Qo(f+qu.getTransitionTimerDelayMs()).pipe(V(d)),t,u).pipe(V(d)).subscribe(()=>{Ju.delete(o),e.run(()=>{c(),l.next(),l.complete()})})}),l.asObservable()}function Yu(e){Ju.get(q(e))?.complete()}function Xu(e){return(q(e)||document.body).getBoundingClientRect()}function Zu(e){return t=>new L(n=>t.subscribe({next:t=>e.run(()=>n.next(t)),error:t=>e.run(()=>n.error(t)),complete:()=>e.run(()=>n.complete())}))}function Qu(e,t,n=0){return Math.max(Math.min(e,t),n)}function q(e){let[t]=Array.from(e);return t}function J(e){return typeof e==`number`&&Number.isFinite(e)&&Math.floor(e)===e&&n.default.isNumber(e)}function $u(e){return e==null?``:`${e}`}function ed(e){return Y(e)?`0${e}`.slice(-2):``}function td(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,`\\$&`)}function nd(e){return e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``)}function rd(e,t){if(!t)return null;let n=q(e);return n.closest===void 0?null:n.closest(t)}function id(e){return parseInt(`${e}`,10)}function Y(e){return!Number.isNaN(id(e))}function ad(e){return e.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase()}function od(e=document){let t=e?.activeElement;return t?t.shadowRoot?od(t.shadowRoot):t:null}function sd(e,t,...n){for(let r of n)if(r){e.attr(t,r);return}e.removeAttr(t)}var cd=class e{constructor(e,t,n,r){this.$element=e,this.ngbCollapseConfig=t,this.$log=n,this._ngZone=r,this.hidden=new z,this.shown=new z,this._afterInit=!1,this._isCollapsed=!1}$onInit(){this.animation=this.animation??this.ngbCollapseConfig.animation,this.horizontal=this.horizontal??this.ngbCollapseConfig.horizontal,this.$element.toggleClass(`collapse-horizontal`,this.horizontal),this._runTransition(this._isCollapsed,!1),this._afterInit=!0}$onChanges(){this.$element.toggleClass(`collapse-horizontal`,!!this.horizontal)}$onDestroy(){this.hidden.complete(),this.shown.complete()}set collapsed(e){e!==void 0&&e!==this._isCollapsed&&(this._isCollapsed=e,this._afterInit&&this._runTransitionWithEvents(e,this.animation??this.ngbCollapseConfig.animation))}toggle(e=this._isCollapsed){this.collapsed=!e,this.ngbCollapseChange?.({$event:this._isCollapsed})}_runTransitionWithEvents(e,t){this._runTransition(e,t).subscribe(()=>{if(e){this.hiddenCallback?.(),this.hidden.next(),this.$log.log(`[ngb.collapse]: collapse was hidden`);return}this.shownCallback?.(),this.shown.next(),this.$log.log(`[ngb.collapse]: collapse was shown`)})}_runTransition(e,t){return K(this._ngZone,this.$element,Wu,{animation:t,runningTransition:`stop`,context:{direction:e?`hide`:`show`,dimension:this.horizontal?`width`:`height`}})}static get $inject(){return[`$element`,zu.$name,`$log`,U.$name]}static get $factory(){return()=>({controller:e,restrict:`A`,scope:{animation:`<?`,horizontal:`<?`,collapsed:`<ngbCollapse`,hiddenCallback:`&?ngbHidden`,ngbCollapseChange:`&?`,shownCallback:`&?shown`},bindToController:!0})}static get $name(){return`ngbCollapse`}},ld=class e{static get $name(){return`ngbAccordionCollapse`}static get $inject(){return[]}static get $factory(){return()=>({bindToController:!0,scope:!0,require:{item:`^ngbAccordionItem`},restrict:`A`,transclude:!0,controllerAs:`$`,template:Ru,controller:e})}};G([dc(cd,{static:!0})],ld.prototype,`ngbCollapse`,2);var ud=ld,dd=0,fd=class e{constructor(e){this.$element=e,this._collapsed=!0,this._collapseAnimationRunning=!1}$postLink(){this._id=this._id??`ngb-accordion-item-${dd++}`,this.$element.attr(`id`,this._id),this.$element.addClass(`accordion-item`);let{ngbCollapse:e}=this._collapse;e.animation=!1,e.collapsed=this.collapsed,e.animation=this._accordion.animation,this._collapseHiddenSubscription=e.hidden.subscribe(()=>this.onCollapseHidden()),this._collapseShownSubscription=e.shown.subscribe(()=>this.onCollapseShown())}$onDestroy(){this._collapseHiddenSubscription?.unsubscribe(),this._collapseShownSubscription?.unsubscribe()}set id(e){!n.default.isString(e)||e===``||(this._id=e)}set destroyOnHide(e){this._destroyOnHide=e}get destroyOnHide(){return n.default.isUndefined(this._destroyOnHide)?!!this._accordion.destroyOnHide:!!this._destroyOnHide}set collapsed(e){if(e!==void 0){if(!this._accordion){this._collapsed=e;return}if(e){this.collapse();return}this.expand()}}get collapsed(){return this._collapsed}get id(){return`${this._id}`}get toggleId(){return`${this.id}-toggle`}get collapseId(){return`${this.id}-collapse`}get _shouldBeInDOM(){return!this.collapsed||this._collapseAnimationRunning||!this.destroyOnHide}isDisabled(){return this.ngDisabled?.disabled??!1}toggle(){this.collapsed=!this.collapsed}onCollapseHidden(){this._collapseAnimationRunning=!1,this.hidden?.(),this._accordion.hidden?.({$event:this.id})}onCollapseShown(){this.shown?.(),this._accordion.shown?.({$event:this.id})}expand(){this.collapsed&&this._accordion._ensureCanExpand(this)&&(this._collapsed=!1,this._body?.detectChanges(),this.show?.(),this._accordion.show?.({$event:this.id}),this._collapse.ngbCollapse.animation=this._accordion.animation,this._collapse.ngbCollapse.collapsed=!1)}collapse(){this.collapsed||(this._collapsed=!0,this._collapseAnimationRunning=!0,this.hide?.(),this._accordion.hide?.({$event:this.id}),this._collapse.ngbCollapse.animation=this._accordion.animation,this._collapse.ngbCollapse.collapsed=!0)}static get $inject(){return[`$element`]}static get $name(){return`ngbAccordionItem`}static get $factory(){return()=>({bindToController:!0,controller:e,require:{_accordion:`^ngbAccordion`,ngDisabled:`?ngDisabled`},restrict:`A`,transclude:!0,template:`<ng-content></ng-content>`,scope:{collapsed:`<?`,destroyOnHide:`<?`,id:`<?ngbAccordionItem`,hidden:`&?`,hide:`&?`,show:`&?`,shown:`&?`}})}};G([Ks(ud,{static:!0})],fd.prototype,`_collapse`,2),G([Ks(Lu,{static:!0})],fd.prototype,`_body`,2);var pd=fd,md=class e{constructor(e,t){this.$element=e,this.ngbAccordionConfig=t,this._anItemWasAlreadyExpandedDuringInitialization=!1}$onInit(){this.animation=this.animation??this.ngbAccordionConfig.animation,this.closeOthers=this.closeOthers??this.ngbAccordionConfig.closeOthers,this.destroyOnHide=this.destroyOnHide??this.ngbAccordionConfig.destroyOnHide}$postLink(){this.$element.addClass(`accordion`)}toggle(e){this._getItem(e)?.toggle()}expand(e){this._getItem(e)?.expand()}expandAll(){if(!this.closeOthers){this._items.forEach(e=>{e.expand()});return}this._items.find(e=>!e.collapsed)||this._items.first?.expand()}collapse(e){this._getItem(e)?.collapse()}collapseAll(){this._items.forEach(e=>{e.collapse()})}isExpanded(e){let t=this._getItem(e);return t?!t.collapsed:!1}_ensureCanExpand(e){return this.closeOthers?this._items.length===0?!this._anItemWasAlreadyExpandedDuringInitialization&&(this._anItemWasAlreadyExpandedDuringInitialization=!0,!0):(this._items.find(t=>!t.collapsed&&e!==t)?.collapse(),!0):!0}_getItem(e){return this._items.find(t=>t.id===e)}static get $name(){return`ngbAccordion`}static get $factory(){return()=>({bindToController:!0,controller:e,restrict:`A`,transclude:!0,template:`<ng-content></ng-content>`,scope:{animation:`<?`,closeOthers:`<?`,destroyOnHide:`<?`,hidden:`&?`,hide:`&?`,show:`&?`,shown:`&?`}})}static get $inject(){return[`$element`,Fu.$name]}};G([$s(pd,{descendants:!1})],md.prototype,`_items`,2);var hd=md,gd=class e{constructor(e,t){this.$element=e,this.$scope=t}$postLink(){this.$element.attr(`type`,`button`),this.$element.addClass(`accordion-button`),this.disableWatcher=this.$scope.$watch(()=>this.item.isDisabled(),e=>{this.$element.prop(`disabled`,!!e)}),this.stateWatcher=this.$scope.$watchGroup([()=>this.item.collapsed,()=>this.item.collapseId],e=>{let[t,n]=e;this.$element.toggleClass(`collapsed`,!!t),this.$element.attr(`aria-controls`,`${n}`),this.$element.attr(`aria-expanded`,`${!t}`)}),this.clickHandler=()=>this.$scope.$evalAsync(()=>{this.item.isDisabled()||this.accordion.toggle(this.item.id)}),this.$element.on(`click`,this.clickHandler)}$onDestroy(){this.clickHandler&&this.$element.off(`click`,this.clickHandler),this.disableWatcher?.(),this.stateWatcher?.()}static get $name(){return`ngbAccordionButton`}static get $inject(){return[`$element`,`$scope`]}static get $factory(){return()=>({controller:e,bindToController:!0,restrict:`A`,controllerAs:`$`,require:{item:`^^ngbAccordionItem`,accordion:`^^ngbAccordion`},scope:!0})}},_d=class e{constructor(e,t){this.$element=e,this.$scope=t}$postLink(){this.$element.addClass(`accordion-header`),this.$element.attr(`role`,`heading`),this.collapseWatcher=this.$scope.$watch(()=>this.item.collapsed,e=>{this.$element.toggleClass(`collapsed`,e)})}$onDestroy(){this.collapseWatcher?.()}static get $name(){return`ngbAccordionHeader`}static get $inject(){return[`$element`,`$scope`]}static get $factory(){return()=>({bindToController:!0,require:{item:`^ngbAccordionItem`},controller:e,restrict:`A`})}},vd=class e{constructor(e,t){this.$element=e,this.$scope=t}$postLink(){this.$element.attr(`id`,this.item.toggleId),this.$element.attr(`aria-controls`,this.item.collapseId);let e=[()=>this.item.collapsed,()=>this.item.collapseId,()=>this.item.isDisabled()];this.stateWatcher=this.$scope.$watchGroup(e,e=>{let[t,n]=e;this.$element.toggleClass(`collapsed`,!!t),this.$element.attr(`aria-controls`,`${n}`),this.$element.attr(`aria-expanded`,`${!t}`)}),this.clickHandler=()=>{this.$scope.$evalAsync(()=>{this.item.isDisabled()||this.accordion.toggle(this.item.id)})},this.$element.on(`click`,this.clickHandler)}$onDestroy(){this.clickHandler&&this.$element.off(`click`,this.clickHandler),this.stateWatcher?.()}static get $name(){return`ngbAccordionToggle`}static get $factory(){return()=>({bindToController:!0,controller:e,controllerAs:`$`,require:{item:`^^ngbAccordionItem`,accordion:`^^ngbAccordion`},scope:!0,restrict:`A`})}static get $inject(){return[`$element`,`$scope`]}},yd=n.default.module(`ngb.collapse`,[Lc.name]);yd.directive(cd.$name,cd.$factory),yd.service(zu.$name,zu);var bd=n.default.module(`ngb.accordion`,[W.name,yd.name]);bd.service(Fu.$name,Fu),bd.directive(Lu.$name,Lu.$factory),bd.directive(gd.$name,gd.$factory),bd.directive(ud.$name,ud.$factory),bd.directive(_d.$name,_d.$factory),bd.directive(pd.$name,pd.$factory),bd.directive(vd.$name,vd.$factory),bd.directive(hd.$name,hd.$factory);var xd=`<ng-content></ng-content>
\r
<button ng-if="$.dismissible" ng-click="$.close()" type="button" class="btn-close" aria-label="Close">\r
</button>
`,Sd=class{constructor(e){this.ngbConfig=e,this.dismissible=!0,this.type=`warning`}get animation(){return this._animation??this.ngbConfig.animation}set animation(e){this._animation=e}static get $name(){return`ngb.alert.config.service`}static get $inject(){return[Pu.$name]}},Cd=e=>{e.removeClass(`show`)},wd=class e{constructor(e,t,n,r){this.$element=e,this.ngbAlertConfig=t,this.$log=n,this._ngZone=r}$onInit(){this.animation=this.animation??this.ngbAlertConfig.animation,this.dismissible=this.dismissible??this.ngbAlertConfig.dismissible,this.type=this.type??this.ngbAlertConfig.type}$postLink(){this.$element.attr(`role`,`alert`),this.$element.addClass(`alert d-block show`);let e=`alert-${this.type}`;this.$element.addClass(e)}$onChanges(){this.$element.toggleClass(`fade`,this.animation),this.$element.toggleClass(`alert-dismissible`,this.dismissible)}close(){let e=K(this._ngZone,this.$element,Cd,{animation:this.animation??this.ngbAlertConfig.animation,runningTransition:`continue`});return e.subscribe(()=>{this.closed?.(),this.$log.info(`[ngb.alert]: was closed`)}),e}static get $name(){return`ngbAlert`}static get $inject(){return[`$element`,Sd.$name,`$log`,U.$name]}static get $factory(){return{bindings:{animation:`<?`,dismissible:`<?`,type:`@?`,closed:`&?`},transclude:!0,controller:e,controllerAs:`$`,template:xd}}},Td=n.default.module(`ngb.alert`,[W.name]);Td.component(wd.$name,wd.$factory),Td.service(Sd.$name,Sd);var Ed=`<div class="carousel-indicators" ng-class="{ 'visually-hidden': !$.showNavigationIndicators }" role="tablist">\r
    <button title="indicator {{ $index }}" ng-repeat="$slide in $.slides.toArray() track by $index" type="button" data-bs-target
        ng-class="{ 'active': $slide.id === $.activeId }" role="tab" ng-attr-aria-labelledby="slide-{{ $slide.id }}"\r
        ng-attr-aria-controls="slide-{{ $slide.id }}" ng-attr-aria-selected="{{ $slide.id === $.activeId }}"\r
        ng-click="$.focus(); $.select($slide.id, $.NgbSlideEventSource.INDICATOR)"></button>\r
</div>\r
\r
<div class="carousel-inner">\r
    <div ng-repeat="$slide in $.slides.toArray() track by $index" ng-init="$count = $.slides.length" class="carousel-item"
        ng-attr-id="slide-{{ $slide.id }}" role="tabpanel">\r
        <span class="visually-hidden">\r
            Slide {{ $index + 1 }} of {{ $count }}\r
        </span>\r
\r
        <ng-container ng-template-outlet="$.getSlideTemplate($index)"></ng-container>
    </div>\r
</div>\r
\r
<button ng-if="$.showNavigationArrows" class="carousel-control-prev" type="button"
    ng-attr-aria-labelledby="{{ $.id }}-previous" ng-click="$.arrowLeft()">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\r
    <span class="visually-hidden" ng-attr-id="{{ $.id }}-previous">Previous</span>\r
</button>\r
\r
<button ng-if="$.showNavigationArrows" class="carousel-control-next" type="button"\r
    ng-attr-aria-labelledby="{{ $.id }}-next" ng-click="$.arrowRight()">\r
    <span class="carousel-control-next-icon" aria-hidden="true"></span>\r
    <span class="visually-hidden" ng-attr-id="{{ $.id }}-next">Next</span>\r
</button>\r
\r
<ng-content></ng-content>
`,Dd=class{constructor(e){this.ngbConfig=e,this.interval=5e3,this.wrap=!0,this.keyboard=!0,this.pauseOnFocus=!0,this.pauseOnHover=!0,this.showNavigationArrows=!0,this.showNavigationIndicators=!0}get animation(){return this._animation??this.ngbConfig.animation}set animation(e){this._animation=e}static get $inject(){return[Pu.$name]}static get $name(){return`ngb.carousel.config.service`}};function Od(e){return e.hasClass(`carousel-item-start`)||e.hasClass(`carousel-item-end`)}function kd(e){e.removeClass(`carousel-item-start carousel-item-end`)}function Ad(e){kd(e),e.removeClass(`carousel-item-prev carousel-item-next`)}var jd=(e,t,{direction:n})=>{if(!t){Ad(e),e.addClass(`active`);return}return Od(e)?kd(e):(e.addClass(`carousel-item-${n===`start`?`next`:`prev`}`),Xu(e),e.addClass(`carousel-item-${n}`)),()=>{Ad(e),e.addClass(`active`)}},Md=(e,t,{direction:n})=>{if(!t){Ad(e),e.removeClass(`active`);return}return Od(e)?kd(e):e.addClass(`carousel-item-${n}`),()=>{Ad(e),e.removeClass(`active`)}},Nd=0,Pd=class e{$onInit(){this.id=this.id??`ngb-slide-${Nd++}`}static get $factory(){return()=>({controller:e,scope:!0,bindToController:{slid:`&?`,id:`@?`},require:{carousel:`^^ngbCarousel`},restrict:`A`})}static get $name(){return`ngbSlide`}},Fd=0,Id=class e{constructor(e,t,n,r,i){this.$element=e,this.$scope=t,this.$ngbCarouselConfig=n,this._ngZone=r,this._changeDetector=i,this.NgbSlideEventSource=Rd,this.slides=new Ys,this._transitionIds=null,this._interval$=new Na(0),this._mouseHover$=new Na(!1),this._focused$=new Na(!1),this._pauseOnHover$=new Na(!1),this._pauseOnFocus$=new Na(!1),this._pause$=new Na(!1),this._wrap$=new Na(!1),this._activeId$=new Na(``),this._slides$=new Na([]),this._destroy$=new z}$onInit(){this.animation=this.animation??this.$ngbCarouselConfig.animation,this.interval=this.interval??this.$ngbCarouselConfig.interval,this.keyboard=this.keyboard??this.$ngbCarouselConfig.keyboard,this.pauseOnFocus=this.pauseOnFocus??this.$ngbCarouselConfig.pauseOnFocus,this.pauseOnHover=this.pauseOnHover??this.$ngbCarouselConfig.pauseOnHover,this.showNavigationArrows=this.showNavigationArrows??this.$ngbCarouselConfig.showNavigationArrows,this.showNavigationIndicators=this.showNavigationIndicators??this.$ngbCarouselConfig.showNavigationIndicators,this.wrap=this.wrap??this.$ngbCarouselConfig.wrap,this._interval$.next(this.interval),this._pauseOnHover$.next(this.pauseOnHover),this._pauseOnFocus$.next(this.pauseOnFocus),this._wrap$.next(this.wrap),this._activeId$.next(this.activeId??``),this.id=`ngb-carousel-${Fd++}`}$onChanges(e){e.interval&&this._interval$.next(this.interval),e.wrap&&this._wrap$.next(this.wrap),e.pauseOnHover&&this._pauseOnHover$.next(this.pauseOnHover),e.pauseOnFocus&&this._pauseOnFocus$.next(this.pauseOnFocus)}$postLink(){this.$element.addClass(`carousel slide`),this.$element.css(`display`,`block`),this.$element.attr(`tabindex`,0),this._container=this.$element,this.$element.on(`keydown`,e=>{if(!this.keyboard)return;let t={ArrowRight:()=>this.arrowRight(),ArrowLeft:()=>this.arrowLeft()}[e.key];t&&(e.preventDefault(),t())}),this.$element.on(`mouseenter`,()=>this._mouseHover$.next(!0)),this.$element.on(`mouseleave`,()=>this._mouseHover$.next(!1)),this.$element.on(`focusin`,()=>this._focused$.next(!0)),this.$element.on(`focusout`,()=>this._focused$.next(!1));let e=Io([this._activeId$,this._wrap$,this._slides$]).pipe(B(([e,t,n])=>{let r=n.findIndex(t=>t.id===e);return t?n.length>1:r<n.length-1}),hs());Io([this._pause$,this._pauseOnHover$,this._mouseHover$,this._pauseOnFocus$,this._focused$,this._interval$,e]).pipe(B(([e,t,n,r,i,a,o])=>e||t&&n||r&&i||!o?0:a),hs(),bs(e=>e>0?Qo(e,e):es),V(this._destroy$)).subscribe(()=>{this._ngZone.run(()=>this.next(`timer`))}),this._slides$.pipe(ys(1),V(this._destroy$)).subscribe(()=>{this._transitionIds?.forEach(e=>{Yu(this._getSlideElement(e))}),this._transitionIds=null,this.$scope.$$postDigest(()=>this._syncActiveSlideClass())}),this._syncSlides(),this.contentSlides.changes.pipe(V(this._destroy$)).subscribe(()=>this._syncSlides()),this.slides.changes.pipe(V(this._destroy$)).subscribe(e=>{this._slides$.next(e.toArray())}),this._slides$.next(this.slides.toArray()),this.$scope.$$postDigest(()=>this._syncActiveSlideClass())}$doCheck(){let e=this._getSlideById(this.activeId),t=e?e.id:this.slides.first?.id??``;t!==this.activeId&&(this.activeId=t,this._activeId$.next(t))}$onDestroy(){this.$element.off(`keydown`),this.$element.off(`mouseenter`),this.$element.off(`mouseleave`),this.$element.off(`focusin`),this.$element.off(`focusout`),this._destroy$.next(),this._destroy$.complete(),this.slides.destroy()}focus(){if(!this._container)throw Error(`[ngb-carousel]: container do not exist`);q(this._container).focus()}arrowLeft(){this.focus(),this.prev(`arrowLeft`)}arrowRight(){this.focus(),this.next(`arrowRight`)}prev(e){this._cycleToSelected(this._getPrevSlide(this.activeId),`end`,e)}next(e){this._cycleToSelected(this._getNextSlide(this.activeId),`start`,e)}select(e,t){this._cycleToSelected(e,this._getSlideEventDirection(this.activeId,e),t)}cycle(){this._pause$.next(!1)}pause(){this._pause$.next(!0)}getSlideTemplate(e){let t=this.slides.get(e),n=t?this.contentSlides.toArray().indexOf(t):-1;return n>=0?this.slideTemplates.get(n):void 0}_syncSlides(){this.slides.reset(this.contentSlides.filter(e=>e.carousel===this)),this.slides.notifyOnChanges()}_syncActiveSlideClass(){if(!(this._transitionIds||!this.activeId))for(let e of this.slides)this._findSlideElement(e.id)?.toggleClass(`active`,e.id===this.activeId)}_cycleToSelected(e,t,n){let r=this._transitionIds;if(r&&(r[0]!==e||r[1]!==this.activeId))return;let i=this._getSlideById(e);if(i&&i.id!==this.activeId){this._transitionIds=[this.activeId??``,e],this.slide?.({$event:{prev:this.activeId??``,current:i.id,direction:t,paused:this._pause$.value,source:n}});let r={animation:this.animation??this.$ngbCarouselConfig.animation,runningTransition:`stop`,context:{direction:t}},a=[],o=this._getSlideById(this.activeId);if(o){let e=K(this._ngZone,this._getSlideElement(o.id),Md,r);e.subscribe(()=>o.slid?.({$event:{direction:t,source:n,isShown:!1}})),a.push(e)}let s=this.activeId;this.activeId=i.id,this._activeId$.next(this.activeId);let c=this._getSlideById(this.activeId),l=K(this._ngZone,this._getSlideElement(i.id),jd,r);l.subscribe(()=>c?.slid?.({$event:{isShown:!0,direction:t,source:n}})),a.push(l),os(...a).pipe(us(1)).subscribe(()=>{this._transitionIds=null,this.slid?.({$event:{prev:s??``,current:i.id,direction:t,paused:this._pause$.value,source:n}})})}this._changeDetector.markForCheck()}_getSlideEventDirection(e,t){return this._getSlideIdxById(e)>this._getSlideIdxById(t)?`end`:`start`}_getNextSlide(e){let t=this.slides.toArray(),n=this._getSlideIdxById(e);return n===t.length-1?this.wrap?t[0].id:t[t.length-1].id:t[n+1].id}_getPrevSlide(e){let t=this.slides.toArray(),n=this._getSlideIdxById(e);return n===0?this.wrap?t[t.length-1].id:t[0].id:t[n-1].id}_getSlideElement(e){let t=this._findSlideElement(e);if(!t)throw Error(`[ngb-carousel]: ngb-slide id not found`);return t}_findSlideElement(e){if(!this._container)return null;let t=q(this._container).querySelector(`#slide-${e}`);return t?n.default.element(t):null}_getSlideById(e){return this.slides.find(t=>t.id===e)||null}_getSlideIdxById(e){let t=this._getSlideById(e);return t==null?-1:this.slides.toArray().indexOf(t)}static get $name(){return`ngbCarousel`}static get $factory(){return{controllerAs:`$`,controller:e,transclude:!0,bindings:{activeId:`@?`,animation:`<?`,interval:`<?`,keyboard:`<?`,pauseOnFocus:`<?`,pauseOnHover:`<?`,showNavigationArrows:`<?`,showNavigationIndicators:`<?`,wrap:`<?`,slid:`&?`,slide:`&?`},template:Ed}}static get $inject(){return[`$element`,`$scope`,Dd.$name,U.$name,H.$name]}};G([$s(Pd)],Id.prototype,`contentSlides`,2),G([$s(Pd,{read:Oc})],Id.prototype,`slideTemplates`,2);var Ld=Id,Rd=(e=>(e.TIMER=`timer`,e.ARROW_LEFT=`arrowLeft`,e.ARROW_RIGHT=`arrowRight`,e.INDICATOR=`indicator`,e))(Rd||{}),zd=n.default.module(`ngb.carousel`,[W.name]);zd.directive(Pd.$name,Pd.$factory),zd.component(Ld.$name,Ld.$factory),zd.service(Dd.$name,Dd);var Bd=class e{constructor(e,t){this.$element=e,this.$scope=t}$postLink(){this.nativeElement=q(this.$element),this.$element.addClass(`dropdown-toggle`),this.unwatchOpenState=this.$scope.$watch(()=>this.dropdown.isOpen(),e=>this._applyHostBindings(e))}$onDestroy(){this.unwatchOpenState?.()}_applyHostBindings(e=this.dropdown.isOpen()){this.$element.toggleClass(`show`,e),this.$element.attr(`aria-expanded`,`${e}`)}static get $inject(){return[`$element`,`$scope`]}static get $name(){return`ngbDropdownAnchor`}static get $factory(){return()=>({controller:e,restrict:`A`,require:{dropdown:`^ngbDropdown`},bindToController:!0,scope:!0})}},Vd=class{constructor(){this.autoClose=!0,this.container=null,this.placement=[`bottom-start`,`bottom-end`,`top-start`,`top-end`],this.popperOptions=e=>e}static get $name(){return`ngb.dropdown.config.service`}},Hd=class e{constructor(e){this.$element=e,this.tabindex=0}isDisabled(){return this.ngDisabled?.disabled??!1}onDisabledChange(e){return this.ngDisabled?.onChange(e)??(()=>void 0)}$postLink(){this.nativeElement=q(this.$element),this.$element.addClass(`dropdown-item`),this._applyHostBindings(),this.removeDisabledListener=this.onDisabledChange(()=>this._applyHostBindings())}$onChanges(){this._applyHostBindings()}$onDestroy(){this.removeDisabledListener?.()}_applyHostBindings(){this.$element.toggleClass(`disabled`,this.isDisabled()),this.$element.attr(`tabIndex`,this.isDisabled()?-1:this.tabindex)}static get $name(){return`ngbDropdownItem`}static get $factory(){return()=>({bindToController:{tabindex:`<?`},controller:e,require:{ngDisabled:`?ngDisabled`},scope:!0,restrict:`A`})}static get $inject(){return[`$element`]}},Ud=new Set([`ArrowUp`,`ArrowDown`,`Home`,`End`,`Enter`,` `,`Tab`]),Wd=class e{constructor(e,t){this.$element=e,this.$scope=t}$postLink(){this.$element.addClass(`dropdown-menu`),this.nativeElement=q(this.$element),this.unwatchOpenState=this.$scope.$watch(()=>this.ngbDropdown.isOpen(),e=>this.$element.toggleClass(`show`,e)),this.keydownListener=e=>{Ud.has(e.key)&&this.ngbDropdown.onKeyDown(e)},this.$element.on(`keydown`,this.keydownListener)}$onDestroy(){this.keydownListener&&this.$element.off(`keydown`,this.keydownListener),this.unwatchOpenState?.()}static get $name(){return`ngbDropdownMenu`}static get $factory(){return()=>({bindToController:!0,controller:e,require:{ngbDropdown:`^ngbDropdown`},scope:!0,restrict:`A`,transclude:!0,template:`<ng-content></ng-content>`})}static get $inject(){return[`$element`,`$scope`]}};G([$s(Hd)],Wd.prototype,`menuItems`,2);var Gd=Wd,Kd=(e,t)=>t?t.some(t=>t?.contains(e)??!1):!1,qd=(e,t)=>!t||rd(n.default.element(e),t)!=null,Jd=typeof navigator<`u`&&!!navigator.userAgent&&((()=>{let e=/iPad|iPhone|iPod/.test(navigator.userAgent),t=navigator.maxTouchPoints!=null&&navigator.maxTouchPoints>2,n=/Macintosh/.test(navigator.userAgent);return e||n&&t})()||/Android/.test(navigator.userAgent)),Yd=e=>Jd?()=>setTimeout(e,100):e;function Xd(e,t,n,r,i,a,o){t&&e.runOutsideAngular(Yd(()=>{let s=e=>{let n=e.target;return!n||e.button===2||Kd(n,a)?!1:t===`inside`?Kd(n,i)&&qd(n,o):t===`outside`?!Kd(n,i):qd(n,o)||!Kd(n,i)},c=qo(document,`keydown`).pipe(V(n),rs(e=>e.key===`Escape`),xs(e=>e.preventDefault())),l=qo(document,`mousedown`).pipe(B(s),V(n)),u=qo(document,`mouseup`).pipe(Ss(l),rs(([,e])=>e),ms(0),V(n));is(c.pipe(B(()=>0)),u.pipe(B(()=>1))).pipe(V(n)).subscribe(t=>e.run(()=>r(t)))}))}var Zd=/\s+/,Qd=/ {2,}/gi,$d={auto:[`auto`],top:[`top`],bottom:[`bottom`],start:[`left`,`right`],left:[`left`],end:[`right`,`left`],right:[`right`],"top-start":[`top-start`,`top-end`],"top-left":[`top-start`],"top-end":[`top-end`,`top-start`],"top-right":[`top-end`],"bottom-start":[`bottom-start`,`bottom-end`],"bottom-left":[`bottom-start`],"bottom-end":[`bottom-end`,`bottom-start`],"bottom-right":[`bottom-end`],"start-top":[`left-start`,`right-start`],"left-top":[`left-start`],"start-bottom":[`left-end`,`right-end`],"left-bottom":[`left-end`],"end-top":[`right-start`,`left-start`],"right-top":[`right-start`],"end-bottom":[`right-end`,`left-end`],"right-bottom":[`right-end`]};function ef(e,t){let[n,r]=$d[e];return t&&r||n}var tf=/^left/,nf=/^right/,rf=/^start/,af=/^end/;function of(e){return e}function sf(e,t){let[n,r]=t.split(`-`),i=n.replace(tf,`start`).replace(nf,`end`),a=[i];if(r){let e=r;(n===`left`||n===`right`)&&(e=e.replace(rf,`top`).replace(af,`bottom`)),a.push(`${i}-${e}`)}return e?a.map(t=>`${e}-${t}`).join(` `):a.join(` `)}function cf({placement:e,baseClass:t},n){let r=Array.isArray(e)?e:e.split(Zd),i=[`top`,`bottom`,`start`,`end`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`start-top`,`start-bottom`,`end-top`,`end-bottom`],a=r.indexOf(`auto`);a>=0&&i.forEach(e=>{r.find(t=>t.search(`^${e}`)!==-1)??r.splice(a++,1,e)});let o=r.map(e=>ef(e,n.isRTL()));return{placement:o.shift(),modifiers:[{name:`bootstrapClasses`,enabled:!!t,phase:`write`,fn({state:e}){let n=RegExp(`${t}(-[a-z]+)*`,`gi`),r=e.elements.popper,i=e.placement,a=r.className;a=a.replace(n,``),a+=` ${sf(t,i)}`,a=a.trim().replace(Qd,` `),r.className=a}},du,yu,Pl,{enabled:!0,name:`flip`,options:{fallbackPlacements:o}}]}}function lf(e){let t=null;return{createPopper(n){if(!t){let r=(n.updatePopperOptions||of)(cf(n,e));t=ju(n.hostElement,n.targetElement,r)}},update(){t&&t.update()},setOptions(n){if(t){let r=(n.updatePopperOptions||of)(cf(n,e));t.setOptions(r)}},destroy(){t&&=(t.destroy(),null)}}}function uf(e){return t=>(t.modifiers?.push(mu,{name:`offset`,options:{offset:()=>e}}),t)}var df=class{constructor(){this._element=document.documentElement}isRTL(){return(this._element.getAttribute(`dir`)||``).toLowerCase()===`rtl`}static get $inject(){return[]}static get $name(){return`ngb.rtl.service`}},ff=class e{constructor(e,t,n,r,i,a){this.$config=e,this.$element=t,this.$ngbRTL=n,this.$scope=r,this._ngZone=i,this._changeDetector=a,this._bodyContainer=null,this._positioning=null,this._destroyCloseHandlers$=new z,this._open=!1}get menuItems(){return this._menu.menuItems}$onInit(){this._positioning=lf(this.$ngbRTL),this.autoClose=this.autoClose??this.$config.autoClose,this.placement=this.placement??this.$config.placement,this.popperOptions=this.popperOptions??this.$config.popperOptions,this.container=this.container??this.$config.container,this._unwatchOpenState=this.$scope.$watch(()=>this.isOpen(),e=>this.$element.toggleClass(`show`,e))}$postLink(){if(!this.display){let e=q(this.$element);this.display=e.closest(`.navbar`)?`static`:`dynamic`}this._ngZone.runOutsideAngular(()=>{queueMicrotask(()=>{this._applyPlacementClasses(),this._open&&(this._applyContainer(this.container),this._setCloseHandlers())})})}$onChanges(e){if(e.container&&!e.container.isFirstChange()&&this._validateContainer(this.container),e.container&&this._open&&this._menu&&this._applyContainer(this.container),e.placement&&!e.placement?.isFirstChange()){let e=this._bodyContainer?q(this._bodyContainer):null;this._positioning?.setOptions({hostElement:this._anchor.nativeElement,targetElement:e||this._menu.nativeElement,placement:this.placement}),this._applyPlacementClasses()}if(e.dropdownClass){let{currentValue:t,previousValue:n}=e.dropdownClass;this._applyCustomDropdownClass(t,n)}e.autoClose&&this._open&&(this.autoClose=e.autoClose.currentValue,this._setCloseHandlers())}$onDestroy(){this.close(),this._unwatchOpenState?.()}isOpen(){return this._open}open(){if(this._open){this._changeDetector.markForCheck();return}if(this._assertMenu(),this._assertAnchor(),this._open=!0,this._applyContainer(this.container),this.openChange?.({$event:!0}),this._setCloseHandlers(),this._anchor.nativeElement.focus(),this.display!==`dynamic`){this._changeDetector.markForCheck();return}let e=this._bodyContainer?q(this._bodyContainer):null;this._positioning?.createPopper({hostElement:this._anchor.nativeElement,targetElement:e||this._menu.nativeElement,placement:this.placement,updatePopperOptions:e=>this.popperOptions(uf([0,2])(e))}),this._applyPlacementClasses(),this._ngZone.runOutsideAngular(()=>queueMicrotask(()=>this._positionMenu())),this._changeDetector.markForCheck()}_setCloseHandlers(){this._destroyCloseHandlers$.next();let e=this._menu?.nativeElement,t=this._anchor?.nativeElement;Xd(this._ngZone,this.autoClose,this._destroyCloseHandlers$,e=>{this.close(),e===0&&this._anchor?.nativeElement.focus()},e?[e]:[],t?[t]:[],`.dropdown-item,.dropdown-divider`)}close(){this._open&&(this._open=!1,this._resetContainer(),this._positioning?.destroy(),this._destroyCloseHandlers$.next(),this.openChange?.({$event:!1}),this._changeDetector.markForCheck())}toggle(){if(this.isOpen()){this.close();return}this.open()}onKeyDown(e){let{key:t}=e,n=this._getMenuElements(),r=-1,i=null,a=this._isEventFromToggle(e);if(!a&&n.length)for(let t=0;t<n.length;t++){let a=n[t],o=q(a);o.contains(e.target)&&(i=a),o===od()&&(r=t)}if(t===` `||t===`Enter`){if(i==null)return;(this.autoClose===!0||this.autoClose===`inside`)&&qo(q(i),`click`).pipe(us(1)).subscribe(()=>this.close());return}if(t===`Tab`){if(!e.target||!this.isOpen()||!this.autoClose)return;let t=e.target,n=this._anchor.nativeElement===t,r=this.container===`body`,i=()=>{this._menu.nativeElement.setAttribute(`tabindex`,`0`),this._menu.nativeElement.focus(),this._menu.nativeElement.removeAttribute(`tabindex`)},a=()=>{r&&!e.shiftKey&&i(),e.shiftKey&&this.close()},o=()=>{let n=this._menu.nativeElement.querySelectorAll(Bu);[{shouldRun:e.shiftKey&&t===n[0],run:()=>{this._anchor.nativeElement.focus(),e.preventDefault()}},{shouldRun:!e.shiftKey&&t===n[n.length-1],run:()=>{this._anchor.nativeElement.focus(),this.close()}}].find(({shouldRun:e})=>e)?.run()},s=()=>{qo(t,`focusout`).pipe(us(1)).subscribe(({relatedTarget:e})=>{q(this.$element).contains(e)||this.close()})};if(n){a();return}r&&o(),r||s();return}if(a||i){if(this.open(),n.length){let e={ArrowDown:()=>Math.min(r+1,n.length-1),ArrowUp:()=>this._isDropUp()&&r===-1?n.length-1:Math.max(r-1,0),Home:()=>0,End:()=>n.length-1}[t]?.();e!=null&&(r=e),q(n[r]).focus()}e.preventDefault()}}_isDropUp(){return this.$element.hasClass(`dropup`)}_isEventFromToggle(e){return this._anchor?this._anchor.nativeElement.contains(e.target):!1}_getMenuElements(){return this._menu?this._menu.menuItems.filter(e=>!e.isDisabled()).map(({$element:e})=>e):[]}_positionMenu(){if(!(!this.isOpen()||!this._menu)){if(this.display!==`dynamic`){this._applyPlacementClasses(this._getFirstPlacement(this.placement));return}this._positioning?.update(),this._applyPlacementClasses()}}_getFirstPlacement(e){if(!Array.isArray(e)){let[t]=e.split(` `);return t}let[t]=e;return t}_resetContainer(){this._menu&&this.$element.append(this._menu.$element),this._bodyContainer&&=(this._bodyContainer.remove(),null)}_applyContainer(e=null){this._assertMenu(),this._resetContainer(),e===`body`&&(this._bodyContainer=this._bodyContainer??n.default.element(`<div></div>`),this._bodyContainer.css({position:`absolute`,zIndex:`1055`}),this._menu.$element.css({position:`static`}),this._bodyContainer.append(this._menu.$element),n.default.element(document.body).append(this._bodyContainer)),this._applyCustomDropdownClass(this.dropdownClass??``)}_applyCustomDropdownClass(e,t){let n=this.container===`body`?this._bodyContainer:this.$element;n&&(t&&n.removeClass(t),e&&n.addClass(e))}_validateContainer(e){if(e!=null&&e!==`body`)throw Error(`[ngb-dropdown]: Unsupported container value "${e}". Use "body" or null.`)}_assertAnchor(){if(!this._anchor)throw Error(`[ngb-dropdown]: NgbDropdown requires an ngbDropdownToggle or ngbDropdownAnchor.`)}_assertMenu(){if(!this._menu)throw Error(`[ngb-dropdown]: NgbDropdown requires an ngbDropdownMenu.`)}_applyPlacementClasses(e){if(!this._menu)return;e||=this._getFirstPlacement(this.placement),this.$element.removeClass(`dropup dropdown`),this.display===`static`?this._menu.$element.attr(`data-bs-popper`,`static`):this._menu.$element.removeAttr(`data-bs-popper`);let t=e?.search(`^top`)===-1?`dropdown`:`dropup`;this.$element.addClass(t),this._bodyContainer&&(this._bodyContainer.removeClass(`dropup dropdown`),this._bodyContainer.addClass(t))}static get $name(){return`ngbDropdown`}static get $factory(){return()=>({restrict:`A`,scope:!0,bindToController:{autoClose:`<?`,animation:`<?`,container:`@?`,display:`<?`,dropdownClass:`<?`,_open:`<?open`,popperOptions:`<?`,openChange:`&?`,placement:`<?`},controller:e,transclude:!0,template:`<ng-content></ng-content>`})}static get $inject(){return[Vd.$name,`$element`,df.$name,`$scope`,U.$name,H.$name]}};G([Ks(Gd)],ff.prototype,`_menu`,2),G([Ks(Bd)],ff.prototype,`_anchor`,2);var pf=ff,mf=new Set([`ArrowUp`,`ArrowDown`,`Home`,`End`,`Tab`]),hf=class e extends Bd{$postLink(){super.$postLink(),this.clickListener=()=>{this.$scope.$evalAsync(()=>this.dropdown.toggle())},this.keydownListener=e=>{mf.has(e.key)&&this.dropdown.onKeyDown(e)},this.$element.on(`click`,this.clickListener),this.$element.on(`keydown`,this.keydownListener)}$onDestroy(){this.clickListener&&this.$element.off(`click`,this.clickListener),this.keydownListener&&this.$element.off(`keydown`,this.keydownListener),super.$onDestroy()}static get $name(){return`ngbDropdownToggle`}static get $factory(){return()=>({bindToController:!0,scope:!0,require:{dropdown:`^ngbDropdown`},controller:e,restrict:`A`})}},gf=n.default.module(`ngb.dropdown`,[Lc.name]);gf.directive(pf.$name,pf.$factory),gf.directive(hf.$name,hf.$factory),gf.directive(Gd.$name,Gd.$factory),gf.directive(Hd.$name,Hd.$factory),gf.directive(Bd.$name,Bd.$factory),gf.service(Vd.$name,Vd);var _f=class{constructor(e){this.$ngbConfig=e,this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0,this.role=`dialog`}get animation(){return this._animation??this.$ngbConfig.animation}set animation(e){this._animation=e}static get $inject(){return[Pu.$name]}static get $name(){return`ngb.modal.config.service`}},vf=class{update(e){}close(e){}dismiss(e){}},yf=class{constructor(e,t,r,i,a){this.$q=e,this.windowRef=t,this.contentRef=r,this.backdropRef=i,this._beforeDismiss=a,this._hidden=new z,this._dismissed=new z,this._closed=new z;let o=this.$q.defer();this.result=o.promise,this._reject=o.reject,this._resolve=o.resolve,o.promise.then(n.default.noop,n.default.noop),t.componentInstance?.onDismiss(e=>{this.dismiss(e)})}update(e){this.windowRef.componentInstance?.updateOptions(e),this.backdropRef?.componentInstance&&this.backdropRef.componentInstance.updateOptions(e)}dismiss(e){if(!this.windowRef)return;if(!this._beforeDismiss){this._dismiss(e);return}let t=this._beforeDismiss();this.$q.when(t).then(t=>{t!==!1&&this._dismiss(e)},n.default.noop)}close(e){this.windowRef&&(this._closed.next(e),this._resolve?.(e),this._removeModalElements())}_dismiss(e){this._dismissed.next(e),this._reject?.(e),this._removeModalElements()}get closed(){return this._closed.asObservable().pipe(V(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(V(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this.windowRef.componentInstance?.shown.asObservable()}get componentInstance(){return this.contentRef.componentInstance}_removeModalElements(){let e=this.windowRef.componentInstance?.hide(),t=this.backdropRef?.componentInstance?.hide()??wo(void 0);e?.subscribe(()=>{this.windowRef.$element.remove(),this.windowRef.destroy(),this.contentRef.destroy(),this.windowRef=null,this.contentRef=null}),t.subscribe(()=>{this.backdropRef&&=(this.backdropRef.$element.remove(),this.backdropRef.destroy(),null)}),os(e??wo(void 0),t).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},bf=class{constructor(e){this.$window=e}hide(){let e=Math.abs(this.$window.innerWidth-document.documentElement.clientWidth),t=document.body,n=t.style,{overflow:r,paddingRight:i}=n;return e>0&&(n.paddingRight=`${Number.parseFloat(this.$window.getComputedStyle(t).paddingRight)+e}px`),n.overflow=`hidden`,()=>{e>0&&(n.paddingRight=i),n.overflow=r}}static get $name(){return`ngb.scrollbar.service`}static get $inject(){return[`$window`]}},xf=class{constructor(e,t,n,r){this.$element=e,this.$scope=t,this.componentInstance=n,this.embeddedViewRef=r}setInput(e,t){if(!this.componentInstance)throw Error(`can not set on componentInstance because is undefined`);let n=this.componentInstance,r=n[e];n[e]=t,n.$onChanges?.({[e]:{currentValue:t,previousValue:r,isFirstChange:()=>r===void 0}}),this.$scope?.$evalAsync()}destroy(){this.embeddedViewRef?.destroy(),this.embeddedViewRef=void 0,this.$scope?.$destroy(),this.$scope=void 0}},Sf=e=>{e.removeClass(`show`)},Cf=class{constructor(e,t,n,r){this.$compile=e,this._ngZone=t,this.$rootScope=n,this._componentType=r,this._windowRef=null,this._contentRef=null}open(e,t,r=!1){if(!this._windowRef){this._contentRef=this._getContentRef(e,t);let r=ad(this._componentType),i=this.$rootScope.$new(),a=n.default.element(`<${r}></${r}>`),o=this.$compile(a)(i),s=o.controller(this._componentType),c=o[0].querySelector?.(`[ngb-popup-content]`);n.default.element(c??o).append(this._contentRef.$element),this._windowRef=new xf(o,i,s)}let{$element:i}=this._windowRef,a=new z;this._ngZone.runOutsideAngular(()=>{queueMicrotask(()=>{a.next(),a.complete()})});let o=a.pipe(Bo(()=>K(this._ngZone,i,e=>{e.addClass(`show`)},{animation:r,runningTransition:`continue`})));return{windowRef:this._windowRef,transition$:o}}close(e=!1){return this._windowRef?K(this._ngZone,this._windowRef.$element,Sf,{animation:e,runningTransition:`stop`}).pipe(xs(()=>{this._contentRef?.destroy(),this._contentRef=null,this._windowRef?.$scope?.$destroy(),this._windowRef=null})):wo(void 0)}_getContentRef(e,t){if(!e)return new xf(n.default.element([]));if(e instanceof Oc){let r=e.createEmbeddedView(t??{});return new xf(n.default.element(r.rootNodes),void 0,void 0,r)}let r=document.createTextNode(`${e}`);return new xf(n.default.element(r))}},wf=class{constructor(e,t,n){this.$compile=e,this._ngZone=t,this.$rootScope=n}$create(e){return new Cf(this.$compile,this._ngZone,this.$rootScope,e)}static get $inject(){return[`$compile`,U.$name,`$rootScope`]}static get $name(){return`ngb.popup.factory`}},Tf=class{constructor(e,t,n,r,i){this.ngbScrollbar=e,this._ngZone=t,this.$compile=n,this.$rootScope=r,this.$q=i,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowRefs=[],this._ariaHiddenValues=new Map,this._activeWindowCmptHasChanged=new z,this._activeInstances=this.$q.defer(),this._activeWindowCmptHasChanged.subscribe(()=>{if(!this._windowRefs.length){this._revertAriaHidden();return}let e=this._windowRefs[this._windowRefs.length-1];Hu(this._ngZone,q(e.$element),this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(e.$element)})}async open(e,t){let n=this.$q.defer(),r=this._resolveContainer(t.container);if(!r)throw Error(`The specified modal container "${t.container||`body`}" was not found in the DOM.`);this._hideScrollBar();let i=new vf,a=this._getContentRef(e,i,t),o=t.backdrop===!1?void 0:this._attachBackdrop(r);return await this.$q.all([o,a]).then(([e,a])=>this._attachWindowComponent(r,a.$element).then(r=>{let o=new yf(this.$q,r,a,e,t.beforeDismiss);i.close=e=>{o.close(e)},i.dismiss=e=>{o.dismiss(e)},i.update=e=>{o.update(e)},o.update(t),this._registerModalRef(o),this._registerWindow(r),this._modalRefs.length===1&&document.body.classList.add(`modal-open`),o.hidden.pipe(us(1)).subscribe(()=>this.$q.resolve(!0).then(()=>{this._modalRefs.length||(document.body.classList.remove(`modal-open`),this._restoreScrollBar(),this._revertAriaHidden())})),n.resolve(o)})),n.promise}_registerWindow(e){this._windowRefs.push(e),this._activeWindowCmptHasChanged.next(),e.$scope?.$on(`$destroy`,()=>{let t=this._windowRefs.indexOf(e);t>-1&&(this._windowRefs.splice(t,1),this._activeWindowCmptHasChanged.next())})}get activeInstances(){return this._activeInstances?.promise}dismissAll(e){this._modalRefs.forEach(t=>{t.dismiss(e)})}hasOpenModals(){return this._modalRefs.length>0}_registerModalRef(e){let t=()=>{let t=this._modalRefs.indexOf(e);t>-1&&(this._modalRefs.splice(t,1),this._activeInstances?.notify(this._modalRefs))};this._modalRefs.push(e),this._activeInstances?.notify(this._modalRefs),e.result?.then(t,t)}_resolveContainer(e){if(n.default.isString(e)){let t=document.querySelector(String(e));return t?n.default.element(t):void 0}return e??n.default.element(document.body)}_attachBackdrop(e){let t=this.$q.defer(),n=this.$rootScope.$new(!0),r=this.$compile(`<ngb-modal-backdrop></ngb-modal-backdrop>`)(n);e.append(r);let i=this.$rootScope.$watch(()=>r.controller(`ngbModalBackdrop`),e=>{i();let a=new xf(r,n,e);t.resolve(a)});return t.promise}_attachWindowComponent(e,t){let r=this.$q.defer(),i=this.$rootScope.$new(!0),a=this.$compile(`<ngb-modal-window></ngb-modal-window>`)(i),o=q(a).querySelector(`.modal-content`);o&&n.default.element(o).append(t),e.append(a);let s=this.$rootScope.$watch(()=>a.controller(`ngbModalWindow`),e=>{s();let t=new xf(a,i,e);r.resolve(t)});return r.promise}_getContentRef(e,t,r){let i=this.$q.defer();if(e instanceof Oc){let r=e.createEmbeddedView({$implicit:t,close:e=>t.close(e),dismiss:e=>t.dismiss(e)}),a=n.default.element(r.rootNodes);return i.resolve(new xf(a,void 0,void 0,r)),i.promise}let a=this.$rootScope.$new(!0),o=ad(e),s=this._buildBindingsAttrs(r),c=this.$compile(`<${o} ${s} ngb-active-modal="activeModal"></${o}>`);a.activeModal=t,n.default.extend(a,r.bindings);let l=c(a);r.scrollable&&l.addClass(`component-host-scrollable d-flex flex-column overflow-hidden`);let u=this.$rootScope.$watch(()=>l.controller(e),e=>{u();let t=new xf(l,a,e);i.resolve(t)});return i.promise}_buildBindingsAttrs(e){return Object.keys(e.bindings||{}).map(e=>`${ad(e)}="${e}"`).join(` `)}_setAriaHidden(e){let t=q(e),r=t.parentElement,i=document.body;r&&t!==i&&(Array.from(r.children).forEach(e=>{e!==t&&e.nodeName!==`SCRIPT`&&(this._ariaHiddenValues.set(e,e.getAttribute(`aria-hidden`)),e.setAttribute(`aria-hidden`,`true`))}),this._setAriaHidden(n.default.element(r)))}_revertAriaHidden(){this._ariaHiddenValues.forEach((e,t)=>{if(e){t.setAttribute(`aria-hidden`,e);return}t.removeAttribute(`aria-hidden`)}),this._ariaHiddenValues.clear()}_restoreScrollBar(){let e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||=this.ngbScrollbar.hide()}static get $name(){return`ngb.modal.stack.service`}static get $inject(){return[bf.$name,U.$name,`$compile`,`$rootScope`,`$q`]}},Ef=class{constructor(e,t){this.ngbModalStack=e,this.ngbModalConfig=t}open(e,t={}){let n={...this.ngbModalConfig,animation:this.ngbModalConfig.animation,...t};return this.ngbModalStack.open(e,n)}get activeInstances(){return this.ngbModalStack.activeInstances}dismissAll(e){this.ngbModalStack.dismissAll(e)}hasOpenModals(){return this.ngbModalStack.hasOpenModals()}static get $name(){return`ngb.modal.service`}static get $inject(){return[Tf.$name,_f.$name]}},Df=e=>{e.removeClass(`show`)},Of=(e,t)=>{t&&Xu(e),e.addClass(`show`)},kf=[`animation`,`backdropClass`],Af=class e{constructor(e,t,n,r){this.$element=e,this.$ngbModalConfig=t,this._ngZone=n,this._cdRef=r}$postLink(){let e=this.backdropClass?this.backdropClass:``;this.$element.addClass(`modal-backdrop ${e}`),this.$element.css({"z-index":`1055`}),this._ngZone.runOutsideAngular(()=>queueMicrotask(()=>K(this._ngZone,this.$element,Of,{animation:this.animation??this.$ngbModalConfig.animation,runningTransition:`continue`})))}$onChanges(){this.$element.toggleClass(`show`,!this.animation),this.$element.toggleClass(`fade`,this.animation),this._appliedBackdropClass&&this._appliedBackdropClass.split(/\s+/).filter(Boolean).forEach(e=>{this.$element.removeClass(e)}),this.backdropClass&&this.backdropClass.split(/\s+/).filter(Boolean).forEach(e=>{this.$element.addClass(e)}),this._appliedBackdropClass=this.backdropClass}hide(){return K(this._ngZone,this.$element,Df,{animation:this.animation??this.$ngbModalConfig.animation,runningTransition:`stop`})}updateOptions(e){let t=e;kf.forEach(e=>{n.default.isDefined(t[e])&&Object.assign(this,{[e]:t[e]})}),this.$onChanges(),this._cdRef.markForCheck()}static get $name(){return`ngbModalBackdrop`}static get $inject(){return[`$element`,_f.$name,U.$name,H.$name]}static get $factory(){return{controller:e,controllerAs:`$`,bindings:{animation:`<?`,backdropClass:`@?`}}}},jf=`<div
    ng-ref="dialog"
    role="document"
    class="modal-dialog"\r
    ng-class="[
        $.fullscreen === true ? 'modal-fullscreen' : ($.fullscreen ? 'modal-fullscreen-' + $.fullscreen + '-down' : ''),
        $.size ? 'modal-' + $.size : '',\r
        $.centered ? 'modal-dialog-centered' : '',\r
        $.scrollable ? 'modal-dialog-scrollable' : '',
        $.modalDialogClass || ''
    ]">
    <div class="modal-content"><ng-content></ng-content></div>
</div>
`,Mf=(e,t)=>{t&&Xu(e),e.addClass(`show`)},Nf=(e,t)=>t?(e.addClass(`modal-static`),()=>{e.removeClass(`modal-static`)}):n.default.noop,Pf=e=>{e.removeClass(`show`)},Ff=[`animation`,`ariaLabelledBy`,`ariaDescribedBy`,`backdrop`,`centered`,`fullscreen`,`keyboard`,`role`,`scrollable`,`size`,`windowClass`,`modalDialogClass`],If=()=>{},Lf=class e{constructor(e,t,n,r){this.$element=e,this._ngZone=t,this._cdRef=n,this.$log=r,this.backdrop=!0,this.keyboard=!0,this.role=`dialog`,this._elWithFocus=null,this._closed$=new z,this.shown=new z,this.hidden=new z}get _dialogEl(){return n.default.element(this._dialogRef.nativeElement)}$onInit(){this._elWithFocus=document.activeElement}$onDestroy(){this._disableEventHandling()}$postLink(){this.$element.addClass(`modal d-block`),this.$element.attr(`tabindex`,-1),this.$element.attr(`aria-modal`,`true`),this._ngZone.runOutsideAngular(()=>queueMicrotask(()=>this._show()))}$onChanges(){this.$element.toggleClass(`fade`,this.animation),this._appliedWindowClass&&this._appliedWindowClass.split(/\s+/).filter(Boolean).forEach(e=>{this.$element.removeClass(e)}),this.windowClass&&this.windowClass.split(/\s+/).filter(Boolean).forEach(e=>{this.$element.addClass(e)}),this._appliedWindowClass=this.windowClass,this.ariaLabelledBy?this.$element.attr(`aria-labelledby`,this.ariaLabelledBy):this.$element.removeAttr(`aria-labelledby`),this.ariaDescribedBy?this.$element.attr(`aria-describedby`,this.ariaDescribedBy):this.$element.removeAttr(`aria-describedby`),this.role?this.$element.attr(`role`,this.role):this.$element.removeAttr(`role`)}dismiss(e){this._dismissListener?.(e)}onDismiss(e){this._dismissListener=e}hide(){let e={animation:!!this.animation,runningTransition:`stop`},t=K(this._ngZone,this.$element,Pf,e);if(!this._dialogEl)throw Error(`dialog element is undefined`);let n=os(t,K(this._ngZone,this._dialogEl,If,e));return n.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),n}updateOptions(e){let t=e;this._ngZone.run(()=>{Ff.forEach(e=>{n.default.isDefined(t[e])&&Object.assign(this,{[e]:t[e]})}),this.$onChanges(),this._cdRef.markForCheck()})}_show(){let e={animation:!!this.animation,runningTransition:`continue`},t=K(this._ngZone,this.$element,Mf,e);if(!this._dialogEl)throw Error(`dialog element is undefined`);os(t,K(this._ngZone,this._dialogEl,If,e)).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_setFocus(){let e=q(this.$element);if(!e.contains(document.activeElement)){let t=e.querySelector(`[ngbAutofocus]`),[n]=Vu(e);(t||n||e).focus()}}_enableEventHandling(){this._disableEventHandling();let e=q(this.$element);if(!this._dialogEl)throw Error(`dialog element is undefined`);let t=q(this._dialogEl),n=!1;qo(e,`keydown`).pipe(V(this._closed$),rs(e=>e.key===`Escape`)).subscribe(e=>{if(this.$log.info(`ngbModalWindow keydown`,e),this.keyboard){requestAnimationFrame(()=>{e.defaultPrevented||this._ngZone.run(()=>{this.dismiss(1)})});return}this.backdrop===`static`&&this._bumpBackdrop()}),qo(t,`mousedown`).pipe(V(this._closed$),xs(e=>{this.$log.info(`ngbModalWindow dialog mousedown`,e),n=!1}),bs(()=>qo(e,`mouseup`).pipe(V(this._closed$),us(1))),rs(({target:t})=>t===e)).subscribe(e=>{this.$log.info(`ngbModalWindow mouseup`,e),n=!0}),qo(e,`click`).pipe(V(this._closed$)).subscribe(t=>{this.$log.info(`ngbModalWindow click`,t),t.target===e&&(this.backdrop===`static`&&this._bumpBackdrop(),this.backdrop===!0&&!n&&this._ngZone.run(()=>{this.dismiss(0)})),n=!1})}_disableEventHandling(){this._closed$.next()}_restoreFocus(){let e=document.body,t=this._elWithFocus,n=t instanceof HTMLElement&&e.contains(t)?t:e;this._ngZone.runOutsideAngular(()=>setTimeout(()=>n.focus())),this._elWithFocus=null}_bumpBackdrop(){this.backdrop===`static`&&K(this._ngZone,this.$element,Nf,{animation:!!this.animation,runningTransition:`continue`})}static get $name(){return`ngbModalWindow`}static get $inject(){return[`$element`,U.$name,H.$name,`$log`]}static get $factory(){return{controller:e,controllerAs:`$`,transclude:!0,template:jf,bindings:{animation:`<?`,ariaLabelledBy:`<?`,ariaDescribedBy:`<?`,backdrop:`<?`,centered:`<?`,fullscreen:`<?`,keyboard:`<?`,role:`<?`,scrollable:`<?`,size:`<?`,windowClass:`<?`,modalDialogClass:`<?`}}}};G([dc(`dialog`,{read:Rc,static:!0})],Lf.prototype,`_dialogRef`,2);var Rf=Lf,zf=n.default.module(`ngb.modal`,[W.name]);zf.service(Ef.$name,Ef),zf.service(Tf.$name,Tf),zf.service(_f.$name,_f),zf.component(Af.$name,Af.$factory),zf.component(Rf.$name,Rf.$factory);var Bf=class{constructor(e){this.ngbConfig=e,this.destroyOnHide=!0,this.orientation=`horizontal`,this.roles=`tablist`,this.keyboard=!0}get animation(){return this._animation??this.ngbConfig.animation}set animation(e){this._animation=e}static get $inject(){return[Pu.$name]}static get $name(){return`ngb.nav.config.service`}},Vf=class e{static get $name(){return`ngbNavContent`}static get $factory(){return()=>({controller:e,bindToController:!0,restrict:`A`})}},Hf=e=>n.default.isDefined(e)&&e!==``,Uf=0,Wf=class e{constructor(e){this.$element=e}$onInit(){n.default.isDefined(this.domId)||(this.domId=`ngb-nav-${Uf++}`)}$postLink(){this.$element.addClass(`nav-item`)}get active(){return this._nav.activeId===this.id}get id(){return Hf(this._id)?this._id:this.domId}get panelDomId(){return`${this.domId}-panel`}isDisabled(){return this.ngDisabled?.disabled??!1}isPanelInDom(){return n.default.isDefined(this.destroyOnHide)?!this.destroyOnHide:!this._nav.destroyOnHide||this.active}isNgContainer(){return q(this.$element).nodeType===Node.COMMENT_NODE}static get $inject(){return[`$element`]}static get $name(){return`ngbNavItem`}static get $factory(){return()=>({controller:e,restrict:`A`,bindToController:!0,require:{_nav:`^ngbNav`,ngDisabled:`?ngDisabled`},scope:{destroyOnHide:`<?`,domId:`@?`,_id:`@?ngbNavItem`,shown:`&?`,hidden:`&?`},transclude:!0,template:`<ng-content></ng-content>`})}};G([Ks(Vf,{descendants:!1,read:Oc})],Wf.prototype,`contentTpl`,2);var Gf=Wf,Kf=class{constructor(e,t,n){this.$element=e,this.$attrs=t,this.$scope=n}$postLink(){this.$element.addClass(`nav-link`),this.nativeElement=q(this.$element),this._updateDom(),this._sub=this.ngbNav.navItemChange$.subscribe(()=>this._updateDom()),this._unwatchDisabled=this.$scope.$watch(()=>this.ngbNavItem.isDisabled(),()=>this._updateDom())}$onDestroy(){this._sub?.unsubscribe(),this._unwatchDisabled?.(),this._clickHandler&&this.$element.off(`click`,this._clickHandler)}get tabindex(){return this.ngbNav.keyboard===!1?this.ngbNavItem.isDisabled()?-1:void 0:this.ngbNav._navigatingWithKeyboard||this.ngbNavItem.isDisabled()||!this.ngbNavItem.active?-1:void 0}_setupButton(){this.$element.attr(`type`,`button`),this._clickHandler=()=>this.$scope.$evalAsync(()=>this.ngbNav.click(this.ngbNavItem)),this.$element.on(`click`,this._clickHandler)}_updateDom(){let e=this.ngbNavItem,t=this.ngbNav,n=this.$attrs.role;this.$element.attr(`id`,e.domId),this.$element.toggleClass(`nav-item`,e.isNgContainer()),this.$element.toggleClass(`active`,!!e.active),this.$element.toggleClass(`disabled`,e.isDisabled()),this.nativeElement instanceof HTMLButtonElement&&this.$element.prop(`disabled`,e.isDisabled()),sd(this.$element,`tabindex`,this.tabindex?.toString()),sd(this.$element,`aria-controls`,e.isPanelInDom()?e.panelDomId:void 0),sd(this.$element,`aria-selected`,String(e.active)),sd(this.$element,`aria-disabled`,e.isDisabled()?`true`:void 0),sd(this.$element,`role`,n,t.roles?`tab`:void 0)}static get $inject(){return[`$element`,`$attrs`,`$scope`]}},qf=e=>n.default.isDefined(e)&&e!==``,Jf=class e{constructor(e,t,n,r){this.$element=e,this.$attributes=t,this.$scope=n,this.config=r,this._navigatingWithKeyboard=!1,this.navItemChange$=new z}$onInit(){this.animation??=this.config.animation,this.destroyOnHide??=this.config.destroyOnHide,this.keyboard??=this.config.keyboard,this.orientation??=this.config.orientation,this.roles??=this.config.roles}$postLink(){this.$element.addClass(`nav`),this.$element.on(`keydown`,this.onKeyDown.bind(this)),this.$element.on(`focusout`,this.onFocusout.bind(this));let e=e=>{this.role=e,sd(this.$element,`role`,this.role?this.role:this.roles?`tablist`:void 0)};if(this.$attributes.$observe(`role`,e),e(this.$attributes.role),!(0,n.isDefined)(this.activeId)){let e=this.items.first?.id??null;qf(e)&&this.$scope.$applyAsync(()=>this._updateActiveId(e,!1))}this.itemsSubscription=this.items.changes.subscribe(()=>this._notifyItemChanged(this.activeId))}$onChanges(e){this.$element.toggleClass(`flex-column`,this.orientation===`vertical`),sd(this.$element,`aria-orientation`,this.orientation===`vertical`&&this.roles===`tablist`?`vertical`:void 0),e.activeId&&!e.activeId.isFirstChange()&&this._notifyItemChanged(e.activeId.currentValue)}$onDestroy(){this.itemsSubscription?.unsubscribe(),this.navItemChange$.complete(),this.$element.off(`keydown`),this.$element.off(`focusout`)}onKeyDown(e){if(this.roles!==`tablist`||!this.keyboard)return;let t=this.links.filter(e=>!e.ngbNavItem.isDisabled()),{length:n}=t,r=-1;if(t.forEach((e,t)=>{e.nativeElement===document.activeElement&&(r=t)}),n){switch(e.key){case`ArrowUp`:case`ArrowLeft`:r=(r-1+n)%n;break;case`ArrowRight`:case`ArrowDown`:r=(r+1)%n;break;case`Home`:r=0;break;case`End`:r=n-1}this.keyboard===`changeWithArrows`&&this.select(t[r].ngbNavItem.id),t[r].nativeElement.focus(),this._navigatingWithKeyboard=!0,e.preventDefault()}}onFocusout({relatedTarget:e}){q(this.$element).contains(e)||(this._navigatingWithKeyboard=!1)}click(e){e.isDisabled()||this._updateActiveId(e.id)}select(e){this._updateActiveId(e,!1)}_updateActiveId(e,t=!0){if(this.activeId===e)return;let n=!1;t&&this.navChange?.({$event:{activeId:this.activeId,nextId:e,preventDefault:()=>{n=!0}}}),n||(this.activeId=e,this.activeIdChange?.({$event:e}),this._notifyItemChanged(e))}_notifyItemChanged(e){this.navItemChange$.next(this._getItemById(e))}_getItemById(e){return this.items?.find(t=>t.id===e)||null}static get $name(){return`ngbNav`}static get $inject(){return[`$element`,`$attrs`,`$scope`,Bf.$name]}static get $factory(){return()=>({restrict:`A`,scope:{activeId:`=?`,animation:`<?`,destroyOnHide:`<?`,keyboard:`<?`,orientation:`<?`,roles:`<?`,activeIdChange:`&?`,hidden:`&?`,navChange:`&?`,shown:`&?`},bindToController:!0,controller:e,transclude:!0,template:`<ng-content></ng-content>`})}};G([$s(Gf)],Jf.prototype,`items`,2),G([$s(Kf)],Jf.prototype,`links`,2);var Yf=Jf,Xf=class{constructor(){this.counter=0}get count$(){return this.count$}increase(){this.counter+=1}decrease(){--this.counter}},Zf=class{static get $name(){return`ngb.nav.counter.factory`}static $factory(){return new Xf}},Qf=class e{constructor(e,t){this.$attributes=e,this.$element=t}$onInit(){this.$attributes.$observe(`role`,e=>{sd(this.$element,`role`,e,this.nav.roles?`presentation`:void 0)})}static get $name(){return`ngbNavItemRole`}static get $inject(){return[`$attrs`,`$element`]}static get $factory(){return()=>({controller:e,bindToController:!0,require:{nav:`^ngbNav`},restrict:`A`})}},$f=class e extends Kf{constructor(e,t,n){super(e,t,n),this.$attrs=t}$postLink(){super.$postLink();let e=this.nativeElement.tagName.toLowerCase();if(e===`button`){this._setupButton();return}if(e!==`a`)return;let t=Object.hasOwn(this.$attrs.$attr,`uiSref`);t||this.$element.attr(`href`,``),this._clickHandler=e=>{t||e.preventDefault(),this.$scope.$evalAsync(()=>this.ngbNav.click(this.ngbNavItem))},this.$element.on(`click`,this._clickHandler)}static get $name(){return`ngbNavLink`}static get $inject(){return[`$element`,`$attrs`,`$scope`]}static get $factory(){return()=>({controller:e,require:{ngbNavItem:`^ngbNavItem`,ngbNav:`^ngbNav`},restrict:`A`,bindToController:!0})}},ep=class e extends Kf{$postLink(){super.$postLink(),this._setupButton()}static get $name(){return`ngbNavLinkButton`}static get $factory(){return()=>({controller:e,require:{ngbNavItem:`^ngbNavItem`,ngbNav:`^ngbNav`},restrict:`A`,bindToController:!0})}},tp=class e{constructor(e){this.$element=e}$postLink(){this.nativeElement=this.$element[0],this.$element.addClass(`tab-pane`),this.nav.animation&&this.$element.addClass(`fade`),this.$element.attr(`id`,this.item.panelDomId),this.$element.attr(`aria-labelledby`,this.item.domId),sd(this.$element,`role`,this.role,this.nav.roles?`tabpanel`:void 0)}static get $name(){return`ngbNavPane`}static get $inject(){return[`$element`]}static get $factory(){return()=>({controller:e,controllerAs:`$`,restrict:`A`,scope:{item:`<`,nav:`<`,role:`<?`},bindToController:!0,template:`
        <ng-container
          ng-template-outlet="$.item.contentTpl"
          ng-template-outlet-context="{ $implicit: $.item.active }">
        </ng-container>
      `})}},np=e=>(e.removeClass(`show`),()=>e.removeClass(`active`)),rp=(e,t)=>{t&&Xu(e),e.addClass(`show`)},ip=class e{constructor(e,t,n){this.$element=e,this._changeDetector=t,this._ngZone=n,this._activePane=null}isPanelTransitioning(e){return this._activePane?.item===e&&this._pendingItem!==void 0}$postLink(){this.$element.addClass(`tab-content`),this._updateActivePane(),this._panesSubscription=this._panes.changes.subscribe(()=>this._startPendingTransition()),this._navSubscription=this.nav.navItemChange$.subscribe(e=>{this._activePane?.item!==e&&(this._pendingItem=e,this._changeDetector.detectChanges(),this._startPendingTransition())})}$onDestroy(){this._navSubscription?.unsubscribe(),this._panesSubscription?.unsubscribe()}_startPendingTransition(){if(this._pendingItem===void 0)return;let e=this._pendingItem,t=this._getPaneForItem(e);if(e&&!t)return;let n=this._activePane;if(!n){this._activePane=t,this._activePane?.$element.addClass(`active show`),this._pendingItem=void 0;return}let r={animation:this.nav.animation,runningTransition:`stop`};K(this._ngZone,n.$element,np,r).subscribe(()=>{let t=n.item;this._activePane=this._getPaneForItem(e),this._pendingItem=void 0,this._activePane&&(this._activePane.$element.addClass(`active`),K(this._ngZone,this._activePane.$element,rp,r).subscribe(()=>{e?.shown?.(),e&&this.nav.shown?.({$event:e.id})})),t.hidden?.(),this.nav.hidden?.({$event:t.id}),this._changeDetector.markForCheck()})}_updateActivePane(){this._activePane=this._getPaneForItem(this.nav.items.find(e=>e.active)??null),this._activePane?.$element.addClass(`active show`)}_getPaneForItem(e){return this._panes.find(t=>t.item===e)??null}static get $name(){return`ngbNavOutlet`}static get $inject(){return[`$element`,H.$name,U.$name]}static get $factory(){return()=>({controller:e,bindToController:{paneRole:`<?`,nav:`<ngbNavOutlet`},restrict:`A`,controllerAs:`$`,scope:!0,template:`
        <div
          ng-repeat="item in $.nav.items.toArray() track by item.domId"
          ng-if="item.isPanelInDom() || $.isPanelTransitioning(item)"
          ngb-nav-pane
          item="item"
          nav="$.nav"
          role="$.paneRole">
        </div>
      `})}};G([gc(tp)],ip.prototype,`_panes`,2);var ap=ip,op=n.default.module(`ngb.nav`,[W.name]);op.factory(Zf.$name,Zf.$factory),op.directive(Yf.$name,Yf.$factory),op.service(Bf.$name,Bf),op.directive(ep.$name,ep.$factory),op.directive(Vf.$name,Vf.$factory),op.directive(Gf.$name,Gf.$factory),op.directive(Qf.$name,Qf.$factory),op.directive(ap.$name,ap.$factory),op.directive($f.$name,$f.$factory),op.directive(tp.$name,tp.$factory);var sp=class{constructor(e){this._ngbConfig=e,this.backdrop=!0,this.keyboard=!0,this.position=`start`,this.scroll=!1}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}static get $inject(){return[Pu.$name]}static get $name(){return`ngb.offcanvas.config.service`}},cp=(e,t)=>{t&&Xu(e),e.addClass(`show`)},lp=e=>{e.removeClass(`show`)},up=[`animation`,`backdropClass`],dp=class e{constructor(e,t){this.$element=e,this._ngZone=t}$postLink(){this._ngZone.runOutsideAngular(()=>queueMicrotask(()=>K(this._ngZone,this.$element,cp,{animation:this.animation??!0,runningTransition:`continue`}))),this.$element.addClass(`offcanvas-backdrop`),this.$element.on(`mousedown`,this.dismiss.bind(this))}$onChanges(){this.$element.toggleClass(`show`,!this.animation),this.$element.toggleClass(`fade`,this.animation),this._appliedBackdropClass&&this._appliedBackdropClass.split(/\s+/).filter(Boolean).forEach(e=>{this.$element.removeClass(e)}),this.backdropClass&&this.backdropClass.split(/\s+/).filter(Boolean).forEach(e=>{this.$element.addClass(e)}),this._appliedBackdropClass=this.backdropClass}$onDestroy(){this.$element.off(`mousedown`)}hide(){return K(this._ngZone,this.$element,lp,{animation:this.animation??!0,runningTransition:`stop`}).pipe(ls(void 0))}dismiss(){this.static||this.onDismiss?.({$event:0})}updateOptions(e){let t=e;this._ngZone.run(()=>{up.forEach(e=>{n.default.isDefined(t[e])&&Object.assign(this,{[e]:t[e]})}),this.$onChanges()})}static get $name(){return`ngbOffcanvasBackdrop`}static get $inject(){return[`$element`,U.$name]}static get $factory(){return{bindings:{animation:`<?`,backdropClass:`@?`,static:`<?`,onDismiss:`&?`},controller:e,template:``}}},fp=class{close(e){}dismiss(e){}},pp=class{constructor(e,t,r,i,a){this.$q=e,this.panelRef=t,this.contentRef=r,this.backdropRef=i,this._beforeDismiss=a,this._hidden=new z,this._dismissed=new z,this._closed=new z;let o=this.$q.defer();this.result=o.promise,this._reject=o.reject,this._resolve=o.resolve,o.promise.then(n.default.noop,n.default.noop),this.panelRef.componentInstance&&(this.panelRef.componentInstance.onDismiss=({$event:e})=>this.dismiss(e)),this.backdropRef?.componentInstance&&(this.backdropRef.componentInstance.onDismiss=({$event:e})=>this.dismiss(e))}dismiss(e){if(!this.panelRef)return;if(!this._beforeDismiss){this._dismiss(e);return}let t=this._beforeDismiss();this.$q.when(t).then(t=>{t!==!1&&this._dismiss(e)},n.default.noop)}close(e){this.panelRef&&(this._closed.next(e),this._resolve?.(e),this._removeOffcanvasElements())}_dismiss(e){this._dismissed.next(e),this._reject?.(e),this._removeOffcanvasElements()}get closed(){return this._closed.asObservable().pipe(V(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(V(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this.panelRef.componentInstance?.shown.asObservable()}get componentInstance(){return this.contentRef.componentInstance}_removeOffcanvasElements(){let e=this.panelRef.componentInstance?.hide(),t=this.backdropRef?.componentInstance?.hide()??wo(void 0);e?.subscribe(()=>{this.panelRef.$element.remove(),this.panelRef.destroy(),this.contentRef.destroy(),this.panelRef=null,this.contentRef=null}),t.subscribe(()=>{this.backdropRef&&=(this.backdropRef.$element.remove(),this.backdropRef.destroy(),null)}),os(e??wo(void 0),t).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},mp=(e,t)=>(t&&Xu(e),e.addClass(`show showing`),()=>{e.removeClass(`showing`)}),hp=e=>(e.removeClass(`showing`),e.addClass(`hiding`),()=>{e.removeClass(`show hiding`)}),gp=[`animation`,`ariaLabelledBy`,`ariaDescribedBy`,`keyboard`,`panelClass`,`position`],_p=class e{constructor(e,t){this.$element=e,this._ngZone=t,this.keyboard=!0,this.position=`start`,this.shown=new z,this.hidden=new z,this._elWithFocus=null,this._closed$=new z}$onInit(){this._elWithFocus=document.activeElement}$postLink(){this.$element.addClass(`offcanvas`),this.$element.attr(`role`,`dialog`),this.$element.attr(`tabindex`,`-1`),this.$element.attr(`aria-modal`,`true`),this._ngZone.runOutsideAngular(()=>queueMicrotask(()=>this._show()))}$onChanges(){let e=`offcanvas-${this.position}`;this._appliedPositionClass&&this.$element.removeClass(this._appliedPositionClass),this.$element.addClass(e),this._appliedPositionClass=e,this._appliedPanelClass&&this._appliedPanelClass.split(/\s+/).filter(Boolean).forEach(e=>{this.$element.removeClass(e)}),this.panelClass&&this.panelClass.split(/\s+/).filter(Boolean).forEach(e=>{this.$element.addClass(e)}),this._appliedPanelClass=this.panelClass,sd(this.$element,`aria-labelledby`,this.ariaLabelledBy),sd(this.$element,`aria-describedby`,this.ariaDescribedBy)}$onDestroy(){this._disableEventHandling()}dismiss(e){this.onDismiss?.({$event:e})}updateOptions(e){let t=e;this._ngZone.run(()=>{gp.forEach(e=>{n.default.isDefined(t[e])&&Object.assign(this,{[e]:t[e]})}),this.$onChanges()})}hide(){let e={animation:!!this.animation,runningTransition:`stop`},t=K(this._ngZone,this.$element,hp,e).pipe(ls(void 0));return t.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),t}_show(){let e={animation:!!this.animation,runningTransition:`continue`};K(this._ngZone,this.$element,mp,e).pipe(ls(void 0)).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){qo(q(this.$element),`keydown`).pipe(V(this._closed$),rs(e=>e.key===`Escape`)).subscribe(e=>{this.keyboard&&requestAnimationFrame(()=>{e.defaultPrevented||this._ngZone.run(()=>this.dismiss(1))})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let e=q(this.$element);if(!e.contains(document.activeElement)){let t=e.querySelector(`[ngbAutofocus]`),[n]=Vu(e);(t||n||e).focus()}}_restoreFocus(){let e=document.body,t=this._elWithFocus,n=t instanceof HTMLElement&&e.contains(t)?t:e;this._ngZone.runOutsideAngular(()=>setTimeout(()=>n.focus())),this._elWithFocus=null}static get $name(){return`ngbOffcanvasPanel`}static get $inject(){return[`$element`,U.$name]}static get $factory(){return{bindings:{animation:`<?`,ariaLabelledBy:`<?`,ariaDescribedBy:`<?`,keyboard:`<?`,panelClass:`<?`,position:`<?`,onDismiss:`&?`},controller:e,controllerAs:`$`,template:``}}},vp=class{constructor(e,t,n,r,i){this.ngbScrollbar=e,this._ngZone=t,this.$compile=n,this.$rootScope=r,this.$q=i,this._scrollBarRestoreFn=null,this._activePanelCmptHasChanged=new z,this._activeInstance=new z,this._activePanelCmptHasChanged.subscribe(()=>{this._panelRef&&Hu(this._ngZone,q(this._panelRef.$element),this._activePanelCmptHasChanged)})}async open(e,t){let n=this.$q.defer(),r=this._resolveContainer(t.container);if(!r)throw Error(`The specified offcanvas container "${t.container||`body`}" was not found in the DOM.`);t.scroll||this._hideScrollBar();let i=new fp,a=this._getContentRef(e,i,t),o=t.backdrop===!1?void 0:this._attachBackdrop(r);return await this.$q.all([o,a]).then(([e,a])=>this._attachPanelComponent(r,a.$element).then(r=>{let o=new pp(this.$q,r,a,e,t.beforeDismiss);i.close=e=>{o.close(e)},i.dismiss=e=>{o.dismiss(e)},r.componentInstance&&this._applyPanelOptions(r.componentInstance,t),e?.componentInstance&&this._applyBackdropOptions(e.componentInstance,t),this._registerOffcanvasRef(o),this._registerPanelRef(r),o.hidden.pipe(vs(()=>this._restoreScrollBar())).subscribe(),n.resolve(o)})),n.promise}get activeInstance(){return this._activeInstance.asObservable()}dismiss(e){this._offcanvasRef?.dismiss(e)}hasOpenOffcanvas(){return!!this._offcanvasRef}_restoreScrollBar(){let e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||=this.ngbScrollbar.hide()}_resolveContainer(e){if(n.default.isString(e)){let t=document.querySelector(String(e));return t?n.default.element(t):void 0}return e??n.default.element(document.body)}_attachBackdrop(e){let t=this.$q.defer(),n=this.$rootScope.$new(!0),r=this.$compile(`<ngb-offcanvas-backdrop></ngb-offcanvas-backdrop>`)(n);e.append(r);let i=this.$rootScope.$watch(()=>r.controller(dp.$name),e=>{i();let a=new xf(r,n,e);t.resolve(a)});return t.promise}_attachPanelComponent(e,t){let n=this.$q.defer(),r=this.$rootScope.$new(!0),i=this.$compile(`<ngb-offcanvas-panel></ngb-offcanvas-panel>`)(r);i.append(t),e.append(i);let a=this.$rootScope.$watch(()=>i.controller(_p.$name),e=>{a();let t=new xf(i,r,e);n.resolve(t)});return n.promise}_applyPanelOptions(e,t){e.updateOptions(t)}_applyBackdropOptions(e,t){e.updateOptions(t),e.static=t.backdrop===`static`}_getContentRef(e,t,r){let i=this.$q.defer();if(e instanceof Oc){let r=e.createEmbeddedView({$implicit:t,close:e=>t.close(e),dismiss:e=>t.dismiss(e)});return i.resolve(new xf(n.default.element(r.rootNodes),void 0,void 0,r)),i.promise}let a=this.$rootScope.$new(!0),o=ad(e),s=this._buildBindingsAttrs(r),c=this.$compile(`<${o} ${s} ngb-active-offcanvas="activeOffcanvas"></${o}>`);a.activeOffcanvas=t,n.default.extend(a,r.bindings);let l=c(a),u=this.$rootScope.$watch(()=>l.controller(e),e=>{u();let t=new xf(l,a,e);i.resolve(t)});return i.promise}_buildBindingsAttrs(e){return Object.entries(e.bindings||{}).map(([e,t])=>`${ad(e)}="${t}"`).join(` `)}_registerOffcanvasRef(e){let t=()=>{this._offcanvasRef=void 0,this._activeInstance.next(this._offcanvasRef)};this._offcanvasRef=e,this._activeInstance.next(this._offcanvasRef),e.result?.then(t,t)}_registerPanelRef(e){this._panelRef=e,this._activePanelCmptHasChanged.next(),e.$scope?.$on(`$destroy`,()=>{this._panelRef=void 0,this._activePanelCmptHasChanged.next()})}static get $name(){return`ngb.offcanvas.stack.service`}static get $inject(){return[bf.$name,U.$name,`$compile`,`$rootScope`,`$q`]}},yp=class{constructor(e,t){this.ngbOffcanvasStack=e,this.ngbOffcanvasConfig=t}open(e,t={}){let n={...this.ngbOffcanvasConfig,animation:this.ngbOffcanvasConfig.animation,...t};return this.ngbOffcanvasStack.open(e,n)}get activeInstance(){return this.ngbOffcanvasStack.activeInstance}dismiss(e){this.ngbOffcanvasStack.dismiss(e)}hasOpenOffcanvas(){return this.ngbOffcanvasStack.hasOpenOffcanvas()}static get $name(){return`ngb.offcanvas.service`}static get $inject(){return[vp.$name,sp.$name]}},bp=n.default.module(`ngb.offcanvas`,[W.name]);bp.service(yp.$name,yp),bp.service(vp.$name,vp),bp.service(sp.$name,sp),bp.component(dp.$name,dp.$factory),bp.component(_p.$name,_p.$factory);var xp=class{constructor(e){this._config=e,this.autoClose=!0,this.placement=`auto`,this.popperOptions=e=>e,this.triggers=`click`,this.disablePopover=!1,this.openDelay=0,this.closeDelay=0}get animation(){return this._animation??this._config.animation}set animation(e){this._animation=e}static get $inject(){return[Pu.$name]}static get $name(){return`ngb.popover-config.service`}},Sp=`<div class="popover-arrow" data-popper-arrow></div>\r
\r
<h3 ng-if="$.title" class="popover-header">
    <ng-template ng-ref="simpleTitle">{{ $.title }}</ng-template>
    <ng-template
            ng-template-outlet="$.isTitleTemplate() ? $.title : simpleTitle"
            ng-template-outlet-context="$.context"
    ></ng-template>
</h3>

<div class="popover-body" ngb-popup-content></div>
`,Cp=class e{constructor(e){this.$element=e}$postLink(){this.$element.addClass(`popover`),this.$element.attr(`role`,`tooltip`),this.$element.css(`position`,`absolute`)}$onChanges(e){this.id?this.$element.attr(`id`,this.id):this.$element.removeAttr(`id`),this.$element.toggleClass(`fade`,this.animation);let t=e?.popoverClass?.previousValue;typeof t==`string`&&t&&this.$element.removeClass(t),this.popoverClass&&this.$element.addClass(this.popoverClass),(this.onMouseEnter||this.onMouseLeave)&&(this.$element.off(`mouseenter`),this.$element.off(`mouseleave`),this.$element.on(`mouseenter`,this.onMouseEnter?.bind(this)??n.default.noop),this.$element.on(`mouseleave`,this.onMouseLeave?.bind(this)??n.default.noop))}$onDestroy(){this.$element.off(`mouseenter`),this.$element.off(`mouseleave`)}isTitleTemplate(){return this.title instanceof Oc}static get $inject(){return[`$element`]}static get $factory(){return{bindings:{animation:`<?`,title:`<?`,id:`<?`,popoverClass:`@?`,context:`<?`,onMouseEnter:`&?`,onMouseLeave:`&?`},controller:e,controllerAs:`$`,template:Sp}}static get $name(){return`ngbPopoverWindow`}},wp={hover:[`mouseenter`,`mouseleave`],focus:[`focusin`,`focusout`]};function Tp(e=``){let t=(e||``).trim();if(t.length===0)return[];let n=t.split(/\s+/).map(e=>e.split(`:`)).map(e=>wp[e[0]]||e),r=n.filter(e=>e.includes(`manual`));if(r.length>1)throw`Triggers parse error: only one manual trigger is allowed`;if(r.length===1&&n.length>1)throw`Triggers parse error: manual trigger can't be mixed with other triggers`;return r.length?[]:n}function Ep(e,t,n,r,i,a,o=0,s=0,c=Ha,l=Ha){let u=Tp(n);if(u.length===0)return()=>{};let d=new Set,f=[],p;function m(e,n){t.addEventListener(e,n),f.push(()=>t.removeEventListener(e,n))}function h(t,n){e.cancel(p),n>0?p=e(t,n):t()}for(let[t,n]of u)if(n?(m(t,()=>{d.add(t),h(()=>d.size>0&&i(),o)}),m(n,()=>{d.delete(t),h(()=>d.size===0&&a(),s)})):m(t,()=>r()?h(a,s):h(i,o)),t===`mouseenter`&&n===`mouseleave`&&s>0){let n=c.subscribe(()=>{d.delete(t),e.cancel(p)}),r=l.subscribe(()=>{d.delete(t),h(()=>d.size===0&&a(),s)});f.push(()=>n.unsubscribe(),()=>r.unsubscribe())}return f.push(()=>e.cancel(p)),()=>{f.forEach(e=>{e()})}}var Dp=0,Op=class e{constructor(e,t,n,r,i,a,o,s){this._config=e,this.$element=t,this._popupFactory=n,this._rtl=r,this.$timeout=i,this.$scope=a,this._ngZone=o,this._changeDetector=s,this._ngbPopoverWindowId=`ngb-popover-${Dp++}`,this._windowRef=null,this._hidden$=new z,this._mouseEnterPopover=new z,this._mouseLeavePopover=new z,this._opening=!0,this._transitioning=!1,this._nativeElement=q(this.$element)}open(e){if(!this._opening&&this._transitioning&&this._windowRef&&(this._transitioning=!1,Yu(this._windowRef.$element)),!this._windowRef&&!this._isDisabled()){let t=e??this.popoverContext,{windowRef:n,transition$:r}=this._popupService.open(this.ngbPopover,t,this.animation);this._opening=!0,this._transitioning=!0,this._windowRef=n,n.setInput(`animation`,this.animation),n.setInput(`title`,this.popoverTitle),n.setInput(`context`,t),n.setInput(`popoverClass`,this.popoverClass),n.setInput(`id`,this._ngbPopoverWindowId),n.setInput(`onMouseEnter`,()=>this._mouseEnterPopover.next()),n.setInput(`onMouseLeave`,()=>this._mouseLeavePopover.next()),this._getPositionTargetElement().setAttribute(`aria-describedby`,this._ngbPopoverWindowId);let i=q(n.$element);this.container===`body`?document.body.appendChild(i):this._nativeElement.parentNode?.insertBefore(i,this._nativeElement.nextSibling),n.$scope?.$evalAsync(),this._changeDetector.markForCheck(),this._ngZone.runOutsideAngular(()=>{this._positioning.createPopper({hostElement:this._getPositionTargetElement(),targetElement:i,placement:this.placement,baseClass:`bs-popover`,updatePopperOptions:e=>this.popperOptions(uf([0,8])(e))}),Promise.resolve().then(()=>this._positioning.update()),this._afterRenderRef=this.$scope.$watch(()=>this._positioning.update())}),Xd(this._ngZone,this.autoClose,this._hidden$,()=>this.close(),[i]),r.subscribe(()=>{this._transitioning&&(this._transitioning=!1,this.shown?.())})}}close(e=this.animation){this._opening&&this._transitioning&&this._windowRef&&(this._transitioning=!1,Yu(this._windowRef.$element));let t=this._windowRef;t&&(this._getPositionTargetElement().removeAttribute(`aria-describedby`),this._opening=!1,this._transitioning=!0,this._popupService.close(e).subscribe(()=>{t.$element.remove(),this._windowRef=null,this._positioning.destroy(),this._afterRenderRef?.(),this._afterRenderRef=void 0,this._transitioning&&(this._transitioning=!1,this._hidden$.next(),this.hidden?.()),this._changeDetector.markForCheck()}))}toggle(){this._windowRef?this.close():this.open()}isOpen(){return this._windowRef!=null}$onInit(){this._popupService=this._popupFactory.$create(Cp.$name),this._positioning=lf(this._rtl),this.animation=this.animation??this._config.animation,this.autoClose=this.autoClose??this._config.autoClose,this.placement=this.placement??this._config.placement,this.popperOptions=this.popperOptions??this._config.popperOptions,this.triggers=this.triggers??this._config.triggers,this.container=this.container??this._config.container,this.disablePopover=this.disablePopover??this._config.disablePopover,this.popoverClass=this.popoverClass??this._config.popoverClass,this.openDelay=this.openDelay??this._config.openDelay,this.closeDelay=this.closeDelay??this._config.closeDelay,this._unregisterListenersFn=Ep(this.$timeout,this._nativeElement,this.triggers,this.isOpen.bind(this),this.open.bind(this),this.close.bind(this),+this.openDelay,+this.closeDelay,this._mouseEnterPopover,this._mouseLeavePopover)}$onChanges(e){let{ngbPopover:t,popoverTitle:n,disablePopover:r,popoverClass:i}=e;i&&this.isOpen()&&this._windowRef?.setInput(`popoverClass`,i.currentValue),(t||n||r)&&this._isDisabled()&&this.close()}$onDestroy(){this.close(!1),this._unregisterListenersFn?.()}_isDisabled(){return this.disablePopover?!0:!this.ngbPopover&&!this.popoverTitle}_getPositionTargetElement(){return(typeof this.positionTarget==`string`?document.querySelector(this.positionTarget):this.positionTarget)||this._nativeElement}static get $inject(){return[xp.$name,`$element`,wf.$name,df.$name,`$timeout`,`$scope`,U.$name,H.$name]}static get $factory(){return()=>({bindToController:{animation:`<?`,autoClose:`<?`,ngbPopover:`<?`,popoverTitle:`<?`,placement:`<?`,popperOptions:`<?`,triggers:`<?`,positionTarget:`<?`,container:`<?`,disablePopover:`<?`,popoverClass:`@?`,popoverContext:`<?`,openDelay:`<?`,closeDelay:`<?`,shown:`&?`,hidden:`&?`},controller:e,restrict:`A`,scope:!0})}static get $name(){return`ngbPopover`}},kp=n.default.module(`ngb.popover`,[W.name]);kp.service(Pu.$name,Pu),kp.factory(wf.$name,wf),kp.service(df.$name,df),kp.service(xp.$name,xp),kp.component(Cp.$name,Cp.$factory),kp.directive(Op.$name,Op.$factory);var Ap=`<div\r
    class="progress-bar"\r
    ng-class="[\r
        $.type ? ($.textType ? 'bg-' + $.type : ' text-bg-' + $.type) : '',\r
        $.textType ? ' text-' + $.textType : '',\r
        { 'progress-bar-animated': $.animated, 'progress-bar-striped': $.striped },\r
    ]"\r
    ng-style="{ width: !$.stacked ? $.getPercentValue() + '%' : null }">\r
    <span ng-if="$.showValue">{{ $.getValue() / $.max | ngbProgressbarPercent }}</span>\r
    <ng-content></ng-content>
</div>\r
`,jp=class{constructor(){this.ariaLabel=`progress bar`,this.animated=!1,this.max=100,this.showValue=!1,this.striped=!1}static get $name(){return`ngb.progressbar.config.service`}},Mp=class e{constructor(e,t){this.ngbProgressbarConfig=e,this.$element=t}$onInit(){this.animated=this.animated??this.ngbProgressbarConfig.animated,this.ariaLabel=this.ariaLabel??this.ngbProgressbarConfig.ariaLabel,this.height=this.height??this.ngbProgressbarConfig.height,this._max=this._max??this.ngbProgressbarConfig.max,this.showValue=this.showValue??this.ngbProgressbarConfig.showValue,this.striped=this.striped??this.ngbProgressbarConfig.striped,this.textType=this.textType??this.ngbProgressbarConfig.textType,this.type=this.type??this.ngbProgressbarConfig.type,this.value=this.value??0}$postLink(){this.$element.attr(`role`,`progressbar`),this.$element.addClass(`progress`),this.$element.css({height:this.height??``}),this.$element.attr(`aria-valuemin`,0),this.$element.attr(`aria-label`,`${this.ariaLabel}`)}$onChanges(){this.$element.attr(`aria-valuenow`,this.getValue()),this.$element.attr(`aria-valuemax`,this.max),this.stacked&&this.$element.css({width:`${this.getPercentValue()}%`})}set max(e){this._max=!n.default.isNumber(e)||e<=0?100:e}get max(){return this._max??this.ngbProgressbarConfig.max}getValue(){return Qu(this.value??0,this.max??this.ngbProgressbarConfig.max)}getPercentValue(){return 100*this.getValue()/(this.max??this.ngbProgressbarConfig.max)}static get $name(){return`ngbProgressbar`}static get $inject(){return[jp.$name,`$element`]}static get $factory(){return{bindings:{animated:`<?`,ariaLabel:`@?`,height:`@?`,max:`<?`,showValue:`<?`,striped:`<?`,textType:`@?`,type:`@?`,value:`<`},require:{stacked:`^?ngbProgressbarStacked`},transclude:!0,controller:e,controllerAs:`$`,template:Ap}}},Np=class{static get $name(){return`ngbProgressbarPercent`}static $transform(){return e=>{let t=Number(e);return Number.isFinite(t)?`${Math.round(t*1e4)/100}%`:`0%`}}},Pp=class e{constructor(e){this.$element=e}$postLink(){this.$element.addClass(`progress-stacked`)}static get $name(){return`ngbProgressbarStacked`}static get $inject(){return[`$element`]}static get $factory(){return{controller:e,controllerAs:`$`}}},Fp=n.default.module(`ngb.progressbar`,[W.name]);Fp.service(jp.$name,jp),Fp.component(Mp.$name,Mp.$factory),Fp.component(Pp.$name,Pp.$factory),Fp.filter(Np.$name,Np.$transform);var Ip=`<ng-template ng-ref="defaultStar" let-fill="fill">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>

<span ng-repeat="star in $.contexts track by $index">
    <span class="visually-hidden">({{ $index < $.nextRate ? '*' : ' ' }})</span>
    <span
        ng-mouseenter="$.enter($index + 1)"
        ng-click="$.handleClick($index + 1)"
        ng-style="{ cursor: $.isInteractive() ? 'pointer' : 'default' }">
        <ng-container
            ng-template-outlet="$.starTemplate || $.starTemplateFromContent || $.defaultStarTemplate"
            ng-template-outlet-context="star">
        </ng-container>
    </span>
</span>

<ng-content></ng-content>
`,Lp=class{constructor(){this.max=10,this.readonly=!1,this.resettable=!1,this.tabindex=0}static get $name(){return`ngb.rating.config.service`}},Rp=class e{constructor(e,t,n){this.$element=e,this.$scope=t,this.ngbRatingConfig=n,this.contexts=[]}$onInit(){this.readonly=this.readonly??this.ngbRatingConfig.readonly,this.resettable=this.resettable??this.ngbRatingConfig.resettable,this.tabindex=this.tabindex??this.ngbRatingConfig.tabindex,this.rate=this.rate??0,this._setupContexts(),this.update(this.rate)}$postLink(){this.$element.addClass(`d-inline-flex`),this.$element.attr(`role`,`slider`),this.$element.attr(`aria-valuemin`,`0`),this.$element.on(`blur`,()=>this.$scope.$evalAsync()),this.$element.on(`keydown`,e=>this.$scope.$evalAsync(()=>this._handleKeyDown(e))),this.$element.on(`mouseleave`,()=>this.$scope.$evalAsync(()=>this.reset())),this.removeDisabledListener=this.ngDisabled?.onChange(()=>this._render()),this._render()}$onDestroy(){this.$element.off(`blur`),this.$element.off(`keydown`),this.$element.off(`mouseleave`),this.removeDisabledListener?.()}$onChanges(e){`rate`in e&&this.update(this.rate),`max`in e&&!e.max.isFirstChange()&&this._updateMax(),this._render()}set max(e){this._max=e}get max(){return this._max??this.ngbRatingConfig.max}ariaValueText(e,t){return`${e} out of ${t}`}isInteractive(){return!this.readonly&&!this.isDisabled()}isDisabled(){return this.ngDisabled?.disabled??!1}enter(e){this.isInteractive()&&this._updateState(e),this.hover?.({$event:e})}handleClick(e){this.isInteractive()&&this.update(this.resettable&&this.rate===e?0:e)}reset(){this.leave?.({$event:this.nextRate}),this._updateState(this.rate)}update(e){let t=Qu(e,this.max,0);this.isInteractive()&&this.rate!==t&&(this.rate=t,this.rateChange?.({$event:this.rate})),this._updateState(this.rate)}_handleKeyDown(e){switch(e.key){case`ArrowDown`:case`ArrowLeft`:this.update(this.rate-1);break;case`ArrowUp`:case`ArrowRight`:this.update(this.rate+1);break;case`Home`:this.update(0);break;case`End`:this.update(this.max);break;default:return}e.preventDefault()}_updateState(e){this.nextRate=e,this.contexts=this.contexts.map((t,n)=>({...t,fill:Math.round(Qu(e-n,1,0)*100)})),this._render()}_render(){this.$element.attr(`tabindex`,this.isDisabled()?`-1`:`${this.tabindex??this.ngbRatingConfig.tabindex}`),this.$element.attr(`aria-valuemax`,`${this.max}`),this.$element.attr(`aria-valuenow`,`${this.nextRate}`),this.$element.attr(`aria-valuetext`,this.ariaValueText(this.nextRate,this.max)),this.readonly&&!this.isDisabled()?this.$element.attr(`aria-readonly`,`true`):this.$element.removeAttr(`aria-readonly`),this.isDisabled()?this.$element.attr(`aria-disabled`,`true`):this.$element.removeAttr(`aria-disabled`)}_updateMax(){this.max>0&&(this._setupContexts(),this.update(this.rate))}_setupContexts(){this.contexts=Array.from({length:this.max},(e,t)=>({fill:0,index:t}))}static get $name(){return`ngbRating`}static get $inject(){return[`$element`,`$scope`,Lp.$name]}static get $factory(){return{bindings:{max:`<?`,rate:`<?`,rateChange:`&?`,readonly:`<?`,resettable:`<?`,starTemplate:`<?`,tabindex:`<?`,ariaValueText:`<?`,hover:`&?`,leave:`&?`},controller:e,controllerAs:`$`,require:{ngDisabled:`?ngDisabled`},transclude:!0,template:Ip}}};G([Ks(Oc,{static:!1})],Rp.prototype,`starTemplateFromContent`,2),G([dc(`defaultStar`,{read:Oc,static:!0})],Rp.prototype,`defaultStarTemplate`,2);var zp=Rp,Bp=n.default.module(`ngb.rating`,[W.name]);Bp.component(zp.$name,zp.$factory),Bp.service(Lp.$name,Lp);function Vp(e){return e?e instanceof Element?e:q(e):null}function Hp(e,t){if(!e||t==null)return null;let r=Vp(e);return r?n.default.isString(t)?r.querySelector(`#${CSS.escape(t)}`):Vp(t):null}function Up(e,t){let n=[...t].map(({id:e})=>`#${CSS.escape(e)}`).join(`,`);return Array.from(e.querySelectorAll(n))}var Wp=(e,t,n)=>{let{rootElement:r,fragments:i,scrollSpy:a,options:o,entries:s}=e,c=Up(r,i),l=n;if(!l.initialized){l.initialized=!0,l.gapFragment=null,l.visibleFragments=new Set;let e=Hp(r,o?.initialFragment);if(e){a.scrollTo(e);return}}let u=l.visibleFragments;for(let e of s){let{isIntersecting:n,target:r}=e;if(n){l.gapFragment&&=(u.delete(l.gapFragment),null),u.add(r);continue}if(u.delete(r),!(u.size>0||a.active===``)){if(e.boundingClientRect.top<e.rootBounds.top){l.gapFragment=r,u.add(l.gapFragment);continue}if(r===c[0]){l.gapFragment=null,u.clear(),t(``);return}l.gapFragment=c[c.indexOf(r)-1]||null,l.gapFragment&&u.add(l.gapFragment)}}for(let e of c)if(u.has(e)){t(e.id);break}},Gp=class{constructor(){this.scrollBehavior=`smooth`,this.processChanges=Wp}static get $name(){return`ngb.scrollspy.config.service`}},Kp=class e{constructor(e){this.$element=e}$postLink(){this.$element.attr(`id`,this.id),this.ngbScrollSpy._registerFragment(this)}$onChanges(){this.$element.attr(`id`,this.id)}$onDestroy(){this.ngbScrollSpy._unregisterFragment(this)}static get $name(){return`ngbScrollSpyFragment`}static get $factory(){return()=>({bindToController:{id:`@ngbScrollSpyFragment`},controller:e,require:{ngbScrollSpy:`^ngbScrollSpy`},scope:!0,restrict:`A`})}static get $inject(){return[`$element`]}},qp=3,Jp=class{constructor(e,t,n){this.$config=e,this._diChangeDetectorRef=t,this._ngZone=n,this._observer=null,this._containerElement=null,this._fragments=new Set,this._preRegisteredFragments=new Set,this._active$=new z,this._distinctActive$=this._active$.pipe(hs()),this._active=``,this._scrollBehavior=this.$config.scrollBehavior,this._changeDetectorRef=this._diChangeDetectorRef,this._activeSubscription=this._distinctActive$.subscribe(e=>{this._active=e,this._changeDetectorRef.markForCheck()})}get active(){return this._active}get active$(){return this._distinctActive$}start(e){this._cleanup();let{root:t,rootMargin:r,scrollBehavior:i,threshold:a,fragments:o,changeDetectorRef:s,processChanges:c}={...e},l=Hp(document.documentElement,t??document.documentElement);if(!l)return;this._containerElement=n.default.element(l),this._changeDetectorRef=s??this._diChangeDetectorRef,this._scrollBehavior=i??this.$config.scrollBehavior;let u=c??this.$config.processChanges,d={};this._observer=new IntersectionObserver(t=>u({entries:t,rootElement:l,fragments:this._fragments,scrollSpy:this,options:{...e}},e=>this._active$.next(e),d),{root:l,...r&&{rootMargin:r},...a&&{threshold:a}});for(let e of[...this._preRegisteredFragments,...o??[]])this.observe(e);this._preRegisteredFragments.clear()}stop(){this._cleanup(),this._active$.next(``)}scrollTo(e,t){let{behavior:n}={behavior:this._scrollBehavior,...t},r=Hp(document.documentElement,this._containerElement);if(!r)return;let i=Hp(r,e);if(!i)return;let a=i.offsetTop-r.offsetTop;r.scrollTo({top:a,behavior:n});let o=r.scrollTop,s=0;this._ngZone.runOutsideAngular(()=>{let e=()=>{let t=o===r.scrollTop;if(t?s++:s=0,!t||t&&s<qp){o=r.scrollTop,requestAnimationFrame(e);return}this._ngZone.run(()=>this._active$.next(i.id))};requestAnimationFrame(e)})}observe(e){if(!this._observer){this._preRegisteredFragments.add(e);return}let t=Hp(this._containerElement,e);!t||this._fragments.has(t)||(this._fragments.add(t),this._observer.observe(t))}unobserve(e){if(!this._observer){this._preRegisteredFragments.delete(e);return}let t=Hp(this._containerElement,e);if(t){this._fragments.delete(t),this._observer.disconnect();for(let e of this._fragments)this._observer.observe(e)}}$onDestroy(){this._cleanup(),this._activeSubscription.unsubscribe(),this._active$.complete()}_cleanup(){this._fragments.clear(),this._observer?.disconnect(),this._changeDetectorRef=this._diChangeDetectorRef,this._scrollBehavior=this.$config.scrollBehavior,this._observer=null,this._containerElement=null}static get $name(){return`ngb.scrollspy.service`}static get $inject(){return[Gp.$name,H.$name,U.$name]}},Yp=class e{constructor(e,t){this.$element=e,this.$scrollSpy=t,this._isActive=!1}$onInit(){this._scrollSpyAPI=this.scrollSpyMenu??this.scrollSpy??this.parentScrollSpy??this.$scrollSpy,this._applyData(this.data)}$postLink(){this.scrollSpyMenu||(this._activeSubscription=this._scrollSpyAPI.active$.subscribe(e=>{e===this.fragment?this._activate():this._deactivate()})),this._clickListener=()=>this.scrollTo(),this.$element.on(`click`,this._clickListener),this._applyHostBindings()}$onChanges(){this._applyData(this.data),this._applyHostBindings()}$onDestroy(){this._clickListener&&this.$element.off(`click`,this._clickListener),this._activeSubscription?.unsubscribe()}_activate(){this._isActive=!0,this._applyHostBindings(),this.scrollSpyMenu?.getItem(this.parent??``)?._activate()}_deactivate(){this._isActive=!1,this._applyHostBindings(),this.scrollSpyMenu?.getItem(this.parent??``)?._deactivate()}isActive(){return this._isActive}scrollTo(e){this._scrollSpyAPI.scrollTo(this.fragment,e)}_applyData(e){if(this.scrollSpy&&(this._scrollSpyAPI=this.scrollSpy),Array.isArray(e)){this._scrollSpyAPI=e[0],this.fragment=e[1],this.parent??=e[2];return}if(n.default.isString(e)){this.fragment=e;return}e&&(this._scrollSpyAPI=e)}_applyHostBindings(){this.$element.toggleClass(`active`,this.isActive())}static get $name(){return`ngbScrollSpyItem`}static get $factory(){return()=>({bindToController:{data:`@?ngbScrollSpyItem`,fragment:`@?`,parent:`@?`,scrollSpy:`<?`},controller:e,require:{parentScrollSpy:`?^ngbScrollSpy`,scrollSpyMenu:`?^ngbScrollSpyMenu`},scope:!0,restrict:`A`})}static get $inject(){return[`$element`,Jp.$name]}},Xp=class e{constructor(e){this.$scrollSpy=e,this._map=new Map,this._lastActiveItem=null}$onInit(){this._scrollSpyRef=this.scrollSpy??this.parentScrollSpy??this.$scrollSpy}$postLink(){this._rebuildMap(),this._itemsSubscription=this._items.changes.subscribe(()=>this._rebuildMap()),this._activeSubscription=this._scrollSpyRef.active$.subscribe(e=>{this._lastActiveItem?._deactivate();let t=this._map.get(e);t&&(t._activate(),this._lastActiveItem=t)})}$onDestroy(){this._activeSubscription?.unsubscribe(),this._itemsSubscription?.unsubscribe(),this._map.clear(),this._lastActiveItem=null}get active(){return this._scrollSpyRef.active}get active$(){return this._scrollSpyRef.active$}scrollTo(e,t){this._scrollSpyRef.scrollTo(e,t)}getItem(e){return this._map.get(e)}_rebuildMap(){this._map.clear();for(let e of this._items)this._map.set(e.fragment,e)}static get $name(){return`ngbScrollSpyMenu`}static get $factory(){return()=>({bindToController:{scrollSpy:`<?ngbScrollSpyMenu`},controller:e,require:{parentScrollSpy:`?^ngbScrollSpy`},scope:!0,restrict:`A`,transclude:!0,template:`<ng-content></ng-content>`})}static get $inject(){return[Jp.$name]}};G([$s(Yp,{descendants:!0})],Xp.prototype,`_items`,2);var Zp=Xp,Qp=class e{constructor(e,t,n,r){this.$element=e,this._changeDetector=n,this._initialFragment=null,this._service=new Jp(t,this._changeDetector,r)}set active(e){this._initialFragment=e,e&&this.scrollTo(e)}get active(){return this._service.active}get active$(){return this._service.active$}$postLink(){this.$element.attr(`tabindex`,`0`),this.$element.css(`overflow-y`,`auto`),this._service.start({processChanges:this.processChanges,root:this.$element,rootMargin:this.rootMargin,threshold:this.threshold,scrollBehavior:this.scrollBehavior,changeDetectorRef:this._changeDetector,...this._initialFragment&&{initialFragment:this._initialFragment}}),this._activeChangeSubscription=this._service.active$.subscribe(e=>{this.activeChange?.({$event:e})})}$onChanges(e){e.active&&!e.active.isFirstChange()&&(this.active=e.active.currentValue)}$onDestroy(){this._activeChangeSubscription?.unsubscribe(),this._service.$onDestroy()}_registerFragment(e){this._service.observe(e.id)}_unregisterFragment(e){this._service.unobserve(e.id)}scrollTo(e,t){this._service.scrollTo(e,{...this.scrollBehavior&&{behavior:this.scrollBehavior},...t})}static get $name(){return`ngbScrollSpy`}static get $factory(){return()=>({bindToController:{active:`@?`,activeChange:`&?`,processChanges:`<?`,rootMargin:`@?`,scrollBehavior:`@?`,threshold:`<?`},controller:e,scope:!0,restrict:`A`})}static get $inject(){return[`$element`,Gp.$name,H.$name,U.$name]}},$p=n.default.module(`ngb.scrollspy`,[Lc.name]);$p.directive(Qp.$name,Qp.$factory),$p.directive(Kp.$name,Kp.$factory),$p.directive(Yp.$name,Yp.$factory),$p.directive(Zp.$name,Zp.$factory),$p.service(Gp.$name,Gp),$p.service(Jp.$name,Jp);var em=`<fieldset ng-disabled="$.isDisabled()" ng-class="{ disabled: $.isDisabled() }">
    <div class="d-flex align-items-center">
        <div class="d-flex flex-column align-items-center">
            <button
                ng-if="$.spinners"
                ng-click="$.changeHour($.hourStep)"
                ng-disabled="$.isDisabled()"
                ng-class="{ 'btn-sm': $.isSmallSize, 'btn-lg': $.isLargeSize, disabled: $.isDisabled() }"
                class="btn btn-link px-2 py-0 lh-1"
                tabindex="-1"
                type="button">
                <span
                    class="chevron ngb-tp-chevron"
                    style="border-style: solid; border-width: 0.29em 0.29em 0 0; display: inline-block; height: 0.69em; left: 0.05em; position: relative; top: 0.15em; transform: rotate(-45deg); vertical-align: middle; width: 0.69em;"
                    aria-hidden="true">
                </span>
                <span class="visually-hidden">Increment hours</span>
            </button>

            <input
                ng-model="$.hourInput"
                ng-model-options="{ updateOn: 'change' }"
                ng-change="$.updateHour($.hourInput)"
                ng-blur="$.handleBlur()"
                ng-keydown="$event.key === 'ArrowUp' && $.changeHour($.hourStep); $event.key === 'ArrowDown' && $.changeHour(-$.hourStep); ($event.key === 'ArrowUp' || $event.key === 'ArrowDown') && $event.preventDefault()"
                ng-readonly="$.readonlyInputs"
                ng-disabled="$.isDisabled()"
                ng-class="{ 'form-control-sm': $.isSmallSize, 'form-control-lg': $.isLargeSize }"
                class="form-control text-center w-auto px-1"
                type="text"
                size="2"
                maxlength="2"
                inputmode="numeric"
                placeholder="HH"
                aria-label="Hours">

            <button
                ng-if="$.spinners"
                ng-click="$.changeHour(-$.hourStep)"
                ng-disabled="$.isDisabled()"
                ng-class="{ 'btn-sm': $.isSmallSize, 'btn-lg': $.isLargeSize, disabled: $.isDisabled() }"
                class="btn btn-link px-2 py-0 lh-1"
                tabindex="-1"
                type="button">
                <span
                    class="chevron ngb-tp-chevron bottom"
                    style="border-style: solid; border-width: 0.29em 0.29em 0 0; display: inline-block; height: 0.69em; left: 0.05em; position: relative; top: -0.3em; transform: rotate(135deg); vertical-align: middle; width: 0.69em;"
                    aria-hidden="true">
                </span>
                <span class="visually-hidden">Decrement hours</span>
            </button>
        </div>

        <div class="mx-1 fw-bold" aria-hidden="true">:</div>

        <div class="d-flex flex-column align-items-center">
            <button
                ng-if="$.spinners"
                ng-click="$.changeMinute($.minuteStep)"
                ng-disabled="$.isDisabled()"
                ng-class="{ 'btn-sm': $.isSmallSize, 'btn-lg': $.isLargeSize, disabled: $.isDisabled() }"
                class="btn btn-link px-2 py-0 lh-1"
                tabindex="-1"
                type="button">
                <span
                    class="chevron ngb-tp-chevron"
                    style="border-style: solid; border-width: 0.29em 0.29em 0 0; display: inline-block; height: 0.69em; left: 0.05em; position: relative; top: 0.15em; transform: rotate(-45deg); vertical-align: middle; width: 0.69em;"
                    aria-hidden="true">
                </span>
                <span class="visually-hidden">Increment minutes</span>
            </button>

            <input
                ng-model="$.minuteInput"
                ng-model-options="{ updateOn: 'change' }"
                ng-change="$.updateMinute($.minuteInput)"
                ng-blur="$.handleBlur()"
                ng-keydown="$event.key === 'ArrowUp' && $.changeMinute($.minuteStep); $event.key === 'ArrowDown' && $.changeMinute(-$.minuteStep); ($event.key === 'ArrowUp' || $event.key === 'ArrowDown') && $event.preventDefault()"
                ng-readonly="$.readonlyInputs"
                ng-disabled="$.isDisabled()"
                ng-class="{ 'form-control-sm': $.isSmallSize, 'form-control-lg': $.isLargeSize }"
                class="form-control text-center w-auto px-1"
                type="text"
                size="2"
                maxlength="2"
                inputmode="numeric"
                placeholder="MM"
                aria-label="Minutes">

            <button
                ng-if="$.spinners"
                ng-click="$.changeMinute(-$.minuteStep)"
                ng-disabled="$.isDisabled()"
                ng-class="{ 'btn-sm': $.isSmallSize, 'btn-lg': $.isLargeSize, disabled: $.isDisabled() }"
                class="btn btn-link px-2 py-0 lh-1"
                tabindex="-1"
                type="button">
                <span
                    class="chevron ngb-tp-chevron bottom"
                    style="border-style: solid; border-width: 0.29em 0.29em 0 0; display: inline-block; height: 0.69em; left: 0.05em; position: relative; top: -0.3em; transform: rotate(135deg); vertical-align: middle; width: 0.69em;"
                    aria-hidden="true">
                </span>
                <span class="visually-hidden">Decrement minutes</span>
            </button>
        </div>

        <div ng-if="$.seconds" class="d-flex align-items-center">
            <div class="mx-1 fw-bold" aria-hidden="true">:</div>

            <div class="d-flex flex-column align-items-center">
                <button
                    ng-if="$.spinners"
                    ng-click="$.changeSecond($.secondStep)"
                    ng-disabled="$.isDisabled()"
                    ng-class="{ 'btn-sm': $.isSmallSize, 'btn-lg': $.isLargeSize, disabled: $.isDisabled() }"
                    class="btn btn-link px-2 py-0 lh-1"
                    tabindex="-1"
                    type="button">
                    <span
                        class="chevron ngb-tp-chevron"
                        style="border-style: solid; border-width: 0.29em 0.29em 0 0; display: inline-block; height: 0.69em; left: 0.05em; position: relative; top: 0.15em; transform: rotate(-45deg); vertical-align: middle; width: 0.69em;"
                        aria-hidden="true">
                    </span>
                    <span class="visually-hidden">Increment seconds</span>
                </button>

                <input
                    ng-model="$.secondInput"
                    ng-model-options="{ updateOn: 'change' }"
                    ng-change="$.updateSecond($.secondInput)"
                    ng-blur="$.handleBlur()"
                    ng-keydown="$event.key === 'ArrowUp' && $.changeSecond($.secondStep); $event.key === 'ArrowDown' && $.changeSecond(-$.secondStep); ($event.key === 'ArrowUp' || $event.key === 'ArrowDown') && $event.preventDefault()"
                    ng-readonly="$.readonlyInputs"
                    ng-disabled="$.isDisabled()"
                    ng-class="{ 'form-control-sm': $.isSmallSize, 'form-control-lg': $.isLargeSize }"
                    class="form-control text-center w-auto px-1"
                    type="text"
                    size="2"
                    maxlength="2"
                    inputmode="numeric"
                    placeholder="SS"
                    aria-label="Seconds">

                <button
                    ng-if="$.spinners"
                    ng-click="$.changeSecond(-$.secondStep)"
                    ng-disabled="$.isDisabled()"
                    ng-class="{ 'btn-sm': $.isSmallSize, 'btn-lg': $.isLargeSize, disabled: $.isDisabled() }"
                    class="btn btn-link px-2 py-0 lh-1"
                    tabindex="-1"
                    type="button">
                    <span
                        class="chevron ngb-tp-chevron bottom"
                        style="border-style: solid; border-width: 0.29em 0.29em 0 0; display: inline-block; height: 0.69em; left: 0.05em; position: relative; top: -0.3em; transform: rotate(135deg); vertical-align: middle; width: 0.69em;"
                        aria-hidden="true">
                    </span>
                    <span class="visually-hidden">Decrement seconds</span>
                </button>
            </div>
        </div>

        <div ng-if="$.meridian" class="ms-2">
            <button
                ng-click="$.toggleMeridian()"
                ng-disabled="$.isDisabled()"
                ng-class="{ 'btn-sm': $.isSmallSize, 'btn-lg': $.isLargeSize, disabled: $.isDisabled() }"
                class="btn btn-outline-primary"
                type="button">
                {{
                    $.model && $.model.hour >= 12
                        ? $.i18n.getAfternoonPeriod()
                        : $.i18n.getMorningPeriod()
                }}
            </button>
        </div>
    </div>
</fieldset>
`,tm=class{constructor(e,t,n){this.hour=id(e),this.minute=id(t),this.second=id(n)}changeHour(e=1){this.updateHour((isNaN(this.hour)?0:this.hour)+e)}updateHour(e){if(Y(e)){this.hour=(e<0?24+e:e)%24;return}this.hour=NaN}changeMinute(e=1){this.updateMinute((isNaN(this.minute)?0:this.minute)+e)}updateMinute(e){if(Y(e)){this.minute=e%60<0?60+e%60:e%60,this.changeHour(Math.floor(e/60));return}this.minute=NaN}changeSecond(e=1){this.updateSecond((isNaN(this.second)?0:this.second)+e)}updateSecond(e){if(Y(e)){this.second=e<0?60+e%60:e%60,this.changeMinute(Math.floor(e/60));return}this.second=NaN}isValid(e=!0){return Y(this.hour)&&Y(this.minute)&&(!e||Y(this.second))}toString(){return`${this.hour||0}:${this.minute||0}:${this.second||0}`}},nm=class{constructor(){this.meridian=!1,this.spinners=!0,this.seconds=!1,this.hourStep=1,this.minuteStep=1,this.secondStep=1,this.disabled=!1,this.readonlyInputs=!1,this.size=`medium`}static get $name(){return`ngb.timepicker.config.service`}static get $inject(){return[]}},rm=class{static get $name(){return`ngb.timepicker.time.adapter`}},im=class e extends rm{fromModel(e){return e&&J(e.hour)&&J(e.minute)?{hour:e.hour,minute:e.minute,second:J(e.second)?e.second:null}:null}toModel(e){return e&&J(e.hour)&&J(e.minute)?{hour:e.hour,minute:e.minute,second:J(e.second)?e.second:null}:null}static $factory(){return new e}},am=class{static get $name(){return`ngb.timepicker.i18n`}},om=class extends am{constructor(e){super(),this.periods=[],this.periods=[e(new Date(36e5),`a`,`UTC`),e(new Date(468e5),`a`,`UTC`)]}getMorningPeriod(){return this.periods[0]}getAfternoonPeriod(){return this.periods[1]}static get $inject(){return[`dateFilter`]}},sm=/[^0-9]/g,cm=class e{constructor(e,t,r,i,a,o){this.$element=e,this._config=t,this._cd=r,this._ngbTimeAdapter=i,this.i18n=a,this.$log=o,this.hourInput=``,this.minuteInput=``,this.secondInput=``,this.onChange=n.default.noop,this.onTouched=n.default.noop,this.handleInputEvent=e=>{let t=e.target;t instanceof HTMLInputElement&&this.formatInput(t)}}set hourStep(e){this._hourStep=J(e)?e:this._config.hourStep}get hourStep(){return this._hourStep}set minuteStep(e){this._minuteStep=J(e)?e:this._config.minuteStep}get minuteStep(){return this._minuteStep}set secondStep(e){this._secondStep=J(e)?e:this._config.secondStep}get secondStep(){return this._secondStep}$onInit(){if(this.meridian=this.meridian??this._config.meridian,this.spinners=this.spinners??this._config.spinners,this.seconds=this.seconds??this._config.seconds,this.hourStep=this.hourStep??this._config.hourStep,this.minuteStep=this.minuteStep??this._config.minuteStep,this.secondStep=this.secondStep??this._config.secondStep,this.readonlyInputs=this.readonlyInputs??this._config.readonlyInputs,this.size=this.size??this._config.size,!this.ngModelCtrl){this.$log.error(`[ngbTimepicker] The ng-model attribute is required.`);return}let e=this.ngModelCtrl;e.$render=()=>this.writeValue(e.$viewValue),this.registerOnChange(t=>e.$setViewValue(t)),this.registerOnTouched(()=>e.$setTouched()),e.$render()}$postLink(){this.$element.addClass(`d-inline-block fs-6`),this.$element.on(`input`,this.handleInputEvent),this.renderInputValues()}$onDestroy(){this.$element.off(`input`,this.handleInputEvent)}writeValue(e){let t=this._ngbTimeAdapter.fromModel(e);this.model=t?new tm(t.hour,t.minute,t.second):new tm,!this.seconds&&(!t||!Y(t.second))&&(this.model.second=0),this.renderInputValues(),this._cd.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.formsDisabled=e}isDisabled(){return this.ngDisabled?.disabled??this.formsDisabled??this._config.disabled}changeHour(e){this.model?.changeHour(e),this.propagateModelChange()}changeMinute(e){this.model?.changeMinute(e),this.propagateModelChange()}changeSecond(e){this.model?.changeSecond(e),this.propagateModelChange()}updateHour(e){let t=this.model?this.model.hour>=12:!1,n=id(e);this.meridian&&(t&&n<12||!t&&n===12)?this.model?.updateHour(n+12):this.model?.updateHour(n),this.propagateModelChange()}updateMinute(e){this.model?.updateMinute(id(e)),this.propagateModelChange()}updateSecond(e){this.model?.updateSecond(id(e)),this.propagateModelChange()}toggleMeridian(){this.model&&Y(this.model.hour)&&this.meridian&&this.changeHour(12)}formatInput(e){e.value=e.value.replace(sm,``)}formatHour(e){return Y(e)?this.meridian?ed(e%12==0?12:e%12):ed(e%24):ed(NaN)}formatMinSec(e){return ed(Y(e)?e:NaN)}handleBlur(){this.onTouched()}get isSmallSize(){return this.size===`small`}get isLargeSize(){return this.size===`large`}$onChanges(e){e.seconds&&!this.seconds&&this.model&&!Y(this.model.second)&&(this.model.second=0,this.propagateModelChange(!1)),this.renderInputValues()}propagateModelChange(e=!0){if(this.renderInputValues(),e&&this.onTouched(),!this.model?.isValid(this.seconds)){this.onChange(this._ngbTimeAdapter.toModel(null));return}this.onChange(this._ngbTimeAdapter.toModel({hour:this.model.hour,minute:this.model.minute,second:this.model.second}))}renderInputValues(){this.hourInput=this.formatHour(this.model?.hour),this.minuteInput=this.formatMinSec(this.model?.minute),this.secondInput=this.formatMinSec(this.model?.second)}static get $name(){return`ngbTimepicker`}static get $inject(){return[`$element`,nm.$name,H.$name,rm.$name,am.$name,`$log`]}static get $factory(){return{controller:e,controllerAs:`$`,require:{ngModelCtrl:`?ngModel`,ngDisabled:`?ngDisabled`},bindings:{meridian:`<?`,spinners:`<?`,seconds:`<?`,hourStep:`<?`,minuteStep:`<?`,secondStep:`<?`,readonlyInputs:`<?`,size:`<?`},template:em}}},lm=n.default.module(`ngb.timepicker`,[W.name]);lm.component(cm.$name,cm.$factory),lm.service(nm.$name,nm),lm.factory(rm.$name,im.$factory),lm.service(am.$name,om);var um=`<ng-template ng-ref="headerTpl">
    <strong class="me-auto">{{ $.header }}</strong>
</ng-template>

<div ng-if="$.contentHeaderTpl || $.header" class="toast-header">
    <ng-container ng-template-outlet="$.contentHeaderTpl || $.headerTpl"></ng-container>
    <button type="button" class="btn-close" aria-label="Close" ng-click="$.hide()"></button>
</div>

<div class="toast-body">
    <ng-content></ng-content>
</div>
`,dm=class{constructor(e){this.ngbConfig=e,this.ariaLive=`polite`,this.autohide=!0,this.delay=5e3}get animation(){return this._animation??this.ngbConfig.animation}set animation(e){this._animation=e}static get $inject(){return[Pu.$name]}static get $name(){return`ngb.toast.config.service`}},fm=class e{static get $name(){return`ngbToastHeader`}static get $factory(){return()=>({bindToController:!0,controller:e,restrict:`A`})}},pm=(e,t)=>t?(e.addClass(`fade`),Xu(e),e.addClass(`show showing`),()=>{e.removeClass(`showing`)}):(e.addClass(`show`),n.default.noop),mm=(e,t)=>(e.addClass(`showing`),()=>{if(!t){e.removeClass(`d-block`);return}e.removeClass(`show showing`)}),hm=class e{constructor(e,t,n,r,i){this.$element=e,this.ngbToastConfig=t,this.$timeout=n,this.$attrs=r,this._ngZone=i,this.contentHeaderTpl=null,this._timeoutID=null}$onInit(){this.animation=this.animation??this.ngbToastConfig.animation,this.autohide=this.autohide??this.ngbToastConfig.autohide,this.delay=this.delay??this.ngbToastConfig.delay,this.ariaLive=this.$attrs.ariaLive??this.ngbToastConfig.ariaLive}$postLink(){this.$element.attr(`role`,`alert`),this.$element.attr(`aria-live`,this.ariaLive??this.ngbToastConfig.ariaLive),this.$element.attr(`aria-atomic`,`true`),this.$element.addClass(`toast d-block`),this._init(),this.show()}$onChanges(e){this.$element.toggleClass(`fade`,this.animation),`autohide`in e&&(this._clearTimeout(),this._init())}hide(){this._clearTimeout();let e=K(this._ngZone,this.$element,mm,{animation:this.animation??this.ngbToastConfig.animation,runningTransition:`stop`});return e.subscribe(()=>this.hidden?.()),e}show(){let e=K(this._ngZone,this.$element,pm,{animation:this.animation??this.ngbToastConfig.animation,runningTransition:`continue`});return e.subscribe(()=>this.shown?.()),e}_init(){this.autohide&&!this._timeoutID&&(this._timeoutID=this.$timeout(()=>{this.hide()},this.delay))}_clearTimeout(){this._timeoutID&&=(this.$timeout.cancel(this._timeoutID),null)}static get $name(){return`ngbToast`}static get $inject(){return[`$element`,dm.$name,`$timeout`,`$attrs`,U.$name]}static get $factory(){return{bindings:{animation:`<?`,autohide:`<?`,delay:`<?`,header:`@?`,hidden:`&?`,shown:`&?`},controllerAs:`$`,transclude:!0,controller:e,template:um}}};G([Ks(fm,{read:Oc,static:!0})],hm.prototype,`contentHeaderTpl`,2),G([dc(`headerTpl`,{read:Oc,static:!0})],hm.prototype,`headerTpl`,2);var gm=hm,_m=n.default.module(`ngb.toast`,[W.name]);_m.service(dm.$name,dm),_m.component(gm.$name,gm.$factory),_m.directive(fm.$name,fm.$factory);var vm=class{constructor(e){this.$config=e,this.autoClose=!0,this.placement=`auto`,this.popperOptions=e=>e,this.triggers=`hover focus`,this.disableTooltip=!1,this.openDelay=0,this.closeDelay=0}get animation(){return this._animation??this.$config.animation}set animation(e){this._animation=e}static get $inject(){return[Pu.$name]}static get $name(){return`ngb.tooltip.config.service`}},ym=`<div class="tooltip-arrow" data-popper-arrow></div>
<div class="tooltip-inner" ngb-popup-content></div>
`,bm=class e{constructor(e){this.$element=e}$postLink(){this.$element.attr(`role`,`tooltip`),this.$element.addClass(`tooltip`)}$onChanges(e){this.id?this.$element.attr(`id`,this.id):this.$element.removeAttr(`id`),this.$element.toggleClass(`fade`,this.animation);let t=e?.tooltipClass?.previousValue;typeof t==`string`&&t&&this.$element.removeClass(t),this.tooltipClass&&this.$element.addClass(this.tooltipClass),(this.onMouseEnter||this.onMouseLeave)&&(this.$element.off(`mouseenter`),this.$element.off(`mouseleave`),this.$element.on(`mouseenter`,this.onMouseEnter?.bind(this)??n.default.noop),this.$element.on(`mouseleave`,this.onMouseLeave?.bind(this)??n.default.noop))}static get $inject(){return[`$element`]}static get $factory(){return{controller:e,controllerAs:`$`,bindings:{animation:`<?`,id:`<?`,tooltipClass:`@?`,onMouseEnter:`&?`,onMouseLeave:`&?`},template:ym}}static get $name(){return`ngbTooltipWindow`}},xm=0,Sm=class e{constructor(e,t,n,r,i,a,o,s,c){this._config=e,this.$element=t,this.popupFactory=n,this.$ngbRTL=r,this.$timeout=i,this.$scope=a,this._ngZone=o,this._changeDetector=s,this.$attrs=c,this._ngbTooltipWindowId=`ngb-tooltip-${xm++}`,this._windowRef=null,this._destroyCloseHandlers$=new z,this._transitioning=!1,this._opening=!0,this._mouseenterContent$=new z,this._mouseleaveContent$=new z}$onInit(){this.popupService=this.popupFactory.$create(bm.$name),this._positioning=lf(this.$ngbRTL),this.animation=this.animation??this._config.animation,this.autoClose=this.autoClose??this._config.autoClose,this.placement=this.placement??this._config.placement,this.popperOptions=this.popperOptions??this._config.popperOptions,this.triggers=this.triggers??this._config.triggers,this.container=this.container??this._config.container,this.disableTooltip=this.disableTooltip??this._config.disableTooltip,this.tooltipClass=this.tooltipClass??this._config.tooltipClass,this.openDelay=this.openDelay??this._config.openDelay,this.closeDelay=this.closeDelay??this._config.closeDelay,this._ngbTooltip=this._ngbTooltip??this.$attrs.ngbTooltip}$postLink(){this._listenToTriggers()}$onChanges(e){e.triggers&&!e.triggers.isFirstChange()&&this._listenToTriggers(),e.tooltipClass&&this.isOpen()&&this._windowRef.setInput(`tooltipClass`,e.tooltipClass.currentValue),this.isOpen()&&(e.placement||e.popperOptions||e.positionTarget)&&(this._positioning.setOptions({hostElement:q(this._getPositionTargetElement()),targetElement:q(this._windowRef.$element),placement:this.placement,baseClass:`bs-tooltip`,updatePopperOptions:e=>this.popperOptions(uf([0,6])(e))}),this._positioning.update()),this.isOpen()&&e.disableTooltip?.currentValue&&this.close()}open(e){if(!this._opening&&this._transitioning&&(this._transitioning=!1,Yu(this._windowRef.$element)),this._windowRef||this.disableTooltip||!this._ngbTooltip){this._changeDetector.markForCheck();return}let{windowRef:t,transition$:n}=this.popupService.open(this._ngbTooltip,e??this.tooltipContext,this.animation);this._opening=!0,this._transitioning=!0,this._windowRef=t,t.setInput(`animation`,this.animation),t.setInput(`tooltipClass`,this.tooltipClass),t.setInput(`id`,this._ngbTooltipWindowId),t.setInput(`onMouseEnter`,()=>this._mouseenterContent$.next()),t.setInput(`onMouseLeave`,()=>this._mouseleaveContent$.next()),q(this._getPositionTargetElement()).setAttribute(`aria-describedby`,this._ngbTooltipWindowId),this._applyContainer(),this._positioning.createPopper({hostElement:q(this._getPositionTargetElement()),targetElement:q(this._windowRef.$element),placement:this.placement,baseClass:`bs-tooltip`,updatePopperOptions:e=>this.popperOptions(uf([0,6])(e))}),Promise.resolve().then(()=>this._positioning.update()),this._watchPositioning(),this._setCloseHandlers(),n.subscribe(()=>{this._transitioning&&(this._transitioning=!1,this._positioning.update(),this.shown?.())}),this._changeDetector.markForCheck()}close(e=this.animation){this._opening&&this._transitioning&&(this._transitioning=!1,Yu(this._windowRef.$element)),this._windowRef&&(this._opening=!1,this._transitioning=!0,this._destroyCloseHandlers$.next(),q(this._getPositionTargetElement()).removeAttribute(`aria-describedby`),this.popupService.close(e).subscribe(()=>{this._windowRef=null,this._positioning.destroy(),this._unwatchPositioning?.(),this._unwatchPositioning=void 0,this._transitioning&&(this._transitioning=!1,this.hidden?.()),this._changeDetector.markForCheck()}))}toggle(){this._windowRef?this.close():this.open()}isOpen(){return this._windowRef!=null}$onDestroy(){this.close(!1),this._unlistenTriggers?.(),this._destroyCloseHandlers$.next(),this._destroyCloseHandlers$.complete()}_getPositionTargetElement(){let e=q(this.$element),t=this.positionTarget?document.querySelector(this.positionTarget):null;return n.default.element(t??e)}_applyContainer(){this._getContainerElement().append(this._windowRef.$element)}_getContainerElement(){if(!this.container)return this.$element.parent();if(this.container===`body`)return n.default.element(document.body);let e=document.querySelector(this.container);if(!e)throw Error(`[ngb-tooltip]: The specified container "${this.container}" was not found in the DOM.`);return n.default.element(e)}_listenToTriggers(){this._unlistenTriggers?.(),this._unlistenTriggers=Ep(this.$timeout,q(this.$element),this.triggers,()=>this.isOpen(),()=>this.open(),()=>this.close(),+this.openDelay,+this.closeDelay,this._mouseenterContent$,this._mouseleaveContent$)}_setCloseHandlers(){this._destroyCloseHandlers$.next(),Xd(this._ngZone,this.autoClose,this._destroyCloseHandlers$,e=>{this.close(),e===0&&q(this.$element).focus()},this._windowRef?[q(this._windowRef.$element)]:[],[q(this.$element)])}_watchPositioning(){this._unwatchPositioning?.(),this._unwatchPositioning=this.$scope.$watch(()=>{this._windowRef&&this._positioning.update()})}set ngbTooltip(e){this._ngbTooltip=e,!e&&this.isOpen()&&this.close()}static get $inject(){return[vm.$name,`$element`,wf.$name,df.$name,`$timeout`,`$scope`,U.$name,H.$name,`$attrs`]}static get $factory(){return()=>({controller:e,bindToController:{ngbTooltip:`<?`,animation:`<?`,autoClose:`<?`,placement:`<?`,popperOptions:`<?`,triggers:`<?`,positionTarget:`@?`,container:`<?`,disableTooltip:`<?`,tooltipClass:`@?`,tooltipContext:`<?`,openDelay:`<?`,closeDelay:`<?`,shown:`&?`,hidden:`&?`},scope:!0,restrict:`A`})}static get $name(){return`ngbTooltip`}},Cm=n.default.module(`ngb.tooltip`,[W.name]);Cm.component(bm.$name,bm.$factory),Cm.directive(Sm.$name,Sm.$factory),Cm.service(vm.$name,vm);var wm=`<span
    ng-repeat="part in $.parts track by $index"
    ng-class="[$odd ? $.highlightClass : '', $odd && $.highlightClass === 'ngb-highlight' ? 'fw-bold' : '']">{{ part }}</span>
`,Tm=class e{constructor(){this.parts=[]}$onChanges(){this.highlightClass=this.highlightClass??`ngb-highlight`,this.accentSensitive=this.accentSensitive??!0,!this.accentSensitive&&!String.prototype.normalize&&(console.warn("The `accentSensitive` input in `ngb-highlight` cannot be set to `false` in a browser that does not implement the `String.normalize` function. You will have to include a polyfill in your application to use this feature in the current browser."),this.accentSensitive=!0);let e=$u(this.result),t=Array.isArray(this.term)?this.term:[this.term],n=e=>this.accentSensitive?e:nd(e),r=t.map(e=>td(n($u(e)))).filter(e=>e),i=this.accentSensitive?e:nd(e),a=r.length?i.split(RegExp(`(${r.join(`|`)})`,`gmi`)):[e];if(this.accentSensitive)return this.parts=a,a;let o=0;this.parts=a.map(t=>e.substring(o,o+=t.length))}static get $name(){return`ngbHighlight`}static get $factory(){return{controller:e,controllerAs:`$`,bindings:{term:`<`,result:`<`,highlightClass:`<?`,accentSensitive:`<?`},template:wm.trim()}}},Em=class{constructor(){this.editable=!0,this.focusFirst=!0,this.selectOnExact=!1,this.showHint=!1,this.placement=[`bottom-start`,`bottom-end`,`top-start`,`top-end`],this.popperOptions=e=>e}static get $name(){return`ngb.typeahead.config.service`}},Dm=`<ng-template ng-ref="rt" let-result="result" let-term="term" let-formatter="formatter">
    <ngb-highlight result="formatter(result)" term="term"></ngb-highlight>
</ng-template>

<button
        type="button"\r
        class="dropdown-item"
        role="option"
        ng-attr-id="{{ $.id + '-' + $index }}"
        ng-class="{ active: $index === $.activeIdx }"
        ng-mouseenter="$.markActive($index)"
        ng-click="$.select(result)"
        ng-repeat="result in $.results track by $index">
    <ng-container
            ng-template-outlet="$.resultTemplate || rt"
            ng-template-outlet-context="{ result: result, term: $.term, formatter: $.formatter }"
    ></ng-container>
</button>
`,Om=class e{constructor(e){this.$element=e,this.activeIdx=0,this.results=[],this.preventMouseDownDefault=e=>e.preventDefault()}set id(e){if(e){this.$element.attr(`id`,e);return}this.$element.removeAttr(`id`)}get id(){return this.$element.attr(`id`)??``}$onInit(){this.focusFirst=this.focusFirst??!0,this.formatter=this.formatter??$u,this.resetActive()}$postLink(){this.$element.addClass(`dropdown-menu show`),this.$element.attr(`role`,`listbox`),this.$element.on(`mousedown`,this.preventMouseDownDefault)}$onChanges(e){let t=e.popupClass?.previousValue;typeof t==`string`&&t&&this.$element.removeClass(t),this.popupClass&&this.$element.addClass(this.popupClass)}$onDestroy(){this.$element.off(`mousedown`,this.preventMouseDownDefault)}hasActive(){return this.activeIdx>-1&&this.activeIdx<this.results.length}getActive(){return this.results[this.activeIdx]}markActive(e){this.activeIdx=e,this._activeChanged()}next(){if(this.activeIdx!==this.results.length-1){this.activeIdx++,this._activeChanged();return}this.activeIdx=this.focusFirst?(this.activeIdx+1)%this.results.length:-1,this._activeChanged()}prev(){if(this.activeIdx===0){this.activeIdx=this.focusFirst?this.results.length-1:-1,this._activeChanged();return}if(this.activeIdx>0){this.activeIdx--,this._activeChanged();return}this.activeIdx=this.results.length-1,this._activeChanged()}resetActive(){this.activeIdx=this.focusFirst?0:-1,this._activeChanged()}select(e){this.selectEvent?.({$event:e})}_activeChanged(){this.activeChangeEvent?.({$event:this.activeIdx>=0?this.id+`-`+this.activeIdx:void 0})}static get $name(){return`ngbTypeaheadWindow`}static get $factory(){return{controller:e,controllerAs:`$`,bindings:{focusFirst:`<?`,results:`<?`,term:`<?`,formatter:`<?`,resultTemplate:`<?`,popupClass:`<?`,selectEvent:`&?select`,activeChangeEvent:`&?activeChange`},template:Dm}}static get $inject(){return[`$element`]}},km={$name:`ARIA_LIVE_DELAY`,$value:100};function Am(e=!1){let t=document.body,r=n.default.element(t.querySelector(`#ngb-live`));return r==null&&e&&(r=n.default.element(`<div></div>`),r.attr(`id`,`ngb-live`),r.attr(`aria-live`,`polite`),r.attr(`aria-atomic`,`true`),r.addClass(`visually-hidden`),n.default.element(t).append(r)),r}var jm=class{constructor(e,t){this.ariaLiveDelay=e,this.$timeout=t}onDestroy(){let e=Am();e&&e.remove()}say(e){let t=Am(!0),n=this.ariaLiveDelay;if(!t)return;t.empty();let r=()=>t.append(e);if(!n){r();return}this.$timeout(r,this.ariaLiveDelay)}static get $name(){return`ngb.live.service`}static get $inject(){return[km.$name,`$timeout`]}},Mm=0,Nm=class e{constructor(e,t,n,r,i,a,o,s){this.$element=e,this.$scope=t,this._config=n,this._live=r,this._ngZone=i,this._changeDetector=a,this._popupFactory=o,this._rtl=s,this.activeDescendant=null,this.popupId=`ngb-typeahead-${Mm++}`,this._onTouched=()=>{},this._onChange=e=>{},this._resubscribeTypeahead$=new Na(null),this._closed$=new z,this._inputValueBackup=null,this._inputValueForSelectOnExact=null,this._subscription=null,this._windowRef=null,this._handleBlurEvent=()=>this._ngZone.run(()=>this.handleBlur()),this._handleKeyDownEvent=e=>this._ngZone.run(()=>this.handleKeyDown(e))}$onInit(){this._positioning=lf(this._rtl),this._popupService=this._popupFactory.$create(Om.$name),this.autocomplete=this.autocomplete??`off`,this.container=this.container??this._config.container,this.editable=this.editable??this._config.editable,this.focusFirst=this.focusFirst??this._config.focusFirst,this.selectOnExact=this.selectOnExact??this._config.selectOnExact,this.showHint=this.showHint??this._config.showHint,this.placement=this.placement??this._config.placement,this.popperOptions=this.popperOptions??this._config.popperOptions;let e=this._nativeElement;if(this._valueChanges$=qo(e,`input`).pipe(B(e=>e.target.value)),this.ngModelCtrl){let e=this.ngModelCtrl;e.$render=()=>this.writeValue(e.$viewValue),this.registerOnChange(t=>e.$setViewValue(t)),this.registerOnTouched(()=>e.$setTouched()),e.$render()}this._subscribeToUserInput()}$postLink(){this.$element.on(`blur`,this._handleBlurEvent),this.$element.on(`keydown`,this._handleKeyDownEvent),this.$element.attr(`autocapitalize`,`off`),this.$element.attr(`autocorrect`,`off`),this.$element.attr(`role`,`combobox`),this._renderHostState()}$onChanges(e){let t=e.ngbTypeahead;t&&!t.isFirstChange()&&(this._unsubscribeFromUserInput(),this._subscribeToUserInput()),this._renderHostState()}$onDestroy(){this.$element.off(`blur`,this._handleBlurEvent),this.$element.off(`keydown`,this._handleKeyDownEvent),this._closePopup(),this._unsubscribeFromUserInput(),this._closed$.complete(),this._resubscribeTypeahead$.complete()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}writeValue(e){this._writeInputValue(this._formatItemForInput(e)),this.showHint&&(this._inputValueBackup=e)}setDisabledState(e){this._nativeElement.disabled=e}dismissPopup(){this.isPopupOpen()&&(this._resubscribeTypeahead$.next(null),this._closePopup(),this.showHint&&this._inputValueBackup!==null&&this._writeInputValue(this._inputValueBackup),this._changeDetector.markForCheck())}isPopupOpen(){return this._windowRef!=null}handleBlur(){this._resubscribeTypeahead$.next(null),this._onTouched()}handleKeyDown(e){if(!this.isPopupOpen())return;let t=this._windowRef?.componentInstance;if(t)switch(e.key){case`ArrowDown`:e.preventDefault(),t.next(),this._showHint();break;case`ArrowUp`:e.preventDefault(),t.prev(),this._showHint();break;case`Enter`:case`Tab`:{let n=t.getActive();n!=null&&(e.preventDefault(),e.stopPropagation(),this._selectResult(n)),this._closePopup();break}}}get _nativeElement(){return q(this.$element)}_openPopup(){if(this.isPopupOpen())return;this._inputValueBackup=this._nativeElement.value;let{windowRef:e}=this._popupService.open();this._windowRef=e,e.setInput(`id`,this.popupId),e.setInput(`popupClass`,this.popupClass),e.setInput(`selectEvent`,({$event:e})=>this._selectResultClosePopup(e)),e.setInput(`activeChangeEvent`,({$event:e})=>{this.activeDescendant=e??null,this._renderHostState()});let t=q(e.$element);if(this.container===`body`)t.style.zIndex=`1055`,document.body.appendChild(t);else{let e=this._nativeElement;e.parentNode?.insertBefore(t,e.nextSibling)}this._renderHostState(),this._changeDetector.markForCheck(),this._ngZone.runOutsideAngular(()=>{this._windowRef&&(this._positioning.createPopper({hostElement:this._nativeElement,targetElement:t,placement:this.placement??this._config.placement,updatePopperOptions:e=>(this.popperOptions??this._config.popperOptions)(uf([0,2])(e))}),this._watchPositioning())}),Xd(this._ngZone,`outside`,this._closed$,()=>this.dismissPopup(),[t],[this._nativeElement])}_closePopup(){this._popupService.close().subscribe(()=>{this._positioning.destroy(),this._unwatchPositioning?.(),this._unwatchPositioning=void 0,this._closed$.next(),this._windowRef=null,this.activeDescendant=null,this._renderHostState()})}_selectResult(e){let t=!1;this.selectItem?.({$event:{item:e,preventDefault:()=>{t=!0}}}),this._resubscribeTypeahead$.next(null),t||(this.writeValue(e),this._onChange(e))}_selectResultClosePopup(e){this._selectResult(e),this._closePopup()}_showHint(){let e=this._windowRef?.componentInstance;if(this.showHint&&e?.hasActive()&&this._inputValueBackup!=null){let t=this._inputValueBackup.toLowerCase(),n=this._formatItemForInput(e.getActive());t===n.substring(0,this._inputValueBackup.length).toLowerCase()?(this._writeInputValue(this._inputValueBackup+n.substring(this._inputValueBackup.length)),this._nativeElement.setSelectionRange(this._inputValueBackup.length,n.length)):this._writeInputValue(n)}}_formatItemForInput(e){return e!=null&&this.inputFormatter?this.inputFormatter(e):$u(e)}_writeInputValue(e){this._nativeElement.value=$u(e)}_subscribeToUserInput(){let e=this._valueChanges$.pipe(xs(e=>{this._inputValueBackup=this.showHint?e:null,this._inputValueForSelectOnExact=this.selectOnExact?e:null,this._ngZone.run(()=>this._onChange(this.editable?e:null))}),this.ngbTypeahead?this.ngbTypeahead:()=>wo([]));this._subscription=this._resubscribeTypeahead$.pipe(bs(()=>e)).subscribe(e=>{this._ngZone.run(()=>{if(!e||e.length===0)this._closePopup();else if(this.selectOnExact&&e.length===1&&this._formatItemForInput(e[0])===this._inputValueForSelectOnExact)this._selectResult(e[0]),this._closePopup();else{this._openPopup();let t=this._windowRef;if(!t)return;t.setInput(`focusFirst`,this.focusFirst),t.setInput(`results`,e),t.setInput(`term`,this._nativeElement.value),this.resultFormatter&&t.setInput(`formatter`,this.resultFormatter),this.resultTemplate&&t.setInput(`resultTemplate`,this.resultTemplate),t.componentInstance?.resetActive(),t.$scope?.$digest(),this._showHint()}let t=e?e.length:0;this._live.say(t===0?`No results available`:`${t} result${t===1?``:`s`} available`)})})}_unsubscribeFromUserInput(){this._subscription?.unsubscribe(),this._subscription=null}_watchPositioning(){this._unwatchPositioning?.(),this._unwatchPositioning=this.$scope.$watch(()=>{this._windowRef&&this._positioning.update()})}_renderHostState(){this.$element.attr(`autocomplete`,this.autocomplete??`off`),this.$element.attr(`aria-autocomplete`,this.showHint?`both`:`list`),this.$element.attr(`aria-expanded`,`${this.isPopupOpen()}`),this.isPopupOpen()?(this.$element.addClass(`open`),this.$element.attr(`aria-controls`,this.popupId)):(this.$element.removeClass(`open`),this.$element.removeAttr(`aria-controls`)),this.activeDescendant?this.$element.attr(`aria-activedescendant`,this.activeDescendant):this.$element.removeAttr(`aria-activedescendant`)}static get $inject(){return[`$element`,`$scope`,Em.$name,jm.$name,U.$name,H.$name,wf.$name,df.$name]}static get $name(){return`ngbTypeahead`}static get $factory(){return()=>({bindToController:{autocomplete:`<?`,container:`<?`,editable:`<?`,focusFirst:`<?`,inputFormatter:`<?`,ngbTypeahead:`<?`,placement:`<?`,popperOptions:`<?`,popupClass:`<?`,resultFormatter:`<?`,resultTemplate:`<?`,selectOnExact:`<?`,showHint:`<?`,selectItem:`&?`},controller:e,require:{ngModelCtrl:`?ngModel`},restrict:`A`,scope:!0})}},Pm=n.default.module(`ngb.typeahead`,[W.name]);Pm.constant(km.$name,km.$value),Pm.factory(wf.$name,wf),Pm.service(jm.$name,jm),Pm.service(df.$name,df),Pm.service(Em.$name,Em),Pm.component(Tm.$name,Tm.$factory),Pm.component(Om.$name,Om.$factory),Pm.directive(Nm.$name,Nm.$factory);var Fm=class e{static get $name(){return`ngbPaginationEllipsis`}static $factory(){return{restrict:`A`,bindToController:!0,controller:e,require:{templateRef:`ngTemplate`}}}},Im=class e{static get $name(){return`ngbPaginationFirst`}static $factory(){return{restrict:`A`,bindToController:!0,controller:e,require:{templateRef:`ngTemplate`}}}},Lm=class e{static get $name(){return`ngbPaginationLast`}static $factory(){return{restrict:`A`,bindToController:!0,controller:e,require:{templateRef:`ngTemplate`}}}},Rm=class e{static get $name(){return`ngbPaginationNext`}static $factory(){return{restrict:`A`,bindToController:!0,controller:e,require:{templateRef:`ngTemplate`}}}},zm=class e{static get $name(){return`ngbPaginationNumber`}static $factory(){return{restrict:`A`,bindToController:!0,controller:e,require:{templateRef:`ngTemplate`}}}},Bm=class e{static get $name(){return`ngbPaginationPrevious`}static $factory(){return{restrict:`A`,bindToController:!0,controller:e,require:{templateRef:`ngTemplate`}}}},Vm=class e{static get $name(){return`ngbPaginationNumber`}static $factory(){return{restrict:`A`,bindToController:!0,controller:e,require:{templateRef:`ngTemplate`}}}},Hm=`<ng-template ng-ref="first">
    <span aria-hidden="true" i18n="@@ngb.pagination.first">&laquo;&laquo;</span>
</ng-template>

<ng-template ng-ref="previous">
    <span aria-hidden="true" i18n="@@ngb.pagination.previous">&laquo;</span>
</ng-template>

<ng-template ng-ref="next">
    <span aria-hidden="true" i18n="@@ngb.pagination.next">&raquo;</span>
</ng-template>

<ng-template ng-ref="last">
    <span aria-hidden="true" i18n="@@ngb.pagination.last">&raquo;&raquo;</span>
</ng-template>

<ng-template ng-ref="ellipsis">...</ng-template>

<ng-template ng-ref="defaultNumber" let-page let-currentPage="currentPage">
    {{ page }}
</ng-template>

<ul class="pagination" ng-class="$.size ? 'pagination-' + $.size : null">
    <li ng-if="$.boundaryLinks" class="page-item" ng-class="{ 'disabled': $.previousDisabled() }">
        <a
                aria-label="First"
                i18n-aria-label="@@ngb.pagination.first-aria"
                class="page-link"
                href
                ng-click="$.selectPage(1); $event.preventDefault()"
                ng-attr-tabindex="$.previousDisabled() ? '-1' : null"
                ng-attr-aria-disabled="$.previousDisabled() ? 'true' : null">
            <ng-template
                    ng-template-outlet="($.tplFirst && $.tplFirst.templateRef) || first"
                    ng-template-outlet-context="{ disabled: $.previousDisabled(), currentPage: $.page }">
            </ng-template>
        </a>
    </li>

    <li ng-if="$.directionLinks" class="page-item" ng-class="{ 'disabled': $.previousDisabled() }">
        <a
                aria-label="Previous"
                i18n-aria-label="@@ngb.pagination.previous-aria"
                class="page-link"
                href
                ng-click="$.selectPage($.page - 1); $event.preventDefault()"
                ng-attr-tabindex="$.previousDisabled() ? '-1' : null"
                ng-attr-aria-disabled="$.previousDisabled() ? 'true' : null">
            <ng-template
                    ng-template-outlet="($.tplPrevious && $.tplPrevious.templateRef) || previous"
                    ng-template-outlet-context="{ disabled: $.previousDisabled() }">
            </ng-template>
        </a>
    </li>

    <li
            ng-repeat="pageNumber in ($.tplPages ? [] : $.pages) track by $index"
            class="page-item"
            ng-class="{ 'active': pageNumber === $.page, 'disabled': $.isEllipsis(pageNumber) || $.isDisabled() }">
        <a ng-if="$.isEllipsis(pageNumber)" class="page-link" tabindex="-1" aria-disabled="true">
            <ng-template
                    ng-template-outlet="($.tplEllipsis && $.tplEllipsis.templateRef) || ellipsis"
                    ng-template-outlet-context="{ disabled: true, currentPage: $.page }">
            </ng-template>
        </a>

        <a
                ng-if="!$.isEllipsis(pageNumber)"
                class="page-link"
                href
                ng-click="$.selectPage(pageNumber); $event.preventDefault()"
                ng-attr-tabindex="$.isDisabled() ? '-1' : null"
                ng-attr-aria-disabled="$.isDisabled() ? 'true' : null"
                ng-attr-aria-current="pageNumber === $.page ? 'page' : null">
            <ng-template
                    ng-template-outlet="($.tplNumber && $.tplNumber.templateRef) || defaultNumber"
                    ng-template-outlet-context="{ disabled: $.isDisabled(), $implicit: pageNumber, currentPage: $.page }">
            </ng-template>
        </a>
    </li>

    <ng-template
            ng-if="$.tplPages"
            ng-template-outlet="$.tplPages.templateRef"
            ng-template-outlet-context="{ $implicit: $.page, pages: $.pages, disabled: $.isDisabled() }">
    </ng-template>

    <li ng-if="$.directionLinks" class="page-item" ng-class="{ 'disabled': $.nextDisabled() }">
        <a
                aria-label="Next"
                i18n-aria-label="@@ngb.pagination.next-aria"
                class="page-link"
                href
                ng-click="$.selectPage($.page + 1); $event.preventDefault()"
                ng-attr-tabindex="$.nextDisabled() ? '-1' : null"
                ng-attr-aria-disabled="$.nextDisabled() ? 'true' : null">
            <ng-template
                    ng-template-outlet="($.tplNext && $.tplNext.templateRef) || next"
                    ng-template-outlet-context="{ disabled: $.nextDisabled(), currentPage: $.page }">
            </ng-template>
        </a>
    </li>

    <li ng-if="$.boundaryLinks" class="page-item" ng-class="{ 'disabled': $.nextDisabled() }">
        <a
                aria-label="Last"
                i18n-aria-label="@@ngb.pagination.last-aria"
                class="page-link"
                href
                ng-click="$.selectPage($.pageCount); $event.preventDefault()"
                ng-attr-tabindex="$.nextDisabled() ? '-1' : null"
                ng-attr-aria-disabled="$.nextDisabled() ? 'true' : null"
        >
            <ng-template
                    ng-template-outlet="($.tplLast && $.tplLast.templateRef) || last"
                    ng-template-outlet-context="{ disabled: $.nextDisabled(), currentPage: $.page }">
            </ng-template>
        </a>
    </li>
</ul>
`,Um=class{constructor(){this.disabled=!1,this.boundaryLinks=!1,this.directionLinks=!0,this.ellipses=!0,this.maxSize=0,this.pageSize=10,this.rotate=!1}static get $name(){return`ngb.pagination-config.service`}},Wm=class e{constructor(e,t){this.$element=e,this._config=t,this.pageCount=0,this.pages=[]}$onInit(){this.boundaryLinks=this.boundaryLinks??this._config.boundaryLinks,this.directionLinks=this.directionLinks??this._config.directionLinks,this.ellipses=this.ellipses??this._config.ellipses,this.rotate=this.rotate??this._config.rotate,this.maxSize=this.maxSize??this._config.maxSize,this.pageSize=this.pageSize??this._config.pageSize,this.page=this.page??1,this.size=this.size??this._config.size,this._updatePages(this.page)}$postLink(){this.$element.attr(`role`,`navigation`)}isDisabled(){return this.ngDisabled?.disabled??this._config.disabled}hasPrevious(){return this.page>1}hasNext(){return this.page<this.pageCount}nextDisabled(){return!this.hasNext()||this.isDisabled()}previousDisabled(){return!this.hasPrevious()||this.isDisabled()}selectPage(e){this._updatePages(e)}isEllipsis(e){return e===-1}_applyEllipses(e,t){this.ellipses&&(e>0&&(e>2&&this.pages.unshift(-1),e===2&&this.pages.unshift(2),this.pages.unshift(1)),t<this.pageCount&&(t<this.pageCount-2&&this.pages.push(-1),t===this.pageCount-2&&this.pages.push(this.pageCount-1),this.pages.push(this.pageCount)))}_applyRotation(){let e=0,t=this.pageCount,n=Math.floor(this.maxSize/2),r=this.maxSize%2==0?n-1:n;return this.page<=n?t=this.maxSize:this.pageCount-this.page<n?e=this.pageCount-this.maxSize:(e=this.page-n-1,t=this.page+r),[e,t]}_applyPagination(){let e=(Math.ceil(this.page/this.maxSize)-1)*this.maxSize;return[e,e+this.maxSize]}_setPageInRange(e){let t=this.page;this.page=Qu(e,this.pageCount,1),this.page!=t&&Y(this.collectionSize)&&this.pageChange?.({$event:this.page})}_updatePages(e){this.pageCount=Math.ceil(this.collectionSize/this.pageSize),Y(this.pageCount)||(this.pageCount=0),this.pages.length=0;for(let e=1;e<=this.pageCount;e++)this.pages.push(e);if(this._setPageInRange(e),this.maxSize>0&&this.pageCount>this.maxSize){let e=0,t=this.pageCount;[e,t]=this.rotate?this._applyRotation():this._applyPagination();let n=this.pages.slice(e,t);this.pages.splice(0,this.pages.length,...n),this._applyEllipses(e,t)}}static get $name(){return`ngbPagination`}static get $factory(){return{controller:e,controllerAs:`$`,template:Hm,require:{ngDisabled:`?ngDisabled`},bindings:{boundaryLinks:`<?`,directionLinks:`<?`,ellipses:`<?`,rotate:`<?`,collectionSize:`<`,maxSize:`<?`,page:`<?`,pageSize:`<?`,pageChange:`&?`,size:`<?`}}}static get $inject(){return[`$element`,Um.$name]}};G([Ks(Fm,{static:!1})],Wm.prototype,`tplEllipsis`,2),G([Ks(Im,{static:!1})],Wm.prototype,`tplFirst`,2),G([Ks(Lm,{static:!1})],Wm.prototype,`tplLast`,2),G([Ks(Rm,{static:!1})],Wm.prototype,`tplNext`,2),G([Ks(zm,{static:!1})],Wm.prototype,`tplNumber`,2),G([Ks(Bm,{static:!1})],Wm.prototype,`tplPrevious`,2),G([Ks(Vm,{static:!1})],Wm.prototype,`tplPages`,2);var Gm=Wm,Km=n.default.module(`ngb-pagination`,[Lc.name]);Km.component(Gm.$name,Gm.$factory),Km.service(Um.$name,Um),Km.directive(Fm.$name,Fm.$factory),Km.directive(Im.$name,Im.$factory),Km.directive(Lm.$name,Lm.$factory),Km.directive(Rm.$name,Rm.$factory),Km.directive(zm.$name,zm.$factory),Km.directive(Rm.$name,Rm.$factory),Km.directive(Vm.$name,Vm.$factory),Km.directive(Bm.$name,Bm.$factory);var qm=class{},Jm=class extends qm{fromModel(e){return e&&J(e.year)&&J(e.month)&&J(e.day)?{year:e.year,month:e.month,day:e.day}:null}toModel(e){return e&&J(e.year)&&J(e.month)&&J(e.day)?{year:e.year,month:e.month,day:e.day}:null}},X=class e{static from(t){return t instanceof e?t:t?new e(t.year,t.month,t.day):null}constructor(e,t,n){this.year=J(e)?e:null,this.month=J(t)?t:null,this.day=J(n)?n:null}equals(e){return e!=null&&this.year===e.year&&this.month===e.month&&this.day===e.day}before(e){return e?this.year===e.year?this.month===e.month?this.day!==e.day&&this.day<e.day:this.month<e.month:this.year<e.year:!1}after(e){return e?this.year===e.year?this.month===e.month?this.day!==e.day&&this.day>e.day:this.month>e.month:this.year>e.year:!1}};function Ym(e){return new X(e.getFullYear(),e.getMonth()+1,e.getDate())}function Xm(e){let t=new Date(e.year,e.month-1,e.day,12);return isNaN(t.getTime())||t.setFullYear(e.year),t}var Zm=class{},Qm=class extends Zm{getDaysPerWeek(){return 7}getMonths(){return[1,2,3,4,5,6,7,8,9,10,11,12]}getWeeksPerMonth(){return 6}getNext(e,t=`d`,n=1){let r=Xm(e),i=!0,a=r.getMonth(),o={y:()=>{r.setFullYear(r.getFullYear()+n)},m:()=>{a+=n,r.setMonth(a),a%=12,a<0&&(a+=12)},d:()=>{r.setDate(r.getDate()+n),i=!1}}[t];return o?(o(),i&&r.getMonth()!==a&&r.setDate(0),Ym(r)):e}getPrev(e,t=`d`,n=1){return this.getNext(e,t,-n)}getWeekday(e){let t=Xm(e).getDay();return t===0?7:t}getWeekNumber(e,t){t===7&&(t=0);let n=e[(11-t)%7],r=Xm(n);r.setDate(r.getDate()+4-(r.getDay()||7));let i=r.getTime();return r.setMonth(0),r.setDate(1),Math.floor(Math.round((i-r.getTime())/864e5)/7)+1}getToday(){return Ym(new Date)}isValid(e){if(!e||!J(e.year)||!J(e.month)||!J(e.day)||e.year===0)return!1;let t=Xm(e);return!isNaN(t.getTime())&&t.getFullYear()===e.year&&t.getMonth()+1===e.month&&t.getDate()===e.day}},$m=`<ng-template
  ng-ref="defaultDayTemplate"
  let-date="date"
  let-current-month="currentMonth"
  let-selected="selected"
  let-disabled="disabled"
  let-focused="focused">
  <div
    ngb-datepicker-day-view
    date="date"
    current-month="currentMonth"
    i18n="$.i18n"
    selected="selected"
    disabled="disabled"
    focused="focused"
    class="btn btn-light border-0 p-0 text-center rounded-1"
    style="width: 2rem; height: 2rem; line-height: 2rem; background: transparent">
  </div>
</ng-template>

<ng-template ng-ref="defaultContentTemplate">
  <div
    ng-repeat="month in $.model.months track by $index"
    class="ngb-dp-month pe-none"
    ng-class="{ 'ps-3': !$first, 'ps-1': $first, 'pe-1': $last }">
    <div
      ng-if="$.navigation === 'none' || ($.displayMonths > 1 && $.navigation === 'select')"
      class="ngb-dp-month-name fs-5 text-center bg-body-tertiary"
      ng-class="{ 'text-muted': $.model.disabled }"
      style="height: 2rem; line-height: 2rem">
      {{ $.i18n.getMonthLabel(month.firstDate) }}
    </div>
    <ngb-datepicker-month class="d-block pe-auto" month="month.firstDate" datepicker="$"></ngb-datepicker-month>
  </div>
</ng-template>

<div class="ngb-dp-header pt-1 border-bottom-0 rounded-top bg-body-tertiary">
  <ngb-datepicker-navigation
    ng-if="$.navigation !== 'none' && $.model"
    date="$.model.firstDate"
    i18n="$.i18n"
    months="$.model.months"
    disabled="$.model.disabled"
    show-select="$.model.navigation === 'select'"
    prev-disabled="$.model.prevDisabled"
    next-disabled="$.model.nextDisabled"
    select-boxes="$.model.selectBoxes"
    navigate="$.onNavigateEvent($event)"
    select="$.onNavigateDateSelect($event)"
    class="d-flex align-items-center">
  </ngb-datepicker-navigation>
</div>

<div
  class="ngb-dp-content"
  ng-class="{ 'ngb-dp-months': !$.contentTemplate, 'd-flex': !$.contentTemplate }"
  ng-ref="content">
  <ng-template
    ng-if="$.model"
    ng-template-outlet="$.contentTemplate || ($.contentTemplateFromContent && $.contentTemplateFromContent.templateRef) || defaultContentTemplate"
    ng-template-outlet-context="{ $implicit: $ }">
  </ng-template>
</div>

<ng-template ng-if="$.footerTemplate" ng-template-outlet="$.footerTemplate"></ng-template>
<ng-content></ng-content>
`,eh=class{getMonthLabel(e){return`${this.getMonthFullName(e.month,e.year)} ${this.getYearNumerals(e.year)}`}getDayNumerals(e){return`${e.day}`}getWeekNumerals(e){return`${e}`}getYearNumerals(e){return`${e}`}getWeekLabel(){return``}},th=class extends eh{constructor(e,t){super(),this.$locale=e,this.$filter=t,this._monthsShort=Array.from({length:12},(e,t)=>Intl.DateTimeFormat(this.$locale.id,{month:`short`,timeZone:`UTC`}).format(Date.UTC(2e3,t))),this._monthsFull=Array.from({length:12},(e,t)=>Intl.DateTimeFormat(this.$locale.id,{month:`long`,timeZone:`UTC`}).format(Date.UTC(2e3,t)))}getWeekdayLabel(e,t=`narrow`){return[1,2,3,4,5,6,7].map(e=>Intl.DateTimeFormat(this.$locale.id,{weekday:t,timeZone:`UTC`}).format(Date.UTC(2e3,4,e)))[e-1]||``}getMonthShortName(e){return this._monthsShort[e-1]||``}getMonthFullName(e){return this._monthsFull[e-1]||``}getDayAriaLabel(e){let t=new Date(e.year,e.month-1,e.day);return this.$filter(`date`)(t,`fullDate`)}};function nh(e,t){return!ih(e,t)}function rh(e,t){return!e&&!t?!1:!e||!t||e.year!==t.year||e.month!==t.month}function ih(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}function ah(e,t){if(t&&e&&t.before(e))throw Error(`'maxDate' ${t} should be greater than 'minDate' ${e}`)}function oh(e,t,n){return e&&t&&e.before(t)?t:e&&n&&e.after(n)?n:e||null}function sh(e,t){let{minDate:n,maxDate:r,disabled:i,markDisabled:a}=t;return!(e==null||i||a&&a(e,{year:e.year,month:e.month})||n&&e.before(n)||r&&e.after(r))}function ch(e,t,n,r){if(!t)return[];let i=e.getMonths(t.year);if(n&&t.year===n.year){let e=i.findIndex(e=>e===n.month);i=i.slice(e)}if(r&&t.year===r.year){let e=i.findIndex(e=>e===r.month);i=i.slice(0,e+1)}return i}function lh(e,t,n){if(!e)return[];let r=t?Math.max(t.year,e.year-500):e.year-10,i=(n?Math.min(n.year,e.year+500):e.year+10)-r+1,a=Array(i);for(let e=0;e<i;e++)a[e]=r+e;return a}function uh(e,t,n){let r=Object.assign(e.getNext(t,`m`),{day:1});return n!=null&&r.after(n)}function dh(e,t,n){let r=Object.assign(e.getPrev(t,`m`),{day:1});return n!=null&&(r.year===n.year&&r.month<n.month||r.year<n.year&&n.month===1)}function fh(e,t,n,r,i){let{displayMonths:a,months:o}=n,s=o.splice(0,o.length);return Array.from({length:a},(n,r)=>{let a=Object.assign(e.getNext(t,`m`,r),{day:1});if(o[r]=null,!i){let e=s.findIndex(e=>e.firstDate.equals(a));e!==-1&&(o[r]=s.splice(e,1)[0])}return a}).forEach((t,i)=>{o[i]??(o[i]=ph(e,t,n,r,s.shift()||{}))}),o}function ph(e,t,n,r,i={}){let{dayTemplateData:a,minDate:o,maxDate:s,firstDayOfWeek:c,markDisabled:l,outsideDays:u,weekdayWidth:d,weekdaysVisible:f}=n,p=e.getToday();i.firstDate=null,i.lastDate=null,i.number=t.month,i.year=t.year,i.weeks=i.weeks||[],i.weekdays=i.weekdays||[],t=mh(e,t,c),f||(i.weekdays.length=0);for(let n=0;n<e.getWeeksPerMonth();n++){let m=i.weeks[n];m||=i.weeks[n]={number:0,days:[],collapsed:!0};let h=m.days;for(let c=0;c<e.getDaysPerWeek();c++){n===0&&f&&(i.weekdays[c]=r.getWeekdayLabel(e.getWeekday(t),d));let u=new X(t.year,t.month,t.day),m=e.getNext(u),g=r.getDayAriaLabel(u),_=!!(o&&u.before(o)||s&&u.after(s));!_&&l&&(_=l(u,{month:i.number,year:i.year}));let v=u.equals(p),y=a?a(u,{month:i.number,year:i.year}):void 0;i.firstDate===null&&u.month===i.number&&(i.firstDate=u),u.month===i.number&&m.month!==i.number&&(i.lastDate=u);let b=h[c];b||=h[c]={},b.date=u,b.context=Object.assign(b.context||{},{$implicit:u,date:u,data:y,currentMonth:i.number,currentYear:i.year,disabled:_,focused:!1,selected:!1,today:v}),b.tabindex=-1,b.ariaLabel=g,b.hidden=!1,t=m}m.number=e.getWeekNumber(h.map(e=>e.date),c),m.collapsed=u===`collapsed`&&h[0].date.month!==i.number&&h[h.length-1].date.month!==i.number}return i}function mh(e,t,n){let r=e.getDaysPerWeek(),i=new X(t.year,t.month,1),a=e.getWeekday(i)%r;return e.getPrev(i,`d`,(r+a-n)%r)}var hh=class{constructor(e,t,n=new Qm,r){this._calendar=n,this._VALIDATORS={dayTemplateData:e=>{if(this._state.dayTemplateData!==e)return{dayTemplateData:e??null}},displayMonths:e=>{if(e=id(e),J(e)&&e>0&&this._state.displayMonths!==e)return{displayMonths:e}},disabled:e=>{if(this._state.disabled!==e)return{disabled:e}},firstDayOfWeek:e=>{if(e=id(e),J(e)&&e>=0&&this._state.firstDayOfWeek!==e)return{firstDayOfWeek:e}},focusVisible:e=>{if(this._state.focusVisible!==e&&!this._state.disabled)return{focusVisible:e}},markDisabled:e=>{if(this._state.markDisabled!==e)return{markDisabled:e??null}},maxDate:e=>{let t=this.toValidDate(e,null);if(nh(this._state.maxDate,t))return{maxDate:t}},minDate:e=>{let t=this.toValidDate(e,null);if(nh(this._state.minDate,t))return{minDate:t}},navigation:e=>{if(this._state.navigation!==e)return{navigation:e}},outsideDays:e=>{if(this._state.outsideDays!==e)return{outsideDays:e}},weekdays:e=>{let t=e===!0||e===!1?`narrow`:e,n=e===!0||e===!1?e:!0;if(this._state.weekdayWidth!==t||this._state.weekdaysVisible!==n)return{weekdayWidth:t,weekdaysVisible:n}}},this._model$=new z,this._dateSelect$=new z,this._state={dayTemplateData:null,markDisabled:null,maxDate:null,minDate:null,disabled:!1,displayMonths:1,firstDate:null,firstDayOfWeek:1,lastDate:null,focusDate:null,focusVisible:!1,months:[],navigation:`select`,outsideDays:`visible`,prevDisabled:!1,nextDisabled:!1,selectedDate:null,selectBoxes:{years:[],months:[]},weekdayWidth:`narrow`,weekdaysVisible:!0},this._i18n=r??new th(e,t)}get model$(){return this._model$.pipe(rs(e=>e.months.length>0))}get dateSelect$(){return this._dateSelect$.pipe(rs(e=>e!==null))}set(e){let t=Object.keys(e).map(t=>{let n=this._VALIDATORS[t];return n(e[t])??{}}).reduce((e,t)=>({...e,...t}),{});Object.keys(t).length>0&&this._nextState(t)}focus(e){let t=this.toValidDate(e,null);t!=null&&!this._state.disabled&&nh(this._state.focusDate,t)&&this._nextState({focusDate:e})}focusSelect(){sh(this._state.focusDate,this._state)&&this.select(this._state.focusDate,{emitEvent:!0})}open(e){let t=this.toValidDate(e,this._calendar.getToday());t!=null&&!this._state.disabled&&(!this._state.firstDate||rh(this._state.firstDate,t))&&this._nextState({firstDate:t})}select(e,t={}){let n=this.toValidDate(e,null);n!=null&&!this._state.disabled&&(nh(this._state.selectedDate,n)&&this._nextState({selectedDate:n}),t.emitEvent&&sh(n,this._state)&&this._dateSelect$.next(n))}toValidDate(e,t){let n=X.from(e);return t===void 0&&(t=this._calendar.getToday()),this._calendar.isValid(n)?n:t}getMonth(e){for(let t of this._state.months)if(e.month===t.number&&e.year===t.year)return t;throw Error(`month ${e.month} of year ${e.year} not found`)}_nextState(e){let t=this._updateState(e);this._patchContexts(t),this._state=t,this._model$.next(this._state)}_patchContexts(e){let{months:t,displayMonths:n,selectedDate:r,focusDate:i,focusVisible:a,disabled:o,outsideDays:s}=e;e.months.forEach(e=>{e.weeks.forEach(c=>{c.days.forEach(c=>{i&&(c.context.focused=i.equals(c.date)&&a),c.tabindex=!o&&i&&c.date.equals(i)&&i.month===e.number?0:-1,o===!0&&(c.context.disabled=!0),r!==void 0&&(c.context.selected=r!==null&&r.equals(c.date)),e.number!==c.date.month&&(c.hidden=s===`hidden`||s===`collapsed`||n>1&&c.date.after(t[0].firstDate)&&c.date.before(t[n-1].lastDate))})})})}_updateState(e){let t=Object.assign({},this._state,e),{firstDate:n}=t;if((`minDate`in e||`maxDate`in e)&&(ah(t.minDate,t.maxDate),t.focusDate=oh(t.focusDate,t.minDate,t.maxDate),t.firstDate=oh(t.firstDate,t.minDate,t.maxDate),n=t.focusDate),`disabled`in e&&(t.focusVisible=!1),`selectedDate`in e&&this._state.months.length===0&&(n=t.selectedDate),`focusVisible`in e||`focusDate`in e&&(t.focusDate=oh(t.focusDate,t.minDate,t.maxDate),n=t.focusDate,t.months.length!==0&&t.focusDate&&!t.focusDate.before(t.firstDate)&&!t.focusDate.after(t.lastDate))||(`firstDate`in e&&(t.firstDate=oh(t.firstDate,t.minDate,t.maxDate),n=t.firstDate),!n))return t;let r=`dayTemplateData`in e||`firstDayOfWeek`in e||`markDisabled`in e||`minDate`in e||`maxDate`in e||`disabled`in e||`outsideDays`in e||`weekdaysVisible`in e,i=fh(this._calendar,n,t,this._i18n,r);t.months=i,t.firstDate=i[0].firstDate,t.lastDate=i[i.length-1].lastDate,`selectedDate`in e&&!sh(t.selectedDate,t)&&(t.selectedDate=null),`firstDate`in e&&(!t.focusDate||t.focusDate.before(t.firstDate)||t.focusDate.after(t.lastDate))&&(t.focusDate=n);let a=!this._state.firstDate||this._state.firstDate.year!==t.firstDate.year,o=!this._state.firstDate||this._state.firstDate.month!==t.firstDate.month;return t.navigation===`select`?((`minDate`in e||`maxDate`in e||t.selectBoxes.years.length===0||a)&&(t.selectBoxes.years=lh(t.firstDate,t.minDate,t.maxDate)),(`minDate`in e||`maxDate`in e||t.selectBoxes.months.length===0||a)&&(t.selectBoxes.months=ch(this._calendar,t.firstDate,t.minDate,t.maxDate))):t.selectBoxes={years:[],months:[]},(t.navigation===`arrows`||t.navigation===`select`)&&(o||a||`minDate`in e||`maxDate`in e||`disabled`in e)&&(t.prevDisabled=t.disabled||dh(this._calendar,t.firstDate,t.minDate),t.nextDisabled=t.disabled||uh(this._calendar,t.lastDate,t.maxDate)),t}},gh=class{constructor(){this.displayMonths=1,this.firstDayOfWeek=1,this.navigation=`select`,this.outsideDays=`visible`,this.showWeekNumbers=!1,this.weekdays=`narrow`}static get $name(){return`ngb.datepicker-config.service`}},_h=class e{static get $name(){return`ngbDatepickerContent`}static $factory(){return{controller:e,bindToController:!0,restrict:`A`,require:{templateRef:`ngTemplate`}}}},vh=class{processKey(e,t){let{state:n,calendar:r}=t;switch(e.key){case`PageUp`:t.focusDate(r.getPrev(n.focusedDate,e.shiftKey?`y`:`m`,1));break;case`PageDown`:t.focusDate(r.getNext(n.focusedDate,e.shiftKey?`y`:`m`,1));break;case`End`:t.focusDate(e.shiftKey?n.maxDate:n.lastDate);break;case`Home`:t.focusDate(e.shiftKey?n.minDate:n.firstDate);break;case`ArrowLeft`:t.focusDate(r.getPrev(n.focusedDate,`d`,1));break;case`ArrowUp`:t.focusDate(r.getPrev(n.focusedDate,`d`,r.getDaysPerWeek()));break;case`ArrowRight`:t.focusDate(r.getNext(n.focusedDate,`d`,1));break;case`ArrowDown`:t.focusDate(r.getNext(n.focusedDate,`d`,r.getDaysPerWeek()));break;case`Enter`:case` `:t.focusSelect();break;default:return}e.preventDefault(),e.stopPropagation()}static get $name(){return`ngb.datepicker.keyboard.service`}},yh=(e=>(e[e.PREV=0]=`PREV`,e[e.NEXT=1]=`NEXT`,e))(yh||{}),bh=[`dayTemplateData`,`displayMonths`,`markDisabled`,`firstDayOfWeek`,`navigation`,`minDate`,`maxDate`,`outsideDays`,`weekdays`],xh=class e{constructor(e,t,n,r,i,a){this.$element=e,this.$scope=t,this.$locale=n,this.$filter=r,this._config=i,this._changeDetector=a,this._keyboardService=new vh,this._controlValue=null,this._initialized=!1,this.onChange=()=>void 0,this.onTouched=()=>void 0,this._handleFocusChange=e=>{let t=e.target,n=e.relatedTarget;t?.classList.contains(`ngb-dp-day`)&&n?.classList.contains(`ngb-dp-day`)&&this.$element[0].contains(t)&&this.$element[0].contains(n)||this.$scope.$evalAsync(()=>this._service.set({focusVisible:e.type===`focusin`}))}}_subscribeToService(){this._dateSelectSubscription=this._service.dateSelect$.subscribe(e=>{this.$scope.$evalAsync(()=>this.dateSelect?.({$event:e}))}),this._modelSubscription=this._service.model$.subscribe(e=>{this.$scope.$evalAsync(()=>this._applyModel(e))})}$onInit(){this.calendar=this.calendar??new Qm,this.dateAdapter=this.dateAdapter??new Jm,this.i18n=this.i18n??new th(this.$locale,this.$filter),this._createService(),this.dayTemplate=this.dayTemplate??this._config.dayTemplate,this.dayTemplateData=this.dayTemplateData??this._config.dayTemplateData,this.displayMonths=this.displayMonths??this._config.displayMonths,this.firstDayOfWeek=this.firstDayOfWeek??this._config.firstDayOfWeek,this.footerTemplate=this.footerTemplate??this._config.footerTemplate,this.markDisabled=this.markDisabled??this._config.markDisabled,this.maxDate=this.maxDate??this._config.maxDate,this.minDate=this.minDate??this._config.minDate,this.navigation=this.navigation??this._config.navigation,this.outsideDays=this.outsideDays??this._config.outsideDays,this.showWeekNumbers=this.showWeekNumbers??this._config.showWeekNumbers,this.startDate=this.startDate??this._config.startDate,this.weekdays=this.weekdays??this._config.weekdays,this._service.set(this._collectInputs()),this.ngModelCtrl&&(this.registerOnChange(e=>this.ngModelCtrl?.$setViewValue(e)),this.registerOnTouched(()=>this.ngModelCtrl?.$setTouched()),this.ngModelCtrl.$render=()=>this.writeValue(this.ngModelCtrl?.$viewValue),this.ngModelCtrl.$render()),this.navigateTo(this.startDate??this._controlValue),this._initialized=!0}$postLink(){this.dayTemplate=this.dayTemplate??this._defaultDayTemplate,this.$element.addClass(`d-inline-block border rounded-1`),this.$element.toggleClass(`disabled`,!!this.model?.disabled),this.$element.on(`focusin focusout`,this._handleFocusChange),this._removeDisabledListener=this.ngDisabled?.onChange(e=>this.setDisabledState(e)),this.ngDisabled&&this.setDisabledState(this.ngDisabled.disabled)}$onChanges(e){if(!this._initialized)return;if(e.calendar||e.i18n){this.calendar=this.calendar??new Qm,this.i18n=this.i18n??new th(this.$locale,this.$filter),this._createService(),this._service.set(this._collectInputs()),this._service.select(this._controlValue),this.navigateTo(this.startDate??this._controlValue);return}let t=this._collectInputs(bh.filter(t=>t in e));this._service.set(t);let n=e.startDate;n&&rh(n.previousValue,n.currentValue)&&this.navigateTo(this.startDate)}$onDestroy(){this.$element.off(`focusin focusout`,this._handleFocusChange),this._removeDisabledListener?.(),this._modelSubscription?.unsubscribe(),this._dateSelectSubscription?.unsubscribe()}get state(){return this._publicState}getMonth(e){return this._service.getMonth(e)}processKey(e){this._keyboardService.processKey(e,this)}focusDate(e){this._service.focus(X.from(e))}focusSelect(){this._service.focusSelect()}focus(){queueMicrotask(()=>{this.$element[0].querySelector(`div.ngb-dp-day[tabindex="0"]`)?.focus()})}navigateTo(e){let t=e?X.from(e.day?e:{...e,day:1}):null;this._service.open(t)}onDateSelect(e){this._service.focus(e),this._service.select(e,{emitEvent:!0})}onNavigateDateSelect(e){this._service.open(e)}onNavigateEvent(e){let t=this.model.firstDate;t&&(e===0?this._service.open(this.calendar.getPrev(t,`m`,1)):e===1&&this._service.open(this.calendar.getNext(t,`m`,1)))}setDisabledState(e){this._service.set({disabled:e})}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}writeValue(e){this.dateAdapter&&(this._controlValue=X.from(this.dateAdapter.fromModel(e)),this._service.select(this._controlValue))}_collectInputs(e=bh){let t={};for(let n of e)t[n]=this[n];return t}_createService(){this._modelSubscription?.unsubscribe(),this._dateSelectSubscription?.unsubscribe(),this._service=new hh(this.$locale,this.$filter,this.calendar,this.i18n),this._subscribeToService()}_applyModel(e){let t=e.firstDate,n=e.lastDate,r=e.focusDate;if(!t||!n||!r)return;let i=this.model?.firstDate??null,a=!1;if(!t.equals(i)&&(this.navigate?.({$event:{current:i?{year:i.year,month:i.month}:null,next:{year:t.year,month:t.month},preventDefault:()=>{a=!0}}}),a&&i)){this._service.open(i);return}let o=this.model?.focusDate??null;this.model=e,this._publicState={maxDate:e.maxDate,minDate:e.minDate,firstDate:t,lastDate:n,focusedDate:r,months:e.months.map(e=>e.firstDate)},nh(e.selectedDate,this._controlValue)&&(this._controlValue=e.selectedDate,this.onTouched(),this.onChange(this.dateAdapter?.toModel(e.selectedDate))),nh(e.focusDate,o)&&o&&e.focusVisible&&this.focus(),this.$element.toggleClass(`disabled`,e.disabled),this._changeDetector.markForCheck()}static get $name(){return`ngbDatepicker`}static get $inject(){return[`$element`,`$scope`,`$locale`,`$filter`,gh.$name,H.$name]}static get $factory(){return{bindings:{contentTemplate:`<?`,calendar:`<?`,dateAdapter:`<?`,dayTemplate:`<?`,dayTemplateData:`<?`,displayMonths:`<?`,firstDayOfWeek:`<?`,footerTemplate:`<?`,i18n:`<?`,markDisabled:`<?`,maxDate:`<?`,minDate:`<?`,navigation:`@?`,outsideDays:`@?`,showWeekNumbers:`<?`,startDate:`<?`,weekdays:`<?`,dateSelect:`&?`,navigate:`&?`},controller:e,controllerAs:`$`,require:{ngModelCtrl:`?ngModel`,ngDisabled:`?ngDisabled`},transclude:!0,template:$m}}};G([dc(`defaultDayTemplate`,{read:void 0,static:!0})],xh.prototype,`_defaultDayTemplate`,2),G([Ks(_h,{static:!0})],xh.prototype,`contentTemplateFromContent`,2);var Sh=xh,Ch=class e{constructor(e,t,n){this.$element=e,this.$locale=t,this.$filter=n}$onInit(){this.i18n=this.i18n??new th(this.$locale,this.$filter),this.$element.addClass(`btn btn-light border-0 p-0 text-center rounded-1`),this.$element.css({width:`2rem`,height:`2rem`,lineHeight:`2rem`,background:`transparent`})}$postLink(){this._renderClasses()}$onChanges(e){this._renderClasses()}isMuted(){return!this.selected&&(this.date.month!==this.currentMonth||this.disabled)}_renderClasses(){this.date&&(this.$element.toggleClass(`bg-primary`,!!this.selected),this.$element.toggleClass(`text-white`,!!this.selected),this.$element.toggleClass(`text-muted`,this.isMuted()),this.$element.toggleClass(`outside`,this.isMuted()),this.$element.toggleClass(`opacity-50`,this.isMuted()),this.$element.toggleClass(`active`,!!this.focused))}static get $name(){return`ngbDatepickerDayView`}static get $inject(){return[`$element`,`$locale`,`$filter`]}static $factory(){return{bindToController:{currentMonth:`<`,date:`<`,disabled:`<`,focused:`<`,i18n:`<`,selected:`<`},controller:e,controllerAs:`$day`,restrict:`A`,scope:!0,template:`{{ $day.i18n && $day.i18n.getDayNumerals($day.date) }}`}}},wh=`<div
  ng-if="$.viewModel.weekdays.length"
  class="ngb-dp-week ngb-dp-weekdays d-flex rounded-0 border-bottom bg-body-tertiary"
  role="row">
  <div
    ng-if="$.datepicker.showWeekNumbers"
    class="ngb-dp-weekday ngb-dp-showweek small fst-italic text-center"
    ng-class="{ 'text-muted': $.datepicker.model.disabled }"
    style="width: 2rem; height: 2rem; line-height: 2rem">
    {{ $.datepicker.i18n.getWeekLabel() }}
  </div>
  <div
    ng-repeat="weekday in $.viewModel.weekdays track by $index"
    class="ngb-dp-weekday small fst-italic text-center text-info"
    ng-class="{ 'text-muted': $.datepicker.model.disabled }"
    style="width: 2rem; height: 2rem; line-height: 2rem"
    role="columnheader">
    {{ weekday }}
  </div>
</div>

<div
  ng-repeat="week in $.viewModel.weeks track by $index"
  ng-if="!week.collapsed"
  class="ngb-dp-week d-flex rounded-1"
  ng-class="{ 'pb-1': $last }"
  role="row">
  <div
    ng-if="$.datepicker.showWeekNumbers"
    class="ngb-dp-week-number small text-muted fst-italic text-center"
    style="width: 2rem; height: 2rem; line-height: 2rem">
    {{ $.datepicker.i18n.getWeekNumerals(week.number) }}
  </div>
  <div
    ng-repeat="day in week.days track by day.date.year + '-' + day.date.month + '-' + day.date.day"
    ng-click="$.doSelect(day); $event.preventDefault()"
    class="ngb-dp-day"
    style="width: 2rem; height: 2rem; cursor: pointer"
    ng-style="{ cursor: day.context.disabled || day.hidden ? 'default' : 'pointer' }"
    ng-class="{ disabled: day.context.disabled, hidden: day.hidden, invisible: day.hidden, 'pe-none': day.context.disabled || day.hidden, 'z-1': day.tabindex === 0, 'ngb-dp-today': day.context.today }"
    role="gridcell"
    ng-attr-tabindex="{{ day.tabindex }}"
    ng-attr-aria-label="{{ day.ariaLabel }}"
    ng-attr-aria-disabled="{{ day.context.disabled }}"
    ng-attr-aria-selected="{{ day.context.selected }}">
    <ng-template
      ng-if="!day.hidden"
      ng-template-outlet="$.datepicker.dayTemplate"
      ng-template-outlet-context="day.context">
    </ng-template>
  </div>
</div>
`,Th=class e{constructor(e,t){this.$element=e,this.$scope=t,this._handleKeyDown=e=>{this.datepicker?.processKey(e)}}set month(e){this._month=e,this.datepicker&&e&&(this.viewModel=this.datepicker.getMonth(e))}get month(){return this._month}$onInit(){if(this.datepicker=this.datepicker??this._parentDatepicker??this._findDatepickerInTemplateScope(),!this.datepicker)throw Error(`ngb-datepicker-month must be used inside an ngb-datepicker.`);this._month&&(this.viewModel=this.datepicker.getMonth(this._month))}$postLink(){this.$element.addClass(`d-block pe-auto`),this.$element.attr(`role`,`grid`),this.$element.on(`keydown`,this._handleKeyDown)}$onDestroy(){this.$element.off(`keydown`,this._handleKeyDown)}doSelect(e){!e.context.disabled&&!e.hidden&&this.datepicker?.onDateSelect(e.date)}_findDatepickerInTemplateScope(){let e=this.$scope.$parent;for(;e;){for(let t of Object.keys(e)){if(t.startsWith(`$`))continue;let n=e[t];if(n&&typeof n==`object`&&typeof n.getMonth==`function`&&typeof n.onDateSelect==`function`)return n}e=e.$parent}}static get $name(){return`ngbDatepickerMonth`}static get $inject(){return[`$element`,`$scope`]}static get $factory(){return{bindings:{datepicker:`<?`,month:`<`},controller:e,controllerAs:`$`,require:{_parentDatepicker:`?^^ngbDatepicker`},template:wh}}},Eh=`<div class="ngb-dp-arrow ngb-dp-arrow-prev d-flex flex-grow-1 p-0 m-0" style="width: 2rem; height: 2rem">
  <button
    type="button"
    class="btn btn-link ngb-dp-arrow-btn z-1 py-0 px-1 mx-2 my-0 bg-transparent border-0"
    ng-click="$.onClickPrev($event)"
    ng-disabled="$.prevDisabled"
    i18n-aria-label="@@ngb.datepicker.previous-month"
    aria-label="Previous month"
    i18n-title="@@ngb.datepicker.previous-month"
    title="Previous month">
    <span
      class="ngb-dp-navigation-chevron d-inline-block"
      style="width: .75em; height: .75em; margin-right: .15em; margin-left: .25em; border-style: solid; border-width: .2em .2em 0 0; transform: rotate(-135deg)">
    </span>
  </button>
</div>

<ngb-datepicker-navigation-select
  ng-if="$.showSelect"
  class="ngb-dp-navigation-select d-flex flex-grow-1"
  style="flex-basis: 9rem"
  date="$.date"
  i18n="$.i18n"
  disabled="$.disabled"
  months="$.selectBoxes.months"
  years="$.selectBoxes.years"
  select="$.select({ $event: $event })">
</ngb-datepicker-navigation-select>

<ng-container ng-if="!$.showSelect">
  <ng-container ng-repeat="month in $.months track by $index">
    <div ng-if="$index > 0" class="ngb-dp-arrow d-flex flex-grow-1 p-0 m-0" style="width: 2rem; height: 2rem"></div>
    <div
      class="ngb-dp-month-name fs-5 text-center"
      ng-class="{ 'text-muted': $.disabled }"
      style="height: 2rem; line-height: 2rem">
      {{ $.i18n.getMonthLabel(month.firstDate) }}
    </div>
    <div
      ng-if="$index !== $.months.length - 1"
      class="ngb-dp-arrow d-flex flex-grow-1 p-0 m-0"
      style="width: 2rem; height: 2rem">
    </div>
  </ng-container>
</ng-container>

<div class="visually-hidden" aria-live="polite">
  <span ng-repeat="month in $.months track by $index">{{ $.i18n.getMonthLabel(month.firstDate) }}</span>
</div>

<div
  class="ngb-dp-arrow ngb-dp-arrow-next d-flex flex-grow-1 justify-content-end p-0 m-0"
  style="width: 2rem; height: 2rem">
  <button
    type="button"
    class="btn btn-link ngb-dp-arrow-btn z-1 py-0 px-1 mx-2 my-0 bg-transparent border-0"
    ng-click="$.onClickNext($event)"
    ng-disabled="$.nextDisabled"
    i18n-aria-label="@@ngb.datepicker.next-month"
    aria-label="Next month"
    i18n-title="@@ngb.datepicker.next-month"
    title="Next month">
    <span
      class="ngb-dp-navigation-chevron d-inline-block"
      style="width: .75em; height: .75em; margin-right: .25em; margin-left: .15em; border-style: solid; border-width: .2em .2em 0 0; transform: rotate(45deg)">
    </span>
  </button>
</div>
`,Dh=class e{constructor(e,t,n){this.$element=e,this.$locale=t,this.$filter=n,this.navigation=yh,this.months=[]}$onInit(){this.i18n=this.i18n??new th(this.$locale,this.$filter),this.$element.addClass(`d-flex align-items-center`)}onClickPrev(e){e.currentTarget?.focus(),this.navigate?.({$event:0})}onClickNext(e){e.currentTarget?.focus(),this.navigate?.({$event:1})}static get $name(){return`ngbDatepickerNavigation`}static get $inject(){return[`$element`,`$locale`,`$filter`]}static get $factory(){return{bindings:{date:`<`,disabled:`<`,i18n:`<?`,months:`<`,showSelect:`<`,prevDisabled:`<`,nextDisabled:`<`,selectBoxes:`<`,navigate:`&?`,select:`&?`},controller:e,controllerAs:`$`,template:Eh}}},Oh=`<select
  ng-disabled="$.disabled"
  ng-model="$.selectedMonth"
  ng-change="$.changeMonth($.selectedMonth)"
  class="form-select flex-grow-1 py-0 px-2 small"
  style="height: 1.85rem"
  i18n-aria-label="@@ngb.datepicker.select-month"
  aria-label="Select month"
  i18n-title="@@ngb.datepicker.select-month"
  title="Select month">
  <option
    ng-repeat="month in $.months track by month"
    ng-value="month"
    ng-attr-aria-label="{{ $.i18n.getMonthFullName(month, $.date.year) }}">
    {{ $.i18n.getMonthShortName(month, $.date.year) }}
  </option>
</select>
<select
  ng-disabled="$.disabled"
  ng-model="$.selectedYear"
  ng-change="$.changeYear($.selectedYear)"
  class="form-select flex-grow-1 py-0 px-2 small"
  style="height: 1.85rem"
  i18n-aria-label="@@ngb.datepicker.select-year"
  aria-label="Select year"
  i18n-title="@@ngb.datepicker.select-year"
  title="Select year">
  <option ng-repeat="year in $.years track by year" ng-value="year">
    {{ $.i18n.getYearNumerals(year) }}
  </option>
</select>
`,kh=class e{constructor(e,t,n){this.$element=e,this.$locale=t,this.$filter=n,this.months=[],this.years=[],this.selectedMonth=0,this.selectedYear=0}$onInit(){this.i18n=this.i18n??new th(this.$locale,this.$filter),this.$element.addClass(`d-flex flex-grow-1`),this.$element.css(`flex-basis`,`9rem`),this._syncSelection()}$onChanges(e){this._syncSelection()}changeMonth(e){this.select?.({$event:new X(this.date.year,id(e),1)})}changeYear(e){this.select?.({$event:new X(id(e),this.date.month,1)})}_syncSelection(){this.date&&(this.selectedMonth=this.date.month,this.selectedYear=this.date.year)}static get $name(){return`ngbDatepickerNavigationSelect`}static get $inject(){return[`$element`,`$locale`,`$filter`]}static get $factory(){return{bindings:{date:`<`,disabled:`<`,i18n:`<?`,months:`<`,years:`<`,select:`&?`},controller:e,controllerAs:`$`,template:Oh}}},Ah=class{},jh=class extends Ah{parse(e){if(e!=null){let t=e.trim().split(`-`);if(t.length===1&&Y(t[0]))return{year:id(t[0]),month:null,day:null};if(t.length===2&&Y(t[0])&&Y(t[1]))return{year:id(t[0]),month:id(t[1]),day:null};if(t.length===3&&Y(t[0])&&Y(t[1])&&Y(t[2]))return{year:id(t[0]),month:id(t[1]),day:id(t[2])}}return null}format(e){return e?`${e.year}-${Y(e.month)?ed(e.month):``}-${Y(e.day)?ed(e.day):``}`:``}},Mh=class extends gh{constructor(){super(...arguments),this.autoClose=!0,this.container=null,this.placement=[`bottom-start`,`bottom-end`,`top-start`,`top-end`],this.popperOptions=e=>e,this.restoreFocus=!0}static get $name(){return`ngb.input-datepicker-config.service`}},Nh=[`contentTemplate`,`dayTemplate`,`dayTemplateData`,`displayMonths`,`firstDayOfWeek`,`footerTemplate`,`markDisabled`,`minDate`,`maxDate`,`navigation`,`outsideDays`,`showWeekNumbers`,`weekdays`],Ph=class e{constructor(e,t,n,r,i,a,o,s){this.$element=e,this.$scope=t,this._config=n,this._ngZone=r,this._changeDetector=i,this._closed$=new z,this._windowRef=null,this._model=null,this._inputValue=``,this._disabled=!1,this._elementWithFocus=null,this._onChange=()=>void 0,this._onTouched=()=>void 0,this._validatorChange=()=>void 0,this._handleChange=()=>this.manualDateChange(this._nativeElement.value,!0),this._handleFocus=()=>this.onFocus(),this._handleBlur=()=>this.onBlur(),this._nativeElement=q(e);let c=new wf(a,r,o);this._popupService=c.$create(Sh.$name),this._positioning=lf(s)}get disabled(){return this._disabled}set disabled(e){this._disabled=e===``||e===void 0&&!!this._nativeElement?.hasAttribute(`disabled`)||!!(e&&e!==`false`),this._nativeElement?.toggleAttribute(`disabled`,this._disabled),this._windowRef?.componentInstance?.setDisabledState(this._disabled)}$onInit(){if(this.calendar=this.calendar??new Qm,this.dateAdapter=this.dateAdapter??new Jm,this.parserFormatter=this.parserFormatter??new jh,this.autoClose=this.autoClose??this._config.autoClose,this.container=this.container??this._config.container,this.dayTemplate=this.dayTemplate??this._config.dayTemplate,this.dayTemplateData=this.dayTemplateData??this._config.dayTemplateData,this.displayMonths=this.displayMonths??this._config.displayMonths,this.firstDayOfWeek=this.firstDayOfWeek??this._config.firstDayOfWeek,this.footerTemplate=this.footerTemplate??this._config.footerTemplate,this.markDisabled=this.markDisabled??this._config.markDisabled,this.maxDate=this.maxDate??this._config.maxDate,this.minDate=this.minDate??this._config.minDate,this.navigation=this.navigation??this._config.navigation,this.outsideDays=this.outsideDays??this._config.outsideDays,this.placement=this.placement??this._config.placement,this.popperOptions=this.popperOptions??this._config.popperOptions,this.positionTarget=this.positionTarget??this._config.positionTarget,this.restoreFocus=this.restoreFocus??this._config.restoreFocus,this.showWeekNumbers=this.showWeekNumbers??this._config.showWeekNumbers,this.startDate=this.startDate??this._config.startDate,this.weekdays=this.weekdays??this._config.weekdays,this.ngModelCtrl){let e=this.ngModelCtrl;this.registerOnChange(t=>e.$setViewValue(t)),this.registerOnTouched(()=>e.$setTouched()),this.registerOnValidatorChange(()=>e.$validate()),e.$parsers.unshift(e=>this._parseViewValue(e)),e.$validators.ngbDate=e=>this.validate({value:e})===null,e.$render=()=>this.writeValue(e.$modelValue),e.$render()}}$postLink(){this.$element.on(`change`,this._handleChange),this.$element.on(`focus`,this._handleFocus),this.$element.on(`blur`,this._handleBlur),this._removeDisabledListener=this.ngDisabled?.onChange(e=>this.setDisabledState(e||this._nativeElement.disabled)),this.setDisabledState(!!this.ngDisabled?.disabled||this.disabled||this._nativeElement.disabled)}$onChanges(e){if((e.minDate||e.maxDate)&&this._validatorChange(),e.datepickerClass&&this._windowRef){let{currentValue:t,previousValue:n}=e.datepickerClass;n&&this._windowRef.$element.removeClass(n),t&&this._windowRef.$element.addClass(t)}if(e.autoClose&&this.isOpen()&&this._setCloseHandlers(),this._windowRef){for(let t of Nh)t in e&&this._windowRef.setInput(t,this[t]);e.startDate&&this._windowRef.componentInstance?.navigateTo(this.startDate)}}$onDestroy(){this.$element.off(`change`,this._handleChange),this.$element.off(`focus`,this._handleFocus),this.$element.off(`blur`,this._handleBlur),this._removeDisabledListener?.(),this.close(!1),this._closed$.complete()}writeValue(e){this.dateAdapter&&(this._model=this._fromDateStruct(this.dateAdapter.fromModel(e)),this._writeModelValue(this._model))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}registerOnValidatorChange(e){this._validatorChange=e}validate(e){let t=e.value;if(t!=null){let e=this.dateAdapter?this._fromDateStruct(this.dateAdapter.fromModel(t)):null;if(!e)return{ngbDate:{invalid:t}};if(this.minDate&&e.before(X.from(this.minDate)))return{ngbDate:{minDate:{minDate:this.minDate,actual:t}}};if(this.maxDate&&e.after(X.from(this.maxDate)))return{ngbDate:{maxDate:{maxDate:this.maxDate,actual:t}}}}return null}manualDateChange(e,t=!1){let n=e!==this._inputValue;n&&(this._inputValue=e,this._model=this._fromDateStruct(this.parserFormatter?.parse(e)??null)),(n||!t)&&this._onChange(this._model&&this.dateAdapter?this.dateAdapter.toModel(this._model):e===``?null:e),t&&this._model&&this._writeModelValue(this._model)}setDisabledState(e){this.disabled=e,this._windowRef?.$element.toggleClass(`disabled`,e),this._windowRef&&this.$scope.$evalAsync(()=>this._windowRef?.$element.toggleClass(`disabled`,this.disabled))}isOpen(){return this._windowRef!==null}open(){if(this.isOpen())return;let{windowRef:e}=this._popupService.open();this._windowRef=e;let t=e.componentInstance;if(!t)throw Error(`Unable to create the datepicker popup component.`);e.$element.addClass(`dropdown-menu show p-0`),this.datepickerClass&&e.$element.addClass(this.datepickerClass),this.container===`body`&&(e.$element.addClass(`ngb-dp-body`),e.$element.css(`z-index`,`1055`)),this._applyDatepickerInputs(e),e.setInput(`dateSelect`,({$event:e})=>this._selectDate(e)),e.setInput(`navigate`,({$event:e})=>this.navigate?.({$event:e})),e.setInput(`startDate`,this.startDate??this._model),t.writeValue(this.dateAdapter?.toModel(this._model)),t.setDisabledState(!!this.disabled),e.$element.toggleClass(`disabled`,!!this.disabled),this.$scope.$evalAsync(()=>this._windowRef?.$element.toggleClass(`disabled`,this.disabled));let n=q(e.$element);this.container===`body`?document.body.appendChild(n):this._nativeElement.parentNode?.insertBefore(n,this._nativeElement.nextSibling),this._elementWithFocus=document.activeElement,Hu(this._ngZone,n,this._closed$,!0),queueMicrotask(()=>t.focus());let r=this._resolvePositionTarget();this._ngZone.runOutsideAngular(()=>{this._positioning.createPopper({hostElement:r,targetElement:n,placement:this.placement,updatePopperOptions:e=>this.popperOptions(uf([0,2])(e))})}),this._unwatchPositioning=this.$scope.$watch(()=>this._positioning.update()),this._setCloseHandlers(),this._changeDetector.markForCheck()}close(e=!0){this._windowRef&&(this._windowRef=null,this._closed$.next(),this._positioning.destroy(),this._unwatchPositioning?.(),this._unwatchPositioning=void 0,this._popupService.close().subscribe(()=>{this.closed?.(),this._changeDetector.markForCheck()}),e&&this._restoreFocus())}toggle(){this.isOpen()?this.close():this.open()}navigateTo(e){this._windowRef?.componentInstance?.navigateTo(e)}_parseViewValue(e){return typeof e!=`string`||!this.parserFormatter||!this.dateAdapter?e:(this._inputValue=e,this._model=this._fromDateStruct(this.parserFormatter.parse(e)),this._model?this.dateAdapter.toModel(this._model):e===``?null:e)}_selectDate(e){if(!this.dateAdapter)return;this._model=e;let t=this.dateAdapter.toModel(e);this._writeModelValue(e),this._onChange(t),this._onTouched(),this.dateSelect?.({$event:e}),(this.autoClose===!0||this.autoClose===`inside`)&&this.close()}_writeModelValue(e){if(!this.parserFormatter||!this.dateAdapter)return;let t=this.parserFormatter.format(e);this._inputValue=t,this._nativeElement.value=t,this._windowRef?.componentInstance?.writeValue(this.dateAdapter.toModel(e))}_fromDateStruct(e){let t=e?new X(e.year,e.month,e.day):null;return this.calendar?.isValid(t)?t:null}_applyDatepickerInputs(e){e.setInput(`calendar`,this.calendar),e.setInput(`dateAdapter`,this.dateAdapter),this.i18n&&e.setInput(`i18n`,this.i18n);for(let t of Nh){let n=this[t];n!==void 0&&e.setInput(t,n)}}_resolvePositionTarget(){if(typeof this.positionTarget==`string`){let e=document.querySelector(this.positionTarget);if(!e)throw Error(`ngbDatepicker could not find positionTarget "${this.positionTarget}".`);return e}return this.positionTarget instanceof HTMLElement?this.positionTarget:this._nativeElement}_setCloseHandlers(){this._closed$.next();let e=this._windowRef?q(this._windowRef.$element):null;e&&Xd(this._ngZone,this.autoClose,this._closed$,()=>this.close(),[e],[this._nativeElement])}_restoreFocus(){let e=this._elementWithFocus;typeof this.restoreFocus==`string`?e=document.querySelector(this.restoreFocus):this.restoreFocus instanceof HTMLElement&&(e=this.restoreFocus),(e??document.body).focus?.()}onFocus(){this._elementWithFocus=this._nativeElement}onBlur(){this._onTouched()}static get $name(){return`ngbDatepicker`}static get $inject(){return[`$element`,`$scope`,Mh.$name,U.$name,H.$name,`$compile`,`$rootScope`,df.$name]}static get $factory(){return()=>({bindToController:{autoClose:`<?`,calendar:`<?`,contentTemplate:`<?`,datepickerClass:`@?`,dateAdapter:`<?`,dayTemplate:`<?`,dayTemplateData:`<?`,displayMonths:`<?`,firstDayOfWeek:`<?`,footerTemplate:`<?`,markDisabled:`<?`,i18n:`<?`,minDate:`<?`,maxDate:`<?`,navigation:`@?`,outsideDays:`@?`,placement:`<?`,parserFormatter:`<?`,popperOptions:`<?`,restoreFocus:`<?`,showWeekNumbers:`<?`,startDate:`<?`,container:`@?`,positionTarget:`<?`,weekdays:`<?`,disabled:`<?`,dateSelect:`&?`,navigate:`&?`,closed:`&?`},controller:e,controllerAs:`$datepicker`,require:{ngModelCtrl:`?ngModel`,ngDisabled:`?ngDisabled`},restrict:`A`,scope:!1})}},Fh=n.default.module(`ngb.datepicker`,[W.name]);Fh.service(df.$name,df),Fh.service(gh.$name,gh),Fh.service(Mh.$name,Mh),Fh.component(Sh.$name,Sh.$factory),Fh.component(Th.$name,Th.$factory),Fh.component(Dh.$name,Dh.$factory),Fh.component(kh.$name,kh.$factory),Fh.directive(_h.$name,_h.$factory),Fh.directive(Ch.$name,Ch.$factory),Fh.directive(Ph.$name,Ph.$factory);var Ih=n.default.module(`ngb`,[Td.name,Fp.name,yd.name,zd.name,_m.name,bd.name,zf.name,gf.name,Cm.name,op.name,bp.name,kp.name,$p.name,Bp.name,lm.name,Pm.name,Km.name,Fh.name]);Ih.service(Pu.$name,Pu),Ih.service(bf.$name,bf),Ih.factory(wf.$name,wf),Ih.service(jm.$name,jm),Ih.service(df.$name,df),Ih.constant(km.$name,km.$value);function Lh(e){return new Date(e.year-543,e.month-1,e.day)}function Rh(e){return new X(e.getFullYear()+543,e.getMonth()+1,e.getDate())}var zh=class extends Qm{getToday(){return Rh(new Date)}getNext(e,t=`d`,n=1){let r=Lh(e),i=!0,a=r.getMonth();switch(t){case`y`:r.setFullYear(r.getFullYear()+n);break;case`m`:a+=n,r.setMonth(a),a%=12,a<0&&(a+=12);break;case`d`:r.setDate(r.getDate()+n),i=!1;break;default:return e}return i&&r.getMonth()!==a&&r.setDate(0),Rh(r)}getPrev(e,t=`d`,n=1){return this.getNext(e,t,-n)}getWeekday(e){let t=Lh(e).getDay();return t===0?7:t}getWeekNumber(e,t){t===7&&(t=0);let n=e[(11-t)%7],r=Lh(n);r.setDate(r.getDate()+4-(r.getDay()||7));let i=r.getTime();return r.setMonth(0),r.setDate(1),Math.floor(Math.round((i-r.getTime())/864e5)/7)+1}isValid(e){if(!e||!J(e.year)||!J(e.month)||!J(e.day)||e.year===0)return!1;let t=Lh(e);return!isNaN(t.getTime())&&t.getFullYear()===e.year-543&&t.getMonth()+1===e.month&&t.getDate()===e.day}},Bh=[`እሑድ`,`ሰኞ`,`ማክሰኞ`,`ረቡዕ`,`ሓሙስ`,`ዓርብ`,`ቅዳሜ`],Vh=[`መስከረም`,`ጥቅምት`,`ኅዳር`,`ታህሣሥ`,`ጥር`,`የካቲት`,`መጋቢት`,`ሚያዝያ`,`ግንቦት`,`ሰኔ`,`ሐምሌ`,`ነሐሴ`,`ጳጉሜ`],Hh=class extends eh{getMonthShortName(e,t){return this.getMonthFullName(e,t)}getMonthFullName(e,t){return Vh[e-1]??``}getWeekdayLabel(e){return Bh[e-1]??``}getDayAriaLabel(e){return`${e.day} ${this.getMonthFullName(e.month,e.year)} ${e.year}`}},Uh=1724220.5,Wh=[30,30,30,30,30,30,30,30,30,30,30,30,5];function Gh(e){return e==null?!1:e%4==3||e%4==-1}function Kh(e,t){return e.year=+t,e}function qh(e,t){return t=+t,e.year+=Math.floor((t-1)/13),e.month=Math.floor(((t-1)%13+13)%13)+1,e}function Jh(e,t){let n=Yh(e.month,e.year);if(t<=0)for(;t<=0;)e=qh(e,e.month-1),n=Yh(e.month,e.year),t+=n;else if(t>n)for(;t>n;)t-=n,e=qh(e,e.month+1),n=Yh(e.month,e.year);return e.day=t,e}function Yh(e,t){let n=Gh(t);return Wh[e-1]+(e===13&&n?1:0)}function Xh(e){let t=eg(Qh(e.year,e.month,e.day));return t.setHours(6,30,3,200),t}function Zh(e){return $h(tg(e.getFullYear(),e.getMonth()+1,e.getDate()))}function Qh(e,t,n){return e<0&&e++,n+(t-1)*30+(e-1)*365+Math.floor(e/4)+Uh-1}function $h(e){let t=Math.floor(e)+.5-Uh,n=Math.floor((t-Math.floor((t+366)/1461))/365)+1;n<=0&&n--,t=Math.floor(e)+.5-Qh(n,1,1);let r=Math.floor(t/30)+1,i=t-(r-1)*30+1;return new X(n,r,i)}function eg(e){let t=Math.floor(e+.5),n=Math.floor((t-1867216.25)/36524.25);n=t+1+n-Math.floor(n/4);let r=n+1524,i=Math.floor((r-122.1)/365.25),a=Math.floor(365.25*i),o=Math.floor((r-a)/30.6001),s=r-a-Math.floor(o*30.6001),c=o-(o>13.5?13:1),l=i-(c>2.5?4716:4715);return l<=0&&l--,new Date(l,c,s)}function tg(e,t,n){e<0&&e++,t<3&&(t+=12,e--);let r=Math.floor(e/100),i=2-r+Math.floor(r/4);return Math.floor(365.25*(e+4716))+Math.floor(30.6001*(t+1))+n+i-1524.5}var ng=class extends Zm{getDaysPerWeek(){return 7}getMonths(e){return[1,2,3,4,5,6,7,8,9,10,11,12,13]}getNext(e,t=`d`,n=1){switch(e=new X(e.year,e.month,e.day),t){case`y`:return e=Kh(e,e.year+n),e.month=1,e.day=1,e;case`m`:return e=qh(e,e.month+n),e.day=1,e;case`d`:return Jh(e,e.day+n);default:return e}}getPrev(e,t=`d`,n=1){return this.getNext(e,t,-n)}getWeekday(e){let t=Math.floor(Qh(e.year,e.month,e.day)+3)%7;return t===0?7:t}getWeekNumber(e,t){t===7&&(t=0);let n=e[(11-t)%7],r=Xh(n);r.setDate(r.getDate()+4-(r.getDay()||7));let i=r.getTime(),a=Xh(new X(n.year,1,1));return Math.floor(Math.round((i-a.getTime())/864e5)/7)+1}getWeeksPerMonth(){return 6}getToday(){return Zh(new Date)}isValid(e){return e&&J(e.year)&&J(e.month)&&J(e.day)&&!isNaN(Xh(e).getTime())}},rg=1080,ig=24*rg,ag=12*rg+793,og=29*ig+ag,sg=11*rg+204,cg=2092591,lg=1721425.5;function ug(e){return e%4==0&&e%100!=0||e%400==0}function dg(e){let t=Math.floor((235*e-234)/19),n=t*ag+sg,r=t*29+Math.floor(n/ig),i=n%ig,a=r%7;return(a===2||a===4||a===6)&&(r++,a=r%7),a===1&&i>15*rg+204&&!hg(e)?r+=2:a===0&&i>21*rg+589&&hg(e-1)&&r++,r}function fg(e,t){let n=[31,28,31,30,31,30,31,31,30,31,30,31];return ug(t)&&n[1]++,n[e-1]}function pg(e){return hg(e)?13:12}function mg(e){return dg(e+1)-dg(e)}function hg(e){if(e!=null){let t=(e*12+17)%19;return t>=(t<0?-7:12)}return!1}function gg(e,t){let n=dg(t+1)-dg(t),r=(n<=380?n:n-30)-353,i=hg(t)?[30,29,29,29,30,30,29,30,29,30,29,30,29]:[30,29,29,29,30,29,30,29,30,29,30,29];return r>0&&i[2]++,r>1&&i[1]++,i[e-1]}function _g(e){let t=0;for(let n=1;n<e.month;n++)t+=gg(n,e.year);return t+e.day}function vg(e,t){let n=t>=0;for(n||(t=-t);t>0;)n?t>pg(e.year)-e.month?(t-=pg(e.year)-e.month+1,e.year++,e.month=1):(e.month+=t,t=0):t>=e.month?(e.year--,t-=e.month,e.month=pg(e.year)):(e.month-=t,t=0);return e}function yg(e,t){let n=t>=0;for(n||(t=-t);t>0;)n?t>mg(e.year)-_g(e)?(t-=mg(e.year)-_g(e)+1,e.year++,e.month=1,e.day=1):t>gg(e.month,e.year)-e.day?(t-=gg(e.month,e.year)-e.day+1,e.month++,e.day=1):(e.day+=t,t=0):t>=e.day?(t-=e.day,e.month--,e.month===0&&(e.year--,e.month=pg(e.year)),e.day=gg(e.month,e.year)):(e.day-=t,t=0);return e}function bg(e){let t=new Date(e),n=t.getFullYear(),r=t.getMonth(),i=t.getDate(),a=lg-1+365*(n-1)+Math.floor((n-1)/4)-Math.floor((n-1)/100)+Math.floor((n-1)/400)+Math.floor((367*(r+1)-362)/12+(r+1<=2?0:ug(n)?-1:-2)+i);a=Math.floor(a+.5);let o=a-347997,s=Math.floor(o*ig/og),c=Math.floor((s*19+234)/235)+1,l=dg(c),u=o-l;for(;u<1;)c--,l=dg(c),u=o-l;let d=1,f=u;for(;f>gg(d,c);)f-=gg(d,c),d++;return new X(c,d,f)}function xg(e){let t=e.year,n=e.month,r=e.day,i=dg(t);for(let e=1;e<n;e++)i+=gg(e,t);i+=r;let a=i-cg,o=a>=0;o||(a=-a);let s=1970,c=1,l=1;for(;a>0;)o?a>=(ug(s)?366:365)?(a-=ug(s)?366:365,s++):a>=fg(c,s)?(a-=fg(c,s),c++):(l+=a,a=0):a>=(ug(s-1)?366:365)?(a-=ug(s-1)?366:365,s--):(c>1?c--:(c=12,s--),a>=fg(c,s)?a-=fg(c,s):(l=fg(c,s)-a+1,a=0));return new Date(s,c-1,l)}function Sg(e){if(!e)return``;let t=[``,`א`,`ב`,`ג`,`ד`,`ה`,`ו`,`ז`,`ח`,`ט`],n=[`י`,`יא`,`יב`,`יג`,`יד`,`טו`,`טז`,`יז`,`יח`,`יט`],r=[``,``,`כ`,`ל`,`מ`,`נ`,`ס`,`ע`,`פ`,`צ`],i=[``,`ק`,`ר`,`ש`,`ת`,`תק`,`תר`,`תש`,`תת`,`תתק`],a=[``,`א`,`ב`,`בא`,`בב`,`ה`,`הא`,`הב`,`הבא`,`הבב`],o=0,s=[],c=0;for(;e>0;){let l=e%10;if(c===0)o=l;else if(c===1)l===1?s.unshift(n[o]):s.unshift(r[l],t[o]);else if(c===2)s.unshift(i[l]);else{l!==5&&s.unshift(a[l],`׳`,` `);break}e=Math.floor(e/10),c===0&&e===0&&s.unshift(t[l]),c++}return s=s.join(``).split(``),s.length===1?s.push(`׳`):s.length>1&&s.splice(s.length-1,0,`״`),s.join(``)}var Cg=[`שני`,`שלישי`,`רביעי`,`חמישי`,`שישי`,`שבת`,`ראשון`],wg=[`תשרי`,`חשון`,`כסלו`,`טבת`,`שבט`,`אדר`,`ניסן`,`אייר`,`סיון`,`תמוז`,`אב`,`אלול`],Tg=[`תשרי`,`חשון`,`כסלו`,`טבת`,`שבט`,`אדר א׳`,`אדר ב׳`,`ניסן`,`אייר`,`סיון`,`תמוז`,`אב`,`אלול`],Eg=class extends eh{getMonthShortName(e,t){return this.getMonthFullName(e,t)}getMonthFullName(e,t){return hg(t)?Tg[e-1]??``:wg[e-1]??``}getWeekdayLabel(e){return Cg[e-1]??``}getDayAriaLabel(e){return`${Sg(e.day)} ${this.getMonthFullName(e.month,e.year)} ${Sg(e.year)}`}getDayNumerals(e){return Sg(e.day)}getWeekNumerals(e){return Sg(e)}getYearNumerals(e){return Sg(e)}},Dg=class extends Zm{getDaysPerWeek(){return 7}getMonths(e){return e&&hg(e)?[1,2,3,4,5,6,7,8,9,10,11,12,13]:[1,2,3,4,5,6,7,8,9,10,11,12]}getWeeksPerMonth(){return 6}isValid(e){if(e!=null){let t=Y(e.year)&&Y(e.month)&&Y(e.day);return t=t&&e.month>0&&e.month<=(hg(e.year)?13:12),t=t&&e.day>0&&e.day<=gg(e.month,e.year),t&&!isNaN(xg(e).getTime())}return!1}getNext(e,t=`d`,n=1){switch(e=new X(e.year,e.month,e.day),t){case`y`:return e.year+=n,e.month=1,e.day=1,e;case`m`:return e=vg(e,n),e.day=1,e;case`d`:return yg(e,n);default:return e}}getPrev(e,t=`d`,n=1){return this.getNext(e,t,-n)}getWeekday(e){let t=xg(e).getDay();return t===0?7:t}getWeekNumber(e,t){let n=e[e.length-1];return Math.ceil(_g(n)/7)}getToday(){return bg(new Date)}toGregorian(e){return Ym(xg(e))}fromGregorian(e){return bg(Xm(e))}},Og=class extends Zm{getDaysPerWeek(){return 7}getMonths(){return[1,2,3,4,5,6,7,8,9,10,11,12]}getWeeksPerMonth(){return 6}getNext(e,t=`d`,n=1){switch(e=new X(e.year,e.month,e.day),t){case`y`:return e=this._setYear(e,e.year+n),e.month=1,e.day=1,e;case`m`:return e=this._setMonth(e,e.month+n),e.day=1,e;case`d`:return this._setDay(e,e.day+n);default:return e}}getPrev(e,t=`d`,n=1){return this.getNext(e,t,-n)}getWeekday(e){let t=this.toGregorian(e).getDay();return t===0?7:t}getWeekNumber(e,t){t===7&&(t=0);let n=e[(11-t)%7],r=this.toGregorian(n);r.setDate(r.getDate()+4-(r.getDay()||7));let i=r.getTime(),a=this.toGregorian(new X(n.year,1,1));return Math.floor(Math.round((i-a.getTime())/864e5)/7)+1}getToday(){return this.fromGregorian(new Date)}isValid(e){return e!=null&&Y(e.year)&&Y(e.month)&&Y(e.day)&&!isNaN(this.toGregorian(e).getTime())}_setDay(e,t){t=+t;let n=this.getDaysPerMonth(e.month,e.year);if(t<=0)for(;t<=0;)e=this._setMonth(e,e.month-1),n=this.getDaysPerMonth(e.month,e.year),t+=n;else if(t>n)for(;t>n;)t-=n,e=this._setMonth(e,e.month+1),n=this.getDaysPerMonth(e.month,e.year);return e.day=t,e}_setMonth(e,t){return t=+t,e.year+=Math.floor((t-1)/12),e.month=Math.floor(((t-1)%12+12)%12)+1,e}_setYear(e,t){return e.year=+t,e}};function kg(e){return(14+11*e)%30<11}function Ag(e){let t=e.getFullYear();return t%4==0&&t%100!=0||t%400==0}function jg(e,t){return Math.ceil(29.5*t)+(e-1)*354+Math.floor((3+11*e)/30)}function Mg(e){return(e-1)*354+Math.floor((3+11*e)/30)}function Ng(e,t){return e-t*Math.floor(e/t)}var Pg=1721425.5,Fg=1948439.5,Ig=class extends Og{fromGregorian(e){let t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),i=Pg-1+365*(t-1)+Math.floor((t-1)/4)+-Math.floor((t-1)/100)+Math.floor((t-1)/400)+Math.floor((367*(n+1)-362)/12+(n+1<=2?0:Ag(e)?-1:-2)+r);i=Math.floor(i)+.5;let a=i-Fg,o=Math.floor((30*a+10646)/10631),s=Math.ceil((a-29-Mg(o))/29.5);s=Math.min(s,11);let c=Math.ceil(a-jg(o,s))+1;return new X(o,s+1,c)}toGregorian(e){let t=e.year,n=e.month-1,r=e.day+Math.ceil(29.5*n)+(t-1)*354+Math.floor((3+11*t)/30)+Fg-1,i=Math.floor(r-.5)+.5,a=i-Pg,o=Math.floor(a/146097),s=Ng(a,146097),c=Math.floor(s/36524),l=Ng(s,36524),u=Math.floor(l/1461),d=Ng(l,1461),f=Math.floor(d/365),p=o*400+c*100+u*4+f;c!==4&&f!==4&&p++;let m=i-(Pg+365*(p-1)+Math.floor((p-1)/4)-Math.floor((p-1)/100)+Math.floor((p-1)/400)),h=i<Pg-1+365*(p-1)+Math.floor((p-1)/4)-Math.floor((p-1)/100)+Math.floor((p-1)/400)+Math.floor(739/12+(Ag(new Date(p,3,1))?-1:-2)+1)?0:Ag(new Date(p,3,1))?1:2,g=Math.floor(((m+h)*12+373)/367),_=i-(Pg-1+365*(p-1)+Math.floor((p-1)/4)-Math.floor((p-1)/100)+Math.floor((p-1)/400)+Math.floor((367*g-362)/12+(g<=2?0:Ag(new Date(p,g-1,1))?-1:-2)+1))+1;return new Date(p,g-1,_)}getDaysPerMonth(e,t){t+=Math.floor(e/13),e=(e-1)%12+1;let n=29+e%2;return e===12&&kg(t)&&n++,n}},Lg=new Date(1882,10,12),Rg=new Date(2174,10,25),zg=1300,Bg=1600,Vg=864e5,Hg=`101010101010.110101010100.111011001001.011011010100.011011101010.001101101100.101010101101.010101010101.011010101001.011110010010.101110101001.010111010100.101011011010.010101011100.110100101101.011010010101.011101001010.101101010100.101101101010.010110101101.010010101110.101001001111.010100010111.011010001011.011010100101.101011010101.001011010110.100101011011.010010011101.101001001101.110100100110.110110010101.010110101100.100110110110.001010111010.101001011011.010100101011.101010010101.011011001010.101011101001.001011110100.100101110110.001010110110.100101010110.101011001010.101110100100.101111010010.010111011001.001011011100.100101101101.010101001101.101010100101.101101010010.101110100101.010110110100.100110110110.010101010111.001010010111.010101001011.011010100011.011101010010.101101100101.010101101010.101010101011.010100101011.110010010101.110101001010.110110100101.010111001010.101011010110.100101010111.010010101011.100101001011.101010100101.101101010010.101101101010.010101110101.001001110110.100010110111.010001011011.010101010101.010110101001.010110110100.100111011010.010011011101.001001101110.100100110110.101010101010.110101010100.110110110010.010111010101.001011011010.100101011011.010010101011.101001010101.101101001001.101101100100.101101110001.010110110100.101010110101.101001010101.110100100101.111010010010.111011001001.011011010100.101011101001.100101101011.010010101011.101010010011.110101001001.110110100100.110110110010.101010111001.010010111010.101001011011.010100101011.101010010101.101100101010.101101010101.010101011100.010010111101.001000111101.100100011101.101010010101.101101001010.101101011010.010101101101.001010110110.100100111011.010010011011.011001010101.011010101001.011101010100.101101101010.010101101100.101010101101.010101010101.101100101001.101110010010.101110101001.010111010100.101011011010.010101011010.101010101011.010110010101.011101001001.011101100100.101110101010.010110110101.001010110110.101001010110.111001001101.101100100101.101101010010.101101101010.010110101101.001010101110.100100101111.010010010111.011001001011.011010100101.011010101100.101011010110.010101011101.010010011101.101001001101.110100010110.110110010101.010110101010.010110110101.001011011010.100101011011.010010101101.010110010101.011011001010.011011100100.101011101010.010011110101.001010110110.100101010110.101010101010.101101010100.101111010010.010111011001.001011101010.100101101101.010010101101.101010010101.101101001010.101110100101.010110110010.100110110101.010011010110.101010010111.010101000111.011010010011.011101001001.101101010101.010101101010.101001101011.010100101011.101010001011.110101000110.110110100011.010111001010.101011010110.010011011011.001001101011.100101001011.101010100101.101101010010.101101101001.010101110101.000101110110.100010110111.001001011011.010100101011.010101100101.010110110100.100111011010.010011101101.000101101101.100010110110.101010100110.110101010010.110110101001.010111010100.101011011010.100101011011.010010101011.011001010011.011100101001.011101100010.101110101001.010110110010.101010110101.010101010101.101100100101.110110010010.111011001001.011011010010.101011101001.010101101011.010010101011.101001010101.110100101001.110101010100.110110101010.100110110101.010010111010.101000111011.010010011011.101001001101.101010101010.101011010101.001011011010.100101011101.010001011110.101000101110.110010011010.110101010101.011010110010.011010111001.010010111010.101001011101.010100101101.101010010101.101101010010.101110101000.101110110100.010110111001.001011011010.100101011010.101101001010.110110100100.111011010001.011011101000.101101101010.010101101101.010100110101.011010010101.110101001010.110110101000.110111010100.011011011010.010101011011.001010011101.011000101011.101100010101.101101001010.101110010101.010110101010.101010101110.100100101110.110010001111.010100100111.011010010101.011010101010.101011010110.010101011101.001010011101`.split(`.`);function Ug(e,t){let n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),r=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),i=Math.abs(n-r);return Math.round(i/Vg)}var Wg=class extends Ig{fromGregorian(e){let t=1,n=0,r=1300,i=Ug(e,Lg);if(e.getTime()-Lg.getTime()>=0&&e.getTime()-Rg.getTime()<=0){let e=1300;for(let a=0;a<Hg.length;a++,e++)for(let o=0;o<12;o++){let s=+Hg[a][o]+29;if(i<=s)return t=i+1,t>s&&(t=1,o++),o>11&&(o=0,e++),n=o,r=e,new X(r,n+1,t);i-=s}return null}return super.fromGregorian(e)}toGregorian(e){let t=e.year,n=e.month-1,r=e.day,i=new Date(Lg),a=r-1;if(t>=zg&&t<=Bg){for(let e=0;e<t-zg;e++)for(let t=0;t<12;t++)a+=+Hg[e][t]+29;for(let e=0;e<n;e++)a+=+Hg[t-zg][e]+29;i.setDate(Lg.getDate()+a)}else i=super.toGregorian(e);return i}getDaysPerMonth(e,t){return t>=zg&&t<=Bg?+Hg[t-zg][e-1]+29:super.getDaysPerMonth(e,t)}};function Gg(e){let t=Qg(t_(e.year,e.month,e.day));return t.setHours(6,30,3,200),t}function Kg(e){return e_($g(e.getFullYear(),e.getMonth()+1,e.getDate()))}function qg(e,t){return e.year=+t,e}function Jg(e,t){return t=+t,e.year+=Math.floor((t-1)/12),e.month=Math.floor(((t-1)%12+12)%12)+1,e}function Yg(e,t){let n=n_(e.month,e.year);if(t<=0)for(;t<=0;)e=Jg(e,e.month-1),n=n_(e.month,e.year),t+=n;else if(t>n)for(;t>n;)t-=n,e=Jg(e,e.month+1),n=n_(e.month,e.year);return e.day=t,e}function Xg(e,t){return e-t*Math.floor(e/t)}function Z(e,t){return Math.trunc(e/t)}function Zg(e){let t=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178],n=t.length,r=e+621,i=-14,a=t[0];if(e<a||e>=t[n-1])throw Error(`Invalid Jalali year `+e);let o=0;for(let r=1;r<n;r+=1){let n=t[r];if(o=n-a,e<n)break;i=i+Z(o,33)*8+Z(Xg(o,33),4),a=n}let s=e-a;i=i+Z(s,33)*8+Z(Xg(s,33)+3,4),Xg(o,33)===4&&o-s===4&&(i+=1);let c=Z(r,4)-Z((Z(r,100)+1)*3,4)-150,l=20+i-c;o-s<6&&(s=s-o+Z(o+4,33)*33);let u=Xg(Xg(s+1,33)-1,4);return u===-1&&(u=4),{leap:u,gy:r,march:l}}function Qg(e){let t=4*e+139361631;t=t+Z(Z(4*e+183187720,146097)*3,4)*4-3908;let n=Z(Xg(t,1461),4)*5+308,r=Z(Xg(n,153),5)+1,i=Xg(Z(n,153),12)+1,a=Z(t,1461)-100100+Z(8-i,6);return new Date(a,i-1,r)}function $g(e,t,n){let r=Z((e+Z(t-8,6)+100100)*1461,4)+Z(153*Xg(t+9,12)+2,5)+n-34840408;return r=r-Z(Z(e+100100+Z(t-8,6),100)*3,4)+752,r}function e_(e){let t=Qg(e).getFullYear(),n=t-621,r=Zg(n),i=$g(t,3,r.march),a,o,s;if(s=e-i,s>=0){if(s<=185)return o=1+Z(s,31),a=Xg(s,31)+1,new X(n,o,a);s-=186}else--n,s+=179,r.leap===1&&(s+=1);return o=7+Z(s,30),a=Xg(s,30)+1,new X(n,o,a)}function t_(e,t,n){let r=Zg(e);return $g(r.gy,3,r.march)+(t-1)*31-Z(t,7)*(t-7)+n-1}function n_(e,t){return e<=6?31:e<=11||Zg(t).leap===0?30:29}var r_=class extends Zm{getDaysPerWeek(){return 7}getMonths(){return[1,2,3,4,5,6,7,8,9,10,11,12]}getWeeksPerMonth(){return 6}getNext(e,t=`d`,n=1){switch(e=new X(e.year,e.month,e.day),t){case`y`:return e=qg(e,e.year+n),e.month=1,e.day=1,e;case`m`:return e=Jg(e,e.month+n),e.day=1,e;case`d`:return Yg(e,e.day+n);default:return e}}getPrev(e,t=`d`,n=1){return this.getNext(e,t,-n)}getWeekday(e){let t=Gg(e).getDay();return t===0?7:t}getWeekNumber(e,t){t===7&&(t=0);let n=e[(11-t)%7],r=Gg(n);r.setDate(r.getDate()+4-(r.getDay()||7));let i=r.getTime(),a=Gg(new X(n.year,1,1));return Math.floor(Math.round((i-a.getTime())/864e5)/7)+1}getToday(){return Kg(new Date)}isValid(e){return e!=null&&J(e.year)&&J(e.month)&&J(e.day)&&!isNaN(Gg(e).getTime())}},i_=class e{static get $factory(){return{controllerAs:`$`,controller:e,template:`<ui-view></ui-view>`}}static get $name(){return`docsApp`}},a_=(e,t)=>{e.state(`docs`,{abstract:!0,component:i_.$name}),t.otherwise(`/`)};a_.$inject=[`$stateProvider`,`$urlRouterProvider`];var o_=class{url;$config(e){this.url=e}$get(){return this.url}static get $name(){return`bootstrapUrl`}static get $configName(){return`bootstrapUrlProvider`}};function s_(e){let t=t=>{t.$config(`${e.url}/docs/${e.version}/`)};return t.$inject=[o_.$configName],t}var c_=class{url;$config(e){this.url=e}$get(){return this.url}static get $name(){return`ngBootstrapUrl`}static get $configName(){return`ngBootstrapUrlProvider`}};function l_(e){let t=t=>{t.$config(`${e.url}/#/`)};return t.$inject=[c_.$configName],t}var u_=function(e){return e.light=`light`,e.dark=`dark`,e}({}),d_=class{static $key=`theme_key`;static $value=`theme`},f_=class{static $key=`theme.enum`;static $value=u_};function p_(e){return e in u_}var m_=class{themeStoredKey;theme;constructor(e){this.themeStoredKey=e}getThemeInLocalStorage(){return localStorage.getItem(this.themeStoredKey)}_getPreferredColorScheme(){return matchMedia(`(prefers-color-scheme: dark)`).matches?u_.dark:u_.light}$config(){let e=this.getThemeInLocalStorage();if(!e){this.theme=this._getPreferredColorScheme();return}if(!p_(e))throw Error(`this theme is not valid`);this.theme=e}$get(){return this.theme}static get $name(){return`theme`}static get $inject(){return[d_.$key]}static get $configName(){return`themeProvider`}};function h_(){let e=e=>{e.$config()};return e.$inject=[m_.$configName],e}var g_=function(e){return e.ES_MX=`es_mx`,e.EN_US=`en_US`,e}({}),__=class{static $key=`language_key`;static $value=`language`};function v_(e){return e.toUpperCase()in g_}var y_=class{languageKey;_lang;constructor(e){this.languageKey=e}$config(){let e=this._readFromLocalStorage();if(!e){this._lang=g_.EN_US;return}if(!v_(e)){this._lang=g_.EN_US;return}this._lang=e}$get(){return this._lang}_readFromLocalStorage(){return localStorage.getItem(this.languageKey)}static get $name(){return`language`}static get $configName(){return`languageProvider`}static get $inject(){return[__.$key]}};function b_(){let e=e=>{e.$config()};return e.$inject=[y_.$configName],e}var x_=class{_currentTheme;themeStorageKey;_element=n.default.element(document.documentElement);constructor(e,t){this._currentTheme=e,this.themeStorageKey=t,this._applyTheme(this._currentTheme)}static get $inject(){return[m_.$name,d_.$key]}get activeTheme(){return this._currentTheme}toggle(){this._currentTheme=this._currentTheme===u_.light?u_.dark:u_.light,this._applyTheme(this._currentTheme)}setActive(e){this._applyTheme(e)}_applyTheme(e){this._currentTheme=e,this._element.attr(`data-bs-theme`,this._currentTheme),this.saveInLocalStorage(this._currentTheme)}saveInLocalStorage(e){localStorage.setItem(this.themeStorageKey,e)}static get $name(){return`docs.theme.service`}},S_=class{language;_changeLang;changeLang$;constructor(e){this.language=e,this._changeLang=new Na(this.language),this.changeLang$=this._changeLang.asObservable()}selectLanguage(e){this._changeLang.next(e)}static get $name(){return`docs.language.service`}static get $inject(){return[y_.$name]}},C_=class e{mode=`desktop`;ngbActiveOffcanvas;static get $factory(){return{bindings:{mode:`@`,ngbActiveOffcanvas:`<?`},controllerAs:`$`,controller:e,templateUrl:`src//app/core/layouts/components/menu/menu.component.html`}}static get $inject(){return[]}static get $name(){return`docsMenu`}},w_=class{offCanvasService;_isOpen=!1;_change=new z;onChange$=this._change.asObservable();constructor(e){this.offCanvasService=e}toggleMenu(){this._isOpen||this.offCanvasService.hasOpenOffcanvas()||(this._setOpenState(!0),this.offCanvasService.open(C_.$name,{bindings:{mode:`mobile`},ariaLabelledBy:`docs-mobile-menu-title`,animation:!0,backdrop:!0,keyboard:!0,panelClass:`border-0 shadow`,position:`start`,scroll:!1}).then(e=>{e.result?.finally(()=>this._setOpenState(!1))},()=>{this._setOpenState(!1)}))}_setOpenState(e){this._isOpen=e,this._change.next(this._isOpen)}static get $inject(){return[yp.$name]}static get $name(){return`core.menu.service`}},T_=class{transitionService;_transition=new Fa(void 0);transition$=this._transition.asObservable();_currentTab;get currentTab(){return this._currentTab}set currentTab(e){this._currentTab=e}constructor(e){this.transitionService=e}observeRoute(){this.transitionService.onEnter({},e=>{let t=e.to(),n={title:t.data?.title,tabs:t.data?.tabs,sections:t.data?.sections,externalLinks:t.data?.externalLinks,header:t.data?.header??!0};this._currentTab=t.name,this._transition.next(n)})}static get $name(){return`docs.title.service`}static get $inject(){return[`$transitions`]}};function E_(){let e=e=>{e.observeRoute()};return e.$inject=[T_.$name],e}var D_=class{$transitionService;constructor(e){this.$transitionService=e}observeScroll(){this.$transitionService.onSuccess({},()=>{window.requestAnimationFrame(()=>{document.getElementById(`docs-content-scroll`)?.scrollTo({top:0,left:0,behavior:`auto`})})})}static get $name(){return`docs.scroll.service`}static get $inject(){return[`$transitions`]}};function O_(){let e=e=>{e.observeScroll()};return e.$inject=[D_.$name],e}var k_=class e{static get $name(){return`docsFooter`}static get $factory(){return{controller:e,templateUrl:`src/app/core/layouts/components/footer/footer.component.html`}}};function A_(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var j_=class e{modalService;themeService;themes;menuService;searchTemplate;constructor(e,t,n,r){this.modalService=e,this.themeService=t,this.themes=n,this.menuService=r}openModal(){this.modalService.open(this.searchTemplate,{fullscreen:`md`,animation:!1}).then(n.default.noop)}static get $name(){return`docsHeader`}static get $inject(){return[Ef.$name,x_.$name,f_.$key,w_.$name]}static get $factory(){return{controllerAs:`$`,controller:e,templateUrl:`src/app/core/layouts/components/header/header.component.html`}}};A_([dc(`searchModal`,{static:!0})],j_.prototype,`searchTemplate`,void 0);var M_=class e{static get $name(){return`docsMenuAbstractPageComponent`}static get $factory(){return{controllerAs:`$`,controller:e,templateUrl:`src/app/core/layouts/pages/menu-abstract-page/menu-abstract-page.component.html`}}},N_=e=>{e.state(`docs.dashboard`,{abstract:!0,component:M_.$name})};N_.$inject=[`$stateProvider`];var P_=n.default.module(`docs.layout`,[]);P_.component(k_.$name,k_.$factory),P_.component(j_.$name,j_.$factory),P_.component(C_.$name,C_.$factory),P_.component(M_.$name,M_.$factory),P_.config(N_);var Q=n.default.module(`docs.core`,[P_.name]);Q.provider(o_.$name,o_),Q.provider(c_.$name,c_),Q.constant(d_.$key,d_.$value),Q.constant(f_.$key,f_.$value),Q.provider(m_.$name,m_),Q.service(x_.$name,x_),Q.constant(__.$key,__.$value),Q.provider(y_.$name,y_),Q.service(S_.$name,S_),Q.service(w_.$name,w_),Q.service(T_.$name,T_),Q.service(D_.$name,D_),Q.config(s_({url:`https://getbootstrap.com`,version:5.3})),Q.config(b_()),Q.config(h_()),Q.config(l_({url:`https://ng-bootstrap.github.io`})),Q.run(O_()),Q.run(E_());var F_=class e{$window;$timeout;value;ariaLabel;buttonClass;copied=!1;constructor(e,t){this.$window=e,this.$timeout=t}copy(){this.$window.navigator.clipboard.writeText(this.value).then(()=>{this.$timeout(()=>{this.copied=!0}),this.$timeout(()=>{this.copied=!1},2e3)})}static get $name(){return`docsCopyButton`}static get $inject(){return[`$window`,`$timeout`]}static get $factory(){return{bindings:{value:`<`,ariaLabel:`@?`,buttonClass:`@?`},controller:e,controllerAs:`copyButton`,templateUrl:`src/app/shared/components/copy-button/copy-button.component.html`}}},I_=class e{fragment;title;description;htmlCode;tsCode;cssCode;codeCollapsed=!0;activeTab=`html`;toggleCode(){this.codeCollapsed=!this.codeCollapsed}get hasAdditionalCode(){return!!(this.tsCode||this.cssCode)}get activeCode(){return this.activeTab===`typescript`?this.tsCode??``:this.activeTab===`css`?this.cssCode??``:this.htmlCode}static get $name(){return`docsExampleSection`}static get $factory(){return{bindings:{fragment:`@`,title:`@`,description:`@`,htmlCode:`<`,tsCode:`<?`,cssCode:`<?`},controller:e,controllerAs:`example`,transclude:!0,templateUrl:`src/app/shared/components/example-section/example-section.component.html`}}},L_=class e{titleService;bootstrapUrl;ngBootstrapUrl;destroyRef=new z;externalLinks;title;sections=[];constructor(e,t,n){this.titleService=e,this.bootstrapUrl=t,this.ngBootstrapUrl=n}get bootstrapHref(){return this.externalLinks?.bootstrap?`${this.bootstrapUrl}${this.externalLinks.bootstrap}`:void 0}get ngBootstrapHref(){return this.externalLinks?.ngBootstrap?`${this.ngBootstrapUrl}${this.externalLinks.ngBootstrap}`:void 0}$postLink(){this.titleService.transition$.pipe(V(this.destroyRef)).subscribe(e=>{this.title=e.title,this.sections=e.sections??[],this.externalLinks=e.externalLinks})}$onDestroy(){this.destroyRef.next(),this.destroyRef.complete()}static get $inject(){return[T_.$name,o_.$name,c_.$name]}static get $name(){return`docsPageOutline`}static get $factory(){return{controllerAs:`$`,controller:e,templateUrl:`src/app/shared/components/page-outline/page-outline.component.html`}}},R_=class e{titleService;destroyRef=new z;title;tabs;visible=!1;constructor(e){this.titleService=e}$postLink(){this.titleService.transition$.pipe(V(this.destroyRef)).subscribe(e=>{this.title=e.title,this.tabs=e.tabs,this.visible=e.header})}$onDestroy(){this.destroyRef.next(),this.destroyRef.complete()}static get $inject(){return[T_.$name]}static get $name(){return`docsTitleHeading`}static get $factory(){return{controllerAs:`$`,controller:e,templateUrl:`src/app/shared/components/title-heading/title-heading.component.html`}}},z_=n.default.module(`docs.shared`,[]);z_.component(F_.$name,F_.$factory),z_.component(I_.$name,I_.$factory),z_.component(L_.$name,L_.$factory),z_.component(R_.$name,R_.$factory);var B_=class e{activePackageManager=`npm`;packageManagers=[{id:`npm`,name:`npm`,command:`npm install ngb-js`},{id:`pnpm`,name:`pnpm`,command:`pnpm add ngb-js`},{id:`yarn`,name:`Yarn`,command:`yarn add ngb-js`},{id:`bun`,name:`Bun`,command:`bun add ngb-js`}];static get $name(){return`docsIntroductionPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/guide/pages/introduction-page/introduction-page.component.html`,controllerAs:`$`}}},V_=class e{static get $name(){return`docsPhilosophyPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/guide/pages/philosophy-page/philosophy-page.component.html`,controllerAs:`$`}}},H_=class e{static get $name(){return`docsWhyNgbJsPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/guide/pages/why-ngbjs-page/why-ngbjs-page.component.html`,controllerAs:`$`}}},U_=e=>{e.state(`docs.dashboard.introduction`,{url:`/guide/introduction`,component:B_.$name,data:{header:!1,title:`Introduction`,sections:[{id:`origin`,name:`Origin`},{id:`what-is-ngbjs`,name:`What is NgbJS?`},{id:`who-is-it-for`,name:`Who is it for?`},{id:`project-status`,name:`Project status`},{id:`installation`,name:`Installation`},{id:`acknowledgements`,name:`Acknowledgements`}]}}),e.state(`docs.dashboard.philosophy`,{url:`/guide/philosophy`,component:V_.$name,data:{header:!1,title:`Philosophy`,sections:[{id:`parity-is-priority`,name:`Parity is Priority`},{id:`what-parity-means`,name:`What parity means`},{id:`familiar-by-design`,name:`Familiar by design`},{id:`a-migration-bridge`,name:`A migration bridge`},{id:`when-parity-is-hard`,name:`When parity is hard`}]}}),e.state(`docs.dashboard.whyNgbJs`,{url:`/guide/why-ngbjs`,component:H_.$name,data:{header:!1,title:`Why NgbJS?`,sections:[{id:`the-legacy-reality`,name:`The legacy reality`},{id:`before-and-after`,name:`Before and after`},{id:`what-it-unlocks`,name:`What NgbJS unlocks`},{id:`when-to-use-ngbjs`,name:`When to use NgbJS`},{id:`a-bridge-not-a-destination`,name:`A bridge, not a destination`}]}})};U_.$inject=[`$stateProvider`];var W_=n.default.module(`docs.guide`,[]);W_.component(B_.$name,B_.$factory),W_.component(V_.$name,V_.$factory),W_.component(H_.$name,H_.$factory),W_.config(U_);var G_=class e{static get $name(){return`docsHomeHero`}static get $factory(){return{controller:e,templateUrl:`src/app/features/home/components/home-hero/home-hero.component.html`}}},K_=class e{installCommand=`npm install ngb-js`;static get $name(){return`docsHomePage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/home/pages/home-page/home-page.component.html`,controllerAs:`$`}}},q_=e=>{e.state(`docs.home`,{url:`/`,component:K_.$name})};q_.$inject=[`$stateProvider`];var J_=n.default.module(`docs.home`,[]);J_.component(G_.$name,G_.$factory),J_.component(K_.$name,K_.$factory),J_.config(q_);var Y_=()=>[{id:1,type:`success`,message:`Your changes were saved successfully.`,animation:!0},{id:2,type:`danger`,message:`Something needs your attention.`,animation:!0},{id:3,type:`warning`,message:`This alert closes without animation.`,animation:!1},{id:4,type:`info`,message:`This one also closes immediately.`,animation:!1}],X_=class e{alerts=Y_();close(e){this.alerts=this.alerts.filter(t=>t.id!==e)}reset(){this.alerts=Y_()}static get $name(){return`docsAlertCloseable`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/alert-closeable/alert-closeable.component.html`}}},Z_=class e{static get $name(){return`docsAlertCustom`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/alert-custom/alert-custom.component.html`}}},Q_=class e{config;initialConfig;constructor(e){this.config=e,this.initialConfig={animation:e.animation,dismissible:e.dismissible,type:e.type},e.animation=!1,e.dismissible=!1,e.type=`success`}$onDestroy(){this.config.animation=this.initialConfig.animation,this.config.dismissible=this.initialConfig.dismissible,this.config.type=this.initialConfig.type}static get $name(){return`docsAlertGlobal`}static get $inject(){return[Sd.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/alert-global/alert-global.component.html`}}},$_=class e{draft=`This value remains after collapsing the panel.`;static get $name(){return`docsAccordionContent`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/accordion-content/accordion-content.component.html`}}},ev=class e{static get $name(){return`docsAccordionCustomHeader`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/accordion-custom-header/accordion-custom-header.component.html`}}},tv=class e{config;initialConfig;constructor(e){this.config=e,this.initialConfig={animation:e.animation,closeOthers:e.closeOthers,destroyOnHide:e.destroyOnHide},e.animation=!1,e.closeOthers=!0,e.destroyOnHide=!1}$onDestroy(){this.config.animation=this.initialConfig.animation,this.config.closeOthers=this.initialConfig.closeOthers,this.config.destroyOnHide=this.initialConfig.destroyOnHide}static get $name(){return`docsAccordionGlobal`}static get $inject(){return[Fu.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/accordion-global/accordion-global.component.html`}}},nv=class e{static get $name(){return`docsAccordionSimple`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/accordion-simple/accordion-simple.component.html`}}},rv=class e{accordion;expandAll(){this.accordion.expandAll()}collapseAll(){this.accordion.collapseAll()}toggle(e){this.accordion.toggle(e)}static get $name(){return`docsAccordionTogglePanels`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/accordion-toggle-panels/accordion-toggle-panels.component.html`}}};A_([dc(`accordion`,{static:!0})],rv.prototype,`accordion`,void 0);var iv=class e{static get $name(){return`docsOnePanelAccordion`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/one-panel-accordion/one-panel-accordion.component.html`}}},av=class e{$timeout;initialSeconds=5;timer;alert;remaining=this.initialSeconds;visible=!0;constructor(e){this.$timeout=e}$onInit(){this.startTimer()}$onDestroy(){this.cancelTimer()}restart(){this.cancelTimer(),this.remaining=this.initialSeconds,this.visible=!0,this.startTimer()}onClosed(){this.visible=!1,this.cancelTimer()}startTimer(){this.timer=this.$timeout(()=>{if(this.remaining--,this.remaining<=0){this.alert?this.alert.close():this.visible=!1;return}this.startTimer()},1e3)}cancelTimer(){this.timer&&=(this.$timeout.cancel(this.timer),void 0)}static get $name(){return`docsSelfClosingAlert`}static get $inject(){return[`$timeout`]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/self-closing-alert/self-closing-alert.component.html`}}};A_([dc(`alert`)],av.prototype,`alert`,void 0);var ov=class e{static get $name(){return`docsSimpleAlert`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/simple-alert/simple-alert.component.html`}}},sv=class e{$element;$timeout;pauseOnHover=!0;pauseOnFocus=!0;unpauseOnArrow=!1;pauseOnIndicator=!1;paused=!1;carousel;constructor(e,t){this.$element=e,this.$timeout=t}$postLink(){this.$timeout(()=>{this.carousel=this.$element.find(`ngb-carousel`).controller(`ngbCarousel`)},0,!1)}onSlide(e){(e.source===`arrowLeft`||e.source===`arrowRight`)&&this.unpauseOnArrow&&(this.carousel?.cycle(),this.paused=!1),e.source===`indicator`&&this.pauseOnIndicator&&(this.carousel?.pause(),this.paused=!0)}toggleCycle(){this.paused?this.carousel?.cycle():this.carousel?.pause(),this.paused=!this.paused}static get $name(){return`docsCarouselControls`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/carousel-controls/carousel-controls.component.html`}}static get $inject(){return[`$element`,`$timeout`]}},cv=class e{config;initialConfig;constructor(e){this.config=e,this.initialConfig={animation:e.animation,interval:e.interval,wrap:e.wrap,pauseOnFocus:e.pauseOnFocus,pauseOnHover:e.pauseOnHover,showNavigationArrows:e.showNavigationArrows},e.animation=!1,e.interval=2500,e.wrap=!1,e.pauseOnFocus=!1,e.pauseOnHover=!1,e.showNavigationArrows=!1}$onDestroy(){this.config.animation=this.initialConfig.animation,this.config.interval=this.initialConfig.interval,this.config.wrap=this.initialConfig.wrap,this.config.pauseOnFocus=this.initialConfig.pauseOnFocus,this.config.pauseOnHover=this.initialConfig.pauseOnHover,this.config.showNavigationArrows=this.initialConfig.showNavigationArrows}static get $name(){return`docsCarouselGlobal`}static get $inject(){return[Dd.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/carousel-global/carousel-global.component.html`}}},lv=class e{static get $name(){return`docsCarouselKeyboard`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/carousel-keyboard/carousel-keyboard.component.html`}}},uv=class e{static get $name(){return`docsCarouselSimple`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/carousel-simple/carousel-simple.component.html`}}},dv=class e{collapsed=!0;toggle(){this.collapsed=!this.collapsed}static get $name(){return`docsHorizontalCollapse`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/horizontal-collapse/horizontal-collapse.component.html`}}},fv=class e{menuCollapsed=!0;toggleMenu(){this.menuCollapsed=!this.menuCollapsed}closeMenu(){this.menuCollapsed=!0}static get $name(){return`docsNavbarCollapse`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/navbar-collapse/navbar-collapse.component.html`}}},pv=class e{collapse;collapsed=!0;toggleWithController(){this.collapse.toggle()}toggleWithBinding(){this.collapsed=!this.collapsed}static get $name(){return`docsSimpleCollapse`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/simple-collapse/simple-collapse.component.html`}}};A_([dc(`collapse`,{static:!0})],pv.prototype,`collapse`,void 0);var mv=class e{static get $name(){return`docsDropdownBody`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/dropdown-body/dropdown-body.component.html`}}},hv=class e{static get $name(){return`docsDropdownButtonGroups`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/dropdown-button-groups/dropdown-button-groups.component.html`}}},gv=class e{restricted=!0;static get $name(){return`docsDropdownDisabledItems`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/dropdown-disabled-items/dropdown-disabled-items.component.html`}}},_v=class e{email=``;remember=!1;submitted=!1;submit(){this.submitted=!0}static get $name(){return`docsDropdownForm`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/dropdown-form/dropdown-form.component.html`}}},vv=class e{config;initialConfig;constructor(e){this.config=e,this.initialConfig={autoClose:e.autoClose,container:e.container,placement:e.placement},e.autoClose=`outside`,e.container=`body`,e.placement=[`top-start`,`bottom-start`]}$onDestroy(){this.config.autoClose=this.initialConfig.autoClose,this.config.container=this.initialConfig.container,this.config.placement=this.initialConfig.placement}static get $name(){return`docsDropdownGlobal`}static get $inject(){return[Vd.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/dropdown-global/dropdown-global.component.html`}}},yv=class e{static get $name(){return`docsDropdownNavbar`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/dropdown-navbar/dropdown-navbar.component.html`}}},bv=class e{dropdown;opened=!1;open(){this.dropdown.open()}close(){this.dropdown.close()}toggle(){this.dropdown.toggle()}static get $name(){return`docsManualDropdown`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/manual-dropdown/manual-dropdown.component.html`}}};A_([dc(`dropdown`,{read:pf,static:!0})],bv.prototype,`dropdown`,void 0);var xv=class e{static get $name(){return`docsSimpleDropdown`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/simple-dropdown/simple-dropdown.component.html`}}},Sv=class e{ngbActiveModal;title=`Component modal`;description=`This modal receives a component as its content.`;longContent=!1;items=Array.from({length:24},(e,t)=>`Scrollable content row ${t+1}`);static get $name(){return`docsModalDemoContent`}static get $factory(){return{bindings:{ngbActiveModal:`<`,title:`<?`,description:`<?`,longContent:`<?`},controller:e,controllerAs:`$`,templateUrl:`src/app/features/lib/components/modal-demo-content/modal-demo-content.component.html`}}},Cv=class e{modal;lastResult=`No result yet`;constructor(e){this.modal=e}async open(){let e=await this.modal.open(Sv.$name,{bindings:{title:`Component as content`,description:`NgbActiveModal is provided directly to the content component.`}});e.closed.subscribe(e=>{this.lastResult=`Closed with: ${e}`}),e.dismissed.subscribe(e=>{this.lastResult=`Dismissed with: ${e}`})}static get $name(){return`docsModalComponentContent`}static get $inject(){return[Ef.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/modal-component-content/modal-component-content.component.html`}}},wv=class e{modal;content;constructor(e){this.modal=e}open(){this.modal.open(this.content)}static get $name(){return`docsModalDefault`}static get $inject(){return[Ef.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/modal-default/modal-default.component.html`}}};A_([dc(`content`,{read:Oc,static:!0})],wv.prototype,`content`,void 0);var Tv=class e{ngbActiveModal;autofocus=!1;static get $name(){return`docsModalFocusContent`}static get $factory(){return{bindings:{ngbActiveModal:`<`,autofocus:`<?`},controller:e,controllerAs:`$`,templateUrl:`src/app/features/lib/components/modal-focus-content/modal-focus-content.component.html`}}},Ev=class e{modal;constructor(e){this.modal=e}openDefaultFocus(){this.modal.open(Tv.$name,{ariaLabelledBy:`modal-focus-title`,bindings:{autofocus:!1}})}openCustomFocus(){this.modal.open(Tv.$name,{ariaLabelledBy:`modal-focus-title`,bindings:{autofocus:!0}})}static get $name(){return`docsModalFocus`}static get $inject(){return[Ef.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/modal-focus/modal-focus.component.html`}}},Dv=class e{modal;config;initialConfig;constructor(e,t){this.modal=e,this.config=t,this.initialConfig={backdrop:t.backdrop,centered:t.centered,keyboard:t.keyboard,size:t.size}}async open(){this.applyConfig();try{await this.modal.open(Sv.$name,{bindings:{title:`Globally configured modal`,description:`This modal is centered, large and cannot be dismissed with Escape or a backdrop click.`}})}finally{this.restoreConfig()}}$onDestroy(){this.restoreConfig()}applyConfig(){this.config.backdrop=`static`,this.config.centered=!0,this.config.keyboard=!1,this.config.size=`lg`}restoreConfig(){this.config.backdrop=this.initialConfig.backdrop,this.config.centered=this.initialConfig.centered,this.config.keyboard=this.initialConfig.keyboard,this.config.size=this.initialConfig.size}static get $name(){return`docsModalGlobal`}static get $inject(){return[Ef.$name,_f.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/modal-global/modal-global.component.html`}}},Ov=class e{modal;constructor(e){this.modal=e}openCustomWindow(){this.open(`Custom window class`,{windowClass:`modal-window-custom`})}openStaticBackdrop(){this.open(`Static custom backdrop`,{backdrop:`static`,backdropClass:`modal-static-backdrop`,keyboard:!1})}openSmall(){this.open(`Small modal`,{size:`sm`})}openLarge(){this.open(`Large modal`,{size:`lg`})}openExtraLarge(){this.open(`Extra large modal`,{size:`xl`})}openFullscreen(){this.open(`Fullscreen modal`,{fullscreen:!0})}openCentered(){this.open(`Vertically centered modal`,{centered:!0})}openScrollable(){this.open(`Scrollable modal`,{scrollable:!0,size:`lg`},!0)}openCustomDialog(){this.open(`Custom dialog class`,{modalDialogClass:`modal-dialog-custom`})}open(e,t,n=!1){this.modal.open(Sv.$name,{...t,bindings:{title:e,description:`These values are applied only to this modal instance.`,longContent:n}})}static get $name(){return`docsModalOptions`}static get $inject(){return[Ef.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/modal-options/modal-options.component.html`}}},kv=class e{modal;ngbActiveModal;level=1;constructor(e){this.modal=e}dismissAll(){this.modal.dismissAll(`Dismiss all`)}static get $name(){return`docsModalStackedContent`}static get $inject(){return[Ef.$name]}static get $factory(){return{bindings:{ngbActiveModal:`<`,level:`<?`},controller:e,controllerAs:`$`,templateUrl:`src/app/features/lib/components/modal-stacked-content/modal-stacked-content.component.html`}}},Av=class e{modal;constructor(e){this.modal=e}async openStack(){for(let e=1;e<=3;e++)await this.modal.open(kv.$name,{bindings:{level:e}})}static get $name(){return`docsModalStacked`}static get $inject(){return[Ef.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/modal-stacked/modal-stacked.component.html`}}},jv=class e{ngbActiveModal;ariaReferences=!0;centered=!1;fullscreen=!1;customBackdrop=!1;size=`sm`;customWindow=!1;customDialog=!1;toggleAriaReferences(){this.ariaReferences=!this.ariaReferences,this.ngbActiveModal.update({ariaLabelledBy:this.ariaReferences?`updatable-modal-title`:``,ariaDescribedBy:this.ariaReferences?`updatable-modal-description`:``})}toggleCentered(){this.centered=!this.centered,this.ngbActiveModal.update({centered:this.centered})}toggleFullscreen(){this.fullscreen=!this.fullscreen,this.ngbActiveModal.update({fullscreen:this.fullscreen})}toggleBackdropClass(){this.customBackdrop=!this.customBackdrop,this.ngbActiveModal.update({backdropClass:this.customBackdrop?`modal-updated-backdrop`:``})}cycleSize(){let e=[`sm`,`lg`,`xl`];this.size=e[(e.indexOf(this.size)+1)%e.length],this.ngbActiveModal.update({size:this.size})}toggleWindowClass(){this.customWindow=!this.customWindow,this.ngbActiveModal.update({windowClass:this.customWindow?`modal-updated-window`:``})}toggleDialogClass(){this.customDialog=!this.customDialog,this.ngbActiveModal.update({modalDialogClass:this.customDialog?`modal-updated-dialog`:``})}static get $name(){return`docsModalUpdatableContent`}static get $factory(){return{bindings:{ngbActiveModal:`<`},controller:e,controllerAs:`$`,templateUrl:`src/app/features/lib/components/modal-updatable-content/modal-updatable-content.component.html`}}},Mv=class e{modal;constructor(e){this.modal=e}open(){this.modal.open(jv.$name,{ariaLabelledBy:`updatable-modal-title`,ariaDescribedBy:`updatable-modal-description`,size:`sm`})}static get $name(){return`docsModalUpdatable`}static get $inject(){return[Ef.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/modal-updatable/modal-updatable.component.html`}}},Nv=class e{activeId=`alternative-home`;static get $name(){return`docsAlternativeNav`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/alternative-nav/alternative-nav.component.html`}}},Pv=class e{activeId=`custom-weekly`;static get $name(){return`docsCustomNav`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/custom-nav/custom-nav.component.html`}}},Fv=class e{items=[{id:`dynamic-1`,title:`Tab 1`},{id:`dynamic-2`,title:`Tab 2`},{id:`dynamic-3`,title:`Tab 3`}];activeId=`dynamic-1`;nextId=4;add(){let e={id:`dynamic-${this.nextId}`,title:`Tab ${this.nextId}`};this.nextId++,this.items.push(e),this.activeId=e.id}removeActive(){if(this.items.length===1)return;let e=this.items.findIndex(({id:e})=>e===this.activeId),t=this.items[e===0?1:e-1];this.activeId=t.id,this.items=this.items.filter(({id:t})=>t!==this.items[e].id)}static get $name(){return`docsDynamicNav`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/dynamic-nav/dynamic-nav.component.html`}}},Iv=class e{activeId=`keep-editor`;draft=`This value survives tab changes.`;static get $name(){return`docsKeepContentNav`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/keep-content-nav/keep-content-nav.component.html`}}},Lv=class e{config;activeId=`global-account`;initialConfig;constructor(e){this.config=e,this.initialConfig={animation:e.animation,destroyOnHide:e.destroyOnHide,keyboard:e.keyboard,orientation:e.orientation,roles:e.roles},e.animation=!1,e.destroyOnHide=!1,e.keyboard=`changeWithArrows`,e.orientation=`vertical`,e.roles=`tablist`}$postLink(){this.restoreConfig()}$onDestroy(){this.restoreConfig()}restoreConfig(){this.config.animation=this.initialConfig.animation,this.config.destroyOnHide=this.initialConfig.destroyOnHide,this.config.keyboard=this.initialConfig.keyboard,this.config.orientation=this.initialConfig.orientation,this.config.roles=this.initialConfig.roles}static get $name(){return`docsNavGlobal`}static get $inject(){return[Bf.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/nav-global/nav-global.component.html`}}},Rv=class e{nav;activeId=`selecting-first`;select(e){this.nav.select(e)}static get $name(){return`docsSelectingNav`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/selecting-nav/selecting-nav.component.html`}}};A_([dc(`nav`,{read:Yf,static:!0})],Rv.prototype,`nav`,void 0);var zv=class e{activeId=`simple-overview`;static get $name(){return`docsSimpleNav`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/simple-nav/simple-nav.component.html`}}},Bv=class e{activeId=`vertical-profile`;static get $name(){return`docsVerticalNav`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/vertical-nav/vertical-nav.component.html`}}},Vv=class e{ngbActiveOffcanvas;static get $name(){return`docsOffcanvasDemoContent`}static get $factory(){return{bindings:{ngbActiveOffcanvas:`<`},controller:e,controllerAs:`$`,templateUrl:`src/app/features/lib/components/offcanvas-demo-content/offcanvas-demo-content.component.html`}}},Hv=class e{offcanvas;lastResult=`No result yet`;constructor(e){this.offcanvas=e}async open(){let e=await this.offcanvas.open(Vv.$name);e.closed.subscribe(e=>{this.lastResult=`Closed with: ${e}`}),e.dismissed.subscribe(e=>{this.lastResult=`Dismissed with: ${e}`})}static get $name(){return`docsOffcanvasComponentContent`}static get $inject(){return[yp.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/offcanvas-component-content/offcanvas-component-content.component.html`}}},Uv=class e{offcanvas;content;constructor(e){this.offcanvas=e}open(){this.offcanvas.open(this.content)}static get $name(){return`docsOffcanvasDefault`}static get $inject(){return[yp.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/offcanvas-default/offcanvas-default.component.html`}}};A_([dc(`content`,{read:Oc,static:!0})],Uv.prototype,`content`,void 0);var Wv=class e{ngbActiveOffcanvas;autofocus=!1;static get $name(){return`docsOffcanvasFocusContent`}static get $factory(){return{bindings:{ngbActiveOffcanvas:`<`,autofocus:`<?`},controller:e,controllerAs:`$`,templateUrl:`src/app/features/lib/components/offcanvas-focus-content/offcanvas-focus-content.component.html`}}},Gv=class e{offcanvas;constructor(e){this.offcanvas=e}openDefaultFocus(){this.offcanvas.open(Wv.$name,{ariaLabelledBy:`offcanvas-focus-title`,bindings:{autofocus:!1}})}openCustomFocus(){this.offcanvas.open(Wv.$name,{ariaLabelledBy:`offcanvas-focus-title`,bindings:{autofocus:!0}})}static get $name(){return`docsOffcanvasFocus`}static get $inject(){return[yp.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/offcanvas-focus/offcanvas-focus.component.html`}}},Kv=class e{offcanvas;config;initialConfig;constructor(e,t){this.offcanvas=e,this.config=t,this.initialConfig={backdrop:t.backdrop,keyboard:t.keyboard,position:t.position,scroll:t.scroll}}async open(){this.applyConfig();try{await this.offcanvas.open(Vv.$name)}finally{this.restoreConfig()}}$onDestroy(){this.restoreConfig()}applyConfig(){this.config.backdrop=`static`,this.config.keyboard=!1,this.config.position=`end`,this.config.scroll=!0}restoreConfig(){this.config.backdrop=this.initialConfig.backdrop,this.config.keyboard=this.initialConfig.keyboard,this.config.position=this.initialConfig.position,this.config.scroll=this.initialConfig.scroll}static get $name(){return`docsOffcanvasGlobal`}static get $inject(){return[yp.$name,sp.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/offcanvas-global/offcanvas-global.component.html`}}},qv=class e{offcanvas;constructor(e){this.offcanvas=e}openCustomPanel(){this.open({panelClass:`offcanvas-panel-custom`})}openStaticBackdrop(){this.open({backdrop:`static`,backdropClass:`offcanvas-static-backdrop`,keyboard:!1})}openStart(){this.open({position:`start`})}openEnd(){this.open({position:`end`})}openTop(){this.open({position:`top`})}openBottom(){this.open({position:`bottom`})}openScrollableBody(){this.open({scroll:!0,backdrop:!1})}open(e){this.offcanvas.open(Vv.$name,e)}static get $name(){return`docsOffcanvasOptions`}static get $inject(){return[yp.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/offcanvas-options/offcanvas-options.component.html`}}},Jv=class e{paginatedPage=7;rotatedPage=12;compactPage=12;selectPaginatedPage(e){this.paginatedPage=e}selectRotatedPage(e){this.rotatedPage=e}selectCompactPage(e){this.compactPage=e}static get $name(){return`docsAdvancedPagination`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/advanced-pagination/advanced-pagination.component.html`}}},Yv=class e{page=4;selectPage(e){this.page=e}static get $name(){return`docsBasicPagination`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/basic-pagination/basic-pagination.component.html`}}},Xv=class e{page=3;selectPage(e){this.page=e}static get $name(){return`docsCustomPagination`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/custom-pagination/custom-pagination.component.html`}}},Zv=class e{page=3;disabled=!0;selectPage(e){this.page=e}static get $name(){return`docsDisabledPagination`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/disabled-pagination/disabled-pagination.component.html`}}},Qv=class e{startPage=2;centerPage=2;endPage=2;selectStartPage(e){this.startPage=e}selectCenterPage(e){this.centerPage=e}selectEndPage(e){this.endPage=e}static get $name(){return`docsPaginationAlignment`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/pagination-alignment/pagination-alignment.component.html`}}},$v=class e{config;page=8;initialConfig;constructor(e){this.config=e,this.initialConfig={boundaryLinks:e.boundaryLinks,directionLinks:e.directionLinks,maxSize:e.maxSize,rotate:e.rotate,size:e.size},e.boundaryLinks=!0,e.directionLinks=!1,e.maxSize=5,e.rotate=!0,e.size=`sm`}selectPage(e){this.page=e}$postLink(){this.restoreConfig()}$onDestroy(){this.restoreConfig()}restoreConfig(){this.config.boundaryLinks=this.initialConfig.boundaryLinks,this.config.directionLinks=this.initialConfig.directionLinks,this.config.maxSize=this.initialConfig.maxSize,this.config.rotate=this.initialConfig.rotate,this.config.size=this.initialConfig.size}static get $name(){return`docsPaginationGlobal`}static get $inject(){return[Um.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/pagination-global/pagination-global.component.html`}}},ey=class e{smallPage=2;defaultPage=2;largePage=2;selectSmallPage(e){this.smallPage=e}selectDefaultPage(e){this.defaultPage=e}selectLargePage(e){this.largePage=e}static get $name(){return`docsPaginationSize`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/pagination-size/pagination-size.component.html`}}},ty=class e{date={year:2026,month:8,day:24};static get $name(){return`docsBasicDatepicker`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/basic-datepicker/basic-datepicker.component.html`}}},ny=class extends qm{fromModel(e){if(!e)return null;let[t,n,r]=e.split(`/`).map(Number);return t&&n&&r?{year:t,month:n,day:r}:null}toModel(e){return e?`${e.year}/${e.month}/${e.day}`:null}},ry=class extends Ah{parse(e){let[t,n,r]=e.split(`.`).map(Number);return t&&n&&r?{year:r,month:n,day:t}:null}format(e){return e?`${String(e.day).padStart(2,`0`)}.${String(e.month).padStart(2,`0`)}.${e.year}`:``}},iy=class e{adapter=new ny;formatter=new ry;date=`2026/8/24`;static get $name(){return`docsDatepickerCustomAdapter`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/datepicker-custom-adapter/datepicker-custom-adapter.component.html`}}},ay=class e{date={year:2026,month:8,day:24};dayData(e){let t=new Date(e.year,e.month-1,e.day).getDay();return{weekend:t===0||t===6}}static get $name(){return`docsDatepickerCustomDay`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/datepicker-custom-day/datepicker-custom-day.component.html`}}},oy=class e{previous(e){e.navigateTo(e.calendar.getPrev(e.state.firstDate,`m`,1))}next(e){e.navigateTo(e.calendar.getNext(e.state.firstDate,`m`,1))}today(e){e.navigateTo(e.calendar.getToday())}static get $name(){return`docsDatepickerCustomMonth`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/datepicker-custom-month/datepicker-custom-month.component.html`}}},sy=class e{date=null;datepicker;today(){this.datepicker&&(this.date=this.datepicker.calendar.getToday())}clear(){this.date=null}static get $name(){return`docsDatepickerFooter`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/datepicker-footer/datepicker-footer.component.html`}}},cy=class e{config;inputConfig;inlineDefaults;inputDefaults;inlineDate={year:2026,month:8,day:24};popupDate={year:2026,month:8,day:24};constructor(e,t){this.config=e,this.inputConfig=t,this.inlineDefaults=this.capture(e),this.inputDefaults=this.capture(t),Object.assign(e,{displayMonths:2,navigation:`arrows`,outsideDays:`hidden`,showWeekNumbers:!0,weekdays:`short`}),Object.assign(t,{displayMonths:2,navigation:`arrows`,outsideDays:`hidden`,showWeekNumbers:!0,weekdays:`short`})}$postLink(){this.restore()}$onDestroy(){this.restore()}capture(e){return{displayMonths:e.displayMonths,navigation:e.navigation,outsideDays:e.outsideDays,showWeekNumbers:e.showWeekNumbers,weekdays:e.weekdays}}restore(){Object.assign(this.config,this.inlineDefaults),Object.assign(this.inputConfig,this.inputDefaults)}static get $name(){return`docsDatepickerGlobal`}static get $inject(){return[gh.$name,Mh.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/datepicker-global/datepicker-global.component.html`}}},ly=class extends eh{months=[`enero`,`febrero`,`marzo`,`abril`,`mayo`,`junio`,`julio`,`agosto`,`septiembre`,`octubre`,`noviembre`,`diciembre`];weekdays=[`L`,`M`,`X`,`J`,`V`,`S`,`D`];getWeekdayLabel(e){return this.weekdays[e-1]??``}getMonthShortName(e){return this.months[e-1]?.slice(0,3)??``}getMonthFullName(e){return this.months[e-1]??``}getDayAriaLabel(e){return`${e.day} de ${this.getMonthFullName(e.month)} de ${e.year}`}},uy=class e{i18n=new ly;date={year:2026,month:8,day:24};static get $name(){return`docsDatepickerI18n`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/datepicker-i18n/datepicker-i18n.component.html`}}},dy=class e{date={year:2026,month:8,day:24};datepicker;onKeydown(e){if(!this.datepicker||e.key!==`[`&&e.key!==`]`)return;let t=(e.key===`[`?-1:1)<0?this.datepicker.calendar.getPrev(this.datepicker.state.firstDate,`m`,1):this.datepicker.calendar.getNext(this.datepicker.state.firstDate,`m`,1);this.datepicker.navigateTo(t),e.preventDefault(),e.stopPropagation()}static get $name(){return`docsDatepickerKeyboard`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/datepicker-keyboard/datepicker-keyboard.component.html`}}},fy=class e{date=null;target=`#datepicker-custom-position-target`;static get $name(){return`docsDatepickerPositionTarget`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/datepicker-position-target/datepicker-position-target.component.html`}}},py=class e{disabled=!0;date={year:2026,month:8,day:24};static get $name(){return`docsDisabledDatepicker`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/disabled-datepicker/disabled-datepicker.component.html`}}},my=class e{date={year:2026,month:8,day:24};static get $name(){return`docsMultipleMonthsDatepicker`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/multiple-months-datepicker/multiple-months-datepicker.component.html`}}},hy=class e{date={year:2026,month:8,day:24};static get $name(){return`docsPopupDatepicker`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popup-datepicker/popup-datepicker.component.html`}}},gy=class e{calendar=new Qm;hoveredDate=null;fromDate=this.calendar.getToday();toDate=this.calendar.getNext(this.fromDate,`d`,10);select(e){!this.fromDate||this.toDate?(this.fromDate=e,this.toDate=null):e.after(this.fromDate)?this.toDate=e:this.fromDate=e}isHovered(e){return!!this.fromDate&&!this.toDate&&!!this.hoveredDate&&e.after(this.fromDate)&&e.before(this.hoveredDate)}isInside(e){return!!this.toDate&&e.after(this.fromDate)&&e.before(this.toDate)}isRange(e){return e.equals(this.fromDate)||!!this.toDate&&e.equals(this.toDate)||this.isInside(e)||this.isHovered(e)}static get $name(){return`docsRangeDatepicker`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/range-datepicker/range-datepicker.component.html`}}},_y=class e{calendar=new Qm;hoveredDate=null;fromDate=this.calendar.getToday();toDate=this.calendar.getNext(this.fromDate,`d`,7);model=this.fromDate;select(e){!this.fromDate||this.toDate?(this.fromDate=e,this.toDate=null):e.after(this.fromDate)?this.toDate=e:this.fromDate=e,this.model=e}isHovered(e){return!!this.fromDate&&!this.toDate&&!!this.hoveredDate&&e.after(this.fromDate)&&e.before(this.hoveredDate)}isInside(e){return!!this.toDate&&e.after(this.fromDate)&&e.before(this.toDate)}isRange(e){return e.equals(this.fromDate)||!!this.toDate&&e.equals(this.toDate)||this.isInside(e)||this.isHovered(e)}static get $name(){return`docsRangePopupDatepicker`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/range-popup-datepicker/range-popup-datepicker.component.html`}}},vy=class e{popover;static get $name(){return`docsPopoverAutoclose`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popover-autoclose/popover-autoclose.component.html`}}},yy=class e{static get $name(){return`docsPopoverBody`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popover-body/popover-body.component.html`}}},by=class e{name=`World`;contentTemplate;titleTemplate;french;german;english;toggleWithGreeting(e,t,n){e.isOpen()?e.close():e.open({greeting:t,language:n})}static get $name(){return`docsPopoverContext`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popover-context/popover-context.component.html`}}},xy=class e{static get $name(){return`docsPopoverCustomClass`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popover-custom-class/popover-custom-class.component.html`}}},Sy=class e{static get $name(){return`docsPopoverCustomTarget`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popover-custom-target/popover-custom-target.component.html`}}},Cy=class e{static get $name(){return`docsPopoverDelays`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popover-delays/popover-delays.component.html`}}},wy=class e{popover;events=[];record(e){this.events.unshift({name:e,time:new Date})}static get $name(){return`docsPopoverEvents`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popover-events/popover-events.component.html`}}},Ty=class e{config;initialConfig;constructor(e){this.config=e,this.initialConfig={container:e.container,openDelay:e.openDelay,placement:e.placement,triggers:e.triggers},e.container=`body`,e.openDelay=300,e.placement=`end`,e.triggers=`mouseenter:mouseleave`}$postLink(){this.restoreConfig()}$onDestroy(){this.restoreConfig()}restoreConfig(){this.config.container=this.initialConfig.container,this.config.openDelay=this.initialConfig.openDelay,this.config.placement=this.initialConfig.placement,this.config.triggers=this.initialConfig.triggers}static get $name(){return`docsPopoverGlobal`}static get $inject(){return[xp.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popover-global/popover-global.component.html`}}},Ey=class e{popover;static get $name(){return`docsPopoverManualControl`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popover-manual-control/popover-manual-control.component.html`}}},Dy=class e{static get $name(){return`docsPopoverPlacements`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popover-placements/popover-placements.component.html`}}},Oy=class e{name=`NgbJS`;contentTemplate;titleTemplate;static get $name(){return`docsPopoverTemplate`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popover-template/popover-template.component.html`}}},ky=class e{manual;static get $name(){return`docsPopoverTriggers`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/popover-triggers/popover-triggers.component.html`}}},Ay=class e{static get $name(){return`docsContextualTextProgressbar`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/contextual-text-progressbar/contextual-text-progressbar.component.html`}}},jy=class e{static get $name(){return`docsCustomLabelsProgressbar`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/custom-labels-progressbar/custom-labels-progressbar.component.html`}}},My=class e{static get $name(){return`docsProgressBarsStacked`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/progress-bars-stacked/progress-bars-stacked.component.html`}}},Ny=class e{static get $name(){return`docsProgressHeight`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/progress-height/progress-height.component.html`}}},Py=class e{config;initialConfig;constructor(e){this.config=e,this.initialConfig={animated:e.animated,height:e.height,max:e.max,showValue:e.showValue,striped:e.striped,textType:e.textType,type:e.type},e.animated=!0,e.height=`1.5rem`,e.max=200,e.showValue=!0,e.striped=!0,e.textType=`light`,e.type=`primary`}$postLink(){this.restoreConfig()}$onDestroy(){this.restoreConfig()}restoreConfig(){Object.assign(this.config,this.initialConfig)}static get $name(){return`docsProgressbarGlobal`}static get $inject(){return[jp.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/progressbar-global/progressbar-global.component.html`}}},Fy=class e{static get $name(){return`docsSimpleProgressbar`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/simple-progressbar/simple-progressbar.component.html`}}},Iy=class e{static get $name(){return`docsStripedProgressBar`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/striped-progress-bar/striped-progress-bar.component.html`}}},Ly=class e{rating=3;setRating(e){this.rating=e}static get $name(){return`docsBasicRating`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/basic-rating/basic-rating.component.html`}}},Ry=class e{rating=6;setRating(e){this.rating=e}static get $name(){return`docsRatingCustomTemplate`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/rating-custom-template/rating-custom-template.component.html`}}},zy=class e{rating=3.14;heartTemplate;ariaValueText=(e,t)=>`${e} out of ${t} hearts`;static get $name(){return`docsRatingDecimal`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/rating-decimal/rating-decimal.component.html`}}},By=class e{selected=0;hovered=0;readonly=!1;setSelected(e){this.selected=e}setHovered(e){this.hovered=e}static get $name(){return`docsRatingEvents`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/rating-events/rating-events.component.html`}}},Vy=class e{rating=null;disabled=!1;form;setRating(e){this.rating=e}clear(){this.rating=null}static get $name(){return`docsRatingForm`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/rating-form/rating-form.component.html`}}},Hy=class e{config;initialConfig;constructor(e){this.config=e,this.initialConfig={max:e.max,readonly:e.readonly,resettable:e.resettable,tabindex:e.tabindex},e.max=5,e.readonly=!0,e.resettable=!0,e.tabindex=-1}$postLink(){this.restoreConfig()}$onDestroy(){this.restoreConfig()}restoreConfig(){Object.assign(this.config,this.initialConfig)}static get $name(){return`docsRatingGlobal`}static get $inject(){return[Lp.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/rating-global/rating-global.component.html`}}},Uy=class e{static get $name(){return`docsBasicScrollspy`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/basic-scrollspy/basic-scrollspy.component.html`}}},Wy=class e{static get $name(){return`docsNavbarScrollspy`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/navbar-scrollspy/navbar-scrollspy.component.html`}}},Gy=class e{static get $name(){return`docsNestedScrollspy`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/nested-scrollspy/nested-scrollspy.component.html`}}},Ky=class e{static get $name(){return`docsScrollspyMenuItems`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/scrollspy-menu-items/scrollspy-menu-items.component.html`}}},qy=class e{$element;scrollSpy;fragments=[`service-introduction`,`service-options`,`service-finish`];running=!1;observingFinish=!0;root;constructor(e,t){this.$element=e,this.scrollSpy=t}$postLink(){this.root=this.$element[0].querySelector(`[data-service-scrollspy]`)??void 0,this.start()}$onDestroy(){this.scrollSpy.stop()}start(){this.root&&(this.scrollSpy.start({root:this.root,fragments:this.fragments,rootMargin:`0px 0px -45%`}),this.running=!0,this.observingFinish=!0)}stop(){this.scrollSpy.stop(),this.running=!1}toggleFinish(){this.observingFinish?this.scrollSpy.unobserve(`service-finish`):this.scrollSpy.observe(`service-finish`),this.observingFinish=!this.observingFinish}static get $name(){return`docsScrollspyServiceDemo`}static get $inject(){return[`$element`,Jp.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/scrollspy-service-demo/scrollspy-service-demo.component.html`}}},Jy=class e{time={hour:13,minute:30,second:0};static get $name(){return`docsBasicTimepicker`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/basic-timepicker/basic-timepicker.component.html`}}},Yy=class e{time={hour:13,minute:30,second:0};meridian=!0;static get $name(){return`docsMeridianTimepicker`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/meridian-timepicker/meridian-timepicker.component.html`}}},Xy=class e{time={hour:13,minute:30,second:25};seconds=!0;static get $name(){return`docsSecondsTimepicker`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/seconds-timepicker/seconds-timepicker.component.html`}}},Zy=class e{time={hour:13,minute:30,second:0};spinners=!0;static get $name(){return`docsSpinnersTimepicker`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/spinners-timepicker/spinners-timepicker.component.html`}}},Qy=e=>e.toString().padStart(2,`0`),$y=class extends rm{fromModel(e){if(!e)return null;let[t,n,r]=e.split(`:`).map(Number);return{hour:t,minute:n,second:r}}toModel(e){return e?`${Qy(e.hour)}:${Qy(e.minute)}:${Qy(e.second??0)}`:null}},eb=class e{adapter=new $y;time=this.adapter.fromModel(`13:30:00`);model=`13:30:00`;$doCheck(){this.model=this.adapter.toModel(this.time)??``}static get $name(){return`docsTimepickerCustomAdapter`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/timepicker-custom-adapter/timepicker-custom-adapter.component.html`}}},tb=class e{time={hour:13,minute:30,second:0};hourStep=1;minuteStep=15;secondStep=30;static get $name(){return`docsTimepickerCustomSteps`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/timepicker-custom-steps/timepicker-custom-steps.component.html`}}},nb=class extends am{getMorningPeriod(){return`π.μ.`}getAfternoonPeriod(){return`μ.μ.`}},rb=class e{i18n;time={hour:13,minute:30,second:0};constructor(e){this.i18n=e}static get $name(){return`docsTimepickerI18n`}static get $inject(){return[am.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/timepicker-i18n/timepicker-i18n.component.html`}}},ib=class e{time=null;static get $name(){return`docsTimepickerValidation`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/timepicker-validation/timepicker-validation.component.html`}}},ab=()=>({restrict:`A`,require:`ngModel`,link:(e,t,n,r)=>{let i=r;i.$validators.lunchtime=e=>!e||e.hour>=12&&e.hour<=13}}),ob=class e{$timeout;visible=!0;reopenTimer;constructor(e){this.$timeout=e}close(){this.visible=!1,this.reopenTimer=this.$timeout(()=>{this.visible=!0},3e3)}$onDestroy(){this.reopenTimer&&this.$timeout.cancel(this.reopenTimer)}static get $name(){return`docsCloseableToast`}static get $inject(){return[`$timeout`]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/closeable-toast/closeable-toast.component.html`}}},sb=class e{showHeaderToast=!0;static get $name(){return`docsInlineToast`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/inline-toast/inline-toast.component.html`}}},cb=class e{$timeout;visible=!1;autohide=!0;constructor(e){this.$timeout=e}show(){this.visible=!1,this.autohide=!0,this.$timeout(()=>this.visible=!0)}hide(){this.visible=!1,this.autohide=!0}static get $name(){return`docsPreventAutohideToast`}static get $inject(){return[`$timeout`]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/prevent-autohide-toast/prevent-autohide-toast.component.html`}}},lb=class e{visible=!0;static get $name(){return`docsTemplateHeaderToast`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/template-header-toast/template-header-toast.component.html`}}},ub=class{toasts=[];nextId=0;show(e,t={}){this.toasts.push({id:++this.nextId,body:e,...t})}remove(e){let t=this.toasts.indexOf(e);t>=0&&this.toasts.splice(t,1)}clear(){this.toasts.length=0}static get $name(){return`docs.toast.service`}},db=class e{toastService;constructor(e){this.toastService=e}showStandard(){this.toastService.show(`I am a standard toast.`)}showSuccess(){this.toastService.show(`Your changes were saved.`,{className:`bg-success text-white`,delay:8e3})}showDanger(){this.toastService.show(`The operation could not be completed.`,{className:`bg-danger text-white`,delay:1e4})}$onDestroy(){this.toastService.clear()}static get $name(){return`docsToastManagement`}static get $inject(){return[ub.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/toast-management/toast-management.component.html`}}},fb=class e{contentTemplate;static get $name(){return`docsTooltipAutoclose`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/tooltip-autoclose/tooltip-autoclose.component.html`}}},pb=class e{static get $name(){return`docsTooltipBody`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/tooltip-body/tooltip-body.component.html`}}},mb=class e{name=`World`;contentTemplate;french;german;english;toggleWithGreeting(e,t){e.isOpen()?e.close():e.open({greeting:t})}static get $name(){return`docsTooltipContext`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/tooltip-context/tooltip-context.component.html`}}},hb=class e{static get $name(){return`docsTooltipCustomClass`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/tooltip-custom-class/tooltip-custom-class.component.html`}}},gb=class e{static get $name(){return`docsTooltipCustomTarget`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/tooltip-custom-target/tooltip-custom-target.component.html`}}},_b=class e{static get $name(){return`docsTooltipDelays`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/tooltip-delays/tooltip-delays.component.html`}}},vb=class e{config;initialConfig;constructor(e){this.config=e,this.initialConfig={container:e.container,openDelay:e.openDelay,placement:e.placement,triggers:e.triggers},e.container=`body`,e.openDelay=300,e.placement=`end`,e.triggers=`mouseenter:mouseleave`}$postLink(){this.restoreConfig()}$onDestroy(){this.restoreConfig()}restoreConfig(){this.config.container=this.initialConfig.container,this.config.openDelay=this.initialConfig.openDelay,this.config.placement=this.initialConfig.placement,this.config.triggers=this.initialConfig.triggers}static get $name(){return`docsTooltipGlobal`}static get $inject(){return[vm.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/tooltip-global/tooltip-global.component.html`}}},yb=class e{static get $name(){return`docsTooltipPlacements`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/tooltip-placements/tooltip-placements.component.html`}}},bb=class e{name=`NgbJS`;contentTemplate;static get $name(){return`docsTooltipTemplate`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/tooltip-template/tooltip-template.component.html`}}},xb=class e{manual;static get $name(){return`docsTooltipTriggers`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/tooltip-triggers/tooltip-triggers.component.html`}}},Sb=[`Alabama`,`Alaska`,`Arizona`,`Arkansas`,`California`,`Colorado`,`Connecticut`,`Delaware`,`Florida`,`Georgia`,`Hawaii`].map(e=>({name:e})),Cb=class e{model;formatter=e=>e.name;search=e=>e.pipe(cs(200),B(e=>e?Sb.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())):[]));static get $name(){return`docsExactTypeahead`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/exact-typeahead/exact-typeahead.component.html`}}},wb=`Alabama.Alaska.Arizona.Arkansas.California.Colorado.Connecticut.Delaware.Florida.Georgia.Hawaii.Idaho.Illinois.Indiana.Iowa.Kansas.Kentucky.Louisiana.Maine.Maryland.Massachusetts.Michigan.Minnesota.Mississippi.Missouri.Montana.Nebraska.Nevada.New Hampshire.New Jersey.New Mexico.New York.North Carolina.North Dakota.Ohio.Oklahoma.Oregon.Pennsylvania.Rhode Island.South Carolina.South Dakota.Tennessee.Texas.Utah.Vermont.Virginia.Washington.West Virginia.Wisconsin.Wyoming`.split(`.`),Tb=class e{model=``;focus$=new z;search=e=>$o(e.pipe(cs(200),hs()),this.focus$).pipe(B(e=>(e?wb.filter(t=>t.toLowerCase().includes(e.toLowerCase())):wb).slice(0,10)));$onDestroy(){this.focus$.complete()}static get $name(){return`docsFocusTypeahead`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/focus-typeahead/focus-typeahead.component.html`}}},Eb=[`Alabama`,`Alaska`,`Arizona`,`Arkansas`,`California`,`Colorado`,`Connecticut`,`Delaware`,`Florida`,`Georgia`,`Hawaii`],Db=class e{model=``;formatter=e=>e.toUpperCase();search=e=>e.pipe(cs(200),hs(),B(e=>e?Eb.filter(t=>t.toLowerCase().includes(e.toLowerCase())):[]));static get $name(){return`docsFormattedTypeahead`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/formatted-typeahead/formatted-typeahead.component.html`}}},Ob=[`Alabama`,`Alaska`,`Arizona`,`Arkansas`,`California`,`Colorado`,`Connecticut`,`Delaware`,`Florida`,`Georgia`,`Hawaii`].map((e,t)=>({id:t,name:e})),kb=class e{model=null;formatter=e=>e.name;search=e=>e.pipe(cs(200),hs(),B(e=>e.length<2?[]:Ob.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))));static get $name(){return`docsNonEditableTypeahead`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/non-editable-typeahead/non-editable-typeahead.component.html`}}},Ab=`Alabama.Alaska.Arizona.Arkansas.California.Colorado.Connecticut.Delaware.Florida.Georgia.Hawaii.Idaho.Illinois.Indiana.Iowa.Kansas.Kentucky.Louisiana.Maine.Maryland.Massachusetts.Michigan.Minnesota.Mississippi.Missouri.Montana.Nebraska.Nevada.New Hampshire.New Jersey.New Mexico.New York.North Carolina.North Dakota.Ohio.Oklahoma.Oregon.Pennsylvania.Rhode Island.South Carolina.South Dakota.Tennessee.Texas.Utah.Vermont.Virginia.Washington.West Virginia.Wisconsin.Wyoming`.split(`.`),jb=class e{model=``;search=e=>e.pipe(cs(200),hs(),B(e=>e.length<2?[]:Ab.filter(t=>t.toLowerCase().includes(e.toLowerCase())).slice(0,10)));static get $name(){return`docsSimpleTypeahead`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/simple-typeahead/simple-typeahead.component.html`}}},Mb=[{name:`Mexico`,flag:`🇲🇽`,region:`North America`},{name:`Argentina`,flag:`🇦🇷`,region:`South America`},{name:`Brazil`,flag:`🇧🇷`,region:`South America`},{name:`Canada`,flag:`🇨🇦`,region:`North America`},{name:`Colombia`,flag:`🇨🇴`,region:`South America`},{name:`Germany`,flag:`🇩🇪`,region:`Europe`},{name:`Japan`,flag:`🇯🇵`,region:`Asia`},{name:`Spain`,flag:`🇪🇸`,region:`Europe`}],Nb=class e{model;resultTemplate;formatter=e=>e.name;search=e=>e.pipe(cs(200),B(e=>e?Mb.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())).slice(0,8):[]));static get $name(){return`docsTemplateResultsTypeahead`}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/template-results-typeahead/template-results-typeahead.component.html`}}},Pb=[`Alabama`,`Alaska`,`Arizona`,`Arkansas`,`California`,`Colorado`,`Connecticut`,`Delaware`,`Florida`,`Georgia`,`Hawaii`],Fb=class e{config;model=``;initialConfig;constructor(e){this.config=e,this.initialConfig={container:e.container,selectOnExact:e.selectOnExact,showHint:e.showHint},e.container=`body`,e.selectOnExact=!0,e.showHint=!0}search=e=>e.pipe(cs(200),hs(),B(e=>e.length<2?[]:Pb.filter(t=>t.toLowerCase().startsWith(e.toLowerCase()))));$postLink(){this.restoreConfig()}$onDestroy(){this.restoreConfig()}restoreConfig(){this.config.container=this.initialConfig.container,this.config.selectOnExact=this.initialConfig.selectOnExact,this.config.showHint=this.initialConfig.showHint}static get $name(){return`docsTypeaheadGlobal`}static get $inject(){return[Em.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/typeahead-global/typeahead-global.component.html`}}},Ib=`https://en.wikipedia.org/w/api.php`,Lb=class{$http;constructor(e){this.$http=e}search(e){return e?Co(this.$http.get(Ib,{params:{action:`opensearch`,format:`json`,origin:`*`,search:e}})).pipe(B(e=>e.data[1])):wo([])}static get $name(){return`docs.wikipedia.search.service`}static get $inject(){return[`$http`]}},Rb=class e{wikipedia;model=``;searching=!1;searchFailed=!1;constructor(e){this.wikipedia=e}search=e=>e.pipe(cs(300),hs(),xs(()=>this.searching=!0),bs(e=>this.wikipedia.search(e).pipe(xs(()=>this.searchFailed=!1),ss(()=>(this.searchFailed=!0,wo([]))))),xs(()=>this.searching=!1));static get $name(){return`docsWikipediaTypeahead`}static get $inject(){return[Lb.$name]}static get $factory(){return{controller:e,controllerAs:`example`,templateUrl:`src/app/features/lib/components/wikipedia-typeahead/wikipedia-typeahead.component.html`}}},zb=class e{static get $name(){return`docsAlertApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/alert-api-page/alert-api-page.component.html`,controllerAs:`$`}}},Bb=`<div class="d-flex justify-content-end mb-3">
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
`,Vb=`import type { IComponentController, IComponentOptions } from "angular";

interface AlertExample {
    id: number;
    type: string;
    message: string;
    animation: boolean;
}

const createAlerts = (): AlertExample[] => [
    { id: 1, type: "success", message: "Your changes were saved successfully.", animation: true },
    { id: 2, type: "danger", message: "Something needs your attention.", animation: true },
    { id: 3, type: "warning", message: "This alert closes without animation.", animation: false },
    { id: 4, type: "info", message: "This one also closes immediately.", animation: false },
];

export class AlertCloseableComponent implements IComponentController {
    public alerts = createAlerts();

    public close(id: number) {
        this.alerts = this.alerts.filter((alert) => alert.id !== id);
    }

    public reset() {
        this.alerts = createAlerts();
    }

    static get $name() {
        return "docsAlertCloseable"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlertCloseableComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/alert-closeable/alert-closeable.component.html",
        }
    }
}
`,Hb=`.alert-custom {
    --bs-alert-color: var(--bs-emphasis-color);
    --bs-alert-bg: var(--bs-tertiary-bg);
    --bs-alert-border-color: var(--bs-primary-border-subtle);
    --bs-alert-link-color: var(--bs-primary-text-emphasis);

    border-left: 0.25rem solid var(--bs-primary);
}
`,Ub=`<ngb-alert type="custom" dismissible="false" animation="false">
    <div class="d-flex align-items-start gap-3">
        <i class="bi bi-lightning-charge-fill fs-4 text-primary" aria-hidden="true"></i>
        <div>
            <h3 class="h6 mb-1">Custom alert</h3>
            <p class="mb-0">The <code>.alert-custom</code> class defines this theme without changing NgbJS.</p>
        </div>
    </div>
</ngb-alert>
`,Wb=`<div class="alert alert-light border d-flex align-items-start gap-3" role="note">
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
`,Gb=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbAlertConfig } from "ngb-js";

export class AlertGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<NgbAlertConfig, "animation" | "dismissible" | "type">;

    constructor(private readonly config: NgbAlertConfig) {
        this.initialConfig = {
            animation: config.animation,
            dismissible: config.dismissible,
            type: config.type,
        };

        config.animation = false;
        config.dismissible = false;
        config.type = "success";
    }

    $onDestroy() {
        this.config.animation = this.initialConfig.animation;
        this.config.dismissible = this.initialConfig.dismissible;
        this.config.type = this.initialConfig.type;
    }

    static get $name() {
        return "docsAlertGlobal"
    }

    static get $inject() {
        return [NgbAlertConfig.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlertGlobalComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/alert-global/alert-global.component.html",
        }
    }
}
`,Kb=`<div class="d-flex align-items-center justify-content-between gap-3 mb-3">
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
`,qb=`import type { INgbAlert } from "ngb-js";
import type { IComponentController, IComponentOptions, IPromise, ITimeoutService } from "angular";
import { ViewChild } from "ngjs-core";

export class SelfClosingAlertComponent implements IComponentController {
    private readonly initialSeconds = 5;
    private timer?: IPromise<void>;

    @ViewChild("alert")
    private alert?: INgbAlert;

    public remaining = this.initialSeconds;
    public visible = true;

    constructor(private readonly $timeout: ITimeoutService) {}

    $onInit() {
        this.startTimer();
    }

    $onDestroy() {
        this.cancelTimer();
    }

    public restart() {
        this.cancelTimer();
        this.remaining = this.initialSeconds;
        this.visible = true;
        this.startTimer();
    }

    public onClosed() {
        this.visible = false;
        this.cancelTimer();
    }

    private startTimer() {
        this.timer = this.$timeout(() => {
            this.remaining--;

            if (this.remaining <= 0) {
                if (this.alert) {
                    this.alert.close();
                } else {
                    this.visible = false;
                }
                return;
            }

            this.startTimer();
        }, 1000);
    }

    private cancelTimer() {
        if (this.timer) {
            this.$timeout.cancel(this.timer);
            this.timer = undefined;
        }
    }

    static get $name() {
        return "docsSelfClosingAlert"
    }

    static get $inject() {
        return ["$timeout"]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: SelfClosingAlertComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/self-closing-alert/self-closing-alert.component.html",
        }
    }
}
`,Jb=`<ngb-alert type="primary" dismissible="false" animation="false">
    <strong>Heads up!</strong> This is a simple alert rendered with NgbJS.
</ngb-alert>
`,Yb=class e{examples={simple:{html:Jb},closeable:{html:Bb,typescript:Vb},selfClosing:{html:Kb,typescript:qb},custom:{html:Ub,css:Hb},global:{html:Wb,typescript:Gb}};static get $name(){return`docsAlertExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/alert-examples-page/alert-examples-page.component.html`,controllerAs:`$`}}},Xb=class e{static get $name(){return`docsAccordionApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/accordion-api-page/accordion-api-page.component.html`,controllerAs:`$`}}},Zb=`<div ngb-accordion animation="true" close-others="false" destroy-on-hide="false">
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
`,Qb=`import type { IComponentController, IComponentOptions } from "angular";

export class AccordionContentComponent implements IComponentController {
    public draft = "This value remains after collapsing the panel.";

    static get $name() {
        return "docsAccordionContent"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionContentComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/accordion-content/accordion-content.component.html",
        }
    }
}
`,$b=`<div ngb-accordion animation="true" close-others="false" destroy-on-hide="true">
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
`,ex=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
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
`,tx=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbAccordionConfig } from "ngb-js";

export class AccordionGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<NgbAccordionConfig, "animation" | "closeOthers" | "destroyOnHide">;

    constructor(private readonly config: NgbAccordionConfig) {
        this.initialConfig = {
            animation: config.animation,
            closeOthers: config.closeOthers,
            destroyOnHide: config.destroyOnHide,
        };

        config.animation = false;
        config.closeOthers = true;
        config.destroyOnHide = false;
    }

    $onDestroy() {
        this.config.animation = this.initialConfig.animation;
        this.config.closeOthers = this.initialConfig.closeOthers;
        this.config.destroyOnHide = this.initialConfig.destroyOnHide;
    }

    static get $name() {
        return "docsAccordionGlobal"
    }

    static get $inject() {
        return [NgbAccordionConfig.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionGlobalComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/accordion-global/accordion-global.component.html",
        }
    }
}
`,nx=`<ng-template ng-ref="templateHeader">
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
`,rx=`<div class="d-flex flex-wrap gap-2 mb-3">
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
`,ix=`import type { IComponentController, IComponentOptions } from "angular";
import { ViewChild } from "ngjs-core";

interface AccordionController {
    expandAll(): void;
    collapseAll(): void;
    toggle(itemId: string): void;
}

export class AccordionTogglePanelsComponent implements IComponentController {
    @ViewChild("accordion", { static: true })
    private accordion!: AccordionController;

    public expandAll() {
        this.accordion.expandAll();
    }

    public collapseAll() {
        this.accordion.collapseAll();
    }

    public toggle(itemId: string) {
        this.accordion.toggle(itemId);
    }

    static get $name() {
        return "docsAccordionTogglePanels"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionTogglePanelsComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/accordion-toggle-panels/accordion-toggle-panels.component.html",
        }
    }
}
`,ax=`<div ngb-accordion animation="true" close-others="true" destroy-on-hide="true">
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
`,ox=class e{examples={simple:{html:nx},onePanel:{html:ax},togglePanels:{html:rx,typescript:ix},customHeader:{html:$b},content:{html:Zb,typescript:Qb},global:{html:ex,typescript:tx}};static get $name(){return`docsAccordionExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/accordion-examples-page/accordion-examples-page.component.html`,controllerAs:`$`}}},sx=class e{static get $name(){return`docsCarouselApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/carousel-api-page/carousel-api-page.component.html`,controllerAs:`$`}}},cx=`<div class="d-flex flex-column gap-3">
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
`,lx=`import type { IAugmentedJQuery, IComponentController, IComponentOptions, ITimeoutService } from "angular";

interface CarouselController {
    cycle(): void;
    pause(): void;
}

interface CarouselSlideEvent {
    source?: "timer" | "arrowLeft" | "arrowRight" | "indicator";
}

export class CarouselControlsComponent implements IComponentController {
    public pauseOnHover = true;
    public pauseOnFocus = true;
    public unpauseOnArrow = false;
    public pauseOnIndicator = false;
    public paused = false;

    private carousel?: CarouselController;

    constructor(
        private readonly $element: IAugmentedJQuery,
        private readonly $timeout: ITimeoutService,
    ) {}

    public $postLink() {
        this.$timeout(
            () => {
                this.carousel = this.$element.find("ngb-carousel").controller("ngbCarousel") as CarouselController;
            },
            0,
            false,
        );
    }

    public onSlide(event: CarouselSlideEvent) {
        const isArrow = event.source === "arrowLeft" || event.source === "arrowRight";

        if (isArrow && this.unpauseOnArrow) {
            this.carousel?.cycle();
            this.paused = false;
        }

        if (event.source === "indicator" && this.pauseOnIndicator) {
            this.carousel?.pause();
            this.paused = true;
        }
    }

    public toggleCycle() {
        if (this.paused) {
            this.carousel?.cycle();
        } else {
            this.carousel?.pause();
        }

        this.paused = !this.paused;
    }

    static get $name() {
        return "docsCarouselControls"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CarouselControlsComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/carousel-controls/carousel-controls.component.html",
        }
    }

    static get $inject() {
        return ["$element", "$timeout"]
    }
}
`,ux=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
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
`,dx=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbCarouselConfig } from "ngb-js";

export class CarouselGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<
        NgbCarouselConfig,
        "animation" | "interval" | "wrap" | "pauseOnFocus" | "pauseOnHover" | "showNavigationArrows"
    >;

    constructor(private readonly config: NgbCarouselConfig) {
        this.initialConfig = {
            animation: config.animation,
            interval: config.interval,
            wrap: config.wrap,
            pauseOnFocus: config.pauseOnFocus,
            pauseOnHover: config.pauseOnHover,
            showNavigationArrows: config.showNavigationArrows,
        };

        config.animation = false;
        config.interval = 2500;
        config.wrap = false;
        config.pauseOnFocus = false;
        config.pauseOnHover = false;
        config.showNavigationArrows = false;
    }

    public $onDestroy() {
        this.config.animation = this.initialConfig.animation;
        this.config.interval = this.initialConfig.interval;
        this.config.wrap = this.initialConfig.wrap;
        this.config.pauseOnFocus = this.initialConfig.pauseOnFocus;
        this.config.pauseOnHover = this.initialConfig.pauseOnHover;
        this.config.showNavigationArrows = this.initialConfig.showNavigationArrows;
    }

    static get $name() {
        return "docsCarouselGlobal"
    }

    static get $inject() {
        return [NgbCarouselConfig.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CarouselGlobalComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/carousel-global/carousel-global.component.html",
        }
    }
}
`,fx=`<p class="small text-body-secondary mb-3">
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
`,px=`<ngb-carousel aria-label="Featured landscapes">
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
`,mx=class e{examples={simple:{html:px},keyboard:{html:fx},controls:{html:cx,typescript:lx},global:{html:ux,typescript:dx}};static get $name(){return`docsCarouselExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/carousel-examples-page/carousel-examples-page.component.html`,controllerAs:`$`}}},hx=class e{static get $name(){return`docsCollapseApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/collapse-api-page/collapse-api-page.component.html`,controllerAs:`$`}}},gx=`<button
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
`,_x=`import type { IComponentController, IComponentOptions } from "angular";

export class HorizontalCollapseComponent implements IComponentController {
    public collapsed = true;

    public toggle() {
        this.collapsed = !this.collapsed;
    }

    static get $name() {
        return "docsHorizontalCollapse"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: HorizontalCollapseComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/horizontal-collapse/horizontal-collapse.component.html",
        }
    }
}
`,vx=`<p class="text-body-secondary mb-3">
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
`,yx=`import type { IComponentController, IComponentOptions } from "angular";

export class NavbarCollapseComponent implements IComponentController {
    public menuCollapsed = true;

    public toggleMenu() {
        this.menuCollapsed = !this.menuCollapsed;
    }

    public closeMenu() {
        this.menuCollapsed = true;
    }

    static get $name() {
        return "docsNavbarCollapse"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: NavbarCollapseComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/navbar-collapse/navbar-collapse.component.html",
        }
    }
}
`,bx=`<div class="d-flex flex-wrap gap-2 mb-3">
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
`,xx=`import type { IComponentController, IComponentOptions } from "angular";
import type { INgbCollapse } from "ngb-js";
import { ViewChild } from "ngjs-core";

export class SimpleCollapseComponent implements IComponentController {
    @ViewChild("collapse", { static: true })
    private collapse!: INgbCollapse;

    public collapsed = true;

    public toggleWithController() {
        this.collapse.toggle();
    }

    public toggleWithBinding() {
        this.collapsed = !this.collapsed;
    }

    static get $name() {
        return "docsSimpleCollapse"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: SimpleCollapseComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/simple-collapse/simple-collapse.component.html",
        }
    }
}
`,Sx=class e{examples={simple:{html:bx,typescript:xx},horizontal:{html:gx,typescript:_x},navbar:{html:vx,typescript:yx}};static get $name(){return`docsCollapseExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/collapse-examples-page/collapse-examples-page.component.html`,controllerAs:`$`}}},Cx=class e{static get $name(){return`docsDatepickerApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/datepicker-api-page/datepicker-api-page.component.html`,controllerAs:`$`}}},wx=class extends eh{months;weekdays;localeName;constructor(e,t,n){super(),this.months=e,this.weekdays=t,this.localeName=n}getWeekdayLabel(e){return this.weekdays[e-1]??``}getMonthShortName(e){return this.months[e-1]?.slice(0,3)??``}getMonthFullName(e){return this.months[e-1]??``}getDayAriaLabel(e){return`${this.localeName}: ${e.day} ${this.getMonthFullName(e.month)} ${e.year}`}},Tx=[`د`,`س`,`چ`,`پ`,`ج`,`ش`,`ی`],Ex=[`فروردین`,`اردیبهشت`,`خرداد`,`تیر`,`مرداد`,`شهریور`,`مهر`,`آبان`,`آذر`,`دی`,`بهمن`,`اسفند`],Dx=[`ن`,`ث`,`ر`,`خ`,`ج`,`س`,`ح`],Ox=[`محرّم`,`صفر`,`ربيع الأول`,`ربيع الآخر`,`جمادى الأولى`,`جمادى الآخرة`,`رجب`,`شعبان`,`رمضان`,`شوّال`,`ذو القعدة`,`ذو الحجة`],kx=[`จ`,`อ`,`พ`,`พฤ`,`ศ`,`ส`,`อา`],Ax=[`มกราคม`,`กุมภาพันธ์`,`มีนาคม`,`เมษายน`,`พฤษภาคม`,`มิถุนายน`,`กรกฎาคม`,`สิงหาคม`,`กันยายน`,`ตุลาคม`,`พฤศจิกายน`,`ธันวาคม`],jx=[`ᔑリ⊣⚍ᔑ∷||`,`⎓ᒷʖ∷⚍ᔑ∷||`,`ᒲᔑ∷ᓵ⍑`,`ᔑ!¡∷╎ꖎ`,`ᒲᔑ||`,`⋮⚍リᒷ`,`⋮⚍ꖎ||`,`ᔑ⚍⊣⚍ᓭℸ̣`,`ᓭᒷ!¡ℸ̣ᒷᒲʖᒷ∷`,`𝙹ᓵℸ̣𝙹ʖᒷ∷`,`リ𝙹⍊ᒷᒲʖᒷ∷`,`↸ᒷᓵᒷᒲʖᒷ∷`],Mx=[`ᒲ`,`ℸ̣`,`∴`,`ℸ̣`,`⎓`,`ᓭ`,`ᓭ`],Nx=class e{calendars={hebrew:this.create(new Dg,new Eg),jalali:this.create(new r_,new wx(Ex,Tx,`Jalali`)),islamicCivil:this.create(new Ig,new wx(Ox,Dx,`Islamic Civil`)),islamicUmalqura:this.create(new Wg,new wx(Ox,Dx,`Islamic Umm al-Qura`)),buddhist:this.create(new zh,new wx(Ax,kx,`Buddhist`)),ethiopian:this.create(new ng,new Hh),intergalactic:this.create(new Qm,new wx(jx,Mx,`Intergalactic Standard`))};create(e,t){return{calendar:e,i18n:t,date:e.getToday()}}static get $name(){return`docsDatepickerCalendarsPage`}static get $factory(){return{controller:e,controllerAs:`$`,templateUrl:`src/app/features/lib/pages/datepicker-calendars-page/datepicker-calendars-page.component.html`}}},Px=`<label class="form-label" for="custom-adapter-input">Date using <code>dd.mm.yyyy</code></label>
<div class="input-group" style="max-width: 22rem">
    <input id="custom-adapter-input" class="form-control" ng-model="example.date" ngb-datepicker date-adapter="example.adapter" parser-formatter="example.formatter">
    <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()" aria-label="Toggle calendar"><i class="bi bi-calendar3" aria-hidden="true"></i></button>
</div>
<p class="small text-body-secondary mt-3 mb-0">Application model: <code>{{ example.date }}</code></p>
`,Fx=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbDateAdapter, NgbDateParserFormatter, type NgbDateStruct } from "ngb-js";

class StringDateAdapter extends NgbDateAdapter<string> {
    fromModel(value: string | null): NgbDateStruct | null {
        if (!value) return null;
        const [year, month, day] = value.split("/").map(Number);
        return year && month && day ? { year, month, day } : null;
    }
    toModel(date: NgbDateStruct | null): string | null { return date ? \`\${date.year}/\${date.month}/\${date.day}\` : null; }
}

class DotDateParserFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct | null {
        const [day, month, year] = value.split(".").map(Number);
        return day && month && year ? { year, month, day } : null;
    }
    format(date: NgbDateStruct | null): string { return date ? \`\${String(date.day).padStart(2, "0")}.\${String(date.month).padStart(2, "0")}.\${date.year}\` : ""; }
}

export class DatepickerCustomAdapterComponent implements IComponentController {
    public readonly adapter = new StringDateAdapter();
    public readonly formatter = new DotDateParserFormatter();
    public date = "2026/8/24";
    static get $name() { return "docsDatepickerCustomAdapter" }
    static get $factory(): IComponentOptions { return { controller: DatepickerCustomAdapterComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/datepicker-custom-adapter/datepicker-custom-adapter.component.html" } }
}
`,Ix=`<ngb-datepicker ng-model="example.date"></ngb-datepicker>
<p class="small text-body-secondary mt-3 mb-0">Selected date: <code>{{ example.date | json }}</code></p>
`,Lx=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbDateStruct } from "ngb-js";

export class BasicDatepickerComponent implements IComponentController {
    public date: NgbDateStruct = { year: 2026, month: 8, day: 24 };
    static get $name() { return "docsBasicDatepicker" }
    static get $factory(): IComponentOptions {
        return { controller: BasicDatepickerComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/basic-datepicker/basic-datepicker.component.html" }
    }
}
`,Rx=`.docs-custom-day { position: relative; display: inline-flex; width: 2rem; height: 2rem; align-items: center; justify-content: center; border-radius: .25rem; }
.docs-custom-day.weekend { color: var(--bs-danger); }
.docs-custom-day.today { font-weight: 700; box-shadow: inset 0 0 0 1px var(--bs-primary); }
.docs-custom-day.selected { color: var(--bs-white); background: var(--bs-primary); }
.docs-custom-day.focused { outline: 2px solid rgba(var(--bs-primary-rgb), .4); outline-offset: 1px; }
.docs-custom-day .bi-dot { position: absolute; bottom: -.35rem; font-size: 1.25rem; }
`,zx=`<ng-template ng-ref="example.customDay" let-date let-data="data" let-selected="selected" let-today="today" let-focused="focused">
    <span class="docs-custom-day" ng-class="{ selected: selected, today: today, weekend: data.weekend, focused: focused }">
        {{ date.day }}
        <i ng-if="today" class="bi bi-dot" aria-hidden="true"></i>
    </span>
</ng-template>
<ngb-datepicker ng-model="example.date" day-template="example.customDay" day-template-data="example.dayData"></ngb-datepicker>
`,Bx=`import "@/features/lib/components/datepicker-custom-day/datepicker-custom-day.component.css";
import type { IComponentController, IComponentOptions } from "angular";
import type { NgbDateStruct } from "ngb-js";

export class DatepickerCustomDayComponent implements IComponentController {
    public date: NgbDateStruct = { year: 2026, month: 8, day: 24 };
    public dayData(date: NgbDateStruct) {
        const weekday = new Date(date.year, date.month - 1, date.day).getDay();
        return { weekend: weekday === 0 || weekday === 6 };
    }
    static get $name() { return "docsDatepickerCustomDay" }
    static get $factory(): IComponentOptions { return { controller: DatepickerCustomDayComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/datepicker-custom-day/datepicker-custom-day.component.html" } }
}
`,Vx=`.docs-month-layout { display: grid; grid-template-columns: repeat(2, max-content); gap: 1rem; }
@media (max-width: 575.98px) { .docs-month-layout { grid-template-columns: max-content; } }
`,Hx=`<ng-template ng-ref="example.content" let-datepicker>
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
`,Ux=`import "@/features/lib/components/datepicker-custom-month/datepicker-custom-month.component.css";
import type { IComponentController, IComponentOptions } from "angular";
import type { NgbDatepicker } from "ngb-js";

export class DatepickerCustomMonthComponent implements IComponentController {
    public previous(datepicker: NgbDatepicker) { datepicker.navigateTo(datepicker.calendar.getPrev(datepicker.state.firstDate, "m", 1)); }
    public next(datepicker: NgbDatepicker) { datepicker.navigateTo(datepicker.calendar.getNext(datepicker.state.firstDate, "m", 1)); }
    public today(datepicker: NgbDatepicker) { datepicker.navigateTo(datepicker.calendar.getToday()); }
    static get $name() { return "docsDatepickerCustomMonth" }
    static get $factory(): IComponentOptions { return { controller: DatepickerCustomMonthComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/datepicker-custom-month/datepicker-custom-month.component.html" } }
}
`,Wx=`<div class="form-check form-switch mb-3">
    <input id="disabled-datepicker-switch" class="form-check-input" type="checkbox" ng-model="example.disabled">
    <label class="form-check-label" for="disabled-datepicker-switch">Disable datepicker</label>
</div>
<ngb-datepicker ng-model="example.date" ng-disabled="example.disabled"></ngb-datepicker>
`,Gx=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbDateStruct } from "ngb-js";

export class DisabledDatepickerComponent implements IComponentController {
    public disabled = true;
    public date: NgbDateStruct = { year: 2026, month: 8, day: 24 };
    static get $name() { return "docsDisabledDatepicker" }
    static get $factory(): IComponentOptions { return { controller: DisabledDatepickerComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/disabled-datepicker/disabled-datepicker.component.html" } }
}
`,Kx=`<ng-template ng-ref="example.footer">
    <div class="d-flex gap-2 p-2 border-top bg-body-tertiary">
        <button type="button" class="btn btn-primary btn-sm" ng-click="example.today()">Today</button>
        <button type="button" class="btn btn-outline-secondary btn-sm ms-auto" ng-click="example.clear()">Clear</button>
    </div>
</ng-template>
<ngb-datepicker ng-model="example.date" footer-template="example.footer" ng-ref="example.datepicker" ng-ref-read="ngbDatepicker"></ngb-datepicker>
<p class="small text-body-secondary mt-3 mb-0">Selected date: <code>{{ example.date | json }}</code></p>
`,qx=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbDatepicker, NgbDateStruct } from "ngb-js";

export class DatepickerFooterComponent implements IComponentController {
    public date: NgbDateStruct | null = null;
    public datepicker?: NgbDatepicker;
    public today() { if (this.datepicker) this.date = this.datepicker.calendar.getToday(); }
    public clear() { this.date = null; }
    static get $name() { return "docsDatepickerFooter" }
    static get $factory(): IComponentOptions { return { controller: DatepickerFooterComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/datepicker-footer/datepicker-footer.component.html" } }
}
`,Jx=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div><p class="fw-semibold mb-1">Global defaults used by this example</p><p class="small text-body-secondary mb-0">Two months, arrow navigation, hidden outside days, week numbers and short weekday labels.</p></div>
</div>
<div class="overflow-auto pb-3"><ngb-datepicker ng-model="example.inlineDate"></ngb-datepicker></div>
<div class="input-group" style="max-width: 22rem">
    <input class="form-control" ng-model="example.popupDate" ngb-datepicker aria-label="Globally configured popup datepicker">
    <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()" aria-label="Toggle calendar"><i class="bi bi-calendar3"></i></button>
</div>
`,Yx=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbDatepickerConfig, NgbInputDatepickerConfig, type NgbDateStruct } from "ngb-js";

type DatepickerDefaults = Pick<NgbDatepickerConfig, "displayMonths" | "navigation" | "outsideDays" | "showWeekNumbers" | "weekdays">;

export class DatepickerGlobalComponent implements IComponentController {
    private readonly inlineDefaults: DatepickerDefaults;
    private readonly inputDefaults: DatepickerDefaults;
    public inlineDate: NgbDateStruct = { year: 2026, month: 8, day: 24 };
    public popupDate: NgbDateStruct = { year: 2026, month: 8, day: 24 };

    constructor(private readonly config: NgbDatepickerConfig, private readonly inputConfig: NgbInputDatepickerConfig) {
        this.inlineDefaults = this.capture(config);
        this.inputDefaults = this.capture(inputConfig);
        Object.assign(config, { displayMonths: 2, navigation: "arrows", outsideDays: "hidden", showWeekNumbers: true, weekdays: "short" });
        Object.assign(inputConfig, { displayMonths: 2, navigation: "arrows", outsideDays: "hidden", showWeekNumbers: true, weekdays: "short" });
    }
    public $postLink() { this.restore(); }
    public $onDestroy() { this.restore(); }
    private capture(config: NgbDatepickerConfig): DatepickerDefaults { return { displayMonths: config.displayMonths, navigation: config.navigation, outsideDays: config.outsideDays, showWeekNumbers: config.showWeekNumbers, weekdays: config.weekdays }; }
    private restore() { Object.assign(this.config, this.inlineDefaults); Object.assign(this.inputConfig, this.inputDefaults); }
    static get $name() { return "docsDatepickerGlobal" }
    static get $inject() { return [NgbDatepickerConfig.$name, NgbInputDatepickerConfig.$name] }
    static get $factory(): IComponentOptions { return { controller: DatepickerGlobalComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/datepicker-global/datepicker-global.component.html" } }
}
`,Xx=`<ngb-datepicker ng-model="example.date" i18n="example.i18n" weekdays="'short'"></ngb-datepicker>
`,Zx=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbDatepickerI18n, type NgbDateStruct } from "ngb-js";

class SpanishDatepickerI18n extends NgbDatepickerI18n {
    private readonly months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    private readonly weekdays = ["L", "M", "X", "J", "V", "S", "D"];
    getWeekdayLabel(weekday: number) { return this.weekdays[weekday - 1] ?? ""; }
    getMonthShortName(month: number) { return this.months[month - 1]?.slice(0, 3) ?? ""; }
    getMonthFullName(month: number) { return this.months[month - 1] ?? ""; }
    getDayAriaLabel(date: NgbDateStruct) { return \`\${date.day} de \${this.getMonthFullName(date.month)} de \${date.year}\`; }
}

export class DatepickerI18nComponent implements IComponentController {
    public readonly i18n = new SpanishDatepickerI18n();
    public date: NgbDateStruct = { year: 2026, month: 8, day: 24 };
    static get $name() { return "docsDatepickerI18n" }
    static get $factory(): IComponentOptions { return { controller: DatepickerI18nComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/datepicker-i18n/datepicker-i18n.component.html" } }
}
`,Qx=`<p class="small text-body-secondary">Focus the calendar and press <kbd>[</kbd> or <kbd>]</kbd> to navigate by month. The built-in arrow, Home, End and Page keys continue to work.</p>
<div ng-keydown="example.onKeydown($event)">
    <ngb-datepicker ng-model="example.date" ng-ref="example.datepicker" ng-ref-read="ngbDatepicker"></ngb-datepicker>
</div>
`,$x=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbDatepicker, NgbDateStruct } from "ngb-js";

export class DatepickerKeyboardComponent implements IComponentController {
    public date: NgbDateStruct = { year: 2026, month: 8, day: 24 };
    public datepicker?: NgbDatepicker;
    public onKeydown(event: KeyboardEvent | JQueryEventObject) {
        if (!this.datepicker || (event.key !== "[" && event.key !== "]")) return;
        const direction = event.key === "[" ? -1 : 1;
        const target = direction < 0
            ? this.datepicker.calendar.getPrev(this.datepicker.state.firstDate, "m", 1)
            : this.datepicker.calendar.getNext(this.datepicker.state.firstDate, "m", 1);
        this.datepicker.navigateTo(target);
        event.preventDefault();
        event.stopPropagation();
    }
    static get $name() { return "docsDatepickerKeyboard" }
    static get $factory(): IComponentOptions { return { controller: DatepickerKeyboardComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/datepicker-keyboard/datepicker-keyboard.component.html" } }
}
`,eS=`<div class="overflow-auto pb-2">
    <ngb-datepicker ng-model="example.date" display-months="2" outside-days="hidden"></ngb-datepicker>
</div>
`,tS=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbDateStruct } from "ngb-js";

export class MultipleMonthsDatepickerComponent implements IComponentController {
    public date: NgbDateStruct = { year: 2026, month: 8, day: 24 };
    static get $name() { return "docsMultipleMonthsDatepicker" }
    static get $factory(): IComponentOptions {
        return { controller: MultipleMonthsDatepickerComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/multiple-months-datepicker/multiple-months-datepicker.component.html" }
    }
}
`,nS=`<label class="form-label" for="popup-datepicker-input">Choose a date</label>
<div class="input-group" style="max-width: 22rem">
    <input id="popup-datepicker-input" class="form-control" ng-model="example.date" ngb-datepicker ng-focus="$datepicker.open()">
    <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()" aria-label="Toggle calendar">
        <i class="bi bi-calendar3" aria-hidden="true"></i>
    </button>
</div>
<p class="small text-body-secondary mt-3 mb-0">Selected date: <code>{{ example.date | json }}</code></p>
`,rS=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbDateStruct } from "ngb-js";

export class PopupDatepickerComponent implements IComponentController {
    public date: NgbDateStruct = { year: 2026, month: 8, day: 24 };
    static get $name() { return "docsPopupDatepicker" }
    static get $factory(): IComponentOptions {
        return { controller: PopupDatepickerComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popup-datepicker/popup-datepicker.component.html" }
    }
}
`,iS=`<div class="row g-3 align-items-end">
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
`,aS=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbDateStruct } from "ngb-js";

export class DatepickerPositionTargetComponent implements IComponentController {
    public date: NgbDateStruct | null = null;
    public readonly target = "#datepicker-custom-position-target";
    static get $name() { return "docsDatepickerPositionTarget" }
    static get $factory(): IComponentOptions { return { controller: DatepickerPositionTargetComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/datepicker-position-target/datepicker-position-target.component.html" } }
}
`,oS=`.docs-range-day { display: inline-flex; width: 2rem; height: 2rem; align-items: center; justify-content: center; border-radius: .25rem; }
.docs-range-day.range { background: var(--bs-primary); color: var(--bs-white); }
.docs-range-day.faded { background: rgba(var(--bs-primary-rgb), .2); color: var(--bs-body-color); }
.docs-range-day.focused { outline: 2px solid rgba(var(--bs-primary-rgb), .45); outline-offset: 1px; }
`,sS=`<ng-template ng-ref="example.day" let-date let-focused="focused">
    <span class="docs-range-day" ng-class="{ focused: focused, range: example.isRange(date), faded: example.isHovered(date) || example.isInside(date) }" ng-mouseenter="example.hoveredDate = date" ng-mouseleave="example.hoveredDate = null">{{ date.day }}</span>
</ng-template>
<div class="overflow-auto pb-2">
    <ngb-datepicker display-months="2" outside-days="hidden" day-template="example.day" date-select="example.select($event)"></ngb-datepicker>
</div>
<p class="small text-body-secondary mt-3 mb-0">From <code>{{ example.fromDate | json }}</code> to <code>{{ example.toDate | json }}</code></p>
`,cS=`import "@/features/lib/components/range-datepicker/range-datepicker.component.css";
import type { IComponentController, IComponentOptions } from "angular";
import { NgbCalendarGregorian, NgbDate } from "ngb-js";

export class RangeDatepickerComponent implements IComponentController {
    private readonly calendar = new NgbCalendarGregorian();
    public hoveredDate: NgbDate | null = null;
    public fromDate = this.calendar.getToday();
    public toDate: NgbDate | null = this.calendar.getNext(this.fromDate, "d", 10);

    public select(date: NgbDate) {
        if (!this.fromDate || this.toDate) {
            this.fromDate = date;
            this.toDate = null;
        } else if (date.after(this.fromDate)) {
            this.toDate = date;
        } else {
            this.fromDate = date;
        }
    }
    public isHovered(date: NgbDate) { return !!this.fromDate && !this.toDate && !!this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate); }
    public isInside(date: NgbDate) { return !!this.toDate && date.after(this.fromDate) && date.before(this.toDate); }
    public isRange(date: NgbDate) { return date.equals(this.fromDate) || (!!this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date); }

    static get $name() { return "docsRangeDatepicker" }
    static get $factory(): IComponentOptions {
        return { controller: RangeDatepickerComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/range-datepicker/range-datepicker.component.html" }
    }
}
`,lS=`.docs-popup-range-day { display: inline-flex; width: 2rem; height: 2rem; align-items: center; justify-content: center; border-radius: .25rem; }
.docs-popup-range-day.range { background: var(--bs-primary); color: var(--bs-white); }
.docs-popup-range-day.faded { background: rgba(var(--bs-primary-rgb), .2); color: var(--bs-body-color); }
.docs-popup-range-day.focused { outline: 2px solid rgba(var(--bs-primary-rgb), .45); outline-offset: 1px; }
`,uS=`<ng-template ng-ref="example.day" let-date let-focused="focused">
    <span class="docs-popup-range-day" ng-class="{ focused: focused, range: example.isRange(date), faded: example.isHovered(date) || example.isInside(date) }" ng-mouseenter="example.hoveredDate = date" ng-mouseleave="example.hoveredDate = null">{{ date.day }}</span>
</ng-template>
<div class="input-group" style="max-width: 24rem">
    <input class="form-control" ng-model="example.model" ngb-datepicker display-months="2" outside-days="hidden" auto-close="'outside'" day-template="example.day" date-select="example.select($event)" aria-label="Date range">
    <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()" aria-label="Toggle calendar"><i class="bi bi-calendar-range" aria-hidden="true"></i></button>
</div>
<p class="small text-body-secondary mt-3 mb-0">From <code>{{ example.fromDate | json }}</code> to <code>{{ example.toDate | json }}</code></p>
`,dS=`import "@/features/lib/components/range-popup-datepicker/range-popup-datepicker.component.css";
import type { IComponentController, IComponentOptions } from "angular";
import { NgbCalendarGregorian, NgbDate } from "ngb-js";

export class RangePopupDatepickerComponent implements IComponentController {
    private readonly calendar = new NgbCalendarGregorian();
    public hoveredDate: NgbDate | null = null;
    public fromDate = this.calendar.getToday();
    public toDate: NgbDate | null = this.calendar.getNext(this.fromDate, "d", 7);
    public model: NgbDate | null = this.fromDate;
    public select(date: NgbDate) {
        if (!this.fromDate || this.toDate) { this.fromDate = date; this.toDate = null; }
        else if (date.after(this.fromDate)) { this.toDate = date; }
        else { this.fromDate = date; }
        this.model = date;
    }
    public isHovered(date: NgbDate) { return !!this.fromDate && !this.toDate && !!this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate); }
    public isInside(date: NgbDate) { return !!this.toDate && date.after(this.fromDate) && date.before(this.toDate); }
    public isRange(date: NgbDate) { return date.equals(this.fromDate) || (!!this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date); }
    static get $name() { return "docsRangePopupDatepicker" }
    static get $factory(): IComponentOptions { return { controller: RangePopupDatepickerComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/range-popup-datepicker/range-popup-datepicker.component.html" } }
}
`,fS=class e{examples={basic:{html:Ix,typescript:Lx},popup:{html:nS,typescript:rS},multiple:{html:eS,typescript:tS},range:{html:sS,typescript:cS,css:oS},rangePopup:{html:uS,typescript:dS,css:lS},disabled:{html:Wx,typescript:Gx},adapter:{html:Px,typescript:Fx},i18n:{html:Xx,typescript:Zx},customDay:{html:zx,typescript:Bx,css:Rx},customMonth:{html:Hx,typescript:Ux,css:Vx},footer:{html:Kx,typescript:qx},position:{html:iS,typescript:aS},keyboard:{html:Qx,typescript:$x},global:{html:Jx,typescript:Yx}};static get $name(){return`docsDatepickerExamplesPage`}static get $factory(){return{controller:e,controllerAs:`$`,templateUrl:`src/app/features/lib/pages/datepicker-examples-page/datepicker-examples-page.component.html`}}},pS=class e{static get $name(){return`docsDropdownApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/dropdown-api-page/dropdown-api-page.component.html`,controllerAs:`$`}}},mS=`<div class="border rounded p-3 overflow-hidden">
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
`,hS=`<div class="d-flex flex-wrap gap-3">
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
`,gS=`<div class="form-check form-switch mb-3">
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
`,_S=`import type { IComponentController, IComponentOptions } from "angular";

export class DropdownDisabledItemsComponent implements IComponentController {
    public restricted = true;

    static get $name() {
        return "docsDropdownDisabledItems"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownDisabledItemsComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/dropdown-disabled-items/dropdown-disabled-items.component.html",
        }
    }
}
`,vS=`<div ngb-dropdown auto-close="'outside'">
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
`,yS=`import type { IComponentController, IComponentOptions } from "angular";

export class DropdownFormComponent implements IComponentController {
    public email = "";
    public remember = false;
    public submitted = false;

    public submit() {
        this.submitted = true;
    }

    static get $name() {
        return "docsDropdownForm"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownFormComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/dropdown-form/dropdown-form.component.html",
        }
    }
}
`,bS=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
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
`,xS=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbDropdownConfig } from "ngb-js";

export class DropdownGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<NgbDropdownConfig, "autoClose" | "container" | "placement">;

    constructor(private readonly config: NgbDropdownConfig) {
        this.initialConfig = {
            autoClose: config.autoClose,
            container: config.container,
            placement: config.placement,
        };

        config.autoClose = "outside";
        config.container = "body";
        config.placement = ["top-start", "bottom-start"];
    }

    public $onDestroy() {
        this.config.autoClose = this.initialConfig.autoClose;
        this.config.container = this.initialConfig.container;
        this.config.placement = this.initialConfig.placement;
    }

    static get $name() {
        return "docsDropdownGlobal"
    }

    static get $inject() {
        return [NgbDropdownConfig.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownGlobalComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/dropdown-global/dropdown-global.component.html",
        }
    }
}
`,SS=`<nav class="navbar bg-body-tertiary border rounded px-3">
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
`,CS=`<div class="d-flex flex-wrap gap-2 mb-3">
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
`,wS=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbDropdown } from "ngb-js";
import { ViewChild } from "ngjs-core";

export class ManualDropdownComponent implements IComponentController {
    @ViewChild("dropdown", { read: NgbDropdown, static: true })
    private dropdown!: NgbDropdown;

    public opened = false;

    public open() {
        this.dropdown.open();
    }

    public close() {
        this.dropdown.close();
    }

    public toggle() {
        this.dropdown.toggle();
    }

    static get $name() {
        return "docsManualDropdown"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ManualDropdownComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/manual-dropdown/manual-dropdown.component.html",
        }
    }
}
`,TS=`<div class="d-flex flex-wrap align-items-center gap-3 py-5">
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
`,ES=class e{examples={simple:{html:TS},manual:{html:CS,typescript:wS},buttonGroups:{html:hS},disabledItems:{html:gS,typescript:_S},form:{html:vS,typescript:yS},body:{html:mS},navbar:{html:SS},global:{html:bS,typescript:xS}};static get $name(){return`docsDropdownExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/dropdown-examples-page/dropdown-examples-page.component.html`,controllerAs:`$`}}},DS=class e{static get $name(){return`docsModalApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/modal-api-page/modal-api-page.component.html`,controllerAs:`$`}}},OS=`<button type="button" class="btn btn-primary" ng-click="example.open()">Open component modal</button>
<p class="small text-body-secondary mt-2 mb-0">{{ example.lastResult }}</p>
`,kS=`import type { IComponentController, IComponentOptions } from "angular";
import { ModalDemoContentComponent } from "@/features/lib/components/modal-demo-content/modal-demo-content.component"
import { NgbModal } from "ngb-js";

export class ModalComponentContentComponent implements IComponentController {
    public lastResult = "No result yet";

    constructor(private readonly modal: NgbModal) {}

    public async open() {
        const modalRef = await this.modal.open(ModalDemoContentComponent.$name, {
            bindings: {
                title: "Component as content",
                description: "NgbActiveModal is provided directly to the content component.",
            },
        });

        modalRef.closed.subscribe((result) => {
            this.lastResult = \`Closed with: \${result}\`;
        });

        modalRef.dismissed.subscribe((reason) => {
            this.lastResult = \`Dismissed with: \${reason}\`;
        });
    }

    static get $name() {
        return "docsModalComponentContent"
    }

    static get $inject() {
        return [NgbModal.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalComponentContentComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/modal-component-content/modal-component-content.component.html",
        }
    }
}
`,AS=`<button type="button" class="btn btn-primary" ng-click="example.open()">Open default modal</button>

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
`,jS=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbModal } from "ngb-js";
import { TemplateRef, ViewChild } from "ngjs-core";

export class ModalDefaultComponent implements IComponentController {
    @ViewChild("content", { read: TemplateRef, static: true })
    private content!: TemplateRef<unknown>;

    constructor(private readonly modal: NgbModal) {}

    public open() {
        this.modal.open(this.content);
    }

    static get $name() {
        return "docsModalDefault"
    }

    static get $inject() {
        return [NgbModal.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalDefaultComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/modal-default/modal-default.component.html",
        }
    }
}
`,MS=`<div class="modal-header">
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
`,NS=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbActiveModal } from "ngb-js";

export class ModalDemoContentComponent implements IComponentController {
    public ngbActiveModal!: NgbActiveModal;
    public title = "Component modal";
    public description = "This modal receives a component as its content.";
    public longContent = false;
    public readonly items = Array.from({ length: 24 }, (_, index) => \`Scrollable content row \${index + 1}\`);

    static get $name() {
        return "docsModalDemoContent"
    }

    static get $factory(): IComponentOptions {
        return {
            bindings: {
                ngbActiveModal: "<",
                title: "<?",
                description: "<?",
                longContent: "<?",
            },
            controller: ModalDemoContentComponent,
            controllerAs: "$",
            templateUrl: "src/app/features/lib/components/modal-demo-content/modal-demo-content.component.html",
        }
    }
}
`,PS=`<p class="text-body-secondary">
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
`,FS=`import type { IComponentController, IComponentOptions } from "angular";
import { ModalFocusContentComponent } from "@/features/lib/components/modal-focus-content/modal-focus-content.component"
import { NgbModal } from "ngb-js";

export class ModalFocusComponent implements IComponentController {
    constructor(private readonly modal: NgbModal) {}

    public openDefaultFocus() {
        this.modal.open(ModalFocusContentComponent.$name, {
            ariaLabelledBy: "modal-focus-title",
            bindings: { autofocus: false },
        });
    }

    public openCustomFocus() {
        this.modal.open(ModalFocusContentComponent.$name, {
            ariaLabelledBy: "modal-focus-title",
            bindings: { autofocus: true },
        });
    }

    static get $name() {
        return "docsModalFocus"
    }

    static get $inject() {
        return [NgbModal.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalFocusComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/modal-focus/modal-focus.component.html",
        }
    }
}
`,IS=`<div class="modal-header">
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
`,LS=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbActiveModal } from "ngb-js";

export class ModalFocusContentComponent implements IComponentController {
    public ngbActiveModal!: NgbActiveModal;
    public autofocus = false;

    static get $name() {
        return "docsModalFocusContent"
    }

    static get $factory(): IComponentOptions {
        return {
            bindings: {
                ngbActiveModal: "<",
                autofocus: "<?",
            },
            controller: ModalFocusContentComponent,
            controllerAs: "$",
            templateUrl: "src/app/features/lib/components/modal-focus-content/modal-focus-content.component.html",
        }
    }
}
`,RS=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
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
`,zS=`import type { IComponentController, IComponentOptions } from "angular";
import { ModalDemoContentComponent } from "@/features/lib/components/modal-demo-content/modal-demo-content.component"
import { NgbModal, NgbModalConfig } from "ngb-js";

export class ModalGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<NgbModalConfig, "backdrop" | "centered" | "keyboard" | "size">;

    constructor(
        private readonly modal: NgbModal,
        private readonly config: NgbModalConfig,
    ) {
        this.initialConfig = {
            backdrop: config.backdrop,
            centered: config.centered,
            keyboard: config.keyboard,
            size: config.size,
        };

    }

    public async open() {
        this.applyConfig();

        try {
            await this.modal.open(ModalDemoContentComponent.$name, {
                bindings: {
                    title: "Globally configured modal",
                    description: "This modal is centered, large and cannot be dismissed with Escape or a backdrop click.",
                },
            });
        } finally {
            this.restoreConfig();
        }
    }

    public $onDestroy() {
        this.restoreConfig();
    }

    private applyConfig() {
        this.config.backdrop = "static";
        this.config.centered = true;
        this.config.keyboard = false;
        this.config.size = "lg";
    }

    private restoreConfig() {
        this.config.backdrop = this.initialConfig.backdrop;
        this.config.centered = this.initialConfig.centered;
        this.config.keyboard = this.initialConfig.keyboard;
        this.config.size = this.initialConfig.size;
    }

    static get $name() {
        return "docsModalGlobal"
    }

    static get $inject() {
        return [NgbModal.$name, NgbModalConfig.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalGlobalComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/modal-global/modal-global.component.html",
        }
    }
}
`,BS=`.modal-window-custom .modal-content {
    border-top: 0.3rem solid var(--bs-primary);
}

.modal-static-backdrop,
.modal-updated-backdrop {
    --bs-backdrop-bg: var(--bs-danger);
    --bs-backdrop-opacity: 0.35;
}

.modal-dialog-custom .modal-content,
.modal-updated-dialog .modal-content {
    border-radius: 1.5rem;
    box-shadow: var(--bs-box-shadow-lg);
}

.modal-updated-window .modal-content {
    border-color: var(--bs-success);
}
`,VS=`<div class="d-flex flex-wrap gap-2">
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
`,HS=`import "@/features/lib/components/modal-options/modal-options.component.css";
import type { IComponentController, IComponentOptions } from "angular";
import { ModalDemoContentComponent } from "@/features/lib/components/modal-demo-content/modal-demo-content.component"
import { NgbModal, type NgbModalOptions } from "ngb-js";

export class ModalOptionsComponent implements IComponentController {
    constructor(private readonly modal: NgbModal) {}

    public openCustomWindow() {
        this.open("Custom window class", { windowClass: "modal-window-custom" });
    }

    public openStaticBackdrop() {
        this.open("Static custom backdrop", {
            backdrop: "static",
            backdropClass: "modal-static-backdrop",
            keyboard: false,
        });
    }

    public openSmall() {
        this.open("Small modal", { size: "sm" });
    }

    public openLarge() {
        this.open("Large modal", { size: "lg" });
    }

    public openExtraLarge() {
        this.open("Extra large modal", { size: "xl" });
    }

    public openFullscreen() {
        this.open("Fullscreen modal", { fullscreen: true });
    }

    public openCentered() {
        this.open("Vertically centered modal", { centered: true });
    }

    public openScrollable() {
        this.open("Scrollable modal", { scrollable: true, size: "lg" }, true);
    }

    public openCustomDialog() {
        this.open("Custom dialog class", { modalDialogClass: "modal-dialog-custom" });
    }

    private open(title: string, options: NgbModalOptions, longContent = false) {
        this.modal.open(ModalDemoContentComponent.$name, {
            ...options,
            bindings: {
                title,
                description: "These values are applied only to this modal instance.",
                longContent,
            },
        });
    }

    static get $name() {
        return "docsModalOptions"
    }

    static get $inject() {
        return [NgbModal.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalOptionsComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/modal-options/modal-options.component.html",
        }
    }
}
`,US=`<button type="button" class="btn btn-primary" ng-click="example.openStack()">Open three modals</button>
`,WS=`import type { IComponentController, IComponentOptions } from "angular";
import { ModalStackedContentComponent } from "@/features/lib/components/modal-stacked-content/modal-stacked-content.component"
import { NgbModal } from "ngb-js";

export class ModalStackedComponent implements IComponentController {
    constructor(private readonly modal: NgbModal) {}

    public async openStack() {
        for (let level = 1; level <= 3; level++) {
            await this.modal.open(ModalStackedContentComponent.$name, {
                bindings: {
                    level,
                },
            });
        }
    }

    static get $name() {
        return "docsModalStacked"
    }

    static get $inject() {
        return [NgbModal.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalStackedComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/modal-stacked/modal-stacked.component.html",
        }
    }
}
`,GS=`<div class="modal-header">
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
`,KS=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbModal, type NgbActiveModal } from "ngb-js";

export class ModalStackedContentComponent implements IComponentController {
    public ngbActiveModal!: NgbActiveModal;
    public level = 1;

    constructor(private readonly modal: NgbModal) {}

    public dismissAll() {
        this.modal.dismissAll("Dismiss all");
    }

    static get $name() {
        return "docsModalStackedContent"
    }

    static get $inject() {
        return [NgbModal.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            bindings: {
                ngbActiveModal: "<",
                level: "<?",
            },
            controller: ModalStackedContentComponent,
            controllerAs: "$",
            templateUrl: "src/app/features/lib/components/modal-stacked-content/modal-stacked-content.component.html",
        }
    }
}
`,qS=`<button type="button" class="btn btn-primary" ng-click="example.open()">Open updatable modal</button>
`,JS=`import type { IComponentController, IComponentOptions } from "angular";
import { ModalUpdatableContentComponent } from "@/features/lib/components/modal-updatable-content/modal-updatable-content.component"
import { NgbModal } from "ngb-js";

export class ModalUpdatableComponent implements IComponentController {
    constructor(private readonly modal: NgbModal) {}

    public open() {
        this.modal.open(ModalUpdatableContentComponent.$name, {
            ariaLabelledBy: "updatable-modal-title",
            ariaDescribedBy: "updatable-modal-description",
            size: "sm",
        });
    }

    static get $name() {
        return "docsModalUpdatable"
    }

    static get $inject() {
        return [NgbModal.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalUpdatableComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/modal-updatable/modal-updatable.component.html",
        }
    }
}
`,YS=`<div class="modal-header">
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
`,XS=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbActiveModal, NgbModalUpdatableOptions } from "ngb-js";

export class ModalUpdatableContentComponent implements IComponentController {
    public ngbActiveModal!: NgbActiveModal;
    public ariaReferences = true;
    public centered = false;
    public fullscreen = false;
    public customBackdrop = false;
    public size: NgbModalUpdatableOptions["size"] = "sm";
    public customWindow = false;
    public customDialog = false;

    public toggleAriaReferences() {
        this.ariaReferences = !this.ariaReferences;
        this.ngbActiveModal.update({
            ariaLabelledBy: this.ariaReferences ? "updatable-modal-title" : "",
            ariaDescribedBy: this.ariaReferences ? "updatable-modal-description" : "",
        });
    }

    public toggleCentered() {
        this.centered = !this.centered;
        this.ngbActiveModal.update({ centered: this.centered });
    }

    public toggleFullscreen() {
        this.fullscreen = !this.fullscreen;
        this.ngbActiveModal.update({ fullscreen: this.fullscreen });
    }

    public toggleBackdropClass() {
        this.customBackdrop = !this.customBackdrop;
        this.ngbActiveModal.update({ backdropClass: this.customBackdrop ? "modal-updated-backdrop" : "" });
    }

    public cycleSize() {
        const sizes: Array<NgbModalUpdatableOptions["size"]> = ["sm", "lg", "xl"];
        this.size = sizes[(sizes.indexOf(this.size) + 1) % sizes.length];
        this.ngbActiveModal.update({ size: this.size });
    }

    public toggleWindowClass() {
        this.customWindow = !this.customWindow;
        this.ngbActiveModal.update({ windowClass: this.customWindow ? "modal-updated-window" : "" });
    }

    public toggleDialogClass() {
        this.customDialog = !this.customDialog;
        this.ngbActiveModal.update({ modalDialogClass: this.customDialog ? "modal-updated-dialog" : "" });
    }

    static get $name() {
        return "docsModalUpdatableContent"
    }

    static get $factory(): IComponentOptions {
        return {
            bindings: {
                ngbActiveModal: "<",
            },
            controller: ModalUpdatableContentComponent,
            controllerAs: "$",
            templateUrl: "src/app/features/lib/components/modal-updatable-content/modal-updatable-content.component.html",
        }
    }
}
`,ZS=class e{examples={defaults:{html:AS,typescript:jS},componentContent:{html:`${OS}\n\n<!-- modal-demo-content.component.html -->\n${MS}`,typescript:`${kS}\n\n// modal-demo-content.component.ts\n${NS}`},focus:{html:`${PS}\n\n<!-- modal-focus-content.component.html -->\n${IS}`,typescript:`${FS}\n\n// modal-focus-content.component.ts\n${LS}`},options:{html:VS,typescript:HS,css:BS},updatable:{html:`${qS}\n\n<!-- modal-updatable-content.component.html -->\n${YS}`,typescript:`${JS}\n\n// modal-updatable-content.component.ts\n${XS}`,css:BS},stacked:{html:`${US}\n\n<!-- modal-stacked-content.component.html -->\n${GS}`,typescript:`${WS}\n\n// modal-stacked-content.component.ts\n${KS}`},global:{html:RS,typescript:zS}};static get $name(){return`docsModalExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/modal-examples-page/modal-examples-page.component.html`,controllerAs:`$`}}},QS=class e{static get $name(){return`docsNavApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/nav-api-page/nav-api-page.component.html`,controllerAs:`$`}}},$S=`<nav
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
`,eC=`import type { IComponentController, IComponentOptions } from "angular";

export class AlternativeNavComponent implements IComponentController {
    public activeId = "alternative-home";

    static get $name() {
        return "docsAlternativeNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlternativeNavComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/alternative-nav/alternative-nav.component.html",
        }
    }
}
`,tC=`.nav-custom {
    gap: 0.5rem;
    padding: 0.35rem;
    border: 1px solid var(--bs-border-color);
    border-radius: var(--bs-border-radius-pill);
    background: var(--bs-tertiary-bg);
}

.nav-custom .nav-link {
    border-radius: var(--bs-border-radius-pill);
    color: var(--bs-secondary-color);
}

.nav-custom .nav-link.active {
    color: var(--bs-primary-text-emphasis);
    background: var(--bs-primary-bg-subtle);
    box-shadow: var(--bs-box-shadow-sm);
}
`,nC=`<div
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
`,rC=`import "@/features/lib/components/custom-nav/custom-nav.component.css";
import type { IComponentController, IComponentOptions } from "angular";

export class CustomNavComponent implements IComponentController {
    public activeId = "custom-weekly";

    static get $name() {
        return "docsCustomNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CustomNavComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/custom-nav/custom-nav.component.html",
        }
    }
}
`,iC=`<div class="d-flex flex-wrap gap-2 mb-3">
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
`,aC=`import type { IComponentController, IComponentOptions } from "angular";

interface DynamicNavItem {
    id: string;
    title: string;
}

export class DynamicNavComponent implements IComponentController {
    public items: DynamicNavItem[] = [
        { id: "dynamic-1", title: "Tab 1" },
        { id: "dynamic-2", title: "Tab 2" },
        { id: "dynamic-3", title: "Tab 3" },
    ];
    public activeId = "dynamic-1";
    private nextId = 4;

    public add() {
        const item = {
            id: \`dynamic-\${this.nextId}\`,
            title: \`Tab \${this.nextId}\`,
        };

        this.nextId++;
        this.items.push(item);
        this.activeId = item.id;
    }

    public removeActive() {
        if (this.items.length === 1) return;

        const activeIndex = this.items.findIndex(({ id }) => id === this.activeId);
        const replacement = this.items[activeIndex === 0 ? 1 : activeIndex - 1];

        this.activeId = replacement.id;
        this.items = this.items.filter(({ id }) => id !== this.items[activeIndex].id);
    }

    static get $name() {
        return "docsDynamicNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DynamicNavComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/dynamic-nav/dynamic-nav.component.html",
        }
    }
}
`,oC=`<ul
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
`,sC=`import type { IComponentController, IComponentOptions } from "angular";

export class KeepContentNavComponent implements IComponentController {
    public activeId = "keep-editor";
    public draft = "This value survives tab changes.";

    static get $name() {
        return "docsKeepContentNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: KeepContentNavComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/keep-content-nav/keep-content-nav.component.html",
        }
    }
}
`,cC=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
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
`,lC=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbNavConfig } from "ngb-js";

export class NavGlobalComponent implements IComponentController {
    public activeId = "global-account";

    private readonly initialConfig: Pick<
        NgbNavConfig,
        "animation" | "destroyOnHide" | "keyboard" | "orientation" | "roles"
    >;

    constructor(private readonly config: NgbNavConfig) {
        this.initialConfig = {
            animation: config.animation,
            destroyOnHide: config.destroyOnHide,
            keyboard: config.keyboard,
            orientation: config.orientation,
            roles: config.roles,
        };

        config.animation = false;
        config.destroyOnHide = false;
        config.keyboard = "changeWithArrows";
        config.orientation = "vertical";
        config.roles = "tablist";
    }

    public $postLink() {
        this.restoreConfig();
    }

    public $onDestroy() {
        this.restoreConfig();
    }

    private restoreConfig() {
        this.config.animation = this.initialConfig.animation;
        this.config.destroyOnHide = this.initialConfig.destroyOnHide;
        this.config.keyboard = this.initialConfig.keyboard;
        this.config.orientation = this.initialConfig.orientation;
        this.config.roles = this.initialConfig.roles;
    }

    static get $name() {
        return "docsNavGlobal"
    }

    static get $inject() {
        return [NgbNavConfig.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: NavGlobalComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/nav-global/nav-global.component.html",
        }
    }
}
`,uC=`<div class="d-flex flex-wrap gap-2 mb-3">
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
`,dC=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbNav } from "ngb-js";
import { ViewChild } from "ngjs-core";

export class SelectingNavComponent implements IComponentController {
    @ViewChild("nav", { read: NgbNav, static: true })
    public nav!: NgbNav;

    public activeId = "selecting-first";

    public select(id: string) {
        this.nav.select(id);
    }

    static get $name() {
        return "docsSelectingNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: SelectingNavComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/selecting-nav/selecting-nav.component.html",
        }
    }
}
`,fC=`<ul
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
`,pC=`import type { IComponentController, IComponentOptions } from "angular";

export class SimpleNavComponent implements IComponentController {
    public activeId = "simple-overview";

    static get $name() {
        return "docsSimpleNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: SimpleNavComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/simple-nav/simple-nav.component.html",
        }
    }
}
`,mC=`<div class="d-flex align-items-start gap-3">
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
`,hC=`import type { IComponentController, IComponentOptions } from "angular";

export class VerticalNavComponent implements IComponentController {
    public activeId = "vertical-profile";

    static get $name() {
        return "docsVerticalNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: VerticalNavComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/vertical-nav/vertical-nav.component.html",
        }
    }
}
`,gC=class e{examples={simple:{html:fC,typescript:pC},alternative:{html:$S,typescript:eC},vertical:{html:mC,typescript:hC},selecting:{html:uC,typescript:dC},keepContent:{html:oC,typescript:sC},dynamic:{html:iC,typescript:aC},custom:{html:nC,typescript:rC,css:tC},global:{html:cC,typescript:lC}};static get $name(){return`docsNavExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/nav-examples-page/nav-examples-page.component.html`,controllerAs:`$`}}},_C=class e{static get $name(){return`docsOffcanvasApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/offcanvas-api-page/offcanvas-api-page.component.html`,controllerAs:`$`}}},vC=`<button type="button" class="btn btn-primary" ng-click="example.open()">Open component offcanvas</button>
<p class="small text-body-secondary mt-2 mb-0">{{ example.lastResult }}</p>
`,yC=`import type { IComponentController, IComponentOptions } from "angular";
import { OffcanvasDemoContentComponent } from "@/features/lib/components/offcanvas-demo-content/offcanvas-demo-content.component"
import { NgbOffcanvas } from "ngb-js";

export class OffcanvasComponentContentComponent implements IComponentController {
    public lastResult = "No result yet";

    constructor(private readonly offcanvas: NgbOffcanvas) {}

    public async open() {
        const offcanvasRef = await this.offcanvas.open(OffcanvasDemoContentComponent.$name);

        offcanvasRef.closed.subscribe((result) => {
            this.lastResult = \`Closed with: \${result}\`;
        });

        offcanvasRef.dismissed.subscribe((reason) => {
            this.lastResult = \`Dismissed with: \${reason}\`;
        });
    }

    static get $name() {
        return "docsOffcanvasComponentContent"
    }

    static get $inject() {
        return [NgbOffcanvas.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasComponentContentComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/offcanvas-component-content/offcanvas-component-content.component.html",
        }
    }
}
`,bC=`<button type="button" class="btn btn-primary" ng-click="example.open()">Open default offcanvas</button>

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
`,xC=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbOffcanvas } from "ngb-js";
import { TemplateRef, ViewChild } from "ngjs-core";

export class OffcanvasDefaultComponent implements IComponentController {
    @ViewChild("content", { read: TemplateRef, static: true })
    private content!: TemplateRef<unknown>;

    constructor(private readonly offcanvas: NgbOffcanvas) {}

    public open() {
        this.offcanvas.open(this.content);
    }

    static get $name() {
        return "docsOffcanvasDefault"
    }

    static get $inject() {
        return [NgbOffcanvas.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasDefaultComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/offcanvas-default/offcanvas-default.component.html",
        }
    }
}
`,SC=`<div class="offcanvas-header">
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
`,CC=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbActiveOffcanvas } from "ngb-js";

export class OffcanvasDemoContentComponent implements IComponentController {
    public ngbActiveOffcanvas!: NgbActiveOffcanvas;

    static get $name() {
        return "docsOffcanvasDemoContent"
    }

    static get $factory(): IComponentOptions {
        return {
            bindings: {
                ngbActiveOffcanvas: "<",
            },
            controller: OffcanvasDemoContentComponent,
            controllerAs: "$",
            templateUrl: "src/app/features/lib/components/offcanvas-demo-content/offcanvas-demo-content.component.html",
        }
    }
}
`,wC=`<p class="text-body-secondary">
    The first focusable element receives focus by default. Add <code>ngbAutofocus</code> to choose another target.
</p>

<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-primary" ng-click="example.openDefaultFocus()">Focus first element</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCustomFocus()">Use ngbAutofocus</button>
</div>
`,TC=`import type { IComponentController, IComponentOptions } from "angular";
import { OffcanvasFocusContentComponent } from "@/features/lib/components/offcanvas-focus-content/offcanvas-focus-content.component"
import { NgbOffcanvas } from "ngb-js";

export class OffcanvasFocusComponent implements IComponentController {
    constructor(private readonly offcanvas: NgbOffcanvas) {}

    public openDefaultFocus() {
        this.offcanvas.open(OffcanvasFocusContentComponent.$name, {
            ariaLabelledBy: "offcanvas-focus-title",
            bindings: { autofocus: false },
        });
    }

    public openCustomFocus() {
        this.offcanvas.open(OffcanvasFocusContentComponent.$name, {
            ariaLabelledBy: "offcanvas-focus-title",
            bindings: { autofocus: true },
        });
    }

    static get $name() {
        return "docsOffcanvasFocus"
    }

    static get $inject() {
        return [NgbOffcanvas.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasFocusComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/offcanvas-focus/offcanvas-focus.component.html",
        }
    }
}
`,EC=`<div class="offcanvas-header">
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
`,DC=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbActiveOffcanvas } from "ngb-js";

export class OffcanvasFocusContentComponent implements IComponentController {
    public ngbActiveOffcanvas!: NgbActiveOffcanvas;
    public autofocus = false;

    static get $name() {
        return "docsOffcanvasFocusContent"
    }

    static get $factory(): IComponentOptions {
        return {
            bindings: {
                ngbActiveOffcanvas: "<",
                autofocus: "<?",
            },
            controller: OffcanvasFocusContentComponent,
            controllerAs: "$",
            templateUrl: "src/app/features/lib/components/offcanvas-focus-content/offcanvas-focus-content.component.html",
        }
    }
}
`,OC=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
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
`,kC=`import type { IComponentController, IComponentOptions } from "angular";
import { OffcanvasDemoContentComponent } from "@/features/lib/components/offcanvas-demo-content/offcanvas-demo-content.component"
import { NgbOffcanvas, NgbOffcanvasConfig } from "ngb-js";

export class OffcanvasGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<
        NgbOffcanvasConfig,
        "backdrop" | "keyboard" | "position" | "scroll"
    >;

    constructor(
        private readonly offcanvas: NgbOffcanvas,
        private readonly config: NgbOffcanvasConfig,
    ) {
        this.initialConfig = {
            backdrop: config.backdrop,
            keyboard: config.keyboard,
            position: config.position,
            scroll: config.scroll,
        };
    }

    public async open() {
        this.applyConfig();

        try {
            await this.offcanvas.open(OffcanvasDemoContentComponent.$name);
        } finally {
            this.restoreConfig();
        }
    }

    public $onDestroy() {
        this.restoreConfig();
    }

    private applyConfig() {
        this.config.backdrop = "static";
        this.config.keyboard = false;
        this.config.position = "end";
        this.config.scroll = true;
    }

    private restoreConfig() {
        this.config.backdrop = this.initialConfig.backdrop;
        this.config.keyboard = this.initialConfig.keyboard;
        this.config.position = this.initialConfig.position;
        this.config.scroll = this.initialConfig.scroll;
    }

    static get $name() {
        return "docsOffcanvasGlobal"
    }

    static get $inject() {
        return [NgbOffcanvas.$name, NgbOffcanvasConfig.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasGlobalComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/offcanvas-global/offcanvas-global.component.html",
        }
    }
}
`,AC=`.offcanvas-panel-custom {
    --bs-offcanvas-width: 28rem;
    border-color: var(--bs-primary-border-subtle);
}

.offcanvas-static-backdrop {
    --bs-backdrop-bg: var(--bs-danger);
    --bs-backdrop-opacity: 0.35;
}
`,jC=`<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCustomPanel()">Custom panel class</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openStaticBackdrop()">Static backdrop</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openStart()">Start</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openEnd()">End</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openTop()">Top</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openBottom()">Bottom</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openScrollableBody()">Body scrolling</button>
</div>
`,MC=`import "@/features/lib/components/offcanvas-options/offcanvas-options.component.css";
import type { IComponentController, IComponentOptions } from "angular";
import { OffcanvasDemoContentComponent } from "@/features/lib/components/offcanvas-demo-content/offcanvas-demo-content.component"
import { NgbOffcanvas, type NgbOffcanvasOptions } from "ngb-js";

export class OffcanvasOptionsComponent implements IComponentController {
    constructor(private readonly offcanvas: NgbOffcanvas) {}

    public openCustomPanel() {
        this.open({ panelClass: "offcanvas-panel-custom" });
    }

    public openStaticBackdrop() {
        this.open({
            backdrop: "static",
            backdropClass: "offcanvas-static-backdrop",
            keyboard: false,
        });
    }

    public openStart() {
        this.open({ position: "start" });
    }

    public openEnd() {
        this.open({ position: "end" });
    }

    public openTop() {
        this.open({ position: "top" });
    }

    public openBottom() {
        this.open({ position: "bottom" });
    }

    public openScrollableBody() {
        this.open({ scroll: true, backdrop: false });
    }

    private open(options: NgbOffcanvasOptions) {
        this.offcanvas.open(OffcanvasDemoContentComponent.$name, options);
    }

    static get $name() {
        return "docsOffcanvasOptions"
    }

    static get $inject() {
        return [NgbOffcanvas.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasOptionsComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/offcanvas-options/offcanvas-options.component.html",
        }
    }
}
`,NC=class e{examples={defaults:{html:bC,typescript:xC},componentContent:{html:`${vC}\n\n<!-- offcanvas-demo-content.component.html -->\n${SC}`,typescript:`${yC}\n\n// offcanvas-demo-content.component.ts\n${CC}`},focus:{html:`${wC}\n\n<!-- offcanvas-focus-content.component.html -->\n${EC}`,typescript:`${TC}\n\n// offcanvas-focus-content.component.ts\n${DC}`},options:{html:jC,typescript:MC,css:AC},global:{html:OC,typescript:kC}};static get $name(){return`docsOffcanvasExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/offcanvas-examples-page/offcanvas-examples-page.component.html`,controllerAs:`$`}}},PC=class e{static get $name(){return`docsPaginationApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/pagination-api-page/pagination-api-page.component.html`,controllerAs:`$`}}},FC=`<div class="vstack gap-4">
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
`,IC=`import type { IComponentController, IComponentOptions } from "angular";

export class AdvancedPaginationComponent implements IComponentController {
    public paginatedPage = 7;
    public rotatedPage = 12;
    public compactPage = 12;

    public selectPaginatedPage(page: number) { this.paginatedPage = page; }
    public selectRotatedPage(page: number) { this.rotatedPage = page; }
    public selectCompactPage(page: number) { this.compactPage = page; }

    static get $name() {
        return "docsAdvancedPagination"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AdvancedPaginationComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/advanced-pagination/advanced-pagination.component.html",
        }
    }
}
`,LC=`<ngb-pagination
    collection-size="70"
    page="example.page"
    page-change="example.selectPage($event)">
</ngb-pagination>

<p class="small text-body-secondary mb-0">Current page: <strong>{{ example.page }}</strong></p>
`,RC=`import type { IComponentController, IComponentOptions } from "angular";

export class BasicPaginationComponent implements IComponentController {
    public page = 4;

    public selectPage(page: number) {
        this.page = page;
    }

    static get $name() {
        return "docsBasicPagination"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: BasicPaginationComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/basic-pagination/basic-pagination.component.html",
        }
    }
}
`,zC=`<ngb-pagination
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
`,BC=`import type { IComponentController, IComponentOptions } from "angular";

export class CustomPaginationComponent implements IComponentController {
    public page = 3;

    public selectPage(page: number) {
        this.page = page;
    }

    static get $name() {
        return "docsCustomPagination"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CustomPaginationComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/custom-pagination/custom-pagination.component.html",
        }
    }
}
`,VC=`<div class="form-check form-switch mb-3">
    <input class="form-check-input" type="checkbox" role="switch" id="pagination-disabled" ng-model="example.disabled">
    <label class="form-check-label" for="pagination-disabled">Disabled</label>
</div>

<ngb-pagination
    collection-size="70"
    page="example.page"
    page-change="example.selectPage($event)"
    ng-disabled="example.disabled">
</ngb-pagination>
`,HC=`import type { IComponentController, IComponentOptions } from "angular";

export class DisabledPaginationComponent implements IComponentController {
    public page = 3;
    public disabled = true;

    public selectPage(page: number) {
        this.page = page;
    }

    static get $name() {
        return "docsDisabledPagination"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DisabledPaginationComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/disabled-pagination/disabled-pagination.component.html",
        }
    }
}
`,UC=`<div class="vstack gap-4">
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
`,WC=`import type { IComponentController, IComponentOptions } from "angular";

export class PaginationAlignmentComponent implements IComponentController {
    public startPage = 2;
    public centerPage = 2;
    public endPage = 2;

    public selectStartPage(page: number) { this.startPage = page; }
    public selectCenterPage(page: number) { this.centerPage = page; }
    public selectEndPage(page: number) { this.endPage = page; }

    static get $name() {
        return "docsPaginationAlignment"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PaginationAlignmentComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/pagination-alignment/pagination-alignment.component.html",
        }
    }
}
`,GC=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
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
`,KC=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbPaginationConfig } from "ngb-js";

export class PaginationGlobalComponent implements IComponentController {
    public page = 8;

    private readonly initialConfig: Pick<
        NgbPaginationConfig,
        "boundaryLinks" | "directionLinks" | "maxSize" | "rotate" | "size"
    >;

    constructor(private readonly config: NgbPaginationConfig) {
        this.initialConfig = {
            boundaryLinks: config.boundaryLinks,
            directionLinks: config.directionLinks,
            maxSize: config.maxSize,
            rotate: config.rotate,
            size: config.size,
        };

        config.boundaryLinks = true;
        config.directionLinks = false;
        config.maxSize = 5;
        config.rotate = true;
        config.size = "sm";
    }

    public selectPage(page: number) {
        this.page = page;
    }

    public $postLink() {
        this.restoreConfig();
    }

    public $onDestroy() {
        this.restoreConfig();
    }

    private restoreConfig() {
        this.config.boundaryLinks = this.initialConfig.boundaryLinks;
        this.config.directionLinks = this.initialConfig.directionLinks;
        this.config.maxSize = this.initialConfig.maxSize;
        this.config.rotate = this.initialConfig.rotate;
        this.config.size = this.initialConfig.size;
    }

    static get $name() {
        return "docsPaginationGlobal"
    }

    static get $inject() {
        return [NgbPaginationConfig.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PaginationGlobalComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/pagination-global/pagination-global.component.html",
        }
    }
}
`,qC=`<div class="vstack gap-4">
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
`,JC=`import type { IComponentController, IComponentOptions } from "angular";

export class PaginationSizeComponent implements IComponentController {
    public smallPage = 2;
    public defaultPage = 2;
    public largePage = 2;

    public selectSmallPage(page: number) { this.smallPage = page; }
    public selectDefaultPage(page: number) { this.defaultPage = page; }
    public selectLargePage(page: number) { this.largePage = page; }

    static get $name() {
        return "docsPaginationSize"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PaginationSizeComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/pagination-size/pagination-size.component.html",
        }
    }
}
`,YC=class e{examples={basic:{html:LC,typescript:RC},advanced:{html:FC,typescript:IC},custom:{html:zC,typescript:BC},size:{html:qC,typescript:JC},alignment:{html:UC,typescript:WC},disabled:{html:VC,typescript:HC},global:{html:GC,typescript:KC}};static get $name(){return`docsPaginationExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/pagination-examples-page/pagination-examples-page.component.html`,controllerAs:`$`}}},XC=class e{static get $name(){return`docsPopoverApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/popover-api-page/popover-api-page.component.html`,controllerAs:`$`}}},ZC=`<p>Every popover also closes with <kbd>Esc</kbd>.</p>
<div class="vstack gap-3 align-items-start">
    <button type="button" class="btn btn-outline-secondary" auto-close="'inside'" ngb-popover="'Click this content or press Escape'" popover-title="'Inside clicks'">Close on inside click</button>
    <button type="button" class="btn btn-outline-secondary" auto-close="'outside'" ngb-popover="'Click elsewhere or press Escape'" popover-title="'Outside clicks'">Close on outside click</button>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-secondary" auto-close="true" ngb-popover="'Click anywhere or press Escape'" popover-title="'All clicks'" ng-ref="example.popover" ng-ref-read="ngbPopover">Close on every click</button>
        <button type="button" class="btn btn-outline-secondary" ng-click="example.popover.toggle()">External toggle</button>
    </div>
</div>
`,QC=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbPopover } from "ngb-js";

export class PopoverAutocloseComponent implements IComponentController {
    public popover?: NgbPopover;
    static get $name() { return "docsPopoverAutoclose" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverAutocloseComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-autoclose/popover-autoclose.component.html" }
    }
}
`,$C=`<div class="overflow-hidden border rounded p-4" style="max-width: 24rem">
    <p class="small text-body-secondary">This container clips overflowing descendants.</p>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-secondary" placement="'top'" ngb-popover="'Inserted next to the trigger.'">Default</button>
        <button type="button" class="btn btn-outline-primary" placement="'top'" ngb-popover="'Appended directly to document.body.'" container="'body'">Append to body</button>
    </div>
</div>
`,ew=`import type { IComponentController, IComponentOptions } from "angular";

export class PopoverBodyComponent implements IComponentController {
    static get $name() { return "docsPopoverBody" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverBodyComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-body/popover-body.component.html" }
    }
}
`,tw=`<ng-template ng-ref="example.contentTemplate" let-greeting="greeting">{{ greeting }}, <strong>{{ example.name }}</strong>!</ng-template>
<ng-template ng-ref="example.titleTemplate" let-language="language">Greeting in {{ language }}</ng-template>

<p>You can pass context when manually opening a popover.</p>
<div class="d-flex flex-wrap gap-2 mb-4">
    <button type="button" class="btn btn-outline-secondary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate" triggers="'manual'" ng-ref="example.french" ng-ref-read="ngbPopover" ng-click="example.toggleWithGreeting(example.french, 'Bonjour', 'French')">French</button>
    <button type="button" class="btn btn-outline-secondary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate" triggers="'manual'" ng-ref="example.german" ng-ref-read="ngbPopover" ng-click="example.toggleWithGreeting(example.german, 'Guten Tag', 'German')">German</button>
    <button type="button" class="btn btn-outline-secondary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate" triggers="'manual'" ng-ref="example.english" ng-ref-read="ngbPopover" ng-click="example.toggleWithGreeting(example.english, 'Hello', 'English')">English</button>
</div>

<p>Alternatively, provide a default context through <code>popover-context</code>.</p>
<button type="button" class="btn btn-outline-secondary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate" popover-context="{ language: '中文', greeting: '你好' }">Chinese</button>
`,nw=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbPopover } from "ngb-js";
import type { TemplateRef } from "ngjs-core";

export class PopoverContextComponent implements IComponentController {
    public name = "World";
    public contentTemplate?: TemplateRef<unknown>;
    public titleTemplate?: TemplateRef<unknown>;
    public french?: NgbPopover;
    public german?: NgbPopover;
    public english?: NgbPopover;

    public toggleWithGreeting(popover: NgbPopover, greeting: string, language: string) {
        popover.isOpen() ? popover.close() : popover.open({ greeting, language });
    }

    static get $name() { return "docsPopoverContext" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverContextComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-context/popover-context.component.html" }
    }
}
`,rw=`.docs-popover-custom {
    --bs-popover-border-color: var(--bs-primary-border-subtle);
    --bs-popover-header-bg: var(--bs-primary-bg-subtle);
    --bs-popover-header-color: var(--bs-primary-text-emphasis);

    box-shadow: var(--bs-box-shadow-sm);
}
`,iw=`<button type="button" class="btn btn-outline-primary" ngb-popover="'A small custom skin layered on top of Bootstrap variables.'" popover-title="'NgbJS popover'" popover-class="docs-popover-custom">
    Popover with custom class
</button>
`,aw=`import "@/features/lib/components/popover-custom-class/popover-custom-class.component.css";
import type { IComponentController, IComponentOptions } from "angular";

export class PopoverCustomClassComponent implements IComponentController {
    static get $name() { return "docsPopoverCustomClass" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverCustomClassComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-custom-class/popover-custom-class.component.html" }
    }
}
`,ow=`<div class="d-flex flex-wrap align-items-baseline gap-2">
    <span>You can click</span>
    <button class="btn btn-outline-secondary" type="button" ngb-popover="'The button triggered me, but this text positioned me.'" popover-title="'Custom target'" position-target="'#popover-position-target'">this button</button>
    <span>but the popover appears over <strong id="popover-position-target" class="text-primary">this target</strong>.</span>
</div>
`,sw=`import type { IComponentController, IComponentOptions } from "angular";

export class PopoverCustomTargetComponent implements IComponentController {
    static get $name() { return "docsPopoverCustomTarget" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverCustomTargetComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-custom-target/popover-custom-target.component.html" }
    }
}
`,cw=`<p>Move the pointer into the popover before its close delay expires to keep it open.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" ngb-popover="'Opens after 300 ms and closes after 500 ms.'" triggers="'mouseenter:mouseleave'" open-delay="300" close-delay="500">300 / 500 ms</button>
    <button type="button" class="btn btn-outline-secondary" ngb-popover="'Opens after one second and closes after two.'" triggers="'mouseenter:mouseleave'" open-delay="1000" close-delay="2000">1 / 2 seconds</button>
</div>
`,lw=`import type { IComponentController, IComponentOptions } from "angular";

export class PopoverDelaysComponent implements IComponentController {
    static get $name() { return "docsPopoverDelays" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverDelaysComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-delays/popover-delays.component.html" }
    }
}
`,uw=`<button type="button" class="btn btn-outline-primary" placement="'top'" ngb-popover="'Watch the event log below.'" popover-title="'Visibility events'" shown="example.record('shown')" hidden="example.record('hidden')" ng-ref="example.popover" ng-ref-read="ngbPopover">
    Toggle popover
</button>

<div class="mt-4">
    <p class="mb-2">Current state: <code>{{ example.popover.isOpen() ? 'open' : 'closed' }}</code></p>
    <ul class="list-group list-group-flush" ng-if="example.events.length">
        <li class="list-group-item px-0 py-2" ng-repeat="event in example.events track by $index"><code>{{ event.name }}</code> at {{ event.time | date:'mediumTime' }}</li>
    </ul>
    <p class="text-body-secondary mb-0" ng-if="!example.events.length">No events recorded yet.</p>
</div>
`,dw=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbPopover } from "ngb-js";

export class PopoverEventsComponent implements IComponentController {
    public popover?: NgbPopover;
    public events: { name: string; time: Date }[] = [];
    public record(name: string) { this.events.unshift({ name, time: new Date() }); }
    static get $name() { return "docsPopoverEvents" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverEventsComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-events/popover-events.component.html" }
    }
}
`,fw=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div><p class="fw-semibold mb-1">Global defaults used by this example</p><p class="small text-body-secondary mb-0">Hover trigger, end placement, body container and a 300 ms opening delay.</p></div>
</div>
<button type="button" class="btn btn-outline-primary" ngb-popover="'This instance reads every option from NgbPopoverConfig.'" popover-title="'Configured globally'">Hover over me</button>
`,pw=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbPopoverConfig } from "ngb-js";

export class PopoverGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<NgbPopoverConfig, "container" | "openDelay" | "placement" | "triggers">;

    constructor(private readonly config: NgbPopoverConfig) {
        this.initialConfig = {
            container: config.container,
            openDelay: config.openDelay,
            placement: config.placement,
            triggers: config.triggers,
        };
        config.container = "body";
        config.openDelay = 300;
        config.placement = "end";
        config.triggers = "mouseenter:mouseleave";
    }

    public $postLink() { this.restoreConfig(); }
    public $onDestroy() { this.restoreConfig(); }
    private restoreConfig() {
        this.config.container = this.initialConfig.container;
        this.config.openDelay = this.initialConfig.openDelay;
        this.config.placement = this.initialConfig.placement;
        this.config.triggers = this.initialConfig.triggers;
    }

    static get $name() { return "docsPopoverGlobal" }
    static get $inject() { return [NgbPopoverConfig.$name] }
    static get $factory(): IComponentOptions {
        return { controller: PopoverGlobalComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-global/popover-global.component.html" }
    }
}
`,mw=`<button type="button" class="btn btn-primary mb-3" ngb-popover="'This target is controlled by the buttons below'" popover-title="'External controls'" triggers="'manual'" auto-close="false" ng-ref="example.popover" ng-ref-read="ngbPopover">
    Popover target
</button>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.popover.open()">Open</button>
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.popover.close()">Close</button>
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.popover.toggle()">Toggle</button>
</div>
`,hw=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbPopover } from "ngb-js";

export class PopoverManualControlComponent implements IComponentController {
    public popover?: NgbPopover;
    static get $name() { return "docsPopoverManualControl" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverManualControlComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-manual-control/popover-manual-control.component.html" }
    }
}
`,gw=`<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" placement="'top'" ngb-popover="'Popover content'" popover-title="'Popover on top'">Top</button>
    <button type="button" class="btn btn-outline-secondary" placement="'end'" ngb-popover="'Popover content'" popover-title="'Popover on right'">Right</button>
    <button type="button" class="btn btn-outline-secondary" placement="'bottom'" ngb-popover="'Popover content'" popover-title="'Popover on bottom'">Bottom</button>
    <button type="button" class="btn btn-outline-secondary" placement="'start'" ngb-popover="'Popover content'" popover-title="'Popover on left'">Left</button>
</div>
`,_w=`import type { IComponentController, IComponentOptions } from "angular";

export class PopoverPlacementsComponent implements IComponentController {
    static get $name() { return "docsPopoverPlacements" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverPlacementsComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-placements/popover-placements.component.html" }
    }
}
`,vw=`<ng-template ng-ref="example.titleTemplate">
    <span class="d-flex align-items-center gap-2"><i class="bi bi-code-slash" aria-hidden="true"></i><strong>Template content</strong></span>
</ng-template>
<ng-template ng-ref="example.contentTemplate">
    <p class="mb-2">Hello, <strong>{{ example.name }}</strong>!</p>
    <button class="btn btn-sm btn-primary" type="button" ng-click="example.name = 'AngularJS'">Update binding</button>
</ng-template>

<button type="button" class="btn btn-outline-primary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate">
    HTML and bindings
</button>
`,yw=`import type { IComponentController, IComponentOptions } from "angular";
import type { TemplateRef } from "ngjs-core";

export class PopoverTemplateComponent implements IComponentController {
    public name = "NgbJS";
    public contentTemplate?: TemplateRef<unknown>;
    public titleTemplate?: TemplateRef<unknown>;
    static get $name() { return "docsPopoverTemplate" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverTemplateComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-template/popover-template.component.html" }
    }
}
`,bw=`<p class="mb-3">Custom events can be paired as <code>mouseenter:mouseleave</code>.</p>
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
`,xw=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbPopover } from "ngb-js";

export class PopoverTriggersComponent implements IComponentController {
    public manual?: NgbPopover;
    static get $name() { return "docsPopoverTriggers" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverTriggersComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-triggers/popover-triggers.component.html" }
    }
}
`,Sw=class e{examples={placements:{html:gw,typescript:_w},template:{html:vw,typescript:yw},triggers:{html:bw,typescript:xw},manual:{html:mw,typescript:hw},autoclose:{html:ZC,typescript:QC},context:{html:tw,typescript:nw},customTarget:{html:ow,typescript:sw},delays:{html:cw,typescript:lw},events:{html:uw,typescript:dw},body:{html:$C,typescript:ew},customClass:{html:iw,typescript:aw,css:rw},global:{html:fw,typescript:pw}};static get $name(){return`docsPopoverExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/popover-examples-page/popover-examples-page.component.html`,controllerAs:`$`}}},Cw=class e{static get $name(){return`docsProgressbarApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/progressbar-api-page/progressbar-api-page.component.html`,controllerAs:`$`}}},ww=`<div class="vstack gap-3">
    <ngb-progressbar type="success" text-type="white" value="25" show-value="true"></ngb-progressbar>
    <ngb-progressbar type="dark" text-type="white" value="50" show-value="true"></ngb-progressbar>
    <ngb-progressbar type="light" text-type="success" value="75" show-value="true"></ngb-progressbar>
    <ngb-progressbar type="warning" text-type="dark" value="100" show-value="true"></ngb-progressbar>
</div>
`,Tw=`import type { IComponentController, IComponentOptions } from "angular";

export class ContextualTextProgressbarComponent implements IComponentController {
    static get $name() { return "docsContextualTextProgressbar" }
    static get $factory(): IComponentOptions {
        return { controller: ContextualTextProgressbarComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/contextual-text-progressbar/contextual-text-progressbar.component.html" }
    }
}
`,Ew=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div><p class="fw-semibold mb-1">Global defaults used by this example</p><p class="small text-body-secondary mb-0">Primary, striped and animated; maximum 200, visible percentage and 1.5rem height.</p></div>
</div>

<ngb-progressbar value="135"></ngb-progressbar>
`,Dw=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbProgressbarConfig } from "ngb-js";

export class ProgressbarGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<NgbProgressbarConfig, "animated" | "height" | "max" | "showValue" | "striped" | "textType" | "type">;

    constructor(private readonly config: NgbProgressbarConfig) {
        this.initialConfig = {
            animated: config.animated,
            height: config.height,
            max: config.max,
            showValue: config.showValue,
            striped: config.striped,
            textType: config.textType,
            type: config.type,
        };
        config.animated = true;
        config.height = "1.5rem";
        config.max = 200;
        config.showValue = true;
        config.striped = true;
        config.textType = "light";
        config.type = "primary";
    }

    public $postLink() { this.restoreConfig(); }
    public $onDestroy() { this.restoreConfig(); }
    private restoreConfig() { Object.assign(this.config, this.initialConfig); }

    static get $name() { return "docsProgressbarGlobal" }
    static get $inject() { return [NgbProgressbarConfig.$name] }
    static get $factory(): IComponentOptions {
        return { controller: ProgressbarGlobalComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/progressbar-global/progressbar-global.component.html" }
    }
}
`,Ow=`<div class="vstack gap-3">
    <ngb-progressbar type="success" value="25">Default</ngb-progressbar>
    <ngb-progressbar type="info" value="50" height="10px">10px</ngb-progressbar>
    <ngb-progressbar type="warning" value="75" height="1.5rem">1.5rem</ngb-progressbar>
    <ngb-progressbar type="danger" value="100" height="2rem">2rem</ngb-progressbar>
</div>
`,kw=`import type { IComponentController, IComponentOptions } from "angular";

export class ProgressHeightComponent implements IComponentController {
    static get $name() { return "docsProgressHeight" }
    static get $factory(): IComponentOptions {
        return { controller: ProgressHeightComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/progress-height/progress-height.component.html" }
    }
}
`,Aw=`<div class="vstack gap-3">
    <ngb-progressbar type="success" value="25"><strong>25%</strong></ngb-progressbar>
    <ngb-progressbar type="info" value="50">Copying file <strong class="ms-1">2 of 4</strong></ngb-progressbar>
    <ngb-progressbar type="warning" value="75" striped="true" animated="true"><em>Almost there…</em></ngb-progressbar>
    <ngb-progressbar type="danger" value="100">Completed!</ngb-progressbar>
</div>
`,jw=`import type { IComponentController, IComponentOptions } from "angular";

export class CustomLabelsProgressbarComponent implements IComponentController {
    static get $name() { return "docsCustomLabelsProgressbar" }
    static get $factory(): IComponentOptions {
        return { controller: CustomLabelsProgressbarComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/custom-labels-progressbar/custom-labels-progressbar.component.html" }
    }
}
`,Mw=`<div class="vstack gap-3">
    <ngb-progressbar type="success" value="25"></ngb-progressbar>
    <ngb-progressbar type="info" value="50"></ngb-progressbar>
    <ngb-progressbar type="warning" value="75"></ngb-progressbar>
    <ngb-progressbar type="danger" value="100"></ngb-progressbar>
    <ngb-progressbar type="primary" value="75"></ngb-progressbar>
    <ngb-progressbar type="secondary" value="50"></ngb-progressbar>
    <ngb-progressbar type="dark" value="25"></ngb-progressbar>
</div>
`,Nw=`import type { IComponentController, IComponentOptions } from "angular";

export class SimpleProgressbarComponent implements IComponentController {
    static get $name() { return "docsSimpleProgressbar" }
    static get $factory(): IComponentOptions {
        return { controller: SimpleProgressbarComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/simple-progressbar/simple-progressbar.component.html" }
    }
}
`,Pw=`<ngb-progressbar-stacked>
    <ngb-progressbar type="danger" value="20">20%</ngb-progressbar>
    <ngb-progressbar type="warning" value="35">35%</ngb-progressbar>
    <ngb-progressbar type="success" value="45">45%</ngb-progressbar>
</ngb-progressbar-stacked>

<p class="small text-body-secondary mt-3 mb-0">The three segments share one Bootstrap stacked progress container.</p>
`,Fw=`import type { IComponentController, IComponentOptions } from "angular";

export class ProgressBarsStackedComponent implements IComponentController {
    static get $name() { return "docsProgressBarsStacked" }
    static get $factory(): IComponentOptions {
        return { controller: ProgressBarsStackedComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/progress-bars-stacked/progress-bars-stacked.component.html" }
    }
}
`,Iw=`<div class="vstack gap-3">
    <ngb-progressbar type="success" value="25" striped="true"></ngb-progressbar>
    <ngb-progressbar type="info" value="50" striped="true"></ngb-progressbar>
    <ngb-progressbar type="warning" value="75" striped="true"></ngb-progressbar>
    <ngb-progressbar type="danger" value="100" striped="true"></ngb-progressbar>
    <ngb-progressbar type="primary" value="65" striped="true" animated="true">Animated</ngb-progressbar>
</div>
`,Lw=`import type { IComponentController, IComponentOptions } from "angular";

export class StripedProgressBarComponent implements IComponentController {
    static get $name() { return "docsStripedProgressBar" }
    static get $factory(): IComponentOptions {
        return { controller: StripedProgressBarComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/striped-progress-bar/striped-progress-bar.component.html" }
    }
}
`,Rw=class e{examples={simple:{html:Mw,typescript:Nw},contextual:{html:ww,typescript:Tw},striped:{html:Iw,typescript:Lw},labels:{html:Aw,typescript:jw},height:{html:Ow,typescript:kw},stacked:{html:Pw,typescript:Fw},global:{html:Ew,typescript:Dw}};static get $name(){return`docsProgressbarExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/progressbar-examples-page/progressbar-examples-page.component.html`,controllerAs:`$`}}},zw=class e{static get $name(){return`docsRatingApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/rating-api-page/rating-api-page.component.html`,controllerAs:`$`}}},Bw=`<ngb-rating rate="example.rating" rate-change="example.setRating($event)"></ngb-rating>
<hr>
<p class="mb-0">Rate: <strong>{{ example.rating }}</strong></p>
`,Vw=`import type { IComponentController, IComponentOptions } from "angular";

export class BasicRatingComponent implements IComponentController {
    public rating = 3;
    public setRating(rating: number) { this.rating = rating; }
    static get $name() { return "docsBasicRating" }
    static get $factory(): IComponentOptions {
        return { controller: BasicRatingComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/basic-rating/basic-rating.component.html" }
    }
}
`,Hw=`.rating-demo-star {
    color: var(--bs-secondary-color);
    font-size: 2rem;
    padding-right: 0.15rem;
}

.rating-demo-star.filled {
    color: var(--bs-warning);
}

.rating-demo-star.filled.low {
    color: var(--bs-danger);
}
`,Uw=`<p>Bootstrap Icons are rendered through a child <code>ng-template</code>.</p>
<ngb-rating rate="example.rating" rate-change="example.setRating($event)">
    <ng-template let-fill="fill" let-index="index">
        <i class="bi rating-demo-star" ng-class="[fill === 100 ? 'bi-star-fill filled' : 'bi-star', { low: index < 3 }]" aria-hidden="true"></i>
    </ng-template>
</ngb-rating>
<hr>
<p class="mb-0">Rate: <strong>{{ example.rating }}</strong></p>
`,Ww=`import "@/features/lib/components/rating-custom-template/rating-custom-template.component.css";
import type { IComponentController, IComponentOptions } from "angular";

export class RatingCustomTemplateComponent implements IComponentController {
    public rating = 6;
    public setRating(rating: number) { this.rating = rating; }
    static get $name() { return "docsRatingCustomTemplate" }
    static get $factory(): IComponentOptions {
        return { controller: RatingCustomTemplateComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/rating-custom-template/rating-custom-template.component.html" }
    }
}
`,Gw=`.rating-demo-heart {
    color: var(--bs-secondary-bg);
    display: inline-block;
    font-size: 2.25rem;
    margin-right: 0.15rem;
    position: relative;
}

.rating-demo-heart-fill {
    color: var(--bs-danger);
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
}
`,Kw=`<ng-template ng-ref="example.heartTemplate" let-fill="fill">
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
`,qw=`import "@/features/lib/components/rating-decimal/rating-decimal.component.css";
import type { IComponentController, IComponentOptions } from "angular";
import type { TemplateRef } from "ngjs-core";

export class RatingDecimalComponent implements IComponentController {
    public rating = 3.14;
    public heartTemplate?: TemplateRef<unknown>;
    public readonly ariaValueText = (current: number, max: number) => \`\${current} out of \${max} hearts\`;
    static get $name() { return "docsRatingDecimal" }
    static get $factory(): IComponentOptions {
        return { controller: RatingDecimalComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/rating-decimal/rating-decimal.component.html" }
    }
}
`,Jw=`<ngb-rating rate="example.selected" rate-change="example.setSelected($event)" hover="example.setHovered($event)" leave="example.setHovered(0)" readonly="example.readonly"></ngb-rating>
<hr>
<dl class="row mb-3">
    <dt class="col-auto">Selected</dt><dd class="col mb-0">{{ example.selected }}</dd>
    <dt class="col-auto">Hovered</dt><dd class="col mb-0">{{ example.hovered }}</dd>
</dl>
<button type="button" class="btn btn-sm" ng-class="example.readonly ? 'btn-outline-danger' : 'btn-outline-success'" ng-click="example.readonly = !example.readonly">
    {{ example.readonly ? 'Read-only' : 'Editable' }}
</button>
`,Yw=`import type { IComponentController, IComponentOptions } from "angular";

export class RatingEventsComponent implements IComponentController {
    public selected = 0;
    public hovered = 0;
    public readonly = false;
    public setSelected(value: number) { this.selected = value; }
    public setHovered(value: number) { this.hovered = value; }
    static get $name() { return "docsRatingEvents" }
    static get $factory(): IComponentOptions {
        return { controller: RatingEventsComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/rating-events/rating-events.component.html" }
    }
}
`,Xw=`<form name="example.form" novalidate>
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
`,Zw=`import type { IComponentController, IComponentOptions, IFormController } from "angular";

export class RatingFormComponent implements IComponentController {
    public rating: number | null = null;
    public disabled = false;
    public form?: IFormController;

    public setRating(rating: number) { this.rating = rating; }
    public clear() { this.rating = null; }

    static get $name() { return "docsRatingForm" }
    static get $factory(): IComponentOptions {
        return { controller: RatingFormComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/rating-form/rating-form.component.html" }
    }
}
`,Qw=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div><p class="fw-semibold mb-1">Customized defaults</p><p class="small text-body-secondary mb-0">Five stars, read-only behavior and no keyboard tab stop.</p></div>
</div>

<ngb-rating rate="3"></ngb-rating>
`,$w=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbRatingConfig } from "ngb-js";

export class RatingGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<NgbRatingConfig, "max" | "readonly" | "resettable" | "tabindex">;

    constructor(private readonly config: NgbRatingConfig) {
        this.initialConfig = {
            max: config.max,
            readonly: config.readonly,
            resettable: config.resettable,
            tabindex: config.tabindex,
        };
        config.max = 5;
        config.readonly = true;
        config.resettable = true;
        config.tabindex = -1;
    }

    public $postLink() { this.restoreConfig(); }
    public $onDestroy() { this.restoreConfig(); }
    private restoreConfig() { Object.assign(this.config, this.initialConfig); }

    static get $name() { return "docsRatingGlobal" }
    static get $inject() { return [NgbRatingConfig.$name] }
    static get $factory(): IComponentOptions {
        return { controller: RatingGlobalComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/rating-global/rating-global.component.html" }
    }
}
`,eT=class e{examples={basic:{html:Bw,typescript:Vw},events:{html:Jw,typescript:Yw},customTemplate:{html:Uw,typescript:Ww,css:Hw},decimal:{html:Kw,typescript:qw,css:Gw},form:{html:Xw,typescript:Zw},global:{html:Qw,typescript:$w}};static get $name(){return`docsRatingExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/rating-examples-page/rating-examples-page.component.html`,controllerAs:`$`}}},tT=class e{static get $name(){return`docsScrollspyApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/scrollspy-api-page/scrollspy-api-page.component.html`,controllerAs:`$`}}},nT=`<div
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
`,rT=`<div class="row g-3">
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
`,iT=`<div class="d-flex flex-column">
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
`,aT=`<div class="row g-3">
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
`,oT=`<div class="d-flex flex-wrap align-items-center gap-2 mb-3">
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
`,sT=`import type { IAugmentedJQuery, IComponentController, IComponentOptions } from "angular";
import { NgbScrollSpyService } from "ngb-js";

export class ScrollspyServiceDemoComponent implements IComponentController {
    public readonly fragments = ["service-introduction", "service-options", "service-finish"];
    public running = false;
    public observingFinish = true;
    private root?: HTMLElement;

    constructor(
        private readonly $element: IAugmentedJQuery,
        public readonly scrollSpy: NgbScrollSpyService,
    ) {}

    public $postLink(): void {
        this.root = this.$element[0].querySelector<HTMLElement>("[data-service-scrollspy]") ?? undefined;
        this.start();
    }

    public $onDestroy(): void {
        this.scrollSpy.stop();
    }

    public start(): void {
        if (!this.root) return;
        this.scrollSpy.start({
            root: this.root,
            fragments: this.fragments,
            rootMargin: "0px 0px -45%",
        });
        this.running = true;
        this.observingFinish = true;
    }

    public stop(): void {
        this.scrollSpy.stop();
        this.running = false;
    }

    public toggleFinish(): void {
        if (this.observingFinish) {
            this.scrollSpy.unobserve("service-finish");
        } else {
            this.scrollSpy.observe("service-finish");
        }
        this.observingFinish = !this.observingFinish;
    }

    static get $name() { return "docsScrollspyServiceDemo" }
    static get $inject() { return ["$element", NgbScrollSpyService.$name] }
    static get $factory(): IComponentOptions {
        return {
            controller: ScrollspyServiceDemoComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/scrollspy-service-demo/scrollspy-service-demo.component.html",
        }
    }
}
`,cT=class e{examples={basic:{html:nT},menuItems:{html:rT},nested:{html:aT},navbar:{html:iT},service:{html:oT,typescript:sT}};static get $name(){return`docsScrollspyExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/scrollspy-examples-page/scrollspy-examples-page.component.html`,controllerAs:`$`}}},lT=class e{static get $name(){return`docsTimepickerApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/timepicker-api-page/timepicker-api-page.component.html`,controllerAs:`$`}}},uT=`<p>This adapter represents the application model as an <code>HH:mm:ss</code> string.</p>
<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" seconds="true"></ngb-timepicker>
    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">String model: {{ example.model }}</pre>
</div>
`,dT=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbTimeAdapter, type NgbTimeStruct } from "ngb-js";

const pad = (value: number): string => value.toString().padStart(2, "0");

export class NgbTimeStringAdapter extends NgbTimeAdapter<string> {
    public fromModel(value: string | null): NgbTimeStruct | null {
        if (!value) return null;
        const [hour, minute, second] = value.split(":").map(Number);
        return { hour, minute, second };
    }

    public toModel(time: NgbTimeStruct | null): string | null {
        return time ? \`\${pad(time.hour)}:\${pad(time.minute)}:\${pad(time.second ?? 0)}\` : null;
    }
}

// Register once in your application module:
// AppModule.service(NgbTimeAdapter.$name, NgbTimeStringAdapter);

export class TimepickerCustomAdapterComponent implements IComponentController {
    public readonly adapter = new NgbTimeStringAdapter();
    public time = this.adapter.fromModel("13:30:00");
    public model = "13:30:00";

    public $doCheck(): void {
        this.model = this.adapter.toModel(this.time) ?? "";
    }

    static get $name() { return "docsTimepickerCustomAdapter" }
    static get $factory(): IComponentOptions {
        return { controller: TimepickerCustomAdapterComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/timepicker-custom-adapter/timepicker-custom-adapter.component.html" }
    }
}
`,fT=`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time"></ngb-timepicker>
    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
</div>
`,pT=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbTimeStruct } from "ngb-js";

export class BasicTimepickerComponent implements IComponentController {
    public time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
    static get $name() { return "docsBasicTimepicker" }
    static get $factory(): IComponentOptions {
        return { controller: BasicTimepickerComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/basic-timepicker/basic-timepicker.component.html" }
    }
}
`,mT=`<div class="alert alert-light border" role="note">
    Greek period labels supplied by a custom <code>NgbTimepickerI18n</code>:
    <strong>{{ example.i18n.getMorningPeriod() }}</strong> / <strong>{{ example.i18n.getAfternoonPeriod() }}</strong>
</div>

<div class="d-flex align-items-start">
    <ngb-timepicker ng-model="example.time" meridian="true"></ngb-timepicker>
</div>
`,hT=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbTimepickerI18n, type NgbTimeStruct } from "ngb-js";

export class GreekTimepickerI18n extends NgbTimepickerI18n {
    public getMorningPeriod(): string { return "π.μ."; }
    public getAfternoonPeriod(): string { return "μ.μ."; }
}

// Register once in your application module:
// AppModule.service(NgbTimepickerI18n.$name, GreekTimepickerI18n);

export class TimepickerI18nComponent implements IComponentController {
    public time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
    constructor(public readonly i18n: NgbTimepickerI18n) {}
    static get $name() { return "docsTimepickerI18n" }
    static get $inject() { return [NgbTimepickerI18n.$name] }
    static get $factory(): IComponentOptions {
        return { controller: TimepickerI18nComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/timepicker-i18n/timepicker-i18n.component.html" }
    }
}
`,gT=`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" meridian="example.meridian"></ngb-timepicker>
    <button type="button" class="btn btn-sm" ng-class="example.meridian ? 'btn-outline-success' : 'btn-outline-secondary'" ng-click="example.meridian = !example.meridian">
        Meridian {{ example.meridian ? 'on' : 'off' }}
    </button>
    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
</div>
`,_T=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbTimeStruct } from "ngb-js";

export class MeridianTimepickerComponent implements IComponentController {
    public time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
    public meridian = true;
    static get $name() { return "docsMeridianTimepicker" }
    static get $factory(): IComponentOptions {
        return { controller: MeridianTimepickerComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/meridian-timepicker/meridian-timepicker.component.html" }
    }
}
`,vT=`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" seconds="example.seconds"></ngb-timepicker>
    <button type="button" class="btn btn-sm" ng-class="example.seconds ? 'btn-outline-success' : 'btn-outline-secondary'" ng-click="example.seconds = !example.seconds">
        Seconds {{ example.seconds ? 'on' : 'off' }}
    </button>
    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
</div>
`,yT=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbTimeStruct } from "ngb-js";

export class SecondsTimepickerComponent implements IComponentController {
    public time: NgbTimeStruct = { hour: 13, minute: 30, second: 25 };
    public seconds = true;
    static get $name() { return "docsSecondsTimepicker" }
    static get $factory(): IComponentOptions {
        return { controller: SecondsTimepickerComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/seconds-timepicker/seconds-timepicker.component.html" }
    }
}
`,bT=`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" spinners="example.spinners"></ngb-timepicker>
    <button type="button" class="btn btn-sm" ng-class="example.spinners ? 'btn-outline-success' : 'btn-outline-secondary'" ng-click="example.spinners = !example.spinners">
        Spinners {{ example.spinners ? 'on' : 'off' }}
    </button>
</div>
`,xT=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbTimeStruct } from "ngb-js";

export class SpinnersTimepickerComponent implements IComponentController {
    public time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
    public spinners = true;
    static get $name() { return "docsSpinnersTimepicker" }
    static get $factory(): IComponentOptions {
        return { controller: SpinnersTimepickerComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/spinners-timepicker/spinners-timepicker.component.html" }
    }
}
`,ST=`<div class="d-flex flex-column align-items-start gap-3">
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
`,CT=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbTimeStruct } from "ngb-js";

export class TimepickerCustomStepsComponent implements IComponentController {
    public time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
    public hourStep = 1;
    public minuteStep = 15;
    public secondStep = 30;
    static get $name() { return "docsTimepickerCustomSteps" }
    static get $factory(): IComponentOptions {
        return { controller: TimepickerCustomStepsComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/timepicker-custom-steps/timepicker-custom-steps.component.html" }
    }
}
`,wT=`<p>Select a time between 12:00 and 13:59.</p>

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
`,TT=`import type { IComponentController, IComponentOptions, IDirective, INgModelController } from "angular";
import type { NgbTimeStruct } from "ngb-js";

export class TimepickerValidationComponent implements IComponentController {
    public time: NgbTimeStruct | null = null;
    static get $name() { return "docsTimepickerValidation" }
    static get $factory(): IComponentOptions {
        return { controller: TimepickerValidationComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/timepicker-validation/timepicker-validation.component.html" }
    }
}

export const timepickerLunchValidator = (): IDirective => ({
    restrict: "A",
    require: "ngModel",
    link: (_scope, _element, _attributes, controller) => {
        const ngModel = controller as INgModelController;
        ngModel.$validators.lunchtime = (modelValue: NgbTimeStruct | null) =>
            !modelValue || (modelValue.hour >= 12 && modelValue.hour <= 13);
    },
});
`,ET=class e{examples={basic:{html:fT,typescript:pT},meridian:{html:gT,typescript:_T},seconds:{html:vT,typescript:yT},spinners:{html:bT,typescript:xT},steps:{html:ST,typescript:CT},validation:{html:wT,typescript:TT},adapter:{html:uT,typescript:dT},i18n:{html:mT,typescript:hT}};static get $name(){return`docsTimepickerExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/timepicker-examples-page/timepicker-examples-page.component.html`,controllerAs:`$`}}},DT=class e{static get $name(){return`docsToastApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/toast-api-page/toast-api-page.component.html`,controllerAs:`$`}}},OT=`<div class="toast-container position-static">
    <ngb-toast ng-if="example.visible" header="Close me" autohide="false" hidden="example.close()">
        Use the close button in the header. This toast will return after three seconds.
    </ngb-toast>

    <div ng-if="!example.visible" class="alert alert-light border mb-0" role="status">
        The toast will be back shortly.
    </div>
</div>
`,kT=`import type { IComponentController, IComponentOptions, IPromise, ITimeoutService } from "angular";

export class CloseableToastComponent implements IComponentController {
    public visible = true;
    private reopenTimer?: IPromise<void>;

    constructor(private readonly $timeout: ITimeoutService) {}

    public close(): void {
        this.visible = false;
        this.reopenTimer = this.$timeout(() => {
            this.visible = true;
        }, 3000);
    }

    public $onDestroy(): void {
        if (this.reopenTimer) this.$timeout.cancel(this.reopenTimer);
    }

    static get $name() { return "docsCloseableToast" }
    static get $inject() { return ["$timeout"] }
    static get $factory(): IComponentOptions {
        return { controller: CloseableToastComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/closeable-toast/closeable-toast.component.html" }
    }
}
`,AT=`<div class="toast-container position-static d-flex flex-column gap-3">
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
`,jT=`import type { IComponentController, IComponentOptions } from "angular";

export class InlineToastComponent implements IComponentController {
    public showHeaderToast = true;
    static get $name() { return "docsInlineToast" }
    static get $factory(): IComponentOptions {
        return { controller: InlineToastComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/inline-toast/inline-toast.component.html" }
    }
}
`,MT=`<div class="d-flex flex-wrap gap-2 mb-3">
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
`,NT=`import type { IComponentController, IComponentOptions } from "angular";

interface ManagedToast {
    id: number;
    body: string;
    className?: string;
    delay?: number;
}

export class DocsToastService {
    public readonly toasts: ManagedToast[] = [];
    private nextId = 0;

    public show(body: string, options: Omit<ManagedToast, "id" | "body"> = {}): void {
        this.toasts.push({ id: ++this.nextId, body, ...options });
    }

    public remove(toast: ManagedToast): void {
        const index = this.toasts.indexOf(toast);
        if (index >= 0) this.toasts.splice(index, 1);
    }

    public clear(): void {
        this.toasts.length = 0;
    }

    static get $name() { return "docs.toast.service" }
}

export class ToastManagementComponent implements IComponentController {
    constructor(public readonly toastService: DocsToastService) {}

    public showStandard(): void {
        this.toastService.show("I am a standard toast.");
    }

    public showSuccess(): void {
        this.toastService.show("Your changes were saved.", { className: "bg-success text-white", delay: 8000 });
    }

    public showDanger(): void {
        this.toastService.show("The operation could not be completed.", { className: "bg-danger text-white", delay: 10000 });
    }

    public $onDestroy(): void {
        this.toastService.clear();
    }

    static get $name() { return "docsToastManagement" }
    static get $inject() { return [DocsToastService.$name] }
    static get $factory(): IComponentOptions {
        return { controller: ToastManagementComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/toast-management/toast-management.component.html" }
    }
}
`,PT=`<p>Show the toast and keep the pointer over it to pause autohide.</p>

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
`,FT=`import type { IComponentController, IComponentOptions, ITimeoutService } from "angular";

export class PreventAutohideToastComponent implements IComponentController {
    public visible = false;
    public autohide = true;

    constructor(private readonly $timeout: ITimeoutService) {}

    public show(): void {
        this.visible = false;
        this.autohide = true;
        this.$timeout(() => this.visible = true);
    }

    public hide(): void {
        this.visible = false;
        this.autohide = true;
    }

    static get $name() { return "docsPreventAutohideToast" }
    static get $inject() { return ["$timeout"] }
    static get $factory(): IComponentOptions {
        return { controller: PreventAutohideToastComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/prevent-autohide-toast/prevent-autohide-toast.component.html" }
    }
}
`,IT=`<div class="toast-container position-static">
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
`,LT=`import type { IComponentController, IComponentOptions } from "angular";

export class TemplateHeaderToastComponent implements IComponentController {
    public visible = true;
    static get $name() { return "docsTemplateHeaderToast" }
    static get $factory(): IComponentOptions {
        return { controller: TemplateHeaderToastComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/template-header-toast/template-header-toast.component.html" }
    }
}
`,RT=class e{examples={inline:{html:AT,typescript:jT},templateHeader:{html:IT,typescript:LT},closeable:{html:OT,typescript:kT},preventAutohide:{html:PT,typescript:FT},management:{html:MT,typescript:NT}};static get $name(){return`docsToastExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/toast-examples-page/toast-examples-page.component.html`,controllerAs:`$`}}},zT=class e{static get $name(){return`docsTooltipApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/tooltip-api-page/tooltip-api-page.component.html`,controllerAs:`$`}}},BT=`<ng-template ng-ref="example.contentTemplate">
    <button type="button" class="btn btn-sm btn-light">Click inside</button>
</ng-template>

<p>Every tooltip can also be closed with <kbd>Esc</kbd>.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" triggers="'click'" auto-close="'inside'" ngb-tooltip="example.contentTemplate">Inside clicks</button>
    <button type="button" class="btn btn-outline-secondary" triggers="'click'" auto-close="'outside'" ngb-tooltip="example.contentTemplate">Outside clicks</button>
    <button type="button" class="btn btn-outline-secondary" triggers="'click'" auto-close="true" ngb-tooltip="example.contentTemplate">All clicks</button>
</div>
`,VT=`import type { IComponentController, IComponentOptions } from "angular";
import type { TemplateRef } from "ngjs-core";

export class TooltipAutocloseComponent implements IComponentController {
    public contentTemplate?: TemplateRef<unknown>;
    static get $name() { return "docsTooltipAutoclose" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipAutocloseComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-autoclose/tooltip-autoclose.component.html" }
    }
}
`,HT=`<div class="overflow-hidden border rounded p-4" style="max-width: 24rem">
    <p class="small text-body-secondary">This container clips overflowing descendants.</p>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-secondary" placement="'top'" ngb-tooltip="'Inserted next to the trigger.'">Default</button>
        <button type="button" class="btn btn-outline-primary" placement="'top'" ngb-tooltip="'Appended directly to document.body.'" container="'body'">Append to body</button>
    </div>
</div>
`,UT=`import type { IComponentController, IComponentOptions } from "angular";

export class TooltipBodyComponent implements IComponentController {
    static get $name() { return "docsTooltipBody" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipBodyComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-body/tooltip-body.component.html" }
    }
}
`,WT=`<ng-template ng-ref="example.contentTemplate" let-greeting="greeting">{{ greeting }}, <strong>{{ example.name }}</strong>!</ng-template>

<p>Pass a different context each time a tooltip is opened manually.</p>
<div class="d-flex flex-wrap gap-2 mb-4">
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="example.contentTemplate" triggers="'manual'" ng-ref="example.french" ng-ref-read="ngbTooltip" ng-click="example.toggleWithGreeting(example.french, 'Bonjour')">French</button>
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="example.contentTemplate" triggers="'manual'" ng-ref="example.german" ng-ref-read="ngbTooltip" ng-click="example.toggleWithGreeting(example.german, 'Guten Tag')">German</button>
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="example.contentTemplate" triggers="'manual'" ng-ref="example.english" ng-ref-read="ngbTooltip" ng-click="example.toggleWithGreeting(example.english, 'Hello')">English</button>
</div>

<p>Alternatively, provide a default context through <code>tooltip-context</code>.</p>
<button type="button" class="btn btn-outline-secondary" ngb-tooltip="example.contentTemplate" tooltip-context="{ greeting: 'Hola' }">Spanish</button>
`,GT=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbTooltip } from "ngb-js";
import type { TemplateRef } from "ngjs-core";

export class TooltipContextComponent implements IComponentController {
    public name = "World";
    public contentTemplate?: TemplateRef<unknown>;
    public french?: NgbTooltip;
    public german?: NgbTooltip;
    public english?: NgbTooltip;

    public toggleWithGreeting(tooltip: NgbTooltip, greeting: string): void {
        tooltip.isOpen() ? tooltip.close() : tooltip.open({ greeting });
    }

    static get $name() { return "docsTooltipContext" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipContextComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-context/tooltip-context.component.html" }
    }
}
`,KT=`.docs-tooltip-custom {
    --bs-tooltip-bg: var(--bs-primary-bg-subtle);
    --bs-tooltip-color: var(--bs-primary-text-emphasis);
    --bs-tooltip-opacity: 1;

    filter: drop-shadow(0 .25rem .5rem rgba(var(--bs-body-color-rgb), .15));
}
`,qT=`<button type="button" class="btn btn-outline-primary" ngb-tooltip="'A custom skin layered on top of Bootstrap tooltip variables.'" tooltip-class="docs-tooltip-custom">
    Tooltip with custom class
</button>
`,JT=`import "@/features/lib/components/tooltip-custom-class/tooltip-custom-class.component.css";
import type { IComponentController, IComponentOptions } from "angular";

export class TooltipCustomClassComponent implements IComponentController {
    static get $name() { return "docsTooltipCustomClass" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipCustomClassComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-custom-class/tooltip-custom-class.component.html" }
    }
}
`,YT=`<div class="d-flex flex-wrap align-items-baseline gap-2">
    <span>You can hover</span>
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="'The button triggered me, but the text positioned me.'" position-target="#tooltip-position-target">this button</button>
    <span>while the tooltip appears over <strong id="tooltip-position-target" class="text-primary">this target</strong>.</span>
</div>
`,XT=`import type { IComponentController, IComponentOptions } from "angular";

export class TooltipCustomTargetComponent implements IComponentController {
    static get $name() { return "docsTooltipCustomTarget" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipCustomTargetComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-custom-target/tooltip-custom-target.component.html" }
    }
}
`,ZT=`<p>Move the pointer into the tooltip before its close delay expires to keep it open.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="'Opens after 300 ms and closes after 500 ms.'" triggers="'mouseenter:mouseleave'" open-delay="300" close-delay="500">300 / 500 ms</button>
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="'Opens after one second and closes after two.'" triggers="'mouseenter:mouseleave'" open-delay="1000" close-delay="2000">1 / 2 seconds</button>
</div>
`,QT=`import type { IComponentController, IComponentOptions } from "angular";

export class TooltipDelaysComponent implements IComponentController {
    static get $name() { return "docsTooltipDelays" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipDelaysComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-delays/tooltip-delays.component.html" }
    }
}
`,$T=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">Hover trigger, end placement, body container and a 300 ms opening delay.</p>
    </div>
</div>

<button type="button" class="btn btn-outline-primary" ngb-tooltip="'This instance reads every option from NgbTooltipConfig.'">Hover over me</button>
`,eE=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbTooltipConfig } from "ngb-js";

export class TooltipGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<NgbTooltipConfig, "container" | "openDelay" | "placement" | "triggers">;

    constructor(private readonly config: NgbTooltipConfig) {
        this.initialConfig = {
            container: config.container,
            openDelay: config.openDelay,
            placement: config.placement,
            triggers: config.triggers,
        };
        config.container = "body";
        config.openDelay = 300;
        config.placement = "end";
        config.triggers = "mouseenter:mouseleave";
    }

    public $postLink(): void { this.restoreConfig(); }
    public $onDestroy(): void { this.restoreConfig(); }

    private restoreConfig(): void {
        this.config.container = this.initialConfig.container;
        this.config.openDelay = this.initialConfig.openDelay;
        this.config.placement = this.initialConfig.placement;
        this.config.triggers = this.initialConfig.triggers;
    }

    static get $name() { return "docsTooltipGlobal" }
    static get $inject() { return [NgbTooltipConfig.$name] }
    static get $factory(): IComponentOptions {
        return { controller: TooltipGlobalComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-global/tooltip-global.component.html" }
    }
}
`,tE=`<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" placement="'top'" ngb-tooltip="'Tooltip on top'">Top</button>
    <button type="button" class="btn btn-outline-secondary" placement="'end'" ngb-tooltip="'Tooltip on right'">Right</button>
    <button type="button" class="btn btn-outline-secondary" placement="'bottom'" ngb-tooltip="'Tooltip on bottom'">Bottom</button>
    <button type="button" class="btn btn-outline-secondary" placement="'start'" ngb-tooltip="'Tooltip on left'">Left</button>
</div>
`,nE=`import type { IComponentController, IComponentOptions } from "angular";

export class TooltipPlacementsComponent implements IComponentController {
    static get $name() { return "docsTooltipPlacements" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipPlacementsComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-placements/tooltip-placements.component.html" }
    }
}
`,rE=`<ng-template ng-ref="example.contentTemplate">
    <span>Hello, <strong>{{ example.name }}</strong>!</span>
</ng-template>

<div class="d-flex flex-wrap align-items-center gap-2">
    <button type="button" class="btn btn-outline-primary" ngb-tooltip="example.contentTemplate">HTML and bindings</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" ng-click="example.name = example.name === 'NgbJS' ? 'AngularJS' : 'NgbJS'">Change binding</button>
</div>
`,iE=`import type { IComponentController, IComponentOptions } from "angular";
import type { TemplateRef } from "ngjs-core";

export class TooltipTemplateComponent implements IComponentController {
    public name = "NgbJS";
    public contentTemplate?: TemplateRef<unknown>;
    static get $name() { return "docsTooltipTemplate" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipTemplateComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-template/tooltip-template.component.html" }
    }
}
`,aE=`<p class="mb-3">Custom events can be paired as <code>mouseenter:mouseleave</code>.</p>
<button type="button" class="btn btn-outline-secondary mb-4" ngb-tooltip="'Shown while the pointer is over the trigger'" triggers="'mouseenter:mouseleave'">Hover over me</button>

<p class="mb-3">Manual triggers delegate opening and closing to application code.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-primary" ngb-tooltip="'Manually controlled tooltip'" triggers="'manual'" auto-close="false" ng-ref="example.manual" ng-ref-read="ngbTooltip" ng-click="example.manual.open()">Open tooltip</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.manual.close()">Close tooltip</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.manual.toggle()">Toggle tooltip</button>
</div>
`,oE=`import type { IComponentController, IComponentOptions } from "angular";
import type { NgbTooltip } from "ngb-js";

export class TooltipTriggersComponent implements IComponentController {
    public manual?: NgbTooltip;
    static get $name() { return "docsTooltipTriggers" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipTriggersComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-triggers/tooltip-triggers.component.html" }
    }
}
`,sE=class e{examples={placements:{html:tE,typescript:nE},template:{html:rE,typescript:iE},triggers:{html:aE,typescript:oE},autoclose:{html:BT,typescript:VT},context:{html:WT,typescript:GT},customTarget:{html:YT,typescript:XT},delays:{html:ZT,typescript:QT},body:{html:HT,typescript:UT},customClass:{html:qT,typescript:JT,css:KT},global:{html:$T,typescript:eE}};static get $name(){return`docsTooltipExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/tooltip-examples-page/tooltip-examples-page.component.html`,controllerAs:`$`}}},cE=class e{static get $name(){return`docsTypeaheadApiPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/typeahead-api-page/typeahead-api-page.component.html`,controllerAs:`$`}}},lE=`<label class="form-label" for="exact-typeahead">Search for a state</label>
<input id="exact-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" input-formatter="example.formatter" result-formatter="example.formatter" select-on-exact="true" placeholder="Try California">
<pre class="mt-3 mb-0">Model: {{ example.model | json }}</pre>
`,uE=`import type { IComponentController, IComponentOptions } from "angular";
import { debounceTime, map, type OperatorFunction } from "rxjs";

interface State { name: string }
const STATES: State[] = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii"].map(name => ({ name }));

export class ExactTypeaheadComponent implements IComponentController {
    public model?: State;
    public readonly formatter = (state: State): string => state.name;
    public readonly search: OperatorFunction<string, State[]> = text$ => text$.pipe(
        debounceTime(200),
        map(term => term ? STATES.filter(state => state.name.toLowerCase().includes(term.toLowerCase())) : []),
    );
    static get $name() { return "docsExactTypeahead" }
    static get $factory(): IComponentOptions {
        return { controller: ExactTypeaheadComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/exact-typeahead/exact-typeahead.component.html" }
    }
}
`,dE=`<label class="form-label" for="focus-typeahead">Search for a state</label>
<input id="focus-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" ng-focus="example.focus$.next($event.target.value)" placeholder="Focus to see suggestions">
<p class="small text-body-secondary mt-2 mb-0">Model: <strong>{{ example.model || 'empty' }}</strong></p>
`,fE=`import type { IComponentController, IComponentOptions } from "angular";
import { debounceTime, distinctUntilChanged, map, merge, type OperatorFunction, Subject } from "rxjs";

const STATES = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

export class FocusTypeaheadComponent implements IComponentController {
    public model = "";
    public readonly focus$ = new Subject<string>();
    public readonly search: OperatorFunction<string, string[]> = text$ => merge(
        text$.pipe(debounceTime(200), distinctUntilChanged()),
        this.focus$,
    ).pipe(
        map(term => (term ? STATES.filter(state => state.toLowerCase().includes(term.toLowerCase())) : STATES).slice(0, 10)),
    );
    public $onDestroy(): void { this.focus$.complete(); }
    static get $name() { return "docsFocusTypeahead" }
    static get $factory(): IComponentOptions {
        return { controller: FocusTypeaheadComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/focus-typeahead/focus-typeahead.component.html" }
    }
}
`,pE=`<label class="form-label" for="formatted-typeahead">Search for a state</label>
<input id="formatted-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" result-formatter="example.formatter" placeholder="Results are formatted in uppercase">
<p class="small text-body-secondary mt-2 mb-0">Model: <strong>{{ example.model || 'empty' }}</strong></p>
`,mE=`import type { IComponentController, IComponentOptions } from "angular";
import { debounceTime, distinctUntilChanged, map, type OperatorFunction } from "rxjs";

const STATES = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii"];

export class FormattedTypeaheadComponent implements IComponentController {
    public model = "";
    public readonly formatter = (result: string): string => result.toUpperCase();
    public readonly search: OperatorFunction<string, string[]> = text$ => text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term ? STATES.filter(state => state.toLowerCase().includes(term.toLowerCase())) : []),
    );
    static get $name() { return "docsFormattedTypeahead" }
    static get $factory(): IComponentOptions {
        return { controller: FormattedTypeaheadComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/formatted-typeahead/formatted-typeahead.component.html" }
    }
}
`,hE=`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">Hint completion, exact-match selection and a popup appended to body.</p>
    </div>
</div>

<label class="form-label" for="global-typeahead">Search for a state</label>
<input id="global-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" placeholder="Try Cal">
`,gE=`import type { IComponentController, IComponentOptions } from "angular";
import { NgbTypeaheadConfig } from "ngb-js";
import { debounceTime, distinctUntilChanged, map, type OperatorFunction } from "rxjs";

const STATES = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii"];

export class TypeaheadGlobalComponent implements IComponentController {
    public model = "";
    private readonly initialConfig: Pick<NgbTypeaheadConfig, "container" | "selectOnExact" | "showHint">;

    constructor(private readonly config: NgbTypeaheadConfig) {
        this.initialConfig = {
            container: config.container,
            selectOnExact: config.selectOnExact,
            showHint: config.showHint,
        };
        config.container = "body";
        config.selectOnExact = true;
        config.showHint = true;
    }

    public readonly search: OperatorFunction<string, string[]> = text$ => text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term.length < 2 ? [] : STATES.filter(state => state.toLowerCase().startsWith(term.toLowerCase()))),
    );

    public $postLink(): void { this.restoreConfig(); }
    public $onDestroy(): void { this.restoreConfig(); }
    private restoreConfig(): void {
        this.config.container = this.initialConfig.container;
        this.config.selectOnExact = this.initialConfig.selectOnExact;
        this.config.showHint = this.initialConfig.showHint;
    }

    static get $name() { return "docsTypeaheadGlobal" }
    static get $inject() { return [NgbTypeaheadConfig.$name] }
    static get $factory(): IComponentOptions {
        return { controller: TypeaheadGlobalComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/typeahead-global/typeahead-global.component.html" }
    }
}
`,_E=`<p>Manual text is not accepted; the model changes only after selecting a suggestion.</p>
<label class="form-label" for="non-editable-typeahead">Search for a state</label>
<input id="non-editable-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" input-formatter="example.formatter" result-formatter="example.formatter" editable="false" placeholder="Type at least two characters">
<pre class="mt-3 mb-0">Model: {{ example.model | json }}</pre>
`,vE=`import type { IComponentController, IComponentOptions } from "angular";
import { debounceTime, distinctUntilChanged, map, type OperatorFunction } from "rxjs";

interface State { id: number; name: string }
const STATES: State[] = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii"].map((name, id) => ({ id, name }));

export class NonEditableTypeaheadComponent implements IComponentController {
    public model: State | null = null;
    public readonly formatter = (state: State): string => state.name;
    public readonly search: OperatorFunction<string, State[]> = text$ => text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term.length < 2 ? [] : STATES.filter(state => state.name.toLowerCase().includes(term.toLowerCase()))),
    );
    static get $name() { return "docsNonEditableTypeahead" }
    static get $factory(): IComponentOptions {
        return { controller: NonEditableTypeaheadComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/non-editable-typeahead/non-editable-typeahead.component.html" }
    }
}
`,yE=`<label class="form-label" for="simple-typeahead">Search for a state</label>
<input id="simple-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" placeholder="Type at least two characters">
<p class="small text-body-secondary mt-2 mb-0">Model: <strong>{{ example.model || 'empty' }}</strong></p>
`,bE=`import type { IComponentController, IComponentOptions } from "angular";
import { debounceTime, distinctUntilChanged, map, type OperatorFunction } from "rxjs";

const STATES = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

export class SimpleTypeaheadComponent implements IComponentController {
    public model = "";
    public readonly search: OperatorFunction<string, string[]> = text$ => text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term.length < 2 ? [] : STATES.filter(state => state.toLowerCase().includes(term.toLowerCase())).slice(0, 10)),
    );
    static get $name() { return "docsSimpleTypeahead" }
    static get $factory(): IComponentOptions {
        return { controller: SimpleTypeaheadComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/simple-typeahead/simple-typeahead.component.html" }
    }
}
`,xE=`<ng-template ng-ref="example.resultTemplate" let-result="result" let-term="term">
    <span class="d-flex align-items-center gap-2">
        <span class="fs-5" aria-hidden="true">{{ result.flag }}</span>
        <span class="flex-grow-1"><ngb-highlight result="result.name" term="term"></ngb-highlight></span>
        <small class="text-body-secondary">{{ result.region }}</small>
    </span>
</ng-template>

<label class="form-label" for="template-results-typeahead">Search for a country</label>
<input id="template-results-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" result-template="example.resultTemplate" input-formatter="example.formatter" placeholder="Try Mexico">
<pre class="mt-3 mb-0">Model: {{ example.model | json }}</pre>
`,SE=`import type { IComponentController, IComponentOptions } from "angular";
import type { TemplateRef } from "ngjs-core";
import { debounceTime, map, type OperatorFunction } from "rxjs";

interface Country { name: string; flag: string; region: string }
const COUNTRIES: Country[] = [
    { name: "Mexico", flag: "🇲🇽", region: "North America" },
    { name: "Argentina", flag: "🇦🇷", region: "South America" },
    { name: "Brazil", flag: "🇧🇷", region: "South America" },
    { name: "Canada", flag: "🇨🇦", region: "North America" },
    { name: "Colombia", flag: "🇨🇴", region: "South America" },
    { name: "Germany", flag: "🇩🇪", region: "Europe" },
    { name: "Japan", flag: "🇯🇵", region: "Asia" },
    { name: "Spain", flag: "🇪🇸", region: "Europe" },
];

export class TemplateResultsTypeaheadComponent implements IComponentController {
    public model?: Country;
    public resultTemplate?: TemplateRef<unknown>;
    public readonly formatter = (country: Country): string => country.name;
    public readonly search: OperatorFunction<string, Country[]> = text$ => text$.pipe(
        debounceTime(200),
        map(term => term ? COUNTRIES.filter(country => country.name.toLowerCase().includes(term.toLowerCase())).slice(0, 8) : []),
    );
    static get $name() { return "docsTemplateResultsTypeahead" }
    static get $factory(): IComponentOptions {
        return { controller: TemplateResultsTypeaheadComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/template-results-typeahead/template-results-typeahead.component.html" }
    }
}
`,CE=`<label class="form-label" for="wikipedia-typeahead">Search for a Wikipedia page</label>
<input id="wikipedia-typeahead" type="text" class="form-control" ng-class="{ 'is-invalid': example.searchFailed }" ng-model="example.model" ngb-typeahead="example.search" placeholder="Wikipedia search">
<div class="form-text" ng-if="example.searching">Searching…</div>
<div class="invalid-feedback" ng-if="example.searchFailed">Suggestions could not be loaded.</div>
<p class="small text-body-secondary mt-2 mb-0">Model: <strong>{{ example.model || 'empty' }}</strong></p>
`,wE=`import type { IComponentController, IComponentOptions, IHttpService } from "angular";
import { catchError, debounceTime, distinctUntilChanged, from, map, of, type OperatorFunction, switchMap, tap } from "rxjs";

const WIKI_URL = "https://en.wikipedia.org/w/api.php";
type WikiResponse = [string, string[], string[], string[]];

export class WikipediaSearchService {
    constructor(private readonly $http: IHttpService) {}

    public search(term: string) {
        if (!term) return of([] as string[]);
        return from(this.$http.get<WikiResponse>(WIKI_URL, {
            params: { action: "opensearch", format: "json", origin: "*", search: term },
        })).pipe(map(response => response.data[1]));
    }

    static get $name() { return "docs.wikipedia.search.service" }
    static get $inject() { return ["$http"] }
}

export class WikipediaTypeaheadComponent implements IComponentController {
    public model = "";
    public searching = false;
    public searchFailed = false;

    constructor(private readonly wikipedia: WikipediaSearchService) {}

    public readonly search: OperatorFunction<string, string[]> = text$ => text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.searching = true),
        switchMap(term => this.wikipedia.search(term).pipe(
            tap(() => this.searchFailed = false),
            catchError(() => {
                this.searchFailed = true;
                return of([] as string[]);
            }),
        )),
        tap(() => this.searching = false),
    );

    static get $name() { return "docsWikipediaTypeahead" }
    static get $inject() { return [WikipediaSearchService.$name] }
    static get $factory(): IComponentOptions {
        return { controller: WikipediaTypeaheadComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/wikipedia-typeahead/wikipedia-typeahead.component.html" }
    }
}
`,TE=class e{examples={simple:{html:yE,typescript:bE},focus:{html:dE,typescript:fE},formatted:{html:pE,typescript:mE},exact:{html:lE,typescript:uE},wikipedia:{html:CE,typescript:wE},templateResults:{html:xE,typescript:SE},nonEditable:{html:_E,typescript:vE},global:{html:hE,typescript:gE}};static get $name(){return`docsTypeaheadExamplesPage`}static get $factory(){return{controller:e,templateUrl:`src/app/features/lib/pages/typeahead-examples-page/typeahead-examples-page.component.html`,controllerAs:`$`}}},EE=e=>{e.state(`docs.dashboard.alert`,{url:`/components/alert`,redirectTo:`docs.dashboard.alert.examples`,data:{title:`Alert`,tabs:[{name:`Examples`,to:`docs.dashboard.alert.examples`},{name:`Api`,to:`docs.dashboard.alert.api`}],externalLinks:{bootstrap:`components/alerts/`,ngBootstrap:`components/alert/overview`}}}),e.state(`docs.dashboard.alert.examples`,{url:`/examples`,data:{sections:[{id:`simple-alert`,name:`Simple alert`},{id:`alert-closeable`,name:`Closeable alerts`},{id:`self-closing-alert`,name:`Self-closing alert`},{id:`alert-custom`,name:`Custom alert`},{id:`alert-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:Yb.$name}}}),e.state(`docs.dashboard.alert.api`,{url:`/api`,data:{sections:[{id:`ngb-alert`,name:`NgbAlert`},{id:`ngb-alert-config`,name:`NgbAlertConfig`}]},views:{"$default@docs.dashboard":{component:zb.$name}}}),e.state(`docs.dashboard.accordion`,{url:`/components/accordion`,redirectTo:`docs.dashboard.accordion.examples`,data:{title:`Accordion`,tabs:[{name:`Examples`,to:`docs.dashboard.accordion.examples`},{name:`Api`,to:`docs.dashboard.accordion.api`}],externalLinks:{bootstrap:`components/accordion/`,ngBootstrap:`components/accordion/overview`}}}),e.state(`docs.dashboard.accordion.examples`,{url:`/examples`,data:{sections:[{id:`accordion-simple`,name:`Basic accordion`},{id:`one-panel-accordion`,name:`One panel at a time`},{id:`accordion-toggle-panels`,name:`Programmatic controls`},{id:`accordion-custom-header`,name:`Custom headers`},{id:`accordion-content`,name:`Preserve content`},{id:`accordion-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:ox.$name}}}),e.state(`docs.dashboard.accordion.api`,{url:`/api`,data:{sections:[{id:`ngb-accordion`,name:`NgbAccordion`},{id:`ngb-accordion-item`,name:`NgbAccordionItem`},{id:`ngb-accordion-header`,name:`NgbAccordionHeader`},{id:`ngb-accordion-button`,name:`NgbAccordionButton`},{id:`ngb-accordion-toggle`,name:`NgbAccordionToggle`},{id:`ngb-accordion-body`,name:`NgbAccordionBody`},{id:`ngb-accordion-config`,name:`NgbAccordionConfig`}]},views:{"$default@docs.dashboard":{component:Xb.$name}}}),e.state(`docs.dashboard.carousel`,{url:`/components/carousel`,redirectTo:`docs.dashboard.carousel.examples`,data:{title:`Carousel`,tabs:[{name:`Examples`,to:`docs.dashboard.carousel.examples`},{name:`Api`,to:`docs.dashboard.carousel.api`}],externalLinks:{bootstrap:`components/carousel/`,ngBootstrap:`components/carousel/overview`}}}),e.state(`docs.dashboard.carousel.examples`,{url:`/examples`,data:{sections:[{id:`carousel-simple`,name:`Simple carousel`},{id:`carousel-keyboard`,name:`Keyboard navigation`},{id:`carousel-controls`,name:`Pause controls`},{id:`carousel-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:mx.$name}}}),e.state(`docs.dashboard.carousel.api`,{url:`/api`,data:{sections:[{id:`ngb-carousel`,name:`NgbCarousel`},{id:`ngb-slide`,name:`NgbSlide`},{id:`ngb-carousel-config`,name:`NgbCarouselConfig`}]},views:{"$default@docs.dashboard":{component:sx.$name}}}),e.state(`docs.dashboard.collapse`,{url:`/components/collapse`,redirectTo:`docs.dashboard.collapse.examples`,data:{title:`Collapse`,tabs:[{name:`Examples`,to:`docs.dashboard.collapse.examples`},{name:`Api`,to:`docs.dashboard.collapse.api`}],externalLinks:{bootstrap:`components/collapse/`,ngBootstrap:`components/collapse/overview`}}}),e.state(`docs.dashboard.collapse.examples`,{url:`/examples`,data:{sections:[{id:`simple-collapse`,name:`Simple collapse`},{id:`horizontal-collapse`,name:`Horizontal collapse`},{id:`navbar-collapse`,name:`Responsive navbar`}]},views:{"$default@docs.dashboard":{component:Sx.$name}}}),e.state(`docs.dashboard.collapse.api`,{url:`/api`,data:{sections:[{id:`ngb-collapse`,name:`NgbCollapse`},{id:`ngb-collapse-config`,name:`NgbCollapseConfig`}]},views:{"$default@docs.dashboard":{component:hx.$name}}}),e.state(`docs.dashboard.datepicker`,{url:`/components/datepicker`,redirectTo:`docs.dashboard.datepicker.examples`,data:{title:`Datepicker`,tabs:[{name:`Examples`,to:`docs.dashboard.datepicker.examples`},{name:`Api`,to:`docs.dashboard.datepicker.api`},{name:`Calendars`,to:`docs.dashboard.datepicker.calendars`}],externalLinks:{ngBootstrap:`components/datepicker/overview`}}}),e.state(`docs.dashboard.datepicker.examples`,{url:`/examples`,data:{sections:[{id:`basic-datepicker`,name:`Basic`},{id:`popup-datepicker`,name:`Popup`},{id:`multiple-months-datepicker`,name:`Multiple months`},{id:`range-datepicker`,name:`Range selection`},{id:`range-popup-datepicker`,name:`Range in a popup`},{id:`disabled-datepicker`,name:`Disabled`},{id:`datepicker-custom-adapter`,name:`Adapter and formatter`},{id:`datepicker-i18n`,name:`Internationalization`},{id:`datepicker-custom-day`,name:`Custom day`},{id:`datepicker-custom-month`,name:`Custom month layout`},{id:`datepicker-footer`,name:`Footer template`},{id:`datepicker-position-target`,name:`Position target`},{id:`datepicker-keyboard`,name:`Keyboard navigation`},{id:`datepicker-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:fS.$name}}}),e.state(`docs.dashboard.datepicker.api`,{url:`/api`,data:{sections:[{id:`ngb-datepicker`,name:`NgbDatepicker`},{id:`ngb-input-datepicker`,name:`NgbInputDatepicker`},{id:`ngb-datepicker-config`,name:`NgbDatepickerConfig`},{id:`ngb-input-datepicker-config`,name:`NgbInputDatepickerConfig`},{id:`ngb-datepicker-extension-contracts`,name:`Extension contracts`}]},views:{"$default@docs.dashboard":{component:Cx.$name}}}),e.state(`docs.dashboard.datepicker.calendars`,{url:`/calendars`,data:{sections:[{id:`calendar-hebrew`,name:`Hebrew`},{id:`calendar-jalali`,name:`Jalali`},{id:`calendar-islamic-civil`,name:`Islamic Civil`},{id:`calendar-islamic-umalqura`,name:`Islamic Umm al-Qura`},{id:`calendar-buddhist`,name:`Buddhist`},{id:`calendar-ethiopian`,name:`Ethiopian`},{id:`calendar-intergalactic`,name:`Intergalactic Standard`}]},views:{"$default@docs.dashboard":{component:Nx.$name}}}),e.state(`docs.dashboard.dropdown`,{url:`/components/dropdown`,redirectTo:`docs.dashboard.dropdown.examples`,data:{title:`Dropdown`,tabs:[{name:`Examples`,to:`docs.dashboard.dropdown.examples`},{name:`Api`,to:`docs.dashboard.dropdown.api`}],externalLinks:{bootstrap:`components/dropdowns/`,ngBootstrap:`components/dropdown/overview`}}}),e.state(`docs.dashboard.dropdown.examples`,{url:`/examples`,data:{sections:[{id:`simple-dropdown`,name:`Simple dropdown`},{id:`manual-dropdown`,name:`Manual triggers`},{id:`dropdown-button-groups`,name:`Button groups`},{id:`dropdown-disabled-items`,name:`Disabled items`},{id:`dropdown-form`,name:`Dropdown form`},{id:`dropdown-body`,name:`Body container`},{id:`dropdown-navbar`,name:`Navbar positioning`},{id:`dropdown-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:ES.$name}}}),e.state(`docs.dashboard.dropdown.api`,{url:`/api`,data:{sections:[{id:`ngb-dropdown`,name:`NgbDropdown`},{id:`ngb-dropdown-anchor`,name:`NgbDropdownAnchor`},{id:`ngb-dropdown-toggle`,name:`NgbDropdownToggle`},{id:`ngb-dropdown-menu`,name:`NgbDropdownMenu`},{id:`ngb-dropdown-item`,name:`NgbDropdownItem`},{id:`ngb-dropdown-config`,name:`NgbDropdownConfig`}]},views:{"$default@docs.dashboard":{component:pS.$name}}}),e.state(`docs.dashboard.modal`,{url:`/components/modal`,redirectTo:`docs.dashboard.modal.examples`,data:{title:`Modal`,tabs:[{name:`Examples`,to:`docs.dashboard.modal.examples`},{name:`Api`,to:`docs.dashboard.modal.api`}],externalLinks:{bootstrap:`components/modal/`,ngBootstrap:`components/modal/overview`}}}),e.state(`docs.dashboard.modal.examples`,{url:`/examples`,data:{sections:[{id:`modal-default`,name:`Default options`},{id:`modal-component-content`,name:`Component content`},{id:`modal-focus`,name:`Focus management`},{id:`modal-options`,name:`Modal options`},{id:`modal-updatable`,name:`Updatable options`},{id:`modal-stacked`,name:`Stacked modals`},{id:`modal-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:ZS.$name}}}),e.state(`docs.dashboard.modal.api`,{url:`/api`,data:{sections:[{id:`ngb-modal`,name:`NgbModal`},{id:`ngb-modal-ref`,name:`NgbModalRef`},{id:`ngb-active-modal`,name:`NgbActiveModal`},{id:`ngb-modal-config`,name:`NgbModalConfig`}]},views:{"$default@docs.dashboard":{component:DS.$name}}}),e.state(`docs.dashboard.nav`,{url:`/components/nav`,redirectTo:`docs.dashboard.nav.examples`,data:{title:`Nav`,tabs:[{name:`Examples`,to:`docs.dashboard.nav.examples`},{name:`Api`,to:`docs.dashboard.nav.api`}],externalLinks:{bootstrap:`components/navs-tabs/`,ngBootstrap:`components/nav/overview`}}}),e.state(`docs.dashboard.nav.examples`,{url:`/examples`,data:{sections:[{id:`simple-nav`,name:`Simple nav`},{id:`alternative-nav`,name:`Alternative markup`},{id:`vertical-nav`,name:`Vertical pills`},{id:`selecting-nav`,name:`Selecting navs`},{id:`keep-content-nav`,name:`Keep content`},{id:`dynamic-nav`,name:`Dynamic navs`},{id:`custom-nav`,name:`Custom style`},{id:`nav-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:gC.$name}}}),e.state(`docs.dashboard.nav.api`,{url:`/api`,data:{sections:[{id:`ngb-nav`,name:`NgbNav`},{id:`ngb-nav-item`,name:`NgbNavItem`},{id:`ngb-nav-link`,name:`NgbNavLink`},{id:`ngb-nav-content`,name:`NgbNavContent`},{id:`ngb-nav-outlet`,name:`NgbNavOutlet`},{id:`ngb-nav-config`,name:`NgbNavConfig`}]},views:{"$default@docs.dashboard":{component:QS.$name}}}),e.state(`docs.dashboard.offcanvas`,{url:`/components/offcanvas`,redirectTo:`docs.dashboard.offcanvas.examples`,data:{title:`Offcanvas`,tabs:[{name:`Examples`,to:`docs.dashboard.offcanvas.examples`},{name:`Api`,to:`docs.dashboard.offcanvas.api`}],externalLinks:{bootstrap:`components/offcanvas/`,ngBootstrap:`components/offcanvas/overview`}}}),e.state(`docs.dashboard.offcanvas.examples`,{url:`/examples`,data:{sections:[{id:`offcanvas-default`,name:`Default options`},{id:`offcanvas-component-content`,name:`Component content`},{id:`offcanvas-focus`,name:`Focus management`},{id:`offcanvas-options`,name:`Offcanvas options`},{id:`offcanvas-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:NC.$name}}}),e.state(`docs.dashboard.offcanvas.api`,{url:`/api`,data:{sections:[{id:`ngb-offcanvas`,name:`NgbOffcanvas`},{id:`ngb-offcanvas-ref`,name:`NgbOffcanvasRef`},{id:`ngb-active-offcanvas`,name:`NgbActiveOffcanvas`},{id:`ngb-offcanvas-config`,name:`NgbOffcanvasConfig`}]},views:{"$default@docs.dashboard":{component:_C.$name}}}),e.state(`docs.dashboard.pagination`,{url:`/components/pagination`,redirectTo:`docs.dashboard.pagination.examples`,data:{title:`Pagination`,tabs:[{name:`Examples`,to:`docs.dashboard.pagination.examples`},{name:`Api`,to:`docs.dashboard.pagination.api`}],externalLinks:{bootstrap:`components/pagination/`,ngBootstrap:`components/pagination/overview`}}}),e.state(`docs.dashboard.pagination.examples`,{url:`/examples`,data:{sections:[{id:`basic-pagination`,name:`Basic pagination`},{id:`advanced-pagination`,name:`Advanced pagination`},{id:`custom-pagination`,name:`Custom links and pages`},{id:`pagination-size`,name:`Pagination size`},{id:`pagination-alignment`,name:`Pagination alignment`},{id:`disabled-pagination`,name:`Disabled pagination`},{id:`pagination-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:YC.$name}}}),e.state(`docs.dashboard.pagination.api`,{url:`/api`,data:{sections:[{id:`ngb-pagination`,name:`NgbPagination`},{id:`ngb-pagination-config`,name:`NgbPaginationConfig`}]},views:{"$default@docs.dashboard":{component:PC.$name}}}),e.state(`docs.dashboard.popover`,{url:`/components/popover`,redirectTo:`docs.dashboard.popover.examples`,data:{title:`Popover`,tabs:[{name:`Examples`,to:`docs.dashboard.popover.examples`},{name:`Api`,to:`docs.dashboard.popover.api`}],externalLinks:{bootstrap:`components/popovers/`,ngBootstrap:`components/popover/overview`}}}),e.state(`docs.dashboard.popover.examples`,{url:`/examples`,data:{sections:[{id:`popover-placements`,name:`Quick popovers`},{id:`popover-template`,name:`HTML and bindings`},{id:`popover-triggers`,name:`Custom triggers`},{id:`popover-manual-control`,name:`External controls`},{id:`popover-autoclose`,name:`Automatic closing`},{id:`popover-context`,name:`Template context`},{id:`popover-custom-target`,name:`Custom target`},{id:`popover-delays`,name:`Open and close delays`},{id:`popover-events`,name:`Visibility events`},{id:`popover-body`,name:`Body container`},{id:`popover-custom-class`,name:`Custom class`},{id:`popover-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:Sw.$name}}}),e.state(`docs.dashboard.popover.api`,{url:`/api`,data:{sections:[{id:`ngb-popover`,name:`NgbPopover`},{id:`ngb-popover-config`,name:`NgbPopoverConfig`}]},views:{"$default@docs.dashboard":{component:XC.$name}}}),e.state(`docs.dashboard.progressbar`,{url:`/components/progressbar`,redirectTo:`docs.dashboard.progressbar.examples`,data:{title:`Progress bar`,tabs:[{name:`Examples`,to:`docs.dashboard.progressbar.examples`},{name:`Api`,to:`docs.dashboard.progressbar.api`}],externalLinks:{bootstrap:`components/progress/`,ngBootstrap:`components/progressbar/overview`}}}),e.state(`docs.dashboard.progressbar.examples`,{url:`/examples`,data:{sections:[{id:`simple-progressbar`,name:`Simple progress bars`},{id:`contextual-text-progressbar`,name:`Contextual text`},{id:`striped-progress-bar`,name:`Striped bars`},{id:`custom-labels-progressbar`,name:`Custom labels`},{id:`progress-height`,name:`Custom height`},{id:`progress-bars-stacked`,name:`Stacked bars`},{id:`progressbar-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:Rw.$name}}}),e.state(`docs.dashboard.progressbar.api`,{url:`/api`,data:{sections:[{id:`ngb-progressbar`,name:`NgbProgressbar`},{id:`ngb-progressbar-stacked`,name:`NgbProgressbarStacked`},{id:`ngb-progressbar-config`,name:`NgbProgressbarConfig`}]},views:{"$default@docs.dashboard":{component:Cw.$name}}}),e.state(`docs.dashboard.rating`,{url:`/components/rating`,redirectTo:`docs.dashboard.rating.examples`,data:{title:`Rating`,tabs:[{name:`Examples`,to:`docs.dashboard.rating.examples`},{name:`Api`,to:`docs.dashboard.rating.api`}],externalLinks:{ngBootstrap:`components/rating/overview`}}}),e.state(`docs.dashboard.rating.examples`,{url:`/examples`,data:{sections:[{id:`basic-rating`,name:`Basic demo`},{id:`rating-events`,name:`Events and readonly`},{id:`rating-custom-template`,name:`Custom star template`},{id:`rating-decimal`,name:`Decimal rating`},{id:`rating-form`,name:`Form integration`},{id:`rating-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:eT.$name}}}),e.state(`docs.dashboard.rating.api`,{url:`/api`,data:{sections:[{id:`ngb-rating`,name:`NgbRating`},{id:`ngb-rating-config`,name:`NgbRatingConfig`}]},views:{"$default@docs.dashboard":{component:zw.$name}}}),e.state(`docs.dashboard.scrollspy`,{url:`/components/scrollspy`,redirectTo:`docs.dashboard.scrollspy.examples`,data:{title:`Scrollspy`,tabs:[{name:`Examples`,to:`docs.dashboard.scrollspy.examples`},{name:`Api`,to:`docs.dashboard.scrollspy.api`}],externalLinks:{bootstrap:`components/scrollspy/`,ngBootstrap:`components/scrollspy/overview`}}}),e.state(`docs.dashboard.scrollspy.examples`,{url:`/examples`,data:{sections:[{id:`basic-scrollspy`,name:`Basic`},{id:`scrollspy-menu-items`,name:`Menu items`},{id:`nested-scrollspy`,name:`Nested items`},{id:`navbar-scrollspy`,name:`Navbar`},{id:`scrollspy-service`,name:`Using the service`}]},views:{"$default@docs.dashboard":{component:cT.$name}}}),e.state(`docs.dashboard.scrollspy.api`,{url:`/api`,data:{sections:[{id:`ngb-scrollspy`,name:`NgbScrollSpy`},{id:`ngb-scrollspy-fragment`,name:`NgbScrollSpyFragment`},{id:`ngb-scrollspy-menu`,name:`NgbScrollSpyMenu`},{id:`ngb-scrollspy-item`,name:`NgbScrollSpyItem`},{id:`ngb-scrollspy-service`,name:`NgbScrollSpyService`},{id:`ngb-scrollspy-config`,name:`NgbScrollSpyConfig`}]},views:{"$default@docs.dashboard":{component:tT.$name}}}),e.state(`docs.dashboard.timepicker`,{url:`/components/timepicker`,redirectTo:`docs.dashboard.timepicker.examples`,data:{title:`Timepicker`,tabs:[{name:`Examples`,to:`docs.dashboard.timepicker.examples`},{name:`Api`,to:`docs.dashboard.timepicker.api`}],externalLinks:{ngBootstrap:`components/timepicker/overview`}}}),e.state(`docs.dashboard.timepicker.examples`,{url:`/examples`,data:{sections:[{id:`basic-timepicker`,name:`Basic timepicker`},{id:`meridian-timepicker`,name:`Meridian`},{id:`seconds-timepicker`,name:`Seconds`},{id:`spinners-timepicker`,name:`Spinners`},{id:`timepicker-custom-steps`,name:`Custom steps`},{id:`timepicker-validation`,name:`Custom validation`},{id:`timepicker-custom-adapter`,name:`Custom time adapter`},{id:`timepicker-i18n`,name:`Internationalization`}]},views:{"$default@docs.dashboard":{component:ET.$name}}}),e.state(`docs.dashboard.timepicker.api`,{url:`/api`,data:{sections:[{id:`ngb-timepicker`,name:`NgbTimepicker`},{id:`ngb-timepicker-config`,name:`NgbTimepickerConfig`},{id:`ngb-time-adapter`,name:`NgbTimeAdapter`},{id:`ngb-timepicker-i18n`,name:`NgbTimepickerI18n`}]},views:{"$default@docs.dashboard":{component:lT.$name}}}),e.state(`docs.dashboard.toast`,{url:`/components/toast`,redirectTo:`docs.dashboard.toast.examples`,data:{title:`Toast`,tabs:[{name:`Examples`,to:`docs.dashboard.toast.examples`},{name:`Api`,to:`docs.dashboard.toast.api`}],externalLinks:{bootstrap:`components/toasts/`,ngBootstrap:`components/toast/overview`}}}),e.state(`docs.dashboard.toast.examples`,{url:`/examples`,data:{sections:[{id:`inline-toast`,name:`Declarative inline usage`},{id:`template-header-toast`,name:`Template header`},{id:`closeable-toast`,name:`Closeable toast`},{id:`prevent-autohide-toast`,name:`Prevent autohide`},{id:`toast-management`,name:`Management service`}]},views:{"$default@docs.dashboard":{component:RT.$name}}}),e.state(`docs.dashboard.toast.api`,{url:`/api`,data:{sections:[{id:`ngb-toast`,name:`NgbToast`},{id:`ngb-toast-header`,name:`NgbToastHeader`},{id:`ngb-toast-config`,name:`NgbToastConfig`}]},views:{"$default@docs.dashboard":{component:DT.$name}}}),e.state(`docs.dashboard.tooltip`,{url:`/components/tooltip`,redirectTo:`docs.dashboard.tooltip.examples`,data:{title:`Tooltip`,tabs:[{name:`Examples`,to:`docs.dashboard.tooltip.examples`},{name:`Api`,to:`docs.dashboard.tooltip.api`}],externalLinks:{bootstrap:`components/tooltips/`,ngBootstrap:`components/tooltip/overview`}}}),e.state(`docs.dashboard.tooltip.examples`,{url:`/examples`,data:{sections:[{id:`tooltip-placements`,name:`Quick and easy tooltips`},{id:`tooltip-template`,name:`HTML and bindings`},{id:`tooltip-triggers`,name:`Custom and manual triggers`},{id:`tooltip-autoclose`,name:`Automatic closing`},{id:`tooltip-context`,name:`Context and manual triggers`},{id:`tooltip-custom-target`,name:`Custom target`},{id:`tooltip-delays`,name:`Open and close delays`},{id:`tooltip-body`,name:`Append to body`},{id:`tooltip-custom-class`,name:`Custom class`},{id:`tooltip-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:sE.$name}}}),e.state(`docs.dashboard.tooltip.api`,{url:`/api`,data:{sections:[{id:`ngb-tooltip`,name:`NgbTooltip`},{id:`ngb-tooltip-config`,name:`NgbTooltipConfig`}]},views:{"$default@docs.dashboard":{component:zT.$name}}}),e.state(`docs.dashboard.typeahead`,{url:`/components/typeahead`,redirectTo:`docs.dashboard.typeahead.examples`,data:{title:`Typeahead`,tabs:[{name:`Examples`,to:`docs.dashboard.typeahead.examples`},{name:`Api`,to:`docs.dashboard.typeahead.api`}],externalLinks:{ngBootstrap:`components/typeahead/overview`}}}),e.state(`docs.dashboard.typeahead.examples`,{url:`/examples`,data:{sections:[{id:`simple-typeahead`,name:`Simple Typeahead`},{id:`focus-typeahead`,name:`Open on focus`},{id:`formatted-typeahead`,name:`Formatted results`},{id:`exact-typeahead`,name:`Select on exact`},{id:`wikipedia-typeahead`,name:`Wikipedia search`},{id:`template-results-typeahead`,name:`Template for results`},{id:`non-editable-typeahead`,name:`Prevent manual entry`},{id:`typeahead-global`,name:`Global configuration`}]},views:{"$default@docs.dashboard":{component:TE.$name}}}),e.state(`docs.dashboard.typeahead.api`,{url:`/api`,data:{sections:[{id:`ngb-typeahead`,name:`NgbTypeahead`},{id:`ngb-highlight`,name:`NgbHighlight`},{id:`ngb-typeahead-config`,name:`NgbTypeaheadConfig`}]},views:{"$default@docs.dashboard":{component:cE.$name}}})};EE.$inject=[`$stateProvider`];var $=n.default.module(`docs.lib`,[]);$.component(X_.$name,X_.$factory),$.component(Z_.$name,Z_.$factory),$.component(Q_.$name,Q_.$factory),$.component($_.$name,$_.$factory),$.component(ev.$name,ev.$factory),$.component(tv.$name,tv.$factory),$.component(nv.$name,nv.$factory),$.component(rv.$name,rv.$factory),$.component(iv.$name,iv.$factory),$.component(av.$name,av.$factory),$.component(ov.$name,ov.$factory),$.component(sv.$name,sv.$factory),$.component(cv.$name,cv.$factory),$.component(lv.$name,lv.$factory),$.component(uv.$name,uv.$factory),$.component(dv.$name,dv.$factory),$.component(fv.$name,fv.$factory),$.component(pv.$name,pv.$factory),$.component(mv.$name,mv.$factory),$.component(hv.$name,hv.$factory),$.component(gv.$name,gv.$factory),$.component(_v.$name,_v.$factory),$.component(vv.$name,vv.$factory),$.component(yv.$name,yv.$factory),$.component(bv.$name,bv.$factory),$.component(xv.$name,xv.$factory),$.component(Cv.$name,Cv.$factory),$.component(wv.$name,wv.$factory),$.component(Sv.$name,Sv.$factory),$.component(Ev.$name,Ev.$factory),$.component(Tv.$name,Tv.$factory),$.component(Dv.$name,Dv.$factory),$.component(Ov.$name,Ov.$factory),$.component(Av.$name,Av.$factory),$.component(kv.$name,kv.$factory),$.component(Mv.$name,Mv.$factory),$.component(jv.$name,jv.$factory),$.component(Nv.$name,Nv.$factory),$.component(Pv.$name,Pv.$factory),$.component(Fv.$name,Fv.$factory),$.component(Iv.$name,Iv.$factory),$.component(Lv.$name,Lv.$factory),$.component(Rv.$name,Rv.$factory),$.component(zv.$name,zv.$factory),$.component(Bv.$name,Bv.$factory),$.component(Hv.$name,Hv.$factory),$.component(Uv.$name,Uv.$factory),$.component(Vv.$name,Vv.$factory),$.component(Gv.$name,Gv.$factory),$.component(Wv.$name,Wv.$factory),$.component(Kv.$name,Kv.$factory),$.component(qv.$name,qv.$factory),$.component(Jv.$name,Jv.$factory),$.component(Yv.$name,Yv.$factory),$.component(Xv.$name,Xv.$factory),$.component(Zv.$name,Zv.$factory),$.component(Qv.$name,Qv.$factory),$.component($v.$name,$v.$factory),$.component(ey.$name,ey.$factory),$.component(ty.$name,ty.$factory),$.component(iy.$name,iy.$factory),$.component(ay.$name,ay.$factory),$.component(oy.$name,oy.$factory),$.component(sy.$name,sy.$factory),$.component(cy.$name,cy.$factory),$.component(uy.$name,uy.$factory),$.component(dy.$name,dy.$factory),$.component(fy.$name,fy.$factory),$.component(py.$name,py.$factory),$.component(my.$name,my.$factory),$.component(hy.$name,hy.$factory),$.component(gy.$name,gy.$factory),$.component(_y.$name,_y.$factory),$.component(vy.$name,vy.$factory),$.component(yy.$name,yy.$factory),$.component(by.$name,by.$factory),$.component(xy.$name,xy.$factory),$.component(Sy.$name,Sy.$factory),$.component(Cy.$name,Cy.$factory),$.component(wy.$name,wy.$factory),$.component(Ty.$name,Ty.$factory),$.component(Ey.$name,Ey.$factory),$.component(Dy.$name,Dy.$factory),$.component(Oy.$name,Oy.$factory),$.component(ky.$name,ky.$factory),$.component(Ay.$name,Ay.$factory),$.component(jy.$name,jy.$factory),$.component(My.$name,My.$factory),$.component(Ny.$name,Ny.$factory),$.component(Py.$name,Py.$factory),$.component(Fy.$name,Fy.$factory),$.component(Iy.$name,Iy.$factory),$.component(Ly.$name,Ly.$factory),$.component(Ry.$name,Ry.$factory),$.component(zy.$name,zy.$factory),$.component(By.$name,By.$factory),$.component(Vy.$name,Vy.$factory),$.component(Hy.$name,Hy.$factory),$.component(Uy.$name,Uy.$factory),$.component(Wy.$name,Wy.$factory),$.component(Gy.$name,Gy.$factory),$.component(Ky.$name,Ky.$factory),$.component(qy.$name,qy.$factory),$.component(Jy.$name,Jy.$factory),$.component(Yy.$name,Yy.$factory),$.component(Xy.$name,Xy.$factory),$.component(Zy.$name,Zy.$factory),$.component(eb.$name,eb.$factory),$.component(tb.$name,tb.$factory),$.service(nb.$name,nb),$.component(rb.$name,rb.$factory),$.component(ib.$name,ib.$factory),$.directive(`docsTimepickerLunchValidator`,ab),$.component(ob.$name,ob.$factory),$.component(sb.$name,sb.$factory),$.component(cb.$name,cb.$factory),$.component(lb.$name,lb.$factory),$.service(ub.$name,ub),$.component(db.$name,db.$factory),$.component(fb.$name,fb.$factory),$.component(pb.$name,pb.$factory),$.component(mb.$name,mb.$factory),$.component(hb.$name,hb.$factory),$.component(gb.$name,gb.$factory),$.component(_b.$name,_b.$factory),$.component(vb.$name,vb.$factory),$.component(yb.$name,yb.$factory),$.component(bb.$name,bb.$factory),$.component(xb.$name,xb.$factory),$.component(Cb.$name,Cb.$factory),$.component(Tb.$name,Tb.$factory),$.component(Db.$name,Db.$factory),$.component(kb.$name,kb.$factory),$.component(jb.$name,jb.$factory),$.component(Nb.$name,Nb.$factory),$.component(Fb.$name,Fb.$factory),$.service(Lb.$name,Lb),$.component(Rb.$name,Rb.$factory),$.component(zb.$name,zb.$factory),$.component(Yb.$name,Yb.$factory),$.component(Xb.$name,Xb.$factory),$.component(ox.$name,ox.$factory),$.component(sx.$name,sx.$factory),$.component(mx.$name,mx.$factory),$.component(hx.$name,hx.$factory),$.component(Sx.$name,Sx.$factory),$.component(Cx.$name,Cx.$factory),$.component(Nx.$name,Nx.$factory),$.component(fS.$name,fS.$factory),$.component(pS.$name,pS.$factory),$.component(ES.$name,ES.$factory),$.component(DS.$name,DS.$factory),$.component(ZS.$name,ZS.$factory),$.component(QS.$name,QS.$factory),$.component(gC.$name,gC.$factory),$.component(_C.$name,_C.$factory),$.component(NC.$name,NC.$factory),$.component(PC.$name,PC.$factory),$.component(YC.$name,YC.$factory),$.component(XC.$name,XC.$factory),$.component(Sw.$name,Sw.$factory),$.component(Cw.$name,Cw.$factory),$.component(Rw.$name,Rw.$factory),$.component(zw.$name,zw.$factory),$.component(eT.$name,eT.$factory),$.component(tT.$name,tT.$factory),$.component(cT.$name,cT.$factory),$.component(lT.$name,lT.$factory),$.component(ET.$name,ET.$factory),$.component(DT.$name,DT.$factory),$.component(RT.$name,RT.$factory),$.component(zT.$name,zT.$factory),$.component(sE.$name,sE.$factory),$.component(cE.$name,cE.$factory),$.component(TE.$name,TE.$factory),$.config(EE);var DE=n.default.module(`docs.features`,[W_.name,J_.name,$.name]),OE=n.default.module(`docs`,[Ri,Q.name,Lc.name,Ih.name,z_.name,DE.name]);OE.component(i_.$name,i_.$factory),OE.config(a_);