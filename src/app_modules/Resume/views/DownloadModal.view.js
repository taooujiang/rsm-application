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
	Icon,
	message,
	Radio,
	Rate,
	Select
} from 'antd'
import {FormPage} from 'app/components/Page'
import ClientAPI, {emitter} from 'app/utils/externalUtils'
import ModalView, {ModalViewTitleProps} from 'app/components/Modal.view'
import WrapperComponent from 'app/decorators/WrapperComponent'
import BaseForm, {FormItem, customRules} from 'app/components/BaseForm'
import {timePolling} from 'app/utils/timeIntervalUtil'

const RadioGroup = Radio.Group;
const Option = Select.Option
const {TextArea} = Input

class DownloadForm extends Component {

	renderSelectRadio(data) {
		if (data.ok) {
			console.log(data,"render")
			if (data.payType && data.payType.length > 0) {
				return data.payType.map((it, idx) => {
					return <Radio value={it.type}>
						<span>{it.typeName}</span>
						<span>{it.totalCoin}</span>
					</Radio>
				})
			}
		}
	}
	render() {
		const {form, handleSubmit, children, saveFormRef, data} = this.props

		return (<BaseForm onSubmit={handleSubmit} ref={saveFormRef}>
			<FormItem>
				<RadioGroup name="payType" style={{
						textAlign: "center",
						display: "block"
					}}>
					{this.renderSelectRadio(data)}
				</RadioGroup>
			</FormItem>
		</BaseForm>)
	}
}
@WrapperComponent(ModalViewTitleProps)
export default class ResumeDownload extends FormPage {
	//请求远程数据接口

	constructor(props) {
		super(props)
		this.state = {
			pythonData: {},
			spinFlag: true
		}
	}

	componentWillMount() {
		let {actions, channelResumeId, channel, closeFn, router,row} = this.props
		let that = this
		let params = {
			type: "download_confrim",
			resumeId: channelResumeId,
			channelId: channel,
			orgId:row.orgId
		}
		// let messageFlag = true
		let JsToPython = new ClientAPI().JsToPython
		JsToPython(params)
		// emitter.on("download_confrim", function(value) {
		// 	if (value.ok) {
		// 		console.log(value,"emiter_console",that)
		// 		that.setState({pythonData: value, spinFlag: false})
		// 	} else {
		// 		message.info(value.msg, 5)
		// 		that.setState({spinFlag: false})
		// 	}
		// })
		// emitter.on("download_resume", function(value) {
		// 	console.log("download_resume1111", value)
		// 	closeFn()
		// 	if (value.ok) {
		// 		actions.saveContratAction(value,row.id)
		// 	} else {
		// 		if (messageFlag) {
		// 			message.error(value.msg)
		// 			messageFlag = false
		// 		}
		// 	}
		// })
	}
	componentDidMount(){
		let that = this
		timePolling(2,10,function(num,t){
			let downloadConfrim = window.localStorage.downloadConfrim ? JSON.parse(window.localStorage.downloadConfrim) : false
			if(downloadConfrim){
				if (downloadConfrim.ok) {
					console.log(downloadConfrim,"emiter_console",that)
					that.setState({pythonData: downloadConfrim, spinFlag: false})
				} else {
					message.info(downloadConfrim.msg, 5)
					that.setState({spinFlag: false})
				}
			}
		})
	}
	//处理表格提交后动作
	handleSubmit(values) {
		let {
			actions,
			router,
			location,
			closeFn,
			channelResumeId,
			channel,
			row
		} = this.props
		let params = {
			type: "download_resume",
			resumeId: channelResumeId,
			channelId: channel,
			orgId:row.orgId,
			payType: values.payType
		}
		let JsToPython = new ClientAPI().JsToPython
		let that = this
		let messageFlag = true

		JsToPython(params)
		this.setState({spinFlag: true})

		timePolling(2,10,function(num,t){
			let downloadResume = window.localStorage.downloadResume ? JSON.parse(window.localStorage.downloadResume) : false
			if(downloadResume){
				closeFn()
				if (downloadResume.ok) {
					actions.saveContratAction(downloadResume,row.id)
				} else {
					if (messageFlag) {
						message.error(downloadResume.msg)
						messageFlag = false
					}
				}
			}
		})
	}
	render() {
		let {actions, closeFn} = this.props
		//	let model=preduce.list[0]
		let {pythonData, spinFlag} = this.state
		return (<Spin tip="Loading..." spinning={spinFlag}>
			<DownloadForm actions={actions} handleSubmit={this.handleSubmit} closeFn={closeFn} data={pythonData} saveFormRef={this.saveFormRef}>
				<Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}>确认
				</Button>
				<Button>
					取消
				</Button>
			</DownloadForm>
		</Spin>)
	}
}
