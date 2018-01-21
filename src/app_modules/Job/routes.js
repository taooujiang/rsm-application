import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'

import Container, {iframeContainer,DetailContainer} from './container'

let Routes = (
  <Router>
    <IndexRoute component={Container}/>
    <Route path="list" components={Container}/>
    <Route path="detail" components={DetailContainer}/>
    <Route path="iframe" components={iframeContainer}/>
  </Router>
)

export {Container}
export default Routes
