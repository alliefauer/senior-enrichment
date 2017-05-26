import {connect} from 'react-redux';
import React from 'react';
import Student from '../components/Student.jsx'
import {getAllStudents} from '../reducers/students';




const mapState = function(state) {
    return state
}
const mapDispatch = function(dispatch) {
   return {
       getDeezStudents() {
          dispatch(getAllStudents())
   }
}
}

export default connect(mapState, mapDispatch)(Student);