import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import BaseForm, { FormItem, customRules } from 'components/BaseForm'
import { FormPage } from 'app/components/Page'
import { Button, Card, Input, message,Select,Icon,Tag,Spin} from 'antd'
import { ImgUpload,ImgUploadList } from 'app/components/FileUpload'
import TalentLabel from './label.view'
import ProductsView from './Products.view'
import DictUtils from 'app/utils/DictUtils'
const { TextArea } = Input;
const InputGroup = Input.Group;
import API from '../../api'
import SmartLink from 'app/components/SmartLink'
@NestedComponent()
export default class CardShare extends FormPage {
    constructor(props, ...rest) {
        super(props, ...rest); 
        this.state = { 
            beforeUpload:true,
            btnState:props.reduce.list  && props.reduce.list[0].status ?  '' : 'edit',
            currentfile:{},
            formData:{},
            initData:props.reduce.list ? props.reduce.list[0] :{}
        }
    };
    // 获取初始值再次渲染界面
    componentDidMount() {
        const {actions} = this.props
        actions.companyCardListAction() 
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.props,nextProps,"===nextProps")
        if(JSON.stringify(nextProps.reduce.list) != JSON.stringify(this.props.reduce.list) ){
            
            this.setState({
                initData:nextProps.reduce.list[0],
                btnState:nextProps.reduce.list  && nextProps.reduce.list[0].status ?  '' : 'edit'
            })
            this.form.setFieldsValue({
               welfares:nextProps.reduce.list[0].welfares,
               productList:nextProps.reduce.list[0].productList
            })
            // if(nextProps.reduce.list[0].productList && nextProps.reduce.list[0].productList.length > 0){
            //     console.log(nextProps.reduce.list[0].productList,"===nextProps.reduce.list[0].productList")
            //     nextProps.reduce.list[0].productList.map((item,index)=>{
                   
            //         this.form.setFieldsValue({
            //            [`productLogo${index}`]:item.productLogo[0] ? item.productLogo.url : ''
            //          })
            //          console.log( this.form,`productLogo${index}`,item.productLogo,"===`productLogo${index}`,item.productLogo")
            //     })
            // }
        }

      }
    //在上传之前实现上传验证
    beforeUpload(num,size,preImgList,sign,file,fileList){
        console.log(this.state.initData,this.form,"--responseType-")
        return new Promise((resolve, reject) => {
            let signText = sign.split('S')[0]
             console.log(this.state.initData,this.form,"--responseType-444")
            let type = file.type.split("/").pop().toLocaleLowerCase()
            let preNum = preImgList ?  preImgList.length  : 0
            this.state[sign] = this.state[sign] ? this.state[sign] : 1
            size = size ? size : 99999999
             if (type != "jpg" && type != "png" && type != "jpeg" && type != 'bmp') {
                message.warning("请上传JPG、PNG、JPEG、BMP格式图片")
                return reject(false)   
            }else if (file.size / 1024 > size) {
                if(size == 2048){
                    message.warning(`图片限制最大为2MB`)
                }else{
                    message.warning(`图片限制最大为${size}KB`)
                }
                return reject(false) 
            }else if((1  + preNum) > num && JSON.stringify(this.state.currentfile) == "{}"){
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
                this.setState({
                    beforeUpload:false
                })
               return resolve(true);
            }   

        }) 
    }
    // 上传的返回值
    responseType(res) {return res.fileUrl}
    //上传成功之后改变state的值   
    onSuccess(sign,info,infoList) {
        console.log("onSuccess",info)
        const {actions} =this.props
        // actions.companyCardImgListAction(sign,info,infoList,{...this.state.currentfile})
        let preData = this.state.initData[sign] ? [...this.state.initData[sign]]  : []
        console.log(preData,"==onSuccess==preDatam")
        let resetIndex= preData.findIndex((value, index, arr) => {
            return this.state.currentfile.uid == value.uid
        }) + 1
        let newIndex=preData.length + 1
        let newData = this.state.currentfile &&  this.state.currentfile.url ? 
          [...preData.filter(item=>this.state.currentfile.uid != item.uid),{uid:infoList.uid,
            id:info.id,
            name:infoList.name,
            url:info.fileUrl,
            thumbUrl:info.fileUrl,
            imageUrl:info.fileUrl,
            imageSort:resetIndex}]
         : [
          ...preData,
          {uid:infoList.uid,
          id:info.id,
          name:infoList.name,
          url:info.fileUrl,
          thumbUrl:info.fileUrl,
          imageUrl:info.fileUrl,
          imageSort:newIndex}
         ]
        this.form.setFieldsValue({
            [sign]:newData.sort((a,b)=> a.imageSort - b.imageSort)
        }) 
        this.setState({
            initData:{
                    ...this.state.initData,
                    [sign]:newData.sort((a,b)=> a.imageSort - b.imageSort)
            }  
        },function(){
            this.setState({
                currentfile:{},
                beforeUpload:true
            })
        })
    }
    onProgress(e,file) {
        console.log(e,file,"onProgress")
    }
    handlePreview(sign,file){
        this.setState({
          currentfile:file
        })
        this.refs[sign].handlePreview(file)
    }
    onRemove(sign,fileList){
                    const {actions} =this.props
                    // actions.companyCardImgListRemoveAction(sign.split('S')[0],fileList) 
                    let signText = sign.split('S')[0]
                    const dataArr = [...this.state.initData[signText]].filter(item=>item.uid !=  fileList.uid).map((item,index)=>{
                        item.imageSort=index + 1
                        return item
                      })
                    this.setState({
                        [sign]:this.state[sign] - 1,
                        initData:{
                                ...this.state.initData,
                                [signText]:dataArr
                            }
                    })
                    this.form.setFieldsValue({
                        [signText]:dataArr
                    })
                   
    }
    onChange(sign,fileList){ 
        const {actions} =this.props
    }
    // 预览和编辑
    onProview(sign,e){
        let { actions, router } = this.props;
        sign == 'preview' &&  actions.SettingCardShareRouteAction(sign)
        this.setState({
            btnState: sign
         })
    }
    // 渲染dics的select
    renderSelectOption(data,idx){
        return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
    }
    renderCompanyOption(data,idx){
        return (<Select.Option value={data.id} key={idx}>{data.addressAll}</Select.Option>)
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    productsOnReturn(result){
        console.log(result, this.form,"=productsOnReturn=result")
        this.setState({
            initData:{
                    ...this.state.initData,
                    productList:result
                }
        })
       
        console.log(this.state.initData,"productsOnReturn")
    }
    // 提交修改数据
    handleSubmit(values,sign){
        console.log(values,this.state.initData,this.props,'----handleSubmit')
        var rexp=/((http|ftp|https):\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/
        if(values.website.trim().length > 0){
            if(!rexp.test(values.website)){
                 message.warning('请输入正确的网址！')
            }else if(!this.state.beforeUpload){
                message.warning('图片正在上传中！')
            } else{
                this.setState({
                    btnState: sign,
                    formData:JSON.parse(JSON.stringify(values))
                },function(){
                    console.log(this.state.formData,'----this.state.formData')
                    const {router,actions,location} =this.props
                    const {introduce, company,trade,abbreviation,scale,website,id,nature,addressId,address,
                        productList,imageList,companyLogo,welfares} =this.state.formData
                        const prcs = [...productList].map((item,index)=>{
                            item['isSort']=index + 1
                            if(item.productLogo && item.productLogo[0]){
                                item.productLogo=item.productLogo[0].url
                              
                            }else{
                                item.productLogo=''
                            }
                            return item
                        })
        
                        actions.companyCardListSaveAction({
                            welfares,
                            companyLogo:(companyLogo && companyLogo.length>0) ? [...companyLogo][0].url : '',
                            imageList:imageList ? [...imageList].map(item=>{
                            return  {imageUrl:item.imageUrl,
                                    imageSort:item.imageSort}
                                
                            }) : [],
                            productList:prcs || [],
                            introduce,company,trade,abbreviation,scale,website,id,nature,addressId,address
                        })
                })
            }
        }else{
            this.setState({
                btnState: sign,
                formData:JSON.parse(JSON.stringify(values))
            },function(){
                console.log(this.state.formData,'----this.state.formData')
                const {router,actions,location} =this.props
                const {introduce, company,trade,abbreviation,scale,website,id,nature,addressId,address,
                    productList,imageList,companyLogo,welfares} =this.state.formData
                    const prcs = [...productList].map((item,index)=>{
                        if(item.productLogo && item.productLogo[0]){
                            item.productLogo=item.productLogo[0].url
                        }else{
                            item.productLogo=''
                        }
                        return item
                    })
    
                    actions.companyCardListSaveAction({
                        welfares,
                        companyLogo:(companyLogo && companyLogo.length>0) ? [...companyLogo][0].url : '',
                        imageList:imageList ? [...imageList].map(item=>{
                        return  {imageUrl:item.imageUrl,
                                imageSort:item.imageSort}
                            
                        }) : [],
                        productList:prcs || [],
                        introduce,company,trade,abbreviation,scale,website,id,nature,addressId,address
                    })
            })
    
        }
       
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
        const {onSubmit,actions,reduce:{list}} =this.props
        const {
            abbreviation,
            address,
            addressId,
            company,
            id,
            companyLogo,
            imageList,
            productList,
            introduce,
            nature,
            scale,
            trade,
            website,
            welfares
        } = this.state.initData
        console.log(this.state.initData,"==this.state.initData=")
        //TODO：临时解决暂时不能多层数据结构偶尔不出来图片的情况
        let productListArray=[]
        if(productList){
            productListArray = [...productList].map(item=>{
                if(item.productLogo && item.productLogo[0]){
                    const {name,thumbUrl,uid,url,...otherprops}=item.productLogo ? item.productLogo[0] : {}
                    const {productLogo,...otherpropsObj}=item
                    return{
                        ...otherpropsObj,
                        productLogo:[{name,thumbUrl,uid,url,...otherprops}]
                    }
                }else{
                  
                    const {productLogo,...otherpropsObj}=item
                    return{
                        ...otherpropsObj,
                        productLogo:[{name:'img',thumbUrl:'',uid:'',url:''}]
                    }

                }
                
            })
        } 
        return (
            <BaseForm  style={{position:'relative',padding:' 0 0 50px 0'}} onSubmit={onSubmit} ref={this.saveFormRef}>
                {
                    this.state.btnState == 'edit' ? 
                      null
                    : <div className='maskModel'></div>
                }
                 <FormItem key='id'  className="row-hidden">
                    <Input  name="id" type="hidden" defaultValue={id || ''} />
                </FormItem>
                <FormItem  key='company' {...fromFullItemLayoutArr[1]}>
                    <Input  label="公司名称" name="company" defaultValue={company || ''}
                        rules={[{ max: 15, message: "最多输入15个字！" },
                           {required: true, message: '请输入公司名称!'},
                           {validator: customRules.spacialStr},
                           {validator: customRules.required}]} />
                </FormItem>
                <FormItem key='abbreviation'  {...fromFullItemLayoutArr[1]}  >
                    <Input label="公司简称" name="abbreviation" defaultValue={abbreviation || ''}
                        rules={[{ max: 6, message: "最多输入6个字！" },
                        {required: true, message: '请输入公司简称!'},
                        {validator: customRules.spacialStr},
                        {validator: customRules.required}]} />
                </FormItem>
                <FormItem key='nature' {...fromFullItemLayoutArr[1]}>
                    <Select name="nature" label="公司性质" placeholder="请选择" 
                    fetch={DictUtils.getDictByType("companyproperty")} 
                    defaultValue={nature || ''} 
                    renderItem={this.renderSelectOption}
                    rules={[{required: true, message: '请选择公司性质!'}]} />
                </FormItem>
                <FormItem key='trade'  {...fromFullItemLayoutArr[1]}  >
                    <Select name="trade" label="行业" placeholder="请选择"  
                    fetch={DictUtils.getDictByType("industry")} 
                    renderItem={this.renderSelectOption}
                    defaultValue={trade || ''} 
                    rules={[{required: true, message: '请选择行业!'}]}  />
                </FormItem>
                <FormItem key='scale' {...fromFullItemLayoutArr[1]} >
                    <Select name="scale" label="公司规模" placeholder="请选择"  
                    fetch={DictUtils.getDictByType("scale")} 
                    renderItem={this.renderSelectOption} 
                    defaultValue={scale || ''} 
                    rules={[{required: true, message: '请选择公司规模!'}]}/>
                </FormItem>
                <FormItem key='website' {...fromFullItemLayoutArr[1]}  >
                    <Input label="公司网址" name="website" defaultValue={website   || ''}
                            rules={[{validator: customRules.urlRule}]} />
                </FormItem>
                <FormItem  key='addressId'  id='body' {...fromFullItemLayoutArr[0]}   >
                    <Select  name="addressId" label="公司地址" placeholder="选择地址"
                     fetch={`${APP_SERVER}/company/listSelectJson`} renderItem={this.renderCompanyOption}
                     defaultValue={addressId || ''}  
                     dropdownStyle={{top:'0',position:'absolute'}}
                    rules={[{required: true, message: '请选择公司维护的地址!'}]} />
                </FormItem>
                {/* <FormItem key='address'  {...fromFullItemLayoutArr[0]}>
                    <TextArea  label="" name="address" rows={4} defaultValue={address || ''} />
                </FormItem> */}
                <FormItem label="公司LOGO"  key='companyLogo'   {...fromFullItemLayoutArr[0]} >
                    <div  name='companyLogo' key='companyLogo'  label="公司logo"
                               rules={[{required: true, message: '请上传公司LOGO !'}]} 
                                defaultValue={companyLogo || []}  id={'companeyLogo'}>
                        <ImgUploadList  name='companyLogo'  ref='companyLogo' type={2}  
                                defaultValue={companyLogo || []} 
                                beforeUpload={this.beforeUpload.bind(this,1,500,companyLogo,'companyLogoSign')}
                                fileList={companyLogo || []}
                                btnText="点击上传"
                                iconImg='plus'
                                accept=".png,.jpg,.jpeg,.bmp"
                                tipText="请上传jpg，png，jpeg，bmp格式图片，上传文件建议尺寸为300*300，大小不超过500KB"
                                imgWidth="60px"
                                imgNum={1}
                                handlePreview={this.handlePreview.bind(this,'companyLogo')}
                                onRemove={this.onRemove.bind(this,'companyLogoSign')} onChange={this.onChange.bind(this,'companyLogo')}  onResponse={this.responseType} onSuccess={this.onSuccess.bind(this,'companyLogo')}></ImgUploadList>
                    </div>
                </FormItem>
                <FormItem  label="公司福利"  key='welfares' {...fromFullItemLayoutArr[0]}>
                    {/* <div   key='welfares'  name='welfares' className="tags"
                                defaultValue={welfares || []}    
                                rules={[{required: true, message: '请填写公司福利!'}]}  > */}
                            <TalentLabel name='welfares' label="公司福利" defaultValue={welfares || []}  
                                rules={[{required: true, message: '请填写公司福利!'}]} 
                                actions={actions} tags={welfares || []} optionCode="labels_code"></TalentLabel>
                    {/* </div> */}
                </FormItem>
                <FormItem key='introduce' {...fromFullItemLayoutArr[0]}>
                    <TextArea key='introduce' label="公司介绍" name="introduce" rows={4} defaultValue={introduce || ''}
                        rules={[{required: true, message: '请填写公司介绍!'},{validator: customRules.required}, ]} />
                </FormItem>
                
                <FormItem label="公司产品" key='productList'  {...fromFullItemLayoutArr[0]}>
                {/* rules={[{required: true, message: '请填写公司产品!'}]}  */}
                    <ProductsView name="productList" productsOnReturn={this.productsOnReturn.bind(this)}  productList={productListArray} defaultValue={productList || []}   /> 
                    {/* <div   rules={[{required: true, message: '请填写公司产品!'}]} defaultValue={productList || []}    name='productList'>
                       <Input name="productList" type="hidden" defaultValue={productList || []} /> 
                        <ProductsView name="productList" productList={productListArray} defaultValue={productList || []} /> 
                     </div>  */}
                 </FormItem>
                 <FormItem key='imageList'   {...fromFullItemLayoutArr[0]} >
                     <div    defaultValue={imageList || [] } name='imageList' label="公司图集" id="imageList"  key='imageList'  className="imageList" >
                     <ImgUploadList   ref='imageList'  key='imageList' label="公司图集" name="imageList" type={2} 
                                    handlePreview={this.handlePreview.bind(this,'imageList')}
                                    beforeUpload={this.beforeUpload.bind(this,8,2048,imageList,'imageListSign')}
                                    fileList={imageList}
                                    btnText="点击上传"
                                    iconImg='plus'
                                    accept=".png,.jpg,.jpeg,.bmp"
                                    tipText="请上传jpg，png，jpeg，bmp格式图片，上传文件建议尺寸为800*500，大小不超过2MB"
                                    imgWidth="60px"
                                    imgNum={5}
                                    onRemove={this.onRemove.bind(this,'imageListSign')}  onChange={this.onChange.bind(this)}  onResponse={this.responseType} onSuccess={this.onSuccess.bind(this,'imageList')}
                                    onProgress={this.onProgress.bind(this)}></ImgUploadList>
                    </div>
                </FormItem>
      
          </BaseForm>   
        )
    }
    render() {
        // console.log(this.props,"=render=school-form-view")
        const {reduce:{spins:{formSpin}}} = this.props;
        return (
            <Spin tip="Loading..." spinning={!!formSpin}>
                <Card className="school-form-view" title={<div><h3 className="card-title">企业名片设置</h3> <span className='card-subtitle'>用于校招小程序，让候选人更加了解公司信息</span></div>} extra={this.renderToolbar()}	>
                {this.renderForm()}
                </Card>
            </Spin>
        );
    }
}


