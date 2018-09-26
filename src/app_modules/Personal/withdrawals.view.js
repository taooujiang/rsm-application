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
import BaseForm,{FormItem, customRules} from 'components/BaseForm'

const Option = Select.Option
const {TextArea} = Input

class WithdrawalsForm extends Component{

  render() {
    const {
      handleSubmit,
      saveFormRef,
      account,
      moneyClear
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
          <Input type="hidden" name="account" defaultValue={account}/>
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <Input label="金额" name="money" rules={[{required:true,message:"金额不可为空"},{validator:customRules.checkMoney},{validator:customRules.checkWithdrawalsMoney,moneyClear:moneyClear}]}/>
        </FormItem>
        <FormItem {...formFullItemLayout}>
          <Input label="支付宝号" name="alipayAcct" rules={[{required:true,message:"支付宝号不可为空"}]}/>
        </FormItem>
      </BaseForm>
    )
  }
}

@WrapperComponent(ModalView)
class WithdrawalsFormView extends FormPage{
  //请求远程数据接口
  componentWillMount() {
    let {actions,params} = this.props
      actions.getAccActions()
  //  actions.itemAction("1")
  }
  //处理表格提交后动作
  handleSubmit(values){
    let {actions,router} = this.props
    actions.withdrawalsAction(values)
    actions.backRoute(router)
  }
  render() {
    let {params,appConfig:{user:{account}}, reduce:{spins:{formSpin},accountInfo,item:{moneyClear}}} = this.props
    //	let model=preduce.list[0]
    // console.log(moneyClear)
    return (
      <Spin tip="Loading..." spinning={false}>
        <WithdrawalsForm handleSubmit={this.handleSubmit} params={params}  saveFormRef={this.saveFormRef} account={account} moneyClear={moneyClear}>
            <Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}>确认</Button>
            <Button>取消</Button>
        </WithdrawalsForm>
      </Spin>
    )
  }
}

export default WithdrawalsFormView
