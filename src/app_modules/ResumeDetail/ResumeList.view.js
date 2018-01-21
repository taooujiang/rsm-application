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
        <Select name="custTypeId" label="选择A" >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select name="optionlistId" label="选择b">
        </Select>
        <Select name="abc"  label="选择c" defaultvalue="lucy">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select name="sdfsd"  label="选择d" defaultvalue="lucy">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select name="asdf"  label="选择e" defaultvalue="lucy">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select name="asdfd" label="选择f" defaultvalue="lucy">
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
              <ButtonGroupExt>
                  <Button type="primary" icon="plus-circle-o">新增</Button>
                  <Button icon="plus">删除</Button>
                  <Button icon="plus-circle-o">编辑</Button>
                  <Button icon="plus-circle-o">转正</Button>
                  <Button icon="plus-circle-o">无效</Button>
              </ButtonGroupExt>
            )
          }
        }
      ]
    }

    return (<Table  {...tableConf} dataSource={list} {...this.mergeTableConfig({pagination:page})} />)
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
