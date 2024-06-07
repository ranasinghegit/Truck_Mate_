import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './DDashboard.jsx';
import Orders from './Orders';
import OrderDetails from './OrderDetails';
import Sidebar from './Sidebar';
import Drivers from './Drivers';
import Customers from './Customers';
import Header from '../../components/Header.jsx';
import './DApp.css';

function DApp() {
  return (
    <div><Header/>
    <div className="DApp">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
    </div>
    </div>
  );
}

export default DApp;
