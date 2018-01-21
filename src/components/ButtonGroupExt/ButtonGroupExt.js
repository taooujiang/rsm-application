import React,{Component,} from 'react'
import {Menu,Icon,Dropdown,Button,Tooltip} from 'antd'


export default class ButtonGroupExt extends Component{
  static defaultProps={
    showSize:3
  }
  renderButtomMenu(){
    var {children,onClick} = this.props;
    var primaryChildren=children.filter((it,idx)=>idx==0)
    const menu = (
      <Menu onClick={onClick}>
        {
          children.map((ch,idx)=>{
            let {icon,children,actionkey} = ch.props
            return (
              <Menu.Item key={actionkey} >
                <Icon type={icon} />{children}
              </Menu.Item>
            )
            // return React.createElement(Menu.Item,{key:actionkey},React.cloneElement(ch,{size:'small'}))
          })
        }
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <Icon type="bars" />
      </Dropdown>
    )
  }
  renderButtomGroup(){
    var {children,onClick} = this.props;
     return children.map((ch,idx)=>{
        let {icon,children,actionkey} = ch.props
        return React.createElement(Tooltip,{title:children,key:idx},React.cloneElement(ch,{size:'small',onClick:onClick.bind(this,actionkey)},""))
     })
  }
  renderChildren(){
    var {children,showSize} = this.props
    if(children.length>showSize){
      return this.renderButtomMenu()
    }else{
      return (
        <Button.Group size="small">
          {this.renderButtomGroup()}
        </Button.Group>
      )
    }
  }
  render(){
    var {children} = this.props;
    return (
      <div className="ant-botton-bar">
        {this.renderChildren()}
      </div>
    )
  }
}
