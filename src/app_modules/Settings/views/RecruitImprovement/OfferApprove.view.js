import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import PageView from 'app/components/Page'
import DataTable from 'app/components/DataTable'
import { Button, Card, List, Avatar } from "antd"
import ButtonGroups from 'app/components/ButtonGroups'

@NestedComponent()
export default class OfferApprove extends PageView {
  renderToolbar() {
    return (
      <ButtonGroups >
        <Button type="primary" permission="company" actionkey="add">添加</Button>
      </ButtonGroups>
    )
  }
  componentDidMount() {
    const { actions } = this.props
    actions.offerApproveListAction()
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
        width: 100,
        dataIndex: 'accountName',
        key: 'accountName',
      }],
    }
    return (
      [<div>{dataSource.name}</div>, <DataTable  {...tableConf} pagination={false} />]
    )
  }
  renderTableList(items) {
    let { actions, reduce, router } = this.props
    let { spins: { tableSpin } } = reduce
    const tableConf = {
      loading: tableSpin,
      dataSource: items,
      rowkey: 'id',
      columns: [{
        title: "审批阶段",
        width: 100,
        dataIndex: 'company',
        key: 'company',
      }, {
        title: "审批人",
        width: 100,
        dataIndex: 'companyArea',
        key: 'companyArea',
        render: (text, record) => (
          record.province + record.city + record.county
        ),
      },
      ],
    }
    console.log('dsadsadsad', items.map(e => { return this._renderSingleTable(e) }))
    if (items.length) return items.map(e => { return this._renderSingleTable(e) })
    // return (
    //   <DataTable  {...tableConf} pagination={false} />
    // )
  }
  render() {
    let { actions, reduce, items, router } = this.props

    return (
      <Card title={<div><h3 className="card-title">Offer审批设置</h3></div>} extra={this.renderToolbar()}	>
        {this.renderTableList(items)}
      </Card>
    )
  }
}
