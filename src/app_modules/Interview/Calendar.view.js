import React, {Component, PropTypes} from 'react'
import {
  Button,
  Input,
  Table,
  Select,
  Modal,
  List,
  Menu,
  Calendar,
  Dropdown,
  Icon,
  Avatar,
} from 'antd'
import PageView from 'components/Page'
import {Layout,Fixed,Pane} from 'components/Layout'
import Permission from 'components/Permission'
const Option = Select.Option


class TodoView extends Component{
    onLoadMore = () => {
      this.setState({
        loadingMore: true,
      });
      /*
      this.getData((res) => {
        const data = this.state.data.concat(res.results);
        this.setState({
          data,
          loadingMore: false,
        }, () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        });
      });
      */
    }
    render(){
      var loading=false
      var data=[{name:"ab"},{name:"cd"},{name:"ef"}]
      return  (<List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={(<Button onClick={this.onLoadMore}>加载更多</Button>)}
        dataSource={data}
        renderItem={item => (
          <List.Item actions={[<a>edit</a>, <a>more</a>]}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.name}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </List.Item>
        )}
      />)
    }
}


export default class CalendarView extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let {actions,router} = this.props;
    //actions.listAction()
    //actions.menuAction()
  }
  handleSelectChange(value) {
    let {actions,location} = this.props;
    console.log(value)
  }
  handlePanelChange(value,mode){
    // console.log(value,mode)
  }
  render() {
    let {children} = this.props
    return (
      <Layout direction="rows">
        <Fixed style={{width:'300px'}}>
          <Calendar fullscreen={false} onSelect={this.handleSelectChange.bind(this)} onPanelChange={this.handlePanelChange.bind(this)} />
        </Fixed>
        <Pane span="20" >
          <TodoView />
        </Pane>
      </Layout>
    )
  }
}
