
import React from 'react'
import ReactDOM,{findDOMNode} from 'react-dom'
import assert from 'assert'
import TestUtils from 'react-addons-test-utils'
import ShallowRenderer from 'react-test-renderer/shallow'; 
import jsdom from 'mocha-jsdom'
import ShortCutList from '../ShortCutList.view'

jsdom()

console.log("ShortCutList")

describe('ShortCutList component', function(){
  it('render', () => {
    var item=[{
      icon:'edit',
      href:'#/edit',
      text:'编辑'
    },{
      icon:'loading',
      href:'#/loading',
      text:'加载'
    },{
      icon:'message',
      href:'#/message',
      text:'消息'
    },{
      icon:'upload',
      href:'#/upload',
      text:'上传'
    },{
      icon:'more',
      href:'#/more',
      text:'更多'
    }]
    var shortCut= TestUtils.renderIntoDocument(
        <ShortCutList item={item}/>
    );
  //  var span =TestUtils.findRenderedDOMComponentWithClass(shortCut,"cmp-shortcut")
  //  console.log(span)
    //assert.equal(findDOMNode(span), );
  })

});
