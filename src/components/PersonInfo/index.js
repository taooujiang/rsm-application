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
import moment from 'moment'
import {routerActions, push, replace} from 'react-router-redux'
import {FormPage} from 'app/components/Page'
import BaseForm, {FormItem, customRules} from 'app/components/BaseForm'
import FileUpload from 'app/components/FileUpload'
import CalendarPicker from 'app/components/CalendarPicker'
import {ImgUpload} from 'app/components/FileUpload'
import InputStrGroup from 'app/components/InputStrGroup'
import DictUtils from 'app/utils/DictUtils'
import ApplyFormView from 'app/app_modules/ApplyForm/ApplyFormShow.view'
import API from 'app/utils/FetchAPI'
import styles from './style.less'

/*引入简历组件*/
import PersonOffer from './part/offer'
import PersonOption from './part/option'
import PersonFeedRecord from './part/feed'
/*导入小组件*/
import  {
  BaseInfoItem,
  InfoInline,
  FormItemWrapparCol,
	translateDic,
	translateTime,
	translateTimeToMoment,
	toStrings,
	timestamp,
	arrayToString,
	filterArray
} from './part/little'

export {
	PersonOffer,
	PersonOption,
	PersonFeedRecord
}

const ButtonGroup = Button.Group
const {TextArea} = Input
const RadioGroup = Radio.Group
const MonthPicker = DatePicker.MonthPicker


			/**打印函数start*/
			var CreatedOKLodop7766 = null,
				CLodopIsLocal;

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
						}
					else if (verOPR) {
						verOPR = verOPR[0].match(/\d+/);
						if (verOPR[0] >= 32)
							return true;
						}
					else if ((!verTrident) && (!verIE)) {
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
							if (LODOP !== undefined) {
								LODOP.SET_LICENSES("", "13528A153BAEE3A0254B9507DCDE2839", "", "");
								return LODOP
							}
							// document.body.innerHTML = strCLodopInstall_1 + (CLodopIsLocal ? strCLodopInstall_2 : "") + strCLodopInstall_3 + document.body.innerHTML;
							message.info("请正确安装打印插件，如已安装请刷新后重试！")
							global.invokeMethod('CefToShellExe', "CLodop_Setup_for_Win32NT.exe")
							return;
						} else {
							if (CLODOP.CVERSION < "3.0.4.8") {
								// document.body.innerHTML = strCLodopUpdate + document.body.innerHTML;
								message.info("请正确安装打印插件！")
								global.invokeMethod('CefToShellExe', "CLodop_Setup_for_Win32NT.exe")
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
							}
						else if (!CreatedOKLodop7766) {
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
							global.invokeMethod('CefToShellExe', "CLodop_Setup_for_Win32NT.exe")
							return LODOP;
						}
					}
					if (LODOP.VERSION < "6.2.2.3") {
						if (!needCLodop())
							// document.body.innerHTML = (is64IE ? strHtm64_Update : strHtmUpdate) + document.body.innerHTML;
							return LODOP;
						}
					//===如下空白位置适合调用统一功能(如注册语句、语言选择等):===
					LODOP.SET_LICENSES("", "13528A153BAEE3A0254B9507DCDE2839", "", "");
					//=======================================================
					return LODOP;
				} catch (err) {
					message.warning("getLodop出错:" + err);
				}
			}
			/**打印函数end*/

/* 默认导出组件  头身体分离 */
export default class PersonInfoPanel extends Component {
	render() {
		let {item, optionbtn, headNode, children} = this.props
		return (<div className="person-info-pannel">
			{headNode}
			{children}
		</div>)
	}
}
/* ItemChange（简历编辑表单公用类） */
class ItemChangeCommon extends Component {
	handleEdit() {
		this.setState({editFlag: true})
	}
	handleCancelEdit() {
		this.setState({editFlag: false})
	}
	renderWhich() {
		let {editFlag} = this.state
		return editFlag
			? this.renderEdit()
			: this.renderShow()
	}
	render() {
		let {item} = this.props
		return this.renderWhich()
	}
}
function fake_click(obj) {
	var ev = document.createEvent("MouseEvents");
	ev.initMouseEvent(
		"click", true, false, window, 0, 0, 0, 0, 0
		, false, false, false, false, 0, null
	);
	obj.dispatchEvent(ev);
}

