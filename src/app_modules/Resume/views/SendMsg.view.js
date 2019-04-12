/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-03-14T15:51:16+08:00
 */

import React, {Component, PropTypes} from 'react'
import {
  Row,
  Col,
  Modal,
  Button,
  Radio,
  Input,
  Form,
  DatePicker,
  Layout,
  Spin,
  Select,
  TreeSelect
} from 'antd'
import moment from 'moment'
import RichEditor, {EditableRichEditor} from 'components/RichEditor'
import {FormPage} from 'app/components/Page'
import BaseForm,{FormItem,customRules} from 'app/components/BaseForm'
import CalendarPicker from 'app/components/CalendarPicker'
import {TreeSelectPicker} from 'app/components/TreeView'
import DateTimePicker from 'app/components/DateTimePicker'
import messageCountFn from 'app/utils/messageCount'


const Option = Select.Option
const {TextArea} = Input
const RadioGroup = Radio.Group;
const TreeNode = TreeSelect.TreeNode;

export default class SendMsgForm extends FormPage{
  state = {
    tips:"共计0字，0条短信"
  }
  componentDidMount(){
    // console.log(this)
    // this.form.resetFields(['content'])
  }
  hanleChangeContent(e){
    let val = e.target.value
    this.setState({
      tips:messageCountFn(val)
    })
  }
  handleSubmit(values){
    let {actions,router,location} = this.props;
    actions.hanldeSendMsgAction(values).then(()=>{
      actions.backRouteReload(router,location)
    })
  }

  render() {
    const {
      form,
      handleSubmit,
      children,
      saveFormRef,
      location:{state:{item}}
    } = this.props
    let {tips} = this.state
    // console.log(item)
    return (
      <BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="sendMsg-form">
        <FormItem>
          <Input type="hidden" name="linkMan" defaultValue={item.name}/>
        </FormItem>
        <FormItem>
          <Input type="hidden" name="phoneNumber" defaultValue={item.mobilephone}/>
        </FormItem>
        <FormItem>
          <Input type="hidden" name="businessId" defaultValue={item.id}/>
        </FormItem>
        <FormItem>
          <TextArea  name="content" label="短信内容" onChange={this.hanleChangeContent.bind(this)}  placeholder="请输入发送短信内容" rows={4} rules={[{required: true, message: "短信内容不可为空"},{validator:customRules.required}]}/>
          {/*<EditableRichEditor name="content" label="短信内容"  placeholder="请输入发送短信内容" type="markdown" rules={[{required: true, message: "短信内容不可为空"},{validator:customRules.required}]}/>*/}
        </FormItem>
        <span className="sendMsg-tips">{tips}</span>
      </BaseForm>
    )
  }
}
