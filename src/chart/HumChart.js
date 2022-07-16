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
    time: 0,
    celci: 10,
    temp: "1",
    timeline: "5 am",
  },
  {
    time: 20,
    celci: 20,
    temp: "2",
    timeline: "2 pm",
  },
  {
    time: 0,
    celci: 30,
    temp: "3",
    timeline: "6 pm",
  },
];

const HumChart = () => {
  const [data, setData] = useState({
    labels: AnalyticsData.map((d) => d.timeline),
    timeline: 10,

    datasets: [
      {
        label: "Mid ",
        data: AnalyticsData.map((d) => d.time),
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
            {/* <h2 className="head"></h2> */}

            <Line data={data}></Line>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumChart;

//  backgroundColor: "linear-gradient(90deg, rgba(252,146,154,1) 0%, rgba(255,229,231,1) 35%)",
