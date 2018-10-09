/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-17T17:32:29+08:00
 */

import React, {Component, PropTypes} from 'react'
import { Row, Col, Modal, Button, Input, Form, DatePicker, Layout, Spin, Rate, Select,TreeSelect ,message} from 'antd'

import WrapperComponent from 'app/decorators/WrapperComponent'
import BaseForm,{FormItem,customRules} from 'components/BaseForm'
import {TreeSelectPicker} from 'app/components/TreeView'
import {FormPage} from 'app/components/Page'
import ModalView,{UserFormModalView} from 'app/components/Modal.view'
import API from '../api'

const Option = Select.Option
const TreeNode = TreeSelect.TreeNode;
const {TextArea} = Input
const Search = Input.Search;

@WrapperComponent(UserFormModalView)
export class AddMemberStepCode extends FormPage{
  getCode(){
    let params = {
      account : this.props.location.state.account,
      codeType : "2"
    }
    new API().fetchGetMobileCode(params).then((json)=>{
      json.status ? message.success("操作成功") : null
      //倒计时开始
      if (this.state.timmer) {
        clearInterval(this.state.timmer)
        this.setState({
          timmer:null
        })
      }
      document.querySelector('.ant-input-search .ant-input-suffix button').setAttribute('disabled', true)
      clearInterval(this.state.timmer)
      this.setState({
        count: 60
      })
      this.setState({
        timmer: setInterval(() => {
          this.setState({
            count: this.state.count - 1
          }, () => {

          })
        }, 1000)
      })
    })
  }
  
  componentWillUnmount = () => {
    if (document.querySelector('.ant-input-search .ant-input-suffix button')) {

      document.querySelector('.ant-input-search .ant-input-suffix button').removeAttribute('disabled')
    }
    if(this.state.timmer){
      clearInterval(this.state.timmer)
    }
  }
  handleSubmit(value){
    let {actions} = this.props
    console.log('AddMemberStepCodeAddMemberStepCode')
    let { handleRerver,location:{state:{codeStep}} } = this.props
    if(codeStep){
      actions.enableAccWithCodeAction(value)
      return actions.route2UserListAction()
    }
    new API().fetchSubmitCode(value).then((json)=>{
      if(json.status){
        message.success("操作成功")
        actions.route2AddUserFormAction(account)
      }else{
        message.warning(json.msg)
      }
    })
  }
  render(){
    const{state:{account,type,msg}}=this.props.location
    if(this.state.count==0){
      //倒计时结束 
      document.querySelector('.ant-input-search .ant-input-suffix button').removeAttribute('disabled')
      clearInterval(this.state.timmer)

    }
    return (
      <Spin tip="Loading..." spinning={false}>
        <BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef}>
        <p>该帐号为{msg}的HR或面试官</p>
        <p>手机验证通过后，帐号将加入新公司，原公司帐号禁用</p>
        <FormItem>
          <Input name="account" type='hidden' defaultValue={account}/>
        </FormItem>
        <FormItem>
                   <Search label="验证码" name="code"
                     placeholder="请输入手机验证码"
                     rules={[{required:true,message:"请输入验证码"},]}
                     enterButton={`获取验证码${this.state.count?this.state.count:''}`}
                    onSearch={this.getCode.bind(this)}
                  />
          </FormItem>
        </BaseForm>
      </Spin>
    )
  }
}

@WrapperComponent(UserFormModalView)
export class AddMemberStepOrign extends FormPage{

  renderRoleOption(data,idx){
      return (<Select.Option value={data.roleId} key={idx}>{data.roleName}</Select.Option>)
  }
  handleSubmit(values){
    let {actions,router,location} = this.props
      actions.saveUserAction(values)
      actions.route2UserListAction()
  }
  render(){
    const { onSubmit, saveFormRef, item, optionCode, optionLabel , messageItem} = this.props;
    const{location:{state:{account}}} = this.props;
    return(
      <Spin tip="Loading..." spinning={false}>
        <BaseForm onSubmit={onSubmit} ref={this.saveFormRef}>
        <FormItem>
          <Input name="account" type='hidden' defaultValue={account}/>
        </FormItem>
          <FormItem>
            <Input label="姓名" name="acctName" rules={[{required:true,message:"用户名不可为空",whitespace:true},]}/>
          </FormItem>
          {/* <FormItem>
            <Input label="用户名" name="account"
                   rules={[{required:true,message:"用户名不可为空"},{validator:customRules.checkMobile}]}
                   />
          </FormItem> */}
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
					<p>注：密码将以短信形式发送到成员手机。手机号码直接用于帐号登录，不可修改。</p>
        </BaseForm>
      </Spin>
    )
  }
}


@WrapperComponent(UserFormModalView)
export class AddMemberStepFirst extends FormPage{
  /*state type判断123为分别三种角色后 4代表返回正常添加页面**/
  state = {
    orgin:true,
    type:1,
    msg:"",
    account:""
  }
  handleSubmit(value){
    let {actions} = this.props
    let {type} = this.state
    let {account} = value
    console.log('AddMemberStepFirst')
    new API().fetchAccountCan(value).then((json)=>{
      if(json.status && json.type == 1){
        /*先判断是否为其他公司超级管理员  提示后退出*/
        message.warning(`该帐号为${json.msg}的超级管理员，无法重复添加`,5)
        return false
      }
      /*判断其他情况**/
      if(json.status){
        /*为true时需要验证 type 123分别为管理员Hr面试官*/
        // this.setState({
        //   orgin:false,
        //   type:json.type,
        //   msg:json.msg,
        //   account:account
        // })
        actions.route2AddUserCodeAction(account,json)

      }else if(json.isRepeat){
        message.warning(json.msg)
        return
      }else{
        actions.route2AddUserFormAction(account)
      }
      // else{
      //   this.setState({
      //     orgin:false,
      //     type:4,
      //     account:account
      //   })
      // }
    }).catch(e => {

      message.warning(e.msg)
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
  					<p>注：密码将以短信形式发送到成员手机。手机号码直接用于帐号登录，不可修改。</p>
          </BaseForm>
        </Spin>
      )

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
					<p>注：密码将以短信形式发送到成员手机。手机号码直接用于帐号登录，不可修改。</p>
        </BaseForm>
      </Spin>
    )
  }
}
