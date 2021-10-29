import React, { useEffect, useState } from "react";
import { Badge, Card, CardGroup, Col, Row } from "react-bootstrap";
import Package from "../Package/Package";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        console.log(data);
      });
  }, []);

  const divStyle = {
    backgroundColor: "#F7F7F7",
  };
  return (
    <div style={divStyle} id="packages">
      <h2>
        <Badge bg="info" className="p-4">
          Our Packages
        </Badge>
      </h2>
      <CardGroup>
        <Row xs={1} md={2} lg={3} className="g-4 m-5 mt-2">
          {packages.map((p) => (
            <Package key={p._id} pack={p}></Package>
          ))}
        </Row>
      </CardGroup>
    </div>
  );
};

export default Packages;
