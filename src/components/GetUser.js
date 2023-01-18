import React, { Fragment } from "react";
import ErrorPage from "./ErrorPage";
// import { Link } from "react-router-dom";
import GetRepo from "./GetRepo";
import Loading from "./Loading";

function GetUser({ loading, data, error, url }) {
  const {
    hireable,
    bio,
    email,
    blog,
    avatar_url,
    name,
    login,
    followers,
    following,
    location,
    twitter_username,
  } = data;

  if (loading) return <Loading />;

  if (!loading && error !== null) {
    return <ErrorPage error={error.message} />;
  }

  return (
    <div className="container ">
      <h1 className="h3">Github User Profile</h1>
      <div className="card p-5 m-2 grid   shadow">
        <p className="p">
          Hireable{" "}
          <span>
            <i
              className={
                hireable
                  ? "fa-solid fa-check text-primary"
                  : "text-danger fa-solid fa-xmark"
              }
            ></i>
          </span>{" "}
        </p>

        <div className=" p-1">
          <div className="d-flex  flex-column flex-md-row justify-content-evenly">
            <div className="flex-shrink-0 text-center">
              <img
                className="img-thumbnail img-fluid  mx-auto rounded-circle "
                src={avatar_url}
                alt="profile "
                style={{ maxWidth: "10rem", aspectRatio: "1" }}
              />
              <h3 className="h3 text-primary">{name}</h3>
              <p className="mb-1">@{login}</p>
              <p className="location p">{location}</p>
            </div>
            <div className="flex-grow-1 ms-4 ">
              {bio && (
                <div className="grid">
                  <span className="fw-bold">Bio:</span> <p>{bio}</p>{" "}
                </div>
              )}

              {blog && (
                <div className="grid pb-2">
                  <span className="fw-bold">Website:</span>{" "}
                  <a className="link" href={blog}>
                    {blog}
                  </a>{" "}
                </div>
              )}
              {email && (
                <div className="grid pb-2">
                  <span className="fw-bold">Website:</span>{" "}
                  <a className="link" href={`mailto:${email}`}>
                    {email}
                  </a>
                </div>
              )}

              <div className="follows flex">
                <div className="d-flex flex-sm-row ">
                  <p className=" px-3  bg-secondary text-white bg-gradient">
                    <span className=" ">{followers}</span>∘ Followers
                  </p>
                  <p className="px-3 mx-4 bg-primary text-white bg-gradient">
                    <span className="">{following}</span>∘ Following
                  </p>
                </div>
              </div>

              <p style={{ maxWidth: "150px" }} className="text-white bg-info  ">
                <span>
                  <i className="fa-brands fa-twitter mx-3 "></i>
                </span>
                {twitter_username}
              </p>
            </div>
          </div>
          <Fragment>
            <GetRepo url={url} />
          </Fragment>
        </div>
      </div>
    </div>
  );
}

export default GetUser;
