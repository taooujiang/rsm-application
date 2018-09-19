import React, { Component } from "react";
import NestedComponent from "app/decorators/NestedComponent";
import { Layout, Button, Avatar, Checkbox, Cascader, Card } from "antd";
import DataTable from "app/components/DataTable";
import PageView from "app/components/Page";
import AdvancedSearchForm from "app/components/AdvancedSearch";
import CalendarPicker from "app/components/CalendarPicker";
import moment from "moment";
const CheckboxGroup = Checkbox.Group;

@NestedComponent()
export default class ReportListView extends PageView {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      exportParams: { time: [moment().subtract("days", 29), moment()] },
      columns: [],
      defaultDate: [moment().subtract("days", 29), moment()]
    };
  }

  handleFilter(value) {
    let { actions } = this.props;
    this.setState({
      exportParams: value
    });
    actions.callReportAction(value);
  }
  renderToolbar() {
    return (
      <AdvancedSearchForm
        autoSubmitForm={false}
        filterSubmitHandler={this.handleFilter.bind(this)}
      >
        <CalendarPicker
          label="统计时间"
          name="inputDateStr"
          defaultValue={this.state.defaultDate}
        />
      </AdvancedSearchForm>
    );
  }
  componentDidMount() {
    const {
      actions,
      routeParams: { type }
    } = this.props;
    const { defaultDate } = this.state;
    actions.callReportAction({ inputDateStr: defaultDate });
  }
  exportExcel() {
    const { actions } = this.props;
    actions.exportAction("/reportCallRecord/export", this.state.exportParams);
  }
  renderTable() {
    let { reduce } = this.props;
    let {
      spins: { tableSpin },
      key,
      page
    } = reduce;
    let list = reduce.recruitmentStatusList;
    const tableConf = {
      loading: tableSpin,
      dataSource: [],
      onChange: this.onChange.bind(this),
      rowkey: "id",
      columns: [
        {
          width: 120,
          title: "日期",
          dataIndex: "inputDate",
          key: "inputDate"
        },
        {
          width: 120,
          title: "招聘负责人",
          dataIndex: "hrAcc",
          key: "hrAcc"
        },
        {
          width: 120,
          title: "通话时长(分钟)",
          dataIndex: "timeLength",
          key: "timeLength"
        },
        {
          width: 120,
          title: "通话次数(呼出/总数)",
          dataIndex: "callNumStr",
          key: "callNumStr",
        //   render(text,record){
        //     return `${record.calloutNum}/${record.callNum}`
        //   }
        },
        {
          width: 120,
          title: "短信数",
          dataIndex: "smsNum",
          key: "smsNum"
        },
        {
          width: 120,
          title: "邮件数",
          dataIndex: "emailNum",
          key: "emailNum"
        }
      ]
    };
    return <DataTable key={Math.random().toString()} {...tableConf} dataSource={list} page={page} />;
  }
  render() {
    const { params, items } = this.props;
    const { data } = this.state;
    return (
      <Card
        title={this.renderToolbar()}
        extra={<Button onClick={this.exportExcel.bind(this)}>导出</Button>}
      >
        {this.renderTable()}
      </Card>
    );
  }
}
