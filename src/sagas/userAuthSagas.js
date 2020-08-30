import { takeLatest, select, call, put } from "redux-saga/effects";

import { USER_TYPES } from "../constants";
import { loginUser, signUpUser as signupendpoint } from "../api";
import { signInUser, isLoggedIn, signUpuser } from "../actions";
import history from "../history";

const { LOAD_LOGIN, LOAD_SIGNUP } = USER_TYPES;

const getLoginValuesFromStore = ({ form }) => form;

function* handleLogin() {
  const { userAuth } = yield select(getLoginValuesFromStore);
  const { values } = userAuth;
  const userSignInData = {
    email: values.signinemail,
    password: values.signinpassword,
  };

  try {
    const { data } = yield call(loginUser, userSignInData);
    yield put(signInUser(data.details._id));
    yield put(isLoggedIn(true));
    yield history.push("/");
  } catch (error) {
    yield put(isLoggedIn(false));
    alert(error);
  }
}

export function* loadLoginWatcher() {
  yield takeLatest(LOAD_LOGIN, handleLogin);
}

function* handleSignUp() {
  const { userAuth } = yield select(getLoginValuesFromStore);
  const { values } = userAuth;
  const userSignInData = {
    username: values.signupname,
    email: values.signupemail,
    password: values.signuppassword,
    confirmPassword: values.signupconfirmpassword,
  };

  try {
    const { data } = yield call(signupendpoint, userSignInData);
    yield put(signUpuser(data.details._id));
    yield put(isLoggedIn(true));
    yield history.push("/");
  } catch (error) {
    yield put(isLoggedIn(false));
    alert(error.response.data.message);
  }
}

export function* loadSignUpWatcher() {
  yield takeLatest(LOAD_SIGNUP, handleSignUp);
}
