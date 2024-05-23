// components/PickedOrderList.js
import React from 'react';
import OrderItem from './OrderItem';

const pickedOrders = [
  { id: 1, name: 'Glass', from: 'Galle', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M', status: 'Delivered' },
  { id: 2, name: 'Pharma', from: 'Matara', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M', status: 'Delivered' },
  { id: 3, name: 'Grocery', from: 'Kandy', to: 'Colombo', date: '25.05.2024', time: '10.30.A.M', status: 'Delivered' },
];

function PickedOrderList() {
  return (
    <div className="picked-orders">
      <h2>Picked Orders</h2>
      <div className='pickedoo'>
      {pickedOrders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
      </div>
      <button className='see'>SEE ALL</button>
    </div>
  );
}

export default PickedOrderList;