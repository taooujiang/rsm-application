
import React, {Component, PropTypes} from 'react'
import {IframePage} from 'components/Page'

export default class IframeView extends Component {

  render() {
    let {children} = this.props
    return (
        <IframePage src="http://www.baidu.com" name="baidu"></IframePage>
    )
  }
}
