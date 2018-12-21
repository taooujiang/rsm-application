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
    type: 1,
  }
  componentDidMount = () => {
    const { item } = this.props
    this.setState({ type: item.type || 1, usedType: item.type })
  }
  handleSubmit(values) {
    let { actions, router } = this.props;
    this.state.subForm.handleParentSubmit()
    let flag = false
    if (this.state.type == 1) {
      // 选择题检测ABCD四项是否填写
      flag = values.questionList.length && values.questionList.every(e => e.question && e.optionA && e.optionB && e.optionC && e.optionD)
    } else {
      flag = values.questionList.length && values.questionList.every(e => e.question)
    }
    if (!flag) {
      return void 0
    }
    actions.interviewFeedbackSaveAction(values);
    actions.backRoute(router);
  }
  getSubForm(ref) {
    this.setState({
      subForm: ref
    })
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
            rules={[{ max: 15, message: "最多输入15个字！" }, { validator: customRules.remote, value: '/sysInterviewFeedbackTemplate/nameIsExistsJson', name: "name", id: item.id }, { required: true, message: `不可为空`, whitespace: true }]}
          />
        </FormItem>
        <FormItem>
          <Select name="type" label="模板类型" defaultValue={item.type || 1} onChange={this.handleTemplateTypeChange.bind(this)} fetch={templateTypeSelectOption} renderItem={this.renderTemplateTypeSelectOption} />
        </FormItem>
        <FormItem style={{ paddingLeft: '0' }}>
          <QuestionForm getSubForm={this.getSubForm.bind(this)} name="questionList" type={this.state.type}
            usedType={this.state.usedType} defaultValue={item.questionList || []} />
        </FormItem>
      </BaseForm>
    );
  }
}

