webpackJsonp([7],{/***/
1110:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Routes=void 0;var a=e(0),n=t(a),o=e(10),r=(t(o),e(62)),u=e(224),d=(t(u),e(1131)),l=t(d),c=(e(63),e(226)),m=(t(c),e(227)),f=(t(m),e(225));t(f),n.default.createElement(r.Router,{path:"/"},l.default.props.children);
// ReactDOM.render(
//   <Provider store={store}>
//     <Router routes={AppRouter} history={history} ></Router>
//   </Provider>
// , createContainer())
exports.Routes=l.default},/***/
1131:/***/
function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Container=void 0;var a=e(0),n=t(a),o=e(62),r=(t(o),e(413)),u=t(r),d=n.default.createElement(o.Router,null,n.default.createElement(o.IndexRoute,{component:u.default}),n.default.createElement(o.Route,{path:"list",components:u.default}),n.default.createElement(o.Route,{path:":id",components:r.ResumeDetailContainer}),n.default.createElement(o.Route,{path:":id/offer",components:r.OfferFormContainer,breadcrumbName:"offer"}),n.default.createElement(o.Route,{path:":id/entry",components:r.EntryFormContainer,breadcrumbName:"入职"}),n.default.createElement(o.Route,{path:":id/related",components:r.RelatedFormContainer,breadcrumbName:"关联职位"}),n.default.createElement(o.Route,{path:":id/feedback",components:r.FeedbackFormContainer,breadcrumbName:"面试反馈"}),n.default.createElement(o.Route,{path:":id/reject",components:r.RejectFormContainer,breadcrumbName:"拒绝"}));exports.Container=u.default,exports.default=d}});