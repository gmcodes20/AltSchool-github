import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar navbar-expand-lg text-bg-dark p-3">
      <div className=" container">
        <Link to={"/"} className="navbar-brand text-primary">
          logo
        </Link>
        <nav className="navbar">
          <ul className="nav-list d-flex">
            <li className="nav-list">
              {" "}
              <NavLink className={"nav-link p-1"} to={"/"}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className={"nav-link p-1"} to={"/profile"}>
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
