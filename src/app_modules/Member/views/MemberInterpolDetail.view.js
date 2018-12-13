/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-03-16T17:04:48+08:00
 */

import React, { Component, PropTypes } from 'react'
import { Row, Col, Modal, Button, Input, Form, DatePicker, Layout, Spin, Select, TreeSelect } from 'antd'
import ModalView from 'app/components/Modal.view'
import NestedComponent from 'app/decorators/NestedComponent'
import WrapperComponent from 'app/decorators/WrapperComponent'
import ErrorBoundary from 'app/components/ErrorBoundary'
import { fechInterpolDetail } from '../api'
import SmartLink from "app/components/SmartLink";
import './styles.less'
@NestedComponent()
@WrapperComponent(ModalView, { width: 600, footer: null })
export default class MemberInterpolDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataList: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fechInterpolDetail({ id: this.props.params.id }).then(res => {
      console.log(res.recordBeanPager.list)
      this.setState({
        dataList: res.recordBeanPager.list
      })
    })
  }
  componentWillReceiveProps = (nextProps) => {
    // if(nextProps)
    let { key: newKey } = nextProps.location.state || {}
    let { key: oldKey } = this.props.location.state || {}
    if (newKey && newKey != oldKey) {
      // 兑换操作 在state生成key，在此接受 拉取新的兑换记录列表
      this.fetchData()
    }
  }

  render() {
    const { item, location } = this.props

    const { memberName, memberMobilephone, cashBalance, cashExchange, cashTotal, creditBalance, creditExchange, creditTotal, deptName, job, } = item || {}
    return (
      // <Spin tip="Loading..." spinning={formSpin}>
      //   <MemberForm  saveFormRef={this.saveFormRef} sysFieldList={sysFieldList} item={item} actions={actions} params={params} />
      // </Spin>
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
                <span style={{color:'#fe8153',marginRight:'10px'}}><span style={{fontSize:'20px'}}>{creditBalance}</span>个</span>
                <SmartLink to={`credit`}>
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
                <span style={{color:'#2199f0',marginRight:'10px'}}><span style={{fontSize:'20px'}}>{cashBalance}</span>元</span>
                <SmartLink to={`cash`}>
                  <Button>提取现金</Button>
                </SmartLink>
              </div>
              <div>已提取现金{cashExchange}元 | 现金总额{cashTotal}元</div>
            </div>
          </div>
        </div>
        <div className="interpol-detail-recordlist">
          {this.state.dataList.map(e=>{
            return(
              <div>{e.status}{e.awardNum}</div>
            )
          })}
        </div>
      </div>
    )
  }
}

