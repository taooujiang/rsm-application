/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-17T17:32:29+08:00
 */

import React, {Component, PropTypes} from 'react'
import {
  Row,
  Col,
  Modal,
  Button,
  Input,
  Form,
  DatePicker,
  Layout,
  Spin,
  Rate,
  Select
} from 'antd'
import {FormPage} from 'components/Page'
import ModalView from 'components/Modal.view'
import WrapperComponent from '../../decorators/WrapperComponent'
import BaseForm,{FormItem} from 'components/BaseForm'

const Option = Select.Option
const {TextArea} = Input

class FeedbackForm extends Component{

  render() {
    const {
      form,
      initialValues:{username,roleName,groupName,serveTime,post,mobile},
      handleSubmit,
      children,
      saveFormRef
    } = this.props
    const formFullItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    };
    return (
      <BaseForm onSubmit={handleSubmit} ref={saveFormRef}>
        <FormItem {...formFullItemLayout}>
          <Select label="面试阶段" name="groupName" initialValue={groupName}></Select>
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <Select label="面试官" name="groupName" initialValue={groupName}></Select>
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <DatePicker label="面试时间" name="username" initialValue={username} />
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <TextArea label="反馈信息" name="groupName" initialValue={groupName}></TextArea>
        </FormItem>
      </BaseForm>
    )
  }
}

@WrapperComponent(ModalView)
class FeedbackFormView extends FormPage{
  //请求远程数据接口
  componentWillMount() {
    let {actions} = this.props;
  //  actions.itemAction("1")
  }
  //处理表格提交后动作
  handleSubmit(values){
    let {actions} = this.props;
    console.log(actions)
    console.log(values)
  //  actions.saveAction(values)
    //actions.backRoute()
  }
  render() {
    let {params, reduce:{spins:{formSpin},item}} = this.props;

    //	let model=preduce.list[0]
    return (
      <Spin tip="Loading..." spinning={false}>
        <FeedbackForm onSubmit={this.onSubmit} initialValues={item} saveFormRef={this.saveFormRef}>
            <Button type="primary" htmlType="submit" onClick={this.onSubmit.bind(this)}>确认</Button>
            <Button>取消</Button>
        </FeedbackForm>
      </Spin>
    )
  }
}

export default FeedbackFormView
