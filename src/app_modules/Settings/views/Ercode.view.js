import React, { Component } from 'react'
import { Button, Card } from "antd"
import PageView from 'app/components/Page'
import DataTable from 'app/components/DataTable'
import ButtonGroupExt from 'app/components/ButtonGroupExt'
import ButtonGroups from 'app/components/ButtonGroups'
import API from '../api'
import WrapperComponent from 'app/decorators/WrapperComponent'
import ModalView,{ModalWidthView,ModalDetailView} from 'app/components/Modal.view'


@WrapperComponent(ModalView)
export default class Ercode extends PageView {
	render(){
		return <img src='/getQRCode' style={{width:200,display:"block",margin:"0 auto"}}/>
	}
}
