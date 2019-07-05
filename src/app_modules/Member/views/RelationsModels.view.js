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
// import ResumeDownload from './DownloadModal.view'
// import API from './api'

export  class onlyPositiveModelView extends FormPage{
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
    beforeUpload(file) {
		let {name} = file
		let suffix = name.split(".").pop()
		if (suffix == "jpg" || suffix == "png" || suffix == "jpeg") {
			return true
		} else {
			message.warning("图片格式只支持jpg,png和jpeg")
			return false
		}
	}

	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                   <FormItem  >
							<Select  name="jobId" label='转正日期' placeholder="请选择转正日期" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   {/* <FormItem >
                     
                    <FileUpload name="file" label='转正申请表' accept="image/jpg, image/png, image/jpeg" beforeUpload={this.beforeUpload} text="上传信息登记表" action={`/fileUpload/file/uploadResumeAttr?resumeId=${1}&s=`} uploadType="1" onChange={() => {}} 
                        onSuccess={() => {
						actions.fetchAdditionInfoAction({"resumeId": 1})
					     }}></FileUpload>
                    </FormItem> */}
                        <FormItem>
                        <RadioGroup name="isAllot" label='转正通知书' rules={[{required: true, message: '请选择岗位级别!'}]}   placeholder="请选择" defaultValue="0">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>
                        </FormItem>
                        <FormItem>
                        <RadioGroup name="isAllot" label='发送方式' rules={[{required: true, message: '请选择岗位级别!'}]}   placeholder="请选择" defaultValue="0">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>
                        </FormItem>
					<FormItem  >
							<Select  name="jobId" label='接收邮箱' placeholder="请输入邮箱" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem>
									 <Select  name="jobId" label='通知模板' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem >
					<TextArea
                    
					label="&#x3000;内容" 
					name='des'
						placeholder="请输入内容！"
                        autosize={{ minRows: 4, maxRows: 10 }}
                        rules={[{required: true, message: '请选择岗位级别!'}]}  
						/>
					</FormItem>
                   
				
		</BaseForm>)
  }
 }

// 批量转正
export default class batchPositiveModelView extends FormPage{
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
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
					<h1 name="des" label='是否批量转正员工？确定后，员工将自动转为正式员工。'></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='转正日期' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }
// 修改转正日期
 export  class editPositiveModelView extends FormPage{
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
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='转正日期' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }
// 
export  class deitOnlyPositiveModelView extends FormPage{
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
    beforeUpload(file) {
		let {name} = file
		let suffix = name.split(".").pop()
		if (suffix == "jpg" || suffix == "png" || suffix == "jpeg") {
			return true
		} else {
			message.warning("图片格式只支持jpg,png和jpeg")
			return false
		}
	}

	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                   <FormItem  >
							<Select  name="jobId" label='转正日期' placeholder="请选择转正日期" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem >
					<TextArea
                    
					label="&#x3000;原因" 
					name='des'
						placeholder="请输入内容！"
                        autosize={{ minRows: 4, maxRows: 10 }}
                        rules={[{required: true, message: '请选择岗位级别!'}]}  
						/>
					</FormItem>
                        <FormItem>
                        <RadioGroup name="isAllot" label='转正通知书' rules={[{required: true, message: '请选择岗位级别!'}]}   placeholder="请选择" defaultValue="0">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>
                        </FormItem>
                        <FormItem>
                        <RadioGroup name="isAllot" label='发送方式' rules={[{required: true, message: '请选择岗位级别!'}]}   placeholder="请选择" defaultValue="0">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>
                        </FormItem>
					<FormItem  >
							<Select  name="jobId" label='接收邮箱' placeholder="请输入邮箱" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem>
									 <Select  name="jobId" label='通知模板' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem >
					<TextArea
                    
