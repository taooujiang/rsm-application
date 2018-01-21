import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'

import Container,{CalendarPickerContainer,InterviewFormContainer} from './container'

let Routes = (
  <Router>
    <IndexRoute component={Container}/>
    <Route path="list" components={Container}/>
    <Route path="edit/:id" components={InterviewFormContainer}/>
    <Route path="add" components={InterviewFormContainer}/>
    <Route path="CalendarPicker" components={CalendarPickerContainer}/>
  </Router>
)
console.log(CalendarPickerContainer)
export {Container}
export default Routes
