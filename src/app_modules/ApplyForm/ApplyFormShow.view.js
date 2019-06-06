import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
	Input,
	Modal,
	Select,
	Row,
	Col,
	Cascader,
	Table,
	Button,
	Icon,
	Radio,
	Popconfirm,
	DatePicker,
	message
} from 'antd'
import DictUtils from 'app/utils/DictUtils'
import classnames from 'classnames'
import moment from 'moment'
import style from './ApplyForm.less'

class BaseItem extends Component {
	render() {
		return (<Col span={this.props.span}>
			<div className={classnames("contentBase",this.props.othclassname)}>
				<label>{this.props.label}：</label>
				<span>{this.props.info}</span>
			</div>
		</Col>)
	}
}

function translateDic(dicname, val) {
	return val
		? DictUtils.getDictLabelByValue(dicname, val)
		: ""
}

function translateTime(time, format) {
	if (time) {
		if (moment(time).format("YYYY-MM-DD") == "9999-01-01") {
			return "至今"
		} else {
			return format
				? moment(time).format(format)
				: moment(time).format("YYYY-MM-DD")
		}
	} else {
		return ""
	}
}

function houseStatusFn(value) {
	let arr = [
		{
			keySort: 1,
			keyName: "自有住房",
			keyValue: "自有住房"
		}, {
			keySort: 2,
			keyName: "借住亲友",
			keyValue: "借住亲友"
		}, {
			keySort: 3,
			keyName: "租房居住",
			keyValue: "租房居住"
		}, {
			keySort: 4,
			keyName: "单位宿舍",
			keyValue: "单位宿舍"
		}
	]
	return value
		? arr.filter((it, idx) => it.keySort == value).pop().keyValue
		: ''
}

