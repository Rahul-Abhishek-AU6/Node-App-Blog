import { POST_TYPES } from "../constants";

const {
  GET_ALL_POSTS,
  LOAD_POSTS,
  DELETE_POST,
  LIKE_POST,
  COMMENT_POST,
  ADD_POST,
} = POST_TYPES;

export const loadPosts = () => ({ type: LOAD_POSTS });

export const getAllPosts = (response) => ({ type: GET_ALL_POSTS, response });

export const deletePost = (id) => ({ type: DELETE_POST, id });

export const likethePost = (id) => ({ type: LIKE_POST, id });

export const commentthePost = (id) => ({ type: COMMENT_POST, id });

export const addPost = (data) => ({ type: ADD_POST, data });
