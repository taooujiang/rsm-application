
import API from './api'
import {routerActions, push, replace} from 'react-router-redux'
import {createActionRoute} from 'app-utils/CreateConstants'

import {createAction} from 'redux-actions'


let {listRoute,backRoute} = createActionRoute()
export {listRoute,backRoute}


export const saveList = createAction("STORE_SOUND")
export const saveParams = createAction("STORE_SOUND_PARAMS")
export const saveMsgList = createAction("STORE_MSG")
export const saveMsgParams = createAction("STORE_MSG_PARAMS")

export function listAction(params){
  return (dispatch,getState) =>{
    return new API().fetchList(params).then(json=>{
      dispatch(saveList(json))
    }).catch(ex=>{

    })
  }
}
export function paramsSaveAction(params){
	return (dispatch,getState) =>{
		const {current,pageSize,total,...json}=params;
    dispatch(saveParams(json))
  }
}

export function messagelistAction (params){
  return (dispatch,getState) =>{
    return new API().fetchMessageList(params).then(json=>{
      dispatch(saveList(json))
    }).catch(ex=>{

    })
  }
}
export function msgParamsAction(params){
	return (dispatch,getState) =>{
		const {current,pageSize,total,...json}=params;
    dispatch(saveMsgParams(json))
  }
}


