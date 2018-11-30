import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import PageView from 'app/components/Page'
import DataTable from 'app/components/DataTable'
import { Button, Card, List, Avatar } from "antd"
import ButtonGroups from 'app/components/ButtonGroups'

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
	handleAddMenu(actionkey){
		let { actions, router } = this.props;
		if(actionkey == "add"){
			actions.addRoute(router)
		}
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
    return (
      [<div>{dataSource.name}</div>, <DataTable  {...tableConf} pagination={false} />]
    )
  }
  renderTableList(items) {
    if (items.length) return items.map(e => { return this._renderSingleTable(e) })
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
