/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-03-14T14:37:05+08:00
 */

import React, {Component, PropTypes} from 'react'
import {
	Row,
	Col,
	Modal,
	Checkbox,
	Button,
	Radio,
	Input,
	Form,
	DatePicker,
	Layout,
	Spin,
	Rate,
	Select
} from 'antd'
import moment from 'moment'
import {FormPage} from 'app/components/Page'
import BaseForm, {FormItem, customRules} from 'app/components/BaseForm'
import AdvancedSearchForm from 'app/components/AdvancedSearch'
import EmailTemplateLinkage, {SmsTemplateLinkage, SmsTemplateInterView} from 'app/components/sendTemplate'
import DateTimePicker from 'app/components/DateTimePicker'
import DictUtils from 'app/utils/DictUtils'
const Option = Select.Option
const {TextArea} = Input
const RadioGroup = Radio.Group;

class FeedForm extends Component {

	state = {
		time: '0',
		which: '2',
		interviewFlag: true
	}

	renderSelectOption(data, idx) {
		return (<Select.Option value={data.keyValue} key={"select" + idx}>{data.keyName}</Select.Option>)
	}
	renderJobOption(data, idx) {
		return (<Select.Option value={data.jobId} key={"Job" + idx}>{data.jobTitle}</Select.Option>)
	}
	renderAreaOption(data, idx) {
		return (<Select.Option value={data.id} key={idx}>{data.addressAll}</Select.Option>)
	}
	renderInterviewerOption(data, idx) {
		return (<Select.Option value={data.account} key={"Interviewer" + idx}>{data.name}</Select.Option>)
	}
	renderSmsOrEmail() {
		const {updateFieldValue, item,id,feedItem} = this.props
		let {which} = this.state
		let flag = which
		if(id){
			flag = feedItem.noticeType
		}

		if (which == "1") {
			return (<SmsTemplateLinkage updateFieldValue={updateFieldValue} receiver={item.mobilephone}/>)
		} else if (which == "2") {
			return (<EmailTemplateLinkage mailSubject="面试通知函" updateFieldValue={updateFieldValue} templateUse="1" mailTo={item.email}/>)
		} else {
			return null
		}
	}
	handleChange(e) {
		this.setState({which: e.target.value})
	}
	handleChangeTime(e) {
		this.setState({time: e.target.value})
	}

