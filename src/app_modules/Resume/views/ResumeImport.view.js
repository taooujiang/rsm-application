import React, {Component, PropTypes} from 'react'
import {
  Button,
  Input,
  Table,
  Select,
  DatePicker,
  Modal,
  Menu,
  Tag,
  Card,
  Popover,
  Dropdown,
  Icon,
} from 'antd'
import {Link} from 'react-router'
import moment from 'moment'
import FileUpload from 'app/components/FileUpload'
import BaseForm,{FormItem,customRules} from 'app/components/BaseForm'
import PageView,{FormPage} from 'app/components/Page'
import {Layout,Fixed,Pane} from 'app/components/Layout'

const Option = Select.Option


export default class ResumeImportView extends FormPage {

  constructor(props) {
    super(props);
  }
  fileUploadSuccess(){

  }
  fileUploadResponse(){

  }
  handleSubmit(value){

  }

  render() {
    let {children} = this.props
      return (
        <BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="resume-import-form">
          <Layout direction='rows' className="resume-import">
              <Pane>
                <FileUpload onSuccess={this.fileUploadSuccess.bind(this)} onResponse={this.fileUploadResponse.bind(this)} text="点击上传候选人简历"/>
              </Pane>
              <Fixed style={{width:500}}>
                <FormItem>
                  <Input label="姓名" name="name"/>
                </FormItem>
                <FormItem>
                  <Input label="性别" name="sex"/>
                </FormItem>
                <FormItem>
                  <Input label="电话号码" name="mobilephone"/>
                </FormItem>
                <FormItem>
                  <Input label="邮箱号码" name="email"/>
                </FormItem>
                <FormItem>
                  <Input label="关联职位" name="jobid"/>
                </FormItem>
              </Fixed>
          </Layout>
        </BaseForm>
      )
  }
}
