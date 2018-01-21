/**
 * @Date:   2017-09-07T08:39:52+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-17T14:50:45+08:00
 */

import FetchAPI from 'app-utils/FetchAPI'
import stringify from 'qs'
export default class FollowAPI extends FetchAPI {
  constructor(props) {
    super(props);
  }
  fetchItem(params) {
    return this.fetchGet(`${APP_SERVER}/member/1`, {
      body: JSON.stringify(params)
    }).catch(this.fetchCatch)
  }

  fetchList(params) {
    return this.fetchGet(`${APP_SERVER}/member/list`, {body: JSON.stringify(params)}).catch(this.fetchCatch)
  }

  fetchSave(obj) {
    return this.fetchPost(`${APP_SERVER}/member/`, {body: JSON.stringify(obj)}).catch(this.fetchCatch)
  }

  fetchRemove(id) {
    return this.fetchDelete(`${APP_SERVER}/member/1`, {
      body: JSON.stringify({"id": id})
    }).catch(this.fetchCatch)
  }
}
