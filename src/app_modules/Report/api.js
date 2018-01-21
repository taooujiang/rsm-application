/**
 * @Date:   2017-09-07T08:39:52+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-17T17:05:57+08:00
 */

import FetchAPI from 'app-utils/FetchAPI'

export default class API extends FetchAPI {
  constructor(props) {
    super(props);
  }

  fetchList(params) {
    return this.fetchGet(`${APP_SERVER}/report/fields`, {body: JSON.stringify(params)}).catch(this.fetchCatch)
  }

  fetchRemind(params) {
    return this.fetchGet(`${APP_SERVER}/report/remind`,{
      body: JSON.stringify(params)
    }).catch(this.fetchCatch)
  }

  saveRemind(params) {
    return this.fetchPost(`${APP_SERVER}/report/remind`,{
      body: JSON.stringify(params)
    }).catch(this.fetchCatch)
  }

  /*
  fetchMenu(params) {
    return this.fetchGet(`${APP_SERVER}/cust/custFollow/List/custFollowMenuJson`, {body: JSON.stringify(params)}).catch(this.fetchCatch)
  }
  fetchItem(id) {
    return this.fetchGet(`${APP_SERVER}/follow/1`, {
      body: JSON.stringify({"id": id})
    }).catch(this.fetchCatch)
  }


  fetchSave(obj) {
    return this.fetchPost(`${APP_SERVER}/follow/`, {body: JSON.stringify(obj)}).catch(this.fetchCatch)
  }

  fetchRemove(id) {
    return this.fetchDelete(`${APP_SERVER}/follow/1`, {
      body: JSON.stringify({"id": id})
    }).catch(this.fetchCatch)
  }
  */
}
