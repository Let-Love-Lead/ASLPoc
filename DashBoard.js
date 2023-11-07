import React, { useState } from 'react';
import './App.css';
import UserPanel from './UserPanel';
import DailyTable from './DailyTableDash';
import HistoryTable from './HistoryTableDash';

const Dashboard = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className="dashboard-container">
      <div className="user-panel">
        <UserPanel />
      </div>
      <div className="column">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Group Name"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button className='button'>Search</button>
        </div>
        <div className="the-table-container">
            <DailyTable />
            <HistoryTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
