import React from 'react'
import { Bar } from 'react-chartjs-2';

const barData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Online Sale',
        data: [5, 10, 15, 20, 25, 20, 15],
        backgroundColor: '#36A2EB',
      },
      {
        label: 'Offline Sale',
        data: [3, 7, 12, 17, 22, 19, 14],
        backgroundColor: '#FF6384',
      },
    ],
  };
const BarComponent = () => {
  return (
    <div className="w-full lg:w-1/2 p-4 bg-gray-800 rounded-lg mb-4">
    <Bar data={barData} options={{ maintainAspectRatio: false }} />
  </div>
  )
}

export default BarComponent