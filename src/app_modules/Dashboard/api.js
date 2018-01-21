/**
 * @Date:   2017-09-07T08:39:52+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-12T10:57:36+08:00
 */

import FetchAPI from 'app-utils/FetchAPI'

export default class FollowAPI extends FetchAPI {
  constructor(props) {
    super(props);
  }

  fetchNotices(id) {
    return this.fetchGet(`${APP_SERVER}/dashboard/notices`, {
    }).catch(this.fetchCatch)
  }

  fetchLists(params) {
    return this.fetchGet(`${APP_SERVER}/dashboard/list`, {body: JSON.stringify(params)}).catch(this.fetchCatch)
  }

  fetchTodo(id) {
    return this.fetchDelete(`${APP_SERVER}/dashboard/todo`, {
      body: JSON.stringify(params)
    }).catch(this.fetchCatch)
  }
}