function export_raw(name, data) {
	var urlObject = window.URL || window.webkitURL || window;
	var export_blob = new Blob([data]);
	var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
	save_link.href = urlObject.createObjectURL(export_blob);
	save_link.download = name;
	fake_click(save_link);
}
function Img(i) {
	var imgs = document.getElementsByTagName('img');
	for(var i=0;i<imgs.length;i++)imgs[i].style.width='100%'
}
/* tabs组件开始 */
export class PersonTabBaseInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			infoEdit: false,
			objEdit: false,
			jobEdit: false,
			proEdit: false,
			eduEdit: false,
			lanEdit: false,
			credEdit: false,
			trainEdit: false,
			showType: 1
		}
		/* showtype 1 标准  2 原始 3 编辑 */
	}
	// componentWillUnmount() {
	// 	window.addEventListener('resize', changeFrameHeight())
	// }
	componentDidMount() {
		let {actions, id} = this.props
		//id = "04e7fc53e9b6469ab527168d0346f51b"
		actions.personBaseAction({id: id})
	}
	componentWillReceiveProps(nextProps) {
		let {actions, id} = this.props;
		if (JSON.stringify(nextProps.id) !== JSON.stringify(this.props.id)) {
			actions.personBaseAction({id: nextProps.id})
		}
	}
	changeFlag(type, value) {
		let states = Object.assign({}, this.state, {
			infoEdit: false,
			objEdit: false,
			salaryEdit: false,
			jobEdit: false,
			proEdit: false,
			eduEdit: false,
			lanEdit: false,
			credEdit: false,
			trainEdit: false
		}, {[type]: value})
		this.setState({
			...states
		})
	}
	renderOrigin() {
		let {showType} = this.state
		this.setState({
			showType: showType == 1
				? 2
				: 1
		})
	}

	
	// 标准简历下载
	handleDownload2(){
		let {
			info: {
				resumeInfo: {
					sourceUrl,
					name
				}
			}
		} = this.props
		let stylesText = '<style>.resume-origin{top:-40px}.personinfo-detailHead{padding:10px;position:relative}.personinfo-detailHead .part-editBtn{position:absolute;right:10px;top:5px;border:none;color:#58b1f0}.personinfo-detailHead .person-headicon{width:80px;height:auto;border-radius:50%;margin:0 20px}.personinfo-detailHead .personinfo-headInfo{display:inline-block;vertical-align:bottom}.personinfo-detailHead .personinfo-headInfo .contactInfo span{margin-right:20px}.personinfo-detailHead .personinfo-headInfo .contactInfo span i{margin-right:10px;font-size:14px;color:#333}.salary-info{border-bottom:none;padding:20px;margin-top:10px;position:relative}.salary-info>h3{color:#32a0eb}.salary-info>h3>span{color:rgba(0,0,0,.65);margin-left:20px;font-size:12px}.salary-info .part-editBtn{position:absolute;right:10px;top:5px;border:none;color:#58b1f0}.salary-info .baseinfo-item{display:inline-block;width:24%}.otherInfo{padding:10px;line-height:24px}.otherInfo>div{padding:10px 60px 10px 10px;position:relative}.otherInfo>div .part-editBtn{position:absolute;right:0;top:0;border:none;color:#58b1f0}.otherInfo>div>h3{color:#32a0eb}.otherInfo>div>h3 .add-title{font-size:12px;border:none;color:#32a0eb;position:absolute;right:0}.otherInfo>div>div{position:relative}.otherInfo>div>div>h4{font-weight:700}.otherInfo>div>div>h4>.item-edit-btn{position:absolute;right:-60px;font-////size:12px;border:none;color:#32a0eb}.otherInfo>div>div>h4>span{margin-right:30px}.otherInfo>div>form{overflow:hidden;margin-top:10px}.otherInfo>div>form .ant-btn-group{float:right}.otherInfo>div>form .ant-btn-group>button.ant-btn-primary{margin-left:20px}body { color:#333; }button {display: none;} h3 {color:#32a0eb}  h3 > span {color:#333;margin-left:20px;font-size:12px;} img { width: 80px;height: auto;border-radius: 50%;margin: 0 20px;}</style>'
		var test = '<!DOCTYPE html><html>' 
			+ stylesText
			+ '<body> <div style="width:750px;margin:20px auto;border:solid 1px #e6e6e6">' + document.getElementById('personInfoPrintBox').innerHTML + ' </div></body></html>'
	    let htmlName = name + '的标准简历.html'
	    export_raw(htmlName, test);
	}
	// 原始简历下载
	handleDownload(){
		let {
			info: {
				resumeInfo: {
					sourceUrl,
					name
				}
			}
		} = this.props
		var test = '<!DOCTYPE html><html>'
    + '<style>img{width:100%;height:auto;}</style>'
		+ '<body style="width:100%;margin:20px auto;"><iframe " id="iframepage"  name="iframepage" width="100%"  height="900"    scrolling="auto"  hspace="-100" vspace="-150" src="' + sourceUrl + '" ></iframe></body></html>'
	    let htmlName = name + '的原始简历.html'
	    export_raw(htmlName, test);

	}
	handlePrinter(isOrgin) {
		// let {info , actions ,id ,detailType} = this.props
		// let {resumeInfo,objectives,jobs,projects,educations,languages,credentials,trainings} = info
		let {
			info: {
				resumeInfo: {
					sourceUrl
				}
			}
		} = this.props
		var LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'))
		LODOP.PRINT_INIT("打印简历")
		LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970)

		//设置页码
		LODOP.ADD_PRINT_HTM('1030', '600', '150', '22', "<font style='font-size:12px;float:right;'><span tdata='pageNO'>第##页</span>/<span tdata='pageCount'>共##页</span></font>");
		// LODOP.SET_PRINT_STYLEA(0, "Stretch", 2)
		LODOP.SET_PRINT_STYLEA(0,"ItemType",1);
		// LODOP.SET_PRINT_STYLEA(0,"Horient",1);
		// LODOP.SET_PRINT_STYLEA(0,"Vorient",1);
		LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT","Full-Width");
		if (isOrgin) {
			//打印链接和图片
			//console.log(sourceUrl)
			// LODOP.ADD_PRINT_IMAGE(50, 50, 650, 980, "URL:"+sourceUrl)
			// LODOP.SET_PRINT_STYLEA(0,"Stretch",1);
			LODOP.ADD_PRINT_URL(50, 50, 650, 980, sourceUrl)
		} else {
			let stylesText = '<style>.resume-origin{top:-40px}.personinfo-detailHead{padding:10px;position:relative}.personinfo-detailHead .part-editBtn{position:absolute;right:10px;top:5px;border:none;color:#58b1f0}.personinfo-detailHead .person-headicon{width:80px;height:auto;border-radius:50%;margin:0 20px}.personinfo-detailHead .personinfo-headInfo{display:inline-block;vertical-align:bottom}.personinfo-detailHead .personinfo-headInfo .contactInfo span{margin-right:20px}.personinfo-detailHead .personinfo-headInfo .contactInfo span i{margin-right:10px;font-size:14px;color:#333}.salary-info{border-bottom:none;padding:20px;margin-top:10px;position:relative}.salary-info>h3{color:#32a0eb}.salary-info>h3>span{color:rgba(0,0,0,.65);margin-left:20px;font-size:12px}.salary-info .part-editBtn{position:absolute;right:10px;top:5px;border:none;color:#58b1f0}.salary-info .baseinfo-item{display:inline-block;width:24%}.otherInfo{padding:10px;line-height:24px}.otherInfo>div{padding:10px 60px 10px 10px;position:relative}.otherInfo>div .part-editBtn{position:absolute;right:0;top:0;border:none;color:#58b1f0}.otherInfo>div>h3{color:#32a0eb}.otherInfo>div>h3 .add-title{font-size:12px;border:none;color:#32a0eb;position:absolute;right:0}.otherInfo>div>div{position:relative}.otherInfo>div>div>h4{font-weight:700}.otherInfo>div>div>h4>.item-edit-btn{position:absolute;right:-60px;font-////size:12px;border:none;color:#32a0eb}.otherInfo>div>div>h4>span{margin-right:30px}.otherInfo>div>form{overflow:hidden;margin-top:10px}.otherInfo>div>form .ant-btn-group{float:right}.otherInfo>div>form .ant-btn-group>button.ant-btn-primary{margin-left:20px}body { color:#333; }button {display: none;} h3 {color:#32a0eb}  h3 > span {color:#333;margin-left:20px;font-size:12px;} img { width: 80px;height: auto;border-radius: 50%;margin: 0 20px;}</style>'
			/* var LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'))
      // LODOP.PRINT_INIT("打印简历")
      // LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970)*/

			// 设置页码
			// LODOP.ADD_PRINT_HTM('1030', '600', '150', '22', "<font style='font-size:12px;float:right;'><span tdata='pageNO'>第##页</span>/<span tdata='pageCount'>共##页</span></font>");
			// LODOP.SET_PRINT_STYLEA(0, "ItemType", 1)
			//打印标准简历
			LODOP.ADD_PRINT_HTM(50, 50, 650, 980, stylesText + "<body>" + document.getElementById("personInfoPrintBox").innerHTML + "</body>")
			//打印链接和图片
			//console.log(sourceUrl)
			// LODOP.ADD_PRINT_URL(50,50,650,980,sourceUrl)
		}
		// /*打印预览*/
		LODOP.PREVIEW()
		/* 直接打印 */
		// LODOP.PRINT()
	}
	renderToolbar() {
		let {showType} = this.state
		let {
			info: {
				resumeInfo: {
					sourceUrl
				}
			}
		} = this.props
		return showType == 1
			? <div className="resume-toolbar">
					<Button type="default" htmlType="button" onClick={this.renderOrigin.bind(this)}>原始简历
						<Icon type="right"/></Button>
					<ButtonGroup style={{
							float: 'right'
						}}>
						<Button type="default"  icon="download" onClick={this.handleDownload2.bind(this)}></Button>
					
						<Button type="default" htmlType="button" icon="printer" onClick={this.handlePrinter.bind(this, false)}></Button>
					</ButtonGroup>
				</div>
			: <div className="resume-toolbar resume-origin">
				<Button type="default" style={{position: 'absolute',top: 0,left: 0}}  htmlType="button" onClick={this.renderOrigin.bind(this)}>标准简历
					<Icon type="right"/></Button>
				<ButtonGroup style={{
						float: 'right'
					}}>
					<Button type="default"  icon="download" onClick={this.handleDownload.bind(this)}></Button>
					<Button type="default" htmlType="button" icon="printer" onClick={this.handlePrinter.bind(this, true)}></Button>
				</ButtonGroup>
			</div>
	}
	urlIsHtml(url) {
		let urlTarget = url
		if(urlTarget){
			return  urlTarget.split(".").pop() == "html"
		}else{
			return false
		}
	}
	render() {
		let {info, actions, id, detailType, item} = this.props
		let {
			resumeInfo,
			objectives,
			jobs,
			projects,
			educations,
			languages,
			credentials,
			trainings
		} = info
		let {sourceUrl, channelResumeId} = resumeInfo
		let {
			showType,
			infoEdit,
			objEdit,
			salaryEdit,
			jobEdit,
			proEdit,
			eduEdit,
			lanEdit,
			credEdit,
			trainEdit
		} = this.state
		if (showType == 1) {
			return (<div className="personBaseInfoPanel" id="personInfoPrintBox" >
				{this.renderToolbar()}
				{/* 基本信息判断是否编辑状态 */}
				{
					infoEdit
						? <PersonBaseInfoEditHead actions={actions} id={id} info={resumeInfo} editChangeFn={this.changeFlag.bind(this, "infoEdit", false)}/>
						: <PersonBaseInfoShowHead item={item} info={resumeInfo} id={id} detailType={detailType} editChangeFn={this.changeFlag.bind(this, "infoEdit", true)}/>
				}
				{
					salaryEdit
						? <PersonSalaryEdit actions={actions} id={id} info={resumeInfo} channelResumeId={channelResumeId} editChangeFn={this.changeFlag.bind(this, "salaryEdit", false)}/>
						: <PersonSalaryShow detailType={detailType} info={resumeInfo} editChangeFn={this.changeFlag.bind(this, "salaryEdit", true)}/>
				}
				{/* 求职意向判断是否编辑状态 */}
				<div className="otherInfo">
					{
						objEdit
							? <PersonObjectiveEdit actions={actions} info={objectives} channelResumeId={channelResumeId} editChangeFn={this.changeFlag.bind(this, "objEdit", false)}/>
							: <PersonObjectiveShow detailType={detailType} info={objectives} editChangeFn={this.changeFlag.bind(this, "objEdit", true)}/>
					}
					<PersonJobsProShow detailType={detailType} info={jobs} type="job" channelResumeId={channelResumeId} actions={actions}/>
					<PersonJobsProShow detailType={detailType} info={projects} type="pro" channelResumeId={channelResumeId} actions={actions}/>
					<PersonEducationShow detailType={detailType} info={educations} channelResumeId={channelResumeId} actions={actions}/>
					<PersonLanguageShow detailType={detailType} info={languages} channelResumeId={channelResumeId} actions={actions}/>
					<PersonCredentialShow detailType={detailType} info={credentials} channelResumeId={channelResumeId} actions={actions}/>
					<PersonTraningShow detailType={detailType} info={trainings} channelResumeId={channelResumeId} actions={actions}/>
				</div>
			</div>)
		} else if (showType == 2) { //原始简历
			return (<div className="personBaseInfoPanel" style={{
					position: "absolute",
					left: 20,
					right: 20,
					top: 20,
					bottom: 20
				}}>
				{this.renderToolbar()}
				{
					this.urlIsHtml(sourceUrl)
						? <iframe src={sourceUrl} width="100%" height="100%" style={{
									border: "none"
								}}></iframe>
						: <img src={sourceUrl} alt="暂无数据" className="resume-orign-img"/>
				}
			</div>)
		} else if (showType == 3) {
			return null
		}

	}
}
/* 标准简历头部展示* */
class PersonBaseInfoShowHead extends Component {
	renderPersonBase() {
		let {info} = this.props
		let age = info.age
			? info.age + "岁"
			: ""
		let sex = translateDic("sex", info.sex)
		let workYear = info.workYear
			? info.workYear + "年工作经验"
			: ""
		let edu = translateDic("education", info.degree)
		let marry = translateDic("maritalstatus", info.maritalStatus)
		let polit = translateDic("political", info.politicsStatus)

		return filterArray([
			sex,
			age,
			marry,
			polit,
			workYear,
			edu,
			info.currentAddress
		]).join(" · ")

	}
	handleCallPhone(number, resumeId, name, type) {
		if (!number) {
			message.info("号码为空！", 5)
			return false
		}
		/*type  == define1
* define1  1 员工
* define1  2 简历
* define1  3 人才
*
* */
		let callOutJson = {
			phone: number,
			busId: resumeId,
			candName: name,
			inputAcc: "",
			define1: type + "",
			define3: "",
			IsContact: "0"
		};
		let callOutJsonStr = JSON.stringify({callOutJson});
		//console.log(callOutJsonStr)
		global.invokeMethod('OnCallJson', callOutJsonStr)
	}
	renderContact() {
		let {info, id, detailType, item} = this.props
		if (item && item.downloadStatus || detailType == 10) {
			return <div className="contactInfo">
				{
					info.mobilephone
						? (<span><Icon type="icon-phone" style={{color:"#3390ed",cursor:"pointer"}} onClick={this.handleCallPhone.bind(this, info.mobilephone, id, info.name, detailType)}/>{info.mobilephone}</span>)
						: null
				}
				{
					info.alternativePhone
						? (<span><Icon type="icon-phone" style={{color:"#3390ed",cursor:"pointer"}} onClick={this.handleCallPhone.bind(this, info.alternativePhone, id, info.name, detailType)}/>{info.alternativePhone}</span>)
						: null
				}
				{
					info.email
						? (<span><Icon type="mail"/>{info.email}</span>)
						: null
				}
			</div>
		}
	}
	render() {
		let {info, id, detailType} = this.props
		return (<div className="personinfo-detailHead">
			{
				detailType == 10
					? null
					: <Button className="part-editBtn" onClick={this.props.editChangeFn}>编辑</Button>
			}
			<img src={info.photoUrl} className="person-headicon"/>
			<div className="personinfo-headInfo">
				<h2>{info.name}</h2>
				{this.renderContact()}
				<div>
					{this.renderPersonBase()}
				</div>
			</div>
		</div>)
	}
}
/* 标准简历头部编辑 */
class PersonBaseInfoEditHead extends FormPage {

