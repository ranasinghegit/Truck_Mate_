import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function SignUp() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    nicNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/signup', formData)
      .then(response => {
        const userId = response.data.userId; // Assuming the server responds with the userId
        alert('Account created successfully!');
        navigate('/VehicleRegistration', { state: { userId } });
  
        setFormData({
          name: '',
          email: '',
          mobileNumber: '',
          nicNumber: '',
          password: ''
        });
      })
      .catch(error => {
        console.error('There was an error creating the account!', error);
      });
  };
  

  return (
    <div className="signup">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Driving License:
          <input
            type="text"
            name="nicNumber"
            value={formData.nicNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
