import {defaultActionCreator} from "./actionCreator";

export const SEARCH_USERS = 'SEARCH_USERS';
export const SEARCH_USERS_SUCCESS = 'SEARCH_USERS_SUCCESS';
export const SEARCH_USERS_FAILED = 'SEARCH_USERS_FAILED';
export const searchUsers = defaultActionCreator(SEARCH_USERS, 'data');

export const GET_USER_REPO = 'GET_USER_REPO';
export const GET_USER_REPO_SUCCESS = 'GET_USER_REPO_SUCCESS';
export const GET_USER_REPO_FAILED = 'GET_USER_REPO_FAILED';
export const getUserRepo = defaultActionCreator(GET_USER_REPO, 'data');
