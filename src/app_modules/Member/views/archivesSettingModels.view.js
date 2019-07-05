import React, {Component, PropTypes} from 'react'
import {
  Row,
  Col,
  Modal,
  Button,
  Radio,
  Input,
  Form,
  DatePicker,
  Layout,
  Spin,
  Select,
  TreeSelect,
  Tooltip, Checkbox, Table, Icon, Popconfirm, Cascader
} from 'antd'

import ButtonGroups from 'app/components/ButtonGroups'
import ModalView,{ModalWidthView} from 'app/components/Modal.view'
import moment from 'moment'
import RichEditor, {CustomButton,EditableRichEditor} from 'components/RichEditor'
import {FormPage} from 'app/components/Page'
import {FileUpload} from 'app/components/FileUpload'
import BaseForm,{FormItem,customRules} from 'app/components/BaseForm'
import LinkagePullDown from 'app/components/LinkagePullDown'
import CalendarPicker from 'app/components/CalendarPicker'
import {TreeSelectPicker} from 'app/components/TreeView'
import DateTimePicker from 'app/components/DateTimePicker'
import messageCountFn from 'app/utils/messageCount'
import {routerActions, push, replace} from 'react-router-redux'
import WrapperComponent from "app/decorators/WrapperComponent"
import NestedComponent from 'app/decorators/NestedComponent'
import DictUtils from 'app-utils/DictUtils'
import classnames from 'classnames'
import SysOptionForm from 'app/components/SystemSetting/SysOptionForm'
const Option = Select.Option
const {TextArea} = Input
const RadioGroup = Radio.Group;
const TreeNode = TreeSelect.TreeNode;


