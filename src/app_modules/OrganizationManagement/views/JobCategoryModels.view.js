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
  Select,
  TreeSelect
} from 'antd'


import moment from 'moment'
import RichEditor, {EditableRichEditor} from 'components/RichEditor'
import {FormPage} from 'app/components/Page'
import {FileUpload} from 'app/components/FileUpload'

import BaseForm,{FormItem,customRules} from 'app/components/BaseForm'
import LinkagePullDown from 'app/components/LinkagePullDown'
import CalendarPicker from 'app/components/CalendarPicker'
import {TreeSelectPicker} from 'app/components/TreeView'
import DateTimePicker from 'app/components/DateTimePicker'
import messageCountFn from 'app/utils/messageCount'


const Option = Select.Option
const {TextArea} = Input
const RadioGroup = Radio.Group;
const TreeNode = TreeSelect.TreeNode;

import {routerActions, push, replace} from 'react-router-redux'
import WrapperComponent from "app/decorators/WrapperComponent"
import NestedComponent from 'app/decorators/NestedComponent'
import DictUtils from 'app-utils/DictUtils'
import classnames from 'classnames'

//新增修改岗位类别
 export  default  class addEditJobCategoryView extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		// let {actions,reduce:{detailList:{id},params,page}}=this.props
		// console.log(values,'handleSubmit')
		// actions.invateForDeliveryAction({...values},{...params}).then(()=>{
		// 	actions.backRoute()
		// })
	
	}
	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="id" type="hidden" defaultValue={id} />
                   </FormItem>
                   <FormItem  style={{marginLeft: '50px',height:'30px'}} >
                        <Input name="categoryName" label="&#x3000;岗位类型名称"  defaultValue={0 } />
                   </FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="pid" label='上级岗位类型' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											/>  
                   </FormItem> 
                   <FormItem >
					<TextArea
                    
					label="&#x3000;描述" 
					name='description'
						placeholder="请输入内容！"
                        autosize={{ minRows: 4, maxRows: 10 }}
						/>
					</FormItem>
				
		</BaseForm>)
  }
 }
// 删除岗位类别
 export  class delateJobCategoryView extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		let {actions,reduce:{detailList:{id},params,page}}=this.props
		console.log(values,'handleSubmit')
		actions.delateJobCategoryAction({...values}).then(()=>{
            actions.backRoute()
            actions.JobCategoryAction()
		})
	
	}
	render() {
		// let {id} =this.props.location.state
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="id" type="hidden" defaultValue='' />
                   </FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
					<h1 name="des" label='确认删除该岗位类型？'></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="mergeId" label='合并岗位类型' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }