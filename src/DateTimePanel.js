import React from 'react';

const DateTimePanel = () => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h2>Date: {currentDate}</h2>
      <h2>Time: {currentTime}</h2>
    </div>
  );
};

export default DateTimePanel;
