import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Badge, Modal, Table } from "react-bootstrap";
import Order from "../Order/Order";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h2>
        <Badge bg="success" className="p-4 m-5">
          All Orders
        </Badge>
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Name</th>
            <th>Package Name</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <Order key={order._id} order={order}></Order>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllOrders;
