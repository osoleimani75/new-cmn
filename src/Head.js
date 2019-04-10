import React, { Component } from 'react';
import './theme/css/app.css';
import './theme/css/head.css';
import gpsIcon from "./theme/images/gps.svg";

class Head extends Component {
  render() {
    return (
              <div className="topLineMenu">
                  <div className="container">
                      <div id="login-link">
                            <a href="/login" >Login</a>
                      </div>
                      <div className="__location">
                            <input id="locationSpot" type="text" placeholder="Location..." />
                            <button class="btn-gps" type="button">
                                <img src={gpsIcon} alt="Logo" />
                            </button>
                      </div>
                  </div>
              </div>      
    );
  }
}


export default Head;
