// src/App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AvailableOrders from './AvailableOrders';
import ConfirmedOrders from './ConfirmedOrders';
import PickedOrders from './PickedOrders';
import OrderHistory from './OrderHistory';
import AccountInformation from './AccountInformation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './DriverMain.css';


function DriverMain() {
  const navigate = useNavigate();

  

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/Login/Signup');
  };

  
  const [selectedSection, setSelectedSection] = useState('AvailableOrders');

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'AvailableOrders':
        return <AvailableOrders />;
      case 'ConfirmedOrders':
        return <ConfirmedOrders />;
      case 'PickedOrders':
        return <PickedOrders />;
      case 'OrderHistory':
        return <OrderHistory />;
      case 'AccountInformation':
        return <AccountInformation />;
      default:
        return <AvailableOrders />;
    }
  };

  return (
    <div className="app">
      <Header/>
      <div className='flex-con'>
      <div className="sidebar">
        <button onClick={() => handleSectionClick('AvailableOrders')}>Available Orders</button>
        <button onClick={() => handleSectionClick('ConfirmedOrders')}>Confirmed Orders</button>
        <button onClick={() => handleSectionClick('PickedOrders')}>Picked Orders</button>
        <button onClick={() => handleSectionClick('OrderHistory')}>Order History</button>
        <button onClick={() => handleSectionClick('AccountInformation')}>Account Information</button>
        <button onClick={handleLogout} className="logout-button">Logout</button>

      </div>
      <div className="content">
        {renderContent()}
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default DriverMain;
