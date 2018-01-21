import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'

import Container,{RemindContainer,CustomSystemFieldContainer} from './container'

let Routes = (
  <Router>
    <IndexRoute component={Container}/>
    <Route path="resume" components={RemindContainer} breadcrumbName="提醒设置"/>
    <Route path="field" components={CustomSystemFieldContainer} breadcrumbName="系统字段"/>
  </Router>
)

export {Container}
export default Routes
