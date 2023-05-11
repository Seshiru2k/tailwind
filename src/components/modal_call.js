import React, { useState } from 'react';
import Modal from "@components/modal"

function ModalCall() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButtonClick() {
    setIsModalOpen(true);
  }

  return (
    <>
      <button className="flex services-widget" onClick={handleButtonClick}>
        <span><i className="fa fa-desktop" /></span>
      </button>
      {isModalOpen && <Modal />}
    </>
  );
}

export default ModalCall;