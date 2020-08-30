import { USER_TYPES } from "../constants";

const {
  LOAD_LOGIN,
  LOAD_SIGNUP,
  SIGN_IN_USER,
  SIGN_UP_USER,
  IS_LOGGED_IN,
} = USER_TYPES;

export const loadLogin = () => ({ type: LOAD_LOGIN });

export const loadSignUp = () => ({ type: LOAD_SIGNUP });

export const signInUser = (response) => ({ type: SIGN_IN_USER, response });

export const signUpuser = (response) => ({ type: SIGN_UP_USER, response });

export const isLoggedIn = (boolean) => ({ type: IS_LOGGED_IN, boolean });
