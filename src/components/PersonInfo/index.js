import React,{Component} from 'react'
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
    Icon,
} from 'antd'
import moment from 'moment'
import {routerActions, push, replace} from 'react-router-redux'
import {FormPage} from 'app/components/Page'
import WrapperComponent from "app/decorators/WrapperComponent"
import {ModalDetailView} from 'app/components/Modal.view'
import BaseForm,{FormItem,customRules} from 'app/components/BaseForm'
import ButtonGroups from 'app/components/ButtonGroups'
import FileUpload from 'app/components/FileUpload'
import CalendarPicker from 'app/components/CalendarPicker'
import {ImgUpload} from 'app/components/FileUpload'
import Permission from 'app/components/Permission'
import EmailTemplateLinkage,{SmsTemplateLinkage,SmsTemplateInterView} from 'app/components/sendTemplate'
import LodopFuncs from 'app/utils/LodopFuncs'
import InputStrGroup from 'app/components/InputStrGroup'
import {hasPermission,permissionStyle} from 'app/utils/ConfigUtils'
import DictUtils from 'app/utils/DictUtils'
import ApplyFormView from 'app/app_modules/ApplyForm/ApplyFormShow.view'
import API from 'app/utils/FetchAPI'
import styles from './style.less'

const Step = Steps.Step;
const ButtonGroup = Button.Group
const {TextArea} = Input
const RadioGroup = Radio.Group
const MonthPicker = DatePicker.MonthPicker


/**打印函数start*/
var CreatedOKLodop7766 = null, CLodopIsLocal;

//====判断是否需要 Web打印服务CLodop:===
//===(不支持插件的浏览器版本需要用它)===
function needCLodop() {
    try {
        var ua = navigator.userAgent;
        if (ua.match(/Windows\sPhone/i))
            return true;
        if (ua.match(/iPhone|iPod/i))
            return true;
        if (ua.match(/Android/i))
            return true;
        if (ua.match(/Edge\D?\d+/i))
            return true;

        var verTrident = ua.match(/Trident\D?\d+/i);
        var verIE = ua.match(/MSIE\D?\d+/i);
        var verOPR = ua.match(/OPR\D?\d+/i);
        var verFF = ua.match(/Firefox\D?\d+/i);
        var x64 = ua.match(/x64/i);
        if ((!verTrident) && (!verIE) && (x64))
            return true;
        else if (verFF) {
            verFF = verFF[0].match(/\d+/);
            if ((verFF[0] >= 41) || (x64))
                return true;
        } else if (verOPR) {
            verOPR = verOPR[0].match(/\d+/);
            if (verOPR[0] >= 32)
                return true;
        } else if ((!verTrident) && (!verIE)) {
            var verChrome = ua.match(/Chrome\D?\d+/i);
            if (verChrome) {
                verChrome = verChrome[0].match(/\d+/);
                if (verChrome[0] >= 41)
                    return true;
            }
        }
        return false;
    } catch (err) {
        return true;
    }
}

//====页面引用CLodop云打印必须的JS文件,用双端口(8000和18000）避免其中某个被占用：====
if (needCLodop()) {
    var src1 = "http://localhost:8000/CLodopfuncs.js?priority=1";
    var src2 = "http://localhost:18000/CLodopfuncs.js?priority=0";

    var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
    var oscript = document.createElement("script");
    oscript.src = src1;
    head.insertBefore(oscript, head.firstChild);
    oscript = document.createElement("script");
    oscript.src = src2;
    head.insertBefore(oscript, head.firstChild);
    CLodopIsLocal = !!((src1 + src2).match(/\/\/localho|\/\/127.0.0./i));
}

//====获取LODOP对象的主过程：====
function getLodop(oOBJECT, oEMBED) {
    // var strHtmInstall = "<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop32.zip' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
    // var strHtmUpdate = "<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop32.zip' target='_self'>执行升级</a>,升级后请重新进入。</font>";
    // var strHtm64_Install = "<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop64.zip' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
    // var strHtm64_Update = "<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop64.zip' target='_self'>执行升级</a>,升级后请重新进入。</font>";
    // var strHtmFireFox = "<br><br><font color='#FF00FF'>（注意：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它）</font>";
    // var strHtmChrome = "<br><br><font color='#FF00FF'>(如果此前正常，仅因浏览器升级或重安装而出问题，需重新执行以上安装）</font>";
    // var strCLodopInstall_1 = "<br><font color='#FF00FF'>Web打印服务CLodop未安装启动，点击这里<a href='CLodop_Setup_for_Win32NT.zip' target='_self'>下载执行安装</a>";
    // var strCLodopInstall_2 = "<br>（若此前已安装过，可<a href='CLodop.protocol:setup' target='_self'>点这里直接再次启动</a>）";
    // var strCLodopInstall_3 = "，成功后请刷新本页面。</font>";
    // var strCLodopUpdate = "<br><font color='#FF00FF'>Web打印服务CLodop需升级!点击这里<a href='CLodop_Setup_for_Win32NT.zip' target='_self'>执行升级</a>,升级后请刷新页面。</font>";
    var LODOP;
    try {
        var ua = navigator.userAgent;
        var isIE = !!(ua.match(/MSIE/i)) || !!(ua.match(/Trident/i));
        if (needCLodop()) {
            try {
                LODOP = getCLodop();
            } catch (err) {}
            if (!LODOP && document.readyState !== "complete") {
                alert("网页还没下载完毕，请稍等一下再操作.");
                return;
            }
            if (!LODOP) {
                if(LODOP !== undefined){
                  LODOP.SET_LICENSES("","13528A153BAEE3A0254B9507DCDE2839","","");
                  return LODOP
                }
                // document.body.innerHTML = strCLodopInstall_1 + (CLodopIsLocal ? strCLodopInstall_2 : "") + strCLodopInstall_3 + document.body.innerHTML;
                message.info("请正确安装打印插件，如已安装请刷新后重试！")
                global.invokeMethod('CefToShellExe',"CLodop_Setup_for_Win32NT.exe")
                return;
            } else {
                if (CLODOP.CVERSION < "3.0.4.8") {
                    // document.body.innerHTML = strCLodopUpdate + document.body.innerHTML;
                    message.info("请正确安装打印插件！")
                    global.invokeMethod('CefToShellExe',"CLodop_Setup_for_Win32NT.exe")
                }
                if (oEMBED && oEMBED.parentNode)
                    oEMBED.parentNode.removeChild(oEMBED);
                if (oOBJECT && oOBJECT.parentNode)
                    oOBJECT.parentNode.removeChild(oOBJECT);
            }
        } else {
            var is64IE = isIE && !!(ua.match(/x64/i));
            //=====如果页面有Lodop就直接使用，没有则新建:==========
            if (oOBJECT || oEMBED) {
                if (isIE)
                    LODOP = oOBJECT;
                else
                    LODOP = oEMBED;
            } else if (!CreatedOKLodop7766) {
                LODOP = document.createElement("object");
                LODOP.setAttribute("width", 0);
                LODOP.setAttribute("height", 0);
                LODOP.setAttribute("style", "position:absolute;left:0px;top:-100px;width:0px;height:0px;");
                if (isIE)
                    LODOP.setAttribute("classid", "clsid:2105C259-1E0C-4534-8141-A753534CB4CA");
                else
                    LODOP.setAttribute("type", "application/x-print-lodop");
                document.documentElement.appendChild(LODOP);
                CreatedOKLodop7766 = LODOP;
            } else
                LODOP = CreatedOKLodop7766;
            //=====Lodop插件未安装时提示下载地址:==========
            if ((!LODOP) || (!LODOP.VERSION)) {
                // if (ua.indexOf('Chrome') >= 0)
                //     document.body.innerHTML = strHtmChrome + document.body.innerHTML;
                // if (ua.indexOf('Firefox') >= 0)
                //     document.body.innerHTML = strHtmFireFox + document.body.innerHTML;
                //document.body.innerHTML = (is64IE ? strHtm64_Install : strHtmInstall) + document.body.innerHTML;
                message.info("请正确安装打印插件！")
                global.invokeMethod('CefToShellExe',"CLodop_Setup_for_Win32NT.exe")
                return LODOP;
            }
        }
        if (LODOP.VERSION < "6.2.2.3") {
            if (!needCLodop())
                // document.body.innerHTML = (is64IE ? strHtm64_Update : strHtmUpdate) + document.body.innerHTML;
            return LODOP;
        }
        //===如下空白位置适合调用统一功能(如注册语句、语言选择等):===
        LODOP.SET_LICENSES("","13528A153BAEE3A0254B9507DCDE2839","","");
        //=======================================================
        return LODOP;
    } catch (err) {
        message.warning("getLodop出错:" + err);
    }
}

/**打印函数end*/




/*公用方法*/
/*转化字典表*/
function translateDic(type,value){
  return DictUtils.getDictLabelByValue(type,value)
}
/*转化时间格式*/
function translateTime(time,defaultFormat){
  if(time == "9999-01-01"){
    return "至今"
  }else{
    let format = defaultFormat ? defaultFormat : "YYYY/MM/DD"
    return time ? moment(time).format(format) : ''
  }
}
/*转化为moment对象*/
function translateTimeToMoment(time){
  return time ? moment(time) : null
}
/*转为字符串*/
function toStrings(str){
  return str ? str + "" : ""
}
/*返回时间戳*/
function timestamp(){
  return new Date().getTime()
}
/*转为字符串数组*/
function arrayToString(array){
  return array && array.map(it=>toStrings(it))
}
/*过滤数组*/
function filterArray(arr){
  return arr.filter((it)=> it != "" && it != undefined && it != null  )
}

/*进入下一级阶段公用方法*/

/*小组件*/
class BaseInfoItem extends Component{
  render(){
    return toStrings(this.props.info) || this.props.show? (
      <div className="baseinfo-item" style={Object.assign({},this.props.style,{wordBreak:"break-all"})}>
        <label>{this.props.label}：</label>
        <span>{this.props.info}</span>
      </div>
    ) : null
  }
}

class FormItemWrapparCol extends Component{
  render(){
    return(
      <Col span={this.props.span}>
        <FormItem>
          {this.props.children}
        </FormItem>
      </Col>
    )
  }
}

/*默认导出组件  头身体分离*/
export default class PersonInfoPanel extends Component{
  render(){
    let {item,optionbtn,headNode,children} = this.props
    return (
        <div className="person-info-pannel">
          {headNode}
          {children}
        </div>
    )
  }
}

/*右侧操作*/

/*
* 简历 - 无权限 -  无权限按钮 （不考虑锁定）
*      - 有权限 - 向下继续判定是否锁定

*      - 锁定状态 - 锁定按钮
*      - 未锁定  - 简历按钮

*      - 简历阶段 0 1 2 3 4

* 人才库 - 锁定状态 - 人才库锁定按钮
*        - 未锁定 人才库按钮
* 待分配 -待分配按钮
* 诚信 - 诚信库按钮


type :resume elite credit allocat
status 0 1 2 3 4
*/

export class PersonOption extends Component{
  renderStageLine(){
    let {type,item:{status}} = this.props
    if(type == "resume"){
      return (
        <Steps progressDot current={status} className="resumeStatus">
         <Step title="筛选"/>
         <Step title="邀约"/>
         <Step title="面试"/>
         <Step title="offer"/>
         <Step title="待入职" />
       </Steps>
      )
    }
    return null
  }
  render(){
    let {item:{status}} = this.props
    return (
      <div className="person-edit-option">
        {this.renderStageLine()}
        <OptionButtons {...this.props} status={status}/>
      </div>
    )
  }
}
PersonOption.defaultProps = {
  type:"resume",
  status:1
}

