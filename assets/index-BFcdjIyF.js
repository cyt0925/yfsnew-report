(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Yv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $m={exports:{}},Xl={},Ym={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),qv=Symbol.for("react.portal"),Kv=Symbol.for("react.fragment"),Zv=Symbol.for("react.strict_mode"),Qv=Symbol.for("react.profiler"),Jv=Symbol.for("react.provider"),e_=Symbol.for("react.context"),t_=Symbol.for("react.forward_ref"),n_=Symbol.for("react.suspense"),i_=Symbol.for("react.memo"),r_=Symbol.for("react.lazy"),Rh=Symbol.iterator;function s_(t){return t===null||typeof t!="object"?null:(t=Rh&&t[Rh]||t["@@iterator"],typeof t=="function"?t:null)}var qm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Km=Object.assign,Zm={};function Us(t,e,n){this.props=t,this.context=e,this.refs=Zm,this.updater=n||qm}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qm(){}Qm.prototype=Us.prototype;function cd(t,e,n){this.props=t,this.context=e,this.refs=Zm,this.updater=n||qm}var ud=cd.prototype=new Qm;ud.constructor=cd;Km(ud,Us.prototype);ud.isPureReactComponent=!0;var Ph=Array.isArray,Jm=Object.prototype.hasOwnProperty,fd={current:null},eg={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Jm.call(e,i)&&!eg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:za,type:t,key:s,ref:a,props:r,_owner:fd.current}}function a_(t,e){return{$$typeof:za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===za}function o_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bh=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?o_(""+t.key):e.toString(36)}function jo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case za:case qv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+vc(a,0):i,Ph(r)?(n="",t!=null&&(n=t.replace(bh,"$&/")+"/"),jo(r,e,n,"",function(c){return c})):r!=null&&(dd(r)&&(r=a_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(bh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ph(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+vc(s,o);a+=jo(s,e,n,l,r)}else if(l=s_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+vc(s,o++),a+=jo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Za(t,e,n){if(t==null)return t;var i=[],r=0;return jo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function l_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Xo={transition:null},c_={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:fd};function ng(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Za,forEach:function(t,e,n){Za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Za(t,function(){e++}),e},toArray:function(t){return Za(t,function(e){return e})||[]},only:function(t){if(!dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Us;ze.Fragment=Kv;ze.Profiler=Qv;ze.PureComponent=cd;ze.StrictMode=Zv;ze.Suspense=n_;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c_;ze.act=ng;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Km({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=fd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Jm.call(e,l)&&!eg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:za,type:t.type,key:r,ref:s,props:i,_owner:a}};ze.createContext=function(t){return t={$$typeof:e_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Jv,_context:t},t.Consumer=t};ze.createElement=tg;ze.createFactory=function(t){var e=tg.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:t_,render:t}};ze.isValidElement=dd;ze.lazy=function(t){return{$$typeof:r_,_payload:{_status:-1,_result:t},_init:l_}};ze.memo=function(t,e){return{$$typeof:i_,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Xo.transition;Xo.transition={};try{t()}finally{Xo.transition=e}};ze.unstable_act=ng;ze.useCallback=function(t,e){return Yt.current.useCallback(t,e)};ze.useContext=function(t){return Yt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Yt.current.useEffect(t,e)};ze.useId=function(){return Yt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Yt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};ze.useRef=function(t){return Yt.current.useRef(t)};ze.useState=function(t){return Yt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Yt.current.useTransition()};ze.version="18.3.1";Ym.exports=ze;var it=Ym.exports;const u_=Yv(it);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_=it,d_=Symbol.for("react.element"),h_=Symbol.for("react.fragment"),p_=Object.prototype.hasOwnProperty,m_=f_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g_={key:!0,ref:!0,__self:!0,__source:!0};function ig(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)p_.call(e,i)&&!g_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:d_,type:t,key:s,ref:a,props:r,_owner:m_.current}}Xl.Fragment=h_;Xl.jsx=ig;Xl.jsxs=ig;$m.exports=Xl;var w=$m.exports,rg={exports:{}},vn={},sg={exports:{}},ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,q){var Q=N.length;N.push(q);e:for(;0<Q;){var ne=Q-1>>>1,Se=N[ne];if(0<r(Se,q))N[ne]=q,N[Q]=Se,Q=ne;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var q=N[0],Q=N.pop();if(Q!==q){N[0]=Q;e:for(var ne=0,Se=N.length,ke=Se>>>1;ne<ke;){var X=2*(ne+1)-1,te=N[X],ue=X+1,ce=N[ue];if(0>r(te,Q))ue<Se&&0>r(ce,te)?(N[ne]=ce,N[ue]=Q,ne=ue):(N[ne]=te,N[X]=Q,ne=X);else if(ue<Se&&0>r(ce,Q))N[ne]=ce,N[ue]=Q,ne=ue;else break e}}return q}function r(N,q){var Q=N.sortIndex-q.sortIndex;return Q!==0?Q:N.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,u=null,d=3,p=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=N)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(N){if(y=!1,v(N),!x)if(n(l)!==null)x=!0,W(P);else{var q=n(c);q!==null&&Z(S,q.startTime-N)}}function P(N,q){x=!1,y&&(y=!1,f(b),b=-1),p=!0;var Q=d;try{for(v(q),u=n(l);u!==null&&(!(u.expirationTime>q)||N&&!E());){var ne=u.callback;if(typeof ne=="function"){u.callback=null,d=u.priorityLevel;var Se=ne(u.expirationTime<=q);q=t.unstable_now(),typeof Se=="function"?u.callback=Se:u===n(l)&&i(l),v(q)}else i(l);u=n(l)}if(u!==null)var ke=!0;else{var X=n(c);X!==null&&Z(S,X.startTime-q),ke=!1}return ke}finally{u=null,d=Q,p=!1}}var C=!1,A=null,b=-1,O=5,_=-1;function E(){return!(t.unstable_now()-_<O)}function G(){if(A!==null){var N=t.unstable_now();_=N;var q=!0;try{q=A(!0,N)}finally{q?z():(C=!1,A=null)}}else C=!1}var z;if(typeof g=="function")z=function(){g(G)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,J=Y.port2;Y.port1.onmessage=G,z=function(){J.postMessage(null)}}else z=function(){m(G,0)};function W(N){A=N,C||(C=!0,z())}function Z(N,q){b=m(function(){N(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,W(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var Q=d;d=q;try{return N()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=d;d=N;try{return q()}finally{d=Q}},t.unstable_scheduleCallback=function(N,q,Q){var ne=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ne+Q:ne):Q=ne,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Q+Se,N={id:h++,callback:q,priorityLevel:N,startTime:Q,expirationTime:Se,sortIndex:-1},Q>ne?(N.sortIndex=Q,e(c,N),n(l)===null&&N===n(c)&&(y?(f(b),b=-1):y=!0,Z(S,Q-ne))):(N.sortIndex=Se,e(l,N),x||p||(x=!0,W(P))),N},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(N){var q=d;return function(){var Q=d;d=q;try{return N.apply(this,arguments)}finally{d=Q}}}})(ag);sg.exports=ag;var v_=sg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __=it,gn=v_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var og=new Set,Ma={};function Rr(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(Ma[t]=e,t=0;t<e.length;t++)og.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=Object.prototype.hasOwnProperty,x_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lh={},Nh={};function y_(t){return Cu.call(Nh,t)?!0:Cu.call(Lh,t)?!1:x_.test(t)?Nh[t]=!0:(Lh[t]=!0,!1)}function S_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M_(t,e,n,i){if(e===null||typeof e>"u"||S_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var hd=/[\-:]([a-z])/g;function pd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hd,pd);It[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hd,pd);It[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hd,pd);It[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function md(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(M_(e,n,r,i)&&(n=null),i||r===null?y_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),cg=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),Pu=Symbol.for("react.suspense"),bu=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),ug=Symbol.for("react.offscreen"),Dh=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Dh&&t[Dh]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,_c;function aa(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var xc=!1;function yc(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?aa(t):""}function E_(t){switch(t.tag){case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function Lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Jr:return"Portal";case Ru:return"Profiler";case gd:return"StrictMode";case Pu:return"Suspense";case bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cg:return(t.displayName||"Context")+".Consumer";case lg:return(t._context.displayName||"Context")+".Provider";case vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _d:return e=t.displayName||null,e!==null?e:Lu(t.type)||"Memo";case Pi:e=t._payload,t=t._init;try{return Lu(t(e))}catch{}}return null}function T_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(e);case 8:return e===gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function w_(t){var e=fg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=w_(t))}function dg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ih(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$i(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hg(t,e){e=e.checked,e!=null&&md(t,"checked",e,!1)}function Du(t,e){hg(t,e);var n=$i(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Iu(t,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Iu(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$i(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(oa(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$i(n)}}function pg(t,e){var n=$i(e.value),i=$i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Oh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eo,gg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A_=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(t){A_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ha[e]=ha[t]})});function vg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ha.hasOwnProperty(t)&&ha[t]?(""+e).trim():e+"px"}function _g(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=vg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var C_=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ou(t,e){if(e){if(C_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bu=null;function xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zu=null,hs=null,ps=null;function kh(t){if(t=Va(t)){if(typeof zu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Zl(e),zu(t.stateNode,t.type,e))}}function xg(t){hs?ps?ps.push(t):ps=[t]:hs=t}function yg(){if(hs){var t=hs,e=ps;if(ps=hs=null,kh(t),e)for(t=0;t<e.length;t++)kh(e[t])}}function Sg(t,e){return t(e)}function Mg(){}var Sc=!1;function Eg(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return Sg(t,e,n)}finally{Sc=!1,(hs!==null||ps!==null)&&(Mg(),yg())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Hu=!1;if(pi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Hu=!1}function R_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var pa=!1,dl=null,hl=!1,Gu=null,P_={onError:function(t){pa=!0,dl=t}};function b_(t,e,n,i,r,s,a,o,l){pa=!1,dl=null,R_.apply(P_,arguments)}function L_(t,e,n,i,r,s,a,o,l){if(b_.apply(this,arguments),pa){if(pa){var c=dl;pa=!1,dl=null}else throw Error(ie(198));hl||(hl=!0,Gu=c)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bh(t){if(Pr(t)!==t)throw Error(ie(188))}function N_(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bh(r),t;if(s===i)return Bh(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function wg(t){return t=N_(t),t!==null?Ag(t):null}function Ag(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ag(t);if(e!==null)return e;t=t.sibling}return null}var Cg=gn.unstable_scheduleCallback,zh=gn.unstable_cancelCallback,D_=gn.unstable_shouldYield,I_=gn.unstable_requestPaint,_t=gn.unstable_now,U_=gn.unstable_getCurrentPriorityLevel,yd=gn.unstable_ImmediatePriority,Rg=gn.unstable_UserBlockingPriority,pl=gn.unstable_NormalPriority,F_=gn.unstable_LowPriority,Pg=gn.unstable_IdlePriority,$l=null,Kn=null;function O_(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:z_,k_=Math.log,B_=Math.LN2;function z_(t){return t>>>=0,t===0?32:31-(k_(t)/B_|0)|0}var to=64,no=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=la(o):(s&=a,s!==0&&(i=la(s)))}else a=n&~r,a!==0?i=la(a):s!==0&&(i=la(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function H_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Hn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=H_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Vu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bg(){var t=to;return to<<=1,!(to&4194240)&&(to=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function V_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Sd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Lg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ng,Md,Dg,Ig,Ug,Wu=!1,io=[],Fi=null,Oi=null,ki=null,wa=new Map,Aa=new Map,Li=[],W_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hh(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Vs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Va(e),e!==null&&Md(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function j_(t,e,n,i,r){switch(e){case"focusin":return Fi=Vs(Fi,t,e,n,i,r),!0;case"dragenter":return Oi=Vs(Oi,t,e,n,i,r),!0;case"mouseover":return ki=Vs(ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wa.set(s,Vs(wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Aa.set(s,Vs(Aa.get(s)||null,t,e,n,i,r)),!0}return!1}function Fg(t){var e=pr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=Tg(n),e!==null){t.blockedOn=e,Ug(t.priority,function(){Dg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bu=i,n.target.dispatchEvent(i),Bu=null}else return e=Va(n),e!==null&&Md(e),t.blockedOn=n,!1;e.shift()}return!0}function Gh(t,e,n){$o(t)&&n.delete(e)}function X_(){Wu=!1,Fi!==null&&$o(Fi)&&(Fi=null),Oi!==null&&$o(Oi)&&(Oi=null),ki!==null&&$o(ki)&&(ki=null),wa.forEach(Gh),Aa.forEach(Gh)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Wu||(Wu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,X_)))}function Ca(t){function e(r){return Ws(r,t)}if(0<io.length){Ws(io[0],t);for(var n=1;n<io.length;n++){var i=io[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&Ws(Fi,t),Oi!==null&&Ws(Oi,t),ki!==null&&Ws(ki,t),wa.forEach(e),Aa.forEach(e),n=0;n<Li.length;n++)i=Li[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Li.length&&(n=Li[0],n.blockedOn===null);)Fg(n),n.blockedOn===null&&Li.shift()}var ms=xi.ReactCurrentBatchConfig,gl=!0;function $_(t,e,n,i){var r=Je,s=ms.transition;ms.transition=null;try{Je=1,Ed(t,e,n,i)}finally{Je=r,ms.transition=s}}function Y_(t,e,n,i){var r=Je,s=ms.transition;ms.transition=null;try{Je=4,Ed(t,e,n,i)}finally{Je=r,ms.transition=s}}function Ed(t,e,n,i){if(gl){var r=ju(t,e,n,i);if(r===null)Nc(t,e,i,vl,n),Hh(t,i);else if(j_(r,t,e,n,i))i.stopPropagation();else if(Hh(t,i),e&4&&-1<W_.indexOf(t)){for(;r!==null;){var s=Va(r);if(s!==null&&Ng(s),s=ju(t,e,n,i),s===null&&Nc(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nc(t,e,i,null,n)}}var vl=null;function ju(t,e,n,i){if(vl=null,t=xd(i),t=pr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function Og(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U_()){case yd:return 1;case Rg:return 4;case pl:case F_:return 16;case Pg:return 536870912;default:return 16}default:return 16}}var Ii=null,Td=null,Yo=null;function kg(){if(Yo)return Yo;var t,e=Td,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Yo=r.slice(t,1<i?1-i:void 0)}function qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Vh(){return!1}function _n(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ro:Vh,this.isPropagationStopped=Vh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wd=_n(Fs),Ga=ht({},Fs,{view:0,detail:0}),q_=_n(Ga),Ec,Tc,js,Yl=ht({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(Ec=t.screenX-js.screenX,Tc=t.screenY-js.screenY):Tc=Ec=0,js=t),Ec)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),Wh=_n(Yl),K_=ht({},Yl,{dataTransfer:0}),Z_=_n(K_),Q_=ht({},Ga,{relatedTarget:0}),wc=_n(Q_),J_=ht({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),ex=_n(J_),tx=ht({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nx=_n(tx),ix=ht({},Fs,{data:0}),jh=_n(ix),rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ax[t])?!!e[t]:!1}function Ad(){return ox}var lx=ht({},Ga,{key:function(t){if(t.key){var e=rx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ad,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cx=_n(lx),ux=ht({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=_n(ux),fx=ht({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ad}),dx=_n(fx),hx=ht({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=_n(hx),mx=ht({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gx=_n(mx),vx=[9,13,27,32],Cd=pi&&"CompositionEvent"in window,ma=null;pi&&"documentMode"in document&&(ma=document.documentMode);var _x=pi&&"TextEvent"in window&&!ma,Bg=pi&&(!Cd||ma&&8<ma&&11>=ma),$h=" ",Yh=!1;function zg(t,e){switch(t){case"keyup":return vx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function xx(t,e){switch(t){case"compositionend":return Hg(e);case"keypress":return e.which!==32?null:(Yh=!0,$h);case"textInput":return t=e.data,t===$h&&Yh?null:t;default:return null}}function yx(t,e){if(ts)return t==="compositionend"||!Cd&&zg(t,e)?(t=kg(),Yo=Td=Ii=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bg&&e.locale!=="ko"?null:e.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sx[t.type]:e==="textarea"}function Gg(t,e,n,i){xg(i),e=_l(e,"onChange"),0<e.length&&(n=new wd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ga=null,Ra=null;function Mx(t){Jg(t,0)}function ql(t){var e=rs(t);if(dg(e))return t}function Ex(t,e){if(t==="change")return e}var Vg=!1;if(pi){var Ac;if(pi){var Cc="oninput"in document;if(!Cc){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),Cc=typeof Kh.oninput=="function"}Ac=Cc}else Ac=!1;Vg=Ac&&(!document.documentMode||9<document.documentMode)}function Zh(){ga&&(ga.detachEvent("onpropertychange",Wg),Ra=ga=null)}function Wg(t){if(t.propertyName==="value"&&ql(Ra)){var e=[];Gg(e,Ra,t,xd(t)),Eg(Mx,e)}}function Tx(t,e,n){t==="focusin"?(Zh(),ga=e,Ra=n,ga.attachEvent("onpropertychange",Wg)):t==="focusout"&&Zh()}function wx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(Ra)}function Ax(t,e){if(t==="click")return ql(e)}function Cx(t,e){if(t==="input"||t==="change")return ql(e)}function Rx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:Rx;function Pa(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cu.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function Qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jh(t,e){var n=Qh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qh(n)}}function jg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xg(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function Rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Px(t){var e=Xg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jg(n.ownerDocument.documentElement,n)){if(i!==null&&Rd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jh(n,s);var a=Jh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bx=pi&&"documentMode"in document&&11>=document.documentMode,ns=null,Xu=null,va=null,$u=!1;function ep(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$u||ns==null||ns!==fl(i)||(i=ns,"selectionStart"in i&&Rd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),va&&Pa(va,i)||(va=i,i=_l(Xu,"onSelect"),0<i.length&&(e=new wd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ns)))}function so(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Rc={},$g={};pi&&($g=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Kl(t){if(Rc[t])return Rc[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $g)return Rc[t]=e[n];return t}var Yg=Kl("animationend"),qg=Kl("animationiteration"),Kg=Kl("animationstart"),Zg=Kl("transitionend"),Qg=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){Qg.set(t,e),Rr(e,[t])}for(var Pc=0;Pc<tp.length;Pc++){var bc=tp[Pc],Lx=bc.toLowerCase(),Nx=bc[0].toUpperCase()+bc.slice(1);Zi(Lx,"on"+Nx)}Zi(Yg,"onAnimationEnd");Zi(qg,"onAnimationIteration");Zi(Kg,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(Zg,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function np(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,L_(i,e,void 0,t),t.currentTarget=null}function Jg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;np(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;np(r,o,c),s=l}}}if(hl)throw t=Gu,hl=!1,Gu=null,t}function at(t,e){var n=e[Qu];n===void 0&&(n=e[Qu]=new Set);var i=t+"__bubble";n.has(i)||(e0(e,t,2,!1),n.add(i))}function Lc(t,e,n){var i=0;e&&(i|=4),e0(n,t,i,e)}var ao="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[ao]){t[ao]=!0,og.forEach(function(n){n!=="selectionchange"&&(Dx.has(n)||Lc(n,!1,t),Lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ao]||(e[ao]=!0,Lc("selectionchange",!1,e))}}function e0(t,e,n,i){switch(Og(e)){case 1:var r=$_;break;case 4:r=Y_;break;default:r=Ed}n=r.bind(null,e,n,t),r=void 0,!Hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=pr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Eg(function(){var c=s,h=xd(n),u=[];e:{var d=Qg.get(t);if(d!==void 0){var p=wd,x=t;switch(t){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":p=cx;break;case"focusin":x="focus",p=wc;break;case"focusout":x="blur",p=wc;break;case"beforeblur":case"afterblur":p=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=dx;break;case Yg:case qg:case Kg:p=ex;break;case Zg:p=px;break;case"scroll":p=q_;break;case"wheel":p=gx;break;case"copy":case"cut":case"paste":p=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xh}var y=(e&4)!==0,m=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var g=c,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,f!==null&&(S=Ta(g,f),S!=null&&y.push(La(g,S,v)))),m)break;g=g.return}0<y.length&&(d=new p(d,x,null,n,h),u.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Bu&&(x=n.relatedTarget||n.fromElement)&&(pr(x)||x[mi]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?pr(x):null,x!==null&&(m=Pr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(y=Wh,S="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Xh,S="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?d:rs(p),v=x==null?d:rs(x),d=new y(S,g+"leave",p,n,h),d.target=m,d.relatedTarget=v,S=null,pr(h)===c&&(y=new y(f,g+"enter",x,n,h),y.target=v,y.relatedTarget=m,S=y),m=S,p&&x)t:{for(y=p,f=x,g=0,v=y;v;v=Nr(v))g++;for(v=0,S=f;S;S=Nr(S))v++;for(;0<g-v;)y=Nr(y),g--;for(;0<v-g;)f=Nr(f),v--;for(;g--;){if(y===f||f!==null&&y===f.alternate)break t;y=Nr(y),f=Nr(f)}y=null}else y=null;p!==null&&ip(u,d,p,y,!1),x!==null&&m!==null&&ip(u,m,x,y,!0)}}e:{if(d=c?rs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var P=Ex;else if(qh(d))if(Vg)P=Cx;else{P=wx;var C=Tx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=Ax);if(P&&(P=P(t,c))){Gg(u,P,n,h);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Iu(d,"number",d.value)}switch(C=c?rs(c):window,t){case"focusin":(qh(C)||C.contentEditable==="true")&&(ns=C,Xu=c,va=null);break;case"focusout":va=Xu=ns=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,ep(u,n,h);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":ep(u,n,h)}var A;if(Cd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ts?zg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Bg&&n.locale!=="ko"&&(ts||b!=="onCompositionStart"?b==="onCompositionEnd"&&ts&&(A=kg()):(Ii=h,Td="value"in Ii?Ii.value:Ii.textContent,ts=!0)),C=_l(c,b),0<C.length&&(b=new jh(b,t,null,n,h),u.push({event:b,listeners:C}),A?b.data=A:(A=Hg(n),A!==null&&(b.data=A)))),(A=_x?xx(t,n):yx(t,n))&&(c=_l(c,"onBeforeInput"),0<c.length&&(h=new jh("onBeforeInput","beforeinput",null,n,h),u.push({event:h,listeners:c}),h.data=A))}Jg(u,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(t,n),s!=null&&i.unshift(La(t,s,r)),s=Ta(t,e),s!=null&&i.push(La(t,s,r))),t=t.return}return i}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ip(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ta(n,s),l!=null&&a.unshift(La(n,l,o))):r||(l=Ta(n,s),l!=null&&a.push(La(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Ix=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function rp(t){return(typeof t=="string"?t:""+t).replace(Ix,`
`).replace(Ux,"")}function oo(t,e,n){if(e=rp(e),rp(t)!==e&&n)throw Error(ie(425))}function xl(){}var Yu=null,qu=null;function Ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zu=typeof setTimeout=="function"?setTimeout:void 0,Fx=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(t){return sp.resolve(null).then(t).catch(kx)}:Zu;function kx(t){setTimeout(function(){throw t})}function Dc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ca(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ca(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Os,Na="__reactProps$"+Os,mi="__reactContainer$"+Os,Qu="__reactEvents$"+Os,Bx="__reactListeners$"+Os,zx="__reactHandles$"+Os;function pr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ap(t);t!==null;){if(n=t[Yn])return n;t=ap(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[Yn]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Zl(t){return t[Na]||null}var Ju=[],ss=-1;function Qi(t){return{current:t}}function lt(t){0>ss||(t.current=Ju[ss],Ju[ss]=null,ss--)}function rt(t,e){ss++,Ju[ss]=t.current,t.current=e}var Yi={},Ht=Qi(Yi),nn=Qi(!1),Sr=Yi;function Es(t,e){var n=t.type.contextTypes;if(!n)return Yi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function yl(){lt(nn),lt(Ht)}function op(t,e,n){if(Ht.current!==Yi)throw Error(ie(168));rt(Ht,e),rt(nn,n)}function t0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,T_(t)||"Unknown",r));return ht({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yi,Sr=Ht.current,rt(Ht,t),rt(nn,nn.current),!0}function lp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=t0(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,lt(nn),lt(Ht),rt(Ht,t)):lt(nn),rt(nn,n)}var oi=null,Ql=!1,Ic=!1;function n0(t){oi===null?oi=[t]:oi.push(t)}function Hx(t){Ql=!0,n0(t)}function Ji(){if(!Ic&&oi!==null){Ic=!0;var t=0,e=Je;try{var n=oi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,Ql=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),Cg(yd,Ji),r}finally{Je=e,Ic=!1}}return null}var as=[],os=0,Ml=null,El=0,Mn=[],En=0,Mr=null,ci=1,ui="";function lr(t,e){as[os++]=El,as[os++]=Ml,Ml=t,El=e}function i0(t,e,n){Mn[En++]=ci,Mn[En++]=ui,Mn[En++]=Mr,Mr=t;var i=ci;t=ui;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ci=1<<32-Hn(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function Pd(t){t.return!==null&&(lr(t,1),i0(t,1,0))}function bd(t){for(;t===Ml;)Ml=as[--os],as[os]=null,El=as[--os],as[os]=null;for(;t===Mr;)Mr=Mn[--En],Mn[En]=null,ui=Mn[--En],Mn[En]=null,ci=Mn[--En],Mn[En]=null}var mn=null,hn=null,ct=!1,On=null;function r0(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,hn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,hn=null,!0):!1;default:return!1}}function ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tf(t){if(ct){var e=hn;if(e){var n=e;if(!cp(t,e)){if(ef(t))throw Error(ie(418));e=Bi(n.nextSibling);var i=mn;e&&cp(t,e)?r0(i,n):(t.flags=t.flags&-4097|2,ct=!1,mn=t)}}else{if(ef(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ct=!1,mn=t}}}function up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function lo(t){if(t!==mn)return!1;if(!ct)return up(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ku(t.type,t.memoizedProps)),e&&(e=hn)){if(ef(t))throw s0(),Error(ie(418));for(;e;)r0(t,e),e=Bi(e.nextSibling)}if(up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=mn?Bi(t.stateNode.nextSibling):null;return!0}function s0(){for(var t=hn;t;)t=Bi(t.nextSibling)}function Ts(){hn=mn=null,ct=!1}function Ld(t){On===null?On=[t]:On.push(t)}var Gx=xi.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function co(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fp(t){var e=t._init;return e(t._payload)}function a0(t){function e(f,g){if(t){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Vi(f,g),f.index=0,f.sibling=null,f}function s(f,g,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,g,v,S){return g===null||g.tag!==6?(g=Hc(v,f.mode,S),g.return=f,g):(g=r(g,v),g.return=f,g)}function l(f,g,v,S){var P=v.type;return P===es?h(f,g,v.props.children,S,v.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Pi&&fp(P)===g.type)?(S=r(g,v.props),S.ref=Xs(f,g,v),S.return=f,S):(S=nl(v.type,v.key,v.props,null,f.mode,S),S.ref=Xs(f,g,v),S.return=f,S)}function c(f,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Gc(v,f.mode,S),g.return=f,g):(g=r(g,v.children||[]),g.return=f,g)}function h(f,g,v,S,P){return g===null||g.tag!==7?(g=yr(v,f.mode,S,P),g.return=f,g):(g=r(g,v),g.return=f,g)}function u(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Hc(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qa:return v=nl(g.type,g.key,g.props,null,f.mode,v),v.ref=Xs(f,null,g),v.return=f,v;case Jr:return g=Gc(g,f.mode,v),g.return=f,g;case Pi:var S=g._init;return u(f,S(g._payload),v)}if(oa(g)||Hs(g))return g=yr(g,f.mode,v,null),g.return=f,g;co(f,g)}return null}function d(f,g,v,S){var P=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:o(f,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:return v.key===P?l(f,g,v,S):null;case Jr:return v.key===P?c(f,g,v,S):null;case Pi:return P=v._init,d(f,g,P(v._payload),S)}if(oa(v)||Hs(v))return P!==null?null:h(f,g,v,S,null);co(f,v)}return null}function p(f,g,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(v)||null,o(g,f,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Qa:return f=f.get(S.key===null?v:S.key)||null,l(g,f,S,P);case Jr:return f=f.get(S.key===null?v:S.key)||null,c(g,f,S,P);case Pi:var C=S._init;return p(f,g,v,C(S._payload),P)}if(oa(S)||Hs(S))return f=f.get(v)||null,h(g,f,S,P,null);co(g,S)}return null}function x(f,g,v,S){for(var P=null,C=null,A=g,b=g=0,O=null;A!==null&&b<v.length;b++){A.index>b?(O=A,A=null):O=A.sibling;var _=d(f,A,v[b],S);if(_===null){A===null&&(A=O);break}t&&A&&_.alternate===null&&e(f,A),g=s(_,g,b),C===null?P=_:C.sibling=_,C=_,A=O}if(b===v.length)return n(f,A),ct&&lr(f,b),P;if(A===null){for(;b<v.length;b++)A=u(f,v[b],S),A!==null&&(g=s(A,g,b),C===null?P=A:C.sibling=A,C=A);return ct&&lr(f,b),P}for(A=i(f,A);b<v.length;b++)O=p(A,f,b,v[b],S),O!==null&&(t&&O.alternate!==null&&A.delete(O.key===null?b:O.key),g=s(O,g,b),C===null?P=O:C.sibling=O,C=O);return t&&A.forEach(function(E){return e(f,E)}),ct&&lr(f,b),P}function y(f,g,v,S){var P=Hs(v);if(typeof P!="function")throw Error(ie(150));if(v=P.call(v),v==null)throw Error(ie(151));for(var C=P=null,A=g,b=g=0,O=null,_=v.next();A!==null&&!_.done;b++,_=v.next()){A.index>b?(O=A,A=null):O=A.sibling;var E=d(f,A,_.value,S);if(E===null){A===null&&(A=O);break}t&&A&&E.alternate===null&&e(f,A),g=s(E,g,b),C===null?P=E:C.sibling=E,C=E,A=O}if(_.done)return n(f,A),ct&&lr(f,b),P;if(A===null){for(;!_.done;b++,_=v.next())_=u(f,_.value,S),_!==null&&(g=s(_,g,b),C===null?P=_:C.sibling=_,C=_);return ct&&lr(f,b),P}for(A=i(f,A);!_.done;b++,_=v.next())_=p(A,f,b,_.value,S),_!==null&&(t&&_.alternate!==null&&A.delete(_.key===null?b:_.key),g=s(_,g,b),C===null?P=_:C.sibling=_,C=_);return t&&A.forEach(function(G){return e(f,G)}),ct&&lr(f,b),P}function m(f,g,v,S){if(typeof v=="object"&&v!==null&&v.type===es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:e:{for(var P=v.key,C=g;C!==null;){if(C.key===P){if(P=v.type,P===es){if(C.tag===7){n(f,C.sibling),g=r(C,v.props.children),g.return=f,f=g;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Pi&&fp(P)===C.type){n(f,C.sibling),g=r(C,v.props),g.ref=Xs(f,C,v),g.return=f,f=g;break e}n(f,C);break}else e(f,C);C=C.sibling}v.type===es?(g=yr(v.props.children,f.mode,S,v.key),g.return=f,f=g):(S=nl(v.type,v.key,v.props,null,f.mode,S),S.ref=Xs(f,g,v),S.return=f,f=S)}return a(f);case Jr:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(f,g.sibling),g=r(g,v.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=Gc(v,f.mode,S),g.return=f,f=g}return a(f);case Pi:return C=v._init,m(f,g,C(v._payload),S)}if(oa(v))return x(f,g,v,S);if(Hs(v))return y(f,g,v,S);co(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,v),g.return=f,f=g):(n(f,g),g=Hc(v,f.mode,S),g.return=f,f=g),a(f)):n(f,g)}return m}var ws=a0(!0),o0=a0(!1),Tl=Qi(null),wl=null,ls=null,Nd=null;function Dd(){Nd=ls=wl=null}function Id(t){var e=Tl.current;lt(Tl),t._currentValue=e}function nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){wl=t,Nd=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Nd!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(wl===null)throw Error(ie(308));ls=t,wl.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var mr=null;function Ud(t){mr===null?mr=[t]:mr.push(t)}function l0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ud(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bi=!1;function Fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ud(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function Ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sd(t,n)}}function dp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,i){var r=t.updateQueue;bi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,y=o;switch(d=e,p=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){u=x.call(p,u,d);break e}u=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,d=typeof x=="function"?x.call(p,u,d):x,d==null)break e;u=ht({},u,d);break e;case 2:bi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=u):h=h.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=a,t.lanes=a,t.memoizedState=u}}function hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Wa={},Zn=Qi(Wa),Da=Qi(Wa),Ia=Qi(Wa);function gr(t){if(t===Wa)throw Error(ie(174));return t}function Od(t,e){switch(rt(Ia,e),rt(Da,t),rt(Zn,Wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fu(e,t)}lt(Zn),rt(Zn,e)}function As(){lt(Zn),lt(Da),lt(Ia)}function u0(t){gr(Ia.current);var e=gr(Zn.current),n=Fu(e,t.type);e!==n&&(rt(Da,t),rt(Zn,n))}function kd(t){Da.current===t&&(lt(Zn),lt(Da))}var ft=Qi(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function Bd(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var Zo=xi.ReactCurrentDispatcher,Fc=xi.ReactCurrentBatchConfig,Er=0,dt=null,Mt=null,Rt=null,Rl=!1,_a=!1,Ua=0,Vx=0;function Ft(){throw Error(ie(321))}function zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Hd(t,e,n,i,r,s){if(Er=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zo.current=t===null||t.memoizedState===null?$x:Yx,t=n(i,r),_a){s=0;do{if(_a=!1,Ua=0,25<=s)throw Error(ie(301));s+=1,Rt=Mt=null,e.updateQueue=null,Zo.current=qx,t=n(i,r)}while(_a)}if(Zo.current=Pl,e=Mt!==null&&Mt.next!==null,Er=0,Rt=Mt=dt=null,Rl=!1,e)throw Error(ie(300));return t}function Gd(){var t=Ua!==0;return Ua=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Rn(){if(Mt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?dt.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(ie(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Fa(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Er&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var u={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=u,a=i):l=l.next=u,dt.lanes|=h,Tr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Wn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Wn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function f0(){}function d0(t,e){var n=dt,i=Rn(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,Vd(m0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Oa(9,p0.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ie(349));Er&30||h0(n,e,r)}return r}function h0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function p0(t,e,n,i){e.value=n,e.getSnapshot=i,g0(e)&&v0(t)}function m0(t,e,n){return n(function(){g0(e)&&v0(t)})}function g0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function v0(t){var e=gi(t,1);e!==null&&Gn(e,t,1,-1)}function pp(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=Xx.bind(null,dt,t),[e.memoizedState,t]}function Oa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function _0(){return Rn().memoizedState}function Qo(t,e,n,i){var r=Xn();dt.flags|=t,r.memoizedState=Oa(1|e,n,void 0,i===void 0?null:i)}function Jl(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&zd(i,a.deps)){r.memoizedState=Oa(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Oa(1|e,n,s,i)}function mp(t,e){return Qo(8390656,8,t,e)}function Vd(t,e){return Jl(2048,8,t,e)}function x0(t,e){return Jl(4,2,t,e)}function y0(t,e){return Jl(4,4,t,e)}function S0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M0(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4,4,S0.bind(null,e,t),n)}function Wd(){}function E0(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function T0(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function w0(t,e,n){return Er&21?(Wn(n,e)||(n=bg(),dt.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function Wx(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Fc.transition;Fc.transition={};try{t(!1),e()}finally{Je=n,Fc.transition=i}}function A0(){return Rn().memoizedState}function jx(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},C0(t))R0(e,n);else if(n=l0(t,e,n,i),n!==null){var r=jt();Gn(n,t,i,r),P0(n,e,i)}}function Xx(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(C0(t))R0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Wn(o,a)){var l=e.interleaved;l===null?(r.next=r,Ud(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=l0(t,e,r,i),n!==null&&(r=jt(),Gn(n,t,i,r),P0(n,e,i))}}function C0(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function R0(t,e){_a=Rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sd(t,n)}}var Pl={readContext:Cn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},$x={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qo(4194308,4,S0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qo(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=jx.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:pp,useDebugValue:Wd,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=pp(!1),e=t[0];return t=Wx.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Xn();if(ct){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Pt===null)throw Error(ie(349));Er&30||h0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mp(m0.bind(null,i,s,t),[t]),i.flags|=2048,Oa(9,p0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Pt.identifierPrefix;if(ct){var n=ui,i=ci;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Yx={readContext:Cn,useCallback:E0,useContext:Cn,useEffect:Vd,useImperativeHandle:M0,useInsertionEffect:x0,useLayoutEffect:y0,useMemo:T0,useReducer:Oc,useRef:_0,useState:function(){return Oc(Fa)},useDebugValue:Wd,useDeferredValue:function(t){var e=Rn();return w0(e,Mt.memoizedState,t)},useTransition:function(){var t=Oc(Fa)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:f0,useSyncExternalStore:d0,useId:A0,unstable_isNewReconciler:!1},qx={readContext:Cn,useCallback:E0,useContext:Cn,useEffect:Vd,useImperativeHandle:M0,useInsertionEffect:x0,useLayoutEffect:y0,useMemo:T0,useReducer:kc,useRef:_0,useState:function(){return kc(Fa)},useDebugValue:Wd,useDeferredValue:function(t){var e=Rn();return Mt===null?e.memoizedState=t:w0(e,Mt.memoizedState,t)},useTransition:function(){var t=kc(Fa)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:f0,useSyncExternalStore:d0,useId:A0,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ec={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Gi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Gn(e,t,r,i),Ko(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Gi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Gn(e,t,r,i),Ko(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),i=Gi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(Gn(e,t,i,n),Ko(e,t,i))}};function gp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,i)||!Pa(r,s):!0}function b0(t,e,n){var i=!1,r=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=rn(e)?Sr:Ht.current,i=e.contextTypes,s=(i=i!=null)?Es(t,r):Yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ec.enqueueReplaceState(e,e.state,null)}function sf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Fd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=rn(e)?Sr:Ht.current,r.context=Es(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ec.enqueueReplaceState(r,r.state,null),Al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e){try{var n="",i=e;do n+=E_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kx=typeof WeakMap=="function"?WeakMap:Map;function L0(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ll||(Ll=!0,gf=i),af(t,e)},n}function N0(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){af(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function _p(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Kx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=uy.bind(null,t,e,n),e.then(t,t))}function xp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var Zx=xi.ReactCurrentOwner,tn=!1;function Wt(t,e,n,i){e.child=t===null?o0(e,null,n,i):ws(e,t.child,n,i)}function Sp(t,e,n,i,r){n=n.render;var s=e.ref;return gs(e,r),i=Hd(t,e,n,i,s,r),n=Gd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ct&&n&&Pd(e),e.flags|=1,Wt(t,e,i,r),e.child)}function Mp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D0(t,e,s,i,r)):(t=nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(a,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function D0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Pa(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,vi(t,e,r)}return of(t,e,n,i,r)}function I0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(us,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(us,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(us,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(us,fn),fn|=i;return Wt(t,e,r,n),e.child}function U0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function of(t,e,n,i,r){var s=rn(n)?Sr:Ht.current;return s=Es(e,s),gs(e,r),n=Hd(t,e,n,i,s,r),i=Gd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ct&&i&&Pd(e),e.flags|=1,Wt(t,e,n,r),e.child)}function Ep(t,e,n,i,r){if(rn(n)){var s=!0;Sl(e)}else s=!1;if(gs(e,r),e.stateNode===null)Jo(t,e),b0(e,n,i),sf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=rn(n)?Sr:Ht.current,c=Es(e,c));var h=n.getDerivedStateFromProps,u=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&vp(e,a,i,c),bi=!1;var d=e.memoizedState;a.state=d,Al(e,i,a,r),l=e.memoizedState,o!==i||d!==l||nn.current||bi?(typeof h=="function"&&(rf(e,n,h,i),l=e.memoizedState),(o=bi||gp(e,n,o,i,d,l,c))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,c0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:In(e.type,o),a.props=c,u=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=rn(n)?Sr:Ht.current,l=Es(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==u||d!==l)&&vp(e,a,i,l),bi=!1,d=e.memoizedState,a.state=d,Al(e,i,a,r);var x=e.memoizedState;o!==u||d!==x||nn.current||bi?(typeof p=="function"&&(rf(e,n,p,i),x=e.memoizedState),(c=bi||gp(e,n,c,i,d,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return lf(t,e,n,i,s,r)}function lf(t,e,n,i,r,s){U0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&lp(e,n,!1),vi(t,e,s);i=e.stateNode,Zx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,o,s)):Wt(t,e,o,s),e.memoizedState=i.state,r&&lp(e,n,!0),e.child}function F0(t){var e=t.stateNode;e.pendingContext?op(t,e.pendingContext,e.pendingContext!==e.context):e.context&&op(t,e.context,!1),Od(t,e.containerInfo)}function Tp(t,e,n,i,r){return Ts(),Ld(r),e.flags|=256,Wt(t,e,n,i),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function O0(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ft,r&1),t===null)return tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ic(a,i,0,null),t=yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uf(n),e.memoizedState=cf,t):jd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Qx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Vi(o,s):(s=yr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?uf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=cf,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jd(t,e){return e=ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uo(t,e,n,i){return i!==null&&Ld(i),ws(e,t.child,null,n),t=jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Bc(Error(ie(422))),uo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ic({mode:"visible",children:i.children},r,0,null),s=yr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ws(e,t.child,null,a),e.child.memoizedState=uf(a),e.memoizedState=cf,s);if(!(e.mode&1))return uo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=Bc(s,i,void 0),uo(t,e,a,i)}if(o=(a&t.childLanes)!==0,tn||o){if(i=Pt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),Gn(i,t,r,-1))}return Zd(),i=Bc(Error(ie(421))),uo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Bi(r.nextSibling),mn=e,ct=!0,On=null,t!==null&&(Mn[En++]=ci,Mn[En++]=ui,Mn[En++]=Mr,ci=t.id,ui=t.overflow,Mr=e),e=jd(e,i.children),e.flags|=4096,e)}function wp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nf(t.return,e,n)}function zc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function k0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wp(t,n,e);else if(t.tag===19)wp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),zc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}zc(e,!0,n,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jx(t,e,n){switch(e.tag){case 3:F0(e),Ts();break;case 5:u0(e);break;case 1:rn(e.type)&&Sl(e);break;case 4:Od(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Tl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?O0(t,e,n):(rt(ft,ft.current&1),t=vi(t,e,n),t!==null?t.sibling:null);rt(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return k0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,I0(t,e,n)}return vi(t,e,n)}var B0,ff,z0,H0;B0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ff=function(){};z0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(Zn.current);var s=null;switch(n){case"input":r=Nu(t,r),i=Nu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=Uu(t,r),i=Uu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}Ou(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};H0=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ey(t,e,n){var i=e.pendingProps;switch(bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return rn(e.type)&&yl(),Ot(e),null;case 3:return i=e.stateNode,As(),lt(nn),lt(Ht),Bd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(xf(On),On=null))),ff(t,e),Ot(e),null;case 5:kd(e);var r=gr(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)z0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Ot(e),null}if(t=gr(Zn.current),lo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[Na]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<ca.length;r++)at(ca[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Ih(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Fh(i,s),at("invalid",i)}Ou(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&oo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&oo(i.textContent,o,t),r=["children",""+o]):Ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":Ja(i),Uh(i,s,!0);break;case"textarea":Ja(i),Oh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Yn]=e,t[Na]=i,B0(t,e,!1,!1),e.stateNode=t;e:{switch(a=ku(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<ca.length;r++)at(ca[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Ih(t,i),r=Nu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),at("invalid",t);break;case"textarea":Fh(t,i),r=Uu(t,i),at("invalid",t);break;default:r=i}Ou(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?_g(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ea(t,l):typeof l=="number"&&Ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&md(t,s,l,a))}switch(n){case"input":Ja(t),Uh(t,i,!1);break;case"textarea":Ja(t),Oh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$i(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)H0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=gr(Ia.current),gr(Zn.current),lo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:oo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return Ot(e),null;case 13:if(lt(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&hn!==null&&e.mode&1&&!(e.flags&128))s0(),Ts(),e.flags|=98560,s=!1;else if(s=lo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Yn]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else On!==null&&(xf(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Et===0&&(Et=3):Zd())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return As(),ff(t,e),t===null&&ba(e.stateNode.containerInfo),Ot(e),null;case 10:return Id(e.type._context),Ot(e),null;case 17:return rn(e.type)&&yl(),Ot(e),null;case 19:if(lt(ft),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)$s(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Cl(t),a!==null){for(e.flags|=128,$s(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Rs&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return Ot(e),null}else 2*_t()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ft.current,rt(ft,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Kd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function ty(t,e){switch(bd(e),e.tag){case 1:return rn(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),lt(nn),lt(Ht),Bd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kd(e),null;case 13:if(lt(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ft),null;case 4:return As(),null;case 10:return Id(e.type._context),null;case 22:case 23:return Kd(),null;case 24:return null;default:return null}}var fo=!1,zt=!1,ny=typeof WeakSet=="function"?WeakSet:Set,ve=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function df(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Ap=!1;function iy(t,e){if(Yu=gl,t=Xg(),Rd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,u=t,d=null;t:for(;;){for(var p;u!==n||r!==0&&u.nodeType!==3||(o=a+r),u!==s||i!==0&&u.nodeType!==3||(l=a+i),u.nodeType===3&&(a+=u.nodeValue.length),(p=u.firstChild)!==null;)d=u,u=p;for(;;){if(u===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(p=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qu={focusedElem:t,selectionRange:n},gl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,m=x.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:In(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return x=Ap,Ap=!1,x}function xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&df(e,n,s)}r=r.next}while(r!==i)}}function tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G0(t){var e=t.alternate;e!==null&&(t.alternate=null,G0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Na],delete e[Qu],delete e[Bx],delete e[zx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V0(t){return t.tag===5||t.tag===3||t.tag===4}function Cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}function mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}var Nt=null,Un=!1;function Si(t,e,n){for(n=n.child;n!==null;)W0(t,e,n),n=n.sibling}function W0(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:zt||cs(n,e);case 6:var i=Nt,r=Un;Nt=null,Si(t,e,n),Nt=i,Un=r,Nt!==null&&(Un?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Un?(t=Nt,n=n.stateNode,t.nodeType===8?Dc(t.parentNode,n):t.nodeType===1&&Dc(t,n),Ca(t)):Dc(Nt,n.stateNode));break;case 4:i=Nt,r=Un,Nt=n.stateNode.containerInfo,Un=!0,Si(t,e,n),Nt=i,Un=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&df(n,e,a),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!zt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){mt(n,e,o)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,Si(t,e,n),zt=i):Si(t,e,n);break;default:Si(t,e,n)}}function Rp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ny),e.forEach(function(i){var r=dy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Nt=o.stateNode,Un=!1;break e;case 3:Nt=o.stateNode.containerInfo,Un=!0;break e;case 4:Nt=o.stateNode.containerInfo,Un=!0;break e}o=o.return}if(Nt===null)throw Error(ie(160));W0(s,a,r),Nt=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)j0(e,t),e=e.sibling}function j0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),jn(t),i&4){try{xa(3,t,t.return),tc(3,t)}catch(y){mt(t,t.return,y)}try{xa(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:bn(e,t),jn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(bn(e,t),jn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{Ea(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&hg(r,s),ku(o,a);var c=ku(o,s);for(a=0;a<l.length;a+=2){var h=l[a],u=l[a+1];h==="style"?_g(r,u):h==="dangerouslySetInnerHTML"?gg(r,u):h==="children"?Ea(r,u):md(r,h,u,c)}switch(o){case"input":Du(r,s);break;case"textarea":pg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ds(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Na]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(bn(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(bn(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ca(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:bn(e,t),jn(t);break;case 13:bn(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Yd=_t())),i&4&&Rp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||h,bn(e,t),zt=c):bn(e,t),jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(ve=t,h=t.child;h!==null;){for(u=ve=h;ve!==null;){switch(d=ve,p=d.child,d.tag){case 0:case 11:case 14:case 15:xa(4,d,d.return);break;case 1:cs(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:cs(d,d.return);break;case 22:if(d.memoizedState!==null){bp(u);continue}}p!==null?(p.return=d,ve=p):bp(u)}h=h.sibling}e:for(h=null,u=t;;){if(u.tag===5){if(h===null){h=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=u.stateNode,l=u.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=vg("display",a))}catch(y){mt(t,t.return,y)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){mt(t,t.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:bn(e,t),jn(t),i&4&&Rp(t);break;case 21:break;default:bn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(V0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ea(r,""),i.flags&=-33);var s=Cp(t);mf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Cp(t);pf(t,o,a);break;default:throw Error(ie(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ry(t,e,n){ve=t,X0(t)}function X0(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||fo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||zt;o=fo;var c=zt;if(fo=a,(zt=l)&&!c)for(ve=r;ve!==null;)a=ve,l=a.child,a.tag===22&&a.memoizedState!==null?Lp(r):l!==null?(l.return=a,ve=l):Lp(r);for(;s!==null;)ve=s,X0(s),s=s.sibling;ve=r,fo=o,zt=c}Pp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Pp(t)}}function Pp(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&Ca(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}zt||e.flags&512&&hf(e)}catch(d){mt(e,e.return,d)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function bp(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Lp(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tc(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{hf(e)}catch(l){mt(e,s,l)}break;case 5:var a=e.return;try{hf(e)}catch(l){mt(e,a,l)}}}catch(l){mt(e,e.return,l)}if(e===t){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var sy=Math.ceil,bl=xi.ReactCurrentDispatcher,Xd=xi.ReactCurrentOwner,An=xi.ReactCurrentBatchConfig,$e=0,Pt=null,St=null,Dt=0,fn=0,us=Qi(0),Et=0,ka=null,Tr=0,nc=0,$d=0,ya=null,Jt=null,Yd=0,Rs=1/0,ai=null,Ll=!1,gf=null,Hi=null,ho=!1,Ui=null,Nl=0,Sa=0,vf=null,el=-1,tl=0;function jt(){return $e&6?_t():el!==-1?el:el=_t()}function Gi(t){return t.mode&1?$e&2&&Dt!==0?Dt&-Dt:Gx.transition!==null?(tl===0&&(tl=bg()),tl):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Og(t.type)),t):1}function Gn(t,e,n,i){if(50<Sa)throw Sa=0,vf=null,Error(ie(185));Ha(t,n,i),(!($e&2)||t!==Pt)&&(t===Pt&&(!($e&2)&&(nc|=n),Et===4&&Ni(t,Dt)),sn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Rs=_t()+500,Ql&&Ji()))}function sn(t,e){var n=t.callbackNode;G_(t,e);var i=ml(t,t===Pt?Dt:0);if(i===0)n!==null&&zh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zh(n),e===1)t.tag===0?Hx(Np.bind(null,t)):n0(Np.bind(null,t)),Ox(function(){!($e&6)&&Ji()}),n=null;else{switch(Lg(i)){case 1:n=yd;break;case 4:n=Rg;break;case 16:n=pl;break;case 536870912:n=Pg;break;default:n=pl}n=ev(n,$0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $0(t,e){if(el=-1,tl=0,$e&6)throw Error(ie(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var i=ml(t,t===Pt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dl(t,i);else{e=i;var r=$e;$e|=2;var s=q0();(Pt!==t||Dt!==e)&&(ai=null,Rs=_t()+500,xr(t,e));do try{ly();break}catch(o){Y0(t,o)}while(!0);Dd(),bl.current=s,$e=r,St!==null?e=0:(Pt=null,Dt=0,e=Et)}if(e!==0){if(e===2&&(r=Vu(t),r!==0&&(i=r,e=_f(t,r))),e===1)throw n=ka,xr(t,0),Ni(t,i),sn(t,_t()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!ay(r)&&(e=Dl(t,i),e===2&&(s=Vu(t),s!==0&&(i=s,e=_f(t,s))),e===1))throw n=ka,xr(t,0),Ni(t,i),sn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:cr(t,Jt,ai);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=Yd+500-_t(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zu(cr.bind(null,t,Jt,ai),e);break}cr(t,Jt,ai);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Hn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*sy(i/1960))-i,10<i){t.timeoutHandle=Zu(cr.bind(null,t,Jt,ai),i);break}cr(t,Jt,ai);break;case 5:cr(t,Jt,ai);break;default:throw Error(ie(329))}}}return sn(t,_t()),t.callbackNode===n?$0.bind(null,t):null}function _f(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&xf(e)),t}function xf(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function ay(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~$d,e&=~nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function Np(t){if($e&6)throw Error(ie(327));vs();var e=ml(t,0);if(!(e&1))return sn(t,_t()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var i=Vu(t);i!==0&&(e=i,n=_f(t,i))}if(n===1)throw n=ka,xr(t,0),Ni(t,e),sn(t,_t()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,Jt,ai),sn(t,_t()),null}function qd(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Rs=_t()+500,Ql&&Ji())}}function wr(t){Ui!==null&&Ui.tag===0&&!($e&6)&&vs();var e=$e;$e|=1;var n=An.transition,i=Je;try{if(An.transition=null,Je=1,t)return t()}finally{Je=i,An.transition=n,$e=e,!($e&6)&&Ji()}}function Kd(){fn=us.current,lt(us)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Fx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(bd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:As(),lt(nn),lt(Ht),Bd();break;case 5:kd(i);break;case 4:As();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:Id(i.type._context);break;case 22:case 23:Kd()}n=n.return}if(Pt=t,St=t=Vi(t.current,null),Dt=fn=e,Et=0,ka=null,$d=nc=Tr=0,Jt=ya=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}mr=null}return t}function Y0(t,e){do{var n=St;try{if(Dd(),Zo.current=Pl,Rl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rl=!1}if(Er=0,Rt=Mt=dt=null,_a=!1,Ua=0,Xd.current=null,n===null||n.return===null){Et=1,ka=e,St=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Dt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=xp(a);if(p!==null){p.flags&=-257,yp(p,a,o,s,e),p.mode&1&&_p(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){_p(s,c,e),Zd();break e}l=Error(ie(426))}}else if(ct&&o.mode&1){var m=xp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),yp(m,a,o,s,e),Ld(Cs(l,o));break e}}s=l=Cs(l,o),Et!==4&&(Et=2),ya===null?ya=[s]:ya.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=L0(s,l,e);dp(s,f);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Hi===null||!Hi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=N0(s,o,e);dp(s,S);break e}}s=s.return}while(s!==null)}Z0(n)}catch(P){e=P,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function q0(){var t=bl.current;return bl.current=Pl,t===null?Pl:t}function Zd(){(Et===0||Et===3||Et===2)&&(Et=4),Pt===null||!(Tr&268435455)&&!(nc&268435455)||Ni(Pt,Dt)}function Dl(t,e){var n=$e;$e|=2;var i=q0();(Pt!==t||Dt!==e)&&(ai=null,xr(t,e));do try{oy();break}catch(r){Y0(t,r)}while(!0);if(Dd(),$e=n,bl.current=i,St!==null)throw Error(ie(261));return Pt=null,Dt=0,Et}function oy(){for(;St!==null;)K0(St)}function ly(){for(;St!==null&&!D_();)K0(St)}function K0(t){var e=J0(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?Z0(t):St=e,Xd.current=null}function Z0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ty(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=ey(n,e,fn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function cr(t,e,n){var i=Je,r=An.transition;try{An.transition=null,Je=1,cy(t,e,n,i)}finally{An.transition=r,Je=i}return null}function cy(t,e,n,i){do vs();while(Ui!==null);if($e&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(V_(t,s),t===Pt&&(St=Pt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,ev(pl,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var a=Je;Je=1;var o=$e;$e|=4,Xd.current=null,iy(t,n),j0(n,t),Px(qu),gl=!!Yu,qu=Yu=null,t.current=n,ry(n),I_(),$e=o,Je=a,An.transition=s}else t.current=n;if(ho&&(ho=!1,Ui=t,Nl=r),s=t.pendingLanes,s===0&&(Hi=null),O_(n.stateNode),sn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ll)throw Ll=!1,t=gf,gf=null,t;return Nl&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===vf?Sa++:(Sa=0,vf=t):Sa=0,Ji(),null}function vs(){if(Ui!==null){var t=Lg(Nl),e=An.transition,n=Je;try{if(An.transition=null,Je=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,Nl=0,$e&6)throw Error(ie(331));var r=$e;for($e|=4,ve=t.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ve=c;ve!==null;){var h=ve;switch(h.tag){case 0:case 11:case 15:xa(8,h,s)}var u=h.child;if(u!==null)u.return=h,ve=u;else for(;ve!==null;){h=ve;var d=h.sibling,p=h.return;if(G0(h),h===c){ve=null;break}if(d!==null){d.return=p,ve=d;break}ve=p}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ve=f;break e}ve=s.return}}var g=t.current;for(ve=g;ve!==null;){a=ve;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,ve=v;else e:for(a=g;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:tc(9,o)}}catch(P){mt(o,o.return,P)}if(o===a){ve=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ve=S;break e}ve=o.return}}if($e=r,Ji(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot($l,t)}catch{}i=!0}return i}finally{Je=n,An.transition=e}}return!1}function Dp(t,e,n){e=Cs(n,e),e=L0(t,e,1),t=zi(t,e,1),e=jt(),t!==null&&(Ha(t,1,e),sn(t,e))}function mt(t,e,n){if(t.tag===3)Dp(t,t,n);else for(;e!==null;){if(e.tag===3){Dp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=Cs(n,t),t=N0(e,t,1),e=zi(e,t,1),t=jt(),e!==null&&(Ha(e,1,t),sn(e,t));break}}e=e.return}}function uy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Dt&n)===n&&(Et===4||Et===3&&(Dt&130023424)===Dt&&500>_t()-Yd?xr(t,0):$d|=n),sn(t,e)}function Q0(t,e){e===0&&(t.mode&1?(e=no,no<<=1,!(no&130023424)&&(no=4194304)):e=1);var n=jt();t=gi(t,e),t!==null&&(Ha(t,e,n),sn(t,n))}function fy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Q0(t,n)}function dy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Q0(t,n)}var J0;J0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,Jx(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ct&&e.flags&1048576&&i0(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Jo(t,e),t=e.pendingProps;var r=Es(e,Ht.current);gs(e,n),r=Hd(null,e,i,t,r,n);var s=Gd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,Sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fd(e),r.updater=ec,e.stateNode=r,r._reactInternals=e,sf(e,i,t,n),e=lf(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Pd(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Jo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=py(i),t=In(i,t),r){case 0:e=of(null,e,i,t,n);break e;case 1:e=Ep(null,e,i,t,n);break e;case 11:e=Sp(null,e,i,t,n);break e;case 14:e=Mp(null,e,i,In(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),of(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Ep(t,e,i,r,n);case 3:e:{if(F0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,c0(t,e),Al(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Cs(Error(ie(423)),e),e=Tp(t,e,i,n,r);break e}else if(i!==r){r=Cs(Error(ie(424)),e),e=Tp(t,e,i,n,r);break e}else for(hn=Bi(e.stateNode.containerInfo.firstChild),mn=e,ct=!0,On=null,n=o0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),i===r){e=vi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return u0(e),t===null&&tf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Ku(i,r)?a=null:s!==null&&Ku(i,s)&&(e.flags|=32),U0(t,e),Wt(t,e,a,n),e.child;case 6:return t===null&&tf(e),null;case 13:return O0(t,e,n);case 4:return Od(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ws(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Sp(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt(Tl,i._currentValue),i._currentValue=a,s!==null)if(Wn(s.value,a)){if(s.children===r.children&&!nn.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),nf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,gs(e,n),r=Cn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),Mp(t,e,i,r,n);case 15:return D0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Jo(t,e),e.tag=1,rn(i)?(t=!0,Sl(e)):t=!1,gs(e,n),b0(e,i,r),sf(e,i,r,n),lf(null,e,i,!0,t,n);case 19:return k0(t,e,n);case 22:return I0(t,e,n)}throw Error(ie(156,e.tag))};function ev(t,e){return Cg(t,e)}function hy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new hy(t,e,n,i)}function Qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function py(t){if(typeof t=="function")return Qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vd)return 11;if(t===_d)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Qd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case es:return yr(n.children,r,s,e);case gd:a=8,r|=8;break;case Ru:return t=Tn(12,n,e,r|2),t.elementType=Ru,t.lanes=s,t;case Pu:return t=Tn(13,n,e,r),t.elementType=Pu,t.lanes=s,t;case bu:return t=Tn(19,n,e,r),t.elementType=bu,t.lanes=s,t;case ug:return ic(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lg:a=10;break e;case cg:a=9;break e;case vd:a=11;break e;case _d:a=14;break e;case Pi:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Tn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function yr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function ic(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=ug,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Gc(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function my(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jd(t,e,n,i,r,s,a,o,l){return t=new my(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fd(s),t}function gy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function tv(t){if(!t)return Yi;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(rn(n))return t0(t,n,e)}return e}function nv(t,e,n,i,r,s,a,o,l){return t=Jd(n,i,!0,t,r,s,a,o,l),t.context=tv(null),n=t.current,i=jt(),r=Gi(n),s=hi(i,r),s.callback=e??null,zi(n,s,r),t.current.lanes=r,Ha(t,r,i),sn(t,i),t}function rc(t,e,n,i){var r=e.current,s=jt(),a=Gi(r);return n=tv(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,a),t!==null&&(Gn(t,r,a,s),Ko(t,r,a)),a}function Il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function eh(t,e){Ip(t,e),(t=t.alternate)&&Ip(t,e)}function vy(){return null}var iv=typeof reportError=="function"?reportError:function(t){console.error(t)};function th(t){this._internalRoot=t}sc.prototype.render=th.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));rc(t,e,null,null)};sc.prototype.unmount=th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){rc(null,t,null,null)}),e[mi]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ig();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Li.length&&e!==0&&e<Li[n].priority;n++);Li.splice(n,0,t),n===0&&Fg(t)}};function nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function _y(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Il(a);s.call(c)}}var a=nv(e,i,t,0,null,!1,!1,"",Up);return t._reactRootContainer=a,t[mi]=a.current,ba(t.nodeType===8?t.parentNode:t),wr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Il(l);o.call(c)}}var l=Jd(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=l,t[mi]=l.current,ba(t.nodeType===8?t.parentNode:t),wr(function(){rc(e,l,n,i)}),l}function oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Il(a);o.call(l)}}rc(e,a,t,r)}else a=_y(n,e,t,r,i);return Il(a)}Ng=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(Sd(e,n|1),sn(e,_t()),!($e&6)&&(Rs=_t()+500,Ji()))}break;case 13:wr(function(){var i=gi(t,1);if(i!==null){var r=jt();Gn(i,t,1,r)}}),eh(t,1)}};Md=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=jt();Gn(e,t,134217728,n)}eh(t,134217728)}};Dg=function(t){if(t.tag===13){var e=Gi(t),n=gi(t,e);if(n!==null){var i=jt();Gn(n,t,e,i)}eh(t,e)}};Ig=function(){return Je};Ug=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};zu=function(t,e,n){switch(e){case"input":if(Du(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Zl(i);if(!r)throw Error(ie(90));dg(i),Du(i,r)}}}break;case"textarea":pg(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};Sg=qd;Mg=wr;var xy={usingClientEntryPoint:!1,Events:[Va,rs,Zl,xg,yg,qd]},Ys={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yy={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{$l=po.inject(yy),Kn=po}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(e))throw Error(ie(200));return gy(t,e,null,n)};vn.createRoot=function(t,e){if(!nh(t))throw Error(ie(299));var n=!1,i="",r=iv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Jd(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,ba(t.nodeType===8?t.parentNode:t),new th(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=wg(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return wr(t)};vn.hydrate=function(t,e,n){if(!ac(e))throw Error(ie(200));return oc(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!nh(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=iv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=nv(e,null,t,1,n??null,r,!1,s,a),t[mi]=e.current,ba(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new sc(e)};vn.render=function(t,e,n){if(!ac(e))throw Error(ie(200));return oc(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!ac(t))throw Error(ie(40));return t._reactRootContainer?(wr(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};vn.unstable_batchedUpdates=qd;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ac(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return oc(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rv)}catch(t){console.error(t)}}rv(),rg.exports=vn;var Sy=rg.exports,sv,Fp=Sy;sv=Fp.createRoot,Fp.hydrateRoot;const My=`<!DOCTYPE html>
<html lang="en" class="antialiased selection:bg-cyan-500/30 selection:text-cyan-50">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logic Core</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body class="bg-[#050505] text-zinc-300 min-h-screen flex items-center justify-center font-['Inter',sans-serif] overflow-x-hidden m-0 p-0" style="background-color: #050505;">

    <!-- Faint Ambient Grid Background -->
    <div class="fixed inset-0 pointer-events-none flex justify-center items-center overflow-hidden z-0" style="opacity: 0.04;">
        <svg class="absolute w-[200vw] h-[200vh]" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="bg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg-grid)" />
        </svg>
    </div>

    <!-- Main Content Layout -->
    <main class="relative z-10 w-full max-w-5xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch justify-center pt-24 pb-24">
        
        <!-- Left Card: Visual Interface (Design) -->
        <article class="flex-1 rounded-[24px] bg-gradient-to-b from-white/10 to-transparent p-[1px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] group/card">
            <div class="bg-[#0A0A0A] rounded-[23px] overflow-hidden flex flex-col h-full w-full">
                
                <!-- Visual Area -->
                <div class="relative w-full h-64 sm:h-72 border-b border-white/5 flex items-center justify-center overflow-hidden bg-[#0A0A0A]" id="svg-container">
                    
                    <!-- SVG Interactive Scene -->
                    <svg width="100%" height="100%" viewBox="0 0 400 300" class="absolute inset-0 pointer-events-none">
                        <!-- Orbiting Rings -->
                        <g class="origin-center" style="transform-origin: 200px 150px;">
                            <circle cx="200" cy="150" r="130" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.03" stroke-dasharray="4 4" id="ring-outer"/>
                            <circle cx="200" cy="150" r="90" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.05" />
                            <circle cx="200" cy="150" r="50" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.08" />
                        </g>

                        <!-- Central Bounding Box -->
                        <rect x="140" y="120" width="120" height="60" fill="none" stroke="#4F46E5" stroke-width="1" stroke-opacity="0.8" stroke-dasharray="2 2"/>
                        <rect x="138" y="118" width="4" height="4" fill="#4F46E5" />
                        <rect x="258" y="118" width="4" height="4" fill="#4F46E5" />
                        <rect x="138" y="178" width="4" height="4" fill="#4F46E5" />
                        <rect x="258" y="178" width="4" height="4" fill="#4F46E5" />

                        <!-- Animated SVG Cursors -->
                        <g id="cursor-alex" style="transform: translate(110px, 90px);">
                            <g>
                                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="2s" repeatCount="indefinite" />
                                <path d="M0,0 L12,12 L5,12 L0,18 Z" fill="#F97316" />
                                <rect x="10" y="-8" width="42" height="18" rx="9" fill="#F97316" />
                                <text x="31" y="4" font-family="sans-serif" font-size="9" font-weight="500" fill="white" text-anchor="middle" style="letter-spacing: 0.5px;">Alex</text>
                            </g>
                        </g>

                        <g id="cursor-sam" style="transform: translate(130px, 200px);">
                            <g>
                                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="2.5s" repeatCount="indefinite" />
                                <path d="M0,0 L12,12 L5,12 L0,18 Z" fill="#EC4899" transform="rotate(-30)" />
                                <rect x="12" y="8" width="40" height="18" rx="9" fill="#EC4899" />
                                <text x="32" y="20" font-family="sans-serif" font-size="9" font-weight="500" fill="white" text-anchor="middle" style="letter-spacing: 0.5px;">Sam</text>
                            </g>
                        </g>

                        <g id="cursor-me" style="transform: translate(270px, 180px);">
                            <g>
                                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="2.2s" repeatCount="indefinite" />
                                <path d="M0,0 L12,12 L5,12 L0,18 Z" fill="#10B981" transform="rotate(-70)" />
                                <rect x="-4" y="14" width="34" height="18" rx="9" fill="#10B981" />
                                <text x="13" y="26" font-family="sans-serif" font-size="9" font-weight="500" fill="white" text-anchor="middle" style="letter-spacing: 0.5px;">Me</text>
                            </g>
                        </g>
                    </svg>

                    <!-- Avatar Nodes -->
                    <div class="absolute w-5 h-5 rounded-full bg-zinc-800 border border-white/10 overflow-hidden shadow-sm" style="top: 25%; left: 30%;">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" class="w-full h-full object-cover" alt="Avatar">
                    </div>
                    <div class="absolute w-6 h-6 rounded-full bg-zinc-800 border border-white/10 overflow-hidden shadow-sm" style="top: 60%; right: 20%;">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80" class="w-full h-full object-cover" alt="Avatar">
                    </div>
                    <div class="absolute w-5 h-5 rounded-full bg-zinc-800 border border-white/10 overflow-hidden shadow-sm" style="bottom: 20%; left: 20%;">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80" class="w-full h-full object-cover" alt="Avatar">
                    </div>
                </div>

                <!-- Text Content -->
                <div class="p-6 md:p-8 flex-1 flex flex-col justify-start">
                    <h2 class="text-xl tracking-tight font-medium text-zinc-100 mb-3 animate-text">Visual Interface</h2>
                    <p class="text-sm text-zinc-400 leading-relaxed animate-text">Construct dynamic layouts using our intuitive node-based system. Collaborate in real-time with your team across unified environments.</p>
                </div>
            </div>
        </article>

        <!-- Right Card: Core Logic (Develop / ThreeJS) -->
        <article class="flex-1 rounded-[24px] bg-gradient-to-b from-white/10 to-transparent p-[1px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] group/card">
            <div class="bg-[#0A0A0A] rounded-[23px] overflow-hidden flex flex-col h-full w-full">
                
                <!-- Visual Area -->
                <div class="relative w-full h-64 sm:h-72 border-b border-white/5 bg-[#050505] overflow-hidden">
                    
                    <!-- ThreeJS Canvas Container -->
                    <div id="three-canvas-container" class="absolute inset-0"></div>

                    <!-- Overlay Terminal Icon -->
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                        <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0F0F0F]/90 backdrop-blur-md border border-white/10 flex items-center justify-center" style="box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05);">
                            <div class="text-cyan-400 font-mono text-2xl sm:text-3xl font-light tracking-widest flex items-center gap-1">
                                <span>></span><span id="terminal-cursor" class="block w-3 sm:w-4 h-[2px] bg-cyan-400 mt-2" style="transition: opacity 0.2s;"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Text Content -->
                <div class="p-6 md:p-8 flex-1 flex flex-col justify-start relative">
                    <div class="flex items-center gap-2 mb-3">
                        <h2 class="text-xl tracking-tight font-medium text-zinc-100 animate-text">Core Logic</h2>
                        <iconify-icon icon="solar:code-circle-linear" style="stroke-width: 1.5;" class="text-zinc-500 text-lg opacity-0 animate-text-icon"></iconify-icon>
                    </div>
                    <p class="text-sm text-zinc-400 leading-relaxed animate-text">Access the underlying isometric data structures directly. Deploy scalable microservices instantly via our high-performance runtime.</p>
                </div>
            </div>
        </article>

    </main>

    <!-- Application Logic -->
    <script type="module">
        import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';

        // --- 1. ThreeJS Isometric Terminal-Modernism Scene ---
        const initThreeJS = () => {
            const container = document.getElementById('three-canvas-container');
            if (!container) return;

            const scene = new THREE.Scene();
            
            // Isometric Orthographic Camera Configuration
            const aspect = container.clientWidth / container.clientHeight;
            const d = 12; // Camera frustum size
            const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
            camera.position.set(20, 20, 20); // Isometric angle
            camera.lookAt(0, 0, 0);

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            const group = new THREE.Group();
            scene.add(group);

            // Material Definitions
            const basePlatformMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9, metalness: 0.1 });
            const coreEmissiveMat = new THREE.MeshStandardMaterial({ color: 0x00E5FF, emissive: 0x00E5FF, emissiveIntensity: 0.5, roughness: 0.2 });
            const wireframeMat = new THREE.LineBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.4 });

            // Geometry Build: Base Platform
            const platformGeo = new THREE.BoxGeometry(16, 0.5, 16);
            const platform = new THREE.Mesh(platformGeo, basePlatformMat);
            platform.position.y = -2;
            group.add(platform);

            const platformEdges = new THREE.LineSegments(new THREE.EdgesGeometry(platformGeo), wireframeMat);
            platform.add(platformEdges);

            // Geometry Build: Central Logic Core
            const coreGeo = new THREE.BoxGeometry(2, 4, 2);
            const core = new THREE.Mesh(coreGeo, coreEmissiveMat);
            core.position.y = 0.25;
            group.add(core);

            // Geometry Build: Orbiting Data Nodes
            const nodes = [];
            const nodeCount = 12;
            for(let i = 0; i < nodeCount; i++) {
                const isAccent = Math.random() > 0.7;
                const nodeMat = isAccent ? coreEmissiveMat : new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 });
                const size = 0.4 + Math.random() * 0.4;
                const nodeGeo = new THREE.BoxGeometry(size, size, size);
                const node = new THREE.Mesh(nodeGeo, nodeMat);
                
                const angle = (i / nodeCount) * Math.PI * 2;
                const radius = 4 + Math.random() * 4;
                
                node.position.set(Math.cos(angle) * radius, -1 + Math.random() * 4, Math.sin(angle) * radius);
                
                // Add tiny wireframe to nodes for technical look
                node.add(new THREE.LineSegments(new THREE.EdgesGeometry(nodeGeo), new THREE.LineBasicMaterial({ color: 0x555555, transparent: true, opacity: 0.3 })));

                node.userData = { 
                    angle, 
                    radius, 
                    speed: 0.005 + Math.random() * 0.015, 
                    yBase: node.position.y,
                    yOffset: Math.random() * Math.PI * 2 
                };
                group.add(node);
                nodes.push({ mesh: node, isAccent });
            }

            // Lighting Setup
            scene.add(new THREE.AmbientLight(0xffffff, 0.3));
            
            const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
            dirLight.position.set(10, 20, 5);
            scene.add(dirLight);
            
            const pointLight = new THREE.PointLight(0x00E5FF, 1.5, 25);
            pointLight.position.set(0, 1, 0);
            scene.add(pointLight);

            // Animation Loop
            let time = 0;
            const animate3D = () => {
                requestAnimationFrame(animate3D);
                time += 0.016;

                // Subtle environmental drift
                group.rotation.y = Math.sin(time * 0.1) * 0.15;
                group.position.y = Math.sin(time * 0.5) * 0.2;

                // Emissive pulsing logic
                const pulse = (Math.sin(time * 2.5) + 1) * 0.5;
                coreEmissiveMat.emissiveIntensity = 0.4 + pulse * 0.6;
                pointLight.intensity = 1.0 + pulse * 1.5;

                // Node orbital mechanics
                nodes.forEach(nodeObj => {
                    const data = nodeObj.mesh.userData;
                    data.angle += data.speed;
                    nodeObj.mesh.position.x = Math.cos(data.angle) * data.radius;
                    nodeObj.mesh.position.z = Math.sin(data.angle) * data.radius;
                    nodeObj.mesh.position.y = data.yBase + Math.sin(time * 1.5 + data.yOffset) * 0.5;
                    nodeObj.mesh.rotation.x += 0.01;
                    nodeObj.mesh.rotation.y += 0.02;
                });

                renderer.render(scene, camera);
            };
            animate3D();

            // Responsive Handling
            window.addEventListener('resize', () => {
                if(!container) return;
                const newAspect = container.clientWidth / container.clientHeight;
                camera.left = -d * newAspect;
                camera.right = d * newAspect;
                camera.top = d;
                camera.bottom = -d;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        };

        // --- 2. 2D SVG & DOM Animations ---
        
        // Terminal Cursor Blink
        const terminalCursor = document.getElementById('terminal-cursor');
        setInterval(() => {
            if(terminalCursor) {
                terminalCursor.style.opacity = terminalCursor.style.opacity === '0' ? '1' : '0';
            }
        }, 500);

        // SVG Cursor Organic Float
        const cursorAlex = document.getElementById('cursor-alex');
        const cursorSam = document.getElementById('cursor-sam');
        const cursorMe = document.getElementById('cursor-me');
        const outerRing = document.getElementById('ring-outer');
        let svgTime = 0;

        const animateSVG = () => {
            svgTime += 0.015;
            
            // Organic cursor movement formulas
            if(cursorAlex) cursorAlex.setAttribute('transform', \`translate(\${110 + Math.sin(svgTime * 1.2) * 6}, \${90 + Math.cos(svgTime * 0.8) * 6})\`);
            if(cursorSam) cursorSam.setAttribute('transform', \`translate(\${130 + Math.cos(svgTime * 0.9) * 5}, \${200 + Math.sin(svgTime * 1.1) * 5})\`);
            if(cursorMe) cursorMe.setAttribute('transform', \`translate(\${270 + Math.sin(svgTime * 1.5) * 4}, \${180 + Math.cos(svgTime * 1.3) * 7})\`);
            
            // Subtle ring rotation
            if(outerRing) outerRing.style.transform = \`rotate(\${svgTime * 5}deg)\`;

            requestAnimationFrame(animateSVG);
        };

        // --- 3. Staggered Word-by-Word Scroll Reveal ---
        const initTextAnimations = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Reveal spans
                        const spans = entry.target.querySelectorAll('span');
                        spans.forEach(span => {
                            span.style.opacity = '1';
                            span.style.transform = 'translateY(0) scale(1)';
                            span.style.filter = 'blur(0px)';
                        });
                        
                        // Handle potential icon siblings
                        const icon = entry.target.parentElement?.querySelector('iconify-icon');
                        if(icon) {
                            setTimeout(() => {
                                icon.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                                icon.style.opacity = '1';
                                icon.style.transform = 'translateY(0) scale(1)';
                            }, 300);
                        }

                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            document.querySelectorAll('.animate-text').forEach(el => {
                const text = el.textContent;
                el.innerHTML = ''; // Clear original text
                const words = text.split(' ');
                
                words.forEach((word, index) => {
                    const span = document.createElement('span');
                    span.textContent = word + ' '; // Re-add space
                    
                    // Initial hidden state applied inline to respect constraints
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(12px) scale(0.98)';
                    span.style.filter = 'blur(4px)';
                    span.style.display = 'inline-block';
                    span.style.whiteSpace = 'pre-wrap';
                    
                    // Complex transition physics
                    span.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
                    span.style.transitionDelay = \`\${index * 35}ms\`;
                    
                    el.appendChild(span);
                });

                // Initial setup for sibling icons
                const icon = el.parentElement?.querySelector('iconify-icon');
                if(icon) {
                    icon.style.opacity = '0';
                    icon.style.transform = 'translateY(10px) scale(0.8)';
                }

                observer.observe(el);
            });
        };

        // Bootstrap
        window.addEventListener('DOMContentLoaded', () => {
            initThreeJS();
            animateSVG();
            initTextAnimations();
        });

    <\/script>
</body>
</html>`,Ey="./vendor/three-0.136.0.module.js",Ty=/0x00E5FF/g,wy="0xD10F27",Ay=-9.6,Cy="const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);",Ry=`const panX = ${Ay};
            const camera = new THREE.OrthographicCamera(-d * aspect + panX, d * aspect + panX, d, -d, 15, 55);`,Py=`camera.left = -d * newAspect;
                camera.right = d * newAspect;`,by=`camera.left = -d * newAspect + panX;
                camera.right = d * newAspect + panX;`,Ly="const coreGeo = new THREE.BoxGeometry(2, 4, 2);",Ny="group.add(core);",Dy=`group.add(core);

            // logo 內的白色幾何嵌板
            // 鏡頭在 (20, 20, 20)，平面上是 45 度角。把核心轉 45 度，
            // 讓房子正面（也就是 logo 那一面）正對鏡頭，四個白色幾何才不會被壓扁。
            core.rotation.y = Math.PI / 4;

            // 這一面背對主光源，受光材質會變灰。logo 的白色本來就是實心平塗，
            // 所以用不受光的 MeshBasicMaterial，維持乾淨的純白。
            const inlayMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const inlayDepth = 0.14;
            const roundedSquareShape = function (size, radius) {
                const s = new THREE.Shape();
                const h = size / 2, r = Math.min(radius, h);
                s.moveTo(-h + r, -h);
                s.lineTo(h - r, -h);
                s.quadraticCurveTo(h, -h, h, -h + r);
                s.lineTo(h, h - r);
                s.quadraticCurveTo(h, h, h - r, h);
                s.lineTo(-h + r, h);
                s.quadraticCurveTo(-h, h, -h, h - r);
                s.lineTo(-h, -h + r);
                s.quadraticCurveTo(-h, -h, -h + r, -h);
                return s;
            };
            const circleShape = function (radius) {
                const s = new THREE.Shape();
                s.absarc(0, 0, radius, 0, Math.PI * 2, false);
                return s;
            };
            const inlays = [
                { shape: circleShape(0.527),               x: -0.606, y: 1.987 },
                { shape: roundedSquareShape(0.922, 0.19),  x:  0.619, y: 1.974 },
                { shape: roundedSquareShape(0.922, 0.19),  x: -0.619, y: 0.829 },
                { shape: circleShape(0.527),               x:  0.632, y: 0.829 }
            ];
            inlays.forEach(function (item) {
                const geo = new THREE.ExtrudeGeometry(item.shape, {
                    depth: inlayDepth, bevelEnabled: false, curveSegments: 24
                });
                const mesh = new THREE.Mesh(geo, inlayMat);
                // 房子的頂點座標在平移前是 y 0..houseH，平移後整體下移 houseH / 2。
                mesh.position.set(item.x, item.y - houseH / 2, houseD / 2);
                core.add(mesh);
            });`,Iy=`const houseW = 4.32, houseH = 4, houseD = 2, roofY = houseH * 0.603;
            const houseShape = new THREE.Shape();
            houseShape.moveTo(-houseW / 2, roofY);
            houseShape.lineTo(0, houseH);
            houseShape.lineTo(houseW / 2, roofY);
            houseShape.lineTo(houseW / 2, 0);
            houseShape.lineTo(-houseW / 2, 0);
            houseShape.lineTo(-houseW / 2, roofY);
            const coreGeo = new THREE.ExtrudeGeometry(houseShape, { depth: houseD, bevelEnabled: false, curveSegments: 1 });
            coreGeo.translate(0, -houseH / 2, -houseD / 2);`,Uy=`const group = new THREE.Group();
            scene.add(group);`,Fy=`const group = new THREE.Group();
            group.scale.setScalar(1.5);
            scene.add(group);`,Oy="core.position.y = 0.25;",ky=`const coreBaseY = 1.7;
            core.position.y = coreBaseY;

            const shadowGeo = new THREE.CircleGeometry(2.2, 32);
            const shadowMat = new THREE.MeshBasicMaterial({
                color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false
            });
            const coreShadow = new THREE.Mesh(shadowGeo, shadowMat);
            coreShadow.rotation.x = -Math.PI / 2;
            coreShadow.position.y = -1.7; // 貼在平台表面（platform 頂面在 -1.75）
            coreShadow.renderOrder = 1;
            group.add(coreShadow);`,By="group.position.y = Math.sin(time * 0.5) * 0.2;",zy=`group.position.y = Math.sin(time * 0.5) * 0.2;

                // 房子獨立於整體場景漂浮，脫離「釘在平台上」的感覺
                core.position.y = coreBaseY + Math.sin(time * 1.4) * 0.4;`,Hy=`
  <style data-yfs-isolation>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #050505;
    }
    body {
      visibility: hidden;
    }
    body[data-yfs-isolated] {
      visibility: visible;
    }
    body[data-yfs-isolated] > *:not(#three-canvas-container) {
      display: none !important;
    }
    body[data-yfs-isolated] > #three-canvas-container {
      display: block !important;
      position: fixed !important;
      inset: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
    }
    #three-canvas-container canvas {
      display: block;
      width: 100% !important;
      height: 100% !important;
    }
  </style>
`,Gy=`
  <script data-yfs-isolation>
    (function () {
      var promote = function () {
        var el = document.getElementById('three-canvas-container');
        if (!el) return;
        if (el.parentNode !== document.body) document.body.appendChild(el);
        document.body.setAttribute('data-yfs-isolated', '');
        window.dispatchEvent(new Event('resize'));
      };
      // 場景是在 DOMContentLoaded 時初始化的，等它掛好 canvas 再搬。
      if (document.readyState === 'complete') {
        requestAnimationFrame(promote);
      } else {
        window.addEventListener('load', function () { requestAnimationFrame(promote); }, { once: true });
      }
    })();
  <\/script>
`;function Vy(){let t=My;return t=t.replace("https://cdn.skypack.dev/three@0.136.0",Ey),t=t.replace(Ty,wy),t=t.replace(Cy,Ry),t=t.replace(Py,by),t=t.replace(Ly,Iy),t=t.replace(Ny,Dy),t=t.replace(Uy,Fy),t=t.replace(Oy,ky),t=t.replace(By,zy),t=t.replace(/<script[^>]*cdn\.tailwindcss\.com[^>]*><\/script>/gi,""),t=t.replace(/<script[^>]*code\.iconify\.design[^>]*><\/script>/gi,""),t=t.replace(/<link[^>]*fonts\.googleapis\.com[^>]*>/gi,""),t=t.replace(/(<img[^>]*\s)src="https:\/\/images\.unsplash\.com[^"]*"/gi,"$1"),t=t.replace(/<\/head>/i,`${Hy}</head>`),t=t.replace(/<\/body>/i,`${Gy}</body>`),t}const Vc=(t,e,n)=>Math.min(n,Math.max(e,t));function Wy({hue:t=0,saturation:e=1,brightness:n=1,className:i,title:r="Logic Core"}){const s=it.useMemo(()=>Vy(),[]),a=Vc(t,-180,180),o=Vc(e,0,2),l=Vc(n,.35,1.65),c=a===0&&o===1&&l===1?void 0:`hue-rotate(${a}deg) saturate(${o}) brightness(${l})`;return w.jsx("iframe",{className:i,title:r,srcDoc:s,loading:"eager",sandbox:"allow-scripts allow-same-origin",style:{display:"block",width:"100%",height:"100%",border:0,filter:c,background:"#050505"}})}function xn({text:t,segments:e,speed:n=55,active:i=!0}){const r=e||[{text:t}],s=r.map(d=>d.text).join(""),[a,o]=it.useState(0);it.useEffect(()=>{if(!i){o(s.length);return}o(0);const d=setInterval(()=>{o(p=>p+1>=s.length?(clearInterval(d),s.length):p+1)},n);return()=>clearInterval(d)},[s,i,n]);const l=a>=s.length;let c=0;const h=r.map((d,p)=>{const x=c;c+=d.text.length;const y=Math.max(0,Math.min(d.text.length,a-x));return{className:d.className,nowrapWith:d.nowrapWith,str:d.text.slice(0,y)}}),u=[];return h.forEach((d,p)=>{d.nowrapWith&&u.length>0?u[u.length-1].push(d):u.push([d])}),w.jsxs("span",{"aria-label":s,children:[w.jsx("span",{"aria-hidden":"true",children:u.map((d,p)=>{const x=d.map((y,m)=>w.jsx("span",{className:y.className,children:y.str},m));return d.length>1?w.jsx("span",{style:{whiteSpace:"nowrap"},children:x},p):w.jsx("span",{className:d[0].className,children:d[0].str},p)})}),w.jsx("span",{className:`typewriter-cursor${l?" typewriter-cursor--done":""}`,"aria-hidden":"true"})]})}function ja({lines:t,startDelay:e=.5,active:n}){return w.jsx("div",{className:"reveal-lines",children:t.map((i,r)=>w.jsx("p",{className:"prose reveal-line",style:n?{animationDelay:`${e+r*.28}s`}:{opacity:1,animation:"none"},children:i},i))})}function ih({variant:t="converge",className:e=""}){const n=(i,r,s=46,a=26,o="iso-plate")=>w.jsx("path",{className:o,d:`M${i},${r} l${s/2},${-a/2} l${s/2},${a/2} l${-s/2},${a/2} Z`});return t==="scatter"?w.jsxs("svg",{className:`iso ${e}`,viewBox:"0 0 260 170",role:"img","aria-label":"流程散落在多個檔案之間",children:[n(20,60),n(96,34),n(150,92),n(60,118),n(178,52,46,26,"iso-plate iso-accent"),w.jsxs("g",{className:"iso-link",children:[w.jsx("path",{d:"M66,60 L119,34"}),w.jsx("path",{d:"M119,47 L173,92"}),w.jsx("path",{d:"M83,118 L142,92"}),w.jsx("path",{d:"M142,47 L201,52"})]})]}):w.jsxs("svg",{className:`iso ${e}`,viewBox:"0 0 260 170",role:"img","aria-label":"流程收斂成單一路徑",children:[n(24,118),n(78,96),n(132,74),n(186,52,46,26,"iso-plate iso-accent"),w.jsxs("g",{className:"iso-link",children:[w.jsx("path",{d:"M70,118 L101,96"}),w.jsx("path",{d:"M124,96 L155,74"}),w.jsx("path",{d:"M178,74 L209,52"})]})]})}const jy=["團隊每日花費大量時間，處理重複性資料搬移、人工核對與跨系統作業。","當優秀的人力被困在繁瑣的例行事務中，","不僅無形中消耗了工作熱情，也限制了團隊投入高價值業務開拓的空間。"];function Xy({active:t}){return w.jsxs("section",{className:"thesis slide-content",children:[w.jsx("div",{className:"rail",children:w.jsx("span",{className:"rail-label",children:"我的觀察"})}),w.jsx("div",{className:"thesis-body",children:w.jsxs("div",{className:"thesis-block",children:[w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{text:"作業重複的日常消耗",active:t})}),w.jsx(ja,{lines:jy,startDelay:.55,active:t})]})}),w.jsx("figure",{className:"thesis-figure",children:w.jsx(ih,{variant:"scatter",className:"iso-visible"})})]})}const $y=["梳理跨部門與跨系統的銜接點，","串接半自動化輔助工具與自動化串流。","讓資料順暢流轉、減少無謂的人工轉手，","打造高效率且具備彈性的敏捷協作架構。"];function Yy({active:t}){return w.jsxs("section",{className:"thesis slide-content",children:[w.jsx("div",{className:"rail",children:w.jsx("span",{className:"rail-label",children:"我的觀察"})}),w.jsx("div",{className:"thesis-body",children:w.jsxs("div",{className:"thesis-block thesis-block--solution",children:[w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{text:"讓自動化成為營運與業務的常態",active:t})}),w.jsx(ja,{lines:$y,startDelay:.55,active:t})]})}),w.jsx("figure",{className:"thesis-figure",children:w.jsx(ih,{variant:"converge",className:"iso-visible"})})]})}const qy=["這幾個月觀察下來，發現有 IT 資源排程比較緊湊、","外部平台沒開放 API 等狀況，","亦或是一些操作細節與工作日常，需要每日不斷重複，","並且得長時間面對散落在各個檔案裡的資料。"];function Ky({active:t}){return w.jsxs("section",{className:"ai slide-content",children:[w.jsx("div",{className:"rail",children:w.jsx("span",{className:"rail-label",children:"AI的重要性"})}),w.jsxs("div",{className:"ai-body",children:[w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{text:"痛點",active:t})}),w.jsx(ja,{lines:qy,startDelay:.5,active:t})]}),w.jsx("figure",{className:`ai-figure ai-figure--image${t?" is-active":""}`,children:w.jsx("img",{src:"bottleneck.png",alt:"散落在各處的檔案與重複性作業"})})]})}const Zy=`attribute vec2 aPos;
void main(){ gl_Position = vec4(aPos,0.0,1.0); }`,Qy=`precision highp float;
uniform sampler2D uTex;
uniform vec2 uRes;
uniform float uTime;
uniform float uMotion;
uniform vec2 uCurve;
uniform float uScan;
uniform float uScanDepth;
uniform float uTriad;
uniform float uGrille;
uniform float uChroma;
uniform float uBar;
uniform float uFlicker;
uniform float uGrain;
uniform float uNoise;
uniform float uVignette;
uniform float uMono;
uniform float uGain;
uniform float uHalo;
uniform vec3 uSheen;
uniform vec3 uRoom;

float hash(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }

vec2 curve(vec2 uv){
  uv = uv*2.0-1.0;
  vec2 o = uv.yx*uv.yx;
  uv += uv * o * uCurve;
  uv = uv*0.5+0.5;
  return uv;
}

void main(){
  vec2 fuv = gl_FragCoord.xy / uRes;
  vec2 uv = curve(fuv);
  float t = uTime;

  float band = 0.0;
  if (uNoise > 0.001){
    float row = floor(uv.y * 190.0);
    float gate = step(0.905, hash(vec2(row, floor(t*15.0))));
    uv.x += (hash(vec2(row*1.7, floor(t*15.0)+7.0)) - 0.5) * 0.052 * gate * uNoise;
    float pos = fract(uv.y * 0.8 - t * 0.17);
    band = smoothstep(0.075, 0.0, pos);
    uv.x += band * (hash(vec2(floor(uv.y*260.0), floor(t*26.0))) - 0.5) * 0.030 * uNoise;
    float head = smoothstep(0.030, 0.0, uv.y);
    uv.x += head * (hash(vec2(floor(uv.y*520.0), floor(t*22.0))) - 0.32) * 0.075 * uNoise;
    band = max(band, head);
  }

  vec2 inb = step(vec2(0.0), uv) * step(uv, vec2(1.0));
  float inside = inb.x*inb.y;
  vec2 ed = min(uv, 1.0-uv);
  inside *= smoothstep(0.0,0.020, min(ed.x,ed.y));

  vec2 dir = uv-0.5;
  float d2 = dot(dir,dir);
  vec2 ao = dir * (0.0010 + 0.0075*d2) * uChroma;
  vec3 col;
  col.r = texture2D(uTex, uv + ao).r;
  col.g = texture2D(uTex, uv).g;
  col.b = texture2D(uTex, uv - ao).b;

  if (uHalo > 0.001){
    float s = 0.0038;
    vec3 wide = texture2D(uTex, uv + vec2( s, 0.0)).rgb
              + texture2D(uTex, uv + vec2(-s, 0.0)).rgb
              + texture2D(uTex, uv + vec2(0.0,  s)).rgb
              + texture2D(uTex, uv + vec2(0.0, -s)).rgb
              + texture2D(uTex, uv + vec2( s,  s)*0.72).rgb
              + texture2D(uTex, uv + vec2(-s, -s)*0.72).rgb;
    col += wide * (uHalo / 6.0);
  }

  float sl = sin(uv.y*3.14159265*uScan + t*4.0*uMotion);
  col *= mix(1.0 - uScanDepth, 1.0, sl*sl);

  float gx = gl_FragCoord.x * (6.2831853/max(uTriad, 1.0));
  vec3 grille = (1.0-uGrille) + uGrille*cos(gx + vec3(0.0,2.094,4.188));
  col *= mix(vec3(1.0), grille, step(0.001, uGrille));
  col *= uGain;

  float bar = fract(uv.y*0.5 - t*0.07*uMotion);
  bar = smoothstep(0.0,0.05,bar)*smoothstep(0.18,0.05,bar);
  col += bar*uBar*uMotion;

  float sheen = smoothstep(0.55,0.0, distance(uv, vec2(0.50,0.15)));
  col += sheen*0.030*uSheen;

  float vig = smoothstep(0.98,0.30, length((uv-0.5)*vec2(1.05,1.0)));
  col *= mix(1.0-uVignette, 1.0, vig);
  col *= 1.0 - uFlicker*uMotion*sin(t*8.0);

  if (uNoise > 0.001){
    float st = hash(fuv*uRes*0.5 + vec2(floor(t*24.0), floor(t*24.0)*1.7));
    col += (st-0.5)*0.135*uNoise;
    col += band*0.085*uNoise;
  }
  col += (hash(fuv + fract(t*0.37)) - 0.5)*uGrain;

  float luma = dot(col, vec3(0.2126,0.7152,0.0722));
  col = mix(col, vec3(luma), uMono);

  float spill = smoothstep(0.85,0.18, length(fuv-0.5))*0.05;
  vec3 room = uRoom + uSheen*spill*0.42;
  col = mix(room, col, inside);
  col = max(col, uRoom*0.34);
  gl_FragColor = vec4(col,1.0);
}`,Op={speed:1,typeSpeed:1,motion:1,brightness:1,opacity:1,hue:0,saturation:1},av={curve:[.115,.165],scanDensity:.44,scanDepth:.3,triadCss:3.2,grille:.34,chroma:1,bar:.045,flicker:.028,grain:.022,noise:0,vignette:.58,mono:0,gain:1.34,halo:.1,sheen:[1,.55,.58],room:[.058,.02,.024],background:"#120404",filtering:"linear",redrawMs:0},Jy="#120404",eS=()=>av,Qt=(t,e="p")=>({t,c:e}),Wc=t=>"·".repeat(t),Ul=[[Qt("YFS OPERATIONS AI"),Qt("  v1.0","d")],[Qt("Claude Code","d"),Qt(" · HITL","d")],[],[Qt("Platform API "),Qt(`${Wc(4)} `,"d"),Qt("UNAVAILABLE","h")],[Qt("Match · Dedup · SKU "),Qt(`${Wc(2)} `,"d"),Qt("OK","a")],[Qt("Console "),Qt(`${Wc(3)} `,"d"),Qt("READY","a")],[],[Qt("no api required.")]],kp={p:{fill:"#ff5a68",glow:"rgba(209,15,39,0.90)"},d:{fill:"#7a2530",glow:"rgba(209,15,39,0.40)"},a:{fill:"#f5f2ee",glow:"rgba(245,242,238,0.92)"},h:{fill:"#ffb020",glow:"rgba(255,176,32,0.92)"}},rh=t=>t.reduce((e,n)=>e+n.t.length,0),Bp=Ul.reduce((t,e)=>t+rh(e),0),jc=Math.max(...Ul.map(rh)),tS=1920,nS=640,zp=24e5;function Hp(t,e,n){const i=t.createShader(e);if(!i)throw new Error("Unable to create CRT shader");if(t.shaderSource(i,n),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(i)??"CRT shader compilation failed");return i}function iS(t,e,n){const i=e.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,premultipliedAlpha:!1});if(!i)throw new Error("CRT requires WebGL");const r=document.createElement("canvas"),s=r.getContext("2d");if(!s)throw new Error("CRT text canvas unavailable");const a=Hp(i,i.VERTEX_SHADER,Zy),o=Hp(i,i.FRAGMENT_SHADER,Qy),l=i.createProgram();if(!l)throw new Error("Unable to create CRT program");if(i.attachShader(l,a),i.attachShader(l,o),i.linkProgram(l),!i.getProgramParameter(l,i.LINK_STATUS))throw new Error(i.getProgramInfoLog(l)??"CRT link failed");i.useProgram(l);const c=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,c),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),i.STATIC_DRAW);const h=i.getAttribLocation(l,"aPos");i.enableVertexAttribArray(h),i.vertexAttribPointer(h,2,i.FLOAT,!1,0,0);const u=j=>i.getUniformLocation(l,j),d=u("uTex"),p=u("uRes"),x=u("uTime"),y=u("uMotion"),m=u("uCurve"),f=u("uScan"),g=u("uScanDepth"),v=u("uTriad"),S=u("uGrille"),P=u("uChroma"),C=u("uBar"),A=u("uFlicker"),b=u("uGrain"),O=u("uNoise"),_=u("uVignette"),E=u("uMono"),G=u("uGain"),z=u("uHalo"),Y=u("uSheen"),J=u("uRoom"),W=i.createTexture();i.bindTexture(i.TEXTURE_2D,W),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.uniform1i(d,0);let Z=1,N=1,q=1,Q=1,ne=14,Se=20,ke=0,X=8,te=0,ue=0,ce=0,Ce=!1,we=!0,Be=0,We=-1,Oe=-1;const L=av,Ut=performance.now(),He=()=>{i.useProgram(l),i.uniform2f(m,L.curve[0],L.curve[1]),i.uniform1f(g,L.scanDepth),i.uniform1f(S,L.grille),i.uniform1f(P,L.chroma),i.uniform1f(C,L.bar),i.uniform1f(A,L.flicker),i.uniform1f(b,L.grain),i.uniform1f(O,L.noise),i.uniform1f(_,L.vignette),i.uniform1f(E,L.mono),i.uniform1f(G,L.gain),i.uniform1f(z,L.halo),i.uniform3f(Y,L.sheen[0],L.sheen[1],L.sheen[2]),i.uniform3f(J,L.room[0],L.room[1],L.room[2]);const j=i.LINEAR;i.bindTexture(i.TEXTURE_2D,W),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,j),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,j)},Ge=()=>{ke=N*.135,Se=N*.74/Ul.length,ne=Math.max(5,Math.min(Se*.8,Z*.88/(Math.max(jc,1)*.62))),s.font=`600 ${ne.toFixed(2)}px ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace`,X=s.measureText("M").width||ne*.6},Re=(j,K)=>{const V=kp[j];s.fillStyle=V.fill,s.shadowColor=K?V.glow:"transparent",s.shadowBlur=K?ne*.38:0},tt=j=>{s.setTransform(1,0,0,1,0,0),s.fillStyle=Jy,s.fillRect(0,0,Z,N),s.textAlign="left",s.textBaseline="top",s.font=`600 ${ne.toFixed(2)}px ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace`;let K=j,V=ke;te=Math.floor((Z-jc*X)/2),ue=ke;for(const fe of Ul){const ae=rh(fe),oe=j===1/0?1/0:Math.min(K,ae);let Ie=Math.floor((Z-jc*X)/2),re=0;for(const pe of fe){let Te=pe.t;if(oe!==1/0){const Ae=oe-re;if(Ae<=0)break;Ae<Te.length&&(Te=Te.slice(0,Ae))}if(Te.length&&(Re(pe.c,!0),s.fillText(Te,Ie,V),Re(pe.c,!1),s.fillText(Te,Ie,V),Ie+=X*Te.length),re+=pe.t.length,oe!==1/0&&re>=oe)break}if(te=Ie,ue=V,oe!==1/0&&(K-=oe),V+=Se,oe!==1/0&&K<=0)break}},be=()=>{s.shadowColor=kp.p.glow,s.shadowBlur=ne*.42,s.fillStyle="#ffd8db",s.fillRect(te,ue+ne*.06,Math.max(X*.92,4),ne*.96),s.shadowBlur=0,s.fillRect(te,ue+ne*.06,Math.max(X*.92,4),ne*.96)},R=()=>{i.bindTexture(i.TEXTURE_2D,W),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,r),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),we=!1},M=()=>{const j=t.getBoundingClientRect();q=Math.max(1,j.width),Q=Math.max(1,j.height);const K=Math.min(typeof window>"u"?1:window.devicePixelRatio||1,2);let V=Math.max(nS,Math.round(Math.min(q*K,tS))),fe=Math.max(1,Math.round(V*Q/q));if(V*fe>zp){const Ie=Math.sqrt(zp/(V*fe));V=Math.round(V*Ie),fe=Math.round(fe*Ie)}const ae=V,oe=Math.max(1,Math.round(ae*fe/V));(e.width!==V||e.height!==fe)&&(e.width=V,e.height=fe),(r.width!==ae||r.height!==oe)&&(r.width=ae,r.height=oe,Z=ae,N=oe,Ge(),We=-1,Oe=-1,Be=0,we=!0),i.useProgram(l),i.viewport(0,0,V,fe),i.uniform2f(p,V,fe),i.uniform1f(f,Math.max(120,Math.min(Q*L.scanDensity,900))),i.uniform1f(v,Math.max(2,L.triadCss*V/q))},k=j=>{const K=Ce?1/0:Math.floor(ce),V=Math.floor((j-Ut)/420)%2===0?1:0,fe=Ce?V!==Oe:j-Be>42;K===We&&V===Oe&&!fe||!Ce&&j-Be<=42&&K===We&&V===Oe||(tt(K),V&&be(),Be=j,We=K,Oe=V,we=!0)};return He(),{resize:M,render(j){const K=n(),V=(j-Ut)*.001*K.speed;Ce||(ce+=4.4*K.typeSpeed,ce>=Bp&&(ce=Bp,Ce=!0)),k(j),we&&R(),i.useProgram(l),i.uniform1f(x,V),i.uniform1f(y,K.motion),i.drawArrays(i.TRIANGLES,0,3)},dispose(){i.deleteBuffer(c),i.deleteTexture(W),i.deleteProgram(l),i.deleteShader(a),i.deleteShader(o)}}}function rS(t){const e=it.useRef(null),n=it.useRef(null),i=it.useRef({...Op,...t});i.current={...Op,...t},it.useEffect(()=>{const s=e.current,a=n.current;if(!s||!a)return;const o=iS(s,a,()=>i.current);let l=0,c=!0;const h=()=>{o.resize(),o.render(performance.now())},u=x=>{o.render(x),l=c&&!document.hidden?requestAnimationFrame(u):0},d=new ResizeObserver(h),p=new IntersectionObserver(([x])=>{c=(x==null?void 0:x.isIntersecting)??!0,c&&!l&&(l=requestAnimationFrame(u)),!c&&l&&(cancelAnimationFrame(l),l=0)});return d.observe(s),p.observe(s),h(),l=requestAnimationFrame(u),()=>{l&&cancelAnimationFrame(l),d.disconnect(),p.disconnect(),o.dispose()}},[]);const r=i.current;return w.jsx("div",{ref:e,className:"crt-terminal",style:{background:eS().background,opacity:r.opacity,filter:`hue-rotate(${r.hue}deg) saturate(${r.saturation}) brightness(${r.brightness})`},children:w.jsx("canvas",{ref:n})})}const sS=["製作本地端工具，在操作過程補足半自動化的目標。","同仁只需要做機器無法替代的事，剩下交給工具自動處理。","後端串接統一的 Web 介面，操作集中、修改紀錄完整留存。","擺脫 IT 排程的瓶頸、快速看到效益，","也解決長時間比對資料的視覺疲勞。"];function aS({active:t}){return w.jsxs("section",{className:"ai ai--terminal slide-content",children:[w.jsx("div",{className:"rail",children:w.jsx("span",{className:"rail-label",children:"AI的重要性"})}),w.jsxs("div",{className:"ai-body",children:[w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{text:"自主開發：流程優化",active:t})}),w.jsx(ja,{lines:sS,startDelay:.5,active:t})]}),w.jsxs("figure",{className:"ai-figure",children:[t&&w.jsx(rS,{speed:1,typeSpeed:1.05,motion:.85,hue:0,saturation:1,brightness:1,opacity:1}),w.jsxs("div",{className:"claude-badge",children:[w.jsx("img",{src:"claude-code-logo.png",alt:"Claude Code"}),w.jsx("span",{children:"Claude Code · Anthropic"})]})]})]})}const Gp=["在等功能更新或是平台開放 API 的同時，","思考如何透過 AI 輔助，著手進行數位轉型。","把流程想清楚，AI 就能當那個幫你把想法接起來的工作夥伴。","將複雜的事情視覺化，最終一定能達到自動化。"];function oS({active:t}){const e=.5+Gp.length*.28+.35;return w.jsxs("section",{className:"ai slide-content",children:[w.jsx("div",{className:"rail",children:w.jsx("span",{className:"rail-label",children:"AI的重要性"})}),w.jsxs("div",{className:"ai-body",children:[w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{segments:[{text:"善用"},{text:"Claude Code",className:"claude-accent",nowrapWith:!0},{text:"將想法變成即戰力"}],active:t})}),w.jsx(ja,{lines:Gp,startDelay:.5,active:t}),w.jsxs("p",{className:"ai-closing reveal-line",style:t?{animationDelay:`${e}s`}:{opacity:1,animation:"none"},children:["藉由 ",w.jsx("b",{children:"CC"})," 輔助，加速自動化邁進。"]})]}),w.jsx("figure",{className:`ai-figure ai-figure--logo${t?" is-active":""}`,style:t?{"--ignite-delay":`${e}s`}:void 0,children:w.jsx("img",{src:"claude-code-logo.png",alt:"Claude Code"})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="169",lS=0,Vp=1,cS=2,ov=1,uS=2,si=3,qi=0,an=1,li=2,Wi=0,_s=1,Wp=2,jp=3,Xp=4,fS=5,dr=100,dS=101,hS=102,pS=103,mS=104,gS=200,vS=201,_S=202,xS=203,yf=204,Sf=205,yS=206,SS=207,MS=208,ES=209,TS=210,wS=211,AS=212,CS=213,RS=214,Mf=0,Ef=1,Tf=2,Ps=3,wf=4,Af=5,Cf=6,Rf=7,lv=0,PS=1,bS=2,ji=0,LS=1,NS=2,DS=3,IS=4,US=5,FS=6,OS=7,cv=300,bs=301,Ls=302,Pf=303,bf=304,lc=306,Lf=1e3,vr=1001,Nf=1002,wn=1003,kS=1004,mo=1005,Bn=1006,Xc=1007,_r=1008,_i=1009,uv=1010,fv=1011,Ba=1012,ah=1013,Ar=1014,fi=1015,Xa=1016,oh=1017,lh=1018,Ns=1020,dv=35902,hv=1021,pv=1022,zn=1023,mv=1024,gv=1025,xs=1026,Ds=1027,vv=1028,ch=1029,_v=1030,uh=1031,fh=1033,il=33776,rl=33777,sl=33778,al=33779,Df=35840,If=35841,Uf=35842,Ff=35843,Of=36196,kf=37492,Bf=37496,zf=37808,Hf=37809,Gf=37810,Vf=37811,Wf=37812,jf=37813,Xf=37814,$f=37815,Yf=37816,qf=37817,Kf=37818,Zf=37819,Qf=37820,Jf=37821,ol=36492,ed=36494,td=36495,xv=36283,nd=36284,id=36285,rd=36286,BS=3200,zS=3201,yv=0,HS=1,Di="",Fn="srgb",er="srgb-linear",dh="display-p3",cc="display-p3-linear",Fl="linear",ot="srgb",Ol="rec709",kl="p3",Dr=7680,$p=519,GS=512,VS=513,WS=514,Sv=515,jS=516,XS=517,$S=518,YS=519,sd=35044,Yp="300 es",di=2e3,Bl=2001;class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ll=Math.PI/180,ad=180/Math.PI;function Xi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function qS(t,e){return(t%e+e)%e}function $c(t,e,n){return(1-n)*t+n*e}function qn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function et(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,n=0){De.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],x=i[8],y=r[0],m=r[3],f=r[6],g=r[1],v=r[4],S=r[7],P=r[2],C=r[5],A=r[8];return s[0]=a*y+o*g+l*P,s[3]=a*m+o*v+l*C,s[6]=a*f+o*S+l*A,s[1]=c*y+h*g+u*P,s[4]=c*m+h*v+u*C,s[7]=c*f+h*S+u*A,s[2]=d*y+p*g+x*P,s[5]=d*m+p*v+x*C,s[8]=d*f+p*S+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,x=n*u+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=u*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=d*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Yc.makeScale(e,n)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yc=new Fe;function Mv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function KS(){const t=zl("canvas");return t.style.display="block",t}const qp={};function cl(t){t in qp||(qp[t]=!0,console.warn(t))}function ZS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function QS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function JS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qs={[er]:{transfer:Fl,primaries:Ol,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Fn]:{transfer:ot,primaries:Ol,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[cc]:{transfer:Fl,primaries:kl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Zp),fromReference:t=>t.applyMatrix3(Kp)},[dh]:{transfer:ot,primaries:kl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Zp),fromReference:t=>t.applyMatrix3(Kp).convertLinearToSRGB()}},eM=new Set([er,cc]),Ze={enabled:!0,_workingColorSpace:er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!eM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=qs[e].toReference,r=qs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return qs[t].primaries},getTransfer:function(t){return t===Di?Fl:qs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(qs[e].luminanceCoefficients)}};function ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class tM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=zl("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ys(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ys(n[i]/255)*255):n[i]=ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nM=0;class Ev{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kc(r[a].image)):s.push(Kc(r[a]))}else s=Kc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Kc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iM=0;class Xt extends ks{constructor(e=Xt.DEFAULT_IMAGE,n=Xt.DEFAULT_MAPPING,i=vr,r=vr,s=Bn,a=_r,o=zn,l=_i,c=Xt.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Xi(),this.name="",this.source=new Ev(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lf:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lf:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=cv;Xt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],x=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,P=(f+1)/2,C=(h+d)/4,A=(u+y)/4,b=(x+m)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=A/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=b/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-x)*(m-x)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(u-y)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rM extends ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ev(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends rM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Tv extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sM extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=s[a+0],p=s[a+1],x=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(o===1){e[n+0]=d,e[n+1]=p,e[n+2]=x,e[n+3]=y;return}if(u!==y||l!==d||c!==p||h!==x){let m=1-o;const f=l*d+c*p+h*x+u*y,g=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),C=Math.atan2(P,f*g);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}const S=o*g;if(l=l*m+d*S,c=c*m+p*S,h=h*m+x*S,u=u*m+y*S,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],x=s[a+3];return e[n]=o*x+h*u+l*p-c*d,e[n+1]=l*x+h*d+c*u-o*p,e[n+2]=c*x+h*p+o*d-l*u,e[n+3]=h*x-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"YZX":this._x=d*h*u+c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u-d*p*x;break;case"XZY":this._x=d*h*u-c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],u=n[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),u=2*(s*i-a*n);return this.x=n+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zc=new U,Qp=new $a;class Ya{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),go.copy(i.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),vo.subVectors(this.max,Ks),Ur.subVectors(e.a,Ks),Fr.subVectors(e.b,Ks),Or.subVectors(e.c,Ks),Mi.subVectors(Fr,Ur),Ei.subVectors(Or,Fr),nr.subVectors(Ur,Or);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-nr.z,nr.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,nr.z,0,-nr.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-nr.y,nr.x,0];return!Qc(n,Ur,Fr,Or,vo)||(n=[1,0,0,0,1,0,0,0,1],!Qc(n,Ur,Fr,Or,vo))?!1:(_o.crossVectors(Mi,Ei),n=[_o.x,_o.y,_o.z],Qc(n,Ur,Fr,Or,vo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new U,new U,new U,new U,new U,new U,new U,new U],Ln=new U,go=new Ya,Ur=new U,Fr=new U,Or=new U,Mi=new U,Ei=new U,nr=new U,Ks=new U,vo=new U,_o=new U,ir=new U;function Qc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ir.fromArray(t,s);const o=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=n.dot(ir),h=i.dot(ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const aM=new Ya,Zs=new U,Jc=new U;class uc{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):aM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Jc)),this.expandByPoint(Zs.copy(e.center).sub(Jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new U,eu=new U,xo=new U,Ti=new U,tu=new U,yo=new U,nu=new U;class wv{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){eu.copy(e).add(n).multiplyScalar(.5),xo.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(eu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(xo),o=Ti.dot(this.direction),l=-Ti.dot(xo),c=Ti.lengthSq(),h=Math.abs(1-a*a);let u,d,p,x;if(h>0)if(u=a*l-o,d=a*o-l,x=s*h,u>=0)if(d>=-x)if(d<=x){const y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(eu).addScaledVector(xo,d),p}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){tu.subVectors(n,e),yo.subVectors(i,e),nu.crossVectors(tu,yo);let a=this.direction.dot(nu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const l=o*this.direction.dot(yo.crossVectors(Ti,yo));if(l<0)return null;const c=o*this.direction.dot(tu.cross(Ti));if(c<0||l+c>a)return null;const h=-o*Ti.dot(nu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,a,o,l,c,h,u,d,p,x,y,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,u,d,p,x,y,m)}set(e,n,i,r,s,a,o,l,c,h,u,d,p,x,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),a=1/kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*u,x=o*h,y=o*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=p+x*c,n[5]=d-y*c,n[9]=-o*l,n[2]=y-d*c,n[6]=x+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,x=c*h,y=c*u;n[0]=d+y*o,n[4]=x*o-p,n[8]=a*c,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=p*o-x,n[6]=y+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,x=c*h,y=c*u;n[0]=d-y*o,n[4]=-a*u,n[8]=x+p*o,n[1]=p+x*o,n[5]=a*h,n[9]=y-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,x=o*h,y=o*u;n[0]=l*h,n[4]=x*c-p,n[8]=d*c+y,n[1]=l*u,n[5]=y*c+d,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,x=o*l,y=o*c;n[0]=l*h,n[4]=y-d*u,n[8]=x*u+p,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*u+x,n[10]=d-y*u}else if(e.order==="XZY"){const d=a*l,p=a*c,x=o*l,y=o*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=d*u+y,n[5]=a*h,n[9]=p*u-x,n[2]=x*u-p,n[6]=o*h,n[10]=y*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oM,e,lM)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),wi.crossVectors(i,cn),wi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),wi.crossVectors(i,cn)),wi.normalize(),So.crossVectors(cn,wi),r[0]=wi.x,r[4]=So.x,r[8]=cn.x,r[1]=wi.y,r[5]=So.y,r[9]=cn.y,r[2]=wi.z,r[6]=So.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],x=i[2],y=i[6],m=i[10],f=i[14],g=i[3],v=i[7],S=i[11],P=i[15],C=r[0],A=r[4],b=r[8],O=r[12],_=r[1],E=r[5],G=r[9],z=r[13],Y=r[2],J=r[6],W=r[10],Z=r[14],N=r[3],q=r[7],Q=r[11],ne=r[15];return s[0]=a*C+o*_+l*Y+c*N,s[4]=a*A+o*E+l*J+c*q,s[8]=a*b+o*G+l*W+c*Q,s[12]=a*O+o*z+l*Z+c*ne,s[1]=h*C+u*_+d*Y+p*N,s[5]=h*A+u*E+d*J+p*q,s[9]=h*b+u*G+d*W+p*Q,s[13]=h*O+u*z+d*Z+p*ne,s[2]=x*C+y*_+m*Y+f*N,s[6]=x*A+y*E+m*J+f*q,s[10]=x*b+y*G+m*W+f*Q,s[14]=x*O+y*z+m*Z+f*ne,s[3]=g*C+v*_+S*Y+P*N,s[7]=g*A+v*E+S*J+P*q,s[11]=g*b+v*G+S*W+P*Q,s[15]=g*O+v*z+S*Z+P*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],x=e[3],y=e[7],m=e[11],f=e[15];return x*(+s*l*u-r*c*u-s*o*d+i*c*d+r*o*p-i*l*p)+y*(+n*l*p-n*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+m*(+n*c*u-n*o*p-s*a*u+i*a*p+s*o*h-i*c*h)+f*(-r*o*h-n*l*u+n*o*d+r*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],x=e[12],y=e[13],m=e[14],f=e[15],g=u*m*c-y*d*c+y*l*p-o*m*p-u*l*f+o*d*f,v=x*d*c-h*m*c-x*l*p+a*m*p+h*l*f-a*d*f,S=h*y*c-x*u*c+x*o*p-a*y*p-h*o*f+a*u*f,P=x*u*l-h*y*l-x*o*d+a*y*d+h*o*m-a*u*m,C=n*g+i*v+r*S+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=g*A,e[1]=(y*d*s-u*m*s-y*r*p+i*m*p+u*r*f-i*d*f)*A,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*f+i*l*f)*A,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*p-i*l*p)*A,e[4]=v*A,e[5]=(h*m*s-x*d*s+x*r*p-n*m*p-h*r*f+n*d*f)*A,e[6]=(x*l*s-a*m*s-x*r*c+n*m*c+a*r*f-n*l*f)*A,e[7]=(a*d*s-h*l*s+h*r*c-n*d*c-a*r*p+n*l*p)*A,e[8]=S*A,e[9]=(x*u*s-h*y*s-x*i*p+n*y*p+h*i*f-n*u*f)*A,e[10]=(a*y*s-x*o*s+x*i*c-n*y*c-a*i*f+n*o*f)*A,e[11]=(h*o*s-a*u*s-h*i*c+n*u*c+a*i*p-n*o*p)*A,e[12]=P*A,e[13]=(h*y*r-x*u*r+x*i*d-n*y*d-h*i*m+n*u*m)*A,e[14]=(x*o*r-a*y*r-x*i*l+n*y*l+a*i*m-n*o*m)*A,e[15]=(a*u*r-h*o*r+h*i*l-n*u*l-a*i*d+n*o*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,x=s*u,y=a*h,m=a*u,f=o*u,g=l*c,v=l*h,S=l*u,P=i.x,C=i.y,A=i.z;return r[0]=(1-(y+f))*P,r[1]=(p+S)*P,r[2]=(x-v)*P,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(d+f))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(x+v)*A,r[9]=(m-g)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=kr.set(r[0],r[1],r[2]).length();const a=kr.set(r[4],r[5],r[6]).length(),o=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,h=1/a,u=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=di){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),d=(i+r)/(i-r);let p,x;if(o===di)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Bl)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di){const l=this.elements,c=1/(n-e),h=1/(i-r),u=1/(a-s),d=(n+e)*c,p=(i+r)*h;let x,y;if(o===di)x=(a+s)*u,y=-2*u;else if(o===Bl)x=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const kr=new U,Nn=new ut,oM=new U(0,0,0),lM=new U(1,1,1),wi=new U,So=new U,cn=new U,Jp=new ut,em=new $a;class Qn{constructor(e=0,n=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return em.setFromEuler(this),this.setFromQuaternion(em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Av{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cM=0;const tm=new U,Br=new $a,ni=new ut,Mo=new U,Qs=new U,uM=new U,fM=new $a,nm=new U(1,0,0),im=new U(0,1,0),rm=new U(0,0,1),sm={type:"added"},dM={type:"removed"},zr={type:"childadded",child:null},iu={type:"childremoved",child:null};class bt extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new U,n=new Qn,i=new $a,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Fe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(nm,e)}rotateY(e){return this.rotateOnAxis(im,e)}rotateZ(e){return this.rotateOnAxis(rm,e)}translateOnAxis(e,n){return tm.copy(e).applyQuaternion(this.quaternion),this.position.add(tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(nm,e)}translateY(e){return this.translateOnAxis(im,e)}translateZ(e){return this.translateOnAxis(rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Mo.copy(e):Mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Qs,Mo,this.up):ni.lookAt(Mo,Qs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(ni),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sm),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dM),iu.child=e,this.dispatchEvent(iu),iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sm),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,uM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,fM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new U(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new U,ii=new U,ru=new U,ri=new U,Hr=new U,Gr=new U,am=new U,su=new U,au=new U,ou=new U,lu=new gt,cu=new gt,uu=new gt;class dn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ii.subVectors(i,n),ru.subVectors(e,n);const a=Dn.dot(Dn),o=Dn.dot(ii),l=Dn.dot(ru),c=ii.dot(ii),h=ii.dot(ru),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,x=(a*h-o*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return lu.setScalar(0),cu.setScalar(0),uu.setScalar(0),lu.fromBufferAttribute(e,n),cu.fromBufferAttribute(e,i),uu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(lu,s.x),a.addScaledVector(cu,s.y),a.addScaledVector(uu,s.z),a}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ii.subVectors(e,n),Dn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return dn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Hr.subVectors(r,i),Gr.subVectors(s,i),su.subVectors(e,i);const l=Hr.dot(su),c=Gr.dot(su);if(l<=0&&c<=0)return n.copy(i);au.subVectors(e,r);const h=Hr.dot(au),u=Gr.dot(au);if(h>=0&&u<=h)return n.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Hr,a);ou.subVectors(e,s);const p=Hr.dot(ou),x=Gr.dot(ou);if(x>=0&&p<=x)return n.copy(s);const y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Gr,o);const m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return am.subVectors(s,r),o=(u-h)/(u-h+(p-x)),n.copy(r).addScaledVector(am,o);const f=1/(m+y+d);return a=y*f,o=d*f,n.copy(i).addScaledVector(Hr,a).addScaledVector(Gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function fu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=qS(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=fu(a,s,e+1/3),this.g=fu(a,s,e),this.b=fu(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=Cv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=qc(e.r),this.g=qc(e.g),this.b=qc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Ze.fromWorkingColorSpace(Bt.copy(this),e),Math.round(en(Bt.r*255,0,255))*65536+Math.round(en(Bt.g*255,0,255))*256+Math.round(en(Bt.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Fn){Ze.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(Eo);const i=$c(Ai.h,Eo.h,n),r=$c(Ai.s,Eo.s,n),s=$c(Ai.l,Eo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Xe;Xe.NAMES=Cv;let hM=0;class br extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=_s,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yf&&(i.blendSrc=this.blendSrc),this.blendDst!==Sf&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$p&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hl extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new U,To=new De;class Vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sd,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)To.fromBufferAttribute(this,n),To.applyMatrix3(e),this.setXY(n,To.x,To.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qn(n,this.array)),n}setX(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qn(n,this.array)),n}setY(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qn(n,this.array)),n}setW(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sd&&(e.usage=this.usage),e}}class Rv extends Vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Pv extends Vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tt extends Vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pM=0;const Sn=new ut,du=new bt,Vr=new U,un=new Ya,Js=new Ya,Ct=new U;class $t extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mv(e)?Pv:Rv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return du.lookAt(e),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(un.min,Js.min),un.expandByPoint(Ct),Ct.addVectors(un.max,Js.max),un.expandByPoint(Ct)):(un.expandByPoint(Js.min),un.expandByPoint(Js.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&(Vr.fromBufferAttribute(e,c),Ct.add(Vr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<i.count;b++)o[b]=new U,l[b]=new U;const c=new U,h=new U,u=new U,d=new De,p=new De,x=new De,y=new U,m=new U;function f(b,O,_){c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,O),u.fromBufferAttribute(i,_),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,O),x.fromBufferAttribute(s,_),h.sub(c),u.sub(c),p.sub(d),x.sub(d);const E=1/(p.x*x.y-x.x*p.y);isFinite(E)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(E),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(E),o[b].add(y),o[O].add(y),o[_].add(y),l[b].add(m),l[O].add(m),l[_].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,O=g.length;b<O;++b){const _=g[b],E=_.start,G=_.count;for(let z=E,Y=E+G;z<Y;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new U,S=new U,P=new U,C=new U;function A(b){P.fromBufferAttribute(r,b),C.copy(P);const O=o[b];v.copy(O),v.sub(P.multiplyScalar(P.dot(O))).normalize(),S.crossVectors(C,O);const E=S.dot(l[b])<0?-1:1;a.setXYZW(b,v.x,v.y,v.z,E)}for(let b=0,O=g.length;b<O;++b){const _=g[b],E=_.start,G=_.count;for(let z=E,Y=E+G;z<Y;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)d[x++]=c[p++]}return new Vn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $t,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const om=new ut,rr=new wv,wo=new uc,lm=new U,Ao=new U,Co=new U,Ro=new U,hu=new U,Po=new U,cm=new U,bo=new U;class pn extends bt{constructor(e=new $t,n=new Hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(hu.fromBufferAttribute(u,e),a?Po.addScaledVector(hu,h):Po.addScaledVector(hu.sub(n),h))}n.add(Po)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(wo.containsPoint(rr.origin)===!1&&(rr.intersectSphere(wo,lm)===null||rr.origin.distanceToSquared(lm)>(e.far-e.near)**2))&&(om.copy(s).invert(),rr.copy(e.ray).applyMatrix4(om),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){const m=d[x],f=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,P=v;S<P;S+=3){const C=o.getX(S),A=o.getX(S+1),b=o.getX(S+2);r=Lo(this,f,e,i,c,h,u,C,A,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){const g=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);r=Lo(this,a,e,i,c,h,u,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){const m=d[x],f=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,P=v;S<P;S+=3){const C=S,A=S+1,b=S+2;r=Lo(this,f,e,i,c,h,u,C,A,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){const g=m,v=m+1,S=m+2;r=Lo(this,a,e,i,c,h,u,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function mM(t,e,n,i,r,s,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===qi,o),l===null)return null;bo.copy(o),bo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(bo);return c<n.near||c>n.far?null:{distance:c,point:bo.clone(),object:t}}function Lo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ao),t.getVertexPosition(l,Co),t.getVertexPosition(c,Ro);const h=mM(t,e,n,i,Ao,Co,Ro,cm);if(h){const u=new U;dn.getBarycoord(cm,Ao,Co,Ro,u),r&&(h.uv=dn.getInterpolatedAttribute(r,o,l,c,u,new De)),s&&(h.uv1=dn.getInterpolatedAttribute(s,o,l,c,u,new De)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};dn.getNormal(Ao,Co,Ro,d.normal),h.face=d,h.barycoord=u}return h}class Bs extends $t{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function x(y,m,f,g,v,S,P,C,A,b,O){const _=S/A,E=P/b,G=S/2,z=P/2,Y=C/2,J=A+1,W=b+1;let Z=0,N=0;const q=new U;for(let Q=0;Q<W;Q++){const ne=Q*E-z;for(let Se=0;Se<J;Se++){const ke=Se*_-G;q[y]=ke*g,q[m]=ne*v,q[f]=Y,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[f]=C>0?1:-1,h.push(q.x,q.y,q.z),u.push(Se/A),u.push(1-Q/b),Z+=1}}for(let Q=0;Q<b;Q++)for(let ne=0;ne<A;ne++){const Se=d+ne+J*Q,ke=d+ne+J*(Q+1),X=d+(ne+1)+J*(Q+1),te=d+(ne+1)+J*Q;l.push(Se,ke,te),l.push(ke,X,te),N+=6}o.addGroup(p,N,O),p+=N,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Is(t[n]);for(const r in i)e[r]=i[r]}return e}function gM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function bv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const vM={clone:Is,merge:Vt};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=gM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Lv extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new U,um=new De,fm=new De;class kn extends Lv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,n){return this.getViewBounds(e,um,fm),n.subVectors(fm,um)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ll*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,jr=1;class yM extends bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Wr,jr,e,n);r.layers=this.layers,this.add(r);const s=new kn(Wr,jr,e,n);s.layers=this.layers,this.add(s);const a=new kn(Wr,jr,e,n);a.layers=this.layers,this.add(a);const o=new kn(Wr,jr,e,n);o.layers=this.layers,this.add(o);const l=new kn(Wr,jr,e,n);l.layers=this.layers,this.add(l);const c=new kn(Wr,jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(u,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Nv extends Xt{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:bs,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SM extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bs(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Wi});s.uniforms.tEquirect.value=n;const a=new pn(r,s),o=n.minFilter;return n.minFilter===_r&&(n.minFilter=Bn),new yM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const pu=new U,MM=new U,EM=new Fe;class ur{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pu.subVectors(i,n).cross(MM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||EM.getNormalMatrix(e),r=this.coplanarPoint(pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new uc,No=new U;class hh{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,a=new ur){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],x=r[9],y=r[10],m=r[11],f=r[12],g=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-p,S-f).normalize(),i[1].setComponents(l+s,d+c,m+p,S+f).normalize(),i[2].setComponents(l+a,d+h,m+x,S+g).normalize(),i[3].setComponents(l-a,d-h,m-x,S-g).normalize(),i[4].setComponents(l-o,d-u,m-y,S-v).normalize(),n===di)i[5].setComponents(l+o,d+u,m+y,S+v).normalize();else if(n===Bl)i[5].setComponents(o,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function TM(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,h);else{u.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<u.length;p++){const x=u[d],y=u[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,x=u.length;p<x;p++){const y=u[p];t.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class fc extends $t{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=n/l,p=[],x=[],y=[],m=[];for(let f=0;f<h;f++){const g=f*d-a;for(let v=0;v<c;v++){const S=v*u-s;x.push(S,-g,0),y.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){const v=g+c*f,S=g+c*(f+1),P=g+1+c*(f+1),C=g+1+c*f;p.push(v,S,C),p.push(S,P,C)}this.setIndex(p),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.widthSegments,e.heightSegments)}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,IM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,YM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ME=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,VE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,N1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,D1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,V1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,j1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:wM,alphahash_pars_fragment:AM,alphamap_fragment:CM,alphamap_pars_fragment:RM,alphatest_fragment:PM,alphatest_pars_fragment:bM,aomap_fragment:LM,aomap_pars_fragment:NM,batching_pars_vertex:DM,batching_vertex:IM,begin_vertex:UM,beginnormal_vertex:FM,bsdfs:OM,iridescence_fragment:kM,bumpmap_pars_fragment:BM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:GM,clipping_planes_vertex:VM,color_fragment:WM,color_pars_fragment:jM,color_pars_vertex:XM,color_vertex:$M,common:YM,cube_uv_reflection_fragment:qM,defaultnormal_vertex:KM,displacementmap_pars_vertex:ZM,displacementmap_vertex:QM,emissivemap_fragment:JM,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:aE,envmap_physical_pars_fragment:vE,envmap_vertex:oE,fog_vertex:lE,fog_pars_vertex:cE,fog_fragment:uE,fog_pars_fragment:fE,gradientmap_pars_fragment:dE,lightmap_pars_fragment:hE,lights_lambert_fragment:pE,lights_lambert_pars_fragment:mE,lights_pars_begin:gE,lights_toon_fragment:_E,lights_toon_pars_fragment:xE,lights_phong_fragment:yE,lights_phong_pars_fragment:SE,lights_physical_fragment:ME,lights_physical_pars_fragment:EE,lights_fragment_begin:TE,lights_fragment_maps:wE,lights_fragment_end:AE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:RE,logdepthbuf_pars_vertex:PE,logdepthbuf_vertex:bE,map_fragment:LE,map_pars_fragment:NE,map_particle_fragment:DE,map_particle_pars_fragment:IE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:FE,morphinstance_vertex:OE,morphcolor_vertex:kE,morphnormal_vertex:BE,morphtarget_pars_vertex:zE,morphtarget_vertex:HE,normal_fragment_begin:GE,normal_fragment_maps:VE,normal_pars_fragment:WE,normal_pars_vertex:jE,normal_vertex:XE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:YE,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:KE,iridescence_pars_fragment:ZE,opaque_fragment:QE,packing:JE,premultiplied_alpha_fragment:e1,project_vertex:t1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:r1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:a1,shadowmap_pars_vertex:o1,shadowmap_vertex:l1,shadowmask_pars_fragment:c1,skinbase_vertex:u1,skinning_pars_vertex:f1,skinning_vertex:d1,skinnormal_vertex:h1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:g1,tonemapping_pars_fragment:v1,transmission_fragment:_1,transmission_pars_fragment:x1,uv_pars_fragment:y1,uv_pars_vertex:S1,uv_vertex:M1,worldpos_vertex:E1,background_vert:T1,background_frag:w1,backgroundCube_vert:A1,backgroundCube_frag:C1,cube_vert:R1,cube_frag:P1,depth_vert:b1,depth_frag:L1,distanceRGBA_vert:N1,distanceRGBA_frag:D1,equirect_vert:I1,equirect_frag:U1,linedashed_vert:F1,linedashed_frag:O1,meshbasic_vert:k1,meshbasic_frag:B1,meshlambert_vert:z1,meshlambert_frag:H1,meshmatcap_vert:G1,meshmatcap_frag:V1,meshnormal_vert:W1,meshnormal_frag:j1,meshphong_vert:X1,meshphong_frag:$1,meshphysical_vert:Y1,meshphysical_frag:q1,meshtoon_vert:K1,meshtoon_frag:Z1,points_vert:Q1,points_frag:J1,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},$n={basic:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Vt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Vt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Vt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Vt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Vt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Vt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Vt([le.common,le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Vt([le.lights,le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};$n.physical={uniforms:Vt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Do={r:0,b:0,g:0},ar=new Qn,rT=new ut;function sT(t,e,n,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function x(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function y(g){let v=!1;const S=x(g);S===null?f(o,l):S&&S.isColor&&(f(S,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const S=x(v);S&&(S.isCubeTexture||S.mapping===lc)?(h===void 0&&(h=new pn(new Bs(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Is($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ar.copy(v.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(ar)),h.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ot,(u!==S||d!==S.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new pn(new fc(2,2),new Ki({name:"BackgroundMaterial",uniforms:Is($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,v){g.getRGB(Do,bv(t)),i.buffers.color.setClear(Do.r,Do.g,Do.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(g,v=1){o.set(g),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(o,l)},render:y,addToRenderList:m}}function aT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(_,E,G,z,Y){let J=!1;const W=u(z,G,E);s!==W&&(s=W,c(s.object)),J=p(_,z,G,Y),J&&x(_,z,G,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,S(_,E,G,z),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function h(_){return t.deleteVertexArray(_)}function u(_,E,G){const z=G.wireframe===!0;let Y=i[_.id];Y===void 0&&(Y={},i[_.id]=Y);let J=Y[E.id];J===void 0&&(J={},Y[E.id]=J);let W=J[z];return W===void 0&&(W=d(l()),J[z]=W),W}function d(_){const E=[],G=[],z=[];for(let Y=0;Y<n;Y++)E[Y]=0,G[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:G,attributeDivisors:z,object:_,attributes:{},index:null}}function p(_,E,G,z){const Y=s.attributes,J=E.attributes;let W=0;const Z=G.getAttributes();for(const N in Z)if(Z[N].location>=0){const Q=Y[N];let ne=J[N];if(ne===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(ne=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(ne=_.instanceColor)),Q===void 0||Q.attribute!==ne||ne&&Q.data!==ne.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function x(_,E,G,z){const Y={},J=E.attributes;let W=0;const Z=G.getAttributes();for(const N in Z)if(Z[N].location>=0){let Q=J[N];Q===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor));const ne={};ne.attribute=Q,Q&&Q.data&&(ne.data=Q.data),Y[N]=ne,W++}s.attributes=Y,s.attributesNum=W,s.index=z}function y(){const _=s.newAttributes;for(let E=0,G=_.length;E<G;E++)_[E]=0}function m(_){f(_,0)}function f(_,E){const G=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;G[_]=1,z[_]===0&&(t.enableVertexAttribArray(_),z[_]=1),Y[_]!==E&&(t.vertexAttribDivisor(_,E),Y[_]=E)}function g(){const _=s.newAttributes,E=s.enabledAttributes;for(let G=0,z=E.length;G<z;G++)E[G]!==_[G]&&(t.disableVertexAttribArray(G),E[G]=0)}function v(_,E,G,z,Y,J,W){W===!0?t.vertexAttribIPointer(_,E,G,Y,J):t.vertexAttribPointer(_,E,G,z,Y,J)}function S(_,E,G,z){y();const Y=z.attributes,J=G.getAttributes(),W=E.defaultAttributeValues;for(const Z in J){const N=J[Z];if(N.location>=0){let q=Y[Z];if(q===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(q=_.instanceColor)),q!==void 0){const Q=q.normalized,ne=q.itemSize,Se=e.get(q);if(Se===void 0)continue;const ke=Se.buffer,X=Se.type,te=Se.bytesPerElement,ue=X===t.INT||X===t.UNSIGNED_INT||q.gpuType===ah;if(q.isInterleavedBufferAttribute){const ce=q.data,Ce=ce.stride,we=q.offset;if(ce.isInstancedInterleavedBuffer){for(let Be=0;Be<N.locationSize;Be++)f(N.location+Be,ce.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Be=0;Be<N.locationSize;Be++)m(N.location+Be);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let Be=0;Be<N.locationSize;Be++)v(N.location+Be,ne/N.locationSize,X,Q,Ce*te,(we+ne/N.locationSize*Be)*te,ue)}else{if(q.isInstancedBufferAttribute){for(let ce=0;ce<N.locationSize;ce++)f(N.location+ce,q.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ce=0;ce<N.locationSize;ce++)m(N.location+ce);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let ce=0;ce<N.locationSize;ce++)v(N.location+ce,ne/N.locationSize,X,Q,ne*te,ne/N.locationSize*ce*te,ue)}}else if(W!==void 0){const Q=W[Z];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(N.location,Q);break;case 3:t.vertexAttrib3fv(N.location,Q);break;case 4:t.vertexAttrib4fv(N.location,Q);break;default:t.vertexAttrib1fv(N.location,Q)}}}}g()}function P(){b();for(const _ in i){const E=i[_];for(const G in E){const z=E[G];for(const Y in z)h(z[Y].object),delete z[Y];delete E[G]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;const E=i[_.id];for(const G in E){const z=E[G];for(const Y in z)h(z[Y].object),delete z[Y];delete E[G]}delete i[_.id]}function A(_){for(const E in i){const G=i[E];if(G[_.id]===void 0)continue;const z=G[_.id];for(const Y in z)h(z[Y].object),delete z[Y];delete G[_.id]}}function b(){O(),a=!0,s!==r&&(s=r,c(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:O,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function oT(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,u){u!==0&&(t.drawArraysInstanced(i,c,h,u),n.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];n.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],h[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let x=0;for(let y=0;y<u;y++)x+=h[y];for(let y=0;y<d.length;y++)n.update(x,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function lT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==zn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===Xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==_i&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fi&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:P,maxSamples:C}}function cT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ur,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,p){const x=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=t.get(u);if(!r||x===null||x.length===0||s&&!m)s?h(null):c();else{const g=s?0:i,v=g*4;let S=f.clippingState||null;l.value=S,S=h(x,d,v,p);for(let P=0;P!==v;++P)S[P]=n[P];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,x){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const f=p+y*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==y;++v,S+=4)a.copy(u[v]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function uT(t){let e=new WeakMap;function n(a,o){return o===Pf?a.mapping=bs:o===bf&&(a.mapping=Ls),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Pf||o===bf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new SM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ph extends Lv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,dm=[.125,.215,.35,.446,.526,.582],hr=20,mu=new ph,hm=new Xe;let gu=null,vu=0,_u=0,xu=!1;const fr=(1+Math.sqrt(5))/2,Xr=1/fr,pm=[new U(-fr,Xr,0),new U(fr,Xr,0),new U(-Xr,0,fr),new U(Xr,0,fr),new U(0,fr,-Xr),new U(0,fr,Xr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,vu,_u),this._renderer.xr.enabled=xu,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bs||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Xa,format:zn,colorSpace:er,depthBuffer:!1},r=gm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fT(s)),this._blurMaterial=dT(s,e,n)}return r}_compileMaterial(e){const n=new pn(this._lodPlanes[0],e);this._renderer.compile(n,mu)}_sceneToCubeUV(e,n,i,r){const o=new kn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(hm),h.toneMapping=ji,h.autoClear=!1;const p=new Hl({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),x=new pn(new Bs,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(hm),y=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):g===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;Io(r,g*v,f>2?v:0,v,v),h.setRenderTarget(r),y&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===bs||e.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new pn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Io(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,mu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pm[(r-s-1)%pm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new pn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hr-1),y=s/x,m=isFinite(s)?1+Math.floor(h*y):hr;m>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const f=[];let g=0;for(let A=0;A<hr;++A){const b=A/y,O=Math.exp(-b*b/2);f.push(O),A===0?g+=O:A<m&&(g+=2*O)}for(let A=0;A<f.length;A++)f[A]=f[A]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-fs?r-v+fs:0),C=4*(this._cubeSize-S);Io(n,P,C,3*S,2*S),l.setRenderTarget(n),l.render(u,mu)}}function fT(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+dm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-fs?l=dm[a-t+fs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,y=3,m=2,f=1,g=new Float32Array(y*x*p),v=new Float32Array(m*x*p),S=new Float32Array(f*x*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,b=C>2?0:-1,O=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];g.set(O,y*x*C),v.set(d,m*x*C);const _=[C,C,C,C,C,C];S.set(_,f*x*C)}const P=new $t;P.setAttribute("position",new Vn(g,y)),P.setAttribute("uv",new Vn(v,m)),P.setAttribute("faceIndex",new Vn(S,f)),e.push(P),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function gm(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Io(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function dT(t,e,n){const i=new Float32Array(hr),r=new U(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function vm(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function _m(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pf||l===bf,h=l===bs||l===Ls;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new mm(t)),u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new mm(t)),u=c?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function pT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&cl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mT(t,e,n,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const y=d.morphAttributes[x];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(u){const d=u.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const p=u.morphAttributes;for(const x in p){const y=p[x];for(let m=0,f=y.length;m<f;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,x=u.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,S=g.length;v<S;v+=3){const P=g[v+0],C=g[v+1],A=g[v+2];d.push(P,C,C,A,A,P)}}else if(x!==void 0){const g=x.array;y=x.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const P=v+0,C=v+1,A=v+2;d.push(P,C,C,A,A,P)}}else return;const m=new(Mv(d)?Pv:Rv)(d,1);m.version=y;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function gT(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*a),n.update(p,i,1)}function c(d,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,d*a,x),n.update(p,i,x))}function h(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];n.update(m,i,1)}function u(d,p,x,y){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,x);let f=0;for(let g=0;g<x;g++)f+=p[g];for(let g=0;g<y.length;g++)n.update(f,i,y[g])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _T(t,e,n){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let _=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",_)};var p=_;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let P=o.attributes.position.count*S,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*C*4*u),b=new Tv(A,P,C,u);b.type=fi,b.needsUpdate=!0;const O=S*4;for(let E=0;E<u;E++){const G=f[E],z=g[E],Y=v[E],J=P*C*4*E;for(let W=0;W<G.count;W++){const Z=W*O;x===!0&&(r.fromBufferAttribute(G,W),A[J+Z+0]=r.x,A[J+Z+1]=r.y,A[J+Z+2]=r.z,A[J+Z+3]=0),y===!0&&(r.fromBufferAttribute(z,W),A[J+Z+4]=r.x,A[J+Z+5]=r.y,A[J+Z+6]=r.z,A[J+Z+7]=0),m===!0&&(r.fromBufferAttribute(Y,W),A[J+Z+8]=r.x,A[J+Z+9]=r.y,A[J+Z+10]=r.z,A[J+Z+11]=Y.itemSize===4?r.w:1)}}d={count:u,texture:b,size:new De(P,C)},i.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const y=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function xT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Iv extends Xt{constructor(e,n,i,r,s,a,o,l,c,h=xs){if(h!==xs&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xs&&(i=Ar),i===void 0&&h===Ds&&(i=Ns),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Uv=new Xt,xm=new Iv(1,1),Fv=new Tv,Ov=new sM,kv=new Nv,ym=[],Sm=[],Mm=new Float32Array(16),Em=new Float32Array(9),Tm=new Float32Array(4);function zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ym[r];if(s===void 0&&(s=new Float32Array(r),ym[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function dc(t,e){let n=Sm[e];n===void 0&&(n=new Int32Array(e),Sm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Tm.set(i),t.uniformMatrix2fv(this.addr,!1,Tm),At(n,i)}}function wT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Em.set(i),t.uniformMatrix3fv(this.addr,!1,Em),At(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Mm.set(i),t.uniformMatrix4fv(this.addr,!1,Mm),At(n,i)}}function CT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function LT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(xm.compareFunction=Sv,s=xm):s=Uv,n.setTexture2D(e||s,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ov,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||kv,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Fv,r)}function BT(t){switch(t){case 5126:return yT;case 35664:return ST;case 35665:return MT;case 35666:return ET;case 35674:return TT;case 35675:return wT;case 35676:return AT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return PT;case 35669:case 35673:return bT;case 5125:return LT;case 36294:return NT;case 36295:return DT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return kT}}function zT(t,e){t.uniform1fv(this.addr,e)}function HT(t,e){const n=zs(e,this.size,2);t.uniform2fv(this.addr,n)}function GT(t,e){const n=zs(e,this.size,3);t.uniform3fv(this.addr,n)}function VT(t,e){const n=zs(e,this.size,4);t.uniform4fv(this.addr,n)}function WT(t,e){const n=zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jT(t,e){const n=zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function XT(t,e){const n=zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $T(t,e){t.uniform1iv(this.addr,e)}function YT(t,e){t.uniform2iv(this.addr,e)}function qT(t,e){t.uniform3iv(this.addr,e)}function KT(t,e){t.uniform4iv(this.addr,e)}function ZT(t,e){t.uniform1uiv(this.addr,e)}function QT(t,e){t.uniform2uiv(this.addr,e)}function JT(t,e){t.uniform3uiv(this.addr,e)}function ew(t,e){t.uniform4uiv(this.addr,e)}function tw(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Uv,s[a])}function nw(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ov,s[a])}function iw(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||kv,s[a])}function rw(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Fv,s[a])}function sw(t){switch(t){case 5126:return zT;case 35664:return HT;case 35665:return GT;case 35666:return VT;case 35674:return WT;case 35675:return jT;case 35676:return XT;case 5124:case 35670:return $T;case 35667:case 35671:return YT;case 35668:case 35672:return qT;case 35669:case 35673:return KT;case 5125:return ZT;case 36294:return QT;case 36295:return JT;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}class aw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BT(n.type)}}class ow{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sw(n.type)}}class lw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const yu=/(\w+)(\])?(\[|\.)?/g;function wm(t,e){t.seq.push(e),t.map[e.id]=e}function cw(t,e,n){const i=t.name,r=i.length;for(yu.lastIndex=0;;){const s=yu.exec(i),a=yu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){wm(n,c===void 0?new aw(o,t,e):new ow(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new lw(o),wm(n,u)),n=u}}}class ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);cw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Am(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uw=37297;let fw=0;function dw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function hw(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===kl&&n===Ol?i="LinearDisplayP3ToLinearSRGB":e===Ol&&n===kl&&(i="LinearSRGBToLinearDisplayP3"),t){case er:case cc:return[i,"LinearTransferOETF"];case Fn:case dh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Cm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+dw(t.getShaderSource(e),a)}else return r}function pw(t,e){const n=hw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function mw(t,e){let n;switch(e){case LS:n="Linear";break;case NS:n="Reinhard";break;case DS:n="Cineon";break;case IS:n="ACESFilmic";break;case FS:n="AgX";break;case OS:n="Neutral";break;case US:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Uo=new U;function gw(){Ze.getLuminanceCoefficients(Uo);const t=Uo.x.toFixed(4),e=Uo.y.toFixed(4),n=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function _w(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ua(t){return t!==""}function Rm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(t){return t.replace(yw,Mw)}const Sw=new Map;function Mw(t,e){let n=Ue[e];if(n===void 0){const i=Sw.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return od(n)}const Ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bm(t){return t.replace(Ew,Tw)}function Tw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ww(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ov?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Aw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case bs:case Ls:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function Rw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case lv:e="ENVMAP_BLENDING_MULTIPLY";break;case PS:e="ENVMAP_BLENDING_MIX";break;case bS:e="ENVMAP_BLENDING_ADD";break}return e}function Pw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function bw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=ww(n),c=Aw(n),h=Cw(n),u=Rw(n),d=Pw(n),p=vw(n),x=_w(s),y=r.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ua).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ua).join(`
`),f.length>0&&(f+=`
`)):(m=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),f=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?Ue.tonemapping_pars_fragment:"",n.toneMapping!==ji?mw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,pw("linearToOutputTexel",n.outputColorSpace),gw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),a=od(a),a=Rm(a,n),a=Pm(a,n),o=od(o),o=Rm(o,n),o=Pm(o,n),a=bm(a),o=bm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=g+m+a,S=g+f+o,P=Am(r,r.VERTEX_SHADER,v),C=Am(r,r.FRAGMENT_SHADER,S);r.attachShader(y,P),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(E){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(P).trim(),Y=r.getShaderInfoLog(C).trim();let J=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,C);else{const Z=Cm(r,P,"vertex"),N=Cm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+G+`
`+Z+`
`+N)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||Y==="")&&(W=!1);W&&(E.diagnostics={runnable:J,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(P),r.deleteShader(C),b=new ul(r,y),O=xw(r,y)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let O;this.getAttributes=function(){return O===void 0&&A(this),O};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,uw)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=C,this}let Lw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Dw(e),n.set(e,i)),i}}class Dw{constructor(e){this.id=Lw++,this.code=e,this.usedTimes=0}}function Iw(t,e,n,i,r,s,a){const o=new Av,l=new Nw,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,E,G,z,Y){const J=z.fog,W=Y.geometry,Z=_.isMeshStandardMaterial?z.environment:null,N=(_.isMeshStandardMaterial?n:e).get(_.envMap||Z),q=N&&N.mapping===lc?N.image.height:null,Q=y[_.type];_.precision!==null&&(x=r.getMaxPrecision(_.precision),x!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",x,"instead."));const ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Se=ne!==void 0?ne.length:0;let ke=0;W.morphAttributes.position!==void 0&&(ke=1),W.morphAttributes.normal!==void 0&&(ke=2),W.morphAttributes.color!==void 0&&(ke=3);let X,te,ue,ce;if(Q){const Zt=$n[Q];X=Zt.vertexShader,te=Zt.fragmentShader}else X=_.vertexShader,te=_.fragmentShader,l.update(_),ue=l.getVertexShaderID(_),ce=l.getFragmentShaderID(_);const Ce=t.getRenderTarget(),we=Y.isInstancedMesh===!0,Be=Y.isBatchedMesh===!0,We=!!_.map,Oe=!!_.matcap,L=!!N,Ut=!!_.aoMap,He=!!_.lightMap,Ge=!!_.bumpMap,Re=!!_.normalMap,tt=!!_.displacementMap,be=!!_.emissiveMap,R=!!_.metalnessMap,M=!!_.roughnessMap,k=_.anisotropy>0,j=_.clearcoat>0,K=_.dispersion>0,V=_.iridescence>0,fe=_.sheen>0,ae=_.transmission>0,oe=k&&!!_.anisotropyMap,Ie=j&&!!_.clearcoatMap,re=j&&!!_.clearcoatNormalMap,pe=j&&!!_.clearcoatRoughnessMap,Te=V&&!!_.iridescenceMap,Ae=V&&!!_.iridescenceThicknessMap,_e=fe&&!!_.sheenColorMap,Ve=fe&&!!_.sheenRoughnessMap,Ne=!!_.specularMap,nt=!!_.specularColorMap,D=!!_.specularIntensityMap,me=ae&&!!_.transmissionMap,$=ae&&!!_.thicknessMap,ee=!!_.gradientMap,de=!!_.alphaMap,ge=_.alphaTest>0,je=!!_.alphaHash,xt=!!_.extensions;let Kt=ji;_.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Kt=t.toneMapping);const Ye={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:te,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:x,batching:Be,batchingColor:Be&&Y._colorsTexture!==null,instancing:we,instancingColor:we&&Y.instanceColor!==null,instancingMorph:we&&Y.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:er,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:Oe,envMap:L,envMapMode:L&&N.mapping,envMapCubeUVHeight:q,aoMap:Ut,lightMap:He,bumpMap:Ge,normalMap:Re,displacementMap:p&&tt,emissiveMap:be,normalMapObjectSpace:Re&&_.normalMapType===HS,normalMapTangentSpace:Re&&_.normalMapType===yv,metalnessMap:R,roughnessMap:M,anisotropy:k,anisotropyMap:oe,clearcoat:j,clearcoatMap:Ie,clearcoatNormalMap:re,clearcoatRoughnessMap:pe,dispersion:K,iridescence:V,iridescenceMap:Te,iridescenceThicknessMap:Ae,sheen:fe,sheenColorMap:_e,sheenRoughnessMap:Ve,specularMap:Ne,specularColorMap:nt,specularIntensityMap:D,transmission:ae,transmissionMap:me,thicknessMap:$,gradientMap:ee,opaque:_.transparent===!1&&_.blending===_s&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:ge,alphaHash:je,combine:_.combine,mapUv:We&&m(_.map.channel),aoMapUv:Ut&&m(_.aoMap.channel),lightMapUv:He&&m(_.lightMap.channel),bumpMapUv:Ge&&m(_.bumpMap.channel),normalMapUv:Re&&m(_.normalMap.channel),displacementMapUv:tt&&m(_.displacementMap.channel),emissiveMapUv:be&&m(_.emissiveMap.channel),metalnessMapUv:R&&m(_.metalnessMap.channel),roughnessMapUv:M&&m(_.roughnessMap.channel),anisotropyMapUv:oe&&m(_.anisotropyMap.channel),clearcoatMapUv:Ie&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&m(_.sheenRoughnessMap.channel),specularMapUv:Ne&&m(_.specularMap.channel),specularColorMapUv:nt&&m(_.specularColorMap.channel),specularIntensityMapUv:D&&m(_.specularIntensityMap.channel),transmissionMapUv:me&&m(_.transmissionMap.channel),thicknessMapUv:$&&m(_.thicknessMap.channel),alphaMapUv:de&&m(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Re||k),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(We||de),fog:!!J,useFog:_.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ke,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:Kt,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===li,flipSided:_.side===an,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&_.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function g(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const G in _.defines)E.push(G),E.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(v(E,_),S(E,_),E.push(t.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function v(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function S(_,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),_.push(o.mask)}function P(_){const E=y[_.type];let G;if(E){const z=$n[E];G=vM.clone(z.uniforms)}else G=_.uniforms;return G}function C(_,E){let G;for(let z=0,Y=h.length;z<Y;z++){const J=h[z];if(J.cacheKey===E){G=J,++G.usedTimes;break}}return G===void 0&&(G=new bw(t,E,_,s),h.push(G)),G}function A(_){if(--_.usedTimes===0){const E=h.indexOf(_);h[E]=h[h.length-1],h.pop(),_.destroy()}}function b(_){l.remove(_)}function O(){l.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:P,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:h,dispose:O}}function Uw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Fw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Nm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u,d,p,x,y,m){let f=t[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:x,renderOrder:u.renderOrder,z:y,group:m},t[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=y,f.group=m),e++,f}function o(u,d,p,x,y,m){const f=a(u,d,p,x,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(u,d,p,x,y,m){const f=a(u,d,p,x,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(u,d){n.length>1&&n.sort(u||Fw),i.length>1&&i.sort(d||Nm),r.length>1&&r.sort(d||Nm)}function h(){for(let u=e,d=t.length;u<d;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Ow(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Dm,t.set(i,[a])):r>=s.length?(a=new Dm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function kw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Xe};break;case"SpotLight":n={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function Bw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let zw=0;function Hw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Gw(t){const e=new kw,n=Bw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new ut,a=new ut;function o(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,x=0,y=0,m=0,f=0,g=0,v=0,S=0,P=0,C=0,A=0;c.sort(Hw);for(let O=0,_=c.length;O<_;O++){const E=c[O],G=E.color,z=E.intensity,Y=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=G.r*z,u+=G.g*z,d+=G.b*z;else if(E.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(E.sh.coefficients[W],z);A++}else if(E.isDirectionalLight){const W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Z=E.shadow,N=n.get(E);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=E.shadow.matrix,g++}i.directional[p]=W,p++}else if(E.isSpotLight){const W=e.get(E);W.position.setFromMatrixPosition(E.matrixWorld),W.color.copy(G).multiplyScalar(z),W.distance=Y,W.coneCos=Math.cos(E.angle),W.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),W.decay=E.decay,i.spot[y]=W;const Z=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,Z.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[y]=Z.matrix,E.castShadow){const N=n.get(E);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=J,S++}y++}else if(E.isRectAreaLight){const W=e.get(E);W.color.copy(G).multiplyScalar(z),W.halfWidth.set(E.width*.5,0,0),W.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=W,m++}else if(E.isPointLight){const W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),W.distance=E.distance,W.decay=E.decay,E.castShadow){const Z=E.shadow,N=n.get(E);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,i.pointShadow[x]=N,i.pointShadowMap[x]=J,i.pointShadowMatrix[x]=E.shadow.matrix,v++}i.point[x]=W,x++}else if(E.isHemisphereLight){const W=e.get(E);W.skyColor.copy(E.color).multiplyScalar(z),W.groundColor.copy(E.groundColor).multiplyScalar(z),i.hemi[f]=W,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==p||b.pointLength!==x||b.spotLength!==y||b.rectAreaLength!==m||b.hemiLength!==f||b.numDirectionalShadows!==g||b.numPointShadows!==v||b.numSpotShadows!==S||b.numSpotMaps!==P||b.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,b.directionalLength=p,b.pointLength=x,b.spotLength=y,b.rectAreaLength=m,b.hemiLength=f,b.numDirectionalShadows=g,b.numPointShadows=v,b.numSpotShadows=S,b.numSpotMaps=P,b.numLightProbes=A,i.version=zw++)}function l(c,h){let u=0,d=0,p=0,x=0,y=0;const m=h.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const v=c[f];if(v.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Im(t){const e=new Gw(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Vw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Im(t),e.set(r,[o])):s>=a.length?(o=new Im(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ww extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jw extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yw(t,e,n){let i=new hh;const r=new De,s=new De,a=new gt,o=new Ww({depthPacking:zS}),l=new jw,c={},h=n.maxTextureSize,u={[qi]:an,[an]:qi,[li]:li},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Xw,fragmentShader:$w}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new $t;x.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new pn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ov;let f=this.type;this.render=function(C,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const O=t.getRenderTarget(),_=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Wi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=f!==si&&this.type===si,Y=f===si&&this.type!==si;for(let J=0,W=C.length;J<W;J++){const Z=C[J],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const q=N.getFrameExtents();if(r.multiply(q),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,N.mapSize.y=s.y)),N.map===null||z===!0||Y===!0){const ne=this.type!==si?{minFilter:wn,magFilter:wn}:{};N.map!==null&&N.map.dispose(),N.map=new Cr(r.x,r.y,ne),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Q=N.getViewportCount();for(let ne=0;ne<Q;ne++){const Se=N.getViewport(ne);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),G.viewport(a),N.updateMatrices(Z,ne),i=N.getFrustum(),S(A,b,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===si&&g(N,b),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(O,_,E)};function g(C,A){const b=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Cr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,b,d,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,b,p,y,null)}function v(C,A,b,O){let _=null;const E=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)_=E;else if(_=b.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=_.uuid,z=A.uuid;let Y=c[G];Y===void 0&&(Y={},c[G]=Y);let J=Y[z];J===void 0&&(J=_.clone(),Y[z]=J,A.addEventListener("dispose",P)),_=J}if(_.visible=A.visible,_.wireframe=A.wireframe,O===si?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=t.properties.get(_);G.light=b}return _}function S(C,A,b,O,_){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===si)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const z=e.update(C),Y=C.material;if(Array.isArray(Y)){const J=z.groups;for(let W=0,Z=J.length;W<Z;W++){const N=J[W],q=Y[N.materialIndex];if(q&&q.visible){const Q=v(C,q,O,_);C.onBeforeShadow(t,C,A,b,z,Q,N),t.renderBufferDirect(b,null,z,Q,C,N),C.onAfterShadow(t,C,A,b,z,Q,N)}}}else if(Y.visible){const J=v(C,Y,O,_);C.onBeforeShadow(t,C,A,b,z,J,null),t.renderBufferDirect(b,null,z,J,C,null),C.onAfterShadow(t,C,A,b,z,J,null)}}const G=C.children;for(let z=0,Y=G.length;z<Y;z++)S(G[z],A,b,O,_)}function P(C){C.target.removeEventListener("dispose",P);for(const b in c){const O=c[b],_=C.target.uuid;_ in O&&(O[_].dispose(),delete O[_])}}}const qw={[Mf]:Ef,[Tf]:Cf,[wf]:Rf,[Ps]:Af,[Ef]:Mf,[Cf]:Tf,[Rf]:wf,[Af]:Ps};function Kw(t){function e(){let D=!1;const me=new gt;let $=null;const ee=new gt(0,0,0,0);return{setMask:function(de){$!==de&&!D&&(t.colorMask(de,de,de,de),$=de)},setLocked:function(de){D=de},setClear:function(de,ge,je,xt,Kt){Kt===!0&&(de*=xt,ge*=xt,je*=xt),me.set(de,ge,je,xt),ee.equals(me)===!1&&(t.clearColor(de,ge,je,xt),ee.copy(me))},reset:function(){D=!1,$=null,ee.set(-1,0,0,0)}}}function n(){let D=!1,me=!1,$=null,ee=null,de=null;return{setReversed:function(ge){me=ge},setTest:function(ge){ge?ue(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(ge){$!==ge&&!D&&(t.depthMask(ge),$=ge)},setFunc:function(ge){if(me&&(ge=qw[ge]),ee!==ge){switch(ge){case Mf:t.depthFunc(t.NEVER);break;case Ef:t.depthFunc(t.ALWAYS);break;case Tf:t.depthFunc(t.LESS);break;case Ps:t.depthFunc(t.LEQUAL);break;case wf:t.depthFunc(t.EQUAL);break;case Af:t.depthFunc(t.GEQUAL);break;case Cf:t.depthFunc(t.GREATER);break;case Rf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=ge}},setLocked:function(ge){D=ge},setClear:function(ge){de!==ge&&(t.clearDepth(ge),de=ge)},reset:function(){D=!1,$=null,ee=null,de=null}}}function i(){let D=!1,me=null,$=null,ee=null,de=null,ge=null,je=null,xt=null,Kt=null;return{setTest:function(Ye){D||(Ye?ue(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Ye){me!==Ye&&!D&&(t.stencilMask(Ye),me=Ye)},setFunc:function(Ye,Zt,Jn){($!==Ye||ee!==Zt||de!==Jn)&&(t.stencilFunc(Ye,Zt,Jn),$=Ye,ee=Zt,de=Jn)},setOp:function(Ye,Zt,Jn){(ge!==Ye||je!==Zt||xt!==Jn)&&(t.stencilOp(Ye,Zt,Jn),ge=Ye,je=Zt,xt=Jn)},setLocked:function(Ye){D=Ye},setClear:function(Ye){Kt!==Ye&&(t.clearStencil(Ye),Kt=Ye)},reset:function(){D=!1,me=null,$=null,ee=null,de=null,ge=null,je=null,xt=null,Kt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,x=!1,y=null,m=null,f=null,g=null,v=null,S=null,P=null,C=new Xe(0,0,0),A=0,b=!1,O=null,_=null,E=null,G=null,z=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,W=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=W>=2);let N=null,q={};const Q=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),Se=new gt().fromArray(Q),ke=new gt().fromArray(ne);function X(D,me,$,ee){const de=new Uint8Array(4),ge=t.createTexture();t.bindTexture(D,ge),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<$;je++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(me+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ge}const te={};te[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ue(t.DEPTH_TEST),s.setFunc(Ps),He(!1),Ge(Vp),ue(t.CULL_FACE),L(Wi);function ue(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function ce(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Ce(D,me){return h[D]!==me?(t.bindFramebuffer(D,me),h[D]=me,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=me),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=me),!0):!1}function we(D,me){let $=d,ee=!1;if(D){$=u.get(me),$===void 0&&($=[],u.set(me,$));const de=D.textures;if($.length!==de.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,je=de.length;ge<je;ge++)$[ge]=t.COLOR_ATTACHMENT0+ge;$.length=de.length,ee=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,ee=!0);ee&&t.drawBuffers($)}function Be(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const We={[dr]:t.FUNC_ADD,[dS]:t.FUNC_SUBTRACT,[hS]:t.FUNC_REVERSE_SUBTRACT};We[pS]=t.MIN,We[mS]=t.MAX;const Oe={[gS]:t.ZERO,[vS]:t.ONE,[_S]:t.SRC_COLOR,[yf]:t.SRC_ALPHA,[TS]:t.SRC_ALPHA_SATURATE,[MS]:t.DST_COLOR,[yS]:t.DST_ALPHA,[xS]:t.ONE_MINUS_SRC_COLOR,[Sf]:t.ONE_MINUS_SRC_ALPHA,[ES]:t.ONE_MINUS_DST_COLOR,[SS]:t.ONE_MINUS_DST_ALPHA,[wS]:t.CONSTANT_COLOR,[AS]:t.ONE_MINUS_CONSTANT_COLOR,[CS]:t.CONSTANT_ALPHA,[RS]:t.ONE_MINUS_CONSTANT_ALPHA};function L(D,me,$,ee,de,ge,je,xt,Kt,Ye){if(D===Wi){x===!0&&(ce(t.BLEND),x=!1);return}if(x===!1&&(ue(t.BLEND),x=!0),D!==fS){if(D!==y||Ye!==b){if((m!==dr||v!==dr)&&(t.blendEquation(t.FUNC_ADD),m=dr,v=dr),Ye)switch(D){case _s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wp:t.blendFunc(t.ONE,t.ONE);break;case jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}f=null,g=null,S=null,P=null,C.set(0,0,0),A=0,y=D,b=Ye}return}de=de||me,ge=ge||$,je=je||ee,(me!==m||de!==v)&&(t.blendEquationSeparate(We[me],We[de]),m=me,v=de),($!==f||ee!==g||ge!==S||je!==P)&&(t.blendFuncSeparate(Oe[$],Oe[ee],Oe[ge],Oe[je]),f=$,g=ee,S=ge,P=je),(xt.equals(C)===!1||Kt!==A)&&(t.blendColor(xt.r,xt.g,xt.b,Kt),C.copy(xt),A=Kt),y=D,b=!1}function Ut(D,me){D.side===li?ce(t.CULL_FACE):ue(t.CULL_FACE);let $=D.side===an;me&&($=!$),He($),D.blending===_s&&D.transparent===!1?L(Wi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const ee=D.stencilWrite;a.setTest(ee),ee&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),tt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){O!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),O=D)}function Ge(D){D!==lS?(ue(t.CULL_FACE),D!==_&&(D===Vp?t.cullFace(t.BACK):D===cS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),_=D}function Re(D){D!==E&&(J&&t.lineWidth(D),E=D)}function tt(D,me,$){D?(ue(t.POLYGON_OFFSET_FILL),(G!==me||z!==$)&&(t.polygonOffset(me,$),G=me,z=$)):ce(t.POLYGON_OFFSET_FILL)}function be(D){D?ue(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function R(D){D===void 0&&(D=t.TEXTURE0+Y-1),N!==D&&(t.activeTexture(D),N=D)}function M(D,me,$){$===void 0&&(N===null?$=t.TEXTURE0+Y-1:$=N);let ee=q[$];ee===void 0&&(ee={type:void 0,texture:void 0},q[$]=ee),(ee.type!==D||ee.texture!==me)&&(N!==$&&(t.activeTexture($),N=$),t.bindTexture(D,me||te[D]),ee.type=D,ee.texture=me)}function k(){const D=q[N];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(D){Se.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Se.copy(D))}function _e(D){ke.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ke.copy(D))}function Ve(D,me){let $=l.get(me);$===void 0&&($=new WeakMap,l.set(me,$));let ee=$.get(D);ee===void 0&&(ee=t.getUniformBlockIndex(me,D.name),$.set(D,ee))}function Ne(D,me){const ee=l.get(me).get(D);o.get(me)!==ee&&(t.uniformBlockBinding(me,ee,D.__bindingPointIndex),o.set(me,ee))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,q={},h={},u=new WeakMap,d=[],p=null,x=!1,y=null,m=null,f=null,g=null,v=null,S=null,P=null,C=new Xe(0,0,0),A=0,b=!1,O=null,_=null,E=null,G=null,z=null,Se.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ue,disable:ce,bindFramebuffer:Ce,drawBuffers:we,useProgram:Be,setBlending:L,setMaterial:Ut,setFlipSided:He,setCullFace:Ge,setLineWidth:Re,setPolygonOffset:tt,setScissorTest:be,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:pe,texImage3D:Te,updateUBOMapping:Ve,uniformBlockBinding:Ne,texStorage2D:Ie,texStorage3D:re,texSubImage2D:V,texSubImage3D:fe,compressedTexSubImage2D:ae,compressedTexSubImage3D:oe,scissor:Ae,viewport:_e,reset:nt}}function Um(t,e,n,i){const r=Zw(i);switch(n){case hv:return t*e;case mv:return t*e;case gv:return t*e*2;case vv:return t*e/r.components*r.byteLength;case ch:return t*e/r.components*r.byteLength;case _v:return t*e*2/r.components*r.byteLength;case uh:return t*e*2/r.components*r.byteLength;case pv:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case fh:return t*e*4/r.components*r.byteLength;case il:case rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case If:case Ff:return Math.max(t,16)*Math.max(e,8)/4;case Df:case Uf:return Math.max(t,8)*Math.max(e,8)/2;case Of:case kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case jf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case qf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ol:case ed:case td:return Math.ceil(t/4)*Math.ceil(e/4)*16;case xv:case nd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case id:case rd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Zw(t){switch(t){case _i:case uv:return{byteLength:1,components:1};case Ba:case fv:case Xa:return{byteLength:2,components:1};case oh:case lh:return{byteLength:2,components:4};case Ar:case ah:case fi:return{byteLength:4,components:1};case dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Qw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return p?new OffscreenCanvas(R,M):zl("canvas")}function y(R,M,k){let j=1;const K=be(R);if((K.width>k||K.height>k)&&(j=k/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const V=Math.floor(j*K.width),fe=Math.floor(j*K.height);u===void 0&&(u=x(V,fe));const ae=M?x(V,fe):u;return ae.width=V,ae.height=fe,ae.getContext("2d").drawImage(R,0,0,V,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+fe+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==wn&&R.minFilter!==Bn}function f(R){t.generateMipmap(R)}function g(R,M,k,j,K=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let V=M;if(M===t.RED&&(k===t.FLOAT&&(V=t.R32F),k===t.HALF_FLOAT&&(V=t.R16F),k===t.UNSIGNED_BYTE&&(V=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(V=t.R8UI),k===t.UNSIGNED_SHORT&&(V=t.R16UI),k===t.UNSIGNED_INT&&(V=t.R32UI),k===t.BYTE&&(V=t.R8I),k===t.SHORT&&(V=t.R16I),k===t.INT&&(V=t.R32I)),M===t.RG&&(k===t.FLOAT&&(V=t.RG32F),k===t.HALF_FLOAT&&(V=t.RG16F),k===t.UNSIGNED_BYTE&&(V=t.RG8)),M===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(V=t.RG8UI),k===t.UNSIGNED_SHORT&&(V=t.RG16UI),k===t.UNSIGNED_INT&&(V=t.RG32UI),k===t.BYTE&&(V=t.RG8I),k===t.SHORT&&(V=t.RG16I),k===t.INT&&(V=t.RG32I)),M===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(V=t.RGB8UI),k===t.UNSIGNED_SHORT&&(V=t.RGB16UI),k===t.UNSIGNED_INT&&(V=t.RGB32UI),k===t.BYTE&&(V=t.RGB8I),k===t.SHORT&&(V=t.RGB16I),k===t.INT&&(V=t.RGB32I)),M===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),k===t.UNSIGNED_INT&&(V=t.RGBA32UI),k===t.BYTE&&(V=t.RGBA8I),k===t.SHORT&&(V=t.RGBA16I),k===t.INT&&(V=t.RGBA32I)),M===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),M===t.RGBA){const fe=K?Fl:Ze.getTransfer(j);k===t.FLOAT&&(V=t.RGBA32F),k===t.HALF_FLOAT&&(V=t.RGBA16F),k===t.UNSIGNED_BYTE&&(V=fe===ot?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function v(R,M){let k;return R?M===null||M===Ar||M===Ns?k=t.DEPTH24_STENCIL8:M===fi?k=t.DEPTH32F_STENCIL8:M===Ba&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ar||M===Ns?k=t.DEPTH_COMPONENT24:M===fi?k=t.DEPTH_COMPONENT32F:M===Ba&&(k=t.DEPTH_COMPONENT16),k}function S(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==wn&&R.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){const M=R.target;M.removeEventListener("dispose",P),A(M),M.isVideoTexture&&h.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),O(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,j=d.get(k);if(j){const K=j[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(R),Object.keys(j).length===0&&d.delete(k)}i.remove(R)}function b(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const k=R.source,j=d.get(k);delete j[M.__cacheKey],a.memory.textures--}function O(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let K=0;K<M.__webglFramebuffer[j].length;K++)t.deleteFramebuffer(M.__webglFramebuffer[j][K]);else t.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)t.deleteFramebuffer(M.__webglFramebuffer[j]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let j=0,K=k.length;j<K;j++){const V=i.get(k[j]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(k[j])}i.remove(R)}let _=0;function E(){_=0}function G(){const R=_;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),_+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Y(R,M){const k=i.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(k,R,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function J(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){ke(k,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function W(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){ke(k,R,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function Z(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){X(k,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const N={[Lf]:t.REPEAT,[vr]:t.CLAMP_TO_EDGE,[Nf]:t.MIRRORED_REPEAT},q={[wn]:t.NEAREST,[kS]:t.NEAREST_MIPMAP_NEAREST,[mo]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[Xc]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},Q={[GS]:t.NEVER,[YS]:t.ALWAYS,[VS]:t.LESS,[Sv]:t.LEQUAL,[WS]:t.EQUAL,[$S]:t.GEQUAL,[jS]:t.GREATER,[XS]:t.NOTEQUAL};function ne(R,M){if(M.type===fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===Xc||M.magFilter===mo||M.magFilter===_r||M.minFilter===Bn||M.minFilter===Xc||M.minFilter===mo||M.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,N[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,N[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,N[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==mo&&M.minFilter!==_r||M.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Se(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",P));const j=M.source;let K=d.get(j);K===void 0&&(K={},d.set(j,K));const V=z(M);if(V!==R.__cacheKey){K[V]===void 0&&(K[V]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[V].usedTimes++;const fe=K[R.__cacheKey];fe!==void 0&&(K[R.__cacheKey].usedTimes--,fe.usedTimes===0&&b(M)),R.__cacheKey=V,R.__webglTexture=K[V].texture}return k}function ke(R,M,k){let j=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=t.TEXTURE_3D);const K=Se(R,M),V=M.source;n.bindTexture(j,R.__webglTexture,t.TEXTURE0+k);const fe=i.get(V);if(V.version!==fe.__version||K===!0){n.activeTexture(t.TEXTURE0+k);const ae=Ze.getPrimaries(Ze.workingColorSpace),oe=M.colorSpace===Di?null:Ze.getPrimaries(M.colorSpace),Ie=M.colorSpace===Di||ae===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let re=y(M.image,!1,r.maxTextureSize);re=tt(M,re);const pe=s.convert(M.format,M.colorSpace),Te=s.convert(M.type);let Ae=g(M.internalFormat,pe,Te,M.colorSpace,M.isVideoTexture);ne(j,M);let _e;const Ve=M.mipmaps,Ne=M.isVideoTexture!==!0,nt=fe.__version===void 0||K===!0,D=V.dataReady,me=S(M,re);if(M.isDepthTexture)Ae=v(M.format===Ds,M.type),nt&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,Ae,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ae,re.width,re.height,0,pe,Te,null));else if(M.isDataTexture)if(Ve.length>0){Ne&&nt&&n.texStorage2D(t.TEXTURE_2D,me,Ae,Ve[0].width,Ve[0].height);for(let $=0,ee=Ve.length;$<ee;$++)_e=Ve[$],Ne?D&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,pe,Te,_e.data):n.texImage2D(t.TEXTURE_2D,$,Ae,_e.width,_e.height,0,pe,Te,_e.data);M.generateMipmaps=!1}else Ne?(nt&&n.texStorage2D(t.TEXTURE_2D,me,Ae,re.width,re.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,pe,Te,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,re.width,re.height,0,pe,Te,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ae,Ve[0].width,Ve[0].height,re.depth);for(let $=0,ee=Ve.length;$<ee;$++)if(_e=Ve[$],M.format!==zn)if(pe!==null)if(Ne){if(D)if(M.layerUpdates.size>0){const de=Um(_e.width,_e.height,M.format,M.type);for(const ge of M.layerUpdates){const je=_e.data.subarray(ge*de/_e.data.BYTES_PER_ELEMENT,(ge+1)*de/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ge,_e.width,_e.height,1,pe,je,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,re.depth,pe,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Ae,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,re.depth,pe,Te,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Ae,_e.width,_e.height,re.depth,0,pe,Te,_e.data)}else{Ne&&nt&&n.texStorage2D(t.TEXTURE_2D,me,Ae,Ve[0].width,Ve[0].height);for(let $=0,ee=Ve.length;$<ee;$++)_e=Ve[$],M.format!==zn?pe!==null?Ne?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,pe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?D&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,pe,Te,_e.data):n.texImage2D(t.TEXTURE_2D,$,Ae,_e.width,_e.height,0,pe,Te,_e.data)}else if(M.isDataArrayTexture)if(Ne){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ae,re.width,re.height,re.depth),D)if(M.layerUpdates.size>0){const $=Um(re.width,re.height,M.format,M.type);for(const ee of M.layerUpdates){const de=re.data.subarray(ee*$/re.data.BYTES_PER_ELEMENT,(ee+1)*$/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,pe,Te,de)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,pe,Te,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,re.width,re.height,re.depth,0,pe,Te,re.data);else if(M.isData3DTexture)Ne?(nt&&n.texStorage3D(t.TEXTURE_3D,me,Ae,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,pe,Te,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,re.width,re.height,re.depth,0,pe,Te,re.data);else if(M.isFramebufferTexture){if(nt)if(Ne)n.texStorage2D(t.TEXTURE_2D,me,Ae,re.width,re.height);else{let $=re.width,ee=re.height;for(let de=0;de<me;de++)n.texImage2D(t.TEXTURE_2D,de,Ae,$,ee,0,pe,Te,null),$>>=1,ee>>=1}}else if(Ve.length>0){if(Ne&&nt){const $=be(Ve[0]);n.texStorage2D(t.TEXTURE_2D,me,Ae,$.width,$.height)}for(let $=0,ee=Ve.length;$<ee;$++)_e=Ve[$],Ne?D&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,pe,Te,_e):n.texImage2D(t.TEXTURE_2D,$,Ae,pe,Te,_e);M.generateMipmaps=!1}else if(Ne){if(nt){const $=be(re);n.texStorage2D(t.TEXTURE_2D,me,Ae,$.width,$.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Te,re)}else n.texImage2D(t.TEXTURE_2D,0,Ae,pe,Te,re);m(M)&&f(j),fe.__version=V.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function X(R,M,k){if(M.image.length!==6)return;const j=Se(R,M),K=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const V=i.get(K);if(K.version!==V.__version||j===!0){n.activeTexture(t.TEXTURE0+k);const fe=Ze.getPrimaries(Ze.workingColorSpace),ae=M.colorSpace===Di?null:Ze.getPrimaries(M.colorSpace),oe=M.colorSpace===Di||fe===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let ee=0;ee<6;ee++)!Ie&&!re?pe[ee]=y(M.image[ee],!0,r.maxCubemapSize):pe[ee]=re?M.image[ee].image:M.image[ee],pe[ee]=tt(M,pe[ee]);const Te=pe[0],Ae=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),Ve=g(M.internalFormat,Ae,_e,M.colorSpace),Ne=M.isVideoTexture!==!0,nt=V.__version===void 0||j===!0,D=K.dataReady;let me=S(M,Te);ne(t.TEXTURE_CUBE_MAP,M);let $;if(Ie){Ne&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,Te.width,Te.height);for(let ee=0;ee<6;ee++){$=pe[ee].mipmaps;for(let de=0;de<$.length;de++){const ge=$[de];M.format!==zn?Ae!==null?Ne?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,ge.width,ge.height,Ae,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,Ve,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,ge.width,ge.height,Ae,_e,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,Ve,ge.width,ge.height,0,Ae,_e,ge.data)}}}else{if($=M.mipmaps,Ne&&nt){$.length>0&&me++;const ee=be(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){Ne?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,pe[ee].width,pe[ee].height,Ae,_e,pe[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,pe[ee].width,pe[ee].height,0,Ae,_e,pe[ee].data);for(let de=0;de<$.length;de++){const je=$[de].image[ee].image;Ne?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,je.width,je.height,Ae,_e,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,Ve,je.width,je.height,0,Ae,_e,je.data)}}else{Ne?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ae,_e,pe[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,Ae,_e,pe[ee]);for(let de=0;de<$.length;de++){const ge=$[de];Ne?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,Ae,_e,ge.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,Ve,Ae,_e,ge.image[ee])}}}m(M)&&f(t.TEXTURE_CUBE_MAP),V.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function te(R,M,k,j,K,V){const fe=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),oe=g(k.internalFormat,fe,ae,k.colorSpace);if(!i.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>V),pe=Math.max(1,M.height>>V);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,V,oe,re,pe,M.depth,0,fe,ae,null):n.texImage2D(K,V,oe,re,pe,0,fe,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ge(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,K,i.get(k).__webglTexture,0,He(M)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,K,i.get(k).__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(R,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const j=M.depthTexture,K=j&&j.isDepthTexture?j.type:null,V=v(M.stencilBuffer,K),fe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=He(M);Ge(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,V,M.width,M.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,V,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,V,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,R)}else{const j=M.textures;for(let K=0;K<j.length;K++){const V=j[K],fe=s.convert(V.format,V.colorSpace),ae=s.convert(V.type),oe=g(V.internalFormat,fe,ae,V.colorSpace),Ie=He(M);k&&Ge(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,oe,M.width,M.height):Ge(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,oe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,oe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const j=i.get(M.depthTexture).__webglTexture,K=He(M);if(M.depthTexture.format===xs)Ge(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(M.depthTexture.format===Ds)Ge(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=j}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=t.createRenderbuffer(),ue(M.__webglDepthbuffer[j],R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=M.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,V)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ue(M.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,K)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(R,M,k){const j=i.get(R);M!==void 0&&te(j.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ce(R)}function Be(R){const M=R.texture,k=i.get(R),j=i.get(M);R.addEventListener("dispose",C);const K=R.textures,V=R.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=M.version,a.memory.textures++),V){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let oe=0;oe<M.mipmaps.length;oe++)k.__webglFramebuffer[ae][oe]=t.createFramebuffer()}else k.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)k.__webglFramebuffer[ae]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(fe)for(let ae=0,oe=K.length;ae<oe;ae++){const Ie=i.get(K[ae]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Ge(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const oe=K[ae];k.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);const Ie=s.convert(oe.format,oe.colorSpace),re=s.convert(oe.type),pe=g(oe.internalFormat,Ie,re,oe.colorSpace,R.isXRRenderTarget===!0),Te=He(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),ne(t.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)te(k.__webglFramebuffer[ae][oe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,oe);else te(k.__webglFramebuffer[ae],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ae=0,oe=K.length;ae<oe;ae++){const Ie=K[ae],re=i.get(Ie);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ne(t.TEXTURE_2D,Ie),te(k.__webglFramebuffer,R,Ie,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),m(Ie)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,j.__webglTexture),ne(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)te(k.__webglFramebuffer[oe],R,M,t.COLOR_ATTACHMENT0,ae,oe);else te(k.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ae,0);m(M)&&f(ae),n.unbindTexture()}R.depthBuffer&&Ce(R)}function We(R){const M=R.textures;for(let k=0,j=M.length;k<j;k++){const K=M[k];if(m(K)){const V=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(K).__webglTexture;n.bindTexture(V,fe),f(V),n.unbindTexture()}}}const Oe=[],L=[];function Ut(R){if(R.samples>0){if(Ge(R)===!1){const M=R.textures,k=R.width,j=R.height;let K=t.COLOR_BUFFER_BIT;const V=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),ae=M.length>1;if(ae)for(let oe=0;oe<M.length;oe++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let oe=0;oe<M.length;oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[oe]);const Ie=i.get(M[oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,k,j,0,0,k,j,K,t.NEAREST),l===!0&&(Oe.length=0,L.length=0,Oe.push(t.COLOR_ATTACHMENT0+oe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Oe.push(V),L.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let oe=0;oe<M.length;oe++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,fe.__webglColorRenderbuffer[oe]);const Ie=i.get(M[oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function He(R){return Math.min(r.maxSamples,R.samples)}function Ge(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Re(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function tt(R,M){const k=R.colorSpace,j=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==er&&k!==Di&&(Ze.getTransfer(k)===ot?(j!==zn||K!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=E,this.setTexture2D=Y,this.setTexture2DArray=J,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=we,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ge}function Jw(t,e){function n(i,r=Di){let s;const a=Ze.getTransfer(r);if(i===_i)return t.UNSIGNED_BYTE;if(i===oh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===dv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===uv)return t.BYTE;if(i===fv)return t.SHORT;if(i===Ba)return t.UNSIGNED_SHORT;if(i===ah)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===Xa)return t.HALF_FLOAT;if(i===hv)return t.ALPHA;if(i===pv)return t.RGB;if(i===zn)return t.RGBA;if(i===mv)return t.LUMINANCE;if(i===gv)return t.LUMINANCE_ALPHA;if(i===xs)return t.DEPTH_COMPONENT;if(i===Ds)return t.DEPTH_STENCIL;if(i===vv)return t.RED;if(i===ch)return t.RED_INTEGER;if(i===_v)return t.RG;if(i===uh)return t.RG_INTEGER;if(i===fh)return t.RGBA_INTEGER;if(i===il||i===rl||i===sl||i===al)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Df||i===If||i===Uf||i===Ff)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Df)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===If)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ff)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Of||i===kf||i===Bf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Of||i===kf)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zf||i===Hf||i===Gf||i===Vf||i===Wf||i===jf||i===Xf||i===$f||i===Yf||i===qf||i===Kf||i===Zf||i===Qf||i===Jf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$f)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ol||i===ed||i===td)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ol)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ed)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===td)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xv||i===nd||i===id||i===rd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ol)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===id)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class eA extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fa extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tA={type:"move"};class Su{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const nA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Xt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ki({vertexShader:nA,fragmentShader:iA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pn(new fc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sA extends ks{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,x=null;const y=new rA,m=n.getContextAttributes();let f=null,g=null;const v=[],S=[],P=new De;let C=null;const A=new kn;A.layers.enable(1),A.viewport=new gt;const b=new kn;b.layers.enable(2),b.viewport=new gt;const O=[A,b],_=new eA;_.layers.enable(1),_.layers.enable(2);let E=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=v[X];return te===void 0&&(te=new Su,v[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=v[X];return te===void 0&&(te=new Su,v[X]=te),te.getGripSpace()},this.getHand=function(X){let te=v[X];return te===void 0&&(te=new Su,v[X]=te),te.getHandSpace()};function z(X){const te=S.indexOf(X.inputSource);if(te===-1)return;const ue=v[te];ue!==void 0&&(ue.update(X.inputSource,X.frame,c||a),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",J);for(let X=0;X<v.length;X++){const te=S[X];te!==null&&(S[X]=null,v[X].disconnect(te))}E=null,G=null,y.reset(),e.setRenderTarget(f),p=null,d=null,u=null,r=null,g=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Cr(p.framebufferWidth,p.framebufferHeight,{format:zn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ue=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?Ds:xs,ue=m.stencil?Ns:Ar);const Ce={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};u=new XRWebGLBinding(r,n),d=u.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Cr(d.textureWidth,d.textureHeight,{format:zn,type:_i,depthTexture:new Iv(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(X){for(let te=0;te<X.removed.length;te++){const ue=X.removed[te],ce=S.indexOf(ue);ce>=0&&(S[ce]=null,v[ce].disconnect(ue))}for(let te=0;te<X.added.length;te++){const ue=X.added[te];let ce=S.indexOf(ue);if(ce===-1){for(let we=0;we<v.length;we++)if(we>=S.length){S.push(ue),ce=we;break}else if(S[we]===null){S[we]=ue,ce=we;break}if(ce===-1)break}const Ce=v[ce];Ce&&Ce.connect(ue)}}const W=new U,Z=new U;function N(X,te,ue){W.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);const ce=W.distanceTo(Z),Ce=te.projectionMatrix.elements,we=ue.projectionMatrix.elements,Be=Ce[14]/(Ce[10]-1),We=Ce[14]/(Ce[10]+1),Oe=(Ce[9]+1)/Ce[5],L=(Ce[9]-1)/Ce[5],Ut=(Ce[8]-1)/Ce[0],He=(we[8]+1)/we[0],Ge=Be*Ut,Re=Be*He,tt=ce/(-Ut+He),be=tt*-Ut;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(be),X.translateZ(tt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ce[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const R=Be+tt,M=We+tt,k=Ge-be,j=Re+(ce-be),K=Oe*We/M*R,V=L*We/M*R;X.projectionMatrix.makePerspective(k,j,K,V,R,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function q(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,ue=X.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(ue=y.depthFar)),_.near=b.near=A.near=te,_.far=b.far=A.far=ue,(E!==_.near||G!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,G=_.far);const ce=X.parent,Ce=_.cameras;q(_,ce);for(let we=0;we<Ce.length;we++)q(Ce[we],ce);Ce.length===2?N(_,A,b):_.projectionMatrix.copy(A.projectionMatrix),Q(X,_,ce)};function Q(X,te,ue){ue===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ad*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let ne=null;function Se(X,te){if(h=te.getViewerPose(c||a),x=te,h!==null){const ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ce=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,ce=!0);for(let we=0;we<ue.length;we++){const Be=ue[we];let We=null;if(p!==null)We=p.getViewport(Be);else{const L=u.getViewSubImage(d,Be);We=L.viewport,we===0&&(e.setRenderTargetTextures(g,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(g))}let Oe=O[we];Oe===void 0&&(Oe=new kn,Oe.layers.enable(we),Oe.viewport=new gt,O[we]=Oe),Oe.matrix.fromArray(Be.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Be.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(We.x,We.y,We.width,We.height),we===0&&(_.matrix.copy(Oe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ce===!0&&_.cameras.push(Oe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const we=u.getDepthInformation(ue[0]);we&&we.isValid&&we.texture&&y.init(e,we,r.renderState)}}for(let ue=0;ue<v.length;ue++){const ce=S[ue],Ce=v[ue];ce!==null&&Ce!==void 0&&Ce.update(ce,te,c||a)}ne&&ne(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),x=null}const ke=new Dv;ke.setAnimationLoop(Se),this.setAnimationLoop=function(X){ne=X},this.dispose=function(){}}}const or=new Qn,aA=new ut;function oA(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,bv(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,g,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===an&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===an&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),v=g.envMap,S=g.envMapRotation;v&&(m.envMap.value=v,or.copy(S),or.x*=-1,or.y*=-1,or.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),m.envMapRotation.value.setFromMatrix4(aA.makeRotationFromEuler(or)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=v*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function c(g,v){let S=r[g.id];S===void 0&&(x(g),S=h(g),r[g.id]=S,g.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(g,P);const C=e.render.frame;s[g.id]!==C&&(d(g),s[g.id]=C)}function h(g){const v=u();g.__bindingPointIndex=v;const S=t.createBuffer(),P=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function u(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],S=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,A=S.length;C<A;C++){const b=Array.isArray(S[C])?S[C]:[S[C]];for(let O=0,_=b.length;O<_;O++){const E=b[O];if(p(E,C,O,P)===!0){const G=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let Y=0;for(let J=0;J<z.length;J++){const W=z[J],Z=y(W);typeof W=="number"||typeof W=="boolean"?(E.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,G+Y,E.__data)):W.isMatrix3?(E.__data[0]=W.elements[0],E.__data[1]=W.elements[1],E.__data[2]=W.elements[2],E.__data[3]=0,E.__data[4]=W.elements[3],E.__data[5]=W.elements[4],E.__data[6]=W.elements[5],E.__data[7]=0,E.__data[8]=W.elements[6],E.__data[9]=W.elements[7],E.__data[10]=W.elements[8],E.__data[11]=0):(W.toArray(E.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,S,P){const C=g.value,A=v+"_"+S;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const b=P[A];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return P[A]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function x(g){const v=g.uniforms;let S=0;const P=16;for(let A=0,b=v.length;A<b;A++){const O=Array.isArray(v[A])?v[A]:[v[A]];for(let _=0,E=O.length;_<E;_++){const G=O[_],z=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,J=z.length;Y<J;Y++){const W=z[Y],Z=y(W),N=S%P,q=N%Z.boundary,Q=N+q;S+=q,Q!==0&&P-Q<Z.storage&&(S+=P-Q),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=Z.storage}}}const C=S%P;return C>0&&(S+=P-C),g.__size=S,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class cA{constructor(e={}){const{canvas:n=KS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=ji,this.toneMappingExposure=1;const v=this;let S=!1,P=0,C=0,A=null,b=-1,O=null;const _=new gt,E=new gt;let G=null;const z=new Xe(0);let Y=0,J=n.width,W=n.height,Z=1,N=null,q=null;const Q=new gt(0,0,J,W),ne=new gt(0,0,J,W);let Se=!1;const ke=new hh;let X=!1,te=!1;const ue=new ut,ce=new ut,Ce=new U,we=new gt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Oe(){return A===null?Z:1}let L=i;function Ut(T,I){return n.getContext(T,I)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sh}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",ge,!1),L===null){const I="webgl2";if(L=Ut(I,T),L===null)throw Ut(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let He,Ge,Re,tt,be,R,M,k,j,K,V,fe,ae,oe,Ie,re,pe,Te,Ae,_e,Ve,Ne,nt,D;function me(){He=new pT(L),He.init(),Ne=new Jw(L,He),Ge=new lT(L,He,e,Ne),Re=new Kw(L),Ge.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),tt=new vT(L),be=new Uw,R=new Qw(L,He,Re,be,Ge,Ne,tt),M=new uT(v),k=new hT(v),j=new TM(L),nt=new aT(L,j),K=new mT(L,j,tt,nt),V=new xT(L,K,j,tt),Ae=new _T(L,Ge,R),re=new cT(be),fe=new Iw(v,M,k,He,Ge,nt,re),ae=new oA(v,be),oe=new Ow,Ie=new Vw(He),Te=new sT(v,M,k,Re,V,d,l),pe=new Yw(v,V,Ge),D=new lA(L,tt,Ge,Re),_e=new oT(L,He,tt),Ve=new gT(L,He,tt),tt.programs=fe.programs,v.capabilities=Ge,v.extensions=He,v.properties=be,v.renderLists=oe,v.shadowMap=pe,v.state=Re,v.info=tt}me();const $=new sA(v,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=He.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=He.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(J,W,!1))},this.getSize=function(T){return T.set(J,W)},this.setSize=function(T,I,B=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,W=I,n.width=Math.floor(T*Z),n.height=Math.floor(I*Z),B===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(J*Z,W*Z).floor()},this.setDrawingBufferSize=function(T,I,B){J=T,W=I,Z=B,n.width=Math.floor(T*B),n.height=Math.floor(I*B),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(_)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,I,B,H){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,I,B,H),Re.viewport(_.copy(Q).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,I,B,H){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,I,B,H),Re.scissor(E.copy(ne).multiplyScalar(Z).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){Re.setScissorTest(Se=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(T=!0,I=!0,B=!0){let H=0;if(T){let F=!1;if(A!==null){const se=A.texture.format;F=se===fh||se===uh||se===ch}if(F){const se=A.texture.type,he=se===_i||se===Ar||se===Ba||se===Ns||se===oh||se===lh,xe=Te.getClearColor(),ye=Te.getClearAlpha(),Pe=xe.r,Le=xe.g,Me=xe.b;he?(p[0]=Pe,p[1]=Le,p[2]=Me,p[3]=ye,L.clearBufferuiv(L.COLOR,0,p)):(x[0]=Pe,x[1]=Le,x[2]=Me,x[3]=ye,L.clearBufferiv(L.COLOR,0,x))}else H|=L.COLOR_BUFFER_BIT}I&&(H|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),oe.dispose(),Ie.dispose(),be.dispose(),M.dispose(),k.dispose(),V.dispose(),nt.dispose(),D.dispose(),fe.dispose(),$.dispose(),$.removeEventListener("sessionstart",yh),$.removeEventListener("sessionend",Sh),tr.stop()};function ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=tt.autoReset,I=pe.enabled,B=pe.autoUpdate,H=pe.needsUpdate,F=pe.type;me(),tt.autoReset=T,pe.enabled=I,pe.autoUpdate=B,pe.needsUpdate=H,pe.type=F}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function je(T){const I=T.target;I.removeEventListener("dispose",je),xt(I)}function xt(T){Kt(T),be.remove(T)}function Kt(T){const I=be.get(T).programs;I!==void 0&&(I.forEach(function(B){fe.releaseProgram(B)}),T.isShaderMaterial&&fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,B,H,F,se){I===null&&(I=Be);const he=F.isMesh&&F.matrixWorld.determinant()<0,xe=Wv(T,I,B,H,F);Re.setMaterial(H,he);let ye=B.index,Pe=1;if(H.wireframe===!0){if(ye=K.getWireframeAttribute(B),ye===void 0)return;Pe=2}const Le=B.drawRange,Me=B.attributes.position;let Qe=Le.start*Pe,st=(Le.start+Le.count)*Pe;se!==null&&(Qe=Math.max(Qe,se.start*Pe),st=Math.min(st,(se.start+se.count)*Pe)),ye!==null?(Qe=Math.max(Qe,0),st=Math.min(st,ye.count)):Me!=null&&(Qe=Math.max(Qe,0),st=Math.min(st,Me.count));const pt=st-Qe;if(pt<0||pt===1/0)return;nt.setup(F,H,xe,B,ye);let on,qe=_e;if(ye!==null&&(on=j.get(ye),qe=Ve,qe.setIndex(on)),F.isMesh)H.wireframe===!0?(Re.setLineWidth(H.wireframeLinewidth*Oe()),qe.setMode(L.LINES)):qe.setMode(L.TRIANGLES);else if(F.isLine){let Ee=H.linewidth;Ee===void 0&&(Ee=1),Re.setLineWidth(Ee*Oe()),F.isLineSegments?qe.setMode(L.LINES):F.isLineLoop?qe.setMode(L.LINE_LOOP):qe.setMode(L.LINE_STRIP)}else F.isPoints?qe.setMode(L.POINTS):F.isSprite&&qe.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)qe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ee=F._multiDrawStarts,Lt=F._multiDrawCounts,Ke=F._multiDrawCount,Pn=ye?j.get(ye).bytesPerElement:1,Lr=be.get(H).currentProgram.getUniforms();for(let ln=0;ln<Ke;ln++)Lr.setValue(L,"_gl_DrawID",ln),qe.render(Ee[ln]/Pn,Lt[ln])}else if(F.isInstancedMesh)qe.renderInstances(Qe,pt,F.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Lt=Math.min(B.instanceCount,Ee);qe.renderInstances(Qe,pt,Lt)}else qe.render(Qe,pt)};function Ye(T,I,B){T.transparent===!0&&T.side===li&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Ka(T,I,B),T.side=qi,T.needsUpdate=!0,Ka(T,I,B),T.side=li):Ka(T,I,B)}this.compile=function(T,I,B=null){B===null&&(B=T),m=Ie.get(B),m.init(I),g.push(m),B.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),T!==B&&T.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const H=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const xe=se[he];Ye(xe,B,F),H.add(xe)}else Ye(se,B,F),H.add(se)}),g.pop(),m=null,H},this.compileAsync=function(T,I,B=null){const H=this.compile(T,I,B);return new Promise(F=>{function se(){if(H.forEach(function(he){be.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){F(T);return}setTimeout(se,10)}He.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Zt=null;function Jn(T){Zt&&Zt(T)}function yh(){tr.stop()}function Sh(){tr.start()}const tr=new Dv;tr.setAnimationLoop(Jn),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(T){Zt=T,$.setAnimationLoop(T),T===null?tr.stop():tr.start()},$.addEventListener("sessionstart",yh),$.addEventListener("sessionend",Sh),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(I),I=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,I,A),m=Ie.get(T,g.length),m.init(I),g.push(m),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ke.setFromProjectionMatrix(ce),te=this.localClippingEnabled,X=re.init(this.clippingPlanes,te),y=oe.get(T,f.length),y.init(),f.push(y),$.enabled===!0&&$.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&hc(se,I,-1/0,v.sortObjects)}hc(T,I,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(N,q),We=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,We&&Te.addToRenderList(y,T),this.info.render.frame++,X===!0&&re.beginShadows();const B=m.state.shadowsArray;pe.render(B,T,I),X===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=y.opaque,F=y.transmissive;if(m.setupLights(),I.isArrayCamera){const se=I.cameras;if(F.length>0)for(let he=0,xe=se.length;he<xe;he++){const ye=se[he];Eh(H,F,T,ye)}We&&Te.render(T);for(let he=0,xe=se.length;he<xe;he++){const ye=se[he];Mh(y,T,ye,ye.viewport)}}else F.length>0&&Eh(H,F,T,I),We&&Te.render(T),Mh(y,T,I);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,I),nt.resetDefaultState(),b=-1,O=null,g.pop(),g.length>0?(m=g[g.length-1],X===!0&&re.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function hc(T,I,B,H){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ke.intersectsSprite(T)){H&&we.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const he=V.update(T),xe=T.material;xe.visible&&y.push(T,he,xe,B,we.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ke.intersectsObject(T))){const he=V.update(T),xe=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),we.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),we.copy(he.boundingSphere.center)),we.applyMatrix4(T.matrixWorld).applyMatrix4(ce)),Array.isArray(xe)){const ye=he.groups;for(let Pe=0,Le=ye.length;Pe<Le;Pe++){const Me=ye[Pe],Qe=xe[Me.materialIndex];Qe&&Qe.visible&&y.push(T,he,Qe,B,we.z,Me)}}else xe.visible&&y.push(T,he,xe,B,we.z,null)}}const se=T.children;for(let he=0,xe=se.length;he<xe;he++)hc(se[he],I,B,H)}function Mh(T,I,B,H){const F=T.opaque,se=T.transmissive,he=T.transparent;m.setupLightsView(B),X===!0&&re.setGlobalState(v.clippingPlanes,B),H&&Re.viewport(_.copy(H)),F.length>0&&qa(F,I,B),se.length>0&&qa(se,I,B),he.length>0&&qa(he,I,B),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Eh(T,I,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Cr(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Xa:_i,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const se=m.state.transmissionRenderTarget[H.id],he=H.viewport||_;se.setSize(he.z,he.w);const xe=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(z),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),We&&Te.render(B);const ye=v.toneMapping;v.toneMapping=ji;const Pe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),X===!0&&re.setGlobalState(v.clippingPlanes,H),qa(T,B,H),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),He.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Me=0,Qe=I.length;Me<Qe;Me++){const st=I[Me],pt=st.object,on=st.geometry,qe=st.material,Ee=st.group;if(qe.side===li&&pt.layers.test(H.layers)){const Lt=qe.side;qe.side=an,qe.needsUpdate=!0,Th(pt,B,H,on,qe,Ee),qe.side=Lt,qe.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}v.setRenderTarget(xe),v.setClearColor(z,Y),Pe!==void 0&&(H.viewport=Pe),v.toneMapping=ye}function qa(T,I,B){const H=I.isScene===!0?I.overrideMaterial:null;for(let F=0,se=T.length;F<se;F++){const he=T[F],xe=he.object,ye=he.geometry,Pe=H===null?he.material:H,Le=he.group;xe.layers.test(B.layers)&&Th(xe,I,B,ye,Pe,Le)}}function Th(T,I,B,H,F,se){T.onBeforeRender(v,I,B,H,F,se),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(v,I,B,H,T,se),F.transparent===!0&&F.side===li&&F.forceSinglePass===!1?(F.side=an,F.needsUpdate=!0,v.renderBufferDirect(B,I,H,F,T,se),F.side=qi,F.needsUpdate=!0,v.renderBufferDirect(B,I,H,F,T,se),F.side=li):v.renderBufferDirect(B,I,H,F,T,se),T.onAfterRender(v,I,B,H,F,se)}function Ka(T,I,B){I.isScene!==!0&&(I=Be);const H=be.get(T),F=m.state.lights,se=m.state.shadowsArray,he=F.state.version,xe=fe.getParameters(T,F.state,se,I,B),ye=fe.getProgramCacheKey(xe);let Pe=H.programs;H.environment=T.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(T.isMeshStandardMaterial?k:M).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",je),Pe=new Map,H.programs=Pe);let Le=Pe.get(ye);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===he)return Ah(T,xe),Le}else xe.uniforms=fe.getUniforms(T),T.onBeforeCompile(xe,v),Le=fe.acquireProgram(xe,ye),Pe.set(ye,Le),H.uniforms=xe.uniforms;const Me=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Me.clippingPlanes=re.uniform),Ah(T,xe),H.needsLights=Xv(T),H.lightsStateVersion=he,H.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMap.value=F.state.directionalShadowMap,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotShadowMap.value=F.state.spotShadowMap,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMap.value=F.state.pointShadowMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function wh(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=ul.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Ah(T,I){const B=be.get(T);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Wv(T,I,B,H,F){I.isScene!==!0&&(I=Be),R.resetTextureUnits();const se=I.fog,he=H.isMeshStandardMaterial?I.environment:null,xe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:er,ye=(H.isMeshStandardMaterial?k:M).get(H.envMap||he),Pe=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Me=!!B.morphAttributes.position,Qe=!!B.morphAttributes.normal,st=!!B.morphAttributes.color;let pt=ji;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=v.toneMapping);const on=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qe=on!==void 0?on.length:0,Ee=be.get(H),Lt=m.state.lights;if(X===!0&&(te===!0||T!==O)){const yn=T===O&&H.id===b;re.setState(H,T,yn)}let Ke=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Lt.state.version||Ee.outputColorSpace!==xe||F.isBatchedMesh&&Ee.batching===!1||!F.isBatchedMesh&&Ee.batching===!0||F.isBatchedMesh&&Ee.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ee.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ee.instancing===!1||!F.isInstancedMesh&&Ee.instancing===!0||F.isSkinnedMesh&&Ee.skinning===!1||!F.isSkinnedMesh&&Ee.skinning===!0||F.isInstancedMesh&&Ee.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ee.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ee.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ee.instancingMorph===!1&&F.morphTexture!==null||Ee.envMap!==ye||H.fog===!0&&Ee.fog!==se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==re.numPlanes||Ee.numIntersection!==re.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==Le||Ee.morphTargets!==Me||Ee.morphNormals!==Qe||Ee.morphColors!==st||Ee.toneMapping!==pt||Ee.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,Ee.__version=H.version);let Pn=Ee.currentProgram;Ke===!0&&(Pn=Ka(H,I,F));let Lr=!1,ln=!1,pc=!1;const vt=Pn.getUniforms(),yi=Ee.uniforms;if(Re.useProgram(Pn.program)&&(Lr=!0,ln=!0,pc=!0),H.id!==b&&(b=H.id,ln=!0),Lr||O!==T){Ge.reverseDepthBuffer?(ue.copy(T.projectionMatrix),QS(ue),JS(ue),vt.setValue(L,"projectionMatrix",ue)):vt.setValue(L,"projectionMatrix",T.projectionMatrix),vt.setValue(L,"viewMatrix",T.matrixWorldInverse);const yn=vt.map.cameraPosition;yn!==void 0&&yn.setValue(L,Ce.setFromMatrixPosition(T.matrixWorld)),Ge.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),O!==T&&(O=T,ln=!0,pc=!0)}if(F.isSkinnedMesh){vt.setOptional(L,F,"bindMatrix"),vt.setOptional(L,F,"bindMatrixInverse");const yn=F.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),vt.setValue(L,"boneTexture",yn.boneTexture,R))}F.isBatchedMesh&&(vt.setOptional(L,F,"batchingTexture"),vt.setValue(L,"batchingTexture",F._matricesTexture,R),vt.setOptional(L,F,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",F._indirectTexture,R),vt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",F._colorsTexture,R));const mc=B.morphAttributes;if((mc.position!==void 0||mc.normal!==void 0||mc.color!==void 0)&&Ae.update(F,B,Pn),(ln||Ee.receiveShadow!==F.receiveShadow)&&(Ee.receiveShadow=F.receiveShadow,vt.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(yi.envMap.value=ye,yi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(yi.envMapIntensity.value=I.environmentIntensity),ln&&(vt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&jv(yi,pc),se&&H.fog===!0&&ae.refreshFogUniforms(yi,se),ae.refreshMaterialUniforms(yi,H,Z,W,m.state.transmissionRenderTarget[T.id]),ul.upload(L,wh(Ee),yi,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ul.upload(L,wh(Ee),yi,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(L,"center",F.center),vt.setValue(L,"modelViewMatrix",F.modelViewMatrix),vt.setValue(L,"normalMatrix",F.normalMatrix),vt.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const yn=H.uniformsGroups;for(let gc=0,$v=yn.length;gc<$v;gc++){const Ch=yn[gc];D.update(Ch,Pn),D.bind(Ch,Pn)}}return Pn}function jv(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Xv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,I,B){be.get(T.texture).__webglTexture=I,be.get(T.depthTexture).__webglTexture=B;const H=be.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const B=be.get(T);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,B=0){A=T,P=I,C=B;let H=!0,F=null,se=!1,he=!1;if(T){const ye=be.get(T);if(ye.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(ye.__hasExternalTextures)R.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Me=T.depthTexture;if(ye.__boundDepthTexture!==Me){if(Me!==null&&be.has(Me)&&(T.width!==Me.image.width||T.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Pe=T.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);const Le=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?F=Le[I][B]:F=Le[I],se=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?F=be.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[B]:F=Le,_.copy(T.viewport),E.copy(T.scissor),G=T.scissorTest}else _.copy(Q).multiplyScalar(Z).floor(),E.copy(ne).multiplyScalar(Z).floor(),G=Se;if(Re.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&Re.drawBuffers(T,F),Re.viewport(_),Re.scissor(E),Re.setScissorTest(G),se){const ye=be.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,B)}else if(he){const ye=be.get(T.texture),Pe=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.__webglTexture,B||0,Pe)}b=-1},this.readRenderTargetPixels=function(T,I,B,H,F,se,he){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){Re.bindFramebuffer(L.FRAMEBUFFER,xe);try{const ye=T.texture,Pe=ye.format,Le=ye.type;if(!Ge.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-H&&B>=0&&B<=T.height-F&&L.readPixels(I,B,H,F,Ne.convert(Pe),Ne.convert(Le),se)}finally{const ye=A!==null?be.get(A).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,I,B,H,F,se,he){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){const ye=T.texture,Pe=ye.format,Le=ye.type;if(!Ge.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-H&&B>=0&&B<=T.height-F){Re.bindFramebuffer(L.FRAMEBUFFER,xe);const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),L.readPixels(I,B,H,F,Ne.convert(Pe),Ne.convert(Le),0);const Qe=A!==null?be.get(A).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,Qe);const st=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ZS(L,st,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(Me),L.deleteSync(st),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,I=null,B=0){T.isTexture!==!0&&(cl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-B),F=Math.floor(T.image.width*H),se=Math.floor(T.image.height*H),he=I!==null?I.x:0,xe=I!==null?I.y:0;R.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,he,xe,F,se),Re.unbindTexture()},this.copyTextureToTexture=function(T,I,B=null,H=null,F=0){T.isTexture!==!0&&(cl("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],I=arguments[2],F=arguments[3]||0,B=null);let se,he,xe,ye,Pe,Le;B!==null?(se=B.max.x-B.min.x,he=B.max.y-B.min.y,xe=B.min.x,ye=B.min.y):(se=T.image.width,he=T.image.height,xe=0,ye=0),H!==null?(Pe=H.x,Le=H.y):(Pe=0,Le=0);const Me=Ne.convert(I.format),Qe=Ne.convert(I.type);R.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),on=L.getParameter(L.UNPACK_SKIP_PIXELS),qe=L.getParameter(L.UNPACK_SKIP_ROWS),Ee=L.getParameter(L.UNPACK_SKIP_IMAGES),Lt=T.isCompressedTexture?T.mipmaps[F]:T.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,ye),T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Pe,Le,se,he,Me,Qe,Lt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Pe,Le,Lt.width,Lt.height,Me,Lt.data):L.texSubImage2D(L.TEXTURE_2D,F,Pe,Le,se,he,Me,Qe,Lt),L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,on),L.pixelStorei(L.UNPACK_SKIP_ROWS,qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee),F===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(T,I,B=null,H=null,F=0){T.isTexture!==!0&&(cl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,T=arguments[2],I=arguments[3],F=arguments[4]||0);let se,he,xe,ye,Pe,Le,Me,Qe,st;const pt=T.isCompressedTexture?T.mipmaps[F]:T.image;B!==null?(se=B.max.x-B.min.x,he=B.max.y-B.min.y,xe=B.max.z-B.min.z,ye=B.min.x,Pe=B.min.y,Le=B.min.z):(se=pt.width,he=pt.height,xe=pt.depth,ye=0,Pe=0,Le=0),H!==null?(Me=H.x,Qe=H.y,st=H.z):(Me=0,Qe=0,st=0);const on=Ne.convert(I.format),qe=Ne.convert(I.type);let Ee;if(I.isData3DTexture)R.setTexture3D(I,0),Ee=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)R.setTexture2DArray(I,0),Ee=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Lt=L.getParameter(L.UNPACK_ROW_LENGTH),Ke=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Pn=L.getParameter(L.UNPACK_SKIP_PIXELS),Lr=L.getParameter(L.UNPACK_SKIP_ROWS),ln=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le),T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Ee,F,Me,Qe,st,se,he,xe,on,qe,pt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,F,Me,Qe,st,se,he,xe,on,pt.data):L.texSubImage3D(Ee,F,Me,Qe,st,se,he,xe,on,qe,pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ln),F===0&&I.generateMipmaps&&L.generateMipmap(Ee),Re.unbindTexture()},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,Re.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===dh?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===cc?"display-p3":"srgb"}}class uA extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class fA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new U;class Gl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=qn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=qn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=qn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=qn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Vn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bv extends br{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $r;const ea=new U,Yr=new U,qr=new U,Kr=new De,ta=new De,zv=new ut,Fo=new U,na=new U,Oo=new U,Fm=new De,Mu=new De,Om=new De;class dA extends bt{constructor(e=new Bv){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new $t;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fA(n,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new Gl(i,3,0,!1)),$r.setAttribute("uv",new Gl(i,2,3,!1))}this.geometry=$r,this.material=e,this.center=new De(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yr.setFromMatrixScale(this.matrixWorld),zv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-qr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ko(Fo.set(-.5,-.5,0),qr,a,Yr,r,s),ko(na.set(.5,-.5,0),qr,a,Yr,r,s),ko(Oo.set(.5,.5,0),qr,a,Yr,r,s),Fm.set(0,0),Mu.set(1,0),Om.set(1,1);let o=e.ray.intersectTriangle(Fo,na,Oo,!1,ea);if(o===null&&(ko(na.set(-.5,.5,0),qr,a,Yr,r,s),Mu.set(0,1),o=e.ray.intersectTriangle(Fo,Oo,na,!1,ea),o===null))return;const l=e.ray.origin.distanceTo(ea);l<e.near||l>e.far||n.push({distance:l,point:ea.clone(),uv:dn.getInterpolation(ea,Fo,na,Oo,Fm,Mu,Om,new De),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ko(t,e,n,i,r,s){Kr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ta.x=s*Kr.x-r*Kr.y,ta.y=r*Kr.x+s*Kr.y):ta.copy(Kr),t.copy(e),t.x+=ta.x,t.y+=ta.y,t.applyMatrix4(zv)}class Vl extends br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new U,jl=new U,km=new ut,ia=new wv,Bo=new uc,Eu=new U,Bm=new U;class ld extends bt{constructor(e=new $t,n=new Vl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Wl.fromBufferAttribute(n,r-1),jl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Wl.distanceTo(jl);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),Bo.radius+=s,e.ray.intersectsSphere(Bo)===!1)return;km.copy(r).invert(),ia.copy(e.ray).applyMatrix4(km);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let y=p,m=x-1;y<m;y+=c){const f=h.getX(y),g=h.getX(y+1),v=zo(this,e,ia,l,f,g);v&&n.push(v)}if(this.isLineLoop){const y=h.getX(x-1),m=h.getX(p),f=zo(this,e,ia,l,y,m);f&&n.push(f)}}else{const p=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let y=p,m=x-1;y<m;y+=c){const f=zo(this,e,ia,l,y,y+1);f&&n.push(f)}if(this.isLineLoop){const y=zo(this,e,ia,l,x-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Wl.fromBufferAttribute(a,r),jl.fromBufferAttribute(a,s),n.distanceSqToSegment(Wl,jl,Eu,Bm)>i)return;Eu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Eu);if(!(l<e.near||l>e.far))return{distance:l,point:Bm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const zm=new U,Hm=new U;class hA extends ld{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)zm.fromBufferAttribute(n,r),Hm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+zm.distanceTo(Hm);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pA extends Xt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gh extends $t{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new U,h=new De;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=n;u++,d+=3){const p=i+u/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=n;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(o,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vh extends $t{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(s.slice(),3)),this.setAttribute("uv",new Tt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const v=new U,S=new U,P=new U;for(let C=0;C<n.length;C+=3)p(n[C+0],v),p(n[C+1],S),p(n[C+2],P),l(v,S,P,g)}function l(g,v,S,P){const C=P+1,A=[];for(let b=0;b<=C;b++){A[b]=[];const O=g.clone().lerp(S,b/C),_=v.clone().lerp(S,b/C),E=C-b;for(let G=0;G<=E;G++)G===0&&b===C?A[b][G]=O:A[b][G]=O.clone().lerp(_,G/E)}for(let b=0;b<C;b++)for(let O=0;O<2*(C-b)-1;O++){const _=Math.floor(O/2);O%2===0?(d(A[b][_+1]),d(A[b+1][_]),d(A[b][_])):(d(A[b][_+1]),d(A[b+1][_+1]),d(A[b+1][_]))}}function c(g){const v=new U;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(g),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function h(){const g=new U;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const S=m(g)/2/Math.PI+.5,P=f(g)/Math.PI+.5;a.push(S,1-P)}x(),u()}function u(){for(let g=0;g<a.length;g+=6){const v=a[g+0],S=a[g+2],P=a[g+4],C=Math.max(v,S,P),A=Math.min(v,S,P);C>.9&&A<.1&&(v<.2&&(a[g+0]+=1),S<.2&&(a[g+2]+=1),P<.2&&(a[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function p(g,v){const S=g*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function x(){const g=new U,v=new U,S=new U,P=new U,C=new De,A=new De,b=new De;for(let O=0,_=0;O<s.length;O+=9,_+=6){g.set(s[O+0],s[O+1],s[O+2]),v.set(s[O+3],s[O+4],s[O+5]),S.set(s[O+6],s[O+7],s[O+8]),C.set(a[_+0],a[_+1]),A.set(a[_+2],a[_+3]),b.set(a[_+4],a[_+5]),P.copy(g).add(v).add(S).divideScalar(3);const E=m(P);y(C,_+0,g,E),y(A,_+2,v,E),y(b,_+4,S,E)}}function y(g,v,S,P){P<0&&g.x===1&&(a[v]=g.x-1),S.x===0&&S.z===0&&(a[v]=P/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.vertices,e.indices,e.radius,e.details)}}const Ho=new U,Go=new U,Tu=new U,Vo=new dn;class mA extends $t{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(ll*n),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let x=0;x<l;x+=3){a?(c[0]=a.getX(x),c[1]=a.getX(x+1),c[2]=a.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:y,b:m,c:f}=Vo;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Vo.getNormal(Tu),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let g=0;g<3;g++){const v=(g+1)%3,S=u[g],P=u[v],C=Vo[h[g]],A=Vo[h[v]],b=`${S}_${P}`,O=`${P}_${S}`;O in d&&d[O]?(Tu.dot(d[O].normal)<=s&&(p.push(C.x,C.y,C.z),p.push(A.x,A.y,A.z)),d[O]=null):b in d||(d[b]={index0:c[g],index1:c[v],normal:Tu.clone()})}}for(const x in d)if(d[x]){const{index0:y,index1:m}=d[x];Ho.fromBufferAttribute(o,y),Go.fromBufferAttribute(o,m),p.push(Ho.x,Ho.y,Ho.z),p.push(Go.x,Go.y,Go.z)}this.setAttribute("position",new Tt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class _h extends vh{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new _h(e.radius,e.detail)}}class xh extends $t{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new U,d=new U,p=[],x=[],y=[],m=[];for(let f=0;f<=i;f++){const g=[],v=f/i;let S=0;f===0&&a===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const C=P/n;u.x=-e*Math.cos(r+C*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(r+C*s)*Math.sin(a+v*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(C+S,1-v),g.push(c++)}h.push(g)}for(let f=0;f<i;f++)for(let g=0;g<n;g++){const v=h[f][g+1],S=h[f][g],P=h[f+1][g],C=h[f+1][g+1];(f!==0||a>0)&&p.push(v,S,C),(f!==i-1||l<Math.PI)&&p.push(S,P,C)}this.setIndex(p),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wu extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yv,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gA extends Vl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Hv extends bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Au=new ut,Gm=new U,Vm=new U;class vA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hh,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gm),Vm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vm),n.updateMatrixWorld(),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _A extends vA{constructor(){super(new ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xA extends Hv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new _A}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yA extends Hv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class SA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Wm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Wm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);const Ss=[{id:"sop-search",index:"01",kicker:"知識檢索",name:"SOP 檢索網站",layout:"lead",problem:"同一份出貨流程，資深同事記在腦子裡，新人得翻三個資料夾才找得到。問人最快，但問的人越多，被打斷的人也越多。",approach:"把散在各處的 SOP 收斂成一個可搜尋的網站，用關鍵字直接命中步驟，圖文並排，不用再一頁一頁翻。",metrics:[{label:"查找時間",value:null,unit:"分鐘"},{label:"收錄 SOP",value:null,unit:"份"},{label:"每週被詢問次數",value:null,unit:"次"}],status:"已上線"},{id:"coupang-oms",index:"02",kicker:"訂單處理",name:"酷澎訂單管理系統",layout:"offset",problem:"訂單從後台下載、整理、對帳到出貨，中間隔了好幾個 Excel 檔，每一次複製貼上都是一次出錯的機會。",approach:"把整條訂單流程收進同一個系統：抓單、比對、產出貨資料一次到位，各環節的狀態直接看得到。",metrics:[{label:"單筆處理時間",value:null,unit:"分鐘"},{label:"人工轉檔次數",value:null,unit:"次"},{label:"測試覆蓋",value:"164",unit:"項通過"}],status:"開發中"}];function MA(t,e,n){const s=document.createElement("canvas");s.width=512,s.height=176;const a=s.getContext("2d"),o=18,l=14;a.fillStyle="rgba(10, 10, 11, 0.82)",a.strokeStyle=n?"#d10f27":"rgba(245, 242, 238, 0.35)",a.lineWidth=3;const c=512-o*2,h=176-o*2,u=o,d=o;a.beginPath(),a.moveTo(u+l,d),a.arcTo(u+c,d,u+c,d+h,l),a.arcTo(u+c,d+h,u,d+h,l),a.arcTo(u,d+h,u,d,l),a.arcTo(u,d,u+c,d,l),a.closePath(),a.fill(),a.stroke(),a.fillStyle=n?"#d10f27":"#f5f2ee",a.font='700 40px "Noto Sans TC", sans-serif',a.textBaseline="top",a.fillText(t,u+24,d+22),a.fillStyle="rgba(245, 242, 238, 0.62)",a.font='400 26px "Noto Sans TC", sans-serif',a.fillText(e,u+24,d+78);const p=new pA(s);p.colorSpace=Fn;const x=new Bv({map:p,transparent:!0,depthWrite:!1}),y=new dA(x);return y.scale.set(4.2,4.2*176/512,1),y}function EA(){const t=it.useRef(null);return it.useEffect(()=>{const e=t.current;if(!e)return;const n=new uA,i=e.clientWidth/e.clientHeight,r=9,s=new ph(-r*i,r*i,r,-r,.1,100);s.position.set(14,12,14),s.lookAt(0,.5,0);const a=new cA({alpha:!0,antialias:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(e.clientWidth,e.clientHeight),e.appendChild(a.domElement);const o=new fa;n.add(o),n.add(new yA(16777215,.5));const l=new xA(16777215,.7);l.position.set(8,14,6),n.add(l);const c=8+Math.max(Ss.length,1)*2.6,h=new Bs(c,.3,c),u=new wu({color:1118483,roughness:.9}),d=new pn(h,u);d.position.y=-1.6,o.add(d);const p=new hA(new mA(h),new Vl({color:3355443,transparent:!0,opacity:.5}));d.add(p);const x=Math.max(Ss.length,1),y=new wu({color:2236966,roughness:.75}),m=new wu({color:13700903,emissive:13700903,emissiveIntensity:.5,roughness:.35}),f=[],g=new gA({color:13700903,dashSize:.35,gapSize:.25,transparent:!0,opacity:.55});Ss.forEach((O,_)=>{const E=x===1?0:_/(x-1),G=-5+E*10,z=-4+E*8,Y=-.2+E*3.4,J=O.status==="已上線",W=new _h(.55,0),Z=new pn(W,J?m:y);Z.position.set(G,Y,z),o.add(Z);const N=new $t().setFromPoints([new U(G,Y,z),new U(G,-1.45,z)]),q=new ld(N,new Vl({color:5592405,transparent:!0,opacity:.6}));o.add(q);const Q=new gh(.14,20),ne=new pn(Q,new Hl({color:J?13700903:8947848}));ne.rotation.x=-Math.PI/2,ne.position.set(G,-1.44,z),o.add(ne);const Se=MA(`${O.index} ${O.name}`,O.kicker,J);Se.position.set(G,Y+1.15,z),o.add(Se),f.push({mesh:Z,x:G,y:Y,z,phase:_*1.7})});const v=[];for(let O=0;O<f.length-1;O++){const _=f[O],E=f[O+1],G=new $t().setFromPoints([new U(_.x,_.y,_.z),new U(E.x,E.y,E.z)]),z=new ld(G,g);z.computeLineDistances(),o.add(z);const Y=new xh(.08,12,12),J=new Hl({color:16734824}),W=new pn(Y,J);o.add(W),v.push({dot:W,a:_,b:E,offset:O*.4})}let S,P=0;const C=new SA;function A(){S=requestAnimationFrame(A),P+=C.getDelta(),o.rotation.y=Math.sin(P*.12)*.12,f.forEach(O=>{O.mesh.position.y=O.y+Math.sin(P*1.1+O.phase)*.18,O.mesh.rotation.y+=.006}),v.forEach(O=>{const _=(P*.35+O.offset)%1;O.dot.position.lerpVectors(new U(O.a.x,O.a.y,O.a.z),new U(O.b.x,O.b.y,O.b.z),_)}),a.render(n,s)}A();function b(){const O=e.clientWidth,_=e.clientHeight,E=O/_;s.left=-r*E,s.right=r*E,s.updateProjectionMatrix(),a.setSize(O,_)}return window.addEventListener("resize",b),()=>{cancelAnimationFrame(S),window.removeEventListener("resize",b),a.dispose(),e.removeChild(a.domElement)}},[]),w.jsx("div",{className:"roadmap-canvas",ref:t})}function TA({active:t}){return w.jsxs("section",{className:"roadmap",children:[w.jsxs("div",{className:"roadmap-rail",children:[w.jsx("span",{className:"rail-label",children:"全貌"}),w.jsxs("h2",{className:"thesis-heading roadmap-heading",children:["從觀察到落地的",Ss.length,"個切入點"]})]}),w.jsx("div",{className:"roadmap-stage",children:t&&w.jsx(EA,{})})]})}const jm=["平台建立PO","檢視PO類型","修改退貨資訊","新PO匯入處理系統","通知同仁分線別拉取","PO彙總統合","依回覆於時效內更改PO狀態及內容"],wA=new Set(["平台建立PO","新PO匯入處理系統","PO彙總統合"]);function AA({active:t}){const e=n=>t?{animationDelay:`${.5+n*.3}s`}:{opacity:1,animation:"none"};return w.jsxs("section",{className:"roadmap-detail slide-content",children:[w.jsx("div",{className:"rail",children:w.jsx("span",{className:"rail-label",children:"全貌"})}),w.jsxs("div",{className:"roadmap-lead",children:[w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{text:"關鍵步驟缺乏系統支撐",active:t})}),w.jsx("p",{className:"prose reveal-line",style:e(0),children:"營運人員和我反應「PO 彙總統合」這步，全靠在共用 Excel 上反覆手動抄寫、層層疊加紀錄。"}),w.jsx("p",{className:"prose reveal-line",style:e(1),children:"要先去酷澎後台抓單，再到我們公司系統批次匯入，最後才回到公槽的 PO 總表 Excel 把新單抄進去——這中間繞了三手。"}),w.jsx("p",{className:"flow-chain reveal-line",style:e(2),children:jm.map((n,i)=>w.jsxs("span",{children:[w.jsx("span",{className:wA.has(n)?"flow-step flow-step--key":"flow-step",children:n}),i<jm.length-1&&w.jsx("span",{className:"flow-arrow",children:" → "})]},n))}),w.jsx("p",{className:"prose prose--accent reveal-line",style:e(3),children:"對應 SOP 網站上，酷澎 PO 單確認作業流程（SOP-CP-CP-001）這份文件，步驟寫的是打開公槽那個 PO 總表 Excel，把新單抄進去，確實驗證了營運端所反應的情況。"})]}),w.jsxs("div",{className:"roadmap-evidence reveal-line",style:e(4),children:[w.jsxs("figure",{className:"compare-panel",children:[w.jsx("img",{src:"po-sop.png",alt:"酷澎 PO 單確認作業流程，SOP-CP-CP-001 的目的與流程總覽"}),w.jsx("figcaption",{children:"SOP-CP-CP-001，目的與流程總覽"})]}),w.jsxs("figure",{className:"compare-panel",children:[w.jsx("img",{src:"shot-165832.png",alt:"步驟二的細節，路徑指向公槽裡的 PO 總表"}),w.jsx("figcaption",{children:"步驟二的細節，路徑指向公槽裡的 PO 總表"})]})]})]})}const CA=[{index:"01",text:"從酷澎後台拉單、匯出到我們公司後台，抄過的單要再抄一次，還是不確定有沒有漏"},{index:"02",text:"酷澎偷偷改了數量或交期，得靠肉眼比對才發現，常常倉庫都出貨了才知道"},{index:"03",text:"驗收時兩邊數字對不起來"}];function RA({active:t}){const e=n=>t?{animationDelay:`${.5+n*.3}s`}:{opacity:1,animation:"none"};return w.jsxs("section",{className:"roadmap-detail slide-content",children:[w.jsx("div",{className:"rail",children:w.jsx("span",{className:"rail-label",children:"全貌"})}),w.jsx("div",{className:"sop-head",children:w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{text:"缺乏追蹤與防呆機制",active:t})})}),w.jsx("div",{className:"findings findings--stacked",children:CA.map((n,i)=>w.jsxs("article",{className:"finding reveal-line",style:t?{animationDelay:`${.55+i*.3}s`}:{opacity:1,animation:"none"},children:[w.jsx("span",{className:"finding-index",children:n.index}),w.jsx("h3",{children:n.text})]},n.index))}),w.jsx("p",{className:"prose prose--accent roadmap-detail-lede reveal-line",style:e(3),children:"這三件事背後其實是同一個原因，流程本身沒有留下可以追的軌跡。"}),w.jsxs("figure",{className:"compare-panel roadmap-evidence-below reveal-line",style:e(4),children:[w.jsx("img",{src:"shot-165840.png",alt:"公槽裡的 PO 總表，實際長這樣"}),w.jsx("figcaption",{children:"公槽裡的 PO 總表，實際長這樣"})]})]})}function PA({active:t}){const e=n=>t?{animationDelay:`${.5+n*.45}s`}:{opacity:1,animation:"none"};return w.jsxs("section",{className:"roadmap-detail slide-content",children:[w.jsx("div",{className:"rail",children:w.jsx("span",{className:"rail-label",children:"全貌"})}),w.jsx("div",{className:"sop-head sop-head--narrow",children:w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{text:"所以，決定做系統",active:t})})}),w.jsxs("div",{className:"verdict",children:[w.jsxs("p",{className:"verdict-line reveal-line",style:e(0),children:["SOP 已經把該做什麼寫得很清楚了，",w.jsx("br",{}),"缺的不是規範，是",w.jsx("b",{children:"維持這條流程的東西"}),"。"]}),w.jsxs("p",{className:"verdict-line verdict-line--sub reveal-line",style:e(1),children:["目前完全仰賴同仁的細心與記憶來維持，但人工難免有極限。",w.jsx("br",{}),"因此我決定，把流程中改單難抓、手動覆蓋的高風險環節，交由",w.jsx("em",{children:"系統"}),"自動化處理。"]}),w.jsx("p",{className:"prose prose--accent verdict-tagline reveal-line",style:e(2),children:"SOP 繼續負責定義規則，系統負責確保規則真的被執行、而且留得下紀錄。"})]})]})}function bA({items:t}){return w.jsx("dl",{className:"metrics",children:t.map(e=>w.jsxs("div",{children:[w.jsx("dt",{children:e.label}),w.jsxs("dd",{children:[e.value===null?w.jsx("span",{className:"pending",title:"待補實際數字",children:"—"}):e.value,w.jsx("span",{className:"unit",children:e.unit})]})]},e.label))})}function LA({tool:t}){return w.jsxs("section",{className:`tool tool--${t.layout} slide-content`,children:[w.jsxs("div",{className:"rail",children:[w.jsx("span",{className:"rail-index",children:t.index}),w.jsx("span",{className:"rail-label",children:t.kicker})]}),w.jsxs("header",{className:"tool-head",children:[w.jsx("h2",{children:t.name}),w.jsx("span",{className:`status status--${t.status==="已上線"?"live":"wip"}`,children:t.status})]}),w.jsxs("div",{className:"tool-problem",children:[w.jsx("span",{className:"tag",children:"卡住的地方"}),w.jsx("p",{children:t.problem})]}),w.jsxs("div",{className:"tool-approach",children:[w.jsx("span",{className:"tag",children:"怎麼解"}),w.jsx("p",{children:t.approach})]}),w.jsx("figure",{className:"tool-figure",children:w.jsx(ih,{variant:t.layout==="lead"?"scatter":"converge"})}),w.jsx("div",{className:"tool-metrics",children:w.jsx(bA,{items:t.metrics})})]})}const ra=Ss.find(t=>t.id==="sop-search"),Xm=.45,NA=3;function DA({active:t}){const e=it.useRef(null),[n,i]=it.useState(!1);it.useEffect(()=>{const s=e.current;if(!s)return;const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!t){s.pause();return}const o=()=>{try{s.currentTime=a?NA:Xm}catch{}a||s.play().catch(()=>{})};return s.readyState>=1?o():s.addEventListener("loadedmetadata",o,{once:!0}),()=>s.removeEventListener("loadedmetadata",o)},[t]);const r=()=>{const s=e.current;s&&(s.currentTime=Xm,s.play().catch(()=>{}))};return w.jsxs("section",{className:"sop sop-title slide-content",children:[w.jsxs("div",{className:"rail",children:[w.jsx("span",{className:"rail-index",children:ra.index}),w.jsx("span",{className:"rail-label",children:ra.kicker})]}),w.jsxs("div",{className:"sop-title-body",children:[w.jsxs("header",{className:"tool-head",children:[w.jsx("h2",{children:ra.name}),w.jsx("span",{className:`status status--${ra.status==="已上線"?"live":"wip"}`,children:ra.status})]}),w.jsx("p",{className:"prose sop-title-lede",children:"把散落在各處的作業流程，收成一個查得到、比得出、改得動的入口。"})]}),w.jsx("figure",{className:`sop-title-figure${t?" is-active":""}`,children:w.jsx("video",{ref:e,className:`sop-title-video${n?" is-ready":""}`,src:"sop-loop.webm",muted:!0,playsInline:!0,preload:"auto",onSeeked:()=>i(!0),onEnded:r,"aria-label":"SOP 檢索網站介面展示"})})]})}const IA=[{index:"01",title:"營運流程難以標準化",lines:["每個人負責的線別、品牌與累積下來的做事方式都不一樣，久了，每條線的運作就變成那個人的個人經驗。","平常各自跑沒問題，一遇到請假代理或跨線輪調，落差就浮出來。"]},{index:"02",title:"新進同仁不易上手",lines:["新進同仁缺乏直覺指引，往往只能即時詢問資深夥伴。","然而被中斷的，多半是具有高度時效性（轉單、拋單）的核心作業，造成雙向的時間耗損。"]},{index:"03",title:"文件複雜且分散，效益較難達到預期",lines:["過去同仁曾用心將流程整理成文件存放，但因格式與內容相對分散，遇到緊急狀況時往往較難第一時間查閱。","即便文件庫已建立，實務上大家仍多依賴口頭溝通，導致整理效益尚未能完全發揮。"]}];function UA({active:t}){return w.jsxs("section",{className:"sop sop-pain slide-content",children:[w.jsxs("div",{className:"rail",children:[w.jsx("span",{className:"rail-index",children:"01"}),w.jsx("span",{className:"rail-label",children:"SOP檢索網站"})]}),w.jsx("div",{className:"sop-head",children:w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{text:"痛點：流程複雜造成的視覺負擔",active:t})})}),w.jsx("div",{className:"findings",children:IA.map((e,n)=>w.jsxs("article",{className:"finding reveal-line",style:t?{animationDelay:`${.55+n*.35}s`}:{opacity:1,animation:"none"},children:[w.jsx("span",{className:"finding-index",children:e.index}),w.jsx("h3",{children:e.title}),e.lines.map(i=>w.jsx("p",{children:i},i))]},e.index))})]})}const FA=[{src:"sop-docs-1.png",top:"6%",left:"46%",width:"42%",rotate:4},{src:"sop-docs-2.png",top:"32%",left:"0%",width:"44%",rotate:-5},{src:"sop-docs-3.png",top:"37%",left:"44%",width:"44%",rotate:3},{src:"sop-docs-4.png",top:"47%",left:"20%",width:"40%",rotate:2},{src:"sop-docs-5.png",top:"65%",left:"0%",width:"42%",rotate:5},{src:"sop-docs-6.png",top:"63%",left:"44%",width:"42%",rotate:-4}];function OA({active:t}){const e=n=>t?{animationDelay:`${.5+n*.45}s`}:{opacity:1,animation:"none"};return w.jsxs("section",{className:"sop sop-judgement slide-content",children:[w.jsxs("div",{className:"rail",children:[w.jsx("span",{className:"rail-index",children:"01"}),w.jsx("span",{className:"rail-label",children:"SOP檢索網站"})]}),w.jsx("div",{className:"sop-head sop-head--narrow",children:w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{text:"我個人的想法是",active:t})})}),w.jsxs("div",{className:"verdict",children:[w.jsxs("p",{className:"verdict-line reveal-line",style:e(0),children:["現有資料其實夠多了，",w.jsx("br",{}),"重點在於",w.jsx("b",{children:"能不能真的發揮作用"}),"。"]}),w.jsxs("p",{className:"verdict-line verdict-line--sub reveal-line",style:e(1),children:["如果能有一個方便",w.jsx("em",{children:"查找"}),"、",w.jsx("em",{children:"比對"}),"和",w.jsx("em",{children:"修改"}),"的",w.jsx("br",{}),"統整入口，大家處理起來會順手很多。"]})]}),w.jsxs("figure",{className:`doc-pile${t?" is-active":""}`,children:[w.jsx("img",{src:"sop-docs-folder.png",alt:"部門作業流程資料夾，依品牌與通路分成六類",className:"doc-pile-folder",style:{"--pile-delay":"1.3s"}}),FA.map((n,i)=>w.jsx("img",{src:n.src,alt:"",className:"doc-pile-sheet",style:{top:n.top,left:n.left,width:n.width,"--rotate":`${n.rotate}deg`,"--pile-delay":`${1.55+i*.09}s`}},n.src))]})]})}const kA=[{tag:"查找",lines:["完整收錄現有的 46 份 SOP 與 500 多張操作截圖，支援關鍵字（如：退貨、補貨、嘜頭、EIP）直接定位到具體步驟。"]},{tag:"篩選",lines:["同時可依品牌、通路、出貨與物流型態交叉篩選，例如快速調出所有「竹運」相關的 SOP，大幅縮短翻找時間。"]}];function BA({active:t}){const e=it.useRef(null);return it.useEffect(()=>{const n=e.current;n&&(t?(n.currentTime=0,n.play().catch(()=>{})):n.pause())},[t]),w.jsxs("section",{className:"sop sop-collect slide-content",children:[w.jsxs("div",{className:"rail",children:[w.jsx("span",{className:"rail-index",children:"01"}),w.jsx("span",{className:"rail-label",children:"SOP檢索網站"})]}),w.jsxs("div",{className:"sop-collect-body",children:[w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{text:"精準檢索，多維篩選",active:t})}),w.jsx("div",{className:"sop-blocks",children:kA.map((n,i)=>w.jsxs("div",{className:"sop-block reveal-line",style:t?{animationDelay:`${.55+i*.4}s`}:{opacity:1,animation:"none"},children:[w.jsx("span",{className:"tag",children:n.tag}),n.lines.map(r=>w.jsx("p",{children:r},r))]},n.tag))})]}),w.jsx("figure",{className:`sop-collect-figure${t?" is-active":""}`,children:w.jsx("video",{ref:e,className:"sop-collect-video",src:"sop-collect-demo.webm",muted:!0,loop:!0,playsInline:!0,preload:"auto","aria-label":"多維篩選操作示範"})})]})}const zA=[{tag:"一般出貨",panels:[{src:"general-main.png",caption:"主線圖：27 份通路出貨 SOP 共用的 8 個步驟"},{src:"general-compare.png",caption:"比對圖：哪個通路多了或少了哪一步，一眼看出來"}]},{tag:"酷澎出貨",panels:[{src:"coupang-main.png",caption:"主線圖：酷澎訂單獨有的 PO 生命週期"},{src:"coupang-stage.png",caption:"階段圖：單一階段的細節與延伸文件"}]}];function HA({active:t}){const e=n=>t?{animationDelay:`${.5+n*.3}s`}:{opacity:1,animation:"none"};return w.jsxs("section",{className:"sop sop-compare slide-content",children:[w.jsxs("div",{className:"rail",children:[w.jsx("span",{className:"rail-index",children:"01"}),w.jsx("span",{className:"rail-label",children:"SOP檢索網站"})]}),w.jsx("div",{className:"sop-head",children:w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{text:"視覺化跨線對比，釐清核心邏輯",active:t})})}),w.jsxs("div",{className:"sop-compare-body",children:[w.jsx("p",{className:"prose reveal-line",style:e(0),children:"比對 27 份出貨 SOP，把各通路和品牌的做法收斂成「一般出貨」與「酷澎出貨」兩大主幹，先建立共同基準。"}),w.jsx("p",{className:"prose reveal-line",style:e(1),children:"用視覺化把大家負責的線別攤開對照，呈現哪個通路多了特殊步驟、哪份漏了某個環節，目標概念是像一張流程體檢表，能更精準抓出可以優化的地方。"}),w.jsx("p",{className:"prose prose--accent reveal-line",style:e(2),children:"（先以手邊現有資料做第一輪對照，部分細節若有出入，會再找負責的同仁核對調整。）"})]}),w.jsx("div",{className:"compare-gallery",children:zA.map((n,i)=>w.jsxs("div",{className:"compare-row reveal-line",style:e(3+i),children:[w.jsx("span",{className:"tag",children:n.tag}),w.jsx("div",{className:"compare-imgs",children:n.panels.map(r=>w.jsxs("figure",{className:"compare-panel",children:[w.jsx("img",{src:r.src,alt:r.caption}),w.jsx("figcaption",{children:r.caption})]},r.src))})]},n.tag))})]})}const GA=["資料庫內容存放於 Google 試算表，網站重新整理就同步，不需要碰程式。","網站本身有編輯模式，輸入編輯碼就能新增或修改；沒有編輯碼的人只能唯讀，不會誤改。"],Wo=[{src:"sheet-db.png",caption:"資料庫：內容其實就是一張 Google 試算表"},{src:"edit-sop.png",caption:"編輯 SOP：修改既有文件的欄位"},{src:"add-sop.png",caption:"新增 SOP：從空白表單建立一份新文件"}];function VA({active:t}){const e=n=>t?{animationDelay:`${.5+n*.3}s`}:{opacity:1,animation:"none"};return w.jsxs("section",{className:"sop sop-maintain slide-content",children:[w.jsxs("div",{className:"rail",children:[w.jsx("span",{className:"rail-index",children:"01"}),w.jsx("span",{className:"rail-label",children:"SOP檢索網站"})]}),w.jsxs("div",{className:"sop-maintain-body",children:[w.jsx("h2",{className:"thesis-heading",children:w.jsx(xn,{text:"前端操作，網站可編輯",active:t})}),GA.map((n,i)=>w.jsx("p",{className:"prose reveal-line",style:e(i),children:n},n))]}),w.jsxs("div",{className:"maintain-gallery",children:[w.jsx("div",{className:"maintain-row maintain-row--full reveal-line",style:e(2),children:w.jsxs("figure",{className:"maintain-panel",children:[w.jsx("img",{src:Wo[0].src,alt:Wo[0].caption}),w.jsx("figcaption",{children:Wo[0].caption})]})}),w.jsx("div",{className:"maintain-row maintain-row--pair reveal-line",style:e(3),children:Wo.slice(1).map(n=>w.jsxs("figure",{className:"maintain-panel",children:[w.jsx("img",{src:n.src,alt:n.caption}),w.jsx("figcaption",{children:n.caption})]},n.src))})]})]})}const WA=Ss.find(t=>t.id==="coupang-oms");function jA({active:t}){return w.jsxs("section",{className:"hero",children:[w.jsx("div",{className:"hero-sphere",children:t&&w.jsx(Wy,{})}),w.jsx("svg",{className:"hero-house",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:w.jsx("path",{d:"M50,3 L95,34 L95,97 L5,97 L5,34 Z"})}),w.jsx("div",{className:"hero-scrim"}),w.jsxs("div",{className:"brand-mark",children:[w.jsx("img",{src:"logo.png",alt:"永豐商店"}),w.jsx("span",{children:"YFS"})]}),w.jsxs("div",{className:"hero-content",children:[w.jsx("p",{className:"eyebrow",children:"儲備幹部試用期報告"}),w.jsx("h1",{children:"AI 流程再造"}),w.jsx("h2",{children:"永豐商店 SOP 優化與實務落地"}),w.jsx("div",{className:"divider"}),w.jsx("div",{className:"meta",children:w.jsxs("span",{children:[w.jsx("b",{children:"Jerry Tsai"})," 蔡政穎"]})})]})]})}const Gv=6,Vv=4,da=[{id:"hero",steps:1},{id:"thesis",steps:2},{id:"ai-importance",steps:3},{id:"sop-search",steps:Gv},{id:"roadmap",steps:Vv},{id:"coupang-oms",steps:1}],Zr=da.length,Ri=3,sa=4;function Qr({stepCount:t,localStep:e,children:n}){return w.jsx("div",{className:"chapter",children:w.jsx("div",{className:"chapter-track",style:{height:`${t*100}vh`,transform:`translateY(-${e*(100/t)}%)`},children:n})})}function XA(){const[t,e]=it.useState({chapter:0,step:0}),[n,i]=it.useState({"0.0":1});it.useEffect(()=>{const h=`${t.chapter}.${t.step}`;i(u=>({...u,[h]:(u[h]||0)+1}))},[t.chapter,t.step]);const r=it.useCallback(h=>{e(u=>{const d=Math.min(Math.max(u.chapter+h,0),Zr-1);return d===u.chapter?u:{chapter:d,step:0}})},[]),s=it.useCallback(h=>{e(u=>{const d=da[u.chapter].steps,p=u.step+h;return p<0||p>=d?u:{...u,step:p}})},[]),a=it.useCallback(h=>{e(u=>{const d=da[u.chapter].steps;if(h>0)return u.step<d-1?{...u,step:u.step+1}:u.chapter<Zr-1?{chapter:u.chapter+1,step:0}:u;if(u.step>0)return{...u,step:u.step-1};if(u.chapter>0){const p=da[u.chapter-1].steps;return{chapter:u.chapter-1,step:p-1}}return u})},[]);it.useEffect(()=>{function h(u){u.key==="ArrowRight"?(u.preventDefault(),r(1)):u.key==="ArrowLeft"?(u.preventDefault(),r(-1)):u.key==="ArrowDown"?(u.preventDefault(),s(1)):u.key==="ArrowUp"?(u.preventDefault(),s(-1)):u.key===" "||u.key==="PageDown"?(u.preventDefault(),a(1)):u.key==="PageUp"&&(u.preventDefault(),a(-1))}return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[r,s,a]);const o=it.useRef(!1);it.useEffect(()=>{function h(u){Math.abs(u.deltaY)<12||(u.preventDefault(),!o.current&&(o.current=!0,s(u.deltaY>0?1:-1),setTimeout(()=>{o.current=!1},700)))}return window.addEventListener("wheel",h,{passive:!1}),()=>window.removeEventListener("wheel",h)},[s]);const l=da[t.chapter].steps,c=(h,u)=>n[`${h}.${u}`]||0;return w.jsxs("div",{className:"deck",children:[w.jsxs("div",{className:"deck-track",style:{width:`${Zr*100}vw`,transform:`translateX(-${t.chapter*(100/Zr)}%)`},children:[w.jsx(Qr,{stepCount:1,localStep:0,children:w.jsx("div",{className:"step",children:w.jsx(jA,{active:t.chapter===0})})}),w.jsxs(Qr,{stepCount:2,localStep:t.chapter===1?t.step:0,children:[w.jsx("div",{className:"step",children:w.jsx(Xy,{active:t.chapter===1&&t.step===0},c(1,0))}),w.jsx("div",{className:"step",children:w.jsx(Yy,{active:t.chapter===1&&t.step===1},c(1,1))})]}),w.jsxs(Qr,{stepCount:3,localStep:t.chapter===2?t.step:0,children:[w.jsx("div",{className:"step",children:w.jsx(Ky,{active:t.chapter===2&&t.step===0},c(2,0))}),w.jsx("div",{className:"step",children:w.jsx(aS,{active:t.chapter===2&&t.step===1},c(2,1))}),w.jsx("div",{className:"step",children:w.jsx(oS,{active:t.chapter===2&&t.step===2},c(2,2))})]}),(()=>{const h=t.chapter===Ri?t.step:0,u=d=>t.chapter===Ri&&t.step===d;return w.jsxs(Qr,{stepCount:Gv,localStep:h,children:[w.jsx("div",{className:"step",children:w.jsx(DA,{active:u(0)},c(Ri,0))}),w.jsx("div",{className:"step",children:w.jsx(UA,{active:u(1)},c(Ri,1))}),w.jsx("div",{className:"step",children:w.jsx(OA,{active:u(2)},c(Ri,2))}),w.jsx("div",{className:"step",children:w.jsx(BA,{active:u(3)},c(Ri,3))}),w.jsx("div",{className:"step",children:w.jsx(HA,{active:u(4)},c(Ri,4))}),w.jsx("div",{className:"step",children:w.jsx(VA,{active:u(5)},c(Ri,5))})]})})(),(()=>{const h=t.chapter===sa?t.step:0,u=d=>t.chapter===sa&&t.step===d;return w.jsxs(Qr,{stepCount:Vv,localStep:h,children:[w.jsx("div",{className:"step",children:w.jsx(TA,{active:u(0)})}),w.jsx("div",{className:"step",children:w.jsx(AA,{active:u(1)},c(sa,1))}),w.jsx("div",{className:"step",children:w.jsx(RA,{active:u(2)},c(sa,2))}),w.jsx("div",{className:"step",children:w.jsx(PA,{active:u(3)},c(sa,3))})]})})(),w.jsx(Qr,{stepCount:1,localStep:0,children:w.jsx("div",{className:"step",children:w.jsx(LA,{tool:WA})})})]}),l>1&&w.jsx("div",{className:"step-dots",children:Array.from({length:l},(h,u)=>w.jsx("span",{className:`step-dot${u===t.step?" step-dot--active":""}`},u))}),w.jsx("button",{type:"button",className:"deck-nav deck-nav--prev",onClick:()=>r(-1),disabled:t.chapter===0,"aria-label":"上一章",children:"‹"}),w.jsx("button",{type:"button",className:"deck-nav deck-nav--next",onClick:()=>r(1),disabled:t.chapter===Zr-1,"aria-label":"下一章",children:"›"}),w.jsxs("div",{className:"deck-counter",children:[String(t.chapter+1).padStart(2,"0")," / ",String(Zr).padStart(2,"0")]})]})}sv(document.getElementById("root")).render(w.jsx(u_.StrictMode,{children:w.jsx(XA,{})}));
