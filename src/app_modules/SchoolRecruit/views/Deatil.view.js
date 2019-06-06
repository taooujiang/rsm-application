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
	Icon,message
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
import moment from 'moment'
import Api from '../api'

const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;

function toStrings(val) {
	return val + ""
}

function translateDic(type, value) {
	return DictUtils.getDictLabelByValue(type, value) || ""
}
function translateToNow(timeStr) {
    return timeStr == "9999-01-01" || timeStr == ''
        ? "至今"
        : moment(timeStr).format("YYYY-MM-DD") 
}
function todoStringArr(arr){
    return arr.filter((it, idx) => it != "" && it != undefined && it != undefined + " - " + undefined)
}

@NestedComponent()
export default class PersonInfoDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
            defaultKey: "1",
            ifHasJob:false
		}
	}
	static childContextTypes = {
		viewLibType: PropTypes.number
	}
	componentDidMount() {
		let {actions, router: {
                 params:{id}
			}, location: {
				state
            }} = this.props
            console.log(this.props,"resumeId")
            actions.itemAction({
                id: id,
            })
           new Api().getJobSchoolList().then((res)=>{
               if(res.list.length){
                   this.setState({
                    ifHasJob:true
                   })
               }else{
                  this.setState({
                    ifHasJob:false
                   })    
               }
            })
       
    }
    mesFun(){
        message.warning('请到职位管理中开启校招职位!',5)
    }
	componentWillReceiveProps(nextProps) {
		let {actions,  router: {
            params:{id}
       }, reduce,  location: {
				state
			}} = this.props;
		// if (JSON.stringify(nextProps.router.params) !== JSON.stringify(this.props.router.params)) {
		// 	actions.itemAction({
		// 		id: nextProps.router.params.id
		// 	})
		// }
		// if (JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)) {
		// 	if (nextProps.location.state && nextProps.location.state.key == "reload") {
		// 		setTimeout(() => {
		// 			actions.itemAction({
		// 				id: id,
		// 			})
		// 		}, 1000)
		// 	}
		// }
	}

    render() {
        console.log(this.props,"===detail this.props")
        const {reduce:{detailList}} =this.props
		return (
           <div className='schoolRecruitDetail'>
           {
               detailList  ? 
                   <div>
                    <div className='detail_header'>
                        <div className='headerItem'>
                            <h1>{detailList.name}&nbsp;<Icon style={{verticalAlign: 'baseline',color:'#F27F7D'}} type={DictUtils.getDictLabelByValue('sex',detailList.gender) == '女' ? 'icon-nvsheng' :'icon-nansheng'} />   </h1>
                            {/* inviteStatus:0 (未投递) 1(已发送) 2(已查看) 3(已投递) */}
                            {detailList.deliveryStatus != 0  ?
                              <Button type="primary" disabled={true}> 已投递</Button>
                             :
                                this.state.ifHasJob ? 
                                <SmartLink  to={{
                                    pathname: 'toSend',
                                    state: {
                                        orgin: this.props.pathname
                                    }
                                }}><Button type="primary"> {detailList.isInvited == 0 ? '邀请投递' :'再次邀请'}</Button></SmartLink>
                                :
                                <Button onClick={this.mesFun}  type="primary"> {detailList.isInvited == 0 ? '邀请投递' :'再次邀请'}</Button>
                                
                             }
                        </div>
                        <div className='Item'>{todoStringArr([detailList.school,DictUtils.getDictLabelByValue('education',detailList.degree)]).join(' | ') }</div>
                        <div className='headerItem'>
                            <div>
                                <p><Icon type="icon-dianhua" />&#x3000;{detailList.mobilephone}</p>
                                {detailList.wechat && <p><Icon type="icon-weixin"/>&#x3000;{detailList.wechat}</p>}
                                {detailList.email && <p><Icon type="mail" />&#x3000;{detailList.email}</p>}
                            </div>
                            <img className='logoImg' src={detailList.headUrl}  />
                        </div>   
                    </div>
                    {
                        detailList.expectedJobTitle ?
                        <div className='detail_item'>
                            <h3>求职意向</h3>
                            <p>{detailList.expectedJobTitle}
                                {/* //    {detailList.toPropose.map(item=> {return <span>{item}</span>})} */}
                            </p>
                        </div>
                        : null
                    }
                    
                    <div className='detail_item'>
                        <h3>期望薪资</h3>
                        <p>
                            { todoStringArr([detailList.expectedSalaryLower,detailList.expectedSalaryUpper]).length
                               ? todoStringArr([detailList.expectedSalaryLower,detailList.expectedSalaryUpper]).join(' - ') + '元'
                               :'面议'
                            }
                        </p>
                    </div>
                    {
                        detailList.educations && detailList.educations.length ?
                        <div className='detail_item'>
                            <h3>教育经历</h3>
                            <Timeline pending={false} pendingDot={<span>6</span>}>
                            {
                                detailList.educations.map(item=>{
                                    return <Timeline.Item>
                                    <div>
                                    {todoStringArr([item.duringStart,translateToNow(item.duringEnd)]) && <h4 className='tipTitle' >{todoStringArr([item.duringStart,translateToNow(item.duringEnd)]).join(' ~ ')}</h4>}
                                        {/* {item.duringEnd && <h4 style={ {margin: '14px 10px 12px 0'}}>{item.duringEnd  + '毕业'}</h4>}   */}
                                        {item.school && <h4>{item.school}</h4> }
                                        { todoStringArr([DictUtils.getDictLabelByValue('education',item.degree),item.major]) ?
                                           <p className='lastTextStyle'> {todoStringArr([DictUtils.getDictLabelByValue('education',item.degree),item.major]).join(' | ') }</p>  
                                           : null
                                        }
                                        
                                    </div>
                                </Timeline.Item>
                                })
                            }  
                            </Timeline>
                        </div>
                        :null
                    }
                    {
                      detailList.internshipJobs && detailList.internshipJobs.length ?
                        <div className='detail_item'>
                            <h3>实习经历</h3>
                            <Timeline pending={true}>{
                                detailList.internshipJobs.map(item=>{
                                        return  <Timeline.Item>
                                        {todoStringArr([item.duringStart,translateToNow(item.duringEnd)]) && <h4 className='tipTitle' >{todoStringArr([item.duringStart,translateToNow(item.duringEnd)]).join(' ~ ')}</h4>}
                                        {todoStringArr([ item.company,item.jobTitle]) && <h4> {todoStringArr([ item.company,item.jobTitle]).join(' | ')} </h4>}
                                        {item.jobContent && <p className='lastTextStyle'>职责:  {item.jobContent} </p> }
                                </Timeline.Item>})
                            }</Timeline>
                        </div>
                        :null

                    }
                    {
                        detailList.honours && detailList.honours.length ?
                        <div className='detail_item'>
                            <h3>我的荣誉</h3>
                            { detailList.honours.map(item=>{
                                return   <div className='item_skill'>
                                {item.title && <h4>{item.title}</h4>}
                                {
                                  item.score ||  item.getDate ?
                                    <p className='lastTextStyle'>
                                        {item.score && <span>成绩 {item.score} </span>}
                                        {item.getDate &&  <span>{item.getDate}</span>} 
                                    </p> 
                                    :null
                                }
                               
                                </div>})
                            }
                        </div>
                        :null
                    }
                 
                {
                   detailList.selfEvaluation ?
                   <div  className='detail_item'>
                        <h3>自我评价</h3>
                        <p className='lastTextStyle'>{detailList.selfEvaluation}</p>
                    </div>
                    : null
                }
                
            </div>
          : null
           }
           
              
           </div>
        )
}
}

