import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', formData)
      .then(response => {
        alert('Login successful!');
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(response.data));
        // Navigate to the dashboard and pass user data
        navigate('/DriverD', { state: { user: response.data } });
      })
      .catch(error => {
        alert('Invalid email or password');
        console.error('There was an error logging in!', error);
      });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <p>Register 
      <Link to="/SignUp">Sign up</Link>

      </p>
      <form onSubmit={handleSubmit}>
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
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
