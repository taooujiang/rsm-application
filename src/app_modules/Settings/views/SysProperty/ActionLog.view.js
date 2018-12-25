import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import PageView from 'app/components/Page'
import DataTable from 'app/components/DataTable'
import { Button, Card, List, Avatar, Input, Select } from "antd"
import ButtonGroups from 'app/components/ButtonGroups'
import AdvancedSearchForm from 'app/components/AdvancedSearch'
import CalendarPicker from "app/components/CalendarPicker";
import moment from "moment";

@NestedComponent()
export default class ActionLog extends PageView {

  componentDidMount() {
    const { actions } = this.props
    actions.actionLogListAction({time:[moment().subtract(30,"days").format("YYYY-MM-DD"),moment().format("YYYY-MM-DD")]})
  }
  handleFilter(value) {
    let { time } = value
    if (time && time.length) time = [moment(value.time[0]).format("YYYY-MM-DD"), moment(value.time[1]).format("YYYY-MM-DD")]
    const { actions,reduce } = this.props
    actions.actionLogListAction({ ...value, time })
  }
  renderSearchBar() {
    let { reduce } = this.props
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
      <AdvancedSearchForm keysOption={keysOption} filterSubmitHandler={this.handleFilter.bind(this)} isSearchBtnHide={true} autoSubmitForm={true}>
        <CalendarPicker
          label="操作时间"
          name="time" defaultValue={[moment().subtract(30,"days"),moment()]} />
        <Input name="operateAccName" label="操作人" />
        {/* todo，option需要后端接口 */}
        <Select name="moduleId" label="操作模块" placeholder="请选择" fetch={`${APP_SERVER}/logUserOperate/getMenuListJson`} renderItem={this.renderModuleSelectOption} style={{ width: '200px' }} />
      </AdvancedSearchForm>
    )
  }
  renderModuleSelectOption(data, index) {
    return (<Select.Option value={data.mouduleId} key={index}>{data.mouduleName}</Select.Option>)
  }
  renderTable() {
    let { actions, reduce, items, router } = this.props
    let {
      spins: { tableSpin },
      key,
      page
    } = reduce;
    const tableConf = {
      onChange: this.onChange.bind(this),
      loading: tableSpin,
      dataSource: items,
      rowkey: 'id',
      columns: [{
        title: "操作时间",
        width: 100,
        dataIndex: 'inputTime',
        key: 'inputTime',
      }, {
        title: "操作人",
        width: 80,
        dataIndex: 'operateAccName',
        key: 'operateAccName',

      }, {
        title: "帐号",
        width: 100,
        dataIndex: 'operateAcc',
        key: 'operateAcc',
      },
      {
        title: '操作模块',
        width: 100,
        dataIndex: 'moduleName',
        key: 'moduleName',

      },
      {
        title: '操作功能',
        width: 80,
        dataIndex: 'operateName',
        key: 'operateName',

      }, {
        title: '详细描述',
        width: 100,
        dataIndex: 'content',
        key: 'content',

      },],
    }
    return (
      <DataTable style={{ marginTop: '10px' }} {...tableConf} page={page} />
    )
  }
  render() {

    return (
      <Card title={<div><h3 className="card-title">操作日志</h3></div>}	>
        {this.renderSearchBar()}
        {this.renderTable()}
      </Card>
    )
  }
}
