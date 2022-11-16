/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import "./ModalBody.scss";

// Generic modal body.
export default function ModalBody(props) {
  return (
    <Modal.Body
      className={props.className}
    >
      {props.children}
    </Modal.Body>
  );
}

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};