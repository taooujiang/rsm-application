import React, {Component, PropTypes} from 'react'
import {Tree, Button } from 'antd'
const ButtonGroup = Button.Group;
import MemberDeptFormView from './MemberDeptForm.view'

const TreeNode = Tree.TreeNode;

class MemberSideView extends Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let {actions} = this.props;
    //actions.indexAction()
    //  actions.menuAction()
  }
  addDeptRoute() {
    let {actions, history,router} = this.props
    actions.addDeptRoute(router)
  }

  onSelect = (selectedKeys, info) => {
    let {actions} = this.props;
    actions.listAction({groupId: selectedKeys[0]});
  }

  render() {
    let {style,reduce} = this.props;
    const loop = (data) => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode key={item.id} title={item.name}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode key={item.id} title={(<span>
        {item.name}
          <ButtonGroup size={"small"}>
            <Button icon="delete"></Button>
            <Button icon="edit"></Button>
            <Button icon="share-alt"></Button>
          </ButtonGroup>
        </span>
      )}/>;
    });
    return (
      <div style={style}>
        <Button type="primary" icon="plus" size="small" onClick={this.addDeptRoute.bind(this)}>添加部门</Button>
        <Tree  onSelect={this.onSelect} >
          {loop(reduce.menu)}
        </Tree>
      </div>
    )
  }
}

export default MemberSideView
