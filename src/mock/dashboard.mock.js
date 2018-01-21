import '../utils/MockGlobal'
import fetchMock from 'fetch-mock'
import mockjs,{Random} from 'mockjs'

var hourTimestamp=60*60*100;
let result=mockjs.mock({
  'list|8': [{
      'id|+1': 1,
      'name': () => {
        return Random.cname();
      },
      'icons': () => {
        return Random.image('125x125');
      },
      'total|1-200': 200
    }],
    page: {
      current: 1,
      pageSize: 20,
      total:1000
    },
})

fetchMock.mock(`${APP_SERVER}/dashboard/notices`,result);




// fetchMock.post(`${APP_SERVER}/passport/login`, {
//   msg:"身份认证失败",
//   data:{}
// });
