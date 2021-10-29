import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Package = ({ pack }) => {
  const { _id, name, description, img, price } = pack;

  const cardStyle = {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };

  const uri = `/place-order/${_id}`;
  return (
    <Col>
      <Card style={{ height: "100%" }}>
        <Row>
          <Col>
            <Card.Img variant="top" src={img} className="m-2 mt-4 ms-4" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Title>৳ {price}</Card.Title>
            </Card.Body>
          </Col>
        </Row>
        <Card.Footer className="mt-auto">
          <small className="text-muted">
            <Link to={uri}>
              <Button>Book Now</Button>
            </Link>
          </small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Package;
