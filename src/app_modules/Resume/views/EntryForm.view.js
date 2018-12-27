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
  Checkbox,
  Layout,
  Spin,
  Rate,
  Select
} from 'antd'
import {TreeSelectPicker} from 'app/components/TreeView'
import {routerActions, push, replace} from 'react-router-redux'
import {FormPage} from 'app/components/Page'
import BaseForm,{FormItem,customRules} from 'app/components/BaseForm'
import moment from 'moment'
const Option = Select.Option
const {TextArea} = Input

class EntryForm extends Component{
  state = {
    checked:false
  }
  handleChange(e){
    this.setState({
      checked:e.target.checked
    })
  }
  render() {
    const {
      form,
      handleSubmit,
      children,
      saveFormRef,
      id,
      item,
      item:{
        resumes,
        orgId
      }
    } = this.props
    let {checked} = this.state
    let jobTitle = resumes.filter(it=>it.isCurrentResume == 1).pop().jobTitle
    let custRules = [{required: true, message: "预计转正日期不可为空"}]
    // console.log(checked)
    return (
      <BaseForm onSubmit={handleSubmit} ref={saveFormRef}>
        <FormItem>
          <Input type="hidden" name="resumeId" defaultValue={id} />
        </FormItem>
        <FormItem>
          <Input name="jobTitle" label="入职职位" defaultValue={jobTitle} rules={[{required:true,message:"入职职位不可为空"},{validator:customRules.required}]}/>
        </FormItem>
        <FormItem>
        <TreeSelectPicker
          label="入职部门"
          name="deptId"
          fetch={`${APP_SERVER}/organizationGroup/getDepartmentTree`}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="选择部门"
          rules={[{required:true,message:"入职部门不可为空"}]}
          treeDefaultExpandAll
        />
        </FormItem>
        <FormItem>
          <DatePicker label="入职日期" name="joinTime" defaultValue={moment()} rules={[{required: true, message: "入职日期不可为空"}]}/>
        </FormItem>
        <FormItem>
          <DatePicker label="预计转正日期" name="conversionTime" defaultValue={moment().add(3,"months")} disabled={checked} rules={checked ? [] : custRules}/>
        </FormItem>
        <FormItem>
          <Checkbox label="实习" name="internship" defaultChecked={checked} onChange={this.handleChange.bind(this)}/>
        </FormItem>
      </BaseForm>
    )
  }
}

export default class EntryFormView extends FormPage{

  //处理表格提交后动作
  handleSubmit(values){
    let {actions,router,dispatch,location} = this.props
    if(!values.internship){
      values.internship = false
    }
    actions.entryFormAction(values).then(()=>{
      actions.backRouteReload(router,location)
    })
  }
  render() {
    let {location:{state:{id,item}}} = this.props

    return (
      <Spin tip="Loading..." spinning={false}>
        <EntryForm handleSubmit={this.handleSubmit}  saveFormRef={this.saveFormRef} id={id} item={item}>
            <Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}>确认</Button>
            <Button>取消</Button>
        </EntryForm>
      </Spin>
    )
  }
}
