import React from "react";

const Modal = ({ isOpen, closeModal, title, content }) => {
  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden={!isOpen}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div
        className="modal-overlay"
        style={{ display: isOpen ? "block" : "none" }}
      ></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Kazaa Japanese Restaurant
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{content}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary close-bt"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
