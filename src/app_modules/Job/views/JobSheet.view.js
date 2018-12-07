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
  constructor(props){
    super(props)
    this.state.templeteArr = []
  }

  componentDidMount(){
    new FetchAPI().fetchPost('/sysInterviewFeedbackTemplate/listJson',
    {body:{}}).then(json=>{
      json.list.push({name:"不使用模版",id:""})
      this.setState({
        templeteArr:json.list
      })
    })
  }


  renderSelectOption(data,idx){
    return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  renderTemOption(data,idx){
    // console.log(data)
    return (<Select.Option value={data.id} key={idx}>{data.name}</Select.Option>)
  }

  hanldeChangeTemp(val){
    let {templeteArr} = this.state
    let name = templeteArr.filter(it=>{
      return it.id == val
    }).pop().name
    this.form.setFieldsValue({"feedbackTemplateName":name})
  }
  handleChangeType(val){
    let {item:{jobFeedbackList}} = this.props
    let feedItem = jobFeedbackList.filter(it=>{
      return it.type == val
    }).pop()
    if(feedItem){
      this.form.setFieldsValue({"id":feedItem.id,"feedbackTemplateName":feedItem.feedbackTemplateName,"feedbackTemplateId":feedItem.feedbackTemplateId})
    }
  }

  handleSubmit(values){
    let {actions,router,location} = this.props;
   // console.log(values)
    actions.sheetAction(values).then(()=>{
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
      params:{jobId},
      location:{state:{item}}
    } = this.props
      let {templeteArr} = this.state
    return (
      <BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef}>
          <FormItem>
            <Input type="hidden" name="id" defaultValue={item&&item.id}/>
          </FormItem>
          <FormItem>
            <Input type="hidden" name="jobId" defaultValue={jobId}/>
          </FormItem>
          <FormItem>
            <Input type="hidden" name="feedbackTemplateName" defaultValue={item&&item.feedbackTemplateName}/>
          </FormItem>
          <FormItem>
            <Select name="type" label="面试类型" defaultValue={item&&item.type+""} placeholder="请选择" fetch={DictUtils.getDictByType("interviewstage")} renderItem={this.renderSelectOption} onChange={this.handleChangeType.bind(this)}/>
          </FormItem>
          <FormItem>
            <Select name="feedbackTemplateId" label="面试反馈模版" defaultValue={item&&item.feedbackTemplateId} placeholder="请选择" fetch={templeteArr} renderItem={this.renderTemOption} onChange={this.hanldeChangeTemp.bind(this)}/>
          </FormItem>
      </BaseForm>
    )
  }
}
