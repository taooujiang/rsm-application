import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
	Row,
	Avatar,
	Col,
	Button,
	DatePicker,
	Input,
	Table,
	Card,
	Tag,
	message,
	List,
	Collapse,
	Dropdown,
	Tabs,
	Select,
	Checkbox,
	Steps,
	Timeline,
	Upload,
	Spin,
	Modal,
	Rate,
	Radio,
	Menu,
	Popconfirm,
	Switch,
	Icon
} from 'antd'
import moment from 'moment'
import DictUtils from 'app/utils/DictUtils'
import EmailTemplateLinkage, {SmsTemplateLinkage, SmsTemplateInterView} from 'app/components/sendTemplate'
import BaseForm, {FormItem, customRules} from 'app/components/BaseForm'
import {FormPage} from 'app/components/Page'
import DateTimePicker from 'app/components/DateTimePicker'
/*导入小组件*/
import  {
  BaseInfoItem,
  translateTime,
} from './little'

const InputGroup = Input.Group;
const RadioGroup = Radio.Group
const moneyOpt = [
    {
      label: "日薪",
      value: '1'
    }, {
      label: "月薪",
      value: '2'
    }, {
      label: "年薪",
      value: '3'
    }
  ]
const stageJson = {
		1: "一级审批",
		2: "二级审批",
		3: "三级审批"
	}
const approvalStatus = {
    0: "未审批",
    1: "已通过",
    2: "未通过"
  }

