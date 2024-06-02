import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginType, setLoginType] = useState('user');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleLoginTypeChange = (type) => {
        setLoginType(type);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;
        if (!email || !password) {
            alert('All fields are required');
            return;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters');
            return;
        }
        console.log('Form submitted:', formData);
    };

    return (
        <div className="login-container">
            <div className="login-buttons">
                <button
                    className={`login-button ${loginType === 'user' ? 'active' : ''}`}
                    onClick={() => handleLoginTypeChange('user')}
                >
                    User
                </button>
                <button
                    className={`login-button ${loginType === 'driver' ? 'active' : ''}`}
                    onClick={() => handleLoginTypeChange('driver')}
                >
                    Driver
                </button>
                <button
                    className={`login-button ${loginType === 'admin' ? 'active' : ''}`}
                    onClick={() => handleLoginTypeChange('admin')}
                >
                    Admin
                </button>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                <p style={{fontSize:'30px',fontWeight:'normal'}}>LOG IN YOUR ACCOUNT</p>
                <p>Don't have an account? <Link to="/signup">SIGN UP</Link></p>
                <br/><br/><br/><br/>
                <div>
                    <label>Your Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <br/>
                <div>
                    <label>Your Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                        minLength="8"
                    />
                </div>
                <div className="remember-me">
                    <input 
                        type="checkbox" 
                        name="rememberMe" 
                        checked={formData.rememberMe} 
                        onChange={handleChange} 
                    />
                    <label>Remember me</label>
                </div>
                <button type="submit" className="login-submit">LOG IN</button>
            </form>
            <style >{`
                .login-container {
                    max-width: 600px;
                    margin: 30px auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }

                .login-buttons {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 20px;
                }

                .login-button {
                    padding: 10px 40px;
                    margin: 0 30px;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    background-color: white;
                    border: 1px solid black;
                    color: black;
                }

                .login-button.active {
                    background-color: #318FE7;
                    color: white;
                }

                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    align-items: left;
                }

                .login-form h2 {
                    text-align: center;
                }

                .login-form p {
                    margin-bottom: -15px;
                    text-align: center;
                }

                .login-form label {
                    display: block;
                    margin-bottom: 15px;
                }

                .login-form input[type="email"],
                .login-form input[type="password"] {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                }

                .remember-me {
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                }

                .remember-me input {
                    margin-right: 10px;
                    margin-bottom: 15px;
                }

                .login-submit {
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

export default Login;
