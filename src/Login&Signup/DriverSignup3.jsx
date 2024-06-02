import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DriverSignup3 = () => {
    const [formData, setFormData] = useState({
        vehicleNumberPlate: '',
        province: '',
        revenueLicenseNumber: '',
        insuranceNumber: '',
        si: ''
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
        const { vehicleNumberPlate, province, revenueLicenseNumber, insuranceNumber, si } = formData;

        // Basic validations
        if (!vehicleNumberPlate || !province || !revenueLicenseNumber || !insuranceNumber || !si) {
            alert('All fields are required');
            return;
        }

        console.log('Form submitted:', formData);
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <p style={{ fontSize: '30px', fontWeight: 'normal' }}>SIGN UP AN ACCOUNT</p>
                <p>Enter Your Vehicle Details</p>
                
                <div id="contain">
                    <div style={{ flex: 1 }}>
                        <label htmlFor="vehicleNumberPlate">Vehicle Number Plate</label>
                        <input
                            type="text"
                            id="vehicleNumberPlate"
                            name="vehicleNumberPlate"
                            style={{ width: '100%' }}
                            value={formData.vehicleNumberPlate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label htmlFor="province">Province</label>
                        <select
                            id="province"
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                            required
                            style={{ width: '45%' }}
                        >
                            <option value="">Select Province</option>
                            <option value="Central">Central</option>
                            <option value="Eastern">Eastern</option>
                            <option value="North Central">North Central</option>
                            <option value="Northern">Northern</option>
                            <option value="North Western">North Western</option>
                            <option value="Sabaragamuwa">Sabaragamuwa</option>
                            <option value="Southern">Southern</option>
                            <option value="Uva">Uva</option>
                            <option value="Western">Western</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="revenueLicenseNumber">Revenue License Number</label>
                    <input
                        type="text"
                        id="revenueLicenseNumber"
                        name="revenueLicenseNumber"
                        value={formData.revenueLicenseNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="insuranceNumber">Insurance Number</label>
                    <input
                        type="text"
                        id="insuranceNumber"
                        name="insuranceNumber"
                        value={formData.insuranceNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="si">SI</label>
                    <input
                        type="text"
                        id="si"
                        name="si"
                        value={formData.si}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="button-container">
                    <Link to="/driver2" className="signup-submit">BACK</Link>
                    <button type="submit" style={{width:'60%'}} className="signup-submit">SIGN UP</button>
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
                    gap: 30px;
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

                #contain {
                    display: flex;
                    gap: 30px;
                   width:135%
                }
                
                .signup-form select {

 width: 97%;
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 8px;



                }

                .signup-form input[type="text"]{
               
                    width: 97%;
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

export default DriverSignup3;
