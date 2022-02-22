/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import "./SaveChangesModal.scss";

// Modal for making a decision about saving changes.
export default function SaveChangesModal(props) {
  return (
    <div className="save-changes-modal">
      <Modal
        show={props.showModal}
        onHide={() => props.onClose()}
        backdropClassName={"save-top-level-backdrop"}
        animation
        centered
      >
        <ModalHeader>
          <span className="modal-title">
            {props.title}
          </span>
        </ModalHeader>
        <ModalBody>
          <p>
            {props.content}
          </p>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-success"
            data-dismiss="modal"
            onClick={() => props.onSave()}
          >
            Save Changes
          </button>

          <button
            type="button"
            className="btn btn-danger"
            data-dismiss="modal"
            onClick={() => props.onNoSave()}
          >
            Don&#39;t Save Changes
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.onClose()}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

SaveChangesModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onNoSave: PropTypes.func.isRequired
};