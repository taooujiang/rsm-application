
import API from './api'
import {routerActions, push, replace} from 'react-router-redux'
import createConstants,{dispatchHandler,createTypes,createActionRoute} from 'app-utils/CreateConstants'
import {createResumeRoute} from 'app-components/Resume/utils'
import {listResumeJobAction,listResumeJobReportAction} from '../Resume/action'

export {listResumeJobAction,listResumeJobReportAction}

import {createAction} from 'redux-actions'

export const saveList = createAction("STORE_JOB")
export const saveParams = createAction("STORE_PARAMS")


export const saveCompanySearchList = createAction("SAVE_PUBLIST")
export const toggleLoc = createAction("TOGGLE_LOC")
export const togglePub = createAction("TOGGLE_PUB")

export const saveItem = createAction("UPSERT_JOB")
export const saveScore = createAction('SAVE_SCORE')

export const saveJobCount = createAction("SAVE_JOBCOUNT")

export const saveRules = createAction("SAVE-RULES")

const CONSTANTS = createConstants('JOB', [
  'fetch_request',
  'fetch_success',
  'fetch_failure',
])
export default CONSTANTS
//TODO: 调整命名及常量定义

let {
  fetchFailure,fetchRequest,fetchSuccess
} = createTypes(CONSTANTS)

let {syncAction,changeDeptAction,changeChargerAction,changeFeederAction,changeFeederPostAction,changeChargerPostAction,scoreSheetAction} =createResumeRoute()
export {syncAction,changeDeptAction,changeChargerAction,changeFeederAction,changeFeederPostAction,changeChargerPostAction,scoreSheetAction}

let {listRoute,backRoute,backListRoute,backRouteReload} = createActionRoute()
export {listRoute,backRoute,backListRoute,backRouteReload}


export function listAction(value) {
  let resetPage = {
    current:undefined,
    pageSize:undefined,
    total:undefined,
  }
  return (dispatch, getState) => {
    dispatch(fetchRequest('tableSpin'))
    return new API().fetchJobList(value).then(json => {
      dispatch(fetchSuccess('tableSpin'))
      dispatch(saveList(json))
      dispatch(saveParams(Object.assign({},value,resetPage)))
    }).catch(ex => {
      return dispatch(fetchFailure('tableSpin',ex))
    })
  }
}

export function itemAction(value) {
    return (dispatch, getState) => {
        dispatch(fetchRequest('itemSpin'))
        return new API().fetchItem(value).then(json => {
            dispatch(fetchSuccess('itemSpin'))
            dispatch(saveItem(json))
        }).catch(ex => {
            return dispatch(fetchFailure('itemSpin',ex))
        })
    }
}
export function itemUpsertAction(value) {
    return (dispatch, getState) => {
        dispatch(fetchRequest('itemSpin'))
        return new API().fetchUpsertItem(value).then(json => {
            dispatch(fetchSuccess('itemSpin',true))
            let {jobId} = json
            dispatch(saveItem(json))
            if(!value.jobId){
              dispatch(routerActions.push(`/job/jobrelease/${jobId}/2/2`))
            }
        }).catch(ex => {
            return dispatch(fetchFailure('itemSpin',ex))
        })
    }
}

export function offerAppAction(value){
  return (dispatch, getState) => {
      dispatch(fetchRequest('tableSpin'))
      return new API().fetchOfferApp(value).then(json => {
          dispatch(fetchSuccess('tableSpin'))
          let {approvalId,approvalName,isOffer,jobId} = json
          let info = {jobId,approvalId,approvalName,isOffer}
         dispatch(saveItem(info))
      }).catch(ex => {
          return dispatch(fetchFailure('tableSpin',ex))
      })
  }
}

export function listReportAction(value){
  return (dispatch, getState) => {
      dispatch(fetchRequest('tableSpin'))
      return new API().fetchJobCount(value).then(json => {
          dispatch(fetchSuccess('tableSpin'))
          dispatch(saveJobCount(json))
      }).catch(ex => {
          return dispatch(fetchFailure('tableSpin',ex))
      })
  }
}


