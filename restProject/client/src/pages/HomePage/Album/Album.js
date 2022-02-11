/*
Author:      Zachary Thomas
Created:     2/11/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatTitleCase from "../../../utilities/formatTitleCase";
import "./Album.scss";

// Link and score for an individual album.
export default function Album(props) {
  return (
    <div className="album mx-3 my-2 px-3 py-2">
      <Link to={`/album/${props.albumId}`}>
        <button className="album-btn btn btn-secondary mb-4 w-100">
          {formatTitleCase(props.name)}
        </button>
      </Link>
      <p className="scores ms-2 me-4">
        <span className="font-weight-bold">Personal High Score: </span>
        {props.personalHighScore}
      </p>
      <p className="scores">
        <span className="font-weight-bold">Global High Score: </span>
        {props.globalHighScore} {props.globalUser ? `by ${formatTitleCase(props.globalUser)}` : ""}
      </p>
    </div>
  );
}

Album.propTypes = {
  albumId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  personalHighScore: PropTypes.number.isRequired,
  globalHighScore: PropTypes.number.isRequired,
  globalUser: PropTypes.string,
};