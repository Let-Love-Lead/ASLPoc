import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashBoard from './DashBoard'; 
import MainPage from './MainPage';
import DailyTable from './DailyTable';
import HistoryTable from './HistoryTable';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/DashBoard"
            element={<DashBoard/>}
          />
          <Route path="/MainPage" element={<MainPage/>}/>
          <Route path="/DailyTable" element={<DailyTable/>} />
          <Route path="HistoryTable" element={<HistoryTable/>} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
