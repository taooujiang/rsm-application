import React, { Component } from 'react'
import ReactRouter, { Router, Route, IndexRoute,IndexRedirect } from 'react-router'

import  {
	ApplyFormContainer,
} from './container'

let Routes = (
	<Router>
    
		<Route path="form" components={ApplyFormContainer} breadcrumbName="信息登记表设置" >

		</Route>
		

	</Router>
)

export default Routes
