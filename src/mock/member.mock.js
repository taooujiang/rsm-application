import '../utils/MockGlobal'
import fetchMock from 'fetch-mock'
import mockjs,{Random} from 'mockjs'

var hourTimestamp=60*60*100;
let listResult=mockjs.mock({
  'list|10': [{
      'id|+1': 1,
      'userAccount': () => {
        return Random.name();
      },
      'userName': () => {
        return Random.cname();
      },
      'roleName': () => {
        return Random.name();
      },
      '通信号码': () => {
        return Random.ctitle(11, 11);
      },
      'groupName': () => {
        return Random.word();
      },
      'shareGroupNames': () => {
        return Random.ctitle(3, 5);
      },
      'serveTime': () => {
        return Random.datetime('yyyy-MM-dd');
      },
      'mobile': () => {
        return Random.ctitle(11, 11);
      },
      'post': () => {
        return Random.ctitle(3, 5);
      },
    }],
    page: {
      current: 1,
      pageSize: 20,
      total:1000
    },
})

let resultMenu=mockjs.mock({
   "data|10":[{
      "id":()=>{
        return Random.guid()
      },
      "name":()=>{
        return Random.cname()
      },
      "children|5":[{
        "id":()=>{
          return Random.guid()
        },
        "name":()=>{
          return Random.cname()
        },
        "isLeaf":()=>{
          return Random.boolean()
        }
      }]
   }]
})

let saveResult= {
  item:{
    id:"1230",
    username:'jaxcchow',
    'userAccount': "jaxchow",
    'userName': "jax",
    'roleName': "admin",
    '通信号码':"1358468465",
    'groupName':"ABD",
    'shareGroupNames':"12",
    'serveTime':"13216546",
    'mobile': "123456546",
    'post': "1335135",
  }
}


fetchMock.mock(`${APP_SERVER}/member/list`,listResult)
fetchMock.post(`${APP_SERVER}/member/`,saveResult)
fetchMock.mock(`${APP_SERVER}/member/1?`,saveResult)





// fetchMock.post(`${APP_SERVER}/passport/login`, {
//   msg:"身份认证失败",
//   data:{}
// });
