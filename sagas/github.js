import { all, call, put, takeEvery } from 'redux-saga/effects'

import * as githubActions from '../actions/github'
import {
  getUserRepoApi, searchUsersApi,
} from "../requests/github";

export function* searchUsers(action) {
  try {
    const response = yield call(searchUsersApi, action.data);
    yield put({type: githubActions.SEARCH_USERS_SUCCESS, data: response.data});
    // console.log(response.data, 'response.data')

    yield put({type: githubActions.GET_USER_REPO, data: response.data.login})
  } catch (e) {
    console.log(e, 'e')
    yield put({ type: githubActions.SEARCH_USERS_FAILED, error: e.response });
  }
}

export function* getUserRepo(action) {
  try {
    const response = yield call(getUserRepoApi, action.data);
    yield put({type: githubActions.GET_USER_REPO_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: githubActions.GET_USER_REPO_FAILED, error: e.response });
  }
}


export default all([
  takeEvery(githubActions.SEARCH_USERS, searchUsers),
  takeEvery(githubActions.GET_USER_REPO, getUserRepo),
])