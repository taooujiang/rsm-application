/**
* @Author: jax <jaxchow>
* @Date:   2016-03-03T11:14:41+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-16T10:50:52+08:00
* @description:  connect state to view props for redux
*/

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import WrapperComponent from 'app/decorators/WrapperComponent'
import ModalView, {ModalWidthView, ModalDetailView} from 'app/components/Modal.view'
import SideLayout from 'app/decorators/SideLayout'
import MemberListView,{MemberSide} from './views/MemberList.view'
import MemberFormView from './views/MemberForm.view'
import MemberDetailView from './views/Detail.view'
import MemberLeaveView from './views/MemberLeave.view'
import MemberExportView from './views/MemberExport.view'
import MemberImportView from './views/MemberImport.view'
import MemberImportResultView from './views/MemberImportResult.view'
import MemberInterpol,{InterpolSide} from './views/MemberInterpol.view'
import MemberRecord,{RecordSide} from './views/MemberRecord.view'
import MemberInterpolDetailView from './views/MemberInterpolDetail.view'
import MemberInterpolFormView from './views/MemberInterpolForm.view'
import MemberRelation,{RelationSide} from './views/MemberRelation.view'
import MemberSettingSide from './views/MemberSettingSlide.view'
import MemberSetting from './views/MemberSetting.view'
import LeavingReason from './views/LeavingReason.view'
import msgSetting from './views/msgSetting.view'
import templateView from './views/template.view'

import archivesAddView ,{
  reasonAddView,msgAddView,TemplateForm
} from './views/archivesSettingModels.view'
import batchPositiveModelView,{
  editPositiveModelView,
  addContractInformationModelView,
  bulkDeparturesModelView,
  editDepartureDateModelView,
  practicePositiveModelView,
  internship2ProbationModelView,
  onlyPositiveModelView,
  deitOnlyPositiveModelView,
  editonlyDepartureDateModelView
} from './views/RelationsModels.view'
// import MemberRosterSlide from './views/MemberRoster.slide.view'
import MemberRoster,{MemberRosterSlide} from './views/MemberRoster.view'


import * as actions from './action'
import * as resumeActions from '../Resume/action'

import {reducerListSelector,reducerItemSelector} from 'app-model/reducerSelector'

const mapStateToProps = (state) => {
  return {reduce: state.memberReducer}
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

let FormContainer = connect((state,props)=>({
  // item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  item:state.memberReducer.currentItem,
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(MemberFormView)
let MemberLeaveFormContainer = connect((state,props)=>({
  // item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  // item:state.memberReducer.currentItem,
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(MemberLeaveView)
let Container = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Member"),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(MemberSide)(MemberListView))

let reasonAddContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member"),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(reasonAddView) 
let archivesAddContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member"),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(archivesAddView)) 
let TemplateFormContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member"),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(TemplateForm) 

let templateContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Member"),
  reduce:state.memberReducer,
  appReducer: state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(MemberSettingSide)(templateView))
let archivesContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Member"),
  reduce:state.memberReducer,
  appReducer: state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(MemberSettingSide)(MemberSetting))
let msgAddContainer = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member"),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(msgAddView)) 
let msgContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Member"),
  reduce:state.memberReducer,
  appReducer: state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(MemberSettingSide)(msgSetting))

let LeavingReasonContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Member"),
  reduce:state.memberReducer,
  appReducer: state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(MemberSettingSide)(LeavingReason))
let Interpol = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Interpol"),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(InterpolSide)(MemberInterpol))
let recordContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Member"),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(RecordSide)(MemberRecord))

let RelationContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Member"),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(RelationSide)(MemberRelation))
let InterpolDetail = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(MemberInterpolDetailView)

let InterpolForm = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(MemberInterpolFormView)

let batchPositiveModel = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(batchPositiveModelView)) 
let editPositiveModel = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(editPositiveModelView)) 
let addContractInformationModel = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(addContractInformationModelView)) 
let bulkDeparturesModel = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(bulkDeparturesModelView)) 
let editDepartureDateModel = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(editDepartureDateModelView)) 
let practicePositiveModel = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(practicePositiveModelView)) 
let internship2ProbationModel = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(internship2ProbationModelView)) 
let onlyPositiveModel = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(onlyPositiveModelView)) 
let deitOnlyPositiveModel = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(deitOnlyPositiveModelView))
let editonlyDepartureDateModel = connect((state,props)=>({
  item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(editonlyDepartureDateModelView))  


// MemberInterpolForm
let DetailContainer = connect((state,props)=>({
	// item:reducerItemSelector(state.ORMReducer,"Member",props.params.id),
	item:state.memberReducer.currentItem,
  reduce:state.memberReducer,
  resumeReduce:state.resumeReducer
}), (dispatch)=>({
	actions:bindActionCreators(resumeActions, dispatch),
	memberActions:bindActionCreators(actions, dispatch),
  dispatch
}), null, {pure: false})(MemberDetailView)
let ExportContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(MemberExportView)
let ImportContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(MemberImportView)
let ImportResultContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(MemberImportResultView)
let  RosterContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"Member"),
  reduce:state.memberReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(MemberRosterSlide)(MemberRoster))
export {
  onlyPositiveModel,
  deitOnlyPositiveModel,
  batchPositiveModel,
  editPositiveModel,
  addContractInformationModel,
  bulkDeparturesModel,
  editDepartureDateModel,
  practicePositiveModel,
  internship2ProbationModel,
  editonlyDepartureDateModel,
  recordContainer,
  archivesContainer,
  templateContainer, TemplateFormContainer,
  archivesAddContainer,
  LeavingReasonContainer,
  reasonAddContainer,
  msgContainer,msgAddContainer,
 
  RelationContainer,RosterContainer,FormContainer,DetailContainer,MemberLeaveFormContainer,ExportContainer,ImportContainer,ImportResultContainer,Interpol,InterpolDetail,InterpolForm}
export default Container;
