import React, {Component, PropTypes} from 'react'
import {
  Button,
  Input,
  Table,
  Form,
  Modal,
  Select,
  Menu,
  Icon,
  Dropdown,
  DatePicker,
  TreeSelect
} from 'antd'

import PageView from 'components/Page'

import AdvancedSearchForm from 'components/AdvancedSearch'
import CalendarPicker from 'components/CalendarPicker'
import Permission from 'components/Permission'

const Option = Select.Option
const {RangePicker} = DatePicker;

class SoundListView extends PageView {

  renderSearchBar() {
    let {reduce} = this.props
    let keysOption = [
      {
        label: "主叫号码",
        value: "jobName"
      },{
        label: "被叫号码",
        value: "jobName"
      },{
        label: "候选人姓名",
        value: "jobName"
      }
    ]
    return (
      <AdvancedSearchForm keysOption={keysOption} filterSubmitHandler={this.handleFilter.bind(this)} >
      </AdvancedSearchForm>
    )
  }
  renderTableList() {
    let {reduce} = this.props
    let loading = reduce.loading
    let page =reduce.page
    let list = [...reduce.list.values()]
    let  columns= [
         {title: "操作",
          dataIndex: "jobId",
          width: 200,
          render: (data) => {
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

            return (
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link">
                  <Icon type="play-circle-o" />
                </a>
              </Dropdown>
            )
          }
        }, {
          title: "候选人",
          key: "nextActionDate",
          dataIndex: "nextActionDate"
        }, {
          title: "主叫号码",
          key: "optionName",
          dataIndex: "optionName",
          width: 160
        }, {
          title: "被叫号码",
          key: "showLastActionDate",
          dataIndex: "showLastActionDate",
          width: 120
        }, {
          title: "通话时长",
          key: "groupName",
          dataIndex: "groupName",
          width: 160
        }, {
          title: "通话时间",
          key: "showMinActionDate",
          dataIndex: "showMinActionDate",
          width: 140
        }, {
          title: "联系人",
          key: "ownerAcc",
          dataIndex: "ownerAcc",
          width: 100
        }
      ]
    return (<Table loading={loading} rowKey={'custFollowId'} columns={columns} dataSource={list}  {...this.mergeTableConfig({pagination:page})} />)
  }
  renderDialogView() {
    var {route} = this.props
    var title = ""
    if (route.path == 'add') {
      title = "添加"
    } else if (route.path == 'edit/:id') {
      title = "编辑"
    } else {
      return (null)
    }
    return (
      <Modal title={title} visible={true} maskClosable={false} onCancel={this.handleBackRoute.bind(this)} onOK={this.handleBackRoute.bind(this)}>
        <SoundFormView {...this.props}></SoundFormView>
      </Modal>
    )
  }
  render() {
    return (
      <div>
        {/*this.renderDialogView()*/}
        {this.renderSearchBar()}
        {/*this.renderToolbar()*/}
        {this.renderTableList()}
      </div>
    )
  }
}

export default SoundListView
