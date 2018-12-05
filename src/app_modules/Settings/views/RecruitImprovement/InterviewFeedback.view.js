import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import PageView from 'app/components/Page'
import DataTable from 'app/components/DataTable'
import { Button, Card, Collapse, Divider } from "antd"
import ButtonGroups from 'app/components/ButtonGroups'
const Panel = Collapse.Panel;
@NestedComponent()
export default class InterviewFeedback extends PageView {
  renderToolbar() {
    return (
      <ButtonGroups >
        <Button type="primary" permission="company" actionkey="add">添加</Button>
      </ButtonGroups>
    )
  }
  componentDidMount() {
    const { actions } = this.props
    actions.interviewFeedbackListAction()
  }
  _renderQuestionListItem(length, type) {
    return (e, index) => (
      <div>
        <p>{`${index + 1}. `}{e.question}</p>
        {
          type == 1 ?
            <div style={{ paddingLeft: '2em' }}>
              <p>A. {e.optionA}</p>
              <p>B. {e.optionB}</p>
              <p>C. {e.optionC}</p>
              <p>D. {e.optionD}</p>
            </div>
            :
            null}
        {index + 1 == length ? null : <Divider />}
      </div>
    )
  }
  _renderQuestionList(dataList = [], type) {
    const length = dataList.length
    // if (type == 1) {
    //   // 选择 带有ABCD四个选项
    //   return dataList.map(this._renderQuestionListItem(length))
    // }
    return dataList.map(this._renderQuestionListItem(length, type))
  }
  renderCollpase() {
    const { items } = this.props
    const typeMapper = {
      1: "选择型",
      2: "打分型",
      3: "问答型",
    }
    let resultEle = items.map(e => (
      <Collapse className="feedback-collpase"  >
        <Panel showArrow={true} header={<h3>{`${e.name} ( ${typeMapper[e.type]} )`}</h3>} key={e.id}>
          {this._renderQuestionList(e.questionList, e.type)}
        </Panel>
      </Collapse>))

    return resultEle
  }

  render() {

    return (
      <Card title={<div><h3 className="card-title">面试反馈模板设置</h3></div>} extra={this.renderToolbar()}	>
        {this.renderCollpase()}
      </Card>
    )
  }
}
