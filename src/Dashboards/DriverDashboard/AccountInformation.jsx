import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import './AccountInformation.css';

function AccountInformation() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    user_id: '',
    name: '',
    email: '',
    mobileNumber: '',
    nicNumber: '',
    password: ''
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      axios.get(`http://localhost:5000/api/user/${user.user_id}`)
        .then(response => {
          setUserDetails(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the user details!', error);
        });
    } else {
      navigate('/Login/Signup');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/user/${userDetails.user_id}`, userDetails)
      .then(response => {
        swal({
          title: "Success",
          text: "Successfully updated your details!",
          icon: "success",
          button: "OK",
        }).then(() => {
          navigate("/DriverD"); // Navigate to DriverMain component
        });
      })
      .catch(error => {
        swal({
          title: "Error!",
          text: "There was an error updating your details!",
          icon: "error",
          button: "OK",
        });
        console.error('There was an error updating the details!', error);
      });
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('user');
  //   navigate('/Login/Signup');
  // };

  return (
    <div className="dashboard">
      <h2>Driver Dashboard</h2>
      <div className="account-info">
        <h3>Account Information</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mobile Number:
            <input
              type="tel"
              name="mobileNumber"
              value={userDetails.mobileNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            NIC Number:
            <input
              type="text"
              name="nicNumber"
              value={userDetails.nicNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={userDetails.password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Update</button>
        </form>
        {/* <button onClick={handleLogout} className="logout-button">Logout</button> */}
      </div>
    </div>
  );
}

export default AccountInformation;
