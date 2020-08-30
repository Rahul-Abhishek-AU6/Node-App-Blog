import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { addPost } from "../../actions";

const data = [
  {
    htmlFor: "title",
    type: "text",
    fieldName: "Title",
  },
  {
    htmlFor: "description",
    type: "text",
    fieldName: "Description",
  },
];

const CreatePost = ({ handleSubmit, addPost }) => {
  const onSubmitFormValues = (formvalues) => {
    addPost(formvalues);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmitFormValues)}>
        {data.map(({ htmlFor, type, fieldName }) => {
          return (
            <div key={htmlFor} className='user-auth-fields'>
              <label style={{ display: "block" }} htmlFor={htmlFor}>
                {fieldName}
              </label>
              <Field
                className='form-input'
                type={type}
                name={htmlFor}
                component='input'
                required
              />
            </div>
          );
        })}
        <div className='submit-btn'>
          <button type='submit' className='submit-btn__gre'>
            Add New Post
          </button>
        </div>
      </form>
    </Fragment>
  );
};

const reduxFormWrapped = reduxForm({
  form: "createPost",
})(CreatePost);

const mapDispatchToProps = (dispatch) => ({
  addPost: (data) => dispatch(addPost(data)),
});

export default connect(null, mapDispatchToProps)(reduxFormWrapped);
