import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'
import Container,{RecordContainer,DetailContainer,SendContainer} from './container'

let Routes = (
  <Router component={null}>
    <IndexRoute components={Container}/>
    <Route path="list" components={Container} breadcrumbName="校招人才">
      <Route path=":id/detail" components={DetailContainer} breadcrumbName="简历详情">
        <Route path="toSend" components={SendContainer} breadcrumbName="选择邀请投递职位"></Route>
      </Route> 
    </Route>
    <Route path="record" components={RecordContainer} breadcrumbName="邀请记录">
       <Route path=":id/detail" components={DetailContainer}  breadcrumbName="简历详情">
          <Route path="toSend" components={SendContainer} breadcrumbName="选择邀请投递职位"></Route>
       </Route>
    </Route>
  </Router>
)
export {Container}
export default Routes
