// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/Orders">Orders</Link></li>
        <li><Link to="/drivers">Drivers</Link></li>
        <li><Link to="/customers">Customers</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
