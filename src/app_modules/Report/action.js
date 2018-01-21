import message from 'antd/lib/message';
import API from './api'
import {routerActions, push, replace} from 'react-router-redux'
import createConstants,{dispatchHandler,createTypes} from 'app-utils/CreateConstants'

const CONSTANTS = createConstants('report', [
  'get_list',
  'save_item',
  'sync_list',
  'save_list',
  'fetch_request',
  'fetch_success',
  'fetch_failure',
])
export default CONSTANTS
let {
  getItem,listItem,saveItem,saveList,fetchFailure,fetchRequest,fetchSuccess
} = createTypes(CONSTANTS)



export function addRoute() {
  return dispatch => dispatch(routerActions.push('/report/fields/add'))
}

export function backRoute() {
  return dispatch => dispatch(routerActions.goBack())
}

export function editRoute(id) {
  return dispatch => dispatch(routerActions.push(`/report/fields/${id}`))
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
