// components/ReceivedOrders.js
import React from 'react';
import OrderItem from './COrderItem';

const ReceivedOrders = () => {
  const receivedOrders = [
    { id: 1, name: 'Glass', from: 'Galle', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M' },
    { id: 2, name: 'Pharma', from: 'Matara', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M' },
    { id: 3, name: 'Pharma', from: 'Matara', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M' },
    // Add more received orders here
  ];

  return (
    <div className="order-section">
      <h3>Received Orders</h3>
      <div className="order-items">
        {receivedOrders.map((order) => (
          <OrderItem key={order.id} order={order} actions={['Details', 'Review']} />
        ))}
      </div>
      <button className="see-all">SEE ALL</button>
    </div>
  );
};

export default ReceivedOrders;
