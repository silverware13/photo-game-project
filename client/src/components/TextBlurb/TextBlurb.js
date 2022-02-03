/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/
import React from "react";
import PropTypes from "prop-types";
import "./TextBlurb.scss";

// Title, paragraph, and icon text.
export default function TextBlurb(props) {
  return (
    <div className="text-blurb">
      <h1 className="text-blurb-title">
        {props.title}
      </h1>
      <p className="text-blurb-paragraph mb-5">
        {props.paragraph}
      </p>
      <i className={`text-blurb-icon fa fa-fw fa-${props.icon} fa-3x`} />
    </div>
  );
}

TextBlurb.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};