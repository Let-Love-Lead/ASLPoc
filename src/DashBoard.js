import React from 'react';
import './App.css';
import DateTimePanel from './DateTimePanel';
import DataPanel from './DataPanel';
import SearchButton from './SearchButton';
import HistoryPanel from './HistoryPanel';
// import Chart from './Chart';

const DashBoard = () => {
    return (
    <div className="section">
        <div className="column">
            <DateTimePanel />
            <DataPanel />
            {/* <Chart /> */}
        </div>
        <div className="column">
            <SearchButton />
            <HistoryPanel />
        </div>
    </div>
  );
};

export default DashBoard;
