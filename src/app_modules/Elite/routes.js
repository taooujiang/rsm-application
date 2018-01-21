import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'

import Container from './container'

let Routes = (
  <Router>
    <IndexRoute component={Container}/>
    <Route path="list" components={Container}/>
  </Router>
)

export {Container}
export default Routes
