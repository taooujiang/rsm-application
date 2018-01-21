import {expect} from 'chai'
import fetch from 'isomorphic-fetch'
import {createStore,compose, applyMiddleware,combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import mockStore from '../app-utils/MockStore'
import {reduce} from '../Books.reducer'
import {saveAction,listAction,loadAction} from '../Books.action'

const reducers = combineReducers(Object.assign({},{bookReducer:reduce}));
const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // 允许我们 dispatch() 函数
  loggerMiddleware, // 一个很便捷的 middleware，用来打印 action 日志
)(createStore)

const store = createStoreWithMiddleware(reducers)

describe('books actions test', () => {
  it('should be loadAction by key {1} method',(done)=>{
    const expectedActions = [
      { type :'SAVE_ITEM',"key":'1',
        item:{id: '1', bookname: 'jaxchow', author: 'jaxchow@gmail.com'}
      },
      { type: 'GET_ITEM', "key":1}
    ]
    const mkStore = mockStore(store.getState(), expectedActions,done)
    mkStore.dispatch(loadAction(1))
  })
})
