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

export class RecordSide extends Component {
  handleFilter(values) {
    let { actions } = this.props;
    actions.recordListAction(values);
  }
  renderSelectOption(data, idx) {
    return (
      <Select.Option value={data.keyValue} key={idx}>
        {data.keyName}
      </Select.Option>
    );
  }
  renderNameOption(data,idx){
    return (<Select.Option value={data.id} key={idx}>{data.postName}</Select.Option>)
  }
  renderLevelOption(data,idx){
    return (<Select.Option value={data.id} key={idx}>{data.positionName}</Select.Option>)
  }
  renderInputAccOption(data,idx){
    return (<Select.Option value={data.userId} key={idx}>{data.name}</Select.Option>)
  }
  render() {
    return (
      <AdvancedSearchPanel filterSubmitHandler={this.handleFilter.bind(this)}>
        <Input name="memberName" label="员工姓名" placeholder="请输入姓名" />
        <Input
          name="mobilephone"
          label="移动电话"
          placeholder="请输入移动电话"
        />
          <Select
          mode="multiple"
          name="memberstatus"
          label="员工状态"
          placeholder="请选择"
          fetch={DictUtils.getDictByType("memberstatus")}
          renderItem={this.renderSelectOption}
        />
          <TreeSelectPicker
              label='部门'
              name='groupId'
              fetch={`${APP_SERVER}/organizationGroup/getDepartmentTree`}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder="选择部门"
              showSearch={true}
              treeDefaultExpandAll
              // defaultValue={item && item[it.fieldCode]}
							// rules={it.isRequired==1?[{required: true, message: `${it.fieldName}不可为空`,}]:null}
            />
         <Select
          name="postId"
          label="岗位名称"
          placeholder="请选择"
          fetch={`${APP_SERVER}/postManage/listJson`}
          params={{item:{}}} 
          renderItem={this.renderNameOption}
        />
          <Select
          name="rankId"
          label="岗位职级"
          placeholder="请选择"
          fetch={`${APP_SERVER}/sysPositionLevel/findPositionLevelList`}
          renderItem={this.renderLevelOption}
        />
        <Select
          name="inputAcc"
          label="操作人"
          placeholder="请选择"
          fetch={`${APP_SERVER}/userResource/findUserList`}
          renderItem={this.renderInputAccOption}
        />
        <CalendarPicker name="handleTimeStr" label="办理时间" /> 
        <Select
          name="changesType"
          label='最近异动类型'
          placeholder="请选择"
          fetch={DictUtils.getDictByType("changesType")}
          renderItem={this.renderSelectOption}
        />
      </AdvancedSearchPanel>
    );
  }
}

@NestedComponent()
export default class MemberRecord extends PageView {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let { actions } = this.props;
    actions.recordListAction();
  }
  handleFilter(values) {
    let { actions } = this.props;
    actions.recordListAction(values);
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
    let { reduce} = this.props;
    let {
      spins: { tableSpin },
      sysFieldList,
      key,
      items
    } = reduce;
    let page = reduce.page;
    console.log(this.props,"==this.props")
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
        // render(val, record, ) {
        //   return (
        //     <SmartLink to={`${record.id}`}>
        //       {val}
        //     </SmartLink>
        //   )
        // }
      }, {
        title: "移动电话",
        key: "mobilephone",
        dataIndex: "mobilephone",
        width: 140,
      }, {
        title: "员工状态",
        key: "memberStatus",
        dataIndex: "memberStatus",
        width: 130,
        render(val, record) {
          return (
            DictUtils.getDictLabelByValue("memberstatus",val)
          )
        }
      }, {
        title: "岗位",
        key: "postId",
        dataIndex: "postId",
        width: 150,
      }, {
        title: "部门",
        key: "groupId",
        dataIndex: "groupId",
        width: 150,
      }, {
        title: "职级",
        key: "rankId",
        dataIndex: "rankId",
        width: 150,
      }, {
        title: "异动类型",
        key: "changesType",
        dataIndex: "changesType",
        width: 150,
        render(val, record) {
            return (
              DictUtils.getDictLabelByValue("changesType",val)
            )
          }
      }, {
        title: "办理时间",
        key: "handleTime",
        dataIndex: "handleTime",
        width: 150,
      }, {
        title: "操作人",
        key: "inputAcc",
        dataIndex: "inputAcc",
        width: 150,
      }, {
        title: "异动情况",
        key: "changesDetails",
        dataIndex: "changesDetails",
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
            <h3 className="card-title">人员异动记录</h3>
          </div>
        }
      >
        {this.renderTableList()}
      </Card>
    );
  }
}
