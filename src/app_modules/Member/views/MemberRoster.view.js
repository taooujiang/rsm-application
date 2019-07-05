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
  Card,
  Radio,
  Checkbox
} from "antd";
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
import NestedComponent from "app/decorators/NestedComponent";
import moment from "moment";
import Ellipsis from 'app/components/Ellipsis'
import {TreeSelectPicker} from 'app/components/TreeView'
import { Layout, Fixed, Pane } from "app/components/Layout";
import PageView from "app/components/Page";
import AdvancedSearchForm from "app/components/AdvancedSearch";
import AdvancedSearchPanel from "app/components/AdvancedSearchPanel";
import ButtonGroups from "app/components/ButtonGroups";
import LinkagePullDown from "app/components/LinkagePullDown";
import CalendarPicker from "app/components/CalendarPicker";
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

export class MemberRosterSlide extends Component {
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
  setResetForm(resetFuc) {
    this.resetForm = resetFuc;
  }
  render() {
    return (
      <AdvancedSearchPanel  module="5" setResetForm = {this.setResetForm.bind(this)}  showConfig={true}  filterSubmitHandler={this.handleFilter.bind(this)}>
        <Input name="name" label="员工姓名" placeholder="请输入姓名" />
        <Input
          name="mobilephone"
          label="移动电话"
          placeholder="请输入移动电话"
        />
           <TreeSelectPicker
              label='部门'
              name='department'
              fetch={`${APP_SERVER}/organizationGroup/getDepartmentTree`}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder="选择部门"
              showSearch={true}
              treeDefaultExpandAll
              // defaultValue={item && item[it.fieldCode]}
							// rules={it.isRequired==1?[{required: true, message: `${it.fieldName}不可为空`,}]:null}
            />
        <CalendarPicker name="joinTimeArr" label="入职日期" />
        <CalendarPicker name="conversionTimeArr" label="转正日期" />
        <CalendarPicker name="contractExpireTimeArr" label="合同到期日期" />
        <CalendarPicker name="dimissionTimeArr" label="离职日期" />
        <CalendarPicker name="retireTimeArr" label="退休日期" />

        <LinkagePullDown
          name="degreeArr"
          label="学历"
          options={DictUtils.getDictByType("education")}
        />
        <LinkagePullDown
          name="workyearArr"
          label="工龄"
          options={DictUtils.getDictByType("workyears")}
        />
        <Select
          name="sex"
          label="性别"
          placeholder="请选择"
          fetch={DictUtils.getDictByType("sex")}
          renderItem={this.renderSelectOption}
        />
        <Select
          mode="multiple"
          name="statusArr"
          label="员工状态"
          placeholder="请选择"
          fetch={DictUtils.getDictByType("memberstatus")}
          renderItem={this.renderSelectOption}
        />
        <Select
          name="birthMonth"
          label="生日"
          placeholder="请选择"
          fetch={
            DictUtils.getDictByType("birth") &&
            DictUtils.getDictByType("birth").sort((a, b) => {
              return a.keySort - b.keySort;
            })
          }
          renderItem={this.renderSelectOption}
        />
      <InputStrGroup name="ages" label="年龄" defaultValue={["",""]} />
   
      </AdvancedSearchPanel>
    );
  }
}

