import axios from 'axios';


const initialState = {
    all : [],
    selected: ''
}

const GET_CAMPUSES = 'GET_CAMPUSES';

export const getAll = (campuses) => {
    return {
    type: GET_CAMPUSES,
  campuses
    }
}

export const getAllCampuses = () =>  {
    return dispatch => {
    axios.get('/api/campuses/')
      .then(campuses => campuses.data)
      .then(res => dispatch(getAll(res)))
        // .then(campuses => console.log(campuses))
      
      .catch(err => console.error('unsuccessful'))
    }
}

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
