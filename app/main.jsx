'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import store from './store'
import Root from './components/Root'
import Users from './components/Users'

render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
        <Route path="users" component={Users} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)