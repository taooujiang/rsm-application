import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'
import {RegisterViewContainer, LoginViewContainer} from './container'

let PassportRoutes = (
  <Router>
    <IndexRoute component={LoginViewContainer}/>
    <Route path="list" components={RegisterViewContainer}/>
    <Route path="add" components={LoginViewContainer}/>
  </Router>
)

export default PassportRoutes
