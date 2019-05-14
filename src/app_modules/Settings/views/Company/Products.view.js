/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-17T17:32:29+08:00
 */

import React, {Component, PropTypes} from 'react'
import {
  Row,
  Col,
  Modal,
  Button,
  Input,
  Form,
  DatePicker,
  Layout,
  Spin,
  Rate,
  Select
} from 'antd'
import {FormPage} from 'app/components/Page'
import FetchAPI from 'app/utils/FetchAPI'
import CheckTag from 'app/components/CheckTag'
import BaseForm,{FormItem} from 'app/components/BaseForm'
import { ImgUpload } from 'app/components/FileUpload'

const Option = Select.Option
const {TextArea} = Input

export default class LabelFormView extends FormPage{
  state = {
    name:'',
    description:'',
    photoUrl:''
  }

  componentWillMount(){
    // let {location:{state:{labels}}} = this.props
    // let labels=['ceshi']
    // new FetchAPI().fetch(`${APP_SERVER}/option/optionListJson?optionCode=labels_code`,{
    //   method:'GET'
    // }).then((json) => {
        this.setState({
            name:'测试产品名称',
            description:'测试产品描述',
            photoUrl:''
        });
    // });

  }
//   提交数据同时同步到reducer
  handleSubmit(values){
    // let {current} = this.state
    // let {params:{resumeId},actions,router,location} = this.props
    // let json = {
    //   id:resumeId,
    //   remarkLabel:current.join(",")
    // }
    // actions.setLabelAction(json).then((json)=>{
    //   actions.backRouteReload(router,location)
    // })
  }
 //在上传之前实现上传验证
 beforeUpload(){
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
  render() {
    // let {params:{resumeId}, reduce:{spins:{formSpin}},location:{state:{item}}} = this.props;
    const style ={
        labelCol: {
            span: 6
        },
        wrapperCol: {
            span: 24
        }
    }
    const {name,photoUrl,description} =this.state
    return (<BaseForm
         onSubmit={this.handleSubmit} 
         ref={this.saveFormRef} 
         className="products-form">
                <FormItem className="row-hidden">
                            <Input name="id" type="hidden" defaultValue={id} />
                </FormItem>
                <FormItem {...style}>
                    <Input label="产品名称" name="name" defaultValue={name}
                        rules={[{ max: 20, message: "最多输入20个字！" }]} />
                </FormItem>
                <FormItem {...style}>
                    <Input label="产品描述" name="description" defaultValue={description}
                        rules={[{ max: 20, message: "最多输入20个字！" }]} />
                </FormItem>
                <FormItem {...style} >
                    <ImgUpload label="产品logo" name="photoUrl" type={2} beforeUpload={this.beforeUpload}
                        imgUrl={photoUrl}
                        btnText="上传图标"
                        accept="image/png,image/jpg,image/JPEG"
                        tipText=" 上传文件建议尺寸为300*300，大小不超过200KB"
                        imgWidth="300px"
                        onResponse={this.responseType} onSuccess={this.onSuccess}></ImgUpload>
                </FormItem>
        </BaseForm>)
  }
}
