import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
	Row,
	Avatar,
	Col,
	Button,
	DatePicker,
	Input,
	Table,
	Card,
	Tag,
	message,
	List,
	Collapse,
	Dropdown,
	Tabs,
	Select,
	Checkbox,
	Steps,
	Timeline,
	Upload,
	Spin,
	Modal,
	Rate,
	Radio,
	Menu,
	Popconfirm,
	Switch,
	Icon
} from 'antd'
import {hasPermission, permissionStyle} from 'app/utils/ConfigUtils'
import moment from 'moment'
import DictUtils from 'app/utils/DictUtils'

const Step = Steps.Step;
const ButtonGroup = Button.Group

/*导入小组件*/
import  {
  BaseInfoItem,
  InfoInline,
	translateDic,
} from './little'
/* 右侧操作 */

/* * 简历 - 无权限 -  无权限按钮 （不考虑锁定）
*      - 有权限 - 向下继续判定是否锁定

*      - 锁定状态 - 锁定按钮
*      - 未锁定  - 简历按钮

*      - 简历阶段 0 1 2 3 4

* 人才库 - 锁定状态 - 人才库锁定按钮
*        - 未锁定 人才库按钮
* 待分配 -待分配按钮
* 诚信 - 诚信库按钮


type :resume elite credit allocat
status 0 1 2 3 4 */

/*简历 右侧头部家里阶段类*/
class PersonStage extends Component {
	renderStageLine() {
		let {type, item: {
				status
			}} = this.props
		if (type == "resume") {
			return (<Steps progressDot="progressDot" current={status} className="resumeStatus">
				<Step title="筛选"/>
				<Step title="邀约"/>
				<Step title="面试"/>
				<Step title="offer"/>
				<Step title="待入职"/>
			</Steps>)
		}
		return null
	}
}

export default class PersonOption extends PersonStage {
	render() {
		let {item: {
				status
			}} = this.props
		return (<div className="person-edit-option">
			{this.renderStageLine()}
			<OptionButtons {...this.props} status={status}/>
		</div>)
	}
}
PersonOption.defaultProps = {
	type: "resume",
	status: 1
}

