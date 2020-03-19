import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import singlePostReducer from "./singlePostReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  post: singlePostReducer
});

export default rootReducer;
