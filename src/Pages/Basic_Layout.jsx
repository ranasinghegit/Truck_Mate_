import React from 'react';
import Header from '../components/Header';
import COrderList from '../Dashboards/Customer_Dashboard/COrderList';
import Footer from '../components/Footer';

function Layout() {
  return (
    <div>
      <Header />
    <COrderList/>
      <Footer />
    </div>
  );
}



export default Layout;