const CheckboxGroup = Checkbox.Group;
const data = [];
// 系统字段设置
class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
    isTooltipshow:false
  }
  handleChange = (e) => {
    const value = e.target.value;
    if(value.trim().length <= 0){
      this.setState({
        isTooltipshow:true,
        value
      })
      return void 0
    }else{
      this.setState({
        isTooltipshow:false,
        value
      })
    }
  }
  check = () => {
    const { isTooltipshow} = this.state;
    if(isTooltipshow) return
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
    const { value, editable ,isTooltipshow} = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Tooltip title="请输入非空字符" trigger="" visible={isTooltipshow}>
                <Input
                  value={value}
                  onChange={this.handleChange}
                  onPressEnter={this.check}
                  onBlur={this.check}
                  maxLength={8}
                  addonAfter={
                    <Icon
                      type="check"
                      className="editable-cell-icon-check"
                      onClick={this.check}
                    />
                  }
                />
              </Tooltip>


            </div>
            :
            <div  className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
              style={{display:this.props.isShow ? 'none' : 'inline-block' }} 
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}
class EditableFeild extends Component {
  state = {
    data: [],
    initialValue: []
  }
  constructor(props) {
    super(props);
    this.state.initialValue = props.value || []

    // this.cacheData = props.value.map(item => ({ ...item }))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      initialValue: nextProps.value || []
    });
  }
  onCellChange(key, dataIndex) {
    const onChange = this.props.onChange;
    return (value) => {
      let { initialValue } = this.state
      // const dataSource = [...this.state.initialValue]
      let newInitial = initialValue.map((item) => {
        if (item.optionName == key) {
          item.optionName = value
          return item
        } else {
          return item
        }
      })
      this.setState({ initialValue: newInitial })
      onChange(newInitial)
    }
  }

  cancel(key) {
    const onChange = this.props.onChange;
    const newData = [...this.state.initialValue]
    const target = newData.filter(item => key !== item.optionName)
    this.setState({ initialValue: target })
    onChange(target)
  }
  handlerAddRow() {
    const onChange = this.props.onChange;
    let { initialValue } = this.state
    let rowData = {
      "optionName": "",
      "isDefault": 0,
    }
    if (JSON.stringify(initialValue) && JSON.stringify(initialValue).indexOf(JSON.stringify(rowData)) < 0) {
      this.setState({ initialValue: initialValue.concat([rowData]) });
      //  onChange(initialValue.concat([rowData]))
    }
  }
  handlerRadioChange(record) {
    const onChange = this.props.onChange;
    let { initialValue } = this.state
    let newInitial = initialValue.map((item) => {
      if (item.optionName == record.optionName) {
        item.isDefault = 1
        return item
      } else {
        item.isDefault = 0
        return item
      }
    })
    this.setState({
      initialValue: newInitial
    })
    onChange(newInitial)
  }
  render() {
    var columns = [{
      title: 'optionName',
      dataIndex: 'optionName',
      render: (value, record) => (
        <EditableCell
        isShow={isShow}
          value={value}
          onChange={this.onCellChange(value, 'optionName')}
        />
      )
    }, {
      title: 'isDefault',
      dataIndex: 'isDefault',
      width: '20%',
      render: (value, record) => {
        return (<Radio checked={value == 1 ? true : false} name="isDefault" onClick={this.handlerRadioChange.bind(this, record)}>默认</Radio>)
      }
    }, {
      title: 'operation',
      width: '20%',
      dataIndex: 'operation',
      render: (text, record) => {
        const { editable } = record;
        return (
          <div className="editable-row-operations">
            {
              <span style={{display:isShow ? 'none' : 'inline-block' }}>
                <Popconfirm title="删除此项将导致原数据丢失" onConfirm={() => this.cancel(record.optionName)}>
                  <Icon type='delete' />
                </Popconfirm>
              </span>
            }
          </div>
        );
      },
    }];
console.log(this.props,"===this.props")
const {isShow}=this.props
console.log(isShow,"===isShow")
    return (
      <div className="EditableFeild">
      {/* <div style={{display:this.props.isShow ? 'block' : 'none'}} className='EditableFeildMask'></div> */}
        <Row>
          <Col span={12}>
            选项信息：
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button disabled={isShow} onClick={this.handlerAddRow.bind(this)}><Icon type='plus' />添加选项</Button>
          </Col>
        </Row>
        <Table bordered dataSource={this.state.initialValue} scroll={{ y: 140 }} rowKey='optionName' showHeader={false} columns={columns} pagination={false} />
      </div>
    );
  }
  disabled
}
EditableFeild.defaultProps = {    
  isShow: false
};

@WrapperComponent(ModalView)
export default  class archivesAddView extends FormPage {
  state = {
    editable: false,
  }
  handlerSelectType(value) {
    if (value == 3 || value == 4) {
      this.setState({ editable: true })
    } else {
      this.setState({ editable: false })
    }
  }

  componentWillMount() {
    //:id params.id
    let { actions, params } = this.props;
    if (params.fieldId) {
      actions.itemAction(params.fieldId)
    }
  }
  //处理表格提交后动作
  handleSubmit(values) {
    let { actions, router } = this.props;
    actions.saveAction(values)
    actions.backRoute(router)
  }

  saveFormRef = (form) => {
    this.form = form;
  }
  render() {
    let { editable } = this.state
    const {
      form,
      item,
      handleSubmit,
      children,
      // saveFormRef,
      params,
    } = this.props
    let initialValues = item
    const formOffset1 = {
      wrapperCol: {
        offset: 1,
        span: 6
      }
    };
    const formOffset2 = {
      wrapperCol: {
        offset: 10,
        span: 6
      }
    };
    const timeConversion = (time) => {
      if (time && time != "") {
        return moment(time)
      } else {
        return null
      }
    }
    return (
      <BaseForm onSubmit={handleSubmit} ref={this.saveFormRef}>
        <FormItem className="row-hidden">
          <Input name="oldSort" type="hidden" defaultValue={item.sort} />
        </FormItem>
        <FormItem className="row-hidden">
          <Input name="fieldCode" type="hidden" defaultValue={item.fieldCode} />
        </FormItem>
        <FormItem>
          <Input name="fieldId" type="hidden" defaultValue={item.fieldId} />
        </FormItem>
        <FormItem>
          <Input label="字段名称" disabled={item.isRead} name="fieldName" rules={[{ required: true, message: '字段名称不可为空', }, { validator: customRules.required }, { max: 10, message: '字段名称不能超过10个字' }, { validator: customRules.remote, value: '/field/nameIsExistsJson', name: "fieldName", defaultValue: item.fieldName }]} defaultValue={item.fieldName} />
        </FormItem>
        <FormItem>
          <Input label="排序值" name="sort" rules={[{ required: true, message: '排序值不可为空' }, { validator: customRules.integer }]} defaultValue={item.sort} />
        </FormItem>
        <FormItem>
          <Select label="字段类型" name="dataType" defaultValue={!item.dataType ? 1 : item.dataType} onChange={this.handlerSelectType.bind(this)} disabled={params.fieldId ? true : false}>
            <Option value={1}>文本</Option>
            <Option value={2}>日期</Option>
            <Option value={3}>单选</Option>
            <Option value={4}>多选</Option>
          </Select>
        </FormItem>
        <div style={{ position: 'relative' }}>
          <FormItem {...formOffset1}>
            <Checkbox label="" name="isRequired" defaultValue={item.isRequired == "1" ? true : false} valuePropName="checked">必填</Checkbox>
          </FormItem>
          <FormItem style={{ position: 'absolute', top: 0, left: '42%' }}>
            <Checkbox label="" name="enable" defaultValue={item.enable == "1" ? true : false} valuePropName="checked">启用</Checkbox>
          </FormItem>
        </div>
        {(editable || item.dataType == 3 || item.dataType == 4) && (
          <FormItem className="no-padding-left">
            <EditableFeild isShow={item.isRead} label="" name="options" defaultValue={item.options == "" ? [] : item.options} />
          </FormItem>
        )}

      </BaseForm>
    )
  }
}
// 资料信息设置
@WrapperComponent(ModalView)
export   class msgAddView extends FormPage {
  state = {
    editable: false,
  }
  handlerSelectType(value) {
    if (value == 3 || value == 4) {
      this.setState({ editable: true })
    } else {
      this.setState({ editable: false })
    }
  }

  componentWillMount() {
    //:id params.id
    let { actions, params } = this.props;
    if (params.fieldId) {
      actions.itemAction(params.fieldId)
    }
  }
  //处理表格提交后动作
  handleSubmit(values) {
    let { actions, router } = this.props;
    actions.saveAction(values)
    actions.backRoute(router)
  }

  saveFormRef = (form) => {
    this.form = form;
  }
  render() {
    let { editable } = this.state
    const {
      form,
      item,
      handleSubmit,
      children,
      // saveFormRef,
      params,
    } = this.props
    let initialValues = item
    const formOffset1 = {
      wrapperCol: {
        offset: 1,
        span: 6
      }
    };
    const formOffset2 = {
      wrapperCol: {
        offset: 10,
        span: 6
      }
    };
    const timeConversion = (time) => {
      if (time && time != "") {
        return moment(time)
      } else {
        return null
      }
    }
    return (
      <BaseForm onSubmit={handleSubmit} ref={this.saveFormRef}>
        <FormItem className="row-hidden">
          <Input name="oldSort" type="hidden" defaultValue={item.sort} />
        </FormItem>
        <FormItem className="row-hidden">
          <Input name="fieldCode" type="hidden" defaultValue={item.fieldCode} />
        </FormItem>
        <FormItem>
          <Input name="fieldId" type="hidden" defaultValue={item.fieldId} />
        </FormItem>
        <FormItem>
          <Input label="字段名称" disabled={item.isRead} name="fieldName" rules={[{ required: true, message: '字段名称不可为空', }, { validator: customRules.required }, { max: 10, message: '字段名称不能超过10个字' }, { validator: customRules.remote, value: '/field/nameIsExistsJson', name: "fieldName", defaultValue: item.fieldName }]} defaultValue={item.fieldName} />
        </FormItem>
        <FormItem>
          <Input label="排序值" name="sort" rules={[{ required: true, message: '排序值不可为空' }, { validator: customRules.integer }]} defaultValue={item.sort} />
        </FormItem>
        <FormItem>
          <Select label="字段类型" name="dataType" defaultValue={!item.dataType ? 1 : item.dataType} onChange={this.handlerSelectType.bind(this)} disabled={params.fieldId ? true : false}>
            <Option value={1}>文本</Option>
            <Option value={2}>日期</Option>
            <Option value={3}>单选</Option>
            <Option value={4}>多选</Option>
          </Select>
        </FormItem>
        <div style={{ position: 'relative' }}>
          <FormItem {...formOffset1}>
            <Checkbox label="" name="isRequired" defaultValue={item.isRequired == "1" ? true : false} valuePropName="checked">必填</Checkbox>
          </FormItem>
          <FormItem style={{ position: 'absolute', top: 0, left: '42%' }}>
            <Checkbox label="" name="enable" defaultValue={item.enable == "1" ? true : false} valuePropName="checked">启用</Checkbox>
          </FormItem>
        </div>
        {(editable || item.dataType == 3 || item.dataType == 4) && (
          <FormItem className="no-padding-left">
            <EditableFeild isShow={item.isRead} label="" name="options" defaultValue={item.options == "" ? [] : item.options} />
          </FormItem>
        )}

      </BaseForm>
    )
  }
}



// 离职原因添加

@WrapperComponent(ModalView)
export  class reasonAddView extends FormPage {

	render(){
		const formConfig={
			optionCode:'file_reasons',
			optionLabel:'离职原因',
		}
		return(
			<SysOptionForm {...this.props} {...formConfig} />
		)
	}
}
export  class archives0000 extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		// let {actions,reduce:{detailList:{id},params,page}}=this.props
		// console.log(values,'handleSubmit')
		// actions.invateForDeliveryAction({...values},{...params}).then(()=>{
		// 	actions.backRoute()
		// })
	
    }
    beforeUpload(file) {
		let {name} = file
		let suffix = name.split(".").pop()
		if (suffix == "jpg" || suffix == "png" || suffix == "jpeg") {
			return true
		} else {
			message.warning("图片格式只支持jpg,png和jpeg")
			return false
		}
	}

	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                   <FormItem  >
							<Select  name="jobId" label='转正日期' placeholder="请选择转正日期" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   {/* <FormItem >
                     
                    <FileUpload name="file" label='转正申请表' accept="image/jpg, image/png, image/jpeg" beforeUpload={this.beforeUpload} text="上传信息登记表" action={`/fileUpload/file/uploadResumeAttr?resumeId=${1}&s=`} uploadType="1" onChange={() => {}} 
                        onSuccess={() => {
						actions.fetchAdditionInfoAction({"resumeId": 1})
					     }}></FileUpload>
                    </FormItem> */}
                        <FormItem>
                        <RadioGroup name="isAllot" label='转正通知书' rules={[{required: true, message: '请选择岗位级别!'}]}   placeholder="请选择" defaultValue="0">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>
                        </FormItem>
                        <FormItem>
                        <RadioGroup name="isAllot" label='发送方式' rules={[{required: true, message: '请选择岗位级别!'}]}   placeholder="请选择" defaultValue="0">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>
                        </FormItem>
					<FormItem  >
							<Select  name="jobId" label='接收邮箱' placeholder="请输入邮箱" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem>
									 <Select  name="jobId" label='通知模板' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem >
					<TextArea
                    
					label="&#x3000;内容" 
					name='des'
						placeholder="请输入内容！"
                        autosize={{ minRows: 4, maxRows: 10 }}
                        rules={[{required: true, message: '请选择岗位级别!'}]}  
						/>
					</FormItem>
                   
				
		</BaseForm>)
  }
 }

//通知模板设置
@WrapperComponent(ModalWidthView)
export  class TemplateForm extends FormPage{
  componentDidMount(){
    let {actions,params}=this.props
    actions.fetchTemplateItemAction({id:params.id})
  }
  handleSubmit(value){
    let {actions} = this.props
    actions.saveTemplateAction(value)
    actions.backRoute()
  }
  renderSelectOption(data,idx){
    let {
      item,
      params
    } = this.props
    console.log(params.smsType,item.type)
    return (<Select.Option value={data.keyValue} key={idx} disabled={(params.smsType==1 ||item.type==1) && data.keyValue=="2"}>{data.keyName}</Select.Option>)
  }
  render() {
    let {
      item,
      params
    } = this.props
    // this.props.form.setFieldsValue
    console.log(item)
    return (
        <BaseForm onSubmit={this.handleSubmit.bind(this)} ref={this.saveFormRef}>
          <FormItem>
            <Input name="type" type="hidden" defaultValue={params.smsType|| item.type} />
          </FormItem>
          <FormItem>
            <Input name="id" type="hidden" defaultValue={item.id} />
          </FormItem>
          <FormItem>
            <Select label="模板用途" name="templateUse" defaultValue={item.templateUse} fetch={DictUtils.getDictByType("templateuse")} defaultValue={item.templateUse} renderItem={this.renderSelectOption.bind(this)} rules={[{required: true, message: '模板用途不可为空',whitespace:true}]} ></Select>
          </FormItem>
          <FormItem>
            <Input label="请输入模板名称" name="name"  defaultValue={item.name} rules={[{required: true, message: '模板用途不可为空',whitespace:true}]}/>
          </FormItem>
          <FormItem>
            <EditableRichEditor name="content" rows={4} defaultValue={item.content} extBar={true} type={(params.smsType=="2" || item.type=="2")?"html":"markdown"}/>
          </FormItem>
        </BaseForm>
    )
  }
}

// 批量转正
export  class batchPositiveModelView extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		// let {actions,reduce:{detailList:{id},params,page}}=this.props
		// console.log(values,'handleSubmit')
		// actions.invateForDeliveryAction({...values},{...params}).then(()=>{
		// 	actions.backRoute()
		// })
	
	}
	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
					<h1 name="des" label='是否批量转正员工？确定后，员工将自动转为正式员工。'></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='转正日期' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }
// 修改转正日期
 export  class editPositiveModelView extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		// let {actions,reduce:{detailList:{id},params,page}}=this.props
		// console.log(values,'handleSubmit')
		// actions.invateForDeliveryAction({...values},{...params}).then(()=>{
		// 	actions.backRoute()
		// })
	
	}
	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='转正日期' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }
