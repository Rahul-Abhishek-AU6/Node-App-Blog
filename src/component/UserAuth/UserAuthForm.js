import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { loadLogin, loadSignUp } from "../../actions";

import "../styles/userauth.scss";

const data = {
  loginFields: [
    {
      htmlFor: "signinemail",
      type: "email",
      fieldName: "Email",
    },
    {
      htmlFor: "signinpassword",
      type: "password",
      fieldName: "Password",
    },
  ],

  signUpFields: [
    {
      htmlFor: "signupname",
      type: "text",
      fieldName: "Name",
    },
    {
      htmlFor: "signupemail",
      type: "email",
      fieldName: "Email",
    },
    {
      htmlFor: "signuppassword",
      type: "password",
      fieldName: "Password",
    },
    {
      htmlFor: "signupconfirmpassword",
      type: "password",
      fieldName: "confirm Password",
    },
  ],
};

const UserAuthForm = ({ handleSubmit, loadLogin, loadSignUp }) => {
  const [formSelected, setForm] = useState("login");

  const onSubmitFormValues = () => {
    formSelected === "login" ? loadLogin() : loadSignUp();
  };

  const handleFormSelection = () => {
    if (formSelected === "login")
      return (
        <form onSubmit={handleSubmit(onSubmitFormValues)}>
          {data.loginFields.map(({ htmlFor, type, fieldName }) => {
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
              {formSelected}
            </button>
          </div>
        </form>
      );

    return (
      <form onSubmit={handleSubmit(onSubmitFormValues)}>
        {data.signUpFields.map(({ htmlFor, type, fieldName }) => {
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
            {formSelected}
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className='user-auth-formselection'>
      <div className='selection-btns'>
        <button
          onClick={() => setForm("login")}
          className='selection-btn login'
        >
          Login
        </button>
        <button
          onClick={() => setForm("signup")}
          className='selection-btn signup'
        >
          SignUp
        </button>
      </div>
      {handleFormSelection()}
    </div>
  );
};

const reduxFormWrapped = reduxForm({
  form: "userAuth",
})(UserAuthForm);

const mapDispatchToProps = (dispatch) => ({
  loadLogin: () => dispatch(loadLogin()),
  loadSignUp: () => dispatch(loadSignUp()),
});

export default connect(null, mapDispatchToProps)(reduxFormWrapped);
