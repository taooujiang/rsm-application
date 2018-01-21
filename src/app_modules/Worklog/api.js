/**
 * @Date:   2017-09-07T08:39:52+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2017-09-11T17:45:27+08:00
 */

import FetchAPI from 'app-utils/FetchAPI'

export default class API extends FetchAPI {
  constructor(props) {
    super(props);
  }

  fetchItem(id) {
    return this.fetchGet(`${APP_SERVER}/worklog/myLogJson`, {
      body: JSON.stringify({"logDateTime": id})
    }).catch(this.fetchCatch)
  }

  fetchList(params) {
    return this.fetchGet(`${APP_SERVER}/worklog/myLogJson`, {body: JSON.stringify(params)}).catch(this.fetchCatch)
  }

  fetchSave(obj) {
    return this.fetchPost(`${APP_SERVER}/worklog/insert`, {body: JSON.stringify(obj)}).catch(this.fetchCatch)
  }

  fetchRemove(id) {
    return this.fetchDelete(`${APP_SERVER}/worklog/del`, {
      body: JSON.stringify({"id": id})
    }).catch(this.fetchCatch)
  }
  fetchShareLog(params){
    return this.fetchGet(`${APP_SERVER}/worklog/share/shareLogJson`,{body: JSON.stringify(params)}).catch(this.fetchCatch)
  }
  fetchCommentLog(params){
    return this.fetchGet(`${APP_SERVER}/worklog/share/insertCommont`,{body: JSON.stringify(params)}).catch(this.fetchCatch)
  }
  fetchSharefavour(params){
    return this.fetchGet(`${APP_SERVER}/worklog/favour`,{body: JSON.stringify(params)}).catch(this.fetchCatch)
  }
}
