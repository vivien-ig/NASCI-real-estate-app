import React from "react";
import "./overview.css";
import Calendar from "../../../assets/calendar.svg";
import Location from "../../../assets/dashboardicons/location.svg";
import newsImg from "./news_placeholder.svg";
import { ReactSVG } from "react-svg";
import { v4 as uuidv4 } from "uuid";
// import MapComp from "src/components/mapComp/mapComp";
import { SearchComp } from "src/components/search-comp/seacrch-comp";
import Map from "../../../components/map/map";

const newsListArray = [1, 2, 3, 4, 5, 6];

const Overview = () => {
  document.title = "Overview";

  return (
    <div className="overview">
      <div className="overview_info">
        <SearchComp title="Filter" placeholder="Search" />
        <br />
        <div className="overview_info_details">
          <h3>Home</h3>
          <br />
          <br />
          <span>
            Location: &nbsp;
            <ReactSVG src={Location} /> &nbsp;&nbsp;Ontario
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
          <h4>News</h4>
          <div className="news_list">
            {newsListArray.map((el) => (
              <div key={uuidv4()} className="news_card">
                <div className="news_card_img">
                  <img src={newsImg} alt="News" />
                </div>
                <div className="news_card_title">
                  <h4>Government of Canada increases tax on real estate</h4>
                </div>
                <div className="news_card_date">
                  <ReactSVG className="svg_icons" src={Calendar} />
                  <span>9, Jan, 2022</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="major_construction_zones">
          <h2>Major Construction</h2> <br />{" "}
          <Map size={{ width: "47.5vw", height: "50vh" }} />
        </div>
        <div className="overview_maps">
          <h2> Map </h2>
          <br />
          <Map size={{ width: "72.5vw", height: "60vh" }} />{" "}
        </div>
      </div>
    </div>
  );
};
export default Overview;
