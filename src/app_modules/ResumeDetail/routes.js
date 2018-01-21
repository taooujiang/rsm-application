import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'

import Container,{ResumeDetailContainer} from './container'

let Routes = (
  <Router>
    <IndexRoute component={Container}/>
    <Route path="list" components={Container}/>
    <Route path=":id" components={ResumeDetailContainer}/>
  </Router>
)

export {Container}
export default Routes
