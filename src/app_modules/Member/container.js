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

import MemberListView from './MemberList.view'
import MemberFormView from './MemberForm.view'
import * as actions from './action'

const mapStateToProps = (state) => {
  return {reduce: state.memberReducer}
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

let FormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(MemberFormView)
let Container = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(MemberListView)

export {FormContainer}
export default Container;
