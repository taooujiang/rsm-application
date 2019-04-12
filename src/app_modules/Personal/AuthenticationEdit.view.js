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
  Select,
  message
} from 'antd'
import {FormPage} from 'components/Page'
import ModalView from 'components/Modal.view'
import WrapperComponent from '../../decorators/WrapperComponent'
import BaseForm,{FormItem,customRules} from 'components/BaseForm'
import API from './api'

const Option = Select.Option
const {TextArea,Search} = Input

class AuthEditForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      timer:60,
      btnText:"获取验证码",
      discodeBtn:false
    }
  }
  getCode(){
    let params = {
      account:this.props.accountInfo.account
    }
    new API().fetchEditGetCode(params).then((json) => {
      json.status ? message.success("操作成功") : null
      this.setState({
        timer:60
      },()=>{
        this.count()
      })
    })
  }
  count(){
    let {timer} = this.state
    let siv = setInterval(() => {
        this.setState({ timer: (timer--), btnText: timer+'秒后重新获取', discodeBtn: true }, () => {
            if (timer === 0) {
                clearInterval(siv);
                this.setState({ btnText: '重新发送', discodeBtn: false })
            }
        });
    }, 1000);
  }

  render() {
    const {
      handleSubmit,
      saveFormRef,
        accountInfo:{account,name},
    } = this.props
    const formFullItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    };
    let { btnText,discodeBtn} = this.state
    let btnElement =   document.querySelector('.ant-input-search .ant-input-suffix button')
    // console.log(discodeBtn)
    discodeBtn ? btnElement&&btnElement.setAttribute('disabled', discodeBtn) : btnElement&&btnElement.removeAttribute("disabled")
    return (
      <BaseForm onSubmit={handleSubmit} ref={saveFormRef}>
        <FormItem {...formFullItemLayout}>
          <Input label="手机号" name="mobile" readOnly defaultValue={account}/>
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <Input label="姓名" name="acctName" rules={[{required:true,message:"姓名不可为空"},{max:10,message:"姓名不能超过10个字"}]}/>
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <Input label="身份证" name="realNameCard" rules={[{required:true,message:"身份证号不可为空"},{validator:customRules.checkIDCard}]}/>
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <Search label="验证码" name="code"
            placeholder="请输入验证码"
            enterButton={btnText}
            rules={[{required:true,message:"验证码不可为空"},{validator:customRules.required}]}
           onSearch={this.getCode.bind(this)}
         />
        </FormItem>
      </BaseForm>
    )
  }
}

@WrapperComponent(ModalView)
class AuthentEditFormView extends FormPage{
  //请求远程数据接口
  componentWillMount() {
    let {actions,params} = this.props
      actions.accountInfoAction()
  //  actions.itemAction("1")
  }
  //处理表格提交后动作
  handleSubmit(values){
    let {actions,router} = this.props
    actions.authentEditAction(values).then(res=>{
      /*如果请求成功  无返回值 res为undefined */
      if(!res){
        actions.backRoute(router)
      }
    })
  }
  render() {
    let {params, reduce:{spins:{formSpin},item}} = this.props

    // console.log(item,'render')
    return (
      <Spin tip="Loading..." spinning={false}>
        <AuthEditForm handleSubmit={this.handleSubmit} params={params}  saveFormRef={this.saveFormRef} accountInfo={item}>
            <Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}>确认</Button>
            <Button>取消</Button>
        </AuthEditForm>
      </Spin>
    )
  }
}

export default AuthentEditFormView
