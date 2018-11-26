import React, {Component, PropTypes} from 'react'
import {
  Button,
  Cascader,
  Input,
  Table,
  DatePicker,
  Select,
  Modal,
  Menu,
  Card,
  Tree,
  Dropdown,
  Icon,
} from 'antd'
import AdvancedSearchPanel from 'app/components/AdvancedSearchPanel'
import ListField,{JobListField} from 'app/components/ListField'
import DictUtils from 'app/utils/DictUtils'
import moment from 'moment'
import BaseForm,{FormItem,customRules} from 'app/components/BaseForm'
import TreeView,{TreeSelectPicker} from 'app/components/TreeView'
import CalendarPicker from 'app/components/CalendarPicker'
import LinkagePullDown from 'app/components/LinkagePullDown'

const {TreeNode} = Tree

export default class ResumeSide extends Component{

  setResetForm(resetFuc) {
    this.resetForm = resetFuc;
  }
  handleFilter(values){
    let {actions} = this.props
    console.log(values,'ssssssssssssss')
    actions.listAction(values)
  }
  renderSelectOption(data,idx){
    return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  renderJobOption(it,idx){
    return (<Select.Option value={it.jobId} key={idx}>{it.jobTitle}</Select.Option>)
  }

  jobRef(ref){
    this.jobListField = ref
  }
  render(){
    let {params} = this.props
    //console.log("val",this.state.val)
    return (<AdvancedSearchPanel setResetForm = {this.setResetForm.bind(this)} filterSubmitHandler={this.handleFilter.bind(this)} module="1">
      <Select label="应聘职位" name="jobId" fetch={`${APP_SERVER}/jobNew/getJobList`} renderItem={this.renderJobOption}></Select>
      <Input name="name" label="姓名" placeholder="请输入姓名"/>
      <TreeSelectPicker
        label="招聘部门"
        name="groupId"
        fetch={`${APP_SERVER}/organizationGroup/getDepartmentTree`}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="选择部门"
        treeDefaultExpandAll
      />
      <CalendarPicker label="offer审批发起时间" name="offertime"  minDate={moment().subtract(60,'days')}/>
    </AdvancedSearchPanel>)
  }

}
