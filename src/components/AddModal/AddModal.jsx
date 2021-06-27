import React, { useState } from 'react';
import './AddModal.css';

export function AddModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        +
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Options</h2>
            <div>Activity Suggestion 1</div>
            <div>Activity Suggestion 2</div>
            <div>Activity Suggestion 3</div>
            <div>Activity Suggestion 4</div>
            <div>Activity Suggestion 5</div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
