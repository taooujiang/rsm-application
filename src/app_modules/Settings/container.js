/**
* @Author: jax <jaxchow>
* @Date:   2016-03-03T11:14:41+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-02-06T15:52:51+08:00
* @description:  connect state to view props for redux
*/

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {reducerItemSelector,reducerListSelector,reducerListSelectorFilter} from 'app-model/reducerSelector'
import SideLayout from 'app/decorators/SideLayout'
import SettingsFormView from './views/Settings.view'
import RemindFormView from './views/Remind.view'
import CustomSystemFieldView from './views/CustomSystemField.view'
import SystemFieldFormView from './views/SystemFieldForm.view'
import ResumeLinkedFormView from './views/ResumeLinkedForm.view'
import TalentLabelView from './views/TalentLabel.view'
import TemplateView from './views/Template.view'
import TemplateFormView from './views/TemplateForm.view'
import UserRightView from './views/UserRights.view'
import UserOptionView from './views/newUser.view'

import {AddMemberStepOrign,AddMemberStepFirst,AddMemberStepCode} from './views/UserForm.view'

import UserEditView from './views/editUser.view'
import HandoverView from './views/handover.view'
import MailboxView from './views/mailbox.view'
import MailboxFormView from './views/mailboxForm.view'
import SettingsSide from './views/SettingsSide'
import OrganizationView from './views/organization.view'
import OrganizationForm from './views/organizationForm.view'
import RoleView from './views/Role.view'
import RoleFormView from './views/RoleForm.view'
import RoleDetailView from './views/RoleDetail.view'

import CompanyView from './views/Company.view'
import CompanyFormView from './views/CompanyForm.view'

import ArchiveView from './views/Archive.view'
import ArchiveFormView from './views/ArchiveForm.view'

import AdverseView from './views/Adverse.view'
import AdverseFormView from './views/AdverseForm.view'

import RejectView from './views/Reject.view'
import RejectFormView from './views/RejectForm.view'

import ApplyView from './views/Apply.view'
import ApplyFormView from './views/ApplyForm.view'
import ChannelView from './views/Channel.view'

import Ercode from './views/Ercode.view'

import OfferApproveView from './views/RecruitImprovement/OfferApprove.view'
import OfferApproveFormView from './views/RecruitImprovement/OfferApproveForm.view'
import InterviewFeedbackView from './views/RecruitImprovement/InterviewFeedback.view'
import InterviewJudgeView from './views/RecruitImprovement/InterviewJudge.view'
import OtherSettingView from './views/RecruitImprovement/OtherSetting.view'
import InternalRecommendView from './views/RecruitImprovement/InternalRecommend.view'

import LevelSettingView from './views/SysProperty/LevelSetting.view'
import LevelSettingFormView from './views/SysProperty/LevelSettingForm.view'
import {LevelSettingDeleteForm} from './views/SysProperty/LevelSettingForm.view'
import ActionLogView from './views/SysProperty/ActionLog.view'

import ShareView from './views/Company/Share.view'

import * as actions from './action'


const mapStateToProps = (state) => {
    return { reduce: state.settingsReducer, appConfig: state.appReducer }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch
    };
}
let Container = SideLayout(SettingsSide,connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(SettingsFormView))
let RemindContainer = connect((state)=>({
  item:reducerItemSelector(state.ORMReducer,"Remind",'account'),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(RemindFormView))
let CustomSystemFieldContainer= connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"CustomSystemField"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(CustomSystemFieldView))
let SystemFieldFormContainer= connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"CustomSystemField",props.params.fieldId),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SystemFieldFormView)
let ResumeLinkedContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(ResumeLinkedFormView))
let TalentLabelContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Tag"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(TalentLabelView))



let TemplateContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Template"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(TemplateView))



let TemplateFormContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Template",props.params.id),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(TemplateFormView)

let userRightsContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"User"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(UserRightView))
let accountAddContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"User",props.params.account),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(AddMemberStepFirst)

let AddMemberStepOrignContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"User",props.params.account),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(AddMemberStepOrign)


let AddMemberStepFirstContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"User",props.params.account),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(AddMemberStepFirst)

let AddMemberStepCodeContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"User",props.params.account),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(AddMemberStepCode)

let accountEditContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"User",props.params.account),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(UserEditView)
let handoverContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(HandoverView)

