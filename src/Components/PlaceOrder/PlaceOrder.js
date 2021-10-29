import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlaceOrder = () => {
  const { id } = useParams();
  const [pack, setPack] = useState({});

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/packages/${id}`).then();
  //   }, []);

  return (
    <div>
      <h2>Place Order: {id}</h2>
    </div>
  );
};

export default PlaceOrder;
