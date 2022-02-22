/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
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
    <div className="album container my-4">
      <div className="title-container row align-items-center mb-3 py-2">
        <div className="col">
          {formatTitleCase(props.name)}
        </div>

        <div className="col-auto mb-1">
          <button className="album-btn edit-btn btn btn-info">
            Edit
          </button>
        </div>
      </div>

      <div className="row align-items-center mx-4 mb-4">
        <div className="col">
          <span className="font-weight-bold">Personal High Score: </span>
          {props.personalHighScore}
        </div>

        <div className="col">
          <span className="font-weight-bold">Global High Score: </span>
          {props.globalHighScore} {props.globalUser ? `by ${formatTitleCase(props.globalUser)}` : ""}
        </div>

        <div className="col">
          <Link to={`/album/${props.albumId}/play`}>
            <button className="album-btn btn btn-info w-100">
              Play
            </button>
          </Link>
        </div>

        <div className="col">
          <Link to={`/album/${props.albumId}/browse`}>
            <button className="album-btn btn btn-info w-100">
              Browse
            </button>
          </Link>
        </div>
      </div>
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