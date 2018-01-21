
import React from 'react'
import ReactDOM,{findDOMNode} from 'react-dom'
import assert from 'assert'
import TestUtils from 'react-addons-test-utils'
import jsdom from 'mocha-jsdom'
import PropsList from '../PropsList.component.js'

jsdom()

describe('PropList component', function(){
  it('render', () => {
    var propsList= TestUtils.renderIntoDocument(
      <PropsList labelPosition={"left"} labelWidth="120" labelSuffix={":"} inline={false}>
        <PropsList.Item label="姓名">
         一个人玩
        </PropsList.Item>
      </PropsList>
    );
    var span =TestUtils.findRenderedDOMComponentWithClass(propsList,"props-list")
    assert.equal(findDOMNode(span).textContent, '姓名:一个人玩');
  })

  it('render with children',()=>{
    var propsList= TestUtils.renderIntoDocument(
      <PropsList labelPosition={"left"} labelWidth="120" labelSuffix={";"} inline={false}>
        <PropsList.Item label="姓名">
         一个人玩
        </PropsList.Item>
        <PropsList.Item label="性别">
         男
        </PropsList.Item>
      </PropsList>
    );
    var span =TestUtils.scryRenderedDOMComponentsWithClass(propsList,"props-item")
    assert.equal(span.length,2);
  })

  it('render with dynamic items',()=>{
    var items=[{
      label:"姓名",
      value:"一个人玩"
    },{
      label:"性别",
      value:"男"
    },{
      label:"age",
      value:"19"
    }]
    var propsList= TestUtils.renderIntoDocument(
      <PropsList items={items} labelPosition={"left"} labelWidth="120" labelSuffix={";"} inline={false}>
      </PropsList>
    );
    var span =TestUtils.scryRenderedDOMComponentsWithClass(propsList,"props-item")
    assert.equal(span.length,3);
  })
});
