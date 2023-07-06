import React from "react";
import "./overview.css";

const Overview = () => (
  <div className="overview">
    <div className="overview_info">
      <input placeholder="Search" type="text" />
      <br />
      Home
    </div>
    <div className="overview_details">
      <div className="sales_price">
        <div className="sales_des">
          National Median Home <br /> Sales Price
        </div>
        <div className="sales_cost">$350 000</div>
        <div className="sales_date"> Dec 2023</div>
      </div>
      <div className="listings">
        <div className="listings_title">Total New Listings </div>
        <div className="listings_number">324</div>
        <div className="listings_date">1 - 7 Jan , 22</div>
      </div>
      <div className="news">
        <h2>News</h2>
        <div className="news_list">
          <div className="news_card">Image Description Date</div>
          <div className="news_card">Image Description Date</div>
          <div className="news_card">Image Description Date</div>
          <div className="news_card">Image Description Date</div>
        </div>
      </div>
      <div className="major_construction_zones">Major Construction</div>
      <div className="maps">Maps</div>
    </div>
  </div>
);

export default Overview;
