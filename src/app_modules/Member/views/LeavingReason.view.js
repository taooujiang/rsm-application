import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import SettingTable from 'components/SystemSetting'
import PageView from 'app/components/Page'
import DataTable from 'app/components/DataTable'
import { Button, Card, } from "antd"
@NestedComponent()
export default class LeavingReason extends PageView {

	componentWillMount() {
		const {actions} = this.props
		actions.optionListAction({optionCode:"file_reasons"})
	}

	render() {
		const tableConfig = {
			thTitle: "离职原因",
			title: "离职原因设置",
			subTitle: "用于员工离职时选择的离职原因。",
			routeName:'reason',
			// router:''
		}
		return (
			<SettingTable {...this.props} {...tableConfig} />
		)
	}
}
