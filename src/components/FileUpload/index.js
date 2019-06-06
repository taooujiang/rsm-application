import React,{Component } from 'react'
import {
    Icon,
    Button,
    Upload,
    message,
     Modal
} from 'antd'

import PropTypes from 'prop-types'

export default class FileUpload extends Component{
    state = { fileList:[] , disabled:false }
    handleChange(info){
        let fileList = info.fileList
        fileList = fileList.slice(-1)
        this.setState({ fileList })
        // if(fileList.length > 0){
        //   this.setState({ disabled:true })
        // }else{
        //   this.setState({ disabled:false })
        // }


        if(info.file.status === "done"){
            // this.props.onChange(info.file.response.id)
            this.props.onChange(this.props.onResponse(info.file.response))
            this.props.onSuccess(info,this)
            message.success(`${info.file.name}文件上传成功！`);
        }else if(info.file.status === 'error'){
            message.error(`${info.file.name}文件上传失败!`);
        }
    }

    handleRemove(file){
      if(file.status === "removed"){
        this.props.onChange(undefined)
      }
    }

    render(){
        let {uploadType,action,text,accept,beforeUpload}=this.props
        return (
            <Upload name="file" accept={accept} disabled={this.state.disabled} beforeUpload={beforeUpload} action={action+uploadType} withCredentials={true} onRemove={this.handleRemove.bind(this)} onChange={this.handleChange.bind(this)} fileList={this.state.fileList}>
                <Button disabled={this.state.disabled}><Icon type="link"/>{text || "添加附件"}</Button>
            </Upload>
        )
    }
}


export class ImgUpload extends FileUpload{
  constructor(props){
      super(props)
      this.state = {
          loading:false,
          imgUrl:this.props.imgUrl,
          previewVisible: false,
          previewImage: '',
      }
      this.props.onChange(this.props.imgUrl)
  }
  componentWillReceiveProps = (nextProps) => {
    if(nextProps.imgUrl!=this.props.imgUrl){
      this.setState({imgUrl:nextProps.imgUrl})
      this.props.onChange(nextProps.imgUrl)
    }
  }

  render(){
      let { type ,beforeUpload,btnText,accept,tipText,imgWidth ,disabled} = this.props
      let {imgUrl} = this.state
      const uploadButton = (
          <Button><Icon type="link"/>{btnText}</Button>
      )
      return(
        <Upload name="file"
          accept={accept}
          showUploadList={false} 
          beforeUpload={beforeUpload} 
          disabled={disabled} 
          action={"/fileUpload/file/upload?type=" + type} 
          withCredentials={true} 
          onChange={this.handleChange.bind(this)}>
          {imgUrl ? <img src={imgUrl} width={imgWidth} alt="" /> : uploadButton}
          {tipText ? <p>{tipText}</p> : null}
        </Upload>
      )
  }
}
export class ImgUploadList extends FileUpload{
  constructor(props){
      super(props)
      this.state = {
          loading:false,
          curentfile:{},
          fileList:props.fileList || []
      }
      console.log(this.props,"==this.props")
      this.props.onChange(this.props.fileList)
  }
  componentWillReceiveProps = (nextProps) => {
    if(JSON.stringify(nextProps.fileList) != JSON.stringify(this.props.fileList)){
      this.setState({fileList:nextProps.fileList},function(){
        this.props.onChange(nextProps.fileList)
        // this.props.onChange(this.props.onResponse(nextProps.fileList))
      })
    }
  }

  handleChange(info){
        let fileList = info.fileList
        let imgNum=this.props.imgNum
        fileList = fileList.map((file) => {
          if (file.response) {
            file.url = file.response.fileUrl;
          }
          return file;
        })
        fileList = fileList.filter(item=>item.uid != this.state.curentfile.uid)
        this.setState({ fileList: [...fileList] },function(){
          this.props.onChange(fileList)
          // console.log(this.props,'this.props.onResponse')
          // this.props.onChange(this.props.onResponse(this.props.fileList))
        });
        
    }
    handlePreview(file){
      this.setState({
        curentfile:file
      })
      this.refs['uploadListBtn'].click()
      
    }
  render(){
      let { type,imgNum,beforeUpload,handlePreview,btnText,accept,tipText,imgWidth ,disabled,iconImg,onRemove,onSuccess,onProgress,listType,locale,name} = this.props
      let {fileList} = this.state
      console.log(fileList,('123'))
      
      const uploadButton1 = (
          <Button><Icon type={iconImg}/>{btnText}</Button>
      )
      // fileList = fileList == '' ? [] : (fileList instanceof Array ? fileList : [fileList]) 
      const uploadButton2 = (
        // <div  ref='uploadListBtn' style={{display: fileList && fileList.length >= imgNum ? 'none' :'block'}}>
         <div  ref='uploadListBtn' >
          <Icon type="plus" />
          <div className="ant-upload-text">上传</div>
        </div>
      );

      const uploadButton3 = (
        <span  ref='uploadListBtn' style={{'visibility':'hidden'}}></span>
      );
      
      const addEle = document.querySelector(`#${name} .ant-upload-select-picture-card`);
      if (addEle) {
        addEle.style.display = fileList && fileList.length >= imgNum ? "none" : "table";
      }

      return(
        <div className="clearfix">
          <Upload name="file"  accept={accept}  
            onPreview={handlePreview}  listType={listType}   onSuccess={onSuccess}  onRemove={onRemove}  fileList= {fileList} beforeUpload={beforeUpload} disabled={disabled} action={"/fileUpload/file/upload?type=" + type} withCredentials={true} onChange={this.handleChange.bind(this)} locale={locale}>
             {uploadButton2}
          </Upload>
          {tipText ? <span style={imgNum === 1  && fileList.length !== 0 ? {height: '110px',display: 'inline-block',lineHeight: '15'}:{display:'inline-block',width: '100%'}}>{tipText}</span> : null}
      </div>
       
      )
  }
}

FileUpload.propTypes = {
    onSuccess: PropTypes.func,
    onResponse: PropTypes.func,
    type:PropTypes.integer,
}
FileUpload.defaultProps = {
    onSuccess: function(){},
    onResponse:function(){},
    type:1,
    action:`/fileUpload/file/upload?type=`,
    accept:"",
    beforeUpload:()=>{}
}

ImgUpload.propTypes = {
    onSuccess: PropTypes.func,
    onResponse: PropTypes.func,
    type:PropTypes.integer,
}
ImgUpload.defaultProps = {
    onSuccess: function(){},
    onResponse:function(){},
    type:2,
    btnText:"上传头像",
    iconImg:'link',
    beforeUpload:()=>{},
    disabled:false,
}
ImgUploadList.propTypes = {
  onSuccess: PropTypes.func,
  onResponse: PropTypes.func,
  type:PropTypes.integer,
  imgNum:PropTypes.integer,
}
ImgUploadList.defaultProps = {
  onSuccess: function(){},
  onResponse:function(){},
  type:2,
  btnText:"上传头像",
  iconImg:'link',
  beforeUpload:()=>{},
  disabled:false,
  imgNum:1,
  listType:"picture-card",
  locale: {previewFile: "更新文件",
  removeFile: "删除文件",
  uploadError: "上传错误",
  uploading: "文件上传中"}
}