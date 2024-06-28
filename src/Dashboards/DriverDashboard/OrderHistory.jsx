import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderHistory.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:5000/api/orderHistory')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching order history:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Order History</h2>
      {orders.map(order => (
        <div className="order-card" key={order.id}>
          <h3>Order ID: {order.id}</h3>
          <p>Pickup: {order.pickup}</p>
          <p>Delivery: {order.delivery}</p>
          <p>Date: {order.date}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
