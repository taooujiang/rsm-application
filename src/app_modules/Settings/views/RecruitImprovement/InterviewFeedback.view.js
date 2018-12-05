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
      <ButtonGroups handleClick={this.handleAddMenu.bind(this)}>
        <Button type="primary" permission="company" actionkey="add">添加</Button>
      </ButtonGroups>
    )
  }

  handleAddMenu(actionkey) {
    let { actions, router } = this.props;
    if (actionkey == "add") {
      actions.addRoute(router)
    }
  }
  componentDidMount() {
    const { actions } = this.props
    actions.interviewFeedbackListAction()
  }
  renderCollpase() {
    const { items,actions, } = this.props
    return items.map(e => {
      return (
        <CollapsePanel item={e} actions={actions} />
      )
    })
  }

  render() {

    return (
      <Card title={<div><h3 className="card-title">面试反馈模板设置</h3></div>} extra={this.renderToolbar()}	>
        {this.renderCollpase()}
      </Card>
    )
  }
}


class CollapsePanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
  }

  handleCollapse(key) {
    let flag = Boolean(key.length)
    this.setState({
      isShow: flag
    })
  }
  handleBtnGroupClick(id, type) {
    let { actions,  } = this.props;
    actions[type]({ id })
  }
  _renderQuestionList(dataList = [], type) {
    const length = dataList.length
    return dataList.map(this._renderQuestionListItem(length, type))
  }
  _renderQuestionListItem(length, type) {
    return (e, index) => (
      <div>
        <p>{`${index + 1}. `}{e.question}</p>
        {
          type == 1 ?
            // 选择 带有ABCD四个选项
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
  render() {
    const typeMapper = {
      1: "选择型",
      2: "打分型",
      3: "问答型",
    }
    const { item } = this.props
    const header = (
      <h3 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '40px'
      }}>
        <span>{`${item.name} ( ${typeMapper[item.type]} )`}</span>
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <ButtonGroups  handleClick={this.handleBtnGroupClick.bind(this,item.id)}>
            <Button type="primary" actionkey="interviewFeedbackTemplateEditAction" style={{ marginRight: '10px' }}>
              编辑
          </Button>
            {/* <Button type="primary" permission="company" confirm="确认删除" actionkey="interviewFeedbackTemplateDeleteAction">删除</Button> */}
          </ButtonGroups>
          <div style={{ marginLeft: '15px' }}>{this.state.isShow?'收起':'展开'}</div>
        </div>
      </h3>)
    return (
      <Collapse onChange={this.handleCollapse.bind(this)} className="feedback-collpase"  >
        <Panel showArrow={true} header={header} key={item.id}>
          {this._renderQuestionList(item.questionList, item.type)}
        </Panel>
      </Collapse>)
  }
}