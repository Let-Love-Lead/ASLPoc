import React, { useState } from 'react';
import groupsData from './GroupNmems';
import { useNavigate } from 'react-router';

const HistoryTable = () => {
  
  const navigate = useNavigate ();

  const handleHistory =() => {
    navigate('/historytable');
  };

  return (
    <div className="the-table-container">
      <div className="column">
        <h2>History</h2>
        <table>
          <thead>
            <tr>
              <th>Groups</th>
              <th>HExpected</th>
              <th>HCollected</th>
            </tr>
          </thead>
          <tbody>
            {groupsData.map((group, index) => (
              <tr key={index}>
                <td>{group.groupName}</td>
                <td>{group.groupLoanAmount}</td>
                <td>{group.members.reduce((acc, member) => acc + member.amount, 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleHistory}>Show More</button>
      </div>
    </div>
  );
};

export default HistoryTable;
