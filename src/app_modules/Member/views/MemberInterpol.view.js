import React, { Component, PropTypes } from "react";
import {
  Button,
  Input,
  Table,
  Form,
  Dialog,
  Col,
  Row,
  DatePicker,
  Tooltip,
  Select,
  Modal,
  Popconfirm,
  Card
} from "antd";
import NestedComponent from "app/decorators/NestedComponent";
import moment from "moment";
import { Layout, Fixed, Pane } from "app/components/Layout";
import PageView from "app/components/Page";
import AdvancedSearchForm from "app/components/AdvancedSearch";
import AdvancedSearchPanel from "app/components/AdvancedSearchPanel";
import ButtonGroups from "app/components/ButtonGroups";
import LinkagePullDown from "app/components/LinkagePullDown";
import CalendarPicker from "app/components/CalendarPicker";
import TreeView, { TreeSelectPicker } from 'app/components/TreeView'
import PopoverShow from "app/components/PopoverShow";
import Remote from "app/components/Remote";
import InputStrGroup from "app/components/InputStrGroup";
import DataTable from "app/components/DataTable";
import DictUtils from "app-utils/DictUtils";
import styles from "./styles.less";

import SmartLink from "app/components/SmartLink";

const Option = Select.Option;
const { RangePicker } = DatePicker;
const confirm = Modal.confirm;

export class InterpolSide extends Component {
  handleFilter(values) {
    let { actions } = this.props;
    actions.listAction(values);
  }
  renderSelectOption(data, idx) {
    return (
      <Select.Option value={data.keyValue} key={idx}>
        {data.keyName}
      </Select.Option>
    );
  }
  render() {
    return (
      <AdvancedSearchPanel filterSubmitHandler={this.handleFilter.bind(this)}>
        <Input name="name" label="姓名" placeholder="请输入姓名" />
        <Input
          name="mobilephone"
          label="移动电话"
          placeholder="请输入移动电话"
        />
        <TreeSelectPicker
          label="招聘部门"
          name="groupId"
          fetch={`${APP_SERVER}/organizationGroup/getDepartmentTree`}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="选择部门"
          treeDefaultExpandAll
        />
      </AdvancedSearchPanel>
    );
  }
}

@NestedComponent()
export default class MemberListView extends PageView {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let { actions } = this.props;
    actions.interpolListAction();
  }
  
  
  renderSelectOption(data, idx) {
    return (
      <Select.Option value={data.keyValue} key={idx}>
        {data.keyName}
      </Select.Option>
    );
  }
  // handleFilter(value) {
  //   let { actions } = this.props;
  //   actions.listAction(value);
  //   actions.sysFieldListAction();
  // }
  handlerDetailRoute(id) {
    let { actions } = this.props;
    actions.detailRoute(id);
  }
  renderTableList() {
    let self = this;
    let { reduce, items } = this.props;
    let {
      spins: { tableSpin },
      sysFieldList,
      key
    } = reduce;
    let page = reduce.page;
    console.log(items)
    let tableConf = {
      rowKey: key,
      dataSource: items,
      onChange: this.onChange.bind(this),
      loading: tableSpin,
      // onRow:(record) => {
      // 	return {
      // 		onClick: () => {
      // 			const{router}=this.props
      // 		},
      // 	}
      // },
      columns: [{
        title: "员工姓名",
        key: "memberName",
        dataIndex: "memberName",
        width: 100,
      }, {
        title: "电话号码",
        key: "memberMobilephone",
        dataIndex: "memberMobilephone",
        width: 140,
      }, {
        title: "所属部门",
        key: "deptName",
        dataIndex: "deptName",
        width: 130,
      }, {
        title: "积分总数",
        key: "creditTotal",
        dataIndex: "creditTotal",
        width: 150,
      }, {
        title: "积分余额",
        key: "creditBalance",
        dataIndex: "creditBalance",
        width: 150,
      }, {
        title: "已兑换积分",
        key: "creditExchange",
        dataIndex: "creditExchange",
        width: 150,
      }, {
        title: "现金总数",
        key: "cashTotal",
        dataIndex: "cashTotal",
        width: 150,
      }, {
        title: "现金余额",
        key: "cashBalance",
        dataIndex: "cashBalance",
        width: 150,
      }, {
        title: "已提取现金",
        key: "cashExchange",
        dataIndex: "cashExchange",
        width: 150,
      }]
    };
    return (
      <DataTable
        {...tableConf}
        page={page}
      />
    );
  }

  handlerMenu(id, actionType) {
    let { actions, router } = this.props;
    switch (actionType) {
      case "add":
        actions.deleteAction({ id: id, status: 2 });
        break;
      case "edit":
        actions.editRoute(router, id);
        break;
      case "delete":
        actions.deleteAction({ id: id, isDel: 1 });
        break;
      default:
    }
  }
  render() {
    return (
      <Card
        type="inner"
        title={
          <div>
            <h3 className="card-title">员工列表</h3>
          </div>
        }
      >
        {this.renderTableList()}
      </Card>
    );
  }
}
