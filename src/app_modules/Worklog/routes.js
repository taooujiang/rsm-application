import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'
import Container, {WorklogFormContainer,WorklogListContainer,WorklogShareContainer} from './container'

let Routes = (
  <Router>
    <Route path="list" components={WorklogListContainer} >
      <Route path="add" breadcrumbName="添加日志" components={WorklogFormContainer} />
      <Route path="edit/:id" breadcrumbName="修改日志" components={WorklogFormContainer}/>
    </Route>
    <Route path="share" components={WorklogShareContainer}/>
  </Router>
)

export {Container}
export default Routes
