import { all, fork } from "redux-saga/effects";

import {
  getPostOnLoadWatcher,
  deletePost,
  likePost,
  commentOnPost,
  addNewPostWatcher,
} from "./postsSagas";
import { loadLoginWatcher, loadSignUpWatcher } from "./userAuthSagas";

function* rootSaga() {
  yield all([
    yield fork(getPostOnLoadWatcher),
    yield fork(loadLoginWatcher),
    yield fork(deletePost),
    yield fork(likePost),
    yield fork(commentOnPost),
    yield fork(loadSignUpWatcher),
    yield fork(addNewPostWatcher),
  ]);
}

export default rootSaga;
