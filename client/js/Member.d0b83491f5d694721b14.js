webpackJsonp([1],{/***/
1259:/***/
function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Routes = undefined;\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(10);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouter = __webpack_require__(66);\n\nvar _CreateContainer = __webpack_require__(249);\n\nvar _CreateContainer2 = _interopRequireDefault(_CreateContainer);\n\nvar _routes = __webpack_require__(1287);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _reactRedux = __webpack_require__(67);\n\nvar _store = __webpack_require__(251);\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _themes = __webpack_require__(252);\n\nvar _themes2 = _interopRequireDefault(_themes);\n\nvar _CreateRoutes = __webpack_require__(250);\n\nvar _CreateRoutes2 = _interopRequireDefault(_CreateRoutes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AppRouter = _react2.default.createElement(\n  _reactRouter.Router,\n  { path: '/' },\n  _routes2.default.props.children\n);\n\n// ReactDOM.render(\n//   <Provider store={store}>\n//     <Router routes={AppRouter} history={history}></Router>\n//   </Provider>\n// , createContainer())\n\nexports.Routes = _routes2.default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app_modules/Member/index.js\n// module id = 1259\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app_modules/Member/index.js?")},/***/
1263:/***/
function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _spin = __webpack_require__(69);\n\nvar _spin2 = _interopRequireDefault(_spin);\n\nvar _button = __webpack_require__(27);\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _input = __webpack_require__(50);\n\nvar _input2 = _interopRequireDefault(_input);\n\nvar _select = __webpack_require__(33);\n\nvar _select2 = _interopRequireDefault(_select);\n\nvar _dec, _class;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Page = __webpack_require__(83);\n\nvar _Modal = __webpack_require__(101);\n\nvar _Modal2 = _interopRequireDefault(_Modal);\n\nvar _WrapperComponent = __webpack_require__(102);\n\nvar _WrapperComponent2 = _interopRequireDefault(_WrapperComponent);\n\nvar _BaseForm = __webpack_require__(68);\n\nvar _BaseForm2 = _interopRequireDefault(_BaseForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date:   2017-07-06T15:50:31+08:00\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Email:  jaxchow@gmail.com\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last modified time: 2018-01-17T17:32:29+08:00\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */\n\nvar Option = _select2.default.Option;\nvar TextArea = _input2.default.TextArea;\n\nvar MemberForm = function (_Component) {\n  _inherits(MemberForm, _Component);\n\n  function MemberForm() {\n    _classCallCheck(this, MemberForm);\n\n    return _possibleConstructorReturn(this, (MemberForm.__proto__ || Object.getPrototypeOf(MemberForm)).apply(this, arguments));\n  }\n\n  _createClass(MemberForm, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          form = _props.form,\n          _props$initialValues = _props.initialValues,\n          username = _props$initialValues.username,\n          roleName = _props$initialValues.roleName,\n          groupName = _props$initialValues.groupName,\n          serveTime = _props$initialValues.serveTime,\n          post = _props$initialValues.post,\n          mobile = _props$initialValues.mobile,\n          handleSubmit = _props.handleSubmit,\n          children = _props.children,\n          saveFormRef = _props.saveFormRef;\n\n      var formFullItemLayout = {\n        labelCol: {\n          span: 6\n        },\n        wrapperCol: {\n          span: 18\n        }\n      };\n      return _react2.default.createElement(\n        _BaseForm2.default,\n        { onSubmit: handleSubmit, ref: saveFormRef },\n        _react2.default.createElement(\n          _BaseForm.FormItem,\n          formFullItemLayout,\n          _react2.default.createElement(_input2.default, { label: '\\u6210\\u5458\\u59D3\\u540D', name: 'username', initialValue: username })\n        ),\n        _react2.default.createElement(\n          _BaseForm.FormItem,\n          formFullItemLayout,\n          _react2.default.createElement(_input2.default, { label: '\\u6027\\u522B', name: 'roleName', initialValue: roleName })\n        ),\n        _react2.default.createElement(\n          _BaseForm.FormItem,\n          formFullItemLayout,\n          _react2.default.createElement(_input2.default, { label: '\\u6240\\u5728\\u90E8\\u95E8', name: 'groupName', initialValue: groupName })\n        ),\n        _react2.default.createElement(\n          _BaseForm.FormItem,\n          formFullItemLayout,\n          _react2.default.createElement(_input2.default, { label: '\\u5165\\u804C\\u65F6\\u95F4', name: 'serveTime', initialValue: serveTime })\n        ),\n        _react2.default.createElement(\n          _BaseForm.FormItem,\n          formFullItemLayout,\n          _react2.default.createElement(_input2.default, { label: '\\u804C\\u52A1', name: 'post', initialValue: post })\n        ),\n        _react2.default.createElement(\n          _BaseForm.FormItem,\n          formFullItemLayout,\n          _react2.default.createElement(_input2.default, { label: '\\u79FB\\u52A8\\u7535\\u8BDD', name: 'mobile', initialValue: mobile })\n        ),\n        children\n      );\n    }\n  }]);\n\n  return MemberForm;\n}(_react.Component);\n\nvar MemberFormView = (_dec = (0, _WrapperComponent2.default)(_Modal2.default), _dec(_class = function (_FormPage) {\n  _inherits(MemberFormView, _FormPage);\n\n  function MemberFormView() {\n    _classCallCheck(this, MemberFormView);\n\n    return _possibleConstructorReturn(this, (MemberFormView.__proto__ || Object.getPrototypeOf(MemberFormView)).apply(this, arguments));\n  }\n\n  _createClass(MemberFormView, [{\n    key: 'componentWillMount',\n\n    //请求远程数据接口\n    value: function componentWillMount() {\n      var actions = this.props.actions;\n\n      actions.itemAction(\"1\");\n    }\n    //处理表格提交后动作\n\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(values) {\n      var actions = this.props.actions;\n\n      console.log(actions);\n      //  console.log(values)\n      actions.saveAction(values);\n      //actions.backRoute()\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props2 = this.props,\n          params = _props2.params,\n          _props2$reduce = _props2.reduce,\n          formSpin = _props2$reduce.spins.formSpin,\n          item = _props2$reduce.item;\n\n      //\tlet model=preduce.list[0]\n\n      return _react2.default.createElement(\n        _spin2.default,\n        { tip: 'Loading...', spinning: formSpin },\n        _react2.default.createElement(\n          MemberForm,\n          { onSubmit: this.onSubmit, initialValues: item, saveFormRef: this.saveFormRef },\n          _react2.default.createElement(\n            _button2.default,\n            { type: 'primary', htmlType: 'submit', onClick: this.onSubmit.bind(this) },\n            'Submit'\n          ),\n          _react2.default.createElement(\n            _button2.default,\n            null,\n            '\\u53D6\\u6D88'\n          )\n        )\n      );\n    }\n  }]);\n\n  return MemberFormView;\n}(_Page.FormPage)) || _class);\nexports.default = MemberFormView;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app_modules/Member/MemberForm.view.js\n// module id = 1263\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app_modules/Member/MemberForm.view.js?")},/***/
1287:/***/
function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Container = undefined;\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(66);\n\nvar _reactRouter2 = _interopRequireDefault(_reactRouter);\n\nvar _container = __webpack_require__(1288);\n\nvar _container2 = _interopRequireDefault(_container);\n\nvar _MemberForm = __webpack_require__(1263);\n\nvar _MemberForm2 = _interopRequireDefault(_MemberForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Routes = _react2.default.createElement(\n  _reactRouter.Router,\n  { component: _container2.default },\n  _react2.default.createElement(_reactRouter.IndexRoute, { component: null }),\n  _react2.default.createElement(_reactRouter.Route, { path: 'add', components: _container.FormContainer, breadcrumbName: '\\u6DFB\\u52A0\\u6210\\u5458' }),\n  _react2.default.createElement(_reactRouter.Route, { path: 'edit/:id', components: _container.FormContainer, breadcrumbName: '\\u4FEE\\u6539\\u6210\\u5458' })\n);\n\nexports.Container = _container2.default;\nexports.default = Routes;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app_modules/Member/routes.js\n// module id = 1287\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app_modules/Member/routes.js?")},/***/
1288:/***/
function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.FormContainer = undefined;\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _redux = __webpack_require__(56);\n\nvar _reactRedux = __webpack_require__(67);\n\nvar _MemberList = __webpack_require__(1289);\n\nvar _MemberList2 = _interopRequireDefault(_MemberList);\n\nvar _MemberForm = __webpack_require__(1263);\n\nvar _MemberForm2 = _interopRequireDefault(_MemberForm);\n\nvar _action = __webpack_require__(476);\n\nvar actions = _interopRequireWildcard(_action);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n* @Author: jax <jaxchow>\n* @Date:   2016-03-03T11:14:41+08:00\n* @Email:  jaxchow@gmail.com\n * @Last modified by:\n * @Last modified time: 2018-01-16T10:50:52+08:00\n* @description:  connect state to view props for redux\n*/\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return { reduce: state.memberReducer };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    actions: (0, _redux.bindActionCreators)(actions, dispatch),\n    dispatch: dispatch\n  };\n};\n\nvar FormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { pure: false })(_MemberForm2.default);\nvar Container = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { pure: false })(_MemberList2.default);\n\nexports.FormContainer = FormContainer;\nexports.default = Container;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app_modules/Member/container.js\n// module id = 1288\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app_modules/Member/container.js?')},/***/
1289:/***/
function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _button = __webpack_require__(27);\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _table = __webpack_require__(253);\n\nvar _table2 = _interopRequireDefault(_table);\n\nvar _select = __webpack_require__(33);\n\nvar _select2 = _interopRequireDefault(_select);\n\nvar _datePicker = __webpack_require__(119);\n\nvar _datePicker2 = _interopRequireDefault(_datePicker);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _moment = __webpack_require__(13);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _Layout = __webpack_require__(255);\n\nvar _Page = __webpack_require__(83);\n\nvar _Page2 = _interopRequireDefault(_Page);\n\nvar _AdvancedSearch = __webpack_require__(254);\n\nvar _AdvancedSearch2 = _interopRequireDefault(_AdvancedSearch);\n\nvar _ButtonGroupExt = __webpack_require__(469);\n\nvar _ButtonGroupExt2 = _interopRequireDefault(_ButtonGroupExt);\n\nvar _CalendarPicker = __webpack_require__(470);\n\nvar _CalendarPicker2 = _interopRequireDefault(_CalendarPicker);\n\nvar _Remote = __webpack_require__(1290);\n\nvar _Remote2 = _interopRequireDefault(_Remote);\n\nvar _MemberForm = __webpack_require__(1263);\n\nvar _MemberForm2 = _interopRequireDefault(_MemberForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Option = _select2.default.Option;\nvar RangePicker = _datePicker2.default.RangePicker;\n\nvar MemberListView = function (_PageView) {\n  _inherits(MemberListView, _PageView);\n\n  function MemberListView(props) {\n    _classCallCheck(this, MemberListView);\n\n    return _possibleConstructorReturn(this, (MemberListView.__proto__ || Object.getPrototypeOf(MemberListView)).call(this, props));\n  }\n\n  _createClass(MemberListView, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var actions = this.props.actions;\n\n      actions.listAction();\n      //  actions.menuAction()\n    }\n  }, {\n    key: 'renderSelectOption',\n    value: function renderSelectOption(data, idx) {\n      return _react2.default.createElement(\n        _select2.default.Option,\n        { value: data.value, key: idx },\n        data.label\n      );\n    }\n  }, {\n    key: 'renderSearchBar',\n    value: function renderSearchBar() {\n      var reduce = this.props.reduce;\n\n      var params = reduce.params || {};\n      var keysOption = [{\n        label: \"成员帐号\",\n        value: \"1\"\n      }, {\n        label: \"成员姓名\",\n        value: \"2\"\n      }, {\n        label: \"通信号码\",\n        value: \"3\"\n      }];\n      return _react2.default.createElement(\n        _AdvancedSearch2.default,\n        { keysOption: keysOption, filterSubmitHandler: this.handleFilter.bind(this) },\n        _react2.default.createElement(_select2.default, { placeholder: '\\u8BF7\\u9009\\u62E9', name: 'roleId', label: '\\u5DE5\\u9F84', defaultvalue: '\\u5DE5\\u9F84', renderItem: this.renderSelectOption, fetch: \"http://192.168.1.78:3010\" + '/constants/select' }),\n        _react2.default.createElement(_select2.default, { placeholder: '\\u8BF7\\u9009\\u62E9', name: 'post', label: '\\u6027\\u522B', renderItem: this.renderSelectOption, fetch: \"http://192.168.1.78:3010\" + '/constants/select2' }),\n        _react2.default.createElement(\n          _select2.default,\n          { name: 'post', label: '\\u5B66\\u5386' },\n          _react2.default.createElement(\n            Option,\n            { value: '\\u804C\\u52A1' },\n            '\\u804C\\u52A1'\n          )\n        ),\n        _react2.default.createElement(_CalendarPicker2.default, { name: 'join', label: '\\u5165\\u804C\\u65F6\\u95F4' }),\n        _react2.default.createElement(_CalendarPicker2.default, { name: 'birthday', label: '\\u751F\\u65E5' })\n      );\n    }\n  }, {\n    key: 'renderTableList',\n    value: function renderTableList() {\n      var _this2 = this;\n\n      var self = this;\n      var reduce = this.props.reduce;\n      var tableSpin = reduce.spins.tableSpin;\n\n      var page = reduce.page;\n      var list = [].concat(_toConsumableArray(reduce.list.values()));\n\n      //  console.log(\"tableSpin\",tableSpin)\n      var tableConf = {\n        rowKey: \"id\",\n        dataSource: list,\n        loading: tableSpin,\n        columns: [{\n          type: 'selection'\n        }, {\n          title: \"成员姓名\",\n          key: \"userName\",\n          dataIndex: \"userName\",\n          width: 120\n        }, {\n          title: \"性别\",\n          key: \"roleName\",\n          dataIndex: \"roleName\",\n          width: 150\n        }, {\n          title: \"所在部门\",\n          key: \"groupName\",\n          dataIndex: \"groupName\",\n          width: 100\n        }, {\n          title: \"入职时间\",\n          key: \"serveTime\",\n          dataIndex: \"serveTime\",\n          width: 160\n        }, {\n          title: \"职务\",\n          key: \"post\",\n          dataIndex: \"post\",\n          width: 100\n        }, {\n          title: \"移动电话\",\n          key: \"mobile\",\n          dataIndex: \"mobile\",\n          width: 160\n        }, {\n          title: \"操作\",\n          key: \"userId\",\n          dataIndex: \"userId\",\n          width: 120,\n          render: function render(data) {\n            // console.log(data)\n            return _react2.default.createElement(\n              _ButtonGroupExt2.default,\n              { onClick: _this2.handlerMenu },\n              _react2.default.createElement(\n                _button2.default,\n                { icon: 'delete', actionkey: 'del' },\n                '\\u5220\\u9664'\n              ),\n              _react2.default.createElement(\n                _button2.default,\n                { icon: 'edit', actionkey: 'edit' },\n                '\\u7F16\\u8F91'\n              ),\n              _react2.default.createElement(\n                _button2.default,\n                { icon: 'plus-circle-o', actionkey: 'a1' },\n                '\\u6DFB\\u52A0'\n              ),\n              _react2.default.createElement(\n                _button2.default,\n                { icon: 'plus-circle-o', actionkey: 'a2' },\n                '\\u6DFB\\u52A0'\n              ),\n              _react2.default.createElement(\n                _button2.default,\n                { icon: 'plus-circle-o', actionkey: 'a3' },\n                '\\u6DFB\\u52A0'\n              ),\n              _react2.default.createElement(\n                _button2.default,\n                { icon: 'plus-circle-o', actionkey: 'a4' },\n                '\\u6DFB\\u52A0'\n              ),\n              _react2.default.createElement(\n                _button2.default,\n                { icon: 'plus-circle-o', actionkey: 'a5' },\n                '\\u6DFB\\u52A0'\n              )\n            );\n          }\n        }]\n      };\n\n      return _react2.default.createElement(_table2.default, _extends({}, this.props, tableConf, this.mergeTableConfig({ pagination: page })));\n    }\n  }, {\n    key: 'handlerMenu',\n    value: function handlerMenu(actionType) {\n      console.log(actionType);\n    }\n  }, {\n    key: 'renderToolbar',\n    value: function renderToolbar() {\n      var actions = this.props.actions;\n\n      return _react2.default.createElement(\n        _button2.default.Group,\n        null,\n        _react2.default.createElement(\n          _button2.default,\n          { type: 'ghost', icon: 'plus', onClick: this.handleAddRoute.bind(this) },\n          '\\u6DFB\\u52A0'\n        ),\n        _react2.default.createElement(\n          _button2.default,\n          { type: 'ghost', icon: 'upload', disabled: this.selectSingle(), onClick: this.handleEditRoute.bind(this, null) },\n          '\\u5BFC\\u5165'\n        ),\n        _react2.default.createElement(\n          _button2.default,\n          { type: 'ghost', icon: 'file-excel', disabled: this.selectSingle(), onClick: this.handleEditRoute.bind(this, null) },\n          '\\u5BFC\\u51FAExcel'\n        )\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var props = this.props;\n      return _react2.default.createElement(\n        _Layout.Layout,\n        { direction: 'rows' },\n        _react2.default.createElement(\n          _Layout.Pane,\n          null,\n          this.renderSearchBar(),\n          this.renderToolbar(),\n          this.renderTableList()\n        ),\n        props.children\n      );\n    }\n  }]);\n\n  return MemberListView;\n}(_Page2.default);\n\nexports.default = MemberListView;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app_modules/Member/MemberList.view.js\n// module id = 1289\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app_modules/Member/MemberList.view.js?")},/***/
1290:/***/
function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _Remote = __webpack_require__(1291);\n\nvar _Remote2 = _interopRequireDefault(_Remote);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Remote2.default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/Remote/index.js\n// module id = 1290\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/components/Remote/index.js?')},/***/
1291:/***/
function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(5);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Remote = function (_Component) {\n  _inherits(Remote, _Component);\n\n  function Remote() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Remote);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Remote.__proto__ || Object.getPrototypeOf(Remote)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      data: []\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Remote, [{\n    key: \'fetchData\',\n    value: function fetchData(fetchUrl) {\n      var _this2 = this;\n\n      fetch(fetchUrl).then(function (response) {\n        return response.json();\n      }).then(function (json) {\n        console.log(json);\n        _this2.setState({\n          data: json.list\n        });\n      });\n    }\n  }, {\n    key: \'componentWillMount\',\n    value: function componentWillMount() {\n      var uri = this.props.uri;\n\n      this.fetchData(uri);\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          renderItem = _props.renderItem;\n      var data = this.state.data;\n\n      var element = children;\n      return _react2.default.cloneElement(element, {}, data.map(function (d, i) {\n        return renderItem(d, i);\n      }));\n    }\n  }]);\n\n  return Remote;\n}(_react.Component);\n\nexports.default = Remote;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/Remote/Remote.js\n// module id = 1291\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/components/Remote/Remote.js?')}});