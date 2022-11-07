import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar navbar-expand-lg text-bg-dark p-3">
      <div className=" d-flex align-items-start justify-content-between container">
        <Link to={"/"} className="navbar-brand text-primary">
          logo
        </Link>
        <nav className="navbar">
          <ul className="nav-list d-flex gap-3">
            <li className="nav-list">
              {" "}
              <NavLink className={"nav-link link-light p-1"} to={"/"}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className={"nav-link link-light p-1"} to={"/profile"}>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink className={"nav-link link-light p-1"} to={"/testerror"}>
                Test Error
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
