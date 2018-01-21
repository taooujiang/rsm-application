import React,{Component} from "react"

import {Table} from 'antd'


export default class DataTable extends Table{
  static defaultProps={
    size:'middle',
    prefixCls: 'ant-table',
    pagination:{
       showQuickJumper:true,
       showSizeChanger:true,
       pageSizeOptions:['10','20','50','100'],
    }
  }
  constructor(props) {
    super(props);
    console.log(props)
  }
}
