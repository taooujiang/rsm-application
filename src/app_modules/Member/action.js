
import API from './api'
import { routerActions, push, replace } from 'react-router-redux'
import { createAction } from 'redux-actions'
import InterviewAPI from '../Interview/api'


import createConstants, { dispatchHandler, createTypes, createActionRoute } from 'app-utils/CreateConstants'

const CONSTANTS = createConstants('member', [
  'get_list',
  // 'save_item',
  'remove_item',
  'new_item',
  'sync_list',
  'save_list',
  'save_sys_field_list',
  'save_import_result_list',
  'save_search_params',
  'save_params',
  'fetch_request',
  'fetch_success',
  'fetch_failure',
])


export default CONSTANTS
//TODO: 调整命名及常量定义
let {
  getItem, listItem, saveItem, removeItem, newItem, fetchFailure, fetchRequest, fetchSuccess, saveParams
} = createTypes(CONSTANTS)


export const memberListSave = createAction("STORE_MEMBER")
export const interpolListSave = createAction("STORE_INTERPOL")
export const recordListSave = createAction("STORE_RECORD")
export const optionSaveList = createAction("STORE_SYSTEMOPTION")
export const interpolSave = createAction("UPSERT_INTERPOL")
export const memberSave = createAction("UPSERT_MEMBER")
export const currentMemberSave = createAction("UPSERT_CURRENTMEMBER")
export const clearCurrentMember = createAction("CLEAR_CURRENTMEMBER")

export const templateSaveList = createAction('STORE_TEMPLATE')
export const memberUpdate = createAction("UPDATE_MEMBER")
export const templateSave = createAction('UPSERT_TEMPLATE')
export const memberItemSave = createAction("SAVE_MEMBERITEM")

export const saveFeedData = createAction("SAVE_FEEDDATA")
export const saveBaseInfo = createAction("SAVE_BASEINFO")

let { backRoute, listRoute,addRoute, editRoute, backShouldReloadRoute } = createActionRoute()
export { backRoute,listRoute, addRoute, editRoute, backShouldReloadRoute }

export function editonlyDepartureDateAction(data,router) {
  return dispatch => dispatch(routerActions.push(`${router.location.pathname}/editonlyDepartureDate`))
}
export function deitOnlyPositiveAction(data,router) {
  return dispatch => dispatch(routerActions.push(`${router.location.pathname}/deitOnlyPositive`))
}
export function onlyPositiveAction(data,router) {
  return dispatch => dispatch(routerActions.push(`${router.location.pathname}/onlyPositive`))
}
export function batchPositiveAction(data,router) {
  return dispatch => dispatch(routerActions.push(`${router.location.pathname}/batchPositive`))
}
export function editPositiveAction(data,router) {
  return dispatch => dispatch(routerActions.push(`${router.location.pathname}/editPositive`))
}
export function addContractInformationAction(data,router) {
  return dispatch => dispatch(routerActions.push(`${router.location.pathname}/addContractInformation`))
}
export function bulkDeparturesAction(data,router) {
  return dispatch => dispatch(routerActions.push(`${router.location.pathname}/bulkDepartures`))
}
export function editDepartureDateAction(data,router) {
  return dispatch => dispatch(routerActions.push(`${router.location.pathname}/editDepartureDate`))
}
export function practicePositiveAction(data,router) {
  return dispatch => dispatch(routerActions.push(`${router.location.pathname}/practicePositive`))
}
export function internship2ProbationAction(data,router) {
  return dispatch => dispatch(routerActions.push(`${router.location.pathname}/internship2Probation`))
}



export function exportRoute(id) {
  return dispatch => dispatch(routerActions.push(`/member/list/export`))
}

export function importRoute(id) {
  return dispatch => dispatch(routerActions.push(`/member/list/import`))
}

export function importResultRoute(id) {
  return dispatch => dispatch(routerActions.push(`/member/list/importResult`))
}

export function detailRoute(id) {
  return dispatch => dispatch(routerActions.push(`/member/list/detail/${id}`))
}
export function editMemberRoute(id) {
  return dispatch => dispatch(routerActions.push(`/member/list/detail/${id}/edit`))
}
export function leaveMemberRoute(id,item) {
  let path = {
    pathname:`/member/list/detail/${id}/leave`,
    state:{
      item:item
    }
  }
  return dispatch => dispatch(routerActions.push(path))
}
// export function backInterpolDetailRoute(router) {
//   let pathName = router.location.pathname
//   // let newLocation = {
//   //   pathname: pathname,
//   //   state: Object.assign({
//   //     key: 'reload',
//   //   }, location.state)
//   // }
//   // let hash=router.createLocation(newLocation)
//   // return dispatch => dispatch(routerActions.push(hash))
// }
export function fetchTemplateItemAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('formSpin'))
    return new API().fetchTemplateItem(value).then(json => {
      dispatch(fetchSuccess('formSpin'))
      dispatch(templateSave(json))
    }).catch(ex => {
      return dispatch(fetchFailure('formSpin', ex))
    })
  }
}

export function approvalRealAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchApprovalList(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
       dispatch(saveList(json))
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}
function saveSysFieldList(list) {
  return { type: CONSTANTS.SAVE_SYS_FIELD_LIST, payload: list }
}

