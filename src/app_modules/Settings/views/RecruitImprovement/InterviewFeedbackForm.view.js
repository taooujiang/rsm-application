import React from "react";
import ModalView from "app/components/Modal.view";
import WrapperComponent from "app/decorators/WrapperComponent";
import { Input, Modal, Select, Row, Col, Cascader, message } from "antd";
import BaseForm, { FormItem, customRules } from "components/BaseForm";
import { FormPage } from "app/components/Page";
import { fechAvailableAccount } from '../../api'
// Array.prototype OfferApproveSelector
const Option = Select.Option
@WrapperComponent(ModalView)
export default class InterviewFeedbackForm extends FormPage {
  state = {

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
  handleSubmit(values) {
    let { actions, router } = this.props;
    // this.state.subForm.handleParentSubmit()
    // //flag stageList是否可提交
    // let flag = values.stageList ? values.stageList.every(e => e.approvalAccount) : !!values.stageList
    // if (!flag) {
    //   return void 0
    // }
    // actions.offerApproveSaveAction(values);
    // actions.backRoute(router);
  }
  renderSelectOption(data, idx) {
    return (<Select.Option value={data.account} key={idx}>{data.name}</Select.Option>)
  }

  render() {
    const { onSubmit, saveFormRef, item, } = this.props;
    return (
      <BaseForm onSubmit={onSubmit} ref={this.saveFormRef}>
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
            rules={[{ max: 10, message: "最多输入10个字！" }, { validator: customRules.remote, value: '/sysSetOfferApproval/nameIsExistsJson', name: "name", }, { required: true, message: `不可为空`, whitespace: true }]}
          />
        </FormItem>

      </BaseForm>
    );
  }
}
