import React, {Component, PropTypes} from 'react'
import {
  Button,
  Input,
  Table,
  Form,
  Modal,
  Select,
  DatePicker,
  TreeSelect
} from 'antd'


import SoundFormView from './SoundForm.view'
import AdvancedSearchForm from 'components/AdvancedSearch'

const Option = Select.Option
const {RangePicker} = DatePicker;

class UserListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRows: [],
      selectedRowKeys: []
    };
  }

  componentWillMount() {
    let {actions} = this.props;
    actions.listAction();
  }
  onSubmit() {
    this.filterTableHandler()
  }

  handleAddRoute() {
    let {actions, history} = this.props
    actions.addRoute()
  }
  handleEditRoute(id) {
    let {actions, history} = this.props
    actions.editRoute(id)
  }
  handleBackRoute() {
    let {actions, history} = this.props
    actions.backRoute()
  }
  onSelectChange(selectedRowKeys, selectedRows) {
    this.setState({selectedRows});
  }
  getSelectLength() {
    return this.getSelectRows().length
  }
  getSelectRows() {
    return this.state.selectedRows
  }
  handleDeleteRoute() {
    let rows = this.getSlelectRows()
    rows.map((it) => {
      return it
    })
  }
  handleFilter(value) {
    let {actions} = this.props;
    actions.listAction(value);
    //console.log(value)
  }
  renderToolbar() {
    let {actions} = this.props;
    return (
      <Button.Group>
        <Button type="primary" icon="add" onClick={this.handleAddRoute.bind(this)}>添加</Button>
        <Button type="primary" icon="delete" disabled={this.getSelectLength() == 1
          ? false
          : true} onClick={this.handleDeleteRoute.bind(this)}>删除</Button>
        <Button type="primary" icon="get" disabled={this.getSelectLength() > 0
          ? false
          : true} onClick={() => alert(this.getSlelectRows())}>获取选中数据</Button>
      </Button.Group>
    )
  }
  renderSearchBar() {
    let {reduce} = this.props
    let keysOption = [
      {
        label: "联系人",
        value: "linkName"
      }, {
        label: "客户名称",
        value: "custName"
      }, {
        label: "联系电话",
        value: "phone"
      }
    ]
    let params = reduce.params || {}
    const tProps = {
      treeData: [
        {
          label: 'Node1',
          value: '0-0',
          key: '0-0',
          children: [
            {
              label: 'Child Node1',
              value: '0-0-0',
              key: '0-0-0'
            }
          ]
        }, {
          label: 'Node2',
          value: '0-1',
          key: '0-1',
          children: [
            {
              label: 'Child Node3',
              value: '0-1-0',
              key: '0-1-0'
            }, {
              label: 'Child Node4',
              value: '0-1-1',
              key: '0-1-1'
            }, {
              label: 'Child Node5',
              value: '0-1-2',
              key: '0-1-2'
            }
          ]
        }
      ],
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: 'SHOW_ALL',
      searchPlaceholder: 'Please select',
      style: {
        width: 300
      }
    };
    let rangesConf = {
      '今天': [
        moment(), moment()
      ],
      '本周': [
        moment().startOf('week'), moment().endOf('week')
      ],
      '本月': [
        moment().startOf('month'), moment().endOf('month')
      ],
      '本年': [moment().startOf('year'), moment().endOf('year')]
    }
    return (
      <AdvancedSearchForm keysOption={keysOption} filterSubmitHandler={this.handleFilter.bind(this)}>
        <Select name="custTypeId" defaultvalue="jack">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <RangePicker name="nextStartAction" format="YYYY-MM-DD" ranges={rangesConf}/>
        <Select name="optionlistId" defaultvalue="lucy">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <RangePicker name="lastStartAction" format="YYYY-MM-DD" ranges={rangesConf}/>
        <TreeSelect name="accs" {...tProps}/>
      </AdvancedSearchForm>
    )
  }
  renderTableList() {
    let {reduce} = this.props
    let loading = reduce.loading
    let list = [...reduce.list.values()]
    const rowSelection = {
      onChange: this.onSelectChange.bind(this)
    };
    let state = {
      columns: [
        {
          type: 'selection'
        }, {
          title: "客户状态",
          key: "nextActionDate",
          dataIndex: "nextActionDate"
        }, {
          title: "销售进程",
          key: "optionName",
          dataIndex: "optionName",
          width: 120
        }, {
          title: "通话时间",
          key: "showLastActionDate",
          dataIndex: "showLastActionDate",
          width: 120
        }, {
          title: "通话时长",
          key: "groupName",
          dataIndex: "groupName",
          width: 120
        }, {
          title: "呼叫类型",
          key: "showMinActionDate",
          dataIndex: "showMinActionDate",
          width: 100
        }, {
          title: "联系人",
          key: "ownerAcc",
          dataIndex: "ownerAcc",
          width: 100
        }
      ]
    }
    return (<Table style={{
      width: '100%'
    }} loading={loading} rowKey={'custFollowId'} rowSelection={rowSelection} columns={state.columns} dataSource={list}/>)
  }
  renderDialogView() {
    var {route} = this.props
    var title = ""
    if (route.path == 'add') {
      title = "添加"
    } else if (route.path == 'edit/:id') {
      title = "编辑"
    } else {
      return (null)
    }
    return (
      <Modal title={title} visible={true} maskClosable={false} onCancel={this.handleBackRoute.bind(this)} onOK={this.handleBackRoute.bind(this)}>
        <SoundFormView {...this.props}></SoundFormView>
      </Modal>
    )
  }
  render() {
    console.log("render sound")
    return (
      <div>
        {this.renderDialogView()}
        {this.renderSearchBar()}
        {this.renderToolbar()}
        {this.renderTableList()}
      </div>
    )
  }
}

export default SoundListView
