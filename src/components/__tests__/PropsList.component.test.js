'use strict';

import React from 'react';
import PropsList from '../PropsList.component.js'
import renderer from 'react-test-renderer';
import {shallow,mount} from 'enzyme';

it('PropList component', () => {
  const tree = renderer
    .create(<PropsList labelPosition={"left"} labelWidth="120" labelSuffix={":"} inline={false}/>)
    .toJSON();
  expect(tree.type).toBe('ul')
  expect(tree).toMatchSnapshot();
});
it('render with PropListItem', () => {
    const tree = mount(<PropsList.Item label="姓名">一个人玩</PropsList.Item>)
    console.log(tree.name())
  //  expect(tree.type()).toBe("li")
    expect(tree.name()).toBe("PropsListItem")
    expect(tree.props().label).toBe("姓名")
    //expect(tree.type).toBe('li')
})
 
it('render with children', () => {
  const tree = renderer.create(<PropsList labelPosition={"left"} labelWidth="120" labelSuffix={":"} inline={false}>
    <PropsList.Item label="姓名">
     一个人玩
    </PropsList.Item>
    <PropsList.Item label="性别">
     男
    </PropsList.Item>
  </PropsList>).toJSON();


  expect(tree.children.length).toBe(2)

  expect(tree).toMatchSnapshot();
});

it('render with children shallow',()=>{

  const propList = mount(
    <PropsList labelPosition={"left"} labelWidth="120" labelSuffix={":"} inline={false}>
      <PropsList.Item label="姓名">
       一个人玩
      </PropsList.Item>
      <PropsList.Item label="性别">
       男
      </PropsList.Item>
    </PropsList>
  );
  expect(propList.text()).toEqual('姓名:一个人玩性别:男');
})
it('render with dynamic items', () => {
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
  const tree = renderer
    .create(
    <PropsList items={items} labelPosition={"left"} labelWidth="120" labelSuffix={":"} inline={false}>
    </PropsList>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
