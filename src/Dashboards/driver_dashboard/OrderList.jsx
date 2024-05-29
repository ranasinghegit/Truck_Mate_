import React from 'react';
import AvailableOrderList from './AvailableOrderList';
import PickedOrderList from './PickedOrderList';
import './OrderList.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';



function OrderList() {
  return (
    <div>
            <Header/>

    <div className="order-list">
      <div className="personal-details">Personal details</div>

        <div className='orlddd'>
      <AvailableOrderList />
      <PickedOrderList />
      </div>
    </div>
    <Footer/>

    </div>
  );
}

export default OrderList;