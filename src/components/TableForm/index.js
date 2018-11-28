import React from 'react';
import { Table, Divider, Tag, Input } from 'antd';
import DataTable from 'app/components/DataTable'
import './style.less'


export default class TableForm extends React.Component {
  componentDidMount() {
    this.props.onRef(this)
  }
  render() {
    let locale = {
      emptyText: <div className='table-no-data'>暂无数据</div>
    }
    return <Table className="table-form" locale={locale} rowKey="id" columns={this.props.columns} dataSource={this.props.data} pagination={false} />
  }
}