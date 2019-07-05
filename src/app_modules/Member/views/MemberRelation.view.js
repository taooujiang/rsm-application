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
import BaseForm,{FormItem} from 'components/BaseForm'
import SmartLink from "app/components/SmartLink";
import FetchAPI from 'app/utils/FetchAPI'
const Option = Select.Option;
const { RangePicker } = DatePicker;
const confirm = Modal.confirm;

export class RelationSide extends Component {
    constructor(props) {
        super(props);
        this.state={
            listType:1
        }
      }
    
  handleFilter(values) {
    let { actions } = this.props;
    actions.interpolListAction(values);
  }
  renderSelectOption(data, idx) {
    return (
      <Select.Option value={data.keyValue} key={idx}>
        {data.keyName}
      </Select.Option>
    );
  }
  navgation(val){
    // let {actions}= this.props
		// console.log(val,'value')
		// actions.libTypeAction(val)
		const{router}=this.props
		let module = val
		this.setState({
			listType:val,
			module
        },function(){
            this.renderSlideSearch()

        })
       
		new FetchAPI().fetch(`${APP_SERVER}/talentNew/findLastRelationJobList?libType=${val}`,{
      method:'GET'
    }).then((json) => {
        this.setState({
          jobIdOption:json.list||[]
        });
		});
		router.push(`/member/relation/${val}`)
  }
  renderSelectOption(data,idx){
    return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
    }
    renderSlideSearch(){
        switch(this.state.listType) {
            case 1:
               return (
                <CalendarPicker name="conversionTimeArr" label="转正日期" />
               )
               break;
            case 2:
               return [
                <CalendarPicker name="contractExpireTimeArr" label="合同到期日期" />,
                <Select
                  name="sex"
                  label="签署公司"
                  placeholder="请选择"
                  fetch={DictUtils.getDictByType("sex")}
                  renderItem={this.renderSelectOption}
                />,
                <CalendarPicker name="contractExpireTimeArr" label="合同生效日期" />

                 ]
               break;  
            case 3:
            return (
              <CalendarPicker name="contractExpireTimeArr" label="离职日期" />
               )
               break;
            case 4:
            return [
                <CalendarPicker name="contractExpireTimeArr" label="离职日期" />,
                <CalendarPicker name="contractExpireTimeArr" label="合同到期日期" />
              ]
               break;
            case 5:
            return ( <Input name="memberName" label="姓名5" placeholder="请输入姓名" />)
               break;
            default:
            return (<CalendarPicker name="conversionTimeArr" label="转正日期" />)
       } 
    }

  render() {
    return (
      <AdvancedSearchPanel  titleSearch={
        <div>
            <FormItem>
                <Select name="libType" onChange={this.navgation.bind(this)} defaultValue={Number(this.props.routeParams.listType)} fetch={
                    [{keyValue:1,keyName:"转正管理"},
                    {keyValue:2,keyName:"合同管理"},
                    {keyValue:3,keyName:"离职管理"},
                    {keyValue:4,keyName:"实习管理"},
                    {keyValue:5,keyName:"员工关怀"}]} renderItem={this.renderSelectOption} />
            </FormItem>
            <FormItem>
                <Input name="type" type="hidden" defaultValue={0} />
            </FormItem>
        </div>


  } filterSubmitHandler={this.handleFilter.bind(this)}>
     <Input name="memberName" label="员工姓名" placeholder="请输入姓名" />
     <Input name="memberName" label="移动电话" placeholder="请输入电话" />
     <CalendarPicker name="joinTimeArr" label="入职日期" />
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
          <Select
          name="sex"
          label="岗位名称"
          placeholder="请选择"
          fetch={DictUtils.getDictByType("sex")}
          renderItem={this.renderSelectOption}
        />
        <Select
          name="sex"
          label="岗位职级"
          placeholder="请选择"
          fetch={DictUtils.getDictByType("sex")}
          renderItem={this.renderSelectOption}
        />
     {/* <Input name="memberName" label="岗位名称" placeholder="请输入电话" />
     <Input name="memberName" label="岗位职级" placeholder="请输入电话" /> */}
        {this.renderSlideSearch()}
      </AdvancedSearchPanel>
    );
  }
}

