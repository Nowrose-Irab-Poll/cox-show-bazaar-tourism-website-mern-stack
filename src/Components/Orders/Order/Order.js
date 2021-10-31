import React, { useEffect, useState } from "react";

const Order = ({ order }) => {
  const [pack, setPack] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, []);

  const handleOrderCancel = () => {
    fetch(`http://localhost:5000/orders/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const { name, email, _id, packageId } = order;
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{pack.name}</td>
      <td>
        <button className="btn btn-danger" onClick={handleOrderCancel}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Order;
