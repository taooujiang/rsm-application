import React from 'react'
import PropTypes from 'prop-types'
import {
  Menu,
  Row,
  Col,
  Input,
  Modal,
  Button,
  Dropdown,
  Icon,
  Select,
} from 'antd'

import {FormItem,AdvancedForm} from 'app-components/BaseForm'

import styles from './AdvancedSearch.less'

const Option = Select.Option

export default class AdvancedSearchForm extends React.Component {
  state = {
    expand: false,
    defKeyType:null,
    placeHolder:""
  };

  constructor(props) {
    super(props);
    let {label}=props.keysOption.pop()
    // this.state({
    //   placeHolder:`请输入${label}`
    // })
  }

  handleSearch = (values) => {
     let {filterSubmitHandler} = this.props
     //console.log(this)
     console.log('Received values of form: ', values);
     filterSubmitHandler.apply(this,values);
  }

  handleReset = () => {
    console.log(this.props)
    //this.props.form.resetFields();
  }

  toggleExpand = () => {
    const {expand} = this.state;
    this.setState({
      expand: !expand
    });
  }

  // To generate mock Form.Item
  getFields() {
    const {children, form} = this.props
    let renderChildren;

    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    };
    const formFullItemLayout = {
      labelCol: {
        span: 2
      },
      wrapperCol: {
        span: 21
      }
    };

    if(React.Children.count(children)===0){
      return (null)
    }
    if(this.state.expand==false ){
      renderChildren = children.filter((ch,idx)=>idx<4)
    }else{
      renderChildren = children
    }
    return renderChildren.map((it, i) => {
      if(it.type.name=='TagSelect'){
        return (
          <Col span={24} key={i}>
            <FormItem {...formFullItemLayout} label={it.props.label} name={it.props.name}>
              {it}
            </FormItem>
          </Col>
        )
      }else{
        return (
          <Col span={6} key={i}>
            <FormItem {...formItemLayout} label={it.props.label} name={it.props.name}>
              {it}
            </FormItem>
          </Col>
        )
      }
    })
    return children;
  }

  onTypeChange(value,option){
    this.setState({
      placeHolder:option.props.placeHolder
    })
  }
  handleAdvancedMenu(obj) {
    if (obj.key == 'advanced') {
      alert("call advanced")
    } else if (obj.key == 'clear') {
      this.handleReset()
    } else if (obj.key == 'preview') {
      alert("call restore")
    }
  }

  renderAdvancedConfigModal(){
      return (
        <Modal
         title="高级配置"
         visible={true}
       >
         <p>这里就是配置页</p>
         <p>Some contents...</p>
         <p>Some contents...</p>
       </Modal>
      )
  }

  renderKeyCatalog() {
    let {keysOption} = this.props
    // let {label,value}=props.keysOption.pop()
    return(
        <Select defaultValue="jobName" onSelect={this.onTypeChange.bind(this)} style={{ width: '20%' }}>
          {
            keysOption.map((it) => {
              return (
                <Option value={it.value} key={it.value} placeholder={"请输入"+it.label}>{it.label}</Option>
              )
            })
          }
        </Select>
    )
  }

  renderKeyword(){
    let {placeHolder,children} = this.state
    return (
      <Row gutter={20}>
        <Col span={1} ></Col>
        <Col span={12} key="fixhead">
            <Input.Group compact>
              {this.renderKeyCatalog()}
              <Input placeholder={placeHolder} style={{ width: '70%' }}/>
              <Button htmlType="submit" icon="search" />
            </Input.Group>
        </Col>
      </Row>
    )
  }

  render() {
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      }
    };
    let {placeHolder,children} = this.state
    return (
      <div className="advanced-search-panel">
        <AdvancedForm className="advanced-search-form" onSubmit={this.handleSearch}>
          { this.renderKeyword() }
          <Row gutter={20}>{  this.getFields()}</Row>
        </AdvancedForm>
        <div className="advanced-search-toolbar">
          <Button.Group>
            <Button shape="circle" icon={this.state.expand==false?'down':'up'} onClick={this.toggleExpand.bind(this)}/>
            <Button shape="circle" icon="setting" onClick={this.renderAdvancedConfigModal.bind(this)}/>
          </Button.Group>
        </div>
      </div>
    );
  }
}

AdvancedSearchForm.propTypes = {
  keysOption: PropTypes.array,
  filterSubmitHandler: PropTypes.func,
  footer:PropTypes.element
}

AdvancedSearchForm.defaultProps = {
  keysOption: [],
  filterSubmitHandler: function() {},
}

//export default AdvancedSearchForm = Form.create()(AdvancedSearchForm)
