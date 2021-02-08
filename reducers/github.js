import {
  SEARCH_USERS_SUCCESS,
  GET_USER_REPO_SUCCESS,
} from "../actions/github";
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
  user: {},
  repos: [],
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

    case GET_USER_REPO_SUCCESS:
      return {
        ...state,
        repos: action.data
      };

    default:
      return state;
  }
}