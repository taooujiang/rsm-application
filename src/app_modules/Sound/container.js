/**
* @Author: jax <jaxchow>
* @Date:   2016-03-03T11:14:41+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-15T14:28:58+08:00
* @description:  connect state to view props for redux
*/

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import SoundListView from './SoundList.view'
import * as actions from './action'

const mapStateToProps = (state) => {
  return {reduce: state.soundReducer}
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

let SoundListContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(SoundListView)

export {SoundListContainer}

export default SoundListContainer;
