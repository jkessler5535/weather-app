import React from 'react';
import '../Styles/Home.css';
import Sky from '../Images/sky.jpg';


const Home = () => {
  return (
  <div className="container background">
    <div>
      <div className="app">
          <div className="display-weather">
              <div className="weather-app-h1">
                <h1>Weather App</h1>
              </div>
            <div className="location">
              <div className="city-temp">
                  <div className="temperature">
                    <h2>29&#176;</h2>
                  </div>
                  <div className="city">
                    <h2>Dhaka</h2>
                  <div>
                   <p className="date">9:30am - Friday, 27 May '22</p>
                   <p className="date date-right">Partly Cloudy</p>
                  </div>
              </div>
              </div>
            </div>
              
         
              <div className="calendar">
                <div className="box">May 28</div>
                <div className="box">May 29</div>
                <div className="box">May 30</div>
                <div className="box">May 31</div>
                <div className="box"> June 01</div>
                <div className="box">June 02</div>
                <div className="box">June 03</div>
              </div>
          </div>
      
          
          <div className="details-container">
              <div className="weather-details">
                <div className="heading">
                  <h2>Weather Details</h2>
                </div>
                <div className="underline"></div>
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
                      <li>62%</li>
                      <li>8km/h</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="hours-container">
                <div className="heading">
                  <h2>Next Hours</h2>
                </div>
                <div className="underline"></div>
                <div class="grid-container">
                  <div class="left-column">
                    <ul>
                      <li>10am</li>
                      <li>11am</li>
                      <li>12pm</li>
                      <li>1pm</li>
                      <li>2pm</li>
                    </ul>
                  </div>
                  <div class="right-column-2">
                    <div className="right-column">
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
  </div>
  );
};

export default Home;