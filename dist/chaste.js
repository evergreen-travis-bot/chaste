/**
 * chaste - Utility for type casting & data conversion.
 * @version v1.1.0
 * @link    https://github.com/Kikobeats/chaste
 * @license MIT
 */require=function n(r,t,e){function u(i,c){if(!t[i]){if(!r[i]){var f="function"==typeof require&&require;if(!c&&f)return f(i,!0);if(o)return o(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[i]={exports:{}};r[i][0].call(l.exports,function(n){var t=r[i][1][n];return u(t?t:n)},l,l.exports,n,r,t,e)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<e.length;i++)u(e[i]);return u}({1:[function(n,r,t){"use strict";r.exports={CLASS_TYPES:["Buffer","Date","Error"],FLAT_TYPES:["String","Boolean","Number","RegExp"]}},{}],2:[function(n,r,t){(function(t){"use strict";function e(n){function r(){return f.applyConstructor(n,arguments)}return r}function u(n){function r(){return f.applyNewConstructor(n,f.values(arguments))}return r}function o(n){var r=n.name.toLowerCase();return function(t){return typeof t===r?t:n(t)}}function i(n){return null==n?new Error("Chaste need a type"):this instanceof i?f.includes(c.CLASS_TYPES,n.name)?u(n):f.includes(c.FLAT_TYPES,n.name)?o(t[n.name]):e(n):new i(n)}var c=n("./constants"),f=n("./util");r.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./constants":1,"./util":3}],3:[function(n,r,t){"use strict";function e(n){return Array.isArray(n)&&!n.apply}function u(n){return!Array.isArray(n)&&"object"==typeof n&&!n.apply}function o(n,r){return e(n)&&(n=Array),u(n)&&(n=Object),n.apply(n,r)}function i(n,r){r=[null].concat(r);var t=n.bind.apply(n,r);return new t}var c=n("lodash.includes"),f=n("lodash.values");r.exports={applyNewConstructor:i,applyConstructor:o,isArrayLiteral:e,isObjectLiteral:u,includes:c,values:f}},{"lodash.includes":4,"lodash.values":6}],4:[function(n,r,t){function e(n,r){for(var t=-1,e=n.length,u=Array(e);++t<e;)u[t]=r(n[t],t,n);return u}function u(n,r,t){if(r!==r)return i(n,t);for(var e=t-1,u=n.length;++e<u;)if(n[e]===r)return e;return-1}function o(n,r){return e(r,function(r){return n[r]})}function i(n,r,t){for(var e=n.length,u=r+(t?0:-1);t?u--:++u<e;){var o=n[u];if(o!==o)return u}return-1}function c(n){return function(r){return null==r?void 0:r[n]}}function f(n,r,t,e){n=a(n)?n:h(n),t=t&&!e?b(t):0;var o=n.length;return 0>t&&(t=_(o+t,0)),v(n)?o>=t&&n.indexOf(r,t)>-1:!!o&&u(n,r,t)>-1}function a(n){return null!=n&&s(k(n))&&!l(n)}function l(n){var r=p(n)?P.call(n):"";return r==S||r==w}function s(n){return"number"==typeof n&&n>-1&&n%1==0&&A>=n}function p(n){var r=typeof n;return!!n&&("object"==r||"function"==r)}function y(n){return!!n&&"object"==typeof n}function v(n){return"string"==typeof n||!q(n)&&y(n)&&P.call(n)==m}function b(n){if(!n)return 0===n?n:0;if(n=d(n),n===j||n===-j){var r=0>n?-1:1;return r*x}var t=n%1;return n===n?t?n-t:n:0}function d(n){if(p(n)){var r=l(n.valueOf)?n.valueOf():n;n=p(r)?r+"":r}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(E,"");var t=L.test(n);return t||F.test(n)?N(n.slice(2),t?2:8):C.test(n)?O:+n}function h(n){return n?o(n,g(n)):[]}var g=n("lodash.keys"),j=1/0,A=9007199254740991,x=1.7976931348623157e308,O=NaN,S="[object Function]",w="[object GeneratorFunction]",m="[object String]",E=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,F=/^0o[0-7]+$/i,N=parseInt,T=Object.prototype,P=T.toString,_=Math.max,k=c("length"),q=Array.isArray;r.exports=f},{"lodash.keys":5}],5:[function(n,r,t){function e(n,r){for(var t=-1,e=Array(n);++t<n;)e[t]=r(t);return e}function u(n,r){return n="number"==typeof n||w.test(n)?+n:-1,r=null==r?j:r,n>-1&&n%1==0&&r>n}function o(n,r){return E.call(n,r)||"object"==typeof n&&r in n&&null===L(n)}function i(n){return N(Object(n))}function c(n){return function(r){return null==r?void 0:r[n]}}function f(n){var r=n?n.length:void 0;return v(r)&&(P(n)||h(n)||l(n))?e(r,String):null}function a(n){var r=n&&n.constructor,t="function"==typeof r&&r.prototype||m;return n===t}function l(n){return p(n)&&E.call(n,"callee")&&(!F.call(n,"callee")||C.call(n)==A)}function s(n){return null!=n&&v(T(n))&&!y(n)}function p(n){return d(n)&&s(n)}function y(n){var r=b(n)?C.call(n):"";return r==x||r==O}function v(n){return"number"==typeof n&&n>-1&&n%1==0&&j>=n}function b(n){var r=typeof n;return!!n&&("object"==r||"function"==r)}function d(n){return!!n&&"object"==typeof n}function h(n){return"string"==typeof n||!P(n)&&d(n)&&C.call(n)==S}function g(n){var r=a(n);if(!r&&!s(n))return i(n);var t=f(n),e=!!t,c=t||[],l=c.length;for(var p in n)!o(n,p)||e&&("length"==p||u(p,l))||r&&"constructor"==p||c.push(p);return c}var j=9007199254740991,A="[object Arguments]",x="[object Function]",O="[object GeneratorFunction]",S="[object String]",w=/^(?:0|[1-9]\d*)$/,m=Object.prototype,E=m.hasOwnProperty,C=m.toString,L=Object.getPrototypeOf,F=m.propertyIsEnumerable,N=Object.keys,T=c("length"),P=Array.isArray;r.exports=g},{}],6:[function(n,r,t){function e(n,r){for(var t=-1,e=n.length,u=Array(e);++t<e;)u[t]=r(n[t],t,n);return u}function u(n,r){return e(r,function(r){return n[r]})}function o(n){return n?u(n,i(n)):[]}var i=n("lodash.keys");r.exports=o},{"lodash.keys":5}],chaste:[function(n,r,t){r.exports=n("./lib")},{"./lib":2}]},{},[]);