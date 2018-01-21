/**
* @Author: jax <jaxchow>
* @Date:   2016-02-23T20:50:07+08:00
* @Email:  jaxchow@gmail.com
 * @Last modified by:
 * @Last modified time: 2018-01-18T09:17:46+08:00
* @Description: App Layout container
*/

import React from 'react'
import {Tabs} from 'antd'
import DocumentTitle from 'react-document-title';

import Layout,{Fixed,Pane} from 'components/Layout'
import HeaderSide from './header'
import ContentSide from './content'

export default class AppLayout extends React.Component {
  render() {
    return (
      <DocumentTitle title={"app"}>
        <Layout direction="rows" >
          <Fixed {...this.props} style={{display:'flex'}}>
            <HeaderSide/>
          </Fixed>
          <Pane style={{display:'flex'}}>
            <Layout direction="column" >
              <Pane style={{display:'flex'}}>
                <ContentSide>
                  {this.props.children}
                </ContentSide>
              </Pane>
            </Layout>
          </Pane>
        </Layout>
      </DocumentTitle>
    )
  }
}
