import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

const Dashboard = (auth) => {
  return (
    <div className="container-fluid text-center py-5">
      <h1>Dashboard</h1>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);