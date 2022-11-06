import React, { Fragment } from "react";
import homeImg from "../assets/home-img.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <main className="main container gap-5 mt-5 d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div
          className="flex-grow-1 mx-auto  order-2 order-md-1"
          style={{ maxWidth: "100%" }}
        >
          <h1 className="h2 fw-bold text-info">
            Welcome to the React Github User Portfolio
          </h1>
          <p className="text-black-50">An AltSchool Exam Project</p>

          <div className="d-flex  flex-column flex-md-row align-items-start gap-2">
            <button
              onClick={() => navigate("profile")}
              className="btn btn-primary px-3 fs-6"
            >
              Check Profile
            </button>
            <button
              onClick={() => navigate("errorboundry")}
              className="btn btn-secondary px-3 fs-6"
            >
              {" "}
              Test Error
            </button>
          </div>
        </div>

        <div
          style={{ maxWidth: "450px" }}
          className="flex-shrink-0 text-center order-1 order-md-2"
        >
          <img src={homeImg} alt="Man sitting and holding laptop" />
        </div>
      </main>

      <article className="card mt-5 pb-3 container bg-dark d-flex flex-column flex-md-row align-items-center justify-content-around gap-4">
        <div className="d-flex flex-column align-items-center">
          <div style={{ fontSize: "4rem" }} className="text-light ">
            <i className="fa-solid fa-truck-fast"></i>
          </div>
          <p className="text-danger">Fast</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div style={{ fontSize: "4rem" }} className="text-light ">
            <i className="fa-solid fa-code"></i>
          </div>
          <p className="text-danger">Deliver</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div style={{ fontSize: "4rem" }} className="text-light ">
            <i className="fa-solid fa-wifi"></i>
          </div>
          <p className="text-danger">Reliable</p>
        </div>
      </article>
    </Fragment>
  );
}

export default Home;
