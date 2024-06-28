import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './PickedOrders.css'; // Uncomment this line if you have specific CSS styles

const PickedOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:5000/api/pickedOrders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching picked orders:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const markAsDelivered = (orderId) => {
    axios.put(`http://localhost:5000/api/moveToHistory/${orderId}`)
      .then(response => {
        console.log('Order moved to order_history:', response.data);
        // Optionally, update UI or perform additional tasks
        // For example, you can remove the order from the state to reflect the change in UI
        setOrders(orders.filter(order => order.id !== orderId));
      })
      .catch(error => {
        console.error('Error moving order to order_history:', error);
        // Handle error or show error message to user
      });
  };

  return (
    <div>
      <h2>Picked Orders</h2>
      {orders.map(order => (
        <div className="order-card" key={order.id}>
          <h3>Order ID: {order.id}</h3>
          <p>Pickup: {order.pickup}</p>
          <p>Delivery: {order.delivery}</p>
          <p>ETA: {order.eta}</p>
          <button onClick={() => markAsDelivered(order.id)}>Mark as Delivered</button>
        </div>
      ))}
    </div>
  );
};

export default PickedOrders;
