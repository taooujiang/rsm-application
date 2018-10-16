
import React,{Component} from 'react'
import {
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
    Icon,
} from 'antd'
import {Link} from 'react-router'
import {routerActions, push, replace} from 'react-router-redux'
import WrapperComponent from "app/decorators/WrapperComponent"
import NestedComponent from 'app/decorators/NestedComponent'
import PersonInfo,{PersonTabBaseInfo,PersonOffer,PersonOption,PersonRemarks,PersonCommunitcate,PersonOptionRecord,PersonFeedRecord,ExtraInformation} from 'app/components/PersonInfo'
import DictUtils from 'app-utils/DictUtils'
import classnames from 'classnames'
import { permissionStyle } from "app/utils/ConfigUtils";
import SmartLink from 'app/components/SmartLink'
import Layout,{Fixed,Pane} from 'app/components/Layout'

const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;

function translateOrgin(state){
  if(state && state.orgin){
    let {orgin} = state
    if(orgin == "/resume/list"){
      return {viewLibType:1}
    }else{
      return {}
    }
  }else{
    return {}
  }
  /*暂时只做对候选人的切换*/
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

class InfoItem extends Component{
  render(){
    let {icon,text}= this.props
    return text ? (
      <span className="info-item" {...this.props}>
        <Icon type={icon}/>
        {text}
      </span>
    ) : null
  }
}

function toStrings(val){
  return val+""
}

function translateDic(type,value){
  return DictUtils.getDictLabelByValue(type,value) || ""
}

@NestedComponent()
export default class PersonInfoDetail extends Component{
  render(){
    let {location:{pathname},params:{type}} = this.props
    if(pathname.indexOf("distrib") >= 0){//待分配
        return <ResumeDetail {...this.props} detailType={1}/>
    }else if(pathname.indexOf("resume/list") >= 0||pathname.indexOf("log/1") >= 0||pathname.indexOf("report/remark") >= 0){//简历
        return <ResumeDetail {...this.props} detailType={2}/>
    }else if(pathname.indexOf("elite") >= 0 && type == 3){//人才
        return <ResumeDetail {...this.props} detailType={3}/>
    }else if(pathname.indexOf("elite") >= 0 && type == 4){//诚信
        return <ResumeDetail {...this.props} detailType={4}/>
    }else{
      return <ResumeDetail {...this.props} detailType={2}/>
    }
  }
}


class ResumeDetail extends Component{

    constructor(props) {
        super(props);
        this.state={
          defaultKey:"1"
        }
    }
    componentDidMount(){
      let {actions,params:{resumeId},location:{state}} = this.props
      let viewLib = translateOrgin(state)
      actions.itemAction({id:resumeId,...viewLib})
      console.log(123123123,this.props)
    }

    componentWillReceiveProps(nextProps){
        let {actions,router,reduce,params:{resumeId},location:{state}} = this.props;
        if(JSON.stringify(nextProps.params) !== JSON.stringify(this.props.params)){
          let viewLib = translateOrgin(nextProps.location.state)
          actions.itemAction({id:nextProps.params.resumeId,...viewLib})
        }
        if(JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)){
          if(nextProps.location.state && nextProps.location.state.key=="reload"){
            let viewLib = translateOrgin(nextProps.location.state)
            setTimeout(()=>{actions.itemAction({id:resumeId,...viewLib})},1000)
          }
        }
    }

    handleTabChange(value){
      this.setState({
        defaultKey:value
      })
    }

    getToRemark(){
      this.setState({
        defaultKey:"4"
      })
    }

    renderTypeButton(){
      let { item ,item:{libType,nextId},dispatch, actions,router , location:{state}} = this.props
      let detailType = this.translateLib(libType)
      let type = "resume"
      let nextPath = nextId ? router.getCurrentLocation().pathname.replace(/\/\S{32}\/detail/,`/${nextId}/detail`) : state&&state.orgin
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
      return <PersonOption item={item} actions={actions} dispatch={dispatch} router={router} type={type} callback={this.getToRemark.bind(this)} orginJson={{nextPath:nextPath,viewLibType:translateOrgin(state).viewLibType,orgin:state&&state.orgin}}/>
    }
    translateLib(lib){
      if(lib == 1){
        return 2
      }else if(lib == 2){
        return 1
      }else{
        return lib
      }
    }

    handleClickLeft(){
      let {location,router,dispatch,item:{prevId,nextId}} = this.props
      if(prevId){
        let currLocation = router.getCurrentLocation().pathname.replace(/\/\S{32}\/detail/,`/${prevId}/detail`)
        let newpath = {
          pathname:currLocation,
          state:location.state
        }
        dispatch(routerActions.push(newpath))
      }
    }
    handleClickRight(){
      let {location,router,dispatch,item:{prevId,nextId}} = this.props
      if(nextId){
        let currLocation = router.getCurrentLocation().pathname.replace(/\/\S{32}\/detail/,`/${nextId}/detail`)
        let newpath = {
          pathname:currLocation,
          state:location.state
        }
        dispatch(routerActions.push(newpath))
      }
    }

  render (){
    let {dispatch ,actions,location,item,router,reduce:{baseInfo,feedInfo,remarks,options,offer,commitcate,information},params:{resumeId}} = this.props
    //console.log(resumeId,'routerrouter')
    let {name,libType,filingReason,authorization,prevId,nextId} = item
    let detailType = this.translateLib(libType)
    return (
      <PersonInfo headNode={<PersonInfoPanelHead info={item} router={router} location={location} actions={actions} dispatch={dispatch} detailType={detailType} filingReason={filingReason}/>}>
        <div className={classnames("arrowLeft",prevId?"":"disabled")} onClick={this.handleClickLeft.bind(this)}><Icon type="left" theme="outlined" /></div>
        <div className={classnames("arrowRight",nextId?"":"disabled")} onClick={this.handleClickRight.bind(this)}><Icon type="right" theme="outlined" /></div>
        <div className="person-info-body">
          <Layout direction="row">
            <Pane style={{flexDirection:"column",width:"50%"}}>
              <Tabs animated={false} className="personInfoTabs" activeKey={this.state.defaultKey} onTabClick={this.handleTabChange.bind(this)}>
                <TabPane tab="基本信息" key="1">
                  <PersonTabBaseInfo actions={actions} id={resumeId} info={baseInfo} detailType={detailType}/>
                </TabPane>
                <TabPane tab="面试" key="2">
                  <PersonFeedRecord authorization={authorization} detailType={detailType} location={location} actions={actions} router={router} resumeId={resumeId} info={feedInfo} item={item}/>
                </TabPane>
                <TabPane tab="offer" key="3">
                  <PersonOffer authorization={authorization} actions={actions} resumeId={resumeId} detailType={detailType} info={offer} item={item}/>
                </TabPane>
                <TabPane tab="备注" key="4">
                  <PersonRemarks actions={actions} resumeId={resumeId} info={remarks} item={item}/>
                </TabPane>
                <TabPane tab="附加信息" key="5">
                  <ExtraInformation actions={actions} resumeId={resumeId} info={information} item={item} />
                </TabPane>
                <TabPane tab="操作记录" key="6">
                  <PersonOptionRecord actions={actions} location={location} resumeId={resumeId} info={options}/>
                </TabPane>
                <TabPane tab="沟通记录" key="7">
                  <PersonCommunitcate actions={actions} name={name} resumeId={resumeId} info={commitcate}/>
                </TabPane>
              </Tabs>
            </Pane>
            <Fixed style={{width:'300px'}}>
              {this.renderTypeButton()}
            </Fixed>
          </Layout>
        </div>
      </PersonInfo>
    )
  }
}

