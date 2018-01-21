/**
 * @Date:   2017-12-27T09:19:29+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2017-12-27T13:37:06+08:00
 * @Descritpion 登陆请求接口
 */

import FetchAPI from 'app-utils/FetchAPI'

export default class API extends FetchAPI {
  constructor(props) {
    super(props);
  }
  fetchLogin(params) {
    return this.fetchPost(`${APP_SERVER}/passport/login`, {body: JSON.stringify(params)}).catch(this.fetchCatch)
  }
  fetchLogout(params) {
    return this.fetchPost(`${APP_SERVER}/passport/logout`, {body: JSON.stringify(params)}).catch(this.fetchCatch)
  }
}
