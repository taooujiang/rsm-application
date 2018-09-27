
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory} from 'react-router'
import createContainer from 'app-utils/CreateContainer'
import Routes from './routes'
import {Provider} from 'react-redux'
import store, {history} from '../../store'
import theme from '../../themes/index.less'
import createRoutes from 'app-utils/CreateRoutes'
import {reducer} from './reducer'

var AppRouter = (
  <Router path="/">
    {Routes.props.children}
  </Router>
)


// ReactDOM.render(
//   <Provider store={store}>
//     <Router routes={AppRouter} history={history}></Router>
//   </Provider>
// , createContainer())

export {Routes,reducer}
