import React, {Component, PropTypes} from 'react'
import {
  Button,
  Input,
  Table,
  Form,
  Dialog,
  Col,
  Row,
  DatePicker,
  Tooltip,
  Select
} from 'antd'
import moment from 'moment';
import {Layout,Fixed,Pane} from 'components/Layout'
import PageView from 'components/Page'
import AdvancedSearchForm from 'components/AdvancedSearch'
import ButtonGroupExt from 'components/ButtonGroupExt'


const Option = Select.Option
const {RangePicker} = DatePicker;

export default class CustomSystemFieldView extends PageView {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let {actions} = this.props;
    actions.listAction()
    //  actions.menuAction()
  }
  renderSelectOption(data,idx){
    return (<Select.Option value={data.value} key={idx}>{data.label}</Select.Option>)
  }

  renderTableList() {
    let self = this;
    let {reduce} = this.props
    let {spins:{tableSpin}} = reduce
    let page = reduce.page
    let list = [...reduce.list.values()]

  //  console.log("tableSpin",tableSpin)
    let tableConf = {
      rowKey: "id",
      dataSource: list,
      loading: tableSpin,
      columns: [
        {
          type: 'selection'
        },{
          title: "字段名称",
          key: "fieldName",
          dataIndex: "fieldName",
          width: 120
        }, {
          title: "字段类型",
          key: "fieldType",
          dataIndex: "fieldType",
          width: 150,
        }, {
          title: "是否启用",
          key: "fieldEnable",
          dataIndex: "fieldEnable",
          width: 100
        }, {
          title: "操作",
          key: "id",
          dataIndex: "id",
          render: (data) => {
            // console.log(data)
            return (
              <ButtonGroupExt onClick={this.handlerMenu}>
                  <Button icon="delete" actionkey="del">删除</Button>
                  <Button icon="edit" actionkey="edit">编辑</Button>
              </ButtonGroupExt>
            )
          }
        }
      ]
    }

    return (<Table  {...this.props} {...tableConf}  {...this.mergeTableConfig({pagination:page})} />)
  }
  handlerMenu(actionType){
    console.log(actionType)
  }

  renderToolbar() {
    let {actions} = this.props;
    return (
      <Button.Group>
        <Button type="ghost" icon="plus" onClick={this.handleAddRoute.bind(this)}>添加</Button>
      </Button.Group>
    )
  }
  render() {
    let props = this.props
    return (
      <Layout direction="rows">
        <Pane>
          {this.renderToolbar()}
          {this.renderTableList()}
        </Pane>
        {props.children}
      </Layout>
    )
  }
}