export default class ApplyFormView extends Component {
	renderWorkList(worklist){
		console.log(worklist)
		return worklist ? worklist.map(it=>{
			return <ul className="worklist-box">
				<li>
					<span>{it.duringTime.map(it=>translateTime(it)).join('-')}</span>
					<span>{it.company}</span>
					<span>{it.jobTitle}</span>
				</li>
				<li>
					离职原因:{it.reasonsForLeaving || '无'}
				</li>
			</ul>
		}) : null
	}
	renderStudyList(studylist){
		console.log(studylist)
		return	studylist ? studylist.map(it=>{
			return <ul className="studylist-box">
				<li>
					<span>{it.studyTime.map(it=>translateTime(it)).join('-')}</span>
					<span>{it.school}</span>
					<span>{it.major}</span>
				</li>
				<li>
					担任职务及获奖情况:{it.positionAwards || '无'}
				</li>
			</ul>
		}) : null
	}
	render() {
		let {info, handlePrinter,handleDowload} = this.props
		let relationshipCol = [
			{
				title: '称谓',
				dataIndex: 'relationship'
			}, {
				title: '姓名',
				dataIndex: 'name'
			}, {
				title: '年龄',
				dataIndex: 'age',
				render: (val) => {
					return val == 0
						? ""
						: val
				}
			}, {
				title: '所在单位',
				dataIndex: 'company'
			}, {
				title: '职务',
				dataIndex: 'position'
			}, {
				title: '联系方式 ',
				dataIndex: 'relationPhone'
			}
		]
		let worklistCol = [
			{
				title: '时间',
				dataIndex: 'duringTime',
				dataType: "time",
				render: (val) => {
					return val.map((it) => translateTime(it)).join(" - ")
				}
			}, {
				title: '单位及部门',
				dataIndex: 'company'
			}, {
				title: '职务',
				dataIndex: 'jobTitle'
			}, {
				title: '离职原因',
				dataIndex: 'reasonsForLeaving'
			}, {
				title: '证明人',
				dataIndex: 'referener'
			}, {
				title: '证明人联系电话',
				dataIndex: 'referenerPhone'
			}
		]
		let studylistCol = [
			{
				title: '学习起止时间段',
				dataIndex: 'studyTime',
				dataType: "time",
				render: (val) => {
					return val.map((it) => translateTime(it)).join(" - ")
				}
			}, {
				title: '所在学校',
				dataIndex: 'school'
			}, {
				title: '学历及专业',
				dataIndex: 'major'
			}, {
				title: '担任职务及获奖情况',
				dataIndex: 'positionAwards'
			}, {
				title: '证明人',
				dataIndex: 'referener'
			}, {
				title: '证明人联系电话',
				dataIndex: 'referenerPhone'
			}
		]
		return (<div className="ApplyFormShowBox" id="apply-form-box">
			<h3 className="title">面试信息登记</h3>
			<div className="form-subtitle">
				<div className="interview-info">
					<span>应聘职位：{info && info.jobTitle}</span>
					<span className="interview-date">面试时间：{
							info && info.interviewTime && moment(
								info.interviewTime
								? info.interviewTime
								: undefined).format("YYYY-MM-DD HH:mm")
						}</span>
					<Icon onClick={handlePrinter} type='printer' className="printerBtn"/>
					<Icon  className="downloadBtn" type="download" title='下载信息登记表' onClick={handleDowload}/>&#x3000;
				</div>
			</div>
			<div className="content">
				<h3 className="part-title">基本信息</h3>
				<Row>
					<BaseItem span={12} label="姓名" info={info && info.name}/>
					<BaseItem span={12} label="性别" info={translateDic("sex", info && info.sex)}/>
					<BaseItem span={12} label="出生日期" info={translateTime(info && info.birthTime)}/>
					<BaseItem span={12} label="政治面貌" info={translateDic("political", info && info.politicsStatus)}/>
					<BaseItem span={12} label="民族" info={translateDic("national", info && info.national)}/>
					<BaseItem span={12} label="籍贯" info={info && info.nativePlace}/>
					<BaseItem span={12} label="身份证号" info={info && info.idCard}/>
					<BaseItem span={12} label="户籍性质" info={translateDic("residenceStatus", info && info.residenceStatus)}/>
					<BaseItem span={12} label="户籍所在地" info={info && info.residenceAddress}/>
					<BaseItem span={12} label="现住地址" info={info && info.currentAddress}/>
					<BaseItem span={12} label="本市住房情况" info={houseStatusFn(info && info.houseStatus)}/>
					<BaseItem span={12} label="婚姻状况" info={translateDic("maritalstatus", info && info.maritalStatus)}/>
					<BaseItem span={12} label="身体状况" info={info && info.physicalCondition}/>
					<BaseItem span={12} label="学历" info={translateDic("education", info && info.education)}/>
					<BaseItem span={12} label="学位" info={translateDic("qualification", info && info.degree)}/>
					<BaseItem span={12} label="所学专业" info={info && info.lastMajor}/>
					<BaseItem span={12} label="辅修专业" info={info && info.minorMajor}/>
					<BaseItem span={12} label="毕业学校" info={info && info.lastSchool}/>
					<BaseItem span={12} label="毕业时间" info={translateTime(info && info.lastSchoolEnd)}/>
					<BaseItem span={12} label="资格技能证书" info={info && info.skillCertificate}/>
					<BaseItem span={12} label="英语水平" info={info && info.englishLevel}/>
					<BaseItem span={12} label="本人联系电话" info={info && info.mobilephone}/>
					<BaseItem span={12} label="邮箱地址" info={info && info.email}/>
					<BaseItem span={12} label="紧急联系人姓名" info={info && info.urgencyName}/>
					<BaseItem span={12} label="紧急联系人电话" info={info && info.urgencyPhone}/>
					<BaseItem span={12} label="预计到岗时间" info={translateTime(info && info.predictTime)}/>
					<BaseItem span={12} label="目前薪酬" info={info && info.currentSalary}/>
					<BaseItem span={12} label="期望薪酬福利" info={info && info.expectedSalary}/>
					<BaseItem span={24} label="爱好特长" info={info && info.hobby}/>
					<BaseItem span={24} label="其他要求" info={info && info.otherRequirements}/>
					<BaseItem span={24} label="个人发展计划" info={info && info.developmentPlan}/>
				</Row>
				<Table className="apply-show-table" style={{
						height: 'auto'
					}} pagination={false} columns={relationshipCol} dataSource={info && info.relationshipList} title={() => '主要家庭成员及社会关系'}/>
				<h3 className="part-title">工作经历</h3>
				{this.renderWorkList(info.workList)}
				{/*<Row><BaseItem span={24} othclassname="tips-title" label="工作业绩说明" info={info && info.workExperienceDescribe}/></Row>
				<Row><BaseItem span={24} othclassname="tips-title" label="学习情况介绍" info={info && info.learningIntroduction}/></Row>*/}
				<Row>
					<h3 className="part-title">工作业绩说明</h3>
					<span className="tips-title">{info && info.workExperienceDescribe}</span>
				</Row>
				<h3 className="part-title">学习经历</h3>
				{this.renderStudyList(info.studyList)}
				<Row>
					<h3 className="part-title">学习情况介绍</h3>
					<span className="tips-title">{info && info.learningIntroduction}</span>
				</Row>

			{/*<Table className="apply-show-table" style={{
						height: 'auto'
					}} pagination={false} columns={worklistCol} dataSource={info && info.workList} title={() => '工作经历'}/>
				<Table className="apply-show-table" style={{
						height: 'auto'
					}} pagination={false} columns={studylistCol} dataSource={info && info.studyList} title={() => '主要学习经历'}/>
			*/}
			</div>
		</div>)
	}
}
