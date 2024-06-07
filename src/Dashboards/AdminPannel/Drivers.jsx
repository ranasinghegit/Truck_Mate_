import React, { useEffect, useState } from 'react';
import Header from '../../components/Header.jsx';
import axios from 'axios';
import './Drivers.css';

function Drivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/drivers');
      setDrivers(response.data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  const handleDeleteDriver = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/drivers/${id}`);
      setDrivers(drivers.filter(driver => driver.user_id !== id));
    } catch (error) {
      console.error('Error deleting driver:', error);
    }
  };

  return (
    <div className='droot'>
      <Header />
      <h1>Drivers</h1>
      <h2>Available Drivers</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>NIC Number</th>
            <th>Password</th>
            <th>User Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.user_id}>
              <td>{driver.user_id}</td>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver.mobile_number}</td>
              <td>{driver.nic_number}</td>
              <td>{driver.password}</td>
              <td>{driver.user_type}</td>
              <td>
                <button onClick={() => handleDeleteDriver(driver.user_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Drivers;
