import React, { useState, useEffect } from "react";
import WeatherUi from "./WeatherUi";

function Weather() {
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState("Islamabad");
  const [weatherData, setWeatherData] = useState(null);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitValue(inputValue);
  };

  const fetchApi = () => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${submitValue}&appid=48bb384db0a14f8569c91ca1717fbc7d`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchApi();
  }, [submitValue]);

  return (
    <div>
      <WeatherUi
        inputHandler={inputHandler}
        value={inputValue}
        btnHandler={submitHandler}
        weatherData={weatherData}
        submitValue={submitValue}
      />
    </div>
  );
}

export default Weather;
