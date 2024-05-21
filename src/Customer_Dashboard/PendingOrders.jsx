
// components/PendingOrders.js
import React from 'react';
import OrderItem from './COrderItem';

const PendingOrders = () => {
  const pendingOrders = [
    { id: 1, name: 'Glass', from: 'Galle', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M' },
    { id: 2, name: 'Pharma', from: 'Matara', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M' },
    // Add more pending orders here
  ];

  return (
    <div className="order-section">
      <h3>Pending Orders</h3>
      <div className="order-items">
        {pendingOrders.map((order) => (
          <OrderItem key={order.id} order={order} actions={['Edit', 'Cancel']} />
        ))}
      </div>
      <button className="see-all">SEE ALL</button>
    </div>
  );
};

export default PendingOrders;