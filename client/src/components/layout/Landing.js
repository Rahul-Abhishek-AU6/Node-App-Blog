import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section>
      <div className="container text-center">
        <h1 className="my-5 py-5"> Welcome to August Test App</h1>
        <h3 className="pb-5">Home Page</h3>
        <div className="m-5">
          <Link to="/register" className="btn btn-primary m-5">Sign Up</Link>
          <Link to="/login" className="btn btn-success m-5">Login</Link>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
