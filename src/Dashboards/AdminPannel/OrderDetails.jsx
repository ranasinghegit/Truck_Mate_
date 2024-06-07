// src/components/OrderDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './OrderDetails.css';

function OrderDetails() {
  const { id } = useParams();
  // You can fetch order details from an API or state using the id

  const order = { id, customer: 'John Doe', status: 'Delivered', items: ['Item 1', 'Item 2'] };

  return (
    <div>
      <h1>Order Details</h1>
      <p>ID: {order.id}</p>
      <p>Customer: {order.customer}</p>
      <p>Status: {order.status}</p>
      <h2>Items</h2>
      <ul>
        {order.items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default OrderDetails;
