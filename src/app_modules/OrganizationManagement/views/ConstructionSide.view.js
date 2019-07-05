
import React, {Component, PropTypes} from 'react'
import {Menu, Button, Input, Table, Form, DatePicker,Card,Switch,Row,Col,Select,Checkbox,Radio  } from 'antd'
import {Layout,Fixed,Pane} from 'components/Layout'
import PageView,{FormPage} from 'components/Page'
import CalendarPicker from 'components/CalendarPicker'
import DataTable from 'components/DataTable'
import moment from 'moment'
const {RangePicker} = DatePicker;
const RadioGroup = Radio.Group;
import ErrorBoundary from 'components/ErrorBoundary'
import { Link } from 'react-router'
import style from './styles.less'
const MenuItemGroup = Menu.ItemGroup;

export default class ConstructionSide extends Component {
	componentDidMount() {
		const { actions } = this.props
	}

	render() {
		const { location:{pathname},} = this.props
		let selectedKey = pathname.split('/').pop()
		if(pathname.indexOf("construction") != -1){
			selectedKey = "construction"
		}else if(pathname.indexOf("jobCategory") != -1){
			selectedKey = "jobCategory"
		}else if(pathname.indexOf("rankManagement") != -1){
			selectedKey = "rankManagement"
		}
		return (
			<Menu
				onClick={this.handleClick}
				selectedKeys={[selectedKey]}
				mode="inline"
				className='side-menu report-side'
			>
					<Menu.Item key="construction">
						<Link to={"/organization/construction"}>
							<span>组织结构</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="jobCategory">
						<Link to={{ pathname: "organization/jobCategory" }}>
							<span>岗位类别</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="rankManagement">
						<Link to={{ pathname: "organization/rankManagement" }}>
							<span>职级管理</span>
						</Link>
					</Menu.Item>
			</Menu>
		)
	}
}