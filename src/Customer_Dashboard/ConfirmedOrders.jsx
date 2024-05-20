// components/ConfirmedOrders.js
import React from 'react';
import OrderItem from './COrderItem';

const ConfirmedOrders = () => {
  const confirmedOrders = [
    { id: 1, name: 'Glass', from: 'Galle', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M' },
    { id: 2, name: 'Glass', from: 'Galle', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M' },
    // Add more confirmed orders here
  ];

  return (
    <div className="order-section">
      <h3>Conformed Orders</h3>
      <div className="order-items">
        {confirmedOrders.map((order) => (
          <OrderItem key={order.id} order={order} actions={['Edit', 'Delete']} />
        ))}
      </div>
      <button className="see-all">SEE ALL</button>
    </div>
  );
};

export default ConfirmedOrders;