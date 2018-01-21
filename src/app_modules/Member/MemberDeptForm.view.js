import React, {Component, PropTypes} from 'react'
import {
  Row,
  Col,
  Modal,
  Button,
  Input,
  Form,
  DatePicker,
  Layout,
  Select
} from 'antd'

import ModalView from '../../components/Modal.view'
import WrapperComponent from '../../decorators/WrapperComponent'

const FormItem = Form.Item
const FormCreate = Form.create
const Option = Select.Option
const {TextArea} = Input

@FormCreate()
class MemberDeptForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <FormItem label="部门名称">
          <Input name="deptName"/>
        </FormItem>
        <FormItem label="所属部门">
          <Input name="deptParent"/>
        </FormItem>
      </Form>
    )
  }
}

@WrapperComponent(ModalView)
export default class MemberDeptFormView extends Component {
  submit = (values) => {
    console.log(values)
  }
  componentWillMount() {
    let {params, data, actions} = this.props;
    actions.loadAction(1);
  }
  render() {
    let {params, reduce} = this.props;
    //	let model=preduce.list[0]
    let model = {}
    return (
      <div className="添加书本">
        <MemberDeptForm onSubmit={this.submit} initialValues={model}>
          <FormItem>
            <Button type="primary" htmlType="submit">保存</Button>
            <Button>关闭</Button>
          </FormItem>
        </MemberDeptForm>
      </div>
    )
  }
}
