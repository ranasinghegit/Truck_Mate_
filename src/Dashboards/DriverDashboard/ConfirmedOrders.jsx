import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ConfirmedOrders.css';

const ConfirmedOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:5000/api/confirmedOrders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching confirmed orders:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleLocation = (orderId) => {
    // Handle location button click for a specific order
    console.log('Location button clicked for order:', orderId);
    // Add logic to handle location functionality
  };

 
  const handlePicked = (orderId) => {
    console.log('Picked button clicked for order:', orderId);
    // Mark order as picked (update status on backend)
    axios.put(`http://localhost:5000/api/orders/${orderId}/markAsPicked`)
      .then(response => {
        // Assuming the order is successfully marked as picked, update UI
        setOrders(orders.filter(order => order.order_id !== orderId));
      })
      .catch(error => {
        console.error('Error marking order as picked:', error);
      });
  };





  






  return (
    <div>
      <h2>Confirmed Orders</h2>
      {orders.map(order => (
        <div className="order-card" key={order.order_id}>
          <h3>Order ID: {order.order_id}</h3>
          <p>Customer Name: {order.cusname}</p>
          <p>Customer Address: {order.cusaddress}</p>
          <p>Customer Contact: {order.cuscontact}</p>
          <p>Supplier Name: {order.supname}</p>
          <p>Supplier Address: {order.supaddress}</p>
          <p>Supplier Contact: {order.supcontact}</p>
          <p>Description: {order.description}</p>
          <p>Category: {order.category}</p>
          <p>Size: {order.size}</p>
          <p>Weight: {order.weight}</p>
          <p>Type: {order.type}</p>
          <p>Pickup: {order.pickup}</p>
          <p>Delivery: {order.delivery}</p>
          <p>Driver Email: {order.driver_email}</p> {/* Assuming driver's email is in the data */}
          <button onClick={() => handleLocation(order.order_id)}>Location</button>
          <button onClick={() => handlePicked(order.order_id)}>Mark as Picked</button>
        </div>
      ))}
    </div>
  );
};

export default ConfirmedOrders;
