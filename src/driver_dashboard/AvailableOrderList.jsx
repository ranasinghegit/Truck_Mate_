// components/AvailableOrderList.js
import React from 'react';
import OrderItem from './OrderItem';
import './OrderList.css';


const availableOrders = [
  { id: 1, name: 'Glass', from: 'Galle', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M' },
  { id: 2, name: 'Pharma', from: 'Matara', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M' },
  { id: 3, name: 'Grocery', from: 'Kandy', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M' },
];

function AvailableOrderList() {
  return (
    <div className="available-orders">
      <h2>Available Orders</h2>
      {availableOrders.map((order) => (
        <OrderItem  key={order.id} order={order} />
      ))}
      <button className='bt4' >MORE</button>
    </div>
  );
}

export default AvailableOrderList;