/* 按钮状态判断总组件 */
class OptionButtons extends Component {
	renderWhich() {
		let {
			actions,
			router,
			type,
			status,
			item,
			isSame
		} = this.props
		let {isLock, authorization, defined7, offerApprovalDto} = item
		/* 先判断是否为共享诚信库 */
		if (offerApprovalDto && offerApprovalDto.id) {
			return <OptionButtonOfferJudge {...this.props}/>
		}
		// console.log(defined7,item,"skldfjklsdkljf")
		if (defined7 === 0) {
			return <OptionButtonsCreditShare {...this.props}/>
		}
		/* 下面分别为简历人才待分配诚信 不分先后type */
		if (type == 'resume') {
			if (!authorization) {
				return <OptionButtonsSame {...this.props}/>
			}
			return isLock == 1
				? <OptionButtonsLock {...this.props}/>
				: <OptionButtonsResume {...this.props}/>
		}
		if (type == 'elite') {
			return (<div className="elite-head">
				{
					isLock == 1
						? <h2>该候选人已被锁定</h2>
						: null
				}
				<dl>
					<dt>入库时间：</dt>
					<dd>{item.filingTime}</dd>
				</dl>
				<dl>
					<dt>操作者：</dt>
					<dd>{item.filingAcc}</dd>
				</dl>
				<dl>
					<dt>归档前阶段：</dt>
					<dd>{translateDic('resumestage', item.status)}</dd>
				</dl>
				<dl>
					<dt>归档原因：</dt>
					<dd>{item.filingReason}</dd>
				</dl>
				<dl>
					<dt>归档描述：</dt>
					<dd>{item.filingRemark}</dd>
				</dl>
				{
					isLock == 1
						? <OptionButtonsEliteLock isElite={true} {...this.props}/>
						: <OptionButtonsElite {...this.props}/>
				}
			</div>)
		}
		if (type == 'allocat') {
			return <OptionButtonsAllocat {...this.props}/>
		}
		if (type == 'credit') {

			return <div className="elite-head">
				<dl>
					<dt>入库时间：</dt>
					<dd>{item.filingTime}</dd>
				</dl>
				<dl>
					<dt>操作者：</dt>
					<dd>{item.filingAcc}</dd>
				</dl>
				<dl>
					<dt>不良事件：</dt>
					<dd>{item.adverseEvent}</dd>
				</dl>
				<OptionButtonsCredit {...this.props}/>
			</div>
		}
	}
	render() {
		return this.renderWhich()
	}
}
/* 公用方法类 */
class OptionCommonFn extends Component {
  send2Other() {
    let {actions, router,item, item: {
        id
      }} = this.props
    actions.send2InterviewerAction(router, [id],item)
  }
  send2OtherJob() {
    let {actions, router, item, item: {
        id
      }} = this.props
    actions.recommend2OtherAction(router, [id], [item])
  }
  handleFollow() {
    let {actions, router, item: {
        id
      }} = this.props
    actions.followAction(router, [id])
  }
  ingnoreHonesty() {
    let {actions, item: {
        id
      }} = this.props
    actions.ignoreHonestAction({id: id})
  }
  handleRemark() {
    let {actions, router, callback} = this.props
    callback()
  }
  addElite(libType) {
    let {actions, router, item: {
        id
      }} = this.props
    //console.log(libType)
    actions.joinAction(router, [id], libType)
  }
  addCredit() {
    let {actions, router, item: {
        id
      }} = this.props
    actions.creditAction(router, id)
  }
  entryNextStage(status) {
    let {item:{isOpenOfferAppro,offerStatus},dispatch} = this.props
    console.log(isOpenOfferAppro,offerStatus,status)
    if(isOpenOfferAppro && offerStatus == 1 && status == 3){
      message.warning("请先完成offer审批")
      return false
    }
    let target = parseInt(status) + 1
    this.resumeUpgrading(target)
  }
  entry2Stage(item) {
    let {key} = item
    this.resumeUpgrading(key)
  }
  addLabel() {
    let {actions, router, item: {
        labels
      }} = this.props
    actions.addLabelAction(router, labels)
  }
  handleApproalReject() {
    let {actions, router, item} = this.props
    actions.openRejectAppro(router, item)
  }
  handleApproalPass() {
    let {
      actions,
      item,
      item: {
        offerApprovalDto: {
          id
        }
      },
      orginJson
    } = this.props
    actions.offerApprovalAction({id: id, status: 1}).then(() => {
      actions.itemAction({id: item.id, viewLibType: orginJson.viewLibType})
      actions.getOfferAction({resumeId:item.id})
    })
  }
  eliminate() {
    let {actions, item: {
        id
      }, router, location, orginJson} = this.props
    actions.eliminateAction(router, [id]).then(() => {
      // let newLocation = {
      //   pathname:router.getCurrentLocation().pathname,
      //   state:Object.assign({},location.state,{key:"reload"})
      // }
      // routerActions.push(newLocation)
      actions.itemAction({id: id, viewLibType: orginJson.viewLibType})
    })
  }
  entryJob() {
    let {actions, router, dispatch, item, orginJson} = this.props
      /*old*/
    // let params = {
    // 	ids: [id]
    // }
    let newLocation = {
      pathname: orginJson.nextPath,
      state: {
        orgin: orginJson.orgin
      }
    }
    if (orginJson.nextPath.indexOf('/detail') < 0) {
      newLocation.state = Object.assign({}, newLocation.state, {
        key: "reload",
        listRefresh: true
      })
    }
    // actions.entryJobAction(params, orginJson.viewLibType).then(() => {
    // 	dispatch(routerActions.push(newLocation))
    // })

    /*new*/
    actions.entryInfoAction(router,item.id,item,newLocation)
  }
  relateJob() {
    let {actions, router, item: {
        id
      }} = this.props
    //console.log(id)
    actions.connectEliteAction(router, [id])
  }
  resumeUpgrading(target) {
    let {
      actions,
      router,
      item: {
        id,
        expectedEntryTime,
        status
      },
      item
    } = this.props
    let data = {
      id: id
    }

    switch (parseInt(target)) {
      case 1:
        actions.entryInvite(data)
        break;
      case 2:
        status > 2
          ? actions.offerbackEntryfeedAction(data)
          : actions.feedAction(router, item,{})
        break;
      case 3:
        status > 3
          ? actions.backEntryOffer(data)
          : actions.entryOffer(data)
        break;
      case 4:
        expectedEntryTime
          ? actions.entryWaiting(data)
          : actions.entryAction(router, id)
        break;
    }
  }
}
/* 简历按钮状态组件 */
class OptionButtonsResume extends OptionCommonFn {
  renderButtons() {
    let {status,item:{offerStatus,isOpenOfferAppro}} = this.props
    // console.log('是不是真的',!(!isOpenOfferAppro || (isOpenOfferAppro && status == 3 && offerStatus != 1)),!isOpenOfferAppro,(isOpenOfferAppro && status == 3 && offerStatus != 1))
    const menu = (<Menu className="ant-button-menu" onClick={this.entry2Stage.bind(this)}>
      <Menu.Item key="1">
        <Button disabled={status >= 1} type="ghost">邀约</Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="ghost" disabled={status == 2}>面试</Button>
      </Menu.Item>
      <Menu.Item key="3">
        <Button type="ghost" disabled={status == 3}>offer</Button>
      </Menu.Item>
      <Menu.Item key="4">
        {/*待入职状态是否打开 * 1 审核未开启 则打开  * 2 审核开启并且当前为offer阶段并且offerstatus不为未发送***/}
        <Button disabled={isOpenOfferAppro && !(isOpenOfferAppro && status == 3 && offerStatus != 1) || status == 4} type="ghost">待入职</Button>
      </Menu.Item>
    </Menu>)

    return status == 4 ?[
      <Dropdown.Button overlay={menu} className="block next-block" onClick={this.entryNextStage.bind(this, status)}>进入下一阶段</Dropdown.Button>,
      <Button className="block" onClick={this.entryJob.bind(this)}>入职</Button>
    ] : <Dropdown.Button overlay={menu} className="block next-block" onClick={this.entryNextStage.bind(this, status)}>进入下一阶段</Dropdown.Button>
  }
  renderRecommender() {

    let {
      status,
      item: {
        channelId,
        referrerName
      }
    } = this.props
    if (status == 0 && (channelId == 18 || channelId == 19)) {
      return <BaseInfoItem label="推荐人" info={<span> {
          referrerName
            ? referrerName
            : <Icon type="edit" style={{cursor:"pointer"}} onClick={this.handleEditReco.bind(this)}/>
        } < /span>}/>
    }
  }
  handleEditReco() {
    let {actions,item, router} = this.props
    actions.recoAction(router, item)
  }

