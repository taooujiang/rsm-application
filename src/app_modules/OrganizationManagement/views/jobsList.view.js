import React, {Component, PropTypes} from 'react'
import {
	Button,
	Input,
	Table,
	Select,
	DatePicker,
	Modal,
	Menu,
	Checkbox,
	Radio,
	message,
	Tag,
	Card,
	Popover,
    Dropdown,
    Tree,
	Icon
} from 'antd'
import {Link} from 'react-router'
import moment from 'moment'
import PageView from 'app/components/Page'
import AdvancedSearchForm from 'app/components/AdvancedSearch'
import {Layout, Fixed, Pane} from 'app/components/Layout'
import DataTable from 'app/components/DataTable'
import BaseForm, {FormItem, customRules} from 'app/components/BaseForm'
import ButtonGroups from 'app/components/ButtonGroups'
import ButtonGroupExt from 'app/components/ButtonGroupExt'
import LinkagePullDown from 'app/components/LinkagePullDown'
import CalendarPicker from 'app/components/CalendarPicker'
import TagSelect from 'app/components/TagSelect'
import InterviewType from 'app/components/TableRow/Interview'
import Permission from 'app/components/Permission'
import PersonInfoShow from 'app/components/TableRow/Resume'
import DictUtils from 'app/utils/DictUtils'
import NestedComponent from 'app/decorators/NestedComponent'
import AdvancedSearchPanel from 'app/components/AdvancedSearchPanel'
import ListField,{JobListField} from 'app/components/ListField'
import TreeView,{TreeSelectPicker} from 'app/components/TreeView'

const {TreeNode} = Tree
// import ResumeFolderListView from './ResumeFolderList.view'
import API from '../api'
import styles from './styles.less'

const Option = Select.Option
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
export class jobsListSide extends Component{
    state={
      val:"1",
      nav:[{keyValue:"1",keyName:"招聘中职位",authType:[1,3]},{keyValue:"2",keyName:"我负责的职位",authType:[1,2,3]},{keyValue:"3",keyName:"已关闭的职位",authType:[1,2,3]}]
    }
    componentDidMount(){
      let {nav} = this.state
      let json = this.authTypeFilter(nav).reverse().pop()?this.authTypeFilter(nav).reverse().pop():{}
      this.setState({
        val:json.keyValue
      })
    }
    setResetForm(resetFuc) {
      this.resetForm = resetFuc;
    }
    handleFilter(values){
      let {actions} = this.props
      values.isSearchFollowRemind = values.isSearchFollowRemind ? 1 : 0
      //console.log(values,'ssssssssssssss')
      actions.jobsListAction(values);
    }
    navgation(val){
      let {router}= this.props
      router.push(val)
    }

    handleChangeSelect(value){
      let {actions} = this.props
      actions.listAction({jobType:value,shouldFieldsClear:true})
      this.setState({
        val:value
      })
      this.jobListField.setState({
        value:""
      })
      this.resetForm()
    }
    authTypeFilter(array){
      let {appReducer} = this.props
      return array.filter((it)=>it.authType.some(authType=>authType==appReducer.user.authType))
    }
    jobRef(ref){
      this.jobListField = ref
    }
    renderNameOption(data,idx){
        return (<Select.Option value={data.id} key={idx}>{data.postName}</Select.Option>)
    }
    renderLevelOption(data,idx){
        return (<Select.Option value={data.id} key={idx}>{data.positionName}</Select.Option>)
		}
    render(){
      let {nav} = this.state
      let {params} = this.props
    //   showConfig={true} module="1"
      return (<AdvancedSearchPanel setResetForm = {this.setResetForm.bind(this)} filterSubmitHandler={this.handleFilter.bind(this)} >
       <Input name="postName" label="岗位名称" placeholder="请输入岗位名称" />
         <Select
          name="reportTo"
          label="直属上级"
          placeholder="请选择"
          fetch={`${APP_SERVER}/postManage/listJson`}
          params={{item:{}}} 
          renderItem={this.renderNameOption}
        />
               <Select
          name="underling"
          label="直属下级"
          placeholder="请选择"
          fetch={`${APP_SERVER}/postManage/listJson`}
          params={{item:{}}} 
          renderItem={this.renderNameOption}
        />
         <Select
          name="postRank"
          label="岗位职级"
          placeholder="请选择"
          fetch={`${APP_SERVER}/sysPositionLevel/findPositionLevelList`}
          renderItem={this.renderLevelOption}
        />
       <TreeSelectPicker
          label="岗位类别"
          name="postCategory"
          fetch={`${APP_SERVER}/postCategory/getTree`}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="请选择"
					showSearch={true}
					treeDefaultExpandAll="treeDefaultExpandAll"
        />
      </AdvancedSearchPanel>)
    }
  
  }
  
