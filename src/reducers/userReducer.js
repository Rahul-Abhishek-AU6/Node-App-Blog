import { USER_TYPES } from "../constants";

const {
  LOAD_LOGIN,
  SIGN_IN_USER,
  IS_LOGGED_IN,
  LOAD_SIGNUP,
  SIGN_UP_USER,
} = USER_TYPES;

export default (state = { isLoggedIn: false, signedUser: null }, action) => {
  switch (action.type) {
    case LOAD_LOGIN:
      state["loginload"] = true;
      return { ...state };
    case SIGN_IN_USER:
      state["signedUser"] = action.response;
      return { ...state };
    case IS_LOGGED_IN:
      state["isLoggedIn"] = action.boolean;
      return { ...state };
    case LOAD_SIGNUP:
      state["signupload"] = true;
      return { ...state };
    case SIGN_UP_USER:
      state["signedUser"] = action.response;
      return { ...state };
    default:
      return state;
  }
};
