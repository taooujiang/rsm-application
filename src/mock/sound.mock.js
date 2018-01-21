import '../utils/MockGlobal'
import fetchMock from 'fetch-mock'
import mockjs,{Random} from 'mockjs'

var hourTimestamp=60*60*100;
let result=mockjs.mock({
  'list|10': [{
      'custFollowId|+1': 1,
      'nextActionDate': () => {
        return Random.name();
      },
      'ownerAcc': () => {
        return Random.cname();
      },
      'optionName': () => {
        return Random.name();
      },
      'groupName': () => {
        return Random.name();
      },
      'nextActionDate': () => {
        return Random.datetime('yyyy-MM-dd');
      },
      'showMinActionDate': () => {
        return Random.datetime('yyyy-MM-dd');
      },
      'showLastActionDate': () => {
        return Random.datetime('yyyy-MM-dd');
      },
    }],
    page: {
      current: 2,
      pageSize: 10,
      total:1000
    },

})

fetchMock.mock(`${APP_SERVER}/callrecord/soundListJson`,result);




// fetchMock.post(`${APP_SERVER}/passport/login`, {
//   msg:"身份认证失败",
//   data:{}
// });
