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

export default class SendDetail extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		let {actions,reduce:{detailList:{id},params,page}}=this.props
		console.log(values,'handleSubmit')
		actions.jobsDelateAction({...values}).then(()=>{
			actions.backRoute()
			actions.jobsListAction({...params});
		})
	
	}
	renderNameOption(data,idx){
		return (<Select.Option value={data.id} key={idx}>{data.postName}</Select.Option>)
}
	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
			let {id}=this.props.location.state
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="sendMsg-form">
                   <FormItem className="row-hidden">
                        <Input name="id" type="hidden" defaultValue={id } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label='确定删除该岗位？'></h1>
					</FormItem>
					<FormItem >
							<Select  name="mergeId" label='合并岗位' placeholder="请选择" 
											renderItem={this.renderNameOption}
											fetch={`${APP_SERVER}/postManage/listJson`}
                      params={{item:{id:id}}} 
											/>  
                   </FormItem> 
                   <FormItem >
					<span name="des" label='合并后，原岗位下的员工和职位都将进入新的岗位中。'></span>
					</FormItem>
				
		</BaseForm>)
  }
 }

