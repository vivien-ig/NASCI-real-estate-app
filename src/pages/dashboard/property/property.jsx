import React from "react";
import "./property.css";
import ComponentsHouseDetailCard from "../../../components/house-detail-card/house-detail-card";
import { v4 as uuidv4 } from "uuid";
import { BlackBtn } from "../../../components/buttons/buttons";

const Property = () => (
  <>
    <section className="property">
      <div className="property_head">
        <div className="property_search">
          <input
            type="text"
            placeholder="Search Address Keyword"
            name=""
            id=" "
          />
          <BlackBtn />
        </div>
        <span>Quick Filter</span>
        <div className="property_select">
          <select placeholder="Active Listings" name="" id="">
            <option value="Active">Active</option>
          </select>
          <select placeholder="Active Listings" name="" id="">
            <option value="Active">Active</option>
          </select>
          <select placeholder="Active Listings" name="" id="">
            <option value="Active">Active</option>
          </select>
        </div>
      </div>

      <div className="property_feature">
        <h2>Feature</h2>
        <br />
        <div className="property_feature_cards">
          {[2, 2, 2, 2, 2, 2, 2].map((el) => {
            return <ComponentsHouseDetailCard key={uuidv4()} />;
          })}
        </div>
      </div>
    </section>
  </>
);

export default Property;
