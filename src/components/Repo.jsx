import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_CLIENT_SECRET;
} else {
  githubClientId = process.env.CLIENT_ID;
  githubClientSecret = process.env.CLIENT_SECRET;
}

function Repo() {
  const [loading, setLoading] = useState(false);
  const [repo, setRepo] = useState({});
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { repoLink } = location.state;

  const { name, description, html_url, visibility, language, default_branch } =
    repo;

  // console.log(repoLink);
  // // console.log(navigate);
  // console.log(location.state);

  useEffect(() => {
    const getRepo = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          `${repoLink}?client_id=${githubClientId}&secret=${githubClientSecret}`
        );
        setRepo(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    getRepo();
  }, [repoLink]);

  if (loading) return <Loading />;

  if (!loading && error !== null) return <p>{error.message}</p>;

  return (
    <div>
      <div className="container repo-container grid">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="btn btn-secondary mt-2 "
        >
          Back
        </button>
        <div className="card bg-success text-white p-2 m-2 grid">
          <h2 className="text-white-50 bold fs-3">
            About <span className="text-danger fw-bold"> {name}</span>
          </h2>

          <div className="repo-details position-relative">
            <div className="name">
              {" "}
              <span className="small">Name: </span>{" "}
              <p className="p repo-name"> {name}</p>
            </div>
            {description && (
              <div className="desc">
                {" "}
                <span className="small">Description: </span>{" "}
                <p className="p repo-name"> {description}</p>
              </div>
            )}
            <p className="">
              Default Branch:{" "}
              <span className="text-uppercase"> {default_branch} </span>
            </p>

            <p className="p repos-about">
              Language: <span className="text-uppercase"> {language}</span>
            </p>
            <p className="p repos-about">
              Visibility: <span className="text-uppercase"> {visibility}</span>
            </p>

            <a
              style={{ maxWidth: "150px" }}
              href={html_url}
              className="link-warning text-align-center d-block mx-auto"
            >
              Visit Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repo;
