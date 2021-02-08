import { combineReducers } from 'redux';
import github from "./github";

const createRootReducer = () => combineReducers({
  github,
});

export default createRootReducer;