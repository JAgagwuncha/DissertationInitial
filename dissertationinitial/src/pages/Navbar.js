import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/ChangeInAttitude"
            >
              ChangeInAttitude
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/FirstPageTest"
            >
              FirstPageTest
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Question820"
            >
              Question820
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Home"
            >
              Home
            </NavLink>
          </div>

          <div className="navbar-end"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
