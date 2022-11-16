/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./Component.scss";

// Example component to be used as a simple template for other components.
export default function Component(props) {
  return (
    <div className="component-template">
      {props.message}
    </div>
  );
}

Component.propTypes = {
  message: PropTypes.string.isRequired,
};