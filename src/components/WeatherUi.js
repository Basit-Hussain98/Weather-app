import React from "react";
import "./WeatherUi.css";

function WeatherUi(props) {
  return (
    <div className="container">
      <div className="form-control">
        <input
          onChange={props.inputHandler}
          type="text"
          className="input-form"
          placeholder="Enter Location"
          value={props.value}
        />
        <button className="btn" onClick={props.btnHandler}>
          Check
        </button>
      </div>

      {!props.weatherData ? (
        <p>No data found</p>
      ) : (
        <div>
          <div className="location-container">
            <div className="icon">
              <i className="fab fa-3x fa-accessible-icon"></i>
            </div>
            <h1 className="location">{props.submitValue}</h1>
            <br />
          </div>

          <h1 className="location">{props.weatherData.main.temp} F</h1>

          <div className="temperature-limit">
            <h4>{props.weatherData.main.temp_min}F</h4>
            <div className="sized-box">|</div>
            <h4> {props.weatherData.main.temp_max}F</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherUi;
