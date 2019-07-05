import React, { Component } from 'react'
import ReactRouter, { Router, Route, IndexRoute } from 'react-router'
import { ResumeDetailContainer } from '../Resume/container'
import Container, { 
     batchPositiveModel,
     editPositiveModel,
     addContractInformationModel,
     bulkDeparturesModel,
     editDepartureDateModel,
     practicePositiveModel,
     internship2ProbationModel,
     onlyPositiveModel,
     deitOnlyPositiveModel,
     editonlyDepartureDateModel,
     recordContainer,
     archivesContainer,
     archivesAddContainer,
     LeavingReasonContainer,
     reasonAddContainer,
     msgContainer,msgAddContainer,
     templateContainer,TemplateFormContainer,
     RelationContainer,RosterContainer,FormContainer,MemberLeaveFormContainer, DetailContainer, ExportContainer, ImportContainer, ImportResultContainer, Interpol, InterpolDetail,InterpolForm } from './container'

let Routes = (
  <Router>
    <Route path="list" component={Container}>
      <Route path="add" components={FormContainer} breadcrumbName="添加成员" />
      <Route path="edit/:id" components={FormContainer} breadcrumbName="修改成员" />
      <Route path="detail/:id" components={DetailContainer} breadcrumbName="员工档案">
        <Route path="edit" components={FormContainer} breadcrumbName="修改成员" />
        <Route path="leave" components={MemberLeaveFormContainer} breadcrumbName="员工离职" />
      </Route>
      {/* <Route path="detail/:id" components={DetailContainer} breadcrumbName="查看成员" /> */}
      <Route path="export" components={ExportContainer} breadcrumbName="导出Excel" />
      <Route path="import" components={ImportContainer} breadcrumbName="导入" />
      <Route path="importResult" components={ImportResultContainer} breadcrumbName="导入结果" />
    </Route>
    {/* 员工花名册 */}
    <Route path="roster" component={RosterContainer}>
      <Route path=":id" components={InterpolDetail} breadcrumbName="员工内推">
        <Route path="credit" components={InterpolForm} breadcrumbName="兑换积分" />
        <Route path="cash" components={InterpolForm} breadcrumbName="提取现金" />
      </Route>
    </Route>
     {/* 员工关系 */}

     <Route path="relation/:listType" component={RelationContainer}>
        <Route path="editonlyDepartureDate" components={editonlyDepartureDateModel} breadcrumbName="离职" />
        <Route path="onlyPositive" components={onlyPositiveModel} breadcrumbName="转正" />
        <Route path="batchPositive" components={batchPositiveModel} breadcrumbName="批量转正" />
        <Route path="editPositive" components={editPositiveModel} breadcrumbName="批量修改转正日期" />
        <Route path="deitOnlyPositive" components={deitOnlyPositiveModel} breadcrumbName="修改转正日期" />
        <Route path="addContractInformation" components={addContractInformationModel} breadcrumbName="添加合同信息" />
        <Route path="bulkDepartures" components={bulkDeparturesModel} breadcrumbName="批量离职" />
        <Route path="editDepartureDate" components={editDepartureDateModel} breadcrumbName="修改离职日期" />
        <Route path="practicePositive" components={practicePositiveModel} breadcrumbName="实习转正" />
        <Route path="internship2Probation" components={internship2ProbationModel} breadcrumbName="实习转试用" />
    </Route>
     {/* 人员异动记录 */}
     <Route path="record" component={recordContainer}>
      <Route path=":id" components={InterpolDetail} breadcrumbName="员工内推">
        <Route path="credit" components={InterpolForm} breadcrumbName="兑换积分" />
        <Route path="cash" components={InterpolForm} breadcrumbName="提取现金" />
      </Route>
    </Route> 
    {/* 员工档案 */}
     <Route path="archives"components={Interpol}  >     
        <Route path="filds" components={archivesContainer} breadcrumbName="兑换积分" />
        <Route path="msg" components={archivesContainer} breadcrumbName="提取现金" />
        <Route path="reason" components={archivesContainer} breadcrumbName="兑换积分" />
        <Route path="others" components={archivesContainer} breadcrumbName="提取现金" />
        <Route path="template" components={archivesContainer} breadcrumbName="兑换积分" />
        <Route path="logs" components={archivesContainer} breadcrumbName="提取现金" />
        <Route path="tips" components={archivesContainer} breadcrumbName="兑换积分" />
    </Route>
      {/* 员工设置 */}
       <Route path="setting" >
       <Route path="filds" components={archivesContainer} breadcrumbName="员工档案字段设置" >
          <Route path="add" components={archivesAddContainer} breadcrumbName="添加系统字段" ></Route>
          <Route path="edit/:id" components={archivesAddContainer} breadcrumbName="编辑系统字段" ></Route>
       </Route>
        <Route path="msg" components={msgContainer} breadcrumbName="资料信息设置" >
            <Route path="add" components={msgAddContainer} breadcrumbName="添加自定义字段" ></Route>
            <Route path="edit/:id" components={msgAddContainer} breadcrumbName="编辑自定义字段" ></Route>
        </Route>
        <Route path="reason" components={LeavingReasonContainer} breadcrumbName="离职原因设置" >
            <Route path="add" components={reasonAddContainer} breadcrumbName="添加离职原因" ></Route>
            <Route path="edit/:id" components={reasonAddContainer} breadcrumbName="编辑离职原因" ></Route>
        </Route>
        <Route path="others" components={archivesContainer} breadcrumbName="" ></Route>
        <Route path="template" components={templateContainer} breadcrumbName="通知模板设置" >
          <Route path="add/:smsType" components={TemplateFormContainer} breadcrumbName="新增模板" />
          <Route path="edit/:id" components={TemplateFormContainer} breadcrumbName="编辑模板" />
        </Route>
        <Route path="logs" components={archivesContainer} breadcrumbName="" ></Route>
        <Route path="tips" components={archivesContainer} breadcrumbName="" ></Route>
    </Route>
      {/*人事模板设置 */}
      <Route path="templateSet" component={Interpol}>
      <Route path=":id" components={InterpolDetail} breadcrumbName="员工内推">
        <Route path="credit" components={InterpolForm} breadcrumbName="兑换积分" />
        <Route path="cash" components={InterpolForm} breadcrumbName="提取现金" />
      </Route>
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
