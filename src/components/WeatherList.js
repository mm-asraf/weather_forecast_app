import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Chart from "../chart/Chart";
import HumChart from "../chart/HumChart";
import "./weather.css";
import WeatherCard from "./WeatherCard";

const WeatherList = ({ weathers }) => {
  return (
    <>
      <div className="sm2_container">
        {weathers.map(({ dt, main, weather }) => (
          <Col key={dt}>
            <WeatherCard
              temp_max={main.temp_max}
              temp_min={main.temp_min}
              dt={dt * 1000}
              main={weather[0].main}
              icon={weather[0].icon}
            />
          </Col>
        ))}
      </div>
      <div className="chart">
        <Chart />
        <div className="det">
          <div className="press common">
            <h5>Pressure</h5>
            <p>1000hp</p>
          </div>
          <div className="humid common">
            <h5>Humidity</h5>
            <p>36%</p>
          </div>
        </div>
        <div className="sun">
          <div className="f1">
            <h5>Sunrise</h5>
            <p>5:30am</p>
          </div>
          <div className="f2">
            <h5>Sunset</h5>
            <p>6:30pm</p>
          </div>
        </div>
        <HumChart />
      </div>
    </>
  );
};

export default WeatherList;
