import React, { Component } from 'react'
import ReactRouter, { Router, Route, IndexRoute } from 'react-router'
import { ResumeDetailContainer } from '../Resume/container'
import Container, { FormContainer, DetailContainer, ExportContainer, ImportContainer, ImportResultContainer, Interpol, InterpolDetail,InterpolForm } from './container'

let Routes = (
  <Router>
    <Route path="list" component={Container}>
      <Route path="add" components={FormContainer} breadcrumbName="添加成员" />
      <Route path="edit/:id" components={FormContainer} breadcrumbName="修改成员" />
      <Route path="detail/:id" components={DetailContainer} breadcrumbName="员工档案">
        <Route path="edit" components={FormContainer} breadcrumbName="修改成员" />
      </Route>
      {/* <Route path="detail/:id" components={DetailContainer} breadcrumbName="查看成员" /> */}
      <Route path="export" components={ExportContainer} breadcrumbName="导出Excel" />
      <Route path="import" components={ImportContainer} breadcrumbName="导入" />
      <Route path="importResult" components={ImportResultContainer} breadcrumbName="导入结果" />
    </Route>
    <Route path="interpol" component={Interpol}>
      <Route path=":id" components={InterpolDetail} breadcrumbName="员工内推">
        <Route path="credit" components={InterpolForm} breadcrumbName="兑换积分" />
        <Route path="cash" components={InterpolForm} breadcrumbName="提取现金" />
      </Route>
    </Route>
  </Router>
)

export { Container }
export default Routes
