// components/OrderList.js
import React from 'react';
import AvailableOrderList from './AvailableOrderList';
import PickedOrderList from './PickedOrderList';
import './OrderList.css';



function OrderList() {
  return (
    
    <div className="order-list">
      <div className="personal-details">Personal details</div>

        <div className='orld'>
      <AvailableOrderList />
      <PickedOrderList />
      </div>
    </div>
  );
}

export default OrderList;