  render() {
    let {
      status,
      item: {
        hrName,
        labelNames
      }
    } = this.props
    //console.log(permissionStyle("resumeToCred"))
    return (<ButtonGroup style={{
        padding: '20px'
      }}>
      {this.renderButtons()}
      <Button className="block" onClick={this.send2Other.bind(this)}>发送部门负责人</Button>
      <Button className="block" confirm="是否批量淘汰" onClick={this.eliminate.bind(this)}>淘汰</Button>
      <Button className="block" onClick={this.send2OtherJob.bind(this)}>推荐到其他职位</Button>
      <Button className="half-block" onClick={this.handleFollow.bind(this)}>跟进提醒</Button>
      <Button className="half-block" onClick={this.handleRemark.bind(this)}>备注</Button>
      <Button className="half-block" onClick={this.addElite.bind(this, 1)}>放入人才库</Button>
      <Button className="half-block" style={permissionStyle("resumeToCred")} onClick={this.addCredit.bind(this)}>放入诚信库</Button>

      <BaseInfoItem label="招聘负责人" info={hrName}/> {this.renderRecommender()}
      <BaseInfoItem label="标签" info={<Button onClick = {
          this.addLabel.bind(this)
        } > <Icon type="plus"/></Button>}/>
      <div className="tags-box">
        {
          labelNames && labelNames.map(it => {
            return <Tag>{it}</Tag>
          })
        }
      </div>
    </ButtonGroup>)
  }
}
// 关联职位、跟进提醒、备注、放入诚信库、添加标签；
/* 人才库 */
class OptionButtonsElite extends OptionCommonFn {
  render() {
    let {
      item: {
        hrName,
        labelNames
      }
    } = this.props
    return (<ButtonGroup>
      <Button className="block" onClick={this.relateJob.bind(this)}>关联职位</Button>
      <Button className="block" onClick={this.handleFollow.bind(this)}>跟进提醒</Button>
      <Button className="half-block" onClick={this.handleRemark.bind(this)}>备注</Button>
      <Button className="half-block" style={permissionStyle("eliteToCred")} onClick={this.addCredit.bind(this)}>放入诚信库</Button>
      <BaseInfoItem label="标签" info={<Button onClick = {
          this.addLabel.bind(this)
        } > <Icon type="plus"/></Button>}/>
      <div className="tags-box">
        {
          labelNames && labelNames.map(it => {
            return <Tag>{it}</Tag>
          })
        }
      </div>
    </ButtonGroup>)
  }
}
class OptionButtonsEliteLock extends OptionCommonFn {
  render() {
    let {
      item: {
        hrName,
        labelNames
      }
    } = this.props
    return (<ButtonGroup>
      <Button className="block" onClick={this.relateJob.bind(this)}>关联职位</Button>
      <Button className="block" onClick={this.handleFollow.bind(this)}>跟进提醒</Button>
      <Button className="block" onClick={this.handleRemark.bind(this)}>备注</Button>
      <BaseInfoItem label="标签" info={<Button onClick = {
          this.addLabel.bind(this)
        } > <Icon type="plus"/></Button>}/>
      <div className="tags-box">
        {
          labelNames && labelNames.map(it => {
            return <Tag>{it}</Tag>
          })
        }
      </div>
    </ButtonGroup>)
  }
}
/* 诚信库 */
class OptionButtonsCredit extends OptionCommonFn {
  render() {
    return (<ButtonGroup>
      <Button className="block" style={permissionStyle("credToElite")} onClick={this.addElite.bind(this, 4)}>加入人才库</Button>
    </ButtonGroup>)
  }
}

