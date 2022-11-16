/*
Author:      Zachary Thomas
Created:     2/11/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./Photo.scss";

// Individual photo.
export default function Photo(props) {
  return (
    <div className="photo mx-3 my-4 px-3 py-4">
      <img className="photo-image" src={props.imageUrl} alt={props.answer} />

      <h3>{props.answer}</h3>
    </div>
  );
}

Photo.propTypes = {
  photoId: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};