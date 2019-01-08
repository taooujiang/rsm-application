import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import SettingTable from 'components/SystemSetting'
import PageView from 'app/components/Page'
import classnames from 'classnames'
import DictUtils from 'app/utils/DictUtils'
import DataTable from 'app/components/DataTable'
import { Button, Card ,Switch,List, Tag, Avatar } from "antd"

@NestedComponent()
export default class Adverse extends PageView {
	// componentWillMount() {

	// }
	componentDidMount = () => {
		const{actions} = this.props
		actions.channelListAction()
	}

	renderDescription(item){
		const{isJobImport,isJobRefresh,isMailResumeImport,isPlug,isResumeDownload,isResumeRecommend}=item
		return(
			<div className="channel-description">
				支持功能：
				<Tag className={classnames(isPlug?"choose":"")}>支持插件</Tag>
				<Tag className={classnames(isMailResumeImport?"choose":"")}>支持邮件简历导入</Tag>
				<Tag className={classnames(isResumeRecommend?"choose":"")}>支持简历推荐</Tag>
				<Tag className={classnames(isJobRefresh?"choose":"")}>支持职位刷新</Tag>
				<Tag className={classnames(isResumeDownload?"choose":"")}>支持简历下载</Tag>
				<Tag className={classnames(isJobImport?"choose":"")}>支持职位导入</Tag>
			</div>
		)
	}
	renderChannelList(){
		const{items,reduce:{spins:{tableSpin}}} = this.props
		// console.log(items,'items')
		// if(items.length&&items[0].channel){
		// 	console.log(DictUtils.getDictLabelByValue('channel',items[0].channel),'tran')
		// }
		//
		return(
			<List
          itemLayout="horizontal"
					dataSource={items}
					loading={tableSpin}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
								title={item.channel?item.channelName:void 0}
								avatar={<div className={"channel-img-"+item.channel}></div>}
								description={this.renderDescription(item)}
              />
            </List.Item>
          )}
        />
		)
	}
	render() {

		return (
			<Card title={<div><h3 className="card-title">支持渠道列表</h3></div>}	>
				{this.renderChannelList()}
			</Card>
		)
	}
}
