import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [pack, setPack] = useState({});
  const [show, setShow] = useState(false);
  const [confirmedShow, setConfirmedShow] = useState(false);
  const [order, setOrder] = useState({});

  const { user } = useAuth();
  const { register, handleSubmit } = useForm({
    name: "",
    email: "",
    submit: "",
  });
  const { id } = useParams();
  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleConfirmedClose = () => {
    setConfirmedShow(false);
    history.push("/");
  };

  const handleConfirmedShow = () => setConfirmedShow(true);

  const onSubmit = (data) => {
    setOrder(data);
    handleShow();
  };

  const handleConfirmSubmit = () => {
    order.packageId = pack._id;
    fetch("https://howling-fangs-58955.herokuapp.com/place-order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          handleClose();
          handleConfirmedShow();
        }
      });
  };

  useEffect(() => {
    fetch(`https://howling-fangs-58955.herokuapp.com/packages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPack(data);
      });
  }, []);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Package Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Would you like to confirm the order?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn btn-primary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="btn btn-primary"
            onClick={handleConfirmSubmit}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={confirmedShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your order has been successfully placed</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn btn-success"
            onClick={handleConfirmedClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="d-lg-flex m-5 p-5 justify-content-center">
        <div className="w-50">
          <Card>
            <Card.Img variant="top" src={pack.img} />
            <Card.Body>
              <Card.Title>{pack.name}</Card.Title>
              <Card.Text>{pack.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Price: ৳ {pack.price}</ListGroupItem>
              <ListGroupItem>Pack ID: {pack._id}</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
        <div className="m-4 p-4 w-50 place-order-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Your Name"
              value={user.displayName}
              {...register("name", { required: true, maxLength: 30 })}
            />
            <br />
            <input
              placeholder="Your Email"
              value={user.email}
              type="email"
              {...register("email", { required: true })}
            />
            <br />
            <input
              placeholder="Your Address"
              {...register("address", { required: true, maxLength: 50 })}
            />
            <br />
            <input
              type="number"
              placeholder="Your Phone Number"
              {...register("phone", { required: true })}
            />
            <br />
            <input
              type="submit"
              className="btn btn-primary"
              value="Confirm Order"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
