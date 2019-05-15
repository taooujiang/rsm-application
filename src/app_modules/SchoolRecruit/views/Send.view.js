import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Timeline ,
	Row,
	Avatar,
	Col,
	Button,
	Input,
	Table,
	Dropdown,
	Menu,
	Select,
	Modal,
	Tabs,
	Icon
} from 'antd'
import {Link} from 'react-router'
import {routerActions, push, replace} from 'react-router-redux'
import WrapperComponent from "app/decorators/WrapperComponent"
import BaseForm,{FormItem} from 'app/components/BaseForm'
import NestedComponent from 'app/decorators/NestedComponent'
import PersonInfo, {
	PersonTabBaseInfo,
	PersonOffer,
	PersonOption,
	PersonRemarks,
	PersonCommunitcate,
	PersonOptionRecord,
	PersonFeedRecord,
	ExtraInformation
} from 'app/components/PersonInfo'
import DictUtils from 'app-utils/DictUtils'
import classnames from 'classnames'
import {permissionStyle} from "app/utils/ConfigUtils";
import SmartLink from 'app/components/SmartLink'
// import ResumeDownload from './DownloadModal.view'
import Layout, {Fixed, Pane} from 'app/components/Layout'

const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;



@NestedComponent()
export default class PersonInfoDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:''
		}
	}

	render() {
       let {name,id}=this.props
		return (<BaseForm
            onSubmit={this.handleSubmit} 
            ref={this.saveFormRef} 
            className="products-form">
                   <FormItem className="row-hidden">
                        <Input name="id" type="hidden" defaultValue={id} />
                   </FormItem>
                   <FormItem>
                        <Select name="industry" label="校招职位名称" placeholder="请选择"  fetch={DictUtils.getDictByType("industry")} renderItem={this.renderSelectOption} />
                   </FormItem>
                   
           </BaseForm>
        )
}
}

