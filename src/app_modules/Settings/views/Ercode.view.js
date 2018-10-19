import React, { Component } from 'react'
import PageView from 'app/components/Page'
import NestedComponent from "app/decorators/NestedComponent";
import WrapperComponent from 'app/decorators/WrapperComponent'
import {ModalViewQrCode} from 'app/components/Modal.view'



export default class Ercode extends PageView {
	componentDidMount(){
		let {params} = this.props
		if(params.client == 1){
			document.body.querySelector(".app").style.cssText = "width:300px;height:300px;padding: 40px 0 0 40px;"
		}
	}
	render(){
		return <img src='/getQRCode' style={{width:200}}/>
	}
}
