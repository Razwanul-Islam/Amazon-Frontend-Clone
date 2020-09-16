import React, { Component } from "react";
import "./banner.css";
class Banner extends Component {
  state = {};
  render() {
    return (
      <div className="banner">

        <div className="label">

          <div className="deliver">
            <span className="s1">Deliver to</span>
            <span>Bangladesh</span>
          </div>

          <div className="label-menu">
            <ul>
            
              <li> <a>Todays Deal</a></li>
              <li><a>Customer Service</a></li>
              <li><a>Gift Cards</a></li>
              <li><a>Registry</a></li>
              <li><a>Sell</a></li>
            </ul>
          </div>

          <div className="support">
              <span>Amazon Support to Covid-19</span>
          </div>
        </div>
        <div className="img">
            <img src="./assets/banner1.jpg" alt=""/>
        </div>
      </div>
    );
  }
}

export default Banner;
