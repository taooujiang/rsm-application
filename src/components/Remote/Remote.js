import React,{Component} from 'react'
import PropTypes from 'prop-types'



export default class Remote extends Component{

    state={
      data:[],
    }

    fetchData(fetchUrl){
      fetch(fetchUrl)
      .then(response => response.json())
      .then((json) => {
        console.log(json)
          this.setState({
            data:json.list
          });
      });
    }

    componentWillMount(){
      let {uri} = this.props
      this.fetchData(uri)
    }

    render(){
      let {children,renderItem} = this.props
      let {data} = this.state
      let element=children
      return (React.cloneElement(element,{},data.map((d,i)=>renderItem(d,i))));
    }

}
