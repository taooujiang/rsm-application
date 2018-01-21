/**
* @Author: jax <jaxchow>
* @Date:   2016-03-03T11:14:41+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-19T13:14:46+08:00
* @description:  connect state to view props for redux
*/

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import EliteListView from './EliteList.view'
import * as actions from './action'

const mapStateToProps = (state) => {
  return {reduce: state.eliteReducer,appConfig:state.appReducer}
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

// let FollowFormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(FollowFormView)
let Container = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(EliteListView)



export default Container;
