import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'

import Container,{CalendarContainer,InterviewFormContainer} from './container'
import {OfferFormContainer,EntryFormContainer,RelatedFormContainer,FeedbackFormContainer,RejectFormContainer} from '../Resume/container'

let Routes = (
  <Router>
    <IndexRoute component={Container}/>
    <Route path="list" components={Container}/>
    <Route path="add" components={InterviewFormContainer}/>
    <Route path="calendar" components={CalendarContainer}/>
    <Route path=":id" components={InterviewFormContainer} />
    <Route path=":id/offer" components={OfferFormContainer} layout={Container} breadcrumbName="offer"/>
    <Route path=":id/entry" components={EntryFormContainer} layout={Container} breadcrumbName="入职"/>
    <Route path=":id/related" components={RelatedFormContainer} layout={Container} breadcrumbName="关联职位"/>
    <Route path=":id/feedback" components={FeedbackFormContainer} layout={Container} breadcrumbName="面试反馈"/>
    <Route path=":id/reject" components={RejectFormContainer} layout={Container} breadcrumbName="拒绝"/>
  </Router>
)
export {Container}
export default Routes
