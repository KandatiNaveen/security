
import React from 'react';
import './DonutChartsPage.css'; 
import {Chart,ArcElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'
import Card from 'react-bootstrap/Card'
//import CardDeck from 'react-bootstrap/CardDeck'
Chart.register(ArcElement)

const chartData1 = {
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ['red', 'green'],
    },
  ],
};

const chartData2 = {
  datasets: [
    {
      data: [50, 50],
      backgroundColor: ['red', 'green'],
    },
  ],
};

const chartData3 = {
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ['red', 'green'],
    },
  ],
};

const chartData4 = {
  datasets: [
    {
      data: [20, 80],
      backgroundColor: ['red', 'green'],
    },
  ],
};

const chartOptions = {
  cutout: '80%',
};

const DonutChartsPage = () => {
  return (
    <div className="doughnut-container">
    {/* First Donut Chart */}
    <Doughnut style={{ margin: '40px' }} data={chartData1} options={chartOptions} />

    {/* Second Donut Chart */}
    <Doughnut style={{ margin: '40px' }} data={chartData2} options={chartOptions} />

    {/* Third Donut Chart */}
    <Doughnut style={{ margin: '40px' }} data={chartData3} options={chartOptions} />

    {/* Fourth Donut Chart */}
    <Doughnut style={{ margin: '40px' }} data={chartData4} options={chartOptions} />
  </div>
  );
};

export default DonutChartsPage;
