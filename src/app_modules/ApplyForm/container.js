/**
* @Author: jax <jaxchow>
* @Date:   2016-03-03T11:14:41+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-02-06T15:52:51+08:00
* @description:  connect state to view props for redux
*/

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {reducerItemSelector,reducerListSelector,reducerListSelectorFilter} from 'app-model/reducerSelector'
import SideLayout from 'app/decorators/SideLayout'
import ApplyFormView from './ApplyForm.view'



const mapStateToProps = (state) => {
    return { reduce: state.settingsReducer, appConfig: state.appReducer }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // actions: bindActionCreators(actions, dispatch),
        // dispatch
    };
}
let ApplyFormContainer = connect((state)=>({
  // item:reducerItemSelector(state.ORMReducer,"Remind",'account'),
  // items:reducerListSelector(state.ORMReducer,"Template"),
  // reduce: state.settingsReducer,
  appReducer:state.appReducer
}), mapDispatchToProps, null, {pure: false})(ApplyFormView)

export {
		ApplyFormContainer,
}

