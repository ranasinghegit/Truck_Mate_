// App.js
import React from 'react';
import Header from './components/Header';
// import OrderList from './Dashboards/Driver_Dashboard/OrderList';
import Customer_Dashboard from './Dashboards/Customer_Dashboard/COrderList';
import Footer from './components/Footer';
import './App.css';

// =================================================================


function App() {
  return (
    <div>
      <Header />
      {/* <OrderList/> */}
      <Customer_Dashboard />
      <Footer />
    </div>
  );
}

export default App;










