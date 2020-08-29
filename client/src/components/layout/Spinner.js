import React, { Fragment } from "react";
import spinner from './spinner.gif';

export default () => {

  return (
    <Fragment>
      <img
        src={spinner}
        style={{
          width: "200px",
          margin: "auto",
          display: "flex",
          marginTop: "35%"
        }}
        alt="Loading..."
      />
    </Fragment>
  );
};
