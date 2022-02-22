/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import "./ModalHeader.scss";

// Generic modal header.
export default function ModalHeader(props) {
  return (
    <Modal.Header
      className={props.className}
    >
      {props.children}
    </Modal.Header>
  );
}

ModalHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};