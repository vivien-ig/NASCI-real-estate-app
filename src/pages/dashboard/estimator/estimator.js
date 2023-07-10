import React from "react";
import "./estimator.css";
import { BlackBtn } from "../../../components/buttons/buttons";

const Estimator = () => (
  <div className="estimator">
    Estimates
    <h2>
      Enter your address and get accurate estimates based on our{" "}
      <span>- variometrics</span>
    </h2>
    <div className="get-estimates">
      <label htmlFor="">Your Address</label>
      <input
        type="text"
        placeholder="Type Address or click icon to select from map"
      />
      <BlackBtn />
    </div>
  </div>
);

export default Estimator;
