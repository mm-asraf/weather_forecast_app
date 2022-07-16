import React from "react";
import { Card } from "react-bootstrap";
import locate from "../Images/maps-and-flags.png";
import "./weather.css";
const Weather = ({ dt, temp_min, temp_max, main, icon }) => {
  const date = new Date(dt);
  return (
    <div className="weather_container">
      <div className="card_container">
        <div className="inp">
          <img
            src={locate}
            alt="location"
            className="img_location"
            width="25px"
          />
          <input type="search" className="input" />
        </div>
      </div>
      <Card className="c_size">
        <Card.Img
          variant="top"
          style={{ width: "70px" }}
          className="c_img"
          // get the src from example url and pass the icon prop for icon code
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <Card.Body className="detail">
          <h5>{main}</h5>
          <br />
          {/*  datetime is received in milliseconds, let's turn into local date time */}
          <span>
            {date.toLocaleDateString()} - {date.toLocaleTimeString()}
          </span>
          <br />
          {/* minimum temperature */}
          <span>Min: {temp_min}</span>
          <br />
          {/* maximum temperature */}
          <span>Max: {temp_max}</span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Weather;
