/**
* @Author: jax <jaxchow>
* @Date:   2016-02-23T20:34:45+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2017-09-25T09:59:51+08:00
*/

import {
  newList,
  newItem,
  saveList,
  saveItem,
  fetchRequest,
  fetchSuccess,
  fetchFailure
} from 'app-utils/reducerUtils'
import CONSTANTS from './action'

// TODO: 调整本地数据结构
let initialState = {
  query: {
    pageIndex: 1,
    pageSize: 20,
    //extra custon params
  },
  list: new Map(),
  // for Item detail
  item: new Object(),
  msg: new Object(),
  status: new Map(),
  key: 'logDate'
}
/**
 * [reducer description]
 * @param  {[type]} [state=initialState] [description]
 * @param  {[type]} type                 [description]
 * @param  {[type]} payload              [description]
 * @return {[type]}                      [description]
 */
function reducer(state = initialState, {type, payload}) {

  switch (type) {
    case CONSTANTS.SAVE_LIST:
      return saveList(state, payload)
    case CONSTANTS.NEW_ITEM:
      return newItem(state, payload)
    case CONSTANTS.GET_ITEM:
      return getItem(state, payload)
    case CONSTANTS.SAVE_ITEM:
      return saveItem(state, payload)
    case CONSTANTS.FETCH_REQUEST:
      return fetchRequest(state, payload)
    case CONSTANTS.FETCH_SUCCESS:
      return fetchSuccess(state, payload)
    case CONSTANTS.FETCH_FAILURE:
      return fetchFailure(state, payload)
    default:
      return state;
  }
}

export {initialState, CONSTANTS}

export default reducer;
