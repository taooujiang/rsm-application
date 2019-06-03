import React, {Component} from 'react';
import {Row, Col, Icon, Tooltip} from 'antd'
import Ellipsis from 'app/components/Ellipsis'
import SmartLink from 'app/components/SmartLink'
import moment from 'moment'
import DictUtils from 'app/utils/DictUtils'
import styles from './style.less'

function filterNull(arr) {
	return arr.filter((it, idx) => it != "" && it != undefined && it != undefined + " - " + undefined)
}

function translateToNow(timeStr) {
	return timeStr == "9999-01-01" || timeStr == ''
		? "至今"
		: moment(timeStr).format("YYYY-MM-DD") 
}
/* lastJobEnd:"2018-07-01 00:00:00"
lastJobStart:"2017-07-01 00:00:00"
company:"",
lastJobTitle:"软件工程师"
lastMajor:"计算机科学与技术"
lastSchool:"运城学院"
lastSchoolEnd:"2017-06-01 00:00:00"
lastSchoolStart:"2013-09-01 00:00:00" */

export default class Intro extends Component {
	isCollegeOrWorkExpShow(...rest) {
		let arr = rest.filter((it, idx) => it != "" && it != undefined && it != undefined + " - " + undefined && it != " - ")
		return arr.length > 0
	}
	render() {
        let {item} = this.props
		// let itAge =(item.age != "" && item.age != undefined)  ?  item.age + '岁'  : null
		// itAge,item.education,
		// , item.ownerName
		let titleInfo = filterNull([DictUtils.getDictLabelByValue('sex',item.gender), DictUtils.getDictLabelByValue('education',item.degree)]).join(" · ")
		// let companyInfo = filterNull([
		// 	item.company, item.lastJobTitle, item.lastJobStart + " - " + translateToNow(item.lastJobEnd)
		// ]).join(" · ")
		let eduInfo = filterNull([
			item.school, item.marjor, moment( item.schoolStartDate).format("YYYY-MM-DD") + " - " + translateToNow(item.schoolEndDate)
		]).join(" · ")

		return (<div className="resumeRowInfo">
			<div className="base">
				<span className="name" style={{
						marginRight: 10
					}}>
					<SmartLink style={{
							color: '#323232'
						}} to={{
							pathname: `${item.graduateId ? item.graduateId: item.id}/detail`,
							state: {
								orgin: this.props.pathname
							}
						}}>{item.name}</SmartLink>
				</span>
				<Tooltip title={titleInfo}>{titleInfo}</Tooltip>
			</div>
			{
				this.isCollegeOrWorkExpShow(item.school, item.marjor, item.schoolStartDate + " - " + item.schoolEndDate)
					? <div style={{
								color: '#808080'
							}} className="edu-info">
							<SmartLink style={{
									color: '#323232'
								}} to={{
									pathname: `${item.graduateId ? item.graduateId: item.id}/detail`,
									state: {
										orgin: this.props.pathname
									}
								}}><Icon type="book" style={{
								marginRight: '5px'
							}}/>
								<Tooltip title={eduInfo}>{eduInfo}</Tooltip>
							</SmartLink>
						</div>
					: null
			} 
		</div>)
	}
}
