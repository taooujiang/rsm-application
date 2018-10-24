import API from './api'
import store from '../store'
import { createAction } from 'redux-actions'
import ClientAPI,{emitter} from 'app-utils/externalUtils'

export const saveDicts = createAction("save Dicts")
export const saveMenuList= createAction("saveMenuList")
export const saveChannel = createAction("saveChannel")
export const saveChannelPoint = createAction("saveChannelPoint")
export const channelSync = createAction("channelSync")

export const initChannel = createAction("initChannel")

emitter.on("isLogin",function(item){
  store.dispatch(saveChannel(item))
})

emitter.on("job_channel_pointer",function(item){
  store.dispatch(saveChannelPoint(item))
})

emitter.on("batch_job_sync",function(item){
  store.dispatch(channelSync(item))
})


export function fetchInitConfig(){
  return (dispatch, getState) => {
    //  dispatch(fetchRequest('noticeSpin'))
    return Promise.all([new API().fetchConst()]).then(([jsonConst]) => {
     //  dispatch(fetchSuccess('noticeSpin'))
    //  console.log(jsonConst,jsonMenu)

      // dispatch(saveMenuList({list:jsonMenu.resourceList}))

      dispatch(saveDicts({list:jsonConst}))
      dispatch(initChannel(jsonConst.channel))
      // console.log(jsonConst.channel.map(c=>c.id))
      new ClientAPI().JsToPython({
        type:'isLogin',
        channels:jsonConst.channel.map(c=>c.id)
      })
      // console.log("dict",DictUtils.getDictByType("channel"))
    }).catch(ex => {})
    //  return dispatch(fetchFailure('noticeSpin',ex))
  }
}