export default class PersonOffer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: true,
      editFlag:false
    }
  }
  static childContextTypes = {
    actions: PropTypes.object,
    resumeId: PropTypes.string
  }

  getChildContext(){
     let { actions ,resumeId} =this.props;
     return {
        actions:actions,
        resumeId:resumeId
     };
  }

  componentWillMount() {
    let {info} = this.props
    //console.log(info)
    if (info) {
      this.setState({
        edit: info.offerId
          ? false
          : true
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    let {actions, resumeId} = nextProps
    if(this.props.resumeId !== nextProps.resumeId){
      actions.getOfferAction({resumeId: resumeId})
    }
    if (nextProps.location && JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)) {
      if (nextProps.location.state && nextProps.location.state.key == "reload") {
          actions.getOfferAction({resumeId: resumeId})
      }
    }
    /*编辑offer状态*/
    if (JSON.stringify(nextProps.info) !== JSON.stringify(this.props.info)) {
      this.setState({
        edit: nextProps.info.offerId
          ? false
          : true
      })
    }
  }
  componentDidMount() {
    let {actions, resumeId} = this.props
    actions.getOfferAction({resumeId: resumeId})
  }
  changeEdit() {
    let {edit} = this.state
    this.setState({
      edit: !edit
    })
  }
  editOfferFn(){
    let {edit} = this.state
    this.setState({
      edit: !edit,
      editFlag:true
    })
  }
  renderWhich() {
    let {
      info,
      resumeId,
      actions,
      item,
      item: {
        status
      },
      detailType,
      authorization
    } = this.props
    if (detailType == 3 || detailType == 4 || detailType == 10 || detailType == 1 || !authorization || status == 2 || status == 4) {
      return info.offerId
        ? <PersonOfferShow info={info} reSend={false} handleEdit={this.changeEdit.bind(this)} offerEditFn={this.editOfferFn.bind(this)}/>
        : <div className="list-no-data no-offer-record">暂无offer记录</div>
    }
    return this.state.edit
      ? <PersonOfferEdit resumeId={resumeId} actions={actions} editFlag={this.state.editFlag} item={item} info={info} handleReset={this.changeEdit.bind(this)}/>
    : <PersonOfferShow info={info} handleEdit={this.changeEdit.bind(this)}  offerEditFn={this.editOfferFn.bind(this)}/>
  }
  render() {
    let {item: {
        status
      }, detailType} = this.props
    return status < 2 && detailType == 2
      ? <div className="list-no-data no-offer-record">暂无offer记录</div>
      : this.renderWhich()
  }
}
class PersonOfferShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  renderSalary() {
    let {
      info: {
        salary,
        salaryType
      }
    } = this.props
    if (salaryType) {
      let type = moneyOpt.filter(it => {
        return it.value == salaryType
      }).pop().label
      return type + " " + salary
    }
  }
  toggleArraw() {
    this.setState({
      open: !this.state.open
    })
  }
  renderOfferButton() {
    let {
      reSend,
      info: {
        status,
        offerId
      }
    } = this.props
    if (reSend) {
      if (status == 1 || status == 2) {
        return <Button onClick={this.props.handleEdit} style={{
            float: "right",
            marginTop:10
          }}>再发一封</Button>
      }
      if (status == 6) {
        return <Button onClick={this.props.offerEditFn} style={{
            float: "right",
            marginTop:10
          }}>编辑offer</Button>
      }
      if (status == 5) {
        return <PersonOfferSend id={offerId}/>
      }
    }
    return null
  }
  renderArraw() {
    let {open} = this.state
    return open
      ? <Icon type="down-circle" onClick={this.toggleArraw.bind(this)}/>
      : <Icon type="right-circle" onClick={this.toggleArraw.bind(this)}/>
  }
  render() {
    let {
      info,
      info: {
        offerApprovals,
        salary,
        salaryType,
        status
      }
    } = this.props
    return (<div className="offer-showinfo-box">
      <BaseInfoItem label="offer" info={DictUtils.getDictLabelByValue("offerstatus", status)}/>
      <BaseInfoItem label="预计入职日期" info={translateTime(info.expectedEntryTime, "YYYY-MM-DD HH:mm:ss")}/>
      <BaseInfoItem label="入职薪资" info={this.renderSalary()}/>
      <BaseInfoItem label="offer邮件详情" info={this.renderArraw()}/> {
        this.state.open
          ? <div className="emailbox">
              <BaseInfoItem label="发件人" info={info.mailFrom}/>
              <BaseInfoItem label="收件人" info={info.mailTo}/>
              <BaseInfoItem label="邮件主题" info={info.mailSubject}/>
              <div dangerouslySetInnerHTML={{
                  __html: info.mailContent
                }}/>
            </div>
          : null
      }
      <BaseInfoItem label="offer审批" info={<PersonOfferApprovalPart approvalInfo = {
          offerApprovals
        } />}/> {this.renderOfferButton()}
    </div>)
  }
}
PersonOfferShow.defaultProps = {
  reSend: true
}
/* 审核通过发送offer组件 */
class PersonOfferSend extends FormPage {
  state = {
    time: "1",
		btnDisabled:false
  }
  static contextTypes = {
    actions: PropTypes.object,
    resumeId:PropTypes.string,
    viewLibType: PropTypes.number
  }
  handleChangeTime(e) {
    this.setState({time: e.target.value})
  }
  sendOffer() {
    let {actions,resumeId,viewLibType} = this.context
		this.setState({
			btnDisabled:true
		})
    this.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }
      actions.offerSendAction(values).then(()=>{
        actions.itemAction({id:resumeId,viewLibType:viewLibType})
        actions.getOfferAction({resumeId:resumeId})
				this.setState({
					btnDisabled:false
				})
      })
    });
  }
  render() {
    const timeOpt = [
      {
        label: "立即通知",
        value: '1'
      }, {
        label: "定时通知",
        value: '2'
      }
    ]
    let {time } = this.state
    return <BaseForm ref={this.saveFormRef}>
      <FormItem>
        <Input type="hidden" name="offerId" defaultValue={this.props.id}/>
      </FormItem>
      <FormItem>
        <RadioGroup name="sendType" label="通知时间" options={timeOpt} onChange={this.handleChangeTime.bind(this)} defaultValue={time}/>
      </FormItem>
      {
        this.state.time == 2
          ? <FormItem>
              <DateTimePicker name="sendTime" defaultDate={moment().add(1, "days")} defaultTime={moment().set({hour: 9, minute: 0, second: 0})} rules={[{
                    required: true,
                    message: "通知时间不可为空"
                  }
                ]}/>
            </FormItem>
          : null
      }
      <Button type="primary" onClick={this.sendOffer.bind(this)} style={{
          float: "right"
        }} disabled={this.state.btnDisabled}>发送offer</Button>
    </BaseForm>
  }
}
/* offer审批审批 */
class PersonOfferApprovalPart extends Component {
  render() {
    return this.props.approvalInfo.map((it, idx) => {
      // console.log(it)
      return <div className="approval-item">
        <div className="approval-rows">
          <span className="stage">{stageJson[it.approvalStage]}</span>
          <span className="nameTime">{it.approvalName} {it.inputTime}</span>
          <span className="result">{approvalStatus[it.status]}</span>
        </div>
        {
          it.approvalRemark
            ? <div className="approval-remark">{it.approvalRemark}</div>
            : null
        }
      </div>
    })
  }
}
PersonOfferApprovalPart.defaultProps = {
  approvalInfo: []
}
/* offer编辑状态 */
class PersonOfferEdit extends FormPage {
  state = {
    which: "2",
    time: "1"
  }
  static contextTypes = {
    viewLibType: PropTypes.number
  }
  updateFieldValue(name, value) {
    let {item} = this.props
    //console.log(item)
    var object = {}
    let exprctedEntryTime = moment(this.form.getFieldValue("expectedEntryTime")).format("YYYY-MM-DD HH:mm")
    let salaryType = moneyOpt.filter(it=>it.value == this.form.getFieldValue("salaryType"))
    let salary = this.form.getFieldValue("salary") || ""
    let entryAddress = this.form.getFieldValue("entryAddress") || ""
    let translate = [
      // {'面试时间':interviewTime},
      {
        '职位名称': item.jobTitle
      }, {
        '姓名': item.name
      }, {
        '入职时间': item.expectedEntryTime
      }, {
        '薪资': salaryType + salary
      }, {
        '地址': entryAddress
      }
    ]

    if (value.length) {
      // value = value.replace("{面试时间}",interviewTime)
      value = value.replace("{职位名称}", item.jobTitle)
      value = value.replace("{姓名}", item.name)
      value = value.replace("{入职时间}", exprctedEntryTime)
      value = value.replace("{薪资}", salaryType.pop().label + "-" + salary)
      value = value.replace("{地址}", entryAddress)
      //value = value.replace("{所属部门}",'')
    }
    object[name] = value
    this.form.setFieldsValue(object)
  }

