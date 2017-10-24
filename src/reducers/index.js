import { combineReducers } from "redux";

import posts from "./posts";
import post from "./post";
import comments from './comments'

const rootReducer = combineReducers({
  posts,
  post,
  comments
});

export default rootReducer;
