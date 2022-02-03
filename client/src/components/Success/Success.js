/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./Success.scss";

// Success message.
export default function Success(props) {
  return (
    (props.message.length > 0 && (
      <div className="alert alert-success" role="alert">
        {props.message}
      </div>
    ))
  );
}

Success.propTypes = {
  message: PropTypes.string.isRequired
};