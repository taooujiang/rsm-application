import React, {Component, PropTypes} from 'react'
import {
  Button,
  Input,
  Table,
  Select,
  DatePicker,
  Modal,
  Menu,
  Checkbox,
  Radio,
  message,
  Tag,
  Card,
  Popover,
  Dropdown,
  Icon,
} from 'antd'
import {Link} from 'react-router'
import moment from 'moment'
import PageView from 'app/components/Page'
import AdvancedSearchForm from 'app/components/AdvancedSearch'
import {Layout,Fixed,Pane} from 'app/components/Layout'
import DataTable from 'app/components/DataTable'
import BaseForm,{FormItem,customRules} from 'app/components/BaseForm'
import ButtonGroups from 'app/components/ButtonGroups'
import ButtonGroupExt from 'app/components/ButtonGroupExt'
import PersonInfoShow from 'app/components/TableRow/Resume'
import DictUtils from 'app/utils/DictUtils'
import NestedComponent from 'app/decorators/NestedComponent'

import ResumeFolderListView from './ResumeFolderList.view'
import API from '../api'
import styles from './styles.less'

const Option = Select.Option
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;


@NestedComponent()
export default class ResumeListView extends PageView {

  componentWillMount() {
    let {actions,router,children,params} = this.props;
    console.log(params)
    // console.log(params)
    // message.info(1111)
    if(JSON.stringify(params)=="{}" || params.resumeId!=undefined){
      actions.listAction({status:0})
      actions.listRealAction({status:0})
      actions.listReportAction({status:0})
      actions.getCheckAction({status:0})
    }else{
      actions.listAction(params)
      actions.listRealAction(params)
      actions.listReportAction(params)
      actions.getCheckAction(params)
    }
  }
  componentWillReceiveProps(nextProps){
    let {actions,router,children} = this.props;
    if(JSON.stringify(this.props.reduce.params) !== JSON.stringify(nextProps.reduce.params)){
      this.setState({
        selectedRows: [],
        selectedRowKeys: []
      })
      //console.log(nextProps.reduce.params)
      actions.listRealAction(nextProps.reduce.params)
      actions.listReportAction(nextProps.reduce.params)
      actions.getCheckAction(nextProps.reduce.params)
    }
    if(JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)){
      if(nextProps.location.state && nextProps.location.state.key=="reload" && nextProps.location.state.listRefresh){
        this.setState({
          selectedRows: [],
          selectedRowKeys: []
        }, () => {
          console.log("clear state select")
        })
        actions.listRealAction(Object.assign({},nextProps.reduce.params,nextProps.reduce.page))
        actions.listReportAction(nextProps.reduce.params)
        actions.getCheckAction(nextProps.reduce.params)
      }
    }
  }
  handleRadioChange(values){
    let {actions,reduce:{params}} = this.props
    let {target:{value}} = values
    actions.listAction({status:value,notes:[]})

    /*清空复选框*/
     this.form.form.setFieldsValue({notes:""})
     // console.log(this.form.form.setFieldsValue)

  }
  formRef(form){
    this.form = form
  }
  handleCheckChange(e){
    let {actions} = this.props
    actions.listAction({notes:e})
  }
  handleFilter(value){
    let {actions} = this.props
    actions.listRealAction(value)
  }
  renderSearchBar(){
    let {reduce:{count,checks},params} = this.props
    return (
      <AdvancedSearchForm classNames="radioGroupResetFormItem" autoSubmitForm={false} filterSubmitHandler={this.handleFilter.bind(this)} isSearchBtnHide={true} ref={this.formRef.bind(this)}>
        <RadioGroup className="resumeStatus radioGroupReset" name="status" onChange={this.handleRadioChange.bind(this)} defaultValue={params && params.status || 0}>
          <RadioButton value="0">待审批<span className="count">{count.sxNum}</span></RadioButton>
          <RadioButton value="1">已审批<span className="count">{count.yyNum}</span></RadioButton>
        </RadioGroup>
        <CheckboxGroup className="resumeType" name="notes" onChange={this.handleCheckChange.bind(this)}>
          {checks.map((it,idx)=>{
            return <Checkbox value={it.noteValue}>{it.noteName}<span className="reportNumber">({it.noteNum})</span></Checkbox>
          })}
        </CheckboxGroup>
      </AdvancedSearchForm>
    )
  }

  renderTableList() {
    let that=this;
    let {reduce,actions,items} = this.props
    let {spins:{tableSpin},key} = reduce
    let page= reduce.page
    let ids = items.map((it,idx)=>it.id)
    let pathname = this.props.location.pathname
    /*筛选和邀约*/
    let columns =  [
       {
        title: "姓名",
        key: "name",
        dataIndex: "name",
        width: 120,
        sorter:true,
      }, {
        title: "应聘职位",
        key: "jobTitle",
        dataIndex: "jobTitle",
        width: 150,
      }, {
        title: "应聘部门",
        key: "dept",
        dataIndex: "dept",
        width: 150,
      }, {
        title: "招聘负责人",
        key: "manage",
        dataIndex: "manage",
        width: 150,
      },{
          title: "offer审批发起时间",
          key: "offertime",
          dataIndex: "offertime",
          width: 120,
      }
    ]

    let tableConf = {
      loading: tableSpin,
      rowKey: "id",
      dataSource:items,
      columns:columns,
      onChange:this.onChange.bind(this),
    }

    return (<DataTable  {...tableConf} page={page} />)
  }

  render() {
    let {children} = this.props
    //模版没有好的解决方案，暂时这样处理
    //console.log(children)

    // if(children && children.type && children.type.WrappedComponent==ResumeFolderListView){
    //     return React.cloneElement(children)
    // }else{
      return (
        <Card className="resumeCard" type="inner" title={this.renderSearchBar()}>
            {this.renderTableList()}
        </Card>
      )
    // }
  }
}
