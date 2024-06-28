// src/components/AvailableOrders.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AvailableOrders.css';

const AvailableOrders = () => {
  const [orders, setOrders] = useState([]);
  const driverEmail = 'driver@example.com'; // Replace with the actual logged-in driver's email

  useEffect(() => {
    // Fetch orders from the backend
    axios.get('http://localhost:5000/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the orders!', error);
      });
  }, []);

  const handleConfirm = (order) => {
    const orderWithDriver = {
      ...order,
      driverEmail// Assuming user.email contains the logged-in driver's email
    };
  
    axios.post('http://localhost:5000/api/confirmOrder', orderWithDriver)
      .then(response => {
        console.log('Order confirmed:', response.data);
        alert('Order confirmed successfully!');
        // Optionally, update the UI or do additional tasks after confirmation
        
        // Remove the confirmed order from the UI
        const updatedOrders = orders.filter(o => o.id !== order.id);
        setOrders(updatedOrders);

        // Remove the confirmed order from the database
        axios.delete(`http://localhost:5000/api/orders/${order.id}`)
          .then(response => {
            console.log('Order removed from the database:', response.data);
          })
          .catch(error => {
            console.error('Error removing order from the database:', error);
          });
     





      })
      .catch(error => {
        console.error('There was an error confirming the order:', error);
        alert('Error confirming order!');
      });
  };
  

  

  return (
    <div>
      <h2>Available Orders</h2>
      {orders.map(order => (
        <div className="order-card" key={order.id}>
          <h3>Order ID: {order.id}</h3>
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
          <button onClick={() => handleConfirm(order)}>Confirm</button>
        </div>
      ))}
    </div>
  );
};

export default AvailableOrders;
