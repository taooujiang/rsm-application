import React, {Component, PropTypes} from 'react'
import {
  Button,
  Input,
  Table,
  Dropdown,
  Icon,
} from 'antd'
import moment from 'moment';


export default class JobDetailView extends Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let {actions,router} = this.props;
  }
  render() {
    let {children} = this.props
    return (
      <div>
          jobDetail
      </div>
    )
  }
}
