import React from "react";
import { Card } from "react-bootstrap";
import locate from "../Images/maps-and-flags.png";
import "./weather.css";

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
  const date = new Date(dt);
  return (
    <div className="card_container">
      <div className="sm_container">
        <img
          className="c_img"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="ic"
        />

        <h5>{main}</h5>
        <br />

        <span>{date.toLocaleDateString()} </span>
        <br />
        <span>{date.toLocaleTimeString()}</span>
        <br />

        <span>Min: {temp_min}</span>
        <br />

        <span>Max: {temp_max}</span>
      </div>
    </div>
  );
};

export default WeatherCard;
