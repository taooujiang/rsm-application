import React, { Component } from 'react'
import {
  Row,
  Col,
  Modal,
  Button,
  Radio,
  Input,
  Form,
  DatePicker,
  Layout,
  Spin,
  Select,
  TreeSelect
} from 'antd'
import {FormPage} from 'app/components/Page'
import BaseForm,{FormItem,customRules} from 'app/components/BaseForm'
import WrapperComponent from 'app/decorators/WrapperComponent'
import ErrorBoundary from 'app/components/ErrorBoundary'
import ModalView from 'app/components/Modal.view'

@WrapperComponent(ErrorBoundary)
@WrapperComponent(ModalView)
export default class MemberLeaveForm extends FormPage{
  handleSubmit(value){
    let {actions,router} = this.props
    actions.dissmissMemberAction(value)
    actions.backRoute(router)
  }
  render() {
    // console.log(this.props)
    let {params:{id},location:{state:{item}}} = this.props
    return (
      <BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} >
        <FormItem>
          <Input type="hidden" name="id" defaultValue={id}/>
        </FormItem>
        <FormItem>
          <DatePicker name="dimissionTime" label="离职时间" rules={[{required: true, message: "离职时间不可为空"},{validator:customRules.required}]}/>
        </FormItem>
        <p className="member-leave-tips">确定员工{item.name}离职？</p>
      </BaseForm>
    )
  }
}
