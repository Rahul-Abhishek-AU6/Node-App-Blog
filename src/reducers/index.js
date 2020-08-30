import { combineReducers } from "redux";

import postReducers from "./postReducers";
import { reducer as reduxFormReducer } from "redux-form";
import userReducer from "./userReducer";

export default combineReducers({
  postsList: postReducers,
  form: reduxFormReducer,
  userAuth: userReducer,
});
