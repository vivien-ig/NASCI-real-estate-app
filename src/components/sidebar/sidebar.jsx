import React from "react";
import "./sidebar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Overview from "../../assets/dashboardicons/overview.svg";
import Property from "../../assets/dashboardicons/buildings.svg";
import WatchList from "../../assets/dashboardicons/eye.svg";
import MarketTrends from "../../assets/dashboardicons/diagram.svg";
import Map from "../../assets/dashboardicons/map.svg";
import News from "../../assets/dashboardicons/document-text.svg";
import Estimator from "../../assets/dashboardicons/calculator.svg";
import Setting from "../../assets/dashboardicons/setting.svg";
import HelpSupport from "../../assets/dashboardicons/message-question.svg";
import { ReactSVG } from "react-svg";

const Sidebar = () => (
  <div style={{ display: "flex", position: "relative" }}>
    <div className="sidebar">
      <div className="sidebar_logo">
        <img src={logo} alt="Logo file" />
      </div>

      <div className="sidebar_details">
        <ul>
          <li>
            <Link to="/dashboard/overview">
              <ReactSVG src={Overview} />
              <span>Overview</span>
            </Link>
          </li>
          <li>
            {" "}
            <ReactSVG src={Property} />
            <span>Property</span>
          </li>
          <li>
            {" "}
            <ReactSVG src={WatchList} />
            <span>Watch List</span>
          </li>
          <li>
            {" "}
            <ReactSVG src={MarketTrends} />
            <span>Market Trends</span>
          </li>
          <li>
            {" "}
            <ReactSVG src={Map} />
            <span>Map</span>
          </li>
          <li>
            {" "}
            <ReactSVG src={News} />
            <span>News</span>
          </li>
          <li>
            {" "}
            <ReactSVG src={Estimator} />
            <span>Estimator</span>
          </li>
        </ul>
      </div>
      <div className="settings_profile">
        <ul>
          <li>
            {" "}
            <ReactSVG src={Setting} />
            <span>Settings</span>
          </li>
          <li>
            {" "}
            <ReactSVG src={HelpSupport} />
            <span>Help & Support</span>
          </li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Sidebar;
