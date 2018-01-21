/**
 * @Date:   2017-09-07T08:39:52+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-11T14:23:35+08:00
 */

import FetchAPI from 'app-utils/FetchAPI'

export default class API extends FetchAPI {
  constructor(props) {
    super(props);
  }

  fetchList(params) {
    return this.fetchGet(`${APP_SERVER}/resume/`, {body: JSON.stringify(params)}).catch(this.fetchCatch)
  }

  fetchSync(params) {
    return this.fetchGet(`${APP_SERVER}/resume/sync`, {body: JSON.stringify(params)}).catch(this.fetchCatch)
  }
  /*
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
