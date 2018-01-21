/**
 * @Author: jaxchow
 * @Date:   2017-07-06T11:27:15+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-16T14:03:43+08:00
 * @Description: DEMO页
 */

import React, {Component} from 'react'
//import {reduxForm,Field } from 'redux-form'
//import { required, email } from 'redux-form-validators'
import  {Card,List, Icon, Layout, Form, Row,Col,
  Button,
  Checkbox,
  Input,
  Radio,
  DatePicker,
  Select,
  TimePicker,
  Divider,
  Upload} from 'antd'
// import ShortCutList from '../../components/ShortCutList.view'
// import AvatarPanel from '../../components/AvatarPanel.view'
// import PropsList from '../../components/PropsList.component'
import WeekPicker from 'antd/es/date-picker/WeekPicker'
import BaseForm,{FormItem} from 'app-components/BaseForm'
import CalendarPicker from 'app-components/CalendarPicker'
import SwitchCard from 'app-components/SwitchCard'

const FormCreate = Form.create
const Option=Select.Option

var handleConfirmPassword = (rule, value, callback) => {
     console.log(this,value)
    // const { getFieldValue } = this.props.form
    if (value && value !== 'suitProName') {
        callback('两次输入不一致！')
    }

    // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
    callback()
 }

class CardForm extends Component {

  handleSubmit = (e) => {
   e.preventDefault();
   this.props.form.validateFields((err, values) => {
     if (!err) {
       console.log('Received values of form: ', values);
     }
   });
 }

  render() {
    let {fields, handleSubmit, submitting, values} = this.props
    //const { getFieldDecorator } = this.props.form;
    var options = [
      {
        label: "选项1",
        value: "1"
      }, {
        label: "选项2",
        value: "2"
      }, {
        label: "选项3",
        value: "3"
      }, {
        label: "选项4",
        value: "4"
      }
    ]
    return (
      <BaseForm onSubmit={this.handleSubmit}>
        <FormItem name="suitProNameId" label="产品编号" rules={[{ required: true, message: 'Please input!' },{  validator: handleConfirmPassword}]}>
            <Input />
        </FormItem>
        <FormItem name="suitProName" label="产品名称">
            <Input />
        </FormItem>
      </BaseForm>
    )
  }
}


export default class Demo extends Component {
  handleSubmit(value) {
    console.log(value)
  }
  renderForm() {
    return (
      <Row>
        <Col span="24">
          <Card header="表单示例">
            <CardForm onSubmit={this.handleSubmit.bind(this)}>
              <Divider />
              <div>
                <Button type="dashed">Dashed</Button>
              </div>
            </CardForm>
          </Card>
        </Col>
      </Row>
    )
  }
  renderShortCut() {
    let {style} = this.props;
    var item = [
      {
        icon: 'edit',
        href: '#/edit',
        text: '编辑'
      }, {
        icon: 'loading',
        href: '#/loading',
        text: '加载'
      }, {
        icon: 'message',
        href: '#/message',
        text: '消息'
      }, {
        icon: 'upload',
        href: '#/upload',
        text: '上传'
      }, {
        icon: 'more',
        href: '#/more',
        text: '更多'
      }
    ]
    return (

      <Layout.Col span="12">
        <Card header="快捷入口">
          <ShortCutList item={item}/>
        </Card>
      </Layout.Col>
    )
  }

  renderAvatarPanel() {
    var item = [
      {
        icon: 'edit',
        href: '#/edit',
        text: '50天'
      }, {
        icon: 'loading',
        href: '#/loading',
        text: '30分钟'
      }, {
        icon: 'message',
        href: '#/message',
        text: '15条'
      }
    ]
    var user = {
      username: 'fhtx001',
      nickname: '烽火1',
      level: 18,
      money: 150
    }
    return (
      <Layout.Col span="12">
        <Card header="个人信息">
          <AvatarPanel user={user} item={item}/>
        </Card>
      </Layout.Col>
    )
  }
  renderPropList() {
    return (
      <Layout.Col span="12">
        <Card header="个人信息">
          <PropsList labelPosition={"left"} labelWidth="120" labelSuffix={":"} inline={false}>
            <PropsList.Item label="产品名称1">
              进餐1号
            </PropsList.Item>
            <PropsList.Item label="产品名称2">
              进餐1号
            </PropsList.Item>
            <PropsList.Item label="产品名称3">
              进餐1号
            </PropsList.Item>
            <PropsList.Item label="产品名称4">
              进餐1号
            </PropsList.Item>
            <PropsList.Item label="产品名称5">
              进餐1号
            </PropsList.Item>
            <PropsList.Item label="产品名称6">
              进餐1号
            </PropsList.Item>
          </PropsList>
        </Card>
      </Layout.Col>
    )

  }
  renderListView() {
    var items = [
      {
        productName: "11",
        productType: "22"
      }, {
        productName: "111",
        productType: "222"
      }, {
        productName: "1111",
        productType: "2222"
      }
    ]
    return (
      <Layout.Col span="12">
        <Card header="个人信息">
          <List items={items}>
            <PropsList labelPosition={"left"} labelWidth="120" labelSuffix={":"} inline={false}>
              <PropsList.Item label="产品名称1">
                productName
              </PropsList.Item>
              <PropsList.Item label="产品名称2">
                productType
              </PropsList.Item>
              <PropsList.Item label="产品名称3">
                进餐1号
              </PropsList.Item>
              <PropsList.Item label="产品名称4">
                进餐1号
              </PropsList.Item>
              <PropsList.Item label="产品名称5">
                进餐1号
              </PropsList.Item>
              <PropsList.Item label="产品名称6">
                进餐1号
              </PropsList.Item>
            </PropsList>
          </List>
        </Card>
      </Layout.Col>
    )
  }
  renderCalendarPicker(){
    return (
      <CalendarPicker minDate="2018-01-01" maxDate="2019-01-01"/>
    )
  }
  renderSwitchCard(){
    return (<SwitchCard title="我的配置12" value={false}>
      我的配置我知道<Button>111</Button>
      <Select defaultValue="lucy" style={{ width: 120 }} >
       <Option value="jack">Jack</Option>
       <Option value="lucy">Lucy</Option>
       <Option value="disabled">Disabled</Option>
       <Option value="Yiminghe">yiminghe</Option>
     </Select>
     defaultChecked
    </SwitchCard>)
  }
  renderWeekPicker(){
    return (null)
  }
  render() {
    return (
      <div>
        {/*this.renderListView()*/}
        {/*this.renderPropList()*/}
        {/*this.renderShortCut()*/}
        {/*this.renderAvatarPanel()*/}
        {/*this.renderCalendarPicker()*/}
        {this.renderWeekPicker()}
        {this.renderSwitchCard()}
        {/*this.renderForm() */}
      </div>
    )
  }
}
