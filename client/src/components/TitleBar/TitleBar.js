/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./TitleBar.scss";

// Simple bar with title.
export default function TitleBar(props) {
  return (
    <div className={`title-bar title-bar-size-${props.size} py-3`}>
      {props.title}
    </div>
  );
}

TitleBar.propTypes = {
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};