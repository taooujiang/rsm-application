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
    // let {actions,router,location,params:{type}} = this.props;
    // actions.joinEliteAction(values).then(()=>{
    //   actions.backRouteReload(router,location)
    // })
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
    let {location:{state:{ids,libType}}} = this.props
    return (
      <BaseForm onSubmit={this.handleSubmit.bind(this)} ref={this.saveFormRef}>
          <FormItem>
            <TextArea name="filingRemark" label="offer不通过原因" placeholder="请输入原因"  rules={[{max:50,message:"原因描述限制50个字"}]} />
          </FormItem>
      </BaseForm>
    )
  }
}
