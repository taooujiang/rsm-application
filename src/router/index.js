import React, { Component } from "react";
import { Router, hashHistory } from "react-router";
import createRoutes from "app-utils/CreateRoutes";
import path from "path";
import AppLayout from "../layout/";
import store, { history, injectReducer } from "../store";
import ConfigUtils, { hasPermission } from "utils/ConfigUtils";
// import DashboardRouter from 'app_modules/Dashboard'
import { Error404, Error403 } from "app_modules/Error";

var RouteUtils = require("react-router/lib/RouteUtils");

/**
 * [dynamicRouter 未实现]
 * @param  {[type]}   location      [description]
 * @param  {Function} cb            [description]
 * @param  {[type]}   requireModule [description]
 * @param  {[type]}   modulesName   [description]
 * @return {[type]}                 [description]
 */

import dynamicDashboardRoutes from "app_modules/Dashboard/routes";
const dynamicRouter = (partialNextState, cb, importModule, reducerName) => {
  importModule.then(module => {
    injectReducer(store, { key: reducerName, reducer: module.reducer });
    cb(null, [module.Routes]);
  });
};

function authLogin(authName,nextState, replaceState) {
  var pathname = nextState.location.pathname;
  /*待分配管理不做权限判断*/
  // console.log(12312312,pathname)
  if ( pathname != "/resume/distributed" && !hasPermission(authName)) {
    replaceState("/403");
  }
}

function RootRoutes() {
  return [
    {
      path: "/",
      indexRoute: {
        onEnter: (nextState, replaceState) => replaceState("/dashboard")
      },
      component: AppLayout,
      childRoutes: [
        {
          //   path: 'demo',
          //   breadcrumbName: "demo",
          //   // onEnter: authLogin.bind(this,''),
          //
          // 	getChildRoutes:(partialNextState,cb)=>dynamicRouter(partialNextState,cb,import("app_modules/Demo"),"demoReducer")
          // 	// getChildRoutes:dynamicDashboardRoutes
          // }, {
          path: "dashboard",
          breadcrumbName: "首页",
          // onEnter: authLogin.bind(this,''),
          // childRoutes:RouteUtils.createRoutesFromReactChildren(dynamicDashboardRoutes)
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/Dashboard"),
              "dashboardReducer"
            )
          // getChildRoutes:dynamicDashboardRoutes
        },
        {
          path: "soundlist",
          breadcrumbName: "通话录音",
          onEnter: authLogin.bind(this,'soundlist'),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/SoundList"),
              "soundListReducer"
            )
        },
        {
          path: "log",
          breadcrumbName: "log",
          // onEnter: authLogin.bind(this,''),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/Log"),
              "logReducer"
            )
        },
        {
          path: "job",
          breadcrumbName: "岗位管理",
          onEnter: authLogin.bind(this,'job'),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/Job"),
              "jobReducer"
            )
        },
        {
          path: "resume",
          breadcrumbName: "简历管理",
          onEnter: authLogin.bind(this,'resume'),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/Resume"),
              "resumeReducer"
            )
        },
        {
          path: "elite",
          breadcrumbName: "人才库",
          onEnter: authLogin.bind(this,'elite'),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/Elite"),
              "eliteReducer"
            )
        },
        {
          path: "report",
          breadcrumbName: "统计分析",
          onEnter: authLogin.bind(this,'report'),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/Report"),
              "reportReducer"
            )
        },
        {
          path: "interview",
          breadcrumbName: "面试管理",
          onEnter: authLogin.bind(this,'interview'),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/Interview"),
              "interviewReducer"
            )
        },
        {
          path: "member",
          breadcrumbName: "员工管理",
          onEnter: authLogin.bind(this,'member'),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/Member"),
              "memberReducer"
            )
        },
        {
          path: "schoolRecruit",
          breadcrumbName: "校招人才",
          onEnter: authLogin.bind(this,'searchTalents'),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/SchoolRecruit"),
              "schoolRecruitReducer"
            )
        }, {
          path: "organization",
          breadcrumbName: "组织管理",
          onEnter: authLogin.bind(this,'organization'),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/OrganizationManagement"),
              "organizationReducer"
            )
        },
        {
          path: "settings",
          breadcrumbName: "系统设置",
          onEnter: authLogin.bind(this,'settings'),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/Settings"),
              "settingsReducer"
            )
        },
        {
          path: "credit",
          breadcrumbName: "诚信库",
          onEnter: authLogin.bind(this,'credit'),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/Credit"),
              "creditReducer"
            )
        },
        {
          path: "wesite",
          breadcrumbName: "微站管理",
          onEnter: authLogin.bind(this,'wesite'),
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/WeSite"),
              "wesiteReducer"
            )
        },
        {
          path: "personal",
          breadcrumbName: "个人中心",
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/Personal"),
              "personalReducer"
            )
        },
        {
          path: "apply",
          breadcrumbName: "信息登记表",
          getChildRoutes: (partialNextState, cb) =>
            dynamicRouter(
              partialNextState,
              cb,
              import("app_modules/ApplyForm"),
              "applyFormReducer"
            )
        },
        {
          path: "403",
          breadcrumbName: "没有访问权限",
          component: Error403
        },
        {
          path: "404",
          breadcrumbName: "找不到页面",
          component: Error404
        },
        {
          path: "*",
          breadcrumbName: "找不到页面",
          indexRoute: {
            onEnter: (nextState, replace) => replace("/404")
          }
        }
      ]
    }
  ];
}

export default class AppRouter extends Component {
  render() {
    return <Router routes={RootRoutes()} history={history} />;
  }
}
