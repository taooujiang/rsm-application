import React, {Component, PropTypes,Children} from 'react'
import {Modal} from 'antd'

export default class ModalView extends Component {
  handleBackRoute() {
    let {actions, history} = this.props
    //console.log(actions)
    actions.backRoute()
  }
  handleSaveRoute(){
    let { formView } =this.refs
    //console.log(formView)
    formView.onSubmit()
  }

  saveFormRef = (form) => {
    console.log(arguments)
    this.form = form;
  }

  render() {
    var {route, children} = this.props
    return (
      <Modal title={route.breadcrumbName} visible={true} maskClosable={false} onCancel={this.handleBackRoute.bind(this)} onOk={this.handleSaveRoute.bind(this)}>
        <children.type {...this.props} ref="formView"></children.type>
      </Modal>
    )
  }
}