/*按钮状态判断总组件*/
class OptionButtons extends Component{
  renderWhich(){
    let {actions,router,type,status,item} =this.props
    let {isLock,authorization} = item
		let {isSame} = this.props
    if(type == 'resume'){
      if(!authorization){
        return <OptionButtonsSame {...this.props}/>
      }
      return isLock == 1 ? <OptionButtonsLock {...this.props}/> : <OptionButtonsResume {...this.props}/>
    }
    if(type == 'elite'){
      return (
				<div className="elite-head">
				{isLock == 1 ? <h2>该候选人已被锁定</h2> : null}
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
						<dd>{translateDic('resumestage',item.status)}</dd>
					</dl>
					<dl>
						<dt>归档原因：</dt>
						<dd>{item.filingReason}</dd>
					</dl>
					<dl>
						<dt>归档描述：</dt>
						<dd>{item.filingRemark}</dd>
					</dl>
					{isLock == 1 ? <OptionButtonsEliteLock isElite={true} {...this.props}/> : <OptionButtonsElite {...this.props}/>}
				</div>
			)
    }
    if(type == 'allocat'){
      return <OptionButtonsAllocat {...this.props}/>
    }
    if(type == 'credit'){
      return <OptionButtonsCredit {...this.props}/>
    }
  }
  render(){
    return this.renderWhich()
  }
}
/*公用方法类*/
class OptionCommonFn extends Component{
  send2Other(){
    let {actions,router,item:{id}} = this.props
    actions.send2InterviewerAction(router,[id])
  }
  send2OtherJob(){
    let {actions,router,item:{id}} = this.props
    actions.recommend2OtherAction(router,[id])
  }
  handleFollow(){
    let {actions,router,item:{id}} = this.props
    actions.followAction(router,[id])
  }
  handleRemark(){
    let {actions,router,callback} = this.props
    callback()
  }
  addElite(libType){
    let {actions,router,item:{id}} = this.props
    //console.log(libType)
    actions.joinAction(router,[id],libType)
  }
  addCredit(){
    let {actions,router,item:{id}} = this.props
    actions.creditAction(router,id)
  }
  entryNextStage(status){
    let target = parseInt(status) + 1
    this.resumeUpgrading(target)
  }
  entry2Stage(item){
    let {key} = item
    this.resumeUpgrading(key)
  }
  addLabel(){
    let {actions,router,item:{labels}} = this.props
    actions.addLabelAction(router,labels)
  }
  eliminate(){
    let {actions,item:{id},router,location,orginJson} = this.props
    actions.eliminateAction(router,[id]).then(()=>{
      // let newLocation = {
      //   pathname:router.getCurrentLocation().pathname,
      //   state:Object.assign({},location.state,{key:"reload"})
      // }
      // routerActions.push(newLocation)
      actions.itemAction({id:id,viewLibType:orginJson.viewLibType})
    })
  }
  entryJob(){
    let {actions,router,dispatch,item:{id},orginJson} = this.props
    let params = {
      ids:[id]
    }
    let newLocation = {
      pathname:orginJson.nextPath,
      state:{
        orgin:orginJson.orgin
      }
    }
    if(orginJson.nextPath.indexOf('/detail') < 0){
      newLocation.state = Object.assign({},newLocation.state,{key:"reload",listRefresh:true})
    }
    actions.entryJobAction(params,orginJson.viewLibType).then(()=>{
      dispatch(routerActions.push(newLocation))
    })
  }
  relateJob(){
    let {actions,router,item:{id}} = this.props
    //console.log(id)
    actions.connectEliteAction(router,[id])
  }
  resumeUpgrading(target){
    let {actions,router,item:{id,expectedEntryTime},item} = this.props
    let data = {id:id}


    switch (parseInt(target)) {
      case 1:
        actions.entryInvite(data)
        break;
      case 2:
        actions.feedAction(router,item)
        break;
      case 3:
        actions.entryOffer(data)
        break;
      case 4:
        expectedEntryTime ? actions.entryWaiting(data) : actions.entryAction(router,id)
        break;
    }
  }
}
/*按钮状态简历组件*/
class OptionButtonsResume extends OptionCommonFn{

  renderButtons(){
    let {status} = this.props
    const menu = (
      <Menu className="ant-button-menu" onClick={this.entry2Stage.bind(this)}>
        <Menu.Item key="1"><Button disabled={status < 1 ? false : true} type="ghost">邀约</Button></Menu.Item>
        <Menu.Item key="2"><Button disabled={status < 2 ? false : true} type="ghost">面试</Button></Menu.Item>
        <Menu.Item key="3"><Button disabled={status < 3 ? false : true} type="ghost">offer</Button></Menu.Item>
        <Menu.Item key="4"><Button disabled={status < 4 ? false : true} type="ghost">待入职</Button></Menu.Item>
      </Menu>
    )
    return status == 4 ? <Button className="block" onClick={this.entryJob.bind(this)}>入职</Button> : <Dropdown.Button overlay={menu} className="block next-block" onClick={this.entryNextStage.bind(this,status)}>进入下一阶段</Dropdown.Button>
  }

  render(){
    let {item:{hrName,labelNames}} = this.props
    //console.log(permissionStyle("resumeToCred"))
    return(
      <ButtonGroup style={{padding:'20px'}}>
        {this.renderButtons()}
        <Button className="block" onClick={this.send2Other.bind(this)}>发送给面试官</Button>
        <Button className="block"  confirm="是否批量淘汰" onClick={this.eliminate.bind(this)}>淘汰</Button>
        <Button className="block" onClick={this.send2OtherJob.bind(this)}>推荐到其他职位</Button>
        <Button className="half-block" onClick={this.handleFollow.bind(this)}>跟进提醒</Button>
        <Button className="half-block" onClick={this.handleRemark.bind(this)}>备注</Button>
        <Button className="half-block" onClick={this.addElite.bind(this,1)}>放入人才库</Button>
        <Button className="half-block" style={permissionStyle("resumeToCred")} onClick={this.addCredit.bind(this)}>放入诚信库</Button>

        <BaseInfoItem label="招聘负责人" info={hrName}/>
        <BaseInfoItem label="标签" info={<Button onClick={this.addLabel.bind(this)}><Icon type="plus"/></Button>}/>
        <div className="tags-box">
          { labelNames&&labelNames.map(it=>{return <Tag>{it}</Tag> })}
        </div>
      </ButtonGroup>
    )
  }
}
// 关联职位、跟进提醒、备注、放入诚信库、添加标签；
/*人才库*/
class OptionButtonsElite extends OptionCommonFn{
  render(){
    let {item:{hrName,labelNames}} = this.props
    return(
      <ButtonGroup>
        <Button className="block" onClick={this.relateJob.bind(this)}>关联职位</Button>
        <Button className="block" onClick={this.handleFollow.bind(this)}>跟进提醒</Button>
        <Button className="half-block" onClick={this.handleRemark.bind(this)}>备注</Button>
        <Button className="half-block" style={permissionStyle("eliteToCred")} onClick={this.addCredit.bind(this)}>放入诚信库</Button>
        <BaseInfoItem label="标签" info={<Button onClick={this.addLabel.bind(this)}><Icon type="plus"/></Button>}/>
        <div className="tags-box">
          { labelNames&&labelNames.map(it=>{return <Tag>{it}</Tag> })}
        </div>
      </ButtonGroup>
    )
  }
}
class OptionButtonsEliteLock extends OptionCommonFn{
  render(){
    let {item:{hrName,labelNames}} = this.props
    return(
      <ButtonGroup>
        <Button className="block" onClick={this.relateJob.bind(this)}>关联职位</Button>
        <Button className="block" onClick={this.handleFollow.bind(this)}>跟进提醒</Button>
        <Button className="block" onClick={this.handleRemark.bind(this)}>备注</Button>
        <BaseInfoItem label="标签" info={<Button onClick={this.addLabel.bind(this)}><Icon type="plus"/></Button>}/>
        <div className="tags-box">
          { labelNames&&labelNames.map(it=>{return <Tag>{it}</Tag> })}
        </div>
      </ButtonGroup>
    )
  }
}
/*诚信库*/
class OptionButtonsCredit extends OptionCommonFn{
  render(){
    return(
      <ButtonGroup>
        <Button className="block" style={permissionStyle("credToElite")} onClick={this.addElite.bind(this,4)}>加入人才库</Button>
      </ButtonGroup>
    )
  }
}

// 淘汰、放入人才库、备注、添加标签；
// 锁定信息：锁定职位、招聘负责人、锁定时间、解锁提醒；
// 人才库锁定状态没有放入人才库和解锁提醒

/*锁定**/
class OptionButtonsLock extends OptionCommonFn{
  handelChange(checked){
    let {actions,item:{lockInfo:{id}}} = this.props
    actions.lockChangeAction({id:id,isRemind:checked?1:0})
  }
  renderSwitch(){
    let {item:{lockInfo},isElite} = this.props
    if(!isElite && lockInfo){
      return <BaseInfoItem label="解锁提醒" info={
        <Switch checkedChildren="已开启" unCheckedChildren="已关闭" defaultChecked={ lockInfo.isRemind == 1 } onChange={this.handelChange.bind(this)} />
      }/>
    }
  }
  render(){
    let {item:{hrName,labelNames,lockInfo}} = this.props
    let {isElite} = this.props
    let lockShow = lockInfo ? lockInfo : {}
    return(
      <ButtonGroup className="lockedInfo">
        <BaseInfoItem label="锁定职位" info={lockShow.lockJobTitle}/>
        <BaseInfoItem label="招聘负责人" info={lockShow.lockJobHr}/>
        <BaseInfoItem label="锁定时间" info={lockShow.inputTime}/>

        {this.renderSwitch() }
        <Button className="block"  confirm="是否批量淘汰" onClick={this.eliminate.bind(this)}>淘汰</Button>
        {isElite ? null : <Button className="block" style={permissionStyle("resumeToCred")} onClick={this.addElite.bind(this,1)}>放入人才库</Button>}
        <Button className="half-block" onClick={this.handleRemark.bind(this)}>备注</Button>
        <Button className="half-block" onClick={this.send2OtherJob.bind(this)}>推荐到其他职位</Button>

        <BaseInfoItem label="标签" info={<Button onClick={this.addLabel.bind(this)}><Icon type="plus"/></Button>}/>
        <div className="tags-box">
          { labelNames&&labelNames.map(it=>{return <Tag>{it}</Tag> })}
        </div>
      </ButtonGroup>
    )
  }
}
OptionButtonsLock.defaultProps = {
  isElite:false
}