let mailboxContainer = connect((state)=>({
	items:reducerListSelector(state.ORMReducer,"Mailbox"),
	channelList:reducerListSelectorFilter(state.ORMReducer,"Channel",function(channel){
		return channel.isMailResumeImport==1
	}),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(SideLayout(SettingsSide)(MailboxView))
let mailboxFormContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Mailbox",props.params.mailId),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(MailboxFormView)

//此功能暂时不考虑ORM 存储，层级CHILDREN 无法体现ORM 优势
let OrganizationContainer= connect((state)=>({
  // items:reducerListSelector(state.ORMReducer,"Organization"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(SideLayout(SettingsSide)(OrganizationView ))


//此功能暂时不考虑ORM 存储，层级CHILDREN 无法体现ORM 优势
let OrganizationFormContainer = connect((state,props)=>({
  // item:reducerItemSelector(state.ORMReducer,"Organization",props.params.mailId),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(OrganizationForm)


let RoleContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Role"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(SideLayout(SettingsSide)(RoleView))

let RoleFormContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Role",props.params.roleId),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(RoleFormView)

let RoleDetailContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Role",props.params.roleId),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(RoleDetailView)
let CompanyContainer = connect((state,props)=>({
  items:reducerListSelector(state.ORMReducer,"Company"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(SideLayout(SettingsSide)(CompanyView))

let CompanyFormContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Company",props.params.companyId),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(CompanyFormView)

let ArchiveContainer = connect((state,props)=>({
  items:reducerListSelector(state.ORMReducer,"SystemOption"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(SideLayout(SettingsSide)(ArchiveView))

let ArchiveFormContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"SystemOption",props.params.optionId),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(ArchiveFormView)

let AdverseContainer = connect((state,props)=>({
  items:reducerListSelector(state.ORMReducer,"SystemOption"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(SideLayout(SettingsSide)(AdverseView))

let AdverseFormContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"SystemOption",props.params.optionId),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(AdverseFormView)

let RejectContainer = connect((state,props)=>({
  items:reducerListSelector(state.ORMReducer,"SystemOption"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(SideLayout(SettingsSide)(RejectView))

let RejectFormContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"SystemOption",props.params.optionId),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, { pure: false })(RejectFormView)

let ApplyContainer = connect((state)=>({
  item:reducerItemSelector(state.ORMReducer,"Remind",'account'),
  // items:reducerListSelector(state.ORMReducer,"Template"),
  // reduce: state.settingsReducer,
  // appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(ApplyView))

let ApplyFormContainer = connect((state)=>({
  // item:reducerItemSelector(state.ORMReducer,"Remind",'account'),
  // items:reducerListSelector(state.ORMReducer,"Template"),
  // reduce: state.settingsReducer,
  // appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(ApplyFormView)

let ErcodeContainer = connect((state)=>({
  // item:reducerItemSelector(state.ORMReducer,"Remind",'account'),
  // items:reducerListSelector(state.ORMReducer,"Template"),
  // reduce: state.settingsReducer,
  // appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(Ercode)
let ChannelContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Channel"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(ChannelView))


let OfferApproveContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"OfferApprove"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(OfferApproveView))

let OfferApproveFormContainer = connect((state)=>({
  // items:reducerListSelector(state.ORMReducer,"OfferApprove"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(OfferApproveFormView)



let InterviewFeedbackContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Channel"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(InterviewFeedbackView))

let InterviewJudgeContainer = connect((state)=>({
  item:reducerItemSelector(state.ORMReducer,"Remind",'account'),
  items:reducerListSelector(state.ORMReducer,"SystemOption"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(InterviewJudgeView))
let OtherSettingContainer = connect((state)=>({
  item:reducerItemSelector(state.ORMReducer,"ChannelSettings",'account'),

  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(OtherSettingView))
let InternalRecommendContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Channel"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(InternalRecommendView))

let LevelSettingContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"LevelSetting"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(LevelSettingView))

let LevelSettingFormContainer = connect((state,props)=>({
  // items:reducerListSelector(state.ORMReducer,"LevelSetting"),
  items:reducerListSelector(state.ORMReducer,"LevelSetting"),
  item:reducerItemSelector(state.ORMReducer,"LevelSetting",props.params.levelSettingId),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(LevelSettingFormView)


let LevelSettingDeleteFormContainer = connect((state,props)=>({
  // items:reducerListSelector(state.ORMReducer,"LevelSetting"),
  items:reducerListSelector(state.ORMReducer,"LevelSetting"),
  item:reducerItemSelector(state.ORMReducer,"LevelSetting",props.params.levelSettingId),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(LevelSettingDeleteForm)


let ActionLogContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Channel"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(ActionLogView))

let ShareContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Channel"),
  reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(SettingsSide)(ShareView))



export {
    Container,
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
		ApplyFormContainer,
    ErcodeContainer,
    ChannelContainer,
    AddMemberStepOrignContainer,
    AddMemberStepFirstContainer,
    AddMemberStepCodeContainer,
    OfferApproveContainer,
    OfferApproveFormContainer,
    InterviewFeedbackContainer,
    InterviewJudgeContainer,
    OtherSettingContainer,
    LevelSettingContainer,
    LevelSettingFormContainer,
    LevelSettingDeleteFormContainer,
    InternalRecommendContainer,
    ActionLogContainer,
    ShareContainer
}

export default Container;
