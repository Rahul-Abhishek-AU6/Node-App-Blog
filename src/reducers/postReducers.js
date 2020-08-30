import { POST_TYPES } from "../constants";

const {
  GET_ALL_POSTS,
  DELETE_POST,
  LIKE_POST,
  COMMENT_POST,
  ADD_POST,
} = POST_TYPES;

export default (state = { posts: [] }, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, posts: action.response };
    case DELETE_POST:
      state["deletePostId"] = action.id;
      return { ...state };
    case LIKE_POST:
      state["postId"] = action.id;
      return { ...state };
    case COMMENT_POST:
      state["postId"] = action.id;
      return { ...state };
    case ADD_POST:
      state["createPostdata"] = action.data;
      return { ...state };
    default:
      return state;
  }
};
