import React, {Component, PropTypes} from 'react'
import {
  Col,
  Row,
  CalendarPicker,
  Button, Icon
} from 'antd'
import moment from 'moment';

import {Layout,Fixed,Pane} from 'components/Layout'
import PageView from 'components/Page'

const ButtonGroup = Button.Group;

class WorklogView extends PageView {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let {actions} = this.props;
    //actions.listAction()
  }

  handleSelectChange(value) {
    let {actions,location} = this.props;
    if(location.pathname=='/worklog/list'){
      actions.listAction({logDateTime:value.valueOf()})
    }else if(location.pathname=='/worklog/share'){
      actions.listShareAction({logDateTime:value.valueOf()})
    }
  }
  handlePanelChange(value,mode){
    console.log(value,mode)
  }
  handlerLogAction(){
    let {actions,router} = this.props
    actions.listRoute()
  }
  handlerShareAction(){
    let {actions,history} = this.props
  //  history.push('/worklog/share')
    actions.shareRoute()
  }
  render() {
    let {children} = this.props
    return (
      <Layout direction="rows">
        <Fixed style={{width:'300px'}}>
          <CalendarPicker fullscreen={false} onSelect={this.handleSelectChange.bind(this)} onPanelChange={this.handlePanelChange.bind(this)} />
          <ButtonGroup>
           <Button type="primary" onClick={this.handlerLogAction.bind(this)}>
             <Icon type="left" />我的日志
           </Button>
           <Button type="primary" onClick={this.handlerShareAction.bind(this)}>
             点评日志<Icon type="right" />
           </Button>
         </ButtonGroup>
        </Fixed>
        <Pane span="20" >
          {children}
        </Pane>
      </Layout>
    )
  }
}

export default WorklogView
