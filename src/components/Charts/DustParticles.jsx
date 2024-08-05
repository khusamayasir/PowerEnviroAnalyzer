import React from "react";
import { Line } from "react-chartjs-2";

const DustParticleGraph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Dust Particles",
        data: [0],
        borderDash: [5, 5],
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

  return (
    <div>
      <Line data={data} options={options} style={{ backgroundColor: "white"}}/>
    </div>
  );
};

export default DustParticleGraph;
