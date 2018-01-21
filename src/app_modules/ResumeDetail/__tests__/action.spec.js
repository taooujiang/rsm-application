/**
 * @Date:   2017-09-04T15:34:26+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2017-09-07T15:16:47+08:00
 */




import MockFetch from 'mock-fetch-api'
import global from '../app-utils/MockGlobal'
import mockStore from '../app-utils/MockStore'
import createStoreWithMiddleware from '../app-utils/CreateStore'

import {reduce} from '../reducer'
import {saveAction,listAction,loadAction} from '../action'

const store = createStoreWithMiddleware(reduce)

describe('follow actions test', () => {
  //此处MOCK fetch  可以考虑与api  共用
  MockFetch.when('GET', `${APP_SERVER}/follow/1`).respondWith(200, JSON.stringify({list:[{id: '1', bookname: 'jaxchow', author: 'jaxchow@gmail.com'}]}));
  it('should be loadAction by key {1} method',(done)=>{
    const expectedActions = [
      { type :'FOLLOW_SAVE_ITEM',"key":'1',
        item:{id: '1', bookname: 'jaxchow', author: 'jaxchow@gmail.com'}
      }
    ]
    const mkStore = mockStore(store.getState(), expectedActions,done)
    mkStore.dispatch(loadAction(1))
  })
})
