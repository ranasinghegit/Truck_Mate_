// src/components/Orders.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Orders.css';
import Header from '../../components/Header';

function Orders() {
  const orders = [
    { id: 1, customer: 'John Doe', status: 'Delivered' },
    { id: 2, customer: 'Jane Smith', status: 'Pending' },
    { id: 3, customer: 'Alice Johnson', status: 'Delivered' },
    { id: 4, customer: 'Bob Brown', status: 'Pending' },
    // Add more orders here
  ];

  const pendingOrders = orders.filter(order => order.status === 'Pending');
  const deliveredOrders = orders.filter(order => order.status === 'Delivered');

  return (
    <div>
      <Header/>
      <h1>Orders</h1>
      <h2>Pending Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {pendingOrders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
              <td><Link to={`/orders/${order.id}`}>View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Delivered Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {deliveredOrders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
              <td><Link to={`/orders/${order.id}`}>View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
