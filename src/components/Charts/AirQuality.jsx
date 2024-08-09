import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const AirQualityGraph = () => {
  const [air, setAir] = useState([50, 60, 55, 70, 65, 75]);
  const [labels, setLabels] = useState([
    "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
    "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDoc();
    }, 300000);

    return () => clearInterval(intervalId);
  }, []);

  const setDoc = () => {
    // axios.get(`http://localhost:8000/getSensorData`)
    //   .then(res => {
    //     const newData = res.data.slice(-24);
    //     setAir(newData);
    //     setLabels([...labels.slice(-24)]);
    //     console.log(res, `from our server`);
    //   })
    //   .catch(e => console.log(e));
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Air Quality",
        data: air,
        fill: false,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        }
      },
      y: {
        title: {
          display: true,
          text: 'Air Quality',
        },
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

export default AirQualityGraph;