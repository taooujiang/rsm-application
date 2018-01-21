
import reducer,{initialState,CONSTANTS} from './reducer'

describe('reducer test case', () => {

  it('SAVE_LIST should be length  ',() =>{
    let list= [{a:1},{a:2},{a:3}]
    let payload={list}
    let ret=reducer(initialState,{ type:CONSTANTS.SAVE_LIST,payload})
    expect(ret.list.size).toEqual(list.length)
    expect([...ret.list.values()]).toEqual(list)
  })

  it('SAVE_ITEM should be equal',() =>{
    let item= {a:1,B:2}
    let payload={item}
    let ret=reducer(initialState,{ type:CONSTANTS.SAVE_ITEM,payload})
    expect(ret.item).toEqual(item)
  })

  it('NEW_ITEM should be empty', ()=>{
    let ret=reducer(initialState,{ type:CONSTANTS.NEW_ITEM})
    expect(ret.item).toEqual({})
  })

  it('FETCH_REQUEST with payload code is 0',()=>{
    let payload={
      name:'table_list',
      code:'0'
    }
    let ret=reducer(initialState,{ type:CONSTANTS.FETCH_REQUEST,payload})
    expect(ret.status.get(payload.name)).toEqual(payload.code)
  })


  it('FETCH_SUCCESS with payload code is 200',()=>{
    let payload={
      name:'submit_form',
      code:'200'
    }
    let ret=reducer(initialState,{ type:CONSTANTS.FETCH_SUCCESS,payload})
    expect(ret.status.get(payload.name)).toEqual(payload.code)
  })

  it('FETCH_FAILURE with payload code is 500',()=>{
    let payload={
      name:'menu_list',
      code:'500'
    }
    let ret=reducer(initialState,{ type:CONSTANTS.FETCH_SUCCESS,payload})
    expect(ret.status.get(payload.name)).toEqual(payload.code)
  })
})
