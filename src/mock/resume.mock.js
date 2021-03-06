import '../utils/MockGlobal'
import fetchMock from 'fetch-mock'
import mockjs,{Random} from 'mockjs'

var hourTimestamp=60*60*100;
let result=mockjs.mock({
  'list|10': [{
      'jobId|+1': 1,
      'jobName': () => {
        return Random.name();
      },
      'jobNum|1-20':20,
      'jobSource': () => {
        return Random.region();
      },
      'status|1-5':5,
      'refrshDate': () => {
        return Random.datetime('yyyy-MM-dd HH:mm');
      },
      'jobTotal|1-200': 200
    }],
    page: {
      current: 1,
      pageSize: 20,
      total:1000
    },
})

fetchMock.mock(`${APP_SERVER}/resume/`,result);




// fetchMock.post(`${APP_SERVER}/passport/login`, {
//   msg:"身份认证失败",
//   data:{}
// });
