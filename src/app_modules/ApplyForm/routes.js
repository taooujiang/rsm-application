import React, { Component } from 'react'
import ReactRouter, { Router, Route, IndexRoute,IndexRedirect } from 'react-router'

import  {
	ApplyFormContainer,
	test
} from './container'
import  ApplyFormView from './ApplyForm.view'

let Routes = (
	<Router>

		<Route path="form" components={ApplyFormView} breadcrumbName="信息登记表设置" >

		</Route>
		<Route path="test" components={test} breadcrumbName="testshow" >

		</Route>

	</Router>
)

export default Routes
