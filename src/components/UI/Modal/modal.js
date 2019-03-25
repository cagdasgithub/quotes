import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = props => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add Quote</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.closeModal}
          />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea is-primary"
                placeholder="Please enter your quote here..."
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Quote</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success is-primary"
                type="text"
                placeholder="Please enter author..."
                value=""
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon="igloo" />
              </span>
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon="igloo" />
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button" onClick={props.closeModal}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
