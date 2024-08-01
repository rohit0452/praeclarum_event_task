import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import AddEvents from "./AddEvents";

const EditModal = ({ showPopup, selectedData, handleClose }) => {
  const [show, setShow] = useState(showPopup);

  useEffect(() => {
    setShow(showPopup);
  }, [showPopup]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddEvents initialData={selectedData} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
