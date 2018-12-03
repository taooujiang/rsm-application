import React, { Component } from "react";
import ModalView from "app/components/Modal.view";
import OfferApproveSelector from "app/components/OfferApproveSelector";
import WrapperComponent from "app/decorators/WrapperComponent";
import { Input, Modal, Select, Row, Col, Cascader, message } from "antd";
import BaseForm, { FormItem, customRules } from "components/BaseForm";
import { FormPage } from "app/components/Page";
import { fechAvailableAccount } from '../../api'
// Array.prototype OfferApproveSelector
const Option = Select.Option
@WrapperComponent(ModalView)
export default class OfferApproveForm extends FormPage {
  state = {
    accSelectList: [],
    originalAccList: []
  }
  componentDidMount = () => {
    const { item } = this.props
    console.log(item, 'mmmmmmmmmmmmmmmmmmmmm')
    fechAvailableAccount().then(res => {
      this.setState({
        originalAccList: res,
        accSelectList: res
      })
    })
  }
  getSubForm(ref) {
    this.setState({
      subForm: ref
    })
  }
  handleSubmit(values) {
    let { actions, router } = this.props;
    this.state.subForm.handleParentSubmit()
    //flag stageList是否可提交
    let flag = values.stageList ? values.stageList.every(e => e.approvalAccount) : !!values.stageList
    if (!flag) {
      return void 0
    }
    actions.offerApproveSaveAction(values);
    actions.backRoute(router);
  }
  renderSelectOption(data, idx) {
    return (<Select.Option value={data.account} key={idx}>{data.name}</Select.Option>)
  }
  handleSelectSearch(value) {
    console.log(value)
    let newSelectList = this.state.originalAccList.filter(e => e.name.includes(value))
    this.setState({
      accSelectList: newSelectList
    })
  }
  render() {
    //见FormPage.view.js
    const { onSubmit, saveFormRef, item, } = this.props;
    console.log(this.props);
    return (
      <BaseForm onSubmit={onSubmit} ref={this.saveFormRef}>
        {/* <FormItem className="row-hidden">
          <Input name="optionId" type="hidden" defaultValue={item.optionId} />
        </FormItem>
        <FormItem className="row-hidden">
          <Input name="optionCode" type="hidden" defaultValue={optionCode} />
        </FormItem> */}
        {item.id ?
          <FormItem className="row-hidden">
            <Input name="id" type="hidden" defaultValue={item.id} />
          </FormItem> :
          null}
        <FormItem>
          <Input
            label='审批流程名称'
            name="name"
            placeholder={"请输入"}
            defaultValue={item.name}
            // defaultValue={item.optionName}
            rules={[{ max: 10, message: "最多输入10个字！" }, { required: true, message: `不可为空`, whitespace: true }]}
          />
        </FormItem>

        {/* <p>流程阶段</p> */}
        {/* <FormItem>
          <Input
            label='审批人'
            name="optionName"
            placeholder={"请输入"}
            // defaultValue={item.optionName}
            rules={[{ max: 10, message: "最多输入10个字！" },{ required: true, message: `不可为空`,whitespace:true }]}
          />
        </FormItem> */}
        <FormItem style={{ padding: '0' }}>
          <OfferApproveSelector defaultValue={item.stageList ? item.stageList : []}
            name="stageList" getSubForm={this.getSubForm.bind(this)} selectList={this.state.accSelectList} />
        </FormItem>
      </BaseForm>
    );
  }
}
