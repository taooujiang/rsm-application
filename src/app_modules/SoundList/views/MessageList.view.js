import React, { Component, PropTypes } from "react";
import DictUtils from "app/utils/DictUtils";
import {
  Button,
  Input,
  Table,
  Form,
  Modal,
  Select,
  Menu,
  Icon,
  Card,
  Dropdown,
  DatePicker,
  TreeSelect
} from "antd";

import PageView from "app/components/Page";
import ButtonGroupExt from "app/components/ButtonGroupExt";
// import AdvancedSearchForm from 'app/components/AdvancedSearch'
import AdvancedSearchPanel from "app/components/AdvancedSearchPanel";
import Ellipsis from 'app/components/Ellipsis'
import NestedComponent from "app/decorators/NestedComponent";
import DataTable from "app/components/DataTable";
import CalendarPicker from "app/components/CalendarPicker";
import BaseForm, { FormItem, customRules } from "app/components/BaseForm";

const Option = Select.Option;
const { RangePicker } = DatePicker;

export class MessageSideView extends Component {
  componentDidMount() {
    let { actions, router } = this.props;
    actions.messagelistAction()
  }
  handleFilter(values) {
    let { actions } = this.props;
    actions.saveParams(values);
    actions.messagelistAction(values);
  }
  renderCallstateOption(data, idx) {
    return (
      <Select.Option value={data.keyValue} key={idx}>
        {data.keyName}
      </Select.Option>
    );
  }
  render() {
    return (
      <AdvancedSearchPanel filterSubmitHandler={this.handleFilter.bind(this)}>
        <Input label="联系电话" placeholder='请输入联系电话' name="phoneNumber" />
        <Input label="联系人" placeholder='请输入联系人' name="linkMan" />
        <CalendarPicker label="信息时间" name="time" />
        <Select
          name="msgType"
          label="信息类型"
          fetch={DictUtils.getDictByType("smsType")}
          placeholder='请选择信息类型'
          renderItem={this.renderCallstateOption}
        />
      </AdvancedSearchPanel>
    );
  }
}

@NestedComponent()
class MessageListView extends PageView {
  componentDidMount() {
    let { actions, router } = this.props;
    
    // console.log(this.props,'===this.props')
  }
  handleFilter(values) {
    let { actions } = this.props;
    actions.saveParams(values);
    actions.messagelistAction(values);
  }
  renderTableList() {
    let self = this;
    let { reduce, items } = this.props;
    let {
      spins: { tableSpin },
      key
    } = reduce;
    let page = reduce.page;
    let tableConf = {
      rowKey: "id",
      dataSource: items,
      onChange: this.onChange.bind(this),
      loading: tableSpin,
      columns: [
        {
          title: "联系人",
          key: "linkMan",
          width: 50,
          dataIndex: "linkMan"
        },
        {
          title: "联系电话",
          key: "phoneNumber",
          width: 50,
          dataIndex: "phoneNumber"
        },
        {
          title: "信息类型",
          key: "msgType",
          dataIndex: "msgType",
          width: 50
        },
        {
          title: "信息时间",
          key: "msgTime",
          dataIndex: "msgTime",
          width: 80
        },
        {
          title: "信息内容",
          key: "content",
          dataIndex: "content",
          width: 200
        }
      ]
    };
    let propsData = {...this.props}.items.map(item=>
      item.content = <Ellipsis tooltip={true} length={73}>{String(item.content)}</Ellipsis>
     )
    return <DataTable {...propsData} {...tableConf} page={page} />;
  } 
  render() {
    let props = this.props;
    return <Card type="inner">{this.renderTableList()}</Card>;
  }
}

export default MessageListView;