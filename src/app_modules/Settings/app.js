import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import createContainer from 'app/utils/CreateContainer'
import {App} from 'app/layout'
import store, {history,injectReducer} from 'app/store'
import theme from 'app/themes/index.less'
import {Routes,reducer} from './index'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/es/locale-provider/zh_CN'

var AppRouter = (
  <Router path="/settings" >
    {Routes.props.children}
  </Router>
)

// console.log(AppRouter)
injectReducer(store,{key:'settingsReducer',reducer:reducer})

ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <Provider store={store}>
      <App>
      <Router routes={AppRouter} history={history}></Router>
      </App>
    </Provider>
  </LocaleProvider>
, createContainer())