  renderSmsOrEmail() {
    let {item} = this.props
    let {which} = this.state

    if (which == "2") {
      return (<EmailTemplateLinkage mailSubject="录用通知书" updateFieldValue={this.updateFieldValue.bind(this)} templateUse={"2"} mailTo={item.email}/>)
    } else {
      return null
    }
  }
  offerSubmit() {
    let {actions,item,item: {
        isOpenOfferAppro
      }} = this.props
      let {viewLibType} = this.context
    this.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }
      actions.offerOptionAction(values,isOpenOfferAppro).then(()=>{
        actions.itemAction({id:item.id,viewLibType:viewLibType})
        actions.getOfferAction({resumeId:item.id})
      })
    });
  }
  handleChange(e) {
    this.setState({which: e.target.value})
  }
  handleChangeTime(e) {
    this.setState({time: e.target.value})
  }
  renderAreaOption(data, idx) {
    return (<Select.Option value={data.addressAll} key={idx}>{data.addressAll}</Select.Option>)
  }
  renderSelectOption(data, idx) {
    return (<Select.Option value={data.value} key={idx}>{data.label}</Select.Option>)
  }
  renderSendType() {
    let {editFlag,item: {
        isOpenOfferAppro
      }} = this.props
    let {time} = this.state
    const timeOpt = [
      {
        label: "立即通知",
        value: '1'
      }, {
        label: "定时通知",
        value: '2'
      }
    ]
    if (!isOpenOfferAppro && !editFlag) {
      return <div>
        <FormItem>
          <RadioGroup name="sendType" label="通知时间" options={timeOpt} onChange={this.handleChangeTime.bind(this)} defaultValue={time}/>
        </FormItem>
        {
          time == '2'
            ? <FormItem>
                <DateTimePicker name="sendTime" defaultDate={moment().add(1, "days")} defaultTime={moment().set({hour: 9, minute: 0, second: 0})} rules={[{
                      required: true,
                      message: "通知时间不可为空"
                    }
                  ]}/>
              </FormItem>
            : null
        }
      </div>
    }
    return null
  }
  render() {
    const options = [
      /*{ label: '不通知', value: '0' },*/
      {
        label: '邮件通知',
        value: '2'
      }, {
        label: '不通知',
        value: '0'
      }
    ];

    let {info,editFlag, item: {
        isOpenOfferAppro
      }} = this.props
    return (<BaseForm ref={this.saveFormRef} className="offer-edit">
      <FormItem>
        <Input type="hidden" name="resumeId" defaultValue={this.props.resumeId}/>
      </FormItem>
      <FormItem>
        <Input type="hidden" name="offerId" defaultValue={info.offerId}/>
      </FormItem>
      <FormItem>
        <Input type="hidden" name="isApproval" defaultValue={ editFlag ? 1 : isOpenOfferAppro}/>
      </FormItem>
      <FormItem>
        {/*<DatePicker label="预计入职日期" name="expectedEntryTime" defaultValue={info.expectedEntryTime
            ? moment(info.expectedEntryTime)
            : null} rules={[
            {
              required: true,
              message: "预计入职时间不可为空"
            }, {
              validator: customRules.required
            }
          ]}/>*/}
				<DateTimePicker label="预计入职时间" name="expectedEntryTime" defaultDate={info.expectedEntryTime
						? moment(info.expectedEntryTime)
						: null } defaultTime={info.expectedEntryTime
								? moment(info.expectedEntryTime)
								: null} rules={[{
							required: true,
							message: "预计入职时间不可为空"
						}
					]}/>
      </FormItem>
      <InputGroup compact="compact" className="moneyGroup">
        <FormItem>
          <Select style={{
              width: 80
            }} label="入职薪资" name="salaryType" fetch={moneyOpt} defaultValue="2" renderItem={this.renderSelectOption}/>
        </FormItem>
        <FormItem className="moneyGroup-last">
          <Input name="salary" rules={[{validator: customRules.integer}]}/>
        </FormItem>
      </InputGroup>
      {this.renderSendType()}
      <FormItem>
        <Select label="预计入职地址" name="entryAddress" fetch={`${APP_SERVER}/company/listJson`} renderItem={this.renderAreaOption}></Select>
      </FormItem>
      {/*<FormItem>
    <Input label="发件人" name="sendEmail"/>
  </FormItem>
  <FormItem>
    <Input label="收件人" name="receiveEmail"/>
  </FormItem>*/
      }
      <FormItem>
        <RadioGroup name="noticeType" label="通知候选人" options={options} onChange={this.handleChange.bind(this)} defaultValue={this.state.which}/>
      </FormItem>
      {this.renderSmsOrEmail()}
      <Button onClick={this.offerSubmit.bind(this)} style={{
          float: "right"
        }}>{
          isOpenOfferAppro || editFlag?
            "提交审核"
            : "发送"
        }</Button>
    </BaseForm>)
  }
}
