import ActionRouter from 'app-utils/ActionRouterUtils'
import API from './api'


export const CONSTANTS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGIN: 'SIGIN',
  AUTH_FAILURE: 'AUTH_FAILURE',
  AUTH_PROCESS: 'AUTH_PROCESS',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_VERIFY: 'AUTH_VERIFY'
}
function authVerify(){
  return {type:CONSTANTS.AUTH_VERIFY}
}
function login(username, password) {
  return {type: CONSTANTS.LOGIN, username, password}
}

function processAuthSuccess(json) {
  return {type: CONSTANTS.AUTH_SUCCESS, ...json}
}

function processAuthFailure(json) {
  return {type: CONSTANTS.AUTH_FAILURE, msg:json.msg}
}

export function doLogin(username, password) {
  return dispatch => new API()
  .fetchLogin({username:username,password:password})
  .then(json => {
    if(json.msg=='ok'){
      dispatch(processAuthSuccess(json.data))
    }else{
      return dispatch(processAuthFailure(json))
    }
  }).catch(ex => {
    return dispatch(processAuthFailure(ex))
  })
}

export function doLogout(userid) {
  return dispatch => new API()
  .fetchLogout({userid:userid})
  .then(json => {
    dispatch(processAuthSuccess(json.data))
  }).catch(ex => {
    return dispatch(processAuthFailure(ex))
  })
}

export function goRegister() {
  return dispatch => dispatch(ActionRouter.push('/register'))
}

export function goLogin() {
  return dispatch => dispatch(ActionRouter.push('/login'))
}

export function registerAction(values) {
  return dispatch => dispatch(ActionRouter.push('/login'))
}

export function loginAction(username, password) {
  return dispatch => dispatch(ActionRouter.push('/dashboard/'))
}
