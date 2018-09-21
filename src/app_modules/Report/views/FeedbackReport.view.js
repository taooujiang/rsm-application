import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import { Layout, Button, Avatar, Checkbox, Cascader, Card,DatePicker } from 'antd';
import DataTable from 'app/components/DataTable'
import PageView from 'app/components/Page'
import AdvancedSearchForm from 'app/components/AdvancedSearch'
import CalendarPicker from 'app/components/CalendarPicker'
import moment from 'moment';

const CheckboxGroup = Checkbox.Group
const {RangePicker} = DatePicker

@NestedComponent()
export default class ReportListView extends PageView {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			exportParams:{time:[moment().subtract('days', 29),moment()]},
			defaultDate : [moment().subtract('days', 29),moment()]
		}
	}

	handleSubmit(value) {
    const{actions}=this.props
    console.log(value,'handleSubmitvaluevalue')
		this.setState({
			exportParams:value
		})
		actions.feedbackReportAction(value)
	}
	handleFilter(value){
		const{actions}=this.props

		actions.feedbackReportAction(value)
	}
	renderToolbar() {
    const ranges= {
      '今天': [
        moment(), moment()
      ],
      '近三天': [
        moment().add(-2,'days'), moment()
      ],
      '近七天': [
          moment().add(-6,'days'), moment()
      ],
      '近三十天': [
          moment().add(-29,'days'), moment()
      ]
    }
		return (
			<AdvancedSearchForm autoSubmitForm={false} filterSubmitHandler={this.handleSubmit.bind(this)} >
				<CalendarPicker key = {Math.random()} label="统计时间" name="time" defaultValue={this.state.defaultDate} />
        {/* <RangePicker label="统计时间" name="time" ranges={ranges} /> */}
			</AdvancedSearchForm>
		)
	}
	componentDidMount() {
		const { actions, routeParams: { type } } = this.props
		const{defaultDate}=this.state
		actions.feedbackReportAction({time:defaultDate})

	}

	exportExcel(){
		const{actions}=this.props
		actions.exportAction('/reportFeedback/export',this.state.exportParams)

	}
	renderTable() {
		let { reduce } = this.props
		let { spins: { tableSpin }, key, page } = reduce
		let list = reduce.recruitmentStatusList
		const tableConf = {
			loading: tableSpin,
			bordered:true,
			onChange:this.onChange.bind(this),
			dataSource: [],
			rowkey: 'orgId',
			columns: [{
				title: '招聘负责人',
				dataIndex: 'hrName',
				key: 'hrName',
				width: 100,

			}, {
				title: '面试反馈',
				children: [{
					title: '面试反馈总数',
					dataIndex: 'interviewTotalNum',
					key: 'interviewTotalNum',
					width: 100,
				}, {
					title: '优秀率',
					dataIndex: 'goodRate',
					key: 'goodRate',
					width: 100,
				}, {
					title: '良好率',
					dataIndex: 'fineRate',
					key: 'fineRate',
					width: 100,
				}, {
					title: '及格率',
					dataIndex: 'passRate',
					key: 'passRate',
					width: 100,
				}, {
					title: '不及格率',
					dataIndex: 'nopassRate',
					key: 'nopassRate',
					width: 100,
				}],
			}, {
				title: 'offer反馈',
				children: [{
					title: 'offer反馈总数',
					dataIndex: 'offerTotalNum',
					key: 'offerTotalNum',
					width: 100,
				}, {
					title: '接受率',
					dataIndex: 'acceptRate',
					key: 'acceptRate',
					width: 100,
				}, {
					title: '拒绝率',
					dataIndex: 'refuseRate',
					key: 'refuseRate',
					width: 100,
				},],
			}],
		}
		return (
			<DataTable key={Math.random().toString()} {...tableConf} dataSource={list} page={page} />
		)
	}
	render() {
		const { params, items } = this.props
		const { data } = this.state
		return (
			<Card title={this.renderToolbar()} extra={<Button onClick={this.exportExcel.bind(this)}>导出</Button>} >
				{this.renderTable()}
			</Card>
		)
	}
}
