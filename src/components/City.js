import React, { useEffect, useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { API_KEY, API_BASE_URL } from "../apis/config";

const City = ({ onSearch }) => {
  const [city, setCity] = useState("");

  // filter by search
  const filterSearch = (event) => {
    const val = event.target.value.toLowerCase();
    const filterbyName = city.filter((c) =>
      `${c.city.name}`.toLowerCase().includes(val)
    );
    setCity(filterbyName);
  };
  //
  return (
    <>
      <div className="card_container">
        <div className="inp">
          <span className="sp_input">
            <input
              placeholder="Enter city"
              type="text"
              onChange={(event) => setCity(event.target.value)}
              value={city}
              onInput={filterSearch}
            />
          </span>
          <span className="sp_btn">
            <button onClick={() => onSearch(city)} className="input">
              Check Weather
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default City;
