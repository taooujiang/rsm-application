import '../utils/MockGlobal'
import fetchMock from 'fetch-mock'
import mockjs,{Random} from 'mockjs'

var hourTimestamp=60*60*100;
let result=mockjs.mock({
  'list|8': [{
      'id': ()=>Random.integer(1,1000),
      'label': () => {
        return Random.cname();
      },
      'value': () => Random.integer(1,1000)
  }],
})

fetchMock.mock(`${APP_SERVER}/constants/select`,result);
fetchMock.mock(`${APP_SERVER}/constants/select2`,result);




// fetchMock.post(`${APP_SERVER}/passport/login`, {
//   msg:"身份认证失败",
//   data:{}
// });
