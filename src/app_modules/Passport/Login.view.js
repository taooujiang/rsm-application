/**
* @Author: jax <jaxchow>
* @Date:   2016-03-08T09:26:47+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2017-12-28T16:54:40+08:00
* @Description: login view
*/

import React, {Component, PropTypes} from 'react'
import {
  Layout,
  Col,
  Row,
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Card,
  Tabs,
  Alert
} from 'antd';
//import {reduxForm} from 'redux-form'
const TabPane= Tabs.TabPane;
const FormItem = Form.Item;
const FormCreate = Form.create
import styles from './Login.less'

@FormCreate()
class LoginForm extends Component {
 state = {
   count: 0,
   type: 'account',
 }

 componentWillUnmount() {
   clearInterval(this.interval);
 }

 onSwitch = (type) => {
   this.setState({ type });
 }

 onGetCaptcha = () => {
   let count = 59;
   this.setState({ count });
   this.interval = setInterval(() => {
     count -= 1;
     this.setState({ count });
     if (count === 0) {
       clearInterval(this.interval);
     }
   }, 1000);
 }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  renderMessage = (message) => {
    return (
      <Alert
        style={{ marginBottom: 24 }}
        message={message}
        type="error"
        showIcon
      />
    );
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const { form, login } = this.props;
    const { count, type } = this.state;
    return (
        <Form onSubmit={this.handleSubmit}>
          <Tabs animated={false} className={styles.tabs} activeKey={type} onChange={this.onSwitch}>
            <TabPane tab="账户密码登录" key="account">
              {
                // login.status === 'error' &&
                // login.type === 'account' &&
                // login.submitting === false &&
                this.renderMessage('账户或密码错误')
              }
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{
                    required: type === 'account', message: '请输入账户名！',
                  }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="user" className={styles.prefixIcon} />}
                    placeholder="admin"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{
                    required: type === 'account', message: '请输入密码！',
                  }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="lock" className={styles.prefixIcon} />}
                    type="password"
                    placeholder="888888"
                  />
                )}
              </FormItem>
            </TabPane>
            <TabPane tab="手机号登录" key="mobile">
              {
                // login.status === 'error' &&
                // login.type === 'mobile' &&
                // login.submitting === false &&
                this.renderMessage('验证码错误')
              }
              <FormItem>
                {getFieldDecorator('mobile', {
                  rules: [{
                    required: type === 'mobile', message: '请输入手机号！',
                  }, {
                    pattern: /^1\d{10}$/, message: '手机号格式错误！',
                  }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="mobile" className={styles.prefixIcon} />}
                    placeholder="手机号"
                  />
                )}
              </FormItem>
              <FormItem>
                <Row gutter={8}>
                  <Col span={16}>
                    {getFieldDecorator('captcha', {
                      rules: [{
                        required: type === 'mobile', message: '请输入验证码！',
                      }],
                    })(
                      <Input
                        size="large"
                        prefix={<Icon type="mail" className={styles.prefixIcon} />}
                        placeholder="验证码"
                      />
                    )}
                  </Col>
                  <Col span={8}>
                    <Button
                      disabled={count}
                      className={styles.getCaptcha}
                      size="large"
                      onClick={this.onGetCaptcha}
                    >
                      {count ? `${count} s` : '获取验证码'}
                    </Button>
                  </Col>
                </Row>
              </FormItem>
            </TabPane>
          </Tabs>
          <FormItem className={styles.additional}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox className={styles.autoLogin}>自动登录</Checkbox>
            )}
            <a className={styles.forgot} href="">忘记密码</a>
            <Button size="large" loading={login} className={styles.submit} type="primary" htmlType="submit">
              登录
            </Button>
          </FormItem>
        </Form>
    );
  }
}

export default class LoginView extends Component {
  handleSubmit(values) {
    let {actions} = this.props
    //actions.loginAction(values)
    //actions.doLogin("test", "test")
  }
  render() {
    return (
        <div className={styles.main}>
            <LoginForm onSubmit={this.handleSubmit.bind(this)} actions={this.props.actions}/>
            <div className={styles.other}>
              其他登录方式
              {/* 需要加到 Icon 中 */}
              <span className={styles.iconAlipay} />
              <span className={styles.iconTaobao} />
              <span className={styles.iconWeibo} />
            </div>
        </div>
    )
  }
}
