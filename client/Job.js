webpackJsonp([0],{/***/
1109:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Routes=void 0;var n=e(0),r=t(n),o=e(10),a=(t(o),e(62)),u=e(224),l=(t(u),e(1124)),i=t(l),c=(e(63),e(226)),f=(t(c),e(227)),d=(t(f),e(225));t(d),r.default.createElement(a.Router,{path:"/"},i.default.props.children);
// ReactDOM.render(
//   <Provider store={store}>
//     <Router routes={AppRouter} history={history} ></Router>
//   </Provider>
// , createContainer())
exports.Routes=i.default},/***/
1124:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Container=void 0;var n=e(0),r=t(n),o=e(62),a=(t(o),e(1125)),u=t(a),l=r.default.createElement(o.Router,null,r.default.createElement(o.IndexRoute,{component:u.default}),r.default.createElement(o.Route,{path:"list",components:u.default}),r.default.createElement(o.Route,{path:"detail",components:a.DetailContainer}),r.default.createElement(o.Route,{path:"iframe",components:a.iframeContainer}));exports.Container=u.default,exports.default=l},/***/
1125:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.DetailContainer=exports.iframeContainer=void 0;var n=e(0),r=(t(n),e(51)),o=e(63),a=e(1126),u=t(a),l=e(1129),i=t(l),c=e(1130),f=t(c),d=e(417),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(d),p=function(e){return{reduce:e.jobReducer,appConfig:e.appReducer}},y=function(e){return{actions:(0,r.bindActionCreators)(s,e),dispatch:e}},h=(0,o.connect)(p,y,null,{pure:!1})(u.default),b=(0,o.connect)(p,y,null,{pure:!1})(i.default),m=(0,o.connect)(p,y,null,{pure:!1})(f.default);exports.iframeContainer=m,exports.DetailContainer=b,exports.default=h},/***/
1126:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=e(13),l=t(u),i=e(116),c=t(i),f=e(115),d=t(f),s=e(17),p=t(s),y=e(27),h=t(y),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=e(0),w=t(v),O=e(25),E=(t(O),e(78)),j=t(E),g=e(228),k=t(g),C=e(412),P=(t(C),e(408)),M=t(P),I=e(1127),R=t(I),S=(h.default.Option,function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),m(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.actions;e.router;t.listAction()}},{key:"handleMenuClick",value:function(){alert("sss")}},{key:"renderToolbar",value:function(){var e=(this.props.actions,w.default.createElement(d.default,{onClick:this.handleMenuClick},w.default.createElement(d.default.Item,{key:"1"},w.default.createElement(l.default,{type:"taobao"}),"智联招聘"),w.default.createElement(d.default.Item,{key:"2"},w.default.createElement(l.default,{type:"gitlab"}),"前程无忧"),w.default.createElement(d.default.Item,{key:"3"},w.default.createElement(l.default,{type:"qq"}),"58同城")));return w.default.createElement(p.default.Group,null,w.default.createElement(c.default.Button,{type:"primary",onClick:this.handleButtonClick,overlay:e},w.default.createElement(l.default,{type:"gitlab"}),"添加岗位"),w.default.createElement(M.default,null,w.default.createElement(p.default,{type:"primary",icon:"sync",disabled:this.selectMultiple(),onClick:this.handleAddRoute.bind(this)},"批量刷新")))}},{key:"renderSearchBar",value:function(){var e=(this.props.reduce,[{label:"职业名称",value:"jobName"}]);
//  let params = reduce.params || {}
return w.default.createElement(k.default,{keysOption:e,filterSubmitHandler:this.handleFilter.bind(this)})}},{key:"renderTableList",value:function(){var e=this,t=this.props.reduce,r=t.spins.tableSpin,o=[].concat(n(t.list.values())),a={onChange:this.onSelectChange.bind(this)},u=w.default.createElement(d.default,null,w.default.createElement(d.default.Item,null,w.default.createElement(l.default,{type:"sync"}),"同步"),w.default.createElement(d.default.Item,null,w.default.createElement(l.default,{type:"plus"}),"添加"),w.default.createElement(d.default.Item,null,w.default.createElement(l.default,{type:"edit"}),"查看")),i={loading:r,rowKey:"jobId",title:function(){return e.renderToolbar()},rowSelection:a,columns:[{type:"selection"},{title:"职位名称",key:"jobName",width:120,dataIndex:"jobName",sorter:function(e,t){return parseInt(e.nextActionDate,10)-parseInt(t.nextActionDate,10)}},{title:"招聘人数",key:"jobNum",dataIndex:"jobNum"},{title:"渠道",key:"jobSource",dataIndex:"jobSource",width:170,sorter:function(e,t){return e.showLastActionDate.length-t.showLastActionDate.length}},{title:"状态",key:"status",dataIndex:"status",width:120},{title:"刷新时间",key:"refrshDate",dataIndex:"refrshDate",width:180},{title:"操作",dataIndex:"jobId",width:200,render:function(e){return w.default.createElement(c.default,{overlay:u},w.default.createElement("a",{className:"ant-dropdown-link"},w.default.createElement(l.default,{type:"bars"})))}},{title:w.default.createElement(l.default,{type:"setting",onClick:this.configColumns.bind(this)})}]};return w.default.createElement(R.default,b({style:{width:"100%"}},i,{dataSource:o}))}},{key:"render",value:function(){var e=this.props.children;return w.default.createElement("div",null,e,this.renderSearchBar(),this.renderTableList())}}]),t}(j.default));exports.default=S},/***/
1127:/***/
function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=e(1128),n=function(e){return e&&e.__esModule?e:{default:e}}(t);exports.default=n.default},/***/
1128:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a,u,l=e(142),i=t(l),c=e(0),f=(t(c),u=a=function(e){function t(e){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),t}(i.default),a.defaultProps={size:"middle",prefixCls:"ant-table",pagination:{showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]}},u);exports.default=f},/***/
1129:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e(0),l=t(u),i=e(25),c=(t(i),function(e){function t(e){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),a(t,[{key:"componentWillMount",value:function(){var e=this.props;e.actions,e.router}},{key:"render",value:function(){this.props.children;return l.default.createElement("div",null,"jobDetail")}}]),t}(u.Component));exports.default=c},/***/
1130:/***/
function(module,exports,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e(0),u=function(e){return e&&e.__esModule?e:{default:e}}(a),l=e(78),i=function(e){function a(){return t(this,a),n(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return r(a,e),o(a,[{key:"render",value:function(){this.props.children;return u.default.createElement(l.IframePage,{src:"http://www.baidu.com",name:"baidu"})}}]),a}(a.Component);exports.default=i}});