@NestedComponent()
export default class jobsList extends PageView {

	constructor(props) {
		super(props);
		this.state = Object.assign({}, this.state, {columnNumber: 0})
	}
	componentWillMount() {
        let {actions, router, children, params} = this.props;
        actions.jobsListAction();
        actions.jobsDetailAction({id:''})
	}
	formRef(form) {
		this.form = form
	}
	handleCheckChange(e) {
		let {actions} = this.props
		actions.listAction({notes: e})
	}
	handleFilter(value) {
		let {actions} = this.props
        actions.jobsListAction();
	}
	renderSearchBar() {
		let {
			reduce: {
				count,
				checks
			},
			params
		} = this.props
		return (
			<Button type="primary">
			  <Link to={{pathname:'/organization/jobs/add',
                            state:{id:''}}}>添加</Link>
			</Button>
		)
	}
	renderTableList() {
		let that = this;
		let {reduce, actions, items} = this.props
		let {spins: {
				tableSpin
			}, key,list} = reduce
		let page = reduce.page
		let ids = items.map((it, idx) => it.id)
		let {columnNumber} = this.state
		let pathname = this.props.location.pathname
		/* 筛选和邀约 */
		let columns = [
			{
				title: "岗位名称",
				key: "postName",
				dataIndex: "postName",
				width: 200,
				// render: (name, row) =>{
				// 	console.log(row,"==row")
				// 	return <PersonInfoShow item={row} pathname={pathname}/>
				// } 
			}, {
				title: "岗位职级",
				key: "categoryName",
				width: 150,
				dataIndex: "categoryName"
			}, {
				title: "在职人数",
				key: "workerNum",
				width: 150,
				dataIndex: "workerNum"
			}, {
				title: "离职人数",
				key: "quitNum",
				dataIndex: "quitNum",
				width: 150
			}, {
				title: "直属上级",
				key: "upperName",
				dataIndex: "upperName",
				width: 120,
			}, {
				title: "直属下级",
				key: "lowerName",
				dataIndex: "lowerName",
				width: 120
			}, {
				title: "操作",
				key: "originalWay",
				dataIndex: "originalWay",
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
        // actions.jobsDetailAction({id:this.props.location.state.id})
		
		const rowSelection = {
			onChange: this.onSelectChange.bind(this),
			selectedRowKeys: this.state.selectedRowKeys
		};
		console.log(items,this.props,"===items")
		let tableConf = {
			loading: tableSpin,
			rowKey: "id",
			dataSource: list,
			// rowSelection: rowSelection,
			columns: columns,
			onChange: this.onChange.bind(this)
		}

		return (<DataTable {...tableConf} page={page}/>)
	}

	render() {
		let {children} = this.props
		//模版没有好的解决方案，暂时这样处理
		//console.log(children)

		// if(children && children.type && children.type.WrappedComponent==ResumeFolderListView){
		//     return React.cloneElement(children)
		// }else{
		return (<Card className="resumeCard" type="inner"   extra={this.renderSearchBar()}   title={
												<div>
												<h3 className="card-title">岗位管理</h3>
												</div>
				}>
			{this.renderTableList()}
		</Card>)
		// }
	}
}
