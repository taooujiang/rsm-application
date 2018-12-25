import React, { Component } from "react";
import ModalView from "app/components/Modal.view";
// import OfferApproveSelector from "app/components/OfferApproveSelector";
import WrapperComponent from "app/decorators/WrapperComponent";
import { Input, Modal, Select, Row, Col, Icon, message } from "antd";
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
    let flag = values.stageList.length && values.stageList.every(e => e.approvalAccount)
    if (!flag) {
      return void 0
    }
    if (values.stageList.length) {
      values.stageList = values.stageList.map(e => {
        const { /*id,*/ approvalAccount, stage } = e
        return { /*id,*/ approvalAccount, stage }
      })
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
    const { onSubmit, item, } = this.props;
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
            rules={[{ max: 10, message: "最多输入10个字！" }, { validator: customRules.remote, value: '/sysSetOfferApproval/nameIsExistsJson', name: "name", id: item.id }, { required: true, message: `不可为空`, whitespace: true },{validator: customRules.required}]}
          />
        </FormItem>

        <FormItem style={{ padding: '0' }}>
          <OfferApproveSelector defaultValue={item.stageList ? item.stageList : [{ stage: 1, approvalAccount: '' }]}
            name="stageList" getSubForm={this.getSubForm.bind(this)} selectList={this.state.accSelectList} />
        </FormItem>
      </BaseForm>
    );
  }
}


class OfferApproveSelector extends FormPage {
  state = {
    accSelectList: [],
    originalAccList: [],
    stageList: []
  }
  componentDidMount = () => {
    this.props.getSubForm(this)
    const { value } = this.props
    let newValue = value.map((e) => ({ approvalAccount: e.approvalAccount, stage: e.stage, /*id: e.id*/ }))
    this.setState({
      stageList: newValue,
    })
  }

  handleSubmit(values) {
    let { onChange } = this.props;
    let { stageList } = this.state
    onChange(stageList)
  }
  handleParentSubmit() {
    this.onSubmit.call(this)
  }
  renderSelectOption(data, idx) {
    return (<Option value={data.account} key={idx}>{data.name}</Option>)
  }
  handleAddStage() {
    let { stageList } = this.state
    if (stageList.length >= 3) return message.warn('最多添加三个流程')
    stageList.push({ stage: stageList.length + 1, approvalAccount: '' })
    this.setState({
      stageList
    },()=>{
      this.props.onChange(stageList)
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
  handleDeleteQuestion(stage) {
    let { stageList } = this.state
    stageList = stageList.filter(e => e.stage != stage).map((e, index) => ({ ...e, stage, stage: index + 1 }))
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
              <div className="offerapprove-question-item">
                <FormItem style={{ paddingRight: '50px' }}>
                  <Select label={labelMapper[e.stage]}
                    name={`${index}`}
                    showSearch
                    optionFilterProp="children"
                    defaultValue={e.approvalAccount}
                    rules={[{ required: true, message: `不可为空`, },{validator: customRules.required}]}
                    onChange={this.handleAccChange.bind(this, index)}
                    fetch={selectList} renderItem={this.renderSelectOption.bind(this)} />
                </FormItem>
                {index + 1 == this.state.stageList.length && index != 0 ? <Icon onClick={this.handleDeleteQuestion.bind(this, e.stage)} className="offerapprove-delete-icon" type="delete" /> : null}
              </div>
            )
          })
        }
      </BaseForm>
    );
  }
}
