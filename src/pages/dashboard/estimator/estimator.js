import React from "react";
import "./estimator.css";
import { BtnComp } from "../../../components/buttons/buttons";

const Estimator = () => (
  <div className="estimator">
    <span className="estimates_title">Estimates</span>
    <h2>
      Enter your address and get accurate estimates based on our <br />
      <span>
        <em>~ variometrics</em>
      </span>
    </h2>
    <div className="get-estimates">
      <label htmlFor="">Your Address</label>
      <br />
      <input
        type="text"
        placeholder="Type Address or click icon to select from map"
      />
      <BtnComp title="Get Estimates" color="btn-black" />
    </div>
  </div>
);

export default Estimator;
