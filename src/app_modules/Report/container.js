/**
* @Author: jax <jaxchow>
* @Date:   2016-03-03T11:14:41+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-19T13:35:54+08:00
* @description:  connect state to view props for redux
*/

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import SettingsFormView from './Settings.view'
import RemindFormView from './Remind.view'
import * as actions from './action'

const mapStateToProps = (state) => {
  return {reduce: state.settingsReducer,appConfig:state.appReducer}
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

let Container = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(SettingsFormView)
let RemindContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(RemindFormView)
//let SoundFormContainer= connect(mapStateToProps,mapDispatchToProps,null,{pure: false})(SoundFormView)

export { Container, RemindContainer }

export default Container;
