import React from 'react'
import ReactDOM,{findDOMNode} from 'react-dom'
import {expect} from 'chai'
import TestUtils,{isCompositeComponent} from 'react-addons-test-utils'
import jsdom from 'mocha-jsdom'

import ReactBootstrap,{Panel,ButtonGroup,Button,Navbar,Input} from 'react-bootstrap'
import BooksFormView from '../BooksForm.view'

jsdom({skipWindowCheck:true})

describe('BooksFormView component render', function(){
  it('render', () => {
    var props={
      actions:{
        loadAction:function(){}
      },
      params:{
        id:1
      },
      reduce:{
        params:{
          id:1
        },
        list:[{
          "id": "1",
          "bookname": "Head First jQuery",
          "by": "Ryan Benedetti, Ronan Cranley",
          "publisher": "O'Reilly Media",
          "isbn": "978-1-4493-9321-2",
          "language": "English",
          "year": "2011",
          "page": "544",
          "format": "PDF"
        }]
      }
    }

    var bookForm= TestUtils.renderIntoDocument(
      <BooksFormView {...props} />
    );
    var page = TestUtils.findRenderedDOMComponentWithClass(bookForm, 'panel-heading');
    /*
    var buttonGroup = TestUtils.findRenderedComponentWithType(bookForm, ButtonGroup);
    var searchInput = TestUtils.findRenderedComponentWithType(bookForm, Input);
    expect(searchInput.props.name).to.eql("key")
    expect(isCompositeComponent(buttonGroup)).to.eql(true)
    */
    expect(page.textContent).to.eql("添加书本")
  })
});
