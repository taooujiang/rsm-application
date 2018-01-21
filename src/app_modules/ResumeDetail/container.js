/**
* @Author: jax <jaxchow>
* @Date:   2016-03-03T11:14:41+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-11T15:48:17+08:00
* @description:  connect state to view props for redux
*/

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import ResumeListView from './ResumeList.view'
import ResumeDetailView from './ResumeDetail.view'
import * as actions from './action'

const mapStateToProps = (state) => {
  return {reduce: state.resumeReducer,appConfig:state.appReducer}
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

// let FollowFormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(FollowFormView)
let Container = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(ResumeListView)
let ResumeDetailContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(ResumeDetailView)

export {ResumeDetailContainer}

export default Container;
