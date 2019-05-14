import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Timeline ,
	Row,
	Avatar,
	Col,
	Button,
	Input,
	Table,
	Dropdown,
	Menu,
	Select,
	Modal,
	Tabs,
	Icon
} from 'antd'
import {Link} from 'react-router'
import {routerActions, push, replace} from 'react-router-redux'
import WrapperComponent from "app/decorators/WrapperComponent"
import NestedComponent from 'app/decorators/NestedComponent'
import PersonInfo, {
	PersonTabBaseInfo,
	PersonOffer,
	PersonOption,
	PersonRemarks,
	PersonCommunitcate,
	PersonOptionRecord,
	PersonFeedRecord,
	ExtraInformation
} from 'app/components/PersonInfo'
import DictUtils from 'app-utils/DictUtils'
import classnames from 'classnames'
import {permissionStyle} from "app/utils/ConfigUtils";
import SmartLink from 'app/components/SmartLink'
// import ResumeDownload from './DownloadModal.view'
import Layout, {Fixed, Pane} from 'app/components/Layout'

const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;

function translateOrgin(state) {
	if (state && state.orgin) {
		let {orgin} = state
		if (orgin == "/resume/list") {
			return {viewLibType: 1}
		} else if (orgin == "/resume/approval") {
			return {viewLibType: 6}
		} else {
			return {}
		}
	} else {
		return {}
	}
	/* 暂时只做对候选人的切换 */
	// if(state && state.orgin){
	//   let {orgin} = state
	//   if(orgin == "/resume/list"){
	//     return {viewLibType:1}
	//   }else if(orgin == "/elite/3"){
	//     return {viewLibType:3}
	//   }else if(orgin == "/elite/4"){
	//     return {viewLibType:4}
	//   }else if(orgin.indexOf("distrib")){
	//     return {viewLibType:2}
	//   }else{
	//     return {}
	//   }
	// }else{
	//   return {}
	// }
}



function toStrings(val) {
	return val + ""
}

function translateDic(type, value) {
	return DictUtils.getDictLabelByValue(type, value) || ""
}

