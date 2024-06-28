import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import './VehicleRegistration.css';

function VehicleRegistration() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state || {}; // Added default value to avoid undefined errors

  useEffect(() => {
    console.log('VehicleRegistration component mounted');
    console.log('userId:', userId);
  }, []);

  const [formData, setFormData] = useState({
    vehicleModel: '',
    size: '',
    maxWeight: '',
    category: '',
    numberPlate: '',
    province: '',
    revenueLicense: '',
    insuranceNumber: ''
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
    console.log('Submitting form with data:', { ...formData, userId });
    axios.post('http://localhost:5000/api/vehicles', { ...formData, userId })
      .then(response => {
        swal({
          title: "Success",
          text: "Vehicle registration completed!",
          icon: "success",
          button: "OK",
        }).then(() => {
          navigate("/Login/Signup");
        });
      })
      .catch(error => {
        swal({
          title: "Error",
          text: "There was an error registering the vehicle",
          icon: "error",
          button: "OK",
        });
        console.error('Error registering vehicle:', error);
      });
  };

  return (
    <div className="vehicle-registration">
      <h2>Vehicle Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Vehicle Model:
          <input
            type="text"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Choose Size:
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          >
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <label>
          Max Weight:
          <input
            type="text"
            name="maxWeight"
            value={formData.maxWeight}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number Plate:
          <input
            type="text"
            name="numberPlate"
            value={formData.numberPlate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Province:
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Revenue License:
          <input
            type="text"
            name="revenueLicense"
            value={formData.revenueLicense}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Insurance Number:
          <input
            type="text"
            name="insuranceNumber"
            value={formData.insuranceNumber}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Register Vehicle</button>
      </form>
    </div>
  );
}

export default VehicleRegistration;
