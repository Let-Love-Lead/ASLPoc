import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const defaultCredentials = {
  username: 'admin',
  password: 'password123'
};

function LoginForm() {
  // const [formData, setFormData] = useState({ username: '', password: '' });
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState('');
  // const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsername({ ...userName, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.username === defaultCredentials.username && passWord.password === defaultCredentials.password) {
      setError('');
      alert('Login successful!');
      // navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>AdminLogin</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={userName.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={passWord.password}
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

export default LoginForm;
