import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const TemperatureGraph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Temperature",
        data: [0],
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        color:  "#000000",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  Chart.register({});

  return (
    <div>
      <Bar data={data} options={options} style={{ backgroundColor: "white"}}/>
    </div>
  );
};

export default TemperatureGraph;
