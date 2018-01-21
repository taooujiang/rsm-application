/**
* @Author: jax <jaxchow>
* @Date:   2016-02-23T20:34:45+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-08T09:22:49+08:00
*/

import {createStore, combineReducers} from 'redux';

import {CONSTANTS} from './action'

// TODO: 调整本地数据结构
let initialState = {
  msg:"",
  authID: '',
  userid:"",
  username:"",
  nickname:"",
  loginTime: '',
  expiresTime: ''
}
//TODO： 拆分reduce。update\get
function reduce(state = initialState, action) {
  let {map} = state
  switch (action.type) {
    case CONSTANTS.AUTH_VERIFY:
      if(state.expiresTime<new Date().getTime()){
        return Object.assign(state, {authID: "",username:"",nickname:"",userid:"",msg:"用户身份认证已过期"})
      }else{
        return state
      }
    case CONSTANTS.AUTH_FAILURE:
      return Object.assign(state, {authID: "",msg:action.msg})
    case CONSTANTS.AUTH_SUCCESS:
      return Object.assign(state, {
        msg:"登陆成功",
        authID: action.authID,
        loginTime: action.loginTime,
        expiresTime: action.expiresTime,
        userid:action.userid,
        username:action.username,
        nickname:action.nickname
      })
    default:
      return state;
  }
}

//const userReducer = combineReducers({reduce});
export {reduce, initialState};
export default reduce;
