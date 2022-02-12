/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton/SignOutButton";
import "./Navbar.scss";

// General navbar.
export default function Navbar(props) {

  return (
    <nav className="navbar navbar-expand navbar-custom px-3">
      <Link className="navbar-brand" to={props.currentPage === "/login" ? "/login" : "/"}>
        {props.title}
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {props.currentPage !== "/login" && (
          <Fragment>
            <ul className="navbar-nav me-auto" />

            <div className="mx-2">
              <SignOutButton />
            </div>
          </Fragment>
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired
};