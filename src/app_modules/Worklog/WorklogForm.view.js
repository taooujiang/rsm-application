import React, {Component, PropTypes} from 'react'
//import {reduxForm,Field} from 'redux-form'
import {Button,Input,DatePicker,Form} from 'antd'
import moment from 'moment'

import ModalView from '../../components/Modal.view'
import WrapperComponent from '../../decorators/WrapperComponent'

const FormCreate = Form.create
const FormItem = Form.Item
const { TextArea } = Input;


@FormCreate()
class WorklogForm extends Component {

  constructor(props) {
    super(props);
  }
  handleSubmit(e) {
    const {handleSubmit} = this.props;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        handleSubmit(values)
      }
    });
  }
  render() {
    const {form,initialValue} = this.props;
    const {getFieldDecorator, validateFieldsAndScroll} = form
    return (
      <Form  onSubmit={this.handleSubmit.bind(this)}>
        <FormItem label="日期">
          {getFieldDecorator('dateTime', {
            initialValue: initialValue.inputdateTime,
            normalize:function(value){
              return value && moment(value)
            },
            rules: [{
                required: true,
                message: '请选择工作日期'
            }]
          })(<DatePicker showToday/>)}
        </FormItem>
        <FormItem label="今日工作总结" extra="最多可输入2000个汉字" hasFeedback>
          {getFieldDecorator('context',{
            initialValue:initialValue.context,
            rules: [
              {
                required: true,
                message: '请输入今日工作总结'
              },{
                maxlength:2000,
                message: '最多可输入2000个汉字'
              }
            ]
          })(<TextArea rows={4} placeholder="请输入今日工作总结" />)}
        </FormItem>
        <FormItem label="明日工作计划" extra="最多可输入2000个汉字" hasFeedback>
          {getFieldDecorator('workPlan',{
            initialValue:initialValue.workPlan,
            rules: [
              {
                required: true,
                message: '请输入今日工作总结'
              },{
                maxlength:2000,
                message: '最多可输入2000个汉字'
              }
            ]
          })(<TextArea rows={4} placeholder="请输入明日工作计划" />)}
        </FormItem>
      </Form>
    )
  }
}

@WrapperComponent(ModalView)
class WorklogFormView extends Component {
  componentWillMount() {
    let {params, data, actions} = this.props;
    if (params.id) {
      actions.loadAction(params.id)
    }
  }
  handleSubmit(values) {
    let {actions} = this.props
    console.log('handleSubmit',values)

    //  actions.fetchSave(values)
  }

  render() {
    let {params, reduce,saveFormRef} = this.props;
    let model = {}
    return (<WorklogForm ref={saveFormRef} handleSubmit={this.handleSubmit.bind(this)} initialValue={reduce.item}  >
          <FormItem>
            <Button type="primary" htmlType="submit" >立即创建</Button>
            <Button>取消</Button>
          </FormItem>
        </WorklogForm>)
  }
}

export default WorklogFormView
