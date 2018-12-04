
/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-03-13T18:48:26+08:00
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
  Radio,
  Rate,
  Select
} from 'antd'
import {FormPage} from 'app/components/Page'
import BaseForm,{FormItem,customRules} from 'app/components/BaseForm'
import DictUtils from 'app/utils/DictUtils'
import moment from 'moment'
import styles from './styles.less'

const Option = Select.Option
const RadioGroup = Radio.Group
const {TextArea} = Input

/*面试打分 1 选择型  2 打分型 3 问答型*/
class FeedbackType extends Component{
  constructor(props){
    super(props)
    this.state = {
      questionAnswerDtoList:props.dataSource
    }
  }
  componentWillReceiveProps(nextProps){
    let {dataSource} = nextProps
    if(JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.props.dataSource)){
      this.setState({
        questionAnswerDtoList:dataSource
      });
    }
  }

  handleRadioChange(it,e){
    let {questionAnswerDtoList} = this.state
    questionAnswerDtoList.forEach(item=>{
      if(item.id == it.id){
        item.answer = e.target.value
      }
    })
    this.change(questionAnswerDtoList)
  }
  handleRateChange(it,val){
    let {questionAnswerDtoList} = this.state
    questionAnswerDtoList.forEach(item=>{
      if(item.id == it.id){
        item.answer = val
      }
    })
    this.change(questionAnswerDtoList)
  }
  handleInputChange(it,e){
    let {questionAnswerDtoList} = this.state
    questionAnswerDtoList.forEach(item=>{
      if(item.id == it.id){
        item.answer = e.target.value
      }
    })
    this.change(questionAnswerDtoList)
  }

  change(questionAnswerDtoList){
    let {whileChange} = this.props
    whileChange(questionAnswerDtoList)
  }

  renderWhichType(){
    let {type,dataSource} = this.props
     return dataSource.map((it,idx)=>{
       console.log(it)
       if(type == 1){
         return (
           <li className="question-item">
              <div className="title">{it.question}</div>
              <RadioGroup options={it.option.map(it=>{return {value:it.option,label:it.option}})} defaultValue={it.answer} onChange={this.handleRadioChange.bind(this,it)}/>
           </li>
         )
       }
       if(type == 2){
         return (
           <li className="question-item">
              <div className="title">{it.question}</div>
              <Rate defaultValue={it.answer} onChange={this.handleRateChange.bind(this,it)}/>
           </li>
         )
       }
       if(type == 3){
         return (
           <li className="question-item">
              <div className="title">{it.question}</div>
              <TextArea defaultValue={it.answer} onChange={this.handleInputChange.bind(this,it)}></TextArea>
           </li>
         )
       }
     })
  }

  render(){
    let {dataSource} = this.props
    return dataSource.length ? <div className="question-box">
        <label>面试反馈表</label>
          <ol className="question-info">
            {this.renderWhichType()}
          </ol>
    </div> : null
  }
}
FeedbackType.defaultProps = {
  dataSource:[]
}

class FeedbackForm extends Component{
    constructor(props){
      super(props)
      this.state = {
        obj:{},
        interviewer:props.interviewer,
      }
    }
    componentDidMount(){
      let {interviewer,info} = this.props
      this.setObjFn(info,interviewer)
    }
    componentWillReceiveProps(nextProps){
      if(JSON.stringify(nextProps.info) !== JSON.stringify(this.props.info)){
        let {interviewer,info} = nextProps
        //console.log(info)
        this.setObjFn(info,interviewer)
      }
    }
    renderInterviewerOption(data,idx){
        return (<Select.Option value={data.interviewerId} key={idx}>{data.interviewer}</Select.Option>)
    }
    handleChange(value){
      let {info} = this.props
      this.setObjFn(info,value)
    }
    setObjFn(array,value){
      let {interviewer} = this.state
       let json = array && array.filter((it,idx)=>{
          return it.interviewerId == value
        })[0]
        //console.log(json,interviewer,json || array[0],value)
      this.setState({
        obj: json || array[0] || {},
        interviewer: interviewer || ( array[0] ? array[0].interviewerId : "" )
      })
      if(array[0]){
        this.formSetFields(json ? json.questionAnswerDtoList : array[0].questionAnswerDtoList)
      }
    }

