/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./Spinner.scss";

// Centered spinner that lets the user know something is loading.
export default function Spinner(props) {
  return (
    (props.loading && (
      <div className="spin-loader">
        <div role="status" className="spinner-border fast mt-5" style={{ width: "12rem", height: "12rem" }}>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ))
  );
}

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired
};