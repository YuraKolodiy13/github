import {
  SEARCH_USERS_SUCCESS,
  GET_USER_REPOS_SUCCESS, GET_USER_REP_SUCCESS, GET_EVENTS_SUCCESS,
} from "../actions/github";
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
  user: {},
  repos: [],
  rep: null,
  events: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case HYDRATE:
      return {
        ...state,
        ...action.payload.github
      };

    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        user: action.data
      };

    case GET_USER_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.data
      };

    case GET_USER_REP_SUCCESS:
      return {
        ...state,
        rep: action.data
      };

    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.data
      };

    default:
      return state;
  }
}