/**
* @Author: jax <jaxchow>
* @Date:   2016-03-03T11:14:41+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-23T11:10:10+08:00
* @description:  connect state to view props for redux
*/

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import CreditListView from './CreditList.view'
import CreditFormView from './CreditForm.view'
import * as actions from './action'

const mapStateToProps = (state) => {
  return {reduce: state.creditReducer,appConfig:state.appReducer}
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

let CreditFormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(CreditFormView)
let Container = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(CreditListView)


export {CreditFormContainer}

export default Container;
