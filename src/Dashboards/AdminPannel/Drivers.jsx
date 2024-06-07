import React, { useEffect, useState } from 'react';
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
      setDrivers(drivers.filter(driver => driver.id !== id));
    } catch (error) {
      console.error('Error deleting driver:', error);
    }
  };

  return (
    <div>
      <h1>Drivers</h1>
      <h2>Available Drivers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>NIC</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.id}>
              <td>{driver.id}</td>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver.mobile}</td>
              <td>{driver.NIC}</td>
              <td>{driver.password}</td>
              <td>
                <button onClick={() => handleDeleteDriver(driver.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Drivers;
