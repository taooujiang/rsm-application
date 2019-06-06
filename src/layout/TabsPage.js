import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { routerActions } from "react-router-redux";
import { is } from "immutable";
import { Tabs, Button } from "antd";
import { updateTabChecked, deleteTabFromList } from "./action";
import { IframePage } from "components/Page";
import style from "./Tabs.less";
const TabPane = Tabs.TabPane;

@connect(
  (state, props) => ({ tabList: state.tabListResult }),
  dispatch => ({
    actions: bindActionCreators(routerActions, dispatch),
    dispatch: dispatch
  })
)
export default class TabsPage extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }
  componentDidMount() {
    // console.log('this.props', this.props);
  }
  onChange(activeKey) {
    const { actions } = this.props;
    this.props.dispatch(updateTabChecked({ activeKey: activeKey }));
    actions.push(activeKey);
  }
  onEdit(targetKey, action) {
    this[action](targetKey);
  }
  remove(targetKey) {
    const { actions, tabList } = this.props;
    let delIndex;
    let activeKey;
    if (targetKey === tabList.activeKey) {
      tabList.list.map((tab, index) => {
        tab.key === targetKey ? (delIndex = index) : null;
      });
      // eslint-disable-next-line no-nested-ternary
      activeKey = tabList.list[delIndex + 1]
        ? tabList.list[delIndex + 1].key
        : tabList.list[delIndex - 1]
          ? tabList.list[delIndex - 1].key
          : "";
      actions.push(activeKey);
    }
    this.props.dispatch(deleteTabFromList({ targetKey: targetKey }));
  }
  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {};

    if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
      return true;
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const key in nextProps) {
      if (
        thisProps[key] !== nextProps[key] ||
        !is(thisProps[key], nextProps[key])
      ) {
        return true;
      }
    }
    return false;
  }
  render() {
    const { tabList } = this.props;
    return (
      <Tabs
        hideAdd
        onChange={this.onChange}
        className="menu-tab"
        // activeKey={tabList.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {tabList.list.map(tab => (
          <TabPane tab={tab.title} key={tab.key}>
            {tab.content}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

class MultiTab extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      {
        title: "首页",
        content: "首页首页",
        key: "dashboard",
        closable: false,
        src: "/static/js/client/main.html#/dashboard"
      }
    ];
    this.state = {
      activeKey: panes[0].key,
      panes
    };
    window.addTab = this.add.bind(this);
    window.changeTab = this.onChange.bind(this);
    window.editTab = this.onEdit.bind(this);
    window.removeTab = this.remove.bind(this);
  }
  componentDidMount = () => {
    this.setState({ activeKey: "dashboard" });
    let panes = {
      dashboard: {
        title: "首页",
        key: "dashboard",
        closable: false,
        src: "/static/js/client/main.html#/dashboard"
      },
      "log/1": {
        title: "消息中心",
        key: "log",
        src: "/static/js/client/main.html#/log/1"
      },
      "log/2": {
        title: "消息中心",
        key: "log",
        src: "/static/js/client/main.html#/log/2"
      },
      "log/3": {
        title: "消息中心",
        key: "log",
        src: "/static/js/client/main.html#/log/3"
      },
      "log/4": {
        title: "消息中心",
        key: "log",
        src: "/static/js/client/main.html#/log/4"
      },
      "log/5": {
        title: "消息中心",
        key: "log",
        src: "/static/js/client/main.html#/log/5"
      },
      "/resume/list": {
        title: "候选人管理",
        key: "resume/list",
        src: "/static/js/client/main.html#/resume/list"
      },
      "resume/distributed": {
        title: "待分配简历",
        key: "resume/distributed",
        src: "/static/js/client/main.html#/resume/distributed"
      },
      "/job/list": {
        title: "职位管理",
        key: "job/list",
        src: "/static/js/client/main.html#/job/list"
      },
      "/job/jobrelease/1/1": {
        title: "发布职位",
        key: "job/jobrelease",
        refresh: true,
        src: "/static/js/client/main.html#/job/jobrelease/1/1"
      },
      "/job/search": {
        title: "职位导入",
        key: "job/search",
        src: "/static/js/client/main.html#/job/search"
      },
      "/interview/list": {
        title: "面试管理",
        key: "interview/list",
        src: "/static/js/client/main.html#/interview/list"
      },
      "/interview/calendar": {
        title: "面试日历",
        key: "interview/calendar",
        src: "/static/js/client/main.html#/interview/calendar"
      },
      '/elite': {
        title: "人才库",
        key: "elite",
        src: "/static/js/client/main.html#/elite"
      },
      "/member/list": {
        title: "员工管理",
        key: "member/list",
        src: "/static/js/client/main.html#/member/list"
      },
      "/member/interpol": {
        title: "员工内推",
        key: "member/interpol",
        src: "/static/js/client/main.html#/member/interpol"
      },
      '/soundlist/soundlist': {
        title: "通话记录",
        key: "/soundlist/soundlist",
        src: "/static/js/client/main.html#/soundlist/soundlist"
      },
      '/soundlist/messageList': {
        title: "短信记录",
        key: "/soundlist/messageList",
        src: "/static/js/client/main.html#/soundlist/messageList"
      },
      '/settings': {
        title: "系统设置",
        key: "settings",
        src: "/static/js/client/main.html#/settings"
      },
      '/report': {
        title: "统计分析",
        key: "report",
        src: "/static/js/client/main.html#/report"
      },
      '/schoolRecruit/searchTalents': {
        title: "搜索人才",
        key: "/schoolRecruit/searchTalents",
        src: "/static/js/client/main.html#/schoolRecruit/searchTalents"
      },
      '/schoolRecruit/inviteRecord': {
        title: "邀请记录",
        key: "schoolRecruit/inviteRecord",
        src: "/static/js/client/main.html#/schoolRecruit/inviteRecord"
      }
      
    };
    console.log(window.location.href);
    let href = window.location.href;
    let pathname = href.split("/#")[1];
    if (!pathname || pathname.indexOf("dashboard")>-1 || pathname == "/") {
      window.changeTab && window.changeTab("dashboard");
    } else if (pathname.indexOf("log")>-1) {
      window.addTab && window.addTab(panes["log"]);
    } else if (pathname.indexOf("elite")>-1) {
      window.addTab && window.addTab(panes["elite"]);
    } else if (pathname.indexOf("settings")>-1) {
      window.addTab && window.addTab(panes["settings"]);
    }else {
      window.addTab && window.addTab(panes[pathname]);
    }
  };

  onChange = activeKey => {
    console.log(this.state.activeKey,activeKey,'---this.state.activeKey,activeKey')
    const panes = this.state.panes;
    if (this.state.activeKey!= activeKey&& activeKey == 'dashboard') {
      document.body
        .querySelector(`iframe[name='${activeKey}']`)
        .contentWindow.location.reload();
    }
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    console.log(targetKey, action,'---targetKey, action')
    this[action](targetKey);
  };

  add = newPane => {
    const panes = this.state.panes;
    let activeKey = this.state.activeKey;
    if (newPane && panes.some(e => e.key == newPane.key)) {
      const { key: newKey } = newPane;
      activeKey = newKey;
      //todo
      panes.forEach((e, idx) => {
        if (e.key == newPane.key) {
          panes[idx] = newPane;
          console.log(
            document.body.querySelector(`iframe[name='${activeKey}']`),
            "iframe"
          );
          // document.querySelector(`iframe[name=${activeKey}]`)
          // todo
          if(newPane.src.indexOf("/resume/list") >= 0){//当客户端点击时 不作此操作会导致在简历详情不返回列表
            document.body
              .querySelector(`iframe[name='${activeKey}']`)
              .src = newPane.src;
            document.body
              .querySelector(`iframe[name='${activeKey}']`)
              .contentWindow.location.reload();
          }
          if (newPane.refresh) {
            document.body
              .querySelector(`iframe[name='${activeKey}']`)
              .contentWindow.location.reload();
          }
        }
      });
    } else if (newPane) {
      panes.push(newPane);
      activeKey = newPane.key;
    }
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    if (activeKey == 'dashboard') {
      document.body
        .querySelector(`iframe[name='${activeKey}']`)
        .contentWindow.location.reload();
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <Tabs
        hideAdd
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
        className="menu-tab"
      >
        {this.state.panes.map(pane => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            <IframePage src={pane.src} name={pane.key} />
          </TabPane>
        ))}
      </Tabs>
    );
  }
}
export { MultiTab };
