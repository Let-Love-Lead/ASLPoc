import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const defaultCredentials = {
  username: 'admin',
  password: 'PassWord123'
};

function LoginPage() {
  const [userName, setUsername] = useState('');
  const [passWord, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate hook inside the component body

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === defaultCredentials.username && passWord === defaultCredentials.password) {
      setError('');
      // alert('Login successful!');
      navigate('/dashboard'); // Redirect to dashboard.js upon successful login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Welcome To Adehyeman</h1>
        <div className="form-group">
          <label><h3>Username</h3></label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={userName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label><h3>Password</h3></label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={passWord}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
}

export default LoginPage;



