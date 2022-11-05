import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import User from "./User";

function Profile() {
  return (
    <Fragment>
      <div className="container">
        <h1 className="h3">Github User Profile</h1>
        <User />
      </div>

      <Outlet />
    </Fragment>
  );
}

export default Profile;
