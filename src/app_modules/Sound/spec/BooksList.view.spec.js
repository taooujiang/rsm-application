// file: test/component/todo-item.js
import React from 'react'
import ReactDOM,{findDOMNode} from 'react-dom'
import {expect} from 'chai'
import TestUtils,{isCompositeComponent} from 'react-addons-test-utils'
import jsdom from 'mocha-jsdom'

import FixedDataTable,{Table, Column, Cell} from 'fixed-data-table'
import ReactBootstrap,{Panel,ButtonGroup,Button,Navbar,Input} from 'react-bootstrap'
import BooksListView from '../BooksList.view'

jsdom({
  skipWindowCheck:true
})

describe('BooksListView component render', function(){
  it('render', () => {
    var props={
      actions:{
        listAction:function(){}
      },
      reduce:{
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
        },{
          "id": "2",
          "bookname": "Beginning Oracle Application Express 5, 3rd Edition",
          "by": "Doug Gault",
          "publisher": "Apress",
          "isbn": "978-1-484204-67-2",
          "language": "English",
          "year": "2016",
          "page": "504",
          "format": "PDF"
        }]
      }
    }

    var bookList= TestUtils.renderIntoDocument(
      <BooksListView {...props} />
    );
    var page = TestUtils.findRenderedDOMComponentWithClass(bookList, 'panel-heading');
    var buttonGroup = TestUtils.findRenderedComponentWithType(bookList, ButtonGroup);
    var searchInput = TestUtils.findRenderedComponentWithType(bookList, Input);
    //expect(searchInput.props.name).to.eql("key")
    //expect(isCompositeComponent(buttonGroup)).to.eql(true)
    expect(page.textContent).to.eql("书本管理")
  })
  it('render Searchbar with params key {the}',()=>{
    var props={
      actions:{
        listAction:function(){}
      },
      reduce:{
        params:{
          key:'the'
        }
      }
    }
    var bookList= TestUtils.renderIntoDocument(
      <BooksListView {...props} />
    );
    var searchInput = TestUtils.findRenderedComponentWithType(bookList, Input);
    expect(searchInput.props.name).to.eql("key")
    expect(searchInput.getValue()).to.eql(props.reduce.params.key)
  })
  it('render with data length {2}',()=>{

    var props={
      actions:{
        listAction:function(){}
      },
      reduce:{
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
        },{
          "id": "2",
          "bookname": "Beginning Oracle Application Express 5, 3rd Edition",
          "by": "Doug Gault",
          "publisher": "Apress",
          "isbn": "978-1-484204-67-2",
          "language": "English",
          "year": "2016",
          "page": "504",
          "format": "PDF"
        }]
      }
    }

    var bookList= TestUtils.renderIntoDocument(
      <BooksListView {...props} />
    );
    var table = TestUtils.findRenderedComponentWithType(bookList,Table);
    expect(table.props.rowsCount).to.eql(props.reduce.list.length)
  })
});
