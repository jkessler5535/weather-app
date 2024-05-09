import React from 'react';
import '../Styles/Home.css';


const Home = () => {
  return (
   <div className="container">
    <div className="app">
      <div className="display-weather">
        <div className="location">
          <h1>Weather App</h1>
          <div>
            <h2 id="temperature">Temperature</h2>
            <h2 id="city">City</h2>
          </div>
        </div>
        <div className="calendar">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="weather-details">
        <h2>Weather Details</h2>
        <div></div>
        <div className="grid-container">
          <div className="left-column">
            <ul>
              <li>Feels like</li>
              <li>Cloudy</li>
              <li>Humidity</li>
              <li>Wind</li>
            </ul>
          </div>
          <div className="right-column">
            <ul>
              <li>10am</li>
              <li>11am</li>
              <li>12pm</li>
              <li>1pm</li>
              <li>2pm</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="next-hours">
        <h2>Next Hours</h2>
        <div></div>
        <div class="grid-container">
          <div class="left-column-2">
            <ul>
              <li>37&#176;</li>
              <li>86%</li>
              <li>62%</li>
              <li>8km/h</li>
            </ul>
          </div>
          <div class="right-column-2">
            <ul>
              <li>30&#176;</li>
              <li>31&#176;</li>
              <li>31&#176;</li>
              <li>31&#176;</li>
              <li>31&#176;</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;