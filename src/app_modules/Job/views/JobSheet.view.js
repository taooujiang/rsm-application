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
  TreeSelect,
  Tree,
  Select
} from 'antd'
import moment from 'moment'
import {FormPage} from 'app/components/Page'
import  FetchAPI from 'app/utils/FetchAPI'
import DictUtils from 'app/utils/DictUtils'
import {TreeSelectPicker} from 'app/components/TreeView'
import BaseForm,{FormItem} from 'app/components/BaseForm'

const Option = Select.Option
const RadioGroup = Radio.Group;
const TreeNode=Tree.TreeNode


export default class ScoreSheetForm extends FormPage{


  renderSelectOption(data,idx){
    return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  renderTemOption(data,idx){
    console.log(data)
    // return (<Select.Option value={data.account} key={idx}>{data.name}</Select.Option>)
  }


  handleSubmit(values){
    let {actions,router,location} = this.props;
  //  console.log(values)
    actions.resetAction(values).then(()=>{
      setTimeout(function(){
        actions.backRouteReload(router,location)
      },2000)
    })
  }

  render() {
    const {
      form,
      handleSubmit,
      children,
      saveFormRef,
    } = this.props
    /*updateType 4 为修改部门*/
    return (
      <BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef}>
          <FormItem>
            <Select name="jobId" label="面试类型" placeholder="请选择" fetch={DictUtils.getDictByType("interviewstage")} renderItem={this.renderSelectOption} />
          </FormItem>
          <FormItem>
            <Select name="jobId" label="面试反馈模版" placeholder="请选择" params={{}} fetch={`${APP_SERVER}/sysInterviewFeedbackTemplate/listJson`} renderItem={this.renderTemOption} />
          </FormItem>
      </BaseForm>
    )
  }
}
