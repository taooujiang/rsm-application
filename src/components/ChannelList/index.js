import React, { Component } from 'react';
import { List } from "antd";
import DictUtils from 'app-utils/DictUtils'
import style from './style.less'
class ChannelList extends Component {
	loginChannel(keyValue){
		let keyUrl = DictUtils.getDictItemByValue("channel",keyValue).pop().keyURl2
		// console.log(keyUrl)
		global.invokeMethod('ShowPublicUrl',keyUrl)
	}
	render() {
		const{keyName,keyStr,channelKeyName,headerTitle,sortKey,loginStatus}=this.props
		let {dataSource}=this.props
		if(dataSource&&sortKey){
			dataSource=dataSource.sort((a,b)=>a[sortKey]-b[sortKey])
		}
		console.log("dataSource",dataSource)
		return(
			<List
				header={headerTitle?headerTitle:null}
			  className="channel-list"
				grid={{ column: 8 }}
				dataSource={dataSource}
				renderItem={item => (
					<List.Item style={{textAlign:'center'}}>
						{loginStatus ?
							<div><div style={{margin:'0 auto'}} className={item.isLogin ? "channel-img-"+ item[channelKeyName] : "channel-logout-img-"+ item[channelKeyName]} onClick={this.loginChannel.bind(this,item.id)}></div>
							<div>{item[keyName]?keyStr:''}</div></div>
							:
							<div><div style={{margin:'0 auto'}} className={"channel-img-"+ item[channelKeyName]} onClick={this.loginChannel.bind(this,item.keyValue)}></div>
							<div>{item[keyName]?keyStr:''}</div></div>
						}
					</List.Item>
				)}
			/>
		);
	}
}
ChannelList.defaultProps={
	channelKeyName:'keyValue',
	loginStatus:false
}
export default ChannelList;
