import React, {Component, PropTypes} from 'react'
import {
  Button,
  Input,
  Table,
  Select,
  Modal,
  Menu,
  Dropdown,
  Icon,
} from 'antd'
import PageView from 'components/Page'
import AdvancedSearchForm from 'components/AdvancedSearch'
import ButtonGroupExt from 'components/ButtonGroupExt'
import CalendarPicker from 'components/CalendarPicker'
import Permission from 'components/Permission'
const Option = Select.Option

export default class InterviewListView extends PageView {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let {actions,router} = this.props;
    actions.listAction()
  }
  handleMenuClick(){
    alert("sss")
  }
  // dispatch action
  handlerTableMenu(id,{key}){
    let {actions} = this.props
      //console.log(jobId,key)
      switch (key) {
        case 'interview':
          actions.interviewAction(id)
          break;
        default:
      }
  }
  renderToolbar() {
    return null
  }
  renderSelectOption(data,idx){
    return (<Select.Option value={data.value} key={idx}>{data.label}</Select.Option>)
  }
  renderSearchBar() {
    let {reduce} = this.props
    let keysOption = [
      {
        label: "职业名称",
        value: "jobName"
      }
    ]
    return (
      <AdvancedSearchForm keysOption={keysOption} filterSubmitHandler={this.handleFilter.bind(this)} >
        <CalendarPicker name="time" label="面试时间" />
        <Select name="custTypeId" label="面试官" fetch={`${APP_SERVER}/constants/select`} renderItem={this.renderSelectOption} >
        </Select>
        <Select name="optionlistId" label="面试阶段" fetch={`${APP_SERVER}/constants/select2`} renderItem={this.renderSelectOption}>
        </Select>
        <Select name="abc"  label="拒绝类型" defaultvalue="lucy">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>

      </AdvancedSearchForm>
    )
  }

  renderTableList() {
    let that=this;
    let {reduce} = this.props
    let {spins:{tableSpin},page} = reduce
    let list = [...reduce.list.values()]
    let tableConf = {
      loading: tableSpin,
      rowKey: 'jobId',
      columns: [
        {
          type: 'selection'
        }, {
          title: "职位名称",
          key: "jobName",
          width: 120,
          dataIndex: "jobName",
          sorter: (a, b) => parseInt(a.nextActionDate, 10) - parseInt(b.nextActionDate, 10)
        }, {
          title: "招聘人数",
          key: "jobNum",
          width: 120,
          dataIndex: "jobNum"
        }, {
          title: "渠道",
          key: "jobSource",
          dataIndex: "jobSource",
          width: 170,
          sorter: (a, b) => a.showLastActionDate.length - b.showLastActionDate.length
        }, {
          title: "状态",
          key: "status",
          dataIndex: "status",
          width: 120
        }, {
          title: "刷新时间",
          key: "refrshDate",
          dataIndex: "refrshDate",
          width: 180
        }, {
          title: "操作",
          dataIndex: "jobId",
          render: (id) => {
            return (
              <ButtonGroupExt onClick={(args)=>this.handlerTableMenu(id,args)}>
                  <Button icon="delete" actionKey="interview">面试</Button>
                  <Button icon="edit" actionKey="offer">offer</Button>
                  <Button icon="plus-circle-o" actionKey="join">入职</Button>
                  <Button icon="plus-circle-o" actionKey="a1">拒绝</Button>
                  <Button icon="plus-circle-o" actionKey="a2">面试反馈</Button>
                  <Button icon="plus-circle-o" actionKey="res">加入人才</Button>
              </ButtonGroupExt>
            )
          }
        }
      ]
    }
    return (<Table style={{
      width: '100%'
    }} {...tableConf} dataSource={list}  {...this.mergeTableConfig({pagination:page})}/>)
  }
  render() {
    let {children} = this.props
    return (
      <div>
        {this.renderSearchBar()}
        {this.renderTableList()}
      </div>
    )
  }
}
