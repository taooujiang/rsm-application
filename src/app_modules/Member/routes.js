import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'

import Container, {FormContainer} from './container'
import MemberForm from './MemberForm.view'

let Routes = (
  <Router component={Container}>
    <IndexRoute component={null}/>
    <Route path="add" components={FormContainer} breadcrumbName="添加成员"/>
    <Route path="edit/:id" components={FormContainer} breadcrumbName="修改成员"/>
  </Router>
)

export {Container}
export default Routes
