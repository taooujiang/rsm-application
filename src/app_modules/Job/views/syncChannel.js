/**
 * Created by Administrator on 2018/3/7.
 */
import React, {Component, PropTypes} from 'react'
import {
    Row,
    Col,
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
import {routerActions, push, replace} from 'react-router-redux'
import groupArray from 'group-array'
import ModalView,{ModalViewTitleProps} from 'app/components/Modal.view'
import WrapperComponent from 'app/decorators/WrapperComponent'
import BaseForm,{FormItem} from 'app/components/BaseForm'
import ClientAPI,{emitter} from 'app-utils/externalUtils'
import DictUtils from 'app/utils/DictUtils'

const Option = Select.Option
const {TextArea} = Input






class AddForm extends Component{
    loginChannel(channel){
        let item = DictUtils.getDictItemByValue("channel",channel)
        if(item){
            let itemPop = item.pop()
            global.invokeMethod('ShowPublicUrl',itemPop.keyURl)
        }
    }
    renderChannels(){
        let {channels} = this.props
        let Localchannels = window.localStorage.channels ? JSON.parse(window.localStorage.channels) : DictUtils.getDictByType("channel")
        //console.log(22222,33333,Localchannels)
        let channelList = [...channels.values()]
        //console.log("inside",channelList,"channels",channels)
        return Localchannels && Localchannels.map((it,idx)=>{
            if(it.id == 8 || it.id == 13 || it.id == 7) {
              return false
            }
            return(
                <Row gutter={12} key={idx} style={{lineHeight:"40px"}}>
                    <Col span={8}>
                        <FormItem style={{marginBottom:0}}>
                            <Checkbox name={`aa${it.id}`} >{DictUtils.getDictLabelByValue("channel",it.id)}</Checkbox>
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <div>{it.isLogin?"已登录":<a href="javascript:;" onClick={this.loginChannel.bind(this,it.id)}>未登录</a>}</div>
                    </Col>
                    <Col span={8}>
                            <div>{it.point >= 0 ?`剩余职位刷新点数：${it.point}`:""}</div>
                    </Col>
                </Row>
            )
        })
    }
    render() {
        const {
            handleSubmit,
            saveFormRef,
        } = this.props
        const formFullItemLayout = {
            labelCol: {
                span: 12
            },
            wrapperCol: {
                span: 12
            }
        };

        return (
            <BaseForm onSubmit={handleSubmit} ref={saveFormRef} layout="inline">
                <div>
                {this.renderChannels()}
                </div>
                <Row>
                    <Col span={4}>温馨提示：</Col>
                    <Col span={20}>1、刷新职位需要和对应的招聘渠道保持关联，如果未关联，请重新关联</Col>
                </Row>
                <Row>
                    <Col span={20} offset={4}>2、职位刷新成功后，将相应的扣除所在渠道的刷新点数，刷新失败，将不扣除刷新点数</Col>
                </Row>
            </BaseForm>
        )
    }
}

@WrapperComponent(ModalView)
export default class SyncChannel extends FormPage {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let {actions,router,dispatch,location:{state:{selected}},appConfig} = this.props;
        var allChannel=selected.reduce((prevValue,currentValue)=>{
            // console.log(prevValue.channelList,currentValue.channelList)
             return {channelList:prevValue.channelList.concat(currentValue.channelList)}
        })
        // console.log(allChannel)

        let params = {
            type:"job_channel_pointer",
            channels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
        }
        // let loginParams = {
        //   type:'isLogin',
        //   channels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
        // }
        let JsToPython = new ClientAPI().JsToPython
        // JsToPython(loginParams)
        JsToPython(params)

        // emitter.on("isLogin",function(item){
        //   let channels = DictUtils.getDictItemByValue("channel")
        //
        //   item.channels.map(it=>{
        //     it.id
        //   })
        //   dispatch(saveLoginStatus(item))
        // })

        // emitter.on("job_channel_pointer",function(item){
        //   //store.dispatch(saveChannelPoint(item))
        //   // console.log(JobReducer)
        // })
    }
    componentDidMount(){
      console.log("componentDidMount",this.props)
    }
    componentWillReceiveProps(nextProps){
      console.log(nextProps.appConfig.channels,"aaaaa",nextProps.reduce)
    }

    getJobIdsArray(){
        let {location:{state:{selected}}} = this.props
        var allChannel=selected.reduce((prevValue,currentValue)=>{
            return {channelList:prevValue.channelList.concat(currentValue.channelList)}
        })
        let dateListObj = groupArray(allChannel.channelList,'channel')
        let Jobids = new Array()

        for(var i in dateListObj){
              let obj = {}
              obj.channelId = i
              obj.ids = dateListObj[i].map((it)=>{
                  if(it.status == 1){return it.channelId}
              }).filter((it)=> it != undefined)
              Jobids.push(obj)
        }
        return Jobids
    }

    handleSubmit(values){
        let {actions,router,dispatch} = this.props

        let Jobids = this.getJobIdsArray()
        console.log(Jobids)

        /*name 为aa+ 渠道id  replace获取渠道Id 再将选中的push到新数组*/
        let theChoosen = []
        for(var i in values){
           if(values[i]){
               let item = i.replace("aa","")
               Jobids.map((it,idx)=>{
                 if(it.channelId == item){
                   theChoosen.push(it)
                 }
               })
           }
        }
         // console.log(Jobids)
         // console.log(theChoosen)
        let params = {
            type:"batch_job_sync",
            Jobids:theChoosen
        }

        let JsToPython = new ClientAPI().JsToPython
        JsToPython(params)
        // actions.backRoute(router)
        dispatch(routerActions.push("job/list/result"))
    }
    render() {
        let {appConfig:{channels},reduce} = this.props
        //console.log("channelsssss",reduce.channels)
        // console.log("syncChannel",this.props)
        return (
            <Spin tip="Loading..." spinning={false}>
                <AddForm handleSubmit={this.onSubmit}  saveFormRef={this.saveFormRef} channels={channels}>
                    <Button type="primary" htmlType="submit" onClick={this.onSubmit.bind(this)}>确认</Button>
                    <Button>取消</Button>
                </AddForm>
            </Spin>
        )
    }
}
