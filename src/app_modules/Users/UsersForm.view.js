import React, {Component, PropTypes} from 'react'
import {Button, Input, Table, Form, DatePicker} from 'antd'

const FormCreate = Form.create
const FormItem = Form.Item

@FormCreate()
class UserForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: props.initialValues
    };
  }
  handleSubmit(e) {
    const {handleSubmit} = this.props;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        //handleSubmit(values)
      }
    });
  }
  render() {
    const {form} = this.props;
    const {getFieldDecorator, validateFieldsAndScroll} = form
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormItem label="姓名">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your username'
              }, {
                validator: this.checkConfirm
              }
            ]
          })(<Input type="text"/>)}
        </FormItem>
        <FormItem label="地址">
          {getFieldDecorator('address')(<Input type="text"/>)}
        </FormItem>
        <FormItem label="日期">
          {getFieldDecorator('born')(<Input type="text"/>)}
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">立即创建</Button>
          <Button>取消</Button>
        </FormItem>
      </Form>
    )
  }
}

class UserFormView extends Component {
  componentWillMount() {
    let {params, data, actions} = this.props;
    if (params.id) {
      actions.loadAction(params.id)
    } else {}
  }
  handleSubmit(values) {
    let {actions} = this.props
    console.log('handleSubmit')
    //  actions.fetchSave(values)
  }
  render() {
    let {params, reduce} = this.props;
    //	let model=preduce.list[0]
    let model = {}
    return (<UserForm onSubmit={this.handleSubmit.bind(this)} initialValues={model}/>)
  }
}

export default UserFormView
