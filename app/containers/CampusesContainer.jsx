import {connect} from 'react-redux';
import React from 'react';
import Campuses from '../components/Campuses.jsx'
import {getAllCampuses} from '../reducers/campuses';




const mapState = function(state) {
    return state
}
const mapDispatch = function(dispatch) {
   return {
       getDeezCampuses() {
          dispatch(getAllCampuses())
   }
}
}

export default connect(mapState, mapDispatch)(Campuses);