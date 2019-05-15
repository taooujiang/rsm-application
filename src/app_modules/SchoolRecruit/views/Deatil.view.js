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
	componentDidMount() {
		let {actions, params: {
				resumeId
			}, location: {
				state
			}} = this.props
		// actions.itemAction({
		// 	id: resumeId,
		// })
	}
	componentWillReceiveProps(nextProps) {
		let {actions, router, reduce, params: {
				resumeId
			}, location: {
				state
			}} = this.props;
		if (JSON.stringify(nextProps.params) !== JSON.stringify(this.props.params)) {
			// actions.itemAction({
			// 	id: nextProps.params.resumeId,
			// 	...viewLib
			// })
		}
		if (JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)) {
			if (nextProps.location.state && nextProps.location.state.key == "reload") {
				setTimeout(() => {
					// actions.itemAction({
					// 	id: resumeId,
					// })
				}, 1000)
			}
		}
	}
    toSendFun(){
        let {
			dispatch,routeParams:{id},router:{location:{pathname}}
        } = this.props
        console.log( this.props,"=== this.props")
        // dispatch(routerActions.push(`${pathname}/toSend`))
    }
	render() {
        console.log(this.props,"===detail this.props")
        const list ={
            name:'张宝宝',
            school:'杭州师范大学',
            skill:'本科',
            phone:'176584545855',
            wechat:'176584545855',
            mail:'176584545855',
            src:'/static/images/favicon.ico',
            toPropose:['产品经理',"测试"],
            salary:'10-15k',
            schollArr:[
                { time:"2015.125.0",
                    scholl:'武汉理工大',
                    skill:'视觉传达 本科' 
            },
            { time:"2015.125.0",
            scholl:'武汉理工大',
            skill:'视觉传达 本科' }
            ],
            arr:[
                {
                  title:'杭州中恩科技|产品经理',
                content:'职责:负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作工作负责工作负责工作'

                },
                {
                    title:'杭州中恩科技|产品经理',
                  content:'职责:负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作工作负责工作负责工作'
  
                  },
                  {
                    title:'杭州中恩科技|产品经理',
                  content:'职责:负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作负责工作工作负责工作负责工作'
  
                  }
                
            ],
            oneArr:[
                {
                    title:'全国计算机软件技术资格水平考试',
                  code:'200',
                  time:'2019.12.10'
                },
                {
                    title:'全国计算机软件技术资格水平考试',
                  code:'200',
                  time:'2019.12.10'
                }
            ],
            mySelf:'我想说的是你真的好可爱！我想说的是你真的好可爱！我想说的是你真的好可爱！'
        }
		return (
           <div className='schoolRecruitDetail'>
               <div className='detail_header'>
                    <div className='headerItem'>
                       <h1>{list.name}</h1>
                      <SmartLink  to={{
                            pathname: 'toSend',
                            state: {
                                orgin: this.props.pathname
                            }
                        }}><Button type="primary"> 邀请投递</Button></SmartLink>
                       
                    </div>
                    <div className='Item'>{list.school}</div>
                    <div className='headerItem'>
                       <div>
                          <p><Icon type="phone" />{list.phone}</p>
                          <p><Icon type="wechat" />{list.wechat}</p>
                          <p><Icon type="mail" />{list.mail}</p>
                       </div>
                       <img className='logoImg' src={list.src}  />
                    </div>   
               </div>
               <div className='detail_item'>
                   <h2>求职意向</h2>
                   <p>
                   {list.toPropose.map(item=> {return <span>{item}</span>})}
                   </p>
               </div>
               <div className='detail_item'>
                    <h2>期望薪资</h2>
                    <p>{list.salary}</p>
               </div>
               <div className='detail_item'>
                <h2>教育经理</h2>
                <Timeline>
                {
                    list.schollArr.map(item=>{
                       return <Timeline.Item>
                        <div>
                            <h3>{item.time}</h3>
                            <p>{item.scholl}</p> 
                            <p>{item.skill}</p>  
                        </div>
                    </Timeline.Item>
                    })
                }  
                </Timeline>
               </div>
               <div className='detail_item'>
               <h2>实习经历</h2>
                <Timeline>
                {
                    list.arr.map(item=>{
                       return  <Timeline.Item>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p> 
                </Timeline.Item>})
                }
                   
                </Timeline>
               </div>
               <div className='detail_item'>
                <h2>我的荣誉</h2>
                { list.oneArr.map(item=>{
   
                   return   <div className='item_skill'>
                    <p>{item.title}</p> 
                    <p><span>成绩{item.code}</span><span>{item.time}</span></p> 
                    </div>})
            }
            </div>
               <div  className='detail_item'>
                <h2>自我评价</h2>
                <p>{list.mySelf}</p>
               </div>
           </div>
        )
}
}

