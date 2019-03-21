import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
	Row,
	Avatar,
	Col,
	Button,
	DatePicker,
	Input,
	Table,
	Card,
	Tag,
	message,
	List,
	Collapse,
	Dropdown,
	Tabs,
	Select,
	Checkbox,
	Steps,
	Timeline,
	Upload,
	Spin,
	Modal,
	Rate,
	Radio,
	Menu,
	Popconfirm,
	Switch,
	Icon
} from 'antd'
import moment from 'moment'
import EmailTemplateLinkage, {SmsTemplateLinkage, SmsTemplateInterView} from 'app/components/sendTemplate'
import BaseForm, {FormItem, customRules} from 'app/components/BaseForm'
import Permission from 'app/components/Permission'
import DictUtils from 'app/utils/DictUtils'
const ButtonGroup = Button.Group


/*导入小组件*/
import  {
	translateDic,
	translateTime,
} from './little'

/* 面试记录 */
export default class PersonFeedRecord extends Component {
	componentDidMount() {
		let {actions, resumeId} = this.props
		actions.getFeedDataAction({resumeId: resumeId})
	}
	componentWillReceiveProps(nextProps) {
		//console.log(JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state), nextProps)
		let {actions, resumeId} = this.props
		if (JSON.stringify(nextProps.resumeId) !== JSON.stringify(this.props.resumeId)) {
			actions.getFeedDataAction({resumeId: nextProps.resumeId})
		}
		if (JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)) {
			if (nextProps.location.state && nextProps.location.state.key == "reload") {
				actions.getFeedDataAction({resumeId: nextProps.resumeId})
			}
		}
	}
	handleAddFeed(item) {
		let {actions, router} = this.props
		/*新增时 feedItem 为空json  防报错*/
		actions.feedAction(router, item,{})
	}
	handleSendScoreSms(item){
		let {actions,info,info:{item:{isOpen}}} = this.props
		console.log(info,123)

		if(isOpen){
			return Modal.confirm({
				title: '请候选人为面试评分',
				content: "面试评分结果记录在职位详情中，是否邀请候选人为面试评分？",
				okText: '确认',
				onOk:function(){
					actions.sendScoreAction({resumeId:item.id})
				},
				cancelText: '取消'
			})
		}else{
			message.warning("请联系管理员开启面试评分功能")
		}
  }
	render() {
		let {
			info: {
				list
			},
			actions,
			router,
			detailType,
			item,
			item:{interviewScore},
			authorization
		} = this.props
		let {status, isLock} = item
		/* 面试数组数据map容错 */
		let lists = list
			? list
			: []
		/* detailType为5时为员工  特殊开辟 */
		return detailType == 2 || detailType == 3 || detailType == 4 || detailType == 5
			? (<div className="feedRecord-box">
				<Permission expression={status <= 2 && detailType == 2 && !isLock && authorization}>
					<ButtonGroup className="btn-box">
						{interviewScore ? null : <Button onClick={this.handleSendScoreSms.bind(this,item)}>请候选人为面试评分</Button>}
						<Button icon="plus" onClick={this.handleAddFeed.bind(this, item)} className="add-feed">添加面试</Button>
					</ButtonGroup>
				</Permission>
				{
					lists.length
						? <Timeline>
								{
									lists.map((it, idx) => {
										return <Timeline.Item dot={<Icon type = "calendar" style = {{ fontSize: '20px' ,color:"#fff"}}/>} key={idx}>
											<PersonFeedRecordItem item={it} actions={actions} router={router} detailType={detailType} personInfo={item}/>
										</Timeline.Item>
									})
								}
							</Timeline>
						: <div className="feed-no-data">尚未安排面试</div>
				}
			</div>)
			: (<div className="feedRecord-box">
				<div className="feed-no-data">尚未安排面试</div>
			</div>)
	}
}
PersonFeedRecord.defaultProps = {
	location: {}
}
class PersonFeedRecordItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			urgeShow: props.item.isUrge
		}
	}
	componentDidMount() {
		if (JSON.stringify(this.props.item) !== "{}") {
			this.setState({urgeShow: this.props.item.isUrge})
		}
	}
	componentWillReceiveProps(nextProps) {
		if (JSON.stringify(this.props.item) !== JSON.stringify(nextProps.item)) {
			this.setState({urgeShow: nextProps.item.isUrge})
		}
	}
	handleFeedBack(resumeId, planId, interviewer) {
		let {actions, router} = this.props
		actions.feedbackAction(router, planId, undefined, interviewer)
	}
	handleUrge(id) {
		let {actions, router} = this.props
		let that = this
		actions.urgeFeedbackAction({id: id}).then(() => {
			that.setState({urgeShow: true})
		})
	}
	handlDelay(id, resumeId, type, time) {
		let {actions, router} = this.props
		actions.delayAction(router, id, type, time)
	}
	handleCancleFeed(id) {
		let {actions,personInfo} = this.props
		// console.log(this.props)
		return Modal.confirm({
			title: '取消面试',
			content: "是否确定取消该场面试",
			okText: '确认',
			onOk:function(){
				actions.cancelFeedAction({id: id}).then(()=>{
					actions.getFeedDataAction({resumeId: personInfo.id})
				})
			},
			cancelText: '取消'
		})

	}
	handleEditFeed(item, feedItem) {
		let {actions,router} = this.props
		actions.feedAction(router, item, feedItem)
	}
	renderInterviewList(it, item, resumeId) {
		let {detailType} = this.props
		if (item.statusStr != 6 && item.statusStr != 8 && detailType != 10) {
			return it.isFeedback
				? <Button onClick={this.handleFeedBack.bind(this, resumeId, it.interviewPlanId, it.interviewerId)}>查看反馈</Button>
				: <Button onClick={this.handleFeedBack.bind(this, resumeId, it.interviewPlanId, it.interviewerId)}>填写反馈</Button>
		}
	}
	renderFeedBackList() {
		let {
			item: {
				feedbackList,
				resumeId
			},
			item
		} = this.props
		let that = this
		let list = feedbackList
			? feedbackList
			: []
		//console.log(list)
		return list.map((it, idx) => {
			//console.log(it)
			return it
				? (<div className="item-feedback">
					<span>{it.interviewer || it.interviewerId}</span>
					<span className="feedback-state">{translateDic("feedbackstate", it.feedbackState)}</span>
					{that.renderInterviewList(it, item, resumeId)}
				</div>)
				: null
		})
	}
	renderBtns() {
		let {item, detailType, personInfo} = this.props
		let {urgeShow} = this.state
		if (detailType == 10) {/* 为员工时不返回按钮* */
			return null
		}
		if (item.statusStr == 1) {
			return (<ButtonGroup>
				{/* <Button className="reset-interview-time" onClick={this.handlDelay.bind(this,item.id,item.resumeId,item.type,item.interviewTime)}>调整面试时间</Button> */}
				<Button onClick={this.handleEditFeed.bind(this, personInfo, item)}>修改面试</Button>
				<Button onClick={this.handleCancleFeed.bind(this, item.id)}>取消面试</Button>
			</ButtonGroup>)
		} else if (item.isFeedback != 2 && item.statusStr != 6 && item.statusStr != 8 && !urgeShow) {
			return (<ButtonGroup>
				<Button onClick={this.handleUrge.bind(this, item.id)}>催促反馈</Button>
			</ButtonGroup>)
		}

	}
	render() {
		let {item} = this.props
		//console.log(item)
		let json = {
			2: "#ed6492",
			3: "#ff8156",
			4: "#38c4a7"
		}
		//console.log(item)
		return (<div className="feedRecored-item">
			<div className="item-head"><Icon type="down"/>
				<span className="item-head-time">{translateTime(item.interviewTime, "MM月DD日")}</span>
				<span className="feed-status">{translateDic("interviewstate", item.statusStr)}</span>
			</div>
			<div className="item-body">
				<div className="item-feed-info">
					<span className="title">面试信息：</span>
					<Tag className="interview-stage-tag" color={json[item.type]}>{translateDic("interviewstage", item.type)}</Tag>
					{translateTime(item.interviewTime, "HH:mm")}
					{this.renderBtns()}
				</div>
				<div className="item-feed-info">
					<span className="title">面试地址：</span>{item.companyName}</div>
				<div className="item-feed-info">
					<span className="title">面试方式：</span>{translateDic("interviewWay", item.interviewWay)}</div>
				<div className="item-feedback-info">
					{this.renderFeedBackList()}
				</div>
			</div>
		</div>)
	}
}
PersonFeedRecordItem.defaultProps = {
	item: {}
}
