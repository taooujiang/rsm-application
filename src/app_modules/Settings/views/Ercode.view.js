import React, { Component } from 'react'
import PageView from 'app/components/Page'
import WrapperComponent from 'app/decorators/WrapperComponent'
import {ModalViewQrCode} from 'app/components/Modal.view'


@WrapperComponent(ModalViewQrCode)
export default class Ercode extends PageView {
	render(){
		return <img src='/getQRCode' style={{width:200,display:"block",margin:"0 auto"}}/>
	}
}
