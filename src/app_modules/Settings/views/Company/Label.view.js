import React, { Component } from 'react'
import { Button, Card, Input, message,Select,Icon,Tag,Spin} from 'antd'
const { TextArea } = Input;
const InputGroup = Input.Group;
 export default class TalentLabel extends Component{
    state = {
      inputVisible: false,
      inputValue: '',
      initialArr:[]
    };
  
    constructor(props) {
      super(props);
      this.state.value=props.value
    }
  
    componentWillReceiveProps(nextProps) {
      const {value,onChange} =this.props
      const {inputValue } = this.state;
      this.setState({
        inputVisible:0 < nextProps.value.length < 8 || JSON.stringify(inputValue) == '' ? false : true
      });
      console.log( nextProps.value.length,JSON.stringify(inputValue) == '',nextProps.value,"==label=componentWillReceiveProps")
      if(JSON.stringify(nextProps.value) != JSON.stringify(this.props.value)){
        this.setState({
          initialArr: nextProps.value,
          inputVisible:0 < nextProps.value.length < 8 || JSON.stringify(inputValue) == '' ? false : true
        });
        console.log( nextProps.value.length,JSON.stringify(inputValue) == '',nextProps.value,"==label=componentWillReceiveProps")
        
      }
    }
    handleClose = (removedTag) => {
  
      let {actions,optionCode,value,onChange} = this.props
      let params = {
        optionId:removedTag,
        optionCode:optionCode
      }
      // actions.companyCardRemoveTagAction(removedTag)
      this.state.initialArr.splice(removedTag,1)
      // value.push(inputValue)
      onChange(this.state.initialArr) 
      console.log(this.state.initialArr,value,"=handleClose===inputValue")
    }
  
    showInput = () => {
      this.setState({ inputVisible: true }, () => this.input.focus());
    }
  
    handleInputChange = (e) => {
      this.setState({ inputValue: e.target.value });
    }
    trim(str) {
      return str.replace(/(^\s+)|(\s+$)/g, "");
    }
    handleInputConfirm = () => {
      const inputValue = this.state.inputValue;
      let {optionCode,actions,onChange,value} = this.props
      if(inputValue && this.trim(inputValue)!=="" && inputValue.indexOf("$")!=-1){
        message.error("标签不能含有特殊字符$")
        return false
      }else if(inputValue.length>6){
        message.error("标签字符不能超过6个！")
        return false
      }else if(!inputValue || (inputValue && this.trim(inputValue) == "")){
        message.error("标签字符不能为空！")
        return false
      }
      if (inputValue && this.trim(inputValue)!=="") {
          let params = {
            optionName:inputValue,
            optionCode:optionCode
          }
          this.setState({
            inputValue:"",
            inputVisible:false
          })
         
          // actions.companyCardAddTagAction(inputValue)
          this.state.initialArr.push(inputValue)
          onChange(this.state.initialArr) 
          console.log(this.state.initialArr,value,inputValue,"====inputValue")
      }
    }
  
    saveInputRef = input => this.input = input
  
    render() {
      const { inputVisible, inputValue } = this.state;
      let {value} = this.props
      let inputSaveBtn = (
        <a onClick={this.handleInputConfirm}>保存</a>
      )

      console.log( inputVisible, inputValue,value,'---tags')
      return (
        <div>
          {value.map((tag, index) => {
            const tagElem = (
              <Tag  color='blue' closable  className='talent-tag' key={tag} closable={true} afterClose={ this.handleClose.bind(this,index)}>
                {tag} 
              </Tag>
            );
            return tagElem
          })}
          {inputVisible && (
            <Input
              ref={this.saveInputRef}
              type="text"
              size="small"
              className='tag-input'
              style={{ width: 150,height:30,lineHeight:30 }}
              value={inputValue}
              onChange={this.handleInputChange}
              onPressEnter={this.handleInputConfirm}
              addonAfter={inputSaveBtn}
              maxLength="6"
            />
          )}
          {/* 限制数量 */}
                  {!inputVisible
                  && value.length < 8 
                   && (
            <Tag
              className='talent-tag'
              onClick={this.showInput}
              style={{ background: '#fff', borderStyle: 'dashed' }}
            >
              <Icon type="plus" />添加标签
            </Tag>
          )}
        </div>
      );
    }
  }