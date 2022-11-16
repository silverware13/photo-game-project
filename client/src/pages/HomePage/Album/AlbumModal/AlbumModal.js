/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
-----------------------------------------------------------------
*/

import React, { useState, useEffect, Fragment } from "react";
import Modal from "../../../../components/Modal/Modal";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import ModalBody from "../../../../components/ModalBody/ModalBody";
import ModalFooter from "../../../../components/ModalFooter/ModalFooter";
import ConfirmModal from "../../../../components/ConfirmModal/ConfirmModal";
import SaveChangesModal from "../../../../components/SaveChangesModal/SaveChangesModal";
import Error from "../../../../components/Error/Error";
import Spinner from "../../../../components/Spinner/Spinner";
import apiRequest from "../../../../utilities/apiRequest";
import PropTypes from "prop-types";
import { API, MIN_ALBUM_NAME_LENGTH, MAX_ALBUM_NAME_LENGTH } from "../../../utilities/constants";
import "./AlbumModal.scss";


// Modal for creating, editing, and deleting albums.
export default function AlbumModal(props) {
  const [loading, setLoading] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showConfirmExit, setShowConfirmExit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [photos, setPhotos] = useState([]);

  // Update state when album prop changes.
  useEffect(() => {
    setName(props.album.name);
  }, [JSON.stringify(props.album)]);

  // Validate the album settings.
  function albumIsValid() {
    if (name.length < MIN_ALBUM_NAME_LENGTH || name.length > MAX_ALBUM_NAME_LENGTH) {
      setErrorMessage(
        `The album name must be between ${MIN_ALBUM_NAME_LENGTH} and ${MAX_ALBUM_NAME_LENGTH} characters long.`
      );
      return false;
    } else {
      return true;
    }
  }

  // Create an album.
  async function createAlbum() {
    if (albumIsValid()) {
      const requestBody = {
        name: name,
        photos: photos
      };

      setLoading(true);
      // API call goes here.
      setLoading(false);

      // If everything went well we do the following (normally we would get the ID from the API response).
      requestBody.albumId = Math.floor(Math.random() * (1000000 - 1) + 1);
      props.onChange(requestBody);
    }
  }

  // Edit an album.
  async function editAlbum() {
    if (albumIsValid()) {
      const requestBody = {
        name: name,
        photos: photos
      };

      setLoading(true);
      const [response, responseBody] = await apiRequest(
        `${API}/album/${props.album.albumId}`,
        "PUT",
        requestBody
      );
      setLoading(false);

      if (response.ok) {
        requestBody.albumId = props.album.albumId;
        props.onChange(requestBody);
        setErrorMessage("");
        props.onClose();

      } else {
        if (response.status >= 500) {
          setErrorMessage("Internal server error. Unable to update album.");

        } else {
          setErrorMessage(responseBody.error);
        }
      }
    }
  }

  // Delete an album.
  async function deleteAlbum(albumId) {
    setLoading(true);
    const [response, responseBody] = await apiRequest(
      `${API}/album/${albumId}`,
      "DELETE",
      null
    );
    setLoading(false);

    if (response.ok) {
      setShowConfirmDelete(false);
      props.onClose();
      props.onDelete(albumId);

    } else {
      setShowConfirmDelete(false);
      if (response.status >= 500) {
        setErrorMessage("Internal server error. Unable to delete album.");

      } else {
        setErrorMessage(responseBody.error);
      }
    }
  }

  // Save changes.
  function saveChanges() {
    if (props.mode === "create") {
      createAlbum();
    } else {
      editAlbum(props.album.albumId);
    }
    setShowConfirmExit(false);
  }

  // Exit without saving changes.
  function dontSaveChanges() {
    setShowConfirmExit(false);
    setErrorMessage("");
    props.onClose();
  }

  // Exit modal if no changes have been made. Otherwise prompt user.
  function exitModal() {
    setName(props.album.name);
    setPhotos([]);
    props.onClose();
  }

  return (
    <div className="album-modal-container">
      <Spinner loading={loading} />

      <Modal
        show={props.showModal}
        onHide={() => exitModal()}
        animation
        centered
      >
        <ModalHeader>
          <h5 className="modal-title font-weight-bold">
            {props.mode === "create" ? (
              <span>Create Album</span>
            ) : (
              <span>Edit Album</span>
            )}
          </h5>
        </ModalHeader>

        <ModalBody>
          <div className="form-album mx-2">
            <label className="mb-3">
              Name
            </label>
            <input
              className="form-control mx-auto"
              type="name"
              maxLength={MAX_ALBUM_NAME_LENGTH}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="row">
            <div className="col mt-4 mx-2">
              <Error message={errorMessage} />
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          {props.mode === "create" ? (
            <Fragment>
              <button className="album-btn btn btn-primary" type="button" onClick={() => createAlbum()}>
                Create Album
              </button>

              <button className="album-btn btn btn-secondary" type="button" onClick={() => exitModal()}>
                Cancel
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <button className="album-btn btn btn-danger me-auto" type="button" onClick={() => setShowConfirmDelete(true)}>
                Delete
              </button>

              <button className="album-btn btn btn-primary" type="button" onClick={() => editAlbum()}>
                Save Changes
              </button>

              <button className="album-btn btn btn-secondary" type="button" onClick={() => exitModal()}>
                Cancel
              </button>
            </Fragment>
          )}
        </ModalFooter>
      </Modal>

      <ConfirmModal
        showModal={props.showModal && showConfirmDelete}
        title="Delete album?"
        content={"Are you sure that you want to delete the album? This action cannot be undone."}
        yesText="Delete Album"
        noText="Cancel"
        danger={true}
        onClose={() => setShowConfirmDelete(false)}
        onYes={() => deleteAlbum(props.album.albumId)}
        onNo={() => setShowConfirmDelete(false)}
      />

      <SaveChangesModal
        showModal={props.showModal && showConfirmExit}
        title="Changes have not been saved!"
        content="Are you sure that you want to exit without saving your changes?"
        onClose={() => setShowConfirmExit(false)}
        onSave={() => saveChanges()}
        onNoSave={() => dontSaveChanges()}
      />
    </div>
  );
}

AlbumModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  album: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};