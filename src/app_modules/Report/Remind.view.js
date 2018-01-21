import React, {Component, PropTypes} from 'react'
//import {reduxForm,Field} from 'redux-form'
import {Button, Input, Table, Form, DatePicker,Card,Switch,Row,Select,Checkbox } from 'antd'

import ModalView from 'components/Modal.view'
import SwitchCard from 'components/SwitchCard'
import WrapperComponent from '../../decorators/WrapperComponent'
import BaseForm,{FormItem} from 'components/BaseForm'
import {FormPage} from 'components/Page'
// const FormCreate = Form.create
// const FormItem = Form.Item
const Option = Select.Option
const CheckboxGroup = Checkbox.Group;


// @FormCreate()
class RemindForm extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   form: props.initialValues
    // };
  }

  handleSubmit(e) {
    //const {handleSubmit} = this.props;
    e.preventDefault();
    console.log(this)
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        //handleSubmit(values)
      }
    });
  }
  renderType1(){
    let {initialValues} = this.props
    console.log(initialValues)
    return(<SwitchCard title="员工生日提醒" bordered={false} >
            <Row>
            <FormItem>
              <CheckboxGroup name="isMsg000"  value={[initialValues['isMsg000']]}>
                <Checkbox />
              </CheckboxGroup>
            </FormItem>按日提醒：提前
              <FormItem>
                <Select name="aa" initialValue={initialValues['aa']}>
                  <Option lable="1" value="1" >1</Option>
                  <Option lable="2" value="2">2</Option>
                  <Option lable="3" value="3">3</Option>
                  <Option lable="4" value="4">4</Option>
                  <Option lable="5" value="5">5</Option>
                </Select>
              </FormItem>
               告知HR员工的生日
            </Row>
            <Row>
            <FormItem>
              <Checkbox name="isMsg00" />
            </FormItem>按月提醒：每月1日，提醒本月生日的员工
            </Row>
            <Row>
            <FormItem>
              <Checkbox name="isMsg01" />
            </FormItem>
            是否开通短信提醒按月提醒：每月1日，提醒本月生日的员工
            </Row>
         </SwitchCard>)
  }

  renderType2(){
    return(<SwitchCard title="员工入职提醒" bordered={false} >
            <Row>
              根据员工入职时间，提前
              <FormItem>
                <Select name="ab">
                  <Option lable="1" value="1" defaultChecked>1</Option>
                  <Option lable="2" value="2">2</Option>
                  <Option lable="3" value="3">3</Option>
                  <Option lable="4" value="4">4</Option>
                  <Option lable="5" value="5">5</Option>
                </Select>
              </FormItem>
               告知HR员工的入职时间；
            </Row>
            <Row>
            <FormItem>
              <Checkbox name="isMsg02" />
            </FormItem>
            是否开通短信提醒
            </Row>
         </SwitchCard>)
  }

  renderType3(){
    return(<SwitchCard title="员工转正提醒" bordered={false} >
            <Row>
              根据员工转正时间，提前
              <FormItem>
                <Select name="ac">
                  <Option lable="1" value="1" defaultChecked>1</Option>
                  <Option lable="2" value="2">2</Option>
                  <Option lable="3" value="3">3</Option>
                  <Option lable="4" value="4">4</Option>
                  <Option lable="5" value="5">5</Option>
                </Select>
              </FormItem>
               告知HR员工的转正时间；
            </Row>
            <Row>
            <FormItem>
              <Checkbox name="isMsg03" />
            </FormItem>
            是否开通短信提醒
            </Row>
         </SwitchCard>)
  }
  renderType4(){
    return(<SwitchCard title="合同到期提醒" bordered={false} >
            <Row>
              根据员工合同到期时间，提前
              <FormItem>
                <Select name="ad">
                  <Option lable="1" value="1" defaultChecked>1</Option>
                  <Option lable="2" value="2">2</Option>
                  <Option lable="3" value="3">3</Option>
                  <Option lable="4" value="4">4</Option>
                  <Option lable="5" value="5">5</Option>
                </Select>
              </FormItem>
               告知HR员工的合同到期时间；
            </Row>
            <Row>
            <FormItem>
              <Checkbox name="isMsg04" />
            </FormItem>
            是否开通短信提醒
            </Row>
         </SwitchCard>)
  }
  renderType5(){
    return(<SwitchCard title="员工周年提醒" bordered={false} >
            <Row>
              根据员工的入职时间，提前
              <FormItem>
                <Select name="ae">
                  <Option lable="1" value="1" defaultChecked>1</Option>
                  <Option lable="2" value="2">2</Option>
                  <Option lable="3" value="3">3</Option>
                  <Option lable="4" value="4">4</Option>
                  <Option lable="5" value="5">5</Option>
                </Select>
              </FormItem>
               告知HR员工入职满周年；
            </Row>
            <Row>
              <FormItem>
                <Checkbox name="isMsg05" />
              </FormItem>
            </Row>
         </SwitchCard>)
  }
  renderType6(){
    return(<SwitchCard title="预约面试提醒" bordered={false} >
            <Row>
              根据与候选人的预约面试时间，提前
              <FormItem>
                <Select name="af">
                  <Option lable="1" value="1" defaultChecked>1</Option>
                  <Option lable="2" value="2">2</Option>
                  <Option lable="3" value="3">3</Option>
                  <Option lable="4" value="4">4</Option>
                  <Option lable="5" value="5">5</Option>
                </Select>
              </FormItem>
               告知HR与候选人的预约面试时间；
            </Row>
            <Row>
              <FormItem>
                <Checkbox name="isMsg06" />
              </FormItem>
              是否开通短信提醒
            </Row>
         </SwitchCard>)
  }
  render() {
    const {
      form,
      handleSubmit,
      children,
      saveFormRef
    } = this.props

    // const {getFieldDecorator, validateFieldsAndScroll} = form
    return (
      <BaseForm layout="inline" onSubmit={handleSubmit} ref={saveFormRef}>
          {this.renderType1()}
          {this.renderType2()}
          {this.renderType3()}
          {this.renderType4()}
          {this.renderType5()}
          {this.renderType6()}
          {children}
      </BaseForm>
    )
  }
}

class RemindFormView extends FormPage {
  componentWillMount() {
    let {params, data, actions} = this.props;
      actions.fetchRemindAction(params.id)
  }
  handleSubmit(values) {
    let {actions} = this.props;
    console.log(values)
  }
  render() {
    let {params, reduce:{remind}} = this.props;
    //	let model=preduce.list[0]
    return (
      <div className="containerSettings" style={{height:'100%',overflow:'auto'}}>
        <RemindForm onSubmit={this.onSubmit} initialValues={remind} saveFormRef={this.saveFormRef}>
          <Button type="htmlType" onClick={this.onSubmit.bind(this)}>保存</Button>
        </RemindForm>
      </div>
    )
  }
}

export default RemindFormView
