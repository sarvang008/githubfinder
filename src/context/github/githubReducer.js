import { SEARCH_USERS, GET_USER, SET_LOADING, CLEAR_USERS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case SEARCH_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    default:
      return state;
  }
};
