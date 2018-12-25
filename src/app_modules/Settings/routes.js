import React, { Component } from 'react'
import ReactRouter, { Router, Route, IndexRoute, IndexRedirect } from 'react-router'

import Container, {
  RemindContainer,
  CustomSystemFieldContainer,
  SystemFieldFormContainer,
  ResumeLinkedContainer,
  TalentLabelContainer,
  TemplateContainer,
  TemplateFormContainer,
  userRightsContainer,
  accountAddContainer,
  handoverContainer,
  accountEditContainer,
  mailboxContainer,
  mailboxFormContainer,
  OrganizationContainer,
  OrganizationFormContainer,
  RoleContainer,
  RoleFormContainer,
  RoleDetailContainer,
  CompanyContainer,
  CompanyFormContainer,
  ArchiveContainer,
  ArchiveFormContainer,
  AdverseContainer,
  AdverseFormContainer,
  RejectContainer,
  RejectFormContainer,
  ApplyContainer,
  // ApplyFormContainer,
  ChannelContainer,
  AddMemberStepOrignContainer,
  AddMemberStepFirstContainer,
  AddMemberStepCodeContainer,
  OfferApproveContainer,
  OfferApproveFormContainer,
  InterviewFeedbackContainer,
  InterviewFeedbackFormContainer,
  InterviewJudgeContainer,
  OtherSettingContainer,
  LevelSettingContainer,
  LevelSettingFormContainer,
  LevelSettingDeleteFormContainer,
  InternalRecommendContainer,
  ActionLogContainer,
  ShareContainer
} from './container'

let Routes = (
  <Router>
    <IndexRoute component={CompanyContainer} />
    <IndexRedirect to="company" />

    <Route path="remind" components={RemindContainer} breadcrumbName="提醒设置" />
    <Route path="field" components={CustomSystemFieldContainer} breadcrumbName="系统字段">
      <Route path="add" components={SystemFieldFormContainer} breadcrumbName="添加系统字段" />
      <Route path="edit/:fieldId" components={SystemFieldFormContainer} breadcrumbName="编辑系统字段" />
    </Route>
    <Route path="talentList" components={TalentLabelContainer} breadcrumbName="人才标签" />

    <Route path="template" components={TemplateContainer} breadcrumbName="短信模板">
      <Route path="add/:smsType" components={TemplateFormContainer} breadcrumbName="新增模板" />
      <Route path="edit/:id" components={TemplateFormContainer} breadcrumbName="编辑模板" />
    </Route>
    <Route path="userRights" components={userRightsContainer} breadcrumbName="用户权限">
      {/* <Route path="add" components={accountAddContainer} breadcrumbName="新增用户" /> */}
      <Route path="add" components={AddMemberStepFirstContainer} breadcrumbName="验证用户名" />

      <Route path="addform" components={AddMemberStepOrignContainer} breadcrumbName="新增用户" />
      <Route path="addvalid" components={AddMemberStepCodeContainer} breadcrumbName="输入验证码" />
      <Route path="handover/:nowAcc" components={handoverContainer} breadcrumbName="成员交接" />
      <Route path="edit/:account" components={accountEditContainer} breadcrumbName="编辑用户" />
    </Route>
    <Route path="mailbox" components={mailboxContainer} breadcrumbName="邮箱" >
      <Route path="add" components={mailboxFormContainer} breadcrumbName="添加邮箱" />
    </Route>
    <Route path="organization" components={OrganizationContainer} breadcrumbName="组织结构设置">
      <Route path="add" components={OrganizationFormContainer} breadcrumbName="添加部门" />
      <Route path="edit/:orgId" components={OrganizationFormContainer} breadcrumbName="编辑部门" />
    </Route>
    <Route path="role" components={RoleContainer} breadcrumbName="角色权限设置">
      <Route path="add" components={RoleFormContainer} breadcrumbName="添加角色" />
      <Route path="edit/:roleId" components={RoleFormContainer} breadcrumbName="编辑角色" />
      <Route path="detail/:roleId" components={RoleDetailContainer} breadcrumbName="查看角色详情" />
    </Route>
    <Route path="company" components={CompanyContainer} breadcrumbName="公司信息" >
      <Route path="edit/:companyId" components={CompanyFormContainer} breadcrumbName="编辑公司地址" />
      <Route path="add" components={CompanyFormContainer} breadcrumbName="添加公司地址" />
    </Route>
    <Route path="archive" components={ArchiveContainer} breadcrumbName="归档原因设置" >
      <Route path="edit/:optionId" components={ArchiveFormContainer} breadcrumbName="编辑归档原因" />
      <Route path="add" components={ArchiveFormContainer} breadcrumbName="添加归档原因" />
    </Route>
    <Route path="adverse" components={AdverseContainer} breadcrumbName="不良事件设置" >
      <Route path="edit/:optionId" components={AdverseFormContainer} breadcrumbName="编辑" />
      <Route path="add" components={AdverseFormContainer} breadcrumbName="添加" />
    </Route>
    <Route path="reject" components={RejectContainer} breadcrumbName="offer拒绝原因设置" >
      <Route path="edit/:optionId" components={RejectFormContainer} breadcrumbName="编辑拒绝原因" />
      <Route path="add" components={RejectFormContainer} breadcrumbName="添加拒绝原因" />
    </Route>
    <Route path="apply" components={ApplyContainer} breadcrumbName="信息登记表设置" >

    </Route>
    <Route path="channel" components={ChannelContainer} breadcrumbName="支持渠道列表" >

    </Route>

    <Route path="offer" components={OfferApproveContainer} breadcrumbName="Offer审批设置" >
      <Route path="edit/:offerApproveId" components={OfferApproveFormContainer} breadcrumbName="编辑审批流程" />
      <Route path="add" components={OfferApproveFormContainer} breadcrumbName="添加审批流程" />

    </Route>
    <Route path="interviewfeedback" components={InterviewFeedbackContainer} breadcrumbName="面试反馈模板设置" >
      <Route path="edit/:id" components={InterviewFeedbackFormContainer} breadcrumbName="编辑面试反馈模板" />
      <Route path="add" components={InterviewFeedbackFormContainer} breadcrumbName="添加面试反馈模板" />

    </Route>
    <Route path="interviewjudge" components={InterviewJudgeContainer} breadcrumbName="面试评分表设置" >

    </Route>
    <Route path="other" components={OtherSettingContainer} breadcrumbName="其他设置" >

    </Route>
    <Route path="level" components={LevelSettingContainer} breadcrumbName="职位级别设置" >
      <Route path="add" components={LevelSettingFormContainer} breadcrumbName="添加职位级别" />
      <Route path="delete/:levelSettingId" components={LevelSettingDeleteFormContainer} breadcrumbName="删除职位级别" />
      <Route path="edit/:levelSettingId" components={LevelSettingFormContainer} breadcrumbName="编辑职位级别" />

    </Route>
    <Route path="internalrecommend" components={InternalRecommendContainer} breadcrumbName="内推设置" >

    </Route>
    <Route path="actionlog" components={ActionLogContainer} breadcrumbName="操作日志" >

    </Route>
    <Route path="share" components={ShareContainer} breadcrumbName="分享设置" >

    </Route>

  </Router>
)

export { Container }
export default Routes
