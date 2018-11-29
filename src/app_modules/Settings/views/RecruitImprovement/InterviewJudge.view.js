import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import PageView from 'app/components/Page'
import DataTable from 'app/components/DataTable'
import { Divider, Card, Rate, Switch } from "antd"
import ButtonGroups from 'app/components/ButtonGroups'

@NestedComponent()
export default class InterviewJudge extends PageView {
  state = {
    // switchChecked:0
  }
  componentDidMount() {
    const { actions } = this.props
    actions.fetchRemindAction()
    actions.optionListAction({ optionCode: "interview_score" })
  }
  onChange(checked) {
    console.log(`switch to ${Number(checked)}`);
    const { actions } = this.props
    actions.switchApplyAction({ msg_1031: Number(checked).toString() })
  }
  renderToolbar() {
    const { item } = this.props
    return (
      <Switch checked={!!(Number(item.msg_1031))} onChange={this.onChange.bind(this)} />
    )
  }
  renderDesc() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <span>候选人面试结束后，请候选人为本场面试打分</span>
        {this.renderToolbar()}
      </div>)
  }
  renderQuesList() {
    const { items } = this.props
    console.log(items, 'sssss')
    return (
      <div>
        <h2>面试评分表</h2>
        {items.map((e,index) => this._renderQuesItem(e,index))}
      </div>
    )
  }
  _renderQuesItem(item,index) {
    return (
      <div>
        <span style={{ display: 'inline-block', width: '15em' }}>{index+1}. {item.optionName}</span>
        <Rate disabled defaultValue={5} />
      </div>
    )
  }
  render() {

    return (
      <Card title={<div><h3 className="card-title">面试评分表设置</h3></div>} 	>
        {this.renderDesc()}
        <Divider />
        {this.renderQuesList()}
      </Card >
    )
  }
}
