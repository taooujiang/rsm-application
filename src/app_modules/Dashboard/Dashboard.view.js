import React, {Component} from 'react'
import {Row, Col,List,Avatar,Card,Badge,Calendar} from 'antd';
import {Layout,Fixed,Pane} from 'components/Layout'


const { Meta } = Card;

class InterView extends Component{
  render(){
      let data=[{name:"abc"},{title:"abc1"},{title:"abc1"},{title:"abc1"},{title:"abc1"},{title:"abc1"},{title:"abc1"},{title:"abc1"},{title:"abc1"}]
      return (
         <Card title="今日面试">
            <List
              grid={{ gutter: 16, column: 3 }}
              className="demo-loadmore-list"
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                   <Card>
                   <Meta
                       avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                       title="Card title"
                       description="This is the description"
                     />
                   </Card>
                </List.Item>
              )}
            />
        </Card>
      )
    }
}

class NoticesView extends Component{
  renderItemBadge(){
    let {items} = this.props
  //  var items=[{total:120,name:"待办事件"},{total:59,name:"预约面试"}]
    return items.map((it,idx)=>(<Col span={3} key={idx}><Badge count={it.total} overflowCount={99} >
      <Avatar size="large" shape="square" icon="user" />
      <h5>{it.name}</h5>
    </Badge></Col>))
  }
  render(){
    return (
       <Card title="重要提醒">
        <Row gutter={16}>
          {this.renderItemBadge()}
        </Row>
       </Card>
    )
  }
}

class WeekCalendarPicker extends Calendar{

}

class WeekTodoView extends Component{
  renderCalendarPickerList(){
    var data=[{name:{last:"xxxx"}},{name:{last:"jjj"}},{name:{last:"abc"}}]
    return (<List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        loadMore={false}
        dataSource={data}
        renderItem={item => (
          <List.Item actions={[<a>notice</a>,<a>edit</a>, <a>del</a>]}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </List.Item>
        )}
      />)
  }
  render(){
    return (
       <Card title="待办事件">
          <Calendar fullscreen={false} mode="decade" />
          {this.renderCalendarPickerList()}
       </Card>
    )
  }
}



export default class Dashboard extends Component {
  componentWillMount(){
    let {actions} = this.props;
    actions.loadNotices()
  }
  render() {
    let {reduce} = this.props
    return (
      <Layout direction="rows" >
        <Fixed style={{width:'600px'}}>
          <Layout direction="column" >
            <Pane>
              <InterView></InterView>
            </Pane>
            <Fixed style={{height:'170px'}}>
              <NoticesView items={[...reduce.notices.values()]}></NoticesView>
            </Fixed>
          </Layout>
        </Fixed>
        <Pane style={{'overflowX':'hidden'}}>
          <WeekTodoView>
          </WeekTodoView>
        </Pane>
      </Layout>
    )
  }
}
