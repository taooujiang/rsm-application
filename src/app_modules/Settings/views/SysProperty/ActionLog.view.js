import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import PageView from 'app/components/Page'
import DataTable from 'app/components/DataTable'
import { Button, Card, List, Avatar } from "antd"
import ButtonGroups from 'app/components/ButtonGroups'

@NestedComponent()
export default class ActionLog extends PageView {
  renderToolbar() {
    return (
      <ButtonGroups >
        <Button type="primary" permission="company" actionkey="add">添加</Button>
      </ButtonGroups>
    )
  }
  
  render() {

    return (
      <Card title={<div><h3 className="card-title">操作日志</h3></div>} extra={this.renderToolbar()}	>
        <div>操作日志</div>
      </Card>
    )
  }
}