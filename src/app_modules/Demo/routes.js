import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'

import Container from './container'

let Routes = (
  <Router>
    <IndexRoute component={Container}/>
  </Router>
)

export default Routes
