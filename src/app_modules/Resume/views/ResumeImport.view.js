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
  message
} from 'antd'
import {Link} from 'react-router'
import moment from 'moment'
import {ImgUpload} from 'app/components/FileUpload'
import DictUtils from 'app/utils/DictUtils'
import BaseForm,{FormItem,customRules} from 'app/components/BaseForm'
import PageView,{FormPage} from 'app/components/Page'
import {Layout,Fixed,Pane} from 'app/components/Layout'

const Option = Select.Option


export default class ResumeImportView extends FormPage {

  constructor(props) {
    super(props);
    this.state= {
      disabled:false,
      btnText:"点击上传候选人简历"
    }
  }
  fileUploadSuccess(){
    this.setState({
      disabled:false,
      btnText:"点击更换候选人简历"
    })
  }
  fileUploadResponse(res){
    return res.id
  }
  beforeUpload(file){
    let {name} = file
    let suffix = name.split(".").pop().toLocaleLowerCase()
    /*①　用户可以上传doc、PDF、jpg、png、JPEG格式的简历；*/
    if (suffix == "jpg" || suffix == "png" || suffix == "jpeg" || suffix == "pdf" || suffix == "doc" || suffix == "docx") {
      this.setState({
        disabled:true,
        btnText:"上传中..."
      })
      return true
    } else {
      message.warning("只能上传doc、PDF、jpg、png、JPEG格式的简历")
      return false
    }
  }
  handleSubmit(){
    let {actions} = this.props
    let importform = this.form
    importform.validateFieldsAndScroll({force:true},(err,values) => {
       if (err) {
         return;
       }
       // console.log(values)
       actions.importResumeAction(values).then(json=>{
         importform.resetFields()
       })
     });
  }
  renderSelectOption(data,idx){
    return <Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>
  }
  renderJobOption(it,idx){
    return (<Select.Option value={it.jobId} key={idx}>{it.jobTitle}</Select.Option>)
  }
  renderRefferOption(data, idx) {
		return (< Select.Option value = {data.id} key = {idx} > {`${data.name}(${data.mobilephone})`} < /Select.Option>)
  }

  render() {
    let {children} = this.props
    let {disabled,btnText} = this.state
      return (
        <BaseForm ref={this.saveFormRef} className="resume-import-form">
          <Layout direction='rows' className="resume-import">
              <Pane className="fileUploadArea">
                <FormItem className="fileUploadItem">
                  <ImgUpload type={6} name="sourceFileId" btnText={btnText} disabled={disabled} beforeUpload={this.beforeUpload.bind(this)} onResponse={this.fileUploadResponse} onSuccess={this.fileUploadSuccess.bind(this)}></ImgUpload>
                </FormItem>
            </Pane>
              <Fixed style={{width:500}}>
                <FormItem>
                  <Input label="姓名" name="name" placeholder = "请填写姓名" rules={[
											{
												required: true,
												message: "姓名不可为空"
											}, {
												validator: customRules.required
											}
										]}/>
                </FormItem>
                <FormItem>
                  <Select label="性别" name="sex" placeholder = "请选择" fetch={DictUtils.getDictByType("sex")} renderItem={this.renderSelectOption}></Select>
                </FormItem>
                <FormItem>
                  <Input label="电话号码" name="mobilephone" placeholder = "请填写电话号码" rules={[
											 {
												validator: customRules.checkMobile
											}
										]}/>
                </FormItem>
                <FormItem>
                  <Input label="邮箱号码" name="email" placeholder = "请填写邮箱号码" rules={[{
												type: "email",
												message: "邮箱格式不正确"
											}
										]}/>
                </FormItem>
                <FormItem>
                  <Select label="关联职位" name="jobId" placeholder = "请选择" showSearch fetch={`${APP_SERVER}/jobNew/getJobList?jobType=1`} renderItem={this.renderJobOption} rules={[
                    {
                      required: true,
                      message: "关联职位不可为空"
                    }
                    ]}></Select>
                </FormItem>
                <FormItem>
                  <Select label="推荐人" name="referrer" placeholder = "请选择" showSearch fetch = {`${APP_SERVER}/member/findMemebersWithOnJob`} renderItem = {this.renderRefferOption }/>
                </FormItem>
                <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
              </Fixed>
          </Layout>
        </BaseForm>
      )
  }
}
