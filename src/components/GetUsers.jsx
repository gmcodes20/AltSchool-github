import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";

// import { Link } from "react-router-dom";

function GetUsers({ loading, error, usersData }) {
  const loadUsers =
    usersData &&
    usersData.map((user) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "400px",
            marginInline: "1rem",
            gap: ".5rem",
            paddingBlock: "1rem",
          }}
          className="card user text-center "
          key={user.id}
        >
          <div
            className="avater-img rounded-circle "
            style={{ maxWidth: "70px" }}
          >
            <img
              src={user.avatar_url}
              alt={user.name}
              className="avatar rounded-circle"
            />
          </div>

          <h3 className="text-primary">{user.login}</h3>

          <Link
            to={`profile`}
            state={{ username: user.login }}
            className="btn btn-dark text-danger"
          >
            More..
          </Link>
        </div>
      );
    });
  if (loading) return <Loading />;

  if (!loading && error !== null) {
    return <ErrorPage error={error.message} />;
  }

  return (
    <Fragment>
      <div className="container ">
        <div
          className="users "
          style={{
            display: "grid",
            gridTemplateColumns: " repeat(auto-fit, minmax(320px, 1fr))",
            placeItems: "center",
            gap: "1rem",
          }}
        >
          {loadUsers}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
}

export default GetUsers;
