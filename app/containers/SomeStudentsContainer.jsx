import {connect} from 'react-redux';
import React from 'react';
import SomeStudent from '../components/SomeStudent.jsx'
import {getSomeStudents} from '../reducers/students';




const mapState = function(state) {
    return state
}
const mapDispatch = function(dispatch) {
   return {
       getSomeOfDeezStudents() {
          dispatch(getSomeStudents(this.props.params.campusId))
   }
}
}

export default connect(mapState, mapDispatch)(SomeStudent);