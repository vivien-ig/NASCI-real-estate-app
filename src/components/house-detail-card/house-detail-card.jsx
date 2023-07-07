import React from "react";
import "./house-detail-card.css";
import house from "./background-img.png";
import { BlackBtn, GrayBtn } from "../buttons/buttons";
import { ReactSVG } from "react-svg";
import Bedrooms from "./bed.svg";
import SquareFeet from "./area.svg";
import Bathrooms from "./bathtub.svg";

// Pass Color as a prop
const ComponentsHouseDetailCard = () => (
  <div className="house-detail-card">
    <img src={house} alt="house" />
    <div className="house-details-data">
      <div className="house-details-top">
        <span className="house-details-forsale">For Sale</span>
        <span className="house-details-days">10 Days</span>
      </div>
      <h4>9789 Riverview CourtTrenton, ON K8V 3S0</h4>
      <span>$30 000</span>
      <div className="house-details-info">
        <span className="house-details-bedrooms">
          <ReactSVG src={Bedrooms} />
          &nbsp; &nbsp; <span>2 Bedrooms</span>
        </span>
        <span className="house-details-bathrooms">
          <ReactSVG src={Bathrooms} />
          &nbsp; &nbsp; <span>2 Bathrooms</span>
        </span>
        <span className="house-details-squarefeet">
          <ReactSVG src={SquareFeet} />
          &nbsp; &nbsp; <span>5 square feet</span>
        </span>
      </div>
      <div className="house-details-btns">
        <GrayBtn />
        <BlackBtn />
      </div>
    </div>
  </div>
);

export default ComponentsHouseDetailCard;