const questionTypeMapper = {
  1: 'selectQuestionList',
  2: 'rateQuestionList',
  3: 'answerQuestionList',
}
// { type: 1, name: "选择型" }, { type: 2, name: "打分型" }, { type: 3, name: "问答型" }
class QuestionForm extends FormPage {
  state = {
    questionList: [{ templateType: 1, sort: 1 }],
    selectQuestionList: [{ templateType: 1, sort: 1 }],
    rateQuestionList: [{ templateType: 2, sort: 1 }],
    answerQuestionList: [{ templateType: 3, sort: 1 }]
  }
  handleSubmit(values) {
    let { onChange } = this.props;
    let { questionList } = this.state
    onChange(questionList)
  }
  handleParentSubmit() {
    this.onSubmit.call(this)
  }
  componentWillReceiveProps = (nextProps) => {
    const { type, usedType } = nextProps
    console.log(type, this.props.type, 777, usedType)
    // this.setState({ [questionTypeMapper[type]]: this.state.questionList },()=>{console.log(this.state,11111)})
    // if (!!usedType && usedType != this.props.type) {
    //   this.setState({ [questionTypeMapper[type]]: this.state.questionList }, () => { console.log(this.state, 11111) })
    // }
    if (!!usedType && (this.props.usedType != usedType)) {//拿到初始化的questionList存入state对应list
      console.log(usedType, this.props.usedType, this.props.value)
      this.setState({ [questionTypeMapper[usedType]]: this.props.value })
    }
    if (type != this.props.type) {//切换了类型
      console.log('dsadsadasdsa', type, this.props.type)
      this.setState({
        // questionList: this.state[questionTypeMapper[type]],
        [questionTypeMapper[this.props.type]]: this.state.questionList
      }, () => {
        this.setState({
          questionList: this.state[questionTypeMapper[type]]
        })
        console.log(this.state, this.props.type, type, 'this.state.questionListthis.state.questionListthis.state.questionList')
      })
      // if (type != usedType) {//还原为state中对应的数据
      //   console.log(this.state[questionTypeMapper[type]], 666)
      //   // this.setState({ questionList: [{ templateType: type, sort: 1 }] })
      //   this.setState({ questionList: this.state[questionTypeMapper[type]] })
      // }
    }
  }
  componentDidMount() {
    this.props.getSubForm(this)
    let { value, type, usedType } = this.props
    console.log(usedType, 'usedTypeusedTypeusedTypeusedTypeusedTypeusedType')
    if (value.length) {
      let questionList = value.map(e => {
        const { optionA, optionB, optionC, optionD, question, /*templateId,*/ templateType,/* id,*/ sort } = e
        return {
          optionA, optionB, optionC, optionD, question, /*templateId,*/ templateType,/* id,*/ sort,
          key: `${Math.random()}`
        }
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
      //console.log(this.state,22222)
      this.props.onChange(questionList)
    })
  }
  handleAddQuestion(type) {
    let { questionList } = this.state
    questionList.push({ templateType: type, sort: questionList.length + 1, key: `${Math.random()}` })
    this.setState({ questionList })
  }
  handleDeleteQuestion(sort, id) {

    let { questionList } = this.state
    questionList = questionList.filter(e => e.sort != sort).map((e, index) => ({ ...e, sort: index + 1 }))
    this.setState({
      questionList
    }, () => {
      this.props.onChange(questionList)
    })
  }
  renderQuestionList() {
    const { type } = this.props
    if (type == 1) {
      return this.state.questionList.map((e, index) => (
        [<div key={e.id || e.key} className="interview-template-question" >
          <FormItem style={{ paddingLeft: '30px', paddingRight: '50px' }}>
            <Input
              label={index + 1}
              name={`${index}`}
              onChange={this.handleInputChange.bind(this, 'question', index)}
              defaultValue={e.question}
              placeholder={"请输入"}
              rules={[{ max: 15, message: "最多输入15个字！" }, { required: true, message: `不可为空`, whitespace: true }]}
            />
          </FormItem>
          {this.state.questionList.length == 1 ? null : <Icon onClick={this.handleDeleteQuestion.bind(this, index + 1)} className="interview-template-delete-icon" type="delete" />}
        </div>,
        <div style={{ padding: '10px 50px', position: 'relative' }}>
          <FormItem style={{ paddingLeft: '30px', }}>
            <Input
              label="A"
              name={`${index}A`}
              defaultValue={e.optionA}
              onChange={this.handleInputChange.bind(this, 'optionA', index)}
              placeholder={"请输入"}
              rules={[{ required: true, message: `不可为空`, whitespace: true }]}
            />
          </FormItem>
        </div>,
        <div style={{ padding: '10px 50px' }}>
          <FormItem style={{ paddingLeft: '30px', }}>
            <Input
              label="B"
              name={`${index}B`}
              defaultValue={e.optionB}
              onChange={this.handleInputChange.bind(this, 'optionB', index)}
              placeholder={"请输入"}
              rules={[{ required: true, message: `不可为空`, whitespace: true }]}
            />
          </FormItem>
        </div>,
        <div style={{ padding: '10px 50px' }}>
          <FormItem style={{ paddingLeft: '30px', }}>
            <Input
              label="C"
              name={`${index}C`}
              defaultValue={e.optionC}
              onChange={this.handleInputChange.bind(this, 'optionC', index)}
              placeholder={"请输入"}
              rules={[{ required: true, message: `不可为空`, whitespace: true }]}
            />
          </FormItem>
        </div>,
        <div style={{ padding: '10px 50px' }}>
          <FormItem style={{ paddingLeft: '30px', }}>
            <Input
              label="D"
              name={`${index}D`}
              defaultValue={e.optionD}
              onChange={this.handleInputChange.bind(this, 'optionD', index)}
              placeholder={"请输入"}
              rules={[{ required: true, message: `不可为空`, whitespace: true }]}
            />
          </FormItem>
        </div>, <Divider />
        ]
      ))
    }
    return this.state.questionList.map((e, index) => (
      [<div key={e.id || e.key} className="interview-template-question" >
        {/* <div style={{ marginLeft: '10px' }} className="interview-template-question-label">{`${index + 1}. `}</div> */}
        <FormItem style={{ paddingLeft: '30px', paddingRight: '50px' }}>
          <Input
            onChange={this.handleInputChange.bind(this, 'question', index)}
            label={index + 1}
            name={`question${index}${type}`}
            defaultValue={e.question}
            placeholder={"请输入"}
            rules={[{ max: 15, message: "最多输入15个字！" }, { required: true, message: `不可为空`, whitespace: true }]}
          />
        </FormItem>
        {this.state.questionList.length == 1 ? null : <Icon onClick={this.handleDeleteQuestion.bind(this, index + 1, e.id)} className="interview-template-delete-icon" type="delete" />}
      </div>, <Divider />]
    ))
  }
  render() {
    const { onSubmit, saveFormRef, item, selectList } = this.props;

    return (
      <BaseForm onSubmit={onSubmit} ref={this.saveFormRef} style={{ border: "1px solid #e0e0e0", paddingTop: '15px', minHeight: '200px' }} >

        {this.renderQuestionList()}

        {this.state.questionList.length > 4 ? null : <Button onClick={this.handleAddQuestion.bind(this, this.props.type)}
          style={{ margin: '10px auto', display: 'block' }} type="primary">
          添加题目
        </Button>}

      </BaseForm>
    )
  }
}
