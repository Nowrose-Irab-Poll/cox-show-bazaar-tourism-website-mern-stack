import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Badge, Modal, Table } from "react-bootstrap";
import Order from "../Order/Order";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [cancelId, setCancelId] = useState({});

  useEffect(() => {
    fetch("https://howling-fangs-58955.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCancelConfirmation = (id) => {
    handleShow();
    setCancelId(id);
  };

  const handleOrderCancel = () => {
    handleClose();
    fetch(`https://howling-fangs-58955.herokuapp.com/orders/${cancelId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
        }
      })
      .finally(() => {
        const newOrders = orders.filter((order) => order._id !== cancelId);
        setOrders(newOrders);
      });
  };

  return (
    <div>
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
      <h2>
        <Badge bg="success" className="p-4 m-5">
          All Orders
        </Badge>
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Name</th>
            <th>Package Name</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <Order
              key={order._id}
              order={order}
              handleOrderCancel={handleOrderCancel}
              handleCancelConfirmation={handleCancelConfirmation}
            ></Order>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllOrders;
