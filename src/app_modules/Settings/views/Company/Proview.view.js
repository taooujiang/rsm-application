/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-17T17:32:29+08:00
 */
import {FormPage} from 'app/components/Page'
import Api from '../../api'
import BaseForm from 'app/components/BaseForm'
import React, {Component, PropTypes} from 'react'
export default class ProviewView extends FormPage{
  state = {
    imgUrl:require('app/themes/qrcode.jpg')
  }
// 获取二维码图片
  componentWillMount(){
    // new Api().fetchCompanyCardQrcode({
    //   page:''
    // }).then(res=>{
    //   // this.setState({
    //   //   imgUrl:res.imgUrl
    //   // });
    // }).catch(error=>{
    // })
  }
  render() {
    return (<div style={{height:'380px'}}>
      <img src={this.state.imgUrl} className='recodeJpg' />
      <p style={{textAlign:'center',fontSize:'15px'}}><span style={{color:'red',}}>温馨提示：</span>使用微信扫码查看企业名片效果</p>
      </div>) 
  }
}
