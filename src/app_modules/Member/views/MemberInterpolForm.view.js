
/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-03-16T17:04:48+08:00
 */

import React, { Component, PropTypes } from 'react'
import { Row, Col, Modal, Button, Input, Form, DatePicker, InputNumber, Spin, Select, TreeSelect } from 'antd'
import moment from 'moment'
import { FormPage } from 'app/components/Page'
import ModalView from 'app/components/Modal.view'
import NestedComponent from 'app/decorators/NestedComponent'
import WrapperComponent from 'app/decorators/WrapperComponent'
import { TreeSelectPicker } from 'app/components/TreeView'
import BaseForm, { FormItem, customRules } from 'app/components/BaseForm'
import ErrorBoundary from 'app/components/ErrorBoundary'
const TreeNode = TreeSelect.TreeNode;

const Option = Select.Option
const { TextArea } = Input

@WrapperComponent(ModalView, { width: 500 })
export default class MemberInterpolForm extends FormPage {
  //请求远程数据接口
  componentWillMount() {

  }
  //处理表格提交后动作
  handleSubmit(values) {
    let { actions, router, reduce: { page } } = this.props
    console.log(values, router)
    actions.interpolExchangeAction(values)
    actions.backShouldReloadRoute(router)
  }

  inputFormatter(value) {
    if (parseInt(value) > 999999999) return 999999999
    return `${~~value}`
  }
  inputParser(value) {
    if (parseInt(value) > 999999999) return 999999999
    return ~~value
  }
  render() {
    let { onSubmit, params, location, item, reduce: { spins: { formSpin }, sysFieldList }, actions } = this.props
    const { memberName, creditBalance, cashBalance } = item || {}
    let pathName = location.pathname.split('/')
    const type = pathName[pathName.length - 1]
    const typeMapper = {
      credit: {
        text: '积分',
        type: 1,
        balance: creditBalance,
        label: '兑换积分：',
        message: '兑换积分不能大于积分余额'
      },
      cash: {
        text: '现金',
        type: 2,
        balance: cashBalance,
        label: '提取现金：',
        message: '提取现金不能大于现金余额'
      },
    }
    return (
      <BaseForm onSubmit={onSubmit} ref={this.saveFormRef}>
        <p>
          <span style={{ position: 'absolute' }}>员工姓名：</span>
          <span style={{ paddingLeft: '80px' }}>{memberName}</span>
        </p>
        <p>
          <span style={{ position: 'absolute' }}>{typeMapper[type].text}余额：</span>
          <span style={{ paddingLeft: '80px' }}>{typeMapper[type].balance}</span>
        </p>
        <FormItem className="row-hidden">
          <Input name="id" type="hidden" defaultValue={item.id} />
        </FormItem>
        <FormItem className="row-hidden">
          <Input name="type" type="hidden" defaultValue={typeMapper[type].type} />
        </FormItem>
        <FormItem style={{ paddingLeft: '80px' }}>
          <InputNumber style={{ width: '100%' }}
            label={typeMapper[type].label}
            name="num"
            min={0}
            formatter={this.inputFormatter}
            parser={this.inputParser}
            // placeholder={"请输入" + 'optionLabel'}
            // defaultValue={'item.optionName'}
            rules={[{ required: true, message: `不可为空`, }, { validator: customRules.checkWithdrawalsMoney, moneyClear: typeMapper[type].balance, message: typeMapper[type].message }]}
          />
        </FormItem>
      </BaseForm>
    )
  }
}