//分配职位、放入人才库、备注、添加标签；
/*待分配简历*/
class OptionButtonsAllocat extends OptionCommonFn{
  distrbuted(){
    let {actions,router,item:{id},orginJson} = this.props
    actions.distributionAction(router,[id],"single",orginJson)
  }
  render(){
    let {item:{hrName,labelNames}} = this.props
    //console.log(this.props)
    return(
      <ButtonGroup>
        <Button className="block" onClick={this.distrbuted.bind(this)}>分配职位</Button>
        <Button className="half-block" onClick={this.addElite.bind(this,1)}>放入人才库</Button>
        <Button className="half-block" onClick={this.handleRemark.bind(this)}>备注</Button>

        <BaseInfoItem label="标签" info={<Button onClick={this.addLabel.bind(this)}><Icon type="plus"/></Button>}/>
        <div className="tags-box">
          { labelNames&&labelNames.map(it=>{return <Tag>{it}</Tag> })}
        </div>
      </ButtonGroup>
    )
  }
}
//备注、添加标签、、招聘负责人
/*疑似简历无权限*/
class OptionButtonsSame extends OptionCommonFn{
  render(){
    let {item:{hrName,labelNames}} = this.props
    return(
      <ButtonGroup>
        <Button className="block" onClick={this.handleRemark.bind(this)}>备注</Button>
        <BaseInfoItem label="招聘负责人" info={hrName}/>

        <BaseInfoItem label="标签" info={<Button onClick={this.addLabel.bind(this)}><Icon type="plus"/></Button>}/>
        <div className="tags-box">
          { labelNames&&labelNames.map(it=>{return <Tag>{it}</Tag> })}
        </div>
      </ButtonGroup>
    )
  }
}

/*ItemChange*/
class ItemChangeCommon extends Component{
  handleEdit(){
    this.setState({
      editFlag:true
    })
  }
  handleCancelEdit(){
    this.setState({
      editFlag:false
    })
  }
  renderWhich(){
    let {editFlag} = this.state
    return editFlag ? this.renderEdit() : this.renderShow()
  }
  render(){
    let {item} = this.props
    return this.renderWhich()
  }
}
/*tabs组件开始*/
export class PersonTabBaseInfo extends Component{
  constructor(props){
    super(props)
    this.state = {
      infoEdit:false,
      objEdit:false,
      jobEdit:false,
      proEdit:false,
      eduEdit:false,
      lanEdit:false,
      credEdit:false,
      trainEdit:false,
      showType:1
    }
    /*showtype 1 标准  2 原始 3 编辑*/
  }
  componentDidMount(){
    let {actions,id} = this.props
    //id = "04e7fc53e9b6469ab527168d0346f51b"
    actions.personBaseAction({id:id})
  }
  componentWillReceiveProps(nextProps){
    let {actions,id} = this.props;
    if(JSON.stringify(nextProps.id) !== JSON.stringify(this.props.id)){
      actions.personBaseAction({id:nextProps.id})
    }
  }
  changeFlag(type,value){
    let states = Object.assign({},this.state,{
      infoEdit:false,
      objEdit:false,
      salaryEdit:false,
      jobEdit:false,
      proEdit:false,
      eduEdit:false,
      lanEdit:false,
      credEdit:false,
      trainEdit:false,
    },{
      [type]:value
    })
    this.setState({
      ...states
    })
  }
  renderOrigin(){
    let {showType} = this.state
    this.setState({
      showType:showType == 1 ? 2 : 1
    })
  }
  handlePrinter(){
    // let {info , actions ,id ,detailType} = this.props
    // let {resumeInfo,objectives,jobs,projects,educations,languages,credentials,trainings} = info
    // let {sourceUrl,channelResumeId} = resumeInfo

    let stylesText = '<style>.resume-origin{top:-40px}.personinfo-detailHead{padding:10px;position:relative}.personinfo-detailHead .part-editBtn{position:absolute;right:10px;top:5px;border:none;color:#58b1f0}.personinfo-detailHead .person-headicon{width:80px;height:auto;border-radius:50%;margin:0 20px}.personinfo-detailHead .personinfo-headInfo{display:inline-block;vertical-align:bottom}.personinfo-detailHead .personinfo-headInfo .contactInfo span{margin-right:20px}.personinfo-detailHead .personinfo-headInfo .contactInfo span i{margin-right:10px;font-size:14px;color:#333}.salary-info{border-bottom:none;padding:20px;margin-top:10px;position:relative}.salary-info>h3{color:#32a0eb}.salary-info>h3>span{color:rgba(0,0,0,.65);margin-left:20px;font-size:12px}.salary-info .part-editBtn{position:absolute;right:10px;top:5px;border:none;color:#58b1f0}.salary-info .baseinfo-item{display:inline-block;width:24%}.otherInfo{padding:10px;line-height:24px}.otherInfo>div{padding:10px 60px 10px 10px;position:relative}.otherInfo>div .part-editBtn{position:absolute;right:0;top:0;border:none;color:#58b1f0}.otherInfo>div>h3{color:#32a0eb}.otherInfo>div>h3 .add-title{font-size:12px;border:none;color:#32a0eb;position:absolute;right:0}.otherInfo>div>div{position:relative}.otherInfo>div>div>h4{font-weight:700}.otherInfo>div>div>h4>.item-edit-btn{position:absolute;right:-60px;font-size:12px;border:none;color:#32a0eb}.otherInfo>div>div>h4>span{margin-right:30px}.otherInfo>div>form{overflow:hidden;margin-top:10px}.otherInfo>div>form .ant-btn-group{float:right}.otherInfo>div>form .ant-btn-group>button.ant-btn-primary{margin-left:20px}body { color:#333; }button {display: none;} h3 {color:#32a0eb}  h3 > span {color:#333;margin-left:20px;font-size:12px;} img { width: 80px;height: auto;border-radius: 50%;margin: 0 20px;}</style>'
    var LODOP=getLodop(document.getElementById('LODOP_OB'),document.getElementById('LODOP_EM'))
    LODOP.PRINT_INIT("打印简历")
    LODOP.SET_PRINT_PAGESIZE(1,2100,2970)

    //设置页码
    LODOP.ADD_PRINT_HTM('1030','600','150','22',"<font style='font-size:12px;float:right;'><span tdata='pageNO'>第##页</span>/<span tdata='pageCount'>共##页</span></font>");
    LODOP.SET_PRINT_STYLEA(0,"ItemType",1)
    //打印标准简历
    LODOP.ADD_PRINT_HTM(50,50,650,980,stylesText+"<body>"+document.getElementById("personInfoPrintBox").innerHTML+"</body>")
    //打印链接和图片
    //console.log(sourceUrl)
    // LODOP.ADD_PRINT_URL(50,50,650,980,sourceUrl)
    // /*打印预览*/
    LODOP.PREVIEW()
    /*直接打印*/
    // LODOP.PRINT()
  }
  renderToolbar(){
    let { showType } = this.state
    let {info:{resumeInfo:{sourceUrl}}} = this.props
    return showType == 1 ?
          <div className="resume-toolbar">
            <Button type="default" htmlType="button" onClick={this.renderOrigin.bind(this)}>原始简历 <Icon type="right" /></Button>
            <ButtonGroup style={{float:'right'}}>
              <Button type="default" htmlType="button" icon="printer" onClick={this.handlePrinter.bind(this)}></Button>
            </ButtonGroup>
          </div>
          :
          <div className="resume-toolbar resume-origin">
            <Button type="default" htmlType="button" onClick={this.renderOrigin.bind(this)}>标准简历 <Icon type="right" /></Button>
          </div>
  }
  urlIsHtml(url){
    let urlTarget = url
    return urlTarget.split(".").pop() == "html"
  }
  render(){
    let {info , actions ,id ,detailType} = this.props
    let {resumeInfo,objectives,jobs,projects,educations,languages,credentials,trainings} = info
    let {sourceUrl,channelResumeId} = resumeInfo
    let {showType,infoEdit,objEdit,salaryEdit,jobEdit,proEdit,eduEdit,lanEdit,credEdit,trainEdit} = this.state
    if(showType == 1){
      return (
        <div className="personBaseInfoPanel" id="personInfoPrintBox">
          {this.renderToolbar()}
          {/*基本信息判断是否编辑状态*/}
          { infoEdit ?
            <PersonBaseInfoEditHead actions={actions} id={id} info={resumeInfo} editChangeFn={this.changeFlag.bind(this,"infoEdit",false)}/>
            :
            <PersonBaseInfoShowHead info={resumeInfo} id={id} detailType={detailType} editChangeFn={this.changeFlag.bind(this,"infoEdit",true)}/>
          }
          { salaryEdit ?
            <PersonSalaryEdit actions={actions} id={id} info={resumeInfo} channelResumeId={channelResumeId} editChangeFn={this.changeFlag.bind(this,"salaryEdit",false)}/>
            :
            <PersonSalaryShow detailType={detailType} info={resumeInfo} editChangeFn={this.changeFlag.bind(this,"salaryEdit",true)}/>
          }
          {/*求职意向判断是否编辑状态*/}
          <div className="otherInfo">
          { objEdit ?
            <PersonObjectiveEdit actions={actions} info={objectives} channelResumeId={channelResumeId} editChangeFn={this.changeFlag.bind(this,"objEdit",false)}/>
            :
            <PersonObjectiveShow detailType={detailType} info={objectives} editChangeFn={this.changeFlag.bind(this,"objEdit",true)}/>
          }
            <PersonJobsProShow detailType={detailType} info={jobs} type="job" channelResumeId={channelResumeId} actions={actions} />
            <PersonJobsProShow detailType={detailType} info={projects} type="pro" channelResumeId={channelResumeId} actions={actions} />
            <PersonEducationShow detailType={detailType} info={educations} channelResumeId={channelResumeId} actions={actions} />
            <PersonLanguageShow detailType={detailType} info={languages} channelResumeId={channelResumeId} actions={actions} />
            <PersonCredentialShow detailType={detailType} info={credentials} channelResumeId={channelResumeId} actions={actions} />
            <PersonTraningShow detailType={detailType} info={trainings}  channelResumeId={channelResumeId} actions={actions} />
          </div>
        </div>
      )
    }else if(showType == 2){//原始简历
      return (
        <div className="personBaseInfoPanel" style={{position:"absolute",left:20,right:20,top:20,bottom:20}}>
          {this.renderToolbar()}
          {this.urlIsHtml(sourceUrl) ? <iframe src={sourceUrl} width="100%" height="100%" style={{border:"none"}}></iframe> : <img src={sourceUrl} alt="暂无数据" className="resume-orign-img"/>}
        </div>
      )
    }else if(showType == 3){
      return null
    }

  }
}
/*标准简历头部展示**/
class PersonBaseInfoShowHead extends Component{
  renderPersonBase(){
    let {info} = this.props
    let age = info.age ? info.age + "岁" : ""
    let sex = translateDic("sex",info.sex)
    let workYear = info.workYear ? info.workYear + "年工作经验" : ""
    let edu = translateDic("education",info.degree)
    let marry = translateDic("maritalstatus",info.maritalStatus)
    let polit = translateDic("political",info.politicsStatus)

    return filterArray([
      sex,age,marry,polit,workYear,edu,info.currentAddress
    ]).join(" · ")

  }
  handleCallPhone(number,resumeId,name,type){
      if(!number){
          message.info("号码为空！",5)
          return false
      }
      /*type  == define1
      * define1  1 员工
      * define1  2 简历
      * define1  3 人才
      *
      * */
      let  callOutJson ={
          phone:number,
          busId:resumeId,
          candName:name,
          inputAcc:"",
          define1:type+"",
          define3:"",
          IsContact:"0"
      };
      let  callOutJsonStr = JSON.stringify({callOutJson});
      console.log(callOutJsonStr)
      global.invokeMethod('OnCallJson',callOutJsonStr)
  }
  render(){
    let {info,id,detailType} = this.props
    return(
      <div className="personinfo-detailHead">
        {detailType==10?null:<Button className="part-editBtn" onClick={this.props.editChangeFn}>编辑</Button>}
        <img src={info.photoUrl} className="person-headicon"/>
        <div className="personinfo-headInfo">
            <h2>{info.name}</h2>
            <div className="contactInfo">
              {info.mobilephone ? (<span><Icon type="phone" onClick={this.handleCallPhone.bind(this,info.mobilephone,id,info.name,detailType)}/>{info.mobilephone}</span>) : null }
              {info.email ? (<span><Icon type="mail"/>{info.email}</span>) : null }
            </div>
            <div>
              {this.renderPersonBase()}
            </div>
        </div>
      </div>
    )
  }
}
/*标准简历头部编辑*/
class PersonBaseInfoEditHead extends FormPage{

