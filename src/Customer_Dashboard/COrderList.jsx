// components/COrderList.js
import React from 'react';
import PendingOrders from './PendingOrders';
import ConfirmedOrders from './ConfirmedOrders';
import ReceivedOrders from './ReceivedOrders';
import './COrderList.css';

const COrderList = () => {
  return (
    <div className="order-list">
      <PendingOrders />
      <ConfirmedOrders />
      <ReceivedOrders />
    </div>
  );
};

export default COrderList;