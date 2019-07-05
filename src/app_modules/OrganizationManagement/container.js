
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import SideLayout from 'app/decorators/SideLayout'
import WrapperComponent from 'app/decorators/WrapperComponent'
import ModalView, {ModalWidthView, ModalDetailView} from 'app/components/Modal.view'

import ConstructionSide from './views/ConstructionSide.view'
import JobCategory from './views/JobCategory.view'
import Construction from './views/Construction.view'

import addEditJobCategoryView from './views/addEditJobCategory.view'
import {delateJobCategoryView} from './views/JobCategoryModels.view'
import jobsList,{jobsListSide} from './views/jobsList.view'
import jobsModelDelate from './views/jobsModel.delete.view'
import jobsModel from './views/jobsModel.view'

import * as actions from './action'

import {reducerListSelector, reducerItemSelector} from 'app-model/reducerSelector'

const mapStateToProps = (state) => {
	return {reduce: state.organizationReducer, appConfig: state.appReducer}
}
const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch),
		dispatch
	};
}

let Container = connect((state) => ({
	items: reducerListSelector(state.ORMReducer, "Organization"),
	reduce: state.organizationReducer,
	appReducer: state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(jobsListSide)(jobsList))
let jobsContainer = connect((state) => ({
	items: reducerListSelector(state.ORMReducer, "Organization"),
	reduce: state.organizationReducer,
	appReducer: state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(jobsListSide)(jobsList))
let ConstructionContainer = connect((state) => ({
	items: reducerListSelector(state.ORMReducer, "Organization"),
	reduce: state.organizationReducer,
	appReducer: state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(ConstructionSide)(Construction))
let JobCategoryContainer = connect((state) => ({
	items: reducerListSelector(state.ORMReducer, "Organization"),
	reduce: state.organizationReducer,
	appReducer: state.appReducer
}), mapDispatchToProps, null, {pure: false})(SideLayout(ConstructionSide)(JobCategory))
let addEditJobCategoryContainer = connect((state) => ({
	items: reducerListSelector(state.ORMReducer, "Organization"),
	reduce: state.organizationReducer,
	appReducer: state.appReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(addEditJobCategoryView))
let delateJobCategoryContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(delateJobCategoryView))
// let delateJobCategoryContainer =  connect((state) => ({
// 	items: reducerListSelector(state.ORMReducer, "Organization"),
// 	reduce: state.organizationReducer,
// 	appReducer: state.appReducer
// }), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(delateJobCategoryView))
let addContainer = connect((state) => ({
	items: reducerListSelector(state.ORMReducer, "Organization"),
	reduce: state.organizationReducer,
	appReducer: state.appReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(jobsModel))
let deleteContainer = connect((state) => ({
	items: reducerListSelector(state.ORMReducer, "Organization"),
	reduce: state.organizationReducer,
	appReducer: state.appReducer
}), mapDispatchToProps, null, {pure: false})(WrapperComponent(ModalView)(jobsModelDelate))

export {
	addContainer,
	deleteContainer,
	jobsContainer,
	ConstructionContainer,
	JobCategoryContainer,
	addEditJobCategoryContainer,
	delateJobCategoryContainer
}

export default Container;
