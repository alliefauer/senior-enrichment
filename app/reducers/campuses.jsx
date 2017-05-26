import axios from 'axios';



//initial state
const initialState = {
    all : [],
    selected: ''
}


//action
const GET_CAMPUSES = 'GET_CAMPUSES';


//action-creater
export const getAll = (campuses) => {
    return {
    type: GET_CAMPUSES,
  campuses
    }
}

//dispatcher
export const getAllCampuses = () =>  {
    return dispatch => {
    axios.get('/api/campuses/')
      .then(campuses => campuses.data)
      .then(res => dispatch(getAll(res)))
        // .then(campuses => console.log(campuses))
      
      .catch(err => console.error('unsuccessful'))
    }
}


//reducer
export default function (state = initialState, action)  {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_CAMPUSES :
        newState.all = action.campuses;
        break;
    default: 
    return state
  }
  return newState;
};
