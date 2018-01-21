import React, {Component, PropTypes} from 'react'
import {
   Col,
   Row,
   Timeline,
   Button, Icon
 } from 'antd'

import moment from 'moment';

import PageView from 'components/Page'

const ButtonGroup = Button.Group;

class WorklogListView extends PageView {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let {actions} = this.props;
    actions.listAction()
  }

  renderLogList(logs){
    return logs.map((it)=>
      <div key={it.wliId}>{it.userName} {it.userAccount} {it.workPlan} {it.context} <Button onClick={this.handleEditRoute.bind(this,it.logDateTime)}>edit</Button> <Button onClick={this.handleDeleteRoute.bind(this,it.wliId)}>del</Button></div>
    )
  }
  renderTimelineNodes(){
    let self=this
    let {children,reduce} = this.props
    let list = [...reduce.list.values()]
    return list.map((it)=><Timeline.Item key={it.logDate} dot={<span>{it.formatDay}{it.formatMonth}<Icon type="clock-circle-o" /></span>}>{self.renderLogList(it.logs)}</Timeline.Item>)
  }
  render() {
    let {children,reduce} = this.props
    return (
        <div>
          <Button onClick={this.handleAddRoute.bind(this)}>添加日志</Button>
          <Timeline pending={<a href="#">加载更多</a>}>
            {this.renderTimelineNodes()}
          </Timeline>
          {children}
        </div>
    )
  }
}

export default WorklogListView
