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
import OfferFormView from './OfferForm.view'
import EntryFormView from './EntryForm.view'
import RelatedFormView from './RelatedForm.view'
import FeedbackFormView from './FeedbackForm.view'
import RejectFormView from './RejectForm.view'
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
let OfferFormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(OfferFormView)
let EntryFormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(EntryFormView)
let RelatedFormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(RelatedFormView)
let ResumeDetailContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(ResumeDetailView)
let FeedbackFormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(FeedbackFormView)
let RejectFormContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(RejectFormView)

export {
  ResumeDetailContainer,
  OfferFormContainer,
  EntryFormContainer,
  RelatedFormContainer,
  RejectFormContainer,
  FeedbackFormContainer
}

export default Container;
