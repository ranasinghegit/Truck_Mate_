import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButtons = ({ selectedLoginType, onLoginTypeChange }) => {
    const navigate = useNavigate();

    const handleLoginTypeChange = (type) => {
        onLoginTypeChange(type);
        if (type === 'driver') {
            navigate('/driver-login');
        } else if (type === 'admin') {
            navigate('/admin-login');
        } else if (type === 'user') {
            navigate('/login');
        }
    };

    return (
        <div className="login-buttons">
            <button
                className={`login-button ${selectedLoginType === 'user' ? 'active' : ''}`}
                onClick={() => handleLoginTypeChange('user')}
            >
                User
            </button>
            <button
                className={`login-button ${selectedLoginType === 'driver' ? 'active' : ''}`}
                onClick={() => handleLoginTypeChange('driver')}
            >
                Driver
            </button>
            <button
                className={`login-button ${selectedLoginType === 'admin' ? 'active' : ''}`}
                onClick={() => handleLoginTypeChange('admin')}
            >
                Admin
            </button>
            <style>{`
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
            `}</style>
        </div>
    );
};

export default LoginButtons;
