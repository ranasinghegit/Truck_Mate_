import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
        const { name, email, mobileNumber, nicNumber, password } = formData;

        // Basic validations
        if (!name || !email || !mobileNumber || !nicNumber || !password) {
            alert('All fields are required');
            return;
        }
        if (!/^[0-9]{10}$/.test(mobileNumber)) {
            alert('Mobile number must be 10 digits and start with 0');
            return;
        }
        if (!/^[0-9]{12}$/.test(nicNumber) && !/^[0-9]{9}v$/i.test(nicNumber)) {
            alert('NIC number must be 12 digits or 9 digits ending with "v"');
            return;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters');
            return;
        }

        // Send form data to the backend
        fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            console.log('Form submitted:', formData);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <p style={{ fontSize: '30px', fontWeight: 'normal' }}>MAKE AN ADMIN</p>
                <p>Go back <Link to="/admin">BACK</Link></p>
                <br/><br/><br/>
                <div>
                    <label>Enter Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <div >
                    <label>Enter Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <div id='contain'>
                <div>
                    <label>Mobile Number</label>
                    <input
                       style={{width:'250px'}}
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        pattern="0[0-9]{9}"
                        required
                    />
                </div>
               
                <div>
                    <label>NIC Number</label>
                    <input
                     style={{width:'270px'}}
                        type="text"
                        name="nicNumber"
                        value={formData.nicNumber}
                        onChange={handleChange}
                        pattern="([0-9]{12}|[0-9]{9}v)"
                        required
                    />
                </div>
                </div>
                <br/>
                <div>
                    <label>Enter Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength="8"
                    />
                </div>
                <button type="submit" className="signup-submit">SIGN UP</button>
            </form>
            <style >{`
                .signup-container {
                    max-width: 600px;
                    margin: 30px auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }

                .signup-form {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
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
                #contain{
                    display: flex;
                    gap:30px;
                }

                .signup-form input[type="text"],
                .signup-form input[type="email"],
                .signup-form input[type="password"] {
                    width: 95%;
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                }

                .signup-submit {
                width: 100%;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    background-color: #318FE7;
                    color: white;
                }
            `}</style>
        </div>
    );
};

export default SignUp;
