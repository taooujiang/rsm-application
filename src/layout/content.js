/**
* @Author: jax <jaxchow>
* @Date:   2016-02-24T09:41:56+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-15T13:47:33+08:00
* @Description: 功能区域布局
*/

import React from 'react'

export default class ContentSide extends React.Component {
  render() {
    return (
      <div className="content" {...this.props} style={{
        flex:'1',
        overflow:'hidden'
      }}>
      </div>
    )
  }
}
