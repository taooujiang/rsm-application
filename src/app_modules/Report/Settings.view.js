import React, {Component, PropTypes} from 'react'
//import {reduxForm,Field} from 'redux-form'
import {Button, Input, Table, Form, DatePicker,Card,Switch,Row,Select,Checkbox } from 'antd'

import ModalView from 'components/Modal.view'
import SwitchCard from 'components/SwitchCard'
import WrapperComponent from '../../decorators/WrapperComponent'
import BaseForm,{FormItem} from 'components/BaseForm'
import {FormPage} from 'components/Page'
// const FormCreate = Form.create
// const FormItem = Form.Item

class SettingsFormView extends Component {
  componentWillMount() {
  }
  render() {
    let {params, reduce} = this.props;
    //	let model=preduce.list[0]
    let item = {}
    return (
      <div className="containerSettings" style={{height:'100%',overflow:'auto'}}>
      1112
      </div>
    )
  }
}

export default SettingsFormView
