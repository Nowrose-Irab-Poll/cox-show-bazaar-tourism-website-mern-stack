import React, { useEffect, useState } from "react";
import { Badge, CardGroup, Row, Spinner } from "react-bootstrap";
import Site from "../Site/Site";

const Sites = () => {
  const [sites, setSites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/sites")
      .then((res) => res.json())
      .then((data) => setSites(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const divStyle = {
    backgroundColor: "#F7F7F7",
  };

  if (isLoading) {
    return <Spinner animation="grow" variant="info" className="m-5 p-3" />;
  } else
    return (
      <div style={divStyle} id="packages" id="sites">
        <h2>
          <Badge bg="info" className="p-4">
            Sites
          </Badge>
        </h2>
        <CardGroup>
          <Row xs={1} md={2} lg={3} className="g-4 m-5 mt-2">
            {sites.map((site) => (
              <Site key={site._id} site={site}></Site>
            ))}
          </Row>
        </CardGroup>
      </div>
    );
};

export default Sites;
