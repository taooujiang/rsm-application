/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-17T17:32:29+08:00
 */

import React, {Component, PropTypes} from 'react'
import {
  Row,
  Col,
  Modal,
  Button,
  Input,
  Form,
  DatePicker,
  Layout,
  Spin,
  Rate,
  Select
} from 'antd'
import {TreeSelectPicker} from 'app/components/TreeView'
import {routerActions, push, replace} from 'react-router-redux'
import {FormPage} from 'app/components/Page'
import BaseForm,{FormItem} from 'app/components/BaseForm'
import moment from 'moment'
const Option = Select.Option
const {TextArea} = Input

class EntryForm extends Component{
  renderJobOption(data,idx){
    return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
  }
  render() {
    const {
      form,
      handleSubmit,
      children,
      saveFormRef,
      id,
    } = this.props
    return (
      <BaseForm onSubmit={handleSubmit} ref={saveFormRef}>
        <FormItem>
          <Input type="hidden" name="id" defaultValue={id} />
        </FormItem>
        <FormItem>
          <Select name="jobId" label="职位" placeholder="请选择"  fetch={`${APP_SERVER}/jobNew/getJobList`} renderItem={this.renderJobOption}/>
        </FormItem>
        <FormItem>
        <TreeSelectPicker
          label="招聘部门"
          name="groupId"
          fetch={`${APP_SERVER}/organizationGroup/getDepartmentTree`}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="选择部门"
          treeDefaultExpandAll
        />
        </FormItem>
        <FormItem>
          <DatePicker label="入职日期" name="expectedEntryTime"   rules={[{required: true, message: "入职日期不可为空"}]}/>
        </FormItem>
        <FormItem>
          <DatePicker label="预计转正日期" name="expectedEntryTime"   rules={[{required: true, message: "预计转正日期不可为空"}]}/>
        </FormItem>
      </BaseForm>
    )
  }
}

export default class EntryFormView extends FormPage{

  //处理表格提交后动作
  handleSubmit(values){
    let {actions,router,dispatch,location} = this.props

      actions.entryWaiting(values).then(()=>{
        actions.backRouteReload(router,location)
      })
  }
  render() {
    let {location:{state:{id}}} = this.props

    return (
      <Spin tip="Loading..." spinning={false}>
        <EntryForm handleSubmit={this.handleSubmit}  saveFormRef={this.saveFormRef} id={id}>
            <Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}>确认</Button>
            <Button>取消</Button>
        </EntryForm>
      </Spin>
    )
  }
}
