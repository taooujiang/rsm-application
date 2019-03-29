import React, { Component } from "react";
import NestedComponent from "app/decorators/NestedComponent";
import { Layout, List, Avatar, Checkbox, Cascader, Card,message } from "antd";
import style from "./styles.less";
const CheckboxGroup = Checkbox.Group;

@NestedComponent()
export default class LogListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      checkedValues: []
    };
  }
  componentWillReceiveProps(nextProps) {
    const { items } = this.props;
    this.setState({
      data: items
    });
    let {actions}= this.props
    if(JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)){
      if(nextProps.location.state && nextProps.location.state.key=="reload"){
        actions.logListAction({ fatherType: nextProps.params.type })
      }
    }
    if( nextProps.params.type != this.props.params.type ){
      actions.clearUnreadNum(nextProps.params.type)
    }
    let{checkedValues} = this.state
    let newData = this.props.items.filter(item => {
      return checkedValues.indexOf(item.msgType) > -1;
    });
    console.log(checkedValues,newData)
    if (checkedValues.length) {
      this.setState({
        data: newData
      });
    } else {
      this.setState({
        data: this.props.items
      });
    }
  }
  componentDidMount() {
    const { actions, params } = this.props;
    actions.logListAction({ fatherType: params.type });
  }
  componentDidUpdate(prevProps) {
    let { actions } = this.props;
    let oldId = prevProps.params.type;
    let newId = this.props.params.type;
    if (newId != oldId) {
      this.setState({
        checkedValues: []
      });
      if (newId == 1) {
        actions.logListAction({ fatherType: 1 });
      } else if (newId == 2) {
        actions.logListAction({ fatherType: 2 });
      } else if (newId == 3) {
        actions.logListAction({ fatherType: 3 });
      } else if (newId == 4) {
        actions.logListAction({ fatherType: 4 });
      } else if (newId == 5) {
        actions.updateLogListAction({ fatherType: 5, msgType: 14 });
      } else if (newId == 6) {
        actions.logListAction({ fatherType: 6 });
      }
    }
  }
  renderCheckGroup(type) {
    let options = [];
    switch (type) {
      case "1":
        options = [
          { label: "面试安排", value: 2 },
          { label: "面试官反馈", value: 8 },
          { label: "跟进提醒", value: 9 },
          { label: "解锁提醒", value: 10 },
          { label: "诚信库提醒", value: 11 },
          { label: "offer反馈提醒", value: 12 },
          { label: "offer审批", value: 15 }
        ];
        break;
      case "2":
        options = [
          { label: "员工入职", value: 3 },
          { label: "员工转正", value: 4 },
          { label: "员工生日", value: 5 },
          { label: "员工周年", value: 6 },
          { label: "合同到期", value: 7 }
        ];
        break;
        case "6":
        options = [
          { label: "未接来电", value: 16 },
          { label: "未读短信", value: 17 }
        ];
        break;
      default:
        return null;
        break;
    }
    return (
      <CheckboxGroup
        value={this.state.checkedValues}
        options={options}
        onChange={this.handleChange.bind(this)}
      />
    );
    // return (<p>{type}</p>)
  }
  handleChange(checkedValues) {
    console.log("checked = ", checkedValues);
    console.log("this.", this.state);
    this.setState({
      checkedValues
    });
    let newData = this.props.items.filter(item => {
      console.log(checkedValues.indexOf(item.msgType) > -1);
      return checkedValues.indexOf(item.msgType) > -1;
    });
    if (checkedValues.length) {
      this.setState({
        data: newData
      });
    } else {
      this.setState({
        data: this.props.items
      });
    }
  }
  renderBusiness(id){
    // global.invokeMethod('ShowPublicUrl',keyUrl)
    return id ? <span>
    点击
    <a href="###" onClick={global.invokeMethod('ShowPublicUrl',id)}>【查看】</a>
    可访问对应关联问题。
  </span> : null
  }
  renderDescription(item) {
    console.log(item)
    if(this.props.params.type == 6){
      return (
        <div>
          <p>{item.messageContent}</p>
          <p>{item.msgCenterContent}</p>
          <p>{item.startTime}</p>
        </div>
      );
    }else if(this.props.params.type == 4){
      return (
        <div>
          <p>{item.messageContent}</p>
          <p>{item.msgCenterContent}{this.renderBusiness(item.bussinessId)}</p>
          <p>{item.startTime}</p>
        </div>
      );
    }
    return (
      <div>
        <p>{item.messageContent}</p>
        <p>{item.msgCenterContent}</p>
        <p>{item.sendDate}</p>
      </div>
    );
  }
  handleClick(id, resumeId , resumeIsDelete,item) {
    let { actions, router } = this.props;
    console.log(item,'==handleClick=item')
    if (this.props.params.type == 5) {
      actions.detailRoute(router, id);
    } else if (this.props.params.type == 1) {
      if(resumeIsDelete == 1){
        return message.warning("简历已被删除")
      }else {
        actions.resumeDetailRoute(this.props.params.type,resumeId,router);
      }
      // parent.addTab && parent.addTab({
      //   title: '候选人管理',
      //   key: 'resume/list',
      //   refresh: true,

      //   src: `/static/js/client/main.html#/resume/list/${resumeId}/detail`
      // })


    } else if (this.props.params.type == 6) {
      if(resumeIsDelete == 1){
        return message.warning("简历已被删除")
      }
      if(item.bussinessId == 2){
        actions.resumeDetailRoute(this.props.params.type,resumeId,router);
      }else if(item.bussinessId == 1){
        return message.warning("请到员工管理中查看")
      }
    }
  }
  render() {
    const { params, items } = this.props;
    const { data } = this.state;
    // console.log(params.type, "params.typeparams.typeparams.typeparams.type");
    // console.log(data)
    return (
      <Card title={this.renderCheckGroup(params.type)}>
        <List
          bordered={false}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item
              onClick={this.handleClick.bind(
                this,
                item.messageId,
                item.resumeId,
                item.resumeIsDelete,
                item
              )}
            >
              <List.Item.Meta
                avatar={<div className={`bg-log_${params.type}`} />}
                title={item.title}
                description={this.renderDescription(item)}
              />
            </List.Item>
          )}
        />
      </Card>
    );
  }
}
