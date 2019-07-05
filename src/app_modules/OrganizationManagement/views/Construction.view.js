
import React, {Component, PropTypes} from 'react'
//import {reduxForm,Field} from 'redux-form'
import {Menu, Button, Input, Table,Icon, Form, DatePicker,Card,Switch,Row,Col,Select,Checkbox,Radio  } from 'antd'
import {Layout,Fixed,Pane} from 'components/Layout'
import PageView,{FormPage} from 'components/Page'
import CalendarPicker from 'components/CalendarPicker'
import DataTable from 'components/DataTable'
import moment from 'moment'
import ErrorBoundary from 'components/ErrorBoundary'
import { Link } from 'react-router'
import style from './styles.less'

export default class Construction extends PageView {
        componentWillMount() {
            let {actions} = this.props;
            actions.constructionAction()
		}

		exportExcel(){
			const{actions}=this.props
			actions.exportAction('/jobNew/export',this.state.exportParams)

		}
		handleFilter(value){
			const{reduce:{page},actions}=this.props
			actions.constructionAction(value)

		}
    renderTableList(){
        let that=this;
        let {reduce} = this.props
        let {spins:{tableSpin},key,page,list} = reduce
        let tableConf = {
            loading: tableSpin,
            onChange:this.onChange.bind(this),
            rowKey: 'jobId',
            columns:[
                {
                    title: "组织结构",
                    key: "jobTitle",
                    width: 120,
                    dataIndex: "jobTitle",
                }, {
                    title: "部门负责人",
                    key: "hiringNumber",
                    width: 120,
                    dataIndex: "hiringNumber",
                }, {
                    title: "在职人数",
                    key: "yrzNum",
                    dataIndex: "yrzNum",
                    width: 120,
                }, {
                    title: "分管领导",
                    key: "drzNum",
                    dataIndex: "drzNum",
                    width: 120,
                }, {
                    title: "操作",
                    key: "offerNum",
                    dataIndex: "offerNum",
                    width: 120,
                    render: (val, row) => {
                        let {channel} = row
                        return <span style={{cursor:'pointer'}}>
                            <Link to={ {pathname:'/organization/jobs/edit',
                                        state:{id:row.id}}
                            }><Icon type="edit"/></Link>&#x3000;
                            <Link to={
                                {pathname:'/organization/jobs/delete',
                                state:{id:row.id}}
                                }><Icon type="delete"/></Link>
                        </span>
                    }
                }
            ]
        }
        return (<DataTable key={Math.random().toString()} {...tableConf} dataSource={list} page={page} />)
    }

  render() {
    return (
        <Card title={
            <div>
                 <h3 className="card-title">组织结构</h3>
            </div>
            }           
             extra={<Button type="primary" onClick={this.exportExcel.bind(this)}>添加</Button>}>
            {this.renderTableList()}
        </Card>
    )
  }
}
