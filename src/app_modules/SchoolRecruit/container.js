/**
* @Author: jax <jaxchow>
* @Date:   2016-03-03T11:14:41+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-22T09:46:22+08:00
* @description:  connect state to view props for redux
*/

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import WrapperComponent from 'app/decorators/WrapperComponent'
import ModalView,{ModalWidthView,ModalDetailView,ModalDetailSmallView} from 'app/components/Modal.view'
import SideLayout from 'app/decorators/SideLayout'
import SchoolRecruitListView from './views/SchoolRecruitList.view'
import RecordView from './views/Record.view'
import  DeatilView from './views/Deatil.view'
import  SendView from './views/Send.view'
// import InterviewFormView from './views/InterviewForm.view'
// import DelayFormView from './views/InterviewDelay.view'
// import IntverviewSlide from './views/InterviewSlide.view'
// import FeedBackFormView from './views/FeedbackForm.view'
import * as actions from './action'

import {reducerListSelector} from 'app-model/reducerSelector'

const mapStateToProps = (state) => {
  return {reduce: state.schoolRecruitReducer,appConfig:state.appReducer}
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}
let Container = connect((state)=>({
    items:reducerListSelector(state.ORMReducer,"searchTalents"),
    reduce:state.schoolRecruitReducer
}), mapDispatchToProps, null, {pure: false})(SchoolRecruitListView)

let RecordContainer = connect((state)=>({
    items:reducerListSelector(state.ORMReducer,"searchTalents"),
    reduce:state.schoolRecruitReducer
}), mapDispatchToProps, null, {pure: false})(RecordView)

let DetailContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"searchTalents"),
  reduce:state.schoolRecruitReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalDetailSmallView)(DeatilView))

let SendContainer = connect((state)=>({
  items:reducerListSelector(state.ORMReducer,"searchTalents"),
  reduce:state.schoolRecruitReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(SendView))

// //let CalendarContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(CalendarView)
// let InterviewFormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(InterviewFormView)
// // let Container = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(InterviewListView)
// let DelayContainer = connect((state) => {
//   return {reduce: state.interviewReducer,appConfig:state.appReducer,reumeReduce:state.resumeReducer}
// }, mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(DelayFormView))
// let FeedBackFormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(FeedBackFormView))


export { RecordContainer, DetailContainer, SendContainer}

export default Container;