// 淘汰、放入人才库、备注、添加标签；
// 锁定信息：锁定职位、招聘负责人、锁定时间、解锁提醒；
// 人才库锁定状态没有放入人才库和解锁提醒

/* 锁定* */
class OptionButtonsLock extends OptionCommonFn {
  handelChange(checked) {
    let {
      actions,
      item: {
        lockInfo: {
          id
        }
      }
    } = this.props
    actions.lockChangeAction({
      id: id,
      isRemind: checked
        ? 1
        : 0
    })
  }
  renderSwitch() {
    let {item: {
        lockInfo
      }, isElite} = this.props
    if (!isElite && lockInfo) {
      return <BaseInfoItem label="解锁提醒" info={<Switch checkedChildren = "已开启" unCheckedChildren = "已关闭" defaultChecked = {
          lockInfo.isRemind == 1
        }
        onChange = {
          this.handelChange.bind(this)
        } />
}/>
    }
  }
  render() {
    let {
      item: {
        hrName,
        labelNames,
        lockInfo
      }
    } = this.props
    let {isElite} = this.props
    let lockShow = lockInfo
      ? lockInfo
      : {}
    return (<ButtonGroup className="lockedInfo">
      <BaseInfoItem label="锁定职位" info={lockShow.lockJobTitle}/>
      <BaseInfoItem label="招聘负责人" info={lockShow.lockJobHr}/>
      <BaseInfoItem label="锁定时间" info={lockShow.inputTime}/> {this.renderSwitch()}
      <Button className="block" confirm="是否批量淘汰" onClick={this.eliminate.bind(this)}>淘汰</Button>
      {
        isElite
          ? null
          : <Button className="block" style={permissionStyle("resumeToCred")} onClick={this.addElite.bind(this, 1)}>放入人才库</Button>
      }
      <Button className="half-block" onClick={this.handleRemark.bind(this)}>备注</Button>
      <Button className="half-block" onClick={this.send2OtherJob.bind(this)}>推荐到其他职位</Button>

      <BaseInfoItem label="标签" info={<Button onClick = {
          this.addLabel.bind(this)
        } > <Icon type="plus"/></Button>}/>
      <div className="tags-box">
        {
          labelNames && labelNames.map(it => {
            return <Tag>{it}</Tag>
          })
        }
      </div>
    </ButtonGroup>)
  }
}
OptionButtonsLock.defaultProps = {
  isElite: false
}

