import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { lineChart, barChart } from '../ChartData';
import { Chart as ChartJS } from 'chart.js/auto';

const ChartComponent = () => {
  const lineChartData = {
    labels: lineChart.labels.map((label) => label),
    datasets: [
      {
        label: lineChart.title,
        data: lineChart.data.map((item) => item),
        borderColor: '#4CAF50',
        fill: false,
      },
    ],
  };
  const columnChartData = {
    labels: barChart.labels.map((label) => label),
    datasets: [
      {
        label: barChart.title,
        data: barChart.data.map((item) => item),
        backgroundColor: '#4CAF50',
      },
    ],
  };
  return (
    <div className='max-w-screen-lg mx-auto mt-10'>
      <h2 className='text-3xl font-bold mb-4'>Chart</h2>
      <div className='sm:grid sm:grid-cols-2 flex flex-col gap-8 justify-center'>
        <div>
          <h3 className='text-xl font-bold mb-2'>Monthly Sales Performance</h3>
          <Line
            data={lineChartData}
            options={{
              responsive: true,
              scales: {
                x: {
                  grid: {
                    display: true,
                    color: '#ddd',
                  },
                },
                y: {
                  beginAtZero: true,
                  grid: {
                    color: '#ddd',
                  },
                },
              },
            }}
          />
        </div>
        <div>
          <h3 className='text-xl font-bold mb-2'>Sales Performance</h3>
          <Bar
            data={columnChartData}
            options={{
              responsive: true,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  beginAtZero: true,
                  grid: {
                    color: '#ddd',
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
