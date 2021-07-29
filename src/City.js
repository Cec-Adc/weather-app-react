import React from "react";

import "./City.css";

export default function City() {
  return (
    <div className="city">
      <section className="info-searched-city">
        <h1 id="current-city">Hamburg</h1>
        <div className="current-temperature">
          <span id="temp">24</span>°C
        </div>
        <p className="date-hour">
          Last updated: <span id="day">Monday</span>,<span id="hour">17</span>:
          <span id="minutes">30</span>
        </p>
      </section>
      <br />
      <div className="row">
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="main-icon"
            className="main-icon"
            id="icon"
          />
        </div>
        <div className="col-8">
          <p className="description" id="description">
            Clear Sky
          </p>
          <p className="precipitation">
            Humidity: <span id="humidity">38</span>%
          </p>
          <p className="wind">
            Wind: <span id="windspeed">4</span> km/h
          </p>
        </div>
      </div>
    </div>
  );
}
