import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import HomePage from "./Home/Home";
import Login from "./Dashboards/Login";
import Signup from "./Dashboards/SignUp";
import DriverMain from "./Dashboards/DriverDashboard/DriverMain";
import AccountInformation from "./Dashboards/DriverDashboard/AccountInformation";
import VehicleRegistration from "./Dashboards/VehicleRegistration";
import "./App.css";

function App() {

 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/Login/Signup" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/DriverD" element={<DriverMain />} />
        <Route path="/AccountInformation" element={<AccountInformation />} />
        <Route path="/VehicleRegistration" element={<VehicleRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
