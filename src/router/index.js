import React, {Component} from 'react'

import createRoutes from 'app-utils/CreateRoutes'
import AppLayout from '../layout/'

import {RegisterViewContainer, LoginViewContainer} from '../app_modules/Passport/container'
import { Container as  DemoViewContainer} from '../app_modules/Demo/container'
import { ResumeDetailContainer} from '../app_modules/Resume/container'

import DashboardRouter from 'app_modules/Dashboard'
import {Error404,Error403} from 'app_modules/Error'

/**
 * [dynamicRouter 未实现]
 * @param  {[type]}   location      [description]
 * @param  {Function} cb            [description]
 * @param  {[type]}   requireModule [description]
 * @param  {[type]}   modulesName   [description]
 * @return {[type]}                 [description]
 */
// const dynamicRouter = (location,cb,requireModule,modulesName) =>{
// 	require.ensure([], (require) => {
// 		console.log(require)
// 		cb(null,[require(requireModule).default])
// 	},modulesName)
// }


const dynamicDashboardRoutes = (location,cb) =>{
	require.ensure([],require=>{
		cb(null,require('app_modules/Dashboard').Routes)
	},'Dashboard')
}

const dynamicInterviewRoutes=(partialNextState, cb) => {
		require.ensure([], (require) => {
			cb(null,[require('app_modules/Interview/').Routes])
		},'Interview')
}

const dynamicJobRoutes=(partialNextState, cb) => {
		require.ensure([], (require) => {
			cb(null,[require('app_modules/Job/').Routes])
		},'Job')
}

const dynamicResumeRoutes=(partialNextState, cb) => {
		require.ensure([], (require) => {
			cb(null,[require('app_modules/Resume/').Routes])
		},'Resume')
}

const dynamicEliteRoutes=(partialNextState, cb) => {
		require.ensure([], (require) => {
			cb(null,[require('app_modules/Elite/').Routes])
		},'Elite')
}

const dynamicReportRoutes=(partialNextState, cb) => {
		require.ensure([], (require) => {
			cb(null,[require('app_modules/Report/').Routes])
		},'Report')
}

const dynamicSoundRoutes=(partialNextState, cb) => {
		require.ensure([], (require) => {
			cb(null,[require('app_modules/Sound/').Routes])
		},'Sound')
}

const dynamicMemberRoutes=(partialNextState, cb) => {
		require.ensure([], (require) => {
			cb(null,[require('app_modules/Member/').Routes])
		},'Member')
}
const dynamicWorklogRoutes=(partialNextState, cb) => {
		require.ensure([], (require) => {
			cb(null,[require('app_modules/Worklog/').Routes])
		},'Worklog')
}

const dynamicSettingsRoutes=(partialNextState, cb) => {
		require.ensure([], (require) => {
			cb(null,[require('app_modules/Settings/').Routes])
		},'Settings')
}


function authLogin(nextState, replaceState) {
  const token = sessionStorage.getItem('token')
  if (!!token) {
    replaceState('/login')
    // hashHistory.push('/login')
  }else{
    //replaceState('/dashboard')
    //nextState()
  }
}

function onEnterTab(nextState,replaceState){
    console.log("onEnterTab")
}

function onLeaveTab(nextState,replaceState){
    console.log("onLeave")
}

export default function AppRouter() {
  return [
    {
      path: '/login',
      component: LoginViewContainer
    }, {
      path: '/register',
      component: RegisterViewContainer
		}, {
			path: '*/detail',
			component:ResumeDetailContainer
    }, {
      path: '/',
      indexRoute: {
        onEnter: (nextState,replaceState)=> replaceState("/dashboard")
      },
      onEnter: authLogin,
      component: AppLayout,
      childRoutes: [
        {
          path: 'demo',
          breadcrumbName: "用例展示",
					component:DemoViewContainer
        }, {
          path: 'dashboard',
          breadcrumbName: "功能区",
					getChildRoutes:dynamicDashboardRoutes
        }, {
          path: 'sound',
          breadcrumbName: "通话录音",
					getChildRoutes: dynamicSoundRoutes
        }, {
          path: 'job',
          breadcrumbName: "岗位管理",
					getChildRoutes: dynamicJobRoutes
        }, {
          path: 'resume',
          breadcrumbName: "简历管理",
					getChildRoutes: dynamicResumeRoutes
        }, {
          path: 'elite',
          breadcrumbName: "人才库",
					getChildRoutes: dynamicEliteRoutes
        }, {
          path: 'report',
          breadcrumbName: "统计分析",
					getChildRoutes: dynamicReportRoutes
        }, {
          path: 'interview',
          breadcrumbName: "面试管理",
					getChildRoutes: dynamicInterviewRoutes
        }, {
          path: 'member',
          breadcrumbName: "员工管理",
					getChildRoutes: dynamicMemberRoutes
        }, {
          path: 'settings',
          breadcrumbName: "系统设置",
          getChildRoutes: dynamicSettingsRoutes
			},{
					 path: '403',
					 breadcrumbName: "没有访问权限",
					 component:Error403
			},{
					 path: '404',
					 breadcrumbName: "找不到页面",
					 component:Error404
			},{
					 path: '*',
					 breadcrumbName: "找不到页面",
           indexRoute: {
            onEnter: (nextState, replace) => replace('/404')
           },
			}]
    }
  ]
}
