import React from "react";
import ModalView from "app/components/Modal.view";
import WrapperComponent from "app/decorators/WrapperComponent";
import { Input, Button, Select, Row, Col, Cascader, message } from "antd";
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
  renderTemplateTypeSelectOption(data, idx) {
    return (<Select.Option value={data.type} key={idx}>{data.name}</Select.Option>)
  }

  render() {
    const { onSubmit, saveFormRef, item, } = this.props;
    const templateTypeSelectOption = [{ type: 1, name: "选择型" }, { type: 2, name: "打分型" }, { type: 3, name: "问答型" }]
    return (
      <BaseForm onSubmit={onSubmit} ref={this.saveFormRef}>
        {item.id ?
          <FormItem className="row-hidden">
            <Input name="id" type="hidden" defaultValue={item.id} />
          </FormItem> :
          null}
        <FormItem>
          <Input
            label='模板名称'
            name="name"
            placeholder={"请输入模板名称"}
            defaultValue={item.name}
            rules={[{ max: 15, message: "最多输入15个字！" }, { required: true, message: `不可为空`, whitespace: true }]}
          />
        </FormItem>
        <FormItem>
          <Select name="type" label="模板类型" defaultValue={1} fetch={templateTypeSelectOption} renderItem={this.renderTemplateTypeSelectOption} />
        </FormItem>
        <FormItem style={{ paddingLeft: '0' }}>
          <QuestionForm name="questionList" type={1} />
        </FormItem>
      </BaseForm>
    );
  }
}

class QuestionForm extends FormPage {


  handleAddQuestion(type) {
    console.log(type)
  }
  renderQuestionList() {

  }
  render() {
    const { onSubmit, saveFormRef, item, } = this.props;

    return (
      <BaseForm style={{ border: "1px solid #e0e0e0", paddingTop: '15px', minHeight: '200px' }} onSubmit={onSubmit} ref={this.saveFormRef}>
        <FormItem>
          <Input
            label='模板名称'
            name="name"
            placeholder={"请输入"}
            rules={[{ max: 15, message: "最多输入15个字！" }, { required: true, message: `不可为空`, whitespace: true }]}
          />
        </FormItem>

        {this.renderQuestionList()}
        <Button onClick={this.handleAddQuestion.bind(this, this.props.type)} style={{ margin: '10px auto', display: 'block' }} type="primary">添加题目</Button>


      </BaseForm>
      // return (
      //   <div style={{ border: '1px solid #e0e0e0', minHeight: '200px' }}>
      //     <Button onClick={this.handleAddQuestion.bind(this)} style={{ margin: '10px auto', display: 'block' }} type="primary">添加题目</Button>
      //   </div>
    )
  }
}