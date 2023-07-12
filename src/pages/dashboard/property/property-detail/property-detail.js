import React from "react";
import "./property-detail.css";
import { SearchComp } from "src/components/search-comp/seacrch-comp";
import { Link } from "react-router-dom";
import NewsImg from "./property_detail.png";
import { ReactSVG } from "react-svg";
import Estimator from "../../../../assets/dashboardicons/calculator.svg";

import Bedrooms from "../../../../assets/properties/bed.svg";
import SquareFeet from "../../../../assets/properties/area.svg";
import Bathrooms from "../../../../assets/properties/bathtub.svg";
import Car from "../../../../assets/properties/car.svg";

const PropertyDetail = () => {
  return (
    <>
      <div className="property_detail">
        {" "}
        <SearchComp title="Filter" />
        <Link className="link_el" to="/property">
          All properties 9789 Riverton CourtTr..{" "}
        </Link>
        <br />
        <img style={{ width: "100%" }} src={NewsImg} alt="home" />
        <div className="property_detail_info">
          <ol>
            <li>Listed 10 Days ago &bull; For Sale &bull; For Rent</li>
            <br />
            <li>
              <h2>9789 Riverview CourtTrenton, ON K8V 3S0</h2>
            </li>
            <br />
            <li>
              <span>
                <strong>$3,000,000</strong> <br /> Listed Price{" "}
              </span>{" "}
              <span>
                <strong>$4,500 </strong>
                <br /> Rent Price
              </span>
              <ReactSVG className="svg_icons" src={Estimator} />
              &nbsp; View Estimates &nbsp; &nbsp; View Price History
            </li>
            <li>
              <ol>
                <li>
                  <ReactSVG className="svg_icons" src={Bedrooms} />
                  &nbsp; 2 Bedrooms
                </li>
                <li>
                  <ReactSVG className="svg_icons" src={Bathrooms} />
                  &nbsp; 2 Bathrooms
                </li>
                <li>
                  <ReactSVG className="svg_icons" src={SquareFeet} />
                  &nbsp; 1000 - 1500 square feet
                </li>
                <li>
                  <ReactSVG className="svg_icons" src={Car} /> &nbsp; 2 Car
                  Garage
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
