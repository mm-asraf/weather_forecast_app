import React from "react";
import { useState } from "react";
import "./chart.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const AnalyticsData = [
  {
    payment: 80,
    celci: 10,
    temp: "1",
    timeline: 10,
  },
  {
    payment: 30,
    celci: 20,
    temp: "2",
    timeline: 40,
  },
  {
    payment: 60,
    celci: 30,
    temp: "3",
    timeline: 20,
  },
  {
    payment: 120,
    celci: 20,
    temp: "4",
    timeline: 80,
  },
  {
    payment: 140,
    celci: 70,
    temp: "5",
    timeline: 60,
  },
  {
    payment: 90,
    celci: 10,
    temp: "6",
    timeline: 120,
  },
  {
    payment: 140,
    celci: 70,
    temp: "7",
    timeline: 40,
  },
  {
    payment: 100,
    celci: 80,
    temp: "8",
    timeline: 70,
  },
  {
    payment: 120,
    celci: 30,
    temp: "9",
    timeline: 55,
  },
  {
    payment: 130,
    celci: 100,
    temp: "10",
    timeline: 25,
  },
  {
    payment: 220,
    celci: 70,
    temp: "11",
    timeline: 80,
  },
  {
    payment: 240,
    celci: 120,
    temp: "12",
    timeline: 30,
  },
];

const Chart = () => {
  const [data, setData] = useState({
    labels: AnalyticsData.map((d) => d.temp),
    timeline: 10,

    datasets: [
      {
        label: "39",
        data: AnalyticsData.map((d) => d.celci),
        celci: 20,
        backgroundColor: "rgb(180,222,255)",
        borderColor: "rgb(6,168,250)",
        tension: 0.8,
        fill: true,
        pointStyle: "rect",
        // pointBorderColor: "blue",
        // pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  return (
    <div className="dashboard2">
      <div className="disp">
        <div className="bxe">
          <div className="graph" style={{ width: "700px", height: "auto" }}>
            <h2 className="head">Temperature</h2>

            <Line data={data}></Line>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;

//  backgroundColor: "linear-gradient(90deg, rgba(252,146,154,1) 0%, rgba(255,229,231,1) 35%)",
