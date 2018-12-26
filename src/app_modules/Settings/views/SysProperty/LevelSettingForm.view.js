import React, { Component } from "react";
import ModalView from "app/components/Modal.view";
import WrapperComponent from "app/decorators/WrapperComponent";
import { Input, Modal, Select, Row, Col, Cascader, message } from "antd";
import BaseForm, { FormItem, customRules } from "components/BaseForm";
import { FormPage } from "app/components/Page";
import { saveLevelSetting } from '../../api'

@WrapperComponent(ModalView)
export default class LevelSettingForm extends FormPage {
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
    console.log(values)
    saveLevelSetting(values).then(res => {
      message.success("保存成功");
      actions.levelSettingListAction()
      actions.backRoute(router);
    }).catch(e => {
      message.error(e.msg);
    })
  }
  renderSelectOption(data, idx) {
    return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  render() {
    //见FormPage.view.js
    const { onSubmit, saveFormRef, item, } = this.props;
    console.log(item, 'itemitemitem');
    let validRules = item.id ?
      [{ max: 15, message: "最多输入15个字！" }, { validator: customRules.remote, value: '/sysPositionLevel/findNameIsExist', name: "positionName", id: item.id , defaultValue:item.positionName}, { required: true, message: `职位级别不可为空`, whitespace: true },{ validator: customRules.required}]
      :
      [{ max: 15, message: "最多输入15个字！" }, { validator: customRules.remote, value: '/sysPositionLevel/findNameIsExist', name: "positionName" }, { required: true, message: `职位级别不可为空`, whitespace: true },{ validator: customRules.required}]
      console.log(validRules)
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
            label='职位级别'
            name="positionName"
            placeholder="请输入职位级别"
            defaultValue={item.positionName}
            rules={validRules}
          />
        </FormItem>

        <FormItem>
          <Select label='职级等级'
            name="positionLeavel"
            defaultValue={item.positionLeavel}
            rules={[{ required: true, message: "职级等级不可为空" }]}
            // onChange={this.handleSelectChange.bind(this)}
            fetch={this.state.levelArr} renderItem={this.renderSelectOption} />

        </FormItem>
      </BaseForm>
    );
  }
}


@WrapperComponent(ModalView)
export class LevelSettingDeleteForm extends FormPage {
  state = {
    levelArr: []
  }
  componentDidMount = () => {
    const { items, item } = this.props
    let exsistLevelArr = []
    if (items.length) {
      for (let index = 0; index < items.length; index++) {
        if (item.positionLeavel == items[index].positionLeavel) continue
        let newItem = {
          keyValue: items[index].id,
          keyName: items[index].positionLeavel + "级"
        }
        exsistLevelArr.push(newItem)
      }
    }
    this.setState({
      levelArr: exsistLevelArr
    })
  }

  handleSubmit(values) {
    let { actions, router } = this.props;
    // if (
    //     values &&
    //     values.optionName.indexOf('$')>-1
    // ) {
    //   message.error("请勿输入特殊字符$");
    //   return false;
    // } else {
    actions.deleteLevelSettingAction(values)
    //   actions.saveOptionAction(values);
    actions.backRoute(router);
    // }
  }
  renderSelectOption(data, idx) {
    return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  render() {
    //见FormPage.view.js
    const { onSubmit, saveFormRef, item, items } = this.props;
    console.log(item, 'itemitemitem', items);
    return (
      <BaseForm onSubmit={onSubmit} ref={this.saveFormRef}>

        删除前，请确认该级别下的数据是否合并到其他级别？

        <FormItem className="row-hidden">
          <Input name="id" type="hidden" defaultValue={item.id} />
        </FormItem>
        <FormItem>
          <Select label='合并级别'
            name="unionId"
            // onChange={this.handleSelectChange.bind(this)}
            fetch={this.state.levelArr} renderItem={this.renderSelectOption} />

        </FormItem>
      </BaseForm>
    );
  }
}