					label="&#x3000;内容" 
					name='des'
						placeholder="请输入内容！"
                        autosize={{ minRows: 4, maxRows: 10 }}
                        rules={[{required: true, message: '请选择岗位级别!'}]}  
						/>
					</FormItem>
                   
				
		</BaseForm>)
  }
 }
 //添加合同信息
 export  class addContractInformationModelView extends FormPage{
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
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
                        <Input name="graduateId" label="&#x3000;合同编号"  defaultValue={0 } />
                   </FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
                    <CalendarPicker name="contractExpireTimeArr" label="&#x3000;签署日期" />
					</FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
                    <CalendarPicker 	rules={[{required: true, message: '请选择岗位级别!'}]}   name="contractExpireTimeArr" label="到期日期" />
					</FormItem>
                    <FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='生效日期' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='&#x3000;签署公司' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }
//  批量离职
 export  class bulkDeparturesModelView extends FormPage{
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
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
					<h1 name="des" label='是否批量离职员工？'></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='离职日期' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择离职日期!'}]}  
											/>  
                   </FormItem> 
                   <FormItem  style={{marginLeft: '50px'}} >
							<Select  name="jobId" label='离职原因' placeholder="请选择离职原因" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
				
		</BaseForm>)
  }
 }
//  单个离职
 
 export  class editonlyDepartureDateModelView extends FormPage{
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
    beforeUpload(file) {
		let {name} = file
		let suffix = name.split(".").pop()
		if (suffix == "jpg" || suffix == "png" || suffix == "jpeg") {
			return true
		} else {
			message.warning("图片格式只支持jpg,png和jpeg")
			return false
		}
	}

	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                   <FormItem  >
							<Select  name="jobId" label='离职日期' placeholder="请选择离职日期" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem  >
							<Select  name="jobId" label='离职原因' placeholder="请选择离职日期" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem >
					<TextArea
                    
					label="&#x3000;原因描述" 
					name='des'
						placeholder="请输入原因描述！"
                        autosize={{ minRows: 4, maxRows: 10 }}
						/>
					</FormItem>
                   {/* <FormItem >
                     
                    <FileUpload name="file" label='离职申请表' accept="image/jpg, image/png, image/jpeg" beforeUpload={this.beforeUpload} text="上传信息登记表" action={`/fileUpload/file/uploadResumeAttr?resumeId=${1}&s=`} uploadType="1" onChange={() => {}} 
                        onSuccess={() => {
						actions.fetchAdditionInfoAction({"resumeId": 1})
					     }}></FileUpload>
                    </FormItem> */}
                    {/* <FormItem >
                     
                    <FileUpload name="file" label='离职交接表' accept="image/jpg, image/png, image/jpeg" beforeUpload={this.beforeUpload} text="上传信息登记表" action={`/fileUpload/file/uploadResumeAttr?resumeId=${1}&s=`} uploadType="1" onChange={() => {}} 
                        onSuccess={() => {
						actions.fetchAdditionInfoAction({"resumeId": 1})
					     }}></FileUpload>
                    </FormItem> */}
                        <FormItem>
                        <RadioGroup name="isAllot" label='离职证明' rules={[{required: true, message: '请选择岗位级别!'}]}   placeholder="请选择" defaultValue="0">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>
                        </FormItem>
                        <FormItem>
                        <RadioGroup name="isAllot" label='发送方式' rules={[{required: true, message: '请选择岗位级别!'}]}   placeholder="请选择" defaultValue="0">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>
                        </FormItem>
					<FormItem  >
							<Select  name="jobId" label='接收邮箱' placeholder="请输入邮箱" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											/>  
                   </FormItem> 
                   <FormItem>
									 <Select  name="jobId" label='通知模板' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											/>  
                   </FormItem> 
                   <FormItem >
					<TextArea
                    
					label="&#x3000;内容" 
					name='des'
						placeholder="请输入内容！"
                        autosize={{ minRows: 4, maxRows: 10 }}
						/>
					</FormItem>
                   
				
		</BaseForm>)
  }
 }
//  修改离职日期
 export  class editDepartureDateModelView extends FormPage{
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
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='离职日期' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }
//  实习转正
 export  class practicePositiveModelView extends FormPage{
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
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
					<h1 name="des" label='是否批量转正员工？确定后，员工将自动转为正式员工。'></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='合并岗位' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }
//实习转试用
 export  class internship2ProbationModelView extends FormPage{
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
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
					<h1 name="des" label='是否批量转正员工？确定后，员工将自动转为正式员工。'></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='合并岗位' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }