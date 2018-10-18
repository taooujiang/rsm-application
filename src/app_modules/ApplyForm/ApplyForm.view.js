import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ModalView from 'app/components/Modal.view'
import WrapperComponent from 'app/decorators/WrapperComponent'
import { Input, Modal, Select, Row, Col, Cascader,Table,Button,Icon,Radio,Popconfirm,DatePicker,message } from 'antd'
import BaseForm, { FormItem, customRules } from 'components/BaseForm'
import { FormPage } from 'app/components/Page'
import API from './api'
import EditableCell from 'app/components/EditableCell'
import DictUtils from 'app/utils/DictUtils'
import moment from 'moment'
import style from './ApplyForm.less'
const InputGroup = Input.Group;
const Option = Select.Option;
const { TextArea } = Input;


class EditableFeild extends Component {
  state={
    data:[],
    initialValue:[]
  }
  constructor(props) {
    super(props);
    this.state.initialValue = props.value||[]

    // this.cacheData = props.value.map(item => ({ ...item }))
  }

  saveFormRef = (form) => {
    this.form = form;
  }

  componentWillReceiveProps(nextProps){
      this.setState({
        initialValue:nextProps.value||[]
      });
  }

  onCellChange (key,dataIndex) {
    const onChange = this.props.onChange;
     return (value) => {
       let {initialValue} = this.state
      // const dataSource = [...this.state.initialValue]
         let newInitial=initialValue.map((item)=>{
           if(JSON.stringify(item)==JSON.stringify(key)){
             item[dataIndex]=value
             return item
           }else{
             return item
           }
         })
         this.setState({ initialValue:newInitial })
         onChange(newInitial)
      }
   }

   onCellChangeArea (key,dataIndex) {
     const onChange = this.props.onChange;
      return (value) => {
        let {initialValue} = this.state
       // const dataSource = [...this.state.initialValue]
          let newInitial=initialValue.map((item)=>{
            if(JSON.stringify(item)==JSON.stringify(key)){
              item[dataIndex]=value
              return item
            }else{
              return item
            }
          })
          this.setState({ initialValue:newInitial })
          onChange(newInitial)
       }
    }

  cancel(key) {
    const onChange = this.props.onChange;
    const newData = [...this.state.initialValue]
    const target = newData.filter(item => JSON.stringify(key) !== JSON.stringify(item))
    this.setState({ initialValue: target },function(){
      onChange(target)
    })
  }
  handlerAddRow(){
    const onChange = this.props.onChange;
    let {initialValue} = this.state
    let rowData = { }
    if(JSON.stringify(initialValue) && JSON.stringify(initialValue).indexOf(JSON.stringify(rowData))<0){
        this.setState({ initialValue:initialValue.concat([rowData]) });
      //  onChange(initialValue.concat([rowData]))
    }
  }
  handlerRadioChange(record){
    const onChange = this.props.onChange;
    let {initialValue} = this.state
    let newInitial=initialValue.map((item)=>{
      if(item.company==record.company){
        item.isDefault=1
        return item
      }else{
        item.isDefault=0
        return item
      }
    })
    this.setState({
      initialValue:newInitial
    })
    onChange(newInitial)
  }
  render() {
		const {columns}=this.props
		/*
		*/
    return (
      <div className="EditableFeild">
        <Table bordered dataSource={this.state.initialValue} scroll={{ y: 300 }} style={{height:'300px',border:"1px solid #cfdae5"}} rowKey='company' columns={columns.map(it=>{
					return Object.assign(it,{
						width:"10%",
						render: (value, record,a,b) =>(
              <EditableCell
			          value={value}
                type={it.dataType == "time" ? 'time' : 'text'}
			          onChange={this.onCellChangeArea(record, it.dataIndex)}
			        />
            )
					})
				})} pagination={false} />
        <Row style={{marginTop:10}}>
          <Col span={12} style={{textAlign:'right'}}>
            <Button onClick={this.handlerAddRow.bind(this)} disabled={this.state.initialValue.length>=5}><Icon type='plus'/>添加</Button>
          </Col>
        </Row>
      </div>
    );
  }
}





export default class ApplyFormView extends FormPage {
  state = {
		"submit":false
	}

  componentDidMount() {
    new API().fetchGetJsonMap()
		.then((res)=>{
			console.log('fetchGetJsonMap',res)
      this.setState({
        jsonMap: res
      })
		})
		.catch(err=>{
			console.log(err)
		})
  }

