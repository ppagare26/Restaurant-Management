import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const doughnutData = {
    labels: ['Korean', 'North Indian', 'South Indian', 'Chinese', 'Italian'],
    datasets: [
      {
        data: [26.4, 21.7, 30.2, 17, 4.7],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };
const DoughnutComponent = () => {
  return (
    <div className="w-full lg:w-1/2 p-4 bg-gray-800 rounded-lg mb-4">
                <Doughnut data={doughnutData} options={{ maintainAspectRatio: true }} />
    </div>
  )
}

export default DoughnutComponent