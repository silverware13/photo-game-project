/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavbarLink.scss";

// A single clickable link on a navbar.
export default function NavbarLink(props) {
  return (
    <li className={`nav-item mx-3 ${props.targetPage === props.currentPage ? "nav-item-active" : ""}`}>
      <Link className="nav-link" to={props.targetPage}>
        <span>{props.name}</span>
        {props.targetPage === props.currentPage && (
          <span className="sr-only">Current Page</span>
        )}
      </Link>
    </li>
  );
}

NavbarLink.propTypes = {
  name: PropTypes.string.isRequired,
  targetPage: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired
};