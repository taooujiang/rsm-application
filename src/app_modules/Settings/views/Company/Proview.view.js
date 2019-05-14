/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-01-17T17:32:29+08:00
 */
import {FormPage} from 'app/components/Page'
import FetchAPI from 'app/utils/FetchAPI'
import BaseForm from 'app/components/BaseForm'
import React, {Component, PropTypes} from 'react'
export default class ProviewView extends FormPage{
  state = {
    imgUrl:require('app/themes/qrcode.jpg')
  }
// 获取二维码图片
  componentWillMount(){
    //  获取传过来的参数
    // let {location:{state:{labels}}} = this.props
    // new FetchAPI().fetch(`${APP_SERVER}/option/optionListJson?optionCode=labels_code`,{
    //   method:'GET'
    // }).then((json) => {
    //     this.setState({
    //       imgUrl:json.imgUrl
    //     });
    // });

  }

//   点击确定时候的回调
  handleSubmit(){
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

  render() {
    // let {params:{resumeId}, reduce:{spins:{formSpin}},location:{state:{item}}} = this.props;
    return (<img src={imgUrl} className='recodeJpg' />) 
    //  <BaseForm footer={null}  onSubmit={this.handleSubmit} ref={this.saveFormRef} className="tag-form">
         
      // </BaseForm>
  
  }
}