// 
export  class deitOnlyPositiveModelView extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		// let {actions,reduce:{detailList:{id},params,page}}=this.props
		// console.log(values,'handleSubmit')
		// actions.invateForDeliveryAction({...values},{...params}).then(()=>{
		// 	actions.backRoute()
		// })
	
    }
    beforeUpload(file) {
		let {name} = file
		let suffix = name.split(".").pop()
		if (suffix == "jpg" || suffix == "png" || suffix == "jpeg") {
			return true
		} else {
			message.warning("图片格式只支持jpg,png和jpeg")
			return false
		}
	}

	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                   <FormItem  >
							<Select  name="jobId" label='转正日期' placeholder="请选择转正日期" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem >
					<TextArea
                    
					label="&#x3000;原因" 
					name='des'
						placeholder="请输入内容！"
                        autosize={{ minRows: 4, maxRows: 10 }}
                        rules={[{required: true, message: '请选择岗位级别!'}]}  
						/>
					</FormItem>
                        <FormItem>
                        <RadioGroup name="isAllot" label='转正通知书' rules={[{required: true, message: '请选择岗位级别!'}]}   placeholder="请选择" defaultValue="0">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>
                        </FormItem>
                        <FormItem>
                        <RadioGroup name="isAllot" label='发送方式' rules={[{required: true, message: '请选择岗位级别!'}]}   placeholder="请选择" defaultValue="0">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>
                        </FormItem>
					<FormItem  >
							<Select  name="jobId" label='接收邮箱' placeholder="请输入邮箱" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem>
									 <Select  name="jobId" label='通知模板' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem >
					<TextArea
                    
					label="&#x3000;内容" 
					name='des'
						placeholder="请输入内容！"
                        autosize={{ minRows: 4, maxRows: 10 }}
                        rules={[{required: true, message: '请选择岗位级别!'}]}  
						/>
					</FormItem>
                   
				
		</BaseForm>)
  }
 }
 //添加合同信息
 export  class addContractInformationModelView extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		// let {actions,reduce:{detailList:{id},params,page}}=this.props
		// console.log(values,'handleSubmit')
		// actions.invateForDeliveryAction({...values},{...params}).then(()=>{
		// 	actions.backRoute()
		// })
	
	}
	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
                        <Input name="graduateId" label="&#x3000;合同编号"  defaultValue={0 } />
                   </FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
                    <CalendarPicker name="contractExpireTimeArr" label="&#x3000;签署日期" />
					</FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
                    <CalendarPicker 	rules={[{required: true, message: '请选择岗位级别!'}]}   name="contractExpireTimeArr" label="到期日期" />
					</FormItem>
                    <FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='生效日期' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='&#x3000;签署公司' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }
//  批量离职
 export  class bulkDeparturesModelView extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		// let {actions,reduce:{detailList:{id},params,page}}=this.props
		// console.log(values,'handleSubmit')
		// actions.invateForDeliveryAction({...values},{...params}).then(()=>{
		// 	actions.backRoute()
		// })
	
	}
	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
					<h1 name="des" label='是否批量离职员工？'></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='离职日期' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择离职日期!'}]}  
											/>  
                   </FormItem> 
                   <FormItem  style={{marginLeft: '50px'}} >
							<Select  name="jobId" label='离职原因' placeholder="请选择离职原因" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
				
		</BaseForm>)
  }
 }
//  单个离职
 
 export  class editonlyDepartureDateModelView extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		// let {actions,reduce:{detailList:{id},params,page}}=this.props
		// console.log(values,'handleSubmit')
		// actions.invateForDeliveryAction({...values},{...params}).then(()=>{
		// 	actions.backRoute()
		// })
	
    }
    beforeUpload(file) {
		let {name} = file
		let suffix = name.split(".").pop()
		if (suffix == "jpg" || suffix == "png" || suffix == "jpeg") {
			return true
		} else {
			message.warning("图片格式只支持jpg,png和jpeg")
			return false
		}
	}

	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                   <FormItem  >
							<Select  name="jobId" label='离职日期' placeholder="请选择离职日期" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem  >
							<Select  name="jobId" label='离职原因' placeholder="请选择离职日期" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   <FormItem >
					<TextArea
                    
					label="&#x3000;原因描述" 
					name='des'
						placeholder="请输入原因描述！"
                        autosize={{ minRows: 4, maxRows: 10 }}
						/>
					</FormItem>
                   {/* <FormItem >
                     
                    <FileUpload name="file" label='离职申请表' accept="image/jpg, image/png, image/jpeg" beforeUpload={this.beforeUpload} text="上传信息登记表" action={`/fileUpload/file/uploadResumeAttr?resumeId=${1}&s=`} uploadType="1" onChange={() => {}} 
                        onSuccess={() => {
						actions.fetchAdditionInfoAction({"resumeId": 1})
					     }}></FileUpload>
                    </FormItem> */}
                    {/* <FormItem >
                     
                    <FileUpload name="file" label='离职交接表' accept="image/jpg, image/png, image/jpeg" beforeUpload={this.beforeUpload} text="上传信息登记表" action={`/fileUpload/file/uploadResumeAttr?resumeId=${1}&s=`} uploadType="1" onChange={() => {}} 
                        onSuccess={() => {
						actions.fetchAdditionInfoAction({"resumeId": 1})
					     }}></FileUpload>
                    </FormItem> */}
                        <FormItem>
                        <RadioGroup name="isAllot" label='离职证明' rules={[{required: true, message: '请选择岗位级别!'}]}   placeholder="请选择" defaultValue="0">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>
                        </FormItem>
                        <FormItem>
                        <RadioGroup name="isAllot" label='发送方式' rules={[{required: true, message: '请选择岗位级别!'}]}   placeholder="请选择" defaultValue="0">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>
                        </FormItem>
					<FormItem  >
							<Select  name="jobId" label='接收邮箱' placeholder="请输入邮箱" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											/>  
                   </FormItem> 
                   <FormItem>
									 <Select  name="jobId" label='通知模板' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											/>  
                   </FormItem> 
                   <FormItem >
					<TextArea
                    
					label="&#x3000;内容" 
					name='des'
						placeholder="请输入内容！"
                        autosize={{ minRows: 4, maxRows: 10 }}
						/>
					</FormItem>
                   
				
		</BaseForm>)
  }
 }
