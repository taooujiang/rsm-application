/**
* @Author: jax <jaxchow>
* @Date:   2016-03-08T09:26:47+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2017-12-27T15:31:15+08:00
* @Description: login view
*/

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Card
} from 'antd';
//import {reduxForm} from 'redux-form'
const FormItem = Form.Item;
const FormCreate = Form.create


@FormCreate()
class RegisterForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }


  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [
              {
                required: true,
                message: 'Please input your username!'
              }
            ]
          })(
            <Input prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>} placeholder="Username"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your Password!'
              }
            ]
          })(
            <Input prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>} type="password" placeholder="Password"/>
          )}
        </FormItem>
        <ButtonToolbar>
          <Button bsStyle="primary" type="submit" disable={submitting}>Register</Button>
        </ButtonToolbar>
      </Form>
    )
  }
}

class RegisterView extends Component {
  handleSubmit(values) {
    let {actions} = this.props
    actions.goLogin()
  }
  render() {
    return (
      <Card header="Register User">
        <RegisterForm onSubmit={this.handleSubmit.bind(this)}/>
      </Card>
    )
  }
}

export default RegisterView
