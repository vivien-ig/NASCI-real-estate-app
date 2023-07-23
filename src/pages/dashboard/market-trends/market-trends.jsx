import React from "react";
import "./market-trends.css";
import { SearchComp } from "src/components/search-comp/seacrch-comp";
import Notification from "../../../assets/dashboardicons/notification.svg";
import DollarCircle from "../../../assets/dashboardicons/watchlist/dollar-circle.svg";
import Listings from "../../../assets/dashboardicons/watchlist/note.svg";
import Uptrend from "../../../assets/dashboardicons/watchlist/trend-up.svg";
import MessageQuestion from "../../../assets/dashboardicons/watchlist/message-question.svg";
import Activity from "../../../assets/dashboardicons/watchlist/activity.svg";
import { ReactSVG } from "react-svg";

const MarketTrends = () => {
  document.title = "Market Trends";

  return (
    <div className="market-trends">
      <SearchComp title="Filter" placeholder="Search" />
      <div className="market_trends_title">
        <span className="lte-font-weight">
          General Analytics &nbsp; &nbsp;
          <strong>Market Trends</strong>
        </span>
        <span className="lte-font-weight">
          <ReactSVG className="svg_icons" src={Notification} />
          Receive Notifications for this market
        </span>
      </div>

      <div className="market_trends_filter">
        <div className="market_trends_element">
          <label htmlFor="">Province</label>
          <br />
          <br />
          <select name="" id="">
            <option value="British Columbia">British Columbia</option>
          </select>
        </div>
        <div className="market_trends_element">
          <label htmlFor="">Regional Area</label>
          <br />
          <br />
          <select name="" id="">
            <option value="British Columbia">Metro Vancuvar</option>
          </select>
        </div>
        <div className="market_trends_element">
          <label htmlFor="">City</label>
          <br />
          <br />
          <select name="" id="">
            <option value="British Columbia">Langley</option>
          </select>
        </div>
        <div className="market_trends_element">
          <label htmlFor="">Community</label>
          <br />
          <br />
          <select name="" id="">
            <option value="British Columbia">Brookswood Langsley</option>
          </select>
        </div>
        <div className="market_trends_element">
          <label htmlFor="">Property Type</label>
          <br />
          <br />
          <select name="" id="">
            <option value="British Columbia">All property Type</option>
          </select>
        </div>
      </div>

      <div className="market_trends_filter_description">
        <div className="market_trends_filter_description_title">
          <br />
          <br />
          <span>Displaying for: </span>
          <br />
          <br />
          <div className="flex-row space-between">
            {" "}
            <span className="little-text">
              Langley / Brookswood Langley / All Property Types
            </span>
            <span className="lte-font-weight">Last Updated: 10 Jan, 2023</span>
          </div>
        </div>
        <div className="market_trends_filter_description_info">
          <div className="market_trends_filter_description_info_general">
            <h4>General Info</h4>
            <br />
            <span className="lte-font-weight">December 2022</span>
            <br />
            <br />
            <div className="market_trends_filter_description_info_general_details">
              <div className="median_price">
                <ReactSVG src={DollarCircle} />
                <span className="flex-row">
                  Median Price <ReactSVG src={MessageQuestion} />
                </span>{" "}
                <br />
                <span className="flex-row">
                  $1,500,000 <ReactSVG src={Uptrend} />{" "}
                </span>
              </div>
              <div className="listings_el">
                <ReactSVG src={Listings} />
                <span className="flex-row">
                  News Listings <ReactSVG src={MessageQuestion} />
                </span>{" "}
                <br />
                <span>5</span>
              </div>
            </div>
            <div className="market_trends_filter_description_info_marketinfo">
              <div className="market_trends_filter_description_info_marketinfo_title">
                <h4>Market Info</h4>
              </div>
              <div className="market_trends_filter_description_info_marketinfo_details">
                <ReactSVG src={Activity} />
                <span className="flex-row">
                  Value Change <ReactSVG src={MessageQuestion} />
                </span>
                <span className="flex-row">
                  +3%
                  <ReactSVG
                    beforeInjection={(svg) => {
                      svg.classList.add("svg-class-name");
                    }}
                    src={Uptrend}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;
