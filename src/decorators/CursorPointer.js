import React ,{Component} from 'react'

export default () => (InnerComponent)=>{
  return class extends Component{
    render(){
      return <div style={{cursor:"pointer",flex:"1"}}>
        <InnerComponent/>
      </div>
    }
  }
}
