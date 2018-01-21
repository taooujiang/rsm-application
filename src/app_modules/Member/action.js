import message from 'antd/lib/message';
import API from './api'
import {routerActions, push, replace} from 'react-router-redux'
import createConstants,{dispatchHandler,createTypes} from 'app-utils/CreateConstants'

const CONSTANTS = createConstants('member', [
  'get_list',
  'save_item',
  'sync_list',
  'save_list',
  'fetch_request',
  'fetch_success',
  'fetch_failure',
])
export default CONSTANTS
//TODO: 调整命名及常量定义
let {
  getItem,listItem,saveItem,saveList,fetchFailure,fetchRequest,fetchSuccess
} = createTypes(CONSTANTS)

export function addRoute(){
  return dispatch => dispatch(routerActions.replace("/member/add"))
}
export function listRoute() {
  return dispatch => dispatch(routerActions.replace('/member'))
}

export function backRoute() {
  console.log("backRoute")
  return dispatch => dispatch(routerActions.goBack())
}


export function listAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchList(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      //console.log(json.list)
      dispatch(saveList(json.list, json.page))
    }).catch(ex => {
      return dispatch(fetchFailure('formSpin',ex))
    })
  }
}

export function saveAction(value){
  return (dispatch, getState) => {
    dispatch(fetchRequest('formSpin'))
    return new API().fetchSave(value).then(json => {
      dispatch(fetchSuccess('formSpin'))
      //console.log(json.list)
      dispatch(saveItem(json.item))
    }).catch(ex => {
      return dispatch(fetchFailure('formSpin',ex))
    })
  }
}

export function itemAction(value){
  return (dispatch, getState) => {
    dispatch(fetchRequest('formSpin'))
    return new API().fetchItem({id:value}).then(json => {
      dispatch(fetchSuccess('formSpin'))
      //console.log(json.list)
      dispatch(saveItem(json.item))
    }).catch(ex => {
      return dispatch(fetchFailure('formSpin',ex))
    })
  }
}