@NestedComponent()
export default class PersonInfoDetail extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			defaultKey: "1"
		}
	}
	static childContextTypes = {
		viewLibType: PropTypes.number
	}

	getChildContext(){
		 let { actions ,location:{state}} =this.props;
		 return {
				viewLibType: translateOrgin(state).viewLibType
		 };
	}
	componentDidMount() {
		let {actions, params: {
				resumeId
			}, location: {
				state
			}} = this.props
		// let viewLib = translateOrgin(state)
		// actions.itemAction({
		// 	id: resumeId,
		// 	...viewLib
		// })
	}

	componentWillReceiveProps(nextProps) {
		let {actions, router, reduce, params: {
				resumeId
			}, location: {
				state
			}} = this.props;
		if (JSON.stringify(nextProps.params) !== JSON.stringify(this.props.params)) {
			let viewLib = translateOrgin(nextProps.location.state)
			// actions.itemAction({
			// 	id: nextProps.params.resumeId,
			// 	...viewLib
			// })
		}
		if (JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)) {
			if (nextProps.location.state && nextProps.location.state.key == "reload") {
				let viewLib = translateOrgin(nextProps.location.state)
				setTimeout(() => {
					// actions.itemAction({
					// 	id: resumeId,
					// 	...viewLib
					// })
				}, 1000)
			}
		}
	}

	handleTabChange(value) {
		this.setState({defaultKey: value})
	}

	getToRemark() {
		this.setState({defaultKey: "4"})
	}

	renderTypeButton() {
		let {
			item,
			item: {
				libType,
				nextId
			},
			dispatch,
			actions,
			router,
			location,
			location: {
				state
			}
		} = this.props
		let detailType = this.translateLib(libType)
		let type = "resume"
		let nextPath = nextId
			? router.getCurrentLocation().pathname.replace(/\/\S{32}\/detail/, `/${nextId}/detail`)
			: state && state.orgin
		switch (detailType) {
			case 1:
				type = "allocat"
				break;
			case 2:
				type = "resume"
				break;
			case 3:
				type = "elite"
				break;
			case 4:
				type = "credit"
				break;
		}
		return <PersonOption item={item} actions={actions} dispatch={dispatch} location={location} router={router} type={type} callback={this.getToRemark.bind(this)} orginJson={{
				nextPath: nextPath,
				viewLibType: translateOrgin(state).viewLibType,
				orgin: state && state.orgin
			}}/>
	}
	translateLib(lib) {
		if (lib == 1) {
			return 2
		} else if (lib == 2) {
			return 1
		} else {
			return lib
		}
	}

	handleClickLeft() {
		let {
			location,
			router,
			dispatch,
			item: {
				prevId,
				nextId
			}
		} = this.props
		if (prevId) {
			let currLocation = router.getCurrentLocation().pathname.replace(/\/\S{32}\/detail/, `/${prevId}/detail`)
			let newpath = {
				pathname: currLocation,
				state: location.state
			}
			dispatch(routerActions.push(newpath))
		}
    }
    toSendFun(){
        let {
			dispatch
        } = this.props
        dispatch(routerActions.goBack())
    }
	handleClickRight() {
		let {
			location,
			router,
			dispatch,
			item: {
				prevId,
				nextId
			}
		} = this.props
		if (nextId) {
			let currLocation = router.getCurrentLocation().pathname.replace(/\/\S{32}\/detail/, `/${nextId}/detail`)
			let newpath = {
				pathname: currLocation,
				state: location.state
			}
			dispatch(routerActions.push(newpath))
		}
	}

	render() {
        console.log(this.props,"===detail this.props")
		// let {
		// 	dispatch,
		// 	actions,
		// 	location,
		// 	item,
		// 	router,
		// 	reduce: {
		// 		baseInfo,
		// 		feedInfo,
		// 		remarks,
		// 		options,
		// 		offer,
		// 		commitcate,
		// 		information
		// 	},
		// 	params: {
		// 		resumeId
		// 	}
		// } = this.props
		//console.log(resumeId,'routerrouter')
		// let {
		// 	name,
		// 	libType,
		// 	filingReason,
		// 	authorization,
		// 	prevId,
		// 	nextId,
		// 	viewLibType
		// } = item
		// let detailType = this.translateLib(libType)
		return (
           <div className='schoolRecruitDetail'>
               <div className='detail_header'>
                    <div className='headerItem'>
                       <h1>张宝宝</h1>
                       <Button type="primary" onClick={this.toSendFun.bind(this)}> 邀请投递</Button>
                    </div>
                    <div className='Item'>杭州师范大学 | 本科</div>
                    <div className='headerItem'>
                       <div>
                          <p><Icon type="phone" /> 176584545855</p>
                          <p><Icon type="wechat" /> 176584545855</p>
                          <p><Icon type="mail" /> 176584545855</p>
                       </div>
                       <img className='logoImg' src='/static/images/favicon.ico'  />
                    </div>   
               </div>
               <div className='detail_item'>
                   <h2>求职意向</h2>
                   <p>产品经理</p>
               </div>
               <div className='detail_item'>
                    <h2>期望薪资</h2>
                    <p>10-15k</p>
               </div>
               <div className='detail_item'>
                <h2>教育经理</h2>
                <Timeline>
                    <Timeline.Item>
                        <div>
                            <h3>2015.125.0毕业</h3>
                            <p>武汉理工大</p> 
                            <p>本科|视觉传达</p>  
                        </div>
                    </Timeline.Item>
                    <Timeline.Item>
                        <div>
                            <h3>2015.125.0毕业</h3>
                            <p>武汉理工大</p> 
                            <p>本科|视觉传达</p>  
                        </div>
                    </Timeline.Item>
                    <Timeline.Item>
                        <div>
                            <h3>2015.125.0毕业</h3>
                            <p>武汉理工大</p> 
                            <p>本科|视觉传达</p>  
                        </div>
                    </Timeline.Item>
                </Timeline>
               </div>
               <div className='detail_item'>
               <h2>实习经历</h2>
                <Timeline>
                    <Timeline.Item>
                            <h3>杭州中恩科技|产品经理</h3>
                            <p>职责:负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作工作负责工作负责工作</p> 
                    </Timeline.Item>
                    <Timeline.Item>
                            <h3>杭州中恩科技|产品经理</h3>
                            <p>职责:负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作工作负责工作负责工作</p> 
                    </Timeline.Item>
                    <Timeline.Item>
                            <h3>杭州中恩科技|产品经理</h3>
                            <p>职责:负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作工作负责工作负责工作</p> 
                    </Timeline.Item>
                </Timeline>
               </div>
               <div className='detail_item'>
                <h2>我的荣誉</h2>
                <div className='item_skill'>
                   <p>全国计算机软件技术资格水平考试</p> 
                   <p><span>成绩200</span><span>2019.12.10</span></p> 
                </div>
                <div className='item_skill'>
                   <p>全国计算机软件技术资格水平考试</p> 
                   <p><span>成绩200</span><span>2019.12.10</span></p> 
                </div>
               </div>
               <div  className='detail_item'>
                <h2>自我评价</h2>
                <p>我想说的是你真的好可爱！</p>
               </div>

           </div>
        )
}
}

