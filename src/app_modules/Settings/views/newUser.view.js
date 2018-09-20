/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-17T17:32:29+08:00
 */

import React, {Component, PropTypes} from 'react'
import { Row, Col, Modal, Button, Input, Form, DatePicker, Layout, Spin, Rate, Select,TreeSelect } from 'antd'

import WrapperComponent from 'app/decorators/WrapperComponent'
import BaseForm,{FormItem,customRules} from 'components/BaseForm'
import {TreeSelectPicker} from 'app/components/TreeView'
import {FormPage} from 'app/components/Page'
import ModalView from 'app/components/Modal.view'
import API from '../api'

const Option = Select.Option
const TreeNode = TreeSelect.TreeNode;
const {TextArea} = Input

class AddMemberStepFirst extends FormPage{
  handleSubmit(value){
    let {actions} = this.props
    new API.fetchAccountCan.then(()=>{

    })
  }
  render(){
    return(
      <Spin tip="Loading..." spinning={false}>
        <BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef}>
          <FormItem>
            <Input label="用户名" name="account" placeholder="请输入手机号码"
                   rules={[{required:true,message:"用户名不可为空"},{validator:customRules.checkMobile}]}
                   />
          </FormItem>
					<p>注：密码将以短信形式发送到成员手机。</p>
        </BaseForm>
      </Spin>
    )
  }
}

class AddMemberStepCode extends FormPage{
  handleSubmit(value){

  }
  render(){
    return (
      <Spin tip="Loading..." spinning={false}>
        <BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef}>
        <p>该账号为浙江企蜂通信公司的HR或面试官</p>
        <p>手机验证通过后，帐号将加入新公司，原公司帐号禁用</p>
        <FormItem>
          <Input name="account" type='hidden' defaultValue={this.props.account}/>
        </FormItem>
        <FormItem>
            <Input label="验证码" name="account"
                  placeholder="请输入手机验证码"
                  addonAfter={<Button>获取验证码</Button>}
                   rules={[{required:true,message:"验证码不可为空"},{validator:customRules.checkMobile}]}
                   />
          </FormItem>
        </BaseForm>
      </Spin>
    )
  }
}

class AddMemberStepOrign extends FormPage{

  renderRoleOption(data,idx){
      return (<Select.Option value={data.roleId} key={idx}>{data.roleName}</Select.Option>)
  }
  handleSubmit(values){
    let {actions,router,location} = this.props
      actions.saveUserAction(values)
      actions.backRoute(router)
  }
  render(){
    return(
      <Spin tip="Loading..." spinning={false}>
        <BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef}>
        <FormItem>
          <Input name="account" type='hidden' defaultValue={this.props.account}/>
        </FormItem>
          <FormItem>
            <Input label="姓名" name="acctName" rules={[{required:true,message:"用户名不可为空",whitespace:true},]}/>
          </FormItem>
          <FormItem>
            <Input label="用户名" name="account"
                   rules={[{required:true,message:"用户名不可为空"},{validator:customRules.checkMobile}]}
									 disabled={routeParams.account?true:false}//编辑时不可修改
                   />
          </FormItem>
          <FormItem>
            <Select label="角色" name="roleId"
                    rules={[{required:true,message:"角色不可为空"}]}
                    fetch={`${APP_SERVER}/authRole/getRoleInfo`}
                    renderItem={this.renderRoleOption}
                    />
          </FormItem>
          <FormItem>
              <TreeSelectPicker
                label="所属部门"
                name="dept"
                fetch={`${APP_SERVER}/organizationGroup/getDepartmentTree`}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="选择部门"
                treeDefaultExpandAll
                rules={[{required:true,message:"所属部门不可为空"}]}
              />
          </FormItem>
					<p>注：密码将以短信形式发送到成员手机。</p>
        </BaseForm>
      </Spin>
    )
  }
}

@WrapperComponent(ModalView)
export class UserAddNewPage extends Component{
  state = {
    step : 1
  }
  renderWhichPage(){
    let {step} = this.state


  }
  render(){
    return this.renderWhichPage()
  }
}



@WrapperComponent(ModalView)
export default class UserOptionView extends FormPage{


    renderRoleOption(data,idx){
        return (<Select.Option value={data.roleId} key={idx}>{data.roleName}</Select.Option>)
    }

  //处理表格提交后动作
  handleSubmit(values){
    let {actions,router,location} = this.props
      actions.saveUserAction(values)
      actions.backRoute(router)
  }
  render() {
		let {actions, reduce:{spins:{formSpin}},item,routeParams,routeParams:{account}	} = this.props
    return (
      <Spin tip="Loading..." spinning={false}>
        <BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef}>
					<FormItem>
            <Input name="id" type='hidden' defaultValue={account}/>
          </FormItem>
          <FormItem>
            <Input label="姓名" name="acctName" rules={[{required:true,message:"用户名不可为空",whitespace:true},]} defaultValue={item.name}/>
          </FormItem>
          <FormItem>
            <Input label="用户名" name="account"
                   rules={[{required:true,message:"用户名不可为空"},{validator:customRules.checkMobile}]}
									 defaultValue={account}
									 disabled={routeParams.account?true:false}//编辑时不可修改
                   />
          </FormItem>
          <FormItem>
            <Select label="角色" name="roleId"
                    rules={[{required:true,message:"角色不可为空"}]}
                    fetch={`${APP_SERVER}/authRole/getRoleInfo`}
                    renderItem={this.renderRoleOption}
                    defaultValue={item.roleId}
                    />
          </FormItem>
          <FormItem>
              <TreeSelectPicker
                label="所属部门"
                name="dept"
                fetch={`${APP_SERVER}/organizationGroup/getDepartmentTree`}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                // renderItem={this.renderTreeData.bind(this)}
                placeholder="选择部门"
                treeDefaultExpandAll
                defaultValue={item.dept}
                rules={[{required:true,message:"所属部门不可为空"}]}
              />
          </FormItem>
					<p>注：密码将以短信形式发送到成员手机。</p>
        </BaseForm>
      </Spin>
    )
  }
}