	saveInfo() {
		let {actions, editChangeFn, id} = this.props
		this.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				return;
			}
			//console.log(values)
			actions.savePersonBaseAction(values, id).then(() => {
				editChangeFn()
			})
		});
	}
	responseType(res) {
		return res.fileUrl
	}
	onSuccess(info, that) {
		that.setState({imgUrl: info.file.response.fileUrl})
	}
	renderSelectOption(data, idx) {
		return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
	}
	transTimeYear(val) {
		if (toStrings(val)) {
			return moment(toStrings(val))
		} else {
			return null
		}
	}
	beforeUpload(file) {
		let {name} = file
		let suffix = name.split(".").pop()
		if (suffix == "jpg" || suffix == "png" || suffix == "jpeg") {
			return true
		} else {
			message.warning("只能上传图片文件")
			return false
		}
	}
	render() {
		let {info} = this.props
	//	console.log(moment(info.birthYear), moment(info.startWorkingYear))
		return (<BaseForm ref={this.saveFormRef} className="baseInfo-edit">
			<FormItem>
				<Input type="hidden" name="channelResumeId" defaultValue={info.channelResumeId}/>
			</FormItem>
			<Row gutter={12}>
				<FormItemWrapparCol span={6}>
					<ImgUpload label="照片" type={2} name="photoUrl" beforeUpload={this.beforeUpload} imgUrl={info.photoUrl} onResponse={this.responseType} onSuccess={this.onSuccess}></ImgUpload>
				</FormItemWrapparCol>
				<Col span={18}>
					<FormItemWrapparCol span={12}>
						<Input label="姓名" name='name' defaultValue={info.name} rules={[
								{
									required: true,
									message: "姓名不可为空"
								}, {
									validator: customRules.required
								}
							]}/>
					</FormItemWrapparCol>

					<FormItemWrapparCol span={12}>
						<Select label="性别" name="sex" defaultValue={toStrings(info.sex)} fetch={DictUtils.getDictByType("sex")} renderItem={this.renderSelectOption} rules={[
								{
									required: true,
									message: "性别不可为空"
								}, {
									validator: customRules.required
								}
							]}/>
					</FormItemWrapparCol>

					<FormItemWrapparCol span={12}>
						<Input label="户口" name='residenceAddress' defaultValue={info.residenceAddress}/>
					</FormItemWrapparCol>

					<FormItemWrapparCol span={12}>
						<Input label="现居住地" name='currentAddress' defaultValue={info.currentAddress} rules={[
								{
									required: true,
									message: "现居住地不可为空"
								}, {
									validator: customRules.required
								}
							]}/>
					</FormItemWrapparCol>

					<FormItemWrapparCol span={12}>
						<Select label="婚姻状况" name="maritalStatus" defaultValue={toStrings(info.maritalStatus)} fetch={DictUtils.getDictByType("maritalstatus")} renderItem={this.renderSelectOption}/>
					</FormItemWrapparCol>

					<FormItemWrapparCol span={12}>
						<MonthPicker label="出生年份" name='birthYear' defaultValue={this.transTimeYear(info.birthYear)} format="YYYY" rules={[
								{
									required: true,
									message: "出生日期不可为空"
								}, {
									validator: customRules.required
								}
							]}/>
					</FormItemWrapparCol>

					<FormItemWrapparCol span={12}>
						<Select label="政治面貌" name="politicsStatus" defaultValue={toStrings(info.politicsStatus)} fetch={DictUtils.getDictByType("political")} renderItem={this.renderSelectOption}/>
					</FormItemWrapparCol>

					<FormItemWrapparCol span={12}>
						<Input label="手机号码" name='mobilephone' defaultValue={info.mobilephone} rules={[
								{
									required: true,
									message: "手机号码不可为空"
								}, {
									validator: customRules.checkMobile
								}, {
									validator: customRules.required
								}
							]}/>
					</FormItemWrapparCol>

					<FormItemWrapparCol span={12}>
						<Input label="邮箱号码" name='email' defaultValue={info.email} rules={[{
									type: "email",
									message: "邮箱格式不正确"
								}
							]}/>
					</FormItemWrapparCol>

					<FormItemWrapparCol span={12}>
						<Input label="备用电话" name='alternativePhone' defaultValue={info.alternativePhone} rules={[{
									validator: customRules.checkMobile
								}
							]}/>
					</FormItemWrapparCol>

					<FormItemWrapparCol span={12}>
						<MonthPicker label="参加工作年份" name='startWorkingYear' defaultValue={this.transTimeYear(info.startWorkingYear)} format="YYYY"/>
					</FormItemWrapparCol>
				</Col>

				<Button.Group>
					<Button onClick={this.props.editChangeFn}>取消</Button>
					<Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
				</Button.Group>
			</Row>

		</BaseForm>)
	}
}
/* 目前收入组件 */
class PersonSalaryShow extends Component {
	render() {
		let {info, detailType} = this.props
		return (<div className="salary-info">
			{
				detailType == 10
					? null
					: <Button className="part-editBtn" onClick={this.props.editChangeFn}>编辑</Button>
			}
			<h3>目前收入<span>{info.annualSalary}(包含基本工资、补贴，奖金，股权收益)</span>
			</h3>
			<BaseInfoItem label="基本工资" info={info.basicSalary} show="show"/>
			<BaseInfoItem label="补贴" info={info.subsidy} show="show"/>
			<BaseInfoItem label="奖金" info={info.bonus} show="show"/>
			<BaseInfoItem label="股权收益" info={info.stockRights} show="show"/>
		</div>)
	}
}
/* 目前收入编辑 */
class PersonSalaryEdit extends FormPage {
	saveInfo() {
		let {actions, id} = this.props
		this.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				return;
			}
			//console.log(values)
			actions.savePersonBaseAction(values, id).then(() => {
				this.props.editChangeFn()
			})
		});
	}
	render() {
		let {info} = this.props
		return (<BaseForm ref={this.saveFormRef} className="salaryInfo-edit">
			<FormItem>
				<Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
			</FormItem>
			<Row>
				<FormItemWrapparCol span={24}>
					<Input label="目前收入" name='annualSalary' defaultValue={info.annualSalary} rules={[{
								validator: customRules.integer
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Input label="基本工资" name='basicSalary' defaultValue={info.basicSalary} rules={[{
								validator: customRules.integer
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Input label="补贴" name='subsidy' defaultValue={info.subsidy} rules={[{
								validator: customRules.integer
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Input label="奖金" name='bonus' defaultValue={info.bonus} rules={[{
								validator: customRules.integer
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Input label="股权收益" name='stockRights' defaultValue={info.stockRights} rules={[{
								validator: customRules.integer
							}
						]}/>
				</FormItemWrapparCol>

				<Button.Group>
					<Button onClick={this.props.editChangeFn}>取消</Button>
					<Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
				</Button.Group>
			</Row>
		</BaseForm>)
	}
}
/* 求职意向组件 */
class PersonObjectiveShow extends Component {
	renderArrayInfo(array, code) {
		return array && array.map((it, idx) => {
			return code
				? translateDic(code, it)
				: it
		}).join("，")
	}
	renderArrayData(array) {
		return array && array.join("，")
	}
	translateSalary(lower, upper) {
		return lower && upper
			? `${lower} - ${upper}`
			: "面议"
	}
	render() {
		let {info, detailType} = this.props
		return (<div className="objective-info">
			{
				detailType == 10
					? null
					: <Button className="part-editBtn" onClick={this.props.editChangeFn}>编辑</Button>
			}
			<h3>求职意向</h3>
			<BaseInfoItem label="期望薪资" info={this.translateSalary(info.expectedSalaryLower, info.expectedSalaryUpper)}/>
			<BaseInfoItem label="工作地点" info={this.renderArrayData(info.expectedAddress)}/>
			<BaseInfoItem label="到岗时间" info={translateDic("comedate", info.dutyTime)}/>
			<BaseInfoItem label="工作类型" info={this.renderArrayInfo(info.jobNature, "workproperty")}/>
			<BaseInfoItem label="职位" info={this.renderArrayData(info.expectedJobTitle)}/>
			<BaseInfoItem label="求职状态" info={translateDic("jobstatus", info.workStatus)}/>
			<BaseInfoItem label="行业" info={this.renderArrayInfo(info.trade, "industry")}/>
			<BaseInfoItem label="自我评价" info={info.selfEvaluation} style={{
					width: "100%"
				}}/>
		</div>)
	}
}
/* 求职意向编辑 */
class PersonObjectiveEdit extends FormPage {
	renderSelectOption(data, idx) {
		return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
	}
	saveInfo() {
		let {actions} = this.props
		this.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				return;
			}
			//console.log(values)
			actions.savePersonObjAction(values).then(() => {
				this.props.editChangeFn()
			})
		});
	}
	jobTitleTrans(jobArr) {
		return jobArr.join(",")
	}
	toStrings(str) {
		return str + ""
	}
	render() {
		let {info} = this.props
		return (<BaseForm ref={this.saveFormRef} className="baseInfo-edit">
			<FormItem>
				<Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
			</FormItem>
			<Row>
				<FormItemWrapparCol span={12}>
					<Input label="职位" name='expectedJobTitle' disabled="disabled" defaultValue={info.expectedJobTitle} placeholder="可输入多项，中间用英文逗号“,”分隔"/>
				</FormItemWrapparCol>

				<FormItemWrapparCol span={12}>
					<Select label="行业" name="trade" defaultValue={arrayToString(info.trade)} fetch={DictUtils.getDictByType("industry")} mode="multiple" renderItem={this.renderSelectOption} rules={[
							{
								required: true,
								message: "行业不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>

				<FormItemWrapparCol span={12}>
					<InputStrGroup label="期望薪资" name="expectedSalary" defaultValue={[info.expectedSalaryLower, info.expectedSalaryUpper]} rules={[
							{
								validator: customRules.required
							}, {
								required: true
							}, {
								validator: customRules.integer
							}
						]}/>
				</FormItemWrapparCol>

				<FormItemWrapparCol span={12}>
					<Input label="工作地点" name='expectedAddress' disabled="disabled" defaultValue={info.expectedAddress} placeholder="可输入多项，中间用英文逗号“,”分隔"/>
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
    </FormItemWrapparCol>*/
				}

				<FormItemWrapparCol span={24}>
					<TextArea autosize={{
							minRows: 4
						}} label="自我评价" name='selfEvaluation' defaultValue={info.selfEvaluation}/>
				</FormItemWrapparCol>

				<Button.Group>
					<Button onClick={this.props.editChangeFn}>取消</Button>
					<Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
				</Button.Group>
			</Row>
		</BaseForm>)
	}
}
/* 工作经验 & 项目经验 组件 */
class PersonJobsProShow extends Component {
	state = {
		add: false
	}
	handleAdd() {
		this.setState({add: true})
	}
	handleCancle() {
		//console.log(111)
		this.setState({add: false})
	}
	renderAddForm() {
		let {add} = this.state
		let {type, channelResumeId, actions} = this.props
		if (add && type == "job") {
			return <PersonJobEditItem item={{}} channelResumeId={channelResumeId} actions={actions} editChangeFn={this.handleCancle.bind(this)}/>
		}
		if (add && type == "pro") {
			return <PersonProjectEditItem item={{}} channelResumeId={channelResumeId} actions={actions} editChangeFn={this.handleCancle.bind(this)}/>
		}
	}
	render() {
		let {info, type, channelResumeId, actions, detailType} = this.props
		return (<div>
			<h3>{
					type == "job"
						? "工作经验"
						: "项目经验"
				}{
					detailType == 10
						? null
						: <Button className="add-title" onClick={this.handleAdd.bind(this)}>新增</Button>
				}</h3>
			{/* content */}
			{
				info.map((it, idx) => {
					return type == "job"
						? <PersonJobsItem detailType={detailType} item={it} channelResumeId={channelResumeId} actions={actions}/>
						: <PersonProjectsItem detailType={detailType} item={it} channelResumeId={channelResumeId} actions={actions}/>
				})
			}
			{/* addbox */}
			{this.renderAddForm()}
		</div>)
	}
}
/* 工作经验item组件 */
class PersonJobsItem extends ItemChangeCommon {

	state = {
		editFlag: false
	}
	renderJobsBaseInfo() {
		let {item} = this.props
		let trade = translateDic("industry", item.trade)
		let companyScale = translateDic("scale", item.companyScale)
		let companyNature = translateDic("companyproperty", item.companyNature)
		let jobNature = translateDic("workproperty", item.jobNature)
		return filterArray([
			companyScale,
			companyNature,
			jobNature,
			trade,
			item.department,
			item.reasonsForLeaving,
		]).join(" | ")
	}
	renderOtherInfo(){
		let {item} = this.props
		return filterArray([
			item.subordinates ? "下属人数：" + item.subordinates : "",
			item.boss ? "汇报对象：" + item.boss : ""
		]).join(" | ")
	}
	renderShow() {
		let {item, detailType} = this.props
		return (<div style={{
				marginBottom: 20
			}}>
			<h4>
				<span>{`${translateTime(item.duringStart)}-${translateTime(item.duringEnd)}`}</span>
				<span>{item.company}</span>
				<span>{item.jobTitle}</span>

				{
					detailType == 10
						? null
						: <Button className="item-edit-btn" onClick={this.handleEdit.bind(this)}>编辑</Button>
				}
			</h4>
			{this.renderJobsBaseInfo()}
			<BaseInfoItem label="工作内容" info={item.jobContent}/>
			<BaseInfoItem label="主要成就" info={item.achievements}/>
			{this.renderOtherInfo()}
		</div>)
	}
	renderEdit() {
		return <PersonJobEditItem {...this.props} editChangeFn={this.handleCancelEdit.bind(this)}/>
	}
}
/* 工作经验编辑item组件 */
class PersonJobEditItem extends FormPage {
	saveInfo() {
		let {actions} = this.props
		this.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				return;
			}
			actions.savePersonJobAction(values).then(() => {
				this.props.editChangeFn()
			})
		});
	}
	renderSelectOption(data, idx) {
		return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
	}
	render() {
		let {item} = this.props
		//console.log(this.props)
		return (<BaseForm ref={this.saveFormRef}>
			<FormItem>
				<Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
			</FormItem>
			<FormItem>
				<Input type="hidden" name="id" defaultValue={item.id}/>
			</FormItem>
			<FormItemWrapparCol span={12}>
				<CalendarPicker label="时间" name='duringDates' defaultValue={[
						translateTimeToMoment(item.duringStart),
						translateTimeToMoment(item.duringEnd)
					]} rules={[
						{
							required: true,
							message: "时间不可为空"
						}, {
							validator: customRules.required
						}
					]}/>
			</FormItemWrapparCol>
			<FormItemWrapparCol span={12}>
				<Input label="公司名称" name='company' defaultValue={item.company} rules={[
						{
							required: true,
							message: "公司名称不可为空"
						}, {
							validator: customRules.required
						}
					]}/>
			</FormItemWrapparCol>
			<FormItemWrapparCol span={12}>
				<Input label="职位名称" name='jobTitle' defaultValue={item.jobTitle} rules={[
						{
							required: true,
							message: "职位名称不可为空"
						}, {
							validator: customRules.required
						}
					]}/>
			</FormItemWrapparCol>
			<FormItemWrapparCol span={12}>
				<Select label="行业" name="trade" defaultValue={toStrings(item.trade)} fetch={DictUtils.getDictByType("industry")} renderItem={this.renderSelectOption}/>
			</FormItemWrapparCol>
			<FormItemWrapparCol span={12}>
				<Input label="部门" name='department' defaultValue={item.department}/>
			</FormItemWrapparCol>
			<FormItemWrapparCol span={12}>
				<Select label="公司规模" name="companyScale" defaultValue={toStrings(item.companyScale)} fetch={DictUtils.getDictByType("scale")} renderItem={this.renderSelectOption}/>
			</FormItemWrapparCol>
			<FormItemWrapparCol span={12}>
				<Select label="公司性质" name="companyNature" defaultValue={toStrings(item.companyNature)} fetch={DictUtils.getDictByType("companyproperty")} renderItem={this.renderSelectOption}/>
			</FormItemWrapparCol>
			<FormItemWrapparCol span={12}>
				<Input label="离职原因" name='reasonsForLeaving' defaultValue={item.reasonsForLeaving}/>
			</FormItemWrapparCol>
			<FormItemWrapparCol span={12}>
				<Input label="汇报对象" name='boss' defaultValue={item.boss}/>
			</FormItemWrapparCol>
			<FormItemWrapparCol span={12}>
				<Input label="下属人数" name='subordinates' defaultValue={item.subordinates}/>
			</FormItemWrapparCol>
			<FormItemWrapparCol span={12}>
				<Select label="工作性质" name="jobNature" defaultValue={toStrings(item.jobNature)} fetch={DictUtils.getDictByType("workproperty")} renderItem={this.renderSelectOption}/>
			</FormItemWrapparCol>
			<FormItemWrapparCol span={12}>
				<Input label="主要成就" name='achievements' defaultValue={item.achievements}/>
			</FormItemWrapparCol>
			<FormItemWrapparCol span={24}>
				<TextArea autosize={{
						minRows: 4
					}} label="工作内容" name='jobContent' defaultValue={item.jobContent} rules={[
						{
							required: true,
							message: "工作内容不可为空"
						}, {
							validator: customRules.required
						}
					]}/>
			</FormItemWrapparCol>

			<Button.Group>
				<Button onClick={this.props.editChangeFn}>取消</Button>
				<Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
			</Button.Group>
		</BaseForm>)
	}
}
/* 项目经验组件 item组件 */
class PersonProjectsItem extends ItemChangeCommon {
	state = {
		editFlag: false
	}
	renderShow() {
		let {item, detailType} = this.props
		return (<div style={{
				marginBottom: 20
			}}>
			<h4>
				<span>{`${translateTime(item.duringStart)}-${translateTime(item.duringEnd)}`}</span>
				<span>{item.company}</span>
				<span>{item.title}</span>

				{
					detailType == 10
						? null
						: <Button className="item-edit-btn" onClick={this.handleEdit.bind(this)}>编辑</Button>
				}
			</h4>
			<BaseInfoItem label="项目描述" info={item.description}/>
			<BaseInfoItem label="主要负责" info={item.duty}/>
		</div>)
	}
	renderEdit() {
		return <PersonProjectEditItem {...this.props} editChangeFn={this.handleCancelEdit.bind(this)}/>
	}
}
/* 项目经验编辑item组件 */
class PersonProjectEditItem extends FormPage {
	saveInfo() {
		let {actions} = this.props
		this.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				return;
			}
			actions.savePersonProAction(values).then(() => {
				this.props.editChangeFn()
			})
		});
	}
	renderSelectOption(data, idx) {
		return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
	}
	render() {
		let {item} = this.props
		//console.log(this.props)
		return (<BaseForm ref={this.saveFormRef}>
			<Row>
				<FormItem>
					<Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
				</FormItem>
				<FormItem>
					<Input type="hidden" name="id" defaultValue={item.id}/>
				</FormItem>
				<FormItemWrapparCol span={12}>
					<CalendarPicker label="时间" changeCalendarContainer="changeCalendarContainer" containerToProp={document.body} name='duringDates' defaultValue={[
							translateTimeToMoment(item.duringStart),
							translateTimeToMoment(item.duringEnd)
						]} rules={[
							{
								required: true,
								message: "时间不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Input label="项目名称" name='title' defaultValue={item.title} rules={[
							{
								required: true,
								message: "项目名称不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={24}>
					<Input label="所属公司" name='company' defaultValue={item.company} rules={[
							{
								required: true,
								message: "所属公司不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={24}>
					<TextArea autosize={{
							minRows: 4
						}} label="项目描述" name='description' defaultValue={item.description} rules={[
							{
								required: true,
								message: "项目描述不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={24}>
					<TextArea autosize={{
							minRows: 4
						}} label="责任描述" name='duty' defaultValue={item.duty}/>
				</FormItemWrapparCol>

				<Button.Group>
					<Button onClick={this.props.editChangeFn}>取消</Button>
					<Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
				</Button.Group>
			</Row>
		</BaseForm>)
	}
}
/* 教育经历组件 */
class PersonEducationShow extends Component {
	state = {
		add: false
	}
	handleAdd() {
		this.setState({add: true})
	}
	handleCancle() {
		this.setState({add: false})
	}
	render() {
		let {info, channelResumeId, actions, detailType} = this.props
		return (<div>
			<h3>教育经历 {
					detailType == 10
						? null
						: <Button className="add-title" onClick={this.handleAdd.bind(this)}>新增</Button>
				}</h3>
			{
				info.map((it, idx) => {
					return <PersonEducationItem {...this.props} item={it} actions={actions} channelResumeId={channelResumeId}/>
				})
			}

			{
				this.state.add
					? <PersonEducationEditItem actions={actions} channelResumeId={channelResumeId} editChangeFn={this.handleCancle.bind(this)}/>
					: null
			}
		</div>)
	}
}
/* 教育经历item组件 */
class PersonEducationItem extends ItemChangeCommon {
	state = {
		editFlag: false
	}
	renderEduInfo() {
		let {item} = this.props
		let education = translateDic("education", item.degree)

		return filterArray([education, item.major]).join(" | ")
	}
	renderShow() {
		let {item, detailType} = this.props
		//console.log(item)
		return (<div>
			<h4>
				<span>{`${translateTime(item.duringStart)}-${translateTime(item.duringEnd)}`}</span>
				<span>{item.school}</span>

				{
					detailType == 10
						? null
						: <Button className="item-edit-btn" onClick={this.handleEdit.bind(this)}>编辑</Button>
				}
			</h4>
			{this.renderEduInfo()}
		</div>)
	}
	renderEdit() {
		return <PersonEducationEditItem {...this.props} editChangeFn={this.handleCancelEdit.bind(this)}/>
	}
}
/* 教育经历编辑item组件 */
class PersonEducationEditItem extends FormPage {
	saveInfo() {
		let {actions} = this.props
		this.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				return;
			}
			actions.savePersonEduAction(values).then(() => {
				this.props.editChangeFn()
			})
		});
	}
	renderSelectOption(data, idx) {
		return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
	}
	render() {
		let {item} = this.props
		//console.log(this.props)
		return (<BaseForm ref={this.saveFormRef}>
			<Row>
				<FormItem>
					<Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
				</FormItem>
				<FormItem>
					<Input type="hidden" name="id" defaultValue={item.id}/>
				</FormItem>
				<FormItemWrapparCol span={12}>
					<CalendarPicker label="时间" changeCalendarContainer="changeCalendarContainer" containerToProp={document.body} name='duringDates' defaultValue={[
							translateTimeToMoment(item.duringStart),
							translateTimeToMoment(item.duringEnd)
						]} rules={[
							{
								required: true,
								message: "时间不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Input label="学校名称" name='school' defaultValue={item.school} rules={[
							{
								required: true,
								message: "学校名称不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Input label="专业名称" name='major' defaultValue={item.major} rules={[
							{
								required: true,
								message: "专业名称不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Select label="学历/学位" name="degree" changeCalendarContainer="changeCalendarContainer" containerToProp={document.body} defaultValue={toStrings(item.degree)} fetch={DictUtils.getDictByType("education")} renderItem={this.renderSelectOption} rules={[
							{
								required: true,
								message: "学历/学位不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>

				<Button.Group>
					<Button onClick={this.props.editChangeFn}>取消</Button>
					<Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
				</Button.Group>
			</Row>
		</BaseForm>)
	}
}
PersonEducationEditItem.defaultProps = {
	item: {}
}
/* 技能语言组件 */
class PersonLanguageShow extends Component {
	state = {
		add: false
	}
	handleAdd() {
		this.setState({add: true})
	}
	handleCancle() {
		this.setState({add: false})
	}
	render() {
		let {info, channelResumeId, actions, detailType} = this.props
		return (<div>
			<h3>技能/语言{
					detailType == 10
						? null
						: <Button className="add-title" onClick={this.handleAdd.bind(this)}>新增</Button>
				}</h3>
			{
				info.map((it, idx) => {
					return <PersonLanguageItem detailType={detailType} item={it} channelResumeId={channelResumeId} actions={actions}/>
				})
			}

			{
				this.state.add
					? <PersonLanguageEditItem channelResumeId={channelResumeId} actions={actions} editChangeFn={this.handleCancle.bind(this)}/>
					: null
			}
		</div>)
	}
}
/* 技能语言item组件 */
class PersonLanguageItem extends ItemChangeCommon {
	state = {
		editFlag: false
	}
	renderShow() {
		let {item, detailType} = this.props
		let write = item.writing
			? translateDic("degree", item.writing)
			: ""
		let speak = item.speaking
			? translateDic("degree", item.speaking)
			: ""
		return (<div>
			<h4>
				<span>{item.skill}</span>
				<span>{translateDic("degree", item.level)}</span>

				{
					detailType == 10
						? null
						: <Button className="item-edit-btn" onClick={this.handleEdit.bind(this)}>编辑</Button>
				}
			</h4>
			<h4>
				<span>{item.language}</span>
			</h4>
			{filterArray([write, speak]).join(" | ")}
		</div>)
	}
	renderEdit() {
		return <PersonLanguageEditItem {...this.props} editChangeFn={this.handleCancelEdit.bind(this)}/>
	}
}
/* 技能语言编辑item组件 */
class PersonLanguageEditItem extends FormPage {
	saveInfo() {
		let {actions} = this.props
		this.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				return;
			}
			actions.savePersonLanAction(values).then(() => {
				this.props.editChangeFn()
			})
		});
	}
	renderSelectOption(data, idx) {
		return (<Select.Option value={data.keyValue} key={idx}>{data.keyName}</Select.Option>)
	}
	render() {
		let {item} = this.props
		//console.log(this.props)
		return (<BaseForm ref={this.saveFormRef}>
			<Row>
				<FormItem>
					<Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
				</FormItem>
				<FormItem>
					<Input type="hidden" name="id" defaultValue={item.id}/>
				</FormItem>
				{/*  <FormItemWrapparCol span={12}>
      <CalendarPicker label="时间"  name='duringDates' defaultValue={[translateTimeToMoment(),translateTimeToMoment()]} rules={[{required: true, message: "时间不可为空"},{validator:customRules.required}]}/>
    </FormItemWrapparCol>*/
				}
				<FormItemWrapparCol span={12}>
					<Input label="技能" name='skill' defaultValue={item.skill} rules={[
							{
								required: true,
								message: "技能不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Select label="掌握程度" name="level" defaultValue={toStrings(item.level)} fetch={DictUtils.getDictByType("degree")} renderItem={this.renderSelectOption} rules={[
							{
								required: true,
								message: "掌握程度不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={24}>
					<Input label="语种" name='language' defaultValue={item.language}/>
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
		</BaseForm>)
	}
}
PersonLanguageEditItem.defaultProps = {
	item: {}
}
/* 证书 组件 */
class PersonCredentialShow extends Component {
	state = {
		add: false
	}
	handleAdd() {
		this.setState({add: true})
	}
	handleCancle() {
		this.setState({add: false})
	}
	render() {
		let {info, channelResumeId, actions, detailType} = this.props
		return (<div>
			<h3>证书{
					detailType == 10
						? null
						: <Button className="add-title" onClick={this.handleAdd.bind(this)}>新增</Button>
				}</h3>
			{
				info.map((it, idx) => {
					return <PersonCredentialItem detailType={detailType} item={it} channelResumeId={channelResumeId} actions={actions}/>
				})
			}

			{
				this.state.add
					? <PersonCredentialEditItem channelResumeId={channelResumeId} actions={actions} editChangeFn={this.handleCancle.bind(this)}/>
					: null
			}
		</div>)
	}
}
/* 证书item组件 */
class PersonCredentialItem extends ItemChangeCommon {
	state = {
		editFlag: false
	}
	renderShow() {
		let {item, detailType} = this.props
		return (<div>
			<h4>
				<span>{translateTime(item.getDate)}</span>
				<span>{item.title}</span>
				<span>{item.score}</span>

				{
					detailType == 10
						? null
						: <Button className="item-edit-btn" onClick={this.handleEdit.bind(this)}>编辑</Button>
				}
			</h4>
		</div>)
	}
	renderEdit() {
		return <PersonCredentialEditItem {...this.props} editChangeFn={this.handleCancelEdit.bind(this)}/>
	}
}
/* 证书编辑item组件 */
class PersonCredentialEditItem extends FormPage {
	saveInfo() {
		let {actions} = this.props
		this.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				return;
			}
			actions.savePersonCreAction(values).then(() => {
				this.props.editChangeFn()
			})
		});
	}
	render() {
		let {item} = this.props
		//console.log(this.props)
		return (<BaseForm ref={this.saveFormRef}>
			<Row>
				<FormItem>
					<Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
				</FormItem>
				<FormItem>
					<Input type="hidden" name="id" defaultValue={item.id}/>
				</FormItem>
				<FormItemWrapparCol span={24}>
					<DatePicker label="时间" name='getDate' defaultValue={translateTimeToMoment(item.getDate)} rules={[
							{
								required: true,
								message: "时间不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Input label="证书名称" name='title' defaultValue={item.title} rules={[
							{
								required: true,
								message: "证书名称不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Input label="成绩" name='score' defaultValue={item.score} rules={[
							{
								required: true,
								message: "成绩不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>

				<Button.Group>
					<Button onClick={this.props.editChangeFn}>取消</Button>
					<Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
				</Button.Group>
			</Row>
		</BaseForm>)
	}
}
PersonCredentialEditItem.defaultProps = {
	item: {}
}
/* 培训经历组件 */
class PersonTraningShow extends Component {
	state = {
		add: false
	}
	handleAdd() {
		this.setState({add: true})
	}
	handleCancle() {
		this.setState({add: false})
	}
	render() {
		let {info, channelResumeId, actions, detailType} = this.props
		return (<div>
			<h3>培训经历{
					detailType == 10
						? null
						: <Button className="add-title" onClick={this.handleAdd.bind(this)}>新增</Button>
				}</h3>
			{
				info.map((it, idx) => {
					return <PersonTraningItem detailType={detailType} item={it} channelResumeId={channelResumeId} actions={actions}/>
				})
			}
			{
				this.state.add
					? <PersonTraningEditItem channelResumeId={channelResumeId} actions={actions} editChangeFn={this.handleCancle.bind(this)}/>
					: null
			}
		</div>)
	}
}
/* 培训经历item组件 */
class PersonTraningItem extends ItemChangeCommon {
	state = {
		editFlag: false
	}
	renderTraningInfo() {
		let {item} = this.props
		return filterArray([
			item.certificate, item.trainingAddress
				? `培训地点：${item.trainingAddress}`
				: ""
		]).join(" | ")
	}
	renderShow() {
		let {item, detailType} = this.props
		return (<div>
			<h4>
				<span>{`${translateTime(item.duringStart)}-${translateTime(item.duringEnd)}`}</span>
				<span>{item.trainingAgency}</span>
				<span>{item.trainingCourse}</span>

				{
					detailType == 10
						? null
						: <Button className="item-edit-btn" onClick={this.handleEdit.bind(this)}>编辑</Button>
				}
			</h4>
			<div>{this.renderTraningInfo()}</div>
			{
				item.description
					? <div>
							<h4>详细描述</h4>
							<span>{item.description}</span>
						</div>
					: null
			}
		</div>)
	}
	renderEdit() {
		return <PersonTraningEditItem {...this.props} editChangeFn={this.handleCancelEdit.bind(this)}/>
	}
}
/* 培训经历编辑item组件 */
class PersonTraningEditItem extends FormPage {
	saveInfo() {
		let {actions} = this.props
		this.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				return;
			}
			actions.savePersonTraAction(values).then(() => {
				this.props.editChangeFn()
			})
		});
	}
	render() {
		let {item} = this.props
		return (<BaseForm ref={this.saveFormRef}>
			<Row>
				<FormItem>
					<Input type="hidden" name="channelResumeId" defaultValue={this.props.channelResumeId}/>
				</FormItem>
				<FormItem>
					<Input type="hidden" name="id" defaultValue={item.id}/>
				</FormItem>
				<FormItemWrapparCol span={12}>
					<CalendarPicker label="时间" changeCalendarContainer="changeCalendarContainer" containerToProp={document.body} name='duringDates' defaultValue={[
							translateTimeToMoment(item.duringStart),
							translateTimeToMoment(item.duringEnd)
						]} rules={[
							{
								required: true,
								message: "时间不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Input label="培训机构" name='trainingAgency' defaultValue={item.trainingAgency} rules={[
							{
								required: true,
								message: "培训机构不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Input label="培训课程" name='trainingCourse' defaultValue={item.trainingCourse} rules={[
							{
								required: true,
								message: "培训课程不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={12}>
					<Input label="获得证书" name='certificate' defaultValue={item.certificate} rules={[
							{
								required: true,
								message: "获得证书不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={24}>
					<TextArea autosize={{
							minRows: 4
						}} label="培训地点" name='trainingAddress' defaultValue={item.trainingAddress} rules={[
							{
								required: true,
								message: "培训地点不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>
				<FormItemWrapparCol span={24}>
					<TextArea autosize={{
							minRows: 4
						}} label="详细描述" name='description' defaultValue={item.description} rules={[
							{
								required: true,
								message: "详细描述不可为空"
							}, {
								validator: customRules.required
							}
						]}/>
				</FormItemWrapparCol>

				<Button.Group>
					<Button onClick={this.props.editChangeFn}>取消</Button>
					<Button type="primary" onClick={this.saveInfo.bind(this)}>保存</Button>
				</Button.Group>
			</Row>
		</BaseForm>)
	}
}
PersonTraningEditItem.defaultProps = {
	item: {}
}


/* 备注 */
export class PersonRemarks extends FormPage {
	componentDidMount() {
		let {actions, resumeId} = this.props
		actions.getRemarkAction({resumeId: resumeId})
	}

	componentWillReceiveProps(nextProps) {
		let {actions, resumeId} = this.props
		if (nextProps.resumeId != resumeId) {

			actions.getRemarkAction({resumeId: nextProps.resumeId})
		}
	}
	renderCommonRemark(){
		// console.log(DictUtils.getDictByType('commonWord'))
		return DictUtils.getDictByType('commonWord').map(it=>{
			return <Tag className="remark-quick-tag" onClick={this.handleQuickAddRemark.bind(this,it.keyName)}>{it.keyName}</Tag>
		})
	}
	handleQuickAddRemark(value){
		this.form.setFieldsValue({
			context:this.form.getFieldValue('context') ? this.form.getFieldValue('context') + value : value
		})
	}
	handleSubmit() {
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
	render() {
		let {
			resumeId,
			info,
			item: {
				jobId,
				name
			},
			detailType
		} = this.props
		return (<div className="PersonRemarksBox">
			{
				detailType == 10
					? null //员工界面无操作
					: <BaseForm ref={this.saveFormRef} layout="vertical">
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
									<TextArea className="Textarea" name="context" placeholder="输入对该候选人的备注" autosize={{
											minRows: 6
										}} rules={[
											{
												required: true,
												message: "备注内容不可为空"
											}, {
												validator: customRules.required
											}, {
												max: 50,
												message: "限制50个字"
											}
										]}/>
								</FormItem>
								<div className="common-tag-box">
									{this.renderCommonRemark()}
								</div>
								<Button className="button_save" type="primary" onClick={this.handleSubmit.bind(this)}>保存</Button>
							</div>
						</BaseForm>
			}
			<div className="remarks_list">
				<List itemLayout="horizontal" dataSource={info} renderItem={item => (<List.Item>
						<List.Item.Meta avatar={<Avatar style = {{ backgroundColor: '#3fc2a0' }} > {
								item.inputName.substring(0, 1)
							}
							</Avatar>} title={item.inputName} description={<div > <div>{item.context}</div>
						<div className="remark-time">{translateTime(item.inputTime, "YYYY-MM-DD HH:mm")}</div>
						</div>}/>
					</List.Item>)}/>
			</div>
		</div>)
	}
}
/* 操作记录 */
export class PersonOptionRecord extends Component {
	componentDidMount() {
		let {actions, resumeId} = this.props
		actions.getOptionAction({resumeId: resumeId})
	}
	componentWillReceiveProps(nextProps) {
		console.log(this.props)
		let {actions, resumeId} = this.props;
		if (JSON.stringify(nextProps.resumeId) !== JSON.stringify(this.props.resumeId)) {
			actions.getOptionAction({resumeId: nextProps.resumeId})
		}
		if (JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)) {
			if (nextProps.location.state && nextProps.location.state.key == "reload") {
				actions.getOptionAction({resumeId: nextProps.resumeId, time: timestamp()})
			}
		}
	}
	render() {
		let {info} = this.props
		return (<Timeline>
			{
				info.map((it, idx) => {
					return <Timeline.Item color="green">
						<PersonOptionRecordItem item={it}/>
					</Timeline.Item>
				})
			}
		</Timeline>)
	}
}
class PersonOptionRecordItem extends Component {
	render() {
		let {item} = this.props
		return (<div classNmae="optionRecordItem">
			<div>{translateTime(item.inputTime, "YYYY-MM-DD HH:mm")}</div>
			<div>{item.content}</div>
			<div>操作人：{item.inputAcc}</div>
		</div>)
	}
}
PersonOptionRecord.defaultProps = {
	location: {}
}
/* 沟通记录 */
export class PersonCommunitcate extends Component {
	componentDidMount() {
		let {actions, resumeId} = this.props
		actions.getCommiuncateAction({resumeId: resumeId})
	}
	componentWillReceiveProps(nextProps) {
		let {actions, resumeId} = this.props
		if (nextProps.resumeId != resumeId) {
			actions.getCommiuncateAction({resumeId: nextProps.resumeId})
		}
		/*刷新页面*/
		if (JSON.stringify(nextProps.location.state) !== JSON.stringify(this.props.location.state)) {
			if (nextProps.location.state && nextProps.location.state.key == "reload") {
				actions.getCommiuncateAction({resumeId: nextProps.resumeId,time: timestamp()})
			}
		}
	}
	render() {
		let {info} = this.props
		return <Timeline>
				{
					info.map((it, idx) => {
						return <Timeline.Item color="#36c5a7">
							<PersonCommunitcateItem item={it} name={name}/>
						</Timeline.Item>
					})
				}
			</Timeline>
	}
}
class PersonCommunitcateItem extends Component {
	playRecord(item) {
		let {id, recordUrl, showTimeLength, calledNum, candidateName} = item
		let showRecordPlay = {
			RecordPlay: {
				code: id,
				name: candidateName == ""
					? "播放录音"
					: candidateName,
				phone: calledNum,
				url: recordUrl,
				dur: showTimeLength + "",
				bPlay: "1"
			}
		};
		let showRecordPlayStr = JSON.stringify(showRecordPlay);
		global.invokeMethod('ShowRecordPlay', showRecordPlayStr)
	}
	renderPlayRecord(item){
		return item.type == 1 ? <span>{
				item.showTimeLength == "00:00:00"
				? <Icon type="play-circle" style={{
					color: "#ccc",
					marginRight: 10
				}}/>
				: <Icon type="play-circle" style={{
					color: "#0e8df8",
					marginRight: 10,
					cursor: "pointer"
				}} onClick={this.playRecord.bind(this, item)}/>
		}{item.showTimeLength}</span> : null
	}
	renderMsgContent(item){
		return item.type == 2 ? <Row gutter={10}>
		<Col span={24} className="communicate-content">{item.content}</Col>
	</Row> : null
	}
	render() {
		let {item} = this.props
		return (<div className="comunitcattionItem">
			<Row gutter={10}>
				<Col span={12}>
					<span className="communicate-title">【{item.showCallState}】{item.startTime}</span>
				</Col>
				<Col span={6}>
					{this.renderPlayRecord(item)}
				</Col>
				<Col span={6}>
					{item.inputName}
				</Col>
			</Row>
			{this.renderMsgContent(item)}
		</div>)
	}
}
PersonCommunitcate.defaultProps = {
	location: {}
}

/* 附加信息 */
export class ExtraInformation extends Component {
	state = {
		editid: "",
		newItem: undefined,
		info: {}
	}
	componentDidMount() {
		const {actions, resumeId} = this.props
		actions.listLinkAction({"resumeId": resumeId})
		actions.fetchAdditionInfoAction({"resumeId": resumeId})
	}
	componentWillReceiveProps(nextProps) {
		let {actions, resumeId} = this.props
		if (nextProps.resumeId != resumeId) {

			actions.listLinkAction({resumeId: nextProps.resumeId})
			actions.fetchAdditionInfoAction({resumeId: nextProps.resumeId})
		}
	}
	handlerAdditionDelete(id) {
		// handlerDelete
		const {actions, resumeId} = this.props
		actions.deleteAdditionInfoAction({id}).then(() => {
			actions.fetchAdditionInfoAction({"resumeId": resumeId})
		})
	}
		// 登记表下载
		handleDownload3(){
			let {
				info: {
					files
				}
			} = this.props
			console.log(this.props,"===name")
			let stylesText = '<style>body{font-size:12px;background-color:#fff;width:100%;overflow:auto;padding:0 20px}body li,body ul{margin:0;padding:0;list-style:none}body .content{margin:10px 20px}body .content .ant-col-12{width:50%;float:left}body .content .ant-col-12:nth-of-type(10n+1):not(:nth-of-type(1)):not(:nth-of-type(2)),body .content .ant-col-12:nth-of-type(10n+2):not(:nth-of-type(1)):not(:nth-of-type(2)){margin-top:20px}body .content .contentBase{font-size:12px;line-height:24px}body .content .contentBase label{color:grey}body .content .contentBase span{color:#333}body .title{text-align:center;font-size:20px}body .form-subtitle{background-color:#f7f7f7;height:50px;line-height:50px;font-size:15px;padding:0 20px}body .form-subtitle .interview-info{margin:0 auto;position:relative}body .form-subtitle .interview-info .interview-date{position:absolute;right:30px}body .form-subtitle .interview-info .printerBtn{position:absolute;right:0;font-size:16px;top:50%;margin-top:-8px;cursor:pointer}body .studylist-box,body .tips-title,body .worklist-box{line-height:24px;margin:10px}body .ant-table-wrapper{display:block;flex:none}body .ant-table-wrapper .ant-table-placeholder{display:none}body .studylist-box>li,body .worklist-box>li{display:flex}body .studylist-box>li>span,body .worklist-box>li>span{flex:1}body .studylist-box>li>span:first-of-type,body .worklist-box>li>span:first-of-type{flex:0 0 180px}body .apply-show-table .ant-table-title,body .part-title{font-size:16px;font-weight:700;margin:20px 0}body .apply-show-table .ant-table-thead{display:none}</style>'
			var test = '<!DOCTYPE html><html>' 
				+ stylesText
				+ '<body> <div style="width:1100px;margin:20px auto;border:solid 1px #e6e6e6">' + document.getElementById("apply-form-box").innerHTML + ' </div></body></html>'
				let htmlName = files[0].name +  '.html'
				export_raw(htmlName, test);
		}
	printerApplyForm() {
		var LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'))
		LODOP.PRINT_INIT("打印面试登记表")
		LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970)

		//设置页码
		LODOP.ADD_PRINT_HTM('1030', '600', '150', '22', "<font style='font-size:12px;float:right;'><span tdata='pageNO'>第##页</span>/<span tdata='pageCount'>共##页</span></font>");
		// LODOP.SET_PRINT_STYLEA(0, "Stretch", 2)
		LODOP.SET_PRINT_STYLEA(0,"ItemType",1);
		LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT","Auto-Width");

		let stylesText = '<style>body{font-size:12px;background-color:#fff;width:100%;overflow:auto;padding:0 20px}body li,body ul{margin:0;padding:0;list-style:none}body .content{margin:10px 20px}body .content .ant-col-12{width:50%;float:left}body .content .ant-col-12:nth-of-type(10n+1):not(:nth-of-type(1)):not(:nth-of-type(2)),body .content .ant-col-12:nth-of-type(10n+2):not(:nth-of-type(1)):not(:nth-of-type(2)){margin-top:20px}body .content .contentBase{font-size:12px;line-height:24px}body .content .contentBase label{color:grey}body .content .contentBase span{color:#333}body .title{text-align:center;font-size:20px}body .form-subtitle{background-color:#f7f7f7;height:50px;line-height:50px;font-size:15px;padding:0 20px}body .form-subtitle .interview-info{margin:0 auto;position:relative}body .form-subtitle .interview-info .interview-date{position:absolute;right:30px}body .form-subtitle .interview-info .printerBtn{position:absolute;right:0;font-size:16px;top:50%;margin-top:-8px;cursor:pointer}body .studylist-box,body .tips-title,body .worklist-box{line-height:24px;margin:10px}body .ant-table-wrapper{display:block;flex:none}body .ant-table-wrapper .ant-table-placeholder{display:none}body .studylist-box>li,body .worklist-box>li{display:flex}body .studylist-box>li>span,body .worklist-box>li>span{flex:1}body .studylist-box>li>span:first-of-type,body .worklist-box>li>span:first-of-type{flex:0 0 180px}body .apply-show-table .ant-table-title,body .part-title{font-size:16px;font-weight:700;margin:20px 0}body .apply-show-table .ant-table-thead{display:none}</style>'
		/* var LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'))
			// LODOP.PRINT_INIT("打印简历")
			// LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970)*/

		LODOP.ADD_PRINT_HTM(50, 50, 650, 980, stylesText + "<body>" + document.getElementById("apply-form-box").innerHTML + "</body>")
		//打印链接和图片
		//console.log(sourceUrl)
		// LODOP.ADD_PRINT_URL(50,50,650,980,sourceUrl)
		// /*打印预览*/
		LODOP.PREVIEW()
	}
	handleImg(url, item) {
		let that = this
		if (item.type == 1) {
			return new API().fetch(`${APP_SERVER}/registration/infoJson`, {
				method: 'POST',
				body: {
					id: item.additionId
				}
			}).then((json) => {
				return Modal.info({
					title: "面试登记表",
					className: "detailShow",
					maskClosable: true,
					centered: true,
					width: '1100px',
					content: (<ApplyFormView info={json} handleDowload={that.handleDownload3.bind(this)} handlePrinter={that.printerApplyForm.bind(this)}/>)
				})
			});

		} else {
			return Modal.info({
				title: "查看图片",
				width: "750px",
				centered: true,
				className: "detailShow",
				maskClosable: true,
				content: (<div><img src={url} style={{
						width: "100%"
					}}/></div>)
			})
		}
	}
	beforeUpload(file) {
		let {name} = file
		let suffix = name.split(".").pop()
		if (suffix == "jpg" || suffix == "png" || suffix == "jpeg") {
			return true
		} else {
			message.warning("图片格式只支持jpg,png和jpeg")
			return false
		}
	}

	renderUploadList() {
		const {actions, resumeId, info, detailType} = this.props
		// let data=[{fileName:"abc.jpg",url:"http://www.baidu.com",type:"jpg"},{fileName:"信息登记表",url:"http://www.baidu.com",type:"rar"}]
		return (<List header={<div> 信息登记表</div>} footer={detailType == 10
				? null //员工无操作
				: <FileUpload accept="image/jpg, image/png, image/jpeg" beforeUpload={this.beforeUpload} text="上传信息登记表" action={`/fileUpload/file/uploadResumeAttr?resumeId=${resumeId}&s=`} uploadType="1" onChange={() => {}} onSuccess={() => {
						actions.fetchAdditionInfoAction({"resumeId": resumeId, time: timestamp()})
					}}>
					<Button>上传信息登记表</Button>
				</FileUpload>} dataSource={info.files} renderItem={item => (<List.Item actions={detailType == 10
					? null //员工无操作
					: 	[	<span>
								<Popconfirm onConfirm={this.handlerAdditionDelete.bind(this, item.id)} title="是否确定删除这条数据" okText="是" cancelText="否">
										<Icon type="delete"  />
								</Popconfirm>
						</span>
					]
				
				}>
				<span onClick={this.handleImg.bind(this, item.fileUrl, item)} style={{
						cursor: "pointer"
					}}>{item.name}</span>
			</List.Item>)}/>)
	}
	editChange(e) {
		this.setState({textVal: e.target.value})
	}
	handlerEdit(id) {
		this.setState({editid: id})
	}
	handleAdd() {
		const {actions, resumeId} = this.props
		this.setState({
			editid: undefined,
			newItem: {
				id: undefined,
				personalLink: "",
				resumeId: resumeId
			}
		})
	}
	handlerSave(id, personalLink) {
		const {actions, resumeId} = this.props
		const {textVal} = this.state

		actions.saveLinkAction({
			id,
			personalLink: textVal || personalLink,
			resumeId
		}).then(() => {
			this.setState({editid: "", newItem: undefined})
			actions.listLinkAction({"resumeId": resumeId, time: timestamp()})
		})
	}
	handlerDelete(id) {
		const {actions, resumeId} = this.props
		actions.deleteLinkAction({id}).then(() => {
			actions.listLinkAction({"resumeId": resumeId, time: timestamp()})
		})
	}
	openPersonLink(link) {
		global.invokeMethod('ShowPublicUrl', link)
	}
	renderLinksList() {
		const {info, detailType} = this.props
		const {editid, newItem} = this.state
		// let data=[{id:"abc",personalLink:"http://www.baidu.com"},{id:"abcc",personalLink:"http://www.baidu.com"}]
		return (<List header={<div> 个人链接</div>} dataSource={newItem
				? [].concat(info.links).concat(newItem)
				: info.links}
			// dataSource={data}
			footer={detailType == 10
				? null //员工无操作
				: <Button icons="add" onClick={this.handleAdd.bind(this)}>添加个人链接</Button>} renderItem={item => (<List.Item actions={editid != item.id
					? [
						detailType == 10
							? null //员工无操作
							: <Icon onClick={this.handlerEdit.bind(this, item.id)} type="edit"/>,
						detailType == 10
							? null //员工无操作
							: <Popconfirm onConfirm={this.handlerDelete.bind(this, item.id)} title="是否确定删除这条数据" okText="是" cancelText="否">
								<Icon type="delete"/>
							</Popconfirm>
					]
					: [<Icon onClick={this.handlerSave.bind(this, item.id, item.personalLink)} type="save"/>]}>
				{
					editid == item.id
						? (<Input defaultValue={item.personalLink} onChange={this.editChange.bind(this)}/>)
						: (<span onClick={this.openPersonLink.bind(this, item.personalLink)} style={{
								cursor: "pointer"
							}}>{item.personalLink}</span>)
				}
			</List.Item>)}/>)
	}
	render() {
		return (<div className="extra-information">
			{this.renderUploadList()}
			{this.renderLinksList()}
		</div>)
	}
}
