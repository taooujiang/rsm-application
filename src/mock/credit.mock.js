import '../utils/MockGlobal'
import fetchMock from 'fetch-mock'
import mockjs,{Random} from 'mockjs'

var hourTimestamp=60*60*100;
/*let result=mockjs.mock({
  'list|10': [{
      'refrshDate': () => {
        return Random.datetime('yyyy-MM-dd');
      },
      'status': () => {
        return Math.random()*10 > 5 ? "招聘中":"别来了";
      },
      'jobSource': () => {
        return Random.string('lower',5);
      },
      'jobName': () => {
        return Random.name();
      },
      'jobNum': () => {
        return Random.natural( 1, 10 )
      },
    }],
    page: {
      current: 2,
      pageSize: 10,
      total:1000
    },
})
*/
let result=mockjs.mock({
    'list|10':  [{
        'id|+1': 1,
        'refrshDate': () => {
            return Random.datetime('yyyy-MM-dd');
        },
        'status': () => {
            return Math.random()*10 > 5 ? "招聘中":"别来了";
        },
        'jobSource': () => {
            return Random.string('lower',5);
        },
        'jobName': () => {
            return Random.name();
        },
        'jobNum': () => {
            return Random.natural( 1, 10 )
        },
    }],
    page: {
        current: 1,
        pageSize: 20,
        total:1000
    },
})
fetchMock.mock(`${APP_SERVER}/credit`,result);




// fetchMock.post(`${APP_SERVER}/passport/login`, {
//   msg:"身份认证失败",
//   data:{}
// });