	renderSelectOption(data, idx) {
		return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
	}
	handleSubmit() {
		let { form, switchFn } = this.props
		let { actions } = this.context

		this.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				return;
			}
			new API().fetchSaveApplyForm(values)
			.then((res)=>{
				console.log(res)
				this.setState({
					"submit":true
				})
				// message.success("提交成功")
			})
			.catch(err=>{
				console.log(err)
				message.error("提交失败")
			})
			console.log(values, 'valuesvaluesvalues')
		});
	}
  getDictByType(type,data){
		return data[type]?data[type]:[]
	}

	render() {
		const { onSubmit, saveFormRef } = this.props
		let applyerInfo = parent.applyerInfo
		let jsonMap = this.state.jsonMap || {}
		// console.log(applyerInfo)
		return (
			!this.state.submit?
			<div className="apply-form-wrap">
				<h2 className="form-title">面试信息登记</h2>
				<div className="form-subtitle">
					<div className="interview-info">
						<span>应聘职位：{applyerInfo&&applyerInfo.jobTitle}</span>
						<span className="interview-date">面试时间：{applyerInfo&&applyerInfo.interviewTime&&moment(applyerInfo.interviewTime?applyerInfo.interviewTime:undefined).format("YYYY-MM-DD HH:mm")}</span>
					</div>
				</div>
				<BaseForm onSubmit={this.handleSubmit} ref={this.saveFormRef} style={{ width: '980px', margin: '10px auto' }}>

					<h2>基本信息</h2>
					<Row gutter={24}>
            <FormItem  >
              <Input label="" type="hidden" name="id" defaultValue={applyerInfo&&applyerInfo.id}  />
            </FormItem>
						<FormItem  >
							<Input label="" type="hidden" name="resumeId" defaultValue={applyerInfo&&applyerInfo.resumeId}  />
						</FormItem>
						<FormItem  >
							<Input label="" type="hidden" name="interviewId" defaultValue={applyerInfo&&applyerInfo.interviewId}  />
						</FormItem>
						<FormItem  >
							<Input label="" type="hidden" name="orgId" defaultValue={applyerInfo&&applyerInfo.orgId}  />
						</FormItem>
            <FormItem  >
							<Input label="" type="hidden" name="jobId" defaultValue={applyerInfo&&applyerInfo.jobId}  />
						</FormItem>
            <FormItem  >
							<Input label="" type="hidden" name="jobTitle" defaultValue={applyerInfo&&applyerInfo.jobTitle}  />
						</FormItem>
            <FormItem  >
							<Input label="" type="hidden" name="interviewTime" defaultValue={applyerInfo&&applyerInfo.interviewTime}  />
						</FormItem>
						<Col span={12}>
							<FormItem  >
								<Input label="姓名" name="name" defaultValue={applyerInfo&&applyerInfo.name} rules={[{required: true, message: "姓名不可为空"},{validator:customRules.required},{max:5,message:"姓名最多5个字符"}]}/>
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<DatePicker label="出生日期" name="birthTime" defaultValue={applyerInfo&&applyerInfo.birthTime?moment(applyerInfo.birthTime?applyerInfo.birthTime:undefined):null} rules={[{required: true, message: "出生日期不可为空"}]}/>
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Select label="性别" fetch={this.getDictByType("sex",jsonMap)} renderItem={this.renderSelectOption} name="sex" defaultValue={applyerInfo&&applyerInfo.sex&&applyerInfo.sex.toString()} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Select label="政治面貌" name="politicsStatus" fetch={this.getDictByType("political",jsonMap)} renderItem={this.renderSelectOption} defaultValue={applyerInfo&&applyerInfo.politicsStatus&&applyerInfo.politicsStatus.toString()} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Select label="民族" name="national" placeholder="请选择" fetch={this.getDictByType("national",jsonMap)&&this.getDictByType("national",jsonMap).sort((a,b)=>a.keySort-b.keySort)} renderItem={this.renderSelectOption} defaultValue={applyerInfo&&applyerInfo.national&&applyerInfo.national.toString()} showSearch optionFilterProp="keyName" filterOption={function(inputValue, option){
									return option.props.children.indexOf(inputValue)>-1
								}} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="籍贯" name="nativePlace" defaultValue={applyerInfo&&applyerInfo.nativePlace} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="身份证号" name="idCard" defaultValue={applyerInfo&&applyerInfo.idCard} rules={[{required: true, message: "身份证号不可为空"},{validator:customRules.checkIDCard}]} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Select label="户籍性质" name="residenceStatus" fetch={this.getDictByType("residenceStatus",jsonMap)} renderItem={this.renderSelectOption} defaultValue={applyerInfo&&applyerInfo.residenceStatus&&applyerInfo.residenceStatus.toString()} />
							</FormItem>
						</Col>
						<Col span={24}>
							<FormItem  >
								<Input label="户籍所在地" name="residenceAddress" defaultValue={applyerInfo&&applyerInfo.residenceAddress} rules={[{max:30,message:"户籍所在地最多30个字符"}]}/>
							</FormItem>
						</Col>
						<Col span={24}>
							<FormItem  >
								<Input label="现住地址" name="currentAddress" defaultValue={applyerInfo&&applyerInfo.currentAddress} rules={[{max:30,message:"现住地址最多30个字符"}]}/>
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Select label="本市住房情况" name="houseStatus" fetch={this.getDictByType("houseStatus",jsonMap)} renderItem={this.renderSelectOption} defaultValue={applyerInfo&&applyerInfo.houseStatus+""} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Select label="婚姻状况" name="maritalStatus" fetch={this.getDictByType("maritalstatus",jsonMap)} renderItem={this.renderSelectOption} defaultValue={applyerInfo&&applyerInfo.maritalStatus&&applyerInfo.maritalStatus.toString()} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="身体状况" name="physicalCondition" defaultValue={applyerInfo&&applyerInfo.physicalCondition} rules={[{max:30,message:"身体状况最多30个字符"}]}/>
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Select label="学历" name="education" fetch={this.getDictByType("education",jsonMap)&&this.getDictByType("education",jsonMap).sort((a,b)=>a.keySort-b.keySort)} renderItem={this.renderSelectOption} defaultValue={applyerInfo&&applyerInfo.education&&applyerInfo.education.toString()} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Select label="学位" name="degree" fetch={this.getDictByType("qualification",jsonMap)} renderItem={this.renderSelectOption} defaultValue={applyerInfo&&applyerInfo.degree&&applyerInfo.degree.toString()} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="所学专业" name="lastMajor" defaultValue={applyerInfo&&applyerInfo.lastMajor} rules={[{max:30,message:"所学专业最多30个字符"}]} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="辅修专业" name="minorMajor" defaultValue={applyerInfo&&applyerInfo.minorMajor} rules={[{max:30,message:"辅修专业最多30个字符"}]}/>
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="毕业学校" name="lastSchool" defaultValue={applyerInfo&&applyerInfo.lastSchool} rules={[{max:20,message:"毕业学校最多20个字符"}]}/>
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<DatePicker label="毕业时间" name="lastSchoolEnd" defaultValue={applyerInfo&&applyerInfo.lastSchoolEnd?moment(applyerInfo.lastSchoolEnd?applyerInfo.lastSchoolEnd:undefined):null}  />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="资格技能证书" name="skillCertificate" defaultValue={applyerInfo&&applyerInfo.skillCertificate} rules={[{max:30,message:"资格技能证书最多30个字符"}]}/>
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="英语水平" name="englishLevel" defaultValue={applyerInfo&&applyerInfo.englishLevel} rules={[{max:30,message:"英语水平最多30个字符"}]} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="本人联系电话" name="mobilephone" defaultValue={applyerInfo&&applyerInfo.mobilephone} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="邮箱地址" name="email" defaultValue={applyerInfo&&applyerInfo.email} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<DatePicker label="预计到岗时间" name="predictTime" defaultValue={applyerInfo&&applyerInfo.predictTime?moment(applyerInfo.predictTime?applyerInfo.predictTime:undefined):null}  />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="紧急联系人姓名" name="urgencyName" defaultValue={applyerInfo&&applyerInfo.urgencyName} rules={[{max:5,message:"紧急联系人姓名最多5个字符"},{required: true,message:"紧急联系人姓名不可为空"}]}/>
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="紧急联系人电话" name="urgencyPhone" defaultValue={applyerInfo&&applyerInfo.urgencyPhone} rules={[{required: true,message:"紧急联系人电话不可为空"}]} />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="目前薪酬" name="currentSalary" defaultValue={applyerInfo&&applyerInfo.currentSalary} rules={[{max:30,message:"目前薪酬最多30个字符"}]}/>
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem  >
								<Input label="期望薪酬福利" name="expectedSalary" defaultValue={applyerInfo&&applyerInfo.expectedSalary} rules={[{max:30,message:"期望薪酬福利最多30个字符"}]}/>
							</FormItem>
						</Col>
						<Col span={24}>
							<FormItem  >
								<Input label="爱好特长" name="hobby" defaultValue={applyerInfo&&applyerInfo.hobby} rules={[{max:50,message:"爱好特长最多50个字符"}]}/>
							</FormItem>
						</Col>
						<Col span={24}>
							<FormItem  >
								<Input label="其他要求" name="otherRequirements" defaultValue={applyerInfo&&applyerInfo.otherRequirements} rules={[{max:50,message:"其他要求最多50个字符"}]}/>
							</FormItem>
						</Col>
						<Col span={24}>
							<FormItem  >
								<TextArea label="个人发展计划" name="developmentPlan" defaultValue={applyerInfo&&applyerInfo.developmentPlan} rules={[{max:100,message:"个人发展计划最多100个字符"}]}/>
							</FormItem>
						</Col>
					<Col span={24}>
						<FormItem >
							<EditableFeild label="主要家庭成员" name="relationshipList" columns={[{
							      title: '称谓',
							      dataIndex: 'relationship',
							    },{
							      title: '姓名',
							      dataIndex: 'name',
							    }, {
							      title: '年龄',
							      dataIndex: 'age',
                    render:(val)=>{
                      return val == 0 ? "" : val
                    }
							    }, {
							      title: '所在单位',
							      dataIndex: 'company',
							    }, {
							      title: '职务',
							      dataIndex: 'position',
							    }, {
							      title: '联系方式 ',
							      dataIndex: 'relationPhone',
							    }]
							} defaultValue={applyerInfo&&applyerInfo.relationshipList} />
						</FormItem>
					</Col>
				</Row>
					<h2>工作经验及业绩说明</h2>
					<Row gutter={24}>
						<Col span={24}>
							<FormItem  >
              <EditableFeild label="工作经历" name="workList" columns={[{
                    title: '时间',
                    dataIndex: 'duringTime',
                    dataType: "time"
                  },{
                    title: '单位及部门',
                    dataIndex: 'company',
                  }, {
                    title: '职务',
                    dataIndex: 'jobTitle',
                  }, {
                    title: '离职原因',
                    dataIndex: 'reasonsForLeaving',
                  }, {
                    title: '证明人',
                    dataIndex: 'referener',
                  }, {
                    title: '证明人联系电话',
                    dataIndex: 'referenerPhone',
                  }]
              } defaultValue={applyerInfo&&applyerInfo.workList} />
							</FormItem>
							{/* duringTime时间段（工作经历）
														String  company单位及部门
							String jobTitle职务
							String  reasonsForLeaving离职原因
							String  referener证明人
							String  referenerPhone证明人联系电话
													String learningIntroduction学习情况介绍 */}
						</Col>
						<Col span={24}>
							<FormItem  >
								<TextArea rows={4} label="工作业绩说明" name="workExperienceDescribe" defaultValue={applyerInfo&&applyerInfo.workExperienceDescribe} rules={[{max: 100, message: "工作业绩说明最多100个字符"}]}/>
							</FormItem>
						</Col>
					</Row>
					<h2>主要学习经历</h2>
					<Row gutter={24}>
						<Col span={24}>
							<FormItem  >
              <EditableFeild label="主要学习经历" name="studyList" columns={[{
                    title: '学习起止时间段',
                    dataIndex: 'studyTime',
                    dataType: "time"
                  },{
                    title: '所在学校',
                    dataIndex: 'school',
                  }, {
                    title: '学历及专业',
                    dataIndex: 'major',
                  }, {
                    title: '担任职务及获奖情况',
                    dataIndex: 'positionAwards',
                  }, {
                    title: '证明人',
                    dataIndex: 'referener',
                  }, {
                    title: '证明人联系电话',
                    dataIndex: 'referenerPhone',
                  }]
              } defaultValue={applyerInfo&&applyerInfo.studyList} />
							</FormItem>
							{/* studyTime学习起止时间段
										String  school所在学校
										String major学历及专业
			String positionAwards担任职务及获奖情况
			String  referener证明人
			String  referenerPhone证明人联系电话*/}
						</Col>
						<Col span={24}>
							<FormItem  >
								<TextArea rows={4} label="学习情况介绍" name="learningIntroduction" defaultValue={applyerInfo&&applyerInfo.learningIntroduction} rules={[{max: 100, message: "学习情况介绍最多100个字符"}]} />
							</FormItem>
						</Col>
					</Row>
					<Button type="primary" htmlType="button" onClick={this.handleSubmit.bind(this)}>保存</Button>
				</BaseForm>
			</div>
			:
			<div style={{position:"absolute",top:"50%",left:"50%",marginTop:"-25px",marginLeft:"-60px"}}>
					<img src="/static/images/sucesss.png" alt="" style={{verticalAlign: "middle"}}/>
					<span style={{display:"inline-block",verticalalign: "middle",paddingLeft:"10px"}}>提交成功</span>
			</div>
		);
	}
}
// 打包前开
// ReactDOM.render(
// 	<LocaleProvider locale={zh_CN}>
//   	<ApplyFormView/>
// 	</LocaleProvider>
// , createContainer())
