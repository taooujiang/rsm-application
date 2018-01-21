import message from 'antd/lib/message';
import API from './api'
import {routerActions, push, replace} from 'react-router-redux'
import createConstants,{dispatchHandler,createTypes} from 'app-utils/CreateConstants'

const CONSTANTS = createConstants('setting', [
  'get_list',
  'save_item',
  'sync_list',
  'save_list',
  'save_remind',
  'fetch_request',
  'fetch_success',
  'fetch_failure',
])
export default CONSTANTS
let {
  getItem,listItem,saveItem,saveList,fetchFailure,fetchRequest,fetchSuccess
} = createTypes(CONSTANTS)



export function addRoute() {
  return dispatch => dispatch(routerActions.push('/settings/fields/add'))
}

export function backRoute() {
  return dispatch => dispatch(routerActions.goBack())
}

export function editRoute(id) {
  return dispatch => dispatch(routerActions.push(`/settings/fields/${id}`))
}


function saveRemind(item){
  return {type:CONSTANTS.SAVE_REMIND,payload:{item}}
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

export function fetchRemindAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('remind'))
    return new API().fetchRemind().then(json => {
      dispatch(fetchSuccess('remind'))
      dispatch(saveRemind(json.item))
    }).catch(ex => {
      return dispatch(fetchFailure('remind',ex))
    })
  }
}