@NestedComponent()
export default class MemberListView extends PageView {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps){
    if(Number(this.props.routeParams.listType) != nextProps.routeParams.listType){
       //  拉取数据
    }
  }

  componentDidMount() {
    let { actions } = this.props;
    actions.interpolListAction();
  }
  handleFilter(values) {
    let { actions } = this.props;
    actions.interpolListAction(values);
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
  handleMenu(actionType){
    let {
      actions,
      router,
      reduce: { params },
      routeParams: { type }
    } = this.props;
    const { selectedRowKeys } = this.state;
    console.log(this, selectedRowKeys, type);
    actions[actionType].call(this, selectedRowKeys, router,{ ...params, libType: type });
  }
  renderToolbar() {
    let {listType} =this.props.routeParams
   if(listType == 1){
    return this.selectRowShow( 
      <ButtonGroups handleClick={this.handleMenu.bind(this)} showSize={10}>
          <Button actionkey="batchPositiveAction">批量转正</Button>
          <Button actionkey="editPositiveAction">修改转正日期</Button>
      </ButtonGroups>
    )
   }else if(listType == 2){
    return this.selectRowShow(
      <ButtonGroups handleClick={this.handleMenu.bind(this)} showSize={10}>
          <Button actionkey="addContractInformationAction">增加合同信息</Button>
      </ButtonGroups>
    )
   }else if(listType == 3){
    return this.selectRowShow(
      <ButtonGroups handleClick={this.handleMenu.bind(this)} showSize={10}>
          <Button actionkey="bulkDeparturesAction">批量离职</Button>
          <Button actionkey="editDepartureDateAction">修改离职日期</Button>
      </ButtonGroups>
    )
   }else if(listType == 4){
    return this.selectRowShow(
      <ButtonGroups handleClick={this.handleMenu.bind(this)} showSize={10}>
          <Button actionkey="bulkDeparturesAction">批量离职</Button>
          {/* <Button actionkey="practicePositiveAction">实习转正</Button> */}
          <Button actionkey="batchPositiveAction">实习转正</Button>
          <Button actionkey="batchPositiveAction">实习转试用</Button>
      </ButtonGroups>
    )
  }else{
    return this.selectRowShow(
      <ButtonGroups handleClick={this.handleMenu.bind(this)} showSize={10}>
          <Button actionkey="send2InterviewerAction">办理转正</Button>
          <Button actionkey="addEliteAction">延长试用期</Button>
          <Button actionkey="recommend2OtherAction">推荐到其他职位</Button>
          <Button actionkey="eliminateAction" confirm="是否批量淘汰">淘汰</Button>
          <Button actionkey="deleteAction" permission="deleteResume">删除</Button>
          <Button actionkey="followAction">跟进提醒</Button>
      </ButtonGroups>
    )
  }
    
}

handlerMenu(data, actionType) {
  let { actions, reduce: { params }, router } = this.props; 
  // actions[actionType]({ ...params,...data},router)
  actions[actionType].call(this,data, router,{ ...params,...data});
  // switch (actionType) {
  //   case "add":
   
  //     break;
  //   case "edit":
  //     actions.editRoute(router, id);
  //     break;
  //   case "delete":
  //     actions.deleteAction({ id: id, isDel: 1 });
  //     break;
  //   default:
  // }
}
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
          		
	const rowSelection = {
		onChange: this.onSelectChange.bind(this),
		selectedRowKeys: this.state.selectedRowKeys
  };
  let page = reduce.page;  console.log(items)
  let {listType} =this.props.routeParams
  let positiveColumns=[
    
     {
      title: "转正日期",
      key: "memberMobilephone",
      dataIndex: "memberMobilephone",
      width: 200,
      visible:true
    }, {
      title: "职级",
      key: "deptName",
      dataIndex: "deptName",
      width: 200,
      visible:true
    },{
      title: "操作",
      key: "config",
      dataIndex: "config",
      width: 50,
      fixed: "right",
      visible: true,
      render: (text, record, index) => {
        // console.log(data)
        return (
          <ButtonGroups
            handleClick={this.handlerMenu.bind(this, {id:record.id})}
          >
            {/*   confirm={"是否确认" + record.name + "于今日转正"} */}
            {/* disabled={record.status > 1  && record.status < 4? true : false} */}
          <Button
              icon="user-add"
              title="修改试用期"
              actionkey="deitOnlyPositiveAction"
            />
            <Button
              icon="user-add"
              title="办理转正"
              actionkey="onlyPositiveAction"
            />
          </ButtonGroups>
        );
      }
    }
  ]
  let contractColumns=[
    
    {
     title: "合同生效日期",
     key: "memberMobilephone",
     dataIndex: "memberMobilephone",
     width: 200,
     visible:true
   }, {
     title: "合同到期日期",
     key: "deptName",
     dataIndex: "deptName",
     width: 200,
     visible:true
   },{
    title: "签署公司",
    key: "deptName",
    dataIndex: "deptName",
    width: 200,
    visible:true
  },{
     title: "操作",
     key: "config",
     dataIndex: "config",
     width: 50,
     fixed: "right",
     visible: true,
     render: (text, record, index) => {
       // console.log(data)
       return (
         <ButtonGroups
           handleClick={this.handlerMenu.bind(this, record.id)}
         >
         <Button
             icon="user-add"
             title="添加合同"
             actionkey="addContractInformationAction"
           />
         </ButtonGroups>
       );
     }
   }
 ]
  let departureColumns=[
    
    {
     title: "离职日期",
     key: "memberMobilephone",
     dataIndex: "memberMobilephone",
     width: 200,
     visible:true
   },{
     title: "操作",
     key: "config",
     dataIndex: "config",
     width: 50,
     fixed: "right",
     visible: true,
     render: (text, record, index) => {
       // console.log(data)
       return (
         <ButtonGroups
           handleClick={this.handlerMenu.bind(this, record.id)}
         >
         <Button
             icon="user-add"
             title="办理离职"
             actionkey="editonlyDepartureDateAction"
           />
         </ButtonGroups>
       );
     }
   }
 ]
  let internshipColumns=[
    
    {
     title: "合同到期时间",
     key: "memberMobilephone",
     dataIndex: "memberMobilephone",
     width: 200,
     visible:true
   }, {
     title: "离职日期",
     key: "deptName",
     dataIndex: "deptName",
     width: 200,
     visible:true
   },{
     title: "操作",
     key: "config",
     dataIndex: "config",
     width: 50,
     fixed: "right",
     visible: true,
     render: (text, record, index) => {
       // console.log(data)
       return (
         <ButtonGroups
           handleClick={this.handlerMenu.bind(this, record.id)}
         > 
          <Button
             icon="user-add"
             title="延长试用期"
             actionkey="deitOnlyPositiveAction"
           />
         <Button
             icon="user-add"
             title="办理转正"
             actionkey="onlyPositiveAction"
           />
         </ButtonGroups>
       );
     }
   }
 ]
  let careColumns=[
    
    {
     title: "合同生效日期",
     key: "memberMobilephone",
     dataIndex: "memberMobilephone",
     width: 200,
     visible:true
   }, {
     title: "合同到期日期",
     key: "deptName",
     dataIndex: "deptName",
     width: 200,
     visible:true
   },{
    title: "签署公司",
    key: "deptName",
    dataIndex: "deptName",
    width: 200,
    visible:true
  },{
     title: "操作",
     key: "config",
     dataIndex: "config",
     width: 50,
     fixed: "right",
     visible: true,
     render: (text, record, index) => {
       // console.log(data)
       return (
         <ButtonGroups
           handleClick={this.handlerMenu.bind(this, record.id)}
         >
         <Button
             icon="user-add"
             title="添加合同"
             actionkey="add"
             confirm={"是否确认" + record.name + "于今日转正"}
             disabled={record.status > 1  && record.status < 4? true : false}
           />
         </ButtonGroups>
       );
     }
   }
 ]
  let columnsObj={
    1:positiveColumns,
    2:contractColumns,
    3:departureColumns,
    4:internshipColumns,
    5:careColumns,
  }
    
    let tableConf = {
      rowKey: key,
      showConfig: true,
      dataSource: items,
      onChange: this.onChange.bind(this),
      rowSelection: rowSelection,
      title: () => this.renderToolbar(),
      loading: tableSpin,
      // onRow:(record) => {
      // 	return {
      // 		onClick: () => {
      // 			const{router}=this.props
      // 		},
      // 	}
      // },
      columns:[{
        title: "员工姓名",
        key: "memberName",
        dataIndex: "memberName",
        width: 200,
        visible:true,
        render(val, record, ) {
          return (
            <SmartLink to={`${record.id}`}>
              {val}
            </SmartLink>
          )
        }
      }, {
        title: "入职日期",
        key: "memberMobilephone",
        dataIndex: "memberMobilephone",
        width: 200,
        visible:true
      }, {
        title: "员工状态",
        key: "deptName",
        dataIndex: "deptName",
        width: 150,
        visible:true
      }, {
        title: "岗位",
        key: "creditTotal",
        dataIndex: "creditTotal",
        width: 200,
        visible:true
      }, {
        title: "部门",
        key: "creditBalance",
        dataIndex: "creditBalance",
        width: 200,
        visible:true
      },{
        title: "职级",
        key: "deptName",
        dataIndex: "deptName",
        width: 200,
        visible:true
      },
      ] 
    };
    tableConf.columns = tableConf.columns.concat(columnsObj[listType]);
    let width = tableConf.columns.reduce((a,b)=>a+b.width,0); 
    console.log(tableConf.columns,width,"==tableConf.columns")
    return (
      <DataTable
        {...tableConf}
        scroll={{ x: width + 50, y: 500 }}
        page={page}
      />
    );
  }

  render() {
    console.log(this.props,"===this.props")
    return (
      <Card
        type="inner"
        title={
          <div>
            <h3 className="card-title">员工关系</h3>
          </div>
        }
      >
        {this.renderTableList()}
      </Card>
    );
  }
}
