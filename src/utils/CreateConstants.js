
export default function createConstants(name,constants){
  let CONSTANTS={}
  if(typeof(constants)=='string'){
    constants=constants.split(",")
  }
  constants.map((cst)=>{
    CONSTANTS[cst.toLocaleUpperCase()]=[name,cst].join("_")
  })
  return CONSTANTS
}

export function createTypes(CONSTANTS){
  function newItem() {
    return {type: CONSTANTS.NEW_ITEM ,payload:{}}
  }

  function getItem(key) {
    return {type: CONSTANTS.GET_ITEM, payload:{key}}
  }

  function removeItem(key) {
    return {type: CONSTANTS.REMOVE_ITEM, payload:{key}}
  }

  function saveItem(item) {
    return {type: CONSTANTS.SAVE_ITEM, payload:{item}}
  }

  function saveList(list, total) {
    return {type: CONSTANTS.SAVE_LIST,payload:{ list, total}}
  }

  function listItem(idx, offset) {
    return {type: CONSTANTS.LIST_ITEM, payload:{ idx, offset}}
  }

  function fetchFailure(label,status) {
    //message.error(msg)
    return {type: CONSTANTS.FETCH_FAILURE, payload:{label,spin:false,status}}
  }

  function fetchRequest(label) {
    return {type: CONSTANTS.FETCH_REQUEST,payload:{label,spin:true,status}}
  }

  function fetchSuccess(label) {
  //  message.success("数据刷新成功")
    return {type: CONSTANTS.FETCH_SUCCESS,payload:{label,spin:false,status}}
  }
  return {
    newItem,
    getItem,
    removeItem,
    saveItem,
    saveList,
    listItem,
    fetchFailure,
    fetchRequest,
    fetchSuccess
  }
}


export function createActionRoute(){

   function listRoute() {
    let pathname = router.getCurrentLocation().pathname
    return dispatch => dispatch(routerActions.replace(`${pathname}`))
  }
   function addRoute(router) {
    let pathname = router.getCurrentLocation().pathname
    let hash=router.createLocation(`${pathname}add`)
    return dispatch => dispatch(routerActions.push(hash))
  }

   function backRoute() {
    return dispatch => dispatch(routerActions.goBack())
  }

   function editRoute(router,id) {
    let pathname = router.getCurrentLocation().pathname
    let hash=router.createLocation(`${pathname}edit/${id}`)
    return dispatch => dispatch(routerActions.push(hash))
  }

  function detailRoute(router,id) {
   let pathname = router.getCurrentLocation().pathname
   let hash=router.createLocation(`${pathname}/${id}`)
   return dispatch => dispatch(routerActions.push(hash))
  }

  return {
    listRoute,addRoute,editRoute,detailRoute,backRoute
  }
}

export function dispatchHandler(name,payload){
    return {
      type:name,
      payload
    }
}
