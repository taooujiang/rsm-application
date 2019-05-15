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
    // let {target:{value}} = e
    let {actions} = this.props
    // console.log(values)
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
        <AdvancedSearchForm  autoSubmitForm={false}   filterSubmitHandler={this.handleFilter.bind(this)} >
            <Select name="job" label="期望职位" placeholder="请选择" fetch={`${APP_SERVER}/authRole/getRoleInfo`} renderItem={this.renderSelectOption} style={{ width: '320px' }} />
            <Input name="name" label="毕业院校" style={{ width: '320px' }}  />
            <Select name="education1" label="最低学历" placeholder="请选择" fetch={DictUtils.getDictByType("education")} renderItem={this.renderSelectOption} style={{ width: '120px' }} />
            <Select name="education2" label="" placeholder="请选择" fetch={DictUtils.getDictByType("education")} renderItem={this.renderRoleOption} style={{ width: '120px' }} />
            <Input name="skill" label="就读专业" style={{ width: '320px' }}  />
            <Select name="sex" label="性别&#x3000;&#x3000;" placeholder="请选择" fetch={DictUtils.getDictByType("sex")} renderItem={this.renderSelectOption} style={{ width: '320px' }} />
            <Select name="schooll" label="院校类别" placeholder="请选择" defaultValue={1} fetch={[{ keyName: '禁用', keyValue: 0 }, { keyName: '启用', keyValue: 1 }]} renderItem={this.renderSelectOption} style={{ width: '268px' }} />
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
          key: "deliveryTime",
          width: 200,
          dataIndex: "deliveryTime",
          render:(val,row)=>moment(val).format("YYYY-MM-DD")
        },{
          title: "最近应聘职位",
          key: "dept",
          dataIndex: "dept",
          width: 150,
        },{
            title: "投递情况",
            key: "status",
            dataIndex: "status",
            width: 150,
            render:(val,row)=>{
              let style =   row.channel == '1' ?  {color:'#D67794'} :  (row.channel == '2' ?  {color:'#6BD0BE'} :  {color:'#DA947E'})
              return   <span style={{...style,fontSize:'15px'}}>{row.name}</span>
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
          <Card type="inner"  className='schoolRecruitForm'   extra={this.renderTypeFilter()} >
                {this.renderTableList()}
          </Card>
      )

  }
}
