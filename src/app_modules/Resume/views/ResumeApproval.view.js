import React, {Component, PropTypes} from 'react'
import {
	Button,
	Input,
	Table,
	Select,
	DatePicker,
	Modal,
	Menu,
	Checkbox,
	Radio,
	message,
	Tag,
	Card,
	Popover,
	Dropdown,
	Icon
} from 'antd'
import {Link} from 'react-router'
import moment from 'moment'
import PageView from 'app/components/Page'
import AdvancedSearchForm from 'app/components/AdvancedSearch'
import {Layout, Fixed, Pane} from 'app/components/Layout'
import DataTable from 'app/components/DataTable'
import BaseForm, {FormItem, customRules} from 'app/components/BaseForm'
import ButtonGroups from 'app/components/ButtonGroups'
import ButtonGroupExt from 'app/components/ButtonGroupExt'
import PersonInfoShow from 'app/components/TableRow/Resume'
import DictUtils from 'app/utils/DictUtils'
import NestedComponent from 'app/decorators/NestedComponent'
import SmartLink from 'app/components/SmartLink'

import ResumeFolderListView from './ResumeFolderList.view'
import API from '../api'
import styles from './styles.less'

const Option = Select.Option
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

@NestedComponent()
export default class ResumeApprovalView extends PageView {

	// constructor(props){
	//   super(props)
	// }

	componentWillMount() {
		let {actions, router, children, params} = this.props;
		// console.log(params)
		// console.log(params)
		// message.info(1111)
		if (JSON.stringify(params) == "{}" || params.resumeId != undefined) {
			actions.listAction({type: 1})
			actions.approvalRealAction({type: 1})
			actions.approvalReportAction({type: 1})
		} else {
			actions.listAction(params)
			actions.approvalRealAction(params)
			actions.approvalReportAction(params)
		}
	}
	componentWillReceiveProps(nextProps) {
		let {actions, router, children} = this.props;
		if (JSON.stringify(this.props.reduce.params) !== JSON.stringify(nextProps.reduce.params)) {
			this.setState({selectedRows: [], selectedRowKeys: []})
			console.log("recevice111")
			//console.log(nextProps.reduce.params)
			actions.approvalRealAction(nextProps.reduce.params)
			actions.approvalReportAction(nextProps.reduce.params)
		}
		if (JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)) {
			if (nextProps.location.state && nextProps.location.state.key == "reload" && nextProps.location.state.listRefresh) {
				this.setState({
					selectedRows: [],
					selectedRowKeys: []
				}, () => {
					console.log("clear state select")
				})
				console.log("recevice222")
				actions.approvalRealAction(Object.assign({}, nextProps.reduce.params, nextProps.reduce.page))
				actions.approvalReportAction(nextProps.reduce.params)
			}
		}
	}
	handleRadioChange(values) {
		let {actions, reduce: {
				params
			}} = this.props
		let {target: {
				value
			}} = values
		actions.listAction({type: value})
	}
	formRef(form) {
		this.form = form
	}
	handleFilter(value) {
		let {actions} = this.props
		actions.approvalRealAction(value)
	}
	renderSearchBar() {
		let {
			reduce: {
				count,
				checks
			},
			params
		} = this.props
		return (<AdvancedSearchForm classNames="radioGroupResetFormItem" autoSubmitForm={false} filterSubmitHandler={this.handleFilter.bind(this)} isSearchBtnHide={true} ref={this.formRef.bind(this)}>
			<RadioGroup className="resumeStatus radioGroupReset" name="type" onChange={this.handleRadioChange.bind(this)} defaultValue={1}>
				<RadioButton value="1">待审批<span className="count">{count.dclNum}</span>
				</RadioButton>
				<RadioButton value="2">已审批<span className="count">{count.yclNum}</span>
				</RadioButton>
			</RadioGroup>
		</AdvancedSearchForm>)
	}

	renderTableList() {
		let that = this;
		let {reduce, actions, items} = this.props
		let {spins: {
				tableSpin
			}, key,params:{type}} = reduce
			// console.log(items)
		let page = reduce.page
		let pathname = this.props.location.pathname
		/* 筛选和邀约 */
		let columns = [
			{
				title: "姓名",
				key: "name",
				dataIndex: "name",
				width: 120,
				render: (val, row) => {
					return <SmartLink style={{
							color: '#323232'
						}} to={{
							pathname: `${row.resumeId}/detail`,
							state: {
								orgin: pathname
							}
						}}>{val}</SmartLink>
				}
			}, {
				title: "应聘职位",
				key: "jobTitle",
				dataIndex: "jobTitle",
				width: 150
			}, {
				title: "应聘部门",
				key: "dept",
				dataIndex: "dept",
				width: 150
			}, {
				title: "招聘负责人",
				key: "manage",
				dataIndex: "manage",
				width: 150
			}, {
				title: "offer审批发起时间",
				key: "offertime",
				dataIndex: "offertime",
				width: 120
			}
		]
		if(type == 2){
			 columns.push({
				title: "审批状态",
				key: "status",
				dataIndex: "status",
				width: 120,
				render:(val)=>{
					/*0 待审批 1 通过 2 驳回*/
					/*只有已审批才有该选项 所以只有1 2 两个选项*/
					return val == 1 ? "通过" : "驳回"
				}
			})
		}

		let tableConf = {
			loading: tableSpin,
			rowKey: "id",
			dataSource: items,
			columns: columns,
			onChange: this.onChange.bind(this)
		}

		return (<DataTable {...tableConf} page={page}/>)
	}

	render() {
		let {children} = this.props
		//模版没有好的解决方案，暂时这样处理
		//console.log(children)

		// if(children && children.type && children.type.WrappedComponent==ResumeFolderListView){
		//     return React.cloneElement(children)
		// }else{
		return (<Card className="resumeCard" type="inner" title={this.renderSearchBar()}>
			{this.renderTableList()}
		</Card>)
		// }
	}
}
