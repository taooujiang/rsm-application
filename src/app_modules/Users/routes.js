import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'

import {UserListContainer, UserFormContainer} from './container'

let Routes = (
  <Router>
    <IndexRoute component={UserListContainer}/>
    <Route path="list" components={UserListContainer}/>
    <Route path="add" components={UserFormContainer}/>
    <Route path="edit/:id" components={UserFormContainer}/>
  </Router>
)

export default Routes
