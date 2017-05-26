'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, browserHistory, IndexRedirect } from 'react-router';

import store from './store'
import Root from './components/Root'
import Students from './components/Students'
import SingleCampus from './components/singleCampus'
import {getAllCampuses} from './reducers/campuses.jsx';
import {getAllStudents, getSomeStudents} from './reducers/students.jsx';



 
  const onRootEnter = (nextRouterState) => {
    store.dispatch(getAllCampuses())

  }

 const onStudentsEnter = (nextRouterState) => {
    store.dispatch(getAllStudents())
  }

  const onSomeStudentsEnter = (nextRouterState) => {
    store.dispatch(getSomeStudents())
  }


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root} onEnter={onRootEnter}/>
      {/*<Route path="/campuses" component={Root}/>*/}
      <Route path="/students/:campusId" component={SingleCampus} onEnter={onSomeStudentsEnter}/>
      <Route path="/students" component={Students}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)