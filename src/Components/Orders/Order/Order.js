import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const Order = ({ order }) => {
  const [pack, setPack] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(`http://localhost:5000/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, []);

  const handleOrderCancel = () => {
    handleClose();
    fetch(`http://localhost:5000/orders/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
        }
      });
  };

  const handleCancelConfirmation = () => {
    handleShow();
  };

  const { name, email, _id, packageId } = order;
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Package Order Cancel Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Would you like to cancel the order?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn btn-primary"
            onClick={handleClose}
          >
            Return
          </Button>
          <Button
            variant="primary"
            className="btn btn-danger"
            onClick={handleOrderCancel}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <tr>
        <td>{_id}</td>
        <td>{name}</td>
        <td>{pack.name}</td>
        <td>
          <button className="btn btn-danger" onClick={handleCancelConfirmation}>
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
};

export default Order;
