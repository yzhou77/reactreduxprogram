import { combineReducers } from "redux";
import postReducer from "./trackReducer";
import userReducer from "./userReducer";

export default combineReducers({ posts: postReducer, users: userReducer });
