/**
 * @Date:   2017-09-07T08:39:52+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-17T16:58:00+08:00
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
}
