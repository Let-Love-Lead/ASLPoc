import React, { useState } from 'react';
import groupsData from './GroupNmems';
import UserPanel from './UserPanel';

const HistoryTable = () => {
  const [showMoreHistory, setShowMoreHistory] = useState(false);

  return (
    <div className="the-table-container">
      <div className="user-panel">
        <UserPanel />
      </div>
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
        {showMoreHistory}
        <button onClick={() => setShowMoreHistory(!showMoreHistory)}>
          {showMoreHistory ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default HistoryTable;
