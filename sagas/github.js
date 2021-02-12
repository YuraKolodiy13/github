import { all, call, put, takeEvery } from 'redux-saga/effects'

import * as githubActions from '../actions/github'
import {
  getUserReposApi, searchUsersApi, getUserRepApi, getEventsApi, getUsersApi, getGistsApi,
} from "../requests/github";

export function* searchUsers(action) {
  try {
    const response = yield call(searchUsersApi, action.data);
    yield put({type: githubActions.SEARCH_USERS_SUCCESS, data: response.data});
    // yield put({type: githubActions.GET_USER_REPO, data: response.data.login})
  } catch (e) {
    console.log(e, 'e');
    yield put({ type: githubActions.SEARCH_USERS_FAILED, error: e.response });
  }
}

export function* getUserRepos(action) {
  try {
    const response = yield call(getUserReposApi, action.data);
    yield put({type: githubActions.GET_USER_REPOS_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: githubActions.GET_USER_REPOS_FAILED, error: e.response });
  }
}

export function* getUserRep(action) {
  try {
    const response = yield call(getUserRepApi, action.data);
    yield put({type: githubActions.GET_USER_REP_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: githubActions.GET_USER_REP_FAILED, error: e.response });
  }
}

export function* getEvents(action) {
  try {
    const response = yield call(getEventsApi, action.data);
    yield put({type: githubActions.GET_EVENTS_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: githubActions.GET_EVENTS_FAILED, error: e.response });
  }
}

export function* getUsers(action) {
  try {
    const response = yield call(getUsersApi, action.data);
    yield put({type: githubActions.GET_USERS_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: githubActions.GET_USERS_FAILED, error: e.response });
  }
}

export function* getGists(action) {
  try {
    const response = yield call(getGistsApi, action.data);
    yield put({type: githubActions.GET_GISTS_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: githubActions.GET_GISTS_FAILED, error: e.response });
  }
}


export default all([
  takeEvery(githubActions.SEARCH_USERS, searchUsers),
  takeEvery(githubActions.GET_USER_REPOS, getUserRepos),
  takeEvery(githubActions.GET_USER_REP, getUserRep),
  takeEvery(githubActions.GET_EVENTS, getEvents),
  takeEvery(githubActions.GET_USERS, getUsers),
  takeEvery(githubActions.GET_GISTS, getGists),
])