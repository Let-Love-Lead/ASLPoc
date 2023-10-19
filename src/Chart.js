import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);



const PieChart = () => {
    const data = {
        labels: ['Expected', 'Collected'],
        datasets: [
            {
                data: [40, 30], // Dummy data, you can replace it with dynamic values
                backgroundColor: ['#FF6384', '#36A2EB']
            }
        ]
    };
    return <Pie data={data} />;
};
export default PieChart;
