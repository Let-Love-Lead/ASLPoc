import React, { useRef, useEffect } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Legend } from 'chart.js';
import groupsData from './GroupNmems';


// Register necessary chart elements and scales
Chart.register(CategoryScale, LinearScale, BarController, BarElement, Legend);

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const calculateExpected = (loanBalance) => {
    let expected;
    if (loanBalance > 500) {
      expected = 500;
    } else {
      expected = loanBalance;
    }
    return expected;
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Check if there's an existing chart instance and destroy it
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance with the updated data
    const chartData = {
      labels: groupsData.map(item => item.groupName),
      datasets: [
        {
          label: 'Expected',
          data: groupsData.map(item => calculateExpected(item.groupLoanAmount)),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Collected',
          data: groupsData.map(item => item.members.reduce((acc, member) => acc + member.addUps, 0)),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          x: {
            type: 'category',
            labels: groupsData.map(item => item.groupName),
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Return a cleanup function to destroy the chart when the component unmounts or when groupsData changes
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return <canvas ref={chartRef} width={400} height={400}></canvas>;
};

export default BarChart;
