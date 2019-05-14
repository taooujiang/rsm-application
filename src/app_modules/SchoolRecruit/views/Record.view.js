import React, {Component, PropTypes} from 'react'
import {
  Button,
  Input,
  Table,
  DatePicker,
  Select,
  Modal,
  Menu,
  Radio,
  Card,
  message,
  Dropdown,
  Icon,
} from 'antd'
import SmartLink from 'app/components/SmartLink'
import PageView from 'app/components/Page'
// import CalendarView from './Calendar.view'
import {Layout,Fixed,Pane} from 'app/components/Layout'
import AdvancedSearchForm from 'app/components/AdvancedSearch'
import DataTable from 'app/components/DataTable'
import ButtonGroupExt from 'app/components/ButtonGroupExt'
import CalendarPicker from 'app/components/CalendarPicker'
import Permission from 'app/components/Permission'
import InterviewType from 'app/components/TableRow/Interview'
import NestedComponent from 'app/decorators/NestedComponent'
import DictUtils from 'app/utils/DictUtils'
import moment from 'moment'
import PersonInfoShow from 'app/components/TableRow/Resume'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option
const {RangePicker} = DatePicker;

@NestedComponent()
export default class RecordListView extends PageView {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let {actions,router,children} = this.props;
    let params = {status:1}
    //console.log("componentDidMount")
    // 
    actions.listAction(params)
     actions.listRealAction(params)
    //筛选的tab菜单
     actions.listCountAction(params)
  }
  componentWillReceiveProps(nextProps){
    let {actions} = this.props
    if(this.props.reduce.params !== nextProps.reduce.params){
      let {actions,router,children} = this.props;
      actions.listRealAction(nextProps.reduce.params)
      actions.listCountAction(nextProps.reduce.params)
    }
    if(JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)){
      if(nextProps.location.state && nextProps.location.state.key=="reload"){
        actions.listAction(nextProps.reduce.params)
        actions.listCountAction(nextProps.reduce.params)
      }
    }
  }
  handlerMenu(resumeId,id,name,item,actionType){
    let { actions,router } = this.props
    actions[actionType.key].call(this,router,resumeId,id,name,item)
  }
  handleCallPhone(number,resumeId,name,type){
      if(!number){
          message.info("号码为空！")
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
      // console.log(callOutJsonStr)
      global.invokeMethod('OnCallJson',callOutJsonStr)
  }
  renderToolbar() {
    return null
  }
  handleFilter(values){
    // console.log(values)
    // let {target:{value}} = e
    let {actions} = this.props
    // console.log(values)
    actions.listAction(values)
  }
  changes(values){
    let {actions} = this.props
    let {target:{value}} = values
    let reset = {
      notes:undefined,
      current:undefined,
      pageSize:undefined,
      pageSizeOptions:undefined,
      showSizeChanger:undefined,
      showTotal:undefined,
      total:undefined
    }
    actions.listAction({status:value,...reset})
  }
  renderOptions(it){
    return (
      <RadioButton value={it.timeType}>
        <span>{it.describe}</span>
        <span className="count">{it.amount}</span>
      </RadioButton>
    )
  }
  renderTypeFilter(){
    let {reduce:{listCount}} = this.props
    return (
      <AdvancedSearchForm classNames="radioGroupResetFormItem" autoSubmitForm={false} isSearchBtnHide={true} >
        <RadioGroup className="interviewRadio radioGroupReset" onChange={this.changes.bind(this)} name="status" fetch={listCount} renderItem={this.renderOptions.bind(this)} />
      </AdvancedSearchForm>
    )
  }

  renderTableList() {
    let that=this;
    let {reduce,items} = this.props
    let {spins:{tableSpin},key,page,params:{status},list} = reduce
    let pathname = this.props.location.pathname
    // let list = [...reduce.list.values()]
    console.log(this.props,"===this.props")
    // 已发送
    const sendTabColumns=[
      {
        title: "基本信息",
        key: "ownerName",
        width: 350,
        dataIndex: "ownerName",
        render: (ownerName, row) => <PersonInfoShow item={row} pathname={pathname}/>
      }, {
        title: "邀请时间",
        key: "interviewTime",
        width: 200,
        dataIndex: "interviewTime",
        // render:(val,row)=>{
        //   let {mobilephone,resumeId,name} = row
        //   return (
        //     <div>
        //       <SmartLink to={{pathname:`${resumeId}/detail`,state:{orgin:that.props.pathname}}}><span style={{marginRight:10}}>{val}</span></SmartLink>
        //       {mobilephone ? <span onClick={that.handleCallPhone.bind(that,mobilephone,resumeId,name,2)} style={{cursor:"pointer"}}><Icon type="phone"/><span>{mobilephone}</span></span> : null}
        //     </div>
        //   )
        // }
      },{
        title: "邀请投递职位",
        key: "dept",
        dataIndex: "dept",
        width: 150,
      },{
          title: "邀请状态",
          key: "status",
          dataIndex: "status",
          width: 150,
          // render:(val,row)=>{
          //     return this.renderRowOption(row)
          // }
      }
    ]
    // 已查看
    const searchTabColumns=[
      {
        title: "基本信息",
        key: "ownerName",
        width: 450,
        dataIndex: "ownerName",
        render: (ownerName, row) => <PersonInfoShow item={row} pathname={pathname}/>
      }, {
        title: "邀请时间",
        key: "interviewTime",
        // width: 200,
        dataIndex: "interviewTime",
        // render:(val,row)=>{
        //   let {mobilephone,resumeId,name} = row
        //   return (
        //     <div>
        //       <SmartLink to={{pathname:`${resumeId}/detail`,state:{orgin:that.props.pathname}}}><span style={{marginRight:10}}>{val}</span></SmartLink>
        //       {mobilephone ? <span onClick={that.handleCallPhone.bind(that,mobilephone,resumeId,name,2)} style={{cursor:"pointer"}}><Icon type="phone"/><span>{mobilephone}</span></span> : null}
        //     </div>
        //   )
        // }
      },{
        title: "投递时间",
        key: "deliveryTime",
        dataIndex: "deliveryTime",
        // width: 150,
      },{
          title: "投递职位",
          key: "dept",
          dataIndex: "dept",
          // width: 150,
          // render:(val,row)=>{
          //     return this.renderRowOption(row)
          // }
      }
    ]
    
    const tableConfColumnsList={
          0:sendTabColumns,
          1:sendTabColumns,
          2:searchTabColumns,
          3:searchTabColumns,
    }
    let tableConf = {
      loading: tableSpin,
        title:function(){
            return null
        },
      onChange:this.onChange.bind(this),
      rowKey: key,
      dataSource:[...list],
      columns: tableConfColumnsList[status]
    }
    return (<DataTable style={{
      width: '100%'
    }} {...tableConf}  page={page}/>)
  }

  handleFeedBack(resumeId,id){
    let {actions,router} = this.props
    actions.feedbackAction(router,id,resumeId)
  }

  handleChangeFeed(item){
    let {actions,router} = this.props
    // console.log(111111,item,item)
    /*分两个item传入  第一个面试中要用item的email 和mobilephone 第二个为面试信息*/
    actions.feedAction(router,item,item,item.resumeId)
  }

  handleUrge(id){
    let {actions,reduce:{params,page}} = this.props
    actions.urgeFeedbackAction({id:id}).then(()=>{
      actions.listAction({...params,...page})
    })
  }

  /*
  Integer statusStr候选人状态：1--待面试  2--未反馈 3--已反馈4--未通过 5--已通过 6--已取消
  Integer isFeedback是否填写面试反馈 0未填写 1 已开始填写 2以完成
  Integer isUrge是否催促 0未催促  1 已催促
  */
  renderRowOption(row){
    let {statusStr,isFeedback,isUrge,resumeId,lastInterviewPlanId,id,type,interviewTime} = row
    /*已取消*/
    if(statusStr == 6){
      return null
    }
    /*待面试*/
    if(statusStr == 1){
      return (
        <Button.Group style={{whiteSpace:"inherit"}}>
          <Button onClick={this.handleChangeFeed.bind(this,row)}>修改面试</Button>
          <Button onClick={this.handleFeedBack.bind(this,resumeId,id)}>填写反馈</Button>
        </Button.Group>
      )
    }
    /*已经反馈*/
    if(isFeedback == 2){
      return <Button onClick={this.handleFeedBack.bind(this,resumeId,id)}>查看反馈</Button>
    }


    /*未反馈*/
    if(isFeedback != 2 && statusStr != 8){
      return (
        <Button.Group style={{whiteSpace:"inherit"}}>
          <Button onClick={this.handleFeedBack.bind(this,resumeId,id)}>填写反馈</Button>
          {isUrge ? null : <Button onClick={this.handleUrge.bind(this,id)}>催促反馈</Button> }
        </Button.Group>
      )
    }
  }

  render() {
    let {children} = this.props
    //模版没有好的解决方案，暂时这样处理
      return (
          <Card type="inner" title={this.renderTypeFilter()}>
                {this.renderTableList()}
          </Card>
      )

  }
}
