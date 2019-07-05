
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
		console.log(pathname,'===edit')
		if(pathname.indexOf("filds") != -1){
			selectedKey = "filds"
		}else if(pathname.indexOf("reason") != -1){
			selectedKey = "reason"
		}else if(pathname.indexOf("msg") != -1){
			selectedKey = "msg"
		}
		return (
			<Menu
				onClick={this.handleClick}
				selectedKeys={[selectedKey]}
				mode="inline"
				className='side-menu report-side'
			>	
			<MenuItemGroup key="g1" title="员工档案设置">
					<Menu.Item key="filds">
						<Link to={"member/setting/filds"}>
							<span>员工档案字段设置</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="msg">
						<Link to={{ pathname: "member/setting/msg" }}>
							<span>资料信息设置</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="reason">
						<Link to={{ pathname: "member/setting/reason" }}>
							<span>离职原因设置</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="others">
						<Link to={{ pathname: "member/setting/others" }}>
							<span>其他设置</span>
						</Link>
					</Menu.Item>
					</MenuItemGroup>
					<MenuItemGroup key="g2" title="通知提醒设置">
					<Menu.Item key="template">
						<Link to={{ pathname: "member/setting/template" }}>
							<span>通知模板设置</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="tips">
						<Link to={{ pathname: "member/setting/tips" }}>
							<span>员工相关提醒设置</span>
						</Link>
					</Menu.Item>
					</MenuItemGroup>
					<MenuItemGroup key="g3" title="属性设置">
					<Menu.Item key="logs">
						<Link to={{ pathname: "member/setting/logs" }}>
							<span>操作日志</span>
						</Link>
					</Menu.Item>
					</MenuItemGroup>
			</Menu>
		)
	}
}