/**
* @Author: jax <jaxchow>
* @Date:   2016-03-03T11:14:41+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2017-09-11T17:45:31+08:00
* @description:  connect state to view props for redux
*/

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import WorklogView from './Worklog.view'
import WorklogFormView from './WorklogForm.view'
import WorklogListView from './WorklogList.view'
import WorklogShareView from './WorklogShare.view'
import * as actions from './action'

const mapStateToProps = (state) => {
  return {reduce: state.worklogReducer}
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

let WorklogFormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(WorklogFormView)
let Container = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(WorklogView)
let WorklogListContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(WorklogListView)
let WorklogShareContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(WorklogShareView)

export {Container, WorklogFormContainer,WorklogListContainer,WorklogShareContainer}

export default Container;
