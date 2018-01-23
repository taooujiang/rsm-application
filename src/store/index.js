import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import {Router, hashHistory} from 'react-router'
import {routerReducer, syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
//import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
//import { persistState } from 'redux-devtools';

//import DevTools from 'app-utils/DevTools'
import appReducer from '../reducer/'
import dashboardReducer from '../app_modules/Dashboard/reducer'
import soundReducer from '../app_modules/Sound/reducer'
import memberReducer from '../app_modules/Member/reducer'
//import followReducer from '../app_modules/Follow/reducer'
import worklogReducer from '../app_modules/Worklog/reducer'
import settingsReducer from '../app_modules/Settings/reducer'
import jobReducer from '../app_modules/Job/reducer'
import interviewReducer from '../app_modules/Interview/reducer'
import resumeReducer from '../app_modules/Resume/reducer'
import eliteReducer from '../app_modules/Elite/reducer'
import reportReducer from '../app_modules/Report/reducer'
import creditReducer from '../app_modules/Credit/reducer'
import tabListResult from '../layout/reduce'

const reducers = combineReducers(Object.assign({}, {
  appReducer,
  dashboardReducer,
  tabListResult,
  soundReducer,
  memberReducer,
  interviewReducer,
  worklogReducer,
  jobReducer,
  resumeReducer,
  eliteReducer,
  creditReducer,
  reportReducer,
  settingsReducer
}, {routing: routerReducer}));

const reduxRouterMiddleware = routerMiddleware(hashHistory)
const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, // 允许我们 dispatch() 函数
    reduxRouterMiddleware, loggerMiddleware, // 一个很便捷的 middleware，用来打印 action 日志
)(createStore)
//const enhancer = compose(DevTools.instrument())

//const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStoreWithMiddleware(reducers)
const history = syncHistoryWithStore(hashHistory, store)
// reduxRouterMiddleware.listenForReplays(store)
export {history}
export default store
