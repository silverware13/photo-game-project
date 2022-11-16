/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import "./ModalFooter.scss";

// Generic modal footer.
export default function ModalFooter(props) {
  return (
    <Modal.Footer
      className={props.className}
    >
      {props.children}
    </Modal.Footer>
  );
}

ModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};