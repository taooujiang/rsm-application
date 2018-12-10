import React from "react";
import ModalView from "app/components/Modal.view";
import WrapperComponent from "app/decorators/WrapperComponent";
import { Input, Button, Select, Row, Icon, Divider, message } from "antd";
import BaseForm, { FormItem, customRules } from "components/BaseForm";
import { FormPage } from "app/components/Page";
import { fechAvailableAccount } from '../../api'
import './style.less'
// Array.prototype OfferApproveSelector
const Option = Select.Option
@WrapperComponent(ModalView)
export default class InterviewFeedbackForm extends FormPage {
  state = {
    type: 1
  }
  componentDidMount = () => {
    const { item } = this.props

  }
  handleSubmit(values) {
    // console.log(values)
    let { actions, router } = this.props;
    // this.state.subForm.handleParentSubmit()
    // //flag stageList是否可提交
    // let flag = values.stageList ? values.stageList.every(e => e.approvalAccount) : !!values.stageList
    // if (!flag) {
    //   return void 0
    // }
    actions.interviewFeedbackSaveAction(values);
    actions.backRoute(router);
  }
  renderTemplateTypeSelectOption(data, idx) {
    return (<Select.Option value={data.type} key={idx}>{data.name}</Select.Option>)
  }
  handleTemplateTypeChange(type) {
    this.setState({ type })
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
          <Select name="type" label="模板类型" defaultValue={item.type || 1} onChange={this.handleTemplateTypeChange.bind(this)} fetch={templateTypeSelectOption} renderItem={this.renderTemplateTypeSelectOption} />
        </FormItem>
        <FormItem style={{ paddingLeft: '0' }}>
          <QuestionForm name="questionList" type={this.state.type} defaultValue={item.questionList || []} />
        </FormItem>
      </BaseForm>
    );
  }
}


// { type: 1, name: "选择型" }, { type: 2, name: "打分型" }, { type: 3, name: "问答型" }
class QuestionForm extends React.Component {
  state = {
    questionList: []
  }
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps = (nextProps) => {
    const { type } = nextProps
    if (type != this.props.type) {
      this.setState({ questionList: [{ templateType: type, sort: 1 }] })
    }
  }
  componentDidMount() {
    let { value, type } = this.props
    if (value.length) {
      let questionList = value.map(e => {
        const { optionA, optionB, optionC, optionD, question, templateId, templateType, id, sort } = e
        return { optionA, optionB, optionC, optionD, question, templateId, templateType, id, sort }
      })
      this.props.onChange(questionList)
      this.setState({ questionList })
    } else {
      this.setState({ questionList: [{ templateType: type, sort: 1 }] })
    }

  }
  handleInputChange(optionName, index, e) {
    let { questionList } = this.state
    questionList[index][optionName] = e.target.value
    this.setState({
      questionList
    }, () => {
      this.props.onChange(questionList)
    })
  }
  handleAddQuestion(type) {
    let { questionList } = this.state
    questionList.push({ templateType: type, sort: questionList.length + 1, key: Math.random() })
    this.setState({ questionList })
  }
  handleDeleteQuestion(sort) {
    console.log(sort)
    let { questionList } = this.state
    console.log(questionList, 'handleDeleteQuestion')
    questionList = questionList.filter(e => e.sort != sort).map((e, index) => ({ ...e, sort: index + 1 }))
    console.log(questionList, 'questionListquestionListquestionList')
    this.setState({
      questionList
    }, () => {
      this.props.onChange(questionList)
      console.log(questionList, '1111111111111')
    })
  }
  renderQuestionList() {
    const { type } = this.props
    if (type == 1) {
      return this.state.questionList.map((e, index) => (
        [<div key={e.id||e.key} className="interview-template-question" style={{ paddingLeft: '30px', paddingRight: '50px', position: 'relative' }}>
          <div style={{ marginLeft: '10px' }} className="interview-template-question-label">{`${index + 1}. `}</div>
          <Input
            onChange={this.handleInputChange.bind(this, 'question', index)}
            defaultValue={e.question}
            placeholder={"请输入"}
            rules={[{ max: 15, message: "最多输入15个字！" }, { required: true, message: `不可为空`, whitespace: true }]}
          />
          <Icon onClick={this.handleDeleteQuestion.bind(this, index + 1)} className="interview-template-delete-icon" type="delete" />
        </div>,
        <div style={{ padding: '10px 50px', position: 'relative' }}>
          <div className="interview-template-question-label">A</div>
          <Input
            defaultValue={e.optionA}
            onChange={this.handleInputChange.bind(this, 'optionA', index)}
            placeholder={"请输入"}
            rules={[{ required: true, message: `不可为空`, whitespace: true }]}
          />
        </div>,
        <div style={{ padding: '10px 50px' }}>
          <div className="interview-template-question-label">B</div>
          <Input
            defaultValue={e.optionB}
            onChange={this.handleInputChange.bind(this, 'optionB', index)}
            placeholder={"请输入"}
            rules={[{ required: true, message: `不可为空`, whitespace: true }]}
          />
        </div>,
        <div style={{ padding: '10px 50px' }}>
          <div className="interview-template-question-label">C</div>
          <Input
            defaultValue={e.optionC}
            onChange={this.handleInputChange.bind(this, 'optionC', index)}
            placeholder={"请输入"}
            rules={[{ required: true, message: `不可为空`, whitespace: true }]}
          />
        </div>,
        <div style={{ padding: '10px 50px' }}>
          <div className="interview-template-question-label">D</div>
          <Input
            defaultValue={e.optionD}
            onChange={this.handleInputChange.bind(this, 'optionD', index)}
            placeholder={"请输入"}
            rules={[{ required: true, message: `不可为空`, whitespace: true }]}
          />
        </div>, <Divider />
        ]
      ))
    }
    return this.state.questionList.map((e, index) => (
      [<div key={e.id||e.key} className="interview-template-question" style={{ paddingLeft: '30px', paddingRight: '50px' }}>
        <div style={{ marginLeft: '10px' }} className="interview-template-question-label">{`${index + 1}. `}</div>
        <Input
          onChange={this.handleInputChange.bind(this, 'question', index)}
          label={index + 1}
          name="question"
          placeholder={"请输入"}
          rules={[{ max: 15, message: "最多输入15个字！" }, { required: true, message: `不可为空`, whitespace: true }]}
        />
        <Icon onClick={this.handleDeleteQuestion.bind(this, index + 1)} className="interview-template-delete-icon" type="delete" />
      </div>, <Divider />]
    ))
  }
  render() {

    return (
      <div style={{ border: "1px solid #e0e0e0", paddingTop: '15px', minHeight: '200px' }} >

        {this.renderQuestionList()}

        <Button onClick={this.handleAddQuestion.bind(this, this.props.type)}
          style={{ margin: '10px auto', display: 'block' }} type="primary">
          添加题目
        </Button>
      </div>
    )
  }
}