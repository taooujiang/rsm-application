import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import { Button, Card, Input, Divider, message, Select, InputNumber } from "antd"
import BaseForm, { FormItem, customRules } from "components/BaseForm";
import EditableTable from "components/TableForm";
import { FormPage } from "app/components/Page";
import { fetchInternalRecommend } from '../../api'
import './style.less';

const Option = Select.Option;
@NestedComponent()
export default class InternalRecommend extends FormPage {
  state = {
    rewardList: [],
    levelRewardList: [],
  }
  renderToolbar() {
    return (
      <Button type="primary" onClick={this.onSubmit.bind(this)} >保存</Button>
    )
  }
  componentDidMount = () => {
    fetchInternalRecommend().then(res => {
      const { awardBeans, positionLevelBeans } = res
      let rewardList = awardBeans.map(e => {
        const { id, domainName, awardUnit, awardType, awardNum, stage } = e
        return { id, domainName, awardUnit, awardType, awardNum, stage }
      })
      let levelRewardList = positionLevelBeans.map(e => {
        const { id, awardNum, awardType, positionName } = e
        return { id, awardNum, awardType, positionName }
      })
      this.setState({
        rewardList,
        levelRewardList
      })
    }).catch(e => {
      message.warning(e.msg)
    })
  }
  handleSubmit(values) {
    console.log(values, 'ssssssssss')
    // let { actions, router } = this.props;
    // this.setState({
    //   loading: true
    // })
    // saveShareSetting(values).then(res => {
    //   message.success('保存成功');
    //   this.setState({
    //     loading: false
    //   })
    // })
  }
  handleHostnameChange(e) {
    console.log(e.target.value)
  }

  handleTableFormItemChange(type, formItemType, record, val) {
    const { id } = record
    let listMapper = {
      rewardForm: 'rewardList',
      levelRewardForm: 'levelRewardList'
    }
    let tempDataList = this.state[listMapper[type]]
    for (let i = 0; i < tempDataList.length; i++) {
      if (tempDataList[i].id == id) {
        tempDataList[i][formItemType] = val
        break;
      }
    }
    this.setState({
      [listMapper[type]]: tempDataList
    })
    this[type].props.onChange(tempDataList)
  }
  onRewardRef = (ref) => {
    this.rewardForm = ref
  }
  onLevelRewardRef = (ref) => {
    this.levelRewardForm = ref
  }
  renderRewardSettingTable() {
    const columns = [{
      title: '阶段',
      dataIndex: 'stage',
      key: 'stage',
    }, {
      title: '单位',
      width: 200,
      dataIndex: 'awardUnit',
      key: 'awardUnit',
      render: (text, record) => (
        <div>
          <span>达到 </span>
          <InputNumber style={{ width: 80 }} onChange={this.handleTableFormItemChange.bind(this, 'rewardForm', 'awardUnit', record)} />
          <span> 次</span>
        </div>
      ),
    }, {
      title: '奖励方式',
      dataIndex: 'awardType',
      key: 'awardType',
      render: (text, record) => (
        <Select defaultValue={text} style={{ width: 120 }} onChange={this.handleTableFormItemChange.bind(this, 'rewardForm', 'awardType', record)} >
          <Option value="1" >积分</Option>
          <Option value="2">现金</Option>
        </Select>
      ),
    }, {
      title: '奖励数值',
      dataIndex: 'awardNum',
      key: 'awardNum',
      render: (text, record) => (
        <InputNumber style={{ width: 120 }} defaultValue={text} onChange={this.handleTableFormItemChange.bind(this, 'rewardForm', 'awardNum', record)} />
      ),
    }];
    return (<FormItem>
      <EditableTable onRef={this.onRewardRef} columns={columns} data={this.state.rewardList} label="内推奖励设置" name="sysSetInterpolateAwardBeanList" />
    </FormItem>)
  }

  renderLevelRewardSettingTable() {
    const columns = [{
      title: '职级名称',
      dataIndex: 'positionName',
      key: 'positionName',
    }, {
      title: '奖励方式',
      dataIndex: 'awardType',
      key: 'awardType',
      render: (text, record) => (
        <Select defaultValue={text} style={{ width: 120 }} onChange={this.handleTableFormItemChange.bind(this, 'levelRewardForm', 'awardType', record)} >
          <Option value="1">积分</Option>
          <Option value="2">现金</Option>
        </Select>
      ),
    }, {
      title: '奖励数值',
      dataIndex: 'awardNum',
      key: 'awardNum',
      render: (text, record) => (
        <InputNumber style={{ width: 120 }} onChange={this.handleTableFormItemChange.bind(this, 'levelRewardForm', 'awardNum', record)} />
      ),
    },];
    return (<FormItem>
      <EditableTable onRef={this.onLevelRewardRef} columns={columns} data={this.state.levelRewardList} label="特殊职位奖励设置" name="sysPositionLevelBeans" />
    </FormItem>)
  }


  render() {
    const { form, handleSubmit, children, saveFormRef } = this.props;
    const formFullItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 9
      }
    };
    return (
      <Card title={<div><h3 className="card-title">内推设置</h3></div>} extra={this.renderToolbar()}	>

        <BaseForm
          onSubmit={handleSubmit}
          ref={this.saveFormRef}>
          <FormItem {...formFullItemLayout} className="host-item">
            <Input addonBefore="@" label="内推邮箱域名设置" name="hostName" onChange={this.handleHostnameChange.bind(this)} />
          </FormItem>
          <p>设置后，符合域名条件的邮箱投递的简历，会自动识别为内推邮件。投递简历时，简历邮件主题必须为含有“【应聘简历】”。</p>
          <Divider />

          {this.renderRewardSettingTable()}
          {this.renderLevelRewardSettingTable()}

        </BaseForm>
      </Card>
    )
  }
}
