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
	componentWillMount() {
        let {actions, router, children, params} = this.props;
		actions.jobsDetailAction({id:this.props.location.state.id})
	   
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		let {actions,params,page}=this.props
		console.log(values,'handleSubmit')
		actions.jobsAddEditAction({...values}).then(()=>{
			actions.backRoute()
			actions.jobsListAction({...params});
		})
	}
	renderLevelOption(data,idx){
        return (<Select.Option value={data.id} key={idx}>{data.positionName}</Select.Option>)
    }
	renderSelectOption(data,idx){
		return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
	  }
	  renderNameOption(data,idx){
        return (<Select.Option value={data.id} key={idx}>{data.postName}</Select.Option>)
    }
	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			
			let {actions,reduce,params,page}=this.props
			let {
				id,
				postName,
				postRank,
				postCategory,
				reportTo,
				lowerIds,
				lowestEducation,
				workYears,
				postIntroduce
			} =reduce.detailList
			// console.log(id,"==detailList")
	   return (
		   
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="sendMsg-form">
                   <FormItem className="row-hidden">
						<Input name="id" type="hidden" 
						defaultValue={id || ''}
						 />
                   </FormItem>
					<FormItem style={{paddingLeft: 0,marginBottom: 0}}  className="row-hidden">
                        <h1 style={{fontSize:'14px',fontWeight:'600'}}  name='title'>岗位基本信息</h1>
                   </FormItem>
					<FormItem>
						<Input name="postName" label='岗位名称' 
						 rules={[{required: true, message: '请请输入岗位名称!'}]} 
						 defaultValue={postName || '' } 
						 />
                   </FormItem> 
					<FormItem >
						<Select  name="postRank" label='岗位级别' placeholder="请选择" 
											 fetch={`${APP_SERVER}/sysPositionLevel/findPositionLevelList`}
											 renderItem={this.renderLevelOption}
											defaultValue={postRank || '' }
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
									 <FormItem>
									 <TreeSelectPicker
								label="岗位类别"
								name="postCategory"
								fetch={`${APP_SERVER}/postCategory/getTree`}
								dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
								placeholder="请选择"
								defaultValue={postCategory || '' }
								showSearch={true}
								treeDefaultExpandAll
								/>
	
                   </FormItem> 
									 <FormItem  style={{paddingLeft: 0,marginBottom: 0}} >
                        <h1 style={{fontSize:'14px',fontWeight:'600'}} name='title' >岗位汇报信息</h1>
                   </FormItem>
									 <FormItem >
									 <Select  name="reportTo" label='&#x3000;直属上级' placeholder="请选择" 
											 fetch={`${APP_SERVER}/postManage/listJson`}
											 params={{item:{}}} 
											renderItem={this.renderNameOption}
											defaultValue={reportTo || '' }
											rules={[{}]}  
											/>  
                   </FormItem> 
									 <FormItem >
									 <Select 
									 mode="multiple"
									  name="lowerIds"
									   label='&#x3000;直属下级'
										placeholder="请选择" 
											 fetch={`${APP_SERVER}/postManage/listJson`}
											 params={{item:{}}} 
											renderItem={this.renderNameOption}
											defaultValue={lowerIds || [] }

											/>  
                   </FormItem> 
									 <FormItem style={{paddingLeft: 0,marginBottom: 0}} >
                        <h1 style={{fontSize:'14px',fontWeight:'600'}} name='title'>岗位详细信息</h1>
                   </FormItem>
									 <FormItem>
									 <Select  name="lowestEducation" label='&#x3000;最低学历' placeholder="请选择" 
											fetch={DictUtils.getDictByType("education")} 
											renderItem={this.renderSelectOption}
											defaultValue={lowestEducation || '' }
											rules={[{}]}  
											/>  
                   </FormItem> 
					<FormItem >
						<LinkagePullDown name="workYears" label="&#x3000;工作经验" 
						style={{width:'200px'}} 
						options={DictUtils.getDictByType("workyears")}
						defaultValue={workYears || [] }
						 />
					</FormItem>
					<FormItem >
					<TextArea
					label="&#x3000;岗位描述" 
					name='postIntroduce'
						placeholder="请输入岗位描述！"
						autosize={{ minRows: 4, maxRows: 10 }}
						defaultValue={postIntroduce || '' }
						/>
					</FormItem>
		</BaseForm>)
  }
 }

