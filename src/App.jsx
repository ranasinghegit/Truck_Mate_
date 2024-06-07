import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Home/Home";
import COrderList from "./Dashboards/Customer_Dashboard/COrderList";
import OrderList from "./Dashboards/driver_dashboard/OrderList";
// import Login from "./Login&Signup/Login";
// import SignUp from "./Login&Signup/Signup";
import AdminPanel from "./Dashboards/AdminPannel/DApp"; 



// =====================================================
import Dashboard from "./Dashboards/AdminPannel/DDashboard"; 
import Orders from './Dashboards/AdminPannel/Orders';
import OrderDetails from './Dashboards/AdminPannel/OrderDetails';
import Drivers from './Dashboards/AdminPannel/Drivers';
import Customers from './Dashboards/AdminPannel/Customers';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/YourProfile" element={<COrderList />} />
        <Route path="/YourProfileD" element={<OrderList />} />
        <Route path="/YourProfileA/*" element={<AdminPanel />} />
        {/* <Route path="/Login/Signup" element={<Login />} /> */}
        {/* <Route path="/SignUP" element={<SignUp/>}/> */}



        {/* ================================================ */}
        <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/customers" element={<Customers />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
