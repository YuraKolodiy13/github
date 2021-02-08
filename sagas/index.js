import { all } from 'redux-saga/effects';
import github from "./github";

export default function* rootSaga() {
  yield all([
    github,
  ])
}