import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'

import Container, {
	ApprovalContainer,
	addContainer,
	deleteContainer,
	jobsContainer,
	ConstructionContainer,
	JobCategoryContainer,
	addEditJobCategoryContainer,
	delateJobCategoryContainer
} from './container'
			  
let Routes = (
	<Router component={null}>
	    <IndexRoute components={ConstructionContainer}/>
		<Route path="construction" components={ConstructionContainer} breadcrumbName="组织结构"></Route>
		<Route path="jobCategory" components={JobCategoryContainer} breadcrumbName="岗位类别">
	  		<Route path="add" components={addEditJobCategoryContainer} breadcrumbName="新增岗位类型"></Route>
			<Route path="edit" components={addEditJobCategoryContainer} breadcrumbName="编辑岗位类型"></Route> 
			<Route path="delete" components={delateJobCategoryContainer} breadcrumbName="删除岗位类型"></Route>
	  	</Route>
	  	<Route path="rankManagement" components={ConstructionContainer} breadcrumbName="职级管理"></Route>
	  	<Route path="jobs" components={jobsContainer} breadcrumbName="岗位管理">
	  		<Route path="add" components={addContainer} breadcrumbName="新增岗位"></Route>
			<Route path="edit" components={addContainer} breadcrumbName="编辑岗位"></Route> 
			<Route path="delete" components={deleteContainer} breadcrumbName="删除岗位"></Route>
	  	</Route>
	  {/* <Route path="position" components={ApprovalContainer} breadcrumbName="职位管理"></Route> */}
	</Router>
  )
export {Container}
export default Routes

