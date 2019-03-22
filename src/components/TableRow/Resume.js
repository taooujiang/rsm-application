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
	return timeStr == "9999-01-01"
		? "至今"
		: timeStr
}

export class PersonIconShow extends Component {
	renderIcon() {
		let iconArray = []
		let {item} = this.props
		if (item) {
			// item.havaSame
			// 	? iconArray.push(<SmartLink style={{
			// 			color: '#323232'
			// 		}} to={{
			// 			pathname: `${item.id}/samedetail`
			// 		}}><Icon type="icon-yisijianli" style={{
			// 			color: "#e9578a",
			// 			margin: '0 5px'
			// 		}} title="存在疑似简历"/></SmartLink>)
			// 	: null
			item.havaSame
				? iconArray.push(<SmartLink style={{
						color: '#323232'
					}} to={{
						pathname: `${item.id}/samedetail`
					}}><img width="16" style={{verticalAlign: 'text-bottom'}} src={require('app/themes/like.png')} title="存在疑似简历"/></SmartLink>)
				: null
			item.isLock
				? iconArray.push(<Icon type="icon-suoding" style={{
						color: '#f9744e',
						margin: '0 5px'
					}} title="已被锁定"/>)
				: null
			item.isFollowRemind
				? iconArray.push(<Icon type="icon-tubiao" style={{
						color: "#2fc4a4"
					}} title="已设置跟进提醒"/>)
				: null
		}
		return iconArray
	}
	render() {
		let {item} = this.props
		//console.log(item)
		return this.renderIcon()
	}
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
		let titleInfo = filterNull([item.sexStr, item.ageStr, item.education, item.workYear]).join(" · ")
		let companyInfo = filterNull([
			item.company, item.lastJobTitle, item.lastJobStart + " - " + translateToNow(item.lastJobEnd)
		]).join(" · ")
		let eduInfo = filterNull([
			item.lastSchool, item.lastMajor, item.lastSchoolStart + " - " + translateToNow(item.lastSchoolEnd)
		]).join(" · ")

		return (<div className="resumeRowInfo">
			<div className="base">
				<span className="name" style={{
						marginRight: 10
					}}>
					<SmartLink style={{
							color: '#323232'
						}} to={{
							pathname: `${item.id}/detail`,
							state: {
								orgin: this.props.pathname
							}
						}}>{item.name}</SmartLink>
				</span>
				<PersonIconShow item={item}/>
				<Tooltip title={titleInfo}>{titleInfo}</Tooltip>
			</div>
			{
				this.isCollegeOrWorkExpShow(item.company, item.lastJobTitle, item.lastJobStart + " - " + item.lastJobEnd)
					? <div style={{
								color: '#808080'
							}} className="company-info">
							<SmartLink style={{
									color: '#323232'
								}} to={{
									pathname: `${item.id}/detail`,
									state: {
										orgin: this.props.pathname
									}
								}}><Icon type="idcard" style={{
								marginRight: '5px'
							}}/>
								<Tooltip title={companyInfo}>{companyInfo}</Tooltip>
							</SmartLink>
						</div>
					: null
			}
			{
				this.isCollegeOrWorkExpShow(item.lastSchool, item.lastMajor, item.lastSchoolStart + " - " + item.lastSchoolEnd)
					? <div style={{
								color: '#808080'
							}} className="edu-info">
							<SmartLink style={{
									color: '#323232'
								}} to={{
									pathname: `${item.id}/detail`,
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
