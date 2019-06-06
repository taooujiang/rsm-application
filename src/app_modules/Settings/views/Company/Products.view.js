/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-17T17:32:29+08:00
 */

import React, {Component, PropTypes} from 'react'
import {
  message,
  Icon,
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
import BaseForm, { FormItem, customRules }  from 'app/components/BaseForm'
import { ImgUpload,ImgUploadList } from 'app/components/FileUpload'

const Option = Select.Option
const {TextArea} = Input

export default class LabelFormView extends FormPage{
  constructor(props) {
    super(props);
    this.state={
      initialValue:props.productList || [],
      data: [],
      curentfile:{}
    }
  }
  componentWillReceiveProps(nextProps) {
    const {value,onChange} =this.props
    console.log(nextProps.value,"==product=componentWillReceiveProps")
    if(JSON.stringify(nextProps.value) != JSON.stringify(this.props.value)){
      this.setState({
        initialValue: nextProps.value
      },function(){
        this.props.productsOnReturn(nextProps.value)
      });
      
    }
  }
      //在上传之前实现上传验证
      beforeUpload(num,size,preImgList,sign,file,fileList){
        return new Promise((resolve, reject) => {
            let type = file.type.split("/").pop().toLocaleLowerCase()
            // console.log(num,sign,this.state[sign],file,fileList,"===beforeUpload-befor")
            let preNum = preImgList ?  preImgList.length  : 0
            this.state[sign] = this.state[sign] ? this.state[sign] : 1
             console.log((1  + preNum) > num,JSON.stringify(this.state.curentfile) == "{}",preNum,preImgList,(this.state[sign]  + preNum),"==preNum=beforeUpload-befor")
            size = size ? size : 99999999
         if (type != "jpg" && type != "png" && type != "jpeg" && type != 'bmp') {
              message.warning("请上传JPG、PNG、JPEG、BMP格式图片")
              return reject(false)   
          }   else if (file.size / 1024 > size) {
                message.warning(`图片限制大小为${size}KB`)
              return reject(false) 
            }else if((1  + preNum) > num && JSON.stringify(this.state.curentfile) == "{}"){
              message.warning('最多上传' + num + '张图片哦！')
              return reject(false) 
          }else{
              if(this.state[sign]){
                  this.setState({
                      [sign]:this.state[sign] + 1
                  })
              }else{
                  let obj={}
                  obj[sign]=2
                  this.setState(obj)
              }
             
              // console.log(num,sign,this.state[sign],file,fileList,"===beforeUpload-after")
             return resolve(true);
          }   
         
      }) 
  }
  // 上传的返回值
  responseType(res) {return res.fileUrl}
  //上传成功之后改变state的值   
  onSuccess(sign,info,infoList) {
    const {value,onChange} =this.props
    this.state.initialValue[sign.split('productLogo')[1]].productLogo=[{uid:infoList.uid,
      id:info.id,
      name:infoList.name,
      url:info.fileUrl,
      thumbUrl:info.fileUrl}]
      onChange(this.state.initialValue) 
      this.props.productsOnReturn(this.state.initialValue)
      this.setState({
        curentfile:{}
      })  
  }
  handlePreview(sign,file){
    // console.log(this.refs,sign,file,"==handlePreview=file")
    this.setState({
      curentfile:file
    })
    this.refs[sign].handlePreview(file)
  }
  onRemove(sign,fileList){
         
           this.setState({
              [sign]:this.state[sign] - 1
          })
          const {value,onChange} =this.props
           
          this.state.initialValue[sign.split('productLogo')[1]].productLogo=[]

          value[sign.split('productLogo')[1]].productLogo=[]

          onChange(this.state.initialValue) 
          this.props.productsOnReturn(this.state.initialValue)
          console.log( value,this.state.initialValue,"==onRemoveonRemove=before")
  }
  onImgChange(sign,fileList){
    // console.log(sign,fileList,"=product=onChange=fileList")
  }
  addProducts(){  
      const {value,onChange} =this.props
      let data= {
       "productName":"","productDesc":"","productLogo":"",isNew:1
      }
      this.state.initialValue.push(data)
      onChange(value)
      this.props.productsOnReturn(this.state.initialValue)
    }
  closeFun(item,index,event){
    console.log(item,index,event,"==closeFun==item,index,event")
    const {value,onChange} =this.props
    if(item.isNew != undefined ){
        this.state.initialValue.splice(index,1)
    }else{
      this.state.initialValue[index].isDel=1
    }
    this.setState({
      initialValue:this.state.initialValue
    },function(){
      onChange(this.state.initialValue)
      this.props.productsOnReturn(this.state.initialValue)
    })
  }

  productInputChange(event,index,sign,t,g,h) {
    // console.log(event,index,sign,t,g,h,this.state.curentfile,'==productInputChange,event,index,sign,t,g,h')
    // if(index == 'productLogo'){
    //   // 是图片时候的处理
    //   const {value,onChange} =this.props
    //   this.state.initialValue[event][sign]=sign
    //   onChange(this.state.initialValue)
    // }else{
      const {value,onChange} =this.props
      this.state.initialValue[index][sign]=event.target.value
      onChange(this.state.initialValue)
      this.props.productsOnReturn(this.state.initialValue)
    // }
  
  }
  // renderProduct(){}
  render() {
    const {productList,onChange,value,} =this.props
    const stateValue =this.state.initialValue
    // const  value = [...this.props.value]
    console.log(value,stateValue,"==44=this.state.initialValue")
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
    return (
    <div  key='p' className="products-form">
                    <Button  style={{marginBottom:'10px'}}  onClick = {this.addProducts.bind(this)}   name='products'className="tag-edit-btn"><Icon type="plus"/>添加 </Button>
                    { stateValue  ?  stateValue.map((itemM,index)=>{
                        return (itemM.isDel == 0 || itemM.isNew) &&  <FormItem key={`FormItem${index}`} name={`productItem${index}`} {...fromFullItemLayoutArr[0]}  style={{
                          background: '#FAFAFA',
                          padding: '30px 0 0 20px',
                          border:'solid 1px #EAEAEA'
                      }}>
                             <div   key={`divItem${index}`}   name='imgs' className='productItem' >
                                <Icon  type="icon-quxiao-" className='iconClose' onClick={this.closeFun.bind(this,itemM,index)} />
                                 <FormItem {...fromFullItemLayoutArr[0]} >
                                 <Input label="产品名称" name={`productName${index}`} defaultValue={itemM.productName}
                                     onChange={event=>{this.productInputChange(event,index,'productName')}}
                                    rules={[
                                         {required: true, message: '请输入产品名称!',},
                                         { max:8, message: "最多输入8个字！" },
                                         {validator: customRules.spacialStr},
                                         {validator: customRules.required}]} />
                                 </FormItem>
                                 <FormItem  {...fromFullItemLayoutArr[0]} >
                                 <Input label="产品描述" name={`productDesc${index}`} defaultValue={itemM.productDesc}
                                     onChange={event=>{this.productInputChange(event,index,'productDesc')}}
                                     rules={[{required: true, message: '请输入产品描述!'},{ max: 25, message: "最多输入25个字！" },
                                     {validator: customRules.spacialStr},
                                     {validator: customRules.required}]} />
                                 </FormItem>
                                 <FormItem {...fromFullItemLayoutArr[0]} >
                                     <div label="产品logo"  name={`productLogo${index}`}  id={`productLogo${index}`} defaultValue={itemM.productLogo　|| []}  rules={[
                                         {required: true, message: '请上传产品logo!'}]}>
                                     {/* onChange={this.productInputChange.bind(this,index,'productLogo')} */}
                                     {/* onChange={this.onImgChange} */}
                                     <ImgUploadList  key={`productLogo${index}`} ref={`productLogo${index}`} type={2} defaultValue={itemM.productLogo|| []}
                                             handlePreview={this.handlePreview.bind(this,`productLogo${index}`)}
                                             onChange={this.onImgChange}
                                             beforeUpload={this.beforeUpload.bind(this,1,200,itemM.productLogo,`productLogo${index}`)}
                                             fileList={itemM.productLogo　|| []}
                                             btnText="点击上传"
                                             iconImg='plus'
                                             name={`productLogo${index}`}
                                             accept=".png,.jpg,.jpeg,.bmp"
                                             tipText=" 请上传jpg，png，jpeg，bmp格式图片，上传文件建议尺寸为120*120，大小不超过200KB"
                                             imgWidth="60px"
                                             imgNum={1}
                                             onRemove={this.onRemove.bind(this,`productLogo${index}`)}   onResponse={this.responseType} onSuccess={this.onSuccess.bind(this,`productLogo${index}`)}></ImgUploadList>
                                     </div>
                                    
                                 </FormItem>
                         </div>
                     </FormItem>
                     })
                     : null
        
               }
        </div>
        )
  }
}
