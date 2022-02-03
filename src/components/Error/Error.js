/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./Error.scss";

// Error message.
export default function Error(props) {
  return (
    (props.message.length > 0 && (
      <div className="alert alert-danger" role="alert">
        {props.message}
      </div>
    ))
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired
};