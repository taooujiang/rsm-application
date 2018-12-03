import React, { Component } from "react";
import ModalView from "app/components/Modal.view";
import WrapperComponent from "app/decorators/WrapperComponent";
import { Input, Modal, Select, Row, Col, Cascader, message } from "antd";
import BaseForm, { FormItem, customRules } from "components/BaseForm";
import { FormPage } from "app/components/Page";
// Array.prototype
@WrapperComponent(ModalView)
export default class OfferApproveForm extends FormPage {
  handleSubmit(values) {
    let { actions, router } = this.props;
    console.log(values,'ssssssssssssss')
    // if (
    //     values &&
    //     values.optionName.indexOf('$')>-1
    // ) {
    //   message.error("请勿输入特殊字符$");
    //   return false;
    // } else {
    //   actions.saveOptionAction(values);
    //   actions.backRoute(router);
    // }
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
        <FormItem>
          <Input
            label='审批流程名称'
            name="name"
            placeholder={"请输入"}
            // defaultValue={item.optionName}
            rules={[{ max: 10, message: "最多输入10个字！" },{ required: true, message: `不可为空`,whitespace:true }]}
          />
        </FormItem>
       
        <p>流程阶段</p>
        <FormItem>
          <Input
            label='sa'
            name="optionName"
            placeholder={"请输入"}
            // defaultValue={item.optionName}
            rules={[{ max: 10, message: "最多输入10个字！" },{ required: true, message: `不可为空`,whitespace:true }]}
          />
        </FormItem>
      </BaseForm>
    );
  }
}