    renderRadioData(){
      let arr = DictUtils.getDictByType("feedbackState")
      return arr && arr.map((it,idx)=>{
        return  {
          label : it.keyName,
          value : it.keyValue,
          disabled : false
        }
      })
    }
    changeTypeVal(dtoList){
      let {obj} = this.state
      obj.questionAnswerDtoList = dtoList
      this.setState({
        obj:obj
      })
      this.formSetFields(dtoList)
    }
    formSetFields(questionAnswerDtoList){
      console.log(this.props)
      let {formRefs} = this.props
      let questionList = questionAnswerDtoList.map(it=>{return {id:it.id,answer:it.answer}})
      if(formRefs){
        formRefs.setFieldsValue({"questionAnswerDtoList":questionList})
      }
    }

  render() {
    const {
      form,
      handleSubmit,
      children,
      saveFormRef,
      info,
      planId,
    } = this.props
    let {obj} = this.state
    // console.log(obj,interviewer)
    return (
      <BaseForm onSubmit={handleSubmit} ref={saveFormRef}>
        <FormItem>
          <Input type="hidden" name="interviewPlanId" defaultValue={planId}/>
        </FormItem>
        <FormItem>
          <Input type="hidden" name="isFeedback" defaultValue={obj.isFeedback}/>
        </FormItem>
        <FormItem>
          <Input type="hidden"  name="templateId" defaultValue={obj.templateId}/>
        </FormItem>
        <FormItem>
          <Input type="hidden"  name="id" defaultValue={obj.id}/>
        </FormItem>
        <FormItem>
          <Input type="hidden"  name="questionAnswerDtoList" defaultValue={obj.questionAnswerDtoList}/>
        </FormItem>
        <FormItem>
          <Select label="面试官" name="interviewerId" defaultValue={obj.interviewer?obj.interviewer:obj.interviewerId} fetch={info} renderItem={this.renderInterviewerOption} onChange={this.handleChange.bind(this)} rules={[{required: true, message: "面试官不可为空"},{validator:customRules.required}]}></Select>
        </FormItem>
        <FeedbackType dataSource={obj.questionAnswerDtoList} type={obj.type} whileChange={this.changeTypeVal.bind(this)}/>
        <FormItem>
          <TextArea label="综合评价" name="feedback" readOnly={obj.isFeedback == 1 } defaultValue={obj.feedback} rules={[{required: true, message: "反馈信息不可为空"},{validator:customRules.required},{max:200,message:"反馈信息最多200个字符"}]}  help="请及时提交面试反馈信息，且务必做到准确评价"/>
        </FormItem>
        <FormItem>
          <RadioGroup label="为候选人打分" name="feedbackState" defaultValue={obj.feedbackStateStr} disabled={obj.isFeedback == 1 } help="请为候选人打分，您的分数将与其他面试官的评分一起进行评估" options={this.renderRadioData()} rules={[{required: true, message: "为候选人打分不可为空"}]}/>
        </FormItem>
      </BaseForm>
    )
  }
}

export default class FeedbackFormView extends FormPage{
  //请求远程数据接口
  componentWillMount() {
    let {actions,params:{resumeId},location:{state:{planId}}} = this.props;
    actions.getFeedBackAction({interviewPlanId:planId})
  }
  //处理表格提交后动作
  handleSubmit(values){
    let {actions,router,location} = this.props;
    console.log(values)
    // if(values.isFeedback == 1){
    //   actions.backRoute(router)
    // }else{
    //   actions.feedBackSaveAction(values).then(()=>{
    //     setTimeout(()=>{
    //       actions.backRouteReload(router,location)
    //     },2000)
    //   })
    // }
  }
  render() {
    let {params, reduce:{feedBack},location:{state:{interviewer,planId}}} = this.props;
    return (
      <Spin tip="Loading..." spinning={false}>
        <FeedbackForm onSubmit={this.handleSubmit} formRefs={this.form} saveFormRef={this.saveFormRef} info={feedBack} interviewer={interviewer} planId={planId}>
            <Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}>确认</Button>
            <Button>取消</Button>
        </FeedbackForm>
      </Spin>
    )
  }
}
