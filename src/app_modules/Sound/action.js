import message from 'antd/lib/message';
import API from './api'
import {routerActions, push, replace} from 'react-router-redux'
import createConstants,{dispatchHandler,createTypes} from 'app-utils/CreateConstants'

const CONSTANTS = createConstants('sound', [
  'get_list',
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


export function listRoute() {
  return dispatch => dispatch(routerActions.replace('/sound'))
}

export function backRoute() {
  return dispatch => dispatch(routerActions.goBack())
}


export function listAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchList(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      dispatch(saveList(json.list, json.page))
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin',ex))
    })
  }
}
