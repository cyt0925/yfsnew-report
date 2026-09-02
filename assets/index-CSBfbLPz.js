(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Vv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vm={exports:{}},Vl={},Wm={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),Wv=Symbol.for("react.portal"),jv=Symbol.for("react.fragment"),Xv=Symbol.for("react.strict_mode"),$v=Symbol.for("react.profiler"),Yv=Symbol.for("react.provider"),qv=Symbol.for("react.context"),Kv=Symbol.for("react.forward_ref"),Zv=Symbol.for("react.suspense"),Qv=Symbol.for("react.memo"),Jv=Symbol.for("react.lazy"),wh=Symbol.iterator;function e_(t){return t===null||typeof t!="object"?null:(t=wh&&t[wh]||t["@@iterator"],typeof t=="function"?t:null)}var jm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xm=Object.assign,$m={};function Is(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||jm}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ym(){}Ym.prototype=Is.prototype;function ad(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||jm}var od=ad.prototype=new Ym;od.constructor=ad;Xm(od,Is.prototype);od.isPureReactComponent=!0;var Ah=Array.isArray,qm=Object.prototype.hasOwnProperty,ld={current:null},Km={key:!0,ref:!0,__self:!0,__source:!0};function Zm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)qm.call(e,i)&&!Km.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ba,type:t,key:s,ref:a,props:r,_owner:ld.current}}function t_(t,e){return{$$typeof:Ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ba}function n_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ch=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n_(""+t.key):e.toString(36)}function Go(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ba:case Wv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+pc(a,0):i,Ah(r)?(n="",t!=null&&(n=t.replace(Ch,"$&/")+"/"),Go(r,e,n,"",function(c){return c})):r!=null&&(cd(r)&&(r=t_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ch,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ah(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+pc(s,o);a+=Go(s,e,n,l,r)}else if(l=e_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+pc(s,o++),a+=Go(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function qa(t,e,n){if(t==null)return t;var i=[],r=0;return Go(t,i,"","",function(s){return e.call(n,s,r++)}),i}function i_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Vo={transition:null},r_={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:ld};function Qm(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Is;ze.Fragment=jv;ze.Profiler=$v;ze.PureComponent=ad;ze.StrictMode=Xv;ze.Suspense=Zv;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r_;ze.act=Qm;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Xm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ld.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)qm.call(e,l)&&!Km.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ba,type:t.type,key:r,ref:s,props:i,_owner:a}};ze.createContext=function(t){return t={$$typeof:qv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yv,_context:t},t.Consumer=t};ze.createElement=Zm;ze.createFactory=function(t){var e=Zm.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:Kv,render:t}};ze.isValidElement=cd;ze.lazy=function(t){return{$$typeof:Jv,_payload:{_status:-1,_result:t},_init:i_}};ze.memo=function(t,e){return{$$typeof:Qv,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Vo.transition;Vo.transition={};try{t()}finally{Vo.transition=e}};ze.unstable_act=Qm;ze.useCallback=function(t,e){return Yt.current.useCallback(t,e)};ze.useContext=function(t){return Yt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Yt.current.useEffect(t,e)};ze.useId=function(){return Yt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Yt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};ze.useRef=function(t){return Yt.current.useRef(t)};ze.useState=function(t){return Yt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Yt.current.useTransition()};ze.version="18.3.1";Wm.exports=ze;var it=Wm.exports;const s_=Vv(it);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_=it,o_=Symbol.for("react.element"),l_=Symbol.for("react.fragment"),c_=Object.prototype.hasOwnProperty,u_=a_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f_={key:!0,ref:!0,__self:!0,__source:!0};function Jm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)c_.call(e,i)&&!f_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:o_,type:t,key:s,ref:a,props:r,_owner:u_.current}}Vl.Fragment=l_;Vl.jsx=Jm;Vl.jsxs=Jm;Vm.exports=Vl;var C=Vm.exports,eg={exports:{}},vn={},tg={exports:{}},ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,q){var Q=D.length;D.push(q);e:for(;0<Q;){var ne=Q-1>>>1,Se=D[ne];if(0<r(Se,q))D[ne]=q,D[Q]=Se,Q=ne;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var q=D[0],Q=D.pop();if(Q!==q){D[0]=Q;e:for(var ne=0,Se=D.length,Be=Se>>>1;ne<Be;){var X=2*(ne+1)-1,te=D[X],ue=X+1,ce=D[ue];if(0>r(te,Q))ue<Se&&0>r(ce,te)?(D[ne]=ce,D[ue]=Q,ne=ue):(D[ne]=te,D[X]=Q,ne=X);else if(ue<Se&&0>r(ce,Q))D[ne]=ce,D[ue]=Q,ne=ue;else break e}}return q}function r(D,q){var Q=D.sortIndex-q.sortIndex;return Q!==0?Q:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,f=null,d=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=D)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(D){if(y=!1,v(D),!_)if(n(l)!==null)_=!0,W(b);else{var q=n(c);q!==null&&Z(S,q.startTime-D)}}function b(D,q){_=!1,y&&(y=!1,u(P),P=-1),p=!0;var Q=d;try{for(v(q),f=n(l);f!==null&&(!(f.expirationTime>q)||D&&!E());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,d=f.priorityLevel;var Se=ne(f.expirationTime<=q);q=t.unstable_now(),typeof Se=="function"?f.callback=Se:f===n(l)&&i(l),v(q)}else i(l);f=n(l)}if(f!==null)var Be=!0;else{var X=n(c);X!==null&&Z(S,X.startTime-q),Be=!1}return Be}finally{f=null,d=Q,p=!1}}var A=!1,w=null,P=-1,O=5,x=-1;function E(){return!(t.unstable_now()-x<O)}function G(){if(w!==null){var D=t.unstable_now();x=D;var q=!0;try{q=w(!0,D)}finally{q?z():(A=!1,w=null)}}else A=!1}var z;if(typeof g=="function")z=function(){g(G)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,J=Y.port2;Y.port1.onmessage=G,z=function(){J.postMessage(null)}}else z=function(){m(G,0)};function W(D){w=D,A||(A=!0,z())}function Z(D,q){P=m(function(){D(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,W(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var Q=d;d=q;try{return D()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=d;d=D;try{return q()}finally{d=Q}},t.unstable_scheduleCallback=function(D,q,Q){var ne=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ne+Q:ne):Q=ne,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Q+Se,D={id:h++,callback:q,priorityLevel:D,startTime:Q,expirationTime:Se,sortIndex:-1},Q>ne?(D.sortIndex=Q,e(c,D),n(l)===null&&D===n(c)&&(y?(u(P),P=-1):y=!0,Z(S,Q-ne))):(D.sortIndex=Se,e(l,D),_||p||(_=!0,W(b))),D},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(D){var q=d;return function(){var Q=d;d=q;try{return D.apply(this,arguments)}finally{d=Q}}}})(ng);tg.exports=ng;var d_=tg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_=it,gn=d_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ig=new Set,ya={};function Rr(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(ya[t]=e,t=0;t<e.length;t++)ig.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=Object.prototype.hasOwnProperty,p_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rh={},bh={};function m_(t){return Tu.call(bh,t)?!0:Tu.call(Rh,t)?!1:p_.test(t)?bh[t]=!0:(Rh[t]=!0,!1)}function g_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function v_(t,e,n,i){if(e===null||typeof e>"u"||g_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ud=/[\-:]([a-z])/g;function fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ud,fd);It[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ud,fd);It[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ud,fd);It[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function dd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(v_(e,n,r,i)&&(n=null),i||r===null?m_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=h_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),sg=Symbol.for("react.context"),pd=Symbol.for("react.forward_ref"),Au=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),md=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),ag=Symbol.for("react.offscreen"),Ph=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=Ph&&t[Ph]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,mc;function ra(t){if(mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+t}var gc=!1;function vc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ra(t):""}function __(t){switch(t.tag){case 5:return ra(t.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function Ru(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Jr:return"Portal";case wu:return"Profiler";case hd:return"StrictMode";case Au:return"Suspense";case Cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sg:return(t.displayName||"Context")+".Consumer";case rg:return(t._context.displayName||"Context")+".Provider";case pd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case md:return e=t.displayName||null,e!==null?e:Ru(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return Ru(t(e))}catch{}}return null}function x_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ru(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function og(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y_(t){var e=og(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=y_(t))}function lg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=og(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cg(t,e){e=e.checked,e!=null&&dd(t,"checked",e,!1)}function Pu(t,e){cg(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lu(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lu(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Du(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(sa(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function ug(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,dg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S_=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){S_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function hg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=hg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var M_=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Iu(t,e){if(e){if(M_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Uu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fu=null;function gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,hs=null,ps=null;function Uh(t){if(t=Ha(t)){if(typeof Ou!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Yl(e),Ou(t.stateNode,t.type,e))}}function mg(t){hs?ps?ps.push(t):ps=[t]:hs=t}function gg(){if(hs){var t=hs,e=ps;if(ps=hs=null,Uh(t),e)for(t=0;t<e.length;t++)Uh(e[t])}}function vg(t,e){return t(e)}function _g(){}var _c=!1;function xg(t,e,n){if(_c)return t(e,n);_c=!0;try{return vg(t,e,n)}finally{_c=!1,(hs!==null||ps!==null)&&(_g(),gg())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var i=Yl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Bu=!1;if(pi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Bu=!1}function E_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var da=!1,cl=null,ul=!1,ku=null,T_={onError:function(t){da=!0,cl=t}};function w_(t,e,n,i,r,s,a,o,l){da=!1,cl=null,E_.apply(T_,arguments)}function A_(t,e,n,i,r,s,a,o,l){if(w_.apply(this,arguments),da){if(da){var c=cl;da=!1,cl=null}else throw Error(ie(198));ul||(ul=!0,ku=c)}}function br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fh(t){if(br(t)!==t)throw Error(ie(188))}function C_(t){var e=t.alternate;if(!e){if(e=br(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Fh(r),t;if(s===i)return Fh(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Sg(t){return t=C_(t),t!==null?Mg(t):null}function Mg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mg(t);if(e!==null)return e;t=t.sibling}return null}var Eg=gn.unstable_scheduleCallback,Oh=gn.unstable_cancelCallback,R_=gn.unstable_shouldYield,b_=gn.unstable_requestPaint,_t=gn.unstable_now,P_=gn.unstable_getCurrentPriorityLevel,vd=gn.unstable_ImmediatePriority,Tg=gn.unstable_UserBlockingPriority,fl=gn.unstable_NormalPriority,L_=gn.unstable_LowPriority,wg=gn.unstable_IdlePriority,Wl=null,qn=null;function D_(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:U_,N_=Math.log,I_=Math.LN2;function U_(t){return t>>>=0,t===0?32:31-(N_(t)/I_|0)|0}var Ja=64,eo=4194304;function aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=aa(o):(s&=a,s!==0&&(i=aa(s)))}else a=n&~r,a!==0?i=aa(a):s!==0&&(i=aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function F_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-zn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=F_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ag(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function B_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function _d(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Cg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rg,xd,bg,Pg,Lg,Hu=!1,to=[],Ui=null,Fi=null,Oi=null,Ea=new Map,Ta=new Map,Pi=[],k_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bh(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(e.pointerId)}}function Gs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ha(e),e!==null&&xd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function z_(t,e,n,i,r){switch(e){case"focusin":return Ui=Gs(Ui,t,e,n,i,r),!0;case"dragenter":return Fi=Gs(Fi,t,e,n,i,r),!0;case"mouseover":return Oi=Gs(Oi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ea.set(s,Gs(Ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ta.set(s,Gs(Ta.get(s)||null,t,e,n,i,r)),!0}return!1}function Dg(t){var e=hr(t.target);if(e!==null){var n=br(e);if(n!==null){if(e=n.tag,e===13){if(e=yg(n),e!==null){t.blockedOn=e,Lg(t.priority,function(){bg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Fu=i,n.target.dispatchEvent(i),Fu=null}else return e=Ha(n),e!==null&&xd(e),t.blockedOn=n,!1;e.shift()}return!0}function kh(t,e,n){Wo(t)&&n.delete(e)}function H_(){Hu=!1,Ui!==null&&Wo(Ui)&&(Ui=null),Fi!==null&&Wo(Fi)&&(Fi=null),Oi!==null&&Wo(Oi)&&(Oi=null),Ea.forEach(kh),Ta.forEach(kh)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Hu||(Hu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,H_)))}function wa(t){function e(r){return Vs(r,t)}if(0<to.length){Vs(to[0],t);for(var n=1;n<to.length;n++){var i=to[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ui!==null&&Vs(Ui,t),Fi!==null&&Vs(Fi,t),Oi!==null&&Vs(Oi,t),Ea.forEach(e),Ta.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)Dg(n),n.blockedOn===null&&Pi.shift()}var ms=xi.ReactCurrentBatchConfig,hl=!0;function G_(t,e,n,i){var r=Je,s=ms.transition;ms.transition=null;try{Je=1,yd(t,e,n,i)}finally{Je=r,ms.transition=s}}function V_(t,e,n,i){var r=Je,s=ms.transition;ms.transition=null;try{Je=4,yd(t,e,n,i)}finally{Je=r,ms.transition=s}}function yd(t,e,n,i){if(hl){var r=Gu(t,e,n,i);if(r===null)bc(t,e,i,pl,n),Bh(t,i);else if(z_(r,t,e,n,i))i.stopPropagation();else if(Bh(t,i),e&4&&-1<k_.indexOf(t)){for(;r!==null;){var s=Ha(r);if(s!==null&&Rg(s),s=Gu(t,e,n,i),s===null&&bc(t,e,i,pl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else bc(t,e,i,null,n)}}var pl=null;function Gu(t,e,n,i){if(pl=null,t=gd(i),t=hr(t),t!==null)if(e=br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function Ng(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P_()){case vd:return 1;case Tg:return 4;case fl:case L_:return 16;case wg:return 536870912;default:return 16}default:return 16}}var Ni=null,Sd=null,jo=null;function Ig(){if(jo)return jo;var t,e=Sd,n=e.length,i,r="value"in Ni?Ni.value:Ni.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return jo=r.slice(t,1<i?1-i:void 0)}function Xo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function zh(){return!1}function _n(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?no:zh,this.isPropagationStopped=zh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Md=_n(Us),za=ht({},Us,{view:0,detail:0}),W_=_n(za),yc,Sc,Ws,jl=ht({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(yc=t.screenX-Ws.screenX,Sc=t.screenY-Ws.screenY):Sc=yc=0,Ws=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),Hh=_n(jl),j_=ht({},jl,{dataTransfer:0}),X_=_n(j_),$_=ht({},za,{relatedTarget:0}),Mc=_n($_),Y_=ht({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),q_=_n(Y_),K_=ht({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z_=_n(K_),Q_=ht({},Us,{data:0}),Gh=_n(Q_),J_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tx[t])?!!e[t]:!1}function Ed(){return nx}var ix=ht({},za,{key:function(t){if(t.key){var e=J_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rx=_n(ix),sx=ht({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=_n(sx),ax=ht({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),ox=_n(ax),lx=ht({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),cx=_n(lx),ux=ht({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fx=_n(ux),dx=[9,13,27,32],Td=pi&&"CompositionEvent"in window,ha=null;pi&&"documentMode"in document&&(ha=document.documentMode);var hx=pi&&"TextEvent"in window&&!ha,Ug=pi&&(!Td||ha&&8<ha&&11>=ha),Wh=" ",jh=!1;function Fg(t,e){switch(t){case"keyup":return dx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function px(t,e){switch(t){case"compositionend":return Og(e);case"keypress":return e.which!==32?null:(jh=!0,Wh);case"textInput":return t=e.data,t===Wh&&jh?null:t;default:return null}}function mx(t,e){if(ts)return t==="compositionend"||!Td&&Fg(t,e)?(t=Ig(),jo=Sd=Ni=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ug&&e.locale!=="ko"?null:e.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gx[t.type]:e==="textarea"}function Bg(t,e,n,i){mg(i),e=ml(e,"onChange"),0<e.length&&(n=new Md("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,Aa=null;function vx(t){qg(t,0)}function Xl(t){var e=rs(t);if(lg(e))return t}function _x(t,e){if(t==="change")return e}var kg=!1;if(pi){var Ec;if(pi){var Tc="oninput"in document;if(!Tc){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),Tc=typeof $h.oninput=="function"}Ec=Tc}else Ec=!1;kg=Ec&&(!document.documentMode||9<document.documentMode)}function Yh(){pa&&(pa.detachEvent("onpropertychange",zg),Aa=pa=null)}function zg(t){if(t.propertyName==="value"&&Xl(Aa)){var e=[];Bg(e,Aa,t,gd(t)),xg(vx,e)}}function xx(t,e,n){t==="focusin"?(Yh(),pa=e,Aa=n,pa.attachEvent("onpropertychange",zg)):t==="focusout"&&Yh()}function yx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Aa)}function Sx(t,e){if(t==="click")return Xl(e)}function Mx(t,e){if(t==="input"||t==="change")return Xl(e)}function Ex(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:Ex;function Ca(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Tu.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kh(t,e){var n=qh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qh(n)}}function Hg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gg(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tx(t){var e=Gg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(i!==null&&wd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kh(n,s);var a=Kh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wx=pi&&"documentMode"in document&&11>=document.documentMode,ns=null,Vu=null,ma=null,Wu=!1;function Zh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wu||ns==null||ns!==ll(i)||(i=ns,"selectionStart"in i&&wd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&Ca(ma,i)||(ma=i,i=ml(Vu,"onSelect"),0<i.length&&(e=new Md("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ns)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},wc={},Vg={};pi&&(Vg=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function $l(t){if(wc[t])return wc[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vg)return wc[t]=e[n];return t}var Wg=$l("animationend"),jg=$l("animationiteration"),Xg=$l("animationstart"),$g=$l("transitionend"),Yg=new Map,Qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){Yg.set(t,e),Rr(e,[t])}for(var Ac=0;Ac<Qh.length;Ac++){var Cc=Qh[Ac],Ax=Cc.toLowerCase(),Cx=Cc[0].toUpperCase()+Cc.slice(1);Ki(Ax,"on"+Cx)}Ki(Wg,"onAnimationEnd");Ki(jg,"onAnimationIteration");Ki(Xg,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki($g,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rx=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function Jh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,A_(i,e,void 0,t),t.currentTarget=null}function qg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Jh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Jh(r,o,c),s=l}}}if(ul)throw t=ku,ul=!1,ku=null,t}function at(t,e){var n=e[qu];n===void 0&&(n=e[qu]=new Set);var i=t+"__bubble";n.has(i)||(Kg(e,t,2,!1),n.add(i))}function Rc(t,e,n){var i=0;e&&(i|=4),Kg(n,t,i,e)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Ra(t){if(!t[ro]){t[ro]=!0,ig.forEach(function(n){n!=="selectionchange"&&(Rx.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ro]||(e[ro]=!0,Rc("selectionchange",!1,e))}}function Kg(t,e,n,i){switch(Ng(e)){case 1:var r=G_;break;case 4:r=V_;break;default:r=yd}n=r.bind(null,e,n,t),r=void 0,!Bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=hr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}xg(function(){var c=s,h=gd(n),f=[];e:{var d=Yg.get(t);if(d!==void 0){var p=Md,_=t;switch(t){case"keypress":if(Xo(n)===0)break e;case"keydown":case"keyup":p=rx;break;case"focusin":_="focus",p=Mc;break;case"focusout":_="blur",p=Mc;break;case"beforeblur":case"afterblur":p=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=X_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ox;break;case Wg:case jg:case Xg:p=q_;break;case $g:p=cx;break;case"scroll":p=W_;break;case"wheel":p=fx;break;case"copy":case"cut":case"paste":p=Z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Vh}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?d!==null?d+"Capture":null:d;y=[];for(var g=c,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=Ma(g,u),S!=null&&y.push(ba(g,S,v)))),m)break;g=g.return}0<y.length&&(d=new p(d,_,null,n,h),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Fu&&(_=n.relatedTarget||n.fromElement)&&(hr(_)||_[mi]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?hr(_):null,_!==null&&(m=br(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Hh,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Vh,S="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?d:rs(p),v=_==null?d:rs(_),d=new y(S,g+"leave",p,n,h),d.target=m,d.relatedTarget=v,S=null,hr(h)===c&&(y=new y(u,g+"enter",_,n,h),y.target=v,y.relatedTarget=m,S=y),m=S,p&&_)t:{for(y=p,u=_,g=0,v=y;v;v=Dr(v))g++;for(v=0,S=u;S;S=Dr(S))v++;for(;0<g-v;)y=Dr(y),g--;for(;0<v-g;)u=Dr(u),v--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Dr(y),u=Dr(u)}y=null}else y=null;p!==null&&ep(f,d,p,y,!1),_!==null&&m!==null&&ep(f,m,_,y,!0)}}e:{if(d=c?rs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=_x;else if(Xh(d))if(kg)b=Mx;else{b=yx;var A=xx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=Sx);if(b&&(b=b(t,c))){Bg(f,b,n,h);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Lu(d,"number",d.value)}switch(A=c?rs(c):window,t){case"focusin":(Xh(A)||A.contentEditable==="true")&&(ns=A,Vu=c,ma=null);break;case"focusout":ma=Vu=ns=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,Zh(f,n,h);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":Zh(f,n,h)}var w;if(Td)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ts?Fg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ug&&n.locale!=="ko"&&(ts||P!=="onCompositionStart"?P==="onCompositionEnd"&&ts&&(w=Ig()):(Ni=h,Sd="value"in Ni?Ni.value:Ni.textContent,ts=!0)),A=ml(c,P),0<A.length&&(P=new Gh(P,t,null,n,h),f.push({event:P,listeners:A}),w?P.data=w:(w=Og(n),w!==null&&(P.data=w)))),(w=hx?px(t,n):mx(t,n))&&(c=ml(c,"onBeforeInput"),0<c.length&&(h=new Gh("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=w))}qg(f,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ma(t,n),s!=null&&i.unshift(ba(t,s,r)),s=Ma(t,e),s!=null&&i.push(ba(t,s,r))),t=t.return}return i}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ep(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ma(n,s),l!=null&&a.unshift(ba(n,l,o))):r||(l=Ma(n,s),l!=null&&a.push(ba(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var bx=/\r\n?/g,Px=/\u0000|\uFFFD/g;function tp(t){return(typeof t=="string"?t:""+t).replace(bx,`
`).replace(Px,"")}function so(t,e,n){if(e=tp(e),tp(t)!==e&&n)throw Error(ie(425))}function gl(){}var ju=null,Xu=null;function $u(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yu=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(t){return np.resolve(null).then(t).catch(Nx)}:Yu;function Nx(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wa(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ip(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),$n="__reactFiber$"+Fs,Pa="__reactProps$"+Fs,mi="__reactContainer$"+Fs,qu="__reactEvents$"+Fs,Ix="__reactListeners$"+Fs,Ux="__reactHandles$"+Fs;function hr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ip(t);t!==null;){if(n=t[$n])return n;t=ip(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[$n]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Yl(t){return t[Pa]||null}var Ku=[],ss=-1;function Zi(t){return{current:t}}function lt(t){0>ss||(t.current=Ku[ss],Ku[ss]=null,ss--)}function rt(t,e){ss++,Ku[ss]=t.current,t.current=e}var $i={},Ht=Zi($i),nn=Zi(!1),Sr=$i;function Ms(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function vl(){lt(nn),lt(Ht)}function rp(t,e,n){if(Ht.current!==$i)throw Error(ie(168));rt(Ht,e),rt(nn,n)}function Zg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,x_(t)||"Unknown",r));return ht({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Sr=Ht.current,rt(Ht,t),rt(nn,nn.current),!0}function sp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Zg(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,lt(nn),lt(Ht),rt(Ht,t)):lt(nn),rt(nn,n)}var oi=null,ql=!1,Lc=!1;function Qg(t){oi===null?oi=[t]:oi.push(t)}function Fx(t){ql=!0,Qg(t)}function Qi(){if(!Lc&&oi!==null){Lc=!0;var t=0,e=Je;try{var n=oi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,ql=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),Eg(vd,Qi),r}finally{Je=e,Lc=!1}}return null}var as=[],os=0,xl=null,yl=0,Sn=[],Mn=0,Mr=null,ci=1,ui="";function or(t,e){as[os++]=yl,as[os++]=xl,xl=t,yl=e}function Jg(t,e,n){Sn[Mn++]=ci,Sn[Mn++]=ui,Sn[Mn++]=Mr,Mr=t;var i=ci;t=ui;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ci=1<<32-zn(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function Ad(t){t.return!==null&&(or(t,1),Jg(t,1,0))}function Cd(t){for(;t===xl;)xl=as[--os],as[os]=null,yl=as[--os],as[os]=null;for(;t===Mr;)Mr=Sn[--Mn],Sn[Mn]=null,ui=Sn[--Mn],Sn[Mn]=null,ci=Sn[--Mn],Sn[Mn]=null}var mn=null,hn=null,ct=!1,Fn=null;function e0(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,hn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,hn=null,!0):!1;default:return!1}}function Zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qu(t){if(ct){var e=hn;if(e){var n=e;if(!ap(t,e)){if(Zu(t))throw Error(ie(418));e=Bi(n.nextSibling);var i=mn;e&&ap(t,e)?e0(i,n):(t.flags=t.flags&-4097|2,ct=!1,mn=t)}}else{if(Zu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ct=!1,mn=t}}}function op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function ao(t){if(t!==mn)return!1;if(!ct)return op(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$u(t.type,t.memoizedProps)),e&&(e=hn)){if(Zu(t))throw t0(),Error(ie(418));for(;e;)e0(t,e),e=Bi(e.nextSibling)}if(op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=mn?Bi(t.stateNode.nextSibling):null;return!0}function t0(){for(var t=hn;t;)t=Bi(t.nextSibling)}function Es(){hn=mn=null,ct=!1}function Rd(t){Fn===null?Fn=[t]:Fn.push(t)}var Ox=xi.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function oo(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lp(t){var e=t._init;return e(t._payload)}function n0(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Gi(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,v,S){return g===null||g.tag!==6?(g=Bc(v,u.mode,S),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,S){var b=v.type;return b===es?h(u,g,v.props.children,S,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ri&&lp(b)===g.type)?(S=r(g,v.props),S.ref=js(u,g,v),S.return=u,S):(S=Jo(v.type,v.key,v.props,null,u.mode,S),S.ref=js(u,g,v),S.return=u,S)}function c(u,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=kc(v,u.mode,S),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function h(u,g,v,S,b){return g===null||g.tag!==7?(g=xr(v,u.mode,S,b),g.return=u,g):(g=r(g,v),g.return=u,g)}function f(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Bc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ka:return v=Jo(g.type,g.key,g.props,null,u.mode,v),v.ref=js(u,null,g),v.return=u,v;case Jr:return g=kc(g,u.mode,v),g.return=u,g;case Ri:var S=g._init;return f(u,S(g._payload),v)}if(sa(g)||zs(g))return g=xr(g,u.mode,v,null),g.return=u,g;oo(u,g)}return null}function d(u,g,v,S){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:o(u,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ka:return v.key===b?l(u,g,v,S):null;case Jr:return v.key===b?c(u,g,v,S):null;case Ri:return b=v._init,d(u,g,b(v._payload),S)}if(sa(v)||zs(v))return b!==null?null:h(u,g,v,S,null);oo(u,v)}return null}function p(u,g,v,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,o(g,u,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ka:return u=u.get(S.key===null?v:S.key)||null,l(g,u,S,b);case Jr:return u=u.get(S.key===null?v:S.key)||null,c(g,u,S,b);case Ri:var A=S._init;return p(u,g,v,A(S._payload),b)}if(sa(S)||zs(S))return u=u.get(v)||null,h(g,u,S,b,null);oo(g,S)}return null}function _(u,g,v,S){for(var b=null,A=null,w=g,P=g=0,O=null;w!==null&&P<v.length;P++){w.index>P?(O=w,w=null):O=w.sibling;var x=d(u,w,v[P],S);if(x===null){w===null&&(w=O);break}t&&w&&x.alternate===null&&e(u,w),g=s(x,g,P),A===null?b=x:A.sibling=x,A=x,w=O}if(P===v.length)return n(u,w),ct&&or(u,P),b;if(w===null){for(;P<v.length;P++)w=f(u,v[P],S),w!==null&&(g=s(w,g,P),A===null?b=w:A.sibling=w,A=w);return ct&&or(u,P),b}for(w=i(u,w);P<v.length;P++)O=p(w,u,P,v[P],S),O!==null&&(t&&O.alternate!==null&&w.delete(O.key===null?P:O.key),g=s(O,g,P),A===null?b=O:A.sibling=O,A=O);return t&&w.forEach(function(E){return e(u,E)}),ct&&or(u,P),b}function y(u,g,v,S){var b=zs(v);if(typeof b!="function")throw Error(ie(150));if(v=b.call(v),v==null)throw Error(ie(151));for(var A=b=null,w=g,P=g=0,O=null,x=v.next();w!==null&&!x.done;P++,x=v.next()){w.index>P?(O=w,w=null):O=w.sibling;var E=d(u,w,x.value,S);if(E===null){w===null&&(w=O);break}t&&w&&E.alternate===null&&e(u,w),g=s(E,g,P),A===null?b=E:A.sibling=E,A=E,w=O}if(x.done)return n(u,w),ct&&or(u,P),b;if(w===null){for(;!x.done;P++,x=v.next())x=f(u,x.value,S),x!==null&&(g=s(x,g,P),A===null?b=x:A.sibling=x,A=x);return ct&&or(u,P),b}for(w=i(u,w);!x.done;P++,x=v.next())x=p(w,u,P,x.value,S),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?P:x.key),g=s(x,g,P),A===null?b=x:A.sibling=x,A=x);return t&&w.forEach(function(G){return e(u,G)}),ct&&or(u,P),b}function m(u,g,v,S){if(typeof v=="object"&&v!==null&&v.type===es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ka:e:{for(var b=v.key,A=g;A!==null;){if(A.key===b){if(b=v.type,b===es){if(A.tag===7){n(u,A.sibling),g=r(A,v.props.children),g.return=u,u=g;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ri&&lp(b)===A.type){n(u,A.sibling),g=r(A,v.props),g.ref=js(u,A,v),g.return=u,u=g;break e}n(u,A);break}else e(u,A);A=A.sibling}v.type===es?(g=xr(v.props.children,u.mode,S,v.key),g.return=u,u=g):(S=Jo(v.type,v.key,v.props,null,u.mode,S),S.ref=js(u,g,v),S.return=u,u=S)}return a(u);case Jr:e:{for(A=v.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=kc(v,u.mode,S),g.return=u,u=g}return a(u);case Ri:return A=v._init,m(u,g,A(v._payload),S)}if(sa(v))return _(u,g,v,S);if(zs(v))return y(u,g,v,S);oo(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=Bc(v,u.mode,S),g.return=u,u=g),a(u)):n(u,g)}return m}var Ts=n0(!0),i0=n0(!1),Sl=Zi(null),Ml=null,ls=null,bd=null;function Pd(){bd=ls=Ml=null}function Ld(t){var e=Sl.current;lt(Sl),t._currentValue=e}function Ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){Ml=t,bd=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(bd!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(Ml===null)throw Error(ie(308));ls=t,Ml.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var pr=null;function Dd(t){pr===null?pr=[t]:pr.push(t)}function r0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Dd(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bi=!1;function Nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,Dd(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function $o(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_d(t,n)}}function cp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,i){var r=t.updateQueue;bi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=ht({},f,d);break e;case 2:bi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=a,t.lanes=a,t.memoizedState=f}}function up(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ga={},Kn=Zi(Ga),La=Zi(Ga),Da=Zi(Ga);function mr(t){if(t===Ga)throw Error(ie(174));return t}function Id(t,e){switch(rt(Da,e),rt(La,t),rt(Kn,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nu(e,t)}lt(Kn),rt(Kn,e)}function ws(){lt(Kn),lt(La),lt(Da)}function a0(t){mr(Da.current);var e=mr(Kn.current),n=Nu(e,t.type);e!==n&&(rt(La,t),rt(Kn,n))}function Ud(t){La.current===t&&(lt(Kn),lt(La))}var ft=Zi(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dc=[];function Fd(){for(var t=0;t<Dc.length;t++)Dc[t]._workInProgressVersionPrimary=null;Dc.length=0}var Yo=xi.ReactCurrentDispatcher,Nc=xi.ReactCurrentBatchConfig,Er=0,dt=null,Mt=null,Rt=null,wl=!1,ga=!1,Na=0,Bx=0;function Ft(){throw Error(ie(321))}function Od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Bd(t,e,n,i,r,s){if(Er=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yo.current=t===null||t.memoizedState===null?Gx:Vx,t=n(i,r),ga){s=0;do{if(ga=!1,Na=0,25<=s)throw Error(ie(301));s+=1,Rt=Mt=null,e.updateQueue=null,Yo.current=Wx,t=n(i,r)}while(ga)}if(Yo.current=Al,e=Mt!==null&&Mt.next!==null,Er=0,Rt=Mt=dt=null,wl=!1,e)throw Error(ie(300));return t}function kd(){var t=Na!==0;return Na=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Cn(){if(Mt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?dt.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(ie(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Ia(t,e){return typeof e=="function"?e(t):e}function Ic(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Er&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,dt.lanes|=h,Tr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Vn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Vn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function o0(){}function l0(t,e){var n=dt,i=Cn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,zd(f0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Ua(9,u0.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(ie(349));Er&30||c0(n,e,r)}return r}function c0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u0(t,e,n,i){e.value=n,e.getSnapshot=i,d0(e)&&h0(t)}function f0(t,e,n){return n(function(){d0(e)&&h0(t)})}function d0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function h0(t){var e=gi(t,1);e!==null&&Hn(e,t,1,-1)}function fp(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},e.queue=t,t=t.dispatch=Hx.bind(null,dt,t),[e.memoizedState,t]}function Ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function p0(){return Cn().memoizedState}function qo(t,e,n,i){var r=jn();dt.flags|=t,r.memoizedState=Ua(1|e,n,void 0,i===void 0?null:i)}function Kl(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&Od(i,a.deps)){r.memoizedState=Ua(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Ua(1|e,n,s,i)}function dp(t,e){return qo(8390656,8,t,e)}function zd(t,e){return Kl(2048,8,t,e)}function m0(t,e){return Kl(4,2,t,e)}function g0(t,e){return Kl(4,4,t,e)}function v0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _0(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,v0.bind(null,e,t),n)}function Hd(){}function x0(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Od(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function y0(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Od(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function S0(t,e,n){return Er&21?(Vn(n,e)||(n=Ag(),dt.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function kx(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Nc.transition;Nc.transition={};try{t(!1),e()}finally{Je=n,Nc.transition=i}}function M0(){return Cn().memoizedState}function zx(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},E0(t))T0(e,n);else if(n=r0(t,e,n,i),n!==null){var r=jt();Hn(n,t,i,r),w0(n,e,i)}}function Hx(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(E0(t))T0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Vn(o,a)){var l=e.interleaved;l===null?(r.next=r,Dd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=r0(t,e,r,i),n!==null&&(r=jt(),Hn(n,t,i,r),w0(n,e,i))}}function E0(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function T0(t,e){ga=wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_d(t,n)}}var Al={readContext:An,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},Gx={readContext:An,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:dp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qo(4194308,4,v0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return qo(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=zx.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:fp,useDebugValue:Hd,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=fp(!1),e=t[0];return t=kx.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=jn();if(ct){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),bt===null)throw Error(ie(349));Er&30||c0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,dp(f0.bind(null,i,s,t),[t]),i.flags|=2048,Ua(9,u0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=bt.identifierPrefix;if(ct){var n=ui,i=ci;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Bx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Vx={readContext:An,useCallback:x0,useContext:An,useEffect:zd,useImperativeHandle:_0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:y0,useReducer:Ic,useRef:p0,useState:function(){return Ic(Ia)},useDebugValue:Hd,useDeferredValue:function(t){var e=Cn();return S0(e,Mt.memoizedState,t)},useTransition:function(){var t=Ic(Ia)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:l0,useId:M0,unstable_isNewReconciler:!1},Wx={readContext:An,useCallback:x0,useContext:An,useEffect:zd,useImperativeHandle:_0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:y0,useReducer:Uc,useRef:p0,useState:function(){return Uc(Ia)},useDebugValue:Hd,useDeferredValue:function(t){var e=Cn();return Mt===null?e.memoizedState=t:S0(e,Mt.memoizedState,t)},useTransition:function(){var t=Uc(Ia)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:l0,useId:M0,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ef(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Hi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Hn(e,t,r,i),$o(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Hi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Hn(e,t,r,i),$o(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),i=Hi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(Hn(e,t,i,n),$o(e,t,i))}};function hp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,i)||!Ca(r,s):!0}function A0(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=rn(e)?Sr:Ht.current,i=e.contextTypes,s=(i=i!=null)?Ms(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function pp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function tf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Nd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=rn(e)?Sr:Ht.current,r.context=Ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ef(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zl.enqueueReplaceState(r,r.state,null),El(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=__(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jx=typeof WeakMap=="function"?WeakMap:Map;function C0(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,hf=i),nf(t,e)},n}function R0(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nf(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function mp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new jx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sy.bind(null,t,e,n),e.then(t,t))}function gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var Xx=xi.ReactCurrentOwner,tn=!1;function Wt(t,e,n,i){e.child=t===null?i0(e,null,n,i):Ts(e,t.child,n,i)}function _p(t,e,n,i,r){n=n.render;var s=e.ref;return gs(e,r),i=Bd(t,e,n,i,s,r),n=kd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ct&&n&&Ad(e),e.flags|=1,Wt(t,e,i,r),e.child)}function xp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,b0(t,e,s,i,r)):(t=Jo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(a,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function b0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ca(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,vi(t,e,r)}return rf(t,e,n,i,r)}function P0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(us,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(us,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(us,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(us,fn),fn|=i;return Wt(t,e,r,n),e.child}function L0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rf(t,e,n,i,r){var s=rn(n)?Sr:Ht.current;return s=Ms(e,s),gs(e,r),n=Bd(t,e,n,i,s,r),i=kd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ct&&i&&Ad(e),e.flags|=1,Wt(t,e,n,r),e.child)}function yp(t,e,n,i,r){if(rn(n)){var s=!0;_l(e)}else s=!1;if(gs(e,r),e.stateNode===null)Ko(t,e),A0(e,n,i),tf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=rn(n)?Sr:Ht.current,c=Ms(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&pp(e,a,i,c),bi=!1;var d=e.memoizedState;a.state=d,El(e,i,a,r),l=e.memoizedState,o!==i||d!==l||nn.current||bi?(typeof h=="function"&&(ef(e,n,h,i),l=e.memoizedState),(o=bi||hp(e,n,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,s0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Nn(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=rn(n)?Sr:Ht.current,l=Ms(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&pp(e,a,i,l),bi=!1,d=e.memoizedState,a.state=d,El(e,i,a,r);var _=e.memoizedState;o!==f||d!==_||nn.current||bi?(typeof p=="function"&&(ef(e,n,p,i),_=e.memoizedState),(c=bi||hp(e,n,c,i,d,_,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return sf(t,e,n,i,s,r)}function sf(t,e,n,i,r,s){L0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&sp(e,n,!1),vi(t,e,s);i=e.stateNode,Xx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,o,s)):Wt(t,e,o,s),e.memoizedState=i.state,r&&sp(e,n,!0),e.child}function D0(t){var e=t.stateNode;e.pendingContext?rp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rp(t,e.context,!1),Id(t,e.containerInfo)}function Sp(t,e,n,i,r){return Es(),Rd(r),e.flags|=256,Wt(t,e,n,i),e.child}var af={dehydrated:null,treeContext:null,retryLane:0};function of(t){return{baseLanes:t,cachePool:null,transitions:null}}function N0(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ft,r&1),t===null)return Qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ec(a,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=of(n),e.memoizedState=af,t):Gd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return $x(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Gi(o,s):(s=xr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?of(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=af,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gd(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lo(t,e,n,i){return i!==null&&Rd(i),Ts(e,t.child,null,n),t=Gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $x(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Fc(Error(ie(422))),lo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ec({mode:"visible",children:i.children},r,0,null),s=xr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ts(e,t.child,null,a),e.child.memoizedState=of(a),e.memoizedState=af,s);if(!(e.mode&1))return lo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=Fc(s,i,void 0),lo(t,e,a,i)}if(o=(a&t.childLanes)!==0,tn||o){if(i=bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),Hn(i,t,r,-1))}return Yd(),i=Fc(Error(ie(421))),lo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ay.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Bi(r.nextSibling),mn=e,ct=!0,Fn=null,t!==null&&(Sn[Mn++]=ci,Sn[Mn++]=ui,Sn[Mn++]=Mr,ci=t.id,ui=t.overflow,Mr=e),e=Gd(e,i.children),e.flags|=4096,e)}function Mp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ju(t.return,e,n)}function Oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function I0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mp(t,n,e);else if(t.tag===19)Mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ko(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yx(t,e,n){switch(e.tag){case 3:D0(e),Es();break;case 5:a0(e);break;case 1:rn(e.type)&&_l(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?N0(t,e,n):(rt(ft,ft.current&1),t=vi(t,e,n),t!==null?t.sibling:null);rt(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return I0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,P0(t,e,n)}return vi(t,e,n)}var U0,lf,F0,O0;U0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lf=function(){};F0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Kn.current);var s=null;switch(n){case"input":r=bu(t,r),i=bu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=Du(t,r),i=Du(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gl)}Iu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ya.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};O0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Xs(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qx(t,e,n){var i=e.pendingProps;switch(Cd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return rn(e.type)&&vl(),Ot(e),null;case 3:return i=e.stateNode,ws(),lt(nn),lt(Ht),Fd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(gf(Fn),Fn=null))),lf(t,e),Ot(e),null;case 5:Ud(e);var r=mr(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)F0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Ot(e),null}if(t=mr(Kn.current),ao(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<oa.length;r++)at(oa[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Lh(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Nh(i,s),at("invalid",i)}Iu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",""+o]):ya.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":Za(i),Dh(i,s,!0);break;case"textarea":Za(i),Ih(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[$n]=e,t[Pa]=i,U0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Uu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<oa.length;r++)at(oa[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Lh(t,i),r=bu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),at("invalid",t);break;case"textarea":Nh(t,i),r=Du(t,i),at("invalid",t);break;default:r=i}Iu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?pg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sa(t,l):typeof l=="number"&&Sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&dd(t,s,l,a))}switch(n){case"input":Za(t),Dh(t,i,!1);break;case"textarea":Za(t),Ih(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)O0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=mr(Da.current),mr(Kn.current),ao(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:so(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Ot(e),null;case 13:if(lt(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&hn!==null&&e.mode&1&&!(e.flags&128))t0(),Es(),e.flags|=98560,s=!1;else if(s=ao(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[$n]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Fn!==null&&(gf(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Et===0&&(Et=3):Yd())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return ws(),lf(t,e),t===null&&Ra(e.stateNode.containerInfo),Ot(e),null;case 10:return Ld(e.type._context),Ot(e),null;case 17:return rn(e.type)&&vl(),Ot(e),null;case 19:if(lt(ft),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Xs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Tl(t),a!==null){for(e.flags|=128,Xs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Cs&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return Ot(e),null}else 2*_t()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ft.current,rt(ft,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return $d(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Kx(t,e){switch(Cd(e),e.tag){case 1:return rn(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),lt(nn),lt(Ht),Fd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ud(e),null;case 13:if(lt(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ft),null;case 4:return ws(),null;case 10:return Ld(e.type._context),null;case 22:case 23:return $d(),null;case 24:return null;default:return null}}var co=!1,zt=!1,Zx=typeof WeakSet=="function"?WeakSet:Set,ve=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function cf(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Ep=!1;function Qx(t,e){if(ju=hl,t=Gg(),wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xu={focusedElem:t,selectionRange:n},hl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Nn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return _=Ep,Ep=!1,_}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&cf(e,n,s)}r=r.next}while(r!==i)}}function Ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function uf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function B0(t){var e=t.alternate;e!==null&&(t.alternate=null,B0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Pa],delete e[qu],delete e[Ix],delete e[Ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k0(t){return t.tag===5||t.tag===3||t.tag===4}function Tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(i!==4&&(t=t.child,t!==null))for(ff(t,e,n),t=t.sibling;t!==null;)ff(t,e,n),t=t.sibling}function df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}var Dt=null,In=!1;function Si(t,e,n){for(n=n.child;n!==null;)z0(t,e,n),n=n.sibling}function z0(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:zt||cs(n,e);case 6:var i=Dt,r=In;Dt=null,Si(t,e,n),Dt=i,In=r,Dt!==null&&(In?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(In?(t=Dt,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),wa(t)):Pc(Dt,n.stateNode));break;case 4:i=Dt,r=In,Dt=n.stateNode.containerInfo,In=!0,Si(t,e,n),Dt=i,In=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&cf(n,e,a),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!zt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){mt(n,e,o)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,Si(t,e,n),zt=i):Si(t,e,n);break;default:Si(t,e,n)}}function wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zx),e.forEach(function(i){var r=oy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Dt=o.stateNode,In=!1;break e;case 3:Dt=o.stateNode.containerInfo,In=!0;break e;case 4:Dt=o.stateNode.containerInfo,In=!0;break e}o=o.return}if(Dt===null)throw Error(ie(160));z0(s,a,r),Dt=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)H0(e,t),e=e.sibling}function H0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Wn(t),i&4){try{va(3,t,t.return),Ql(3,t)}catch(y){mt(t,t.return,y)}try{va(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:bn(e,t),Wn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(bn(e,t),Wn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{Sa(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&cg(r,s),Uu(o,a);var c=Uu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?pg(r,f):h==="dangerouslySetInnerHTML"?dg(r,f):h==="children"?Sa(r,f):dd(r,h,f,c)}switch(o){case"input":Pu(r,s);break;case"textarea":ug(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ds(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(bn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(bn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:bn(e,t),Wn(t);break;case 13:bn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(jd=_t())),i&4&&wp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||h,bn(e,t),zt=c):bn(e,t),Wn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(ve=t,h=t.child;h!==null;){for(f=ve=h;ve!==null;){switch(d=ve,p=d.child,d.tag){case 0:case 11:case 14:case 15:va(4,d,d.return);break;case 1:cs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:cs(d,d.return);break;case 22:if(d.memoizedState!==null){Cp(f);continue}}p!==null?(p.return=d,ve=p):Cp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=hg("display",a))}catch(y){mt(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){mt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:bn(e,t),Wn(t),i&4&&wp(t);break;case 21:break;default:bn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Sa(r,""),i.flags&=-33);var s=Tp(t);df(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Tp(t);ff(t,o,a);break;default:throw Error(ie(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jx(t,e,n){ve=t,G0(t)}function G0(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||co;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||zt;o=co;var c=zt;if(co=a,(zt=l)&&!c)for(ve=r;ve!==null;)a=ve,l=a.child,a.tag===22&&a.memoizedState!==null?Rp(r):l!==null?(l.return=a,ve=l):Rp(r);for(;s!==null;)ve=s,G0(s),s=s.sibling;ve=r,co=o,zt=c}Ap(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Ap(t)}}function Ap(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&up(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}up(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&wa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}zt||e.flags&512&&uf(e)}catch(d){mt(e,e.return,d)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Cp(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Rp(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ql(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{uf(e)}catch(l){mt(e,s,l)}break;case 5:var a=e.return;try{uf(e)}catch(l){mt(e,a,l)}}}catch(l){mt(e,e.return,l)}if(e===t){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var ey=Math.ceil,Cl=xi.ReactCurrentDispatcher,Vd=xi.ReactCurrentOwner,wn=xi.ReactCurrentBatchConfig,$e=0,bt=null,St=null,Nt=0,fn=0,us=Zi(0),Et=0,Fa=null,Tr=0,Jl=0,Wd=0,_a=null,Jt=null,jd=0,Cs=1/0,ai=null,Rl=!1,hf=null,zi=null,uo=!1,Ii=null,bl=0,xa=0,pf=null,Zo=-1,Qo=0;function jt(){return $e&6?_t():Zo!==-1?Zo:Zo=_t()}function Hi(t){return t.mode&1?$e&2&&Nt!==0?Nt&-Nt:Ox.transition!==null?(Qo===0&&(Qo=Ag()),Qo):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Ng(t.type)),t):1}function Hn(t,e,n,i){if(50<xa)throw xa=0,pf=null,Error(ie(185));ka(t,n,i),(!($e&2)||t!==bt)&&(t===bt&&(!($e&2)&&(Jl|=n),Et===4&&Li(t,Nt)),sn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Cs=_t()+500,ql&&Qi()))}function sn(t,e){var n=t.callbackNode;O_(t,e);var i=dl(t,t===bt?Nt:0);if(i===0)n!==null&&Oh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Oh(n),e===1)t.tag===0?Fx(bp.bind(null,t)):Qg(bp.bind(null,t)),Dx(function(){!($e&6)&&Qi()}),n=null;else{switch(Cg(i)){case 1:n=vd;break;case 4:n=Tg;break;case 16:n=fl;break;case 536870912:n=wg;break;default:n=fl}n=K0(n,V0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V0(t,e){if(Zo=-1,Qo=0,$e&6)throw Error(ie(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var i=dl(t,t===bt?Nt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pl(t,i);else{e=i;var r=$e;$e|=2;var s=j0();(bt!==t||Nt!==e)&&(ai=null,Cs=_t()+500,_r(t,e));do try{iy();break}catch(o){W0(t,o)}while(!0);Pd(),Cl.current=s,$e=r,St!==null?e=0:(bt=null,Nt=0,e=Et)}if(e!==0){if(e===2&&(r=zu(t),r!==0&&(i=r,e=mf(t,r))),e===1)throw n=Fa,_r(t,0),Li(t,i),sn(t,_t()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!ty(r)&&(e=Pl(t,i),e===2&&(s=zu(t),s!==0&&(i=s,e=mf(t,s))),e===1))throw n=Fa,_r(t,0),Li(t,i),sn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:lr(t,Jt,ai);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=jd+500-_t(),10<e)){if(dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Yu(lr.bind(null,t,Jt,ai),e);break}lr(t,Jt,ai);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ey(i/1960))-i,10<i){t.timeoutHandle=Yu(lr.bind(null,t,Jt,ai),i);break}lr(t,Jt,ai);break;case 5:lr(t,Jt,ai);break;default:throw Error(ie(329))}}}return sn(t,_t()),t.callbackNode===n?V0.bind(null,t):null}function mf(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=Pl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&gf(e)),t}function gf(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function ty(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~Wd,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function bp(t){if($e&6)throw Error(ie(327));vs();var e=dl(t,0);if(!(e&1))return sn(t,_t()),null;var n=Pl(t,e);if(t.tag!==0&&n===2){var i=zu(t);i!==0&&(e=i,n=mf(t,i))}if(n===1)throw n=Fa,_r(t,0),Li(t,e),sn(t,_t()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,Jt,ai),sn(t,_t()),null}function Xd(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Cs=_t()+500,ql&&Qi())}}function wr(t){Ii!==null&&Ii.tag===0&&!($e&6)&&vs();var e=$e;$e|=1;var n=wn.transition,i=Je;try{if(wn.transition=null,Je=1,t)return t()}finally{Je=i,wn.transition=n,$e=e,!($e&6)&&Qi()}}function $d(){fn=us.current,lt(us)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Lx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Cd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vl();break;case 3:ws(),lt(nn),lt(Ht),Fd();break;case 5:Ud(i);break;case 4:ws();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:Ld(i.type._context);break;case 22:case 23:$d()}n=n.return}if(bt=t,St=t=Gi(t.current,null),Nt=fn=e,Et=0,Fa=null,Wd=Jl=Tr=0,Jt=_a=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}pr=null}return t}function W0(t,e){do{var n=St;try{if(Pd(),Yo.current=Al,wl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wl=!1}if(Er=0,Rt=Mt=dt=null,ga=!1,Na=0,Vd.current=null,n===null||n.return===null){Et=1,Fa=e,St=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Nt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=gp(a);if(p!==null){p.flags&=-257,vp(p,a,o,s,e),p.mode&1&&mp(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){mp(s,c,e),Yd();break e}l=Error(ie(426))}}else if(ct&&o.mode&1){var m=gp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),vp(m,a,o,s,e),Rd(As(l,o));break e}}s=l=As(l,o),Et!==4&&(Et=2),_a===null?_a=[s]:_a.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=C0(s,l,e);cp(s,u);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(zi===null||!zi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=R0(s,o,e);cp(s,S);break e}}s=s.return}while(s!==null)}$0(n)}catch(b){e=b,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function j0(){var t=Cl.current;return Cl.current=Al,t===null?Al:t}function Yd(){(Et===0||Et===3||Et===2)&&(Et=4),bt===null||!(Tr&268435455)&&!(Jl&268435455)||Li(bt,Nt)}function Pl(t,e){var n=$e;$e|=2;var i=j0();(bt!==t||Nt!==e)&&(ai=null,_r(t,e));do try{ny();break}catch(r){W0(t,r)}while(!0);if(Pd(),$e=n,Cl.current=i,St!==null)throw Error(ie(261));return bt=null,Nt=0,Et}function ny(){for(;St!==null;)X0(St)}function iy(){for(;St!==null&&!R_();)X0(St)}function X0(t){var e=q0(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?$0(t):St=e,Vd.current=null}function $0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Kx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=qx(n,e,fn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function lr(t,e,n){var i=Je,r=wn.transition;try{wn.transition=null,Je=1,ry(t,e,n,i)}finally{wn.transition=r,Je=i}return null}function ry(t,e,n,i){do vs();while(Ii!==null);if($e&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(B_(t,s),t===bt&&(St=bt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,K0(fl,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var a=Je;Je=1;var o=$e;$e|=4,Vd.current=null,Qx(t,n),H0(n,t),Tx(Xu),hl=!!ju,Xu=ju=null,t.current=n,Jx(n),b_(),$e=o,Je=a,wn.transition=s}else t.current=n;if(uo&&(uo=!1,Ii=t,bl=r),s=t.pendingLanes,s===0&&(zi=null),D_(n.stateNode),sn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=hf,hf=null,t;return bl&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===pf?xa++:(xa=0,pf=t):xa=0,Qi(),null}function vs(){if(Ii!==null){var t=Cg(bl),e=wn.transition,n=Je;try{if(wn.transition=null,Je=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,bl=0,$e&6)throw Error(ie(331));var r=$e;for($e|=4,ve=t.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ve=c;ve!==null;){var h=ve;switch(h.tag){case 0:case 11:case 15:va(8,h,s)}var f=h.child;if(f!==null)f.return=h,ve=f;else for(;ve!==null;){h=ve;var d=h.sibling,p=h.return;if(B0(h),h===c){ve=null;break}if(d!==null){d.return=p,ve=d;break}ve=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ve=u;break e}ve=s.return}}var g=t.current;for(ve=g;ve!==null;){a=ve;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,ve=v;else e:for(a=g;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ql(9,o)}}catch(b){mt(o,o.return,b)}if(o===a){ve=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ve=S;break e}ve=o.return}}if($e=r,Qi(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Wl,t)}catch{}i=!0}return i}finally{Je=n,wn.transition=e}}return!1}function Pp(t,e,n){e=As(n,e),e=C0(t,e,1),t=ki(t,e,1),e=jt(),t!==null&&(ka(t,1,e),sn(t,e))}function mt(t,e,n){if(t.tag===3)Pp(t,t,n);else for(;e!==null;){if(e.tag===3){Pp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=As(n,t),t=R0(e,t,1),e=ki(e,t,1),t=jt(),e!==null&&(ka(e,1,t),sn(e,t));break}}e=e.return}}function sy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Nt&n)===n&&(Et===4||Et===3&&(Nt&130023424)===Nt&&500>_t()-jd?_r(t,0):Wd|=n),sn(t,e)}function Y0(t,e){e===0&&(t.mode&1?(e=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):e=1);var n=jt();t=gi(t,e),t!==null&&(ka(t,e,n),sn(t,n))}function ay(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y0(t,n)}function oy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Y0(t,n)}var q0;q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,Yx(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ct&&e.flags&1048576&&Jg(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ko(t,e),t=e.pendingProps;var r=Ms(e,Ht.current);gs(e,n),r=Bd(null,e,i,t,r,n);var s=kd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,_l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Nd(e),r.updater=Zl,e.stateNode=r,r._reactInternals=e,tf(e,i,t,n),e=sf(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Ad(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ko(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cy(i),t=Nn(i,t),r){case 0:e=rf(null,e,i,t,n);break e;case 1:e=yp(null,e,i,t,n);break e;case 11:e=_p(null,e,i,t,n);break e;case 14:e=xp(null,e,i,Nn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),rf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),yp(t,e,i,r,n);case 3:e:{if(D0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,s0(t,e),El(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(ie(423)),e),e=Sp(t,e,i,n,r);break e}else if(i!==r){r=As(Error(ie(424)),e),e=Sp(t,e,i,n,r);break e}else for(hn=Bi(e.stateNode.containerInfo.firstChild),mn=e,ct=!0,Fn=null,n=i0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=vi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return a0(e),t===null&&Qu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,$u(i,r)?a=null:s!==null&&$u(i,s)&&(e.flags|=32),L0(t,e),Wt(t,e,a,n),e.child;case 6:return t===null&&Qu(e),null;case 13:return N0(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),_p(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt(Sl,i._currentValue),i._currentValue=a,s!==null)if(Vn(s.value,a)){if(s.children===r.children&&!nn.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ju(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ju(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,gs(e,n),r=An(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),xp(t,e,i,r,n);case 15:return b0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Ko(t,e),e.tag=1,rn(i)?(t=!0,_l(e)):t=!1,gs(e,n),A0(e,i,r),tf(e,i,r,n),sf(null,e,i,!0,t,n);case 19:return I0(t,e,n);case 22:return P0(t,e,n)}throw Error(ie(156,e.tag))};function K0(t,e){return Eg(t,e)}function ly(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new ly(t,e,n,i)}function qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cy(t){if(typeof t=="function")return qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pd)return 11;if(t===md)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")qd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case es:return xr(n.children,r,s,e);case hd:a=8,r|=8;break;case wu:return t=En(12,n,e,r|2),t.elementType=wu,t.lanes=s,t;case Au:return t=En(13,n,e,r),t.elementType=Au,t.lanes=s,t;case Cu:return t=En(19,n,e,r),t.elementType=Cu,t.lanes=s,t;case ag:return ec(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rg:a=10;break e;case sg:a=9;break e;case pd:a=11;break e;case md:a=14;break e;case Ri:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=En(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function ec(t,e,n,i){return t=En(22,t,i,e),t.elementType=ag,t.lanes=n,t.stateNode={isHidden:!1},t}function Bc(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function kc(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kd(t,e,n,i,r,s,a,o,l){return t=new uy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(s),t}function fy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Z0(t){if(!t)return $i;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(rn(n))return Zg(t,n,e)}return e}function Q0(t,e,n,i,r,s,a,o,l){return t=Kd(n,i,!0,t,r,s,a,o,l),t.context=Z0(null),n=t.current,i=jt(),r=Hi(n),s=hi(i,r),s.callback=e??null,ki(n,s,r),t.current.lanes=r,ka(t,r,i),sn(t,i),t}function tc(t,e,n,i){var r=e.current,s=jt(),a=Hi(r);return n=Z0(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,a),t!==null&&(Hn(t,r,a,s),$o(t,r,a)),a}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zd(t,e){Lp(t,e),(t=t.alternate)&&Lp(t,e)}function dy(){return null}var J0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qd(t){this._internalRoot=t}nc.prototype.render=Qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));tc(t,e,null,null)};nc.prototype.unmount=Qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){tc(null,t,null,null)}),e[mi]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&Dg(t)}};function Jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dp(){}function hy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ll(a);s.call(c)}}var a=Q0(e,i,t,0,null,!1,!1,"",Dp);return t._reactRootContainer=a,t[mi]=a.current,Ra(t.nodeType===8?t.parentNode:t),wr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Ll(l);o.call(c)}}var l=Kd(t,0,!1,null,null,!1,!1,"",Dp);return t._reactRootContainer=l,t[mi]=l.current,Ra(t.nodeType===8?t.parentNode:t),wr(function(){tc(e,l,n,i)}),l}function rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ll(a);o.call(l)}}tc(e,a,t,r)}else a=hy(n,e,t,r,i);return Ll(a)}Rg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=aa(e.pendingLanes);n!==0&&(_d(e,n|1),sn(e,_t()),!($e&6)&&(Cs=_t()+500,Qi()))}break;case 13:wr(function(){var i=gi(t,1);if(i!==null){var r=jt();Hn(i,t,1,r)}}),Zd(t,1)}};xd=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=jt();Hn(e,t,134217728,n)}Zd(t,134217728)}};bg=function(t){if(t.tag===13){var e=Hi(t),n=gi(t,e);if(n!==null){var i=jt();Hn(n,t,e,i)}Zd(t,e)}};Pg=function(){return Je};Lg=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Ou=function(t,e,n){switch(e){case"input":if(Pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Yl(i);if(!r)throw Error(ie(90));lg(i),Pu(i,r)}}}break;case"textarea":ug(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};vg=Xd;_g=wr;var py={usingClientEntryPoint:!1,Events:[Ha,rs,Yl,mg,gg,Xd]},$s={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},my={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sg(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Wl=fo.inject(my),qn=fo}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jd(e))throw Error(ie(200));return fy(t,e,null,n)};vn.createRoot=function(t,e){if(!Jd(t))throw Error(ie(299));var n=!1,i="",r=J0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kd(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,Ra(t.nodeType===8?t.parentNode:t),new Qd(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Sg(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return wr(t)};vn.hydrate=function(t,e,n){if(!ic(e))throw Error(ie(200));return rc(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Jd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=J0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Q0(e,null,t,1,n??null,r,!1,s,a),t[mi]=e.current,Ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nc(e)};vn.render=function(t,e,n){if(!ic(e))throw Error(ie(200));return rc(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!ic(t))throw Error(ie(40));return t._reactRootContainer?(wr(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};vn.unstable_batchedUpdates=Xd;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ic(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return rc(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function ev(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ev)}catch(t){console.error(t)}}ev(),eg.exports=vn;var gy=eg.exports,tv,Np=gy;tv=Np.createRoot,Np.hydrateRoot;const vy=`<!DOCTYPE html>
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
</html>`,_y="./vendor/three-0.136.0.module.js",xy=/0x00E5FF/g,yy="0xD10F27",Sy=-9.6,My="const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);",Ey=`const panX = ${Sy};
            const camera = new THREE.OrthographicCamera(-d * aspect + panX, d * aspect + panX, d, -d, 15, 55);`,Ty=`camera.left = -d * newAspect;
                camera.right = d * newAspect;`,wy=`camera.left = -d * newAspect + panX;
                camera.right = d * newAspect + panX;`,Ay="const coreGeo = new THREE.BoxGeometry(2, 4, 2);",Cy="group.add(core);",Ry=`group.add(core);

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
            });`,by=`const houseW = 4.32, houseH = 4, houseD = 2, roofY = houseH * 0.603;
            const houseShape = new THREE.Shape();
            houseShape.moveTo(-houseW / 2, roofY);
            houseShape.lineTo(0, houseH);
            houseShape.lineTo(houseW / 2, roofY);
            houseShape.lineTo(houseW / 2, 0);
            houseShape.lineTo(-houseW / 2, 0);
            houseShape.lineTo(-houseW / 2, roofY);
            const coreGeo = new THREE.ExtrudeGeometry(houseShape, { depth: houseD, bevelEnabled: false, curveSegments: 1 });
            coreGeo.translate(0, -houseH / 2, -houseD / 2);`,Py=`const group = new THREE.Group();
            scene.add(group);`,Ly=`const group = new THREE.Group();
            group.scale.setScalar(1.5);
            scene.add(group);`,Dy="core.position.y = 0.25;",Ny=`const coreBaseY = 1.7;
            core.position.y = coreBaseY;

            const shadowGeo = new THREE.CircleGeometry(2.2, 32);
            const shadowMat = new THREE.MeshBasicMaterial({
                color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false
            });
            const coreShadow = new THREE.Mesh(shadowGeo, shadowMat);
            coreShadow.rotation.x = -Math.PI / 2;
            coreShadow.position.y = -1.7; // 貼在平台表面（platform 頂面在 -1.75）
            coreShadow.renderOrder = 1;
            group.add(coreShadow);`,Iy="group.position.y = Math.sin(time * 0.5) * 0.2;",Uy=`group.position.y = Math.sin(time * 0.5) * 0.2;

                // 房子獨立於整體場景漂浮，脫離「釘在平台上」的感覺
                core.position.y = coreBaseY + Math.sin(time * 1.4) * 0.4;`,Fy=`
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
`,Oy=`
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
`;function By(){let t=vy;return t=t.replace("https://cdn.skypack.dev/three@0.136.0",_y),t=t.replace(xy,yy),t=t.replace(My,Ey),t=t.replace(Ty,wy),t=t.replace(Ay,by),t=t.replace(Cy,Ry),t=t.replace(Py,Ly),t=t.replace(Dy,Ny),t=t.replace(Iy,Uy),t=t.replace(/<script[^>]*cdn\.tailwindcss\.com[^>]*><\/script>/gi,""),t=t.replace(/<script[^>]*code\.iconify\.design[^>]*><\/script>/gi,""),t=t.replace(/<link[^>]*fonts\.googleapis\.com[^>]*>/gi,""),t=t.replace(/(<img[^>]*\s)src="https:\/\/images\.unsplash\.com[^"]*"/gi,"$1"),t=t.replace(/<\/head>/i,`${Fy}</head>`),t=t.replace(/<\/body>/i,`${Oy}</body>`),t}const zc=(t,e,n)=>Math.min(n,Math.max(e,t));function ky({hue:t=0,saturation:e=1,brightness:n=1,className:i,title:r="Logic Core"}){const s=it.useMemo(()=>By(),[]),a=zc(t,-180,180),o=zc(e,0,2),l=zc(n,.35,1.65),c=a===0&&o===1&&l===1?void 0:`hue-rotate(${a}deg) saturate(${o}) brightness(${l})`;return C.jsx("iframe",{className:i,title:r,srcDoc:s,loading:"eager",sandbox:"allow-scripts allow-same-origin",style:{display:"block",width:"100%",height:"100%",border:0,filter:c,background:"#050505"}})}function Qn({text:t,segments:e,speed:n=55,active:i=!0}){const r=e||[{text:t}],s=r.map(d=>d.text).join(""),[a,o]=it.useState(0);it.useEffect(()=>{if(!i){o(s.length);return}o(0);const d=setInterval(()=>{o(p=>p+1>=s.length?(clearInterval(d),s.length):p+1)},n);return()=>clearInterval(d)},[s,i,n]);const l=a>=s.length;let c=0;const h=r.map((d,p)=>{const _=c;c+=d.text.length;const y=Math.max(0,Math.min(d.text.length,a-_));return{className:d.className,nowrapWith:d.nowrapWith,str:d.text.slice(0,y)}}),f=[];return h.forEach((d,p)=>{d.nowrapWith&&f.length>0?f[f.length-1].push(d):f.push([d])}),C.jsxs("span",{"aria-label":s,children:[C.jsx("span",{"aria-hidden":"true",children:f.map((d,p)=>{const _=d.map((y,m)=>C.jsx("span",{className:y.className,children:y.str},m));return d.length>1?C.jsx("span",{style:{whiteSpace:"nowrap"},children:_},p):C.jsx("span",{className:d[0].className,children:d[0].str},p)})}),C.jsx("span",{className:`typewriter-cursor${l?" typewriter-cursor--done":""}`,"aria-hidden":"true"})]})}function Va({lines:t,startDelay:e=.5,active:n}){return C.jsx("div",{className:"reveal-lines",children:t.map((i,r)=>C.jsx("p",{className:"prose reveal-line",style:n?{animationDelay:`${e+r*.28}s`}:{opacity:1,animation:"none"},children:i},i))})}function eh({variant:t="converge",className:e=""}){const n=(i,r,s=46,a=26,o="iso-plate")=>C.jsx("path",{className:o,d:`M${i},${r} l${s/2},${-a/2} l${s/2},${a/2} l${-s/2},${a/2} Z`});return t==="scatter"?C.jsxs("svg",{className:`iso ${e}`,viewBox:"0 0 260 170",role:"img","aria-label":"流程散落在多個檔案之間",children:[n(20,60),n(96,34),n(150,92),n(60,118),n(178,52,46,26,"iso-plate iso-accent"),C.jsxs("g",{className:"iso-link",children:[C.jsx("path",{d:"M66,60 L119,34"}),C.jsx("path",{d:"M119,47 L173,92"}),C.jsx("path",{d:"M83,118 L142,92"}),C.jsx("path",{d:"M142,47 L201,52"})]})]}):C.jsxs("svg",{className:`iso ${e}`,viewBox:"0 0 260 170",role:"img","aria-label":"流程收斂成單一路徑",children:[n(24,118),n(78,96),n(132,74),n(186,52,46,26,"iso-plate iso-accent"),C.jsxs("g",{className:"iso-link",children:[C.jsx("path",{d:"M70,118 L101,96"}),C.jsx("path",{d:"M124,96 L155,74"}),C.jsx("path",{d:"M178,74 L209,52"})]})]})}const zy=["團隊每日花費大量時間，處理重複性資料搬移、人工核對與跨系統作業。","當優秀的人力被困在繁瑣的例行事務中，","不僅無形中消耗了工作熱情，也限制了團隊投入高價值業務開拓的空間。"];function Hy({active:t}){return C.jsxs("section",{className:"thesis slide-content",children:[C.jsx("div",{className:"rail",children:C.jsx("span",{className:"rail-label",children:"我的觀察"})}),C.jsx("div",{className:"thesis-body",children:C.jsxs("div",{className:"thesis-block",children:[C.jsx("h2",{className:"thesis-heading",children:C.jsx(Qn,{text:"作業重複的日常消耗",active:t})}),C.jsx(Va,{lines:zy,startDelay:.55,active:t})]})}),C.jsx("figure",{className:"thesis-figure",children:C.jsx(eh,{variant:"scatter",className:"iso-visible"})})]})}const Gy=["梳理跨部門與跨系統的銜接點，","串接半自動化輔助工具與自動化串流。","讓資料順暢流轉、減少無謂的人工轉手，","打造高效率且具備彈性的敏捷協作架構。"];function Vy({active:t}){return C.jsxs("section",{className:"thesis slide-content",children:[C.jsx("div",{className:"rail",children:C.jsx("span",{className:"rail-label",children:"我的觀察"})}),C.jsx("div",{className:"thesis-body",children:C.jsxs("div",{className:"thesis-block thesis-block--solution",children:[C.jsx("h2",{className:"thesis-heading",children:C.jsx(Qn,{text:"讓自動化成為營運與業務的常態",active:t})}),C.jsx(Va,{lines:Gy,startDelay:.55,active:t})]})}),C.jsx("figure",{className:"thesis-figure",children:C.jsx(eh,{variant:"converge",className:"iso-visible"})})]})}const Wy=["這幾個月觀察下來，發現有 IT 資源排程比較緊湊、","外部平台沒開放 API 等狀況，","亦或是一些操作細節與工作日常，需要每日不斷重複，","並且得長時間面對散落在各個檔案裡的資料。"];function jy({active:t}){return C.jsxs("section",{className:"ai slide-content",children:[C.jsx("div",{className:"rail",children:C.jsx("span",{className:"rail-label",children:"AI的重要性"})}),C.jsxs("div",{className:"ai-body",children:[C.jsx("h2",{className:"thesis-heading",children:C.jsx(Qn,{text:"痛點",active:t})}),C.jsx(Va,{lines:Wy,startDelay:.5,active:t})]}),C.jsx("figure",{className:`ai-figure ai-figure--image${t?" is-active":""}`,children:C.jsx("img",{src:"bottleneck.png",alt:"散落在各處的檔案與重複性作業"})})]})}const Xy=`attribute vec2 aPos;
void main(){ gl_Position = vec4(aPos,0.0,1.0); }`,$y=`precision highp float;
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
}`,Ip={speed:1,typeSpeed:1,motion:1,brightness:1,opacity:1,hue:0,saturation:1},nv={curve:[.115,.165],scanDensity:.44,scanDepth:.3,triadCss:3.2,grille:.34,chroma:1,bar:.045,flicker:.028,grain:.022,noise:0,vignette:.58,mono:0,gain:1.34,halo:.1,sheen:[1,.55,.58],room:[.058,.02,.024],background:"#120404",filtering:"linear",redrawMs:0},Yy="#120404",qy=()=>nv,Qt=(t,e="p")=>({t,c:e}),Hc=t=>"·".repeat(t),Dl=[[Qt("YFS OPERATIONS AI"),Qt("  v1.0","d")],[Qt("Claude Code","d"),Qt(" · HITL","d")],[],[Qt("Platform API "),Qt(`${Hc(4)} `,"d"),Qt("UNAVAILABLE","h")],[Qt("Match · Dedup · SKU "),Qt(`${Hc(2)} `,"d"),Qt("OK","a")],[Qt("Console "),Qt(`${Hc(3)} `,"d"),Qt("READY","a")],[],[Qt("no api required.")]],Up={p:{fill:"#ff5a68",glow:"rgba(209,15,39,0.90)"},d:{fill:"#7a2530",glow:"rgba(209,15,39,0.40)"},a:{fill:"#f5f2ee",glow:"rgba(245,242,238,0.92)"},h:{fill:"#ffb020",glow:"rgba(255,176,32,0.92)"}},th=t=>t.reduce((e,n)=>e+n.t.length,0),Fp=Dl.reduce((t,e)=>t+th(e),0),Gc=Math.max(...Dl.map(th)),Ky=1920,Zy=640,Op=24e5;function Bp(t,e,n){const i=t.createShader(e);if(!i)throw new Error("Unable to create CRT shader");if(t.shaderSource(i,n),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(i)??"CRT shader compilation failed");return i}function Qy(t,e,n){const i=e.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,premultipliedAlpha:!1});if(!i)throw new Error("CRT requires WebGL");const r=document.createElement("canvas"),s=r.getContext("2d");if(!s)throw new Error("CRT text canvas unavailable");const a=Bp(i,i.VERTEX_SHADER,Xy),o=Bp(i,i.FRAGMENT_SHADER,$y),l=i.createProgram();if(!l)throw new Error("Unable to create CRT program");if(i.attachShader(l,a),i.attachShader(l,o),i.linkProgram(l),!i.getProgramParameter(l,i.LINK_STATUS))throw new Error(i.getProgramInfoLog(l)??"CRT link failed");i.useProgram(l);const c=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,c),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),i.STATIC_DRAW);const h=i.getAttribLocation(l,"aPos");i.enableVertexAttribArray(h),i.vertexAttribPointer(h,2,i.FLOAT,!1,0,0);const f=j=>i.getUniformLocation(l,j),d=f("uTex"),p=f("uRes"),_=f("uTime"),y=f("uMotion"),m=f("uCurve"),u=f("uScan"),g=f("uScanDepth"),v=f("uTriad"),S=f("uGrille"),b=f("uChroma"),A=f("uBar"),w=f("uFlicker"),P=f("uGrain"),O=f("uNoise"),x=f("uVignette"),E=f("uMono"),G=f("uGain"),z=f("uHalo"),Y=f("uSheen"),J=f("uRoom"),W=i.createTexture();i.bindTexture(i.TEXTURE_2D,W),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.uniform1i(d,0);let Z=1,D=1,q=1,Q=1,ne=14,Se=20,Be=0,X=8,te=0,ue=0,ce=0,Ce=!1,we=!0,ke=0,We=-1,Oe=-1;const L=nv,Ut=performance.now(),He=()=>{i.useProgram(l),i.uniform2f(m,L.curve[0],L.curve[1]),i.uniform1f(g,L.scanDepth),i.uniform1f(S,L.grille),i.uniform1f(b,L.chroma),i.uniform1f(A,L.bar),i.uniform1f(w,L.flicker),i.uniform1f(P,L.grain),i.uniform1f(O,L.noise),i.uniform1f(x,L.vignette),i.uniform1f(E,L.mono),i.uniform1f(G,L.gain),i.uniform1f(z,L.halo),i.uniform3f(Y,L.sheen[0],L.sheen[1],L.sheen[2]),i.uniform3f(J,L.room[0],L.room[1],L.room[2]);const j=i.LINEAR;i.bindTexture(i.TEXTURE_2D,W),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,j),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,j)},Ge=()=>{Be=D*.135,Se=D*.74/Dl.length,ne=Math.max(5,Math.min(Se*.8,Z*.88/(Math.max(Gc,1)*.62))),s.font=`600 ${ne.toFixed(2)}px ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace`,X=s.measureText("M").width||ne*.6},Re=(j,K)=>{const V=Up[j];s.fillStyle=V.fill,s.shadowColor=K?V.glow:"transparent",s.shadowBlur=K?ne*.38:0},tt=j=>{s.setTransform(1,0,0,1,0,0),s.fillStyle=Yy,s.fillRect(0,0,Z,D),s.textAlign="left",s.textBaseline="top",s.font=`600 ${ne.toFixed(2)}px ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace`;let K=j,V=Be;te=Math.floor((Z-Gc*X)/2),ue=Be;for(const fe of Dl){const ae=th(fe),oe=j===1/0?1/0:Math.min(K,ae);let Ie=Math.floor((Z-Gc*X)/2),re=0;for(const pe of fe){let Te=pe.t;if(oe!==1/0){const Ae=oe-re;if(Ae<=0)break;Ae<Te.length&&(Te=Te.slice(0,Ae))}if(Te.length&&(Re(pe.c,!0),s.fillText(Te,Ie,V),Re(pe.c,!1),s.fillText(Te,Ie,V),Ie+=X*Te.length),re+=pe.t.length,oe!==1/0&&re>=oe)break}if(te=Ie,ue=V,oe!==1/0&&(K-=oe),V+=Se,oe!==1/0&&K<=0)break}},Pe=()=>{s.shadowColor=Up.p.glow,s.shadowBlur=ne*.42,s.fillStyle="#ffd8db",s.fillRect(te,ue+ne*.06,Math.max(X*.92,4),ne*.96),s.shadowBlur=0,s.fillRect(te,ue+ne*.06,Math.max(X*.92,4),ne*.96)},R=()=>{i.bindTexture(i.TEXTURE_2D,W),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,r),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),we=!1},M=()=>{const j=t.getBoundingClientRect();q=Math.max(1,j.width),Q=Math.max(1,j.height);const K=Math.min(typeof window>"u"?1:window.devicePixelRatio||1,2);let V=Math.max(Zy,Math.round(Math.min(q*K,Ky))),fe=Math.max(1,Math.round(V*Q/q));if(V*fe>Op){const Ie=Math.sqrt(Op/(V*fe));V=Math.round(V*Ie),fe=Math.round(fe*Ie)}const ae=V,oe=Math.max(1,Math.round(ae*fe/V));(e.width!==V||e.height!==fe)&&(e.width=V,e.height=fe),(r.width!==ae||r.height!==oe)&&(r.width=ae,r.height=oe,Z=ae,D=oe,Ge(),We=-1,Oe=-1,ke=0,we=!0),i.useProgram(l),i.viewport(0,0,V,fe),i.uniform2f(p,V,fe),i.uniform1f(u,Math.max(120,Math.min(Q*L.scanDensity,900))),i.uniform1f(v,Math.max(2,L.triadCss*V/q))},B=j=>{const K=Ce?1/0:Math.floor(ce),V=Math.floor((j-Ut)/420)%2===0?1:0,fe=Ce?V!==Oe:j-ke>42;K===We&&V===Oe&&!fe||!Ce&&j-ke<=42&&K===We&&V===Oe||(tt(K),V&&Pe(),ke=j,We=K,Oe=V,we=!0)};return He(),{resize:M,render(j){const K=n(),V=(j-Ut)*.001*K.speed;Ce||(ce+=4.4*K.typeSpeed,ce>=Fp&&(ce=Fp,Ce=!0)),B(j),we&&R(),i.useProgram(l),i.uniform1f(_,V),i.uniform1f(y,K.motion),i.drawArrays(i.TRIANGLES,0,3)},dispose(){i.deleteBuffer(c),i.deleteTexture(W),i.deleteProgram(l),i.deleteShader(a),i.deleteShader(o)}}}function Jy(t){const e=it.useRef(null),n=it.useRef(null),i=it.useRef({...Ip,...t});i.current={...Ip,...t},it.useEffect(()=>{const s=e.current,a=n.current;if(!s||!a)return;const o=Qy(s,a,()=>i.current);let l=0,c=!0;const h=()=>{o.resize(),o.render(performance.now())},f=_=>{o.render(_),l=c&&!document.hidden?requestAnimationFrame(f):0},d=new ResizeObserver(h),p=new IntersectionObserver(([_])=>{c=(_==null?void 0:_.isIntersecting)??!0,c&&!l&&(l=requestAnimationFrame(f)),!c&&l&&(cancelAnimationFrame(l),l=0)});return d.observe(s),p.observe(s),h(),l=requestAnimationFrame(f),()=>{l&&cancelAnimationFrame(l),d.disconnect(),p.disconnect(),o.dispose()}},[]);const r=i.current;return C.jsx("div",{ref:e,className:"crt-terminal",style:{background:qy().background,opacity:r.opacity,filter:`hue-rotate(${r.hue}deg) saturate(${r.saturation}) brightness(${r.brightness})`},children:C.jsx("canvas",{ref:n})})}const eS=["製作本地端工具，在操作過程補足半自動化的目標。","同仁只需要做機器無法替代的事，剩下交給工具自動處理。","後端串接統一的 Web 介面，操作集中、修改紀錄完整留存。","擺脫 IT 排程的瓶頸、快速看到效益，","也解決長時間比對資料的視覺疲勞。"];function tS({active:t}){return C.jsxs("section",{className:"ai ai--terminal slide-content",children:[C.jsx("div",{className:"rail",children:C.jsx("span",{className:"rail-label",children:"AI的重要性"})}),C.jsxs("div",{className:"ai-body",children:[C.jsx("h2",{className:"thesis-heading",children:C.jsx(Qn,{text:"自主開發：流程優化",active:t})}),C.jsx(Va,{lines:eS,startDelay:.5,active:t})]}),C.jsxs("figure",{className:"ai-figure",children:[t&&C.jsx(Jy,{speed:1,typeSpeed:1.05,motion:.85,hue:0,saturation:1,brightness:1,opacity:1}),C.jsxs("div",{className:"claude-badge",children:[C.jsx("img",{src:"claude-code-logo.png",alt:"Claude Code"}),C.jsx("span",{children:"Claude Code · Anthropic"})]})]})]})}const kp=["在等功能更新或是平台開放 API 的同時，","思考如何透過 AI 輔助，著手進行數位轉型。","把流程想清楚，AI 就能當那個幫你把想法接起來的工作夥伴。","將複雜的事情視覺化，最終一定能達到自動化。"];function nS({active:t}){const e=.5+kp.length*.28+.35;return C.jsxs("section",{className:"ai slide-content",children:[C.jsx("div",{className:"rail",children:C.jsx("span",{className:"rail-label",children:"AI的重要性"})}),C.jsxs("div",{className:"ai-body",children:[C.jsx("h2",{className:"thesis-heading",children:C.jsx(Qn,{segments:[{text:"善用"},{text:"Claude Code",className:"claude-accent",nowrapWith:!0},{text:"將想法變成即戰力"}],active:t})}),C.jsx(Va,{lines:kp,startDelay:.5,active:t}),C.jsxs("p",{className:"ai-closing reveal-line",style:t?{animationDelay:`${e}s`}:{opacity:1,animation:"none"},children:["藉由 ",C.jsx("b",{children:"CC"})," 輔助，加速自動化邁進。"]})]}),C.jsx("figure",{className:`ai-figure ai-figure--logo${t?" is-active":""}`,style:t?{"--ignite-delay":`${e}s`}:void 0,children:C.jsx("img",{src:"claude-code-logo.png",alt:"Claude Code"})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nh="169",iS=0,zp=1,rS=2,iv=1,sS=2,si=3,Yi=0,an=1,li=2,Vi=0,_s=1,Hp=2,Gp=3,Vp=4,aS=5,fr=100,oS=101,lS=102,cS=103,uS=104,fS=200,dS=201,hS=202,pS=203,vf=204,_f=205,mS=206,gS=207,vS=208,_S=209,xS=210,yS=211,SS=212,MS=213,ES=214,xf=0,yf=1,Sf=2,Rs=3,Mf=4,Ef=5,Tf=6,wf=7,rv=0,TS=1,wS=2,Wi=0,AS=1,CS=2,RS=3,bS=4,PS=5,LS=6,DS=7,sv=300,bs=301,Ps=302,Af=303,Cf=304,sc=306,Rf=1e3,gr=1001,bf=1002,Tn=1003,NS=1004,ho=1005,Bn=1006,Vc=1007,vr=1008,_i=1009,av=1010,ov=1011,Oa=1012,ih=1013,Ar=1014,fi=1015,Wa=1016,rh=1017,sh=1018,Ls=1020,lv=35902,cv=1021,uv=1022,kn=1023,fv=1024,dv=1025,xs=1026,Ds=1027,hv=1028,ah=1029,pv=1030,oh=1031,lh=1033,el=33776,tl=33777,nl=33778,il=33779,Pf=35840,Lf=35841,Df=35842,Nf=35843,If=36196,Uf=37492,Ff=37496,Of=37808,Bf=37809,kf=37810,zf=37811,Hf=37812,Gf=37813,Vf=37814,Wf=37815,jf=37816,Xf=37817,$f=37818,Yf=37819,qf=37820,Kf=37821,rl=36492,Zf=36494,Qf=36495,mv=36283,Jf=36284,ed=36285,td=36286,IS=3200,US=3201,gv=0,FS=1,Di="",Un="srgb",Ji="srgb-linear",ch="display-p3",ac="display-p3-linear",Nl="linear",ot="srgb",Il="rec709",Ul="p3",Nr=7680,Wp=519,OS=512,BS=513,kS=514,vv=515,zS=516,HS=517,GS=518,VS=519,nd=35044,jp="300 es",di=2e3,Fl=2001;class Os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=Math.PI/180,id=180/Math.PI;function ji(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function WS(t,e){return(t%e+e)%e}function Wc(t,e,n){return(1-n)*t+n*e}function Yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function et(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],_=i[8],y=r[0],m=r[3],u=r[6],g=r[1],v=r[4],S=r[7],b=r[2],A=r[5],w=r[8];return s[0]=a*y+o*g+l*b,s[3]=a*m+o*v+l*A,s[6]=a*u+o*S+l*w,s[1]=c*y+h*g+f*b,s[4]=c*m+h*v+f*A,s[7]=c*u+h*S+f*w,s[2]=d*y+p*g+_*b,s[5]=d*m+p*v+_*A,s[8]=d*u+p*S+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,p=c*s-a*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=d*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(jc.makeScale(e,n)),this}rotate(e){return this.premultiply(jc.makeRotation(-e)),this}translate(e,n){return this.premultiply(jc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jc=new Fe;function _v(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ol(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jS(){const t=Ol("canvas");return t.style.display="block",t}const Xp={};function al(t){t in Xp||(Xp[t]=!0,console.warn(t))}function XS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function $S(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function YS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $p=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[Ji]:{transfer:Nl,primaries:Il,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Un]:{transfer:ot,primaries:Il,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ac]:{transfer:Nl,primaries:Ul,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Yp),fromReference:t=>t.applyMatrix3($p)},[ch]:{transfer:ot,primaries:Ul,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Yp),fromReference:t=>t.applyMatrix3($p).convertLinearToSRGB()}},qS=new Set([Ji,ac]),Ze={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!qS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ys[e].toReference,r=Ys[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ys[t].primaries},getTransfer:function(t){return t===Di?Nl:Ys[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ys[e].luminanceCoefficients)}};function ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class KS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=Ol("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ys(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ys(n[i]/255)*255):n[i]=ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZS=0;class xv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($c(r[a].image)):s.push($c(r[a]))}else s=$c(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $c(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?KS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QS=0;class Xt extends Os{constructor(e=Xt.DEFAULT_IMAGE,n=Xt.DEFAULT_MAPPING,i=gr,r=gr,s=Bn,a=vr,o=kn,l=_i,c=Xt.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=ji(),this.name="",this.source=new xv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rf:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rf:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=sv;Xt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,b=(u+1)/2,A=(h+d)/4,w=(f+y)/4,P=(_+m)/4;return v>S&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=w/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-y)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends Os{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new xv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends JS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class yv extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eM extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ja{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(o===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==d||c!==p||h!==_){let m=1-o;const u=l*d+c*p+h*_+f*y,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),A=Math.atan2(b,u*g);m=Math.sin(m*A)/b,o=Math.sin(o*A)/b}const S=o*g;if(l=l*m+d*S,c=c*m+p*S,h=h*m+_*S,f=f*m+y*S,m===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+h*f+l*p-c*d,e[n+1]=l*_+h*d+c*f-o*p,e[n+2]=c*_+h*p+o*d-l*f,e[n+3]=h*_-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f-d*p*_;break;case"YXZ":this._x=d*h*f+c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f+d*p*_;break;case"ZXY":this._x=d*h*f-c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f-d*p*_;break;case"ZYX":this._x=d*h*f-c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f+d*p*_;break;case"YZX":this._x=d*h*f+c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f-d*p*_;break;case"XZY":this._x=d*h*f-c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yc=new U,qp=new ja;class Xa{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),mo.subVectors(this.max,qs),Ur.subVectors(e.a,qs),Fr.subVectors(e.b,qs),Or.subVectors(e.c,qs),Mi.subVectors(Fr,Ur),Ei.subVectors(Or,Fr),tr.subVectors(Ur,Or);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-tr.z,tr.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,tr.z,0,-tr.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-tr.y,tr.x,0];return!qc(n,Ur,Fr,Or,mo)||(n=[1,0,0,0,1,0,0,0,1],!qc(n,Ur,Fr,Or,mo))?!1:(go.crossVectors(Mi,Ei),n=[go.x,go.y,go.z],qc(n,Ur,Fr,Or,mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new U,new U,new U,new U,new U,new U,new U,new U],Pn=new U,po=new Xa,Ur=new U,Fr=new U,Or=new U,Mi=new U,Ei=new U,tr=new U,qs=new U,mo=new U,go=new U,nr=new U;function qc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){nr.fromArray(t,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=n.dot(nr),h=i.dot(nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const tM=new Xa,Ks=new U,Kc=new U;class oc{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):tM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const n=Ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(Kc)),this.expandByPoint(Ks.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new U,Zc=new U,vo=new U,Ti=new U,Qc=new U,_o=new U,Jc=new U;class Sv{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zc.copy(e).add(n).multiplyScalar(.5),vo.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(Zc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(vo),o=Ti.dot(this.direction),l=-Ti.dot(vo),c=Ti.lengthSq(),h=Math.abs(1-a*a);let f,d,p,_;if(h>0)if(f=a*l-o,d=a*o-l,_=s*h,f>=0)if(d>=-_)if(d<=_){const y=1/h;f*=y,d*=y,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zc).addScaledVector(vo,d),p}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Qc.subVectors(n,e),_o.subVectors(i,e),Jc.crossVectors(Qc,_o);let a=this.direction.dot(Jc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const l=o*this.direction.dot(_o.crossVectors(Ti,_o));if(l<0)return null;const c=o*this.direction.dot(Qc.cross(Ti));if(c<0||l+c>a)return null;const h=-o*Ti.dot(Jc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,a,o,l,c,h,f,d,p,_,y,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,d,p,_,y,m)}set(e,n,i,r,s,a,o,l,c,h,f,d,p,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),a=1/Br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*f,_=o*h,y=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-y*c,n[9]=-o*l,n[2]=y-d*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,_=c*h,y=c*f;n[0]=d+y*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=p*o-_,n[6]=y+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,_=c*h,y=c*f;n[0]=d-y*o,n[4]=-a*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*h,n[9]=y-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*f,_=o*h,y=o*f;n[0]=l*h,n[4]=_*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,y=o*c;n[0]=l*h,n[4]=y-d*f,n[8]=_*f+p,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*f+_,n[10]=d-y*f}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,y=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+y,n[5]=a*h,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*h,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nM,e,iM)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),wi.crossVectors(i,cn),wi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),wi.crossVectors(i,cn)),wi.normalize(),xo.crossVectors(cn,wi),r[0]=wi.x,r[4]=xo.x,r[8]=cn.x,r[1]=wi.y,r[5]=xo.y,r[9]=cn.y,r[2]=wi.z,r[6]=xo.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],_=i[2],y=i[6],m=i[10],u=i[14],g=i[3],v=i[7],S=i[11],b=i[15],A=r[0],w=r[4],P=r[8],O=r[12],x=r[1],E=r[5],G=r[9],z=r[13],Y=r[2],J=r[6],W=r[10],Z=r[14],D=r[3],q=r[7],Q=r[11],ne=r[15];return s[0]=a*A+o*x+l*Y+c*D,s[4]=a*w+o*E+l*J+c*q,s[8]=a*P+o*G+l*W+c*Q,s[12]=a*O+o*z+l*Z+c*ne,s[1]=h*A+f*x+d*Y+p*D,s[5]=h*w+f*E+d*J+p*q,s[9]=h*P+f*G+d*W+p*Q,s[13]=h*O+f*z+d*Z+p*ne,s[2]=_*A+y*x+m*Y+u*D,s[6]=_*w+y*E+m*J+u*q,s[10]=_*P+y*G+m*W+u*Q,s[14]=_*O+y*z+m*Z+u*ne,s[3]=g*A+v*x+S*Y+b*D,s[7]=g*w+v*E+S*J+b*q,s[11]=g*P+v*G+S*W+b*Q,s[15]=g*O+v*z+S*Z+b*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*p-i*l*p)+y*(+n*l*p-n*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+m*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*h-i*c*h)+u*(-r*o*h-n*l*f+n*o*d+r*a*f-i*a*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],u=e[15],g=f*m*c-y*d*c+y*l*p-o*m*p-f*l*u+o*d*u,v=_*d*c-h*m*c-_*l*p+a*m*p+h*l*u-a*d*u,S=h*y*c-_*f*c+_*o*p-a*y*p-h*o*u+a*f*u,b=_*f*l-h*y*l-_*o*d+a*y*d+h*o*m-a*f*m,A=n*g+i*v+r*S+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=g*w,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*u-i*d*u)*w,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*u+i*l*u)*w,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*w,e[4]=v*w,e[5]=(h*m*s-_*d*s+_*r*p-n*m*p-h*r*u+n*d*u)*w,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*u-n*l*u)*w,e[7]=(a*d*s-h*l*s+h*r*c-n*d*c-a*r*p+n*l*p)*w,e[8]=S*w,e[9]=(_*f*s-h*y*s-_*i*p+n*y*p+h*i*u-n*f*u)*w,e[10]=(a*y*s-_*o*s+_*i*c-n*y*c-a*i*u+n*o*u)*w,e[11]=(h*o*s-a*f*s-h*i*c+n*f*c+a*i*p-n*o*p)*w,e[12]=b*w,e[13]=(h*y*r-_*f*r+_*i*d-n*y*d-h*i*m+n*f*m)*w,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*m-n*o*m)*w,e[15]=(a*f*r-h*o*r+h*i*l-n*f*l-a*i*d+n*o*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,d=s*c,p=s*h,_=s*f,y=a*h,m=a*f,u=o*f,g=l*c,v=l*h,S=l*f,b=i.x,A=i.y,w=i.z;return r[0]=(1-(y+u))*b,r[1]=(p+S)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+u))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(_+v)*w,r[9]=(m-g)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const a=Br.set(r[4],r[5],r[6]).length(),o=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/s,h=1/a,f=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,n.setFromRotationMatrix(Ln),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=di){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(o===di)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Fl)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di){const l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(a-s),d=(n+e)*c,p=(i+r)*h;let _,y;if(o===di)_=(a+s)*f,y=-2*f;else if(o===Fl)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Br=new U,Ln=new ut,nM=new U(0,0,0),iM=new U(1,1,1),wi=new U,xo=new U,cn=new U,Kp=new ut,Zp=new ja;class Zn{constructor(e=0,n=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Mv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rM=0;const Qp=new U,kr=new ja,ni=new ut,yo=new U,Zs=new U,sM=new U,aM=new ja,Jp=new U(1,0,0),em=new U(0,1,0),tm=new U(0,0,1),nm={type:"added"},oM={type:"removed"},zr={type:"childadded",child:null},eu={type:"childremoved",child:null};class Pt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new U,n=new Zn,i=new ja,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Fe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,n){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yo.copy(e):yo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Zs,yo,this.up):ni.lookAt(yo,Zs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(ni),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nm),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(oM),eu.child=e,this.dispatchEvent(eu),eu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nm),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,sM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,aM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new U(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new U,ii=new U,tu=new U,ri=new U,Hr=new U,Gr=new U,im=new U,nu=new U,iu=new U,ru=new U,su=new gt,au=new gt,ou=new gt;class dn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ii.subVectors(i,n),tu.subVectors(e,n);const a=Dn.dot(Dn),o=Dn.dot(ii),l=Dn.dot(tu),c=ii.dot(ii),h=ii.dot(tu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return su.setScalar(0),au.setScalar(0),ou.setScalar(0),su.fromBufferAttribute(e,n),au.fromBufferAttribute(e,i),ou.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(su,s.x),a.addScaledVector(au,s.y),a.addScaledVector(ou,s.z),a}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ii.subVectors(e,n),Dn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return dn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Hr.subVectors(r,i),Gr.subVectors(s,i),nu.subVectors(e,i);const l=Hr.dot(nu),c=Gr.dot(nu);if(l<=0&&c<=0)return n.copy(i);iu.subVectors(e,r);const h=Hr.dot(iu),f=Gr.dot(iu);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Hr,a);ru.subVectors(e,s);const p=Hr.dot(ru),_=Gr.dot(ru);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Gr,o);const m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return im.subVectors(s,r),o=(f-h)/(f-h+(p-_)),n.copy(r).addScaledVector(im,o);const u=1/(m+y+d);return a=y*u,o=d*u,n.copy(i).addScaledVector(Hr,a).addScaledVector(Gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},So={h:0,s:0,l:0};function lu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=WS(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=lu(a,s,e+1/3),this.g=lu(a,s,e),this.b=lu(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=Ev[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Xc(e.r),this.g=Xc(e.g),this.b=Xc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Ze.fromWorkingColorSpace(kt.copy(this),e),Math.round(en(kt.r*255,0,255))*65536+Math.round(en(kt.g*255,0,255))*256+Math.round(en(kt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Un){Ze.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(So);const i=Wc(Ai.h,So.h,n),r=Wc(Ai.s,So.s,n),s=Wc(Ai.l,So.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Xe;Xe.NAMES=Ev;let lM=0;class Pr extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=_s,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vf,this.blendDst=_f,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vf&&(i.blendSrc=this.blendSrc),this.blendDst!==_f&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bl extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new U,Mo=new Ne;class Gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=nd,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Mo.fromBufferAttribute(this,n),Mo.applyMatrix3(e),this.setXY(n,Mo.x,Mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Yn(n,this.array)),n}setX(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Yn(n,this.array)),n}setY(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Yn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Yn(n,this.array)),n}setW(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nd&&(e.usage=this.usage),e}}class Tv extends Gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class wv extends Gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tt extends Gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let cM=0;const yn=new ut,cu=new Pt,Vr=new U,un=new Xa,Qs=new Xa,Ct=new U;class $t extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_v(e)?wv:Tv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(un.min,Qs.min),un.expandByPoint(Ct),Ct.addVectors(un.max,Qs.max),un.expandByPoint(Ct)):(un.expandByPoint(Qs.min),un.expandByPoint(Qs.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&(Vr.fromBufferAttribute(e,c),Ct.add(Vr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new U,l[P]=new U;const c=new U,h=new U,f=new U,d=new Ne,p=new Ne,_=new Ne,y=new U,m=new U;function u(P,O,x){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,O),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,O),_.fromBufferAttribute(s,x),h.sub(c),f.sub(c),p.sub(d),_.sub(d);const E=1/(p.x*_.y-_.x*p.y);isFinite(E)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(E),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(E),o[P].add(y),o[O].add(y),o[x].add(y),l[P].add(m),l[O].add(m),l[x].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,O=g.length;P<O;++P){const x=g[P],E=x.start,G=x.count;for(let z=E,Y=E+G;z<Y;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new U,S=new U,b=new U,A=new U;function w(P){b.fromBufferAttribute(r,P),A.copy(b);const O=o[P];v.copy(O),v.sub(b.multiplyScalar(b.dot(O))).normalize(),S.crossVectors(A,O);const E=S.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,E)}for(let P=0,O=g.length;P<O;++P){const x=g[P],E=x.start,G=x.count;for(let z=E,Y=E+G;z<Y;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let u=0;u<h;u++)d[_++]=c[p++]}return new Gn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $t,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rm=new ut,ir=new Sv,Eo=new oc,sm=new U,To=new U,wo=new U,Ao=new U,uu=new U,Co=new U,am=new U,Ro=new U;class pn extends Pt{constructor(e=new $t,n=new Bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Co.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(uu.fromBufferAttribute(f,e),a?Co.addScaledVector(uu,h):Co.addScaledVector(uu.sub(n),h))}n.add(Co)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(Eo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Eo,sm)===null||ir.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(s).invert(),ir.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const m=d[_],u=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=v;S<b;S+=3){const A=o.getX(S),w=o.getX(S+1),P=o.getX(S+2);r=bo(this,u,e,i,c,h,f,A,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const g=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);r=bo(this,a,e,i,c,h,f,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const m=d[_],u=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=v;S<b;S+=3){const A=S,w=S+1,P=S+2;r=bo(this,u,e,i,c,h,f,A,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const g=m,v=m+1,S=m+2;r=bo(this,a,e,i,c,h,f,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function uM(t,e,n,i,r,s,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Yi,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ro);return c<n.near||c>n.far?null:{distance:c,point:Ro.clone(),object:t}}function bo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,To),t.getVertexPosition(l,wo),t.getVertexPosition(c,Ao);const h=uM(t,e,n,i,To,wo,Ao,am);if(h){const f=new U;dn.getBarycoord(am,To,wo,Ao,f),r&&(h.uv=dn.getInterpolatedAttribute(r,o,l,c,f,new Ne)),s&&(h.uv1=dn.getInterpolatedAttribute(s,o,l,c,f,new Ne)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};dn.getNormal(To,wo,Ao,d.normal),h.face=d,h.barycoord=f}return h}class Bs extends $t{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(f,2));function _(y,m,u,g,v,S,b,A,w,P,O){const x=S/w,E=b/P,G=S/2,z=b/2,Y=A/2,J=w+1,W=P+1;let Z=0,D=0;const q=new U;for(let Q=0;Q<W;Q++){const ne=Q*E-z;for(let Se=0;Se<J;Se++){const Be=Se*x-G;q[y]=Be*g,q[m]=ne*v,q[u]=Y,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[u]=A>0?1:-1,h.push(q.x,q.y,q.z),f.push(Se/w),f.push(1-Q/P),Z+=1}}for(let Q=0;Q<P;Q++)for(let ne=0;ne<w;ne++){const Se=d+ne+J*Q,Be=d+ne+J*(Q+1),X=d+(ne+1)+J*(Q+1),te=d+(ne+1)+J*Q;l.push(Se,Be,te),l.push(Be,X,te),D+=6}o.addGroup(p,D,O),p+=D,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Ns(t[n]);for(const r in i)e[r]=i[r]}return e}function fM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Av(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const dM={clone:Ns,merge:Vt};var hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=fM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Cv extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new U,om=new Ne,lm=new Ne;class On extends Cv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,n){return this.getViewBounds(e,om,lm),n.subVectors(lm,om)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,jr=1;class mM extends Pt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(Wr,jr,e,n);r.layers=this.layers,this.add(r);const s=new On(Wr,jr,e,n);s.layers=this.layers,this.add(s);const a=new On(Wr,jr,e,n);a.layers=this.layers,this.add(a);const o=new On(Wr,jr,e,n);o.layers=this.layers,this.add(o);const l=new On(Wr,jr,e,n);l.layers=this.layers,this.add(l);const c=new On(Wr,jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Rv extends Xt{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:bs,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gM extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Rv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bs(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Vi});s.uniforms.tEquirect.value=n;const a=new pn(r,s),o=n.minFilter;return n.minFilter===vr&&(n.minFilter=Bn),new mM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const fu=new U,vM=new U,_M=new Fe;class cr{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fu.subVectors(i,n).cross(vM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_M.getNormalMatrix(e),r=this.coplanarPoint(fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new oc,Po=new U;class uh{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,a=new cr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],p=r[8],_=r[9],y=r[10],m=r[11],u=r[12],g=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-p,S-u).normalize(),i[1].setComponents(l+s,d+c,m+p,S+u).normalize(),i[2].setComponents(l+a,d+h,m+_,S+g).normalize(),i[3].setComponents(l-a,d-h,m-_,S-g).normalize(),i[4].setComponents(l-o,d-f,m-y,S-v).normalize(),n===di)i[5].setComponents(l+o,d+f,m+y,S+v).normalize();else if(n===Fl)i[5].setComponents(o,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xM(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],y=f[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const y=f[p];t.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class lc extends $t{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=n/l,p=[],_=[],y=[],m=[];for(let u=0;u<h;u++){const g=u*d-a;for(let v=0;v<c;v++){const S=v*f-s;_.push(S,-g,0),y.push(0,0,1),m.push(v/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,S=g+c*(u+1),b=g+1+c*(u+1),A=g+1+c*u;p.push(v,S,A),p.push(S,b,A)}this.setIndex(p),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}var yM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SM=`#ifdef USE_ALPHAHASH
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
#endif`,MM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AM=`#ifdef USE_AOMAP
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
#endif`,CM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RM=`#ifdef USE_BATCHING
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
#endif`,bM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NM=`#ifdef USE_IRIDESCENCE
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
#endif`,IM=`#ifdef USE_BUMPMAP
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
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,VM=`#define PI 3.141592653589793
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
} // validated`,WM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jM=`vec3 transformedNormal = objectNormal;
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
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KM="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZM=`
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
}`,QM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
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
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
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
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,hE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vE=`PhysicalMaterial material;
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
#endif`,_E=`struct PhysicalMaterial {
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
}`,xE=`
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
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
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ME=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bE=`#if defined( USE_POINTS_UV )
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
#endif`,PE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
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
#endif`,FE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GE=`#ifdef USE_NORMALMAP
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
#endif`,VE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r1=`float getShadowMask() {
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
}`,s1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a1=`#ifdef USE_SKINNING
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
#endif`,o1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#ifdef USE_TRANSMISSION
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y1=`uniform sampler2D t2D;
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`#include <common>
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
}`,A1=`#if DEPTH_PACKING == 3200
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
}`,C1=`#define DISTANCE
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
}`,R1=`#define DISTANCE
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
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`uniform float scale;
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
}`,D1=`uniform vec3 diffuse;
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
}`,N1=`#include <common>
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
}`,I1=`uniform vec3 diffuse;
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
}`,U1=`#define LAMBERT
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
}`,F1=`#define LAMBERT
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
}`,O1=`#define MATCAP
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
}`,B1=`#define MATCAP
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
}`,k1=`#define NORMAL
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
}`,z1=`#define NORMAL
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
}`,H1=`#define PHONG
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
}`,G1=`#define PHONG
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
}`,V1=`#define STANDARD
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
}`,W1=`#define STANDARD
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
}`,j1=`#define TOON
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
}`,X1=`#define TOON
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
}`,$1=`uniform float size;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,K1=`uniform vec3 color;
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
}`,Z1=`uniform float rotation;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:yM,alphahash_pars_fragment:SM,alphamap_fragment:MM,alphamap_pars_fragment:EM,alphatest_fragment:TM,alphatest_pars_fragment:wM,aomap_fragment:AM,aomap_pars_fragment:CM,batching_pars_vertex:RM,batching_vertex:bM,begin_vertex:PM,beginnormal_vertex:LM,bsdfs:DM,iridescence_fragment:NM,bumpmap_pars_fragment:IM,clipping_planes_fragment:UM,clipping_planes_pars_fragment:FM,clipping_planes_pars_vertex:OM,clipping_planes_vertex:BM,color_fragment:kM,color_pars_fragment:zM,color_pars_vertex:HM,color_vertex:GM,common:VM,cube_uv_reflection_fragment:WM,defaultnormal_vertex:jM,displacementmap_pars_vertex:XM,displacementmap_vertex:$M,emissivemap_fragment:YM,emissivemap_pars_fragment:qM,colorspace_fragment:KM,colorspace_pars_fragment:ZM,envmap_fragment:QM,envmap_common_pars_fragment:JM,envmap_pars_fragment:eE,envmap_pars_vertex:tE,envmap_physical_pars_fragment:dE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:rE,fog_fragment:sE,fog_pars_fragment:aE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:lE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:uE,lights_pars_begin:fE,lights_toon_fragment:hE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:vE,lights_physical_pars_fragment:_E,lights_fragment_begin:xE,lights_fragment_maps:yE,lights_fragment_end:SE,logdepthbuf_fragment:ME,logdepthbuf_pars_fragment:EE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:wE,map_fragment:AE,map_pars_fragment:CE,map_particle_fragment:RE,map_particle_pars_fragment:bE,metalnessmap_fragment:PE,metalnessmap_pars_fragment:LE,morphinstance_vertex:DE,morphcolor_vertex:NE,morphnormal_vertex:IE,morphtarget_pars_vertex:UE,morphtarget_vertex:FE,normal_fragment_begin:OE,normal_fragment_maps:BE,normal_pars_fragment:kE,normal_pars_vertex:zE,normal_vertex:HE,normalmap_pars_fragment:GE,clearcoat_normal_fragment_begin:VE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:jE,iridescence_pars_fragment:XE,opaque_fragment:$E,packing:YE,premultiplied_alpha_fragment:qE,project_vertex:KE,dithering_fragment:ZE,dithering_pars_fragment:QE,roughnessmap_fragment:JE,roughnessmap_pars_fragment:e1,shadowmap_pars_fragment:t1,shadowmap_pars_vertex:n1,shadowmap_vertex:i1,shadowmask_pars_fragment:r1,skinbase_vertex:s1,skinning_pars_vertex:a1,skinning_vertex:o1,skinnormal_vertex:l1,specularmap_fragment:c1,specularmap_pars_fragment:u1,tonemapping_fragment:f1,tonemapping_pars_fragment:d1,transmission_fragment:h1,transmission_pars_fragment:p1,uv_pars_fragment:m1,uv_pars_vertex:g1,uv_vertex:v1,worldpos_vertex:_1,background_vert:x1,background_frag:y1,backgroundCube_vert:S1,backgroundCube_frag:M1,cube_vert:E1,cube_frag:T1,depth_vert:w1,depth_frag:A1,distanceRGBA_vert:C1,distanceRGBA_frag:R1,equirect_vert:b1,equirect_frag:P1,linedashed_vert:L1,linedashed_frag:D1,meshbasic_vert:N1,meshbasic_frag:I1,meshlambert_vert:U1,meshlambert_frag:F1,meshmatcap_vert:O1,meshmatcap_frag:B1,meshnormal_vert:k1,meshnormal_frag:z1,meshphong_vert:H1,meshphong_frag:G1,meshphysical_vert:V1,meshphysical_frag:W1,meshtoon_vert:j1,meshtoon_frag:X1,points_vert:$1,points_frag:Y1,shadow_vert:q1,shadow_frag:K1,sprite_vert:Z1,sprite_frag:Q1},le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Xn={basic:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Vt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Vt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Vt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Vt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Vt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Vt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Vt([le.common,le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Vt([le.lights,le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Xn.physical={uniforms:Vt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Lo={r:0,b:0,g:0},sr=new Zn,J1=new ut;function eT(t,e,n,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function y(g){let v=!1;const S=_(g);S===null?u(o,l):S&&S.isColor&&(u(S,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const S=_(v);S&&(S.isCubeTexture||S.mapping===sc)?(h===void 0&&(h=new pn(new Bs(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Ns(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),sr.copy(v.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(J1.makeRotationFromEuler(sr)),h.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ot,(f!==S||d!==S.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new pn(new lc(2,2),new qi({name:"BackgroundMaterial",uniforms:Ns(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,v){g.getRGB(Lo,Av(t)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(g,v=1){o.set(g),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(o,l)},render:y,addToRenderList:m}}function tT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(x,E,G,z,Y){let J=!1;const W=f(z,G,E);s!==W&&(s=W,c(s.object)),J=p(x,z,G,Y),J&&_(x,z,G,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,S(x,E,G,z),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function h(x){return t.deleteVertexArray(x)}function f(x,E,G){const z=G.wireframe===!0;let Y=i[x.id];Y===void 0&&(Y={},i[x.id]=Y);let J=Y[E.id];J===void 0&&(J={},Y[E.id]=J);let W=J[z];return W===void 0&&(W=d(l()),J[z]=W),W}function d(x){const E=[],G=[],z=[];for(let Y=0;Y<n;Y++)E[Y]=0,G[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:G,attributeDivisors:z,object:x,attributes:{},index:null}}function p(x,E,G,z){const Y=s.attributes,J=E.attributes;let W=0;const Z=G.getAttributes();for(const D in Z)if(Z[D].location>=0){const Q=Y[D];let ne=J[D];if(ne===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),Q===void 0||Q.attribute!==ne||ne&&Q.data!==ne.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function _(x,E,G,z){const Y={},J=E.attributes;let W=0;const Z=G.getAttributes();for(const D in Z)if(Z[D].location>=0){let Q=J[D];Q===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const ne={};ne.attribute=Q,Q&&Q.data&&(ne.data=Q.data),Y[D]=ne,W++}s.attributes=Y,s.attributesNum=W,s.index=z}function y(){const x=s.newAttributes;for(let E=0,G=x.length;E<G;E++)x[E]=0}function m(x){u(x,0)}function u(x,E){const G=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;G[x]=1,z[x]===0&&(t.enableVertexAttribArray(x),z[x]=1),Y[x]!==E&&(t.vertexAttribDivisor(x,E),Y[x]=E)}function g(){const x=s.newAttributes,E=s.enabledAttributes;for(let G=0,z=E.length;G<z;G++)E[G]!==x[G]&&(t.disableVertexAttribArray(G),E[G]=0)}function v(x,E,G,z,Y,J,W){W===!0?t.vertexAttribIPointer(x,E,G,Y,J):t.vertexAttribPointer(x,E,G,z,Y,J)}function S(x,E,G,z){y();const Y=z.attributes,J=G.getAttributes(),W=E.defaultAttributeValues;for(const Z in J){const D=J[Z];if(D.location>=0){let q=Y[Z];if(q===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(q=x.instanceColor)),q!==void 0){const Q=q.normalized,ne=q.itemSize,Se=e.get(q);if(Se===void 0)continue;const Be=Se.buffer,X=Se.type,te=Se.bytesPerElement,ue=X===t.INT||X===t.UNSIGNED_INT||q.gpuType===ih;if(q.isInterleavedBufferAttribute){const ce=q.data,Ce=ce.stride,we=q.offset;if(ce.isInstancedInterleavedBuffer){for(let ke=0;ke<D.locationSize;ke++)u(D.location+ke,ce.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ke=0;ke<D.locationSize;ke++)m(D.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ke=0;ke<D.locationSize;ke++)v(D.location+ke,ne/D.locationSize,X,Q,Ce*te,(we+ne/D.locationSize*ke)*te,ue)}else{if(q.isInstancedBufferAttribute){for(let ce=0;ce<D.locationSize;ce++)u(D.location+ce,q.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ce=0;ce<D.locationSize;ce++)m(D.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ce=0;ce<D.locationSize;ce++)v(D.location+ce,ne/D.locationSize,X,Q,ne*te,ne/D.locationSize*ce*te,ue)}}else if(W!==void 0){const Q=W[Z];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(D.location,Q);break;case 3:t.vertexAttrib3fv(D.location,Q);break;case 4:t.vertexAttrib4fv(D.location,Q);break;default:t.vertexAttrib1fv(D.location,Q)}}}}g()}function b(){P();for(const x in i){const E=i[x];for(const G in E){const z=E[G];for(const Y in z)h(z[Y].object),delete z[Y];delete E[G]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const G in E){const z=E[G];for(const Y in z)h(z[Y].object),delete z[Y];delete E[G]}delete i[x.id]}function w(x){for(const E in i){const G=i[E];if(G[x.id]===void 0)continue;const z=G[x.id];for(const Y in z)h(z[Y].object),delete z[Y];delete G[x.id]}}function P(){O(),a=!0,s!==r&&(s=r,c(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:O,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function nT(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];n.update(p,i,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let _=0;for(let y=0;y<f;y++)_+=h[y];for(let y=0;y<d.length;y++)n.update(_,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function iT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==kn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==_i&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fi&&!P)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:b,maxSamples:A}}function rT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new cr,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?h(null):c();else{const g=s?0:i,v=g*4;let S=u.clippingState||null;l.value=S,S=h(_,d,v,p);for(let b=0;b!==v;++b)S[b]=n[b];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=p+y*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,S=p;v!==y;++v,S+=4)a.copy(f[v]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function sT(t){let e=new WeakMap;function n(a,o){return o===Af?a.mapping=bs:o===Cf&&(a.mapping=Ps),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Af||o===Cf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class fh extends Cv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,cm=[.125,.215,.35,.446,.526,.582],dr=20,du=new fh,um=new Xe;let hu=null,pu=0,mu=0,gu=!1;const ur=(1+Math.sqrt(5))/2,Xr=1/ur,fm=[new U(-ur,Xr,0),new U(ur,Xr,0),new U(-Xr,0,ur),new U(Xr,0,ur),new U(0,ur,-Xr),new U(0,ur,Xr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hu,pu,mu),this._renderer.xr.enabled=gu,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Wa,format:kn,colorSpace:Ji,depthBuffer:!1},r=hm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aT(s)),this._blurMaterial=oT(s,e,n)}return r}_compileMaterial(e){const n=new pn(this._lodPlanes[0],e);this._renderer.compile(n,du)}_sceneToCubeUV(e,n,i,r){const o=new On(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(um),h.toneMapping=Wi,h.autoClear=!1;const p=new Bl({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new pn(new Bs,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(um),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;Do(r,g*v,u>2?v:0,v,v),h.setRenderTarget(r),y&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===bs||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new pn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Do(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fm[(r-s-1)%fm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new pn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*dr-1),y=s/_,m=isFinite(s)?1+Math.floor(h*y):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const u=[];let g=0;for(let w=0;w<dr;++w){const P=w/y,O=Math.exp(-P*P/2);u.push(O),w===0?g+=O:w<m&&(g+=2*O)}for(let w=0;w<u.length;w++)u[w]=u[w]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const S=this._sizeLods[r],b=3*S*(r>v-fs?r-v+fs:0),A=4*(this._cubeSize-S);Do(n,b,A,3*S,2*S),l.setRenderTarget(n),l.render(f,du)}}function aT(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+cm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-fs?l=cm[a-t+fs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,y=3,m=2,u=1,g=new Float32Array(y*_*p),v=new Float32Array(m*_*p),S=new Float32Array(u*_*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,O=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];g.set(O,y*_*A),v.set(d,m*_*A);const x=[A,A,A,A,A,A];S.set(x,u*_*A)}const b=new $t;b.setAttribute("position",new Gn(g,y)),b.setAttribute("uv",new Gn(v,m)),b.setAttribute("faceIndex",new Gn(S,u)),e.push(b),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hm(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function oT(t,e,n){const i=new Float32Array(dr),r=new U(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function pm(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function mm(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function dh(){return`

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
	`}function lT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Af||l===Cf,h=l===bs||l===Ps;if(c||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new dm(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new dm(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function cT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&al("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uT(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,S=g.length;v<S;v+=3){const b=g[v+0],A=g[v+1],w=g[v+2];d.push(b,A,A,w,w,b)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const b=v+0,A=v+1,w=v+2;d.push(b,A,A,w,w,b)}}else return;const m=new(_v(d)?wv:Tv)(d,1);m.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function fT(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*a),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*a,_),n.update(p,i,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function f(d,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/a,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g];for(let g=0;g<y.length;g++)n.update(u,i,y[g])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function dT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hT(t,e,n){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let x=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*A*4*f),P=new yv(w,b,A,f);P.type=fi,P.needsUpdate=!0;const O=S*4;for(let E=0;E<f;E++){const G=u[E],z=g[E],Y=v[E],J=b*A*4*E;for(let W=0;W<G.count;W++){const Z=W*O;_===!0&&(r.fromBufferAttribute(G,W),w[J+Z+0]=r.x,w[J+Z+1]=r.y,w[J+Z+2]=r.z,w[J+Z+3]=0),y===!0&&(r.fromBufferAttribute(z,W),w[J+Z+4]=r.x,w[J+Z+5]=r.y,w[J+Z+6]=r.z,w[J+Z+7]=0),m===!0&&(r.fromBufferAttribute(Y,W),w[J+Z+8]=r.x,w[J+Z+9]=r.y,w[J+Z+10]=r.z,w[J+Z+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new Ne(b,A)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function pT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Pv extends Xt{constructor(e,n,i,r,s,a,o,l,c,h=xs){if(h!==xs&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xs&&(i=Ar),i===void 0&&h===Ds&&(i=Ls),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Lv=new Xt,gm=new Pv(1,1),Dv=new yv,Nv=new eM,Iv=new Rv,vm=[],_m=[],xm=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=vm[r];if(s===void 0&&(s=new Float32Array(r),vm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=_m[e];n===void 0&&(n=new Int32Array(e),_m[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function xT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Sm.set(i),t.uniformMatrix2fv(this.addr,!1,Sm),At(n,i)}}function yT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;ym.set(i),t.uniformMatrix3fv(this.addr,!1,ym),At(n,i)}}function ST(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;xm.set(i),t.uniformMatrix4fv(this.addr,!1,xm),At(n,i)}}function MT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function AT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function PT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(gm.compareFunction=vv,s=gm):s=Lv,n.setTexture2D(e||s,r)}function LT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Nv,r)}function DT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Iv,r)}function NT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Dv,r)}function IT(t){switch(t){case 5126:return mT;case 35664:return gT;case 35665:return vT;case 35666:return _T;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return wT;case 5125:return AT;case 36294:return CT;case 36295:return RT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return NT}}function UT(t,e){t.uniform1fv(this.addr,e)}function FT(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function OT(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function BT(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function kT(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function zT(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function HT(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function GT(t,e){t.uniform1iv(this.addr,e)}function VT(t,e){t.uniform2iv(this.addr,e)}function WT(t,e){t.uniform3iv(this.addr,e)}function jT(t,e){t.uniform4iv(this.addr,e)}function XT(t,e){t.uniform1uiv(this.addr,e)}function $T(t,e){t.uniform2uiv(this.addr,e)}function YT(t,e){t.uniform3uiv(this.addr,e)}function qT(t,e){t.uniform4uiv(this.addr,e)}function KT(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Lv,s[a])}function ZT(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Nv,s[a])}function QT(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Iv,s[a])}function JT(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Dv,s[a])}function ew(t){switch(t){case 5126:return UT;case 35664:return FT;case 35665:return OT;case 35666:return BT;case 35674:return kT;case 35675:return zT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return WT;case 35669:case 35673:return jT;case 5125:return XT;case 36294:return $T;case 36295:return YT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}class tw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=IT(n.type)}}class nw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ew(n.type)}}class iw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function Mm(t,e){t.seq.push(e),t.map[e.id]=e}function rw(t,e,n){const i=t.name,r=i.length;for(vu.lastIndex=0;;){const s=vu.exec(i),a=vu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Mm(n,c===void 0?new tw(o,t,e):new nw(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new iw(o),Mm(n,f)),n=f}}}class ol{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);rw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Em(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const sw=37297;let aw=0;function ow(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function lw(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===Ul&&n===Il?i="LinearDisplayP3ToLinearSRGB":e===Il&&n===Ul&&(i="LinearSRGBToLinearDisplayP3"),t){case Ji:case ac:return[i,"LinearTransferOETF"];case Un:case ch:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Tm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ow(t.getShaderSource(e),a)}else return r}function cw(t,e){const n=lw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function uw(t,e){let n;switch(e){case AS:n="Linear";break;case CS:n="Reinhard";break;case RS:n="Cineon";break;case bS:n="ACESFilmic";break;case LS:n="AgX";break;case DS:n="Neutral";break;case PS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const No=new U;function fw(){Ze.getLuminanceCoefficients(No);const t=No.x.toFixed(4),e=No.y.toFixed(4),n=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function hw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function pw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function la(t){return t!==""}function wm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Am(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mw=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(t){return t.replace(mw,vw)}const gw=new Map;function vw(t,e){let n=Ue[e];if(n===void 0){const i=gw.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rd(n)}const _w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(t){return t.replace(_w,xw)}function xw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function yw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===iv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Sw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case bs:case Ps:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function Ew(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case rv:e="ENVMAP_BLENDING_MULTIPLY";break;case TS:e="ENVMAP_BLENDING_MIX";break;case wS:e="ENVMAP_BLENDING_ADD";break}return e}function Tw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ww(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=yw(n),c=Sw(n),h=Mw(n),f=Ew(n),d=Tw(n),p=dw(n),_=hw(s),y=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(la).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(la).join(`
`),u.length>0&&(u+=`
`)):(m=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),u=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Wi?uw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,cw("linearToOutputTexel",n.outputColorSpace),fw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),a=rd(a),a=wm(a,n),a=Am(a,n),o=rd(o),o=wm(o,n),o=Am(o,n),a=Cm(a),o=Cm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+m+a,S=g+u+o,b=Em(r,r.VERTEX_SHADER,v),A=Em(r,r.FRAGMENT_SHADER,S);r.attachShader(y,b),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(E){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(b).trim(),Y=r.getShaderInfoLog(A).trim();let J=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,A);else{const Z=Tm(r,b,"vertex"),D=Tm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+G+`
`+Z+`
`+D)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||Y==="")&&(W=!1);W&&(E.diagnostics={runnable:J,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(b),r.deleteShader(A),P=new ol(r,y),O=pw(r,y)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let O;this.getAttributes=function(){return O===void 0&&w(this),O};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,sw)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=A,this}let Aw=0;class Cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Rw(e),n.set(e,i)),i}}class Rw{constructor(e){this.id=Aw++,this.code=e,this.usedTimes=0}}function bw(t,e,n,i,r,s,a){const o=new Mv,l=new Cw,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,E,G,z,Y){const J=z.fog,W=Y.geometry,Z=x.isMeshStandardMaterial?z.environment:null,D=(x.isMeshStandardMaterial?n:e).get(x.envMap||Z),q=D&&D.mapping===sc?D.image.height:null,Q=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Se=ne!==void 0?ne.length:0;let Be=0;W.morphAttributes.position!==void 0&&(Be=1),W.morphAttributes.normal!==void 0&&(Be=2),W.morphAttributes.color!==void 0&&(Be=3);let X,te,ue,ce;if(Q){const Zt=Xn[Q];X=Zt.vertexShader,te=Zt.fragmentShader}else X=x.vertexShader,te=x.fragmentShader,l.update(x),ue=l.getVertexShaderID(x),ce=l.getFragmentShaderID(x);const Ce=t.getRenderTarget(),we=Y.isInstancedMesh===!0,ke=Y.isBatchedMesh===!0,We=!!x.map,Oe=!!x.matcap,L=!!D,Ut=!!x.aoMap,He=!!x.lightMap,Ge=!!x.bumpMap,Re=!!x.normalMap,tt=!!x.displacementMap,Pe=!!x.emissiveMap,R=!!x.metalnessMap,M=!!x.roughnessMap,B=x.anisotropy>0,j=x.clearcoat>0,K=x.dispersion>0,V=x.iridescence>0,fe=x.sheen>0,ae=x.transmission>0,oe=B&&!!x.anisotropyMap,Ie=j&&!!x.clearcoatMap,re=j&&!!x.clearcoatNormalMap,pe=j&&!!x.clearcoatRoughnessMap,Te=V&&!!x.iridescenceMap,Ae=V&&!!x.iridescenceThicknessMap,_e=fe&&!!x.sheenColorMap,Ve=fe&&!!x.sheenRoughnessMap,De=!!x.specularMap,nt=!!x.specularColorMap,N=!!x.specularIntensityMap,me=ae&&!!x.transmissionMap,$=ae&&!!x.thicknessMap,ee=!!x.gradientMap,de=!!x.alphaMap,ge=x.alphaTest>0,je=!!x.alphaHash,xt=!!x.extensions;let Kt=Wi;x.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Kt=t.toneMapping);const Ye={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:te,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:ke,batchingColor:ke&&Y._colorsTexture!==null,instancing:we,instancingColor:we&&Y.instanceColor!==null,instancingMorph:we&&Y.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Ji,alphaToCoverage:!!x.alphaToCoverage,map:We,matcap:Oe,envMap:L,envMapMode:L&&D.mapping,envMapCubeUVHeight:q,aoMap:Ut,lightMap:He,bumpMap:Ge,normalMap:Re,displacementMap:p&&tt,emissiveMap:Pe,normalMapObjectSpace:Re&&x.normalMapType===FS,normalMapTangentSpace:Re&&x.normalMapType===gv,metalnessMap:R,roughnessMap:M,anisotropy:B,anisotropyMap:oe,clearcoat:j,clearcoatMap:Ie,clearcoatNormalMap:re,clearcoatRoughnessMap:pe,dispersion:K,iridescence:V,iridescenceMap:Te,iridescenceThicknessMap:Ae,sheen:fe,sheenColorMap:_e,sheenRoughnessMap:Ve,specularMap:De,specularColorMap:nt,specularIntensityMap:N,transmission:ae,transmissionMap:me,thicknessMap:$,gradientMap:ee,opaque:x.transparent===!1&&x.blending===_s&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:ge,alphaHash:je,combine:x.combine,mapUv:We&&m(x.map.channel),aoMapUv:Ut&&m(x.aoMap.channel),lightMapUv:He&&m(x.lightMap.channel),bumpMapUv:Ge&&m(x.bumpMap.channel),normalMapUv:Re&&m(x.normalMap.channel),displacementMapUv:tt&&m(x.displacementMap.channel),emissiveMapUv:Pe&&m(x.emissiveMap.channel),metalnessMapUv:R&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:oe&&m(x.anisotropyMap.channel),clearcoatMapUv:Ie&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&m(x.sheenRoughnessMap.channel),specularMapUv:De&&m(x.specularMap.channel),specularColorMapUv:nt&&m(x.specularColorMap.channel),specularIntensityMapUv:N&&m(x.specularIntensityMap.channel),transmissionMapUv:me&&m(x.transmissionMap.channel),thicknessMapUv:$&&m(x.thicknessMap.channel),alphaMapUv:de&&m(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Re||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(We||de),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:Kt,decodeVideoTexture:We&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===li,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&x.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function g(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const G in x.defines)E.push(G),E.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(v(E,x),S(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),x.push(o.mask)}function b(x){const E=y[x.type];let G;if(E){const z=Xn[E];G=dM.clone(z.uniforms)}else G=x.uniforms;return G}function A(x,E){let G;for(let z=0,Y=h.length;z<Y;z++){const J=h[z];if(J.cacheKey===E){G=J,++G.usedTimes;break}}return G===void 0&&(G=new ww(t,E,x,s),h.push(G)),G}function w(x){if(--x.usedTimes===0){const E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function P(x){l.remove(x)}function O(){l.dispose()}return{getParameters:u,getProgramCacheKey:g,getUniforms:b,acquireProgram:A,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:O}}function Pw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Lw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,p,_,y,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=m),e++,u}function o(f,d,p,_,y,m){const u=a(f,d,p,_,y,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,d,p,_,y,m){const u=a(f,d,p,_,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||Lw),i.length>1&&i.sort(d||bm),r.length>1&&r.sort(d||bm)}function h(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Dw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Pm,t.set(i,[a])):r>=s.length?(a=new Pm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Nw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Xe};break;case"SpotLight":n={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function Iw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Uw=0;function Fw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ow(t){const e=new Nw,n=Iw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new ut,a=new ut;function o(c){let h=0,f=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,_=0,y=0,m=0,u=0,g=0,v=0,S=0,b=0,A=0,w=0;c.sort(Fw);for(let O=0,x=c.length;O<x;O++){const E=c[O],G=E.color,z=E.intensity,Y=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=G.r*z,f+=G.g*z,d+=G.b*z;else if(E.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(E.sh.coefficients[W],z);w++}else if(E.isDirectionalLight){const W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Z=E.shadow,D=n.get(E);D.shadowIntensity=Z.intensity,D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize=Z.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=E.shadow.matrix,g++}i.directional[p]=W,p++}else if(E.isSpotLight){const W=e.get(E);W.position.setFromMatrixPosition(E.matrixWorld),W.color.copy(G).multiplyScalar(z),W.distance=Y,W.coneCos=Math.cos(E.angle),W.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),W.decay=E.decay,i.spot[y]=W;const Z=E.shadow;if(E.map&&(i.spotLightMap[b]=E.map,b++,Z.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[y]=Z.matrix,E.castShadow){const D=n.get(E);D.shadowIntensity=Z.intensity,D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize=Z.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=J,S++}y++}else if(E.isRectAreaLight){const W=e.get(E);W.color.copy(G).multiplyScalar(z),W.halfWidth.set(E.width*.5,0,0),W.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=W,m++}else if(E.isPointLight){const W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),W.distance=E.distance,W.decay=E.decay,E.castShadow){const Z=E.shadow,D=n.get(E);D.shadowIntensity=Z.intensity,D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize=Z.mapSize,D.shadowCameraNear=Z.camera.near,D.shadowCameraFar=Z.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=E.shadow.matrix,v++}i.point[_]=W,_++}else if(E.isHemisphereLight){const W=e.get(E);W.skyColor.copy(E.color).multiplyScalar(z),W.groundColor.copy(E.groundColor).multiplyScalar(z),i.hemi[u]=W,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==g||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==b||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,P.directionalLength=p,P.pointLength=_,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=g,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=b,P.numLightProbes=w,i.version=Uw++)}function l(c,h){let f=0,d=0,p=0,_=0,y=0;const m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Lm(t){const e=new Ow(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Bw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Lm(t),e.set(r,[o])):s>=a.length?(o=new Lm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class kw extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zw extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gw=`uniform sampler2D shadow_pass;
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
}`;function Vw(t,e,n){let i=new uh;const r=new Ne,s=new Ne,a=new gt,o=new kw({depthPacking:US}),l=new zw,c={},h=n.maxTextureSize,f={[Yi]:an,[an]:Yi,[li]:li},d=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Hw,fragmentShader:Gw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new $t;_.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new pn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iv;let u=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const O=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Vi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=u!==si&&this.type===si,Y=u===si&&this.type!==si;for(let J=0,W=A.length;J<W;J++){const Z=A[J],D=Z.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const q=D.getFrameExtents();if(r.multiply(q),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null||z===!0||Y===!0){const ne=this.type!==si?{minFilter:Tn,magFilter:Tn}:{};D.map!==null&&D.map.dispose(),D.map=new Cr(r.x,r.y,ne),D.map.texture.name=Z.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Q=D.getViewportCount();for(let ne=0;ne<Q;ne++){const Se=D.getViewport(ne);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),G.viewport(a),D.updateMatrices(Z,ne),i=D.getFrustum(),S(w,P,D.camera,Z,this.type)}D.isPointLightShadow!==!0&&this.type===si&&g(D,P),D.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(O,x,E)};function g(A,w){const P=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,P,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,P,p,y,null)}function v(A,w,P,O){let x=null;const E=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)x=E;else if(x=P.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=x.uuid,z=w.uuid;let Y=c[G];Y===void 0&&(Y={},c[G]=Y);let J=Y[z];J===void 0&&(J=x.clone(),Y[z]=J,w.addEventListener("dispose",b)),x=J}if(x.visible=w.visible,x.wireframe=w.wireframe,O===si?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=t.properties.get(x);G.light=P}return x}function S(A,w,P,O,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===si)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const z=e.update(A),Y=A.material;if(Array.isArray(Y)){const J=z.groups;for(let W=0,Z=J.length;W<Z;W++){const D=J[W],q=Y[D.materialIndex];if(q&&q.visible){const Q=v(A,q,O,x);A.onBeforeShadow(t,A,w,P,z,Q,D),t.renderBufferDirect(P,null,z,Q,A,D),A.onAfterShadow(t,A,w,P,z,Q,D)}}}else if(Y.visible){const J=v(A,Y,O,x);A.onBeforeShadow(t,A,w,P,z,J,null),t.renderBufferDirect(P,null,z,J,A,null),A.onAfterShadow(t,A,w,P,z,J,null)}}const G=A.children;for(let z=0,Y=G.length;z<Y;z++)S(G[z],w,P,O,x)}function b(A){A.target.removeEventListener("dispose",b);for(const P in c){const O=c[P],x=A.target.uuid;x in O&&(O[x].dispose(),delete O[x])}}}const Ww={[xf]:yf,[Sf]:Tf,[Mf]:wf,[Rs]:Ef,[yf]:xf,[Tf]:Sf,[wf]:Mf,[Ef]:Rs};function jw(t){function e(){let N=!1;const me=new gt;let $=null;const ee=new gt(0,0,0,0);return{setMask:function(de){$!==de&&!N&&(t.colorMask(de,de,de,de),$=de)},setLocked:function(de){N=de},setClear:function(de,ge,je,xt,Kt){Kt===!0&&(de*=xt,ge*=xt,je*=xt),me.set(de,ge,je,xt),ee.equals(me)===!1&&(t.clearColor(de,ge,je,xt),ee.copy(me))},reset:function(){N=!1,$=null,ee.set(-1,0,0,0)}}}function n(){let N=!1,me=!1,$=null,ee=null,de=null;return{setReversed:function(ge){me=ge},setTest:function(ge){ge?ue(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(ge){$!==ge&&!N&&(t.depthMask(ge),$=ge)},setFunc:function(ge){if(me&&(ge=Ww[ge]),ee!==ge){switch(ge){case xf:t.depthFunc(t.NEVER);break;case yf:t.depthFunc(t.ALWAYS);break;case Sf:t.depthFunc(t.LESS);break;case Rs:t.depthFunc(t.LEQUAL);break;case Mf:t.depthFunc(t.EQUAL);break;case Ef:t.depthFunc(t.GEQUAL);break;case Tf:t.depthFunc(t.GREATER);break;case wf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=ge}},setLocked:function(ge){N=ge},setClear:function(ge){de!==ge&&(t.clearDepth(ge),de=ge)},reset:function(){N=!1,$=null,ee=null,de=null}}}function i(){let N=!1,me=null,$=null,ee=null,de=null,ge=null,je=null,xt=null,Kt=null;return{setTest:function(Ye){N||(Ye?ue(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Ye){me!==Ye&&!N&&(t.stencilMask(Ye),me=Ye)},setFunc:function(Ye,Zt,Jn){($!==Ye||ee!==Zt||de!==Jn)&&(t.stencilFunc(Ye,Zt,Jn),$=Ye,ee=Zt,de=Jn)},setOp:function(Ye,Zt,Jn){(ge!==Ye||je!==Zt||xt!==Jn)&&(t.stencilOp(Ye,Zt,Jn),ge=Ye,je=Zt,xt=Jn)},setLocked:function(Ye){N=Ye},setClear:function(Ye){Kt!==Ye&&(t.clearStencil(Ye),Kt=Ye)},reset:function(){N=!1,me=null,$=null,ee=null,de=null,ge=null,je=null,xt=null,Kt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,d=[],p=null,_=!1,y=null,m=null,u=null,g=null,v=null,S=null,b=null,A=new Xe(0,0,0),w=0,P=!1,O=null,x=null,E=null,G=null,z=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,W=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=W>=2);let D=null,q={};const Q=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),Se=new gt().fromArray(Q),Be=new gt().fromArray(ne);function X(N,me,$,ee){const de=new Uint8Array(4),ge=t.createTexture();t.bindTexture(N,ge),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<$;je++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(me+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ge}const te={};te[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ue(t.DEPTH_TEST),s.setFunc(Rs),He(!1),Ge(zp),ue(t.CULL_FACE),L(Vi);function ue(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function ce(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Ce(N,me){return h[N]!==me?(t.bindFramebuffer(N,me),h[N]=me,N===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=me),N===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=me),!0):!1}function we(N,me){let $=d,ee=!1;if(N){$=f.get(me),$===void 0&&($=[],f.set(me,$));const de=N.textures;if($.length!==de.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,je=de.length;ge<je;ge++)$[ge]=t.COLOR_ATTACHMENT0+ge;$.length=de.length,ee=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,ee=!0);ee&&t.drawBuffers($)}function ke(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const We={[fr]:t.FUNC_ADD,[oS]:t.FUNC_SUBTRACT,[lS]:t.FUNC_REVERSE_SUBTRACT};We[cS]=t.MIN,We[uS]=t.MAX;const Oe={[fS]:t.ZERO,[dS]:t.ONE,[hS]:t.SRC_COLOR,[vf]:t.SRC_ALPHA,[xS]:t.SRC_ALPHA_SATURATE,[vS]:t.DST_COLOR,[mS]:t.DST_ALPHA,[pS]:t.ONE_MINUS_SRC_COLOR,[_f]:t.ONE_MINUS_SRC_ALPHA,[_S]:t.ONE_MINUS_DST_COLOR,[gS]:t.ONE_MINUS_DST_ALPHA,[yS]:t.CONSTANT_COLOR,[SS]:t.ONE_MINUS_CONSTANT_COLOR,[MS]:t.CONSTANT_ALPHA,[ES]:t.ONE_MINUS_CONSTANT_ALPHA};function L(N,me,$,ee,de,ge,je,xt,Kt,Ye){if(N===Vi){_===!0&&(ce(t.BLEND),_=!1);return}if(_===!1&&(ue(t.BLEND),_=!0),N!==aS){if(N!==y||Ye!==P){if((m!==fr||v!==fr)&&(t.blendEquation(t.FUNC_ADD),m=fr,v=fr),Ye)switch(N){case _s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hp:t.blendFunc(t.ONE,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}u=null,g=null,S=null,b=null,A.set(0,0,0),w=0,y=N,P=Ye}return}de=de||me,ge=ge||$,je=je||ee,(me!==m||de!==v)&&(t.blendEquationSeparate(We[me],We[de]),m=me,v=de),($!==u||ee!==g||ge!==S||je!==b)&&(t.blendFuncSeparate(Oe[$],Oe[ee],Oe[ge],Oe[je]),u=$,g=ee,S=ge,b=je),(xt.equals(A)===!1||Kt!==w)&&(t.blendColor(xt.r,xt.g,xt.b,Kt),A.copy(xt),w=Kt),y=N,P=!1}function Ut(N,me){N.side===li?ce(t.CULL_FACE):ue(t.CULL_FACE);let $=N.side===an;me&&($=!$),He($),N.blending===_s&&N.transparent===!1?L(Vi):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const ee=N.stencilWrite;a.setTest(ee),ee&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),tt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(N){O!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),O=N)}function Ge(N){N!==iS?(ue(t.CULL_FACE),N!==x&&(N===zp?t.cullFace(t.BACK):N===rS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),x=N}function Re(N){N!==E&&(J&&t.lineWidth(N),E=N)}function tt(N,me,$){N?(ue(t.POLYGON_OFFSET_FILL),(G!==me||z!==$)&&(t.polygonOffset(me,$),G=me,z=$)):ce(t.POLYGON_OFFSET_FILL)}function Pe(N){N?ue(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function R(N){N===void 0&&(N=t.TEXTURE0+Y-1),D!==N&&(t.activeTexture(N),D=N)}function M(N,me,$){$===void 0&&(D===null?$=t.TEXTURE0+Y-1:$=D);let ee=q[$];ee===void 0&&(ee={type:void 0,texture:void 0},q[$]=ee),(ee.type!==N||ee.texture!==me)&&(D!==$&&(t.activeTexture($),D=$),t.bindTexture(N,me||te[N]),ee.type=N,ee.texture=me)}function B(){const N=q[D];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(N){Se.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Se.copy(N))}function _e(N){Be.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Be.copy(N))}function Ve(N,me){let $=l.get(me);$===void 0&&($=new WeakMap,l.set(me,$));let ee=$.get(N);ee===void 0&&(ee=t.getUniformBlockIndex(me,N.name),$.set(N,ee))}function De(N,me){const ee=l.get(me).get(N);o.get(me)!==ee&&(t.uniformBlockBinding(me,ee,N.__bindingPointIndex),o.set(me,ee))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,q={},h={},f=new WeakMap,d=[],p=null,_=!1,y=null,m=null,u=null,g=null,v=null,S=null,b=null,A=new Xe(0,0,0),w=0,P=!1,O=null,x=null,E=null,G=null,z=null,Se.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ue,disable:ce,bindFramebuffer:Ce,drawBuffers:we,useProgram:ke,setBlending:L,setMaterial:Ut,setFlipSided:He,setCullFace:Ge,setLineWidth:Re,setPolygonOffset:tt,setScissorTest:Pe,activeTexture:R,bindTexture:M,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:pe,texImage3D:Te,updateUBOMapping:Ve,uniformBlockBinding:De,texStorage2D:Ie,texStorage3D:re,texSubImage2D:V,texSubImage3D:fe,compressedTexSubImage2D:ae,compressedTexSubImage3D:oe,scissor:Ae,viewport:_e,reset:nt}}function Dm(t,e,n,i){const r=Xw(i);switch(n){case cv:return t*e;case fv:return t*e;case dv:return t*e*2;case hv:return t*e/r.components*r.byteLength;case ah:return t*e/r.components*r.byteLength;case pv:return t*e*2/r.components*r.byteLength;case oh:return t*e*2/r.components*r.byteLength;case uv:return t*e*3/r.components*r.byteLength;case kn:return t*e*4/r.components*r.byteLength;case lh:return t*e*4/r.components*r.byteLength;case el:case tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lf:case Nf:return Math.max(t,16)*Math.max(e,8)/4;case Pf:case Df:return Math.max(t,8)*Math.max(e,8)/2;case If:case Uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ff:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case kf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case rl:case Zf:case Qf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case mv:case Jf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ed:case td:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Xw(t){switch(t){case _i:case av:return{byteLength:1,components:1};case Oa:case ov:case Wa:return{byteLength:2,components:1};case rh:case sh:return{byteLength:2,components:4};case Ar:case ih:case fi:return{byteLength:4,components:1};case lv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function $w(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return p?new OffscreenCanvas(R,M):Ol("canvas")}function y(R,M,B){let j=1;const K=Pe(R);if((K.width>B||K.height>B)&&(j=B/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const V=Math.floor(j*K.width),fe=Math.floor(j*K.height);f===void 0&&(f=_(V,fe));const ae=M?_(V,fe):f;return ae.width=V,ae.height=fe,ae.getContext("2d").drawImage(R,0,0,V,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+fe+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Tn&&R.minFilter!==Bn}function u(R){t.generateMipmap(R)}function g(R,M,B,j,K=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let V=M;if(M===t.RED&&(B===t.FLOAT&&(V=t.R32F),B===t.HALF_FLOAT&&(V=t.R16F),B===t.UNSIGNED_BYTE&&(V=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(V=t.R8UI),B===t.UNSIGNED_SHORT&&(V=t.R16UI),B===t.UNSIGNED_INT&&(V=t.R32UI),B===t.BYTE&&(V=t.R8I),B===t.SHORT&&(V=t.R16I),B===t.INT&&(V=t.R32I)),M===t.RG&&(B===t.FLOAT&&(V=t.RG32F),B===t.HALF_FLOAT&&(V=t.RG16F),B===t.UNSIGNED_BYTE&&(V=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(V=t.RG8UI),B===t.UNSIGNED_SHORT&&(V=t.RG16UI),B===t.UNSIGNED_INT&&(V=t.RG32UI),B===t.BYTE&&(V=t.RG8I),B===t.SHORT&&(V=t.RG16I),B===t.INT&&(V=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(V=t.RGB8UI),B===t.UNSIGNED_SHORT&&(V=t.RGB16UI),B===t.UNSIGNED_INT&&(V=t.RGB32UI),B===t.BYTE&&(V=t.RGB8I),B===t.SHORT&&(V=t.RGB16I),B===t.INT&&(V=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),B===t.UNSIGNED_INT&&(V=t.RGBA32UI),B===t.BYTE&&(V=t.RGBA8I),B===t.SHORT&&(V=t.RGBA16I),B===t.INT&&(V=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),M===t.RGBA){const fe=K?Nl:Ze.getTransfer(j);B===t.FLOAT&&(V=t.RGBA32F),B===t.HALF_FLOAT&&(V=t.RGBA16F),B===t.UNSIGNED_BYTE&&(V=fe===ot?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function v(R,M){let B;return R?M===null||M===Ar||M===Ls?B=t.DEPTH24_STENCIL8:M===fi?B=t.DEPTH32F_STENCIL8:M===Oa&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ar||M===Ls?B=t.DEPTH_COMPONENT24:M===fi?B=t.DEPTH_COMPONENT32F:M===Oa&&(B=t.DEPTH_COMPONENT16),B}function S(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),w(M),M.isVideoTexture&&h.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),O(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,j=d.get(B);if(j){const K=j[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(R),Object.keys(j).length===0&&d.delete(B)}i.remove(R)}function P(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const B=R.source,j=d.get(B);delete j[M.__cacheKey],a.memory.textures--}function O(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let K=0;K<M.__webglFramebuffer[j].length;K++)t.deleteFramebuffer(M.__webglFramebuffer[j][K]);else t.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)t.deleteFramebuffer(M.__webglFramebuffer[j]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let j=0,K=B.length;j<K;j++){const V=i.get(B[j]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(B[j])}i.remove(R)}let x=0;function E(){x=0}function G(){const R=x;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),x+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Y(R,M){const B=i.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(B,R,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function J(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Be(B,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function W(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Be(B,R,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function Z(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){X(B,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const D={[Rf]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[bf]:t.MIRRORED_REPEAT},q={[Tn]:t.NEAREST,[NS]:t.NEAREST_MIPMAP_NEAREST,[ho]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[Vc]:t.LINEAR_MIPMAP_NEAREST,[vr]:t.LINEAR_MIPMAP_LINEAR},Q={[OS]:t.NEVER,[VS]:t.ALWAYS,[BS]:t.LESS,[vv]:t.LEQUAL,[kS]:t.EQUAL,[GS]:t.GEQUAL,[zS]:t.GREATER,[HS]:t.NOTEQUAL};function ne(R,M){if(M.type===fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===Vc||M.magFilter===ho||M.magFilter===vr||M.minFilter===Bn||M.minFilter===Vc||M.minFilter===ho||M.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,D[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tn||M.minFilter!==ho&&M.minFilter!==vr||M.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Se(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const j=M.source;let K=d.get(j);K===void 0&&(K={},d.set(j,K));const V=z(M);if(V!==R.__cacheKey){K[V]===void 0&&(K[V]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[V].usedTimes++;const fe=K[R.__cacheKey];fe!==void 0&&(K[R.__cacheKey].usedTimes--,fe.usedTimes===0&&P(M)),R.__cacheKey=V,R.__webglTexture=K[V].texture}return B}function Be(R,M,B){let j=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=t.TEXTURE_3D);const K=Se(R,M),V=M.source;n.bindTexture(j,R.__webglTexture,t.TEXTURE0+B);const fe=i.get(V);if(V.version!==fe.__version||K===!0){n.activeTexture(t.TEXTURE0+B);const ae=Ze.getPrimaries(Ze.workingColorSpace),oe=M.colorSpace===Di?null:Ze.getPrimaries(M.colorSpace),Ie=M.colorSpace===Di||ae===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let re=y(M.image,!1,r.maxTextureSize);re=tt(M,re);const pe=s.convert(M.format,M.colorSpace),Te=s.convert(M.type);let Ae=g(M.internalFormat,pe,Te,M.colorSpace,M.isVideoTexture);ne(j,M);let _e;const Ve=M.mipmaps,De=M.isVideoTexture!==!0,nt=fe.__version===void 0||K===!0,N=V.dataReady,me=S(M,re);if(M.isDepthTexture)Ae=v(M.format===Ds,M.type),nt&&(De?n.texStorage2D(t.TEXTURE_2D,1,Ae,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ae,re.width,re.height,0,pe,Te,null));else if(M.isDataTexture)if(Ve.length>0){De&&nt&&n.texStorage2D(t.TEXTURE_2D,me,Ae,Ve[0].width,Ve[0].height);for(let $=0,ee=Ve.length;$<ee;$++)_e=Ve[$],De?N&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,pe,Te,_e.data):n.texImage2D(t.TEXTURE_2D,$,Ae,_e.width,_e.height,0,pe,Te,_e.data);M.generateMipmaps=!1}else De?(nt&&n.texStorage2D(t.TEXTURE_2D,me,Ae,re.width,re.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,pe,Te,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,re.width,re.height,0,pe,Te,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){De&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ae,Ve[0].width,Ve[0].height,re.depth);for(let $=0,ee=Ve.length;$<ee;$++)if(_e=Ve[$],M.format!==kn)if(pe!==null)if(De){if(N)if(M.layerUpdates.size>0){const de=Dm(_e.width,_e.height,M.format,M.type);for(const ge of M.layerUpdates){const je=_e.data.subarray(ge*de/_e.data.BYTES_PER_ELEMENT,(ge+1)*de/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ge,_e.width,_e.height,1,pe,je,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,re.depth,pe,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Ae,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,re.depth,pe,Te,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Ae,_e.width,_e.height,re.depth,0,pe,Te,_e.data)}else{De&&nt&&n.texStorage2D(t.TEXTURE_2D,me,Ae,Ve[0].width,Ve[0].height);for(let $=0,ee=Ve.length;$<ee;$++)_e=Ve[$],M.format!==kn?pe!==null?De?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,pe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?N&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,pe,Te,_e.data):n.texImage2D(t.TEXTURE_2D,$,Ae,_e.width,_e.height,0,pe,Te,_e.data)}else if(M.isDataArrayTexture)if(De){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ae,re.width,re.height,re.depth),N)if(M.layerUpdates.size>0){const $=Dm(re.width,re.height,M.format,M.type);for(const ee of M.layerUpdates){const de=re.data.subarray(ee*$/re.data.BYTES_PER_ELEMENT,(ee+1)*$/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,pe,Te,de)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,pe,Te,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,re.width,re.height,re.depth,0,pe,Te,re.data);else if(M.isData3DTexture)De?(nt&&n.texStorage3D(t.TEXTURE_3D,me,Ae,re.width,re.height,re.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,pe,Te,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,re.width,re.height,re.depth,0,pe,Te,re.data);else if(M.isFramebufferTexture){if(nt)if(De)n.texStorage2D(t.TEXTURE_2D,me,Ae,re.width,re.height);else{let $=re.width,ee=re.height;for(let de=0;de<me;de++)n.texImage2D(t.TEXTURE_2D,de,Ae,$,ee,0,pe,Te,null),$>>=1,ee>>=1}}else if(Ve.length>0){if(De&&nt){const $=Pe(Ve[0]);n.texStorage2D(t.TEXTURE_2D,me,Ae,$.width,$.height)}for(let $=0,ee=Ve.length;$<ee;$++)_e=Ve[$],De?N&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,pe,Te,_e):n.texImage2D(t.TEXTURE_2D,$,Ae,pe,Te,_e);M.generateMipmaps=!1}else if(De){if(nt){const $=Pe(re);n.texStorage2D(t.TEXTURE_2D,me,Ae,$.width,$.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Te,re)}else n.texImage2D(t.TEXTURE_2D,0,Ae,pe,Te,re);m(M)&&u(j),fe.__version=V.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function X(R,M,B){if(M.image.length!==6)return;const j=Se(R,M),K=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const V=i.get(K);if(K.version!==V.__version||j===!0){n.activeTexture(t.TEXTURE0+B);const fe=Ze.getPrimaries(Ze.workingColorSpace),ae=M.colorSpace===Di?null:Ze.getPrimaries(M.colorSpace),oe=M.colorSpace===Di||fe===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let ee=0;ee<6;ee++)!Ie&&!re?pe[ee]=y(M.image[ee],!0,r.maxCubemapSize):pe[ee]=re?M.image[ee].image:M.image[ee],pe[ee]=tt(M,pe[ee]);const Te=pe[0],Ae=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),Ve=g(M.internalFormat,Ae,_e,M.colorSpace),De=M.isVideoTexture!==!0,nt=V.__version===void 0||j===!0,N=K.dataReady;let me=S(M,Te);ne(t.TEXTURE_CUBE_MAP,M);let $;if(Ie){De&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,Te.width,Te.height);for(let ee=0;ee<6;ee++){$=pe[ee].mipmaps;for(let de=0;de<$.length;de++){const ge=$[de];M.format!==kn?Ae!==null?De?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,ge.width,ge.height,Ae,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,Ve,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,ge.width,ge.height,Ae,_e,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,Ve,ge.width,ge.height,0,Ae,_e,ge.data)}}}else{if($=M.mipmaps,De&&nt){$.length>0&&me++;const ee=Pe(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){De?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,pe[ee].width,pe[ee].height,Ae,_e,pe[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,pe[ee].width,pe[ee].height,0,Ae,_e,pe[ee].data);for(let de=0;de<$.length;de++){const je=$[de].image[ee].image;De?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,je.width,je.height,Ae,_e,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,Ve,je.width,je.height,0,Ae,_e,je.data)}}else{De?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ae,_e,pe[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,Ae,_e,pe[ee]);for(let de=0;de<$.length;de++){const ge=$[de];De?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,Ae,_e,ge.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,Ve,Ae,_e,ge.image[ee])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),V.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function te(R,M,B,j,K,V){const fe=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),oe=g(B.internalFormat,fe,ae,B.colorSpace);if(!i.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>V),pe=Math.max(1,M.height>>V);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,V,oe,re,pe,M.depth,0,fe,ae,null):n.texImage2D(K,V,oe,re,pe,0,fe,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ge(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,K,i.get(B).__webglTexture,0,He(M)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,K,i.get(B).__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(R,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const j=M.depthTexture,K=j&&j.isDepthTexture?j.type:null,V=v(M.stencilBuffer,K),fe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=He(M);Ge(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,V,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,V,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,V,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,R)}else{const j=M.textures;for(let K=0;K<j.length;K++){const V=j[K],fe=s.convert(V.format,V.colorSpace),ae=s.convert(V.type),oe=g(V.internalFormat,fe,ae,V.colorSpace),Ie=He(M);B&&Ge(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,oe,M.width,M.height):Ge(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,oe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,oe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const j=i.get(M.depthTexture).__webglTexture,K=He(M);if(M.depthTexture.format===xs)Ge(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(M.depthTexture.format===Ds)Ge(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=j}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=t.createRenderbuffer(),ue(M.__webglDepthbuffer[j],R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=M.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,V)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ue(M.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,K)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(R,M,B){const j=i.get(R);M!==void 0&&te(j.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ce(R)}function ke(R){const M=R.texture,B=i.get(R),j=i.get(M);R.addEventListener("dispose",A);const K=R.textures,V=R.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=M.version,a.memory.textures++),V){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let oe=0;oe<M.mipmaps.length;oe++)B.__webglFramebuffer[ae][oe]=t.createFramebuffer()}else B.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)B.__webglFramebuffer[ae]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(fe)for(let ae=0,oe=K.length;ae<oe;ae++){const Ie=i.get(K[ae]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Ge(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const oe=K[ae];B.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const Ie=s.convert(oe.format,oe.colorSpace),re=s.convert(oe.type),pe=g(oe.internalFormat,Ie,re,oe.colorSpace,R.isXRRenderTarget===!0),Te=He(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),ne(t.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)te(B.__webglFramebuffer[ae][oe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,oe);else te(B.__webglFramebuffer[ae],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ae=0,oe=K.length;ae<oe;ae++){const Ie=K[ae],re=i.get(Ie);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ne(t.TEXTURE_2D,Ie),te(B.__webglFramebuffer,R,Ie,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),m(Ie)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,j.__webglTexture),ne(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)te(B.__webglFramebuffer[oe],R,M,t.COLOR_ATTACHMENT0,ae,oe);else te(B.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ae,0);m(M)&&u(ae),n.unbindTexture()}R.depthBuffer&&Ce(R)}function We(R){const M=R.textures;for(let B=0,j=M.length;B<j;B++){const K=M[B];if(m(K)){const V=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(K).__webglTexture;n.bindTexture(V,fe),u(V),n.unbindTexture()}}}const Oe=[],L=[];function Ut(R){if(R.samples>0){if(Ge(R)===!1){const M=R.textures,B=R.width,j=R.height;let K=t.COLOR_BUFFER_BIT;const V=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),ae=M.length>1;if(ae)for(let oe=0;oe<M.length;oe++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let oe=0;oe<M.length;oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[oe]);const Ie=i.get(M[oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,B,j,0,0,B,j,K,t.NEAREST),l===!0&&(Oe.length=0,L.length=0,Oe.push(t.COLOR_ATTACHMENT0+oe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Oe.push(V),L.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let oe=0;oe<M.length;oe++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,fe.__webglColorRenderbuffer[oe]);const Ie=i.get(M[oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function He(R){return Math.min(r.maxSamples,R.samples)}function Ge(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Re(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function tt(R,M){const B=R.colorSpace,j=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Ji&&B!==Di&&(Ze.getTransfer(B)===ot?(j!==kn||K!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=E,this.setTexture2D=Y,this.setTexture2DArray=J,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=we,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ge}function Yw(t,e){function n(i,r=Di){let s;const a=Ze.getTransfer(r);if(i===_i)return t.UNSIGNED_BYTE;if(i===rh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===lv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===av)return t.BYTE;if(i===ov)return t.SHORT;if(i===Oa)return t.UNSIGNED_SHORT;if(i===ih)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===Wa)return t.HALF_FLOAT;if(i===cv)return t.ALPHA;if(i===uv)return t.RGB;if(i===kn)return t.RGBA;if(i===fv)return t.LUMINANCE;if(i===dv)return t.LUMINANCE_ALPHA;if(i===xs)return t.DEPTH_COMPONENT;if(i===Ds)return t.DEPTH_STENCIL;if(i===hv)return t.RED;if(i===ah)return t.RED_INTEGER;if(i===pv)return t.RG;if(i===oh)return t.RG_INTEGER;if(i===lh)return t.RGBA_INTEGER;if(i===el||i===tl||i===nl||i===il)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pf||i===Lf||i===Df||i===Nf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Pf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Df)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===If||i===Uf||i===Ff)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===If||i===Uf)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ff)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Of||i===Bf||i===kf||i===zf||i===Hf||i===Gf||i===Vf||i===Wf||i===jf||i===Xf||i===$f||i===Yf||i===qf||i===Kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Of)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$f)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===Zf||i===Qf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===rl)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mv||i===Jf||i===ed||i===td)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ed)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===td)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class qw extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ca extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kw={type:"move"};class _u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Zw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qw=`
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

}`;class Jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Xt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qi({vertexShader:Zw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pn(new lc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eA extends Os{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,_=null;const y=new Jw,m=n.getContextAttributes();let u=null,g=null;const v=[],S=[],b=new Ne;let A=null;const w=new On;w.layers.enable(1),w.viewport=new gt;const P=new On;P.layers.enable(2),P.viewport=new gt;const O=[w,P],x=new qw;x.layers.enable(1),x.layers.enable(2);let E=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=v[X];return te===void 0&&(te=new _u,v[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=v[X];return te===void 0&&(te=new _u,v[X]=te),te.getGripSpace()},this.getHand=function(X){let te=v[X];return te===void 0&&(te=new _u,v[X]=te),te.getHandSpace()};function z(X){const te=S.indexOf(X.inputSource);if(te===-1)return;const ue=v[te];ue!==void 0&&(ue.update(X.inputSource,X.frame,c||a),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",J);for(let X=0;X<v.length;X++){const te=S[X];te!==null&&(S[X]=null,v[X].disconnect(te))}E=null,G=null,y.reset(),e.setRenderTarget(u),p=null,d=null,f=null,r=null,g=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Cr(p.framebufferWidth,p.framebufferHeight,{format:kn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ue=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?Ds:xs,ue=m.stencil?Ls:Ar);const Ce={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Cr(d.textureWidth,d.textureHeight,{format:kn,type:_i,depthTexture:new Pv(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(X){for(let te=0;te<X.removed.length;te++){const ue=X.removed[te],ce=S.indexOf(ue);ce>=0&&(S[ce]=null,v[ce].disconnect(ue))}for(let te=0;te<X.added.length;te++){const ue=X.added[te];let ce=S.indexOf(ue);if(ce===-1){for(let we=0;we<v.length;we++)if(we>=S.length){S.push(ue),ce=we;break}else if(S[we]===null){S[we]=ue,ce=we;break}if(ce===-1)break}const Ce=v[ce];Ce&&Ce.connect(ue)}}const W=new U,Z=new U;function D(X,te,ue){W.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);const ce=W.distanceTo(Z),Ce=te.projectionMatrix.elements,we=ue.projectionMatrix.elements,ke=Ce[14]/(Ce[10]-1),We=Ce[14]/(Ce[10]+1),Oe=(Ce[9]+1)/Ce[5],L=(Ce[9]-1)/Ce[5],Ut=(Ce[8]-1)/Ce[0],He=(we[8]+1)/we[0],Ge=ke*Ut,Re=ke*He,tt=ce/(-Ut+He),Pe=tt*-Ut;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pe),X.translateZ(tt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ce[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const R=ke+tt,M=We+tt,B=Ge-Pe,j=Re+(ce-Pe),K=Oe*We/M*R,V=L*We/M*R;X.projectionMatrix.makePerspective(B,j,K,V,R,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function q(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,ue=X.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(ue=y.depthFar)),x.near=P.near=w.near=te,x.far=P.far=w.far=ue,(E!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,G=x.far);const ce=X.parent,Ce=x.cameras;q(x,ce);for(let we=0;we<Ce.length;we++)q(Ce[we],ce);Ce.length===2?D(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),Q(X,x,ce)};function Q(X,te,ue){ue===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=id*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let ne=null;function Se(X,te){if(h=te.getViewerPose(c||a),_=te,h!==null){const ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ce=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let we=0;we<ue.length;we++){const ke=ue[we];let We=null;if(p!==null)We=p.getViewport(ke);else{const L=f.getViewSubImage(d,ke);We=L.viewport,we===0&&(e.setRenderTargetTextures(g,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(g))}let Oe=O[we];Oe===void 0&&(Oe=new On,Oe.layers.enable(we),Oe.viewport=new gt,O[we]=Oe),Oe.matrix.fromArray(ke.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(ke.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(We.x,We.y,We.width,We.height),we===0&&(x.matrix.copy(Oe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(Oe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const we=f.getDepthInformation(ue[0]);we&&we.isValid&&we.texture&&y.init(e,we,r.renderState)}}for(let ue=0;ue<v.length;ue++){const ce=S[ue],Ce=v[ue];ce!==null&&Ce!==void 0&&Ce.update(ce,te,c||a)}ne&&ne(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Be=new bv;Be.setAnimationLoop(Se),this.setAnimationLoop=function(X){ne=X},this.dispose=function(){}}}const ar=new Zn,tA=new ut;function nA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Av(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===an&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===an&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,S=g.envMapRotation;v&&(m.envMap.value=v,ar.copy(S),ar.x*=-1,ar.y*=-1,ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(ar)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function c(g,v){let S=r[g.id];S===void 0&&(_(g),S=h(g),r[g.id]=S,g.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(g,b);const A=e.render.frame;s[g.id]!==A&&(d(g),s[g.id]=A)}function h(g){const v=f();g.__bindingPointIndex=v;const S=t.createBuffer(),b=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],S=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,w=S.length;A<w;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let O=0,x=P.length;O<x;O++){const E=P[O];if(p(E,A,O,b)===!0){const G=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let Y=0;for(let J=0;J<z.length;J++){const W=z[J],Z=y(W);typeof W=="number"||typeof W=="boolean"?(E.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,G+Y,E.__data)):W.isMatrix3?(E.__data[0]=W.elements[0],E.__data[1]=W.elements[1],E.__data[2]=W.elements[2],E.__data[3]=0,E.__data[4]=W.elements[3],E.__data[5]=W.elements[4],E.__data[6]=W.elements[5],E.__data[7]=0,E.__data[8]=W.elements[6],E.__data[9]=W.elements[7],E.__data[10]=W.elements[8],E.__data[11]=0):(W.toArray(E.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,S,b){const A=g.value,w=v+"_"+S;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const P=b[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return b[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(g){const v=g.uniforms;let S=0;const b=16;for(let w=0,P=v.length;w<P;w++){const O=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,E=O.length;x<E;x++){const G=O[x],z=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,J=z.length;Y<J;Y++){const W=z[Y],Z=y(W),D=S%b,q=D%Z.boundary,Q=D+q;S+=q,Q!==0&&b-Q<Z.storage&&(S+=b-Q),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=Z.storage}}}const A=S%b;return A>0&&(S+=b-A),g.__size=S,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class rA{constructor(e={}){const{canvas:n=jS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=Wi,this.toneMappingExposure=1;const v=this;let S=!1,b=0,A=0,w=null,P=-1,O=null;const x=new gt,E=new gt;let G=null;const z=new Xe(0);let Y=0,J=n.width,W=n.height,Z=1,D=null,q=null;const Q=new gt(0,0,J,W),ne=new gt(0,0,J,W);let Se=!1;const Be=new uh;let X=!1,te=!1;const ue=new ut,ce=new ut,Ce=new U,we=new gt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Oe(){return w===null?Z:1}let L=i;function Ut(T,I){return n.getContext(T,I)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nh}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",ge,!1),L===null){const I="webgl2";if(L=Ut(I,T),L===null)throw Ut(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let He,Ge,Re,tt,Pe,R,M,B,j,K,V,fe,ae,oe,Ie,re,pe,Te,Ae,_e,Ve,De,nt,N;function me(){He=new cT(L),He.init(),De=new Yw(L,He),Ge=new iT(L,He,e,De),Re=new jw(L),Ge.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),tt=new dT(L),Pe=new Pw,R=new $w(L,He,Re,Pe,Ge,De,tt),M=new sT(v),B=new lT(v),j=new xM(L),nt=new tT(L,j),K=new uT(L,j,tt,nt),V=new pT(L,K,j,tt),Ae=new hT(L,Ge,R),re=new rT(Pe),fe=new bw(v,M,B,He,Ge,nt,re),ae=new nA(v,Pe),oe=new Dw,Ie=new Bw(He),Te=new eT(v,M,B,Re,V,d,l),pe=new Vw(v,V,Ge),N=new iA(L,tt,Ge,Re),_e=new nT(L,He,tt),Ve=new fT(L,He,tt),tt.programs=fe.programs,v.capabilities=Ge,v.extensions=He,v.properties=Pe,v.renderLists=oe,v.shadowMap=pe,v.state=Re,v.info=tt}me();const $=new eA(v,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=He.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=He.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(J,W,!1))},this.getSize=function(T){return T.set(J,W)},this.setSize=function(T,I,k=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,W=I,n.width=Math.floor(T*Z),n.height=Math.floor(I*Z),k===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(J*Z,W*Z).floor()},this.setDrawingBufferSize=function(T,I,k){J=T,W=I,Z=k,n.width=Math.floor(T*k),n.height=Math.floor(I*k),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,I,k,H){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,I,k,H),Re.viewport(x.copy(Q).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,I,k,H){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,I,k,H),Re.scissor(E.copy(ne).multiplyScalar(Z).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){Re.setScissorTest(Se=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(T=!0,I=!0,k=!0){let H=0;if(T){let F=!1;if(w!==null){const se=w.texture.format;F=se===lh||se===oh||se===ah}if(F){const se=w.texture.type,he=se===_i||se===Ar||se===Oa||se===Ls||se===rh||se===sh,xe=Te.getClearColor(),ye=Te.getClearAlpha(),be=xe.r,Le=xe.g,Me=xe.b;he?(p[0]=be,p[1]=Le,p[2]=Me,p[3]=ye,L.clearBufferuiv(L.COLOR,0,p)):(_[0]=be,_[1]=Le,_[2]=Me,_[3]=ye,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}I&&(H|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),oe.dispose(),Ie.dispose(),Pe.dispose(),M.dispose(),B.dispose(),V.dispose(),nt.dispose(),N.dispose(),fe.dispose(),$.dispose(),$.removeEventListener("sessionstart",vh),$.removeEventListener("sessionend",_h),er.stop()};function ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=tt.autoReset,I=pe.enabled,k=pe.autoUpdate,H=pe.needsUpdate,F=pe.type;me(),tt.autoReset=T,pe.enabled=I,pe.autoUpdate=k,pe.needsUpdate=H,pe.type=F}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function je(T){const I=T.target;I.removeEventListener("dispose",je),xt(I)}function xt(T){Kt(T),Pe.remove(T)}function Kt(T){const I=Pe.get(T).programs;I!==void 0&&(I.forEach(function(k){fe.releaseProgram(k)}),T.isShaderMaterial&&fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,k,H,F,se){I===null&&(I=ke);const he=F.isMesh&&F.matrixWorld.determinant()<0,xe=kv(T,I,k,H,F);Re.setMaterial(H,he);let ye=k.index,be=1;if(H.wireframe===!0){if(ye=K.getWireframeAttribute(k),ye===void 0)return;be=2}const Le=k.drawRange,Me=k.attributes.position;let Qe=Le.start*be,st=(Le.start+Le.count)*be;se!==null&&(Qe=Math.max(Qe,se.start*be),st=Math.min(st,(se.start+se.count)*be)),ye!==null?(Qe=Math.max(Qe,0),st=Math.min(st,ye.count)):Me!=null&&(Qe=Math.max(Qe,0),st=Math.min(st,Me.count));const pt=st-Qe;if(pt<0||pt===1/0)return;nt.setup(F,H,xe,k,ye);let on,qe=_e;if(ye!==null&&(on=j.get(ye),qe=Ve,qe.setIndex(on)),F.isMesh)H.wireframe===!0?(Re.setLineWidth(H.wireframeLinewidth*Oe()),qe.setMode(L.LINES)):qe.setMode(L.TRIANGLES);else if(F.isLine){let Ee=H.linewidth;Ee===void 0&&(Ee=1),Re.setLineWidth(Ee*Oe()),F.isLineSegments?qe.setMode(L.LINES):F.isLineLoop?qe.setMode(L.LINE_LOOP):qe.setMode(L.LINE_STRIP)}else F.isPoints?qe.setMode(L.POINTS):F.isSprite&&qe.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)qe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ee=F._multiDrawStarts,Lt=F._multiDrawCounts,Ke=F._multiDrawCount,Rn=ye?j.get(ye).bytesPerElement:1,Lr=Pe.get(H).currentProgram.getUniforms();for(let ln=0;ln<Ke;ln++)Lr.setValue(L,"_gl_DrawID",ln),qe.render(Ee[ln]/Rn,Lt[ln])}else if(F.isInstancedMesh)qe.renderInstances(Qe,pt,F.count);else if(k.isInstancedBufferGeometry){const Ee=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Lt=Math.min(k.instanceCount,Ee);qe.renderInstances(Qe,pt,Lt)}else qe.render(Qe,pt)};function Ye(T,I,k){T.transparent===!0&&T.side===li&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Ya(T,I,k),T.side=Yi,T.needsUpdate=!0,Ya(T,I,k),T.side=li):Ya(T,I,k)}this.compile=function(T,I,k=null){k===null&&(k=T),m=Ie.get(k),m.init(I),g.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),T!==k&&T.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const H=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const xe=se[he];Ye(xe,k,F),H.add(xe)}else Ye(se,k,F),H.add(se)}),g.pop(),m=null,H},this.compileAsync=function(T,I,k=null){const H=this.compile(T,I,k);return new Promise(F=>{function se(){if(H.forEach(function(he){Pe.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){F(T);return}setTimeout(se,10)}He.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Zt=null;function Jn(T){Zt&&Zt(T)}function vh(){er.stop()}function _h(){er.start()}const er=new bv;er.setAnimationLoop(Jn),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(T){Zt=T,$.setAnimationLoop(T),T===null?er.stop():er.start()},$.addEventListener("sessionstart",vh),$.addEventListener("sessionend",_h),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(I),I=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,I,w),m=Ie.get(T,g.length),m.init(I),g.push(m),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Be.setFromProjectionMatrix(ce),te=this.localClippingEnabled,X=re.init(this.clippingPlanes,te),y=oe.get(T,u.length),y.init(),u.push(y),$.enabled===!0&&$.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&uc(se,I,-1/0,v.sortObjects)}uc(T,I,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(D,q),We=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,We&&Te.addToRenderList(y,T),this.info.render.frame++,X===!0&&re.beginShadows();const k=m.state.shadowsArray;pe.render(k,T,I),X===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=y.opaque,F=y.transmissive;if(m.setupLights(),I.isArrayCamera){const se=I.cameras;if(F.length>0)for(let he=0,xe=se.length;he<xe;he++){const ye=se[he];yh(H,F,T,ye)}We&&Te.render(T);for(let he=0,xe=se.length;he<xe;he++){const ye=se[he];xh(y,T,ye,ye.viewport)}}else F.length>0&&yh(H,F,T,I),We&&Te.render(T),xh(y,T,I);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,I),nt.resetDefaultState(),P=-1,O=null,g.pop(),g.length>0?(m=g[g.length-1],X===!0&&re.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function uc(T,I,k,H){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Be.intersectsSprite(T)){H&&we.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const he=V.update(T),xe=T.material;xe.visible&&y.push(T,he,xe,k,we.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Be.intersectsObject(T))){const he=V.update(T),xe=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),we.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),we.copy(he.boundingSphere.center)),we.applyMatrix4(T.matrixWorld).applyMatrix4(ce)),Array.isArray(xe)){const ye=he.groups;for(let be=0,Le=ye.length;be<Le;be++){const Me=ye[be],Qe=xe[Me.materialIndex];Qe&&Qe.visible&&y.push(T,he,Qe,k,we.z,Me)}}else xe.visible&&y.push(T,he,xe,k,we.z,null)}}const se=T.children;for(let he=0,xe=se.length;he<xe;he++)uc(se[he],I,k,H)}function xh(T,I,k,H){const F=T.opaque,se=T.transmissive,he=T.transparent;m.setupLightsView(k),X===!0&&re.setGlobalState(v.clippingPlanes,k),H&&Re.viewport(x.copy(H)),F.length>0&&$a(F,I,k),se.length>0&&$a(se,I,k),he.length>0&&$a(he,I,k),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function yh(T,I,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Cr(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Wa:_i,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const se=m.state.transmissionRenderTarget[H.id],he=H.viewport||x;se.setSize(he.z,he.w);const xe=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(z),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),We&&Te.render(k);const ye=v.toneMapping;v.toneMapping=Wi;const be=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),X===!0&&re.setGlobalState(v.clippingPlanes,H),$a(T,k,H),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),He.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Me=0,Qe=I.length;Me<Qe;Me++){const st=I[Me],pt=st.object,on=st.geometry,qe=st.material,Ee=st.group;if(qe.side===li&&pt.layers.test(H.layers)){const Lt=qe.side;qe.side=an,qe.needsUpdate=!0,Sh(pt,k,H,on,qe,Ee),qe.side=Lt,qe.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}v.setRenderTarget(xe),v.setClearColor(z,Y),be!==void 0&&(H.viewport=be),v.toneMapping=ye}function $a(T,I,k){const H=I.isScene===!0?I.overrideMaterial:null;for(let F=0,se=T.length;F<se;F++){const he=T[F],xe=he.object,ye=he.geometry,be=H===null?he.material:H,Le=he.group;xe.layers.test(k.layers)&&Sh(xe,I,k,ye,be,Le)}}function Sh(T,I,k,H,F,se){T.onBeforeRender(v,I,k,H,F,se),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(v,I,k,H,T,se),F.transparent===!0&&F.side===li&&F.forceSinglePass===!1?(F.side=an,F.needsUpdate=!0,v.renderBufferDirect(k,I,H,F,T,se),F.side=Yi,F.needsUpdate=!0,v.renderBufferDirect(k,I,H,F,T,se),F.side=li):v.renderBufferDirect(k,I,H,F,T,se),T.onAfterRender(v,I,k,H,F,se)}function Ya(T,I,k){I.isScene!==!0&&(I=ke);const H=Pe.get(T),F=m.state.lights,se=m.state.shadowsArray,he=F.state.version,xe=fe.getParameters(T,F.state,se,I,k),ye=fe.getProgramCacheKey(xe);let be=H.programs;H.environment=T.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(T.isMeshStandardMaterial?B:M).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,be===void 0&&(T.addEventListener("dispose",je),be=new Map,H.programs=be);let Le=be.get(ye);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===he)return Eh(T,xe),Le}else xe.uniforms=fe.getUniforms(T),T.onBeforeCompile(xe,v),Le=fe.acquireProgram(xe,ye),be.set(ye,Le),H.uniforms=xe.uniforms;const Me=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Me.clippingPlanes=re.uniform),Eh(T,xe),H.needsLights=Hv(T),H.lightsStateVersion=he,H.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMap.value=F.state.directionalShadowMap,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotShadowMap.value=F.state.spotShadowMap,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMap.value=F.state.pointShadowMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function Mh(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=ol.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Eh(T,I){const k=Pe.get(T);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function kv(T,I,k,H,F){I.isScene!==!0&&(I=ke),R.resetTextureUnits();const se=I.fog,he=H.isMeshStandardMaterial?I.environment:null,xe=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ji,ye=(H.isMeshStandardMaterial?B:M).get(H.envMap||he),be=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Le=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Me=!!k.morphAttributes.position,Qe=!!k.morphAttributes.normal,st=!!k.morphAttributes.color;let pt=Wi;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(pt=v.toneMapping);const on=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qe=on!==void 0?on.length:0,Ee=Pe.get(H),Lt=m.state.lights;if(X===!0&&(te===!0||T!==O)){const xn=T===O&&H.id===P;re.setState(H,T,xn)}let Ke=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Lt.state.version||Ee.outputColorSpace!==xe||F.isBatchedMesh&&Ee.batching===!1||!F.isBatchedMesh&&Ee.batching===!0||F.isBatchedMesh&&Ee.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ee.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ee.instancing===!1||!F.isInstancedMesh&&Ee.instancing===!0||F.isSkinnedMesh&&Ee.skinning===!1||!F.isSkinnedMesh&&Ee.skinning===!0||F.isInstancedMesh&&Ee.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ee.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ee.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ee.instancingMorph===!1&&F.morphTexture!==null||Ee.envMap!==ye||H.fog===!0&&Ee.fog!==se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==re.numPlanes||Ee.numIntersection!==re.numIntersection)||Ee.vertexAlphas!==be||Ee.vertexTangents!==Le||Ee.morphTargets!==Me||Ee.morphNormals!==Qe||Ee.morphColors!==st||Ee.toneMapping!==pt||Ee.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,Ee.__version=H.version);let Rn=Ee.currentProgram;Ke===!0&&(Rn=Ya(H,I,F));let Lr=!1,ln=!1,fc=!1;const vt=Rn.getUniforms(),yi=Ee.uniforms;if(Re.useProgram(Rn.program)&&(Lr=!0,ln=!0,fc=!0),H.id!==P&&(P=H.id,ln=!0),Lr||O!==T){Ge.reverseDepthBuffer?(ue.copy(T.projectionMatrix),$S(ue),YS(ue),vt.setValue(L,"projectionMatrix",ue)):vt.setValue(L,"projectionMatrix",T.projectionMatrix),vt.setValue(L,"viewMatrix",T.matrixWorldInverse);const xn=vt.map.cameraPosition;xn!==void 0&&xn.setValue(L,Ce.setFromMatrixPosition(T.matrixWorld)),Ge.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),O!==T&&(O=T,ln=!0,fc=!0)}if(F.isSkinnedMesh){vt.setOptional(L,F,"bindMatrix"),vt.setOptional(L,F,"bindMatrixInverse");const xn=F.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),vt.setValue(L,"boneTexture",xn.boneTexture,R))}F.isBatchedMesh&&(vt.setOptional(L,F,"batchingTexture"),vt.setValue(L,"batchingTexture",F._matricesTexture,R),vt.setOptional(L,F,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",F._indirectTexture,R),vt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",F._colorsTexture,R));const dc=k.morphAttributes;if((dc.position!==void 0||dc.normal!==void 0||dc.color!==void 0)&&Ae.update(F,k,Rn),(ln||Ee.receiveShadow!==F.receiveShadow)&&(Ee.receiveShadow=F.receiveShadow,vt.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(yi.envMap.value=ye,yi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(yi.envMapIntensity.value=I.environmentIntensity),ln&&(vt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&zv(yi,fc),se&&H.fog===!0&&ae.refreshFogUniforms(yi,se),ae.refreshMaterialUniforms(yi,H,Z,W,m.state.transmissionRenderTarget[T.id]),ol.upload(L,Mh(Ee),yi,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ol.upload(L,Mh(Ee),yi,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(L,"center",F.center),vt.setValue(L,"modelViewMatrix",F.modelViewMatrix),vt.setValue(L,"normalMatrix",F.normalMatrix),vt.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const xn=H.uniformsGroups;for(let hc=0,Gv=xn.length;hc<Gv;hc++){const Th=xn[hc];N.update(Th,Rn),N.bind(Th,Rn)}}return Rn}function zv(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Hv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,I,k){Pe.get(T.texture).__webglTexture=I,Pe.get(T.depthTexture).__webglTexture=k;const H=Pe.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const k=Pe.get(T);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,k=0){w=T,b=I,A=k;let H=!0,F=null,se=!1,he=!1;if(T){const ye=Pe.get(T);if(ye.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(ye.__hasExternalTextures)R.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Me=T.depthTexture;if(ye.__boundDepthTexture!==Me){if(Me!==null&&Pe.has(Me)&&(T.width!==Me.image.width||T.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const be=T.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(he=!0);const Le=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?F=Le[I][k]:F=Le[I],se=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?F=Pe.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[k]:F=Le,x.copy(T.viewport),E.copy(T.scissor),G=T.scissorTest}else x.copy(Q).multiplyScalar(Z).floor(),E.copy(ne).multiplyScalar(Z).floor(),G=Se;if(Re.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&Re.drawBuffers(T,F),Re.viewport(x),Re.scissor(E),Re.setScissorTest(G),se){const ye=Pe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,k)}else if(he){const ye=Pe.get(T.texture),be=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.__webglTexture,k||0,be)}P=-1},this.readRenderTargetPixels=function(T,I,k,H,F,se,he){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){Re.bindFramebuffer(L.FRAMEBUFFER,xe);try{const ye=T.texture,be=ye.format,Le=ye.type;if(!Ge.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-H&&k>=0&&k<=T.height-F&&L.readPixels(I,k,H,F,De.convert(be),De.convert(Le),se)}finally{const ye=w!==null?Pe.get(w).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,I,k,H,F,se,he){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){const ye=T.texture,be=ye.format,Le=ye.type;if(!Ge.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-H&&k>=0&&k<=T.height-F){Re.bindFramebuffer(L.FRAMEBUFFER,xe);const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),L.readPixels(I,k,H,F,De.convert(be),De.convert(Le),0);const Qe=w!==null?Pe.get(w).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,Qe);const st=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await XS(L,st,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(Me),L.deleteSync(st),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,I=null,k=0){T.isTexture!==!0&&(al("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-k),F=Math.floor(T.image.width*H),se=Math.floor(T.image.height*H),he=I!==null?I.x:0,xe=I!==null?I.y:0;R.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,he,xe,F,se),Re.unbindTexture()},this.copyTextureToTexture=function(T,I,k=null,H=null,F=0){T.isTexture!==!0&&(al("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],I=arguments[2],F=arguments[3]||0,k=null);let se,he,xe,ye,be,Le;k!==null?(se=k.max.x-k.min.x,he=k.max.y-k.min.y,xe=k.min.x,ye=k.min.y):(se=T.image.width,he=T.image.height,xe=0,ye=0),H!==null?(be=H.x,Le=H.y):(be=0,Le=0);const Me=De.convert(I.format),Qe=De.convert(I.type);R.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),on=L.getParameter(L.UNPACK_SKIP_PIXELS),qe=L.getParameter(L.UNPACK_SKIP_ROWS),Ee=L.getParameter(L.UNPACK_SKIP_IMAGES),Lt=T.isCompressedTexture?T.mipmaps[F]:T.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,ye),T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,be,Le,se,he,Me,Qe,Lt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,be,Le,Lt.width,Lt.height,Me,Lt.data):L.texSubImage2D(L.TEXTURE_2D,F,be,Le,se,he,Me,Qe,Lt),L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,on),L.pixelStorei(L.UNPACK_SKIP_ROWS,qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee),F===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(T,I,k=null,H=null,F=0){T.isTexture!==!0&&(al("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,T=arguments[2],I=arguments[3],F=arguments[4]||0);let se,he,xe,ye,be,Le,Me,Qe,st;const pt=T.isCompressedTexture?T.mipmaps[F]:T.image;k!==null?(se=k.max.x-k.min.x,he=k.max.y-k.min.y,xe=k.max.z-k.min.z,ye=k.min.x,be=k.min.y,Le=k.min.z):(se=pt.width,he=pt.height,xe=pt.depth,ye=0,be=0,Le=0),H!==null?(Me=H.x,Qe=H.y,st=H.z):(Me=0,Qe=0,st=0);const on=De.convert(I.format),qe=De.convert(I.type);let Ee;if(I.isData3DTexture)R.setTexture3D(I,0),Ee=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)R.setTexture2DArray(I,0),Ee=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Lt=L.getParameter(L.UNPACK_ROW_LENGTH),Ke=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Rn=L.getParameter(L.UNPACK_SKIP_PIXELS),Lr=L.getParameter(L.UNPACK_SKIP_ROWS),ln=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,be),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le),T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Ee,F,Me,Qe,st,se,he,xe,on,qe,pt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,F,Me,Qe,st,se,he,xe,on,pt.data):L.texSubImage3D(Ee,F,Me,Qe,st,se,he,xe,on,qe,pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ln),F===0&&I.generateMipmaps&&L.generateMipmap(Ee),Re.unbindTexture()},this.initRenderTarget=function(T){Pe.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){b=0,A=0,w=null,Re.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ch?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===ac?"display-p3":"srgb"}}class sA extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class aA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=nd,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new U;class kl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Yn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Yn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Yn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Yn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Gn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uv extends Pr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $r;const Js=new U,Yr=new U,qr=new U,Kr=new Ne,ea=new Ne,Fv=new ut,Io=new U,ta=new U,Uo=new U,Nm=new Ne,xu=new Ne,Im=new Ne;class oA extends Pt{constructor(e=new Uv){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new $t;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new aA(n,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new kl(i,3,0,!1)),$r.setAttribute("uv",new kl(i,2,3,!1))}this.geometry=$r,this.material=e,this.center=new Ne(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yr.setFromMatrixScale(this.matrixWorld),Fv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-qr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Fo(Io.set(-.5,-.5,0),qr,a,Yr,r,s),Fo(ta.set(.5,-.5,0),qr,a,Yr,r,s),Fo(Uo.set(.5,.5,0),qr,a,Yr,r,s),Nm.set(0,0),xu.set(1,0),Im.set(1,1);let o=e.ray.intersectTriangle(Io,ta,Uo,!1,Js);if(o===null&&(Fo(ta.set(-.5,.5,0),qr,a,Yr,r,s),xu.set(0,1),o=e.ray.intersectTriangle(Io,Uo,ta,!1,Js),o===null))return;const l=e.ray.origin.distanceTo(Js);l<e.near||l>e.far||n.push({distance:l,point:Js.clone(),uv:dn.getInterpolation(Js,Io,ta,Uo,Nm,xu,Im,new Ne),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fo(t,e,n,i,r,s){Kr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ea.x=s*Kr.x-r*Kr.y,ea.y=r*Kr.x+s*Kr.y):ea.copy(Kr),t.copy(e),t.x+=ea.x,t.y+=ea.y,t.applyMatrix4(Fv)}class zl extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hl=new U,Gl=new U,Um=new ut,na=new Sv,Oo=new oc,yu=new U,Fm=new U;class sd extends Pt{constructor(e=new $t,n=new zl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Hl.fromBufferAttribute(n,r-1),Gl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Hl.distanceTo(Gl);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;Um.copy(r).invert(),na.copy(e.ray).applyMatrix4(Um);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=p,m=_-1;y<m;y+=c){const u=h.getX(y),g=h.getX(y+1),v=Bo(this,e,na,l,u,g);v&&n.push(v)}if(this.isLineLoop){const y=h.getX(_-1),m=h.getX(p),u=Bo(this,e,na,l,y,m);u&&n.push(u)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=p,m=_-1;y<m;y+=c){const u=Bo(this,e,na,l,y,y+1);u&&n.push(u)}if(this.isLineLoop){const y=Bo(this,e,na,l,_-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Hl.fromBufferAttribute(a,r),Gl.fromBufferAttribute(a,s),n.distanceSqToSegment(Hl,Gl,yu,Fm)>i)return;yu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(yu);if(!(l<e.near||l>e.far))return{distance:l,point:Fm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Om=new U,Bm=new U;class lA extends sd{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Om.fromBufferAttribute(n,r),Bm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Om.distanceTo(Bm);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cA extends Xt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hh extends $t{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new U,h=new Ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=n;f++,d+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(o,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ph extends $t{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(s.slice(),3)),this.setAttribute("uv",new Tt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const v=new U,S=new U,b=new U;for(let A=0;A<n.length;A+=3)p(n[A+0],v),p(n[A+1],S),p(n[A+2],b),l(v,S,b,g)}function l(g,v,S,b){const A=b+1,w=[];for(let P=0;P<=A;P++){w[P]=[];const O=g.clone().lerp(S,P/A),x=v.clone().lerp(S,P/A),E=A-P;for(let G=0;G<=E;G++)G===0&&P===A?w[P][G]=O:w[P][G]=O.clone().lerp(x,G/E)}for(let P=0;P<A;P++)for(let O=0;O<2*(A-P)-1;O++){const x=Math.floor(O/2);O%2===0?(d(w[P][x+1]),d(w[P+1][x]),d(w[P][x])):(d(w[P][x+1]),d(w[P+1][x+1]),d(w[P+1][x]))}}function c(g){const v=new U;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(g),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function h(){const g=new U;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const S=m(g)/2/Math.PI+.5,b=u(g)/Math.PI+.5;a.push(S,1-b)}_(),f()}function f(){for(let g=0;g<a.length;g+=6){const v=a[g+0],S=a[g+2],b=a[g+4],A=Math.max(v,S,b),w=Math.min(v,S,b);A>.9&&w<.1&&(v<.2&&(a[g+0]+=1),S<.2&&(a[g+2]+=1),b<.2&&(a[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function p(g,v){const S=g*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function _(){const g=new U,v=new U,S=new U,b=new U,A=new Ne,w=new Ne,P=new Ne;for(let O=0,x=0;O<s.length;O+=9,x+=6){g.set(s[O+0],s[O+1],s[O+2]),v.set(s[O+3],s[O+4],s[O+5]),S.set(s[O+6],s[O+7],s[O+8]),A.set(a[x+0],a[x+1]),w.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),b.copy(g).add(v).add(S).divideScalar(3);const E=m(b);y(A,x+0,g,E),y(w,x+2,v,E),y(P,x+4,S,E)}}function y(g,v,S,b){b<0&&g.x===1&&(a[v]=g.x-1),S.x===0&&S.z===0&&(a[v]=b/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.vertices,e.indices,e.radius,e.details)}}const ko=new U,zo=new U,Su=new U,Ho=new dn;class uA extends $t{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(sl*n),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},p=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:m,c:u}=Ho;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),Ho.getNormal(Su),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let g=0;g<3;g++){const v=(g+1)%3,S=f[g],b=f[v],A=Ho[h[g]],w=Ho[h[v]],P=`${S}_${b}`,O=`${b}_${S}`;O in d&&d[O]?(Su.dot(d[O].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(w.x,w.y,w.z)),d[O]=null):P in d||(d[P]={index0:c[g],index1:c[v],normal:Su.clone()})}}for(const _ in d)if(d[_]){const{index0:y,index1:m}=d[_];ko.fromBufferAttribute(o,y),zo.fromBufferAttribute(o,m),p.push(ko.x,ko.y,ko.z),p.push(zo.x,zo.y,zo.z)}this.setAttribute("position",new Tt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class mh extends ph{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new mh(e.radius,e.detail)}}class gh extends $t{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new U,d=new U,p=[],_=[],y=[],m=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let S=0;u===0&&a===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let b=0;b<=n;b++){const A=b/n;f.x=-e*Math.cos(r+A*s)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(r+A*s)*Math.sin(a+v*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),m.push(A+S,1-v),g.push(c++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=h[u][g+1],S=h[u][g],b=h[u+1][g],A=h[u+1][g+1];(u!==0||a>0)&&p.push(v,S,A),(u!==i-1||l<Math.PI)&&p.push(S,b,A)}this.setIndex(p),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mu extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gv,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fA extends zl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Ov extends Pt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Eu=new ut,km=new U,zm=new U;class dA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uh,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;km.setFromMatrixPosition(e.matrixWorld),n.position.copy(km),zm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(zm),n.updateMatrixWorld(),Eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hA extends dA{constructor(){super(new fh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pA extends Ov{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new hA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mA extends Ov{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class gA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Hm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Hm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);const yr=[{id:"sop-search",index:"01",kicker:"知識檢索",name:"SOP 檢索網站",layout:"lead",problem:"同一份出貨流程，資深同事記在腦子裡，新人得翻三個資料夾才找得到。問人最快，但問的人越多，被打斷的人也越多。",approach:"把散在各處的 SOP 收斂成一個可搜尋的網站，用關鍵字直接命中步驟，圖文並排，不用再一頁一頁翻。",metrics:[{label:"查找時間",value:null,unit:"分鐘"},{label:"收錄 SOP",value:null,unit:"份"},{label:"每週被詢問次數",value:null,unit:"次"}],status:"已上線"},{id:"coupang-oms",index:"02",kicker:"訂單處理",name:"酷澎訂單管理系統",layout:"offset",problem:"訂單從後台下載、整理、對帳到出貨，中間隔了好幾個 Excel 檔，每一次複製貼上都是一次出錯的機會。",approach:"把整條訂單流程收進同一個系統：抓單、比對、產出貨資料一次到位，各環節的狀態直接看得到。",metrics:[{label:"單筆處理時間",value:null,unit:"分鐘"},{label:"人工轉檔次數",value:null,unit:"次"},{label:"測試覆蓋",value:"164",unit:"項通過"}],status:"開發中"}];function vA(t,e,n){const s=document.createElement("canvas");s.width=512,s.height=176;const a=s.getContext("2d"),o=18,l=14;a.fillStyle="rgba(10, 10, 11, 0.82)",a.strokeStyle=n?"#d10f27":"rgba(245, 242, 238, 0.35)",a.lineWidth=3;const c=512-o*2,h=176-o*2,f=o,d=o;a.beginPath(),a.moveTo(f+l,d),a.arcTo(f+c,d,f+c,d+h,l),a.arcTo(f+c,d+h,f,d+h,l),a.arcTo(f,d+h,f,d,l),a.arcTo(f,d,f+c,d,l),a.closePath(),a.fill(),a.stroke(),a.fillStyle=n?"#d10f27":"#f5f2ee",a.font='700 40px "Noto Sans TC", sans-serif',a.textBaseline="top",a.fillText(t,f+24,d+22),a.fillStyle="rgba(245, 242, 238, 0.62)",a.font='400 26px "Noto Sans TC", sans-serif',a.fillText(e,f+24,d+78);const p=new cA(s);p.colorSpace=Un;const _=new Uv({map:p,transparent:!0,depthWrite:!1}),y=new oA(_);return y.scale.set(4.2,4.2*176/512,1),y}function _A(){const t=it.useRef(null);return it.useEffect(()=>{const e=t.current;if(!e)return;const n=new sA,i=e.clientWidth/e.clientHeight,r=9,s=new fh(-r*i,r*i,r,-r,.1,100);s.position.set(14,12,14),s.lookAt(0,.5,0);const a=new rA({alpha:!0,antialias:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(e.clientWidth,e.clientHeight),e.appendChild(a.domElement);const o=new ca;n.add(o),n.add(new mA(16777215,.5));const l=new pA(16777215,.7);l.position.set(8,14,6),n.add(l);const c=8+Math.max(yr.length,1)*2.6,h=new Bs(c,.3,c),f=new Mu({color:1118483,roughness:.9}),d=new pn(h,f);d.position.y=-1.6,o.add(d);const p=new lA(new uA(h),new zl({color:3355443,transparent:!0,opacity:.5}));d.add(p);const _=Math.max(yr.length,1),y=new Mu({color:2236966,roughness:.75}),m=new Mu({color:13700903,emissive:13700903,emissiveIntensity:.5,roughness:.35}),u=[],g=new fA({color:13700903,dashSize:.35,gapSize:.25,transparent:!0,opacity:.55});yr.forEach((O,x)=>{const E=_===1?0:x/(_-1),G=-5+E*10,z=-4+E*8,Y=-.2+E*3.4,J=O.status==="已上線",W=new mh(.55,0),Z=new pn(W,J?m:y);Z.position.set(G,Y,z),o.add(Z);const D=new $t().setFromPoints([new U(G,Y,z),new U(G,-1.45,z)]),q=new sd(D,new zl({color:5592405,transparent:!0,opacity:.6}));o.add(q);const Q=new hh(.14,20),ne=new pn(Q,new Bl({color:J?13700903:8947848}));ne.rotation.x=-Math.PI/2,ne.position.set(G,-1.44,z),o.add(ne);const Se=vA(`${O.index} ${O.name}`,O.kicker,J);Se.position.set(G,Y+1.15,z),o.add(Se),u.push({mesh:Z,x:G,y:Y,z,phase:x*1.7})});const v=[];for(let O=0;O<u.length-1;O++){const x=u[O],E=u[O+1],G=new $t().setFromPoints([new U(x.x,x.y,x.z),new U(E.x,E.y,E.z)]),z=new sd(G,g);z.computeLineDistances(),o.add(z);const Y=new gh(.08,12,12),J=new Bl({color:16734824}),W=new pn(Y,J);o.add(W),v.push({dot:W,a:x,b:E,offset:O*.4})}let S,b=0;const A=new gA;function w(){S=requestAnimationFrame(w),b+=A.getDelta(),o.rotation.y=Math.sin(b*.12)*.12,u.forEach(O=>{O.mesh.position.y=O.y+Math.sin(b*1.1+O.phase)*.18,O.mesh.rotation.y+=.006}),v.forEach(O=>{const x=(b*.35+O.offset)%1;O.dot.position.lerpVectors(new U(O.a.x,O.a.y,O.a.z),new U(O.b.x,O.b.y,O.b.z),x)}),a.render(n,s)}w();function P(){const O=e.clientWidth,x=e.clientHeight,E=O/x;s.left=-r*E,s.right=r*E,s.updateProjectionMatrix(),a.setSize(O,x)}return window.addEventListener("resize",P),()=>{cancelAnimationFrame(S),window.removeEventListener("resize",P),a.dispose(),e.removeChild(a.domElement)}},[]),C.jsx("div",{className:"roadmap-canvas",ref:t})}function xA({active:t}){return C.jsxs("section",{className:"roadmap",children:[C.jsxs("div",{className:"roadmap-rail",children:[C.jsx("span",{className:"rail-label",children:"全貌"}),C.jsxs("h2",{className:"thesis-heading roadmap-heading",children:["從觀察到落地的",yr.length,"個切入點"]})]}),C.jsx("div",{className:"roadmap-stage",children:t&&C.jsx(_A,{})})]})}function yA({items:t}){return C.jsx("dl",{className:"metrics",children:t.map(e=>C.jsxs("div",{children:[C.jsx("dt",{children:e.label}),C.jsxs("dd",{children:[e.value===null?C.jsx("span",{className:"pending",title:"待補實際數字",children:"—"}):e.value,C.jsx("span",{className:"unit",children:e.unit})]})]},e.label))})}function SA({tool:t}){return C.jsxs("section",{className:`tool tool--${t.layout} slide-content`,children:[C.jsxs("div",{className:"rail",children:[C.jsx("span",{className:"rail-index",children:t.index}),C.jsx("span",{className:"rail-label",children:t.kicker})]}),C.jsxs("header",{className:"tool-head",children:[C.jsx("h2",{children:t.name}),C.jsx("span",{className:`status status--${t.status==="已上線"?"live":"wip"}`,children:t.status})]}),C.jsxs("div",{className:"tool-problem",children:[C.jsx("span",{className:"tag",children:"卡住的地方"}),C.jsx("p",{children:t.problem})]}),C.jsxs("div",{className:"tool-approach",children:[C.jsx("span",{className:"tag",children:"怎麼解"}),C.jsx("p",{children:t.approach})]}),C.jsx("figure",{className:"tool-figure",children:C.jsx(eh,{variant:t.layout==="lead"?"scatter":"converge"})}),C.jsx("div",{className:"tool-metrics",children:C.jsx(yA,{items:t.metrics})})]})}const ia=yr.find(t=>t.id==="sop-search"),Gm=.45,MA=3;function EA({active:t}){const e=it.useRef(null),[n,i]=it.useState(!1);it.useEffect(()=>{const s=e.current;if(!s)return;const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!t){s.pause();return}const o=()=>{try{s.currentTime=a?MA:Gm}catch{}a||s.play().catch(()=>{})};return s.readyState>=1?o():s.addEventListener("loadedmetadata",o,{once:!0}),()=>s.removeEventListener("loadedmetadata",o)},[t]);const r=()=>{const s=e.current;s&&(s.currentTime=Gm,s.play().catch(()=>{}))};return C.jsxs("section",{className:"sop sop-title slide-content",children:[C.jsxs("div",{className:"rail",children:[C.jsx("span",{className:"rail-index",children:ia.index}),C.jsx("span",{className:"rail-label",children:ia.kicker})]}),C.jsxs("div",{className:"sop-title-body",children:[C.jsxs("header",{className:"tool-head",children:[C.jsx("h2",{children:ia.name}),C.jsx("span",{className:`status status--${ia.status==="已上線"?"live":"wip"}`,children:ia.status})]}),C.jsx("p",{className:"prose sop-title-lede",children:"把散落在各處的作業流程，收成一個查得到、比得出、改得動的入口。"})]}),C.jsx("figure",{className:`sop-title-figure${t?" is-active":""}`,children:C.jsx("video",{ref:e,className:`sop-title-video${n?" is-ready":""}`,src:"sop-loop.webm",muted:!0,playsInline:!0,preload:"auto",onSeeked:()=>i(!0),onEnded:r,"aria-label":"SOP 檢索網站介面展示"})})]})}const TA=[{index:"01",title:"營運流程難以標準化",lines:["每個人負責的線別、品牌與累積下來的做事方式都不一樣，久了，每條線的運作就變成那個人的個人經驗。","平常各自跑沒問題，一遇到請假代理或跨線輪調，落差就浮出來。"]},{index:"02",title:"新進同仁不易上手",lines:["新進同仁缺乏直覺指引，往往只能即時詢問資深夥伴。","然而被中斷的，多半是具有高度時效性（轉單、拋單）的核心作業，造成雙向的時間耗損。"]},{index:"03",title:"文件複雜且分散，效益較難達到預期",lines:["過去同仁曾用心將流程整理成文件存放，但因格式與內容相對分散，遇到緊急狀況時往往較難第一時間查閱。","即便文件庫已建立，實務上大家仍多依賴口頭溝通，導致整理效益尚未能完全發揮。"]}];function wA({active:t}){return C.jsxs("section",{className:"sop sop-pain slide-content",children:[C.jsxs("div",{className:"rail",children:[C.jsx("span",{className:"rail-index",children:"01"}),C.jsx("span",{className:"rail-label",children:"SOP檢索網站"})]}),C.jsx("div",{className:"sop-head",children:C.jsx("h2",{className:"thesis-heading",children:C.jsx(Qn,{text:"痛點：流程複雜造成的視覺負擔",active:t})})}),C.jsx("div",{className:"findings",children:TA.map((e,n)=>C.jsxs("article",{className:"finding reveal-line",style:t?{animationDelay:`${.55+n*.35}s`}:{opacity:1,animation:"none"},children:[C.jsx("span",{className:"finding-index",children:e.index}),C.jsx("h3",{children:e.title}),e.lines.map(i=>C.jsx("p",{children:i},i))]},e.index))})]})}const AA=[{src:"sop-docs-1.png",top:"6%",left:"46%",width:"42%",rotate:4},{src:"sop-docs-2.png",top:"32%",left:"0%",width:"44%",rotate:-5},{src:"sop-docs-3.png",top:"37%",left:"44%",width:"44%",rotate:3},{src:"sop-docs-4.png",top:"47%",left:"20%",width:"40%",rotate:2},{src:"sop-docs-5.png",top:"65%",left:"0%",width:"42%",rotate:5},{src:"sop-docs-6.png",top:"63%",left:"44%",width:"42%",rotate:-4}];function CA({active:t}){const e=n=>t?{animationDelay:`${.5+n*.45}s`}:{opacity:1,animation:"none"};return C.jsxs("section",{className:"sop sop-judgement slide-content",children:[C.jsxs("div",{className:"rail",children:[C.jsx("span",{className:"rail-index",children:"01"}),C.jsx("span",{className:"rail-label",children:"SOP檢索網站"})]}),C.jsx("div",{className:"sop-head sop-head--narrow",children:C.jsx("h2",{className:"thesis-heading",children:C.jsx(Qn,{text:"我個人的想法是",active:t})})}),C.jsxs("div",{className:"verdict",children:[C.jsxs("p",{className:"verdict-line reveal-line",style:e(0),children:["現有資料其實夠多了，",C.jsx("br",{}),"重點在於",C.jsx("b",{children:"能不能真的發揮作用"}),"。"]}),C.jsxs("p",{className:"verdict-line verdict-line--sub reveal-line",style:e(1),children:["如果能有一個方便",C.jsx("em",{children:"查找"}),"、",C.jsx("em",{children:"比對"}),"和",C.jsx("em",{children:"修改"}),"的",C.jsx("br",{}),"統整入口，大家處理起來會順手很多。"]})]}),C.jsxs("figure",{className:`doc-pile${t?" is-active":""}`,children:[C.jsx("img",{src:"sop-docs-folder.png",alt:"部門作業流程資料夾，依品牌與通路分成六類",className:"doc-pile-folder",style:{"--pile-delay":"1.3s"}}),AA.map((n,i)=>C.jsx("img",{src:n.src,alt:"",className:"doc-pile-sheet",style:{top:n.top,left:n.left,width:n.width,"--rotate":`${n.rotate}deg`,"--pile-delay":`${1.55+i*.09}s`}},n.src))]})]})}const RA=[{tag:"查找",lines:["完整收錄現有的 46 份 SOP 與 500 多張操作截圖，支援關鍵字（如：退貨、補貨、嘜頭、EIP）直接定位到具體步驟。"]},{tag:"篩選",lines:["同時可依品牌、通路、出貨與物流型態交叉篩選，例如快速調出所有「竹運」相關的 SOP，大幅縮短翻找時間。"]}];function bA({active:t}){const e=it.useRef(null);return it.useEffect(()=>{const n=e.current;n&&(t?(n.currentTime=0,n.play().catch(()=>{})):n.pause())},[t]),C.jsxs("section",{className:"sop sop-collect slide-content",children:[C.jsxs("div",{className:"rail",children:[C.jsx("span",{className:"rail-index",children:"01"}),C.jsx("span",{className:"rail-label",children:"SOP檢索網站"})]}),C.jsx("div",{className:"sop-head sop-head--narrow",children:C.jsx("h2",{className:"thesis-heading",children:C.jsx(Qn,{text:"精準檢索，多維篩選",active:t})})}),C.jsx("div",{className:"sop-blocks",children:RA.map((n,i)=>C.jsxs("div",{className:"sop-block reveal-line",style:t?{animationDelay:`${.55+i*.4}s`}:{opacity:1,animation:"none"},children:[C.jsx("span",{className:"tag",children:n.tag}),n.lines.map(r=>C.jsx("p",{children:r},r))]},n.tag))}),C.jsx("figure",{className:`sop-collect-figure${t?" is-active":""}`,children:C.jsx("video",{ref:e,className:"sop-collect-video",src:"sop-collect-demo.webm",muted:!0,loop:!0,playsInline:!0,preload:"auto","aria-label":"多維篩選操作示範"})})]})}const PA=["接單確認","建立文件","系統下採","通知窗口","竹運核對","製作嘜頭","出貨文件確認","發送與登記"],LA=[{name:"通路 A",cover:[1,1,1,1,1,1,1,1]},{name:"通路 B",cover:[1,1,1,0,1,1,1,1]},{name:"通路 C",cover:[1,1,1,1,0,0,1,1]}];function DA({active:t}){const e=n=>t?{animationDelay:`${.5+n*.3}s`}:{opacity:1,animation:"none"};return C.jsxs("section",{className:"sop sop-compare slide-content",children:[C.jsxs("div",{className:"rail",children:[C.jsx("span",{className:"rail-index",children:"01"}),C.jsx("span",{className:"rail-label",children:"SOP檢索網站"})]}),C.jsx("div",{className:"sop-head",children:C.jsx("h2",{className:"thesis-heading",children:C.jsx(Qn,{text:"比得出：27 份出貨 SOP，同一條主幹",active:t})})}),C.jsxs("div",{className:"sop-compare-body",children:[C.jsx("p",{className:"prose reveal-line",style:e(0),children:"品牌與通路各不相同，但主幹是同一條。我把它歸納成八個階段， 每一份文件都對到這八格——哪個通路多了什麼、少了什麼，一眼看得出來。"}),C.jsx("p",{className:"prose reveal-line",style:e(1),children:"對代理人來說這正是最需要的：我熟的那條線是這樣走， 我要代理的這條線差在哪裡，畫面上直接看得到。"}),C.jsx("p",{className:"prose prose--accent reveal-line",style:e(2),children:"哪一份缺了某個階段沒寫，畫面上就是空的——等於一張自動產生的體檢表。"})]}),C.jsxs("figure",{className:"stage-matrix reveal-line",style:e(3),children:[C.jsx("div",{className:"stage-track",children:PA.map((n,i)=>C.jsxs("div",{className:"stage-node",children:[C.jsx("span",{className:"stage-num",children:String(i+1).padStart(2,"0")}),C.jsx("span",{className:"stage-name",children:n})]},n))}),C.jsx("div",{className:"stage-rows",children:LA.map(n=>C.jsxs("div",{className:"stage-row",children:[C.jsx("span",{className:"stage-row-name",children:n.name}),C.jsx("div",{className:"stage-cells",children:n.cover.map((i,r)=>C.jsx("span",{className:`stage-cell${i?" stage-cell--on":""}`},r))})]},n.name))}),C.jsx("figcaption",{children:"覆蓋狀況為示意；實際內容由網站依試算表即時產生"})]})]})}const NA=["內容存在 Google 試算表：更新試算表、網站重新整理就同步，不需要碰程式。","網站本身有編輯模式，輸入編輯碼就能新增或修改；沒有編輯碼的人只能看，不會誤改。"],IA=[{who:"新人上手",what:"自己查得到，不用每件事都開口問。"},{who:"職務代理 ／ 跨線輪調",what:"先看清楚兩條線差在哪裡，再接手。"},{who:"交接與稽核",what:"有一份大家講的是同一個版本的依據。"}];function UA({active:t}){const e=n=>t?{animationDelay:`${.5+n*.3}s`}:{opacity:1,animation:"none"};return C.jsxs("section",{className:"sop sop-maintain slide-content",children:[C.jsxs("div",{className:"rail",children:[C.jsx("span",{className:"rail-index",children:"01"}),C.jsx("span",{className:"rail-label",children:"SOP檢索網站"})]}),C.jsx("div",{className:"sop-head",children:C.jsx("h2",{className:"thesis-heading",children:C.jsx(Qn,{text:"改得動，而且不綁在我身上",active:t})})}),C.jsx("div",{className:"sop-maintain-body",children:NA.map((n,i)=>C.jsx("p",{className:"prose reveal-line",style:e(i),children:n},n))}),C.jsxs("div",{className:"user-cases",children:[C.jsx("span",{className:"tag",children:"現在誰用得到"}),C.jsx("div",{className:"user-case-list",children:IA.map((n,i)=>C.jsxs("div",{className:"user-case reveal-line",style:t?{animationDelay:`${1.3+i*.25}s`}:{opacity:1,animation:"none"},children:[C.jsx("h3",{children:n.who}),C.jsx("p",{children:n.what})]},n.who))})]})]})}function FA({active:t}){return C.jsxs("section",{className:"hero",children:[C.jsx("div",{className:"hero-sphere",children:t&&C.jsx(ky,{})}),C.jsx("svg",{className:"hero-house",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:C.jsx("path",{d:"M50,3 L95,34 L95,97 L5,97 L5,34 Z"})}),C.jsx("div",{className:"hero-scrim"}),C.jsxs("div",{className:"brand-mark",children:[C.jsx("img",{src:"logo.png",alt:"永豐商店"}),C.jsx("span",{children:"YFS"})]}),C.jsxs("div",{className:"hero-content",children:[C.jsx("p",{className:"eyebrow",children:"儲備幹部試用期報告"}),C.jsx("h1",{children:"AI 流程再造"}),C.jsx("h2",{children:"永豐商店 SOP 優化與實務落地"}),C.jsx("div",{className:"divider"}),C.jsx("div",{className:"meta",children:C.jsxs("span",{children:[C.jsx("b",{children:"Jerry Tsai"})," 蔡政穎"]})})]})]})}const Bv=6,ua=[{id:"hero",steps:1},{id:"thesis",steps:2},{id:"ai-importance",steps:3},{id:"roadmap",steps:1},...yr.map(t=>({id:t.id,steps:t.id==="sop-search"?Bv:1}))],Zr=ua.length;function Qr({stepCount:t,localStep:e,children:n}){return C.jsx("div",{className:"chapter",children:C.jsx("div",{className:"chapter-track",style:{height:`${t*100}vh`,transform:`translateY(-${e*(100/t)}%)`},children:n})})}function OA(){const[t,e]=it.useState({chapter:0,step:0}),[n,i]=it.useState({"0.0":1});it.useEffect(()=>{const h=`${t.chapter}.${t.step}`;i(f=>({...f,[h]:(f[h]||0)+1}))},[t.chapter,t.step]);const r=it.useCallback(h=>{e(f=>{const d=Math.min(Math.max(f.chapter+h,0),Zr-1);return d===f.chapter?f:{chapter:d,step:0}})},[]),s=it.useCallback(h=>{e(f=>{const d=ua[f.chapter].steps,p=f.step+h;return p<0||p>=d?f:{...f,step:p}})},[]),a=it.useCallback(h=>{e(f=>{const d=ua[f.chapter].steps;if(h>0)return f.step<d-1?{...f,step:f.step+1}:f.chapter<Zr-1?{chapter:f.chapter+1,step:0}:f;if(f.step>0)return{...f,step:f.step-1};if(f.chapter>0){const p=ua[f.chapter-1].steps;return{chapter:f.chapter-1,step:p-1}}return f})},[]);it.useEffect(()=>{function h(f){f.key==="ArrowRight"?(f.preventDefault(),r(1)):f.key==="ArrowLeft"?(f.preventDefault(),r(-1)):f.key==="ArrowDown"?(f.preventDefault(),s(1)):f.key==="ArrowUp"?(f.preventDefault(),s(-1)):f.key===" "||f.key==="PageDown"?(f.preventDefault(),a(1)):f.key==="PageUp"&&(f.preventDefault(),a(-1))}return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[r,s,a]);const o=it.useRef(!1);it.useEffect(()=>{function h(f){Math.abs(f.deltaY)<12||(f.preventDefault(),!o.current&&(o.current=!0,s(f.deltaY>0?1:-1),setTimeout(()=>{o.current=!1},700)))}return window.addEventListener("wheel",h,{passive:!1}),()=>window.removeEventListener("wheel",h)},[s]);const l=ua[t.chapter].steps,c=(h,f)=>n[`${h}.${f}`]||0;return C.jsxs("div",{className:"deck",children:[C.jsxs("div",{className:"deck-track",style:{width:`${Zr*100}vw`,transform:`translateX(-${t.chapter*(100/Zr)}%)`},children:[C.jsx(Qr,{stepCount:1,localStep:0,children:C.jsx("div",{className:"step",children:C.jsx(FA,{active:t.chapter===0})})}),C.jsxs(Qr,{stepCount:2,localStep:t.chapter===1?t.step:0,children:[C.jsx("div",{className:"step",children:C.jsx(Hy,{active:t.chapter===1&&t.step===0},c(1,0))}),C.jsx("div",{className:"step",children:C.jsx(Vy,{active:t.chapter===1&&t.step===1},c(1,1))})]}),C.jsxs(Qr,{stepCount:3,localStep:t.chapter===2?t.step:0,children:[C.jsx("div",{className:"step",children:C.jsx(jy,{active:t.chapter===2&&t.step===0},c(2,0))}),C.jsx("div",{className:"step",children:C.jsx(tS,{active:t.chapter===2&&t.step===1},c(2,1))}),C.jsx("div",{className:"step",children:C.jsx(nS,{active:t.chapter===2&&t.step===2},c(2,2))})]}),C.jsx(Qr,{stepCount:1,localStep:0,children:C.jsx("div",{className:"step",children:C.jsx(xA,{active:t.chapter===3})})}),yr.map((h,f)=>{const d=4+f;if(h.id==="sop-search"){const p=t.chapter===d?t.step:0,_=y=>t.chapter===d&&t.step===y;return C.jsxs(Qr,{stepCount:Bv,localStep:p,children:[C.jsx("div",{className:"step",children:C.jsx(EA,{active:_(0)},c(d,0))}),C.jsx("div",{className:"step",children:C.jsx(wA,{active:_(1)},c(d,1))}),C.jsx("div",{className:"step",children:C.jsx(CA,{active:_(2)},c(d,2))}),C.jsx("div",{className:"step",children:C.jsx(bA,{active:_(3)},c(d,3))}),C.jsx("div",{className:"step",children:C.jsx(DA,{active:_(4)},c(d,4))}),C.jsx("div",{className:"step",children:C.jsx(UA,{active:_(5)},c(d,5))})]},h.id)}return C.jsx(Qr,{stepCount:1,localStep:0,children:C.jsx("div",{className:"step",children:C.jsx(SA,{tool:h})})},h.id)})]}),l>1&&C.jsx("div",{className:"step-dots",children:Array.from({length:l},(h,f)=>C.jsx("span",{className:`step-dot${f===t.step?" step-dot--active":""}`},f))}),C.jsx("button",{type:"button",className:"deck-nav deck-nav--prev",onClick:()=>r(-1),disabled:t.chapter===0,"aria-label":"上一章",children:"‹"}),C.jsx("button",{type:"button",className:"deck-nav deck-nav--next",onClick:()=>r(1),disabled:t.chapter===Zr-1,"aria-label":"下一章",children:"›"}),C.jsxs("div",{className:"deck-counter",children:[String(t.chapter+1).padStart(2,"0")," / ",String(Zr).padStart(2,"0")]})]})}tv(document.getElementById("root")).render(C.jsx(s_.StrictMode,{children:C.jsx(OA,{})}));
