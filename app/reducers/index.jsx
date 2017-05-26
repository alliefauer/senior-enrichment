import {combineReducers} from 'redux';
import students from './students.jsx';
import campuses from './campuses.jsx'

// console.log('students: ', students)

export default combineReducers({campuses, students})