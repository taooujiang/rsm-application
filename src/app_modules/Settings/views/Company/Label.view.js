import React, { Component } from 'react'
import { Button, Card, Input, message,Select,Icon,Tag,Spin} from 'antd'
const { TextArea } = Input;
const InputGroup = Input.Group;
 export default class TalentLabel extends Component{
    state = {
      inputVisible: false,
      inputValue: '',
    };
  
    constructor(props) {
      super(props);
      this.state.tags=props.tags
    }
  
  
    handleClose = (removedTag) => {
  
      let {actions,optionCode} = this.props
      let params = {
        optionId:removedTag,
        optionCode:optionCode
      }
      actions.companyCardRemoveTagAction(removedTag)
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
      let {optionCode,actions} = this.props
      if(inputValue && this.trim(inputValue)!=="" && inputValue.indexOf("$")!=-1){
        message.error("标签不能含有特殊字符$")
        return false
      }else if(inputValue.length>6){
        message.error("标签字符不能超过6个！")
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
          actions.companyCardAddTagAction(inputValue)
      }
    }
  
    saveInputRef = input => this.input = input
  
    render() {
      const { inputVisible, inputValue } = this.state;
      let {tags} = this.props
      let inputSaveBtn = (
        <a onClick={this.handleInputConfirm}>保存</a>
      )
      return (
        <div>
          {tags.map((tag, index) => {
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
                  && tags.length < 8 
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