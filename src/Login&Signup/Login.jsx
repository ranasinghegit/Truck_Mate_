import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginType, setLoginType] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const navigate = useNavigate();

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
        const { email, password, rememberMe } = formData;

        if (!email || !password) {
            alert('All fields are required');
            return;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters');
            return;
        }

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, loginType })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                if (rememberMe) {
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                } else {
                    localStorage.removeItem('email');
                    localStorage.removeItem('password');
                }
                alert('Login successful!');
                console.log('Form submitted:', formData, 'Login type:', loginType);
                // Redirect to admin page after successful login
                navigate('/admin');
            } else {
                alert('Invalid email or password');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const handleSignupClick = (e) => {
        if (!loginType) {
            e.preventDefault();
            alert('Please choose your user state');
        }
    };

    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        if (savedEmail && savedPassword) {
            setFormData({ email: savedEmail, password: savedPassword, rememberMe: true });
        }
    }, []);

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <p style={{ fontSize: '30px', fontWeight: 'normal' }}>LOG IN YOUR ACCOUNT</p>
                <br /><br />
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
                <br />
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
            <style>{`
                .login-container {
                    max-width: 600px;
                    margin: 30px auto;
                    padding: 100px;
                    font-family: Arial, sans-serif;
                }

                .login-form {
                    display: flex;
                    flex-direction: column;
                    align-items: left;
                }

                .login-form p {
                    text-align: center;
                }

                .login-form label {
                    display: block;
                    margin-bottom: 15px;
                    margin-left: 110px;
                }

                .login-form input[type="email"],
                .login-form input[type="password"] {
                    width: 60%;
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    margin-left: 110px;
                }

                .remember-me {
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                }

                .remember-me input {
                    margin-right: -100px;
                    margin-bottom: 15px;
                    margin-left: 110px;
                }

                .login-submit {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    background-color: #318FE7;
                    color: white;
                    width: 65%;
                    margin-left: 110px;
                }
            `}</style>
        </div>
    );
};

export default Login;
