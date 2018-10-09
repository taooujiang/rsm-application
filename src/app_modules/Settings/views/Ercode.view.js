import React, { Component } from 'react'
import PageView from 'app/components/Page'
import NestedComponent from "app/decorators/NestedComponent";
import WrapperComponent from 'app/decorators/WrapperComponent'
import {ModalViewQrCode} from 'app/components/Modal.view'



export default class Ercode extends PageView {
	render(){
		return <img src='/getQRCode' style={{width:200}}/>
	}
}
