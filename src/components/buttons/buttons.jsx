import React from "react";
// Pass color of text, border and background color as props
import "./buttons.css";

export function GrayBtn() {
  return (
    <div>
      <button className="btn btn-grey">Make Enquiry</button>
    </div>
  );
}

export function BlackBtn() {
  return (
    <div>
      <button className="btn btn-black">View Details</button>
    </div>
  );
}