//  修改离职日期
 export  class editDepartureDateModelView extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		// let {actions,reduce:{detailList:{id},params,page}}=this.props
		// console.log(values,'handleSubmit')
		// actions.invateForDeliveryAction({...values},{...params}).then(()=>{
		// 	actions.backRoute()
		// })
	
	}
	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='离职日期' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }
//  实习转正
 export  class practicePositiveModelView extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		// let {actions,reduce:{detailList:{id},params,page}}=this.props
		// console.log(values,'handleSubmit')
		// actions.invateForDeliveryAction({...values},{...params}).then(()=>{
		// 	actions.backRoute()
		// })
	
	}
	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
					<h1 name="des" label='是否批量转正员工？确定后，员工将自动转为正式员工。'></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='合并岗位' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }
//实习转试用
 export  class internship2ProbationModelView extends FormPage{
	constructor(props) {
			super(props); 	
	}
	renderJobOption(data,idx){
		return (<Select.Option value={data.jobId} key={idx}>{data.jobTitle}</Select.Option>)
	}
	handleSubmit(values){
		// let {actions,reduce:{detailList:{id},params,page}}=this.props
		// console.log(values,'handleSubmit')
		// actions.invateForDeliveryAction({...values},{...params}).then(()=>{
		// 	actions.backRoute()
		// })
	
	}
	render() {
			// const {handleSubmit,saveFormRef,params:{id},reduce:{detailList}} = this.props
			// console.log(id,"==detailList")
	   return (
		<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} className="batchPositiveModelView-form">
                   <FormItem className="row-hidden">
                        <Input name="graduateId" type="hidden" defaultValue={0 } />
                   </FormItem>
                    <FormItem >
					<h1 name="des" style={{height:'30px'}} label={`已经选择${0}条`}></h1>
					</FormItem>
                    <FormItem  style={{marginLeft: '50px',height:'30px'}} >
					<h1 name="des" label='是否批量转正员工？确定后，员工将自动转为正式员工。'></h1>
					</FormItem>
					<FormItem  style={{marginLeft: '50px'}}>
							<Select  name="jobId" label='合并岗位' placeholder="请选择" 
											fetch={`${APP_SERVER}/jobNew/getJobSchoolList`} 
											renderItem={this.renderJobOption}
											defaultValue=''
											rules={[{required: true, message: '请选择岗位级别!'}]}  
											/>  
                   </FormItem> 
                   
				
		</BaseForm>)
  }
 }