
import store from '../store'

function getAuthList(){
   return store.getState().appReducer.resourceList
}
let hasPermission,permissionStyle
/*样式控制权限*/
if (process.env.NODE_ENV === 'development') {
  hasPermission=function(modulesName){
    // console.log(modulesName)
    // return getAuthList().filter((rl)=>{
    //   return modulesName.indexOf(rl.note)>=0
    // }).length>0

    /**
     * blame zhuwl
     * 2019-01-07
     */
    return getAuthList().some(el=>el.note===modulesName)
  }
  permissionStyle = function(modulesName){

    return getAuthList().filter((rl)=>{
      return modulesName == rl.note
    }).length>0 ? {display:"initial"} : {display:"none"}
  }
}else{
  hasPermission=function(modulesName){
    // console.log(modulesName)
    // return getAuthList().filter((rl)=>{
    //   //不可靠，modulesName='memberxxxxx',authList中有'member'权限 
    //   return modulesName.indexOf(rl.note)>=0
    // }).length>0

    /**
     * blame zhuwl
     * 2019-01-07
     */
    return getAuthList().some(el=>el.note===modulesName)
  }
  permissionStyle = function(modulesName){
    return getAuthList().filter((rl)=>{
      return modulesName == rl.note
    }).length>0 ? {display:"initial"} : {display:"none"}
  }
}





var  ConfigUtils={
  getAuthList,
  hasPermission,
  permissionStyle
}

export {
  getAuthList,
  hasPermission,
  permissionStyle
}
export default ConfigUtils