export function companySearchAction(value){
    return (dispatch, getState) => {
        dispatch(fetchRequest('tableSpin'))
        return new API().fetchSearchCompany(value).then(json => {
            dispatch(fetchSuccess('tableSpin'))
            dispatch(saveParams(value))
            dispatch(saveCompanySearchList(json))
        }).catch(ex => {
            return dispatch(fetchFailure('tableSpin',ex))
        })
    }
}

export function changeJobOption(value){
  return (dispatch, getState) => {
      dispatch(fetchRequest('formSpin'))
      return new API().fetchUpdateJob(value).then(json => {
          dispatch(fetchSuccess('formSpin',true))
          let {jobIds,interviewers} = json
          if(jobIds.length == 1){
            let params = {
              jobId:jobIds.pop(),
              interviewers:interviewers
            }
            dispatch(saveItem(params))
          }
      }).catch(ex => {
          return dispatch(fetchFailure('formSpin',ex))
      })
  }
}

export function changeJobOptionSpec(value){
  return (dispatch, getState) => {
      dispatch(fetchRequest('formSpin'))
      return new API().fetchUpdateJobMuch(value).then(json => {
          dispatch(fetchSuccess('formSpin',true))
          let {jobIds,hrName} = json
          if(jobIds.length == 1){
            let params = {
              jobId:jobIds.pop(),
              hrName:hrName
            }
            dispatch(saveItem(params))
          }
      }).catch(ex => {
          return dispatch(fetchFailure('formSpin',ex))
      })
  }
}

export function jobSearchResultMergeAction(value){
  return (dispatch, getState) => {
      dispatch(fetchRequest('tableSpin'))
      return new API().fetchChannelJobInit(value).then(json => {
          dispatch(fetchSuccess('tableSpin',true))
      }).catch(ex => {
          return dispatch(fetchFailure('tableSpin',ex))
      })
  }
}

export function getScoreAction(value){
  return (dispatch, getState) => {
      dispatch(fetchRequest('tableSpin'))
      return new API().fetchScore(value).then(json => {
          dispatch(saveScore(json))
      }).catch(ex => {
          return dispatch(fetchFailure('tableSpin',ex))
      })
  }
}

export function endingFireAction(router,rows,keys,callback,type){
  return (dispatch, getState) => {
      dispatch(fetchRequest('tableSpin'))
      let value = {
        updateType:type,
        jobIds:keys
      }
      return new API().fetchUpdateJob(value).then(json => {
          dispatch(fetchSuccess('tableSpin',true))
          // callback()
          //console.log(getState().jobReducer.params)
          // dispatch(backRouteReload(router))
          if(callback){
            dispatch(listAction(getState().jobReducer.params)).then(callback)
          }else{
            type == 1 ? dispatch(saveItem({id:keys[0],status:3})) : dispatch(saveItem({id:keys[0],status:1}))
          }
      }).catch(ex => {
          return dispatch(fetchFailure('tableSpin',ex))
      })
  }
}
export function deleteJobAction(value){
  return (dispatch, getState) => {
      dispatch(fetchRequest('tableSpin'))
      return new API().fetchDelete(value).then(json => {
          dispatch(fetchSuccess('tableSpin',true))
          let path = {
            pathname:'job/list',
            state:{
              key:'reload'
            }
          }
          dispatch(routerActions.push(path))
      }).catch(ex => {
          return dispatch(fetchFailure('tableSpin',ex))
      })
  }
}

export function getJobRulesAction(value){
  return (dispatch, getState) => {
      dispatch(fetchRequest('itemSpin'))
      return new API().fetchRules(value).then(json => {
          dispatch(fetchSuccess('itemSpin'))
          let {rulesList} = json
          dispatch(saveRules(rulesList))
      }).catch(ex => {
          return dispatch(fetchFailure('itemSpin',ex))
      })
  }
}

export function cancleLinkAction(router,id,jobId){
  return (dispatch, getState) => {
      dispatch(fetchRequest('itemSpin'))
      let value = {
        type:2,
        id:id
      }
      return new API().fetchCancle(value).then(json => {
          dispatch(fetchSuccess('itemSpin'))
      }).catch(ex => {
          return dispatch(fetchFailure('itemSpin',ex))
      })
  }
}

export function jump2ResetAction(router,id,jobId){
  let pathname = router.getCurrentLocation().pathname+"/reset"
  let path = {
    pathname:pathname,
    state:{
      keys:id,
      pathname:router.getCurrentLocation().pathname
    }
  }
  return dispatch => dispatch(routerActions.push(path))
}

