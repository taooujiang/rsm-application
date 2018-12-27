/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-03-14T15:51:16+08:00
 */

import React, {Component, PropTypes} from 'react'
import {
  Row,
  Col,
  Modal,
  Button,
  Radio,
  Input,
  Form,
  DatePicker,
  Layout,
  Spin,
  Select,
  TreeSelect
} from 'antd'
import moment from 'moment'
import {FormPage} from 'app/components/Page'
import BaseForm,{FormItem} from 'app/components/BaseForm'
import FetchAPI from 'app/utils/FetchAPI'
import {TreeSelectPicker} from 'app/components/TreeView'

const Option = Select.Option
const {TextArea} = Input
const RadioGroup = Radio.Group;
const TreeNode = TreeSelect.TreeNode;

export default class Forward2OtherForm extends FormPage{
  state = {
    dept:[],
    defaultIn:[],
    showDept:false
  }
  componentDidMount(){
    new FetchAPI().fetch(`${APP_SERVER}/user/getInterviewerListJson`,{
      method:'GET'
    }).then((json) => {
        this.setState({
          dept:json.list||[]
        });
    });
    let {location:{state}} = this.props
    if(state.ids.length == 1){
      let {jobId} = state.rows
      new FetchAPI().fetch(`${APP_SERVER}/jobNew/findFzrList?jobId=${jobId}`,{
        method:'GET'
      }).then(res=>{
          this.setState({
            defaultIn:res.list,
            showDept:true ? true :Boolean(res.list.length)
          })
      })

    }

  }

  changeDept(value){
    new FetchAPI().fetch(`${APP_SERVER}/user/getInterviewerListJson?dept=${value}`,{
      method:'GET'
    }).then((json) => {
        this.setState({
          dept:json.list||[]
        });
    });
  }

  renderHrOption(data,idx){
    return (<Select.Option value={data.account} key={idx}>{data.name}</Select.Option>)
  }

  handleSubmit(values){
    let {actions,router,location} = this.props;
    actions.forwardAction(values).then(()=>{
      actions.backRouteReload(router,location)
    })
  }

  render() {
    const {
      form,
      handleSubmit,
      children,
      saveFormRef,
      location:{state:{ids}}
    } = this.props
    return (
      <BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef}>
        <FormItem>
          <Input type="hidden" name="ids" defaultValue={ids}/>
        </FormItem>
        <FormItem>
            <TreeSelectPicker
              label="用人部门"
              name="dept"
              defaultParent={this.state.showDept}
              fetch={`${APP_SERVER}/organizationGroup/getDepartmentTree`}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder="选择部门"
              treeDefaultExpandAll
              rules={[{required:true,message:"所属部门不可为空"}]}
              onChange={this.changeDept.bind(this)}
            />
        </FormItem>
        <FormItem>
          <Select name="interviewers" label="部门负责人" defaultValue={this.state.defaultIn} placeholder="请选择" fetch={this.state.dept} renderItem={this.renderHrOption} mode="multiple" rules={[{required:true,message:"部门负责人不可为空"}]}/>
        </FormItem>
        <FormItem>
          <TextArea  name="words"  placeholder="请留言" rules={[{max:30,message:"留言字数限制30个"}]}/>
        </FormItem>
      </BaseForm>
    )
  }
}
