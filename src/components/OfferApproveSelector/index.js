import React, { Component } from "react";
import ModalView from "app/components/Modal.view";
import WrapperComponent from "app/decorators/WrapperComponent";
import { Input, Modal, Select, Row, Col, Icon, message } from "antd";
import BaseForm, { FormItem, customRules } from "components/BaseForm";
import { FormPage } from "app/components/Page";
// Array.prototype
const Option = Select.Option
export default class OfferApproveSelector extends FormPage {
  state = {
    accSelectList: [],
    originalAccList: [],
    stageList: []
  }
  componentDidMount = () => {
    this.props.getSubForm(this)
    const { value } = this.props
    console.log(value, 'vvvv')
    let newValue = value.map((e) => ({ approvalAccount: e.approvalAccount, stage: e.stage, id: e.id }))
    this.setState({
      stageList: newValue,
      // stageList: value
    })
  }

  handleSubmit(values) {
    let { actions, router, onChange } = this.props;
    let { stageList } = this.state
    console.log(stageList, 'handleSubmithandleSubmithandleSubmit')
    onChange(stageList)
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
  handleParentSubmit() {
    this.onSubmit.call(this)
  }
  renderSelectOption(data, idx) {
    // return data.map((e, idx) => (<Option value={e.account} key={idx}>{e.name}</Option>))
    return (<Option value={data.account} key={idx}>{data.name}</Option>)
  }
  handleAddStage() {
    let { stageList } = this.state
    if (stageList.length >= 3) return message.warn('最多添加三个流程')
    stageList.push({ stage: stageList.length + 1, approvalAccount: '' })
    this.setState({
      stageList
    })
  }
  handleAccChange(index, val) {
    let { stageList } = this.state
    stageList[index].approvalAccount = val
    this.setState({
      stageList
    }, () => {
      this.onSubmit.call(this)
    })
  }
  render() {
    const { onSubmit, saveFormRef, item, selectList } = this.props;
    let labelMapper = {
      1: "一级审批",
      2: "二级审批",
      3: "三级审批",
    }
    return (
      <BaseForm onSubmit={onSubmit} ref={this.saveFormRef}>
        流程阶段<Icon onClick={this.handleAddStage.bind(this)} type="plus" />
        {
          this.state.stageList.map((e, index) => {
            return (
              <FormItem>
                <Select label={labelMapper[e.stage]}
                  name={`${index}`}
                  showSearch
                  optionFilterProp="children"
                  defaultValue={e.approvalAccount}
                  rules={[{ required: true, message: `不可为空`, }]}
                  onChange={this.handleAccChange.bind(this, index)}
                  fetch={selectList} renderItem={this.renderSelectOption.bind(this)} />
              </FormItem>
            )
          })
        }
      </BaseForm>
      // <Row>
      //   <Col span={6} style={{textAlign:'right'}}>
      //     审批人
      //   </Col>
      //   <Col span={18}>
      //     <Select
      //       // name="approvalAccount"
      //       showSearch
      //       optionFilterProp="children"
      //       // onBlur={this.handleChange.bind(this)}
      //       rules={[{ required: true, message: `不可为空`, }]}>
      //       {this.renderSelectOption(selectList)}
      //     </Select>
      //   </Col>
      // </Row>
    );
  }
}
