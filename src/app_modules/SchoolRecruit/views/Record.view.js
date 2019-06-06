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
import NestedComponent from 'app/decorators/NestedComponent'
import DictUtils from 'app/utils/DictUtils'
import moment from 'moment'
import SchoolInfo from 'app/components/TableRow/SchoolInfo'
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option

@NestedComponent()
export default class RecordListView extends PageView {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let {actions,router,children} = this.props;
    let params = {inviteStatus:1}
    actions.listAction(params)//参数
    actions.inviteListRealAction(params)//tab数据
    actions.listCountAction(params)//筛选的头部菜单
  }
  componentWillReceiveProps(nextProps){
    let {actions} = this.props
    if(this.props.reduce.params !== nextProps.reduce.params){
      let {actions,router,children} = this.props;
      actions.inviteListRealAction(nextProps.reduce.params)
      actions.listCountAction(nextProps.reduce.params)
    }
    // if(JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)){
    //   if(nextProps.location.state && nextProps.location.state.key=="reload"){
    //     actions.listAction(nextProps.reduce.params)
    //     actions.listCountAction(nextProps.reduce.params)
    //   }
    // }
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
    actions.listAction({inviteStatus:value,...reset})
  }
  renderTypeFilter(){
    let {reduce:{listCount}} = this.props
    return (<AdvancedSearchForm  classNames="radioGroupResetFormItem" autoSubmitForm={false} isSearchBtnHide={true} >
      {/*  name="" onChange={this.handleRadioChange.bind(this)} defaultValue={params && params.status || 0} */}
        <RadioGroup className="interviewRadio radioGroupReset" onChange={this.changes.bind(this)} name="inviteStatus" defaultValue={listCount || 1}>
          <RadioButton value="1">已发送<span className="count">{listCount.yfs}</span></RadioButton>
          <RadioButton value="2">已查看<span className="count">{listCount.yck}</span></RadioButton>
          <RadioButton value="3">已投递<span className="count">{listCount.ytd}</span></RadioButton>
          </RadioGroup>
      </AdvancedSearchForm>)
  }

  renderTableList() {
    let that=this;
    let {reduce,items} = this.props
    let {spins:{tableSpin},key,page,params:{inviteStatus},list} = reduce
    let pathname = this.props.location.pathname
    // let list = [...reduce.list.values()]
    console.log(this.props,"===this.props")
    // 已发送 // 已查看
    const sendTabColumns=[
      {
        title: "基本信息",
        key: "name",
        width: 450,
        dataIndex: "name",
        render: (name, row) =><SchoolInfo item={row}  pathname={pathname} />   
      }, {
        title: "邀请时间",
        key: "inputTime",
        width: 200,
        dataIndex: "inputTime",
        render:(val,row)=>moment(val).format("YYYY-MM-DD")
      },{
        title: "邀请投递职位",
        key: "jobName",
        dataIndex: "jobName",
        width: 150,
      },{
          title: "邀请状态",
          key: "inviteStatus",
          dataIndex: "inviteStatus",
          width: 150,
          render:(val,row)=>{
            let arr=[
              {status:0,statusText:'未投递',style:{color:'#ef6392'}},
              {status:1,statusText:'已发送',style:{color:'#13c6aa'}},
              {status:2,statusText:'已查看',style:{color:'#2299ee'}},
              {status:3,statusText:'已投递',style:{color:'#fa744e'}}
            ]
            let style =   row.inviteStatus == '1' ?  {color:'#ef6392'} :  (row.inviteStatus == '2' ?  {color:'#6BD0BE'} :  {color:'#DA947E'})
            return   <span style={arr[row.inviteStatus].style}>{arr[row.inviteStatus].statusText}</span>
          }
      }
    ]
    // 已投递
    const searchTabColumns=[
      {
        title: "基本信息",
        key: "name",
        width: 450,
        dataIndex: "name",
        render: (name, row) =>{
          let warnSign =row.inviteStatus == 3 ? true : false
          return <SchoolInfo item={row}  pathname={pathname} isWarning={true}  warnText='请到候选人管理中查看！' />   
        } 
      }, {
        title: "邀请时间",
        key: "inputTime",
        width: 200,
        dataIndex: "inputTime",
        render:(val,row)=>moment(val).format("YYYY-MM-DD")
      },{
        title: "投递时间",
        key: "inviteTime",
        dataIndex: "inviteTime",
        width: 150,
        render:(val,row)=>moment(val).format("YYYY-MM-DD")
      },{
          title: "投递职位",
          key: "jobName",
          width: 150,
          dataIndex: "jobName",
      }
    ]
    const tableConfColumnsList={
          0:sendTabColumns,
          1:sendTabColumns,
          2:sendTabColumns,
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
      columns: tableConfColumnsList[inviteStatus]
    }
    return (<DataTable style={{
      width: '100%'
    }} {...tableConf}  page={page}/>)
  }
  render() {
    let {children} = this.props
      return (
          <Card type="inner" title={this.renderTypeFilter()}>
                {this.renderTableList()}
          </Card>
      )

  }
}
