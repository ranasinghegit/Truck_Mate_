import React from 'react';
import Header from '../components/Header';
import OrderList from '../Dashboards/driver_dashboard/OrderList';
import Footer from '../components/Footer';

function Layout() {
  return (
    <div>
      <Header />
    <OrderList/>
      <Footer />
    </div>
  );
}



export default Layout;
