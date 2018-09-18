import { handleActions } from 'redux-actions'
// import { hasResponseError } from 'utils'
import DictUtils from 'app-utils/DictUtils'
import ClientAPI,{emitter} from 'app-utils/externalUtils'

global['showMsgCenterEx']=new ClientAPI().showMsgCenterEx
global['PythonToJs']=new ClientAPI().PythonToJs
global['JsToPython']=new ClientAPI().JsToPython
global['invokeMethod']=new ClientAPI().invokeMethod
global['openPage']=new ClientAPI().openPageLink
global['openSearchPage']=new ClientAPI().openSearchPage
global['toResumeList']=new ClientAPI().toResumeList
global['openChannelLink']=new ClientAPI().openChannelLink

var mockChannels=new Map()

//console.log(DictUtils.getDictByType("channel"))
// mockChannels.set(1,{id:1,isLogin:false,point:0})
// mockChannels.set(2,{id:2,isLogin:false,point:0})
// mockChannels.set(3,{id:3,isLogin:false,point:0})
// mockChannels.set(4,{id:4,isLogin:false,point:0})
// mockChannels.set(5,{id:5,isLogin:false,point:0})
//
// mockChannels.set(6,{id:6,isLogin:false,point:0})
// mockChannels.set(7,{id:7,isLogin:false,point:0})
// mockChannels.set(8,{id:8,isLogin:false,point:0})
// mockChannels.set(9,{id:9,isLogin:false,point:0})
// mockChannels.set(10,{id:10,isLogin:false,point:0})
// mockChannels.set(11,{id:11,isLogin:false,point:0})
// mockChannels.set(12,{id:12,isLogin:false,point:0})
// mockChannels.set(13,{id:13,isLogin:false,point:0})
// mockChannels.set(14,{id:14,isLogin:false,point:0})
// mockChannels.set(15,{id:15,isLogin:false,point:0})
//
// mockChannels.set(16,{id:16,isLogin:false,point:0})
// mockChannels.set(17,{id:17,isLogin:false,point:0})
// mockChannels.set(18,{id:18,isLogin:false,point:0})
// mockChannels.set(19,{id:19,isLogin:false,point:0})
// mockChannels.set(20,{id:20,isLogin:false,point:0})

let resourceList = []
let user = {}
if(process.env.NODE_ENV === 'development'){
	resourceList = [
		{
		note:'resume'
	},{
		note:'deleteResume'
	},{
		note:'resumeToCred'
	},{
		note:'job'
	},{
		note:'deleteJob'
	},{
		note:'releaseJob'
	},{
		note:'importJob'
	},{
		note:'interview'
	},{
		note:'elite'
	},{
		note:'eliteToCred'
	},{
		note:'credToElite'
	},{
		note:'member'
	},{
		note:'importMembers'
	},{
		note:'exportMembers',
	},{
		note:'deleteMember',
	},{
		note:'editMember',
	},{
		note:'soundlist',
	},{
		note:'report',
	},{
		note:'settings',
	},{
		note:'company',
	},{
		note:'dept',
	},{
		note:'role',
	},{
		note:'user',
	},{
		note:'receiveMailBox',
	},{
		note:'support',
	},{
		note:'remind',
	},{
		note:'template',
	},{
		note:'update',
	},{
		note:'register',
	},{
		note:'filingReasons',
	},{
		note:'adverseEvents',
	},{
		note:'refuseReasons',
	},{
		note:'labels',
	},{
		note:'fields',
	}
]
	user = {
    "orgId":"5b0af4112b5e47b1b465c5badbc189a5",
    "id":"c501cb21ef5140578f4196196029d7c4",
    "serverDay":0,
    "name":"宋洁洁",
    "pageSize":10,
    "roleType":1,
    "account":"18900000022",
    "authType":2,
    "isPrincipal":0
  }
}else if(parent&&parent.resourceList&&parent.userAuth){
	resourceList = parent.resourceList
	user = parent.userAuth
}


const initialState = {
  dicts:new Map(),
  resourceList:resourceList,
  account:window.account,
  channels:new Map(),
  auth:{
    // authID: 'sdfs342342xxvef3',
    // loginTime: '',
    // expiresTime: '',
    // authRole:'admin'
  },
  user:user,
  global:{

  }
}
 function registerModulesDomain(resourceList){
   resourceList.map((it)=>{
     //console.log(it)
     global[['app','server',it.note].join("_").toUpperCase()]=it.domain
   })
 }

const reducer = handleActions({
  'saveChannelPoint'(state,actions){
    const payload = actions.payload
    payload.channels.map((it)=>{
			let numId = Number(it.channelId)
      var chn=state.channels.get(numId)
      state.channels.set(numId,Object.assign({},chn,it))
    })
		console.log("saveChannelPoint",state.channels)
    return { ...state}
  },
	'initChannel'(state,actions){
    const payload = actions.payload
		payload.map((it)=>{
			it.id=it.keyValue
			let numId = Number(it.id)
			var chn=state.channels.get(numId)
			state.channels.set(numId,Object.assign({},chn,it))
    })
		console.log("initChannel",state.channels)
		return { ...state}
	},
  'saveChannel'(state,actions){
    const payload = actions.payload
    payload.channels.map((it)=>{
			let numId = Number(it.id)
      var chn=state.channels.get(numId)
			state.channels.set(numId,Object.assign({},chn,it))
    })
		console.log("saveChannel",state.channels)
    return { ...state}
  },
  'save Dicts'(state,action){
    const payload = action.payload
    for(var it in payload.list){
      state.dicts.set(it,payload.list[it])
    }
    payload.list['channel'].map((it)=> {
      if(it.keyValue==1){
          it.keyURl="https://passport.zhaopin.com/org/login"
      }else if(it.keyValue==2){
          it.keyURl="https://ehire.51job.com/Jobs/JobEdit.aspx?Mark=New"
      }else if(it.keyValue==3){
          it.keyURl="https://employer.58.com/postposition"
      }else if(it.keyValue==4){
          it.keyURl="https://passport.ganji.com/login.php?next=/"
      }else if(it.keyValue==5){
          it.keyURl="http://www.hzrc.com/ww/b/a/wwba_login.html"
      }else if(it.keyValue==6){
          it.keyURl="http://passport.chinahr.com/qy/buser/login?backUrl=http%3A%2F%2Fqy.chinahr.com%2Fcenter%2Findex"
      }else if(it.keyValue==7){
          it.keyURl="https://www.dajie.com/account/recruit/quick/reg?formType=cg#cg"
      }else if(it.keyValue==8){
          it.keyURl="https://login.zhipin.com/?ka=header-login"
      }else if(it.keyValue==10){
          it.keyURl="https://passport.liepin.com/e/account#sfrom=click-pc_homepage-front_navigation-ecomphr_new"
      }else if(it.keyValue==13){
          it.keyURl="https://www.lagou.com/lp/html/common.html?utm_source=m_cf_cpt_baidu_pc"
      }else if(it.keyValue==16){
          it.keyURl="https://hr.shixiseng.com/user/login?next=https%3A%2F%2Fhr.shixiseng.com%2Fcompany%2Fsignin%23%2F"
      }
      return it
    })

    return { ...state}
  },
  'saveMenuList'(state,action){
    const payload = action.payload
    state.resourceList=payload.list
    registerModulesDomain(state.resourceList)
    // global["APP_SERVER",]
    return { ...state}
  }
}, initialState)

export { reducer as default }
