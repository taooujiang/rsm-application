
import React, {Component, PropTypes} from 'react'
//import {reduxForm,Field} from 'redux-form'
import {Menu, Button, Input, Icon ,Table, Form, DatePicker,Card,Switch,Row,Col,Select,Checkbox,Radio  } from 'antd'
import {Layout,Fixed,Pane} from 'components/Layout'
import PageView,{FormPage} from 'components/Page'
import CalendarPicker from 'components/CalendarPicker'
import DataTable from 'components/DataTable'
import moment from 'moment'
import ErrorBoundary from 'components/ErrorBoundary'
import { Link } from 'react-router'
import style from './styles.less'

export default class JobCategory extends PageView {
        componentWillMount() {
            let {actions} = this.props;
            actions.JobCategoryAction()
		}

		handleFilter(value){
			const{reduce:{page},actions}=this.props
			actions.JobCategoryAction(value)
		}
    renderTableList(){
        let that=this;
        let {reduce} = this.props
        let {spins:{tableSpin},key,page,treeList} = reduce
        console.log(this.props,'props')
        // let dataSource=JSON.stringify(treeList).replace('title', 'A');
        let tableConf = {
            loading: tableSpin,
            defaultExpandAllRows:true,
            onChange:this.onChange.bind(this),
            rowKey: 'jobId',
            dataSource:treeList,
            pagination:false,
            columns:[
            {
                title: "岗位类型",
                key: "text",
                width: 120,
                dataIndex: "text",
            }, {
                title: "岗位数",
                key: "memberCount",
                width: 120,
                dataIndex: "memberCount",
            }, {
                title: "在职人数",
                key: "postCount",
                dataIndex: "postCount",
                width: 120,
            }, {
                title: "描述",
                key: "description",
                dataIndex: "description",
                width: 120,
            },{
                title: "操作",
                key: "action",
                dataIndex: "action",
                width: 120,
                render: (val, row) => {
                    let {id} = row
                    return <span style={{cursor:'pointer'}}>
                        <Link to={ {pathname:'organization/jobCategory/edit',
                                    state:{id:id}}
                        }><Icon type="edit"/></Link>&#x3000;
                        <Link to={
                            {pathname:'organization/jobCategory/delete',
                            state:{id:id}}
                            }><Icon type="delete"/></Link>
                    </span>
                }
            }
        ]
        }
        return (<DataTable key={Math.random().toString()} {...tableConf}  />)
    }
    renderSearchBar	() {
		let {
			reduce: {
				count,
				checks
			},
			params
		} = this.props
		return (
			<Button type="primary">
			  <Link to={{pathname:'/organization/jobCategory/add',
                            state:{id:''}}}>添加</Link>
			</Button>
		)
	}
  render() {
    return (
        <Card title={
            <div>
                 <h3 className="card-title">岗位类别</h3>
            </div>
            }           
            extra={this.renderSearchBar()}
         >
            {this.renderTableList()}
        </Card>
    )
  }
}
