import React from "react";
import "./property-detail.css";
import { SearchComp } from "src/components/search-comp/seacrch-comp";
import { Link } from "react-router-dom";
import NewsImg from "./property_detail.png";

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
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
