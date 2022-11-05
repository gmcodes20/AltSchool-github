import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import User from "./User";

function Profile() {
  return (
    <Fragment>
      <div className="container">
        <User />
      </div>

      <Outlet />
    </Fragment>
  );
}

export default Profile;