function saveImportResultList(list) {
  return { type: CONSTANTS.SAVE_IMPORT_RESULT_LIST, payload: list }
}

function saveSearchParams(value) {
  return { type: CONSTANTS.SAVE_SEARCH_PARAMS, payload: value }
}

export function listAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchList(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      //console.log(json.list)
      let { list, ...page } = json
      dispatch(saveParams(value))
      dispatch(memberListSave(json))

    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}

export function templateListAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('templateSpin'))
    return new API().fetchTemplateList(value).then(json => {
      dispatch(fetchSuccess('templateSpin'))
      let { list, ...page } = json
      dispatch(templateSaveList(json))
    }).catch(ex => {
      return dispatch(fetchFailure('templateSpin', ex))
    })
  }
}

// interpol
export function interpolListAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchInterpolList(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      //console.log(json.list)
      let { list, ...page } = json
      dispatch(saveParams(value))
      dispatch(interpolListSave(json))

    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}
export function recordListAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchRecordlList(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      //console.log(json.list)
      let { list, ...page } = json
      dispatch(saveParams(value))
      dispatch(recordListSave(json))

    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}
export function optionListAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchOptionList(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      let { list, ...page } = json
      dispatch(optionSaveList(json))
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}
export function interpolExchangeAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchInterpolExchange(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      //console.log(json.list)
      let { list, ...page } = json
      dispatch(interpolSave(json))

    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}

export function personBaseAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('itemSpin'))
    return new API().fetchPersonBase(value).then(json => {
      dispatch(fetchSuccess('itemSpin'))
      dispatch(saveBaseInfo(json))
    }).catch(ex => {
      return dispatch(fetchFailure('itemSpin', ex))
    })
  }
}
export function approvalReportAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchApprovalCount(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      dispatch(saveCount(json))
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}
export function getFeedDataAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('formSpin'))
    return new InterviewAPI().fetchFeedData(value).then(json => {
      dispatch(fetchSuccess('formSpin'))
      dispatch(saveFeedData(json))
    }).catch(ex => {
      return dispatch(fetchFailure('formSpin', ex))
    })
  }
}

export function resumeDataAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchResumeData(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      //console.log(json.list)
      dispatch(memberItemSave(json))
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}
export function saveAction(value, page) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('formSpin'))
    return new API().fetchSave(value).then(json => {
      dispatch(fetchSuccess('formSpin', true, "保存成功！"))
      // dispatch(memberItemSave(json))
      dispatch(memberSave(json))
      dispatch(currentMemberSave(json))

      dispatch(listAction(page))
    }).catch(ex => {
      return dispatch(fetchFailure('formSpin', ex))
    })
  }
}

export function dissmissMemberAction(value, page) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('formSpin'))
    return new API().fetchDissmissMember(value).then(json => {
      dispatch(fetchSuccess('formSpin', true, "操作成功！"))
      dispatch(memberUpdate(Object.assign({},value,{status:3})))
      dispatch(currentMemberSave(Object.assign({},value,{status:3})))
      dispatch(listAction(page))
    }).catch(ex => {
      return dispatch(fetchFailure('formSpin', ex))
    })
  }
}

export function deleteAction(value, page) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchChangeStatus(value).then(json => {
      if (value.status) {
        console.log(page,"==deleteAction=page")
        dispatch(fetchSuccess('tableSpin', true, "转正成功！"))
        // dispatch(listAction(page))
        dispatch(routerActions.goBack())
      } else {
        dispatch(fetchSuccess('tableSpin', true, "删除成功！"))
        dispatch(routerActions.goBack())
      }
      dispatch(currentMemberSave(value))
      //console.log(json.list)
      // dispatch(removeItem(json))
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}

export function itemAction(value) {
  return (dispatch, getState) => {
    dispatch(fetchRequest('formSpin'))
    return new API().fetchItem({ id: value }).then(json => {
      dispatch(fetchSuccess('formSpin'))
      dispatch(currentMemberSave(json))
      //console.log(json.list)
      dispatch(memberSave(json))
    }).catch(ex => {
      return dispatch(fetchFailure('formSpin', ex))
    })
  }
}
export function clearCurrentMemberAction(value) {
  return (dispatch, getState) => {
    dispatch(clearCurrentMember())
  }
}

export function newItemAction(value) {
  return (dispatch, getState) => {
    dispatch(newItem())
  }
}

export function sysFieldListAction(value) {
  return (dispatch, getState) => {
    return new API().fetchSysFieldList(value).then(json => {
      //console.log(json.list)
      dispatch(saveSysFieldList(json))
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}

export function exportAction(url, value) {
  return (dispatch, getState) => {
    return new API().fetchExport(url, value).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}

export function uploadCommitAction(value) {
  return (dispatch, getState) => {
    return new API().fetchUploadCommit(value).then(json => {
      //console.log(json.list)
      console.log(json)
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}

export function importResultListAction(value) {
  return (dispatch, getState) => {
    return new API().fetchImportResultList(value).then(json => {
      //console.log(json.list)
      dispatch(saveImportResultList(json.list))
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin', ex))
    })
  }
}
