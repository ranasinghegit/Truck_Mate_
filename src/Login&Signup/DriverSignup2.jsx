import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DriverSignup2 = () => {
    const [vehicleData, setVehicleData] = useState({
        vehicleModel: '',
        size: '',
        maxWeight: '',
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicleData({
            ...vehicleData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { vehicleModel, size, maxWeight, category } = vehicleData;

        // Basic validations
        if (!vehicleModel || !size || !maxWeight || !category) {
            alert('All fields are required');
            return;
        }

        console.log('Form submitted:', vehicleData);
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <p style={{ fontSize: '30px', fontWeight: 'normal' }}>SIGN UP AN ACCOUNT</p>
                <p>Enter Your Vehicle Details</p>
                <br/><br/><br/>
                <div>
                    <label htmlFor="vehicleModel">Vehicle Model</label>
                    <input
                        type="text"
                        id="vehicleModel"
                        name="vehicleModel"
                        value={vehicleData.vehicleModel}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="size">Choose Size</label>
                    <select
                        id="size"
                        name="size"
                        value={vehicleData.size}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="maxWeight">Max Weight</label>
                    <select
                        id="maxWeight"
                        name="maxWeight"
                        value={vehicleData.maxWeight}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Weight</option>
                        <option value="1000">1000 lbs</option>
                        <option value="2000">2000 lbs</option>
                        <option value="3000">3000 lbs</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={vehicleData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="truck">Truck</option>
                    </select>
                </div>

                <div className="button-container">
                    <Link to="/driver" className="signup-submit">BACK</Link>
                    <Link to="/driver3" className="signup-submit">NEXT</Link>
                </div>
            </form>
            <style>{`
                .signup-container {
                    max-width: 600px;
                    margin: 30px auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }

                .signup-form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    align-items: left;
                }

                .signup-form p {
                    margin-bottom: -15px;
                    text-align: center;
                }

                .signup-form label {
                    display: block;
                    margin-bottom: 15px;
                }
          

                .signup-form input[type="text"]{
                    width: 97%;
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                }
        
                .signup-form select {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                }

                .signup-submit {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    background-color: #318FE7;
                    color: white;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    width:20%;
                }

                .button-container {
                    display: flex;
                    justify-content: space-between;
                }
            `}</style>
        </div>
    );
};

export default DriverSignup2;
