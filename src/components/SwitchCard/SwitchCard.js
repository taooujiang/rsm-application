import React,{Component} from 'react'
import {Card,Switch} from 'antd'
export default class SwitchCard extends Component{
  static  defaultProps ={
      value:true
    }
  static  state = {
      checked: true
    }
    constructor(props) {
      super(props);
      this.state = {
        checked:props.value
      };
    }
    switchChange(checked){
    //  console.log(checked)
      this.setState({
        checked:checked
      })
    }
    render(){
      let {children,title} = this.props
      let {checked} = this.state
      return (
        <Card {...this.props}  extra={<Switch checkedChildren="开" unCheckedChildren="关" defaultChecked={checked} onChange={this.switchChange.bind(this)} />}>
            {checked && children}
        </Card>
      )
    }
}
