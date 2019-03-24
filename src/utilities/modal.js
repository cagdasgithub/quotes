import React from "react";
const Modal = props => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={props.closeModal}/>
      <div className="modal-content">
        <p>test</p>       
      </div>
      <button className="modal-close is-large" aria-label="close" > 
      </button>
      
    </div>
  );
};

export default Modal;
