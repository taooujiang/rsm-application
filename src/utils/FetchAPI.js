/**
 * @Date:   2017-09-07T09:45:33+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-16T13:05:09+08:00
 */
import {stringify} from 'qs'

export default class FetchAPI {
  constructor(props) {
    this.defaults = {
      credentials: 'include'
    }
  }

  fetch(url, options) {
    console.info(url)
    return fetch(url, Object.assign(this.defaults, options)).then(res => {
      if (res.ok == true) {
        return res
      } else {
        //console.log(res.body)
        throw res
      }
      return res
    }).then(res => res.json())
  }

  fetchPatch(url, options) {
    return this.fetch(url, Object.assign({
      method: 'PATCH'
    }, options))
  }
  fetchGet(url, options) {
    if (options.body) {
      url = url + "?" + stringify(options.body)
      delete options.body
    }
    return this.fetch(url, Object.assign({
      method: 'GET'
    }, options))
  }
  fetchPut(url, options) {
    return this.fetch(url, Object.assign({
      method: 'PUT'
    }, options))
  }
  fetchPost(url, options) {
    return this.fetch(url, Object.assign({
      method: 'POST'
    }, options))
  }
  fetchDelete(url, options) {
    return this.fetch(url, Object.assign({
      method: 'DELETE'
    }, options))
  }
  fetchCatch(err) {
    console.warn(`error:${err}`)
    console.warn(`fetchUrl:${err.url}`)
    console.warn(`fetchCatch:${JSON.stringify(err)}`)
  }
}
