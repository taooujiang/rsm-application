
import CONSTANTS from '../action'
import reducer,{reduce,initialState} from '../reducer'

describe('books reducer test', () => {
  it('should be undefined',()=>{
    expect(reduce(initialState,{type:undefined})).toEqual(initialState)
  })

  it('should be SAVE_ITEM key {1}',()=>{
    let key="k001"
    let item={
      id:key,
      username:'jaxchow',
      email:'jaxchow@gmail.com'
    }

    let expectedReduce=Object.assign(initialState,{
        map:new Map().set(key,item)
    })
    let reducer=reduce(initialState,{type:CONSTANTS.SAVE_ITEM,key,item})
    expect(reducer.map.get(key)).toEqual(item)
  })

  it('should be GET_ITEM key {1}',()=>{
    let item={
      id:"k001",
      username:'jaxchow',
      email:'jaxchow@gmail.com'
    }
    //  let reducer=reduce(initialState,{type:'SAVE_ITEM',key,item})
    expect(reduce(initialState,{type:CONSTANTS.GET_ITEM,key:'k001'}).list)
    .toEqual([item])
  })

  it('should be REMOVE_ITEM KEY {1}',()=>{
    let reducer=reduce(initialState,{type:CONSTANTS.REMOVE_ITEM,key:'k001'})
  //  expect(reducer.map.has('k001')).toEqual(false)
  })

  it('should be LIST_ITEM',()=>{
    let item={
      id:1,
      username:'jaxchow',
      email:'jaxchow@gmail.com'
    }
    initialState.map.set("k1",item)
    initialState.map.set("k2",item)
    initialState.map.set("k3",item)
    initialState.map.set("k4",item)
    initialState.map.set("k5",item)
    initialState.map.set("k6",item)
    initialState.map.set("k7",item)

    let reducer=reduce(initialState,{type:CONSTANTS.LIST_ITEM,idx:1,offset:7})
    expect(initialState.map.size).toEqual(7)
  })

  it('should be LIST_ITEM start {1} offset {5} ',()=>{
      let idx=1
      let offset=5
      let reducer=reduce(initialState,{type:CONSTANTS.LIST_ITEM,idx:idx,offset:offset})
      expect(reducer.list.length).toEqual(offset)
  })

  it('should be LIST_ITEM start {1} offset {-2} ',()=>{
      let idx=1
      let offset=-2
      let reducer=reduce(initialState,{type:CONSTANTS.LIST_ITEM,idx:idx,offset:offset})
      expect(reducer.list.length).toEqual(5)
  })
})
