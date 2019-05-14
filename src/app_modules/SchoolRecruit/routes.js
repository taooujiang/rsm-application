import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'
import Container,{RecordContainer,DetailContainer} from './container'

let Routes = (
  <Router component={null}>
    <IndexRoute components={Container}/>
    <Route path="list" components={Container}>
      <Router path=":id/detail" components={DetailContainer}></Router>
    </Route>
    <Route path="record" components={RecordContainer}>
       <Router path=":id/detail" components={DetailContainer}></Router>
    </Route>
    
  </Router>
)
export {Container}
export default Routes
