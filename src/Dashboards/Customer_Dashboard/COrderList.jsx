// components/COrderList.js
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PendingOrders from './PendingOrders';
import ConfirmedOrders from './ConfirmedOrders';
import ReceivedOrders from './ReceivedOrders';
import './COrderList.css';

const COrderList = () => {
  return (
    <div className='C_Dashboard'>
      <Header/>

    <div className="order-list">

      <PendingOrders />
      <ConfirmedOrders />
      <ReceivedOrders />
    </div>
    <Footer/>
    </div>

  );
};

export default COrderList;