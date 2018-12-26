import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import PageView from 'app/components/Page'
import DataTable from 'app/components/DataTable'
import { Button, Card, List, Avatar } from "antd"
import ButtonGroups from 'app/components/ButtonGroups'
import './style.less'

@NestedComponent()
export default class OfferApprove extends PageView {
  componentDidMount() {
    const { actions } = this.props
    actions.offerApproveListAction()
  }
  renderToolbar() {
    return (
      <ButtonGroups handleClick={this.handleAddMenu.bind(this)}>
        <Button type="primary" permission="company" actionkey="add">添加</Button>
      </ButtonGroups>
    )
  }
  handleAddMenu(actionkey) {
    let { actions, router } = this.props;
    if (actionkey == "add") {
      actions.addRoute(router)
    }
  }
  handleDelete(id) {
    let { actions, router } = this.props;
    actions.offerApproveDeleteAction({ id })
  }
  handleEdit(data) {

  }
  handleBtnGroupClick(data, type) {
    let { actions, router } = this.props;
    actions[type]({ id: data.id })
  }
  _renderSingleTable(dataSource) {
    let { actions, reduce, router } = this.props
    let { spins: { tableSpin } } = reduce
    const tableConf = {
      loading: tableSpin,
      dataSource: dataSource.stageList,
      rowkey: 'id',
      columns: [{
        title: "审批阶段",
        align: "center",
        width: 100,
        dataIndex: 'stage',
        key: 'stage',
        render: (text, record) => {
          if (!text) return ''
          let mapper = {
            1: '一级审批',
            2: '二级审批',
            3: '三级审批',
          }
          return mapper[text]
        },
      }, {
        title: "审批人",
        align: "center",
        width: 100,
        dataIndex: 'accountName',
        key: 'accountName',
      }],
    }
    return [
      <div className="offer-approvelist-item-title">
        <h3>{dataSource.name}</h3>
        <div>
          {/* <Button type="primary" onClick={this.handleEdit.bind(this, dataSource)} style={{ marginRight: '10px' }}>
            编辑
          </Button>
          <Button type="primary" onClick={this.handleDelete.bind(this, dataSource.id)} >
            删除
          </Button> */}
          <ButtonGroups handleClick={this.handleBtnGroupClick.bind(this, dataSource)}>
            <Button type="primary" actionkey="offerApproveEditAction" style={{ marginRight: '10px' }}>
              编辑
            </Button>
            <Button type="primary" permission="company" confirm="删除后，已设置该审核流程的职位自动关闭offer审核功能，是否确定删除？" actionkey="offerApproveDeleteAction">删除</Button>
          </ButtonGroups>

        </div>
      </div>,
      <DataTable className="offer-approvelist-item"  {...tableConf} pagination={false} />
    ]
  }
  renderTableList(items) {
    if (items.length) return items.map(e => { return this._renderSingleTable(e) })
    else{return <div className='table-no-data offerApproval-setting-nodata'>暂无数据</div>}
  }
  render() {
    let { actions, reduce, items, router } = this.props

    return (
      <Card className="offer-approval-setting" title={<div><h3 className="card-title">Offer审批设置</h3></div>} extra={this.renderToolbar()}	>
        {this.renderTableList(items)}
      </Card>
    )
  }
}
