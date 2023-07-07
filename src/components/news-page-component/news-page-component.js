import React from "react";
import "./news-page-component.css";
import HomeImg from "./background-img.png";

const NewsPageComponent = () => (
  <div className="news-page-component">
    <img src={HomeImg} alt="home" />
    <div className="news-page-component-details">
      <h3>Real Estate Market Booms as Home Sales Reach All-Time High</h3>
      <br />
      <p>
        The real estate market is on fire as home sales have reached an all-time
        high, according to a recent report. This is great news for sellers, as
        properties are flying off the market at record pace, with many selling
        above the ..
      </p>
      <br />
      <p>Jan 09, 2023 by Real Agent</p>
    </div>
  </div>
);

export default NewsPageComponent;
