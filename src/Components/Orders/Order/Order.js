import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router";

const Order = ({ order, handleOrderCancel, handleCancelConfirmation }) => {
  const [pack, setPack] = useState({});

  useEffect(() => {
    fetch(`https://howling-fangs-58955.herokuapp.com/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, []);

  const { name, email, _id, packageId } = order;
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{pack.name}</td>
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

export default Order;
