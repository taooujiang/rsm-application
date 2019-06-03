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
		let {actions,reduce:{detailList:{id}}}=this.props
		console.log(values,'handleSubmit')
		actions.invateForDeliveryAction({...values}).then(()=>{
			actions.backRoute()
		})
	
	}
	render() {
			const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="sendMsg-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={id } />
                   </FormItem>
                   <FormItem >
						<Select  name="jobId" label='校招职位名称' placeholder="请选择" 
						   fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
						   renderItem={this.renderJobOption}
							defaultValue=''
							rules={[{required: true, message: '请选择校招职位!'}]}  
							 /> 
                   </FormItem>
		</BaseForm>
        )
  }
 }

