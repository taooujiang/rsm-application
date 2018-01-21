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
import moment from 'moment';

import PageView from 'components/Page'
import AdvancedSearchForm from 'components/AdvancedSearch'
import TagSelect from 'components/TagSelect'
import Permission from 'components/Permission'
import DataTable from 'components/DataTable'
const Option = Select.Option

export default class JobListView extends PageView {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let {actions,router} = this.props;
    actions.listAction()
    console.log(router)
    //actions.menuAction()
  }
  handleMenuClick(){
    alert("sss")
  }
  renderToolbar() {
    let {actions} = this.props;
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1" ><Icon type="taobao" />智联招聘</Menu.Item>
        <Menu.Item key="2" ><Icon type="gitlab" />前程无忧</Menu.Item>
        <Menu.Item key="3"><Icon type="qq" />58同城</Menu.Item>
      </Menu>
    );
    return (
      <Button.Group>
        <Dropdown.Button type="primary" onClick={this.handleButtonClick} overlay={menu}>
             <Icon type="gitlab" />添加岗位
         </Dropdown.Button>
        <Permission>
          <Button type="primary" icon="sync" disabled={this.selectMultiple() } onClick={this.handleAddRoute.bind(this)}>批量刷新</Button>
        </Permission>

      </Button.Group>
    )
  }
  renderSearchBar() {
    let {reduce} = this.props
    let keysOption = [
      {
        label: "职业名称",
        value: "jobName"
      }
    ]
  //  let params = reduce.params || {}
    return (
      <AdvancedSearchForm keysOption={keysOption} filterSubmitHandler={this.handleFilter.bind(this)} >
      </AdvancedSearchForm>
    )
  }
  renderTableList() {
    let that=this;
    let {reduce} = this.props
    let {spins:{tableSpin}} = reduce
    let list = [...reduce.list.values()]
    const rowSelection = {
      onChange: this.onSelectChange.bind(this)
    };

    const menu = (
      <Menu>
        <Menu.Item>
            <Icon type="sync" />同步
        </Menu.Item>
        <Menu.Item>
          <Icon type="plus" />添加
        </Menu.Item>
        <Menu.Item>
          <Icon type="edit" />查看
        </Menu.Item>
      </Menu>
    );

    let tableConf = {
      loading: tableSpin,
      rowKey: 'jobId',
      title:function(){
        return that.renderToolbar()
      },
      rowSelection: rowSelection,
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
          width: 200,
          render: (data) => {
            return (
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link">
                  <Icon type="bars" />
                </a>
              </Dropdown>
            )
          }
        }, {
          title: <Icon type="setting" onClick={this.configColumns.bind(this)} />,
        }
      ]
    }
    return (<DataTable style={{
      width: '100%'
    }} {...tableConf} dataSource={list}/>)
  }
  render() {
    let {children} = this.props
    return (
      <div>
        {children}
        {this.renderSearchBar()}
        {this.renderTableList()}
      </div>
    )
  }
}
