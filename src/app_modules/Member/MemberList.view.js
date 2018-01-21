import React, {Component, PropTypes} from 'react'
import {
  Button,
  Input,
  Table,
  Form,
  Dialog,
  Col,
  Row,
  DatePicker,
  Tooltip,
  Select
} from 'antd'
import moment from 'moment';
import {Layout,Fixed,Pane} from 'components/Layout'
import PageView from 'components/Page'
import AdvancedSearchForm from 'components/AdvancedSearch'
import ButtonGroupExt from 'components/ButtonGroupExt'
import CalendarPicker from 'components/CalendarPicker'
import Remote from 'components/Remote'
import MemberFormView from './MemberForm.view'


const Option = Select.Option
const {RangePicker} = DatePicker;

export default class MemberListView extends PageView {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let {actions} = this.props;
    actions.listAction()
    //  actions.menuAction()
  }
  renderSelectOption(data,idx){
    return (<Select.Option value={data.value} key={idx}>{data.label}</Select.Option>)
  }
  renderSearchBar() {
    let {reduce} = this.props
    let params = reduce.params || {}
    let keysOption = [
      {
        label: "成员帐号",
        value: "1"
      }, {
        label: "成员姓名",
        value: "2"
      }, {
        label: "通信号码",
        value: "3"
      }
    ]
    return (
      <AdvancedSearchForm keysOption={keysOption} filterSubmitHandler={this.handleFilter.bind(this)}>
        <Select placeholder="请选择" name="roleId" label="工龄" defaultvalue="工龄" renderItem={this.renderSelectOption} fetch={`${APP_SERVER}/constants/select`} >
          </Select>
        <Select  placeholder="请选择" name="post" label="性别" renderItem={this.renderSelectOption} fetch={`${APP_SERVER}/constants/select2`}>
        </Select>
        <Select name="post" label="学历">
          <Option value="职务">职务</Option>
        </Select>
        <CalendarPicker name="join" label="入职时间" />
        <CalendarPicker name="birthday" label="生日" />
      </AdvancedSearchForm>
    )
  }
  renderTableList() {
    let self = this;
    let {reduce} = this.props
    let {spins:{tableSpin}} = reduce
    let page = reduce.page
    let list = [...reduce.list.values()]

  //  console.log("tableSpin",tableSpin)
    let tableConf = {
      rowKey: "id",
      dataSource: list,
      loading: tableSpin,
      columns: [
        {
          type: 'selection'
        },{
          title: "成员姓名",
          key: "userName",
          dataIndex: "userName",
          width: 120
        }, {
          title: "性别",
          key: "roleName",
          dataIndex: "roleName",
          width: 150,
        }, {
          title: "所在部门",
          key: "groupName",
          dataIndex: "groupName",
          width: 100
        }, {
          title: "入职时间",
          key: "serveTime",
          dataIndex: "serveTime",
          width: 160
        }, {
          title: "职务",
          key: "post",
          dataIndex: "post",
          width: 100
        }, {
          title: "移动电话",
          key: "mobile",
          dataIndex: "mobile",
          width: 160
        }, {
          title: "操作",
          key: "userId",
          dataIndex: "userId",
          width: 120,
          render: (data) => {
            // console.log(data)
            return (
              <ButtonGroupExt onClick={this.handlerMenu}>
                  <Button icon="delete" actionkey="del">删除</Button>
                  <Button icon="edit" actionkey="edit">编辑</Button>
                  <Button icon="plus-circle-o" actionkey="a1">添加</Button>
                  <Button icon="plus-circle-o" actionkey="a2">添加</Button>
                  <Button icon="plus-circle-o" actionkey="a3">添加</Button>
                  <Button icon="plus-circle-o" actionkey="a4">添加</Button>
                  <Button icon="plus-circle-o" actionkey="a5">添加</Button>
              </ButtonGroupExt>
            )
          }
        }
      ]
    }

    return (<Table  {...this.props} {...tableConf}  {...this.mergeTableConfig({pagination:page})} />)
  }
  handlerMenu(actionType){
    console.log(actionType)
  }

  renderToolbar() {
    let {actions} = this.props;
    return (
      <Button.Group>
        <Button type="ghost" icon="plus" onClick={this.handleAddRoute.bind(this)}>添加</Button>
        <Button type="ghost" icon="upload" disabled={this.selectSingle()} onClick={this.handleEditRoute.bind(this, null)}>导入</Button>
        <Button type="ghost" icon="file-excel" disabled={this.selectSingle()} onClick={this.handleEditRoute.bind(this, null)}>导出Excel</Button>
      </Button.Group>
    )
  }
  render() {
    let props = this.props
    return (
      <Layout direction="rows">
        <Pane>
          {this.renderSearchBar()}
          {this.renderToolbar()}
          {this.renderTableList()}
        </Pane>
        {props.children}
      </Layout>
    )
  }
}