//分配职位、放入人才库、备注、添加标签；
/* 待分配简历 */
class OptionButtonsAllocat extends OptionCommonFn {
  distrbuted() {
    let {actions, router, item: {
        id
      }, orginJson} = this.props
    actions.distributionAction(router, [id], "single", orginJson)
  }
  render() {
    let {
      item: {
        hrName,
        labelNames
      }
    } = this.props
    //console.log(this.props)
    return (<ButtonGroup>
      <Button className="block" onClick={this.distrbuted.bind(this)}>分配职位</Button>
      <Button className="half-block" onClick={this.addElite.bind(this, 1)}>放入人才库</Button>
      <Button className="half-block" onClick={this.handleRemark.bind(this)}>备注</Button>

      <BaseInfoItem label="标签" info={<Button onClick = {
          this.addLabel.bind(this)
        } > <Icon type="plus"/></Button>}/>
      <div className="tags-box">
        {
          labelNames && labelNames.map(it => {
            return <Tag>{it}</Tag>
          })
        }
      </div>
    </ButtonGroup>)
  }
}
//备注、添加标签、、招聘负责人
/* 疑似简历无权限 */
class OptionButtonsSame extends OptionCommonFn {
  render() {
    let {
      item: {
        hrName,
        labelNames
      }
    } = this.props
    return (<ButtonGroup>
      <Button className="block" onClick={this.handleRemark.bind(this)}>备注</Button>
      <BaseInfoItem label="招聘负责人" info={hrName}/>

      <BaseInfoItem label="标签" info={<Button onClick = {
          this.addLabel.bind(this)
        } > <Icon type="plus"/></Button>}/>
      <div className="tags-box">
        {
          labelNames && labelNames.map(it => {
            return <Tag>{it}</Tag>
          })
        }
      </div>
    </ButtonGroup>)
  }
}
/* offer审核状态中间组件 */
class OptionButtonOfferJudge extends Component {
  renderWhich() {
    let {
      item: {
        offerApprovalDto: {
          status
        }
      }
    } = this.props
    switch (status) {
      case 0:
        return <OptionButtonsOffering {...this.props}/>
      case 1:
        return <OptionButtonsOffered {...this.props}/>
      case 2:
        return <OptionButtonsNoOffered {...this.props}/>
    }
  }
  render() {
    return this.renderWhich()
  }
}
/* offer审核中状态 */
class OptionButtonsOffering extends OptionCommonFn {
  render() {
    let {
      item: {
        hrName,
        authorization,
        labelNames,
        offerApprovalDto,
        offerApprovalDto: {
          approvalStage,
          approvalName,
          isApprovalAccount,
          isJumpCurrentApproval
        }
      }
    } = this.props
    // console.log(authorization,isJumpCurrentApproval,"aaaaaa")
    return <div className="offering-box">
      <h1><Icon type="icon-seal"/>offer审批中</h1>
      <InfoInline label="审批职位" info={offerApprovalDto.jobTitle}/>
      <InfoInline label="审批阶段" info={stageJson[approvalStage]}/>
      <InfoInline label="审批人" info={approvalName}/>
      {isJumpCurrentApproval ? <span className="account-error">审批人帐号异常</span> : null}

      <ButtonGroup>
        {
          isApprovalAccount
            ? <div>
                <Button className="block" onClick={this.handleApproalPass.bind(this)}>审批通过</Button>
                <Button className="block" onClick={this.handleApproalReject.bind(this)}>审批不通过</Button>
              </div>
            : null
        }
        {
          isJumpCurrentApproval && authorization
          ? <Button className="block" onClick={this.handleApproalPass.bind(this)}>跳过</Button>
          : null
        }
        <Button className="block" onClick={this.handleRemark.bind(this)}>备注</Button>
      </ButtonGroup>
      <BaseInfoItem label="招聘负责人" info={hrName}/>

      <BaseInfoItem label="标签" info={<Button onClick = {
          this.addLabel.bind(this)
        } > <Icon type="plus"/></Button>}/>
      <div className="tags-box">
        {
          labelNames && labelNames.map(it => {
            return <Tag>{it}</Tag>
          })
        }
      </div>
    </div>
  }
}
/* offer审核通过状态 */
class OptionButtonsOffered extends OptionCommonFn {
  render() {
    let {
      item: {
        hrName,
        labelNames,
        offerApprovalDto,
        offerApprovalDto: {
          approvalStage,
          approvalName,
          isApprovalAccount
        }
      }
    } = this.props
    return <div className="offering-box">
      <h1><Icon type="icon-pass"/>offer审批通过</h1>
      <InfoInline label="审批职位" info={offerApprovalDto.jobTitle}/>
      <InfoInline label="审批阶段" info={stageJson[approvalStage]}/>
      <InfoInline label="审批人" info={approvalName}/>

      <ButtonGroup>
        <Button className="block" onClick={this.handleRemark.bind(this)}>备注</Button>
      </ButtonGroup>
      <BaseInfoItem label="招聘负责人" info={hrName}/>

      <BaseInfoItem label="标签" info={<Button onClick = {
          this.addLabel.bind(this)
        } > <Icon type="plus"/></Button>}/>
      <div className="tags-box">
        {
          labelNames && labelNames.map(it => {
            return <Tag>{it}</Tag>
          })
        }
      </div>
    </div>
  }
}
/* offer审核不通过状态 */
class OptionButtonsNoOffered extends OptionCommonFn {
  render() {
    let {
      item: {
        hrName,
        labelNames,
        offerApprovalDto,
        offerApprovalDto: {
          approvalStage,
          approvalName,
          isApprovalAccount
        }
      }
    } = this.props
    return <div className="offering-box">
      <h1><Icon type="icon-no_pass"/>offer审批不通过</h1>
      <InfoInline label="审批职位" info={offerApprovalDto.jobTitle}/>
      <InfoInline label="审批阶段" info={stageJson[approvalStage]}/>
      <InfoInline label="审批人" info={approvalName}/>

      <ButtonGroup>
        <Button className="block" onClick={this.handleRemark.bind(this)}>备注</Button>
      </ButtonGroup>
      <BaseInfoItem label="招聘负责人" info={hrName}/>

      <BaseInfoItem label="标签" info={<Button onClick = {
          this.addLabel.bind(this)
        } > <Icon type="plus"/></Button>}/>
      <div className="tags-box">
        {
          labelNames && labelNames.map(it => {
            return <Tag>{it}</Tag>
          })
        }
      </div>
    </div>
  }
}
/* 共享诚信库状态 */
class OptionButtonsCreditShare extends OptionCommonFn {
  render() {
    let {item: {
        shareSincerityList
      }} = this.props
    return <div className="creditShare-box">
      <h3>该候选人存在于其他公司的诚信库中</h3>
      <h2><Icon type="laptop" />不良事件：</h2>
      <ul className="credit-tips">
        {
          shareSincerityList && shareSincerityList.map((it) => {
            return <li>{it.optionId}<span>{it.orgId}</span>
            </li>
          })
        }
      </ul>

      <ButtonGroup>
        <Button className="block" onClick={this.ingnoreHonesty.bind(this)}>知道了</Button>
      </ButtonGroup>
    </div>
  }
}
