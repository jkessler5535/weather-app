import React from 'react';
import '../Styles/Home.css';


const Home = () => {
  return (
  <div className="container">
    <div className="app">
     
        <div className="display-weather">
          <div className="location">
            <div className="weather-app-h1">
              <h1>Weather App</h1>
            </div>
            <div className="city-temp">
              <h2 className="temperature">Temperature</h2>
              <h2 className="city">City</h2>
            </div>
          </div>
          <div className="calendar">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>

        <div className="details-container">
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
                  <li>37&#176;</li>
                  <li>86%</li>
                  <li>12pm</li>
                  <li>62%</li>
                  <li>8km/h</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hours-container">
            <div>
              <h2>Next Hours</h2>
            </div>
            <div></div>
            <div class="grid-container">
              <div class="left-column-2">
                <ul>
                  <li>10am</li>
                  <li>11am</li>
                  <li>12pm</li>
                  <li>1pm</li>
                  <li>2pm</li>
                </ul>
              </div>
              <div class="right-column-2">
                <div className="right-column-2">
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
      
    </div>
  </div>
  );
};

export default Home;