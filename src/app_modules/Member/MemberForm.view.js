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
  Select
} from 'antd'
import {FormPage} from 'components/Page'
import ModalView from 'components/Modal.view'
import WrapperComponent from '../../decorators/WrapperComponent'
import BaseForm,{FormItem} from 'components/BaseForm'

const Option = Select.Option
const {TextArea} = Input

class MemberForm extends Component{

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
          <Input label="成员姓名" name="username" initialValue={username}/>
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <Input label="性别" name="roleName" initialValue={roleName}/>
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <Input label="所在部门" name="groupName" initialValue={groupName}/>
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <Input label="入职时间" name="serveTime" initialValue={serveTime}/>
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <Input label="职务" name="post" initialValue={post}/>
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <Input label="移动电话" name="mobile" initialValue={mobile}/>
        </FormItem>
        {children}
      </BaseForm>
    )
  }
}

@WrapperComponent(ModalView)
class MemberFormView extends FormPage{
  //请求远程数据接口
  componentWillMount() {
    let {actions} = this.props;
    actions.itemAction("1")
  }
  //处理表格提交后动作
  handleSubmit(values){
    let {actions} = this.props;
    console.log(actions)
  //  console.log(values)
    actions.saveAction(values)
    //actions.backRoute()
  }
  render() {
    let {params, reduce:{spins:{formSpin},item}} = this.props;

    //	let model=preduce.list[0]
    return (
      <Spin tip="Loading..." spinning={formSpin}>
        <MemberForm onSubmit={this.onSubmit} initialValues={item} saveFormRef={this.saveFormRef}>
            <Button type="primary" htmlType="submit" onClick={this.onSubmit.bind(this)}>Submit</Button>
            <Button>取消</Button>
        </MemberForm>
      </Spin>
    )
  }
}

export default MemberFormView
