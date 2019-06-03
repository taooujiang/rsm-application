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
  Form
} from 'antd'
import SmartLink from 'app/components/SmartLink'
import PageView from 'app/components/Page'
import {Layout,Fixed,Pane} from 'app/components/Layout'
import AdvancedSearchForm from 'app/components/AdvancedSearch'
import DataTable from 'app/components/DataTable'
import NestedComponent from 'app/decorators/NestedComponent'
import DictUtils from 'app/utils/DictUtils'
import moment from 'moment'
import SchoolInfo from 'app/components/TableRow/SchoolInfo'
import LinkagePullDown from 'app/components/LinkagePullDown'
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
    actions.listRealAction(params)
  }
  componentWillReceiveProps(nextProps){
    let {actions} = this.props
    if(this.props.reduce.params !== nextProps.reduce.params){
      let {actions,router,children} = this.props;
      actions.listRealAction(nextProps.reduce.params)
    }
    if(JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)){
      if(nextProps.location.state && nextProps.location.state.key=="reload"){
        actions.listRealAction(nextProps.reduce.params)
      }
    }
  }

  handleFilter(values){
    // console.log(values)
    let {actions} = this.props
    actions.listRealAction(values)
  }

  renderSelectOption(data, idx) {
    return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  renderTypeFilter(){
    let {reduce:{listCount}} = this.props
    let keysOption = [
      {
        label: "姓名",
        value: "name"
      },
      {
        label: "用户名",
        value: "account"
      }
    ]
    return (
        <AdvancedSearchForm isCircle={false} autoSubmitForm={false} showConfig={false}  filterSubmitHandler={this.handleFilter.bind(this)} >
            <Input name="expectedJobTitle" label="期望职位" placeholder="请选择" style={{ width: '300px' }} />
            <Input name="school" label="就读院校" style={{ width: '300px' }}  />
            <LinkagePullDown name="degrees" label="最低学历"  style={{ width: '300px' }} options={DictUtils.getDictByType("education")} />
            {/* <Select name="degreeLow" label="最低学历" placeholder="请选择" fetch={DictUtils.getDictByType("education")} renderItem={this.renderSelectOption} style={{ width: '120px' }} />
            <Select name="degreeHeight" label="" placeholder="请选择" fetch={DictUtils.getDictByType("education")} renderItem={this.renderSelectOption} style={{ width: '120px' }} /> */}
            <Input name="marjor" label="就读专业" style={{ width: '300px' }}  />
            <Select name="gender" label="性别&#x3000;&#x3000;" placeholder="不限" fetch={DictUtils.getDictByType("sex")} renderItem={this.renderSelectOption} style={{ width: '300px' }} />
            {/* <Select name="school" label="院校类别" placeholder="请选择" defaultValue={1} fetch={[{ keyName: '禁用', keyValue: 0 }, { keyName: '启用', keyValue: 1 }]} renderItem={this.renderSelectOption} style={{ width: '268px' }} /> */}
        </AdvancedSearchForm>
    )
  }
  renderTableList() {
    let that=this;
    let {reduce,items} = this.props
    let {spins:{tableSpin},key,page,params:{status},list} = reduce
    let pathname = this.props.location.pathname
    // let list = [...reduce.list.values()]
    // .sexStr, item.ageStr, item.education, item.workYear
    console.log(this.props,"===this.props")
    let tableConf = {
      loading: tableSpin,
      title:function(){
            return null
      },
      onChange:this.onChange.bind(this),
      rowKey: key,
      dataSource:[...list],
      columns:[
        {
          title: "基本信息",
          key: "ownerName",
          width: 350,
          dataIndex: "ownerName",
          render: (ownerName, row) => <SchoolInfo item={row} pathname={pathname}/>
        }, {
          title: "更新时间",
          key: "updateTime",
          width: 200,
          dataIndex: "updateTime",
          render:(val,row)=>moment(val).format("YYYY-MM-DD")
        },{
          title: "最近应聘职位",
          key: "expectedJobTitle",
          dataIndex: "expectedJobTitle",
          width: 150,
        },{
            title: "投递情况",
            key: "inviteStatus",
            dataIndex: "inviteStatus",
            width: 150,
            render:(val,row)=>{
              let arr=[
                {status:0,statusText:'未投递',style:{color:'#D67794',fontSize:'15px'}},
                {status:1,statusText:'已发送',style:{color:'#6BD0BE',fontSize:'15px'}},
                {status:2,statusText:'已查看',style:{color:'#DA947E',fontSize:'15px'}},
                {status:3,statusText:'已投递',style:{color:'#DA947E',fontSize:'15px'}}
              ]
              let style =   row.inviteStatus == '1' ?  {color:'#D67794'} :  (row.inviteStatus == '2' ?  {color:'#6BD0BE'} :  {color:'#DA947E'})
              return   <span style={arr[row.inviteStatus].style}>{arr[row.inviteStatus].statusText}</span>
            }
        }
      ]
    }
    return (<DataTable style={{
      width: '100%'
    }} {...tableConf}  page={page}/>)
  }
  render() {
    let {children} = this.props
      return (
          <Card type="inner"  className='schoolRecruitForm' extra={this.renderTypeFilter()} >
                {this.renderTableList()}
          </Card>
      )

  }
}
