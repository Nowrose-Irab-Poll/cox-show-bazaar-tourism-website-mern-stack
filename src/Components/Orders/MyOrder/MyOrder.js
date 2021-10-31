import React, { useEffect, useState } from "react";

const MyOrder = ({ order, handleOrderCancel, handleCancelConfirmation }) => {
  const [pack, setPack] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, []);

  const { name, email, _id, packageId, price } = order;

  return (
    <tr>
      <td>{_id}</td>
      <td>{pack.name}</td>
      <td>{pack.price}</td>

      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleCancelConfirmation(_id)}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default MyOrder;
