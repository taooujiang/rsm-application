/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-03-14T15:51:16+08:00
 */

import React, {Component, PropTypes} from 'react'
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
  Tree,
  Select,
  TreeSelect
} from 'antd'
import moment from 'moment'
import {FormPage} from 'app/components/Page'
import BaseForm,{FormItem} from 'app/components/BaseForm'
import  FetchAPI from 'app/utils/FetchAPI'
const Option = Select.Option
const {TextArea} = Input
const RadioGroup = Radio.Group;
const TreeNode=Tree.TreeNode


export default class OfferNopassForm extends FormPage{


  handleSubmit(values){
    let {actions,router,location} = this.props;
    actions.offerApprovalAction(values).then(()=>{
      actions.backRouteReload(router,location)
    })
  }

  render() {
    const {
      form,
      handleSubmit,
      updateFieldValue,
      children,
      saveFormRef,
      formFullItemLayout,
    } = this.props
    let id = this.props.location.state.item.offerApprovalDto.id
    return (
      <BaseForm onSubmit={this.handleSubmit.bind(this)} ref={this.saveFormRef}>
        <FormItem>
            <Input type="hidden" name="id" defaultValue={id}/>
        </FormItem>
        <FormItem>
            <Input type="hidden" name="status" defaultValue={2}/>
        </FormItem>
          <FormItem>
            <TextArea name="approvalRemark" label="offer不通过原因" placeholder="请输入原因"  rules={[{required: true, message: "原因不可为空"},{validator:customRules.required},{max:200,message:"原因描述限制200个字"}]} />
          </FormItem>
      </BaseForm>
    )
  }
}
