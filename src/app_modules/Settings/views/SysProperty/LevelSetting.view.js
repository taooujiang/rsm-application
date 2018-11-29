import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import PageView from 'app/components/Page'
import DataTable from 'app/components/DataTable'
import { Button, Card, List, Avatar } from "antd"
import ButtonGroups from 'app/components/ButtonGroups'

@NestedComponent()
export default class LevelSetting extends PageView {

  componentDidMount() {
    const { actions } = this.props
    actions.levelSettingListAction()
  }
  renderToolbar() {
    return (
      <ButtonGroups handleClick={this.handleAdd.bind(this)}>
        <Button type="primary" permission="company" actionkey="add">添加</Button>
      </ButtonGroups>
    )
  }
  handleAdd(actionkey) {
    let { actions, router } = this.props;
    actions.addRoute(router)
  }
  handleBtnGroupClick(record, actionType) {
    let { actions, router } = this.props
    actions[actionType].call(this, router, record.id)
  }
  _renderTableList() {
    let { actions, reduce, items, router } = this.props
    let { spins: { tableSpin } } = reduce
    const tableConf = {
      loading: tableSpin,
      dataSource: items,
      rowkey: 'id',
      columns: [{
        title: "职位名称",
        width: 100,
        dataIndex: 'positionName',
        key: 'positionName',
      },
      {
        title: '职级等级',
        width: 100,
        dataIndex: 'positionLeavel',
        key: 'positionLeavel',
      },
      {
        title: '操作',
        width: 100,
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          <ButtonGroups handleClick={this.handleBtnGroupClick.bind(this, record)}>
            <Button icon="edit" actionkey="editRoute" tooltext="编辑" />
            {/* 合并unionId */}
            <Button icon="delete" disabled={record.isDefault ? true : false} actionkey="deleteLevelSettingAction" confirm="确认删除" tooltext="删除" />
          </ButtonGroups>
        ),
      }],
    }
    return (
      <DataTable  {...tableConf} pagination={false} />
    )
  }
  render() {
    return (
      <Card title={<div><h3 className="card-title">职位级别设置</h3></div>} extra={this.renderToolbar()}	>
        {this._renderTableList()}
      </Card>
    )
  }
}
