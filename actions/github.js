import {defaultActionCreator} from "./actionCreator";

export const SEARCH_USERS = 'SEARCH_USERS';
export const SEARCH_USERS_SUCCESS = 'SEARCH_USERS_SUCCESS';
export const SEARCH_USERS_FAILED = 'SEARCH_USERS_FAILED';
export const searchUsers = defaultActionCreator(SEARCH_USERS, 'data');

export const GET_USER_REPOS = 'GET_USER_REPOS';
export const GET_USER_REPOS_SUCCESS = 'GET_USER_REPOS_SUCCESS';
export const GET_USER_REPOS_FAILED = 'GET_USER_REPOS_FAILED';
export const getUserRepos = defaultActionCreator(GET_USER_REPOS, 'data');

export const GET_USER_REP = 'GET_USER_REP';
export const GET_USER_REP_SUCCESS = 'GET_USER_REP_SUCCESS';
export const GET_USER_REP_FAILED = 'GET_USER_REP_FAILED';
export const getUserRep = defaultActionCreator(GET_USER_REP, 'data');

export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILED = 'GET_EVENTS_FAILED';
export const getEvents = defaultActionCreator(GET_EVENTS, 'data');
