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

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';
export const getUsers = defaultActionCreator(GET_USERS, 'data');

export const GET_GISTS = 'GET_GISTS';
export const GET_GISTS_SUCCESS = 'GET_GISTS_SUCCESS';
export const GET_GISTS_FAILED = 'GET_GISTS_FAILED';
export const getGists = defaultActionCreator(GET_GISTS, 'data');

export const GET_EMOJIS = 'GET_EMOJIS';
export const GET_EMOJIS_SUCCESS = 'GET_EMOJIS_SUCCESS';
export const GET_EMOJIS_FAILED = 'GET_EMOJIS_FAILED';
export const getEmojis = defaultActionCreator(GET_EMOJIS, 'data');
