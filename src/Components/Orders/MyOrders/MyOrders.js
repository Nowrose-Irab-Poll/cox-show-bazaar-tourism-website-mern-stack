import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Badge, Modal, Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [cancelId, setCancelId] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(`https://howling-fangs-58955.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

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
          My Orders
        </Badge>
        <br />
        <Badge bg="danger" className="p-2 m-2">
          Orders of {user.displayName}
        </Badge>
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Package Name</th>
            <th>Price</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <MyOrder
              key={order._id}
              order={order}
              handleOrderCancel={handleOrderCancel}
              handleCancelConfirmation={handleCancelConfirmation}
            ></MyOrder>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrders;