	render() {
		let {
			form,
			handleSubmit,
			children,
			saveFormRef,
			resumeId,
			info: {
				type,
				createble
			},
			companyId,
			id,
			feedItem
		} = this.props
		const {location, updateFieldValue} = this.props;
		const options = [
			{
				label: '邮件通知',
				value: '2'
			}, {
				label: '短信通知',
				value: '1'
			}, {
				label: '不通知',
				value: '0'
			}
		];
		const sendOption = [
			{
				label: "立即发送",
				value: "0"
			}, {
				label: "定时发送",
				value: "1"
			}
		]

		console.log(feedItem)
		return (<BaseForm onSubmit={handleSubmit} ref={saveFormRef}>
			<FormItem>
				<Input type="hidden" name="resumeId" defaultValue={id ? feedItem.resumeId :resumeId}/>
			</FormItem>
			<FormItem>
				<Input type="hidden" name="type" defaultValue={id ? feedItem.type : type}/>
			</FormItem>
			<FormItem>
				<Input type="hidden" name="id" defaultValue={id}/>
			</FormItem>
			<Row>
				<Col span={24}>
					<FormItem>
						<Input label="面试阶段" name="feed" readOnly="readOnly" defaultValue={DictUtils.getDictLabelByValue("interviewstage", id ? feedItem.type : type)}/>
					</FormItem>
					{
						createble || id
							? null
							: <span className="feed-disabled">当前候选人已安排完全部面试</span>
					}
				</Col>
				<Col span={24}>
					<FormItem>
						<DateTimePicker name="interviewTime" defaultDate={id ? moment(feedItem.interviewTime) : moment().add(1, "days")} defaultTime={id ? moment(feedItem.interviewTime) : moment().set({hour: 9, minute: 0, second: 0})} label="面试时间" rules={[{
									required: true,
									message: "面试时间不可为空"
								}
							]}/>
					</FormItem>
				</Col>
				<Col span={24}>
					<FormItem>
						<Select label="面试官" name="interviewerIds" mode="multiple" showSearch  defaultValue={id ? feedItem.interviewerIds : null} fetch={`${APP_SERVER}/user/getInterviewerListJson`} renderItem={this.renderInterviewerOption} rules={[
								{
									required: true,
									message: "面试官不可为空"
								}, {
									validator: customRules.maxLength,
									value: 3,
									message: "面试官最多选择3个"
								}
							]}></Select>
					</FormItem>
				</Col>
				<Col span={24}>
					<FormItem>
						<Select label="面试方式" name="interviewWay" defaultValue={id ? feedItem.interviewWay : null} fetch={DictUtils.getDictByType("interviewWay")} renderItem={this.renderSelectOption}></Select>
					</FormItem>
				</Col>
				<Col span={24}>
					<FormItem>
						<Select label="面试地址" name="companyId" defaultValue={id ? feedItem.companyId : null} fetch={`${APP_SERVER}/company/listJson`} renderItem={this.renderAreaOption}></Select>
					</FormItem>
				</Col>
			</Row>
			<Row>
				<FormItem>
					<RadioGroup name="noticeType" label="通知候选人" options={options} onChange={this.handleChange.bind(this)} defaultValue={id ? feedItem.noticeType+"" : this.state.which}/>
				</FormItem>
				{this.renderSmsOrEmail()}
				{/*<FormItem>
              <Checkbox label="通知面试官" name="interviewerNoticeType">短信通知</Checkbox>
            </FormItem>*/
				}
				<FormItem>
					<RadioGroup name="smsTimed" label="通知时间" options={sendOption} onChange={this.handleChangeTime.bind(this)} defaultValue={id ? feedItem.smsTimed+"" : this.state.time}/>
				</FormItem>
				{
					this.state.time == '1'
						? <FormItem>
								<DateTimePicker name="smsTime" defaultDate={id ? moment(feedItem.smsTime) : moment().add(1, "days")} defaultTime={id ? moment(feedItem.smsTime) : moment().set({hour: 9, minute: 0, second: 0})}/>
							</FormItem>
						: null
				}
			</Row>
		</BaseForm>)
	}
}

export default class FeedFormView extends FormPage {
	//请求远程数据接口
	componentWillMount() {
		let {actions, params: {
				resumeId
			},location:{state:{id}}} = this.props;
		if(!id){
			actions.getFeedStageAction({resumeId: resumeId})
		}
	}
	//处理表格提交后动作
	handleSubmit(values) {
		let {
			actions,
			location,
			location:{
				state:{id}
			},
			router,
			reduce: {
				interviewInfo: {
					map: {
						createble
					}
				}
			}
		} = this.props;
		if (createble || id) {
			actions.feedArrange(values)
			actions.backRouteReload(router, location)
		}
	}
	updateFieldValue(fieldName, value) {
		let {
			location: {
				state: {
					item
				}
			},
			reduce: {
				interviewInfo
			}
		} = this.props
		var object = {}
		let interviewTime
		let {name, jobTitle} = interviewInfo
		if (this.form.getFieldValue("interviewTime")) {
			interviewTime = this.form.getFieldValue("interviewTime").format("YYYY-MM-DD HH:mm")
		}
		let translate = [
			{
				'面试时间': interviewTime
			}, {
				'职位名称': jobTitle
			}, {
				'姓名': name
			}
		]

		if (value.length) {
			value = value.replace("{面试时间}", interviewTime)
			value = value.replace("{职位名称}", jobTitle)
			value = value.replace("{姓名}", name)
		}

		object[fieldName] = value
		this.form.setFieldsValue(object)
	}
	render() {
		let {
			params: {
				resumeId
			},
			reduce: {
				interviewInfo: {
					map
				},
				companyId
			},
			location: {
				state: {
					item,
					id,
					feedItem
				}
			}
		} = this.props;
		let datas = {
			resumeId:resumeId,
		 	info:map,
			companyId:companyId,
			item:item,
			id:id,
			feedItem:feedItem
		}
		return (<Spin tip="Loading..." spinning={false}>
			<FeedForm onSubmit={this.onSubmit} updateFieldValue={this.updateFieldValue.bind(this)} saveFormRef={this.saveFormRef} {...datas}>
				<Button type="primary" htmlType="submit" onClick={this.onSubmit.bind(this)}>确认</Button>
				<Button>取消</Button>
			</FeedForm>
		</Spin>)
	}
}
