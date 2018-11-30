import React from 'react';
import { Table, Divider, Tag, Input } from 'antd';
import DataTable from 'app/components/DataTable'
import './style.less'


export default class TableForm extends React.Component {
  componentDidMount() {
    // 原想法为表格包在FormItem内，此组件this作为父组件一个属性，调用this.xx.props.onChange,后来发现可在父组件State完成，
    // 故此组件唯一差异在于table的min-height与无y滚动条
    // this.props.onRef(this)
  }
  render() {
    let locale = {
      emptyText: <div className='table-no-data'>暂无数据</div>
    }
    return <Table className="table-form" locale={locale} rowKey="id" columns={this.props.columns} dataSource={this.props.data} pagination={false} />
  }
}