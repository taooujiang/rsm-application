/**
 * @Author: jax <jaxchow>
 * @Date:   2016-02-23T20:34:45+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-03-07T19:51:02+08:00
 */


import {
  newList,
  newItem,
  saveList,
  saveItem,
  fetchRequest,
  fetchSuccess,
  fetchFailure
} from 'app-utils/reducerUtils'

import {
  handleActions
} from 'redux-actions'
import CONSTANTS, {
  removeProdect,
  addProdect,
  companyCardImgListRemove,
  companyCardImgList,
  companyCardRemoveTag,
  companyCardAddTag,
  companyCardList,
  companyCardListSave,
  saveParams,
  orgTreeSave,
  authTreeSave,
  parentOrgSave,
  parentOrgRemove,
  roleDetailSave,
  roleDetailRemove,
  remindSave,
  actionLogListSave,
  actionLogParamsSave
} from './action'

// TODO: 调整本地数据结构
let initialState = {
  params: {
    // query params
  },
  page: {
    current: 1,
    pageSize: 10,
    total: 0
  },
  spins: {
    tableSpin: false,
    itemSpin: false,
    formSpin: false,
    talentLabelSpin: false,
    templateSpin: false,
    channelSpin: false,
    companyCardSpin: false
  },
  accountInfo: new Object(),
  msg: new Object(),
  status: new Map(),
  isReal: true,
  key: 'fieldId',
  orgTree: new Array(),
  authTree: new Array(),
  parentOrg: new Object(),
  roleDetail: new Object()
}

function saveReal(state, payload) {
  state.isReal = payload.status
  return state
}

function changeProp(state, payload) {
  let item = state.list.get(payload.id)
  item[payload.propName] = payload.value
  state.list.set(payload.id, item)
  return Object.assign({}, state)
}

function saveAccount(state, payload) {
  state.accountInfo = payload
  return state
}



//TODO： 拆分reduce。update\get
function reduce(state = initialState, {
  type,
  payload
}) {
  switch (type) {
    // case CONSTANTS.SAVE_LIST:
    // 	return saveList(state, payload)
    // case CONSTANTS.NEW_ITEM:
    // 	return newItem(state, payload)
    // case CONSTANTS.SAVE_ACCOUNT:
    // 	return saveAccount(state, payload)
    // case CONSTANTS.CHANGE_PROP:
    // 	return changeProp(state, payload)
    // case CONSTANTS.SAVE_REMIND:
    // 	return saveRemind(state, payload)
    // case CONSTANTS.SAVE_REAL:
    // 	return saveReal(state, payload)
    case CONSTANTS.FETCH_REQUEST:
      return fetchRequest(state, payload)
    case CONSTANTS.FETCH_SUCCESS:
      return fetchSuccess(state, payload)
    case CONSTANTS.FETCH_FAILURE:
      return fetchFailure(state, payload)
    default:
      return state;
  }
}

const actions = {}

actions[orgTreeSave] = (state, action) => {
  let a = JSON.stringify(action.payload).replace(/"text":/g, "\"title\":")
  let b = a.replace(/"id":/g, "\"value\":")
  return {
    ...state,
    orgTree: JSON.parse(b)
  }
}
actions[authTreeSave] = (state, action) => {
  return {
    ...state,
    authTree: action.payload
  }
}
actions[saveParams] = (state, action) => {
  console.log(action)
  return {
    ...state,
    params: action.payload
  }
}
actions[parentOrgSave] = (state, action) => {
  return {
    ...state,
    parentOrg: action.payload
  }
}

