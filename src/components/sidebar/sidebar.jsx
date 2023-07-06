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
            <Link className="link_el" to="/dashboard/overview">
              <ReactSVG className="svg_icons" src={Overview} />
              <span>Overview</span>
            </Link>
          </li>
          <li>
            <Link className="link_el" to="/dashboard/property">
              <ReactSVG className="svg_icons" src={Property} />
              <span>Property</span>
            </Link>
          </li>
          <li>
            <Link className="link_el" to="/dashboard/watchlist">
              <ReactSVG className="svg_icons" src={WatchList} />
              <span>WatchList</span>
            </Link>
          </li>
          <li>
            <Link className="link_el" to="/dashboard/market-trends">
              <ReactSVG className="svg_icons" src={MarketTrends} />
              <span>MarketTrends</span>
            </Link>
          </li>
          <li>
            <Link className="link_el" to="/dashboard/map">
              <ReactSVG className="svg_icons" src={Map} />
              <span>Map</span>
            </Link>
          </li>
          <li>
            <Link className="link_el" to="/dashboard/mews">
              <ReactSVG className="svg_icons" src={News} />
              <span>News</span>
            </Link>
          </li>
          <li>
            <Link className="link_el" to="/dashboard/estimator">
              <ReactSVG className="svg_icons" src={Estimator} />
              <span>Estimator</span>
            </Link>
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
