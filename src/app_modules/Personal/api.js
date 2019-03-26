/**
 * Created by Administrator on 2018/3/12.
 */


import FetchAPI from 'app-utils/FetchAPI'

export default class API extends FetchAPI {
    constructor(props) {
        super(props);
    }
    fetchList(params) {
        return this.fetchPostList(`${APP_SERVER}/accountOperate/bountyRecord `, {body: params})
    }
    fetchWithdrawals(params){
        return this.fetchPost(`${APP_SERVER}/accountOperate/withdraw `, {body: params})
    }
    fetchCurrAcc(params){
        return this.fetchPost(`${APP_SERVER}/accountOperate/getPresentAccount`, {
            body: params
        })
    }
    fetchRecordList(params){
        return this.fetchPostList(`${APP_SERVER}/accountOperate/bountyWithdrawRecord `, {body: params})
    }
    fetchAuthent(params){
        return this.fetchPost(`${APP_SERVER}/accountOperate/realName`, {
            body: params
        })
    }
    fetchChange(params){
        return this.fetchPost(`${APP_SERVER}/accountOperate/editPassword`, {
            body: params
        })
    }
    fetchAccount(params){
        return this.fetchPost(`${APP_SERVER}/accountOperate/accountInfo`, {
            body: params
        })
    }
    fetchPromoCode(params){
        return this.fetchPost(`${APP_SERVER}/accountOperate/getPromoCode`, {
            body: params
        })
    }
    /*修改认证时获取验证码
    *params
    * {account:15358658996}

    */
    fetchEditGetCode(params){
      return this.fetchPost(`${APP_SERVER}/accountOperate/getUpdateRealNameCode`, {
          body: params
      })
    }
    /*修改认证
    *params
    * {"mobile":"18871037157","acctName":"胡并","realNameCard":"130204200001016779","code":"4581"}

    */
    fetchEditAuth(params){
      return this.fetchPost(`${APP_SERVER}/accountOperate/updateRealName`, {
          body: params
      })
    }
}
