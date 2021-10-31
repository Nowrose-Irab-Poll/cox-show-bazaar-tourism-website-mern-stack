import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";

const Site = ({ site }) => {
  const { name, _id, description, img } = site;

  console.log({ img });
  return (
    <Col>
      <Card style={{ height: "100%" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> {description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Site;
