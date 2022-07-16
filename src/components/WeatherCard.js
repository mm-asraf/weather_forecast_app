import React from "react";
import { Card } from "react-bootstrap";
import locate from "../Images/maps-and-flags.png";
import "./weather.css";

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
  const date = new Date(dt);
  return (
    <>
      <div className="card_container">
        <div className="sm_container">
          <span>Min: {temp_min}</span>
          <br />

          <span>Max: {temp_max}</span>
          <br />
          <img
            className="c_img"
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="ic"
          />

          <br />

          <span>{date.toLocaleDateString()} </span>
          <br />
          <span>{date.toLocaleTimeString()}</span>
          <br />
          <h5>{main}</h5>
        </div>
      </div>
      {/* chart */}
    </>
  );
};

export default WeatherCard;
