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
import BaseForm, {FormItem, customRules} from 'app/components/BaseForm'
import DictUtils from 'app/utils/DictUtils'
import moment from 'moment'
/* 小组件 */
class BaseInfoItem extends Component {
  render() {
    return toStrings(this.props.info) || this.props.show
      ? (<div className="baseinfo-item" style={Object.assign({}, this.props.style, {wordBreak: "break-all"})}>
        <label>{this.props.label}：</label>
        <span>{this.props.info}</span>
      </div>)
      : null
  }
}

class InfoInline extends Component {
  render() {
    return <div className="info-inline">
      <label>{this.props.label}：</label>
      <span>{this.props.info}</span>
    </div>
  }
}

class FormItemWrapparCol extends Component {
  render() {
    return (<Col span={this.props.span}>
      <FormItem>
        {this.props.children}
      </FormItem>
    </Col>)
  }
}
/* 公用方法 */
/* 转化字典表 */
function translateDic(type, value) {
  return DictUtils.getDictLabelByValue(type, value)
}
/* 转化时间格式 */
function translateTime(time, defaultFormat) {
  if (time == "9999-01-01") {
    return "至今"
  } else {
    let format = defaultFormat
      ? defaultFormat
      : "YYYY/MM/DD"
    return time
      ? moment(time).format(format)
      : ''
  }
}
/* 转化为moment对象 */
function translateTimeToMoment(time) {
  return time
    ? moment(time)
    : null
}
/* 转为字符串 */
function toStrings(str) {
  return str
    ? str + ""
    : ""
}
/* 返回时间戳 */
function timestamp() {
  return new Date().getTime()
}
/* 转为字符串数组 */
function arrayToString(array) {
  return array && array.map(it => toStrings(it))
}
/* 过滤数组 */
function filterArray(arr) {
  return arr.filter((it) => it != "" && it != undefined && it != null)
}

export {
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
}