class PersonInfoPanelHead extends Component{
  handleDelete(info){
    let {actions , router ,location:{state}} = this.props
    let {id ,nextId } = info
    let nextPath = nextId ? router.getCurrentLocation().pathname.replace(/\/\S{32}\/detail/,`/${nextId}/detail`) : state&&state.orgin
    let orginJson = {
      nextPath:nextPath,
      viewLibType:translateOrgin(state).viewLibType,
      orgin:state&&state.orgin
    }
    /*留坑一枚  删除操作*/
    actions.deleteAction(router,[id],[info],orginJson)
  }
  handleChange(value){
    // console.log(this.props)
    let {router,dispatch} = this.props
    dispatch(routerActions.push(router.getCurrentLocation().pathname.replace(/\/\S{32}\/detail/,`/${value}/detail`)))
  }
  renderSelectOption(){
    let {info} = this.props
    if(info){
      let list = info.resumes ? info.resumes : []
      //console.log(list,info.id)
      return (
        <Select style={{width:220}} value={toStrings(info.id)} onChange={this.handleChange.bind(this)}>
          {list.map((it,idx)=>{
            return <Select.Option value={toStrings(it.id)} key={idx} >{`${it.jobTitle} ${translateDic("channel",it.channel)} ${translateDic("resume",it.resumeType)} ${translateDic("resumeplace",it.libType)}`}</Select.Option>
          })}
        </Select>
      )
    }
  }
  handleCallPhone(number,resumeId,name,type){
      if(!number){
          message.info("号码为空！",5)
          return false
      }
      /*type  == define1
      * define1  1 员工
      * define1  2 简历
      * define1  3 人才
      *
      * */
      let  callOutJson ={
          phone:number,
          busId:resumeId,
          candName:name,
          inputAcc:"",
          define1:type+"",
          define3:"",
          IsContact:"0"
      };
      let  callOutJsonStr = JSON.stringify({callOutJson});
      //console.log(callOutJsonStr)
      global.invokeMethod('OnCallJson',callOutJsonStr)
  }
  render(){
    let {info,detailType,filingReason} = this.props
    let {isLock , havaSame,isFollowRemind} = info
    //console.log("isLock",isLock,"havaSame",havaSame,"isFollowRemind",isFollowRemind)
    let userInfoText = ""
    if(translateDic("sex",info.sex)&&info.age) userInfoText = `${translateDic("sex",info.sex)} · ${info.age}`
    if(translateDic("sex",info.sex)&&!info.age) userInfoText = `${translateDic("sex",info.sex)}`
    if(!translateDic("sex",info.sex)&&info.age) userInfoText = `${info.age}`

    //console.log(info)
    return (
      <div className="person-info-head">
        <Button className="delete-btn" style={permissionStyle("deleteResume")} onClick={this.handleDelete.bind(this,info)}><Icon type="delete" /></Button>
        <Row gutter={12}>
          <span className="headInfoName">{info.name}</span>
          <span className="hasApply">已申请{info.resumes&&info.resumes.length}个职位</span>
            {this.renderSelectOption()}
            {havaSame ? <Icon type="icon-yisijianli" style={{color:"#e9578a"}}/> : null }
            {isLock ? <Icon type="icon-suoding" style={{color:"#f9744e"}}/> : null }
            {isFollowRemind ? <Icon type="icon-tubiao" style={{color:"#2fc4a4"}}/> : null }
        </Row>
        <Row gutter={12} className="headInfoBottom">
          <InfoItem icon="user" text={userInfoText}/>
          <InfoItem icon="mobile" text={info.mobilephone} onClick={this.handleCallPhone.bind(this,info.mobilephone,info.id,info.name,detailType)}/>
          <InfoItem icon="mail" text={info.email}/>
          <InfoItem icon="clock-circle" text={info.workYear}/>
          <InfoItem icon="book" text={translateDic("education",info.degree)}/>
          <InfoItem icon="environment" text={info.currentAddress}/>
          {detailType==3&&filingReason=="淘汰"?<div className={"redume-bg-eliminate"}></div>:null}
        </Row>
      </div>
    )
  }
}


export {InfoItem,translateDic}
