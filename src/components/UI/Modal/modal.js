import React from "react";
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
          <button className="delete" aria-label="close" />
        </header>
        <section className="modal-card-body">
          <p>text</p>
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
