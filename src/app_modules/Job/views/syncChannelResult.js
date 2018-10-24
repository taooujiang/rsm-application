/**
 * Created by Administrator on 2018/3/7.
 */
import React, {Component, PropTypes} from 'react'
import {
    Row,
    Col,
    Card,
    Modal,
    Button,
    Input,
    Checkbox,
    Form,
    DatePicker,
    Layout,
    Spin,
    Rate,
    Select
} from 'antd'
import {FormPage} from 'app/components/Page'
import groupArray from 'group-array'
import ModalView,{ModalViewTitleProps} from 'app/components/Modal.view'
import WrapperComponent from 'app/decorators/WrapperComponent'
import BaseForm,{FormItem} from 'app/components/BaseForm'
import ClientAPI,{emitter} from 'app-utils/externalUtils'
import style from './JobStyles.less'
import DictUtils from 'app/utils/DictUtils'

function translateJobs(arr,id){
  let item =  arr.filter(it=>{
    return it.jobId == id
  })[0]
  return item ? item.jobTitle : ""
}

function translateFails(arr,items){
  return arr&&arr.map(it=>{
    return it.ids.map(item=>{
      return <ul><li>{translateJobs(items,item)}</li><li>{DictUtils.getDictLabelByValue("channel",it.channelId)}</li></ul>
    })
  })
}

@WrapperComponent(ModalView)
export default class syncChannelResult extends FormPage {
  renderResult(){
    let data = window.localStorage.channelSync
    let {items} = this.props
    // data = {}
    // data.status = true
    // data.message = [{'channelId': 10, 'ids': ['1974cccb22394ee18b2cec8263ebfcad','1974cccb22394ee18b2cec8263ebfcad']}, {'channelId': 5, 'ids': ['09ab05778887476cb013966ec4fb5b0c']}]
    if(!data || data.status ){
      return null
    }else{
       return (<Card title="刷新失败列表" className="syncResultBox">
                {translateFails(data.message,items)}
              </Card>)
    }
  }
  handleSubmit(values){
    let {actions,router} = this.props
    actions.backRoute(router)
  }
    render() {
        return (
            <BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef}>
              <h3 style={{marginBottom:15,paddingLeft:20}}>已完成刷新</h3>
                {this.renderResult()}
            </BaseForm>
        )
    }
}
