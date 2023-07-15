import React from "react";
// Pass color of text, border and background color as props
import "./search-comp.css";
import { BtnComp } from "../buttons/buttons";

export function SearchComp(props) {
  return (
    <div className="search-comp">
      <input
        className="search_input"
        type="text"
        placeholder={props.placeholder}
        name=""
        id=" "
      />
      <BtnComp title={props.title} color="btn-black" />
    </div>
  );
}
