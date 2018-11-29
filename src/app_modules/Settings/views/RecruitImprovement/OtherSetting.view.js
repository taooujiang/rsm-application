import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import PageView from 'app/components/Page'
import DataTable from 'app/components/DataTable'
import { Button, Divider, Table, Form, DatePicker, Card, Switch, Row, Col, Select, Checkbox, Radio, Icon, Popconfirm } from 'antd'
import ButtonGroups from 'app/components/ButtonGroups'

const Option = Select.Option
@NestedComponent()
export default class InterviewJudge extends PageView {
  state = {
    channel_1001: '',
    channel_1002: ''
  }
  componentDidMount() {
    let { actions } = this.props
    actions.channelSettingsAction()
  }
  componentWillReceiveProps = (nextProps) => {
    let { item: { channel_1001, channel_1002 } } = nextProps
    if (channel_1001 != this.state.channel_1001) {
      this.setState({
        channel_1001
      })
    }
    if (channel_1002 != this.state.channel_1002) {
      this.setState({
        channel_1002
      })
    }
  }
  handleChange(value) {
    let { actions, item } = this.props
    actions.saveChannelSettingsAction({ channel_1001: value })
  }
  renderToolbar() {
    return (
      <ButtonGroups >
        <Button type="primary" permission="company" actionkey="add">添加</Button>
      </ButtonGroups>
    )
  }
  renderUpdateCycleSettingForm() {
    let { channel_1001 } = this.state
    return ([
      <Row><h3>简历更新周期设置</h3></Row>,
      <Row>
        统一简历更新的周期为
      <Select defaultValue={channel_1001} value={channel_1001} name="channel_1001" style={{ width: 140 }} onChange={this.handleChange.bind(this)}>
          <Option value="3">3个月</Option>
          <Option value="4">4个月</Option>
          <Option value="5">5个月</Option>
          <Option value="6">6个月</Option>
          <Option value="7">7个月</Option>
          <Option value="8">8个月</Option>
          <Option value="9">9个月</Option>
          <Option value="10">10个月</Option>
          <Option value="11">11个月</Option>
          <Option value="12">12个月</Option>
        </Select>
      </Row>,
      <Row>
        <Row>温馨提示：</Row>
        <Row>设置后，对于同一份简历，在更新周期内发生的更新将不再进行推送</Row>
      </Row>,
      <Divider />
    ])
  }
  handleSwitchChange(value) {
    let { actions, } = this.props
    let data = Number(value)

    actions.saveChannelSettingsAction({ channel_1002: data })
  }
  renderBlacklistSettingForm() {
    let { channel_1002 } = this.state
    let { item } = this.props
    return ([
      <Row><h3>诚信库名单开放设置</h3></Row>,
      <Row>
        是否与其他企业共享诚信库名单

        <Switch checked={Number(channel_1002)} onChange={this.handleSwitchChange.bind(this)} />
      </Row>,
      <Row>
        <Row>温馨提示：</Row>
        <Row>开启后，诚信库名单将和其他公司共享。否则，诚信库名单将不对其他公司开放。</Row>
      </Row>,
      <Divider />
    ])
  }

  render() {
    // let { actions, item } = this.props
    return (
      <Card title={<div><h3 className="card-title">其他设置</h3></div>} extra={this.renderToolbar()}	>
        {this.renderUpdateCycleSettingForm()}
        {this.renderBlacklistSettingForm()}
      </Card>
    )
  }
}
