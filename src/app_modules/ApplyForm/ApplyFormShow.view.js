import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Input, Modal, Select, Row, Col, Cascader,Table,Button,Icon,Radio,Popconfirm,DatePicker,message } from 'antd'
import DictUtils from 'app/utils/DictUtils'
import moment from 'moment'
import style from './ApplyForm.less'

class BaseItem extends Component{
  render(){
    return(
      <Col span={this.props.span}>
        <div className="contentBase">
          <label>{this.props.label}：</label>
          <span>{this.props.info}</span>
        </div>
      </Col>
    )
  }
}

function translateDic(dicname,val){
  return val ? DictUtils.getDictLabelByValue(dicname,val) : ""
}

function translateTime(time,format){
  return format ? moment(time).format(format) : moment(time).format("YYYY-MM-DD")
}

function houseStatusFn(value){
  let arr = [{keySort:1,keyName:"自有住房",keyValue:"自有住房"},{keySort:2,keyName:"借住亲友",keyValue:"借住亲友"},{keySort:3,keyName:"租房居住",keyValue:"租房居住"},{keySort:4,keyName:"单位宿舍",keyValue:"单位宿舍"}]
  return value ? arr.filter((it,idx)=>it.keySort == value).pop().keyValue : ''
}

export default class ApplyFormView extends Component{
  render(){
    let { info } = this.props
//     info = {
//   "orderKey" : "",
//   "keyType" : "",
//   "keyWord" : "",
//   "id" : "d79f8318e3164eba8c484d0792c75022",
//   "orgId" : "473dc72ab47449ee83848ac210b5c1e8",
//   "interviewId" : "bee2b35ce7434d7ab9fc452905f8fb29",
//   "resumeId" : "5e0ae57220a845e88412376aa720d2b8",
//   "jobId" : "4b2616d5fdbc4e3587dd6ceee9254e69",
//   "jobTitle" : "技术支持",
//   "interviewTime" : "2018-10-11 09:00:00",
//   "name" : "唐叶贝",
//   "sex" : 2,
//   "birthTime" : "1994-01-01 00:00:00",
//   "politicsStatus" : 3,
//   "national" : "",
//   "nativePlace" : "",
//   "idCard" : "",
//   "residenceAddress" : "",
//   "residenceDdressDetail" : "",
//   "residenceStatus" : "",
//   "currentAddress" : "杭州",
//   "currentAddressDetail" : "",
//   "houseStatus" : "",
//   "maritalStatus" : "",
//   "physicalCondition" : "",
//   "education" : "",
//   "degree" : "",
//   "lastMajor" : "",
//   "minorMajor" : "",
//   "lastSchool" : "",
//   "lastSchoolEnd" : "",
//   "skillCertificate" : "",
//   "englishLevel" : "",
//   "mobilephone" : "18814859623",
//   "email" : "",
//   "urgencyName" : "",
//   "urgencyPhone" : "",
//   "predictTime" : "",
//   "currentSalary" : "",
//   "expectedSalary" : "",
//   "hobby" : "",
//   "otherRequirements" : "",
//   "developmentPlan" : "",
//   "relationship" : "",
//   "workExperience" : "[{\"company\":\"乐购\",\"duringEnd\":1422720000000,\"duringStart\":1417363200000,\"duringTime\":[1417363200000,1422720000000],\"jobTitle\":\"收银员\",\"reasonsForLeaving\":\"\",\"referener\":\"\",\"referenerPhone\":\"\"}]",
//   "workExperienceDescribe" : "",
//   "learningExperience" : "",
//   "learningIntroduction" : "",
//   "inputAcc" : "",
//   "inputTime" : "2018-10-11 15:27:38",
//   "updateTime" : "",
//   "isDel" : 0,
//   "relationshipList" : [ ],
//   "studyList" : [ ],
//   "workList" : [ {
//     "duringTime" : [ 1417363200000, 1422720000000 ],
//     "duringStart" : 1417363200000,
//     "duringEnd" : 1422720000000,
//     "company" : "乐购",
//     "jobTitle" : "收银员",
//     "reasonsForLeaving" : "",
//     "referener" : "",
//     "referenerPhone" : ""
//   } ]
// }
    let relationshipCol = [{
          title: '称谓',
         dataIndex: 'relationship',
       },{
         title: '姓名',
         dataIndex: 'name',
       }, {
         title: '年龄',
         dataIndex: 'age',
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
     let worklistCol = [{
           title: '时间',
           dataIndex: 'duringTime',
           dataType: "time",
           render:(val)=>{
             return val.map((it)=>translateTime(it)).join(" - ")
           }
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
      let studylistCol = [{
            title: '学习起止时间段',
            dataIndex: 'studyTime',
            dataType: "time",
            render:(val)=>{
              return val.map((it)=>translateTime(it)).join(" - ")
            }
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
    return(
      <div className="ApplyFormShowBox">
        <h3 className="title">面试信息登记</h3>
        <div className="form-subtitle">
          <div className="interview-info">
            <span>应聘职位：{info&&info.jobTitle}</span>
            <span className="interview-date">面试时间：{info&&info.interviewTime&&moment(info.interviewTime?info.interviewTime:undefined).format("YYYY-MM-DD HH:mm")}</span>
          </div>
        </div>
        <div className="content">
          <h3>基本信息</h3>
          <Row>
            <BaseItem span={12} label="姓名" info={info&&info.name}/>
            <BaseItem span={12} label="性别" info={translateDic("sex",info&&info.sex)}/>
            <BaseItem span={12} label="出生日期" info={translateTime(info&&info.birthTime)}/>
            <BaseItem span={12} label="政治面貌" info={translateDic("political",info&&info.politicsStatus)}/>
            <BaseItem span={12} label="民族" info={translateDic("national",info&&info.national)}/>
            <BaseItem span={12} label="籍贯" info={info&&info.nativePlace}/>
            <BaseItem span={12} label="身份证号" info={info&&info.idCard}/>
            <BaseItem span={12} label="户籍性质" info={info&&info.residenceStatus}/>
            <BaseItem span={12} label="户籍所在地" info={info&&info.residenceAddress}/>
            <BaseItem span={12} label="现住地址" info={info&&info.currentAddress}/>
            <BaseItem span={12} label="本市住房情况" info={houseStatusFn(info&&info.houseStatus)}/>
            <BaseItem span={12} label="婚姻状况" info={translateDic("maritalstatus",info&&info.maritalStatus)}/>
            <BaseItem span={12} label="身体状况" info={info&&info.physicalCondition}/>
            <BaseItem span={12} label="学历" info={translateDic("education",info&&info.education)}/>
            <BaseItem span={12} label="学位" info={translateDic("qualification",info&&info.degree)}/>
            <BaseItem span={12} label="所学专业" info={info&&info.lastMajor}/>
            <BaseItem span={12} label="辅修专业" info={info&&info.minorMajor}/>
            <BaseItem span={12} label="毕业学校" info={info&&info.lastSchool}/>
            <BaseItem span={12} label="毕业时间" info={translateTime(info&&info.lastSchoolEnd)}/>
            <BaseItem span={12} label="资格技能证书" info={info&&info.skillCertificate}/>
            <BaseItem span={12} label="英语水平" info={info&&info.englishLevel}/>
            <BaseItem span={12} label="本人联系电话" info={info&&info.mobilephone}/>
            <BaseItem span={12} label="邮箱地址" info={info&&info.email}/>
            <BaseItem span={12} label="紧急联系人姓名" info={info&&info.urgencyName}/>
            <BaseItem span={12} label="紧急联系人电话" info={info&&info.urgencyPhone}/>
            <BaseItem span={12} label="预计到岗时间" info={translateTime(info&&info.predictTime)}/>
            <BaseItem span={12} label="目前薪酬" info={info&&info.currentSalary}/>
            <BaseItem span={12} label="期望薪酬福利" info={info&&info.expectedSalary}/>
            <BaseItem span={24} label="爱好特长" info={info&&info.hobby}/>
            <BaseItem span={24} label="其他要求" info={info&&info.otherRequirements}/>
            <BaseItem span={24} label="个人发展计划" info={info&&info.developmentPlan}/>
          </Row>
          <Table style={{height:'300px'}} pagination={false} columns={relationshipCol} dataSource={info&&info.relationshipList} title={()=>'主要家庭成员及社会关系'}/>
          <Table style={{height:'300px'}} pagination={false} columns={worklistCol} dataSource={info&&info.workList} title={()=>'工作经历'}/>
          <Row><BaseItem span={24} label="工作业绩说明" info={info&&info.workExperienceDescribe}/></Row>
          <Table style={{height:'300px'}} pagination={false} columns={studylistCol} dataSource={info&&info.studyList} title={()=>'主要学习经历'}/>
          <Row><BaseItem span={24} label="学习情况介绍" info={info&&info.learningIntroduction}/></Row>
        </div>
      </div>
    )
  }
}
