import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import BaseForm, { FormItem, customRules } from 'components/BaseForm'
import { FormPage } from 'app/components/Page'
import { Button, Card, Input, message,Select,Icon,Tag,Spin} from 'antd'
import { ImgUpload } from 'app/components/FileUpload'
import DictUtils from 'app/utils/DictUtils'
const { TextArea } = Input;
@NestedComponent()
export default class CardShare extends FormPage {
    constructor(props, ...rest) {
        super(props, ...rest); 
        this.state = {
            title:'',
            name: '',
            shortName:'',
            remark: '',
            photoUrl: '',
            id: '',
            loading: true,
            imgUrl:'',
            btnState:'edit',
            labelNames:['标签1','标签2','标签3'],
            imgUrlArr:['ceshu']
        };
    }
    // 获取初始值再次渲染界面
    componentDidMount() {
        // fetchShareSetting({})
        //   .then(res => {
        //     const item = res.list[0]||{}
        //     const { title , remark , photoUrl , id  } = item
        //     this.setState({
        //       title, remark, photoUrl, id,
        //       loading: false
        //     })
        //   })
        //   .catch(e => {
        //     console.log(e)
        //     message.warning(e.msg)
            this.setState({
              loading: false
            })
        //   })
      }
    //在上传之前实现上传验证
    beforeUpload(file){
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
    // 上传的返回值
    // responseType(res) {
    //     return res.fileUrl
    //   }
    //上传成功之后改变state的值   
      onSuccess(info,that) {
          console.log(info,that,"====info,sign, that")
          that.setState({
            imgUrl: info.file.response.fileUrl
         })
            console.log(that.state.imgUrlArr,"====that.state.imgUrlArr")
      }
      onImgArrSuccess(info,that){
        console.log(info,that,"====info,sign, that")
        that.setState({
           imgUrl: info.file.response.fileUrl
        })

      }
    onChange(file){
      console.log(file,"===file")
    }
    closeFun(id,event){
        console.log('删除产品产品',id,event)
    }
    // 预览
    onProview(sign,e){
        let { actions, router } = this.props;
        // actions.addRoute(router)
        sign == 'preview' &&  actions.SettingCardShareRouteAction(sign)
        this.setState({
            btnState: sign
         })

    }
    // 渲染dics的select
    renderSelectOption(data,idx){
        return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
    }
    // 显示label并选择
    addLabel(sign,e) {
        let { actions, router } = this.props;
        // actions.addRoute(router)
        actions.SettingCardShareRouteAction(sign)
    }
    // 提交修改数据
    handleSubmit(values,sign){
        this.setState({
            btnState: sign
         })
        console.log(values,"===this.values")
    }
    tagsClose(it){
        console.log(it,"===this.it")
    }
    // 渲染card的头部内容
    renderToolbar(){
        return (
            <div>
                {
                    this.state.btnState == 'edit' ?
                    <Button type="primary" onClick={this.onSubmit.bind(this)}>保存</Button>
                    :
                    <span>
                        <Button onClick={this.onProview.bind(this,'preview')}>效果查看</Button>
                         <Button onClick={this.onProview.bind(this,'edit')}>编辑</Button>
                    </span>
                }
               
            </div>
        )
    }
    // 渲染form部分
    renderForm(){
        const fromFullItemLayoutArr=[
            {
                labelCol: {
                    span: 6
                },
                wrapperCol: {
                    span: 24
                }
            },
            {
                labelCol: {
                    span:6
                },
                wrapperCol: {
                    span: 24
                },
                style:{
                    display:'inline-block',
                    width:'50%'
                }
            }
        ]
        const style={
            style:{
                background: '#FAFAFA',
                padding: '20px 0 0 20px',
                marginLeft: '100px',
                border:'solid 1px #EAEAEA'
            }
        }
        const { onSubmit} = this.props
        const { title,name, remark, photoUrl, id,shortName,labelNames,imgUrlArr,imgUrl} = this.state
        return (
            <BaseForm  onSubmit={onSubmit} ref={this.saveFormRef}>
                {
                    this.state.btnState == 'edit' ? 
                      null
                    : <div className='maskModel'></div>
                }
                <FormItem className="row-hidden">
                    <Input name="id" type="hidden" defaultValue={id}     />
                </FormItem>
                <FormItem {...fromFullItemLayoutArr[1]}>
                    <Input label="公司名称" name="name" defaultValue={name}
                        rules={[{ max: 15, message: "最多输入15个字！" },
                           {required: true, message: '请输入公司名称!'}]} />
                </FormItem>
                <FormItem {...fromFullItemLayoutArr[1]}  >
                    <Input label="公司简称" name="shortName" defaultValue={shortName}
                        rules={[{ max: 6, message: "最多输入6个字！" },
                        {required: true, message: '请输入公司名称!'}]} />
                </FormItem>
                <FormItem {...fromFullItemLayoutArr[1]}>
                    <Select name="industry" label="公司性质" placeholder="请选择"  
                    fetch={DictUtils.getDictByType("industry")} 
                    renderItem={this.renderSelectOption}
                    rules={[{required: true, message: '请选择公司性质!'}]} />
                </FormItem>
                <FormItem {...fromFullItemLayoutArr[1]}  >
                    <Select name="industry" label="行业" placeholder="请选择"  
                    fetch={DictUtils.getDictByType("industry")} 
                    renderItem={this.renderSelectOption}
                    rules={[{required: true, message: '请选择行业!'}]}  />
                </FormItem>
                <FormItem {...fromFullItemLayoutArr[1]} >
                    <Select name="scale" label="公司规模" placeholder="请选择"  
                    fetch={DictUtils.getDictByType("scale")} 
                    renderItem={this.renderSelectOption} 
                    rules={[{required: true, message: '请选择公司规模!'}]}/>
                </FormItem>
                <FormItem {...fromFullItemLayoutArr[1]}  >
                    <Input label="公司网址" name="shortName" defaultValue={shortName}
                            rules={[]} />
                </FormItem>
                <FormItem {...fromFullItemLayoutArr[0]}  style={{marginBottom:'0'}}  >
                    <Select name="industry" label="公司地址" placeholder="选择地址"  
                    fetch={DictUtils.getDictByType("industry")} 
                    renderItem={this.renderSelectOption}
                    rules={[{required: true, message: '请选择公司维护的地址!'}]} />
                </FormItem>
                <FormItem {...fromFullItemLayoutArr[0]}>
                <TextArea label="" name="remark" rows={4} defaultValue={remark} placeholder='请输入详细地址'
                        rules={[{ max: 30, message: "最多输入30个字！" }]} />
                </FormItem>
                <FormItem label="公司LOGO" {...fromFullItemLayoutArr[0]} >
                   
                    <div   name='imgUrl' className="tags">
                          
                             <ImgUpload  label="公司logo" name="" type={2} beforeUpload={this.beforeUpload}
                                imgUrl={imgUrl}
                                btnText="点击上传"
                                iconImg='plus'
                                accept="image/png,image/jpg,image/JPEG,image/bmp"
                                tipText=" 请上传jpg，png，jpeg格式图片，建议尺寸为240*240，不超过500KB"
                                imgWidth="60px"
                                onChange={this.onChange}  onResponse={this.responseType} onSuccess={this.onSuccess}></ImgUpload>
                    </div>
                </FormItem>
                <FormItem label="公司福利"  {...fromFullItemLayoutArr[0]}>
                    <div   name='tags' className="tags">
      
                            {
                            labelNames && labelNames.map(it => {
                                return <Tag  color='blue' closable onClose={this.tagsClose(it)}>{it}</Tag>
                            })
                            }
                             <Button size='small'  onClick = {this.addLabel.bind(this,'add')} className="tag-edit-btn"><Icon type="plus"/>添加 </Button>
                    </div>
                   
                </FormItem>
                <FormItem {...fromFullItemLayoutArr[0]}>
                    <TextArea label="公司介绍" name="remark" rows={4} defaultValue={remark}
                        rules={[{ max: 30, message: "最多输入30个字！" }]} />
                </FormItem>
                <FormItem label="公司产品" {...fromFullItemLayoutArr[0]}>
                    <Button   onClick = {this.addLabel.bind(this,'products')}   name='products'className="tag-edit-btn"><Icon type="plus"/>添加 </Button>
                </FormItem>
                <FormItem name='imgs' {...fromFullItemLayoutArr[0]}   {...style}>
                    <div name='imgs' className='productItem' >
                      <Icon type="close-circle" className='iconClose' onClick={this.closeFun.bind(this,'id')} />
                        <FormItem {...fromFullItemLayoutArr[0]} >
                        <Input label="产品名称" name="title" defaultValue={title}
                            rules={[{ max: 20, message: "最多输入20个字！" }]} />
                         </FormItem>
                         <FormItem {...fromFullItemLayoutArr[0]} >
                        <Input label="产品描述" name="title" defaultValue={title}
                            rules={[{ max: 20, message: "最多输入20个字！" }]} />
                        </FormItem>
                        <FormItem {...fromFullItemLayoutArr[0]} >
                        <ImgUpload label="产品LOGO" name="photoUrl" type={2} beforeUpload={this.beforeUpload}
                        imgUrl={imgUrl}
                        btnText="上传图标"
                        iconImg='plus'
                        accept="image/png,image/jpg,image/JPEG"
                        tipText=" 上传文件建议尺寸为300*300，大小不超过200KB"
                        imgWidth="300px"
                        onChange={this.onChange}  onResponse={this.responseType} onSuccess={this.onImgArrSuccess}></ImgUpload>
                        </FormItem>
                    </div>
                    
                </FormItem>
                <FormItem name='imgs' {...fromFullItemLayoutArr[0]}   {...style}>
                    <div name='imgs' className='productItem' >
                    <Icon type="close-circle" className='iconClose' onClick={this.closeFun.bind(this,'id')} />
                        <FormItem {...fromFullItemLayoutArr[0]} >
                        <Input label="产品名称" name="title" defaultValue={title}
                            rules={[{ max: 20, message: "最多输入20个字！" }]} />
                         </FormItem>
                         <FormItem {...fromFullItemLayoutArr[0]} >
                        <Input label="产品描述" name="title" defaultValue={title}
                            rules={[{ max: 20, message: "最多输入20个字！" }]} />
                        </FormItem>
                        <FormItem {...fromFullItemLayoutArr[0]} >
                        <ImgUpload label="产品LOGO" name="photoUrl" type={2} beforeUpload={this.beforeUpload}
                        imgUrl={imgUrl}
                        btnText="上传图标"
                        iconImg='plus'
                        accept="image/png,image/jpg,image/JPEG"
                        tipText=" 上传文件建议尺寸为300*300，大小不超过200KB"
                        imgWidth="300px"
                        onChange={this.onChange}  onResponse={this.responseType} onSuccess={this.onImgArrSuccess}></ImgUpload>
                        </FormItem>
                    </div>
                    
                </FormItem>
                <FormItem {...fromFullItemLayoutArr[0]} >
                    <ImgUpload label="公司图集" name="photoUrl" type={1} beforeUpload={this.beforeUpload}
                        imgUrl={imgUrl}
                        btnText="点击上传"
                        iconImg='plus'
                        accept="image/png,image/jpg,image/JPEG"
                        tipText=" 上传文件建议尺寸为300*300，大小不超过200KB"
                        imgWidth="300px"
                        onChange={this.onChange} onResponse={this.responseType} onSuccess={this.onSuccess}></ImgUpload>
                </FormItem>
                {/* <FormItem {...fromFullItemLayoutArr[0]} >
                    <div name='imgUrlArr' label=''>
                    {
                        this.state.imgUrlArr.map((item,index)=>{
                        return  <p key='index'>{item}</p>
                        })
                    }
                    </div>
                </FormItem>      */}
          </BaseForm>   
        )
    }
    render() {
        return (
        <Spin spinning={this.state.loading}>
            <Card className="school-form-view" title={<div><h3 className="card-title">企业名片设置</h3> <span className='card-subtitle'>用于校招小程序，让候选人更加了解公司信息</span></div>} extra={this.renderToolbar()}	>
                {this.renderForm()}

            </Card>
        </Spin>
        );
    }
}
