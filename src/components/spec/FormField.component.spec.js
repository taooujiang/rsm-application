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
