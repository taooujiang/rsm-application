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
import InterviewListView from './InterviewList.view'
import CalendarView from './Calendar.view'
import InterviewFormView from './InterviewForm.view'
import * as actions from './action'

const mapStateToProps = (state) => {
  return {reduce: state.interviewReducer,appConfig:state.appReducer}
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

let CalendarContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(CalendarView)
let InterviewFormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(InterviewFormView)
let Container = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(InterviewListView)


export {CalendarContainer,InterviewFormContainer}

export default Container;
