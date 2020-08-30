import { takeLatest, call, put, select } from "redux-saga/effects";

import { POST_TYPES } from "../constants";
import {
  getAllPosts as getAllPostsEndPoint,
  deletePost as deletePostAPI,
  likePost as likePostAPI,
  commentOnPost as CommentAPI,
  addNewPost as addpostAPI,
} from "../api";
import { getAllPosts } from "../actions";
import history from "../history";

const {
  LOAD_POSTS,
  DELETE_POST,
  LIKE_POST,
  COMMENT_POST,
  ADD_POST,
} = POST_TYPES;

function* handlegetPostsOnLoad() {
  try {
    const { data } = yield call(getAllPostsEndPoint);
    yield put(getAllPosts(data.details));
  } catch (err) {
    // Global error
  }
}

export function* getPostOnLoadWatcher() {
  yield takeLatest(LOAD_POSTS, handlegetPostsOnLoad);
}

const getPostIdfromStore = ({ postsList }) => postsList;

function* handleDelete() {
  const data = yield select(getPostIdfromStore);

  try {
    yield call(deletePostAPI, data.deletePostId);
    alert("Post Deleted");
    yield call(handlegetPostsOnLoad);
  } catch (err) {
    console.log(err);
  }
}

export function* deletePost() {
  yield takeLatest(DELETE_POST, handleDelete);
}

const getUserLogged = ({ userAuth }) => userAuth;

function* handlelikePost() {
  const data = yield select(getPostIdfromStore);
  const { signedUser } = yield select(getUserLogged);
  const likeData = {
    postId: data.postId,
    likedBy: signedUser,
  };

  try {
    yield call(likePostAPI, likeData);
    alert("Liked Successfullt");
    yield call(handlegetPostsOnLoad);
  } catch (err) {
    alert("You Have Already Liked This Post");
  }
}

export function* likePost() {
  yield takeLatest(LIKE_POST, handlelikePost);
}

const getCommentAndUserFromStore = (store) => store;

function* handleComment() {
  const data = yield select(getCommentAndUserFromStore);

  const commedentData = {
    commenter: data.userAuth.signedUser,
    comment: data.form.comment.values.comment,
    postId: data.postsList.postId,
  };

  try {
    yield call(CommentAPI, commedentData);
    alert("commented");
    yield call(handlegetPostsOnLoad);
  } catch (error) {
    alert("not commented");
  }
}

export function* commentOnPost() {
  yield takeLatest(COMMENT_POST, handleComment);
}

const getPostCreateData = (store) => store;

function* handleAddPost() {
  const data = yield select(getPostCreateData);

  const postData = {
    title: data.form.createPost.values.title,
    description: data.form.createPost.values.description,
    author: data.userAuth.signedUser,
  };

  try {
    yield call(addpostAPI, postData);
    alert("post added");
    yield call(handlegetPostsOnLoad);
    history.push("/");
  } catch (error) {
    alert("post add failed");
  }
}

export function* addNewPostWatcher() {
  yield takeLatest(ADD_POST, handleAddPost);
}
