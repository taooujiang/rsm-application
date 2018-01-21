/**
* @Author: jax <jaxchow>
* @Date:   2016-02-23T20:28:29+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-12T14:51:18+08:00
* @Description: application entry files
*/

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
//import {renderToString} from 'react-dom/server'
import {Router, hashHistory} from 'react-router'
import createContainer from 'app-utils/CreateContainer'
//import DevTools from 'app-utils/DevTools'
import AppRouter from './router'
import {Provider} from 'react-redux'
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import store, {history} from './store'
import theme from './themes/themes.less'
import './mock/index'
//全局设定

/*
ReactDOM.render(
  <IntlProvider locale="en">
  <Provider store={store}>
    <Router routes={AppRouter()} history={history}></Router>
  </Provider>
</IntlProvider>, createContainer())
*/
ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <Provider store={store}>
      <Router routes={AppRouter()} history={history}></Router>
    </Provider>
  </LocaleProvider>
, createContainer())

//ReactDOM.render(<Provider store={store}><Router routes={AppRouter()} history={hashHistory} /></Provider>,createContainer())
