import React, { Fragment } from "react";

function Loading() {
  return (
    <Fragment>
      <div
        style={{ maxWidth: "80%" }}
        className="container text-center  mx-auto"
      >
        <div className="spinner-border fs-3 text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-danger">Loading...</p>
      </div>
    </Fragment>
  );
}

export default Loading;
