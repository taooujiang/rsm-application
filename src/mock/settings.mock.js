import '../utils/MockGlobal'
import fetchMock from 'fetch-mock'
import mockjs,{Random} from 'mockjs'

var hourTimestamp=60*60*100;
let result=mockjs.mock({
  'item': {
    isMsg000:1,
    isMsg00:1,
    isMsg01:0,
    isMsg02:1,
    isMsg03:0,
    isMsg04:1,
    isMsg05:0,
    isMsg06:1,
    aa:2,
    ab:2,
    ac:1,
    ad:1,
    ae:1,
    af:1,
  }
})

fetchMock.mock(`${APP_SERVER}/settings/remind`,result);


let resultFeild=mockjs.mock({
  'list|10': [{
      'id|+1': 1,
      'fieldName': () => {
        return Random.name();
      },
      'fieldType': () => {
        return Random.name();
      },
      'fieldEnable': () => {
        return Random.ctitle(11, 11);
      },
      'createTime': () => {
        return Random.datetime('yyyy-MM-dd');
      },
    }],
    page: {
      current: 1,
      pageSize: 20,
      total:20
    },
})

fetchMock.mock(`${APP_SERVER}/settings/fields`,resultFeild);



// fetchMock.post(`${APP_SERVER}/passport/login`, {
//   msg:"身份认证失败",
//   data:{}
// });
