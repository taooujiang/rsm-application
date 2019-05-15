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
    let params = {status:1}
    actions.listAction(params)//参数
    actions.listRealAction(params)//tab数据
    actions.listCountAction(params)//筛选的头部菜单
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
        render: (ownerName, row) =><SchoolInfo item={row} pathname={pathname}/>
      }, {
        title: "邀请时间",
        key: "deliveryTime",
        width: 200,
        dataIndex: "deliveryTime",
        render:(val,row)=>moment(val).format("YYYY-MM-DD")
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
          render:(val,row)=>{
            let style =   row.channel == '1' ?  {color:'#D67794'} :  (row.channel == '2' ?  {color:'#6BD0BE'} :  {color:'#DA947E'})
            return   <span style={{...style,fontSize:'15px'}}>{row.name}</span>
          }
      }
    ]
    // 已查看
    const searchTabColumns=[
      {
        title: "基本信息",
        key: "ownerName",
        width: 450,
        dataIndex: "ownerName",
        render: (ownerName, row) => <SchoolInfo item={row} pathname={pathname}/>
      }, {
        title: "邀请时间",
        key: "interviewTime",
        dataIndex: "interviewTime",
        render:(val,row)=>moment(val).format("YYYY-MM-DD")
      },{
        title: "投递时间",
        key: "deliveryTime",
        dataIndex: "deliveryTime",
        render:(val,row)=>moment(val).format("YYYY-MM-DD")
      },{
          title: "投递职位",
          key: "dept",
          dataIndex: "dept",
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
  render() {
    let {children} = this.props
      return (
          <Card type="inner" title={this.renderTypeFilter()}>
                {this.renderTableList()}
          </Card>
      )

  }
}
