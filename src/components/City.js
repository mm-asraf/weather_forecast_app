import React, { useEffect, useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { API_KEY, API_BASE_URL } from "../apis/config";

const City = ({ onSearch }) => {
  const [city, setCity] = useState("");

  //
  return (
    <div className="card_container">
      <div className="inp">
        <span className="sp_input">
          <input
            placeholder="Enter city"
            onChange={(event) => setCity(event.target.value)}
            value={city}
          />
        </span>
        <span className="sp_btn">
          <button onClick={() => onSearch(city)} className="input">
            Check Weather
          </button>
        </span>
      </div>
    </div>
  );
};

export default City;
