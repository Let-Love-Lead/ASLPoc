import React, { useState } from 'react';
import groupsData from './GroupNmems';
import { useNavigate } from 'react-router';

const DailyTable = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showMoreDaily, setShowMoreDaily] = useState(false);
  const navigate = useNavigate ();

  const handleDaily =() => {
    navigate('/dailytable');
  };

  const calculateExpected = (loanBalance) => {
    let expected;
    if (loanBalance > 500) {
      expected = 500;
    } else {
      expected = loanBalance;
    }
    return expected;
  };

  return (
    <div className="the-table-container">
      <div className="column">
        <h2>Daily</h2>
        <table>
          <thead>
            <tr>
              <th>Groups</th>
              <th>Expected</th>
              <th>Collected</th>
            </tr>
          </thead>
          <tbody>
            {groupsData.map((group, index) => (
              <tr key={index}>
                <td>{group.groupName}</td>
                <td>{calculateExpected(group.groupLoanAmount)}</td>
                <td>{group.members.reduce((acc, member) => acc + member.addUps, 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {showMoreDaily}
        <button onClick={handleDaily}>Show More</button>
      </div>
    </div>
  );
};

export default DailyTable;
