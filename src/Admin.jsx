import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const navigate = useNavigate();
  const [drivers, setDrivers] = useState([]);

  const handleButtonClick = () => {
    navigate('/signup');
  };

  const handleChangePasswordClick = () => {
    navigate('/change-password');
  };

  const fetchDrivers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/drivers');
      setDrivers(response.data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/drivers/${id}`);
      fetchDrivers();
    } catch (error) {
      console.error('Error deleting driver:', error);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Admin Panel</h1>
      <button 
        style={{
          backgroundColor: '#318FE7',
          color: 'white',
          border: 'none',
          marginLeft: '50%',
          borderRadius: '5px',
          padding: '10px 20px',
          cursor: 'pointer',
          marginTop: '20px',
          marginRight: '10px'
        }}
        onClick={handleButtonClick}
      >
        Make an Admin
      </button>
      <button 
        style={{
          backgroundColor: '#318FE7',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
        onClick={handleChangePasswordClick}
      >
        Change Password
      </button>

      <h2 style={{ marginTop: '40px' }}>Driver List</h2>
      <table style={{ width: '80%', margin: '0 auto', marginTop: '20px', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>ID Number</th>
            <th style={tableHeaderStyle}>Vehicle Number</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>License Number</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.id} style={tableRowStyle}>
              <td style={tableCellStyle}>{driver.id}</td>
              <td style={tableCellStyle}>{driver.name}</td>
              <td style={tableCellStyle}>{driver.id_number}</td>
              <td style={tableCellStyle}>{driver.vehicle_number}</td>
              <td style={tableCellStyle}>{driver.email}</td>
              <td style={tableCellStyle}>{driver.license_number}</td>
              <td style={tableCellStyle}>
                <button
                  style={deleteButtonStyle}
                  onClick={() => handleDelete(driver.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableHeaderStyle = {
  backgroundColor: 'white',
  color: 'black',
  padding: '10px',
  border: '1px solid #ddd'
};

const tableRowStyle = {
  borderBottom: '1px solid #ddd'
};

const tableCellStyle = {
  padding: '10px',
  textAlign: 'center',
  border: '1px solid #ddd'
};

const deleteButtonStyle = {
  backgroundColor: '#ff4d4d',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '5px 10px',
  cursor: 'pointer'
};

export default Admin;
