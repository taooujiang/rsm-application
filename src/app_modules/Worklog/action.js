import message from 'antd/lib/message'
import API from './api'
import createRouter from 'app-utils/CreateRouter'
import createConstants from 'app-utils/CreateConstants'
import {
  getItem,
  getList,
  saveList,
  saveItem,
  fetchRequest,
  fetchFailure,
  fetchSuccess,
} from 'app-utils/createHandler'

//TODO: 调整命名及常量定义
const CONSTANTS = createConstants('worklog', [
  'get_list',
  'get_item',
  'save_item',
  'save_list',
  'new_item',
  'fetch_request',
  'fetch_success',
  'fetch_failure'
])

export default CONSTANTS

export function listRoute() {
  return dispatch => dispatch(createRouter().replace('/worklog/list'))
}
export function shareRoute() {
  return dispatch => dispatch(createRouter().replace('/worklog/share'))
}

export function addRoute() {
  return dispatch => dispatch(createRouter().push('/worklog/list/add'))
}

export function backRoute() {
  return dispatch => dispatch(createRouter().goBack())
}

export function editRoute(id) {
  return dispatch => dispatch(createRouter().push(`/worklog/list/edit/${id}`))
}

export function listAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest(CONSTANTS, "listAction"))
    return new API().fetchList(value).then(json => {
      dispatch(fetchSuccess(CONSTANTS, "listAction"))
      return json
    }).then(json => {
      dispatch(saveList(CONSTANTS, json.dtos, json.dtos.length))
    }).catch(ex => {
      console.log(ex)
      return dispatch(fetchFailure(CONSTANTS, "listAction"))
    })
  }
}

export function listShareAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest(CONSTANTS, "listShareAction"))
    return new API().fetchShareLog(value).then(json => {
      dispatch(fetchSuccess(CONSTANTS, "listShareAction"))
      dispatch(saveList(CONSTANTS, json.dtos, json.dtos.length))
    }).catch(ex => {
      return dispatch(fetchFailure(CONSTANTS, "listShareAction"))
    })
  }
}

export function newAction(key) {
  return (dispatch, getState) => {
    return dispatch(newItem(key))
  }
}

export function loadAction(key) {

  return (dispatch, getState) => {
    return new API().fetchItem(key).then(json => {
      dispatch(saveItem('logDate', json.dtos[0]))
    }).catch(ex => {
      console.log(ex)
      return dispatch(fetchFailure(ex))
    })
  }
}
