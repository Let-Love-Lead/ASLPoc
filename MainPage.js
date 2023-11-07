import React, { useState, useEffect } from 'react';
import './App.css';
import groupsData from './GroupNmems'; // Import your data from the separate file
import UserPanel from './UserPanel';

const MainPage = () => {
  const [selectedGroup, setSelectedGroup] = useState(groupsData[2]); // Default to the first group
  const [newAddUps, setNewAddUps] = useState(''); // State to store the new add ups value

  const [totalAmount, setTotalAmount] = useState(0);
  const [totalAddUps, setTotalAddUps] = useState(0);
  const [loanBalance, setLoanBalance] = useState(selectedGroup.groupLoanAmount - totalAmount);

  const handleAddUpsChange = (id, value) => {
    setNewAddUps(value); // Store the new add ups value
    const updatedMembers = selectedGroup.members.map(member =>
      member.id === id ? { ...member, addUps: parseInt(value) || 0 } : member
    );
    setSelectedGroup({ ...selectedGroup, members: updatedMembers });
  };

  const handleDelete = () => {
    const updatedMembers = selectedGroup.members.filter(member => !member.selected);
    setSelectedGroup({ ...selectedGroup, members: updatedMembers });
  };

  const handleUndo = () => {
    setSelectedGroup(groupsData.find(group => group.id === selectedGroup.id));
  };

  const handleSubmit = () => {
    console.log('Changes saved:', selectedGroup.members); // This data can be sent to a backend API
  };

  useEffect(() => {
    const newTotalAmount = selectedGroup.members.reduce((acc, member) => acc + member.amount, 0);
    const newTotalAddUps = selectedGroup.members.reduce((acc, member) => acc + member.addUps, 0);

    setTotalAmount(newTotalAmount);
    setTotalAddUps(newTotalAddUps);
    setLoanBalance(selectedGroup.groupLoanAmount - (newTotalAmount /*+ newTotalAddUps*/));
  }, [selectedGroup]);

  // Add new add ups values to amount after 1 minute
  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedMembers = selectedGroup.members.map(member => ({
        ...member,
        amount: member.amount + member.addUps, // Add new add ups to amount
        addUps: 0, // Reset add ups for new entries
      }));
      setSelectedGroup({ ...selectedGroup, members: updatedMembers });
    }, 1 * 60 * 1000); // 1 minute in milliseconds

    return () => clearTimeout(timer); // Clear the timer if component unmounts or new value is entered
  }, [newAddUps, selectedGroup]);

  return (
    <div className='the-table-container'>
      <div className='user-panel'>
        <UserPanel />
      </div>
      <div className='main-page'>
        <div className='group-info'>
          <h3>Group Name: {selectedGroup.groupName}</h3>
          <h3>Group Code: {selectedGroup.groupCode}</h3>
          <h4>Group Loan Amount: {selectedGroup.groupLoanAmount}</h4>
          <h4>Loan Balance: {loanBalance}</h4>
        </div>
        <table>
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Account Number</th>
              <th>Amount</th>
              <th>Add Ups</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {selectedGroup.members.map(member => (
            <tr key={member.id}>
              <td>{member.accountName}</td>
              <td>{member.accountNumber}</td>
              <td>{member.amount}</td>
              <td>
                <input type="general" value={member.addUps}
                  onChange={e => handleAddUpsChange(member.id, e.target.value)}
                />
              </td>
              <td>
                <input type="checkbox" checked={member.selected}
                  onChange={() => {
                    const updatedMembers = selectedGroup.members.map(m =>
                      m.id === member.id ? { ...m, selected: !m.selected } : m
                    );
                    setSelectedGroup({ ...selectedGroup, members: updatedMembers });
                  }}
                />
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        <div className='buttons'>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleUndo}>Undo</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className='totals'>
          <h3>Total Amount: {totalAmount}</h3>
          <h3>Total Add Ups: {totalAddUps}</h3>
        </div>
      </div>
    </div>
);
};

export default MainPage;
