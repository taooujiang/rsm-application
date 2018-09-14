import React, { Component } from "react";
import ModalView from "app/components/Modal.view";
import WrapperComponent from "app/decorators/WrapperComponent";
import { Input, Modal, Select, Row, Col, Cascader, message } from "antd";
import BaseForm, { FormItem, customRules } from "components/BaseForm";
import { FormPage } from "app/components/Page";

@WrapperComponent(ModalView)
export default class SysOptionForm extends FormPage {
  handleSubmit(values) {
    let { actions, router } = this.props;
    if (
        values &&
        values.optionName.indexOf('$')>-1
    ) {
      message.error("请勿输入特殊字符$");
      return false;
    } else {
      actions.saveOptionAction(values);
      actions.backRoute(router);
    }
  }
  render() {
    //见FormPage.view.js
    const { onSubmit, saveFormRef, item, optionCode, optionLabel } = this.props;
    console.log(this.props);
    return (
      <BaseForm onSubmit={onSubmit} ref={this.saveFormRef}>
        <FormItem className="row-hidden">
          <Input name="optionId" type="hidden" defaultValue={item.optionId} />
        </FormItem>
        <FormItem className="row-hidden">
          <Input name="optionCode" type="hidden" defaultValue={optionCode} />
        </FormItem>
        <FormItem>
          <Input
            label={optionLabel}
            name="optionName"
            placeholder={"请输入" + optionLabel}
            defaultValue={item.optionName}
            rules={[{ max: 10, message: "最多输入10个字！" }]}
          />
        </FormItem>
      </BaseForm>
    );
  }
}
