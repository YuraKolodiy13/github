import {
  SEARCH_USERS_SUCCESS,
  GET_USER_REPOS_SUCCESS,
  GET_USER_REP_SUCCESS,
  GET_EVENTS_SUCCESS,
  GET_USERS_SUCCESS,
  GET_USER_REPOS,
  GET_USER_REP,
  GET_USERS, GET_EVENTS,
} from "../actions/github";
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
  user: null,
  repos: [],
  rep: null,
  events: null,
  users: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case HYDRATE:
      const {loading, ...rest} = action.payload.github;
      return {
        ...state,
        ...rest
      };

    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        user: action.data
      };

    case GET_USER_REPOS:
    case GET_USER_REP:
    case GET_EVENTS:
    case GET_USERS:
      return {
        ...state,
        loading: true
      };

    case GET_USER_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.data,
        loading: false
      };

    case GET_USER_REP_SUCCESS:
      return {
        ...state,
        rep: action.data,
        loading: false
      };

    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.data,
        loading: false
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
        loading: false
      };

    default:
      return state;
  }
}