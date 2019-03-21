import React, {Component} from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'

import {SoundListContainer, MessageListContainer,SoundFormContainer} from './container'

let Routes = (
  <Router>
    <IndexRoute component={SoundListContainer}/>
    <Route path="soundList" components={SoundListContainer}/>
    <Route path="messageList" components={MessageListContainer}/>>
  </Router>
)

export default Routes
