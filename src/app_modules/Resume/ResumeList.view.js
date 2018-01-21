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
import {Link} from 'react-router'

import PageView from 'components/Page'
import AdvancedSearchForm from 'components/AdvancedSearch'
import ButtonGroupExt from 'components/ButtonGroupExt'
import TagSelect from 'components/TagSelect'
import Permission from 'components/Permission'
const Option = Select.Option

export default class ResumeListView extends PageView {

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
    return null
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
        <Select name="custTypeId" label="简历范围" >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select name="abc"  label="阅读状态">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select name="sdfsd"  label="更新时间">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select name="asdf"  label="学历">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select name="asdfd" label="工作年限">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select name="asdfd" label="目前状态">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select name="asdfd" label="期望工作地">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select name="asdfd" label="期望薪资">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </AdvancedSearchForm>
    )
  }
  addHandler(){
    alert('addHandler')
  }
  renderTableList() {
    let that=this;
    let {reduce} = this.props
    let {spins:{tableSpin}} = reduce
    let page= reduce.page
    let list = [...reduce.list.values()]


    let tableConf = {
      loading: tableSpin,
      rowKey: 'jobId',
      title:function(){
        return that.renderToolbar()
      },
      columns: [
        {
          type: 'selection'
        }, {
          title: "操作",
          dataIndex: "jobId",
          width: 200,
          render: (data) => {
            return (
              <ButtonGroupExt onClick={this.handlerMenu}>
                  <Button type="primary" icon="plus-circle-o" actionkey="a1">待邀约</Button>
                  <Button icon="plus" actionkey="a2" href="/resume/121/feedback">
                    面试
                  </Button>
                  <Button icon="plus-circle-o" actionkey="a3">offer</Button>
                  <Button icon="plus-circle-o" actionkey="a4">入职</Button>
                  <Button icon="plus-circle-o" actionkey="a5">拒绝</Button>
                  <Button icon="plus-circle-o" actionkey="a6">关联职业</Button>
                  <Button icon="plus-circle-o" actionkey="a7">面试反馈</Button>
                  <Button icon="plus-circle-o" actionkey="a8">加入人才</Button>
              </ButtonGroupExt>
            )
          }
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
        }
      ]
    }

    return (<Table  {...tableConf} dataSource={list} {...this.mergeTableConfig({pagination:page})} />)
  }

  handlerMenu(actionType,value){
    console.log(actionType)
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
