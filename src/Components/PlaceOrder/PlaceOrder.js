import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = () => {
  const [pack, setPack] = useState({});
  const { user } = useAuth();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/packages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPack(data);
      });
  }, []);

  return (
    <div>
      <h2>{user.email}</h2>
      <h2>Place Order: {pack._id}</h2>
      <h2>{pack.name}</h2>
    </div>
  );
};

export default PlaceOrder;