export function resetAction(value){
  return (dispatch, getState) => {
      dispatch(fetchRequest('itemSpin'))
      return new API().fetchCancle(value).then(json => {
          dispatch(fetchSuccess('itemSpin'))
      }).catch(ex => {
          return dispatch(fetchFailure('itemSpin',ex))
      })
  }
}

export function sheetAction(value){
  return (dispatch, getState) => {
      dispatch(fetchRequest('itemSpin'))
      return new API().fetchSheet(value).then(json => {
          dispatch(fetchSuccess('itemSpin',true))
      }).catch(ex => {
          return dispatch(fetchFailure('itemSpin',ex))
      })
  }
}

export function listCompany(value){
  return (dispatch, getState) => {
    dispatch(fetchRequest('itemSpin'))
    return new API().fetchComapnyList(value).then(json => {
      dispatch(fetchSuccess('itemSpin'))
      let {list}=json
      dispatch(saveCompanyList(list))
    }).catch(ex => {
      return dispatch(fetchFailure('itemSpin',ex))
    })
  }
}

export function synchronousAction(value){
  return (dispatch, getState) => {
    dispatch(fetchRequest('itemSpin'))
    return new API().fetchSynchron(value).then(json => {
      dispatch(fetchSuccess('itemSpin',true,json.message))
    }).catch(ex => {
      return dispatch(fetchFailure('itemSpin',ex))
    })
  }
}

export function togglePubAction(idx){
  return (dispatch,getState) =>{
    dispatch(fetchRequest('itemSpin'))
    dispatch(togglePub(idx))
  }
}
export function toggleLocAction(idx){
  return (dispatch,getState) =>{
    dispatch(fetchRequest('itemSpin'))
    dispatch(toggleLoc(idx))
  }
}
/*结束招聘*/
// export function endingFireAction(router,rows,keys){
//   return (dispatch, getState) => {
//       dispatch(fetchRequest('tableSpin'))
//       let value = {
//         updateType:1,
//         jobIds:keys
//       }
//       return new API().fetchUpdateJob(value).then(json => {
//           dispatch(fetchSuccess('tableSpin'))
//       }).catch(ex => {
//           return dispatch(fetchFailure('tableSpin',ex))
//       })
//   }
// }

// export function saveCompany(value){
//   return (dispatch, getState) => {
//     dispatch(fetchRequest('tableSpin'))
//     return new API().fetchSaveComapny(value).then(json => {
//       dispatch(fetchSuccess('tableSpin'))
//       let {companys}=json
//       dispatch(saveCompanyList(companys))
//     }).catch(ex => {
//       return dispatch(fetchFailure('tableSpin',ex))
//     })
//   }
// }
//

// export function clearOldAction() {
//   return (dispatch, getState) => {
//       dispatch(clearJobDetailReducer())
//   }
// }





// export function changeHrAction(value){
//   return (dispatch, getState) => {
//       dispatch(fetchRequest('tableSpin'))
//       return new API().fetchChangeHr(value).then(json => {
//           dispatch(fetchSuccess('tableSpin'))
//       }).catch(ex => {
//           return dispatch(fetchFailure('tableSpin',ex))
//       })
//   }
// }

// export function changeJobStatusAction(value){
//   return (dispatch, getState) => {
//       dispatch(fetchRequest('itemSpin'))
//       return new API().fetchJobStatus(value).then(json => {
//           dispatch(fetchSuccess('itemSpin'))
//       }).catch(ex => {
//           return dispatch(fetchFailure('itemSpin',ex))
//       })
//   }
// }

// export function mergeJobAction(value){
//   return (dispatch,getState) =>{
//     dispatch(fetchRequest('formSpin'))
//     dispatch(fetchBtnLoading({name:"buttonSpin",loading:true}))
//     return new API().fetchMergeJob(value).then(json => {
//         dispatch(fetchSuccess('formSpin'))
//         setTimeout(function(){
//           dispatch(fetchBtnLoading({name:"buttonSpin",loading:false}))
//         },2000)
//     }).catch(ex => {
//         return dispatch(fetchFailure('formSpin',ex))
//     })
//   }
// }
