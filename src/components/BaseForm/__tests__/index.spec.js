
import React from 'react';
import {shallow,mount,render} from 'enzyme';
import BaseForm,{FormItem} from '../index'


const setup = () => {
  // 模拟 props
  const props = {
    // Jest 提供的mock 函数
    onAddClick: jest.fn()
  }

  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(
    <BaseForm />
  );
  return {
    props,
    wrapper
  }
}

describe('BaseForm render', () => {
  const { wrapper, props } = setup();
  it('BaseForm instanceOf From', (done) => {
    expect(wrapper.instance()).toBeInstanceOf(BaseForm)
    expect(wrapper.find('form').exists());
    done()
  })

  it('BaseForm has @FormCreate', (done) => {
    expect(wrapper.prop('form'))
    done()
  })


  it.skip('BaseForm has childContex 需要结合子组件验证 ', (done) => {
  //   console.log(wrapper)
  //  console.log(expect().toBe.instanceOf)
    done()
  })
})

describe('FormItem render', () => {
  const { wrapper, props } = setup();
  it.skip('FormItem instanceOf', (done) => {
  //  expect(wrapper.instance()).toBe(BaseForm);
    expect(wrapper.find('form').exists());
    done()
  })
})
