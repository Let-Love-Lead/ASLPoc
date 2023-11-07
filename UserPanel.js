import React from 'react';
import { useNavigate } from 'react-router-dom';
import BarChart from './BarChart';

const UserPanel = () => {
  const userName = "Dzah Emmanuel";
  const currentDateTime = new Date().toLocaleString();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleDaily =() => {
    navigate('/dailytable');
  };

  const handleHistory =() => {
    navigate('/historytable');
  };

  const handleDashboard = () =>{
    navigate('/dashboard')
  };

  return (
    <div>
        <div className="user-panel">
            <div className="user-panel">
                <p>Welcome, {userName}!</p>
            </div>
            <div className="date-time-panel">
                <p>{currentDateTime}</p>
            </div>
        </div>
        <div><button onClick={handleDaily}>Daily Records</button></div>
        <div><button onClick={handleDashboard}>Dashboard</button></div>
        <div><button onClick={handleHistory}>History Records</button></div>
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
        <div><BarChart /></div>
    </div>
  );
};

export default UserPanel;