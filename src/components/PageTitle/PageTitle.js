/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./PageTitle.scss";

// Simple page title.
export default function PageTitle(props) {
  return (
    <div className="page-title mt-4 mb-5">
      {props.title}
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};