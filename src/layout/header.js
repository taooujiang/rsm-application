/**
* @Author: jax <jaxchow>
* @Date:   2016-02-24T09:43:05+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-19T13:44:40+08:00
* @Description: 应用头部布局区域
*/

import React from 'react'
import {
  Layout,
  Header,
  Menu,
  Button,
  Breadcrumb,
  Card,
  Avatar,
  Dropdown,
  Icon
} from 'antd';

import {Link} from 'react-router'
const { Meta } = Card;

console.log(Link)
export default class HeaderSide extends React.Component {
  state = {
     collapsed: false,
   }
   toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onSelect() {}

  render() {
    let {location} = this.props
    let actions=this.state.collapsed==false ? [<Icon type='menu-unfold' onClick={this.toggleCollapsed} />, <Icon type="edit" />, <Icon type="ellipsis" />]:[<Icon type='menu-fold' onClick={this.toggleCollapsed} />]

    return (
      <div className="app-header" style={{width:this.state.collapsed ? '80px' : '220px'}}>
        <Menu mode="inline" onSelect={this.onSelect.bind(this)} defaultSelectedKeys={['0']} inlineCollapsed={this.state.collapsed}>
          <Menu.Item key="0">
            <Link to="dashboard">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="job">
              <Icon type="pie-chart" />
              <span>职位管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="resume">
              <Icon type="appstore" />
              <span>简历管理</span>
            </Link>
          </Menu.Item>
          <Menu.SubMenu key="3" title={<span><Icon type="appstore" /><span>面试管理</span></span>}>
            <Menu.Item key="3-1">
              <Link to="interview">
                <Icon type="pie-chart" />
                <span>面试管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3-2">
              <Link to="interview/calendar">
                <Icon type="pie-chart" />
                <span>日历查看面试</span>
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="4">
            <Link to="elite">
              <Icon type="appstore" />
              <span>人才库</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="member">
              <Icon type="appstore" />
              <span>员工管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="sound">
              <Icon type="pie-chart" />
              <span>通话记录</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="credit">
              <Icon type="pie-chart" />
            <span>诚信库</span>
            </Link>
          </Menu.Item>
          <Menu.SubMenu key="8" title={<span><Icon type="appstore" /><span>统计分析</span></span>}>
            <Menu.Item key="8-1">
              <Link>
                <Icon type="pie-chart" />
                <span>简历分析</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="8-2">
            <Link>
                <Icon type="pie-chart" />
                <span>通信分析</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="8-3">
              <Link>
                <Icon type="pie-chart" />
                <span>HR招聘分析</span>
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="9">
            <Icon type="pie-chart" />
            <span>微信管理</span>
          </Menu.Item>
          <Menu.SubMenu key="10" title={<span><Icon type="appstore" /><span>系统设置</span></span>}>
            <Menu.Item key="10-1">
              <Link>
                <Icon type="pie-chart" />
                <span>渠道设置</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="10-2">
                <Link to="settings/field">
                <Icon type="pie-chart" />
                <span>系统字段</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="10-3">
              <Link to="settings/remind">
                <Icon type="pie-chart" />
                <span>提醒设置</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="10-4">
              <Link>
                <Icon type="pie-chart" />
                <span>短信模板</span>
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    )
  }
}
