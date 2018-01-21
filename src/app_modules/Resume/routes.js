import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'

import Container,{ResumeDetailContainer,OfferFormContainer,EntryFormContainer,RelatedFormContainer,FeedbackFormContainer,RejectFormContainer } from './container'
let Routes = (
  <Router>
    <IndexRoute component={Container}/>
    <Route path="list" components={Container}/>
    <Route path=":id" components={ResumeDetailContainer}/>
    <Route path=":id/offer" components={OfferFormContainer} breadcrumbName="offer"/>
    <Route path=":id/entry" components={EntryFormContainer} breadcrumbName="入职"/>
    <Route path=":id/related" components={RelatedFormContainer} breadcrumbName="关联职位"/>
    <Route path=":id/feedback" components={FeedbackFormContainer} breadcrumbName="面试反馈"/>
    <Route path=":id/reject" components={RejectFormContainer} breadcrumbName="拒绝"/>
  </Router>
)

export {Container}
export default Routes
