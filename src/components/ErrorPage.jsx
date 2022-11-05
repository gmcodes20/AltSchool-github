import React, { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import error404 from "../assets/error404.svg";
import errorImg from "../assets/error.webp";
import errorImg1 from "../assets/eeerrrrrorrr.webp";

function ErrorPage({ error }) {
  let location = useLocation();
  const navigate = useNavigate();

  if (error) {
    return (
      <Fragment>
        <div className="container mx-auto card">
          <div className="d-flex justify-content-center align-items-center flex-row p-2">
            <div className="">
              <p className="h2">Oooooop!</p>
              <p className="p-1">Sorrrrrrry!!! something happened.</p>
              <p className="p">
                probably, <span className="text-danger"> {error}</span>
              </p>
            </div>

            <div className="">
              <img src={errorImg} alt="man on with display error" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <div className="container mx-auto  row ">
      <div
        className="card border border-0 center container text-center  "
        style={{ maxWidth: "30rem" }}
      >
        <div className="error-img">
          <img src={errorImg1} alt="error 404 " />
        </div>

        <article className="error-page-detail">
          <h2 className="h2">Page Not Found</h2>
          <p>
            Sorry, page <span className="accent"> {location.pathname}</span> is
            not in this server
          </p>
          <p>You can go back:</p>
          <nav className="navigate-btns">
            <ul className="nav-list">
              <li className="nav-item">
                {" "}
                <button
                  className="m-1 btn btn-primary"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                {" "}
                <button
                  className="m-1 btn btn-secondary"
                  onClick={() => navigate(-1)}
                >
                  Previous Page
                </button>
              </li>
            </ul>
          </nav>
        </article>
      </div>
    </div>
  );
}

export default ErrorPage;
