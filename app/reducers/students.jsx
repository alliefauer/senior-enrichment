import axios from 'axios';

const initialState = {
  oneStudent: {},
  allStudents: []
}

//constants
// const ADD_STUDENT = 'ADD_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const GET_SOME_STUDENTS = 'GET_SOME_STUDENTS'

//action creators
// export const addStudent = (student) => {
//     return {
//         type: ADD_STUDENT,
//         student 
//     }
// }

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
  students
}
}

export const getAFewStudents = (students) => {
  return {
    type: GET_SOME_STUDENTS,
  students
}
}

//dispatcher
// export const addNewStudent = (name, email, campus) =>  {
//     return dispatch => {
//               axios.post('/api/students', 
//               {name: name, 
//               email: email,
//               campusId: campus})
//                 .then(res => dispatch(addStudent(...res.data)))
//                 .catch(err => console.error('unsuccessful'))
//  }
// }


export const getAllStudents = ()  =>  {
    
    return dispatch => {
     axios.get('/api/students/')
      .then(students => students.data)
      .then(res => dispatch(getStudents(res)))
      .catch(err => console.error('unsuccessful'))
    }
}


export const getSomeStudents = (campusId)  =>  {
    return dispatch => {
     axios.get(`/api/students/${campusId}/`)
      .then(students => students.data)
      .then(res => dispatch(getAFewStudents(res)))
      .catch(err => console.error('unsuccessful'))
    }
}


//reducer
export default function reducer(state = initialState, action)  {
  const newState = Object.assign({}, state);
  switch(action.type) {
    // case ADD_STUDENT :
    //     newState.oneStudent = action.student;
    //     break;
    case GET_STUDENTS : 
        newState.allStudents = action.students;
        break;
    case GET_SOME_STUDENTS : 
        newState.allStudents = action.students;
        break;
    default: 
    return state
  }
  return newState;
};


