import message from 'antd/lib/message';
import {routerActions, push, replace} from 'react-router-redux'
import createConstants,{dispatchHandler,createTypes} from 'app-utils/CreateConstants'

import API from './api'

const CONSTANTS = createConstants('dashboard', [
  'get_list',
  'get_item',
  'save_item',
  'new_item',
  'save_list',
  'save_notices',
  'fetch_request',
  'fetch_success',
  'fetch_failure',
])

export default CONSTANTS

let {
  getItem,listItem,saveItem,saveList,fetchFailure,fetchRequest,fetchSuccess
} = createTypes(CONSTANTS)

function saveNotices(items, total) {
  return {type: CONSTANTS.SAVE_NOTICES,payload:{ list:items, total}}
}

export function loadNotices() {
  return (dispatch, getState) => {
      dispatch(fetchRequest('noticeSpin'))
    return new API().fetchNotices().then(json => {
      dispatch(fetchSuccess('noticeSpin'))
      dispatch(saveNotices(json.list))
    }).catch(ex => {
      return dispatch(fetchFailure('noticeSpin',ex))
    })
  }
}
