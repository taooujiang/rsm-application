/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-03-16T17:04:48+08:00
 */

import React, { Component, PropTypes } from 'react'
import Debounce from 'lodash-decorators/debounce';
import { Row, Col, List, Button, Input, Avatar, message, Layout, Spin, Select, TreeSelect } from 'antd'
import ModalView from 'app/components/Modal.view'
import NestedComponent from 'app/decorators/NestedComponent'
import WrapperComponent from 'app/decorators/WrapperComponent'
import moment from 'moment'
import { fechInterpolDetail } from '../api'
import SmartLink from "app/components/SmartLink";
import './styles.less'
@NestedComponent()
@WrapperComponent(ModalView, { width: 600, footer: null, isRouteStackPop: true })
export default class MemberInterpolDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollLoading: false,
      isListLoading: false,
      dataList: [],
      totalRecord: 0,
      page: 1
    }
  }

  componentWillMount() {
    // window.addEventListener('scroll', this.onScroll.bind(this))
  }
  componentWillUnmount() {
    // const target = document.querySelector('.ant-modal-wrap')
    // console.log(target,'ssssssssssssss')
    // target.removeEventListener('scroll', this._handleScroll.bind(this, target))
  }

  // @Debounce(2000)
  _handleScroll(target) {
    let scrollTop = target.scrollTop
    let clientHeight = target.clientHeight
    let scrollHeight = target.scrollHeight
    let isBottom = scrollTop + clientHeight === scrollHeight
    const { totalRecord, dataList, page } = this.state
    if (isBottom) {
      if (this.state.scrollLoading) {
        return
      }
      if (totalRecord > dataList.length) {
        return this.fetchData({
          page: page + 1,
          pageSize: 20,
          intPosition: dataList.length,
        })
      } else if (totalRecord == dataList.length) {
        // //数据不足一页（30个），滚动到底部无任何操作
        // if (totalRecord < 30) return
        message.warn('已加载全部记录')
      }
    }
  }
  initScrollEvent() {
    const target = document.querySelector('.ant-modal-wrap')
    target.addEventListener('scroll', this._handleScroll.bind(this, target))
  }
  componentDidMount() {
    this.initScrollEvent()
    this.fetchData()
  }

  fetchData(page) {
    this.setState({
      isListLoading: true,
      scrollLoading: !!page
    })
    fechInterpolDetail({ interpolateId: this.props.params.id, pageSize: 30, page: 1, ...page }).then(res => {
      // scrollLoading: true

      const { totalRecord, page } = res
      const { dataList } = this.state
      if (page) {
        this.setState({
          dataList: dataList.concat(res.list),
          totalRecord,
          page: page
        }, () => {
          this.setLoadEnd()
        })
      } else {
        this.setState({
          dataList: res.list,
          totalRecord
        }, () => {
          this.setLoadEnd()
        })
      }
    }).catch(e => {
      message.error(e.msg)
    })
  }
  setLoadEnd() {
    this.setState({
      isListLoading: false,
      scrollLoading: false
    })
  }
  componentWillReceiveProps = (nextProps) => {
    let { key: newKey } = nextProps.location.state || {}
    let { key: oldKey } = this.props.location.state || {}
    if (newKey && newKey != oldKey) {
      // 兑换操作 在state生成key，在此接受 拉取新的兑换记录列表
      // todo,不需要random key，设置为true即可
      this.fetchData()
    }
  }
  _renderListItem(item) {
    const { awardJob, awardNum, awardStage, awardType, id, status, inputTime } = item || {}
    let recordNumText = ""
    let titleText = ""
    if (status) {
      // status 0：收入  1：支出
      const titleMapper = {
        1: '兑换积分',
        2: '提取现金'
      }
      titleText = titleMapper[awardType]
      recordNumText = `-${awardNum}`
    } else {
      const titleMapper = {
        1: '积分奖励',
        2: '现金奖励'
      }
      titleText = `内推${awardJob ? `【${awardJob}】` : ''}${awardStage}${titleMapper[awardType]}`
    }
    const iconTypeMapper = {
      1: { icon: 'gift', color: '#fe8155' },
      2: { icon: 'pay-circle', color: '#3a9fef' }
    }
    return (
      <List.Item key={id}>
        <List.Item.Meta
          avatar={
            <Avatar icon={iconTypeMapper[awardType].icon} style={{ backgroundColor: iconTypeMapper[awardType].color }} />
          }
          title={<div>{titleText}</div>}
          description={inputTime}
        />
        <div>{recordNumText}</div>
      </List.Item>
    )
  }
  renderRecordList() {
    const { isListLoading } = this.state
    return (
      <List
        loading={isListLoading}
        dataSource={this.state.dataList}
        renderItem={this._renderListItem}
      >
        {this.state.scrollLoading && (
          <div className="demo-loading-container">
            <Spin />
          </div>
        )}
      </List>
    )
  }
  render() {
    const { item, location } = this.props
    const { memberName, memberMobilephone, cashBalance, cashExchange, cashTotal, creditBalance, creditExchange, creditTotal, deptName, job, } = item || {}
    return (
      <div className="interpol-detail-wrapper">
        <div className="interpol-detail-header">
          <span style={{ fontSize: '18px', marginRight: '25px' }}>{memberName}</span>
          <span style={{ marginRight: '25px' }}>{memberMobilephone}</span>
          <span>{`${deptName} ${job}`}</span>
        </div>
        <div className="interpol-detail-info">
          <div className="interpol-detail-info-credit">
            <div>
              <div>当前可兑余额</div>
              <div className="interpol-detail-info-btn">
                <span style={{ color: '#fe8153', marginRight: '10px' }}><span style={{ fontSize: '20px' }}>{creditBalance}</span>个</span>
                <SmartLink style={{ display: 'inline-block', verticalAlign: 'bottom' }} to={`credit`}>
                  <Button>积分兑换</Button>
                </SmartLink>
              </div>
              <div>已兑换{creditExchange}积分 | 积分总数{creditTotal}积分</div>
            </div>
          </div>
          <div className="interpol-detail-info-cash">
            <div>
              <div>当前提现余额</div>
              <div className="interpol-detail-info-btn">
                <span style={{ color: '#2199f0', marginRight: '10px' }}><span style={{ fontSize: '20px' }}>{cashBalance}</span>元</span>
                <SmartLink style={{ display: 'inline-block', verticalAlign: 'bottom' }} to={`cash`}>
                  <Button>提取现金</Button>
                </SmartLink>
              </div>
              <div>已提取现金{cashExchange}元 | 现金总额{cashTotal}元</div>
            </div>
          </div>
        </div>
        <div className="interpol-detail-recordlist">
          <div style={{ color: '#2b323c', marginTop: '10px', marginBottom: '25px' }}>奖励记录</div>
          {this.renderRecordList()}
        </div>
      </div>
    )
  }
}
