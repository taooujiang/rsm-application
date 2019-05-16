import React,{Component } from 'react'
import {
    Icon,
    Button,
    Upload,
    message
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
            imgUrl:this.props.imgUrl
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
        let { type ,beforeUpload,btnText,accept,tipText,imgWidth ,disabled,iconImg} = this.props
        let {imgUrl} = this.state
        const uploadButton = (
            <Button><Icon type={iconImg}/>{btnText}</Button>
        )
        return(
          <Upload name="file"
            accept={accept}  className= 'upload-list-inline' listType='text'
             beforeUpload={beforeUpload} disabled={disabled} action={"/fileUpload/file/upload?type=" + type} withCredentials={true} onChange={this.handleChange.bind(this)}>
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
          imgUrlArr:this.props.imgUrl
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
      const fileList = [
          {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
          {
            uid: '-2',
            name: 'yyy.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ];
      let { type ,beforeUpload,btnText,accept,tipText,imgWidth ,disabled,iconImg} = this.props
      let {imgUrl} = this.state
      const uploadButton = (
          <Button><Icon type={iconImg}/>{btnText}</Button>
      )
      return(
        <Upload name="file"
          accept={accept}  className= 'upload-list-inline'
          listType="picture" fileList= {fileList} beforeUpload={beforeUpload} disabled={disabled} action={"/fileUpload/file/upload?type=" + type} withCredentials={true} onChange={this.handleChange.bind(this)}>
          {imgUrl ? <img src={imgUrl} width={imgWidth} alt="" /> : uploadButton}
          {tipText ? <p>{tipText}</p> : null}
        </Upload>
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
}
ImgUploadList.defaultProps = {
  onSuccess: function(){},
  onResponse:function(){},
  type:2,
  btnText:"上传头像",
  iconImg:'link',
  beforeUpload:()=>{},
  disabled:false,
}