actions[parentOrgRemove] = (state, action) => {
  return {
    ...state,
    parentOrg: []
  }
}
// actions[companyCardListSave]= (state, action) => {
//   return {
//     ...state,
//     ...action.payload
//   }
// }
actions[companyCardList] = (state, action) => {
  console.log( action.payload,"===companyCardList")
  action.payload.list[0].imageList = action.payload.list[0].imageList.length && [...action.payload.list[0].imageList].map((item, index) => {
    return {
      name: 'img' + index,
      url: item.imageUrl,
      thumbUrl: item.imageUrl,
      uid: index,
      imageUrl: item.imageUrl,
      imageSort: item.imageSort
    }
  }).sort((a, b) => {
    return a.imageSort - b.imageSort
  })
  action.payload.list[0].companyLogo = action.payload.list[0].companyLogo != '' ? [{
      name: 'img0',
      url: action.payload.list[0].companyLogo,
      thumbUrl: action.payload.list[0].companyLogo,
      uid: 0
    }] : []
  // action.payload.list[0].productList = [... action.payload.list[0].productList].map((item,index)=>{
  //   item.productLogo=   item.productLogo != '' ?  [{
  //       name: 'img' + index,
  //       url: item.productLogo,
  //       thumbUrl: item.productLogo,
  //       uid:index
  //       }]
  //       :[]
  //     return item
  // })

  const {
    productList,
    ...oteherProps
  } = action.payload.list[0]
  let productListArray = []
  if (productList) {
    productListArray = [...productList].map((item, index) => {
      console.log(item, "==action.item")
      const {
        name,
        thumbUrl,
        uid,
        url,
        ...otherprops
      } = item.productLogo ? item.productLogo[0] : {}
      const {
        productLogo,
        ...otherpropsObj
      } = item
      console.log(productLogo, "==action.productLogo")
      return {
        ...otherpropsObj,
        productLogo: [{
          name: 'img' + index,
          thumbUrl: productLogo,
          uid: index,
          url: productLogo,
          ...otherprops
        }]
      }
    })
  }

  console.log(oteherProps, productListArray, "==action.payload")
  const {
    list,
    ...otnerState
  } = state

  // return {
  //   ...state,
  //   ...action.payload
  // }
  
  return {
    ...otnerState,
    list:[{
      ...oteherProps,
      productList:[...productListArray]
    }]
  }
}
actions[companyCardRemoveTag] = (state, action) => {
  return {
    ...state,
    list: [{
      ...state.list[0],
      ...action.payload
    }]
  }
}
actions[companyCardImgList] = (state, action) => {
  return {
    ...state,
    list: [{
      ...state.list[0],
      ...action.payload
    }]
  }
}
actions[companyCardImgListRemove] = (state, action) => {
  return {
    ...state,
    list: [{
      ...state.list[0],
      ...action.payload
    }]
  }
}
actions[addProdect] = (state, action) => {
  return {
    ...state,
    list: [{
      ...state.list[0],
      ...action.payload
    }]
  }
}
actions[removeProdect] = (state, action) => {
  return {
    ...state,
    list: [{
      ...state.list[0]
    }]
  }
}

actions[companyCardAddTag] = (state, action) => {
  console.log(state,action.payload,"--companyCardAddTag--action.payload")
  return {
    ...state,
    list: [{
      ...state.list[0],
      ...action.payload
    }]
    
  }
}

actions[roleDetailSave] = (state, action) => {
  return {
    ...state,
    roleDetail: action.payload
  }
}

actions[roleDetailRemove] = (state, action) => {
  return {
    ...state,
    roleDetail: {}
  }
}
actions[remindSave] = (state, action) => {
  return {
    ...state,
    item: {
      ...action.payload
    }
  }
}


actions[actionLogListSave] = (state, action) => {
  console.log(action, 'actionactionactionactionactionaction')
  let {
    list,
    item,
    page,
    pageSize,
    totalRecord
  } = action.payload
  return {
    ...state,
    page: {
      current: page,
      pageSize,
      total: totalRecord
    }
  }
}

actions[actionLogParamsSave] = (state, action) => {
  console.log(action, 'actionLogParamsSaveactionLogParamsSaveactionLogParamsSave')
  // let { list, item, page, pageSize, totalRecord } = action.payload
  return {
    ...state,
    params: {
      ...action.payload
    }
    // page: {
    //   current: page,
    //   pageSize,
    //   total: totalRecord
    // }
  }
}

let changeFetchStatus = (state, action) => {
  let {
    spins
  } = state;
  spins[action.payload.label] = action.payload.spin
  return Object.assign({}, state, {
    // status: state.status.set(payload.label,payload.code),
    spins: spins
  })
}

actions[CONSTANTS.FETCH_REQUEST] = changeFetchStatus
actions[CONSTANTS.FETCH_SUCCESS] = changeFetchStatus
actions[CONSTANTS.FETCH_FAILURE] = changeFetchStatus
const reducer = handleActions(actions, initialState)
export {
  reducer
}
export {
  initialState,
  CONSTANTS
}

export default reduce;