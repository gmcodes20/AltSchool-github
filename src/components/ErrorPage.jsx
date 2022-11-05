import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import error404 from "../assets/error404.svg";

function ErrorPage() {
  let location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  return (
    <div className="container mx-auto  row ">
      <div
        className="card border border-0 center container text-center  "
        style={{ maxWidth: "30rem" }}
      >
        <div className="error-img">
          <img src={error404} alt="error 404 " />
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
                <button className="m-1" onClick={() => navigate("/")}>
                  Home
                </button>
              </li>
              <li className="nav-item">
                {" "}
                <button className="m-1" onClick={() => navigate(-1)}>
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
