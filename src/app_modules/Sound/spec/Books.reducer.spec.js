import {expect} from 'chai'

import {SAVE_ITEM,REMOVE_ITEM,GET_ITEM,SAVE_ITEM_STORES} from '../Books.action'
import bookReducer,{reduce,initialState} from '../Books.reducer'

describe('books reducer test', () => {
  it('should be undefined',()=>{
    expect(reduce(initialState,{type:undefined}))
    .to.eql(initialState)
  })

  it('should be SAVE_ITEM key {1}',()=>{
    let key=1
    let item={
      id:key,
      username:'jaxchow',
      email:'jaxchow@gmail.com'
    }

    let expectedReduce=Object.assign(initialState,{
        map:new Map().set(key,item)
    })
    let reducer=reduce(initialState,{type:'SAVE_ITEM',key,item})
    expect(reducer.map.get(key))
    .to.eql(item)
  })

  it('should be GET_ITEM key {1}',()=>{
    let item={
      id:1,
      username:'jaxchow',
      email:'jaxchow@gmail.com'
    }
    expect(reduce(initialState,{type:'GET_ITEM',key:1}).list)
    .to.eql([item])
  })

  it('should be REMOVE_ITEM KEY {1}',()=>{
    let item={
      id:1,
      username:'jaxchow',
      email:'jaxchow@gmail.com'
    }
    let reducer=reduce(initialState,{type:'REMOVE_ITEM',key:1})
    expect(reducer.map.has(1))
    .to.eql(false)
  })

  it('should be LIST_ITEM',()=>{
    let item={
      id:1,
      username:'jaxchow',
      email:'jaxchow@gmail.com'
    }
    initialState.map.set(1,item)
    initialState.map.set(2,item)
    initialState.map.set(3,item)
    initialState.map.set(4,item)
    initialState.map.set(5,item)
    initialState.map.set(6,item)
    initialState.map.set(7,item)

    let reducer=reduce(initialState,{type:'LIST_ITEM'})
    expect(reducer.list.length)
    .to.eql(initialState.map.size)
  })

  it('should be LIST_ITEM start {1} offset {5} ',()=>{
      let idx=1
      let offset=5
      let reducer=reduce(initialState,{type:'LIST_ITEM',idx:idx,offset:offset})
      expect(reducer.list.length)
      .to.eql(offset)
  })
})
