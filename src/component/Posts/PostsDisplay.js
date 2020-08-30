import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import {
  deletePost,
  likethePost,
  commentthePost,
  getAllPosts,
} from "../../actions";
import "../styles/posts.scss";

const PostDisplay = ({
  postsList,
  userAuth,
  deletePost,
  likethePost,
  commentthePost,
  getPosts,
}) => {
  const { posts } = postsList;

  const onSubmitFormValues = (ev) => {
    ev.preventDefault();
  };

  return (
    <Fragment>
      <div className='posts-box'>
        {posts.map(
          ({ _id, title, description, createdAt, author, comments, likes }) => {
            return (
              <div key={_id} className='post-container'>
                {userAuth.signedUser !== null &&
                userAuth.signedUser === author._id ? (
                  <button
                    onClick={() => deletePost(_id)}
                    className='post-deleteButton'
                  >
                    Delete
                  </button>
                ) : (
                  ""
                )}
                <h1>Title :{title}</h1>
                <h3>Description : {description}</h3>
                <div className='post-container__userandtime'>
                  <h4>Posted At : {createdAt}</h4>
                  <h4>Posted By : {author.username}</h4>
                </div>
                <div className='comment-and-like-box'>
                  <div className='comment'>
                    {userAuth.signedUser !== null ? (
                      <form onSubmit={(ev) => onSubmitFormValues(ev)}>
                        <Field
                          type='text'
                          name={`comment`}
                          component='input'
                          required
                        />
                        <button
                          type='submit'
                          onClick={() => commentthePost(_id)}
                        >
                          Comment
                        </button>
                      </form>
                    ) : (
                      ""
                    )}
                  </div>
                  {userAuth.signedUser !== null ? (
                    <img
                      onClick={() => likethePost(_id)}
                      src='https://img.icons8.com/color/48/000000/facebook-like.png/'
                      alt='like-btn'
                    />
                  ) : (
                    ""
                  )}
                </div>
                <h5 style={{ textAlign: "left" }}>
                  This post got {likes.length} Likes{" "}
                </h5>
                <div>
                  {comments.map(({ comment, _id }) => {
                    return <h5 key={_id}>{comment}</h5>;
                  })}
                </div>
              </div>
            );
          }
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ postsList, userAuth }) => ({ postsList, userAuth });

const reduxFormWrapped = reduxForm({
  form: "comment",
})(PostDisplay);

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getAllPosts()),
  deletePost: (id) => dispatch(deletePost(id)),
  likethePost: (id) => dispatch(likethePost(id)),
  commentthePost: (id) => dispatch(commentthePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxFormWrapped);
