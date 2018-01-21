/**
* @Author: jax <jaxchow>
* @Date:   2016-03-03T11:14:41+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2017-09-11T17:41:35+08:00
* @description:  connect state to view props for redux
*/

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import LoginView from './Login.view'
import RegisterView from './Register.view'
import * as actions from './action'

const mapStateToProps = (state) => {
  return {reduce: state.reduce}
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  }
}

let LoginViewContainer = connect(mapStateToProps, mapDispatchToProps)(LoginView)
let RegisterViewContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterView)

export {LoginViewContainer, RegisterViewContainer}
