/**
 * @Date:   2017-05-15T08:29:09+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2017-07-14T09:44:59+08:00
 */



import React from 'react'
import ReactDOM,{findDOMNode} from 'react-dom'
import assert from 'assert'
import TestUtils from 'react-addons-test-utils'
import jsdom from 'mocha-jsdom'
import HelpBlock from '../HelpBlock.js'

jsdom()

describe('HelpBlock component', function(){
  it('render', () => {
    var helpBlock= TestUtils.renderIntoDocument(
      <HelpBlock helpText="On" />
    );
    var span = TestUtils.findRenderedDOMComponentWithTag(helpBlock, 'span');
    assert.equal(findDOMNode(span).textContent, 'On');
  })

  it('render className',()=>{
    var helpBlock= TestUtils.renderIntoDocument(
      <HelpBlock helpText="On" className="error" />
    );
    var span =TestUtils.findRenderedDOMComponentWithClass(helpBlock,"error")
    assert.equal(span.className,'error')
  })
});