@NestedComponent()
export default class MemberListView extends PageView {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let { actions } = this.props;
    actions.listAction();
    actions.sysFieldListAction();
  }
  componentWillReceiveProps(nextProps){
    let {reduce:{params},location,actions} = this.props
    // console.log(nextProps.location.state&&nextProps.location.state.key,params)
    /*关闭简历详情刷新*/
    if (JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)) {
      if (nextProps.location.state && nextProps.location.state.type == "reload" ){
        actions.listAction(Object.assign({}, nextProps.reduce.params, nextProps.reduce.page));
      }
    }
  }
  renderSelectOption(data, idx) {
    return (
      <Select.Option value={data.keyValue} key={idx}>
        {data.keyName}
      </Select.Option>
    );
  }
  handleFilter(value) {
    let { actions } = this.props;
    actions.listAction(value);
    actions.sysFieldListAction();
  }
  handlerDetailRoute(id) {
    let { actions } = this.props;
    actions.detailRoute(id);
  }
  fieldsOption(options, value) {
    let optionName = [];
    let valueArr = [];
    if (value instanceof Array) {
      valueArr = value;
    } else {
      valueArr.push(value);
    }
    valueArr.map(item => {
      options.map(it => {
        if (it.optionValue == item) {
          optionName.push(it.optionName);
        }
      });
    });
    return optionName.join(",");
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

    let tableConf = {
      rowKey: key,
      // title:()=>{ return this.renderToolbar() },
      showConfig: true,
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
      columns: [
        // {
        //   title: "操作",
        //   key: "config",
        //   dataIndex: "config",
        //   width: 50,
        //   fixed: "right",
        //   visible: true,
        //   render: (text, record, index) => {
        //     // console.log(data)
        //     return (
        //       <ButtonGroups
        //         handleClick={this.handlerMenu.bind(this, record.id)}
        //       >
        //         <Button
        //           icon="user-add"
        //           title="转正"
        //           actionkey="add"
        //           confirm={"是否确认" + record.name + "于今日转正"}
        //           disabled={record.status > 1  && record.status < 4? true : false}
        //         />
        //       </ButtonGroups>
        //     );
        //   }
        // }
      ]
    };
    let dynamicColumns = [];
    // 提交
    sysFieldList.map(it => {
      return dynamicColumns.push({
        title: it.fieldName,
        key: it.fieldCode,
        isRead: it.isRead,
        visible: it.isShow,
        dataIndex: it.fieldCode,
        width: it.width,
        sorter: it.isSort,
        render: (val, row, index) => {
          if (it.dataType == 2) {
            return !val ? "" : moment(val).format("YYYY-MM-DD");
          } else if (it.dataType == 3 || it.dataType == 4) {
            return this.fieldsOption(it.options, val);
          } else if (it.fieldCode == "department") {
            return row.deptName;
          }else if(it.fieldCode == "familyAddress"){
            return <Ellipsis tooltip={true} length={11}>{val}</Ellipsis>
          }else {
            if (it.fieldCode == "name") {
              return (
                <SmartLink to={`detail/${row.id}`}>
                  {val}
                  {/* <PopoverShow titles={sysFieldList} values={row} popTitle={val} placement={"right"} /> */}
                </SmartLink>
              );
            } else {
              return val;
            }
          }
        }
      });
    });
    tableConf.columns = dynamicColumns.concat(tableConf.columns);
    let width = tableConf.columns.reduce((a,b)=>a+b.width,0)
    console.log(tableConf.columns,"==tableConf.columns")
    return (
      <DataTable
        {...tableConf}
        scroll={{ x: width + 50, y: 500 }}
        page={page}
      />
    );
  }

  handlerMenu(id, actionType) {
    let { actions, router,reduce:{page,params} } = this.props;
    console.log( this.props,"= actionTypethis.props")
    switch (actionType) {
      case "add":
        actions.deleteAction({ id: id, status: 2 ,...params});
        break;
      case "edit":
        actions.editRoute(router, id);
        break;
      case "delete":
        actions.deleteAction({ id: id, isDel: 1  ,...params});
        break;
      default:
    }
  }

  handleExportRoute() {
    let { actions } = this.props;
    actions.exportRoute();
  }
  handleImportRoute() {
    let { actions } = this.props;
    actions.importRoute();
  }
  handleImportResultRoute() {
    let { actions } = this.props;
    actions.importResultRoute();
  }
  handlerButtonGroups(actionType) {
    let { actions, router } = this.props;
    actions[actionType].call(this, router);
    console.log(actionType,router,actions,"=actionType")
  }
  renderSearchBar() {
		let {
			reduce: {
				count,
				checks
			},
			params
		} = this.props
		return (<div style={{'textAlign':'right'}}>
          <ButtonGroups showSize='10' handleClick={this.handlerButtonGroups.bind(this)}>
          <Button
          type="ghost"
          icon="qrcode"
          permission="importMembers"
          actionkey="importRoute"
          type="primary" 
        >
          微信二维码
        </Button>
        <Button type="ghost" icon="notification" actionkey="importResultRoute">
          批量通知
        </Button>
      <Button icon="plus" actionkey="addRoute">
        添加
      </Button>
      <Button
        type="ghost"
        icon="download"
        permission="importMembers"
        actionkey="importRoute"
      >
        导入
      </Button>
      <Button type="ghost" icon="upload" actionkey="importResultRoute">
        导入结果
      </Button>
      <Button
        type="ghost"
        icon="file-excel"
        permission="exportMembers"
        actionkey="exportRoute"
      >
        导出Excel
      </Button>
    </ButtonGroups>
      <AdvancedSearchForm classNames="radioGroupResetFormItem" autoSubmitForm={false} filterSubmitHandler={this.handleFilter} isSearchBtnHide={true} ref={this.formRef}>
			<RadioGroup className="resumeStatus radioGroupReset" name="type" onChange={this.handleRadioChange} defaultValue={1}>
				<RadioButton value="1">在职<span className="count">{ 0}</span>
                {/* <RadioButton value="1">待审批<span className="count">{count.dclNum || 0}</span> */}
				</RadioButton>
                {/* <RadioButton value="2">已审批<span className="count">{count.yclNum || 0}</span> */}
				<RadioButton value="2">离职<span className="count">{0}</span>
				</RadioButton>
			</RadioGroup>
    </AdvancedSearchForm>
</div>
    )
	}
  renderToolbar() {
    let { actions } = this.props;
    return (
      <ButtonGroups handleClick={this.handlerButtonGroups.bind(this)}>
        <Button type="primary" icon="plus" actionkey="addRoute">
          添加
        </Button>
        <Button
          type="ghost"
          icon="download"
          permission="importMembers"
          actionkey="importRoute"
        >
          导入
        </Button>
        <Button type="ghost" icon="upload" actionkey="importResultRoute">
          导入结果
        </Button>
        <Button
          type="ghost"
          icon="file-excel"
          permission="exportMembers"
          actionkey="exportRoute"
        >
          导出Excel
        </Button>
      </ButtonGroups>
    );
  }
  render() {
    let props = this.props;
    //  extra={this.renderToolbar()}
    return (
      <Card
        type="inner"
        title={this.renderSearchBar()}
      >
        {this.renderTableList()}
      </Card>
    );
  }
}