  saveInfo(){
    let {actions,editChangeFn,id} = this.props
    this.form.validateFieldsAndScroll((err,values) => {
        if (err) {
           return;
        }
        //console.log(values)
        actions.savePersonBaseAction(values,id).then(()=>{
          editChangeFn()
        })
     });
  }
  responseType(res){
      return res.fileUrl
  }
  onSuccess(info,that){
      that.setState({
          imgUrl:info.file.response.fileUrl
      })
  }
  renderSelectOption(data,idx){
      return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  transTimeYear(val){
    if(toStrings(val)){
      return moment(toStrings(val))
    }else{
      return null
    }
  }
  beforeUpload(file){
    let {name} = file
    let suffix = name.split(".").pop()
    if(suffix == "jpg" || suffix == "png" || suffix == "jpeg"){
      return true
    }else{
      message.warning("只能上传图片文件")
      return false
    }
  }
  render(){
    let {info} = this.props
    console.log(moment(info.birthYear),moment(info.startWorkingYear))
    return(
      <BaseForm ref={this.saveFormRef} className="baseInfo-edit">
        <FormItem>
          <Input type="hidden" name="channelResumeId" defaultValue={info.channelResumeId}/>
        </FormItem>
        <Row gutter={12}>
          <FormItemWrapparCol span={6}>
              <ImgUpload label="照片" type={2} name="photoUrl" beforeUpload={this.beforeUpload} imgUrl={info.photoUrl} onResponse={this.responseType} onSuccess={this.onSuccess}></ImgUpload>
          </FormItemWrapparCol>
          <Col span={18}>
            <FormItemWrapparCol span={12}>
                <Input label="姓名"  name='name' defaultValue={info.name} rules={[{required: true, message: "姓名不可为空"},{validator:customRules.required}]}/>
            </FormItemWrapparCol>

            <FormItemWrapparCol span={12}>
                <Select label="性别" name="sex" defaultValue={toStrings(info.sex)}  fetch={DictUtils.getDictByType("sex")} renderItem={this.renderSelectOption} rules={[{required: true, message: "性别不可为空"},{validator:customRules.required}]}/>
            </FormItemWrapparCol>

            <FormItemWrapparCol span={12}>
                <Input label="户口"  name='residenceAddress' defaultValue={info.residenceAddress} rules={[{required: true, message: "户口不可为空"},{validator:customRules.required}]}/>
            </FormItemWrapparCol>

            <FormItemWrapparCol span={12}>
                <Input label="现居住地"  name='currentAddress' defaultValue={info.currentAddress} rules={[{required: true, message: "现居住地不可为空"},{validator:customRules.required}]}/>
            </FormItemWrapparCol>

            <FormItemWrapparCol span={12}>
                <Select label="婚姻状况" name="maritalStatus" defaultValue={toStrings(info.maritalStatus)} fetch={DictUtils.getDictByType("maritalstatus")} renderItem={this.renderSelectOption}/>
            </FormItemWrapparCol>

            <FormItemWrapparCol span={12}>
                <MonthPicker label="出生年份"  name='birthYear' defaultValue={this.transTimeYear(info.birthYear)} format="YYYY" rules={[{required: true, message: "出生日期不可为空"},{validator:customRules.required}]}/>
            </FormItemWrapparCol>

            <FormItemWrapparCol span={12}>
                <Select label="政治面貌" name="politicsStatus" defaultValue={toStrings(info.politicsStatus)} fetch={DictUtils.getDictByType("political")} renderItem={this.renderSelectOption}/>
            </FormItemWrapparCol>

            <FormItemWrapparCol span={12}>
                <Input label="手机号码"  name='mobilephone' defaultValue={info.mobilephone} rules={[{required: true, message: "手机号码不可为空"},{validator:customRules.checkMobile},{validator:customRules.required}]}/>
            </FormItemWrapparCol>

            <FormItemWrapparCol span={12}>
                <Input label="邮箱号码"  name='email' defaultValue={info.email}  rules={[{type:"email",message:"邮箱格式不正确"}]}/>
            </FormItemWrapparCol>

            <FormItemWrapparCol span={12}>
                <MonthPicker label="参加工作年份" name='startWorkingYear'  defaultValue={this.transTimeYear(info.startWorkingYear)} format="YYYY" />
            </FormItemWrapparCol>
          </Col>

          <Button.Group>
            <Button onClick={this.props.editChangeFn}>取消</Button>
            <Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
          </Button.Group>
        </Row>

      </BaseForm>
    )
  }
}
/*目前收入组件*/
class PersonSalaryShow extends Component{
  render(){
    let {info,detailType} = this.props
    return(
      <div className="salary-info">
        {detailType==10?null:<Button className="part-editBtn" onClick={this.props.editChangeFn}>编辑</Button>}
        <h3>目前收入<span>{info.annualSalary}(包含基本工资、补贴，奖金，股权收益)</span></h3>
        <BaseInfoItem label="基本工资" info={info.basicSalary} show/>
        <BaseInfoItem label="补贴" info={info.subsidy} show/>
        <BaseInfoItem label="奖金" info={info.bonus} show/>
        <BaseInfoItem label="股权收益" info={info.stockRights} show/>
      </div>
    )
  }
}
/*目前收入编辑*/
class PersonSalaryEdit extends FormPage{
  saveInfo(){
    let {actions,id} = this.props
    this.form.validateFieldsAndScroll((err,values) => {
        if (err) {
           return;
        }
        console.log(values)
        actions.savePersonBaseAction(values,id).then(()=>{
          this.props.editChangeFn()
        })
     });
  }
  render(){
    let {info} = this.props
    return (
      <BaseForm ref={this.saveFormRef} className="salaryInfo-edit">
        <FormItem>
          <Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
        </FormItem>
        <Row>
          <FormItemWrapparCol span={24}>
            <Input label="目前收入"  name='annualSalary' defaultValue={info.annualSalary} rules={[{validator:customRules.integer}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="基本工资"  name='basicSalary' defaultValue={info.basicSalary} rules={[{validator:customRules.integer}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="补贴"  name='subsidy' defaultValue={info.subsidy} rules={[{validator:customRules.integer}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="奖金"  name='bonus' defaultValue={info.bonus} rules={[{validator:customRules.integer}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="股权收益"  name='stockRights' defaultValue={info.stockRights} rules={[{validator:customRules.integer}]}/>
          </FormItemWrapparCol>

          <Button.Group>
            <Button onClick={this.props.editChangeFn}>取消</Button>
            <Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
          </Button.Group>
      </Row>
      </BaseForm>
    )
  }
}
/*求职意向组件*/
class PersonObjectiveShow extends Component{
  renderArrayInfo(array,code){
    return array && array.map((it,idx)=>{
      return code ? translateDic(code,it) : it
    }).join("，")
  }
  renderArrayData(array){
    return array && array.join("，")
  }
  translateSalary(lower,upper){
    return lower && upper ? `${lower} - ${upper}` : "面议"
  }
  render(){
    let {info,detailType} = this.props
    return(
      <div className="objective-info">
        {detailType==10?null:<Button className="part-editBtn" onClick={this.props.editChangeFn}>编辑</Button>}
        <h3>求职意向</h3>
        <BaseInfoItem label="期望薪资" info={this.translateSalary(info.expectedSalaryLower,info.expectedSalaryUpper)}/>
        <BaseInfoItem label="工作地点" info={this.renderArrayData(info.expectedAddress)}/>
        <BaseInfoItem label="到岗时间" info={translateDic("comedate",info.dutyTime)}/>
        <BaseInfoItem label="工作类型" info={this.renderArrayInfo(info.jobNature,"workproperty")}/>
        <BaseInfoItem label="职位" info={this.renderArrayData(info.expectedJobTitle)}/>
        <BaseInfoItem label="求职状态" info={translateDic("jobstatus",info.workStatus)}/>
        <BaseInfoItem label="行业" info={this.renderArrayInfo(info.trade,"industry")}/>
        <BaseInfoItem label="自我评价" info={info.selfEvaluation} style={{width:"100%"}}/>
      </div>
    )
  }
}
/*求职意向编辑*/
class PersonObjectiveEdit extends FormPage{
  renderSelectOption(data,idx){
      return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  saveInfo(){
    let {actions} = this.props
    this.form.validateFieldsAndScroll((err,values) => {
        if (err) {
           return;
        }
        //console.log(values)
        actions.savePersonObjAction(values).then(()=>{
          this.props.editChangeFn()
        })
     });
  }
  jobTitleTrans(jobArr){
    return jobArr.join(",")
  }
  toStrings(str){
    return str + ""
  }
  render(){
    let {info} = this.props
    return(
      <BaseForm ref={this.saveFormRef} className="baseInfo-edit">
        <FormItem>
          <Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
        </FormItem>
        <Row>
          <FormItemWrapparCol span={12}>
            <Input label="职位"  name='expectedJobTitle' disabled defaultValue={info.expectedJobTitle}  placeholder="可输入多项，中间用英文逗号“,”分隔"/>
          </FormItemWrapparCol>

          <FormItemWrapparCol span={12}>
            <Select label="行业" name="trade" defaultValue={arrayToString(info.trade)} fetch={DictUtils.getDictByType("industry")} mode="multiple" renderItem={this.renderSelectOption} rules={[{required: true, message: "行业不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>

          <FormItemWrapparCol span={12}>
            <InputStrGroup label="期望薪资" name="expectedSalary" defaultValue={[info.expectedSalaryLower,info.expectedSalaryUpper]} rules={[{validator:customRules.required},{required:true},{validator:customRules.integer}]}/>
          </FormItemWrapparCol>

          <FormItemWrapparCol span={12}>
            <Input label="工作地点"  name='expectedAddress' disabled defaultValue={info.expectedAddress}  placeholder="可输入多项，中间用英文逗号“,”分隔"/>
          </FormItemWrapparCol>

          <FormItemWrapparCol span={12}>
            <Select label="到岗时间" name="dutyTime" defaultValue={toStrings(info.dutyTime)} fetch={DictUtils.getDictByType("comedate")} renderItem={this.renderSelectOption}/>
          </FormItemWrapparCol>

          <FormItemWrapparCol span={12}>
            <Select label="工作类型" name="jobNature" defaultValue={arrayToString(info.jobNature)} mode="multiple" fetch={DictUtils.getDictByType("workproperty")} renderItem={this.renderSelectOption}/>
          </FormItemWrapparCol>

          <FormItemWrapparCol span={24}>
            <Select label="求职状态" name="workStatus" defaultValue={toStrings(info.workStatus)} fetch={DictUtils.getDictByType("jobstatus")} renderItem={this.renderSelectOption}/>
          </FormItemWrapparCol>

          {/*<FormItemWrapparCol span={12}>
            <Input label="个人标签"  name='individualLabel' placeholder="可输入多项，中间用英文逗号“,”分隔"/>
          </FormItemWrapparCol>*/}

          <FormItemWrapparCol span={24}>
            <TextArea autosize={{minRows:4}} label="自我评价"  name='selfEvaluation' defaultValue={info.selfEvaluation}/>
          </FormItemWrapparCol>

            <Button.Group>
              <Button onClick={this.props.editChangeFn}>取消</Button>
              <Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
            </Button.Group>
        </Row>
      </BaseForm>
    )
  }
}
/*工作经验 & 项目经验 组件*/
class PersonJobsProShow extends Component{
  state = {
    add:false
  }
  handleAdd(){
    this.setState({
      add:true
    })
  }
  handleCancle(){
    //console.log(111)
    this.setState({
      add:false
    })
  }
  renderAddForm(){
    let {add} = this.state
    let {type,channelResumeId,actions} = this.props
    if(add && type == "job"){
      return <PersonJobEditItem item={{}} channelResumeId={channelResumeId} actions={actions} editChangeFn={this.handleCancle.bind(this)}/>
    }
    if(add && type == "pro"){
      return <PersonProjectEditItem item={{}} channelResumeId={channelResumeId} actions={actions} editChangeFn={this.handleCancle.bind(this)}/>
    }
  }
  render(){
    let {info,type,channelResumeId,actions,detailType} = this.props
    return(
      <div>
        <h3>{type == "job" ? "工作经验" : "项目经验"}{detailType==10?null:<Button className="add-title" onClick={this.handleAdd.bind(this)}>新增</Button>}</h3>
        {/*content*/}
        {info.map((it,idx)=>{
          return type == "job" ? <PersonJobsItem detailType={detailType} item={it} channelResumeId={channelResumeId} actions={actions}/> : <PersonProjectsItem detailType={detailType} item={it} channelResumeId={channelResumeId} actions={actions}/>
        })}
        {/*addbox*/}
        { this.renderAddForm() }
      </div>
    )
  }
}
/*工作经验item组件*/
class PersonJobsItem extends ItemChangeCommon{

  state = {
    editFlag : false
  }
  renderJobsBaseInfo(){
    let {item} = this.props
    let trade = translateDic("industry",item.trade)
    let companyScale = translateDic("scale",item.companyScale)
    let companyNature = translateDic("companyproperty",item.companyNature)
    let jobNature = translateDic("workproperty",item.jobNature)
    return filterArray([
      companyScale,companyNature,jobNature,trade,item.department,item.reasonsForLeaving,item.subordinates,item.boss
    ]).join(" | ")
  }
  renderShow(){
    let {item,detailType} = this.props
    return(
      <div style={{marginBottom:20}}>
        <h4>
          <span>{`${translateTime(item.duringStart)}-${translateTime(item.duringEnd)}`}</span>
          <span>{item.company}</span>
          <span>{item.jobTitle}</span>

          {detailType==10?null:<Button className="item-edit-btn" onClick={this.handleEdit.bind(this)}>编辑</Button>}
        </h4>
        {this.renderJobsBaseInfo()}
        <BaseInfoItem label="工作内容" info={item.jobContent}/>
        <BaseInfoItem label="主要成就" info={item.achievements}/>
      </div>
    )
  }
  renderEdit(){
    return <PersonJobEditItem {...this.props} editChangeFn={this.handleCancelEdit.bind(this)}/>
  }
}
/*工作经验编辑item组件*/
class PersonJobEditItem extends FormPage{
  saveInfo(){
    let {actions} = this.props
    this.form.validateFieldsAndScroll((err,values) => {
        if (err) {
           return;
        }
        actions.savePersonJobAction(values).then(()=>{
          this.props.editChangeFn()
        })
     });
  }
  renderSelectOption(data,idx){
      return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  render(){
    let {item} = this.props
    //console.log(this.props)
    return(
      <BaseForm ref={this.saveFormRef}>
        <FormItem>
          <Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
        </FormItem>
        <FormItem>
          <Input type="hidden" name="id" defaultValue={item.id}/>
        </FormItem>
        <FormItemWrapparCol span={12}>
          <CalendarPicker label="时间"  name='duringDates' defaultValue={[translateTimeToMoment(item.duringStart),translateTimeToMoment(item.duringEnd)]} rules={[{required: true, message: "时间不可为空"},{validator:customRules.required}]}/>
        </FormItemWrapparCol>
        <FormItemWrapparCol span={12}>
          <Input label="公司名称"  name='company' defaultValue={item.company} rules={[{required: true, message: "公司名称不可为空"},{validator:customRules.required}]}/>
        </FormItemWrapparCol>
        <FormItemWrapparCol span={12}>
          <Input label="职位名称"  name='jobTitle' defaultValue={item.jobTitle} rules={[{required: true, message: "职位名称不可为空"},{validator:customRules.required}]}/>
        </FormItemWrapparCol>
        <FormItemWrapparCol span={12}>
          <Select label="行业" name="trade" defaultValue={toStrings(item.trade)} fetch={DictUtils.getDictByType("industry")} renderItem={this.renderSelectOption}/>
        </FormItemWrapparCol>
        <FormItemWrapparCol span={12}>
            <Input label="部门"  name='department' defaultValue={item.department}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Select label="公司规模" name="companyScale" defaultValue={toStrings(item.companyScale)} fetch={DictUtils.getDictByType("scale")} renderItem={this.renderSelectOption}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Select label="公司性质" name="companyNature" defaultValue={toStrings(item.companyNature)} fetch={DictUtils.getDictByType("companyproperty")} renderItem={this.renderSelectOption}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="离职原因"  name='reasonsForLeaving' defaultValue={item.reasonsForLeaving}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="汇报对象"  name='boss' defaultValue={item.boss}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="下属人数"  name='subordinates' defaultValue={item.subordinates}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Select label="工作性质" name="jobNature" defaultValue={toStrings(item.jobNature)} fetch={DictUtils.getDictByType("workproperty")} renderItem={this.renderSelectOption}/>
          </FormItemWrapparCol>
        <FormItemWrapparCol span={12}>
          <Input label="主要成就"  name='achievements' defaultValue={item.achievements}/>
        </FormItemWrapparCol>
        <FormItemWrapparCol span={24}>
          <TextArea autosize={{minRows:4}} label="工作内容"  name='jobContent' defaultValue={item.jobContent} rules={[{required: true, message: "工作内容不可为空"},{validator:customRules.required}]}/>
        </FormItemWrapparCol>

        <Button.Group>
          <Button onClick={this.props.editChangeFn}>取消</Button>
          <Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
        </Button.Group>
      </BaseForm>
    )
  }
}
/*项目经验组件 item组件*/
class PersonProjectsItem extends ItemChangeCommon{
  state = {
    editFlag : false
  }
  renderShow(){
    let {item,detailType} = this.props
    return (
      <div style={{marginBottom:20}}>
        <h4>
          <span>{`${translateTime(item.duringStart)}-${translateTime(item.duringEnd)}`}</span>
          <span>{item.company}</span>
          <span>{item.title}</span>

          {detailType==10?null:<Button className="item-edit-btn" onClick={this.handleEdit.bind(this)}>编辑</Button>}
        </h4>
        <BaseInfoItem label="项目描述" info={item.description}/>
        <BaseInfoItem label="主要负责" info={item.duty}/>
      </div>
    )
  }
  renderEdit(){
    return <PersonProjectEditItem {...this.props} editChangeFn={this.handleCancelEdit.bind(this)}/>
  }
}
/*项目经验编辑item组件*/
class PersonProjectEditItem extends FormPage{
  saveInfo(){
    let {actions} = this.props
    this.form.validateFieldsAndScroll((err,values) => {
        if (err) {
           return;
        }
        actions.savePersonProAction(values).then(()=>{
          this.props.editChangeFn()
        })
     });
  }
  renderSelectOption(data,idx){
      return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  render(){
    let {item} = this.props
    //console.log(this.props)
    return(
      <BaseForm ref={this.saveFormRef}>
        <Row>
          <FormItem>
            <Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
          </FormItem>
          <FormItem>
            <Input type="hidden" name="id" defaultValue={item.id}/>
          </FormItem>
          <FormItemWrapparCol span={12}>
            <CalendarPicker label="时间" changeCalendarContainer containerToProp={document.body} name='duringDates' defaultValue={[translateTimeToMoment(item.duringStart),translateTimeToMoment(item.duringEnd)]}  rules={[{required: true, message: "时间不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="项目名称"  name='title' defaultValue={item.title} rules={[{required: true, message: "项目名称不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={24}>
            <Input label="所属公司"  name='company' defaultValue={item.company} rules={[{required: true, message: "所属公司不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={24}>
            <TextArea autosize={{minRows:4}} label="项目描述" name='description' defaultValue={item.description} rules={[{required: true, message: "项目描述不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={24}>
            <TextArea autosize={{minRows:4}} label="责任描述"  name='duty' defaultValue={item.duty} />
          </FormItemWrapparCol>

          <Button.Group>
            <Button onClick={this.props.editChangeFn}>取消</Button>
            <Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
          </Button.Group>
        </Row>
      </BaseForm>
    )
  }
}
/*教育经历组件*/
class PersonEducationShow extends Component{
  state = {
    add:false
  }
  handleAdd(){
    this.setState({
      add:true
    })
  }
  handleCancle(){
    this.setState({
      add:false
    })
  }
  render(){
    let {info,channelResumeId,actions,detailType} = this.props
    return(
      <div>
        <h3>教育经历 {detailType == 10 ? null : <Button className="add-title" onClick={this.handleAdd.bind(this)}>新增</Button>}</h3>
        {info.map((it,idx)=>{
          return  <PersonEducationItem  {...this.props} item={it} actions={actions} channelResumeId={channelResumeId}/>
        })}

        {this.state.add ?
          <PersonEducationEditItem actions={actions} channelResumeId={channelResumeId} editChangeFn={this.handleCancle.bind(this)}/>
          :
          null
        }
      </div>
    )
  }
}
/*教育经历item组件*/
class PersonEducationItem extends ItemChangeCommon{
  state = {
    editFlag:false
  }
  renderEduInfo(){
    let {item} = this.props
    let education = translateDic("education",item.degree)

    return filterArray([
      education,item.major
    ]).join(" | ")
  }
  renderShow(){
    let {item,detailType} = this.props
    //console.log(item)
    return(
      <div>
        <h4>
          <span>{`${translateTime(item.duringStart)}-${translateTime(item.duringEnd)}`}</span>
          <span>{item.school}</span>

         {detailType==10?null: <Button className="item-edit-btn" onClick={this.handleEdit.bind(this)}>编辑</Button>}
        </h4>
        {this.renderEduInfo()}
      </div>
    )
  }
  renderEdit(){
    return <PersonEducationEditItem {...this.props} editChangeFn={this.handleCancelEdit.bind(this)}/>
  }
}
/*教育经历编辑item组件*/
class PersonEducationEditItem extends FormPage{
  saveInfo(){
    let {actions} = this.props
    this.form.validateFieldsAndScroll((err,values) => {
        if (err) {
           return;
        }
        actions.savePersonEduAction(values).then(()=>{
          this.props.editChangeFn()
        })
     });
  }
  renderSelectOption(data,idx){
      return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  render(){
    let {item} = this.props
    //console.log(this.props)
    return(
      <BaseForm ref={this.saveFormRef}>
        <Row>
          <FormItem>
            <Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
          </FormItem>
          <FormItem>
            <Input type="hidden" name="id" defaultValue={item.id}/>
          </FormItem>
          <FormItemWrapparCol span={12}>
            <CalendarPicker label="时间" changeCalendarContainer containerToProp={document.body} name='duringDates' defaultValue={[translateTimeToMoment(item.duringStart),translateTimeToMoment(item.duringEnd)]} rules={[{required: true, message: "时间不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="学校名称"  name='school' defaultValue={item.school} rules={[{required: true, message: "学校名称不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="专业名称"  name='major' defaultValue={item.major} rules={[{required: true, message: "专业名称不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Select label="学历/学位" name="degree" changeCalendarContainer containerToProp={document.body} defaultValue={toStrings(item.degree)} fetch={DictUtils.getDictByType("education")} renderItem={this.renderSelectOption} rules={[{required: true, message: "学历/学位不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>

          <Button.Group>
            <Button onClick={this.props.editChangeFn}>取消</Button>
            <Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
          </Button.Group>
        </Row>
      </BaseForm>
    )
  }
}
PersonEducationEditItem.defaultProps={
  item:{}
}
/*技能语言组件*/
class PersonLanguageShow extends Component{
  state = {
    add:false
  }
  handleAdd(){
    this.setState({
      add:true
    })
  }
  handleCancle(){
    this.setState({
      add:false
    })
  }
  render(){
    let {info,channelResumeId,actions,detailType} = this.props
    return(
      <div>
        <h3>技能/语言{detailType == 10 ? null : <Button className="add-title" onClick={this.handleAdd.bind(this)}>新增</Button>}</h3>
        {info.map((it,idx)=>{
          return  <PersonLanguageItem detailType = {detailType} item={it} channelResumeId={channelResumeId} actions={actions}/>
        })}

        { this.state.add ?
          <PersonLanguageEditItem channelResumeId={channelResumeId} actions={actions} editChangeFn={this.handleCancle.bind(this)}/>
          :
          null
        }
      </div>
    )
  }
}
/*技能语言item组件*/
class PersonLanguageItem extends ItemChangeCommon{
  state = {
    editFlag:false
  }
  renderShow(){
    let {item ,detailType} = this.props
    let write = item.writing ? translateDic("degree",item.writing) : ""
    let speak = item.speaking ? translateDic("degree",item.speaking) : ""
    return (
      <div>
        <h4>
          <span>{ item.skill }</span>
          <span>{translateDic("degree",item.level)}</span>

          {detailType==10?null:<Button className="item-edit-btn" onClick={this.handleEdit.bind(this)}>编辑</Button>}
        </h4>
        <h4>
          <span>{ item.language }</span>
        </h4>
        { filterArray([
          write,speak
        ]).join(" | ")}
      </div>
    )
  }
  renderEdit(){
    return <PersonLanguageEditItem {...this.props} editChangeFn={this.handleCancelEdit.bind(this)} />
  }
}
/*技能语言编辑item组件*/
class PersonLanguageEditItem extends FormPage{
  saveInfo(){
    let {actions} = this.props
    this.form.validateFieldsAndScroll((err,values) => {
        if (err) {
           return;
        }
        actions.savePersonLanAction(values).then(()=>{
          this.props.editChangeFn()
        })
     });
  }
  renderSelectOption(data,idx){
      return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
  }
  render(){
    let {item} = this.props
    //console.log(this.props)
    return(
      <BaseForm ref={this.saveFormRef}>
        <Row>
          <FormItem>
            <Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
          </FormItem>
          <FormItem>
            <Input type="hidden" name="id" defaultValue={item.id}/>
          </FormItem>
          {/*  <FormItemWrapparCol span={12}>
            <CalendarPicker label="时间"  name='duringDates' defaultValue={[translateTimeToMoment(),translateTimeToMoment()]} rules={[{required: true, message: "时间不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>*/}
          <FormItemWrapparCol span={12}>
            <Input label="技能"  name='skill' defaultValue={item.skill} rules={[{required: true, message: "技能不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Select label="掌握程度" name="level" defaultValue={toStrings(item.level)} fetch={DictUtils.getDictByType("degree")} renderItem={this.renderSelectOption} rules={[{required: true, message: "掌握程度不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={24}>
            <Input label="语种"  name='language' defaultValue={item.language}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Select label="读写能力" name="writing" defaultValue={toStrings(item.writing)} fetch={DictUtils.getDictByType("degree")} renderItem={this.renderSelectOption}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Select label="听说能力" name="speaking" defaultValue={toStrings(item.speaking)} fetch={DictUtils.getDictByType("degree")} renderItem={this.renderSelectOption}/>
          </FormItemWrapparCol>

          <Button.Group>
            <Button onClick={this.props.editChangeFn}>取消</Button>
            <Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
          </Button.Group>
        </Row>
      </BaseForm>
    )
  }
}
PersonLanguageEditItem.defaultProps={
  item:{}
}
/*证书 组件*/
class PersonCredentialShow extends Component{
  state = {
    add:false
  }
  handleAdd(){
    this.setState({
      add:true
    })
  }
  handleCancle(){
    this.setState({
      add:false
    })
  }
  render(){
    let {info,channelResumeId,actions,detailType} = this.props
    return(
      <div>
        <h3>证书{detailType == 10 ? null : <Button className="add-title" onClick={this.handleAdd.bind(this)}>新增</Button>}</h3>
        {info.map((it,idx)=>{
          return  <PersonCredentialItem detailType={detailType} item={it} channelResumeId={channelResumeId} actions={actions}/>
        })}

        { this.state.add ?
          <PersonCredentialEditItem channelResumeId={channelResumeId} actions={actions} editChangeFn={this.handleCancle.bind(this)}/>
          :
          null
        }
      </div>
    )
  }
}
/*证书item组件*/
class PersonCredentialItem extends ItemChangeCommon{
  state = {
    editFlag:false
  }
  renderShow(){
    let {item,detailType} = this.props
    return(
      <div>
        <h4>
          <span>{translateTime(item.getDate)}</span>
          <span>{item.title}</span>
          <span>{item.score}</span>

          {detailType==10?null:<Button className="item-edit-btn" onClick={this.handleEdit.bind(this)}>编辑</Button>}
        </h4>
      </div>
    )
  }
  renderEdit(){
    return <PersonCredentialEditItem {...this.props} editChangeFn={this.handleCancelEdit.bind(this)}  />
  }
}
/*证书编辑item组件*/
class PersonCredentialEditItem extends FormPage{
  saveInfo(){
    let {actions} = this.props
    this.form.validateFieldsAndScroll((err,values) => {
        if (err) {
           return;
        }
        actions.savePersonCreAction(values).then(()=>{
          this.props.editChangeFn()
        })
     });
  }
  render(){
    let {item} = this.props
    //console.log(this.props)
    return(
      <BaseForm ref={this.saveFormRef}>
        <Row>
          <FormItem>
            <Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
          </FormItem>
          <FormItem>
            <Input type="hidden" name="id" defaultValue={item.id}/>
          </FormItem>
          <FormItemWrapparCol span={24}>
            <DatePicker label="时间"  name='getDate' defaultValue={translateTimeToMoment(item.getDate)} rules={[{required: true, message: "时间不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="证书名称"  name='title' defaultValue={item.title} rules={[{required: true, message: "证书名称不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="成绩"  name='score' defaultValue={item.score} rules={[{required: true, message: "成绩不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>

          <Button.Group>
            <Button onClick={this.props.editChangeFn}>取消</Button>
            <Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
          </Button.Group>
        </Row>
      </BaseForm>
    )
  }
}
PersonCredentialEditItem.defaultProps={
  item:{}
}
/*培训经历组件*/
class PersonTraningShow extends Component{
  state = {
    add:false
  }
  handleAdd(){
    this.setState({
      add:true
    })
  }
  handleCancle(){
    this.setState({
      add:false
    })
  }
  render(){
    let {info,channelResumeId,actions,detailType} = this.props
    return(
      <div>
        <h3>培训经历{detailType == 10 ? null : <Button className="add-title" onClick={this.handleAdd.bind(this)}>新增</Button>}</h3>
        {info.map((it,idx)=>{
          return  <PersonTraningItem detailType={detailType} item={it} channelResumeId={channelResumeId} actions={actions}/>
        })}
        {this.state.add ?
          <PersonTraningEditItem channelResumeId={channelResumeId} actions={actions} editChangeFn={this.handleCancle.bind(this)}/>
          :
          null
        }
      </div>
    )
  }
}
/*培训经历item组件*/
class PersonTraningItem extends ItemChangeCommon{
  state = {
    editFlag:false
  }
  renderTraningInfo(){
    let {item} = this.props
    return filterArray([
      item.certificate,item.trainingAddress ? `培训地点：${item.trainingAddress}` : ""
    ]).join(" | ")
  }
  renderShow(){
    let {item,detailType} = this.props
    return(
      <div>
        <h4>
          <span>{`${translateTime(item.duringStart)}-${translateTime(item.duringEnd)}`}</span>
          <span>{item.trainingAgency}</span>
          <span>{item.trainingCourse}</span>

          {detailType==10?null:<Button className="item-edit-btn" onClick={this.handleEdit.bind(this)}>编辑</Button>}
        </h4>
        <div>{this.renderTraningInfo()}</div>
        {item.description ?
          <div>
            <h4>详细描述</h4>
            <span>{item.description}</span>
          </div>:null
        }
      </div>
    )
  }
  renderEdit(){
    return <PersonTraningEditItem {...this.props} editChangeFn={this.handleCancelEdit.bind(this)}/>
  }
}
/*培训经历编辑item组件*/
class PersonTraningEditItem extends FormPage{
  saveInfo(){
    let {actions} = this.props
    this.form.validateFieldsAndScroll((err,values) => {
        if (err) {
           return;
        }
        actions.savePersonTraAction(values).then(()=>{
          this.props.editChangeFn()
        })
     });
  }
  render(){
    let {item} = this.props
    return(
      <BaseForm ref={this.saveFormRef}>
        <Row>
          <FormItem>
            <Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
          </FormItem>
          <FormItem>
            <Input type="hidden" name="id" defaultValue={item.id}/>
          </FormItem>
          <FormItemWrapparCol span={12}>
            <CalendarPicker label="时间" changeCalendarContainer containerToProp={document.body} name='duringDates' defaultValue={[translateTimeToMoment(item.duringStart),translateTimeToMoment(item.duringEnd)]} rules={[{required: true, message: "时间不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="培训机构"  name='trainingAgency' defaultValue={item.trainingAgency} rules={[{required: true, message: "培训机构不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="培训课程"  name='trainingCourse' defaultValue={item.trainingCourse} rules={[{required: true, message: "培训课程不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={12}>
            <Input label="获得证书"  name='certificate' defaultValue={item.certificate} rules={[{required: true, message: "获得证书不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={24}>
            <TextArea autosize={{minRows:4}} label="培训地点"  name='trainingAddress' defaultValue={item.trainingAddress} rules={[{required: true, message: "培训地点不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>
          <FormItemWrapparCol span={24}>
            <TextArea autosize={{minRows:4}} label="详细描述"  name='description' defaultValue={item.description} rules={[{required: true, message: "详细描述不可为空"},{validator:customRules.required}]}/>
          </FormItemWrapparCol>

          <Button.Group>
            <Button onClick={this.props.editChangeFn}>取消</Button>
            <Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
          </Button.Group>
        </Row>
      </BaseForm>
    )
  }
}
PersonTraningEditItem.defaultProps={
  item:{}
}

/*offer*/
export class PersonOffer extends Component{
  constructor(props){
    super(props)
    this.state = {
      edit: true
    }
  }
  componentWillMount(){
    let {info} = this.props
    //console.log(info)
    if(info){
      this.setState({
        edit: info.offerId ? false : true
      })
    }
  }
  componentWillReceiveProps(nextProps){
    if(JSON.stringify(nextProps.info) !== JSON.stringify(this.props.info)){
      this.setState({
        edit: nextProps.info.offerId ? false : true
      })
    }
  }
  componentDidMount(){
    let {actions,resumeId} = this.props
    actions.getOfferAction({resumeId:resumeId})
  }
  changeEdit(){
    let {edit} = this.state
    this.setState({
      edit:!edit
    })
  }
  renderWhich(){
    let {info,resumeId,actions,item,detailType,authorization} = this.props
    if(detailType == 3 ||detailType == 4 || detailType == 10 || detailType == 1||!authorization){
      return info.offerId ? <PersonOfferShow info={info} reSend={false} handleEdit={this.changeEdit.bind(this)}/> : <div className="list-no-data no-offer-record">暂无offer记录</div>
    }
    return this.state.edit ? <PersonOfferEdit resumeId={resumeId} actions={actions} item={item} info={info} handleReset={this.changeEdit.bind(this)}/> : <PersonOfferShow info={info} handleEdit={this.changeEdit.bind(this)}/>
  }
  render(){
    let {item:{status},detailType} = this.props
    return status < 3 && detailType == 2  ? <div className="list-no-data no-offer-record">暂无offer记录</div> : this.renderWhich()
  }
}
class PersonOfferShow extends Component{
  render(){
    let {info,reSend} = this.props
    return (
      <div>
        <BaseInfoItem label="offer" info='已发送'/>
        <BaseInfoItem label="预计入职日期" info={translateTime(info.expectedEntryTime,"YYYY-MM-DD")}/>
        <BaseInfoItem label="发件人" info={info.mailFrom}/>
        <BaseInfoItem label="收件人" info={info.mailTo}/>
        <BaseInfoItem label="邮件主题" info={info.mailSubject}/>
        <div dangerouslySetInnerHTML={{__html: info.mailContent}} />
        { reSend ? <Button onClick={this.props.handleEdit} style={{float:"right"}}>再发一封</Button> : null}
      </div>
    )
  }
}
PersonOfferShow.defaultProps = {
  reSend:true
}
class PersonOfferEdit extends FormPage{
  state={
    which:"2"
  }

  updateFieldValue(name,value){
      let {item} = this.props
       //console.log(item)
        var object={}
        let translate = [
              // {'面试时间':interviewTime},
              {'职位名称':item.jobTitle},
              {'姓名':item.name},
              {'入职时间':item.expectedEntryTime},
              {'所属部门':''}
            ]
        let exprctedEntryTime = moment(this.form.getFieldValue("expectedEntryTime")).format("YYYY-MM-DD HH:mm")
        if(value.length){
            // value = value.replace("{面试时间}",interviewTime)
            value = value.replace("{职位名称}",item.jobTitle)
            value = value.replace("{姓名}",item.name)
            value = value.replace("{入职时间}",exprctedEntryTime)
            //value = value.replace("{所属部门}",'')
        }
        object[name]=value
        this.form.setFieldsValue(object)
    }

  renderSmsOrEmail(){
      let {item} = this.props
      let {which} = this.state

      if(which == "2"){
        return (<EmailTemplateLinkage  mailSubject="录用通知书"  updateFieldValue={this.updateFieldValue.bind(this)} templateUse={"2"} mailTo={item.email}/>)
      }else{
        return null
      }
  }
  offerSubmit(){
    let {actions} = this.props
    this.form.validateFieldsAndScroll((err, values) => {
        if (err) {
            return;
        }
        actions.offerOptionAction(values)
    });
  }
  handleChange(e){
    this.setState({
      which:e.target.value
    })
  }
  render(){
    const options = [
        /*{ label: '不通知', value: '0' },*/
        { label: '邮件通知', value: '2'},
        { label: '不通知', value: '0'},
    ];
    let {info} = this.props
    //console.log(this.props)
    return(
      <BaseForm ref={this.saveFormRef}>
        <FormItem>
          <Input type="hidden" name="resumeId" defaultValue={this.props.resumeId}/>
        </FormItem>
        <FormItem>
          <Input type="hidden" name="offerId" defaultValue={info.offerId}/>
        </FormItem>
        <FormItem>
          <DatePicker label="预计入职日期" name="expectedEntryTime" defaultValue={info.expectedEntryTime?moment(info.expectedEntryTime):null} rules={[{required: true, message: "预计入职时间不可为空"},{validator:customRules.required}]}/>
        </FormItem>
        {/*<FormItem>
          <Input label="发件人" name="sendEmail"/>
        </FormItem>
        <FormItem>
          <Input label="收件人" name="receiveEmail"/>
        </FormItem>*/}
        <FormItem>
          <RadioGroup name="noticeType" label="通知候选人" options={options}  onChange={this.handleChange.bind(this)} defaultValue={this.state.which}/>
        </FormItem>
        {this.renderSmsOrEmail()}
        <Button onClick={this.offerSubmit.bind(this)} style={{float:"right"}}>发送</Button>
      </BaseForm>
    )
  }
}
/*备注*/
export class PersonRemarks extends FormPage{
  componentDidMount(){
    let {actions,resumeId} = this.props
    actions.getRemarkAction({resumeId:resumeId})
  }

  componentWillReceiveProps(nextProps){
    let {actions,resumeId} = this.props
    if(nextProps.resumeId!=resumeId){

    actions.getRemarkAction({resumeId:nextProps.resumeId})
    }
  }
  handleSubmit(){
    let {actions} = this.props
    let formDom = this.form
    formDom.validateFieldsAndScroll((err, values) => {
        if (err) {
            return;
        }
        formDom.resetFields("context")
        actions.sendRemarkAction(values)
    });
  }
  render(){
    let {resumeId,info,item:{jobId,name},detailType} = this.props
    return (
      <div className="PersonRemarksBox">
          {detailType==10
            ?null//员工界面无操作
            :
            <BaseForm ref={this.saveFormRef} layout="vertical">
            <div className="remarks_text">
              <FormItem>
                <Input type="hidden" name="jobId" defaultValue={jobId}/>
              </FormItem>
              <FormItem>
                <Input type="hidden" name="resumeId" defaultValue={resumeId}/>
              </FormItem>
              <FormItem>
                <Input type="hidden" name="name" defaultValue={name}/>
              </FormItem>
              <FormItem>
                <TextArea className="Textarea" name="context" placeholder="输入对该候选人的备注" autosize={{minRows:6}} rules={[{required: true, message: "备注内容不可为空"},{validator:customRules.required},{max:50,message:"限制50个字"}]} />
              </FormItem>
              <Button className="button_save" type="primary" onClick={this.handleSubmit.bind(this)}>保存</Button>
            </div>
          </BaseForm>}
          <div className="remarks_list">
            <List
              itemLayout="horizontal"
              dataSource={info}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar style={{ backgroundColor: '#3fc2a0' }}>{item.inputName.substring(0,1)}</Avatar>}
                    title={item.inputName}
                    description={
                        <div>
                            <div>{item.context}</div>
                            <div>{translateTime(item.inputTime,"YYYY-MM-DD HH:mm")}</div>
                        </div>}
                  />
                </List.Item>
              )}
            />
          </div>
      </div>
    )
  }
}
/*操作记录*/
export class PersonOptionRecord extends Component{
  componentDidMount(){
    let {actions,resumeId} = this.props
    actions.getOptionAction({resumeId:resumeId})
  }
  componentWillReceiveProps(nextProps){
      let {actions,resumeId} = this.props;
      if(JSON.stringify(nextProps.resumeId) !== JSON.stringify(this.props.resumeId)){
        actions.getOptionAction({resumeId:nextProps.resumeId})
      }
      if(JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)){
        if(nextProps.location.state && nextProps.location.state.key=="reload"){
          actions.getOptionAction({resumeId:nextProps.resumeId,time:timestamp()})
        }
      }
  }
  render(){
    let {info} = this.props
    return(
      <Timeline>
        {info.map((it,idx)=>{
          return <Timeline.Item color="green">
            <PersonOptionRecordItem item={it}/>
          </Timeline.Item>
        })}
      </Timeline>
    )
  }
}
class PersonOptionRecordItem extends Component{
  render(){
    let {item} = this.props
    return (
      <div classNmae="optionRecordItem">
        <div>{translateTime(item.inputTime,"YYYY-MM-DD HH:mm")}</div>
        <div>{item.content}</div>
        <div>操作人：{item.inputAcc}</div>
      </div>
    )
  }
}
PersonOptionRecord.defaultProps={
  location:{}
}
/*沟通记录*/
export class PersonCommunitcate extends Component{
  componentDidMount(){
    let {actions,resumeId} = this.props
    actions.getCommiuncateAction({resumeId:resumeId})
  }
  componentWillReceiveProps(nextProps) {
    let { actions, resumeId } = this.props
    if (nextProps.resumeId != resumeId) {
      actions.getCommiuncateAction({ resumeId: nextProps.resumeId })
    }
  }
  render(){
    let {info} = this.props
    return(
      <Timeline>
        {info.map((it,idx)=>{
          return <Timeline.Item color="green">
            <PersonCommunitcateItem item={it} name={name}/>
          </Timeline.Item>
        })}
      </Timeline>
    )
  }
}
class PersonCommunitcateItem extends Component{
  playRecord(item){
      let {id,recordUrl,showTimeLength,calledNum,candidateName} = item
      let  showRecordPlay ={
          RecordPlay:{
              code:id,
              name:candidateName == "" ? "播放录音" : candidateName,
              phone:calledNum,
              url:recordUrl,
              dur:showTimeLength+"",
              bPlay:"1"
          }
      };
      let  showRecordPlayStr = JSON.stringify(showRecordPlay);
      global.invokeMethod('ShowRecordPlay',showRecordPlayStr)
  }
  render(){
    let {item} = this.props
    return(
      <div className="comunitcattionItem">
        <Row gutter={10}>
          <Col span={18}>
            <span>通话时间：{item.startTime}</span>
          </Col>
          <Col span={6}>
            <span>{item.showTimeLength == "00:00:00" ? <Icon type="play-circle" style={{color:"#ccc",marginRight:10}}/> : <Icon type="play-circle" style={{color:"#0e8df8",marginRight:10,cursor:"pointer"}} onClick={this.playRecord.bind(this,item)}/>}{item.showTimeLength}</span>
          </Col>
        </Row>
      </div>
    )
  }
}
/*面试记录*/
export class PersonFeedRecord extends Component{
  componentDidMount(){
    let {actions,resumeId} = this.props
    actions.getFeedDataAction({resumeId:resumeId})
  }
  componentWillReceiveProps(nextProps){
    console.log(JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state),nextProps)
      let {actions,resumeId} = this.props
      if(JSON.stringify(nextProps.resumeId) !== JSON.stringify(this.props.resumeId)){
        actions.getFeedDataAction({resumeId:nextProps.resumeId})
      }
      if(JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)){
        if(nextProps.location.state && nextProps.location.state.key=="reload"){
          actions.getFeedDataAction({resumeId:nextProps.resumeId})
        }
      }
  }
  handleAddFeed(item){
    let {actions,router} = this.props
    actions.feedAction(router,item)
  }
  render(){
    let {info:{list},actions,router,detailType,item,authorization} = this.props
    let {status,isLock} = item
    /*面试数组数据map容错*/
		let lists = list ? list : []
    /*detailType为10时为员工  特殊开辟*/
    return detailType==2 || detailType==3 ||detailType==4 || detailType==10 ?(
      <div className="feedRecord-box">
          <Permission expression={status <= 2 && detailType==2 && !isLock && authorization}>
            <Button icon="plus" onClick={this.handleAddFeed.bind(this,item)} className="add-feed">添加面试</Button>
          </Permission>
					{lists.length?
					<Timeline>
            {lists.map((it,idx)=>{
              return <Timeline.Item
              dot={<Icon type="calendar" style={{ fontSize: '20px' ,color:"#fff"}} />
            } key={idx}>
              <PersonFeedRecordItem item={it} actions={actions} router={router} detailType={detailType}/>
            </Timeline.Item>
            })}
					</Timeline>
					:
					<div className="feed-no-data">尚未安排面试</div>}
      </div>
    ) : (<div className="feedRecord-box">
          <div className="feed-no-data">尚未安排面试</div>
        </div>)
  }
}
PersonFeedRecord.defaultProps={
  location:{}
}
class PersonFeedRecordItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      urgeShow:props.item.isUrge
    }
  }
  componentDidMount(){
    if(JSON.stringify(this.props.item) !== "{}"){
      this.setState({
        urgeShow:this.props.item.isUrge
      })
    }
  }
  componentWillReceiveProps(nextProps){
    if(JSON.stringify(this.props.item) !== JSON.stringify(nextProps.item)){
      this.setState({
        urgeShow:nextProps.item.isUrge
      })
    }
  }
  handleFeedBack(resumeId,planId,interviewer){
    let {actions,router} = this.props
    actions.feedbackAction(router,planId,undefined,interviewer)
  }
  handleUrge(id){
    let {actions,router} = this.props
    let that = this
    actions.urgeFeedbackAction({id:id}).then(()=>{
      that.setState({
        urgeShow:true
      })
    })
  }
  handlDelay(id,resumeId,type,time){
    let {actions,router} = this.props
    actions.delayAction(router,id,type,time)
  }
  renderInterviewList(it,item,resumeId){
    let {detailType} = this.props
    if(item.statusStr != 6 && detailType != 10){
      return it.isFeedback ?
        <Button onClick={this.handleFeedBack.bind(this,resumeId,it.interviewPlanId,it.interviewerId)}>查看反馈</Button>:
        <Button onClick={this.handleFeedBack.bind(this,resumeId,it.interviewPlanId,it.interviewerId)}>填写反馈</Button>
    }
  }
  renderFeedBackList(){
    let {item:{feedbackList,resumeId},item} = this.props
    let that = this
    let list = feedbackList ? feedbackList : []
    //console.log(list)
    return list.map((it,idx)=>{
      //console.log(it)
      return it ? (
        <div className="item-feedback">
          <span>{it.interviewer || it.interviewerId}</span>
          <span className="feedback-state">{translateDic("feedbackstate",it.feedbackState)}</span>
          {that.renderInterviewList(it,item,resumeId)}
        </div>
      ) : null
    })
  }
  renderBtns(){
    let {item,detailType} = this.props
    let {urgeShow} = this.state
    if(detailType == 10 ){/*为员工时不返回按钮**/
      return null
    }
    if(item.statusStr == 1){
      return (<ButtonGroup>
        <Button className="reset-interview-time" onClick={this.handlDelay.bind(this,item.id,item.resumeId,item.type,item.interviewTime)}>调整面试时间</Button>
      </ButtonGroup>)
    }else if(item.isFeedback != 2 && item.statusStr != 6 && !urgeShow){
      return(<ButtonGroup>
        <Button onClick={this.handleUrge.bind(this,item.id)}>催促反馈</Button>
      </ButtonGroup>)
    }

  }
  render(){
    let {item} = this.props
    //console.log(item)
    let json = {
      2:"#ed6492",
      3:"#ff8156",
      4:"#38c4a7"
    }
    return(
      <div className="feedRecored-item">
        <div className="item-head"><Icon type="down" /><span className="item-head-time">{translateTime(item.interviewTime,"MM月DD日")}</span><span className="feed-status">{translateDic("interviewstate",item.statusStr)}</span></div>
        <div className="item-body">
          <div className="item-feed-info">
            面试信息：
            <Tag className="interview-stage-tag" color={json[item.type]}>{translateDic("interviewstage",item.type)}</Tag>
            {translateTime(item.interviewTime,"HH:mm")}
            {this.renderBtns()}
          </div>
          <div className="item-feedback-info">
            {this.renderFeedBackList()}
          </div>
        </div>
      </div>
    )
  }
}
PersonFeedRecordItem.defaultProps={
  item:{}
}
/*附加信息*/
export class ExtraInformation extends Component{
  state={
    editid:"",
    newItem:undefined,
    info:{}
  }
  componentDidMount(){
    const {actions,resumeId}=this.props
    actions.listLinkAction({"resumeId":resumeId})
    actions.fetchAdditionInfoAction({"resumeId":resumeId})
  }
  componentWillReceiveProps(nextProps) {
    let { actions, resumeId } = this.props
    if (nextProps.resumeId != resumeId) {

      actions.listLinkAction({ resumeId: nextProps.resumeId })
      actions.fetchAdditionInfoAction({ resumeId: nextProps.resumeId })
    }
  }
  handlerAdditionDelete(id){
  // handlerDelete
    const {actions,resumeId}=this.props
    actions.deleteAdditionInfoAction({id}).then(()=>{
      actions.fetchAdditionInfoAction({"resumeId":resumeId})
    })
  }
  handleImg(url,item){
    let that = this
    if(item.type == 1){
      return new API().fetch(`${APP_SERVER}/registration/infoJson`,{
        method:'POST',
        body:{id:item.additionId}
      }).then((json) => {
        return Modal.info({
           title: "面试登记表",
           className:"detailShow",
           maskClosable:true,
           centered:true,
           width:'1100px',
           content: (
             <ApplyFormView info={json}/>
           )
         })
      });

    }else{
      return Modal.info({
        title: "查看图片",
        width:"750px",
        centered:true,
        className:"detailShow",
        maskClosable:true,
        content: (
          <div><img src={url} style={{width:"100%"}}/></div>
        )
      })
    }
  }
  beforeUpload(file){
    let {name} = file
    let suffix = name.split(".").pop()
    if(suffix == "jpg" || suffix == "png" || suffix == "jpeg"){
      return true
    }else{
      message.warning("图片格式只支持jpg,png和jpeg")
      return false
    }
  }
  renderUploadList(){
    const {actions,resumeId,info,detailType}=this.props
    // let data=[{fileName:"abc.jpg",url:"http://www.baidu.com",type:"jpg"},{fileName:"信息登记表",url:"http://www.baidu.com",type:"rar"}]
    return (
      <List
      header={<div>信息登记表</div>}

      footer={detailType==10?null//员工无操作
        :<FileUpload accept="image/jpg, image/png, image/jpeg" beforeUpload={this.beforeUpload}  text="上传信息登记表" action={`/fileUpload/file/uploadResumeAttr?resumeId=${resumeId}&s=`} uploadType="1" onChange={()=>{}} onSuccess={()=>{
        actions.fetchAdditionInfoAction({"resumeId":resumeId,time:timestamp()})
      }}>
        <Button>上传信息登记表</Button>
        </FileUpload>}
      dataSource={info.files}
      renderItem={item => (<List.Item
        actions={detailType==10?null//员工无操作
        :[<Popconfirm onConfirm={this.handlerAdditionDelete.bind(this,item.id)} title="是否确定删除这条数据" okText="是" cancelText="否">
          <Icon type="delete"  />
        </Popconfirm>]}
        ><span onClick={this.handleImg.bind(this,item.fileUrl,item)} style={{cursor:"pointer"}}>{item.name}</span></List.Item>)}
      />
    )
  }
  editChange(e){
    this.setState({
      textVal:e.target.value
    })
  }
  handlerEdit(id){
    this.setState({
      editid:id
    })
  }
  handleAdd(){
    const {actions,resumeId}=this.props
    this.setState({
      editid:undefined,
      newItem:{
        id:undefined,
        personalLink:"",
        resumeId:resumeId
      }
    })
  }
  handlerSave(id,personalLink){
    const {actions,resumeId}=this.props
    const {textVal} = this.state

    actions.saveLinkAction({
      id,personalLink:textVal || personalLink,resumeId
    }).then(()=>{
      this.setState({
        editid:"",
        newItem:undefined
      })
        actions.listLinkAction({"resumeId":resumeId,time:timestamp()})
    })
  }
  handlerDelete(id){
    const {actions,resumeId}=this.props
    actions.deleteLinkAction({id}).then(()=>{
        actions.listLinkAction({"resumeId":resumeId,time:timestamp()})
    })
  }
  openPersonLink(link){
    global.invokeMethod('ShowPublicUrl',link)
  }
  renderLinksList(){
    const {info,detailType}= this.props
    const {editid,newItem} = this.state
    // let data=[{id:"abc",personalLink:"http://www.baidu.com"},{id:"abcc",personalLink:"http://www.baidu.com"}]
    return (
      <List
      header={<div>个人链接</div>}
      dataSource={newItem?[].concat(info.links).concat(newItem):info.links}
      // dataSource={data}
      footer={detailType==10?null//员工无操作
        :<Button icons="add" onClick={this.handleAdd.bind(this)}>添加个人链接</Button>
      }
      renderItem={item => (<List.Item actions={ editid!=item.id ? [
        detailType==10?null//员工无操作
        :
        <Icon onClick={this.handlerEdit.bind(this,item.id)} type="edit" />,
        detailType==10?null//员工无操作
        :<Popconfirm onConfirm={this.handlerDelete.bind(this,item.id)} title="是否确定删除这条数据" okText="是" cancelText="否">
            <Icon type="delete"  />
          </Popconfirm>
        ]:[<Icon onClick={this.handlerSave.bind(this,item.id,item.personalLink)} type="save" />]}>
        { editid==item.id ? (<Input defaultValue={item.personalLink} onChange={this.editChange.bind(this)}/>):(<span onClick={this.openPersonLink.bind(this,item.personalLink)} style={{cursor:"pointer"}}>{item.personalLink}</span>)}
      </List.Item>)}
      />
    )
  }
  render(){
    return (
      <div className="extra-information">
        {this.renderUploadList()}
        {this.renderLinksList()}
      </div>
    )
  }
}
