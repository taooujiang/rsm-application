webpackJsonp([9],{/***/
108:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var n=Array.isArray;/* harmony default export */
e.a=n},/***/
109:/***/
function(module,e,t){"use strict";/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function n(e,t){var n=Object(a.a)(e,t);return Object(r.a)(n)?n:void 0}/* harmony import */
var r=t(837),a=t(840);/* harmony default export */
e.a=n},/***/
1117:/***/
function(module,exports){function e(e,n){var r=e[1]||"",a=e[3];if(!a)return r;if(n&&"function"==typeof btoa){var o=t(a);return[r].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([o]).join("\n")}return[r].join("\n")}
// Adapted from convert-source-map (MIT)
function t(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports=function(t){var n=[];
// return the list of modules as css string
// import a list of modules into the list
return n.toString=function(){return this.map(function(n){var r=e(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var u=e[a];
// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
"number"==typeof u[0]&&r[u[0]]||(t&&!u[2]?u[2]=t:t&&(u[2]="("+u[2]+") and ("+t+")"),n.push(u))}},n}},/***/
200:/***/
function(module,e,t){"use strict";/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function n(e){return e}/* harmony default export */
e.a=n},/***/
201:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}/* harmony default export */
e.a=n},/***/
202:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function n(e){return null!=e&&Object(a.a)(e.length)&&!Object(r.a)(e)}/* harmony import */
var r=t(95),a=t(345);/* harmony default export */
e.a=n},/***/
203:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function n(e){return"string"==typeof e||!Object(a.a)(e)&&Object(o.a)(e)&&Object(r.a)(e)==u}/* harmony import */
var r=t(73),a=t(108),o=t(91),u="[object String]";/* harmony default export */
e.a=n},/***/
204:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function n(e){return"symbol"==typeof e||Object(a.a)(e)&&Object(r.a)(e)==o}/* harmony import */
var r=t(73),a=t(91),o="[object Symbol]";/* harmony default export */
e.a=n},/***/
205:/***/
function(module,e,t){"use strict";function n(e){if("undefined"!=typeof Reflect&&"function"==typeof Reflect.ownKeys)return Reflect.ownKeys(e);var t=Object.getOwnPropertyNames(e);return"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e))),t}/* harmony export (immutable) */
e.a=n},/***/
224:/***/
function(module,exports,e){"use strict";function t(){var e=document.createElement("div");return e.className="app",document.body.appendChild(n()),document.body.appendChild(e),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;/**
 *  自动创建APP运行容器
 *
 *
 **/
var n=function(){var e=document.createElement("style");return e.innerHTML="\n    *, *:before, *:after {\n       -moz-box-sizing: border-box;\n       -webkit-box-sizing: border-box;\n       box-sizing: border-box;\n   }\n\n   html, body {\n       font-size: 16px;\n       line-height: 1.5rem;\n       height: 100%;\n       min-height: 100%;\n   }\n   .spinner{\n     display:none;\n   }\n  ",e}},/***/
225:/***/
function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=e(494),n=t.createRoutesFromReactChildren;exports.default=n},/***/
226:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.history=void 0;var n=e(51),r=e(62),a=e(32),o=e(339),u=t(o),i=e(340),l=e(789),c=t(l),s=e(790),f=t(s),d=e(791),p=t(d),h=e(793),m=t(h),y=e(795),b=t(y),v=e(799),g=t(v),O=e(801),E=t(O),w=e(803),j=t(w),x=e(805),k=t(x),S=e(806),C=t(S),P=e(808),R=t(P),T=e(810),A=t(T),M=(0,n.combineReducers)(Object.assign({},{appReducer:c.default,dashboardReducer:f.default,tabListResult:A.default,soundReducer:p.default,memberReducer:m.default,interviewReducer:j.default,worklogReducer:b.default,jobReducer:E.default,resumeReducer:k.default,eliteReducer:C.default,reportReducer:R.default,settingsReducer:g.default},{routing:a.routerReducer})),I=(0,a.routerMiddleware)(r.hashHistory),L=(0,i.createLogger)(),N=(0,n.applyMiddleware)(u.default,// 允许我们 dispatch() 函数
I,L)(n.createStore),F=N(M),H=(0,a.syncHistoryWithStore)(r.hashHistory,F);
// reduxRouterMiddleware.listenForReplays(store)
exports.history=H,exports.default=F},/***/
227:/***/
function(module,exports){},/***/
228:/***/
function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=e(759),n=function(e){return e&&e.__esModule?e:{default:e}}(t);exports.default=n.default},/***/
229:/***/
function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Layout=exports.Pane=exports.Fixed=void 0;var t=e(499),n=function(e){return e&&e.__esModule?e:{default:e}}(t);exports.Fixed=t.Fixed,exports.Pane=t.Pane,exports.Layout=n.default,exports.default=n.default},/***/
301:/***/
function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=e(32);exports.default=t.routeActions},/***/
302:/***/
function(module,exports,e){"use strict";/**
 * This reducer will update the state with the most recent location history
 * has transitioned to. This may not be in sync with the router, particularly
 * if you have asynchronously-loaded routes, so reading from and relying on
 * this state is discouraged.
 */
function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.type,u=t.payload;return o===r?n({},e,{locationBeforeTransitions:u}):e}Object.defineProperty(exports,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};exports.routerReducer=t;/**
 * This action type will be dispatched when your history
 * receives a location change.
 */
var r=exports.LOCATION_CHANGE="@@router/LOCATION_CHANGE",a={locationBeforeTransitions:null}},/***/
303:/***/
function(module,exports,e){"use strict";function t(e){return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return{type:n,payload:{method:e,args:r}}}}Object.defineProperty(exports,"__esModule",{value:!0});/**
 * This action type will be dispatched by the history actions below.
 * If you're writing a middleware to watch for navigation events, be sure to
 * look for actions of this type.
 */
var n=exports.CALL_HISTORY_METHOD="@@router/CALL_HISTORY_METHOD",r=exports.push=t("push"),a=exports.replace=t("replace"),o=exports.go=t("go"),u=exports.goBack=t("goBack"),i=exports.goForward=t("goForward");exports.routerActions={push:r,replace:a,go:o,goBack:u,goForward:i}},/***/
304:/***/
function(module,exports,e){"use strict";var t=e(664),n=e(665),r=e(306);module.exports={formats:r,parse:n,stringify:t}},/***/
305:/***/
function(module,exports,e){"use strict";var t=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),r=function(e){for(var t;e.length;){var n=e.pop();if(t=n.obj[n.prop],Array.isArray(t)){for(var r=[],a=0;a<t.length;++a)void 0!==t[a]&&r.push(t[a]);n.obj[n.prop]=r}}return t};exports.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},exports.merge=function(e,n,r){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(r.plainObjects||r.allowPrototypes||!t.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var a=e;return Array.isArray(e)&&!Array.isArray(n)&&(a=exports.arrayToObject(e,r)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,a){t.call(e,a)?e[a]&&"object"==typeof e[a]?e[a]=exports.merge(e[a],n,r):e.push(n):e[a]=n}),e):Object.keys(n).reduce(function(e,a){var o=n[a];return t.call(e,a)?e[a]=exports.merge(e[a],o,r):e[a]=o,e},a)},exports.assign=function(e,t){return Object.keys(t).reduce(function(e,n){return e[n]=t[n],e},e)},exports.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},exports.encode=function(e){
// This code was originally written by Brian White (mscdex) for the io.js core querystring library.
// It has been adapted here for stricter adherence to RFC 3986
if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",a=0;a<t.length;++a){var o=t.charCodeAt(a);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=t.charAt(a):o<128?r+=n[o]:o<2048?r+=n[192|o>>6]+n[128|63&o]:o<55296||o>=57344?r+=n[224|o>>12]+n[128|o>>6&63]+n[128|63&o]:(a+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(a)),r+=n[240|o>>18]+n[128|o>>12&63]+n[128|o>>6&63]+n[128|63&o])}return r},exports.compact=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],a=0;a<t.length;++a)for(var o=t[a],u=o.obj[o.prop],i=Object.keys(u),l=0;l<i.length;++l){var c=i[l],s=u[c];"object"==typeof s&&null!==s&&-1===n.indexOf(s)&&(t.push({obj:u,prop:c}),n.push(s))}return r(t)},exports.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},exports.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},/***/
306:/***/
function(module,exports,e){"use strict";var t=String.prototype.replace,n=/%20/g;module.exports={default:"RFC3986",formatters:{RFC1738:function(e){return t.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},/***/
32:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.routerMiddleware=exports.routerActions=exports.goForward=exports.goBack=exports.go=exports.replace=exports.push=exports.CALL_HISTORY_METHOD=exports.routerReducer=exports.LOCATION_CHANGE=exports.syncHistoryWithStore=void 0;var n=e(302);Object.defineProperty(exports,"LOCATION_CHANGE",{enumerable:!0,get:function(){return n.LOCATION_CHANGE}}),Object.defineProperty(exports,"routerReducer",{enumerable:!0,get:function(){return n.routerReducer}});var r=e(303);Object.defineProperty(exports,"CALL_HISTORY_METHOD",{enumerable:!0,get:function(){return r.CALL_HISTORY_METHOD}}),Object.defineProperty(exports,"push",{enumerable:!0,get:function(){return r.push}}),Object.defineProperty(exports,"replace",{enumerable:!0,get:function(){return r.replace}}),Object.defineProperty(exports,"go",{enumerable:!0,get:function(){return r.go}}),Object.defineProperty(exports,"goBack",{enumerable:!0,get:function(){return r.goBack}}),Object.defineProperty(exports,"goForward",{enumerable:!0,get:function(){return r.goForward}}),Object.defineProperty(exports,"routerActions",{enumerable:!0,get:function(){return r.routerActions}});var a=e(661),o=t(a),u=e(662),i=t(u);exports.syncHistoryWithStore=o.default,exports.routerMiddleware=i.default},/***/
326:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONSTANTS=void 0;var n=e(327),r=(t(n),e(32),e(301));t(r),e(713),exports.CONSTANTS={NEW_ITEM:"SOUND_NEW_ITEM"}},/***/
334:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(){return function(e){return e(l.routerActions.replace("/resume"))}}function r(){return function(e){return e(l.routerActions.goBack())}}function a(e){return function(t,n){return t(m("tableSpin")),(new i.default).fetchList(e).then(function(e){t(y("tableSpin")),t(p(e.list,e.page))}).catch(function(e){return t(h("tableSpin",e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.listRoute=n,exports.backRoute=r,exports.listAction=a;var o=e(42),u=(t(o),e(780)),i=t(u),l=e(32),c=e(43),s=t(c),f=(0,s.default)("resume",["get_list","sync_list","save_list","fetch_request","fetch_success","fetch_failure"]);exports.default=f;
//TODO: 调整命名及常量定义
var d=(0,c.createTypes)(f),p=(d.getItem,d.listItem,d.saveItem,d.saveList),h=d.fetchFailure,m=d.fetchRequest,y=d.fetchSuccess},/***/
335:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Routes=void 0;var n=e(0),r=t(n),a=e(10),o=(t(a),e(62)),u=e(224),i=(t(u),e(781)),l=t(i),c=(e(63),e(226)),s=(t(c),e(227)),f=(t(s),e(225));t(f),r.default.createElement(o.Router,{path:"/"},l.default.props.children);
// ReactDOM.render(
//   <Provider store={store}>
//     <Router routes={AppRouter} history={history}></Router>
//   </Provider>
// , createContainer())
//
exports.Routes=l.default},/***/
338:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){return{type:c.SAVE_NOTICES,payload:{list:e,total:t}}}function r(){return function(e,t){return e(d("noticeSpin")),(new l.default).fetchNotices().then(function(t){e(p("noticeSpin")),e(n(t.list))}).catch(function(t){return e(f("noticeSpin",t))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadNotices=r;var a=e(42),o=(t(a),e(32),e(43)),u=t(o),i=e(788),l=t(i),c=(0,u.default)("dashboard",["get_list","get_item","save_item","new_item","save_list","save_notices","fetch_request","fetch_success","fetch_failure"]);exports.default=c;var s=(0,o.createTypes)(c),f=(s.getItem,s.listItem,s.saveItem,s.saveList,s.fetchFailure),d=s.fetchRequest,p=s.fetchSuccess},/***/
341:/***/
function(module,exports,e){"use strict";function t(){return n.routerActions}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var n=e(32)},/***/
342:/***/
function(module,e,t){"use strict";function n(e){var t=arguments.length<=1||void 0===arguments[1]?r.a:arguments[1],n=arguments[2];i()(Object(a.a)(t)||Object(o.a)(t),"Expected payloadCreator to be a function, undefined or null");var u=Object(o.a)(t)||t===r.a?r.a:function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return e instanceof Error?e:t.apply(void 0,[e].concat(r))},l=Object(a.a)(n),c=e.toString(),s=function(){var t=u.apply(void 0,arguments),r={type:e};return t instanceof Error&&(r.error=!0),void 0!==t&&(r.payload=t),l&&(r.meta=n.apply(void 0,arguments)),r};return s.toString=function(){return c},s}/* harmony export (immutable) */
e.a=n;/* harmony import */
var r=t(200),a=t(95),o=t(812),u=t(18),i=t.n(u)},/***/
343:/***/
function(module,e,t){"use strict";function n(e){var t=arguments.length<=1||void 0===arguments[1]?o.a:arguments[1],n=arguments[2],c=e.toString().split(f.a);s()(!Object(i.a)(n),"defaultState for reducer handling "+c.join(", ")+" should be defined"),s()(Object(r.a)(t)||Object(a.a)(t),"Expected reducer to be a function or object with next and throw reducers");var p=Object(r.a)(t)?[t,t]:[t.next,t.throw].map(function(e){return Object(u.a)(e)?o.a:e}),h=d(p,2),m=h[0],y=h[1];return function(){var e=arguments.length<=0||void 0===arguments[0]?n:arguments[0],t=arguments[1],r=t.type;return r&&Object(l.a)(c,r.toString())?(!0===t.error?y:m)(e,t):e}}/* harmony export (immutable) */
e.a=n;/* harmony import */
var r=t(95),a=t(72),o=t(200),u=t(344),i=t(813),l=t(814),c=t(18),s=t.n(c),f=t(353),d=function(){function e(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},/***/
344:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function n(e){return null==e}/* harmony default export */
e.a=n},/***/
345:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}/** Used as references for various `Number` constants. */
var r=9007199254740991;/* harmony default export */
e.a=n},/***/
346:/***/
function(module,e,t){"use strict";/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function n(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}/* harmony default export */
e.a=n},/***/
347:/***/
function(module,e,t){"use strict";/* harmony import */
var n=t(827),r=t(91),a=Object.prototype,o=a.hasOwnProperty,u=a.propertyIsEnumerable,i=Object(n.a)(function(){return arguments}())?n.a:function(e){return Object(r.a)(e)&&o.call(e,"callee")&&!u.call(e,"callee")};/* harmony default export */
e.a=i},/***/
348:/***/
function(module,e,t){"use strict";/* WEBPACK VAR INJECTION */
(function(module){/* harmony import */var n=t(58),r=t(828),a="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=a&&"object"==typeof module&&module&&!module.nodeType&&module,u=o&&o.exports===a,i=u?n.a.Buffer:void 0,l=i?i.isBuffer:void 0,c=l||r.a;/* harmony default export */
e.a=c}).call(e,t(349)(module))},/***/
349:/***/
function(module,exports){module.exports=function(e){if(!e.webpackPolyfill){var module=Object.create(e);
// module.parent = undefined by default
module.children||(module.children=[]),Object.defineProperty(module,"loaded",{enumerable:!0,get:function(){return module.l}}),Object.defineProperty(module,"id",{enumerable:!0,get:function(){return module.i}}),Object.defineProperty(module,"exports",{enumerable:!0}),module.webpackPolyfill=1}return module}},/***/
350:/***/
function(module,e,t){"use strict";/* harmony import */
var n=t(830),r=t(831),a=t(832),o=a.a&&a.a.isTypedArray,u=o?Object(r.a)(o):n.a;/* harmony default export */
e.a=u},/***/
351:/***/
function(module,e,t){"use strict";/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function n(e){if(!Object(r.a)(e))return Object(a.a)(e);var t=[];for(var n in Object(e))u.call(e,n)&&"constructor"!=n&&t.push(n);return t}/* harmony import */
var r=t(352),a=t(833),o=Object.prototype,u=o.hasOwnProperty;/* harmony default export */
e.a=n},/***/
352:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function n(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||r)}/** Used for built-in method references. */
var r=Object.prototype;/* harmony default export */
e.a=n},/***/
353:/***/
function(module,e,t){"use strict";function n(e){return Object(o.a)(e)||Object(u.a)(e)||Object(c.a)(e)}function r(e){return!Object(i.a)(e)&&e.every(n)}function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];f()(r(t),"Expected action types to be strings, symbols, or action creators");var a=t.map(l.a).join(d);return{toString:function(){return a}}}/* harmony export (binding) */
t.d(e,"a",function(){return d}),/* harmony export (immutable) */
e.b=a;/* harmony import */
var o=t(203),u=t(95),i=t(834),l=t(845),c=t(204),s=t(18),f=t.n(s),d="||"},/***/
354:/***/
function(module,e,t){"use strict";/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function n(e){if(null!=e){try{return a.call(e)}catch(e){}try{return e+""}catch(e){}}return""}/** Used for built-in method references. */
var r=Function.prototype,a=r.toString;/* harmony default export */
e.a=n},/***/
355:/***/
function(module,e,t){"use strict";function n(e){function t(n){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=arguments.length<=2||void 0===arguments[2]?[]:arguments[2],u=Object(r.a)(o.shift());o.length?(a[u]||(a[u]={}),t(n,a[u],o)):a[u]=e[n]}var n=arguments.length<=1||void 0===arguments[1]?i:arguments[1],a={};return Object.getOwnPropertyNames(e).forEach(function(e){return t(e,a,e.split(n))}),a}/* harmony export (binding) */
t.d(e,"a",function(){return c}),/* harmony export (binding) */
t.d(e,"b",function(){return s}),/* harmony export (binding) */
t.d(e,"c",function(){return n});/* harmony import */
var r=t(356),a=t(205),o=t(849),u=t(72),i="/",l=function(e){return function t(n){function r(e){return l?""+l+o+e:e}var o=arguments.length<=1||void 0===arguments[1]?i:arguments[1],u=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],l=arguments.length<=3||void 0===arguments[3]?"":arguments[3];return Object(a.a)(n).forEach(function(a){var i=r(a),l=n[a];e(l)?t(n[a],o,u,i):u[i]=n[a]}),u}},c=l(u.a),s=l(function(e){return Object(u.a)(e)&&!Object(o.a)(e)})},/***/
356:/***/
function(module,e,t){"use strict";function n(e){return e.match(r).reduce(function(e,t,n){return e+(0===n?t.toLowerCase():t.charAt(0).toUpperCase()+t.substring(1).toLowerCase())},"")}
// based on https://github.com/lodash/lodash/blob/4.17.2/lodash.js#L14100
// eslint-disable-next-line max-len
var r=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:(?:1ST|2ND|3RD|(?![123])\dTH)\b)|\d*(?:(?:1st|2nd|3rd|(?![123])\dth)\b)|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;/* harmony default export */
e.a=function(e){return e.split("/").map(n).join("/")}},/***/
357:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(exports,"__esModule",{value:!0});var r=e(17),a=t(r),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=e(0),i=t(u),l=e(6),c=t(l),s=e(855),f=t(s),d=e(856),p=t(d);exports.default=function(e){var t=e.className,r=e.linkElement,l=void 0===r?"a":r,s=e.type,d=e.title,h=e.desc,m=e.img,y=e.actions,b=n(e,["className","linkElement","type","title","desc","img","actions"]),v=s in f.default?s:"404",g=(0,c.default)(p.default.exception,t);return i.default.createElement("div",o({className:g},b),i.default.createElement("div",{className:p.default.imgBlock},i.default.createElement("div",{className:p.default.imgEle,style:{backgroundImage:"url("+(m||f.default[v].img)+")"}})),i.default.createElement("div",{className:p.default.content},i.default.createElement("h1",null,d||f.default[v].title),i.default.createElement("div",{className:p.default.desc},h||f.default[v].desc),i.default.createElement("div",{className:p.default.actions},y||(0,u.createElement)(l,{to:"/",href:"/"},i.default.createElement(a.default,{type:"primary"},"返回首页")))))}},/***/
358:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(3),r=t(n),a=e(860),o=t(a),u=e(359),i=t(u),l={lang:(0,r.default)({placeholder:"请选择日期",rangePlaceholder:["开始日期","结束日期"]},o.default),timePickerLocale:(0,r.default)({},i.default)};
// should add whitespace between char in Button
l.lang.ok="确 定",
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default=l,module.exports=exports.default},/***/
359:/***/
function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t={placeholder:"请选择时间"};exports.default=t,module.exports=exports.default},/***/
39:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=e(304),a=function(){function e(n){t(this,e),this.defaults={credentials:"include"}}return n(e,[{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){return fetch(e,Object.assign(this.defaults,t)).then(function(e){if(1==e.ok)return e;
//console.log(res.body)
throw e}).then(function(e){return e.json()})})},{key:"fetchPatch",value:function(e,t){return this.fetch(e,Object.assign({method:"PATCH"},t))}},{key:"fetchGet",value:function(e,t){return t.body&&(e=e+"?"+(0,r.stringify)(t.body),delete t.body),this.fetch(e,Object.assign({method:"GET"},t))}},{key:"fetchPut",value:function(e,t){return this.fetch(e,Object.assign({method:"PUT"},t))}},{key:"fetchPost",value:function(e,t){return this.fetch(e,Object.assign({method:"POST"},t))}},{key:"fetchDelete",value:function(e,t){return this.fetch(e,Object.assign({method:"DELETE"},t))}},{key:"fetchCatch",value:function(e){}}]),e}();exports.default=a},/***/
408:/***/
function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=e(766),n=function(e){return e&&e.__esModule?e:{default:e}}(t);exports.default=n.default},/***/
409:/***/
function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=e(709),n=function(e){return e&&e.__esModule?e:{default:e}}(t);exports.default=n.default},/***/
410:/***/
function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=e(763),n=function(e){return e&&e.__esModule?e:{default:e}}(t);exports.default=n.default},/***/
411:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var o=e(98),u=t(o),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e(0),s=t(c),f=e(1),d=(t(f),e(25)),p=t(d),h=u.default.RangePicker,m=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"disabledDate",value:function(e){var t=this.props,n=t.minDate,r=t.maxDate;return!e.isBetween((0,p.default)(n),(0,p.default)(r))}},{key:"render",value:function(){this.props.children;return s.default.createElement(h,i({},this.props,{disabledDate:this.disabledDate.bind(this)}))}}]),t}(c.Component);m.defaultProps={ranges:{"今天":[(0,p.default)(),(0,p.default)()],"本周":[(0,p.default)().startOf("week"),(0,p.default)().endOf("week")],"本月":[(0,p.default)().startOf("month"),(0,p.default)().endOf("month")],"本年":[(0,p.default)().startOf("year"),(0,p.default)().endOf("year")]},showToday:!0,format:"YYYY-MM-DD",minDate:"1900-01-01",maxDate:"2299-01-01"},exports.default=m},/***/
412:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var u=e(13),i=t(u),l=e(333),c=t(l),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=e(0),d=t(f),p=e(6),h=t(p),m=e(765),y=t(m),b=c.default.CheckableTag,v=function(e){var t=e.children,n=e.checked,r=e.onChange,a=e.value;return d.default.createElement(b,{checked:n,key:a,onChange:function(e){return r(a,e)}},t)};v.isTagSelectOption=!0;var g=function(e){function t(){var e,n,o,u;r(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={expand:!1,checkedTags:o.props.defaultValue||[]},o.onSelectAll=function(e){var t=o.props.onChange,n=[];e&&(n=o.getAllTags()),o.setState({checkedTags:n}),t&&t(n)},o.handleTagChange=function(e,t){var n=o.props.onChange,r=o.state.checkedTags,a=r.indexOf(e);t&&-1===a?r.push(e):!t&&a>-1&&r.splice(a,1),o.setState({checkedTags:r}),n&&n(r)},o.handleExpand=function(){o.setState({expand:!o.state.expand})},o.isTagSelectOption=function(e){return e&&e.type&&(e.type.isTagSelectOption||"TagSelectOption"===e.type.displayName)},u=n,a(o,u)}return o(t,e),s(t,[{key:"getAllTags",value:function(){var e=this,t=this.props.children;return t=d.default.Children.toArray(t),t.filter(function(t){return e.isTagSelectOption(t)}).map(function(e){return e.props.value})}},{key:"render",value:function(){var e,t=this,r=this.state,a=r.checkedTags,o=r.expand,u=this.props,l=u.children,c=u.className,s=u.style,f=u.expandable,p=this.getAllTags().length===a.length,m=(0,h.default)(y.default.tagSelect,c,(e={},n(e,y.default.hasExpandTag,f),n(e,y.default.expanded,o),e));return d.default.createElement("div",{className:m,style:s},d.default.createElement(b,{checked:p,key:"tag-select-__all__",onChange:this.onSelectAll},"全部"),a&&d.default.Children.map(l,function(e){return t.isTagSelectOption(e)?d.default.cloneElement(e,{key:"tag-select-"+e.props.value,checked:a.indexOf(e.props.value)>-1,onChange:t.handleTagChange}):e}),f&&d.default.createElement("a",{className:y.default.trigger,onClick:this.handleExpand},o?"收起":"展开"," ",d.default.createElement(i.default,{type:o?"up":"down"})))}}]),t}(f.Component);g.Option=v,exports.default=g},/***/
413:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.FeedbackFormContainer=exports.RejectFormContainer=exports.RelatedFormContainer=exports.EntryFormContainer=exports.OfferFormContainer=exports.ResumeDetailContainer=void 0;var n=e(0),r=(t(n),e(51)),a=e(63),o=e(714),u=t(o),i=e(767),l=t(i),c=e(768),s=t(c),f=e(769),d=t(f),p=e(774),h=t(p),m=e(775),y=t(m),b=e(776),v=t(b),g=e(334),O=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(g),E=function(e){return{reduce:e.resumeReducer,appConfig:e.appReducer}},w=function(e){return{actions:(0,r.bindActionCreators)(O,e),dispatch:e}},j=(0,a.connect)(E,w,null,{pure:!1})(u.default),x=(0,a.connect)(E,w,null,{pure:!1})(s.default),k=(0,a.connect)(E,w,null,{pure:!1})(d.default),S=(0,a.connect)(E,w,null,{pure:!1})(h.default),C=(0,a.connect)(E,w,null,{pure:!1})(l.default),P=(0,a.connect)(E,w,null,{pure:!1})(y.default),R=(0,a.connect)(E,w,null,{pure:!1})(v.default);exports.ResumeDetailContainer=C,exports.OfferFormContainer=x,exports.EntryFormContainer=k,exports.RelatedFormContainer=S,exports.RejectFormContainer=R,exports.FeedbackFormContainer=P,exports.default=j},/***/
414:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(){return function(e){return e(l.routerActions.replace("/sound"))}}function r(){return function(e){return e(l.routerActions.goBack())}}function a(e){return function(t,n){return t(m("tableSpin")),(new i.default).fetchList(e).then(function(e){t(y("tableSpin")),t(p(e.list,e.page))}).catch(function(e){return t(h("tableSpin",e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.listRoute=n,exports.backRoute=r,exports.listAction=a;var o=e(42),u=(t(o),e(792)),i=t(u),l=e(32),c=e(43),s=t(c),f=(0,s.default)("sound",["get_list","sync_list","save_list","fetch_request","fetch_success","fetch_failure"]);exports.default=f;
//TODO: 调整命名及常量定义
var d=(0,c.createTypes)(f),p=(d.getItem,d.listItem,d.saveItem,d.saveList),h=d.fetchFailure,m=d.fetchRequest,y=d.fetchSuccess},/***/
415:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(){return function(e){return e(f.routerActions.replace("/member/add"))}}function r(){return function(e){return e(f.routerActions.replace("/member"))}}function a(){return function(e){return e(f.routerActions.goBack())}}function o(e){return function(t,n){return t(g("tableSpin")),(new s.default).fetchList(e).then(function(e){t(O("tableSpin")),
//console.log(json.list)
t(b(e.list,e.page))}).catch(function(e){return t(v("formSpin",e))})}}function u(e){return function(t,n){return t(g("formSpin")),(new s.default).fetchSave(e).then(function(e){t(O("formSpin")),
//console.log(json.list)
t(y(e.item))}).catch(function(e){return t(v("formSpin",e))})}}function i(e){return function(t,n){return t(g("formSpin")),(new s.default).fetchItem({id:e}).then(function(e){t(O("formSpin")),
//console.log(json.list)
t(y(e.item))}).catch(function(e){return t(v("formSpin",e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addRoute=n,exports.listRoute=r,exports.backRoute=a,exports.listAction=o,exports.saveAction=u,exports.itemAction=i;var l=e(42),c=(t(l),e(794)),s=t(c),f=e(32),d=e(43),p=t(d),h=(0,p.default)("member",["get_list","save_item","sync_list","save_list","fetch_request","fetch_success","fetch_failure"]);exports.default=h;
//TODO: 调整命名及常量定义
var m=(0,d.createTypes)(h),y=(m.getItem,m.listItem,m.saveItem),b=m.saveList,v=m.fetchFailure,g=m.fetchRequest,O=m.fetchSuccess},/***/
416:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(){return function(e){return e(f.routerActions.push("/settings/fields/add"))}}function r(){return function(e){return e(f.routerActions.goBack())}}function a(e){return function(t){return t(f.routerActions.push("/settings/fields/"+e))}}function o(e){return{type:h.SAVE_REMIND,payload:{item:e}}}function u(e){return function(t,n){return t(v("tableSpin")),(new s.default).fetchList(e).then(function(e){t(g("tableSpin")),t(y(e.list,e.page))}).catch(function(e){return t(b("tableSpin",e))})}}function i(e){return function(e,t){return e(v("remind")),(new s.default).fetchRemind().then(function(t){e(g("remind")),e(o(t.item))}).catch(function(t){return e(b("remind",t))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addRoute=n,exports.backRoute=r,exports.editRoute=a,exports.listAction=u,exports.fetchRemindAction=i;var l=e(42),c=(t(l),e(800)),s=t(c),f=e(32),d=e(43),p=t(d),h=(0,p.default)("setting",["get_list","save_item","sync_list","save_list","save_remind","fetch_request","fetch_success","fetch_failure"]);exports.default=h;var m=(0,d.createTypes)(h),y=(m.getItem,m.listItem,m.saveItem,m.saveList),b=m.fetchFailure,v=m.fetchRequest,g=m.fetchSuccess},/***/
417:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(){return function(e){return e(l.routerActions.replace("/job"))}}function r(){return function(e){return e(l.routerActions.goBack())}}function a(e){return function(t,n){return t(m("tableSpin")),(new i.default).fetchList(e).then(function(e){t(y("tableSpin")),t(p(e.list,e.page))}).catch(function(e){return t(h("tableSpin",e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.listRoute=n,exports.backRoute=r,exports.listAction=a;var o=e(42),u=(t(o),e(802)),i=t(u),l=e(32),c=e(43),s=t(c),f=(0,s.default)("JOB",["get_list","sync_list","save_list","fetch_request","fetch_success","fetch_failure"]);exports.default=f;
//TODO: 调整命名及常量定义
var d=(0,c.createTypes)(f),p=(d.getItem,d.listItem,d.saveItem,d.saveList),h=d.fetchFailure,m=d.fetchRequest,y=d.fetchSuccess},/***/
418:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(){return function(e){return e(l.routerActions.replace("/interview"))}}function r(){return function(e){return e(l.routerActions.goBack())}}function a(e){return function(t,n){return t(m("tableSpin")),(new i.default).fetchList(e).then(function(e){t(y("tableSpin")),t(p(e.list,e.page))}).catch(function(e){return t(h("tableSpin",e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.listRoute=n,exports.backRoute=r,exports.listAction=a;var o=e(42),u=(t(o),e(804)),i=t(u),l=e(32),c=e(43),s=t(c),f=(0,s.default)("resume",["get_list","sync_list","save_list","fetch_request","fetch_success","fetch_failure"]);exports.default=f;
//TODO: 调整命名及常量定义
var d=(0,c.createTypes)(f),p=(d.getItem,d.listItem,d.saveItem,d.saveList),h=d.fetchFailure,m=d.fetchRequest,y=d.fetchSuccess},/***/
419:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(){return function(e){return e(l.routerActions.replace("/elite"))}}function r(){return function(e){return e(l.routerActions.goBack())}}function a(e){return function(t,n){return t(m("tableSpin")),(new i.default).fetchList(e).then(function(e){t(y("tableSpin")),t(p(e.list,e.page))}).catch(function(e){return t(h("tableSpin",e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.listRoute=n,exports.backRoute=r,exports.listAction=a;var o=e(42),u=(t(o),e(807)),i=t(u),l=e(32),c=e(43),s=t(c),f=(0,s.default)("elite",["get_list","sync_list","save_list","fetch_request","fetch_success","fetch_failure"]);exports.default=f;
//TODO: 调整命名及常量定义
var d=(0,c.createTypes)(f),p=(d.getItem,d.listItem,d.saveItem,d.saveList),h=d.fetchFailure,m=d.fetchRequest,y=d.fetchSuccess},/***/
42:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e){if(d)return void e(d);i.default.newInstance({prefixCls:h,transitionName:"move-up",style:{top:f},getContainer:m},function(t){if(d)return void e(d);d=t,e(t)})}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,r=arguments[2],a=arguments[3],u={info:"info-circle",success:"check-circle",error:"cross-circle",warning:"exclamation-circle",loading:"loading"}[r];"function"==typeof t&&(a=t,t=s);var i=p++;return n(function(n){n.notice({key:i,duration:t,style:{},content:o.createElement("div",{className:h+"-custom-content "+h+"-"+r},o.createElement(c.default,{type:u}),o.createElement("span",null,e)),onClose:a})}),function(){d&&d.removeNotice(i)}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(0),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(a),u=e(199),i=t(u),l=e(779),c=t(l),s=3,f=void 0,d=void 0,p=1,h="ant-message",m=void 0;exports.default={info:function(e,t,n){return r(e,t,"info",n)},success:function(e,t,n){return r(e,t,"success",n)},error:function(e,t,n){return r(e,t,"error",n)},
// Departed usage, please use warning()
warn:function(e,t,n){return r(e,t,"warning",n)},warning:function(e,t,n){return r(e,t,"warning",n)},loading:function(e,t,n){return r(e,t,"loading",n)},config:function(e){void 0!==e.top&&(f=e.top,d=null),void 0!==e.duration&&(s=e.duration),void 0!==e.prefixCls&&(h=e.prefixCls),void 0!==e.getContainer&&(m=e.getContainer)},destroy:function(){d&&(d.destroy(),d=null)}},module.exports=exports.default},/***/
420:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(){return function(e){return e(c.routerActions.push("/report/fields/add"))}}function r(){return function(e){return e(c.routerActions.goBack())}}function a(e){return function(t){return t(c.routerActions.push("/report/fields/"+e))}}function o(e){return function(t,n){return t(y("tableSpin")),(new l.default).fetchList(e).then(function(e){t(b("tableSpin")),t(h(e.list,e.page))}).catch(function(e){return t(m("tableSpin",e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addRoute=n,exports.backRoute=r,exports.editRoute=a,exports.listAction=o;var u=e(42),i=(t(u),e(809)),l=t(i),c=e(32),s=e(43),f=t(s),d=(0,f.default)("report",["get_list","save_item","sync_list","save_list","fetch_request","fetch_success","fetch_failure"]);exports.default=d;var p=(0,s.createTypes)(d),h=(p.getItem,p.listItem,p.saveItem,p.saveList),m=p.fetchFailure,y=p.fetchRequest,b=p.fetchSuccess},/***/
421:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n=e(232),r=t(n),a=e(0),o=t(a),u=e(10),i=t(u),l=e(62),c=e(224),s=t(c),f=e(493),d=t(f),p=e(63),h=e(858),m=t(h),y=e(226),b=t(y),v=e(227);t(v);e(862),
//全局设定
/*
ReactDOM.render(
  <IntlProvider locale="en">
  <Provider store={store}>
    <Router routes={AppRouter()} history={history}></Router>
  </Provider>
</IntlProvider>, createContainer())
*/
//import DevTools from 'app-utils/DevTools'
//import {renderToString} from 'react-dom/server'
/**
* @Author: jax <jaxchow>
* @Date:   2016-02-23T20:28:29+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-12T14:51:18+08:00
* @Description: application entry files
*/
i.default.render(o.default.createElement(r.default,{locale:m.default},o.default.createElement(p.Provider,{store:b.default},o.default.createElement(l.Router,{routes:(0,d.default)(),history:y.history}))),(0,s.default)())},/***/
43:/***/
function(module,exports,e){"use strict";function t(e,t){var n={};return"string"==typeof t&&(t=t.split(",")),t.map(function(t){n[t.toLocaleUpperCase()]=[e,t].join("_")}),n}function n(e){function t(){return{type:e.NEW_ITEM,payload:{}}}function n(t){return{type:e.GET_ITEM,payload:{key:t}}}function r(t){return{type:e.REMOVE_ITEM,payload:{key:t}}}function a(t){return{type:e.SAVE_ITEM,payload:{item:t}}}function o(t,n){return{type:e.SAVE_LIST,payload:{list:t,total:n}}}function u(t,n){return{type:e.LIST_ITEM,payload:{idx:t,offset:n}}}function i(t,n){
//message.error(msg)
return{type:e.FETCH_FAILURE,payload:{label:t,spin:!1,status:n}}}function l(t){return{type:e.FETCH_REQUEST,payload:{label:t,spin:!0,status:status}}}function c(t){
//  message.success("数据刷新成功")
return{type:e.FETCH_SUCCESS,payload:{label:t,spin:!1,status:status}}}return{newItem:t,getItem:n,removeItem:r,saveItem:a,saveList:o,listItem:u,fetchFailure:i,fetchRequest:l,fetchSuccess:c}}function r(){function e(){var e=router.getCurrentLocation().pathname;return function(t){return t(routerActions.replace(""+e))}}function t(e){var t=e.getCurrentLocation().pathname,n=e.createLocation(t+"add");return function(e){return e(routerActions.push(n))}}function n(){return function(e){return e(routerActions.goBack())}}function r(e,t){var n=e.getCurrentLocation().pathname,r=e.createLocation(n+"edit/"+t);return function(e){return e(routerActions.push(r))}}function a(e,t){var n=e.getCurrentLocation().pathname,r=e.createLocation(n+"/"+t);return function(e){return e(routerActions.push(r))}}return{listRoute:e,addRoute:t,editRoute:r,detailRoute:a,backRoute:n}}function a(e,t){return{type:e,payload:t}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t,exports.createTypes=n,exports.createActionRoute=r,exports.dispatchHandler=a},/***/
44:/***/
function(module,exports,e){"use strict";/**
 * [getList 获取列表方法，不带缓存处理]
 * @param  {[type]} state   [description]
 * @param  {[type]} list  [description]
 * @return {[type]} state   [description]
 */
function t(e,t){var n=t.list;return Object.assign({},e,{list:n})}/**
 * [getList 保存列表方法，不带缓存处理]
 * @param  {[type]} state   [description]
 * @param  {[type]} payload [description]
 * @return {[type]} state   [description]
 */
function n(e,t){return t.list.forEach(function(t){return e.list.set(t[e.key],t)}),e.page=t.page,e}/**
 * [getItem 获取数据项]
 * @param  {[type]} state   [description]
 * @param  {[type]} payload [description]
 * @return {[type]}         [description]
 */
function r(e,t){return Object.assign({},e,{item:e.list.get(t.key)})}/**
 * [getItem 保存数据项]
 * @param  {[type]} state   [description]
 * @param  {[type]} payload [description]
 * @return {[type]}         [description]
 */
function a(e,t){return Object.assign({},e,{item:t.item})}/**
 * [newList 新列表，暂时无用]
 * @param  {[type]} state   [description]
 * @param  {[type]} payload [description]
 * @return {[type]}         [description]
 */
function o(e,t){return Object.assign({},e,{list:[]})}/**
 * [clearList 清空列表方法]
 * @param  {[type]} state   [description]
 * @param  {[type]} payload [description]
 * @return {[type]}         [description]
 */
function u(e,t){return Object.assign({},e,{list:[]})}/**
 * [newItem  创建空的对象]
 * @param  {[type]} state   [description]
 * @param  {[type]} payload [description]
 * @return {[type]}         [description]
 */
function i(e,t){return Object.assign({},e,{item:{}})}/**
 * [clearItem 清空对象方法]
 * @param  {[type]} state   [description]
 * @param  {[type]} payload [description]
 * @return {[type]}         [description]
 */
function l(e,t){return Object.assign({},e,{item:{}})}/**
 * [fetchRequest 请求发起状态]
 * @param  {[type]} state   [description]
 * @param  {[type]} payload [description]
 * @return {[type]}         [description]
 */
function c(e,t){var n=e.spins;return n[t.label]=t.spin,Object.assign({},e,{status:e.status.set(t.label,t.code),spins:n})}/**
 * [fetchSuccess 请求发起成功]
 * @param  {[type]} state   [description]
 * @param  {[type]} payload [description]
 * @return {[type]}         [description]
 */
function s(e,t){var n=e.spins;return n[t.label]=t.spin,Object.assign({},e,{status:e.status.set(t.label,t.code),spins:n})}/**
 * [fetchFailure 请求发起失败]
 * @param  {[type]} state   [description]
 * @param  {[type]} payload [description]
 * @return {[type]}         [description]
 */
function f(e,t){var n=e.spins;return n[t.label]=t.spin,Object.assign({},e,{status:e.status.set(t.label,t.code),spins:n})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getList=t,exports.saveList=n,exports.getItem=r,exports.saveItem=a,exports.newList=o,exports.clearList=u,exports.newItem=i,exports.clearItem=l,exports.fetchRequest=c,exports.fetchSuccess=s,exports.fetchFailure=f},/***/
48:/***/
function(module,exports,e){"use strict";/* WEBPACK VAR INJECTION */
(function(e){Object.defineProperty(exports,"__esModule",{value:!0}),/**
 * @Date:   2017-09-07T13:41:52+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2017-09-11T17:51:56+08:00
 * @Description : 全局变量mock unit case 场景下使用
 */
e.APP_SERVER="http://www.qftx.net",exports.default=e}).call(exports,e(22))},/***/
49:/***/
function(module,exports,e){"use strict";var t=e(864),n=e(869),r="undefined"!=typeof window?window:self;t.global=r,t.statusTextMap=n,t.setImplementations({Promise:r.Promise,Request:r.Request,Response:r.Response,Headers:r.Headers}),module.exports=new t},/***/
493:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){sessionStorage.getItem("token")&&t("/login")}function r(){return[{path:"/login",component:l.LoginViewContainer},{path:"/register",component:l.RegisterViewContainer},{path:"*/detail",component:s.ResumeDetailContainer},{path:"/",indexRoute:{onEnter:function(e,t){return t("/dashboard")}},onEnter:n,component:i.default,childRoutes:[{path:"demo",breadcrumbName:"用例展示",component:c.Container},{path:"dashboard",breadcrumbName:"功能区",getChildRoutes:p},{path:"sound",breadcrumbName:"通话录音",getChildRoutes:g},{path:"job",breadcrumbName:"岗位管理",getChildRoutes:m},{path:"resume",breadcrumbName:"简历管理",getChildRoutes:y},{path:"elite",breadcrumbName:"人才库",getChildRoutes:b},{path:"report",breadcrumbName:"统计分析",getChildRoutes:v},{path:"interview",breadcrumbName:"面试管理",getChildRoutes:h},{path:"member",breadcrumbName:"员工管理",getChildRoutes:O},{path:"settings",breadcrumbName:"系统设置",getChildRoutes:E},{path:"403",breadcrumbName:"没有访问权限",component:d.Error403},{path:"404",breadcrumbName:"找不到页面",component:d.Error404},{path:"*",breadcrumbName:"找不到页面",indexRoute:{onEnter:function(e,t){return t("/404")}}}]}]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var a=e(0),o=(t(a),e(225)),u=(t(o),e(495)),i=t(u),l=e(555),c=e(666),s=e(413),f=e(335),d=(t(f),e(853)),p=function(t,n){new Promise(function(e){e()}).then(function(require){n(null,e(335).Routes)}.bind(null,e)).catch(e.oe)},h=function(t,n){e.e(3).then(function(require){n(null,[e(1108).Routes])}.bind(null,e)).catch(e.oe)},m=function(t,n){e.e(0).then(function(require){n(null,[e(1109).Routes])}.bind(null,e)).catch(e.oe)},y=function(t,n){e.e(7).then(function(require){n(null,[e(1110).Routes])}.bind(null,e)).catch(e.oe)},b=function(t,n){e.e(6).then(function(require){n(null,[e(1111).Routes])}.bind(null,e)).catch(e.oe)},v=function(t,n){e.e(4).then(function(require){n(null,[e(1112).Routes])}.bind(null,e)).catch(e.oe)},g=function(t,n){e.e(5).then(function(require){n(null,[e(1113).Routes])}.bind(null,e)).catch(e.oe)},O=function(t,n){e.e(1).then(function(require){n(null,[e(1114).Routes])}.bind(null,e)).catch(e.oe)},E=function(t,n){e.e(2).then(function(require){n(null,[e(1116).Routes])}.bind(null,e)).catch(e.oe)}},/***/
494:/***/
function(module,exports,e){"use strict";function t(e){return null==e||c.default.isValidElement(e)}function n(e){return t(e)||Array.isArray(e)&&e.every(t)}function r(e,t){return i({},e,t)}function a(e){var t=e.type,n=r(t.defaultProps,e.props);if(n.children){var a=o(n.children,n);a.length&&(n.childRoutes=a),delete n.children}return n}/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router'
 *
 *   const routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */
function o(e,t){var n=[];return c.default.Children.forEach(e,function(e){if(c.default.isValidElement(e))
// Component classes may have a static create* method.
if(e.type.createRouteFromReactElement){var r=e.type.createRouteFromReactElement(e,t);r&&n.push(r)}else n.push(a(e))}),n}/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */
function u(e){return n(e)?e=o(e):e&&!Array.isArray(e)&&(e=[e]),e}exports.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};exports.isReactChildren=n,exports.createRouteFromReactElement=a,exports.createRoutesFromReactChildren=o,exports.createRoutes=u;var l=e(0),c=function(e){return e&&e.__esModule?e:{default:e}}(l)},/***/
495:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=e(0),l=t(i),c=e(496),s=t(c),f=e(229),d=t(f),p=e(500),h=t(p),m=e(554),y=t(m),b=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l.default.createElement(s.default,{title:"app"},l.default.createElement(d.default,{direction:"rows"},l.default.createElement(f.Fixed,o({},this.props,{style:{display:"flex"}}),l.default.createElement(h.default,null)),l.default.createElement(f.Pane,{style:{display:"flex"}},l.default.createElement(d.default,{direction:"column"},l.default.createElement(f.Pane,{style:{display:"flex"}},l.default.createElement(y.default,null,this.props.children))))))}}]),t}(l.default.Component);exports.default=b},/***/
496:/***/
function(module,exports,e){"use strict";function t(e){var t=e[e.length-1];if(t)return t.title}function n(e){var t=e||"";t!==document.title&&(document.title=t)}function r(){}var a=e(0),o=e(1),u=e(497);r.prototype=Object.create(a.Component.prototype),r.displayName="DocumentTitle",r.propTypes={title:o.string.isRequired},r.prototype.render=function(){return this.props.children?a.Children.only(this.props.children):null},module.exports=u(t,n)(r)},/***/
497:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=e(0),u=t(o),i=e(498),l=t(i),c=e(38),s=t(c);module.exports=function(e,t,i){function c(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==i&&"function"!=typeof i)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(f){function d(){h=e(p.map(function(e){return e.props})),m.canUseDOM?t(h):i&&(h=i(h))}if("function"!=typeof f)throw new Error("Expected WrappedComponent to be a React component.");var p=[],h=void 0,m=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}
// Try to use displayName of wrapped component
// Expose canUseDOM so tests can monkeypatch it
return a(t,e),t.peek=function(){return h},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=h;return h=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return u.default.createElement(f,this.props)},t}(o.Component);return m.displayName="SideEffect("+c(f)+")",m.canUseDOM=l.default.canUseDOM,m}}},/***/
498:/***/
function(module,exports,e){var t;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */
!function(){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen};void 0!==(t=function(){return r}.call(exports,e,exports,module))&&(module.exports=t)}()},/***/
499:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pane=exports.Fixed=exports.Layout=exports.default=void 0;var o,u,i,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=e(0),f=t(s),d=e(1),p=t(d),h=(u=o=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.direction,r=e.style,a=Object.assign({},{display:"flex",flex:"1",overflow:"hidden",flexDirection:n},r);return f.default.createElement("div",{className:"layout",style:a},t)}}]),t}(s.Component),o.defaultProps={direction:"column",position:!1},o.propTypes={direction:p.default.oneOf(["column","rows"])},u);exports.default=h;var m=(l=i=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.style,r=(e.width,Object.assign({},n));return f.default.createElement("div",{className:"layout-fixed",style:r},t)}}]),t}(s.Component),i.defaultProps={},i.defaultTypes={},l),y=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.style,r=Object.assign({},{flex:"1",position:"relative",overflow:"auto"},n);return f.default.createElement("div",{className:"layout-pane",style:r},t)}}]),t}(s.Component);exports.Layout=h,exports.Fixed=m,exports.Pane=y},/***/
50:/***/
function(module,exports,__webpack_require__){!function(e,t){module.exports=t()}(0,function(){/******/
return function(e){/******/
// The require function
/******/
function t(r){/******/
// Check if module is in cache
/******/
if(n[r])/******/
return n[r].exports;/******/
// Create a new module (and put it into the cache)
/******/
var module=n[r]={/******/
exports:{},/******/
id:r,/******/
loaded:!1};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return e[r].call(module.exports,module,module.exports,t),module.loaded=!0,module.exports}// webpackBootstrap
/******/
// The module cache
/******/
var n={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// __webpack_public_path__
/******/
return t.m=e,t.c=n,t.p="",t(0)}([/* 0 */
/***/
function(module,exports,e){/* global require, module, window */
var t,n=e(1),r=e(3),a=e(5),o=e(20),u=e(23),i=e(25);"undefined"!=typeof window&&(t=e(27));/*!
	    Mock - 模拟请求 & 模拟数据
	    https://github.com/nuysoft/Mock
	    墨智 mozhi.gyy@taobao.com nuysoft@gmail.com
	*/
var l={Handler:n,Random:a,Util:r,XHR:t,RE:o,toJSONSchema:u,valid:i,heredoc:r.heredoc,setup:function(e){return t.setup(e)},_mocked:{}};l.version="1.0.1-beta3",
// 避免循环依赖
t&&(t.Mock=l),/*
	    * Mock.mock( template )
	    * Mock.mock( function() )
	    * Mock.mock( rurl, template )
	    * Mock.mock( rurl, function(options) )
	    * Mock.mock( rurl, rtype, template )
	    * Mock.mock( rurl, rtype, function(options) )

	    根据数据模板生成模拟数据。
	*/
l.mock=function(e,r,a){
// Mock.mock(template)
// Mock.mock(template)
// Mock.mock(rurl, template)
// 拦截 XHR
return 1===arguments.length?n.gen(e):(2===arguments.length&&(a=r,r=void 0),t&&(window.XMLHttpRequest=t),l._mocked[e+(r||"")]={rurl:e,rtype:r,template:a},l)},module.exports=l},/* 1 */
/***/
function(module,exports,__webpack_require__){/* 
	    ## Handler

	    处理数据模板。
	    
	    * Handler.gen( template, name?, context? )

	        入口方法。

	    * Data Template Definition, DTD
	        
	        处理数据模板定义。

	        * Handler.array( options )
	        * Handler.object( options )
	        * Handler.number( options )
	        * Handler.boolean( options )
	        * Handler.string( options )
	        * Handler.function( options )
	        * Handler.regexp( options )
	        
	        处理路径（相对和绝对）。

	        * Handler.getValueByKeyPath( key, options )

	    * Data Placeholder Definition, DPD

	        处理数据占位符定义

	        * Handler.placeholder( placeholder, context, templateContext, options )

	*/
var Constant=__webpack_require__(2),Util=__webpack_require__(3),Parser=__webpack_require__(4),Random=__webpack_require__(5),RE=__webpack_require__(20),Handler={extend:Util.extend};/*
	    template        属性值（即数据模板）
	    name            属性名
	    context         数据上下文，生成后的数据
	    templateContext 模板上下文，

	    Handle.gen(template, name, options)
	    context
	        currentContext, templateCurrentContext, 
	        path, templatePath
	        root, templateRoot
	*/
Handler.gen=function(e,t,n){/* jshint -W041 */
t=void 0==t?"":t+"",n=n||{},n={
// 当前访问路径，只有属性名，不包括生成规则
path:n.path||[Constant.GUID],templatePath:n.templatePath||[Constant.GUID++],
// 最终属性值的上下文
currentContext:n.currentContext,
// 属性值模板的上下文
templateCurrentContext:n.templateCurrentContext||e,
// 最终值的根
root:n.root||n.currentContext,
// 模板的根
templateRoot:n.templateRoot||n.templateCurrentContext||e};
// console.log('path:', context.path.join('.'), template)
var r,a=Parser.parse(t),o=Util.type(e);return Handler[o]?(r=Handler[o]({
// 属性值类型
type:o,
// 属性值模板
template:e,
// 属性名 + 生成规则
name:t,
// 属性名
parsedName:t?t.replace(Constant.RE_KEY,"$1"):t,
// 解析后的生成规则
rule:a,
// 相关上下文
context:n}),n.root||(n.root=r),r):e},Handler.extend({array:function(e){var t,n,r=[];
// 'name|1': []
// 'name|count': []
// 'name|min-max': []
if(0===e.template.length)return r;
// 'arr': [{ 'email': '@EMAIL' }, { 'email': '@EMAIL' }]
if(e.rule.parameters)
// 'method|1': ['GET', 'POST', 'HEAD', 'DELETE']
if(1===e.rule.min&&void 0===e.rule.max)
// fix #17
e.context.path.push(e.name),e.context.templatePath.push(e.name),r=Random.pick(Handler.gen(e.template,void 0,{path:e.context.path,templatePath:e.context.templatePath,currentContext:r,templateCurrentContext:e.template,root:e.context.root||r,templateRoot:e.context.templateRoot||e.template})),e.context.path.pop(),e.context.templatePath.pop();else
// 'data|+1': [{}, {}]
if(e.rule.parameters[2])e.template.__order_index=e.template.__order_index||0,e.context.path.push(e.name),e.context.templatePath.push(e.name),r=Handler.gen(e.template,void 0,{path:e.context.path,templatePath:e.context.templatePath,currentContext:r,templateCurrentContext:e.template,root:e.context.root||r,templateRoot:e.context.templateRoot||e.template})[e.template.__order_index%e.template.length],e.template.__order_index+=+e.rule.parameters[2],e.context.path.pop(),e.context.templatePath.pop();else
// 'data|1-10': [{}]
for(t=0;t<e.rule.count;t++)
// 'data|1-10': [{}, {}]
for(n=0;n<e.template.length;n++)e.context.path.push(r.length),e.context.templatePath.push(n),r.push(Handler.gen(e.template[n],r.length,{path:e.context.path,templatePath:e.context.templatePath,currentContext:r,templateCurrentContext:e.template,root:e.context.root||r,templateRoot:e.context.templateRoot||e.template})),e.context.path.pop(),e.context.templatePath.pop();else for(t=0;t<e.template.length;t++)e.context.path.push(t),e.context.templatePath.push(t),r.push(Handler.gen(e.template[t],t,{path:e.context.path,templatePath:e.context.templatePath,currentContext:r,templateCurrentContext:e.template,root:e.context.root||r,templateRoot:e.context.templateRoot||e.template})),e.context.path.pop(),e.context.templatePath.pop();return r},object:function(e){var t,n,r,a,o,u,i={};
// 'obj|min-max': {}
/* jshint -W041 */
if(void 0!=e.rule.min)for(t=Util.keys(e.template),t=Random.shuffle(t),t=t.slice(0,e.rule.count),u=0;u<t.length;u++)r=t[u],a=r.replace(Constant.RE_KEY,"$1"),e.context.path.push(a),e.context.templatePath.push(r),i[a]=Handler.gen(e.template[r],r,{path:e.context.path,templatePath:e.context.templatePath,currentContext:i,templateCurrentContext:e.template,root:e.context.root||i,templateRoot:e.context.templateRoot||e.template}),e.context.path.pop(),e.context.templatePath.pop();else{
// 'obj': {}
t=[],n=[];// #25 改变了非函数属性的顺序，查找起来不方便
for(r in e.template)("function"==typeof e.template[r]?n:t).push(r);/*
	                会改变非函数属性的顺序
	                keys = Util.keys(options.template)
	                keys.sort(function(a, b) {
	                    var afn = typeof options.template[a] === 'function'
	                    var bfn = typeof options.template[b] === 'function'
	                    if (afn === bfn) return 0
	                    if (afn && !bfn) return 1
	                    if (!afn && bfn) return -1
	                })
	            */
for(t=t.concat(n),u=0;u<t.length;u++)r=t[u],a=r.replace(Constant.RE_KEY,"$1"),e.context.path.push(a),e.context.templatePath.push(r),i[a]=Handler.gen(e.template[r],r,{path:e.context.path,templatePath:e.context.templatePath,currentContext:i,templateCurrentContext:e.template,root:e.context.root||i,templateRoot:e.context.templateRoot||e.template}),e.context.path.pop(),e.context.templatePath.pop(),(
// 'id|+1': 1
o=r.match(Constant.RE_KEY))&&o[2]&&"number"===Util.type(e.template[r])&&(e.template[r]+=parseInt(o[2],10))}return i},number:function(e){var t,n;if(e.rule.decimal){for(// float
e.template+="",n=e.template.split("."),
// 'float1|.1-10': 10,
// 'float2|1-100.1-10': 1,
// 'float3|999.1-10': 1,
// 'float4|.3-10': 123.123,
n[0]=e.rule.range?e.rule.count:n[0],n[1]=(n[1]||"").slice(0,e.rule.dcount);n[1].length<e.rule.dcount;)n[1]+=
// 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
n[1].length<e.rule.dcount-1?Random.character("number"):Random.character("123456789");t=parseFloat(n.join("."),10)}else// integer
// 'grade1|1-100': 1,
t=e.rule.range&&!e.rule.parameters[2]?e.rule.count:e.template;return t},boolean:function(e){return e.rule.parameters?Random.bool(e.rule.min,e.rule.max,e.template):e.template},string:function(e){var t,n,r,a,o="";if(e.template.length){
// 'star|1-5': '★',
for(
//  'foo': '★',
/* jshint -W041 */
void 0==e.rule.count&&(o+=e.template),t=0;t<e.rule.count;t++)o+=e.template;// A-Z_0-9 > \w_
for(
// 'email|1-10': '@EMAIL, ',
n=o.match(Constant.RE_PLACEHOLDER)||[],t=0;t<n.length;t++)
// 遇到转义斜杠，不需要解析占位符
if(r=n[t],/^\\/.test(r))n.splice(t--,1);else{
// 只有一个占位符，并且没有其他字符
if(a=Handler.placeholder(r,e.context.currentContext,e.context.templateCurrentContext,e),1===n.length&&r===o&&typeof a!=typeof o){// 
o=a;break}o=o.replace(r,a)}}else
// 'ASCII|1-10': '',
// 'ASCII': '',
o=e.rule.range?Random.string(e.rule.count):e.template;return o},function:function(e){
// ( context, options )
return e.template.call(e.context.currentContext,e)},regexp:function(e){var t="";
// 'name': /regexp/,
/* jshint -W041 */
void 0==e.rule.count&&(t+=e.template.source);
// 'name|1-5': /regexp/,
for(var n=0;n<e.rule.count;n++)t+=e.template.source;return RE.Handler.gen(RE.Parser.parse(t))}}),Handler.extend({_all:function(){var e={};for(var t in Random)e[t.toLowerCase()]=t;return e},
// 处理占位符，转换为最终值
placeholder:function(placeholder,obj,templateContext,options){
// console.log(options.context.path)
// 1 key, 2 params
Constant.RE_PLACEHOLDER.exec("");var parts=Constant.RE_PLACEHOLDER.exec(placeholder),key=parts&&parts[1],lkey=key&&key.toLowerCase(),okey=this._all()[lkey],params=parts&&parts[2]||"",pathParts=this.splitPathToArray(key);
// 解析占位符的参数
try{
// 1. 尝试保持参数的类型
/*
	                #24 [Window Firefox 30.0 引用 占位符 抛错](https://github.com/nuysoft/Mock/issues/24)
	                [BX9056: 各浏览器下 window.eval 方法的执行上下文存在差异](http://www.w3help.org/zh-cn/causes/BX9056)
	                应该属于 Window Firefox 30.0 的 BUG
	            */
/* jshint -W061 */
params=eval("(function(){ return [].splice.call(arguments, 0 ) })("+params+")")}catch(e){
// 2. 如果失败，只能解析为字符串
// console.error(error)
// if (error instanceof ReferenceError) params = parts[2].split(/,\s*/);
// else throw error
params=parts[2].split(/,\s*/)}
// 占位符优先引用数据模板中的属性
if(obj&&key in obj)return obj[key];
// @index @key
// if (Constant.RE_INDEX.test(key)) return +options.name
// if (Constant.RE_KEY.test(key)) return options.name
// 绝对路径 or 相对路径
if("/"===key.charAt(0)||pathParts.length>1)return this.getValueByKeyPath(key,options);
// 递归引用数据模板中的属性
if(templateContext&&"object"==typeof templateContext&&key in templateContext&&placeholder!==templateContext[key])
// 先计算被引用的属性值
return templateContext[key]=Handler.gen(templateContext[key],key,{currentContext:obj,templateCurrentContext:templateContext}),templateContext[key];
// 如果未找到，则原样返回
if(!(key in Random||lkey in Random||okey in Random))return placeholder;
// 递归解析参数中的占位符
for(var i=0;i<params.length;i++)Constant.RE_PLACEHOLDER.exec(""),Constant.RE_PLACEHOLDER.test(params[i])&&(params[i]=Handler.placeholder(params[i],obj,templateContext,options));var handle=Random[key]||Random[lkey]||Random[okey];switch(Util.type(handle)){case"array":
// 自动从数组中取一个，例如 @areas
return Random.pick(handle);case"function":
// 执行占位符方法（大多数情况）
handle.options=options;var re=handle.apply(Random,params);// 因为是在字符串中，所以默认为空字符串。
return void 0===re&&(re=""),delete handle.options,re}},getValueByKeyPath:function(e,t){var n=e,r=this.splitPathToArray(e),a=[];
// 绝对路径
"/"===e.charAt(0)?a=[t.context.path[0]].concat(this.normalizePath(r)):
// 相对路径
r.length>1&&(a=t.context.path.slice(0),a.pop(),a=this.normalizePath(a.concat(r))),e=r[r.length-1];for(var o=t.context.root,u=t.context.templateRoot,i=1;i<a.length-1;i++)o=o[a[i]],u=u[a[i]];
// 引用的值已经计算好
// 引用的值已经计算好
// 尚未计算，递归引用数据模板中的属性
// 先计算被引用的属性值
return o&&e in o?o[e]:u&&"object"==typeof u&&e in u&&n!==u[e]?(u[e]=Handler.gen(u[e],e,{currentContext:o,templateCurrentContext:u}),u[e]):void 0},
// https://github.com/kissyteam/kissy/blob/master/src/path/src/path.js
normalizePath:function(e){for(var t=[],n=0;n<e.length;n++)switch(e[n]){case"..":t.pop();break;case".":break;default:t.push(e[n])}return t},splitPathToArray:function(e){var t=e.split(/\/+/);return t[t.length-1]||(t=t.slice(0,-1)),t[0]||(t=t.slice(1)),t}}),module.exports=Handler},/* 2 */
/***/
function(module,exports){/*
	    ## Constant

	    常量集合。
	 */
/*
	    RE_KEY
	        'name|min-max': value
	        'name|count': value
	        'name|min-max.dmin-dmax': value
	        'name|min-max.dcount': value
	        'name|count.dmin-dmax': value
	        'name|count.dcount': value
	        'name|+step': value

	        1 name, 2 step, 3 range [ min, max ], 4 drange [ dmin, dmax ]

	    RE_PLACEHOLDER
	        placeholder(*)

	    [正则查看工具](http://www.regexper.com/)

	    #26 生成规则 支持 负数，例如 number|-100-100
	*/
module.exports={GUID:1,RE_KEY:/(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,RE_RANGE:/([\+\-]?\d+)-?([\+\-]?\d+)?/,RE_PLACEHOLDER:/\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g}},/* 3 */
/***/
function(module,exports){/*
	    ## Utilities
	*/
var e={};e.extend=function(){var t,n,r,a,o,u=arguments[0]||{},i=1,l=arguments.length;for(1===l&&(u=this,i=0);i<l;i++)if(t=arguments[i])for(n in t)r=u[n],a=t[n],u!==a&&void 0!==a&&(e.isArray(a)||e.isObject(a)?(e.isArray(a)&&(o=r&&e.isArray(r)?r:[]),e.isObject(a)&&(o=r&&e.isObject(r)?r:{}),u[n]=e.extend(o,a)):u[n]=a);return u},e.each=function(e,t,n){var r,a;if("number"===this.type(e))for(r=0;r<e;r++)t(r,r);else if(e.length===+e.length)for(r=0;r<e.length&&!1!==t.call(n,e[r],r,e);r++);else for(a in e)if(!1===t.call(n,e[a],a,e))break},e.type=function(e){return null===e||void 0===e?String(e):Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1].toLowerCase()},e.each("String Object Array RegExp Function".split(" "),function(t){e["is"+t]=function(n){return e.type(n)===t.toLowerCase()}}),e.isObjectOrArray=function(t){return e.isObject(t)||e.isArray(t)},e.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},e.keys=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},e.values=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t},/*
	    ### Mock.heredoc(fn)

	    * Mock.heredoc(fn)

	    以直观、安全的方式书写（多行）HTML 模板。

	    **使用示例**如下所示：

	        var tpl = Mock.heredoc(function() {
	            /*!
	        {{email}}{{age}}
	        <!-- Mock { 
	            email: '@EMAIL',
	            age: '@INT(1,100)'
	        } -->
	            *\/
	        })
	    
	    **相关阅读**
	    * [Creating multiline strings in JavaScript](http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript)、
	*/
e.heredoc=function(e){
// 1. 移除起始的 function(){ /*!
// 2. 移除末尾的 */ }
// 3. 移除起始和末尾的空格
return e.toString().replace(/^[^\/]+\/\*!?/,"").replace(/\*\/[^\/]+$/,"").replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")},e.noop=function(){},module.exports=e},/* 4 */
/***/
function(module,exports,e){/*
		## Parser

		解析数据模板（属性名部分）。

		* Parser.parse( name )
			
			```json
			{
				parameters: [ name, inc, range, decimal ],
				rnage: [ min , max ],

				min: min,
				max: max,
				count : count,

				decimal: decimal,
				dmin: dmin,
				dmax: dmax,
				dcount: dcount
			}
			```
	 */
var t=e(2),n=e(5);/* jshint -W041 */
module.exports={parse:function(e){e=void 0==e?"":e+"";var r=(e||"").match(t.RE_KEY),a=r&&r[3]&&r[3].match(t.RE_RANGE),o=a&&a[1]&&parseInt(a[1],10),u=a&&a[2]&&parseInt(a[2],10),i=a?a[2]?n.integer(o,u):parseInt(a[1],10):void 0,l=r&&r[4]&&r[4].match(t.RE_RANGE),c=l&&l[1]&&parseInt(l[1],10),s=l&&l[2]&&parseInt(l[2],10),f=l?!l[2]&&parseInt(l[1],10)||n.integer(c,s):void 0,d={
// 1 name, 2 inc, 3 range, 4 decimal
parameters:r,
// 1 min, 2 max
range:a,min:o,max:u,
// min-max
count:i,
// 是否有 decimal
decimal:l,dmin:c,dmax:s,
// dmin-dimax
dcount:f};for(var p in d)if(void 0!=d[p])return d;return{}}}},/* 5 */
/***/
function(module,exports,e){/*
	    ## Mock.Random
	    
	    工具类，用于生成各种随机数据。
	*/
var t=e(3),n={extend:t.extend};n.extend(e(6)),n.extend(e(7)),n.extend(e(8)),n.extend(e(10)),n.extend(e(13)),n.extend(e(15)),n.extend(e(16)),n.extend(e(17)),n.extend(e(14)),n.extend(e(19)),module.exports=n},/* 6 */
/***/
function(module,exports){/*
	    ## Basics
	*/
module.exports={
// 返回一个随机的布尔值。
boolean:function(e,t,n){return void 0!==n?(e=void 0===e||isNaN(e)?1:parseInt(e,10),t=void 0===t||isNaN(t)?1:parseInt(t,10),Math.random()>1/(e+t)*e?!n:n):Math.random()>=.5},bool:function(e,t,n){return this.boolean(e,t,n)},
// 返回一个随机的自然数（大于等于 0 的整数）。
natural:function(e,t){// 2^53
return e=void 0!==e?parseInt(e,10):0,t=void 0!==t?parseInt(t,10):9007199254740992,Math.round(Math.random()*(t-e))+e},
// 返回一个随机的整数。
integer:function(e,t){// 2^53
return e=void 0!==e?parseInt(e,10):-9007199254740992,t=void 0!==t?parseInt(t,10):9007199254740992,Math.round(Math.random()*(t-e))+e},int:function(e,t){return this.integer(e,t)},
// 返回一个随机的浮点数。
float:function(e,t,n,r){n=void 0===n?0:n,n=Math.max(Math.min(n,17),0),r=void 0===r?17:r,r=Math.max(Math.min(r,17),0);for(var a=this.integer(e,t)+".",o=0,u=this.natural(n,r);o<u;o++)a+=
// 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
o<u-1?this.character("number"):this.character("123456789");return parseFloat(a,10)},
// 返回一个随机字符。
character:function(e){var t={lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",number:"0123456789",symbol:"!@#$%^&*()[]"};return t.alpha=t.lower+t.upper,t.undefined=t.lower+t.upper+t.number+t.symbol,e=t[(""+e).toLowerCase()]||e,e.charAt(this.natural(0,e.length-1))},char:function(e){return this.character(e)},
// 返回一个随机字符串。
string:function(e,t,n){var r;switch(arguments.length){case 0:// ()
r=this.natural(3,7);break;case 1:// ( length )
r=e,e=void 0;break;case 2:
// ( pool, length )
"string"==typeof arguments[0]?r=t:(
// ( min, max )
r=this.natural(e,t),e=void 0);break;case 3:r=this.natural(t,n)}for(var a="",o=0;o<r;o++)a+=this.character(e);return a},str:function(){return this.string.apply(this,arguments)},
// 返回一个整型数组。
range:function(e,t,n){
// range( stop )
arguments.length<=1&&(t=e||0,e=0),
// range( start, stop )
n=arguments[2]||1,e=+e,t=+t,n=+n;for(var r=Math.max(Math.ceil((t-e)/n),0),a=0,o=new Array(r);a<r;)o[a++]=e,e+=n;return o}}},/* 7 */
/***/
function(module,exports){/*
	    ## Date
	*/
var e={yyyy:"getFullYear",yy:function(e){return(""+e.getFullYear()).slice(2)},y:"yy",MM:function(e){var t=e.getMonth()+1;return t<10?"0"+t:t},M:function(e){return e.getMonth()+1},dd:function(e){var t=e.getDate();return t<10?"0"+t:t},d:"getDate",HH:function(e){var t=e.getHours();return t<10?"0"+t:t},H:"getHours",hh:function(e){var t=e.getHours()%12;return t<10?"0"+t:t},h:function(e){return e.getHours()%12},mm:function(e){var t=e.getMinutes();return t<10?"0"+t:t},m:"getMinutes",ss:function(e){var t=e.getSeconds();return t<10?"0"+t:t},s:"getSeconds",SS:function(e){var t=e.getMilliseconds();return t<10&&"00"+t||t<100&&"0"+t||t},S:"getMilliseconds",A:function(e){return e.getHours()<12?"AM":"PM"},a:function(e){return e.getHours()<12?"am":"pm"},T:"getTime"};module.exports={
// 日期占位符集合。
_patternLetters:e,
// 日期占位符正则。
_rformat:new RegExp(function(){var t=[];for(var n in e)t.push(n);return"("+t.join("|")+")"}(),"g"),
// 格式化日期。
_formatDate:function(t,n){return n.replace(this._rformat,function n(r,a){return"function"==typeof e[a]?e[a](t):e[a]in e?n(r,e[a]):t[e[a]]()})},
// 生成一个随机的 Date 对象。
_randomDate:function(e,t){// min, max
return e=void 0===e?new Date(0):e,t=void 0===t?new Date:t,new Date(Math.random()*(t.getTime()-e.getTime()))},
// 返回一个随机的日期字符串。
date:function(e){return e=e||"yyyy-MM-dd",this._formatDate(this._randomDate(),e)},
// 返回一个随机的时间字符串。
time:function(e){return e=e||"HH:mm:ss",this._formatDate(this._randomDate(),e)},
// 返回一个随机的日期和时间字符串。
datetime:function(e){return e=e||"yyyy-MM-dd HH:mm:ss",this._formatDate(this._randomDate(),e)},
// 返回当前的日期和时间字符串。
now:function(e,t){
// now(unit) now(format)
1===arguments.length&&(
// now(format)
/year|month|day|hour|minute|second|week/.test(e)||(t=e,e="")),e=(e||"").toLowerCase(),t=t||"yyyy-MM-dd HH:mm:ss";var n=new Date;/* jshint -W086 */
// 参考自 http://momentjs.cn/docs/#/manipulating/start-of/
switch(e){case"year":n.setMonth(0);case"month":n.setDate(1);case"week":case"day":n.setHours(0);case"hour":n.setMinutes(0);case"minute":n.setSeconds(0);case"second":n.setMilliseconds(0)}switch(e){case"week":n.setDate(n.getDate()-n.getDay())}return this._formatDate(n,t)}}},/* 8 */
/***/
function(module,exports,e){/* WEBPACK VAR INJECTION */
(function(module){/* global document  */
/*
	    ## Image
	*/
module.exports={
// 常见的广告宽高
_adSize:["300x250","250x250","240x400","336x280","180x150","720x300","468x60","234x60","88x31","120x90","120x60","120x240","125x125","728x90","160x600","120x600","300x600"],
// 常见的屏幕宽高
_screenSize:["320x200","320x240","640x480","800x480","800x480","1024x600","1024x768","1280x800","1440x900","1920x1200","2560x1600"],
// 常见的视频宽高
_videoSize:["720x480","768x576","1280x720","1920x1080"],/*
	        生成一个随机的图片地址。

	        替代图片源
	            http://fpoimg.com/
	        参考自 
	            http://rensanning.iteye.com/blog/1933310
	            http://code.tutsplus.com/articles/the-top-8-placeholders-for-web-designers--net-19485
	    */
image:function(e,t,n,r,a){
// http://dummyimage.com/600x400/cc00cc/470047.png&text=hello
// Random.image( size, background, foreground, text )
// Random.image( size, background, text )
// Random.image()
return 4===arguments.length&&(a=r,r=void 0),3===arguments.length&&(a=n,n=void 0),e||(e=this.pick(this._adSize)),t&&~t.indexOf("#")&&(t=t.slice(1)),n&&~n.indexOf("#")&&(n=n.slice(1)),"http://dummyimage.com/"+e+(t?"/"+t:"")+(n?"/"+n:"")+(r?"."+r:"")+(a?"&text="+a:"")},img:function(){return this.image.apply(this,arguments)},/*
	        BrandColors
	        http://brandcolors.net/
	        A collection of major brand color codes curated by Galen Gidman.
	        大牌公司的颜色集合

	        // 获取品牌和颜色
	        $('h2').each(function(index, item){
	            item = $(item)
	            console.log('\'' + item.text() + '\'', ':', '\'' + item.next().text() + '\'', ',')
	        })
	    */
_brandColors:{"4ormat":"#fb0a2a","500px":"#02adea","About.me (blue)":"#00405d","About.me (yellow)":"#ffcc33",Addvocate:"#ff6138",Adobe:"#ff0000",Aim:"#fcd20b",Amazon:"#e47911",Android:"#a4c639","Angie's List":"#7fbb00",AOL:"#0060a3",Atlassian:"#003366",Behance:"#053eff","Big Cartel":"#97b538",bitly:"#ee6123",Blogger:"#fc4f08",Boeing:"#0039a6","Booking.com":"#003580",Carbonmade:"#613854",Cheddar:"#ff7243","Code School":"#3d4944",Delicious:"#205cc0",Dell:"#3287c1",Designmoo:"#e54a4f",Deviantart:"#4e6252","Designer News":"#2d72da",Devour:"#fd0001",DEWALT:"#febd17","Disqus (blue)":"#59a3fc","Disqus (orange)":"#db7132",Dribbble:"#ea4c89",Dropbox:"#3d9ae8",Drupal:"#0c76ab",Dunked:"#2a323a",eBay:"#89c507",Ember:"#f05e1b",Engadget:"#00bdf6",Envato:"#528036",Etsy:"#eb6d20",Evernote:"#5ba525","Fab.com":"#dd0017",Facebook:"#3b5998",Firefox:"#e66000","Flickr (blue)":"#0063dc","Flickr (pink)":"#ff0084",Forrst:"#5b9a68",Foursquare:"#25a0ca",Garmin:"#007cc3",GetGlue:"#2d75a2",Gimmebar:"#f70078",GitHub:"#171515","Google Blue":"#0140ca","Google Green":"#16a61e","Google Red":"#dd1812","Google Yellow":"#fcca03","Google+":"#dd4b39",Grooveshark:"#f77f00",Groupon:"#82b548","Hacker News":"#ff6600",HelloWallet:"#0085ca","Heroku (light)":"#c7c5e6","Heroku (dark)":"#6567a5",HootSuite:"#003366",Houzz:"#73ba37",HTML5:"#ec6231",IKEA:"#ffcc33",IMDb:"#f3ce13",Instagram:"#3f729b",Intel:"#0071c5",Intuit:"#365ebf",Kickstarter:"#76cc1e",kippt:"#e03500",Kodery:"#00af81",LastFM:"#c3000d",LinkedIn:"#0e76a8",Livestream:"#cf0005",Lumo:"#576396",Mixpanel:"#a086d3",Meetup:"#e51937",Nokia:"#183693",NVIDIA:"#76b900",Opera:"#cc0f16",Path:"#e41f11","PayPal (dark)":"#1e477a","PayPal (light)":"#3b7bbf",Pinboard:"#0000e6",Pinterest:"#c8232c",PlayStation:"#665cbe",Pocket:"#ee4056",Prezi:"#318bff",Pusha:"#0f71b4",Quora:"#a82400","QUOTE.fm":"#66ceff",Rdio:"#008fd5",Readability:"#9c0000","Red Hat":"#cc0000",Resource:"#7eb400",Rockpack:"#0ba6ab",Roon:"#62b0d9",RSS:"#ee802f",Salesforce:"#1798c1",Samsung:"#0c4da2",Shopify:"#96bf48",Skype:"#00aff0",Snagajob:"#f47a20",Softonic:"#008ace",SoundCloud:"#ff7700","Space Box":"#f86960",Spotify:"#81b71a",Sprint:"#fee100",Squarespace:"#121212",StackOverflow:"#ef8236",Staples:"#cc0000","Status Chart":"#d7584f",Stripe:"#008cdd",StudyBlue:"#00afe1",StumbleUpon:"#f74425","T-Mobile":"#ea0a8e",Technorati:"#40a800","The Next Web":"#ef4423",Treehouse:"#5cb868",Trulia:"#5eab1f",Tumblr:"#34526f","Twitch.tv":"#6441a5",Twitter:"#00acee",TYPO3:"#ff8700",Ubuntu:"#dd4814",Ustream:"#3388ff",Verizon:"#ef1d1d",Vimeo:"#86c9ef",Vine:"#00a478",Virb:"#06afd8","Virgin Media":"#cc0000",Wooga:"#5b009c","WordPress (blue)":"#21759b","WordPress (orange)":"#d54e21","WordPress (grey)":"#464646",Wunderlist:"#2b88d9",XBOX:"#9bc848",XING:"#126567","Yahoo!":"#720e9e",Yandex:"#ffcc00",Yelp:"#c41200",YouTube:"#c4302b",Zalongo:"#5498dc",Zendesk:"#78a300",Zerply:"#9dcc7a",Zootool:"#5e8b1d"},_brandNames:function(){var e=[];for(var t in this._brandColors)e.push(t);return e},/*
	        生成一段随机的 Base64 图片编码。

	        https://github.com/imsky/holder
	        Holder renders image placeholders entirely on the client side.

	        dataImageHolder: function(size) {
	            return 'holder.js/' + size
	        },
	    */
dataImage:function(e,t){var n;if("undefined"!=typeof document)n=document.createElement("canvas");else{n=new(module.require("canvas"))}var r=n&&n.getContext&&n.getContext("2d");if(!n||!r)return"";e||(e=this.pick(this._adSize)),t=void 0!==t?t:e,e=e.split("x");var a=parseInt(e[0],10),o=parseInt(e[1],10),u=this._brandColors[this.pick(this._brandNames())];return n.width=a,n.height=o,r.textAlign="center",r.textBaseline="middle",r.fillStyle=u,r.fillRect(0,0,a,o),r.fillStyle="#FFF",r.font="bold 14px sans-serif",r.fillText(t,a/2,o/2,a),n.toDataURL("image/png")}}}).call(exports,e(9)(module))},/* 9 */
/***/
function(module,exports){module.exports=function(module){
// module.parent = undefined by default
return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],module.children=[],module.webpackPolyfill=1),module}},/* 10 */
/***/
function(module,exports,e){/*
	    ## Color

	    http://llllll.li/randomColor/
	        A color generator for JavaScript.
	        randomColor generates attractive colors by default. More specifically, randomColor produces bright colors with a reasonably high saturation. This makes randomColor particularly useful for data visualizations and generative art.

	    http://randomcolour.com/
	        var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
	        bg_colour = "#" + ("000000" + bg_colour).slice(-6);
	        document.bgColor = bg_colour;
	    
	    http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
	        Creating random colors is actually more difficult than it seems. The randomness itself is easy, but aesthetically pleasing randomness is more difficult.
	        https://github.com/devongovett/color-generator

	    http://www.paulirish.com/2009/random-hex-color-code-snippets/
	        Random Hex Color Code Generator in JavaScript

	    http://chancejs.com/#color
	        chance.color()
	        // => '#79c157'
	        chance.color({format: 'hex'})
	        // => '#d67118'
	        chance.color({format: 'shorthex'})
	        // => '#60f'
	        chance.color({format: 'rgb'})
	        // => 'rgb(110,52,164)'

	    http://tool.c7sky.com/webcolor
	        网页设计常用色彩搭配表
	    
	    https://github.com/One-com/one-color
	        An OO-based JavaScript color parser/computation toolkit with support for RGB, HSV, HSL, CMYK, and alpha channels.
	        API 很赞

	    https://github.com/harthur/color
	        JavaScript color conversion and manipulation library

	    https://github.com/leaverou/css-colors
	        Share & convert CSS colors
	    http://leaverou.github.io/css-colors/#slategray
	        Type a CSS color keyword, #hex, hsl(), rgba(), whatever:

	    色调 hue
	        http://baike.baidu.com/view/23368.htm
	        色调指的是一幅画中画面色彩的总体倾向，是大的色彩效果。
	    饱和度 saturation
	        http://baike.baidu.com/view/189644.htm
	        饱和度是指色彩的鲜艳程度，也称色彩的纯度。饱和度取决于该色中含色成分和消色成分（灰色）的比例。含色成分越大，饱和度越大；消色成分越大，饱和度越小。
	    亮度 brightness
	        http://baike.baidu.com/view/34773.htm
	        亮度是指发光体（反光体）表面发光（反光）强弱的物理量。
	    照度 luminosity
	        物体被照亮的程度,采用单位面积所接受的光通量来表示,表示单位为勒[克斯](Lux,lx) ,即 1m / m2 。

	    http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
	        var letters = '0123456789ABCDEF'.split('')
	        var color = '#'
	        for (var i = 0; i < 6; i++) {
	            color += letters[Math.floor(Math.random() * 16)]
	        }
	        return color
	    
	        // 随机生成一个无脑的颜色，格式为 '#RRGGBB'。
	        // _brainlessColor()
	        var color = Math.floor(
	            Math.random() *
	            (16 * 16 * 16 * 16 * 16 * 16 - 1)
	        ).toString(16)
	        color = "#" + ("000000" + color).slice(-6)
	        return color.toUpperCase()
	*/
var t=e(11),n=e(12);module.exports={
// 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
color:function(e){return e||n[e]?n[e].nicer:this.hex()},
// #DAC0DE
hex:function(){var e=this._goldenRatioColor(),n=t.hsv2rgb(e);return t.rgb2hex(n[0],n[1],n[2])},
// rgb(128,255,255)
rgb:function(){var e=this._goldenRatioColor(),n=t.hsv2rgb(e);return"rgb("+parseInt(n[0],10)+", "+parseInt(n[1],10)+", "+parseInt(n[2],10)+")"},
// rgba(128,255,255,0.3)
rgba:function(){var e=this._goldenRatioColor(),n=t.hsv2rgb(e);return"rgba("+parseInt(n[0],10)+", "+parseInt(n[1],10)+", "+parseInt(n[2],10)+", "+Math.random().toFixed(2)+")"},
// hsl(300,80%,90%)
hsl:function(){var e=this._goldenRatioColor(),n=t.hsv2hsl(e);return"hsl("+parseInt(n[0],10)+", "+parseInt(n[1],10)+", "+parseInt(n[2],10)+")"},
// http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
// https://github.com/devongovett/color-generator/blob/master/index.js
// 随机生成一个有吸引力的颜色。
_goldenRatioColor:function(e,t){return this._goldenRatio=.618033988749895,this._hue=this._hue||Math.random(),this._hue+=this._goldenRatio,this._hue%=1,"number"!=typeof e&&(e=.5),"number"!=typeof t&&(t=.95),[360*this._hue,100*e,100*t]}}},/* 11 */
/***/
function(module,exports){/*
	    ## Color Convert

	    http://blog.csdn.net/idfaya/article/details/6770414
	        颜色空间RGB与HSV(HSL)的转换
	*/
// https://github.com/harthur/color-convert/blob/master/conversions.js
module.exports={rgb2hsl:function(e){var t,n,r,a=e[0]/255,o=e[1]/255,u=e[2]/255,i=Math.min(a,o,u),l=Math.max(a,o,u),c=l-i;return l==i?t=0:a==l?t=(o-u)/c:o==l?t=2+(u-a)/c:u==l&&(t=4+(a-o)/c),t=Math.min(60*t,360),t<0&&(t+=360),r=(i+l)/2,n=l==i?0:r<=.5?c/(l+i):c/(2-l-i),[t,100*n,100*r]},rgb2hsv:function(e){var t,n,r,a=e[0],o=e[1],u=e[2],i=Math.min(a,o,u),l=Math.max(a,o,u),c=l-i;return n=0===l?0:c/l*1e3/10,l==i?t=0:a==l?t=(o-u)/c:o==l?t=2+(u-a)/c:u==l&&(t=4+(a-o)/c),t=Math.min(60*t,360),t<0&&(t+=360),r=l/255*1e3/10,[t,n,r]},hsl2rgb:function(e){var t,n,r,a,o,u=e[0]/360,i=e[1]/100,l=e[2]/100;if(0===i)return o=255*l,[o,o,o];n=l<.5?l*(1+i):l+i-l*i,t=2*l-n,a=[0,0,0];for(var c=0;c<3;c++)r=u+1/3*-(c-1),r<0&&r++,r>1&&r--,o=6*r<1?t+6*(n-t)*r:2*r<1?n:3*r<2?t+(n-t)*(2/3-r)*6:t,a[c]=255*o;return a},hsl2hsv:function(e){var t,n,r=e[0],a=e[1]/100,o=e[2]/100;return o*=2,a*=o<=1?o:2-o,n=(o+a)/2,t=2*a/(o+a),[r,100*t,100*n]},hsv2rgb:function(e){var t=e[0]/60,n=e[1]/100,r=e[2]/100,a=Math.floor(t)%6,o=t-Math.floor(t),u=255*r*(1-n),i=255*r*(1-n*o),l=255*r*(1-n*(1-o));switch(r*=255,a){case 0:return[r,l,u];case 1:return[i,r,u];case 2:return[u,r,l];case 3:return[u,i,r];case 4:return[l,u,r];case 5:return[r,u,i]}},hsv2hsl:function(e){var t,n,r=e[0],a=e[1]/100,o=e[2]/100;return n=(2-a)*o,t=a*o,t/=n<=1?n:2-n,n/=2,[r,100*t,100*n]},
// http://www.140byt.es/keywords/color
rgb2hex:function(e,// red, as a number from 0 to 255
t,// green, as a number from 0 to 255
n){return"#"+((256+e<<8|t)<<8|n).toString(16).slice(1)},hex2rgb:function(e){return e="0x"+e.slice(1).replace(e.length>4?e:/./g,"$&$&")|0,[e>>16,e>>8&255,255&e]}}},/* 12 */
/***/
function(module,exports){/*
	    ## Color 字典数据

	    字典数据来源 [A nicer color palette for the web](http://clrs.cc/)
	*/
module.exports={
// name value nicer
navy:{value:"#000080",nicer:"#001F3F"},blue:{value:"#0000ff",nicer:"#0074D9"},aqua:{value:"#00ffff",nicer:"#7FDBFF"},teal:{value:"#008080",nicer:"#39CCCC"},olive:{value:"#008000",nicer:"#3D9970"},green:{value:"#008000",nicer:"#2ECC40"},lime:{value:"#00ff00",nicer:"#01FF70"},yellow:{value:"#ffff00",nicer:"#FFDC00"},orange:{value:"#ffa500",nicer:"#FF851B"},red:{value:"#ff0000",nicer:"#FF4136"},maroon:{value:"#800000",nicer:"#85144B"},fuchsia:{value:"#ff00ff",nicer:"#F012BE"},purple:{value:"#800080",nicer:"#B10DC9"},silver:{value:"#c0c0c0",nicer:"#DDDDDD"},gray:{value:"#808080",nicer:"#AAAAAA"},black:{value:"#000000",nicer:"#111111"},white:{value:"#FFFFFF",nicer:"#FFFFFF"}}},/* 13 */
/***/
function(module,exports,e){function t(e,t,r,a){// ()
// ( len )
return void 0===r?n.natural(e,t):void 0===a?r:n.natural(parseInt(r,10),parseInt(a,10))}/*
	    ## Text

	    http://www.lipsum.com/
	*/
var n=e(6),r=e(14);module.exports={
// 随机生成一段文本。
paragraph:function(e,n){for(var r=t(3,7,e,n),a=[],o=0;o<r;o++)a.push(this.sentence());return a.join(" ")},
// 
cparagraph:function(e,n){for(var r=t(3,7,e,n),a=[],o=0;o<r;o++)a.push(this.csentence());return a.join("")},
// 随机生成一个句子，第一个单词的首字母大写。
sentence:function(e,n){for(var a=t(12,18,e,n),o=[],u=0;u<a;u++)o.push(this.word());return r.capitalize(o.join(" "))+"."},
// 随机生成一个中文句子。
csentence:function(e,n){for(var r=t(12,18,e,n),a=[],o=0;o<r;o++)a.push(this.cword());return a.join("")+"。"},
// 随机生成一个单词。
word:function(e,r){for(var a=t(3,10,e,r),o="",u=0;u<a;u++)o+=n.character("lower");return o},
// 随机生成一个或多个汉字。
cword:function(e,t,n){
// 最常用的 500 个汉字 http://baike.baidu.com/view/568436.htm
var r,a="的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞";switch(arguments.length){case 0:// ()
e=a,r=1;break;case 1:// ( pool )
"string"==typeof arguments[0]?r=1:(
// ( length )
r=e,e=a);break;case 2:
// ( pool, length )
"string"==typeof arguments[0]?r=t:(
// ( min, max )
r=this.natural(e,t),e=a);break;case 3:r=this.natural(t,n)}for(var o="",u=0;u<r;u++)o+=e.charAt(this.natural(0,e.length-1));return o},
// 随机生成一句标题，其中每个单词的首字母大写。
title:function(e,n){for(var r=t(3,7,e,n),a=[],o=0;o<r;o++)a.push(this.capitalize(this.word()));return a.join(" ")},
// 随机生成一句中文标题。
ctitle:function(e,n){for(var r=t(3,7,e,n),a=[],o=0;o<r;o++)a.push(this.cword());return a.join("")}}},/* 14 */
/***/
function(module,exports,e){/*
	    ## Helpers
	*/
var t=e(3);module.exports={
// 把字符串的第一个字母转换为大写。
capitalize:function(e){return(e+"").charAt(0).toUpperCase()+(e+"").substr(1)},
// 把字符串转换为大写。
upper:function(e){return(e+"").toUpperCase()},
// 把字符串转换为小写。
lower:function(e){return(e+"").toLowerCase()},
// 从数组中随机选取一个元素，并返回。
pick:function(e,n,r){
// pick( item1, item2 ... )
// pick( [ item1, item2 ... ] )
// pick( [ item1, item2 ... ], count )
return t.isArray(e)?(void 0===n&&(n=1),void 0===r&&(r=n)):(e=[].slice.call(arguments),n=1,r=1),1===n&&1===r?e[this.natural(0,e.length-1)]:this.shuffle(e,n,r)},/*
		    打乱数组中元素的顺序，并返回。
		    Given an array, scramble the order and return it.

		    其他的实现思路：
		        // https://code.google.com/p/jslibs/wiki/JavascriptTips
		        result = result.sort(function() {
		            return Math.random() - 0.5
		        })
		*/
shuffle:function(e,t,n){e=e||[];for(var r=e.slice(0),a=[],o=0,u=r.length,i=0;i<u;i++)o=this.natural(0,r.length-1),a.push(r[o]),r.splice(o,1);switch(arguments.length){case 0:case 1:return a;case 2:n=t;/* falls through */
case 3:return t=parseInt(t,10),n=parseInt(n,10),a.slice(0,this.natural(t,n))}},/*
		    * Random.order(item, item)
		    * Random.order([item, item ...])

		    顺序获取数组中的元素

		    [JSON导入数组支持数组数据录入](https://github.com/thx/RAP/issues/22)

		    不支持单独调用！
		*/
order:function e(t){e.cache=e.cache||{},arguments.length>1&&(t=[].slice.call(arguments,0));
// options.context.path/templatePath
var n=e.options,r=n.context.templatePath.join("."),a=e.cache[r]=e.cache[r]||{index:0,array:t};return a.array[a.index++%a.array.length]}}},/* 15 */
/***/
function(module,exports){/*
	    ## Name

	    [Beyond the Top 1000 Names](http://www.ssa.gov/oact/babynames/limits.html)
	*/
module.exports={
// 随机生成一个常见的英文名。
first:function(){var e=[
// male
"James","John","Robert","Michael","William","David","Richard","Charles","Joseph","Thomas","Christopher","Daniel","Paul","Mark","Donald","George","Kenneth","Steven","Edward","Brian","Ronald","Anthony","Kevin","Jason","Matthew","Gary","Timothy","Jose","Larry","Jeffrey","Frank","Scott","Eric"].concat([
// female
"Mary","Patricia","Linda","Barbara","Elizabeth","Jennifer","Maria","Susan","Margaret","Dorothy","Lisa","Nancy","Karen","Betty","Helen","Sandra","Donna","Carol","Ruth","Sharon","Michelle","Laura","Sarah","Kimberly","Deborah","Jessica","Shirley","Cynthia","Angela","Melissa","Brenda","Amy","Anna"]);return this.pick(e)},
// 随机生成一个常见的英文姓。
last:function(){var e=["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen"];return this.pick(e)},
// 随机生成一个常见的英文姓名。
name:function(e){return this.first()+" "+(e?this.first()+" ":"")+this.last()},/*
		    随机生成一个常见的中文姓。
		    [世界常用姓氏排行](http://baike.baidu.com/view/1719115.htm)
		    [玄派网 - 网络小说创作辅助平台](http://xuanpai.sinaapp.com/)
		 */
cfirst:function(){var e="王 李 张 刘 陈 杨 赵 黄 周 吴 徐 孙 胡 朱 高 林 何 郭 马 罗 梁 宋 郑 谢 韩 唐 冯 于 董 萧 程 曹 袁 邓 许 傅 沈 曾 彭 吕 苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 余 潘 杜 戴 夏 锺 汪 田 任 姜 范 方 石 姚 谭 廖 邹 熊 金 陆 郝 孔 白 崔 康 毛 邱 秦 江 史 顾 侯 邵 孟 龙 万 段 雷 钱 汤 尹 黎 易 常 武 乔 贺 赖 龚 文".split(" ");return this.pick(e)},/*
		    随机生成一个常见的中文名。
		    [中国最常见名字前50名_三九算命网](http://www.name999.net/xingming/xingshi/20131004/48.html)
		 */
clast:function(){var e="伟 芳 娜 秀英 敏 静 丽 强 磊 军 洋 勇 艳 杰 娟 涛 明 超 秀兰 霞 平 刚 桂英".split(" ");return this.pick(e)},
// 随机生成一个常见的中文姓名。
cname:function(){return this.cfirst()+this.clast()}}},/* 16 */
/***/
function(module,exports){/*
	    ## Web
	*/
module.exports={/*
	        随机生成一个 URL。

	        [URL 规范](http://www.w3.org/Addressing/URL/url-spec.txt)
	            http                    Hypertext Transfer Protocol 
	            ftp                     File Transfer protocol 
	            gopher                  The Gopher protocol 
	            mailto                  Electronic mail address 
	            mid                     Message identifiers for electronic mail 
	            cid                     Content identifiers for MIME body part 
	            news                    Usenet news 
	            nntp                    Usenet news for local NNTP access only 
	            prospero                Access using the prospero protocols 
	            telnet rlogin tn3270    Reference to interactive sessions
	            wais                    Wide Area Information Servers 
	    */
url:function(e,t){// protocol?
// host?
return(e||this.protocol())+"://"+(t||this.domain())+"/"+this.word()},
// 随机生成一个 URL 协议。
protocol:function(){
// 协议簇
return this.pick("http ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais".split(" "))},
// 随机生成一个域名。
domain:function(e){return this.word()+"."+(e||this.tld())},/*
	        随机生成一个顶级域名。
	        国际顶级域名 international top-level domain-names, iTLDs
	        国家顶级域名 national top-level domainnames, nTLDs
	        [域名后缀大全](http://www.163ns.com/zixun/post/4417.html)
	    */
tld:function(){// Top Level Domain
return this.pick("com net org edu gov int mil cn com.cn net.cn gov.cn org.cn 中国 中国互联.公司 中国互联.网络 tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw".split(" "))},
// 随机生成一个邮件地址。
email:function(e){return this.character("lower")+"."+this.word()+"@"+(e||this.word()+"."+this.tld())},
// 随机生成一个 IP 地址。
ip:function(){return this.natural(0,255)+"."+this.natural(0,255)+"."+this.natural(0,255)+"."+this.natural(0,255)}}},/* 17 */
/***/
function(module,exports,e){/*
	    ## Address
	*/
var t=e(18),n=["东北","华北","华东","华中","华南","西南","西北"];module.exports={
// 随机生成一个大区。
region:function(){return this.pick(n)},
// 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
province:function(){return this.pick(t).name},
// 随机生成一个（中国）市。
city:function(e){var n=this.pick(t),r=this.pick(n.children);return e?[n.name,r.name].join(" "):r.name},
// 随机生成一个（中国）县。
county:function(e){var n=this.pick(t),r=this.pick(n.children),a=this.pick(r.children)||{name:"-"};return e?[n.name,r.name,a.name].join(" "):a.name},
// 随机生成一个邮政编码（六位数字）。
zip:function(e){for(var t="",n=0;n<(e||6);n++)t+=this.natural(0,9);return t}}},/* 18 */
/***/
function(module,exports){
// id pid/parentId name children
function e(e){for(var t,n={},r=0;r<e.length;r++)(t=e[r])&&t.id&&(n[t.id]=t);for(var a=[],o=0;o<e.length;o++)if(t=e[o])/* jshint -W041 */
if(void 0!=t.pid||void 0!=t.parentId){var u=n[t.pid]||n[t.parentId];u&&(u.children||(u.children=[]),u.children.push(t))}else a.push(t);return a}/*
	    ## Address 字典数据

	    字典数据来源 http://www.atatech.org/articles/30028?rnd=254259856

	    国标 省（市）级行政区划码表

	    华北   北京市 天津市 河北省 山西省 内蒙古自治区
	    东北   辽宁省 吉林省 黑龙江省
	    华东   上海市 江苏省 浙江省 安徽省 福建省 江西省 山东省
	    华南   广东省 广西壮族自治区 海南省
	    华中   河南省 湖北省 湖南省
	    西南   重庆市 四川省 贵州省 云南省 西藏自治区
	    西北   陕西省 甘肃省 青海省 宁夏回族自治区 新疆维吾尔自治区
	    港澳台 香港特别行政区 澳门特别行政区 台湾省
	    
	    **排序**
	    
	    ```js
	    var map = {}
	    _.each(_.keys(REGIONS),function(id){
	      map[id] = REGIONS[ID]
	    })
	    JSON.stringify(map)
	    ```
	*/
var t={110000:"北京",110100:"北京市",110101:"东城区",110102:"西城区",110105:"朝阳区",110106:"丰台区",110107:"石景山区",110108:"海淀区",110109:"门头沟区",110111:"房山区",110112:"通州区",110113:"顺义区",110114:"昌平区",110115:"大兴区",110116:"怀柔区",110117:"平谷区",110228:"密云县",110229:"延庆县",110230:"其它区",120000:"天津",120100:"天津市",120101:"和平区",120102:"河东区",120103:"河西区",120104:"南开区",120105:"河北区",120106:"红桥区",120110:"东丽区",120111:"西青区",120112:"津南区",120113:"北辰区",120114:"武清区",120115:"宝坻区",120116:"滨海新区",120221:"宁河县",120223:"静海县",120225:"蓟县",120226:"其它区",130000:"河北省",130100:"石家庄市",130102:"长安区",130103:"桥东区",130104:"桥西区",130105:"新华区",130107:"井陉矿区",130108:"裕华区",130121:"井陉县",130123:"正定县",130124:"栾城县",130125:"行唐县",130126:"灵寿县",130127:"高邑县",130128:"深泽县",130129:"赞皇县",130130:"无极县",130131:"平山县",130132:"元氏县",130133:"赵县",130181:"辛集市",130182:"藁城市",130183:"晋州市",130184:"新乐市",130185:"鹿泉市",130186:"其它区",130200:"唐山市",130202:"路南区",130203:"路北区",130204:"古冶区",130205:"开平区",130207:"丰南区",130208:"丰润区",130223:"滦县",130224:"滦南县",130225:"乐亭县",130227:"迁西县",130229:"玉田县",130230:"曹妃甸区",130281:"遵化市",130283:"迁安市",130284:"其它区",130300:"秦皇岛市",130302:"海港区",130303:"山海关区",130304:"北戴河区",130321:"青龙满族自治县",130322:"昌黎县",130323:"抚宁县",130324:"卢龙县",130398:"其它区",130400:"邯郸市",130402:"邯山区",130403:"丛台区",130404:"复兴区",130406:"峰峰矿区",130421:"邯郸县",130423:"临漳县",130424:"成安县",130425:"大名县",130426:"涉县",130427:"磁县",130428:"肥乡县",130429:"永年县",130430:"邱县",130431:"鸡泽县",130432:"广平县",130433:"馆陶县",130434:"魏县",130435:"曲周县",130481:"武安市",130482:"其它区",130500:"邢台市",130502:"桥东区",130503:"桥西区",130521:"邢台县",130522:"临城县",130523:"内丘县",130524:"柏乡县",130525:"隆尧县",130526:"任县",130527:"南和县",130528:"宁晋县",130529:"巨鹿县",130530:"新河县",130531:"广宗县",130532:"平乡县",130533:"威县",130534:"清河县",130535:"临西县",130581:"南宫市",130582:"沙河市",130583:"其它区",130600:"保定市",130602:"新市区",130603:"北市区",130604:"南市区",130621:"满城县",130622:"清苑县",130623:"涞水县",130624:"阜平县",130625:"徐水县",130626:"定兴县",130627:"唐县",130628:"高阳县",130629:"容城县",130630:"涞源县",130631:"望都县",130632:"安新县",130633:"易县",130634:"曲阳县",130635:"蠡县",130636:"顺平县",130637:"博野县",130638:"雄县",130681:"涿州市",130682:"定州市",130683:"安国市",130684:"高碑店市",130699:"其它区",130700:"张家口市",130702:"桥东区",130703:"桥西区",130705:"宣化区",130706:"下花园区",130721:"宣化县",130722:"张北县",130723:"康保县",130724:"沽源县",130725:"尚义县",130726:"蔚县",130727:"阳原县",130728:"怀安县",130729:"万全县",130730:"怀来县",130731:"涿鹿县",130732:"赤城县",130733:"崇礼县",130734:"其它区",130800:"承德市",130802:"双桥区",130803:"双滦区",130804:"鹰手营子矿区",130821:"承德县",130822:"兴隆县",130823:"平泉县",130824:"滦平县",130825:"隆化县",130826:"丰宁满族自治县",130827:"宽城满族自治县",130828:"围场满族蒙古族自治县",130829:"其它区",130900:"沧州市",130902:"新华区",130903:"运河区",130921:"沧县",130922:"青县",130923:"东光县",130924:"海兴县",130925:"盐山县",130926:"肃宁县",130927:"南皮县",130928:"吴桥县",130929:"献县",130930:"孟村回族自治县",130981:"泊头市",130982:"任丘市",130983:"黄骅市",130984:"河间市",130985:"其它区",131000:"廊坊市",131002:"安次区",131003:"广阳区",131022:"固安县",131023:"永清县",131024:"香河县",131025:"大城县",131026:"文安县",131028:"大厂回族自治县",131081:"霸州市",131082:"三河市",131083:"其它区",131100:"衡水市",131102:"桃城区",131121:"枣强县",131122:"武邑县",131123:"武强县",131124:"饶阳县",131125:"安平县",131126:"故城县",131127:"景县",131128:"阜城县",131181:"冀州市",131182:"深州市",131183:"其它区",140000:"山西省",140100:"太原市",140105:"小店区",140106:"迎泽区",140107:"杏花岭区",140108:"尖草坪区",140109:"万柏林区",140110:"晋源区",140121:"清徐县",140122:"阳曲县",140123:"娄烦县",140181:"古交市",140182:"其它区",140200:"大同市",140202:"城区",140203:"矿区",140211:"南郊区",140212:"新荣区",140221:"阳高县",140222:"天镇县",140223:"广灵县",140224:"灵丘县",140225:"浑源县",140226:"左云县",140227:"大同县",140228:"其它区",140300:"阳泉市",140302:"城区",140303:"矿区",140311:"郊区",140321:"平定县",140322:"盂县",140323:"其它区",140400:"长治市",140421:"长治县",140423:"襄垣县",140424:"屯留县",140425:"平顺县",140426:"黎城县",140427:"壶关县",140428:"长子县",140429:"武乡县",140430:"沁县",140431:"沁源县",140481:"潞城市",140482:"城区",140483:"郊区",140485:"其它区",140500:"晋城市",140502:"城区",140521:"沁水县",140522:"阳城县",140524:"陵川县",140525:"泽州县",140581:"高平市",140582:"其它区",140600:"朔州市",140602:"朔城区",140603:"平鲁区",140621:"山阴县",140622:"应县",140623:"右玉县",140624:"怀仁县",140625:"其它区",140700:"晋中市",140702:"榆次区",140721:"榆社县",140722:"左权县",140723:"和顺县",140724:"昔阳县",140725:"寿阳县",140726:"太谷县",140727:"祁县",140728:"平遥县",140729:"灵石县",140781:"介休市",140782:"其它区",140800:"运城市",140802:"盐湖区",140821:"临猗县",140822:"万荣县",140823:"闻喜县",140824:"稷山县",140825:"新绛县",140826:"绛县",140827:"垣曲县",140828:"夏县",140829:"平陆县",140830:"芮城县",140881:"永济市",140882:"河津市",140883:"其它区",140900:"忻州市",140902:"忻府区",140921:"定襄县",140922:"五台县",140923:"代县",140924:"繁峙县",140925:"宁武县",140926:"静乐县",140927:"神池县",140928:"五寨县",140929:"岢岚县",140930:"河曲县",140931:"保德县",140932:"偏关县",140981:"原平市",140982:"其它区",141000:"临汾市",141002:"尧都区",141021:"曲沃县",141022:"翼城县",141023:"襄汾县",141024:"洪洞县",141025:"古县",141026:"安泽县",141027:"浮山县",141028:"吉县",141029:"乡宁县",141030:"大宁县",141031:"隰县",141032:"永和县",141033:"蒲县",141034:"汾西县",141081:"侯马市",141082:"霍州市",141083:"其它区",141100:"吕梁市",141102:"离石区",141121:"文水县",141122:"交城县",141123:"兴县",141124:"临县",141125:"柳林县",141126:"石楼县",141127:"岚县",141128:"方山县",141129:"中阳县",141130:"交口县",141181:"孝义市",141182:"汾阳市",141183:"其它区",150000:"内蒙古自治区",150100:"呼和浩特市",150102:"新城区",150103:"回民区",150104:"玉泉区",150105:"赛罕区",150121:"土默特左旗",150122:"托克托县",150123:"和林格尔县",150124:"清水河县",150125:"武川县",150126:"其它区",150200:"包头市",150202:"东河区",150203:"昆都仑区",150204:"青山区",150205:"石拐区",150206:"白云鄂博矿区",150207:"九原区",150221:"土默特右旗",150222:"固阳县",150223:"达尔罕茂明安联合旗",150224:"其它区",150300:"乌海市",150302:"海勃湾区",150303:"海南区",150304:"乌达区",150305:"其它区",150400:"赤峰市",150402:"红山区",150403:"元宝山区",150404:"松山区",150421:"阿鲁科尔沁旗",150422:"巴林左旗",150423:"巴林右旗",150424:"林西县",150425:"克什克腾旗",150426:"翁牛特旗",150428:"喀喇沁旗",150429:"宁城县",150430:"敖汉旗",150431:"其它区",150500:"通辽市",150502:"科尔沁区",150521:"科尔沁左翼中旗",150522:"科尔沁左翼后旗",150523:"开鲁县",150524:"库伦旗",150525:"奈曼旗",150526:"扎鲁特旗",150581:"霍林郭勒市",150582:"其它区",150600:"鄂尔多斯市",150602:"东胜区",150621:"达拉特旗",150622:"准格尔旗",150623:"鄂托克前旗",150624:"鄂托克旗",150625:"杭锦旗",150626:"乌审旗",150627:"伊金霍洛旗",150628:"其它区",150700:"呼伦贝尔市",150702:"海拉尔区",150703:"扎赉诺尔区",150721:"阿荣旗",150722:"莫力达瓦达斡尔族自治旗",150723:"鄂伦春自治旗",150724:"鄂温克族自治旗",150725:"陈巴尔虎旗",150726:"新巴尔虎左旗",150727:"新巴尔虎右旗",150781:"满洲里市",150782:"牙克石市",150783:"扎兰屯市",150784:"额尔古纳市",150785:"根河市",150786:"其它区",150800:"巴彦淖尔市",150802:"临河区",150821:"五原县",150822:"磴口县",150823:"乌拉特前旗",150824:"乌拉特中旗",150825:"乌拉特后旗",150826:"杭锦后旗",150827:"其它区",150900:"乌兰察布市",150902:"集宁区",150921:"卓资县",150922:"化德县",150923:"商都县",150924:"兴和县",150925:"凉城县",150926:"察哈尔右翼前旗",150927:"察哈尔右翼中旗",150928:"察哈尔右翼后旗",150929:"四子王旗",150981:"丰镇市",150982:"其它区",152200:"兴安盟",152201:"乌兰浩特市",152202:"阿尔山市",152221:"科尔沁右翼前旗",152222:"科尔沁右翼中旗",152223:"扎赉特旗",152224:"突泉县",152225:"其它区",152500:"锡林郭勒盟",152501:"二连浩特市",152502:"锡林浩特市",152522:"阿巴嘎旗",152523:"苏尼特左旗",152524:"苏尼特右旗",152525:"东乌珠穆沁旗",152526:"西乌珠穆沁旗",152527:"太仆寺旗",152528:"镶黄旗",152529:"正镶白旗",152530:"正蓝旗",152531:"多伦县",152532:"其它区",152900:"阿拉善盟",152921:"阿拉善左旗",152922:"阿拉善右旗",152923:"额济纳旗",152924:"其它区",210000:"辽宁省",210100:"沈阳市",210102:"和平区",210103:"沈河区",210104:"大东区",210105:"皇姑区",210106:"铁西区",210111:"苏家屯区",210112:"东陵区",210113:"新城子区",210114:"于洪区",210122:"辽中县",210123:"康平县",210124:"法库县",210181:"新民市",210184:"沈北新区",210185:"其它区",210200:"大连市",210202:"中山区",210203:"西岗区",210204:"沙河口区",210211:"甘井子区",210212:"旅顺口区",210213:"金州区",210224:"长海县",210281:"瓦房店市",210282:"普兰店市",210283:"庄河市",210298:"其它区",210300:"鞍山市",210302:"铁东区",210303:"铁西区",210304:"立山区",210311:"千山区",210321:"台安县",210323:"岫岩满族自治县",210381:"海城市",210382:"其它区",210400:"抚顺市",210402:"新抚区",210403:"东洲区",210404:"望花区",210411:"顺城区",210421:"抚顺县",210422:"新宾满族自治县",210423:"清原满族自治县",210424:"其它区",210500:"本溪市",210502:"平山区",210503:"溪湖区",210504:"明山区",210505:"南芬区",210521:"本溪满族自治县",210522:"桓仁满族自治县",210523:"其它区",210600:"丹东市",210602:"元宝区",210603:"振兴区",210604:"振安区",210624:"宽甸满族自治县",210681:"东港市",210682:"凤城市",210683:"其它区",210700:"锦州市",210702:"古塔区",210703:"凌河区",210711:"太和区",210726:"黑山县",210727:"义县",210781:"凌海市",210782:"北镇市",210783:"其它区",210800:"营口市",210802:"站前区",210803:"西市区",210804:"鲅鱼圈区",210811:"老边区",210881:"盖州市",210882:"大石桥市",210883:"其它区",210900:"阜新市",210902:"海州区",210903:"新邱区",210904:"太平区",210905:"清河门区",210911:"细河区",210921:"阜新蒙古族自治县",210922:"彰武县",210923:"其它区",211000:"辽阳市",211002:"白塔区",211003:"文圣区",211004:"宏伟区",211005:"弓长岭区",211011:"太子河区",211021:"辽阳县",211081:"灯塔市",211082:"其它区",211100:"盘锦市",211102:"双台子区",211103:"兴隆台区",211121:"大洼县",211122:"盘山县",211123:"其它区",211200:"铁岭市",211202:"银州区",211204:"清河区",211221:"铁岭县",211223:"西丰县",211224:"昌图县",211281:"调兵山市",211282:"开原市",211283:"其它区",211300:"朝阳市",211302:"双塔区",211303:"龙城区",211321:"朝阳县",211322:"建平县",211324:"喀喇沁左翼蒙古族自治县",211381:"北票市",211382:"凌源市",211383:"其它区",211400:"葫芦岛市",211402:"连山区",211403:"龙港区",211404:"南票区",211421:"绥中县",211422:"建昌县",211481:"兴城市",211482:"其它区",220000:"吉林省",220100:"长春市",220102:"南关区",220103:"宽城区",220104:"朝阳区",220105:"二道区",220106:"绿园区",220112:"双阳区",220122:"农安县",220181:"九台市",220182:"榆树市",220183:"德惠市",220188:"其它区",220200:"吉林市",220202:"昌邑区",220203:"龙潭区",220204:"船营区",220211:"丰满区",220221:"永吉县",220281:"蛟河市",220282:"桦甸市",220283:"舒兰市",220284:"磐石市",220285:"其它区",220300:"四平市",220302:"铁西区",220303:"铁东区",220322:"梨树县",220323:"伊通满族自治县",220381:"公主岭市",220382:"双辽市",220383:"其它区",220400:"辽源市",220402:"龙山区",220403:"西安区",220421:"东丰县",220422:"东辽县",220423:"其它区",220500:"通化市",220502:"东昌区",220503:"二道江区",220521:"通化县",220523:"辉南县",220524:"柳河县",220581:"梅河口市",220582:"集安市",220583:"其它区",220600:"白山市",220602:"浑江区",220621:"抚松县",220622:"靖宇县",220623:"长白朝鲜族自治县",220625:"江源区",220681:"临江市",220682:"其它区",220700:"松原市",220702:"宁江区",220721:"前郭尔罗斯蒙古族自治县",220722:"长岭县",220723:"乾安县",220724:"扶余市",220725:"其它区",220800:"白城市",220802:"洮北区",220821:"镇赉县",220822:"通榆县",220881:"洮南市",220882:"大安市",220883:"其它区",222400:"延边朝鲜族自治州",222401:"延吉市",222402:"图们市",222403:"敦化市",222404:"珲春市",222405:"龙井市",222406:"和龙市",222424:"汪清县",222426:"安图县",222427:"其它区",230000:"黑龙江省",230100:"哈尔滨市",230102:"道里区",230103:"南岗区",230104:"道外区",230106:"香坊区",230108:"平房区",230109:"松北区",230111:"呼兰区",230123:"依兰县",230124:"方正县",230125:"宾县",230126:"巴彦县",230127:"木兰县",230128:"通河县",230129:"延寿县",230181:"阿城区",230182:"双城市",230183:"尚志市",230184:"五常市",230186:"其它区",230200:"齐齐哈尔市",230202:"龙沙区",230203:"建华区",230204:"铁锋区",230205:"昂昂溪区",230206:"富拉尔基区",230207:"碾子山区",230208:"梅里斯达斡尔族区",230221:"龙江县",230223:"依安县",230224:"泰来县",230225:"甘南县",230227:"富裕县",230229:"克山县",230230:"克东县",230231:"拜泉县",230281:"讷河市",230282:"其它区",230300:"鸡西市",230302:"鸡冠区",230303:"恒山区",230304:"滴道区",230305:"梨树区",230306:"城子河区",230307:"麻山区",230321:"鸡东县",230381:"虎林市",230382:"密山市",230383:"其它区",230400:"鹤岗市",230402:"向阳区",230403:"工农区",230404:"南山区",230405:"兴安区",230406:"东山区",230407:"兴山区",230421:"萝北县",230422:"绥滨县",230423:"其它区",230500:"双鸭山市",230502:"尖山区",230503:"岭东区",230505:"四方台区",230506:"宝山区",230521:"集贤县",230522:"友谊县",230523:"宝清县",230524:"饶河县",230525:"其它区",230600:"大庆市",230602:"萨尔图区",230603:"龙凤区",230604:"让胡路区",230605:"红岗区",230606:"大同区",230621:"肇州县",230622:"肇源县",230623:"林甸县",230624:"杜尔伯特蒙古族自治县",230625:"其它区",230700:"伊春市",230702:"伊春区",230703:"南岔区",230704:"友好区",230705:"西林区",230706:"翠峦区",230707:"新青区",230708:"美溪区",230709:"金山屯区",230710:"五营区",230711:"乌马河区",230712:"汤旺河区",230713:"带岭区",230714:"乌伊岭区",230715:"红星区",230716:"上甘岭区",230722:"嘉荫县",230781:"铁力市",230782:"其它区",230800:"佳木斯市",230803:"向阳区",230804:"前进区",230805:"东风区",230811:"郊区",230822:"桦南县",230826:"桦川县",230828:"汤原县",230833:"抚远县",230881:"同江市",230882:"富锦市",230883:"其它区",230900:"七台河市",230902:"新兴区",230903:"桃山区",230904:"茄子河区",230921:"勃利县",230922:"其它区",231000:"牡丹江市",231002:"东安区",231003:"阳明区",231004:"爱民区",231005:"西安区",231024:"东宁县",231025:"林口县",231081:"绥芬河市",231083:"海林市",231084:"宁安市",231085:"穆棱市",231086:"其它区",231100:"黑河市",231102:"爱辉区",231121:"嫩江县",231123:"逊克县",231124:"孙吴县",231181:"北安市",231182:"五大连池市",231183:"其它区",231200:"绥化市",231202:"北林区",231221:"望奎县",231222:"兰西县",231223:"青冈县",231224:"庆安县",231225:"明水县",231226:"绥棱县",231281:"安达市",231282:"肇东市",231283:"海伦市",231284:"其它区",232700:"大兴安岭地区",232702:"松岭区",232703:"新林区",232704:"呼中区",232721:"呼玛县",232722:"塔河县",232723:"漠河县",232724:"加格达奇区",232725:"其它区",310000:"上海",310100:"上海市",310101:"黄浦区",310104:"徐汇区",310105:"长宁区",310106:"静安区",310107:"普陀区",310108:"闸北区",310109:"虹口区",310110:"杨浦区",310112:"闵行区",310113:"宝山区",310114:"嘉定区",310115:"浦东新区",310116:"金山区",310117:"松江区",310118:"青浦区",310120:"奉贤区",310230:"崇明县",310231:"其它区",320000:"江苏省",320100:"南京市",320102:"玄武区",320104:"秦淮区",320105:"建邺区",320106:"鼓楼区",320111:"浦口区",320113:"栖霞区",320114:"雨花台区",320115:"江宁区",320116:"六合区",320124:"溧水区",320125:"高淳区",320126:"其它区",320200:"无锡市",320202:"崇安区",320203:"南长区",320204:"北塘区",320205:"锡山区",320206:"惠山区",320211:"滨湖区",320281:"江阴市",320282:"宜兴市",320297:"其它区",320300:"徐州市",320302:"鼓楼区",320303:"云龙区",320305:"贾汪区",320311:"泉山区",320321:"丰县",320322:"沛县",320323:"铜山区",320324:"睢宁县",320381:"新沂市",320382:"邳州市",320383:"其它区",320400:"常州市",320402:"天宁区",320404:"钟楼区",320405:"戚墅堰区",320411:"新北区",320412:"武进区",320481:"溧阳市",320482:"金坛市",320483:"其它区",320500:"苏州市",320505:"虎丘区",320506:"吴中区",320507:"相城区",320508:"姑苏区",320581:"常熟市",320582:"张家港市",320583:"昆山市",320584:"吴江区",320585:"太仓市",320596:"其它区",320600:"南通市",320602:"崇川区",320611:"港闸区",320612:"通州区",320621:"海安县",320623:"如东县",320681:"启东市",320682:"如皋市",320684:"海门市",320694:"其它区",320700:"连云港市",320703:"连云区",320705:"新浦区",320706:"海州区",320721:"赣榆县",320722:"东海县",320723:"灌云县",320724:"灌南县",320725:"其它区",320800:"淮安市",320802:"清河区",320803:"淮安区",320804:"淮阴区",320811:"清浦区",320826:"涟水县",320829:"洪泽县",320830:"盱眙县",320831:"金湖县",320832:"其它区",320900:"盐城市",320902:"亭湖区",320903:"盐都区",320921:"响水县",320922:"滨海县",320923:"阜宁县",320924:"射阳县",320925:"建湖县",320981:"东台市",320982:"大丰市",320983:"其它区",321000:"扬州市",321002:"广陵区",321003:"邗江区",321023:"宝应县",321081:"仪征市",321084:"高邮市",321088:"江都区",321093:"其它区",321100:"镇江市",321102:"京口区",321111:"润州区",321112:"丹徒区",321181:"丹阳市",321182:"扬中市",321183:"句容市",321184:"其它区",321200:"泰州市",321202:"海陵区",321203:"高港区",321281:"兴化市",321282:"靖江市",321283:"泰兴市",321284:"姜堰区",321285:"其它区",321300:"宿迁市",321302:"宿城区",321311:"宿豫区",321322:"沭阳县",321323:"泗阳县",321324:"泗洪县",321325:"其它区",330000:"浙江省",330100:"杭州市",330102:"上城区",330103:"下城区",330104:"江干区",330105:"拱墅区",330106:"西湖区",330108:"滨江区",330109:"萧山区",330110:"余杭区",330122:"桐庐县",330127:"淳安县",330182:"建德市",330183:"富阳市",330185:"临安市",330186:"其它区",330200:"宁波市",330203:"海曙区",330204:"江东区",330205:"江北区",330206:"北仑区",330211:"镇海区",330212:"鄞州区",330225:"象山县",330226:"宁海县",330281:"余姚市",330282:"慈溪市",330283:"奉化市",330284:"其它区",330300:"温州市",330302:"鹿城区",330303:"龙湾区",330304:"瓯海区",330322:"洞头县",330324:"永嘉县",330326:"平阳县",330327:"苍南县",330328:"文成县",330329:"泰顺县",330381:"瑞安市",330382:"乐清市",330383:"其它区",330400:"嘉兴市",330402:"南湖区",330411:"秀洲区",330421:"嘉善县",330424:"海盐县",330481:"海宁市",330482:"平湖市",330483:"桐乡市",330484:"其它区",330500:"湖州市",330502:"吴兴区",330503:"南浔区",330521:"德清县",330522:"长兴县",330523:"安吉县",330524:"其它区",330600:"绍兴市",330602:"越城区",330621:"绍兴县",330624:"新昌县",330681:"诸暨市",330682:"上虞市",330683:"嵊州市",330684:"其它区",330700:"金华市",330702:"婺城区",330703:"金东区",330723:"武义县",330726:"浦江县",330727:"磐安县",330781:"兰溪市",330782:"义乌市",330783:"东阳市",330784:"永康市",330785:"其它区",330800:"衢州市",330802:"柯城区",330803:"衢江区",330822:"常山县",330824:"开化县",330825:"龙游县",330881:"江山市",330882:"其它区",330900:"舟山市",330902:"定海区",330903:"普陀区",330921:"岱山县",330922:"嵊泗县",330923:"其它区",331000:"台州市",331002:"椒江区",331003:"黄岩区",331004:"路桥区",331021:"玉环县",331022:"三门县",331023:"天台县",331024:"仙居县",331081:"温岭市",331082:"临海市",331083:"其它区",331100:"丽水市",331102:"莲都区",331121:"青田县",331122:"缙云县",331123:"遂昌县",331124:"松阳县",331125:"云和县",331126:"庆元县",331127:"景宁畲族自治县",331181:"龙泉市",331182:"其它区",340000:"安徽省",340100:"合肥市",340102:"瑶海区",340103:"庐阳区",340104:"蜀山区",340111:"包河区",340121:"长丰县",340122:"肥东县",340123:"肥西县",340192:"其它区",340200:"芜湖市",340202:"镜湖区",340203:"弋江区",340207:"鸠江区",340208:"三山区",340221:"芜湖县",340222:"繁昌县",340223:"南陵县",340224:"其它区",340300:"蚌埠市",340302:"龙子湖区",340303:"蚌山区",340304:"禹会区",340311:"淮上区",340321:"怀远县",340322:"五河县",340323:"固镇县",340324:"其它区",340400:"淮南市",340402:"大通区",340403:"田家庵区",340404:"谢家集区",340405:"八公山区",340406:"潘集区",340421:"凤台县",340422:"其它区",340500:"马鞍山市",340503:"花山区",340504:"雨山区",340506:"博望区",340521:"当涂县",340522:"其它区",340600:"淮北市",340602:"杜集区",340603:"相山区",340604:"烈山区",340621:"濉溪县",340622:"其它区",340700:"铜陵市",340702:"铜官山区",340703:"狮子山区",340711:"郊区",340721:"铜陵县",340722:"其它区",340800:"安庆市",340802:"迎江区",340803:"大观区",340811:"宜秀区",340822:"怀宁县",340823:"枞阳县",340824:"潜山县",340825:"太湖县",340826:"宿松县",340827:"望江县",340828:"岳西县",340881:"桐城市",340882:"其它区",341000:"黄山市",341002:"屯溪区",341003:"黄山区",341004:"徽州区",341021:"歙县",341022:"休宁县",341023:"黟县",341024:"祁门县",341025:"其它区",341100:"滁州市",341102:"琅琊区",341103:"南谯区",341122:"来安县",341124:"全椒县",341125:"定远县",341126:"凤阳县",341181:"天长市",341182:"明光市",341183:"其它区",341200:"阜阳市",341202:"颍州区",341203:"颍东区",341204:"颍泉区",341221:"临泉县",341222:"太和县",341225:"阜南县",341226:"颍上县",341282:"界首市",341283:"其它区",341300:"宿州市",341302:"埇桥区",341321:"砀山县",341322:"萧县",341323:"灵璧县",341324:"泗县",341325:"其它区",341400:"巢湖市",341421:"庐江县",341422:"无为县",341423:"含山县",341424:"和县",341500:"六安市",341502:"金安区",341503:"裕安区",341521:"寿县",341522:"霍邱县",341523:"舒城县",341524:"金寨县",341525:"霍山县",341526:"其它区",341600:"亳州市",341602:"谯城区",341621:"涡阳县",341622:"蒙城县",341623:"利辛县",341624:"其它区",341700:"池州市",341702:"贵池区",341721:"东至县",341722:"石台县",341723:"青阳县",341724:"其它区",341800:"宣城市",341802:"宣州区",341821:"郎溪县",341822:"广德县",341823:"泾县",341824:"绩溪县",341825:"旌德县",341881:"宁国市",341882:"其它区",350000:"福建省",350100:"福州市",350102:"鼓楼区",350103:"台江区",350104:"仓山区",350105:"马尾区",350111:"晋安区",350121:"闽侯县",350122:"连江县",350123:"罗源县",350124:"闽清县",350125:"永泰县",350128:"平潭县",350181:"福清市",350182:"长乐市",350183:"其它区",350200:"厦门市",350203:"思明区",350205:"海沧区",350206:"湖里区",350211:"集美区",350212:"同安区",350213:"翔安区",350214:"其它区",350300:"莆田市",350302:"城厢区",350303:"涵江区",350304:"荔城区",350305:"秀屿区",350322:"仙游县",350323:"其它区",350400:"三明市",350402:"梅列区",350403:"三元区",350421:"明溪县",350423:"清流县",350424:"宁化县",350425:"大田县",350426:"尤溪县",350427:"沙县",350428:"将乐县",350429:"泰宁县",350430:"建宁县",350481:"永安市",350482:"其它区",350500:"泉州市",350502:"鲤城区",350503:"丰泽区",350504:"洛江区",350505:"泉港区",350521:"惠安县",350524:"安溪县",350525:"永春县",350526:"德化县",350527:"金门县",350581:"石狮市",350582:"晋江市",350583:"南安市",350584:"其它区",350600:"漳州市",350602:"芗城区",350603:"龙文区",350622:"云霄县",350623:"漳浦县",350624:"诏安县",350625:"长泰县",350626:"东山县",350627:"南靖县",350628:"平和县",350629:"华安县",350681:"龙海市",350682:"其它区",350700:"南平市",350702:"延平区",350721:"顺昌县",350722:"浦城县",350723:"光泽县",350724:"松溪县",350725:"政和县",350781:"邵武市",350782:"武夷山市",350783:"建瓯市",350784:"建阳市",350785:"其它区",350800:"龙岩市",350802:"新罗区",350821:"长汀县",350822:"永定县",350823:"上杭县",350824:"武平县",350825:"连城县",350881:"漳平市",350882:"其它区",350900:"宁德市",350902:"蕉城区",350921:"霞浦县",350922:"古田县",350923:"屏南县",350924:"寿宁县",350925:"周宁县",350926:"柘荣县",350981:"福安市",350982:"福鼎市",350983:"其它区",360000:"江西省",360100:"南昌市",360102:"东湖区",360103:"西湖区",360104:"青云谱区",360105:"湾里区",360111:"青山湖区",360121:"南昌县",360122:"新建县",360123:"安义县",360124:"进贤县",360128:"其它区",360200:"景德镇市",360202:"昌江区",360203:"珠山区",360222:"浮梁县",360281:"乐平市",360282:"其它区",360300:"萍乡市",360302:"安源区",360313:"湘东区",360321:"莲花县",360322:"上栗县",360323:"芦溪县",360324:"其它区",360400:"九江市",360402:"庐山区",360403:"浔阳区",360421:"九江县",360423:"武宁县",360424:"修水县",360425:"永修县",360426:"德安县",360427:"星子县",360428:"都昌县",360429:"湖口县",360430:"彭泽县",360481:"瑞昌市",360482:"其它区",360483:"共青城市",360500:"新余市",360502:"渝水区",360521:"分宜县",360522:"其它区",360600:"鹰潭市",360602:"月湖区",360622:"余江县",360681:"贵溪市",360682:"其它区",360700:"赣州市",360702:"章贡区",360721:"赣县",360722:"信丰县",360723:"大余县",360724:"上犹县",360725:"崇义县",360726:"安远县",360727:"龙南县",360728:"定南县",360729:"全南县",360730:"宁都县",360731:"于都县",360732:"兴国县",360733:"会昌县",360734:"寻乌县",360735:"石城县",360781:"瑞金市",360782:"南康市",360783:"其它区",360800:"吉安市",360802:"吉州区",360803:"青原区",360821:"吉安县",360822:"吉水县",360823:"峡江县",360824:"新干县",360825:"永丰县",360826:"泰和县",360827:"遂川县",360828:"万安县",360829:"安福县",360830:"永新县",360881:"井冈山市",360882:"其它区",360900:"宜春市",360902:"袁州区",360921:"奉新县",360922:"万载县",360923:"上高县",360924:"宜丰县",360925:"靖安县",360926:"铜鼓县",360981:"丰城市",360982:"樟树市",360983:"高安市",360984:"其它区",361000:"抚州市",361002:"临川区",361021:"南城县",361022:"黎川县",361023:"南丰县",361024:"崇仁县",361025:"乐安县",361026:"宜黄县",361027:"金溪县",361028:"资溪县",361029:"东乡县",361030:"广昌县",361031:"其它区",361100:"上饶市",361102:"信州区",361121:"上饶县",361122:"广丰县",361123:"玉山县",361124:"铅山县",361125:"横峰县",361126:"弋阳县",361127:"余干县",361128:"鄱阳县",361129:"万年县",361130:"婺源县",361181:"德兴市",361182:"其它区",370000:"山东省",370100:"济南市",370102:"历下区",370103:"市中区",370104:"槐荫区",370105:"天桥区",370112:"历城区",370113:"长清区",370124:"平阴县",370125:"济阳县",370126:"商河县",370181:"章丘市",370182:"其它区",370200:"青岛市",370202:"市南区",370203:"市北区",370211:"黄岛区",370212:"崂山区",370213:"李沧区",370214:"城阳区",370281:"胶州市",370282:"即墨市",370283:"平度市",370285:"莱西市",370286:"其它区",370300:"淄博市",370302:"淄川区",370303:"张店区",370304:"博山区",370305:"临淄区",370306:"周村区",370321:"桓台县",370322:"高青县",370323:"沂源县",370324:"其它区",370400:"枣庄市",370402:"市中区",370403:"薛城区",370404:"峄城区",370405:"台儿庄区",370406:"山亭区",370481:"滕州市",370482:"其它区",370500:"东营市",370502:"东营区",370503:"河口区",370521:"垦利县",370522:"利津县",370523:"广饶县",370591:"其它区",370600:"烟台市",370602:"芝罘区",370611:"福山区",370612:"牟平区",370613:"莱山区",370634:"长岛县",370681:"龙口市",370682:"莱阳市",370683:"莱州市",370684:"蓬莱市",370685:"招远市",370686:"栖霞市",370687:"海阳市",370688:"其它区",370700:"潍坊市",370702:"潍城区",370703:"寒亭区",370704:"坊子区",370705:"奎文区",370724:"临朐县",370725:"昌乐县",370781:"青州市",370782:"诸城市",370783:"寿光市",370784:"安丘市",370785:"高密市",370786:"昌邑市",370787:"其它区",370800:"济宁市",370802:"市中区",370811:"任城区",370826:"微山县",370827:"鱼台县",370828:"金乡县",370829:"嘉祥县",370830:"汶上县",370831:"泗水县",370832:"梁山县",370881:"曲阜市",370882:"兖州市",370883:"邹城市",370884:"其它区",370900:"泰安市",370902:"泰山区",370903:"岱岳区",370921:"宁阳县",370923:"东平县",370982:"新泰市",370983:"肥城市",370984:"其它区",371000:"威海市",371002:"环翠区",371081:"文登市",371082:"荣成市",371083:"乳山市",371084:"其它区",371100:"日照市",371102:"东港区",371103:"岚山区",371121:"五莲县",371122:"莒县",371123:"其它区",371200:"莱芜市",371202:"莱城区",371203:"钢城区",371204:"其它区",371300:"临沂市",371302:"兰山区",371311:"罗庄区",371312:"河东区",371321:"沂南县",371322:"郯城县",371323:"沂水县",371324:"苍山县",371325:"费县",371326:"平邑县",371327:"莒南县",371328:"蒙阴县",371329:"临沭县",371330:"其它区",371400:"德州市",371402:"德城区",371421:"陵县",371422:"宁津县",371423:"庆云县",371424:"临邑县",371425:"齐河县",371426:"平原县",371427:"夏津县",371428:"武城县",371481:"乐陵市",371482:"禹城市",371483:"其它区",371500:"聊城市",371502:"东昌府区",371521:"阳谷县",371522:"莘县",371523:"茌平县",371524:"东阿县",371525:"冠县",371526:"高唐县",371581:"临清市",371582:"其它区",371600:"滨州市",371602:"滨城区",371621:"惠民县",371622:"阳信县",371623:"无棣县",371624:"沾化县",371625:"博兴县",371626:"邹平县",371627:"其它区",371700:"菏泽市",371702:"牡丹区",371721:"曹县",371722:"单县",371723:"成武县",371724:"巨野县",371725:"郓城县",371726:"鄄城县",371727:"定陶县",371728:"东明县",371729:"其它区",410000:"河南省",410100:"郑州市",410102:"中原区",410103:"二七区",410104:"管城回族区",410105:"金水区",410106:"上街区",410108:"惠济区",410122:"中牟县",410181:"巩义市",410182:"荥阳市",410183:"新密市",410184:"新郑市",410185:"登封市",410188:"其它区",410200:"开封市",410202:"龙亭区",410203:"顺河回族区",410204:"鼓楼区",410205:"禹王台区",410211:"金明区",410221:"杞县",410222:"通许县",410223:"尉氏县",410224:"开封县",410225:"兰考县",410226:"其它区",410300:"洛阳市",410302:"老城区",410303:"西工区",410304:"瀍河回族区",410305:"涧西区",410306:"吉利区",410307:"洛龙区",410322:"孟津县",410323:"新安县",410324:"栾川县",410325:"嵩县",410326:"汝阳县",410327:"宜阳县",410328:"洛宁县",410329:"伊川县",410381:"偃师市",410400:"平顶山市",410402:"新华区",410403:"卫东区",410404:"石龙区",410411:"湛河区",410421:"宝丰县",410422:"叶县",410423:"鲁山县",410425:"郏县",410481:"舞钢市",410482:"汝州市",410483:"其它区",410500:"安阳市",410502:"文峰区",410503:"北关区",410505:"殷都区",410506:"龙安区",410522:"安阳县",410523:"汤阴县",410526:"滑县",410527:"内黄县",410581:"林州市",410582:"其它区",410600:"鹤壁市",410602:"鹤山区",410603:"山城区",410611:"淇滨区",410621:"浚县",410622:"淇县",410623:"其它区",410700:"新乡市",410702:"红旗区",410703:"卫滨区",410704:"凤泉区",410711:"牧野区",410721:"新乡县",410724:"获嘉县",410725:"原阳县",410726:"延津县",410727:"封丘县",410728:"长垣县",410781:"卫辉市",410782:"辉县市",410783:"其它区",410800:"焦作市",410802:"解放区",410803:"中站区",410804:"马村区",410811:"山阳区",410821:"修武县",410822:"博爱县",410823:"武陟县",410825:"温县",410881:"济源市",410882:"沁阳市",410883:"孟州市",410884:"其它区",410900:"濮阳市",410902:"华龙区",410922:"清丰县",410923:"南乐县",410926:"范县",410927:"台前县",410928:"濮阳县",410929:"其它区",411000:"许昌市",411002:"魏都区",411023:"许昌县",411024:"鄢陵县",411025:"襄城县",411081:"禹州市",411082:"长葛市",411083:"其它区",411100:"漯河市",411102:"源汇区",411103:"郾城区",411104:"召陵区",411121:"舞阳县",411122:"临颍县",411123:"其它区",411200:"三门峡市",411202:"湖滨区",411221:"渑池县",411222:"陕县",411224:"卢氏县",411281:"义马市",411282:"灵宝市",411283:"其它区",411300:"南阳市",411302:"宛城区",411303:"卧龙区",411321:"南召县",411322:"方城县",411323:"西峡县",411324:"镇平县",411325:"内乡县",411326:"淅川县",411327:"社旗县",411328:"唐河县",411329:"新野县",411330:"桐柏县",411381:"邓州市",411382:"其它区",411400:"商丘市",411402:"梁园区",411403:"睢阳区",411421:"民权县",411422:"睢县",411423:"宁陵县",411424:"柘城县",411425:"虞城县",411426:"夏邑县",411481:"永城市",411482:"其它区",411500:"信阳市",411502:"浉河区",411503:"平桥区",411521:"罗山县",411522:"光山县",411523:"新县",411524:"商城县",411525:"固始县",411526:"潢川县",411527:"淮滨县",411528:"息县",411529:"其它区",411600:"周口市",411602:"川汇区",411621:"扶沟县",411622:"西华县",411623:"商水县",411624:"沈丘县",411625:"郸城县",411626:"淮阳县",411627:"太康县",411628:"鹿邑县",411681:"项城市",411682:"其它区",411700:"驻马店市",411702:"驿城区",411721:"西平县",411722:"上蔡县",411723:"平舆县",411724:"正阳县",411725:"确山县",411726:"泌阳县",411727:"汝南县",411728:"遂平县",411729:"新蔡县",411730:"其它区",420000:"湖北省",420100:"武汉市",420102:"江岸区",420103:"江汉区",420104:"硚口区",420105:"汉阳区",420106:"武昌区",420107:"青山区",420111:"洪山区",420112:"东西湖区",420113:"汉南区",420114:"蔡甸区",420115:"江夏区",420116:"黄陂区",420117:"新洲区",420118:"其它区",420200:"黄石市",420202:"黄石港区",420203:"西塞山区",420204:"下陆区",420205:"铁山区",420222:"阳新县",420281:"大冶市",420282:"其它区",420300:"十堰市",420302:"茅箭区",420303:"张湾区",420321:"郧县",420322:"郧西县",420323:"竹山县",420324:"竹溪县",420325:"房县",420381:"丹江口市",420383:"其它区",420500:"宜昌市",420502:"西陵区",420503:"伍家岗区",420504:"点军区",420505:"猇亭区",420506:"夷陵区",420525:"远安县",420526:"兴山县",420527:"秭归县",420528:"长阳土家族自治县",420529:"五峰土家族自治县",420581:"宜都市",420582:"当阳市",420583:"枝江市",420584:"其它区",420600:"襄阳市",420602:"襄城区",420606:"樊城区",420607:"襄州区",420624:"南漳县",420625:"谷城县",420626:"保康县",420682:"老河口市",420683:"枣阳市",420684:"宜城市",420685:"其它区",420700:"鄂州市",420702:"梁子湖区",420703:"华容区",420704:"鄂城区",420705:"其它区",420800:"荆门市",420802:"东宝区",420804:"掇刀区",420821:"京山县",420822:"沙洋县",420881:"钟祥市",420882:"其它区",420900:"孝感市",420902:"孝南区",420921:"孝昌县",420922:"大悟县",420923:"云梦县",420981:"应城市",420982:"安陆市",420984:"汉川市",420985:"其它区",421000:"荆州市",421002:"沙市区",421003:"荆州区",421022:"公安县",421023:"监利县",421024:"江陵县",421081:"石首市",421083:"洪湖市",421087:"松滋市",421088:"其它区",421100:"黄冈市",421102:"黄州区",421121:"团风县",421122:"红安县",421123:"罗田县",421124:"英山县",421125:"浠水县",421126:"蕲春县",421127:"黄梅县",421181:"麻城市",421182:"武穴市",421183:"其它区",421200:"咸宁市",421202:"咸安区",421221:"嘉鱼县",421222:"通城县",421223:"崇阳县",421224:"通山县",421281:"赤壁市",421283:"其它区",421300:"随州市",421302:"曾都区",421321:"随县",421381:"广水市",421382:"其它区",422800:"恩施土家族苗族自治州",422801:"恩施市",422802:"利川市",422822:"建始县",422823:"巴东县",422825:"宣恩县",422826:"咸丰县",422827:"来凤县",422828:"鹤峰县",422829:"其它区",429004:"仙桃市",429005:"潜江市",429006:"天门市",429021:"神农架林区",430000:"湖南省",430100:"长沙市",430102:"芙蓉区",430103:"天心区",430104:"岳麓区",430105:"开福区",430111:"雨花区",430121:"长沙县",430122:"望城区",430124:"宁乡县",430181:"浏阳市",430182:"其它区",430200:"株洲市",430202:"荷塘区",430203:"芦淞区",430204:"石峰区",430211:"天元区",430221:"株洲县",430223:"攸县",430224:"茶陵县",430225:"炎陵县",430281:"醴陵市",430282:"其它区",430300:"湘潭市",430302:"雨湖区",430304:"岳塘区",430321:"湘潭县",430381:"湘乡市",430382:"韶山市",430383:"其它区",430400:"衡阳市",430405:"珠晖区",430406:"雁峰区",430407:"石鼓区",430408:"蒸湘区",430412:"南岳区",430421:"衡阳县",430422:"衡南县",430423:"衡山县",430424:"衡东县",430426:"祁东县",430481:"耒阳市",430482:"常宁市",430483:"其它区",430500:"邵阳市",430502:"双清区",430503:"大祥区",430511:"北塔区",430521:"邵东县",430522:"新邵县",430523:"邵阳县",430524:"隆回县",430525:"洞口县",430527:"绥宁县",430528:"新宁县",430529:"城步苗族自治县",430581:"武冈市",430582:"其它区",430600:"岳阳市",430602:"岳阳楼区",430603:"云溪区",430611:"君山区",430621:"岳阳县",430623:"华容县",430624:"湘阴县",430626:"平江县",430681:"汨罗市",430682:"临湘市",430683:"其它区",430700:"常德市",430702:"武陵区",430703:"鼎城区",430721:"安乡县",430722:"汉寿县",430723:"澧县",430724:"临澧县",430725:"桃源县",430726:"石门县",430781:"津市市",430782:"其它区",430800:"张家界市",430802:"永定区",430811:"武陵源区",430821:"慈利县",430822:"桑植县",430823:"其它区",430900:"益阳市",430902:"资阳区",430903:"赫山区",430921:"南县",430922:"桃江县",430923:"安化县",430981:"沅江市",430982:"其它区",431000:"郴州市",431002:"北湖区",431003:"苏仙区",431021:"桂阳县",431022:"宜章县",431023:"永兴县",431024:"嘉禾县",431025:"临武县",431026:"汝城县",431027:"桂东县",431028:"安仁县",431081:"资兴市",431082:"其它区",431100:"永州市",431102:"零陵区",431103:"冷水滩区",431121:"祁阳县",431122:"东安县",431123:"双牌县",431124:"道县",431125:"江永县",431126:"宁远县",431127:"蓝山县",431128:"新田县",431129:"江华瑶族自治县",431130:"其它区",431200:"怀化市",431202:"鹤城区",431221:"中方县",431222:"沅陵县",431223:"辰溪县",431224:"溆浦县",431225:"会同县",431226:"麻阳苗族自治县",431227:"新晃侗族自治县",431228:"芷江侗族自治县",431229:"靖州苗族侗族自治县",431230:"通道侗族自治县",431281:"洪江市",431282:"其它区",431300:"娄底市",431302:"娄星区",431321:"双峰县",431322:"新化县",431381:"冷水江市",431382:"涟源市",431383:"其它区",433100:"湘西土家族苗族自治州",433101:"吉首市",433122:"泸溪县",433123:"凤凰县",433124:"花垣县",433125:"保靖县",433126:"古丈县",433127:"永顺县",433130:"龙山县",433131:"其它区",440000:"广东省",440100:"广州市",440103:"荔湾区",440104:"越秀区",440105:"海珠区",440106:"天河区",440111:"白云区",440112:"黄埔区",440113:"番禺区",440114:"花都区",440115:"南沙区",440116:"萝岗区",440183:"增城市",440184:"从化市",440189:"其它区",440200:"韶关市",440203:"武江区",440204:"浈江区",440205:"曲江区",440222:"始兴县",440224:"仁化县",440229:"翁源县",440232:"乳源瑶族自治县",440233:"新丰县",440281:"乐昌市",440282:"南雄市",440283:"其它区",440300:"深圳市",440303:"罗湖区",440304:"福田区",440305:"南山区",440306:"宝安区",440307:"龙岗区",440308:"盐田区",440309:"其它区",440320:"光明新区",440321:"坪山新区",440322:"大鹏新区",440323:"龙华新区",440400:"珠海市",440402:"香洲区",440403:"斗门区",440404:"金湾区",440488:"其它区",440500:"汕头市",440507:"龙湖区",440511:"金平区",440512:"濠江区",440513:"潮阳区",440514:"潮南区",440515:"澄海区",440523:"南澳县",440524:"其它区",440600:"佛山市",440604:"禅城区",440605:"南海区",440606:"顺德区",440607:"三水区",440608:"高明区",440609:"其它区",440700:"江门市",440703:"蓬江区",440704:"江海区",440705:"新会区",440781:"台山市",440783:"开平市",440784:"鹤山市",440785:"恩平市",440786:"其它区",440800:"湛江市",440802:"赤坎区",440803:"霞山区",440804:"坡头区",440811:"麻章区",440823:"遂溪县",440825:"徐闻县",440881:"廉江市",440882:"雷州市",440883:"吴川市",440884:"其它区",440900:"茂名市",440902:"茂南区",440903:"茂港区",440923:"电白县",440981:"高州市",440982:"化州市",440983:"信宜市",440984:"其它区",441200:"肇庆市",441202:"端州区",441203:"鼎湖区",441223:"广宁县",441224:"怀集县",441225:"封开县",441226:"德庆县",441283:"高要市",441284:"四会市",441285:"其它区",441300:"惠州市",441302:"惠城区",441303:"惠阳区",441322:"博罗县",441323:"惠东县",441324:"龙门县",441325:"其它区",441400:"梅州市",441402:"梅江区",441421:"梅县",441422:"大埔县",441423:"丰顺县",441424:"五华县",441426:"平远县",441427:"蕉岭县",441481:"兴宁市",441482:"其它区",441500:"汕尾市",441502:"城区",441521:"海丰县",441523:"陆河县",441581:"陆丰市",441582:"其它区",441600:"河源市",441602:"源城区",441621:"紫金县",441622:"龙川县",441623:"连平县",441624:"和平县",441625:"东源县",441626:"其它区",441700:"阳江市",441702:"江城区",441721:"阳西县",441723:"阳东县",441781:"阳春市",441782:"其它区",441800:"清远市",441802:"清城区",441821:"佛冈县",441823:"阳山县",441825:"连山壮族瑶族自治县",441826:"连南瑶族自治县",441827:"清新区",441881:"英德市",441882:"连州市",441883:"其它区",441900:"东莞市",442000:"中山市",442101:"东沙群岛",445100:"潮州市",445102:"湘桥区",445121:"潮安区",445122:"饶平县",445186:"其它区",445200:"揭阳市",445202:"榕城区",445221:"揭东区",445222:"揭西县",445224:"惠来县",445281:"普宁市",445285:"其它区",445300:"云浮市",445302:"云城区",445321:"新兴县",445322:"郁南县",445323:"云安县",445381:"罗定市",445382:"其它区",450000:"广西壮族自治区",450100:"南宁市",450102:"兴宁区",450103:"青秀区",450105:"江南区",450107:"西乡塘区",450108:"良庆区",450109:"邕宁区",450122:"武鸣县",450123:"隆安县",450124:"马山县",450125:"上林县",450126:"宾阳县",450127:"横县",450128:"其它区",450200:"柳州市",450202:"城中区",450203:"鱼峰区",450204:"柳南区",450205:"柳北区",450221:"柳江县",450222:"柳城县",450223:"鹿寨县",450224:"融安县",450225:"融水苗族自治县",450226:"三江侗族自治县",450227:"其它区",450300:"桂林市",450302:"秀峰区",450303:"叠彩区",450304:"象山区",450305:"七星区",450311:"雁山区",450321:"阳朔县",450322:"临桂区",450323:"灵川县",450324:"全州县",450325:"兴安县",450326:"永福县",450327:"灌阳县",450328:"龙胜各族自治县",450329:"资源县",450330:"平乐县",450331:"荔浦县",450332:"恭城瑶族自治县",450333:"其它区",450400:"梧州市",450403:"万秀区",450405:"长洲区",450406:"龙圩区",450421:"苍梧县",450422:"藤县",450423:"蒙山县",450481:"岑溪市",450482:"其它区",450500:"北海市",450502:"海城区",450503:"银海区",450512:"铁山港区",450521:"合浦县",450522:"其它区",450600:"防城港市",450602:"港口区",450603:"防城区",450621:"上思县",450681:"东兴市",450682:"其它区",450700:"钦州市",450702:"钦南区",450703:"钦北区",450721:"灵山县",450722:"浦北县",450723:"其它区",450800:"贵港市",450802:"港北区",450803:"港南区",450804:"覃塘区",450821:"平南县",450881:"桂平市",450882:"其它区",450900:"玉林市",450902:"玉州区",450903:"福绵区",450921:"容县",450922:"陆川县",450923:"博白县",450924:"兴业县",450981:"北流市",450982:"其它区",451000:"百色市",451002:"右江区",451021:"田阳县",451022:"田东县",451023:"平果县",451024:"德保县",451025:"靖西县",451026:"那坡县",451027:"凌云县",451028:"乐业县",451029:"田林县",451030:"西林县",451031:"隆林各族自治县",451032:"其它区",451100:"贺州市",451102:"八步区",451119:"平桂管理区",451121:"昭平县",451122:"钟山县",451123:"富川瑶族自治县",451124:"其它区",451200:"河池市",451202:"金城江区",451221:"南丹县",451222:"天峨县",451223:"凤山县",451224:"东兰县",451225:"罗城仫佬族自治县",451226:"环江毛南族自治县",451227:"巴马瑶族自治县",451228:"都安瑶族自治县",451229:"大化瑶族自治县",451281:"宜州市",451282:"其它区",451300:"来宾市",451302:"兴宾区",451321:"忻城县",451322:"象州县",451323:"武宣县",451324:"金秀瑶族自治县",451381:"合山市",451382:"其它区",451400:"崇左市",451402:"江州区",451421:"扶绥县",451422:"宁明县",451423:"龙州县",451424:"大新县",451425:"天等县",451481:"凭祥市",451482:"其它区",460000:"海南省",460100:"海口市",460105:"秀英区",460106:"龙华区",460107:"琼山区",460108:"美兰区",460109:"其它区",460200:"三亚市",460300:"三沙市",460321:"西沙群岛",460322:"南沙群岛",460323:"中沙群岛的岛礁及其海域",469001:"五指山市",469002:"琼海市",469003:"儋州市",469005:"文昌市",469006:"万宁市",469007:"东方市",469025:"定安县",469026:"屯昌县",469027:"澄迈县",469028:"临高县",469030:"白沙黎族自治县",469031:"昌江黎族自治县",469033:"乐东黎族自治县",469034:"陵水黎族自治县",469035:"保亭黎族苗族自治县",469036:"琼中黎族苗族自治县",471005:"其它区",500000:"重庆",500100:"重庆市",500101:"万州区",500102:"涪陵区",500103:"渝中区",500104:"大渡口区",500105:"江北区",500106:"沙坪坝区",500107:"九龙坡区",500108:"南岸区",500109:"北碚区",500110:"万盛区",500111:"双桥区",500112:"渝北区",500113:"巴南区",500114:"黔江区",500115:"长寿区",500222:"綦江区",500223:"潼南县",500224:"铜梁县",500225:"大足区",500226:"荣昌县",500227:"璧山县",500228:"梁平县",500229:"城口县",500230:"丰都县",500231:"垫江县",500232:"武隆县",500233:"忠县",500234:"开县",500235:"云阳县",500236:"奉节县",500237:"巫山县",500238:"巫溪县",500240:"石柱土家族自治县",500241:"秀山土家族苗族自治县",500242:"酉阳土家族苗族自治县",500243:"彭水苗族土家族自治县",500381:"江津区",500382:"合川区",500383:"永川区",500384:"南川区",500385:"其它区",510000:"四川省",510100:"成都市",510104:"锦江区",510105:"青羊区",510106:"金牛区",510107:"武侯区",510108:"成华区",510112:"龙泉驿区",510113:"青白江区",510114:"新都区",510115:"温江区",510121:"金堂县",510122:"双流县",510124:"郫县",510129:"大邑县",510131:"蒲江县",510132:"新津县",510181:"都江堰市",510182:"彭州市",510183:"邛崃市",510184:"崇州市",510185:"其它区",510300:"自贡市",510302:"自流井区",510303:"贡井区",510304:"大安区",510311:"沿滩区",510321:"荣县",510322:"富顺县",510323:"其它区",510400:"攀枝花市",510402:"东区",510403:"西区",510411:"仁和区",510421:"米易县",510422:"盐边县",510423:"其它区",510500:"泸州市",510502:"江阳区",510503:"纳溪区",510504:"龙马潭区",510521:"泸县",510522:"合江县",510524:"叙永县",510525:"古蔺县",510526:"其它区",510600:"德阳市",510603:"旌阳区",510623:"中江县",510626:"罗江县",510681:"广汉市",510682:"什邡市",510683:"绵竹市",510684:"其它区",510700:"绵阳市",510703:"涪城区",510704:"游仙区",510722:"三台县",510723:"盐亭县",510724:"安县",510725:"梓潼县",510726:"北川羌族自治县",510727:"平武县",510781:"江油市",510782:"其它区",510800:"广元市",510802:"利州区",510811:"昭化区",510812:"朝天区",510821:"旺苍县",510822:"青川县",510823:"剑阁县",510824:"苍溪县",510825:"其它区",510900:"遂宁市",510903:"船山区",510904:"安居区",510921:"蓬溪县",510922:"射洪县",510923:"大英县",510924:"其它区",511000:"内江市",511002:"市中区",511011:"东兴区",511024:"威远县",511025:"资中县",511028:"隆昌县",511029:"其它区",511100:"乐山市",511102:"市中区",511111:"沙湾区",511112:"五通桥区",511113:"金口河区",511123:"犍为县",511124:"井研县",511126:"夹江县",511129:"沐川县",511132:"峨边彝族自治县",511133:"马边彝族自治县",511181:"峨眉山市",511182:"其它区",511300:"南充市",511302:"顺庆区",511303:"高坪区",511304:"嘉陵区",511321:"南部县",511322:"营山县",511323:"蓬安县",511324:"仪陇县",511325:"西充县",511381:"阆中市",511382:"其它区",511400:"眉山市",511402:"东坡区",511421:"仁寿县",511422:"彭山县",511423:"洪雅县",511424:"丹棱县",511425:"青神县",511426:"其它区",511500:"宜宾市",511502:"翠屏区",511521:"宜宾县",511522:"南溪区",511523:"江安县",511524:"长宁县",511525:"高县",511526:"珙县",511527:"筠连县",511528:"兴文县",511529:"屏山县",511530:"其它区",511600:"广安市",511602:"广安区",511603:"前锋区",511621:"岳池县",511622:"武胜县",511623:"邻水县",511681:"华蓥市",511683:"其它区",511700:"达州市",511702:"通川区",511721:"达川区",511722:"宣汉县",511723:"开江县",511724:"大竹县",511725:"渠县",511781:"万源市",511782:"其它区",511800:"雅安市",511802:"雨城区",511821:"名山区",511822:"荥经县",511823:"汉源县",511824:"石棉县",511825:"天全县",511826:"芦山县",511827:"宝兴县",511828:"其它区",511900:"巴中市",511902:"巴州区",511903:"恩阳区",511921:"通江县",511922:"南江县",511923:"平昌县",511924:"其它区",512000:"资阳市",512002:"雁江区",512021:"安岳县",512022:"乐至县",512081:"简阳市",512082:"其它区",513200:"阿坝藏族羌族自治州",513221:"汶川县",513222:"理县",513223:"茂县",513224:"松潘县",513225:"九寨沟县",513226:"金川县",513227:"小金县",513228:"黑水县",513229:"马尔康县",513230:"壤塘县",513231:"阿坝县",513232:"若尔盖县",513233:"红原县",513234:"其它区",513300:"甘孜藏族自治州",513321:"康定县",513322:"泸定县",513323:"丹巴县",513324:"九龙县",513325:"雅江县",513326:"道孚县",513327:"炉霍县",513328:"甘孜县",513329:"新龙县",513330:"德格县",513331:"白玉县",513332:"石渠县",513333:"色达县",513334:"理塘县",513335:"巴塘县",513336:"乡城县",513337:"稻城县",513338:"得荣县",513339:"其它区",513400:"凉山彝族自治州",513401:"西昌市",513422:"木里藏族自治县",513423:"盐源县",513424:"德昌县",513425:"会理县",513426:"会东县",513427:"宁南县",513428:"普格县",513429:"布拖县",513430:"金阳县",513431:"昭觉县",513432:"喜德县",513433:"冕宁县",513434:"越西县",513435:"甘洛县",513436:"美姑县",513437:"雷波县",513438:"其它区",520000:"贵州省",520100:"贵阳市",520102:"南明区",520103:"云岩区",520111:"花溪区",520112:"乌当区",520113:"白云区",520121:"开阳县",520122:"息烽县",520123:"修文县",520151:"观山湖区",520181:"清镇市",520182:"其它区",520200:"六盘水市",520201:"钟山区",520203:"六枝特区",520221:"水城县",520222:"盘县",520223:"其它区",520300:"遵义市",520302:"红花岗区",520303:"汇川区",520321:"遵义县",520322:"桐梓县",520323:"绥阳县",520324:"正安县",520325:"道真仡佬族苗族自治县",520326:"务川仡佬族苗族自治县",520327:"凤冈县",520328:"湄潭县",520329:"余庆县",520330:"习水县",520381:"赤水市",520382:"仁怀市",520383:"其它区",520400:"安顺市",520402:"西秀区",520421:"平坝县",520422:"普定县",520423:"镇宁布依族苗族自治县",520424:"关岭布依族苗族自治县",520425:"紫云苗族布依族自治县",520426:"其它区",522200:"铜仁市",522201:"碧江区",522222:"江口县",522223:"玉屏侗族自治县",522224:"石阡县",522225:"思南县",522226:"印江土家族苗族自治县",522227:"德江县",522228:"沿河土家族自治县",522229:"松桃苗族自治县",522230:"万山区",522231:"其它区",522300:"黔西南布依族苗族自治州",522301:"兴义市",522322:"兴仁县",522323:"普安县",522324:"晴隆县",522325:"贞丰县",522326:"望谟县",522327:"册亨县",522328:"安龙县",522329:"其它区",522400:"毕节市",522401:"七星关区",522422:"大方县",522423:"黔西县",522424:"金沙县",522425:"织金县",522426:"纳雍县",522427:"威宁彝族回族苗族自治县",522428:"赫章县",522429:"其它区",522600:"黔东南苗族侗族自治州",522601:"凯里市",522622:"黄平县",522623:"施秉县",522624:"三穗县",522625:"镇远县",522626:"岑巩县",522627:"天柱县",522628:"锦屏县",522629:"剑河县",522630:"台江县",522631:"黎平县",522632:"榕江县",522633:"从江县",522634:"雷山县",522635:"麻江县",522636:"丹寨县",522637:"其它区",522700:"黔南布依族苗族自治州",522701:"都匀市",522702:"福泉市",522722:"荔波县",522723:"贵定县",522725:"瓮安县",522726:"独山县",522727:"平塘县",522728:"罗甸县",522729:"长顺县",522730:"龙里县",522731:"惠水县",522732:"三都水族自治县",522733:"其它区",530000:"云南省",530100:"昆明市",530102:"五华区",530103:"盘龙区",530111:"官渡区",530112:"西山区",530113:"东川区",530121:"呈贡区",530122:"晋宁县",530124:"富民县",530125:"宜良县",530126:"石林彝族自治县",530127:"嵩明县",530128:"禄劝彝族苗族自治县",530129:"寻甸回族彝族自治县",530181:"安宁市",530182:"其它区",530300:"曲靖市",530302:"麒麟区",530321:"马龙县",530322:"陆良县",530323:"师宗县",530324:"罗平县",530325:"富源县",530326:"会泽县",530328:"沾益县",530381:"宣威市",530382:"其它区",530400:"玉溪市",530402:"红塔区",530421:"江川县",530422:"澄江县",530423:"通海县",530424:"华宁县",530425:"易门县",530426:"峨山彝族自治县",530427:"新平彝族傣族自治县",530428:"元江哈尼族彝族傣族自治县",530429:"其它区",530500:"保山市",530502:"隆阳区",530521:"施甸县",530522:"腾冲县",530523:"龙陵县",530524:"昌宁县",530525:"其它区",530600:"昭通市",530602:"昭阳区",530621:"鲁甸县",530622:"巧家县",530623:"盐津县",530624:"大关县",530625:"永善县",530626:"绥江县",530627:"镇雄县",530628:"彝良县",530629:"威信县",530630:"水富县",530631:"其它区",530700:"丽江市",530702:"古城区",530721:"玉龙纳西族自治县",530722:"永胜县",530723:"华坪县",530724:"宁蒗彝族自治县",530725:"其它区",530800:"普洱市",530802:"思茅区",530821:"宁洱哈尼族彝族自治县",530822:"墨江哈尼族自治县",530823:"景东彝族自治县",530824:"景谷傣族彝族自治县",530825:"镇沅彝族哈尼族拉祜族自治县",530826:"江城哈尼族彝族自治县",530827:"孟连傣族拉祜族佤族自治县",530828:"澜沧拉祜族自治县",530829:"西盟佤族自治县",530830:"其它区",530900:"临沧市",530902:"临翔区",530921:"凤庆县",530922:"云县",530923:"永德县",530924:"镇康县",530925:"双江拉祜族佤族布朗族傣族自治县",530926:"耿马傣族佤族自治县",530927:"沧源佤族自治县",530928:"其它区",532300:"楚雄彝族自治州",532301:"楚雄市",532322:"双柏县",532323:"牟定县",532324:"南华县",532325:"姚安县",532326:"大姚县",532327:"永仁县",532328:"元谋县",532329:"武定县",532331:"禄丰县",532332:"其它区",532500:"红河哈尼族彝族自治州",532501:"个旧市",532502:"开远市",532522:"蒙自市",532523:"屏边苗族自治县",532524:"建水县",532525:"石屏县",532526:"弥勒市",532527:"泸西县",532528:"元阳县",532529:"红河县",532530:"金平苗族瑶族傣族自治县",532531:"绿春县",532532:"河口瑶族自治县",532533:"其它区",532600:"文山壮族苗族自治州",532621:"文山市",532622:"砚山县",532623:"西畴县",532624:"麻栗坡县",532625:"马关县",532626:"丘北县",532627:"广南县",532628:"富宁县",532629:"其它区",532800:"西双版纳傣族自治州",532801:"景洪市",532822:"勐海县",532823:"勐腊县",532824:"其它区",532900:"大理白族自治州",532901:"大理市",532922:"漾濞彝族自治县",532923:"祥云县",532924:"宾川县",532925:"弥渡县",532926:"南涧彝族自治县",532927:"巍山彝族回族自治县",532928:"永平县",532929:"云龙县",532930:"洱源县",532931:"剑川县",532932:"鹤庆县",532933:"其它区",533100:"德宏傣族景颇族自治州",533102:"瑞丽市",533103:"芒市",533122:"梁河县",533123:"盈江县",533124:"陇川县",533125:"其它区",533300:"怒江傈僳族自治州",533321:"泸水县",533323:"福贡县",533324:"贡山独龙族怒族自治县",533325:"兰坪白族普米族自治县",533326:"其它区",533400:"迪庆藏族自治州",533421:"香格里拉县",533422:"德钦县",533423:"维西傈僳族自治县",533424:"其它区",540000:"西藏自治区",540100:"拉萨市",540102:"城关区",540121:"林周县",540122:"当雄县",540123:"尼木县",540124:"曲水县",540125:"堆龙德庆县",540126:"达孜县",540127:"墨竹工卡县",540128:"其它区",542100:"昌都地区",542121:"昌都县",542122:"江达县",542123:"贡觉县",542124:"类乌齐县",542125:"丁青县",542126:"察雅县",542127:"八宿县",542128:"左贡县",542129:"芒康县",542132:"洛隆县",542133:"边坝县",542134:"其它区",542200:"山南地区",542221:"乃东县",542222:"扎囊县",542223:"贡嘎县",542224:"桑日县",542225:"琼结县",542226:"曲松县",542227:"措美县",542228:"洛扎县",542229:"加查县",542231:"隆子县",542232:"错那县",542233:"浪卡子县",542234:"其它区",542300:"日喀则地区",542301:"日喀则市",542322:"南木林县",542323:"江孜县",542324:"定日县",542325:"萨迦县",542326:"拉孜县",542327:"昂仁县",542328:"谢通门县",542329:"白朗县",542330:"仁布县",542331:"康马县",542332:"定结县",542333:"仲巴县",542334:"亚东县",542335:"吉隆县",542336:"聂拉木县",542337:"萨嘎县",542338:"岗巴县",542339:"其它区",542400:"那曲地区",542421:"那曲县",542422:"嘉黎县",542423:"比如县",542424:"聂荣县",542425:"安多县",542426:"申扎县",542427:"索县",542428:"班戈县",542429:"巴青县",542430:"尼玛县",542431:"其它区",542432:"双湖县",542500:"阿里地区",542521:"普兰县",542522:"札达县",542523:"噶尔县",542524:"日土县",542525:"革吉县",542526:"改则县",542527:"措勤县",542528:"其它区",542600:"林芝地区",542621:"林芝县",542622:"工布江达县",542623:"米林县",542624:"墨脱县",542625:"波密县",542626:"察隅县",542627:"朗县",542628:"其它区",610000:"陕西省",610100:"西安市",610102:"新城区",610103:"碑林区",610104:"莲湖区",610111:"灞桥区",610112:"未央区",610113:"雁塔区",610114:"阎良区",610115:"临潼区",610116:"长安区",610122:"蓝田县",610124:"周至县",610125:"户县",610126:"高陵县",610127:"其它区",610200:"铜川市",610202:"王益区",610203:"印台区",610204:"耀州区",610222:"宜君县",610223:"其它区",610300:"宝鸡市",610302:"渭滨区",610303:"金台区",610304:"陈仓区",610322:"凤翔县",610323:"岐山县",610324:"扶风县",610326:"眉县",610327:"陇县",610328:"千阳县",610329:"麟游县",610330:"凤县",610331:"太白县",610332:"其它区",610400:"咸阳市",610402:"秦都区",610403:"杨陵区",610404:"渭城区",610422:"三原县",610423:"泾阳县",610424:"乾县",610425:"礼泉县",610426:"永寿县",610427:"彬县",610428:"长武县",610429:"旬邑县",610430:"淳化县",610431:"武功县",610481:"兴平市",610482:"其它区",610500:"渭南市",610502:"临渭区",610521:"华县",610522:"潼关县",610523:"大荔县",610524:"合阳县",610525:"澄城县",610526:"蒲城县",610527:"白水县",610528:"富平县",610581:"韩城市",610582:"华阴市",610583:"其它区",610600:"延安市",610602:"宝塔区",610621:"延长县",610622:"延川县",610623:"子长县",610624:"安塞县",610625:"志丹县",610626:"吴起县",610627:"甘泉县",610628:"富县",610629:"洛川县",610630:"宜川县",610631:"黄龙县",610632:"黄陵县",610633:"其它区",610700:"汉中市",610702:"汉台区",610721:"南郑县",610722:"城固县",610723:"洋县",610724:"西乡县",610725:"勉县",610726:"宁强县",610727:"略阳县",610728:"镇巴县",610729:"留坝县",610730:"佛坪县",610731:"其它区",610800:"榆林市",610802:"榆阳区",610821:"神木县",610822:"府谷县",610823:"横山县",610824:"靖边县",610825:"定边县",610826:"绥德县",610827:"米脂县",610828:"佳县",610829:"吴堡县",610830:"清涧县",610831:"子洲县",610832:"其它区",610900:"安康市",610902:"汉滨区",610921:"汉阴县",610922:"石泉县",610923:"宁陕县",610924:"紫阳县",610925:"岚皋县",610926:"平利县",610927:"镇坪县",610928:"旬阳县",610929:"白河县",610930:"其它区",611000:"商洛市",611002:"商州区",611021:"洛南县",611022:"丹凤县",611023:"商南县",611024:"山阳县",611025:"镇安县",611026:"柞水县",611027:"其它区",620000:"甘肃省",620100:"兰州市",620102:"城关区",620103:"七里河区",620104:"西固区",620105:"安宁区",620111:"红古区",620121:"永登县",620122:"皋兰县",620123:"榆中县",620124:"其它区",620200:"嘉峪关市",620300:"金昌市",620302:"金川区",620321:"永昌县",620322:"其它区",620400:"白银市",620402:"白银区",620403:"平川区",620421:"靖远县",620422:"会宁县",620423:"景泰县",620424:"其它区",620500:"天水市",620502:"秦州区",620503:"麦积区",620521:"清水县",620522:"秦安县",620523:"甘谷县",620524:"武山县",620525:"张家川回族自治县",620526:"其它区",620600:"武威市",620602:"凉州区",620621:"民勤县",620622:"古浪县",620623:"天祝藏族自治县",620624:"其它区",620700:"张掖市",620702:"甘州区",620721:"肃南裕固族自治县",620722:"民乐县",620723:"临泽县",620724:"高台县",620725:"山丹县",620726:"其它区",620800:"平凉市",620802:"崆峒区",620821:"泾川县",620822:"灵台县",620823:"崇信县",620824:"华亭县",620825:"庄浪县",620826:"静宁县",620827:"其它区",620900:"酒泉市",620902:"肃州区",620921:"金塔县",620922:"瓜州县",620923:"肃北蒙古族自治县",620924:"阿克塞哈萨克族自治县",620981:"玉门市",620982:"敦煌市",620983:"其它区",621000:"庆阳市",621002:"西峰区",621021:"庆城县",621022:"环县",621023:"华池县",621024:"合水县",621025:"正宁县",621026:"宁县",621027:"镇原县",621028:"其它区",621100:"定西市",621102:"安定区",621121:"通渭县",621122:"陇西县",621123:"渭源县",621124:"临洮县",621125:"漳县",621126:"岷县",621127:"其它区",621200:"陇南市",621202:"武都区",621221:"成县",621222:"文县",621223:"宕昌县",621224:"康县",621225:"西和县",621226:"礼县",621227:"徽县",621228:"两当县",621229:"其它区",622900:"临夏回族自治州",622901:"临夏市",622921:"临夏县",622922:"康乐县",622923:"永靖县",622924:"广河县",622925:"和政县",622926:"东乡族自治县",622927:"积石山保安族东乡族撒拉族自治县",622928:"其它区",623000:"甘南藏族自治州",623001:"合作市",623021:"临潭县",623022:"卓尼县",623023:"舟曲县",623024:"迭部县",623025:"玛曲县",623026:"碌曲县",623027:"夏河县",623028:"其它区",630000:"青海省",630100:"西宁市",630102:"城东区",630103:"城中区",630104:"城西区",630105:"城北区",630121:"大通回族土族自治县",630122:"湟中县",630123:"湟源县",630124:"其它区",632100:"海东市",632121:"平安县",632122:"民和回族土族自治县",632123:"乐都区",632126:"互助土族自治县",632127:"化隆回族自治县",632128:"循化撒拉族自治县",632129:"其它区",632200:"海北藏族自治州",632221:"门源回族自治县",632222:"祁连县",632223:"海晏县",632224:"刚察县",632225:"其它区",632300:"黄南藏族自治州",632321:"同仁县",632322:"尖扎县",632323:"泽库县",632324:"河南蒙古族自治县",632325:"其它区",632500:"海南藏族自治州",632521:"共和县",632522:"同德县",632523:"贵德县",632524:"兴海县",632525:"贵南县",632526:"其它区",632600:"果洛藏族自治州",632621:"玛沁县",632622:"班玛县",632623:"甘德县",632624:"达日县",632625:"久治县",632626:"玛多县",632627:"其它区",632700:"玉树藏族自治州",632721:"玉树市",632722:"杂多县",632723:"称多县",632724:"治多县",632725:"囊谦县",632726:"曲麻莱县",632727:"其它区",632800:"海西蒙古族藏族自治州",632801:"格尔木市",632802:"德令哈市",632821:"乌兰县",632822:"都兰县",632823:"天峻县",632824:"其它区",640000:"宁夏回族自治区",640100:"银川市",640104:"兴庆区",640105:"西夏区",640106:"金凤区",640121:"永宁县",640122:"贺兰县",640181:"灵武市",640182:"其它区",640200:"石嘴山市",640202:"大武口区",640205:"惠农区",640221:"平罗县",640222:"其它区",640300:"吴忠市",640302:"利通区",640303:"红寺堡区",640323:"盐池县",640324:"同心县",640381:"青铜峡市",640382:"其它区",640400:"固原市",640402:"原州区",640422:"西吉县",640423:"隆德县",640424:"泾源县",640425:"彭阳县",640426:"其它区",640500:"中卫市",640502:"沙坡头区",640521:"中宁县",640522:"海原县",640523:"其它区",650000:"新疆维吾尔自治区",650100:"乌鲁木齐市",650102:"天山区",650103:"沙依巴克区",650104:"新市区",650105:"水磨沟区",650106:"头屯河区",650107:"达坂城区",650109:"米东区",650121:"乌鲁木齐县",650122:"其它区",650200:"克拉玛依市",650202:"独山子区",650203:"克拉玛依区",650204:"白碱滩区",650205:"乌尔禾区",650206:"其它区",652100:"吐鲁番地区",652101:"吐鲁番市",652122:"鄯善县",652123:"托克逊县",652124:"其它区",652200:"哈密地区",652201:"哈密市",652222:"巴里坤哈萨克自治县",652223:"伊吾县",652224:"其它区",652300:"昌吉回族自治州",652301:"昌吉市",652302:"阜康市",652323:"呼图壁县",652324:"玛纳斯县",652325:"奇台县",652327:"吉木萨尔县",652328:"木垒哈萨克自治县",652329:"其它区",652700:"博尔塔拉蒙古自治州",652701:"博乐市",652702:"阿拉山口市",652722:"精河县",652723:"温泉县",652724:"其它区",652800:"巴音郭楞蒙古自治州",652801:"库尔勒市",652822:"轮台县",652823:"尉犁县",652824:"若羌县",652825:"且末县",652826:"焉耆回族自治县",652827:"和静县",652828:"和硕县",652829:"博湖县",652830:"其它区",652900:"阿克苏地区",652901:"阿克苏市",652922:"温宿县",652923:"库车县",652924:"沙雅县",652925:"新和县",652926:"拜城县",652927:"乌什县",652928:"阿瓦提县",652929:"柯坪县",652930:"其它区",653000:"克孜勒苏柯尔克孜自治州",653001:"阿图什市",653022:"阿克陶县",653023:"阿合奇县",653024:"乌恰县",653025:"其它区",653100:"喀什地区",653101:"喀什市",653121:"疏附县",653122:"疏勒县",653123:"英吉沙县",653124:"泽普县",653125:"莎车县",653126:"叶城县",653127:"麦盖提县",653128:"岳普湖县",653129:"伽师县",653130:"巴楚县",653131:"塔什库尔干塔吉克自治县",653132:"其它区",653200:"和田地区",653201:"和田市",653221:"和田县",653222:"墨玉县",653223:"皮山县",653224:"洛浦县",653225:"策勒县",653226:"于田县",653227:"民丰县",653228:"其它区",654000:"伊犁哈萨克自治州",654002:"伊宁市",654003:"奎屯市",654021:"伊宁县",654022:"察布查尔锡伯自治县",654023:"霍城县",654024:"巩留县",654025:"新源县",654026:"昭苏县",654027:"特克斯县",654028:"尼勒克县",654029:"其它区",654200:"塔城地区",654201:"塔城市",654202:"乌苏市",654221:"额敏县",654223:"沙湾县",654224:"托里县",654225:"裕民县",654226:"和布克赛尔蒙古自治县",654227:"其它区",654300:"阿勒泰地区",654301:"阿勒泰市",654321:"布尔津县",654322:"富蕴县",654323:"福海县",654324:"哈巴河县",654325:"青河县",654326:"吉木乃县",654327:"其它区",659001:"石河子市",659002:"阿拉尔市",659003:"图木舒克市",659004:"五家渠市",710000:"台湾",710100:"台北市",710101:"中正区",710102:"大同区",710103:"中山区",710104:"松山区",710105:"大安区",710106:"万华区",710107:"信义区",710108:"士林区",710109:"北投区",710110:"内湖区",710111:"南港区",710112:"文山区",710113:"其它区",710200:"高雄市",710201:"新兴区",710202:"前金区",710203:"芩雅区",710204:"盐埕区",710205:"鼓山区",710206:"旗津区",710207:"前镇区",710208:"三民区",710209:"左营区",710210:"楠梓区",710211:"小港区",710212:"其它区",710241:"苓雅区",710242:"仁武区",710243:"大社区",710244:"冈山区",710245:"路竹区",710246:"阿莲区",710247:"田寮区",710248:"燕巢区",710249:"桥头区",710250:"梓官区",710251:"弥陀区",710252:"永安区",710253:"湖内区",710254:"凤山区",710255:"大寮区",710256:"林园区",710257:"鸟松区",710258:"大树区",710259:"旗山区",710260:"美浓区",710261:"六龟区",710262:"内门区",710263:"杉林区",710264:"甲仙区",710265:"桃源区",710266:"那玛夏区",710267:"茂林区",710268:"茄萣区",710300:"台南市",710301:"中西区",710302:"东区",710303:"南区",710304:"北区",710305:"安平区",710306:"安南区",710307:"其它区",710339:"永康区",710340:"归仁区",710341:"新化区",710342:"左镇区",710343:"玉井区",710344:"楠西区",710345:"南化区",710346:"仁德区",710347:"关庙区",710348:"龙崎区",710349:"官田区",710350:"麻豆区",710351:"佳里区",710352:"西港区",710353:"七股区",710354:"将军区",710355:"学甲区",710356:"北门区",710357:"新营区",710358:"后壁区",710359:"白河区",710360:"东山区",710361:"六甲区",710362:"下营区",710363:"柳营区",710364:"盐水区",710365:"善化区",710366:"大内区",710367:"山上区",710368:"新市区",710369:"安定区",710400:"台中市",710401:"中区",710402:"东区",710403:"南区",710404:"西区",710405:"北区",710406:"北屯区",710407:"西屯区",710408:"南屯区",710409:"其它区",710431:"太平区",710432:"大里区",710433:"雾峰区",710434:"乌日区",710435:"丰原区",710436:"后里区",710437:"石冈区",710438:"东势区",710439:"和平区",710440:"新社区",710441:"潭子区",710442:"大雅区",710443:"神冈区",710444:"大肚区",710445:"沙鹿区",710446:"龙井区",710447:"梧栖区",710448:"清水区",710449:"大甲区",710450:"外埔区",710451:"大安区",710500:"金门县",710507:"金沙镇",710508:"金湖镇",710509:"金宁乡",710510:"金城镇",710511:"烈屿乡",710512:"乌坵乡",710600:"南投县",710614:"南投市",710615:"中寮乡",710616:"草屯镇",710617:"国姓乡",710618:"埔里镇",710619:"仁爱乡",710620:"名间乡",710621:"集集镇",710622:"水里乡",710623:"鱼池乡",710624:"信义乡",710625:"竹山镇",710626:"鹿谷乡",710700:"基隆市",710701:"仁爱区",710702:"信义区",710703:"中正区",710704:"中山区",710705:"安乐区",710706:"暖暖区",710707:"七堵区",710708:"其它区",710800:"新竹市",710801:"东区",710802:"北区",710803:"香山区",710804:"其它区",710900:"嘉义市",710901:"东区",710902:"西区",710903:"其它区",711100:"新北市",711130:"万里区",711131:"金山区",711132:"板桥区",711133:"汐止区",711134:"深坑区",711135:"石碇区",711136:"瑞芳区",711137:"平溪区",711138:"双溪区",711139:"贡寮区",711140:"新店区",711141:"坪林区",711142:"乌来区",711143:"永和区",711144:"中和区",711145:"土城区",711146:"三峡区",711147:"树林区",711148:"莺歌区",711149:"三重区",711150:"新庄区",711151:"泰山区",711152:"林口区",711153:"芦洲区",711154:"五股区",711155:"八里区",711156:"淡水区",711157:"三芝区",711158:"石门区",711200:"宜兰县",711214:"宜兰市",711215:"头城镇",711216:"礁溪乡",711217:"壮围乡",711218:"员山乡",711219:"罗东镇",711220:"三星乡",711221:"大同乡",711222:"五结乡",711223:"冬山乡",711224:"苏澳镇",711225:"南澳乡",711226:"钓鱼台",711300:"新竹县",711314:"竹北市",711315:"湖口乡",711316:"新丰乡",711317:"新埔镇",711318:"关西镇",711319:"芎林乡",711320:"宝山乡",711321:"竹东镇",711322:"五峰乡",711323:"横山乡",711324:"尖石乡",711325:"北埔乡",711326:"峨眉乡",711400:"桃园县",711414:"中坜市",711415:"平镇市",711416:"龙潭乡",711417:"杨梅市",711418:"新屋乡",711419:"观音乡",711420:"桃园市",711421:"龟山乡",711422:"八德市",711423:"大溪镇",711424:"复兴乡",711425:"大园乡",711426:"芦竹乡",711500:"苗栗县",711519:"竹南镇",711520:"头份镇",711521:"三湾乡",711522:"南庄乡",711523:"狮潭乡",711524:"后龙镇",711525:"通霄镇",711526:"苑里镇",711527:"苗栗市",711528:"造桥乡",711529:"头屋乡",711530:"公馆乡",711531:"大湖乡",711532:"泰安乡",711533:"铜锣乡",711534:"三义乡",711535:"西湖乡",711536:"卓兰镇",711700:"彰化县",711727:"彰化市",711728:"芬园乡",711729:"花坛乡",711730:"秀水乡",711731:"鹿港镇",711732:"福兴乡",711733:"线西乡",711734:"和美镇",711735:"伸港乡",711736:"员林镇",711737:"社头乡",711738:"永靖乡",711739:"埔心乡",711740:"溪湖镇",711741:"大村乡",711742:"埔盐乡",711743:"田中镇",711744:"北斗镇",711745:"田尾乡",711746:"埤头乡",711747:"溪州乡",711748:"竹塘乡",711749:"二林镇",711750:"大城乡",711751:"芳苑乡",711752:"二水乡",711900:"嘉义县",711919:"番路乡",711920:"梅山乡",711921:"竹崎乡",711922:"阿里山乡",711923:"中埔乡",711924:"大埔乡",711925:"水上乡",711926:"鹿草乡",711927:"太保市",711928:"朴子市",711929:"东石乡",711930:"六脚乡",711931:"新港乡",711932:"民雄乡",711933:"大林镇",711934:"溪口乡",711935:"义竹乡",711936:"布袋镇",712100:"云林县",712121:"斗南镇",712122:"大埤乡",712123:"虎尾镇",712124:"土库镇",712125:"褒忠乡",712126:"东势乡",712127:"台西乡",712128:"仑背乡",712129:"麦寮乡",712130:"斗六市",712131:"林内乡",712132:"古坑乡",712133:"莿桐乡",712134:"西螺镇",712135:"二仑乡",712136:"北港镇",712137:"水林乡",712138:"口湖乡",712139:"四湖乡",712140:"元长乡",712400:"屏东县",712434:"屏东市",712435:"三地门乡",712436:"雾台乡",712437:"玛家乡",712438:"九如乡",712439:"里港乡",712440:"高树乡",712441:"盐埔乡",712442:"长治乡",712443:"麟洛乡",712444:"竹田乡",712445:"内埔乡",712446:"万丹乡",712447:"潮州镇",712448:"泰武乡",712449:"来义乡",712450:"万峦乡",712451:"崁顶乡",712452:"新埤乡",712453:"南州乡",712454:"林边乡",712455:"东港镇",712456:"琉球乡",712457:"佳冬乡",712458:"新园乡",712459:"枋寮乡",712460:"枋山乡",712461:"春日乡",712462:"狮子乡",712463:"车城乡",712464:"牡丹乡",712465:"恒春镇",712466:"满州乡",712500:"台东县",712517:"台东市",712518:"绿岛乡",712519:"兰屿乡",712520:"延平乡",712521:"卑南乡",712522:"鹿野乡",712523:"关山镇",712524:"海端乡",712525:"池上乡",712526:"东河乡",712527:"成功镇",712528:"长滨乡",712529:"金峰乡",712530:"大武乡",712531:"达仁乡",712532:"太麻里乡",712600:"花莲县",712615:"花莲市",712616:"新城乡",712617:"太鲁阁",712618:"秀林乡",712619:"吉安乡",712620:"寿丰乡",712621:"凤林镇",712622:"光复乡",712623:"丰滨乡",712624:"瑞穗乡",712625:"万荣乡",712626:"玉里镇",712627:"卓溪乡",712628:"富里乡",712700:"澎湖县",712707:"马公市",712708:"西屿乡",712709:"望安乡",712710:"七美乡",712711:"白沙乡",712712:"湖西乡",712800:"连江县",712805:"南竿乡",712806:"北竿乡",712807:"莒光乡",712808:"东引乡",810000:"香港特别行政区",810100:"香港岛",810101:"中西区",810102:"湾仔",810103:"东区",810104:"南区",810200:"九龙",810201:"九龙城区",810202:"油尖旺区",810203:"深水埗区",810204:"黄大仙区",810205:"观塘区",810300:"新界",810301:"北区",810302:"大埔区",810303:"沙田区",810304:"西贡区",810305:"元朗区",810306:"屯门区",810307:"荃湾区",810308:"葵青区",810309:"离岛区",820000:"澳门特别行政区",820100:"澳门半岛",820200:"离岛",990000:"海外",990100:"海外"},n=function(){var n=[];for(var r in t){var a="0000"===r.slice(2,6)?void 0:"00"==r.slice(4,6)?r.slice(0,2)+"0000":r.slice(0,4)+"00";n.push({id:r,pid:a,name:t[r]})}return e(n)}();module.exports=n},/* 19 */
/***/
function(module,exports,e){/*
	    ## Miscellaneous
	*/
var t=e(18);module.exports={
// Dice
d4:function(){return this.natural(1,4)},d6:function(){return this.natural(1,6)},d8:function(){return this.natural(1,8)},d12:function(){return this.natural(1,12)},d20:function(){return this.natural(1,20)},d100:function(){return this.natural(1,100)},/*
		    随机生成一个 GUID。

		    http://www.broofa.com/2008/09/javascript-uuid-function/
		    [UUID 规范](http://www.ietf.org/rfc/rfc4122.txt)
		        UUIDs (Universally Unique IDentifier)
		        GUIDs (Globally Unique IDentifier)
		        The formal definition of the UUID string representation is provided by the following ABNF [7]:
		            UUID                   = time-low "-" time-mid "-"
		                                   time-high-and-version "-"
		                                   clock-seq-and-reserved
		                                   clock-seq-low "-" node
		            time-low               = 4hexOctet
		            time-mid               = 2hexOctet
		            time-high-and-version  = 2hexOctet
		            clock-seq-and-reserved = hexOctet
		            clock-seq-low          = hexOctet
		            node                   = 6hexOctet
		            hexOctet               = hexDigit hexDigit
		            hexDigit =
		                "0" / "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" /
		                "a" / "b" / "c" / "d" / "e" / "f" /
		                "A" / "B" / "C" / "D" / "E" / "F"
		    
		    https://github.com/victorquinn/chancejs/blob/develop/chance.js#L1349
		*/
guid:function(){var e="abcdefABCDEF1234567890";return this.string(e,8)+"-"+this.string(e,4)+"-"+this.string(e,4)+"-"+this.string(e,4)+"-"+this.string(e,12)},uuid:function(){return this.guid()},/*
		    随机生成一个 18 位身份证。

		    [身份证](http://baike.baidu.com/view/1697.htm#4)
		        地址码 6 + 出生日期码 8 + 顺序码 3 + 校验码 1
		    [《中华人民共和国行政区划代码》国家标准(GB/T2260)](http://zhidao.baidu.com/question/1954561.html)
		*/
id:function(){var e,n=0,r=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],a=["1","0","X","9","8","7","6","5","4","3","2"];e=this.pick(t).id+this.date("yyyyMMdd")+this.string("number",3);for(var o=0;o<e.length;o++)n+=e[o]*r[o];return e+=a[n%11]},/*
		    生成一个全局的自增整数。
		    类似自增主键（auto increment primary key）。
		*/
increment:function(){var e=0;return function(t){return e+=+t||1}}(),inc:function(e){return this.increment(e)}}},/* 20 */
/***/
function(module,exports,e){var t=e(21),n=e(22);module.exports={Parser:t,Handler:n}},/* 21 */
/***/
function(module,exports){function e(t){this.type=t,this.offset=e.offset(),this.text=e.text()}function t(t,n){e.call(this,"alternate"),this.left=t,this.right=n}function n(t){e.call(this,"match"),this.body=t.filter(Boolean)}function r(t,n){e.call(this,t),this.body=n}function a(e){r.call(this,"capture-group"),this.index=b[this.offset]||(b[this.offset]=y++),this.body=e}function o(t,n){e.call(this,"quantified"),this.body=t,this.quantifier=n}function u(t,n){e.call(this,"quantifier"),this.min=t,this.max=n,this.greedy=!0}function i(t,n){e.call(this,"charset"),this.invert=t,this.body=n}function l(t,n){e.call(this,"range"),this.start=t,this.end=n}function c(t){e.call(this,"literal"),this.body=t,this.escaped=this.body!=this.text}function s(t){e.call(this,"unicode"),this.code=t.toUpperCase()}function f(t){e.call(this,"hex"),this.code=t.toUpperCase()}function d(t){e.call(this,"octal"),this.code=t.toUpperCase()}function p(t){e.call(this,"back-reference"),this.code=t.toUpperCase()}function h(t){e.call(this,"control-character"),this.code=t.toUpperCase()}var m=function(){function m(e,t,n,r,a){this.expected=e,this.found=t,this.offset=n,this.line=r,this.column=a,this.name="SyntaxError",this.message=function(e,t){var n,r;switch(e.length){case 0:n="end of input";break;case 1:n=e[0];break;default:n=e.slice(0,-1).join(", ")+" or "+e[e.length-1]}return r=t?'"'+function(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+t(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+t(e)}).replace(/[\u0180-\u0FFF]/g,function(e){return"\\u0"+t(e)}).replace(/[\u1080-\uFFFF]/g,function(e){return"\\u"+t(e)})}(t)+'"':"end of input","Expected "+n+" but "+r+" found."}(e,t)}function y(y){function b(){return y.substring(Qn,Xn)}function v(){return Qn}function g(e){return Zn!==e&&(Zn>e&&(Zn=0,er={line:1,column:1,seenCR:!1}),function(e,t,n){var r,a;for(r=t;n>r;r++)a=y.charAt(r),"\n"===a?(e.seenCR||e.line++,e.column=1,e.seenCR=!1):"\r"===a||"\u2028"===a||"\u2029"===a?(e.line++,e.column=1,e.seenCR=!0):(e.column++,e.seenCR=!1)}(er,Zn,e),Zn=e),er}function O(e){tr>Xn||(Xn>tr&&(tr=Xn,nr=[]),nr.push(e))}function E(){var e,t,n,r,a;return e=Xn,t=w(),null!==t?(n=Xn,124===y.charCodeAt(Xn)?(r=je,Xn++):(r=null,0===rr&&O(xe)),null!==r?(a=E(),null!==a?(r=[r,a],n=r):(Xn=n,n=Ee)):(Xn=n,n=Ee),null===n&&(n=we),null!==n?(Qn=e,t=ke(t,n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee),e}function w(){var e,t,n,r,a;if(e=Xn,t=x(),null===t&&(t=we),null!==t)if(n=Xn,rr++,r=C(),rr--,null===r?n=we:(Xn=n,n=Ee),null!==n){for(r=[],null===(a=S())&&(a=j());null!==a;)r.push(a),null===(a=S())&&(a=j());null!==r?(a=k(),null===a&&(a=we),null!==a?(Qn=e,t=Se(t,r,a),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee)}else Xn=e,e=Ee;else Xn=e,e=Ee;return e}function j(){var e;return e=H(),null===e&&null===(e=V())&&(e=W()),e}function x(){var e,t;return e=Xn,94===y.charCodeAt(Xn)?(t=Ce,Xn++):(t=null,0===rr&&O(Pe)),null!==t&&(Qn=e,t=Re()),null===t?(Xn=e,e=t):e=t,e}function k(){var e,t;return e=Xn,36===y.charCodeAt(Xn)?(t=Te,Xn++):(t=null,0===rr&&O(Ae)),null!==t&&(Qn=e,t=Me()),null===t?(Xn=e,e=t):e=t,e}function S(){var e,t,n;return e=Xn,t=j(),null!==t?(n=C(),null!==n?(Qn=e,t=Ie(t,n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee),e}function C(){var e,t,n;return rr++,e=Xn,t=P(),null!==t?(n=N(),null===n&&(n=we),null!==n?(Qn=e,t=Ne(t,n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee),rr--,null===e&&(t=null,0===rr&&O(Le)),e}function P(){var e;return e=R(),null===e&&null===(e=T())&&null===(e=A())&&null===(e=M())&&null===(e=I())&&(e=L()),e}function R(){var e,t,n,r,a,o;return e=Xn,123===y.charCodeAt(Xn)?(t=Fe,Xn++):(t=null,0===rr&&O(He)),null!==t?(n=F(),null!==n?(44===y.charCodeAt(Xn)?(r=De,Xn++):(r=null,0===rr&&O(Ue)),null!==r?(a=F(),null!==a?(125===y.charCodeAt(Xn)?(o=qe,Xn++):(o=null,0===rr&&O(ze)),null!==o?(Qn=e,t=Ve(n,a),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee)):(Xn=e,e=Ee)):(Xn=e,e=Ee)):(Xn=e,e=Ee),e}function T(){var e,t,n,r;return e=Xn,123===y.charCodeAt(Xn)?(t=Fe,Xn++):(t=null,0===rr&&O(He)),null!==t?(n=F(),null!==n?(y.substr(Xn,2)===Be?(r=Be,Xn+=2):(r=null,0===rr&&O(Ge)),null!==r?(Qn=e,t=Je(n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee)):(Xn=e,e=Ee),e}function A(){var e,t,n,r;return e=Xn,123===y.charCodeAt(Xn)?(t=Fe,Xn++):(t=null,0===rr&&O(He)),null!==t?(n=F(),null!==n?(125===y.charCodeAt(Xn)?(r=qe,Xn++):(r=null,0===rr&&O(ze)),null!==r?(Qn=e,t=Ye(n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee)):(Xn=e,e=Ee),e}function M(){var e,t;return e=Xn,43===y.charCodeAt(Xn)?(t=We,Xn++):(t=null,0===rr&&O(Ke)),null!==t&&(Qn=e,t=$e()),null===t?(Xn=e,e=t):e=t,e}function I(){var e,t;return e=Xn,42===y.charCodeAt(Xn)?(t=Xe,Xn++):(t=null,0===rr&&O(Qe)),null!==t&&(Qn=e,t=Ze()),null===t?(Xn=e,e=t):e=t,e}function L(){var e,t;return e=Xn,63===y.charCodeAt(Xn)?(t=et,Xn++):(t=null,0===rr&&O(tt)),null!==t&&(Qn=e,t=nt()),null===t?(Xn=e,e=t):e=t,e}function N(){var e;return 63===y.charCodeAt(Xn)?(e=et,Xn++):(e=null,0===rr&&O(tt)),e}function F(){var e,t,n;if(e=Xn,t=[],rt.test(y.charAt(Xn))?(n=y.charAt(Xn),Xn++):(n=null,0===rr&&O(at)),null!==n)for(;null!==n;)t.push(n),rt.test(y.charAt(Xn))?(n=y.charAt(Xn),Xn++):(n=null,0===rr&&O(at));else t=Ee;return null!==t&&(Qn=e,t=ot(t)),null===t?(Xn=e,e=t):e=t,e}function H(){var e,t,n,r;return e=Xn,40===y.charCodeAt(Xn)?(t=ut,Xn++):(t=null,0===rr&&O(it)),null!==t?(n=q(),null===n&&null===(n=z())&&null===(n=U())&&(n=D()),null!==n?(41===y.charCodeAt(Xn)?(r=lt,Xn++):(r=null,0===rr&&O(ct)),null!==r?(Qn=e,t=st(n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee)):(Xn=e,e=Ee),e}function D(){var e,t;return e=Xn,t=E(),null!==t&&(Qn=e,t=ft(t)),null===t?(Xn=e,e=t):e=t,e}function U(){var e,t,n;return e=Xn,y.substr(Xn,2)===dt?(t=dt,Xn+=2):(t=null,0===rr&&O(pt)),null!==t?(n=E(),null!==n?(Qn=e,t=ht(n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee),e}function q(){var e,t,n;return e=Xn,y.substr(Xn,2)===mt?(t=mt,Xn+=2):(t=null,0===rr&&O(yt)),null!==t?(n=E(),null!==n?(Qn=e,t=bt(n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee),e}function z(){var e,t,n;return e=Xn,y.substr(Xn,2)===vt?(t=vt,Xn+=2):(t=null,0===rr&&O(gt)),null!==t?(n=E(),null!==n?(Qn=e,t=_t(n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee),e}function V(){var e,t,n,r,a;if(rr++,e=Xn,91===y.charCodeAt(Xn)?(t=Et,Xn++):(t=null,0===rr&&O(wt)),null!==t)if(94===y.charCodeAt(Xn)?(n=Ce,Xn++):(n=null,0===rr&&O(Pe)),null===n&&(n=we),null!==n){for(r=[],null===(a=B())&&(a=G());null!==a;)r.push(a),null===(a=B())&&(a=G());null!==r?(93===y.charCodeAt(Xn)?(a=jt,Xn++):(a=null,0===rr&&O(xt)),null!==a?(Qn=e,t=kt(n,r),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee)}else Xn=e,e=Ee;else Xn=e,e=Ee;return rr--,null===e&&(t=null,0===rr&&O(Ot)),e}function B(){var e,t,n,r;return rr++,e=Xn,t=G(),null!==t?(45===y.charCodeAt(Xn)?(n=Ct,Xn++):(n=null,0===rr&&O(Pt)),null!==n?(r=G(),null!==r?(Qn=e,t=Rt(t,r),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee)):(Xn=e,e=Ee),rr--,null===e&&(t=null,0===rr&&O(St)),e}function G(){var e;return rr++,e=Y(),null===e&&(e=J()),rr--,null===e&&(null,0===rr&&O(Tt)),e}function J(){var e,t;return e=Xn,At.test(y.charAt(Xn))?(t=y.charAt(Xn),Xn++):(t=null,0===rr&&O(Mt)),null!==t&&(Qn=e,t=It(t)),null===t?(Xn=e,e=t):e=t,e}function Y(){var e;return e=Q(),null===e&&null===(e=de())&&null===(e=te())&&null===(e=ne())&&null===(e=re())&&null===(e=ae())&&null===(e=oe())&&null===(e=ue())&&null===(e=ie())&&null===(e=le())&&null===(e=ce())&&null===(e=se())&&null===(e=fe())&&null===(e=_())&&null===(e=he())&&null===(e=me())&&null===(e=ye())&&(e=be()),e}function W(){var e;return e=K(),null===e&&null===(e=X())&&(e=$()),e}function K(){var e,t;return e=Xn,46===y.charCodeAt(Xn)?(t=Lt,Xn++):(t=null,0===rr&&O(Nt)),null!==t&&(Qn=e,t=Ft()),null===t?(Xn=e,e=t):e=t,e}function $(){var e,t;return rr++,e=Xn,Dt.test(y.charAt(Xn))?(t=y.charAt(Xn),Xn++):(t=null,0===rr&&O(Ut)),null!==t&&(Qn=e,t=It(t)),null===t?(Xn=e,e=t):e=t,rr--,null===e&&(t=null,0===rr&&O(Ht)),e}function X(){var e;return e=Z(),null===e&&null===(e=ee())&&null===(e=de())&&null===(e=te())&&null===(e=ne())&&null===(e=re())&&null===(e=ae())&&null===(e=oe())&&null===(e=ue())&&null===(e=ie())&&null===(e=le())&&null===(e=ce())&&null===(e=se())&&null===(e=fe())&&null===(e=pe())&&null===(e=_())&&null===(e=he())&&null===(e=me())&&null===(e=ye())&&(e=be()),e}function Q(){var e,t;return e=Xn,y.substr(Xn,2)===qt?(t=qt,Xn+=2):(t=null,0===rr&&O(zt)),null!==t&&(Qn=e,t=Vt()),null===t?(Xn=e,e=t):e=t,e}function Z(){var e,t;return e=Xn,y.substr(Xn,2)===qt?(t=qt,Xn+=2):(t=null,0===rr&&O(zt)),null!==t&&(Qn=e,t=Bt()),null===t?(Xn=e,e=t):e=t,e}function ee(){var e,t;return e=Xn,y.substr(Xn,2)===Gt?(t=Gt,Xn+=2):(t=null,0===rr&&O(Jt)),null!==t&&(Qn=e,t=Yt()),null===t?(Xn=e,e=t):e=t,e}function te(){var e,t;return e=Xn,y.substr(Xn,2)===Wt?(t=Wt,Xn+=2):(t=null,0===rr&&O(Kt)),null!==t&&(Qn=e,t=$t()),null===t?(Xn=e,e=t):e=t,e}function ne(){var e,t;return e=Xn,y.substr(Xn,2)===Xt?(t=Xt,Xn+=2):(t=null,0===rr&&O(Qt)),null!==t&&(Qn=e,t=Zt()),null===t?(Xn=e,e=t):e=t,e}function re(){var e,t;return e=Xn,y.substr(Xn,2)===en?(t=en,Xn+=2):(t=null,0===rr&&O(tn)),null!==t&&(Qn=e,t=nn()),null===t?(Xn=e,e=t):e=t,e}function ae(){var e,t;return e=Xn,y.substr(Xn,2)===rn?(t=rn,Xn+=2):(t=null,0===rr&&O(an)),null!==t&&(Qn=e,t=on()),null===t?(Xn=e,e=t):e=t,e}function oe(){var e,t;return e=Xn,y.substr(Xn,2)===un?(t=un,Xn+=2):(t=null,0===rr&&O(ln)),null!==t&&(Qn=e,t=cn()),null===t?(Xn=e,e=t):e=t,e}function ue(){var e,t;return e=Xn,y.substr(Xn,2)===sn?(t=sn,Xn+=2):(t=null,0===rr&&O(fn)),null!==t&&(Qn=e,t=dn()),null===t?(Xn=e,e=t):e=t,e}function ie(){var e,t;return e=Xn,y.substr(Xn,2)===pn?(t=pn,Xn+=2):(t=null,0===rr&&O(hn)),null!==t&&(Qn=e,t=mn()),null===t?(Xn=e,e=t):e=t,e}function le(){var e,t;return e=Xn,y.substr(Xn,2)===yn?(t=yn,Xn+=2):(t=null,0===rr&&O(bn)),null!==t&&(Qn=e,t=vn()),null===t?(Xn=e,e=t):e=t,e}function ce(){var e,t;return e=Xn,y.substr(Xn,2)===gn?(t=gn,Xn+=2):(t=null,0===rr&&O(_n)),null!==t&&(Qn=e,t=On()),null===t?(Xn=e,e=t):e=t,e}function se(){var e,t;return e=Xn,y.substr(Xn,2)===En?(t=En,Xn+=2):(t=null,0===rr&&O(wn)),null!==t&&(Qn=e,t=jn()),null===t?(Xn=e,e=t):e=t,e}function fe(){var e,t;return e=Xn,y.substr(Xn,2)===xn?(t=xn,Xn+=2):(t=null,0===rr&&O(kn)),null!==t&&(Qn=e,t=Sn()),null===t?(Xn=e,e=t):e=t,e}function de(){var e,t,n;return e=Xn,y.substr(Xn,2)===Cn?(t=Cn,Xn+=2):(t=null,0===rr&&O(Pn)),null!==t?(y.length>Xn?(n=y.charAt(Xn),Xn++):(n=null,0===rr&&O(Rn)),null!==n?(Qn=e,t=Tn(n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee),e}function pe(){var e,t,n;return e=Xn,92===y.charCodeAt(Xn)?(t=An,Xn++):(t=null,0===rr&&O(Mn)),null!==t?(In.test(y.charAt(Xn))?(n=y.charAt(Xn),Xn++):(n=null,0===rr&&O(Ln)),null!==n?(Qn=e,t=Nn(n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee),e}function _(){var e,t,n,r;if(e=Xn,y.substr(Xn,2)===Fn?(t=Fn,Xn+=2):(t=null,0===rr&&O(Hn)),null!==t){if(n=[],Dn.test(y.charAt(Xn))?(r=y.charAt(Xn),Xn++):(r=null,0===rr&&O(Un)),null!==r)for(;null!==r;)n.push(r),Dn.test(y.charAt(Xn))?(r=y.charAt(Xn),Xn++):(r=null,0===rr&&O(Un));else n=Ee;null!==n?(Qn=e,t=qn(n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)}else Xn=e,e=Ee;return e}function he(){var e,t,n,r;if(e=Xn,y.substr(Xn,2)===zn?(t=zn,Xn+=2):(t=null,0===rr&&O(Vn)),null!==t){if(n=[],Bn.test(y.charAt(Xn))?(r=y.charAt(Xn),Xn++):(r=null,0===rr&&O(Gn)),null!==r)for(;null!==r;)n.push(r),Bn.test(y.charAt(Xn))?(r=y.charAt(Xn),Xn++):(r=null,0===rr&&O(Gn));else n=Ee;null!==n?(Qn=e,t=Jn(n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)}else Xn=e,e=Ee;return e}function me(){var e,t,n,r;if(e=Xn,y.substr(Xn,2)===Yn?(t=Yn,Xn+=2):(t=null,0===rr&&O(Wn)),null!==t){if(n=[],Bn.test(y.charAt(Xn))?(r=y.charAt(Xn),Xn++):(r=null,0===rr&&O(Gn)),null!==r)for(;null!==r;)n.push(r),Bn.test(y.charAt(Xn))?(r=y.charAt(Xn),Xn++):(r=null,0===rr&&O(Gn));else n=Ee;null!==n?(Qn=e,t=Kn(n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)}else Xn=e,e=Ee;return e}function ye(){var e,t;return e=Xn,y.substr(Xn,2)===Fn?(t=Fn,Xn+=2):(t=null,0===rr&&O(Hn)),null!==t&&(Qn=e,t=$n()),null===t?(Xn=e,e=t):e=t,e}function be(){var e,t,n;return e=Xn,92===y.charCodeAt(Xn)?(t=An,Xn++):(t=null,0===rr&&O(Mn)),null!==t?(y.length>Xn?(n=y.charAt(Xn),Xn++):(n=null,0===rr&&O(Rn)),null!==n?(Qn=e,t=It(n),null===t?(Xn=e,e=t):e=t):(Xn=e,e=Ee)):(Xn=e,e=Ee),e}var ve,ge=arguments.length>1?arguments[1]:{},_e={regexp:E},Oe=E,Ee=null,we="",je="|",xe='"|"',ke=function(e,n){return n?new t(e,n[1]):e},Se=function(e,t,r){return new n([e].concat(t).concat([r]))},Ce="^",Pe='"^"',Re=function(){return new e("start")},Te="$",Ae='"$"',Me=function(){return new e("end")},Ie=function(e,t){return new o(e,t)},Le="Quantifier",Ne=function(e,t){return t&&(e.greedy=!1),e},Fe="{",He='"{"',De=",",Ue='","',qe="}",ze='"}"',Ve=function(e,t){return new u(e,t)},Be=",}",Ge='",}"',Je=function(e){return new u(e,1/0)},Ye=function(e){return new u(e,e)},We="+",Ke='"+"',$e=function(){return new u(1,1/0)},Xe="*",Qe='"*"',Ze=function(){return new u(0,1/0)},et="?",tt='"?"',nt=function(){return new u(0,1)},rt=/^[0-9]/,at="[0-9]",ot=function(e){return+e.join("")},ut="(",it='"("',lt=")",ct='")"',st=function(e){return e},ft=function(e){return new a(e)},dt="?:",pt='"?:"',ht=function(e){return new r("non-capture-group",e)},mt="?=",yt='"?="',bt=function(e){return new r("positive-lookahead",e)},vt="?!",gt='"?!"',_t=function(e){return new r("negative-lookahead",e)},Ot="CharacterSet",Et="[",wt='"["',jt="]",xt='"]"',kt=function(e,t){return new i(!!e,t)},St="CharacterRange",Ct="-",Pt='"-"',Rt=function(e,t){return new l(e,t)},Tt="Character",At=/^[^\\\]]/,Mt="[^\\\\\\]]",It=function(e){return new c(e)},Lt=".",Nt='"."',Ft=function(){return new e("any-character")},Ht="Literal",Dt=/^[^|\\\/.[()?+*$\^]/,Ut="[^|\\\\\\/.[()?+*$\\^]",qt="\\b",zt='"\\\\b"',Vt=function(){return new e("backspace")},Bt=function(){return new e("word-boundary")},Gt="\\B",Jt='"\\\\B"',Yt=function(){return new e("non-word-boundary")},Wt="\\d",Kt='"\\\\d"',$t=function(){return new e("digit")},Xt="\\D",Qt='"\\\\D"',Zt=function(){return new e("non-digit")},en="\\f",tn='"\\\\f"',nn=function(){return new e("form-feed")},rn="\\n",an='"\\\\n"',on=function(){return new e("line-feed")},un="\\r",ln='"\\\\r"',cn=function(){return new e("carriage-return")},sn="\\s",fn='"\\\\s"',dn=function(){return new e("white-space")},pn="\\S",hn='"\\\\S"',mn=function(){return new e("non-white-space")},yn="\\t",bn='"\\\\t"',vn=function(){return new e("tab")},gn="\\v",_n='"\\\\v"',On=function(){return new e("vertical-tab")},En="\\w",wn='"\\\\w"',jn=function(){return new e("word")},xn="\\W",kn='"\\\\W"',Sn=function(){return new e("non-word")},Cn="\\c",Pn='"\\\\c"',Rn="any character",Tn=function(e){return new h(e)},An="\\",Mn='"\\\\"',In=/^[1-9]/,Ln="[1-9]",Nn=function(e){return new p(e)},Fn="\\0",Hn='"\\\\0"',Dn=/^[0-7]/,Un="[0-7]",qn=function(e){return new d(e.join(""))},zn="\\x",Vn='"\\\\x"',Bn=/^[0-9a-fA-F]/,Gn="[0-9a-fA-F]",Jn=function(e){return new f(e.join(""))},Yn="\\u",Wn='"\\\\u"',Kn=function(e){return new s(e.join(""))},$n=function(){return new e("null-character")},Xn=0,Qn=0,Zn=0,er={line:1,column:1,seenCR:!1},tr=0,nr=[],rr=0;if("startRule"in ge){if(!(ge.startRule in _e))throw new Error("Can't start parsing from rule \""+ge.startRule+'".');Oe=_e[ge.startRule]}if(e.offset=v,e.text=b,null!==(ve=Oe())&&Xn===y.length)return ve;throw function(e){var t=0;for(e.sort();t<e.length;)e[t-1]===e[t]?e.splice(t,1):t++}(nr),Qn=Math.max(Xn,tr),new m(nr,Qn<y.length?y.charAt(Qn):null,Qn,g(Qn).line,g(Qn).column)}return function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(m,Error),{SyntaxError:m,parse:y}}(),y=1,b={};module.exports=m},/* 22 */
/***/
function(module,exports,e){function t(e,t){for(var n="",r=e;r<=t;r++)n+=String.fromCharCode(r);return n}/*
	    ## RegExp Handler

	    https://github.com/ForbesLindesay/regexp
	    https://github.com/dmajda/pegjs
	    http://www.regexper.com/

	    每个节点的结构
	        {
	            type: '',
	            offset: number,
	            text: '',
	            body: {},
	            escaped: true/false
	        }

	    type 可选值
	        alternate             |         选择
	        match                 匹配
	        capture-group         ()        捕获组
	        non-capture-group     (?:...)   非捕获组
	        positive-lookahead    (?=p)     零宽正向先行断言
	        negative-lookahead    (?!p)     零宽负向先行断言
	        quantified            a*        重复节点
	        quantifier            *         量词
	        charset               []        字符集
	        range                 {m, n}    范围
	        literal               a         直接量字符
	        unicode               \uxxxx    Unicode
	        hex                   \x        十六进制
	        octal                 八进制
	        back-reference        \n        反向引用
	        control-character     \cX       控制字符

	        // Token
	        start               ^       开头
	        end                 $       结尾
	        any-character       .       任意字符
	        backspace           [\b]    退格直接量
	        word-boundary       \b      单词边界
	        non-word-boundary   \B      非单词边界
	        digit               \d      ASCII 数字，[0-9]
	        non-digit           \D      非 ASCII 数字，[^0-9]
	        form-feed           \f      换页符
	        line-feed           \n      换行符
	        carriage-return     \r      回车符
	        white-space         \s      空白符
	        non-white-space     \S      非空白符
	        tab                 \t      制表符
	        vertical-tab        \v      垂直制表符
	        word                \w      ASCII 字符，[a-zA-Z0-9]
	        non-word            \W      非 ASCII 字符，[^a-zA-Z0-9]
	        null-character      \o      NUL 字符
	 */
var n=e(3),r=e(5),a={extend:n.extend},o=t(97,122),u=t(65,90),i=t(48,57),l=t(32,47)+t(58,64)+t(91,96)+t(123,126),c=t(32,126),s=" \f\n\r\t\v \u2028\u2029",f={"\\w":o+u+i+"_",// ascii(95, 95)
"\\W":l.replace("_",""),"\\s":s,"\\S":function(){for(var e=c,t=0;t<s.length;t++)e=e.replace(s[t],"");return e}(),"\\d":i,"\\D":o+u+l};
// var ast = RegExpParser.parse(regexp.source)
a.gen=function(e,t,n){return n=n||{guid:1},a[e.type]?a[e.type](e,t,n):a.token(e,t,n)},a.extend({/* jshint unused:false */
token:function(e,t,n){switch(e.type){case"start":case"end":return"";case"any-character":return r.character();case"backspace":case"word-boundary":// TODO
return"";case"non-word-boundary":// TODO
break;case"digit":return r.pick(i.split(""));case"non-digit":return r.pick((o+u+l).split(""));case"form-feed":break;case"line-feed":return e.body||e.text;case"carriage-return":break;case"white-space":return r.pick(s.split(""));case"non-white-space":return r.pick((o+u+i).split(""));case"tab":case"vertical-tab":break;case"word":// \w [a-zA-Z0-9]
return r.pick((o+u+i).split(""));case"non-word":// \W [^a-zA-Z0-9]
return r.pick(l.replace("_","").split(""))}return e.body||e.text},/*
	        {
	            type: 'alternate',
	            offset: 0,
	            text: '',
	            left: {
	                boyd: []
	            },
	            right: {
	                boyd: []
	            }
	        }
	    */
alternate:function(e,t,n){
// node.left/right {}
return this.gen(r.boolean()?e.left:e.right,t,n)},/*
	        {
	            type: 'match',
	            offset: 0,
	            text: '',
	            body: []
	        }
	    */
match:function(e,t,n){t="";
// node.body []
for(var r=0;r<e.body.length;r++)t+=this.gen(e.body[r],t,n);return t},
// ()
"capture-group":function(e,t,n){
// node.body {}
return t=this.gen(e.body,t,n),n[n.guid++]=t,t},
// (?:...)
"non-capture-group":function(e,t,n){
// node.body {}
return this.gen(e.body,t,n)},
// (?=p)
"positive-lookahead":function(e,t,n){
// node.body
return this.gen(e.body,t,n)},
// (?!p)
"negative-lookahead":function(e,t,n){
// node.body
return""},/*
	        {
	            type: 'quantified',
	            offset: 3,
	            text: 'c*',
	            body: {
	                type: 'literal',
	                offset: 3,
	                text: 'c',
	                body: 'c',
	                escaped: false
	            },
	            quantifier: {
	                type: 'quantifier',
	                offset: 4,
	                text: '*',
	                min: 0,
	                max: Infinity,
	                greedy: true
	            }
	        }
	    */
quantified:function(e,t,n){t="";
// node.body {}
for(var r=this.quantifier(e.quantifier),a=0;a<r;a++)t+=this.gen(e.body,t,n);return t},/*
	        quantifier: {
	            type: 'quantifier',
	            offset: 4,
	            text: '*',
	            min: 0,
	            max: Infinity,
	            greedy: true
	        }
	    */
quantifier:function(e,t,n){var a=Math.max(e.min,0),o=isFinite(e.max)?e.max:a+r.integer(3,7);return r.integer(a,o)},/*
	        
	    */
charset:function(e,t,n){
// node.invert
if(e.invert)return this["invert-charset"](e,t,n);
// node.body []
var a=r.pick(e.body);return this.gen(a,t,n)},"invert-charset":function(e,t,n){for(var a,o=c,u=0;u<e.body.length;u++)switch(a=e.body[u],a.type){case"literal":o=o.replace(a.body,"");break;case"range":for(var i=this.gen(a.start,t,n).charCodeAt(),l=this.gen(a.end,t,n).charCodeAt(),s=i;s<=l;s++)o=o.replace(String.fromCharCode(s),"");/* falls through */
default:var d=f[a.text];if(d)for(var p=0;p<=d.length;p++)o=o.replace(d[p],"")}return r.pick(o.split(""))},range:function(e,t,n){
// node.start, node.end
var a=this.gen(e.start,t,n).charCodeAt(),o=this.gen(e.end,t,n).charCodeAt();return String.fromCharCode(r.integer(a,o))},literal:function(e,t,n){return e.escaped?e.body:e.text},
// Unicode \u
unicode:function(e,t,n){return String.fromCharCode(parseInt(e.code,16))},
// 十六进制 \xFF
hex:function(e,t,n){return String.fromCharCode(parseInt(e.code,16))},
// 八进制 \0
octal:function(e,t,n){return String.fromCharCode(parseInt(e.code,8))},
// 反向引用
"back-reference":function(e,t,n){return n[e.code]||""},/*
	        http://en.wikipedia.org/wiki/C0_and_C1_control_codes
	    */
CONTROL_CHARACTER_MAP:function(){for(var e="@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _".split(" "),t="\0        \b \t \n \v \f \r                  ".split(" "),n={},r=0;r<e.length;r++)n[e[r]]=t[r];return n}(),"control-character":function(e,t,n){return this.CONTROL_CHARACTER_MAP[e.code]}}),module.exports=a},/* 23 */
/***/
function(module,exports,e){module.exports=e(24)},/* 24 */
/***/
function(module,exports,e){function t(e,o,u){
// type rule properties items
u=u||[];var i={name:"string"==typeof o?o.replace(n.RE_KEY,"$1"):o,template:e,type:r.type(e),// 可能不准确，例如 { 'name|1': [{}, {} ...] }
rule:a.parse(o)};switch(i.path=u.slice(0),i.path.push(void 0===o?"ROOT":i.name),i.type){case"array":i.items=[],r.each(e,function(e,n){i.items.push(t(e,n,i.path))});break;case"object":i.properties=[],r.each(e,function(e,n){i.properties.push(t(e,n,i.path))})}return i}/*
	    ## toJSONSchema

	    把 Mock.js 风格的数据模板转换成 JSON Schema。

	    > [JSON Schema](http://json-schema.org/)
	 */
var n=e(2),r=e(3),a=e(4);module.exports=t},/* 25 */
/***/
function(module,exports,e){module.exports=e(26)},/* 26 */
/***/
function(module,exports,e){function t(e,t){for(var n=a(e),r=o.diff(n,t),u=0;u<r.length;u++);return r}/*
	    ## valid(template, data)

	    校验真实数据 data 是否与数据模板 template 匹配。
	    
	    实现思路：
	    1. 解析规则。
	        先把数据模板 template 解析为更方便机器解析的 JSON-Schame
	        name               属性名 
	        type               属性值类型
	        template           属性值模板
	        properties         对象属性数组
	        items              数组元素数组
	        rule               属性值生成规则
	    2. 递归验证规则。
	        然后用 JSON-Schema 校验真实数据，校验项包括属性名、值类型、值、值生成规则。

	    提示信息 
	    https://github.com/fge/json-schema-validator/blob/master/src/main/resources/com/github/fge/jsonschema/validator/validation.properties
	    [JSON-Schama validator](http://json-schema-validator.herokuapp.com/)
	    [Regexp Demo](http://demos.forbeslindesay.co.uk/regexp/)
	*/
var n=e(2),r=e(3),a=e(23),o={diff:function(e,t,n){var r=[];
// 先检测名称 name 和类型 type，如果匹配，才有必要继续检测
return this.name(e,t,n,r)&&this.type(e,t,n,r)&&(this.value(e,t,n,r),this.properties(e,t,n,r),this.items(e,t,n,r)),r},/* jshint unused:false */
name:function(e,t,n,r){var a=r.length;return u.equal("name",e.path,n+"",e.name+"",r),r.length===a},type:function(e,t,a,o){var i=o.length;switch(e.type){case"string":
// 跳过含有『占位符』的属性值，因为『占位符』返回值的类型可能和模板不一致，例如 '@int' 会返回一个整形值
if(e.template.match(n.RE_PLACEHOLDER))return!0;break;case"array":if(e.rule.parameters){
// name|count: array
if(void 0!==e.rule.min&&void 0===e.rule.max&&1===e.rule.count)return!0;
// 跳过 name|+inc: array
if(e.rule.parameters[2])return!0}break;case"function":
// 跳过 `'name': function`，因为函数可以返回任何类型的值。
return!0}return u.equal("type",e.path,r.type(t),e.type,o),o.length===i},value:function(e,t,r,a){var o=a.length,i=e.rule,l=e.type;if("object"===l||"array"===l||"function"===l)return!0;
// 无生成规则
if(!i.parameters){switch(l){case"regexp":return u.match("value",e.path,t,e.template,a),a.length===o;case"string":
// 同样跳过含有『占位符』的属性值，因为『占位符』的返回值会通常会与模板不一致
if(e.template.match(n.RE_PLACEHOLDER))return a.length===o}return u.equal("value",e.path,t,e.template,a),a.length===o}
// 有生成规则
var c;switch(l){case"number":var s=(t+"").split(".");s[0]=+s[0],
// 整数部分
// |min-max
void 0!==i.min&&void 0!==i.max&&(u.greaterThanOrEqualTo("value",e.path,s[0],Math.min(i.min,i.max),a),
// , 'numeric instance is lower than the required minimum (minimum: {expected}, found: {actual})')
u.lessThanOrEqualTo("value",e.path,s[0],Math.max(i.min,i.max),a)),
// |count
void 0!==i.min&&void 0===i.max&&u.equal("value",e.path,s[0],i.min,a,"[value] "+r),
// 小数部分
i.decimal&&(
// |dmin-dmax
void 0!==i.dmin&&void 0!==i.dmax&&(u.greaterThanOrEqualTo("value",e.path,s[1].length,i.dmin,a),u.lessThanOrEqualTo("value",e.path,s[1].length,i.dmax,a)),
// |dcount
void 0!==i.dmin&&void 0===i.dmax&&u.equal("value",e.path,s[1].length,i.dmin,a));break;case"boolean":break;case"string":
// 'aaa'.match(/a/g)
c=t.match(new RegExp(e.template,"g")),c=c?c.length:0,
// |min-max
void 0!==i.min&&void 0!==i.max&&(u.greaterThanOrEqualTo("repeat count",e.path,c,i.min,a),u.lessThanOrEqualTo("repeat count",e.path,c,i.max,a)),
// |count
void 0!==i.min&&void 0===i.max&&u.equal("repeat count",e.path,c,i.min,a);break;case"regexp":c=t.match(new RegExp(e.template.source.replace(/^\^|\$$/g,""),"g")),c=c?c.length:0,
// |min-max
void 0!==i.min&&void 0!==i.max&&(u.greaterThanOrEqualTo("repeat count",e.path,c,i.min,a),u.lessThanOrEqualTo("repeat count",e.path,c,i.max,a)),
// |count
void 0!==i.min&&void 0===i.max&&u.equal("repeat count",e.path,c,i.min,a)}return a.length===o},properties:function(e,t,n,a){var o=a.length,i=e.rule,l=r.keys(t);if(e.properties){if(
// 无生成规则
e.rule.parameters?(
// 有生成规则
// |min-max
void 0!==i.min&&void 0!==i.max&&(u.greaterThanOrEqualTo("properties length",e.path,l.length,Math.min(i.min,i.max),a),u.lessThanOrEqualTo("properties length",e.path,l.length,Math.max(i.min,i.max),a)),
// |count
void 0!==i.min&&void 0===i.max&&1!==i.count&&u.equal("properties length",e.path,l.length,i.min,a)):u.equal("properties length",e.path,l.length,e.properties.length,a),a.length!==o)return!1;for(var c=0;c<l.length;c++)a.push.apply(a,this.diff(function(){var t;return r.each(e.properties,function(e){e.name===l[c]&&(t=e)}),t||e.properties[c]}(),t[l[c]],l[c]));return a.length===o}},items:function(e,t,n,r){var a=r.length;if(e.items){var o=e.rule;
// 无生成规则
if(e.rule.parameters){
// |count
if(
// 有生成规则
// |min-max
void 0!==o.min&&void 0!==o.max&&(u.greaterThanOrEqualTo("items",e.path,t.length,Math.min(o.min,o.max)*e.items.length,r,"[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements"),u.lessThanOrEqualTo("items",e.path,t.length,Math.max(o.min,o.max)*e.items.length,r,"[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements")),void 0!==o.min&&void 0===o.max){
// |1, |>1
if(1===o.count)return r.length===a;u.equal("items length",e.path,t.length,o.min*e.items.length,r)}
// |+inc
if(o.parameters[2])return r.length===a}else u.equal("items length",e.path,t.length,e.items.length,r);if(r.length!==a)return!1;for(var i=0;i<t.length;i++)r.push.apply(r,this.diff(e.items[i%e.items.length],t[i],i%e.items.length));return r.length===a}}},u={message:function(e){return(e.message||"[{utype}] Expect {path}'{ltype} {action} {expected}, but is {actual}").replace("{utype}",e.type.toUpperCase()).replace("{ltype}",e.type.toLowerCase()).replace("{path}",r.isArray(e.path)&&e.path.join(".")||e.path).replace("{action}",e.action).replace("{expected}",e.expected).replace("{actual}",e.actual)},equal:function(e,t,n,r,a,o){if(n===r)return!0;switch(e){case"type":
// 正则模板 === 字符串最终值
if("regexp"===r&&"string"===n)return!0}var i={path:t,type:e,actual:n,expected:r,action:"is equal to",message:o};return i.message=u.message(i),a.push(i),!1},
// actual matches expected
match:function(e,t,n,r,a,o){if(r.test(n))return!0;var i={path:t,type:e,actual:n,expected:r,action:"matches",message:o};return i.message=u.message(i),a.push(i),!1},notEqual:function(e,t,n,r,a,o){if(n!==r)return!0;var i={path:t,type:e,actual:n,expected:r,action:"is not equal to",message:o};return i.message=u.message(i),a.push(i),!1},greaterThan:function(e,t,n,r,a,o){if(n>r)return!0;var i={path:t,type:e,actual:n,expected:r,action:"is greater than",message:o};return i.message=u.message(i),a.push(i),!1},lessThan:function(e,t,n,r,a,o){if(n<r)return!0;var i={path:t,type:e,actual:n,expected:r,action:"is less to",message:o};return i.message=u.message(i),a.push(i),!1},greaterThanOrEqualTo:function(e,t,n,r,a,o){if(n>=r)return!0;var i={path:t,type:e,actual:n,expected:r,action:"is greater than or equal to",message:o};return i.message=u.message(i),a.push(i),!1},lessThanOrEqualTo:function(e,t,n,r,a,o){if(n<=r)return!0;var i={path:t,type:e,actual:n,expected:r,action:"is less than or equal to",message:o};return i.message=u.message(i),a.push(i),!1}};t.Diff=o,t.Assert=u,module.exports=t},/* 27 */
/***/
function(module,exports,e){module.exports=e(28)},/* 28 */
/***/
function(module,exports,e){/*
	    MockXMLHttpRequest
	*/
function t(){
// 初始化 custom 对象，用于存储自定义属性
this.custom={events:{},requestHeaders:{},responseHeaders:{}}}
// Inspired by jQuery
function n(){function e(){try{return new window._XMLHttpRequest}catch(e){}}var t=function(){var e=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,t=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,n=location.href,r=t.exec(n.toLowerCase())||[];return e.test(r[1])}();return window.ActiveXObject?!t&&e()||function(){try{return new window._ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}():e()}
// 查找与请求参数匹配的数据模板：URL，Type
function r(e){function n(e,t){return"string"===o.type(e)?e===t:"regexp"===o.type(e)?e.test(t):void 0}for(var r in t.Mock._mocked){var a=t.Mock._mocked[r];if((!a.rurl||n(a.rurl,e.url))&&(!a.rtype||n(a.rtype,e.type.toLowerCase())))
// console.log('[mock]', options.url, '>', item.rurl)
return a}}
// 数据模板 ＝> 响应数据
function a(e,n){return o.isFunction(e.template)?e.template(n):t.Mock.mock(e.template)}/* global window, document, location, Event, setTimeout */
/*
	    ## MockXMLHttpRequest

	    期望的功能：
	    1. 完整地覆盖原生 XHR 的行为
	    2. 完整地模拟原生 XHR 的行为
	    3. 在发起请求时，自动检测是否需要拦截
	    4. 如果不必拦截，则执行原生 XHR 的行为
	    5. 如果需要拦截，则执行虚拟 XHR 的行为
	    6. 兼容 XMLHttpRequest 和 ActiveXObject
	        new window.XMLHttpRequest()
	        new window.ActiveXObject("Microsoft.XMLHTTP")

	    关键方法的逻辑：
	    * new   此时尚无法确定是否需要拦截，所以创建原生 XHR 对象是必须的。
	    * open  此时可以取到 URL，可以决定是否进行拦截。
	    * send  此时已经确定了请求方式。

	    规范：
	    http://xhr.spec.whatwg.org/
	    http://www.w3.org/TR/XMLHttpRequest2/

	    参考实现：
	    https://github.com/philikon/MockHttpRequest/blob/master/lib/mock.js
	    https://github.com/trek/FakeXMLHttpRequest/blob/master/fake_xml_http_request.js
	    https://github.com/ilinsky/xmlhttprequest/blob/master/XMLHttpRequest.js
	    https://github.com/firebug/firebug-lite/blob/master/content/lite/xhr.js
	    https://github.com/thx/RAP/blob/master/lab/rap.plugin.xinglie.js

	    **需不需要全面重写 XMLHttpRequest？**
	        http://xhr.spec.whatwg.org/#interface-xmlhttprequest
	        关键属性 readyState、status、statusText、response、responseText、responseXML 是 readonly，所以，试图通过修改这些状态，来模拟响应是不可行的。
	        因此，唯一的办法是模拟整个 XMLHttpRequest，就像 jQuery 对事件模型的封装。

	    // Event handlers
	    onloadstart         loadstart
	    onprogress          progress
	    onabort             abort
	    onerror             error
	    onload              load
	    ontimeout           timeout
	    onloadend           loadend
	    onreadystatechange  readystatechange
	 */
var o=e(3);
// 备份原生 XMLHttpRequest
window._XMLHttpRequest=window.XMLHttpRequest,window._ActiveXObject=window.ActiveXObject;/*
	    PhantomJS
	    TypeError: '[object EventConstructor]' is not a constructor (evaluating 'new Event("readystatechange")')

	    https://github.com/bluerail/twitter-bootstrap-rails-confirm/issues/18
	    https://github.com/ariya/phantomjs/issues/11289
	*/
try{new window.Event("custom")}catch(e){window.Event=function(e,t,n,r){var a=document.createEvent("CustomEvent");// MUST be 'CustomEvent'
return a.initCustomEvent(e,t,n,r),a}}var u={
// The object has been constructed.
UNSENT:0,
// The open() method has been successfully invoked.
OPENED:1,
// All redirects (if any) have been followed and all HTTP headers of the response have been received.
HEADERS_RECEIVED:2,
// The response's body is being received.
LOADING:3,
// The data transfer has been completed or something went wrong during the transfer (e.g. infinite redirects).
DONE:4},i="readystatechange loadstart progress abort error load timeout loadend".split(" "),l="timeout withCredentials".split(" "),c="readyState responseURL status statusText responseType response responseText responseXML".split(" "),s={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported"};t._settings={timeout:"10-100"},t.setup=function(e){return o.extend(t._settings,e),t._settings},o.extend(t,u),o.extend(t.prototype,u),
// 标记当前对象为 MockXMLHttpRequest
t.prototype.mock=!0,
// 是否拦截 Ajax 请求
t.prototype.match=!1,
// 初始化 Request 相关的属性和方法
o.extend(t.prototype,{
// https://xhr.spec.whatwg.org/#the-open()-method
// Sets the request method, request URL, and synchronous flag.
open:function(e,a,u,s,f){function d(e){
// 同步属性 NativeXMLHttpRequest => MockXMLHttpRequest
for(var t=0;t<c.length;t++)try{p[c[t]]=m[c[t]]}catch(e){}
// 触发 MockXMLHttpRequest 上的同名事件
p.dispatchEvent(new Event(e.type))}var p=this;o.extend(this.custom,{method:e,url:a,async:"boolean"!=typeof u||u,username:s,password:f,options:{url:a,type:e}}),this.custom.timeout=function(e){if("number"==typeof e)return e;if("string"==typeof e&&!~e.indexOf("-"))return parseInt(e,10);if("string"==typeof e&&~e.indexOf("-")){var t=e.split("-"),n=parseInt(t[0],10),r=parseInt(t[1],10);return Math.round(Math.random()*(r-n))+n}}(t._settings.timeout);
// 查找与请求参数匹配的数据模板
var h=r(this.custom.options);
// 如果未找到匹配的数据模板，则采用原生 XHR 发送请求。
if(h)
// 找到了匹配的数据模板，开始拦截 XHR 请求
this.match=!0,this.custom.template=h,this.readyState=t.OPENED,this.dispatchEvent(new Event("readystatechange"));else{
// 创建原生 XHR 对象，调用原生 open()，监听所有原生事件
var m=n();this.custom.xhr=m;
// 初始化所有事件，用于监听原生 XHR 对象的事件
for(var y=0;y<i.length;y++)m.addEventListener(i[y],d);
// xhr.open()
s?m.open(e,a,u,s,f):m.open(e,a,u);
// 同步属性 MockXMLHttpRequest => NativeXMLHttpRequest
for(var b=0;b<l.length;b++)try{m[l[b]]=p[l[b]]}catch(e){}}},
// https://xhr.spec.whatwg.org/#the-setrequestheader()-method
// Combines a header in author request headers.
setRequestHeader:function(e,t){
// 原生 XHR
if(!this.match)return void this.custom.xhr.setRequestHeader(e,t);
// 拦截 XHR
var n=this.custom.requestHeaders;n[e]?n[e]+=","+t:n[e]=t},timeout:0,withCredentials:!1,upload:{},
// https://xhr.spec.whatwg.org/#the-send()-method
// Initiates the request.
send:function(e){// 同步
function n(){r.readyState=t.HEADERS_RECEIVED,r.dispatchEvent(new Event("readystatechange")),r.readyState=t.LOADING,r.dispatchEvent(new Event("readystatechange")),r.status=200,r.statusText=s[200],
// fix #92 #93 by @qddegtya
r.response=r.responseText=JSON.stringify(a(r.custom.template,r.custom.options),null,4),r.readyState=t.DONE,r.dispatchEvent(new Event("readystatechange")),r.dispatchEvent(new Event("load")),r.dispatchEvent(new Event("loadend"))}var r=this;
// 原生 XHR
if(this.custom.options.body=e,!this.match)return void this.custom.xhr.send(e);
// 拦截 XHR
// X-Requested-With header
this.setRequestHeader("X-Requested-With","MockXMLHttpRequest"),
// loadstart The fetch initiates.
this.dispatchEvent(new Event("loadstart")),this.custom.async?setTimeout(n,this.custom.timeout):n()},
// https://xhr.spec.whatwg.org/#the-abort()-method
// Cancels any network activity.
abort:function(){
// 原生 XHR
if(!this.match)return void this.custom.xhr.abort();
// 拦截 XHR
this.readyState=t.UNSENT,this.dispatchEvent(new Event("abort",!1,!1,this)),this.dispatchEvent(new Event("error",!1,!1,this))}}),
// 初始化 Response 相关的属性和方法
o.extend(t.prototype,{responseURL:"",status:t.UNSENT,statusText:"",
// https://xhr.spec.whatwg.org/#the-getresponseheader()-method
getResponseHeader:function(e){
// 原生 XHR
// 原生 XHR
return this.match?this.custom.responseHeaders[e.toLowerCase()]:this.custom.xhr.getResponseHeader(e)},
// https://xhr.spec.whatwg.org/#the-getallresponseheaders()-method
// http://www.utf8-chartable.de/
getAllResponseHeaders:function(){
// 原生 XHR
if(!this.match)return this.custom.xhr.getAllResponseHeaders();
// 拦截 XHR
var e=this.custom.responseHeaders,t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+": "+e[n]+"\r\n");return t},overrideMimeType:function(){},responseType:"",// '', 'text', 'arraybuffer', 'blob', 'document', 'json'
response:null,responseText:"",responseXML:null}),
// EventTarget
o.extend(t.prototype,{addEventListener:function(e,t){var n=this.custom.events;n[e]||(n[e]=[]),n[e].push(t)},removeEventListener:function(e,t){for(var n=this.custom.events[e]||[],r=0;r<n.length;r++)n[r]===t&&n.splice(r--,1)},dispatchEvent:function(e){for(var t=this.custom.events[e.type]||[],n=0;n<t.length;n++)t[n].call(this,e);var r="on"+e.type;this[r]&&this[r](e)}}),module.exports=t}])})},/***/
500:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=e(115),u=t(o),i=e(13),l=t(i),c=e(88),s=t(c),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=e(0),p=t(d),h=e(62),m=(s.default.Meta,function(e){function t(){var e,a,o,u;n(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={collapsed:!1},o.toggleCollapsed=function(){o.setState({collapsed:!o.state.collapsed})},u=a,r(o,u)}return a(t,e),f(t,[{key:"onSelect",value:function(){}},{key:"render",value:function(){this.props.location,0==this.state.collapsed?(p.default.createElement(l.default,{type:"menu-unfold",onClick:this.toggleCollapsed}),p.default.createElement(l.default,{type:"edit"}),p.default.createElement(l.default,{type:"ellipsis"})):p.default.createElement(l.default,{type:"menu-fold",onClick:this.toggleCollapsed});return p.default.createElement("div",{className:"app-header",style:{width:this.state.collapsed?"80px":"220px"}},p.default.createElement(u.default,{mode:"inline",onSelect:this.onSelect.bind(this),defaultSelectedKeys:["0"],inlineCollapsed:this.state.collapsed},p.default.createElement(u.default.Item,{key:"0"},p.default.createElement(h.Link,{to:"dashboard"},p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"首页"))),p.default.createElement(u.default.Item,{key:"1"},p.default.createElement(h.Link,{to:"job"},p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"职位管理"))),p.default.createElement(u.default.Item,{key:"2"},p.default.createElement(h.Link,{to:"resume"},p.default.createElement(l.default,{type:"appstore"}),p.default.createElement("span",null,"简历管理"))),p.default.createElement(u.default.SubMenu,{key:"3",title:p.default.createElement("span",null,p.default.createElement(l.default,{type:"appstore"}),p.default.createElement("span",null,"面试管理"))},p.default.createElement(u.default.Item,{key:"3-1"},p.default.createElement(h.Link,{to:"interview"},p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"面试管理"))),p.default.createElement(u.default.Item,{key:"3-2"},p.default.createElement(h.Link,{to:"interview/calendar"},p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"日历查看面试")))),p.default.createElement(u.default.Item,{key:"4"},p.default.createElement(h.Link,{to:"elite"},p.default.createElement(l.default,{type:"appstore"}),p.default.createElement("span",null,"人才库"))),p.default.createElement(u.default.Item,{key:"5"},p.default.createElement(h.Link,{to:"member"},p.default.createElement(l.default,{type:"appstore"}),p.default.createElement("span",null,"员工管理"))),p.default.createElement(u.default.Item,{key:"6"},p.default.createElement(h.Link,{to:"sound"},p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"通话记录"))),p.default.createElement(u.default.Item,{key:"7"},p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"诚信库")),p.default.createElement(u.default.SubMenu,{key:"8",title:p.default.createElement("span",null,p.default.createElement(l.default,{type:"appstore"}),p.default.createElement("span",null,"统计分析"))},p.default.createElement(u.default.Item,{key:"8-1"},p.default.createElement(h.Link,null,p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"简历分析"))),p.default.createElement(u.default.Item,{key:"8-2"},p.default.createElement(h.Link,null,p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"通信分析"))),p.default.createElement(u.default.Item,{key:"8-3"},p.default.createElement(h.Link,null,p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"HR招聘分析")))),p.default.createElement(u.default.Item,{key:"9"},p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"微信管理")),p.default.createElement(u.default.SubMenu,{key:"10",title:p.default.createElement("span",null,p.default.createElement(l.default,{type:"appstore"}),p.default.createElement("span",null,"系统设置"))},p.default.createElement(u.default.Item,{key:"10-1"},p.default.createElement(h.Link,null,p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"渠道设置"))),p.default.createElement(u.default.Item,{key:"10-2"},p.default.createElement(h.Link,{to:"settings/field"},p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"系统字段"))),p.default.createElement(u.default.Item,{key:"10-3"},p.default.createElement(h.Link,{to:"settings/remind"},p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"提醒设置"))),p.default.createElement(u.default.Item,{key:"10-4"},p.default.createElement(h.Link,null,p.default.createElement(l.default,{type:"pie-chart"}),p.default.createElement("span",null,"短信模板"))))))}}]),t}(p.default.Component));exports.default=m},/***/
554:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),l=function(e){function u(){return t(this,u),n(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return r(u,e),o(u,[{key:"render",value:function(){return i.default.createElement("div",a({className:"content"},this.props,{style:{flex:"1",overflow:"hidden"}}))}}]),u}(i.default.Component);exports.default=l},/***/
555:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.RegisterViewContainer=exports.LoginViewContainer=void 0;var n=e(0),r=(t(n),e(51)),a=e(63),o=e(574),u=t(o),i=e(659),l=t(i),c=e(660),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),f=function(e){return{reduce:e.reduce}},d=function(e){return{actions:(0,r.bindActionCreators)(s,e),dispatch:e}},p=(0,a.connect)(f,d)(u.default),h=(0,a.connect)(f,d)(l.default);exports.LoginViewContainer=p,exports.RegisterViewContainer=h},/***/
574:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o,u,i=e(104),l=t(i),c=e(17),s=t(c),f=e(65),d=t(f),p=e(179),h=t(p),m=e(99),y=t(m),b=e(107),v=t(b),g=e(30),O=t(g),E=e(13),w=t(E),j=e(300),x=t(j),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),S=e(0),C=t(S),P=e(658),R=t(P),T=h.default.TabPane,A=l.default.Item,M=l.default.create,I=(o=M())(u=function(e){function t(){var e,a,o,u;n(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={count:0,type:"account"},o.onSwitch=function(e){o.setState({type:e})},o.onGetCaptcha=function(){var e=59;o.setState({count:e}),o.interval=setInterval(function(){e-=1,o.setState({count:e}),0===e&&clearInterval(o.interval)},1e3)},o.handleSubmit=function(e){e.preventDefault(),o.props.form.validateFields(function(e,t){})},o.renderMessage=function(e){return C.default.createElement(x.default,{style:{marginBottom:24},message:e,type:"error",showIcon:!0})},u=a,r(o,u)}return a(t,e),k(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props,n=(t.form,t.login),r=this.state,a=r.count,o=r.type;
// login.status === 'error' &&
// login.type === 'account' &&
// login.submitting === false &&
// login.status === 'error' &&
// login.type === 'mobile' &&
// login.submitting === false &&
return C.default.createElement(l.default,{onSubmit:this.handleSubmit},C.default.createElement(h.default,{animated:!1,className:R.default.tabs,activeKey:o,onChange:this.onSwitch},C.default.createElement(T,{tab:"账户密码登录",key:"account"},this.renderMessage("账户或密码错误"),C.default.createElement(A,null,e("userName",{rules:[{required:"account"===o,message:"请输入账户名！"}]})(C.default.createElement(O.default,{size:"large",prefix:C.default.createElement(w.default,{type:"user",className:R.default.prefixIcon}),placeholder:"admin"}))),C.default.createElement(A,null,e("password",{rules:[{required:"account"===o,message:"请输入密码！"}]})(C.default.createElement(O.default,{size:"large",prefix:C.default.createElement(w.default,{type:"lock",className:R.default.prefixIcon}),type:"password",placeholder:"888888"})))),C.default.createElement(T,{tab:"手机号登录",key:"mobile"},this.renderMessage("验证码错误"),C.default.createElement(A,null,e("mobile",{rules:[{required:"mobile"===o,message:"请输入手机号！"},{pattern:/^1\d{10}$/,message:"手机号格式错误！"}]})(C.default.createElement(O.default,{size:"large",prefix:C.default.createElement(w.default,{type:"mobile",className:R.default.prefixIcon}),placeholder:"手机号"}))),C.default.createElement(A,null,C.default.createElement(y.default,{gutter:8},C.default.createElement(v.default,{span:16},e("captcha",{rules:[{required:"mobile"===o,message:"请输入验证码！"}]})(C.default.createElement(O.default,{size:"large",prefix:C.default.createElement(w.default,{type:"mail",className:R.default.prefixIcon}),placeholder:"验证码"}))),C.default.createElement(v.default,{span:8},C.default.createElement(s.default,{disabled:a,className:R.default.getCaptcha,size:"large",onClick:this.onGetCaptcha},a?a+" s":"获取验证码")))))),C.default.createElement(A,{className:R.default.additional},e("remember",{valuePropName:"checked",initialValue:!0})(C.default.createElement(d.default,{className:R.default.autoLogin},"自动登录")),C.default.createElement("a",{className:R.default.forgot,href:""},"忘记密码"),C.default.createElement(s.default,{size:"large",loading:n,className:R.default.submit,type:"primary",htmlType:"submit"},"登录")))}}]),t}(S.Component))||u,L=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),k(t,[{key:"handleSubmit",value:function(e){this.props.actions}},{key:"render",value:function(){return C.default.createElement("div",{className:R.default.main},C.default.createElement(I,{onSubmit:this.handleSubmit.bind(this),actions:this.props.actions}),C.default.createElement("div",{className:R.default.other},"其他登录方式",C.default.createElement("span",{className:R.default.iconAlipay}),C.default.createElement("span",{className:R.default.iconTaobao}),C.default.createElement("span",{className:R.default.iconWeibo})))}}]),t}(S.Component);exports.default=L},/***/
64:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.customRules=exports.FormItem=exports.AdvancedForm=exports.default=void 0;var o,u,i,l,c,s,f,d,p=e(104),h=t(p),m=e(27),y=t(m),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=e(0),O=t(g),E=e(1),w=t(E),j=h.default.create,x=(y.default.Option,(o=j())((l=i=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),v(t,[{key:"getChildContext",/*
    constructor(props) {
      super(props);
      let {saveRef,form,ref}= props
    //  saveRef && saveRef.call(this,form)
    }
    */
value:function(){return{form:this.props.form}}}]),t}(h.default),i.childContextTypes={form:w.default.any},u=l))||u);/**
 * [AdvancedForm  高级Form组件带valuesChange特征]
 * @extends BaseForm
 */
exports.default=x;var k=(c=j({onValuesChange:function(e,t){e.onSubmit(t)}}))(s=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(x))||s,S=(d=f=function(e){function t(){var e,a,o,u;n(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={childData:[]},u=a,r(o,u)}return a(t,e),v(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.children,n=(e.name,e.label,t);void 0!=n.props.fetch&&this.fetchData(n.props.fetch)}},{key:"fetchData",value:function(e){var t=this;fetch(e).then(function(e){return e.json()}).then(function(e){t.setState({childData:e.list})})}},{key:"renderField",value:function(){var e=this.props,t=e.children,n=(e.name,e.label,this.state.childData),r=t;return 0==n.length?O.default.createElement(r.type,r.props):O.default.createElement(r.type,r.props,n.map(function(e,t){return r.props.renderItem(e,t)}))}},{key:"render",value:function(){var e=this.props.children,t=e.props,n=(t.children,t.name),r=t.label,a=(t.rules,this.state.childData,this.context.form.getFieldDecorator);return O.default.createElement(h.default.Item,b({label:r},this.props),a(n,b({},e.props))(this.renderField()))}}]),t}(g.Component),f.contextTypes={form:w.default.object},d),C={handleConfirmPassword:function(e,t,n){t&&"123456"!==t&&n("两次输入不一致！"),
// Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
n()},handlerWeekPassword:function(e,t,n){/^\d{6}$/.test(t)&&n("密码为弱密码！"),
// Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
n()}};exports.AdvancedForm=k,exports.FormItem=S,exports.customRules=C},/***/
658:/***/
function(module,exports){},/***/
659:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var o,u,i=e(88),l=t(i),c=e(104),s=t(c),f=e(17),d=t(f),p=e(30),h=t(p),m=e(13),y=t(m),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=e(0),g=t(v),O=e(1),E=(t(O),s.default.Item),w=s.default.create,j=(o=w())(u=function(e){function t(){var e,a,o,u;n(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleSubmit=function(e){e.preventDefault(),o.props.form.validateFields(function(e,t){})},u=a,r(o,u)}return a(t,e),b(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return g.default.createElement(s.default,{onSubmit:this.handleSubmit,className:"login-form"},g.default.createElement(E,null,e("userName",{rules:[{required:!0,message:"Please input your username!"}]})(g.default.createElement(h.default,{prefix:g.default.createElement(y.default,{type:"user",style:{fontSize:13}}),placeholder:"Username"}))),g.default.createElement(E,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(g.default.createElement(h.default,{prefix:g.default.createElement(y.default,{type:"lock",style:{fontSize:13}}),type:"password",placeholder:"Password"}))),g.default.createElement(ButtonToolbar,null,g.default.createElement(d.default,{bsStyle:"primary",type:"submit",disable:submitting},"Register")))}}]),t}(v.Component))||u,x=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"handleSubmit",value:function(e){this.props.actions.goLogin()}},{key:"render",value:function(){return g.default.createElement(l.default,{header:"Register User"},g.default.createElement(j,{onSubmit:this.handleSubmit.bind(this)}))}}]),t}(v.Component);exports.default=x},/***/
660:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return s({type:m.AUTH_SUCCESS},e)}function r(e){return{type:m.AUTH_FAILURE,msg:e.msg}}function a(e,t){return function(a){return(new h.default).fetchLogin({username:e,password:t}).then(function(e){if("ok"!=e.msg)return a(r(e));a(n(e.data))}).catch(function(e){return a(r(e))})}}function o(e){return function(t){return(new h.default).fetchLogout({userid:e}).then(function(e){t(n(e.data))}).catch(function(e){return t(r(e))})}}function u(){return function(e){return e(d.default.push("/register"))}}function i(){return function(e){return e(d.default.push("/login"))}}function l(e){return function(e){return e(d.default.push("/login"))}}function c(e,t){return function(e){return e(d.default.push("/dashboard/"))}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONSTANTS=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};exports.doLogin=a,exports.doLogout=o,exports.goRegister=u,exports.goLogin=i,exports.registerAction=l,exports.loginAction=c;var f=e(301),d=t(f),p=e(663),h=t(p),m=exports.CONSTANTS={LOGIN:"LOGIN",LOGOUT:"LOGOUT",SIGIN:"SIGIN",AUTH_FAILURE:"AUTH_FAILURE",AUTH_PROCESS:"AUTH_PROCESS",AUTH_SUCCESS:"AUTH_SUCCESS",AUTH_VERIFY:"AUTH_VERIFY"}},/***/
661:/***/
function(module,exports,e){"use strict";/**
 * This function synchronizes your history state with the Redux store.
 * Location changes flow from history to the store. An enhanced history is
 * returned with a listen method that responds to store updates for location.
 *
 * When this history is provided to the router, this means the location data
 * will flow like this:
 * history.push -> store.dispatch -> enhancedHistory.listen -> router
 * This ensures that when the store state changes due to a replay or other
 * event, the router will be updated appropriately and can transition to the
 * correct router state.
 */
function t(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=o.selectLocationState,i=void 0===u?a:u,l=o.adjustUrlOnReplay,c=void 0===l||l;
// Ensure that the reducer is mounted on the store and functioning properly.
if(void 0===i(t.getState()))throw new Error("Expected the routing state to be available either as `state.routing` or as the custom expression you can specify as `selectLocationState` in the `syncHistoryWithStore()` options. Ensure you have added the `routerReducer` to your store's reducers via `combineReducers` or whatever method you use to isolate your reducers.");var s=void 0,f=void 0,d=void 0,p=void 0,h=void 0,m=function(e){return i(t.getState()).locationBeforeTransitions||(e?s:void 0)};
// If the store is replayed, update the URL in the browser to match.
if(
// Init initialLocation with potential location in store
s=m(),c){var y=function(){var t=m(!0);h!==t&&s!==t&&(
// Update address bar to reflect store state
f=!0,h=t,e.transitionTo(n({},t,{action:"PUSH"})),f=!1)};d=t.subscribe(y),y()}
// Whenever location changes, dispatch an action to get it in the store
var b=function(e){
// ... unless we just caused that location change
f||(
// Remember where we are
h=e,
// Are we being called for the first time?
!s&&(
// Remember as a fallback in case state is reset
s=e,m())||
// Tell the store to update by dispatching an action
t.dispatch({type:r.LOCATION_CHANGE,payload:e}))};
// The enhanced history uses store as source of truth
// History 3.x doesn't call listen synchronously, so fire the initial location change ourselves
return p=e.listen(b),e.getCurrentLocation&&b(e.getCurrentLocation()),n({},e,{
// The listeners are subscribed to the store instead of history
listen:function(n){
// Copy of last location.
var r=m(!0),a=!1,o=t.subscribe(function(){var e=m(!0);e!==r&&(r=e,a||n(r))});
// Let user unsubscribe later
// History 2.x listeners expect a synchronous call. Make the first call to the
// listener after subscribing to the store, in case the listener causes a
// location change (e.g. when it redirects)
return e.getCurrentLocation||n(r),function(){a=!0,o()}},
// It also provides a way to destroy internal listeners
unsubscribe:function(){c&&d(),p()}})}Object.defineProperty(exports,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};exports.default=t;var r=e(302),a=function(e){return e.routing}},/***/
662:/***/
function(module,exports,e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}/**
 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
 * provided history object. This will prevent these actions from reaching your
 * reducer or any middleware that comes after this one.
 */
function n(e){return function(){return function(n){return function(a){if(a.type!==r.CALL_HISTORY_METHOD)return n(a);var o=a.payload,u=o.method,i=o.args;e[u].apply(e,t(i))}}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var r=e(303)},/***/
663:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(39),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){function o(e){return t(this,o),n(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e))}return r(o,e),a(o,[{key:"fetchLogin",value:function(e){return this.fetchPost("http://192.168.1.78:3010/passport/login",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchLogout",value:function(e){return this.fetchPost("http://192.168.1.78:3010/passport/logout",{body:JSON.stringify(e)}).catch(this.fetchCatch)}}]),o}(u.default);exports.default=i},/***/
664:/***/
function(module,exports,e){"use strict";var t=e(305),n=e(306),r={brackets:function(e){// eslint-disable-line func-name-matching
return e+"[]"},indices:function(e,t){// eslint-disable-line func-name-matching
return e+"["+t+"]"},repeat:function(e){// eslint-disable-line func-name-matching
return e}},a=Date.prototype.toISOString,o={delimiter:"&",encode:!0,encoder:t.encode,encodeValuesOnly:!1,serializeDate:function(e){// eslint-disable-line func-name-matching
return a.call(e)},skipNulls:!1,strictNullHandling:!1},u=function e(// eslint-disable-line func-name-matching
n,r,a,u,i,l,c,s,f,d,p,h){var m=n;if("function"==typeof c)m=c(r,m);else if(m instanceof Date)m=d(m);else if(null===m){if(u)return l&&!h?l(r,o.encoder):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||t.isBuffer(m)){if(l){return[p(h?r:l(r,o.encoder))+"="+p(l(m,o.encoder))]}return[p(r)+"="+p(String(m))]}var y=[];if(void 0===m)return y;var b;if(Array.isArray(c))b=c;else{var v=Object.keys(m);b=s?v.sort(s):v}for(var g=0;g<b.length;++g){var O=b[g];i&&null===m[O]||(y=Array.isArray(m)?y.concat(e(m[O],a(r,O),a,u,i,l,c,s,f,d,p,h)):y.concat(e(m[O],r+(f?"."+O:"["+O+"]"),a,u,i,l,c,s,f,d,p,h)))}return y};module.exports=function(e,a){var i=e,l=a?t.assign({},a):{};if(null!==l.encoder&&void 0!==l.encoder&&"function"!=typeof l.encoder)throw new TypeError("Encoder has to be a function.");var c=void 0===l.delimiter?o.delimiter:l.delimiter,s="boolean"==typeof l.strictNullHandling?l.strictNullHandling:o.strictNullHandling,f="boolean"==typeof l.skipNulls?l.skipNulls:o.skipNulls,d="boolean"==typeof l.encode?l.encode:o.encode,p="function"==typeof l.encoder?l.encoder:o.encoder,h="function"==typeof l.sort?l.sort:null,m=void 0!==l.allowDots&&l.allowDots,y="function"==typeof l.serializeDate?l.serializeDate:o.serializeDate,b="boolean"==typeof l.encodeValuesOnly?l.encodeValuesOnly:o.encodeValuesOnly;if(void 0===l.format)l.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,l.format))throw new TypeError("Unknown format option provided.");var v,g,O=n.formatters[l.format];"function"==typeof l.filter?(g=l.filter,i=g("",i)):Array.isArray(l.filter)&&(g=l.filter,v=g);var E=[];if("object"!=typeof i||null===i)return"";var w;w=l.arrayFormat in r?l.arrayFormat:"indices"in l?l.indices?"indices":"repeat":"indices";var j=r[w];v||(v=Object.keys(i)),h&&v.sort(h);for(var x=0;x<v.length;++x){var k=v[x];f&&null===i[k]||(E=E.concat(u(i[k],k,j,s,f,d?p:null,g,h,m,y,O,b)))}var S=E.join(c),C=!0===l.addQueryPrefix?"?":"";return S.length>0?C+S:""}},/***/
665:/***/
function(module,exports,e){"use strict";var t=e(305),n=Object.prototype.hasOwnProperty,r={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:t.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var a={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,u=t.parameterLimit===1/0?void 0:t.parameterLimit,i=o.split(t.delimiter,u),l=0;l<i.length;++l){var c,s,f=i[l],d=f.indexOf("]="),p=-1===d?f.indexOf("="):d+1;-1===p?(c=t.decoder(f,r.decoder),s=t.strictNullHandling?null:""):(c=t.decoder(f.slice(0,p),r.decoder),s=t.decoder(f.slice(p+1),r.decoder)),n.call(a,c)?a[c]=[].concat(a[c]).concat(s):a[c]=s}return a},o=function(e,t,n){for(var r=t,a=e.length-1;a>=0;--a){var o,u=e[a];if("[]"===u)o=[],o=o.concat(r);else{o=n.plainObjects?Object.create(null):{};var i="["===u.charAt(0)&&"]"===u.charAt(u.length-1)?u.slice(1,-1):u,l=parseInt(i,10);!isNaN(l)&&u!==i&&String(l)===i&&l>=0&&n.parseArrays&&l<=n.arrayLimit?(o=[],o[l]=r):o[i]=r}r=o}return r},u=function(e,t,r){if(e){
// Transform dot notation to bracket notation
var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,u=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,l=u.exec(a),c=l?a.slice(0,l.index):a,s=[];if(c){
// If we aren't using plain objects, optionally prefix keys
// that would overwrite object prototype properties
if(!r.plainObjects&&n.call(Object.prototype,c)&&!r.allowPrototypes)return;s.push(c)}for(
// Loop through children appending to the array until we hit depth
var f=0;null!==(l=i.exec(a))&&f<r.depth;){if(f+=1,!r.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;s.push(l[1])}
// If there's a remainder, just add whatever is left
return l&&s.push("["+a.slice(l.index)+"]"),o(s,t,r)}};module.exports=function(e,n){var o=n?t.assign({},n):{};if(null!==o.decoder&&void 0!==o.decoder&&"function"!=typeof o.decoder)throw new TypeError("Decoder has to be a function.");if(o.ignoreQueryPrefix=!0===o.ignoreQueryPrefix,o.delimiter="string"==typeof o.delimiter||t.isRegExp(o.delimiter)?o.delimiter:r.delimiter,o.depth="number"==typeof o.depth?o.depth:r.depth,o.arrayLimit="number"==typeof o.arrayLimit?o.arrayLimit:r.arrayLimit,o.parseArrays=!1!==o.parseArrays,o.decoder="function"==typeof o.decoder?o.decoder:r.decoder,o.allowDots="boolean"==typeof o.allowDots?o.allowDots:r.allowDots,o.plainObjects="boolean"==typeof o.plainObjects?o.plainObjects:r.plainObjects,o.allowPrototypes="boolean"==typeof o.allowPrototypes?o.allowPrototypes:r.allowPrototypes,o.parameterLimit="number"==typeof o.parameterLimit?o.parameterLimit:r.parameterLimit,o.strictNullHandling="boolean"==typeof o.strictNullHandling?o.strictNullHandling:r.strictNullHandling,""===e||null===e||void 0===e)return o.plainObjects?Object.create(null):{};for(var i="string"==typeof e?a(e,o):e,l=o.plainObjects?Object.create(null):{},c=Object.keys(i),s=0;s<c.length;++s){var f=c[s],d=u(f,i[f],o);l=t.merge(l,d,o)}return t.compact(l)}},/***/
666:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Container=void 0;var n=e(0),r=(t(n),e(51)),a=e(63),o=e(667),u=t(o),i=e(326),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i),c=function(e){return{reduce:e.DemoReducer}},s=function(e){return{actions:(0,r.bindActionCreators)(l,e),dispatch:e}},f=(0,a.connect)(c,s)(u.default);exports.Container=f,exports.default=f},/***/
667:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=e(27),u=t(o),i=e(17),l=t(i),c=e(309),s=t(c),f=e(88),d=t(f),p=e(143),h=t(p),m=e(99),y=t(m),b=e(107),v=t(b),g=e(311),O=t(g),E=e(30),w=t(E),j=e(104),x=t(j),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),S=e(0),C=t(S),P=e(312),R=(t(P),e(64)),T=t(R),A=e(411),M=t(A),I=e(409),L=t(I),N=(x.default.create,u.default.Option),F=function(e,t,n){
// const { getFieldValue } = this.props.form
t&&"suitProName"!==t&&n("两次输入不一致！"),
// Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
n()},H=function(e){function t(){var e,a,o,u;n(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleSubmit=function(e){e.preventDefault(),o.props.form.validateFields(function(e,t){})},u=a,r(o,u)}return a(t,e),k(t,[{key:"render",value:function(){var e=this.props;e.fields,e.handleSubmit,e.submitting,e.values;return C.default.createElement(T.default,{onSubmit:this.handleSubmit},C.default.createElement(R.FormItem,{name:"suitProNameId",label:"产品编号",rules:[{required:!0,message:"Please input!"},{validator:F}]},C.default.createElement(w.default,null)),C.default.createElement(R.FormItem,{name:"suitProName",label:"产品名称"},C.default.createElement(w.default,null)))}}]),t}(S.Component),D=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),k(t,[{key:"handleSubmit",value:function(e){}},{key:"renderForm",value:function(){return C.default.createElement(y.default,null,C.default.createElement(v.default,{span:"24"},C.default.createElement(d.default,{header:"表单示例"},C.default.createElement(H,{onSubmit:this.handleSubmit.bind(this)},C.default.createElement(O.default,null),C.default.createElement("div",null,C.default.createElement(l.default,{type:"dashed"},"Dashed"))))))}},{key:"renderShortCut",value:function(){var e=(this.props.style,[{icon:"edit",href:"#/edit",text:"编辑"},{icon:"loading",href:"#/loading",text:"加载"},{icon:"message",href:"#/message",text:"消息"},{icon:"upload",href:"#/upload",text:"上传"},{icon:"more",href:"#/more",text:"更多"}]);return C.default.createElement(s.default.Col,{span:"12"},C.default.createElement(d.default,{header:"快捷入口"},C.default.createElement(ShortCutList,{item:e})))}},{key:"renderAvatarPanel",value:function(){var e=[{icon:"edit",href:"#/edit",text:"50天"},{icon:"loading",href:"#/loading",text:"30分钟"},{icon:"message",href:"#/message",text:"15条"}],t={username:"fhtx001",nickname:"烽火1",level:18,money:150};return C.default.createElement(s.default.Col,{span:"12"},C.default.createElement(d.default,{header:"个人信息"},C.default.createElement(AvatarPanel,{user:t,item:e})))}},{key:"renderPropList",value:function(){return C.default.createElement(s.default.Col,{span:"12"},C.default.createElement(d.default,{header:"个人信息"},C.default.createElement(PropsList,{labelPosition:"left",labelWidth:"120",labelSuffix:":",inline:!1},C.default.createElement(PropsList.Item,{label:"产品名称1"},"进餐1号"),C.default.createElement(PropsList.Item,{label:"产品名称2"},"进餐1号"),C.default.createElement(PropsList.Item,{label:"产品名称3"},"进餐1号"),C.default.createElement(PropsList.Item,{label:"产品名称4"},"进餐1号"),C.default.createElement(PropsList.Item,{label:"产品名称5"},"进餐1号"),C.default.createElement(PropsList.Item,{label:"产品名称6"},"进餐1号"))))}},{key:"renderListView",value:function(){var e=[{productName:"11",productType:"22"},{productName:"111",productType:"222"},{productName:"1111",productType:"2222"}];return C.default.createElement(s.default.Col,{span:"12"},C.default.createElement(d.default,{header:"个人信息"},C.default.createElement(h.default,{items:e},C.default.createElement(PropsList,{labelPosition:"left",labelWidth:"120",labelSuffix:":",inline:!1},C.default.createElement(PropsList.Item,{label:"产品名称1"},"productName"),C.default.createElement(PropsList.Item,{label:"产品名称2"},"productType"),C.default.createElement(PropsList.Item,{label:"产品名称3"},"进餐1号"),C.default.createElement(PropsList.Item,{label:"产品名称4"},"进餐1号"),C.default.createElement(PropsList.Item,{label:"产品名称5"},"进餐1号"),C.default.createElement(PropsList.Item,{label:"产品名称6"},"进餐1号")))))}},{key:"renderCalendarPicker",value:function(){return C.default.createElement(M.default,{minDate:"2018-01-01",maxDate:"2019-01-01"})}},{key:"renderSwitchCard",value:function(){return C.default.createElement(L.default,{title:"我的配置12",value:!1},"我的配置我知道",C.default.createElement(l.default,null,"111"),C.default.createElement(u.default,{defaultValue:"lucy",style:{width:120}},C.default.createElement(N,{value:"jack"},"Jack"),C.default.createElement(N,{value:"lucy"},"Lucy"),C.default.createElement(N,{value:"disabled"},"Disabled"),C.default.createElement(N,{value:"Yiminghe"},"yiminghe")),"defaultChecked")}},{key:"renderWeekPicker",value:function(){return null}},{key:"render",value:function(){return C.default.createElement("div",null,this.renderWeekPicker(),this.renderSwitchCard())}}]),t}(S.Component);exports.default=D},/***/
709:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o,u,i=e(88),l=t(i),c=e(325),s=t(c),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=e(0),h=t(p),m=(u=o=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={checked:e.value},a}return a(t,e),d(t,[{key:"switchChange",value:function(e){
//  console.log(checked)
this.setState({checked:e})}},{key:"render",value:function(){var e=this.props,t=e.children,n=(e.title,this.state.checked);return h.default.createElement(l.default,f({},this.props,{extra:h.default.createElement(s.default,{checkedChildren:"开",unCheckedChildren:"关",defaultChecked:n,onChange:this.switchChange.bind(this)})}),n&&t)}}]),t}(p.Component),o.defaultProps={value:!0},o.state={checked:!0},u);exports.default=m},/***/
713:/***/
function(module,exports,e){"use strict";
//TODO： 拆分reduce。update\get
function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments[1];e.map;return t.type,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.initialState=exports.reduce=void 0;var n=(e(51),e(326),{});
//const userReducer = combineReducers({reduce});
exports.reduce=t,exports.initialState=n,exports.default=t},/***/
714:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=e(142),i=t(u),l=e(17),c=t(l),s=e(27),f=t(s),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=e(0),m=t(h),y=(e(62),e(78)),b=t(y),v=e(228),g=t(v),O=e(410),E=t(O),w=e(412),j=(t(w),e(408)),x=(t(j),f.default.Option),k=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),p(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.actions;e.router;t.listAction()}},{key:"handleMenuClick",value:function(){alert("sss")}},{key:"renderToolbar",value:function(){return null}},{key:"renderSearchBar",value:function(){var e=(this.props.reduce,[{label:"职业名称",value:"jobName"}]);
//  let params = reduce.params || {}
return m.default.createElement(g.default,{keysOption:e,filterSubmitHandler:this.handleFilter.bind(this)},m.default.createElement(f.default,{name:"custTypeId",label:"简历范围"},m.default.createElement(x,{value:"jack"},"Jack"),m.default.createElement(x,{value:"lucy"},"Lucy"),m.default.createElement(x,{value:"Yiminghe"},"yiminghe")),m.default.createElement(f.default,{name:"abc",label:"阅读状态"},m.default.createElement(x,{value:"jack"},"Jack"),m.default.createElement(x,{value:"lucy"},"Lucy"),m.default.createElement(x,{value:"disabled",disabled:!0},"Disabled"),m.default.createElement(x,{value:"Yiminghe"},"yiminghe")),m.default.createElement(f.default,{name:"sdfsd",label:"更新时间"},m.default.createElement(x,{value:"jack"},"Jack"),m.default.createElement(x,{value:"lucy"},"Lucy"),m.default.createElement(x,{value:"disabled",disabled:!0},"Disabled"),m.default.createElement(x,{value:"Yiminghe"},"yiminghe")),m.default.createElement(f.default,{name:"asdf",label:"学历"},m.default.createElement(x,{value:"jack"},"Jack"),m.default.createElement(x,{value:"lucy"},"Lucy"),m.default.createElement(x,{value:"disabled",disabled:!0},"Disabled"),m.default.createElement(x,{value:"Yiminghe"},"yiminghe")),m.default.createElement(f.default,{name:"asdfd",label:"工作年限"},m.default.createElement(x,{value:"jack"},"Jack"),m.default.createElement(x,{value:"lucy"},"Lucy"),m.default.createElement(x,{value:"disabled",disabled:!0},"Disabled"),m.default.createElement(x,{value:"Yiminghe"},"yiminghe")),m.default.createElement(f.default,{name:"asdfd",label:"目前状态"},m.default.createElement(x,{value:"jack"},"Jack"),m.default.createElement(x,{value:"lucy"},"Lucy"),m.default.createElement(x,{value:"disabled",disabled:!0},"Disabled"),m.default.createElement(x,{value:"Yiminghe"},"yiminghe")),m.default.createElement(f.default,{name:"asdfd",label:"期望工作地"},m.default.createElement(x,{value:"jack"},"Jack"),m.default.createElement(x,{value:"lucy"},"Lucy"),m.default.createElement(x,{value:"disabled",disabled:!0},"Disabled"),m.default.createElement(x,{value:"Yiminghe"},"yiminghe")),m.default.createElement(f.default,{name:"asdfd",label:"期望薪资"},m.default.createElement(x,{value:"jack"},"Jack"),m.default.createElement(x,{value:"lucy"},"Lucy"),m.default.createElement(x,{value:"disabled",disabled:!0},"Disabled"),m.default.createElement(x,{value:"Yiminghe"},"yiminghe")))}},{key:"addHandler",value:function(){alert("addHandler")}},{key:"renderTableList",value:function(){var e=this,t=this,r=this.props.reduce,a=r.spins.tableSpin,o=r.page,u=[].concat(n(r.list.values())),l={loading:a,rowKey:"jobId",title:function(){return t.renderToolbar()},columns:[{type:"selection"},{title:"操作",dataIndex:"jobId",width:200,render:function(t){return m.default.createElement(E.default,{onClick:e.handlerMenu},m.default.createElement(c.default,{type:"primary",icon:"plus-circle-o",actionkey:"a1"},"待邀约"),m.default.createElement(c.default,{icon:"plus",actionkey:"a2",href:"/resume/121/feedback"},"面试"),m.default.createElement(c.default,{icon:"plus-circle-o",actionkey:"a3"},"offer"),m.default.createElement(c.default,{icon:"plus-circle-o",actionkey:"a4"},"入职"),m.default.createElement(c.default,{icon:"plus-circle-o",actionkey:"a5"},"拒绝"),m.default.createElement(c.default,{icon:"plus-circle-o",actionkey:"a6"},"关联职业"),m.default.createElement(c.default,{icon:"plus-circle-o",actionkey:"a7"},"面试反馈"),m.default.createElement(c.default,{icon:"plus-circle-o",actionkey:"a8"},"加入人才"))}},{title:"职位名称",key:"jobName",width:120,dataIndex:"jobName",sorter:function(e,t){return parseInt(e.nextActionDate,10)-parseInt(t.nextActionDate,10)}},{title:"招聘人数",key:"jobNum",dataIndex:"jobNum"},{title:"渠道",key:"jobSource",dataIndex:"jobSource",width:170,sorter:function(e,t){return e.showLastActionDate.length-t.showLastActionDate.length}},{title:"状态",key:"status",dataIndex:"status",width:120},{title:"刷新时间",key:"refrshDate",dataIndex:"refrshDate",width:180}]};return m.default.createElement(i.default,d({},l,{dataSource:u},this.mergeTableConfig({pagination:o})))}},{key:"handlerMenu",value:function(e,t){}},{key:"render",value:function(){var e=this.props.children;return m.default.createElement("div",null,e,this.renderSearchBar(),this.renderTableList())}}]),t}(b.default);exports.default=k},/***/
752:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u,i,l=e(117),c=t(l),s=e(142),f=t(s),d=e(17),p=t(d),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=e(0),b=t(y),v=e(1),g=t(v),O=e(228),E=t(O),w=(i=u=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectedRows:[],selectedRowKeys:[]},n}return o(t,e),m(t,[{key:"getChildContext",value:function(){return{appConfig:this.props.appConfig}}}]),m(t,[{key:"configColumns",value:function(){}},{key:"getCurrentLocation",value:function(){this.props.router}},{key:"showTotal",value:function(e){return"共计 "+e+" 条数据"}},{key:"mergeTableConfig",value:function(e){return Object.assign({size:"middle",pagination:{showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:this.showTotal.bind(this)},rowSelection:{onChange:this.onSelectChange.bind(this)},style:{width:"100%"}},e)}},{key:"componentWillMount",value:function(){this.props.actions.listAction()}},{key:"onSubmit",value:function(){this.filterTableHandler()}},{key:"onSelectChange",value:function(e,t){this.setState({selectedRowKeys:e,selectedRows:t})}},{key:"selectMultiple",value:function(){return this.getSelectLength()<=0}},{key:"selectSingle",value:function(){return 1!=this.getSelectLength()}},{key:"getSelectLength",value:function(){return this.getSelectRows().length}},{key:"getSelectKeys",value:function(){return this.state.selectedRowKeys}},{key:"getSelectRows",value:function(){return this.state.selectedRows}},{key:"handleAddRoute",value:function(){var e=this.props,t=e.actions,n=(e.history,e.router);
//  console.log(router.getCurrentLocation())
t.addRoute(n)}},{key:"handleEditRoute",value:function(e){var t=this.props,n=t.actions,r=(t.history,t.router),a=e||this.getSelectKeys();n.editRoute(r,a)}},{key:"handleBackRoute",value:function(){var e=this.props,t=e.actions;e.history;t.backRoute()}},{key:"handleDeleteRoute",value:function(e){var t=this.props,n=t.actions,r=(t.history,e||this.getSelectKeys());n.deleteRoute(r)}},{key:"handleFilter",value:function(e){this.props.actions.listAction(e)}},{key:"renderSearchBar",value:function(){var e=this.props.reduce,t=(e.params,[{label:"联系人",value:"linkName"},{label:"客户名称",value:"custName"}]);return b.default.createElement(E.default,{keysOption:t,filterSubmitHandler:this.handleFilter.bind(this)})}},{key:"renderTableList",value:function(){var e=this,t=this.props.reduce,r=(t.spins.tableSpin,[].concat(n(t.map.values()))),a={rowKey:"id",rowSelection:{onChange:this.onSelectChange.bind(this)},dataSource:r,spins:loading,columns:[{type:"selection"},{label:"操作",prop:"id",width:100,render:function(t){return b.default.createElement("span",null,b.default.createElement(p.default,{type:"text",size:"small",onClick:function(){return e.handleEditRoute(t.name)}},"查看"),b.default.createElement(p.default,{type:"text",size:"small",onClick:function(){return e.handleEditRoute(t.name)}},"编辑"))}}]};return b.default.createElement(f.default,h({style:{width:"100%"}},a))}},{key:"renderDialogView",value:function(){var e=this.props.route,t="";if("add"==e.path)t="添加";else{if("edit/:id"!=e.path)return null;t="编辑"}return b.default.createElement(c.default,{title:t,visible:!0,maskClosable:!1,onCancel:this.handleBackRoute.bind(this),onOK:this.handleBackRoute.bind(this)},this.renderFormView())}}]),t}(y.Component),u.childContextTypes={appConfig:g.default.object},i);exports.default=w},/***/
759:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=e(17),u=t(o),i=e(99),l=t(i),c=e(107),s=t(c),f=e(30),d=t(f),p=e(27),h=t(p),m=e(117),y=t(m),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=e(0),O=t(g),E=e(1),w=t(E),j=e(64),x=e(760),k=(t(x),h.default.Option),S=function(e){function t(){var e,a,o,u;n(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={expand:!1,placeHolder:"请输入"},o.handleSearch=function(e){o.props.filterSubmitHandler.apply(o,e)},o.handleReset=function(){},o.toggleExpand=function(){var e=o.state.expand;o.setState({expand:!e})},u=a,r(o,u)}return a(t,e),v(t,[{key:"getFields",
// To generate mock Form.Item
value:function(){var e=this.props,t=e.children,n=(e.form,void 0),r={labelCol:{span:6},wrapperCol:{span:18}},a={labelCol:{span:2},wrapperCol:{span:21}};return 0===O.default.Children.count(t)?null:(n=0==this.state.expand?t.filter(function(e,t){return t<4}):t,n.map(function(e,t){return"TagSelect"==e.type.name?O.default.createElement(s.default,{span:24,key:t},O.default.createElement(j.FormItem,b({},a,{label:e.props.label,name:e.props.name}),e)):O.default.createElement(s.default,{span:6,key:t},O.default.createElement(j.FormItem,b({},r,{label:e.props.label,name:e.props.name}),e))}))}},{key:"onTypeChange",value:function(e,t){this.setState({placeHolder:t.props.placeHolder})}},{key:"handleAdvancedMenu",value:function(e){"advanced"==e.key?alert("call advanced"):"clear"==e.key?this.handleReset():"preview"==e.key&&alert("call restore")}},{key:"renderAdvancedConfigModal",value:function(){return O.default.createElement(y.default,{title:"高级配置",visible:!0},O.default.createElement("p",null,"这里就是配置页"),O.default.createElement("p",null,"Some contents..."),O.default.createElement("p",null,"Some contents..."))}},{key:"renderKeyCatalog",value:function(){var e=this.props.keysOption;return O.default.createElement(h.default,{onSelect:this.onTypeChange.bind(this),style:{width:"20%"}},e.map(function(e){return O.default.createElement(k,{value:e.value,key:e.value,placeholder:"请输入"+e.label},e.label)}))}},{key:"render",value:function(){var e=this.state,t=e.placeHolder;e.children;return O.default.createElement("div",{className:"advanced-search-panel"},O.default.createElement(j.AdvancedForm,{className:"advanced-search-form",onSubmit:this.handleSearch},O.default.createElement(l.default,{gutter:20},O.default.createElement(s.default,{span:1}),O.default.createElement(s.default,{span:12,key:"fixhead"},O.default.createElement(d.default.Group,{compact:!0},this.renderKeyCatalog(),O.default.createElement(d.default,{placeholder:t,style:{width:"70%"}}),O.default.createElement(u.default,{htmlType:"submit",icon:"search"})))),O.default.createElement(l.default,{gutter:20},this.getFields())),O.default.createElement("div",{className:"advanced-search-toolbar"},O.default.createElement(u.default.Group,null,O.default.createElement(u.default,{shape:"circle",icon:0==this.state.expand?"down":"up",onClick:this.toggleExpand.bind(this)}),O.default.createElement(u.default,{shape:"circle",icon:"setting",onClick:this.renderAdvancedConfigModal.bind(this)}))))}}]),t}(O.default.Component);exports.default=S,S.propTypes={keysOption:w.default.array,filterSubmitHandler:w.default.func,footer:w.default.element},S.defaultProps={keysOption:[],filterSubmitHandler:function(){}}},/***/
760:/***/
function(module,exports){},/***/
761:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(0),u=(function(e){e&&e.__esModule}(o),function(e){function o(){var e,r,a,u;t(this,o);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return r=a=n(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(l))),a.saveFormRef=function(e){a.form=e},u=r,n(a,u)}return r(o,e),a(o,[{key:"onSubmit",value:function(){var e=this;this.form.validateFieldsAndScroll(function(t,n){t||e.handleSubmit(n)})}},{key:"handleSubmit",value:function(e){this.props.actions}}]),o}(o.Component));exports.default=u},/***/
762:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e(0),i=t(u),l=e(1),c=(t(l),function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.src,n=e.name;return i.default.createElement("iframe",{src:t,name:n,width:"100%",height:"100%",frameBorder:"0",stye:"height:100%;width:100%;"})}}]),t}(u.Component));exports.default=c},/***/
763:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o,u,i=e(17),l=t(i),c=e(71),s=t(c),f=e(116),d=t(f),p=e(13),h=t(p),m=e(115),y=t(m),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=e(0),g=t(v),O=(u=o=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"renderButtomMenu",value:function(){var e=this.props,t=e.children,n=e.onClick,r=(t.filter(function(e,t){return 0==t}),g.default.createElement(y.default,{onClick:n},t.map(function(e,t){var n=e.props,r=n.icon,a=n.children,o=n.actionkey;return g.default.createElement(y.default.Item,{key:o},g.default.createElement(h.default,{type:r}),a)})));return g.default.createElement(d.default,{overlay:r},g.default.createElement(h.default,{type:"bars"}))}},{key:"renderButtomGroup",value:function(){var e=this,t=this.props,n=t.children,r=t.onClick;return n.map(function(t,n){var a=t.props,o=(a.icon,a.children),u=a.actionkey;return g.default.createElement(s.default,{title:o,key:n},g.default.cloneElement(t,{size:"small",onClick:r.bind(e,u)},""))})}},{key:"renderChildren",value:function(){var e=this.props,t=e.children,n=e.showSize;return t.length>n?this.renderButtomMenu():g.default.createElement(l.default.Group,{size:"small"},this.renderButtomGroup())}},{key:"render",value:function(){this.props.children;return g.default.createElement("div",{className:"ant-botton-bar"},this.renderChildren())}}]),t}(v.Component),o.defaultProps={showSize:3},u);exports.default=O},/***/
765:/***/
function(module,exports){},/***/
766:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e(0),i=t(u),l=e(1),c=t(l),s=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),o(t,[{key:"render",value:function(){return this.props.expression?i.default.Children.map(this.props.children,function(e){return i.default.cloneElement(e,{})}):null}}]),t}(i.default.Component);s.propTypes={expression:c.default.any},s.defaultProps={expression:!0},exports.default=s},/***/
767:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){function o(){return t(this,o),n(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return r(o,e),a(o,[{key:"render",value:function(){return u.default.createElement("div",{className:"ResumeDetail"},"ResumeDetail")}}]),o}(o.Component);exports.default=i},/***/
768:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var o,u,i=e(52),l=t(i),c=e(17),s=t(c),f=e(30),d=t(f),p=e(27),h=t(p),m=e(98),y=t(m),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=e(0),g=t(v),O=e(78),E=e(96),w=t(E),j=e(97),x=t(j),k=e(64),S=t(k),C=(h.default.Option,d.default.TextArea),P=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=(e.form,e.initialValues),n=t.username,r=t.roleName,a=t.groupName,o=t.serveTime,u=(t.post,t.mobile),i=e.handleSubmit,l=(e.children,e.saveFormRef),c={labelCol:{span:6},wrapperCol:{span:18}};return g.default.createElement(S.default,{onSubmit:i,ref:l},g.default.createElement(k.FormItem,c,g.default.createElement(y.default,{label:"预计入职日期",name:"username",initialValue:n})),g.default.createElement(k.FormItem,c,g.default.createElement(d.default,{label:"收件人",name:"roleName",initialValue:r})),g.default.createElement(k.FormItem,c,g.default.createElement(h.default,{label:"邮件模版",name:"groupName",initialValue:a})),g.default.createElement(k.FormItem,c,g.default.createElement(d.default,{label:"邮件主题",name:"serveTime",initialValue:o})),g.default.createElement(k.FormItem,c,g.default.createElement(C,{name:"content",initialValue:u})))}}]),t}(v.Component),R=(o=(0,x.default)(w.default))(u=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"componentWillMount",
//请求远程数据接口
value:function(){this.props.actions}},{key:"handleSubmit",value:function(e){this.props.actions}},{key:"render",value:function(){var e=this.props,t=(e.params,e.reduce),n=(t.spins.formSpin,t.item);
//	let model=preduce.list[0]
return g.default.createElement(l.default,{tip:"Loading...",spinning:!1},g.default.createElement(P,{onSubmit:this.onSubmit,initialValues:n,saveFormRef:this.saveFormRef},g.default.createElement(s.default,{type:"primary",htmlType:"submit",onClick:this.onSubmit.bind(this)},"确认"),g.default.createElement(s.default,null,"取消")))}}]),t}(O.FormPage))||u;exports.default=R},/***/
769:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var o,u,i=e(52),l=t(i),c=e(17),s=t(c),f=e(198),d=t(f),p=e(98),h=t(p),m=e(30),y=t(m),b=e(27),v=t(b),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),O=e(0),E=t(O),w=e(78),j=e(96),x=t(j),k=e(97),S=t(k),C=e(64),P=t(C),R=(v.default.Option,y.default.TextArea,function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=(e.form,e.initialValues),n=t.username,r=(t.roleName,t.groupName,t.serveTime),a=(t.post,t.mobile,e.handleSubmit),o=(e.children,e.saveFormRef),u={labelCol:{span:6},wrapperCol:{span:18}};return E.default.createElement(P.default,{onSubmit:a,ref:o},E.default.createElement(C.FormItem,u,E.default.createElement(h.default,{label:"预计入职日期",name:"username",initialValue:n})),E.default.createElement(C.FormItem,u,E.default.createElement(h.default,{label:"预计转正日期",name:"username",initialValue:n})),E.default.createElement(C.FormItem,u,E.default.createElement(d.default,{label:"人才星级",name:"serveTime",initialValue:r})))}}]),t}(O.Component)),T=(o=(0,S.default)(x.default))(u=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),g(t,[{key:"componentWillMount",
//请求远程数据接口
value:function(){this.props.actions}},{key:"handleSubmit",value:function(e){this.props.actions}},{key:"render",value:function(){var e=this.props,t=(e.params,e.reduce),n=(t.spins.formSpin,t.item);
//	let model=preduce.list[0]
return E.default.createElement(l.default,{tip:"Loading...",spinning:!1},E.default.createElement(R,{onSubmit:this.onSubmit,initialValues:n,saveFormRef:this.saveFormRef},E.default.createElement(s.default,{type:"primary",htmlType:"submit",onClick:this.onSubmit.bind(this)},"确认"),E.default.createElement(s.default,null,"取消")))}}]),t}(w.FormPage))||u;exports.default=T},/***/
774:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var o,u,i=e(52),l=t(i),c=e(17),s=t(c),f=e(27),d=t(f),p=e(30),h=t(p),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=e(0),b=t(y),v=e(78),g=e(96),O=t(g),E=e(97),w=t(E),j=e(64),x=t(j),k=(d.default.Option,h.default.TextArea,function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=(e.form,e.initialValues),n=(t.username,t.roleName,t.groupName),r=(t.serveTime,t.post,t.mobile,e.handleSubmit),a=(e.children,e.saveFormRef),o={labelCol:{span:6},wrapperCol:{span:18}};return b.default.createElement(x.default,{onSubmit:r,ref:a},b.default.createElement(j.FormItem,o,b.default.createElement(d.default,{label:"选择职位",name:"groupName",initialValue:n})))}}]),t}(y.Component)),S=(o=(0,w.default)(O.default))(u=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"componentWillMount",
//请求远程数据接口
value:function(){this.props.actions}},{key:"handleSubmit",value:function(e){this.props.actions}},{key:"render",value:function(){var e=this.props,t=(e.params,e.reduce),n=(t.spins.formSpin,t.item);
//	let model=preduce.list[0]
return b.default.createElement(l.default,{tip:"Loading...",spinning:!1},b.default.createElement(k,{onSubmit:this.onSubmit,initialValues:n,saveFormRef:this.saveFormRef},b.default.createElement(s.default,{type:"primary",htmlType:"submit",onClick:this.onSubmit.bind(this)},"确认"),b.default.createElement(s.default,null,"取消")))}}]),t}(v.FormPage))||u;exports.default=S},/***/
775:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var o,u,i=e(52),l=t(i),c=e(17),s=t(c),f=e(98),d=t(f),p=e(27),h=t(p),m=e(30),y=t(m),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=e(0),g=t(v),O=e(78),E=e(96),w=t(E),j=e(97),x=t(j),k=e(64),S=t(k),C=(h.default.Option,y.default.TextArea),P=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=(e.form,e.initialValues),n=t.username,r=(t.roleName,t.groupName),a=(t.serveTime,t.post,t.mobile,e.handleSubmit),o=(e.children,e.saveFormRef),u={labelCol:{span:6},wrapperCol:{span:18}};return g.default.createElement(S.default,{onSubmit:a,ref:o},g.default.createElement(k.FormItem,u,g.default.createElement(h.default,{label:"面试阶段",name:"groupName",initialValue:r})),g.default.createElement(k.FormItem,u,g.default.createElement(h.default,{label:"面试官",name:"groupName",initialValue:r})),g.default.createElement(k.FormItem,u,g.default.createElement(d.default,{label:"面试时间",name:"username",initialValue:n})),g.default.createElement(k.FormItem,u,g.default.createElement(C,{label:"反馈信息",name:"groupName",initialValue:r})))}}]),t}(v.Component),R=(o=(0,x.default)(w.default))(u=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"componentWillMount",
//请求远程数据接口
value:function(){this.props.actions}},{key:"handleSubmit",value:function(e){this.props.actions}},{key:"render",value:function(){var e=this.props,t=(e.params,e.reduce),n=(t.spins.formSpin,t.item);
//	let model=preduce.list[0]
return g.default.createElement(l.default,{tip:"Loading...",spinning:!1},g.default.createElement(P,{onSubmit:this.onSubmit,initialValues:n,saveFormRef:this.saveFormRef},g.default.createElement(s.default,{type:"primary",htmlType:"submit",onClick:this.onSubmit.bind(this)},"确认"),g.default.createElement(s.default,null,"取消")))}}]),t}(O.FormPage))||u;exports.default=R},/***/
776:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var o,u,i=e(52),l=t(i),c=e(17),s=t(c),f=e(198),d=t(f),p=e(27),h=t(p),m=e(30),y=t(m),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=e(0),g=t(v),O=e(78),E=e(96),w=t(E),j=e(97),x=t(j),k=e(64),S=t(k),C=(h.default.Option,y.default.TextArea),P=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=(e.form,e.initialValues),n=(t.username,t.roleName,t.groupName),r=t.serveTime,a=(t.post,t.mobile,e.handleSubmit),o=(e.children,e.saveFormRef),u={labelCol:{span:6},wrapperCol:{span:18}};return g.default.createElement(S.default,{onSubmit:a,ref:o},g.default.createElement(k.FormItem,u,g.default.createElement(h.default,{label:"面试阶段",name:"groupName",initialValue:n})),g.default.createElement(k.FormItem,u,g.default.createElement(d.default,{label:"人才星级",name:"serveTime",initialValue:r})),g.default.createElement(k.FormItem,u,g.default.createElement(C,{label:"拒绝原因",name:"serveTime",initialValue:r})))}}]),t}(v.Component),R=(o=(0,x.default)(w.default))(u=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"componentWillMount",
//请求远程数据接口
value:function(){this.props.actions}},{key:"handleSubmit",value:function(e){this.props.actions}},{key:"render",value:function(){var e=this.props,t=(e.params,e.reduce),n=(t.spins.formSpin,t.item);
//	let model=preduce.list[0]
return g.default.createElement(l.default,{tip:"Loading...",spinning:!1},g.default.createElement(P,{onSubmit:this.onSubmit,initialValues:n,saveFormRef:this.saveFormRef},g.default.createElement(s.default,{type:"primary",htmlType:"submit",onClick:this.onSubmit.bind(this)},"确认"),g.default.createElement(s.default,null,"取消")))}}]),t}(O.FormPage))||u;exports.default=R},/***/
779:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(3),r=t(n),a=e(8),o=t(a),u=e(0),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u),l=e(6),c=t(l),s=e(24),f=t(s),d=function(e){var t=e.type,n=e.className,a=void 0===n?"":n,u=e.spin,l=(0,c.default)((0,o.default)({anticon:!0,"anticon-spin":!!u||"loading"===t},"anticon-"+t,!0),a);return i.createElement("i",(0,r.default)({},(0,f.default)(e,["type","spin"]),{className:l}))};exports.default=d,module.exports=exports.default},/***/
78:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.FormPage=exports.IframePage=void 0;var n=e(752),r=t(n),a=e(761),o=t(a),u=e(762),i=t(u);exports.IframePage=i.default,exports.FormPage=o.default,exports.default=r.default},/***/
780:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(39),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){function o(e){return t(this,o),n(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e))}return r(o,e),a(o,[{key:"fetchList",value:function(e){return this.fetchGet("http://192.168.1.78:3010/resume/",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchSync",value:function(e){return this.fetchGet("http://192.168.1.78:3010/resume/sync",{body:JSON.stringify(e)}).catch(this.fetchCatch)}}]),o}(u.default);exports.default=i},/***/
781:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Container=void 0;var n=e(0),r=t(n),a=e(62),o=(t(a),e(782)),u=t(o),i=r.default.createElement(a.Router,null,r.default.createElement(a.IndexRoute,{component:u.default}));exports.Container=u.default,exports.default=i},/***/
782:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(0),r=(t(n),e(51)),a=e(63),o=e(783),u=t(o),i=e(338),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i),c=function(e){return{reduce:e.dashboardReducer}},s=function(e){return{actions:(0,r.bindActionCreators)(l,e),dispatch:e}},f=(0,a.connect)(c,s,null,{pure:!1})(u.default);exports.default=f},/***/
783:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=e(88),i=t(u),l=e(230),c=t(l),s=e(143),f=t(s),d=e(231),p=t(d),h=e(99),m=t(h),y=e(107),b=t(y),v=e(337),g=t(v),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=e(0),w=t(E),j=e(229),x=i.default.Meta,k=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),O(t,[{key:"render",value:function(){var e=[{name:"abc"},{title:"abc1"},{title:"abc1"},{title:"abc1"},{title:"abc1"},{title:"abc1"},{title:"abc1"},{title:"abc1"},{title:"abc1"}];return w.default.createElement(i.default,{title:"今日面试"},w.default.createElement(f.default,{grid:{gutter:16,column:3},className:"demo-loadmore-list",itemLayout:"horizontal",dataSource:e,renderItem:function(e){return w.default.createElement(f.default.Item,null,w.default.createElement(i.default,null,w.default.createElement(x,{avatar:w.default.createElement(p.default,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"})))}}))}}]),t}(E.Component),S=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),O(t,[{key:"renderItemBadge",value:function(){
//  var items=[{total:120,name:"待办事件"},{total:59,name:"预约面试"}]
return this.props.items.map(function(e,t){return w.default.createElement(b.default,{span:3,key:t},w.default.createElement(g.default,{count:e.total,overflowCount:99},w.default.createElement(p.default,{size:"large",shape:"square",icon:"user"}),w.default.createElement("h5",null,e.name)))})}},{key:"render",value:function(){return w.default.createElement(i.default,{title:"重要提醒"},w.default.createElement(m.default,{gutter:16},this.renderItemBadge()))}}]),t}(E.Component),C=(function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}o(t,e)}(c.default),function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),O(t,[{key:"renderCalendarPickerList",value:function(){var e=[{name:{last:"xxxx"}},{name:{last:"jjj"}},{name:{last:"abc"}}];return w.default.createElement(f.default,{className:"demo-loadmore-list",itemLayout:"horizontal",loadMore:!1,dataSource:e,renderItem:function(e){return w.default.createElement(f.default.Item,{actions:[w.default.createElement("a",null,"notice"),w.default.createElement("a",null,"edit"),w.default.createElement("a",null,"del")]},w.default.createElement(f.default.Item.Meta,{avatar:w.default.createElement(p.default,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:w.default.createElement("a",{href:"https://ant.design"},e.name.last),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}),w.default.createElement("div",null,"content"))}})}},{key:"render",value:function(){return w.default.createElement(i.default,{title:"待办事件"},w.default.createElement(c.default,{fullscreen:!1,mode:"decade"}),this.renderCalendarPickerList())}}]),t}(E.Component)),P=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),O(t,[{key:"componentWillMount",value:function(){this.props.actions.loadNotices()}},{key:"render",value:function(){var e=this.props.reduce;return w.default.createElement(j.Layout,{direction:"rows"},w.default.createElement(j.Fixed,{style:{width:"600px"}},w.default.createElement(j.Layout,{direction:"column"},w.default.createElement(j.Pane,null,w.default.createElement(k,null)),w.default.createElement(j.Fixed,{style:{height:"170px"}},w.default.createElement(S,{items:[].concat(n(e.notices.values()))})))),w.default.createElement(j.Pane,{style:{overflowX:"hidden"}},w.default.createElement(C,null)))}}]),t}(E.Component);exports.default=P},/***/
788:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(39),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){function o(e){return t(this,o),n(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e))}return r(o,e),a(o,[{key:"fetchNotices",value:function(e){return this.fetchGet("http://192.168.1.78:3010/dashboard/notices",{}).catch(this.fetchCatch)}},{key:"fetchLists",value:function(e){return this.fetchGet("http://192.168.1.78:3010/dashboard/list",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchTodo",value:function(e){return this.fetchDelete("http://192.168.1.78:3010/dashboard/todo",{body:JSON.stringify(params)}).catch(this.fetchCatch)}}]),o}(u.default);exports.default=i},/***/
789:/***/
function(module,exports,e){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;arguments[1];return e}Object.defineProperty(exports,"__esModule",{value:!0});var n={auth:{authID:"sdfs342342xxvef3",loginTime:"",expiresTime:"",authRole:"admin"},user:{userid:"23424",username:"jaxchow",nickname:"jax"},global:{}};exports.reduce=t,exports.initialState=n,exports.default=t},/***/
790:/***/
function(module,exports,e){"use strict";function t(e,t){return t.list.forEach(function(t){return e.notices.set(t[e.key],t)}),e}/**
 * [reducer description]
 * @param  {[type]} [state=initialState] [description]
 * @param  {[type]} type                 [description]
 * @param  {[type]} payload              [description]
 * @return {[type]}                      [description]
 */
function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments[1],a=n.type,i=n.payload;switch(a){case o.default.SAVE_LIST:return(0,r.saveList)(e,i);case o.default.SAVE_NOTICES:return t(e,i);case o.default.NEW_ITEM:return(0,r.newItem)(e,i);case o.default.GET_ITEM:return getItem(e,i);case o.default.SAVE_ITEM:return(0,r.saveItem)(e,i);case o.default.FETCH_REQUEST:return(0,r.fetchRequest)(e,i);case o.default.FETCH_SUCCESS:return(0,r.fetchSuccess)(e,i);case o.default.FETCH_FAILURE:return(0,r.fetchFailure)(e,i);default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONSTANTS=exports.initialState=void 0;var r=e(44),a=e(338),o=function(e){return e&&e.__esModule?e:{default:e}}(a),u={params:{},page:{current:1,pageSize:20,total:1e3},spins:{noticeSpin:!1},list:new Map,notices:new Map,
// for Item detail
item:new Object,msg:new Object,status:new Map,key:"id"};exports.initialState=u,exports.CONSTANTS=o.default,exports.default=n},/***/
791:/***/
function(module,exports,e){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],r=t.type,u=t.payload;switch(r){case a.default.SAVE_LIST:return(0,n.saveList)(e,u);case a.default.NEW_ITEM:return(0,n.newItem)(e,u);case a.default.GET_ITEM:return getItem(e,u);case a.default.SAVE_ITEM:return(0,n.saveItem)(e,u);case a.default.FETCH_REQUEST:return(0,n.fetchRequest)(e,u);case a.default.FETCH_SUCCESS:return(0,n.fetchSuccess)(e,u);case a.default.FETCH_FAILURE:return(0,n.fetchFailure)(e,u);default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONSTANTS=exports.initialState=void 0;var n=e(44),r=e(414),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o={params:{},page:{current:1,pageSize:20,total:1e3},list:new Map,spins:{tableSpin:!1},
// for Item detail
item:new Object,msg:new Object,status:new Map,key:"custFollowId"};exports.initialState=o,exports.CONSTANTS=a.default,exports.default=t},/***/
792:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(39),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){function o(e){return t(this,o),n(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e))}return r(o,e),a(o,[{key:"fetchList",value:function(e){return this.fetchGet("http://192.168.1.78:3010/callrecord/soundListJson",{body:JSON.stringify(e)}).catch(this.fetchCatch)}}]),o}(u.default);exports.default=i},/***/
793:/***/
function(module,exports,e){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],r=t.type,u=t.payload;switch(r){case a.default.SAVE_LIST:return(0,n.saveList)(e,u);
// case CONSTANTS.NEW_ITEM:
//   return newItem(state, payload)
// case CONSTANTS.GET_ITEM:
//   return getItem(state, payload)
case a.default.SAVE_ITEM:return(0,n.saveItem)(e,u);case a.default.FETCH_REQUEST:return(0,n.fetchRequest)(e,u);case a.default.FETCH_SUCCESS:return(0,n.fetchSuccess)(e,u);case a.default.FETCH_FAILURE:return(0,n.fetchFailure)(e,u);default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONSTANTS=exports.initialState=void 0;var n=e(44),r=e(415),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o={params:{},page:{current:1,pageSize:20,total:0},spins:{tableSpin:!1,formSpin:!1},list:new Map,item:new Object,msg:new Object,status:new Map,key:"id"};exports.initialState=o,exports.CONSTANTS=a.default,exports.default=t},/***/
794:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e(39),i=t(u),l=e(304),c=(t(l),function(e){function t(e){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),o(t,[{key:"fetchItem",value:function(e){return this.fetchGet("http://192.168.1.78:3010/member/1",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchList",value:function(e){return this.fetchGet("http://192.168.1.78:3010/member/list",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchSave",value:function(e){return this.fetchPost("http://192.168.1.78:3010/member/",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchRemove",value:function(e){return this.fetchDelete("http://192.168.1.78:3010/member/1",{body:JSON.stringify({id:e})}).catch(this.fetchCatch)}}]),t}(i.default));exports.default=c},/***/
795:/***/
function(module,exports,e){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],r=t.type,u=t.payload;switch(r){case a.default.SAVE_LIST:return(0,n.saveList)(e,u);case a.default.NEW_ITEM:return(0,n.newItem)(e,u);case a.default.GET_ITEM:return getItem(e,u);case a.default.SAVE_ITEM:return(0,n.saveItem)(e,u);case a.default.FETCH_REQUEST:return(0,n.fetchRequest)(e,u);case a.default.FETCH_SUCCESS:return(0,n.fetchSuccess)(e,u);case a.default.FETCH_FAILURE:return(0,n.fetchFailure)(e,u);default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONSTANTS=exports.initialState=void 0;var n=e(44),r=e(796),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o={query:{pageIndex:1,pageSize:20},list:new Map,
// for Item detail
item:new Object,msg:new Object,status:new Map,key:"logDate"};exports.initialState=o,exports.CONSTANTS=a.default,exports.default=t},/***/
796:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(){return function(e){return e((0,m.default)().replace("/worklog/list"))}}function r(){return function(e){return e((0,m.default)().replace("/worklog/share"))}}function a(){return function(e){return e((0,m.default)().push("/worklog/list/add"))}}function o(){return function(e){return e((0,m.default)().goBack())}}function u(e){return function(t){return t((0,m.default)().push("/worklog/list/edit/"+e))}}function i(e){return function(t,n){return t((0,v.fetchRequest)(g,"listAction")),(new p.default).fetchList(e).then(function(e){return t((0,v.fetchSuccess)(g,"listAction")),e}).then(function(e){t((0,v.saveList)(g,e.dtos,e.dtos.length))}).catch(function(e){return t((0,v.fetchFailure)(g,"listAction"))})}}function l(e){return function(t,n){return t((0,v.fetchRequest)(g,"listShareAction")),(new p.default).fetchShareLog(e).then(function(e){t((0,v.fetchSuccess)(g,"listShareAction")),t((0,v.saveList)(g,e.dtos,e.dtos.length))}).catch(function(e){return t((0,v.fetchFailure)(g,"listShareAction"))})}}function c(e){return function(t,n){return t(newItem(e))}}function s(e){return function(t,n){return(new p.default).fetchItem(e).then(function(e){t((0,v.saveItem)("logDate",e.dtos[0]))}).catch(function(e){return t((0,v.fetchFailure)(e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.listRoute=n,exports.shareRoute=r,exports.addRoute=a,exports.backRoute=o,exports.editRoute=u,exports.listAction=i,exports.listShareAction=l,exports.newAction=c,exports.loadAction=s;var f=e(42),d=(t(f),e(797)),p=t(d),h=e(341),m=t(h),y=e(43),b=t(y),v=e(798),g=(0,b.default)("worklog",["get_list","get_item","save_item","save_list","new_item","fetch_request","fetch_success","fetch_failure"]);exports.default=g},/***/
797:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(39),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){function o(e){return t(this,o),n(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e))}return r(o,e),a(o,[{key:"fetchItem",value:function(e){return this.fetchGet("http://192.168.1.78:3010/worklog/myLogJson",{body:JSON.stringify({logDateTime:e})}).catch(this.fetchCatch)}},{key:"fetchList",value:function(e){return this.fetchGet("http://192.168.1.78:3010/worklog/myLogJson",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchSave",value:function(e){return this.fetchPost("http://192.168.1.78:3010/worklog/insert",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchRemove",value:function(e){return this.fetchDelete("http://192.168.1.78:3010/worklog/del",{body:JSON.stringify({id:e})}).catch(this.fetchCatch)}},{key:"fetchShareLog",value:function(e){return this.fetchGet("http://192.168.1.78:3010/worklog/share/shareLogJson",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchCommentLog",value:function(e){return this.fetchGet("http://192.168.1.78:3010/worklog/share/insertCommont",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchSharefavour",value:function(e){return this.fetchGet("http://192.168.1.78:3010/worklog/favour",{body:JSON.stringify(e)}).catch(this.fetchCatch)}}]),o}(u.default);exports.default=i},/***/
798:/***/
function(module,exports,e){"use strict";/**
 * [dispatchHandler 通用分发一个方法]
 * @param  {[type]} name    [description]
 * @param  {[type]} payload [description]
 * @return {[type]}         [description]
 */
function t(e,t){return{type:e,payload:t}}function n(e,t){return{type:e.GET_ITEM,payload:{key:t}}}function r(e,t){return{type:e.SAVE_ITEM,payload:{item:t}}}function a(e,t){return{type:e.GET_LIST,payload:{query:t}}}function o(e,t){return{type:e.SAVE_LIST,payload:{list:t}}}function u(e,t){return{type:e.CLEAR_ITEM,payload:{item:t}}}function i(e,t,n){return{type:e.FETCH_FAILURE,payload:{name:t,code:n}}}function l(e,t,n){return{type:e.FETCH_REQUEST,payload:{name:t,code:n}}}function c(e,t,n){return{type:e.FETCH_SUCCESS,payload:{name:t,code:n}}}/**
 * [dispatchRouter 分发一个路径]
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
function s(e){return function(t){return t((0,p.default)().replace(e))}}/**
 * [dispatchBackRouter 分发一个回退]
 * @param  {[type]} number [为回退数值前几次]
 * @return {[type]}        [description]
 */
function f(e){return function(t){return t((0,p.default)().goBack(e))}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t,exports.getItem=n,exports.saveItem=r,exports.getList=a,exports.saveList=o,exports.clearItem=u,exports.fetchFailure=i,exports.fetchRequest=l,exports.fetchSuccess=c,exports.dispatchRouter=s,exports.dispatchBackRouter=f;var d=e(341),p=function(e){return e&&e.__esModule?e:{default:e}}(d)},/***/
799:/***/
function(module,exports,e){"use strict";function t(e,t){return Object.assign({},e,{remind:t.item})}
//TODO： 拆分reduce。update\get
function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments[1],a=n.type,i=n.payload;switch(a){case o.default.SAVE_LIST:return(0,r.saveList)(e,i);
// case CONSTANTS.NEW_ITEM:
//   return newItem(state, payload)
// case CONSTANTS.GET_ITEM:
//   return getItem(state, payload)
case o.default.SAVE_REMIND:return t(e,i);case o.default.SAVE_ITEM:return(0,r.saveItem)(e,i);case o.default.FETCH_REQUEST:return(0,r.fetchRequest)(e,i);case o.default.FETCH_SUCCESS:return(0,r.fetchSuccess)(e,i);case o.default.FETCH_FAILURE:return(0,r.fetchFailure)(e,i);default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONSTANTS=exports.initialState=void 0;var r=e(44),a=e(416),o=function(e){return e&&e.__esModule?e:{default:e}}(a),u={params:{},page:{current:1,pageSize:20,total:0},spins:{tableSpin:!1,formSpin:!1},list:new Map,item:new Object,msg:new Object,status:new Map,remind:new Object,key:"id"};exports.initialState=u,exports.CONSTANTS=o.default,exports.default=n},/***/
800:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(39),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){function o(e){return t(this,o),n(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e))}return r(o,e),a(o,[{key:"fetchList",value:function(e){return this.fetchGet("http://192.168.1.78:3010/settings/fields",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchRemind",value:function(e){return this.fetchGet("http://192.168.1.78:3010/settings/remind",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"saveRemind",value:function(e){return this.fetchPost("http://192.168.1.78:3010/settings/remind",{body:JSON.stringify(e)}).catch(this.fetchCatch)}}]),o}(u.default);exports.default=i},/***/
801:/***/
function(module,exports,e){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],r=t.type,u=t.payload;switch(r){case a.default.SAVE_LIST:return(0,n.saveList)(e,u);
// case CONSTANTS.NEW_ITEM:
//   return newItem(state, payload)
// case CONSTANTS.GET_ITEM:
//   return getItem(state, payload)
// case CONSTANTS.SAVE_ITEM:
//   return saveItem(state, payload)
case a.default.FETCH_REQUEST:return(0,n.fetchRequest)(e,u);case a.default.FETCH_SUCCESS:return(0,n.fetchSuccess)(e,u);case a.default.FETCH_FAILURE:return(0,n.fetchFailure)(e,u);default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONSTANTS=exports.initialState=void 0;var n=e(44),r=e(417),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o={params:{},page:{current:1,pageSize:10,total:0},spins:{tableSpin:!1},list:new Map,
// for Item detail
item:new Object,msg:new Object,status:new Map,key:"jobId"};exports.initialState=o,exports.CONSTANTS=a.default,exports.default=t},/***/
802:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(39),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){function o(e){return t(this,o),n(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e))}return r(o,e),a(o,[{key:"fetchList",value:function(e){return this.fetchGet("http://192.168.1.78:3010/job/",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchSync",value:function(e){return this.fetchGet("http://192.168.1.78:3010/job/sync",{body:JSON.stringify(e)}).catch(this.fetchCatch)}}]),o}(u.default);exports.default=i},/***/
803:/***/
function(module,exports,e){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],r=t.type,u=t.payload;switch(r){case a.default.SAVE_LIST:return(0,n.saveList)(e,u);
// case CONSTANTS.NEW_ITEM:
//   return newItem(state, payload)
// case CONSTANTS.GET_ITEM:
//   return getItem(state, payload)
// case CONSTANTS.SAVE_ITEM:
//   return saveItem(state, payload)
case a.default.FETCH_REQUEST:return(0,n.fetchRequest)(e,u);case a.default.FETCH_SUCCESS:return(0,n.fetchSuccess)(e,u);case a.default.FETCH_FAILURE:return(0,n.fetchFailure)(e,u);default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONSTANTS=exports.initialState=void 0;var n=e(44),r=e(418),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o={query:{pageIndex:1,pageSize:10},spins:{tableSpin:!1},list:new Map,
// for Item detail
item:new Object,msg:new Object,status:new Map,key:"jobId"};exports.initialState=o,exports.CONSTANTS=a.default,exports.default=t},/***/
804:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(39),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){function o(e){return t(this,o),n(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e))}return r(o,e),a(o,[{key:"fetchList",value:function(e){return this.fetchGet("http://192.168.1.78:3010/resume/",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchSync",value:function(e){return this.fetchGet("http://192.168.1.78:3010/resume/sync",{body:JSON.stringify(e)}).catch(this.fetchCatch)}}]),o}(u.default);exports.default=i},/***/
805:/***/
function(module,exports,e){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],r=t.type,u=t.payload;switch(r){case a.default.SAVE_LIST:return(0,n.saveList)(e,u);
// case CONSTANTS.NEW_ITEM:
//   return newItem(state, payload)
// case CONSTANTS.GET_ITEM:
//   return getItem(state, payload)
// case CONSTANTS.SAVE_ITEM:
//   return saveItem(state, payload)
case a.default.FETCH_REQUEST:return(0,n.fetchRequest)(e,u);case a.default.FETCH_SUCCESS:return(0,n.fetchSuccess)(e,u);case a.default.FETCH_FAILURE:return(0,n.fetchFailure)(e,u);default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONSTANTS=exports.initialState=void 0;var n=e(44),r=e(334),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o={params:{},page:{current:1,pageSize:10,total:0},spins:{tableSpin:!1},list:new Map,
// for Item detail
item:new Object,msg:new Object,status:new Map,key:"jobId"};exports.initialState=o,exports.CONSTANTS=a.default,exports.default=t},/***/
806:/***/
function(module,exports,e){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],r=t.type,u=t.payload;switch(r){case a.default.SAVE_LIST:return(0,n.saveList)(e,u);
// case CONSTANTS.NEW_ITEM:
//   return newItem(state, payload)
// case CONSTANTS.GET_ITEM:
//   return getItem(state, payload)
// case CONSTANTS.SAVE_ITEM:
//   return saveItem(state, payload)
case a.default.FETCH_REQUEST:return(0,n.fetchRequest)(e,u);case a.default.FETCH_SUCCESS:return(0,n.fetchSuccess)(e,u);case a.default.FETCH_FAILURE:return(0,n.fetchFailure)(e,u);default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONSTANTS=exports.initialState=void 0;var n=e(44),r=e(419),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o={params:{},page:{current:1,pageSize:10,total:0},spins:{tableSpin:!1},list:new Map,
// for Item detail
item:new Object,msg:new Object,status:new Map,key:"jobId"};exports.initialState=o,exports.CONSTANTS=a.default,exports.default=t},/***/
807:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(39),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){function o(e){return t(this,o),n(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e))}return r(o,e),a(o,[{key:"fetchList",value:function(e){return this.fetchGet("http://192.168.1.78:3010/resume/",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchSync",value:function(e){return this.fetchGet("http://192.168.1.78:3010/resume/sync",{body:JSON.stringify(e)}).catch(this.fetchCatch)}}]),o}(u.default);exports.default=i},/***/
808:/***/
function(module,exports,e){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],r=t.type,u=t.payload;switch(r){case a.default.SAVE_LIST:return(0,n.saveList)(e,u);
// case CONSTANTS.NEW_ITEM:
//   return newItem(state, payload)
// case CONSTANTS.GET_ITEM:
//   return getItem(state, payload)
// case CONSTANTS.SAVE_REMIND:
//   return saveRemind(state,payload)
case a.default.SAVE_ITEM:return(0,n.saveItem)(e,u);case a.default.FETCH_REQUEST:return(0,n.fetchRequest)(e,u);case a.default.FETCH_SUCCESS:return(0,n.fetchSuccess)(e,u);case a.default.FETCH_FAILURE:return(0,n.fetchFailure)(e,u);default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONSTANTS=exports.initialState=void 0;var n=e(44),r=e(420),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o={params:{},page:{current:1,pageSize:20,total:0},spins:{tableSpin:!1,formSpin:!1},list:new Map,item:new Object,msg:new Object,status:new Map,remind:new Object,key:"id"};exports.initialState=o,exports.CONSTANTS=a.default,exports.default=t},/***/
809:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(39),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){function o(e){return t(this,o),n(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e))}return r(o,e),a(o,[{key:"fetchList",value:function(e){return this.fetchGet("http://192.168.1.78:3010/report/fields",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"fetchRemind",value:function(e){return this.fetchGet("http://192.168.1.78:3010/report/remind",{body:JSON.stringify(e)}).catch(this.fetchCatch)}},{key:"saveRemind",value:function(e){return this.fetchPost("http://192.168.1.78:3010/report/remind",{body:JSON.stringify(e)}).catch(this.fetchCatch)}}]),o}(u.default);exports.default=i},/***/
810:/***/
function(module,exports,e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r=e(811),a=JSON.parse(sessionStorage.getItem("tabList")),o={list:a?a.list:[{title:"首页",key:"/dashboard",active:"true"},{title:"客户跟进",key:"/follow",active:"false"}],activeKey:a?a.activeKey:""},u=(0,r.handleActions)({"request tab list":function(e,t){return n({},e,{loading:!1})},"update tab list":function(e,n){var r=n.payload,a=e.list.find(function(e){return e.key===r.key}),o=void 0===a?[].concat(t(e.list),[r]):e.list;return sessionStorage.setItem("tabList",JSON.stringify({list:o,activeKey:r.key,loading:!1})),{list:o,activeKey:r.key,loading:!1}},"update tab checked":function(e,t){var r=t.payload.activeKey;return sessionStorage.setItem("tabList",JSON.stringify(n({},e,{activeKey:r,loading:!1}))),n({},e,{activeKey:r,loading:!1})},"delete tab from list":function(e,t){var n=t.payload.targetKey,r=[],a=0,o=void 0;
// eslint-disable-next-line no-nested-ternary
return e.list.map(function(e,t){e.key===n?a=t:r.push(e)}),o=e.activeKey,e.activeKey===n&&(o=r[a]?r[a].key:r[a-1]?r[a-1].key:""),sessionStorage.setItem("tabList",JSON.stringify({list:r,activeKey:o,loading:!1})),{list:r,activeKey:o,loading:!1}}},o);exports.default=u},/***/
811:/***/
function(module,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});/* harmony import */
var n=t(342),r=t(343),a=t(847),o=t(353),u=t(850);/* harmony reexport (binding) */
t.d(e,"createAction",function(){return n.a}),/* harmony reexport (binding) */
t.d(e,"createActions",function(){return u.a}),/* harmony reexport (binding) */
t.d(e,"handleAction",function(){return r.a}),/* harmony reexport (binding) */
t.d(e,"handleActions",function(){return a.a}),/* harmony reexport (binding) */
t.d(e,"combineActions",function(){return o.b})},/***/
812:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function n(e){return null===e}/* harmony default export */
e.a=n},/***/
813:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function n(e){return void 0===e}/* harmony default export */
e.a=n},/***/
814:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function n(e,t,n,c){e=Object(a.a)(e)?e:Object(i.a)(e),n=n&&!c?Object(u.a)(n):0;var s=e.length;return n<0&&(n=l(s+n,0)),Object(o.a)(e)?n<=s&&e.indexOf(t,n)>-1:!!s&&Object(r.a)(e,t,n)>-1}/* harmony import */
var r=t(815),a=t(202),o=t(203),u=t(819),i=t(822),l=Math.max;/* harmony default export */
e.a=n},/***/
815:/***/
function(module,e,t){"use strict";/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function n(e,t,n){return t===t?Object(o.a)(e,t,n):Object(r.a)(e,a.a,n)}/* harmony import */
var r=t(816),a=t(817),o=t(818);/* harmony default export */
e.a=n},/***/
816:/***/
function(module,e,t){"use strict";/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function n(e,t,n,r){for(var a=e.length,o=n+(r?1:-1);r?o--:++o<a;)if(t(e[o],o,e))return o;return-1}/* harmony default export */
e.a=n},/***/
817:/***/
function(module,e,t){"use strict";/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function n(e){return e!==e}/* harmony default export */
e.a=n},/***/
818:/***/
function(module,e,t){"use strict";/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function n(e,t,n){for(var r=n-1,a=e.length;++r<a;)if(e[r]===t)return r;return-1}/* harmony default export */
e.a=n},/***/
819:/***/
function(module,e,t){"use strict";/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function n(e){var t=Object(r.a)(e),n=t%1;return t===t?n?t-n:t:0}/* harmony import */
var r=t(820);/* harmony default export */
e.a=n},/***/
820:/***/
function(module,e,t){"use strict";/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function n(e){if(!e)return 0===e?e:0;if((e=Object(r.a)(e))===a||e===-a){return(e<0?-1:1)*o}return e===e?e:0}/* harmony import */
var r=t(821),a=1/0,o=1.7976931348623157e308;/* harmony default export */
e.a=n},/***/
821:/***/
function(module,e,t){"use strict";/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function n(e){if("number"==typeof e)return e;if(Object(a.a)(e))return o;if(Object(r.a)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Object(r.a)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=l.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):i.test(e)?o:+e}/* harmony import */
var r=t(201),a=t(204),o=NaN,u=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;/* harmony default export */
e.a=n},/***/
822:/***/
function(module,e,t){"use strict";/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function n(e){return null==e?[]:Object(r.a)(e,Object(a.a)(e))}/* harmony import */
var r=t(823),a=t(824);/* harmony default export */
e.a=n},/***/
823:/***/
function(module,e,t){"use strict";/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function n(e,t){return Object(r.a)(t,function(t){return e[t]})}/* harmony import */
var r=t(346);/* harmony default export */
e.a=n},/***/
824:/***/
function(module,e,t){"use strict";/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function n(e){return Object(o.a)(e)?Object(r.a)(e):Object(a.a)(e)}/* harmony import */
var r=t(825),a=t(351),o=t(202);/* harmony default export */
e.a=n},/***/
825:/***/
function(module,e,t){"use strict";/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function n(e,t){var n=Object(o.a)(e),c=!n&&Object(a.a)(e),f=!n&&!c&&Object(u.a)(e),d=!n&&!c&&!f&&Object(l.a)(e),p=n||c||f||d,h=p?Object(r.a)(e.length,String):[],m=h.length;for(var y in e)!t&&!s.call(e,y)||p&&(
// Safari 9 has enumerable `arguments.length` in strict mode.
"length"==y||
// Node.js 0.10 has enumerable non-index properties on buffers.
f&&("offset"==y||"parent"==y)||
// PhantomJS 2 has enumerable non-index properties on typed arrays.
d&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||
// Skip index properties.
Object(i.a)(y,m))||h.push(y);return h}/* harmony import */
var r=t(826),a=t(347),o=t(108),u=t(348),i=t(829),l=t(350),c=Object.prototype,s=c.hasOwnProperty;/* harmony default export */
e.a=n},/***/
826:/***/
function(module,e,t){"use strict";/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}/* harmony default export */
e.a=n},/***/
827:/***/
function(module,e,t){"use strict";/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function n(e){return Object(a.a)(e)&&Object(r.a)(e)==o}/* harmony import */
var r=t(73),a=t(91),o="[object Arguments]";/* harmony default export */
e.a=n},/***/
828:/***/
function(module,e,t){"use strict";/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function n(){return!1}/* harmony default export */
e.a=n},/***/
829:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function n(e,t){return!!(t=null==t?r:t)&&("number"==typeof e||a.test(e))&&e>-1&&e%1==0&&e<t}/** Used as references for various `Number` constants. */
var r=9007199254740991,a=/^(?:0|[1-9]\d*)$/;/* harmony default export */
e.a=n},/***/
830:/***/
function(module,e,t){"use strict";/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function n(e){return Object(o.a)(e)&&Object(a.a)(e.length)&&!!u[Object(r.a)(e)]}/* harmony import */
var r=t(73),a=t(345),o=t(91),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,/* harmony default export */
e.a=n},/***/
831:/***/
function(module,e,t){"use strict";/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function n(e){return function(t){return e(t)}}/* harmony default export */
e.a=n},/***/
832:/***/
function(module,e,t){"use strict";/* WEBPACK VAR INJECTION */
(function(module){/* harmony import */var n=t(272),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=r&&"object"==typeof module&&module&&!module.nodeType&&module,o=a&&a.exports===r,u=o&&n.a.process,i=function(){try{return u&&u.binding&&u.binding("util")}catch(e){}}();/* harmony default export */
e.a=i}).call(e,t(349)(module))},/***/
833:/***/
function(module,e,t){"use strict";/* harmony import */
var n=t(273),r=Object(n.a)(Object.keys,Object);/* harmony default export */
e.a=r},/***/
834:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function n(e){if(null==e)return!0;if(Object(i.a)(e)&&(Object(u.a)(e)||"string"==typeof e||"function"==typeof e.splice||Object(l.a)(e)||Object(s.a)(e)||Object(o.a)(e)))return!e.length;var t=Object(a.a)(e);if(t==f||t==d)return!e.size;if(Object(c.a)(e))return!Object(r.a)(e).length;for(var n in e)if(h.call(e,n))return!1;return!0}/* harmony import */
var r=t(351),a=t(835),o=t(347),u=t(108),i=t(202),l=t(348),c=t(352),s=t(350),f="[object Map]",d="[object Set]",p=Object.prototype,h=p.hasOwnProperty;/* harmony default export */
e.a=n},/***/
835:/***/
function(module,e,t){"use strict";/* harmony import */
var n=t(836),r=t(841),a=t(842),o=t(843),u=t(844),i=t(73),l=t(354),c=Object(l.a)(n.a),s=Object(l.a)(r.a),f=Object(l.a)(a.a),d=Object(l.a)(o.a),p=Object(l.a)(u.a),h=i.a;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
(n.a&&"[object DataView]"!=h(new n.a(new ArrayBuffer(1)))||r.a&&"[object Map]"!=h(new r.a)||a.a&&"[object Promise]"!=h(a.a.resolve())||o.a&&"[object Set]"!=h(new o.a)||u.a&&"[object WeakMap]"!=h(new u.a))&&(h=function(e){var t=Object(i.a)(e),n="[object Object]"==t?e.constructor:void 0,r=n?Object(l.a)(n):"";if(r)switch(r){case c:return"[object DataView]";case s:return"[object Map]";case f:return"[object Promise]";case d:return"[object Set]";case p:return"[object WeakMap]"}return t}),/* harmony default export */
e.a=h},/***/
836:/***/
function(module,e,t){"use strict";/* harmony import */
var n=t(109),r=t(58),a=Object(n.a)(r.a,"DataView");/* harmony default export */
e.a=a},/***/
837:/***/
function(module,e,t){"use strict";/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function n(e){return!(!Object(o.a)(e)||Object(a.a)(e))&&(Object(r.a)(e)?p:l).test(Object(u.a)(e))}/* harmony import */
var r=t(95),a=t(838),o=t(201),u=t(354),i=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,f=c.toString,d=s.hasOwnProperty,p=RegExp("^"+f.call(d).replace(i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");/* harmony default export */
e.a=n},/***/
838:/***/
function(module,e,t){"use strict";/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function n(e){return!!a&&a in e}/* harmony import */
var r=t(839),a=function(){var e=/[^.]+$/.exec(r.a&&r.a.keys&&r.a.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();/* harmony default export */
e.a=n},/***/
839:/***/
function(module,e,t){"use strict";/* harmony import */
var n=t(58),r=n.a["__core-js_shared__"];/* harmony default export */
e.a=r},/***/
840:/***/
function(module,e,t){"use strict";/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function n(e,t){return null==e?void 0:e[t]}/* harmony default export */
e.a=n},/***/
841:/***/
function(module,e,t){"use strict";/* harmony import */
var n=t(109),r=t(58),a=Object(n.a)(r.a,"Map");/* harmony default export */
e.a=a},/***/
842:/***/
function(module,e,t){"use strict";/* harmony import */
var n=t(109),r=t(58),a=Object(n.a)(r.a,"Promise");/* harmony default export */
e.a=a},/***/
843:/***/
function(module,e,t){"use strict";/* harmony import */
var n=t(109),r=t(58),a=Object(n.a)(r.a,"Set");/* harmony default export */
e.a=a},/***/
844:/***/
function(module,e,t){"use strict";/* harmony import */
var n=t(109),r=t(58),a=Object(n.a)(r.a,"WeakMap");/* harmony default export */
e.a=a},/***/
845:/***/
function(module,e,t){"use strict";/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function n(e){return null==e?"":Object(r.a)(e)}/* harmony import */
var r=t(846);/* harmony default export */
e.a=n},/***/
846:/***/
function(module,e,t){"use strict";/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function n(e){
// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof e)return e;if(Object(o.a)(e))
// Recursively convert values (susceptible to call stack limits).
return Object(a.a)(e,n)+"";if(Object(u.a)(e))return c?c.call(e):"";var t=e+"";return"0"==t&&1/e==-i?"-0":t}/* harmony import */
var r=t(180),a=t(346),o=t(108),u=t(204),i=1/0,l=r.a?r.a.prototype:void 0,c=l?l.toString:void 0;/* harmony default export */
e.a=n},/***/
847:/***/
function(module,e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){var r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],o=r.namespace;l()(Object(a.a)(e),"Expected handlers to be an plain object.");var i=Object(f.b)(e,o),d=Object(s.a)(i).map(function(e){return Object(c.a)(e,i[e],t)}),p=u.a.apply(void 0,n(d));return function(){var e=arguments.length<=0||void 0===arguments[0]?t:arguments[0],n=arguments[1];return p(e,n)}}/* harmony export (immutable) */
e.a=r;/* harmony import */
var a=t(72),o=t(848),u=t.n(o),i=t(18),l=t.n(i),c=t(343),s=t(205),f=t(355)},/***/
848:/***/
function(module,exports,e){"use strict";function t(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n){return t.reduce(function(e,t){return t(e,n)},e)}}exports.__esModule=!0,exports.default=t,module.exports=exports.default},/***/
849:/***/
function(module,e,t){"use strict";function n(e){var t=Object(r.a)(e),n=t.every(function(e){return"next"===e||"throw"===e});return t.length&&t.length<=2&&n}/* harmony export (immutable) */
e.a=n;/* harmony import */
var r=t(205)},/***/
850:/***/
function(module,e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Object(s.a)(Object(d.a)(n))?n.pop():{},u=a.namespace;return v()(n.every(p.a)&&(Object(p.a)(e)||Object(s.a)(e)),"Expected optional object followed by string action types"),Object(p.a)(e)?i([e].concat(n)):w({},o(e,u),i(n))}function o(e,t){var n=Object(O.a)(e,t),r=u(n);return Object(O.c)(r,t)}function u(e){function t(e){if(Object(h.a)(e)||Object(m.a)(e))return!0;if(Object(f.a)(e)){var t=E(e,2),n=t[0],r=void 0===n?c.a:n,a=t[1];return Object(h.a)(r)&&Object(h.a)(a)}return!1}return Object(g.a)(Object.keys(e),function(a,o){var u=e[o];v()(t(u),"Expected function, undefined, null, or array with payload and meta functions for "+o);var i=Object(f.a)(u)?y.a.apply(void 0,[o].concat(r(u))):Object(y.a)(o,u);return w({},a,n({},o,i))})}function i(e){var t=Object(g.a)(e,function(e,t){return w({},e,n({},t,c.a))}),r=u(t);return Object(g.a)(Object.keys(r),function(e,t){return w({},e,n({},Object(l.a)(t),r[t]))})}/* harmony export (immutable) */
e.a=a;/* harmony import */
var l=t(356),c=t(200),s=t(72),f=t(108),d=t(851),p=t(203),h=t(95),m=t(344),y=t(342),b=t(18),v=t.n(b),g=t(852),O=t(355),E=function(){function e(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},/***/
851:/***/
function(module,e,t){"use strict";/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function n(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}/* harmony default export */
e.a=n},/***/
852:/***/
function(module,e,t){"use strict";/* harmony default export */
e.a=function(e,t){return e.reduce(function(e,n){return t(e,n)},{})}},/***/
853:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Error404=exports.Error403=void 0;var n=e(854),r=t(n),a=e(857),o=t(a);exports.Error403=r.default,exports.Error404=o.default,exports.default=o.default},/***/
854:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e(0),i=t(u),l=e(357),c=t(l),s=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),o(t,[{key:"render",value:function(){return i.default.createElement(c.default,{type:"403"})}}]),t}(u.Component);exports.default=s},/***/
855:/***/
function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}};exports.default=t},/***/
856:/***/
function(module,exports){},/***/
857:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e(0),i=t(u),l=e(357),c=t(l),s=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),o(t,[{key:"render",value:function(){return i.default.createElement(c.default,{type:"404"})}}]),t}(u.Component);exports.default=s},/***/
858:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(25),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n),a=e(859),o=t(a),u=e(358),i=t(u),l=e(359),c=t(l),s=e(861),f=t(s);r.locale("zh-cn"),exports.default={locale:"zh-cn",Pagination:o.default,DatePicker:i.default,TimePicker:c.default,Calendar:f.default,Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",emptyText:"暂无数据",selectAll:"全选当页",selectInvert:"反选当页"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{notFoundContent:"无匹配结果",searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项"},Select:{notFoundContent:"无匹配结果"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件"}},module.exports=exports.default},/***/
859:/***/
function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={
// Options.jsx
items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",
// Pagination.jsx
prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页"},module.exports=exports.default},/***/
860:/***/
function(module,exports,e){"use strict";exports.__esModule=!0,exports.default={today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"},module.exports=exports.default},/***/
861:/***/
function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=e(358),n=function(e){return e&&e.__esModule?e:{default:e}}(t);exports.default=n.default,module.exports=exports.default},/***/
862:/***/
function(module,exports,e){"use strict";e(863),e(870),e(871),e(872),e(873),e(874),e(875),e(876),e(877)},/***/
863:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}e(48);var n=e(49),r=t(n),a=e(50),o=t(a),u=(o.default.mock({"data|10":[{"userid|+1":1,username:function(){return a.Random.name()},nickname:function(){return a.Random.name()},mobile:/1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}/,avatar:function(){return a.Random.image("100x100")},"status|1-2":1,email:function(){return a.Random.email("qftx.com")},"isadmin|0-1":1,loginTime:function(){return a.Random.datetime("yyyy-MM-dd HH:mm:ss")},expiresTime:function(){return a.Random.datetime("yyyy-MM-dd HH:mm:ss")}}],page:{current:1,pageSize:20,total:1e3}}),JSON.stringify({username:"test",password:"test"}),{method:"POST"});r.default.mock("http://192.168.1.78:3010/passport/login",{msg:"ok",data:{authID:"ABa3r33422sxxx",loginTime:1459227790173,expiresTime:1459217790173,userid:"1234",username:"jaxchow",nickname:"jax"}},u),
// fetchMock.post(`${APP_SERVER}/passport/login`, {
//   msg:"身份认证失败",
//   data:{}
// });
r.default.get("http://192.168.1.78:3010/passport/logout",{code:"true",msg:"ok",data:{authId:"ABa3r33422sxxx",loginTime:(new Date).getTime(),expiresTime:(new Date).getTime()+288e4,userid:"1234",username:"jaxchow",nickname:"jax"}})},/***/
864:/***/
function(module,exports,e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r=e(865),a=function(){this.routes=[],this._calls={},this._matchedCalls=[],this._unmatchedCalls=[],this._holdingPromises=[],this.bindMethods()};a.prototype.bindMethods=function(){this.fetchMock=a.prototype.fetchMock.bind(this),this.restore=a.prototype.restore.bind(this),this.reset=a.prototype.reset.bind(this)},a.prototype.mock=function(e,t,r){var a=void 0;
// Handle the variety of parameters accepted by mock (see README)
if(e&&t&&r)a=n({matcher:e,response:t},r);else if(e&&t)a={matcher:e,response:t};else{if(!e||!e.matcher)throw new Error("Invalid parameters passed to fetch-mock");a=e}return this.addRoute(a),this._mock()},a.prototype.once=function(e,t,r){return this.mock(e,t,n({},r,{times:1}))},a.prototype._mock=function(){
// Do this here rather than in the constructor to ensure it's scoped to the test
return this.isSandbox||(this.realFetch=this.realFetch||a.global.fetch,a.global.fetch=this.fetchMock),this},a.prototype._unMock=function(){return this.realFetch&&(a.global.fetch=this.realFetch,this.realFetch=null),this.fallbackResponse=null,this},a.prototype.catch=function(e){return this.fallbackResponse,this.fallbackResponse=e||"ok",this._mock()},a.prototype.spy=function(){return this._mock(),this.catch(this.realFetch)},a.prototype.fetchMock=function(e,t){var n=this,r=this.Promise||a.Promise,o=void 0,u=new r(function(e){return o=e});this._holdingPromises.push(u);var i=this.router(e,t);if(!i){if(this.push(null,[e,t]),!this.fallbackResponse)throw new Error("No fallback response defined for "+(t&&t.method||"GET")+" to "+e);i=this.fallbackResponse}if("function"==typeof i&&(i=i(e,t)),"function"==typeof i.then){var l=i.then(function(r){return n.mockResponse(e,r,t,o)});return r.resolve(l)}return this.mockResponse(e,i,t,o)},a.prototype.router=function(e,t){for(var n=void 0,r=0,a=this.routes.length;r<a;r++)if(n=this.routes[r],n.matcher(e,t))return this.push(n.name,[e,t]),n.response},a.prototype.addRoute=function(e){if(!e)throw new Error(".mock() must be passed configuration for a route");
// Allows selective application of some of the preregistered routes
this.routes.push(r(e,a.Request,a.Headers))},a.prototype.mockResponse=function(e,n,r,o){var u=this.Promise||a.Promise;
// If the response is a pre-made Response, respond with it
if(
// It seems odd to call this in here even though it's already called within fetchMock
// It's to handle the fact that because we want to support making it very easy to add a
// delay to any sort of response (including responses which are defined with a function)
// while also allowing function responses to return a Promise for a response config.
"function"==typeof n&&(n=n(e,r)),a.Response.prototype.isPrototypeOf(n))return this.respond(u.resolve(n),o);
// If the response says to throw an error, throw it
if(n.throws)return this.respond(u.reject(n.throws),o);
// If the response config looks like a status, start to generate a simple response
"number"==typeof n?n={status:n}:"string"!=typeof n&&(n.body||n.headers||n.throws||n.status||n.__redirectUrl)||(n={body:n});
// Now we are sure we're dealing with a response config object, so start to
// construct a real response from it
var i=n.opts||{};
// Handle a reasonably common misuse of the library - returning an object
// with the property 'status'
if(
// set the response url
i.url=n.__redirectUrl||e,n.status&&("number"!=typeof n.status||parseInt(n.status,10)!==n.status||n.status<200||n.status>599))throw new TypeError("Invalid status "+n.status+' passed on response object.\nTo respond with a JSON object that has status as a property assign the object to body\ne.g. {"body": {"status: "registered"}}');
// set up the response status
i.status=n.status||200,i.statusText=a.statusTextMap[""+i.status],
// Set up response headers. The ternary operator is to cope with
// new Headers(undefined) throwing in Chrome
// https://code.google.com/p/chromium/issues/detail?id=335871
i.headers=n.headers?new a.Headers(n.headers):new a.Headers;
// start to construct the body
var l=n.body;
// On the server we need to manually construct the readable stream for the
// Response object (on the client this is done automatically)
if(
// convert to json if we need to
i.sendAsJson=void 0===n.sendAsJson?a.config.sendAsJson:n.sendAsJson,i.sendAsJson&&null!=n.body&&"object"===(void 0===l?"undefined":t(l))&&(
//eslint-disable-line
l=JSON.stringify(l)),
// add a Content-Length header if we need to
i.includeContentLength=void 0===n.includeContentLength?a.config.includeContentLength:n.includeContentLength,i.includeContentLength&&"string"==typeof l&&!i.headers.has("Content-Length")&&i.headers.set("Content-Length",l.length.toString()),a.stream){var c=new a.stream.Readable;null!=l&&
//eslint-disable-line
c.push(l,"utf-8"),c.push(null),l=c}var s=new a.Response(l,i);
// When mocking a followed redirect we must wrap the response in an object
// which sets the redirected flag (not a writable property on the actual response)
return n.__redirectUrl&&(s=Object.create(s,{redirected:{value:!0},url:{value:n.__redirectUrl},
// TODO extend to all other methods as requested by users
// Such a nasty hack
text:{value:s.text.bind(s)},json:{value:s.json.bind(s)}})),this.respond(u.resolve(s),o)},a.prototype.respond=function(e,t){return e.then(t,t),e},a.prototype.flush=function(){return Promise.all(this._holdingPromises)},a.prototype.push=function(e,t){e?(this._calls[e]=this._calls[e]||[],this._calls[e].push(t),this._matchedCalls.push(t)):this._unmatchedCalls.push(t)},a.prototype.restore=function(){return this._unMock(),this.reset(),this.routes=[],this},a.prototype.reset=function(){return this._calls={},this._matchedCalls=[],this._unmatchedCalls=[],this._holdingPromises=[],this.routes.forEach(function(e){return e.reset&&e.reset()}),this},a.prototype.calls=function(e){return e?this._calls[e]||[]:{matched:this._matchedCalls,unmatched:this._unmatchedCalls}},a.prototype.lastCall=function(e){var t=e?this.calls(e):this.calls().matched;return t&&t.length?t[t.length-1]:void 0},a.prototype.lastUrl=function(e){var t=this.lastCall(e);return t&&t[0]},a.prototype.lastOptions=function(e){var t=this.lastCall(e);return t&&t[1]},a.prototype.called=function(e){return e?!(!this._calls[e]||!this._calls[e].length):!(!this._matchedCalls.length&&!this._unmatchedCalls.length)},a.prototype.done=function(e){var t=this;
// Can't use array.every because
// a) not widely supported
// b) would exit after first failure, which would break the logging
return 0===(e?[e]:this.routes.map(function(e){return e.name})).map(function(e){if(!t.called(e))return!1;
// would use array.find... but again not so widely supported
var n=(t.routes.filter(function(t){return t.name===e})||[{}])[0].times;if(!n)return!0;var r=t.calls(e).length;return!(n>r)}).filter(function(e){return!e}).length},a.config={includeContentLength:!1,sendAsJson:!0},a.prototype.configure=function(e){n(a.config,e)},a.setImplementations=a.prototype.setImplementations=function(e){a.Headers=e.Headers||a.Headers,a.Request=e.Request||a.Request,a.Response=e.Response||a.Response,a.Promise=e.Promise||a.Promise},a.prototype.sandbox=function(e){if(this.routes.length||this.fallbackResponse)throw new Error(".sandbox() can only be called on fetch-mock instances that don't have routes configured already");var t=new a,r=void 0,o=function(){return r.apply(null,arguments)},u=n(o,// Ensures that the entire returned object is a callable function
a.prototype,// all prototype methods
t);return u.bindMethods(),r=u.fetchMock,u.isSandbox=!0,e&&(u.Promise=e),u},["get","post","put","delete","head","patch"].forEach(function(e){a.prototype[e]=function(t,r,a){return this.mock(t,r,n({},a,{method:e.toUpperCase()}))},a.prototype[e+"Once"]=function(t,r,a){return this.once(t,r,n({},a,{method:e.toUpperCase()}))}}),module.exports=a},/***/
865:/***/
function(module,exports,e){"use strict";function t(e,t){var r=Object.keys(e).map(function(t){return{key:t.toLowerCase(),val:e[t]}});return function(e){e||(e={}),e instanceof t&&(e=e.raw());var a=Object.keys(e).reduce(function(t,n){return t[n.toLowerCase()]=e[n],t},{});return r.every(function(e){return n(a,e)})}}function n(e,t){var n=t.key,r=t.val,a=Array.isArray(e[n])?e[n]:[e[n]],o=Array.isArray(r)?r:[r];if(a.length!==o.length)return!1;for(var u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0}function r(e,t,n){return n.prototype.isPrototypeOf(e)?{url:e.url,method:e.method,headers:function(){var t={};return e.headers.forEach(function(n){return t[n]=e.headers.name}),t}()}:{url:e,method:t&&t.method||"GET",headers:t&&t.headers}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=e(866),u=e(867),i={begin:function(e){return function(t){return 0===t.indexOf(e)}},end:function(e){return function(t){return t.substr(-e.length)===e}},glob:function(e){var t=o(e.replace(/^glob:/,""));return function(e){return t.test(e)}},express:function(e){var t=u(e.replace(/^express:/,""));return function(e){return t.test(e)}}};module.exports=function(e,n,o){function u(e){return!c||c===(e?e.toLowerCase():"get")}if(e=a({},e),void 0===e.response)throw new Error("Each route must define a response");if(!e.matcher)throw new Error("each route must specify a string, regex or function to match calls to fetch");e.name||(e.name=e.matcher.toString(),e.__unnamed=!0);var l=void 0,c=e.method&&e.method.toLowerCase(),s=e.headers?t(e.headers,o):function(){return!0};"function"==typeof e.matcher?l=e.matcher:"string"==typeof e.matcher?(Object.keys(i).some(function(t){if(0===e.matcher.indexOf(t+":")){var n=e.matcher.replace(new RegExp("^"+t+":"),"");return l=i[t](n),!0}}),l||("*"===e.matcher?l=function(){return!0}:0===e.matcher.indexOf("^")?function(){var t=e.matcher.substr(1);l=function(e){return 0===e.indexOf(t)}}():function(){var t=e.matcher;l=function(e){return e===t}}())):e.matcher instanceof RegExp&&function(){var t=e.matcher;l=function(e){return t.test(e)}}();var f=function(e,t){var a=r(e,t,n);return s(a.headers)&&u(a.method)&&l(a.url,t)};return e.times?function(){var t=e.times;e.matcher=function(e,n){if(t&&f(e,n))return t--,!0},e.reset=function(){return t=e.times}}():e.matcher=f,e}},/***/
866:/***/
function(module,exports){module.exports=function(e,t){if("string"!=typeof e)throw new TypeError("Expected a string");for(var n,r=String(e),a="",o=!!t&&!!t.extended,u=!!t&&!!t.globstar,i=!1,l=t&&"string"==typeof t.flags?t.flags:"",c=0,s=r.length;c<s;c++)switch(n=r[c]){case"\\":case"/":case"$":case"^":case"+":case".":case"(":case")":case"=":case"!":case"|":a+="\\"+n;break;case"?":if(o){a+=".";break}case"[":case"]":if(o){a+=n;break}case"{":if(o){i=!0,a+="(";break}case"}":if(o){i=!1,a+=")";break}case",":if(i){a+="|";break}a+="\\"+n;break;case"*":for(
// Move over all consecutive "*"'s.
// Also store the previous and next characters
var f=r[c-1],d=1;"*"===r[c+1];)d++,c++;var p=r[c+1];if(u){// to the end of the segment
d>1&&("/"===f||void 0===f)&&("/"===p||void 0===p)?(
// it's a globstar, so match zero or more path segments
a+="(?:[^/]*(?:/|$))*",c++):
// it's not a globstar, so only match one path segment
a+="[^/]*"}else
// globstar is disabled, so treat any number of "*" as one
a+=".*";break;default:a+=n}
// When regexp 'g' flag is specified don't
// constrain the regular expression with ^ & $
return l&&~l.indexOf("g")||(a="^"+a+"$"),new RegExp(a,l)}},/***/
867:/***/
function(module,exports,e){/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function t(e,t){for(var n,r=[],a=0,o=0,l="",c=t&&t.delimiter||"/";null!=(n=y.exec(e));){var s=n[0],f=n[1],d=n.index;
// Ignore already escaped sequences.
if(l+=e.slice(o,d),o=d+s.length,f)l+=f[1];else{var p=e[o],h=n[2],m=n[3],b=n[4],v=n[5],g=n[6],O=n[7];
// Push the current path onto the tokens.
l&&(r.push(l),l="");var E=null!=h&&null!=p&&p!==h,w="+"===g||"*"===g,j="?"===g||"*"===g,x=n[2]||c,k=b||v;r.push({name:m||a++,prefix:h||"",delimiter:x,optional:j,repeat:w,partial:E,asterisk:!!O,pattern:k?i(k):O?".*":"[^"+u(x)+"]+?"})}}
// Match any characters still remaining.
// If the path exists, push it onto the end.
return o<e.length&&(l+=e.substr(o)),l&&r.push(l),r}/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function n(e,n){return o(t(e,n))}/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function r(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function a(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}/**
 * Expose a method for transforming tokens into the path function.
 */
function o(e){
// Compile all the patterns before compilation.
for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,o){for(var u="",i=n||{},l=o||{},c=l.pretty?r:encodeURIComponent,s=0;s<e.length;s++){var f=e[s];if("string"!=typeof f){var d,p=i[f.name];if(null==p){if(f.optional){
// Prepend partial segment prefixes.
f.partial&&(u+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(m(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(d=c(p[h]),!t[s].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(d)+"`");u+=(0===h?f.prefix:f.delimiter)+d}}else{if(d=f.asterisk?a(p):c(p),!t[s].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');u+=f.prefix+d}}else u+=f}return u}}/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function l(e,t){return e.keys=t,e}/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function c(e){return e.sensitive?"":"i"}/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function s(e,t){
// Use a negative lookahead to match only capturing groups.
var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function f(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(h(e[a],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",c(n)),t)}/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function d(e,n,r){return p(t(e,r),n,r)}/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function p(e,t,n){m(t)||(n=/** @type {!Object} */t||n,t=[]),n=n||{};
// Iterate over the tokens and create our regexp string.
for(var r=n.strict,a=!1!==n.end,o="",i=0;i<e.length;i++){var s=e[i];if("string"==typeof s)o+=u(s);else{var f=u(s.prefix),d="(?:"+s.pattern+")";t.push(s),s.repeat&&(d+="(?:"+f+d+")*"),d=s.optional?s.partial?f+"("+d+")?":"(?:"+f+"("+d+"))?":f+"("+d+")",o+=d}}var p=u(n.delimiter||"/"),h=o.slice(-p.length)===p;
// In non-strict mode we allow a slash at the end of match. If the path to
// match already ends with a slash, we remove it for consistency. The slash
// is valid at the end of a path match, not in the middle. This is important
// in non-ending mode, where "/test/" shouldn't match "/test//route".
return r||(o=(h?o.slice(0,-p.length):o)+"(?:"+p+"(?=$))?"),o+=a?"$":r&&h?"":"(?="+p+"|$)",l(new RegExp("^"+o,c(n)),t)}/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function h(e,t,n){/** @type {!Object} */
/** @type {!Array} */
/** @type {!Array} */
/** @type {!Array} */
/** @type {string} */
/** @type {!Array} */
return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?s(e,t):m(e)?f(e,t,n):d(e,t,n)}var m=e(868);/**
 * Expose `pathToRegexp`.
 */
module.exports=h,module.exports.parse=t,module.exports.compile=n,module.exports.tokensToFunction=o,module.exports.tokensToRegExp=p;/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var y=new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
"(\\\\.)",
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
"([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},/***/
868:/***/
function(module,exports){module.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},/***/
869:/***/
function(module,exports,e){"use strict";var t={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"};module.exports=t},/***/
870:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r;e(48);var a=e(49),o=t(a),u=e(50),i=t(u),l=i.default.mock({"list|10":[(r={"custFollowId|+1":1,nextActionDate:function(){return u.Random.name()},ownerAcc:function(){return u.Random.cname()},optionName:function(){return u.Random.name()},groupName:function(){return u.Random.name()}},n(r,"nextActionDate",function(){return u.Random.datetime("yyyy-MM-dd")}),n(r,"showMinActionDate",function(){return u.Random.datetime("yyyy-MM-dd")}),n(r,"showLastActionDate",function(){return u.Random.datetime("yyyy-MM-dd")}),r)],page:{current:2,pageSize:10,total:1e3}});o.default.mock("http://192.168.1.78:3010/callrecord/soundListJson",l)},/***/
871:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}e(48);var n=e(49),r=t(n),a=e(50),o=t(a),u=o.default.mock({"list|10":[{"id|+1":1,userAccount:function(){return a.Random.name()},userName:function(){return a.Random.cname()},roleName:function(){return a.Random.name()},"通信号码":function(){return a.Random.ctitle(11,11)},groupName:function(){return a.Random.word()},shareGroupNames:function(){return a.Random.ctitle(3,5)},serveTime:function(){return a.Random.datetime("yyyy-MM-dd")},mobile:function(){return a.Random.ctitle(11,11)},post:function(){return a.Random.ctitle(3,5)}}],page:{current:1,pageSize:20,total:1e3}}),i=(o.default.mock({"data|10":[{id:function(){return a.Random.guid()},name:function(){return a.Random.cname()},"children|5":[{id:function(){return a.Random.guid()},name:function(){return a.Random.cname()},isLeaf:function(){return a.Random.boolean()}}]}]}),{item:{id:"1230",username:"jaxcchow",userAccount:"jaxchow",userName:"jax",roleName:"admin","通信号码":"1358468465",groupName:"ABD",shareGroupNames:"12",serveTime:"13216546",mobile:"123456546",post:"1335135"}});r.default.mock("http://192.168.1.78:3010/member/list",u),r.default.post("http://192.168.1.78:3010/member/",i),r.default.mock("http://192.168.1.78:3010/member/1?",i)},/***/
872:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}e(48);var n=e(49),r=t(n),a=e(50),o=t(a),u=o.default.mock({"list|10":[{"jobId|+1":1,jobName:function(){return a.Random.name()},"jobNum|1-20":20,jobSource:function(){return a.Random.region()},"status|1-5":5,refrshDate:function(){return a.Random.datetime("yyyy-MM-dd HH:mm")},"jobTotal|1-200":200}],page:{current:1,pageSize:20,total:1e3}});r.default.mock("http://192.168.1.78:3010/job/",u)},/***/
873:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}e(48);var n=e(49),r=t(n),a=e(50),o=t(a),u=o.default.mock({"list|10":[{"jobId|+1":1,jobName:function(){return a.Random.name()},"jobNum|1-20":20,jobSource:function(){return a.Random.region()},"status|1-5":5,refrshDate:function(){return a.Random.datetime("yyyy-MM-dd HH:mm")},"jobTotal|1-200":200}],page:{current:1,pageSize:20,total:1e3}});r.default.mock("http://192.168.1.78:3010/resume/",u)},/***/
874:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}e(48);var n=e(49),r=t(n),a=e(50),o=t(a),u=o.default.mock({"list|10":[{"jobId|+1":1,jobName:function(){return a.Random.name()},"jobNum|1-20":20,jobSource:function(){return a.Random.region()},"status|1-5":5,refrshDate:function(){return a.Random.datetime("yyyy-MM-dd HH:mm")},"jobTotal|1-200":200}],page:{current:1,pageSize:20,total:1e3}});r.default.mock("http://192.168.1.78:3010/resume/",u)},/***/
875:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}e(48);var n=e(49),r=t(n),a=e(50),o=t(a),u=o.default.mock({"list|8":[{"id|+1":1,name:function(){return a.Random.cname()},icons:function(){return a.Random.image("125x125")},"total|1-200":200}],page:{current:1,pageSize:20,total:1e3}});r.default.mock("http://192.168.1.78:3010/dashboard/notices",u)},/***/
876:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}e(48);var n=e(49),r=t(n),a=e(50),o=t(a),u=o.default.mock({"list|8":[{id:function(){return a.Random.integer(1,1e3)},label:function(){return a.Random.cname()},value:function(){return a.Random.integer(1,1e3)}}]});r.default.mock("http://192.168.1.78:3010/constants/select",u),r.default.mock("http://192.168.1.78:3010/constants/select2",u)},/***/
877:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}e(48);var n=e(49),r=t(n),a=e(50),o=t(a),u=o.default.mock({item:{isMsg000:1,isMsg00:1,isMsg01:0,isMsg02:1,isMsg03:0,isMsg04:1,isMsg05:0,isMsg06:1,aa:2,ab:2,ac:1,ad:1,ae:1,af:1}});r.default.mock("http://192.168.1.78:3010/settings/remind",u);var i=o.default.mock({"list|10":[{"id|+1":1,fieldName:function(){return a.Random.name()},fieldType:function(){return a.Random.name()},fieldEnable:function(){return a.Random.ctitle(11,11)},createTime:function(){return a.Random.datetime("yyyy-MM-dd")}}],page:{current:1,pageSize:20,total:20}});r.default.mock("http://192.168.1.78:3010/settings/fields",i)},/***/
95:/***/
function(module,e,t){"use strict";/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function n(e){if(!Object(a.a)(e))return!1;
// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=Object(r.a)(e);return t==u||t==i||t==o||t==l}/* harmony import */
var r=t(73),a=t(201),o="[object AsyncFunction]",u="[object Function]",i="[object GeneratorFunction]",l="[object Proxy]";/* harmony default export */
e.a=n},/***/
96:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=e(117),u=t(o),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e(0),s=t(c),f=function(e){function t(){for(var e,a,o,u,i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n(this,t),a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.saveFormRef=function(e){o.form=e},u=a,r(o,u)}return a(t,e),l(t,[{key:"handleBackRoute",value:function(){var e=this.props,t=e.actions;e.history;
//console.log(actions)
t.backRoute()}},{key:"handleSaveRoute",value:function(){
//console.log(formView)
this.refs.formView.onSubmit()}},{key:"render",value:function(){var e=this.props,t=e.route,n=e.children;return s.default.createElement(u.default,{title:t.breadcrumbName,visible:!0,maskClosable:!1,onCancel:this.handleBackRoute.bind(this),onOk:this.handleSaveRoute.bind(this)},s.default.createElement(n.type,i({},this.props,{ref:"formView"})))}}]),t}(c.Component);exports.default=f},/***/
97:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o);/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date:   2017-09-11T13:26:22+08:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Email:  jaxchow@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last modified time: 2017-09-11T17:50:18+08:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @ 外包组件装饰器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
exports.default=function(e){return function(i){return function(o){function l(){return t(this,l),n(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return r(l,o),a(l,[{key:"render",value:function(){return u.default.createElement(e,this.props,u.default.createElement(i,this.props))}}]),l}(o.Component)}}}},[421]);