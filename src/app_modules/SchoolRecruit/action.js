import API from './api'
import ResumeAPI from '../Resume/api'
import {routerActions, push, replace} from 'react-router-redux'
import createConstants,{dispatchHandler,createTypes,createActionRoute} from 'app-utils/CreateConstants'
import {createResumeRoute} from 'app-components/Resume/utils'
import {getFeedStageAction} from '../Resume/action'
import { message } from 'antd'
import {createAction} from 'redux-actions'

export const saveList = createAction("STORE_LIST")
export const saveParams = createAction("SAVE_PARAMS")
export const saveItem = createAction("SAVE_ITEM")
export const invateForDelivery = createAction("SEND_INVATE")


export const saveListCount = createAction("SAVE_LISTCOUNT")
export const saveCounts = createAction("SAVE_CARCOUNT")

export const saveDates = createAction("SAVE_DATE")
export const saveFeedStage = createAction("SAVE_FEEDSTAGE")

export const saveFeedBack = createAction("SAVE_FEEDBACK")


const CONSTANTS = createConstants('searchTalents', [
  'fetch_request',
  'fetch_success',
  'fetch_failure',
])

export default CONSTANTS
//TODO: 调整命名及常量定义

let {listRoute,backRoute,backRouteReload,backListRoute} = createActionRoute()
export {listRoute,backRoute,backRouteReload,backListRoute}

let {
  fetchFailure,fetchRequest,fetchSuccess
} = createTypes(CONSTANTS)

let {feedbackAction,delayAction,feedAction} =createResumeRoute()
export {feedbackAction,delayAction,feedAction}

export {getFeedStageAction}

// ----校招人才
// 保存参数
// tab查出的数据
export function listRealAction(value){
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchList(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      dispatch(saveList(json))
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin',ex))
    })
  }
}


// 简历详情数据
export function itemAction(value) {
  return (dispatch, getState) => {
      dispatch(fetchRequest('tableSpin'))
      return new API().fetchItem(value).then(json => {
          dispatch(fetchSuccess('tableSpin'))
          dispatch(saveItem(json))
      }).catch(ex => {
          return dispatch(fetchFailure('tableSpin',ex))
      })
  }
}
// 邀请投递
export function invateForDeliveryAction(value,params) {
  return (dispatch, getState) => {
      dispatch(fetchRequest('formSpin'))
      return new API().fetchInvateForDelivery(value).then(json => {
          dispatch(fetchSuccess('formSpin',true,'邀请发送成功'))
          dispatch(invateForDelivery(json))
          // 区分拉取哪个list
          if(window.location.href.indexOf('searchTalents') >-1){
             dispatch(listRealAction(params))
          }else{
            dispatch(listCountAction())
            dispatch(inviteListRealAction(params))
          }
          // dispatch(itemAction({id:value.id}))

      }).catch(ex => {
          return dispatch(fetchFailure('formSpin',ex))
      })
  }
}

// 校招人才----

// ---邀请记录
// 保存参数
export function listAction(value) {
  return (dispatch, getState) => {
    // dispatch(fetchRequest('tableSpin'))
    dispatch(saveParams(value))
    // return new API().fetchList(value).then(json => {
    //   dispatch(fetchSuccess('tableSpin'))
    //   dispatch(saveParams(value))
    // }).catch(ex => {
    //   return dispatch(fetchFailure('tableSpin',ex))
    // })
  }
}
// tab查出的数据
export function inviteListRealAction(value){
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchInviteList(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      dispatch(saveList(json))
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin',ex))
    })
  }
}

//获取tab上面筛选菜单
export function listCountAction(value){
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchListCount(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      dispatch(saveListCount(json))
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin',ex))
    })
  }
}


// 邀请记录---




