import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import { Button, Card, Input, message, Spin } from "antd"
import BaseForm, { FormItem, customRules } from 'components/BaseForm'
import { FormPage } from 'app/components/Page'
import { ImgUpload } from 'app/components/FileUpload'
import { fetchShareSetting, saveShareSetting } from '../../api'
const { TextArea } = Input;
@NestedComponent()
export default class Share extends FormPage {
  state = {
    title: '',
    remark: '',
    photoUrl: '',
    id: '',
    loading: true
  }
  renderToolbar() {
    let {loading} = this.state
    return (
      <Button type="primary" onClick={this.onSubmit.bind(this)} actionkey="add" disabled={loading}>保存</Button>
    )
  }
  componentDidMount() {
    fetchShareSetting({})
      .then(res => {
        const item = res.list[0]||{}
        const { title , remark , photoUrl , id  } = item
        this.setState({
          title, remark, photoUrl, id,
          loading: false
        })
      })
      .catch(e => {
        console.log(e)
        message.warning(e.msg)
        this.setState({
          loading: false
        })
      })
  }

  handleSubmit(values) {
    let { actions, router } = this.props;
    this.setState({
      loading: true
    },()=>{
      saveShareSetting(values).then(res => {
        message.success('保存成功');
        this.setState({
          loading: false,
  	      id:res.id
        })
      }).catch(e => {
        message.warning(e.msg)
        this.setState({
          loading: false
        })
      })
    })

  }
  beforeUpload(file) {
    let { name } = file
    let suffix = name.split(".").pop().toLocaleLowerCase()
    if (file.size / 1024 > 200) {
      message.warning("图片限制大小为200KB")
      return false
    }
    if (suffix == "jpg" || suffix == "png" || suffix == "jpeg") {
      return true
    } else {
      message.warning("请上传JPG、PNG、JPEG格式图片")
      return false
    }
  }
  responseType(res) {
    return res.fileUrl
  }
  onSuccess(info, that) {
    that.setState({
      imgUrl: info.file.response.fileUrl
    })
  }
  renderForm() {
    const formFullItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 12
      }
    };

    const { onSubmit, } = this.props

    const { title, remark, photoUrl, id } = this.state
    return (
        <BaseForm onSubmit={onSubmit} ref={this.saveFormRef}>
          <FormItem className="row-hidden">
            <Input name="id" type="hidden" defaultValue={id} />
          </FormItem>
          <FormItem {...formFullItemLayout} >
            <Input label="分享标题" name="title" defaultValue={title}
              rules={[{ max: 20, message: "最多输入20个字！" }]} />
          </FormItem>
          <FormItem {...formFullItemLayout} >
            <TextArea label="分享描述" name="remark" rows={4} defaultValue={remark}
              rules={[{ max: 30, message: "最多输入30个字！" }]} />
          </FormItem>
          <FormItem {...formFullItemLayout} >
            <ImgUpload label="分享图片" name="photoUrl" type={2} beforeUpload={this.beforeUpload}
              imgUrl={photoUrl}
              btnText="上传图标"
              accept="image/png,image/jpg,image/JPEG"
              tipText=" 上传文件建议尺寸为300*300，大小不超过200KB"
              imgWidth="300px"
              onResponse={this.responseType} onSuccess={this.onSuccess}></ImgUpload>
          </FormItem>
        </BaseForm>
    );
  }
  render() {

    return (
      <Spin spinning={this.state.loading}>
        <Card title={<div><h3 className="card-title">分享设置</h3></div>} extra={this.renderToolbar()}	>
          {this.renderForm()}
        </Card>
      </Spin>
    )
  }
}
