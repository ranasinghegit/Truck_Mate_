import React from "react";

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import HomePage from "./Home/Home";
import COrderList from "./Dashboards/Customer_Dashboard/COrderList";
import OrderList from "./Dashboards/driver_dashboard/OrderList";



import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// =================================================================


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Homepage" element={<HomePage/>} />

        
        <Route path="/YourProfile" element={<COrderList/>} />
        <Route path="/YourProfileD" element={<OrderList/>} />
        {/* <Route path="/YourProfileA" element={</>} /> */}


      </Route>
    </Routes>


    </BrowserRouter>

        // <HomePage/>









//   // <COrderList />

//   <Accordion defaultActiveKey="0">
//   <Accordion.Item eventKey="0">
//     <Accordion.Header>Accordion Item #1</Accordion.Header>
//     <Accordion.Body>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//       aliquip ex ea commodo consequat. Duis aute irure dolor in
//       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//       culpa qui officia deserunt mollit anim id est laborum.
//     </Accordion.Body>
//   </Accordion.Item>
//   <Accordion.Item eventKey="1">
//     <Accordion.Header>Accordion Item #2</Accordion.Header>
//     <Accordion.Body>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//       aliquip ex ea commodo consequat. Duis aute irure dolor in
//       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//       culpa qui officia deserunt mollit anim id est laborum.
//     </Accordion.Body>
//   </Accordion.Item>
//   <Button variant="outline-warning">Warning</Button>{' '}

// </Accordion>












   
  );
}

export default App;










