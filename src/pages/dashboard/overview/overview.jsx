import React from "react";
import "./overview.css";
import Calendar from "../../../assets/calendar.svg";
import Location from "../../../assets/dashboardicons/location.svg";
import newsImg from "./news_placeholder.svg";
import { ReactSVG } from "react-svg";
import { v4 as uuidv4 } from "uuid";
import MapComp from "src/components/mapComp/mapComp";
import { SearchComp } from "src/components/search-comp/seacrch-comp";

const newsListArray = [1, 2, 3, 4];

const Overview = () => (
  <div className="overview">
    <div className="overview_info">
      <SearchComp title="Filter" placeholder="Search" />
      <br />
      <div className="overview_info_details">
        <span>Home</span>
        <br />
        <br />
        <span>
          Location: <ReactSVG src={Location} /> &nbsp;&nbsp;&nbsp;Ontario
        </span>
      </div>
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
          {newsListArray.map((el) => (
            <div key={uuidv4()} className="news_card">
              <div className="news_card_img">
                <img src={newsImg} alt="News" />
              </div>
              <div className="news_card_title">
                Government of Canada increases tax on real estate
              </div>
              <div className="news_card_date">
                <ReactSVG className="svg_icons" src={Calendar} />
                <span>9, Jan, 2022</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="major_construction_zones">Major Construction</div>
      <div className="overview_maps">
        Maps
        <MapComp />
      </div>
    </div>
  </div>
);

export default Overview;
