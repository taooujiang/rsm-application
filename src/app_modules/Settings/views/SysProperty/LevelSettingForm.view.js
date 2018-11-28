import React, { Component } from "react";
import ModalView from "app/components/Modal.view";
import WrapperComponent from "app/decorators/WrapperComponent";
import { Input, Modal, Select, Row, Col, Cascader, message } from "antd";
import BaseForm, { FormItem, customRules } from "components/BaseForm";
import { FormPage } from "app/components/Page";
import { saveLevelSetting } from '../../api'

@WrapperComponent(ModalView)
export default class OfferApproveForm extends FormPage {
  state = {
    levelArr: []
  }
  componentDidMount = () => {
    const { items, item } = this.props
    console.log(item, 'mmmmmmmmmmmmmmmmmmmmmm')
    let exsistLevelArr = []
    if (items.length) {
      for (let index = 0; index < items.length; index++) {
        if (item.positionLeavel == items[index].positionLeavel) continue
        exsistLevelArr.push(items[index].positionLeavel)
      }
    }
    let levelSelectArr = []
    for (let index = 1; index < 31; index++) {
      if (exsistLevelArr.includes(index)) continue
      let item = {
        keyValue: index,
        keyName: index + "级"
      }
      levelSelectArr.push(item)
    }
    this.setState({
      levelArr: levelSelectArr
    })
  }

  handleSubmit(values) {
    let { actions, router } = this.props;
    console.log(values, 'ssssssssssssss')
    // if (
    //     values &&
    //     values.optionName.indexOf('$')>-1
    // ) {
    //   message.error("请勿输入特殊字符$");
    //   return false;
    // } else {
    saveLevelSetting(values).then(res => {
      message.success("保存成功");
      actions.levelSettingListAction()
      actions.backRoute(router);
    }).catch(e => {
      message.error(e.msg);
    })
    //   actions.saveOptionAction(values);
    //   actions.backRoute(router);
    // }
  }
  renderSelectOption(data, idx) {
    return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  render() {
    //见FormPage.view.js
    const { onSubmit, saveFormRef, item, } = this.props;
    console.log(item, 'itemitemitem');
    return (
      <BaseForm onSubmit={onSubmit} ref={this.saveFormRef}>
        {item.id ?
          <FormItem className="row-hidden">
            <Input name="id" type="hidden" defaultValue={item.id} />
          </FormItem>
          :
          null}
        <FormItem>
          <Input
            label='职位名称'
            name="positionName"
            placeholder="请输入职位名称"
            defaultValue={item.positionName}
            rules={[{ max: 15, message: "最多输入15个字！" }, { required: true, message: `不可为空`, whitespace: true }]}
          />
        </FormItem>

        <FormItem>
          <Select label='职级等级'
            name="positionLeavel"
            defaultValue={item.positionLeavel}
            rules={[{ required: true, message: "不可为空" }]}
            // onChange={this.handleSelectChange.bind(this)}
            fetch={this.state.levelArr} renderItem={this.renderSelectOption} />

        </FormItem>
      </BaseForm>
    );
  }
}
