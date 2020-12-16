import {
  GET_REPOS,
  GET_USER,
  ON_SEARCH,
  CLEAR_ALL,
  SET_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case CLEAR_ALL:
      return {
        ...state,
        users: [],
      };

    case ON_SEARCH:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
